(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-lovelace"],{

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-base.js ***!
  \**************************************************************/
/*! exports provided: RippleBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleBase", function() { return RippleBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");

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


class RippleBase extends _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.interactionNode = this;
    }
    connectedCallback() {
        if (this.interactionNode === this) {
            const parent = this.parentNode;
            if (parent instanceof HTMLElement) {
                this.interactionNode = parent;
            }
        }
        super.connectedCallback();
    }
    // TODO(sorvell) #css: sizing.
    render() {
        const classes = {
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--accent': this.accent,
        };
        const { disabled, unbounded, active, interactionNode } = this;
        const rippleOptions = { disabled, unbounded, interactionNode };
        if (active !== undefined) {
            rippleOptions.active = active;
        }
        return _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div .ripple="${Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])(rippleOptions)}"
          class="mdc-ripple-surface ${Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes)}"></div>`;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], RippleBase.prototype, "primary", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], RippleBase.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], RippleBase.prototype, "accent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], RippleBase.prototype, "unbounded", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], RippleBase.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ attribute: false })
], RippleBase.prototype, "interactionNode", void 0);
//# sourceMappingURL=mwc-ripple-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple-css.js ***!
  \*************************************************************/
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

const style = _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}`;
//# sourceMappingURL=mwc-ripple-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-ripple/mwc-ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-ripple/mwc-ripple.js ***!
  \*********************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-ripple-base.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-base.js");
/* harmony import */ var _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-ripple-css.js */ "./node_modules/@material/mwc-ripple/mwc-ripple-css.js");

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



let Ripple = class Ripple extends _mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"] {
};
Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')
], Ripple);

//# sourceMappingURL=mwc-ripple.js.map

/***/ }),

/***/ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_scroll_effects_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-scroll-effects-behavior.js */ "./node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects-behavior.js");
/* harmony import */ var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./node_modules/@polymer/app-layout/helpers/helpers.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/



/**
 * Toggles the shadow property in app-header when content is scrolled to create
 * a sense of depth between the element and the content underneath.
 */
Object(_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_1__["registerEffect"])('waterfall', {
  /**
   *  @this Polymer.AppLayout.ElementWithBackground
   */
  run: function run() {
    this.shadow = this.isOnScreen() && this.isContentBelow();
  }
});


/***/ }),

/***/ "./node_modules/@thomasloven/round-slider/src/main.js":
/*!************************************************************!*\
  !*** ./node_modules/@thomasloven/round-slider/src/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


class RoundSlider extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {

  static get properties() {
    return {
      value: {type: Number},
      high: {type: Number},
      low: {type: Number},
      min: {type: Number},
      max: {type: Number},
      step: {type: Number},
      radius: {type: Number},
      startAngle: {type: Number},
      arcLength: {type: Number},
      handleSize: {type: Number},
      disabled: {type: Boolean},
      dragging: {type: Boolean, reflect: true},
    }
  }

  constructor() {
    super();
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.radius = 80;
    this.startAngle = 135;
    this.arcLength = 270;
    this.handleSize = 6;
    this.disabled = false;
    this.dragging = false;
  }

  get _r0() {
    return this.radius;
  }
  get _rArc() {
    return this._r0 - this.handleSize*1.5;
  }
  get _start() {
    return this.startAngle*Math.PI/180;
  }
  get _len() {
    return Math.min(this.arcLength*Math.PI/180, 2*Math.PI-0.01);
  }
  get _end() {
    return this._start + this._len;
  }

  get _isDisabled() {
    return this.disabled || (this.value === undefined && this.high === undefined && this.low === undefined);
  }

  _angleInside(angle) {
    let a = (this.startAngle + this.arcLength/2 - angle + 180 + 360) % 360 - 180;
    return (a < this.arcLength/2 && a > -this.arcLength/2);
  }

  _getBoundaries() {
    const margin = this.handleSize * 1.5;


    let up = this._r0;
    if(!this._angleInside(270))
      up =  Math.max(
        -this._rArc*Math.sin(this._start) + margin,
        -this._rArc*Math.sin(this._end) + margin
      );

    let down = this._r0;
    if(!this._angleInside(90))
      down = Math.max(
        this._rArc*Math.sin(this._start) + margin,
        this._rArc*Math.sin(this._end) + margin
      );

    let left = this._r0;
    if(!this._angleInside(180))
      left = Math.max(
        -this._rArc*Math.cos(this._start) + margin,
        -this._rArc*Math.cos(this._end) + margin
      );

    let right = this._r0;
    if(!this._angleInside(0))
      right = Math.max(
        this._rArc*Math.cos(this._start) + margin,
        this._rArc*Math.cos(this._end) + margin
      );

    return {
      up, down, left, right,
      width: left + right,
      height: up + down,
    }
  }

  dragStart(ev) {
    if(!ev.target.classList.contains("handle")) return;

    let handle = ev.target;
    if(handle.classList.contains("overflow"))
      handle = handle.nextElementSibling
    handle.setAttribute('r', this.handleSize*1.5);

    const min = handle.id === "high" ? this.low : this.min;
    const max = handle.id === "low" ? this.high : this.max;
    this._rotation = { handle, min, max }
    this.dragging = true;
  }

  dragEnd(ev) {
    if(!this._rotation) return;

    const handle = this._rotation.handle;
    handle.setAttribute('r', this.handleSize);

    this._rotation = false;
    this.dragging = false;

    let event = new CustomEvent('value-changed', {
      detail: {
        [handle.id] : this[handle.id],
      }
    });
    this.dispatchEvent(event);

    if(this.low && this.low >= 0.99*this.max)
      this._reverseOrder = true;
    else
      this._reverseOrder = false;
  }

  drag(ev) {
    if(!this._rotation) return;

    ev.preventDefault();

    const mouseX = (ev.type === "touchmove") ? ev.touches[0].clientX : ev.clientX;
    const mouseY = (ev.type === "touchmove") ? ev.touches[0].clientY : ev.clientY;

    const rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();
    const boundaries = this._getBoundaries();
    const x = mouseX - (rect.x + boundaries.left);
    const y = mouseY - (rect.y + boundaries.up);

    const angle = (Math.atan2(y,x) - this._start + 2*Math.PI) % (2*Math.PI);

    const pos = Math.round((angle/this._len*(this.max - this.min) + this.min)/this.step)*this.step;
    if(pos < this._rotation.min || pos > this._rotation.max) return;

    const handle = this._rotation.handle;
    this[handle.id] = pos;

    let event = new CustomEvent('value-changing', {
      detail: {
        [handle.id] : pos,
      }
    });
    this.dispatchEvent(event);
  }

  firstUpdated() {
    document.addEventListener('mouseup', this.dragEnd.bind(this));
    document.addEventListener('touchend', this.dragEnd.bind(this), {passive: false});
    document.addEventListener('mousemove', this.drag.bind(this));
    document.addEventListener('touchmove', this.drag.bind(this), {passive: false});
  }


  _renderArc(start, end) {
    const r = this._rArc;
    return `
      M ${this._r0 + r*Math.cos(start)} ${this._r0 + r*Math.sin(start)}
      A ${r} ${r},
        0,
        ${(end-start) > Math.PI ? "1" : "0"} 1,
        ${this._r0+r*Math.cos(end)} ${this._r0+r*Math.sin(end)}
    `;
  }

  _valueFrac(val) {
    return (this[val]-this.min)/(this.max-this.min);
  }

  _renderHandle(id) {
    const theta = this._start + this._valueFrac(id)*this._len;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
        <circle
          id=${id}
          class="handle ${id} overflow"
          cx=${ this._r0 + this._rArc*Math.cos(theta) }
          cy=${ this._r0 + this._rArc*Math.sin(theta) }
          r=${2*this.handleSize}
          style="fill: rgba(0,0,0,0);"
        ></circle>
        <circle
          id=${id}
          class="handle ${id}"
          cx=${ this._r0 + this._rArc*Math.cos(theta) }
          cy=${ this._r0 + this._rArc*Math.sin(theta) }
          r=${this.handleSize}
        ></circle>
      `
  };

  render() {
    let up, left, width, height;
    ({up, left, width, height} = this._getBoundaries());

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
    <div
      @mousedown=${this.dragStart}
      @touchstart=${this.dragStart}
      style="
         height: ${height}px;
         width: ${width}px;
       "
    >
      <svg
        xmln="http://www.w3.org/2000/svg"
        viewBox="${this._r0 - left} ${this._r0 - up} ${width} ${height}"
      >
        <g class="slider">
          <path
            class="path"
            d=${this._renderArc(this._start, this._end)}
          />
          ${ this._isDisabled
            ? ''
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
          <path
            class="bar"
            d=${this._renderArc(
              this._start+this._len*(this.low !== undefined
                ? this._valueFrac("low")
                : 0
              ),
              this._start+this._len*((this.high !== undefined)
                ? this._valueFrac("high")
                : this._valueFrac("value")
              )
            )}
          />
          `}
        </g>

        ${ this._isDisabled
          ? ''
          : lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"]`
          <g class="handles">
          ${ this.low !== undefined
            ? this._reverseOrder
              ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("high")} ${this._renderHandle("low")}`
              : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("low")} ${this._renderHandle("high")}`
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`${this._renderHandle("value")}`
          }
          </g>
          `}
      </svg>
    </div>
    `;
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      div {
        display: inline-block;
      }
      .slider {
        fill: none;
        stroke-width: var(--round-slider-path-width, 3);
        stroke-linecap: var(--round-slider-linecap, round);
      }
      .path {
        stroke: var(--round-slider-path-color, lightgray);
      }
      .bar {
        stroke: var(--round-slider-bar-color, deepskyblue);
      }
      .handles {
        fill: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));
      }
      .handles .low {
        fill: var(--round-slider-low-handle-color);
      }
      .handles .high {
        fill: var(--round-slider-high-handle-color);
      }
    `;
  }

}

customElements.define('round-slider', RoundSlider);


/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
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
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */
const styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */
const styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])((styleInfo) => (part) => {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || (part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"]) ||
        part.committer.name !== 'style' || part.committer.parts.length > 1) {
        throw new Error('The `styleMap` directive must be used in the style attribute ' +
            'and must be the only part in the attribute.');
    }
    const { committer } = part;
    const { style } = committer.element;
    // Handle static styles the first time we see a Part
    if (!styleMapCache.has(part)) {
        style.cssText = committer.strings.join(' ');
    }
    // Remove old properties that no longer exist in styleInfo
    const oldInfo = styleMapCache.get(part);
    for (const name in oldInfo) {
        if (!(name in styleInfo)) {
            if (name.indexOf('-') === -1) {
                // tslint:disable-next-line:no-any
                style[name] = null;
            }
            else {
                style.removeProperty(name);
            }
        }
    }
    // Add or update properties
    for (const name in styleInfo) {
        if (name.indexOf('-') === -1) {
            // tslint:disable-next-line:no-any
            style[name] = styleInfo[name];
        }
        else {
            style.setProperty(name, styleInfo[name]);
        }
    }
    styleMapCache.set(part, styleInfo);
});
//# sourceMappingURL=style-map.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLXJpcHBsZS9td2MtcmlwcGxlLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtcmlwcGxlL213Yy1yaXBwbGUtY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLXJpcHBsZS9td2MtcmlwcGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL3dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHRob21hc2xvdmVuL3JvdW5kLXNsaWRlci9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgY2xhc3NNYXAsIGh0bWwsIExpdEVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tICcuL3JpcHBsZS1kaXJlY3RpdmUuanMnO1xuZXhwb3J0IGNsYXNzIFJpcHBsZUJhc2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcmltYXJ5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjZW50ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudW5ib3VuZGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbk5vZGUgPSB0aGlzO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJhY3Rpb25Ob2RlID09PSB0aGlzKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIH1cbiAgICAvLyBUT0RPKHNvcnZlbGwpICNjc3M6IHNpemluZy5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5JzogdGhpcy5wcmltYXJ5LFxuICAgICAgICAgICAgJ21kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50JzogdGhpcy5hY2NlbnQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHsgZGlzYWJsZWQsIHVuYm91bmRlZCwgYWN0aXZlLCBpbnRlcmFjdGlvbk5vZGUgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHJpcHBsZU9wdGlvbnMgPSB7IGRpc2FibGVkLCB1bmJvdW5kZWQsIGludGVyYWN0aW9uTm9kZSB9O1xuICAgICAgICBpZiAoYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJpcHBsZU9wdGlvbnMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxkaXYgLnJpcHBsZT1cIiR7cmlwcGxlKHJpcHBsZU9wdGlvbnMpfVwiXG4gICAgICAgICAgY2xhc3M9XCJtZGMtcmlwcGxlLXN1cmZhY2UgJHtjbGFzc01hcChjbGFzc2VzKX1cIj48L2Rpdj5gO1xuICAgIH1cbn1cbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgUmlwcGxlQmFzZS5wcm90b3R5cGUsIFwicHJpbWFyeVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBSaXBwbGVCYXNlLnByb3RvdHlwZSwgXCJhY3RpdmVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgUmlwcGxlQmFzZS5wcm90b3R5cGUsIFwiYWNjZW50XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFJpcHBsZUJhc2UucHJvdG90eXBlLCBcInVuYm91bmRlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBSaXBwbGVCYXNlLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyBhdHRyaWJ1dGU6IGZhbHNlIH0pXG5dLCBSaXBwbGVCYXNlLnByb3RvdHlwZSwgXCJpbnRlcmFjdGlvbk5vZGVcIiwgdm9pZCAwKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1yaXBwbGUtYmFzZS5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmV4cG9ydCBjb25zdCBzdHlsZSA9IGNzcyBgQGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLXJhZGl1cy1pbntmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0LCAwKSkgc2NhbGUoMSl9dG97dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9fUBrZXlmcmFtZXMgbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTowfXRve29wYWNpdHk6dmFyKC0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5LCAwKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0e2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfXRve29wYWNpdHk6MH19Lm1kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWd7LS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcjogMXB4IHNvbGlkICMwMDA7dmlzaWJpbGl0eTpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZS0tdGVzdC1lZGdlLXZhci1idWc6OmJlZm9yZXtib3JkZXI6dmFyKC0tbWRjLXJpcHBsZS1zdXJmYWNlLXRlc3QtZWRnZS12YXIpfS5tZGMtcmlwcGxlLXN1cmZhY2V7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKTtwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOm5vbmU7b3ZlcmZsb3c6aGlkZGVufS5tZGMtcmlwcGxlLXN1cmZhY2U6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlOjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTtjb250ZW50OlwiXCJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3Jle3RyYW5zaXRpb246b3BhY2l0eSAxNW1zIGxpbmVhcixiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyO3otaW5kZXg6MX0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOjA7bGVmdDowO3RyYW5zZm9ybTpzY2FsZSgwKTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgMCk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIDApfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHN9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXQgMTUwbXM7dHJhbnNmb3JtOnRyYW5zbGF0ZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQsIDApKSBzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAwMH0ubWRjLXJpcHBsZS1zdXJmYWNlOmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2U6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDEwMCUpO2xlZnQ6Y2FsYyg1MCUgLSAxMDAlKTt3aWR0aDoyMDAlO2hlaWdodDoyMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRde292ZXJmbG93OnZpc2libGV9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF06OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdLm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgY2FsYyg1MCUgLSA1MCUpKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgY2FsYyg1MCUgLSA1MCUpKTt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNjIwMGVlfUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1wcmltYXJ5LCAjNjIwMGVlKX19Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnkubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2fUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX19Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtcmlwcGxlLXN1cmZhY2V7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MH1gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLXJpcHBsZS1jc3MuanMubWFwIiwiaW1wb3J0IHsgX19kZWNvcmF0ZSB9IGZyb20gXCJ0c2xpYlwiO1xuLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgY3VzdG9tRWxlbWVudCB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuaW1wb3J0IHsgUmlwcGxlQmFzZSB9IGZyb20gJy4vbXdjLXJpcHBsZS1iYXNlLmpzJztcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnLi9td2MtcmlwcGxlLWNzcy5qcyc7XG5sZXQgUmlwcGxlID0gY2xhc3MgUmlwcGxlIGV4dGVuZHMgUmlwcGxlQmFzZSB7XG59O1xuUmlwcGxlLnN0eWxlcyA9IHN0eWxlO1xuUmlwcGxlID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnbXdjLXJpcHBsZScpXG5dLCBSaXBwbGUpO1xuZXhwb3J0IHsgUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1td2MtcmlwcGxlLmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi9hcHAtc2Nyb2xsLWVmZmVjdHMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge3JlZ2lzdGVyRWZmZWN0fSBmcm9tICcuLi8uLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuLyoqXG4gKiBUb2dnbGVzIHRoZSBzaGFkb3cgcHJvcGVydHkgaW4gYXBwLWhlYWRlciB3aGVuIGNvbnRlbnQgaXMgc2Nyb2xsZWQgdG8gY3JlYXRlXG4gKiBhIHNlbnNlIG9mIGRlcHRoIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHRoZSBjb250ZW50IHVuZGVybmVhdGguXG4gKi9cbnJlZ2lzdGVyRWZmZWN0KCd3YXRlcmZhbGwnLCB7XG4gIC8qKlxuICAgKiAgQHRoaXMgUG9seW1lci5BcHBMYXlvdXQuRWxlbWVudFdpdGhCYWNrZ3JvdW5kXG4gICAqL1xuICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuaXNPblNjcmVlbigpICYmIHRoaXMuaXNDb250ZW50QmVsb3coKTtcbiAgfVxufSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIHN2Zyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIFJvdW5kU2xpZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBoaWdoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGxvdzoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtaW46IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbWF4OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN0ZXA6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgcmFkaXVzOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIHN0YXJ0QW5nbGU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgYXJjTGVuZ3RoOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGhhbmRsZVNpemU6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgZGlzYWJsZWQ6IHt0eXBlOiBCb29sZWFufSxcbiAgICAgIGRyYWdnaW5nOiB7dHlwZTogQm9vbGVhbiwgcmVmbGVjdDogdHJ1ZX0sXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm1pbiA9IDA7XG4gICAgdGhpcy5tYXggPSAxMDA7XG4gICAgdGhpcy5zdGVwID0gMTtcbiAgICB0aGlzLnJhZGl1cyA9IDgwO1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IDEzNTtcbiAgICB0aGlzLmFyY0xlbmd0aCA9IDI3MDtcbiAgICB0aGlzLmhhbmRsZVNpemUgPSA2O1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBnZXQgX3IwKCkge1xuICAgIHJldHVybiB0aGlzLnJhZGl1cztcbiAgfVxuICBnZXQgX3JBcmMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3IwIC0gdGhpcy5oYW5kbGVTaXplKjEuNTtcbiAgfVxuICBnZXQgX3N0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0QW5nbGUqTWF0aC5QSS8xODA7XG4gIH1cbiAgZ2V0IF9sZW4oKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMuYXJjTGVuZ3RoKk1hdGguUEkvMTgwLCAyKk1hdGguUEktMC4wMSk7XG4gIH1cbiAgZ2V0IF9lbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0ICsgdGhpcy5fbGVuO1xuICB9XG5cbiAgZ2V0IF9pc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkIHx8ICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcy5oaWdoID09PSB1bmRlZmluZWQgJiYgdGhpcy5sb3cgPT09IHVuZGVmaW5lZCk7XG4gIH1cblxuICBfYW5nbGVJbnNpZGUoYW5nbGUpIHtcbiAgICBsZXQgYSA9ICh0aGlzLnN0YXJ0QW5nbGUgKyB0aGlzLmFyY0xlbmd0aC8yIC0gYW5nbGUgKyAxODAgKyAzNjApICUgMzYwIC0gMTgwO1xuICAgIHJldHVybiAoYSA8IHRoaXMuYXJjTGVuZ3RoLzIgJiYgYSA+IC10aGlzLmFyY0xlbmd0aC8yKTtcbiAgfVxuXG4gIF9nZXRCb3VuZGFyaWVzKCkge1xuICAgIGNvbnN0IG1hcmdpbiA9IHRoaXMuaGFuZGxlU2l6ZSAqIDEuNTtcblxuXG4gICAgbGV0IHVwID0gdGhpcy5fcjA7XG4gICAgaWYoIXRoaXMuX2FuZ2xlSW5zaWRlKDI3MCkpXG4gICAgICB1cCA9ICBNYXRoLm1heChcbiAgICAgICAgLXRoaXMuX3JBcmMqTWF0aC5zaW4odGhpcy5fc3RhcnQpICsgbWFyZ2luLFxuICAgICAgICAtdGhpcy5fckFyYypNYXRoLnNpbih0aGlzLl9lbmQpICsgbWFyZ2luXG4gICAgICApO1xuXG4gICAgbGV0IGRvd24gPSB0aGlzLl9yMDtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoOTApKVxuICAgICAgZG93biA9IE1hdGgubWF4KFxuICAgICAgICB0aGlzLl9yQXJjKk1hdGguc2luKHRoaXMuX3N0YXJ0KSArIG1hcmdpbixcbiAgICAgICAgdGhpcy5fckFyYypNYXRoLnNpbih0aGlzLl9lbmQpICsgbWFyZ2luXG4gICAgICApO1xuXG4gICAgbGV0IGxlZnQgPSB0aGlzLl9yMDtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMTgwKSlcbiAgICAgIGxlZnQgPSBNYXRoLm1heChcbiAgICAgICAgLXRoaXMuX3JBcmMqTWF0aC5jb3ModGhpcy5fc3RhcnQpICsgbWFyZ2luLFxuICAgICAgICAtdGhpcy5fckFyYypNYXRoLmNvcyh0aGlzLl9lbmQpICsgbWFyZ2luXG4gICAgICApO1xuXG4gICAgbGV0IHJpZ2h0ID0gdGhpcy5fcjA7XG4gICAgaWYoIXRoaXMuX2FuZ2xlSW5zaWRlKDApKVxuICAgICAgcmlnaHQgPSBNYXRoLm1heChcbiAgICAgICAgdGhpcy5fckFyYypNYXRoLmNvcyh0aGlzLl9zdGFydCkgKyBtYXJnaW4sXG4gICAgICAgIHRoaXMuX3JBcmMqTWF0aC5jb3ModGhpcy5fZW5kKSArIG1hcmdpblxuICAgICAgKTtcblxuICAgIHJldHVybiB7XG4gICAgICB1cCwgZG93biwgbGVmdCwgcmlnaHQsXG4gICAgICB3aWR0aDogbGVmdCArIHJpZ2h0LFxuICAgICAgaGVpZ2h0OiB1cCArIGRvd24sXG4gICAgfVxuICB9XG5cbiAgZHJhZ1N0YXJ0KGV2KSB7XG4gICAgaWYoIWV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoYW5kbGVcIikpIHJldHVybjtcblxuICAgIGxldCBoYW5kbGUgPSBldi50YXJnZXQ7XG4gICAgaWYoaGFuZGxlLmNsYXNzTGlzdC5jb250YWlucyhcIm92ZXJmbG93XCIpKVxuICAgICAgaGFuZGxlID0gaGFuZGxlLm5leHRFbGVtZW50U2libGluZ1xuICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3InLCB0aGlzLmhhbmRsZVNpemUqMS41KTtcblxuICAgIGNvbnN0IG1pbiA9IGhhbmRsZS5pZCA9PT0gXCJoaWdoXCIgPyB0aGlzLmxvdyA6IHRoaXMubWluO1xuICAgIGNvbnN0IG1heCA9IGhhbmRsZS5pZCA9PT0gXCJsb3dcIiA/IHRoaXMuaGlnaCA6IHRoaXMubWF4O1xuICAgIHRoaXMuX3JvdGF0aW9uID0geyBoYW5kbGUsIG1pbiwgbWF4IH1cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdFbmQoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICBoYW5kbGUuc2V0QXR0cmlidXRlKCdyJywgdGhpcy5oYW5kbGVTaXplKTtcblxuICAgIHRoaXMuX3JvdGF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2VkJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIFtoYW5kbGUuaWRdIDogdGhpc1toYW5kbGUuaWRdLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICBpZih0aGlzLmxvdyAmJiB0aGlzLmxvdyA+PSAwLjk5KnRoaXMubWF4KVxuICAgICAgdGhpcy5fcmV2ZXJzZU9yZGVyID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9yZXZlcnNlT3JkZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGRyYWcoZXYpIHtcbiAgICBpZighdGhpcy5fcm90YXRpb24pIHJldHVybjtcblxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBtb3VzZVggPSAoZXYudHlwZSA9PT0gXCJ0b3VjaG1vdmVcIikgPyBldi50b3VjaGVzWzBdLmNsaWVudFggOiBldi5jbGllbnRYO1xuICAgIGNvbnN0IG1vdXNlWSA9IChldi50eXBlID09PSBcInRvdWNobW92ZVwiKSA/IGV2LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2LmNsaWVudFk7XG5cbiAgICBjb25zdCByZWN0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm91bmRhcmllcyA9IHRoaXMuX2dldEJvdW5kYXJpZXMoKTtcbiAgICBjb25zdCB4ID0gbW91c2VYIC0gKHJlY3QueCArIGJvdW5kYXJpZXMubGVmdCk7XG4gICAgY29uc3QgeSA9IG1vdXNlWSAtIChyZWN0LnkgKyBib3VuZGFyaWVzLnVwKTtcblxuICAgIGNvbnN0IGFuZ2xlID0gKE1hdGguYXRhbjIoeSx4KSAtIHRoaXMuX3N0YXJ0ICsgMipNYXRoLlBJKSAlICgyKk1hdGguUEkpO1xuXG4gICAgY29uc3QgcG9zID0gTWF0aC5yb3VuZCgoYW5nbGUvdGhpcy5fbGVuKih0aGlzLm1heCAtIHRoaXMubWluKSArIHRoaXMubWluKS90aGlzLnN0ZXApKnRoaXMuc3RlcDtcbiAgICBpZihwb3MgPCB0aGlzLl9yb3RhdGlvbi5taW4gfHwgcG9zID4gdGhpcy5fcm90YXRpb24ubWF4KSByZXR1cm47XG5cbiAgICBjb25zdCBoYW5kbGUgPSB0aGlzLl9yb3RhdGlvbi5oYW5kbGU7XG4gICAgdGhpc1toYW5kbGUuaWRdID0gcG9zO1xuXG4gICAgbGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1jaGFuZ2luZycsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICBbaGFuZGxlLmlkXSA6IHBvcyxcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKSwge3Bhc3NpdmU6IGZhbHNlfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnLmJpbmQodGhpcykpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuZHJhZy5iaW5kKHRoaXMpLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgfVxuXG5cbiAgX3JlbmRlckFyYyhzdGFydCwgZW5kKSB7XG4gICAgY29uc3QgciA9IHRoaXMuX3JBcmM7XG4gICAgcmV0dXJuIGBcbiAgICAgIE0gJHt0aGlzLl9yMCArIHIqTWF0aC5jb3Moc3RhcnQpfSAke3RoaXMuX3IwICsgcipNYXRoLnNpbihzdGFydCl9XG4gICAgICBBICR7cn0gJHtyfSxcbiAgICAgICAgMCxcbiAgICAgICAgJHsoZW5kLXN0YXJ0KSA+IE1hdGguUEkgPyBcIjFcIiA6IFwiMFwifSAxLFxuICAgICAgICAke3RoaXMuX3IwK3IqTWF0aC5jb3MoZW5kKX0gJHt0aGlzLl9yMCtyKk1hdGguc2luKGVuZCl9XG4gICAgYDtcbiAgfVxuXG4gIF92YWx1ZUZyYWModmFsKSB7XG4gICAgcmV0dXJuICh0aGlzW3ZhbF0tdGhpcy5taW4pLyh0aGlzLm1heC10aGlzLm1pbik7XG4gIH1cblxuICBfcmVuZGVySGFuZGxlKGlkKSB7XG4gICAgY29uc3QgdGhldGEgPSB0aGlzLl9zdGFydCArIHRoaXMuX3ZhbHVlRnJhYyhpZCkqdGhpcy5fbGVuO1xuICAgIHJldHVybiBzdmdgXG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBpZD0ke2lkfVxuICAgICAgICAgIGNsYXNzPVwiaGFuZGxlICR7aWR9IG92ZXJmbG93XCJcbiAgICAgICAgICBjeD0keyB0aGlzLl9yMCArIHRoaXMuX3JBcmMqTWF0aC5jb3ModGhldGEpIH1cbiAgICAgICAgICBjeT0keyB0aGlzLl9yMCArIHRoaXMuX3JBcmMqTWF0aC5zaW4odGhldGEpIH1cbiAgICAgICAgICByPSR7Mip0aGlzLmhhbmRsZVNpemV9XG4gICAgICAgICAgc3R5bGU9XCJmaWxsOiByZ2JhKDAsMCwwLDApO1wiXG4gICAgICAgID48L2NpcmNsZT5cbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGlkPSR7aWR9XG4gICAgICAgICAgY2xhc3M9XCJoYW5kbGUgJHtpZH1cIlxuICAgICAgICAgIGN4PSR7IHRoaXMuX3IwICsgdGhpcy5fckFyYypNYXRoLmNvcyh0aGV0YSkgfVxuICAgICAgICAgIGN5PSR7IHRoaXMuX3IwICsgdGhpcy5fckFyYypNYXRoLnNpbih0aGV0YSkgfVxuICAgICAgICAgIHI9JHt0aGlzLmhhbmRsZVNpemV9XG4gICAgICAgID48L2NpcmNsZT5cbiAgICAgIGBcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHVwLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0O1xuICAgICh7dXAsIGxlZnQsIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5fZ2V0Qm91bmRhcmllcygpKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgIDxkaXZcbiAgICAgIEBtb3VzZWRvd249JHt0aGlzLmRyYWdTdGFydH1cbiAgICAgIEB0b3VjaHN0YXJ0PSR7dGhpcy5kcmFnU3RhcnR9XG4gICAgICBzdHlsZT1cIlxuICAgICAgICAgaGVpZ2h0OiAke2hlaWdodH1weDtcbiAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgIFwiXG4gICAgPlxuICAgICAgPHN2Z1xuICAgICAgICB4bWxuPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB2aWV3Qm94PVwiJHt0aGlzLl9yMCAtIGxlZnR9ICR7dGhpcy5fcjAgLSB1cH0gJHt3aWR0aH0gJHtoZWlnaHR9XCJcbiAgICAgID5cbiAgICAgICAgPGcgY2xhc3M9XCJzbGlkZXJcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3M9XCJwYXRoXCJcbiAgICAgICAgICAgIGQ9JHt0aGlzLl9yZW5kZXJBcmModGhpcy5fc3RhcnQsIHRoaXMuX2VuZCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICAkeyB0aGlzLl9pc0Rpc2FibGVkXG4gICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICA6IHN2Z2BcbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3M9XCJiYXJcIlxuICAgICAgICAgICAgZD0ke3RoaXMuX3JlbmRlckFyYyhcbiAgICAgICAgICAgICAgdGhpcy5fc3RhcnQrdGhpcy5fbGVuKih0aGlzLmxvdyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyB0aGlzLl92YWx1ZUZyYWMoXCJsb3dcIilcbiAgICAgICAgICAgICAgICA6IDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgdGhpcy5fc3RhcnQrdGhpcy5fbGVuKigodGhpcy5oaWdoICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyB0aGlzLl92YWx1ZUZyYWMoXCJoaWdoXCIpXG4gICAgICAgICAgICAgICAgOiB0aGlzLl92YWx1ZUZyYWMoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9nPlxuXG4gICAgICAgICR7IHRoaXMuX2lzRGlzYWJsZWRcbiAgICAgICAgICA/ICcnXG4gICAgICAgICAgOiBzdmdgXG4gICAgICAgICAgPGcgY2xhc3M9XCJoYW5kbGVzXCI+XG4gICAgICAgICAgJHsgdGhpcy5sb3cgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0aGlzLl9yZXZlcnNlT3JkZXJcbiAgICAgICAgICAgICAgPyBodG1sYCR7dGhpcy5fcmVuZGVySGFuZGxlKFwiaGlnaFwiKX0gJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJsb3dcIil9YFxuICAgICAgICAgICAgICA6IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJsb3dcIil9ICR7dGhpcy5fcmVuZGVySGFuZGxlKFwiaGlnaFwiKX1gXG4gICAgICAgICAgICA6IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJ2YWx1ZVwiKX1gXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICBgfVxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuc2xpZGVyIHtcbiAgICAgICAgZmlsbDogbm9uZTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1yb3VuZC1zbGlkZXItcGF0aC13aWR0aCwgMyk7XG4gICAgICAgIHN0cm9rZS1saW5lY2FwOiB2YXIoLS1yb3VuZC1zbGlkZXItbGluZWNhcCwgcm91bmQpO1xuICAgICAgfVxuICAgICAgLnBhdGgge1xuICAgICAgICBzdHJva2U6IHZhcigtLXJvdW5kLXNsaWRlci1wYXRoLWNvbG9yLCBsaWdodGdyYXkpO1xuICAgICAgfVxuICAgICAgLmJhciB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLWJhci1jb2xvciwgZGVlcHNreWJsdWUpO1xuICAgICAgfVxuICAgICAgLmhhbmRsZXMge1xuICAgICAgICBmaWxsOiB2YXIoLS1yb3VuZC1zbGlkZXItaGFuZGxlLWNvbG9yLCB2YXIoLS1yb3VuZC1zbGlkZXItYmFyLWNvbG9yLCBkZWVwc2t5Ymx1ZSkpO1xuICAgICAgfVxuICAgICAgLmhhbmRsZXMgLmxvdyB7XG4gICAgICAgIGZpbGw6IHZhcigtLXJvdW5kLXNsaWRlci1sb3ctaGFuZGxlLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5oYW5kbGVzIC5oaWdoIHtcbiAgICAgICAgZmlsbDogdmFyKC0tcm91bmQtc2xpZGVyLWhpZ2gtaGFuZGxlLWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdyb3VuZC1zbGlkZXInLCBSb3VuZFNsaWRlcik7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuICogQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiAqIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuICovXG5pbXBvcnQgeyBBdHRyaWJ1dGVQYXJ0LCBkaXJlY3RpdmUsIFByb3BlcnR5UGFydCB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbi8qKlxuICogU3RvcmVzIHRoZSBTdHlsZUluZm8gb2JqZWN0IGFwcGxpZWQgdG8gYSBnaXZlbiBBdHRyaWJ1dGVQYXJ0LlxuICogVXNlZCB0byB1bnNldCBleGlzdGluZyB2YWx1ZXMgd2hlbiBhIG5ldyBTdHlsZUluZm8gb2JqZWN0IGlzIGFwcGxpZWQuXG4gKi9cbmNvbnN0IHN0eWxlTWFwQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0ZXMuIFByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIGRhc2hlcyAoYC1gKSBhcmUgYXNzdW1lZCB0byBiZSB2YWxpZCBDU1MgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGVcbiAqIGVsZW1lbnQncyBzdHlsZSBvYmplY3QgdXNpbmcgYHNldFByb3BlcnR5KClgLiBOYW1lcyB3aXRob3V0IGRhc2hlcyBhcmVcbiAqIGFzc3VtZWQgdG8gYmUgY2FtZWxDYXNlZCBKYXZhU2NyaXB0IHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlIGVsZW1lbnQnc1xuICogc3R5bGUgb2JqZWN0IHVzaW5nIHByb3BlcnR5IGFzc2lnbm1lbnQsIGFsbG93aW5nIHRoZSBzdHlsZSBvYmplY3QgdG9cbiAqIHRyYW5zbGF0ZSBKYXZhU2NyaXB0LXN0eWxlIG5hbWVzIHRvIENTUyBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBgc3R5bGVNYXAoe2JhY2tncm91bmRDb2xvcjogJ3JlZCcsICdib3JkZXItdG9wJzogJzVweCcsICctLXNpemUnOlxuICogJzAnfSlgIHNldHMgdGhlIGBiYWNrZ3JvdW5kLWNvbG9yYCwgYGJvcmRlci10b3BgIGFuZCBgLS1zaXplYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBzdHlsZUluZm8ge1N0eWxlSW5mb31cbiAqL1xuZXhwb3J0IGNvbnN0IHN0eWxlTWFwID0gZGlyZWN0aXZlKChzdHlsZUluZm8pID0+IChwYXJ0KSA9PiB7XG4gICAgaWYgKCEocGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHx8IChwYXJ0IGluc3RhbmNlb2YgUHJvcGVydHlQYXJ0KSB8fFxuICAgICAgICBwYXJ0LmNvbW1pdHRlci5uYW1lICE9PSAnc3R5bGUnIHx8IHBhcnQuY29tbWl0dGVyLnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHN0eWxlTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBzdHlsZSBhdHRyaWJ1dGUgJyArXG4gICAgICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICAgIH1cbiAgICBjb25zdCB7IGNvbW1pdHRlciB9ID0gcGFydDtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSBjb21taXR0ZXIuZWxlbWVudDtcbiAgICAvLyBIYW5kbGUgc3RhdGljIHN0eWxlcyB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgYSBQYXJ0XG4gICAgaWYgKCFzdHlsZU1hcENhY2hlLmhhcyhwYXJ0KSkge1xuICAgICAgICBzdHlsZS5jc3NUZXh0ID0gY29tbWl0dGVyLnN0cmluZ3Muam9pbignICcpO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gICAgY29uc3Qgb2xkSW5mbyA9IHN0eWxlTWFwQ2FjaGUuZ2V0KHBhcnQpO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBvbGRJbmZvKSB7XG4gICAgICAgIGlmICghKG5hbWUgaW4gc3R5bGVJbmZvKSkge1xuICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgICBzdHlsZVtuYW1lXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgb3IgdXBkYXRlIHByb3BlcnRpZXNcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgICAgIHN0eWxlW25hbWVdID0gc3R5bGVJbmZvW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgc3R5bGVJbmZvW25hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdHlsZU1hcENhY2hlLnNldChwYXJ0LCBzdHlsZUluZm8pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS1tYXAuanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=