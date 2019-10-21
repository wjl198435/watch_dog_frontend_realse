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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var FormElement =
/*#__PURE__*/
function (_BaseElement) {
  _inherits(FormElement, _BaseElement);

  function FormElement() {
    _classCallCheck(this, FormElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormElement).apply(this, arguments));
  }

  _createClass(FormElement, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open',
        delegatesFocus: true
      });
    }
  }, {
    key: "click",
    value: function click() {
      if (this.formElement) {
        this.formElement.focus();
        this.formElement.click();
      }
    }
  }, {
    key: "setAriaLabel",
    value: function setAriaLabel(label) {
      if (this.formElement) {
        this.formElement.setAttribute('aria-label', label);
      }
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this = this;

      _get(_getPrototypeOf(FormElement.prototype), "firstUpdated", this).call(this);

      this.mdcRoot.addEventListener('change', function (e) {
        _this.dispatchEvent(new Event('change', e));
      });
    }
  }]);

  return FormElement;
}(_base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]);

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject()),
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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function _iconChanged(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function _srcChanged(src) {
    this._updateIcon();
  },
  _usesIconset: function _usesIconset() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function _updateIcon() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

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
    queryMatches: {
      type: Boolean,
      value: false,
      readOnly: true,
      notify: true
    },

    /**
     * The CSS media query to evaluate.
     */
    query: {
      type: String,
      observer: 'queryChanged'
    },

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {
      type: Boolean,
      value: false
    },

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function value() {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {
      value: null
    }
  },
  attached: function attached() {
    this.style.display = 'none';
    this.queryChanged();
  },
  detached: function detached() {
    this._remove();
  },
  _add: function _add() {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },
  _remove: function _remove() {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }

    this._mq = null;
  },
  queryChanged: function queryChanged() {
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
  queryHandler: function queryHandler(mq) {
    this._setQueryMatches(mq.matches);
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

var PaperDialogBehaviorImpl = {
  hostAttributes: {
    'role': 'dialog',
    'tabindex': '-1'
  },
  properties: {
    /**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */
    modal: {
      type: Boolean,
      value: false
    },
    __readied: {
      type: Boolean,
      value: false
    }
  },
  observers: ['_modalChanged(modal, __readied)'],
  listeners: {
    'tap': '_onDialogClick'
  },

  /**
   * @return {void}
   */
  ready: function ready() {
    // Only now these properties can be read.
    this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
    this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
    this.__prevWithBackdrop = this.withBackdrop;
    this.__readied = true;
  },
  _modalChanged: function _modalChanged(modal, readied) {
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
      this.noCancelOnOutsideClick = this.noCancelOnOutsideClick && this.__prevNoCancelOnOutsideClick;
      this.noCancelOnEscKey = this.noCancelOnEscKey && this.__prevNoCancelOnEscKey;
      this.withBackdrop = this.withBackdrop && this.__prevWithBackdrop;
    }
  },
  _updateClosingReasonConfirmed: function _updateClosingReasonConfirmed(confirmed) {
    this.closingReason = this.closingReason || {};
    this.closingReason.confirmed = confirmed;
  },

  /**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */
  _onDialogClick: function _onDialogClick(event) {
    // Search for the element with dialog-confirm or dialog-dismiss,
    // from the root target until this (excluded).
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(event).path;

    for (var i = 0, l = path.indexOf(this); i < l; i++) {
      var target = path[i];

      if (target.hasAttribute && (target.hasAttribute('dialog-dismiss') || target.hasAttribute('dialog-confirm'))) {
        this._updateClosingReasonConfirmed(target.hasAttribute('dialog-confirm'));

        this.close();
        event.stopPropagation();
        break;
      }
    }
  }
};
/** @polymerBehavior */

var PaperDialogBehavior = [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"], PaperDialogBehaviorImpl];

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





var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<dom-module id=\"paper-dialog-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>";
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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id=\"scrollable\" class=\"scrollable\" on-scroll=\"updateScrollState\">\n      <slot></slot>\n    </div>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function ready() {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function attached() {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function updateScrollState() {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function _ensureTarget() {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
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

    if (d.type !== 'RPC') {
      return;
    }

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
      var params = [],
          len = arguments.length;

      while (len--) {
        params[len] = arguments[len];
      }

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtYmFzZS9mb3JtLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IEJhc2VFbGVtZW50IH0gZnJvbSAnLi9iYXNlLWVsZW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iYXNlLWVsZW1lbnQnO1xuZXhwb3J0IGNsYXNzIEZvcm1FbGVtZW50IGV4dGVuZHMgQmFzZUVsZW1lbnQge1xuICAgIGNyZWF0ZVJlbmRlclJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJywgZGVsZWdhdGVzRm9jdXM6IHRydWUgfSk7XG4gICAgfVxuICAgIGNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFyaWFMYWJlbChsYWJlbCkge1xuICAgICAgICBpZiAodGhpcy5mb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsYWJlbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICAgICAgdGhpcy5tZGNSb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCBlKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm0tZWxlbWVudC5qcy5tYXAiLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYXBwLXRvb2xiYXIgaXMgYSBob3Jpem9udGFsIHRvb2xiYXIgY29udGFpbmluZyBpdGVtcyB0aGF0IGNhbiBiZSB1c2VkIGZvclxubGFiZWwsIG5hdmlnYXRpb24sIHNlYXJjaCBhbmQgYWN0aW9ucy5cblxuIyMjIEV4YW1wbGVcblxuQWRkIGEgdGl0bGUgdG8gdGhlIHRvb2xiYXIuXG5cbmBgYGh0bWxcbjxhcHAtdG9vbGJhcj5cbiAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG48L2FwcC10b29sYmFyPlxuYGBgXG5cbkFkZCBhIGJ1dHRvbiB0byB0aGUgbGVmdCBhbmQgcmlnaHQgc2lkZSBvZiB0aGUgdG9vbGJhci5cblxuYGBgaHRtbFxuPGFwcC10b29sYmFyPlxuICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cIm1lbnVcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJzZWFyY2hcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuPC9hcHAtdG9vbGJhcj5cbmBgYFxuXG5Zb3UgY2FuIHVzZSB0aGUgYXR0cmlidXRlcyBgdG9wLWl0ZW1gIG9yIGBib3R0b20taXRlbWAgdG8gY29tcGxldGVseSBmaXQgYW5cbmVsZW1lbnQgdG8gdGhlIHRvcCBvciBib3R0b20gb2YgdGhlIHRvb2xiYXIgcmVzcGVjdGl2ZWx5LlxuXG4jIyMgQ29udGVudCBhdHRyaWJ1dGVzXG5cbkF0dHJpYnV0ZSAgICAgICAgICAgIHwgRGVzY3JpcHRpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmBtYWluLXRpdGxlYCAgICAgICAgIHwgVGhlIG1haW4gdGl0bGUgZWxlbWVudC5cbmBjb25kZW5zZWQtdGl0bGVgICAgIHwgVGhlIHRpdGxlIGVsZW1lbnQgaWYgdXNlZCBpbnNpZGUgYSBjb25kZW5zZWQgYXBwLWhlYWRlci5cbmBzcGFjZXJgICAgICAgICAgICAgIHwgQWRkcyBhIGxlZnQgbWFyZ2luIG9mIGA2NHB4YC5cbmBib3R0b20taXRlbWAgICAgICAgIHwgU3RpY2tzIHRoZSBlbGVtZW50IHRvIHRoZSBib3R0b20gb2YgdGhlIHRvb2xiYXIuXG5gdG9wLWl0ZW1gICAgICAgICAgICB8IFN0aWNrcyB0aGUgZWxlbWVudCB0byB0aGUgdG9wIG9mIHRoZSB0b29sYmFyLlxuXG4jIyMgU3R5bGluZ1xuXG5DdXN0b20gcHJvcGVydHkgICAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYC0tYXBwLXRvb2xiYXItZm9udC1zaXplYCAgICB8IFRvb2xiYXIgZm9udCBzaXplICAgICAgICAgICAgfCAyMHB4XG5cbkBncm91cCBBcHAgRWxlbWVudHNcbkBlbGVtZW50IGFwcC10b29sYmFyXG5AZGVtbyBhcHAtdG9vbGJhci9kZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYXBwLXRvb2xiYXItZm9udC1zaXplLCAyMHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKCopIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChwYXBlci1pY29uLWJ1dHRvbikge1xuICAgICAgICAvKiBwYXBlci1pY29uLWJ1dHRvbi9pc3N1ZXMvMzMgKi9cbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW21haW4tdGl0bGVdKSxcbiAgICAgIDpob3N0IDo6c2xvdHRlZChbY29uZGVuc2VkLXRpdGxlXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbYm90dG9tLWl0ZW1dKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKFt0b3AtaXRlbV0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW3NwYWNlcl0pIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY0cHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdhcHAtdG9vbGJhcidcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7SXJvbk1ldGF9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWV0YS9pcm9uLW1ldGEuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHtCYXNlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG5cblRoZSBgaXJvbi1pY29uYCBlbGVtZW50IGRpc3BsYXlzIGFuIGljb24uIEJ5IGRlZmF1bHQgYW4gaWNvbiByZW5kZXJzIGFzIGEgMjRweFxuc3F1YXJlLlxuXG5FeGFtcGxlIHVzaW5nIHNyYzpcblxuICAgIDxpcm9uLWljb24gc3JjPVwic3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuRXhhbXBsZSBzZXR0aW5nIHNpemUgdG8gMzJweCB4IDMycHg6XG5cbiAgICA8aXJvbi1pY29uIGNsYXNzPVwiYmlnXCIgc3JjPVwiYmlnX3N0YXIucG5nXCI+PC9pcm9uLWljb24+XG5cbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIj5cbiAgICAgIC5iaWcge1xuICAgICAgICAtLWlyb24taWNvbi1oZWlnaHQ6IDMycHg7XG4gICAgICAgIC0taXJvbi1pY29uLXdpZHRoOiAzMnB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cblRoZSBpcm9uIGVsZW1lbnRzIGluY2x1ZGUgc2V2ZXJhbCBzZXRzIG9mIGljb25zLiBUbyB1c2UgdGhlIGRlZmF1bHQgc2V0IG9mXG5pY29ucywgaW1wb3J0IGBpcm9uLWljb25zLmpzYCBhbmQgdXNlIHRoZSBgaWNvbmAgYXR0cmlidXRlIHRvIHNwZWNpZnkgYW4gaWNvbjpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9pcm9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJtZW51XCI+PC9pcm9uLWljb24+XG5cblRvIHVzZSBhIGRpZmZlcmVudCBidWlsdC1pbiBzZXQgb2YgaWNvbnMsIGltcG9ydCB0aGUgc3BlY2lmaWNcbmBpcm9uLWljb25zLzxpY29uc2V0Pi1pY29ucy5qc2AsIGFuZCBzcGVjaWZ5IHRoZSBpY29uIGFzIGA8aWNvbnNldD46PGljb24+YC5cbkZvciBleGFtcGxlLCB0byB1c2UgYSBjb21tdW5pY2F0aW9uIGljb24sIHlvdSB3b3VsZCB1c2U6XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnMvY29tbXVuaWNhdGlvbi1pY29ucy5qc1wiO1xuICAgIDwvc2NyaXB0PlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiY29tbXVuaWNhdGlvbjplbWFpbFwiPjwvaXJvbi1pY29uPlxuXG5Zb3UgY2FuIGFsc28gY3JlYXRlIGN1c3RvbSBpY29uIHNldHMgb2YgYml0bWFwIG9yIFNWRyBpY29ucy5cblxuRXhhbXBsZSBvZiB1c2luZyBhbiBpY29uIG5hbWVkIGBjaGVycnlgIGZyb20gYSBjdXN0b20gaWNvbnNldCB3aXRoIHRoZSBJRFxuYGZydWl0YDpcblxuICAgIDxpcm9uLWljb24gaWNvbj1cImZydWl0OmNoZXJyeVwiPjwvaXJvbi1pY29uPlxuXG5TZWUgYDxpcm9uLWljb25zZXQ+YCBhbmQgYDxpcm9uLWljb25zZXQtc3ZnPmAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvXG5jcmVhdGUgYSBjdXN0b20gaWNvbnNldC5cblxuU2VlIHRoZSBgaXJvbi1pY29uc2AgZGVtbyB0byBzZWUgdGhlIGljb25zIGF2YWlsYWJsZSBpbiB0aGUgdmFyaW91cyBpY29uc2V0cy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1pcm9uLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiB8IHt9XG5gLS1pcm9uLWljb24td2lkdGhgIHwgV2lkdGggb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1oZWlnaHRgIHwgSGVpZ2h0IG9mIHRoZSBpY29uIHwgYDI0cHhgXG5gLS1pcm9uLWljb24tZmlsbC1jb2xvcmAgfCBGaWxsIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IGBjdXJyZW50Y29sb3JgXG5gLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yYCB8IFN0cm9rZSBjb2xvciBvZiB0aGUgc3ZnIGljb24gfCBub25lXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZWxlbWVudCBpcm9uLWljb25cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbkBob21lcGFnZSBwb2x5bWVyLmdpdGh1Yi5pb1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaW5saW5lO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgZmlsbDogdmFyKC0taXJvbi1pY29uLWZpbGwtY29sb3IsIGN1cnJlbnRjb2xvcik7XG4gICAgICAgIHN0cm9rZTogdmFyKC0taXJvbi1pY29uLXN0cm9rZS1jb2xvciwgbm9uZSk7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLWlyb24taWNvbi13aWR0aCwgMjRweCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0taXJvbi1pY29uLWhlaWdodCwgMjRweCk7XG4gICAgICAgIEBhcHBseSAtLWlyb24taWNvbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuYCxcblxuICBpczogJ2lyb24taWNvbicsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIGljb24gdG8gdXNlLiBUaGUgbmFtZSBzaG91bGQgYmUgb2YgdGhlIGZvcm06XG4gICAgICogYGljb25zZXRfbmFtZTppY29uX25hbWVgLlxuICAgICAqL1xuICAgIGljb246IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHRoZW1lIHRvIHVzZWQsIGlmIG9uZSBpcyBzcGVjaWZpZWQgYnkgdGhlXG4gICAgICogaWNvbnNldC5cbiAgICAgKi9cbiAgICB0aGVtZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB1c2luZyBpcm9uLWljb24gd2l0aG91dCBhbiBpY29uc2V0LCB5b3UgY2FuIHNldCB0aGUgc3JjIHRvIGJlXG4gICAgICogdGhlIFVSTCBvZiBhbiBpbmRpdmlkdWFsIGljb24gaW1hZ2UgZmlsZS4gTm90ZSB0aGF0IHRoaXMgd2lsbCB0YWtlXG4gICAgICogcHJlY2VkZW5jZSBvdmVyIGEgZ2l2ZW4gaWNvbiBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgc3JjOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHshSXJvbk1ldGF9XG4gICAgICovXG4gICAgX21ldGE6IHt2YWx1ZTogQmFzZS5jcmVhdGUoJ2lyb24tbWV0YScsIHt0eXBlOiAnaWNvbnNldCd9KX1cblxuICB9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfdXBkYXRlSWNvbihfbWV0YSwgaXNBdHRhY2hlZCknLFxuICAgICdfdXBkYXRlSWNvbih0aGVtZSwgaXNBdHRhY2hlZCknLFxuICAgICdfc3JjQ2hhbmdlZChzcmMsIGlzQXR0YWNoZWQpJyxcbiAgICAnX2ljb25DaGFuZ2VkKGljb24sIGlzQXR0YWNoZWQpJ1xuICBdLFxuXG4gIF9ERUZBVUxUX0lDT05TRVQ6ICdpY29ucycsXG5cbiAgX2ljb25DaGFuZ2VkOiBmdW5jdGlvbihpY29uKSB7XG4gICAgdmFyIHBhcnRzID0gKGljb24gfHwgJycpLnNwbGl0KCc6Jyk7XG4gICAgdGhpcy5faWNvbk5hbWUgPSBwYXJ0cy5wb3AoKTtcbiAgICB0aGlzLl9pY29uc2V0TmFtZSA9IHBhcnRzLnBvcCgpIHx8IHRoaXMuX0RFRkFVTFRfSUNPTlNFVDtcbiAgICB0aGlzLl91cGRhdGVJY29uKCk7XG4gIH0sXG5cbiAgX3NyY0NoYW5nZWQ6IGZ1bmN0aW9uKHNyYykge1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfdXNlc0ljb25zZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmljb24gfHwgIXRoaXMuc3JjO1xuICB9LFxuXG4gIC8qKiBAc3VwcHJlc3Mge3Zpc2liaWxpdHl9ICovXG4gIF91cGRhdGVJY29uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fdXNlc0ljb25zZXQoKSkge1xuICAgICAgaWYgKHRoaXMuX2ltZyAmJiB0aGlzLl9pbWcucGFyZW50Tm9kZSkge1xuICAgICAgICBkb20odGhpcy5yb290KS5yZW1vdmVDaGlsZCh0aGlzLl9pbWcpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX2ljb25OYW1lID09PSAnJykge1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pY29uc2V0TmFtZSAmJiB0aGlzLl9tZXRhKSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQgPSAvKiogQHR5cGUgez9Qb2x5bWVyLkljb25zZXR9ICovIChcbiAgICAgICAgICAgIHRoaXMuX21ldGEuYnlLZXkodGhpcy5faWNvbnNldE5hbWUpKTtcbiAgICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgICB0aGlzLl9pY29uc2V0LmFwcGx5SWNvbih0aGlzLCB0aGlzLl9pY29uTmFtZSwgdGhpcy50aGVtZSk7XG4gICAgICAgICAgdGhpcy51bmxpc3Rlbih3aW5kb3csICdpcm9uLWljb25zZXQtYWRkZWQnLCAnX3VwZGF0ZUljb24nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmxpc3Rlbih3aW5kb3csICdpcm9uLWljb25zZXQtYWRkZWQnLCAnX3VwZGF0ZUljb24nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICB0aGlzLl9pY29uc2V0LnJlbW92ZUljb24odGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuX2ltZykge1xuICAgICAgICB0aGlzLl9pbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGhpcy5faW1nLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB0aGlzLl9pbWcuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLl9pbWcuc3JjID0gdGhpcy5zcmM7XG4gICAgICBkb20odGhpcy5yb290KS5hcHBlbmRDaGlsZCh0aGlzLl9pbWcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuXG4vKipcbmBpcm9uLW1lZGlhLXF1ZXJ5YCBjYW4gYmUgdXNlZCB0byBkYXRhIGJpbmQgdG8gYSBDU1MgbWVkaWEgcXVlcnkuXG5UaGUgYHF1ZXJ5YCBwcm9wZXJ0eSBpcyBhIGJhcmUgQ1NTIG1lZGlhIHF1ZXJ5LlxuVGhlIGBxdWVyeS1tYXRjaGVzYCBwcm9wZXJ0eSBpcyBhIGJvb2xlYW4gcmVwcmVzZW50aW5nIHdoZXRoZXIgdGhlIHBhZ2UgbWF0Y2hlc1xudGhhdCBtZWRpYSBxdWVyeS5cblxuRXhhbXBsZTpcblxuYGBgaHRtbFxuPGlyb24tbWVkaWEtcXVlcnkgcXVlcnk9XCIobWluLXdpZHRoOiA2MDBweClcIiBxdWVyeS1tYXRjaGVzPVwie3txdWVyeU1hdGNoZXN9fVwiPlxuPC9pcm9uLW1lZGlhLXF1ZXJ5PlxuYGBgXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG5AZWxlbWVudCBpcm9uLW1lZGlhLXF1ZXJ5XG4qL1xuUG9seW1lcih7XG5cbiAgaXM6ICdpcm9uLW1lZGlhLXF1ZXJ5JyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgQm9vbGVhbiByZXR1cm4gdmFsdWUgb2YgdGhlIG1lZGlhIHF1ZXJ5LlxuICAgICAqL1xuICAgIHF1ZXJ5TWF0Y2hlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVhZE9ubHk6IHRydWUsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgQ1NTIG1lZGlhIHF1ZXJ5IHRvIGV2YWx1YXRlLlxuICAgICAqL1xuICAgIHF1ZXJ5OiB7dHlwZTogU3RyaW5nLCBvYnNlcnZlcjogJ3F1ZXJ5Q2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHF1ZXJ5IGF0dHJpYnV0ZSBpcyBhc3N1bWVkIHRvIGJlIGEgY29tcGxldGUgbWVkaWEgcXVlcnlcbiAgICAgKiBzdHJpbmcgcmF0aGVyIHRoYW4gYSBzaW5nbGUgbWVkaWEgZmVhdHVyZS5cbiAgICAgKi9cbiAgICBmdWxsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbihNZWRpYVF1ZXJ5TGlzdCl9XG4gICAgICovXG4gICAgX2JvdW5kTVFIYW5kbGVyOiB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7TWVkaWFRdWVyeUxpc3R9XG4gICAgICovXG4gICAgX21xOiB7dmFsdWU6IG51bGx9XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzLnF1ZXJ5Q2hhbmdlZCgpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZW1vdmUoKTtcbiAgfSxcblxuICBfYWRkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbXEpIHtcbiAgICAgIHRoaXMuX21xLmFkZExpc3RlbmVyKHRoaXMuX2JvdW5kTVFIYW5kbGVyKTtcbiAgICB9XG4gIH0sXG5cbiAgX3JlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX21xKSB7XG4gICAgICB0aGlzLl9tcS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9ib3VuZE1RSGFuZGxlcik7XG4gICAgfVxuICAgIHRoaXMuX21xID0gbnVsbDtcbiAgfSxcblxuICBxdWVyeUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZSgpO1xuICAgIHZhciBxdWVyeSA9IHRoaXMucXVlcnk7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZnVsbCAmJiBxdWVyeVswXSAhPT0gJygnKSB7XG4gICAgICBxdWVyeSA9ICcoJyArIHF1ZXJ5ICsgJyknO1xuICAgIH1cbiAgICB0aGlzLl9tcSA9IHdpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KTtcbiAgICB0aGlzLl9hZGQoKTtcbiAgICB0aGlzLnF1ZXJ5SGFuZGxlcih0aGlzLl9tcSk7XG4gIH0sXG5cbiAgcXVlcnlIYW5kbGVyOiBmdW5jdGlvbihtcSkge1xuICAgIHRoaXMuX3NldFF1ZXJ5TWF0Y2hlcyhtcS5tYXRjaGVzKTtcbiAgfVxuXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uT3ZlcmxheUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1vdmVybGF5LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAgVXNlIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgIGFuZCBgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuaHRtbGAgdG9cbiAgaW1wbGVtZW50IGEgTWF0ZXJpYWwgRGVzaWduIGRpYWxvZy5cblxuICBGb3IgZXhhbXBsZSwgaWYgYDxwYXBlci1kaWFsb2ctaW1wbD5gIGltcGxlbWVudHMgdGhpcyBiZWhhdmlvcjpcblxuICAgICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgICAgIDxkaXY+RGlhbG9nIGJvZHk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1kaXNtaXNzPkNhbmNlbDwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1jb25maXJtPkFjY2VwdDwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICBgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuaHRtbGAgcHJvdmlkZSBzdHlsZXMgZm9yIGEgaGVhZGVyLCBjb250ZW50IGFyZWEsXG4gIGFuZCBhbiBhY3Rpb24gYXJlYSBmb3IgYnV0dG9ucy4gVXNlIHRoZSBgPGgyPmAgdGFnIGZvciB0aGUgaGVhZGVyIGFuZCB0aGVcbiAgYGJ1dHRvbnNgIGNsYXNzIGZvciB0aGUgYWN0aW9uIGFyZWEuIFlvdSBjYW4gdXNlIHRoZSBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgXG4gIGVsZW1lbnQgKGluIGl0cyBvd24gcmVwb3NpdG9yeSkgaWYgeW91IG5lZWQgYSBzY3JvbGxpbmcgY29udGVudCBhcmVhLlxuXG4gIFVzZSB0aGUgYGRpYWxvZy1kaXNtaXNzYCBhbmQgYGRpYWxvZy1jb25maXJtYCBhdHRyaWJ1dGVzIG9uIGludGVyYWN0aXZlXG4gIGNvbnRyb2xzIHRvIGNsb3NlIHRoZSBkaWFsb2cuIElmIHRoZSB1c2VyIGRpc21pc3NlcyB0aGUgZGlhbG9nIHdpdGhcbiAgYGRpYWxvZy1jb25maXJtYCwgdGhlIGBjbG9zaW5nUmVhc29uYCB3aWxsIHVwZGF0ZSB0byBpbmNsdWRlIGBjb25maXJtZWQ6XG4gIHRydWVgLlxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG5cbiAgVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImRpYWxvZ1wiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdGhlIGNvbnRleHQsIGl0IG1heVxuICBiZSBtb3JlIGFwcHJvcHJpYXRlIHRvIG92ZXJyaWRlIHRoaXMgYXR0cmlidXRlIHdpdGggYHJvbGU9XCJhbGVydGRpYWxvZ1wiYC5cblxuICBJZiBgbW9kYWxgIGlzIHNldCwgdGhlIGVsZW1lbnQgd2lsbCBwcmV2ZW50IHRoZSBmb2N1cyBmcm9tIGV4aXRpbmcgdGhlXG4gIGVsZW1lbnQuIEl0IHdpbGwgYWxzbyBlbnN1cmUgdGhhdCBmb2N1cyByZW1haW5zIGluIHRoZSBkaWFsb2cuXG5cbiAgQGhlcm8gaGVyby5zdmdcbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJEaWFsb2dCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJEaWFsb2dCZWhhdmlvckltcGwgPSB7XG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHsncm9sZSc6ICdkaWFsb2cnLCAndGFiaW5kZXgnOiAnLTEnfSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiBgbW9kYWxgIGlzIHRydWUsIHRoaXMgaW1wbGllcyBgbm8tY2FuY2VsLW9uLW91dHNpZGUtY2xpY2tgLFxuICAgICAqIGBuby1jYW5jZWwtb24tZXNjLWtleWAgYW5kIGB3aXRoLWJhY2tkcm9wYC5cbiAgICAgKi9cbiAgICBtb2RhbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfX3JlYWRpZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX21vZGFsQ2hhbmdlZChtb2RhbCwgX19yZWFkaWVkKSddLFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX29uRGlhbG9nQ2xpY2snfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBPbmx5IG5vdyB0aGVzZSBwcm9wZXJ0aWVzIGNhbiBiZSByZWFkLlxuICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXkgPSB0aGlzLm5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcDtcbiAgICB0aGlzLl9fcmVhZGllZCA9IHRydWU7XG4gIH0sXG5cbiAgX21vZGFsQ2hhbmdlZDogZnVuY3Rpb24obW9kYWwsIHJlYWRpZWQpIHtcbiAgICAvLyBtb2RhbCBpbXBsaWVzIG5vQ2FuY2VsT25PdXRzaWRlQ2xpY2ssIG5vQ2FuY2VsT25Fc2NLZXkgYW5kIHdpdGhCYWNrZHJvcC5cbiAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBlbGVtZW50IHRvIGJlIHJlYWR5IGJlZm9yZSB3ZSBjYW4gcmVhZCB0aGVcbiAgICAvLyBwcm9wZXJ0aWVzIHZhbHVlcy5cbiAgICBpZiAoIXJlYWRpZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleSA9IHRoaXMubm9DYW5jZWxPbkVzY0tleTtcbiAgICAgIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3A7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ID0gdHJ1ZTtcbiAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIHdhcyBjaGFuZ2VkIHRvIGZhbHNlLCBsZXQgaXQgZmFsc2UuXG4gICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPVxuICAgICAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayAmJiB0aGlzLl9fcHJldk5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgPVxuICAgICAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSAmJiB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgICB0aGlzLndpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wICYmIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wO1xuICAgIH1cbiAgfSxcblxuICBfdXBkYXRlQ2xvc2luZ1JlYXNvbkNvbmZpcm1lZDogZnVuY3Rpb24oY29uZmlybWVkKSB7XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uID0gdGhpcy5jbG9zaW5nUmVhc29uIHx8IHt9O1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbi5jb25maXJtZWQgPSBjb25maXJtZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdpbGwgZGlzbWlzcyB0aGUgZGlhbG9nIGlmIHVzZXIgY2xpY2tlZCBvbiBhbiBlbGVtZW50IHdpdGggZGlhbG9nLWRpc21pc3NcbiAgICogb3IgZGlhbG9nLWNvbmZpcm0gYXR0cmlidXRlLlxuICAgKi9cbiAgX29uRGlhbG9nQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gU2VhcmNoIGZvciB0aGUgZWxlbWVudCB3aXRoIGRpYWxvZy1jb25maXJtIG9yIGRpYWxvZy1kaXNtaXNzLFxuICAgIC8vIGZyb20gdGhlIHJvb3QgdGFyZ2V0IHVudGlsIHRoaXMgKGV4Y2x1ZGVkKS5cbiAgICB2YXIgcGF0aCA9IGRvbShldmVudCkucGF0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGguaW5kZXhPZih0aGlzKTsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHRhcmdldCA9IHBhdGhbaV07XG4gICAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSAmJlxuICAgICAgICAgICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctZGlzbWlzcycpIHx8XG4gICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1jb25maXJtJykpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsb3NpbmdSZWFzb25Db25maXJtZWQoXG4gICAgICAgICAgICB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctY29uZmlybScpKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJEaWFsb2dCZWhhdmlvciA9XG4gICAgW0lyb25PdmVybGF5QmVoYXZpb3IsIFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nLlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcmAgfCBEaWFsb2cgYmFja2dyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWRpYWxvZy1jb2xvcmAgfCBEaWFsb2cgZm9yZWdyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWRpYWxvZ2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBkaWFsb2cgfCBge31gXG5gLS1wYXBlci1kaWFsb2ctdGl0bGVgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGl0bGUgKGA8aDI+YCkgZWxlbWVudCB8IGB7fWBcbmAtLXBhcGVyLWRpYWxvZy1idXR0b24tY29sb3JgIHwgQnV0dG9uIGFyZWEgZm9yZWdyb3VuZCBjb2xvciB8IGAtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcmBcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3NoYWRvdy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDI0cHggNDBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLm5vLXBhZGRpbmcpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCo6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoaXMgc2VsZWN0b3Igd2FzIFxcYDpob3N0ID4gOjpjb250ZW50IGgyXFxgLiBJbiAyLnggPHNsb3Q+IGFsbG93c1xuICAgICAgdG8gc2VsZWN0IGRpcmVjdCBjaGlsZHJlbiBvbmx5LCB3aGljaCBpbmNyZWFzZXMgdGhlIHdlaWdodCBvZiB0aGlzXG4gICAgICBzZWxlY3Rvciwgc28gd2UgaGF2ZSB0byByZS1kZWZpbmUgZmlyc3QtY2hpbGQvbGFzdC1jaGlsZCBtYXJnaW5zIGJlbG93LiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDIpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC10aXRsZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICAvKiBBcHBseSBtaXhpbiBhZ2FpbiwgaW4gY2FzZSBpdCBzZXRzIG1hcmdpbi10b3AuICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMjpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFwcGx5IG1peGluIGFnYWluLCBpbiBjYXNlIGl0IHNldHMgbWFyZ2luLWJvdHRvbS4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgucGFwZXItZGlhbG9nLWJ1dHRvbnMpLFxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLmJ1dHRvbnMpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1idXR0b24tY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWVuZC1qdXN0aWZpZWQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcblxuaW1wb3J0IHtQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltEaWFsb2dzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvZGlhbG9ncy5odG1sKVxuXG5gcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGltcGxlbWVudHMgYSBzY3JvbGxpbmcgYXJlYSB1c2VkIGluIGEgTWF0ZXJpYWwgRGVzaWduXG5kaWFsb2cuIEl0IHNob3dzIGEgZGl2aWRlciBhdCB0aGUgdG9wIGFuZC9vciBib3R0b20gaW5kaWNhdGluZyBtb3JlIGNvbnRlbnQsXG5kZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLiBVc2UgdGhpcyB0b2dldGhlciB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAuXG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG5JdCBzaG93cyBhIHRvcCBkaXZpZGVyIGFmdGVyIHNjcm9sbGluZyBpZiBpdCBpcyBub3QgdGhlIGZpcnN0IGNoaWxkIGluIGl0c1xucGFyZW50IGNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYWJvdmUuIEl0IHNob3dzIGEgYm90dG9tXG5kaXZpZGVyIGlmIGl0IGlzIHNjcm9sbGFibGUgYW5kIGl0IGlzIG5vdCB0aGUgbGFzdCBjaGlsZCBpbiBpdHMgcGFyZW50XG5jb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGJlbG93LiBUaGUgYm90dG9tIGRpdmlkZXIgaXMgaGlkZGVuXG5pZiBpdCBpcyBzY3JvbGxlZCB0byB0aGUgYm90dG9tLlxuXG5JZiBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIGlzIG5vdCBhIGRpcmVjdCBjaGlsZCBvZiB0aGUgZWxlbWVudCBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLCByZW1lbWJlciB0byBzZXQgdGhlIGBkaWFsb2dFbGVtZW50YDpcblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbCBpZD1cIm15RGlhbG9nXCI+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJteS1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgPGg0PlN1Yi1oZWFkZXI8L2g0PlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICAgIDxzY3JpcHQ+XG4gICAgICB2YXIgc2Nyb2xsYWJsZSA9XG5Qb2x5bWVyLmRvbShteURpYWxvZykucXVlcnlTZWxlY3RvcigncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnKTtcbiAgICAgIHNjcm9sbGFibGUuZGlhbG9nRWxlbWVudCA9IG15RGlhbG9nO1xuICAgIDwvc2NyaXB0PlxuXG4jIyMgU3R5bGluZ1xuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCB8IE1peGluIGZvciB0aGUgc2Nyb2xsYWJsZSBjb250ZW50IHwge31cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5pcy1zY3JvbGxlZDpub3QoOmZpcnN0LWNoaWxkKSk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNhbi1zY3JvbGw6bm90KC5zY3JvbGxlZC10by1ib3R0b20pOm5vdCg6bGFzdC1jaGlsZCkpOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG5cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNjcm9sbDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU7XG4gICAgICB9XG5cbiAgICAgIC5maXQge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsYWJsZVwiIGNsYXNzPVwic2Nyb2xsYWJsZVwiIG9uLXNjcm9sbD1cInVwZGF0ZVNjcm9sbFN0YXRlXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItZGlhbG9nLXNjcm9sbGFibGUnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaWFsb2cgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmBcbiAgICAgKiBjb250YWluaW5nIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7P05vZGV9XG4gICAgICovXG4gICAgZGlhbG9nRWxlbWVudDoge3R5cGU6IE9iamVjdH1cblxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICovXG4gIGdldCBzY3JvbGxUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5zY3JvbGxhYmxlO1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ25vLXBhZGRpbmcnKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlU2Nyb2xsU3RhdGUuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgdXBkYXRlU2Nyb2xsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ2lzLXNjcm9sbGVkJywgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID4gMCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ2Nhbi1zY3JvbGwnLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdzY3JvbGxlZC10by1ib3R0b20nLFxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbFRhcmdldC5vZmZzZXRIZWlnaHQgPj1cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gIH0sXG5cbiAgX2Vuc3VyZVRhcmdldDogZnVuY3Rpb24oKSB7XG4gICAgLy8gUmVhZCBwYXJlbnRFbGVtZW50IGluc3RlYWQgb2YgcGFyZW50Tm9kZSBpbiBvcmRlciB0byBza2lwIHNoYWRvd1Jvb3RzLlxuICAgIHRoaXMuZGlhbG9nRWxlbWVudCA9IHRoaXMuZGlhbG9nRWxlbWVudCB8fCB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gQ2hlY2sgaWYgZGlhbG9nIGltcGxlbWVudHMgcGFwZXItZGlhbG9nLWJlaGF2aW9yLiBJZiBub3QsIGZpdFxuICAgIC8vIHNjcm9sbFRhcmdldCB0byBob3N0LlxuICAgIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQgJiYgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycyAmJlxuICAgICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzLmluZGV4T2YoUGFwZXJEaWFsb2dCZWhhdmlvckltcGwpID49IDApIHtcbiAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5zaXppbmdUYXJnZXQgPSB0aGlzLnNjcm9sbFRhcmdldDtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpdCcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5kaWFsb2dFbGVtZW50KSB7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmaXQnKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiZnVuY3Rpb24gYWRkTWV0aG9kcyh3b3JrZXIsIG1ldGhvZHMpIHtcbiAgdmFyIGMgPSAwO1xuICB2YXIgY2FsbGJhY2tzID0ge307XG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZCA9IGUuZGF0YTtcbiAgICBpZiAoZC50eXBlICE9PSAnUlBDJykgeyByZXR1cm47IH1cblxuICAgIGlmIChkLmlkKSB7XG4gICAgICB2YXIgZiA9IGNhbGxiYWNrc1tkLmlkXTtcblxuICAgICAgaWYgKGYpIHtcbiAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tkLmlkXTtcblxuICAgICAgICBpZiAoZC5lcnJvcikge1xuICAgICAgICAgIGZbMV0oT2JqZWN0LmFzc2lnbihFcnJvcihkLmVycm9yLm1lc3NhZ2UpLCBkLmVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZlswXShkLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgZXZ0LmluaXRFdmVudChkLm1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgIGV2dC5kYXRhID0gZC5wYXJhbXM7XG4gICAgICB3b3JrZXIuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgfSk7XG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgd29ya2VyW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgcGFyYW1zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGlkID0gKytjO1xuICAgICAgY2FsbGJhY2tzW2lkXSA9IFthLCBiXTtcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdSUEMnLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWV0aG9kcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJwYy13cmFwcGVyLmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFrREE7QUFuREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvRUE7QUFDQTtBQXVCQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJBO0FBNEJBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEvR0E7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUVBO0FBRUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFBQTtBQUFBO0FBOUJBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEzRUE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQVlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRkE7QUFxRkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBdUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBO0FBNkNBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBVUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBOzs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=