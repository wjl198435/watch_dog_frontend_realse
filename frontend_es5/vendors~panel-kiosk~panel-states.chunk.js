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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > ::slotted(:not(slot):not(.iron-selected)) {\n        display: none !important;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'iron-pages',
  behaviors: [_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"], _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronSelectableBehavior"]],
  properties: {
    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {
      type: String,
      value: null
    }
  },
  observers: ['_selectedPageChanged(selected)'],
  _selectedPageChanged: function _selectedPageChanged(selected, old) {
    this.async(this.notifyResize);
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

var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<iron-iconset-svg name=\"paper-dropdown-menu\" size=\"24\">\n<svg><defs>\n<g id=\"arrow-drop-down\"><path d=\"M7 10l5 5 5-5z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>";
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

var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<dom-module id=\"paper-dropdown-menu-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1raW9za35wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1iYXNlL2Zvcm0tZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvZWZmZWN0cy93YXRlcmZhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tcGFnZXMvaXJvbi1wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdyYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQgfSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgICAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICcuLi9hcHAtc2Nyb2xsLWVmZmVjdHMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge3JlZ2lzdGVyRWZmZWN0fSBmcm9tICcuLi8uLi9oZWxwZXJzL2hlbHBlcnMuanMnO1xuLyoqXG4gKiBUb2dnbGVzIHRoZSBzaGFkb3cgcHJvcGVydHkgaW4gYXBwLWhlYWRlciB3aGVuIGNvbnRlbnQgaXMgc2Nyb2xsZWQgdG8gY3JlYXRlXG4gKiBhIHNlbnNlIG9mIGRlcHRoIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHRoZSBjb250ZW50IHVuZGVybmVhdGguXG4gKi9cbnJlZ2lzdGVyRWZmZWN0KCd3YXRlcmZhbGwnLCB7XG4gIC8qKlxuICAgKiAgQHRoaXMgUG9seW1lci5BcHBMYXlvdXQuRWxlbWVudFdpdGhCYWNrZ3JvdW5kXG4gICAqL1xuICBydW46IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICB0aGlzLnNoYWRvdyA9IHRoaXMuaXNPblNjcmVlbigpICYmIHRoaXMuaXNDb250ZW50QmVsb3coKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvblJlc2l6YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25TZWxlY3RhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYGlyb24tcGFnZXNgIGlzIHVzZWQgdG8gc2VsZWN0IG9uZSBvZiBpdHMgY2hpbGRyZW4gdG8gc2hvdy4gT25lIHVzZSBpcyB0byBjeWNsZVxudGhyb3VnaCBhIGxpc3Qgb2YgY2hpbGRyZW4gXCJwYWdlc1wiLlxuXG5FeGFtcGxlOlxuXG4gICAgPGlyb24tcGFnZXMgc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICA8ZGl2Pk9uZTwvZGl2PlxuICAgICAgPGRpdj5Ud288L2Rpdj5cbiAgICAgIDxkaXY+VGhyZWU8L2Rpdj5cbiAgICA8L2lyb24tcGFnZXM+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tcGFnZXMnKTtcbiAgICAgICAgcGFnZXMuc2VsZWN0TmV4dCgpO1xuICAgICAgfSk7XG4gICAgPC9zY3JpcHQ+XG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKDpub3Qoc2xvdCk6bm90KC5pcm9uLXNlbGVjdGVkKSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdpcm9uLXBhZ2VzJyxcbiAgYmVoYXZpb3JzOiBbSXJvblJlc2l6YWJsZUJlaGF2aW9yLCBJcm9uU2VsZWN0YWJsZUJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvLyBhcyB0aGUgc2VsZWN0ZWQgcGFnZSBpcyB0aGUgb25seSBvbmUgdmlzaWJsZSwgYWN0aXZhdGVFdmVudFxuICAgIC8vIGlzIGJvdGggbm9uLXNlbnNpY2FsIGFuZCBwcm9ibGVtYXRpYzsgZS5nLiBpbiBjYXNlcyB3aGVyZSBhIHVzZXJcbiAgICAvLyBoYW5kbGVyIGF0dGVtcHRzIHRvIGNoYW5nZSB0aGUgcGFnZSBhbmQgdGhlIGFjdGl2YXRlRXZlbnRcbiAgICAvLyBoYW5kbGVyIGltbWVkaWF0ZWx5IGNoYW5nZXMgaXQgYmFja1xuICAgIGFjdGl2YXRlRXZlbnQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zZWxlY3RlZFBhZ2VDaGFuZ2VkKHNlbGVjdGVkKSddLFxuXG4gIF9zZWxlY3RlZFBhZ2VDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3RlZCwgb2xkKSB7XG4gICAgdGhpcy5hc3luYyh0aGlzLm5vdGlmeVJlc2l6ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbnNldC1zdmcvaXJvbi1pY29uc2V0LXN2Zy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYDxpcm9uLWljb25zZXQtc3ZnIG5hbWU9XCJwYXBlci1kcm9wZG93bi1tZW51XCIgc2l6ZT1cIjI0XCI+XG48c3ZnPjxkZWZzPlxuPGcgaWQ9XCJhcnJvdy1kcm9wLWRvd25cIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIj48L3BhdGg+PC9nPlxuPC9kZWZzPjwvc3ZnPlxuPC9pcm9uLWljb25zZXQtc3ZnPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgYDxkb20tbW9kdWxlIGlkPVwicGFwZXItZHJvcGRvd24tbWVudS1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIC8qIE5PVEUoY2RhdGEpOiBCb3RoIHZhbHVlcyBhcmUgbmVlZGVkLCBzaW5jZSBzb21lIHBob25lcyByZXF1aXJlIHRoZVxuICAgICAgICAgKiB2YWx1ZSB0byBiZSBcXGB0cmFuc3BhcmVudFxcYC5cbiAgICAgICAgICovXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDoge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm9pbmtdKSBwYXBlci1yaXBwbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSBwYXBlci1yaXBwbGUge1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICByaWdodDogMHB4O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1tZW51LWJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtYnV0dG9uO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIGlyb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWljb247XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJy4vcGFwZXItc3Bpbm5lci1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVyU3Bpbm5lckJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgXG4gIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItc3Bpbm5lci1zdHlsZXNcIj48L3N0eWxlPlxuXG4gIDxkaXYgaWQ9XCJzcGlubmVyQ29udGFpbmVyXCIgY2xhc3MtbmFtZT1cIltbX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlcyhhY3RpdmUsIF9fY29vbGluZ0Rvd24pXV1cIiBvbi1hbmltYXRpb25lbmQ9XCJfX3Jlc2V0XCIgb24td2Via2l0LWFuaW1hdGlvbi1lbmQ9XCJfX3Jlc2V0XCI+XG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgbXVsdGlwbGUgY29sb3IgbWF0ZXJpYWwgZGVzaWduIGNpcmN1bGFyIHNwaW5uZXIuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG5UaGUgZGVmYXVsdCBzcGlubmVyIGN5Y2xlcyBiZXR3ZWVuIGZvdXIgbGF5ZXJzIG9mIGNvbG9yczsgYnkgZGVmYXVsdCB0aGV5IGFyZVxuYmx1ZSwgcmVkLCB5ZWxsb3cgYW5kIGdyZWVuLiBJdCBjYW4gYmUgY3VzdG9taXplZCB0byBjeWNsZSBiZXR3ZWVuIGZvdXJcbmRpZmZlcmVudCBjb2xvcnMuIFVzZSA8cGFwZXItc3Bpbm5lci1saXRlPiBmb3Igc2luZ2xlIGNvbG9yIHNwaW5uZXJzLlxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5BbHQgYXR0cmlidXRlIHNob3VsZCBiZSBzZXQgdG8gcHJvdmlkZSBhZGVxdWF0ZSBjb250ZXh0IGZvciBhY2Nlc3NpYmlsaXR5LiBJZlxubm90IHByb3ZpZGVkLCBpdCBkZWZhdWx0cyB0byAnbG9hZGluZycuIEVtcHR5IGFsdCBjYW4gYmUgcHJvdmlkZWQgdG8gbWFyayB0aGVcbmVsZW1lbnQgYXMgZGVjb3JhdGl2ZSBpZiBhbHRlcm5hdGl2ZSBjb250ZW50IGlzIHByb3ZpZGVkIGluIGFub3RoZXIgZm9ybSAoZS5nLiBhXG50ZXh0IGJsb2NrIGZvbGxvd2luZyB0aGUgc3Bpbm5lcikuXG5cbiAgICA8cGFwZXItc3Bpbm5lciBhbHQ9XCJMb2FkaW5nIGNvbnRhY3RzIGxpc3RcIiBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0xLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmaXJzdCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWJsdWUtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0yLWNvbG9yYCB8IENvbG9yIG9mIHRoZSBzZWNvbmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1yZWQtNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yYCB8IENvbG9yIG9mIHRoZSB0aGlyZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXllbGxvdy01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZvdXJ0aCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLWdyZWVuLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zcGlubmVyJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlclNwaW5uZXJCZWhhdmlvcl1cbn0pO1xuIiwiZnVuY3Rpb24gYWRkTWV0aG9kcyh3b3JrZXIsIG1ldGhvZHMpIHtcbiAgdmFyIGMgPSAwO1xuICB2YXIgY2FsbGJhY2tzID0ge307XG4gIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZCA9IGUuZGF0YTtcbiAgICBpZiAoZC50eXBlICE9PSAnUlBDJykgeyByZXR1cm47IH1cblxuICAgIGlmIChkLmlkKSB7XG4gICAgICB2YXIgZiA9IGNhbGxiYWNrc1tkLmlkXTtcblxuICAgICAgaWYgKGYpIHtcbiAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tkLmlkXTtcblxuICAgICAgICBpZiAoZC5lcnJvcikge1xuICAgICAgICAgIGZbMV0oT2JqZWN0LmFzc2lnbihFcnJvcihkLmVycm9yLm1lc3NhZ2UpLCBkLmVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZlswXShkLnJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgZXZ0LmluaXRFdmVudChkLm1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgIGV2dC5kYXRhID0gZC5wYXJhbXM7XG4gICAgICB3b3JrZXIuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgIH1cbiAgfSk7XG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgd29ya2VyW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcGFyYW1zID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgcGFyYW1zWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGlkID0gKytjO1xuICAgICAgY2FsbGJhY2tzW2lkXSA9IFthLCBiXTtcbiAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdSUEMnLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWV0aG9kcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJwYy13cmFwcGVyLmpzLm1hcFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQWVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTs7Ozs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBY0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFoQ0E7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQU9BOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFvRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUF5Q0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0NBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==