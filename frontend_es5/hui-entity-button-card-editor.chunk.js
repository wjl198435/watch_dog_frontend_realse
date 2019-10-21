(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-entity-button-card-editor"],{

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

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
    if (typeof value !== "string") {
        return "entity id should be a string";
    }
    if (!value.includes(".")) {
        return "entity id should be in the format 'domain.entity'";
    }
    return true;
}


/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
    if (typeof value !== "string") {
        return "icon should be a string";
    }
    if (!value.includes(":")) {
        return "icon should be in the format 'mdi:icon'";
    }
    return true;
}


/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



var struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
    types: {
        "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
        icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"],
    },
});


/***/ }),

/***/ "./src/panels/lovelace/components/hui-action-editor.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-action-editor.ts ***!
  \*************************************************************/
/*! exports provided: HuiActionEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiActionEditor", function() { return HuiActionEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");








var HuiActionEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiActionEditor, _super);
    function HuiActionEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HuiActionEditor.prototype, "_action", {
        get: function () {
            return this.config.action || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiActionEditor.prototype, "_navigation_path", {
        get: function () {
            var config = this.config;
            return config.navigation_path || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiActionEditor.prototype, "_url_path", {
        get: function () {
            var config = this.config;
            return config.url_path || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiActionEditor.prototype, "_service", {
        get: function () {
            var config = this.config;
            return config.service || "";
        },
        enumerable: true,
        configurable: true
    });
    HuiActionEditor.prototype.render = function () {
        if (!this.hass || !this.actions) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <paper-dropdown-menu\n        .label=\"", "\"\n        .configValue=\"", "\"\n        @value-changed=\"", "\"\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=\"", "\"\n        >\n          ", "\n        </paper-listbox>\n      </paper-dropdown-menu>\n      ", "\n      ", "\n      ", "\n    "], ["\n      <paper-dropdown-menu\n        .label=\"", "\"\n        .configValue=\"", "\"\n        @value-changed=\"", "\"\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=\"", "\"\n        >\n          ",
            "\n        </paper-listbox>\n      </paper-dropdown-menu>\n      ",
            "\n      ",
            "\n      ",
            "\n    "])), this.label, "action", this._valueChanged, this.actions.indexOf(this._action), this.actions.map(function (action) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item>", "</paper-item>\n            "], ["\n              <paper-item>", "</paper-item>\n            "])), action);
        }), this._action === "navigate"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <paper-input\n              label=\"Navigation Path\"\n              .value=\"", "\"\n              .configValue=\"", "\"\n              @value-changed=\"", "\"\n            ></paper-input>\n          "], ["\n            <paper-input\n              label=\"Navigation Path\"\n              .value=\"", "\"\n              .configValue=\"", "\"\n              @value-changed=\"", "\"\n            ></paper-input>\n          "])), this._navigation_path, "navigation_path", this._valueChanged) : "", this._action === "url"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <paper-input\n              label=\"Url Path\"\n              .value=\"", "\"\n              .configValue=\"", "\"\n              @value-changed=\"", "\"\n            ></paper-input>\n          "], ["\n            <paper-input\n              label=\"Url Path\"\n              .value=\"", "\"\n              .configValue=\"", "\"\n              @value-changed=\"", "\"\n            ></paper-input>\n          "])), this._url_path, "url_path", this._valueChanged) : "", this.config && this.config.action === "call-service"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-service-picker\n              .hass=\"", "\"\n              .value=\"", "\"\n              .configValue=\"", "\"\n              @value-changed=\"", "\"\n            ></ha-service-picker>\n            <h3>Toggle Editor to input Service Data</h3>\n          "], ["\n            <ha-service-picker\n              .hass=\"", "\"\n              .value=\"", "\"\n              .configValue=\"", "\"\n              @value-changed=\"", "\"\n            ></ha-service-picker>\n            <h3>Toggle Editor to input Service Data</h3>\n          "])), this.hass, this._service, "service", this._valueChanged) : "");
    };
    HuiActionEditor.prototype._valueChanged = function (ev) {
        var _a;
        if (!this.hass) {
            return;
        }
        var target = ev.target;
        if (this["_" + target.configValue] === target.value) {
            return;
        }
        if (target.configValue === "action") {
            this.config = { action: "none" };
        }
        if (target.configValue) {
            this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.config), (_a = {}, _a[target.configValue] = target.value, _a));
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "action-changed");
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiActionEditor.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiActionEditor.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiActionEditor.prototype, "actions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiActionEditor.prototype, "hass", void 0);
    HuiActionEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-action-editor")
    ], HuiActionEditor);
    return HuiActionEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-theme-select-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-theme-select-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiThemeSelectEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiThemeSelectEditor", function() { return HuiThemeSelectEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




var HuiThemeSelectEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiThemeSelectEditor, _super);
    function HuiThemeSelectEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiThemeSelectEditor.prototype.render = function () {
        var themes = ["Backend-selected", "default"].concat(Object.keys(this.hass.themes.themes).sort());
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <paper-dropdown-menu\n        .label=", "\n        dynamic-align\n        @value-changed=\"", "\"\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=\"", "\"\n          attr-for-selected=\"theme\"\n        >\n          ", "\n        </paper-listbox>\n      </paper-dropdown-menu>\n    "], ["\n      <paper-dropdown-menu\n        .label=",
            "\n        dynamic-align\n        @value-changed=\"", "\"\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=\"", "\"\n          attr-for-selected=\"theme\"\n        >\n          ",
            "\n        </paper-listbox>\n      </paper-dropdown-menu>\n    "])), this.label ||
            this.hass.localize("ui.panel.lovelace.editor.card.generic.theme") +
                " (" +
                this.hass.localize("ui.panel.lovelace.editor.card.config.optional") +
                ")", this._changed, this.value, themes.map(function (theme) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item theme=\"", "\">", "</paper-item>\n            "], ["\n              <paper-item theme=\"", "\">", "</paper-item>\n            "])), theme, theme);
        }));
    };
    Object.defineProperty(HuiThemeSelectEditor, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-dropdown-menu {\n        width: 100%;\n      }\n    "], ["\n      paper-dropdown-menu {\n        width: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiThemeSelectEditor.prototype._changed = function (ev) {
        if (!this.hass || ev.target.value === "") {
            return;
        }
        this.value = ev.target.value;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "theme-changed");
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThemeSelectEditor.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThemeSelectEditor.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiThemeSelectEditor.prototype, "hass", void 0);
    HuiThemeSelectEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-theme-select-editor")
    ], HuiThemeSelectEditor);
    return HuiThemeSelectEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/hui-entity-button-card-editor.ts":
/*!*************************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-entity-button-card-editor.ts ***!
  \*************************************************************************************/
/*! exports provided: HuiEntityButtonCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEntityButtonCardEditor", function() { return HuiEntityButtonCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/lovelace/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");










var cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_6__["struct"])({
    type: "string",
    entity: "string?",
    name: "string?",
    show_name: "boolean?",
    icon: "string?",
    show_icon: "boolean?",
    icon_height: "string?",
    tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_6__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_7__["actionConfigStruct"]),
    hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_6__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_7__["actionConfigStruct"]),
    theme: "string?",
});
var HuiEntityButtonCardEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiEntityButtonCardEditor, _super);
    function HuiEntityButtonCardEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiEntityButtonCardEditor.prototype.setConfig = function (config) {
        config = cardConfigStruct(config);
        this._config = config;
    };
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_entity", {
        get: function () {
            return this._config.entity || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_name", {
        get: function () {
            return this._config.name || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_show_name", {
        get: function () {
            return this._config.show_name || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_icon", {
        get: function () {
            return this._config.icon || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_show_icon", {
        get: function () {
            return this._config.show_icon || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_icon_height", {
        get: function () {
            return this._config.icon_height && this._config.icon_height.includes("px")
                ? String(parseFloat(this._config.icon_height))
                : "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_tap_action", {
        get: function () {
            return this._config.tap_action || { action: "more-info" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_hold_action", {
        get: function () {
            return this._config.hold_action || { action: "none" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEntityButtonCardEditor.prototype, "_theme", {
        get: function () {
            return this._config.theme || "default";
        },
        enumerable: true,
        configurable: true
    });
    HuiEntityButtonCardEditor.prototype.render = function () {
        if (!this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var actions = [
            "more-info",
            "toggle",
            "navigate",
            "url",
            "call-service",
            "none",
        ];
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div class=\"card-config\">\n        <ha-entity-picker\n        .label=\"", " (", ")\"\n          .hass=\"", "\"\n          .value=\"", "\"\n          .configValue=", "\n          @change=\"", "\"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <div class=\"side-by-side\">\n          <paper-input\n          .label=\"", " (", ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n          <paper-input\n          .label=\"", " (", ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n        </div>\n        <div class=\"side-by-side\">\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >", "</ha-switch\n          >\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >", "</ha-switch\n          >\n        </div>\n        <div class=\"side-by-side\">\n          <paper-input\n          .label=\"", " (", ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n            type=\"number\"\n          ><div class=\"suffix\" slot=\"suffix\">px</div>\n          </paper-input>\n          <hui-theme-select-editor\n            .hass=\"", "\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @theme-changed=\"", "\"\n          ></hui-theme-select-editor>\n        </paper-input>\n\n        </div>\n        <div class=\"side-by-side\">\n          <hui-action-editor\n          .label=\"", " (", ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n          <hui-action-editor\n          .label=\"", " (", ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n        </div>\n      </div>\n    "], ["\n      ", "\n      <div class=\"card-config\">\n        <ha-entity-picker\n        .label=\"",
            " (",
            ")\"\n          .hass=\"", "\"\n          .value=\"", "\"\n          .configValue=", "\n          @change=\"", "\"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <div class=\"side-by-side\">\n          <paper-input\n          .label=\"",
            " (",
            ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n          <paper-input\n          .label=\"",
            " (",
            ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n        </div>\n        <div class=\"side-by-side\">\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >",
            "</ha-switch\n          >\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >",
            "</ha-switch\n          >\n        </div>\n        <div class=\"side-by-side\">\n          <paper-input\n          .label=\"",
            " (",
            ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n            type=\"number\"\n          ><div class=\"suffix\" slot=\"suffix\">px</div>\n          </paper-input>\n          <hui-theme-select-editor\n            .hass=\"", "\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @theme-changed=\"", "\"\n          ></hui-theme-select-editor>\n        </paper-input>\n\n        </div>\n        <div class=\"side-by-side\">\n          <hui-action-editor\n          .label=\"",
            " (",
            ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n          <hui-action-editor\n          .label=\"",
            " (",
            ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n        </div>\n      </div>\n    "])), _config_elements_style__WEBPACK_IMPORTED_MODULE_9__["configElementStyle"], this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"), this.hass.localize("ui.panel.lovelace.editor.card.config.required"), this.hass, this._entity, "entity", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.name"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._name, "name", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.icon"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._icon, "icon", this._valueChanged, this._config.show_name !== false, "show_name", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.show_name"), this._config.show_icon !== false, "show_icon", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.show_icon"), this.hass.localize("ui.panel.lovelace.editor.card.generic.icon_height"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._icon_height, "icon_height", this._valueChanged, this.hass, this._theme, "theme", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this.hass, this._tap_action, actions, "tap_action", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this.hass, this._hold_action, actions, "hold_action", this._valueChanged);
    };
    HuiEntityButtonCardEditor.prototype._valueChanged = function (ev) {
        var _a;
        if (!this._config || !this.hass) {
            return;
        }
        var target = ev.target;
        if (this["_" + target.configValue] === target.value ||
            this["_" + target.configValue] === target.config) {
            return;
        }
        if (target.configValue) {
            if (target.value === "") {
                delete this._config[target.configValue];
            }
            else {
                var newValue = void 0;
                if (target.configValue === "icon_height" &&
                    !isNaN(Number(target.value))) {
                    newValue = String(target.value) + "px";
                }
                this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), (_a = {}, _a[target.configValue] = target.checked !== undefined
                    ? target.checked
                    : newValue !== undefined
                        ? newValue
                        : target.value
                            ? target.value
                            : target.config, _a));
            }
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "config-changed", { config: this._config });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntityButtonCardEditor.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEntityButtonCardEditor.prototype, "_config", void 0);
    HuiEntityButtonCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entity-button-card-editor")
    ], HuiEntityButtonCardEditor);
    return HuiEntityButtonCardEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/editor/types.ts":
/*!*********************************************!*\
  !*** ./src/panels/lovelace/editor/types.ts ***!
  \*********************************************/
/*! exports provided: actionConfigStruct, entitiesConfigStruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionConfigStruct", function() { return actionConfigStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesConfigStruct", function() { return entitiesConfigStruct; });
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");

var actionConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"])({
    action: "string",
    navigation_path: "string?",
    url_path: "string?",
    service: "string?",
    service_data: "object?",
});
var entitiesConfigStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_0__["struct"].union([
    {
        entity: "entity-id",
        name: "string?",
        icon: "icon?",
    },
    "entity-id",
]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWVudGl0eS1idXR0b24tY2FyZC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvaXMtZW50aXR5LWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvaXMtaWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLWFjdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktZW50aXR5LWJ1dHRvbi1jYXJkLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci90eXBlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci1pY29uLWl0ZW0+YCBpcyBhIGNvbnZlbmllbmNlIGVsZW1lbnQgdG8gbWFrZSBhbiBpdGVtIHdpdGggaWNvbi4gSXQgaXMgYW5cbmludGVyYWN0aXZlIGxpc3QgaXRlbSB3aXRoIGEgZml4ZWQtd2lkdGggaWNvbiBhcmVhLCBhY2NvcmRpbmcgdG8gTWF0ZXJpYWxcbkRlc2lnbi4gVGhpcyBpcyB1c2VmdWwgaWYgdGhlIGljb25zIGFyZSBvZiB2YXJ5aW5nIHdpZHRocywgYnV0IHlvdSB3YW50IHRoZSBpdGVtXG5ib2RpZXMgdG8gbGluZSB1cC4gVXNlIHRoaXMgbGlrZSBhIGA8cGFwZXItaXRlbT5gLiBUaGUgY2hpbGQgbm9kZSB3aXRoIHRoZSBzbG90XG5uYW1lIGBpdGVtLWljb25gIGlzIHBsYWNlZCBpbiB0aGUgaWNvbiBhcmVhLlxuXG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxpcm9uLWljb24gaWNvbj1cImZhdm9yaXRlXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvaXJvbi1pY29uPlxuICAgICAgRmF2b3JpdGVcbiAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICA8cGFwZXItaWNvbi1pdGVtPlxuICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2Rpdj5cbiAgICAgIEF2YXRhclxuICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIGFyZWEgfCBgNTZweGBcbmAtLXBhcGVyLWl0ZW0taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIGFyZWEgfCBge31gXG5gLS1wYXBlci1pY29uLWl0ZW1gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaXRlbSB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0YCB8IFRoZSBmb250IHdlaWdodCBvZiBhIHNlbGVjdGVkIGl0ZW0gfCBgYm9sZGBcbmAtLXBhcGVyLWl0ZW0tc2VsZWN0ZWRgIHwgTWl4aW4gYXBwbGllZCB0byBzZWxlY3RlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3JgIHwgVGhlIGNvbG9yIGZvciBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGAtLWRpc2FibGVkLXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkYCB8IE1peGluIGFwcGxpZWQgdG8gZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWRgIHwgTWl4aW4gYXBwbGllZCB0byBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZWAgfCBNaXhpbiBhcHBsaWVkIHRvIDpiZWZvcmUgZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWl0ZW07XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWljb24ge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlcjtcblxuICAgICAgICB3aWR0aDogdmFyKC0tcGFwZXItaXRlbS1pY29uLXdpZHRoLCA1NnB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiY29udGVudEljb25cIiBjbGFzcz1cImNvbnRlbnQtaWNvblwiPlxuICAgICAgPHNsb3QgbmFtZT1cIml0ZW0taWNvblwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItaWNvbi1pdGVtJyxcbiAgYmVoYXZpb3JzOiBbUGFwZXJJdGVtQmVoYXZpb3JdXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRW50aXR5SWQodmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCIuXCIpKSB7XG4gICAgcmV0dXJuIFwiZW50aXR5IGlkIHNob3VsZCBiZSBpbiB0aGUgZm9ybWF0ICdkb21haW4uZW50aXR5J1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbih2YWx1ZTogYW55KTogc3RyaW5nIHwgYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gXCJpY29uIHNob3VsZCBiZSBhIHN0cmluZ1wiO1xuICB9XG4gIGlmICghdmFsdWUuaW5jbHVkZXMoXCI6XCIpKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnbWRpOmljb24nXCI7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBzdXBlcnN0cnVjdCB9IGZyb20gXCJzdXBlcnN0cnVjdFwiO1xuaW1wb3J0IHsgaXNFbnRpdHlJZCB9IGZyb20gXCIuL2lzLWVudGl0eS1pZFwiO1xuaW1wb3J0IHsgaXNJY29uIH0gZnJvbSBcIi4vaXMtaWNvblwiO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gc3VwZXJzdHJ1Y3Qoe1xuICB0eXBlczoge1xuICAgIFwiZW50aXR5LWlkXCI6IGlzRW50aXR5SWQsXG4gICAgaWNvbjogaXNJY29uLFxuICB9LFxufSk7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLXBpY2tlclwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQsIEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi9lZGl0b3IvdHlwZXNcIjtcbmltcG9ydCB7XG4gIEFjdGlvbkNvbmZpZyxcbiAgTmF2aWdhdGVBY3Rpb25Db25maWcsXG4gIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnLFxuICBVcmxBY3Rpb25Db25maWcsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiYWN0aW9uLWNoYW5nZWRcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwiYWN0aW9uLWNoYW5nZWRcIjogSEFTU0RvbUV2ZW50PHVuZGVmaW5lZD47XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktYWN0aW9uLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUFjdGlvbkVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnPzogQWN0aW9uQ29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgYWN0aW9ucz86IHN0cmluZ1tdO1xuXG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBnZXQgX2FjdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZyEuYWN0aW9uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX25hdmlnYXRpb25fcGF0aCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnISBhcyBOYXZpZ2F0ZUFjdGlvbkNvbmZpZztcbiAgICByZXR1cm4gY29uZmlnLm5hdmlnYXRpb25fcGF0aCB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF91cmxfcGF0aCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnISBhcyBVcmxBY3Rpb25Db25maWc7XG4gICAgcmV0dXJuIGNvbmZpZy51cmxfcGF0aCB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9zZXJ2aWNlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWchIGFzIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnO1xuICAgIHJldHVybiBjb25maWcuc2VydmljZSB8fCBcIlwiO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLmFjdGlvbnMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmxhYmVsfVwiXG4gICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJhY3Rpb25cIn1cIlxuICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dGhpcy5hY3Rpb25zLmluZGV4T2YodGhpcy5fYWN0aW9uKX1cIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLmFjdGlvbnMubWFwKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT4ke2FjdGlvbn08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAke3RoaXMuX2FjdGlvbiA9PT0gXCJuYXZpZ2F0ZVwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIk5hdmlnYXRpb24gUGF0aFwiXG4gICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbmF2aWdhdGlvbl9wYXRofVwiXG4gICAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJuYXZpZ2F0aW9uX3BhdGhcIn1cIlxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5fYWN0aW9uID09PSBcInVybFwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIlVybCBQYXRoXCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl91cmxfcGF0aH1cIlxuICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1widXJsX3BhdGhcIn1cIlxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgICR7dGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuYWN0aW9uID09PSBcImNhbGwtc2VydmljZVwiXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxoYS1zZXJ2aWNlLXBpY2tlclxuICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fc2VydmljZX1cIlxuICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wic2VydmljZVwifVwiXG4gICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID48L2hhLXNlcnZpY2UtcGlja2VyPlxuICAgICAgICAgICAgPGgzPlRvZ2dsZSBFZGl0b3IgdG8gaW5wdXQgU2VydmljZSBEYXRhPC9oMz5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldCA9IGV2LnRhcmdldCEgYXMgRWRpdG9yVGFyZ2V0O1xuICAgIGlmICh0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlID09PSBcImFjdGlvblwiKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsgYWN0aW9uOiBcIm5vbmVcIiB9O1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICB0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWchLCBbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV06IHRhcmdldC52YWx1ZSB9O1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiYWN0aW9uLWNoYW5nZWRcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktYWN0aW9uLWVkaXRvclwiOiBIdWlBY3Rpb25FZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwidGhlbWUtY2hhbmdlZFwiOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZm9yIGFkZCBldmVudCBsaXN0ZW5lclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgXCJ0aGVtZS1jaGFuZ2VkXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlUaGVtZVNlbGVjdEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCB0aGVtZXMgPSBbXCJCYWNrZW5kLXNlbGVjdGVkXCIsIFwiZGVmYXVsdFwiXS5jb25jYXQoXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmhhc3MhLnRoZW1lcy50aGVtZXMpLnNvcnQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWwgfHxcbiAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy50aGVtZVwiKSArXG4gICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBcIilcIn1cbiAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fY2hhbmdlZH1cIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMudmFsdWV9XCJcbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cInRoZW1lXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhlbWVzLm1hcCgodGhlbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSB0aGVtZT1cIiR7dGhlbWV9XCI+JHt0aGVtZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlZChldik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8IGV2LnRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInRoZW1lLWNoYW5nZWRcIik7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI6IEh1aVRoZW1lU2VsZWN0RWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuXG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQge1xuICBFbnRpdGllc0VkaXRvckV2ZW50LFxuICBFZGl0b3JUYXJnZXQsXG4gIGFjdGlvbkNvbmZpZ1N0cnVjdCxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRFZGl0b3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuL2NvbmZpZy1lbGVtZW50cy1zdHlsZVwiO1xuaW1wb3J0IHsgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEVudGl0eUJ1dHRvbkNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vY2FyZHMvdHlwZXNcIjtcblxuY29uc3QgY2FyZENvbmZpZ1N0cnVjdCA9IHN0cnVjdCh7XG4gIHR5cGU6IFwic3RyaW5nXCIsXG4gIGVudGl0eTogXCJzdHJpbmc/XCIsXG4gIG5hbWU6IFwic3RyaW5nP1wiLFxuICBzaG93X25hbWU6IFwiYm9vbGVhbj9cIixcbiAgaWNvbjogXCJzdHJpbmc/XCIsXG4gIHNob3dfaWNvbjogXCJib29sZWFuP1wiLFxuICBpY29uX2hlaWdodDogXCJzdHJpbmc/XCIsXG4gIHRhcF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICBob2xkX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIHRoZW1lOiBcInN0cmluZz9cIixcbn0pO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lbnRpdHktYnV0dG9uLWNhcmQtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpRW50aXR5QnV0dG9uQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogRW50aXR5QnV0dG9uQ2FyZENvbmZpZztcblxuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogRW50aXR5QnV0dG9uQ2FyZENvbmZpZyk6IHZvaWQge1xuICAgIGNvbmZpZyA9IGNhcmRDb25maWdTdHJ1Y3QoY29uZmlnKTtcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBnZXQgX2VudGl0eSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmVudGl0eSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9uYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEubmFtZSB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9zaG93X25hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuc2hvd19uYW1lIHx8IHRydWU7XG4gIH1cblxuICBnZXQgX2ljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pY29uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3Nob3dfaWNvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5zaG93X2ljb24gfHwgdHJ1ZTtcbiAgfVxuXG4gIGdldCBfaWNvbl9oZWlnaHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5pY29uX2hlaWdodCAmJiB0aGlzLl9jb25maWchLmljb25faGVpZ2h0LmluY2x1ZGVzKFwicHhcIilcbiAgICAgID8gU3RyaW5nKHBhcnNlRmxvYXQodGhpcy5fY29uZmlnIS5pY29uX2hlaWdodCkpXG4gICAgICA6IFwiXCI7XG4gIH1cblxuICBnZXQgX3RhcF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50YXBfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm1vcmUtaW5mb1wiIH07XG4gIH1cblxuICBnZXQgX2hvbGRfYWN0aW9uKCk6IEFjdGlvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibm9uZVwiIH07XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEudGhlbWUgfHwgXCJkZWZhdWx0XCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgIFwibW9yZS1pbmZvXCIsXG4gICAgICBcInRvZ2dsZVwiLFxuICAgICAgXCJuYXZpZ2F0ZVwiLFxuICAgICAgXCJ1cmxcIixcbiAgICAgIFwiY2FsbC1zZXJ2aWNlXCIsXG4gICAgICBcIm5vbmVcIixcbiAgICBdO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXR5XCJcbiAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcucmVxdWlyZWRcIlxuICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZW50aXR5fVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJlbnRpdHlcIn1cbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5uYW1lXCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgKX0pXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fbmFtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hbWVcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmljb25cIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9pY29ufVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaWNvblwifVwiXG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCI+XG4gICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgP2NoZWNrZWQ9XCIke3RoaXMuX2NvbmZpZyEuc2hvd19uYW1lICE9PSBmYWxzZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInNob3dfbmFtZVwifVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnNob3dfbmFtZVwiXG4gICAgICAgICAgICApfTwvaGEtc3dpdGNoXG4gICAgICAgICAgPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgID9jaGVja2VkPVwiJHt0aGlzLl9jb25maWchLnNob3dfaWNvbiAhPT0gZmFsc2V9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJzaG93X2ljb25cIn1cIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5zaG93X2ljb25cIlxuICAgICAgICAgICAgKX08L2hhLXN3aXRjaFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5pY29uX2hlaWdodFwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICl9KVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2ljb25faGVpZ2h0fVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaWNvbl9oZWlnaHRcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgPjxkaXYgY2xhc3M9XCJzdWZmaXhcIiBzbG90PVwic3VmZml4XCI+cHg8L2Rpdj5cbiAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxodWktdGhlbWUtc2VsZWN0LWVkaXRvclxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aGVtZX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRoZW1lXCJ9XCJcbiAgICAgICAgICAgIEB0aGVtZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktdGhlbWUtc2VsZWN0LWVkaXRvcj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxodWktYWN0aW9uLWVkaXRvclxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnRhcF9hY3Rpb25cIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmNvbmZpZz1cIiR7dGhpcy5fdGFwX2FjdGlvbn1cIlxuICAgICAgICAgICAgLmFjdGlvbnM9XCIke2FjdGlvbnN9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0YXBfYWN0aW9uXCJ9XCJcbiAgICAgICAgICAgIEBhY3Rpb24tY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWFjdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPGh1aS1hY3Rpb24tZWRpdG9yXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaG9sZF9hY3Rpb25cIlxuICAgICAgICAgICl9ICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmNvbmZpZz1cIiR7dGhpcy5faG9sZF9hY3Rpb259XCJcbiAgICAgICAgICAgIC5hY3Rpb25zPVwiJHthY3Rpb25zfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaG9sZF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcblxuICAgIGlmIChcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LnZhbHVlIHx8XG4gICAgICB0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC5jb25maWdcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICBkZWxldGUgdGhpcy5fY29uZmlnW3RhcmdldC5jb25maWdWYWx1ZSFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0YXJnZXQuY29uZmlnVmFsdWUgPT09IFwiaWNvbl9oZWlnaHRcIiAmJlxuICAgICAgICAgICFpc05hTihOdW1iZXIodGFyZ2V0LnZhbHVlKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBgJHtTdHJpbmcodGFyZ2V0LnZhbHVlKX1weGA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICAgIC4uLnRoaXMuX2NvbmZpZyxcbiAgICAgICAgICBbdGFyZ2V0LmNvbmZpZ1ZhbHVlIV06XG4gICAgICAgICAgICB0YXJnZXQuY2hlY2tlZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gdGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgOiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gbmV3VmFsdWVcbiAgICAgICAgICAgICAgOiB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgPyB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgOiB0YXJnZXQuY29uZmlnLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7IGNvbmZpZzogdGhpcy5fY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZW50aXR5LWJ1dHRvbi1jYXJkLWVkaXRvclwiOiBIdWlFbnRpdHlCdXR0b25DYXJkRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMb3ZlbGFjZUNhcmRDb25maWcsXG4gIExvdmVsYWNlVmlld0NvbmZpZyxcbiAgQWN0aW9uQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5pbXBvcnQgeyBJbnB1dFR5cGUgfSBmcm9tIFwiemxpYlwiO1xuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFlhbWxDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIHlhbWw6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaWV3RWRpdEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICBjb25maWc6IExvdmVsYWNlVmlld0NvbmZpZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdWYWx1ZSB7XG4gIGZvcm1hdDogXCJqc29uXCIgfCBcInlhbWxcIjtcbiAgdmFsdWU/OiBzdHJpbmcgfCBMb3ZlbGFjZUNhcmRDb25maWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRXJyb3Ige1xuICB0eXBlOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdGllc0VkaXRvckV2ZW50IHtcbiAgZGV0YWlsPzoge1xuICAgIGVudGl0aWVzPzogRW50aXR5Q29uZmlnW107XG4gIH07XG4gIHRhcmdldD86IEV2ZW50VGFyZ2V0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaXRvclRhcmdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgdmFsdWU/OiBzdHJpbmc7XG4gIGluZGV4PzogbnVtYmVyO1xuICBjaGVja2VkPzogYm9vbGVhbjtcbiAgY29uZmlnVmFsdWU/OiBzdHJpbmc7XG4gIHR5cGU/OiBJbnB1dFR5cGU7XG4gIGNvbmZpZzogQWN0aW9uQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcmRQaWNrVGFyZ2V0IGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25Db25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICBhY3Rpb246IFwic3RyaW5nXCIsXG4gIG5hdmlnYXRpb25fcGF0aDogXCJzdHJpbmc/XCIsXG4gIHVybF9wYXRoOiBcInN0cmluZz9cIixcbiAgc2VydmljZTogXCJzdHJpbmc/XCIsXG4gIHNlcnZpY2VfZGF0YTogXCJvYmplY3Q/XCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGVudGl0aWVzQ29uZmlnU3RydWN0ID0gc3RydWN0LnVuaW9uKFtcbiAge1xuICAgIGVudGl0eTogXCJlbnRpdHktaWRcIixcbiAgICBuYW1lOiBcInN0cmluZz9cIixcbiAgICBpY29uOiBcImljb24/XCIsXG4gIH0sXG4gIFwiZW50aXR5LWlkXCIsXG5dKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUEyQkE7QUFDQTtBQTdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQW1DQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFxQkE7QUFBQTtBQUFBOztBQW1HQTtBQTFGQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFZQTtBQVVBO0FBV0E7QUFwQ0E7QUFHQTtBQUlBO0FBVUE7QUFVQTtBQVdBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFDQTtBQW1HQTtBQUFBO0FBbkdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFTQTtBQUdBO0FBY0E7QUFBQTtBQUFBOztBQW9EQTtBQS9DQTtBQUNBO0FBSUE7QUFRQTtBQWFBO0FBbEJBO0FBQ0E7QUFDQTtBQUdBO0FBVUE7QUFHQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBS0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBb0RBO0FBQUE7QUFwREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBZ05BO0FBMU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQVdBO0FBRUE7QUFRQTtBQUVBO0FBYUE7QUFRQTtBQU9BO0FBRUE7QUFvQkE7QUFFQTtBQVVBO0FBRUE7QUFVQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE3TUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQUNBO0FBZ05BO0FBQUE7QUFoTkE7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9