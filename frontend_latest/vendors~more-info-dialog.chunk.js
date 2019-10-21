(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~more-info-dialog"],{

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

/***/ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
app-toolbar is a horizontal toolbar containing items that can be used for
label, navigation, search and actions.

### Example

Add a title to the toolbar.

```html
<app-toolbar>
  <div main-title>App name</div>
</app-toolbar>
```

Add a button to the left and right side of the toolbar.

```html
<app-toolbar>
  <paper-icon-button icon="menu"></paper-icon-button>
  <div main-title>App name</div>
  <paper-icon-button icon="search"></paper-icon-button>
</app-toolbar>
```

You can use the attributes `top-item` or `bottom-item` to completely fit an
element to the top or bottom of the toolbar respectively.

### Content attributes

Attribute            | Description
---------------------|---------------------------------------------------------
`main-title`         | The main title element.
`condensed-title`    | The title element if used inside a condensed app-header.
`spacer`             | Adds a left margin of `64px`.
`bottom-item`        | Sticks the element to the bottom of the toolbar.
`top-item`           | Sticks the element to the top of the toolbar.

### Styling

Custom property              | Description                  | Default
-----------------------------|------------------------------|-----------------------
`--app-toolbar-font-size`    | Toolbar font size            | 20px

@group App Elements
@element app-toolbar
@demo app-toolbar/demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,

  is: 'app-toolbar'
});


/***/ }),

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,

  is: 'iron-icon',

  properties: {

    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {type: String},

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {type: String},

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {type: String},

    /**
     * @type {!IronMeta}
     */
    _meta: {value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {type: 'iconset'})}

  },

  observers: [
    '_updateIcon(_meta, isAttached)',
    '_updateIcon(theme, isAttached)',
    '_srcChanged(src, isAttached)',
    '_iconChanged(icon, isAttached)'
  ],

  _DEFAULT_ICONSET: 'icons',

  _iconChanged: function(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
    this._updateIcon();
  },

  _srcChanged: function(src) {
    this._updateIcon();
  },

  _usesIconset: function() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }
      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset = /** @type {?Polymer.Iconset} */ (
            this._meta.byKey(this._iconsetName));
        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);
          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }
      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});


/***/ }),

/***/ "./node_modules/@polymer/iron-media-query/iron-media-query.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/iron-media-query/iron-media-query.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({

  is: 'iron-media-query',

  properties: {

    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {type: Boolean, value: false, readOnly: true, notify: true},

    /**
     * The CSS media query to evaluate.
     */
    query: {type: String, observer: 'queryChanged'},

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {type: Boolean, value: false},

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function() {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {value: null}
  },

  attached: function() {
    this.style.display = 'none';
    this.queryChanged();
  },

  detached: function() {
    this._remove();
  },

  _add: function() {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },

  _remove: function() {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }
    this._mq = null;
  },

  queryChanged: function() {
    this._remove();
    var query = this.query;
    if (!query) {
      return;
    }
    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }
    this._mq = window.matchMedia(query);
    this._add();
    this.queryHandler(this._mq);
  },

  queryHandler: function(mq) {
    this._setQueryMatches(mq.matches);
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

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js ***!
  \******************************************************************************/
/*! exports provided: PaperDialogBehaviorImpl, PaperDialogBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehaviorImpl", function() { return PaperDialogBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehavior", function() { return PaperDialogBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
  Use `Polymer.PaperDialogBehavior` and `paper-dialog-shared-styles.html` to
  implement a Material Design dialog.

  For example, if `<paper-dialog-impl>` implements this behavior:

      <paper-dialog-impl>
          <h2>Header</h2>
          <div>Dialog body</div>
          <div class="buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm>Accept</paper-button>
          </div>
      </paper-dialog-impl>

  `paper-dialog-shared-styles.html` provide styles for a header, content area,
  and an action area for buttons. Use the `<h2>` tag for the header and the
  `buttons` class for the action area. You can use the `paper-dialog-scrollable`
  element (in its own repository) if you need a scrolling content area.

  Use the `dialog-dismiss` and `dialog-confirm` attributes on interactive
  controls to close the dialog. If the user dismisses the dialog with
  `dialog-confirm`, the `closingReason` will update to include `confirmed:
  true`.

  ### Accessibility

  This element has `role="dialog"` by default. Depending on the context, it may
  be more appropriate to override this attribute with `role="alertdialog"`.

  If `modal` is set, the element will prevent the focus from exiting the
  element. It will also ensure that focus remains in the dialog.

  @hero hero.svg
  @demo demo/index.html
  @polymerBehavior PaperDialogBehavior
 */
const PaperDialogBehaviorImpl = {

  hostAttributes: {'role': 'dialog', 'tabindex': '-1'},

  properties: {

    /**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */
    modal: {type: Boolean, value: false},

    __readied: {type: Boolean, value: false}

  },

  observers: ['_modalChanged(modal, __readied)'],

  listeners: {'tap': '_onDialogClick'},

  /**
   * @return {void}
   */
  ready: function() {
    // Only now these properties can be read.
    this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
    this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
    this.__prevWithBackdrop = this.withBackdrop;
    this.__readied = true;
  },

  _modalChanged: function(modal, readied) {
    // modal implies noCancelOnOutsideClick, noCancelOnEscKey and withBackdrop.
    // We need to wait for the element to be ready before we can read the
    // properties values.
    if (!readied) {
      return;
    }

    if (modal) {
      this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
      this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
      this.__prevWithBackdrop = this.withBackdrop;
      this.noCancelOnOutsideClick = true;
      this.noCancelOnEscKey = true;
      this.withBackdrop = true;
    } else {
      // If the value was changed to false, let it false.
      this.noCancelOnOutsideClick =
          this.noCancelOnOutsideClick && this.__prevNoCancelOnOutsideClick;
      this.noCancelOnEscKey =
          this.noCancelOnEscKey && this.__prevNoCancelOnEscKey;
      this.withBackdrop = this.withBackdrop && this.__prevWithBackdrop;
    }
  },

  _updateClosingReasonConfirmed: function(confirmed) {
    this.closingReason = this.closingReason || {};
    this.closingReason.confirmed = confirmed;
  },

  /**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */
  _onDialogClick: function(event) {
    // Search for the element with dialog-confirm or dialog-dismiss,
    // from the root target until this (excluded).
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(event).path;
    for (var i = 0, l = path.indexOf(this); i < l; i++) {
      var target = path[i];
      if (target.hasAttribute &&
          (target.hasAttribute('dialog-dismiss') ||
           target.hasAttribute('dialog-confirm'))) {
        this._updateClosingReasonConfirmed(
            target.hasAttribute('dialog-confirm'));
        this.close();
        event.stopPropagation();
        break;
      }
    }
  }

};

/** @polymerBehavior */
const PaperDialogBehavior =
    [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"], PaperDialogBehaviorImpl];


/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
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
### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-background-color` | Dialog background color | `--primary-background-color`
`--paper-dialog-color` | Dialog foreground color | `--primary-text-color`
`--paper-dialog` | Mixin applied to the dialog | `{}`
`--paper-dialog-title` | Mixin applied to the title (`<h2>`) element | `{}`
`--paper-dialog-button-color` | Button area foreground color | `--default-primary-color`
*/





const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,

  is: 'paper-dialog-scrollable',

  properties: {

    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {type: Object}

  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function() {
    this._ensureTarget();
    this.classList.add('no-padding');
  },

  attached: function() {
    this._ensureTarget();
    requestAnimationFrame(this.updateScrollState.bind(this));
  },

  updateScrollState: function() {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass(
        'can-scroll',
        this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass(
        'scrolled-to-bottom',
        this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
            this.scrollTarget.scrollHeight);
  },

  _ensureTarget: function() {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement;
    // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.
    if (this.dialogElement && this.dialogElement.behaviors &&
        this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtYmFzZS9mb3JtLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdyYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQgfSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgICAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5hcHAtdG9vbGJhciBpcyBhIGhvcml6b250YWwgdG9vbGJhciBjb250YWluaW5nIGl0ZW1zIHRoYXQgY2FuIGJlIHVzZWQgZm9yXG5sYWJlbCwgbmF2aWdhdGlvbiwgc2VhcmNoIGFuZCBhY3Rpb25zLlxuXG4jIyMgRXhhbXBsZVxuXG5BZGQgYSB0aXRsZSB0byB0aGUgdG9vbGJhci5cblxuYGBgaHRtbFxuPGFwcC10b29sYmFyPlxuICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbjwvYXBwLXRvb2xiYXI+XG5gYGBcblxuQWRkIGEgYnV0dG9uIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIG9mIHRoZSB0b29sYmFyLlxuXG5gYGBodG1sXG48YXBwLXRvb2xiYXI+XG4gIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwibWVudVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cInNlYXJjaFwiPjwvcGFwZXItaWNvbi1idXR0b24+XG48L2FwcC10b29sYmFyPlxuYGBgXG5cbllvdSBjYW4gdXNlIHRoZSBhdHRyaWJ1dGVzIGB0b3AtaXRlbWAgb3IgYGJvdHRvbS1pdGVtYCB0byBjb21wbGV0ZWx5IGZpdCBhblxuZWxlbWVudCB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgdG9vbGJhciByZXNwZWN0aXZlbHkuXG5cbiMjIyBDb250ZW50IGF0dHJpYnV0ZXNcblxuQXR0cmlidXRlICAgICAgICAgICAgfCBEZXNjcmlwdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYG1haW4tdGl0bGVgICAgICAgICAgfCBUaGUgbWFpbiB0aXRsZSBlbGVtZW50LlxuYGNvbmRlbnNlZC10aXRsZWAgICAgfCBUaGUgdGl0bGUgZWxlbWVudCBpZiB1c2VkIGluc2lkZSBhIGNvbmRlbnNlZCBhcHAtaGVhZGVyLlxuYHNwYWNlcmAgICAgICAgICAgICAgfCBBZGRzIGEgbGVmdCBtYXJnaW4gb2YgYDY0cHhgLlxuYGJvdHRvbS1pdGVtYCAgICAgICAgfCBTdGlja3MgdGhlIGVsZW1lbnQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG9vbGJhci5cbmB0b3AtaXRlbWAgICAgICAgICAgIHwgU3RpY2tzIHRoZSBlbGVtZW50IHRvIHRoZSB0b3Agb2YgdGhlIHRvb2xiYXIuXG5cbiMjIyBTdHlsaW5nXG5cbkN1c3RvbSBwcm9wZXJ0eSAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gLS1hcHAtdG9vbGJhci1mb250LXNpemVgICAgIHwgVG9vbGJhciBmb250IHNpemUgICAgICAgICAgICB8IDIwcHhcblxuQGdyb3VwIEFwcCBFbGVtZW50c1xuQGVsZW1lbnQgYXBwLXRvb2xiYXJcbkBkZW1vIGFwcC10b29sYmFyL2RlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1hcHAtdG9vbGJhci1mb250LXNpemUsIDIwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWljb24tYnV0dG9uKSB7XG4gICAgICAgIC8qIHBhcGVyLWljb24tYnV0dG9uL2lzc3Vlcy8zMyAqL1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbbWFpbi10aXRsZV0pLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtjb25kZW5zZWQtdGl0bGVdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtib3R0b20taXRlbV0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW3RvcC1pdGVtXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbc3BhY2VyXSkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjRweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ2FwcC10b29sYmFyJ1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5cbi8qKlxuYGlyb24tbWVkaWEtcXVlcnlgIGNhbiBiZSB1c2VkIHRvIGRhdGEgYmluZCB0byBhIENTUyBtZWRpYSBxdWVyeS5cblRoZSBgcXVlcnlgIHByb3BlcnR5IGlzIGEgYmFyZSBDU1MgbWVkaWEgcXVlcnkuXG5UaGUgYHF1ZXJ5LW1hdGNoZXNgIHByb3BlcnR5IGlzIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgd2hldGhlciB0aGUgcGFnZSBtYXRjaGVzXG50aGF0IG1lZGlhIHF1ZXJ5LlxuXG5FeGFtcGxlOlxuXG5gYGBodG1sXG48aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cIihtaW4td2lkdGg6IDYwMHB4KVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e3F1ZXJ5TWF0Y2hlc319XCI+XG48L2lyb24tbWVkaWEtcXVlcnk+XG5gYGBcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbkBlbGVtZW50IGlyb24tbWVkaWEtcXVlcnlcbiovXG5Qb2x5bWVyKHtcblxuICBpczogJ2lyb24tbWVkaWEtcXVlcnknLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCb29sZWFuIHJldHVybiB2YWx1ZSBvZiB0aGUgbWVkaWEgcXVlcnkuXG4gICAgICovXG4gICAgcXVlcnlNYXRjaGVzOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWFkT25seTogdHJ1ZSwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXG4gICAgICovXG4gICAgcXVlcnk6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAncXVlcnlDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgcXVlcnkgYXR0cmlidXRlIGlzIGFzc3VtZWQgdG8gYmUgYSBjb21wbGV0ZSBtZWRpYSBxdWVyeVxuICAgICAqIHN0cmluZyByYXRoZXIgdGhhbiBhIHNpbmdsZSBtZWRpYSBmZWF0dXJlLlxuICAgICAqL1xuICAgIGZ1bGw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKE1lZGlhUXVlcnlMaXN0KX1cbiAgICAgKi9cbiAgICBfYm91bmRNUUhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNZWRpYVF1ZXJ5TGlzdH1cbiAgICAgKi9cbiAgICBfbXE6IHt2YWx1ZTogbnVsbH1cbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMucXVlcnlDaGFuZ2VkKCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZSgpO1xuICB9LFxuXG4gIF9hZGQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9tcSkge1xuICAgICAgdGhpcy5fbXEuYWRkTGlzdGVuZXIodGhpcy5fYm91bmRNUUhhbmRsZXIpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbXEpIHtcbiAgICAgIHRoaXMuX21xLnJlbW92ZUxpc3RlbmVyKHRoaXMuX2JvdW5kTVFIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5fbXEgPSBudWxsO1xuICB9LFxuXG4gIHF1ZXJ5Q2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVtb3ZlKCk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5mdWxsICYmIHF1ZXJ5WzBdICE9PSAnKCcpIHtcbiAgICAgIHF1ZXJ5ID0gJygnICsgcXVlcnkgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMuX21xID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuICAgIHRoaXMuX2FkZCgpO1xuICAgIHRoaXMucXVlcnlIYW5kbGVyKHRoaXMuX21xKTtcbiAgfSxcblxuICBxdWVyeUhhbmRsZXI6IGZ1bmN0aW9uKG1xKSB7XG4gICAgdGhpcy5fc2V0UXVlcnlNYXRjaGVzKG1xLm1hdGNoZXMpO1xuICB9XG5cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltDYXJkc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2NhcmRzLmh0bWwpXG5cbmBwYXBlci1jYXJkYCBpcyBhIGNvbnRhaW5lciB3aXRoIGEgZHJvcCBzaGFkb3cuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItY2FyZCBoZWFkaW5nPVwiQ2FyZCBUaXRsZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlNvbWUgY29udGVudDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPlNvbWUgYWN0aW9uPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbkV4YW1wbGUgLSB0b3AgY2FyZCBpbWFnZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCIgaW1hZ2U9XCIvcGF0aC90by9pbWFnZS5wbmdcIiBhbHQ9XCJpbWFnZVwiPlxuICAgICAgLi4uXG4gICAgPC9wYXBlci1jYXJkPlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5CeSBkZWZhdWx0LCB0aGUgYGFyaWEtbGFiZWxgIHdpbGwgYmUgc2V0IHRvIHRoZSB2YWx1ZSBvZiB0aGUgYGhlYWRpbmdgXG5hdHRyaWJ1dGUuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3JgIHwgVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGNhcmQgfCBgLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGhlYWRlciB0ZXh0IHwgYCMwMDBgXG5gLS1wYXBlci1jYXJkLWhlYWRlcmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0ZXh0IG92ZXJsYXBwaW5nIHRoZSBpbWFnZSBpbiB0aGUgY2FyZCBoZWFkZXIgc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmQtY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBjYXJkIGNvbnRlbnQgc2VjdGlvbnwgYHt9YFxuYC0tcGFwZXItY2FyZC1hY3Rpb25zYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgYWN0aW9uIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgfCBge31gXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItY2FyZFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQ7XG4gICAgICB9XG5cbiAgICAgIC8qIElFIDEwIHN1cHBvcnQgZm9yIEhUTUw1IGhpZGRlbiBhdHRyICovXG4gICAgICA6aG9zdChbaGlkZGVuXSksIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlcjtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciBpcm9uLWltYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAtLWlyb24taW1hZ2Utd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLWltYWdlO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIC50aXRsZS10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3IsICMwMDApO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyLXRleHQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQub3Zlci1pbWFnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2UtdGV4dDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1jb250ZW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtYWN0aW9ucztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjFcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIyXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0yO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiM1wiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjRcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCI1XCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi01O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICA8aXJvbi1pbWFnZSBoaWRkZW5cXCQ9XCJbWyFpbWFnZV1dXCIgYXJpYS1oaWRkZW5cXCQ9XCJbW19pc0hpZGRlbihpbWFnZSldXVwiIHNyYz1cIltbaW1hZ2VdXVwiIGFsdD1cIltbYWx0XV1cIiBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJJbWFnZV1dXCIgcHJlbG9hZD1cIltbcHJlbG9hZEltYWdlXV1cIiBmYWRlPVwiW1tmYWRlSW1hZ2VdXVwiPjwvaXJvbi1pbWFnZT5cbiAgICAgIDxkaXYgaGlkZGVuXFwkPVwiW1shaGVhZGluZ11dXCIgY2xhc3NcXCQ9XCJ0aXRsZS10ZXh0IFtbX2NvbXB1dGVIZWFkaW5nQ2xhc3MoaW1hZ2UpXV1cIj5bW2hlYWRpbmddXTwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWNhcmQnLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIGNhcmQuXG4gICAgICovXG4gICAgaGVhZGluZzoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnLCBvYnNlcnZlcjogJ19oZWFkaW5nQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHVybCBvZiB0aGUgdGl0bGUgaW1hZ2Ugb2YgdGhlIGNhcmQuXG4gICAgICovXG4gICAgaW1hZ2U6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCBhbHRlcm5hdGl2ZSBvZiB0aGUgY2FyZCdzIHRpdGxlIGltYWdlLlxuICAgICAqL1xuICAgIGFsdDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGB0cnVlYCwgYW55IGNoYW5nZSB0byB0aGUgaW1hZ2UgdXJsIHByb3BlcnR5IHdpbGwgY2F1c2UgdGhlXG4gICAgICogYHBsYWNlaG9sZGVyYCBpbWFnZSB0byBiZSBzaG93biB1bnRpbCB0aGUgaW1hZ2UgaXMgZnVsbHkgcmVuZGVyZWQuXG4gICAgICovXG4gICAgcHJlbG9hZEltYWdlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHByZWxvYWRJbWFnZWAgaXMgdHJ1ZSwgc2V0dGluZyBgZmFkZUltYWdlYCB0byB0cnVlIHdpbGwgY2F1c2UgdGhlXG4gICAgICogaW1hZ2UgdG8gZmFkZSBpbnRvIHBsYWNlLlxuICAgICAqL1xuICAgIGZhZGVJbWFnZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGltYWdlIHdpbGwgYmUgdXNlZCBhcyBhIGJhY2tncm91bmQvcGxhY2Vob2xkZXIgdW50aWwgdGhlIHNyYyBpbWFnZVxuICAgICAqIGhhcyBsb2FkZWQuIFVzZSBvZiBhIGRhdGEtVVJJIGZvciBwbGFjZWhvbGRlciBpcyBlbmNvdXJhZ2VkIGZvciBpbnN0YW50XG4gICAgICogcmVuZGVyaW5nLlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVySW1hZ2U6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB6LWRlcHRoIG9mIHRoZSBjYXJkLCBmcm9tIDAtNS5cbiAgICAgKi9cbiAgICBlbGV2YXRpb246IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoaXMgdG8gdHJ1ZSB0byBhbmltYXRlIHRoZSBjYXJkIHNoYWRvdyB3aGVuIHNldHRpbmcgYSBuZXdcbiAgICAgKiBgemAgdmFsdWUuXG4gICAgICovXG4gICAgYW5pbWF0ZWRTaGFkb3c6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogUmVhZC1vbmx5IHByb3BlcnR5IHVzZWQgdG8gcGFzcyBkb3duIHRoZSBgYW5pbWF0ZWRTaGFkb3dgIHZhbHVlIHRvXG4gICAgICogdGhlIHVuZGVybHlpbmcgcGFwZXItbWF0ZXJpYWwgc3R5bGUgKHNpbmNlIHRoZXkgaGF2ZSBkaWZmZXJlbnQgbmFtZXMpLlxuICAgICAqL1xuICAgIGFuaW1hdGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBjb21wdXRlZDogJ19jb21wdXRlQW5pbWF0ZWQoYW5pbWF0ZWRTaGFkb3cpJ1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRm9ybWF0IGZ1bmN0aW9uIGZvciBhcmlhLWhpZGRlbi4gVXNlIHRoZSAhIG9wZXJhdG9yIHJlc3VsdHMgaW4gdGhlXG4gICAqIGVtcHR5IHN0cmluZyB3aGVuIGdpdmVuIGEgZmFsc3kgdmFsdWUuXG4gICAqL1xuICBfaXNIaWRkZW46IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgcmV0dXJuIGltYWdlID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgfSxcblxuICBfaGVhZGluZ0NoYW5nZWQ6IGZ1bmN0aW9uKGhlYWRpbmcpIHtcbiAgICB2YXIgY3VycmVudEhlYWRpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaGVhZGluZycpLFxuICAgICAgICBjdXJyZW50TGFiZWwgPSB0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuXG4gICAgaWYgKHR5cGVvZiBjdXJyZW50TGFiZWwgIT09ICdzdHJpbmcnIHx8IGN1cnJlbnRMYWJlbCA9PT0gY3VycmVudEhlYWRpbmcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgaGVhZGluZyk7XG4gICAgfVxuICB9LFxuXG4gIF9jb21wdXRlSGVhZGluZ0NsYXNzOiBmdW5jdGlvbihpbWFnZSkge1xuICAgIHJldHVybiBpbWFnZSA/ICcgb3Zlci1pbWFnZScgOiAnJztcbiAgfSxcblxuICBfY29tcHV0ZUFuaW1hdGVkOiBmdW5jdGlvbihhbmltYXRlZFNoYWRvdykge1xuICAgIHJldHVybiBhbmltYXRlZFNoYWRvdztcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbk92ZXJsYXlCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gIFVzZSBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCBhbmQgYHBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzLmh0bWxgIHRvXG4gIGltcGxlbWVudCBhIE1hdGVyaWFsIERlc2lnbiBkaWFsb2cuXG5cbiAgRm9yIGV4YW1wbGUsIGlmIGA8cGFwZXItZGlhbG9nLWltcGw+YCBpbXBsZW1lbnRzIHRoaXMgYmVoYXZpb3I6XG5cbiAgICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgICAgICA8ZGl2PkRpYWxvZyBib2R5PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWJ1dHRvbiBkaWFsb2ctZGlzbWlzcz5DYW5jZWw8L3BhcGVyLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWJ1dHRvbiBkaWFsb2ctY29uZmlybT5BY2NlcHQ8L3BhcGVyLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgYHBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzLmh0bWxgIHByb3ZpZGUgc3R5bGVzIGZvciBhIGhlYWRlciwgY29udGVudCBhcmVhLFxuICBhbmQgYW4gYWN0aW9uIGFyZWEgZm9yIGJ1dHRvbnMuIFVzZSB0aGUgYDxoMj5gIHRhZyBmb3IgdGhlIGhlYWRlciBhbmQgdGhlXG4gIGBidXR0b25zYCBjbGFzcyBmb3IgdGhlIGFjdGlvbiBhcmVhLiBZb3UgY2FuIHVzZSB0aGUgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYFxuICBlbGVtZW50IChpbiBpdHMgb3duIHJlcG9zaXRvcnkpIGlmIHlvdSBuZWVkIGEgc2Nyb2xsaW5nIGNvbnRlbnQgYXJlYS5cblxuICBVc2UgdGhlIGBkaWFsb2ctZGlzbWlzc2AgYW5kIGBkaWFsb2ctY29uZmlybWAgYXR0cmlidXRlcyBvbiBpbnRlcmFjdGl2ZVxuICBjb250cm9scyB0byBjbG9zZSB0aGUgZGlhbG9nLiBJZiB0aGUgdXNlciBkaXNtaXNzZXMgdGhlIGRpYWxvZyB3aXRoXG4gIGBkaWFsb2ctY29uZmlybWAsIHRoZSBgY2xvc2luZ1JlYXNvbmAgd2lsbCB1cGRhdGUgdG8gaW5jbHVkZSBgY29uZmlybWVkOlxuICB0cnVlYC5cblxuICAjIyMgQWNjZXNzaWJpbGl0eVxuXG4gIFRoaXMgZWxlbWVudCBoYXMgYHJvbGU9XCJkaWFsb2dcImAgYnkgZGVmYXVsdC4gRGVwZW5kaW5nIG9uIHRoZSBjb250ZXh0LCBpdCBtYXlcbiAgYmUgbW9yZSBhcHByb3ByaWF0ZSB0byBvdmVycmlkZSB0aGlzIGF0dHJpYnV0ZSB3aXRoIGByb2xlPVwiYWxlcnRkaWFsb2dcImAuXG5cbiAgSWYgYG1vZGFsYCBpcyBzZXQsIHRoZSBlbGVtZW50IHdpbGwgcHJldmVudCB0aGUgZm9jdXMgZnJvbSBleGl0aW5nIHRoZVxuICBlbGVtZW50LiBJdCB3aWxsIGFsc28gZW5zdXJlIHRoYXQgZm9jdXMgcmVtYWlucyBpbiB0aGUgZGlhbG9nLlxuXG4gIEBoZXJvIGhlcm8uc3ZnXG4gIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICBAcG9seW1lckJlaGF2aW9yIFBhcGVyRGlhbG9nQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsID0ge1xuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7J3JvbGUnOiAnZGlhbG9nJywgJ3RhYmluZGV4JzogJy0xJ30sXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogSWYgYG1vZGFsYCBpcyB0cnVlLCB0aGlzIGltcGxpZXMgYG5vLWNhbmNlbC1vbi1vdXRzaWRlLWNsaWNrYCxcbiAgICAgKiBgbm8tY2FuY2VsLW9uLWVzYy1rZXlgIGFuZCBgd2l0aC1iYWNrZHJvcGAuXG4gICAgICovXG4gICAgbW9kYWw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgX19yZWFkaWVkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19tb2RhbENoYW5nZWQobW9kYWwsIF9fcmVhZGllZCknXSxcblxuICBsaXN0ZW5lcnM6IHsndGFwJzogJ19vbkRpYWxvZ0NsaWNrJ30sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gT25seSBub3cgdGhlc2UgcHJvcGVydGllcyBjYW4gYmUgcmVhZC5cbiAgICB0aGlzLl9fcHJldk5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPSB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s7XG4gICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uRXNjS2V5ID0gdGhpcy5ub0NhbmNlbE9uRXNjS2V5O1xuICAgIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3A7XG4gICAgdGhpcy5fX3JlYWRpZWQgPSB0cnVlO1xuICB9LFxuXG4gIF9tb2RhbENoYW5nZWQ6IGZ1bmN0aW9uKG1vZGFsLCByZWFkaWVkKSB7XG4gICAgLy8gbW9kYWwgaW1wbGllcyBub0NhbmNlbE9uT3V0c2lkZUNsaWNrLCBub0NhbmNlbE9uRXNjS2V5IGFuZCB3aXRoQmFja2Ryb3AuXG4gICAgLy8gV2UgbmVlZCB0byB3YWl0IGZvciB0aGUgZWxlbWVudCB0byBiZSByZWFkeSBiZWZvcmUgd2UgY2FuIHJlYWQgdGhlXG4gICAgLy8gcHJvcGVydGllcyB2YWx1ZXMuXG4gICAgaWYgKCFyZWFkaWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG1vZGFsKSB7XG4gICAgICB0aGlzLl9fcHJldk5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPSB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s7XG4gICAgICB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXkgPSB0aGlzLm5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgICB0aGlzLl9fcHJldldpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wO1xuICAgICAgdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSA9IHRydWU7XG4gICAgICB0aGlzLndpdGhCYWNrZHJvcCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSB2YWx1ZSB3YXMgY2hhbmdlZCB0byBmYWxzZSwgbGV0IGl0IGZhbHNlLlxuICAgICAgdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrID1cbiAgICAgICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgJiYgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ID1cbiAgICAgICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgJiYgdGhpcy5fX3ByZXZOb0NhbmNlbE9uRXNjS2V5O1xuICAgICAgdGhpcy53aXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcCAmJiB0aGlzLl9fcHJldldpdGhCYWNrZHJvcDtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZUNsb3NpbmdSZWFzb25Db25maXJtZWQ6IGZ1bmN0aW9uKGNvbmZpcm1lZCkge1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbiA9IHRoaXMuY2xvc2luZ1JlYXNvbiB8fCB7fTtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24uY29uZmlybWVkID0gY29uZmlybWVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaWxsIGRpc21pc3MgdGhlIGRpYWxvZyBpZiB1c2VyIGNsaWNrZWQgb24gYW4gZWxlbWVudCB3aXRoIGRpYWxvZy1kaXNtaXNzXG4gICAqIG9yIGRpYWxvZy1jb25maXJtIGF0dHJpYnV0ZS5cbiAgICovXG4gIF9vbkRpYWxvZ0NsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFNlYXJjaCBmb3IgdGhlIGVsZW1lbnQgd2l0aCBkaWFsb2ctY29uZmlybSBvciBkaWFsb2ctZGlzbWlzcyxcbiAgICAvLyBmcm9tIHRoZSByb290IHRhcmdldCB1bnRpbCB0aGlzIChleGNsdWRlZCkuXG4gICAgdmFyIHBhdGggPSBkb20oZXZlbnQpLnBhdGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYXRoLmluZGV4T2YodGhpcyk7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciB0YXJnZXQgPSBwYXRoW2ldO1xuICAgICAgaWYgKHRhcmdldC5oYXNBdHRyaWJ1dGUgJiZcbiAgICAgICAgICAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlhbG9nLWRpc21pc3MnKSB8fFxuICAgICAgICAgICB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctY29uZmlybScpKSkge1xuICAgICAgICB0aGlzLl91cGRhdGVDbG9zaW5nUmVhc29uQ29uZmlybWVkKFxuICAgICAgICAgICAgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlhbG9nLWNvbmZpcm0nKSk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyRGlhbG9nQmVoYXZpb3IgPVxuICAgIFtJcm9uT3ZlcmxheUJlaGF2aW9yLCBQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZy5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLWJhY2tncm91bmQtY29sb3JgIHwgRGlhbG9nIGJhY2tncm91bmQgY29sb3IgfCBgLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1kaWFsb2ctY29sb3JgIHwgRGlhbG9nIGZvcmVncm91bmQgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1kaWFsb2dgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZGlhbG9nIHwgYHt9YFxuYC0tcGFwZXItZGlhbG9nLXRpdGxlYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRpdGxlIChgPGgyPmApIGVsZW1lbnQgfCBge31gXG5gLS1wYXBlci1kaWFsb2ctYnV0dG9uLWNvbG9yYCB8IEJ1dHRvbiBhcmVhIGZvcmVncm91bmQgY29sb3IgfCBgLS1kZWZhdWx0LXByaW1hcnktY29sb3JgXG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9zaGFkb3cuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAyNHB4IDQwcHg7XG5cbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItZGlhbG9nLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICBAYXBwbHkgLS1zaGFkb3ctZWxldmF0aW9uLTE2ZHA7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKC5uby1wYWRkaW5nKSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIFxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKjpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLyogSW4gMS54LCB0aGlzIHNlbGVjdG9yIHdhcyBcXGA6aG9zdCA+IDo6Y29udGVudCBoMlxcYC4gSW4gMi54IDxzbG90PiBhbGxvd3NcbiAgICAgIHRvIHNlbGVjdCBkaXJlY3QgY2hpbGRyZW4gb25seSwgd2hpY2ggaW5jcmVhc2VzIHRoZSB3ZWlnaHQgb2YgdGhpc1xuICAgICAgc2VsZWN0b3IsIHNvIHdlIGhhdmUgdG8gcmUtZGVmaW5lIGZpcnN0LWNoaWxkL2xhc3QtY2hpbGQgbWFyZ2lucyBiZWxvdy4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtdGl0bGU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy10aXRsZTtcbiAgICAgIH1cblxuICAgICAgLyogQXBwbHkgbWl4aW4gYWdhaW4sIGluIGNhc2UgaXQgc2V0cyBtYXJnaW4tdG9wLiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDI6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICAvKiBBcHBseSBtaXhpbiBhZ2FpbiwgaW4gY2FzZSBpdCBzZXRzIG1hcmdpbi1ib3R0b20uICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMjpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy10aXRsZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLnBhcGVyLWRpYWxvZy1idXR0b25zKSxcbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKC5idXR0b25zKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweCA4cHggMjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctYnV0dG9uLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1lbmQtanVzdGlmaWVkO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJEaWFsb2dCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpbXBsZW1lbnRzIGEgc2Nyb2xsaW5nIGFyZWEgdXNlZCBpbiBhIE1hdGVyaWFsIERlc2lnblxuZGlhbG9nLiBJdCBzaG93cyBhIGRpdmlkZXIgYXQgdGhlIHRvcCBhbmQvb3IgYm90dG9tIGluZGljYXRpbmcgbW9yZSBjb250ZW50LFxuZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi4gVXNlIHRoaXMgdG9nZXRoZXIgd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuSXQgc2hvd3MgYSB0b3AgZGl2aWRlciBhZnRlciBzY3JvbGxpbmcgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBjaGlsZCBpbiBpdHNcbnBhcmVudCBjb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGFib3ZlLiBJdCBzaG93cyBhIGJvdHRvbVxuZGl2aWRlciBpZiBpdCBpcyBzY3JvbGxhYmxlIGFuZCBpdCBpcyBub3QgdGhlIGxhc3QgY2hpbGQgaW4gaXRzIHBhcmVudFxuY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBiZWxvdy4gVGhlIGJvdHRvbSBkaXZpZGVyIGlzIGhpZGRlblxuaWYgaXQgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbS5cblxuSWYgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGVsZW1lbnQgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCwgcmVtZW1iZXIgdG8gc2V0IHRoZSBgZGlhbG9nRWxlbWVudGA6XG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGwgaWQ9XCJteURpYWxvZ1wiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXktY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxoND5TdWItaGVhZGVyPC9oND5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgdmFyIHNjcm9sbGFibGUgPVxuUG9seW1lci5kb20obXlEaWFsb2cpLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyk7XG4gICAgICBzY3JvbGxhYmxlLmRpYWxvZ0VsZW1lbnQgPSBteURpYWxvZztcbiAgICA8L3NjcmlwdD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgfCBNaXhpbiBmb3IgdGhlIHNjcm9sbGFibGUgY29udGVudCB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXMtc2Nyb2xsZWQ6bm90KDpmaXJzdC1jaGlsZCkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jYW4tc2Nyb2xsOm5vdCguc2Nyb2xsZWQtdG8tYm90dG9tKTpub3QoOmxhc3QtY2hpbGQpKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zY3JvbGw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGFibGVcIiBjbGFzcz1cInNjcm9sbGFibGVcIiBvbi1zY3JvbGw9XCJ1cGRhdGVTY3JvbGxTdGF0ZVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlhbG9nIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgXG4gICAgICogY29udGFpbmluZyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgez9Ob2RlfVxuICAgICAqL1xuICAgIGRpYWxvZ0VsZW1lbnQ6IHt0eXBlOiBPYmplY3R9XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuc2Nyb2xsYWJsZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduby1wYWRkaW5nJyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbFN0YXRlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpcy1zY3JvbGxlZCcsIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA+IDApO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdjYW4tc2Nyb2xsJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnc2Nyb2xsZWQtdG8tYm90dG9tJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0ID49XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICB9LFxuXG4gIF9lbnN1cmVUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlYWQgcGFyZW50RWxlbWVudCBpbnN0ZWFkIG9mIHBhcmVudE5vZGUgaW4gb3JkZXIgdG8gc2tpcCBzaGFkb3dSb290cy5cbiAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQgfHwgdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIC8vIENoZWNrIGlmIGRpYWxvZyBpbXBsZW1lbnRzIHBhcGVyLWRpYWxvZy1iZWhhdmlvci4gSWYgbm90LCBmaXRcbiAgICAvLyBzY3JvbGxUYXJnZXQgdG8gaG9zdC5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMgJiZcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycy5pbmRleE9mKFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsKSA+PSAwKSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuc2l6aW5nVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZml0Jyk7XG4gICAgfVxuICB9XG59KTtcbiIsImZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG4gIHZhciBjID0gMDtcbiAgdmFyIGNhbGxiYWNrcyA9IHt9O1xuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGQgPSBlLmRhdGE7XG4gICAgaWYgKGQudHlwZSAhPT0gJ1JQQycpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZC5pZCkge1xuICAgICAgdmFyIGYgPSBjYWxsYmFja3NbZC5pZF07XG5cbiAgICAgIGlmIChmKSB7XG4gICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbZC5pZF07XG5cbiAgICAgICAgaWYgKGQuZXJyb3IpIHtcbiAgICAgICAgICBmWzFdKE9iamVjdC5hc3NpZ24oRXJyb3IoZC5lcnJvci5tZXNzYWdlKSwgZC5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZbMF0oZC5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0RXZlbnQoZC5tZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgICBldnQuZGF0YSA9IGQucGFyYW1zO1xuICAgICAgd29ya2VyLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gIH0pO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHdvcmtlclttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIHBhcmFtc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBpZCA9ICsrYztcbiAgICAgIGNhbGxiYWNrc1tpZF0gPSBbYSwgYl07XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnUlBDJyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1ldGhvZHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ycGMtd3JhcHBlci5qcy5tYXBcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25IQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2TUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0UEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==