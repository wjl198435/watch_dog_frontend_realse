(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"],{

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

/***/ "./src/panels/lovelace/components/hui-entity-editor.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-entity-editor.ts ***!
  \*************************************************************/
/*! exports provided: HuiEntityEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEntityEditor", function() { return HuiEntityEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");





let HuiEntityEditor = class HuiEntityEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        if (!this.entities) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <h3>
        ${this.label ||
            this.hass.localize("ui.panel.lovelace.editor.card.generic.entities") +
                " (" +
                this.hass.localize("ui.panel.lovelace.editor.card.config.required") +
                ")"}
      </h3>
      <div class="entities">
        ${this.entities.map((entityConf, index) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <div class="entity">
              <ha-entity-picker
                .hass="${this.hass}"
                .value="${entityConf.entity}"
                .index="${index}"
                @change="${this._valueChanged}"
                allow-custom-entity
              ></ha-entity-picker>
              <paper-icon-button
                title="Move entity down"
                icon="hass:arrow-down"
                .index="${index}"
                @click="${this._entityDown}"
                ?disabled="${index === this.entities.length - 1}"
              ></paper-icon-button>
              <paper-icon-button
                title="Move entity up"
                icon="hass:arrow-up"
                .index="${index}"
                @click="${this._entityUp}"
                ?disabled="${index === 0}"
              ></paper-icon-button>
            </div>
          `;
        })}
        <ha-entity-picker
          .hass="${this.hass}"
          @change="${this._addEntity}"
        ></ha-entity-picker>
      </div>
    `;
    }
    _addEntity(ev) {
        const target = ev.target;
        if (target.value === "") {
            return;
        }
        const newConfigEntities = this.entities.concat({
            entity: target.value,
        });
        target.value = "";
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "entities-changed", { entities: newConfigEntities });
    }
    _entityUp(ev) {
        const target = ev.target;
        const newEntities = this.entities.concat();
        [newEntities[target.index - 1], newEntities[target.index]] = [
            newEntities[target.index],
            newEntities[target.index - 1],
        ];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "entities-changed", { entities: newEntities });
    }
    _entityDown(ev) {
        const target = ev.target;
        const newEntities = this.entities.concat();
        [newEntities[target.index + 1], newEntities[target.index]] = [
            newEntities[target.index],
            newEntities[target.index + 1],
        ];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "entities-changed", { entities: newEntities });
    }
    _valueChanged(ev) {
        const target = ev.target;
        const newConfigEntities = this.entities.concat();
        if (target.value === "") {
            newConfigEntities.splice(target.index, 1);
        }
        else {
            newConfigEntities[target.index] = Object.assign(Object.assign({}, newConfigEntities[target.index]), { entity: target.value });
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "entities-changed", { entities: newConfigEntities });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .entities {
        padding-left: 20px;
      }
      .entity {
        display: flex;
        align-items: flex-end;
      }
      .entity ha-entity-picker {
        flex-grow: 1;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntityEditor.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntityEditor.prototype, "entities", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntityEditor.prototype, "label", void 0);
HuiEntityEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entity-editor")
], HuiEntityEditor);



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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LXZpZXd+aHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yfmh1aS1lbnRpdHktYnV0dG9uLWNhcmQtZWRpdG9yfmh1aS1nYXVnZS1jYXJkLWVkaXRvcn5odX45MGY5NmY3Mi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgdHlwZSBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmMgPSAoZW50aXR5SWQ6IEhhc3NFbnRpdHkpID0+IGJvb2xlYW47XG5cbmNvbnN0IHJvd1JlbmRlcmVyID0gKFxuICByb290OiBIVE1MRWxlbWVudCxcbiAgX293bmVyLFxuICBtb2RlbDogeyBpdGVtOiBIYXNzRW50aXR5IH1cbikgPT4ge1xuICBpZiAoIXJvb3QuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICByb290LmlubmVySFRNTCA9IGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IC0xMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tpdGVtXV1cIiBzbG90PVwiaXRlbS1pY29uXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9J25hbWUnPltbX2NvbXB1dGVTdGF0ZU5hbWUoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PltbaXRlbS5lbnRpdHlfaWRdXTwvZGl2PlxuICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgIGA7XG4gIH1cblxuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJzdGF0ZS1iYWRnZVwiKSEuc3RhdGVPYmogPSBtb2RlbC5pdGVtO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCIubmFtZVwiKSEudGV4dENvbnRlbnQgPSBjb21wdXRlU3RhdGVOYW1lKG1vZGVsLml0ZW0pO1xuICByb290LnF1ZXJ5U2VsZWN0b3IoXCJbc2Vjb25kYXJ5XVwiKSEudGV4dENvbnRlbnQgPSBtb2RlbC5pdGVtLmVudGl0eV9pZDtcbn07XG5cbmNsYXNzIEhhRW50aXR5UGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGF1dG9mb2N1cz86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiBcImFsbG93LWN1c3RvbS1lbnRpdHlcIiB9KVxuICBwdWJsaWMgYWxsb3dDdXN0b21FbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxhYmVsPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogXCJkb21haW4tZmlsdGVyXCIgfSkgcHVibGljIGRvbWFpbkZpbHRlcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGVudGl0eUZpbHRlcj86IEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYztcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9vcGVuZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9oYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBwcml2YXRlIF9nZXRTdGF0ZXMgPSBtZW1vaXplT25lKFxuICAgIChcbiAgICAgIGhhc3M6IHRoaXNbXCJoYXNzXCJdLFxuICAgICAgZG9tYWluRmlsdGVyOiB0aGlzW1wiZG9tYWluRmlsdGVyXCJdLFxuICAgICAgZW50aXR5RmlsdGVyOiB0aGlzW1wiZW50aXR5RmlsdGVyXCJdXG4gICAgKSA9PiB7XG4gICAgICBsZXQgc3RhdGVzOiBIYXNzRW50aXR5W10gPSBbXTtcblxuICAgICAgaWYgKCFoYXNzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIGxldCBlbnRpdHlJZHMgPSBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcyk7XG5cbiAgICAgIGlmIChkb21haW5GaWx0ZXIpIHtcbiAgICAgICAgZW50aXR5SWRzID0gZW50aXR5SWRzLmZpbHRlcihcbiAgICAgICAgICAoZWlkKSA9PiBlaWQuc3Vic3RyKDAsIGVpZC5pbmRleE9mKFwiLlwiKSkgPT09IGRvbWFpbkZpbHRlclxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZXMgPSBlbnRpdHlJZHMuc29ydCgpLm1hcCgoa2V5KSA9PiBoYXNzIS5zdGF0ZXNba2V5XSk7XG5cbiAgICAgIGlmIChlbnRpdHlGaWx0ZXIpIHtcbiAgICAgICAgc3RhdGVzID0gc3RhdGVzLmZpbHRlcihcbiAgICAgICAgICAoc3RhdGVPYmopID0+XG4gICAgICAgICAgICAvLyBXZSBhbHdheXMgd2FudCB0byBpbmNsdWRlIHRoZSBlbnRpdHkgb2YgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIHN0YXRlT2JqLmVudGl0eV9pZCA9PT0gdGhpcy52YWx1ZSB8fCBlbnRpdHlGaWx0ZXIhKHN0YXRlT2JqKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlcztcbiAgICB9XG4gICk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSAmJiAhdGhpcy5fb3BlbmVkKSB7XG4gICAgICB0aGlzLl9oYXNzID0gdGhpcy5oYXNzO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLl9nZXRTdGF0ZXMoXG4gICAgICB0aGlzLl9oYXNzLFxuICAgICAgdGhpcy5kb21haW5GaWx0ZXIsXG4gICAgICB0aGlzLmVudGl0eUZpbHRlclxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0XG4gICAgICAgIGl0ZW0tdmFsdWUtcGF0aD1cImVudGl0eV9pZFwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cImVudGl0eV9pZFwiXG4gICAgICAgIC5pdGVtcz0ke3N0YXRlc31cbiAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgIC5hbGxvd0N1c3RvbVZhbHVlPSR7dGhpcy5hbGxvd0N1c3RvbUVudGl0eX1cbiAgICAgICAgLnJlbmRlcmVyPSR7cm93UmVuZGVyZXJ9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fdmFsdWVDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAuYXV0b2ZvY3VzPSR7dGhpcy5hdXRvZm9jdXN9XG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5sYWJlbCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuX2hhc3NcbiAgICAgICAgICAgID8gdGhpcy5faGFzcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuZW50aXR5XCIpXG4gICAgICAgICAgICA6IHRoaXMubGFiZWx9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdmFsdWV9XG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5kaXNhYmxlZH1cbiAgICAgICAgICBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cIm5vbmVcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgYXV0b2NvcnJlY3Q9XCJvZmZcIlxuICAgICAgICAgIHNwZWxsY2hlY2s9XCJmYWxzZVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMudmFsdWVcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGVhclwiXG4gICAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgICAgICAgIG5vLXJpcHBsZVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENsZWFyXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICR7c3RhdGVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IGVudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIC5pY29uPSR7dGhpcy5fb3BlbmVkID8gXCJoYXNzOm1lbnUtdXBcIiA6IFwiaGFzczptZW51LWRvd25cIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUb2dnbGVcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF92YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPikge1xuICAgIHRoaXMuX29wZW5lZCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMudmFsdWUgfSk7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgICBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdHktcGlja2VyXCIsIEhhRW50aXR5UGlja2VyKTtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWVudGl0eS1waWNrZXJcIjogSGFFbnRpdHlQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi9lZGl0b3IvdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZW50aXR5LWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUVudGl0eUVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGVudGl0aWVzPzogRW50aXR5Q29uZmlnW107XG5cbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGxhYmVsPzogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZW50aXRpZXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDM+XG4gICAgICAgICR7dGhpcy5sYWJlbCB8fFxuICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXRpZXNcIlxuICAgICAgICAgICkgK1xuICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLnJlcXVpcmVkXCJcbiAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgXCIpXCJ9XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImVudGl0aWVzXCI+XG4gICAgICAgICR7dGhpcy5lbnRpdGllcy5tYXAoKGVudGl0eUNvbmYsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW50aXR5XCI+XG4gICAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgIC52YWx1ZT1cIiR7ZW50aXR5Q29uZi5lbnRpdHl9XCJcbiAgICAgICAgICAgICAgICAuaW5kZXg9XCIke2luZGV4fVwiXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgICAgYWxsb3ctY3VzdG9tLWVudGl0eVxuICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIk1vdmUgZW50aXR5IGRvd25cIlxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgICAgICAgIC5pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2VudGl0eURvd259XCJcbiAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke2luZGV4ID09PSB0aGlzLmVudGl0aWVzIS5sZW5ndGggLSAxfVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIk1vdmUgZW50aXR5IHVwXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgICAgICAgLmluZGV4PVwiJHtpbmRleH1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fZW50aXR5VXB9XCJcbiAgICAgICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke2luZGV4ID09PSAwfVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYDtcbiAgICAgICAgfSl9XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX2FkZEVudGl0eX1cIlxuICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZEVudGl0eShldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0NvbmZpZ0VudGl0aWVzID0gdGhpcy5lbnRpdGllcyEuY29uY2F0KHtcbiAgICAgIGVudGl0eTogdGFyZ2V0LnZhbHVlIGFzIHN0cmluZyxcbiAgICB9KTtcbiAgICB0YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImVudGl0aWVzLWNoYW5nZWRcIiwgeyBlbnRpdGllczogbmV3Q29uZmlnRW50aXRpZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlVcChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBjb25zdCBuZXdFbnRpdGllcyA9IHRoaXMuZW50aXRpZXMhLmNvbmNhdCgpO1xuXG4gICAgW25ld0VudGl0aWVzW3RhcmdldC5pbmRleCEgLSAxXSwgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4IV1dID0gW1xuICAgICAgbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4IV0sXG4gICAgICBuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghIC0gMV0sXG4gICAgXTtcblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImVudGl0aWVzLWNoYW5nZWRcIiwgeyBlbnRpdGllczogbmV3RW50aXRpZXMgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlEb3duKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGNvbnN0IG5ld0VudGl0aWVzID0gdGhpcy5lbnRpdGllcyEuY29uY2F0KCk7XG5cbiAgICBbbmV3RW50aXRpZXNbdGFyZ2V0LmluZGV4ISArIDFdLCBuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghXV0gPSBbXG4gICAgICBuZXdFbnRpdGllc1t0YXJnZXQuaW5kZXghXSxcbiAgICAgIG5ld0VudGl0aWVzW3RhcmdldC5pbmRleCEgKyAxXSxcbiAgICBdO1xuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZW50aXRpZXMtY2hhbmdlZFwiLCB7IGVudGl0aWVzOiBuZXdFbnRpdGllcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBjb25zdCBuZXdDb25maWdFbnRpdGllcyA9IHRoaXMuZW50aXRpZXMhLmNvbmNhdCgpO1xuXG4gICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgbmV3Q29uZmlnRW50aXRpZXMuc3BsaWNlKHRhcmdldC5pbmRleCEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDb25maWdFbnRpdGllc1t0YXJnZXQuaW5kZXghXSA9IHtcbiAgICAgICAgLi4ubmV3Q29uZmlnRW50aXRpZXNbdGFyZ2V0LmluZGV4IV0sXG4gICAgICAgIGVudGl0eTogdGFyZ2V0LnZhbHVlISxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZW50aXRpZXMtY2hhbmdlZFwiLCB7IGVudGl0aWVzOiBuZXdDb25maWdFbnRpdGllcyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5lbnRpdGllcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5lbnRpdHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgICAuZW50aXR5IGhhLWVudGl0eS1waWNrZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWVudGl0eS1lZGl0b3JcIjogSHVpRW50aXR5RWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdFbGVtZW50U3R5bGUgPSBodG1sYFxuICA8c3R5bGU+XG4gICAgaGEtc3dpdGNoIHtcbiAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB9XG4gICAgLnNpZGUtYnktc2lkZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuc2lkZS1ieS1zaWRlID4gKiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgIH1cbiAgICAuc3VmZml4IHtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxuICA8L3N0eWxlPlxuYDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFZQTtBQUlBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQWFBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF3R0E7QUFyR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBakpBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXlJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU1BO0FBU0E7QUFHQTtBQUdBO0FBSUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBN0hBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=