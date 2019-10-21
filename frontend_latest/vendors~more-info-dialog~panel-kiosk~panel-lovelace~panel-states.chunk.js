(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],{

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









const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
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





const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWtpb3NrfnBhbmVsLWxvdmVsYWNlfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuQSBzZXQgb2YgbGF5b3V0IGNsYXNzZXMgdGhhdCBsZXQgeW91IHNwZWNpZnkgbGF5b3V0IHByb3BlcnRpZXMgZGlyZWN0bHkgaW5cbm1hcmt1cC4gWW91IG11c3QgaW5jbHVkZSB0aGlzIGZpbGUgaW4gZXZlcnkgZWxlbWVudCB0aGF0IG5lZWRzIHRvIHVzZSB0aGVtLlxuXG5TYW1wbGUgdXNlOlxuXG4gICAgaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlcy5qcyc7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAudGVzdCB7IHdpZHRoOiAxMDBweDsgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBjZW50ZXItY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0XCI+aG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyIGFsaWdubWVudDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQpO1xuXG5UaGUgZm9sbG93aW5nIGltcG9ydHMgYXJlIGF2YWlsYWJsZTpcbiAtIGlyb24tZmxleFxuIC0gaXJvbi1mbGV4LXJldmVyc2VcbiAtIGlyb24tZmxleC1hbGlnbm1lbnRcbiAtIGlyb24tZmxleC1mYWN0b3JzXG4gLSBpcm9uLXBvc2l0aW9uaW5nXG4qL1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4vKiBNb3N0IGNvbW1vbiB1c2VkIGZsZXggc3R5bGVzKi9cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1mbGV4XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAubGF5b3V0Lmhvcml6b250YWwsXG4gICAgICAubGF5b3V0LnZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5pbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0Lmhvcml6b250YWwge1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LnZlcnRpY2FsIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC53cmFwIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5uby13cmFwIHtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXIsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuY2VudGVyLWp1c3RpZmllZCxcbiAgICAgIC5sYXlvdXQuY2VudGVyLWNlbnRlciB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4IHtcbiAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtYXV0byB7XG4gICAgICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LW5vbmUge1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBCYXNpYyBmbGV4Ym94IHJldmVyc2Ugc3R5bGVzICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1yZXZlcnNlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAubGF5b3V0Lmhvcml6b250YWwtcmV2ZXJzZSxcbiAgICAgIC5sYXlvdXQudmVydGljYWwtcmV2ZXJzZSB7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuaG9yaXpvbnRhbC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC52ZXJ0aWNhbC1yZXZlcnNlIHtcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC53cmFwLXJldmVyc2Uge1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBGbGV4Ym94IGFsaWdubWVudCAqL1xuPGRvbS1tb2R1bGUgaWQ9XCJpcm9uLWZsZXgtYWxpZ25tZW50XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAvKipcbiAgICAgICAqIEFsaWdubWVudCBpbiBjcm9zcyBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0IHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5jZW50ZXIsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuZW5kIHtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5iYXNlbGluZSB7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbm1lbnQgaW4gbWFpbiBheGlzLlxuICAgICAgICovXG4gICAgICAubGF5b3V0LnN0YXJ0LWp1c3RpZmllZCB7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1qdXN0aWZpZWQsXG4gICAgICAubGF5b3V0LmNlbnRlci1jZW50ZXIge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmVuZC1qdXN0aWZpZWQge1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5hcm91bmQtanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuanVzdGlmaWVkIHtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZWxmIGFsaWdubWVudC5cbiAgICAgICAqL1xuICAgICAgLnNlbGYtc3RhcnQge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1jZW50ZXIge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1lbmQge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAuc2VsZi1zdHJldGNoIHtcbiAgICAgICAgLW1zLWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgICAgIH1cblxuICAgICAgLnNlbGYtYmFzZWxpbmUge1xuICAgICAgICAtbXMtYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogYmFzZWxpbmU7XG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIG11bHRpLWxpbmUgYWxpZ25tZW50IGluIG1haW4gYXhpcy5cbiAgICAgICAqL1xuICAgICAgLmxheW91dC5zdGFydC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdGFydDsgIC8qIElFMTAgKi9cbiAgICAgICAgLW1zLWFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgLmxheW91dC5lbmQtYWxpZ25lZCB7XG4gICAgICAgIC1tcy1mbGV4LWxpbmUtcGFjazogZW5kOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmNlbnRlci1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7ICAvKiBJRTEwICovXG4gICAgICAgIC1tcy1hbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5sYXlvdXQuYmV0d2Vlbi1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBqdXN0aWZ5OyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAubGF5b3V0LmFyb3VuZC1hbGlnbmVkIHtcbiAgICAgICAgLW1zLWZsZXgtbGluZS1wYWNrOiBkaXN0cmlidXRlOyAgLyogSUUxMCAqL1xuICAgICAgICAtbXMtYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+XG4vKiBOb24tZmxleGJveCBwb3NpdGlvbmluZyBoZWxwZXIgc3R5bGVzICovXG48ZG9tLW1vZHVsZSBpZD1cImlyb24tZmxleC1mYWN0b3JzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuZmxleCxcbiAgICAgIC5mbGV4LTEge1xuICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgfVxuXG4gICAgICAuZmxleC0yIHtcbiAgICAgICAgLW1zLWZsZXg6IDI7XG4gICAgICAgIC13ZWJraXQtZmxleDogMjtcbiAgICAgICAgZmxleDogMjtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMyB7XG4gICAgICAgIC1tcy1mbGV4OiAzO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDM7XG4gICAgICAgIGZsZXg6IDM7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTQge1xuICAgICAgICAtbXMtZmxleDogNDtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA0O1xuICAgICAgICBmbGV4OiA0O1xuICAgICAgfVxuXG4gICAgICAuZmxleC01IHtcbiAgICAgICAgLW1zLWZsZXg6IDU7XG4gICAgICAgIC13ZWJraXQtZmxleDogNTtcbiAgICAgICAgZmxleDogNTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtNiB7XG4gICAgICAgIC1tcy1mbGV4OiA2O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDY7XG4gICAgICAgIGZsZXg6IDY7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTcge1xuICAgICAgICAtbXMtZmxleDogNztcbiAgICAgICAgLXdlYmtpdC1mbGV4OiA3O1xuICAgICAgICBmbGV4OiA3O1xuICAgICAgfVxuXG4gICAgICAuZmxleC04IHtcbiAgICAgICAgLW1zLWZsZXg6IDg7XG4gICAgICAgIC13ZWJraXQtZmxleDogODtcbiAgICAgICAgZmxleDogODtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtOSB7XG4gICAgICAgIC1tcy1mbGV4OiA5O1xuICAgICAgICAtd2Via2l0LWZsZXg6IDk7XG4gICAgICAgIGZsZXg6IDk7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4LTEwIHtcbiAgICAgICAgLW1zLWZsZXg6IDEwO1xuICAgICAgICAtd2Via2l0LWZsZXg6IDEwO1xuICAgICAgICBmbGV4OiAxMDtcbiAgICAgIH1cblxuICAgICAgLmZsZXgtMTEge1xuICAgICAgICAtbXMtZmxleDogMTE7XG4gICAgICAgIC13ZWJraXQtZmxleDogMTE7XG4gICAgICAgIGZsZXg6IDExO1xuICAgICAgfVxuXG4gICAgICAuZmxleC0xMiB7XG4gICAgICAgIC1tcy1mbGV4OiAxMjtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxMjtcbiAgICAgICAgZmxleDogMTI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5cbjxkb20tbW9kdWxlIGlkPVwiaXJvbi1wb3NpdGlvbmluZ1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLmJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW52aXNpYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5yZWxhdGl2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICBib2R5LmZ1bGxibGVlZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbCB7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC8qIGZpeGVkIHBvc2l0aW9uICovXG4gICAgICAuZml4ZWQtYm90dG9tLFxuICAgICAgLmZpeGVkLWxlZnQsXG4gICAgICAuZml4ZWQtcmlnaHQsXG4gICAgICAuZml4ZWQtdG9wIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtdG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLXJpZ2h0IHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAuZml4ZWQtYm90dG9tIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLmZpeGVkLWxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cblNoYXJlZCBzdHlsZXMgdGhhdCB5b3UgY2FuIGFwcGx5IHRvIGFuIGVsZW1lbnQgdG8gcmVuZGVycyB0d28gc2hhZG93cyBvbiB0b3Bcbm9mIGVhY2ggb3RoZXIsdGhhdCBjcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxjdXN0b20tc3R5bGU+XG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8L2N1c3RvbS1zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJwYXBlci1tYXRlcmlhbFwiIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgIC4uLiBjb250ZW50IC4uLlxuICAgIDwvZGl2PlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblxuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnLi4vc2hhZG93LmpzJztcblxuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCB7XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNToge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjFcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG4gICAgICAucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiM1wiXSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjRcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG5cbiAgICAgIC8qIER1cGxpY2F0ZSB0aGUgc3R5bGVzIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MvaXNzdWVzLzE5MyAqL1xuICAgICAgOmhvc3Qge1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsOiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00OiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWwpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMWJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=