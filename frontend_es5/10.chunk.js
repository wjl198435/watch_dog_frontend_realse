(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[10],{

/***/ "./src/components/ha-combo-box.js":
/*!****************************************!*\
  !*** ./src/components/ha-combo-box.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-input > paper-icon-button {\n          width: 24px;\n          height: 24px;\n          padding: 2px;\n          color: var(--secondary-text-color);\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <vaadin-combo-box-light\n        items=\"[[_items]]\"\n        item-value-path=\"[[itemValuePath]]\"\n        item-label-path=\"[[itemLabelPath]]\"\n        value=\"{{value}}\"\n        opened=\"{{opened}}\"\n        allow-custom-value=\"[[allowCustomValue]]\"\n        on-change=\"_fireChanged\"\n      >\n        <paper-input\n          autofocus=\"[[autofocus]]\"\n          label=\"[[label]]\"\n          class=\"input\"\n          value=\"[[value]]\"\n        >\n          <paper-icon-button\n            slot=\"suffix\"\n            class=\"clear-button\"\n            icon=\"hass:close\"\n            hidden$=\"[[!value]]\"\n            >Clear</paper-icon-button\n          >\n          <paper-icon-button\n            slot=\"suffix\"\n            class=\"toggle-button\"\n            icon=\"[[_computeToggleIcon(opened)]]\"\n            hidden$=\"[[!items.length]]\"\n            >Toggle</paper-icon-button\n          >\n        </paper-input>\n        <template>\n          <style>\n            paper-item {\n              margin: -5px -10px;\n              padding: 0;\n            }\n          </style>\n          <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>\n        </template>\n      </vaadin-combo-box-light>\n    "]);

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









var HaComboBox =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaComboBox, _EventsMixin);

  function HaComboBox() {
    _classCallCheck(this, HaComboBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaComboBox).apply(this, arguments));
  }

  _createClass(HaComboBox, [{
    key: "_openedChanged",
    value: function _openedChanged(newVal) {
      if (!newVal) {
        this._items = this.items;
      }
    }
  }, {
    key: "_itemsChanged",
    value: function _itemsChanged(newVal) {
      if (!this.opened) {
        this._items = newVal;
      }
    }
  }, {
    key: "_computeToggleIcon",
    value: function _computeToggleIcon(opened) {
      return opened ? "hass:menu-up" : "hass:menu-down";
    }
  }, {
    key: "_computeItemLabel",
    value: function _computeItemLabel(item, itemLabelPath) {
      return itemLabelPath ? item[itemLabelPath] : item;
    }
  }, {
    key: "_fireChanged",
    value: function _fireChanged(ev) {
      ev.stopPropagation();
      this.fire("change");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        allowCustomValue: Boolean,
        items: {
          type: Object,
          observer: "_itemsChanged"
        },
        _items: Object,
        itemLabelPath: String,
        itemValuePath: String,
        autofocus: Boolean,
        label: String,
        opened: {
          type: Boolean,
          value: false,
          observer: "_openedChanged"
        },
        value: {
          type: String,
          notify: true
        }
      };
    }
  }]);

  return HaComboBox;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-combo-box", HaComboBox);

/***/ }),

/***/ "./src/components/ha-service-picker.js":
/*!*********************************************!*\
  !*** ./src/components/ha-service-picker.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_combo_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-combo-box */ "./src/components/ha-combo-box.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-combo-box\n        label=\"[[localize('ui.components.service-picker.service')]]\"\n        items=\"[[_services]]\"\n        value=\"{{value}}\"\n        allow-custom-value=\"\"\n      ></ha-combo-box>\n    "]);

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
 * @appliesMixin LocalizeMixin
 */

var HaServicePicker =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaServicePicker, _LocalizeMixin);

  function HaServicePicker() {
    _classCallCheck(this, HaServicePicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaServicePicker).apply(this, arguments));
  }

  _createClass(HaServicePicker, [{
    key: "_hassChanged",
    value: function _hassChanged(hass, oldHass) {
      if (!hass) {
        this._services = [];
        return;
      }

      if (oldHass && hass.services === oldHass.services) {
        return;
      }

      var result = [];
      Object.keys(hass.services).sort().forEach(function (domain) {
        var services = Object.keys(hass.services[domain]).sort();

        for (var i = 0; i < services.length; i++) {
          result.push("".concat(domain, ".").concat(services[i]));
        }
      });
      this._services = result;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          observer: "_hassChanged"
        },
        _services: Array,
        value: {
          type: String,
          notify: true
        }
      };
    }
  }]);

  return HaServicePicker;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-service-picker", HaServicePicker);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb21iby1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNsYXNzIEhhQ29tYm9Cb3ggZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8dmFhZGluLWNvbWJvLWJveC1saWdodFxuICAgICAgICBpdGVtcz1cIltbX2l0ZW1zXV1cIlxuICAgICAgICBpdGVtLXZhbHVlLXBhdGg9XCJbW2l0ZW1WYWx1ZVBhdGhdXVwiXG4gICAgICAgIGl0ZW0tbGFiZWwtcGF0aD1cIltbaXRlbUxhYmVsUGF0aF1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBvcGVuZWQ9XCJ7e29wZW5lZH19XCJcbiAgICAgICAgYWxsb3ctY3VzdG9tLXZhbHVlPVwiW1thbGxvd0N1c3RvbVZhbHVlXV1cIlxuICAgICAgICBvbi1jaGFuZ2U9XCJfZmlyZUNoYW5nZWRcIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBhdXRvZm9jdXM9XCJbW2F1dG9mb2N1c11dXCJcbiAgICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgdmFsdWU9XCJbW3ZhbHVlXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyF2YWx1ZV1dXCJcbiAgICAgICAgICAgID5DbGVhcjwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgICBpY29uPVwiW1tfY29tcHV0ZVRvZ2dsZUljb24ob3BlbmVkKV1dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFpdGVtcy5sZW5ndGhdXVwiXG4gICAgICAgICAgICA+VG9nZ2xlPC9wYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgICAgICBtYXJnaW46IC01cHggLTEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlSXRlbUxhYmVsKGl0ZW0sIGl0ZW1MYWJlbFBhdGgpXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWxsb3dDdXN0b21WYWx1ZTogQm9vbGVhbixcbiAgICAgIGl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2l0ZW1zQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9pdGVtczogT2JqZWN0LFxuICAgICAgaXRlbUxhYmVsUGF0aDogU3RyaW5nLFxuICAgICAgaXRlbVZhbHVlUGF0aDogU3RyaW5nLFxuICAgICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiBcIl9vcGVuZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLml0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIF9pdGVtc0NoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5faXRlbXMgPSBuZXdWYWw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUb2dnbGVJY29uKG9wZW5lZCkge1xuICAgIHJldHVybiBvcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwiO1xuICB9XG5cbiAgX2NvbXB1dGVJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCkge1xuICAgIHJldHVybiBpdGVtTGFiZWxQYXRoID8gaXRlbVtpdGVtTGFiZWxQYXRoXSA6IGl0ZW07XG4gIH1cblxuICBfZmlyZUNoYW5nZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29tYm8tYm94XCIsIEhhQ29tYm9Cb3gpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1jb21iby1ib3hcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU2VydmljZVBpY2tlciBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jb21iby1ib3hcbiAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLnNlcnZpY2UtcGlja2VyLnNlcnZpY2UnKV1dXCJcbiAgICAgICAgaXRlbXM9XCJbW19zZXJ2aWNlc11dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgICBhbGxvdy1jdXN0b20tdmFsdWU9XCJcIlxuICAgICAgPjwvaGEtY29tYm8tYm94PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfaGFzc0NoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBfc2VydmljZXM6IEFycmF5LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfaGFzc0NoYW5nZWQoaGFzcywgb2xkSGFzcykge1xuICAgIGlmICghaGFzcykge1xuICAgICAgdGhpcy5fc2VydmljZXMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9sZEhhc3MgJiYgaGFzcy5zZXJ2aWNlcyA9PT0gb2xkSGFzcy5zZXJ2aWNlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIE9iamVjdC5rZXlzKGhhc3Muc2VydmljZXMpXG4gICAgICAuc29ydCgpXG4gICAgICAuZm9yRWFjaCgoZG9tYWluKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gT2JqZWN0LmtleXMoaGFzcy5zZXJ2aWNlc1tkb21haW5dKS5zb3J0KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2RvbWFpbn0uJHtzZXJ2aWNlc1tpXX1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLl9zZXJ2aWNlcyA9IHJlc3VsdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zZXJ2aWNlLXBpY2tlclwiLCBIYVNlcnZpY2VQaWNrZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFpRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUF2R0E7QUFDQTtBQXFEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBaEJBO0FBcUJBOzs7O0FBL0VBO0FBQ0E7QUEwR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUE5Q0E7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTs7OztBQXhCQTtBQUNBO0FBaURBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=