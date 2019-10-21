(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["zha-add-devices-page"],{

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"paper-item-shared-styles\"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id=\"contentIcon\" class=\"content-icon\">\n      <slot name=\"item-icon\"></slot>\n    </div>\n    <slot></slot>\n"]);

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
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

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

/***/ "./src/components/ha-textarea.js":
/*!***************************************!*\
  !*** ./src/components/ha-textarea.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n      <paper-textarea\n        label=\"[[label]]\"\n        placeholder=\"[[placeholder]]\"\n        value=\"{{value}}\"\n      ></paper-textarea>\n    "]);

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
Wrapper for paper-textarea.

paper-textarea crashes on iOS when created programmatically. This only impacts
our automation and script editors as they are using Preact. Polymer is using
template elements and does not have this issue.

paper-textarea issue: https://github.com/PolymerElements/paper-input/issues/556
WebKit issue: https://bugs.webkit.org/show_bug.cgi?id=174629
*/




var HaTextarea =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaTextarea, _PolymerElement);

  function HaTextarea() {
    _classCallCheck(this, HaTextarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaTextarea).apply(this, arguments));
  }

  _createClass(HaTextarea, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        name: String,
        label: String,
        placeholder: String,
        value: {
          type: String,
          notify: true
        }
      };
    }
  }]);

  return HaTextarea;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-textarea", HaTextarea);

/***/ }),

/***/ "./src/panels/config/zha/zha-add-devices-page.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/zha/zha-add-devices-page.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _zha_device_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zha-device-card */ "./src/panels/config/zha/zha-device-card.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");










var ZHAAddDevicesPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZHAAddDevicesPage, _super);
    function ZHAAddDevicesPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._discoveredDevices = [];
        _this._formattedEvents = "";
        _this._active = false;
        _this._showHelp = false;
        _this._addDevicesTimeoutHandle = undefined;
        return _this;
    }
    ZHAAddDevicesPage.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this.route && this.route.path && this.route.path !== ""
            ? (this._ieeeAddress = this.route.path.substring(1))
            : (this._ieeeAddress = undefined);
        this._subscribe();
    };
    ZHAAddDevicesPage.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._unsubscribe();
        this._error = undefined;
        this._discoveredDevices = [];
        this._formattedEvents = "";
    };
    ZHAAddDevicesPage.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage\n        header=\"", "\"\n      >\n        ", "\n        ", "\n        <div class=\"content-header\"></div>\n        <div class=\"content\">\n          ", "\n        </div>\n        <ha-textarea class=\"events\" value=\"", "\">\n        </ha-textarea>\n      </hass-subpage>\n    "], ["\n      <hass-subpage\n        header=\"",
            "\"\n      >\n        ",
            "\n        ",
            "\n        <div class=\"content-header\"></div>\n        <div class=\"content\">\n          ",
            "\n        </div>\n        <ha-textarea class=\"events\" value=\"", "\">\n        </ha-textarea>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.zha.add_device_page.header"), this._active
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <h2>\n                <paper-spinner\n                  ?active=\"", "\"\n                  alt=\"Searching\"\n                ></paper-spinner>\n                ", "\n              </h2>\n            "], ["\n              <h2>\n                <paper-spinner\n                  ?active=\"", "\"\n                  alt=\"Searching\"\n                ></paper-spinner>\n                ",
                "\n              </h2>\n            "])), this._active, this.hass.localize("ui.panel.config.zha.add_device_page.spinner")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"card-actions\">\n                <mwc-button @click=", " class=\"search-button\">\n                  ", "\n                </mwc-button>\n                <paper-icon-button\n                  class=\"toggle-help-icon\"\n                  @click=\"", "\"\n                  icon=\"hass:help-circle\"\n                ></paper-icon-button>\n                ", "\n              </div>\n            "], ["\n              <div class=\"card-actions\">\n                <mwc-button @click=", " class=\"search-button\">\n                  ",
            "\n                </mwc-button>\n                <paper-icon-button\n                  class=\"toggle-help-icon\"\n                  @click=\"", "\"\n                  icon=\"hass:help-circle\"\n                ></paper-icon-button>\n                ",
            "\n              </div>\n            "])), this._subscribe, this.hass.localize("ui.panel.config.zha.add_device_page.search_again"), this._onHelpTap, this._showHelp
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <ha-service-description\n                        .hass=\"", "\"\n                        domain=\"zha\"\n                        service=\"permit\"\n                        class=\"help-text\"\n                      />\n                    "], ["\n                      <ha-service-description\n                        .hass=\"", "\"\n                        domain=\"zha\"\n                        service=\"permit\"\n                        class=\"help-text\"\n                      />\n                    "])), this.hass) : ""), this._error
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"error\">", "</div>\n            "], ["\n              <div class=\"error\">", "</div>\n            "])), this._error) : "", this._discoveredDevices.length < 1
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"discovery-text\">\n                  <h4>\n                    ", "\n                  </h4>\n                </div>\n              "], ["\n                <div class=\"discovery-text\">\n                  <h4>\n                    ",
                "\n                  </h4>\n                </div>\n              "])), this.hass.localize("ui.panel.config.zha.add_device_page.discovery_text")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                ", "\n              "], ["\n                ",
            "\n              "])), this._discoveredDevices.map(function (device) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <zha-device-card\n                      class=\"card\"\n                      .hass=", "\n                      .device=", "\n                      .narrow=", "\n                      .showHelp=", "\n                      .showActions=", "\n                      isJoinPage\n                    ></zha-device-card>\n                  "], ["\n                    <zha-device-card\n                      class=\"card\"\n                      .hass=", "\n                      .device=", "\n                      .narrow=", "\n                      .showHelp=", "\n                      .showActions=", "\n                      isJoinPage\n                    ></zha-device-card>\n                  "])), _this.hass, device, !_this.isWide, _this._showHelp, !_this._active); })), this._formattedEvents);
    };
    ZHAAddDevicesPage.prototype._handleMessage = function (message) {
        if (message.type === "log_output") {
            this._formattedEvents += message.log_entry.message + "\n";
            if (this.shadowRoot) {
                var textArea = this.shadowRoot.querySelector("ha-textarea");
                if (textArea) {
                    textArea.scrollTop = textArea.scrollHeight;
                }
            }
        }
        if (message.type && message.type === "device_fully_initialized") {
            this._discoveredDevices.push(message.device_info);
        }
    };
    ZHAAddDevicesPage.prototype._unsubscribe = function () {
        this._active = false;
        if (this._addDevicesTimeoutHandle) {
            clearTimeout(this._addDevicesTimeoutHandle);
        }
        if (this._subscribed) {
            this._subscribed.then(function (unsub) { return unsub(); });
            this._subscribed = undefined;
        }
    };
    ZHAAddDevicesPage.prototype._subscribe = function () {
        var _this = this;
        var data = { type: "zha/devices/permit" };
        if (this._ieeeAddress) {
            data.ieee = this._ieeeAddress;
        }
        this._subscribed = this.hass.connection.subscribeMessage(function (message) { return _this._handleMessage(message); }, data);
        this._active = true;
        this._addDevicesTimeoutHandle = setTimeout(function () { return _this._unsubscribe(); }, 75000);
    };
    ZHAAddDevicesPage.prototype._onHelpTap = function () {
        this._showHelp = !this._showHelp;
    };
    Object.defineProperty(ZHAAddDevicesPage, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .discovery-text,\n        .content-header {\n          margin: 16px;\n        }\n        .content {\n          border-top: 1px solid var(--light-primary-color);\n          min-height: 500px;\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: left;\n          overflow: scroll;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        paper-spinner {\n          display: none;\n          margin-right: 20px;\n          margin-left: 16px;\n        }\n        paper-spinner[active] {\n          display: block;\n          float: left;\n          margin-right: 20px;\n          margin-left: 16px;\n        }\n        .card {\n          margin-left: 16px;\n          margin-right: 16px;\n          margin-bottom: 0px;\n          margin-top: 10px;\n        }\n        .events {\n          margin: 16px;\n          border-top: 1px solid var(--light-primary-color);\n          padding-top: 16px;\n          min-height: 200px;\n          max-height: 200px;\n          overflow: scroll;\n        }\n        .toggle-help-icon {\n          position: absolute;\n          margin-top: 16px;\n          margin-right: 16px;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n        ha-service-description {\n          margin-top: 16px;\n          margin-left: 16px;\n          display: block;\n          color: grey;\n        }\n        .search-button {\n          margin-top: 16px;\n          margin-left: 16px;\n        }\n        .help-text {\n          color: grey;\n          padding-left: 16px;\n        }\n      "], ["\n        .discovery-text,\n        .content-header {\n          margin: 16px;\n        }\n        .content {\n          border-top: 1px solid var(--light-primary-color);\n          min-height: 500px;\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: left;\n          overflow: scroll;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        paper-spinner {\n          display: none;\n          margin-right: 20px;\n          margin-left: 16px;\n        }\n        paper-spinner[active] {\n          display: block;\n          float: left;\n          margin-right: 20px;\n          margin-left: 16px;\n        }\n        .card {\n          margin-left: 16px;\n          margin-right: 16px;\n          margin-bottom: 0px;\n          margin-top: 10px;\n        }\n        .events {\n          margin: 16px;\n          border-top: 1px solid var(--light-primary-color);\n          padding-top: 16px;\n          min-height: 200px;\n          max-height: 200px;\n          overflow: scroll;\n        }\n        .toggle-help-icon {\n          position: absolute;\n          margin-top: 16px;\n          margin-right: 16px;\n          top: -6px;\n          right: 0;\n          color: var(--primary-color);\n        }\n        ha-service-description {\n          margin-top: 16px;\n          margin-left: 16px;\n          display: block;\n          color: grey;\n        }\n        .search-button {\n          margin-top: 16px;\n          margin-left: 16px;\n        }\n        .help-text {\n          color: grey;\n          padding-left: 16px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "isWide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "route", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "_error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "_discoveredDevices", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "_formattedEvents", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "_active", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], ZHAAddDevicesPage.prototype, "_showHelp", void 0);
    ZHAAddDevicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["customElement"])("zha-add-devices-page")
    ], ZHAAddDevicesPage);
    return ZHAAddDevicesPage;
}(lit_element__WEBPACK_IMPORTED_MODULE_8__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemhhLWFkZC1kZXZpY2VzLXBhZ2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXRleHRhcmVhLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtYWRkLWRldmljZXMtcGFnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLypcbldyYXBwZXIgZm9yIHBhcGVyLXRleHRhcmVhLlxuXG5wYXBlci10ZXh0YXJlYSBjcmFzaGVzIG9uIGlPUyB3aGVuIGNyZWF0ZWQgcHJvZ3JhbW1hdGljYWxseS4gVGhpcyBvbmx5IGltcGFjdHNcbm91ciBhdXRvbWF0aW9uIGFuZCBzY3JpcHQgZWRpdG9ycyBhcyB0aGV5IGFyZSB1c2luZyBQcmVhY3QuIFBvbHltZXIgaXMgdXNpbmdcbnRlbXBsYXRlIGVsZW1lbnRzIGFuZCBkb2VzIG5vdCBoYXZlIHRoaXMgaXNzdWUuXG5cbnBhcGVyLXRleHRhcmVhIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL3BhcGVyLWlucHV0L2lzc3Vlcy81NTZcbldlYktpdCBpc3N1ZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3NDYyOVxuKi9cblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhVGV4dGFyZWEgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci10ZXh0YXJlYVxuICAgICAgICBsYWJlbD1cIltbbGFiZWxdXVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCJcbiAgICAgICAgdmFsdWU9XCJ7e3ZhbHVlfX1cIlxuICAgICAgPjwvcGFwZXItdGV4dGFyZWE+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS10ZXh0YXJlYVwiLCBIYVRleHRhcmVhKTtcbiIsImltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4vemhhLWRldmljZS1jYXJkXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgWkhBRGV2aWNlIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvemhhXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiemhhLWFkZC1kZXZpY2VzLXBhZ2VcIilcbmNsYXNzIFpIQUFkZERldmljZXNQYWdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZT86IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlzY292ZXJlZERldmljZXM6IFpIQURldmljZVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Zvcm1hdHRlZEV2ZW50czogc3RyaW5nID0gXCJcIjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2llZWVBZGRyZXNzPzogc3RyaW5nO1xuICBwcml2YXRlIF9hZGREZXZpY2VzVGltZW91dEhhbmRsZTogYW55ID0gdW5kZWZpbmVkO1xuICBwcml2YXRlIF9zdWJzY3JpYmVkPzogUHJvbWlzZTwoKSA9PiBQcm9taXNlPHZvaWQ+PjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJvdXRlICYmIHRoaXMucm91dGUucGF0aCAmJiB0aGlzLnJvdXRlLnBhdGggIT09IFwiXCJcbiAgICAgID8gKHRoaXMuX2llZWVBZGRyZXNzID0gdGhpcy5yb3V0ZS5wYXRoLnN1YnN0cmluZygxKSlcbiAgICAgIDogKHRoaXMuX2llZWVBZGRyZXNzID0gdW5kZWZpbmVkKTtcbiAgICB0aGlzLl9zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGlzY292ZXJlZERldmljZXMgPSBbXTtcbiAgICB0aGlzLl9mb3JtYXR0ZWRFdmVudHMgPSBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICBoZWFkZXI9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuemhhLmFkZF9kZXZpY2VfcGFnZS5oZWFkZXJcIlxuICAgICAgICApfVwiXG4gICAgICA+XG4gICAgICAgICR7dGhpcy5fYWN0aXZlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgID9hY3RpdmU9XCIke3RoaXMuX2FjdGl2ZX1cIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiU2VhcmNoaW5nXCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnpoYS5hZGRfZGV2aWNlX3BhZ2Uuc3Bpbm5lclwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9zdWJzY3JpYmV9IGNsYXNzPVwic2VhcmNoLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuYWRkX2RldmljZV9wYWdlLnNlYXJjaF9hZ2FpblwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhlbHAtaWNvblwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX29uSGVscFRhcH1cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fc2hvd0hlbHBcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiemhhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJwZXJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwLXRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaGVhZGVyXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLl9kaXNjb3ZlcmVkRGV2aWNlcy5sZW5ndGggPCAxXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc2NvdmVyeS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56aGEuYWRkX2RldmljZV9wYWdlLmRpc2NvdmVyeV90ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2Rpc2NvdmVyZWREZXZpY2VzLm1hcChcbiAgICAgICAgICAgICAgICAgIChkZXZpY2UpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDx6aGEtZGV2aWNlLWNhcmRcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgIC5kZXZpY2U9JHtkZXZpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgLm5hcnJvdz0keyF0aGlzLmlzV2lkZX1cbiAgICAgICAgICAgICAgICAgICAgICAuc2hvd0hlbHA9JHt0aGlzLl9zaG93SGVscH1cbiAgICAgICAgICAgICAgICAgICAgICAuc2hvd0FjdGlvbnM9JHshdGhpcy5fYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgIGlzSm9pblBhZ2VcbiAgICAgICAgICAgICAgICAgICAgPjwvemhhLWRldmljZS1jYXJkPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGEtdGV4dGFyZWEgY2xhc3M9XCJldmVudHNcIiB2YWx1ZT1cIiR7dGhpcy5fZm9ybWF0dGVkRXZlbnRzfVwiPlxuICAgICAgICA8L2hhLXRleHRhcmVhPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU1lc3NhZ2UobWVzc2FnZTogYW55KTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJsb2dfb3V0cHV0XCIpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdHRlZEV2ZW50cyArPSBtZXNzYWdlLmxvZ19lbnRyeS5tZXNzYWdlICsgXCJcXG5cIjtcbiAgICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgY29uc3QgdGV4dEFyZWEgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImhhLXRleHRhcmVhXCIpO1xuICAgICAgICBpZiAodGV4dEFyZWEpIHtcbiAgICAgICAgICB0ZXh0QXJlYS5zY3JvbGxUb3AgPSB0ZXh0QXJlYS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1lc3NhZ2UudHlwZSAmJiBtZXNzYWdlLnR5cGUgPT09IFwiZGV2aWNlX2Z1bGx5X2luaXRpYWxpemVkXCIpIHtcbiAgICAgIHRoaXMuX2Rpc2NvdmVyZWREZXZpY2VzLnB1c2gobWVzc2FnZS5kZXZpY2VfaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdW5zdWJzY3JpYmUoKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX2FkZERldmljZXNUaW1lb3V0SGFuZGxlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fYWRkRGV2aWNlc1RpbWVvdXRIYW5kbGUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZC50aGVuKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7IHR5cGU6IFwiemhhL2RldmljZXMvcGVybWl0XCIgfTtcbiAgICBpZiAodGhpcy5faWVlZUFkZHJlc3MpIHtcbiAgICAgIGRhdGEuaWVlZSA9IHRoaXMuX2llZWVBZGRyZXNzO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzY3JpYmVkID0gdGhpcy5oYXNzIS5jb25uZWN0aW9uLnN1YnNjcmliZU1lc3NhZ2UoXG4gICAgICAobWVzc2FnZSkgPT4gdGhpcy5faGFuZGxlTWVzc2FnZShtZXNzYWdlKSxcbiAgICAgIGRhdGFcbiAgICApO1xuICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5fYWRkRGV2aWNlc1RpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5fdW5zdWJzY3JpYmUoKSxcbiAgICAgIDc1MDAwXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uSGVscFRhcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zaG93SGVscCA9ICF0aGlzLl9zaG93SGVscDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmRpc2NvdmVyeS10ZXh0LFxuICAgICAgICAuY29udGVudC1oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgfVxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lclthY3RpdmVdIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZXZlbnRzIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgLnNlYXJjaC1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCI6IFpIQUFkZERldmljZXNQYWdlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBMkJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFtQ0E7QUFwQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQVlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVNBOzs7O0FBMUJBO0FBQ0E7QUE0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBeU5BO0FBdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQXFDQTtBQUtBO0FBMkJBO0FBbEVBO0FBUUE7QUFRQTtBQWdCQTtBQVJBO0FBWUE7QUFPQTtBQUtBO0FBaUJBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFpRUE7QUFDQTs7O0FBQUE7QUFqT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFEQTtBQUNBO0FBbU9BO0FBQUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9