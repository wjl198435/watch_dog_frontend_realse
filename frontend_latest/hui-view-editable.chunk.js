(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-view-editable"],{

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

/***/ "./src/panels/lovelace/components/hui-card-options.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-card-options.ts ***!
  \************************************************************/
/*! exports provided: HuiCardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardOptions", function() { return HuiCardOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/delete-card */ "./src/panels/lovelace/editor/delete-card.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts");










let HuiCardOptions = class HuiCardOptions extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <slot></slot>
      <div class="options">
        <div class="primary-actions">
          <mwc-button @click="${this._editCard}"
            >${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")}</mwc-button
          >
        </div>
        <div class="secondary-actions">
          <paper-icon-button
            title="Move card down"
            class="move-arrow"
            icon="hass:arrow-down"
            @click="${this._cardDown}"
            ?disabled="${this.lovelace.config.views[this.path[0]].cards
            .length ===
            this.path[1] + 1}"
          ></paper-icon-button>
          <paper-icon-button
            title="Move card up"
            class="move-arrow"
            icon="hass:arrow-up"
            @click="${this._cardUp}"
            ?disabled="${this.path[1] === 0}"
          ></paper-icon-button>
          <paper-menu-button
            horizontal-align="right"
            vertical-align="bottom"
            vertical-offset="40"
          >
            <paper-icon-button
              icon="hass:dots-vertical"
              slot="dropdown-trigger"
              aria-label="More options"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-item @click="${this._moveCard}">
                ${this.hass.localize("ui.panel.lovelace.editor.edit_card.move")}</paper-item
              >
              <paper-item @click="${this._deleteCard}">
                ${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}</paper-item
              >
            </paper-listbox>
          </paper-menu-button>
        </div>
      </div>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      div.options {
        border-top: 1px solid #e8e8e8;
        padding: 5px 8px;
        background: var(--paper-card-background-color, white);
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
        display: flex;
      }

      div.options .primary-actions {
        flex: 1;
        margin: auto;
      }

      div.options .secondary-actions {
        flex: 4;
        text-align: right;
      }

      paper-icon-button {
        color: var(--primary-text-color);
      }

      paper-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      paper-menu-button {
        color: var(--secondary-text-color);
        padding: 0;
      }

      paper-item.header {
        color: var(--primary-text-color);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
      }

      paper-item {
        cursor: pointer;
      }
    `;
    }
    _editCard() {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_6__["showEditCardDialog"])(this, {
            lovelace: this.lovelace,
            path: this.path,
        });
    }
    _cardUp() {
        const lovelace = this.lovelace;
        const path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_8__["swapCard"])(lovelace.config, path, [path[0], path[1] - 1]));
    }
    _cardDown() {
        const lovelace = this.lovelace;
        const path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_8__["swapCard"])(lovelace.config, path, [path[0], path[1] + 1]));
    }
    _moveCard() {
        Object(_editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_9__["showMoveCardViewDialog"])(this, {
            path: this.path,
            lovelace: this.lovelace,
        });
    }
    _deleteCard() {
        Object(_editor_delete_card__WEBPACK_IMPORTED_MODULE_7__["confDeleteCard"])(this.lovelace, this.path);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCardOptions.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCardOptions.prototype, "lovelace", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCardOptions.prototype, "path", void 0);
HuiCardOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-card-options")
], HuiCardOptions);



/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts ***!
  \******************************************************************************/
/*! exports provided: showMoveCardViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoveCardViewDialog", function() { return showMoveCardViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;
const registerEditCardDialog = (element) => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
    dialogShowEvent: "show-move-card-view",
    dialogTag: "hui-dialog-move-card-view",
    dialogImport: () => Promise.all(/*! import() | hui-dialog-move-card-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-move-card-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-move-card-view */ "./src/panels/lovelace/editor/card-editor/hui-dialog-move-card-view.ts")),
});
const showMoveCardViewDialog = (element, moveCardViewDialogParams) => {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditCardDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-move-card-view", moveCardViewDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/delete-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/delete-card.ts ***!
  \***************************************************/
/*! exports provided: confDeleteCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confDeleteCard", function() { return confDeleteCard; });
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-util */ "./src/panels/lovelace/editor/config-util.ts");

async function confDeleteCard(lovelace, path) {
    if (!confirm("Are you sure you want to delete this card?")) {
        return;
    }
    try {
        await lovelace.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_0__["deleteCard"])(lovelace.config, path));
    }
    catch (err) {
        alert(`Deleting failed: ${err.message}`);
    }
}


/***/ }),

/***/ "./src/panels/lovelace/views/hui-view-editable.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/views/hui-view-editable.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hui-card-options */ "./src/panels/lovelace/components/hui-card-options.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
// hui-view dependencies for when in edit mode.




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1mYWIvbXdjLWZhYi1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLWZhYi9td2MtZmFiLWNzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1mYWIvbXdjLWZhYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS1jYXJkLW9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1tb3ZlLWNhcmQtdmlldy1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvZGVsZXRlLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS92aWV3cy9odWktdmlldy1lZGl0YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjbGFzc01hcCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IHJpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuZXhwb3J0IGNsYXNzIEZhYkJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5taW5pID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXhpdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leHRlbmRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dJY29uQXRFbmQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pY29uID0gJyc7XG4gICAgICAgIHRoaXMubGFiZWwgPSAnJztcbiAgICB9XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgICAgICAgJ21kYy1mYWItLW1pbmknOiB0aGlzLm1pbmksXG4gICAgICAgICAgICAnbWRjLWZhYi0tZXhpdGVkJzogdGhpcy5leGl0ZWQsXG4gICAgICAgICAgICAnbWRjLWZhYi0tZXh0ZW5kZWQnOiB0aGlzLmV4dGVuZGVkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzaG93TGFiZWwgPSB0aGlzLmxhYmVsICE9PSAnJyAmJiB0aGlzLmV4dGVuZGVkO1xuICAgICAgICByZXR1cm4gaHRtbCBgXG4gICAgICA8YnV0dG9uXG4gICAgICAgICAgLnJpcHBsZT1cIiR7cmlwcGxlKCl9XCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5kaXNhYmxlZH1cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCIke3RoaXMubGFiZWwgfHwgdGhpcy5pY29ufVwiPlxuICAgICAgICAke3Nob3dMYWJlbCAmJiB0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogJyd9XG4gICAgICAgICR7dGhpcy5pY29uID8gaHRtbCBgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBtZGMtZmFiX19pY29uXCI+JHt0aGlzLmljb259PC9zcGFuPmAgOlxuICAgICAgICAgICAgJyd9XG4gICAgICAgICR7c2hvd0xhYmVsICYmICF0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogJyd9XG4gICAgICA8L2J1dHRvbj5gO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwibWluaVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJleGl0ZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwiZXh0ZW5kZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwic2hvd0ljb25BdEVuZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwiaWNvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoKVxuXSwgRmFiQmFzZS5wcm90b3R5cGUsIFwibGFiZWxcIiwgdm9pZCAwKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1mYWItYmFzZS5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzcyBgLm1hdGVyaWFsLWljb25ze2ZvbnQtZmFtaWx5OnZhcigtLW1kYy1pY29uLWZvbnQsIFwiTWF0ZXJpYWwgSWNvbnNcIik7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtc2l6ZTp2YXIoLS1tZGMtaWNvbi1zaXplLCAyNHB4KTtsaW5lLWhlaWdodDoxO2xldHRlci1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3doaXRlLXNwYWNlOm5vd3JhcDt3b3JkLXdyYXA6bm9ybWFsO2RpcmVjdGlvbjpsdHI7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpcImxpZ2FcIn0ubWRjLWZhYntib3gtc2hhZG93OjBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwwLDAsLjEyKTtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDo1NnB4O2hlaWdodDo1NnB4O3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmaWxsOmN1cnJlbnRDb2xvcjt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcjt1c2VyLXNlbGVjdDpub25lOy1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxvcGFjaXR5IDE1bXMgbGluZWFyIDMwbXMsdHJhbnNmb3JtIDI3MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7Y29sb3I6I2ZmZjtjb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKX0ubWRjLWZhYjpub3QoLm1kYy1mYWItLWV4dGVuZGVkKXtib3JkZXItcmFkaXVzOjUwJX0ubWRjLWZhYjo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjB9Lm1kYy1mYWI6aG92ZXIsLm1kYy1mYWI6Zm9jdXN7Ym94LXNoYWRvdzowcHggNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kYy1mYWI6YWN0aXZle2JveC1zaGFkb3c6MHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWRjLWZhYjphY3RpdmUsLm1kYy1mYWI6Zm9jdXN7b3V0bGluZTpub25lfS5tZGMtZmFiOmhvdmVye2N1cnNvcjpwb2ludGVyfS5tZGMtZmFiPnN2Z3t3aWR0aDoxMDAlfUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtZmFie2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fS5tZGMtZmFiIC5tZGMtZmFiX19pY29ue3dpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7Zm9udC1zaXplOjI0cHh9Lm1kYy1mYWItLW1pbml7d2lkdGg6NDBweDtoZWlnaHQ6NDBweH0ubWRjLWZhYi0tZXh0ZW5kZWR7Zm9udC1mYW1pbHk6Um9ib3RvLCBzYW5zLXNlcmlmOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2ZvbnQtc2l6ZTouODc1cmVtO2xpbmUtaGVpZ2h0OjIuMjVyZW07Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOi4wODkyODU3MTQzZW07dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO2JvcmRlci1yYWRpdXM6MjRweDtwYWRkaW5nOjAgMjBweDt3aWR0aDphdXRvO21heC13aWR0aDoxMDAlO2hlaWdodDo0OHB4fS5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9faWNvbnttYXJnaW4tbGVmdDotOHB4O21hcmdpbi1yaWdodDoxMnB4fVtkaXI9cnRsXSAubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2ljb24sLm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19pY29uW2Rpcj1ydGxde21hcmdpbi1sZWZ0OjEycHg7bWFyZ2luLXJpZ2h0Oi04cHh9Lm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19sYWJlbCsubWRjLWZhYl9faWNvbnttYXJnaW4tbGVmdDoxMnB4O21hcmdpbi1yaWdodDotOHB4fVtkaXI9cnRsXSAubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2xhYmVsKy5tZGMtZmFiX19pY29uLC5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9fbGFiZWwrLm1kYy1mYWJfX2ljb25bZGlyPXJ0bF17bWFyZ2luLWxlZnQ6LThweDttYXJnaW4tcmlnaHQ6MTJweH0ubWRjLWZhYl9fbGFiZWx7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVufS5tZGMtZmFiX19pY29ue3RyYW5zaXRpb246dHJhbnNmb3JtIDE4MG1zIDkwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7ZmlsbDpjdXJyZW50Q29sb3I7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5tZGMtZmFiIC5tZGMtZmFiX19pY29ue2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lm1kYy1mYWItLWV4aXRlZHt0cmFuc2Zvcm06c2NhbGUoMCk7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhciAxNTBtcyx0cmFuc2Zvcm0gMTgwbXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpfS5tZGMtZmFiLS1leGl0ZWQgLm1kYy1mYWJfX2ljb257dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIDEzNW1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Z3stLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyOiAxcHggc29saWQgIzAwMDt2aXNpYmlsaXR5OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zzo6YmVmb3Jle2JvcmRlcjp2YXIoLS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcil9Lm1kYy1mYWJ7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0ubWRjLWZhYjo6YmVmb3JlLC5tZGMtZmFiOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1mYWI6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1mYWI6OmJlZm9yZSwubWRjLWZhYjo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLWZhYjo6YmVmb3JlLC5tZGMtZmFiOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1mYWI6OmJlZm9yZSwubWRjLWZhYjo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKX19Lm1kYy1mYWI6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wOH0ubWRjLWZhYjpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1mYWIubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjI0fS5tZGMtZmFiOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1mYWI6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4yNH0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjI0fTpob3N0e291dGxpbmU6bm9uZX1gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLWZhYi1jc3MuanMubWFwIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgRmFiQmFzZSB9IGZyb20gJy4vbXdjLWZhYi1iYXNlLmpzJztcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnLi9td2MtZmFiLWNzcy5qcyc7XG5sZXQgRmFiID0gY2xhc3MgRmFiIGV4dGVuZHMgRmFiQmFzZSB7XG59O1xuRmFiLnN0eWxlcyA9IHN0eWxlO1xuRmFiID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnbXdjLWZhYicpXG5dLCBGYWIpO1xuZXhwb3J0IHsgRmFiIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1td2MtZmFiLmpzLm1hcCIsImltcG9ydCB7XG4gIGNsYXNzTWFwLFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBDb25zdHJ1Y3Rvcixcbn0gZnJvbSBcIkBtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnRcIjtcbmltcG9ydCB7IHJpcHBsZSB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXJpcHBsZS9yaXBwbGUtZGlyZWN0aXZlLmpzXCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtZmFiXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEZhYiB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NGYWIgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2MtZmFiXCIpIGFzIENvbnN0cnVjdG9yPEZhYj47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZmFiXCIpXG5leHBvcnQgY2xhc3MgSGFGYWIgZXh0ZW5kcyBNd2NGYWIge1xuICAvLyBXZSBvdmVycmlkZSB0aGUgcmVuZGVyIG1ldGhvZCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgYW4gaWNvbiBmb250IGFuZCBtd2MtZmFiIGRvZXNuJ3Qgc3VwcG9ydCBvdXIgc3ZnLWljb24gc2V0cy5cbiAgLy8gQmFzZWQgb24gdmVyc2lvbiBtd2MtZmFiIDAuOFxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBcIm1kYy1mYWItLW1pbmlcIjogdGhpcy5taW5pLFxuICAgICAgXCJtZGMtZmFiLS1leGl0ZWRcIjogdGhpcy5leGl0ZWQsXG4gICAgICBcIm1kYy1mYWItLWV4dGVuZGVkXCI6IHRoaXMuZXh0ZW5kZWQsXG4gICAgfTtcbiAgICBjb25zdCBzaG93TGFiZWwgPSB0aGlzLmxhYmVsICE9PSBcIlwiICYmIHRoaXMuZXh0ZW5kZWQ7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YnV0dG9uXG4gICAgICAgIC5yaXBwbGU9XCIke3JpcHBsZSgpfVwiXG4gICAgICAgIGNsYXNzPVwibWRjLWZhYiAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5kaXNhYmxlZH1cIlxuICAgICAgICBhcmlhLWxhYmVsPVwiJHt0aGlzLmxhYmVsIHx8IHRoaXMuaWNvbn1cIlxuICAgICAgPlxuICAgICAgICAke3Nob3dMYWJlbCAmJiB0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogXCJcIn1cbiAgICAgICAgJHt0aGlzLmljb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1pY29uIC5pY29uPSR7dGhpcy5pY29ufT48L2hhLWljb24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3Nob3dMYWJlbCAmJiAhdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mYWJcIjogSGFGYWI7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7IHNob3dFZGl0Q2FyZERpYWxvZyB9IGZyb20gXCIuLi9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1lZGl0LWNhcmQtZGlhbG9nXCI7XG5pbXBvcnQgeyBjb25mRGVsZXRlQ2FyZCB9IGZyb20gXCIuLi9lZGl0b3IvZGVsZXRlLWNhcmRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc3dhcENhcmQgfSBmcm9tIFwiLi4vZWRpdG9yL2NvbmZpZy11dGlsXCI7XG5pbXBvcnQgeyBzaG93TW92ZUNhcmRWaWV3RGlhbG9nIH0gZnJvbSBcIi4uL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLW9wdGlvbnNcIilcbmV4cG9ydCBjbGFzcyBIdWlDYXJkT3B0aW9ucyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHBhdGg/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5LWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2VkaXRDYXJkfVwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuZWRpdFwiXG4gICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnktYWN0aW9uc1wiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgZG93blwiXG4gICAgICAgICAgICBjbGFzcz1cIm1vdmUtYXJyb3dcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmREb3dufVwiXG4gICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMubG92ZWxhY2UhLmNvbmZpZy52aWV3c1t0aGlzLnBhdGghWzBdXS5jYXJkcyFcbiAgICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgICAgICAgdGhpcy5wYXRoIVsxXSArIDF9XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBjYXJkIHVwXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW92ZS1hcnJvd1wiXG4gICAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmRVcH1cIlxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLnBhdGghWzFdID09PSAwfVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ249XCJib3R0b21cIlxuICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiNDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTW9yZSBvcHRpb25zXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQGNsaWNrPVwiJHt0aGlzLl9tb3ZlQ2FyZH1cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQubW92ZVwiXG4gICAgICAgICAgICAgICAgKX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBAY2xpY2s9XCIke3RoaXMuX2RlbGV0ZUNhcmR9XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgKX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGRpdi5vcHRpb25zIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IC00cHgsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGRpdi5vcHRpb25zIC5wcmltYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGRpdi5vcHRpb25zIC5zZWNvbmRhcnktYWN0aW9ucyB7XG4gICAgICAgIGZsZXg6IDQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWJ1dHRvbi5tb3ZlLWFycm93W2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbWVudS1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLmhlYWRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2VkaXRDYXJkKCk6IHZvaWQge1xuICAgIHNob3dFZGl0Q2FyZERpYWxvZyh0aGlzLCB7XG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgICBwYXRoOiB0aGlzLnBhdGghLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZFVwKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZSE7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aCE7XG4gICAgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgIHN3YXBDYXJkKGxvdmVsYWNlLmNvbmZpZywgcGF0aCwgW3BhdGhbMF0sIHBhdGhbMV0gLSAxXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZERvd24oKTogdm9pZCB7XG4gICAgY29uc3QgbG92ZWxhY2UgPSB0aGlzLmxvdmVsYWNlITtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5wYXRoITtcbiAgICBsb3ZlbGFjZS5zYXZlQ29uZmlnKFxuICAgICAgc3dhcENhcmQobG92ZWxhY2UuY29uZmlnLCBwYXRoLCBbcGF0aFswXSwgcGF0aFsxXSArIDFdKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9tb3ZlQ2FyZCgpOiB2b2lkIHtcbiAgICBzaG93TW92ZUNhcmRWaWV3RGlhbG9nKHRoaXMsIHtcbiAgICAgIHBhdGg6IHRoaXMucGF0aCEsXG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZWxldGVDYXJkKCk6IHZvaWQge1xuICAgIGNvbmZEZWxldGVDYXJkKHRoaXMubG92ZWxhY2UhLCB0aGlzLnBhdGghKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNhcmQtb3B0aW9uc1wiOiBIdWlDYXJkT3B0aW9ucztcbiAgfVxufVxuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJzaG93LW1vdmUtY2FyZC12aWV3XCI6IE1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtcztcbiAgfVxufVxuXG5sZXQgcmVnaXN0ZXJlZERpYWxvZyA9IGZhbHNlO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtcyB7XG4gIHBhdGg6IFtudW1iZXIsIG51bWJlcl07XG4gIGxvdmVsYWNlOiBMb3ZlbGFjZTtcbn1cblxuY29uc3QgcmVnaXN0ZXJFZGl0Q2FyZERpYWxvZyA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEV2ZW50ID0+XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInJlZ2lzdGVyLWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctbW92ZS1jYXJkLXZpZXdcIixcbiAgICBkaWFsb2dUYWc6IFwiaHVpLWRpYWxvZy1tb3ZlLWNhcmQtdmlld1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImh1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIiAqLyBcIi4vaHVpLWRpYWxvZy1tb3ZlLWNhcmQtdmlld1wiKSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzaG93TW92ZUNhcmRWaWV3RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgbW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zOiBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICByZWdpc3RlckVkaXRDYXJkRGlhbG9nKGVsZW1lbnQpO1xuICB9XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctbW92ZS1jYXJkLXZpZXdcIiwgbW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zKTtcbn07XG4iLCJpbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZGVsZXRlQ2FyZCB9IGZyb20gXCIuL2NvbmZpZy11dGlsXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25mRGVsZXRlQ2FyZChcbiAgbG92ZWxhY2U6IExvdmVsYWNlLFxuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKCFjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhcmQ/XCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgYXdhaXQgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhkZWxldGVDYXJkKGxvdmVsYWNlLmNvbmZpZywgcGF0aCkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBhbGVydChgRGVsZXRpbmcgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICB9XG59XG4iLCIvLyBodWktdmlldyBkZXBlbmRlbmNpZXMgZm9yIHdoZW4gaW4gZWRpdCBtb2RlLlxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9odWktY2FyZC1vcHRpb25zXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUEzQkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFTQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7O0FBSUE7QUFDQTs7Ozs7O0FBUUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBL0lBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9