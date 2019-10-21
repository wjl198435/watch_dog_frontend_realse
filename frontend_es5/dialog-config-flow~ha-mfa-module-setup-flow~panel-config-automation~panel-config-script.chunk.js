(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"],{

/***/ "./src/components/ha-form.js":
/*!***********************************!*\
  !*** ./src/components/ha-form.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .error {\n          color: red;\n        }\n        paper-checkbox {\n          display: inline-block;\n          padding: 22px 0;\n        }\n      </style>\n      <template is=\"dom-if\" if=\"[[_isArray(schema)]]\" restamp=\"\">\n        <template is=\"dom-if\" if=\"[[error.base]]\">\n          <div class=\"error\">[[computeError(error.base, schema)]]</div>\n        </template>\n\n        <template is=\"dom-repeat\" items=\"[[schema]]\">\n          <ha-form\n            data=\"[[_getValue(data, item)]]\"\n            schema=\"[[item]]\"\n            error=\"[[_getValue(error, item)]]\"\n            on-data-changed=\"_valueChanged\"\n            compute-error=\"[[computeError]]\"\n            compute-label=\"[[computeLabel]]\"\n            compute-suffix=\"[[computeSuffix]]\"\n          ></ha-form>\n        </template>\n      </template>\n      <template is=\"dom-if\" if=\"[[!_isArray(schema)]]\" restamp=\"\">\n        <template is=\"dom-if\" if=\"[[error]]\">\n          <div class=\"error\">[[computeError(error, schema)]]</div>\n        </template>\n\n        <template\n          is=\"dom-if\"\n          if='[[_equals(schema.type, \"string\")]]'\n          restamp=\"\"\n        >\n          <template\n            is=\"dom-if\"\n            if='[[_includes(schema.name, \"password\")]]'\n            restamp=\"\"\n          >\n            <paper-input\n              type=\"[[_passwordFieldType(unmaskedPassword)]]\"\n              label=\"[[computeLabel(schema)]]\"\n              value=\"{{data}}\"\n              required=\"[[schema.required]]\"\n              auto-validate=\"[[schema.required]]\"\n              error-message=\"Required\"\n            >\n              <paper-icon-button\n                toggles\n                active=\"{{unmaskedPassword}}\"\n                slot=\"suffix\"\n                icon=\"[[_passwordFieldIcon(unmaskedPassword)]]\"\n                id=\"iconButton\"\n                title=\"Click to toggle between masked and clear password\"\n              >\n              </paper-icon-button>\n            </paper-input>\n          </template>\n          <template\n            is=\"dom-if\"\n            if='[[!_includes(schema.name, \"password\")]]'\n            restamp=\"\"\n          >\n            <paper-input\n              label=\"[[computeLabel(schema)]]\"\n              value=\"{{data}}\"\n              required=\"[[schema.required]]\"\n              auto-validate=\"[[schema.required]]\"\n              error-message=\"Required\"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template\n          is=\"dom-if\"\n          if='[[_equals(schema.type, \"integer\")]]'\n          restamp=\"\"\n        >\n          <template is=\"dom-if\" if=\"[[_isRange(schema)]]\" restamp=\"\">\n            <div>\n              [[computeLabel(schema)]]\n              <ha-paper-slider\n                pin=\"\"\n                value=\"{{data}}\"\n                min=\"[[schema.valueMin]]\"\n                max=\"[[schema.valueMax]]\"\n              ></ha-paper-slider>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!_isRange(schema)]]\" restamp=\"\">\n            <paper-input\n              label=\"[[computeLabel(schema)]]\"\n              value=\"{{data}}\"\n              type=\"number\"\n              required=\"[[schema.required]]\"\n              auto-validate=\"[[schema.required]]\"\n              error-message=\"Required\"\n            ></paper-input>\n          </template>\n        </template>\n\n        <template is=\"dom-if\" if='[[_equals(schema.type, \"float\")]]' restamp=\"\">\n          <!-- TODO -->\n          <paper-input\n            label=\"[[computeLabel(schema)]]\"\n            value=\"{{data}}\"\n            required=\"[[schema.required]]\"\n            auto-validate=\"[[schema.required]]\"\n            error-message=\"Required\"\n          >\n            <span suffix=\"\" slot=\"suffix\">[[computeSuffix(schema)]]</span>\n          </paper-input>\n        </template>\n\n        <template\n          is=\"dom-if\"\n          if='[[_equals(schema.type, \"boolean\")]]'\n          restamp=\"\"\n        >\n          <div>\n            <paper-checkbox checked=\"{{data}}\"\n              >[[computeLabel(schema)]]</paper-checkbox\n            >\n          </div>\n        </template>\n\n        <template\n          is=\"dom-if\"\n          if='[[_equals(schema.type, \"select\")]]'\n          restamp=\"\"\n        >\n          <paper-dropdown-menu label=\"[[computeLabel(schema)]]\">\n            <paper-listbox\n              slot=\"dropdown-content\"\n              attr-for-selected=\"item-name\"\n              selected=\"{{data}}\"\n            >\n              <template is=\"dom-repeat\" items=\"[[schema.options]]\">\n                <paper-item item-name$=\"[[_optionValue(item)]]\"\n                  >[[_optionLabel(item)]]</paper-item\n                >\n              </template>\n            </paper-listbox>\n          </paper-dropdown-menu>\n        </template>\n      </template>\n    "]);

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











/*
 * @appliesMixin EventsMixin
 */

var HaForm =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaForm, _EventsMixin);

  function HaForm() {
    _classCallCheck(this, HaForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaForm).apply(this, arguments));
  }

  _createClass(HaForm, [{
    key: "focus",
    value: function focus() {
      var input = this.shadowRoot.querySelector("ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu");

      if (!input) {
        return;
      }

      input.focus();
    }
  }, {
    key: "_isArray",
    value: function _isArray(val) {
      return Array.isArray(val);
    }
  }, {
    key: "_isRange",
    value: function _isRange(schema) {
      return "valueMin" in schema && "valueMax" in schema;
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_includes",
    value: function _includes(a, b) {
      return a.indexOf(b) >= 0;
    }
  }, {
    key: "_getValue",
    value: function _getValue(obj, item) {
      if (obj) {
        return obj[item.name];
      }

      return null;
    }
  }, {
    key: "_valueChanged",
    value: function _valueChanged(ev) {
      var value = ev.detail.value;

      if (ev.model.item.type === "integer") {
        value = Number(ev.detail.value);
      }

      this.set(["data", ev.model.item.name], value);
    }
  }, {
    key: "_passwordFieldType",
    value: function _passwordFieldType(unmaskedPassword) {
      return unmaskedPassword ? "text" : "password";
    }
  }, {
    key: "_passwordFieldIcon",
    value: function _passwordFieldIcon(unmaskedPassword) {
      return unmaskedPassword ? "hass:eye-off" : "hass:eye";
    }
  }, {
    key: "_optionValue",
    value: function _optionValue(item) {
      return Array.isArray(item) ? item[0] : item;
    }
  }, {
    key: "_optionLabel",
    value: function _optionLabel(item) {
      return Array.isArray(item) ? item[1] : item;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        data: {
          type: Object,
          notify: true
        },
        schema: Object,
        error: Object,
        // A function that computes the label to be displayed for a given
        // schema object.
        computeLabel: {
          type: Function,
          value: function value() {
            return function (schema) {
              return schema && schema.name;
            };
          }
        },
        // A function that computes the suffix to be displayed for a given
        // schema object.
        computeSuffix: {
          type: Function,
          value: function value() {
            return function (schema) {
              return schema && schema.description && schema.description.unit_of_measurement;
            };
          }
        },
        // A function that computes an error message to be displayed for a
        // given error ID, and relevant schema object
        computeError: {
          type: Function,
          value: function value() {
            return function (error, schema) {
              return error;
            };
          } // eslint-disable-line no-unused-vars

        }
      };
    }
  }]);

  return HaForm;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]));

customElements.define("ha-form", HaForm);

/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
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
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

var PaperSliderClass = customElements.get("paper-slider");

var HaPaperSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaPaperSlider, _PaperSliderClass);

  function HaPaperSlider() {
    _classCallCheck(this, HaPaperSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperSlider).apply(this, arguments));
  }

  _createClass(HaPaperSlider, null, [{
    key: "template",
    get: function get() {
      var tpl = document.createElement("template");
      tpl.innerHTML = PaperSliderClass.template.innerHTML;
      var styleEl = document.createElement("style");
      styleEl.innerHTML = "\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir=\"rtl\"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ";
      tpl.content.appendChild(styleEl);
      return tpl;
    }
  }]);

  return HaPaperSlider;
}(PaperSliderClass);

customElements.define("ha-paper-slider", HaPaperSlider);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93fmhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvd35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctc2NyaXB0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFGb3JtIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWNoZWNrYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMjJweCAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc0FycmF5KHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yLmJhc2VdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbY29tcHV0ZUVycm9yKGVycm9yLmJhc2UsIHNjaGVtYSldXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc2NoZW1hXV1cIj5cbiAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgZGF0YT1cIltbX2dldFZhbHVlKGRhdGEsIGl0ZW0pXV1cIlxuICAgICAgICAgICAgc2NoZW1hPVwiW1tpdGVtXV1cIlxuICAgICAgICAgICAgZXJyb3I9XCJbW19nZXRWYWx1ZShlcnJvciwgaXRlbSldXVwiXG4gICAgICAgICAgICBvbi1kYXRhLWNoYW5nZWQ9XCJfdmFsdWVDaGFuZ2VkXCJcbiAgICAgICAgICAgIGNvbXB1dGUtZXJyb3I9XCJbW2NvbXB1dGVFcnJvcl1dXCJcbiAgICAgICAgICAgIGNvbXB1dGUtbGFiZWw9XCJbW2NvbXB1dGVMYWJlbF1dXCJcbiAgICAgICAgICAgIGNvbXB1dGUtc3VmZml4PVwiW1tjb21wdXRlU3VmZml4XV1cIlxuICAgICAgICAgID48L2hhLWZvcm0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaXNBcnJheShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvcl1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+W1tjb21wdXRlRXJyb3IoZXJyb3IsIHNjaGVtYSldXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcInN0cmluZ1wiKV1dJ1xuICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj0nW1tfaW5jbHVkZXMoc2NoZW1hLm5hbWUsIFwicGFzc3dvcmRcIildXSdcbiAgICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiW1tfcGFzc3dvcmRGaWVsZFR5cGUodW5tYXNrZWRQYXNzd29yZCldXVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgdG9nZ2xlc1xuICAgICAgICAgICAgICAgIGFjdGl2ZT1cInt7dW5tYXNrZWRQYXNzd29yZH19XCJcbiAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBpY29uPVwiW1tfcGFzc3dvcmRGaWVsZEljb24odW5tYXNrZWRQYXNzd29yZCldXVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNsaWNrIHRvIHRvZ2dsZSBiZXR3ZWVuIG1hc2tlZCBhbmQgY2xlYXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj0nW1shX2luY2x1ZGVzKHNjaGVtYS5uYW1lLCBcInBhc3N3b3JkXCIpXV0nXG4gICAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJpbnRlZ2VyXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2lzUmFuZ2Uoc2NoZW1hKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXG4gICAgICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgICAgICBwaW49XCJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc2NoZW1hLnZhbHVlTWluXV1cIlxuICAgICAgICAgICAgICAgIG1heD1cIltbc2NoZW1hLnZhbHVlTWF4XV1cIlxuICAgICAgICAgICAgICA+PC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2lzUmFuZ2Uoc2NoZW1hKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwiZmxvYXRcIildXScgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgIDwhLS0gVE9ETyAtLT5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPltbY29tcHV0ZVN1ZmZpeChzY2hlbWEpXV08L3NwYW4+XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJib29sZWFuXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94IGNoZWNrZWQ9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgID5bW2NvbXB1dGVMYWJlbChzY2hlbWEpXV08L3BhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic2VsZWN0XCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYS5vcHRpb25zXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tfb3B0aW9uVmFsdWUoaXRlbSldXVwiXG4gICAgICAgICAgICAgICAgICA+W1tfb3B0aW9uTGFiZWwoaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBPYmplY3QsXG4gICAgICBlcnJvcjogT2JqZWN0LFxuXG4gICAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgdGhlIGxhYmVsIHRvIGJlIGRpc3BsYXllZCBmb3IgYSBnaXZlblxuICAgICAgLy8gc2NoZW1hIG9iamVjdC5cbiAgICAgIGNvbXB1dGVMYWJlbDoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6ICgpID0+IChzY2hlbWEpID0+IHNjaGVtYSAmJiBzY2hlbWEubmFtZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIEEgZnVuY3Rpb24gdGhhdCBjb21wdXRlcyB0aGUgc3VmZml4IHRvIGJlIGRpc3BsYXllZCBmb3IgYSBnaXZlblxuICAgICAgLy8gc2NoZW1hIG9iamVjdC5cbiAgICAgIGNvbXB1dGVTdWZmaXg6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiAoKSA9PiAoc2NoZW1hKSA9PlxuICAgICAgICAgIHNjaGVtYSAmJlxuICAgICAgICAgIHNjaGVtYS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHNjaGVtYS5kZXNjcmlwdGlvbi51bml0X29mX21lYXN1cmVtZW50LFxuICAgICAgfSxcblxuICAgICAgLy8gQSBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIGFuIGVycm9yIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGZvciBhXG4gICAgICAvLyBnaXZlbiBlcnJvciBJRCwgYW5kIHJlbGV2YW50IHNjaGVtYSBvYmplY3RcbiAgICAgIGNvbXB1dGVFcnJvcjoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6ICgpID0+IChlcnJvciwgc2NoZW1hKSA9PiBlcnJvciwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiaGEtZm9ybSwgcGFwZXItaW5wdXQsIGhhLXBhcGVyLXNsaWRlciwgcGFwZXItY2hlY2tib3gsIHBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuICAgICk7XG5cbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIF9pc0FycmF5KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG4gIH1cblxuICBfaXNSYW5nZShzY2hlbWEpIHtcbiAgICByZXR1cm4gXCJ2YWx1ZU1pblwiIGluIHNjaGVtYSAmJiBcInZhbHVlTWF4XCIgaW4gc2NoZW1hO1xuICB9XG5cbiAgX2VxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICBfaW5jbHVkZXMoYSwgYikge1xuICAgIHJldHVybiBhLmluZGV4T2YoYikgPj0gMDtcbiAgfVxuXG4gIF9nZXRWYWx1ZShvYmosIGl0ZW0pIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqW2l0ZW0ubmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQ2hhbmdlZChldikge1xuICAgIGxldCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoZXYubW9kZWwuaXRlbS50eXBlID09PSBcImludGVnZXJcIikge1xuICAgICAgdmFsdWUgPSBOdW1iZXIoZXYuZGV0YWlsLnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXQoW1wiZGF0YVwiLCBldi5tb2RlbC5pdGVtLm5hbWVdLCB2YWx1ZSk7XG4gIH1cblxuICBfcGFzc3dvcmRGaWVsZFR5cGUodW5tYXNrZWRQYXNzd29yZCkge1xuICAgIHJldHVybiB1bm1hc2tlZFBhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG4gIH1cblxuICBfcGFzc3dvcmRGaWVsZEljb24odW5tYXNrZWRQYXNzd29yZCkge1xuICAgIHJldHVybiB1bm1hc2tlZFBhc3N3b3JkID8gXCJoYXNzOmV5ZS1vZmZcIiA6IFwiaGFzczpleWVcIjtcbiAgfVxuXG4gIF9vcHRpb25WYWx1ZShpdGVtKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtWzBdIDogaXRlbTtcbiAgfVxuXG4gIF9vcHRpb25MYWJlbChpdGVtKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtWzFdIDogaXRlbTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1mb3JtXCIsIEhhRm9ybSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4yZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4xZW07XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHRwbC5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHJldHVybiB0cGw7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLXNsaWRlclwiLCBIYVBhcGVyU2xpZGVyKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBNkxBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXJQQTtBQUNBO0FBc0pBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSEE7QUEzQkE7QUFnQ0E7Ozs7QUEzTEE7QUFDQTtBQXdQQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UUE7QUFFQTs7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW9EQTtBQUNBO0FBQ0E7Ozs7QUEzREE7QUFDQTtBQTREQTs7OztBIiwic291cmNlUm9vdCI6IiJ9