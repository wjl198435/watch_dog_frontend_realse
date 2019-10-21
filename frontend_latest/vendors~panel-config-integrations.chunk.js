(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-integrations"],{

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

/***/ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.inline {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      }

      .layout.horizontal {
        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      }

      .layout.vertical {
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }

      .layout.wrap {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        -ms-flex-wrap: nowrap;
        -webkit-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      }

      .flex-none {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .layout.horizontal-reverse {
        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .layout.end {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      }

      .layout.baseline {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      }

      .layout.end-justified {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      }

      .layout.around-justified {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      }

      .layout.justified {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      }

      .self-center {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      }

      .self-end {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      }

      .self-stretch {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      }

      .self-baseline {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      }

      .layout.end-aligned {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      }

      .layout.center-aligned {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      }

      .layout.between-aligned {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      }

      .layout.around-aligned {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      }

      .flex-3 {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      }

      .flex-4 {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      }

      .flex-5 {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      }

      .flex-6 {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      }

      .flex-7 {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      }

      .flex-8 {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      }

      .flex-9 {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      }

      .flex-10 {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      }

      .flex-11 {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      }

      .flex-12 {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctaW50ZWdyYXRpb25zLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtZmFiL213Yy1mYWItYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1mYWIvbXdjLWZhYi1jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtZmFiL213Yy1mYWIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fZGVjb3JhdGUgfSBmcm9tIFwidHNsaWJcIjtcbi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGNsYXNzTWFwLCBodG1sLCBMaXRFbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgcmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5leHBvcnQgY2xhc3MgRmFiQmFzZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLm1pbmkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5leGl0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV4dGVuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0ljb25BdEVuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmljb24gPSAnJztcbiAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgIH1cbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicsIGRlbGVnYXRlc0ZvY3VzOiB0cnVlIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAnbWRjLWZhYi0tbWluaSc6IHRoaXMubWluaSxcbiAgICAgICAgICAgICdtZGMtZmFiLS1leGl0ZWQnOiB0aGlzLmV4aXRlZCxcbiAgICAgICAgICAgICdtZGMtZmFiLS1leHRlbmRlZCc6IHRoaXMuZXh0ZW5kZWQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHNob3dMYWJlbCA9IHRoaXMubGFiZWwgIT09ICcnICYmIHRoaXMuZXh0ZW5kZWQ7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxidXR0b25cbiAgICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICAgIGNsYXNzPVwibWRjLWZhYiAke2NsYXNzTWFwKGNsYXNzZXMpfVwiXG4gICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCI+XG4gICAgICAgICR7c2hvd0xhYmVsICYmIHRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiAnJ31cbiAgICAgICAgJHt0aGlzLmljb24gPyBodG1sIGBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kYy1mYWJfX2ljb25cIj4ke3RoaXMuaWNvbn08L3NwYW4+YCA6XG4gICAgICAgICAgICAnJ31cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiAnJ31cbiAgICAgIDwvYnV0dG9uPmA7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJtaW5pXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIEZhYkJhc2UucHJvdG90eXBlLCBcImV4aXRlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJleHRlbmRlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJzaG93SWNvbkF0RW5kXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJpY29uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSgpXG5dLCBGYWJCYXNlLnByb3RvdHlwZSwgXCJsYWJlbFwiLCB2b2lkIDApO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLWZhYi1iYXNlLmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzIGAubWF0ZXJpYWwtaWNvbnN7Zm9udC1mYW1pbHk6dmFyKC0tbWRjLWljb24tZm9udCwgXCJNYXRlcmlhbCBJY29uc1wiKTtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC1zaXplOnZhcigtLW1kYy1pY29uLXNpemUsIDI0cHgpO2xpbmUtaGVpZ2h0OjE7bGV0dGVyLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2hpdGUtc3BhY2U6bm93cmFwO3dvcmQtd3JhcDpub3JtYWw7ZGlyZWN0aW9uOmx0cjstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO3RleHQtcmVuZGVyaW5nOm9wdGltaXplTGVnaWJpbGl0eTstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7Zm9udC1mZWF0dXJlLXNldHRpbmdzOlwibGlnYVwifS5tZGMtZmFie2JveC1zaGFkb3c6MHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLDAsMCwuMTIpO2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmU7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjU2cHg7aGVpZ2h0OjU2cHg7cGFkZGluZzowO2JvcmRlcjpub25lO2ZpbGw6Y3VycmVudENvbG9yO3RleHQtZGVjb3JhdGlvbjpub25lO2N1cnNvcjpwb2ludGVyO3VzZXItc2VsZWN0Om5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246Ym94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLG9wYWNpdHkgMTVtcyBsaW5lYXIgMzBtcyx0cmFuc2Zvcm0gMjcwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO2JhY2tncm91bmQtY29sb3I6IzAxODc4Njtjb2xvcjojZmZmO2NvbG9yOnZhcigtLW1kYy10aGVtZS1vbi1zZWNvbmRhcnksICNmZmYpfS5tZGMtZmFiOm5vdCgubWRjLWZhYi0tZXh0ZW5kZWQpe2JvcmRlci1yYWRpdXM6NTAlfS5tZGMtZmFiOjotbW96LWZvY3VzLWlubmVye3BhZGRpbmc6MDtib3JkZXI6MH0ubWRjLWZhYjpob3ZlciwubWRjLWZhYjpmb2N1c3tib3gtc2hhZG93OjBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWRjLWZhYjphY3RpdmV7Ym94LXNoYWRvdzowcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZGMtZmFiOmFjdGl2ZSwubWRjLWZhYjpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kYy1mYWI6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9Lm1kYy1mYWI+c3Zne3dpZHRoOjEwMCV9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1mYWJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX19Lm1kYy1mYWIgLm1kYy1mYWJfX2ljb257d2lkdGg6MjRweDtoZWlnaHQ6MjRweDtmb250LXNpemU6MjRweH0ubWRjLWZhYi0tbWluaXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4fS5tZGMtZmFiLS1leHRlbmRlZHtmb250LWZhbWlseTpSb2JvdG8sIHNhbnMtc2VyaWY7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Zm9udC1zaXplOi44NzVyZW07bGluZS1oZWlnaHQ6Mi4yNXJlbTtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6LjA4OTI4NTcxNDNlbTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7Ym9yZGVyLXJhZGl1czoyNHB4O3BhZGRpbmc6MCAyMHB4O3dpZHRoOmF1dG87bWF4LXdpZHRoOjEwMCU7aGVpZ2h0OjQ4cHh9Lm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19pY29ue21hcmdpbi1sZWZ0Oi04cHg7bWFyZ2luLXJpZ2h0OjEycHh9W2Rpcj1ydGxdIC5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9faWNvbiwubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2ljb25bZGlyPXJ0bF17bWFyZ2luLWxlZnQ6MTJweDttYXJnaW4tcmlnaHQ6LThweH0ubWRjLWZhYi0tZXh0ZW5kZWQgLm1kYy1mYWJfX2xhYmVsKy5tZGMtZmFiX19pY29ue21hcmdpbi1sZWZ0OjEycHg7bWFyZ2luLXJpZ2h0Oi04cHh9W2Rpcj1ydGxdIC5tZGMtZmFiLS1leHRlbmRlZCAubWRjLWZhYl9fbGFiZWwrLm1kYy1mYWJfX2ljb24sLm1kYy1mYWItLWV4dGVuZGVkIC5tZGMtZmFiX19sYWJlbCsubWRjLWZhYl9faWNvbltkaXI9cnRsXXttYXJnaW4tbGVmdDotOHB4O21hcmdpbi1yaWdodDoxMnB4fS5tZGMtZmFiX19sYWJlbHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW59Lm1kYy1mYWJfX2ljb257dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTgwbXMgOTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtmaWxsOmN1cnJlbnRDb2xvcjt3aWxsLWNoYW5nZTp0cmFuc2Zvcm19Lm1kYy1mYWIgLm1kYy1mYWJfX2ljb257ZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWRjLWZhYi0tZXhpdGVke3RyYW5zZm9ybTpzY2FsZSgwKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyIDE1MG1zLHRyYW5zZm9ybSAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSl9Lm1kYy1mYWItLWV4aXRlZCAubWRjLWZhYl9faWNvbnt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMTM1bXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpfUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1yYWRpdXMtaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCwgMCkpIHNjYWxlKDEpfXRve3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6MH10b3tvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dHtmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX10b3tvcGFjaXR5OjB9fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVney0tbWRjLXJpcHBsZS1zdXJmYWNlLXRlc3QtZWRnZS12YXI6IDFweCBzb2xpZCAjMDAwO3Zpc2liaWxpdHk6aGlkZGVufS5tZGMtcmlwcGxlLXN1cmZhY2UtLXRlc3QtZWRnZS12YXItYnVnOjpiZWZvcmV7Ym9yZGVyOnZhcigtLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyKX0ubWRjLWZhYnstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfS5tZGMtZmFiOjpiZWZvcmUsLm1kYy1mYWI6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLWZhYjo6YmVmb3Jle3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3otaW5kZXg6MX0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgMCk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIDApfS5tZGMtZmFiLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctcmFkaXVzLWluIDIyNW1zIGZvcndhcmRzLG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzfS5tZGMtZmFiLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLWZhYjo6YmVmb3JlLC5tZGMtZmFiOjphZnRlcnt0b3A6Y2FsYyg1MCUgLSAxMDAlKTtsZWZ0OmNhbGMoNTAlIC0gMTAwJSk7d2lkdGg6MjAwJTtoZWlnaHQ6MjAwJX0ubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtZmFiOjpiZWZvcmUsLm1kYy1mYWI6OmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmZn1Ac3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOiBhdXRvKXsubWRjLWZhYjo6YmVmb3JlLC5tZGMtZmFiOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1vbi1zZWNvbmRhcnksICNmZmYpfX0ubWRjLWZhYjpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA4fS5tZGMtZmFiOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSwubWRjLWZhYi5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMjR9Lm1kYy1mYWI6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLWZhYjpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjI0fS5tZGMtZmFiLm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMjR9Omhvc3R7b3V0bGluZTpub25lfWA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1td2MtZmFiLWNzcy5qcy5tYXAiLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBGYWJCYXNlIH0gZnJvbSAnLi9td2MtZmFiLWJhc2UuanMnO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICcuL213Yy1mYWItY3NzLmpzJztcbmxldCBGYWIgPSBjbGFzcyBGYWIgZXh0ZW5kcyBGYWJCYXNlIHtcbn07XG5GYWIuc3R5bGVzID0gc3R5bGU7XG5GYWIgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21FbGVtZW50KCdtd2MtZmFiJylcbl0sIEZhYik7XG5leHBvcnQgeyBGYWIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1mYWIuanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5BIHNldCBvZiBsYXlvdXQgY2xhc3NlcyB0aGF0IGxldCB5b3Ugc3BlY2lmeSBsYXlvdXQgcHJvcGVydGllcyBkaXJlY3RseSBpblxubWFya3VwLiBZb3UgbXVzdCBpbmNsdWRlIHRoaXMgZmlsZSBpbiBldmVyeSBlbGVtZW50IHRoYXQgbmVlZHMgdG8gdXNlIHRoZW0uXG5cblNhbXBsZSB1c2U6XG5cbiAgICBpbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzLmpzJztcblxuICAgIGNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC50ZXN0IHsgd2lkdGg6IDEwMHB4OyB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCBob3Jpem9udGFsIGNlbnRlci1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RcIj5ob3Jpem9udGFsIGxheW91dCBjZW50ZXIgYWxpZ25tZW50PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG5cblRoZSBmb2xsb3dpbmcgaW1wb3J0cyBhcmUgYXZhaWxhYmxlOlxuIC0gaXJvbi1mbGV4XG4gLSBpcm9uLWZsZXgtcmV2ZXJzZVxuIC0gaXJvbi1mbGV4LWFsaWdubWVudFxuIC0gaXJvbi1mbGV4LWZhY3RvcnNcbiAtIGlyb24tcG9zaXRpb25pbmdcbiovXG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbi8qIE1vc3QgY29tbW9uIHVzZWQgZmxleCBzdHlsZXMqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXhcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbCxcbiAgICAgIC5sYXlvdXQudmVydGljYWwge1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmlubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtZmxleDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbCB7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQudmVydGljYWwge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LndyYXAge1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lm5vLXdyYXAge1xuICAgICAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlcixcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXItanVzdGlmaWVkLFxuICAgICAgLmxheW91dC5jZW50ZXItY2VudGVyIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgge1xuICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC1hdXRvIHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEgMSBhdXRvO1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cblxuICAgICAgLmZsZXgtbm9uZSB7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbi8qIEJhc2ljIGZsZXhib3ggcmV2ZXJzZSBzdHlsZXMgKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4LXJldmVyc2VcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbC1yZXZlcnNlLFxuICAgICAgLmxheW91dC52ZXJ0aWNhbC1yZXZlcnNlIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5ob3Jpem9udGFsLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LnZlcnRpY2FsLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LndyYXAtcmV2ZXJzZSB7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbi8qIEZsZXhib3ggYWxpZ25tZW50ICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1hbGlnbm1lbnRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC8qKlxuICAgICAgICogQWxpZ25tZW50IGluIGNyb3NzIGF4aXMuXG4gICAgICAgKi9cbiAgICAgIC5sYXlvdXQuc3RhcnQge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlcixcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmJhc2VsaW5lIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFsaWdubWVudCBpbiBtYWluIGF4aXMuXG4gICAgICAgKi9cbiAgICAgIC5sYXlvdXQuc3RhcnQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWp1c3RpZmllZCxcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kLWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmFyb3VuZC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNlbGYgYWxpZ25tZW50LlxuICAgICAgICovXG4gICAgICAuc2VsZi1zdGFydCB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLWNlbnRlciB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLWVuZCB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWxmLXN0cmV0Y2gge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1iYXNlbGluZSB7XG4gICAgICAgIC1tcy1hbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogbXVsdGktbGluZSBhbGlnbm1lbnQgaW4gbWFpbiBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0LWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IHN0YXJ0OyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBlbmQ7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5iZXR3ZWVuLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGp1c3RpZnk7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYXJvdW5kLWFsaWduZWQge1xuICAgICAgICAtbXMtZmxleC1saW5lLXBhY2s6IGRpc3RyaWJ1dGU7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbi8qIE5vbi1mbGV4Ym94IHBvc2l0aW9uaW5nIGhlbHBlciBzdHlsZXMgKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4LWZhY3RvcnNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIC5mbGV4LFxuICAgICAgLmZsZXgtMSB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgMC4wMDAwMDAwMDFweDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTIge1xuICAgICAgICAtbXMtZmxleDogMjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAyO1xuICAgICAgICBmbGV4OiAyO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0zIHtcbiAgICAgICAgLW1zLWZsZXg6IDM7XG4gICAgICAgIC13ZWJraXQtZmxleDogMztcbiAgICAgICAgZmxleDogMztcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNCB7XG4gICAgICAgIC1tcy1mbGV4OiA0O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDQ7XG4gICAgICAgIGZsZXg6IDQ7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTUge1xuICAgICAgICAtbXMtZmxleDogNTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA1O1xuICAgICAgICBmbGV4OiA1O1xuICAgICAgfVxuXG4gICAgICAuZmxleC02IHtcbiAgICAgICAgLW1zLWZsZXg6IDY7XG4gICAgICAgIC13ZWJraXQtZmxleDogNjtcbiAgICAgICAgZmxleDogNjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNyB7XG4gICAgICAgIC1tcy1mbGV4OiA3O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDc7XG4gICAgICAgIGZsZXg6IDc7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTgge1xuICAgICAgICAtbXMtZmxleDogODtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA4O1xuICAgICAgICBmbGV4OiA4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC05IHtcbiAgICAgICAgLW1zLWZsZXg6IDk7XG4gICAgICAgIC13ZWJraXQtZmxleDogOTtcbiAgICAgICAgZmxleDogOTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTAge1xuICAgICAgICAtbXMtZmxleDogMTA7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTA7XG4gICAgICAgIGZsZXg6IDEwO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMSB7XG4gICAgICAgIC1tcy1mbGV4OiAxMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMTtcbiAgICAgICAgZmxleDogMTE7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTEyIHtcbiAgICAgICAgLW1zLWZsZXg6IDEyO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEyO1xuICAgICAgICBmbGV4OiAxMjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLXBvc2l0aW9uaW5nXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5pbnZpc2libGUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnJlbGF0aXZlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIGJvZHkuZnVsbGJsZWVkIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIH1cblxuICAgICAgLyogZml4ZWQgcG9zaXRpb24gKi9cbiAgICAgIC5maXhlZC1ib3R0b20sXG4gICAgICAuZml4ZWQtbGVmdCxcbiAgICAgIC5maXhlZC1yaWdodCxcbiAgICAgIC5maXhlZC10b3Age1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC10b3Age1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtcmlnaHQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5maXhlZC1ib3R0b20ge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtbGVmdCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9