(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~ha-store-auth-card~more-info-dialog~panel-kiosk~panel-states"],{

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"paper-material-styles\">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class=\"header\">\n      <iron-image hidden$=\"[[!image]]\" aria-hidden$=\"[[_isHidden(image)]]\" src=\"[[image]]\" alt=\"[[alt]]\" placeholder=\"[[placeholderImage]]\" preload=\"[[preloadImage]]\" fade=\"[[fadeImage]]\"></iron-image>\n      <div hidden$=\"[[!heading]]\" class$=\"title-text [[_computeHeadingClass(image)]]\">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n"], ["\n    <style include=\"paper-material-styles\">\n      :host {\n        display: inline-block;\n        position: relative;\n        box-sizing: border-box;\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n        border-radius: 2px;\n\n        @apply --paper-font-common-base;\n        @apply --paper-card;\n      }\n\n      /* IE 10 support for HTML5 hidden attr */\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      .header {\n        position: relative;\n        border-top-left-radius: inherit;\n        border-top-right-radius: inherit;\n        overflow: hidden;\n\n        @apply --paper-card-header;\n      }\n\n      .header iron-image {\n        display: block;\n        width: 100%;\n        --iron-image-width: 100%;\n        pointer-events: none;\n\n        @apply --paper-card-header-image;\n      }\n\n      .header .title-text {\n        padding: 16px;\n        font-size: 24px;\n        font-weight: 400;\n        color: var(--paper-card-header-color, #000);\n\n        @apply --paper-card-header-text;\n      }\n\n      .header .title-text.over-image {\n        position: absolute;\n        bottom: 0px;\n\n        @apply --paper-card-header-image-text;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n        position:relative;\n\n        @apply --paper-card-content;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n        position:relative;\n\n        @apply --paper-card-actions;\n      }\n\n      :host([elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n\n      :host([elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n\n      :host([elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n\n      :host([elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n\n      :host([elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n\n    <div class=\"header\">\n      <iron-image hidden\\$=\"[[!image]]\" aria-hidden\\$=\"[[_isHidden(image)]]\" src=\"[[image]]\" alt=\"[[alt]]\" placeholder=\"[[placeholderImage]]\" preload=\"[[preloadImage]]\" fade=\"[[fadeImage]]\"></iron-image>\n      <div hidden\\$=\"[[!heading]]\" class\\$=\"title-text [[_computeHeadingClass(image)]]\">[[heading]]</div>\n    </div>\n\n    <slot></slot>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject()),
  is: 'paper-card',
  properties: {
    /**
     * The title of the card.
     */
    heading: {
      type: String,
      value: '',
      observer: '_headingChanged'
    },

    /**
     * The url of the title image of the card.
     */
    image: {
      type: String,
      value: ''
    },

    /**
     * The text alternative of the card's title image.
     */
    alt: {
      type: String
    },

    /**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */
    preloadImage: {
      type: Boolean,
      value: false
    },

    /**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */
    fadeImage: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholderImage: {
      type: String,
      value: null
    },

    /**
     * The z-depth of the card, from 0-5.
     */
    elevation: {
      type: Number,
      value: 1,
      reflectToAttribute: true
    },

    /**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */
    animatedShadow: {
      type: Boolean,
      value: false
    },

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
  _isHidden: function _isHidden(image) {
    return image ? 'false' : 'true';
  },
  _headingChanged: function _headingChanged(heading) {
    var currentHeading = this.getAttribute('heading'),
        currentLabel = this.getAttribute('aria-label');

    if (typeof currentLabel !== 'string' || currentLabel === currentHeading) {
      this.setAttribute('aria-label', heading);
    }
  },
  _computeHeadingClass: function _computeHeadingClass(image) {
    return image ? ' over-image' : '';
  },
  _computeAnimated: function _computeAnimated(animatedShadow) {
    return animatedShadow;
  }
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35oYS1zdG9yZS1hdXRoLWNhcmR+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWltYWdlL2lyb24taW1hZ2UuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bQ2FyZHNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9jYXJkcy5odG1sKVxuXG5gcGFwZXItY2FyZGAgaXMgYSBjb250YWluZXIgd2l0aCBhIGRyb3Agc2hhZG93LlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5Tb21lIGNvbnRlbnQ8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5Tb21lIGFjdGlvbjwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1jYXJkPlxuXG5FeGFtcGxlIC0gdG9wIGNhcmQgaW1hZ2U6XG5cbiAgICA8cGFwZXItY2FyZCBoZWFkaW5nPVwiQ2FyZCBUaXRsZVwiIGltYWdlPVwiL3BhdGgvdG8vaW1hZ2UucG5nXCIgYWx0PVwiaW1hZ2VcIj5cbiAgICAgIC4uLlxuICAgIDwvcGFwZXItY2FyZD5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQnkgZGVmYXVsdCwgdGhlIGBhcmlhLWxhYmVsYCB3aWxsIGJlIHNldCB0byB0aGUgdmFsdWUgb2YgdGhlIGBoZWFkaW5nYFxuYXR0cmlidXRlLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBjYXJkIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3JgIHwgVGhlIGNvbG9yIG9mIHRoZSBoZWFkZXIgdGV4dCB8IGAjMDAwYFxuYC0tcGFwZXItY2FyZC1oZWFkZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLXRleHRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGl0bGUgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlLXRleHRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGV4dCBvdmVybGFwcGluZyB0aGUgaW1hZ2UgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWNvbnRlbnRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBjb250ZW50IHNlY3Rpb258IGB7fWBcbmAtLXBhcGVyLWNhcmQtYWN0aW9uc2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGFjdGlvbiBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIHwgYHt9YFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWNhcmRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkO1xuICAgICAgfVxuXG4gICAgICAvKiBJRSAxMCBzdXBwb3J0IGZvciBIVE1MNSBoaWRkZW4gYXR0ciAqL1xuICAgICAgOmhvc3QoW2hpZGRlbl0pLCBbaGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXI7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgaXJvbi1pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS1pcm9uLWltYWdlLXdpZHRoOiAxMDAlO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZTtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtaGVhZGVyLWNvbG9yLCAjMDAwKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci10ZXh0O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC50aXRsZS10ZXh0Lm92ZXItaW1hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlLXRleHQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtY29udGVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWFjdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIxXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMlwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCI0XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgPGlyb24taW1hZ2UgaGlkZGVuXFwkPVwiW1shaW1hZ2VdXVwiIGFyaWEtaGlkZGVuXFwkPVwiW1tfaXNIaWRkZW4oaW1hZ2UpXV1cIiBzcmM9XCJbW2ltYWdlXV1cIiBhbHQ9XCJbW2FsdF1dXCIgcGxhY2Vob2xkZXI9XCJbW3BsYWNlaG9sZGVySW1hZ2VdXVwiIHByZWxvYWQ9XCJbW3ByZWxvYWRJbWFnZV1dXCIgZmFkZT1cIltbZmFkZUltYWdlXV1cIj48L2lyb24taW1hZ2U+XG4gICAgICA8ZGl2IGhpZGRlblxcJD1cIltbIWhlYWRpbmddXVwiIGNsYXNzXFwkPVwidGl0bGUtdGV4dCBbW19jb21wdXRlSGVhZGluZ0NsYXNzKGltYWdlKV1dXCI+W1toZWFkaW5nXV08L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1jYXJkJyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIHRpdGxlIG9mIHRoZSBjYXJkLlxuICAgICAqL1xuICAgIGhlYWRpbmc6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJywgb2JzZXJ2ZXI6ICdfaGVhZGluZ0NoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB1cmwgb2YgdGhlIHRpdGxlIGltYWdlIG9mIHRoZSBjYXJkLlxuICAgICAqL1xuICAgIGltYWdlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgYWx0ZXJuYXRpdmUgb2YgdGhlIGNhcmQncyB0aXRsZSBpbWFnZS5cbiAgICAgKi9cbiAgICBhbHQ6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgdHJ1ZWAsIGFueSBjaGFuZ2UgdG8gdGhlIGltYWdlIHVybCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZVxuICAgICAqIGBwbGFjZWhvbGRlcmAgaW1hZ2UgdG8gYmUgc2hvd24gdW50aWwgdGhlIGltYWdlIGlzIGZ1bGx5IHJlbmRlcmVkLlxuICAgICAqL1xuICAgIHByZWxvYWRJbWFnZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGBwcmVsb2FkSW1hZ2VgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVJbWFnZWAgdG8gdHJ1ZSB3aWxsIGNhdXNlIHRoZVxuICAgICAqIGltYWdlIHRvIGZhZGUgaW50byBwbGFjZS5cbiAgICAgKi9cbiAgICBmYWRlSW1hZ2U6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpbWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBiYWNrZ3JvdW5kL3BsYWNlaG9sZGVyIHVudGlsIHRoZSBzcmMgaW1hZ2VcbiAgICAgKiBoYXMgbG9hZGVkLiBVc2Ugb2YgYSBkYXRhLVVSSSBmb3IgcGxhY2Vob2xkZXIgaXMgZW5jb3VyYWdlZCBmb3IgaW5zdGFudFxuICAgICAqIHJlbmRlcmluZy5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlckltYWdlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgei1kZXB0aCBvZiB0aGUgY2FyZCwgZnJvbSAwLTUuXG4gICAgICovXG4gICAgZWxldmF0aW9uOiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgdG8gYW5pbWF0ZSB0aGUgY2FyZCBzaGFkb3cgd2hlbiBzZXR0aW5nIGEgbmV3XG4gICAgICogYHpgIHZhbHVlLlxuICAgICAqL1xuICAgIGFuaW1hdGVkU2hhZG93OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFJlYWQtb25seSBwcm9wZXJ0eSB1c2VkIHRvIHBhc3MgZG93biB0aGUgYGFuaW1hdGVkU2hhZG93YCB2YWx1ZSB0b1xuICAgICAqIHRoZSB1bmRlcmx5aW5nIHBhcGVyLW1hdGVyaWFsIHN0eWxlIChzaW5jZSB0aGV5IGhhdmUgZGlmZmVyZW50IG5hbWVzKS5cbiAgICAgKi9cbiAgICBhbmltYXRlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgY29tcHV0ZWQ6ICdfY29tcHV0ZUFuaW1hdGVkKGFuaW1hdGVkU2hhZG93KSdcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcm1hdCBmdW5jdGlvbiBmb3IgYXJpYS1oaWRkZW4uIFVzZSB0aGUgISBvcGVyYXRvciByZXN1bHRzIGluIHRoZVxuICAgKiBlbXB0eSBzdHJpbmcgd2hlbiBnaXZlbiBhIGZhbHN5IHZhbHVlLlxuICAgKi9cbiAgX2lzSGlkZGVuOiBmdW5jdGlvbihpbWFnZSkge1xuICAgIHJldHVybiBpbWFnZSA/ICdmYWxzZScgOiAndHJ1ZSc7XG4gIH0sXG5cbiAgX2hlYWRpbmdDaGFuZ2VkOiBmdW5jdGlvbihoZWFkaW5nKSB7XG4gICAgdmFyIGN1cnJlbnRIZWFkaW5nID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnKSxcbiAgICAgICAgY3VycmVudExhYmVsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblxuICAgIGlmICh0eXBlb2YgY3VycmVudExhYmVsICE9PSAnc3RyaW5nJyB8fCBjdXJyZW50TGFiZWwgPT09IGN1cnJlbnRIZWFkaW5nKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGhlYWRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBfY29tcHV0ZUhlYWRpbmdDbGFzczogZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICByZXR1cm4gaW1hZ2UgPyAnIG92ZXItaW1hZ2UnIDogJyc7XG4gIH0sXG5cbiAgX2NvbXB1dGVBbmltYXRlZDogZnVuY3Rpb24oYW5pbWF0ZWRTaGFkb3cpIHtcbiAgICByZXR1cm4gYW5pbWF0ZWRTaGFkb3c7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cblNoYXJlZCBzdHlsZXMgdGhhdCB5b3UgY2FuIGFwcGx5IHRvIGFuIGVsZW1lbnQgdG8gcmVuZGVycyB0d28gc2hhZG93cyBvbiB0b3Bcbm9mIGVhY2ggb3RoZXIsdGhhdCBjcmVhdGUgdGhlIGVmZmVjdCBvZiBhIGxpZnRlZCBwaWVjZSBvZiBwYXBlci5cblxuRXhhbXBsZTpcblxuICAgIDxjdXN0b20tc3R5bGU+XG4gICAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8L2N1c3RvbS1zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJwYXBlci1tYXRlcmlhbFwiIGVsZXZhdGlvbj1cIjFcIj5cbiAgICAgIC4uLiBjb250ZW50IC4uLlxuICAgIDwvZGl2PlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblxuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnLi4vc2hhZG93LmpzJztcblxuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG48ZG9tLW1vZHVsZSBpZD1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgaHRtbCB7XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTJkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMjoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNGRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi02ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLThkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNToge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjFcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG4gICAgICAucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiM1wiXSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuICAgICAgLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjRcIl0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG5cbiAgICAgIC8qIER1cGxpY2F0ZSB0aGUgc3R5bGVzIGJlY2F1c2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL3dlYmNvbXBvbmVudHMvc2hhZHljc3MvaXNzdWVzLzE5MyAqL1xuICAgICAgOmhvc3Qge1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsOiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xOiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTRkcDtcbiAgICAgICAgfTtcbiAgICAgICAgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMzoge1xuICAgICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tNmRwO1xuICAgICAgICB9O1xuICAgICAgICAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi00OiB7XG4gICAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi04ZHA7XG4gICAgICAgIH07XG4gICAgICAgIC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU6IHtcbiAgICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWwpIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWw7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuICAgICAgOmhvc3QoLnBhcGVyLW1hdGVyaWFsW2VsZXZhdGlvbj1cIjNcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTM7XG4gICAgICB9XG4gICAgICA6aG9zdCgucGFwZXItbWF0ZXJpYWxbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5wYXBlci1tYXRlcmlhbFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7QUFDQTtBQWdHQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWxEQTtBQUNBO0FBeURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUVBO0FBQ0E7QUF1RkE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9