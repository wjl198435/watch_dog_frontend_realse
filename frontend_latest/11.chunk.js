(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[11],{

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

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
    listen(node, eventName, methodName) {
        super.listen(node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    }
}
customElements.define("ha-icon", HaIcon);


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

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
const UNAVAILABLE = "unavailable";
const ENTITY_COMPONENT_DOMAINS = [
    "air_quality",
    "alarm_control_panel",
    "alert",
    "automation",
    "binary_sensor",
    "calendar",
    "camera",
    "counter",
    "cover",
    "dominos",
    "fan",
    "geo_location",
    "group",
    "history_graph",
    "image_processing",
    "input_boolean",
    "input_datetime",
    "input_number",
    "input_select",
    "input_text",
    "light",
    "lock",
    "mailbox",
    "media_player",
    "person",
    "plant",
    "remember_the_milk",
    "remote",
    "scene",
    "script",
    "sensor",
    "switch",
    "timer",
    "utility_meter",
    "vacuum",
    "weather",
    "wink",
    "zha",
    "zwave",
];


/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




// Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */
const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      /**
   * Dispatches a custom event with an optional detail value.
   *
   * @param {string} type Name of event type.
   * @param {*=} detail Detail value containing event-specific
   *   payload.
   * @param {{ bubbles: (boolean|undefined),
               cancelable: (boolean|undefined),
                composed: (boolean|undefined) }=}
    *  options Object specifying options.  These may include:
    *  `bubbles` (boolean, defaults to `true`),
    *  `cancelable` (boolean, defaults to false), and
    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
    * @return {Event} The new event that was fired.
    */
      fire(type, detail, options) {
        options = options || {};
        return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
      }
    }
);


/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      static get properties() {
        return {
          hass: Object,

          /**
           * Translates a string to the current `language`. Any parameters to the
           * string should be passed in order, as follows:
           * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
           */
          localize: {
            type: Function,
            computed: "__computeLocalize(hass.localize)",
          },
        };
      }

      __computeLocalize(localize) {
        return localize;
      }
    }
));


/***/ }),

/***/ "./src/panels/developer-tools/service/developer-tools-service.js":
/*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js");













const ERROR_SENTINEL = {};
class HaPanelDevService extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          display: block;
          padding: 16px;
          direction: ltr;
        }

        .ha-form {
          margin-right: 16px;
          max-width: 400px;
        }

        mwc-button {
          margin-top: 8px;
        }

        .description {
          margin-top: 24px;
          white-space: pre-wrap;
        }

        .header {
          @apply --paper-font-title;
        }

        .attributes th {
          text-align: left;
        }

        .attributes tr {
          vertical-align: top;
        }

        .attributes tr:nth-child(odd) {
          background-color: var(--table-row-background-color, #eee);
        }

        .attributes tr:nth-child(even) {
          background-color: var(--table-row-alternative-background-color, #eee);
        }

        .attributes td:nth-child(3) {
          white-space: pre-wrap;
          word-break: break-word;
        }

        pre {
          margin: 0;
        }

        h1 {
          white-space: normal;
        }

        td {
          padding: 4px;
        }

        .error {
          color: var(--google-red-500);
        }
      </style>

      <app-localstorage-document
        key="panel-dev-service-state-domain-service"
        data="{{domainService}}"
      >
      </app-localstorage-document>
      <app-localstorage-document
        key="[[_computeServicedataKey(domainService)]]"
        data="{{serviceData}}"
      >
      </app-localstorage-document>

      <div class="content">
        <p>
          The service dev tool allows you to call any available service in Home
          Assistant.
        </p>

        <div class="ha-form">
          <ha-service-picker
            hass="[[hass]]"
            value="{{domainService}}"
          ></ha-service-picker>
          <template is="dom-if" if="[[_computeHasEntity(_attributes)]]">
            <ha-entity-picker
              hass="[[hass]]"
              value="[[_computeEntityValue(parsedJSON)]]"
              on-change="_entityPicked"
              disabled="[[!validJSON]]"
              domain-filter="[[_computeEntityDomainFilter(_domain)]]"
              allow-custom-entity
            ></ha-entity-picker>
          </template>
          <p>Service Data (YAML, optional)</p>
          <ha-code-editor
            mode="yaml"
            value="[[serviceData]]"
            error="[[!validJSON]]"
            on-value-changed="_yamlChanged"
          ></ha-code-editor>
          <mwc-button on-click="_callService" raised disabled="[[!validJSON]]">
            Call Service
          </mwc-button>
        </div>

        <template is="dom-if" if="[[!domainService]]">
          <h1>Select a service to see the description</h1>
        </template>

        <template is="dom-if" if="[[domainService]]">
          <template is="dom-if" if="[[!_description]]">
            <h1>No description is available</h1>
          </template>
          <template is="dom-if" if="[[_description]]">
            <h3>[[_description]]</h3>

            <table class="attributes">
              <tr>
                <th>Parameter</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
              <template is="dom-if" if="[[!_attributes.length]]">
                <tr>
                  <td colspan="3">This service takes no parameters.</td>
                </tr>
              </template>
              <template is="dom-repeat" items="[[_attributes]]" as="attribute">
                <tr>
                  <td><pre>[[attribute.key]]</pre></td>
                  <td>[[attribute.description]]</td>
                  <td>[[attribute.example]]</td>
                </tr>
              </template>
            </table>

            <template is="dom-if" if="[[_attributes.length]]">
              <mwc-button on-click="_fillExampleData">
                Fill Example Data
              </mwc-button>
            </template>
          </template>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      domainService: {
        type: String,
        observer: "_domainServiceChanged",
      },

      _domain: {
        type: String,
        computed: "_computeDomain(domainService)",
      },

      _service: {
        type: String,
        computed: "_computeService(domainService)",
      },

      serviceData: {
        type: String,
        value: "",
      },

      parsedJSON: {
        type: Object,
        computed: "_computeParsedServiceData(serviceData)",
      },

      validJSON: {
        type: Boolean,
        computed: "_computeValidJSON(parsedJSON)",
      },

      _attributes: {
        type: Array,
        computed: "_computeAttributesArray(hass, _domain, _service)",
      },

      _description: {
        type: String,
        computed: "_computeDescription(hass, _domain, _service)",
      },
    };
  }

  _domainServiceChanged() {
    this.serviceData = "";
  }

  _computeAttributesArray(hass, domain, service) {
    const serviceDomains = hass.services;
    if (!(domain in serviceDomains)) return [];
    if (!(service in serviceDomains[domain])) return [];

    const fields = serviceDomains[domain][service].fields;
    return Object.keys(fields).map(function(field) {
      return { key: field, ...fields[field] };
    });
  }

  _computeDescription(hass, domain, service) {
    const serviceDomains = hass.services;
    if (!(domain in serviceDomains)) return undefined;
    if (!(service in serviceDomains[domain])) return undefined;
    return serviceDomains[domain][service].description;
  }

  _computeServicedataKey(domainService) {
    return `panel-dev-service-state-servicedata.${domainService}`;
  }

  _computeDomain(domainService) {
    return domainService.split(".", 1)[0];
  }

  _computeService(domainService) {
    return domainService.split(".", 2)[1] || null;
  }

  _computeParsedServiceData(serviceData) {
    try {
      return serviceData.trim() ? js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeLoad(serviceData) : {};
    } catch (err) {
      return ERROR_SENTINEL;
    }
  }

  _computeValidJSON(parsedJSON) {
    return parsedJSON !== ERROR_SENTINEL;
  }

  _computeHasEntity(attributes) {
    return attributes.some((attr) => attr.key === "entity_id");
  }

  _computeEntityValue(parsedJSON) {
    return parsedJSON === ERROR_SENTINEL ? "" : parsedJSON.entity_id;
  }

  _computeEntityDomainFilter(domain) {
    return _data_entity__WEBPACK_IMPORTED_MODULE_4__["ENTITY_COMPONENT_DOMAINS"].includes(domain) ? domain : null;
  }

  _callService() {
    if (this.parsedJSON === ERROR_SENTINEL) {
      // eslint-disable-next-line
      alert(`Error parsing YAML: ${this.serviceData}`);
      return;
    }

    this.hass.callService(this._domain, this._service, this.parsedJSON);
  }

  _fillExampleData() {
    const example = {};
    this._attributes.forEach((attribute) => {
      if (attribute.example) {
        let value = "";
        try {
          value = js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeLoad(attribute.example);
        } catch (err) {
          value = attribute.example;
        }
        example[attribute.key] = value;
      }
    });
    this.serviceData = js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeDump(example);
  }

  _entityPicked(ev) {
    this.serviceData = js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeDump({
      ...this.parsedJSON,
      entity_id: ev.target.value,
    });
  }

  _yamlChanged(ev) {
    this.serviceData = ev.detail.value;
  }
}

customElements.define("developer-tools-service", HaPanelDevService);


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


/***/ }),

/***/ "./src/util/app-localstorage-document.js":
/*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* Forked because it contained an import.meta which webpack doesn't support. */
/* eslint-disable */
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/




/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */
Object(_polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: "app-localstorage-document",
  behaviors: [_polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__["AppStorageBehavior"]],

  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: { type: String, notify: true },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: { type: Boolean, value: false },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: { type: Object, computed: "__computeStorage(sessionOnly)" },
  },

  observers: ["__storageSourceChanged(storage, key)"],

  attached: function() {
    this.listen(window, "storage", "__onStorage");
    this.listen(
      window.top,
      "app-local-storage-changed",
      "__onAppLocalStorageChanged"
    );
  },

  detached: function() {
    this.unlisten(window, "storage", "__onStorage");
    this.unlisten(
      window.top,
      "app-local-storage-changed",
      "__onAppLocalStorageChanged"
    );
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function(key) {
    try {
      this.__setStorageValue(/*{@type if (key ty){String}}*/ key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key = /** @type {String} */ (key);

    return Promise.resolve();
  },

  reset: function() {
    this.key = null;
    this.data = this.zeroValue;
  },

  destroy: function() {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },

  getStoredValue: function(path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, { data: value });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },

  setStoredValue: function(path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire("app-local-storage-changed", this, { node: window.top });
    }

    return Promise.resolve(value);
  },

  __computeStorage: function(sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },

  __storageSourceChanged: function(storage, key) {
    this._initializeStoredValue();
  },

  __onStorage: function(event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function() {
      this.set("data", this.__parseValueFromStorage());
    });
  },

  __onAppLocalStorageChanged: function(event) {
    if (
      event.detail === this ||
      event.detail.key !== this.key ||
      event.detail.storage !== this.storage
    ) {
      return;
    }
    this.syncToMemory(function() {
      this.set("data", event.detail.data);
    });
  },

  __parseValueFromStorage: function() {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error("Failed to parse value from storage for", this.key);
    }
  },

  __setStorageValue: function(key, value) {
    if (typeof value === "undefined") value = null;
    this.storage.setItem(key, JSON.stringify(value));
  },
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9zZXJ2aWNlL2RldmVsb3Blci10b29scy1zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgdHlwZSBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgPSAoZW50aXR5SWQ6IEhhc3NFbnRpdHkpID0+IGJvb2xlYW47XG5cbmNvbnN0IHJvd1JlbmRlcmVyID0gKFxuICByb290OiBIVE1MRWxlbWVudCxcbiAgX293bmVyLFxuICBtb2RlbDogeyBpdGVtOiBIYXNzRW50aXR5IH1cbikgPT4ge1xuICBpZiAoIXJvb3QuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICByb290LmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tpdGVtXV1cIiBzbG90PVwiaXRlbS1pY29uXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPltbX2NvbXB1dGVTdGF0ZU5hbWUoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PltbaXRlbS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIGA7XG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdGF0ZS1iYWRnZVwiKSEuc3RhdGVPYmogPSBtb2RlbC5pdGVtO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKSEudGV4dENvbnRlbnQgPSBjb21wdXRlU3RhdGVOYW1lKG1vZGVsLml0ZW0pO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJbc2Vjb25kYXJ5XVwiKSEudGV4dENvbnRlbnQgPSBtb2RlbC5pdGVtLmVudGl0eV9pZDtcbn07XG5cbmNsYXNzIEhhRW50aXR5UGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGF1dG9mb2N1cz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiBcImFsbG93LWN1c3RvbS1lbnRpdHlcIiB9KVxuICBwdWJsaWMgYWxsb3dDdXN0b21FbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJkb21haW4tZmlsdGVyXCIgfSkgcHVibGljIGRvbWFpbkZpbHRlcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGVudGl0eUZpbHRlcj86IEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYztcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9vcGVuZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBwcml2YXRlIF9nZXRTdGF0ZXMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIGhhc3M6IHRoaXNbXCJoYXNzXCJdLFxuICAgICAgZG9tYWluRmlsdGVyOiB0aGlzW1wiZG9tYWluRmlsdGVyXCJdLFxuICAgICAgZW50aXR5RmlsdGVyOiB0aGlzW1wiZW50aXR5RmlsdGVyXCJdXG4gICAgKSA9PiB7XG4gICAgICBsZXQgc3RhdGVzOiBIYXNzRW50aXR5W10gPSBbXTtcblxuICAgICAgaWYgKCFoYXNzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGxldCBlbnRpdHlJZHMgPSBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcyk7XG5cbiAgICAgIGlmIChkb21haW5GaWx0ZXIpIHtcbiAgICAgICAgZW50aXR5SWRzID0gZW50aXR5SWRzLmZpbHRlcihcbiAgICAgICAgICAoZWlkKSA9PiBlaWQuc3Vic3RyKDAsIGVpZC5pbmRleE9mKFwiLlwiKSkgPT09IGRvbWFpbkZpbHRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZXMgPSBlbnRpdHlJZHMuc29ydCgpLm1hcCgoa2V5KSA9PiBoYXNzIS5zdGF0ZXNba2V5XSk7XG5cbiAgICAgIGlmIChlbnRpdHlGaWx0ZXIpIHtcbiAgICAgICAgc3RhdGVzID0gc3RhdGVzLmZpbHRlcihcbiAgICAgICAgICAoc3RhdGVPYmopID0+XG4gICAgICAgICAgICAvLyBXZSBhbHdheXMgd2FudCB0byBpbmNsdWRlIHRoZSBlbnRpdHkgb2YgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHN0YXRlT2JqLmVudGl0eV9pZCA9PT0gdGhpcy52YWx1ZSB8fCBlbnRpdHlGaWx0ZXIhKHN0YXRlT2JqKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSAmJiAhdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oYXNzID0gdGhpcy5oYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLl9nZXRTdGF0ZXMoXG4gICAgICB0aGlzLl9oYXNzLFxuICAgICAgdGhpcy5kb21haW5GaWx0ZXIsXG4gICAgICB0aGlzLmVudGl0eUZpbHRlclxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cImVudGl0eV9pZFwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cImVudGl0eV9pZFwiXG4gICAgICAgIC5pdGVtcz0ke3N0YXRlc31cbiAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgIC5hbGxvd0N1c3RvbVZhbHVlPSR7dGhpcy5hbGxvd0N1c3RvbUVudGl0eX1cbiAgICAgICAgLnJlbmRlcmVyPSR7cm93UmVuZGVyZXJ9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAuYXV0b2ZvY3VzPSR7dGhpcy5hdXRvZm9jdXN9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2hhc3NcbiAgICAgICAgICAgID8gdGhpcy5faGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuZW50aXR5XCIpXG4gICAgICAgICAgICA6IHRoaXMubGFiZWx9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMudmFsdWVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGVhclwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIG5vLXJpcHBsZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7c3RhdGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IGVudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC5pY29uPSR7dGhpcy5fb3BlbmVkID8gXCJoYXNzOm1lbnUtdXBcIiA6IFwiaGFzczptZW51LWRvd25cIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGVcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktcGlja2VyXCIsIEhhRW50aXR5UGlja2VyKTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWVudGl0eS1waWNrZXJcIjogSGFFbnRpdHlQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IGxvYWRDb2RlTWlycm9yIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBVcGRhdGluZ0VsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiY29kZW1pcnJvclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImVkaXRvci1zYXZlXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvZGUtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSGFDb2RlRWRpdG9yIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgcHVibGljIGNvZGVtaXJyb3I/OiBFZGl0b3I7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBtb2RlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYXV0b2ZvY3VzID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBydGwgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGVycm9yID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3ZhbHVlID0gXCJcIjtcblxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvZGVtaXJyb3IgPyB0aGlzLmNvZGVtaXJyb3IuZ2V0VmFsdWUoKSA6IHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldCBoYXNDb21tZW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwic3Bhbi5jbS1jb21tZW50XCIpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb2RlbWlycm9yLnJlZnJlc2goKTtcbiAgICBpZiAodGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJtb2RlXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwibW9kZVwiLCB0aGlzLm1vZGUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImF1dG9mb2N1c1wiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImF1dG9mb2N1c1wiLCB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl92YWx1ZVwiKSAmJiB0aGlzLl92YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldFZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJydGxcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJndXR0ZXJzXCIsIHRoaXMuX2NhbGNHdXR0ZXJzKCkpO1xuICAgICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiZXJyb3JcIikpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImVycm9yLXN0YXRlXCIsIHRoaXMuZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2xvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbG9hZGVkID0gYXdhaXQgbG9hZENvZGVNaXJyb3IoKTtcblxuICAgIGNvbnN0IGNvZGVNaXJyb3IgPSBsb2FkZWQuY29kZU1pcnJvcjtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xuXG4gICAgc2hhZG93Um9vdCEuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgICR7bG9hZGVkLmNvZGVNaXJyb3JDc3N9XG4gICAgICAuQ29kZU1pcnJvciB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItaGVpZ2h0LCBhdXRvKTtcbiAgICAgICAgZGlyZWN0aW9uOiB2YXIoLS1jb2RlLW1pcnJvci1kaXJlY3Rpb24sIGx0cik7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1zY3JvbGwge1xuICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1tYXgtaGVpZ2h0LCAtLWNvZGUtbWlycm9yLWhlaWdodCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZSBib3JkZXItcmlnaHQ7XG4gICAgICB9XG4gICAgICA6aG9zdCguZXJyb3Itc3RhdGUpIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWVycm9yLXN0YXRlLWNvbG9yLCByZWQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZm9jdXNlZCAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1saW5lbnVtYmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICAucnRsIC5Db2RlTWlycm9yLXZzY3JvbGxiYXIge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgfVxuICAgICAgLnJ0bC1ndXR0ZXIge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPmA7XG5cbiAgICB0aGlzLmNvZGVtaXJyb3IgPSBjb2RlTWlycm9yKHNoYWRvd1Jvb3QsIHtcbiAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgdGFiU2l6ZTogMixcbiAgICAgIG1vZGU6IHRoaXMubW9kZSxcbiAgICAgIGF1dG9mb2N1czogdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlLFxuICAgICAgdmlld3BvcnRNYXJnaW46IEluZmluaXR5LFxuICAgICAgZXh0cmFLZXlzOiB7XG4gICAgICAgIFRhYjogXCJpbmRlbnRNb3JlXCIsXG4gICAgICAgIFwiU2hpZnQtVGFiXCI6IFwiaW5kZW50TGVzc1wiLFxuICAgICAgfSxcbiAgICAgIGd1dHRlcnM6IHRoaXMuX2NhbGNHdXR0ZXJzKCksXG4gICAgfSk7XG4gICAgdGhpcy5fc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk7XG4gICAgdGhpcy5jb2RlbWlycm9yIS5vbihcImNoYW5nZXNcIiwgKCkgPT4gdGhpcy5fb25DaGFuZ2UoKSk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy5fdmFsdWUgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jYWxjR3V0dGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMucnRsID8gW1wicnRsLWd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIl0gOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFNjcm9sbEJhckRpcmVjdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3IuZ2V0V3JhcHBlckVsZW1lbnQoKS5jbGFzc0xpc3QudG9nZ2xlKFwicnRsXCIsIHRoaXMucnRsKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvZGUtZWRpdG9yXCI6IEhhQ29kZUVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNsYXNzIEhhQ29tYm9Cb3ggZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dmFhZGluLWNvbWJvLWJveC1saWdodFxuICAgICAgICBpdGVtcz1cIltbX2l0ZW1zXV1cIlxuICAgICAgICBpdGVtLXZhbHVlLXBhdGg9XCJbW2l0ZW1WYWx1ZVBhdGhdXVwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cIltbaXRlbUxhYmVsUGF0aF1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBvcGVuZWQ9XCJ7e29wZW5lZH19XCJcbiAgICAgICAgYWxsb3ctY3VzdG9tLXZhbHVlPVwiW1thbGxvd0N1c3RvbVZhbHVlXV1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJfZmlyZUNoYW5nZWRcIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBhdXRvZm9jdXM9XCJbW2F1dG9mb2N1c11dXCJcbiAgICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgdmFsdWU9XCJbW3ZhbHVlXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyF2YWx1ZV1dXCJcbiAgICAgICAgICAgID5DbGVhcjwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwiW1tfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKV1dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpdGVtcy5sZW5ndGhdXVwiXG4gICAgICAgICAgICA+VG9nZ2xlPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW46IC01cHggLTEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dDdXN0b21WYWx1ZTogQm9vbGVhbixcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2l0ZW1zQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9pdGVtczogT2JqZWN0LFxuICAgICAgaXRlbUxhYmVsUGF0aDogU3RyaW5nLFxuICAgICAgaXRlbVZhbHVlUGF0aDogU3RyaW5nLFxuICAgICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vcGVuZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIF9pdGVtc0NoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBuZXdWYWw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUb2dnbGVJY29uKG9wZW5lZCkge1xuICAgIHJldHVybiBvcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwiO1xuICB9XG5cbiAgX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCkge1xuICAgIHJldHVybiBpdGVtTGFiZWxQYXRoID8gaXRlbVtpdGVtTGFiZWxQYXRoXSA6IGl0ZW07XG4gIH1cblxuICBfZmlyZUNoYW5nZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29tYm8tYm94XCIsIEhhQ29tYm9Cb3gpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNvbWJvLWJveFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFTZXJ2aWNlUGlja2VyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNvbWJvLWJveFxuICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuc2VydmljZS1waWNrZXIuc2VydmljZScpXV1cIlxuICAgICAgICBpdGVtcz1cIltbX3NlcnZpY2VzXV1cIlxuICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgIGFsbG93LWN1c3RvbS12YWx1ZT1cIlwiXG4gICAgICA+PC9oYS1jb21iby1ib3g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9oYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9zZXJ2aWNlczogQXJyYXksXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9oYXNzQ2hhbmdlZChoYXNzLCBvbGRIYXNzKSB7XG4gICAgaWYgKCFoYXNzKSB7XG4gICAgICB0aGlzLl9zZXJ2aWNlcyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2xkSGFzcyAmJiBoYXNzLnNlcnZpY2VzID09PSBvbGRIYXNzLnNlcnZpY2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlcylcbiAgICAgIC5zb3J0KClcbiAgICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgICAgY29uc3Qgc2VydmljZXMgPSBPYmplY3Qua2V5cyhoYXNzLnNlcnZpY2VzW2RvbWFpbl0pLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcnZpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goYCR7ZG9tYWlufS4ke3NlcnZpY2VzW2ldfWApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3NlcnZpY2VzID0gcmVzdWx0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtcGlja2VyXCIsIEhhU2VydmljZVBpY2tlcik7XG4iLCJleHBvcnQgY29uc3QgVU5BVkFJTEFCTEUgPSBcInVuYXZhaWxhYmxlXCI7XG5cbmV4cG9ydCBjb25zdCBFTlRJVFlfQ09NUE9ORU5UX0RPTUFJTlMgPSBbXG4gIFwiYWlyX3F1YWxpdHlcIixcbiAgXCJhbGFybV9jb250cm9sX3BhbmVsXCIsXG4gIFwiYWxlcnRcIixcbiAgXCJhdXRvbWF0aW9uXCIsXG4gIFwiYmluYXJ5X3NlbnNvclwiLFxuICBcImNhbGVuZGFyXCIsXG4gIFwiY2FtZXJhXCIsXG4gIFwiY291bnRlclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZG9taW5vc1wiLFxuICBcImZhblwiLFxuICBcImdlb19sb2NhdGlvblwiLFxuICBcImdyb3VwXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJpbnB1dF9udW1iZXJcIixcbiAgXCJpbnB1dF9zZWxlY3RcIixcbiAgXCJpbnB1dF90ZXh0XCIsXG4gIFwibGlnaHRcIixcbiAgXCJsb2NrXCIsXG4gIFwibWFpbGJveFwiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInBlcnNvblwiLFxuICBcInBsYW50XCIsXG4gIFwicmVtZW1iZXJfdGhlX21pbGtcIixcbiAgXCJyZW1vdGVcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInNlbnNvclwiLFxuICBcInN3aXRjaFwiLFxuICBcInRpbWVyXCIsXG4gIFwidXRpbGl0eV9tZXRlclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndlYXRoZXJcIixcbiAgXCJ3aW5rXCIsXG4gIFwiemhhXCIsXG4gIFwiendhdmVcIixcbl07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeWFtbCBmcm9tIFwianMteWFtbFwiO1xuXG5pbXBvcnQgeyBFTlRJVFlfQ09NUE9ORU5UX0RPTUFJTlMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY29kZS1lZGl0b3JcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vdXRpbC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCI7XG5cbmNvbnN0IEVSUk9SX1NFTlRJTkVMID0ge307XG5jbGFzcyBIYVBhbmVsRGV2U2VydmljZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYS1mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdGgge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0ciB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YWJsZS1yb3ctYmFja2dyb3VuZC1jb2xvciwgI2VlZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXJvdy1hbHRlcm5hdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yLCAjZWVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRkOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICAgIH1cblxuICAgICAgICBwcmUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAgICAgICAga2V5PVwicGFuZWwtZGV2LXNlcnZpY2Utc3RhdGUtZG9tYWluLXNlcnZpY2VcIlxuICAgICAgICBkYXRhPVwie3tkb21haW5TZXJ2aWNlfX1cIlxuICAgICAgPlxuICAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAgICAgICAga2V5PVwiW1tfY29tcHV0ZVNlcnZpY2VkYXRhS2V5KGRvbWFpblNlcnZpY2UpXV1cIlxuICAgICAgICBkYXRhPVwie3tzZXJ2aWNlRGF0YX19XCJcbiAgICAgID5cbiAgICAgIDwvYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudD5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIHNlcnZpY2UgZGV2IHRvb2wgYWxsb3dzIHlvdSB0byBjYWxsIGFueSBhdmFpbGFibGUgc2VydmljZSBpbiBIb21lXG4gICAgICAgICAgQXNzaXN0YW50LlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhhLWZvcm1cIj5cbiAgICAgICAgICA8aGEtc2VydmljZS1waWNrZXJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7ZG9tYWluU2VydmljZX19XCJcbiAgICAgICAgICA+PC9oYS1zZXJ2aWNlLXBpY2tlcj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvbXB1dGVIYXNFbnRpdHkoX2F0dHJpYnV0ZXMpXV1cIj5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiW1tfY29tcHV0ZUVudGl0eVZhbHVlKHBhcnNlZEpTT04pXV1cIlxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XCJfZW50aXR5UGlja2VkXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyF2YWxpZEpTT05dXVwiXG4gICAgICAgICAgICAgIGRvbWFpbi1maWx0ZXI9XCJbW19jb21wdXRlRW50aXR5RG9tYWluRmlsdGVyKF9kb21haW4pXV1cIlxuICAgICAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHA+U2VydmljZSBEYXRhIChZQU1MLCBvcHRpb25hbCk8L3A+XG4gICAgICAgICAgPGhhLWNvZGUtZWRpdG9yXG4gICAgICAgICAgICBtb2RlPVwieWFtbFwiXG4gICAgICAgICAgICB2YWx1ZT1cIltbc2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICBlcnJvcj1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJfeWFtbENoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWNvZGUtZWRpdG9yPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCIgcmFpc2VkIGRpc2FibGVkPVwiW1shdmFsaWRKU09OXV1cIj5cbiAgICAgICAgICAgIENhbGwgU2VydmljZVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFkb21haW5TZXJ2aWNlXV1cIj5cbiAgICAgICAgICA8aDE+U2VsZWN0IGEgc2VydmljZSB0byBzZWUgdGhlIGRlc2NyaXB0aW9uPC9oMT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZG9tYWluU2VydmljZV1dXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfZGVzY3JpcHRpb25dXVwiPlxuICAgICAgICAgICAgPGgxPk5vIGRlc2NyaXB0aW9uIGlzIGF2YWlsYWJsZTwvaDE+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2Rlc2NyaXB0aW9uXV1cIj5cbiAgICAgICAgICAgIDxoMz5bW19kZXNjcmlwdGlvbl1dPC9oMz5cblxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwiYXR0cmlidXRlc1wiPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoPlBhcmFtZXRlcjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RXhhbXBsZTwvdGg+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2F0dHJpYnV0ZXMubGVuZ3RoXV1cIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj5UaGlzIHNlcnZpY2UgdGFrZXMgbm8gcGFyYW1ldGVycy48L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2F0dHJpYnV0ZXNdXVwiIGFzPVwiYXR0cmlidXRlXCI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRkPjxwcmU+W1thdHRyaWJ1dGUua2V5XV08L3ByZT48L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlLmRlc2NyaXB0aW9uXV08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPltbYXR0cmlidXRlLmV4YW1wbGVdXTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfYXR0cmlidXRlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9maWxsRXhhbXBsZURhdGFcIj5cbiAgICAgICAgICAgICAgICBGaWxsIEV4YW1wbGUgRGF0YVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpblNlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJfZG9tYWluU2VydmljZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURvbWFpbihkb21haW5TZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX3NlcnZpY2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVNlcnZpY2UoZG9tYWluU2VydmljZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWRKU09OOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVQYXJzZWRTZXJ2aWNlRGF0YShzZXJ2aWNlRGF0YSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkSlNPTjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVZhbGlkSlNPTihwYXJzZWRKU09OKVwiLFxuICAgICAgfSxcblxuICAgICAgX2F0dHJpYnV0ZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQXR0cmlidXRlc0FycmF5KGhhc3MsIF9kb21haW4sIF9zZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEZXNjcmlwdGlvbihoYXNzLCBfZG9tYWluLCBfc2VydmljZSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9kb21haW5TZXJ2aWNlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0gXCJcIjtcbiAgfVxuXG4gIF9jb21wdXRlQXR0cmlidXRlc0FycmF5KGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VEb21haW5zID0gaGFzcy5zZXJ2aWNlcztcbiAgICBpZiAoIShkb21haW4gaW4gc2VydmljZURvbWFpbnMpKSByZXR1cm4gW107XG4gICAgaWYgKCEoc2VydmljZSBpbiBzZXJ2aWNlRG9tYWluc1tkb21haW5dKSkgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgZmllbGRzID0gc2VydmljZURvbWFpbnNbZG9tYWluXVtzZXJ2aWNlXS5maWVsZHM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkcykubWFwKGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICByZXR1cm4geyBrZXk6IGZpZWxkLCAuLi5maWVsZHNbZmllbGRdIH07XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZURlc2NyaXB0aW9uKGhhc3MsIGRvbWFpbiwgc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VEb21haW5zID0gaGFzcy5zZXJ2aWNlcztcbiAgICBpZiAoIShkb21haW4gaW4gc2VydmljZURvbWFpbnMpKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmICghKHNlcnZpY2UgaW4gc2VydmljZURvbWFpbnNbZG9tYWluXSkpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNlcnZpY2VEb21haW5zW2RvbWFpbl1bc2VydmljZV0uZGVzY3JpcHRpb247XG4gIH1cblxuICBfY29tcHV0ZVNlcnZpY2VkYXRhS2V5KGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gYHBhbmVsLWRldi1zZXJ2aWNlLXN0YXRlLXNlcnZpY2VkYXRhLiR7ZG9tYWluU2VydmljZX1gO1xuICB9XG5cbiAgX2NvbXB1dGVEb21haW4oZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBkb21haW5TZXJ2aWNlLnNwbGl0KFwiLlwiLCAxKVswXTtcbiAgfVxuXG4gIF9jb21wdXRlU2VydmljZShkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGRvbWFpblNlcnZpY2Uuc3BsaXQoXCIuXCIsIDIpWzFdIHx8IG51bGw7XG4gIH1cblxuICBfY29tcHV0ZVBhcnNlZFNlcnZpY2VEYXRhKHNlcnZpY2VEYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzZXJ2aWNlRGF0YS50cmltKCkgPyB5YW1sLnNhZmVMb2FkKHNlcnZpY2VEYXRhKSA6IHt9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIEVSUk9SX1NFTlRJTkVMO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlVmFsaWRKU09OKHBhcnNlZEpTT04pIHtcbiAgICByZXR1cm4gcGFyc2VkSlNPTiAhPT0gRVJST1JfU0VOVElORUw7XG4gIH1cblxuICBfY29tcHV0ZUhhc0VudGl0eShhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuc29tZSgoYXR0cikgPT4gYXR0ci5rZXkgPT09IFwiZW50aXR5X2lkXCIpO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlWYWx1ZShwYXJzZWRKU09OKSB7XG4gICAgcmV0dXJuIHBhcnNlZEpTT04gPT09IEVSUk9SX1NFTlRJTkVMID8gXCJcIiA6IHBhcnNlZEpTT04uZW50aXR5X2lkO1xuICB9XG5cbiAgX2NvbXB1dGVFbnRpdHlEb21haW5GaWx0ZXIoZG9tYWluKSB7XG4gICAgcmV0dXJuIEVOVElUWV9DT01QT05FTlRfRE9NQUlOUy5pbmNsdWRlcyhkb21haW4pID8gZG9tYWluIDogbnVsbDtcbiAgfVxuXG4gIF9jYWxsU2VydmljZSgpIHtcbiAgICBpZiAodGhpcy5wYXJzZWRKU09OID09PSBFUlJPUl9TRU5USU5FTCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBhbGVydChgRXJyb3IgcGFyc2luZyBZQU1MOiAke3RoaXMuc2VydmljZURhdGF9YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHRoaXMuX2RvbWFpbiwgdGhpcy5fc2VydmljZSwgdGhpcy5wYXJzZWRKU09OKTtcbiAgfVxuXG4gIF9maWxsRXhhbXBsZURhdGEoKSB7XG4gICAgY29uc3QgZXhhbXBsZSA9IHt9O1xuICAgIHRoaXMuX2F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBpZiAoYXR0cmlidXRlLmV4YW1wbGUpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gXCJcIjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YWx1ZSA9IHlhbWwuc2FmZUxvYWQoYXR0cmlidXRlLmV4YW1wbGUpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB2YWx1ZSA9IGF0dHJpYnV0ZS5leGFtcGxlO1xuICAgICAgICB9XG4gICAgICAgIGV4YW1wbGVbYXR0cmlidXRlLmtleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0geWFtbC5zYWZlRHVtcChleGFtcGxlKTtcbiAgfVxuXG4gIF9lbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VEYXRhID0geWFtbC5zYWZlRHVtcCh7XG4gICAgICAuLi50aGlzLnBhcnNlZEpTT04sXG4gICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIF95YW1sQ2hhbmdlZChldikge1xuICAgIHRoaXMuc2VydmljZURhdGEgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGV2ZWxvcGVyLXRvb2xzLXNlcnZpY2VcIiwgSGFQYW5lbERldlNlcnZpY2UpO1xuIiwiaW50ZXJmYWNlIExvYWRlZENvZGVNaXJyb3Ige1xuICBjb2RlTWlycm9yOiBhbnk7XG4gIGNvZGVNaXJyb3JDc3M6IGFueTtcbn1cblxubGV0IGxvYWRlZDogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb2RlTWlycm9yID0gYXN5bmMgKCk6IFByb21pc2U8TG9hZGVkQ29kZU1pcnJvcj4gPT4ge1xuICBpZiAoIWxvYWRlZCkge1xuICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvZGVtaXJyb3JcIiAqLyBcIi4vY29kZW1pcnJvclwiKTtcbiAgfVxuICByZXR1cm4gbG9hZGVkO1xufTtcbiIsIi8qIEZvcmtlZCBiZWNhdXNlIGl0IGNvbnRhaW5lZCBhbiBpbXBvcnQubWV0YSB3aGljaCB3ZWJwYWNrIGRvZXNuJ3Qgc3VwcG9ydC4gKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0IHsgQXBwU3RvcmFnZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2FwcC1zdG9yYWdlL2FwcC1zdG9yYWdlLWJlaGF2aW9yXCI7XG5pbXBvcnQgeyBQb2x5bWVyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5XCI7XG5cbi8qKlxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBzeW5jaHJvbml6ZXMgc3RvcmFnZSBiZXR3ZWVuIGFuIGluLW1lbW9yeVxuICogdmFsdWUgYW5kIGEgbG9jYXRpb24gaW4gdGhlIGJyb3dzZXIncyBsb2NhbFN0b3JhZ2Ugc3lzdGVtLlxuICpcbiAqIGxvY2FsU3RvcmFnZSBpcyBhIHNpbXBsZSBhbmQgd2lkZWx5IHN1cHBvcnRlZCBzdG9yYWdlIEFQSSB0aGF0IHByb3ZpZGVzIGJvdGhcbiAqIHBlcm1hbmVudCBhbmQgc2Vzc2lvbi1iYXNlZCBzdG9yYWdlIG9wdGlvbnMuIFVzaW5nIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcbiAqIHlvdSBjYW4gZWFzaWx5IGludGVncmF0ZSBsb2NhbFN0b3JhZ2UgaW50byB5b3VyIGFwcCB2aWEgbm9ybWFsIFBvbHltZXJcbiAqIGRhdGFiaW5kaW5nLlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgaXMgdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiBhbiBlbGVtZW50XG4gKiB0aGF0IHVzZXMgYEFwcFN0b3JhZ2VCZWhhdmlvcmAuIFJlYWRpbmcgaXRzIGNvZGUgaXMgYSBnb29kIHdheSB0byBnZXRcbiAqIHN0YXJ0ZWQgd3JpdGluZyB5b3VyIG93biBzdG9yYWdlIGVsZW1lbnQuXG4gKlxuICogRXhhbXBsZSB1c2U6XG4gKlxuICogICAgIDxwYXBlci1pbnB1dCB2YWx1ZT1cInt7c2VhcmNofX1cIj48L3BhcGVyLWlucHV0PlxuICogICAgIDxhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IGtleT1cInNlYXJjaFwiIGRhdGE9XCJ7e3NlYXJjaH19XCI+XG4gKiAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuICpcbiAqIGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQgYXV0b21hdGljYWxseSBzeW5jaHJvbml6ZXMgY2hhbmdlcyB0byB0aGVcbiAqIHNhbWUga2V5IGFjcm9zcyBtdWx0aXBsZSB0YWJzLlxuICpcbiAqIE9ubHkgc3VwcG9ydHMgc3RvcmluZyBKU09OLXNlcmlhbGl6YWJsZSB2YWx1ZXMuXG4gKi9cblBvbHltZXIoe1xuICBpczogXCJhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50XCIsXG4gIGJlaGF2aW9yczogW0FwcFN0b3JhZ2VCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGxvZ2ljYWwgbG9jYXRpb24gdG8gc3RvcmUgdGhlIGRhdGEuXG4gICAgICpcbiAgICAgKiBAdHlwZXtTdHJpbmd9XG4gICAgICovXG4gICAga2V5OiB7IHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgZGF0YSB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgY2xlYXJlZCBmcm9tIHN0b3JhZ2Ugd2hlblxuICAgICAqIHRoZSBwYWdlIHNlc3Npb24gZW5kcyAoaS5lLiB3aGVuIHRoZSB1c2VyIGhhcyBuYXZpZ2F0ZWQgYXdheSBmcm9tXG4gICAgICogdGhlIHBhZ2UpLlxuICAgICAqL1xuICAgIHNlc3Npb25Pbmx5OiB7IHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSB9LFxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBvciBgd2luZG93LnNlc3Npb25TdG9yYWdlYCwgZGVwZW5kaW5nIG9uXG4gICAgICogYHRoaXMuc2Vzc2lvbk9ubHlgLlxuICAgICAqL1xuICAgIHN0b3JhZ2U6IHsgdHlwZTogT2JqZWN0LCBjb21wdXRlZDogXCJfX2NvbXB1dGVTdG9yYWdlKHNlc3Npb25Pbmx5KVwiIH0sXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXCJfX3N0b3JhZ2VTb3VyY2VDaGFuZ2VkKHN0b3JhZ2UsIGtleSlcIl0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubGlzdGVuKHdpbmRvdywgXCJzdG9yYWdlXCIsIFwiX19vblN0b3JhZ2VcIik7XG4gICAgdGhpcy5saXN0ZW4oXG4gICAgICB3aW5kb3cudG9wLFxuICAgICAgXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsXG4gICAgICBcIl9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkXCJcbiAgICApO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgXCJzdG9yYWdlXCIsIFwiX19vblN0b3JhZ2VcIik7XG4gICAgdGhpcy51bmxpc3RlbihcbiAgICAgIHdpbmRvdy50b3AsXG4gICAgICBcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIixcbiAgICAgIFwiX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWRcIlxuICAgICk7XG4gIH0sXG5cbiAgZ2V0IGlzTmV3KCkge1xuICAgIHJldHVybiAhdGhpcy5rZXk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN0b3JlcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBrZXksIGFuZCBpZiBzdWNjZXNzZnVsLCB1cGRhdGVzIHRoaXMua2V5LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGtleSBUaGUgbmV3IGtleSB0byB1c2UuXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqL1xuICBzYXZlVmFsdWU6IGZ1bmN0aW9uKGtleSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9fc2V0U3RvcmFnZVZhbHVlKC8qe0B0eXBlIGlmIChrZXkgdHkpe1N0cmluZ319Ki8ga2V5LCB0aGlzLmRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG5cbiAgICB0aGlzLmtleSA9IC8qKiBAdHlwZSB7U3RyaW5nfSAqLyAoa2V5KTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5rZXkgPSBudWxsO1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuemVyb1ZhbHVlO1xuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSxcblxuICBnZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmICh0aGlzLmtleSAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKTtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXQocGF0aCwgeyBkYXRhOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgc2V0U3RvcmVkVmFsdWU6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMua2V5ICE9IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX19zZXRTdG9yYWdlVmFsdWUodGhpcy5rZXksIHRoaXMuZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5maXJlKFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLCB0aGlzLCB7IG5vZGU6IHdpbmRvdy50b3AgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG4gIH0sXG5cbiAgX19jb21wdXRlU3RvcmFnZTogZnVuY3Rpb24oc2Vzc2lvbk9ubHkpIHtcbiAgICByZXR1cm4gc2Vzc2lvbk9ubHkgPyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UgOiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9LFxuXG4gIF9fc3RvcmFnZVNvdXJjZUNoYW5nZWQ6IGZ1bmN0aW9uKHN0b3JhZ2UsIGtleSkge1xuICAgIHRoaXMuX2luaXRpYWxpemVTdG9yZWRWYWx1ZSgpO1xuICB9LFxuXG4gIF9fb25TdG9yYWdlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgIT09IHRoaXMua2V5IHx8IGV2ZW50LnN0b3JhZ2VBcmVhICE9PSB0aGlzLnN0b3JhZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN5bmNUb01lbW9yeShmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0KFwiZGF0YVwiLCB0aGlzLl9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlKCkpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fb25BcHBMb2NhbFN0b3JhZ2VDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChcbiAgICAgIGV2ZW50LmRldGFpbCA9PT0gdGhpcyB8fFxuICAgICAgZXZlbnQuZGV0YWlsLmtleSAhPT0gdGhpcy5rZXkgfHxcbiAgICAgIGV2ZW50LmRldGFpbC5zdG9yYWdlICE9PSB0aGlzLnN0b3JhZ2VcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zeW5jVG9NZW1vcnkoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldChcImRhdGFcIiwgZXZlbnQuZGV0YWlsLmRhdGEpO1xuICAgIH0pO1xuICB9LFxuXG4gIF9fcGFyc2VWYWx1ZUZyb21TdG9yYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5zdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHZhbHVlIGZyb20gc3RvcmFnZSBmb3JcIiwgdGhpcy5rZXkpO1xuICAgIH1cbiAgfSxcblxuICBfX3NldFN0b3JhZ2VWYWx1ZTogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHZhbHVlID0gbnVsbDtcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFZQTtBQUlBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQWFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF3R0E7QUFyR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBakpBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXlJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTUE7QUFDQTtBQUNBO0FBZUE7QUFBQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWtJQTtBQWhJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUVBO0FBR0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==