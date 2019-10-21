(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-configuration-page"],{

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





class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      narrow: {
        type: Boolean,
      },

      isWide: {
        type: Boolean,
        value: false,
      },
    };
  }

  computeContentClasses(isWide) {
    var classes = "content ";

    return isWide ? classes : classes + "narrow";
  }

  computeClasses(isWide) {
    var classes = "together layout ";

    return classes + (isWide ? "horizontal" : "vertical narrow");
  }
}

customElements.define("ha-config-section", HaConfigSection);


/***/ }),

/***/ "./src/panels/config/zha/ha-config-zha.ts":
/*!************************************************!*\
  !*** ./src/panels/config/zha/ha-config-zha.ts ***!
  \************************************************/
/*! exports provided: HaConfigZha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigZha", function() { return HaConfigZha; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _zha_binding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zha-binding */ "./src/panels/config/zha/zha-binding.ts");
/* harmony import */ var _zha_cluster_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zha-cluster-attributes */ "./src/panels/config/zha/zha-cluster-attributes.ts");
/* harmony import */ var _zha_cluster_commands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zha-cluster-commands */ "./src/panels/config/zha/zha-cluster-commands.ts");
/* harmony import */ var _zha_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zha-network */ "./src/panels/config/zha/zha-network.ts");
/* harmony import */ var _zha_node__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zha-node */ "./src/panels/config/zha/zha-node.ts");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");













class HaConfigZha extends lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"] {
    constructor() {
        super(...arguments);
        this._bindableDevices = [];
    }
    updated(changedProperties) {
        if (changedProperties.has("_selectedDevice")) {
            this._fetchBindableDevices();
        }
        super.update(changedProperties);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <hass-subpage header="Zigbee Home Automation">
        <zha-network
          .isWide="${this.isWide}"
          .hass="${this.hass}"
        ></zha-network>

        <zha-node
          .isWide="${this.isWide}"
          .hass="${this.hass}"
          @zha-cluster-selected="${this._onClusterSelected}"
          @zha-node-selected="${this._onDeviceSelected}"
        ></zha-node>
        ${this._selectedCluster
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
              <zha-cluster-attributes
                .isWide="${this.isWide}"
                .hass="${this.hass}"
                .selectedNode="${this._selectedDevice}"
                .selectedCluster="${this._selectedCluster}"
              ></zha-cluster-attributes>

              <zha-cluster-commands
                .isWide="${this.isWide}"
                .hass="${this.hass}"
                .selectedNode="${this._selectedDevice}"
                .selectedCluster="${this._selectedCluster}"
              ></zha-cluster-commands>
            `
            : ""}
        ${this._selectedDevice && this._bindableDevices.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
              <zha-binding-control
                .isWide="${this.isWide}"
                .hass="${this.hass}"
                .selectedDevice="${this._selectedDevice}"
                .bindableDevices="${this._bindableDevices}"
              ></zha-binding-control>
            `
            : ""}
      </hass-subpage>
    `;
    }
    _onClusterSelected(selectedClusterEvent) {
        this._selectedCluster = selectedClusterEvent.detail.cluster;
    }
    _onDeviceSelected(selectedNodeEvent) {
        this._selectedDevice = selectedNodeEvent.detail.node;
        this._selectedCluster = undefined;
    }
    async _fetchBindableDevices() {
        if (this._selectedDevice && this.hass) {
            this._bindableDevices = (await Object(_data_zha__WEBPACK_IMPORTED_MODULE_10__["fetchBindableDevices"])(this.hass, this._selectedDevice.ieee)).sort(_functions__WEBPACK_IMPORTED_MODULE_12__["sortZHADevices"]);
        }
    }
    static get styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"]];
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaConfigZha.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaConfigZha.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaConfigZha.prototype, "_selectedDevice", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaConfigZha.prototype, "_selectedCluster", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaConfigZha.prototype, "_bindableDevices", void 0);
customElements.define("ha-config-zha", HaConfigZha);


/***/ }),

/***/ "./src/panels/config/zha/zha-binding.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/zha/zha-binding.ts ***!
  \**********************************************/
/*! exports provided: ZHABindingControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHABindingControl", function() { return ZHABindingControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");













let ZHABindingControl = class ZHABindingControl extends lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"] {
    constructor() {
        super(...arguments);
        this._showHelp = false;
        this._bindTargetIndex = -1;
        this.bindableDevices = [];
    }
    updated(changedProperties) {
        if (changedProperties.has("selectedDevice")) {
            this._bindTargetIndex = -1;
        }
        super.update(changedProperties);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>Device Binding</span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          >
          </paper-icon-button>
        </div>
        <span slot="introduction">Bind and unbind devices.</span>

        <ha-card class="content">
          <div class="command-picker">
            <paper-dropdown-menu label="Bindable Devices" class="flex">
              <paper-listbox
                slot="dropdown-content"
                .selected="${this._bindTargetIndex}"
                @iron-select="${this._bindTargetIndexChanged}"
              >
                ${this.bindableDevices.map((device) => lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                    <paper-item
                      >${device.user_given_name
            ? device.user_given_name
            : device.name}</paper-item
                    >
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${this._showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <div class="helpText">
                  Select a device to issue a bind command.
                </div>
              `
            : ""}
          <div class="card-actions">
            <mwc-button @click="${this._onBindDevicesClick}">Bind</mwc-button>
            ${this._showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                  <div class="helpText">
                    Bind devices.
                  </div>
                `
            : ""}
            <mwc-button @click="${this._onUnbindDevicesClick}"
              >Unbind</mwc-button
            >
            ${this._showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                  <div class="helpText">
                    Unbind devices.
                  </div>
                `
            : ""}
          </div>
        </ha-card>
      </ha-config-section>
    `;
    }
    _bindTargetIndexChanged(event) {
        this._bindTargetIndex = event.target.selected;
        this._deviceToBind =
            this._bindTargetIndex === -1
                ? undefined
                : this.bindableDevices[this._bindTargetIndex];
    }
    _onHelpTap() {
        this._showHelp = !this._showHelp;
    }
    async _onBindDevicesClick() {
        if (this.hass && this._deviceToBind && this.selectedDevice) {
            await Object(_data_zha__WEBPACK_IMPORTED_MODULE_10__["bindDevices"])(this.hass, this.selectedDevice.ieee, this._deviceToBind.ieee);
        }
    }
    async _onUnbindDevicesClick() {
        if (this.hass && this._deviceToBind && this.selectedDevice) {
            await Object(_data_zha__WEBPACK_IMPORTED_MODULE_10__["unbindDevices"])(this.hass, this.selectedDevice.ieee, this._deviceToBind.ieee);
        }
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_9__["css"] `
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .command-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .input-text {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .sectionHeader {
          position: relative;
        }

        .helpText {
          color: grey;
          padding: 16px;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], ZHABindingControl.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], ZHABindingControl.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], ZHABindingControl.prototype, "selectedDevice", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], ZHABindingControl.prototype, "_showHelp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], ZHABindingControl.prototype, "_bindTargetIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], ZHABindingControl.prototype, "bindableDevices", void 0);
ZHABindingControl = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["customElement"])("zha-binding-control")
], ZHABindingControl);



/***/ }),

/***/ "./src/panels/config/zha/zha-cluster-attributes.ts":
/*!*********************************************************!*\
  !*** ./src/panels/config/zha/zha-cluster-attributes.ts ***!
  \*********************************************************/
/*! exports provided: ZHAClusterAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAClusterAttributes", function() { return ZHAClusterAttributes; });
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");














class ZHAClusterAttributes extends lit_element__WEBPACK_IMPORTED_MODULE_10__["LitElement"] {
    constructor() {
        super();
        this.showHelp = false;
        this._selectedAttributeIndex = -1;
        this._attributes = [];
        this._attributeValue = "";
    }
    static get properties() {
        return {
            hass: {},
            isWide: {},
            showHelp: {},
            selectedNode: {},
            selectedCluster: {},
            _attributes: {},
            _selectedAttributeIndex: {},
            _attributeValue: {},
            _manufacturerCodeOverride: {},
            _setAttributeServiceData: {},
        };
    }
    updated(changedProperties) {
        if (changedProperties.has("selectedCluster")) {
            this._attributes = [];
            this._selectedAttributeIndex = -1;
            this._attributeValue = "";
            this._fetchAttributesForCluster();
        }
        super.update(changedProperties);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_10__["html"] `
      <ha-config-section .isWide="${this.isWide}">
        <div style="position: relative" slot="header">
          <span>
            ${this.hass.localize("ui.panel.config.zha.cluster_attributes.header")}
          </span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          >
          </paper-icon-button>
        </div>
        <span slot="introduction">
          ${this.hass.localize("ui.panel.config.zha.cluster_attributes.introduction")}
        </span>

        <ha-card class="content">
          <div class="attribute-picker">
            <paper-dropdown-menu
              label="${this.hass.localize("ui.panel.config.zha.cluster_attributes.attributes_of_cluster")}"
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected="${this._selectedAttributeIndex}"
                @iron-select="${this._selectedAttributeChanged}"
              >
                ${this._attributes.map((entry) => lit_element__WEBPACK_IMPORTED_MODULE_10__["html"] `
                    <paper-item
                      >${entry.name +
            " (id: " +
            Object(_functions__WEBPACK_IMPORTED_MODULE_13__["formatAsPaddedHex"])(entry.id) +
            ")"}</paper-item
                    >
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${this.showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_10__["html"] `
                <div class="help-text">
                  ${this.hass.localize("ui.panel.config.zha.cluster_attributes.help_attribute_dropdown")}
                </div>
              `
            : ""}
          ${this._selectedAttributeIndex !== -1
            ? this._renderAttributeInteractions()
            : ""}
        </ha-card>
      </ha-config-section>
    `;
    }
    _renderAttributeInteractions() {
        return lit_element__WEBPACK_IMPORTED_MODULE_10__["html"] `
      <div class="input-text">
        <paper-input
          label="${this.hass.localize("ui.panel.config.zha.common.value")}"
          type="string"
          .value="${this._attributeValue}"
          @value-changed="${this._onAttributeValueChanged}"
          placeholder="${this.hass.localize("ui.panel.config.zha.common.value")}"
        ></paper-input>
      </div>
      <div class="input-text">
        <paper-input
          label="${this.hass.localize("ui.panel.config.zha.common.manufacturer_code_override")}"
          type="number"
          .value="${this._manufacturerCodeOverride}"
          @value-changed="${this._onManufacturerCodeOverrideChanged}"
          placeholder="${this.hass.localize("ui.panel.config.zha.common.value")}"
        ></paper-input>
      </div>
      <div class="card-actions">
        <mwc-button @click="${this._onGetZigbeeAttributeClick}">
          ${this.hass.localize("ui.panel.config.zha.cluster_attributes.get_zigbee_attribute")}
        </mwc-button>
        ${this.showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_10__["html"] `
              <div class="help-text2">
                ${this.hass.localize("ui.panel.config.zha.cluster_attributes.help_get_zigbee_attribute")}
              </div>
            `
            : ""}
        <ha-call-service-button
          .hass="${this.hass}"
          domain="zha"
          service="set_zigbee_cluster_attribute"
          .serviceData="${this._setAttributeServiceData}"
        >
          ${this.hass.localize("ui.panel.config.zha.cluster_attributes.set_zigbee_attribute")}
        </ha-call-service-button>
        ${this.showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_10__["html"] `
              <ha-service-description
                .hass="${this.hass}"
                domain="zha"
                service="set_zigbee_cluster_attribute"
                class="help-text2"
              ></ha-service-description>
            `
            : ""}
      </div>
    `;
    }
    async _fetchAttributesForCluster() {
        if (this.selectedNode && this.selectedCluster && this.hass) {
            this._attributes = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_11__["fetchAttributesForCluster"])(this.hass, this.selectedNode.ieee, this.selectedCluster.endpoint_id, this.selectedCluster.id, this.selectedCluster.type);
            this._attributes.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }
    }
    _computeReadAttributeServiceData() {
        if (!this.selectedCluster || !this.selectedNode) {
            return;
        }
        return {
            ieee: this.selectedNode.ieee,
            endpoint_id: this.selectedCluster.endpoint_id,
            cluster_id: this.selectedCluster.id,
            cluster_type: this.selectedCluster.type,
            attribute: this._attributes[this._selectedAttributeIndex].id,
            manufacturer: this._manufacturerCodeOverride
                ? parseInt(this._manufacturerCodeOverride, 10)
                : undefined,
        };
    }
    _computeSetAttributeServiceData() {
        if (!this.selectedCluster || !this.selectedNode) {
            return;
        }
        return {
            ieee: this.selectedNode.ieee,
            endpoint_id: this.selectedCluster.endpoint_id,
            cluster_id: this.selectedCluster.id,
            cluster_type: this.selectedCluster.type,
            attribute: this._attributes[this._selectedAttributeIndex].id,
            value: this._attributeValue,
            manufacturer: this._manufacturerCodeOverride
                ? parseInt(this._manufacturerCodeOverride, 10)
                : undefined,
        };
    }
    _onAttributeValueChanged(value) {
        this._attributeValue = value.detail.value;
        this._setAttributeServiceData = this._computeSetAttributeServiceData();
    }
    _onManufacturerCodeOverrideChanged(value) {
        this._manufacturerCodeOverride = value.detail.value;
        this._setAttributeServiceData = this._computeSetAttributeServiceData();
    }
    async _onGetZigbeeAttributeClick() {
        const data = this._computeReadAttributeServiceData();
        if (data && this.hass) {
            this._attributeValue = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_11__["readAttributeValue"])(this.hass, data);
        }
    }
    _onHelpTap() {
        this.showHelp = !this.showHelp;
    }
    _selectedAttributeChanged(event) {
        this._selectedAttributeIndex = event.target.selected;
        this._attributeValue = "";
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_10__["css"] `
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .attribute-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .input-text {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }
        .help-text2 {
          color: grey;
          padding: 16px;
        }
      `,
        ];
    }
}
customElements.define("zha-cluster-attributes", ZHAClusterAttributes);


/***/ }),

/***/ "./src/panels/config/zha/zha-cluster-commands.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-cluster-commands.ts ***!
  \*******************************************************/
/*! exports provided: ZHAClusterCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAClusterCommands", function() { return ZHAClusterCommands; });
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");













class ZHAClusterCommands extends lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"] {
    constructor() {
        super();
        this._showHelp = false;
        this._selectedCommandIndex = -1;
        this._commands = [];
    }
    static get properties() {
        return {
            hass: {},
            isWide: {},
            selectedNode: {},
            selectedCluster: {},
            _showHelp: {},
            _commands: {},
            _selectedCommandIndex: {},
            _manufacturerCodeOverride: {},
            _issueClusterCommandServiceData: {},
        };
    }
    updated(changedProperties) {
        if (changedProperties.has("selectedCluster")) {
            this._commands = [];
            this._selectedCommandIndex = -1;
            this._fetchCommandsForCluster();
        }
        super.update(changedProperties);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>
            ${this.hass.localize("ui.panel.config.zha.cluster_commands.header")}
          </span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          >
          </paper-icon-button>
        </div>
        <span slot="introduction">
          ${this.hass.localize("ui.panel.config.zha.cluster_commands.introduction")}
        </span>

        <ha-card class="content">
          <div class="command-picker">
            <paper-dropdown-menu
              label="${this.hass.localize("ui.panel.config.zha.cluster_commands.commands_of_cluster")}"
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected="${this._selectedCommandIndex}"
                @iron-select="${this._selectedCommandChanged}"
              >
                ${this._commands.map((entry) => lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                    <paper-item
                      >${entry.name +
            " (id: " +
            Object(_functions__WEBPACK_IMPORTED_MODULE_12__["formatAsPaddedHex"])(entry.id) +
            ")"}</paper-item
                    >
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${this._showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <div class="help-text">
                  ${this.hass.localize("ui.panel.config.zha.cluster_commands.help_command_dropdown")}
                </div>
              `
            : ""}
          ${this._selectedCommandIndex !== -1
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <div class="input-text">
                  <paper-input
                    label="${this.hass.localize("ui.panel.config.zha.common.manufacturer_code_override")}"
                    type="number"
                    .value="${this._manufacturerCodeOverride}"
                    @value-changed="${this._onManufacturerCodeOverrideChanged}"
                    placeholder="${this.hass.localize("ui.panel.config.zha.common.value")}"
                  ></paper-input>
                </div>
                <div class="card-actions">
                  <ha-call-service-button
                    .hass="${this.hass}"
                    domain="zha"
                    service="issue_zigbee_cluster_command"
                    .serviceData="${this._issueClusterCommandServiceData}"
                  >
                    ${this.hass.localize("ui.panel.config.zha.cluster_commands.issue_zigbee_command")}
                  </ha-call-service-button>
                  ${this._showHelp
                ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                        <ha-service-description
                          .hass="${this.hass}"
                          domain="zha"
                          service="issue_zigbee_cluster_command"
                          class="help-text2"
                        ></ha-service-description>
                      `
                : ""}
                </div>
              `
            : ""}
        </ha-card>
      </ha-config-section>
    `;
    }
    async _fetchCommandsForCluster() {
        if (this.selectedNode && this.selectedCluster && this.hass) {
            this._commands = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_10__["fetchCommandsForCluster"])(this.hass, this.selectedNode.ieee, this.selectedCluster.endpoint_id, this.selectedCluster.id, this.selectedCluster.type);
            this._commands.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }
    }
    _computeIssueClusterCommandServiceData() {
        if (!this.selectedNode || !this.selectedCluster) {
            return;
        }
        return {
            ieee: this.selectedNode.ieee,
            endpoint_id: this.selectedCluster.endpoint_id,
            cluster_id: this.selectedCluster.id,
            cluster_type: this.selectedCluster.type,
            command: this._commands[this._selectedCommandIndex].id,
            command_type: this._commands[this._selectedCommandIndex].type,
        };
    }
    _onManufacturerCodeOverrideChanged(value) {
        this._manufacturerCodeOverride = value.detail.value;
        this._issueClusterCommandServiceData = this._computeIssueClusterCommandServiceData();
    }
    _onHelpTap() {
        this._showHelp = !this._showHelp;
    }
    _selectedCommandChanged(event) {
        this._selectedCommandIndex = event.target.selected;
        this._issueClusterCommandServiceData = this._computeIssueClusterCommandServiceData();
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_9__["css"] `
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .command-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .input-text {
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .sectionHeader {
          position: relative;
        }

        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }

        .help-text2 {
          color: grey;
          padding: 16px;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
      `,
        ];
    }
}
customElements.define("zha-cluster-commands", ZHAClusterCommands);


/***/ }),

/***/ "./src/panels/config/zha/zha-clusters.ts":
/*!***********************************************!*\
  !*** ./src/panels/config/zha/zha-clusters.ts ***!
  \***********************************************/
/*! exports provided: ZHAClusters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHAClusters", function() { return ZHAClusters; });
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");












const computeClusterKey = (cluster) => {
    return `${cluster.name} (Endpoint id: ${cluster.endpoint_id}, Id: ${Object(_functions__WEBPACK_IMPORTED_MODULE_11__["formatAsPaddedHex"])(cluster.id)}, Type: ${cluster.type})`;
};
class ZHAClusters extends lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"] {
    constructor() {
        super();
        this.showHelp = false;
        this._selectedClusterIndex = -1;
        this._clusters = [];
    }
    static get properties() {
        return {
            hass: {},
            isWide: {},
            showHelp: {},
            selectedDevice: {},
            _selectedClusterIndex: {},
            _clusters: {},
        };
    }
    updated(changedProperties) {
        if (changedProperties.has("selectedDevice")) {
            this._clusters = [];
            this._selectedClusterIndex = -1;
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "zha-cluster-selected", {
                cluster: undefined,
            });
            this._fetchClustersForZhaNode();
        }
        super.update(changedProperties);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
      <div class="node-picker">
        <paper-dropdown-menu
          label="${this.hass.localize("ui.panel.config.zha.common.clusters")}"
          class="flex"
        >
          <paper-listbox
            slot="dropdown-content"
            .selected="${this._selectedClusterIndex}"
            @iron-select="${this._selectedClusterChanged}"
          >
            ${this._clusters.map((entry) => lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
                <paper-item>${computeClusterKey(entry)}</paper-item>
              `)}
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
      ${this.showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_7__["html"] `
            <div class="help-text">
              ${this.hass.localize("ui.panel.config.zha.clusters.help_cluster_dropdown")}
            </div>
          `
            : ""}
    `;
    }
    async _fetchClustersForZhaNode() {
        if (this.hass) {
            this._clusters = await Object(_data_zha__WEBPACK_IMPORTED_MODULE_9__["fetchClustersForZhaNode"])(this.hass, this.selectedDevice.ieee);
            this._clusters.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }
    }
    _selectedClusterChanged(event) {
        this._selectedClusterIndex = event.target.selected;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "zha-cluster-selected", {
            cluster: this._clusters[this._selectedClusterIndex],
        });
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_7__["css"] `
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .node-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }
        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }
      `,
        ];
    }
}
customElements.define("zha-clusters", ZHAClusters);


/***/ }),

/***/ "./src/panels/config/zha/zha-network.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/zha/zha-network.ts ***!
  \**********************************************/
/*! exports provided: ZHANetwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHANetwork", function() { return ZHANetwork; });
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");









class ZHANetwork extends lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"] {
    constructor() {
        super();
        this._showHelp = false;
    }
    static get properties() {
        return {
            hass: {},
            isWide: {},
            _showHelp: {},
            _joinParams: {},
        };
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"] `
      <ha-config-section .isWide="${this.isWide}">
        <div style="position: relative" slot="header">
          <span>
            ${this.hass.localize("ui.panel.config.zha.network_management.header")}
          </span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <span slot="introduction">
          ${this.hass.localize("ui.panel.config.zha.network_management.introduction")}
        </span>

        <ha-card class="content">
          <div class="card-actions">
            <mwc-button @click=${this._onAddDevicesClick}>
              ${this.hass.localize("ui.panel.config.zha.common.add_devices")}
            </mwc-button>
            ${this._showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_6__["html"] `
                  <ha-service-description
                    .hass="${this.hass}"
                    domain="zha"
                    service="permit"
                    class="help-text2"
                  />
                `
            : ""}
          </div>
        </ha-card>
      </ha-config-section>
    `;
    }
    _onHelpTap() {
        this._showHelp = !this._showHelp;
    }
    _onAddDevicesClick() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_7__["navigate"])(this, "add");
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_8__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_6__["css"] `
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .help-text2 {
          color: grey;
          padding: 16px;
        }
      `,
        ];
    }
}
customElements.define("zha-network", ZHANetwork);


/***/ }),

/***/ "./src/panels/config/zha/zha-node.ts":
/*!*******************************************!*\
  !*** ./src/panels/config/zha/zha-node.ts ***!
  \*******************************************/
/*! exports provided: ZHANode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZHANode", function() { return ZHANode; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _zha_clusters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zha-clusters */ "./src/panels/config/zha/zha-clusters.ts");
/* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_zha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/zha */ "./src/data/zha.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./functions */ "./src/panels/config/zha/functions.ts");

















let ZHANode = class ZHANode extends lit_element__WEBPACK_IMPORTED_MODULE_12__["LitElement"] {
    constructor() {
        super(...arguments);
        this._showHelp = false;
        this._selectedDeviceIndex = -1;
        this._nodes = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this._fetchDevices();
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_12__["html"] `
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span
            >${this.hass.localize("ui.panel.config.zha.node_management.header")}</span
          >
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <span slot="introduction">
          ${this.hass.localize("ui.panel.config.zha.node_management.introduction")}
          <br /><br />
          ${this.hass.localize("ui.panel.config.zha.node_management.hint_battery_devices")}
          <br /><br />
          ${this.hass.localize("ui.panel.config.zha.node_management.hint_wakeup")}
        </span>
        <ha-card class="content">
          <div class="node-picker">
            <paper-dropdown-menu
              label="${this.hass.localize("ui.panel.config.zha.common.devices")}"
              class="flex"
              id="zha-device-selector"
            >
              <paper-listbox
                slot="dropdown-content"
                @iron-select="${this._selectedDeviceChanged}"
                .selected="${this._selectedDeviceIndex}"
              >
                ${this._nodes.map((entry) => lit_element__WEBPACK_IMPORTED_MODULE_12__["html"] `
                    <paper-item
                      >${entry.user_given_name
            ? entry.user_given_name
            : entry.name}</paper-item
                    >
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${this._showHelp
            ? lit_element__WEBPACK_IMPORTED_MODULE_12__["html"] `
                <div class="help-text">
                  ${this.hass.localize("ui.panel.config.zha.node_management.help_node_dropdown")}
                </div>
              `
            : ""}
          ${this._selectedDeviceIndex !== -1
            ? lit_element__WEBPACK_IMPORTED_MODULE_12__["html"] `
                <zha-device-card
                  class="card"
                  .hass=${this.hass}
                  .device=${this._selectedDevice}
                  .narrow=${!this.isWide}
                  .showHelp=${this._showHelp}
                  showActions
                  @zha-device-removed=${this._onDeviceRemoved}
                ></zha-device-card>
              `
            : ""}
          ${this._selectedDevice ? this._renderClusters() : ""}
        </ha-card>
      </ha-config-section>
    `;
    }
    _renderClusters() {
        return lit_element__WEBPACK_IMPORTED_MODULE_12__["html"] `
      <zha-clusters
        .hass="${this.hass}"
        .selectedDevice="${this._selectedDevice}"
        .showHelp="${this._showHelp}"
      ></zha-clusters>
    `;
    }
    _onHelpTap() {
        this._showHelp = !this._showHelp;
    }
    _selectedDeviceChanged(event) {
        this._selectedDeviceIndex = event.target.selected;
        this._selectedDevice = this._nodes[this._selectedDeviceIndex];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__["fireEvent"])(this, "zha-node-selected", { node: this._selectedDevice });
    }
    async _fetchDevices() {
        this._nodes = (await Object(_data_zha__WEBPACK_IMPORTED_MODULE_14__["fetchDevices"])(this.hass)).sort(_functions__WEBPACK_IMPORTED_MODULE_16__["sortZHADevices"]);
    }
    _onDeviceRemoved(event) {
        this._selectedDeviceIndex = -1;
        this._nodes.splice(this._nodes.indexOf(event.detail.device), 1);
        this._selectedDevice = undefined;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_13__["fireEvent"])(this, "zha-node-selected", { node: this._selectedDevice });
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_15__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_12__["css"] `
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .content {
          margin-top: 24px;
        }

        .node-info {
          margin-left: 16px;
        }

        .sectionHeader {
          position: relative;
        }

        .help-text {
          color: grey;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 16px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .node-picker {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
        }

        .card {
          box-sizing: border-box;
          display: flex;
          flex: 1 0 300px;
          min-width: 0;
          max-width: 600px;
          padding-left: 28px;
          padding-right: 28px;
          padding-bottom: 10px;
          word-wrap: break-word;
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .toggle-help-icon {
          position: absolute;
          top: 6px;
          right: 0;
          color: var(--primary-color);
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
], ZHANode.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
], ZHANode.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
], ZHANode.prototype, "_showHelp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
], ZHANode.prototype, "_selectedDeviceIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
], ZHANode.prototype, "_selectedDevice", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["property"])()
], ZHANode.prototype, "_nodes", void 0);
ZHANode = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_12__["customElement"])("zha-node")
], ZHANode);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWNvbmZpZ3VyYXRpb24tcGFnZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL2hhLWNvbmZpZy16aGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvemhhL3poYS1iaW5kaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtY2x1c3Rlci1hdHRyaWJ1dGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtY2x1c3Rlci1jb21tYW5kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLWNsdXN0ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtbmV0d29yay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96aGEvemhhLW5vZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4vemhhLWJpbmRpbmdcIjtcbmltcG9ydCBcIi4vemhhLWNsdXN0ZXItYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi96aGEtY2x1c3Rlci1jb21tYW5kc1wiO1xuaW1wb3J0IFwiLi96aGEtbmV0d29ya1wiO1xuaW1wb3J0IFwiLi96aGEtbm9kZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHtcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgQ2x1c3RlciwgZmV0Y2hCaW5kYWJsZURldmljZXMsIFpIQURldmljZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBzb3J0WkhBRGV2aWNlcyB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgWkhBQ2x1c3RlclNlbGVjdGVkUGFyYW1zLCBaSEFEZXZpY2VTZWxlY3RlZFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUNvbmZpZ1poYSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZERldmljZT86IFpIQURldmljZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYmluZGFibGVEZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJfc2VsZWN0ZWREZXZpY2VcIikpIHtcbiAgICAgIHRoaXMuX2ZldGNoQmluZGFibGVEZXZpY2VzKCk7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIlppZ2JlZSBIb21lIEF1dG9tYXRpb25cIj5cbiAgICAgICAgPHpoYS1uZXR3b3JrXG4gICAgICAgICAgLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgID48L3poYS1uZXR3b3JrPlxuXG4gICAgICAgIDx6aGEtbm9kZVxuICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIEB6aGEtY2x1c3Rlci1zZWxlY3RlZD1cIiR7dGhpcy5fb25DbHVzdGVyU2VsZWN0ZWR9XCJcbiAgICAgICAgICBAemhhLW5vZGUtc2VsZWN0ZWQ9XCIke3RoaXMuX29uRGV2aWNlU2VsZWN0ZWR9XCJcbiAgICAgICAgPjwvemhhLW5vZGU+XG4gICAgICAgICR7dGhpcy5fc2VsZWN0ZWRDbHVzdGVyXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8emhhLWNsdXN0ZXItYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZE5vZGU9XCIke3RoaXMuX3NlbGVjdGVkRGV2aWNlfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkQ2x1c3Rlcj1cIiR7dGhpcy5fc2VsZWN0ZWRDbHVzdGVyfVwiXG4gICAgICAgICAgICAgID48L3poYS1jbHVzdGVyLWF0dHJpYnV0ZXM+XG5cbiAgICAgICAgICAgICAgPHpoYS1jbHVzdGVyLWNvbW1hbmRzXG4gICAgICAgICAgICAgICAgLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCJcbiAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkTm9kZT1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWRDbHVzdGVyPVwiJHt0aGlzLl9zZWxlY3RlZENsdXN0ZXJ9XCJcbiAgICAgICAgICAgICAgPjwvemhhLWNsdXN0ZXItY29tbWFuZHM+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuX3NlbGVjdGVkRGV2aWNlICYmIHRoaXMuX2JpbmRhYmxlRGV2aWNlcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8emhhLWJpbmRpbmctY29udHJvbFxuICAgICAgICAgICAgICAgIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZERldmljZT1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XCJcbiAgICAgICAgICAgICAgICAuYmluZGFibGVEZXZpY2VzPVwiJHt0aGlzLl9iaW5kYWJsZURldmljZXN9XCJcbiAgICAgICAgICAgICAgPjwvemhhLWJpbmRpbmctY29udHJvbD5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DbHVzdGVyU2VsZWN0ZWQoXG4gICAgc2VsZWN0ZWRDbHVzdGVyRXZlbnQ6IEhBU1NEb21FdmVudDxaSEFDbHVzdGVyU2VsZWN0ZWRQYXJhbXM+XG4gICk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlciA9IHNlbGVjdGVkQ2x1c3RlckV2ZW50LmRldGFpbC5jbHVzdGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25EZXZpY2VTZWxlY3RlZChcbiAgICBzZWxlY3RlZE5vZGVFdmVudDogSEFTU0RvbUV2ZW50PFpIQURldmljZVNlbGVjdGVkUGFyYW1zPlxuICApOiB2b2lkIHtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZSA9IHNlbGVjdGVkTm9kZUV2ZW50LmRldGFpbC5ub2RlO1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQmluZGFibGVEZXZpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZERldmljZSAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2JpbmRhYmxlRGV2aWNlcyA9IChhd2FpdCBmZXRjaEJpbmRhYmxlRGV2aWNlcyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLl9zZWxlY3RlZERldmljZSEuaWVlZVxuICAgICAgKSkuc29ydChzb3J0WkhBRGV2aWNlcyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbaGFTdHlsZV07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy16aGFcIjogSGFDb25maWdaaGE7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXpoYVwiLCBIYUNvbmZpZ1poYSk7XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBiaW5kRGV2aWNlcywgdW5iaW5kRGV2aWNlcywgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEl0ZW1TZWxlY3RlZEV2ZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1iaW5kaW5nLWNvbnRyb2xcIilcbmV4cG9ydCBjbGFzcyBaSEFCaW5kaW5nQ29udHJvbCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2VsZWN0ZWREZXZpY2U/OiBaSEFEZXZpY2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2JpbmRUYXJnZXRJbmRleDogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgYmluZGFibGVEZXZpY2VzOiBaSEFEZXZpY2VbXSA9IFtdO1xuICBwcml2YXRlIF9kZXZpY2VUb0JpbmQ/OiBaSEFEZXZpY2U7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkRGV2aWNlXCIpKSB7XG4gICAgICB0aGlzLl9iaW5kVGFyZ2V0SW5kZXggPSAtMTtcbiAgICB9XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPVwiJHt0aGlzLmlzV2lkZX1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25IZWFkZXJcIiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHNwYW4+RGV2aWNlIEJpbmRpbmc8L3NwYW4+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5CaW5kIGFuZCB1bmJpbmQgZGV2aWNlcy48L3NwYW4+XG5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmQtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIkJpbmRhYmxlIERldmljZXNcIiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9iaW5kVGFyZ2V0SW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX2JpbmRUYXJnZXRJbmRleENoYW5nZWR9XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5iaW5kYWJsZURldmljZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGRldmljZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICA+JHtkZXZpY2UudXNlcl9naXZlbl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGRldmljZS51c2VyX2dpdmVuX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGV2aWNlLm5hbWV9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IGEgZGV2aWNlIHRvIGlzc3VlIGEgYmluZCBjb21tYW5kLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vbkJpbmREZXZpY2VzQ2xpY2t9XCI+QmluZDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlbHBUZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIEJpbmQgZGV2aWNlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9vblVuYmluZERldmljZXNDbGlja31cIlxuICAgICAgICAgICAgICA+VW5iaW5kPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX3Nob3dIZWxwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwVGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBVbmJpbmQgZGV2aWNlcy5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9iaW5kVGFyZ2V0SW5kZXhDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX2JpbmRUYXJnZXRJbmRleCA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgdGhpcy5fZGV2aWNlVG9CaW5kID1cbiAgICAgIHRoaXMuX2JpbmRUYXJnZXRJbmRleCA9PT0gLTFcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiB0aGlzLmJpbmRhYmxlRGV2aWNlc1t0aGlzLl9iaW5kVGFyZ2V0SW5kZXhdO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25IZWxwVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dIZWxwID0gIXRoaXMuX3Nob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25CaW5kRGV2aWNlc0NsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhc3MgJiYgdGhpcy5fZGV2aWNlVG9CaW5kICYmIHRoaXMuc2VsZWN0ZWREZXZpY2UpIHtcbiAgICAgIGF3YWl0IGJpbmREZXZpY2VzKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREZXZpY2UuaWVlZSxcbiAgICAgICAgdGhpcy5fZGV2aWNlVG9CaW5kLmllZWVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfb25VbmJpbmREZXZpY2VzQ2xpY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLl9kZXZpY2VUb0JpbmQgJiYgdGhpcy5zZWxlY3RlZERldmljZSkge1xuICAgICAgYXdhaXQgdW5iaW5kRGV2aWNlcyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLnNlbGVjdGVkRGV2aWNlLmllZWUsXG4gICAgICAgIHRoaXMuX2RldmljZVRvQmluZC5pZWVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1hbmQtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwVGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWJpbmRpbmctY29udHJvbFwiOiBaSEFCaW5kaW5nQ29udHJvbDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7XG4gIEF0dHJpYnV0ZSxcbiAgQ2x1c3RlcixcbiAgZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcixcbiAgUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhLFxuICByZWFkQXR0cmlidXRlVmFsdWUsXG4gIFpIQURldmljZSxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZvcm1hdEFzUGFkZGVkSGV4IH0gZnJvbSBcIi4vZnVuY3Rpb25zXCI7XG5pbXBvcnQge1xuICBDaGFuZ2VFdmVudCxcbiAgSXRlbVNlbGVjdGVkRXZlbnQsXG4gIFNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgWkhBQ2x1c3RlckF0dHJpYnV0ZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHVibGljIHNob3dIZWxwOiBib29sZWFuO1xuICBwdWJsaWMgc2VsZWN0ZWROb2RlPzogWkhBRGV2aWNlO1xuICBwdWJsaWMgc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlczogQXR0cmlidXRlW107XG4gIHByaXZhdGUgX3NlbGVjdGVkQXR0cmlidXRlSW5kZXg6IG51bWJlcjtcbiAgcHJpdmF0ZSBfYXR0cmlidXRlVmFsdWU/OiBhbnk7XG4gIHByaXZhdGUgX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZT86IHN0cmluZyB8IG51bWJlcjtcbiAgcHJpdmF0ZSBfc2V0QXR0cmlidXRlU2VydmljZURhdGE/OiBTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2hvd0hlbHAgPSBmYWxzZTtcbiAgICB0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4ID0gLTE7XG4gICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgIHRoaXMuX2F0dHJpYnV0ZVZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIHNob3dIZWxwOiB7fSxcbiAgICAgIHNlbGVjdGVkTm9kZToge30sXG4gICAgICBzZWxlY3RlZENsdXN0ZXI6IHt9LFxuICAgICAgX2F0dHJpYnV0ZXM6IHt9LFxuICAgICAgX3NlbGVjdGVkQXR0cmlidXRlSW5kZXg6IHt9LFxuICAgICAgX2F0dHJpYnV0ZVZhbHVlOiB7fSxcbiAgICAgIF9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGU6IHt9LFxuICAgICAgX3NldEF0dHJpYnV0ZVNlcnZpY2VEYXRhOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkQ2x1c3RlclwiKSkge1xuICAgICAgdGhpcy5fYXR0cmlidXRlcyA9IFtdO1xuICAgICAgdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleCA9IC0xO1xuICAgICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSBcIlwiO1xuICAgICAgdGhpcy5fZmV0Y2hBdHRyaWJ1dGVzRm9yQ2x1c3RlcigpO1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuY2x1c3Rlcl9hdHRyaWJ1dGVzLmhlYWRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jbHVzdGVyX2F0dHJpYnV0ZXMuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0ZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jbHVzdGVyX2F0dHJpYnV0ZXMuYXR0cmlidXRlc19vZl9jbHVzdGVyXCJcbiAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkQXR0cmlidXRlSW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX3NlbGVjdGVkQXR0cmlidXRlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLl9hdHRyaWJ1dGVzLm1hcChcbiAgICAgICAgICAgICAgICAgIChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICA+JHtlbnRyeS5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIChpZDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0QXNQYWRkZWRIZXgoZW50cnkuaWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwifTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICR7dGhpcy5zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNsdXN0ZXJfYXR0cmlidXRlcy5oZWxwX2F0dHJpYnV0ZV9kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4ICE9PSAtMVxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJBdHRyaWJ1dGVJbnRlcmFjdGlvbnMoKVxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJBdHRyaWJ1dGVJbnRlcmFjdGlvbnMoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXRleHRcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmNvbW1vbi52YWx1ZVwiKX1cIlxuICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fYXR0cmlidXRlVmFsdWV9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fb25BdHRyaWJ1dGVWYWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jb21tb24udmFsdWVcIlxuICAgICAgICAgICl9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC10ZXh0XCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNvbW1vbi5tYW51ZmFjdHVyZXJfY29kZV9vdmVycmlkZVwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlfVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX29uTWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlQ2hhbmdlZH1cIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNvbW1vbi52YWx1ZVwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX29uR2V0WmlnYmVlQXR0cmlidXRlQ2xpY2t9XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNsdXN0ZXJfYXR0cmlidXRlcy5nZXRfemlnYmVlX2F0dHJpYnV0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAke3RoaXMuc2hvd0hlbHBcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHQyXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNsdXN0ZXJfYXR0cmlidXRlcy5oZWxwX2dldF96aWdiZWVfYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgc2VydmljZT1cInNldF96aWdiZWVfY2x1c3Rlcl9hdHRyaWJ1dGVcIlxuICAgICAgICAgIC5zZXJ2aWNlRGF0YT1cIiR7dGhpcy5fc2V0QXR0cmlidXRlU2VydmljZURhdGF9XCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jbHVzdGVyX2F0dHJpYnV0ZXMuc2V0X3ppZ2JlZV9hdHRyaWJ1dGVcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgJHt0aGlzLnNob3dIZWxwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJ6aGFcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfemlnYmVlX2NsdXN0ZXJfYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAtdGV4dDJcIlxuICAgICAgICAgICAgICA+PC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSAmJiB0aGlzLnNlbGVjdGVkQ2x1c3RlciAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2F0dHJpYnV0ZXMgPSBhd2FpdCBmZXRjaEF0dHJpYnV0ZXNGb3JDbHVzdGVyKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2x1c3RlciEuZW5kcG9pbnRfaWQsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgICAgdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGVcbiAgICAgICk7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhKCk6XG4gICAgfCBSZWFkQXR0cmlidXRlU2VydmljZURhdGFcbiAgICB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkQ2x1c3RlciB8fCAhdGhpcy5zZWxlY3RlZE5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGllZWU6IHRoaXMuc2VsZWN0ZWROb2RlIS5pZWVlLFxuICAgICAgZW5kcG9pbnRfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5lbmRwb2ludF9pZCxcbiAgICAgIGNsdXN0ZXJfaWQ6IHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5pZCxcbiAgICAgIGNsdXN0ZXJfdHlwZTogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLnR5cGUsXG4gICAgICBhdHRyaWJ1dGU6IHRoaXMuX2F0dHJpYnV0ZXNbdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleF0uaWQsXG4gICAgICBtYW51ZmFjdHVyZXI6IHRoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZVxuICAgICAgICA/IHBhcnNlSW50KHRoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZSBhcyBzdHJpbmcsIDEwKVxuICAgICAgICA6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhKCk6XG4gICAgfCBTZXRBdHRyaWJ1dGVTZXJ2aWNlRGF0YVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWRDbHVzdGVyIHx8ICF0aGlzLnNlbGVjdGVkTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWVlZTogdGhpcy5zZWxlY3RlZE5vZGUhLmllZWUsXG4gICAgICBlbmRwb2ludF9pZDogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmVuZHBvaW50X2lkLFxuICAgICAgY2x1c3Rlcl9pZDogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmlkLFxuICAgICAgY2x1c3Rlcl90eXBlOiB0aGlzLnNlbGVjdGVkQ2x1c3RlciEudHlwZSxcbiAgICAgIGF0dHJpYnV0ZTogdGhpcy5fYXR0cmlidXRlc1t0aGlzLl9zZWxlY3RlZEF0dHJpYnV0ZUluZGV4XS5pZCxcbiAgICAgIHZhbHVlOiB0aGlzLl9hdHRyaWJ1dGVWYWx1ZSxcbiAgICAgIG1hbnVmYWN0dXJlcjogdGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlXG4gICAgICAgID8gcGFyc2VJbnQodGhpcy5fbWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlIGFzIHN0cmluZywgMTApXG4gICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9vbkF0dHJpYnV0ZVZhbHVlQ2hhbmdlZCh2YWx1ZTogQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9hdHRyaWJ1dGVWYWx1ZSA9IHZhbHVlLmRldGFpbCEudmFsdWU7XG4gICAgdGhpcy5fc2V0QXR0cmlidXRlU2VydmljZURhdGEgPSB0aGlzLl9jb21wdXRlU2V0QXR0cmlidXRlU2VydmljZURhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uTWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlQ2hhbmdlZCh2YWx1ZTogQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGUgPSB2YWx1ZS5kZXRhaWwhLnZhbHVlO1xuICAgIHRoaXMuX3NldEF0dHJpYnV0ZVNlcnZpY2VEYXRhID0gdGhpcy5fY29tcHV0ZVNldEF0dHJpYnV0ZVNlcnZpY2VEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9vbkdldFppZ2JlZUF0dHJpYnV0ZUNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9jb21wdXRlUmVhZEF0dHJpYnV0ZVNlcnZpY2VEYXRhKCk7XG4gICAgaWYgKGRhdGEgJiYgdGhpcy5oYXNzKSB7XG4gICAgICB0aGlzLl9hdHRyaWJ1dGVWYWx1ZSA9IGF3YWl0IHJlYWRBdHRyaWJ1dGVWYWx1ZSh0aGlzLmhhc3MsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLnNob3dIZWxwID0gIXRoaXMuc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZEF0dHJpYnV0ZUNoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRBdHRyaWJ1dGVJbmRleCA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWQ7XG4gICAgdGhpcy5fYXR0cmlidXRlVmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYWN0aW9ucy53YXJuaW5nIGhhLWNhbGwtc2VydmljZS1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlLXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHAtdGV4dDIge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWNsdXN0ZXItYXR0cmlidXRlc1wiOiBaSEFDbHVzdGVyQXR0cmlidXRlcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6aGEtY2x1c3Rlci1hdHRyaWJ1dGVzXCIsIFpIQUNsdXN0ZXJBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7XG4gIENsdXN0ZXIsXG4gIENvbW1hbmQsXG4gIGZldGNoQ29tbWFuZHNGb3JDbHVzdGVyLFxuICBaSEFEZXZpY2UsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL3poYVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmb3JtYXRBc1BhZGRlZEhleCB9IGZyb20gXCIuL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRXZlbnQsXG4gIElzc3VlQ29tbWFuZFNlcnZpY2VEYXRhLFxuICBJdGVtU2VsZWN0ZWRFdmVudCxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFpIQUNsdXN0ZXJDb21tYW5kcyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBwdWJsaWMgc2VsZWN0ZWROb2RlPzogWkhBRGV2aWNlO1xuICBwdWJsaWMgc2VsZWN0ZWRDbHVzdGVyPzogQ2x1c3RlcjtcbiAgcHJpdmF0ZSBfc2hvd0hlbHA6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NvbW1hbmRzOiBDb21tYW5kW107XG4gIHByaXZhdGUgX3NlbGVjdGVkQ29tbWFuZEluZGV4OiBudW1iZXI7XG4gIHByaXZhdGUgX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZT86IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhPzogSXNzdWVDb21tYW5kU2VydmljZURhdGE7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaG93SGVscCA9IGZhbHNlO1xuICAgIHRoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4ID0gLTE7XG4gICAgdGhpcy5fY29tbWFuZHMgPSBbXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIHNlbGVjdGVkTm9kZToge30sXG4gICAgICBzZWxlY3RlZENsdXN0ZXI6IHt9LFxuICAgICAgX3Nob3dIZWxwOiB7fSxcbiAgICAgIF9jb21tYW5kczoge30sXG4gICAgICBfc2VsZWN0ZWRDb21tYW5kSW5kZXg6IHt9LFxuICAgICAgX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZToge30sXG4gICAgICBfaXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInNlbGVjdGVkQ2x1c3RlclwiKSkge1xuICAgICAgdGhpcy5fY29tbWFuZHMgPSBbXTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4ID0gLTE7XG4gICAgICB0aGlzLl9mZXRjaENvbW1hbmRzRm9yQ2x1c3RlcigpO1xuICAgIH1cbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbkhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNsdXN0ZXJfY29tbWFuZHMuaGVhZGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25IZWxwVGFwfVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmNsdXN0ZXJfY29tbWFuZHMuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmQtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuY2x1c3Rlcl9jb21tYW5kcy5jb21tYW5kc19vZl9jbHVzdGVyXCJcbiAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4fVwiXG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PVwiJHt0aGlzLl9zZWxlY3RlZENvbW1hbmRDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2NvbW1hbmRzLm1hcChcbiAgICAgICAgICAgICAgICAgIChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICA+JHtlbnRyeS5uYW1lICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIChpZDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0QXNQYWRkZWRIZXgoZW50cnkuaWQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwifTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jbHVzdGVyX2NvbW1hbmRzLmhlbHBfY29tbWFuZF9kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHt0aGlzLl9zZWxlY3RlZENvbW1hbmRJbmRleCAhPT0gLTFcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jb21tb24ubWFudWZhY3R1cmVyX2NvZGVfb3ZlcnJpZGVcIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX21hbnVmYWN0dXJlckNvZGVPdmVycmlkZX1cIlxuICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fb25NYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGVDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jb21tb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInpoYVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJpc3N1ZV96aWdiZWVfY2x1c3Rlcl9jb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2VEYXRhPVwiJHt0aGlzLl9pc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGF9XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jbHVzdGVyX2NvbW1hbmRzLmlzc3VlX3ppZ2JlZV9jb21tYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6aGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiaXNzdWVfemlnYmVlX2NsdXN0ZXJfY29tbWFuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGVscC10ZXh0MlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQ29tbWFuZHNGb3JDbHVzdGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSAmJiB0aGlzLnNlbGVjdGVkQ2x1c3RlciAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2NvbW1hbmRzID0gYXdhaXQgZmV0Y2hDb21tYW5kc0ZvckNsdXN0ZXIoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGUhLmllZWUsXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDbHVzdGVyIS5lbmRwb2ludF9pZCxcbiAgICAgICAgdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmlkLFxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2x1c3RlciEudHlwZVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NvbW1hbmRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlSXNzdWVDbHVzdGVyQ29tbWFuZFNlcnZpY2VEYXRhKCk6XG4gICAgfCBJc3N1ZUNvbW1hbmRTZXJ2aWNlRGF0YVxuICAgIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWROb2RlIHx8ICF0aGlzLnNlbGVjdGVkQ2x1c3Rlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaWVlZTogdGhpcy5zZWxlY3RlZE5vZGUhLmllZWUsXG4gICAgICBlbmRwb2ludF9pZDogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmVuZHBvaW50X2lkLFxuICAgICAgY2x1c3Rlcl9pZDogdGhpcy5zZWxlY3RlZENsdXN0ZXIhLmlkLFxuICAgICAgY2x1c3Rlcl90eXBlOiB0aGlzLnNlbGVjdGVkQ2x1c3RlciEudHlwZSxcbiAgICAgIGNvbW1hbmQ6IHRoaXMuX2NvbW1hbmRzW3RoaXMuX3NlbGVjdGVkQ29tbWFuZEluZGV4XS5pZCxcbiAgICAgIGNvbW1hbmRfdHlwZTogdGhpcy5fY29tbWFuZHNbdGhpcy5fc2VsZWN0ZWRDb21tYW5kSW5kZXhdLnR5cGUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX29uTWFudWZhY3R1cmVyQ29kZU92ZXJyaWRlQ2hhbmdlZCh2YWx1ZTogQ2hhbmdlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9tYW51ZmFjdHVyZXJDb2RlT3ZlcnJpZGUgPSB2YWx1ZS5kZXRhaWwhLnZhbHVlO1xuICAgIHRoaXMuX2lzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YSA9IHRoaXMuX2NvbXB1dGVJc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGEoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkQ29tbWFuZENoYW5nZWQoZXZlbnQ6IEl0ZW1TZWxlY3RlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRDb21tYW5kSW5kZXggPSBldmVudC50YXJnZXQhLnNlbGVjdGVkO1xuICAgIHRoaXMuX2lzc3VlQ2x1c3RlckNvbW1hbmRTZXJ2aWNlRGF0YSA9IHRoaXMuX2NvbXB1dGVJc3N1ZUNsdXN0ZXJDb21tYW5kU2VydmljZURhdGEoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbW1hbmQtcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dDIge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1jbHVzdGVyLWNvbW1hbmRzXCI6IFpIQUNsdXN0ZXJDb21tYW5kcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6aGEtY2x1c3Rlci1jb21tYW5kc1wiLCBaSEFDbHVzdGVyQ29tbWFuZHMpO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IENsdXN0ZXIsIGZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlLCBaSEFEZXZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZm9ybWF0QXNQYWRkZWRIZXggfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IEl0ZW1TZWxlY3RlZEV2ZW50IH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ6aGEtY2x1c3Rlci1zZWxlY3RlZFwiOiB7XG4gICAgICBjbHVzdGVyPzogQ2x1c3RlcjtcbiAgICB9O1xuICB9XG59XG5cbmNvbnN0IGNvbXB1dGVDbHVzdGVyS2V5ID0gKGNsdXN0ZXI6IENsdXN0ZXIpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gYCR7Y2x1c3Rlci5uYW1lfSAoRW5kcG9pbnQgaWQ6ICR7XG4gICAgY2x1c3Rlci5lbmRwb2ludF9pZFxuICB9LCBJZDogJHtmb3JtYXRBc1BhZGRlZEhleChjbHVzdGVyLmlkKX0sIFR5cGU6ICR7Y2x1c3Rlci50eXBlfSlgO1xufTtcblxuZXhwb3J0IGNsYXNzIFpIQUNsdXN0ZXJzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIHB1YmxpYyBzaG93SGVscDogYm9vbGVhbjtcbiAgcHVibGljIHNlbGVjdGVkRGV2aWNlPzogWkhBRGV2aWNlO1xuICBwcml2YXRlIF9zZWxlY3RlZENsdXN0ZXJJbmRleDogbnVtYmVyO1xuICBwcml2YXRlIF9jbHVzdGVyczogQ2x1c3RlcltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zaG93SGVscCA9IGZhbHNlO1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlckluZGV4ID0gLTE7XG4gICAgdGhpcy5fY2x1c3RlcnMgPSBbXTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIHNob3dIZWxwOiB7fSxcbiAgICAgIHNlbGVjdGVkRGV2aWNlOiB7fSxcbiAgICAgIF9zZWxlY3RlZENsdXN0ZXJJbmRleDoge30sXG4gICAgICBfY2x1c3RlcnM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwic2VsZWN0ZWREZXZpY2VcIikpIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJzID0gW107XG4gICAgICB0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleCA9IC0xO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiemhhLWNsdXN0ZXItc2VsZWN0ZWRcIiwge1xuICAgICAgICBjbHVzdGVyOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2ZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlKCk7XG4gICAgfVxuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcGVydGllcyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwibm9kZS1waWNrZXJcIj5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56aGEuY29tbW9uLmNsdXN0ZXJzXCIpfVwiXG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuX3NlbGVjdGVkQ2x1c3RlckluZGV4fVwiXG4gICAgICAgICAgICBAaXJvbi1zZWxlY3Q9XCIke3RoaXMuX3NlbGVjdGVkQ2x1c3RlckNoYW5nZWR9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX2NsdXN0ZXJzLm1hcChcbiAgICAgICAgICAgICAgKGVudHJ5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7Y29tcHV0ZUNsdXN0ZXJLZXkoZW50cnkpfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgIDwvZGl2PlxuICAgICAgJHt0aGlzLnNob3dIZWxwXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5jbHVzdGVycy5oZWxwX2NsdXN0ZXJfZHJvcGRvd25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQ2x1c3RlcnNGb3JaaGFOb2RlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2NsdXN0ZXJzID0gYXdhaXQgZmV0Y2hDbHVzdGVyc0ZvclpoYU5vZGUoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zZWxlY3RlZERldmljZSEuaWVlZVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NsdXN0ZXJzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RlZENsdXN0ZXJDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkQ2x1c3RlckluZGV4ID0gZXZlbnQudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ6aGEtY2x1c3Rlci1zZWxlY3RlZFwiLCB7XG4gICAgICBjbHVzdGVyOiB0aGlzLl9jbHVzdGVyc1t0aGlzLl9zZWxlY3RlZENsdXN0ZXJJbmRleF0sXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWNsdXN0ZXJcIjogWkhBQ2x1c3RlcnM7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiemhhLWNsdXN0ZXJzXCIsIFpIQUNsdXN0ZXJzKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtZGVzY3JpcHRpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFpIQU5ldHdvcmsgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfc2hvd0hlbHA6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaG93SGVscCA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBpc1dpZGU6IHt9LFxuICAgICAgX3Nob3dIZWxwOiB7fSxcbiAgICAgIF9qb2luUGFyYW1zOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEubmV0d29ya19tYW5hZ2VtZW50LmhlYWRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5uZXR3b3JrX21hbmFnZW1lbnQuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fb25BZGREZXZpY2VzQ2xpY2t9PlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuemhhLmNvbW1vbi5hZGRfZGV2aWNlc1wiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6aGFcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicGVybWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLXRleHQyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHByaXZhdGUgX29uQWRkRGV2aWNlc0NsaWNrKCkge1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiYWRkXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dnbGUtaGVscC1pY29uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0MiB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtbmV0d29ya1wiOiBaSEFOZXR3b3JrO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInpoYS1uZXR3b3JrXCIsIFpIQU5ldHdvcmspO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi96aGEtY2x1c3RlcnNcIjtcbmltcG9ydCBcIi4vemhhLWRldmljZS1jYXJkXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgZmV0Y2hEZXZpY2VzLCBaSEFEZXZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96aGFcIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgc29ydFpIQURldmljZXMgfSBmcm9tIFwiLi9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IEl0ZW1TZWxlY3RlZEV2ZW50LCBaSEFEZXZpY2VSZW1vdmVkRXZlbnQgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInpoYS1ub2RlLXNlbGVjdGVkXCI6IHtcbiAgICAgIG5vZGU/OiBaSEFEZXZpY2U7XG4gICAgfTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcInpoYS1ub2RlXCIpXG5leHBvcnQgY2xhc3MgWkhBTm9kZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGU/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zaG93SGVscDogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZERldmljZUluZGV4OiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2U/OiBaSEFEZXZpY2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25vZGVzOiBaSEFEZXZpY2VbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2ZldGNoRGV2aWNlcygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9XCIke3RoaXMuaXNXaWRlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbkhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLm5vZGVfbWFuYWdlbWVudC5oZWFkZXJcIlxuICAgICAgICAgICAgKX08L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oZWxwLWljb25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9vbkhlbHBUYXB9XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmhlbHAtY2lyY2xlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEubm9kZV9tYW5hZ2VtZW50LmludHJvZHVjdGlvblwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEubm9kZV9tYW5hZ2VtZW50LmhpbnRfYmF0dGVyeV9kZXZpY2VzXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5ub2RlX21hbmFnZW1lbnQuaGludF93YWtldXBcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGUtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuY29tbW9uLmRldmljZXNcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIGlkPVwiemhhLWRldmljZS1zZWxlY3RvclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD1cIiR7dGhpcy5fc2VsZWN0ZWREZXZpY2VDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLl9zZWxlY3RlZERldmljZUluZGV4fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuX25vZGVzLm1hcChcbiAgICAgICAgICAgICAgICAgIChlbnRyeSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICA+JHtlbnRyeS51c2VyX2dpdmVuX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZW50cnkudXNlcl9naXZlbl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGVudHJ5Lm5hbWV9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgJHt0aGlzLl9zaG93SGVscFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLm5vZGVfbWFuYWdlbWVudC5oZWxwX25vZGVfZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7dGhpcy5fc2VsZWN0ZWREZXZpY2VJbmRleCAhPT0gLTFcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8emhhLWRldmljZS1jYXJkXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAuZGV2aWNlPSR7dGhpcy5fc2VsZWN0ZWREZXZpY2V9XG4gICAgICAgICAgICAgICAgICAubmFycm93PSR7IXRoaXMuaXNXaWRlfVxuICAgICAgICAgICAgICAgICAgLnNob3dIZWxwPSR7dGhpcy5fc2hvd0hlbHB9XG4gICAgICAgICAgICAgICAgICBzaG93QWN0aW9uc1xuICAgICAgICAgICAgICAgICAgQHpoYS1kZXZpY2UtcmVtb3ZlZD0ke3RoaXMuX29uRGV2aWNlUmVtb3ZlZH1cbiAgICAgICAgICAgICAgICA+PC96aGEtZGV2aWNlLWNhcmQ+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3RoaXMuX3NlbGVjdGVkRGV2aWNlID8gdGhpcy5fcmVuZGVyQ2x1c3RlcnMoKSA6IFwiXCJ9XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckNsdXN0ZXJzKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDx6aGEtY2x1c3RlcnNcbiAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAuc2VsZWN0ZWREZXZpY2U9XCIke3RoaXMuX3NlbGVjdGVkRGV2aWNlfVwiXG4gICAgICAgIC5zaG93SGVscD1cIiR7dGhpcy5fc2hvd0hlbHB9XCJcbiAgICAgID48L3poYS1jbHVzdGVycz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25IZWxwVGFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nob3dIZWxwID0gIXRoaXMuX3Nob3dIZWxwO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWREZXZpY2VDaGFuZ2VkKGV2ZW50OiBJdGVtU2VsZWN0ZWRFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlSW5kZXggPSBldmVudCEudGFyZ2V0IS5zZWxlY3RlZDtcbiAgICB0aGlzLl9zZWxlY3RlZERldmljZSA9IHRoaXMuX25vZGVzW3RoaXMuX3NlbGVjdGVkRGV2aWNlSW5kZXhdO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInpoYS1ub2RlLXNlbGVjdGVkXCIsIHsgbm9kZTogdGhpcy5fc2VsZWN0ZWREZXZpY2UgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERldmljZXMoKSB7XG4gICAgdGhpcy5fbm9kZXMgPSAoYXdhaXQgZmV0Y2hEZXZpY2VzKHRoaXMuaGFzcyEpKS5zb3J0KHNvcnRaSEFEZXZpY2VzKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uRGV2aWNlUmVtb3ZlZChldmVudDogWkhBRGV2aWNlUmVtb3ZlZEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWREZXZpY2VJbmRleCA9IC0xO1xuICAgIHRoaXMuX25vZGVzLnNwbGljZSh0aGlzLl9ub2Rlcy5pbmRleE9mKGV2ZW50LmRldGFpbCEuZGV2aWNlISksIDEpO1xuICAgIHRoaXMuX3NlbGVjdGVkRGV2aWNlID0gdW5kZWZpbmVkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInpoYS1ub2RlLXNlbGVjdGVkXCIsIHsgbm9kZTogdGhpcy5fc2VsZWN0ZWREZXZpY2UgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub2RlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub2RlLXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleDogMSAwIDMwMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJ6aGEtbm9kZVwiOiBaSEFOb2RlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBRUE7QUFHQTtBQUFBOztBQUtBO0FBK0VBO0FBN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFuRkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBdUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBR0E7QUFHQTtBQUFBOztBQUlBO0FBQ0E7QUFDQTtBQXFMQTtBQWxMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7O0FBRUE7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBS0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUE7QUFDQTtBQUNBO0FBQ0E7QUExTEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFRQTtBQUVBO0FBT0E7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBTUE7Ozs7OztBQU1BOzs7Ozs7QUFRQTs7Ozs7QUFPQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBS0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQU9BOztBQUlBO0FBQ0E7QUFDQTs7OztBQU1BO0FBQ0E7O0FBSUE7QUFDQTs7QUFFQTs7QUFJQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFJQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDclhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFNQTtBQUVBO0FBT0E7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBTUE7Ozs7OztBQU1BOzs7Ozs7QUFRQTs7Ozs7QUFPQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBS0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBSUE7QUFDQTtBQUNBOzs7OztBQU9BOzs7QUFHQTs7QUFFQTs7QUFJQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7OztBQ3RUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUdBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7QUM1S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7OztBQU1BOzs7OztBQUtBOzs7OztBQU9BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQWFBO0FBQUE7O0FBR0E7QUFDQTtBQUVBO0FBeU1BO0FBdk1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7OztBQU1BOzs7OztBQUtBOztBQUlBOztBQUlBOzs7OztBQU9BOzs7Ozs7QUFRQTtBQUNBOztBQUVBOztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUtBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQTlNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==