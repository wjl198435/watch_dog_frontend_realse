(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-profile"],{

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

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

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
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
  },
  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function _updateLayoutStates() {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


    var containerStyle = this.$.contentContainer.style;

    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-label/iron-label.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-label/iron-label.js ***!
  \********************************************************/
/*! exports provided: IronLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronLabel", function() { return IronLabel; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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
`<iron-label>` provides a version of the `<label>` element that works with
Custom Elements as well as native elements.

All text in the `iron-label` will be applied to the target element as a
screen-reader accessible description.

There are three ways to use `iron-label` to target an element:

1. place an element inside iron-label and some text:

        <iron-label>
          Label for the Button
          <paper-button>button</paper-button>
        </iron-label>

2. place some elements inside iron-label and target one with the
`iron-label-target` attribute. The other elements will provide the label for
that element Note: This is not necessary if the element you want to label is the
first element child of iron-label:

        <iron-label>
          <span>Label for the Button</span>
          <paper-button iron-label-target>button</paper-button>
        </iron-label>

        <iron-label>
          <paper-button>button</paper-button>
          <span>Label for the Button</span>
        </iron-label>

3. Set the `for` attribute on the `iron-label` element with the id of the target
element in the same document or ShadowRoot:

        <iron-label for="foo">
          Context for the button with the "foo" class"
        </iron-label>
        <paper-button id="foo">Far away button</paper-button>

All taps on the `iron-label` will be forwarded to the "target" element.

@group Iron Elements
@element iron-label
@demo demo/index.html
@homepage polymer.github.io
*/

var IronLabel = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'iron-label',
  listeners: {
    'tap': '_tapHandler'
  },
  properties: {
    /**
     * An ID reference to another element that needs to be
     * labelled by this `iron-label` element.
     */
    "for": {
      type: String,
      value: '',
      reflectToAttribute: true,
      observer: '_forChanged'
    },

    /**
     * @type {Element}
     */
    _forElement: Object
  },
  attached: function attached() {
    this._forChanged();
  },
  ready: function ready() {
    this._generateLabelId();
  },
  // generate a unique id for this element
  _generateLabelId: function _generateLabelId() {
    if (!this.id) {
      var id = 'iron-label-' + IronLabel._labelNumber++;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).setAttribute('id', id);
    }
  },
  _findTarget: function _findTarget() {
    if (this["for"]) {
      // external target
      var scope = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getOwnerRoot();
      return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(scope).querySelector('#' + this["for"]);
    } else {
      // explicit internal target
      var el = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).querySelector('[iron-label-target]');

      if (!el) {
        // implicit internal target
        el = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).firstElementChild;
      }

      return el;
    }
  },
  _tapHandler: function _tapHandler(ev) {
    if (!this._forElement) {
      return;
    }

    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(ev).localTarget;

    if (target === this._forElement) {
      return;
    }

    this._forElement.focus();

    this._forElement.click();
  },
  _applyLabelledBy: function _applyLabelledBy() {
    if (this._forElement) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this._forElement).setAttribute('aria-labelledby', this.id);
    }
  },
  _forChanged: function _forChanged() {
    if (this._forElement) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this._forElement).removeAttribute('aria-labelledby');
    }

    this._forElement = this._findTarget();

    this._applyLabelledBy();
  }
}); // global counter for unique label ids

IronLabel._labelNumber = 0;

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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






/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-item-body'
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1wcm9maWxlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtYmFzZS9mb3JtLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbGFiZWwvaXJvbi1sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBCYXNlRWxlbWVudCB9IGZyb20gJy4vYmFzZS1lbGVtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1lbGVtZW50JztcbmV4cG9ydCBjbGFzcyBGb3JtRWxlbWVudCBleHRlbmRzIEJhc2VFbGVtZW50IHtcbiAgICBjcmVhdGVSZW5kZXJSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicsIGRlbGVnYXRlc0ZvY3VzOiB0cnVlIH0pO1xuICAgIH1cbiAgICBjbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRBcmlhTGFiZWwobGFiZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgICAgIHRoaXMubWRjUm9vdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtLWVsZW1lbnQuanMubWFwIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7QXBwTGF5b3V0QmVoYXZpb3J9IGZyb20gJy4uL2FwcC1sYXlvdXQtYmVoYXZpb3IvYXBwLWxheW91dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuYXBwLWhlYWRlci1sYXlvdXQgaXMgYSB3cmFwcGVyIGVsZW1lbnQgdGhhdCBwb3NpdGlvbnMgYW4gYXBwLWhlYWRlciBhbmQgb3RoZXJcbmNvbnRlbnQuIFRoaXMgZWxlbWVudCB1c2VzIHRoZSBkb2N1bWVudCBzY3JvbGwgYnkgZGVmYXVsdCwgYnV0IGl0IGNhbiBhbHNvXG5kZWZpbmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuXG5Vc2luZyB0aGUgZG9jdW1lbnQgc2Nyb2xsOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQ+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cblVzaW5nIGFuIG93biBzY3JvbGxpbmcgcmVnaW9uOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24gc3R5bGU9XCJ3aWR0aDogMzAwcHg7IGhlaWdodDogNDAwcHg7XCI+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkFkZCB0aGUgYGZ1bGxibGVlZGAgYXR0cmlidXRlIHRvIGFwcC1oZWFkZXItbGF5b3V0IHRvIG1ha2UgaXQgZml0IHRoZSBzaXplIG9mXG5pdHMgY29udGFpbmVyOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgZnVsbGJsZWVkPlxuIC4uLlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5AZ3JvdXAgQXBwIEVsZW1lbnRzXG5AZWxlbWVudCBhcHAtaGVhZGVyLWxheW91dFxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zaW1wbGUuaHRtbCBTaW1wbGUgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zY3JvbGxpbmctcmVnaW9uLmh0bWwgU2Nyb2xsaW5nIFJlZ2lvblxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9tdXNpYy5odG1sIE11c2ljIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vZm9vdGVyLmh0bWwgRm9vdGVyIERlbW9cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlcixcbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnYXBwLWhlYWRlci1sYXlvdXQnLFxuICBiZWhhdmlvcnM6IFtBcHBMYXlvdXRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBjdXJyZW50IGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBkb2N1bWVudCBzY3JvbGwgdG8gY29udHJvbCB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIGhhc1Njcm9sbGluZ1JlZ2lvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydyZXNldExheW91dChpc0F0dGFjaGVkLCBoYXNTY3JvbGxpbmdSZWdpb24pJ10sXG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhcHAtaGVhZGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBoZWFkZXJcbiAgICovXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIGRvbSh0aGlzLiQuaGVhZGVyU2xvdCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpWzBdO1xuICB9LFxuXG4gIF91cGRhdGVMYXlvdXRTdGF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhaGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbGl6aW5nIGNsYXNzLCB3aGljaCBzdGF0aWNseSBwb3NpdGlvbnMgdGhlIGhlYWRlciBhbmRcbiAgICAvLyB0aGUgY29udGVudCB1bnRpbCB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy4kLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgLy8gVXBkYXRlIHNjcm9sbCB0YXJnZXQuXG4gICAgaGVhZGVyLnNjcm9sbFRhcmdldCA9IHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uID9cbiAgICAgICAgdGhpcy4kLmNvbnRlbnRDb250YWluZXIgOlxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vIEdldCBoZWFkZXIgaGVpZ2h0IGhlcmUgc28gdGhhdCBzdHlsZSByZWFkcyBhcmUgYmF0Y2hlZCB0b2dldGhlciBiZWZvcmVcbiAgICAvLyBzdHlsZSB3cml0ZXMgKGkuZS4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYmVsb3cpLlxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIFVwZGF0ZSB0aGUgaGVhZGVyIHBvc2l0aW9uLlxuICAgIGlmICghdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0O1xuICAgICAgICBoZWFkZXIuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArICdweCc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9IHJpZ2h0T2Zmc2V0ICsgJ3B4JztcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBjb250ZW50IGNvbnRhaW5lciBwb3NpdGlvbi5cbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0aGlzLiQuY29udGVudENvbnRhaW5lci5zdHlsZTtcbiAgICBpZiAoaGVhZGVyLmZpeGVkICYmICFoZWFkZXIuY29uZGVuc2VzICYmIHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICAvLyBJZiB0aGUgaGVhZGVyIHNpemUgZG9lcyBub3QgY2hhbmdlIGFuZCB3ZSdyZSB1c2luZyBhIHNjcm9sbGluZyByZWdpb24sXG4gICAgICAvLyBleGNsdWRlIHRoZSBoZWFkZXIgYXJlYSBmcm9tIHRoZSBzY3JvbGxpbmcgcmVnaW9uIHNvIHRoYXQgdGhlIGhlYWRlclxuICAgICAgLy8gZG9lc24ndCBvdmVybGFwIHRoZSBzY3JvbGxiYXIuXG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuYDxpcm9uLWxhYmVsPmAgcHJvdmlkZXMgYSB2ZXJzaW9uIG9mIHRoZSBgPGxhYmVsPmAgZWxlbWVudCB0aGF0IHdvcmtzIHdpdGhcbkN1c3RvbSBFbGVtZW50cyBhcyB3ZWxsIGFzIG5hdGl2ZSBlbGVtZW50cy5cblxuQWxsIHRleHQgaW4gdGhlIGBpcm9uLWxhYmVsYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHRhcmdldCBlbGVtZW50IGFzIGFcbnNjcmVlbi1yZWFkZXIgYWNjZXNzaWJsZSBkZXNjcmlwdGlvbi5cblxuVGhlcmUgYXJlIHRocmVlIHdheXMgdG8gdXNlIGBpcm9uLWxhYmVsYCB0byB0YXJnZXQgYW4gZWxlbWVudDpcblxuMS4gcGxhY2UgYW4gZWxlbWVudCBpbnNpZGUgaXJvbi1sYWJlbCBhbmQgc29tZSB0ZXh0OlxuXG4gICAgICAgIDxpcm9uLWxhYmVsPlxuICAgICAgICAgIExhYmVsIGZvciB0aGUgQnV0dG9uXG4gICAgICAgICAgPHBhcGVyLWJ1dHRvbj5idXR0b248L3BhcGVyLWJ1dHRvbj5cbiAgICAgICAgPC9pcm9uLWxhYmVsPlxuXG4yLiBwbGFjZSBzb21lIGVsZW1lbnRzIGluc2lkZSBpcm9uLWxhYmVsIGFuZCB0YXJnZXQgb25lIHdpdGggdGhlXG5gaXJvbi1sYWJlbC10YXJnZXRgIGF0dHJpYnV0ZS4gVGhlIG90aGVyIGVsZW1lbnRzIHdpbGwgcHJvdmlkZSB0aGUgbGFiZWwgZm9yXG50aGF0IGVsZW1lbnQgTm90ZTogVGhpcyBpcyBub3QgbmVjZXNzYXJ5IGlmIHRoZSBlbGVtZW50IHlvdSB3YW50IHRvIGxhYmVsIGlzIHRoZVxuZmlyc3QgZWxlbWVudCBjaGlsZCBvZiBpcm9uLWxhYmVsOlxuXG4gICAgICAgIDxpcm9uLWxhYmVsPlxuICAgICAgICAgIDxzcGFuPkxhYmVsIGZvciB0aGUgQnV0dG9uPC9zcGFuPlxuICAgICAgICAgIDxwYXBlci1idXR0b24gaXJvbi1sYWJlbC10YXJnZXQ+YnV0dG9uPC9wYXBlci1idXR0b24+XG4gICAgICAgIDwvaXJvbi1sYWJlbD5cblxuICAgICAgICA8aXJvbi1sYWJlbD5cbiAgICAgICAgICA8cGFwZXItYnV0dG9uPmJ1dHRvbjwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgIDxzcGFuPkxhYmVsIGZvciB0aGUgQnV0dG9uPC9zcGFuPlxuICAgICAgICA8L2lyb24tbGFiZWw+XG5cbjMuIFNldCB0aGUgYGZvcmAgYXR0cmlidXRlIG9uIHRoZSBgaXJvbi1sYWJlbGAgZWxlbWVudCB3aXRoIHRoZSBpZCBvZiB0aGUgdGFyZ2V0XG5lbGVtZW50IGluIHRoZSBzYW1lIGRvY3VtZW50IG9yIFNoYWRvd1Jvb3Q6XG5cbiAgICAgICAgPGlyb24tbGFiZWwgZm9yPVwiZm9vXCI+XG4gICAgICAgICAgQ29udGV4dCBmb3IgdGhlIGJ1dHRvbiB3aXRoIHRoZSBcImZvb1wiIGNsYXNzXCJcbiAgICAgICAgPC9pcm9uLWxhYmVsPlxuICAgICAgICA8cGFwZXItYnV0dG9uIGlkPVwiZm9vXCI+RmFyIGF3YXkgYnV0dG9uPC9wYXBlci1idXR0b24+XG5cbkFsbCB0YXBzIG9uIHRoZSBgaXJvbi1sYWJlbGAgd2lsbCBiZSBmb3J3YXJkZWQgdG8gdGhlIFwidGFyZ2V0XCIgZWxlbWVudC5cblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24tbGFiZWxcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuZXhwb3J0IGNvbnN0IElyb25MYWJlbCA9IFBvbHltZXIoe1xuICBpczogJ2lyb24tbGFiZWwnLFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX3RhcEhhbmRsZXInfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogQW4gSUQgcmVmZXJlbmNlIHRvIGFub3RoZXIgZWxlbWVudCB0aGF0IG5lZWRzIHRvIGJlXG4gICAgICogbGFiZWxsZWQgYnkgdGhpcyBgaXJvbi1sYWJlbGAgZWxlbWVudC5cbiAgICAgKi9cbiAgICBmb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX2ZvckNoYW5nZWQnXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBfZm9yRWxlbWVudDogT2JqZWN0XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZvckNoYW5nZWQoKTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZ2VuZXJhdGVMYWJlbElkKCk7XG4gIH0sXG5cbiAgLy8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgZm9yIHRoaXMgZWxlbWVudFxuICBfZ2VuZXJhdGVMYWJlbElkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgIHZhciBpZCA9ICdpcm9uLWxhYmVsLScgKyBJcm9uTGFiZWwuX2xhYmVsTnVtYmVyKys7XG4gICAgICBkb20odGhpcykuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZpbmRUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmZvcikge1xuICAgICAgLy8gZXh0ZXJuYWwgdGFyZ2V0XG4gICAgICB2YXIgc2NvcGUgPSBkb20odGhpcykuZ2V0T3duZXJSb290KCk7XG4gICAgICByZXR1cm4gZG9tKHNjb3BlKS5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXhwbGljaXQgaW50ZXJuYWwgdGFyZ2V0XG4gICAgICB2YXIgZWwgPSBkb20odGhpcykucXVlcnlTZWxlY3RvcignW2lyb24tbGFiZWwtdGFyZ2V0XScpO1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICAvLyBpbXBsaWNpdCBpbnRlcm5hbCB0YXJnZXRcbiAgICAgICAgZWwgPSBkb20odGhpcykuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9LFxuXG4gIF90YXBIYW5kbGVyOiBmdW5jdGlvbihldikge1xuICAgIGlmICghdGhpcy5fZm9yRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gZG9tKGV2KS5sb2NhbFRhcmdldDtcbiAgICBpZiAodGFyZ2V0ID09PSB0aGlzLl9mb3JFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2ZvckVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLl9mb3JFbGVtZW50LmNsaWNrKCk7XG4gIH0sXG5cbiAgX2FwcGx5TGFiZWxsZWRCeTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2ZvckVsZW1lbnQpIHtcbiAgICAgIGRvbSh0aGlzLl9mb3JFbGVtZW50KS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIHRoaXMuaWQpO1xuICAgIH1cbiAgfSxcblxuICBfZm9yQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2ZvckVsZW1lbnQpIHtcbiAgICAgIGRvbSh0aGlzLl9mb3JFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScpO1xuICAgIH1cbiAgICB0aGlzLl9mb3JFbGVtZW50ID0gdGhpcy5fZmluZFRhcmdldCgpO1xuICAgIHRoaXMuX2FwcGx5TGFiZWxsZWRCeSgpO1xuICB9XG59KTtcblxuLy8gZ2xvYmFsIGNvdW50ZXIgZm9yIHVuaXF1ZSBsYWJlbCBpZHNcbklyb25MYWJlbC5fbGFiZWxOdW1iZXIgPSAwO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcblVzZSBgPHBhcGVyLWl0ZW0tYm9keT5gIGluIGEgYDxwYXBlci1pdGVtPmAgb3IgYDxwYXBlci1pY29uLWl0ZW0+YCB0byBtYWtlIHR3by1cbm9yIHRocmVlLSBsaW5lIGl0ZW1zLiBJdCBpcyBhIGZsZXggaXRlbSB0aGF0IGlzIGEgdmVydGljYWwgZmxleGJveC5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgIDwvcGFwZXItaXRlbT5cblxuVGhlIGNoaWxkIGVsZW1lbnRzIHdpdGggdGhlIGBzZWNvbmRhcnlgIGF0dHJpYnV0ZSBpcyBnaXZlbiBzZWNvbmRhcnkgdGV4dFxuc3R5bGluZy5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdHdvLWxpbmUgaXRlbSB8IGA3MnB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHRocmVlLWxpbmUgaXRlbSB8IGA4OHB4YFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvcmAgfCBGb3JlZ3JvdW5kIGNvbG9yIGZvciB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGAtLXNlY29uZGFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYHt9YFxuXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIG5lZWRlZCBmb3IgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgdG8gd29yayBvbiBmZiAqL1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItanVzdGlmaWVkO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3R3by1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodCwgNzJweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aHJlZS1saW5lXSkge1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0LCA4OHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoW3NlY29uZGFyeV0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaXRlbS1ib2R5J1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0lBOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTs7O0FBR0E7QUFkQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBOUVBO0FBQ0E7QUFpRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFtQ0E7QUFwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==