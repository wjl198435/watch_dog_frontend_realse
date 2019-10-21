(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-sensor-card-editor"],{

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

/***/ "./src/panels/lovelace/editor/config-elements/hui-sensor-card-editor.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-sensor-card-editor.ts ***!
  \******************************************************************************/
/*! exports provided: HuiSensorCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiSensorCardEditor", function() { return HuiSensorCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");











const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_8__["struct"])({
    type: "string",
    entity: "string?",
    name: "string?",
    icon: "string?",
    graph: "string?",
    unit: "string?",
    detail: "number?",
    theme: "string?",
    hours_to_show: "number?",
});
let HuiSensorCardEditor = class HuiSensorCardEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
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
    get _icon() {
        return this._config.icon || "";
    }
    get _graph() {
        return this._config.graph || "none";
    }
    get _unit() {
        return this._config.unit || "";
    }
    get _detail() {
        return this._config.number || "1";
    }
    get _theme() {
        return this._config.theme || "default";
    }
    get _hours_to_show() {
        return this._config.hours_to_show || "24";
    }
    render() {
        if (!this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const graphs = ["line", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_10__["configElementStyle"]}
      <div class="card-config">
        <ha-entity-picker
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .hass="${this.hass}"
          .value="${this._entity}"
          .configValue=${"entity"}
          domain-filter="sensor"
          @change="${this._valueChanged}"
          allow-custom-entity
        ></ha-entity-picker>
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
          .value="${this._name}"
          .configValue="${"name"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <div class="side-by-side">
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._icon}"
            .configValue="${"icon"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-dropdown-menu
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.sensor.graph_type")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .configValue="${"graph"}"
            @value-changed="${this._valueChanged}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${graphs.indexOf(this._graph)}"
            >
              ${graphs.map((graph) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <paper-item>${graph}</paper-item>
                `;
        })}
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div class="side-by-side">
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.unit")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .value="${this._unit}"
            .configValue="${"unit"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.sensor.graph_detail")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            type="number"
            .value="${this._detail}"
            .configValue="${"detail"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
        <div class="side-by-side">
          <hui-theme-select-editor
            .hass="${this.hass}"
            .value="${this._theme}"
            .configValue="${"theme"}"
            @theme-changed="${this._valueChanged}"
          ></hui-theme-select-editor>
          <paper-input
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hours_to_show")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            type="number"
            .value="${this._hours_to_show}"
            .configValue="${"hours_to_show"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
        </div>
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
            if (target.value === "" ||
                (target.type === "number" && isNaN(Number(target.value)))) {
                delete this._config[target.configValue];
            }
            else {
                let value = target.value;
                if (target.type === "number") {
                    value = Number(value);
                }
                this._config = Object.assign(Object.assign({}, this._config), { [target.configValue]: value });
            }
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "config-changed", { config: this._config });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorCardEditor.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorCardEditor.prototype, "_config", void 0);
HuiSensorCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-sensor-card-editor")
], HuiSensorCardEditor);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXNlbnNvci1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktc2Vuc29yLWNhcmQtZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJJdGVtQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaXRlbS1iZWhhdmlvci5qcyc7XG5cbi8qXG5gPHBhcGVyLWljb24taXRlbT5gIGlzIGEgY29udmVuaWVuY2UgZWxlbWVudCB0byBtYWtlIGFuIGl0ZW0gd2l0aCBpY29uLiBJdCBpcyBhblxuaW50ZXJhY3RpdmUgbGlzdCBpdGVtIHdpdGggYSBmaXhlZC13aWR0aCBpY29uIGFyZWEsIGFjY29yZGluZyB0byBNYXRlcmlhbFxuRGVzaWduLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgaWNvbnMgYXJlIG9mIHZhcnlpbmcgd2lkdGhzLCBidXQgeW91IHdhbnQgdGhlIGl0ZW1cbmJvZGllcyB0byBsaW5lIHVwLiBVc2UgdGhpcyBsaWtlIGEgYDxwYXBlci1pdGVtPmAuIFRoZSBjaGlsZCBub2RlIHdpdGggdGhlIHNsb3Rcbm5hbWUgYGl0ZW0taWNvbmAgaXMgcGxhY2VkIGluIHRoZSBpY29uIGFyZWEuXG5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGlyb24taWNvbiBpY29uPVwiZmF2b3JpdGVcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9pcm9uLWljb24+XG4gICAgICBGYXZvcml0ZVxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvZGl2PlxuICAgICAgQXZhdGFyXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gYXJlYSB8IGA1NnB4YFxuYC0tcGFwZXItaXRlbS1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gYXJlYSB8IGB7fWBcbmAtLXBhcGVyLWljb24taXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWl0ZW0tc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW07XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24taXRlbTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaWNvbiB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1wYXBlci1pdGVtLWljb24td2lkdGgsIDU2cHgpO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50SWNvblwiIGNsYXNzPVwiY29udGVudC1pY29uXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiaXRlbS1pY29uXCI+PC9zbG90PlxuICAgIDwvZGl2PlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pY29uLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcblVzZSBgPHBhcGVyLWl0ZW0tYm9keT5gIGluIGEgYDxwYXBlci1pdGVtPmAgb3IgYDxwYXBlci1pY29uLWl0ZW0+YCB0byBtYWtlIHR3by1cbm9yIHRocmVlLSBsaW5lIGl0ZW1zLiBJdCBpcyBhIGZsZXggaXRlbSB0aGF0IGlzIGEgdmVydGljYWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cblxuVGhlIGNoaWxkIGVsZW1lbnRzIHdpdGggdGhlIGBzZWNvbmRhcnlgIGF0dHJpYnV0ZSBpcyBnaXZlbiBzZWNvbmRhcnkgdGV4dFxuc3R5bGluZy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdHdvLWxpbmUgaXRlbSB8IGA3MnB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHRocmVlLWxpbmUgaXRlbSB8IGA4OHB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvcmAgfCBGb3JlZ3JvdW5kIGNvbG9yIGZvciB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIG5lZWRlZCBmb3IgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgdG8gd29yayBvbiBmZiAqL1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3R3by1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodCwgNzJweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aHJlZS1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0LCA4OHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoW3NlY29uZGFyeV0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbS1ib2R5J1xufSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuXG5pbXBvcnQgXCIuL3N0YXRlLWJhZGdlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IHR5cGUgSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jID0gKGVudGl0eUlkOiBIYXNzRW50aXR5KSA9PiBib29sZWFuO1xuXG5jb25zdCByb3dSZW5kZXJlciA9IChcbiAgcm9vdDogSFRNTEVsZW1lbnQsXG4gIF9vd25lcixcbiAgbW9kZWw6IHsgaXRlbTogSGFzc0VudGl0eSB9XG4pID0+IHtcbiAgaWYgKCFyb290LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgcm9vdC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgbWFyZ2luOiAtMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbaXRlbV1dXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz5bW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5bW2l0ZW0uZW50aXR5X2lkXV08L2Rpdj5cbiAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICBgO1xuICB9XG5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwic3RhdGUtYmFkZ2VcIikhLnN0YXRlT2JqID0gbW9kZWwuaXRlbTtcbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVcIikhLnRleHRDb250ZW50ID0gY29tcHV0ZVN0YXRlTmFtZShtb2RlbC5pdGVtKTtcbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiW3NlY29uZGFyeV1cIikhLnRleHRDb250ZW50ID0gbW9kZWwuaXRlbS5lbnRpdHlfaWQ7XG59O1xuXG5jbGFzcyBIYUVudGl0eVBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhdXRvZm9jdXM/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJhbGxvdy1jdXN0b20tZW50aXR5XCIgfSlcbiAgcHVibGljIGFsbG93Q3VzdG9tRW50aXR5O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwiZG9tYWluLWZpbHRlclwiIH0pIHB1YmxpYyBkb21haW5GaWx0ZXI/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRpdHlGaWx0ZXI/OiBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmM7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfb3BlbmVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHJpdmF0ZSBfZ2V0U3RhdGVzID0gbWVtb2l6ZU9uZShcbiAgICAoXG4gICAgICBoYXNzOiB0aGlzW1wiaGFzc1wiXSxcbiAgICAgIGRvbWFpbkZpbHRlcjogdGhpc1tcImRvbWFpbkZpbHRlclwiXSxcbiAgICAgIGVudGl0eUZpbHRlcjogdGhpc1tcImVudGl0eUZpbHRlclwiXVxuICAgICkgPT4ge1xuICAgICAgbGV0IHN0YXRlczogSGFzc0VudGl0eVtdID0gW107XG5cbiAgICAgIGlmICghaGFzcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBsZXQgZW50aXR5SWRzID0gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpO1xuXG4gICAgICBpZiAoZG9tYWluRmlsdGVyKSB7XG4gICAgICAgIGVudGl0eUlkcyA9IGVudGl0eUlkcy5maWx0ZXIoXG4gICAgICAgICAgKGVpZCkgPT4gZWlkLnN1YnN0cigwLCBlaWQuaW5kZXhPZihcIi5cIikpID09PSBkb21haW5GaWx0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGVzID0gZW50aXR5SWRzLnNvcnQoKS5tYXAoKGtleSkgPT4gaGFzcyEuc3RhdGVzW2tleV0pO1xuXG4gICAgICBpZiAoZW50aXR5RmlsdGVyKSB7XG4gICAgICAgIHN0YXRlcyA9IHN0YXRlcy5maWx0ZXIoXG4gICAgICAgICAgKHN0YXRlT2JqKSA9PlxuICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHdhbnQgdG8gaW5jbHVkZSB0aGUgZW50aXR5IG9mIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBzdGF0ZU9iai5lbnRpdHlfaWQgPT09IHRoaXMudmFsdWUgfHwgZW50aXR5RmlsdGVyIShzdGF0ZU9iailcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICApO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikgJiYgIXRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5faGFzcyA9IHRoaXMuaGFzcztcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5fZ2V0U3RhdGVzKFxuICAgICAgdGhpcy5faGFzcyxcbiAgICAgIHRoaXMuZG9tYWluRmlsdGVyLFxuICAgICAgdGhpcy5lbnRpdHlGaWx0ZXJcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8dmFhZGluLWNvbWJvLWJveC1saWdodFxuICAgICAgICBpdGVtLXZhbHVlLXBhdGg9XCJlbnRpdHlfaWRcIlxuICAgICAgICBpdGVtLWxhYmVsLXBhdGg9XCJlbnRpdHlfaWRcIlxuICAgICAgICAuaXRlbXM9JHtzdGF0ZXN9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAuYWxsb3dDdXN0b21WYWx1ZT0ke3RoaXMuYWxsb3dDdXN0b21FbnRpdHl9XG4gICAgICAgIC5yZW5kZXJlcj0ke3Jvd1JlbmRlcmVyfVxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmF1dG9mb2N1cz0ke3RoaXMuYXV0b2ZvY3VzfVxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWwgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9oYXNzXG4gICAgICAgICAgICA/IHRoaXMuX2hhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLmVudGl0eS5lbnRpdHktcGlja2VyLmVudGl0eVwiKVxuICAgICAgICAgICAgOiB0aGlzLmxhYmVsfVxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLnZhbHVlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXJcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgICBuby1yaXBwbGVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3N0YXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdyBlbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAuaWNvbj0ke3RoaXMuX29wZW5lZCA/IFwiaGFzczptZW51LXVwXCIgOiBcImhhc3M6bWVudS1kb3duXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVG9nZ2xlXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LXBpY2tlclwiLCBIYUVudGl0eVBpY2tlcik7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1lbnRpdHktcGlja2VyXCI6IEhhRW50aXR5UGlja2VyO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwidGhlbWUtY2hhbmdlZFwiOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZm9yIGFkZCBldmVudCBsaXN0ZW5lclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgXCJ0aGVtZS1jaGFuZ2VkXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlUaGVtZVNlbGVjdEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCB0aGVtZXMgPSBbXCJCYWNrZW5kLXNlbGVjdGVkXCIsIFwiZGVmYXVsdFwiXS5jb25jYXQoXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmhhc3MhLnRoZW1lcy50aGVtZXMpLnNvcnQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWwgfHxcbiAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy50aGVtZVwiKSArXG4gICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBcIilcIn1cbiAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fY2hhbmdlZH1cIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMudmFsdWV9XCJcbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cInRoZW1lXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhlbWVzLm1hcCgodGhlbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSB0aGVtZT1cIiR7dGhlbWV9XCI+JHt0aGVtZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlZChldik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8IGV2LnRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInRoZW1lLWNoYW5nZWRcIik7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI6IEh1aVRoZW1lU2VsZWN0RWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdFbGVtZW50U3R5bGUgPSBodG1sYFxuICA8c3R5bGU+XG4gICAgaGEtc3dpdGNoIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB9XG4gICAgLnNpZGUtYnktc2lkZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlID4gKiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cbiAgICAuc3VmZml4IHtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuYDtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcbmltcG9ydCB7IEVudGl0aWVzRWRpdG9yRXZlbnQsIEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdFbGVtZW50U3R5bGUgfSBmcm9tIFwiLi9jb25maWctZWxlbWVudHMtc3R5bGVcIjtcbmltcG9ydCB7IFNlbnNvckNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcblxuY29uc3QgY2FyZENvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIGVudGl0eTogXCJzdHJpbmc/XCIsXG4gIG5hbWU6IFwic3RyaW5nP1wiLFxuICBpY29uOiBcInN0cmluZz9cIixcbiAgZ3JhcGg6IFwic3RyaW5nP1wiLFxuICB1bml0OiBcInN0cmluZz9cIixcbiAgZGV0YWlsOiBcIm51bWJlcj9cIixcbiAgdGhlbWU6IFwic3RyaW5nP1wiLFxuICBob3Vyc190b19zaG93OiBcIm51bWJlcj9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1zZW5zb3ItY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlTZW5zb3JDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZEVkaXRvciB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBTZW5zb3JDYXJkQ29uZmlnO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBTZW5zb3JDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgY29uZmlnID0gY2FyZENvbmZpZ1N0cnVjdChjb25maWcpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBfZW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZW50aXR5IHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX25hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5uYW1lIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2ljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pY29uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2dyYXBoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZ3JhcGggfHwgXCJub25lXCI7XG4gIH1cblxuICBnZXQgX3VuaXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS51bml0IHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2RldGFpbCgpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLm51bWJlciB8fCBcIjFcIjtcbiAgfVxuXG4gIGdldCBfdGhlbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50aGVtZSB8fCBcImRlZmF1bHRcIjtcbiAgfVxuXG4gIGdldCBfaG91cnNfdG9fc2hvdygpOiBudW1iZXIgfCBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmhvdXJzX3RvX3Nob3cgfHwgXCIyNFwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IGdyYXBocyA9IFtcImxpbmVcIiwgXCJub25lXCJdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmVudGl0eVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZW50aXR5fVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJlbnRpdHlcIn1cbiAgICAgICAgICBkb21haW4tZmlsdGVyPVwic2Vuc29yXCJcbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLm5hbWVcIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICApfSlcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbmFtZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJuYW1lXCJ9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmljb25cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9pY29ufVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaWNvblwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLnNlbnNvci5ncmFwaF90eXBlXCJcbiAgICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJncmFwaFwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke2dyYXBocy5pbmRleE9mKHRoaXMuX2dyYXBoKX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke2dyYXBocy5tYXAoKGdyYXBoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke2dyYXBofTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnVuaXRcIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl91bml0fVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1widW5pdFwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5zZW5zb3IuZ3JhcGhfZGV0YWlsXCJcbiAgICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9kZXRhaWx9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJkZXRhaWxcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aGVtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICAgIEB0aGVtZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktdGhlbWUtc2VsZWN0LWVkaXRvcj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaG91cnNfdG9fc2hvd1wiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5faG91cnNfdG9fc2hvd31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImhvdXJzX3RvX3Nob3dcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuXG4gICAgaWYgKHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGFyZ2V0LnZhbHVlID09PSBcIlwiIHx8XG4gICAgICAgICh0YXJnZXQudHlwZSA9PT0gXCJudW1iZXJcIiAmJiBpc05hTihOdW1iZXIodGFyZ2V0LnZhbHVlKSkpXG4gICAgICApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB2YWx1ZTogYW55ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnID0geyAuLi50aGlzLl9jb25maWcsIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdmFsdWUgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXNlbnNvci1jYXJkLWVkaXRvclwiOiBIdWlTZW5zb3JDYXJkRWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVlBO0FBSUE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBYUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXdHQTtBQXJHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFqSkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBeUlBOzs7Ozs7Ozs7Ozs7O0FDMU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQVNBO0FBR0E7QUFjQTtBQUtBO0FBQ0E7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUVBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUtBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBTUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFNQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakxBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFDQTtBQUFBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9