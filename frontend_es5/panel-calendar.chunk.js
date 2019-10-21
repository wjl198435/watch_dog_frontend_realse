(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-calendar"],{

/***/ "./src/components/ha-card.ts":
/*!***********************************!*\
  !*** ./src/components/ha-card.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCard, _super);
    function HaCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "], ["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HaCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <slot></slot>\n    "], ["\n      ",
            "\n      <slot></slot>\n    "])), this.header
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"card-header\">", "</div>\n          "], ["\n            <div class=\"card-header\">", "</div>\n          "])), this.header) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCard.prototype, "header", void 0);
    return HaCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-card", HaCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

        /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
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
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/calendar/ha-big-calendar.js":
/*!************************************************!*\
  !*** ./src/panels/calendar/ha-big-calendar.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <link\n        rel=\"stylesheet\"\n        href=\"/static/panels/calendar/react-big-calendar.css\"\n      />\n      <style>\n        div#root {\n          height: 100%;\n          width: 100%;\n        }\n      </style>\n      <div id=\"root\"></div>\n    "]);

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



/* eslint-disable */



/* eslint-enable */





react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"].setLocalizer(react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"].momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_4___default.a));
var DEFAULT_VIEW = "month";

var HaBigCalendar =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaBigCalendar, _EventsMixin);

  function HaBigCalendar() {
    _classCallCheck(this, HaBigCalendar);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaBigCalendar).apply(this, arguments));
  }

  _createClass(HaBigCalendar, [{
    key: "_update",
    value: function _update(events) {
      var _this = this;

      var allViews = react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"].Views.values;
      var BCElement = react_dom__WEBPACK_IMPORTED_MODULE_2__["default"].createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        events: events,
        views: allViews,
        popup: true,
        onNavigate: function onNavigate(date, viewName) {
          return _this.fire("navigate", {
            date: date,
            viewName: viewName
          });
        },
        onView: function onView(viewName) {
          return _this.fire("view-changed", {
            viewName: viewName
          });
        },
        eventPropGetter: this._setEventStyle,
        defaultView: DEFAULT_VIEW,
        defaultDate: new Date()
      });
      Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(BCElement, this.$.root);
    }
  }, {
    key: "_setEventStyle",
    value: function _setEventStyle(event) {
      // https://stackoverflow.com/questions/34587067/change-color-of-react-big-calendar-events
      var newStyle = {};

      if (event.color) {
        newStyle.backgroundColor = event.color;
      }

      return {
        style: newStyle
      };
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
        events: {
          type: Array,
          observer: "_update"
        }
      };
    }
  }]);

  return HaBigCalendar;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-big-calendar", HaBigCalendar);

/***/ }),

/***/ "./src/panels/calendar/ha-panel-calendar.js":
/*!**************************************************!*\
  !*** ./src/panels/calendar/ha-panel-calendar.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-big-calendar/lib/utils/dates */ "./node_modules/react-big-calendar/lib/utils/dates.js");
/* harmony import */ var react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_big_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-big-calendar */ "./src/panels/calendar/ha-big-calendar.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 16px;\n          @apply --layout-horizontal;\n        }\n\n        ha-big-calendar {\n          min-height: 500px;\n          min-width: 100%;\n        }\n\n        #calendars {\n          padding-right: 16px;\n          width: 15%;\n          min-width: 170px;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        div.all_calendars {\n          \uFFFCheight: 20px;\n          \uFFFCtext-align: center;\n        }\n\n        .iron-selected {\n          background-color: #e5e5e5;\n          font-weight: normal;\n        }\n\n        :host([narrow]) .content {\n          flex-direction: column;\n        }\n        :host([narrow]) #calendars {\n          margin-bottom: 24px;\n          width: 100%;\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass=\"[[hass]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-menu-button>\n            <div main-title>[[localize('panel.calendar')]]</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"flex content\">\n          <div id=\"calendars\" class=\"layout vertical wrap\">\n            <ha-card header=\"Calendars\">\n              <paper-listbox\n                id=\"calendar_list\"\n                multi\n                on-selected-items-changed=\"_fetchData\"\n                selected-values=\"{{selectedCalendars}}\"\n                attr-for-selected=\"item-name\"\n              >\n                <template is=\"dom-repeat\" items=\"[[calendars]]\">\n                  <paper-item item-name=\"[[item.entity_id]]\">\n                    <span\n                      class=\"calendar_color\"\n                      style$=\"background-color: [[item.color]]\"\n                    ></span>\n                    <span class=\"calendar_color_spacer\"></span> [[item.name]]\n                  </paper-item>\n                </template>\n              </paper-listbox>\n            </ha-card>\n          </div>\n          <div class=\"flex layout horizontal wrap\">\n            <ha-big-calendar\n              default-date=\"[[currentDate]]\"\n              default-view=\"[[currentView]]\"\n              on-navigate=\"_handleNavigate\"\n              on-view=\"_handleViewChanged\"\n              events=\"[[events]]\"\n            >\n            </ha-big-calendar>\n          </div>\n        </div>\n      </app-header-layout>\n    "]);

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
















var DEFAULT_VIEW = "month";
/*
 * @appliesMixin LocalizeMixin
 */

var HaPanelCalendar =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPanelCalendar, _LocalizeMixin);

  function HaPanelCalendar() {
    _classCallCheck(this, HaPanelCalendar);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelCalendar).apply(this, arguments));
  }

  _createClass(HaPanelCalendar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaPanelCalendar.prototype), "connectedCallback", this).call(this);

      this._fetchCalendars();
    }
  }, {
    key: "_fetchCalendars",
    value: function _fetchCalendars() {
      var _this = this;

      this.hass.callApi("get", "calendars").then(function (result) {
        _this.calendars = result;
        _this.selectedCalendars = result.map(function (cal) {
          return cal.entity_id;
        });
      });
    }
  }, {
    key: "_fetchData",
    value: function _fetchData() {
      var _this2 = this;

      var start = react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default.a.firstVisibleDay(this.currentDate).toISOString();
      var end = react_big_calendar_lib_utils_dates__WEBPACK_IMPORTED_MODULE_9___default.a.lastVisibleDay(this.currentDate).toISOString();
      var params = encodeURI("?start=".concat(start, "&end=").concat(end));
      var calls = this.selectedCalendars.map(function (cal) {
        return _this2.hass.callApi("get", "calendars/".concat(cal).concat(params));
      });
      Promise.all(calls).then(function (results) {
        var tmpEvents = [];
        results.forEach(function (res) {
          res.forEach(function (ev) {
            ev.start = new Date(ev.start);

            if (ev.end) {
              ev.end = new Date(ev.end);
            } else {
              ev.end = null;
            }

            tmpEvents.push(ev);
          });
        });
        _this2.events = tmpEvents;
      });
    }
  }, {
    key: "_getDateRange",
    value: function _getDateRange() {
      var startDate;
      var endDate;

      if (this.currentView === "day") {
        startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
        endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
      } else if (this.currentView === "week") {
        startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("isoWeek");
        endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("isoWeek");
      } else if (this.currentView === "month") {
        startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("month").subtract(7, "days");
        endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("month").add(7, "days");
      } else if (this.currentView === "agenda") {
        startDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).startOf("day");
        endDate = moment__WEBPACK_IMPORTED_MODULE_8___default()(this.currentDate).endOf("day").add(1, "month");
      }

      return [startDate.toISOString(), endDate.toISOString()];
    }
  }, {
    key: "_handleViewChanged",
    value: function _handleViewChanged(ev) {
      // Calendar view changed
      this.currentView = ev.detail.viewName;

      this._fetchData();
    }
  }, {
    key: "_handleNavigate",
    value: function _handleNavigate(ev) {
      // Calendar date range changed
      this.currentDate = ev.detail.date;
      this.currentView = ev.detail.viewName;

      this._fetchData();
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
        hass: Object,
        currentView: {
          type: String,
          value: DEFAULT_VIEW
        },
        currentDate: {
          type: Object,
          value: new Date()
        },
        events: {
          type: Array,
          value: []
        },
        calendars: {
          type: Array,
          value: []
        },
        selectedCalendars: {
          type: Array,
          value: []
        },
        narrow: {
          type: Boolean,
          reflectToAttribute: true
        }
      };
    }
  }]);

  return HaPanelCalendar;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]));

customElements.define("ha-panel-calendar", HaPanelCalendar);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY2FsZW5kYXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jYWxlbmRhci9oYS1iaWctY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jYWxlbmRhci9oYS1wYW5lbC1jYWxlbmRhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoZWFkZXI/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGEtY2FyZC1ib3JkZXItcmFkaXVzLCAycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJveC1zaGFkb3csXG4gICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKVxuICAgICAgICApO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1oZWFkZXIpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWNvbG9yLCAtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1zaXplLCAyNHB4KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudDpub3QoOmZpcnN0LWNoaWxkKSksXG4gICAgICBzbG90Om5vdCg6Zmlyc3QtY2hpbGQpOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oZWFkZXJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+JHt0aGlzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBgfVxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FyZFwiLCBIYUNhcmQpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuaW1wb3J0IEJpZ0NhbGVuZGFyIGZyb20gXCJyZWFjdC1iaWctY2FsZW5kYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuQmlnQ2FsZW5kYXIuc2V0TG9jYWxpemVyKEJpZ0NhbGVuZGFyLm1vbWVudExvY2FsaXplcihtb21lbnQpKTtcblxuY29uc3QgREVGQVVMVF9WSUVXID0gXCJtb250aFwiO1xuXG5jbGFzcyBIYUJpZ0NhbGVuZGFyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICBocmVmPVwiL3N0YXRpYy9wYW5lbHMvY2FsZW5kYXIvcmVhY3QtYmlnLWNhbGVuZGFyLmNzc1wiXG4gICAgICAvPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBkaXYjcm9vdCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBpZD1cInJvb3RcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBldmVudHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG9ic2VydmVyOiBcIl91cGRhdGVcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF91cGRhdGUoZXZlbnRzKSB7XG4gICAgY29uc3QgYWxsVmlld3MgPSBCaWdDYWxlbmRhci5WaWV3cy52YWx1ZXM7XG5cbiAgICBjb25zdCBCQ0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEJpZ0NhbGVuZGFyLCB7XG4gICAgICBldmVudHM6IGV2ZW50cyxcbiAgICAgIHZpZXdzOiBhbGxWaWV3cyxcbiAgICAgIHBvcHVwOiB0cnVlLFxuICAgICAgb25OYXZpZ2F0ZTogKGRhdGUsIHZpZXdOYW1lKSA9PiB0aGlzLmZpcmUoXCJuYXZpZ2F0ZVwiLCB7IGRhdGUsIHZpZXdOYW1lIH0pLFxuICAgICAgb25WaWV3OiAodmlld05hbWUpID0+IHRoaXMuZmlyZShcInZpZXctY2hhbmdlZFwiLCB7IHZpZXdOYW1lIH0pLFxuICAgICAgZXZlbnRQcm9wR2V0dGVyOiB0aGlzLl9zZXRFdmVudFN0eWxlLFxuICAgICAgZGVmYXVsdFZpZXc6IERFRkFVTFRfVklFVyxcbiAgICAgIGRlZmF1bHREYXRlOiBuZXcgRGF0ZSgpLFxuICAgIH0pO1xuICAgIHJlbmRlcihCQ0VsZW1lbnQsIHRoaXMuJC5yb290KTtcbiAgfVxuXG4gIF9zZXRFdmVudFN0eWxlKGV2ZW50KSB7XG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzQ1ODcwNjcvY2hhbmdlLWNvbG9yLW9mLXJlYWN0LWJpZy1jYWxlbmRhci1ldmVudHNcbiAgICBjb25zdCBuZXdTdHlsZSA9IHt9O1xuICAgIGlmIChldmVudC5jb2xvcikge1xuICAgICAgbmV3U3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXZlbnQuY29sb3I7XG4gICAgfVxuICAgIHJldHVybiB7IHN0eWxlOiBuZXdTdHlsZSB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWJpZy1jYWxlbmRhclwiLCBIYUJpZ0NhbGVuZGFyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkYXRlcyBmcm9tIFwicmVhY3QtYmlnLWNhbGVuZGFyL2xpYi91dGlscy9kYXRlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi9oYS1iaWctY2FsZW5kYXJcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBERUZBVUxUX1ZJRVcgPSBcIm1vbnRoXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQYW5lbENhbGVuZGFyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1iaWctY2FsZW5kYXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjYWxlbmRhcnMge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICBtaW4td2lkdGg6IDE3MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmFsbF9jYWxlbmRhcnMge1xuICAgICAgICAgIO+/vGhlaWdodDogMjBweDtcbiAgICAgICAgICDvv7x0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuaXJvbi1zZWxlY3RlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW25hcnJvd10pIC5jb250ZW50IHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSAjY2FsZW5kYXJzIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5jYWxlbmRhcicpXV08L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJjYWxlbmRhcnNcIiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbCB3cmFwXCI+XG4gICAgICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJDYWxlbmRhcnNcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBpZD1cImNhbGVuZGFyX2xpc3RcIlxuICAgICAgICAgICAgICAgIG11bHRpXG4gICAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtaXRlbXMtY2hhbmdlZD1cIl9mZXRjaERhdGFcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkLXZhbHVlcz1cInt7c2VsZWN0ZWRDYWxlbmRhcnN9fVwiXG4gICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tjYWxlbmRhcnNdXVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPVwiW1tpdGVtLmVudGl0eV9pZF1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjYWxlbmRhcl9jb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGUkPVwiYmFja2dyb3VuZC1jb2xvcjogW1tpdGVtLmNvbG9yXV1cIlxuICAgICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhbGVuZGFyX2NvbG9yX3NwYWNlclwiPjwvc3Bhbj4gW1tpdGVtLm5hbWVdXVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBsYXlvdXQgaG9yaXpvbnRhbCB3cmFwXCI+XG4gICAgICAgICAgICA8aGEtYmlnLWNhbGVuZGFyXG4gICAgICAgICAgICAgIGRlZmF1bHQtZGF0ZT1cIltbY3VycmVudERhdGVdXVwiXG4gICAgICAgICAgICAgIGRlZmF1bHQtdmlldz1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgICAgIG9uLW5hdmlnYXRlPVwiX2hhbmRsZU5hdmlnYXRlXCJcbiAgICAgICAgICAgICAgb24tdmlldz1cIl9oYW5kbGVWaWV3Q2hhbmdlZFwiXG4gICAgICAgICAgICAgIGV2ZW50cz1cIltbZXZlbnRzXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9oYS1iaWctY2FsZW5kYXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIGN1cnJlbnRWaWV3OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IERFRkFVTFRfVklFVyxcbiAgICAgIH0sXG5cbiAgICAgIGN1cnJlbnREYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIGNhbGVuZGFyczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRDYWxlbmRhcnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBbXSxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2ZldGNoQ2FsZW5kYXJzKCk7XG4gIH1cblxuICBfZmV0Y2hDYWxlbmRhcnMoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJnZXRcIiwgXCJjYWxlbmRhcnNcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLmNhbGVuZGFycyA9IHJlc3VsdDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYWxlbmRhcnMgPSByZXN1bHQubWFwKChjYWwpID0+IGNhbC5lbnRpdHlfaWQpO1xuICAgIH0pO1xuICB9XG5cbiAgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBzdGFydCA9IGRhdGVzLmZpcnN0VmlzaWJsZURheSh0aGlzLmN1cnJlbnREYXRlKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IGVuZCA9IGRhdGVzLmxhc3RWaXNpYmxlRGF5KHRoaXMuY3VycmVudERhdGUpLnRvSVNPU3RyaW5nKCk7XG4gICAgY29uc3QgcGFyYW1zID0gZW5jb2RlVVJJKGA/c3RhcnQ9JHtzdGFydH0mZW5kPSR7ZW5kfWApO1xuICAgIGNvbnN0IGNhbGxzID0gdGhpcy5zZWxlY3RlZENhbGVuZGFycy5tYXAoKGNhbCkgPT5cbiAgICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiZ2V0XCIsIGBjYWxlbmRhcnMvJHtjYWx9JHtwYXJhbXN9YClcbiAgICApO1xuICAgIFByb21pc2UuYWxsKGNhbGxzKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBjb25zdCB0bXBFdmVudHMgPSBbXTtcblxuICAgICAgcmVzdWx0cy5mb3JFYWNoKChyZXMpID0+IHtcbiAgICAgICAgcmVzLmZvckVhY2goKGV2KSA9PiB7XG4gICAgICAgICAgZXYuc3RhcnQgPSBuZXcgRGF0ZShldi5zdGFydCk7XG4gICAgICAgICAgaWYgKGV2LmVuZCkge1xuICAgICAgICAgICAgZXYuZW5kID0gbmV3IERhdGUoZXYuZW5kKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXYuZW5kID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG1wRXZlbnRzLnB1c2goZXYpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5ldmVudHMgPSB0bXBFdmVudHM7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0RGF0ZVJhbmdlKCkge1xuICAgIGxldCBzdGFydERhdGU7XG4gICAgbGV0IGVuZERhdGU7XG4gICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IFwiZGF5XCIpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5zdGFydE9mKFwiZGF5XCIpO1xuICAgICAgZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5zdGFydE9mKFwiZGF5XCIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gXCJ3ZWVrXCIpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5zdGFydE9mKFwiaXNvV2Vla1wiKTtcbiAgICAgIGVuZERhdGUgPSBtb21lbnQodGhpcy5jdXJyZW50RGF0ZSkuZW5kT2YoXCJpc29XZWVrXCIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gXCJtb250aFwiKSB7XG4gICAgICBzdGFydERhdGUgPSBtb21lbnQodGhpcy5jdXJyZW50RGF0ZSlcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAuc3VidHJhY3QoNywgXCJkYXlzXCIpO1xuICAgICAgZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKVxuICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAuYWRkKDcsIFwiZGF5c1wiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09IFwiYWdlbmRhXCIpIHtcbiAgICAgIHN0YXJ0RGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKS5zdGFydE9mKFwiZGF5XCIpO1xuICAgICAgZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmN1cnJlbnREYXRlKVxuICAgICAgICAuZW5kT2YoXCJkYXlcIilcbiAgICAgICAgLmFkZCgxLCBcIm1vbnRoXCIpO1xuICAgIH1cbiAgICByZXR1cm4gW3N0YXJ0RGF0ZS50b0lTT1N0cmluZygpLCBlbmREYXRlLnRvSVNPU3RyaW5nKCldO1xuICB9XG5cbiAgX2hhbmRsZVZpZXdDaGFuZ2VkKGV2KSB7XG4gICAgLy8gQ2FsZW5kYXIgdmlldyBjaGFuZ2VkXG4gICAgdGhpcy5jdXJyZW50VmlldyA9IGV2LmRldGFpbC52aWV3TmFtZTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIF9oYW5kbGVOYXZpZ2F0ZShldikge1xuICAgIC8vIENhbGVuZGFyIGRhdGUgcmFuZ2UgY2hhbmdlZFxuICAgIHRoaXMuY3VycmVudERhdGUgPSBldi5kZXRhaWwuZGF0ZTtcbiAgICB0aGlzLmN1cnJlbnRWaWV3ID0gZXYuZGV0YWlsLnZpZXdOYW1lO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLWNhbGVuZGFyXCIsIEhhUGFuZWxDYWxlbmRhcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQUE7QUFDQTtBQTZDQTs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFIQTtBQU1BO0FBM0RBO0FBQUE7QUFBQTtBQTREQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBaERBO0FBQ0E7QUFhQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7OztBQXhCQTtBQUNBO0FBbURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQStIQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUF2TUE7QUFDQTtBQXVGQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBNUJBO0FBaUNBOzs7O0FBN0hBO0FBQ0E7QUEwTUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==