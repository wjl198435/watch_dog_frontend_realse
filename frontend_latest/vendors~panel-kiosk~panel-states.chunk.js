(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-kiosk~panel-states"],{

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement, classMap, observer, addHasRemoveClass, BaseElement, FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["classMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

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


class FormElement extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    click() {
        if (this.formElement) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    setAriaLabel(label) {
        if (this.formElement) {
            this.formElement.setAttribute('aria-label', label);
        }
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcRoot.addEventListener('change', (e) => {
            this.dispatchEvent(new Event('change', e));
        });
    }
}
//# sourceMappingURL=form-element.js.map

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

/***/ "./node_modules/@polymer/iron-pages/iron-pages.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-pages/iron-pages.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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







/**
`iron-pages` is used to select one of its children to show. One use is to cycle
through a list of children "pages".

Example:

    <iron-pages selected="0">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </iron-pages>

    <script>
      document.addEventListener('click', function(e) {
        var pages = document.querySelector('iron-pages');
        pages.selectNext();
      });
    </script>

@group Iron Elements
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-pages',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"], _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronSelectableBehavior"]],

  properties: {

    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {type: String, value: null}

  },

  observers: ['_selectedPageChanged(selected)'],

  _selectedPageChanged: function(selected, old) {
    this.async(this.notifyResize);
  }
});


/***/ }),

/***/ "./node_modules/@polymer/paper-card/paper-card.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-card/paper-card.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_image_iron_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-image/iron-image.js */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles.js */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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









/**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

`paper-card` is a container with a drop shadow.

Example:

    <paper-card heading="Card Title">
      <div class="card-content">Some content</div>
      <div class="card-actions">
        <paper-button>Some action</paper-button>
      </div>
    </paper-card>

Example - top card image:

    <paper-card heading="Card Title" image="/path/to/image.png" alt="image">
      ...
    </paper-card>

### Accessibility

By default, the `aria-label` will be set to the value of the `heading`
attribute.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-card-background-color` | The background color of the card | `--primary-background-color`
`--paper-card-header-color` | The color of the header text | `#000`
`--paper-card-header` | Mixin applied to the card header section | `{}`
`--paper-card-header-text` | Mixin applied to the title in the card header section | `{}`
`--paper-card-header-image` | Mixin applied to the image in the card header section | `{}`
`--paper-card-header-image-text` | Mixin applied to the text overlapping the image in the card header section | `{}`
`--paper-card-content` | Mixin applied to the card content section| `{}`
`--paper-card-actions` | Mixin applied to the card action section | `{}`
`--paper-card` | Mixin applied to the card | `{}`

@group Paper Elements
@element paper-card
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,

  is: 'paper-card',

  properties: {
    /**
     * The title of the card.
     */
    heading: {type: String, value: '', observer: '_headingChanged'},

    /**
     * The url of the title image of the card.
     */
    image: {type: String, value: ''},

    /**
     * The text alternative of the card's title image.
     */
    alt: {type: String},

    /**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */
    preloadImage: {type: Boolean, value: false},

    /**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */
    fadeImage: {type: Boolean, value: false},

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholderImage: {type: String, value: null},

    /**
     * The z-depth of the card, from 0-5.
     */
    elevation: {type: Number, value: 1, reflectToAttribute: true},

    /**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */
    animatedShadow: {type: Boolean, value: false},

    /**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */
    animated: {
      type: Boolean,
      reflectToAttribute: true,
      readOnly: true,
      computed: '_computeAnimated(animatedShadow)'
    }
  },

  /**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */
  _isHidden: function(image) {
    return image ? 'false' : 'true';
  },

  _headingChanged: function(heading) {
    var currentHeading = this.getAttribute('heading'),
        currentLabel = this.getAttribute('aria-label');

    if (typeof currentLabel !== 'string' || currentLabel === currentHeading) {
      this.setAttribute('aria-label', heading);
    }
  },

  _computeHeadingClass: function(image) {
    return image ? ' over-image' : '';
  },

  _computeAnimated: function(animatedShadow) {
    return animatedShadow;
  }
});


/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
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

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML =
    `<iron-iconset-svg name="paper-dropdown-menu" size="24">
<svg><defs>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
</defs></svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
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

const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML =
    `<dom-module id="paper-dropdown-menu-shared-styles">
  <template>
    <style>
      :host {
        display: inline-block;
        position: relative;
        text-align: left;

        /* NOTE(cdata): Both values are needed, since some phones require the
         * value to be \`transparent\`.
         */
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;

        --paper-input-container-input: {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          max-width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        };

        @apply --paper-dropdown-menu;
      }

      :host([disabled]) {
        @apply --paper-dropdown-menu-disabled;
      }

      :host([noink]) paper-ripple {
        display: none;
      }

      :host([no-label-float]) paper-ripple {
        top: 8px;
      }

      paper-ripple {
        top: 12px;
        left: 0px;
        bottom: 8px;
        right: 0px;

        @apply --paper-dropdown-menu-ripple;
      }

      paper-menu-button {
        display: block;
        padding: 0;

        @apply --paper-dropdown-menu-button;
      }

      paper-input {
        @apply --paper-dropdown-menu-input;
      }

      iron-icon {
        color: var(--disabled-text-color);

        @apply --paper-dropdown-menu-icon;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;
    if (d.type !== 'RPC') { return; }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [], len = arguments.length;
      while ( len-- ) params[ len ] = arguments[ len ];

      return new Promise(function (a, b) {
      var id = ++c;
      callbacks[id] = [a, b];
      worker.postMessage({
        type: 'RPC',
        id: id,
        method: method,
        params: params
      });
    });
    };
  });
}

module.exports = addMethods;
//# sourceMappingURL=rpc-wrapper.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1iYXNlL2Zvcm0tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvZWZmZWN0cy93YXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tcGFnZXMvaXJvbi1wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdyYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQgfSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgICAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi9hcHAtc2Nyb2xsLWVmZmVjdHMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge3JlZ2lzdGVyRWZmZWN0fSBmcm9tICcuLi8uLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuLyoqXG4gKiBUb2dnbGVzIHRoZSBzaGFkb3cgcHJvcGVydHkgaW4gYXBwLWhlYWRlciB3aGVuIGNvbnRlbnQgaXMgc2Nyb2xsZWQgdG8gY3JlYXRlXG4gKiBhIHNlbnNlIG9mIGRlcHRoIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHRoZSBjb250ZW50IHVuZGVybmVhdGguXG4gKi9cbnJlZ2lzdGVyRWZmZWN0KCd3YXRlcmZhbGwnLCB7XG4gIC8qKlxuICAgKiAgQHRoaXMgUG9seW1lci5BcHBMYXlvdXQuRWxlbWVudFdpdGhCYWNrZ3JvdW5kXG4gICAqL1xuICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuaXNPblNjcmVlbigpICYmIHRoaXMuaXNDb250ZW50QmVsb3coKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvblJlc2l6YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYGlyb24tcGFnZXNgIGlzIHVzZWQgdG8gc2VsZWN0IG9uZSBvZiBpdHMgY2hpbGRyZW4gdG8gc2hvdy4gT25lIHVzZSBpcyB0byBjeWNsZVxudGhyb3VnaCBhIGxpc3Qgb2YgY2hpbGRyZW4gXCJwYWdlc1wiLlxuXG5FeGFtcGxlOlxuXG4gICAgPGlyb24tcGFnZXMgc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8ZGl2Pk9uZTwvZGl2PlxuICAgICAgPGRpdj5Ud288L2Rpdj5cbiAgICAgIDxkaXY+VGhyZWU8L2Rpdj5cbiAgICA8L2lyb24tcGFnZXM+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tcGFnZXMnKTtcbiAgICAgICAgcGFnZXMuc2VsZWN0TmV4dCgpO1xuICAgICAgfSk7XG4gICAgPC9zY3JpcHQ+XG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKDpub3Qoc2xvdCk6bm90KC5pcm9uLXNlbGVjdGVkKSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdpcm9uLXBhZ2VzJyxcbiAgYmVoYXZpb3JzOiBbSXJvblJlc2l6YWJsZUJlaGF2aW9yLCBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvLyBhcyB0aGUgc2VsZWN0ZWQgcGFnZSBpcyB0aGUgb25seSBvbmUgdmlzaWJsZSwgYWN0aXZhdGVFdmVudFxuICAgIC8vIGlzIGJvdGggbm9uLXNlbnNpY2FsIGFuZCBwcm9ibGVtYXRpYzsgZS5nLiBpbiBjYXNlcyB3aGVyZSBhIHVzZXJcbiAgICAvLyBoYW5kbGVyIGF0dGVtcHRzIHRvIGNoYW5nZSB0aGUgcGFnZSBhbmQgdGhlIGFjdGl2YXRlRXZlbnRcbiAgICAvLyBoYW5kbGVyIGltbWVkaWF0ZWx5IGNoYW5nZXMgaXQgYmFja1xuICAgIGFjdGl2YXRlRXZlbnQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zZWxlY3RlZFBhZ2VDaGFuZ2VkKHNlbGVjdGVkKSddLFxuXG4gIF9zZWxlY3RlZFBhZ2VDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3RlZCwgb2xkKSB7XG4gICAgdGhpcy5hc3luYyh0aGlzLm5vdGlmeVJlc2l6ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cbmBwYXBlci1jYXJkYCBpcyBhIGNvbnRhaW5lciB3aXRoIGEgZHJvcCBzaGFkb3cuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItY2FyZCBoZWFkaW5nPVwiQ2FyZCBUaXRsZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlNvbWUgY29udGVudDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPlNvbWUgYWN0aW9uPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbkV4YW1wbGUgLSB0b3AgY2FyZCBpbWFnZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCIgaW1hZ2U9XCIvcGF0aC90by9pbWFnZS5wbmdcIiBhbHQ9XCJpbWFnZVwiPlxuICAgICAgLi4uXG4gICAgPC9wYXBlci1jYXJkPlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5CeSBkZWZhdWx0LCB0aGUgYGFyaWEtbGFiZWxgIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZSBvZiB0aGUgYGhlYWRpbmdgXG5hdHRyaWJ1dGUuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3JgIHwgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGNhcmQgfCBgLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGhlYWRlciB0ZXh0IHwgYCMwMDBgXG5gLS1wYXBlci1jYXJkLWhlYWRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0ZXh0IG92ZXJsYXBwaW5nIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGNvbnRlbnQgc2VjdGlvbnwgYHt9YFxuYC0tcGFwZXItY2FyZC1hY3Rpb25zYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgYWN0aW9uIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgfCBge31gXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItY2FyZFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQ7XG4gICAgICB9XG5cbiAgICAgIC8qIElFIDEwIHN1cHBvcnQgZm9yIEhUTUw1IGhpZGRlbiBhdHRyICovXG4gICAgICA6aG9zdChbaGlkZGVuXSksIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciBpcm9uLWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWlyb24taW1hZ2Utd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC50aXRsZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3IsICMwMDApO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLXRleHQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQub3Zlci1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtYWN0aW9ucztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjFcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiM1wiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjRcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aXJvbi1pbWFnZSBoaWRkZW5cXCQ9XCJbWyFpbWFnZV1dXCIgYXJpYS1oaWRkZW5cXCQ9XCJbW19pc0hpZGRlbihpbWFnZSldXVwiIHNyYz1cIltbaW1hZ2VdXVwiIGFsdD1cIltbYWx0XV1cIiBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJJbWFnZV1dXCIgcHJlbG9hZD1cIltbcHJlbG9hZEltYWdlXV1cIiBmYWRlPVwiW1tmYWRlSW1hZ2VdXVwiPjwvaXJvbi1pbWFnZT5cbiAgICAgIDxkaXYgaGlkZGVuXFwkPVwiW1shaGVhZGluZ11dXCIgY2xhc3NcXCQ9XCJ0aXRsZS10ZXh0IFtbX2NvbXB1dGVIZWFkaW5nQ2xhc3MoaW1hZ2UpXV1cIj5bW2hlYWRpbmddXTwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWNhcmQnLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGNhcmQuXG4gICAgICovXG4gICAgaGVhZGluZzoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnLCBvYnNlcnZlcjogJ19oZWFkaW5nQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCBvZiB0aGUgdGl0bGUgaW1hZ2Ugb2YgdGhlIGNhcmQuXG4gICAgICovXG4gICAgaW1hZ2U6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBhbHRlcm5hdGl2ZSBvZiB0aGUgY2FyZCdzIHRpdGxlIGltYWdlLlxuICAgICAqL1xuICAgIGFsdDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGB0cnVlYCwgYW55IGNoYW5nZSB0byB0aGUgaW1hZ2UgdXJsIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlXG4gICAgICogYHBsYWNlaG9sZGVyYCBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgaW1hZ2UgaXMgZnVsbHkgcmVuZGVyZWQuXG4gICAgICovXG4gICAgcHJlbG9hZEltYWdlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHByZWxvYWRJbWFnZWAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZUltYWdlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlXG4gICAgICogaW1hZ2UgdG8gZmFkZSBpbnRvIHBsYWNlLlxuICAgICAqL1xuICAgIGZhZGVJbWFnZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZVxuICAgICAqIGhhcyBsb2FkZWQuIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50XG4gICAgICogcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVySW1hZ2U6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoZSBjYXJkLCBmcm9tIDAtNS5cbiAgICAgKi9cbiAgICBlbGV2YXRpb246IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBjYXJkIHNoYWRvdyB3aGVuIHNldHRpbmcgYSBuZXdcbiAgICAgKiBgemAgdmFsdWUuXG4gICAgICovXG4gICAgYW5pbWF0ZWRTaGFkb3c6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogUmVhZC1vbmx5IHByb3BlcnR5IHVzZWQgdG8gcGFzcyBkb3duIHRoZSBgYW5pbWF0ZWRTaGFkb3dgIHZhbHVlIHRvXG4gICAgICogdGhlIHVuZGVybHlpbmcgcGFwZXItbWF0ZXJpYWwgc3R5bGUgKHNpbmNlIHRoZXkgaGF2ZSBkaWZmZXJlbnQgbmFtZXMpLlxuICAgICAqL1xuICAgIGFuaW1hdGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBjb21wdXRlZDogJ19jb21wdXRlQW5pbWF0ZWQoYW5pbWF0ZWRTaGFkb3cpJ1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRm9ybWF0IGZ1bmN0aW9uIGZvciBhcmlhLWhpZGRlbi4gVXNlIHRoZSAhIG9wZXJhdG9yIHJlc3VsdHMgaW4gdGhlXG4gICAqIGVtcHR5IHN0cmluZyB3aGVuIGdpdmVuIGEgZmFsc3kgdmFsdWUuXG4gICAqL1xuICBfaXNIaWRkZW46IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgcmV0dXJuIGltYWdlID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgfSxcblxuICBfaGVhZGluZ0NoYW5nZWQ6IGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICB2YXIgY3VycmVudEhlYWRpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaGVhZGluZycpLFxuICAgICAgICBjdXJyZW50TGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50TGFiZWwgIT09ICdzdHJpbmcnIHx8IGN1cnJlbnRMYWJlbCA9PT0gY3VycmVudEhlYWRpbmcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgaGVhZGluZyk7XG4gICAgfVxuICB9LFxuXG4gIF9jb21wdXRlSGVhZGluZ0NsYXNzOiBmdW5jdGlvbihpbWFnZSkge1xuICAgIHJldHVybiBpbWFnZSA/ICcgb3Zlci1pbWFnZScgOiAnJztcbiAgfSxcblxuICBfY29tcHV0ZUFuaW1hdGVkOiBmdW5jdGlvbihhbmltYXRlZFNoYWRvdykge1xuICAgIHJldHVybiBhbmltYXRlZFNoYWRvdztcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uc2V0LXN2Zy9pcm9uLWljb25zZXQtc3ZnLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGlyb24taWNvbnNldC1zdmcgbmFtZT1cInBhcGVyLWRyb3Bkb3duLW1lbnVcIiBzaXplPVwiMjRcIj5cbjxzdmc+PGRlZnM+XG48ZyBpZD1cImFycm93LWRyb3AtZG93blwiPjxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01elwiPjwvcGF0aD48L2c+XG48L2RlZnM+PC9zdmc+XG48L2lyb24taWNvbnNldC1zdmc+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID1cbiAgICBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLyogTk9URShjZGF0YSk6IEJvdGggdmFsdWVzIGFyZSBuZWVkZWQsIHNpbmNlIHNvbWUgcGhvbmVzIHJlcXVpcmUgdGhlXG4gICAgICAgICAqIHZhbHVlIHRvIGJlIFxcYHRyYW5zcGFyZW50XFxgLlxuICAgICAgICAgKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZGlzYWJsZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtub2lua10pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1yaXBwbGU7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b247XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG4gIHZhciBjID0gMDtcbiAgdmFyIGNhbGxiYWNrcyA9IHt9O1xuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGQgPSBlLmRhdGE7XG4gICAgaWYgKGQudHlwZSAhPT0gJ1JQQycpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZC5pZCkge1xuICAgICAgdmFyIGYgPSBjYWxsYmFja3NbZC5pZF07XG5cbiAgICAgIGlmIChmKSB7XG4gICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbZC5pZF07XG5cbiAgICAgICAgaWYgKGQuZXJyb3IpIHtcbiAgICAgICAgICBmWzFdKE9iamVjdC5hc3NpZ24oRXJyb3IoZC5lcnJvci5tZXNzYWdlKSwgZC5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZbMF0oZC5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0RXZlbnQoZC5tZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgICBldnQuZGF0YSA9IGQucGFyYW1zO1xuICAgICAgd29ya2VyLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gIH0pO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHdvcmtlclttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIHBhcmFtc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBpZCA9ICsrYztcbiAgICAgIGNhbGxiYWNrc1tpZF0gPSBbYSwgYl07XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnUlBDJyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1ldGhvZHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ycGMtd3JhcHBlci5qcy5tYXBcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0UEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==