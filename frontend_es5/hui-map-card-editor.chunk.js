(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-map-card-editor"],{

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

/***/ "./src/panels/lovelace/components/hui-input-list-editor.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-input-list-editor.ts ***!
  \*****************************************************************/
/*! exports provided: HuiInputListEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiInputListEditor", function() { return HuiInputListEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




var HuiInputListEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiInputListEditor, _super);
    function HuiInputListEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiInputListEditor.prototype.render = function () {
        var _this = this;
        if (!this.value) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <paper-input\n        label=\"", "\"\n        @change=\"", "\"\n      ></paper-input>\n    "], ["\n      ",
            "\n      <paper-input\n        label=\"", "\"\n        @change=\"", "\"\n      ></paper-input>\n    "])), this.value.map(function (listEntry, index) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <paper-input\n            label=\"", "\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            .index=\"", "\"\n            @value-changed=\"", "\"\n            @blur=\"", "\"\n            ><paper-icon-button\n              slot=\"suffix\"\n              class=\"clear-button\"\n              icon=\"hass:close\"\n              no-ripple\n              @click=\"", "\"\n              >Clear</paper-icon-button\n            ></paper-input\n          >\n        "], ["\n          <paper-input\n            label=\"", "\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            .index=\"", "\"\n            @value-changed=\"", "\"\n            @blur=\"", "\"\n            ><paper-icon-button\n              slot=\"suffix\"\n              class=\"clear-button\"\n              icon=\"hass:close\"\n              no-ripple\n              @click=\"", "\"\n              >Clear</paper-icon-button\n            ></paper-input\n          >\n        "])), _this.inputLabel, listEntry, "entry", index, _this._valueChanged, _this._consolidateEntries, _this._removeEntry);
        }), this.inputLabel, this._addEntry);
    };
    HuiInputListEditor.prototype._addEntry = function (ev) {
        var target = ev.target;
        if (target.value === "") {
            return;
        }
        var newEntries = this.value.concat(target.value);
        target.value = "";
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
            value: newEntries,
        });
        ev.target.blur();
    };
    HuiInputListEditor.prototype._valueChanged = function (ev) {
        ev.stopPropagation();
        var target = ev.target;
        var newEntries = this.value.concat();
        newEntries[target.index] = target.value;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
            value: newEntries,
        });
    };
    HuiInputListEditor.prototype._consolidateEntries = function (ev) {
        var target = ev.target;
        if (target.value === "") {
            var newEntries = this.value.concat();
            newEntries.splice(target.index, 1);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
                value: newEntries,
            });
        }
    };
    HuiInputListEditor.prototype._removeEntry = function (ev) {
        var parent = ev.currentTarget.parentElement;
        var newEntries = this.value.concat();
        newEntries.splice(parent.index, 1);
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
            value: newEntries,
        });
    };
    Object.defineProperty(HuiInputListEditor, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n    "], ["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputListEditor.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputListEditor.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiInputListEditor.prototype, "inputLabel", void 0);
    HuiInputListEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-list-editor")
    ], HuiInputListEditor);
    return HuiInputListEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/lovelace/editor/config-elements/hui-map-card-editor.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/config-elements/hui-map-card-editor.ts ***!
  \***************************************************************************/
/*! exports provided: HuiMapCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiMapCardEditor", function() { return HuiMapCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _components_hui_input_list_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hui-input-list-editor */ "./src/panels/lovelace/components/hui-input-list-editor.ts");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../types */ "./src/panels/lovelace/editor/types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../process-editor-entities */ "./src/panels/lovelace/editor/process-editor-entities.ts");










var cardConfigStruct = Object(_common_structs_struct__WEBPACK_IMPORTED_MODULE_5__["struct"])({
    type: "string",
    title: "string?",
    aspect_ratio: "string?",
    default_zoom: "number?",
    dark_mode: "boolean?",
    entities: [_types__WEBPACK_IMPORTED_MODULE_6__["entitiesConfigStruct"]],
    geo_location_sources: "array?",
});
var HuiMapCardEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiMapCardEditor, _super);
    function HuiMapCardEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiMapCardEditor.prototype.setConfig = function (config) {
        config = cardConfigStruct(config);
        this._config = config;
        this._configEntities = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_9__["processEditorEntities"])(config.entities);
    };
    Object.defineProperty(HuiMapCardEditor.prototype, "_title", {
        get: function () {
            return this._config.title || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiMapCardEditor.prototype, "_aspect_ratio", {
        get: function () {
            return this._config.aspect_ratio || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiMapCardEditor.prototype, "_default_zoom", {
        get: function () {
            return this._config.default_zoom || NaN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiMapCardEditor.prototype, "_geo_location_sources", {
        get: function () {
            return this._config.geo_location_sources || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiMapCardEditor.prototype, "_dark_mode", {
        get: function () {
            return this._config.dark_mode || false;
        },
        enumerable: true,
        configurable: true
    });
    HuiMapCardEditor.prototype.render = function () {
        if (!this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div class=\"card-config\">\n        <paper-input\n          .label=\"", " (", ")\"\n          .value=\"", "\"\n          .configValue=\"", "\"\n          @value-changed=\"", "\"\n        ></paper-input>\n        <div class=\"side-by-side\">\n          <paper-input\n            .label=\"", " (", ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n          <paper-input\n            .label=\"", " (", ")\"\n            type=\"number\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n        </div>\n        <ha-switch\n          ?checked=\"", "\"\n          .configValue=\"", "\"\n          @change=\"", "\"\n          >", "</ha-switch\n        >\n        <hui-entity-editor\n          .hass=\"", "\"\n          .entities=\"", "\"\n          @entities-changed=\"", "\"\n        ></hui-entity-editor>\n        <h3>\n          ", "\n        </h3>\n        <div class=\"geo_location_sources\">\n          <hui-input-list-editor\n            inputLabel=", "\n            .hass=\"", "\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></hui-input-list-editor>\n        </div>\n      </div>\n    "], ["\n      ", "\n      <div class=\"card-config\">\n        <paper-input\n          .label=\"",
            " (",
            ")\"\n          .value=\"", "\"\n          .configValue=\"", "\"\n          @value-changed=\"", "\"\n        ></paper-input>\n        <div class=\"side-by-side\">\n          <paper-input\n            .label=\"",
            " (",
            ")\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n          <paper-input\n            .label=\"",
            " (",
            ")\"\n            type=\"number\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></paper-input>\n        </div>\n        <ha-switch\n          ?checked=\"", "\"\n          .configValue=\"", "\"\n          @change=\"", "\"\n          >",
            "</ha-switch\n        >\n        <hui-entity-editor\n          .hass=\"", "\"\n          .entities=\"", "\"\n          @entities-changed=\"", "\"\n        ></hui-entity-editor>\n        <h3>\n          ",
            "\n        </h3>\n        <div class=\"geo_location_sources\">\n          <hui-input-list-editor\n            inputLabel=",
            "\n            .hass=\"", "\"\n            .value=\"", "\"\n            .configValue=\"", "\"\n            @value-changed=\"", "\"\n          ></hui-input-list-editor>\n        </div>\n      </div>\n    "])), _config_elements_style__WEBPACK_IMPORTED_MODULE_8__["configElementStyle"], this.hass.localize("ui.panel.lovelace.editor.card.generic.title"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._title, "title", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.generic.aspect_ratio"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._aspect_ratio, "aspect_ratio", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.map.default_zoom"), this.hass.localize("ui.panel.lovelace.editor.card.config.optional"), this._default_zoom, "default_zoom", this._valueChanged, this._dark_mode !== false, "dark_mode", this._valueChanged, this.hass.localize("ui.panel.lovelace.editor.card.map.dark_mode"), this.hass, this._configEntities, this._entitiesValueChanged, this.hass.localize("ui.panel.lovelace.editor.card.map.geo_location_sources"), this.hass.localize("ui.panel.lovelace.editor.card.map.source"), this.hass, this._geo_location_sources, "geo_location_sources", this._valueChanged);
    };
    HuiMapCardEditor.prototype._entitiesValueChanged = function (ev) {
        if (!this._config || !this.hass) {
            return;
        }
        if (ev.detail && ev.detail.entities) {
            this._config.entities = ev.detail.entities;
            this._configEntities = Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_9__["processEditorEntities"])(this._config.entities);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "config-changed", { config: this._config });
        }
    };
    HuiMapCardEditor.prototype._valueChanged = function (ev) {
        var _a;
        if (!this._config || !this.hass) {
            return;
        }
        var target = ev.target;
        if (target.configValue && this["_" + target.configValue] === target.value) {
            return;
        }
        var value = target.value;
        if (target.type === "number") {
            value = Number(value);
        }
        if (target.value === "" || (target.type === "number" && isNaN(value))) {
            delete this._config[target.configValue];
        }
        else if (target.configValue) {
            this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), (_a = {}, _a[target.configValue] = target.checked !== undefined ? target.checked : value, _a));
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "config-changed", { config: this._config });
    };
    Object.defineProperty(HuiMapCardEditor, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .geo_location_sources {\n        padding-left: 20px;\n      }\n    "], ["\n      .geo_location_sources {\n        padding-left: 20px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMapCardEditor.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMapCardEditor.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiMapCardEditor.prototype, "_configEntities", void 0);
    HuiMapCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-map-card-editor")
    ], HuiMapCardEditor);
    return HuiMapCardEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/editor/process-editor-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/editor/process-editor-entities.ts ***!
  \***************************************************************/
/*! exports provided: processEditorEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processEditorEntities", function() { return processEditorEntities; });
function processEditorEntities(entities) {
    return entities.map(function (entityConf) {
        if (typeof entityConf === "string") {
            return { entity: entityConf };
        }
        return entityConf;
    });
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLW1hcC1jYXJkLWVkaXRvci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1lbnRpdHktaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9pcy1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL3N0cnVjdHMvc3RydWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tcG9uZW50cy9odWktaW5wdXQtbGlzdC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY29uZmlnLWVsZW1lbnRzL2h1aS1tYXAtY2FyZC1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvcHJvY2Vzcy1lZGl0b3ItZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlckl0ZW1CZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pdGVtLWJlaGF2aW9yLmpzJztcblxuLypcbmA8cGFwZXItaWNvbi1pdGVtPmAgaXMgYSBjb252ZW5pZW5jZSBlbGVtZW50IHRvIG1ha2UgYW4gaXRlbSB3aXRoIGljb24uIEl0IGlzIGFuXG5pbnRlcmFjdGl2ZSBsaXN0IGl0ZW0gd2l0aCBhIGZpeGVkLXdpZHRoIGljb24gYXJlYSwgYWNjb3JkaW5nIHRvIE1hdGVyaWFsXG5EZXNpZ24uIFRoaXMgaXMgdXNlZnVsIGlmIHRoZSBpY29ucyBhcmUgb2YgdmFyeWluZyB3aWR0aHMsIGJ1dCB5b3Ugd2FudCB0aGUgaXRlbVxuYm9kaWVzIHRvIGxpbmUgdXAuIFVzZSB0aGlzIGxpa2UgYSBgPHBhcGVyLWl0ZW0+YC4gVGhlIGNoaWxkIG5vZGUgd2l0aCB0aGUgc2xvdFxubmFtZSBgaXRlbS1pY29uYCBpcyBwbGFjZWQgaW4gdGhlIGljb24gYXJlYS5cblxuICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICA8aXJvbi1pY29uIGljb249XCJmYXZvcml0ZVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L2lyb24taWNvbj5cbiAgICAgIEZhdm9yaXRlXG4gICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIiBzbG90PVwiaXRlbS1pY29uXCI+PC9kaXY+XG4gICAgICBBdmF0YXJcbiAgICA8L3BhcGVyLWljb24taXRlbT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiBhcmVhIHwgYDU2cHhgXG5gLS1wYXBlci1pdGVtLWljb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaWNvbiBhcmVhIHwgYHt9YFxuYC0tcGFwZXItaWNvbi1pdGVtYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGl0ZW0gfCBge31gXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkLXdlaWdodGAgfCBUaGUgZm9udCB3ZWlnaHQgb2YgYSBzZWxlY3RlZCBpdGVtIHwgYGJvbGRgXG5gLS1wYXBlci1pdGVtLXNlbGVjdGVkYCB8IE1peGluIGFwcGxpZWQgdG8gc2VsZWN0ZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWRpc2FibGVkLWNvbG9yYCB8IFRoZSBjb2xvciBmb3IgZGlzYWJsZWQgcGFwZXItaXRlbXMgfCBgLS1kaXNhYmxlZC10ZXh0LWNvbG9yYFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1mb2N1c2VkYCB8IE1peGluIGFwcGxpZWQgdG8gZm9jdXNlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZC1iZWZvcmVgIHwgTWl4aW4gYXBwbGllZCB0byA6YmVmb3JlIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaWNvbi1pdGVtO1xuICAgICAgfVxuXG4gICAgICAuY29udGVudC1pY29uIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG5cbiAgICAgICAgd2lkdGg6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi13aWR0aCwgNTZweCk7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0taWNvbjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImNvbnRlbnRJY29uXCIgY2xhc3M9XCJjb250ZW50LWljb25cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJpdGVtLWljb25cIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWljb24taXRlbScsXG4gIGJlaGF2aW9yczogW1BhcGVySXRlbUJlaGF2aW9yXVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmltcG9ydCB7IEVkaXRvclRhcmdldCB9IGZyb20gXCIuLi9lZGl0b3IvdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktaW5wdXQtbGlzdC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlJbnB1dExpc3RFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIHZhbHVlPzogc3RyaW5nW107XG4gIEBwcm9wZXJ0eSgpIHByb3RlY3RlZCBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHJvdGVjdGVkIGlucHV0TGFiZWw/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy52YWx1ZS5tYXAoKGxpc3RFbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5pbnB1dExhYmVsfVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke2xpc3RFbnRyeX1cIlxuICAgICAgICAgICAgLmNvbmZpZ1ZhbHVlPVwiJHtcImVudHJ5XCJ9XCJcbiAgICAgICAgICAgIC5pbmRleD1cIiR7aW5kZXh9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICAgIEBibHVyPVwiJHt0aGlzLl9jb25zb2xpZGF0ZUVudHJpZXN9XCJcbiAgICAgICAgICAgID48cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICBuby1yaXBwbGVcbiAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9yZW1vdmVFbnRyeX1cIlxuICAgICAgICAgICAgICA+Q2xlYXI8L3BhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dFxuICAgICAgICAgID5cbiAgICAgICAgYDtcbiAgICAgIH0pfVxuICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgIGxhYmVsPVwiJHt0aGlzLmlucHV0TGFiZWx9XCJcbiAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fYWRkRW50cnl9XCJcbiAgICAgID48L3BhcGVyLWlucHV0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9hZGRFbnRyeShldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5ld0VudHJpZXMgPSB0aGlzLnZhbHVlIS5jb25jYXQodGFyZ2V0LnZhbHVlIGFzIHN0cmluZyk7XG4gICAgdGFyZ2V0LnZhbHVlID0gXCJcIjtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHtcbiAgICAgIHZhbHVlOiBuZXdFbnRyaWVzLFxuICAgIH0pO1xuICAgIChldi50YXJnZXQhIGFzIExpdEVsZW1lbnQpLmJsdXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBjb25zdCBuZXdFbnRyaWVzID0gdGhpcy52YWx1ZSEuY29uY2F0KCk7XG4gICAgbmV3RW50cmllc1t0YXJnZXQuaW5kZXghXSA9IHRhcmdldC52YWx1ZSE7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogbmV3RW50cmllcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnNvbGlkYXRlRW50cmllcyhldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi50YXJnZXQhIGFzIEVkaXRvclRhcmdldDtcbiAgICBpZiAodGFyZ2V0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBjb25zdCBuZXdFbnRyaWVzID0gdGhpcy52YWx1ZSEuY29uY2F0KCk7XG4gICAgICBuZXdFbnRyaWVzLnNwbGljZSh0YXJnZXQuaW5kZXghLCAxKTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwge1xuICAgICAgICB2YWx1ZTogbmV3RW50cmllcyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZUVudHJ5KGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHBhcmVudCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBuZXdFbnRyaWVzID0gdGhpcy52YWx1ZSEuY29uY2F0KCk7XG4gICAgbmV3RW50cmllcy5zcGxpY2UocGFyZW50LmluZGV4ISwgMSk7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogbmV3RW50cmllcyxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0ID4gcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWlucHV0LWxpc3QtZWRpdG9yXCI6IEh1aUlucHV0TGlzdEVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS1lbnRpdHktZWRpdG9yXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS1pbnB1dC1saXN0LWVkaXRvclwiO1xuXG5pbXBvcnQgeyBzdHJ1Y3QgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cnVjdHMvc3RydWN0XCI7XG5pbXBvcnQge1xuICBFbnRpdGllc0VkaXRvckV2ZW50LFxuICBFZGl0b3JUYXJnZXQsXG4gIGVudGl0aWVzQ29uZmlnU3RydWN0LFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZEVkaXRvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRWxlbWVudFN0eWxlIH0gZnJvbSBcIi4vY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5pbXBvcnQgeyBwcm9jZXNzRWRpdG9yRW50aXRpZXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy1lZGl0b3ItZW50aXRpZXNcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi8uLi9lbnRpdHktcm93cy90eXBlc1wiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBNYXBDYXJkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL2NhcmRzL3R5cGVzXCI7XG5cbmNvbnN0IGNhcmRDb25maWdTdHJ1Y3QgPSBzdHJ1Y3Qoe1xuICB0eXBlOiBcInN0cmluZ1wiLFxuICB0aXRsZTogXCJzdHJpbmc/XCIsXG4gIGFzcGVjdF9yYXRpbzogXCJzdHJpbmc/XCIsXG4gIGRlZmF1bHRfem9vbTogXCJudW1iZXI/XCIsXG4gIGRhcmtfbW9kZTogXCJib29sZWFuP1wiLFxuICBlbnRpdGllczogW2VudGl0aWVzQ29uZmlnU3RydWN0XSxcbiAgZ2VvX2xvY2F0aW9uX3NvdXJjZXM6IFwiYXJyYXk/XCIsXG59KTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktbWFwLWNhcmQtZWRpdG9yXCIpXG5leHBvcnQgY2xhc3MgSHVpTWFwQ2FyZEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmRFZGl0b3Ige1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnPzogTWFwQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWdFbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuXG4gIHB1YmxpYyBzZXRDb25maWcoY29uZmlnOiBNYXBDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgY29uZmlnID0gY2FyZENvbmZpZ1N0cnVjdChjb25maWcpO1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyhjb25maWcuZW50aXRpZXMpO1xuICB9XG5cbiAgZ2V0IF90aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLnRpdGxlIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX2FzcGVjdF9yYXRpbygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWchLmFzcGVjdF9yYXRpbyB8fCBcIlwiO1xuICB9XG5cbiAgZ2V0IF9kZWZhdWx0X3pvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5kZWZhdWx0X3pvb20gfHwgTmFOO1xuICB9XG5cbiAgZ2V0IF9nZW9fbG9jYXRpb25fc291cmNlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZyEuZ2VvX2xvY2F0aW9uX3NvdXJjZXMgfHwgW107XG4gIH1cblxuICBnZXQgX2RhcmtfbW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnIS5kYXJrX21vZGUgfHwgZmFsc2U7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke2NvbmZpZ0VsZW1lbnRTdHlsZX1cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbmZpZ1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAubGFiZWw9XCIke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy50aXRsZVwiXG4gICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICl9KVwiXG4gICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl90aXRsZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJ0aXRsZVwifVwiXG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtYnktc2lkZVwiPlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy5hc3BlY3RfcmF0aW9cIlxuICAgICAgICAgICAgKX0gKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLmNvbmZpZy5vcHRpb25hbFwiXG4gICAgICAgICAgICApfSlcIlxuICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9hc3BlY3RfcmF0aW99XCJcbiAgICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJhc3BlY3RfcmF0aW9cIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgLmxhYmVsPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQubWFwLmRlZmF1bHRfem9vbVwiXG4gICAgICAgICAgICApfSAoJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuY29uZmlnLm9wdGlvbmFsXCJcbiAgICAgICAgICAgICl9KVwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fZGVmYXVsdF96b29tfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiZGVmYXVsdF96b29tXCJ9XCJcbiAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPVwiJHt0aGlzLl92YWx1ZUNoYW5nZWR9XCJcbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICA/Y2hlY2tlZD1cIiR7dGhpcy5fZGFya19tb2RlICE9PSBmYWxzZX1cIlxuICAgICAgICAgIC5jb25maWdWYWx1ZT1cIiR7XCJkYXJrX21vZGVcIn1cIlxuICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQubWFwLmRhcmtfbW9kZVwiXG4gICAgICAgICAgKX08L2hhLXN3aXRjaFxuICAgICAgICA+XG4gICAgICAgIDxodWktZW50aXR5LWVkaXRvclxuICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAuZW50aXRpZXM9XCIke3RoaXMuX2NvbmZpZ0VudGl0aWVzfVwiXG4gICAgICAgICAgQGVudGl0aWVzLWNoYW5nZWQ9XCIke3RoaXMuX2VudGl0aWVzVmFsdWVDaGFuZ2VkfVwiXG4gICAgICAgID48L2h1aS1lbnRpdHktZWRpdG9yPlxuICAgICAgICA8aDM+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5jYXJkLm1hcC5nZW9fbG9jYXRpb25fc291cmNlc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdlb19sb2NhdGlvbl9zb3VyY2VzXCI+XG4gICAgICAgICAgPGh1aS1pbnB1dC1saXN0LWVkaXRvclxuICAgICAgICAgICAgaW5wdXRMYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5tYXAuc291cmNlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAudmFsdWU9XCIke3RoaXMuX2dlb19sb2NhdGlvbl9zb3VyY2VzfVwiXG4gICAgICAgICAgICAuY29uZmlnVmFsdWU9XCIke1wiZ2VvX2xvY2F0aW9uX3NvdXJjZXNcIn1cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2h1aS1pbnB1dC1saXN0LWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW50aXRpZXNWYWx1ZUNoYW5nZWQoZXY6IEVudGl0aWVzRWRpdG9yRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZyB8fCAhdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChldi5kZXRhaWwgJiYgZXYuZGV0YWlsLmVudGl0aWVzKSB7XG4gICAgICB0aGlzLl9jb25maWcuZW50aXRpZXMgPSBldi5kZXRhaWwuZW50aXRpZXM7XG4gICAgICB0aGlzLl9jb25maWdFbnRpdGllcyA9IHByb2Nlc3NFZGl0b3JFbnRpdGllcyh0aGlzLl9jb25maWcuZW50aXRpZXMpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8YW55Pik6IHZvaWQge1xuICAgIGlmICghdGhpcy5fY29uZmlnIHx8ICF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSAmJiB0aGlzW2BfJHt0YXJnZXQuY29uZmlnVmFsdWV9YF0gPT09IHRhcmdldC52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdmFsdWU6IGFueSA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC52YWx1ZSA9PT0gXCJcIiB8fCAodGFyZ2V0LnR5cGUgPT09IFwibnVtYmVyXCIgJiYgaXNOYU4odmFsdWUpKSkge1xuICAgICAgZGVsZXRlIHRoaXMuX2NvbmZpZ1t0YXJnZXQuY29uZmlnVmFsdWUhXTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgdGhpcy5fY29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWVdOlxuICAgICAgICAgIHRhcmdldC5jaGVja2VkICE9PSB1bmRlZmluZWQgPyB0YXJnZXQuY2hlY2tlZCA6IHZhbHVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IHRoaXMuX2NvbmZpZyB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5nZW9fbG9jYXRpb25fc291cmNlcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktbWFwLWNhcmQtZWRpdG9yXCI6IEh1aU1hcENhcmRFZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9lbnRpdHktcm93cy90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0VkaXRvckVudGl0aWVzKGVudGl0aWVzKTogRW50aXR5Q29uZmlnW10ge1xuICByZXR1cm4gZW50aXRpZXMubWFwKChlbnRpdHlDb25mKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBlbnRpdHlDb25mID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4geyBlbnRpdHk6IGVudGl0eUNvbmYgfTtcbiAgICB9XG4gICAgcmV0dXJuIGVudGl0eUNvbmY7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHtcbiAgTG92ZWxhY2VDYXJkQ29uZmlnLFxuICBMb3ZlbGFjZVZpZXdDb25maWcsXG4gIEFjdGlvbkNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEVudGl0eUNvbmZpZyB9IGZyb20gXCIuLi9lbnRpdHktcm93cy90eXBlc1wiO1xuaW1wb3J0IHsgSW5wdXRUeXBlIH0gZnJvbSBcInpsaWJcIjtcbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuLi9jb21tb24vc3RydWN0cy9zdHJ1Y3RcIjtcblxuZXhwb3J0IGludGVyZmFjZSBZYW1sQ2hhbmdlZEV2ZW50IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICB5YW1sOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlld0VkaXRFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgY29uZmlnOiBMb3ZlbGFjZVZpZXdDb25maWc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnVmFsdWUge1xuICBmb3JtYXQ6IFwianNvblwiIHwgXCJ5YW1sXCI7XG4gIHZhbHVlPzogc3RyaW5nIHwgTG92ZWxhY2VDYXJkQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0Vycm9yIHtcbiAgdHlwZTogc3RyaW5nO1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXRpZXNFZGl0b3JFdmVudCB7XG4gIGRldGFpbD86IHtcbiAgICBlbnRpdGllcz86IEVudGl0eUNvbmZpZ1tdO1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHZhbHVlPzogc3RyaW5nO1xuICBpbmRleD86IG51bWJlcjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIGNvbmZpZ1ZhbHVlPzogc3RyaW5nO1xuICB0eXBlPzogSW5wdXRUeXBlO1xuICBjb25maWc6IEFjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkUGlja1RhcmdldCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ29uZmlnU3RydWN0ID0gc3RydWN0KHtcbiAgYWN0aW9uOiBcInN0cmluZ1wiLFxuICBuYXZpZ2F0aW9uX3BhdGg6IFwic3RyaW5nP1wiLFxuICB1cmxfcGF0aDogXCJzdHJpbmc/XCIsXG4gIHNlcnZpY2U6IFwic3RyaW5nP1wiLFxuICBzZXJ2aWNlX2RhdGE6IFwib2JqZWN0P1wiLFxufSk7XG5cbmV4cG9ydCBjb25zdCBlbnRpdGllc0NvbmZpZ1N0cnVjdCA9IHN0cnVjdC51bmlvbihbXG4gIHtcbiAgICBlbnRpdHk6IFwiZW50aXR5LWlkXCIsXG4gICAgbmFtZTogXCJzdHJpbmc/XCIsXG4gICAgaWNvbjogXCJpY29uP1wiLFxuICB9LFxuICBcImVudGl0eS1pZFwiLFxuXSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUNBO0FBMkJBO0FBQ0E7QUE3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFtQ0E7QUFwQ0E7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFTQTtBQUdBO0FBS0E7QUFBQTtBQUFBOztBQTJGQTtBQXRGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFvQkE7QUFsQkE7QUFrQkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQVFBOzs7QUFBQTtBQXpGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUEyRkE7QUFBQTtBQTNGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBU0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTs7QUFxSkE7QUE5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUVBO0FBU0E7QUFFQTtBQVFBO0FBRUE7QUFhQTtBQVVBO0FBTUE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFLQTs7O0FBQUE7QUFuSkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBcUpBO0FBQUE7QUFySkE7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=