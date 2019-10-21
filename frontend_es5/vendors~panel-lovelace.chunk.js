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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div .ripple=\"", "\"\n          class=\"mdc-ripple-surface ", "\"></div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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



var RippleBase =
/*#__PURE__*/
function (_LitElement) {
  _inherits(RippleBase, _LitElement);

  function RippleBase() {
    var _this;

    _classCallCheck(this, RippleBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RippleBase).apply(this, arguments));
    _this.primary = false;
    _this.accent = false;
    _this.unbounded = false;
    _this.disabled = false;
    _this.interactionNode = _assertThisInitialized(_this);
    return _this;
  }

  _createClass(RippleBase, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.interactionNode === this) {
        var parent = this.parentNode;

        if (parent instanceof HTMLElement) {
          this.interactionNode = parent;
        }
      }

      _get(_getPrototypeOf(RippleBase.prototype), "connectedCallback", this).call(this);
    } // TODO(sorvell) #css: sizing.

  }, {
    key: "render",
    value: function render() {
      var classes = {
        'mdc-ripple-surface--primary': this.primary,
        'mdc-ripple-surface--accent': this.accent
      };
      var disabled = this.disabled,
          unbounded = this.unbounded,
          active = this.active,
          interactionNode = this.interactionNode;
      var rippleOptions = {
        disabled: disabled,
        unbounded: unbounded,
        interactionNode: interactionNode
      };

      if (active !== undefined) {
        rippleOptions.active = active;
      }

      return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), Object(_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])(rippleOptions), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes));
    }
  }]);

  return RippleBase;
}(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "primary", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "active", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "accent", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "unbounded", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Boolean
})], RippleBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["property"])({
  attribute: false
})], RippleBase.prototype, "interactionNode", void 0);

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var style = Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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





var Ripple =
/*#__PURE__*/
function (_RippleBase) {
  _inherits(Ripple, _RippleBase);

  function Ripple() {
    _classCallCheck(this, Ripple);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ripple).apply(this, arguments));
  }

  return Ripple;
}(_mwc_ripple_base_js__WEBPACK_IMPORTED_MODULE_2__["RippleBase"]);

Ripple.styles = _mwc_ripple_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Ripple = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-ripple')], Ripple);


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

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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






var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n<dom-module id=\"paper-material-styles\">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation=\"1\"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation=\"2\"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation=\"3\"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation=\"4\"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation=\"5\"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

Shared styles that you can apply to an element to renders two shadows on top
of each other,that create the effect of a lifted piece of paper.

Example:

    <custom-style>
      <style is="custom-style" include="paper-material-styles"></style>
    </custom-style>

    <div class="paper-material" elevation="1">
      ... content ...
    </div>

@group Paper Elements
@demo demo/index.html
*/



var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      div {\n        display: inline-block;\n      }\n      .slider {\n        fill: none;\n        stroke-width: var(--round-slider-path-width, 3);\n        stroke-linecap: var(--round-slider-linecap, round);\n      }\n      .path {\n        stroke: var(--round-slider-path-color, lightgray);\n      }\n      .bar {\n        stroke: var(--round-slider-bar-color, deepskyblue);\n      }\n      .handles {\n        fill: var(--round-slider-handle-color, var(--round-slider-bar-color, deepskyblue));\n      }\n      .handles .low {\n        fill: var(--round-slider-low-handle-color);\n      }\n      .handles .high {\n        fill: var(--round-slider-high-handle-color);\n      }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["", " ", ""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["", " ", ""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          <g class=\"handles\">\n          ", "\n          </g>\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          <path\n            class=\"bar\"\n            d=", "\n          />\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    <div\n      @mousedown=", "\n      @touchstart=", "\n      style=\"\n         height: ", "px;\n         width: ", "px;\n       \"\n    >\n      <svg\n        xmln=\"http://www.w3.org/2000/svg\"\n        viewBox=\"", " ", " ", " ", "\"\n      >\n        <g class=\"slider\">\n          <path\n            class=\"path\"\n            d=", "\n          />\n          ", "\n        </g>\n\n        ", "\n      </svg>\n    </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <circle\n          id=", "\n          class=\"handle ", " overflow\"\n          cx=", "\n          cy=", "\n          r=", "\n          style=\"fill: rgba(0,0,0,0);\"\n        ></circle>\n        <circle\n          id=", "\n          class=\"handle ", "\"\n          cx=", "\n          cy=", "\n          r=", "\n        ></circle>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var RoundSlider =
/*#__PURE__*/
function (_LitElement) {
  _inherits(RoundSlider, _LitElement);

  _createClass(RoundSlider, null, [{
    key: "properties",
    get: function get() {
      return {
        value: {
          type: Number
        },
        high: {
          type: Number
        },
        low: {
          type: Number
        },
        min: {
          type: Number
        },
        max: {
          type: Number
        },
        step: {
          type: Number
        },
        radius: {
          type: Number
        },
        startAngle: {
          type: Number
        },
        arcLength: {
          type: Number
        },
        handleSize: {
          type: Number
        },
        disabled: {
          type: Boolean
        },
        dragging: {
          type: Boolean,
          reflect: true
        }
      };
    }
  }]);

  function RoundSlider() {
    var _this;

    _classCallCheck(this, RoundSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RoundSlider).call(this));
    _this.min = 0;
    _this.max = 100;
    _this.step = 1;
    _this.radius = 80;
    _this.startAngle = 135;
    _this.arcLength = 270;
    _this.handleSize = 6;
    _this.disabled = false;
    _this.dragging = false;
    return _this;
  }

  _createClass(RoundSlider, [{
    key: "_angleInside",
    value: function _angleInside(angle) {
      var a = (this.startAngle + this.arcLength / 2 - angle + 180 + 360) % 360 - 180;
      return a < this.arcLength / 2 && a > -this.arcLength / 2;
    }
  }, {
    key: "_getBoundaries",
    value: function _getBoundaries() {
      var margin = this.handleSize * 1.5;
      var up = this._r0;
      if (!this._angleInside(270)) up = Math.max(-this._rArc * Math.sin(this._start) + margin, -this._rArc * Math.sin(this._end) + margin);
      var down = this._r0;
      if (!this._angleInside(90)) down = Math.max(this._rArc * Math.sin(this._start) + margin, this._rArc * Math.sin(this._end) + margin);
      var left = this._r0;
      if (!this._angleInside(180)) left = Math.max(-this._rArc * Math.cos(this._start) + margin, -this._rArc * Math.cos(this._end) + margin);
      var right = this._r0;
      if (!this._angleInside(0)) right = Math.max(this._rArc * Math.cos(this._start) + margin, this._rArc * Math.cos(this._end) + margin);
      return {
        up: up,
        down: down,
        left: left,
        right: right,
        width: left + right,
        height: up + down
      };
    }
  }, {
    key: "dragStart",
    value: function dragStart(ev) {
      if (!ev.target.classList.contains("handle")) return;
      var handle = ev.target;
      if (handle.classList.contains("overflow")) handle = handle.nextElementSibling;
      handle.setAttribute('r', this.handleSize * 1.5);
      var min = handle.id === "high" ? this.low : this.min;
      var max = handle.id === "low" ? this.high : this.max;
      this._rotation = {
        handle: handle,
        min: min,
        max: max
      };
      this.dragging = true;
    }
  }, {
    key: "dragEnd",
    value: function dragEnd(ev) {
      if (!this._rotation) return;
      var handle = this._rotation.handle;
      handle.setAttribute('r', this.handleSize);
      this._rotation = false;
      this.dragging = false;
      var event = new CustomEvent('value-changed', {
        detail: _defineProperty({}, handle.id, this[handle.id])
      });
      this.dispatchEvent(event);
      if (this.low && this.low >= 0.99 * this.max) this._reverseOrder = true;else this._reverseOrder = false;
    }
  }, {
    key: "drag",
    value: function drag(ev) {
      if (!this._rotation) return;
      ev.preventDefault();
      var mouseX = ev.type === "touchmove" ? ev.touches[0].clientX : ev.clientX;
      var mouseY = ev.type === "touchmove" ? ev.touches[0].clientY : ev.clientY;
      var rect = this.shadowRoot.querySelector("svg").getBoundingClientRect();

      var boundaries = this._getBoundaries();

      var x = mouseX - (rect.x + boundaries.left);
      var y = mouseY - (rect.y + boundaries.up);
      var angle = (Math.atan2(y, x) - this._start + 2 * Math.PI) % (2 * Math.PI);
      var pos = Math.round((angle / this._len * (this.max - this.min) + this.min) / this.step) * this.step;
      if (pos < this._rotation.min || pos > this._rotation.max) return;
      var handle = this._rotation.handle;
      this[handle.id] = pos;
      var event = new CustomEvent('value-changing', {
        detail: _defineProperty({}, handle.id, pos)
      });
      this.dispatchEvent(event);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      document.addEventListener('mouseup', this.dragEnd.bind(this));
      document.addEventListener('touchend', this.dragEnd.bind(this), {
        passive: false
      });
      document.addEventListener('mousemove', this.drag.bind(this));
      document.addEventListener('touchmove', this.drag.bind(this), {
        passive: false
      });
    }
  }, {
    key: "_renderArc",
    value: function _renderArc(start, end) {
      var r = this._rArc;
      return "\n      M ".concat(this._r0 + r * Math.cos(start), " ").concat(this._r0 + r * Math.sin(start), "\n      A ").concat(r, " ").concat(r, ",\n        0,\n        ").concat(end - start > Math.PI ? "1" : "0", " 1,\n        ").concat(this._r0 + r * Math.cos(end), " ").concat(this._r0 + r * Math.sin(end), "\n    ");
    }
  }, {
    key: "_valueFrac",
    value: function _valueFrac(val) {
      return (this[val] - this.min) / (this.max - this.min);
    }
  }, {
    key: "_renderHandle",
    value: function _renderHandle(id) {
      var theta = this._start + this._valueFrac(id) * this._len;

      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject(), id, id, this._r0 + this._rArc * Math.cos(theta), this._r0 + this._rArc * Math.sin(theta), 2 * this.handleSize, id, id, this._r0 + this._rArc * Math.cos(theta), this._r0 + this._rArc * Math.sin(theta), this.handleSize);
    }
  }, {
    key: "render",
    value: function render() {
      var up, left, width, height;

      var _this$_getBoundaries = this._getBoundaries();

      up = _this$_getBoundaries.up;
      left = _this$_getBoundaries.left;
      width = _this$_getBoundaries.width;
      height = _this$_getBoundaries.height;
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.dragStart, this.dragStart, height, width, this._r0 - left, this._r0 - up, width, height, this._renderArc(this._start, this._end), this._isDisabled ? '' : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject3(), this._renderArc(this._start + this._len * (this.low !== undefined ? this._valueFrac("low") : 0), this._start + this._len * (this.high !== undefined ? this._valueFrac("high") : this._valueFrac("value")))), this._isDisabled ? '' : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["svg"])(_templateObject4(), this.low !== undefined ? this._reverseOrder ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this._renderHandle("high"), this._renderHandle("low")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), this._renderHandle("low"), this._renderHandle("high")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), this._renderHandle("value"))));
    }
  }, {
    key: "_r0",
    get: function get() {
      return this.radius;
    }
  }, {
    key: "_rArc",
    get: function get() {
      return this._r0 - this.handleSize * 1.5;
    }
  }, {
    key: "_start",
    get: function get() {
      return this.startAngle * Math.PI / 180;
    }
  }, {
    key: "_len",
    get: function get() {
      return Math.min(this.arcLength * Math.PI / 180, 2 * Math.PI - 0.01);
    }
  }, {
    key: "_end",
    get: function get() {
      return this._start + this._len;
    }
  }, {
    key: "_isDisabled",
    get: function get() {
      return this.disabled || this.value === undefined && this.high === undefined && this.low === undefined;
    }
  }], [{
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
    }
  }]);

  return RoundSlider;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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

var styleMapCache = new WeakMap();
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

var styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(function (styleInfo) {
  return function (part) {
    if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
      throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
    }

    var committer = part.committer;
    var style = committer.element.style; // Handle static styles the first time we see a Part

    if (!styleMapCache.has(part)) {
      style.cssText = committer.strings.join(' ');
    } // Remove old properties that no longer exist in styleInfo


    var oldInfo = styleMapCache.get(part);

    for (var name in oldInfo) {
      if (!(name in styleInfo)) {
        if (name.indexOf('-') === -1) {
          // tslint:disable-next-line:no-any
          style[name] = null;
        } else {
          style.removeProperty(name);
        }
      }
    } // Add or update properties


    for (var _name in styleInfo) {
      if (_name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[_name] = styleInfo[_name];
      } else {
        style.setProperty(_name, styleInfo[_name]);
      }
    }

    styleMapCache.set(part, styleInfo);
  };
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLXJpcHBsZS9td2MtcmlwcGxlLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtcmlwcGxlL213Yy1yaXBwbGUtY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLXJpcHBsZS9td2MtcmlwcGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1zY3JvbGwtZWZmZWN0cy9lZmZlY3RzL3dhdGVyZmFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdGhvbWFzbG92ZW4vcm91bmQtc2xpZGVyL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjbGFzc01hcCwgaHRtbCwgTGl0RWxlbWVudCwgcHJvcGVydHkgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50JztcbmltcG9ydCB7IHJpcHBsZSB9IGZyb20gJy4vcmlwcGxlLWRpcmVjdGl2ZS5qcyc7XG5leHBvcnQgY2xhc3MgUmlwcGxlQmFzZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByaW1hcnkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY2NlbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmludGVyYWN0aW9uTm9kZSA9IHRoaXM7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbk5vZGUgPT09IHRoaXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25Ob2RlID0gcGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuICAgIC8vIFRPRE8oc29ydmVsbCkgI2Nzczogc2l6aW5nLlxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICdtZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknOiB0aGlzLnByaW1hcnksXG4gICAgICAgICAgICAnbWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQnOiB0aGlzLmFjY2VudCxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgdW5ib3VuZGVkLCBhY3RpdmUsIGludGVyYWN0aW9uTm9kZSB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgcmlwcGxlT3B0aW9ucyA9IHsgZGlzYWJsZWQsIHVuYm91bmRlZCwgaW50ZXJhY3Rpb25Ob2RlIH07XG4gICAgICAgIGlmIChhY3RpdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmlwcGxlT3B0aW9ucy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWwgYFxuICAgICAgPGRpdiAucmlwcGxlPVwiJHtyaXBwbGUocmlwcGxlT3B0aW9ucyl9XCJcbiAgICAgICAgICBjbGFzcz1cIm1kYy1yaXBwbGUtc3VyZmFjZSAke2NsYXNzTWFwKGNsYXNzZXMpfVwiPjwvZGl2PmA7XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBSaXBwbGVCYXNlLnByb3RvdHlwZSwgXCJwcmltYXJ5XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFJpcHBsZUJhc2UucHJvdG90eXBlLCBcImFjdGl2ZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBSaXBwbGVCYXNlLnByb3RvdHlwZSwgXCJhY2NlbnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXSwgUmlwcGxlQmFzZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIFJpcHBsZUJhc2UucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IGF0dHJpYnV0ZTogZmFsc2UgfSlcbl0sIFJpcHBsZUJhc2UucHJvdG90eXBlLCBcImludGVyYWN0aW9uTm9kZVwiLCB2b2lkIDApO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLXJpcHBsZS1iYXNlLmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzIGBAa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Z3stLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyOiAxcHggc29saWQgIzAwMDt2aXNpYmlsaXR5OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zzo6YmVmb3Jle2JvcmRlcjp2YXIoLS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcil9Lm1kYy1yaXBwbGUtc3VyZmFjZXstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3Bvc2l0aW9uOnJlbGF0aXZlO291dGxpbmU6bm9uZTtvdmVyZmxvdzpoaWRkZW59Lm1kYy1yaXBwbGUtc3VyZmFjZTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2U6OmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO2NvbnRlbnQ6XCJcIn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmV7dHJhbnNpdGlvbjpvcGFjaXR5IDE1bXMgbGluZWFyLGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXI7ei1pbmRleDoxfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3Jle3RyYW5zZm9ybTpzY2FsZSh2YXIoLS1tZGMtcmlwcGxlLWZnLXNjYWxlLCAxKSl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt0b3A6MDtsZWZ0OjA7dHJhbnNmb3JtOnNjYWxlKDApO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCAwKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgMCl9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLXJhZGl1cy1pbiAyMjVtcyBmb3J3YXJkcyxtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW4gNzVtcyBmb3J3YXJkc30ubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uOjphZnRlcnthbmltYXRpb246bWRjLXJpcHBsZS1mZy1vcGFjaXR5LW91dCAxNTBtczt0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5tZGMtcmlwcGxlLXN1cmZhY2U6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZDo6YmVmb3Jle3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtcmlwcGxlLXN1cmZhY2UubWRjLXJpcHBsZS11cGdyYWRlZHstLW1kYy1yaXBwbGUtZmctb3BhY2l0eTogMC4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gMTAwJSk7bGVmdDpjYWxjKDUwJSAtIDEwMCUpO3dpZHRoOjIwMCU7aGVpZ2h0OjIwMCV9Lm1kYy1yaXBwbGUtc3VyZmFjZS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF17b3ZlcmZsb3c6dmlzaWJsZX0ubWRjLXJpcHBsZS1zdXJmYWNlW2RhdGEtbWRjLXJpcHBsZS1pcy11bmJvdW5kZWRdOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXTo6YWZ0ZXJ7dG9wOmNhbGMoNTAlIC0gNTAlKTtsZWZ0OmNhbGMoNTAlIC0gNTAlKTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2VbZGF0YS1tZGMtcmlwcGxlLWlzLXVuYm91bmRlZF0ubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7dG9wOnZhcigtLW1kYy1yaXBwbGUtdG9wLCBjYWxjKDUwJSAtIDUwJSkpO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCBjYWxjKDUwJSAtIDUwJSkpO3dpZHRoOnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSk7aGVpZ2h0OnZhcigtLW1kYy1yaXBwbGUtZmctc2l6ZSwgMTAwJSl9Lm1kYy1yaXBwbGUtc3VyZmFjZVtkYXRhLW1kYy1yaXBwbGUtaXMtdW5ib3VuZGVkXS5tZGMtcmlwcGxlLXVwZ3JhZGVkOjphZnRlcnt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmJlZm9yZSwubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiM2MjAwZWV9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXByaW1hcnksICM2MjAwZWUpfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeS5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tcHJpbWFyeTpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtcmlwcGxlLXN1cmZhY2UtLXByaW1hcnk6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODZ9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjpiZWZvcmUsLm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMwMTg3ODYpfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6aG92ZXI6OmJlZm9yZXtvcGFjaXR5Oi4wNH0ubWRjLXJpcHBsZS1zdXJmYWNlLS1hY2NlbnQ6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTpmb2N1czo6YmVmb3JlLC5tZGMtcmlwcGxlLXN1cmZhY2UtLWFjY2VudC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6OmFmdGVye3RyYW5zaXRpb246b3BhY2l0eSAxNTBtcyBsaW5lYXJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Om5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6YWN0aXZlOjphZnRlcnt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZS0tYWNjZW50Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1yaXBwbGUtc3VyZmFjZXtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowfWA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1td2MtcmlwcGxlLWNzcy5qcy5tYXAiLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudCc7XG5pbXBvcnQgeyBSaXBwbGVCYXNlIH0gZnJvbSAnLi9td2MtcmlwcGxlLWJhc2UuanMnO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tICcuL213Yy1yaXBwbGUtY3NzLmpzJztcbmxldCBSaXBwbGUgPSBjbGFzcyBSaXBwbGUgZXh0ZW5kcyBSaXBwbGVCYXNlIHtcbn07XG5SaXBwbGUuc3R5bGVzID0gc3R5bGU7XG5SaXBwbGUgPSBfX2RlY29yYXRlKFtcbiAgICBjdXN0b21FbGVtZW50KCdtd2MtcmlwcGxlJylcbl0sIFJpcHBsZSk7XG5leHBvcnQgeyBSaXBwbGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1yaXBwbGUuanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJy4uL2FwcC1zY3JvbGwtZWZmZWN0cy1iZWhhdmlvci5qcyc7XG5cbmltcG9ydCB7cmVnaXN0ZXJFZmZlY3R9IGZyb20gJy4uLy4uL2hlbHBlcnMvaGVscGVycy5qcyc7XG4vKipcbiAqIFRvZ2dsZXMgdGhlIHNoYWRvdyBwcm9wZXJ0eSBpbiBhcHAtaGVhZGVyIHdoZW4gY29udGVudCBpcyBzY3JvbGxlZCB0byBjcmVhdGVcbiAqIGEgc2Vuc2Ugb2YgZGVwdGggYmV0d2VlbiB0aGUgZWxlbWVudCBhbmQgdGhlIGNvbnRlbnQgdW5kZXJuZWF0aC5cbiAqL1xucmVnaXN0ZXJFZmZlY3QoJ3dhdGVyZmFsbCcsIHtcbiAgLyoqXG4gICAqICBAdGhpcyBQb2x5bWVyLkFwcExheW91dC5FbGVtZW50V2l0aEJhY2tncm91bmRcbiAgICovXG4gIHJ1bjogZnVuY3Rpb24gcnVuKCkge1xuICAgIHRoaXMuc2hhZG93ID0gdGhpcy5pc09uU2NyZWVuKCkgJiYgdGhpcy5pc0NvbnRlbnRCZWxvdygpO1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuU2hhcmVkIHN0eWxlcyB0aGF0IHlvdSBjYW4gYXBwbHkgdG8gYW4gZWxlbWVudCB0byByZW5kZXJzIHR3byBzaGFkb3dzIG9uIHRvcFxub2YgZWFjaCBvdGhlcix0aGF0IGNyZWF0ZSB0aGUgZWZmZWN0IG9mIGEgbGlmdGVkIHBpZWNlIG9mIHBhcGVyLlxuXG5FeGFtcGxlOlxuXG4gICAgPGN1c3RvbS1zdHlsZT5cbiAgICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDwvY3VzdG9tLXN0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cInBhcGVyLW1hdGVyaWFsXCIgZWxldmF0aW9uPVwiMVwiPlxuICAgICAgLi4uIGNvbnRlbnQgLi4uXG4gICAgPC9kaXY+XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICcuLi9zaGFkb3cuanMnO1xuXG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbjxkb20tbW9kdWxlIGlkPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICBodG1sIHtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbDoge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMToge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMmRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi00ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTZkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tOGRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01OiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgICAucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiMVwiXSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjJcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIzXCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG4gICAgICAucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiNFwiXSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00O1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjVcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTtcbiAgICAgIH1cblxuICAgICAgLyogRHVwbGljYXRlIHRoZSBzdHlsZXMgYmVjYXVzZSBvZiBodHRwczovL2dpdGh1Yi5jb20vd2ViY29tcG9uZW50cy9zaGFkeWNzcy9pc3N1ZXMvMTkzICovXG4gICAgICA6aG9zdCB7XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNToge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbCkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIxXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjJcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiM1wiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMztcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI0XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00O1xuICAgICAgfVxuICAgICAgOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjVcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgc3ZnLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuY2xhc3MgUm91bmRTbGlkZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIGhpZ2g6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgbG93OiB7dHlwZTogTnVtYmVyfSxcbiAgICAgIG1pbjoge3R5cGU6IE51bWJlcn0sXG4gICAgICBtYXg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3RlcDoge3R5cGU6IE51bWJlcn0sXG4gICAgICByYWRpdXM6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgc3RhcnRBbmdsZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBhcmNMZW5ndGg6IHt0eXBlOiBOdW1iZXJ9LFxuICAgICAgaGFuZGxlU2l6ZToge3R5cGU6IE51bWJlcn0sXG4gICAgICBkaXNhYmxlZDoge3R5cGU6IEJvb2xlYW59LFxuICAgICAgZHJhZ2dpbmc6IHt0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlfSxcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubWluID0gMDtcbiAgICB0aGlzLm1heCA9IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSAxO1xuICAgIHRoaXMucmFkaXVzID0gODA7XG4gICAgdGhpcy5zdGFydEFuZ2xlID0gMTM1O1xuICAgIHRoaXMuYXJjTGVuZ3RoID0gMjcwO1xuICAgIHRoaXMuaGFuZGxlU2l6ZSA9IDY7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBfcjAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmFkaXVzO1xuICB9XG4gIGdldCBfckFyYygpIHtcbiAgICByZXR1cm4gdGhpcy5fcjAgLSB0aGlzLmhhbmRsZVNpemUqMS41O1xuICB9XG4gIGdldCBfc3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRBbmdsZSpNYXRoLlBJLzE4MDtcbiAgfVxuICBnZXQgX2xlbigpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5hcmNMZW5ndGgqTWF0aC5QSS8xODAsIDIqTWF0aC5QSS0wLjAxKTtcbiAgfVxuICBnZXQgX2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnQgKyB0aGlzLl9sZW47XG4gIH1cblxuICBnZXQgX2lzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLmhpZ2ggPT09IHVuZGVmaW5lZCAmJiB0aGlzLmxvdyA9PT0gdW5kZWZpbmVkKTtcbiAgfVxuXG4gIF9hbmdsZUluc2lkZShhbmdsZSkge1xuICAgIGxldCBhID0gKHRoaXMuc3RhcnRBbmdsZSArIHRoaXMuYXJjTGVuZ3RoLzIgLSBhbmdsZSArIDE4MCArIDM2MCkgJSAzNjAgLSAxODA7XG4gICAgcmV0dXJuIChhIDwgdGhpcy5hcmNMZW5ndGgvMiAmJiBhID4gLXRoaXMuYXJjTGVuZ3RoLzIpO1xuICB9XG5cbiAgX2dldEJvdW5kYXJpZXMoKSB7XG4gICAgY29uc3QgbWFyZ2luID0gdGhpcy5oYW5kbGVTaXplICogMS41O1xuXG5cbiAgICBsZXQgdXAgPSB0aGlzLl9yMDtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMjcwKSlcbiAgICAgIHVwID0gIE1hdGgubWF4KFxuICAgICAgICAtdGhpcy5fckFyYypNYXRoLnNpbih0aGlzLl9zdGFydCkgKyBtYXJnaW4sXG4gICAgICAgIC10aGlzLl9yQXJjKk1hdGguc2luKHRoaXMuX2VuZCkgKyBtYXJnaW5cbiAgICAgICk7XG5cbiAgICBsZXQgZG93biA9IHRoaXMuX3IwO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSg5MCkpXG4gICAgICBkb3duID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuX3JBcmMqTWF0aC5zaW4odGhpcy5fc3RhcnQpICsgbWFyZ2luLFxuICAgICAgICB0aGlzLl9yQXJjKk1hdGguc2luKHRoaXMuX2VuZCkgKyBtYXJnaW5cbiAgICAgICk7XG5cbiAgICBsZXQgbGVmdCA9IHRoaXMuX3IwO1xuICAgIGlmKCF0aGlzLl9hbmdsZUluc2lkZSgxODApKVxuICAgICAgbGVmdCA9IE1hdGgubWF4KFxuICAgICAgICAtdGhpcy5fckFyYypNYXRoLmNvcyh0aGlzLl9zdGFydCkgKyBtYXJnaW4sXG4gICAgICAgIC10aGlzLl9yQXJjKk1hdGguY29zKHRoaXMuX2VuZCkgKyBtYXJnaW5cbiAgICAgICk7XG5cbiAgICBsZXQgcmlnaHQgPSB0aGlzLl9yMDtcbiAgICBpZighdGhpcy5fYW5nbGVJbnNpZGUoMCkpXG4gICAgICByaWdodCA9IE1hdGgubWF4KFxuICAgICAgICB0aGlzLl9yQXJjKk1hdGguY29zKHRoaXMuX3N0YXJ0KSArIG1hcmdpbixcbiAgICAgICAgdGhpcy5fckFyYypNYXRoLmNvcyh0aGlzLl9lbmQpICsgbWFyZ2luXG4gICAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVwLCBkb3duLCBsZWZ0LCByaWdodCxcbiAgICAgIHdpZHRoOiBsZWZ0ICsgcmlnaHQsXG4gICAgICBoZWlnaHQ6IHVwICsgZG93bixcbiAgICB9XG4gIH1cblxuICBkcmFnU3RhcnQoZXYpIHtcbiAgICBpZighZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhhbmRsZVwiKSkgcmV0dXJuO1xuXG4gICAgbGV0IGhhbmRsZSA9IGV2LnRhcmdldDtcbiAgICBpZihoYW5kbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3ZlcmZsb3dcIikpXG4gICAgICBoYW5kbGUgPSBoYW5kbGUubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgaGFuZGxlLnNldEF0dHJpYnV0ZSgncicsIHRoaXMuaGFuZGxlU2l6ZSoxLjUpO1xuXG4gICAgY29uc3QgbWluID0gaGFuZGxlLmlkID09PSBcImhpZ2hcIiA/IHRoaXMubG93IDogdGhpcy5taW47XG4gICAgY29uc3QgbWF4ID0gaGFuZGxlLmlkID09PSBcImxvd1wiID8gdGhpcy5oaWdoIDogdGhpcy5tYXg7XG4gICAgdGhpcy5fcm90YXRpb24gPSB7IGhhbmRsZSwgbWluLCBtYXggfVxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0VuZChldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuXG4gICAgY29uc3QgaGFuZGxlID0gdGhpcy5fcm90YXRpb24uaGFuZGxlO1xuICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoJ3InLCB0aGlzLmhhbmRsZVNpemUpO1xuXG4gICAgdGhpcy5fcm90YXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5nZWQnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgW2hhbmRsZS5pZF0gOiB0aGlzW2hhbmRsZS5pZF0sXG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgIGlmKHRoaXMubG93ICYmIHRoaXMubG93ID49IDAuOTkqdGhpcy5tYXgpXG4gICAgICB0aGlzLl9yZXZlcnNlT3JkZXIgPSB0cnVlO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX3JldmVyc2VPcmRlciA9IGZhbHNlO1xuICB9XG5cbiAgZHJhZyhldikge1xuICAgIGlmKCF0aGlzLl9yb3RhdGlvbikgcmV0dXJuO1xuXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG1vdXNlWCA9IChldi50eXBlID09PSBcInRvdWNobW92ZVwiKSA/IGV2LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2LmNsaWVudFg7XG4gICAgY29uc3QgbW91c2VZID0gKGV2LnR5cGUgPT09IFwidG91Y2htb3ZlXCIpID8gZXYudG91Y2hlc1swXS5jbGllbnRZIDogZXYuY2xpZW50WTtcblxuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInN2Z1wiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBib3VuZGFyaWVzID0gdGhpcy5fZ2V0Qm91bmRhcmllcygpO1xuICAgIGNvbnN0IHggPSBtb3VzZVggLSAocmVjdC54ICsgYm91bmRhcmllcy5sZWZ0KTtcbiAgICBjb25zdCB5ID0gbW91c2VZIC0gKHJlY3QueSArIGJvdW5kYXJpZXMudXApO1xuXG4gICAgY29uc3QgYW5nbGUgPSAoTWF0aC5hdGFuMih5LHgpIC0gdGhpcy5fc3RhcnQgKyAyKk1hdGguUEkpICUgKDIqTWF0aC5QSSk7XG5cbiAgICBjb25zdCBwb3MgPSBNYXRoLnJvdW5kKChhbmdsZS90aGlzLl9sZW4qKHRoaXMubWF4IC0gdGhpcy5taW4pICsgdGhpcy5taW4pL3RoaXMuc3RlcCkqdGhpcy5zdGVwO1xuICAgIGlmKHBvcyA8IHRoaXMuX3JvdGF0aW9uLm1pbiB8fCBwb3MgPiB0aGlzLl9yb3RhdGlvbi5tYXgpIHJldHVybjtcblxuICAgIGNvbnN0IGhhbmRsZSA9IHRoaXMuX3JvdGF0aW9uLmhhbmRsZTtcbiAgICB0aGlzW2hhbmRsZS5pZF0gPSBwb3M7XG5cbiAgICBsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLWNoYW5naW5nJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIFtoYW5kbGUuaWRdIDogcG9zLFxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZHJhZ0VuZC5iaW5kKHRoaXMpLCB7cGFzc2l2ZTogZmFsc2V9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnLmJpbmQodGhpcyksIHtwYXNzaXZlOiBmYWxzZX0pO1xuICB9XG5cblxuICBfcmVuZGVyQXJjKHN0YXJ0LCBlbmQpIHtcbiAgICBjb25zdCByID0gdGhpcy5fckFyYztcbiAgICByZXR1cm4gYFxuICAgICAgTSAke3RoaXMuX3IwICsgcipNYXRoLmNvcyhzdGFydCl9ICR7dGhpcy5fcjAgKyByKk1hdGguc2luKHN0YXJ0KX1cbiAgICAgIEEgJHtyfSAke3J9LFxuICAgICAgICAwLFxuICAgICAgICAkeyhlbmQtc3RhcnQpID4gTWF0aC5QSSA/IFwiMVwiIDogXCIwXCJ9IDEsXG4gICAgICAgICR7dGhpcy5fcjArcipNYXRoLmNvcyhlbmQpfSAke3RoaXMuX3IwK3IqTWF0aC5zaW4oZW5kKX1cbiAgICBgO1xuICB9XG5cbiAgX3ZhbHVlRnJhYyh2YWwpIHtcbiAgICByZXR1cm4gKHRoaXNbdmFsXS10aGlzLm1pbikvKHRoaXMubWF4LXRoaXMubWluKTtcbiAgfVxuXG4gIF9yZW5kZXJIYW5kbGUoaWQpIHtcbiAgICBjb25zdCB0aGV0YSA9IHRoaXMuX3N0YXJ0ICsgdGhpcy5fdmFsdWVGcmFjKGlkKSp0aGlzLl9sZW47XG4gICAgcmV0dXJuIHN2Z2BcbiAgICAgICAgPGNpcmNsZVxuICAgICAgICAgIGlkPSR7aWR9XG4gICAgICAgICAgY2xhc3M9XCJoYW5kbGUgJHtpZH0gb3ZlcmZsb3dcIlxuICAgICAgICAgIGN4PSR7IHRoaXMuX3IwICsgdGhpcy5fckFyYypNYXRoLmNvcyh0aGV0YSkgfVxuICAgICAgICAgIGN5PSR7IHRoaXMuX3IwICsgdGhpcy5fckFyYypNYXRoLnNpbih0aGV0YSkgfVxuICAgICAgICAgIHI9JHsyKnRoaXMuaGFuZGxlU2l6ZX1cbiAgICAgICAgICBzdHlsZT1cImZpbGw6IHJnYmEoMCwwLDAsMCk7XCJcbiAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgaWQ9JHtpZH1cbiAgICAgICAgICBjbGFzcz1cImhhbmRsZSAke2lkfVwiXG4gICAgICAgICAgY3g9JHsgdGhpcy5fcjAgKyB0aGlzLl9yQXJjKk1hdGguY29zKHRoZXRhKSB9XG4gICAgICAgICAgY3k9JHsgdGhpcy5fcjAgKyB0aGlzLl9yQXJjKk1hdGguc2luKHRoZXRhKSB9XG4gICAgICAgICAgcj0ke3RoaXMuaGFuZGxlU2l6ZX1cbiAgICAgICAgPjwvY2lyY2xlPlxuICAgICAgYFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdXAsIGxlZnQsIHdpZHRoLCBoZWlnaHQ7XG4gICAgKHt1cCwgbGVmdCwgd2lkdGgsIGhlaWdodH0gPSB0aGlzLl9nZXRCb3VuZGFyaWVzKCkpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPGRpdlxuICAgICAgQG1vdXNlZG93bj0ke3RoaXMuZHJhZ1N0YXJ0fVxuICAgICAgQHRvdWNoc3RhcnQ9JHt0aGlzLmRyYWdTdGFydH1cbiAgICAgIHN0eWxlPVwiXG4gICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0fXB4O1xuICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICAgXCJcbiAgICA+XG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG49XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHZpZXdCb3g9XCIke3RoaXMuX3IwIC0gbGVmdH0gJHt0aGlzLl9yMCAtIHVwfSAke3dpZHRofSAke2hlaWdodH1cIlxuICAgICAgPlxuICAgICAgICA8ZyBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cInBhdGhcIlxuICAgICAgICAgICAgZD0ke3RoaXMuX3JlbmRlckFyYyh0aGlzLl9zdGFydCwgdGhpcy5fZW5kKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICR7IHRoaXMuX2lzRGlzYWJsZWRcbiAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgIDogc3ZnYFxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cImJhclwiXG4gICAgICAgICAgICBkPSR7dGhpcy5fcmVuZGVyQXJjKFxuICAgICAgICAgICAgICB0aGlzLl9zdGFydCt0aGlzLl9sZW4qKHRoaXMubG93ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3ZhbHVlRnJhYyhcImxvd1wiKVxuICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB0aGlzLl9zdGFydCt0aGlzLl9sZW4qKCh0aGlzLmhpZ2ggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IHRoaXMuX3ZhbHVlRnJhYyhcImhpZ2hcIilcbiAgICAgICAgICAgICAgICA6IHRoaXMuX3ZhbHVlRnJhYyhcInZhbHVlXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2c+XG5cbiAgICAgICAgJHsgdGhpcy5faXNEaXNhYmxlZFxuICAgICAgICAgID8gJydcbiAgICAgICAgICA6IHN2Z2BcbiAgICAgICAgICA8ZyBjbGFzcz1cImhhbmRsZXNcIj5cbiAgICAgICAgICAkeyB0aGlzLmxvdyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRoaXMuX3JldmVyc2VPcmRlclxuICAgICAgICAgICAgICA/IGh0bWxgJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJoaWdoXCIpfSAke3RoaXMuX3JlbmRlckhhbmRsZShcImxvd1wiKX1gXG4gICAgICAgICAgICAgIDogaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcImxvd1wiKX0gJHt0aGlzLl9yZW5kZXJIYW5kbGUoXCJoaWdoXCIpfWBcbiAgICAgICAgICAgIDogaHRtbGAke3RoaXMuX3JlbmRlckhhbmRsZShcInZhbHVlXCIpfWBcbiAgICAgICAgICB9XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIGB9XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIC5zbGlkZXIge1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLXJvdW5kLXNsaWRlci1wYXRoLXdpZHRoLCAzKTtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHZhcigtLXJvdW5kLXNsaWRlci1saW5lY2FwLCByb3VuZCk7XG4gICAgICB9XG4gICAgICAucGF0aCB7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tcm91bmQtc2xpZGVyLXBhdGgtY29sb3IsIGxpZ2h0Z3JheSk7XG4gICAgICB9XG4gICAgICAuYmFyIHtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1yb3VuZC1zbGlkZXItYmFyLWNvbG9yLCBkZWVwc2t5Ymx1ZSk7XG4gICAgICB9XG4gICAgICAuaGFuZGxlcyB7XG4gICAgICAgIGZpbGw6IHZhcigtLXJvdW5kLXNsaWRlci1oYW5kbGUtY29sb3IsIHZhcigtLXJvdW5kLXNsaWRlci1iYXItY29sb3IsIGRlZXBza3libHVlKSk7XG4gICAgICB9XG4gICAgICAuaGFuZGxlcyAubG93IHtcbiAgICAgICAgZmlsbDogdmFyKC0tcm91bmQtc2xpZGVyLWxvdy1oYW5kbGUtY29sb3IpO1xuICAgICAgfVxuICAgICAgLmhhbmRsZXMgLmhpZ2gge1xuICAgICAgICBmaWxsOiB2YXIoLS1yb3VuZC1zbGlkZXItaGlnaC1oYW5kbGUtY29sb3IpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JvdW5kLXNsaWRlcicsIFJvdW5kU2xpZGVyKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxOCBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IEF0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUHJvcGVydHlQYXJ0IH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuLyoqXG4gKiBTdG9yZXMgdGhlIFN0eWxlSW5mbyBvYmplY3QgYXBwbGllZCB0byBhIGdpdmVuIEF0dHJpYnV0ZVBhcnQuXG4gKiBVc2VkIHRvIHVuc2V0IGV4aXN0aW5nIHZhbHVlcyB3aGVuIGEgbmV3IFN0eWxlSW5mbyBvYmplY3QgaXMgYXBwbGllZC5cbiAqL1xuY29uc3Qgc3R5bGVNYXBDYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXBwbGllcyBDU1MgcHJvcGVydGllcyB0byBhbiBlbGVtZW50LlxuICpcbiAqIGBzdHlsZU1hcGAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHlcbiAqIGV4cHJlc3Npb24gaW4gdGhlIGF0dHJpYnV0ZS4gSXQgdGFrZXMgdGhlIHByb3BlcnR5IG5hbWVzIGluIHRoZSBgc3R5bGVJbmZvYFxuICogb2JqZWN0IGFuZCBhZGRzIHRoZSBwcm9wZXJ0eSB2YWx1ZXMgYXMgQ1NTIHByb3BlcnRlcy4gUHJvcGVydHkgbmFtZXMgd2l0aFxuICogZGFzaGVzIChgLWApIGFyZSBhc3N1bWVkIHRvIGJlIHZhbGlkIENTUyBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZVxuICogZWxlbWVudCdzIHN0eWxlIG9iamVjdCB1c2luZyBgc2V0UHJvcGVydHkoKWAuIE5hbWVzIHdpdGhvdXQgZGFzaGVzIGFyZVxuICogYXNzdW1lZCB0byBiZSBjYW1lbENhc2VkIEphdmFTY3JpcHQgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGUgZWxlbWVudCdzXG4gKiBzdHlsZSBvYmplY3QgdXNpbmcgcHJvcGVydHkgYXNzaWdubWVudCwgYWxsb3dpbmcgdGhlIHN0eWxlIG9iamVjdCB0b1xuICogdHJhbnNsYXRlIEphdmFTY3JpcHQtc3R5bGUgbmFtZXMgdG8gQ1NTIHByb3BlcnR5IG5hbWVzLlxuICpcbiAqIEZvciBleGFtcGxlIGBzdHlsZU1hcCh7YmFja2dyb3VuZENvbG9yOiAncmVkJywgJ2JvcmRlci10b3AnOiAnNXB4JywgJy0tc2l6ZSc6XG4gKiAnMCd9KWAgc2V0cyB0aGUgYGJhY2tncm91bmQtY29sb3JgLCBgYm9yZGVyLXRvcGAgYW5kIGAtLXNpemVgIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHN0eWxlSW5mbyB7U3R5bGVJbmZvfVxuICovXG5leHBvcnQgY29uc3Qgc3R5bGVNYXAgPSBkaXJlY3RpdmUoKHN0eWxlSW5mbykgPT4gKHBhcnQpID0+IHtcbiAgICBpZiAoIShwYXJ0IGluc3RhbmNlb2YgQXR0cmlidXRlUGFydCkgfHwgKHBhcnQgaW5zdGFuY2VvZiBQcm9wZXJ0eVBhcnQpIHx8XG4gICAgICAgIHBhcnQuY29tbWl0dGVyLm5hbWUgIT09ICdzdHlsZScgfHwgcGFydC5jb21taXR0ZXIucGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgc3R5bGVNYXBgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gdGhlIHN0eWxlIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgICAgICdhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuJyk7XG4gICAgfVxuICAgIGNvbnN0IHsgY29tbWl0dGVyIH0gPSBwYXJ0O1xuICAgIGNvbnN0IHsgc3R5bGUgfSA9IGNvbW1pdHRlci5lbGVtZW50O1xuICAgIC8vIEhhbmRsZSBzdGF0aWMgc3R5bGVzIHRoZSBmaXJzdCB0aW1lIHdlIHNlZSBhIFBhcnRcbiAgICBpZiAoIXN0eWxlTWFwQ2FjaGUuaGFzKHBhcnQpKSB7XG4gICAgICAgIHN0eWxlLmNzc1RleHQgPSBjb21taXR0ZXIuc3RyaW5ncy5qb2luKCcgJyk7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBvbGQgcHJvcGVydGllcyB0aGF0IG5vIGxvbmdlciBleGlzdCBpbiBzdHlsZUluZm9cbiAgICBjb25zdCBvbGRJbmZvID0gc3R5bGVNYXBDYWNoZS5nZXQocGFydCk7XG4gICAgZm9yIChjb25zdCBuYW1lIGluIG9sZEluZm8pIHtcbiAgICAgICAgaWYgKCEobmFtZSBpbiBzdHlsZUluZm8pKSB7XG4gICAgICAgICAgICBpZiAobmFtZS5pbmRleE9mKCctJykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgICAgIHN0eWxlW25hbWVdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCBvciB1cGRhdGUgcHJvcGVydGllc1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSBzdHlsZUluZm9bbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCBzdHlsZUluZm9bbmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0eWxlTWFwQ2FjaGUuc2V0KHBhcnQsIHN0eWxlSW5mbyk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLW1hcC5qcy5tYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBaENBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFpQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwR0E7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFFQTtBQUNBO0FBdUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0hBO0FBQ0E7QUFNQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBV0E7QUFDQTs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBQ0E7QUFNQTtBQUNBO0FBTUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBS0E7QUFFQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQWlCQTs7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFvREE7OztBQXJPQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFxTkE7QUFDQTtBQXlCQTs7OztBQWpTQTtBQUNBO0FBb1NBOzs7Ozs7Ozs7Ozs7QUM1U0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBOzs7OztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFwQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==