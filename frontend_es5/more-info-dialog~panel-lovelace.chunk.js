(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-lovelace"],{

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
var debounce = function (func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    // @ts-ignore
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable:no-this-assignment
        // @ts-ignore
        var context = this;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};


/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");


var paperDropdownClass = customElements.get("paper-dropdown-menu");
// patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183
var HaPaperDropdownClass = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperDropdownClass, _super);
    function HaPaperDropdownClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaPaperDropdownClass.prototype.ready = function () {
        var _this = this;
        _super.prototype.ready.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            if (window.getComputedStyle(_this).direction === "rtl") {
                _this.style.textAlign = "right";
            }
        }, 100);
    };
    return HaPaperDropdownClass;
}(paperDropdownClass));

customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);


/***/ }),

/***/ "./src/components/paper-time-input.js":
/*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
/*! exports provided: PaperTimeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperTimeInput", function() { return PaperTimeInput; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          @apply --paper-font-common-base;\n        }\n\n        paper-input {\n          width: 30px;\n          text-align: center;\n          --paper-input-container-input: {\n            /* Damn you firefox\n             * Needed to hide spin num in firefox\n             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box\n             */\n            -moz-appearance: textfield;\n            @apply --paper-time-input-cotnainer;\n          }\n          --paper-input-container-input-webkit-spinner: {\n            -webkit-appearance: none;\n            margin: 0;\n            display: none;\n          }\n          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;\n        }\n\n        paper-dropdown-menu {\n          width: 55px;\n          padding: 0;\n          /* Force ripple to use the whole container */\n          --paper-dropdown-menu-ripple: {\n            color: var(\n              --paper-time-input-dropdown-ripple-color,\n              var(--primary-color)\n            );\n          }\n          --paper-input-container-input: {\n            @apply --paper-font-button;\n            text-align: center;\n            padding-left: 5px;\n            @apply --paper-time-dropdown-input-cotnainer;\n          }\n          --paper-input-container-underline: {\n            border-color: transparent;\n          }\n          --paper-input-container-underline-focus: {\n            border-color: transparent;\n          }\n        }\n\n        paper-item {\n          cursor: pointer;\n          text-align: center;\n          font-size: 14px;\n        }\n\n        paper-listbox {\n          padding: 0;\n        }\n\n        label {\n          @apply --paper-font-caption;\n        }\n\n        .time-input-wrap {\n          @apply --layout-horizontal;\n          @apply --layout-no-wrap;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      </style>\n\n      <label hidden$=\"[[hideLabel]]\">[[label]]</label>\n      <div class=\"time-input-wrap\">\n        <!-- Hour Input -->\n        <paper-input\n          id=\"hour\"\n          type=\"number\"\n          value=\"{{hour}}\"\n          on-change=\"_shouldFormatHour\"\n          required=\"\"\n          auto-validate=\"[[autoValidate]]\"\n          prevent-invalid-input=\"\"\n          maxlength=\"2\"\n          max=\"[[_computeHourMax(format)]]\"\n          min=\"0\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n          <span suffix=\"\" slot=\"suffix\">:</span>\n        </paper-input>\n\n        <!-- Min Input -->\n        <paper-input\n          id=\"min\"\n          type=\"number\"\n          value=\"{{min}}\"\n          on-change=\"_formatMin\"\n          required=\"\"\n          auto-validate=\"[[autoValidate]]\"\n          prevent-invalid-input=\"\"\n          maxlength=\"2\"\n          max=\"59\"\n          min=\"0\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n        </paper-input>\n\n        <!-- Dropdown Menu -->\n        <paper-dropdown-menu\n          id=\"dropdown\"\n          required=\"\"\n          hidden$=\"[[_equal(format, 24)]]\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n          <paper-listbox\n            attr-for-selected=\"name\"\n            selected=\"{{amPm}}\"\n            slot=\"dropdown-content\"\n          >\n            <paper-item name=\"AM\">AM</paper-item>\n            <paper-item name=\"PM\">PM</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    "]);

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
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/






var PaperTimeInput =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(PaperTimeInput, _PolymerElement);

  function PaperTimeInput() {
    _classCallCheck(this, PaperTimeInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaperTimeInput).apply(this, arguments));
  }

  _createClass(PaperTimeInput, [{
    key: "validate",

    /**
     * Validate the inputs
     * @return {boolean}
     */
    value: function validate() {
      var valid = true; // Validate hour & min fields

      if (!this.$.hour.validate() | !this.$.min.validate()) {
        valid = false;
      } // Validate AM PM if 12 hour time


      if (this.format === 12 && !this.$.dropdown.validate()) {
        valid = false;
      }

      return valid;
    }
    /**
     * Create time string
     */

  }, {
    key: "_computeTime",
    value: function _computeTime(min, hour, amPm) {
      if (hour && min) {
        // No ampm on 24 hr time
        if (this.format === 24) {
          amPm = "";
        }

        return hour + ":" + min + " " + amPm;
      }

      return undefined;
    }
    /**
     * Format min
     */

  }, {
    key: "_formatMin",
    value: function _formatMin() {
      if (this.min.toString().length === 1) {
        this.min = this.min < 10 ? "0" + this.min : this.min;
      }
    }
    /**
     * Hour needs a leading zero in 24hr format
     */

  }, {
    key: "_shouldFormatHour",
    value: function _shouldFormatHour() {
      if (this.format === 24 && this.hour.toString().length === 1) {
        this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
      }
    }
    /**
     * 24 hour format has a max hr of 23
     */

  }, {
    key: "_computeHourMax",
    value: function _computeHourMax(format) {
      if (format === 12) {
        return format;
      }

      return 23;
    }
  }, {
    key: "_equal",
    value: function _equal(n1, n2) {
      return n1 === n2;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Label for the input
         */
        label: {
          type: String,
          value: "Time"
        },

        /**
         * auto validate time inputs
         */
        autoValidate: {
          type: Boolean,
          value: true
        },

        /**
         * hides the label
         */
        hideLabel: {
          type: Boolean,
          value: false
        },

        /**
         * 12 or 24 hr format
         */
        format: {
          type: Number,
          value: 12
        },

        /**
         * disables the inputs
         */
        disabled: {
          type: Boolean,
          value: false
        },

        /**
         * hour
         */
        hour: {
          type: String,
          notify: true
        },

        /**
         * minute
         */
        min: {
          type: String,
          notify: true
        },

        /**
         * AM or PM
         */
        amPm: {
          type: String,
          notify: true,
          value: "AM"
        },

        /**
         * Formatted time string
         */
        value: {
          type: String,
          notify: true,
          readOnly: true,
          computed: "_computeTime(min, hour, amPm)"
        }
      };
    }
  }]);

  return PaperTimeInput;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);
customElements.define("paper-time-input", PaperTimeInput);

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");




var computeEntityRegistryName = function (hass, entry) {
    if (entry.name) {
        return entry.name;
    }
    var state = hass.states[entry.entity_id];
    return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(state) : null;
};
var updateEntityRegistryEntry = function (hass, entityId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/entity_registry/update", entity_id: entityId }, updates));
};
var removeEntityRegistryEntry = function (hass, entityId) {
    return hass.callWS({
        type: "config/entity_registry/remove",
        entity_id: entityId,
    });
};
var fetchEntityRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/entity_registry/list",
    });
};
var subscribeEntityRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
        return fetchEntityRegistry(conn).then(function (entities) {
            return store.setState(entities, true);
        });
    }, 500, true), "entity_registry_updated");
};
var subscribeEntityRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhcGVyLXRpbWUtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW50aXR5X3JlZ2lzdHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5cbmNvbnN0IHBhcGVyRHJvcGRvd25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcbiAgXCJwYXBlci1kcm9wZG93bi1tZW51XCJcbikgYXMgQ29uc3RydWN0b3I8UG9seW1lckVsZW1lbnQ+O1xuXG4vLyBwYXRjaGVzIHBhcGVyIGRyb3AgZG93biB0byBwcm9wZXJseSBzdXBwb3J0IFJUTCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItZHJvcGRvd24tbWVudS9pc3N1ZXMvMTgzXG5leHBvcnQgY2xhc3MgSGFQYXBlckRyb3Bkb3duQ2xhc3MgZXh0ZW5kcyBwYXBlckRyb3Bkb3duQ2xhc3Mge1xuICBwdWJsaWMgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjogSGFQYXBlckRyb3Bkb3duQ2xhc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiLCBIYVBhcGVyRHJvcGRvd25DbGFzcyk7XG4iLCIvKipcbkFkYXB0ZWQgZnJvbSBwYXBlci10aW1lLWlucHV0IGZyb21cbmh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuYnVybnMyMy9wYXBlci10aW1lLWlucHV0XG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXG5cbmA8cGFwZXItdGltZS1pbnB1dD5gIFBvbHltZXIgZWxlbWVudCB0byBhY2NlcHQgYSB0aW1lIHdpdGggcGFwZXItaW5wdXQgJiBwYXBlci1kcm9wZG93bi1tZW51XG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcblxuIyMjIFN0eWxpbmdcblxuYDxwYXBlci10aW1lLWlucHV0PmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcmAgfCBkcm9wZG93biByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxuYC0tcGFwZXItdGltZS1kcm9wZG93bi1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZHJvcGRvd24gaW5wdXQgfCBge31gXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXBlclRpbWVJbnB1dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgICAvKiBEYW1uIHlvdSBmaXJlZm94XG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XG4gICAgICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3OTA5MzUvY2FuLWktaGlkZS10aGUtaHRtbDUtbnVtYmVyLWlucHV0LXMtc3Bpbi1ib3hcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZV8tXy13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAvKiBGb3JjZSByaXBwbGUgdG8gdXNlIHRoZSB3aG9sZSBjb250YWluZXIgKi9cbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLXBhcGVyLXRpbWUtaW5wdXQtZHJvcGRvd24tcmlwcGxlLWNvbG9yLFxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYnV0dG9uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWlucHV0LXdyYXAge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1uby13cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbW2hpZGVMYWJlbF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWlucHV0LXdyYXBcIj5cbiAgICAgICAgPCEtLSBIb3VyIElucHV0IC0tPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBpZD1cImhvdXJcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3tob3VyfX1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9zaG91bGRGb3JtYXRIb3VyXCJcbiAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dD1cIlwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgbWF4PVwiW1tfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KV1dXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBNaW4gSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9mb3JtYXRNaW5cIlxuICAgICAgICAgIHJlcXVpcmVkPVwiXCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgcHJldmVudC1pbnZhbGlkLWlucHV0PVwiXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCI1OVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuXG4gICAgICAgIDwhLS0gRHJvcGRvd24gTWVudSAtLT5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICBpZD1cImRyb3Bkb3duXCJcbiAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbX2VxdWFsKGZvcm1hdCwgMjQpXV1cIlxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3thbVBtfX1cIlxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtIG5hbWU9XCJBTVwiPkFNPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0gbmFtZT1cIlBNXCI+UE08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIExhYmVsIGZvciB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJUaW1lXCIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhdXRvIHZhbGlkYXRlIHRpbWUgaW5wdXRzXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGhpZGVzIHRoZSBsYWJlbFxuICAgICAgICovXG4gICAgICBoaWRlTGFiZWw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogMTIgb3IgMjQgaHIgZm9ybWF0XG4gICAgICAgKi9cbiAgICAgIGZvcm1hdDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGRpc2FibGVzIHRoZSBpbnB1dHNcbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogaG91clxuICAgICAgICovXG4gICAgICBob3VyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogbWludXRlXG4gICAgICAgKi9cbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEFNIG9yIFBNXG4gICAgICAgKi9cbiAgICAgIGFtUG06IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBcIkFNXCIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBGb3JtYXR0ZWQgdGltZSBzdHJpbmdcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVRpbWUobWluLCBob3VyLCBhbVBtKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBpbnB1dHNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgLy8gVmFsaWRhdGUgaG91ciAmIG1pbiBmaWVsZHNcbiAgICBpZiAoIXRoaXMuJC5ob3VyLnZhbGlkYXRlKCkgfCAhdGhpcy4kLm1pbi52YWxpZGF0ZSgpKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0ZSBBTSBQTSBpZiAxMiBob3VyIHRpbWVcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyICYmICF0aGlzLiQuZHJvcGRvd24udmFsaWRhdGUoKSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aW1lIHN0cmluZ1xuICAgKi9cbiAgX2NvbXB1dGVUaW1lKG1pbiwgaG91ciwgYW1QbSkge1xuICAgIGlmIChob3VyICYmIG1pbikge1xuICAgICAgLy8gTm8gYW1wbSBvbiAyNCBociB0aW1lXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0KSB7XG4gICAgICAgIGFtUG0gPSBcIlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbiArIFwiIFwiICsgYW1QbTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgbWluXG4gICAqL1xuICBfZm9ybWF0TWluKCkge1xuICAgIGlmICh0aGlzLm1pbi50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5taW4gPSB0aGlzLm1pbiA8IDEwID8gXCIwXCIgKyB0aGlzLm1pbiA6IHRoaXMubWluO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb3VyIG5lZWRzIGEgbGVhZGluZyB6ZXJvIGluIDI0aHIgZm9ybWF0XG4gICAqL1xuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0ICYmIHRoaXMuaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5ob3VyID0gdGhpcy5ob3VyIDwgMTAgPyBcIjBcIiArIHRoaXMuaG91ciA6IHRoaXMuaG91cjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMjQgaG91ciBmb3JtYXQgaGFzIGEgbWF4IGhyIG9mIDIzXG4gICAqL1xuICBfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gMTIpIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuICAgIHJldHVybiAyMztcbiAgfVxuXG4gIF9lcXVhbChuMSwgbjIpIHtcbiAgICByZXR1cm4gbjEgPT09IG4yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBhcGVyLXRpbWUtaW5wdXRcIiwgUGFwZXJUaW1lSW5wdXQpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudHJ5OiBFbnRpdHlSZWdpc3RyeUVudHJ5XG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKGVudHJ5Lm5hbWUpIHtcbiAgICByZXR1cm4gZW50cnkubmFtZTtcbiAgfVxuICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2VudHJ5LmVudGl0eV9pZF07XG4gIHJldHVybiBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTPEVudGl0eVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUlBO0FBSUE7QUFDQTtBQUFBO0FBQUE7O0FBVUE7QUFUQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUE0TUE7Ozs7QUE3TUE7QUFrTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7OztBQTlOQTtBQUFBO0FBQUE7QUFrT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7O0FBNU9BO0FBQUE7QUFBQTtBQWdQQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBclBBO0FBQUE7QUFBQTtBQXlQQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBOVBBO0FBQUE7QUFBQTtBQWtRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF0UUE7QUFBQTtBQUFBO0FBeVFBO0FBQ0E7QUExUUE7QUFBQTtBQUFBO0FBRUE7QUFrSUE7QUFwSUE7QUFBQTtBQUFBO0FBdUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTdEQTtBQW9FQTtBQTNNQTtBQUNBO0FBREE7QUFBQTtBQTZRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RTQTtBQUVBO0FBQ0E7QUFpQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFZQTtBQUlBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=