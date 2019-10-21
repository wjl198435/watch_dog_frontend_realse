(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-picture-card-editor"],{

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

/***/ "./src/panels/lovelace/components/hui-action-editor.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-action-editor.ts ***!
  \*************************************************************/
/*! exports provided: HuiActionEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiActionEditor", function() { return HuiActionEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");








let HuiActionEditor = class HuiActionEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    get _action() {
        return this.config.action || "";
    }
    get _navigation_path() {
        const config = this.config;
        return config.navigation_path || "";
    }
    get _url_path() {
        const config = this.config;
        return config.url_path || "";
    }
    get _service() {
        const config = this.config;
        return config.service || "";
    }
    render() {
        if (!this.hass || !this.actions) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <paper-dropdown-menu
        .label="${this.label}"
        .configValue="${"action"}"
        @value-changed="${this._valueChanged}"
      >
        <paper-listbox
          slot="dropdown-content"
          .selected="${this.actions.indexOf(this._action)}"
        >
          ${this.actions.map((action) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-item>${action}</paper-item>
            `;
        })}
        </paper-listbox>
      </paper-dropdown-menu>
      ${this._action === "navigate"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <paper-input
              label="Navigation Path"
              .value="${this._navigation_path}"
              .configValue="${"navigation_path"}"
              @value-changed="${this._valueChanged}"
            ></paper-input>
          `
            : ""}
      ${this._action === "url"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <paper-input
              label="Url Path"
              .value="${this._url_path}"
              .configValue="${"url_path"}"
              @value-changed="${this._valueChanged}"
            ></paper-input>
          `
            : ""}
      ${this.config && this.config.action === "call-service"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <ha-service-picker
              .hass="${this.hass}"
              .value="${this._service}"
              .configValue="${"service"}"
              @value-changed="${this._valueChanged}"
            ></ha-service-picker>
            <h3>Toggle Editor to input Service Data</h3>
          `
            : ""}
    `;
    }
    _valueChanged(ev) {
        if (!this.hass) {
            return;
        }
        const target = ev.target;
        if (this[`_${target.configValue}`] === target.value) {
            return;
        }
        if (target.configValue === "action") {
            this.config = { action: "none" };
        }
        if (target.configValue) {
            this.config = Object.assign(Object.assign({}, this.config), { [target.configValue]: target.value });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "action-changed");
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiActionEditor.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiActionEditor.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiActionEditor.prototype, "actions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiActionEditor.prototype, "hass", void 0);
HuiActionEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-action-editor")
], HuiActionEditor);



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

/***/ "./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts":
/*!*******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts ***!
  \*******************************************************************************/
/*! exports provided: HuiPictureCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureCardEditor", function() { return HuiPictureCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/lovelace/components/hui-action-editor.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");








const cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"])({
    type: "string",
    image: "string?",
    tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_5__["actionConfigStruct"]),
    hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_4__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_5__["actionConfigStruct"]),
});
let HuiPictureCardEditor = class HuiPictureCardEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        config = cardConfigStruct(config);
        this._config = config;
    }
    get _image() {
        return this._config.image || "";
    }
    get _tap_action() {
        return this._config.tap_action || { action: "none" };
    }
    get _hold_action() {
        return this._config.hold_action || { action: "none" };
    }
    render() {
        if (!this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const actions = ["navigate", "url", "call-service", "none"];
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${_config_elements_style__WEBPACK_IMPORTED_MODULE_7__["configElementStyle"]}
      <div class="card-config">
        <paper-input
          .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.image")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})"
          .value="${this._image}"
          .configValue="${"image"}"
          @value-changed="${this._valueChanged}"
        ></paper-input>
        <div class="side-by-side">
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass="${this.hass}"
            .config="${this._tap_action}"
            .actions="${actions}"
            .configValue="${"tap_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
          <hui-action-editor
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
            .hass="${this.hass}"
            .config="${this._hold_action}"
            .actions="${actions}"
            .configValue="${"hold_action"}"
            @action-changed="${this._valueChanged}"
          ></hui-action-editor>
        </div>
      </div>
    `;
    }
    _valueChanged(ev) {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (this[`_${target.configValue}`] === target.value ||
            this[`_${target.configValue}`] === target.config) {
            return;
        }
        if (target.configValue) {
            if (target.value === "") {
                delete this._config[target.configValue];
            }
            else {
                this._config = Object.assign(Object.assign({}, this._config), { [target.configValue]: target.value ? target.value : target.config });
            }
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "config-changed", { config: this._config });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureCardEditor.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureCardEditor.prototype, "_config", void 0);
HuiPictureCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-card-editor")
], HuiPictureCardEditor);



/***/ }),

/***/ "./src/panels/lovelace/editor/types.ts":
/*!*********************************************!*\
  !*** ./src/panels/lovelace/editor/types.ts ***!
  \*********************************************/
/*! exports provided: actionConfigStruct, entitiesConfigStruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionConfigStruct", function() { return actionConfigStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesConfigStruct", function() { return entitiesConfigStruct; });
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");

const actionConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"])({
    action: "string",
    navigation_path: "string?",
    url_path: "string?",
    service: "string?",
    service_data: "object?",
});
const entitiesConfigStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].union([
    {
        entity: "entity-id",
        name: "string?",
        icon: "icon?",
    },
    "entity-id",
]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXBpY3R1cmUtY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktcGljdHVyZS1jYXJkLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuY2xhc3MgSGFDb21ib0JveCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW1zPVwiW1tfaXRlbXNdXVwiXG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cIltbaXRlbVZhbHVlUGF0aF1dXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiW1tpdGVtTGFiZWxQYXRoXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIG9wZW5lZD1cInt7b3BlbmVkfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJbW2FsbG93Q3VzdG9tVmFsdWVdXVwiXG4gICAgICAgIG9uLWNoYW5nZT1cIl9maXJlQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGF1dG9mb2N1cz1cIltbYXV0b2ZvY3VzXV1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsYWJlbF1dXCJcbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICB2YWx1ZT1cIltbdmFsdWVdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIXZhbHVlXV1cIlxuICAgICAgICAgICAgPkNsZWFyPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJbW19jb21wdXRlVG9nZ2xlSWNvbihvcGVuZWQpXV1cIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIWl0ZW1zLmxlbmd0aF1dXCJcbiAgICAgICAgICAgID5Ub2dnbGU8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogLTVweCAtMTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhbGxvd0N1c3RvbVZhbHVlOiBCb29sZWFuLFxuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaXRlbXNDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX2l0ZW1zOiBPYmplY3QsXG4gICAgICBpdGVtTGFiZWxQYXRoOiBTdHJpbmcsXG4gICAgICBpdGVtVmFsdWVQYXRoOiBTdHJpbmcsXG4gICAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29wZW5lZENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgfVxuICB9XG5cbiAgX2l0ZW1zQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IG5ld1ZhbDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKSB7XG4gICAgcmV0dXJuIG9wZW5lZCA/IFwiaGFzczptZW51LXVwXCIgOiBcImhhc3M6bWVudS1kb3duXCI7XG4gIH1cblxuICBfY29tcHV0ZUl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgcmV0dXJuIGl0ZW1MYWJlbFBhdGggPyBpdGVtW2l0ZW1MYWJlbFBhdGhdIDogaXRlbTtcbiAgfVxuXG4gIF9maXJlQ2hhbmdlZChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImNoYW5nZVwiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb21iby1ib3hcIiwgSGFDb21ib0JveCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNvbWJvLWJveFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTZXJ2aWNlUGlja2VyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbWJvLWJveFxuICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuc2VydmljZS1waWNrZXIuc2VydmljZScpXV1cIlxuICAgICAgICBpdGVtcz1cIltbX3NlcnZpY2VzXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIlwiXG4gICAgICA+PC9oYS1jb21iby1ib3g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9oYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9zZXJ2aWNlczogQXJyYXksXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9oYXNzQ2hhbmdlZChoYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFoYXNzKSB7XG4gICAgICB0aGlzLl9zZXJ2aWNlcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2xkSGFzcyAmJiBoYXNzLnNlcnZpY2VzID09PSBvbGRIYXNzLnNlcnZpY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlcylcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBPYmplY3Qua2V5cyhoYXNzLnNlcnZpY2VzW2RvbWFpbl0pLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYCR7ZG9tYWlufS4ke3NlcnZpY2VzW2ldfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3NlcnZpY2VzID0gcmVzdWx0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtcGlja2VyXCIsIEhhU2VydmljZVBpY2tlcik7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNFbnRpdHlJZCh2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIi5cIikpIHtcbiAgICByZXR1cm4gXCJlbnRpdHkgaWQgc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ2RvbWFpbi5lbnRpdHknXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNJY29uKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGEgc3RyaW5nXCI7XG4gIH1cbiAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhcIjpcIikpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdtZGk6aWNvbidcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCB7IHN1cGVyc3RydWN0IH0gZnJvbSBcInN1cGVyc3RydWN0XCI7XG5pbXBvcnQgeyBpc0VudGl0eUlkIH0gZnJvbSBcIi4vaXMtZW50aXR5LWlkXCI7XG5pbXBvcnQgeyBpc0ljb24gfSBmcm9tIFwiLi9pcy1pY29uXCI7XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCh7XG4gIHR5cGVzOiB7XG4gICAgXCJlbnRpdHktaWRcIjogaXNFbnRpdHlJZCxcbiAgICBpY29uOiBpc0ljb24sXG4gIH0sXG59KTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci10ZXh0YXJlYVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXNlcnZpY2UtcGlja2VyXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCwgSEFTU0RvbUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgRWRpdG9yVGFyZ2V0IH0gZnJvbSBcIi4uL2VkaXRvci90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQWN0aW9uQ29uZmlnLFxuICBOYXZpZ2F0ZUFjdGlvbkNvbmZpZyxcbiAgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWcsXG4gIFVybEFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJhY3Rpb24tY2hhbmdlZFwiOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZm9yIGFkZCBldmVudCBsaXN0ZW5lclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgXCJhY3Rpb24tY2hhbmdlZFwiOiBIQVNTRG9tRXZlbnQ8dW5kZWZpbmVkPjtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1hY3Rpb24tZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpQWN0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb25maWc/OiBBY3Rpb25Db25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhY3Rpb25zPzogc3RyaW5nW107XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIGdldCBfYWN0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnIS5hY3Rpb24gfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfbmF2aWdhdGlvbl9wYXRoKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWchIGFzIE5hdmlnYXRlQWN0aW9uQ29uZmlnO1xuICAgIHJldHVybiBjb25maWcubmF2aWdhdGlvbl9wYXRoIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3VybF9wYXRoKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWchIGFzIFVybEFjdGlvbkNvbmZpZztcbiAgICByZXR1cm4gY29uZmlnLnVybF9wYXRoIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3NlcnZpY2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZyEgYXMgQ2FsbFNlcnZpY2VBY3Rpb25Db25maWc7XG4gICAgcmV0dXJuIGNvbmZpZy5zZXJ2aWNlIHx8IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuYWN0aW9ucykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAubGFiZWw9XCIke3RoaXMubGFiZWx9XCJcbiAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImFjdGlvblwifVwiXG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgLnNlbGVjdGVkPVwiJHt0aGlzLmFjdGlvbnMuaW5kZXhPZih0aGlzLl9hY3Rpb24pfVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7YWN0aW9ufTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICR7dGhpcy5fYWN0aW9uID09PSBcIm5hdmlnYXRlXCJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiTmF2aWdhdGlvbiBQYXRoXCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYXZpZ2F0aW9uX3BhdGh9XCJcbiAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hdmlnYXRpb25fcGF0aFwifVwiXG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLl9hY3Rpb24gPT09IFwidXJsXCJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiVXJsIFBhdGhcIlxuICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3VybF9wYXRofVwiXG4gICAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ1cmxfcGF0aFwifVwiXG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5hY3Rpb24gPT09IFwiY2FsbC1zZXJ2aWNlXCJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLXNlcnZpY2UtcGlja2VyXG4gICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9zZXJ2aWNlfVwiXG4gICAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJzZXJ2aWNlXCJ9XCJcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPjwvaGEtc2VydmljZS1waWNrZXI+XG4gICAgICAgICAgICA8aDM+VG9nZ2xlIEVkaXRvciB0byBpbnB1dCBTZXJ2aWNlIERhdGE8L2gzPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgaWYgKHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgIHRoaXMuY29uZmlnID0geyBhY3Rpb246IFwibm9uZVwiIH07XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUpIHtcbiAgICAgIHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZyEsIFt0YXJnZXQuY29uZmlnVmFsdWUhXTogdGFyZ2V0LnZhbHVlIH07XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJhY3Rpb24tY2hhbmdlZFwiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1hY3Rpb24tZWRpdG9yXCI6IEh1aUFjdGlvbkVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnRWxlbWVudFN0eWxlID0gaHRtbGBcbiAgPHN0eWxlPlxuICAgIGhhLXN3aXRjaCB7XG4gICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgfVxuICAgIC5zaWRlLWJ5LXNpZGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLnNpZGUtYnktc2lkZSA+ICoge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgLnN1ZmZpeCB7XG4gICAgICBtYXJnaW46IDAgOHB4O1xuICAgIH1cbiAgPC9zdHlsZT5cbmA7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvclwiO1xuXG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQge1xuICBFbnRpdGllc0VkaXRvckV2ZW50LFxuICBFZGl0b3JUYXJnZXQsXG4gIGFjdGlvbkNvbmZpZ1N0cnVjdCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IFBpY3R1cmVDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NhcmRzL3R5cGVzXCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICB0eXBlOiBcInN0cmluZ1wiLFxuICBpbWFnZTogXCJzdHJpbmc/XCIsXG4gIHRhcF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICBob2xkX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktcGljdHVyZS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aVBpY3R1cmVDYXJkRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudFxuICBpbXBsZW1lbnRzIExvdmVsYWNlQ2FyZEVkaXRvciB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBQaWN0dXJlQ2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogUGljdHVyZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICBjb25maWcgPSBjYXJkQ29uZmlnU3RydWN0KGNvbmZpZyk7XG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgZ2V0IF9pbWFnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmltYWdlIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3RhcF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50YXBfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICB9XG5cbiAgZ2V0IF9ob2xkX2FjdGlvbigpOiBBY3Rpb25Db25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmhvbGRfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbnMgPSBbXCJuYXZpZ2F0ZVwiLCBcInVybFwiLCBcImNhbGwtc2VydmljZVwiLCBcIm5vbmVcIl07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y29uZmlnRWxlbWVudFN0eWxlfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmltYWdlXCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5yZXF1aXJlZFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2ltYWdlfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImltYWdlXCJ9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPGh1aS1hY3Rpb24tZWRpdG9yXG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnRhcF9hY3Rpb25cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmNvbmZpZz1cIiR7dGhpcy5fdGFwX2FjdGlvbn1cIlxuICAgICAgICAgICAgLmFjdGlvbnM9XCIke2FjdGlvbnN9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0YXBfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPGh1aS1hY3Rpb24tZWRpdG9yXG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmhvbGRfYWN0aW9uXCJcbiAgICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKX0pXCJcbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX2hvbGRfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImhvbGRfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG5cbiAgICBpZiAoXG4gICAgICB0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSB8fFxuICAgICAgdGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQuY29uZmlnXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0YXJnZXQuY29uZmlnVmFsdWUpIHtcbiAgICAgIGlmICh0YXJnZXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOiB0YXJnZXQudmFsdWUgPyB0YXJnZXQudmFsdWUgOiB0YXJnZXQuY29uZmlnLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktcGljdHVyZS1jYXJkLWVkaXRvclwiOiBIdWlQaWN0dXJlQ2FyZEVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBMb3ZlbGFjZVZpZXdDb25maWcsXG4gIEFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9lbnRpdHktcm93cy90eXBlc1wiO1xuaW1wb3J0IHsgSW5wdXRUeXBlIH0gZnJvbSBcInpsaWJcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBZYW1sQ2hhbmdlZEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICB5YW1sOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0VkaXRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgY29uZmlnOiBMb3ZlbGFjZVZpZXdDb25maWc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVmFsdWUge1xuICBmb3JtYXQ6IFwianNvblwiIHwgXCJ5YW1sXCI7XG4gIHZhbHVlPzogc3RyaW5nIHwgTG92ZWxhY2VDYXJkQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Vycm9yIHtcbiAgdHlwZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXRpZXNFZGl0b3JFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICBlbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGNvbmZpZ1ZhbHVlPzogc3RyaW5nO1xuICB0eXBlPzogSW5wdXRUeXBlO1xuICBjb25maWc6IEFjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUGlja1RhcmdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgYWN0aW9uOiBcInN0cmluZ1wiLFxuICBuYXZpZ2F0aW9uX3BhdGg6IFwic3RyaW5nP1wiLFxuICB1cmxfcGF0aDogXCJzdHJpbmc/XCIsXG4gIHNlcnZpY2U6IFwic3RyaW5nP1wiLFxuICBzZXJ2aWNlX2RhdGE6IFwib2JqZWN0P1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBlbnRpdGllc0NvbmZpZ1N0cnVjdCA9IHN0cnVjdC51bmlvbihbXG4gIHtcbiAgICBlbnRpdHk6IFwiZW50aXR5LWlkXCIsXG4gICAgbmFtZTogXCJzdHJpbmc/XCIsXG4gICAgaWNvbjogXCJpY29uP1wiLFxuICB9LFxuICBcImVudGl0eS1pZFwiLFxuXSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBcUJBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQU9BO0FBRUE7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7O0FBR0E7QUFLQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0ZBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9