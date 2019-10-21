(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities"],{

/***/ "./node_modules/@material/mwc-fab/mwc-fab-base.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/mwc-fab/mwc-fab-base.js ***!
  \********************************************************/
/*! exports provided: FabBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabBase", function() { return FabBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

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


class FabBase extends _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.mini = false;
        this.exited = false;
        this.disabled = false;
        this.extended = false;
        this.showIconAtEnd = false;
        this.icon = '';
        this.label = '';
    }
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    render() {
        const classes = {
            'mdc-fab--mini': this.mini,
            'mdc-fab--exited': this.exited,
            'mdc-fab--extended': this.extended,
        };
        const showLabel = this.label !== '' && this.extended;
        return _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <button
          .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])()}"
          class="mdc-fab ${Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label || this.icon}">
        ${showLabel && this.showIconAtEnd ? this.label : ''}
        ${this.icon ? _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
          <span class="material-icons mdc-fab__icon">${this.icon}</span>` :
            ''}
        ${showLabel && !this.showIconAtEnd ? this.label : ''}
      </button>`;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], FabBase.prototype, "mini", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], FabBase.prototype, "exited", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], FabBase.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], FabBase.prototype, "extended", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], FabBase.prototype, "showIconAtEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], FabBase.prototype, "icon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], FabBase.prototype, "label", void 0);
//# sourceMappingURL=mwc-fab-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-fab/mwc-fab-css.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/mwc-fab/mwc-fab-css.js ***!
  \*******************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
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

const style = _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-fab{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12);display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);background-color:#018786;color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab:not(.mdc-fab--extended){border-radius:50%}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align: auto){.mdc-fab{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab--mini{width:40px;height:40px}.mdc-fab--extended{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.0892857143em;text-decoration:none;text-transform:uppercase;border-radius:24px;padding:0 20px;width:auto;max-width:100%;height:48px}.mdc-fab--extended .mdc-fab__icon{margin-left:-8px;margin-right:12px}[dir=rtl] .mdc-fab--extended .mdc-fab__icon,.mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:-8px}.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:-8px}[dir=rtl] .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,.mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:-8px;margin-right:12px}.mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}.mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-fab::before,.mdc-fab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab::before,.mdc-fab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab::before,.mdc-fab::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-fab::before,.mdc-fab::after{background-color:var(--mdc-theme-on-secondary, #fff)}}.mdc-fab:hover::before{opacity:.08}.mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mdc-fab.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}:host{outline:none}`;
//# sourceMappingURL=mwc-fab-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-fab/mwc-fab.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/mwc-fab/mwc-fab.js ***!
  \***************************************************/
/*! exports provided: Fab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fab", function() { return Fab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _mwc_fab_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-fab-base.js */ "./node_modules/@material/mwc-fab/mwc-fab-base.js");
/* harmony import */ var _mwc_fab_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-fab-css.js */ "./node_modules/@material/mwc-fab/mwc-fab-css.js");

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



let Fab = class Fab extends _mwc_fab_base_js__WEBPACK_IMPORTED_MODULE_2__["FabBase"] {
};
Fab.styles = _mwc_fab_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Fab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-fab')
], Fab);

//# sourceMappingURL=mwc-fab.js.map

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

/***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
/*! exports provided: computeUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUnusedEntities", function() { return computeUnusedEntities; });
const EXCLUDED_DOMAINS = ["zone", "persistent_notification"];
const addFromAction = (entities, actionConfig) => {
    if (actionConfig.action !== "call-service" ||
        !actionConfig.service_data ||
        !actionConfig.service_data.entity_id) {
        return;
    }
    let entityIds = actionConfig.service_data.entity_id;
    if (!Array.isArray(entityIds)) {
        entityIds = [entityIds];
    }
    for (const entityId of entityIds) {
        entities.add(entityId);
    }
};
const addEntityId = (entities, entity) => {
    if (typeof entity === "string") {
        entities.add(entity);
        return;
    }
    if (entity.entity) {
        entities.add(entity.entity);
    }
    if (entity.camera_image) {
        entities.add(entity.camera_image);
    }
    if (entity.tap_action) {
        addFromAction(entities, entity.tap_action);
    }
    if (entity.hold_action) {
        addFromAction(entities, entity.hold_action);
    }
};
const addEntities = (entities, obj) => {
    if (obj.entity) {
        addEntityId(entities, obj.entity);
    }
    if (obj.entities) {
        obj.entities.forEach((entity) => addEntityId(entities, entity));
    }
    if (obj.card) {
        addEntities(entities, obj.card);
    }
    if (obj.cards) {
        obj.cards.forEach((card) => addEntities(entities, card));
    }
    if (obj.elements) {
        obj.elements.forEach((card) => addEntities(entities, card));
    }
    if (obj.badges) {
        obj.badges.forEach((badge) => addEntityId(entities, badge));
    }
};
const computeUsedEntities = (config) => {
    const entities = new Set();
    config.views.forEach((view) => addEntities(entities, view));
    return entities;
};
const computeUnusedEntities = (hass, config) => {
    const usedEntities = computeUsedEntities(config);
    return Object.keys(hass.states)
        .filter((entity) => !usedEntities.has(entity) &&
        !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0]))
        .sort();
};


/***/ }),

/***/ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showSelectViewDialog = (element, selectViewDialogParams) => {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "hui-dialog-select-view",
        dialogImport: () => Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts")),
        dialogParams: selectViewDialogParams,
    });
};


/***/ }),

/***/ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts ***!
  \***************************************************************************/
/*! exports provided: HuiUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnusedEntities", function() { return HuiUnusedEntities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../select-view/show-select-view-dialog */ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts");
/* harmony import */ var _card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
















let HuiUnusedEntities = class HuiUnusedEntities extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._unusedEntities = [];
        this._selectedEntities = [];
        this._columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])((narrow) => {
            const columns = {
                entity: {
                    title: "Entity",
                    sortable: true,
                    filterable: true,
                    filterKey: "friendly_name",
                    direction: "asc",
                    template: (stateObj) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
          <div @click=${this._handleEntityClicked} style="cursor: pointer;">
            <state-badge
              .hass=${this.hass}
              .stateObj=${stateObj}
            ></state-badge>
            ${stateObj.friendly_name}
          </div>
        `,
                },
            };
            if (narrow) {
                return columns;
            }
            columns.entity_id = {
                title: "Entity id",
                sortable: true,
                filterable: true,
            };
            columns.domain = {
                title: "Domain",
                sortable: true,
                filterable: true,
            };
            columns.last_changed = {
                title: "Last Changed",
                type: "numeric",
                sortable: true,
                template: (lastChanged) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <ha-relative-time
          .hass=${this.hass}
          .datetime=${lastChanged}
        ></ha-relative-time>
      `,
            };
            return columns;
        });
    }
    get _config() {
        return this.lovelace.config;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("lovelace")) {
            this._getUnusedEntities();
        }
    }
    render() {
        if (!this.hass || !this.lovelace) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        if (this.lovelace.mode === "storage" && this.lovelace.editMode === false) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card header="Unused entities">
        <div class="card-content">
          These are the entities that you have available, but are not in your
          Lovelace UI yet.
          ${this.lovelace.mode === "storage"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <br />Select the entities you want to add to a card and then
                click the add card button.
              `
            : ""}
        </div>
      </ha-card>
      <ha-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._unusedEntities.map((entity) => {
            const stateObj = this.hass.states[entity];
            return {
                entity_id: entity,
                entity: Object.assign(Object.assign({}, stateObj), { friendly_name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(stateObj) }),
                domain: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(entity),
                last_changed: stateObj.last_changed,
            };
        })}
        .id=${"entity_id"}
        .selectable=${this.lovelace.mode === "storage"}
        @selection-changed=${this._handleSelectionChanged}
      ></ha-data-table>
      ${this.lovelace.mode === "storage"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <ha-fab
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass),
            })}"
              icon="hass:plus"
              label="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}"
              @click="${this._selectView}"
            ></ha-fab>
          `
            : ""}
    `;
    }
    _getUnusedEntities() {
        if (!this.hass || !this.lovelace) {
            return;
        }
        this._selectedEntities = [];
        this._unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_12__["computeUnusedEntities"])(this.hass, this._config);
    }
    _handleSelectionChanged(ev) {
        const changedSelection = ev.detail;
        const entity = changedSelection.id;
        if (changedSelection.selected) {
            this._selectedEntities.push(entity);
        }
        else {
            const index = this._selectedEntities.indexOf(entity);
            if (index !== -1) {
                this._selectedEntities.splice(index, 1);
            }
        }
    }
    _handleEntityClicked(ev) {
        const entityId = ev.target
            .closest("tr")
            .getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__["fireEvent"])(this, "hass-more-info", {
            entityId,
        });
    }
    _selectView() {
        Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_13__["showSelectViewDialog"])(this, {
            lovelace: this.lovelace,
            viewSelectedCallback: (view) => this._addCard(view),
        });
    }
    _addCard(view) {
        Object(_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_14__["showEditCardDialog"])(this, {
            lovelace: this.lovelace,
            path: [view],
            entities: this._selectedEntities,
        });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        background: var(--lovelace-background);
        padding: 16px;
      }
      ha-fab {
        position: sticky;
        float: right;
        bottom: 16px;
        z-index: 1;
      }
      ha-fab.rtl {
        float: left;
      }
      ha-card {
        margin-bottom: 16px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiUnusedEntities.prototype, "lovelace", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiUnusedEntities.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiUnusedEntities.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiUnusedEntities.prototype, "_unusedEntities", void 0);
HuiUnusedEntities = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-unused-entities")
], HuiUnusedEntities);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLWZhYi9td2MtZmFiLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtZmFiL213Yy1mYWItY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLWZhYi9td2MtZmFiLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zZWxlY3Qtdmlldy9zaG93LXNlbGVjdC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci91bnVzZWQtZW50aXRpZXMvaHVpLXVudXNlZC1lbnRpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjbGFzc01hcCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IHJpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuZXhwb3J0IGNsYXNzIEZhYkJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW5pID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXhpdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leHRlbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dJY29uQXRFbmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pY29uID0gJyc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnJztcbiAgICB9XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgICAgICAgJ21kYy1mYWItLW1pbmknOiB0aGlzLm1pbmksXG4gICAgICAgICAgICAnbWRjLWZhYi0tZXhpdGVkJzogdGhpcy5leGl0ZWQsXG4gICAgICAgICAgICAnbWRjLWZhYi0tZXh0ZW5kZWQnOiB0aGlzLmV4dGVuZGVkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzaG93TGFiZWwgPSB0aGlzLmxhYmVsICE9PSAnJyAmJiB0aGlzLmV4dGVuZGVkO1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8YnV0dG9uXG4gICAgICAgICAgLnJpcHBsZT1cIiR7cmlwcGxlKCl9XCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5kaXNhYmxlZH1cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCIke3RoaXMubGFiZWwgfHwgdGhpcy5pY29ufVwiPlxuICAgICAgICAke3Nob3dMYWJlbCAmJiB0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogJyd9XG4gICAgICAgICR7dGhpcy5pY29uID8gaHRtbCBgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtZmFiX19pY29uXCI+JHt0aGlzLmljb259PC9zcGFuPmAgOlxuICAgICAgICAgICAgJyd9XG4gICAgICAgICR7c2hvd0xhYmVsICYmICF0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogJyd9XG4gICAgICA8L2J1dHRvbj5gO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwibWluaVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJleGl0ZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwiZXh0ZW5kZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwic2hvd0ljb25BdEVuZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwiaWNvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwibGFiZWxcIiwgdm9pZCAwKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1mYWItYmFzZS5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzcyBgLm1hdGVyaWFsLWljb25ze2ZvbnQtZmFtaWx5OnZhcigtLW1kYy1pY29uLWZvbnQsIFwiTWF0ZXJpYWwgSWNvbnNcIik7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZTp2YXIoLS1tZGMtaWNvbi1zaXplLCAyNHB4KTtsaW5lLWhlaWdodDoxO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3doaXRlLXNwYWNlOm5vd3JhcDt3b3JkLXdyYXA6bm9ybWFsO2RpcmVjdGlvbjpsdHI7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpcImxpZ2FcIn0ubWRjLWZhYntib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo1NnB4O2hlaWdodDo1NnB4O3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmaWxsOmN1cnJlbnRDb2xvcjt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lOy1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxvcGFjaXR5IDE1bXMgbGluZWFyIDMwbXMsdHJhbnNmb3JtIDI3MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7Y29sb3I6I2ZmZjtjb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKX0ubWRjLWZhYjpub3QoLm1kYy1mYWItLWV4dGVuZGVkKXtib3JkZXItcmFkaXVzOjUwJX0ubWRjLWZhYjo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjB9Lm1kYy1mYWI6aG92ZXIsLm1kYy1mYWI6Zm9jdXN7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kYy1mYWI6YWN0aXZle2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWRjLWZhYjphY3RpdmUsLm1kYy1mYWI6Zm9jdXN7b3V0bGluZTpub25lfS5tZGMtZmFiOmhvdmVye2N1cnNvcjpwb2ludGVyfS5tZGMtZmFiPnN2Z3t3aWR0aDoxMDAlfUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtZmFie2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fS5tZGMtZmFiIC5tZGMtZmFiX19pY29ue3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7Zm9udC1zaXplOjI0cHh9Lm1kYy1mYWItLW1pbml7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0ubWRjLWZhYi0tZXh0ZW5kZWR7Zm9udC1mYW1pbHk6Um9ib3RvLCBzYW5zLXNlcmlmOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTouODc1cmVtO2xpbmUtaGVpZ2h0OjIuMjVyZW07Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wODkyODU3MTQzZW07dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1yYWRpdXM6MjRweDtwYWRkaW5nOjAgMjBweDt3aWR0aDphdXRvO21heC13aWR0aDoxMDAlO2hlaWdodDo0OHB4fS5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9faWNvbnttYXJnaW4tbGVmdDotOHB4O21hcmdpbi1yaWdodDoxMnB4fVtkaXI9cnRsXSAubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2ljb24sLm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19pY29uW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjEycHg7bWFyZ2luLXJpZ2h0Oi04cHh9Lm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19sYWJlbCsubWRjLWZhYl9faWNvbnttYXJnaW4tbGVmdDoxMnB4O21hcmdpbi1yaWdodDotOHB4fVtkaXI9cnRsXSAubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2xhYmVsKy5tZGMtZmFiX19pY29uLC5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9fbGFiZWwrLm1kYy1mYWJfX2ljb25bZGlyPXJ0bF17bWFyZ2luLWxlZnQ6LThweDttYXJnaW4tcmlnaHQ6MTJweH0ubWRjLWZhYl9fbGFiZWx7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5tZGMtZmFiX19pY29ue3RyYW5zaXRpb246dHJhbnNmb3JtIDE4MG1zIDkwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7ZmlsbDpjdXJyZW50Q29sb3I7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5tZGMtZmFiIC5tZGMtZmFiX19pY29ue2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kYy1mYWItLWV4aXRlZHt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhciAxNTBtcyx0cmFuc2Zvcm0gMTgwbXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpfS5tZGMtZmFiLS1leGl0ZWQgLm1kYy1mYWJfX2ljb257dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIDEzNW1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Z3stLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyOiAxcHggc29saWQgIzAwMDt2aXNpYmlsaXR5OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zzo6YmVmb3Jle2JvcmRlcjp2YXIoLS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcil9Lm1kYy1mYWJ7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0ubWRjLWZhYjo6YmVmb3JlLC5tZGMtZmFiOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1mYWI6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1mYWI6OmJlZm9yZSwubWRjLWZhYjo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLWZhYjo6YmVmb3JlLC5tZGMtZmFiOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1mYWI6OmJlZm9yZSwubWRjLWZhYjo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKX19Lm1kYy1mYWI6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wOH0ubWRjLWZhYjpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjI0fS5tZGMtZmFiOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1mYWI6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4yNH0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjI0fTpob3N0e291dGxpbmU6bm9uZX1gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLWZhYi1jc3MuanMubWFwIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgRmFiQmFzZSB9IGZyb20gJy4vbXdjLWZhYi1iYXNlLmpzJztcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnLi9td2MtZmFiLWNzcy5qcyc7XG5sZXQgRmFiID0gY2xhc3MgRmFiIGV4dGVuZHMgRmFiQmFzZSB7XG59O1xuRmFiLnN0eWxlcyA9IHN0eWxlO1xuRmFiID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnbXdjLWZhYicpXG5dLCBGYWIpO1xuZXhwb3J0IHsgRmFiIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1td2MtZmFiLmpzLm1hcCIsImltcG9ydCB7XG4gIGNsYXNzTWFwLFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBDb25zdHJ1Y3Rvcixcbn0gZnJvbSBcIkBtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnRcIjtcbmltcG9ydCB7IHJpcHBsZSB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXJpcHBsZS9yaXBwbGUtZGlyZWN0aXZlLmpzXCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtZmFiXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEZhYiB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NGYWIgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2MtZmFiXCIpIGFzIENvbnN0cnVjdG9yPEZhYj47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZmFiXCIpXG5leHBvcnQgY2xhc3MgSGFGYWIgZXh0ZW5kcyBNd2NGYWIge1xuICAvLyBXZSBvdmVycmlkZSB0aGUgcmVuZGVyIG1ldGhvZCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW4gaWNvbiBmb250IGFuZCBtd2MtZmFiIGRvZXNuJ3Qgc3VwcG9ydCBvdXIgc3ZnLWljb24gc2V0cy5cbiAgLy8gQmFzZWQgb24gdmVyc2lvbiBtd2MtZmFiIDAuOFxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBcIm1kYy1mYWItLW1pbmlcIjogdGhpcy5taW5pLFxuICAgICAgXCJtZGMtZmFiLS1leGl0ZWRcIjogdGhpcy5leGl0ZWQsXG4gICAgICBcIm1kYy1mYWItLWV4dGVuZGVkXCI6IHRoaXMuZXh0ZW5kZWQsXG4gICAgfTtcbiAgICBjb25zdCBzaG93TGFiZWwgPSB0aGlzLmxhYmVsICE9PSBcIlwiICYmIHRoaXMuZXh0ZW5kZWQ7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YnV0dG9uXG4gICAgICAgIC5yaXBwbGU9XCIke3JpcHBsZSgpfVwiXG4gICAgICAgIGNsYXNzPVwibWRjLWZhYiAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5kaXNhYmxlZH1cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiJHt0aGlzLmxhYmVsIHx8IHRoaXMuaWNvbn1cIlxuICAgICAgPlxuICAgICAgICAke3Nob3dMYWJlbCAmJiB0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogXCJcIn1cbiAgICAgICAgJHt0aGlzLmljb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1pY29uIC5pY29uPSR7dGhpcy5pY29ufT48L2hhLWljb24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3Nob3dMYWJlbCAmJiAhdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mYWJcIjogSGFGYWI7XG4gIH1cbn1cbiIsImltcG9ydCB7IExvdmVsYWNlQ29uZmlnLCBBY3Rpb25Db25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jb25zdCBFWENMVURFRF9ET01BSU5TID0gW1wiem9uZVwiLCBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCJdO1xuXG5jb25zdCBhZGRGcm9tQWN0aW9uID0gKGVudGl0aWVzOiBTZXQ8c3RyaW5nPiwgYWN0aW9uQ29uZmlnOiBBY3Rpb25Db25maWcpID0+IHtcbiAgaWYgKFxuICAgIGFjdGlvbkNvbmZpZy5hY3Rpb24gIT09IFwiY2FsbC1zZXJ2aWNlXCIgfHxcbiAgICAhYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YSB8fFxuICAgICFhY3Rpb25Db25maWcuc2VydmljZV9kYXRhLmVudGl0eV9pZFxuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IGVudGl0eUlkcyA9IGFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEuZW50aXR5X2lkO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZW50aXR5SWRzKSkge1xuICAgIGVudGl0eUlkcyA9IFtlbnRpdHlJZHNdO1xuICB9XG4gIGZvciAoY29uc3QgZW50aXR5SWQgb2YgZW50aXR5SWRzKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eUlkKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRW50aXR5SWQgPSAoZW50aXRpZXM6IFNldDxzdHJpbmc+LCBlbnRpdHkpID0+IHtcbiAgaWYgKHR5cGVvZiBlbnRpdHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZW50aXR5LmVudGl0eSkge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkuZW50aXR5KTtcbiAgfVxuICBpZiAoZW50aXR5LmNhbWVyYV9pbWFnZSkge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHkuY2FtZXJhX2ltYWdlKTtcbiAgfVxuICBpZiAoZW50aXR5LnRhcF9hY3Rpb24pIHtcbiAgICBhZGRGcm9tQWN0aW9uKGVudGl0aWVzLCBlbnRpdHkudGFwX2FjdGlvbik7XG4gIH1cbiAgaWYgKGVudGl0eS5ob2xkX2FjdGlvbikge1xuICAgIGFkZEZyb21BY3Rpb24oZW50aXRpZXMsIGVudGl0eS5ob2xkX2FjdGlvbik7XG4gIH1cbn07XG5cbmNvbnN0IGFkZEVudGl0aWVzID0gKGVudGl0aWVzOiBTZXQ8c3RyaW5nPiwgb2JqKSA9PiB7XG4gIGlmIChvYmouZW50aXR5KSB7XG4gICAgYWRkRW50aXR5SWQoZW50aXRpZXMsIG9iai5lbnRpdHkpO1xuICB9XG4gIGlmIChvYmouZW50aXRpZXMpIHtcbiAgICBvYmouZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiBhZGRFbnRpdHlJZChlbnRpdGllcywgZW50aXR5KSk7XG4gIH1cbiAgaWYgKG9iai5jYXJkKSB7XG4gICAgYWRkRW50aXRpZXMoZW50aXRpZXMsIG9iai5jYXJkKTtcbiAgfVxuICBpZiAob2JqLmNhcmRzKSB7XG4gICAgb2JqLmNhcmRzLmZvckVhY2goKGNhcmQpID0+IGFkZEVudGl0aWVzKGVudGl0aWVzLCBjYXJkKSk7XG4gIH1cbiAgaWYgKG9iai5lbGVtZW50cykge1xuICAgIG9iai5lbGVtZW50cy5mb3JFYWNoKChjYXJkKSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgY2FyZCkpO1xuICB9XG4gIGlmIChvYmouYmFkZ2VzKSB7XG4gICAgb2JqLmJhZGdlcy5mb3JFYWNoKChiYWRnZSkgPT4gYWRkRW50aXR5SWQoZW50aXRpZXMsIGJhZGdlKSk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbXB1dGVVc2VkRW50aXRpZXMgPSAoY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVudGl0aWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbmZpZy52aWV3cy5mb3JFYWNoKCh2aWV3KSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgdmlldykpO1xuICByZXR1cm4gZW50aXRpZXM7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVVudXNlZEVudGl0aWVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWc6IExvdmVsYWNlQ29uZmlnXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHVzZWRFbnRpdGllcyA9IGNvbXB1dGVVc2VkRW50aXRpZXMoY29uZmlnKTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgIC5maWx0ZXIoXG4gICAgICAoZW50aXR5KSA9PlxuICAgICAgICAhdXNlZEVudGl0aWVzLmhhcyhlbnRpdHkpICYmXG4gICAgICAgICFFWENMVURFRF9ET01BSU5TLmluY2x1ZGVzKGVudGl0eS5zcGxpdChcIi5cIiwgMSlbMF0pXG4gICAgKVxuICAgIC5zb3J0KCk7XG59O1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RWaWV3RGlhbG9nUGFyYW1zIHtcbiAgbG92ZWxhY2U6IExvdmVsYWNlO1xuICB2aWV3U2VsZWN0ZWRDYWxsYmFjazogKHZpZXc6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dTZWxlY3RWaWV3RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc2VsZWN0Vmlld0RpYWxvZ1BhcmFtczogU2VsZWN0Vmlld0RpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIiAqLyBcIi4vaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiKSxcbiAgICBkaWFsb2dQYXJhbXM6IHNlbGVjdFZpZXdEaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHtcbiAgU2VsZWN0aW9uQ2hhbmdlZEV2ZW50LFxuICBEYXRhVGFibGVDb2x1bW5Db250YWluZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RhdGEtdGFibGUvaGEtZGF0YS10YWJsZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgY29tcHV0ZVVudXNlZEVudGl0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllc1wiO1xuaW1wb3J0IHsgc2hvd1NlbGVjdFZpZXdEaWFsb2cgfSBmcm9tIFwiLi4vc2VsZWN0LXZpZXcvc2hvdy1zZWxlY3Qtdmlldy1kaWFsb2dcIjtcbmltcG9ydCB7IHNob3dFZGl0Q2FyZERpYWxvZyB9IGZyb20gXCIuLi9jYXJkLWVkaXRvci9zaG93LWVkaXQtY2FyZC1kaWFsb2dcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdW51c2VkLWVudGl0aWVzXCIpXG5leHBvcnQgY2xhc3MgSHVpVW51c2VkRW50aXRpZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3c/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3VudXNlZEVudGl0aWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgX3NlbGVjdGVkRW50aXRpZXM6IHN0cmluZ1tdID0gW107XG5cbiAgcHJpdmF0ZSBnZXQgX2NvbmZpZygpOiBMb3ZlbGFjZUNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMubG92ZWxhY2UhLmNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKChuYXJyb3c6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBjb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSB7XG4gICAgICBlbnRpdHk6IHtcbiAgICAgICAgdGl0bGU6IFwiRW50aXR5XCIsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICBmaWx0ZXJLZXk6IFwiZnJpZW5kbHlfbmFtZVwiLFxuICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgIHRlbXBsYXRlOiAoc3RhdGVPYmopID0+IGh0bWxgXG4gICAgICAgICAgPGRpdiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVFbnRpdHlDbGlja2VkfSBzdHlsZT1cImN1cnNvcjogcG9pbnRlcjtcIj5cbiAgICAgICAgICAgIDxzdGF0ZS1iYWRnZVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgICAgIC5zdGF0ZU9iaj0ke3N0YXRlT2JqfVxuICAgICAgICAgICAgPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgICAgICAke3N0YXRlT2JqLmZyaWVuZGx5X25hbWV9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpZiAobmFycm93KSB7XG4gICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICBjb2x1bW5zLmVudGl0eV9pZCA9IHtcbiAgICAgIHRpdGxlOiBcIkVudGl0eSBpZFwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgIH07XG4gICAgY29sdW1ucy5kb21haW4gPSB7XG4gICAgICB0aXRsZTogXCJEb21haW5cIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbHVtbnMubGFzdF9jaGFuZ2VkID0ge1xuICAgICAgdGl0bGU6IFwiTGFzdCBDaGFuZ2VkXCIsXG4gICAgICB0eXBlOiBcIm51bWVyaWNcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6IChsYXN0Q2hhbmdlZDogc3RyaW5nKSA9PiBodG1sYFxuICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzIX1cbiAgICAgICAgICAuZGF0ZXRpbWU9JHtsYXN0Q2hhbmdlZH1cbiAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgIGAsXG4gICAgfTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9KTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJsb3ZlbGFjZVwiKSkge1xuICAgICAgdGhpcy5fZ2V0VW51c2VkRW50aXRpZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMubG92ZWxhY2UpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubG92ZWxhY2UubW9kZSA9PT0gXCJzdG9yYWdlXCIgJiYgdGhpcy5sb3ZlbGFjZS5lZGl0TW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJVbnVzZWQgZW50aXRpZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIFRoZXNlIGFyZSB0aGUgZW50aXRpZXMgdGhhdCB5b3UgaGF2ZSBhdmFpbGFibGUsIGJ1dCBhcmUgbm90IGluIHlvdXJcbiAgICAgICAgICBMb3ZlbGFjZSBVSSB5ZXQuXG4gICAgICAgICAgJHt0aGlzLmxvdmVsYWNlLm1vZGUgPT09IFwic3RvcmFnZVwiXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGJyIC8+U2VsZWN0IHRoZSBlbnRpdGllcyB5b3Ugd2FudCB0byBhZGQgdG8gYSBjYXJkIGFuZCB0aGVuXG4gICAgICAgICAgICAgICAgY2xpY2sgdGhlIGFkZCBjYXJkIGJ1dHRvbi5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDxoYS1kYXRhLXRhYmxlXG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdyEpfVxuICAgICAgICAuZGF0YT0ke3RoaXMuX3VudXNlZEVudGl0aWVzLm1hcCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB0aGlzLmhhc3MhLnN0YXRlc1tlbnRpdHldO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAuLi5zdGF0ZU9iaixcbiAgICAgICAgICAgICAgZnJpZW5kbHlfbmFtZTogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaiksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tYWluOiBjb21wdXRlRG9tYWluKGVudGl0eSksXG4gICAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlT2JqIS5sYXN0X2NoYW5nZWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSl9XG4gICAgICAgIC5pZD0ke1wiZW50aXR5X2lkXCJ9XG4gICAgICAgIC5zZWxlY3RhYmxlPSR7dGhpcy5sb3ZlbGFjZSEubW9kZSA9PT0gXCJzdG9yYWdlXCJ9XG4gICAgICAgIEBzZWxlY3Rpb24tY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWR9XG4gICAgICA+PC9oYS1kYXRhLXRhYmxlPlxuICAgICAgJHt0aGlzLmxvdmVsYWNlLm1vZGUgPT09IFwic3RvcmFnZVwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoYS1mYWJcbiAgICAgICAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICBydGw6IGNvbXB1dGVSVEwodGhpcy5oYXNzKSxcbiAgICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmFkZFwiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zZWxlY3RWaWV3fVwiXG4gICAgICAgICAgICA+PC9oYS1mYWI+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFVudXNlZEVudGl0aWVzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLmxvdmVsYWNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMgPSBbXTtcbiAgICB0aGlzLl91bnVzZWRFbnRpdGllcyA9IGNvbXB1dGVVbnVzZWRFbnRpdGllcyh0aGlzLmhhc3MsIHRoaXMuX2NvbmZpZyEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2VsZWN0aW9uQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjaGFuZ2VkU2VsZWN0aW9uID0gZXYuZGV0YWlsIGFzIFNlbGVjdGlvbkNoYW5nZWRFdmVudDtcbiAgICBjb25zdCBlbnRpdHkgPSBjaGFuZ2VkU2VsZWN0aW9uLmlkO1xuICAgIGlmIChjaGFuZ2VkU2VsZWN0aW9uLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLnB1c2goZW50aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLmluZGV4T2YoZW50aXR5KTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUVudGl0eUNsaWNrZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLmNsb3Nlc3QoXCJ0clwiKSFcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvdy1pZFwiKSE7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RWaWV3KCk6IHZvaWQge1xuICAgIHNob3dTZWxlY3RWaWV3RGlhbG9nKHRoaXMsIHtcbiAgICAgIGxvdmVsYWNlOiB0aGlzLmxvdmVsYWNlISxcbiAgICAgIHZpZXdTZWxlY3RlZENhbGxiYWNrOiAodmlldykgPT4gdGhpcy5fYWRkQ2FyZCh2aWV3KSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENhcmQodmlldzogbnVtYmVyKTogdm9pZCB7XG4gICAgc2hvd0VkaXRDYXJkRGlhbG9nKHRoaXMsIHtcbiAgICAgIGxvdmVsYWNlOiB0aGlzLmxvdmVsYWNlISxcbiAgICAgIHBhdGg6IFt2aWV3XSxcbiAgICAgIGVudGl0aWVzOiB0aGlzLl9zZWxlY3RlZEVudGl0aWVzLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sb3ZlbGFjZS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cbiAgICAgIGhhLWZhYiB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgICAgaGEtZmFiLnJ0bCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLXVudXNlZC1lbnRpdGllc1wiOiBIdWlVbnVzZWRFbnRpdGllcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUEzQkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQVdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUFBOztBQU9BO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBb0lBO0FBdkxBO0FBQ0E7QUFDQTtBQW1EQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQWpNQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBQ0E7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==