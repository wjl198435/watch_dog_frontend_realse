(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~more-info-dialog~panel-history~panel-logbook"],{

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

/***/ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/src/vaadin-button.js ***!
  \*****************************************************************/
/*! exports provided: ButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\" aria-label$=\"[[_ariaLabel]]\"></button>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\" aria-label\\$=\"[[_ariaLabel]]\"></button>\n"]);

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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <vaadin-button>
 * </vaadin-button>
 * ```
 *
 * ```js
 * document.querySelector('vaadin-button').addEventListener('click', () => alert('Hello World!'));
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

var ButtonElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(ButtonElement, _ElementMixin);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonElement).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ButtonElement.prototype), "ready", this).call(this); // Leaving default role in the native button, makes navigation announcement
      // being different when using focus navigation (tab) versus using normal
      // navigation (arrows). The first way announces the label on a button
      // since the focus is moved programmatically, and the second on a group.


      this.setAttribute('role', 'button');
      this.$.button.setAttribute('role', 'presentation');

      this._addActiveListeners();

      this._updateAriaLabel(this.getAttribute('aria-label'));
    }
    /**
     * @protected
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ButtonElement.prototype), "disconnectedCallback", this).call(this); // `active` state is preserved when the element is disconnected between keydown and keyup events.
      // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.


      if (this.hasAttribute('active')) {
        this.removeAttribute('active');
      }
    }
    /**
     * @protected
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(attr, oldVal, newVal) {
      _get(_getPrototypeOf(ButtonElement.prototype), "attributeChangedCallback", this).call(this, attr, oldVal, newVal);

      if (attr === 'aria-label') {
        this._updateAriaLabel(newVal);
      }
    }
  }, {
    key: "_addActiveListeners",
    value: function _addActiveListeners() {
      var _this = this;

      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'down', function () {
        return !_this.disabled && _this.setAttribute('active', '');
      });
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'up', function () {
        return _this.removeAttribute('active');
      });
      this.addEventListener('keydown', function (e) {
        return !_this.disabled && [13, 32].indexOf(e.keyCode) >= 0 && _this.setAttribute('active', '');
      });
      this.addEventListener('keyup', function () {
        return _this.removeAttribute('active');
      });
      this.addEventListener('blur', function () {
        return _this.removeAttribute('active');
      });
    }
  }, {
    key: "_updateAriaLabel",
    value: function _updateAriaLabel(ariaLabel) {
      this._ariaLabel = ariaLabel !== undefined && ariaLabel !== null ? ariaLabel : this.innerText;
    }
    /**
     * @protected
     */

  }, {
    key: "focusElement",
    get: function get() {
      return this.$.button;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-button';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.1.4';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Set the `aria-label` attribute for assistive technologies like
         * screen readers. An `undefined` value for this property (the
         * default) means that the `aria-label` attribute is not present at
         * all.
         */
        _ariaLabel: {
          type: String
        }
      };
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      return _get(_getPrototypeOf(ButtonElement), "observedAttributes", this).concat(['aria-label']);
    }
  }]);

  return ButtonElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

customElements.define(ButtonElement.is, ButtonElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-button\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host {\n        /* Sizing */\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n        /* Style */\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-contrast-5pct);\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don\u2019t affect the host vertical alignment */\n      [part=\"label\"],\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      [part=\"label\"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"large\"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* For interaction states */\n      :host::before,\n      :host::after {\n        content: \"\";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Types (primary, tertiary, tertiary-inline */\n\n      :host([theme~=\"tertiary\"]),\n      :host([theme~=\"tertiary-inline\"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~=\"tertiary\"])::before,\n      :host([theme~=\"tertiary-inline\"])::before {\n        display: none;\n      }\n\n      :host([theme~=\"tertiary\"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*=\"tertiary\"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~=\"tertiary\"][active]),\n      :host([theme~=\"tertiary-inline\"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) [part=\"label\"] {\n        padding: 0;\n        overflow: visible;\n        line-height: inherit;\n      }\n\n      :host([theme~=\"primary\"]) {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-primary-color-50pct);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      :host([theme~=\"primary\"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~=\"primary\"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~=\"primary\"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~=\"primary\"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~=\"primary\"][active])::after {\n        opacity: 0.2;\n      }\n\n      /* Colors (success, error, contrast) */\n\n      :host([theme~=\"success\"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-success-color-50pct);\n      }\n\n      :host([theme~=\"error\"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([theme~=\"contrast\"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Icons */\n\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"prefix\"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part=\"suffix\"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~=\"icon\"]) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~=\"icon\"]) [part=\"prefix\"],\n      :host([theme~=\"icon\"]) [part=\"suffix\"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-button-styles.js */ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js");
/* harmony import */ var _src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: ControlStateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStateMixin", function() { return ControlStateMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
 * No need to expose these properties in the API docs.
 * @polymerMixin
 */
var TabIndexMixin = function TabIndexMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinTabIndexMixin, _superClass);

      function VaadinTabIndexMixin() {
        _classCallCheck(this, VaadinTabIndexMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinTabIndexMixin).apply(this, arguments));
      }

      _createClass(VaadinTabIndexMixin, null, [{
        key: "properties",
        get: function get() {
          var properties = {
            /**
             * Internal property needed to listen to `tabindex` attribute changes.
             *
             * For changing the tabindex of this component use the native `tabIndex` property.
             * @private
             */
            tabindex: {
              type: Number,
              value: 0,
              reflectToAttribute: true,
              observer: '_tabindexChanged'
            }
          };

          if (window.ShadyDOM) {
            // ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
            properties['tabIndex'] = properties.tabindex;
          }

          return properties;
        }
      }]);

      return VaadinTabIndexMixin;
    }(superClass)
  );
};
/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */


var ControlStateMixin = function ControlStateMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_TabIndexMixin) {
      _inherits(VaadinControlStateMixin, _TabIndexMixin);

      function VaadinControlStateMixin() {
        _classCallCheck(this, VaadinControlStateMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinControlStateMixin).apply(this, arguments));
      }

      _createClass(VaadinControlStateMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          this.addEventListener('focusin', function (e) {
            if (e.composedPath()[0] === _this) {
              _this._focus(e);
            } else if (e.composedPath().indexOf(_this.focusElement) !== -1 && !_this.disabled) {
              _this._setFocused(true);
            }
          });
          this.addEventListener('focusout', function (e) {
            return _this._setFocused(false);
          }); // In super.ready() other 'focusin' and 'focusout' listeners might be
          // added, so we call it after our own ones to ensure they execute first.
          // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
          // input field on iOS after “Done” is pressed.

          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "ready", this).call(this); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
          // where focusout event does not go out of shady DOM because composed property in the event is not true


          var ensureEventComposed = function ensureEventComposed(e) {
            if (!e.composed) {
              e.target.dispatchEvent(new CustomEvent(e.type, {
                bubbles: true,
                composed: true,
                cancelable: false
              }));
            }
          };

          this.shadowRoot.addEventListener('focusin', ensureEventComposed);
          this.shadowRoot.addEventListener('focusout', ensureEventComposed);
          this.addEventListener('keydown', function (e) {
            if (!e.defaultPrevented && e.keyCode === 9) {
              if (e.shiftKey) {
                // Flag is checked in _focus event handler.
                _this._isShiftTabbing = true;
                HTMLElement.prototype.focus.apply(_this);

                _this._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


                setTimeout(function () {
                  return _this._isShiftTabbing = false;
                }, 0);
              } else {
                // Workaround for FF63-65 bug that causes the focus to get lost when
                // blurring a slotted component with focusable shadow root content
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
                // TODO: Remove when safe
                var firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

                if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && _this.parentNode && _this.nextSibling) {
                  var fakeTarget = document.createElement('input');
                  fakeTarget.style.position = 'absolute';
                  fakeTarget.style.opacity = 0;
                  fakeTarget.tabIndex = _this.tabIndex;

                  _this.parentNode.insertBefore(fakeTarget, _this.nextSibling);

                  fakeTarget.focus();
                  fakeTarget.addEventListener('focusout', function () {
                    return _this.parentNode.removeChild(fakeTarget);
                  });
                }
              }
            }
          });

          if (this.autofocus && !this.focused && !this.disabled) {
            window.requestAnimationFrame(function () {
              _this._focus();

              _this._setFocused(true);

              _this.setAttribute('focus-ring', '');
            });
          }

          this._boundKeydownListener = this._bodyKeydownListener.bind(this);
          this._boundKeyupListener = this._bodyKeyupListener.bind(this);
        }
        /**
         * @protected
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "connectedCallback", this).call(this);

          document.body.addEventListener('keydown', this._boundKeydownListener, true);
          document.body.addEventListener('keyup', this._boundKeyupListener, true);
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "disconnectedCallback", this).call(this);

          document.body.removeEventListener('keydown', this._boundKeydownListener, true);
          document.body.removeEventListener('keyup', this._boundKeyupListener, true); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
          // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

          if (this.hasAttribute('focused')) {
            this._setFocused(false);
          }
        }
      }, {
        key: "_setFocused",
        value: function _setFocused(focused) {
          if (focused) {
            this.setAttribute('focused', '');
          } else {
            this.removeAttribute('focused');
          } // focus-ring is true when the element was focused from the keyboard.
          // Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI


          if (focused && this._tabPressed) {
            this.setAttribute('focus-ring', '');
          } else {
            this.removeAttribute('focus-ring');
          }
        }
      }, {
        key: "_bodyKeydownListener",
        value: function _bodyKeydownListener(e) {
          this._tabPressed = e.keyCode === 9;
        }
      }, {
        key: "_bodyKeyupListener",
        value: function _bodyKeyupListener() {
          this._tabPressed = false;
        }
        /**
         * Any element extending this mixin is required to implement this getter.
         * It returns the actual focusable element in the component.
         */

      }, {
        key: "_focus",
        value: function _focus(e) {
          if (this._isShiftTabbing) {
            return;
          }

          this.focusElement.focus();

          this._setFocused(true);
        }
        /**
         * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
         * @private
         */

      }, {
        key: "focus",
        value: function focus() {
          if (!this.focusElement || this.disabled) {
            return;
          }

          this.focusElement.focus();

          this._setFocused(true);
        }
        /**
         * Native bluring in the host element does nothing because it does not have the focus.
         * In chrome it works, but not in FF.
         * @private
         */

      }, {
        key: "blur",
        value: function blur() {
          this.focusElement.blur();

          this._setFocused(false);
        }
      }, {
        key: "_disabledChanged",
        value: function _disabledChanged(disabled) {
          this.focusElement.disabled = disabled;

          if (disabled) {
            this.blur();
            this._previousTabIndex = this.tabindex;
            this.tabindex = -1;
            this.setAttribute('aria-disabled', 'true');
          } else {
            if (typeof this._previousTabIndex !== 'undefined') {
              this.tabindex = this._previousTabIndex;
            }

            this.removeAttribute('aria-disabled');
          }
        }
      }, {
        key: "_tabindexChanged",
        value: function _tabindexChanged(tabindex) {
          if (tabindex !== undefined) {
            this.focusElement.tabIndex = tabindex;
          }

          if (this.disabled && this.tabindex) {
            // If tabindex attribute was changed while checkbox was disabled
            if (this.tabindex !== -1) {
              this._previousTabIndex = this.tabindex;
            }

            this.tabindex = tabindex = undefined;
          }

          if (window.ShadyDOM) {
            this.setProperties({
              tabIndex: tabindex,
              tabindex: tabindex
            });
          }
        }
        /**
         * @protected
         */

      }, {
        key: "click",
        value: function click() {
          if (!this.disabled) {
            _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "click", this).call(this);
          }
        }
      }, {
        key: "focusElement",
        get: function get() {
          window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName, ">"));
          return this;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Specify that this control should have input focus when the page loads.
             */
            autofocus: {
              type: Boolean
            },

            /**
             * Stores the previous value of tabindex attribute of the disabled element
             */
            _previousTabIndex: {
              type: Number
            },

            /**
             * If true, the user cannot interact with this element.
             */
            disabled: {
              type: Boolean,
              observer: '_disabledChanged',
              reflectToAttribute: true
            },
            _isShiftTabbing: {
              type: Boolean
            }
          };
        }
      }]);

      return VaadinControlStateMixin;
    }(TabIndexMixin(superClass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js ***!
  \**********************************************************************************/
/*! exports provided: DatePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerHelper", function() { return DatePickerHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var DatePickerHelper =
/*#__PURE__*/
function () {
  function VaadinDatePickerHelper() {
    _classCallCheck(this, VaadinDatePickerHelper);
  }

  _createClass(VaadinDatePickerHelper, null, [{
    key: "_getISOWeekNumber",

    /**
     * Get ISO 8601 week number for the given date.
     *
     * @param {Date} Date object
     * @return {Number} Week number
     */
    value: function _getISOWeekNumber(date) {
      // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
      var dayOfWeek = date.getDay(); // 0 == sunday
      // ISO 8601 use weeks that start on monday so we use
      // mon=1,tue=2,...sun=7;

      if (dayOfWeek === 0) {
        dayOfWeek = 7;
      } // Find nearest thursday (defines the week in ISO 8601). The week number
      // for the nearest thursday is the same as for the target date.


      var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday

      var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);
      var firstOfJanuary = new Date(0, 0);
      firstOfJanuary.setFullYear(nearestThursday.getFullYear());
      var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime(); // Rounding the result, as the division doesn't result in an integer
      // when the given date is inside daylight saving time period.

      var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));
      return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
    }
    /**
     * Check if two dates are equal.
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} True if the given date objects refer to the same date
     */

  }, {
    key: "_dateEquals",
    value: function _dateEquals(date1, date2) {
      return date1 instanceof Date && date2 instanceof Date && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }
    /**
     * Check if the given date is in the range of allowed dates.
     *
     * @param {Date} date The date to check
     * @param {Date} min Range start
     * @param {Date} max Range end
     * @return {Boolean} True if the date is in the range
     */

  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return (!min || date >= min) && (!max || date <= max);
    }
    /**
     * Get closest date from array of dates.
     *
     * @param {Date} date The date to compare dates with
     * @param {Array} dates Array of date objects
     * @return {Date} Closest date
     */

  }, {
    key: "_getClosestDate",
    value: function _getClosestDate(date, dates) {
      return dates.filter(function (date) {
        return date !== undefined;
      }).reduce(function (closestDate, candidate) {
        if (!candidate) {
          return closestDate;
        }

        if (!closestDate) {
          return candidate;
        }

        var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
        var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
        return candidateDiff < closestDateDiff ? candidate : closestDate;
      });
    }
    /**
     * Extracts the basic component parts of a date (day, month and year)
     * to the expected format.
     */

  }, {
    key: "_extractDateParts",
    value: function _extractDateParts(date) {
      return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    }
  }]);

  return VaadinDatePickerHelper;
}();

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: DatePickerMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerMixin", function() { return DatePickerMixin; });
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * @polymerMixin
 */

var DatePickerMixin = function DatePickerMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_mixinBehaviors) {
      _inherits(VaadinDatePickerMixin, _mixinBehaviors);

      function VaadinDatePickerMixin() {
        _classCallCheck(this, VaadinDatePickerMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinDatePickerMixin).apply(this, arguments));
      }

      _createClass(VaadinDatePickerMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinDatePickerMixin.prototype), "ready", this).call(this);

          this._boundOnScroll = this._onScroll.bind(this);
          this._boundFocus = this._focus.bind(this);
          this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);
          Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__["addListener"])(this, 'tap', this.open);
          this.addEventListener('touchend', this._preventDefault.bind(this));
          this.addEventListener('keydown', this._onKeydown.bind(this));
          this.addEventListener('input', this._onUserInput.bind(this));
          this.addEventListener('focus', function (e) {
            return _this._noInput && e.target.blur();
          });
        }
      }, {
        key: "_initOverlay",
        value: function _initOverlay() {
          var _this2 = this;

          this.$.overlay.removeAttribute('disable-upgrade');
          this._overlayInitialized = true;
          this.$.overlay.addEventListener('opened-changed', function (e) {
            return _this2.opened = e.detail.value;
          });

          this._overlayContent.addEventListener('close', this._close.bind(this));

          this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

          this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

          this._overlayContent.addEventListener('focus', function () {
            return _this2.focusElement._setFocused(true);
          });

          this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinDatePickerMixin.prototype), "disconnectedCallback", this).call(this);

          if (this._overlayInitialized) {
            this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
          }

          this.opened = false;
        }
        /**
         * Opens the dropdown.
         */

      }, {
        key: "open",
        value: function open() {
          if (!this.disabled && !this.readonly) {
            this.opened = true;
          }
        }
      }, {
        key: "_close",
        value: function _close(e) {
          if (e) {
            e.stopPropagation();
          }

          this._focus();

          this.close();
        }
        /**
         * Closes the dropdown.
         */

      }, {
        key: "close",
        value: function close() {
          if (this._overlayInitialized) {
            this.$.overlay.close();
          }
        }
      }, {
        key: "_parseDate",
        value: function _parseDate(str) {
          // Parsing with RegExp to ensure correct format
          var parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);

          if (!parts) {
            return;
          }

          var date = new Date(0, 0); // Wrong date (1900-01-01), but with midnight in local time

          date.setFullYear(parseInt(parts[1], 10));
          date.setMonth(parseInt(parts[2], 10) - 1);
          date.setDate(parseInt(parts[3], 10));
          return date;
        }
      }, {
        key: "_isNoInput",
        value: function _isNoInput(fullscreen, ios, i18n) {
          return !this._inputElement || fullscreen || ios || !i18n.parseDate;
        }
      }, {
        key: "_formatISO",
        value: function _formatISO(date) {
          if (!(date instanceof Date)) {
            return '';
          }

          var pad = function pad(num) {
            var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00';
            return (fmt + num).substr((fmt + num).length - fmt.length);
          };

          var yearSign = '';
          var yearFmt = '0000';
          var yearAbs = date.getFullYear();

          if (yearAbs < 0) {
            yearAbs = -yearAbs;
            yearSign = '-';
            yearFmt = '000000';
          } else if (date.getFullYear() >= 10000) {
            yearSign = '+';
            yearFmt = '000000';
          }

          var year = yearSign + pad(yearAbs, yearFmt);
          var month = pad(date.getMonth() + 1);
          var day = pad(date.getDate());
          return [year, month, day].join('-');
        }
      }, {
        key: "_openedChanged",
        value: function _openedChanged(opened) {
          if (opened && !this._overlayInitialized) {
            this._initOverlay();
          }

          if (this._overlayInitialized) {
            this.$.overlay.opened = opened;
          }

          if (opened) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_selectedDateChanged",
        value: function _selectedDateChanged(selectedDate, formatDate) {
          if (selectedDate === undefined || formatDate === undefined) {
            return;
          }

          if (this.__userInputOccurred) {
            this.__dispatchChange = true;
          }

          var inputValue = selectedDate && formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(selectedDate));

          var value = this._formatISO(selectedDate);

          if (value !== this.value) {
            this.validate(inputValue);
            this.value = value;
          }

          this.__userInputOccurred = false;
          this.__dispatchChange = false;
          this._focusedDate = selectedDate;
          this._inputValue = selectedDate ? inputValue : '';
        }
      }, {
        key: "_focusedDateChanged",
        value: function _focusedDateChanged(focusedDate, formatDate) {
          if (focusedDate === undefined || formatDate === undefined) {
            return;
          }

          this.__userInputOccurred = true;

          if (!this._ignoreFocusedDateChange && !this._noInput) {
            this._inputValue = focusedDate ? formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(focusedDate)) : '';
          }
        }
      }, {
        key: "_updateHasValue",
        value: function _updateHasValue(value) {
          if (value) {
            this.setAttribute('has-value', '');
          } else {
            this.removeAttribute('has-value');
          }
        }
      }, {
        key: "_handleDateChange",
        value: function _handleDateChange(property, value, oldValue) {
          if (!value) {
            this[property] = '';
            return;
          }

          var date = this._parseDate(value);

          if (!date) {
            this.value = oldValue;
            return;
          }

          if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(this[property], date)) {
            this[property] = date;
          }
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(value, oldValue) {
          if (this.__dispatchChange) {
            this.dispatchEvent(new CustomEvent('change', {
              bubbles: true
            }));
          }

          this._handleDateChange('_selectedDate', value, oldValue);
        }
      }, {
        key: "_minChanged",
        value: function _minChanged(value, oldValue) {
          this._handleDateChange('_minDate', value, oldValue);
        }
      }, {
        key: "_maxChanged",
        value: function _maxChanged(value, oldValue) {
          this._handleDateChange('_maxDate', value, oldValue);
        }
      }, {
        key: "_updateAlignmentAndPosition",
        value: function _updateAlignmentAndPosition() {
          if (!this._overlayInitialized) {
            return;
          }

          if (!this._fullscreen) {
            var inputRect = this._inputElement.getBoundingClientRect();

            var bottomAlign = inputRect.top > window.innerHeight / 2;
            var rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

            if (rightAlign) {
              var viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
              this.$.overlay.setAttribute('right-aligned', '');
              this.$.overlay.style.removeProperty('left');
              this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
            } else {
              this.$.overlay.removeAttribute('right-aligned');
              this.$.overlay.style.removeProperty('right');
              this.$.overlay.style.left = inputRect.left + 'px';
            }

            if (bottomAlign) {
              var viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
              this.$.overlay.setAttribute('bottom-aligned', '');
              this.$.overlay.style.removeProperty('top');
              this.$.overlay.style.bottom = viewportHeight - inputRect.top + 'px';
            } else {
              this.$.overlay.removeAttribute('bottom-aligned');
              this.$.overlay.style.removeProperty('bottom');
              this.$.overlay.style.top = inputRect.bottom + 'px';
            }
          }

          this.$.overlay.setAttribute('dir', getComputedStyle(this._inputElement).getPropertyValue('direction'));

          this._overlayContent._repositionYearScroller();
        }
      }, {
        key: "_fullscreenChanged",
        value: function _fullscreenChanged() {
          if (this._overlayInitialized && this.$.overlay.opened) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_onOverlayOpened",
        value: function _onOverlayOpened() {
          this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring');

          var parsedInitialPosition = this._parseDate(this.initialPosition);

          var initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || new Date();

          if (parsedInitialPosition || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(initialPosition, this._minDate, this._maxDate)) {
            this._overlayContent.initialPosition = initialPosition;
          } else {
            this._overlayContent.initialPosition = _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._getClosestDate(initialPosition, [this._minDate, this._maxDate]);
          }

          this._overlayContent.scrollToDate(this._overlayContent.focusedDate || this._overlayContent.initialPosition); // Have a default focused date


          this._ignoreFocusedDateChange = true;
          this._overlayContent.focusedDate = this._overlayContent.focusedDate || this._overlayContent.initialPosition;
          this._ignoreFocusedDateChange = false;
          window.addEventListener('scroll', this._boundOnScroll, true);
          this.addEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

          if (this._webkitOverflowScroll) {
            this._touchPrevented = this._preventWebkitOverflowScrollingTouch(this.parentElement);
          }

          if (this._focusOverlayOnOpen) {
            this._overlayContent.focus();

            this._focusOverlayOnOpen = false;
          } else {
            this._focus();
          }

          if (this._noInput && this.focusElement) {
            this.focusElement.blur();
          }

          this.updateStyles();
          this._ignoreAnnounce = false;
        } // A hack needed for iOS to prevent dropdown from being clipped in an
        // ancestor container with -webkit-overflow-scrolling: touch;

      }, {
        key: "_preventWebkitOverflowScrollingTouch",
        value: function _preventWebkitOverflowScrollingTouch(element) {
          var result = [];

          while (element) {
            if (window.getComputedStyle(element).webkitOverflowScrolling === 'touch') {
              var oldInlineValue = element.style.webkitOverflowScrolling;
              element.style.webkitOverflowScrolling = 'auto';
              result.push({
                element: element,
                oldInlineValue: oldInlineValue
              });
            }

            element = element.parentElement;
          }

          return result;
        }
      }, {
        key: "_onOverlayClosed",
        value: function _onOverlayClosed() {
          this._ignoreAnnounce = true;
          window.removeEventListener('scroll', this._boundOnScroll, true);
          this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

          if (this._touchPrevented) {
            this._touchPrevented.forEach(function (prevented) {
              return prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue;
            });

            this._touchPrevented = [];
          }

          this.updateStyles(); // Select the parsed input or focused date

          this._ignoreFocusedDateChange = true;

          if (this.i18n.parseDate) {
            var inputValue = this._inputValue || '';
            var dateObject = this.i18n.parseDate(inputValue);

            var parsedDate = dateObject && this._parseDate("".concat(dateObject.year, "-").concat(dateObject.month + 1, "-").concat(dateObject.day));

            if (this._isValidDate(parsedDate)) {
              this._selectedDate = parsedDate;
            } else {
              this._selectedDate = null;
              this._inputValue = inputValue;
            }
          } else if (this._focusedDate) {
            this._selectedDate = this._focusedDate;
          }

          this._ignoreFocusedDateChange = false;

          if (this._nativeInput && this._nativeInput.selectionStart) {
            this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
          }

          this.validate();
        }
        /**
         * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
         *
         * @param {string} value Value to validate. Optional, defaults to user's input value.
         * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
         */

      }, {
        key: "validate",
        value: function validate(value) {
          // reset invalid state on the underlying text field
          this.invalid = false;
          value = value !== undefined ? value : this._inputValue;
          return !(this.invalid = !this.checkValidity(value));
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         *
         * Override the `checkValidity` method for custom validations.
         *
         * @param {string} value Value to validate. Optional, defaults to the selected date.
         * @return {boolean} True if the value is valid
         */

      }, {
        key: "checkValidity",
        value: function checkValidity(value) {
          var inputValid = !value || this._selectedDate && value === this.i18n.formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(this._selectedDate));

          var minMaxValid = !this._selectedDate || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(this._selectedDate, this._minDate, this._maxDate);

          var inputValidity = true;

          if (this._inputElement) {
            if (this._inputElement.checkValidity) {
              // vaadin native input elements have the checkValidity method
              inputValidity = this._inputElement.checkValidity(value);
            } else if (this._inputElement.validate) {
              // iron-form-elements have the validate API
              inputValidity = this._inputElement.validate(value);
            }
          }

          return inputValid && minMaxValid && inputValidity;
        }
      }, {
        key: "_onScroll",
        value: function _onScroll(e) {
          if (e.target === window || !this._overlayContent.contains(e.target)) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_focus",
        value: function _focus() {
          if (this._noInput) {
            this._overlayInitialized && this._overlayContent.focus();
          } else {
            this._inputElement.focus();
          }
        }
      }, {
        key: "_focusAndSelect",
        value: function _focusAndSelect() {
          this._focus();

          this._setSelectionRange(0, this._inputValue.length);
        }
      }, {
        key: "_setSelectionRange",
        value: function _setSelectionRange(a, b) {
          if (this._nativeInput && this._nativeInput.setSelectionRange) {
            this._nativeInput.setSelectionRange(a, b);
          }
        }
      }, {
        key: "_preventDefault",
        value: function _preventDefault(e) {
          e.preventDefault();
        }
        /**
         * Keyboard Navigation
         */

      }, {
        key: "_eventKey",
        value: function _eventKey(e) {
          var keys = ['down', 'up', 'enter', 'esc', 'tab'];

          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];

            if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
              return k;
            }
          }
        }
      }, {
        key: "_isValidDate",
        value: function _isValidDate(d) {
          return d && !isNaN(d.getTime());
        }
      }, {
        key: "_onKeydown",
        value: function _onKeydown(e) {
          if (this._noInput) {
            // The input element cannot be readonly as it would conflict with
            // the required attribute. Both are not allowed on an input element.
            // Therefore we prevent default on most keydown events.
            var allowedKeys = [9 // tab
            ];

            if (allowedKeys.indexOf(e.keyCode) === -1) {
              e.preventDefault();
            }
          }

          switch (this._eventKey(e)) {
            case 'down':
            case 'up':
              // prevent scrolling the page with arrows
              e.preventDefault();

              if (this.opened) {
                this._overlayContent.focus();

                this._overlayContent._onKeydown(e);
              } else {
                this._focusOverlayOnOpen = true;
                this.open();
              }

              break;

            case 'enter':
              {
                var dateObject = this.i18n.parseDate(this._inputValue);

                var parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

                if (this._overlayContent.focusedDate && this._isValidDate(parsedDate)) {
                  this._selectedDate = this._overlayContent.focusedDate;
                }

                this.close();
                break;
              }

            case 'esc':
              this._focusedDate = this._selectedDate;

              this._close();

              break;

            case 'tab':
              if (this.opened) {
                e.preventDefault(); // Clear the selection range (remains visible on IE)

                this._setSelectionRange(0, 0);

                if (e.shiftKey) {
                  this._overlayContent.focusCancel();
                } else {
                  this._overlayContent.focus();

                  this._overlayContent.revealDate(this._focusedDate);
                }
              }

              break;
          }
        }
      }, {
        key: "_validateInput",
        value: function _validateInput(date, min, max) {
          if (date && (min || max)) {
            this.invalid = !_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(date, min, max);
          }
        }
      }, {
        key: "_onUserInput",
        value: function _onUserInput(e) {
          if (!this.opened) {
            this.open();
          }

          this._userInputValueChanged();
        }
      }, {
        key: "_userInputValueChanged",
        value: function _userInputValueChanged(value) {
          if (this.opened && this._inputValue) {
            var dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

            var parsedDate = dateObject && this._parseDate("".concat(dateObject.year, "-").concat(dateObject.month + 1, "-").concat(dateObject.day));

            if (this._isValidDate(parsedDate)) {
              this._ignoreFocusedDateChange = true;

              if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(parsedDate, this._focusedDate)) {
                this._focusedDate = parsedDate;
              }

              this._ignoreFocusedDateChange = false;
            }
          }
        }
      }, {
        key: "_announceFocusedDate",
        value: function _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
          if (opened && !_ignoreAnnounce) {
            this._overlayContent.announceFocusedDate();
          }
        }
      }, {
        key: "_inputElement",
        get: function get() {
          return this._input();
        }
      }, {
        key: "_nativeInput",
        get: function get() {
          if (this._inputElement) {
            // vaadin-text-field's input is focusElement
            // iron-input's input is inputElement
            return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
          }
        }
      }, {
        key: "_overlayContent",
        get: function get() {
          return this.$.overlay.content.querySelector('#overlay-content');
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * The current selected date.
             */
            _selectedDate: {
              type: Date
            },
            _focusedDate: Date,

            /**
             * The value for this element.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            value: {
              type: String,
              observer: '_valueChanged',
              notify: true,
              value: ''
            },

            /**
             * Set to true to mark the input as required.
             */
            required: {
              type: Boolean,
              value: false
            },

            /**
             * The name of this element.
             */
            name: {
              type: String
            },

            /**
             * Date which should be visible when there is no value selected.
             *
             * The same date formats as for the `value` property are supported.
             */
            initialPosition: String,

            /**
             * The label for this element.
             */
            label: String,

            /**
             * Set true to open the date selector overlay.
             */
            opened: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              observer: '_openedChanged'
            },

            /**
             * Set true to display ISO-8601 week numbers in the calendar. Notice that
             * displaying week numbers is only supported when `i18n.firstDayOfWeek`
             * is 1 (Monday).
             */
            showWeekNumbers: {
              type: Boolean
            },
            _fullscreen: {
              value: false,
              observer: '_fullscreenChanged'
            },
            _fullscreenMediaQuery: {
              value: '(max-width: 420px), (max-height: 420px)'
            },
            // An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
            // 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
            _touchPrevented: Array,

            /**
             * The object used to localize this component.
             * To change the default localization, replace the entire
             * _i18n_ object or just the property you want to modify.
             *
             * The object has the following JSON structure and default values:
                 {
                  // An array with the full names of months starting
                  // with January.
                  monthNames: [
                    'January', 'February', 'March', 'April', 'May',
                    'June', 'July', 'August', 'September',
                    'October', 'November', 'December'
                  ],
                   // An array of weekday names starting with Sunday. Used
                  // in screen reader announcements.
                  weekdays: [
                    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'
                  ],
                   // An array of short weekday names starting with Sunday.
                  // Displayed in the calendar.
                  weekdaysShort: [
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                  ],
                   // An integer indicating the first day of the week
                  // (0 = Sunday, 1 = Monday, etc.).
                  firstDayOfWeek: 0,
                   // Used in screen reader announcements along with week
                  // numbers, if they are displayed.
                  week: 'Week',
                   // Translation of the Calendar icon button title.
                  calendar: 'Calendar',
                   // Translation of the Clear icon button title.
                  clear: 'Clear',
                   // Translation of the Today shortcut button text.
                  today: 'Today',
                   // Translation of the Cancel button text.
                  cancel: 'Cancel',
                   // A function to format given `Object` as
                  // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
                  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
                  formatDate: d => {
                    // returns a string representation of the given
                    // object in 'MM/DD/YYYY' -format
                  },
                   // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
                  // Must properly parse (at least) text formatted by `formatDate`.
                  // Setting the property to null will disable keyboard input feature.
                  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
                  parseDate: text => {
                    // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
                    // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
                  }
                   // A function to format given `monthName` and
                  // `fullYear` integer as calendar title string.
                  formatTitle: (monthName, fullYear) => {
                    return monthName + ' ' + fullYear;
                  }
                }
              *
             * @default {English/US}
             */
            i18n: {
              type: Object,
              value: function value() {
                return {
                  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                  firstDayOfWeek: 0,
                  week: 'Week',
                  calendar: 'Calendar',
                  clear: 'Clear',
                  today: 'Today',
                  cancel: 'Cancel',
                  formatDate: function formatDate(d) {
                    var yearStr = String(d.year).replace(/\d+/, function (y) {
                      return '0000'.substr(y.length) + y;
                    });
                    return [d.month + 1, d.day, yearStr].join('/');
                  },
                  parseDate: function parseDate(text) {
                    var parts = text.split('/');
                    var today = new Date();
                    var date,
                        month = today.getMonth(),
                        year = today.getFullYear();

                    if (parts.length === 3) {
                      year = parseInt(parts[2]);

                      if (parts[2].length < 3 && year >= 0) {
                        year += year < 50 ? 2000 : 1900;
                      }

                      month = parseInt(parts[0]) - 1;
                      date = parseInt(parts[1]);
                    } else if (parts.length === 2) {
                      month = parseInt(parts[0]) - 1;
                      date = parseInt(parts[1]);
                    } else if (parts.length === 1) {
                      date = parseInt(parts[0]);
                    }

                    if (date !== undefined) {
                      return {
                        day: date,
                        month: month,
                        year: year
                      };
                    }
                  },
                  formatTitle: function formatTitle(monthName, fullYear) {
                    return monthName + ' ' + fullYear;
                  }
                };
              }
            },

            /**
             * The earliest date that can be selected. All earlier dates will be disabled.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            min: {
              type: String,
              observer: '_minChanged'
            },

            /**
             * The latest date that can be selected. All later dates will be disabled.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            max: {
              type: String,
              observer: '_maxChanged'
            },

            /**
             * The earliest date that can be selected. All earlier dates will be disabled.
             */
            _minDate: {
              type: Date,
              // null does not work here because minimizer passes undefined to overlay (#351)
              value: ''
            },

            /**
             * The latest date that can be selected. All later dates will be disabled.
             */
            _maxDate: {
              type: Date,
              value: ''
            },
            _noInput: {
              type: Boolean,
              computed: '_isNoInput(_fullscreen, _ios, i18n, i18n.*)'
            },
            _ios: {
              type: Boolean,
              value: navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)
            },
            _webkitOverflowScroll: {
              type: Boolean,
              value: document.createElement('div').style.webkitOverflowScrolling === ''
            },
            _ignoreAnnounce: {
              value: true
            },
            _focusOverlayOnOpen: Boolean,
            _overlayInitialized: Boolean
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
        }
      }]);

      return VaadinDatePickerMixin;
    }(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], subclass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _vaadin_vaadin_button_src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js");
/* harmony import */ var _vaadin_infinite_scroller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-infinite-scroller.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused$=\"[[_focused]]\" part=\"month\" theme$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current$=\"[[_isCurrentYear(index)]]\" selected$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"], ["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop\\$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear\\$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop\\$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop\\$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused\\$=\"[[_focused]]\" part=\"month\" theme\\$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current\\$=\"[[_isCurrentYear(index)]]\" selected\\$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"]);

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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
















/**
 * @memberof Vaadin
 * @private
 */

var DatePickerOverlayContentElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(DatePickerOverlayContentElement, _ThemableMixin);

  function DatePickerOverlayContentElement() {
    _classCallCheck(this, DatePickerOverlayContentElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerOverlayContentElement).apply(this, arguments));
  }

  _createClass(DatePickerOverlayContentElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(DatePickerOverlayContentElement.prototype), "ready", this).call(this);

      this.setAttribute('tabindex', 0);
      this.addEventListener('keydown', this._onKeydown.bind(this));
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["addListener"])(this, 'tap', this._stopPropagation);
      this.addEventListener('focus', this._onOverlayFocus.bind(this));
      this.addEventListener('blur', this._onOverlayBlur.bind(this));
    }
    /**
     * Fired when the scroller reaches the target scrolling position.
     * @event scroll-animation-finished
     * @param {Number} detail.position new position
     * @param {Number} detail.oldPosition old position
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(DatePickerOverlayContentElement.prototype), "connectedCallback", this).call(this);

      this._closeYearScroller();

      this._toggleAnimateClass(true);

      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["setTouchAction"])(this.$.scrollers, 'pan-y');
      _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability();
    }
  }, {
    key: "announceFocusedDate",
    value: function announceFocusedDate() {
      var focusedDate = this._currentlyFocusedDate();

      var announce = [];

      if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, new Date())) {
        announce.push(this.i18n.today);
      }

      announce = announce.concat([this.i18n.weekdays[focusedDate.getDay()], focusedDate.getDate(), this.i18n.monthNames[focusedDate.getMonth()], focusedDate.getFullYear()]);

      if (this.showWeekNumbers && this.i18n.firstDayOfWeek === 1) {
        announce.push(this.i18n.week);
        announce.push(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getISOWeekNumber(focusedDate));
      }

      this.dispatchEvent(new CustomEvent('iron-announce', {
        bubbles: true,
        composed: true,
        detail: {
          text: announce.join(' ')
        }
      }));
      return;
    }
    /**
     * Focuses the cancel button
     */

  }, {
    key: "focusCancel",
    value: function focusCancel() {
      this.$.cancelButton.focus();
    }
    /**
     * Scrolls the list to the given Date.
     */

  }, {
    key: "scrollToDate",
    value: function scrollToDate(date, animate) {
      this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
    }
  }, {
    key: "_focusedDateChanged",
    value: function _focusedDateChanged(focusedDate) {
      this.revealDate(focusedDate);
    }
  }, {
    key: "_isCurrentYear",
    value: function _isCurrentYear(yearsFromNow) {
      return yearsFromNow === 0;
    }
  }, {
    key: "_isSelectedYear",
    value: function _isSelectedYear(yearsFromNow, selectedDate) {
      if (selectedDate) {
        return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
      }
    }
    /**
     * Scrolls the month and year scrollers enough to reveal the given date.
     */

  }, {
    key: "revealDate",
    value: function revealDate(date) {
      if (date) {
        var diff = this._differenceInMonths(date, this._originDate);

        var scrolledAboveViewport = this.$.monthScroller.position > diff;
        var visibleItems = this.$.monthScroller.clientHeight / this.$.monthScroller.itemHeight;
        var scrolledBelowViewport = this.$.monthScroller.position + visibleItems - 1 < diff;

        if (scrolledAboveViewport) {
          this._scrollToPosition(diff, true);
        } else if (scrolledBelowViewport) {
          this._scrollToPosition(diff - visibleItems + 1, true);
        }
      }
    }
  }, {
    key: "_onOverlayFocus",
    value: function _onOverlayFocus() {
      this._focused = true;
    }
  }, {
    key: "_onOverlayBlur",
    value: function _onOverlayBlur() {
      this._focused = false;
    }
  }, {
    key: "_initialPositionChanged",
    value: function _initialPositionChanged(initialPosition) {
      this.scrollToDate(initialPosition);
    }
  }, {
    key: "_repositionYearScroller",
    value: function _repositionYearScroller() {
      this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
      this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
    }
  }, {
    key: "_repositionMonthScroller",
    value: function _repositionMonthScroller() {
      this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
      this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    }
  }, {
    key: "_onMonthScroll",
    value: function _onMonthScroll() {
      this._repositionYearScroller();

      this._doIgnoreTaps();
    }
  }, {
    key: "_onYearScroll",
    value: function _onYearScroll() {
      this._repositionMonthScroller();

      this._doIgnoreTaps();
    }
  }, {
    key: "_onYearScrollTouchStart",
    value: function _onYearScrollTouchStart() {
      var _this = this;

      this._notTapping = false;
      setTimeout(function () {
        return _this._notTapping = true;
      }, 300);

      this._repositionMonthScroller();
    }
  }, {
    key: "_onMonthScrollTouchStart",
    value: function _onMonthScrollTouchStart() {
      this._repositionYearScroller();
    }
  }, {
    key: "_doIgnoreTaps",
    value: function _doIgnoreTaps() {
      var _this2 = this;

      this._ignoreTaps = true;
      this._debouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__["timeOut"].after(300), function () {
        return _this2._ignoreTaps = false;
      });
    }
  }, {
    key: "_formatDisplayed",
    value: function _formatDisplayed(date, formatDate, label) {
      if (date) {
        return formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._extractDateParts(date));
      } else {
        return label;
      }
    }
  }, {
    key: "_onTodayTap",
    value: function _onTodayTap() {
      var today = new Date();

      if (Math.abs(this.$.monthScroller.position - this._differenceInMonths(today, this._originDate)) < 0.001) {
        // Select today only if the month scroller is positioned approximately
        // at the beginning of the current month
        this.selectedDate = today;

        this._close();
      } else {
        this._scrollToCurrentMonth();
      }
    }
  }, {
    key: "_scrollToCurrentMonth",
    value: function _scrollToCurrentMonth() {
      if (this.focusedDate) {
        this.focusedDate = new Date();
      }

      this.scrollToDate(new Date(), true);
    }
  }, {
    key: "_showClear",
    value: function _showClear(selectedDate) {
      return !!selectedDate;
    }
  }, {
    key: "_onYearTap",
    value: function _onYearTap(e) {
      if (!this._ignoreTaps && !this._notTapping) {
        var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
        var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

        this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
      }
    }
  }, {
    key: "_scrollToPosition",
    value: function _scrollToPosition(targetPosition, animate) {
      var _this3 = this;

      if (this._targetPosition !== undefined) {
        this._targetPosition = targetPosition;
        return;
      }

      if (!animate) {
        this.$.monthScroller.position = targetPosition;
        this._targetPosition = undefined;

        this._repositionYearScroller();

        return;
      }

      this._targetPosition = targetPosition; // http://gizma.com/easing/

      var easingFunction = function easingFunction(t, b, c, d) {
        t /= d / 2;

        if (t < 1) {
          return c / 2 * t * t + b;
        }

        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var duration = animate ? 300 : 0;
      var start = 0;
      var initialPosition = this.$.monthScroller.position;

      var smoothScroll = function smoothScroll(timestamp) {
        start = start || timestamp;
        var currentTime = timestamp - start;

        if (currentTime < duration) {
          var currentPos = easingFunction(currentTime, initialPosition, _this3._targetPosition - initialPosition, duration);
          _this3.$.monthScroller.position = currentPos;
          window.requestAnimationFrame(smoothScroll);
        } else {
          _this3.dispatchEvent(new CustomEvent('scroll-animation-finished', {
            bubbles: true,
            composed: true,
            detail: {
              position: _this3._targetPosition,
              oldPosition: initialPosition
            }
          }));

          _this3.$.monthScroller.position = _this3._targetPosition;
          _this3._targetPosition = undefined;
        }

        setTimeout(_this3._repositionYearScroller.bind(_this3), 1);
      }; // Start the animation.


      window.requestAnimationFrame(smoothScroll);
    }
  }, {
    key: "_limit",
    value: function _limit(value, range) {
      return Math.min(range.max, Math.max(range.min, value));
    }
  }, {
    key: "_handleTrack",
    value: function _handleTrack(e) {
      // Check if horizontal movement threshold (dx) not exceeded or
      // scrolling fast vertically (ddy).
      if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
        return;
      } // If we're flinging quickly -> start animating already.


      if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
        this._toggleAnimateClass(true);
      }

      var newTranslateX = this._translateX + e.detail.ddx;
      this._translateX = this._limit(newTranslateX, {
        min: 0,
        max: this._yearScrollerWidth
      });
    }
  }, {
    key: "_track",
    value: function _track(e) {
      if (this._desktopMode) {
        // No need to track for swipe gestures on desktop.
        return;
      }

      switch (e.detail.state) {
        case 'start':
          this._toggleAnimateClass(false);

          break;

        case 'track':
          this._handleTrack(e);

          break;

        case 'end':
          this._toggleAnimateClass(true);

          if (this._translateX >= this._yearScrollerWidth / 2) {
            this._closeYearScroller();
          } else {
            this._openYearScroller();
          }

          break;
      }
    }
  }, {
    key: "_toggleAnimateClass",
    value: function _toggleAnimateClass(enable) {
      if (enable) {
        this.classList.add('animate');
      } else {
        this.classList.remove('animate');
      }
    }
  }, {
    key: "_toggleYearScroller",
    value: function _toggleYearScroller() {
      this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
    }
  }, {
    key: "_openYearScroller",
    value: function _openYearScroller() {
      this._translateX = 0;
      this.setAttribute('years-visible', '');
    }
  }, {
    key: "_closeYearScroller",
    value: function _closeYearScroller() {
      this.removeAttribute('years-visible');
      this._translateX = this._yearScrollerWidth;
    }
  }, {
    key: "_isYearScrollerVisible",
    value: function _isYearScrollerVisible() {
      return this._translateX < this._yearScrollerWidth / 2;
    }
  }, {
    key: "_translateXChanged",
    value: function _translateXChanged(x) {
      if (!this._desktopMode) {
        this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
        this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
      }
    }
  }, {
    key: "_yearAfterXYears",
    value: function _yearAfterXYears(index) {
      var result = new Date(this._originDate);
      result.setFullYear(parseInt(index) + this._originDate.getFullYear());
      return result.getFullYear();
    }
  }, {
    key: "_yearAfterXMonths",
    value: function _yearAfterXMonths(months) {
      return this._dateAfterXMonths(months).getFullYear();
    }
  }, {
    key: "_dateAfterXMonths",
    value: function _dateAfterXMonths(months) {
      var result = new Date(this._originDate);
      result.setDate(1);
      result.setMonth(parseInt(months) + this._originDate.getMonth());
      return result;
    }
  }, {
    key: "_differenceInMonths",
    value: function _differenceInMonths(date1, date2) {
      var months = (date1.getFullYear() - date2.getFullYear()) * 12;
      return months - date2.getMonth() + date1.getMonth();
    }
  }, {
    key: "_differenceInYears",
    value: function _differenceInYears(date1, date2) {
      return this._differenceInMonths(date1, date2) / 12;
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.selectedDate = '';
    }
  }, {
    key: "_close",
    value: function _close() {
      var overlayContent = this.getRootNode().host;
      var overlay = overlayContent ? overlayContent.getRootNode().host : null;

      if (overlay) {
        overlay.opened = false;
      }

      this.dispatchEvent(new CustomEvent('close', {
        bubbles: true,
        composed: true
      }));
    }
  }, {
    key: "_cancel",
    value: function _cancel() {
      this.focusedDate = this.selectedDate;

      this._close();
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      e.preventDefault();
    }
    /**
     * Keyboard Navigation
     */

  }, {
    key: "_eventKey",
    value: function _eventKey(e) {
      var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];

        if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
          return k;
        }
      }
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(e) {
      var _this4 = this;

      var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
      // previously in the keydown event.


      var isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
      var isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
      var isScroller = !isToday && !isCancel;

      var eventKey = this._eventKey(e);

      if (eventKey === 'tab') {
        // We handle tabs here and don't want to bubble up.
        e.stopPropagation();
        var isFullscreen = this.hasAttribute('fullscreen');
        var isShift = e.shiftKey;

        if (isFullscreen) {
          e.preventDefault();
        } else if (isShift && isScroller || !isShift && isCancel) {
          // Return focus back to the input field
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('focus-input', {
            bubbles: true,
            composed: true
          }));
        } else if (isShift && isToday) {
          // Browser returns focus back to the scrollable area. We need to set
          // the focused flag, and move the scroll to focused date.
          this._focused = true;
          setTimeout(function () {
            return _this4.revealDate(_this4.focusedDate);
          }, 1);
        } else {
          // Browser moves the focus out of the scroller, hence focused flag must
          // set to false.
          this._focused = false;
        }
      } else if (eventKey) {
        e.preventDefault();
        e.stopPropagation();

        switch (eventKey) {
          case 'down':
            this._moveFocusByDays(7);

            this.focus();
            break;

          case 'up':
            this._moveFocusByDays(-7);

            this.focus();
            break;

          case 'right':
            if (isScroller) {
              this._moveFocusByDays(1);
            }

            break;

          case 'left':
            if (isScroller) {
              this._moveFocusByDays(-1);
            }

            break;

          case 'enter':
            if (isScroller || isCancel) {
              this._close();
            } else if (isToday) {
              this._onTodayTap();
            }

            break;

          case 'space':
            if (isCancel) {
              this._close();
            } else if (isToday) {
              this._onTodayTap();
            } else {
              var focusedDate = this.focusedDate;

              if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, this.selectedDate)) {
                this.selectedDate = '';
                this.focusedDate = focusedDate;
              } else {
                this.selectedDate = focusedDate;
              }
            }

            break;

          case 'home':
            this._moveFocusInsideMonth(focus, 'minDate');

            break;

          case 'end':
            this._moveFocusInsideMonth(focus, 'maxDate');

            break;

          case 'pagedown':
            this._moveFocusByMonths(e.shiftKey ? 12 : 1);

            break;

          case 'pageup':
            this._moveFocusByMonths(e.shiftKey ? -12 : -1);

            break;

          case 'esc':
            this._cancel();

            break;
        }
      }
    }
  }, {
    key: "_currentlyFocusedDate",
    value: function _currentlyFocusedDate() {
      return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
    }
  }, {
    key: "_focusDate",
    value: function _focusDate(dateToFocus) {
      this.focusedDate = dateToFocus;
      this._focusedMonthDate = dateToFocus.getDate();
    }
  }, {
    key: "_focusClosestDate",
    value: function _focusClosestDate(focus) {
      this._focusDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getClosestDate(focus, [this.minDate, this.maxDate]));
    }
  }, {
    key: "_moveFocusByDays",
    value: function _moveFocusByDays(days) {
      var focus = this._currentlyFocusedDate();

      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focus.getFullYear());
      dateToFocus.setMonth(focus.getMonth());
      dateToFocus.setDate(focus.getDate() + days);

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this._focusDate(dateToFocus);
      } else {
        if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
          // Move to min or max date
          if (days > 0) {
            // down or right
            this._focusDate(this.maxDate);
          } else {
            // up or left
            this._focusDate(this.minDate);
          }
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focus);
        }
      }
    }
  }, {
    key: "_moveFocusByMonths",
    value: function _moveFocusByMonths(months) {
      var focus = this._currentlyFocusedDate();

      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focus.getFullYear());
      dateToFocus.setMonth(focus.getMonth() + months);
      var targetMonth = dateToFocus.getMonth();
      dateToFocus.setDate(this._focusedMonthDate || (this._focusedMonthDate = focus.getDate()));

      if (dateToFocus.getMonth() !== targetMonth) {
        dateToFocus.setDate(0);
      }

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this.focusedDate = dateToFocus;
      } else {
        if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
          // Move to min or max date
          if (months > 0) {
            // pagedown
            this._focusDate(this.maxDate);
          } else {
            // pageup
            this._focusDate(this.minDate);
          }
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focus);
        }
      }
    }
  }, {
    key: "_moveFocusInsideMonth",
    value: function _moveFocusInsideMonth(focusedDate, property) {
      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focusedDate.getFullYear());

      if (property === 'minDate') {
        dateToFocus.setMonth(focusedDate.getMonth());
        dateToFocus.setDate(1);
      } else {
        dateToFocus.setMonth(focusedDate.getMonth() + 1);
        dateToFocus.setDate(0);
      }

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this._focusDate(dateToFocus);
      } else {
        if (this._dateAllowed(focusedDate, this.minDate, this.maxDate)) {
          // Move to minDate or maxDate
          this._focusDate(this[property]);
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focusedDate);
        }
      }
    }
  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return (!min || date >= min) && (!max || date <= max);
    }
  }, {
    key: "_isTodayAllowed",
    value: function _isTodayAllowed(min, max) {
      var today = new Date();
      var todayMidnight = new Date(0, 0);
      todayMidnight.setFullYear(today.getFullYear());
      todayMidnight.setMonth(today.getMonth());
      todayMidnight.setDate(today.getDate());
      return this._dateAllowed(todayMidnight, min, max);
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-date-picker-overlay-content';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * The value for this element.
         */
        selectedDate: {
          type: Date,
          notify: true
        },

        /**
         * Date value which is focused using keyboard.
         */
        focusedDate: {
          type: Date,
          notify: true,
          observer: '_focusedDateChanged'
        },
        _focusedMonthDate: Number,

        /**
         * Date which should be visible when there is no value selected.
         */
        initialPosition: {
          type: Date,
          observer: '_initialPositionChanged'
        },
        _originDate: {
          value: new Date()
        },
        _visibleMonthIndex: Number,
        _desktopMode: Boolean,
        _translateX: {
          observer: '_translateXChanged'
        },
        _yearScrollerWidth: {
          value: 50
        },
        i18n: {
          type: Object
        },
        showWeekNumbers: {
          type: Boolean
        },
        _ignoreTaps: Boolean,
        _notTapping: Boolean,

        /**
         * The earliest date that can be selected. All earlier dates will be disabled.
         */
        minDate: Date,

        /**
         * The latest date that can be selected. All later dates will be disabled.
         */
        maxDate: Date,
        _focused: Boolean,

        /**
         * Input label
         */
        label: String
      };
    }
  }]);

  return DatePickerOverlayContentElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))));

customElements.define(DatePickerOverlayContentElement.is, DatePickerOverlayContentElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-date-picker-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends Vaadin.OverlayElement
 * @memberof Vaadin
 * @private
 */

var DatePickerOverlayElement =
/*#__PURE__*/
function (_DisableUpgradeMixin) {
  _inherits(DatePickerOverlayElement, _DisableUpgradeMixin);

  function DatePickerOverlayElement() {
    _classCallCheck(this, DatePickerOverlayElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerOverlayElement).apply(this, arguments));
  }

  _createClass(DatePickerOverlayElement, null, [{
    key: "is",
    get: function get() {
      return 'vaadin-date-picker-overlay';
    }
  }]);

  return DatePickerOverlayElement;
}(Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__["OverlayElement"]));

customElements.define(DatePickerOverlayElement.is, DatePickerOverlayElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");

var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"vaadin-date-picker-overlay-styles\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir=\"rtl\"]) {\n        align-items: flex-start;\n      }\n\n      [part=\"overlay\"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~=\"content\"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js ***!
  \***************************************************************************/
/*! exports provided: DatePickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerElement", function() { return DatePickerElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js");
/* harmony import */ var _vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-date-picker-mixin.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part=\"clear-button\"],\n      :host([readonly]) [part=\"clear-button\"],\n      :host(:not([has-value])) [part=\"clear-button\"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" aria-label$=\"[[label]]\" part=\"text-field\" theme$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"clear-button\" slot=\"suffix\" on-touchend=\"_clearTouchend\" on-click=\"_clear\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label$=\"[[i18n.calendar]]\" aria-expanded$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen$=\"[[_fullscreen]]\" theme$=\"[[theme]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme$=\"[[theme]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part=\"clear-button\"],\n      :host([readonly]) [part=\"clear-button\"],\n      :host(:not([has-value])) [part=\"clear-button\"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" aria-label\\$=\"[[label]]\" part=\"text-field\" theme\\$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"clear-button\" slot=\"suffix\" on-touchend=\"_clearTouchend\" on-click=\"_clear\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label\\$=\"[[i18n.calendar]]\" aria-expanded\\$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen\\$=\"[[_fullscreen]]\" theme\\$=\"[[theme]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen\\$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme\\$=\"[[theme]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"]);

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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/














/**
 *
 * `<vaadin-date-picker>` is a date selection field which includes a scrollable
 * month calendar view.
 * ```html
 * <vaadin-date-picker label="Birthday"></vaadin-date-picker>
 * ```
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `text-field` | Input element | vaadin-date-picker
 * `clear-button` | Clear button | vaadin-date-picker
 * `toggle-button` | Toggle button | vaadin-date-picker
 * `overlay-content` | The overlay element | vaadin-date-picker
 * `overlay-header` | Fullscreen mode header | vaadin-date-picker-overlay-content
 * `label` | Fullscreen mode value/label | vaadin-date-picker-overlay-content
 * `clear-button` | Fullscreen mode clear button | vaadin-date-picker-overlay-content
 * `toggle-button` | Fullscreen mode toggle button | vaadin-date-picker-overlay-content
 * `years-toggle-button` | Fullscreen mode years scroller toggle | vaadin-date-picker-overlay-content
 * `months` | Months scroller | vaadin-date-picker-overlay-content
 * `years` | Years scroller | vaadin-date-picker-overlay-content
 * `toolbar` | Footer bar with buttons | vaadin-date-picker-overlay-content
 * `today-button` | Today button | vaadin-date-picker-overlay-content
 * `cancel-button` | Cancel button | vaadin-date-picker-overlay-content
 * `month` | Month calendar | vaadin-date-picker-overlay-content
 * `year-number` | Year number | vaadin-date-picker-overlay-content
 * `year-separator` | Year separator | vaadin-date-picker-overlay-content
 * `month-header` | Month title | vaadin-month-calendar
 * `weekdays` | Weekday container | vaadin-month-calendar
 * `weekday` | Weekday element | vaadin-month-calendar
 * `week-numbers` | Week numbers container | vaadin-month-calendar
 * `week-number` | Week number element | vaadin-month-calendar
 * `date` | Date element | vaadin-month-calendar
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `invalid` | Set when the element is invalid | :host
 * `opened` | Set when the date selector overlay is opened | :host
 * `readonly` | Set when the element is readonly | :host
 * `disabled` | Set when the element is disabled | :host
 * `today` | Set on the date corresponding to the current day | date
 * `focused` | Set on the focused date | date
 * `disabled` | Set on the date out of the allowed range | date
 * `selected` | Set on the selected date | date
 *
 * If you want to replace the default input field with a custom implementation, you should use the
 * [`<vaadin-date-picker-light>`](#vaadin-date-picker-light) element.
 *
 * In addition to `<vaadin-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.DatePickerMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

var DatePickerElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(DatePickerElement, _ElementMixin);

  function DatePickerElement() {
    _classCallCheck(this, DatePickerElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerElement).apply(this, arguments));
  }

  _createClass(DatePickerElement, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(DatePickerElement.prototype), "ready", this).call(this); // In order to have synchronized invalid property, we need to use the same validate logic.


      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__["afterNextRender"])(this, function () {
        return _this._inputElement.validate = function () {};
      });
    }
  }, {
    key: "_onVaadinOverlayClose",
    value: function _onVaadinOverlayClose(e) {
      if (this._openedWithFocusRing && this.hasAttribute('focused')) {
        this.focusElement.setAttribute('focus-ring', '');
      } else if (!this.hasAttribute('focused')) {
        this.focusElement.blur();
      }

      if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
        e.preventDefault();
      }
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.__dispatchChange = true;
      this.value = '';
      this.validate();
      this.focus();
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["prevent"])('tap');
      this.__dispatchChange = false;
    }
  }, {
    key: "_clearTouchend",
    value: function _clearTouchend(e) {
      this._clear();

      e.preventDefault();
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["prevent"])('tap');
    }
  }, {
    key: "_toggle",
    value: function _toggle(e) {
      e.stopPropagation();
      this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
    }
  }, {
    key: "_input",
    value: function _input() {
      return this.$.input;
    }
  }, {
    key: "_getAriaExpanded",
    value: function _getAriaExpanded(opened) {
      return Boolean(opened).toString();
    }
    /**
     * Focussable element used by vaadin-control-state-mixin
     */

  }, {
    key: "_inputValue",
    set: function set(value) {
      this._inputElement.value = value;
    },
    get: function get() {
      return this._inputElement.value;
    }
  }, {
    key: "focusElement",
    get: function get() {
      return this._input() || this;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-date-picker';
    }
  }, {
    key: "version",
    get: function get() {
      return '3.3.3';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Set to true to disable this element.
         */
        disabled: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * The error message to display when the input is invalid.
         */
        errorMessage: String,

        /**
         * A placeholder string in addition to the label. If this is set, the label will always float.
         */
        placeholder: String,

        /**
         * Set to true to make this element read-only.
         */
        readonly: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * This property is set to true when the control value invalid.
         */
        invalid: {
          type: Boolean,
          reflectToAttribute: true,
          notify: true,
          value: false
        },
        _userInputValue: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_userInputValueChanged(_userInputValue)'];
    }
  }]);

  return DatePickerElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DatePickerMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))));

customElements.define(DatePickerElement.is, DatePickerElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        height: 500px;\n      }\n\n      #scroller {\n        position: relative;\n        height: 100%;\n        overflow: auto;\n        outline: none;\n        margin-right: -40px;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: none;\n        overflow-x: hidden;\n      }\n\n      #scroller.notouchscroll {\n        -webkit-overflow-scrolling: auto;\n      }\n\n      #scroller::-webkit-scrollbar {\n        display: none;\n      }\n\n      .buffer {\n        position: absolute;\n        width: var(--vaadin-infinite-scroller-buffer-width, 100%);\n        box-sizing: border-box;\n        padding-right: 40px;\n        top: var(--vaadin-infinite-scroller-buffer-offset, 0);\n        animation: fadein 0.2s;\n      }\n\n      @keyframes fadein {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n    </style>\n\n    <div id=\"scroller\" on-scroll=\"_scroll\">\n      <div class=\"buffer\"></div>\n      <div class=\"buffer\"></div>\n      <div id=\"fullHeight\"></div>\n    </div>\n"]);

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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * @memberof Vaadin
 * @private
 */

var InfiniteScrollerElement =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(InfiniteScrollerElement, _PolymerElement);

  function InfiniteScrollerElement() {
    _classCallCheck(this, InfiniteScrollerElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfiniteScrollerElement).apply(this, arguments));
  }

  _createClass(InfiniteScrollerElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(InfiniteScrollerElement.prototype), "ready", this).call(this);

      this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
      this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
      var tpl = this.querySelector('template');
      this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__["templatize"])(tpl, this, {
        forwardHostProp: function forwardHostProp(prop, value) {
          if (prop !== 'index') {
            this._buffers.forEach(function (buffer) {
              [].forEach.call(buffer.children, function (insertionPoint) {
                insertionPoint._itemWrapper.instance[prop] = value;
              });
            });
          }
        }
      }); // Firefox interprets elements with overflow:auto as focusable
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739

      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      if (isFirefox) {
        this.$.scroller.tabIndex = -1;
      }
    }
  }, {
    key: "_activated",
    value: function _activated(active) {
      if (active && !this._initialized) {
        this._createPool();

        this._initialized = true;
      }
    }
  }, {
    key: "_finishInit",
    value: function _finishInit() {
      var _this = this;

      if (!this._initDone) {
        // Once the first set of items start fading in, stamp the rest
        this._buffers.forEach(function (buffer) {
          [].forEach.call(buffer.children, function (insertionPoint) {
            return _this._ensureStampedInstance(insertionPoint._itemWrapper);
          });
        }, this);

        if (!this._buffers[0].translateY) {
          this._reset();
        }

        this._initDone = true;
      }
    }
  }, {
    key: "_translateBuffer",
    value: function _translateBuffer(up) {
      var index = up ? 1 : 0;
      this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
      this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
      this._buffers[index].updated = false;

      this._buffers.reverse();
    }
  }, {
    key: "_scroll",
    value: function _scroll() {
      var _this2 = this;

      if (this._scrollDisabled) {
        return;
      }

      var scrollTop = this.$.scroller.scrollTop;

      if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
        // Scrolled near the end/beginning of the scrollable area -> reset.
        this._initialIndex = ~~this.position;

        this._reset();
      } // Check if we scrolled enough to translate the buffer positions.


      var bufferOffset = this.root.querySelector('.buffer').offsetTop;
      var upperThresholdReached = scrollTop > this._buffers[1].translateY + this.itemHeight + bufferOffset;
      var lowerThresholdReached = scrollTop < this._buffers[0].translateY + this.itemHeight + bufferOffset;

      if (upperThresholdReached || lowerThresholdReached) {
        this._translateBuffer(lowerThresholdReached);

        this._updateClones();
      }

      if (!this._preventScrollEvent) {
        this.dispatchEvent(new CustomEvent('custom-scroll', {
          bubbles: false,
          composed: true
        }));
        this._mayHaveMomentum = true;
      }

      this._preventScrollEvent = false;
      this._debouncerScrollFinish = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerScrollFinish, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), function () {
        var scrollerRect = _this2.$.scroller.getBoundingClientRect();

        if (!_this2._isVisible(_this2._buffers[0], scrollerRect) && !_this2._isVisible(_this2._buffers[1], scrollerRect)) {
          _this2.position = _this2.position;
        }
      });
    }
    /**
     * Current scroller position as index. Can be a fractional number.
     *
     * @type {Number}
     */

  }, {
    key: "_reset",
    value: function _reset() {
      var _this3 = this;

      this._scrollDisabled = true;
      this.$.scroller.scrollTop = this._initialScroll;
      this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
      this._buffers[1].translateY = this._initialScroll;

      this._buffers.forEach(function (buffer) {
        buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
      });

      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones(true);

      this._debouncerUpdateClones = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateClones, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), function () {
        _this3._buffers[0].updated = _this3._buffers[1].updated = false;

        _this3._updateClones();
      });
      this._scrollDisabled = false;
    }
  }, {
    key: "_createPool",
    value: function _createPool() {
      var _this4 = this;

      var container = this.getBoundingClientRect();

      this._buffers.forEach(function (buffer) {
        var _loop = function _loop() {
          var itemWrapper = document.createElement('div');
          itemWrapper.style.height = _this4.itemHeight + 'px';
          itemWrapper.instance = {};
          var contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
          var slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
          var insertionPoint = document.createElement('slot');
          insertionPoint.setAttribute('name', slotName);
          insertionPoint._itemWrapper = itemWrapper;
          buffer.appendChild(insertionPoint);
          itemWrapper.setAttribute('slot', slotName);

          _this4.appendChild(itemWrapper); // This is needed by IE


          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__["flush"])();
          setTimeout(function () {
            // Only stamp the visible instances first
            if (_this4._isVisible(itemWrapper, container)) {
              _this4._ensureStampedInstance(itemWrapper);
            }
          }, 1); // Wait for first reset
        };

        for (var i = 0; i < _this4.bufferSize; i++) {
          _loop();
        }
      }, this);

      setTimeout(function () {
        Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(_this4, _this4._finishInit.bind(_this4));
      }, 1);
    }
  }, {
    key: "_ensureStampedInstance",
    value: function _ensureStampedInstance(itemWrapper) {
      if (itemWrapper.firstElementChild) {
        return;
      }

      var tmpInstance = itemWrapper.instance;
      itemWrapper.instance = new this._TemplateClass({});
      itemWrapper.appendChild(itemWrapper.instance.root);
      Object.keys(tmpInstance).forEach(function (prop) {
        itemWrapper.instance.set(prop, tmpInstance[prop]);
      });
    }
  }, {
    key: "_updateClones",
    value: function _updateClones(viewPortOnly) {
      var _this5 = this;

      this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
      var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

      this._buffers.forEach(function (buffer, bufferIndex) {
        if (!buffer.updated) {
          var firstIndex = _this5._firstIndex + _this5.bufferSize * bufferIndex;
          [].forEach.call(buffer.children, function (insertionPoint, index) {
            var itemWrapper = insertionPoint._itemWrapper;

            if (!viewPortOnly || _this5._isVisible(itemWrapper, scrollerRect)) {
              itemWrapper.instance.index = firstIndex + index;
            }
          });
          buffer.updated = true;
        }
      }, this);
    }
  }, {
    key: "_isVisible",
    value: function _isVisible(element, container) {
      var rect = element.getBoundingClientRect();
      return rect.bottom > container.top && rect.top < container.bottom;
    }
  }, {
    key: "position",
    set: function set(index) {
      var _this6 = this;

      this._preventScrollEvent = true;

      if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
        this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
      } else {
        this._initialIndex = ~~index;

        this._reset();

        this._scrollDisabled = true;
        this.$.scroller.scrollTop += index % 1 * this.itemHeight;
        this._scrollDisabled = false;
      }

      if (this._mayHaveMomentum) {
        // Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
        this.$.scroller.classList.add('notouchscroll');
        this._mayHaveMomentum = false;
        setTimeout(function () {
          // Restore -webkit-overflow-scrolling: touch; after a small delay.
          _this6.$.scroller.classList.remove('notouchscroll');
        }, 10);
      }
    }
    /**
     * @private
     */
    ,
    get: function get() {
      return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
    }
  }, {
    key: "itemHeight",
    get: function get() {
      if (!this._itemHeightVal) {
        if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
          this.updateStyles();
        }

        var itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

        var tmpStyleProp = 'background-position';
        this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
        var itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
        this.$.fullHeight.style.removeProperty(tmpStyleProp);
        this._itemHeightVal = parseFloat(itemHeightPx);
      }

      return this._itemHeightVal;
    }
  }, {
    key: "_bufferHeight",
    get: function get() {
      return this.itemHeight * this.bufferSize;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-infinite-scroller';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Count of individual items in each buffer.
         * The scroller has 2 buffers altogether so bufferSize of 20
         * will result in 40 buffered DOM items in total.
         * Changing after initialization not supported.
         */
        bufferSize: {
          type: Number,
          value: 20
        },

        /**
         * The amount of initial scroll top. Needed in order for the
         * user to be able to scroll backwards.
         */
        _initialScroll: {
          value: 500000
        },

        /**
         * The index/position mapped at _initialScroll point.
         */
        _initialIndex: {
          value: 0
        },
        _buffers: Array,
        _preventScrollEvent: Boolean,
        _mayHaveMomentum: Boolean,
        _initialized: Boolean,
        active: {
          type: Boolean,
          observer: '_activated'
        }
      };
    }
  }]);

  return InfiniteScrollerElement;
}(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define(InfiniteScrollerElement.is, InfiniteScrollerElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js */ "./node_modules/@polymer/polymer/lib/elements/dom-repeat.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today$=\"[[_isToday(item)]]\" selected$=\"[[_dateEquals(item, selectedDate)]]\" focused$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role$=\"[[_getRole(item)]]\" aria-label$=\"[[_getAriaLabel(item)]]\" aria-disabled$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label\\$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label\\$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today\\$=\"[[_isToday(item)]]\" selected\\$=\"[[_dateEquals(item, selectedDate)]]\" focused\\$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled\\$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role\\$=\"[[_getRole(item)]]\" aria-label\\$=\"[[_getAriaLabel(item)]]\" aria-disabled\\$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @memberof Vaadin
 * @private
 */

var MonthCalendarElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(MonthCalendarElement, _ThemableMixin);

  function MonthCalendarElement() {
    _classCallCheck(this, MonthCalendarElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(MonthCalendarElement).apply(this, arguments));
  }

  _createClass(MonthCalendarElement, [{
    key: "_dateEquals",
    value: function _dateEquals(date1, date2) {
      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateEquals(date1, date2);
    }
  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateAllowed(date, min, max);
    }
    /* Returns true if all the dates in the month are out of the allowed range */

  }, {
    key: "_isDisabled",
    value: function _isDisabled(month, minDate, maxDate) {
      // First day of the month
      var firstDate = new Date(0, 0);
      firstDate.setFullYear(month.getFullYear());
      firstDate.setMonth(month.getMonth());
      firstDate.setDate(1); // Last day of the month

      var lastDate = new Date(0, 0);
      lastDate.setFullYear(month.getFullYear());
      lastDate.setMonth(month.getMonth() + 1);
      lastDate.setDate(-1);

      if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
        return false;
      }

      return !this._dateAllowed(firstDate, minDate, maxDate) && !this._dateAllowed(lastDate, minDate, maxDate);
    }
  }, {
    key: "_getTitle",
    value: function _getTitle(month, monthNames) {
      if (month === undefined || monthNames === undefined) {
        return;
      }

      return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
    }
  }, {
    key: "_onMonthGridTouchStart",
    value: function _onMonthGridTouchStart() {
      var _this = this;

      this._notTapping = false;
      setTimeout(function () {
        return _this._notTapping = true;
      }, 300);
    }
  }, {
    key: "_dateAdd",
    value: function _dateAdd(date, delta) {
      date.setDate(date.getDate() + delta);
    }
  }, {
    key: "_applyFirstDayOfWeek",
    value: function _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
      if (weekDayNames === undefined || firstDayOfWeek === undefined) {
        return;
      }

      return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
    }
  }, {
    key: "_getWeekDayNames",
    value: function _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
      if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
        return;
      }

      weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
      weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
      weekDayNames = weekDayNames.map(function (day, index) {
        return {
          weekDay: day,
          weekDayShort: weekDayNamesShort[index]
        };
      });
      return weekDayNames;
    }
  }, {
    key: "_getDate",
    value: function _getDate(date) {
      return date ? date.getDate() : '';
    }
  }, {
    key: "_showWeekNumbersChanged",
    value: function _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
      if (showWeekNumbers && firstDayOfWeek === 1) {
        this.setAttribute('week-numbers', '');
      } else {
        this.removeAttribute('week-numbers');
      }
    }
  }, {
    key: "_showWeekSeparator",
    value: function _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
      // Currently only supported for locales that start the week on Monday.
      return showWeekNumbers && firstDayOfWeek === 1;
    }
  }, {
    key: "_isToday",
    value: function _isToday(date) {
      return this._dateEquals(new Date(), date);
    }
  }, {
    key: "_getDays",
    value: function _getDays(month, firstDayOfWeek) {
      if (month === undefined || firstDayOfWeek === undefined) {
        return;
      } // First day of the month (at midnight).


      var date = new Date(0, 0);
      date.setFullYear(month.getFullYear());
      date.setMonth(month.getMonth());
      date.setDate(1); // Rewind to first day of the week.

      while (date.getDay() !== firstDayOfWeek) {
        this._dateAdd(date, -1);
      }

      var days = [];
      var startMonth = date.getMonth();
      var targetMonth = month.getMonth();

      while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
        days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null); // Advance to next day.

        this._dateAdd(date, 1);
      }

      return days;
    }
  }, {
    key: "_getWeekNumber",
    value: function _getWeekNumber(date, days) {
      if (date === undefined || days === undefined) {
        return;
      }

      if (!date) {
        // Get the first non-null date from the days array.
        date = days.reduce(function (acc, d) {
          return !acc && d ? d : acc;
        });
      }

      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._getISOWeekNumber(date);
    }
  }, {
    key: "_getWeekNumbers",
    value: function _getWeekNumbers(dates) {
      var _this2 = this;

      return dates.map(function (date) {
        return _this2._getWeekNumber(date, dates);
      }).filter(function (week, index, arr) {
        return arr.indexOf(week) === index;
      });
    }
  }, {
    key: "_handleTap",
    value: function _handleTap(e) {
      if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
        this.selectedDate = e.target.date;
        this.dispatchEvent(new CustomEvent('date-tap', {
          bubbles: true,
          composed: true
        }));
      }
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "_getRole",
    value: function _getRole(date) {
      return date ? 'button' : 'presentation';
    }
  }, {
    key: "_getAriaLabel",
    value: function _getAriaLabel(date) {
      if (!date) {
        return '';
      }

      var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

      if (this._isToday(date)) {
        ariaLabel += ', ' + this.i18n.today;
      }

      return ariaLabel;
    }
  }, {
    key: "_getAriaDisabled",
    value: function _getAriaDisabled(date, min, max) {
      if (date === undefined || min === undefined || max === undefined) {
        return;
      }

      return this._dateAllowed(date, min, max) ? 'false' : 'true';
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-month-calendar';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * A `Date` object defining the month to be displayed. Only year and
         * month properties are actually used.
         */
        month: {
          type: Date,
          value: new Date()
        },

        /**
         * A `Date` object for the currently selected date.
         */
        selectedDate: {
          type: Date,
          notify: true
        },

        /**
         * A `Date` object for the currently focused date.
         */
        focusedDate: Date,
        showWeekNumbers: {
          type: Boolean,
          value: false
        },
        i18n: {
          type: Object
        },

        /**
         * Flag stating whether taps on the component should be ignored.
         */
        ignoreTaps: Boolean,
        _notTapping: Boolean,

        /**
         * The earliest date that can be selected. All earlier dates will be disabled.
         */
        minDate: {
          type: Date,
          value: null
        },

        /**
         * The latest date that can be selected. All later dates will be disabled.
         */
        maxDate: {
          type: Date,
          value: null
        },
        _days: {
          type: Array,
          computed: '_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)'
        },
        disabled: {
          type: Boolean,
          reflectToAttribute: true,
          computed: '_isDisabled(month, minDate, maxDate)'
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
    }
  }]);

  return MonthCalendarElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(MonthCalendarElement.is, MonthCalendarElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_button_theme_lumo_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/theme/lumo/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part=\"years\"]:hover [part=\"year-number\"],\n      [part=\"years\"]:hover [part=\"year-separator\"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part=\"months\"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part=\"years\"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part=\"years\"] [part=\"year-separator\"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: \"\u2022\";\n      }\n\n      /* Current year */\n\n      [part=\"years\"] [part=\"year-number\"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part=\"toolbar\"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part=\"toolbar\"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the \"tertiary\" theme from here instead of copying those styles */\n      [part=\"toolbar\"] [part$=\"button\"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part=\"toolbar\"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part=\"overlay-header\"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part=\"toggle-button\"],\n      :host([fullscreen]) [part=\"clear-button\"],\n      [part=\"overlay-header\"] [part=\"label\"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part=\"years-toggle-button\"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part=\"years\"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part=\"toolbar\"],\n        [part=\"months\"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part=\"years\"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part=\"months\"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"], ["<dom-module id=\"lumo-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part=\"years\"]:hover [part=\"year-number\"],\n      [part=\"years\"]:hover [part=\"year-separator\"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part=\"months\"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part=\"years\"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part=\"years\"] [part=\"year-separator\"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: \"\u2022\";\n      }\n\n      /* Current year */\n\n      [part=\"years\"] [part=\"year-number\"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part=\"toolbar\"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part=\"toolbar\"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the \"tertiary\" theme from here instead of copying those styles */\n      [part=\"toolbar\"] [part\\$=\"button\"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part=\"toolbar\"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part=\"overlay-header\"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part=\"toggle-button\"],\n      :host([fullscreen]) [part=\"clear-button\"],\n      [part=\"overlay-header\"] [part=\"label\"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part=\"years-toggle-button\"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part=\"years\"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part=\"toolbar\"],\n        [part=\"months\"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part=\"years\"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part=\"months\"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker-overlay\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style include=\"lumo-menu-overlay\">\n      [part=\"overlay\"] {\n        /*\n        Width:\n            date cell widths\n          + month calendar side padding\n          + year scroller width\n        */\n        width:\n          calc(\n              var(--lumo-size-m) * 7\n            + var(--lumo-space-xs) * 2\n            + 57px\n          );\n        height: 100%;\n        max-height: calc(var(--lumo-size-m) * 14);\n        overflow: hidden;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part=\"content\"] {\n        padding: 0;\n        height: 100%;\n        overflow: hidden;\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part=\"overlay\"] {\n          width: 100vw;\n          height: 70vh;\n          max-height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js");
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker\" theme-for=\"vaadin-date-picker\">\n  <template>\n    <style include=\"lumo-field-button\">\n      :host {\n        outline: none;\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: var(--lumo-icons-calendar);\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js");
/* harmony import */ var _vaadin_month_calendar_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-month-calendar-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js");
/* harmony import */ var _src_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/vaadin-date-picker.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js");






/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-month-calendar\" theme-for=\"vaadin-month-calendar\">\n  <template>\n    <style>\n      :host {\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        font-size: var(--lumo-font-size-m);\n        color: var(--lumo-body-text-color);\n        text-align: center;\n        padding: 0 var(--lumo-space-xs);\n      }\n\n      /* Month header */\n\n      [part=\"month-header\"] {\n        color: var(--lumo-header-text-color);\n        font-size: var(--lumo-font-size-l);\n        line-height: 1;\n        font-weight: 500;\n        margin-bottom: var(--lumo-space-m);\n      }\n\n      /* Week days and numbers */\n\n      [part=\"weekdays\"],\n      [part=\"weekday\"],\n      [part=\"week-numbers\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: 1;\n        color: var(--lumo-tertiary-text-color);\n      }\n\n      [part=\"weekdays\"] {\n        margin-bottom: var(--lumo-space-s);\n      }\n\n      /* TODO should have part=\"week-number\" for the cell in weekdays-container */\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: var(--lumo-size-xs);\n      }\n\n      /* Date and week number cells */\n\n      [part=\"date\"],\n      [part=\"week-number\"] {\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--lumo-size-m);\n        position: relative;\n      }\n\n      [part=\"date\"] {\n        transition: color 0.1s;\n      }\n\n      /* Today date */\n\n      [part=\"date\"][today] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Focused date */\n\n      [part=\"date\"]::before {\n        content: \"\";\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        min-width: 2em;\n        min-height: 2em;\n        width: 80%;\n        height: 80%;\n        max-height: 100%;\n        max-width: 100%;\n        border-radius: var(--lumo-border-radius);\n      }\n\n      [part=\"date\"][focused]::before {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      :host(:not([focused])) [part=\"date\"][focused]::before {\n        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;\n      }\n\n      @keyframes vaadin-date-picker-month-calendar-focus-date {\n        50% {\n          box-shadow: 0 0 0 2px transparent;\n        }\n      }\n\n      /* TODO should not rely on the role attribute */\n      [part=\"date\"][role=\"button\"]:not([disabled]):not([selected]):hover::before {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      [part=\"date\"][selected] {\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"date\"][selected]::before {\n        background-color: var(--lumo-primary-color);\n      }\n\n      [part=\"date\"][disabled] {\n        color: var(--lumo-disabled-text-color);\n      }\n\n      @media (pointer: coarse) {\n        [part=\"date\"]:hover:not([selected])::before,\n        [part=\"date\"][focused]:not([selected])::before {\n          display: none;\n        }\n\n        [part=\"date\"][role=\"button\"]:not([disabled]):active::before {\n          display: block;\n        }\n\n        [part=\"date\"][selected]::before {\n          box-shadow: none;\n        }\n      }\n\n      /* Disabled */\n\n      :host([disabled]) * {\n        color: var(--lumo-disabled-text-color) !important;\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n</custom-style>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-date-picker.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js");


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js ***!
  \***************************************************************************************************/
/*! exports provided: runIfDevelopmentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runIfDevelopmentMode", function() { return runIfDevelopmentMode; });
var DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }

  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    return isForcedDevelopmentMode() || isLocalhost() && !isMinified() && !isFlowProductionMode();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}

function isFlowProductionMode() {
  if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
    var productionModeApps = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
      return window.Vaadin.Flow.clients[key];
    }).filter(function (client) {
      return client.productionMode;
    });

    if (productionModeApps.length > 0) {
      return true;
    }
  }

  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  var match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
  }

  return callback(args);
} // A guard against polymer-modulizer removing the window.Vaadin
// initialization above.


window['Vaadin'] = window['Vaadin'] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */

var runIfDevelopmentMode = function runIfDevelopmentMode(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js ***!
  \***************************************************************************/
/*! exports provided: ElementMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMixin", function() { return ElementMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");
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






if (!window.Vaadin) {
  window['Vaadin'] = {};
}
/**
 * Array of Vaadin custom element classes that have been finalized.
 */


window['Vaadin'].registrations = window.Vaadin.registrations || []; // Use the hack to prevent polymer-modulizer from converting to exports

window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};

window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function () {
  if (_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"]) {
    Object(_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"])();
  }
};

var statsJob;
/**
 * @polymerMixin
 */

var ElementMixin = function ElementMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinElementMixin, _superClass);

      function VaadinElementMixin() {
        _classCallCheck(this, VaadinElementMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinElementMixin).apply(this, arguments));
      }

      _createClass(VaadinElementMixin, [{
        key: "ready",
        value: function ready() {
          _get(_getPrototypeOf(VaadinElementMixin.prototype), "ready", this).call(this);

          if (document.doctype === null) {
            console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
          }
        }
      }], [{
        key: "_finalizeClass",

        /** @protected */
        value: function _finalizeClass() {
          _get(_getPrototypeOf(VaadinElementMixin), "_finalizeClass", this).call(this); // Registers a class prototype for telemetry purposes.


          if (this.is) {
            window.Vaadin.registrations.push(this);

            if (window.Vaadin.developmentModeCallback) {
              statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], function () {
                window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
              });
              Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
            }
          }
        }
      }]);

      return VaadinElementMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-field-button\">\n  <template>\n    <style>\n      [part$=\"button\"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$=\"button\"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$=\"button\"],\n      :host([readonly]) [part$=\"button\"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$=\"button\"]::before {\n        font-family: \"lumo-icons\";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-required-field\">\n  <template>\n    <style>\n      [part=\"label\"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part=\"label\"] {\n        padding-right: 1em;\n      }\n\n      [part=\"label\"]::after {\n        content: var(--lumo-required-field-indicator, \"\u2022\");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part=\"label\"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part=\"label\"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part=\"error-message\"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn\u2019t reserve space when there\u2019s no error message */\n      [part=\"error-message\"]:not(:empty)::before,\n      [part=\"error-message\"]:not(:empty)::after {\n        content: \"\";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part=\"error-message\"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: TextFieldMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function() { return TextFieldMixin; });
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
var HOST_PROPS = {
  "default": ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
var PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

var TextFieldMixin = function TextFieldMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_ControlStateMixin) {
      _inherits(VaadinTextFieldMixin, _ControlStateMixin);

      function VaadinTextFieldMixin() {
        _classCallCheck(this, VaadinTextFieldMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinTextFieldMixin).apply(this, arguments));
      }

      _createClass(VaadinTextFieldMixin, [{
        key: "_onInput",
        value: function _onInput(e) {
          var _this = this;

          if (this.__preventInput) {
            e.stopImmediatePropagation();
            this.__preventInput = false;
            return;
          }

          if (this.preventInvalidInput) {
            var input = this.inputElement;

            if (input.value.length > 0 && !this.checkValidity()) {
              input.value = this.value || ''; // add input-prevented attribute for 200ms

              this.setAttribute('input-prevented', '');
              this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(200), function () {
                _this.removeAttribute('input-prevented');
              });
              return;
            }
          }

          this.__userInput = true;
          this.value = e.target.value;
        } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
        // of the clear button instead of setting display property for it depending on state.

      }, {
        key: "_stateChanged",
        value: function _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
          if (!disabled && !readonly && clearButtonVisible && hasValue) {
            this.$.clearButton.removeAttribute('hidden');
          } else {
            this.$.clearButton.setAttribute('hidden', true);
          }
        }
      }, {
        key: "_onChange",
        value: function _onChange(e) {
          if (this._valueClearing) {
            return;
          } // In the Shadow DOM, the `change` event is not leaked into the
          // ancestor tree, so we must do this manually.


          var changeEvent = new CustomEvent('change', {
            detail: {
              sourceEvent: e
            },
            bubbles: e.bubbles,
            cancelable: e.cancelable
          });
          this.dispatchEvent(changeEvent);
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(newVal, oldVal) {
          // setting initial value to empty string, skip validation
          if (newVal === '' && oldVal === undefined) {
            return;
          }

          if (newVal !== '' && newVal != null) {
            this.hasValue = true;
          } else {
            this.hasValue = false;
          }

          if (this.__userInput) {
            this.__userInput = false;
            return;
          } else if (newVal !== undefined) {
            this.inputElement.value = newVal;
          } else {
            this.value = this.inputElement.value = '';
          }

          if (this.invalid) {
            this.validate();
          }
        }
      }, {
        key: "_labelChanged",
        value: function _labelChanged(label) {
          if (label !== '' && label != null) {
            this.setAttribute('has-label', '');
          } else {
            this.removeAttribute('has-label');
          }
        }
      }, {
        key: "_onSlotChange",
        value: function _onSlotChange() {
          var _this2 = this;

          var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          if (this.value) {
            this.inputElement.value = this.value;
            this.validate();
          }

          if (slotted && !this._slottedInput) {
            this._validateSlottedValue(slotted);

            this._addInputListeners(slotted);

            this._addIEListeners(slotted);

            this._slottedInput = slotted;
          } else if (!slotted && this._slottedInput) {
            this._removeInputListeners(this._slottedInput);

            this._removeIEListeners(this._slottedInput);

            this._slottedInput = undefined;
          }

          Object.keys(PROP_TYPE).map(function (key) {
            return PROP_TYPE[key];
          }).forEach(function (type) {
            return _this2._propagateHostAttributes(HOST_PROPS[type].map(function (attr) {
              return _this2[attr];
            }), type);
          });
        }
      }, {
        key: "_hostPropsChanged",
        value: function _hostPropsChanged() {
          for (var _len = arguments.length, attributesValues = new Array(_len), _key = 0; _key < _len; _key++) {
            attributesValues[_key] = arguments[_key];
          }

          this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
        }
      }, {
        key: "_hostAccessiblePropsChanged",
        value: function _hostAccessiblePropsChanged() {
          for (var _len2 = arguments.length, attributesValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            attributesValues[_key2] = arguments[_key2];
          }

          this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
        }
      }, {
        key: "_validateSlottedValue",
        value: function _validateSlottedValue(slotted) {
          if (slotted.value !== this.value) {
            console.warn('Please define value on the vaadin-text-field component!');
            slotted.value = '';
          }
        }
      }, {
        key: "_propagateHostAttributes",
        value: function _propagateHostAttributes(attributesValues, type) {
          var _this3 = this;

          var input = this.inputElement;
          var attributeNames = HOST_PROPS[type];

          if (type === 'accessible') {
            attributeNames.forEach(function (attr, index) {
              _this3._setOrToggleAttribute(attr, attributesValues[index], input);

              _this3._setOrToggleAttribute("aria-".concat(attr), attributesValues[index], input);
            });
          } else {
            attributeNames.forEach(function (attr, index) {
              _this3._setOrToggleAttribute(attr, attributesValues[index], input);
            });
          }
        }
      }, {
        key: "_setOrToggleAttribute",
        value: function _setOrToggleAttribute(name, value, node) {
          if (!name || !node) {
            return;
          }

          if (value) {
            node.setAttribute(name, typeof value === 'boolean' ? '' : value);
          } else {
            node.removeAttribute(name);
          }
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         * @returns {boolean}
         */

      }, {
        key: "checkValidity",
        value: function checkValidity() {
          if (this.required || this.pattern || this.maxlength || this.minlength) {
            return this.inputElement.checkValidity();
          } else {
            return !this.invalid;
          }
        }
      }, {
        key: "_addInputListeners",
        value: function _addInputListeners(node) {
          node.addEventListener('input', this._boundOnInput);
          node.addEventListener('change', this._boundOnChange);
          node.addEventListener('blur', this._boundOnBlur);
          node.addEventListener('focus', this._boundOnFocus);
        }
      }, {
        key: "_removeInputListeners",
        value: function _removeInputListeners(node) {
          node.removeEventListener('input', this._boundOnInput);
          node.removeEventListener('change', this._boundOnChange);
          node.removeEventListener('blur', this._boundOnBlur);
          node.removeEventListener('focus', this._boundOnFocus);
        }
      }, {
        key: "ready",
        value: function ready() {
          var _this4 = this;

          _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "ready", this).call(this);

          this._boundOnInput = this._onInput.bind(this);
          this._boundOnChange = this._onChange.bind(this);
          this._boundOnBlur = this._onBlur.bind(this);
          this._boundOnFocus = this._onFocus.bind(this);
          var defaultInput = this.shadowRoot.querySelector('[part="value"]');
          this._slottedInput = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          this._addInputListeners(defaultInput);

          this._addIEListeners(defaultInput);

          if (this._slottedInput) {
            this._addIEListeners(this._slottedInput);

            this._addInputListeners(this._slottedInput);
          }

          this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

          if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
            this.updateStyles();
          }

          this.$.clearButton.addEventListener('mousedown', function () {
            return _this4._valueClearing = true;
          });
          this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
          this.addEventListener('keydown', this._onKeyDown.bind(this));
          var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
          this._errorId = "".concat(this.constructor.is, "-error-").concat(uniqueId);
          this._labelId = "".concat(this.constructor.is, "-label-").concat(uniqueId);
        }
        /**
         * Returns true if `value` is valid.
         * `<iron-form>` uses this to check the validity or all its elements.
         *
         * @return {boolean} True if the value is valid.
         */

      }, {
        key: "validate",
        value: function validate() {
          return !(this.invalid = !this.checkValidity());
        }
      }, {
        key: "clear",
        value: function clear() {
          this.value = '';
        }
      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.validate();
        }
      }, {
        key: "_onFocus",
        value: function _onFocus() {
          var _this5 = this;

          if (this.autoselect) {
            this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

            setTimeout(function () {
              _this5.inputElement.setSelectionRange(0, 9999);
            });
          }
        }
      }, {
        key: "_onClearButtonClick",
        value: function _onClearButtonClick(e) {
          // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.
          this.inputElement.focus();
          this.clear();
          this._valueClearing = false;
          this.inputElement.dispatchEvent(new Event('change', {
            bubbles: !this._slottedInput
          }));
        }
      }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
          if (e.keyCode === 27 && this.clearButtonVisible) {
            this.clear();
          }
        }
      }, {
        key: "_addIEListeners",
        value: function _addIEListeners(node) {
          var _this6 = this;

          /* istanbul ignore if */
          if (navigator.userAgent.match(/Trident/)) {
            // IE11 dispatches `input` event in following cases:
            // - focus or blur, when placeholder attribute is set
            // - placeholder attribute value changed
            // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
            this._shouldPreventInput = function () {
              _this6.__preventInput = true;
              requestAnimationFrame(function () {
                _this6.__preventInput = false;
              });
            };

            node.addEventListener('focusin', this._shouldPreventInput);
            node.addEventListener('focusout', this._shouldPreventInput);

            this._createPropertyObserver('placeholder', this._shouldPreventInput);
          }
        }
      }, {
        key: "_removeIEListeners",
        value: function _removeIEListeners(node) {
          /* istanbul ignore if */
          if (navigator.userAgent.match(/Trident/)) {
            node.removeEventListener('focusin', this._shouldPreventInput);
            node.removeEventListener('focusout', this._shouldPreventInput);
          }
        }
      }, {
        key: "_getActiveErrorId",
        value: function _getActiveErrorId(invalid, errorMessage, errorId) {
          this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.inputElement);
        }
      }, {
        key: "_getActiveLabelId",
        value: function _getActiveLabelId(label, labelId) {
          this._setOrToggleAttribute('aria-labelledby', label ? labelId : undefined, this.inputElement);
        }
      }, {
        key: "_getErrorMessageAriaHidden",
        value: function _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
          return (!(errorMessage && invalid ? errorId : undefined)).toString();
        }
        /**
         * @protected
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(prop, oldVal, newVal) {
          _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "attributeChangedCallback", this).call(this, prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

          /* istanbul ignore if */


          if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
            this.updateStyles();
          } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
          // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          /* istanbul ignore if */

          if (isSafari && this.root) {
            var WEBKIT_PROPERTY = '-webkit-backface-visibility';
            this.root.querySelectorAll('*').forEach(function (el) {
              el.style[WEBKIT_PROPERTY] = 'visible';
              el.style[WEBKIT_PROPERTY] = '';
            });
          }
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

      }, {
        key: "focusElement",
        get: function get() {
          if (!this.shadowRoot) {
            return;
          }

          var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          if (slotted) {
            return slotted;
          }

          return this.shadowRoot.querySelector('[part="value"]');
        }
        /**
         * @private
         */

      }, {
        key: "inputElement",
        get: function get() {
          return this.focusElement;
        }
      }, {
        key: "_slottedTagName",
        get: function get() {
          return 'input';
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Whether the value of the control can be automatically completed by the browser.
             * List of available options at:
             * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
             */
            autocomplete: {
              type: String
            },

            /**
             * This is a property supported by Safari that is used to control whether
             * autocorrection should be enabled when the user is entering/editing the text.
             * Possible values are:
             * on: Enable autocorrection.
             * off: Disable autocorrection.
             */
            autocorrect: {
              type: String
            },

            /**
             * This is a property supported by Safari and Chrome that is used to control whether
             * autocapitalization should be enabled when the user is entering/editing the text.
             * Possible values are:
             * characters: Characters capitalization.
             * words: Words capitalization.
             * sentences: Sentences capitalization.
             * none: No capitalization.
             */
            autocapitalize: {
              type: String
            },

            /**
             * Specify that the value should be automatically selected when the field gains focus.
             */
            autoselect: {
              type: Boolean,
              value: false
            },

            /**
             * Set to true to display the clear icon which clears the input.
             */
            clearButtonVisible: {
              type: Boolean,
              value: false
            },

            /**
             * Error to show when the input value is invalid.
             */
            errorMessage: {
              type: String,
              value: ''
            },

            /**
             * String used for the label element.
             */
            label: {
              type: String,
              value: '',
              observer: '_labelChanged'
            },

            /**
             * Maximum number of characters (in Unicode code points) that the user can enter.
             */
            maxlength: {
              type: Number
            },

            /**
             * Minimum number of characters (in Unicode code points) that the user can enter.
             */
            minlength: {
              type: Number
            },

            /**
             * The name of the control, which is submitted with the form data.
             */
            name: {
              type: String
            },

            /**
             * A hint to the user of what can be entered in the control.
             */
            placeholder: {
              type: String
            },

            /**
             * This attribute indicates that the user cannot modify the value of the control.
             */
            readonly: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * Specifies that the user must fill in a value.
             */
            required: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * The initial value of the control.
             * It can be used for two-way data binding.
             */
            value: {
              type: String,
              value: '',
              observer: '_valueChanged',
              notify: true
            },

            /**
             * This property is set to true when the control value is invalid.
             */
            invalid: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              value: false
            },

            /**
             * Specifies that the text field has value.
             */
            hasValue: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * When set to true, user is prevented from typing a value that
             * conflicts with the given `pattern`.
             */
            preventInvalidInput: {
              type: Boolean
            },
            _labelId: {
              type: String
            },
            _errorId: {
              type: String
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS["default"].join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId)'];
        }
      }]);

      return VaadinTextFieldMixin;
    }(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ControlStateMixin"])(subclass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js ***!
  \*************************************************************************/
/*! exports provided: TextFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldElement", function() { return TextFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label=\"Clear\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"], ["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label=\"Clear\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.TextFieldMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

var TextFieldElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(TextFieldElement, _ElementMixin);

  function TextFieldElement() {
    _classCallCheck(this, TextFieldElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextFieldElement).apply(this, arguments));
  }

  _createClass(TextFieldElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-text-field';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.3.5';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Identifies a list of pre-defined options to suggest to the user.
         * The value must be the id of a <datalist> element in the same document.
         */
        list: {
          type: String
        },

        /**
         * A regular expression that the value is checked against.
         * The pattern must match the entire value, not just some subset.
         */
        pattern: {
          type: String
        },

        /**
         * Message to show to the user when validation fails.
         */
        title: {
          type: String
        }
      };
    }
  }]);

  return TextFieldElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))));

customElements.define(TextFieldElement.is, TextFieldElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_required_field_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/required-field.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      [part=\"input-field\"] ::slotted(input):focus,\n      [part=\"input-field\"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"], ["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      [part=\"input-field\"] ::slotted(input):focus,\n      [part=\"input-field\"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in \\`mask-image\\` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_field_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-field-styles.js */ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js");
/* harmony import */ var _src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js ***!
  \*********************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return usageStatistics; });
/* harmony import */ var _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js */ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

/*

This script gathers usage statistics from the application running in development mode.

Statistics gathering is automatically disabled and excluded from production builds.

For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.

*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/


function maybeGatherAndSendStats() {
  /** vaadin-dev-mode:start
  (function () {
  'use strict';
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
  } : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
  };
  var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
   return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
  }();
  var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
  };
  var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);
     this.now = new Date().getTime();
    this.logger = logger;
  }
   createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }
           jQuery.toString = function () {
            return _jQuery.toString();
          };
           return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { "version": version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];
       types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });
       var previousStats = JSON.stringify(storedStats);
       this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);
       var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { "firstUsed": now };
          }
          // Discards any previously logged version numebr
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });
       var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
  }();
  var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);
     this.key = key;
  }
   createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });
       return empty;
    }
  }]);
  return StatisticsStorage;
  }();
  var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);
     this.url = url;
    this.logger = logger;
  }
   createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;
       if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);
       var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
  }();
  var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);
     this.id = id;
  }
   createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
  }();
  var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);
     this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;
     this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }
   createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;
       if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return Math.random() <= 0.05;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
       if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }
       if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }
       this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);
       // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.0.1';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
  }();
  try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
  }
  }());
   vaadin-dev-mode:end **/
}

var usageStatistics = function usageStatistics() {
  if (typeof _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"] === 'function') {
    return Object(_vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"])(maybeGatherAndSendStats);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWhpc3Rvcnl+cGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWJ1dHRvbi9zcmMvdmFhZGluLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tYnV0dG9uL3RoZW1lL2x1bW8vdmFhZGluLWJ1dHRvbi1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWJ1dHRvbi90aGVtZS9sdW1vL3ZhYWRpbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3NyYy92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1tb250aC1jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbHVtby92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50LXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbHVtby92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL2x1bW8vdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbHVtby92YWFkaW4tZGF0ZS1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL2x1bW8vdmFhZGluLW1vbnRoLWNhbGVuZGFyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdmFhZGluLWRhdGUtcGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1lbGVtZW50LW1peGluL3ZhYWRpbi1lbGVtZW50LW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9taXhpbnMvZmllbGQtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9taXhpbnMvcmVxdWlyZWQtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3NyYy92YWFkaW4tdGV4dC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC90aGVtZS9sdW1vL3ZhYWRpbi10ZXh0LWZpZWxkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC90aGVtZS9sdW1vL3ZhYWRpbi10ZXh0LWZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xudGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1Byb2dyZXNzICZcbmFjdGl2aXR5XShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYWN0aXZpdHkuaHRtbClcblxuRWxlbWVudCBwcm92aWRpbmcgYSBtdWx0aXBsZSBjb2xvciBtYXRlcmlhbCBkZXNpZ24gY2lyY3VsYXIgc3Bpbm5lci5cblxuICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgY3ljbGVzIGJldHdlZW4gZm91ciBsYXllcnMgb2YgY29sb3JzOyBieSBkZWZhdWx0IHRoZXkgYXJlXG5ibHVlLCByZWQsIHllbGxvdyBhbmQgZ3JlZW4uIEl0IGNhbiBiZSBjdXN0b21pemVkIHRvIGN5Y2xlIGJldHdlZW4gZm91clxuZGlmZmVyZW50IGNvbG9ycy4gVXNlIDxwYXBlci1zcGlubmVyLWxpdGU+IGZvciBzaW5nbGUgY29sb3Igc3Bpbm5lcnMuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyIGFsdD1cIkxvYWRpbmcgY29udGFjdHMgbGlzdFwiIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTEtY29sb3JgIHwgQ29sb3Igb2YgdGhlIGZpcnN0IHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtYmx1ZS01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTItY29sb3JgIHwgQ29sb3Igb2YgdGhlIHNlY29uZCBzcGlubmVyIHJvdGF0aW9uIHwgYC0tZ29vZ2xlLXJlZC01MDBgXG5gLS1wYXBlci1zcGlubmVyLWxheWVyLTMtY29sb3JgIHwgQ29sb3Igb2YgdGhlIHRoaXJkIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUteWVsbG93LTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItNC1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZm91cnRoIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtZ3JlZW4tNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1zdHJva2Utd2lkdGhgIHwgVGhlIHdpZHRoIG9mIHRoZSBzcGlubmVyIHN0cm9rZSB8IDNweFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNwaW5uZXJcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXInLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyU3Bpbm5lckJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgQ29udHJvbFN0YXRlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluLmpzJztcbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuLyoqXG4gKiBgPHZhYWRpbi1idXR0b24+YCBpcyBhIFdlYiBDb21wb25lbnQgcHJvdmlkaW5nIGFuIGFjY2Vzc2libGUgYW5kIGN1c3RvbWl6YWJsZSBidXR0b24uXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1idXR0b24+XG4gKiA8L3ZhYWRpbi1idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBgYGBqc1xuICogZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmFhZGluLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWxlcnQoJ0hlbGxvIFdvcmxkIScpKTtcbiAqIGBgYFxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBleHBvc2VkIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS1cbiAqIGBsYWJlbGAgfCBUaGUgbGFiZWwgKHRleHQpIGluc2lkZSB0aGUgYnV0dG9uXG4gKiBgcHJlZml4YCB8IEEgc2xvdCBmb3IgZS5nLiBhbiBpY29uIGJlZm9yZSB0aGUgbGFiZWxcbiAqIGBzdWZmaXhgIHwgQSBzbG90IGZvciBlLmcuIGFuIGljb24gYWZ0ZXIgdGhlIGxhYmVsXG4gKlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyBhcmUgZXhwb3NlZCBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS1cbiAqIGBhY3RpdmVgIHwgU2V0IHdoZW4gdGhlIGJ1dHRvbiBpcyBwcmVzc2VkIGRvd24sIGVpdGhlciB3aXRoIG1vdXNlLCB0b3VjaCBvciB0aGUga2V5Ym9hcmQuXG4gKiBgZGlzYWJsZWRgIHwgU2V0IHdoZW4gdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAqIGBmb2N1cy1yaW5nYCB8IFNldCB3aGVuIHRoZSBidXR0b24gaXMgZm9jdXNlZCB1c2luZyB0aGUga2V5Ym9hcmQuXG4gKiBgZm9jdXNlZGAgfCBTZXQgd2hlbiB0aGUgYnV0dG9uIGlzIGZvY3VzZWQuXG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5FbGVtZW50TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29udHJvbFN0YXRlTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQG1peGVzIFBvbHltZXIuR2VzdHVyZUV2ZW50TGlzdGVuZXJzXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgQnV0dG9uRWxlbWVudCBleHRlbmRzXG4gIEVsZW1lbnRNaXhpbihcbiAgICBDb250cm9sU3RhdGVNaXhpbihcbiAgICAgIFRoZW1hYmxlTWl4aW4oXG4gICAgICAgIEdlc3R1cmVFdmVudExpc3RlbmVycyhQb2x5bWVyRWxlbWVudCkpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLyogRW5zdXJlIHRoZSBidXR0b24gaXMgYWx3YXlzIGFsaWduZWQgb24gdGhlIGJhc2VsaW5lICovXG4gICAgICAudmFhZGluLWJ1dHRvbi1jb250YWluZXI6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxcXDIwMDNcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLnZhYWRpbi1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBpbmhlcml0O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJwcmVmaXhcIl0sXG4gICAgICBbcGFydD1cInN1ZmZpeFwiXSB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgI2J1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzPVwidmFhZGluLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgcGFydD1cInByZWZpeFwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHBhcnQ9XCJsYWJlbFwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cInN1ZmZpeFwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBhcmlhLWxhYmVsXFwkPVwiW1tfYXJpYUxhYmVsXV1cIj48L2J1dHRvbj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWJ1dHRvbic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICcyLjEuNCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIGZvciBhc3Npc3RpdmUgdGVjaG5vbG9naWVzIGxpa2VcbiAgICAgICAqIHNjcmVlbiByZWFkZXJzLiBBbiBgdW5kZWZpbmVkYCB2YWx1ZSBmb3IgdGhpcyBwcm9wZXJ0eSAodGhlXG4gICAgICAgKiBkZWZhdWx0KSBtZWFucyB0aGF0IHRoZSBgYXJpYS1sYWJlbGAgYXR0cmlidXRlIGlzIG5vdCBwcmVzZW50IGF0XG4gICAgICAgKiBhbGwuXG4gICAgICAgKi9cbiAgICAgIF9hcmlhTGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBzdXBlci5vYnNlcnZlZEF0dHJpYnV0ZXMuY29uY2F0KFsnYXJpYS1sYWJlbCddKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBMZWF2aW5nIGRlZmF1bHQgcm9sZSBpbiB0aGUgbmF0aXZlIGJ1dHRvbiwgbWFrZXMgbmF2aWdhdGlvbiBhbm5vdW5jZW1lbnRcbiAgICAvLyBiZWluZyBkaWZmZXJlbnQgd2hlbiB1c2luZyBmb2N1cyBuYXZpZ2F0aW9uICh0YWIpIHZlcnN1cyB1c2luZyBub3JtYWxcbiAgICAvLyBuYXZpZ2F0aW9uIChhcnJvd3MpLiBUaGUgZmlyc3Qgd2F5IGFubm91bmNlcyB0aGUgbGFiZWwgb24gYSBidXR0b25cbiAgICAvLyBzaW5jZSB0aGUgZm9jdXMgaXMgbW92ZWQgcHJvZ3JhbW1hdGljYWxseSwgYW5kIHRoZSBzZWNvbmQgb24gYSBncm91cC5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcblxuICAgIHRoaXMuX2FkZEFjdGl2ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuX3VwZGF0ZUFyaWFMYWJlbCh0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gYGFjdGl2ZWAgc3RhdGUgaXMgcHJlc2VydmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGJldHdlZW4ga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzLlxuICAgIC8vIHJlcHJvZHVjaWJsZSBpbiBgPHZhYWRpbi1kYXRlLXBpY2tlcj5gIHdoZW4gY2xvc2luZyBvbiBgQ2FuY2VsYCBvciBgVG9kYXlgIGNsaWNrLlxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIG9sZFZhbCwgbmV3VmFsKTtcbiAgICBpZiAoYXR0ciA9PT0gJ2FyaWEtbGFiZWwnKSB7XG4gICAgICB0aGlzLl91cGRhdGVBcmlhTGFiZWwobmV3VmFsKTtcbiAgICB9XG4gIH1cblxuICBfYWRkQWN0aXZlTGlzdGVuZXJzKCkge1xuICAgIGFkZExpc3RlbmVyKHRoaXMsICdkb3duJywgKCkgPT4gIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKSk7XG4gICAgYWRkTGlzdGVuZXIodGhpcywgJ3VwJywgKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+ICF0aGlzLmRpc2FibGVkICYmIFsxMywgMzJdLmluZGV4T2YoZS5rZXlDb2RlKSA+PSAwICYmIHRoaXMuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKSk7XG4gIH1cblxuICBfdXBkYXRlQXJpYUxhYmVsKGFyaWFMYWJlbCkge1xuICAgIHRoaXMuX2FyaWFMYWJlbCA9IGFyaWFMYWJlbCAhPT0gdW5kZWZpbmVkICYmIGFyaWFMYWJlbCAhPT0gbnVsbCA/IGFyaWFMYWJlbCA6IHRoaXMuaW5uZXJUZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldCBmb2N1c0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5idXR0b247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKEJ1dHRvbkVsZW1lbnQuaXMsIEJ1dHRvbkVsZW1lbnQpO1xuXG5leHBvcnQgeyBCdXR0b25FbGVtZW50IH07XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc2l6aW5nLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3BhY2luZy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL3N0eWxlLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cImx1bW8tYnV0dG9uXCIgdGhlbWUtZm9yPVwidmFhZGluLWJ1dHRvblwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICAvKiBTaXppbmcgKi9cbiAgICAgICAgLS1sdW1vLWJ1dHRvbi1zaXplOiB2YXIoLS1sdW1vLXNpemUtbSk7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYyh2YXIoLS1sdW1vLWJ1dHRvbi1zaXplKSAqIDIpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWx1bW8tYnV0dG9uLXNpemUpO1xuICAgICAgICBwYWRkaW5nOiAwIGNhbGModmFyKC0tbHVtby1idXR0b24tc2l6ZSkgLyAzICsgdmFyKC0tbHVtby1ib3JkZXItcmFkaXVzKSAvIDIpO1xuICAgICAgICBtYXJnaW46IHZhcigtLWx1bW8tc3BhY2UteHMpIDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC8qIFN0eWxlICovXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1sdW1vLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1tKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1jb250cmFzdC01cGN0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbHVtby1ib3JkZXItcmFkaXVzKTtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgIH1cblxuICAgICAgLyogU2V0IG9ubHkgZm9yIHRoZSBpbnRlcm5hbCBwYXJ0cyBzbyB3ZSBkb27igJl0IGFmZmVjdCB0aGUgaG9zdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgKi9cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0sXG4gICAgICBbcGFydD1cInByZWZpeFwiXSxcbiAgICAgIFtwYXJ0PVwic3VmZml4XCJdIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWx1bW8tbGluZS1oZWlnaHQteHMpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1sdW1vLWJ1dHRvbi1zaXplKSAvIDYpIDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJzbWFsbFwiXSkge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLXMpO1xuICAgICAgICAtLWx1bW8tYnV0dG9uLXNpemU6IHZhcigtLWx1bW8tc2l6ZS1zKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImxhcmdlXCJdKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUtbCk7XG4gICAgICAgIC0tbHVtby1idXR0b24tc2l6ZTogdmFyKC0tbHVtby1zaXplLWwpO1xuICAgICAgfVxuXG4gICAgICAvKiBUaGlzIG5lZWRzIHRvIGJlIHRoZSBsYXN0IHNlbGVjdG9yIGZvciBpdCB0byB0YWtlIHByaW9yaXR5ICovXG4gICAgICA6aG9zdChbZGlzYWJsZWRdW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QtNXBjdCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEZvciBpbnRlcmFjdGlvbiBzdGF0ZXMgKi9cbiAgICAgIDpob3N0OjpiZWZvcmUsXG4gICAgICA6aG9zdDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAvKiBXZSByZWx5IG9uIHRoZSBob3N0IGFsd2F5cyBiZWluZyByZWxhdGl2ZSAqL1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKiBIb3ZlciAqL1xuXG4gICAgICA6aG9zdCg6aG92ZXIpOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjA1O1xuICAgICAgfVxuXG4gICAgICAvKiBEaXNhYmxlIGhvdmVyIGZvciB0b3VjaCBkZXZpY2VzICovXG4gICAgICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICA6aG9zdCg6bm90KFthY3RpdmVdKTpob3Zlcik6OmJlZm9yZSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBBY3RpdmUgKi9cblxuICAgICAgOmhvc3Q6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjRzLCB0cmFuc2Zvcm0gMC4xcztcbiAgICAgICAgZmlsdGVyOiBibHVyKDhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFthY3RpdmVdKTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FjdGl2ZV0pOjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMsIDBzO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgfVxuXG4gICAgICAvKiBLZXlib2FyZCBmb2N1cyAqL1xuXG4gICAgICA6aG9zdChbZm9jdXMtcmluZ10pIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWx1bW8tcHJpbWFyeS1jb2xvci01MHBjdCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFR5cGVzIChwcmltYXJ5LCB0ZXJ0aWFyeSwgdGVydGlhcnktaW5saW5lICovXG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJ0ZXJ0aWFyeVwiXSksXG4gICAgICA6aG9zdChbdGhlbWV+PVwidGVydGlhcnktaW5saW5lXCJdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwidGVydGlhcnlcIl0pOjpiZWZvcmUsXG4gICAgICA6aG9zdChbdGhlbWV+PVwidGVydGlhcnktaW5saW5lXCJdKTo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInRlcnRpYXJ5XCJdKSB7XG4gICAgICAgIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1sdW1vLWJ1dHRvbi1zaXplKSAvIDYpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgICAgICA6aG9zdChbdGhlbWUqPVwidGVydGlhcnlcIl06bm90KFthY3RpdmVdKTpob3Zlcikge1xuICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwidGVydGlhcnlcIl1bYWN0aXZlXSksXG4gICAgICA6aG9zdChbdGhlbWV+PVwidGVydGlhcnktaW5saW5lXCJdW2FjdGl2ZV0pIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInRlcnRpYXJ5LWlubGluZVwiXSkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInRlcnRpYXJ5LWlubGluZVwiXSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInByaW1hcnlcIl0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tcHJpbWFyeS1jb250cmFzdC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYyh2YXIoLS1sdW1vLWJ1dHRvbi1zaXplKSAqIDIuNSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJwcmltYXJ5XCJdW2Rpc2FibGVkXSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLXByaW1hcnktY29sb3ItNTBwY3QpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LWNvbnRyYXN0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInByaW1hcnlcIl06aG92ZXIpOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJwcmltYXJ5XCJdW2FjdGl2ZV0pOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLXNoYWRlLTIwcGN0KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgICAgICAgOmhvc3QoW3RoZW1lfj1cInByaW1hcnlcIl1bYWN0aXZlXSk6OmJlZm9yZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1zaGFkZS02MHBjdCk7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbdGhlbWV+PVwicHJpbWFyeVwiXTpub3QoW2FjdGl2ZV0pOmhvdmVyKTo6YmVmb3JlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJwcmltYXJ5XCJdW2FjdGl2ZV0pOjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgIH1cblxuICAgICAgLyogQ29sb3JzIChzdWNjZXNzLCBlcnJvciwgY29udHJhc3QpICovXG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJzdWNjZXNzXCJdKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLXN1Y2Nlc3MtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJzdWNjZXNzXCJdW3RoZW1lfj1cInByaW1hcnlcIl0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1zdWNjZXNzLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tc3VjY2Vzcy1jb250cmFzdC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJzdWNjZXNzXCJdW3RoZW1lfj1cInByaW1hcnlcIl1bZGlzYWJsZWRdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tc3VjY2Vzcy1jb2xvci01MHBjdCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJlcnJvclwiXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImVycm9yXCJdW3RoZW1lfj1cInByaW1hcnlcIl0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1lcnJvci1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWVycm9yLWNvbnRyYXN0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImVycm9yXCJdW3RoZW1lfj1cInByaW1hcnlcIl1bZGlzYWJsZWRdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tZXJyb3ItY29sb3ItNTBwY3QpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udHJhc3RcIl0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udHJhc3RcIl1bdGhlbWV+PVwicHJpbWFyeVwiXSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tYmFzZS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJjb250cmFzdFwiXVt0aGVtZX49XCJwcmltYXJ5XCJdW2Rpc2FibGVkXSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTUwcGN0KTtcbiAgICAgIH1cblxuICAgICAgLyogSWNvbnMgKi9cblxuICAgICAgW3BhcnRdIDo6c2xvdHRlZChpcm9uLWljb24pIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogdmFyKC0tbHVtby1pY29uLXNpemUtbSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tbHVtby1pY29uLXNpemUtbSk7XG4gICAgICB9XG5cbiAgICAgIC8qIFZhYWRpbiBpY29ucyBhcmUgYmFzZWQgb24gYSAxNngxNiBncmlkICh1bmxpa2UgTHVtbyBhbmQgTWF0ZXJpYWwgaWNvbnMgd2l0aCAyNHgyNCksIHNvIHRoZXkgbG9vayB0b28gYmlnIGJ5IGRlZmF1bHQgKi9cbiAgICAgIFtwYXJ0XSA6OnNsb3R0ZWQoaXJvbi1pY29uW2ljb25ePVwidmFhZGluOlwiXSkge1xuICAgICAgICBwYWRkaW5nOiAwLjI1ZW07XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJwcmVmaXhcIl0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLTAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwic3VmZml4XCJdIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC4yNWVtO1xuICAgICAgfVxuXG4gICAgICAvKiBJY29uLW9ubHkgKi9cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImljb25cIl0pIHtcbiAgICAgICAgbWluLXdpZHRoOiB2YXIoLS1sdW1vLWJ1dHRvbi1zaXplKTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWx1bW8tYnV0dG9uLXNpemUpIC8gNCk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tbHVtby1idXR0b24tc2l6ZSkgLyA0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImljb25cIl0pIFtwYXJ0PVwicHJlZml4XCJdLFxuICAgICAgOmhvc3QoW3RoZW1lfj1cImljb25cIl0pIFtwYXJ0PVwic3VmZml4XCJdIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tYnV0dG9uLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4tYnV0dG9uLmpzJztcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbi8qKlxuICogQSBwcml2YXRlIG1peGluIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggZHluYW1pYyBwcm9wZXJ0aWVzIGFuZCBQb2x5bWVyIEFuYWx5emVyLlxuICogTm8gbmVlZCB0byBleHBvc2UgdGhlc2UgcHJvcGVydGllcyBpbiB0aGUgQVBJIGRvY3MuXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmNvbnN0IFRhYkluZGV4TWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpblRhYkluZGV4TWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBJbnRlcm5hbCBwcm9wZXJ0eSBuZWVkZWQgdG8gbGlzdGVuIHRvIGB0YWJpbmRleGAgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogRm9yIGNoYW5naW5nIHRoZSB0YWJpbmRleCBvZiB0aGlzIGNvbXBvbmVudCB1c2UgdGhlIG5hdGl2ZSBgdGFiSW5kZXhgIHByb3BlcnR5LlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgdGFiaW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ190YWJpbmRleENoYW5nZWQnXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgIC8vIFNoYWR5RE9NIGJyb3dzZXJzIG5lZWQgdGhlIGB0YWJJbmRleGAgaW4gb3JkZXIgdG8gbm90aWZ5IHdoZW4gdGhlIHVzZXIgY2hhbmdlcyBpdCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgcHJvcGVydGllc1sndGFiSW5kZXgnXSA9IHByb3BlcnRpZXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cbn07XG5cbi8qKlxuICogUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlIGlzIG5vdCBhIHByb3BlciAyLjAgY2xhc3MsIGFsc28sIGl0cyB0YWJpbmRleFxuICogaW1wbGVtZW50YXRpb24gZmFpbHMgaW4gdGhlIHNoYWRvdyBkb20sIHNvIHdlIGhhdmUgdGhpcyBmb3IgdmFhZGluIGVsZW1lbnRzLlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgQ29udHJvbFN0YXRlTWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpbkNvbnRyb2xTdGF0ZU1peGluIGV4dGVuZHMgVGFiSW5kZXhNaXhpbihzdXBlckNsYXNzKSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgdGhpcyBjb250cm9sIHNob3VsZCBoYXZlIGlucHV0IGZvY3VzIHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgKi9cbiAgICAgIGF1dG9mb2N1czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0b3JlcyB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGFiaW5kZXggYXR0cmlidXRlIG9mIHRoZSBkaXNhYmxlZCBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIF9wcmV2aW91c1RhYkluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2lzU2hpZnRUYWJiaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZSA9PiB7XG4gICAgICBpZiAoZS5jb21wb3NlZFBhdGgoKVswXSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLl9mb2N1cyhlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuZm9jdXNFbGVtZW50KSAhPT0gLTEgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZSA9PiB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKSk7XG5cbiAgICAvLyBJbiBzdXBlci5yZWFkeSgpIG90aGVyICdmb2N1c2luJyBhbmQgJ2ZvY3Vzb3V0JyBsaXN0ZW5lcnMgbWlnaHQgYmVcbiAgICAvLyBhZGRlZCwgc28gd2UgY2FsbCBpdCBhZnRlciBvdXIgb3duIG9uZXMgdG8gZW5zdXJlIHRoZXkgZXhlY3V0ZSBmaXJzdC5cbiAgICAvLyBJc3N1ZSB0byB3YXRjaCBvdXQ6IHdoZW4gaW5jb3JyZWN0LCA8dmFhZGluLWNvbWJvLWJveD4gcmVmb2N1c2VzIHRoZVxuICAgIC8vIGlucHV0IGZpZWxkIG9uIGlPUyBhZnRlciDigJxEb25l4oCdIGlzIHByZXNzZWQuXG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIFRoaXMgZml4ZXMgdGhlIGJ1ZyBpbiBGaXJlZm94IDYxIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDcyODg3KVxuICAgIC8vIHdoZXJlIGZvY3Vzb3V0IGV2ZW50IGRvZXMgbm90IGdvIG91dCBvZiBzaGFkeSBET00gYmVjYXVzZSBjb21wb3NlZCBwcm9wZXJ0eSBpbiB0aGUgZXZlbnQgaXMgbm90IHRydWVcbiAgICBjb25zdCBlbnN1cmVFdmVudENvbXBvc2VkID0gZSA9PiB7XG4gICAgICBpZiAoIWUuY29tcG9zZWQpIHtcbiAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZS50eXBlLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGVuc3VyZUV2ZW50Q29tcG9zZWQpO1xuICAgIHRoaXMuc2hhZG93Um9vdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGVuc3VyZUV2ZW50Q29tcG9zZWQpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCAmJiBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBGbGFnIGlzIGNoZWNrZWQgaW4gX2ZvY3VzIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgICAgdGhpcy5faXNTaGlmdFRhYmJpbmcgPSB0cnVlO1xuICAgICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mb2N1cy5hcHBseSh0aGlzKTtcbiAgICAgICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgICAgICAvLyBFdmVudCBoYW5kbGluZyBpbiBJRSBpcyBhc3luY2hyb25vdXMgYW5kIHRoZSBmbGFnIGlzIHJlbW92ZWQgYXN5bmNocm9ub3VzbHkgYXMgd2VsbFxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5faXNTaGlmdFRhYmJpbmcgPSBmYWxzZSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgRkY2My02NSBidWcgdGhhdCBjYXVzZXMgdGhlIGZvY3VzIHRvIGdldCBsb3N0IHdoZW5cbiAgICAgICAgICAvLyBibHVycmluZyBhIHNsb3R0ZWQgY29tcG9uZW50IHdpdGggZm9jdXNhYmxlIHNoYWRvdyByb290IGNvbnRlbnRcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTI4Njg2XG4gICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHdoZW4gc2FmZVxuICAgICAgICAgIGNvbnN0IGZpcmVmb3ggPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRmlyZWZveFxcLyhcXGRcXGRcXC5cXGQpLyk7XG4gICAgICAgICAgaWYgKGZpcmVmb3hcbiAgICAgICAgICAgICYmIHBhcnNlRmxvYXQoZmlyZWZveFsxXSkgPj0gNjNcbiAgICAgICAgICAgICYmIHBhcnNlRmxvYXQoZmlyZWZveFsxXSkgPCA2NlxuICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnROb2RlXG4gICAgICAgICAgICAmJiB0aGlzLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBmYWtlVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZha2VUYXJnZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGZha2VUYXJnZXQudGFiSW5kZXggPSB0aGlzLnRhYkluZGV4O1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZha2VUYXJnZXQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWtlVGFyZ2V0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5mb2N1c2VkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciA9IHRoaXMuX2JvZHlLZXlkb3duTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEtleXVwTGlzdGVuZXIgPSB0aGlzLl9ib2R5S2V5dXBMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JvdW5kS2V5dXBMaXN0ZW5lciwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYm91bmRLZXl1cExpc3RlbmVyLCB0cnVlKTtcblxuICAgIC8vIGluIG5vbi1DaHJvbWUgYnJvd3NlcnMsIGJsdXIgZG9lcyBub3QgZmlyZSBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIGRpc2Nvbm5lY3RlZC5cbiAgICAvLyByZXByb2R1Y2libGUgaW4gYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCB3aGVuIGNsb3Npbmcgb24gYENhbmNlbGAgb3IgYFRvZGF5YCBjbGljay5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9jdXNlZCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICAvLyBmb2N1cy1yaW5nIGlzIHRydWUgd2hlbiB0aGUgZWxlbWVudCB3YXMgZm9jdXNlZCBmcm9tIHRoZSBrZXlib2FyZC5cbiAgICAvLyBGb2N1cyBSaW5nIFtBMTF5Y2FzdHNdOiBodHRwczovL3lvdXR1LmJlL2lsajJQNS01Q2pJXG4gICAgaWYgKGZvY3VzZWQgJiYgdGhpcy5fdGFiUHJlc3NlZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdmb2N1cy1yaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgX2JvZHlLZXlkb3duTGlzdGVuZXIoZSkge1xuICAgIHRoaXMuX3RhYlByZXNzZWQgPSBlLmtleUNvZGUgPT09IDk7XG4gIH1cblxuICBfYm9keUtleXVwTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5fdGFiUHJlc3NlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFueSBlbGVtZW50IGV4dGVuZGluZyB0aGlzIG1peGluIGlzIHJlcXVpcmVkIHRvIGltcGxlbWVudCB0aGlzIGdldHRlci5cbiAgICogSXQgcmV0dXJucyB0aGUgYWN0dWFsIGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIHdpbmRvdy5jb25zb2xlLndhcm4oYFBsZWFzZSBpbXBsZW1lbnQgdGhlICdmb2N1c0VsZW1lbnQnIHByb3BlcnR5IGluIDwke3RoaXMubG9jYWxOYW1lfT5gKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9mb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hpZnRUYWJiaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c0VsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmluZyB0aGUgZm9jdXMgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGNhdXNlcyBmaXJpbmcgb2YgdGhlIGJsdXIgZXZlbnQgd2hhdCBsZWFkcyB0byBwcm9ibGVtcyBpbiBJRS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZvY3VzKCkge1xuICAgIGlmICghdGhpcy5mb2N1c0VsZW1lbnQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXRpdmUgYmx1cmluZyBpbiB0aGUgaG9zdCBlbGVtZW50IGRvZXMgbm90aGluZyBiZWNhdXNlIGl0IGRvZXMgbm90IGhhdmUgdGhlIGZvY3VzLlxuICAgKiBJbiBjaHJvbWUgaXQgd29ya3MsIGJ1dCBub3QgaW4gRkYuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgfVxuXG4gIF9kaXNhYmxlZENoYW5nZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmZvY3VzRWxlbWVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdGhpcy50YWJpbmRleDtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9wcmV2aW91c1RhYkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gdGhpcy5fcHJldmlvdXNUYWJJbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX3RhYmluZGV4Q2hhbmdlZCh0YWJpbmRleCkge1xuICAgIGlmICh0YWJpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC50YWJJbmRleCA9IHRhYmluZGV4O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMudGFiaW5kZXgpIHtcbiAgICAgIC8vIElmIHRhYmluZGV4IGF0dHJpYnV0ZSB3YXMgY2hhbmdlZCB3aGlsZSBjaGVja2JveCB3YXMgZGlzYWJsZWRcbiAgICAgIGlmICh0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdGhpcy50YWJpbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiaW5kZXggPSB0YWJpbmRleCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlNoYWR5RE9NKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe3RhYkluZGV4OiB0YWJpbmRleCwgdGFiaW5kZXg6IHRhYmluZGV4fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNsaWNrKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgc3VwZXIuY2xpY2soKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5leHBvcnQgY29uc3QgRGF0ZVBpY2tlckhlbHBlciA9IGNsYXNzIFZhYWRpbkRhdGVQaWNrZXJIZWxwZXIge1xuICAvKipcbiAgICogR2V0IElTTyA4NjAxIHdlZWsgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBEYXRlIG9iamVjdFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFdlZWsgbnVtYmVyXG4gICAqL1xuICBzdGF0aWMgX2dldElTT1dlZWtOdW1iZXIoZGF0ZSkge1xuICAgIC8vIFBvcnRlZCBmcm9tIFZhYWRpbiBGcmFtZXdvcmsgbWV0aG9kIGNvbS52YWFkaW4uY2xpZW50LkRhdGVUaW1lU2VydmljZS5nZXRJU09XZWVrTnVtYmVyKGRhdGUpXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vIDAgPT0gc3VuZGF5XG5cbiAgICAvLyBJU08gODYwMSB1c2Ugd2Vla3MgdGhhdCBzdGFydCBvbiBtb25kYXkgc28gd2UgdXNlXG4gICAgLy8gbW9uPTEsdHVlPTIsLi4uc3VuPTc7XG4gICAgaWYgKGRheU9mV2VlayA9PT0gMCkge1xuICAgICAgZGF5T2ZXZWVrID0gNztcbiAgICB9XG4gICAgLy8gRmluZCBuZWFyZXN0IHRodXJzZGF5IChkZWZpbmVzIHRoZSB3ZWVrIGluIElTTyA4NjAxKS4gVGhlIHdlZWsgbnVtYmVyXG4gICAgLy8gZm9yIHRoZSBuZWFyZXN0IHRodXJzZGF5IGlzIHRoZSBzYW1lIGFzIGZvciB0aGUgdGFyZ2V0IGRhdGUuXG4gICAgdmFyIG5lYXJlc3RUaHVyc2RheURpZmYgPSA0IC0gZGF5T2ZXZWVrOyAvLyA0IGlzIHRodXJzZGF5XG4gICAgdmFyIG5lYXJlc3RUaHVyc2RheSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgbmVhcmVzdFRodXJzZGF5RGlmZiAqIDI0ICogMzYwMCAqIDEwMDApO1xuXG4gICAgdmFyIGZpcnN0T2ZKYW51YXJ5ID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZmlyc3RPZkphbnVhcnkuc2V0RnVsbFllYXIobmVhcmVzdFRodXJzZGF5LmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgdmFyIHRpbWVEaWZmID0gbmVhcmVzdFRodXJzZGF5LmdldFRpbWUoKSAtIGZpcnN0T2ZKYW51YXJ5LmdldFRpbWUoKTtcblxuICAgIC8vIFJvdW5kaW5nIHRoZSByZXN1bHQsIGFzIHRoZSBkaXZpc2lvbiBkb2Vzbid0IHJlc3VsdCBpbiBhbiBpbnRlZ2VyXG4gICAgLy8gd2hlbiB0aGUgZ2l2ZW4gZGF0ZSBpcyBpbnNpZGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgcGVyaW9kLlxuICAgIHZhciBkYXlzU2luY2VGaXJzdE9mSmFudWFyeSA9IE1hdGgucm91bmQodGltZURpZmYgLyAoMjQgKiAzNjAwICogMTAwMCkpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKGRheXNTaW5jZUZpcnN0T2ZKYW51YXJ5KSAvIDcgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gZGF0ZXMgYXJlIGVxdWFsLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUxXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2l2ZW4gZGF0ZSBvYmplY3RzIHJlZmVyIHRvIHRoZSBzYW1lIGRhdGVcbiAgICovXG4gIHN0YXRpYyBfZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gZGF0ZTEgaW5zdGFuY2VvZiBEYXRlICYmIGRhdGUyIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICBkYXRlMS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgIGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZGF0ZTEuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGRhdGUgaXMgaW4gdGhlIHJhbmdlIG9mIGFsbG93ZWQgZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byBjaGVja1xuICAgKiBAcGFyYW0ge0RhdGV9IG1pbiBSYW5nZSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGV9IG1heCBSYW5nZSBlbmRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgZGF0ZSBpcyBpbiB0aGUgcmFuZ2VcbiAgICovXG4gIHN0YXRpYyBfZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gKCFtaW4gfHwgZGF0ZSA+PSBtaW4pICYmICghbWF4IHx8IGRhdGUgPD0gbWF4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBkYXRlIGZyb20gYXJyYXkgb2YgZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byBjb21wYXJlIGRhdGVzIHdpdGhcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0ZXMgQXJyYXkgb2YgZGF0ZSBvYmplY3RzXG4gICAqIEByZXR1cm4ge0RhdGV9IENsb3Nlc3QgZGF0ZVxuICAgKi9cbiAgc3RhdGljIF9nZXRDbG9zZXN0RGF0ZShkYXRlLCBkYXRlcykge1xuICAgIHJldHVybiBkYXRlcy5maWx0ZXIoZGF0ZSA9PiBkYXRlICE9PSB1bmRlZmluZWQpXG4gICAgICAucmVkdWNlKChjbG9zZXN0RGF0ZSwgY2FuZGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb3Nlc3REYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbG9zZXN0RGF0ZSkge1xuICAgICAgICAgIHJldHVybiBjYW5kaWRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FuZGlkYXRlRGlmZiA9IE1hdGguYWJzKGRhdGUuZ2V0VGltZSgpIC0gY2FuZGlkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIHZhciBjbG9zZXN0RGF0ZURpZmYgPSBNYXRoLmFicyhjbG9zZXN0RGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVEaWZmIDwgY2xvc2VzdERhdGVEaWZmID8gY2FuZGlkYXRlIDogY2xvc2VzdERhdGU7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgYmFzaWMgY29tcG9uZW50IHBhcnRzIG9mIGEgZGF0ZSAoZGF5LCBtb250aCBhbmQgeWVhcilcbiAgICogdG8gdGhlIGV4cGVjdGVkIGZvcm1hdC5cbiAgICovXG4gIHN0YXRpYyBfZXh0cmFjdERhdGVQYXJ0cyhkYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IElyb25BMTF5S2V5c0JlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySGVscGVyIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3MuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IERhdGVQaWNrZXJNaXhpbiA9IHN1YmNsYXNzID0+IGNsYXNzIFZhYWRpbkRhdGVQaWNrZXJNaXhpbiBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSwgc3ViY2xhc3Ncbikge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY3VycmVudCBzZWxlY3RlZCBkYXRlLlxuICAgICAgICovXG4gICAgICBfc2VsZWN0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGVcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c2VkRGF0ZTogRGF0ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqXG4gICAgICAgKiBTdXBwb3J0ZWQgZGF0ZSBmb3JtYXRzOlxuICAgICAgICogLSBJU08gODYwMSBgXCJZWVlZLU1NLUREXCJgIChkZWZhdWx0KVxuICAgICAgICogLSA2LWRpZ2l0IGV4dGVuZGVkIElTTyA4NjAxIGBcIitZWVlZWVktTU0tRERcImAsIGBcIi1ZWVlZWVktTU0tRERcImBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHdoaWNoIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhlIHNhbWUgZGF0ZSBmb3JtYXRzIGFzIGZvciB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBhcmUgc3VwcG9ydGVkLlxuICAgICAgICovXG4gICAgICBpbml0aWFsUG9zaXRpb246IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGFiZWwgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdHJ1ZSB0byBvcGVuIHRoZSBkYXRlIHNlbGVjdG9yIG92ZXJsYXkuXG4gICAgICAgKi9cbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRydWUgdG8gZGlzcGxheSBJU08tODYwMSB3ZWVrIG51bWJlcnMgaW4gdGhlIGNhbGVuZGFyLiBOb3RpY2UgdGhhdFxuICAgICAgICogZGlzcGxheWluZyB3ZWVrIG51bWJlcnMgaXMgb25seSBzdXBwb3J0ZWQgd2hlbiBgaTE4bi5maXJzdERheU9mV2Vla2BcbiAgICAgICAqIGlzIDEgKE1vbmRheSkuXG4gICAgICAgKi9cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfZnVsbHNjcmVlbjoge1xuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiAnX2Z1bGxzY3JlZW5DaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX2Z1bGxzY3JlZW5NZWRpYVF1ZXJ5OiB7XG4gICAgICAgIHZhbHVlOiAnKG1heC13aWR0aDogNDIwcHgpLCAobWF4LWhlaWdodDogNDIwcHgpJ1xuICAgICAgfSxcblxuICAgICAgLy8gQW4gYXJyYXkgb2YgYW5jZXN0b3IgZWxlbWVudHMgd2hvc2UgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcgaXMgZm9yY2VkIGZyb20gdmFsdWVcbiAgICAgIC8vICd0b3VjaCcgdG8gdmFsdWUgJ2F1dG8nIGluIG9yZGVyIHRvIHByZXZlbnQgdGhlbSBmcm9tIGNsaXBwaW5nIHRoZSBkcm9wZG93bi4gaU9TIG9ubHkuXG4gICAgICBfdG91Y2hQcmV2ZW50ZWQ6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvYmplY3QgdXNlZCB0byBsb2NhbGl6ZSB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAqIFRvIGNoYW5nZSB0aGUgZGVmYXVsdCBsb2NhbGl6YXRpb24sIHJlcGxhY2UgdGhlIGVudGlyZVxuICAgICAgICogX2kxOG5fIG9iamVjdCBvciBqdXN0IHRoZSBwcm9wZXJ0eSB5b3Ugd2FudCB0byBtb2RpZnkuXG4gICAgICAgKlxuICAgICAgICogVGhlIG9iamVjdCBoYXMgdGhlIGZvbGxvd2luZyBKU09OIHN0cnVjdHVyZSBhbmQgZGVmYXVsdCB2YWx1ZXM6XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSB3aXRoIHRoZSBmdWxsIG5hbWVzIG9mIG1vbnRocyBzdGFydGluZ1xuICAgICAgICAgICAgLy8gd2l0aCBKYW51YXJ5LlxuICAgICAgICAgICAgbW9udGhOYW1lczogW1xuICAgICAgICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLFxuICAgICAgICAgICAgICAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLFxuICAgICAgICAgICAgICAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHdlZWtkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXkuIFVzZWRcbiAgICAgICAgICAgIC8vIGluIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VtZW50cy5cbiAgICAgICAgICAgIHdlZWtkYXlzOiBbXG4gICAgICAgICAgICAgICdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSdcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHNob3J0IHdlZWtkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXkuXG4gICAgICAgICAgICAvLyBEaXNwbGF5ZWQgaW4gdGhlIGNhbGVuZGFyLlxuICAgICAgICAgICAgd2Vla2RheXNTaG9ydDogW1xuICAgICAgICAgICAgICAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J1xuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgLy8gQW4gaW50ZWdlciBpbmRpY2F0aW5nIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIC8vICgwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuKS5cbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxuXG4gICAgICAgICAgICAvLyBVc2VkIGluIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VtZW50cyBhbG9uZyB3aXRoIHdlZWtcbiAgICAgICAgICAgIC8vIG51bWJlcnMsIGlmIHRoZXkgYXJlIGRpc3BsYXllZC5cbiAgICAgICAgICAgIHdlZWs6ICdXZWVrJyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIENhbGVuZGFyIGljb24gYnV0dG9uIHRpdGxlLlxuICAgICAgICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcicsXG5cbiAgICAgICAgICAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBDbGVhciBpY29uIGJ1dHRvbiB0aXRsZS5cbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuXG4gICAgICAgICAgICAvLyBUcmFuc2xhdGlvbiBvZiB0aGUgVG9kYXkgc2hvcnRjdXQgYnV0dG9uIHRleHQuXG4gICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIENhbmNlbCBidXR0b24gdGV4dC5cbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gZm9ybWF0IGdpdmVuIGBPYmplY3RgIGFzXG4gICAgICAgICAgICAvLyBkYXRlIHN0cmluZy4gT2JqZWN0IGlzIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YFxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGFyZ3VtZW50IG1vbnRoIGlzIDAtYmFzZWQuIFRoaXMgbWVhbnMgdGhhdCBKYW51YXJ5ID0gMCBhbmQgRGVjZW1iZXIgPSAxMS5cbiAgICAgICAgICAgIGZvcm1hdERhdGU6IGQgPT4ge1xuICAgICAgICAgICAgICAvLyByZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlblxuICAgICAgICAgICAgICAvLyBvYmplY3QgaW4gJ01NL0REL1lZWVknIC1mb3JtYXRcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIGdpdmVuIHRleHQgdG8gYW4gYE9iamVjdGAgaW4gdGhlIGZvcm1hdCBgeyBkYXk6IC4uLiwgbW9udGg6IC4uLiwgeWVhcjogLi4uIH1gLlxuICAgICAgICAgICAgLy8gTXVzdCBwcm9wZXJseSBwYXJzZSAoYXQgbGVhc3QpIHRleHQgZm9ybWF0dGVkIGJ5IGBmb3JtYXREYXRlYC5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHByb3BlcnR5IHRvIG51bGwgd2lsbCBkaXNhYmxlIGtleWJvYXJkIGlucHV0IGZlYXR1cmUuXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJndW1lbnQgbW9udGggaXMgMC1iYXNlZC4gVGhpcyBtZWFucyB0aGF0IEphbnVhcnkgPSAwIGFuZCBEZWNlbWJlciA9IDExLlxuICAgICAgICAgICAgcGFyc2VEYXRlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgLy8gUGFyc2VzIGEgc3RyaW5nIGluICdNTS9ERC9ZWScsICdNTS9ERCcgb3IgJ0REJyAtZm9ybWF0IHRvXG4gICAgICAgICAgICAgIC8vIGFuIGBPYmplY3RgIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSBmdW5jdGlvbiB0byBmb3JtYXQgZ2l2ZW4gYG1vbnRoTmFtZWAgYW5kXG4gICAgICAgICAgICAvLyBgZnVsbFllYXJgIGludGVnZXIgYXMgY2FsZW5kYXIgdGl0bGUgc3RyaW5nLlxuICAgICAgICAgICAgZm9ybWF0VGl0bGU6IChtb250aE5hbWUsIGZ1bGxZZWFyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBtb250aE5hbWUgKyAnICcgKyBmdWxsWWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAqXG4gICAgICAgKiBAZGVmYXVsdCB7RW5nbGlzaC9VU31cbiAgICAgICAqL1xuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JyxcbiAgICAgICAgICAgICAgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2Vla2RheXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogMCxcbiAgICAgICAgICAgIHdlZWs6ICdXZWVrJyxcbiAgICAgICAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxuICAgICAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBmb3JtYXREYXRlOiBkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IFN0cmluZyhkLnllYXIpLnJlcGxhY2UoL1xcZCsvLCB5ID0+ICcwMDAwJy5zdWJzdHIoeS5sZW5ndGgpICsgeSk7XG4gICAgICAgICAgICAgIHJldHVybiBbZC5tb250aCArIDEsIGQuZGF5LCB5ZWFyU3RyXS5qb2luKCcvJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2VEYXRlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0ZXh0LnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgbGV0IGRhdGUsIG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSwgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHllYXIgPSBwYXJzZUludChwYXJ0c1syXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzWzJdLmxlbmd0aCA8IDMgJiYgeWVhciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICB5ZWFyICs9IHllYXIgPCA1MCA/IDIwMDAgOiAxOTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHBhcnRzWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHBhcnRzWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ZGF5OiBkYXRlLCBtb250aCwgeWVhcn07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXRUaXRsZTogKG1vbnRoTmFtZSwgZnVsbFllYXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoTmFtZSArICcgJyArIGZ1bGxZZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKlxuICAgICAgICogU3VwcG9ydGVkIGRhdGUgZm9ybWF0czpcbiAgICAgICAqIC0gSVNPIDg2MDEgYFwiWVlZWS1NTS1ERFwiYCAoZGVmYXVsdClcbiAgICAgICAqIC0gNi1kaWdpdCBleHRlbmRlZCBJU08gODYwMSBgXCIrWVlZWVlZLU1NLUREXCJgLCBgXCItWVlZWVlZLU1NLUREXCJgXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbWluQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqXG4gICAgICAgKiBTdXBwb3J0ZWQgZGF0ZSBmb3JtYXRzOlxuICAgICAgICogLSBJU08gODYwMSBgXCJZWVlZLU1NLUREXCJgIChkZWZhdWx0KVxuICAgICAgICogLSA2LWRpZ2l0IGV4dGVuZGVkIElTTyA4NjAxIGBcIitZWVlZWVktTU0tRERcImAsIGBcIi1ZWVlZWVktTU0tRERcImBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ19tYXhDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGVhcmxpZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgX21pbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgLy8gbnVsbCBkb2VzIG5vdCB3b3JrIGhlcmUgYmVjYXVzZSBtaW5pbWl6ZXIgcGFzc2VzIHVuZGVmaW5lZCB0byBvdmVybGF5ICgjMzUxKVxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgX21heERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICBfbm9JbnB1dDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ19pc05vSW5wdXQoX2Z1bGxzY3JlZW4sIF9pb3MsIGkxOG4sIGkxOG4uKiknXG4gICAgICB9LFxuXG4gICAgICBfaW9zOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUCg/OmhvbmV8YWQ7KD86IFU7KT8gQ1BVKSBPUyAoXFxkKykvKVxuICAgICAgfSxcblxuICAgICAgX3dlYmtpdE92ZXJmbG93U2Nyb2xsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJydcbiAgICAgIH0sXG5cbiAgICAgIF9pZ25vcmVBbm5vdW5jZToge1xuICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2ZvY3VzT3ZlcmxheU9uT3BlbjogQm9vbGVhbixcblxuICAgICAgX292ZXJsYXlJbml0aWFsaXplZDogQm9vbGVhblxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ191cGRhdGVIYXNWYWx1ZSh2YWx1ZSknLFxuICAgICAgJ192YWxpZGF0ZUlucHV0KF9zZWxlY3RlZERhdGUsIF9taW5EYXRlLCBfbWF4RGF0ZSknLFxuICAgICAgJ19zZWxlY3RlZERhdGVDaGFuZ2VkKF9zZWxlY3RlZERhdGUsIGkxOG4uZm9ybWF0RGF0ZSknLFxuICAgICAgJ19mb2N1c2VkRGF0ZUNoYW5nZWQoX2ZvY3VzZWREYXRlLCBpMThuLmZvcm1hdERhdGUpJyxcbiAgICAgICdfYW5ub3VuY2VGb2N1c2VkRGF0ZShfZm9jdXNlZERhdGUsIG9wZW5lZCwgX2lnbm9yZUFubm91bmNlKSdcbiAgICBdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9ib3VuZE9uU2Nyb2xsID0gdGhpcy5fb25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEZvY3VzID0gdGhpcy5fZm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uID0gdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICBhZGRMaXN0ZW5lcih0aGlzLCAndGFwJywgdGhpcy5vcGVuKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5fcHJldmVudERlZmF1bHQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vblVzZXJJbnB1dC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZSA9PiB0aGlzLl9ub0lucHV0ICYmIGUudGFyZ2V0LmJsdXIoKSk7XG4gIH1cblxuICBfaW5pdE92ZXJsYXkoKSB7XG4gICAgdGhpcy4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlLXVwZ3JhZGUnKTtcbiAgICB0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmVkLWNoYW5nZWQnLCBlID0+IHRoaXMub3BlbmVkID0gZS5kZXRhaWwudmFsdWUpO1xuXG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLl9jbG9zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cy1pbnB1dCcsIHRoaXMuX2ZvY3VzQW5kU2VsZWN0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LWVzY2FwZS1wcmVzcycsIHRoaXMuX2JvdW5kRm9jdXMpO1xuXG4gICAgLy8gS2VlcCBmb2N1cyBhdHRyaWJ1dGUgaW4gZm9jdXNFbGVtZW50IGZvciBzdHlsaW5nXG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB0aGlzLmZvY3VzRWxlbWVudC5fc2V0Rm9jdXNlZCh0cnVlKSk7XG5cbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tb3ZlcmxheS1jbG9zZScsIHRoaXMuX29uVmFhZGluT3ZlcmxheUNsb3NlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCd2YWFkaW4tb3ZlcmxheS1lc2NhcGUtcHJlc3MnLCB0aGlzLl9ib3VuZEZvY3VzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkcm9wZG93bi5cbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2Nsb3NlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXMoKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBkcm9wZG93bi5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IF9pbnB1dEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0KCk7XG4gIH1cblxuICBnZXQgX25hdGl2ZUlucHV0KCkge1xuICAgIGlmICh0aGlzLl9pbnB1dEVsZW1lbnQpIHtcbiAgICAgIC8vIHZhYWRpbi10ZXh0LWZpZWxkJ3MgaW5wdXQgaXMgZm9jdXNFbGVtZW50XG4gICAgICAvLyBpcm9uLWlucHV0J3MgaW5wdXQgaXMgaW5wdXRFbGVtZW50XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50LmZvY3VzRWxlbWVudCA/IHRoaXMuX2lucHV0RWxlbWVudC5mb2N1c0VsZW1lbnQgOlxuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnQuaW5wdXRFbGVtZW50ID8gdGhpcy5faW5wdXRFbGVtZW50LmlucHV0RWxlbWVudCA6XG4gICAgICAgICAgd2luZG93LnVud3JhcCA/IHdpbmRvdy51bndyYXAodGhpcy5faW5wdXRFbGVtZW50KSA6IHRoaXMuX2lucHV0RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBfcGFyc2VEYXRlKHN0cikge1xuICAgIC8vIFBhcnNpbmcgd2l0aCBSZWdFeHAgdG8gZW5zdXJlIGNvcnJlY3QgZm9ybWF0XG4gICAgdmFyIHBhcnRzID0gL14oWy0rXVxcZHsxfXxcXGR7Miw0fXxbLStdXFxkezZ9KS0oXFxkezEsMn0pLShcXGR7MSwyfSkkLy5leGVjKHN0cik7XG4gICAgaWYgKCFwYXJ0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCwgMCk7IC8vIFdyb25nIGRhdGUgKDE5MDAtMDEtMDEpLCBidXQgd2l0aCBtaWRuaWdodCBpbiBsb2NhbCB0aW1lXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihwYXJzZUludChwYXJ0c1sxXSwgMTApKTtcbiAgICBkYXRlLnNldE1vbnRoKHBhcnNlSW50KHBhcnRzWzJdLCAxMCkgLSAxKTtcbiAgICBkYXRlLnNldERhdGUocGFyc2VJbnQocGFydHNbM10sIDEwKSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBfaXNOb0lucHV0KGZ1bGxzY3JlZW4sIGlvcywgaTE4bikge1xuICAgIHJldHVybiAhdGhpcy5faW5wdXRFbGVtZW50IHx8IGZ1bGxzY3JlZW4gfHwgaW9zIHx8ICFpMThuLnBhcnNlRGF0ZTtcbiAgfVxuXG4gIF9mb3JtYXRJU08oZGF0ZSkge1xuICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZCA9IChudW0sIGZtdCA9ICcwMCcpID0+IChmbXQgKyBudW0pLnN1YnN0cigoZm10ICsgbnVtKS5sZW5ndGggLSBmbXQubGVuZ3RoKTtcblxuICAgIGxldCB5ZWFyU2lnbiA9ICcnO1xuICAgIGxldCB5ZWFyRm10ID0gJzAwMDAnO1xuICAgIGxldCB5ZWFyQWJzID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmICh5ZWFyQWJzIDwgMCkge1xuICAgICAgeWVhckFicyA9IC15ZWFyQWJzO1xuICAgICAgeWVhclNpZ24gPSAnLSc7XG4gICAgICB5ZWFyRm10ID0gJzAwMDAwMCc7XG4gICAgfSBlbHNlIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPj0gMTAwMDApIHtcbiAgICAgIHllYXJTaWduID0gJysnO1xuICAgICAgeWVhckZtdCA9ICcwMDAwMDAnO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXIgPSB5ZWFyU2lnbiArIHBhZCh5ZWFyQWJzLCB5ZWFyRm10KTtcbiAgICBjb25zdCBtb250aCA9IHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zdCBkYXkgPSBwYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQob3BlbmVkKSB7XG4gICAgaWYgKG9wZW5lZCAmJiAhdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9pbml0T3ZlcmxheSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5vcGVuZWQgPSBvcGVuZWQ7XG4gICAgfVxuICAgIGlmIChvcGVuZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGVkRGF0ZUNoYW5nZWQoc2VsZWN0ZWREYXRlLCBmb3JtYXREYXRlKSB7XG4gICAgaWYgKHNlbGVjdGVkRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGZvcm1hdERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3VzZXJJbnB1dE9jY3VycmVkKSB7XG4gICAgICB0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gc2VsZWN0ZWREYXRlICYmIGZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyhzZWxlY3RlZERhdGUpKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2Zvcm1hdElTTyhzZWxlY3RlZERhdGUpO1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWxpZGF0ZShpbnB1dFZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fX3VzZXJJbnB1dE9jY3VycmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2Rpc3BhdGNoQ2hhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5fZm9jdXNlZERhdGUgPSBzZWxlY3RlZERhdGU7XG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IHNlbGVjdGVkRGF0ZSA/IGlucHV0VmFsdWUgOiAnJztcbiAgfVxuXG4gIF9mb2N1c2VkRGF0ZUNoYW5nZWQoZm9jdXNlZERhdGUsIGZvcm1hdERhdGUpIHtcbiAgICBpZiAoZm9jdXNlZERhdGUgPT09IHVuZGVmaW5lZCB8fCBmb3JtYXREYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX3VzZXJJbnB1dE9jY3VycmVkID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlICYmICF0aGlzLl9ub0lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dFZhbHVlID0gZm9jdXNlZERhdGUgPyBmb3JtYXREYXRlKERhdGVQaWNrZXJIZWxwZXIuX2V4dHJhY3REYXRlUGFydHMoZm9jdXNlZERhdGUpKSA6ICcnO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVIYXNWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hhcy12YWx1ZScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2hhcy12YWx1ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVEYXRlQ2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRlID0gdGhpcy5fcGFyc2VEYXRlKHZhbHVlKTtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKHRoaXNbcHJvcGVydHldLCBkYXRlKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eV0gPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIF92YWx1ZUNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19kaXNwYXRjaENoYW5nZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgfVxuICAgIHRoaXMuX2hhbmRsZURhdGVDaGFuZ2UoJ19zZWxlY3RlZERhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX21pbkNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5faGFuZGxlRGF0ZUNoYW5nZSgnX21pbkRhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX21heENoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5faGFuZGxlRGF0ZUNoYW5nZSgnX21heERhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKCkge1xuICAgIGlmICghdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZnVsbHNjcmVlbikge1xuICAgICAgY29uc3QgaW5wdXRSZWN0ID0gdGhpcy5faW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBib3R0b21BbGlnbiA9IGlucHV0UmVjdC50b3AgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgY29uc3QgcmlnaHRBbGlnbiA9IGlucHV0UmVjdC5sZWZ0ICsgdGhpcy5jbGllbnRXaWR0aCAvIDIgPiB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG5cbiAgICAgIGlmIChyaWdodEFsaWduKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdyaWdodC1hbGlnbmVkJywgJycpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yaWdodCA9ICh2aWV3cG9ydFdpZHRoIC0gaW5wdXRSZWN0LnJpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLmxlZnQgPSBpbnB1dFJlY3QubGVmdCArICdweCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3R0b21BbGlnbikge1xuICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnYm90dG9tLWFsaWduZWQnLCAnJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUuYm90dG9tID0gKHZpZXdwb3J0SGVpZ2h0IC0gaW5wdXRSZWN0LnRvcCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdib3R0b20tYWxpZ25lZCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm90dG9tJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnRvcCA9IGlucHV0UmVjdC5ib3R0b20gKyAncHgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnZGlyJyxcbiAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5faW5wdXRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKVxuICAgICk7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9mdWxsc2NyZWVuQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfb25PdmVybGF5T3BlbmVkKCkge1xuICAgIHRoaXMuX29wZW5lZFdpdGhGb2N1c1JpbmcgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXMtcmluZycpIHx8ICh0aGlzLmZvY3VzRWxlbWVudCAmJiB0aGlzLmZvY3VzRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSk7XG5cbiAgICB2YXIgcGFyc2VkSW5pdGlhbFBvc2l0aW9uID0gdGhpcy5fcGFyc2VEYXRlKHRoaXMuaW5pdGlhbFBvc2l0aW9uKTtcblxuICAgIHZhciBpbml0aWFsUG9zaXRpb24gPSB0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uIHx8XG4gICAgICBwYXJzZWRJbml0aWFsUG9zaXRpb24gfHwgbmV3IERhdGUoKTtcblxuICAgIGlmIChwYXJzZWRJbml0aWFsUG9zaXRpb24gfHxcbiAgICAgIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGluaXRpYWxQb3NpdGlvbiwgdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uID1cbiAgICAgICAgRGF0ZVBpY2tlckhlbHBlci5fZ2V0Q2xvc2VzdERhdGUoaW5pdGlhbFBvc2l0aW9uLCBbdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZV0pO1xuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlDb250ZW50LnNjcm9sbFRvRGF0ZSh0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSB8fCB0aGlzLl9vdmVybGF5Q29udGVudC5pbml0aWFsUG9zaXRpb24pO1xuICAgIC8vIEhhdmUgYSBkZWZhdWx0IGZvY3VzZWQgZGF0ZVxuICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSA9IHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzZWREYXRlIHx8IHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbjtcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kT25TY3JvbGwsIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl93ZWJraXRPdmVyZmxvd1Njcm9sbCkge1xuICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQgPSB0aGlzLl9wcmV2ZW50V2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdUb3VjaCh0aGlzLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4pIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbm9JbnB1dCAmJiB0aGlzLmZvY3VzRWxlbWVudCkge1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG5cbiAgICB0aGlzLl9pZ25vcmVBbm5vdW5jZSA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQSBoYWNrIG5lZWRlZCBmb3IgaU9TIHRvIHByZXZlbnQgZHJvcGRvd24gZnJvbSBiZWluZyBjbGlwcGVkIGluIGFuXG4gIC8vIGFuY2VzdG9yIGNvbnRhaW5lciB3aXRoIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgX3ByZXZlbnRXZWJraXRPdmVyZmxvd1Njcm9sbGluZ1RvdWNoKGVsZW1lbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJ3RvdWNoJykge1xuICAgICAgICB2YXIgb2xkSW5saW5lVmFsdWUgPSBlbGVtZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nO1xuICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gJ2F1dG8nO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBvbGRJbmxpbmVWYWx1ZTogb2xkSW5saW5lVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX29uT3ZlcmxheUNsb3NlZCgpIHtcbiAgICB0aGlzLl9pZ25vcmVBbm5vdW5jZSA9IHRydWU7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRPblNjcm9sbCwgdHJ1ZSk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kVXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24pO1xuXG4gICAgaWYgKHRoaXMuX3RvdWNoUHJldmVudGVkKSB7XG4gICAgICB0aGlzLl90b3VjaFByZXZlbnRlZC5mb3JFYWNoKHByZXZlbnRlZCA9PlxuICAgICAgICBwcmV2ZW50ZWQuZWxlbWVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IHByZXZlbnRlZC5vbGRJbmxpbmVWYWx1ZSk7XG4gICAgICB0aGlzLl90b3VjaFByZXZlbnRlZCA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG5cbiAgICAvLyBTZWxlY3QgdGhlIHBhcnNlZCBpbnB1dCBvciBmb2N1c2VkIGRhdGVcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IHRydWU7XG4gICAgaWYgKHRoaXMuaTE4bi5wYXJzZURhdGUpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5faW5wdXRWYWx1ZSB8fCAnJztcbiAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSB0aGlzLmkxOG4ucGFyc2VEYXRlKGlucHV0VmFsdWUpO1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRlKGAke2RhdGVPYmplY3QueWVhcn0tJHtkYXRlT2JqZWN0Lm1vbnRoICsgMX0tJHtkYXRlT2JqZWN0LmRheX1gKTtcblxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWREYXRlKHBhcnNlZERhdGUpKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHBhcnNlZERhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvY3VzZWREYXRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9mb2N1c2VkRGF0ZTtcbiAgICB9XG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9uYXRpdmVJbnB1dCAmJiB0aGlzLl9uYXRpdmVJbnB1dC5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgdGhpcy5fbmF0aXZlSW5wdXQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLl9uYXRpdmVJbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWx1ZSB0byB2YWxpZGF0ZS4gT3B0aW9uYWwsIGRlZmF1bHRzIHRvIHVzZXIncyBpbnB1dCB2YWx1ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHlcbiAgICovXG4gIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgLy8gcmVzZXQgaW52YWxpZCBzdGF0ZSBvbiB0aGUgdW5kZXJseWluZyB0ZXh0IGZpZWxkXG4gICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLl9pbnB1dFZhbHVlO1xuICAgIHJldHVybiAhKHRoaXMuaW52YWxpZCA9ICF0aGlzLmNoZWNrVmFsaWRpdHkodmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgc2F0aXNmaWVzIGFsbCBjb25zdHJhaW50cyAoaWYgYW55KVxuICAgKlxuICAgKiBPdmVycmlkZSB0aGUgYGNoZWNrVmFsaWRpdHlgIG1ldGhvZCBmb3IgY3VzdG9tIHZhbGlkYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVmFsdWUgdG8gdmFsaWRhdGUuIE9wdGlvbmFsLCBkZWZhdWx0cyB0byB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWRcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkodmFsdWUpIHtcbiAgICB2YXIgaW5wdXRWYWxpZCA9ICF2YWx1ZSB8fFxuICAgICAgKHRoaXMuX3NlbGVjdGVkRGF0ZSAmJiB2YWx1ZSA9PT0gdGhpcy5pMThuLmZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyh0aGlzLl9zZWxlY3RlZERhdGUpKSk7XG4gICAgdmFyIG1pbk1heFZhbGlkID0gIXRoaXMuX3NlbGVjdGVkRGF0ZSB8fFxuICAgICAgRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUFsbG93ZWQodGhpcy5fc2VsZWN0ZWREYXRlLCB0aGlzLl9taW5EYXRlLCB0aGlzLl9tYXhEYXRlKTtcblxuICAgIHZhciBpbnB1dFZhbGlkaXR5ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgLy8gdmFhZGluIG5hdGl2ZSBpbnB1dCBlbGVtZW50cyBoYXZlIHRoZSBjaGVja1ZhbGlkaXR5IG1ldGhvZFxuICAgICAgICBpbnB1dFZhbGlkaXR5ID0gdGhpcy5faW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgICAgLy8gaXJvbi1mb3JtLWVsZW1lbnRzIGhhdmUgdGhlIHZhbGlkYXRlIEFQSVxuICAgICAgICBpbnB1dFZhbGlkaXR5ID0gdGhpcy5faW5wdXRFbGVtZW50LnZhbGlkYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXRWYWxpZCAmJiBtaW5NYXhWYWxpZCAmJiBpbnB1dFZhbGlkaXR5O1xuICB9XG5cbiAgX29uU2Nyb2xsKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdpbmRvdyB8fCAhdGhpcy5fb3ZlcmxheUNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLl91cGRhdGVBbGlnbm1lbnRBbmRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1cygpIHtcbiAgICBpZiAodGhpcy5fbm9JbnB1dCkge1xuICAgICAgdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1c0FuZFNlbGVjdCgpIHtcbiAgICB0aGlzLl9mb2N1cygpO1xuICAgIHRoaXMuX3NldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuX2lucHV0VmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIF9zZXRTZWxlY3Rpb25SYW5nZShhLCBiKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUlucHV0ICYmIHRoaXMuX25hdGl2ZUlucHV0LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShhLCBiKTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZXlib2FyZCBOYXZpZ2F0aW9uXG4gICAqL1xuICBfZXZlbnRLZXkoZSkge1xuICAgIHZhciBrZXlzID0gWydkb3duJywgJ3VwJywgJ2VudGVyJywgJ2VzYycsICd0YWInXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGsgPSBrZXlzW2ldO1xuICAgICAgaWYgKElyb25BMTF5S2V5c0JlaGF2aW9yLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhlLCBrKSkge1xuICAgICAgICByZXR1cm4gaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaXNWYWxpZERhdGUoZCkge1xuICAgIHJldHVybiBkICYmICFpc05hTihkLmdldFRpbWUoKSk7XG4gIH1cblxuICBfb25LZXlkb3duKGUpIHtcbiAgICBpZiAodGhpcy5fbm9JbnB1dCkge1xuICAgICAgLy8gVGhlIGlucHV0IGVsZW1lbnQgY2Fubm90IGJlIHJlYWRvbmx5IGFzIGl0IHdvdWxkIGNvbmZsaWN0IHdpdGhcbiAgICAgIC8vIHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuIEJvdGggYXJlIG5vdCBhbGxvd2VkIG9uIGFuIGlucHV0IGVsZW1lbnQuXG4gICAgICAvLyBUaGVyZWZvcmUgd2UgcHJldmVudCBkZWZhdWx0IG9uIG1vc3Qga2V5ZG93biBldmVudHMuXG4gICAgICB2YXIgYWxsb3dlZEtleXMgPSBbXG4gICAgICAgIDkgLy8gdGFiXG4gICAgICBdO1xuICAgICAgaWYgKGFsbG93ZWRLZXlzLmluZGV4T2YoZS5rZXlDb2RlKSA9PT0gLTEpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAodGhpcy5fZXZlbnRLZXkoZSkpIHtcbiAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgY2FzZSAndXAnOlxuICAgICAgICAvLyBwcmV2ZW50IHNjcm9sbGluZyB0aGUgcGFnZSB3aXRoIGFycm93c1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXMoKTtcbiAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5fb25LZXlkb3duKGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzT3ZlcmxheU9uT3BlbiA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VudGVyJzoge1xuICAgICAgICBjb25zdCBkYXRlT2JqZWN0ID0gdGhpcy5pMThuLnBhcnNlRGF0ZSh0aGlzLl9pbnB1dFZhbHVlKTtcbiAgICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgICB0aGlzLl9wYXJzZURhdGUoZGF0ZU9iamVjdC55ZWFyICsgJy0nICsgKGRhdGVPYmplY3QubW9udGggKyAxKSArICctJyArIGRhdGVPYmplY3QuZGF5KTtcblxuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNlZERhdGUgJiYgdGhpcy5faXNWYWxpZERhdGUocGFyc2VkRGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgdGhpcy5fZm9jdXNlZERhdGUgPSB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3Rpb24gcmFuZ2UgKHJlbWFpbnMgdmlzaWJsZSBvbiBJRSlcbiAgICAgICAgICB0aGlzLl9zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcbiAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNDYW5jZWwoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LnJldmVhbERhdGUodGhpcy5fZm9jdXNlZERhdGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF92YWxpZGF0ZUlucHV0KGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKGRhdGUgJiYgKG1pbiB8fCBtYXgpKSB7XG4gICAgICB0aGlzLmludmFsaWQgPSAhRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpO1xuICAgIH1cbiAgfVxuXG4gIF9vblVzZXJJbnB1dChlKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHRoaXMuX3VzZXJJbnB1dFZhbHVlQ2hhbmdlZCgpO1xuICB9XG5cbiAgX3VzZXJJbnB1dFZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLl9pbnB1dFZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlT2JqZWN0ID0gdGhpcy5pMThuLnBhcnNlRGF0ZSAmJiB0aGlzLmkxOG4ucGFyc2VEYXRlKHRoaXMuX2lucHV0VmFsdWUpO1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRlKGAke2RhdGVPYmplY3QueWVhcn0tJHtkYXRlT2JqZWN0Lm1vbnRoICsgMX0tJHtkYXRlT2JqZWN0LmRheX1gKTtcblxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWREYXRlKHBhcnNlZERhdGUpKSB7XG4gICAgICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKHBhcnNlZERhdGUsIHRoaXMuX2ZvY3VzZWREYXRlKSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzZWREYXRlID0gcGFyc2VkRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hbm5vdW5jZUZvY3VzZWREYXRlKF9mb2N1c2VkRGF0ZSwgb3BlbmVkLCBfaWdub3JlQW5ub3VuY2UpIHtcbiAgICBpZiAob3BlbmVkICYmICFfaWdub3JlQW5ub3VuY2UpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmFubm91bmNlRm9jdXNlZERhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX292ZXJsYXlDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLiQub3ZlcmxheS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGNvbW1pdHMgYSB2YWx1ZSBjaGFuZ2UuXG4gICAqXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IEdlc3R1cmVFdmVudExpc3RlbmVycyB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9nZXN0dXJlLWV2ZW50LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUtleXNCZWhhdmlvciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7IElyb25BMTF5QW5ub3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tYnV0dG9uL3NyYy92YWFkaW4tYnV0dG9uLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wZXJ0eU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzJztcbmltcG9ydCAnLi92YWFkaW4tbW9udGgtY2FsZW5kYXIuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySGVscGVyIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItc3R5bGVzLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lciwgc2V0VG91Y2hBY3Rpb24gfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuLyoqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEYXRlUGlja2VyT3ZlcmxheUNvbnRlbnRFbGVtZW50IGV4dGVuZHNcbiAgVGhlbWFibGVNaXhpbihcbiAgICBUaGVtZVByb3BlcnR5TWl4aW4oXG4gICAgICBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMoUG9seW1lckVsZW1lbnQpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZnVsbHNjcmVlbl0pKSBbcGFydD1cIm92ZXJsYXktaGVhZGVyXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06bm90KFtzaG93Y2xlYXJdKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXVtkZXNrdG9wXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW3llYXJzLXZpc2libGVdKSkgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgfVxuXG4gICAgICAjc2Nyb2xsZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm1vbnRoc1wiXSxcbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQ6IDI3MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyc1tkZXNrdG9wXSBbcGFydD1cIm1vbnRoc1wiXSB7XG4gICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAvKiBDZW50ZXIgdGhlIHllYXIgc2Nyb2xsZXIgcG9zaXRpb24uICovXG4gICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWJ1ZmZlci1vZmZzZXQ6IDUwJTtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyc1tkZXNrdG9wXSBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5hbmltYXRlKSBbcGFydD1cIm1vbnRoc1wiXSxcbiAgICAgIDpob3N0KC5hbmltYXRlKSBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvb2xiYXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJvdmVybGF5LWhlYWRlclwiXTpub3QoW2Rlc2t0b3BdKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuXG4gICAgICAjYW5ub3VuY2VyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMTAwJSk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJhbm5vdW5jZXJcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgIFtbaTE4bi5jYWxlbmRhcl1dXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHBhcnQ9XCJvdmVybGF5LWhlYWRlclwiIG9uLXRvdWNoZW5kPVwiX3ByZXZlbnREZWZhdWx0XCIgZGVza3RvcFxcJD1cIltbX2Rlc2t0b3BNb2RlXV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgIDxkaXYgcGFydD1cImxhYmVsXCI+W1tfZm9ybWF0RGlzcGxheWVkKHNlbGVjdGVkRGF0ZSwgaTE4bi5mb3JtYXREYXRlLCBsYWJlbCldXTwvZGl2PlxuICAgICAgPGRpdiBwYXJ0PVwiY2xlYXItYnV0dG9uXCIgb24tdGFwPVwiX2NsZWFyXCIgc2hvd2NsZWFyXFwkPVwiW1tfc2hvd0NsZWFyKHNlbGVjdGVkRGF0ZSldXVwiPjwvZGl2PlxuICAgICAgPGRpdiBwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiIG9uLXRhcD1cIl9jYW5jZWxcIj48L2Rpdj5cblxuICAgICAgPGRpdiBwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiIGRlc2t0b3BcXCQ9XCJbW19kZXNrdG9wTW9kZV1dXCIgb24tdGFwPVwiX3RvZ2dsZVllYXJTY3JvbGxlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICBbW195ZWFyQWZ0ZXJYTW9udGhzKF92aXNpYmxlTW9udGhJbmRleCldXVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsZXJzXCIgZGVza3RvcFxcJD1cIltbX2Rlc2t0b3BNb2RlXV1cIiBvbi10cmFjaz1cIl90cmFja1wiPlxuICAgICAgPHZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlciBpZD1cIm1vbnRoU2Nyb2xsZXJcIiBvbi1jdXN0b20tc2Nyb2xsPVwiX29uTW9udGhTY3JvbGxcIiBvbi10b3VjaHN0YXJ0PVwiX29uTW9udGhTY3JvbGxUb3VjaFN0YXJ0XCIgYnVmZmVyLXNpemU9XCIzXCIgYWN0aXZlPVwiW1tpbml0aWFsUG9zaXRpb25dXVwiIHBhcnQ9XCJtb250aHNcIj5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDx2YWFkaW4tbW9udGgtY2FsZW5kYXIgaTE4bj1cIltbaTE4bl1dXCIgbW9udGg9XCJbW19kYXRlQWZ0ZXJYTW9udGhzKGluZGV4KV1dXCIgc2VsZWN0ZWQtZGF0ZT1cInt7c2VsZWN0ZWREYXRlfX1cIiBmb2N1c2VkLWRhdGU9XCJbW2ZvY3VzZWREYXRlXV1cIiBpZ25vcmUtdGFwcz1cIltbX2lnbm9yZVRhcHNdXVwiIHNob3ctd2Vlay1udW1iZXJzPVwiW1tzaG93V2Vla051bWJlcnNdXVwiIG1pbi1kYXRlPVwiW1ttaW5EYXRlXV1cIiBtYXgtZGF0ZT1cIltbbWF4RGF0ZV1dXCIgZm9jdXNlZFxcJD1cIltbX2ZvY3VzZWRdXVwiIHBhcnQ9XCJtb250aFwiIHRoZW1lXFwkPVwiW1t0aGVtZV1dXCI+XG4gICAgICAgICAgPC92YWFkaW4tbW9udGgtY2FsZW5kYXI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcj5cbiAgICAgIDx2YWFkaW4taW5maW5pdGUtc2Nyb2xsZXIgaWQ9XCJ5ZWFyU2Nyb2xsZXJcIiBvbi10YXA9XCJfb25ZZWFyVGFwXCIgb24tY3VzdG9tLXNjcm9sbD1cIl9vblllYXJTY3JvbGxcIiBvbi10b3VjaHN0YXJ0PVwiX29uWWVhclNjcm9sbFRvdWNoU3RhcnRcIiBidWZmZXItc2l6ZT1cIjEyXCIgYWN0aXZlPVwiW1tpbml0aWFsUG9zaXRpb25dXVwiIHBhcnQ9XCJ5ZWFyc1wiPlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBwYXJ0PVwieWVhci1udW1iZXJcIiByb2xlPVwiYnV0dG9uXCIgY3VycmVudFxcJD1cIltbX2lzQ3VycmVudFllYXIoaW5kZXgpXV1cIiBzZWxlY3RlZFxcJD1cIltbX2lzU2VsZWN0ZWRZZWFyKGluZGV4LCBzZWxlY3RlZERhdGUpXV1cIj5cbiAgICAgICAgICAgIFtbX3llYXJBZnRlclhZZWFycyhpbmRleCldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgcGFydD1cInllYXItc2VwYXJhdG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgb24tdG91Y2hlbmQ9XCJfcHJldmVudERlZmF1bHRcIiByb2xlPVwidG9vbGJhclwiIHBhcnQ9XCJ0b29sYmFyXCI+XG4gICAgICA8dmFhZGluLWJ1dHRvbiBpZD1cInRvZGF5QnV0dG9uXCIgcGFydD1cInRvZGF5LWJ1dHRvblwiIGRpc2FibGVkPVwiW1shX2lzVG9kYXlBbGxvd2VkKG1pbkRhdGUsIG1heERhdGUpXV1cIiBvbi10YXA9XCJfb25Ub2RheVRhcFwiPlxuICAgICAgICBbW2kxOG4udG9kYXldXVxuICAgICAgPC92YWFkaW4tYnV0dG9uPlxuICAgICAgPHZhYWRpbi1idXR0b24gaWQ9XCJjYW5jZWxCdXR0b25cIiBwYXJ0PVwiY2FuY2VsLWJ1dHRvblwiIG9uLXRhcD1cIl9jYW5jZWxcIj5cbiAgICAgICAgW1tpMThuLmNhbmNlbF1dXG4gICAgICA8L3ZhYWRpbi1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cIihtaW4td2lkdGg6IDM3NXB4KVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e19kZXNrdG9wTW9kZX19XCI+PC9pcm9uLW1lZGlhLXF1ZXJ5PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHZhbHVlIHdoaWNoIGlzIGZvY3VzZWQgdXNpbmcga2V5Ym9hcmQuXG4gICAgICAgKi9cbiAgICAgIGZvY3VzZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZm9jdXNlZERhdGVDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX2ZvY3VzZWRNb250aERhdGU6IE51bWJlcixcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHdoaWNoIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIGluaXRpYWxQb3NpdGlvbjoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBvYnNlcnZlcjogJ19pbml0aWFsUG9zaXRpb25DaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX29yaWdpbkRhdGU6IHtcbiAgICAgICAgdmFsdWU6IG5ldyBEYXRlKClcbiAgICAgIH0sXG5cbiAgICAgIF92aXNpYmxlTW9udGhJbmRleDogTnVtYmVyLFxuXG4gICAgICBfZGVza3RvcE1vZGU6IEJvb2xlYW4sXG5cbiAgICAgIF90cmFuc2xhdGVYOiB7XG4gICAgICAgIG9ic2VydmVyOiAnX3RyYW5zbGF0ZVhDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX3llYXJTY3JvbGxlcldpZHRoOiB7XG4gICAgICAgIHZhbHVlOiA1MFxuICAgICAgfSxcblxuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfaWdub3JlVGFwczogQm9vbGVhbixcblxuICAgICAgX25vdFRhcHBpbmc6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1pbkRhdGU6IERhdGUsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgbWF4RGF0ZTogRGF0ZSxcblxuICAgICAgX2ZvY3VzZWQ6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogSW5wdXQgbGFiZWxcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IFN0cmluZ1xuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICBhZGRMaXN0ZW5lcih0aGlzLCAndGFwJywgdGhpcy5fc3RvcFByb3BhZ2F0aW9uKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25PdmVybGF5Rm9jdXMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25PdmVybGF5Qmx1ci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBzY3JvbGxlciByZWFjaGVzIHRoZSB0YXJnZXQgc2Nyb2xsaW5nIHBvc2l0aW9uLlxuICAgKiBAZXZlbnQgc2Nyb2xsLWFuaW1hdGlvbi1maW5pc2hlZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGV0YWlsLnBvc2l0aW9uIG5ldyBwb3NpdGlvblxuICAgKiBAcGFyYW0ge051bWJlcn0gZGV0YWlsLm9sZFBvc2l0aW9uIG9sZCBwb3NpdGlvblxuICAgKi9cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2Nsb3NlWWVhclNjcm9sbGVyKCk7XG4gICAgdGhpcy5fdG9nZ2xlQW5pbWF0ZUNsYXNzKHRydWUpO1xuICAgIHNldFRvdWNoQWN0aW9uKHRoaXMuJC5zY3JvbGxlcnMsICdwYW4teScpO1xuICAgIElyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgfVxuXG4gIGFubm91bmNlRm9jdXNlZERhdGUoKSB7XG4gICAgdmFyIGZvY3VzZWREYXRlID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcbiAgICB2YXIgYW5ub3VuY2UgPSBbXTtcbiAgICBpZiAoRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhmb2N1c2VkRGF0ZSwgbmV3IERhdGUoKSkpIHtcbiAgICAgIGFubm91bmNlLnB1c2godGhpcy5pMThuLnRvZGF5KTtcbiAgICB9XG4gICAgYW5ub3VuY2UgPSBhbm5vdW5jZS5jb25jYXQoW1xuICAgICAgdGhpcy5pMThuLndlZWtkYXlzW2ZvY3VzZWREYXRlLmdldERheSgpXSxcbiAgICAgIGZvY3VzZWREYXRlLmdldERhdGUoKSxcbiAgICAgIHRoaXMuaTE4bi5tb250aE5hbWVzW2ZvY3VzZWREYXRlLmdldE1vbnRoKCldLFxuICAgICAgZm9jdXNlZERhdGUuZ2V0RnVsbFllYXIoKVxuICAgIF0pO1xuICAgIGlmICh0aGlzLnNob3dXZWVrTnVtYmVycyAmJiB0aGlzLmkxOG4uZmlyc3REYXlPZldlZWsgPT09IDEpIHtcbiAgICAgIGFubm91bmNlLnB1c2godGhpcy5pMThuLndlZWspO1xuICAgICAgYW5ub3VuY2UucHVzaChEYXRlUGlja2VySGVscGVyLl9nZXRJU09XZWVrTnVtYmVyKGZvY3VzZWREYXRlKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2lyb24tYW5ub3VuY2UnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgdGV4dDogYW5ub3VuY2Uuam9pbignICcpXG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAqL1xuICBmb2N1c0NhbmNlbCgpIHtcbiAgICB0aGlzLiQuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgbGlzdCB0byB0aGUgZ2l2ZW4gRGF0ZS5cbiAgICovXG4gIHNjcm9sbFRvRGF0ZShkYXRlLCBhbmltYXRlKSB7XG4gICAgdGhpcy5fc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLl9kaWZmZXJlbmNlSW5Nb250aHMoZGF0ZSwgdGhpcy5fb3JpZ2luRGF0ZSksIGFuaW1hdGUpO1xuICB9XG5cbiAgX2ZvY3VzZWREYXRlQ2hhbmdlZChmb2N1c2VkRGF0ZSkge1xuICAgIHRoaXMucmV2ZWFsRGF0ZShmb2N1c2VkRGF0ZSk7XG4gIH1cblxuICBfaXNDdXJyZW50WWVhcih5ZWFyc0Zyb21Ob3cpIHtcbiAgICByZXR1cm4geWVhcnNGcm9tTm93ID09PSAwO1xuICB9XG5cbiAgX2lzU2VsZWN0ZWRZZWFyKHllYXJzRnJvbU5vdywgc2VsZWN0ZWREYXRlKSB7XG4gICAgaWYgKHNlbGVjdGVkRGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLl9vcmlnaW5EYXRlLmdldEZ1bGxZZWFyKCkgKyB5ZWFyc0Zyb21Ob3c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIG1vbnRoIGFuZCB5ZWFyIHNjcm9sbGVycyBlbm91Z2ggdG8gcmV2ZWFsIHRoZSBnaXZlbiBkYXRlLlxuICAgKi9cbiAgcmV2ZWFsRGF0ZShkYXRlKSB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIHZhciBkaWZmID0gdGhpcy5fZGlmZmVyZW5jZUluTW9udGhzKGRhdGUsIHRoaXMuX29yaWdpbkRhdGUpO1xuICAgICAgdmFyIHNjcm9sbGVkQWJvdmVWaWV3cG9ydCA9IHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID4gZGlmZjtcblxuICAgICAgdmFyIHZpc2libGVJdGVtcyA9IHRoaXMuJC5tb250aFNjcm9sbGVyLmNsaWVudEhlaWdodCAvIHRoaXMuJC5tb250aFNjcm9sbGVyLml0ZW1IZWlnaHQ7XG4gICAgICB2YXIgc2Nyb2xsZWRCZWxvd1ZpZXdwb3J0ID0gdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gKyB2aXNpYmxlSXRlbXMgLSAxIDwgZGlmZjtcblxuICAgICAgaWYgKHNjcm9sbGVkQWJvdmVWaWV3cG9ydCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb1Bvc2l0aW9uKGRpZmYsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxlZEJlbG93Vmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9Qb3NpdGlvbihkaWZmIC0gdmlzaWJsZUl0ZW1zICsgMSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uT3ZlcmxheUZvY3VzKCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgX29uT3ZlcmxheUJsdXIoKSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgX2luaXRpYWxQb3NpdGlvbkNoYW5nZWQoaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zY3JvbGxUb0RhdGUoaW5pdGlhbFBvc2l0aW9uKTtcbiAgfVxuXG4gIF9yZXBvc2l0aW9uWWVhclNjcm9sbGVyKCkge1xuICAgIHRoaXMuX3Zpc2libGVNb250aEluZGV4ID0gTWF0aC5mbG9vcih0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbik7XG4gICAgdGhpcy4kLnllYXJTY3JvbGxlci5wb3NpdGlvbiA9ICh0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiArIHRoaXMuX29yaWdpbkRhdGUuZ2V0TW9udGgoKSkgLyAxMjtcbiAgfVxuXG4gIF9yZXBvc2l0aW9uTW9udGhTY3JvbGxlcigpIHtcbiAgICB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiA9IHRoaXMuJC55ZWFyU2Nyb2xsZXIucG9zaXRpb24gKiAxMiAtIHRoaXMuX29yaWdpbkRhdGUuZ2V0TW9udGgoKTtcbiAgICB0aGlzLl92aXNpYmxlTW9udGhJbmRleCA9IE1hdGguZmxvb3IodGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24pO1xuICB9XG5cbiAgX29uTW9udGhTY3JvbGwoKSB7XG4gICAgdGhpcy5fcmVwb3NpdGlvblllYXJTY3JvbGxlcigpO1xuICAgIHRoaXMuX2RvSWdub3JlVGFwcygpO1xuICB9XG5cbiAgX29uWWVhclNjcm9sbCgpIHtcbiAgICB0aGlzLl9yZXBvc2l0aW9uTW9udGhTY3JvbGxlcigpO1xuICAgIHRoaXMuX2RvSWdub3JlVGFwcygpO1xuICB9XG5cbiAgX29uWWVhclNjcm9sbFRvdWNoU3RhcnQoKSB7XG4gICAgdGhpcy5fbm90VGFwcGluZyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbm90VGFwcGluZyA9IHRydWUsIDMwMCk7XG5cbiAgICB0aGlzLl9yZXBvc2l0aW9uTW9udGhTY3JvbGxlcigpO1xuICB9XG5cbiAgX29uTW9udGhTY3JvbGxUb3VjaFN0YXJ0KCkge1xuICAgIHRoaXMuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9kb0lnbm9yZVRhcHMoKSB7XG4gICAgdGhpcy5faWdub3JlVGFwcyA9IHRydWU7XG4gICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKHRoaXMuX2RlYm91bmNlcixcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMzAwKSwgKCkgPT4gdGhpcy5faWdub3JlVGFwcyA9IGZhbHNlKTtcbiAgfVxuXG4gIF9mb3JtYXREaXNwbGF5ZWQoZGF0ZSwgZm9ybWF0RGF0ZSwgbGFiZWwpIHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyhkYXRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gIH1cblxuICBfb25Ub2RheVRhcCgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uIC0gdGhpcy5fZGlmZmVyZW5jZUluTW9udGhzKHRvZGF5LCB0aGlzLl9vcmlnaW5EYXRlKSkgPCAwLjAwMSkge1xuICAgICAgLy8gU2VsZWN0IHRvZGF5IG9ubHkgaWYgdGhlIG1vbnRoIHNjcm9sbGVyIGlzIHBvc2l0aW9uZWQgYXBwcm94aW1hdGVseVxuICAgICAgLy8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCBtb250aFxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0b2RheTtcbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbFRvQ3VycmVudE1vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgX3Njcm9sbFRvQ3VycmVudE1vbnRoKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWREYXRlKSB7XG4gICAgICB0aGlzLmZvY3VzZWREYXRlID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFRvRGF0ZShuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgfVxuXG4gIF9zaG93Q2xlYXIoc2VsZWN0ZWREYXRlKSB7XG4gICAgcmV0dXJuICEhc2VsZWN0ZWREYXRlO1xuICB9XG5cbiAgX29uWWVhclRhcChlKSB7XG4gICAgaWYgKCF0aGlzLl9pZ25vcmVUYXBzICYmICF0aGlzLl9ub3RUYXBwaW5nKSB7XG4gICAgICB2YXIgc2Nyb2xsRGVsdGEgPSBlLmRldGFpbC55IC0gKHRoaXMuJC55ZWFyU2Nyb2xsZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy4kLnllYXJTY3JvbGxlci5jbGllbnRIZWlnaHQgLyAyKTtcbiAgICAgIHZhciB5ZWFyRGVsdGEgPSBzY3JvbGxEZWx0YSAvIHRoaXMuJC55ZWFyU2Nyb2xsZXIuaXRlbUhlaWdodDtcbiAgICAgIHRoaXMuX3Njcm9sbFRvUG9zaXRpb24odGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gKyB5ZWFyRGVsdGEgKiAxMiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3Njcm9sbFRvUG9zaXRpb24odGFyZ2V0UG9zaXRpb24sIGFuaW1hdGUpIHtcbiAgICBpZiAodGhpcy5fdGFyZ2V0UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgIHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb247XG4gICAgICB0aGlzLl90YXJnZXRQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuXG4gICAgLy8gaHR0cDovL2dpem1hLmNvbS9lYXNpbmcvXG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICAgIHQgLz0gZCAvIDI7XG4gICAgICBpZiAodCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgfVxuICAgICAgdC0tO1xuICAgICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICB9O1xuXG4gICAgdmFyIGR1cmF0aW9uID0gYW5pbWF0ZSA/IDMwMCA6IDA7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgaW5pdGlhbFBvc2l0aW9uID0gdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb247XG5cbiAgICB2YXIgc21vb3RoU2Nyb2xsID0gdGltZXN0YW1wID0+IHtcbiAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgdGltZXN0YW1wO1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGltZXN0YW1wIC0gc3RhcnQ7XG5cbiAgICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gZWFzaW5nRnVuY3Rpb24oY3VycmVudFRpbWUsIGluaXRpYWxQb3NpdGlvbiwgdGhpcy5fdGFyZ2V0UG9zaXRpb24gLSBpbml0aWFsUG9zaXRpb24sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPSBjdXJyZW50UG9zO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aFNjcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzY3JvbGwtYW5pbWF0aW9uLWZpbmlzaGVkJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBvbGRQb3NpdGlvbjogaW5pdGlhbFBvc2l0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPSB0aGlzLl90YXJnZXRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQodGhpcy5fcmVwb3NpdGlvblllYXJTY3JvbGxlci5iaW5kKHRoaXMpLCAxKTtcbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbi5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aFNjcm9sbCk7XG4gIH1cblxuICBfbGltaXQodmFsdWUsIHJhbmdlKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHJhbmdlLm1heCwgTWF0aC5tYXgocmFuZ2UubWluLCB2YWx1ZSkpO1xuICB9XG5cbiAgX2hhbmRsZVRyYWNrKGUpIHtcbiAgICAvLyBDaGVjayBpZiBob3Jpem9udGFsIG1vdmVtZW50IHRocmVzaG9sZCAoZHgpIG5vdCBleGNlZWRlZCBvclxuICAgIC8vIHNjcm9sbGluZyBmYXN0IHZlcnRpY2FsbHkgKGRkeSkuXG4gICAgaWYgKE1hdGguYWJzKGUuZGV0YWlsLmR4KSA8IDEwIHx8IE1hdGguYWJzKGUuZGV0YWlsLmRkeSkgPiAxMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3JlIGZsaW5naW5nIHF1aWNrbHkgLT4gc3RhcnQgYW5pbWF0aW5nIGFscmVhZHkuXG4gICAgaWYgKE1hdGguYWJzKGUuZGV0YWlsLmRkeCkgPiB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aCAvIDMpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUFuaW1hdGVDbGFzcyh0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3VHJhbnNsYXRlWCA9IHRoaXMuX3RyYW5zbGF0ZVggKyBlLmRldGFpbC5kZHg7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IHRoaXMuX2xpbWl0KG5ld1RyYW5zbGF0ZVgsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogdGhpcy5feWVhclNjcm9sbGVyV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIF90cmFjayhlKSB7XG4gICAgaWYgKHRoaXMuX2Rlc2t0b3BNb2RlKSB7XG4gICAgICAvLyBObyBuZWVkIHRvIHRyYWNrIGZvciBzd2lwZSBnZXN0dXJlcyBvbiBkZXNrdG9wLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZS5kZXRhaWwuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgdGhpcy5fdG9nZ2xlQW5pbWF0ZUNsYXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyYWNrJzpcbiAgICAgICAgdGhpcy5faGFuZGxlVHJhY2soZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICB0aGlzLl90b2dnbGVBbmltYXRlQ2xhc3ModHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGVYID49IHRoaXMuX3llYXJTY3JvbGxlcldpZHRoIC8gMikge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlWWVhclNjcm9sbGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb3BlblllYXJTY3JvbGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVBbmltYXRlQ2xhc3MoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5faXNZZWFyU2Nyb2xsZXJWaXNpYmxlKCkgPyB0aGlzLl9jbG9zZVllYXJTY3JvbGxlcigpIDogdGhpcy5fb3BlblllYXJTY3JvbGxlcigpO1xuICB9XG5cbiAgX29wZW5ZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IDA7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3llYXJzLXZpc2libGUnLCAnJyk7XG4gIH1cblxuICBfY2xvc2VZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3llYXJzLXZpc2libGUnKTtcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gdGhpcy5feWVhclNjcm9sbGVyV2lkdGg7XG4gIH1cblxuICBfaXNZZWFyU2Nyb2xsZXJWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGVYIDwgdGhpcy5feWVhclNjcm9sbGVyV2lkdGggLyAyO1xuICB9XG5cbiAgX3RyYW5zbGF0ZVhDaGFuZ2VkKHgpIHtcbiAgICBpZiAoIXRoaXMuX2Rlc2t0b3BNb2RlKSB7XG4gICAgICB0aGlzLiQubW9udGhTY3JvbGxlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKHggLSB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aCkgKyAncHgpJztcbiAgICAgIHRoaXMuJC55ZWFyU2Nyb2xsZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHggKyAncHgpJztcbiAgICB9XG4gIH1cblxuICBfeWVhckFmdGVyWFllYXJzKGluZGV4KSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKHRoaXMuX29yaWdpbkRhdGUpO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihwYXJzZUludChpbmRleCkgKyB0aGlzLl9vcmlnaW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIHJldHVybiByZXN1bHQuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIF95ZWFyQWZ0ZXJYTW9udGhzKG1vbnRocykge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWZ0ZXJYTW9udGhzKG1vbnRocykuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIF9kYXRlQWZ0ZXJYTW9udGhzKG1vbnRocykge1xuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSh0aGlzLl9vcmlnaW5EYXRlKTtcbiAgICByZXN1bHQuc2V0RGF0ZSgxKTtcbiAgICByZXN1bHQuc2V0TW9udGgocGFyc2VJbnQobW9udGhzKSArIHRoaXMuX29yaWdpbkRhdGUuZ2V0TW9udGgoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9kaWZmZXJlbmNlSW5Nb250aHMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgdmFyIG1vbnRocyA9IChkYXRlMS5nZXRGdWxsWWVhcigpIC0gZGF0ZTIuZ2V0RnVsbFllYXIoKSkgKiAxMjtcbiAgICByZXR1cm4gbW9udGhzIC0gZGF0ZTIuZ2V0TW9udGgoKSArIGRhdGUxLmdldE1vbnRoKCk7XG4gIH1cblxuICBfZGlmZmVyZW5jZUluWWVhcnMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpZmZlcmVuY2VJbk1vbnRocyhkYXRlMSwgZGF0ZTIpIC8gMTI7XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSAnJztcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICBjb25zdCBvdmVybGF5Q29udGVudCA9IHRoaXMuZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgIGNvbnN0IG92ZXJsYXkgPSBvdmVybGF5Q29udGVudCA/IG92ZXJsYXlDb250ZW50LmdldFJvb3ROb2RlKCkuaG9zdCA6IG51bGw7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkub3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gIH1cblxuICBfY2FuY2VsKCkge1xuICAgIHRoaXMuZm9jdXNlZERhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICB0aGlzLl9jbG9zZSgpO1xuICB9XG5cbiAgX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogS2V5Ym9hcmQgTmF2aWdhdGlvblxuICAgKi9cbiAgX2V2ZW50S2V5KGUpIHtcbiAgICB2YXIga2V5cyA9IFsnZG93bicsICd1cCcsICdyaWdodCcsICdsZWZ0JywgJ2VudGVyJywgJ3NwYWNlJywgJ2hvbWUnLCAnZW5kJywgJ3BhZ2V1cCcsICdwYWdlZG93bicsICd0YWInLCAnZXNjJ107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrID0ga2V5c1tpXTtcbiAgICAgIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZSwgaykpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uS2V5ZG93bihlKSB7XG4gICAgdmFyIGZvY3VzID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcblxuICAgIC8vIENhbm5vdCB1c2UgKHRvZGF5L2NhbmNlbCkuZm9jdXNlZCBmbGFnIGJlY2F1c2UgdmFhZGluLXRleHQtZmllbGQgcmVtb3ZlcyBpdFxuICAgIC8vIHByZXZpb3VzbHkgaW4gdGhlIGtleWRvd24gZXZlbnQuXG4gICAgY29uc3QgaXNUb2RheSA9IGUuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLiQudG9kYXlCdXR0b24pID49IDA7XG4gICAgY29uc3QgaXNDYW5jZWwgPSBlLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLmNhbmNlbEJ1dHRvbikgPj0gMDtcbiAgICBjb25zdCBpc1Njcm9sbGVyID0gIWlzVG9kYXkgJiYgIWlzQ2FuY2VsO1xuXG4gICAgdmFyIGV2ZW50S2V5ID0gdGhpcy5fZXZlbnRLZXkoZSk7XG4gICAgaWYgKGV2ZW50S2V5ID09PSAndGFiJykge1xuICAgICAgLy8gV2UgaGFuZGxlIHRhYnMgaGVyZSBhbmQgZG9uJ3Qgd2FudCB0byBidWJibGUgdXAuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBjb25zdCBpc0Z1bGxzY3JlZW4gPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZnVsbHNjcmVlbicpO1xuICAgICAgY29uc3QgaXNTaGlmdCA9IGUuc2hpZnRLZXk7XG5cbiAgICAgIGlmIChpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChpc1NoaWZ0ICYmIGlzU2Nyb2xsZXIgfHwgIWlzU2hpZnQgJiYgaXNDYW5jZWwpIHtcbiAgICAgICAgLy8gUmV0dXJuIGZvY3VzIGJhY2sgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZm9jdXMtaW5wdXQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2hpZnQgJiYgaXNUb2RheSkge1xuICAgICAgICAvLyBCcm93c2VyIHJldHVybnMgZm9jdXMgYmFjayB0byB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBXZSBuZWVkIHRvIHNldFxuICAgICAgICAvLyB0aGUgZm9jdXNlZCBmbGFnLCBhbmQgbW92ZSB0aGUgc2Nyb2xsIHRvIGZvY3VzZWQgZGF0ZS5cbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXZlYWxEYXRlKHRoaXMuZm9jdXNlZERhdGUpLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgbW92ZXMgdGhlIGZvY3VzIG91dCBvZiB0aGUgc2Nyb2xsZXIsIGhlbmNlIGZvY3VzZWQgZmxhZyBtdXN0XG4gICAgICAgIC8vIHNldCB0byBmYWxzZS5cbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzd2l0Y2ggKGV2ZW50S2V5KSB7XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5RGF5cyg3KTtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeURheXMoLTcpO1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGlmIChpc1Njcm9sbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeURheXMoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBpZiAoaXNTY3JvbGxlcikge1xuICAgICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlEYXlzKC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICBpZiAoaXNTY3JvbGxlciB8fCBpc0NhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzVG9kYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG9kYXlUYXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NwYWNlJzpcbiAgICAgICAgICBpZiAoaXNDYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1RvZGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9vblRvZGF5VGFwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2VkRGF0ZSA9IHRoaXMuZm9jdXNlZERhdGU7XG4gICAgICAgICAgICBpZiAoRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhmb2N1c2VkRGF0ZSwgdGhpcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gJyc7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZERhdGUgPSBmb2N1c2VkRGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZm9jdXNlZERhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNJbnNpZGVNb250aChmb2N1cywgJ21pbkRhdGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNJbnNpZGVNb250aChmb2N1cywgJ21heERhdGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFnZWRvd24nOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5TW9udGhzKGUuc2hpZnRLZXkgPyAxMiA6IDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYWdldXAnOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5TW9udGhzKGUuc2hpZnRLZXkgPyAtMTIgOiAtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VzYyc6XG4gICAgICAgICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2N1cnJlbnRseUZvY3VzZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWREYXRlIHx8IHRoaXMuc2VsZWN0ZWREYXRlIHx8IHRoaXMuaW5pdGlhbFBvc2l0aW9uIHx8IG5ldyBEYXRlKCk7XG4gIH1cblxuICBfZm9jdXNEYXRlKGRhdGVUb0ZvY3VzKSB7XG4gICAgdGhpcy5mb2N1c2VkRGF0ZSA9IGRhdGVUb0ZvY3VzO1xuICAgIHRoaXMuX2ZvY3VzZWRNb250aERhdGUgPSBkYXRlVG9Gb2N1cy5nZXREYXRlKCk7XG4gIH1cblxuICBfZm9jdXNDbG9zZXN0RGF0ZShmb2N1cykge1xuICAgIHRoaXMuX2ZvY3VzRGF0ZShEYXRlUGlja2VySGVscGVyLl9nZXRDbG9zZXN0RGF0ZShmb2N1cywgW3RoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlXSkpO1xuICB9XG5cbiAgX21vdmVGb2N1c0J5RGF5cyhkYXlzKSB7XG4gICAgdmFyIGZvY3VzID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcbiAgICB2YXIgZGF0ZVRvRm9jdXMgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRGdWxsWWVhcihmb2N1cy5nZXRGdWxsWWVhcigpKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRNb250aChmb2N1cy5nZXRNb250aCgpKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKGZvY3VzLmdldERhdGUoKSArIGRheXMpO1xuXG4gICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGRhdGVUb0ZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRGF0ZShkYXRlVG9Gb2N1cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChmb2N1cywgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICAgIC8vIE1vdmUgdG8gbWluIG9yIG1heCBkYXRlXG4gICAgICAgIGlmIChkYXlzID4gMCkgeyAvLyBkb3duIG9yIHJpZ2h0XG4gICAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXMubWF4RGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIHVwIG9yIGxlZnRcbiAgICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpcy5taW5EYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW92ZSB0byBjbG9zZXN0IGFsbG93ZWQgZGF0ZVxuICAgICAgICB0aGlzLl9mb2N1c0Nsb3Nlc3REYXRlKGZvY3VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUZvY3VzQnlNb250aHMobW9udGhzKSB7XG4gICAgdmFyIGZvY3VzID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcbiAgICB2YXIgZGF0ZVRvRm9jdXMgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRGdWxsWWVhcihmb2N1cy5nZXRGdWxsWWVhcigpKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRNb250aChmb2N1cy5nZXRNb250aCgpICsgbW9udGhzKTtcblxuICAgIHZhciB0YXJnZXRNb250aCA9IGRhdGVUb0ZvY3VzLmdldE1vbnRoKCk7XG5cbiAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKHRoaXMuX2ZvY3VzZWRNb250aERhdGUgfHwgKHRoaXMuX2ZvY3VzZWRNb250aERhdGUgPSBmb2N1cy5nZXREYXRlKCkpKTtcbiAgICBpZiAoZGF0ZVRvRm9jdXMuZ2V0TW9udGgoKSAhPT0gdGFyZ2V0TW9udGgpIHtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldERhdGUoMCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGRhdGVUb0ZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuZm9jdXNlZERhdGUgPSBkYXRlVG9Gb2N1cztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgICAgLy8gTW92ZSB0byBtaW4gb3IgbWF4IGRhdGVcbiAgICAgICAgaWYgKG1vbnRocyA+IDApIHsgLy8gcGFnZWRvd25cbiAgICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpcy5tYXhEYXRlKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gcGFnZXVwXG4gICAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXMubWluRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1vdmUgdG8gY2xvc2VzdCBhbGxvd2VkIGRhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNDbG9zZXN0RGF0ZShmb2N1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVGb2N1c0luc2lkZU1vbnRoKGZvY3VzZWREYXRlLCBwcm9wZXJ0eSkge1xuICAgIHZhciBkYXRlVG9Gb2N1cyA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGRhdGVUb0ZvY3VzLnNldEZ1bGxZZWFyKGZvY3VzZWREYXRlLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgaWYgKHByb3BlcnR5ID09PSAnbWluRGF0ZScpIHtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldE1vbnRoKGZvY3VzZWREYXRlLmdldE1vbnRoKCkpO1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0TW9udGgoZm9jdXNlZERhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZSgwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZGF0ZVRvRm9jdXMsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgdGhpcy5fZm9jdXNEYXRlKGRhdGVUb0ZvY3VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGZvY3VzZWREYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgICAgLy8gTW92ZSB0byBtaW5EYXRlIG9yIG1heERhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXNbcHJvcGVydHldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1vdmUgdG8gY2xvc2VzdCBhbGxvd2VkIGRhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNDbG9zZXN0RGF0ZShmb2N1c2VkRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuICghbWluIHx8IGRhdGUgPj0gbWluKSAmJiAoIW1heCB8fCBkYXRlIDw9IG1heCk7XG4gIH1cblxuICBfaXNUb2RheUFsbG93ZWQobWluLCBtYXgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB0b2RheU1pZG5pZ2h0ID0gbmV3IERhdGUoMCwgMCk7XG4gICAgdG9kYXlNaWRuaWdodC5zZXRGdWxsWWVhcih0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgICB0b2RheU1pZG5pZ2h0LnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkpO1xuICAgIHRvZGF5TWlkbmlnaHQuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWxsb3dlZCh0b2RheU1pZG5pZ2h0LCBtaW4sIG1heCk7XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShEYXRlUGlja2VyT3ZlcmxheUNvbnRlbnRFbGVtZW50LmlzLCBEYXRlUGlja2VyT3ZlcmxheUNvbnRlbnRFbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IE92ZXJsYXlFbGVtZW50IH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tb3ZlcmxheS9zcmMvdmFhZGluLW92ZXJsYXkuanMnO1xuXG5pbXBvcnQgeyBEaXNhYmxlVXBncmFkZU1peGluIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2Rpc2FibGUtdXBncmFkZS1taXhpbi5qcyc7XG4vKipcbiAqIFRoZSBvdmVybGF5IGVsZW1lbnQuXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBTZWUgW2A8dmFhZGluLW92ZXJsYXk+YCBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi1vdmVybGF5L2Jsb2IvbWFzdGVyL3NyYy92YWFkaW4tb3ZlcmxheS5odG1sKVxuICogZm9yIGA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXk+YCBwYXJ0cy5cbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAZXh0ZW5kcyBWYWFkaW4uT3ZlcmxheUVsZW1lbnRcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIERhdGVQaWNrZXJPdmVybGF5RWxlbWVudCBleHRlbmRzIERpc2FibGVVcGdyYWRlTWl4aW4oT3ZlcmxheUVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5JztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoRGF0ZVBpY2tlck92ZXJsYXlFbGVtZW50LmlzLCBEYXRlUGlja2VyT3ZlcmxheUVsZW1lbnQpO1xuIiwiaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9jdXN0b20tc3R5bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2JvdHRvbS1hbGlnbmVkXSkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmlnaHQtYWxpZ25lZF0pIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmlnaHQtYWxpZ25lZF1bZGlyPVwicnRsXCJdKSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJjb250ZW50XCJdIHtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZ2VzdHVyZS1ldmVudC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLW1lZGlhLXF1ZXJ5L2lyb24tbWVkaWEtcXVlcnkuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BlcnR5TWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWUtcHJvcGVydHktbWl4aW4uanMnO1xuaW1wb3J0IHsgQ29udHJvbFN0YXRlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluLmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VyTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1taXhpbi5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGFmdGVyTmV4dFJlbmRlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuaW1wb3J0IHsgcHJldmVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcbi8qKlxuICpcbiAqIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgaXMgYSBkYXRlIHNlbGVjdGlvbiBmaWVsZCB3aGljaCBpbmNsdWRlcyBhIHNjcm9sbGFibGVcbiAqIG1vbnRoIGNhbGVuZGFyIHZpZXcuXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWRhdGUtcGlja2VyIGxhYmVsPVwiQmlydGhkYXlcIj48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cbiAqIGBgYFxuICogYGBganNcbiAqIGRhdGVQaWNrZXIudmFsdWUgPSAnMjAxNi0wMy0wMic7XG4gKiBgYGBcbiAqIFdoZW4gdGhlIHNlbGVjdGVkIGB2YWx1ZWAgaXMgY2hhbmdlZCwgYSBgdmFsdWUtY2hhbmdlZGAgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICpcbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgc2hhZG93IERPTSBwYXJ0cyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uIHwgVGhlbWUgZm9yIEVsZW1lbnRcbiAqIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tXG4gKiBgdGV4dC1maWVsZGAgfCBJbnB1dCBlbGVtZW50IHwgdmFhZGluLWRhdGUtcGlja2VyXG4gKiBgY2xlYXItYnV0dG9uYCB8IENsZWFyIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlclxuICogYHRvZ2dsZS1idXR0b25gIHwgVG9nZ2xlIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlclxuICogYG92ZXJsYXktY29udGVudGAgfCBUaGUgb3ZlcmxheSBlbGVtZW50IHwgdmFhZGluLWRhdGUtcGlja2VyXG4gKiBgb3ZlcmxheS1oZWFkZXJgIHwgRnVsbHNjcmVlbiBtb2RlIGhlYWRlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBsYWJlbGAgfCBGdWxsc2NyZWVuIG1vZGUgdmFsdWUvbGFiZWwgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgY2xlYXItYnV0dG9uYCB8IEZ1bGxzY3JlZW4gbW9kZSBjbGVhciBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgdG9nZ2xlLWJ1dHRvbmAgfCBGdWxsc2NyZWVuIG1vZGUgdG9nZ2xlIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB5ZWFycy10b2dnbGUtYnV0dG9uYCB8IEZ1bGxzY3JlZW4gbW9kZSB5ZWFycyBzY3JvbGxlciB0b2dnbGUgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgbW9udGhzYCB8IE1vbnRocyBzY3JvbGxlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB5ZWFyc2AgfCBZZWFycyBzY3JvbGxlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB0b29sYmFyYCB8IEZvb3RlciBiYXIgd2l0aCBidXR0b25zIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHRvZGF5LWJ1dHRvbmAgfCBUb2RheSBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgY2FuY2VsLWJ1dHRvbmAgfCBDYW5jZWwgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYG1vbnRoYCB8IE1vbnRoIGNhbGVuZGFyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHllYXItbnVtYmVyYCB8IFllYXIgbnVtYmVyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHllYXItc2VwYXJhdG9yYCB8IFllYXIgc2VwYXJhdG9yIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYG1vbnRoLWhlYWRlcmAgfCBNb250aCB0aXRsZSB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYHdlZWtkYXlzYCB8IFdlZWtkYXkgY29udGFpbmVyIHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKiBgd2Vla2RheWAgfCBXZWVrZGF5IGVsZW1lbnQgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGB3ZWVrLW51bWJlcnNgIHwgV2VlayBudW1iZXJzIGNvbnRhaW5lciB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYHdlZWstbnVtYmVyYCB8IFdlZWsgbnVtYmVyIGVsZW1lbnQgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGBkYXRlYCB8IERhdGUgZWxlbWVudCB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICpcbiAqIFNlZSBbVGhlbWFibGVNaXhpbiDigJMgaG93IHRvIGFwcGx5IHN0eWxlcyBmb3Igc2hhZG93IHBhcnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpKVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc3RhdGUgYXR0cmlidXRlcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSAgICB8IERlc2NyaXB0aW9uIHwgUGFydCBuYW1lXG4gKiAtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgaW52YWxpZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkIHwgOmhvc3RcbiAqIGBvcGVuZWRgIHwgU2V0IHdoZW4gdGhlIGRhdGUgc2VsZWN0b3Igb3ZlcmxheSBpcyBvcGVuZWQgfCA6aG9zdFxuICogYHJlYWRvbmx5YCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5IHwgOmhvc3RcbiAqIGBkaXNhYmxlZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBkaXNhYmxlZCB8IDpob3N0XG4gKiBgdG9kYXlgIHwgU2V0IG9uIHRoZSBkYXRlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgZGF5IHwgZGF0ZVxuICogYGZvY3VzZWRgIHwgU2V0IG9uIHRoZSBmb2N1c2VkIGRhdGUgfCBkYXRlXG4gKiBgZGlzYWJsZWRgIHwgU2V0IG9uIHRoZSBkYXRlIG91dCBvZiB0aGUgYWxsb3dlZCByYW5nZSB8IGRhdGVcbiAqIGBzZWxlY3RlZGAgfCBTZXQgb24gdGhlIHNlbGVjdGVkIGRhdGUgfCBkYXRlXG4gKlxuICogSWYgeW91IHdhbnQgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdCBpbnB1dCBmaWVsZCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLCB5b3Ugc2hvdWxkIHVzZSB0aGVcbiAqIFtgPHZhYWRpbi1kYXRlLXBpY2tlci1saWdodD5gXSgjdmFhZGluLWRhdGUtcGlja2VyLWxpZ2h0KSBlbGVtZW50LlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgaXRzZWxmLCB0aGUgZm9sbG93aW5nIGludGVybmFsXG4gKiBjb21wb25lbnRzIGFyZSB0aGVtYWJsZTpcbiAqXG4gKiAtIGA8dmFhZGluLXRleHQtZmllbGQ+YFxuICogLSBgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5PmBcbiAqIC0gYDx2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50PmBcbiAqIC0gYDx2YWFkaW4tbW9udGgtY2FsZW5kYXI+YFxuICpcbiAqIE5vdGU6IHRoZSBgdGhlbWVgIGF0dHJpYnV0ZSB2YWx1ZSBzZXQgb24gYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCBpc1xuICogcHJvcGFnYXRlZCB0byB0aGUgaW50ZXJuYWwgdGhlbWFibGUgY29tcG9uZW50cyBsaXN0ZWQgYWJvdmUuXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5FbGVtZW50TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29udHJvbFN0YXRlTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtZVByb3BlcnR5TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uRGF0ZVBpY2tlck1peGluXG4gKiBAbWl4ZXMgUG9seW1lci5HZXN0dXJlRXZlbnRMaXN0ZW5lcnNcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICovXG5jbGFzcyBEYXRlUGlja2VyRWxlbWVudCBleHRlbmRzXG4gIEVsZW1lbnRNaXhpbihcbiAgICBDb250cm9sU3RhdGVNaXhpbihcbiAgICAgIFRoZW1hYmxlTWl4aW4oXG4gICAgICAgIFRoZW1lUHJvcGVydHlNaXhpbihcbiAgICAgICAgICBEYXRlUGlja2VyTWl4aW4oXG4gICAgICAgICAgICBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMoUG9seW1lckVsZW1lbnQpKSkpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtvcGVuZWRdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRleHQtZmllbGRcIl0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cImNsZWFyLWJ1dHRvblwiXSxcbiAgICAgIDpob3N0KFtyZWFkb25seV0pIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdLFxuICAgICAgOmhvc3QoOm5vdChbaGFzLXZhbHVlXSkpIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG5cbiAgICA8dmFhZGluLXRleHQtZmllbGQgaWQ9XCJpbnB1dFwiIHJvbGU9XCJhcHBsaWNhdGlvblwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIG9uLWZvY3VzPVwiX2ZvY3VzXCIgdmFsdWU9XCJ7e191c2VySW5wdXRWYWx1ZX19XCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCIgbGFiZWw9XCJbW2xhYmVsXV1cIiBuYW1lPVwiW1tuYW1lXV1cIiBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJdXVwiIHJlcXVpcmVkPVwiW1tyZXF1aXJlZF1dXCIgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIiByZWFkb25seT1cIltbcmVhZG9ubHldXVwiIGVycm9yLW1lc3NhZ2U9XCJbW2Vycm9yTWVzc2FnZV1dXCIgYXJpYS1sYWJlbFxcJD1cIltbbGFiZWxdXVwiIHBhcnQ9XCJ0ZXh0LWZpZWxkXCIgdGhlbWVcXCQ9XCJbW3RoZW1lXV1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPGRpdiBwYXJ0PVwiY2xlYXItYnV0dG9uXCIgc2xvdD1cInN1ZmZpeFwiIG9uLXRvdWNoZW5kPVwiX2NsZWFyVG91Y2hlbmRcIiBvbi1jbGljaz1cIl9jbGVhclwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsXFwkPVwiW1tpMThuLmNsZWFyXV1cIj48L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cInRvZ2dsZS1idXR0b25cIiBzbG90PVwic3VmZml4XCIgb24tdGFwPVwiX3RvZ2dsZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsXFwkPVwiW1tpMThuLmNhbGVuZGFyXV1cIiBhcmlhLWV4cGFuZGVkXFwkPVwiW1tfZ2V0QXJpYUV4cGFuZGVkKG9wZW5lZCldXVwiPjwvZGl2PlxuICAgIDwvdmFhZGluLXRleHQtZmllbGQ+XG5cbiAgICA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkgaWQ9XCJvdmVybGF5XCIgZnVsbHNjcmVlblxcJD1cIltbX2Z1bGxzY3JlZW5dXVwiIHRoZW1lXFwkPVwiW1t0aGVtZV1dXCIgb24tdmFhZGluLW92ZXJsYXktb3Blbj1cIl9vbk92ZXJsYXlPcGVuZWRcIiBvbi12YWFkaW4tb3ZlcmxheS1jbG9zZT1cIl9vbk92ZXJsYXlDbG9zZWRcIiBkaXNhYmxlLXVwZ3JhZGU9XCJcIj5cbiAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQgaWQ9XCJvdmVybGF5LWNvbnRlbnRcIiBpMThuPVwiW1tpMThuXV1cIiBmdWxsc2NyZWVuXFwkPVwiW1tfZnVsbHNjcmVlbl1dXCIgbGFiZWw9XCJbW2xhYmVsXV1cIiBzZWxlY3RlZC1kYXRlPVwie3tfc2VsZWN0ZWREYXRlfX1cIiBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIGZvY3VzZWQtZGF0ZT1cInt7X2ZvY3VzZWREYXRlfX1cIiBzaG93LXdlZWstbnVtYmVycz1cIltbc2hvd1dlZWtOdW1iZXJzXV1cIiBtaW4tZGF0ZT1cIltbX21pbkRhdGVdXVwiIG1heC1kYXRlPVwiW1tfbWF4RGF0ZV1dXCIgcm9sZT1cImRpYWxvZ1wiIG9uLWRhdGUtdGFwPVwiX2Nsb3NlXCIgcGFydD1cIm92ZXJsYXktY29udGVudFwiIHRoZW1lXFwkPVwiW1t0aGVtZV1dXCI+XG4gICAgICAgIDwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheT5cblxuICAgIDxpcm9uLW1lZGlhLXF1ZXJ5IHF1ZXJ5PVwiW1tfZnVsbHNjcmVlbk1lZGlhUXVlcnldXVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e19mdWxsc2NyZWVufX1cIj5cbiAgICA8L2lyb24tbWVkaWEtcXVlcnk+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1kYXRlLXBpY2tlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICczLjMuMyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiB0aGUgaW5wdXQgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgZXJyb3JNZXNzYWdlOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBwbGFjZWhvbGRlciBzdHJpbmcgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsLiBJZiB0aGlzIGlzIHNldCwgdGhlIGxhYmVsIHdpbGwgYWx3YXlzIGZsb2F0LlxuICAgICAgICovXG4gICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1ha2UgdGhpcyBlbGVtZW50IHJlYWQtb25seS5cbiAgICAgICAqL1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBwcm9wZXJ0eSBpcyBzZXQgdG8gdHJ1ZSB3aGVuIHRoZSBjb250cm9sIHZhbHVlIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgX3VzZXJJbnB1dFZhbHVlOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfdXNlcklucHV0VmFsdWVDaGFuZ2VkKF91c2VySW5wdXRWYWx1ZSknXG4gICAgXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBJbiBvcmRlciB0byBoYXZlIHN5bmNocm9uaXplZCBpbnZhbGlkIHByb3BlcnR5LCB3ZSBuZWVkIHRvIHVzZSB0aGUgc2FtZSB2YWxpZGF0ZSBsb2dpYy5cbiAgICBhZnRlck5leHRSZW5kZXIodGhpcywgKCkgPT4gdGhpcy5faW5wdXRFbGVtZW50LnZhbGlkYXRlID0gKCkgPT4ge30pO1xuICB9XG5cbiAgX29uVmFhZGluT3ZlcmxheUNsb3NlKGUpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkV2l0aEZvY3VzUmluZyAmJiB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXNlZCcpKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBpZiAoZS5kZXRhaWwuc291cmNlRXZlbnQgJiYgZS5kZXRhaWwuc291cmNlRXZlbnQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzKSAhPT0gLTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgdGhpcy5fX2Rpc3BhdGNoQ2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgICBwcmV2ZW50KCd0YXAnKTtcbiAgICB0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UgPSBmYWxzZTtcbiAgfVxuXG4gIF9jbGVhclRvdWNoZW5kKGUpIHtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcmV2ZW50KCd0YXAnKTtcbiAgfVxuXG4gIF90b2dnbGUoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpc1sodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCkgPyAnY2xvc2UnIDogJ29wZW4nXSgpO1xuICB9XG5cbiAgX2lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gIH1cblxuICBzZXQgX2lucHV0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfaW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgX2dldEFyaWFFeHBhbmRlZChvcGVuZWQpIHtcbiAgICByZXR1cm4gQm9vbGVhbihvcGVuZWQpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNzYWJsZSBlbGVtZW50IHVzZWQgYnkgdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW5cbiAgICovXG4gIGdldCBmb2N1c0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0KCkgfHwgdGhpcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoRGF0ZVBpY2tlckVsZW1lbnQuaXMsIERhdGVQaWNrZXJFbGVtZW50KTtcblxuZXhwb3J0IHsgRGF0ZVBpY2tlckVsZW1lbnQgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgZmx1c2ggfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0aXplIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvdGVtcGxhdGl6ZS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG4vKipcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEluZmluaXRlU2Nyb2xsZXJFbGVtZW50IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyLm5vdG91Y2hzY3JvbGwge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogYXV0bztcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5idWZmZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLXdpZHRoLCAxMDAlKTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgdG9wOiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLW9mZnNldCwgMCk7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuMnM7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxlclwiIG9uLXNjcm9sbD1cIl9zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJmdWxsSGVpZ2h0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb3VudCBvZiBpbmRpdmlkdWFsIGl0ZW1zIGluIGVhY2ggYnVmZmVyLlxuICAgICAgICogVGhlIHNjcm9sbGVyIGhhcyAyIGJ1ZmZlcnMgYWx0b2dldGhlciBzbyBidWZmZXJTaXplIG9mIDIwXG4gICAgICAgKiB3aWxsIHJlc3VsdCBpbiA0MCBidWZmZXJlZCBET00gaXRlbXMgaW4gdG90YWwuXG4gICAgICAgKiBDaGFuZ2luZyBhZnRlciBpbml0aWFsaXphdGlvbiBub3Qgc3VwcG9ydGVkLlxuICAgICAgICovXG4gICAgICBidWZmZXJTaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDIwXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBhbW91bnQgb2YgaW5pdGlhbCBzY3JvbGwgdG9wLiBOZWVkZWQgaW4gb3JkZXIgZm9yIHRoZVxuICAgICAgICogdXNlciB0byBiZSBhYmxlIHRvIHNjcm9sbCBiYWNrd2FyZHMuXG4gICAgICAgKi9cbiAgICAgIF9pbml0aWFsU2Nyb2xsOiB7XG4gICAgICAgIHZhbHVlOiA1MDAwMDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGluZGV4L3Bvc2l0aW9uIG1hcHBlZCBhdCBfaW5pdGlhbFNjcm9sbCBwb2ludC5cbiAgICAgICAqL1xuICAgICAgX2luaXRpYWxJbmRleDoge1xuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgX2J1ZmZlcnM6IEFycmF5LFxuXG4gICAgICBfcHJldmVudFNjcm9sbEV2ZW50OiBCb29sZWFuLFxuXG4gICAgICBfbWF5SGF2ZU1vbWVudHVtOiBCb29sZWFuLFxuXG4gICAgICBfaW5pdGlhbGl6ZWQ6IEJvb2xlYW4sXG5cbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19hY3RpdmF0ZWQnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICB0aGlzLl9idWZmZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWZmZXInKSk7XG5cbiAgICB0aGlzLiQuZnVsbEhlaWdodC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9pbml0aWFsU2Nyb2xsICogMiArICdweCc7XG5cbiAgICB2YXIgdHBsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpO1xuICAgIHRoaXMuX1RlbXBsYXRlQ2xhc3MgPSB0ZW1wbGF0aXplKHRwbCwgdGhpcywge1xuICAgICAgZm9yd2FyZEhvc3RQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvcCAhPT0gJ2luZGV4Jykge1xuICAgICAgICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGJ1ZmZlci5jaGlsZHJlbiwgaW5zZXJ0aW9uUG9pbnQgPT4ge1xuICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXIuaW5zdGFuY2VbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBGaXJlZm94IGludGVycHJldHMgZWxlbWVudHMgd2l0aCBvdmVyZmxvdzphdXRvIGFzIGZvY3VzYWJsZVxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwNjk3MzlcbiAgICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZWQoYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBvb2woKTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfZmluaXNoSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXREb25lKSB7XG4gICAgICAvLyBPbmNlIHRoZSBmaXJzdCBzZXQgb2YgaXRlbXMgc3RhcnQgZmFkaW5nIGluLCBzdGFtcCB0aGUgcmVzdFxuICAgICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChidWZmZXIuY2hpbGRyZW4sXG4gICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPT4gdGhpcy5fZW5zdXJlU3RhbXBlZEluc3RhbmNlKGluc2VydGlvblBvaW50Ll9pdGVtV3JhcHBlcikpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXREb25lID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfdHJhbnNsYXRlQnVmZmVyKHVwKSB7XG4gICAgdmFyIGluZGV4ID0gdXAgPyAxIDogMDtcbiAgICB0aGlzLl9idWZmZXJzW2luZGV4XS50cmFuc2xhdGVZID0gdGhpcy5fYnVmZmVyc1soaW5kZXggPyAwIDogMSldLnRyYW5zbGF0ZVkgKyB0aGlzLl9idWZmZXJIZWlnaHQgKiAoaW5kZXggPyAtMSA6IDEpO1xuICAgIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy5fYnVmZmVyc1tpbmRleF0udHJhbnNsYXRlWSArICdweCwgMCknO1xuICAgIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9idWZmZXJzLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9zY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMuX2J1ZmZlckhlaWdodCB8fCBzY3JvbGxUb3AgPiB0aGlzLl9pbml0aWFsU2Nyb2xsICogMiAtIHRoaXMuX2J1ZmZlckhlaWdodCkge1xuICAgICAgLy8gU2Nyb2xsZWQgbmVhciB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgc2Nyb2xsYWJsZSBhcmVhIC0+IHJlc2V0LlxuICAgICAgdGhpcy5faW5pdGlhbEluZGV4ID0gfn50aGlzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBzY3JvbGxlZCBlbm91Z2ggdG8gdHJhbnNsYXRlIHRoZSBidWZmZXIgcG9zaXRpb25zLlxuICAgIHZhciBidWZmZXJPZmZzZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLmJ1ZmZlcicpLm9mZnNldFRvcDtcbiAgICB2YXIgdXBwZXJUaHJlc2hvbGRSZWFjaGVkID0gc2Nyb2xsVG9wID4gdGhpcy5fYnVmZmVyc1sxXS50cmFuc2xhdGVZICsgdGhpcy5pdGVtSGVpZ2h0ICsgYnVmZmVyT2Zmc2V0O1xuICAgIHZhciBsb3dlclRocmVzaG9sZFJlYWNoZWQgPSBzY3JvbGxUb3AgPCB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgKyB0aGlzLml0ZW1IZWlnaHQgKyBidWZmZXJPZmZzZXQ7XG5cbiAgICBpZiAodXBwZXJUaHJlc2hvbGRSZWFjaGVkIHx8IGxvd2VyVGhyZXNob2xkUmVhY2hlZCkge1xuICAgICAgdGhpcy5fdHJhbnNsYXRlQnVmZmVyKGxvd2VyVGhyZXNob2xkUmVhY2hlZCk7XG4gICAgICB0aGlzLl91cGRhdGVDbG9uZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3ByZXZlbnRTY3JvbGxFdmVudCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY3VzdG9tLXNjcm9sbCcsIHtidWJibGVzOiBmYWxzZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgICB0aGlzLl9tYXlIYXZlTW9tZW50dW0gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2RlYm91bmNlclNjcm9sbEZpbmlzaCA9IERlYm91bmNlci5kZWJvdW5jZSh0aGlzLl9kZWJvdW5jZXJTY3JvbGxGaW5pc2gsXG4gICAgICB0aW1lT3V0LmFmdGVyKDIwMCksICgpID0+IHtcbiAgICAgICAgdmFyIHNjcm9sbGVyUmVjdCA9IHRoaXMuJC5zY3JvbGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1Zpc2libGUodGhpcy5fYnVmZmVyc1swXSwgc2Nyb2xsZXJSZWN0KSAmJiAhdGhpcy5faXNWaXNpYmxlKHRoaXMuX2J1ZmZlcnNbMV0sIHNjcm9sbGVyUmVjdCkpIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVudCBzY3JvbGxlciBwb3NpdGlvbiBhcyBpbmRleC4gQ2FuIGJlIGEgZnJhY3Rpb25hbCBudW1iZXIuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBzZXQgcG9zaXRpb24oaW5kZXgpIHtcbiAgICB0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQgPSB0cnVlO1xuICAgIGlmIChpbmRleCA+IHRoaXMuX2ZpcnN0SW5kZXggJiYgaW5kZXggPCB0aGlzLl9maXJzdEluZGV4ICsgdGhpcy5idWZmZXJTaXplICogMikge1xuICAgICAgdGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCA9IHRoaXMuaXRlbUhlaWdodCAqIChpbmRleCAtIHRoaXMuX2ZpcnN0SW5kZXgpICsgdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbml0aWFsSW5kZXggPSB+fmluZGV4O1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3AgKz0gaW5kZXggJSAxICogdGhpcy5pdGVtSGVpZ2h0O1xuICAgICAgdGhpcy5fc2Nyb2xsRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWF5SGF2ZU1vbWVudHVtKSB7XG4gICAgICAvLyBTdG9wIHRoZSBwb3NzaWJsZSBpT1MgU2FmYXJpIG1vbWVudHVtIHdpdGggLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG4gICAgICB0aGlzLiQuc2Nyb2xsZXIuY2xhc3NMaXN0LmFkZCgnbm90b3VjaHNjcm9sbCcpO1xuICAgICAgdGhpcy5fbWF5SGF2ZU1vbWVudHVtID0gZmFsc2U7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSZXN0b3JlIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgYWZ0ZXIgYSBzbWFsbCBkZWxheS5cbiAgICAgICAgdGhpcy4kLnNjcm9sbGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdG91Y2hzY3JvbGwnKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCAtIHRoaXMuX2J1ZmZlcnNbMF0udHJhbnNsYXRlWSkgLyB0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLl9maXJzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGl0ZW1IZWlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pdGVtSGVpZ2h0VmFsKSB7XG4gICAgICBpZiAoISh3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcykpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHdpbmRvdy5TaGFkeUNTU1xuICAgICAgICA/IHdpbmRvdy5TaGFkeUNTUy5nZXRDb21wdXRlZFN0eWxlVmFsdWUodGhpcywgJy0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0JylcbiAgICAgICAgOiBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLmdldFByb3BlcnR5VmFsdWUoJy0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0Jyk7XG4gICAgICAvLyBVc2UgYmFja2dyb3VuZC1wb3NpdGlvbiB0ZW1wIGlubGluZSBzdHlsZSBmb3IgdW5pdCBjb252ZXJzaW9uXG4gICAgICBjb25zdCB0bXBTdHlsZVByb3AgPSAnYmFja2dyb3VuZC1wb3NpdGlvbic7XG4gICAgICB0aGlzLiQuZnVsbEhlaWdodC5zdHlsZS5zZXRQcm9wZXJ0eSh0bXBTdHlsZVByb3AsIGl0ZW1IZWlnaHQpO1xuICAgICAgY29uc3QgaXRlbUhlaWdodFB4ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiQuZnVsbEhlaWdodCkuZ2V0UHJvcGVydHlWYWx1ZSh0bXBTdHlsZVByb3ApO1xuICAgICAgdGhpcy4kLmZ1bGxIZWlnaHQuc3R5bGUucmVtb3ZlUHJvcGVydHkodG1wU3R5bGVQcm9wKTtcbiAgICAgIHRoaXMuX2l0ZW1IZWlnaHRWYWwgPSBwYXJzZUZsb2F0KGl0ZW1IZWlnaHRQeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1IZWlnaHRWYWw7XG4gIH1cblxuICBnZXQgX2J1ZmZlckhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtSGVpZ2h0ICogdGhpcy5idWZmZXJTaXplO1xuICB9XG5cbiAgX3Jlc2V0KCkge1xuICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiQuc2Nyb2xsZXIuc2Nyb2xsVG9wID0gdGhpcy5faW5pdGlhbFNjcm9sbDtcbiAgICB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgPSB0aGlzLl9pbml0aWFsU2Nyb2xsIC0gdGhpcy5fYnVmZmVySGVpZ2h0O1xuICAgIHRoaXMuX2J1ZmZlcnNbMV0udHJhbnNsYXRlWSA9IHRoaXMuX2luaXRpYWxTY3JvbGw7XG4gICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICBidWZmZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBidWZmZXIudHJhbnNsYXRlWSArICdweCwgMCknO1xuICAgIH0pO1xuICAgIHRoaXMuX2J1ZmZlcnNbMF0udXBkYXRlZCA9IHRoaXMuX2J1ZmZlcnNbMV0udXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3VwZGF0ZUNsb25lcyh0cnVlKTtcblxuICAgIHRoaXMuX2RlYm91bmNlclVwZGF0ZUNsb25lcyA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlclVwZGF0ZUNsb25lcyxcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMjAwKSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdLnVwZGF0ZWQgPSB0aGlzLl9idWZmZXJzWzFdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xvbmVzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlUG9vbCgpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl9idWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idWZmZXJTaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5pdGVtSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2UgPSB7fTtcblxuICAgICAgICBjb25zdCBjb250ZW50SWQgPSBJbmZpbml0ZVNjcm9sbGVyRWxlbWVudC5fY29udGVudEluZGV4ID0gSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuX2NvbnRlbnRJbmRleCArIDEgfHwgMDtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSAndmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0tY29udGVudC0nICsgY29udGVudElkO1xuXG4gICAgICAgIGNvbnN0IGluc2VydGlvblBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpO1xuICAgICAgICBpbnNlcnRpb25Qb2ludC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBzbG90TmFtZSk7XG4gICAgICAgIGluc2VydGlvblBvaW50Ll9pdGVtV3JhcHBlciA9IGl0ZW1XcmFwcGVyO1xuICAgICAgICBidWZmZXIuYXBwZW5kQ2hpbGQoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgICAgIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnc2xvdCcsIHNsb3ROYW1lKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChpdGVtV3JhcHBlcik7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgYnkgSUVcbiAgICAgICAgZmx1c2goKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBPbmx5IHN0YW1wIHRoZSB2aXNpYmxlIGluc3RhbmNlcyBmaXJzdFxuICAgICAgICAgIGlmICh0aGlzLl9pc1Zpc2libGUoaXRlbVdyYXBwZXIsIGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVN0YW1wZWRJbnN0YW5jZShpdGVtV3JhcHBlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxKTsgLy8gV2FpdCBmb3IgZmlyc3QgcmVzZXRcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIHRoaXMuX2ZpbmlzaEluaXQuYmluZCh0aGlzKSk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBfZW5zdXJlU3RhbXBlZEluc3RhbmNlKGl0ZW1XcmFwcGVyKSB7XG4gICAgaWYgKGl0ZW1XcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRtcEluc3RhbmNlID0gaXRlbVdyYXBwZXIuaW5zdGFuY2U7XG5cbiAgICBpdGVtV3JhcHBlci5pbnN0YW5jZSA9IG5ldyB0aGlzLl9UZW1wbGF0ZUNsYXNzKHt9KTtcbiAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtV3JhcHBlci5pbnN0YW5jZS5yb290KTtcblxuICAgIE9iamVjdC5rZXlzKHRtcEluc3RhbmNlKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2Uuc2V0KHByb3AsIHRtcEluc3RhbmNlW3Byb3BdKTtcbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVDbG9uZXModmlld1BvcnRPbmx5KSB7XG4gICAgdGhpcy5fZmlyc3RJbmRleCA9IH5+KCh0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgLSB0aGlzLl9pbml0aWFsU2Nyb2xsKSAvIHRoaXMuaXRlbUhlaWdodCkgKyB0aGlzLl9pbml0aWFsSW5kZXg7XG5cbiAgICB2YXIgc2Nyb2xsZXJSZWN0ID0gdmlld1BvcnRPbmx5ID8gdGhpcy4kLnNjcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaCgoYnVmZmVyLCBidWZmZXJJbmRleCkgPT4ge1xuICAgICAgaWYgKCFidWZmZXIudXBkYXRlZCkge1xuICAgICAgICB2YXIgZmlyc3RJbmRleCA9IHRoaXMuX2ZpcnN0SW5kZXggKyB0aGlzLmJ1ZmZlclNpemUgKiBidWZmZXJJbmRleDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYnVmZmVyLmNoaWxkcmVuLCAoaW5zZXJ0aW9uUG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXI7XG4gICAgICAgICAgaWYgKCF2aWV3UG9ydE9ubHkgfHwgdGhpcy5faXNWaXNpYmxlKGl0ZW1XcmFwcGVyLCBzY3JvbGxlclJlY3QpKSB7XG4gICAgICAgICAgICBpdGVtV3JhcHBlci5pbnN0YW5jZS5pbmRleCA9IGZpcnN0SW5kZXggKyBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidWZmZXIudXBkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICBfaXNWaXNpYmxlKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC5ib3R0b20gPiBjb250YWluZXIudG9wICYmIHJlY3QudG9wIDwgY29udGFpbmVyLmJvdHRvbTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuaXMsIEluZmluaXRlU2Nyb2xsZXJFbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1yZXBlYXQuanMnO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IERhdGVQaWNrZXJIZWxwZXIgfSBmcm9tICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1oZWxwZXIuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuLyoqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBNb250aENhbGVuZGFyRWxlbWVudCBleHRlbmRzIFRoZW1hYmxlTWl4aW4oR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwid2Vla2RheXNcIl0sXG4gICAgICAjZGF5cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICAjZGF5cy1jb250YWluZXIsXG4gICAgICAjd2Vla2RheXMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlcnNcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXVtoaWRkZW5dLFxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl0sXG4gICAgICBbcGFydD1cImRhdGVcIl0ge1xuICAgICAgICAvKiBXb3VsZCB1c2UgY2FsYygxMDAlIC8gNykgYnV0IGl0IGRvZXNuJ3Qgd29yayBuaWNlIG9uIElFICovXG4gICAgICAgIHdpZHRoOiAxNC4yODU3MTQyODYlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl06ZW1wdHksXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXSB7XG4gICAgICAgIHdpZHRoOiAxMi41JTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgcGFydD1cIm1vbnRoLWhlYWRlclwiIHJvbGU9XCJoZWFkaW5nXCI+W1tfZ2V0VGl0bGUobW9udGgsIGkxOG4ubW9udGhOYW1lcyldXTwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtb250aEdyaWRcIiBvbi10YXA9XCJfaGFuZGxlVGFwXCIgb24tdG91Y2hlbmQ9XCJfcHJldmVudERlZmF1bHRcIiBvbi10b3VjaHN0YXJ0PVwiX29uTW9udGhHcmlkVG91Y2hTdGFydFwiPlxuICAgICAgPGRpdiBpZD1cIndlZWtkYXlzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGhpZGRlbj1cIltbIV9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIiBwYXJ0PVwid2Vla2RheVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHBhcnQ9XCJ3ZWVrZGF5c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2dldFdlZWtEYXlOYW1lcyhpMThuLndlZWtkYXlzLCBpMThuLndlZWtkYXlzU2hvcnQsIHNob3dXZWVrTnVtYmVycywgaTE4bi5maXJzdERheU9mV2VlayldXVwiPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwid2Vla2RheVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1sYWJlbFxcJD1cIltbaXRlbS53ZWVrRGF5XV1cIj5bW2l0ZW0ud2Vla0RheVNob3J0XV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImRheXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgcGFydD1cIndlZWstbnVtYmVyc1wiIGhpZGRlbj1cIltbIV9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19nZXRXZWVrTnVtYmVycyhfZGF5cyldXVwiPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwid2Vlay1udW1iZXJcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGFiZWxcXCQ9XCJbW2kxOG4ud2Vla11dIFtbaXRlbV1dXCI+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImRheXNcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19kYXlzXV1cIj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImRhdGVcIiB0b2RheVxcJD1cIltbX2lzVG9kYXkoaXRlbSldXVwiIHNlbGVjdGVkXFwkPVwiW1tfZGF0ZUVxdWFscyhpdGVtLCBzZWxlY3RlZERhdGUpXV1cIiBmb2N1c2VkXFwkPVwiW1tfZGF0ZUVxdWFscyhpdGVtLCBmb2N1c2VkRGF0ZSldXVwiIGRhdGU9XCJbW2l0ZW1dXVwiIGRpc2FibGVkXFwkPVwiW1shX2RhdGVBbGxvd2VkKGl0ZW0sIG1pbkRhdGUsIG1heERhdGUpXV1cIiByb2xlXFwkPVwiW1tfZ2V0Um9sZShpdGVtKV1dXCIgYXJpYS1sYWJlbFxcJD1cIltbX2dldEFyaWFMYWJlbChpdGVtKV1dXCIgYXJpYS1kaXNhYmxlZFxcJD1cIltbX2dldEFyaWFEaXNhYmxlZChpdGVtLCBtaW5EYXRlLCBtYXhEYXRlKV1dXCI+W1tfZ2V0RGF0ZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLW1vbnRoLWNhbGVuZGFyJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBBIGBEYXRlYCBvYmplY3QgZGVmaW5pbmcgdGhlIG1vbnRoIHRvIGJlIGRpc3BsYXllZC4gT25seSB5ZWFyIGFuZFxuICAgICAgICogbW9udGggcHJvcGVydGllcyBhcmUgYWN0dWFsbHkgdXNlZC5cbiAgICAgICAqL1xuICAgICAgbW9udGg6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG5ldyBEYXRlKClcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGZvciB0aGUgY3VycmVudGx5IGZvY3VzZWQgZGF0ZS5cbiAgICAgICAqL1xuICAgICAgZm9jdXNlZERhdGU6IERhdGUsXG5cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGkxOG46IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZsYWcgc3RhdGluZyB3aGV0aGVyIHRhcHMgb24gdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgaWdub3JlZC5cbiAgICAgICAqL1xuICAgICAgaWdub3JlVGFwczogQm9vbGVhbixcblxuICAgICAgX25vdFRhcHBpbmc6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1pbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgbWF4RGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcblxuICAgICAgX2RheXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnX2dldERheXMobW9udGgsIGkxOG4uZmlyc3REYXlPZldlZWssIG1pbkRhdGUsIG1heERhdGUpJ1xuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogJ19pc0Rpc2FibGVkKG1vbnRoLCBtaW5EYXRlLCBtYXhEYXRlKSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfc2hvd1dlZWtOdW1iZXJzQ2hhbmdlZChzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspJ1xuICAgIF07XG4gIH1cblxuICBfZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpO1xuICB9XG5cbiAgX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIGRhdGVzIGluIHRoZSBtb250aCBhcmUgb3V0IG9mIHRoZSBhbGxvd2VkIHJhbmdlICovXG4gIF9pc0Rpc2FibGVkKG1vbnRoLCBtaW5EYXRlLCBtYXhEYXRlKSB7XG4gICAgLy8gRmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgIHZhciBmaXJzdERhdGUgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBmaXJzdERhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgZmlyc3REYXRlLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkpO1xuICAgIGZpcnN0RGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgLy8gTGFzdCBkYXkgb2YgdGhlIG1vbnRoXG4gICAgdmFyIGxhc3REYXRlID0gbmV3IERhdGUoMCwgMCk7XG4gICAgbGFzdERhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgbGFzdERhdGUuc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIDEpO1xuICAgIGxhc3REYXRlLnNldERhdGUoLTEpO1xuXG4gICAgaWYgKChtaW5EYXRlICYmIG1heERhdGUpXG4gICAgICAmJiBtaW5EYXRlLmdldE1vbnRoKCkgPT09IG1heERhdGUuZ2V0TW9udGgoKVxuICAgICAgJiYgbWluRGF0ZS5nZXRNb250aCgpID09PSBtb250aC5nZXRNb250aCgpXG4gICAgICAmJiBtYXhEYXRlLmdldERhdGUoKSAtIG1pbkRhdGUuZ2V0RGF0ZSgpID49IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIXRoaXMuX2RhdGVBbGxvd2VkKGZpcnN0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSlcbiAgICAgICYmICF0aGlzLl9kYXRlQWxsb3dlZChsYXN0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIH1cblxuICBfZ2V0VGl0bGUobW9udGgsIG1vbnRoTmFtZXMpIHtcbiAgICBpZiAobW9udGggPT09IHVuZGVmaW5lZCB8fCBtb250aE5hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mb3JtYXRUaXRsZShtb250aE5hbWVzW21vbnRoLmdldE1vbnRoKCldLCBtb250aC5nZXRGdWxsWWVhcigpKTtcbiAgfVxuXG4gIF9vbk1vbnRoR3JpZFRvdWNoU3RhcnQoKSB7XG4gICAgdGhpcy5fbm90VGFwcGluZyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbm90VGFwcGluZyA9IHRydWUsIDMwMCk7XG4gIH1cblxuICBfZGF0ZUFkZChkYXRlLCBkZWx0YSkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRlbHRhKTtcbiAgfVxuXG4gIF9hcHBseUZpcnN0RGF5T2ZXZWVrKHdlZWtEYXlOYW1lcywgZmlyc3REYXlPZldlZWspIHtcbiAgICBpZiAod2Vla0RheU5hbWVzID09PSB1bmRlZmluZWQgfHwgZmlyc3REYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB3ZWVrRGF5TmFtZXMuc2xpY2UoZmlyc3REYXlPZldlZWspLmNvbmNhdCh3ZWVrRGF5TmFtZXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcbiAgfVxuXG4gIF9nZXRXZWVrRGF5TmFtZXMod2Vla0RheU5hbWVzLCB3ZWVrRGF5TmFtZXNTaG9ydCwgc2hvd1dlZWtOdW1iZXJzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIGlmICh3ZWVrRGF5TmFtZXMgPT09IHVuZGVmaW5lZCB8fCB3ZWVrRGF5TmFtZXNTaG9ydCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBzaG93V2Vla051bWJlcnMgPT09IHVuZGVmaW5lZCB8fCBmaXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlZWtEYXlOYW1lcyA9IHRoaXMuX2FwcGx5Rmlyc3REYXlPZldlZWsod2Vla0RheU5hbWVzLCBmaXJzdERheU9mV2Vlayk7XG4gICAgd2Vla0RheU5hbWVzU2hvcnQgPSB0aGlzLl9hcHBseUZpcnN0RGF5T2ZXZWVrKHdlZWtEYXlOYW1lc1Nob3J0LCBmaXJzdERheU9mV2Vlayk7XG4gICAgd2Vla0RheU5hbWVzID0gd2Vla0RheU5hbWVzLm1hcCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2Vla0RheTogZGF5LFxuICAgICAgICB3ZWVrRGF5U2hvcnQ6IHdlZWtEYXlOYW1lc1Nob3J0W2luZGV4XVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3ZWVrRGF5TmFtZXM7XG4gIH1cblxuICBfZ2V0RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPyBkYXRlLmdldERhdGUoKSA6ICcnO1xuICB9XG5cbiAgX3Nob3dXZWVrTnVtYmVyc0NoYW5nZWQoc2hvd1dlZWtOdW1iZXJzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIGlmIChzaG93V2Vla051bWJlcnMgJiYgZmlyc3REYXlPZldlZWsgPT09IDEpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd3ZWVrLW51bWJlcnMnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd3ZWVrLW51bWJlcnMnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd1dlZWtTZXBhcmF0b3Ioc2hvd1dlZWtOdW1iZXJzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIC8vIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRlZCBmb3IgbG9jYWxlcyB0aGF0IHN0YXJ0IHRoZSB3ZWVrIG9uIE1vbmRheS5cbiAgICByZXR1cm4gc2hvd1dlZWtOdW1iZXJzICYmIGZpcnN0RGF5T2ZXZWVrID09PSAxO1xuICB9XG5cbiAgX2lzVG9kYXkoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlRXF1YWxzKG5ldyBEYXRlKCksIGRhdGUpO1xuICB9XG5cbiAgX2dldERheXMobW9udGgsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgaWYgKG1vbnRoID09PSB1bmRlZmluZWQgfHwgZmlyc3REYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaXJzdCBkYXkgb2YgdGhlIG1vbnRoIChhdCBtaWRuaWdodCkuXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKG1vbnRoLmdldEZ1bGxZZWFyKCkpO1xuICAgIGRhdGUuc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSk7XG4gICAgZGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgLy8gUmV3aW5kIHRvIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICB3aGlsZSAoZGF0ZS5nZXREYXkoKSAhPT0gZmlyc3REYXlPZldlZWspIHtcbiAgICAgIHRoaXMuX2RhdGVBZGQoZGF0ZSwgLTEpO1xuICAgIH1cblxuICAgIHZhciBkYXlzID0gW107XG4gICAgdmFyIHN0YXJ0TW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgdmFyIHRhcmdldE1vbnRoID0gbW9udGguZ2V0TW9udGgoKTtcbiAgICB3aGlsZSAoZGF0ZS5nZXRNb250aCgpID09PSB0YXJnZXRNb250aCB8fCBkYXRlLmdldE1vbnRoKCkgPT09IHN0YXJ0TW9udGgpIHtcbiAgICAgIGRheXMucHVzaChkYXRlLmdldE1vbnRoKCkgPT09IHRhcmdldE1vbnRoID8gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpIDogbnVsbCk7XG5cbiAgICAgIC8vIEFkdmFuY2UgdG8gbmV4dCBkYXkuXG4gICAgICB0aGlzLl9kYXRlQWRkKGRhdGUsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuXG4gIF9nZXRXZWVrTnVtYmVyKGRhdGUsIGRheXMpIHtcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGRheXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGF0ZSkge1xuICAgICAgLy8gR2V0IHRoZSBmaXJzdCBub24tbnVsbCBkYXRlIGZyb20gdGhlIGRheXMgYXJyYXkuXG4gICAgICBkYXRlID0gZGF5cy5yZWR1Y2UoKGFjYywgZCkgPT4ge1xuICAgICAgICByZXR1cm4gIWFjYyAmJiBkID8gZCA6IGFjYztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBEYXRlUGlja2VySGVscGVyLl9nZXRJU09XZWVrTnVtYmVyKGRhdGUpO1xuICB9XG5cbiAgX2dldFdlZWtOdW1iZXJzKGRhdGVzKSB7XG4gICAgcmV0dXJuIGRhdGVzXG4gICAgICAubWFwKGRhdGUgPT4gdGhpcy5fZ2V0V2Vla051bWJlcihkYXRlLCBkYXRlcykpXG4gICAgICAuZmlsdGVyKCh3ZWVrLCBpbmRleCwgYXJyKSA9PiBhcnIuaW5kZXhPZih3ZWVrKSA9PT0gaW5kZXgpO1xuICB9XG5cbiAgX2hhbmRsZVRhcChlKSB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZVRhcHMgJiYgIXRoaXMuX25vdFRhcHBpbmcgJiYgZS50YXJnZXQuZGF0ZSAmJiAhZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGUudGFyZ2V0LmRhdGU7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdkYXRlLXRhcCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pKTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIF9nZXRSb2xlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA/ICdidXR0b24nIDogJ3ByZXNlbnRhdGlvbic7XG4gIH1cblxuICBfZ2V0QXJpYUxhYmVsKGRhdGUpIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJpYUxhYmVsID0gdGhpcy5fZ2V0RGF0ZShkYXRlKSArICcgJyArXG4gICAgICB0aGlzLmkxOG4ubW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldICsgJyAnICtcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSArICcsICcgK1xuICAgICAgdGhpcy5pMThuLndlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuXG4gICAgaWYgKHRoaXMuX2lzVG9kYXkoZGF0ZSkpIHtcbiAgICAgIGFyaWFMYWJlbCArPSAnLCAnICsgdGhpcy5pMThuLnRvZGF5O1xuICAgIH1cblxuICAgIHJldHVybiBhcmlhTGFiZWw7XG4gIH1cblxuICBfZ2V0QXJpYURpc2FibGVkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCB8fCBtaW4gPT09IHVuZGVmaW5lZCB8fCBtYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoTW9udGhDYWxlbmRhckVsZW1lbnQuaXMsIE1vbnRoQ2FsZW5kYXJFbGVtZW50KTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zaXppbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zcGFjaW5nLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3R5bGUuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tYnV0dG9uL3RoZW1lL2x1bW8vdmFhZGluLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cImx1bW8tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAvKiBCYWNrZ3JvdW5kIGZvciB0aGUgeWVhciBzY3JvbGxlciwgcGxhY2VkIGhlcmUgYXMgd2UgYXJlIHVzaW5nIGEgbWFzayBpbWFnZSBvbiB0aGUgYWN0dWFsIHllYXJzIHBhcnQgKi9cbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWx1bW8tc2hhZGUtNXBjdCksIHZhcigtLWx1bW8tc2hhZGUtNXBjdCkpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDU3cHggMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIC8qIE1vbnRoIHNjcm9sbGVyICovXG5cbiAgICAgIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgLyogTW9udGggY2FsZW5kYXIgaGVpZ2h0OlxuICAgICAgICAgICAgICBoZWFkZXIgaGVpZ2h0ICsgbWFyZ2luLWJvdHRvbVxuICAgICAgICAgICAgKyB3ZWVrZGF5cyBoZWlnaHQgKyBtYXJnaW4tYm90dG9tXG4gICAgICAgICAgICArIGRhdGUgY2VsbCBoZWlnaHRzXG4gICAgICAgICAgICArIHNtYWxsIG1hcmdpbiBiZXR3ZWVuIG1vbnRoIGNhbGVuZGFyc1xuICAgICAgICAqL1xuICAgICAgICAtLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1pdGVtLWhlaWdodDpcbiAgICAgICAgICBjYWxjKFxuICAgICAgICAgICAgICB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1sKSArIHZhcigtLWx1bW8tc3BhY2UtbSlcbiAgICAgICAgICAgICsgdmFyKC0tbHVtby1mb250LXNpemUteHMpICsgdmFyKC0tbHVtby1zcGFjZS1zKVxuICAgICAgICAgICAgKyB2YXIoLS1sdW1vLXNpemUtbSkgKiA2XG4gICAgICAgICAgICArIHZhcigtLWx1bW8tc3BhY2UtcylcbiAgICAgICAgICApO1xuICAgICAgICAtLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1idWZmZXItb2Zmc2V0OiAyMCU7XG4gICAgICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwIDEwJSwgIzAwMCA4NSUsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCAjMDAwIDEwJSwgIzAwMCA4NSUsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDU3cHg7XG4gICAgICB9XG5cbiAgICAgIC8qIFllYXIgc2Nyb2xsZXIgKi9cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIC8qIFRPRE8gZ2V0IHJpZCBvZiBmaXhlZCBtYWdpYyBudW1iZXIgKi9cbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLXdpZHRoOiA5N3B4O1xuICAgICAgICB3aWR0aDogNTdweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1zKTtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDAgNHB4IDAgdmFyKC0tbHVtby1zaGFkZS01cGN0KTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICMwMDAgMzUlLCAjMDAwIDY1JSwgdHJhbnNwYXJlbnQpO1xuICAgICAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsICMwMDAgMzUlLCAjMDAwIDY1JSwgdHJhbnNwYXJlbnQpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXItbnVtYmVyXCJdLFxuICAgICAgW3BhcnQ9XCJ5ZWFyLXNlcGFyYXRvclwiXSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBvcGFjaXR5O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdOmhvdmVyIFtwYXJ0PVwieWVhci1udW1iZXJcIl0sXG4gICAgICBbcGFydD1cInllYXJzXCJdOmhvdmVyIFtwYXJ0PVwieWVhci1zZXBhcmF0b3JcIl0ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICAvKiBUT0RPIHVuc3VwcG9ydGVkIHNlbGVjdG9yICovXG4gICAgICAjc2Nyb2xsZXJzIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC8qIFRPRE8gdW5zdXBwb3J0ZWQgc2VsZWN0b3IsIHNob3VsZCBmaXggdGhpcyBpbiB2YWFkaW4tZGF0ZS1waWNrZXIgdGhhdCBpdCBhZGFwdHMgdG8gdGhlXG4gICAgICAgKiB3aWR0aCBvZiB0aGUgeWVhciBzY3JvbGxlciAqL1xuICAgICAgI3Njcm9sbGVyc1tkZXNrdG9wXSBbcGFydD1cIm1vbnRoc1wiXSB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAvKiBZZWFyIHNjcm9sbGVyIHBvc2l0aW9uIGluZGljYXRvciAqL1xuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXTo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1iYXNlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHZhcigtLWx1bW8tdGludC01cGN0KSwgdmFyKC0tbHVtby10aW50LTVwY3QpKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGNhbGModmFyKC0tbHVtby1ib3JkZXItcmFkaXVzKSAvIDIpO1xuICAgICAgICBib3gtc2hhZG93OiAycHggLTJweCA2cHggMCB2YXIoLS1sdW1vLXNoYWRlLTVwY3QpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXItbnVtYmVyXCJdLFxuICAgICAgW3BhcnQ9XCJ5ZWFyLXNlcGFyYXRvclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdIFtwYXJ0PVwieWVhci1zZXBhcmF0b3JcIl06OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIGNvbnRlbnQ6IFwi4oCiXCI7XG4gICAgICB9XG5cbiAgICAgIC8qIEN1cnJlbnQgeWVhciAqL1xuXG4gICAgICBbcGFydD1cInllYXJzXCJdIFtwYXJ0PVwieWVhci1udW1iZXJcIl1bY3VycmVudF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAvKiBUb29sYmFyIChmb290ZXIpICovXG5cbiAgICAgIFtwYXJ0PVwidG9vbGJhclwiXSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWx1bW8tc3BhY2Utcyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCAwIDAgdmFyKC0tbHVtby1jb250cmFzdC0xMHBjdCk7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWx1bW8tYm9yZGVyLXJhZGl1cyk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTdweDtcbiAgICAgIH1cblxuICAgICAgQHN1cHBvcnRzIChtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwMCwgIzAwMCkpIG9yICgtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDAwLCAjMDAwKSkge1xuICAgICAgICBbcGFydD1cInRvb2xiYXJcIl0ge1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogVG9kYXkgYW5kIENhbmNlbCBidXR0b25zICovXG5cbiAgICAgIC8qIFRPRE86IFdvdWxkIGJlIGdyZWF0IGlmIEkgY291bGQgYXBwbHkgdGhlIFwidGVydGlhcnlcIiB0aGVtZSBmcm9tIGhlcmUgaW5zdGVhZCBvZiBjb3B5aW5nIHRob3NlIHN0eWxlcyAqL1xuICAgICAgW3BhcnQ9XCJ0b29sYmFyXCJdIFtwYXJ0XFwkPVwiYnV0dG9uXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNzVlbTtcbiAgICAgIH1cblxuICAgICAgLyogTmFycm93IHZpZXdwb3J0IG1vZGUgKGZ1bGxzY3JlZW4pICovXG5cbiAgICAgIDpob3N0KFtmdWxsc2NyZWVuXSkgW3BhcnQ9XCJ0b29sYmFyXCJdIHtcbiAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWJhc2UtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbHNjcmVlbl0pIFtwYXJ0PVwib3ZlcmxheS1oZWFkZXJcIl0ge1xuICAgICAgICBvcmRlcjogLTI7XG4gICAgICAgIGhlaWdodDogdmFyKC0tbHVtby1zaXplLW0pO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1sdW1vLXNwYWNlLXMpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxzY3JlZW5dKSBbcGFydD1cInRvZ2dsZS1idXR0b25cIl0sXG4gICAgICA6aG9zdChbZnVsbHNjcmVlbl0pIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdLFxuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXSBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLyogVmVyeSBuYXJyb3cgc2NyZWVuICh5ZWFyIHNjcm9sbGVyIGluaXRpYWxseSBoaWRkZW4pICovXG5cbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogdmFyKC0tbHVtby1zaXplLXMpO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3llYXJzLXZpc2libGVdKSBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLXByaW1hcnktY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LWNvbnRyYXN0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKiBUT0RPIG1hZ2ljIG51bWJlciAoc2FtZSBhcyB1c2VkIGZvciBpcm9uLW1lZGlhLXF1ZXJ5IGluIHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQpICovXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzRweCkge1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tc2hhZGUtNXBjdCk7XG4gICAgICAgIH1cblxuICAgICAgICBbcGFydD1cInRvb2xiYXJcIl0sXG4gICAgICAgIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBUT0RPIG1ha2UgZGF0ZS1waWNrZXIgYWRhcHQgdG8gdGhlIHdpZHRoIG9mIHRoZSB5ZWFycyBwYXJ0ICovXG4gICAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWJ1ZmZlci13aWR0aDogOTBweDtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFt5ZWFycy12aXNpYmxlXSkgW3BhcnQ9XCJtb250aHNcIl0ge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zaXppbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zcGFjaW5nLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvbWl4aW5zL21lbnUtb3ZlcmxheS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cImx1bW8tZGF0ZS1waWNrZXItb3ZlcmxheVwiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cImx1bW8tbWVudS1vdmVybGF5XCI+XG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICAvKlxuICAgICAgICBXaWR0aDpcbiAgICAgICAgICAgIGRhdGUgY2VsbCB3aWR0aHNcbiAgICAgICAgICArIG1vbnRoIGNhbGVuZGFyIHNpZGUgcGFkZGluZ1xuICAgICAgICAgICsgeWVhciBzY3JvbGxlciB3aWR0aFxuICAgICAgICAqL1xuICAgICAgICB3aWR0aDpcbiAgICAgICAgICBjYWxjKFxuICAgICAgICAgICAgICB2YXIoLS1sdW1vLXNpemUtbSkgKiA3XG4gICAgICAgICAgICArIHZhcigtLWx1bW8tc3BhY2UteHMpICogMlxuICAgICAgICAgICAgKyA1N3B4XG4gICAgICAgICAgKTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLWx1bW8tc2l6ZS1tKSAqIDE0KTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjb250ZW50XCJdIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LW1hc2staW1hZ2U6IG5vbmU7XG4gICAgICAgIG1hc2staW1hZ2U6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCksIChtYXgtaGVpZ2h0OiA0MjBweCkge1xuICAgICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICBoZWlnaHQ6IDcwdmg7XG4gICAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9mb250LWljb25zLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvdGhlbWUvbHVtby92YWFkaW4tdGV4dC1maWVsZC5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cImx1bW8tZGF0ZS1waWNrZXJcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibHVtby1maWVsZC1idXR0b25cIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1sdW1vLWljb25zLWNhbGVuZGFyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLWx1bW8taWNvbnMtY3Jvc3MpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC1zdHlsZXMuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1tb250aC1jYWxlbmRhci1zdHlsZXMuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWRhdGUtcGlja2VyLmpzJztcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zaXppbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zcGFjaW5nLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3R5bGUuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibHVtby1tb250aC1jYWxlbmRhclwiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLW0pO1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1ib2R5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tbHVtby1zcGFjZS14cyk7XG4gICAgICB9XG5cbiAgICAgIC8qIE1vbnRoIGhlYWRlciAqL1xuXG4gICAgICBbcGFydD1cIm1vbnRoLWhlYWRlclwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWhlYWRlci10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1sKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWx1bW8tc3BhY2UtbSk7XG4gICAgICB9XG5cbiAgICAgIC8qIFdlZWsgZGF5cyBhbmQgbnVtYmVycyAqL1xuXG4gICAgICBbcGFydD1cIndlZWtkYXlzXCJdLFxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdLFxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlcnNcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLXhzKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLXRlcnRpYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlzXCJdIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tbHVtby1zcGFjZS1zKTtcbiAgICAgIH1cblxuICAgICAgLyogVE9ETyBzaG91bGQgaGF2ZSBwYXJ0PVwid2Vlay1udW1iZXJcIiBmb3IgdGhlIGNlbGwgaW4gd2Vla2RheXMtY29udGFpbmVyICovXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl06ZW1wdHksXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1sdW1vLXNpemUteHMpO1xuICAgICAgfVxuXG4gICAgICAvKiBEYXRlIGFuZCB3ZWVrIG51bWJlciBjZWxscyAqL1xuXG4gICAgICBbcGFydD1cImRhdGVcIl0sXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyXCJdIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWx1bW8tc2l6ZS1tKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl0ge1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICAgICAgfVxuXG4gICAgICAvKiBUb2RheSBkYXRlICovXG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVt0b2RheV0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAvKiBGb2N1c2VkIGRhdGUgKi9cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgbWluLXdpZHRoOiAyZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDJlbTtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbHVtby1ib3JkZXItcmFkaXVzKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW2ZvY3VzZWRdOjpiZWZvcmUge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tbHVtby1wcmltYXJ5LWNvbG9yLTUwcGN0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZm9jdXNlZF0pKSBbcGFydD1cImRhdGVcIl1bZm9jdXNlZF06OmJlZm9yZSB7XG4gICAgICAgIGFuaW1hdGlvbjogdmFhZGluLWRhdGUtcGlja2VyLW1vbnRoLWNhbGVuZGFyLWZvY3VzLWRhdGUgMS40cyBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyB2YWFkaW4tZGF0ZS1waWNrZXItbW9udGgtY2FsZW5kYXItZm9jdXMtZGF0ZSB7XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFRPRE8gc2hvdWxkIG5vdCByZWx5IG9uIHRoZSByb2xlIGF0dHJpYnV0ZSAqL1xuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3JvbGU9XCJidXR0b25cIl06bm90KFtkaXNhYmxlZF0pOm5vdChbc2VsZWN0ZWRdKTpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LWNvbG9yLTEwcGN0KTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3NlbGVjdGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLXByaW1hcnktY29udHJhc3QtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl1bc2VsZWN0ZWRdOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl1bZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAocG9pbnRlcjogY29hcnNlKSB7XG4gICAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpob3Zlcjpub3QoW3NlbGVjdGVkXSk6OmJlZm9yZSxcbiAgICAgICAgW3BhcnQ9XCJkYXRlXCJdW2ZvY3VzZWRdOm5vdChbc2VsZWN0ZWRdKTo6YmVmb3JlIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgW3BhcnQ9XCJkYXRlXCJdW3JvbGU9XCJidXR0b25cIl06bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtzZWxlY3RlZF06OmJlZm9yZSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBEaXNhYmxlZCAqL1xuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAqIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZGlzYWJsZWQtdGV4dC1jb2xvcikgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZT5cbiAgICBAa2V5ZnJhbWVzIHZhYWRpbi1kYXRlLXBpY2tlci1tb250aC1jYWxlbmRhci1mb2N1cy1kYXRlIHtcbiAgICAgIDUwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdGhlbWUvbHVtby92YWFkaW4tZGF0ZS1waWNrZXIuanMnO1xuIiwiY29uc3QgREVWX01PREVfQ09ERV9SRUdFWFAgPVxuICAvXFwvXFwqXFwqXFxzK3ZhYWRpbi1kZXYtbW9kZTpzdGFydChbXFxzXFxTXSopdmFhZGluLWRldi1tb2RlOmVuZFxccytcXCpcXCpcXC8vaTtcblxuZnVuY3Rpb24gaXNNaW5pZmllZCgpIHtcbiAgZnVuY3Rpb24gdGVzdCgpIHtcbiAgICAvKiogdmFhZGluLWRldi1tb2RlOnN0YXJ0XG4gICAgcmV0dXJuIGZhbHNlO1xuICAgIHZhYWRpbi1kZXYtbW9kZTplbmQgKiovXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHVuY29tbWVudEFuZFJ1bih0ZXN0KTtcbn1cblxuZnVuY3Rpb24gaXNEZXZlbG9wbWVudE1vZGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGlzRm9yY2VkRGV2ZWxvcG1lbnRNb2RlKCkgfHwgKGlzTG9jYWxob3N0KCkgJiYgIWlzTWluaWZpZWQoKSAmJiAhaXNGbG93UHJvZHVjdGlvbk1vZGUoKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBTb21lIGVycm9yIGluIHRoaXMgY29kZSwgYXNzdW1lIHByb2R1Y3Rpb24gc28gbm8gZnVydGhlciBhY3Rpb25zIHdpbGwgYmUgdGFrZW5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNGb3JjZWREZXZlbG9wbWVudE1vZGUoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZhYWRpbi5kZXZlbG9wbWVudG1vZGUuZm9yY2VcIik7XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxob3N0KCkge1xuICByZXR1cm4gKFtcImxvY2FsaG9zdFwiLFwiMTI3LjAuMC4xXCJdLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKSA+PSAwKTtcbn1cblxuZnVuY3Rpb24gaXNGbG93UHJvZHVjdGlvbk1vZGUoKSB7XG4gIGlmICh3aW5kb3cuVmFhZGluICYmIHdpbmRvdy5WYWFkaW4uRmxvdyAmJiB3aW5kb3cuVmFhZGluLkZsb3cuY2xpZW50cykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25Nb2RlQXBwcyA9IE9iamVjdC5rZXlzKHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzKVxuICAgIC5tYXAoa2V5ID0+IHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzW2tleV0pXG4gICAgLmZpbHRlcihjbGllbnQgPT4gY2xpZW50LnByb2R1Y3Rpb25Nb2RlKTtcbiAgICBpZiAocHJvZHVjdGlvbk1vZGVBcHBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHVuY29tbWVudEFuZFJ1bihjYWxsYmFjaywgYXJncykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSBERVZfTU9ERV9DT0RFX1JFR0VYUC5leGVjKGNhbGxiYWNrLnRvU3RyaW5nKCkpO1xuICBpZiAobWF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVxdWlyZXMgQ1NQOiBzY3JpcHQtc3JjICd1bnNhZmUtZXZhbCdcbiAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKG1hdGNoWzFdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlYXQgdGhlIGV4Y2VwdGlvblxuICAgICAgY29uc29sZS5sb2coJ3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yOiB1bmNvbW1lbnRBbmRSdW4oKSBmYWlsZWQnLCBlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhhcmdzKTtcbn1cblxuLy8gQSBndWFyZCBhZ2FpbnN0IHBvbHltZXItbW9kdWxpemVyIHJlbW92aW5nIHRoZSB3aW5kb3cuVmFhZGluXG4vLyBpbml0aWFsaXphdGlvbiBhYm92ZS5cbndpbmRvd1snVmFhZGluJ10gPSB3aW5kb3dbJ1ZhYWRpbiddIHx8IHt9O1xuXG4vKipcbiAqIEluc3BlY3RzIHRoZSBzb3VyY2UgY29kZSBvZiB0aGUgZ2l2ZW4gYGNhbGxiYWNrYCBmdW5jdGlvbiBmb3JcbiAqIHNwZWNpYWxseS1tYXJrZWQgX2NvbW1lbnRlZF8gY29kZS4gSWYgc3VjaCBjb21tZW50ZWQgY29kZSBpcyBmb3VuZCBpbiB0aGVcbiAqIGNhbGxiYWNrIHNvdXJjZSwgdW5jb21tZW50cyBhbmQgcnVucyB0aGF0IGNvZGUgaW5zdGVhZCBvZiB0aGUgY2FsbGJhY2tcbiAqIGl0c2VsZi4gT3RoZXJ3aXNlIHJ1bnMgdGhlIGNhbGxiYWNrIGFzIGlzLlxuICpcbiAqIFRoZSBvcHRpb25hbCBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbnRvIHRoZSBjYWxsYmFjayAvIHVuY29tbWVudGVkIGNvZGUsXG4gKiB0aGUgcmVzdWx0IGlzIHJldHVybmVkLlxuICpcbiAqIFNlZSB0aGUgYGlzTWluaWZpZWQoKWAgZnVuY3Rpb24gc291cmNlIGNvZGUgaW4gdGhpcyBmaWxlIGZvciBhbiBleGFtcGxlLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHJ1bklmRGV2ZWxvcG1lbnRNb2RlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGFyZ3MpIHtcbiAgaWYgKHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlKSB7XG4gICAgcmV0dXJuIHVuY29tbWVudEFuZFJ1bihjYWxsYmFjaywgYXJncyk7XG4gIH1cbn07XG5cbmlmICh3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlID0gaXNEZXZlbG9wbWVudE1vZGUoKTtcbn1cbiIsImltcG9ydCB7IGlkbGVQZXJpb2QgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luYy5qcyc7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgeyBlbnF1ZXVlRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmx1c2guanMnO1xuaW1wb3J0IHsgdXNhZ2VTdGF0aXN0aWNzIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy5qcyc7XG5pZiAoIXdpbmRvdy5WYWFkaW4pIHtcbiAgd2luZG93WydWYWFkaW4nXSA9IHt9O1xufVxuXG4vKipcbiAqIEFycmF5IG9mIFZhYWRpbiBjdXN0b20gZWxlbWVudCBjbGFzc2VzIHRoYXQgaGF2ZSBiZWVuIGZpbmFsaXplZC5cbiAqL1xud2luZG93WydWYWFkaW4nXS5yZWdpc3RyYXRpb25zID0gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zIHx8IFtdO1xuXG4vLyBVc2UgdGhlIGhhY2sgdG8gcHJldmVudCBwb2x5bWVyLW1vZHVsaXplciBmcm9tIGNvbnZlcnRpbmcgdG8gZXhwb3J0c1xud2luZG93WydWYWFkaW4nXS5kZXZlbG9wbWVudE1vZGVDYWxsYmFjayA9IHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2sgfHwge307XG53aW5kb3dbJ1ZhYWRpbiddLmRldmVsb3BtZW50TW9kZUNhbGxiYWNrWyd2YWFkaW4tdXNhZ2Utc3RhdGlzdGljcyddID0gZnVuY3Rpb24oKSB7XG4gIGlmICh1c2FnZVN0YXRpc3RpY3MpIHtcbiAgICB1c2FnZVN0YXRpc3RpY3MoKTtcbiAgfVxufTtcblxubGV0IHN0YXRzSm9iO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnRNaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluRWxlbWVudE1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gIC8qKiBAcHJvdGVjdGVkICovXG4gIHN0YXRpYyBfZmluYWxpemVDbGFzcygpIHtcbiAgICBzdXBlci5fZmluYWxpemVDbGFzcygpO1xuXG4gICAgLy8gUmVnaXN0ZXJzIGEgY2xhc3MgcHJvdG90eXBlIGZvciB0ZWxlbWV0cnkgcHVycG9zZXMuXG4gICAgaWYgKHRoaXMuaXMpIHtcbiAgICAgIHdpbmRvdy5WYWFkaW4ucmVnaXN0cmF0aW9ucy5wdXNoKHRoaXMpO1xuXG4gICAgICBpZiAod2luZG93LlZhYWRpbi5kZXZlbG9wbWVudE1vZGVDYWxsYmFjaykge1xuICAgICAgICBzdGF0c0pvYiA9IERlYm91bmNlci5kZWJvdW5jZShzdGF0c0pvYixcbiAgICAgICAgICBpZGxlUGVyaW9kLCAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZUNhbGxiYWNrWyd2YWFkaW4tdXNhZ2Utc3RhdGlzdGljcyddKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBlbnF1ZXVlRGVib3VuY2VyKHN0YXRzSm9iKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICBpZiAoZG9jdW1lbnQuZG9jdHlwZSA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnVmFhZGluIGNvbXBvbmVudHMgcmVxdWlyZSB0aGUgXCJzdGFuZGFyZHMgbW9kZVwiIGRlY2xhcmF0aW9uLiBQbGVhc2UgYWRkIDwhRE9DVFlQRSBodG1sPiB0byB0aGUgSFRNTCBkb2N1bWVudC4nXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCAnLi4vY29sb3IuanMnO1xuaW1wb3J0ICcuLi9mb250LWljb25zLmpzJztcbmltcG9ydCAnLi4vc2l6aW5nLmpzJztcbmltcG9ydCAnLi4vc3R5bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibHVtby1maWVsZC1idXR0b25cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIFtwYXJ0XFwkPVwiYnV0dG9uXCJdIHtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8taWNvbi1zaXplLW0pO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTYwcGN0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBjb2xvcjtcbiAgICAgICAgY3Vyc29yOiB2YXIoLS1sdW1vLWNsaWNrYWJsZS1jdXJzb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtyZWFkb25seV0pKSBbcGFydFxcJD1cImJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTkwcGN0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnRcXCQ9XCJidXR0b25cIl0sXG4gICAgICA6aG9zdChbcmVhZG9ubHldKSBbcGFydFxcJD1cImJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTIwcGN0KTtcbiAgICAgIH1cblxuICAgICAgW3BhcnRcXCQ9XCJidXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcImx1bW8taWNvbnNcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4uL2NvbG9yLmpzJztcbmltcG9ydCAnLi4vc3BhY2luZy5qcyc7XG5pbXBvcnQgJy4uL3N0eWxlLmpzJztcbmltcG9ydCAnLi4vdHlwb2dyYXBoeS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJsdW1vLXJlcXVpcmVkLWZpZWxkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLXMpO1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMtbSkgLyA0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXSk6OmJlZm9yZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tbHVtby1mb250LXNpemUtcykgKiAxLjUpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXSkge1xuICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0tbHVtby1zcGFjZS1tKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3JlcXVpcmVkXSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1sdW1vLXJlcXVpcmVkLWZpZWxkLWluZGljYXRvciwgXCLigKJcIik7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmVxdWlyZWRdOm5vdChbaGFzLXZhbHVlXSkpIFtwYXJ0PVwibGFiZWxcIl06OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSBbcGFydD1cImxhYmVsXCJdOjphZnRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWVycm9yLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImVycm9yLW1lc3NhZ2VcIl0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMtbSkgLyA0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS14cyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1sdW1vLWxpbmUtaGVpZ2h0LXhzKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZXJyb3ItdGV4dC1jb2xvcik7XG4gICAgICAgIHdpbGwtY2hhbmdlOiBtYXgtaGVpZ2h0O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzIG1heC1oZWlnaHQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDVlbTtcbiAgICAgIH1cblxuICAgICAgLyogTWFyZ2luIHRoYXQgZG9lc27igJl0IHJlc2VydmUgc3BhY2Ugd2hlbiB0aGVyZeKAmXMgbm8gZXJyb3IgbWVzc2FnZSAqL1xuICAgICAgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdOm5vdCg6ZW1wdHkpOjpiZWZvcmUsXG4gICAgICBbcGFydD1cImVycm9yLW1lc3NhZ2VcIl06bm90KDplbXB0eSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMC40ZW07XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2ludmFsaWRdKSkgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdIHtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcblxuaW1wb3J0IHsgQ29udHJvbFN0YXRlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluLmpzJztcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luYy5qcyc7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJ2YWFkaW4tdGV4dC1maWVsZC1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdDo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXFxcMjAwM1wiO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAvKiBTaXplIGFuZCBwb3NpdGlvbiB0aGlzIGVsZW1lbnQgb24gdGhlIHNhbWUgdmVydGljYWwgcG9zaXRpb24gYXMgdGhlIGlucHV0LWZpZWxkIGVsZW1lbnRcbiAgICAgICAgICAgdG8gbWFrZSB2ZXJ0aWNhbCBhbGlnbiBmb3IgdGhlIGhvc3QgZWxlbWVudCB3b3JrIGFzIGV4cGVjdGVkICovXG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnZhYWRpbi10ZXh0LWZpZWxkLWNvbnRhaW5lcixcbiAgICAgIC52YWFkaW4tdGV4dC1hcmVhLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogdmFyKC0tdmFhZGluLXRleHQtZmllbGQtZGVmYXVsdC13aWR0aCwgMTJlbSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl06ZW1wdHkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cblxuICAgICAgLnZhYWRpbi10ZXh0LWZpZWxkLWNvbnRhaW5lciBbcGFydD1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBSZXNldCB0aGUgbmF0aXZlIGlucHV0IHN0eWxlcyAqL1xuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXSxcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKHRleHRhcmVhKSB7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAvKiBEaXNhYmxlIGRlZmF1bHQgaW52YWxpZCBzdHlsZSBpbiBGaXJlZm94ICovXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKCopIHtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXSxcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC8qIFNsb3R0ZWQgYnkgdmFhZGluLXNlbGVjdC10ZXh0LWZpZWxkICovXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChbcGFydD1cInZhbHVlXCJdKSB7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKHRleHRhcmVhKSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXTo6LW1zLWNsZWFyLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaW5wdXQpOjotbXMtY2xlYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXSB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwi4pyVXCI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG5cbmNvbnN0IEhPU1RfUFJPUFMgPSB7XG4gIGRlZmF1bHQ6IFsnbGlzdCcsICdhdXRvZm9jdXMnLCAncGF0dGVybicsICdhdXRvY2FwaXRhbGl6ZScsICdhdXRvY29ycmVjdCcsICdtYXhsZW5ndGgnLFxuICAgICdtaW5sZW5ndGgnLCAnbmFtZScsICdwbGFjZWhvbGRlcicsICdhdXRvY29tcGxldGUnLCAndGl0bGUnXSxcbiAgYWNjZXNzaWJsZTogWydkaXNhYmxlZCcsICdyZWFkb25seScsICdyZXF1aXJlZCcsICdpbnZhbGlkJ11cbn07XG5cbmNvbnN0IFBST1BfVFlQRSA9IHtcbiAgREVGQVVMVDogJ2RlZmF1bHQnLFxuICBBQ0NFU1NJQkxFOiAnYWNjZXNzaWJsZSdcbn07XG5cblxuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKiBAbWl4ZXMgVmFhZGluLkNvbnRyb2xTdGF0ZU1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0RmllbGRNaXhpbiA9IHN1YmNsYXNzID0+IGNsYXNzIFZhYWRpblRleHRGaWVsZE1peGluIGV4dGVuZHMgQ29udHJvbFN0YXRlTWl4aW4oc3ViY2xhc3MpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFdoZXRoZXIgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sIGNhbiBiZSBhdXRvbWF0aWNhbGx5IGNvbXBsZXRlZCBieSB0aGUgYnJvd3Nlci5cbiAgICAgICAqIExpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbnMgYXQ6XG4gICAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjYXR0ci1hdXRvY29tcGxldGVcbiAgICAgICAqL1xuICAgICAgYXV0b2NvbXBsZXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIGEgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IFNhZmFyaSB0aGF0IGlzIHVzZWQgdG8gY29udHJvbCB3aGV0aGVyXG4gICAgICAgKiBhdXRvY29ycmVjdGlvbiBzaG91bGQgYmUgZW5hYmxlZCB3aGVuIHRoZSB1c2VyIGlzIGVudGVyaW5nL2VkaXRpbmcgdGhlIHRleHQuXG4gICAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOlxuICAgICAgICogb246IEVuYWJsZSBhdXRvY29ycmVjdGlvbi5cbiAgICAgICAqIG9mZjogRGlzYWJsZSBhdXRvY29ycmVjdGlvbi5cbiAgICAgICAqL1xuICAgICAgYXV0b2NvcnJlY3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgaXMgYSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkgU2FmYXJpIGFuZCBDaHJvbWUgdGhhdCBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICAgICAgICogYXV0b2NhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBlbmFibGVkIHdoZW4gdGhlIHVzZXIgaXMgZW50ZXJpbmcvZWRpdGluZyB0aGUgdGV4dC5cbiAgICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICAgKiBjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJzIGNhcGl0YWxpemF0aW9uLlxuICAgICAgICogd29yZHM6IFdvcmRzIGNhcGl0YWxpemF0aW9uLlxuICAgICAgICogc2VudGVuY2VzOiBTZW50ZW5jZXMgY2FwaXRhbGl6YXRpb24uXG4gICAgICAgKiBub25lOiBObyBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqL1xuICAgICAgYXV0b2NhcGl0YWxpemU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZnkgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgc2VsZWN0ZWQgd2hlbiB0aGUgZmllbGQgZ2FpbnMgZm9jdXMuXG4gICAgICAgKi9cbiAgICAgIGF1dG9zZWxlY3Q6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc3BsYXkgdGhlIGNsZWFyIGljb24gd2hpY2ggY2xlYXJzIHRoZSBpbnB1dC5cbiAgICAgICAqL1xuICAgICAgY2xlYXJCdXR0b25WaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBFcnJvciB0byBzaG93IHdoZW4gdGhlIGlucHV0IHZhbHVlIGlzIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdHJpbmcgdXNlZCBmb3IgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBvYnNlcnZlcjogJ19sYWJlbENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgKGluIFVuaWNvZGUgY29kZSBwb2ludHMpIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyLlxuICAgICAgICovXG4gICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgKGluIFVuaWNvZGUgY29kZSBwb2ludHMpIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyLlxuICAgICAgICovXG4gICAgICBtaW5sZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIGhpbnQgdG8gdGhlIHVzZXIgb2Ygd2hhdCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgY29udHJvbC5cbiAgICAgICAqL1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSB1c2VyIGNhbm5vdCBtb2RpZnkgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICovXG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIHVzZXIgbXVzdCBmaWxsIGluIGEgdmFsdWUuXG4gICAgICAgKi9cbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICogSXQgY2FuIGJlIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLlxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIHRleHQgZmllbGQgaGFzIHZhbHVlLlxuICAgICAgICovXG4gICAgICBoYXNWYWx1ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBzZXQgdG8gdHJ1ZSwgdXNlciBpcyBwcmV2ZW50ZWQgZnJvbSB0eXBpbmcgYSB2YWx1ZSB0aGF0XG4gICAgICAgKiBjb25mbGljdHMgd2l0aCB0aGUgZ2l2ZW4gYHBhdHRlcm5gLlxuICAgICAgICovXG4gICAgICBwcmV2ZW50SW52YWxpZElucHV0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9sYWJlbElkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgX2Vycm9ySWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbJ19zdGF0ZUNoYW5nZWQoZGlzYWJsZWQsIHJlYWRvbmx5LCBjbGVhckJ1dHRvblZpc2libGUsIGhhc1ZhbHVlKScsXG4gICAgICAnX2hvc3RQcm9wc0NoYW5nZWQoJyArIEhPU1RfUFJPUFMuZGVmYXVsdC5qb2luKCcsICcpICsgJyknLFxuICAgICAgJ19ob3N0QWNjZXNzaWJsZVByb3BzQ2hhbmdlZCgnICsgSE9TVF9QUk9QUy5hY2Nlc3NpYmxlLmpvaW4oJywgJykgKyAnKScsXG4gICAgICAnX2dldEFjdGl2ZUVycm9ySWQoaW52YWxpZCwgZXJyb3JNZXNzYWdlLCBfZXJyb3JJZCknLFxuICAgICAgJ19nZXRBY3RpdmVMYWJlbElkKGxhYmVsLCBfbGFiZWxJZCknXTtcbiAgfVxuXG4gIGdldCBmb2N1c0VsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2xvdHRlZCA9IHRoaXMucXVlcnlTZWxlY3RvcihgJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1bc2xvdD1cIiR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9XCJdYCk7XG4gICAgaWYgKHNsb3R0ZWQpIHtcbiAgICAgIHJldHVybiBzbG90dGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwidmFsdWVcIl0nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgX3Nsb3R0ZWRUYWdOYW1lKCkge1xuICAgIHJldHVybiAnaW5wdXQnO1xuICB9XG5cbiAgX29uSW5wdXQoZSkge1xuICAgIGlmICh0aGlzLl9fcHJldmVudElucHV0KSB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5fX3ByZXZlbnRJbnB1dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByZXZlbnRJbnZhbGlkSW5wdXQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgICAvLyBhZGQgaW5wdXQtcHJldmVudGVkIGF0dHJpYnV0ZSBmb3IgMjAwbXNcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2lucHV0LXByZXZlbnRlZCcsICcnKTtcbiAgICAgICAgdGhpcy5faW5wdXREZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgICAgdGhpcy5faW5wdXREZWJvdW5jZXIsXG4gICAgICAgICAgdGltZU91dC5hZnRlcigyMDApLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaW5wdXQtcHJldmVudGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fX3VzZXJJbnB1dCA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgLy8gTk9URSh5dXJpeSk6IFdvcmthcm91bmQgbmVlZGVkIGZvciBJRTExIGFuZCBFZGdlIGZvciBwcm9wZXIgZGlzcGxheWluZ1xuICAvLyBvZiB0aGUgY2xlYXIgYnV0dG9uIGluc3RlYWQgb2Ygc2V0dGluZyBkaXNwbGF5IHByb3BlcnR5IGZvciBpdCBkZXBlbmRpbmcgb24gc3RhdGUuXG4gIF9zdGF0ZUNoYW5nZWQoZGlzYWJsZWQsIHJlYWRvbmx5LCBjbGVhckJ1dHRvblZpc2libGUsIGhhc1ZhbHVlKSB7XG4gICAgaWYgKCFkaXNhYmxlZCAmJlxuICAgICAgICAhcmVhZG9ubHkgJiZcbiAgICAgICAgY2xlYXJCdXR0b25WaXNpYmxlICYmXG4gICAgICAgIGhhc1ZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2xlYXJCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNsZWFyQnV0dG9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlKGUpIHtcbiAgICBpZiAodGhpcy5fdmFsdWVDbGVhcmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIHRoZSBTaGFkb3cgRE9NLCB0aGUgYGNoYW5nZWAgZXZlbnQgaXMgbm90IGxlYWtlZCBpbnRvIHRoZVxuICAgIC8vIGFuY2VzdG9yIHRyZWUsIHNvIHdlIG11c3QgZG8gdGhpcyBtYW51YWxseS5cbiAgICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBlXG4gICAgICB9LFxuICAgICAgYnViYmxlczogZS5idWJibGVzLFxuICAgICAgY2FuY2VsYWJsZTogZS5jYW5jZWxhYmxlLFxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gIH1cblxuICBfdmFsdWVDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgLy8gc2V0dGluZyBpbml0aWFsIHZhbHVlIHRvIGVtcHR5IHN0cmluZywgc2tpcCB2YWxpZGF0aW9uXG4gICAgaWYgKG5ld1ZhbCA9PT0gJycgJiYgb2xkVmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsICE9PSAnJyAmJiBuZXdWYWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX3VzZXJJbnB1dCkge1xuICAgICAgdGhpcy5fX3VzZXJJbnB1dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gbmV3VmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2xhYmVsQ2hhbmdlZChsYWJlbCkge1xuICAgIGlmIChsYWJlbCAhPT0gJycgJiYgbGFiZWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hhcy1sYWJlbCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2hhcy1sYWJlbCcpO1xuICAgIH1cbiAgfVxuXG4gIF9vblNsb3RDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc2xvdHRlZCA9IHRoaXMucXVlcnlTZWxlY3RvcihgJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1bc2xvdD1cIiR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9XCJdYCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzbG90dGVkICYmICF0aGlzLl9zbG90dGVkSW5wdXQpIHtcbiAgICAgIHRoaXMuX3ZhbGlkYXRlU2xvdHRlZFZhbHVlKHNsb3R0ZWQpO1xuICAgICAgdGhpcy5fYWRkSW5wdXRMaXN0ZW5lcnMoc2xvdHRlZCk7XG4gICAgICB0aGlzLl9hZGRJRUxpc3RlbmVycyhzbG90dGVkKTtcbiAgICAgIHRoaXMuX3Nsb3R0ZWRJbnB1dCA9IHNsb3R0ZWQ7XG4gICAgfSBlbHNlIGlmICghc2xvdHRlZCAmJiB0aGlzLl9zbG90dGVkSW5wdXQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUlucHV0TGlzdGVuZXJzKHRoaXMuX3Nsb3R0ZWRJbnB1dCk7XG4gICAgICB0aGlzLl9yZW1vdmVJRUxpc3RlbmVycyh0aGlzLl9zbG90dGVkSW5wdXQpO1xuICAgICAgdGhpcy5fc2xvdHRlZElucHV0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKFBST1BfVFlQRSkubWFwKGtleSA9PiBQUk9QX1RZUEVba2V5XSkuZm9yRWFjaCh0eXBlID0+XG4gICAgICB0aGlzLl9wcm9wYWdhdGVIb3N0QXR0cmlidXRlcyhIT1NUX1BST1BTW3R5cGVdLm1hcChhdHRyID0+IHRoaXNbYXR0cl0pLCB0eXBlKSk7XG4gIH1cblxuICBfaG9zdFByb3BzQ2hhbmdlZCguLi5hdHRyaWJ1dGVzVmFsdWVzKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlSG9zdEF0dHJpYnV0ZXMoYXR0cmlidXRlc1ZhbHVlcywgUFJPUF9UWVBFLkRFRkFVTFQpO1xuICB9XG5cbiAgX2hvc3RBY2Nlc3NpYmxlUHJvcHNDaGFuZ2VkKC4uLmF0dHJpYnV0ZXNWYWx1ZXMpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVIb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzVmFsdWVzLCBQUk9QX1RZUEUuQUNDRVNTSUJMRSk7XG4gIH1cblxuICBfdmFsaWRhdGVTbG90dGVkVmFsdWUoc2xvdHRlZCkge1xuICAgIGlmIChzbG90dGVkLnZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBkZWZpbmUgdmFsdWUgb24gdGhlIHZhYWRpbi10ZXh0LWZpZWxkIGNvbXBvbmVudCEnKTtcbiAgICAgIHNsb3R0ZWQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBfcHJvcGFnYXRlSG9zdEF0dHJpYnV0ZXMoYXR0cmlidXRlc1ZhbHVlcywgdHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBIT1NUX1BST1BTW3R5cGVdO1xuXG4gICAgaWYgKHR5cGUgPT09ICdhY2Nlc3NpYmxlJykge1xuICAgICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0ciwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1ZhbHVlc1tpbmRleF0sIGlucHV0KTtcbiAgICAgICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoYGFyaWEtJHthdHRyfWAsIGF0dHJpYnV0ZXNWYWx1ZXNbaW5kZXhdLCBpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0ciwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1ZhbHVlc1tpbmRleF0sIGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRPclRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgbm9kZSkge1xuICAgIGlmICghbmFtZSB8fCAhbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSA/ICcnIDogdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGlucHV0IHZhbHVlIHNhdGlzZmllcyBhbGwgY29uc3RyYWludHMgKGlmIGFueSlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkIHx8IHRoaXMucGF0dGVybiB8fCB0aGlzLm1heGxlbmd0aCB8fCB0aGlzLm1pbmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF0aGlzLmludmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgX2FkZElucHV0TGlzdGVuZXJzKG5vZGUpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fYm91bmRPbklucHV0KTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JvdW5kT25CbHVyKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYm91bmRPbkZvY3VzKTtcbiAgfVxuXG4gIF9yZW1vdmVJbnB1dExpc3RlbmVycyhub2RlKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25JbnB1dCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1cik7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JvdW5kT25Gb2N1cyk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgdGhpcy5fYm91bmRPbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgZGVmYXVsdElucHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwidmFsdWVcIl0nKTtcbiAgICB0aGlzLl9zbG90dGVkSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9W3Nsb3Q9XCIke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVwiXWApO1xuICAgIHRoaXMuX2FkZElucHV0TGlzdGVuZXJzKGRlZmF1bHRJbnB1dCk7XG4gICAgdGhpcy5fYWRkSUVMaXN0ZW5lcnMoZGVmYXVsdElucHV0KTtcbiAgICBpZiAodGhpcy5fc2xvdHRlZElucHV0KSB7XG4gICAgICB0aGlzLl9hZGRJRUxpc3RlbmVycyh0aGlzLl9zbG90dGVkSW5wdXQpO1xuICAgICAgdGhpcy5fYWRkSW5wdXRMaXN0ZW5lcnModGhpcy5fc2xvdHRlZElucHV0KTtcbiAgICB9XG5cbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW25hbWU9XCJpbnB1dFwiXSwgW25hbWU9XCJ0ZXh0YXJlYVwiXScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuX29uU2xvdENoYW5nZS5iaW5kKHRoaXMpKTtcblxuICAgIGlmICghKHdpbmRvdy5TaGFkeUNTUyAmJiB3aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzKSkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLiQuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy5fdmFsdWVDbGVhcmluZyA9IHRydWUpO1xuICAgIHRoaXMuJC5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xlYXJCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG5cbiAgICB2YXIgdW5pcXVlSWQgPSBUZXh0RmllbGRNaXhpbi5fdW5pcXVlSWQgPSAxICsgVGV4dEZpZWxkTWl4aW4uX3VuaXF1ZUlkIHx8IDA7XG4gICAgdGhpcy5fZXJyb3JJZCA9IGAke3RoaXMuY29uc3RydWN0b3IuaXN9LWVycm9yLSR7dW5pcXVlSWR9YDtcbiAgICB0aGlzLl9sYWJlbElkID0gYCR7dGhpcy5jb25zdHJ1Y3Rvci5pc30tbGFiZWwtJHt1bmlxdWVJZH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLlxuICAgKiBgPGlyb24tZm9ybT5gIHVzZXMgdGhpcyB0byBjaGVjayB0aGUgdmFsaWRpdHkgb3IgYWxsIGl0cyBlbGVtZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gISh0aGlzLmludmFsaWQgPSAhdGhpcy5jaGVja1ZhbGlkaXR5KCkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICB9XG5cbiAgX29uQmx1cigpIHtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5hdXRvc2VsZWN0KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3QoKTtcbiAgICAgIC8vIGlPUyA5IHdvcmthcm91bmQ6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NDM2NTc0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgOTk5OSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfb25DbGVhckJ1dHRvbkNsaWNrKGUpIHtcbiAgICAvLyBOT1RFKHl1cml5KTogVGhpcyBsaW5lIHdvbid0IGFmZmVjdCBmb2N1cyBvbiB0aGUgaG9zdC4gQ2Fubm90IGJlIHByb3Blcmx5IHRlc3RlZC5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLl92YWx1ZUNsZWFyaW5nID0gZmFsc2U7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiAhdGhpcy5fc2xvdHRlZElucHV0fSkpO1xuICB9XG5cbiAgX29uS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5jbGVhckJ1dHRvblZpc2libGUpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBfYWRkSUVMaXN0ZW5lcnMobm9kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LykpIHtcbiAgICAgIC8vIElFMTEgZGlzcGF0Y2hlcyBgaW5wdXRgIGV2ZW50IGluIGZvbGxvd2luZyBjYXNlczpcbiAgICAgIC8vIC0gZm9jdXMgb3IgYmx1ciwgd2hlbiBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAvLyAtIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSB2YWx1ZSBjaGFuZ2VkXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDEyMjAvXG4gICAgICB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX19wcmV2ZW50SW5wdXQgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX19wcmV2ZW50SW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgICAgdGhpcy5fY3JlYXRlUHJvcGVydHlPYnNlcnZlcigncGxhY2Vob2xkZXInLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIF9yZW1vdmVJRUxpc3RlbmVycyhub2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSkge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRBY3RpdmVFcnJvcklkKGludmFsaWQsIGVycm9yTWVzc2FnZSwgZXJyb3JJZCkge1xuICAgIHRoaXMuX3NldE9yVG9nZ2xlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JyxcbiAgICAgIChlcnJvck1lc3NhZ2UgJiYgaW52YWxpZCA/IGVycm9ySWQgOiB1bmRlZmluZWQpLFxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgX2dldEFjdGl2ZUxhYmVsSWQobGFiZWwsIGxhYmVsSWQpIHtcbiAgICB0aGlzLl9zZXRPclRvZ2dsZUF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JyxcbiAgICAgIChsYWJlbCA/IGxhYmVsSWQgOiB1bmRlZmluZWQpLFxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgX2dldEVycm9yTWVzc2FnZUFyaWFIaWRkZW4oaW52YWxpZCwgZXJyb3JNZXNzYWdlLCBlcnJvcklkKSB7XG4gICAgcmV0dXJuICghKGVycm9yTWVzc2FnZSAmJiBpbnZhbGlkID8gZXJyb3JJZCA6IHVuZGVmaW5lZCkpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHByb3AsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHByb3AsIG9sZFZhbCwgbmV3VmFsKTtcbiAgICAvLyBOZWVkZWQgdW50aWwgRWRnZSBoYXMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzIChwcmVzZW50IGluIEVkZ2UgUHJldmlldylcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoISh3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcykgJiZcbiAgICAgIC9eKGZvY3VzZWR8Zm9jdXMtcmluZ3xpbnZhbGlkfGRpc2FibGVkfHBsYWNlaG9sZGVyfGhhcy12YWx1ZSkkLy50ZXN0KHByb3ApKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIC8vIFNhZmFyaSBoYXMgYW4gaXNzdWUgd2l0aCByZXBhaW50aW5nIHNoYWRvdyByb290IGVsZW1lbnQgc3R5bGVzIHdoZW4gYSBob3N0IGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgIC8vIE5lZWQgdGhpcyB3b3JrYXJvdW5kICh0b2dnbGUgYW55IGlubGluZSBjc3MgcHJvcGVydHkgb24gYW5kIG9mZikgdW50aWwgdGhlIGlzc3VlIGdldHMgZml4ZWQuXG4gICAgY29uc3QgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc1NhZmFyaSAmJiB0aGlzLnJvb3QpIHtcbiAgICAgIGNvbnN0IFdFQktJVF9QUk9QRVJUWSA9ICctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHknO1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc3R5bGVbV0VCS0lUX1BST1BFUlRZXSA9ICd2aXNpYmxlJztcbiAgICAgICAgZWwuc3R5bGVbV0VCS0lUX1BST1BFUlRZXSA9ICcnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgY29tbWl0cyBhIHZhbHVlIGNoYW5nZS5cbiAgICpcbiAgICogQGV2ZW50IGNoYW5nZVxuICAgKi9cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgVGV4dEZpZWxkTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi10ZXh0LWZpZWxkLW1peGluLmpzJztcbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuLyoqXG4gKiBgPHZhYWRpbi10ZXh0LWZpZWxkPmAgaXMgYSBXZWIgQ29tcG9uZW50IGZvciB0ZXh0IGZpZWxkIGNvbnRyb2wgaW4gZm9ybXMuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi10ZXh0LWZpZWxkIGxhYmVsPVwiRmlyc3QgTmFtZVwiPlxuICogPC92YWFkaW4tdGV4dC1maWVsZD5cbiAqIGBgYFxuICpcbiAqICMjIyBQcmVmaXhlcyBhbmQgc3VmZml4ZXNcbiAqXG4gKiBUaGVzZSBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHZhYWRpbi10ZXh0LWZpZWxkPmAgdGhhdCBhcmUgZGlzcGxheWVkXG4gKiBpbmxpbmUgd2l0aCB0aGUgaW5wdXQsIGJlZm9yZSBvciBhZnRlci5cbiAqIEluIG9yZGVyIGZvciBhbiBlbGVtZW50IHRvIGJlIGNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgc2xvdFxuICogYXR0cmlidXRlIHNldCB0byBgcHJlZml4YCAoYW5kIHNpbWlsYXJseSBmb3IgYHN1ZmZpeGApLlxuICpcbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tdGV4dC1maWVsZCBsYWJlbD1cIkVtYWlsIGFkZHJlc3NcIj5cbiAqICAgPGRpdiBzbG90PVwicHJlZml4XCI+U2VudCB0bzo8L2Rpdj5cbiAqICAgPGRpdiBzbG90PVwic3VmZml4XCI+QHZhYWRpbi5jb208L2Rpdj5cbiAqIDwvdmFhZGluLXRleHQtYXJlYT5cbiAqIGBgYFxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuICogLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS1cbiAqIGAtLXZhYWRpbi10ZXh0LWZpZWxkLWRlZmF1bHQtd2lkdGhgIHwgU2V0IHRoZSBkZWZhdWx0IHdpZHRoIG9mIHRoZSBpbnB1dCBmaWVsZCB8IGAxMmVtYFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc2hhZG93IERPTSBwYXJ0cyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS1cbiAqIGBsYWJlbGAgfCBUaGUgbGFiZWwgZWxlbWVudFxuICogYGlucHV0LWZpZWxkYCB8IFRoZSBlbGVtZW50IHRoYXQgd3JhcHMgcHJlZml4LCB2YWx1ZSBhbmQgc3VmZml4XG4gKiBgdmFsdWVgIHwgVGhlIHRleHQgdmFsdWUgZWxlbWVudCBpbnNpZGUgdGhlIGBpbnB1dC1maWVsZGAgZWxlbWVudFxuICogYGVycm9yLW1lc3NhZ2VgIHwgVGhlIGVycm9yIG1lc3NhZ2UgZWxlbWVudFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc3RhdGUgYXR0cmlidXRlcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSAgICB8IERlc2NyaXB0aW9uIHwgUGFydCBuYW1lXG4gKiAtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgZGlzYWJsZWRgIHwgU2V0IHRvIGEgZGlzYWJsZWQgdGV4dCBmaWVsZCB8IDpob3N0XG4gKiBgaGFzLXZhbHVlYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGhhcyBhIHZhbHVlIHwgOmhvc3RcbiAqIGBoYXMtbGFiZWxgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaGFzIGEgbGFiZWwgfCA6aG9zdFxuICogYGludmFsaWRgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaW52YWxpZCB8IDpob3N0XG4gKiBgaW5wdXQtcHJldmVudGVkYCB8IFRlbXBvcmFyaWx5IHNldCB3aGVuIGludmFsaWQgaW5wdXQgaXMgcHJldmVudGVkIHwgOmhvc3RcbiAqIGBmb2N1c2VkYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQgfCA6aG9zdFxuICogYGZvY3VzLXJpbmdgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMga2V5Ym9hcmQgZm9jdXNlZCB8IDpob3N0XG4gKiBgcmVhZG9ubHlgIHwgU2V0IHRvIGEgcmVhZG9ubHkgdGV4dCBmaWVsZCB8IDpob3N0XG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5UZXh0RmllbGRNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgVGV4dEZpZWxkRWxlbWVudCBleHRlbmRzIEVsZW1lbnRNaXhpbihUZXh0RmllbGRNaXhpbihUaGVtYWJsZU1peGluKFBvbHltZXJFbGVtZW50KSkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi10ZXh0LWZpZWxkLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgIC8qIHBvbHltZXItY2xpIGxpbnRlciBicmVha3Mgd2l0aCBlbXB0eSBsaW5lICovXG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ2YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXJcIj5cblxuICAgICAgPGxhYmVsIHBhcnQ9XCJsYWJlbFwiIG9uLWNsaWNrPVwiZm9jdXNcIiBpZD1cIltbX2xhYmVsSWRdXVwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDxkaXYgcGFydD1cImlucHV0LWZpZWxkXCI+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiPjwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXQgcGFydD1cInZhbHVlXCI+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8ZGl2IHBhcnQ9XCJjbGVhci1idXR0b25cIiBpZD1cImNsZWFyQnV0dG9uXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWw9XCJDbGVhclwiPjwvZGl2PlxuICAgICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBwYXJ0PVwiZXJyb3ItbWVzc2FnZVwiIGlkPVwiW1tfZXJyb3JJZF1dXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1oaWRkZW5cXCQ9XCJbW19nZXRFcnJvck1lc3NhZ2VBcmlhSGlkZGVuKGludmFsaWQsIGVycm9yTWVzc2FnZSwgX2Vycm9ySWQpXV1cIj5bW2Vycm9yTWVzc2FnZV1dPC9kaXY+XG5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLXRleHQtZmllbGQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiAnMi4zLjUnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIElkZW50aWZpZXMgYSBsaXN0IG9mIHByZS1kZWZpbmVkIG9wdGlvbnMgdG8gc3VnZ2VzdCB0byB0aGUgdXNlci5cbiAgICAgICAqIFRoZSB2YWx1ZSBtdXN0IGJlIHRoZSBpZCBvZiBhIDxkYXRhbGlzdD4gZWxlbWVudCBpbiB0aGUgc2FtZSBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCB0aGUgdmFsdWUgaXMgY2hlY2tlZCBhZ2FpbnN0LlxuICAgICAgICogVGhlIHBhdHRlcm4gbXVzdCBtYXRjaCB0aGUgZW50aXJlIHZhbHVlLCBub3QganVzdCBzb21lIHN1YnNldC5cbiAgICAgICAqL1xuICAgICAgcGF0dGVybjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSB0byBzaG93IHRvIHRoZSB1c2VyIHdoZW4gdmFsaWRhdGlvbiBmYWlscy5cbiAgICAgICAqL1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVGV4dEZpZWxkRWxlbWVudC5pcywgVGV4dEZpZWxkRWxlbWVudCk7XG5cbmV4cG9ydCB7IFRleHRGaWVsZEVsZW1lbnQgfTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zaXppbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zcGFjaW5nLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3R5bGUuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvbWl4aW5zL3JlcXVpcmVkLWZpZWxkLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvZm9udC1pY29ucy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL21peGlucy9maWVsZC1idXR0b24uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJsdW1vLXRleHQtZmllbGRcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJsdW1vLXJlcXVpcmVkLWZpZWxkIGx1bW8tZmllbGQtYnV0dG9uXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIC0tbHVtby10ZXh0LWZpZWxkLXNpemU6IHZhcigtLWx1bW8tc2l6ZS1tKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1tKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWx1bW8tZm9udC1mYW1pbHkpO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbHVtby1zcGFjZS14cykgMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tbHVtby10ZXh0LWZpZWxkLXNpemUpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdOm5vdChbcmVhZG9ubHldKSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAvKiBTbG90dGVkIGJ5IHZhYWRpbi1zZWxlY3QtdGV4dC1maWVsZCAqL1xuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoW3BhcnQ9XCJ2YWx1ZVwiXSkge1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLWx1bW8tdGV4dC1maWVsZC1zaXplKTtcbiAgICAgICAgcGFkZGluZzogMCAwLjI1ZW07XG4gICAgICAgIC0tX2x1bW8tdGV4dC1maWVsZC1vdmVyZmxvdy1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQsICMwMDAgMS4yNWVtKTtcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB2YXIoLS1fbHVtby10ZXh0LWZpZWxkLW92ZXJmbG93LW1hc2staW1hZ2UpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOmZvY3VzLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaW5wdXQpOmZvY3VzLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpOmZvY3VzIHtcbiAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xuICAgICAgICBtYXNrLWltYWdlOiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKlxuICAgICAgICBUT0RPOiBDU1MgY3VzdG9tIHByb3BlcnR5IGluIFxcYG1hc2staW1hZ2VcXGAgY2F1c2VzIGNyYXNoIGluIEVkZ2VcbiAgICAgICAgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzE1NDE1MDg5L1xuICAgICAgKi9cbiAgICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KSxcbiAgICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChbcGFydD1cInZhbHVlXCJdKSB7XG4gICAgICAgICAgbWFzay1pbWFnZTogdmFyKC0tX2x1bW8tdGV4dC1maWVsZC1vdmVyZmxvdy1tYXNrLWltYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNzVzIDAuMDVzO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXTo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTc1cyAwLjA1cztcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTc1cyAwLjFzO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTEwcGN0KTtcbiAgICAgICAgcGFkZGluZzogMCBjYWxjKDAuMzc1ZW0gKyB2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMpIC8gNCAtIDFweCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGN1cnNvcjogdGV4dDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLyogVXNlZCBmb3IgaG92ZXIgYW5kIGFjdGl2YXRpb24gZWZmZWN0cyAqL1xuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tY29udHJhc3QtNTBwY3QpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMsIG9wYWNpdHkgMC4ycztcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBIb3ZlciAqL1xuXG4gICAgICA6aG9zdCg6aG92ZXI6bm90KFtyZWFkb25seV0pOm5vdChbZm9jdXNlZF0pKSBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyOm5vdChbcmVhZG9ubHldKTpub3QoW2ZvY3VzZWRdKSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICB9XG5cbiAgICAgIC8qIFRvdWNoIGRldmljZSBhZGp1c3RtZW50ICovXG4gICAgICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICA6aG9zdCg6aG92ZXI6bm90KFtyZWFkb25seV0pOm5vdChbZm9jdXNlZF0pKSBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCg6aG92ZXI6bm90KFtyZWFkb25seV0pOm5vdChbZm9jdXNlZF0pKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KDphY3RpdmU6bm90KFtyZWFkb25seV0pOm5vdChbZm9jdXNlZF0pKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFRyaWdnZXIgd2hlbiBub3QgZm9jdXNpbmcgdXNpbmcgdGhlIGtleWJvYXJkICovXG4gICAgICA6aG9zdChbZm9jdXNlZF06bm90KFtmb2N1cy1yaW5nXSk6bm90KFtyZWFkb25seV0pKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cywgMXM7XG4gICAgICB9XG5cbiAgICAgIC8qIEZvY3VzLXJpbmcgKi9cblxuICAgICAgOmhvc3QoW2ZvY3VzLXJpbmddKSBbcGFydD1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWx1bW8tcHJpbWFyeS1jb2xvci01MHBjdCk7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlYWQtb25seSBhbmQgZGlzYWJsZWQgKi9cbiAgICAgIDpob3N0KFtyZWFkb25seV0pIFtwYXJ0PVwidmFsdWVcIl06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cInZhbHVlXCJdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3JlYWRvbmx5XSkgW3BhcnQ9XCJ2YWx1ZVwiXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cInZhbHVlXCJdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtyZWFkb25seV0pIFtwYXJ0PVwidmFsdWVcIl06Oi1tb3otcGxhY2Vob2xkZXIsXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cInZhbHVlXCJdOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3JlYWRvbmx5XSkgW3BhcnQ9XCJ2YWx1ZVwiXTo6cGxhY2Vob2xkZXIsXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cInZhbHVlXCJdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlYWQtb25seSAqL1xuXG4gICAgICA6aG9zdChbcmVhZG9ubHldKSBbcGFydD1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmVhZG9ubHldKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tbHVtby1jb250cmFzdC0zMHBjdCk7XG4gICAgICB9XG5cbiAgICAgIC8qIERpc2FibGVkIHN0eWxlICovXG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTVwY3QpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cImxhYmVsXCJdLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJ2YWx1ZVwiXSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKCopIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS1sdW1vLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAvKiBJbnZhbGlkIHN0eWxlICovXG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWx1bW8tZXJyb3ItY29sb3ItMTBwY3QpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbHVtby1lcnJvci1jb2xvci01MHBjdCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXVtmb2N1cy1yaW5nXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1sdW1vLWVycm9yLWNvbG9yLTUwcGN0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2lucHV0LXByZXZlbnRlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLyogU21hbGwgdGhlbWUgKi9cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInNtYWxsXCJdKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUtcyk7XG4gICAgICAgIC0tbHVtby10ZXh0LWZpZWxkLXNpemU6IHZhcigtLWx1bW8tc2l6ZS1zKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInNtYWxsXCJdW2hhcy1sYWJlbF0pIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8tZm9udC1zaXplLXhzKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cInNtYWxsXCJdW2hhcy1sYWJlbF0pIFtwYXJ0PVwiZXJyb3ItbWVzc2FnZVwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbHVtby1mb250LXNpemUteHhzKTtcbiAgICAgIH1cblxuICAgICAgLyogVGV4dCBhbGlnbiAqL1xuXG4gICAgICA6aG9zdChbdGhlbWV+PVwiYWxpZ24tY2VudGVyXCJdKSBbcGFydD1cInZhbHVlXCJdIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtLV9sdW1vLXRleHQtZmllbGQtb3ZlcmZsb3ctbWFzay1pbWFnZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImFsaWduLXJpZ2h0XCJdKSBbcGFydD1cInZhbHVlXCJdIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIC0tX2x1bW8tdGV4dC1maWVsZC1vdmVyZmxvdy1tYXNrLWltYWdlOiBub25lO1xuICAgICAgfVxuXG4gICAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICAvKiBGaXJlZm94IGlzIHNtYXJ0IGVub3VnaCB0byBhbGlnbiBvdmVyZmxvd2luZyB0ZXh0IHRvIHJpZ2h0ICovXG4gICAgICAgIDpob3N0KFt0aGVtZX49XCJhbGlnbi1yaWdodFwiXSkgW3BhcnQ9XCJ2YWx1ZVwiXSB7XG4gICAgICAgICAgLS1fbHVtby10ZXh0LWZpZWxkLW92ZXJmbG93LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgMC4yNWVtLCAjMDAwIDEuNWVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBTbG90dGVkIGNvbnRlbnQgKi9cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoOm5vdChbcGFydF0pOm5vdChpcm9uLWljb24pOm5vdChpbnB1dCk6bm90KHRleHRhcmVhKSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tbHVtby1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG5cbiAgICAgIC8qIFNsb3R0ZWQgaWNvbnMgKi9cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaXJvbi1pY29uKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1sdW1vLWNvbnRyYXN0LTYwcGN0KTtcbiAgICAgICAgd2lkdGg6IHZhcigtLWx1bW8taWNvbi1zaXplLW0pO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWx1bW8taWNvbi1zaXplLW0pO1xuICAgICAgfVxuXG4gICAgICAvKiBWYWFkaW4gaWNvbnMgYXJlIGJhc2VkIG9uIGEgMTZ4MTYgZ3JpZCAodW5saWtlIEx1bW8gYW5kIE1hdGVyaWFsIGljb25zIHdpdGggMjR4MjQpLCBzbyB0aGV5IGxvb2sgdG9vIGJpZyBieSBkZWZhdWx0ICovXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpcm9uLWljb25baWNvbl49XCJ2YWFkaW46XCJdKSB7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbHVtby1pY29ucy1jcm9zcyk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLXRleHQtZmllbGQtc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbiIsIi8qIFRoaXMgZmlsZSBpcyBhdXRvZ2VuZXJhdGVkIGZyb20gc3JjL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLnRwbC5odG1sICovXG4vKlxuXG5UaGlzIHNjcmlwdCBnYXRoZXJzIHVzYWdlIHN0YXRpc3RpY3MgZnJvbSB0aGUgYXBwbGljYXRpb24gcnVubmluZyBpbiBkZXZlbG9wbWVudCBtb2RlLlxuXG5TdGF0aXN0aWNzIGdhdGhlcmluZyBpcyBhdXRvbWF0aWNhbGx5IGRpc2FibGVkIGFuZCBleGNsdWRlZCBmcm9tIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG5Gb3IgZGV0YWlscyBhbmQgdG8gb3B0LW91dCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MuXG5cbiovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG5pbXBvcnQgeyBydW5JZkRldmVsb3BtZW50TW9kZSB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IvdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IuanMnO1xuXG5mdW5jdGlvbiBtYXliZUdhdGhlckFuZFNlbmRTdGF0cygpIHtcbiAgLyoqIHZhYWRpbi1kZXYtbW9kZTpzdGFydFxuICAoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIGdldFBvbHltZXJWZXJzaW9uID0gZnVuY3Rpb24gZ2V0UG9seW1lclZlcnNpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuUG9seW1lciAmJiB3aW5kb3cuUG9seW1lci52ZXJzaW9uO1xufTtcblxudmFyIFN0YXRpc3RpY3NHYXRoZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc0dhdGhlcmVyKGxvZ2dlcikge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NHYXRoZXJlcik7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc0dhdGhlcmVyLCBbe1xuICAgIGtleTogJ2ZyYW1ld29ya1ZlcnNpb25EZXRlY3RvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmFtZXdvcmtWZXJzaW9uRGV0ZWN0b3JzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0Zsb3cnOiBmdW5jdGlvbiBGbG93KCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuVmFhZGluICYmIHdpbmRvdy5WYWFkaW4uRmxvdyAmJiB3aW5kb3cuVmFhZGluLkZsb3cuY2xpZW50cykge1xuICAgICAgICAgICAgdmFyIGZsb3dWZXJzaW9ucyA9IE9iamVjdC5rZXlzKHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4gd2luZG93LlZhYWRpbi5GbG93LmNsaWVudHNba2V5XTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjbGllbnQuZ2V0VmVyc2lvbkluZm87XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvKCkuZmxvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZsb3dWZXJzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmbG93VmVyc2lvbnNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnVmFhZGluIEZyYW1ld29yayc6IGZ1bmN0aW9uIFZhYWRpbkZyYW1ld29yaygpIHtcbiAgICAgICAgICBpZiAod2luZG93LnZhYWRpbiAmJiB3aW5kb3cudmFhZGluLmNsaWVudHMpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXdvcmtWZXJzaW9ucyA9IE9iamVjdC52YWx1ZXMod2luZG93LnZhYWRpbi5jbGllbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRWZXJzaW9uSW5mbygpLnZhYWRpblZlcnNpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChmcmFtZXdvcmtWZXJzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmcmFtZXdvcmtWZXJzaW9uc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdBbmd1bGFySnMnOiBmdW5jdGlvbiBBbmd1bGFySnMoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyICYmIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24gJiYgd2luZG93LmFuZ3VsYXIudmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24uZnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdBbmd1bGFyJzogZnVuY3Rpb24gQW5ndWxhcigpIHtcbiAgICAgICAgICBpZiAod2luZG93Lm5nKSB7XG4gICAgICAgICAgICB2YXIgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctdmVyc2lvbl1cIik7XG4gICAgICAgICAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0YWdzWzBdLmdldEF0dHJpYnV0ZShcIm5nLXZlcnNpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnQmFja2JvbmUuanMnOiBmdW5jdGlvbiBCYWNrYm9uZUpzKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuQmFja2JvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuQmFja2JvbmUuVkVSU0lPTjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdSZWFjdCc6IGZ1bmN0aW9uIFJlYWN0KCkge1xuICAgICAgICAgIHZhciByZWFjdFNlbGVjdG9yID0gJ1tkYXRhLXJlYWN0cm9vdF0sIFtkYXRhLXJlYWN0aWRdJztcbiAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlYWN0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwdWJsaXNoIHRoZSB2ZXJzaW9uIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdFbWJlcic6IGZ1bmN0aW9uIEVtYmVyKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuRW0gJiYgd2luZG93LkVtLlZFUlNJT04pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRW0uVkVSU0lPTjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5FbWJlciAmJiB3aW5kb3cuRW1iZXIuVkVSU0lPTikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5FbWJlci5WRVJTSU9OO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2pRdWVyeSc6IGZ1bmN0aW9uIChfalF1ZXJ5KSB7XG4gICAgICAgICAgZnVuY3Rpb24galF1ZXJ5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9qUXVlcnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqUXVlcnkudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2pRdWVyeS50b1N0cmluZygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4galF1ZXJ5O1xuICAgICAgICB9KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJyAmJiBqUXVlcnkucHJvdG90eXBlLmpxdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LnByb3RvdHlwZS5qcXVlcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgJ1BvbHltZXInOiBmdW5jdGlvbiBQb2x5bWVyKCkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gZ2V0UG9seW1lclZlcnNpb24oKTtcbiAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnVnVlLmpzJzogZnVuY3Rpb24gVnVlSnMoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5WdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuVnVlLnZlcnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFVzZWRWYWFkaW5FbGVtZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZWRWYWFkaW5FbGVtZW50cyhlbGVtZW50cykge1xuICAgICAgdmFyIHZlcnNpb24gPSBnZXRQb2x5bWVyVmVyc2lvbigpO1xuICAgICAgdmFyIGVsZW1lbnRDbGFzc2VzID0gdm9pZCAwO1xuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKCcyJykgPT09IDApIHtcbiAgICAgICAgLy8gUG9seW1lciAyOiBjb21wb25lbnRzIGNsYXNzZXMgYXJlIHN0b3JlZCBpbiB3aW5kb3cuVmFhZGluXG4gICAgICAgIGVsZW1lbnRDbGFzc2VzID0gT2JqZWN0LmtleXMod2luZG93LlZhYWRpbikubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5WYWFkaW5bY107XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBjLmlzO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBvbHltZXIgMzogY29tcG9uZW50cyBjbGFzc2VzIGFyZSBzdG9yZWQgaW4gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zXG4gICAgICAgIGVsZW1lbnRDbGFzc2VzID0gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zIHx8IFtdO1xuICAgICAgfVxuICAgICAgZWxlbWVudENsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoa2xhc3MpIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBrbGFzcy52ZXJzaW9uID8ga2xhc3MudmVyc2lvbiA6IFwiMC4wLjBcIjtcbiAgICAgICAgZWxlbWVudHNba2xhc3MuaXNdID0geyB2ZXJzaW9uOiB2ZXJzaW9uIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVc2VkVmFhZGluVGhlbWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlZFZhYWRpblRoZW1lcyh0aGVtZXMpIHtcbiAgICAgIFsnTHVtbycsICdNYXRlcmlhbCddLmZvckVhY2goZnVuY3Rpb24gKHRoZW1lTmFtZSkge1xuICAgICAgICB2YXIgdGhlbWU7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gZ2V0UG9seW1lclZlcnNpb24oKTtcbiAgICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKCcyJykgPT09IDApIHtcbiAgICAgICAgICAvLyBQb2x5bWVyIDI6IHRoZW1lcyBhcmUgc3RvcmVkIGluIHdpbmRvdy5WYWFkaW5cbiAgICAgICAgICB0aGVtZSA9IHdpbmRvdy5WYWFkaW5bdGhlbWVOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQb2x5bWVyIDM6IHRoZW1lcyBhcmUgc3RvcmVkIGluIGN1c3RvbSBlbGVtZW50IHJlZ2lzdHJ5XG4gICAgICAgICAgdGhlbWUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3ZhYWRpbi0nICsgdGhlbWVOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLXN0eWxlcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGVtZSAmJiB0aGVtZS52ZXJzaW9uKSB7XG4gICAgICAgICAgdGhlbWVzW3RoZW1lTmFtZV0gPSB7IHZlcnNpb246IHRoZW1lLnZlcnNpb24gfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RnJhbWV3b3JrcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1ld29ya3MoZnJhbWV3b3Jrcykge1xuICAgICAgdmFyIGRldGVjdG9ycyA9IHRoaXMuZnJhbWV3b3JrVmVyc2lvbkRldGVjdG9ycygpO1xuICAgICAgT2JqZWN0LmtleXMoZGV0ZWN0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZXdvcmspIHtcbiAgICAgICAgdmFyIGRldGVjdG9yID0gZGV0ZWN0b3JzW2ZyYW1ld29ya107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHZlcnNpb24gPSBkZXRlY3RvcigpO1xuICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICBmcmFtZXdvcmtzW2ZyYW1ld29ya10gPSB7IFwidmVyc2lvblwiOiB2ZXJzaW9uIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2F0aGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2F0aGVyKHN0b3JhZ2UpIHtcbiAgICAgIHZhciBzdG9yZWRTdGF0cyA9IHN0b3JhZ2UucmVhZCgpO1xuICAgICAgdmFyIGdhdGhlcmVkU3RhdHMgPSB7fTtcbiAgICAgIHZhciB0eXBlcyA9IFtcImVsZW1lbnRzXCIsIFwiZnJhbWV3b3Jrc1wiLCBcInRoZW1lc1wiXTtcblxuICAgICAgdHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBnYXRoZXJlZFN0YXRzW3R5cGVdID0ge307XG4gICAgICAgIGlmICghc3RvcmVkU3RhdHNbdHlwZV0pIHtcbiAgICAgICAgICBzdG9yZWRTdGF0c1t0eXBlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIHByZXZpb3VzU3RhdHMgPSBKU09OLnN0cmluZ2lmeShzdG9yZWRTdGF0cyk7XG5cbiAgICAgIHRoaXMuZ2V0VXNlZFZhYWRpbkVsZW1lbnRzKGdhdGhlcmVkU3RhdHMuZWxlbWVudHMpO1xuICAgICAgdGhpcy5nZXRGcmFtZXdvcmtzKGdhdGhlcmVkU3RhdHMuZnJhbWV3b3Jrcyk7XG4gICAgICB0aGlzLmdldFVzZWRWYWFkaW5UaGVtZXMoZ2F0aGVyZWRTdGF0cy50aGVtZXMpO1xuXG4gICAgICB2YXIgbm93ID0gdGhpcy5ub3c7XG4gICAgICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ2F0aGVyZWRTdGF0c1t0eXBlXSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKCFzdG9yZWRTdGF0c1t0eXBlXVtrZXldIHx8IF90eXBlb2Yoc3RvcmVkU3RhdHNbdHlwZV1ba2V5XSkgIT0gX3R5cGVvZih7fSkpIHtcbiAgICAgICAgICAgIHN0b3JlZFN0YXRzW3R5cGVdW2tleV0gPSB7IFwiZmlyc3RVc2VkXCI6IG5vdyB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBEaXNjYXJkcyBhbnkgcHJldmlvdXNseSBsb2dnZWQgdmVyc2lvbiBudW1lYnJcbiAgICAgICAgICBzdG9yZWRTdGF0c1t0eXBlXVtrZXldLnZlcnNpb24gPSBnYXRoZXJlZFN0YXRzW3R5cGVdW2tleV0udmVyc2lvbjtcbiAgICAgICAgICBzdG9yZWRTdGF0c1t0eXBlXVtrZXldLmxhc3RVc2VkID0gbm93O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgbmV3U3RhdHMgPSBKU09OLnN0cmluZ2lmeShzdG9yZWRTdGF0cyk7XG4gICAgICBzdG9yYWdlLndyaXRlKG5ld1N0YXRzKTtcbiAgICAgIGlmIChuZXdTdGF0cyAhPSBwcmV2aW91c1N0YXRzICYmIE9iamVjdC5rZXlzKHN0b3JlZFN0YXRzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiTmV3IHN0YXRzOiBcIiArIG5ld1N0YXRzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0YXRpc3RpY3NHYXRoZXJlcjtcbn0oKTtcblxudmFyIFN0YXRpc3RpY3NTdG9yYWdlID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0aXN0aWNzU3RvcmFnZShrZXkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aXN0aWNzU3RvcmFnZSk7XG5cbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFN0YXRpc3RpY3NTdG9yYWdlLCBbe1xuICAgIGtleTogJ3JlYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKCkge1xuICAgICAgdmFyIGxvY2FsU3RvcmFnZVN0YXRzU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5rZXkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlU3RhdHNTdHJpbmcgPyBsb2NhbFN0b3JhZ2VTdGF0c1N0cmluZyA6ICd7fScpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnd3JpdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZShkYXRhKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgZGF0YSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMua2V5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc0VtcHR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICAgIHZhciBzdG9yZWRTdGF0cyA9IHRoaXMucmVhZCgpO1xuICAgICAgdmFyIGVtcHR5ID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5rZXlzKHN0b3JlZFN0YXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0b3JlZFN0YXRzW2tleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBlbXB0eSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3RhdGlzdGljc1N0b3JhZ2U7XG59KCk7XG5cbnZhciBTdGF0aXN0aWNzU2VuZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0aXN0aWNzU2VuZGVyKHVybCwgbG9nZ2VyKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGlzdGljc1NlbmRlcik7XG5cbiAgICB0aGlzLnVybCA9IHVybDtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFN0YXRpc3RpY3NTZW5kZXIsIFt7XG4gICAga2V5OiAnc2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmQoZGF0YSwgZXJyb3JIYW5kbGVyKSB7XG4gICAgICB2YXIgbG9nZ2VyID0gdGhpcy5sb2dnZXI7XG5cbiAgICAgIGlmIChuYXZpZ2F0b3Iub25MaW5lID09PSBmYWxzZSkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJPZmZsaW5lLCBjYW4ndCBzZW5kXCIpO1xuICAgICAgICBlcnJvckhhbmRsZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbG9nZ2VyLmRlYnVnKFwiU2VuZGluZyBkYXRhIHRvIFwiICsgdGhpcy51cmwpO1xuXG4gICAgICB2YXIgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXEud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN0YXRzIHNlbnQsIG5vdGhpbmcgbW9yZSB0byBkb1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJSZXNwb25zZTogXCIgKyByZXEucmVzcG9uc2VUZXh0KTtcbiAgICAgIH0pO1xuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlNlbmQgZmFpbGVkXCIpO1xuICAgICAgICBlcnJvckhhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlNlbmQgYWJvcnRlZFwiKTtcbiAgICAgICAgZXJyb3JIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5vcGVuKFwiUE9TVFwiLCB0aGlzLnVybCk7XG4gICAgICByZXEuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICByZXEuc2VuZChkYXRhKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0YXRpc3RpY3NTZW5kZXI7XG59KCk7XG5cbnZhciBTdGF0aXN0aWNzTG9nZ2VyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdGF0aXN0aWNzTG9nZ2VyKGlkKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGlzdGljc0xvZ2dlcik7XG5cbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTdGF0aXN0aWNzTG9nZ2VyLCBbe1xuICAgIGtleTogJ19pc0RlYnVnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzRGVidWcoKSB7XG4gICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ2YWFkaW4uXCIgKyB0aGlzLmlkICsgXCIuZGVidWdcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVidWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWJ1Zyhtc2cpIHtcbiAgICAgIGlmICh0aGlzLl9pc0RlYnVnKCkpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKHRoaXMuaWQgKyBcIjogXCIgKyBtc2cpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3RhdGlzdGljc0xvZ2dlcjtcbn0oKTtcblxudmFyIFVzYWdlU3RhdGlzdGljcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVXNhZ2VTdGF0aXN0aWNzKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFVzYWdlU3RhdGlzdGljcyk7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy50aW1lTm93ID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuICAgIHRoaXMuZ2F0aGVyRGVsYXkgPSAxMDsgLy8gRGVsYXkgYmV0d2VlbiBsb2FkaW5nIHRoaXMgZmlsZSBhbmQgZ2F0aGVyaW5nIHN0YXRzXG4gICAgdGhpcy5pbml0aWFsRGVsYXkgPSAyNCAqIDYwICogNjA7XG5cbiAgICB0aGlzLmxvZ2dlciA9IG5ldyBTdGF0aXN0aWNzTG9nZ2VyKFwic3RhdGlzdGljc1wiKTtcbiAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU3RhdGlzdGljc1N0b3JhZ2UoXCJ2YWFkaW4uc3RhdGlzdGljcy5iYXNrZXRcIik7XG4gICAgdGhpcy5nYXRoZXJlciA9IG5ldyBTdGF0aXN0aWNzR2F0aGVyZXIodGhpcy5sb2dnZXIpO1xuICAgIHRoaXMuc2VuZGVyID0gbmV3IFN0YXRpc3RpY3NTZW5kZXIoXCJodHRwczovL3Rvb2xzLnZhYWRpbi5jb20vdXNhZ2Utc3RhdHMvc3VibWl0XCIsIHRoaXMubG9nZ2VyKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFVzYWdlU3RhdGlzdGljcywgW3tcbiAgICBrZXk6ICdtYXliZUdhdGhlckFuZFNlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXliZUdhdGhlckFuZFNlbmQoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLm9wdE91dEtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5nYXRoZXJlci5nYXRoZXIodGhpcy5zdG9yYWdlKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5tYXliZVNlbmQoKTtcbiAgICAgIH0sIHRoaXMuZ2F0aGVyRGVsYXkgKiAxMDAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsb3R0ZXJ5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG90dGVyeSgpIHtcbiAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIDw9IDAuMDU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3VycmVudE1vbnRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3VycmVudE1vbnRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93LmdldFllYXIoKSAqIDEyICsgdGhpcy5ub3cuZ2V0TW9udGgoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXliZVNlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXliZVNlbmQoKSB7XG4gICAgICB2YXIgZmlyc3RVc2UgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLmZpcnN0VXNlS2V5KSk7XG4gICAgICB2YXIgbW9udGhQcm9jZXNzZWQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLm1vbnRoUHJvY2Vzc2VkS2V5KSk7XG5cbiAgICAgIGlmICghZmlyc3RVc2UpIHtcbiAgICAgICAgLy8gVXNlIGEgZ3JhY2UgcGVyaW9kIHRvIGF2b2lkIGludGVyZmVyaW5nIHdpdGggdGVzdHMsIGluY29nbml0byBtb2RlIGV0Y1xuICAgICAgICBmaXJzdFVzZSA9IHRoaXMudGltZU5vdztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLmZpcnN0VXNlS2V5LCBmaXJzdFVzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRpbWVOb3cgPCBmaXJzdFVzZSArIHRoaXMuaW5pdGlhbERlbGF5ICogMTAwMCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIk5vIHN0YXRpc3RpY3Mgd2lsbCBiZSBzZW50IHVudGlsIHRoZSBpbml0aWFsIGRlbGF5IG9mIFwiICsgdGhpcy5pbml0aWFsRGVsYXkgKyBcInMgaGFzIHBhc3NlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudE1vbnRoKCkgPD0gbW9udGhQcm9jZXNzZWQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJUaGlzIG1vbnRoIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVc2FnZVN0YXRpc3RpY3MubW9udGhQcm9jZXNzZWRLZXksIHRoaXMuY3VycmVudE1vbnRoKCkpO1xuICAgICAgLy8gVXNlIHJhbmRvbSBzYW1wbGluZ1xuICAgICAgaWYgKHRoaXMubG90dGVyeSgpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiQ29uZ3JhdHVsYXRpb25zLCB3ZSBoYXZlIGEgd2lubmVyIVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiU29ycnksIG5vIHN0YXRzIGZyb20geW91IHRoaXMgdGltZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZCgpIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHRoZSBsYXRlc3QgZGF0YVxuICAgICAgdGhpcy5nYXRoZXJlci5nYXRoZXIodGhpcy5zdG9yYWdlKTtcblxuICAgICAgLy8gUmVhZCwgc2VuZCBhbmQgY2xlYW4gdXBcbiAgICAgIHZhciBkYXRhID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgIGRhdGFbXCJmaXJzdFVzZVwiXSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3MuZmlyc3RVc2VLZXkpKTtcbiAgICAgIGRhdGFbXCJ1c2FnZVN0YXRpc3RpY3NWZXJzaW9uXCJdID0gVXNhZ2VTdGF0aXN0aWNzLnZlcnNpb247XG4gICAgICB2YXIgaW5mbyA9ICdUaGlzIHJlcXVlc3QgY29udGFpbnMgdXNhZ2Ugc3RhdGlzdGljcyBnYXRoZXJlZCBmcm9tIHRoZSBhcHBsaWNhdGlvbiBydW5uaW5nIGluIGRldmVsb3BtZW50IG1vZGUuIFxcblxcblN0YXRpc3RpY3MgZ2F0aGVyaW5nIGlzIGF1dG9tYXRpY2FsbHkgZGlzYWJsZWQgYW5kIGV4Y2x1ZGVkIGZyb20gcHJvZHVjdGlvbiBidWlsZHMuXFxuXFxuRm9yIGRldGFpbHMgYW5kIHRvIG9wdC1vdXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLlxcblxcblxcblxcbic7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnNlbmRlci5zZW5kKGluZm8gKyBKU09OLnN0cmluZ2lmeShkYXRhKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZXZlcnQgdGhlICdtb250aCBwcm9jZXNzZWQnIGZsYWdcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLm1vbnRoUHJvY2Vzc2VkS2V5LCBzZWxmLmN1cnJlbnRNb250aCgpIC0gMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ3ZlcnNpb24nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEoKSB7XG4gICAgICByZXR1cm4gJzIuMC4xJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmaXJzdFVzZUtleScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSgpIHtcbiAgICAgIHJldHVybiAndmFhZGluLnN0YXRpc3RpY3MuZmlyc3R1c2UnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21vbnRoUHJvY2Vzc2VkS2V5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxKCkge1xuICAgICAgcmV0dXJuICd2YWFkaW4uc3RhdGlzdGljcy5tb250aFByb2Nlc3NlZCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3B0T3V0S2V5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxKCkge1xuICAgICAgcmV0dXJuICd2YWFkaW4uc3RhdGlzdGljcy5vcHRvdXQnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVXNhZ2VTdGF0aXN0aWNzO1xufSgpO1xuXG50cnkge1xuICB3aW5kb3cuVmFhZGluID0gd2luZG93LlZhYWRpbiB8fCB7fTtcbiAgd2luZG93LlZhYWRpbi51c2FnZVN0YXRzQ2hlY2tlciA9IHdpbmRvdy5WYWFkaW4udXNhZ2VTdGF0c0NoZWNrZXIgfHwgbmV3IFVzYWdlU3RhdGlzdGljcygpO1xuICB3aW5kb3cuVmFhZGluLnVzYWdlU3RhdHNDaGVja2VyLm1heWJlR2F0aGVyQW5kU2VuZCgpO1xufSBjYXRjaCAoZSkge1xuICAvLyBJbnRlbnRpb25hbGx5IGlnbm9yZWQgYXMgdGhpcyBpcyBub3QgYSBwcm9ibGVtIGluIHRoZSBhcHAgYmVpbmcgZGV2ZWxvcGVkXG59XG5cbn0oKSk7XG5cbiAgdmFhZGluLWRldi1tb2RlOmVuZCAqKi9cbn1cblxuZXhwb3J0IGNvbnN0IHVzYWdlU3RhdGlzdGljcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAodHlwZW9mIHJ1bklmRGV2ZWxvcG1lbnRNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJ1bklmRGV2ZWxvcG1lbnRNb2RlKG1heWJlR2F0aGVyQW5kU2VuZFN0YXRzKTtcbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQXlDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7Ozs7Ozs7Ozs7Ozs7QUFzR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7QUF2SkE7QUFDQTtBQW9FQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQURBO0FBUEE7QUFXQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBbkdBO0FBQ0E7QUE2SkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMlFBOzs7Ozs7Ozs7Ozs7QUNsUkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBNUdBO0FBQUE7QUFBQTtBQWdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUF0SEE7QUFBQTtBQUFBO0FBMEhBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcElBO0FBQUE7QUFBQTtBQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEpBO0FBQUE7QUFBQTtBQXVKQTtBQUNBO0FBeEpBO0FBQUE7QUFBQTtBQTJKQTtBQUNBO0FBRUE7Ozs7O0FBOUpBO0FBQUE7QUFBQTtBQXdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBaExBO0FBQUE7QUFBQTtBQXFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQTdMQTtBQUFBO0FBQUE7QUFtTUE7QUFDQTtBQUFBO0FBQ0E7QUFyTUE7QUFBQTtBQUFBO0FBd01BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXBOQTtBQUFBO0FBQUE7QUF1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBeE9BO0FBQUE7QUFBQTtBQTRPQTtBQUNBO0FBQ0E7QUFDQTtBQS9PQTtBQUFBO0FBQUE7QUFtS0E7QUFDQTtBQUNBO0FBcktBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUF4QkE7QUE0QkE7QUE5QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUFEQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBakNBO0FBQUE7QUFBQTtBQXlDQTtBQUlBO0FBRUE7Ozs7Ozs7OztBQS9DQTtBQUFBO0FBQUE7QUF3REE7QUFDQTtBQUVBOzs7Ozs7OztBQTNEQTtBQUFBO0FBQUE7QUFtRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFuRkE7QUFBQTtBQUFBO0FBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQTdGQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3U0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBbFRBO0FBQUE7QUFBQTtBQW9UQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFwVUE7QUFBQTtBQUFBO0FBd1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQWpWQTtBQUFBO0FBQUE7QUFxVkE7QUFDQTtBQUNBO0FBQ0E7QUF4VkE7QUFBQTtBQUFBO0FBMlZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7OztBQWxXQTtBQUFBO0FBQUE7QUFzV0E7QUFDQTtBQUNBO0FBQ0E7QUF6V0E7QUFBQTtBQUFBO0FBMFhBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyWUE7QUFBQTtBQUFBO0FBd1lBO0FBQ0E7QUF6WUE7QUFBQTtBQUFBO0FBNFlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxhQTtBQUFBO0FBQUE7QUFxYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBOWFBO0FBQUE7QUFBQTtBQWliQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpjQTtBQUFBO0FBQUE7QUFvY0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUEzY0E7QUFBQTtBQUFBO0FBOGNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5kQTtBQUFBO0FBQUE7QUFzZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFuZUE7QUFBQTtBQUFBO0FBc2VBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExZUE7QUFBQTtBQUFBO0FBNmVBO0FBQ0E7QUE5ZUE7QUFBQTtBQUFBO0FBaWZBO0FBQ0E7QUFsZkE7QUFBQTtBQUFBO0FBcWZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBemhCQTtBQUFBO0FBQUE7QUE0aEJBO0FBQ0E7QUFDQTtBQUNBO0FBL2hCQTtBQUFBO0FBQUE7QUFraUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQWhsQkE7QUFBQTtBQUFBO0FBaWxCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBOWxCQTtBQUFBO0FBQUE7QUFpbUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7QUF2b0JBO0FBQUE7QUFBQTtBQThvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFwcEJBO0FBQUE7QUFBQTtBQTZwQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOXFCQTtBQUFBO0FBQUE7QUFpckJBO0FBQ0E7QUFDQTtBQUNBO0FBcHJCQTtBQUFBO0FBQUE7QUF1ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVyQkE7QUFBQTtBQUFBO0FBK3JCQTtBQUNBO0FBQUE7QUFDQTtBQWpzQkE7QUFBQTtBQUFBO0FBb3NCQTtBQUNBO0FBQ0E7QUFDQTtBQXZzQkE7QUFBQTtBQUFBO0FBMHNCQTtBQUNBO0FBRUE7Ozs7QUE3c0JBO0FBQUE7QUFBQTtBQWl0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6dEJBO0FBQUE7QUFBQTtBQTR0QkE7QUFDQTtBQTd0QkE7QUFBQTtBQUFBO0FBZ3VCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUEzQ0E7QUE2Q0E7QUF6eEJBO0FBQUE7QUFBQTtBQTR4QkE7QUFDQTtBQUNBO0FBQ0E7QUEveEJBO0FBQUE7QUFBQTtBQWt5QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdHlCQTtBQUFBO0FBQUE7QUF5eUJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBdHpCQTtBQUFBO0FBQUE7QUF5ekJBO0FBQ0E7QUFDQTtBQUNBO0FBNXpCQTtBQUFBO0FBQUE7QUE0V0E7QUFDQTtBQTdXQTtBQUFBO0FBQUE7QUFnWEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBdlhBO0FBQUE7QUFBQTtBQSt6QkE7QUFDQTtBQUVBOzs7Ozs7QUFsMEJBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQ0E7QUE0Q0E7QUEvQ0E7QUFDQTtBQWlEQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFyUkE7QUF1UkE7QUE1UkE7QUFBQTtBQUFBO0FBK1JBO0FBT0E7QUF0U0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBMlFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWhCQTtBQWtCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBdkRBO0FBeURBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXgxQkE7QUFDQTtBQW9MQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBdkVBO0FBeUVBOzs7O0FBeFFBO0FBQ0E7QUE2MUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6M0JBOzs7OztBQUtBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBZ0NBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpRkE7Ozs7Ozs7Ozs7Ozs7QUErR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQVpBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBU0E7QUFDQTtBQUNBOzs7QUFuS0E7QUFDQTtBQTJDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUF2Q0E7QUF5Q0E7OztBQUVBO0FBQ0E7QUFHQTs7OztBQTVHQTtBQUNBO0FBMktBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFJBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFvR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUE2REE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQUFBO0FBQUE7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQXRKQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE5UEE7QUFDQTtBQWdEQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFwQ0E7QUF5Q0E7Ozs7QUFsR0E7QUFDQTtBQWlXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25YQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQXNKQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBelVBO0FBQ0E7QUFtRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQTVEQTtBQWtFQTs7O0FBRUE7QUFDQTtBQUdBOzs7O0FBcEpBO0FBQ0E7QUE0VUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFtTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF5Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFrQkE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9KQTs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFvQkE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBMUJBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFnQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBNkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9HQTtBQUVBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFNQTs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUErTEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBMU5BO0FBQUE7QUFBQTtBQTJOQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwT0E7QUFBQTtBQUFBO0FBdU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQXJQQTtBQUFBO0FBQUE7QUF3UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL1FBO0FBQUE7QUFBQTtBQWtSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2UkE7QUFBQTtBQUFBO0FBeVJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFFQTtBQTlTQTtBQUFBO0FBQUE7QUFnVEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBbFRBO0FBQUE7QUFBQTtBQW9UQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUF0VEE7QUFBQTtBQUFBO0FBeVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3VEE7QUFBQTtBQUFBO0FBK1RBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3VUE7QUFBQTtBQUFBO0FBZ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBM1ZBO0FBQUE7QUFBQTtBQWdXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyV0E7QUFBQTtBQUFBO0FBd1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1V0E7QUFBQTtBQUFBO0FBK1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuWEE7QUFBQTtBQUFBO0FBcVhBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBdFpBO0FBQUE7QUFBQTtBQTZaQTtBQUNBO0FBOVpBO0FBQUE7QUFBQTtBQWlhQTtBQUNBO0FBbGFBO0FBQUE7QUFBQTtBQXFhQTtBQUNBO0FBdGFBO0FBQUE7QUFBQTtBQXdhQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhiQTtBQUFBO0FBQUE7QUFtYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXhiQTtBQUFBO0FBQUE7QUEyYkE7QUFDQTtBQUNBO0FBQ0E7QUE5YkE7QUFBQTtBQUFBO0FBZ2NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWpkQTtBQUFBO0FBQUE7QUFvZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBemRBO0FBQUE7QUFBQTtBQTRkQTtBQUdBO0FBL2RBO0FBQUE7QUFBQTtBQWtlQTtBQUdBO0FBcmVBO0FBQUE7QUFBQTtBQXdlQTtBQUNBO0FBRUE7Ozs7QUEzZUE7QUFBQTtBQUFBO0FBK2VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQXBnQkE7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBcExBO0FBQUE7QUFBQTtBQXdMQTtBQUNBO0FBekxBO0FBQUE7QUFBQTtBQTRMQTtBQUNBO0FBN0xBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7OztBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQXpKQTtBQTZKQTtBQS9KQTtBQUFBO0FBQUE7QUFrS0E7QUFLQTtBQXZLQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBMEJBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQXBCQTtBQXdCQTs7OztBQS9EQTtBQUNBO0FBaUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9SQTs7Ozs7Ozs7Ozs7O0FDOVJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQVFBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK2NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=