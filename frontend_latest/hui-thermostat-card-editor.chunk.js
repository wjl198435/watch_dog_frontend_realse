(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-thermostat-card-editor"],{

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
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










/*
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,

  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});


/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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








/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,

  is: 'paper-item-body'
});


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

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
    if (typeof value !== "string") {
        return "entity id should be a string";
    }
    if (!value.includes(".")) {
        return "entity id should be in the format 'domain.entity'";
    }
    return true;
}


/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
    if (typeof value !== "string") {
        return "icon should be a string";
    }
    if (!value.includes(":")) {
        return "icon should be in the format 'mdi:icon'";
    }
    return true;
}


/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
    types: {
        "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
        icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"],
    },
});


/***/ }),

/***/ "./src/panels/lovelace/components/hui-theme-select-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-theme-select-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiThemeSelectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiThemeSelectEditor", function() { return HuiThemeSelectEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




let HuiThemeSelectEditor = class HuiThemeSelectEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        const themes = ["Backend-selected", "default"].concat(Object.keys(this.hass.themes.themes).sort());
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <paper-dropdown-menu
        .label=${this.label ||
            this.hass.localize("ui.panel.lovelace.editor.card.generic.theme") +
                " (" +
                this.hass.localize("ui.panel.lovelace.editor.card.config.optional") +
                ")"}
        dynamic-align
        @value-changed="${this._changed}"
      >
        <paper-listbox
          slot="dropdown-content"
          .selected="${this.value}"
          attr-for-selected="theme"
        >
          ${themes.map((theme) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-item theme="${theme}">${theme}</paper-item>
            `;
        })}
        </paper-listbox>
      </paper-dropdown-menu>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      paper-dropdown-menu {
        width: 100%;
      }
    `;
    }
    _changed(ev) {
        if (!this.hass || ev.target.value === "") {
            return;
        }
        this.value = ev.target.value;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "theme-changed");
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThemeSelectEditor.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThemeSelectEditor.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThemeSelectEditor.prototype, "hass", void 0);
HuiThemeSelectEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-theme-select-editor")
], HuiThemeSelectEditor);



/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/config-elements-style.ts ***!
  \*****************************************************************************/
/*! exports provided: configElementStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configElementStyle", function() { return configElementStyle; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configElementStyle = lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
  <style>
    ha-switch {
      padding: 16px 0;
    }
    .side-by-side {
      display: flex;
    }
    .side-by-side > * {
      flex: 1;
      padding-right: 4px;
    }
    .suffix {
      margin: 0 8px;
    }
  </style>
`;


/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/hui-thermostat-card-editor.ts":
/*!**********************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-thermostat-card-editor.ts ***!
  \**********************************************************************************/
/*! exports provided: HuiThermostatCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiThermostatCardEditor", function() { return HuiThermostatCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");








const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"])({
    type: "string",
    entity: "string",
    name: "string?",
    theme: "string?",
});
let HuiThermostatCardEditor = class HuiThermostatCardEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
    }
    get _entity() {
        return this._config.entity || "";
    }
    get _name() {
        return this._config.name || "";
    }
    get _theme() {
        return this._config.theme || "default";
    }
    render() {
        if (!this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_7__["configElementStyle"]}
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass="${this.hass}"
          .value="${this._entity}"
          .configValue=${"entity"}
          domain-filter="climate"
          @change="${this._valueChanged}"
          allow-custom-entity
        ></ha-entity-picker>
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._name}"
          .configValue="${"name"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <hui-theme-select-editor
          .hass="${this.hass}"
          .value="${this._theme}"
          .configValue="${"theme"}"
          @theme-changed="${this._valueChanged}"
        ></hui-theme-select-editor>
      </div>
    `;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (this[`_${target.configValue}`] === target.value) {
            return;
        }
        if (target.configValue) {
            if (target.value === "") {
                delete this._config[target.configValue];
            }
            else {
                this._config = Object.assign(Object.assign({}, this._config), { [target.configValue]: target.value });
            }
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", { config: this._config });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThermostatCardEditor.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThermostatCardEditor.prototype, "_config", void 0);
HuiThermostatCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-thermostat-card-editor")
], HuiThermostatCardEditor);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXRoZXJtb3N0YXQtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvaXMtZW50aXR5LWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvaXMtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2NvbmZpZy1lbGVtZW50cy1zdHlsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvaHVpLXRoZXJtb3N0YXQtY2FyZC1lZGl0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgdHlwZSBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgPSAoZW50aXR5SWQ6IEhhc3NFbnRpdHkpID0+IGJvb2xlYW47XG5cbmNvbnN0IHJvd1JlbmRlcmVyID0gKFxuICByb290OiBIVE1MRWxlbWVudCxcbiAgX293bmVyLFxuICBtb2RlbDogeyBpdGVtOiBIYXNzRW50aXR5IH1cbikgPT4ge1xuICBpZiAoIXJvb3QuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICByb290LmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tpdGVtXV1cIiBzbG90PVwiaXRlbS1pY29uXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPltbX2NvbXB1dGVTdGF0ZU5hbWUoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PltbaXRlbS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIGA7XG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdGF0ZS1iYWRnZVwiKSEuc3RhdGVPYmogPSBtb2RlbC5pdGVtO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKSEudGV4dENvbnRlbnQgPSBjb21wdXRlU3RhdGVOYW1lKG1vZGVsLml0ZW0pO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJbc2Vjb25kYXJ5XVwiKSEudGV4dENvbnRlbnQgPSBtb2RlbC5pdGVtLmVudGl0eV9pZDtcbn07XG5cbmNsYXNzIEhhRW50aXR5UGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGF1dG9mb2N1cz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiBcImFsbG93LWN1c3RvbS1lbnRpdHlcIiB9KVxuICBwdWJsaWMgYWxsb3dDdXN0b21FbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJkb21haW4tZmlsdGVyXCIgfSkgcHVibGljIGRvbWFpbkZpbHRlcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGVudGl0eUZpbHRlcj86IEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYztcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9vcGVuZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBwcml2YXRlIF9nZXRTdGF0ZXMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIGhhc3M6IHRoaXNbXCJoYXNzXCJdLFxuICAgICAgZG9tYWluRmlsdGVyOiB0aGlzW1wiZG9tYWluRmlsdGVyXCJdLFxuICAgICAgZW50aXR5RmlsdGVyOiB0aGlzW1wiZW50aXR5RmlsdGVyXCJdXG4gICAgKSA9PiB7XG4gICAgICBsZXQgc3RhdGVzOiBIYXNzRW50aXR5W10gPSBbXTtcblxuICAgICAgaWYgKCFoYXNzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGxldCBlbnRpdHlJZHMgPSBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcyk7XG5cbiAgICAgIGlmIChkb21haW5GaWx0ZXIpIHtcbiAgICAgICAgZW50aXR5SWRzID0gZW50aXR5SWRzLmZpbHRlcihcbiAgICAgICAgICAoZWlkKSA9PiBlaWQuc3Vic3RyKDAsIGVpZC5pbmRleE9mKFwiLlwiKSkgPT09IGRvbWFpbkZpbHRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZXMgPSBlbnRpdHlJZHMuc29ydCgpLm1hcCgoa2V5KSA9PiBoYXNzIS5zdGF0ZXNba2V5XSk7XG5cbiAgICAgIGlmIChlbnRpdHlGaWx0ZXIpIHtcbiAgICAgICAgc3RhdGVzID0gc3RhdGVzLmZpbHRlcihcbiAgICAgICAgICAoc3RhdGVPYmopID0+XG4gICAgICAgICAgICAvLyBXZSBhbHdheXMgd2FudCB0byBpbmNsdWRlIHRoZSBlbnRpdHkgb2YgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHN0YXRlT2JqLmVudGl0eV9pZCA9PT0gdGhpcy52YWx1ZSB8fCBlbnRpdHlGaWx0ZXIhKHN0YXRlT2JqKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSAmJiAhdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oYXNzID0gdGhpcy5oYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLl9nZXRTdGF0ZXMoXG4gICAgICB0aGlzLl9oYXNzLFxuICAgICAgdGhpcy5kb21haW5GaWx0ZXIsXG4gICAgICB0aGlzLmVudGl0eUZpbHRlclxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cImVudGl0eV9pZFwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cImVudGl0eV9pZFwiXG4gICAgICAgIC5pdGVtcz0ke3N0YXRlc31cbiAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgIC5hbGxvd0N1c3RvbVZhbHVlPSR7dGhpcy5hbGxvd0N1c3RvbUVudGl0eX1cbiAgICAgICAgLnJlbmRlcmVyPSR7cm93UmVuZGVyZXJ9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAuYXV0b2ZvY3VzPSR7dGhpcy5hdXRvZm9jdXN9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2hhc3NcbiAgICAgICAgICAgID8gdGhpcy5faGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuZW50aXR5XCIpXG4gICAgICAgICAgICA6IHRoaXMubGFiZWx9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMudmFsdWVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGVhclwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIG5vLXJpcHBsZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7c3RhdGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IGVudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC5pY29uPSR7dGhpcy5fb3BlbmVkID8gXCJoYXNzOm1lbnUtdXBcIiA6IFwiaGFzczptZW51LWRvd25cIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGVcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktcGlja2VyXCIsIEhhRW50aXR5UGlja2VyKTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWVudGl0eS1waWNrZXJcIjogSGFFbnRpdHlQaWNrZXI7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQsIEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ0aGVtZS1jaGFuZ2VkXCI6IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBmb3IgYWRkIGV2ZW50IGxpc3RlbmVyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudEV2ZW50TWFwIHtcbiAgICBcInRoZW1lLWNoYW5nZWRcIjogSEFTU0RvbUV2ZW50PHVuZGVmaW5lZD47XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdGhlbWUtc2VsZWN0LWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVRoZW1lU2VsZWN0RWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHRoZW1lcyA9IFtcIkJhY2tlbmQtc2VsZWN0ZWRcIiwgXCJkZWZhdWx0XCJdLmNvbmNhdChcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuaGFzcyEudGhlbWVzLnRoZW1lcykuc29ydCgpXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbCB8fFxuICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnRoZW1lXCIpICtcbiAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApICtcbiAgICAgICAgICAgIFwiKVwifVxuICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl9jaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dGhpcy52YWx1ZX1cIlxuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwidGhlbWVcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGVtZXMubWFwKCh0aGVtZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIHRoZW1lPVwiJHt0aGVtZX1cIj4ke3RoZW1lfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9jaGFuZ2VkKGV2KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgZXYudGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidGhlbWUtY2hhbmdlZFwiKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIjogSHVpVGhlbWVTZWxlY3RFZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbmZpZ0VsZW1lbnRTdHlsZSA9IGh0bWxgXG4gIDxzdHlsZT5cbiAgICBoYS1zd2l0Y2gge1xuICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5zaWRlLWJ5LXNpZGUgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIC5zdWZmaXgge1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gIDwvc3R5bGU+XG5gO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IHsgRW50aXRpZXNFZGl0b3JFdmVudCwgRWRpdG9yVGFyZ2V0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuaW1wb3J0IHsgVGhlcm1vc3RhdENhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcblxuY29uc3QgY2FyZENvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIGVudGl0eTogXCJzdHJpbmdcIixcbiAgbmFtZTogXCJzdHJpbmc/XCIsXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS10aGVybW9zdGF0LWNhcmQtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpVGhlcm1vc3RhdENhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50XG4gIGltcGxlbWVudHMgTG92ZWxhY2VDYXJkRWRpdG9yIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IFRoZXJtb3N0YXRDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBUaGVybW9zdGF0Q2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGNvbmZpZyA9IGNhcmRDb25maWdTdHJ1Y3QoY29uZmlnKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBnZXQgX2VudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmVudGl0eSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEubmFtZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF90aGVtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRoZW1lIHx8IFwiZGVmYXVsdFwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjb25maWdFbGVtZW50U3R5bGV9XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb25maWdcIj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5lbnRpdHlcIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLnJlcXVpcmVkXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2VudGl0eX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1wiZW50aXR5XCJ9XG4gICAgICAgICAgZG9tYWluLWZpbHRlcj1cImNsaW1hdGVcIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hbWVcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3RoZW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICBAdGhlbWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG5cbiAgICBpZiAodGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBkZWxldGUgdGhpcy5fY29uZmlnW3RhcmdldC5jb25maWdWYWx1ZSFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0geyAuLi50aGlzLl9jb25maWcsIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlIH07XG4gICAgICB9XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS10aGVybW9zdGF0LWNhcmQtZWRpdG9yXCI6IEh1aVRoZXJtb3N0YXRDYXJkRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVlBO0FBSUE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBYUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXdHQTtBQXJHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFqSkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBeUlBOzs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQVNBO0FBR0E7QUFjQTtBQUtBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBT0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhGQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBQ0E7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==