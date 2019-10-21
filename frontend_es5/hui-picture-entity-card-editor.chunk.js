(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-picture-entity-card-editor"],{

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

/***/ "./src/panels/lovelace/editor/config-elements/hui-picture-entity-card-editor.ts":
/*!**************************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-picture-entity-card-editor.ts ***!
  \**************************************************************************************/
/*! exports provided: HuiPictureEntityCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureEntityCardEditor", function() { return HuiPictureEntityCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_hui_action_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-action-editor */ "./src/panels/lovelace/components/hui-action-editor.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");













var cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"])({
    type: "string",
    entity: "string",
    image: "string?",
    name: "string?",
    camera_image: "string?",
    camera_view: "string?",
    aspect_ratio: "string?",
    tap_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_10__["actionConfigStruct"]),
    hold_action: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(_types__WEBPACK_IMPORTED_MODULE_10__["actionConfigStruct"]),
    show_name: "boolean?",
    show_state: "boolean?",
});
var HuiPictureEntityCardEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiPictureEntityCardEditor, _super);
    function HuiPictureEntityCardEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiPictureEntityCardEditor.prototype.setConfig = function (config) {
        config = cardConfigStruct(config);
        this._config = config;
    };
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_entity", {
        get: function () {
            return this._config.entity || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_name", {
        get: function () {
            return this._config.name || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_image", {
        get: function () {
            return this._config.image || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_camera_image", {
        get: function () {
            return this._config.camera_image || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_camera_view", {
        get: function () {
            return this._config.camera_view || "auto";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_aspect_ratio", {
        get: function () {
            return this._config.aspect_ratio || "50";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_tap_action", {
        get: function () {
            return this._config.tap_action || { action: "more-info" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_hold_action", {
        get: function () {
            return this._config.hold_action || { action: "more-info" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_show_name", {
        get: function () {
            return this._config.show_name || true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiPictureEntityCardEditor.prototype, "_show_state", {
        get: function () {
            return this._config.show_state || true;
        },
        enumerable: true,
        configurable: true
    });
    HuiPictureEntityCardEditor.prototype.render = function () {
        if (!this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var actions = ["more-info", "toggle", "navigate", "call-service", "none"];
        var views = ["auto", "live"];
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div class=\"card-config\">\n        <ha-entity-picker\n          .label=\"", " (", ")\"\n          .hass=\"", "\"\n          .value=\"", "\"\n          .configValue=", "\n          @change=\"", "\"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <paper-input\n          .label=\"", " (", ")\"\n          .value=\"", "\"\n          .configValue=\"", "\"\n          @value-changed=\"", "\"\n        ></paper-input>\n        <paper-input\n          .label=\"", " (", ")\"\n          .value=\"", "\"\n          .configValue=\"", "\"\n          @value-changed=\"", "\"\n        ></paper-input>\n        <ha-entity-picker\n          .label=\"", " (", ")\"\n          .hass=\"", "\"\n          .value=\"", "\"\n          .configValue=", "\n          @change=\"", "\"\n          domain-filter=\"camera\"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <div class=\"side-by-side\">\n          <paper-dropdown-menu\n            .label=\"", " (", ")\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              .selected=\"", "\"\n            >\n              ", "\n            </paper-listbox>\n          </paper-dropdown-menu>\n          <paper-input\n            .label=\"", " (", ")\"\n            type=\"number\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n        </div>\n        <div class=\"side-by-side\">\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >", "</ha-switch\n          >\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >", "</ha-switch\n          >\n        </div>\n        <div class=\"side-by-side\">\n          <hui-action-editor\n            .label=\"", " (", ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n          <hui-action-editor\n            .label=\"", " (", ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n        </div>\n      </div>\n    "], ["\n      ", "\n      <div class=\"card-config\">\n        <ha-entity-picker\n          .label=\"",
            " (",
            ")\"\n          .hass=\"", "\"\n          .value=\"", "\"\n          .configValue=", "\n          @change=\"", "\"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <paper-input\n          .label=\"",
            " (",
            ")\"\n          .value=\"", "\"\n          .configValue=\"", "\"\n          @value-changed=\"", "\"\n        ></paper-input>\n        <paper-input\n          .label=\"",
            " (",
            ")\"\n          .value=\"", "\"\n          .configValue=\"", "\"\n          @value-changed=\"", "\"\n        ></paper-input>\n        <ha-entity-picker\n          .label=\"",
            " (",
            ")\"\n          .hass=\"", "\"\n          .value=\"", "\"\n          .configValue=", "\n          @change=\"", "\"\n          domain-filter=\"camera\"\n          allow-custom-entity\n        ></ha-entity-picker>\n        <div class=\"side-by-side\">\n          <paper-dropdown-menu\n            .label=\"",
            " (",
            ")\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              .selected=\"", "\"\n            >\n              ",
            "\n            </paper-listbox>\n          </paper-dropdown-menu>\n          <paper-input\n            .label=\"",
            " (",
            ")\"\n            type=\"number\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n        </div>\n        <div class=\"side-by-side\">\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >",
            "</ha-switch\n          >\n          <ha-switch\n            ?checked=\"", "\"\n            .configValue=\"", "\"\n            @change=\"", "\"\n            >",
            "</ha-switch\n          >\n        </div>\n        <div class=\"side-by-side\">\n          <hui-action-editor\n            .label=\"",
            " (",
            ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n          <hui-action-editor\n            .label=\"",
            " (",
            ")\"\n            .hass=\"", "\"\n            .config=\"", "\"\n            .actions=\"", "\"\n            .configValue=\"", "\"\n            @action-changed=\"", "\"\n          ></hui-action-editor>\n        </div>\n      </div>\n    "])), _config_elements_style__WEBPACK_IMPORTED_MODULE_12__["configElementStyle"], this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"), this.hass.localize("ui.panel.lovelace.editor.card.config.required"), this.hass, this._entity, "entity", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.name"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._name, "name", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.image"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._image, "image", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.camera_image"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this.hass, this._camera_image, "camera_image", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.camera_view"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), "camera_view", this._valueChanged, views.indexOf(this._camera_view), views.map(function (view) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <paper-item>", "</paper-item>\n                "], ["\n                  <paper-item>", "</paper-item>\n                "])), view);
        }), this.hass.localize("ui.panel.lovelace.editor.card.generic.aspect_ratio"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), Number(this._aspect_ratio.replace("%", "")), "aspect_ratio", this._valueChanged, this._show_name !== false, "show_name", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.show_name"), this._show_state !== false, "show_state", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.show_state"), this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this.hass, this._tap_action, actions, "tap_action", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this.hass, this._hold_action, actions, "hold_action", this._valueChanged);
    };
    HuiPictureEntityCardEditor.prototype._valueChanged = function (ev) {
        var _a;
        if (!this._config || !this.hass) {
            return;
        }
        var target = ev.target;
        var value = target.value;
        if (target.configValue === "aspect_ratio" && target.value) {
            value += "%";
        }
        if (this["_" + target.configValue] === value ||
            this["_" + target.configValue] === target.config) {
            return;
        }
        if (target.configValue) {
            if (value === "") {
                delete this._config[target.configValue];
            }
            else {
                this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), (_a = {}, _a[target.configValue] = target.checked !== undefined
                    ? target.checked
                    : value
                        ? value
                        : target.config, _a));
            }
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(this, "config-changed", { config: this._config });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureEntityCardEditor.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiPictureEntityCardEditor.prototype, "_config", void 0);
    HuiPictureEntityCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-entity-card-editor")
    ], HuiPictureEntityCardEditor);
    return HuiPictureEntityCardEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXBpY3R1cmUtZW50aXR5LWNhcmQtZWRpdG9yLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS1hY3Rpb24tZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NvbmZpZy1lbGVtZW50cy9odWktcGljdHVyZS1lbnRpdHktY2FyZC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1waWNrZXJcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vZWRpdG9yL3R5cGVzXCI7XG5pbXBvcnQge1xuICBBY3Rpb25Db25maWcsXG4gIE5hdmlnYXRlQWN0aW9uQ29uZmlnLFxuICBDYWxsU2VydmljZUFjdGlvbkNvbmZpZyxcbiAgVXJsQWN0aW9uQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImFjdGlvbi1jaGFuZ2VkXCI6IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBmb3IgYWRkIGV2ZW50IGxpc3RlbmVyXG4gIGludGVyZmFjZSBIVE1MRWxlbWVudEV2ZW50TWFwIHtcbiAgICBcImFjdGlvbi1jaGFuZ2VkXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWFjdGlvbi1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlBY3Rpb25FZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbmZpZz86IEFjdGlvbkNvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGFjdGlvbnM/OiBzdHJpbmdbXTtcblxuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgZ2V0IF9hY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWchLmFjdGlvbiB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9uYXZpZ2F0aW9uX3BhdGgoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZyEgYXMgTmF2aWdhdGVBY3Rpb25Db25maWc7XG4gICAgcmV0dXJuIGNvbmZpZy5uYXZpZ2F0aW9uX3BhdGggfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdXJsX3BhdGgoKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZyEgYXMgVXJsQWN0aW9uQ29uZmlnO1xuICAgIHJldHVybiBjb25maWcudXJsX3BhdGggfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfc2VydmljZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnISBhcyBDYWxsU2VydmljZUFjdGlvbkNvbmZpZztcbiAgICByZXR1cm4gY29uZmlnLnNlcnZpY2UgfHwgXCJcIjtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5hY3Rpb25zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD1cIiR7dGhpcy5sYWJlbH1cIlxuICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiYWN0aW9uXCJ9XCJcbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMuYWN0aW9ucy5pbmRleE9mKHRoaXMuX2FjdGlvbil9XCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy5hY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+JHthY3Rpb259PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgYDtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgJHt0aGlzLl9hY3Rpb24gPT09IFwibmF2aWdhdGVcIlxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJOYXZpZ2F0aW9uIFBhdGhcIlxuICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX25hdmlnYXRpb25fcGF0aH1cIlxuICAgICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wibmF2aWdhdGlvbl9wYXRoXCJ9XCJcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX2FjdGlvbiA9PT0gXCJ1cmxcIlxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJVcmwgUGF0aFwiXG4gICAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fdXJsX3BhdGh9XCJcbiAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInVybF9wYXRoXCJ9XCJcbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmFjdGlvbiA9PT0gXCJjYWxsLXNlcnZpY2VcIlxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtc2VydmljZS1waWNrZXJcbiAgICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX3NlcnZpY2V9XCJcbiAgICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInNlcnZpY2VcIn1cIlxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgICAgICA+PC9oYS1zZXJ2aWNlLXBpY2tlcj5cbiAgICAgICAgICAgIDxoMz5Ub2dnbGUgRWRpdG9yIHRvIGlucHV0IFNlcnZpY2UgRGF0YTwvaDM+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBpZiAodGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSA9PT0gXCJhY3Rpb25cIikge1xuICAgICAgdGhpcy5jb25maWcgPSB7IGFjdGlvbjogXCJub25lXCIgfTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnISwgW3RhcmdldC5jb25maWdWYWx1ZSFdOiB0YXJnZXQudmFsdWUgfTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImFjdGlvbi1jaGFuZ2VkXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWFjdGlvbi1lZGl0b3JcIjogSHVpQWN0aW9uRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktYWN0aW9uLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktZW50aXR5LWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgc3RydWN0IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IHtcbiAgRW50aXRpZXNFZGl0b3JFdmVudCxcbiAgRWRpdG9yVGFyZ2V0LFxuICBhY3Rpb25Db25maWdTdHJ1Y3QsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdFbGVtZW50U3R5bGUgfSBmcm9tIFwiLi9jb25maWctZWxlbWVudHMtc3R5bGVcIjtcbmltcG9ydCB7IEFjdGlvbkNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBQaWN0dXJlRW50aXR5Q2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy90eXBlc1wiO1xuXG5jb25zdCBjYXJkQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgdHlwZTogXCJzdHJpbmdcIixcbiAgZW50aXR5OiBcInN0cmluZ1wiLFxuICBpbWFnZTogXCJzdHJpbmc/XCIsXG4gIG5hbWU6IFwic3RyaW5nP1wiLFxuICBjYW1lcmFfaW1hZ2U6IFwic3RyaW5nP1wiLFxuICBjYW1lcmFfdmlldzogXCJzdHJpbmc/XCIsXG4gIGFzcGVjdF9yYXRpbzogXCJzdHJpbmc/XCIsXG4gIHRhcF9hY3Rpb246IHN0cnVjdC5vcHRpb25hbChhY3Rpb25Db25maWdTdHJ1Y3QpLFxuICBob2xkX2FjdGlvbjogc3RydWN0Lm9wdGlvbmFsKGFjdGlvbkNvbmZpZ1N0cnVjdCksXG4gIHNob3dfbmFtZTogXCJib29sZWFuP1wiLFxuICBzaG93X3N0YXRlOiBcImJvb2xlYW4/XCIsXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktcGljdHVyZS1lbnRpdHktY2FyZC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlQaWN0dXJlRW50aXR5Q2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnRcbiAgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogUGljdHVyZUVudGl0eUNhcmRDb25maWc7XG5cbiAgcHVibGljIHNldENvbmZpZyhjb25maWc6IFBpY3R1cmVFbnRpdHlDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgY29uZmlnID0gY2FyZENvbmZpZ1N0cnVjdChjb25maWcpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBfZW50aXR5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZW50aXR5IHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX25hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5uYW1lIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2ltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaW1hZ2UgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfY2FtZXJhX2ltYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuY2FtZXJhX2ltYWdlIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2NhbWVyYV92aWV3KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuY2FtZXJhX3ZpZXcgfHwgXCJhdXRvXCI7XG4gIH1cblxuICBnZXQgX2FzcGVjdF9yYXRpbygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmFzcGVjdF9yYXRpbyB8fCBcIjUwXCI7XG4gIH1cblxuICBnZXQgX3RhcF9hY3Rpb24oKTogQWN0aW9uQ29uZmlnIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS50YXBfYWN0aW9uIHx8IHsgYWN0aW9uOiBcIm1vcmUtaW5mb1wiIH07XG4gIH1cblxuICBnZXQgX2hvbGRfYWN0aW9uKCk6IEFjdGlvbkNvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuaG9sZF9hY3Rpb24gfHwgeyBhY3Rpb246IFwibW9yZS1pbmZvXCIgfTtcbiAgfVxuXG4gIGdldCBfc2hvd19uYW1lKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnNob3dfbmFtZSB8fCB0cnVlO1xuICB9XG5cbiAgZ2V0IF9zaG93X3N0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnNob3dfc3RhdGUgfHwgdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1wibW9yZS1pbmZvXCIsIFwidG9nZ2xlXCIsIFwibmF2aWdhdGVcIiwgXCJjYWxsLXNlcnZpY2VcIiwgXCJub25lXCJdO1xuICAgIGNvbnN0IHZpZXdzID0gW1wiYXV0b1wiLCBcImxpdmVcIl07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y29uZmlnRWxlbWVudFN0eWxlfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuZW50aXR5XCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5yZXF1aXJlZFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9lbnRpdHl9XCJcbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImVudGl0eVwifVxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMubmFtZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9uYW1lfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcIm5hbWVcIn1cIlxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmltYWdlXCJcbiAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgKX0pXCJcbiAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2ltYWdlfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImltYWdlXCJ9XCJcbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fdmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmNhbWVyYV9pbWFnZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fY2FtZXJhX2ltYWdlfVwiXG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJjYW1lcmFfaW1hZ2VcIn1cbiAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICBkb21haW4tZmlsdGVyPVwiY2FtZXJhXCJcbiAgICAgICAgICBhbGxvdy1jdXN0b20tZW50aXR5XG4gICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5jYW1lcmFfdmlld1wiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiY2FtZXJhX3ZpZXdcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgLnNlbGVjdGVkPVwiJHt2aWV3cy5pbmRleE9mKHRoaXMuX2NhbWVyYV92aWV3KX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3ZpZXdzLm1hcCgodmlldykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+JHt2aWV3fTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLmFzcGVjdF9yYXRpb1wiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7TnVtYmVyKHRoaXMuX2FzcGVjdF9yYXRpby5yZXBsYWNlKFwiJVwiLCBcIlwiKSl9XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJhc3BlY3RfcmF0aW9cIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgID9jaGVja2VkPVwiJHt0aGlzLl9zaG93X25hbWUgIT09IGZhbHNlfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wic2hvd19uYW1lXCJ9XCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuc2hvd19uYW1lXCJcbiAgICAgICAgICAgICl9PC9oYS1zd2l0Y2hcbiAgICAgICAgICA+XG4gICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgP2NoZWNrZWQ9XCIke3RoaXMuX3Nob3dfc3RhdGUgIT09IGZhbHNlfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wic2hvd19zdGF0ZVwifVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5nZW5lcmljLnNob3dfc3RhdGVcIlxuICAgICAgICAgICAgKX08L2hhLXN3aXRjaFxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJ5LXNpZGVcIj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMudGFwX2FjdGlvblwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl90YXBfYWN0aW9ufVwiXG4gICAgICAgICAgICAuYWN0aW9ucz1cIiR7YWN0aW9uc31cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcInRhcF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgICA8aHVpLWFjdGlvbi1lZGl0b3JcbiAgICAgICAgICAgIC5sYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmdlbmVyaWMuaG9sZF9hY3Rpb25cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmNvbmZpZz1cIiR7dGhpcy5faG9sZF9hY3Rpb259XCJcbiAgICAgICAgICAgIC5hY3Rpb25zPVwiJHthY3Rpb25zfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiaG9sZF9hY3Rpb25cIn1cIlxuICAgICAgICAgICAgQGFjdGlvbi1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9odWktYWN0aW9uLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBFbnRpdGllc0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcgfHwgIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlISA9PT0gXCJhc3BlY3RfcmF0aW9cIiAmJiB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHZhbHVlICs9IFwiJVwiO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdmFsdWUgfHxcbiAgICAgIHRoaXNbYF8ke3RhcmdldC5jb25maWdWYWx1ZX1gXSA9PT0gdGFyZ2V0LmNvbmZpZ1xuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LmNvbmZpZ1ZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHtcbiAgICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgICAgW3RhcmdldC5jb25maWdWYWx1ZSFdOlxuICAgICAgICAgICAgdGFyZ2V0LmNoZWNrZWQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IHRhcmdldC5jaGVja2VkXG4gICAgICAgICAgICAgIDogdmFsdWVcbiAgICAgICAgICAgICAgPyB2YWx1ZVxuICAgICAgICAgICAgICA6IHRhcmdldC5jb25maWcsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnOiB0aGlzLl9jb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1waWN0dXJlLWVudGl0eS1jYXJkLWVkaXRvclwiOiBIdWlQaWN0dXJlRW50aXR5Q2FyZEVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBMb3ZlbGFjZVZpZXdDb25maWcsXG4gIEFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9lbnRpdHktcm93cy90eXBlc1wiO1xuaW1wb3J0IHsgSW5wdXRUeXBlIH0gZnJvbSBcInpsaWJcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBZYW1sQ2hhbmdlZEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICB5YW1sOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0VkaXRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgY29uZmlnOiBMb3ZlbGFjZVZpZXdDb25maWc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVmFsdWUge1xuICBmb3JtYXQ6IFwianNvblwiIHwgXCJ5YW1sXCI7XG4gIHZhbHVlPzogc3RyaW5nIHwgTG92ZWxhY2VDYXJkQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Vycm9yIHtcbiAgdHlwZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXRpZXNFZGl0b3JFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICBlbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGNvbmZpZ1ZhbHVlPzogc3RyaW5nO1xuICB0eXBlPzogSW5wdXRUeXBlO1xuICBjb25maWc6IEFjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUGlja1RhcmdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgYWN0aW9uOiBcInN0cmluZ1wiLFxuICBuYXZpZ2F0aW9uX3BhdGg6IFwic3RyaW5nP1wiLFxuICB1cmxfcGF0aDogXCJzdHJpbmc/XCIsXG4gIHNlcnZpY2U6IFwic3RyaW5nP1wiLFxuICBzZXJ2aWNlX2RhdGE6IFwib2JqZWN0P1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBlbnRpdGllc0NvbmZpZ1N0cnVjdCA9IHN0cnVjdC51bmlvbihbXG4gIHtcbiAgICBlbnRpdHk6IFwiZW50aXR5LWlkXCIsXG4gICAgbmFtZTogXCJzdHJpbmc/XCIsXG4gICAgaWNvbjogXCJpY29uP1wiLFxuICB9LFxuICBcImVudGl0eS1pZFwiLFxuXSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBMkJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFtQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBcUJBO0FBQUE7QUFBQTs7QUFtR0E7QUExRkE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBWUE7QUFVQTtBQVdBO0FBcENBO0FBR0E7QUFJQTtBQVVBO0FBVUE7QUFXQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpHQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFQQTtBQURBO0FBQ0E7QUFtR0E7QUFBQTtBQW5HQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQThOQTtBQXhOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQVVBO0FBRUE7QUFRQTtBQUVBO0FBUUE7QUFFQTtBQVlBO0FBRUE7QUFZQTtBQU1BO0FBRUE7QUFjQTtBQVFBO0FBT0E7QUFFQTtBQVVBO0FBRUE7QUF0REE7QUFHQTtBQTZEQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUEzTkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQUNBO0FBOE5BO0FBQUE7QUE5TkE7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9