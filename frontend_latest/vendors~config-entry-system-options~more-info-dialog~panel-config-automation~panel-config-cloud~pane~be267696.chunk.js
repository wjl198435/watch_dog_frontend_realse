(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~config-entry-system-options~more-info-dialog~panel-config-automation~panel-config-cloud~pane~be267696"],{

/***/ "./node_modules/@material/mwc-switch/mwc-switch-base.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch-base.js ***!
  \**************************************************************/
/*! exports provided: SwitchBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchBase", function() { return SwitchBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_switch_foundation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/switch/foundation.js */ "./node_modules/@material/switch/foundation.js");

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



class SwitchBase extends _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["FormElement"] {
    constructor() {
        super(...arguments);
        this.checked = false;
        this.disabled = false;
        this.mdcFoundationClass = _material_switch_foundation_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    _changeHandler(e) {
        this.mdcFoundation.handleChange(e);
        // catch "click" event and sync properties
        this.checked = this.formElement.checked;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["addHasRemoveClass"])(this.mdcRoot)), { setNativeControlChecked: (checked) => {
                this.formElement.checked = checked;
            }, setNativeControlDisabled: (disabled) => {
                this.formElement.disabled = disabled;
            } });
    }
    get ripple() {
        return this.rippleNode.ripple;
    }
    render() {
        return _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="mdc-switch">
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__thumb-underlay" .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])({
            interactionNode: this
        })}">
          <div class="mdc-switch__thumb">
            <input
              type="checkbox"
              id="basic-switch"
              class="mdc-switch__native-control"
              role="switch"
              @change="${this._changeHandler}">
          </div>
        </div>
      </div>
      <slot></slot>`;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean }),
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
        this.mdcFoundation.setChecked(value);
    })
], SwitchBase.prototype, "checked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean }),
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["observer"])(function (value) {
        this.mdcFoundation.setDisabled(value);
    })
], SwitchBase.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["query"])('.mdc-switch')
], SwitchBase.prototype, "mdcRoot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["query"])('input')
], SwitchBase.prototype, "formElement", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["query"])('.mdc-switch__thumb-underlay')
], SwitchBase.prototype, "rippleNode", void 0);
//# sourceMappingURL=mwc-switch-base.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-switch/mwc-switch-css.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch-css.js ***!
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

const style = _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__["css"] `.mdc-switch{display:inline-block;position:relative;outline:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;width:68px;height:48px;margin:0;opacity:0;cursor:pointer;pointer-events:auto}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{box-sizing:border-box;width:32px;height:14px;border:1px solid;border-radius:7px;opacity:.38;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{left:-18px;right:initial;display:flex;position:absolute;top:-17px;align-items:center;justify-content:center;width:48px;height:48px;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1),border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__thumb{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{transform:translateX(20px)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-switch__thumb-underlay:hover::before{opacity:.04}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}:host{outline:none}`;
//# sourceMappingURL=mwc-switch-css.js.map

/***/ }),

/***/ "./node_modules/@material/mwc-switch/mwc-switch.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-switch/mwc-switch.js ***!
  \*********************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _mwc_switch_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-switch-base.js */ "./node_modules/@material/mwc-switch/mwc-switch-base.js");
/* harmony import */ var _mwc_switch_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-switch-css.js */ "./node_modules/@material/mwc-switch/mwc-switch-css.js");

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



let Switch = class Switch extends _mwc_switch_base_js__WEBPACK_IMPORTED_MODULE_2__["SwitchBase"] {
};
Switch.styles = _mwc_switch_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Switch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-switch')
], Switch);

//# sourceMappingURL=mwc-switch.js.map

/***/ }),

/***/ "./node_modules/@material/switch/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/switch/constants.js ***!
  \****************************************************/
/*! exports provided: cssClasses, strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/** CSS classes used by the switch. */
var cssClasses = {
    /** Class used for a switch that is in the "checked" (on) position. */
    CHECKED: 'mdc-switch--checked',
    /** Class used for a switch that is disabled. */
    DISABLED: 'mdc-switch--disabled',
};
/** String constants used by the switch. */
var strings = {
    /** A CSS selector used to locate the native HTML control for the switch.  */
    NATIVE_CONTROL_SELECTOR: '.mdc-switch__native-control',
    /** A CSS selector used to locate the ripple surface element for the switch. */
    RIPPLE_SURFACE_SELECTOR: '.mdc-switch__thumb-underlay',
};

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@material/switch/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/switch/foundation.js ***!
  \*****************************************************/
/*! exports provided: MDCSwitchFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCSwitchFoundation", function() { return MDCSwitchFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/switch/constants.js");
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCSwitchFoundation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCSwitchFoundation, _super);
    function MDCSwitchFoundation(adapter) {
        return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCSwitchFoundation.defaultAdapter, adapter)) || this;
    }
    Object.defineProperty(MDCSwitchFoundation, "strings", {
        /** The string constants used by the switch. */
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitchFoundation, "cssClasses", {
        /** The CSS classes used by the switch. */
        get: function () {
            return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSwitchFoundation, "defaultAdapter", {
        /** The default Adapter for the switch. */
        get: function () {
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNativeControlChecked: function () { return undefined; },
                setNativeControlDisabled: function () { return undefined; },
            };
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the checked state of the switch. */
    MDCSwitchFoundation.prototype.setChecked = function (checked) {
        this.adapter_.setNativeControlChecked(checked);
        this.updateCheckedStyling_(checked);
    };
    /** Sets the disabled state of the switch. */
    MDCSwitchFoundation.prototype.setDisabled = function (disabled) {
        this.adapter_.setNativeControlDisabled(disabled);
        if (disabled) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
        }
    };
    /** Handles the change event for the switch native control. */
    MDCSwitchFoundation.prototype.handleChange = function (evt) {
        var nativeControl = evt.target;
        this.updateCheckedStyling_(nativeControl.checked);
    };
    /** Updates the styling of the switch based on its checked state. */
    MDCSwitchFoundation.prototype.updateCheckedStyling_ = function (checked) {
        if (checked) {
            this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
        }
        else {
            this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].CHECKED);
        }
    };
    return MDCSwitchFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]));

// tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
/* harmony default export */ __webpack_exports__["default"] = (MDCSwitchFoundation);
//# sourceMappingURL=foundation.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnN+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctY2xvdWR+cGFuZX5iZTI2NzY5Ni5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLXN3aXRjaC9td2Mtc3dpdGNoLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2Mtc3dpdGNoL213Yy1zd2l0Y2gtY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLXN3aXRjaC9td2Mtc3dpdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc3dpdGNoL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3N3aXRjaC9mb3VuZGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9fZGVjb3JhdGUgfSBmcm9tIFwidHNsaWJcIjtcbi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGFkZEhhc1JlbW92ZUNsYXNzLCBGb3JtRWxlbWVudCwgaHRtbCwgb2JzZXJ2ZXIsIHByb3BlcnR5LCBxdWVyeSB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9mb3JtLWVsZW1lbnQuanMnO1xuaW1wb3J0IHsgcmlwcGxlIH0gZnJvbSAnQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5pbXBvcnQgTURDU3dpdGNoRm91bmRhdGlvbiBmcm9tICdAbWF0ZXJpYWwvc3dpdGNoL2ZvdW5kYXRpb24uanMnO1xuZXhwb3J0IGNsYXNzIFN3aXRjaEJhc2UgZXh0ZW5kcyBGb3JtRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubWRjRm91bmRhdGlvbkNsYXNzID0gTURDU3dpdGNoRm91bmRhdGlvbjtcbiAgICB9XG4gICAgX2NoYW5nZUhhbmRsZXIoZSkge1xuICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uaGFuZGxlQ2hhbmdlKGUpO1xuICAgICAgICAvLyBjYXRjaCBcImNsaWNrXCIgZXZlbnQgYW5kIHN5bmMgcHJvcGVydGllc1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmZvcm1FbGVtZW50LmNoZWNrZWQ7XG4gICAgfVxuICAgIGNyZWF0ZUFkYXB0ZXIoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGFkZEhhc1JlbW92ZUNsYXNzKHRoaXMubWRjUm9vdCkpLCB7IHNldE5hdGl2ZUNvbnRyb2xDaGVja2VkOiAoY2hlY2tlZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgICAgICB9LCBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IChkaXNhYmxlZCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGdldCByaXBwbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpcHBsZU5vZGUucmlwcGxlO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190cmFja1wiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXlcIiAucmlwcGxlPVwiJHtyaXBwbGUoe1xuICAgICAgICAgICAgaW50ZXJhY3Rpb25Ob2RlOiB0aGlzXG4gICAgICAgIH0pfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc3dpdGNoX190aHVtYlwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPVwiYmFzaWMtc3dpdGNoXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbFwiXG4gICAgICAgICAgICAgIHJvbGU9XCJzd2l0Y2hcIlxuICAgICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9jaGFuZ2VIYW5kbGVyfVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNsb3Q+PC9zbG90PmA7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pLFxuICAgIG9ic2VydmVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLm1kY0ZvdW5kYXRpb24uc2V0Q2hlY2tlZCh2YWx1ZSk7XG4gICAgfSlcbl0sIFN3aXRjaEJhc2UucHJvdG90eXBlLCBcImNoZWNrZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSxcbiAgICBvYnNlcnZlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLnNldERpc2FibGVkKHZhbHVlKTtcbiAgICB9KVxuXSwgU3dpdGNoQmFzZS5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcubWRjLXN3aXRjaCcpXG5dLCBTd2l0Y2hCYXNlLnByb3RvdHlwZSwgXCJtZGNSb290XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnaW5wdXQnKVxuXSwgU3dpdGNoQmFzZS5wcm90b3R5cGUsIFwiZm9ybUVsZW1lbnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCcubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXknKVxuXSwgU3dpdGNoQmFzZS5wcm90b3R5cGUsIFwicmlwcGxlTm9kZVwiLCB2b2lkIDApO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLXN3aXRjaC1iYXNlLmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzIGAubWRjLXN3aXRjaHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdXRsaW5lOm5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ubWRjLXN3aXRjaC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190cmFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9Lm1kYy1zd2l0Y2gubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7Ym9yZGVyLWNvbG9yOiMwMTg3ODY7Ym9yZGVyLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RyYWNre2JhY2tncm91bmQtY29sb3I6IzAwMDtib3JkZXItY29sb3I6IzAwMH0ubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm1kYy1zd2l0Y2hfX25hdGl2ZS1jb250cm9se2xlZnQ6MDtyaWdodDppbml0aWFsO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjY4cHg7aGVpZ2h0OjQ4cHg7bWFyZ2luOjA7b3BhY2l0eTowO2N1cnNvcjpwb2ludGVyO3BvaW50ZXItZXZlbnRzOmF1dG99W2Rpcj1ydGxdIC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbCwubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2xbZGlyPXJ0bF17bGVmdDppbml0aWFsO3JpZ2h0OjB9Lm1kYy1zd2l0Y2hfX3RyYWNre2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDozMnB4O2hlaWdodDoxNHB4O2JvcmRlcjoxcHggc29saWQ7Ym9yZGVyLXJhZGl1czo3cHg7b3BhY2l0eTouMzg7dHJhbnNpdGlvbjpvcGFjaXR5IDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxiYWNrZ3JvdW5kLWNvbG9yIDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxib3JkZXItY29sb3IgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheXtsZWZ0Oi0xOHB4O3JpZ2h0OmluaXRpYWw7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMTdweDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo0OHB4O2hlaWdodDo0OHB4O3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxiYWNrZ3JvdW5kLWNvbG9yIDkwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSxib3JkZXItY29sb3IgOTBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpfVtkaXI9cnRsXSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXksLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5W2Rpcj1ydGxde2xlZnQ6aW5pdGlhbDtyaWdodDotMThweH0ubWRjLXN3aXRjaF9fdGh1bWJ7Ym94LXNoYWRvdzowcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwwcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwuMTIpO2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O2JvcmRlcjoxMHB4IHNvbGlkO2JvcmRlci1yYWRpdXM6NTAlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDoxfS5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190cmFja3tvcGFjaXR5Oi41NH0ubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXl7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCl9W2Rpcj1ydGxdIC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheSwubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXlbZGlyPXJ0bF17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwcHgpfS5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbHt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjBweCl9W2Rpcj1ydGxdIC5tZGMtc3dpdGNoLS1jaGVja2VkIC5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbCwubWRjLXN3aXRjaC0tY2hlY2tlZCAubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2xbZGlyPXJ0bF17dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjBweCl9Lm1kYy1zd2l0Y2gtLWRpc2FibGVke29wYWNpdHk6LjM4O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kYy1zd2l0Y2gtLWRpc2FibGVkIC5tZGMtc3dpdGNoX190aHVtYntib3JkZXItd2lkdGg6MXB4fS5tZGMtc3dpdGNoLS1kaXNhYmxlZCAubWRjLXN3aXRjaF9fbmF0aXZlLWNvbnRyb2x7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Z3stLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyOiAxcHggc29saWQgIzAwMDt2aXNpYmlsaXR5OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zzo6YmVmb3Jle2JvcmRlcjp2YXIoLS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcil9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojOWU5ZTllfS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDh9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlLC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4yNH0ubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMjR9Lm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4yNH0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXl7LS1tZGMtcmlwcGxlLWZnLXNpemU6IDA7LS1tZGMtcmlwcGxlLWxlZnQ6IDA7LS1tZGMtcmlwcGxlLXRvcDogMDstLW1kYy1yaXBwbGUtZmctc2NhbGU6IDE7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1lbmQ6IDA7LS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydDogMDstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1yYWRpdXMtaW4gMjI1bXMgZm9yd2FyZHMsbWRjLXJpcHBsZS1mZy1vcGFjaXR5LWluIDc1bXMgZm9yd2FyZHN9Lm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIGNhbGMoNTAlIC0gNTAlKSk7bGVmdDp2YXIoLS1tZGMtcmlwcGxlLWxlZnQsIGNhbGMoNTAlIC0gNTAlKSk7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6IzAxODc4Nn1Ac3VwcG9ydHMgbm90ICgtbXMtaW1lLWFsaWduOiBhdXRvKXsubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmJlZm9yZSwubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpob3Zlcjo6YmVmb3Jle29wYWNpdHk6LjA0fS5tZGMtc3dpdGNoX190aHVtYi11bmRlcmxheTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTo6YWZ0ZXJ7dHJhbnNpdGlvbjpvcGFjaXR5IDE1MG1zIGxpbmVhcn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXN3aXRjaF9fdGh1bWItdW5kZXJsYXkubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn06aG9zdHtvdXRsaW5lOm5vbmV9YDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1zd2l0Y2gtY3NzLmpzLm1hcCIsImltcG9ydCB7IF9fZGVjb3JhdGUgfSBmcm9tIFwidHNsaWJcIjtcbi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvZm9ybS1lbGVtZW50LmpzJztcbmltcG9ydCB7IFN3aXRjaEJhc2UgfSBmcm9tICcuL213Yy1zd2l0Y2gtYmFzZS5qcyc7XG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJy4vbXdjLXN3aXRjaC1jc3MuanMnO1xubGV0IFN3aXRjaCA9IGNsYXNzIFN3aXRjaCBleHRlbmRzIFN3aXRjaEJhc2Uge1xufTtcblN3aXRjaC5zdHlsZXMgPSBzdHlsZTtcblN3aXRjaCA9IF9fZGVjb3JhdGUoW1xuICAgIGN1c3RvbUVsZW1lbnQoJ213Yy1zd2l0Y2gnKVxuXSwgU3dpdGNoKTtcbmV4cG9ydCB7IFN3aXRjaCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLXN3aXRjaC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKiBDU1MgY2xhc3NlcyB1c2VkIGJ5IHRoZSBzd2l0Y2guICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvKiogQ2xhc3MgdXNlZCBmb3IgYSBzd2l0Y2ggdGhhdCBpcyBpbiB0aGUgXCJjaGVja2VkXCIgKG9uKSBwb3NpdGlvbi4gKi9cbiAgICBDSEVDS0VEOiAnbWRjLXN3aXRjaC0tY2hlY2tlZCcsXG4gICAgLyoqIENsYXNzIHVzZWQgZm9yIGEgc3dpdGNoIHRoYXQgaXMgZGlzYWJsZWQuICovXG4gICAgRElTQUJMRUQ6ICdtZGMtc3dpdGNoLS1kaXNhYmxlZCcsXG59O1xuLyoqIFN0cmluZyBjb25zdGFudHMgdXNlZCBieSB0aGUgc3dpdGNoLiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgLyoqIEEgQ1NTIHNlbGVjdG9yIHVzZWQgdG8gbG9jYXRlIHRoZSBuYXRpdmUgSFRNTCBjb250cm9sIGZvciB0aGUgc3dpdGNoLiAgKi9cbiAgICBOQVRJVkVfQ09OVFJPTF9TRUxFQ1RPUjogJy5tZGMtc3dpdGNoX19uYXRpdmUtY29udHJvbCcsXG4gICAgLyoqIEEgQ1NTIHNlbGVjdG9yIHVzZWQgdG8gbG9jYXRlIHRoZSByaXBwbGUgc3VyZmFjZSBlbGVtZW50IGZvciB0aGUgc3dpdGNoLiAqL1xuICAgIFJJUFBMRV9TVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1zd2l0Y2hfX3RodW1iLXVuZGVybGF5Jyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENTd2l0Y2hGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ1N3aXRjaEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDU3dpdGNoRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENTd2l0Y2hGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1N3aXRjaEZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIC8qKiBUaGUgc3RyaW5nIGNvbnN0YW50cyB1c2VkIGJ5IHRoZSBzd2l0Y2guICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTd2l0Y2hGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICAvKiogVGhlIENTUyBjbGFzc2VzIHVzZWQgYnkgdGhlIHN3aXRjaC4gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1N3aXRjaEZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKiogVGhlIGRlZmF1bHQgQWRhcHRlciBmb3IgdGhlIHN3aXRjaC4gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROYXRpdmVDb250cm9sQ2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqIFNldHMgdGhlIGNoZWNrZWQgc3RhdGUgb2YgdGhlIHN3aXRjaC4gKi9cbiAgICBNRENTd2l0Y2hGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDaGVja2VkID0gZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXROYXRpdmVDb250cm9sQ2hlY2tlZChjaGVja2VkKTtcbiAgICAgICAgdGhpcy51cGRhdGVDaGVja2VkU3R5bGluZ18oY2hlY2tlZCk7XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgZGlzYWJsZWQgc3RhdGUgb2YgdGhlIHN3aXRjaC4gKi9cbiAgICBNRENTd2l0Y2hGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uIChkaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5hdGl2ZUNvbnRyb2xEaXNhYmxlZChkaXNhYmxlZCk7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNBQkxFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBIYW5kbGVzIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSBzd2l0Y2ggbmF0aXZlIGNvbnRyb2wuICovXG4gICAgTURDU3dpdGNoRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgbmF0aXZlQ29udHJvbCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hlY2tlZFN0eWxpbmdfKG5hdGl2ZUNvbnRyb2wuY2hlY2tlZCk7XG4gICAgfTtcbiAgICAvKiogVXBkYXRlcyB0aGUgc3R5bGluZyBvZiB0aGUgc3dpdGNoIGJhc2VkIG9uIGl0cyBjaGVja2VkIHN0YXRlLiAqL1xuICAgIE1EQ1N3aXRjaEZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUNoZWNrZWRTdHlsaW5nXyA9IGZ1bmN0aW9uIChjaGVja2VkKSB7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0hFQ0tFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQ0hFQ0tFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENTd2l0Y2hGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTd2l0Y2hGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDU3dpdGNoRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==