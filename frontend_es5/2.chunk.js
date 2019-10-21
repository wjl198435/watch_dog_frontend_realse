(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js ***!
  \***************************************************************************/
/*! exports provided: DisableUpgradeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableUpgradeMixin", function() { return DisableUpgradeMixin; });
/* harmony import */ var _element_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js");
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
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
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


var DISABLED_ATTR = 'disable-upgrade';
/**
 * Element class mixin that allows the element to boot up in a non-enabled
 * state when the `disable-upgrade` attribute is present. This mixin is
 * designed to be used with element classes like PolymerElement that perform
 * initial startup work when they are first connected. When the
 * `disable-upgrade` attribute is removed, if the element is connected, it
 * boots up and "enables" as it otherwise would; if it is not connected, the
 * element boots up when it is next connected.
 *
 * Using `disable-upgrade` with PolymerElement prevents any data propagation
 * to the element, any element DOM from stamping, or any work done in
 * connected/disconnctedCallback from occuring, but it does not prevent work
 * done in the element constructor.
 *
 * Note, this mixin must be applied on top of any element class that
 * itself implements a `connectedCallback` so that it can control the work
 * done in `connectedCallback`. For example,
 *
 *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
 *
 * @mixinFunction
 * @polymer
 * @appliesMixin ElementMixin
 */

var DisableUpgradeMixin = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(function (base) {
  /**
   * @constructor
   * @extends {base}
   * @implements {Polymer_ElementMixin}
   * @private
   */
  var superClass = Object(_element_mixin_js__WEBPACK_IMPORTED_MODULE_0__["ElementMixin"])(base);
  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DisableUpgradeMixin}
   */

  var DisableUpgradeClass =
  /*#__PURE__*/
  function (_superClass) {
    _inherits(DisableUpgradeClass, _superClass);

    function DisableUpgradeClass() {
      _classCallCheck(this, DisableUpgradeClass);

      return _possibleConstructorReturn(this, _getPrototypeOf(DisableUpgradeClass).apply(this, arguments));
    }

    _createClass(DisableUpgradeClass, [{
      key: "attributeChangedCallback",

      /** @override */
      value: function attributeChangedCallback(name, old, value, namespace) {
        if (name == DISABLED_ATTR) {
          if (!this.__dataEnabled && value == null && this.isConnected) {
            _get(_getPrototypeOf(DisableUpgradeClass.prototype), "connectedCallback", this).call(this);
          }
        } else {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "attributeChangedCallback", this).call(this, name, old, value, namespace);
        }
      }
      /*
        NOTE: cannot gate on attribute because this is called before
        attributes are delivered. Therefore, we stub this out and
        call `super._initializeProperties()` manually.
      */

      /** @override */

    }, {
      key: "_initializeProperties",
      value: function _initializeProperties() {} // prevent user code in connected from running

      /** @override */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        if (this.__dataEnabled || !this.hasAttribute(DISABLED_ATTR)) {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "connectedCallback", this).call(this);
        }
      } // prevent element from turning on properties

      /** @override */

    }, {
      key: "_enableProperties",
      value: function _enableProperties() {
        if (!this.hasAttribute(DISABLED_ATTR)) {
          if (!this.__dataEnabled) {
            _get(_getPrototypeOf(DisableUpgradeClass.prototype), "_initializeProperties", this).call(this);
          }

          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "_enableProperties", this).call(this);
        }
      } // only go if "enabled"

      /** @override */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this.__dataEnabled) {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "disconnectedCallback", this).call(this);
        }
      }
    }], [{
      key: "observedAttributes",

      /** @override */
      get: function get() {
        return _get(_getPrototypeOf(DisableUpgradeClass), "observedAttributes", this).concat(DISABLED_ATTR);
      }
    }]);

    return DisableUpgradeClass;
  }(superClass);

  return DisableUpgradeClass;
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/color.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id=\"lumo-color\">\n  <template>\n    <style>\n      [theme~=\"dark\"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~=\"dark\"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-color-legacy\">\n  <template>\n    <style include=\"lumo-color\">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
/* Only needed for IE11 when you want to use the dark palette inside the light palette */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    @font-face {\n      font-family: 'lumo-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: \"\\ea01\";\n      --lumo-icons-align-left: \"\\ea02\";\n      --lumo-icons-align-right: \"\\ea03\";\n      --lumo-icons-angle-down: \"\\ea04\";\n      --lumo-icons-angle-left: \"\\ea05\";\n      --lumo-icons-angle-right: \"\\ea06\";\n      --lumo-icons-angle-up: \"\\ea07\";\n      --lumo-icons-arrow-down: \"\\ea08\";\n      --lumo-icons-arrow-left: \"\\ea09\";\n      --lumo-icons-arrow-right: \"\\ea0a\";\n      --lumo-icons-arrow-up: \"\\ea0b\";\n      --lumo-icons-bar-chart: \"\\ea0c\";\n      --lumo-icons-bell: \"\\ea0d\";\n      --lumo-icons-calendar: \"\\ea0e\";\n      --lumo-icons-checkmark: \"\\ea0f\";\n      --lumo-icons-chevron-down: \"\\ea10\";\n      --lumo-icons-chevron-left: \"\\ea11\";\n      --lumo-icons-chevron-right: \"\\ea12\";\n      --lumo-icons-chevron-up: \"\\ea13\";\n      --lumo-icons-clock: \"\\ea14\";\n      --lumo-icons-cog: \"\\ea15\";\n      --lumo-icons-cross: \"\\ea16\";\n      --lumo-icons-download: \"\\ea17\";\n      --lumo-icons-dropdown: \"\\ea18\";\n      --lumo-icons-edit: \"\\ea19\";\n      --lumo-icons-error: \"\\ea1a\";\n      --lumo-icons-eye: \"\\ea1b\";\n      --lumo-icons-eye-disabled: \"\\ea1c\";\n      --lumo-icons-menu: \"\\ea1d\";\n      --lumo-icons-minus: \"\\ea1e\";\n      --lumo-icons-ordered-list: \"\\ea1f\";\n      --lumo-icons-phone: \"\\ea20\";\n      --lumo-icons-photo: \"\\ea21\";\n      --lumo-icons-play: \"\\ea22\";\n      --lumo-icons-plus: \"\\ea23\";\n      --lumo-icons-redo: \"\\ea24\";\n      --lumo-icons-reload: \"\\ea25\";\n      --lumo-icons-search: \"\\ea26\";\n      --lumo-icons-undo: \"\\ea27\";\n      --lumo-icons-unordered-list: \"\\ea28\";\n      --lumo-icons-upload: \"\\ea29\";\n      --lumo-icons-user: \"\\ea2a\";\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);
/* NOTICE: Generated with 'gulp icons' */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-menu-overlay-core\">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part=\"overlay\"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part=\"overlay\"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part=\"overlay\"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-menu-overlay\">\n  <template>\n    <style include=\"lumo-overlay lumo-menu-overlay-core\">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part=\"overlay\"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part=\"content\"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part=\"backdrop\"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part=\"overlay\"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part=\"backdrop\"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part=\"overlay\"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
/* Split as a separate module because combo box can only use the "fullscreen" styles */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-overlay\">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part=\"overlay\"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part=\"content\"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part=\"backdrop\"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part=\"backdrop\"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js":
/*!***********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/sizing.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js":
/*!************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/spacing.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/style.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/typography.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, \"Roboto\", \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id=\"lumo-typography\">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can\u2019t combine with the above selector because that doesn\u2019t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~=\"font-size-s\"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~=\"font-size-xs\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/version.js":
/*!************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/version.js ***!
  \************************************************************/
/*! exports provided: Lumo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lumo", function() { return Lumo; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Lumo =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Lumo, _HTMLElement);

  function Lumo() {
    _classCallCheck(this, Lumo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Lumo).apply(this, arguments));
  }

  _createClass(Lumo, null, [{
    key: "version",
    get: function get() {
      return '1.4.2';
    }
  }]);

  return Lumo;
}(_wrapNativeSuper(HTMLElement));

customElements.define('vaadin-lumo-styles', Lumo);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js ***!
  \*****************************************************************************/
/*! exports provided: FocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusablesHelper", function() { return FocusablesHelper; });
var p = Element.prototype;
var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
/**
 * `Polymer.IronFocusablesHelper` relies on some Polymer-specific legacy API,
 * especially the `root` property which does not exist for native shadow DOM.
 * That's why we have this helper here.
 * See https://github.com/PolymerElements/iron-overlay-behavior/issues/282
 */

var FocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function isFocusable(element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function isTabbable(element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function _normalizedTabIndex(element) {
    if (this.isFocusable(element)) {
      var tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = this._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distribution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distribution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>


    var children;

    if (element.localName === 'slot') {
      children = element.assignedNodes({
        flatten: true
      });
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = (element.shadowRoot || element).children;
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function _isVisible(element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    var style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function _sortByTabIndex(tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    var pivot = Math.ceil(len / 2);

    var left = this._sortByTabIndex(tabbables.slice(0, pivot));

    var right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function _mergeSortByTabIndex(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function _hasLowerTabOrder(a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    var ati = Math.max(a.tabIndex, 0);
    var bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js ***!
  \*******************************************************************/
/*! exports provided: OverlayElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayElement", function() { return OverlayElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-focusables-helper.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        z-index: 200;\n        position: fixed;\n\n        /*\n          Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part.\n        */\n\n        /*\n          Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport.\n        */\n        top: 0;\n        right: 0;\n        bottom: var(--vaadin-overlay-viewport-bottom);\n        left: 0;\n\n        /* Use flexbox alignment for the overlay part. */\n        display: flex;\n        flex-direction: column; /* makes dropdowns sizing easier */\n        /* Align to center by default. */\n        align-items: center;\n        justify-content: center;\n\n        /* Allow centering when max-width/max-height applies. */\n        margin: auto;\n\n        /* The host is not clickable, only the overlay part is. */\n        pointer-events: none;\n\n        /* Remove tap highlight on touch devices. */\n        -webkit-tap-highlight-color: transparent;\n\n        /* CSS API for host */\n        --vaadin-overlay-viewport-bottom: 0;\n      }\n\n      :host([hidden]),\n      :host(:not([opened]):not([closing])) {\n        display: none !important;\n      }\n\n      [part=\"overlay\"] {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n        pointer-events: auto;\n\n        /* Prevent overflowing the host in MSIE 11 */\n        max-width: 100%;\n        box-sizing: border-box;\n\n        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n      }\n\n      [part=\"backdrop\"] {\n        z-index: -1;\n        content: \"\";\n        background: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: auto;\n      }\n    </style>\n\n    <div id=\"backdrop\" part=\"backdrop\" hidden$=\"{{!withBackdrop}}\"></div>\n    <div part=\"overlay\" id=\"overlay\" tabindex=\"0\">\n      <div part=\"content\" id=\"content\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        z-index: 200;\n        position: fixed;\n\n        /*\n          Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part.\n        */\n\n        /*\n          Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport.\n        */\n        top: 0;\n        right: 0;\n        bottom: var(--vaadin-overlay-viewport-bottom);\n        left: 0;\n\n        /* Use flexbox alignment for the overlay part. */\n        display: flex;\n        flex-direction: column; /* makes dropdowns sizing easier */\n        /* Align to center by default. */\n        align-items: center;\n        justify-content: center;\n\n        /* Allow centering when max-width/max-height applies. */\n        margin: auto;\n\n        /* The host is not clickable, only the overlay part is. */\n        pointer-events: none;\n\n        /* Remove tap highlight on touch devices. */\n        -webkit-tap-highlight-color: transparent;\n\n        /* CSS API for host */\n        --vaadin-overlay-viewport-bottom: 0;\n      }\n\n      :host([hidden]),\n      :host(:not([opened]):not([closing])) {\n        display: none !important;\n      }\n\n      [part=\"overlay\"] {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n        pointer-events: auto;\n\n        /* Prevent overflowing the host in MSIE 11 */\n        max-width: 100%;\n        box-sizing: border-box;\n\n        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n      }\n\n      [part=\"backdrop\"] {\n        z-index: -1;\n        content: \"\";\n        background: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: auto;\n      }\n    </style>\n\n    <div id=\"backdrop\" part=\"backdrop\" hidden\\$=\"{{!withBackdrop}}\"></div>\n    <div part=\"overlay\" id=\"overlay\" tabindex=\"0\">\n      <div part=\"content\" id=\"content\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







var overlayContentCounter = 0;

var createOverlayContent = function createOverlayContent(cssText) {
  overlayContentCounter++;
  var is = "vaadin-overlay-content-".concat(overlayContentCounter);
  var styledTemplate = document.createElement('template');
  var style = document.createElement('style');
  style.textContent = ':host { display: block; }' + cssText;
  styledTemplate.content.appendChild(style);

  if (window.ShadyCSS) {
    window.ShadyCSS.prepareTemplate(styledTemplate, is);
  } // NOTE(platosha): Have to use an awkward IIFE returning class here
  // to prevent this class from showing up in analysis.json & API docs.

  /** @private */


  var klass = function () {
    return (
      /*#__PURE__*/
      function (_HTMLElement) {
        _inherits(_class, _HTMLElement);

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            if (window.ShadyCSS) {
              window.ShadyCSS.styleElement(this);
            }

            if (!this.shadowRoot) {
              this.attachShadow({
                mode: 'open'
              });
              this.shadowRoot.appendChild(document.importNode(styledTemplate.content, true));
            }
          }
        }], [{
          key: "is",
          get: function get() {
            return is;
          }
        }]);

        return _class;
      }(_wrapNativeSuper(HTMLElement))
    );
  }();

  customElements.define(klass.is, klass);
  return document.createElement(is);
};
/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.  You can also pass
 * custom `instanceProps` object using the `instanceProps` property.
 *
 * ```html
 * <vaadin-overlay>
 *   <template>Overlay content</template>
 * </vaadin-overlay>
 * ```
 *
 * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
 * every template can only be templatized once, so it is important
 * to set `instanceProps` before the `template` is assigned to the overlay.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */


var OverlayElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(OverlayElement, _ThemableMixin);

  _createClass(OverlayElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-overlay';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        opened: {
          type: Boolean,
          notify: true,
          observer: '_openedChanged',
          reflectToAttribute: true
        },

        /**
         * Owner element passed with renderer function
         */
        owner: Element,

        /**
         * Custom function for rendering the content of the overlay.
         * Receives three arguments:
         *
         * - `root` The root container DOM element. Append your content to it.
         * - `owner` The host element of the renderer function.
         * - `model` The object with the properties related with rendering.
         */
        renderer: Function,

        /**
         * The template of the overlay content.
         */
        template: {
          type: Object,
          notify: true
        },

        /**
         * Optional argument for `Polymer.Templatize.templatize`.
         */
        instanceProps: {
          type: Object
        },

        /**
         * References the content container after the template is stamped.
         */
        content: {
          type: Object,
          notify: true
        },
        withBackdrop: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * Object with properties that is passed to `renderer` function
         */
        model: Object,

        /**
         * When true the overlay won't disable the main content, showing
         * it doesn’t change the functionality of the user interface.
         */
        modeless: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          observer: '_modelessChanged'
        },

        /**
         * When true move focus to the first focusable element in the overlay,
         * or to the overlay if there are no focusable elements.
         */
        focusTrap: {
          type: Boolean,
          value: false
        },
        _mouseDownInside: {
          type: Boolean
        },
        _mouseUpInside: {
          type: Boolean
        },
        _instance: {
          type: Object
        },
        _originalContentPart: Object,
        _contentNodes: Array,
        _oldOwner: Element,
        _oldModel: Object,
        _oldTemplate: Object,
        _oldInstanceProps: Object,
        _oldRenderer: Object,
        _oldOpened: Boolean
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)'];
    }
  }]);

  function OverlayElement() {
    var _this;

    _classCallCheck(this, OverlayElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayElement).call(this));
    _this._boundMouseDownListener = _this._mouseDownListener.bind(_assertThisInitialized(_this));
    _this._boundMouseUpListener = _this._mouseUpListener.bind(_assertThisInitialized(_this));
    _this._boundOutsideClickListener = _this._outsideClickListener.bind(_assertThisInitialized(_this));
    _this._boundKeydownListener = _this._keydownListener.bind(_assertThisInitialized(_this));
    _this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__["FlattenedNodesObserver"](_assertThisInitialized(_this), function (info) {
      _this._setTemplateFromNodes(info.addedNodes);
    }); // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.

    _this._boundIronOverlayCanceledListener = _this._ironOverlayCanceled.bind(_assertThisInitialized(_this));

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      _this._boundIosResizeListener = function () {
        return _this._detectIosNavbar();
      };
    }

    return _this;
  }

  _createClass(OverlayElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(OverlayElement.prototype), "ready", this).call(this);

      this._observer.flush(); // Need to add dummy click listeners to this and the backdrop or else
      // the document click event listener (_outsideClickListener) may never
      // get invoked on iOS Safari (reproducible in <vaadin-dialog>
      // and <vaadin-context-menu>).


      this.addEventListener('click', function () {});
      this.$.backdrop.addEventListener('click', function () {});
    }
  }, {
    key: "_detectIosNavbar",
    value: function _detectIosNavbar() {
      if (!this.opened) {
        return;
      }

      var innerHeight = window.innerHeight;
      var innerWidth = window.innerWidth;
      var landscape = innerWidth > innerHeight;
      var clientHeight = document.documentElement.clientHeight;

      if (landscape && clientHeight > innerHeight) {
        this.style.setProperty('--vaadin-overlay-viewport-bottom', clientHeight - innerHeight + 'px');
      } else {
        this.style.setProperty('--vaadin-overlay-viewport-bottom', '0');
      }
    }
  }, {
    key: "_setTemplateFromNodes",
    value: function _setTemplateFromNodes(nodes) {
      this.template = nodes.filter(function (node) {
        return node.localName && node.localName === 'template';
      })[0] || this.template;
    }
    /**
     * @event vaadin-overlay-close
     * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
     */

  }, {
    key: "close",
    value: function close(sourceEvent) {
      var evt = new CustomEvent('vaadin-overlay-close', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: sourceEvent
        }
      });
      this.dispatchEvent(evt);

      if (!evt.defaultPrevented) {
        this.opened = false;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(OverlayElement.prototype), "connectedCallback", this).call(this);

      if (this._boundIosResizeListener) {
        this._detectIosNavbar();

        window.addEventListener('resize', this._boundIosResizeListener);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(OverlayElement.prototype), "disconnectedCallback", this).call(this);

      this._boundIosResizeListener && window.removeEventListener('resize', this._boundIosResizeListener);
    }
  }, {
    key: "_ironOverlayCanceled",
    value: function _ironOverlayCanceled(event) {
      event.preventDefault();
    }
  }, {
    key: "_mouseDownListener",
    value: function _mouseDownListener(event) {
      this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
    }
  }, {
    key: "_mouseUpListener",
    value: function _mouseUpListener(event) {
      this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
    }
    /**
     * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
     * propagating the event to the listener in the button. Otherwise, if the clicked button would call
     * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
     *
     * @event vaadin-overlay-outside-click
     * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
     */

  }, {
    key: "_outsideClickListener",
    value: function _outsideClickListener(event) {
      if (event.composedPath().indexOf(this.$.overlay) !== -1 || this._mouseDownInside || this._mouseUpInside) {
        this._mouseDownInside = false;
        this._mouseUpInside = false;
        return;
      }

      if (!this._last) {
        return;
      }

      var evt = new CustomEvent('vaadin-overlay-outside-click', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event
        }
      });
      this.dispatchEvent(evt);

      if (this.opened && !evt.defaultPrevented) {
        this.close(event);
      }
    }
    /**
     * @event vaadin-overlay-escape-press
     * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
     */

  }, {
    key: "_keydownListener",
    value: function _keydownListener(event) {
      if (!this._last) {
        return;
      } // TAB


      if (event.key === 'Tab' && this.focusTrap) {
        // if only tab key is pressed, cycle forward, else cycle backwards.
        this._cycleTab(event.shiftKey ? -1 : 1);

        event.preventDefault(); // ESC
      } else if (event.key === 'Escape' || event.key === 'Esc') {
        var evt = new CustomEvent('vaadin-overlay-escape-press', {
          bubbles: true,
          cancelable: true,
          detail: {
            sourceEvent: event
          }
        });
        this.dispatchEvent(evt);

        if (this.opened && !evt.defaultPrevented) {
          this.close(event);
        }
      }
    }
  }, {
    key: "_ensureTemplatized",
    value: function _ensureTemplatized() {
      this._setTemplateFromNodes(Array.from(this.children));
    }
    /**
     * @event vaadin-overlay-open
     * fired after the `vaadin-overlay` is opened.
     */

  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, wasOpened) {
      var _this2 = this;

      if (!this._instance) {
        this._ensureTemplatized();
      }

      if (opened) {
        this._animatedOpening();

        Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__["afterNextRender"])(this, function () {
          if (_this2.focusTrap && !_this2.contains(document._activeElement || document.activeElement)) {
            _this2._cycleTab(0, 0);
          }

          var evt = new CustomEvent('vaadin-overlay-open', {
            bubbles: true
          });

          _this2.dispatchEvent(evt);
        });

        if (!this.modeless) {
          this._enterModalState();
        }
      } else if (wasOpened) {
        this._animatedClosing();

        this._exitModalState();
      }
    }
  }, {
    key: "_shouldAnimate",
    value: function _shouldAnimate() {
      var name = getComputedStyle(this).getPropertyValue('animation-name');
      return name && name != 'none';
    }
  }, {
    key: "_enqueueAnimation",
    value: function _enqueueAnimation(type, callback) {
      var _this3 = this;

      var handler = "__".concat(type, "Handler");

      var listener = function listener() {
        callback();

        _this3.removeEventListener('animationend', listener);

        delete _this3[handler];
      };

      this[handler] = listener;
      this.addEventListener('animationend', listener);
    }
  }, {
    key: "_flushAnimation",
    value: function _flushAnimation(type) {
      var handler = "__".concat(type, "Handler");

      if (typeof this[handler] === 'function') {
        this[handler]();
      }
    }
  }, {
    key: "_animatedOpening",
    value: function _animatedOpening() {
      var _this4 = this;

      if (this.parentNode === document.body && this.hasAttribute('closing')) {
        this._flushAnimation('closing');
      }

      this._attachOverlay();

      this.setAttribute('opening', '');

      var finishOpening = function finishOpening() {
        _this4.removeAttribute('opening');

        document.addEventListener('iron-overlay-canceled', _this4._boundIronOverlayCanceledListener);
      };

      if (this._shouldAnimate()) {
        this._enqueueAnimation('opening', finishOpening);
      } else {
        finishOpening();
      }
    }
  }, {
    key: "_attachOverlay",
    value: function _attachOverlay() {
      this._placeholder = document.createComment('vaadin-overlay-placeholder');
      this.parentNode.insertBefore(this._placeholder, this);
      document.body.appendChild(this);
    }
  }, {
    key: "_animatedClosing",
    value: function _animatedClosing() {
      var _this5 = this;

      if (this.hasAttribute('opening')) {
        this._flushAnimation('opening');
      }

      if (this._placeholder) {
        this.setAttribute('closing', '');

        var finishClosing = function finishClosing() {
          document.removeEventListener('iron-overlay-canceled', _this5._boundIronOverlayCanceledListener);

          _this5._detachOverlay();

          _this5.removeAttribute('closing');
        };

        if (this._shouldAnimate()) {
          this._enqueueAnimation('closing', finishClosing);
        } else {
          finishClosing();
        }
      }
    }
  }, {
    key: "_detachOverlay",
    value: function _detachOverlay() {
      // The detaching overlay is happening after closing animation is finished.
      // If in the meantime of closing animation user quickly clicked
      // the element to show the same ovelay, `opened` will be true
      // and no need to detach the overlay
      if (this.opened || !this._placeholder.parentNode) {
        return;
      }

      this._placeholder.parentNode.insertBefore(this, this._placeholder);

      this._placeholder.parentNode.removeChild(this._placeholder);
    }
    /**
     * Returns all attached overlays.
     */

  }, {
    key: "_modelessChanged",
    value: function _modelessChanged(modeless) {
      if (!modeless) {
        if (this.opened) {
          this._enterModalState();
        }
      } else {
        this._exitModalState();
      }
    }
  }, {
    key: "_enterModalState",
    value: function _enterModalState() {
      var _this6 = this;

      document.addEventListener('mousedown', this._boundMouseDownListener);
      document.addEventListener('mouseup', this._boundMouseUpListener);
      document.addEventListener('click', this._boundOutsideClickListener, true);
      document.addEventListener('keydown', this._boundKeydownListener);

      if (document.body.style.pointerEvents !== 'none') {
        // Set body pointer-events to 'none' to disable mouse interactions with
        // other document nodes.
        this._previousDocumentPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = 'none';
      } // Disable pointer events in other attached overlays


      OverlayElement.__attachedInstances.forEach(function (el) {
        if (el !== _this6) {
          el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
        }
      });
    }
  }, {
    key: "_exitModalState",
    value: function _exitModalState() {
      document.removeEventListener('mousedown', this._boundMouseDownListener);
      document.removeEventListener('mouseup', this._boundMouseUpListener);
      document.removeEventListener('click', this._boundOutsideClickListener, true);
      document.removeEventListener('keydown', this._boundKeydownListener);

      if (this._previousDocumentPointerEvents !== undefined) {
        // Restore body pointer-events
        document.body.style.pointerEvents = this._previousDocumentPointerEvents;
        delete this._previousDocumentPointerEvents;
      } // Restore pointer events in the previous overlay(s)


      var instances = OverlayElement.__attachedInstances;
      var el; // Use instances.pop() to ensure the reverse order

      while (el = instances.pop()) {
        if (el === this) {
          // Skip the current instance
          continue;
        }

        el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

        if (!el.modeless) {
          // Stop after the last modal
          break;
        }
      }
    }
  }, {
    key: "_removeOldContent",
    value: function _removeOldContent() {
      var _this7 = this;

      if (!this.content || !this._contentNodes) {
        return;
      }

      this._observer.disconnect();

      this._contentNodes.forEach(function (node) {
        if (node.parentNode === _this7.content) {
          _this7.content.removeChild(node);
        }
      });

      if (this._originalContentPart) {
        // Restore the original <div part="content">
        this.$.content.parentNode.replaceChild(this._originalContentPart, this.$.content);
        this.$.content = this._originalContentPart;
        this._originalContentPart = undefined;
      }

      this._observer.connect();

      this._contentNodes = undefined;
      this.content = undefined;
    }
  }, {
    key: "_stampOverlayTemplate",
    value: function _stampOverlayTemplate(template, instanceProps) {
      this._removeOldContent();

      if (!template._Templatizer) {
        template._Templatizer = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(template, this, {
          instanceProps: instanceProps,
          forwardHostProp: function forwardHostProp(prop, value) {
            if (this._instance) {
              this._instance.forwardHostProp(prop, value);
            }
          }
        });
      }

      this._instance = new template._Templatizer({});
      this._contentNodes = Array.from(this._instance.root.childNodes);
      var templateRoot = template._templateRoot || (template._templateRoot = template.getRootNode());

      var _isScoped = templateRoot !== document;

      if (_isScoped) {
        if (!this.$.content.shadowRoot) {
          this.$.content.attachShadow({
            mode: 'open'
          });
        }

        var scopeCssText = Array.from(templateRoot.querySelectorAll('style')).reduce(function (result, style) {
          return result + style.textContent;
        }, '');

        if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
          // NOTE(platosha): ShadyCSS removes <style>’s from templates, so
          // we have to use these protected APIs to get their contents back
          var styleInfo = window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);

          if (styleInfo) {
            scopeCssText += styleInfo._getStyleRules().parsedCssText;
            scopeCssText += '}';
          }
        } // The overlay root’s :host styles should not apply inside the overlay


        scopeCssText = scopeCssText.replace(/:host/g, ':host-nomatch');

        if (scopeCssText) {
          if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
            // ShadyDOM: replace the <div part="content"> with a generated
            // styled custom element
            var contentPart = createOverlayContent(scopeCssText);
            contentPart.id = 'content';
            contentPart.setAttribute('part', 'content');
            this.$.content.parentNode.replaceChild(contentPart, this.$.content); // NOTE(platosha): carry the style scope of the content part

            contentPart.className = this.$.content.className;
            this._originalContentPart = this.$.content;
            this.$.content = contentPart;
          } else {
            // Shadow DOM: append a style to the content shadowRoot
            var style = document.createElement('style');
            style.textContent = scopeCssText;
            this.$.content.shadowRoot.appendChild(style);

            this._contentNodes.unshift(style);
          }
        }

        this.$.content.shadowRoot.appendChild(this._instance.root);
        this.content = this.$.content.shadowRoot;
      } else {
        this.appendChild(this._instance.root);
        this.content = this;
      }
    }
  }, {
    key: "_removeNewRendererOrTemplate",
    value: function _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
      if (template !== oldTemplate) {
        this.template = undefined;
      } else if (renderer !== oldRenderer) {
        this.renderer = undefined;
      }
    }
    /**
     * Manually invoke existing renderer.
     */

  }, {
    key: "render",
    value: function render() {
      if (this.renderer) {
        this.renderer.call(this.owner, this.content, this.owner, this.model);
      }
    }
  }, {
    key: "_templateOrRendererChanged",
    value: function _templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened) {
      if (template && renderer) {
        this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

        throw new Error('You should only use either a renderer or a template for overlay content');
      }

      var ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
      this._oldModel = model;
      this._oldOwner = owner;
      var templateOrInstancePropsChanged = this._oldInstanceProps !== instanceProps || this._oldTemplate !== template;
      this._oldInstanceProps = instanceProps;
      this._oldTemplate = template;
      var rendererChanged = this._oldRenderer !== renderer;
      this._oldRenderer = renderer;
      var openedChanged = this._oldOpened !== opened;
      this._oldOpened = opened;

      if (template && templateOrInstancePropsChanged) {
        this._stampOverlayTemplate(template, instanceProps);
      } else if (renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
        this.content = this;

        if (rendererChanged) {
          while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
          }
        }

        if (opened) {
          this.render();
        }
      }
    }
  }, {
    key: "_isFocused",
    value: function _isFocused(element) {
      return element && element.getRootNode().activeElement === element;
    }
  }, {
    key: "_focusedIndex",
    value: function _focusedIndex(elements) {
      elements = elements || this._getFocusableElements();
      return elements.indexOf(elements.filter(this._isFocused).pop());
    }
  }, {
    key: "_cycleTab",
    value: function _cycleTab(increment, index) {
      var focusableElements = this._getFocusableElements();

      if (index === undefined) {
        index = this._focusedIndex(focusableElements);
      }

      index += increment; // rollover to first item

      if (index >= focusableElements.length) {
        index = 0; // go to last item
      } else if (index < 0) {
        index = focusableElements.length - 1;
      }

      focusableElements[index].focus();
    }
  }, {
    key: "_getFocusableElements",
    value: function _getFocusableElements() {
      // collect all focusable elements
      return _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["FocusablesHelper"].getTabbableNodes(this.$.overlay);
    }
  }, {
    key: "_last",

    /**
     * returns true if this is the last one in the opened overlays stack
     */
    get: function get() {
      return this === OverlayElement.__attachedInstances.pop();
    }
  }], [{
    key: "__attachedInstances",
    get: function get() {
      return Array.from(document.body.children).filter(function (el) {
        return el instanceof OverlayElement;
      });
    }
  }]);

  return OverlayElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(OverlayElement.is, OverlayElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ThemableMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemableMixin", function() { return ThemableMixin; });
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
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
 * @polymerMixin
 */

var ThemableMixin = function ThemableMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_ThemePropertyMixin) {
      _inherits(VaadinThemableMixin, _ThemePropertyMixin);

      function VaadinThemableMixin() {
        _classCallCheck(this, VaadinThemableMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinThemableMixin).apply(this, arguments));
      }

      _createClass(VaadinThemableMixin, null, [{
        key: "finalize",

        /** @protected */
        value: function finalize() {
          var _this = this;

          _get(_getPrototypeOf(VaadinThemableMixin), "finalize", this).call(this);

          var template = this.prototype._template;
          var hasOwnTemplate = this.template && this.template.parentElement && this.template.parentElement.id === this.is;

          var inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;

          if (inheritedTemplate && !hasOwnTemplate) {
            // The element doesn't define its own template -> include the theme modules from the inherited template
            Array.from(inheritedTemplate.content.querySelectorAll('style[include]')).forEach(function (s) {
              _this._includeStyle(s.getAttribute('include'), template);
            });
          }

          this._includeMatchingThemes(template);
        }
        /** @protected */

      }, {
        key: "_includeMatchingThemes",
        value: function _includeMatchingThemes(template) {
          var _this2 = this;

          var domModule = _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__["DomModule"];
          var modules = domModule.prototype.modules;
          var hasThemes = false;
          var defaultModuleName = this.is + '-default-theme';
          Object.keys(modules).sort(function (moduleNameA, moduleNameB) {
            var vaadinA = moduleNameA.indexOf('vaadin-') === 0;
            var vaadinB = moduleNameB.indexOf('vaadin-') === 0;
            var vaadinThemePrefixes = ['lumo-', 'material-'];
            var vaadinThemeA = vaadinThemePrefixes.filter(function (prefix) {
              return moduleNameA.indexOf(prefix) === 0;
            }).length > 0;
            var vaadinThemeB = vaadinThemePrefixes.filter(function (prefix) {
              return moduleNameB.indexOf(prefix) === 0;
            }).length > 0;

            if (vaadinA !== vaadinB) {
              // Include vaadin core styles first
              return vaadinA ? -1 : 1;
            } else if (vaadinThemeA !== vaadinThemeB) {
              // Include vaadin theme styles after that
              return vaadinThemeA ? -1 : 1;
            } else {
              // Lastly include custom styles so they override all vaadin styles
              return 0;
            }
          }).forEach(function (moduleName) {
            if (moduleName !== defaultModuleName) {
              var themeFor = modules[moduleName].getAttribute('theme-for');

              if (themeFor) {
                themeFor.split(' ').forEach(function (themeForToken) {
                  if (new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(_this2.is)) {
                    hasThemes = true;

                    _this2._includeStyle(moduleName, template);
                  }
                });
              }
            }
          });

          if (!hasThemes && modules[defaultModuleName]) {
            // No theme modules found, include the default module if it exists
            this._includeStyle(defaultModuleName, template);
          }
        }
        /** @private */

      }, {
        key: "_includeStyle",
        value: function _includeStyle(moduleName, template) {
          if (template && !template.content.querySelector("style[include=\"".concat(moduleName, "\"]"))) {
            var styleEl = document.createElement('style');
            styleEl.setAttribute('include', moduleName);
            template.content.appendChild(styleEl);
          }
        }
      }]);

      return VaadinThemableMixin;
    }(Object(_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemePropertyMixin"])(superClass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js ***!
  \***********************************************************************************/
/*! exports provided: ThemePropertyMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePropertyMixin", function() { return ThemePropertyMixin; });
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
 * @polymerMixin
 */
var ThemePropertyMixin = function ThemePropertyMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinThemePropertyMixin, _superClass);

      function VaadinThemePropertyMixin() {
        _classCallCheck(this, VaadinThemePropertyMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinThemePropertyMixin).apply(this, arguments));
      }

      _createClass(VaadinThemePropertyMixin, [{
        key: "attributeChangedCallback",

        /** @protected */
        value: function attributeChangedCallback(name, oldValue, newValue) {
          _get(_getPrototypeOf(VaadinThemePropertyMixin.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue);

          if (name === 'theme') {
            this._setTheme(newValue);
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Helper property with theme attribute value facilitating propagation
             * in shadow DOM. Allows using `theme$="[[theme]]"` in the template.
             *
             * @protected
             */
            theme: {
              type: String,
              readOnly: true
            }
          };
        }
      }]);

      return VaadinThemePropertyMixin;
    }(superClass)
  );
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZGlzYWJsZS11cGdyYWRlLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvZm9udC1pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvbWl4aW5zL21lbnUtb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvbWl4aW5zL292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL3NpemluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3BhY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL3R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvc3JjL3ZhYWRpbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tb3ZlcmxheS9zcmMvdmFhZGluLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgeyBFbGVtZW50TWl4aW4gfSBmcm9tICcuL2VsZW1lbnQtbWl4aW4uanMnO1xuXG5pbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSAnLi4vdXRpbHMvbWl4aW4uanMnO1xuXG5jb25zdCBESVNBQkxFRF9BVFRSID0gJ2Rpc2FibGUtdXBncmFkZSc7XG5cbi8qKlxuICogRWxlbWVudCBjbGFzcyBtaXhpbiB0aGF0IGFsbG93cyB0aGUgZWxlbWVudCB0byBib290IHVwIGluIGEgbm9uLWVuYWJsZWRcbiAqIHN0YXRlIHdoZW4gdGhlIGBkaXNhYmxlLXVwZ3JhZGVgIGF0dHJpYnV0ZSBpcyBwcmVzZW50LiBUaGlzIG1peGluIGlzXG4gKiBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggZWxlbWVudCBjbGFzc2VzIGxpa2UgUG9seW1lckVsZW1lbnQgdGhhdCBwZXJmb3JtXG4gKiBpbml0aWFsIHN0YXJ0dXAgd29yayB3aGVuIHRoZXkgYXJlIGZpcnN0IGNvbm5lY3RlZC4gV2hlbiB0aGVcbiAqIGBkaXNhYmxlLXVwZ3JhZGVgIGF0dHJpYnV0ZSBpcyByZW1vdmVkLCBpZiB0aGUgZWxlbWVudCBpcyBjb25uZWN0ZWQsIGl0XG4gKiBib290cyB1cCBhbmQgXCJlbmFibGVzXCIgYXMgaXQgb3RoZXJ3aXNlIHdvdWxkOyBpZiBpdCBpcyBub3QgY29ubmVjdGVkLCB0aGVcbiAqIGVsZW1lbnQgYm9vdHMgdXAgd2hlbiBpdCBpcyBuZXh0IGNvbm5lY3RlZC5cbiAqXG4gKiBVc2luZyBgZGlzYWJsZS11cGdyYWRlYCB3aXRoIFBvbHltZXJFbGVtZW50IHByZXZlbnRzIGFueSBkYXRhIHByb3BhZ2F0aW9uXG4gKiB0byB0aGUgZWxlbWVudCwgYW55IGVsZW1lbnQgRE9NIGZyb20gc3RhbXBpbmcsIG9yIGFueSB3b3JrIGRvbmUgaW5cbiAqIGNvbm5lY3RlZC9kaXNjb25uY3RlZENhbGxiYWNrIGZyb20gb2NjdXJpbmcsIGJ1dCBpdCBkb2VzIG5vdCBwcmV2ZW50IHdvcmtcbiAqIGRvbmUgaW4gdGhlIGVsZW1lbnQgY29uc3RydWN0b3IuXG4gKlxuICogTm90ZSwgdGhpcyBtaXhpbiBtdXN0IGJlIGFwcGxpZWQgb24gdG9wIG9mIGFueSBlbGVtZW50IGNsYXNzIHRoYXRcbiAqIGl0c2VsZiBpbXBsZW1lbnRzIGEgYGNvbm5lY3RlZENhbGxiYWNrYCBzbyB0aGF0IGl0IGNhbiBjb250cm9sIHRoZSB3b3JrXG4gKiBkb25lIGluIGBjb25uZWN0ZWRDYWxsYmFja2AuIEZvciBleGFtcGxlLFxuICpcbiAqICAgICBNeUNsYXNzID0gRGlzYWJsZVVwZ3JhZGVNaXhpbihjbGFzcyBleHRlbmRzIEJhc2VDbGFzcyB7Li4ufSk7XG4gKlxuICogQG1peGluRnVuY3Rpb25cbiAqIEBwb2x5bWVyXG4gKiBAYXBwbGllc01peGluIEVsZW1lbnRNaXhpblxuICovXG5leHBvcnQgY29uc3QgRGlzYWJsZVVwZ3JhZGVNaXhpbiA9IGRlZHVwaW5nTWl4aW4oKGJhc2UpID0+IHtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBleHRlbmRzIHtiYXNlfVxuICAgKiBAaW1wbGVtZW50cyB7UG9seW1lcl9FbGVtZW50TWl4aW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjb25zdCBzdXBlckNsYXNzID0gRWxlbWVudE1peGluKGJhc2UpO1xuXG4gIC8qKlxuICAgKiBAcG9seW1lclxuICAgKiBAbWl4aW5DbGFzc1xuICAgKiBAaW1wbGVtZW50cyB7UG9seW1lcl9EaXNhYmxlVXBncmFkZU1peGlufVxuICAgKi9cbiAgY2xhc3MgRGlzYWJsZVVwZ3JhZGVDbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgcmV0dXJuIHN1cGVyLm9ic2VydmVkQXR0cmlidXRlcy5jb25jYXQoRElTQUJMRURfQVRUUik7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGQsIHZhbHVlLCBuYW1lc3BhY2UpIHtcbiAgICAgIGlmIChuYW1lID09IERJU0FCTEVEX0FUVFIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fZGF0YUVuYWJsZWQgJiYgdmFsdWUgPT0gbnVsbCAmJiB0aGlzLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUsIG5hbWVzcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgIE5PVEU6IGNhbm5vdCBnYXRlIG9uIGF0dHJpYnV0ZSBiZWNhdXNlIHRoaXMgaXMgY2FsbGVkIGJlZm9yZVxuICAgICAgYXR0cmlidXRlcyBhcmUgZGVsaXZlcmVkLiBUaGVyZWZvcmUsIHdlIHN0dWIgdGhpcyBvdXQgYW5kXG4gICAgICBjYWxsIGBzdXBlci5faW5pdGlhbGl6ZVByb3BlcnRpZXMoKWAgbWFudWFsbHkuXG4gICAgKi9cbiAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBfaW5pdGlhbGl6ZVByb3BlcnRpZXMoKSB7fVxuXG4gICAgLy8gcHJldmVudCB1c2VyIGNvZGUgaW4gY29ubmVjdGVkIGZyb20gcnVubmluZ1xuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmICh0aGlzLl9fZGF0YUVuYWJsZWQgfHwgIXRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEX0FUVFIpKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcHJldmVudCBlbGVtZW50IGZyb20gdHVybmluZyBvbiBwcm9wZXJ0aWVzXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIF9lbmFibGVQcm9wZXJ0aWVzKCkge1xuICAgICAgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRF9BVFRSKSkge1xuICAgICAgICBpZiAoIXRoaXMuX19kYXRhRW5hYmxlZCkge1xuICAgICAgICAgIHN1cGVyLl9pbml0aWFsaXplUHJvcGVydGllcygpO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLl9lbmFibGVQcm9wZXJ0aWVzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gb25seSBnbyBpZiBcImVuYWJsZWRcIlxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmICh0aGlzLl9fZGF0YUVuYWJsZWQpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHJldHVybiBEaXNhYmxlVXBncmFkZUNsYXNzO1xuXG59KTtcbiIsImltcG9ydCAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvY3VzdG9tLXN0eWxlLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLW1vZHVsZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGN1c3RvbS1zdHlsZT5cbiAgPHN0eWxlPlxuICAgIGh0bWwge1xuICAgICAgLyogQmFzZSAoYmFja2dyb3VuZCkgKi9cbiAgICAgIC0tbHVtby1iYXNlLWNvbG9yOiAjRkZGO1xuXG4gICAgICAvKiBUaW50ICovXG4gICAgICAtLWx1bW8tdGludC01cGN0OiBoc2xhKDAsIDAlLCAxMDAlLCAwLjMpO1xuICAgICAgLS1sdW1vLXRpbnQtMTBwY3Q6IGhzbGEoMCwgMCUsIDEwMCUsIDAuMzcpO1xuICAgICAgLS1sdW1vLXRpbnQtMjBwY3Q6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNDQpO1xuICAgICAgLS1sdW1vLXRpbnQtMzBwY3Q6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNSk7XG4gICAgICAtLWx1bW8tdGludC00MHBjdDogaHNsYSgwLCAwJSwgMTAwJSwgMC41Nyk7XG4gICAgICAtLWx1bW8tdGludC01MHBjdDogaHNsYSgwLCAwJSwgMTAwJSwgMC42NCk7XG4gICAgICAtLWx1bW8tdGludC02MHBjdDogaHNsYSgwLCAwJSwgMTAwJSwgMC43KTtcbiAgICAgIC0tbHVtby10aW50LTcwcGN0OiBoc2xhKDAsIDAlLCAxMDAlLCAwLjc3KTtcbiAgICAgIC0tbHVtby10aW50LTgwcGN0OiBoc2xhKDAsIDAlLCAxMDAlLCAwLjg0KTtcbiAgICAgIC0tbHVtby10aW50LTkwcGN0OiBoc2xhKDAsIDAlLCAxMDAlLCAwLjkpO1xuICAgICAgLS1sdW1vLXRpbnQ6ICNGRkY7XG5cbiAgICAgIC8qIFNoYWRlICovXG4gICAgICAtLWx1bW8tc2hhZGUtNXBjdDogaHNsYSgyMTQsIDYxJSwgMjUlLCAwLjA1KTtcbiAgICAgIC0tbHVtby1zaGFkZS0xMHBjdDogaHNsYSgyMTQsIDU3JSwgMjQlLCAwLjEpO1xuICAgICAgLS1sdW1vLXNoYWRlLTIwcGN0OiBoc2xhKDIxNCwgNTMlLCAyMyUsIDAuMTYpO1xuICAgICAgLS1sdW1vLXNoYWRlLTMwcGN0OiBoc2xhKDIxNCwgNTAlLCAyMiUsIDAuMjYpO1xuICAgICAgLS1sdW1vLXNoYWRlLTQwcGN0OiBoc2xhKDIxNCwgNDclLCAyMSUsIDAuMzgpO1xuICAgICAgLS1sdW1vLXNoYWRlLTUwcGN0OiBoc2xhKDIxNCwgNDUlLCAyMCUsIDAuNSk7XG4gICAgICAtLWx1bW8tc2hhZGUtNjBwY3Q6IGhzbGEoMjE0LCA0MyUsIDE5JSwgMC42MSk7XG4gICAgICAtLWx1bW8tc2hhZGUtNzBwY3Q6IGhzbGEoMjE0LCA0MiUsIDE4JSwgMC43Mik7XG4gICAgICAtLWx1bW8tc2hhZGUtODBwY3Q6IGhzbGEoMjE0LCA0MSUsIDE3JSwgMC44Myk7XG4gICAgICAtLWx1bW8tc2hhZGUtOTBwY3Q6IGhzbGEoMjE0LCA0MCUsIDE2JSwgMC45NCk7XG4gICAgICAtLWx1bW8tc2hhZGU6IGhzbCgyMTQsIDM1JSwgMTUlKTtcblxuICAgICAgLyogQ29udHJhc3QgKi9cbiAgICAgIC0tbHVtby1jb250cmFzdC01cGN0OiB2YXIoLS1sdW1vLXNoYWRlLTVwY3QpO1xuICAgICAgLS1sdW1vLWNvbnRyYXN0LTEwcGN0OiB2YXIoLS1sdW1vLXNoYWRlLTEwcGN0KTtcbiAgICAgIC0tbHVtby1jb250cmFzdC0yMHBjdDogdmFyKC0tbHVtby1zaGFkZS0yMHBjdCk7XG4gICAgICAtLWx1bW8tY29udHJhc3QtMzBwY3Q6IHZhcigtLWx1bW8tc2hhZGUtMzBwY3QpO1xuICAgICAgLS1sdW1vLWNvbnRyYXN0LTQwcGN0OiB2YXIoLS1sdW1vLXNoYWRlLTQwcGN0KTtcbiAgICAgIC0tbHVtby1jb250cmFzdC01MHBjdDogdmFyKC0tbHVtby1zaGFkZS01MHBjdCk7XG4gICAgICAtLWx1bW8tY29udHJhc3QtNjBwY3Q6IHZhcigtLWx1bW8tc2hhZGUtNjBwY3QpO1xuICAgICAgLS1sdW1vLWNvbnRyYXN0LTcwcGN0OiB2YXIoLS1sdW1vLXNoYWRlLTcwcGN0KTtcbiAgICAgIC0tbHVtby1jb250cmFzdC04MHBjdDogdmFyKC0tbHVtby1zaGFkZS04MHBjdCk7XG4gICAgICAtLWx1bW8tY29udHJhc3QtOTBwY3Q6IHZhcigtLWx1bW8tc2hhZGUtOTBwY3QpO1xuICAgICAgLS1sdW1vLWNvbnRyYXN0OiB2YXIoLS1sdW1vLXNoYWRlKTtcblxuICAgICAgLyogVGV4dCAqL1xuICAgICAgLS1sdW1vLWhlYWRlci10ZXh0LWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0KTtcbiAgICAgIC0tbHVtby1ib2R5LXRleHQtY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QtOTBwY3QpO1xuICAgICAgLS1sdW1vLXNlY29uZGFyeS10ZXh0LWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTcwcGN0KTtcbiAgICAgIC0tbHVtby10ZXJ0aWFyeS10ZXh0LWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTUwcGN0KTtcbiAgICAgIC0tbHVtby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTMwcGN0KTtcblxuICAgICAgLyogUHJpbWFyeSAqL1xuICAgICAgLS1sdW1vLXByaW1hcnktY29sb3I6IGhzbCgyMTQsIDkwJSwgNTIlKTtcbiAgICAgIC0tbHVtby1wcmltYXJ5LWNvbG9yLTUwcGN0OiBoc2xhKDIxNCwgOTAlLCA1MiUsIDAuNSk7XG4gICAgICAtLWx1bW8tcHJpbWFyeS1jb2xvci0xMHBjdDogaHNsYSgyMTQsIDkwJSwgNTIlLCAwLjEpO1xuICAgICAgLS1sdW1vLXByaW1hcnktdGV4dC1jb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIC0tbHVtby1wcmltYXJ5LWNvbnRyYXN0LWNvbG9yOiAjRkZGO1xuXG4gICAgICAvKiBFcnJvciAqL1xuICAgICAgLS1sdW1vLWVycm9yLWNvbG9yOiBoc2woMywgMTAwJSwgNjElKTtcbiAgICAgIC0tbHVtby1lcnJvci1jb2xvci01MHBjdDogaHNsYSgzLCAxMDAlLCA2MCUsIDAuNSk7XG4gICAgICAtLWx1bW8tZXJyb3ItY29sb3ItMTBwY3Q6IGhzbGEoMywgMTAwJSwgNjAlLCAwLjEpO1xuICAgICAgLS1sdW1vLWVycm9yLXRleHQtY29sb3I6IGhzbCgzLCA5MiUsIDUzJSk7XG4gICAgICAtLWx1bW8tZXJyb3ItY29udHJhc3QtY29sb3I6ICNGRkY7XG5cbiAgICAgIC8qIFN1Y2Nlc3MgKi9cbiAgICAgIC0tbHVtby1zdWNjZXNzLWNvbG9yOiBoc2woMTQ1LCA4MCUsIDQyJSk7IC8qIGhzbCgxNDQsODIlLDM3JSk7ICovXG4gICAgICAtLWx1bW8tc3VjY2Vzcy1jb2xvci01MHBjdDogaHNsYSgxNDUsIDc2JSwgNDQlLCAwLjU1KTtcbiAgICAgIC0tbHVtby1zdWNjZXNzLWNvbG9yLTEwcGN0OiBoc2xhKDE0NSwgNzYlLCA0NCUsIDAuMTIpO1xuICAgICAgLS1sdW1vLXN1Y2Nlc3MtdGV4dC1jb2xvcjogaHNsKDE0NSwgMTAwJSwgMzIlKTtcbiAgICAgIC0tbHVtby1zdWNjZXNzLWNvbnRyYXN0LWNvbG9yOiAjRkZGO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPjxkb20tbW9kdWxlIGlkPVwibHVtby1jb2xvclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgW3RoZW1lfj1cImRhcmtcIl0ge1xuICAgICAgICAvKiBCYXNlIChiYWNrZ3JvdW5kKSAqL1xuICAgICAgICAtLWx1bW8tYmFzZS1jb2xvcjogaHNsKDIxNCwgMzUlLCAyMSUpO1xuXG4gICAgICAgIC8qIFRpbnQgKi9cbiAgICAgICAgLS1sdW1vLXRpbnQtNXBjdDogaHNsYSgyMTQsIDY1JSwgODUlLCAwLjA2KTtcbiAgICAgICAgLS1sdW1vLXRpbnQtMTBwY3Q6IGhzbGEoMjE0LCA2MCUsIDgwJSwgMC4xNCk7XG4gICAgICAgIC0tbHVtby10aW50LTIwcGN0OiBoc2xhKDIxNCwgNjQlLCA4MiUsIDAuMjMpO1xuICAgICAgICAtLWx1bW8tdGludC0zMHBjdDogaHNsYSgyMTQsIDY5JSwgODQlLCAwLjMyKTtcbiAgICAgICAgLS1sdW1vLXRpbnQtNDBwY3Q6IGhzbGEoMjE0LCA3MyUsIDg2JSwgMC40MSk7XG4gICAgICAgIC0tbHVtby10aW50LTUwcGN0OiBoc2xhKDIxNCwgNzglLCA4OCUsIDAuNSk7XG4gICAgICAgIC0tbHVtby10aW50LTYwcGN0OiBoc2xhKDIxNCwgODIlLCA5MCUsIDAuNik7XG4gICAgICAgIC0tbHVtby10aW50LTcwcGN0OiBoc2xhKDIxNCwgODclLCA5MiUsIDAuNyk7XG4gICAgICAgIC0tbHVtby10aW50LTgwcGN0OiBoc2xhKDIxNCwgOTElLCA5NCUsIDAuOCk7XG4gICAgICAgIC0tbHVtby10aW50LTkwcGN0OiBoc2xhKDIxNCwgOTYlLCA5NiUsIDAuOSk7XG4gICAgICAgIC0tbHVtby10aW50OiBoc2woMjE0LCAxMDAlLCA5OCUpO1xuXG4gICAgICAgIC8qIFNoYWRlICovXG4gICAgICAgIC0tbHVtby1zaGFkZS01cGN0OiBoc2xhKDIxNCwgMCUsIDAlLCAwLjA3KTtcbiAgICAgICAgLS1sdW1vLXNoYWRlLTEwcGN0OiBoc2xhKDIxNCwgNCUsIDIlLCAwLjE1KTtcbiAgICAgICAgLS1sdW1vLXNoYWRlLTIwcGN0OiBoc2xhKDIxNCwgOCUsIDQlLCAwLjIzKTtcbiAgICAgICAgLS1sdW1vLXNoYWRlLTMwcGN0OiBoc2xhKDIxNCwgMTIlLCA2JSwgMC4zMik7XG4gICAgICAgIC0tbHVtby1zaGFkZS00MHBjdDogaHNsYSgyMTQsIDE2JSwgOCUsIDAuNDEpO1xuICAgICAgICAtLWx1bW8tc2hhZGUtNTBwY3Q6IGhzbGEoMjE0LCAyMCUsIDEwJSwgMC41KTtcbiAgICAgICAgLS1sdW1vLXNoYWRlLTYwcGN0OiBoc2xhKDIxNCwgMjQlLCAxMiUsIDAuNik7XG4gICAgICAgIC0tbHVtby1zaGFkZS03MHBjdDogaHNsYSgyMTQsIDI4JSwgMTMlLCAwLjcpO1xuICAgICAgICAtLWx1bW8tc2hhZGUtODBwY3Q6IGhzbGEoMjE0LCAzMiUsIDEzJSwgMC44KTtcbiAgICAgICAgLS1sdW1vLXNoYWRlLTkwcGN0OiBoc2xhKDIxNCwgMzMlLCAxMyUsIDAuOSk7XG4gICAgICAgIC0tbHVtby1zaGFkZTogaHNsKDIxNCwgMzMlLCAxMyUpO1xuXG4gICAgICAgIC8qIENvbnRyYXN0ICovXG4gICAgICAgIC0tbHVtby1jb250cmFzdC01cGN0OiB2YXIoLS1sdW1vLXRpbnQtNXBjdCk7XG4gICAgICAgIC0tbHVtby1jb250cmFzdC0xMHBjdDogdmFyKC0tbHVtby10aW50LTEwcGN0KTtcbiAgICAgICAgLS1sdW1vLWNvbnRyYXN0LTIwcGN0OiB2YXIoLS1sdW1vLXRpbnQtMjBwY3QpO1xuICAgICAgICAtLWx1bW8tY29udHJhc3QtMzBwY3Q6IHZhcigtLWx1bW8tdGludC0zMHBjdCk7XG4gICAgICAgIC0tbHVtby1jb250cmFzdC00MHBjdDogdmFyKC0tbHVtby10aW50LTQwcGN0KTtcbiAgICAgICAgLS1sdW1vLWNvbnRyYXN0LTUwcGN0OiB2YXIoLS1sdW1vLXRpbnQtNTBwY3QpO1xuICAgICAgICAtLWx1bW8tY29udHJhc3QtNjBwY3Q6IHZhcigtLWx1bW8tdGludC02MHBjdCk7XG4gICAgICAgIC0tbHVtby1jb250cmFzdC03MHBjdDogdmFyKC0tbHVtby10aW50LTcwcGN0KTtcbiAgICAgICAgLS1sdW1vLWNvbnRyYXN0LTgwcGN0OiB2YXIoLS1sdW1vLXRpbnQtODBwY3QpO1xuICAgICAgICAtLWx1bW8tY29udHJhc3QtOTBwY3Q6IHZhcigtLWx1bW8tdGludC05MHBjdCk7XG4gICAgICAgIC0tbHVtby1jb250cmFzdDogdmFyKC0tbHVtby10aW50KTtcblxuICAgICAgICAvKiBUZXh0ICovXG4gICAgICAgIC0tbHVtby1oZWFkZXItdGV4dC1jb2xvcjogdmFyKC0tbHVtby1jb250cmFzdCk7XG4gICAgICAgIC0tbHVtby1ib2R5LXRleHQtY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QtOTBwY3QpO1xuICAgICAgICAtLWx1bW8tc2Vjb25kYXJ5LXRleHQtY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QtNzBwY3QpO1xuICAgICAgICAtLWx1bW8tdGVydGlhcnktdGV4dC1jb2xvcjogdmFyKC0tbHVtby1jb250cmFzdC01MHBjdCk7XG4gICAgICAgIC0tbHVtby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTMwcGN0KTtcblxuICAgICAgICAvKiBQcmltYXJ5ICovXG4gICAgICAgIC0tbHVtby1wcmltYXJ5LWNvbG9yOiBoc2woMjE0LCA4NiUsIDU1JSk7XG4gICAgICAgIC0tbHVtby1wcmltYXJ5LWNvbG9yLTUwcGN0OiBoc2xhKDIxNCwgODYlLCA1NSUsIDAuNSk7XG4gICAgICAgIC0tbHVtby1wcmltYXJ5LWNvbG9yLTEwcGN0OiBoc2xhKDIxNCwgOTAlLCA2MyUsIDAuMSk7XG4gICAgICAgIC0tbHVtby1wcmltYXJ5LXRleHQtY29sb3I6IGhzbCgyMTQsIDEwMCUsIDcwJSk7XG4gICAgICAgIC0tbHVtby1wcmltYXJ5LWNvbnRyYXN0LWNvbG9yOiAjRkZGO1xuXG4gICAgICAgIC8qIEVycm9yICovXG4gICAgICAgIC0tbHVtby1lcnJvci1jb2xvcjogaHNsKDMsIDkwJSwgNjMlKTtcbiAgICAgICAgLS1sdW1vLWVycm9yLWNvbG9yLTUwcGN0OiBoc2xhKDMsIDkwJSwgNjMlLCAwLjUpO1xuICAgICAgICAtLWx1bW8tZXJyb3ItY29sb3ItMTBwY3Q6IGhzbGEoMywgOTAlLCA2MyUsIDAuMSk7XG4gICAgICAgIC0tbHVtby1lcnJvci10ZXh0LWNvbG9yOiBoc2woMywgMTAwJSwgNjclKTtcblxuICAgICAgICAvKiBTdWNjZXNzICovXG4gICAgICAgIC0tbHVtby1zdWNjZXNzLWNvbG9yOiBoc2woMTQ1LCA2NSUsIDQyJSk7XG4gICAgICAgIC0tbHVtby1zdWNjZXNzLWNvbG9yLTUwcGN0OiBoc2xhKDE0NSwgNjUlLCA0MiUsIDAuNSk7XG4gICAgICAgIC0tbHVtby1zdWNjZXNzLWNvbG9yLTEwcGN0OiBoc2xhKDE0NSwgNjUlLCA0MiUsIDAuMSk7XG4gICAgICAgIC0tbHVtby1zdWNjZXNzLXRleHQtY29sb3I6IGhzbCgxNDUsIDg1JSwgNDclKTtcbiAgICAgIH1cblxuICAgICAgaHRtbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWJvZHktdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tYmFzZS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFt0aGVtZX49XCJkYXJrXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1iYXNlLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8taGVhZGVyLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgY29kZSxcbiAgICAgIHByZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QtMTBwY3QpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMtbSk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImx1bW8tY29sb3ItbGVnYWN5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cImx1bW8tY29sb3JcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tYm9keS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWJhc2UtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG5cbi8qIE9ubHkgbmVlZGVkIGZvciBJRTExIHdoZW4geW91IHdhbnQgdG8gdXNlIHRoZSBkYXJrIHBhbGV0dGUgaW5zaWRlIHRoZSBsaWdodCBwYWxldHRlICovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG47XG4iLCJpbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5pbXBvcnQgJy4vdmVyc2lvbi5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGN1c3RvbS1zdHlsZT5cbiAgPHN0eWxlPlxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6ICdsdW1vLWljb25zJztcbiAgICAgIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFCRWdBQXNBQUFBQUlpd0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFEc0FBQUJVSUlzbGVrOVRMeklBQUFGRUFBQUFRd0FBQUZaQUlVdUtZMjFoY0FBQUFZZ0FBQUQ0QUFBRHJzQ1U4ZDVuYkhsbUFBQUNnQUFBQzJNQUFCZDRoOVRvMldobFlXUUFBQTNrQUFBQU1RQUFBRFlTbkNrdWFHaGxZUUFBRGhnQUFBQWRBQUFBSkFicEEzNW9iWFI0QUFBT09BQUFBQkFBQUFDc3BCQUFBR3h2WTJFQUFBNUlBQUFBV0FBQUFGaDU1SUFzYldGNGNBQUFEcUFBQUFBZkFBQUFJQUZLQVhCdVlXMWxBQUFPd0FBQUFURUFBQUl1VVVKWkNIQnZjM1FBQUEvMEFBQUJLd0FBQWVsbThTelZlSnhqWUdSZ1lPQmlNR0N3WTJCeWNmTUpZZURMU1N6Slk1QmlZR0dBQUpBOE1wc3hKek05a1lFRHhnUEtzWUJwRGlCbWc0Z0NBQ1k3QlVnQWVKeGpZR1MreURpQmdaV0JnYW1LYVE4REEwTVBoR1o4d0dESXlBUVVaV0JsWnNBS0F0SmNVeGdjWGpHKzBtSU8rcC9GRU1VY3hEQU5LTXdJa2dNQUJuOE1MUUI0bk8zU1dXNkRNQUJGMFV0d0NFbklQTS96aExLOExxaGZYUnliU1AxNFhVWXRIVjloR1lRd1FCTklvM2NVSVBraFFlTTdyaWIxZWtxblhnOTgxWHVDMXF2eTg0bHpvamxlaDNwdXhMMGhQakdqUlU0NzN0ZWxvRWVmQVVOR2pKa3daY2FjQlV0V3JObXdaY2VlQTBkT25MbHc1Y2FkQjA5ZWxQR2hHZitqME5USS82NUtmWGVyVDZKaHFLbnBSS3RnT3B1cWFUcnRLalBVbHFIbWh0bzIxSTdwTDZpNmhscVkzcTdxR1dyZlVBZUdPalRVa2FHT0RYVmlxRk5EblJucTNGQVhocm8wMUpXaHJnMTFZNmhiUTkwWjZ0NVFENFo2Tk5TVG9aNE45V0tvVjBPOUdlcmRVQitHK2pUVWw2R1dSdmtMMjRCa0VYaWN0Vmg5YkZ2VkZiL254dmJ6KzdSZi9ONnpIY2QyYkNmUCtXZ2MxWjlOMGpwTm5FTDZrYlJWUzZIQTJoUVlHaDlUR1IxQ2JDcWEyclhyV09rUUUvc0hOSmdtdFp2b1ZOWnFFMUIxRE5IeHpUUXhDZWhVVFlpSlRReUVOdWkwcVNMZXpyM1BkdXlRZmdtUldPZmRlOCs5NTUxejdybm4vTzRqTG9KL2JSUDBVYUtRTUxGSmpwQkF2cGhMWkMzRGswb2s3V0J6UjIvdXBKczdSeXcvbmZGYmxuL3V1Ti9hcEN2d3JLTHJTdlVxUnVmYm01cG4wZnMwdzRnWXhuR1ZQNnFIbk80YldpRFFHUWd3dFM2bG0zbEIzUW9YMU0ydndFbXV6aXJGMzl5K0VzMitESjhkMXBreXFCSXFvemUzRDErWno0RHJGb2F6eEk4ZFd3TXJEbFoyRE1xUUFSOUFST3NKVSsyY21sVFBhelRjbzUyRjF4VGEyYTIrSzh2dnE5MmRWSG10TG9QZVFYL0FaUFJZR3RoRFlPZVpqQmpLb0ZzVkd1bFIzbFdVOTVXZUNLNDRxSFU3TWhXVUdVS1pEVDNvS1VjRzJHV3VoK0VERGZVWUEvamhBaGwwVE9zSk5ZU0V1N21RbWkzVXpmWHdaS0E0QnNWc0hMWFFZR2dSVzk1dUV0cEoxVmZuOVhpTHJpUkJsRkVxeHNEakEwOXlDTlVvUXh4d2Q3S1dTVHQyeTNHVEtpZmxxSFJTb1daYzNtMTFXYS9mSmRGZ1hENHNTWWZsZUpCS2Q4R016N0o4ZFpuL2NHUkNjS0dEbkEyR2UzZkt6Y3ZsblRETnRoR1dMWHpYL1dhWHRVQW1SZ2VMbEhTcjMwcjBHOVVUWE1iMEF0bXd6T295NzNma1NsSFprZHV3L1RZdVU5Y0FENFl1dFBveFRUc0EzNzk3d1ZyNFovMU5DNXpBUkhyNHZ0eEpqeElmaVpNaE1rYldrKzE0Qm5KWkt3cUdad0Rmc3dMeXhXRFNnMTFyRkxKRjdOb3B4amQxaDEvUU9UK29lemdmdTNZcStIaytkdWY1eCs0MG8xR1RrYUlnaWtLL0lFbkM2YVl4Q1VCYVpKU040WFRZRmpVL1lNTklLcUp3aERHT0NDSThGRFhuWG1YanRHaEdKeVNocWpBT25CT2tXMkpHOVM3R2dZZU1XQVU1SnpobldtQk9hT00rQ0tFUG9xU2ZGREMyVW5xK0RMbFVnVVZVRkZMWkdKZzZqdGxvanNkc2E4a1BPYlB1SmRpNWRuQmRCc0xKTUdUV0RhNHQySnZ0d3VQbzlzK1k4NnN1di9XMzNRRzFyQWFPQVVWK3Z4NEs2ZjJEMDRQVktsQzdXTFNyWnpBaTQ1WlY2bElDN1dvWHFtUnl2VXFvVndyelVvVnNJamVUWFdRditSSDVHVGxCWGlCL0luOGxuMEliQkNBRk9hakFKcmdaWXlPSFdxT2ZVZS9hSGpJMTJSNk9RbzFqQ2d0MjE1bCs0ZjZYUGIrME1Ob3UwVis0M24yRjc3dFNmUmIyNGQ3eml0Z25LbXZZSHM2OXp1Z2FQdkJ3djZpb1hrYjJMZEw2NUF0dzUxdUxrWGx1MWJoTU1SY1hTUGNZb3FLSVJsaDM0bFFQOC81SmJ1VUZ5ZTR2eEQ2LzZNeEZGMTFDMHVWTHI5VWxndzQ0dFMzcE1WaU5MVUV4YnljRmdMSWN0K1FETWliUmlteDF5ZFV6OEZYWml1T0lEQk9NVlgyblVaYytodU5FNVhVSjgxdWlKb2lhYndxYVZGMHVhY0tiYXUvcGw0UjJWVzBYWGxKcmE2Ym9WcllHNjQ2VEY1Tll6d3k0dmpFTlZyRGxjTnBaUGw4REg2WFg4WFdDeDBtdldWWlk2S0ZMcnZzWTY2L3pQaWN0NUZueGFOVVIvanV2WkNNM1R2RDYwRTJXMXRaaXpiWFRQRHVhYmNtMG5iYnpwV0twbUExYXlCUThnaWVkTFVNK0Ewa05qQmpRam11WXo3WXJnSVhZdm1GNjNaTEJ3U1hycG45VGI5d3dkZC9VMUgwUE1RSzNYY084dWwzV1Q3UHlQUGRweTBUZW1LeE5SY0pOYXVpWEpublVEcFVwcFFXczRTblVJeTBFRVNHWXFKWVFMR0h4emFHV3dWSWFTNlk3bVFGTThaallEUTNheGpmNjFTV2pVMzNKd09aQTFwd2FHMUw5bXpmNzFhSFJkWDFKSHc2RnAwYVhoTndicXllR05nNE5iZHpHQ0J4b3o0WlhqeTROdTY5WnI2c0RZNnZNckxVNW5BMVA4SmtiZFdYSjZFUmZNcnl2TmgxSmZROStUNGRJaEd2Szl3M2R4akJCemF0c1EvTWxPSFZJRG5ZcER6Nm9kQVhsUTAxdDJQYTVJYWZkOE1NcHhBZURLUDBDNkNqZ1ZMVDVvc0I2aWNVeDAxbFdqWHh6VC9HeVJGMndlbEVNNVovN2pHM1ZqUTFTck5uNUlieXpPRzVkb2JCMy9RSHh5WnZzWGNvejhJb0V3UzdwbENnK3p4SFFrNDI0cTlCZkVwa0VTSmJGSFF1c0RCU1dGa3VCa29QTzBrTEt3UlZZanhHWGxIVGNURFFNSi9INlRYOWFma083bW5yYVRPMWZlVG5aQVhMdTRjcDdIQVhNbU5HMXllRms5VGdTL05IaFpSLzRRb0JUci9aQis2aENneWwxNU5xMVViTjZuRTEvWm5QMVUyY2l6Q0JwdnM4Y0pRWko0TGtZeDVOL3laUEFVWk5RUTBWNGYzQlFsbFdySzNZUnpsMzBkT1Q2UlZuMnVwTnVyNndvU2E4Q3FwZFQvYUtuQk00bzNqTnVyOWQ5eHF0VVQ2dmVCRXQ5Q2E5YXQrRVJ6RUVoVWtSOHNhNW1RNGFWdkpvVmVFQTh6STRlaTVtVUxYRkd5VTd6LzZUQWVZTFZjcHpTV1pZOFBZWUY1eXJUVjYwc1QwK1hWMTQxdlgrK1dmMTZWMmJGZUdWUFpYeEZwa3Z5ZUtUV0xsemZXMG1uS3hzWTZZMzI5NC8wOTk4U0NmWDFibG01cGJjdkZHbHEvcjA3TVJBTWhZSURpVzVKRktXVzN2ZHJFcENzWlNKRytvbTdadS9QU1NjWkpoTmtMYm1XNVdzcjEycFdxVzV6S3Rsd1JTNGJGT3hVdzE3bUN6eTZsc2tDRGwxV1lPR1dEWXJBRHJNQTdCRER3ZVdXTmQ1a29pSm5SMWR6K3l0TFAycTBTcVBCMWxuSzJjY0I3UlllNEZTb1BrczNpQjN0NHR4VFNIY3RiMnN5MWl2azBwdkh1Q05tNncxZjZ3eHYzK09DZ043OExxZFFuVVZoN1Iwb1RBcDB6T2YycmJXNzcwVnU1QzJkSXlHZFRuSG84elNqaTdkcHBqMFVTb1ZDeitsaFJNVGg1M1RlcTlWYkdmYmp1U2JBb29TZFhheVk0UFlIZzM3NEM2ZjdnbDFCL0RYdUo0L1FYeE9CZEpGSnNwRnNJM2VncG9XVVVDamxUSUZuTllObCtaeVpLbUJlWUtHSGtEMVF5RGxoYUtiS3dLY0lKcUo0VExKMk9tZFkvSldYYWU0RGRHQnc4SFo3ZVhjZ0ZGMnpyMlNvYWxEcnk1aUtxb2EwUHVoZTNoUFEyczNlbFRZTStNSStuM3JLMEtnTDcvTGEzR2VNTHQ2bTd1OTEydkdudnRPUmlJYTBxQm1ocVZpK1hXOVhOQm1xYjhlVmdLeklIZkdJNWJOb0c3WDBVQ3plSVNtcUljTy9uWThGSDdVOGF2WDlmeC9TVCtoeDBzZXpQdzlReThNdW0zR1dmMk40VXkveUlZR1ZCWGJKSFdJWnA3ZGZUY3B0ZE1UcjlRbXE3RGFpSy91a3FDTDRrdDRSVWZTNVhQbk10bVQyMi9tUUZxRjdlbVNxdHJsdThTVkVseERSSnJaT0RrcHV3ZTBWZlRmamRFcDFmN0E3ditmb3pOQlhVSi82V1R1SzJUdEZscEZWWkFaM0xjRnZVaTFaMnAyWVQrRU1Ba0dKVlN0T3pMVEFQZzRJcVdJQWx6UlNqT0JrbDJ6eGozVEt5Y3B6VC9NbnZYM3VhU01XTStnVTBya1hqb2hoZWZWUk1hcHMzL2tMTVNLdjIzbFQyM3V4UXJrUWp5T0psZU1Ec2RoQW5ENlpHRWxXWjVNakNYekNFL2hrV1grV0Y0a256R2hWT3lLMmVRWmVrVjNleW8wekw4a3VZV0NuREN2ampoQWtjVFBPQkRYVmRvYXYzSFZjRm5Rakx2dFY5UzJwMHpBNkplZ1B3TVF4dCt5RmIzbGw5ekdscS81ZFJLYjNjRXlRWW9hTllwaGFySjd4Q0I3QVd4c0xZM2pqWlhZMFhzWmowV2p3YzlJNlBQL2RLQUJuQ1phcUhwYVpFQUN4azRaZUxaU0tOZ1pBQmwrbFlRWDFzSlFPU1gzbjZyNDEwZXZjb3VkNUplQUdVWFZQOUgxdFpPS2VqVHE0T25vMHowZXJybzFGcm5PcG9odmExZC9oVGR0VnNRZEtONVc5UmxUM05qRDBuem55S05UZ0tBTWZXTldjeW9kVjBJR0xQSUhPRjBvNEp5cXVmYUs0ejZXSUl6dUdoM2Q4Yzhjd1FnOEVSK09WeHlyamRtOHZOdWh0czRMb09paEd4SU11VWRnendpWU43eGhoMStvWm5KTnVURzdnUVp2dTRYV1o5R0FaWmpHRXVid2VQcVlodEtEVEgrOVZRa2wxNy9pR3lic25KKzgrc0t0eVByY2xsOXR5NjVac2RzdC85aXFwRUtoN001VmRCeGgzY3NPZE5jNnRXM0kxdXlNMVB6T1hlZ1NPckxGc0ZOSTJPMjdNK1RGMkFwbk45TVV2NXVkNkxqeEl2RVFuSFJ6eEl1NElzQTlNTEZrSm4ydGNab1o3T043ZFhlN3VqcmM4SHJ1c1BLYW1scVh3ZDc3bFFVdUxwaWxhdTRQVU1hcHVlQmI3aXJVNFJvVVhFWVh1VnVJR2xSR21PcCsybE5rYVJQVnppT3FtbGFadmFxRzRkRmdTajBqeEVKV3J2MTJJVVdudG13K3JmUWFyUkUwQXBoNG9jSTZubFVsR3FzK3UzLytUL2V0aFc2MlBwSHAyZUhiWnN0bmgvd09POTV5REFIaWNZMkJrWUdBQVlpMk5PSjk0ZnB1dkROek1MNEFpRE5jL2Z6cUVvUCsvWnA3S2RBdkk1V0JnQW9rQ0FHa2NEZmdBQUFCNG5HTmdaR0JnRHZxZkJTUmZNQUFCODFRR1JnWlVvQTBBVnZZRGJ3QUFBSGljWTJCZ1lHQitNVFF3QU04RUpvOEFBQUFBQUU0QW1nRG9BUW9CTEFGT0FYQUJtZ0hFQWU0Q0dnS2NBdWdFbWdTOEJOWUU4Z1VPQlNvRmVnWFFCZjRHUkFabUJyWUhHQWVRQ0JnSVVnaHFDUDRKUmdtK0Nkb0tCQW84Q29JS3VBcndDMUFMbGd1OGVKeGpZR1JnWU5CbVRHRVFaUUFCSmlEbUFrSUdodjlnUGdNQUdKUUJ2QUI0bkcyUlBVN0RNQmlHMy9RUDBVb0lCR0poOFFJTGF2b3pkbVJvOXc3ZDA5UnBVemx4NUxnVnZRTW40QkFjZ29FemNBZ093VnZ6U1pWUWJjbmY0OGZ2RnlzSmdHdDhJY0p4Uk9pRzlUZ2F1T0R1ajV1a0crRVcrVUc0alI0ZWhUdjBRK0V1bmpFUjd1RVdtaytJV3BjMGQzZ1ZidUFLYjhKTituZmhGdmxEdUkxN2ZBcDM2TCtGdTFqZ1I3aUhwK2pGN0FyYnoxTmIxbk85M3BuRW5jU0pGdHJWdVMzVktCNmU1RXlYMmlWZXI5VHlvT3I5ZXV4OXBqSm5DelcxcGRmR1dGVTV1OVdwanpmZVY1UEJJQk1mcDdhQXdRNEZMUHJJa2JLV3FESG4rNjdwRFJLNHM0bHpic0V1eDVxSHZjSUlNYi9udWVTTXlUS2tFM2pXRmROTEhMalcyUFBtTWExSHhuM0dqR1cvd2pUMEh0T0cwOUpVNFd4TGs5TEgySVN1aXY5dHdKbjl5OGZoOXVJWEkrQmtuQUFBQUhpY2JZN1pib013RUVXNUNWQkNTTHJ2Kzc2a2ZKUmpUd0hGc2RHQUcrWHZ5NUpVZmVoSUhwMHJueG1OTi9ENmlyMy9hNFlCaHZBUklNUU9Jb3dRWTR3RUUweXhpejNzNHdDSE9NSXhUbkNLTTV6akFwZTR3alZ1Y0lzNzNPTUJqM2pDTTE3d2lqZTg0d016ZkhxSjBFVm1Va21tSm83N29PbXJIdmZJUlpiWHNUQ1pwbFRabGRsZ2IzVFlHVkhQcm93RnMxMXQxQTU3dGNPTjJyRXJSM1BCcWN3RjEvNmN0STZrMEdTVTRKSE1TUzZXZ2hkSlE5OXNUYmZ1TjdRTEo5dlEzN2ROcmd5a3RuSXhsRFlMSk51cWl0cFJiWVdLRk51eURUNnBvZzZvT1lLSHRLYWtlYWtxS2pIWHBQd2xHUmNzQytPcXhMSWlKcFhxb3FxRE1yZUcybDVidjlSaTNUUlgrYzIzRFpuYTlXRkZnbVh1TzZQczFKbS93NkVyVzhOM0ZiSG4vUUM0NDRqMEFBPT0pIGZvcm1hdCgnd29mZicpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBodG1sIHtcbiAgICAgIC0tbHVtby1pY29ucy1hbGlnbi1jZW50ZXI6IFwiXFxcXGVhMDFcIjtcbiAgICAgIC0tbHVtby1pY29ucy1hbGlnbi1sZWZ0OiBcIlxcXFxlYTAyXCI7XG4gICAgICAtLWx1bW8taWNvbnMtYWxpZ24tcmlnaHQ6IFwiXFxcXGVhMDNcIjtcbiAgICAgIC0tbHVtby1pY29ucy1hbmdsZS1kb3duOiBcIlxcXFxlYTA0XCI7XG4gICAgICAtLWx1bW8taWNvbnMtYW5nbGUtbGVmdDogXCJcXFxcZWEwNVwiO1xuICAgICAgLS1sdW1vLWljb25zLWFuZ2xlLXJpZ2h0OiBcIlxcXFxlYTA2XCI7XG4gICAgICAtLWx1bW8taWNvbnMtYW5nbGUtdXA6IFwiXFxcXGVhMDdcIjtcbiAgICAgIC0tbHVtby1pY29ucy1hcnJvdy1kb3duOiBcIlxcXFxlYTA4XCI7XG4gICAgICAtLWx1bW8taWNvbnMtYXJyb3ctbGVmdDogXCJcXFxcZWEwOVwiO1xuICAgICAgLS1sdW1vLWljb25zLWFycm93LXJpZ2h0OiBcIlxcXFxlYTBhXCI7XG4gICAgICAtLWx1bW8taWNvbnMtYXJyb3ctdXA6IFwiXFxcXGVhMGJcIjtcbiAgICAgIC0tbHVtby1pY29ucy1iYXItY2hhcnQ6IFwiXFxcXGVhMGNcIjtcbiAgICAgIC0tbHVtby1pY29ucy1iZWxsOiBcIlxcXFxlYTBkXCI7XG4gICAgICAtLWx1bW8taWNvbnMtY2FsZW5kYXI6IFwiXFxcXGVhMGVcIjtcbiAgICAgIC0tbHVtby1pY29ucy1jaGVja21hcms6IFwiXFxcXGVhMGZcIjtcbiAgICAgIC0tbHVtby1pY29ucy1jaGV2cm9uLWRvd246IFwiXFxcXGVhMTBcIjtcbiAgICAgIC0tbHVtby1pY29ucy1jaGV2cm9uLWxlZnQ6IFwiXFxcXGVhMTFcIjtcbiAgICAgIC0tbHVtby1pY29ucy1jaGV2cm9uLXJpZ2h0OiBcIlxcXFxlYTEyXCI7XG4gICAgICAtLWx1bW8taWNvbnMtY2hldnJvbi11cDogXCJcXFxcZWExM1wiO1xuICAgICAgLS1sdW1vLWljb25zLWNsb2NrOiBcIlxcXFxlYTE0XCI7XG4gICAgICAtLWx1bW8taWNvbnMtY29nOiBcIlxcXFxlYTE1XCI7XG4gICAgICAtLWx1bW8taWNvbnMtY3Jvc3M6IFwiXFxcXGVhMTZcIjtcbiAgICAgIC0tbHVtby1pY29ucy1kb3dubG9hZDogXCJcXFxcZWExN1wiO1xuICAgICAgLS1sdW1vLWljb25zLWRyb3Bkb3duOiBcIlxcXFxlYTE4XCI7XG4gICAgICAtLWx1bW8taWNvbnMtZWRpdDogXCJcXFxcZWExOVwiO1xuICAgICAgLS1sdW1vLWljb25zLWVycm9yOiBcIlxcXFxlYTFhXCI7XG4gICAgICAtLWx1bW8taWNvbnMtZXllOiBcIlxcXFxlYTFiXCI7XG4gICAgICAtLWx1bW8taWNvbnMtZXllLWRpc2FibGVkOiBcIlxcXFxlYTFjXCI7XG4gICAgICAtLWx1bW8taWNvbnMtbWVudTogXCJcXFxcZWExZFwiO1xuICAgICAgLS1sdW1vLWljb25zLW1pbnVzOiBcIlxcXFxlYTFlXCI7XG4gICAgICAtLWx1bW8taWNvbnMtb3JkZXJlZC1saXN0OiBcIlxcXFxlYTFmXCI7XG4gICAgICAtLWx1bW8taWNvbnMtcGhvbmU6IFwiXFxcXGVhMjBcIjtcbiAgICAgIC0tbHVtby1pY29ucy1waG90bzogXCJcXFxcZWEyMVwiO1xuICAgICAgLS1sdW1vLWljb25zLXBsYXk6IFwiXFxcXGVhMjJcIjtcbiAgICAgIC0tbHVtby1pY29ucy1wbHVzOiBcIlxcXFxlYTIzXCI7XG4gICAgICAtLWx1bW8taWNvbnMtcmVkbzogXCJcXFxcZWEyNFwiO1xuICAgICAgLS1sdW1vLWljb25zLXJlbG9hZDogXCJcXFxcZWEyNVwiO1xuICAgICAgLS1sdW1vLWljb25zLXNlYXJjaDogXCJcXFxcZWEyNlwiO1xuICAgICAgLS1sdW1vLWljb25zLXVuZG86IFwiXFxcXGVhMjdcIjtcbiAgICAgIC0tbHVtby1pY29ucy11bm9yZGVyZWQtbGlzdDogXCJcXFxcZWEyOFwiO1xuICAgICAgLS1sdW1vLWljb25zLXVwbG9hZDogXCJcXFxcZWEyOVwiO1xuICAgICAgLS1sdW1vLWljb25zLXVzZXI6IFwiXFxcXGVhMmFcIjtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG5cbi8qIE5PVElDRTogR2VuZXJhdGVkIHdpdGggJ2d1bHAgaWNvbnMnICovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG47XG4iLCJpbXBvcnQgJy4uL3NwYWNpbmcuanMnO1xuaW1wb3J0ICcuLi9zdHlsZS5qcyc7XG5pbXBvcnQgJy4vb3ZlcmxheS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJsdW1vLW1lbnUtb3ZlcmxheS1jb3JlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbb3BlbmluZ10pLFxuICAgICAgOmhvc3QoW2Nsb3NpbmddKSB7XG4gICAgICAgIGFuaW1hdGlvbjogMC4xNHMgbHVtby1vdmVybGF5LWR1bW15LWFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW29wZW5pbmddKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBhbmltYXRpb246IDAuMXMgbHVtby1tZW51LW92ZXJsYXktZW50ZXIgZWFzZS1vdXQgYm90aDtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsdW1vLW1lbnUtb3ZlcmxheS1lbnRlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2xvc2luZ10pIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIGFuaW1hdGlvbjogMC4xcyBsdW1vLW1lbnUtb3ZlcmxheS1leGl0IGJvdGg7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbHVtby1tZW51LW92ZXJsYXktZXhpdCB7XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwibHVtby1tZW51LW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibHVtby1vdmVybGF5IGx1bW8tbWVudS1vdmVybGF5LWNvcmVcIj5cbiAgICAgIC8qIFNtYWxsIHZpZXdwb3J0IChib3R0b20gc2hlZXQpIHN0eWxlcyAqL1xuICAgICAgLyogVXNlIGRpcmVjdCBtZWRpYSBxdWVyaWVzIGluc3RlYWQgb2YgdGhlIHN0YXRlIGF0dHJpYnV0ZXMgKFxcYFtwaG9uZV1cXGAgYW5kIFxcYFtmdWxsc2NyZWVuXVxcYCkgcHJvdmlkZWQgYnkgdGhlIGVsZW1lbnRzICovXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpLCAobWF4LWhlaWdodDogNDIwcHgpIHtcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm90dG9tOiB2YXIoLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b20sIDApICFpbXBvcnRhbnQ7XG4gICAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWx1bW8tYm94LXNoYWRvdy14bCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBUaGUgY29udGVudCBwYXJ0IHNjcm9sbHMgaW5zdGVhZCBvZiB0aGUgb3ZlcmxheSBwYXJ0LCBiZWNhdXNlIG9mIHRoZSBncmFkaWVudCBmYWRlLW91dCAqL1xuICAgICAgICBbcGFydD1cImNvbnRlbnRcIl0ge1xuICAgICAgICAgIHBhZGRpbmc6IDMwcHggdmFyKC0tbHVtby1zcGFjZS1tKTtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwIDQwcHgsICMwMDAgY2FsYygxMDAlIC0gNDBweCksIHRyYW5zcGFyZW50KTtcbiAgICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICMwMDAgNDBweCwgIzAwMCBjYWxjKDEwMCUgLSA0MHB4KSwgdHJhbnNwYXJlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgW3BhcnQ9XCJiYWNrZHJvcFwiXSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBBbmltYXRpb25zICovXG5cbiAgICAgICAgOmhvc3QoW29wZW5pbmddKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICAgIGFuaW1hdGlvbjogMC4ycyBsdW1vLW1vYmlsZS1tZW51LW92ZXJsYXktZW50ZXIgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSkgYm90aDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtjbG9zaW5nXSksXG4gICAgICAgIDpob3N0KFtjbG9zaW5nXSkgW3BhcnQ9XCJiYWNrZHJvcFwiXSB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjE0cztcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtjbG9zaW5nXSkgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgICBhbmltYXRpb246IDAuMTRzIDAuMTRzIGx1bW8tbW9iaWxlLW1lbnUtb3ZlcmxheS1leGl0IGN1YmljLWJlemllciguNTUsIC4wNTUsIC42NzUsIC4xOSkgYm90aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGx1bW8tbW9iaWxlLW1lbnUtb3ZlcmxheS1lbnRlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsdW1vLW1vYmlsZS1tZW51LW92ZXJsYXktZXhpdCB7XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuXG4vKiBTcGxpdCBhcyBhIHNlcGFyYXRlIG1vZHVsZSBiZWNhdXNlIGNvbWJvIGJveCBjYW4gb25seSB1c2UgdGhlIFwiZnVsbHNjcmVlblwiIHN0eWxlcyAqL1xuLypcbiAgRklYTUUocG9seW1lci1tb2R1bGl6ZXIpOiB0aGUgYWJvdmUgY29tbWVudHMgd2VyZSBleHRyYWN0ZWRcbiAgZnJvbSBIVE1MIGFuZCBtYXkgYmUgb3V0IG9mIHBsYWNlIGhlcmUuIFJldmlldyB0aGVtIGFuZFxuICB0aGVuIGRlbGV0ZSB0aGlzIGNvbW1lbnQhXG4qL1xuO1xuIiwiaW1wb3J0ICcuLi9jb2xvci5qcyc7XG5pbXBvcnQgJy4uL3NwYWNpbmcuanMnO1xuaW1wb3J0ICcuLi9zdHlsZS5qcyc7XG5pbXBvcnQgJy4uL3R5cG9ncmFwaHkuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibHVtby1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHRvcDogdmFyKC0tbHVtby1zcGFjZS1tKTtcbiAgICAgICAgcmlnaHQ6IHZhcigtLWx1bW8tc3BhY2UtbSk7XG4gICAgICAgIGJvdHRvbTogdmFyKC0tbHVtby1zcGFjZS1tKTtcbiAgICAgICAgbGVmdDogdmFyKC0tbHVtby1zcGFjZS1tKTtcbiAgICAgICAgLyogV29ya2Fyb3VuZCBmb3IgRWRnZSBpc3N1ZSAob25seSBvbiBTdXJmYWNlKSwgd2hlcmUgYW4gb3ZlcmZsb3dpbmcgdmFhZGluLWxpc3QtYm94IGluc2lkZSB2YWFkaW4tc2VsZWN0LW92ZXJsYXkgbWFrZXMgdGhlIG92ZXJsYXkgdHJhbnNwYXJlbnQgKi9cbiAgICAgICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1iYXNlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWx1bW8tdGludC01cGN0KSwgdmFyKC0tbHVtby10aW50LTVwY3QpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbHVtby1ib3JkZXItcmFkaXVzLW0pO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tbHVtby1zaGFkZS01cGN0KSwgdmFyKC0tbHVtby1ib3gtc2hhZG93LW0pO1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1ib2R5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbHVtby1mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUtbSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1sdW1vLWxpbmUtaGVpZ2h0LW0pO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY29udGVudFwiXSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWx1bW8tc3BhY2UteHMpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImJhY2tkcm9wXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1zaGFkZS0yMHBjdCk7XG4gICAgICAgIGFuaW1hdGlvbjogMC4ycyBsdW1vLW92ZXJsYXktYmFja2Ryb3AtZW50ZXIgYm90aDtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbHVtby1vdmVybGF5LWJhY2tkcm9wLWVudGVyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Nsb3NpbmddKSBbcGFydD1cImJhY2tkcm9wXCJdIHtcbiAgICAgICAgYW5pbWF0aW9uOiAwLjJzIGx1bW8tb3ZlcmxheS1iYWNrZHJvcC1leGl0IGJvdGg7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbHVtby1vdmVybGF5LWJhY2tkcm9wLWV4aXQge1xuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbHVtby1vdmVybGF5LWR1bW15LWFuaW1hdGlvbiB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9jdXN0b20tc3R5bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZT5cbiAgICBodG1sIHtcbiAgICAgIC0tbHVtby1zaXplLXhzOiAxLjYyNXJlbTtcbiAgICAgIC0tbHVtby1zaXplLXM6IDEuODc1cmVtO1xuICAgICAgLS1sdW1vLXNpemUtbTogMi4yNXJlbTtcbiAgICAgIC0tbHVtby1zaXplLWw6IDIuNzVyZW07XG4gICAgICAtLWx1bW8tc2l6ZS14bDogMy41cmVtO1xuXG4gICAgICAvKiBJY29ucyAqL1xuICAgICAgLS1sdW1vLWljb24tc2l6ZS1zOiAxLjI1ZW07XG4gICAgICAtLWx1bW8taWNvbi1zaXplLW06IDEuNWVtO1xuICAgICAgLS1sdW1vLWljb24tc2l6ZS1sOiAyLjI1ZW07XG4gICAgICAvKiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKi9cbiAgICAgIC0tbHVtby1pY29uLXNpemU6IHZhcigtLWx1bW8taWNvbi1zaXplLW0pO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvY3VzdG9tLXN0eWxlLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8Y3VzdG9tLXN0eWxlPlxuICA8c3R5bGU+XG4gICAgaHRtbCB7XG4gICAgICAvKiBTcXVhcmUgKi9cbiAgICAgIC0tbHVtby1zcGFjZS14czogMC4yNXJlbTtcbiAgICAgIC0tbHVtby1zcGFjZS1zOiAwLjVyZW07XG4gICAgICAtLWx1bW8tc3BhY2UtbTogMXJlbTtcbiAgICAgIC0tbHVtby1zcGFjZS1sOiAxLjVyZW07XG4gICAgICAtLWx1bW8tc3BhY2UteGw6IDIuNXJlbTtcblxuICAgICAgLyogV2lkZSAqL1xuICAgICAgLS1sdW1vLXNwYWNlLXdpZGUteHM6IGNhbGModmFyKC0tbHVtby1zcGFjZS14cykgLyAyKSB2YXIoLS1sdW1vLXNwYWNlLXhzKTtcbiAgICAgIC0tbHVtby1zcGFjZS13aWRlLXM6IGNhbGModmFyKC0tbHVtby1zcGFjZS1zKSAvIDIpIHZhcigtLWx1bW8tc3BhY2Utcyk7XG4gICAgICAtLWx1bW8tc3BhY2Utd2lkZS1tOiBjYWxjKHZhcigtLWx1bW8tc3BhY2UtbSkgLyAyKSB2YXIoLS1sdW1vLXNwYWNlLW0pO1xuICAgICAgLS1sdW1vLXNwYWNlLXdpZGUtbDogY2FsYyh2YXIoLS1sdW1vLXNwYWNlLWwpIC8gMikgdmFyKC0tbHVtby1zcGFjZS1sKTtcbiAgICAgIC0tbHVtby1zcGFjZS13aWRlLXhsOiBjYWxjKHZhcigtLWx1bW8tc3BhY2UteGwpIC8gMikgdmFyKC0tbHVtby1zcGFjZS14bCk7XG5cbiAgICAgIC8qIFRhbGwgKi9cbiAgICAgIC0tbHVtby1zcGFjZS10YWxsLXhzOiB2YXIoLS1sdW1vLXNwYWNlLXhzKSBjYWxjKHZhcigtLWx1bW8tc3BhY2UteHMpIC8gMik7XG4gICAgICAtLWx1bW8tc3BhY2UtdGFsbC1zOiB2YXIoLS1sdW1vLXNwYWNlLXMpIGNhbGModmFyKC0tbHVtby1zcGFjZS1zKSAvIDIpO1xuICAgICAgLS1sdW1vLXNwYWNlLXRhbGwtbTogdmFyKC0tbHVtby1zcGFjZS1tKSBjYWxjKHZhcigtLWx1bW8tc3BhY2UtbSkgLyAyKTtcbiAgICAgIC0tbHVtby1zcGFjZS10YWxsLWw6IHZhcigtLWx1bW8tc3BhY2UtbCkgY2FsYyh2YXIoLS1sdW1vLXNwYWNlLWwpIC8gMik7XG4gICAgICAtLWx1bW8tc3BhY2UtdGFsbC14bDogdmFyKC0tbHVtby1zcGFjZS14bCkgY2FsYyh2YXIoLS1sdW1vLXNwYWNlLXhsKSAvIDIpO1xuICAgIH1cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92ZXJzaW9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvY3VzdG9tLXN0eWxlLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8Y3VzdG9tLXN0eWxlPlxuICA8c3R5bGU+XG4gICAgaHRtbCB7XG4gICAgICAvKiBCb3JkZXIgcmFkaXVzICovXG4gICAgICAtLWx1bW8tYm9yZGVyLXJhZGl1cy1zOiAwLjI1ZW07IC8qIENoZWNrYm94LCBiYWRnZSwgZGF0ZS1waWNrZXIgeWVhciBpbmRpY2F0b3IsIGV0YyAqL1xuICAgICAgLS1sdW1vLWJvcmRlci1yYWRpdXMtbTogdmFyKC0tbHVtby1ib3JkZXItcmFkaXVzLCAwLjI1ZW0pOyAvKiBCdXR0b24sIHRleHQgZmllbGQsIG1lbnUgb3ZlcmxheSwgZXRjICovXG4gICAgICAtLWx1bW8tYm9yZGVyLXJhZGl1cy1sOiAwLjVlbTsgLyogRGlhbG9nLCBub3RpZmljYXRpb24sIGV0YyAqL1xuICAgICAgLS1sdW1vLWJvcmRlci1yYWRpdXM6IDAuMjVlbTsgLyogRGVwcmVjYXRlZCAqL1xuXG4gICAgICAvKiBTaGFkb3cgKi9cbiAgICAgIC0tbHVtby1ib3gtc2hhZG93LXhzOiAwIDFweCA0cHggLTFweCB2YXIoLS1sdW1vLXNoYWRlLTUwcGN0KTtcbiAgICAgIC0tbHVtby1ib3gtc2hhZG93LXM6IDAgMnB4IDRweCAtMXB4IHZhcigtLWx1bW8tc2hhZGUtMjBwY3QpLCAwIDNweCAxMnB4IC0xcHggdmFyKC0tbHVtby1zaGFkZS0zMHBjdCk7XG4gICAgICAtLWx1bW8tYm94LXNoYWRvdy1tOiAwIDJweCA2cHggLTFweCB2YXIoLS1sdW1vLXNoYWRlLTIwcGN0KSwgMCA4cHggMjRweCAtNHB4IHZhcigtLWx1bW8tc2hhZGUtNDBwY3QpO1xuICAgICAgLS1sdW1vLWJveC1zaGFkb3ctbDogMCAzcHggMThweCAtMnB4IHZhcigtLWx1bW8tc2hhZGUtMjBwY3QpLCAwIDEycHggNDhweCAtNnB4IHZhcigtLWx1bW8tc2hhZGUtNDBwY3QpO1xuICAgICAgLS1sdW1vLWJveC1zaGFkb3cteGw6IDAgNHB4IDI0cHggLTNweCB2YXIoLS1sdW1vLXNoYWRlLTIwcGN0KSwgMCAxOHB4IDY0cHggLThweCB2YXIoLS1sdW1vLXNoYWRlLTQwcGN0KTtcblxuICAgICAgLyogQ2xpY2thYmxlIGVsZW1lbnQgY3Vyc29yICovXG4gICAgICAtLWx1bW8tY2xpY2thYmxlLWN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZT5cbiAgICBodG1sIHtcbiAgICAgIC8qIEZvbnQgZmFtaWxpZXMgKi9cbiAgICAgIC0tbHVtby1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuXG4gICAgICAvKiBGb250IHNpemVzICovXG4gICAgICAtLWx1bW8tZm9udC1zaXplLXh4czogLjc1cmVtO1xuICAgICAgLS1sdW1vLWZvbnQtc2l6ZS14czogLjgxMjVyZW07XG4gICAgICAtLWx1bW8tZm9udC1zaXplLXM6IC44NzVyZW07XG4gICAgICAtLWx1bW8tZm9udC1zaXplLW06IDFyZW07XG4gICAgICAtLWx1bW8tZm9udC1zaXplLWw6IDEuMTI1cmVtO1xuICAgICAgLS1sdW1vLWZvbnQtc2l6ZS14bDogMS4zNzVyZW07XG4gICAgICAtLWx1bW8tZm9udC1zaXplLXh4bDogMS43NXJlbTtcbiAgICAgIC0tbHVtby1mb250LXNpemUteHh4bDogMi41cmVtO1xuXG4gICAgICAvKiBMaW5lIGhlaWdodHMgKi9cbiAgICAgIC0tbHVtby1saW5lLWhlaWdodC14czogMS4yNTtcbiAgICAgIC0tbHVtby1saW5lLWhlaWdodC1zOiAxLjM3NTtcbiAgICAgIC0tbHVtby1saW5lLWhlaWdodC1tOiAxLjYyNTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbjwvY3VzdG9tLXN0eWxlPjxkb20tbW9kdWxlIGlkPVwibHVtby10eXBvZ3JhcGh5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICBodG1sIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWx1bW8tZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLCB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1tKSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1sdW1vLWxpbmUtaGVpZ2h0LW0pO1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgfVxuXG4gICAgICAvKiBDYW7igJl0IGNvbWJpbmUgd2l0aCB0aGUgYWJvdmUgc2VsZWN0b3IgYmVjYXVzZSB0aGF0IGRvZXNu4oCZdCB3b3JrIGluIGJyb3dzZXJzIHdpdGhvdXQgbmF0aXZlIHNoYWRvdyBkb20gKi9cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWx1bW8tZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLCB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1tKSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1sdW1vLWxpbmUtaGVpZ2h0LW0pO1xuICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgfVxuXG4gICAgICBzbWFsbCxcbiAgICAgIFt0aGVtZX49XCJmb250LXNpemUtc1wiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUtcyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1sdW1vLWxpbmUtaGVpZ2h0LXMpO1xuICAgICAgfVxuXG4gICAgICBbdGhlbWV+PVwiZm9udC1zaXplLXhzXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS14cyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1sdW1vLWxpbmUtaGVpZ2h0LXhzKTtcbiAgICAgIH1cblxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWx1bW8tbGluZS1oZWlnaHQteHMpO1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjI1ZW07XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS14eHhsKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUteHhsKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS14bCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgfVxuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUtbCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICAgICAgfVxuXG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUtbSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbiAgICAgIH1cblxuICAgICAgaDYge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLXhzKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgICAgIH1cblxuICAgICAgcCxcbiAgICAgIGJsb2NrcXVvdGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgIGhyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogdmFyKC0tbHVtby1zcGFjZS1zKSBjYWxjKHZhcigtLWx1bW8tYm9yZGVyLXJhZGl1cy1tKSAvIDIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTEwcGN0KTtcbiAgICAgIH1cblxuICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tbHVtby1jb250cmFzdC0zMHBjdCk7XG4gICAgICB9XG5cbiAgICAgIGIsXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiY2xhc3MgTHVtbyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiAnMS40LjInO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndmFhZGluLWx1bW8tc3R5bGVzJywgTHVtbyk7XG5cbmV4cG9ydCB7IEx1bW8gfTtcbiIsImNvbnN0IHAgPSBFbGVtZW50LnByb3RvdHlwZTtcbmNvbnN0IG1hdGNoZXMgPSBwLm1hdGNoZXMgfHwgcC5tYXRjaGVzU2VsZWN0b3IgfHwgcC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgcC5tc01hdGNoZXNTZWxlY3RvciB8fCBwLm9NYXRjaGVzU2VsZWN0b3IgfHwgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbi8qKlxuICogYFBvbHltZXIuSXJvbkZvY3VzYWJsZXNIZWxwZXJgIHJlbGllcyBvbiBzb21lIFBvbHltZXItc3BlY2lmaWMgbGVnYWN5IEFQSSxcbiAqIGVzcGVjaWFsbHkgdGhlIGByb290YCBwcm9wZXJ0eSB3aGljaCBkb2VzIG5vdCBleGlzdCBmb3IgbmF0aXZlIHNoYWRvdyBET00uXG4gKiBUaGF0J3Mgd2h5IHdlIGhhdmUgdGhpcyBoZWxwZXIgaGVyZS5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pc3N1ZXMvMjgyXG4gKi9cbmNvbnN0IEZvY3VzYWJsZXNIZWxwZXIgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlsZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgY29uc3QgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGEgZWxlbWVudCBpcyBmb2N1c2FibGUuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZvY3VzYWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIC8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYwMDE5NC80MjI4NzAzOlxuICAgIC8vIFRoZXJlIGlzbid0IGEgZGVmaW5pdGUgbGlzdCwgaXQncyB1cCB0byB0aGUgYnJvd3Nlci4gVGhlIG9ubHlcbiAgICAvLyBzdGFuZGFyZCB3ZSBoYXZlIGlzIERPTSBMZXZlbCAyIEhUTUxcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItSFRNTC9odG1sLmh0bWwsIGFjY29yZGluZyB0byB3aGljaCB0aGVcbiAgICAvLyBvbmx5IGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGZvY3VzKCkgbWV0aG9kIGFyZSBIVE1MSW5wdXRFbGVtZW50LFxuICAgIC8vIEhUTUxTZWxlY3RFbGVtZW50LCBIVE1MVGV4dEFyZWFFbGVtZW50IGFuZCBIVE1MQW5jaG9yRWxlbWVudC4gVGhpc1xuICAgIC8vIG5vdGFibHkgb21pdHMgSFRNTEJ1dHRvbkVsZW1lbnQgYW5kIEhUTUxBcmVhRWxlbWVudC4gUmVmZXJyaW5nIHRvIHRoZXNlXG4gICAgLy8gdGVzdHMgd2l0aCB0YWJiYWJsZXMgaW4gZGlmZmVyZW50IGJyb3dzZXJzXG4gICAgLy8gaHR0cDovL2FsbHlqcy5pby9kYXRhLXRhYmxlcy9mb2N1c2FibGUuaHRtbFxuXG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgZm9jdXNlZCBpZiB0aGV5IGhhdmUgW2Rpc2FibGVkXSBhdHRyaWJ1dGUuXG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb2JqZWN0JykpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICB9XG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW4gYmUgZm9jdXNlZCBldmVuIGlmIHRoZXkgaGF2ZSBbZGlzYWJsZWRdIGF0dHJpYnV0ZS5cbiAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKGVsZW1lbnQsICdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpZnJhbWUsIFt0YWJpbmRleF0sIFtjb250ZW50RWRpdGFibGVdJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgYSBlbGVtZW50IGlzIHRhYmJhYmxlLiBUbyBiZSB0YWJiYWJsZSwgYSBlbGVtZW50IG11c3QgYmVcbiAgICogZm9jdXNhYmxlLCB2aXNpYmxlLCBhbmQgd2l0aCBhIHRhYmluZGV4ICE9PSAtMS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVGFiYmFibGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZvY3VzYWJsZShlbGVtZW50KSAmJlxuICAgICAgICBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW3RhYmluZGV4PVwiLTFcIl0pJykgJiZcbiAgICAgICAgdGhpcy5faXNWaXNpYmxlKGVsZW1lbnQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBub3JtYWxpemVkIGVsZW1lbnQgdGFiaW5kZXguIElmIG5vdCBmb2N1c2FibGUsIHJldHVybnMgLTEuXG4gICAqIEl0IGNoZWNrcyBmb3IgdGhlIGF0dHJpYnV0ZSBcInRhYmluZGV4XCIgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBwcm9wZXJ0eVxuICAgKiBgdGFiSW5kZXhgIHNpbmNlIGJyb3dzZXJzIGFzc2lnbiBkaWZmZXJlbnQgdmFsdWVzIHRvIGl0LlxuICAgKiBlLmcuIGluIEZpcmVmb3ggYDxkaXYgY29udGVudGVkaXRhYmxlPmAgaGFzIGB0YWJJbmRleCA9IC0xYFxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHshbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25vcm1hbGl6ZWRUYWJJbmRleDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmlzRm9jdXNhYmxlKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IDA7XG4gICAgICByZXR1cm4gTnVtYmVyKHRhYkluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHwgIXRoaXMuX2lzVmlzaWJsZShub2RlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICBsZXQgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJpYnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RyaWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIGxldCBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09ICdzbG90Jykge1xuICAgICAgY2hpbGRyZW4gPSBlbGVtZW50LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIGNoaWxkcmVuID0gKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvciBgZGlzcGxheTogbm9uZWBcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc1Zpc2libGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgZmlyc3QgdG8gc2F2ZSBhIHJlLWZsb3cuIElmIGxvb2tzIGdvb2QsIGNoZWNrIGFsc29cbiAgICAvLyBjb21wdXRlZCBzdHlsZS5cbiAgICBsZXQgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGlmIChzdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJiBzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogU29ydHMgYW4gYXJyYXkgb2YgdGFiYmFibGUgZWxlbWVudHMgYnkgdGFiaW5kZXguIFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHRhYmJhYmxlc1xuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zb3J0QnlUYWJJbmRleDogZnVuY3Rpb24odGFiYmFibGVzKSB7XG4gICAgLy8gSW1wbGVtZW50IGEgbWVyZ2Ugc29ydCBhcyBBcnJheS5wcm90b3R5cGUuc29ydCBkb2VzIGEgbm9uLXN0YWJsZSBzb3J0XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydFxuICAgIGNvbnN0IGxlbiA9IHRhYmJhYmxlcy5sZW5ndGg7XG4gICAgaWYgKGxlbiA8IDIpIHtcbiAgICAgIHJldHVybiB0YWJiYWJsZXM7XG4gICAgfVxuICAgIGNvbnN0IHBpdm90ID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLl9zb3J0QnlUYWJJbmRleCh0YWJiYWJsZXMuc2xpY2UoMCwgcGl2b3QpKTtcbiAgICBjb25zdCByaWdodCA9IHRoaXMuX3NvcnRCeVRhYkluZGV4KHRhYmJhYmxlcy5zbGljZShwaXZvdCkpO1xuICAgIHJldHVybiB0aGlzLl9tZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KTtcbiAgfSxcblxuICAvKipcbiAgICogTWVyZ2Ugc29ydCBpdGVyYXRvciwgbWVyZ2VzIHRoZSB0d28gYXJyYXlzIGludG8gb25lLCBzb3J0ZWQgYnkgdGFiIGluZGV4LlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSBsZWZ0XG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJpZ2h0XG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21lcmdlU29ydEJ5VGFiSW5kZXg6IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKChsZWZ0Lmxlbmd0aCA+IDApICYmIChyaWdodC5sZW5ndGggPiAwKSkge1xuICAgICAgaWYgKHRoaXMuX2hhc0xvd2VyVGFiT3JkZXIobGVmdFswXSwgcmlnaHRbMF0pKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobGVmdC5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChsZWZ0LCByaWdodCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgZWxlbWVudCBgYWAgaGFzIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50IGBiYFxuICAgKiAoYm90aCBlbGVtZW50cyBhcmUgYXNzdW1lZCB0byBiZSBmb2N1c2FibGUgYW5kIHRhYmJhYmxlKS5cbiAgICogRWxlbWVudHMgd2l0aCB0YWJpbmRleCA9IDAgaGF2ZSBsb3dlciB0YWIgb3JkZXIgY29tcGFyZWQgdG8gZWxlbWVudHNcbiAgICogd2l0aCB0YWJpbmRleCA+IDAuXG4gICAqIElmIGJvdGggaGF2ZSBzYW1lIHRhYmluZGV4LCBpdCByZXR1cm5zIGZhbHNlLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gYVxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gYlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhc0xvd2VyVGFiT3JkZXI6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAvLyBOb3JtYWxpemUgdGFiSW5kZXhlc1xuICAgIC8vIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gICAgY29uc3QgYXRpID0gTWF0aC5tYXgoYS50YWJJbmRleCwgMCk7XG4gICAgY29uc3QgYnRpID0gTWF0aC5tYXgoYi50YWJJbmRleCwgMCk7XG4gICAgcmV0dXJuIChhdGkgPT09IDAgfHwgYnRpID09PSAwKSA/IGJ0aSA+IGF0aSA6IGF0aSA+IGJ0aTtcbiAgfVxufTtcblxuZXhwb3J0IHsgRm9jdXNhYmxlc0hlbHBlciB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IHRlbXBsYXRpemUgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy90ZW1wbGF0aXplLmpzJztcbmltcG9ydCB7IGFmdGVyTmV4dFJlbmRlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuaW1wb3J0IHsgRmxhdHRlbmVkTm9kZXNPYnNlcnZlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2ZsYXR0ZW5lZC1ub2Rlcy1vYnNlcnZlci5qcyc7XG5pbXBvcnQgeyBUaGVtYWJsZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcbmltcG9ydCB7IEZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tICcuL3ZhYWRpbi1mb2N1c2FibGVzLWhlbHBlci5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xubGV0IG92ZXJsYXlDb250ZW50Q291bnRlciA9IDA7XG5cbmNvbnN0IGNyZWF0ZU92ZXJsYXlDb250ZW50ID0gKGNzc1RleHQpID0+IHtcbiAgb3ZlcmxheUNvbnRlbnRDb3VudGVyKys7XG4gIGNvbnN0IGlzID0gYHZhYWRpbi1vdmVybGF5LWNvbnRlbnQtJHtvdmVybGF5Q29udGVudENvdW50ZXJ9YDtcblxuICBjb25zdCBzdHlsZWRUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSAnOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfScgKyBjc3NUZXh0O1xuICBzdHlsZWRUZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZShzdHlsZWRUZW1wbGF0ZSwgaXMpO1xuICB9XG5cbiAgLy8gTk9URShwbGF0b3NoYSk6IEhhdmUgdG8gdXNlIGFuIGF3a3dhcmQgSUlGRSByZXR1cm5pbmcgY2xhc3MgaGVyZVxuICAvLyB0byBwcmV2ZW50IHRoaXMgY2xhc3MgZnJvbSBzaG93aW5nIHVwIGluIGFuYWx5c2lzLmpzb24gJiBBUEkgZG9jcy5cbiAgLyoqIEBwcml2YXRlICovXG4gIGNvbnN0IGtsYXNzID0gKCgpID0+IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgICByZXR1cm4gaXM7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgICAgIHdpbmRvdy5TaGFkeUNTUy5zdHlsZUVsZW1lbnQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5zaGFkb3dSb290KSB7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKGRvY3VtZW50LmltcG9ydE5vZGUoc3R5bGVkVGVtcGxhdGUuY29udGVudCwgdHJ1ZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoa2xhc3MuaXMsIGtsYXNzKTtcblxuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpcyk7XG59O1xuXG4vKipcbiAqXG4gKiBgPHZhYWRpbi1vdmVybGF5PmAgaXMgYSBXZWIgQ29tcG9uZW50IGZvciBjcmVhdGluZyBvdmVybGF5cy4gVGhlIGNvbnRlbnQgb2YgdGhlIG92ZXJsYXlcbiAqIGNhbiBiZSBwb3B1bGF0ZWQgaW4gdHdvIHdheXM6IGltcGVyYXRpdmVseSBieSB1c2luZyByZW5kZXJlciBjYWxsYmFjayBmdW5jdGlvbiBhbmRcbiAqIGRlY2xhcmF0aXZlbHkgYnkgdXNpbmcgUG9seW1lcidzIFRlbXBsYXRlcy5cbiAqXG4gKiAjIyMgUmVuZGVyaW5nXG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIG92ZXJsYXkgdXNlcyB0aGUgY29udGVudCBwcm92aWRlZCBieSB1c2luZyB0aGUgcmVuZGVyZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKlxuICogVGhlIHJlbmRlcmVyIGZ1bmN0aW9uIHByb3ZpZGVzIGByb290YCwgYG93bmVyYCwgYG1vZGVsYCBhcmd1bWVudHMgd2hlbiBhcHBsaWNhYmxlLlxuICogR2VuZXJhdGUgRE9NIGNvbnRlbnQgYnkgdXNpbmcgYG1vZGVsYCBvYmplY3QgcHJvcGVydGllcyBpZiBuZWVkZWQsIGFwcGVuZCBpdCB0byB0aGUgYHJvb3RgXG4gKiBlbGVtZW50IGFuZCBjb250cm9sIHRoZSBzdGF0ZSBvZiB0aGUgaG9zdCBlbGVtZW50IGJ5IGFjY2Vzc2luZyBgb3duZXJgLiBCZWZvcmUgZ2VuZXJhdGluZyBuZXdcbiAqIGNvbnRlbnQsIHVzZXJzIGFyZSBhYmxlIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgY29udGVudCBpbiBgcm9vdGAgZm9yIHJldXNpbmcgaXQuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1vdmVybGF5IGlkPVwib3ZlcmxheVwiPjwvdmFhZGluLW92ZXJsYXk+XG4gKiBgYGBcbiAqIGBgYGpzXG4gKiBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcbiAqIG92ZXJsYXkucmVuZGVyZXIgPSBmdW5jdGlvbihyb290KSB7XG4gKiAgcm9vdC50ZXh0Q29udGVudCA9IFwiT3ZlcmxheSBjb250ZW50XCI7XG4gKiB9O1xuICogYGBgXG4gKlxuICogUmVuZGVyZXIgaXMgY2FsbGVkIG9uIHRoZSBvcGVuaW5nIG9mIHRoZSBvdmVybGF5IGFuZCBlYWNoIHRpbWUgdGhlIHJlbGF0ZWQgbW9kZWwgaXMgdXBkYXRlZC5cbiAqIERPTSBnZW5lcmF0ZWQgZHVyaW5nIHRoZSByZW5kZXJlciBjYWxsIGNhbiBiZSByZXVzZWRcbiAqIGluIHRoZSBuZXh0IHJlbmRlcmVyIGNhbGwgYW5kIHdpbGwgYmUgcHJvdmlkZWQgd2l0aCB0aGUgYHJvb3RgIGFyZ3VtZW50LlxuICogT24gZmlyc3QgY2FsbCBpdCB3aWxsIGJlIGVtcHR5LlxuICpcbiAqICoqTk9URToqKiB3aGVuIHRoZSByZW5kZXJlciBwcm9wZXJ0eSBpcyBkZWZpbmVkLCB0aGUgYDx0ZW1wbGF0ZT5gIGNvbnRlbnQgaXMgbm90IHVzZWQuXG4gKlxuICogIyMjIFRlbXBsYXRpbmdcbiAqXG4gKiBBbHRlcm5hdGl2ZWx5LCB0aGUgY29udGVudCBjYW4gYmUgcHJvdmlkZWQgd2l0aCBQb2x5bWVyIFRlbXBsYXRlLlxuICogT3ZlcmxheSBmaW5kcyB0aGUgZmlyc3QgY2hpbGQgdGVtcGxhdGUgYW5kIHVzZXMgdGhhdCBpbiBjYXNlIHJlbmRlcmVyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBpcyBub3QgcHJvdmlkZWQuIFlvdSBjYW4gYWxzbyBzZXQgYSBjdXN0b20gdGVtcGxhdGUgdXNpbmcgdGhlIGB0ZW1wbGF0ZWAgcHJvcGVydHkuXG4gKlxuICogQWZ0ZXIgdGhlIGNvbnRlbnQgZnJvbSB0aGUgdGVtcGxhdGUgaXMgc3RhbXBlZCwgdGhlIGBjb250ZW50YCBwcm9wZXJ0eVxuICogcG9pbnRzIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lci5cbiAqXG4gKiBUaGUgb3ZlcmxheSBwcm92aWRlcyBgZm9yd2FyZEhvc3RQcm9wYCB3aGVuIGNhbGxpbmdcbiAqIGBQb2x5bWVyLlRlbXBsYXRpemUudGVtcGxhdGl6ZWAgZm9yIHRoZSB0ZW1wbGF0ZSwgc28gdGhhdCB0aGUgYmluZGluZ3NcbiAqIGZyb20gdGhlIHBhcmVudCBzY29wZSBwcm9wYWdhdGUgdG8gdGhlIGNvbnRlbnQuICBZb3UgY2FuIGFsc28gcGFzc1xuICogY3VzdG9tIGBpbnN0YW5jZVByb3BzYCBvYmplY3QgdXNpbmcgdGhlIGBpbnN0YW5jZVByb3BzYCBwcm9wZXJ0eS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLW92ZXJsYXk+XG4gKiAgIDx0ZW1wbGF0ZT5PdmVybGF5IGNvbnRlbnQ8L3RlbXBsYXRlPlxuICogPC92YWFkaW4tb3ZlcmxheT5cbiAqIGBgYFxuICpcbiAqICoqTk9URToqKiB3aGVuIHVzaW5nIGBpbnN0YW5jZVByb3BzYDogYmVjYXVzZSBvZiB0aGUgUG9seW1lciBsaW1pdGF0aW9uLFxuICogZXZlcnkgdGVtcGxhdGUgY2FuIG9ubHkgYmUgdGVtcGxhdGl6ZWQgb25jZSwgc28gaXQgaXMgaW1wb3J0YW50XG4gKiB0byBzZXQgYGluc3RhbmNlUHJvcHNgIGJlZm9yZSB0aGUgYHRlbXBsYXRlYCBpcyBhc3NpZ25lZCB0byB0aGUgb3ZlcmxheS5cbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRvIHN0eWxlIHRoZSBvdmVybGF5IGNvbnRlbnQsIHVzZSBzdHlsZXMgaW4gdGhlIHBhcmVudCBzY29wZTpcbiAqXG4gKiAtIElmIHRoZSBvdmVybGF5IGlzIHVzZWQgaW4gYSBjb21wb25lbnQsIHRoZW4gdGhlIGNvbXBvbmVudCBzdHlsZXNcbiAqICAgYXBwbHkgdGhlIG92ZXJsYXkgY29udGVudC5cbiAqIC0gSWYgdGhlIG92ZXJsYXkgaXMgdXNlZCBpbiB0aGUgZ2xvYmFsIERPTSBzY29wZSwgdGhlbiBnbG9iYWwgc3R5bGVzXG4gKiAgIGFwcGx5IHRvIHRoZSBvdmVybGF5IGNvbnRlbnQuXG4gKlxuICogU2VlIGV4YW1wbGVzIGZvciBzdHlsaW5nIHRoZSBvdmVybGF5IGNvbnRlbnQgaW4gdGhlIGxpdmUgZGVtb3MuXG4gKlxuICogVGhlIGZvbGxvd2luZyBTaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcgdGhlIG92ZXJsYXkgY29tcG9uZW50IGl0c2VsZjpcbiAqXG4gKiBQYXJ0IG5hbWUgIHwgRGVzY3JpcHRpb25cbiAqIC0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIGBiYWNrZHJvcGAgfCBCYWNrZHJvcCBvZiB0aGUgb3ZlcmxheVxuICogYG92ZXJsYXlgICB8IENvbnRhaW5lciBmb3IgcG9zaXRpb24vc2l6aW5nL2FsaWdubWVudCBvZiB0aGUgY29udGVudFxuICogYGNvbnRlbnRgICB8IENvbnRlbnQgb2YgdGhlIG92ZXJsYXlcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgfCBEZXNjcmlwdGlvbiB8IFBhcnRcbiAqIC0tLXwtLS18LS0tXG4gKiBgb3BlbmluZ2AgfCBBcHBsaWVkIGp1c3QgYWZ0ZXIgdGhlIG92ZXJsYXkgaXMgYXR0YWNoZWQgdG8gdGhlIERPTS4gWW91IGNhbiBhcHBseSBhIENTUyBAa2V5ZnJhbWUgYW5pbWF0aW9uIGZvciB0aGlzIHN0YXRlLiB8IGA6aG9zdGBcbiAqIGBjbG9zaW5nYCB8IEFwcGxpZWQganVzdCBiZWZvcmUgdGhlIG92ZXJsYXkgaXMgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLiBZb3UgY2FuIGFwcGx5IGEgQ1NTIEBrZXlmcmFtZSBhbmltYXRpb24gZm9yIHRoaXMgc3RhdGUuIHwgYDpob3N0YFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogQ3VzdG9tIENTUyBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdCB2YWx1ZVxuICogLS0tfC0tLXwtLS1cbiAqIGAtLXZhYWRpbi1vdmVybGF5LXZpZXdwb3J0LWJvdHRvbWAgfCBCb3R0b20gb2Zmc2V0IG9mIHRoZSB2aXNpYmxlIHZpZXdwb3J0IGFyZWEgfCBgMGAgb3IgZGV0ZWN0ZWQgb2Zmc2V0XG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgT3ZlcmxheUVsZW1lbnQgZXh0ZW5kcyBUaGVtYWJsZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICB6LWluZGV4OiAyMDA7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgICAgICAvKlxuICAgICAgICAgIERlc3BpdGUgb2Ygd2hhdCB0aGUgbmFtZXMgc2F5LCA8dmFhZGluLW92ZXJsYXk+IGlzIGp1c3QgYSBjb250YWluZXJcbiAgICAgICAgICBmb3IgcG9zaXRpb24vc2l6aW5nL2FsaWdubWVudC4gVGhlIGFjdHVhbCBvdmVybGF5IGlzIHRoZSBvdmVybGF5IHBhcnQuXG4gICAgICAgICovXG5cbiAgICAgICAgLypcbiAgICAgICAgICBEZWZhdWx0IHBvc2l0aW9uIGNvbnN0cmFpbnRzOiB0aGUgZW50aXJlIHZpZXdwb3J0LiBOb3RlOiB0aGVtZXMgY2FuXG4gICAgICAgICAgb3ZlcnJpZGUgdGhpcyB0byBpbnRyb2R1Y2UgZ2FwcyBiZXR3ZWVuIHRoZSBvdmVybGF5IGFuZCB0aGUgdmlld3BvcnQuXG4gICAgICAgICovXG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogdmFyKC0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tKTtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICAvKiBVc2UgZmxleGJveCBhbGlnbm1lbnQgZm9yIHRoZSBvdmVybGF5IHBhcnQuICovXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIG1ha2VzIGRyb3Bkb3ducyBzaXppbmcgZWFzaWVyICovXG4gICAgICAgIC8qIEFsaWduIHRvIGNlbnRlciBieSBkZWZhdWx0LiAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAvKiBBbGxvdyBjZW50ZXJpbmcgd2hlbiBtYXgtd2lkdGgvbWF4LWhlaWdodCBhcHBsaWVzLiAqL1xuICAgICAgICBtYXJnaW46IGF1dG87XG5cbiAgICAgICAgLyogVGhlIGhvc3QgaXMgbm90IGNsaWNrYWJsZSwgb25seSB0aGUgb3ZlcmxheSBwYXJ0IGlzLiAqL1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAvKiBSZW1vdmUgdGFwIGhpZ2hsaWdodCBvbiB0b3VjaCBkZXZpY2VzLiAqL1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC8qIENTUyBBUEkgZm9yIGhvc3QgKi9cbiAgICAgICAgLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSxcbiAgICAgIDpob3N0KDpub3QoW29wZW5lZF0pOm5vdChbY2xvc2luZ10pKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG5cbiAgICAgICAgLyogUHJldmVudCBvdmVyZmxvd2luZyB0aGUgaG9zdCBpbiBNU0lFIDExICovXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IGluaXRpYWw7IC8qIHJlZW5hYmxlIHRhcCBoaWdobGlnaHQgaW5zaWRlICovXG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiYmFja2Ryb3BcIl0ge1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJiYWNrZHJvcFwiIHBhcnQ9XCJiYWNrZHJvcFwiIGhpZGRlblxcJD1cInt7IXdpdGhCYWNrZHJvcH19XCI+PC9kaXY+XG4gICAgPGRpdiBwYXJ0PVwib3ZlcmxheVwiIGlkPVwib3ZlcmxheVwiIHRhYmluZGV4PVwiMFwiPlxuICAgICAgPGRpdiBwYXJ0PVwiY29udGVudFwiIGlkPVwiY29udGVudFwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLW92ZXJsYXknO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE93bmVyIGVsZW1lbnQgcGFzc2VkIHdpdGggcmVuZGVyZXIgZnVuY3Rpb25cbiAgICAgICAqL1xuICAgICAgb3duZXI6IEVsZW1lbnQsXG5cbiAgICAgIC8qKlxuICAgICAgICogQ3VzdG9tIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIG92ZXJsYXkuXG4gICAgICAgKiBSZWNlaXZlcyB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgKlxuICAgICAgICogLSBgcm9vdGAgVGhlIHJvb3QgY29udGFpbmVyIERPTSBlbGVtZW50LiBBcHBlbmQgeW91ciBjb250ZW50IHRvIGl0LlxuICAgICAgICogLSBgb3duZXJgIFRoZSBob3N0IGVsZW1lbnQgb2YgdGhlIHJlbmRlcmVyIGZ1bmN0aW9uLlxuICAgICAgICogLSBgbW9kZWxgIFRoZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyByZWxhdGVkIHdpdGggcmVuZGVyaW5nLlxuICAgICAgICovXG4gICAgICByZW5kZXJlcjogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHRlbXBsYXRlIG9mIHRoZSBvdmVybGF5IGNvbnRlbnQuXG4gICAgICAgKi9cbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbmFsIGFyZ3VtZW50IGZvciBgUG9seW1lci5UZW1wbGF0aXplLnRlbXBsYXRpemVgLlxuICAgICAgICovXG4gICAgICBpbnN0YW5jZVByb3BzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBSZWZlcmVuY2VzIHRoZSBjb250ZW50IGNvbnRhaW5lciBhZnRlciB0aGUgdGVtcGxhdGUgaXMgc3RhbXBlZC5cbiAgICAgICAqL1xuICAgICAgY29udGVudDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgd2l0aEJhY2tkcm9wOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCBpcyBwYXNzZWQgdG8gYHJlbmRlcmVyYCBmdW5jdGlvblxuICAgICAgICovXG4gICAgICBtb2RlbDogT2JqZWN0LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gdHJ1ZSB0aGUgb3ZlcmxheSB3b24ndCBkaXNhYmxlIHRoZSBtYWluIGNvbnRlbnQsIHNob3dpbmdcbiAgICAgICAqIGl0IGRvZXNu4oCZdCBjaGFuZ2UgdGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLlxuICAgICAgICovXG4gICAgICBtb2RlbGVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbW9kZWxlc3NDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRydWUgbW92ZSBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIG92ZXJsYXksXG4gICAgICAgKiBvciB0byB0aGUgb3ZlcmxheSBpZiB0aGVyZSBhcmUgbm8gZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgICAgICovXG4gICAgICBmb2N1c1RyYXA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfbW91c2VEb3duSW5zaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9tb3VzZVVwSW5zaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9pbnN0YW5jZToge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIF9vcmlnaW5hbENvbnRlbnRQYXJ0OiBPYmplY3QsXG5cbiAgICAgIF9jb250ZW50Tm9kZXM6IEFycmF5LFxuXG4gICAgICBfb2xkT3duZXI6IEVsZW1lbnQsXG5cbiAgICAgIF9vbGRNb2RlbDogT2JqZWN0LFxuXG4gICAgICBfb2xkVGVtcGxhdGU6IE9iamVjdCxcblxuICAgICAgX29sZEluc3RhbmNlUHJvcHM6IE9iamVjdCxcblxuICAgICAgX29sZFJlbmRlcmVyOiBPYmplY3QsXG5cbiAgICAgIF9vbGRPcGVuZWQ6IEJvb2xlYW5cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfdGVtcGxhdGVPclJlbmRlcmVyQ2hhbmdlZCh0ZW1wbGF0ZSwgcmVuZGVyZXIsIG93bmVyLCBtb2RlbCwgaW5zdGFuY2VQcm9wcywgb3BlbmVkKSdcbiAgICBdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ib3VuZE1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5fbW91c2VEb3duTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE1vdXNlVXBMaXN0ZW5lciA9IHRoaXMuX21vdXNlVXBMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIgPSB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyID0gdGhpcy5fa2V5ZG93bkxpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBGbGF0dGVuZWROb2Rlc09ic2VydmVyKHRoaXMsIGluZm8gPT4ge1xuICAgICAgdGhpcy5fc2V0VGVtcGxhdGVGcm9tTm9kZXMoaW5mby5hZGRlZE5vZGVzKTtcbiAgICB9KTtcblxuICAgIC8vIExpc3RlbmVyIGZvciBwcmV2ZW50aW5nIGNsb3Npbmcgb2YgdGhlIHBhcGVyLWRpYWxvZyBhbmQgYWxsIGNvbXBvbmVudHMgZXh0ZW5kaW5nIGBpcm9uLW92ZXJsYXktYmVoYXZpb3JgLlxuICAgIHRoaXMuX2JvdW5kSXJvbk92ZXJsYXlDYW5jZWxlZExpc3RlbmVyID0gdGhpcy5faXJvbk92ZXJsYXlDYW5jZWxlZC5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyID0gKCkgPT4gdGhpcy5fZGV0ZWN0SW9zTmF2YmFyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuX29ic2VydmVyLmZsdXNoKCk7XG5cbiAgICAvLyBOZWVkIHRvIGFkZCBkdW1teSBjbGljayBsaXN0ZW5lcnMgdG8gdGhpcyBhbmQgdGhlIGJhY2tkcm9wIG9yIGVsc2VcbiAgICAvLyB0aGUgZG9jdW1lbnQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgKF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcikgbWF5IG5ldmVyXG4gICAgLy8gZ2V0IGludm9rZWQgb24gaU9TIFNhZmFyaSAocmVwcm9kdWNpYmxlIGluIDx2YWFkaW4tZGlhbG9nPlxuICAgIC8vIGFuZCA8dmFhZGluLWNvbnRleHQtbWVudT4pLlxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG4gICAgdGhpcy4kLmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICB9XG5cbiAgX2RldGVjdElvc05hdmJhcigpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgbGFuZHNjYXBlID0gaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0O1xuXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGlmIChsYW5kc2NhcGUgJiYgY2xpZW50SGVpZ2h0ID4gaW5uZXJIZWlnaHQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tJywgY2xpZW50SGVpZ2h0IC0gaW5uZXJIZWlnaHQgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b20nLCAnMCcpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRUZW1wbGF0ZUZyb21Ob2Rlcyhub2Rlcykge1xuICAgIHRoaXMudGVtcGxhdGUgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLmxvY2FsTmFtZSAmJiBub2RlLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJylbMF0gfHwgdGhpcy50ZW1wbGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgdmFhZGluLW92ZXJsYXktY2xvc2VcbiAgICogZmlyZWQgYmVmb3JlIHRoZSBgdmFhZGluLW92ZXJsYXlgIHdpbGwgYmUgY2xvc2VkLiBJZiBjYW5jZWxlZCB0aGUgY2xvc2luZyBvZiB0aGUgb3ZlcmxheSBpcyBjYW5jZWxlZCBhcyB3ZWxsLlxuICAgKi9cbiAgY2xvc2Uoc291cmNlRXZlbnQpIHtcbiAgICB2YXIgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS1jbG9zZScsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IHtzb3VyY2VFdmVudDogc291cmNlRXZlbnR9fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgaWYgKCFldnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKHRoaXMuX2JvdW5kSW9zUmVzaXplTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2RldGVjdElvc05hdmJhcigpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2JvdW5kSW9zUmVzaXplTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyKTtcbiAgfVxuXG4gIF9pcm9uT3ZlcmxheUNhbmNlbGVkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIF9tb3VzZURvd25MaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMuX21vdXNlRG93bkluc2lkZSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLm92ZXJsYXkpID49IDA7XG4gIH1cblxuICBfbW91c2VVcExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5fbW91c2VVcEluc2lkZSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLm92ZXJsYXkpID49IDA7XG4gIH1cblxuICAvKipcbiAgICogV2UgbmVlZCB0byBsaXN0ZW4gb24gJ2NsaWNrJyAvICd0YXAnIGV2ZW50IGFuZCBjYXB0dXJlIGl0IGFuZCBjbG9zZSB0aGUgb3ZlcmxheSBiZWZvcmVcbiAgICogcHJvcGFnYXRpbmcgdGhlIGV2ZW50IHRvIHRoZSBsaXN0ZW5lciBpbiB0aGUgYnV0dG9uLiBPdGhlcndpc2UsIGlmIHRoZSBjbGlja2VkIGJ1dHRvbiB3b3VsZCBjYWxsXG4gICAqIG9wZW4oKSwgdGhpcyB3b3VsZCBoYXBwZW46IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Wjg2Vl9JQ1VDRDRcbiAgICpcbiAgICogQGV2ZW50IHZhYWRpbi1vdmVybGF5LW91dHNpZGUtY2xpY2tcbiAgICogZmlyZWQgYmVmb3JlIHRoZSBgdmFhZGluLW92ZXJsYXlgIHdpbGwgYmUgY2xvc2VkIG9uIG91dHNpZGUgY2xpY2suIElmIGNhbmNlbGVkIHRoZSBjbG9zaW5nIG9mIHRoZSBvdmVybGF5IGlzIGNhbmNlbGVkIGFzIHdlbGwuXG4gICAqL1xuICBfb3V0c2lkZUNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLiQub3ZlcmxheSkgIT09IC0xIHx8XG4gICAgICAgIHRoaXMuX21vdXNlRG93bkluc2lkZSB8fCB0aGlzLl9tb3VzZVVwSW5zaWRlKSB7XG4gICAgICB0aGlzLl9tb3VzZURvd25JbnNpZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vdXNlVXBJbnNpZGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9sYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS1vdXRzaWRlLWNsaWNrJywge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDoge3NvdXJjZUV2ZW50OiBldmVudH19KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZ0KTtcblxuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgdmFhZGluLW92ZXJsYXktZXNjYXBlLXByZXNzXG4gICAqIGZpcmVkIGJlZm9yZSB0aGUgYHZhYWRpbi1vdmVybGF5YCB3aWxsIGJlIGNsb3NlZCBvbiBFU0MgYnV0dG9uIHByZXNzLiBJZiBjYW5jZWxlZCB0aGUgY2xvc2luZyBvZiB0aGUgb3ZlcmxheSBpcyBjYW5jZWxlZCBhcyB3ZWxsLlxuICAgKi9cbiAgX2tleWRvd25MaXN0ZW5lcihldmVudCkge1xuICAgIGlmICghdGhpcy5fbGFzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRBQlxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInICYmIHRoaXMuZm9jdXNUcmFwKSB7XG4gICAgICAvLyBpZiBvbmx5IHRhYiBrZXkgaXMgcHJlc3NlZCwgY3ljbGUgZm9yd2FyZCwgZWxzZSBjeWNsZSBiYWNrd2FyZHMuXG4gICAgICB0aGlzLl9jeWNsZVRhYihldmVudC5zaGlmdEtleSA/IC0xIDogMSk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBFU0NcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09PSAnRXNjJykge1xuICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS1lc2NhcGUtcHJlc3MnLCB7YnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiB7c291cmNlRXZlbnQ6IGV2ZW50fX0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Vuc3VyZVRlbXBsYXRpemVkKCkge1xuICAgIHRoaXMuX3NldFRlbXBsYXRlRnJvbU5vZGVzKEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCB2YWFkaW4tb3ZlcmxheS1vcGVuXG4gICAqIGZpcmVkIGFmdGVyIHRoZSBgdmFhZGluLW92ZXJsYXlgIGlzIG9wZW5lZC5cbiAgICovXG4gIF9vcGVuZWRDaGFuZ2VkKG9wZW5lZCwgd2FzT3BlbmVkKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICB9XG5cbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICB0aGlzLl9hbmltYXRlZE9wZW5pbmcoKTtcblxuICAgICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUcmFwICYmICF0aGlzLmNvbnRhaW5zKGRvY3VtZW50Ll9hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fY3ljbGVUYWIoMCwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhYWRpbi1vdmVybGF5LW9wZW4nLCB7YnViYmxlczogdHJ1ZX0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRoaXMubW9kZWxlc3MpIHtcbiAgICAgICAgdGhpcy5fZW50ZXJNb2RhbFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh3YXNPcGVuZWQpIHtcbiAgICAgIHRoaXMuX2FuaW1hdGVkQ2xvc2luZygpO1xuICAgICAgdGhpcy5fZXhpdE1vZGFsU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkQW5pbWF0ZSgpIHtcbiAgICBjb25zdCBuYW1lID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tbmFtZScpO1xuICAgIHJldHVybiBuYW1lICYmIG5hbWUgIT0gJ25vbmUnO1xuICB9XG5cbiAgX2VucXVldWVBbmltYXRpb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBoYW5kbGVyID0gYF9fJHt0eXBlfUhhbmRsZXJgO1xuICAgIGNvbnN0IGxpc3RlbmVyID0gKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgbGlzdGVuZXIpO1xuICAgICAgZGVsZXRlIHRoaXNbaGFuZGxlcl07XG4gICAgfTtcbiAgICB0aGlzW2hhbmRsZXJdID0gbGlzdGVuZXI7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBsaXN0ZW5lcik7XG4gIH1cblxuICBfZmx1c2hBbmltYXRpb24odHlwZSkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBgX18ke3R5cGV9SGFuZGxlcmA7XG4gICAgaWYgKHR5cGVvZiB0aGlzW2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2hhbmRsZXJdKCk7XG4gICAgfVxuICB9XG5cbiAgX2FuaW1hdGVkT3BlbmluZygpIHtcbiAgICBpZiAodGhpcy5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5ICYmIHRoaXMuaGFzQXR0cmlidXRlKCdjbG9zaW5nJykpIHtcbiAgICAgIHRoaXMuX2ZsdXNoQW5pbWF0aW9uKCdjbG9zaW5nJyk7XG4gICAgfVxuICAgIHRoaXMuX2F0dGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3BlbmluZycsICcnKTtcblxuICAgIGNvbnN0IGZpbmlzaE9wZW5pbmcgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbmluZycpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1vdmVybGF5LWNhbmNlbGVkJywgdGhpcy5fYm91bmRJcm9uT3ZlcmxheUNhbmNlbGVkTGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5fc2hvdWxkQW5pbWF0ZSgpKSB7XG4gICAgICB0aGlzLl9lbnF1ZXVlQW5pbWF0aW9uKCdvcGVuaW5nJywgZmluaXNoT3BlbmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmlzaE9wZW5pbmcoKTtcbiAgICB9XG4gIH1cblxuICBfYXR0YWNoT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3ZhYWRpbi1vdmVybGF5LXBsYWNlaG9sZGVyJyk7XG4gICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLl9wbGFjZWhvbGRlciwgdGhpcyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzKTtcbiAgfVxuXG4gIF9hbmltYXRlZENsb3NpbmcoKSB7XG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdvcGVuaW5nJykpIHtcbiAgICAgIHRoaXMuX2ZsdXNoQW5pbWF0aW9uKCdvcGVuaW5nJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Nsb3NpbmcnLCAnJyk7XG5cbiAgICAgIGNvbnN0IGZpbmlzaENsb3NpbmcgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lyb24tb3ZlcmxheS1jYW5jZWxlZCcsIHRoaXMuX2JvdW5kSXJvbk92ZXJsYXlDYW5jZWxlZExpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5fZGV0YWNoT3ZlcmxheSgpO1xuICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnY2xvc2luZycpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMuX3Nob3VsZEFuaW1hdGUoKSkge1xuICAgICAgICB0aGlzLl9lbnF1ZXVlQW5pbWF0aW9uKCdjbG9zaW5nJywgZmluaXNoQ2xvc2luZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaW5pc2hDbG9zaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RldGFjaE92ZXJsYXkoKSB7XG4gICAgLy8gVGhlIGRldGFjaGluZyBvdmVybGF5IGlzIGhhcHBlbmluZyBhZnRlciBjbG9zaW5nIGFuaW1hdGlvbiBpcyBmaW5pc2hlZC5cbiAgICAvLyBJZiBpbiB0aGUgbWVhbnRpbWUgb2YgY2xvc2luZyBhbmltYXRpb24gdXNlciBxdWlja2x5IGNsaWNrZWRcbiAgICAvLyB0aGUgZWxlbWVudCB0byBzaG93IHRoZSBzYW1lIG92ZWxheSwgYG9wZW5lZGAgd2lsbCBiZSB0cnVlXG4gICAgLy8gYW5kIG5vIG5lZWQgdG8gZGV0YWNoIHRoZSBvdmVybGF5XG4gICAgaWYgKHRoaXMub3BlbmVkIHx8ICF0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BsYWNlaG9sZGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMuX3BsYWNlaG9sZGVyKTtcbiAgICB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX3BsYWNlaG9sZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBhdHRhY2hlZCBvdmVybGF5cy5cbiAgICovXG4gIHN0YXRpYyBnZXQgX19hdHRhY2hlZEluc3RhbmNlcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKS5maWx0ZXIoZWwgPT4gZWwgaW5zdGFuY2VvZiBPdmVybGF5RWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyB0cnVlIGlmIHRoaXMgaXMgdGhlIGxhc3Qgb25lIGluIHRoZSBvcGVuZWQgb3ZlcmxheXMgc3RhY2tcbiAgICovXG4gIGdldCBfbGFzdCgpIHtcbiAgICByZXR1cm4gdGhpcyA9PT0gT3ZlcmxheUVsZW1lbnQuX19hdHRhY2hlZEluc3RhbmNlcy5wb3AoKTtcbiAgfVxuXG4gIF9tb2RlbGVzc0NoYW5nZWQobW9kZWxlc3MpIHtcbiAgICBpZiAoIW1vZGVsZXNzKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fZW50ZXJNb2RhbFN0YXRlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4aXRNb2RhbFN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2VudGVyTW9kYWxTdGF0ZSgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9ib3VuZE1vdXNlRG93bkxpc3RlbmVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fYm91bmRNb3VzZVVwTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRPdXRzaWRlQ2xpY2tMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyKTtcblxuICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgIT09ICdub25lJykge1xuICAgICAgLy8gU2V0IGJvZHkgcG9pbnRlci1ldmVudHMgdG8gJ25vbmUnIHRvIGRpc2FibGUgbW91c2UgaW50ZXJhY3Rpb25zIHdpdGhcbiAgICAgIC8vIG90aGVyIGRvY3VtZW50IG5vZGVzLlxuICAgICAgdGhpcy5fcHJldmlvdXNEb2N1bWVudFBvaW50ZXJFdmVudHMgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHM7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBwb2ludGVyIGV2ZW50cyBpbiBvdGhlciBhdHRhY2hlZCBvdmVybGF5c1xuICAgIE92ZXJsYXlFbGVtZW50Ll9fYXR0YWNoZWRJbnN0YW5jZXMuZm9yRWFjaChlbCA9PiB7XG4gICAgICBpZiAoZWwgIT09IHRoaXMpIHtcbiAgICAgICAgZWwuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cIm92ZXJsYXlcIl0nKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX2V4aXRNb2RhbFN0YXRlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2JvdW5kTW91c2VEb3duTGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9ib3VuZE1vdXNlVXBMaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fYm91bmRLZXlkb3duTGlzdGVuZXIpO1xuXG4gICAgaWYgKHRoaXMuX3ByZXZpb3VzRG9jdW1lbnRQb2ludGVyRXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFJlc3RvcmUgYm9keSBwb2ludGVyLWV2ZW50c1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gdGhpcy5fcHJldmlvdXNEb2N1bWVudFBvaW50ZXJFdmVudHM7XG4gICAgICBkZWxldGUgdGhpcy5fcHJldmlvdXNEb2N1bWVudFBvaW50ZXJFdmVudHM7XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSBwb2ludGVyIGV2ZW50cyBpbiB0aGUgcHJldmlvdXMgb3ZlcmxheShzKVxuICAgIGNvbnN0IGluc3RhbmNlcyA9IE92ZXJsYXlFbGVtZW50Ll9fYXR0YWNoZWRJbnN0YW5jZXM7XG4gICAgbGV0IGVsO1xuICAgIC8vIFVzZSBpbnN0YW5jZXMucG9wKCkgdG8gZW5zdXJlIHRoZSByZXZlcnNlIG9yZGVyXG4gICAgd2hpbGUgKGVsID0gaW5zdGFuY2VzLnBvcCgpKSB7XG4gICAgICBpZiAoZWwgPT09IHRoaXMpIHtcbiAgICAgICAgLy8gU2tpcCB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJvdmVybGF5XCJdJykuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJyk7XG4gICAgICBpZiAoIWVsLm1vZGVsZXNzKSB7XG4gICAgICAgIC8vIFN0b3AgYWZ0ZXIgdGhlIGxhc3QgbW9kYWxcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3JlbW92ZU9sZENvbnRlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRlbnQgfHwgIXRoaXMuX2NvbnRlbnROb2Rlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgIHRoaXMuX2NvbnRlbnROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUucGFyZW50Tm9kZSA9PT0gdGhpcy5jb250ZW50KSB7XG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl9vcmlnaW5hbENvbnRlbnRQYXJ0KSB7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCA8ZGl2IHBhcnQ9XCJjb250ZW50XCI+XG4gICAgICB0aGlzLiQuY29udGVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0aGlzLl9vcmlnaW5hbENvbnRlbnRQYXJ0LCB0aGlzLiQuY29udGVudCk7XG4gICAgICB0aGlzLiQuY29udGVudCA9IHRoaXMuX29yaWdpbmFsQ29udGVudFBhcnQ7XG4gICAgICB0aGlzLl9vcmlnaW5hbENvbnRlbnRQYXJ0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuX29ic2VydmVyLmNvbm5lY3QoKTtcblxuICAgIHRoaXMuX2NvbnRlbnROb2RlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRlbnQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBfc3RhbXBPdmVybGF5VGVtcGxhdGUodGVtcGxhdGUsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB0aGlzLl9yZW1vdmVPbGRDb250ZW50KCk7XG5cbiAgICBpZiAoIXRlbXBsYXRlLl9UZW1wbGF0aXplcikge1xuICAgICAgdGVtcGxhdGUuX1RlbXBsYXRpemVyID0gdGVtcGxhdGl6ZSh0ZW1wbGF0ZSwgdGhpcywge1xuICAgICAgICBpbnN0YW5jZVByb3BzOiBpbnN0YW5jZVByb3BzLFxuICAgICAgICBmb3J3YXJkSG9zdFByb3A6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5mb3J3YXJkSG9zdFByb3AocHJvcCwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgdGVtcGxhdGUuX1RlbXBsYXRpemVyKHt9KTtcbiAgICB0aGlzLl9jb250ZW50Tm9kZXMgPSBBcnJheS5mcm9tKHRoaXMuX2luc3RhbmNlLnJvb3QuY2hpbGROb2Rlcyk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZVJvb3QgPSB0ZW1wbGF0ZS5fdGVtcGxhdGVSb290IHx8ICh0ZW1wbGF0ZS5fdGVtcGxhdGVSb290ID0gdGVtcGxhdGUuZ2V0Um9vdE5vZGUoKSk7XG4gICAgY29uc3QgX2lzU2NvcGVkID0gdGVtcGxhdGVSb290ICE9PSBkb2N1bWVudDtcblxuICAgIGlmIChfaXNTY29wZWQpIHtcbiAgICAgIGlmICghdGhpcy4kLmNvbnRlbnQuc2hhZG93Um9vdCkge1xuICAgICAgICB0aGlzLiQuY29udGVudC5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2NvcGVDc3NUZXh0ID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZVJvb3QucXVlcnlTZWxlY3RvckFsbCgnc3R5bGUnKSlcbiAgICAgICAgLnJlZHVjZSgocmVzdWx0LCBzdHlsZSkgPT4gcmVzdWx0ICsgc3R5bGUudGV4dENvbnRlbnQsICcnKTtcblxuICAgICAgaWYgKHdpbmRvdy5TaGFkeUNTUyAmJiAhd2luZG93LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykge1xuICAgICAgICAvLyBOT1RFKHBsYXRvc2hhKTogU2hhZHlDU1MgcmVtb3ZlcyA8c3R5bGU+4oCZcyBmcm9tIHRlbXBsYXRlcywgc29cbiAgICAgICAgLy8gd2UgaGF2ZSB0byB1c2UgdGhlc2UgcHJvdGVjdGVkIEFQSXMgdG8gZ2V0IHRoZWlyIGNvbnRlbnRzIGJhY2tcbiAgICAgICAgY29uc3Qgc3R5bGVJbmZvID0gd2luZG93LlNoYWR5Q1NTLlNjb3BpbmdTaGltXG4gICAgICAgICAgLl9zdHlsZUluZm9Gb3JOb2RlKHRlbXBsYXRlUm9vdC5ob3N0KTtcbiAgICAgICAgaWYgKHN0eWxlSW5mbykge1xuICAgICAgICAgIHNjb3BlQ3NzVGV4dCArPSBzdHlsZUluZm8uX2dldFN0eWxlUnVsZXMoKS5wYXJzZWRDc3NUZXh0O1xuICAgICAgICAgIHNjb3BlQ3NzVGV4dCArPSAnfSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIG92ZXJsYXkgcm9vdOKAmXMgOmhvc3Qgc3R5bGVzIHNob3VsZCBub3QgYXBwbHkgaW5zaWRlIHRoZSBvdmVybGF5XG4gICAgICBzY29wZUNzc1RleHQgPSBzY29wZUNzc1RleHQucmVwbGFjZSgvOmhvc3QvZywgJzpob3N0LW5vbWF0Y2gnKTtcblxuICAgICAgaWYgKHNjb3BlQ3NzVGV4dCkge1xuICAgICAgICBpZiAod2luZG93LlNoYWR5Q1NTICYmICF3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93KSB7XG4gICAgICAgICAgLy8gU2hhZHlET006IHJlcGxhY2UgdGhlIDxkaXYgcGFydD1cImNvbnRlbnRcIj4gd2l0aCBhIGdlbmVyYXRlZFxuICAgICAgICAgIC8vIHN0eWxlZCBjdXN0b20gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGNvbnRlbnRQYXJ0ID0gY3JlYXRlT3ZlcmxheUNvbnRlbnQoc2NvcGVDc3NUZXh0KTtcbiAgICAgICAgICBjb250ZW50UGFydC5pZCA9ICdjb250ZW50JztcbiAgICAgICAgICBjb250ZW50UGFydC5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCAnY29udGVudCcpO1xuICAgICAgICAgIHRoaXMuJC5jb250ZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRlbnRQYXJ0LCB0aGlzLiQuY29udGVudCk7XG4gICAgICAgICAgLy8gTk9URShwbGF0b3NoYSk6IGNhcnJ5IHRoZSBzdHlsZSBzY29wZSBvZiB0aGUgY29udGVudCBwYXJ0XG4gICAgICAgICAgY29udGVudFBhcnQuY2xhc3NOYW1lID0gdGhpcy4kLmNvbnRlbnQuY2xhc3NOYW1lO1xuICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGVudFBhcnQgPSB0aGlzLiQuY29udGVudDtcbiAgICAgICAgICB0aGlzLiQuY29udGVudCA9IGNvbnRlbnRQYXJ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNoYWRvdyBET006IGFwcGVuZCBhIHN0eWxlIHRvIHRoZSBjb250ZW50IHNoYWRvd1Jvb3RcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzY29wZUNzc1RleHQ7XG4gICAgICAgICAgdGhpcy4kLmNvbnRlbnQuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgdGhpcy5fY29udGVudE5vZGVzLnVuc2hpZnQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5jb250ZW50LnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5faW5zdGFuY2Uucm9vdCk7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLiQuY29udGVudC5zaGFkb3dSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2luc3RhbmNlLnJvb3QpO1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlTmV3UmVuZGVyZXJPclRlbXBsYXRlKHRlbXBsYXRlLCBvbGRUZW1wbGF0ZSwgcmVuZGVyZXIsIG9sZFJlbmRlcmVyKSB7XG4gICAgaWYgKHRlbXBsYXRlICE9PSBvbGRUZW1wbGF0ZSkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHJlbmRlcmVyICE9PSBvbGRSZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgaW52b2tlIGV4aXN0aW5nIHJlbmRlcmVyLlxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmNhbGwodGhpcy5vd25lciwgdGhpcy5jb250ZW50LCB0aGlzLm93bmVyLCB0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBfdGVtcGxhdGVPclJlbmRlcmVyQ2hhbmdlZCh0ZW1wbGF0ZSwgcmVuZGVyZXIsIG93bmVyLCBtb2RlbCwgaW5zdGFuY2VQcm9wcywgb3BlbmVkKSB7XG4gICAgaWYgKHRlbXBsYXRlICYmIHJlbmRlcmVyKSB7XG4gICAgICB0aGlzLl9yZW1vdmVOZXdSZW5kZXJlck9yVGVtcGxhdGUodGVtcGxhdGUsIHRoaXMuX29sZFRlbXBsYXRlLCByZW5kZXJlciwgdGhpcy5fb2xkUmVuZGVyZXIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIG9ubHkgdXNlIGVpdGhlciBhIHJlbmRlcmVyIG9yIGEgdGVtcGxhdGUgZm9yIG92ZXJsYXkgY29udGVudCcpO1xuICAgIH1cblxuICAgIGNvbnN0IG93bmVyT3JNb2RlbENoYW5nZWQgPSAodGhpcy5fb2xkT3duZXIgIT09IG93bmVyIHx8IHRoaXMuX29sZE1vZGVsICE9PSBtb2RlbCk7XG4gICAgdGhpcy5fb2xkTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLl9vbGRPd25lciA9IG93bmVyO1xuXG4gICAgY29uc3QgdGVtcGxhdGVPckluc3RhbmNlUHJvcHNDaGFuZ2VkID0gKHRoaXMuX29sZEluc3RhbmNlUHJvcHMgIT09IGluc3RhbmNlUHJvcHMgfHwgdGhpcy5fb2xkVGVtcGxhdGUgIT09IHRlbXBsYXRlKTtcbiAgICB0aGlzLl9vbGRJbnN0YW5jZVByb3BzID0gaW5zdGFuY2VQcm9wcztcbiAgICB0aGlzLl9vbGRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgY29uc3QgcmVuZGVyZXJDaGFuZ2VkID0gdGhpcy5fb2xkUmVuZGVyZXIgIT09IHJlbmRlcmVyO1xuICAgIHRoaXMuX29sZFJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICBjb25zdCBvcGVuZWRDaGFuZ2VkID0gdGhpcy5fb2xkT3BlbmVkICE9PSBvcGVuZWQ7XG4gICAgdGhpcy5fb2xkT3BlbmVkID0gb3BlbmVkO1xuXG4gICAgaWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlT3JJbnN0YW5jZVByb3BzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fc3RhbXBPdmVybGF5VGVtcGxhdGUodGVtcGxhdGUsIGluc3RhbmNlUHJvcHMpO1xuICAgIH0gZWxzZSBpZiAocmVuZGVyZXIgJiYgKHJlbmRlcmVyQ2hhbmdlZCB8fCBvcGVuZWRDaGFuZ2VkIHx8IG93bmVyT3JNb2RlbENoYW5nZWQpKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzO1xuXG4gICAgICBpZiAocmVuZGVyZXJDaGFuZ2VkKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pc0ZvY3VzZWQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQuZ2V0Um9vdE5vZGUoKS5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50O1xuICB9XG5cbiAgX2ZvY3VzZWRJbmRleChlbGVtZW50cykge1xuICAgIGVsZW1lbnRzID0gZWxlbWVudHMgfHwgdGhpcy5fZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICByZXR1cm4gZWxlbWVudHMuaW5kZXhPZihlbGVtZW50cy5maWx0ZXIodGhpcy5faXNGb2N1c2VkKS5wb3AoKSk7XG4gIH1cblxuICBfY3ljbGVUYWIoaW5jcmVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy5fZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcblxuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IHRoaXMuX2ZvY3VzZWRJbmRleChmb2N1c2FibGVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gaW5jcmVtZW50O1xuXG4gICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgIGlmIChpbmRleCA+PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpO1xuICB9XG5cbiAgX2dldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICAgIC8vIGNvbGxlY3QgYWxsIGZvY3VzYWJsZSBlbGVtZW50c1xuICAgIHJldHVybiBGb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcy4kLm92ZXJsYXkpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShPdmVybGF5RWxlbWVudC5pcywgT3ZlcmxheUVsZW1lbnQpO1xuXG5leHBvcnQgeyBPdmVybGF5RWxlbWVudCB9O1xuIiwiaW1wb3J0IHsgRG9tTW9kdWxlIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvZG9tLW1vZHVsZS5qcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BlcnR5TWl4aW4gfSBmcm9tICcuL3ZhYWRpbi10aGVtZS1wcm9wZXJ0eS1taXhpbi5qcyc7XG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgVGhlbWFibGVNaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluVGhlbWFibGVNaXhpbiBleHRlbmRzIFRoZW1lUHJvcGVydHlNaXhpbihzdXBlckNsYXNzKSB7XG5cbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgIHN1cGVyLmZpbmFsaXplKCk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMucHJvdG90eXBlLl90ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGhhc093blRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnRlbXBsYXRlLnBhcmVudEVsZW1lbnQgJiYgdGhpcy50ZW1wbGF0ZS5wYXJlbnRFbGVtZW50LmlkID09PSB0aGlzLmlzO1xuICAgIGNvbnN0IGluaGVyaXRlZFRlbXBsYXRlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMucHJvdG90eXBlKS5fdGVtcGxhdGU7XG4gICAgaWYgKGluaGVyaXRlZFRlbXBsYXRlICYmICFoYXNPd25UZW1wbGF0ZSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgZG9lc24ndCBkZWZpbmUgaXRzIG93biB0ZW1wbGF0ZSAtPiBpbmNsdWRlIHRoZSB0aGVtZSBtb2R1bGVzIGZyb20gdGhlIGluaGVyaXRlZCB0ZW1wbGF0ZVxuICAgICAgQXJyYXkuZnJvbShpbmhlcml0ZWRUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlW2luY2x1ZGVdJykpLmZvckVhY2gocyA9PiB7XG4gICAgICAgIHRoaXMuX2luY2x1ZGVTdHlsZShzLmdldEF0dHJpYnV0ZSgnaW5jbHVkZScpLCB0ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmNsdWRlTWF0Y2hpbmdUaGVtZXModGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgc3RhdGljIF9pbmNsdWRlTWF0Y2hpbmdUaGVtZXModGVtcGxhdGUpIHtcbiAgICBjb25zdCBkb21Nb2R1bGUgPSBEb21Nb2R1bGU7XG4gICAgY29uc3QgbW9kdWxlcyA9IGRvbU1vZHVsZS5wcm90b3R5cGUubW9kdWxlcztcblxuICAgIGxldCBoYXNUaGVtZXMgPSBmYWxzZTtcbiAgICBjb25zdCBkZWZhdWx0TW9kdWxlTmFtZSA9IHRoaXMuaXMgKyAnLWRlZmF1bHQtdGhlbWUnO1xuXG4gICAgT2JqZWN0LmtleXMobW9kdWxlcylcbiAgICAgIC5zb3J0KChtb2R1bGVOYW1lQSwgbW9kdWxlTmFtZUIpID0+IHtcbiAgICAgICAgY29uc3QgdmFhZGluQSA9IG1vZHVsZU5hbWVBLmluZGV4T2YoJ3ZhYWRpbi0nKSA9PT0gMDtcbiAgICAgICAgY29uc3QgdmFhZGluQiA9IG1vZHVsZU5hbWVCLmluZGV4T2YoJ3ZhYWRpbi0nKSA9PT0gMDtcblxuICAgICAgICBjb25zdCB2YWFkaW5UaGVtZVByZWZpeGVzID0gWydsdW1vLScsICdtYXRlcmlhbC0nXTtcbiAgICAgICAgY29uc3QgdmFhZGluVGhlbWVBID0gdmFhZGluVGhlbWVQcmVmaXhlcy5maWx0ZXIocHJlZml4ID0+IG1vZHVsZU5hbWVBLmluZGV4T2YocHJlZml4KSA9PT0gMCkubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgdmFhZGluVGhlbWVCID0gdmFhZGluVGhlbWVQcmVmaXhlcy5maWx0ZXIocHJlZml4ID0+IG1vZHVsZU5hbWVCLmluZGV4T2YocHJlZml4KSA9PT0gMCkubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAodmFhZGluQSAhPT0gdmFhZGluQikge1xuICAgICAgICAgIC8vIEluY2x1ZGUgdmFhZGluIGNvcmUgc3R5bGVzIGZpcnN0XG4gICAgICAgICAgcmV0dXJuIHZhYWRpbkEgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAodmFhZGluVGhlbWVBICE9PSB2YWFkaW5UaGVtZUIpIHtcbiAgICAgICAgICAvLyBJbmNsdWRlIHZhYWRpbiB0aGVtZSBzdHlsZXMgYWZ0ZXIgdGhhdFxuICAgICAgICAgIHJldHVybiB2YWFkaW5UaGVtZUEgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTGFzdGx5IGluY2x1ZGUgY3VzdG9tIHN0eWxlcyBzbyB0aGV5IG92ZXJyaWRlIGFsbCB2YWFkaW4gc3R5bGVzXG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZU5hbWUgIT09IGRlZmF1bHRNb2R1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgdGhlbWVGb3IgPSBtb2R1bGVzW21vZHVsZU5hbWVdLmdldEF0dHJpYnV0ZSgndGhlbWUtZm9yJyk7XG4gICAgICAgICAgaWYgKHRoZW1lRm9yKSB7XG4gICAgICAgICAgICB0aGVtZUZvci5zcGxpdCgnICcpLmZvckVhY2godGhlbWVGb3JUb2tlbiA9PiB7XG4gICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKCdeJyArIHRoZW1lRm9yVG9rZW4uc3BsaXQoJyonKS5qb2luKCcuKicpICsgJyQnKS50ZXN0KHRoaXMuaXMpKSB7XG4gICAgICAgICAgICAgICAgaGFzVGhlbWVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmNsdWRlU3R5bGUobW9kdWxlTmFtZSwgdGVtcGxhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKCFoYXNUaGVtZXMgJiYgbW9kdWxlc1tkZWZhdWx0TW9kdWxlTmFtZV0pIHtcbiAgICAgIC8vIE5vIHRoZW1lIG1vZHVsZXMgZm91bmQsIGluY2x1ZGUgdGhlIGRlZmF1bHQgbW9kdWxlIGlmIGl0IGV4aXN0c1xuICAgICAgdGhpcy5faW5jbHVkZVN0eWxlKGRlZmF1bHRNb2R1bGVOYW1lLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHN0YXRpYyBfaW5jbHVkZVN0eWxlKG1vZHVsZU5hbWUsIHRlbXBsYXRlKSB7XG4gICAgaWYgKHRlbXBsYXRlICYmICF0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2luY2x1ZGU9XCIke21vZHVsZU5hbWV9XCJdYCkpIHtcbiAgICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbC5zZXRBdHRyaWJ1dGUoJ2luY2x1ZGUnLCBtb2R1bGVOYW1lKTtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IFRoZW1lUHJvcGVydHlNaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluVGhlbWVQcm9wZXJ0eU1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBIZWxwZXIgcHJvcGVydHkgd2l0aCB0aGVtZSBhdHRyaWJ1dGUgdmFsdWUgZmFjaWxpdGF0aW5nIHByb3BhZ2F0aW9uXG4gICAgICAgKiBpbiBzaGFkb3cgRE9NLiBBbGxvd3MgdXNpbmcgYHRoZW1lJD1cIltbdGhlbWVdXVwiYCBpbiB0aGUgdGVtcGxhdGUuXG4gICAgICAgKlxuICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICovXG4gICAgICB0aGVtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKiBAcHJvdGVjdGVkICovXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcblxuICAgIGlmIChuYW1lID09PSAndGhlbWUnKSB7XG4gICAgICB0aGlzLl9zZXRUaGVtZShuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFFQTs7Ozs7O0FBTUE7QUFFQTs7Ozs7O0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQXFCQTtBQXRCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUF2Q0E7QUFBQTtBQUFBO0FBQ0E7QUF5Q0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUE5REE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBbEVBO0FBQUE7QUFDQTtBQWdCQTtBQWpCQTtBQW1CQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFxRUE7QUFFQTs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWdNQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7OztBQzdNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQXdEQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFzR0E7QUFFQTtBQUNBO0FBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWdFQTs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBbUJBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUEyQkE7Ozs7Ozs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQXNCQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXVJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVJQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7QUFNQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFIQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEZBOzs7Ozs7O0FBQ0E7QUFDQTtBQTZFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBdkdBO0FBeUdBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBakJBO0FBaUJBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7OztBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUExUEE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBVEE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7OztBQW5kQTtBQUNBO0FBaXRCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcjJCQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXJFQTtBQUFBO0FBQUE7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQWVBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFkQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==