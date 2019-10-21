(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[16],{

/***/ "./src/components/entity/ha-entity-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-picker.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");











var rowRenderer = function (root, _owner, model) {
    if (!root.firstElementChild) {
        root.innerHTML = "\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj=\"[[item]]\" slot=\"item-icon\"></state-badge>\n        <paper-item-body two-line=\"\">\n          <div class='name'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    ";
    }
    root.querySelector("state-badge").stateObj = model.item;
    root.querySelector(".name").textContent = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(model.item);
    root.querySelector("[secondary]").textContent = model.item.entity_id;
};
var HaEntityPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaEntityPicker, _super);
    function HaEntityPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getStates = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (hass, domainFilter, entityFilter) {
            var states = [];
            if (!hass) {
                return [];
            }
            var entityIds = Object.keys(hass.states);
            if (domainFilter) {
                entityIds = entityIds.filter(function (eid) { return eid.substr(0, eid.indexOf(".")) === domainFilter; });
            }
            states = entityIds.sort().map(function (key) { return hass.states[key]; });
            if (entityFilter) {
                states = states.filter(function (stateObj) {
                    // We always want to include the entity of the current value
                    return stateObj.entity_id === _this.value || entityFilter(stateObj);
                });
            }
            return states;
        });
        return _this;
    }
    HaEntityPicker.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("hass") && !this._opened) {
            this._hass = this.hass;
        }
    };
    HaEntityPicker.prototype.render = function () {
        var states = this._getStates(this._hass, this.domainFilter, this.entityFilter);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <vaadin-combo-box-light\n        item-value-path=\"entity_id\"\n        item-label-path=\"entity_id\"\n        .items=", "\n        .value=", "\n        .allowCustomValue=", "\n        .renderer=", "\n        @opened-changed=", "\n        @value-changed=", "\n      >\n        <paper-input\n          .autofocus=", "\n          .label=", "\n          .value=", "\n          .disabled=", "\n          class=\"input\"\n          autocapitalize=\"none\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          spellcheck=\"false\"\n        >\n          ", "\n          ", "\n        </paper-input>\n      </vaadin-combo-box-light>\n    "], ["\n      <vaadin-combo-box-light\n        item-value-path=\"entity_id\"\n        item-label-path=\"entity_id\"\n        .items=", "\n        .value=", "\n        .allowCustomValue=", "\n        .renderer=", "\n        @opened-changed=", "\n        @value-changed=", "\n      >\n        <paper-input\n          .autofocus=", "\n          .label=",
            "\n          .value=", "\n          .disabled=", "\n          class=\"input\"\n          autocapitalize=\"none\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          spellcheck=\"false\"\n        >\n          ",
            "\n          ",
            "\n        </paper-input>\n      </vaadin-combo-box-light>\n    "])), states, this._value, this.allowCustomEntity, rowRenderer, this._openedChanged, this._valueChanged, this.autofocus, this.label === undefined && this._hass
            ? this._hass.localize("ui.components.entity.entity-picker.entity")
            : this.label, this._value, this.disabled, this.value
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  aria-label=\"Clear\"\n                  slot=\"suffix\"\n                  class=\"clear-button\"\n                  icon=\"hass:close\"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  aria-label=\"Clear\"\n                  slot=\"suffix\"\n                  class=\"clear-button\"\n                  icon=\"hass:close\"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              "]))) : "", states.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  aria-label=\"Show entities\"\n                  slot=\"suffix\"\n                  class=\"toggle-button\"\n                  .icon=", "\n                >\n                  Toggle\n                </paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  aria-label=\"Show entities\"\n                  slot=\"suffix\"\n                  class=\"toggle-button\"\n                  .icon=", "\n                >\n                  Toggle\n                </paper-icon-button>\n              "])), this._opened ? "hass:menu-up" : "hass:menu-down") : "");
    };
    Object.defineProperty(HaEntityPicker.prototype, "_value", {
        get: function () {
            return this.value || "";
        },
        enumerable: true,
        configurable: true
    });
    HaEntityPicker.prototype._openedChanged = function (ev) {
        this._opened = ev.detail.value;
    };
    HaEntityPicker.prototype._valueChanged = function (ev) {
        var _this = this;
        var newValue = ev.detail.value;
        if (newValue !== this._value) {
            this.value = ev.detail.value;
            setTimeout(function () {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "value-changed", { value: _this.value });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "change");
            }, 0);
        }
    };
    Object.defineProperty(HaEntityPicker, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "], ["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "autofocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean, attribute: "allow-custom-entity" })
    ], HaEntityPicker.prototype, "allowCustomEntity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ attribute: "domain-filter" })
    ], HaEntityPicker.prototype, "domainFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "entityFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "_opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "_hass", void 0);
    return HaEntityPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"]));
customElements.define("ha-entity-picker", HaEntityPicker);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/*! exports provided: HaCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCodeEditor", function() { return HaCodeEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ "./src/resources/codemirror.ondemand.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");




var HaCodeEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCodeEditor, _super);
    function HaCodeEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autofocus = false;
        _this.rtl = false;
        _this.error = false;
        _this._value = "";
        return _this;
    }
    Object.defineProperty(HaCodeEditor.prototype, "value", {
        get: function () {
            return this.codemirror ? this.codemirror.getValue() : this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HaCodeEditor.prototype, "hasComments", {
        get: function () {
            return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    HaCodeEditor.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (!this.codemirror) {
            return;
        }
        this.codemirror.refresh();
        if (this.autofocus !== false) {
            this.codemirror.focus();
        }
    };
    HaCodeEditor.prototype.update = function (changedProps) {
        _super.prototype.update.call(this, changedProps);
        if (!this.codemirror) {
            return;
        }
        if (changedProps.has("mode")) {
            this.codemirror.setOption("mode", this.mode);
        }
        if (changedProps.has("autofocus")) {
            this.codemirror.setOption("autofocus", this.autofocus !== false);
        }
        if (changedProps.has("_value") && this._value !== this.value) {
            this.codemirror.setValue(this._value);
        }
        if (changedProps.has("rtl")) {
            this.codemirror.setOption("gutters", this._calcGutters());
            this._setScrollBarDirection();
        }
        if (changedProps.has("error")) {
            this.classList.toggle("error-state", this.error);
        }
    };
    HaCodeEditor.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._load();
    };
    HaCodeEditor.prototype._load = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loaded, codeMirror, shadowRoot;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__["loadCodeMirror"])()];
                    case 1:
                        loaded = _a.sent();
                        codeMirror = loaded.codeMirror;
                        shadowRoot = this.attachShadow({ mode: "open" });
                        shadowRoot.innerHTML = "\n    <style>\n      " + loaded.codeMirrorCss + "\n      .CodeMirror {\n        height: var(--code-mirror-height, auto);\n        direction: var(--code-mirror-direction, ltr);\n      }\n      .CodeMirror-scroll {\n        max-height: var(--code-mirror-max-height, --code-mirror-height);\n      }\n      .CodeMirror-gutters {\n        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        background-color: var(--paper-dialog-background-color, var(--primary-background-color));\n        transition: 0.2s ease border-right;\n      }\n      :host(.error-state) .CodeMirror-gutters {\n        border-color: var(--error-state-color, red);\n      }\n      .CodeMirror-focused .CodeMirror-gutters {\n        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      .CodeMirror-linenumber {\n        color: var(--paper-dialog-color, var(--primary-text-color));\n      }\n      .rtl .CodeMirror-vscrollbar {\n        right: auto;\n        left: 0px;\n      }\n      .rtl-gutter {\n        width: 20px;\n      }\n    </style>";
                        this.codemirror = codeMirror(shadowRoot, {
                            value: this._value,
                            lineNumbers: true,
                            tabSize: 2,
                            mode: this.mode,
                            autofocus: this.autofocus !== false,
                            viewportMargin: Infinity,
                            extraKeys: {
                                Tab: "indentMore",
                                "Shift-Tab": "indentLess",
                            },
                            gutters: this._calcGutters(),
                        });
                        this._setScrollBarDirection();
                        this.codemirror.on("changes", function () { return _this._onChange(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HaCodeEditor.prototype._onChange = function () {
        var newValue = this.value;
        if (newValue === this._value) {
            return;
        }
        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", { value: this._value });
    };
    HaCodeEditor.prototype._calcGutters = function () {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
    };
    HaCodeEditor.prototype._setScrollBarDirection = function () {
        if (this.codemirror) {
            this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "mode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "autofocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "rtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaCodeEditor.prototype, "_value", void 0);
    HaCodeEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-code-editor")
    ], HaCodeEditor);
    return HaCodeEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_3__["UpdatingElement"]));



/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");


var ironIconClass = customElements.get("iron-icon");
var loaded = false;
var HaIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIcon, _super);
    function HaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIcon.prototype.listen = function (node, eventName, methodName) {
        _super.prototype.listen.call(this, node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    };
    return HaIcon;
}(ironIconClass));

customElements.define("ha-icon", HaIcon);


/***/ }),

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
var UNAVAILABLE = "unavailable";
var ENTITY_COMPONENT_DOMAINS = [
    "air_quality",
    "alarm_control_panel",
    "alert",
    "automation",
    "binary_sensor",
    "calendar",
    "camera",
    "counter",
    "cover",
    "dominos",
    "fan",
    "geo_location",
    "group",
    "history_graph",
    "image_processing",
    "input_boolean",
    "input_datetime",
    "input_number",
    "input_select",
    "input_text",
    "light",
    "lock",
    "mailbox",
    "media_player",
    "person",
    "plant",
    "remember_the_milk",
    "remote",
    "scene",
    "script",
    "sensor",
    "switch",
    "timer",
    "utility_meter",
    "vacuum",
    "weather",
    "wink",
    "zha",
    "zwave",
];


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

/***/ "./src/panels/developer-tools/service/developer-tools-service.js":
/*!***********************************************************************!*\
  !*** ./src/panels/developer-tools/service/developer-tools-service.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _components_ha_service_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-service-picker */ "./src/components/ha-service-picker.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n          display: block;\n          padding: 16px;\n          direction: ltr;\n        }\n\n        .ha-form {\n          margin-right: 16px;\n          max-width: 400px;\n        }\n\n        mwc-button {\n          margin-top: 8px;\n        }\n\n        .description {\n          margin-top: 24px;\n          white-space: pre-wrap;\n        }\n\n        .header {\n          @apply --paper-font-title;\n        }\n\n        .attributes th {\n          text-align: left;\n        }\n\n        .attributes tr {\n          vertical-align: top;\n        }\n\n        .attributes tr:nth-child(odd) {\n          background-color: var(--table-row-background-color, #eee);\n        }\n\n        .attributes tr:nth-child(even) {\n          background-color: var(--table-row-alternative-background-color, #eee);\n        }\n\n        .attributes td:nth-child(3) {\n          white-space: pre-wrap;\n          word-break: break-word;\n        }\n\n        pre {\n          margin: 0;\n        }\n\n        h1 {\n          white-space: normal;\n        }\n\n        td {\n          padding: 4px;\n        }\n\n        .error {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <app-localstorage-document\n        key=\"panel-dev-service-state-domain-service\"\n        data=\"{{domainService}}\"\n      >\n      </app-localstorage-document>\n      <app-localstorage-document\n        key=\"[[_computeServicedataKey(domainService)]]\"\n        data=\"{{serviceData}}\"\n      >\n      </app-localstorage-document>\n\n      <div class=\"content\">\n        <p>\n          The service dev tool allows you to call any available service in Home\n          Assistant.\n        </p>\n\n        <div class=\"ha-form\">\n          <ha-service-picker\n            hass=\"[[hass]]\"\n            value=\"{{domainService}}\"\n          ></ha-service-picker>\n          <template is=\"dom-if\" if=\"[[_computeHasEntity(_attributes)]]\">\n            <ha-entity-picker\n              hass=\"[[hass]]\"\n              value=\"[[_computeEntityValue(parsedJSON)]]\"\n              on-change=\"_entityPicked\"\n              disabled=\"[[!validJSON]]\"\n              domain-filter=\"[[_computeEntityDomainFilter(_domain)]]\"\n              allow-custom-entity\n            ></ha-entity-picker>\n          </template>\n          <p>Service Data (YAML, optional)</p>\n          <ha-code-editor\n            mode=\"yaml\"\n            value=\"[[serviceData]]\"\n            error=\"[[!validJSON]]\"\n            on-value-changed=\"_yamlChanged\"\n          ></ha-code-editor>\n          <mwc-button on-click=\"_callService\" raised disabled=\"[[!validJSON]]\">\n            Call Service\n          </mwc-button>\n        </div>\n\n        <template is=\"dom-if\" if=\"[[!domainService]]\">\n          <h1>Select a service to see the description</h1>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[domainService]]\">\n          <template is=\"dom-if\" if=\"[[!_description]]\">\n            <h1>No description is available</h1>\n          </template>\n          <template is=\"dom-if\" if=\"[[_description]]\">\n            <h3>[[_description]]</h3>\n\n            <table class=\"attributes\">\n              <tr>\n                <th>Parameter</th>\n                <th>Description</th>\n                <th>Example</th>\n              </tr>\n              <template is=\"dom-if\" if=\"[[!_attributes.length]]\">\n                <tr>\n                  <td colspan=\"3\">This service takes no parameters.</td>\n                </tr>\n              </template>\n              <template is=\"dom-repeat\" items=\"[[_attributes]]\" as=\"attribute\">\n                <tr>\n                  <td><pre>[[attribute.key]]</pre></td>\n                  <td>[[attribute.description]]</td>\n                  <td>[[attribute.example]]</td>\n                </tr>\n              </template>\n            </table>\n\n            <template is=\"dom-if\" if=\"[[_attributes.length]]\">\n              <mwc-button on-click=\"_fillExampleData\">\n                Fill Example Data\n              </mwc-button>\n            </template>\n          </template>\n        </template>\n      </div>\n    "]);

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











var ERROR_SENTINEL = {};

var HaPanelDevService =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaPanelDevService, _PolymerElement);

  function HaPanelDevService() {
    _classCallCheck(this, HaPanelDevService);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelDevService).apply(this, arguments));
  }

  _createClass(HaPanelDevService, [{
    key: "_domainServiceChanged",
    value: function _domainServiceChanged() {
      this.serviceData = "";
    }
  }, {
    key: "_computeAttributesArray",
    value: function _computeAttributesArray(hass, domain, service) {
      var serviceDomains = hass.services;
      if (!(domain in serviceDomains)) return [];
      if (!(service in serviceDomains[domain])) return [];
      var fields = serviceDomains[domain][service].fields;
      return Object.keys(fields).map(function (field) {
        return Object.assign({
          key: field
        }, fields[field]);
      });
    }
  }, {
    key: "_computeDescription",
    value: function _computeDescription(hass, domain, service) {
      var serviceDomains = hass.services;
      if (!(domain in serviceDomains)) return undefined;
      if (!(service in serviceDomains[domain])) return undefined;
      return serviceDomains[domain][service].description;
    }
  }, {
    key: "_computeServicedataKey",
    value: function _computeServicedataKey(domainService) {
      return "panel-dev-service-state-servicedata.".concat(domainService);
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(domainService) {
      return domainService.split(".", 1)[0];
    }
  }, {
    key: "_computeService",
    value: function _computeService(domainService) {
      return domainService.split(".", 2)[1] || null;
    }
  }, {
    key: "_computeParsedServiceData",
    value: function _computeParsedServiceData(serviceData) {
      try {
        return serviceData.trim() ? js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeLoad(serviceData) : {};
      } catch (err) {
        return ERROR_SENTINEL;
      }
    }
  }, {
    key: "_computeValidJSON",
    value: function _computeValidJSON(parsedJSON) {
      return parsedJSON !== ERROR_SENTINEL;
    }
  }, {
    key: "_computeHasEntity",
    value: function _computeHasEntity(attributes) {
      return attributes.some(function (attr) {
        return attr.key === "entity_id";
      });
    }
  }, {
    key: "_computeEntityValue",
    value: function _computeEntityValue(parsedJSON) {
      return parsedJSON === ERROR_SENTINEL ? "" : parsedJSON.entity_id;
    }
  }, {
    key: "_computeEntityDomainFilter",
    value: function _computeEntityDomainFilter(domain) {
      return _data_entity__WEBPACK_IMPORTED_MODULE_4__["ENTITY_COMPONENT_DOMAINS"].includes(domain) ? domain : null;
    }
  }, {
    key: "_callService",
    value: function _callService() {
      if (this.parsedJSON === ERROR_SENTINEL) {
        // eslint-disable-next-line
        alert("Error parsing YAML: ".concat(this.serviceData));
        return;
      }

      this.hass.callService(this._domain, this._service, this.parsedJSON);
    }
  }, {
    key: "_fillExampleData",
    value: function _fillExampleData() {
      var example = {};

      this._attributes.forEach(function (attribute) {
        if (attribute.example) {
          var value = "";

          try {
            value = js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeLoad(attribute.example);
          } catch (err) {
            value = attribute.example;
          }

          example[attribute.key] = value;
        }
      });

      this.serviceData = js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeDump(example);
    }
  }, {
    key: "_entityPicked",
    value: function _entityPicked(ev) {
      this.serviceData = js_yaml__WEBPACK_IMPORTED_MODULE_3___default.a.safeDump(Object.assign({}, this.parsedJSON, {
        entity_id: ev.target.value
      }));
    }
  }, {
    key: "_yamlChanged",
    value: function _yamlChanged(ev) {
      this.serviceData = ev.detail.value;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        domainService: {
          type: String,
          observer: "_domainServiceChanged"
        },
        _domain: {
          type: String,
          computed: "_computeDomain(domainService)"
        },
        _service: {
          type: String,
          computed: "_computeService(domainService)"
        },
        serviceData: {
          type: String,
          value: ""
        },
        parsedJSON: {
          type: Object,
          computed: "_computeParsedServiceData(serviceData)"
        },
        validJSON: {
          type: Boolean,
          computed: "_computeValidJSON(parsedJSON)"
        },
        _attributes: {
          type: Array,
          computed: "_computeAttributesArray(hass, _domain, _service)"
        },
        _description: {
          type: String,
          computed: "_computeDescription(hass, _domain, _service)"
        }
      };
    }
  }]);

  return HaPanelDevService;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("developer-tools-service", HaPanelDevService);

/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/*! exports provided: loadCodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCodeMirror", function() { return loadCodeMirror; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var loaded;
var loadCodeMirror = function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (!loaded) {
            loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
        }
        return [2 /*return*/, loaded];
    });
}); };


/***/ }),

/***/ "./src/util/app-localstorage-document.js":
/*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* Forked because it contained an import.meta which webpack doesn't support. */

/* eslint-disable */

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */

Object(_polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: "app-localstorage-document",
  behaviors: [_polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__["AppStorageBehavior"]],
  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: {
      type: String,
      notify: true
    },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: {
      type: Boolean,
      value: false
    },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: {
      type: Object,
      computed: "__computeStorage(sessionOnly)"
    }
  },
  observers: ["__storageSourceChanged(storage, key)"],
  attached: function attached() {
    this.listen(window, "storage", "__onStorage");
    this.listen(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },
  detached: function detached() {
    this.unlisten(window, "storage", "__onStorage");
    this.unlisten(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function saveValue(key) {
    try {
      this.__setStorageValue(
      /*{@type if (key ty){String}}*/
      key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key =
    /** @type {String} */
    key;
    return Promise.resolve();
  },
  reset: function reset() {
    this.key = null;
    this.data = this.zeroValue;
  },
  destroy: function destroy() {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },
  getStoredValue: function getStoredValue(path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, {
            data: value
          });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },
  setStoredValue: function setStoredValue(path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire("app-local-storage-changed", this, {
        node: window.top
      });
    }

    return Promise.resolve(value);
  },
  __computeStorage: function __computeStorage(sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },
  __storageSourceChanged: function __storageSourceChanged(storage, key) {
    this._initializeStoredValue();
  },
  __onStorage: function __onStorage(event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", this.__parseValueFromStorage());
    });
  },
  __onAppLocalStorageChanged: function __onAppLocalStorageChanged(event) {
    if (event.detail === this || event.detail.key !== this.key || event.detail.storage !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", event.detail.data);
    });
  },
  __parseValueFromStorage: function __parseValueFromStorage() {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error("Failed to parse value from storage for", this.key);
    }
  },
  __setStorageValue: function __setStorageValue(key, value) {
    if (typeof value === "undefined") value = null;
    this.storage.setItem(key, JSON.stringify(value));
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL3NlcnZpY2UvZGV2ZWxvcGVyLXRvb2xzLXNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9jb2RlbWlycm9yLm9uZGVtYW5kLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCB0eXBlIEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyA9IChlbnRpdHlJZDogSGFzc0VudGl0eSkgPT4gYm9vbGVhbjtcblxuY29uc3Qgcm93UmVuZGVyZXIgPSAoXG4gIHJvb3Q6IEhUTUxFbGVtZW50LFxuICBfb3duZXIsXG4gIG1vZGVsOiB7IGl0ZW06IEhhc3NFbnRpdHkgfVxuKSA9PiB7XG4gIGlmICghcm9vdC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHJvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogLTEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW2l0ZW1dXVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L3N0YXRlLWJhZGdlPlxuICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+W1tfY29tcHV0ZVN0YXRlTmFtZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPGRpdiBzZWNvbmRhcnk+W1tpdGVtLmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgYDtcbiAgfVxuXG4gIHJvb3QucXVlcnlTZWxlY3RvcihcInN0YXRlLWJhZGdlXCIpIS5zdGF0ZU9iaiA9IG1vZGVsLml0ZW07XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpIS50ZXh0Q29udGVudCA9IGNvbXB1dGVTdGF0ZU5hbWUobW9kZWwuaXRlbSk7XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIltzZWNvbmRhcnldXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0uZW50aXR5X2lkO1xufTtcblxuY2xhc3MgSGFFbnRpdHlQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYWxsb3ctY3VzdG9tLWVudGl0eVwiIH0pXG4gIHB1YmxpYyBhbGxvd0N1c3RvbUVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcImRvbWFpbi1maWx0ZXJcIiB9KSBwdWJsaWMgZG9tYWluRmlsdGVyPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXR5RmlsdGVyPzogSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX29wZW5lZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2dldFN0YXRlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgaGFzczogdGhpc1tcImhhc3NcIl0sXG4gICAgICBkb21haW5GaWx0ZXI6IHRoaXNbXCJkb21haW5GaWx0ZXJcIl0sXG4gICAgICBlbnRpdHlGaWx0ZXI6IHRoaXNbXCJlbnRpdHlGaWx0ZXJcIl1cbiAgICApID0+IHtcbiAgICAgIGxldCBzdGF0ZXM6IEhhc3NFbnRpdHlbXSA9IFtdO1xuXG4gICAgICBpZiAoIWhhc3MpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgbGV0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgICAgaWYgKGRvbWFpbkZpbHRlcikge1xuICAgICAgICBlbnRpdHlJZHMgPSBlbnRpdHlJZHMuZmlsdGVyKFxuICAgICAgICAgIChlaWQpID0+IGVpZC5zdWJzdHIoMCwgZWlkLmluZGV4T2YoXCIuXCIpKSA9PT0gZG9tYWluRmlsdGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlcyA9IGVudGl0eUlkcy5zb3J0KCkubWFwKChrZXkpID0+IGhhc3MhLnN0YXRlc1trZXldKTtcblxuICAgICAgaWYgKGVudGl0eUZpbHRlcikge1xuICAgICAgICBzdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKFxuICAgICAgICAgIChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIC8vIFdlIGFsd2F5cyB3YW50IHRvIGluY2x1ZGUgdGhlIGVudGl0eSBvZiB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgc3RhdGVPYmouZW50aXR5X2lkID09PSB0aGlzLnZhbHVlIHx8IGVudGl0eUZpbHRlciEoc3RhdGVPYmopXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hhc3MgPSB0aGlzLmhhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuX2dldFN0YXRlcyhcbiAgICAgIHRoaXMuX2hhc3MsXG4gICAgICB0aGlzLmRvbWFpbkZpbHRlcixcbiAgICAgIHRoaXMuZW50aXR5RmlsdGVyXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgLml0ZW1zPSR7c3RhdGVzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLmFsbG93Q3VzdG9tVmFsdWU9JHt0aGlzLmFsbG93Q3VzdG9tRW50aXR5fVxuICAgICAgICAucmVuZGVyZXI9JHtyb3dSZW5kZXJlcn1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5hdXRvZm9jdXM9JHt0aGlzLmF1dG9mb2N1c31cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsID09PSB1bmRlZmluZWQgJiYgdGhpcy5faGFzc1xuICAgICAgICAgICAgPyB0aGlzLl9oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5lbnRpdHlcIilcbiAgICAgICAgICAgIDogdGhpcy5sYWJlbH1cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy52YWx1ZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgICAgbm8tcmlwcGxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtzdGF0ZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9vcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZ2dsZVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgdGhpcy5fb3BlbmVkID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS1waWNrZXJcIiwgSGFFbnRpdHlQaWNrZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZW50aXR5LXBpY2tlclwiOiBIYUVudGl0eVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgbG9hZENvZGVNaXJyb3IgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7XG4gIFVwZGF0aW5nRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gXCJjb2RlbWlycm9yXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZWRpdG9yLXNhdmVcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29kZS1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIYUNvZGVFZGl0b3IgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBwdWJsaWMgY29kZW1pcnJvcj86IEVkaXRvcjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG1vZGU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhdXRvZm9jdXMgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHJ0bCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZXJyb3IgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdmFsdWUgPSBcIlwiO1xuXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29kZW1pcnJvciA/IHRoaXMuY29kZW1pcnJvci5nZXRWYWx1ZSgpIDogdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc0NvbW1lbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuLmNtLWNvbW1lbnRcIikgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNvZGVtaXJyb3IucmVmcmVzaCgpO1xuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIm1vZGVcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJtb2RlXCIsIHRoaXMubW9kZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiYXV0b2ZvY3VzXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiYXV0b2ZvY3VzXCIsIHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX3ZhbHVlXCIpICYmIHRoaXMuX3ZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0VmFsdWUodGhpcy5fdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInJ0bFwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcImd1dHRlcnNcIiwgdGhpcy5fY2FsY0d1dHRlcnMoKSk7XG4gICAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJlcnJvclwiKSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiZXJyb3Itc3RhdGVcIiwgdGhpcy5lcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBsb2FkZWQgPSBhd2FpdCBsb2FkQ29kZU1pcnJvcigpO1xuXG4gICAgY29uc3QgY29kZU1pcnJvciA9IGxvYWRlZC5jb2RlTWlycm9yO1xuXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSk7XG5cbiAgICBzaGFkb3dSb290IS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgJHtsb2FkZWQuY29kZU1pcnJvckNzc31cbiAgICAgIC5Db2RlTWlycm9yIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb2RlLW1pcnJvci1oZWlnaHQsIGF1dG8pO1xuICAgICAgICBkaXJlY3Rpb246IHZhcigtLWNvZGUtbWlycm9yLWRpcmVjdGlvbiwgbHRyKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLXNjcm9sbCB7XG4gICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLW1heC1oZWlnaHQsIC0tY29kZS1taXJyb3ItaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGJvcmRlci1yaWdodDtcbiAgICAgIH1cbiAgICAgIDpob3N0KC5lcnJvci1zdGF0ZSkgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3Itc3RhdGUtY29sb3IsIHJlZCk7XG4gICAgICB9XG4gICAgICAuQ29kZU1pcnJvci1mb2N1c2VkIC5Db2RlTWlycm9yLWd1dHRlcnMge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWxpbmVudW1iZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIC5ydGwgLkNvZGVNaXJyb3ItdnNjcm9sbGJhciB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAucnRsLWd1dHRlciB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+YDtcblxuICAgIHRoaXMuY29kZW1pcnJvciA9IGNvZGVNaXJyb3Ioc2hhZG93Um9vdCwge1xuICAgICAgdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgbGluZU51bWJlcnM6IHRydWUsXG4gICAgICB0YWJTaXplOiAyLFxuICAgICAgbW9kZTogdGhpcy5tb2RlLFxuICAgICAgYXV0b2ZvY3VzOiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UsXG4gICAgICB2aWV3cG9ydE1hcmdpbjogSW5maW5pdHksXG4gICAgICBleHRyYUtleXM6IHtcbiAgICAgICAgVGFiOiBcImluZGVudE1vcmVcIixcbiAgICAgICAgXCJTaGlmdC1UYWJcIjogXCJpbmRlbnRMZXNzXCIsXG4gICAgICB9LFxuICAgICAgZ3V0dGVyczogdGhpcy5fY2FsY0d1dHRlcnMoKSxcbiAgICB9KTtcbiAgICB0aGlzLl9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTtcbiAgICB0aGlzLmNvZGVtaXJyb3IhLm9uKFwiY2hhbmdlc1wiLCAoKSA9PiB0aGlzLl9vbkNoYW5nZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgPT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLl92YWx1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhbGNHdXR0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5ydGwgPyBbXCJydGwtZ3V0dGVyXCIsIFwiQ29kZU1pcnJvci1saW5lbnVtYmVyc1wiXSA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2Nyb2xsQmFyRGlyZWN0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvZGVtaXJyb3IpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5nZXRXcmFwcGVyRWxlbWVudCgpLmNsYXNzTGlzdC50b2dnbGUoXCJydGxcIiwgdGhpcy5ydGwpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY29kZS1lZGl0b3JcIjogSGFDb2RlRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImV4cG9ydCBjb25zdCBVTkFWQUlMQUJMRSA9IFwidW5hdmFpbGFibGVcIjtcblxuZXhwb3J0IGNvbnN0IEVOVElUWV9DT01QT05FTlRfRE9NQUlOUyA9IFtcbiAgXCJhaXJfcXVhbGl0eVwiLFxuICBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIixcbiAgXCJhbGVydFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJiaW5hcnlfc2Vuc29yXCIsXG4gIFwiY2FsZW5kYXJcIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjb3VudGVyXCIsXG4gIFwiY292ZXJcIixcbiAgXCJkb21pbm9zXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ2VvX2xvY2F0aW9uXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW1hZ2VfcHJvY2Vzc2luZ1wiLFxuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtYWlsYm94XCIsXG4gIFwibWVkaWFfcGxheWVyXCIsXG4gIFwicGVyc29uXCIsXG4gIFwicGxhbnRcIixcbiAgXCJyZW1lbWJlcl90aGVfbWlsa1wiLFxuICBcInJlbW90ZVwiLFxuICBcInNjZW5lXCIsXG4gIFwic2NyaXB0XCIsXG4gIFwic2Vuc29yXCIsXG4gIFwic3dpdGNoXCIsXG4gIFwidGltZXJcIixcbiAgXCJ1dGlsaXR5X21ldGVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2VhdGhlclwiLFxuICBcIndpbmtcIixcbiAgXCJ6aGFcIixcbiAgXCJ6d2F2ZVwiLFxuXTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB5YW1sIGZyb20gXCJqcy15YW1sXCI7XG5cbmltcG9ydCB7IEVOVElUWV9DT01QT05FTlRfRE9NQUlOUyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi91dGlsL2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcIjtcblxuY29uc3QgRVJST1JfU0VOVElORUwgPSB7fTtcbmNsYXNzIEhhUGFuZWxEZXZTZXJ2aWNlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhLWZvcm0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyB0aCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdHI6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXJvdy1iYWNrZ3JvdW5kLWNvbG9yLCAjZWVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdHRyaWJ1dGVzIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtcm93LWFsdGVybmF0aXZlLWJhY2tncm91bmQtY29sb3IsICNlZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMgdGQ6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCB7XG4gICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFxuICAgICAgICBrZXk9XCJwYW5lbC1kZXYtc2VydmljZS1zdGF0ZS1kb21haW4tc2VydmljZVwiXG4gICAgICAgIGRhdGE9XCJ7e2RvbWFpblNlcnZpY2V9fVwiXG4gICAgICA+XG4gICAgICA8L2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+XG4gICAgICA8YXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFxuICAgICAgICBrZXk9XCJbW19jb21wdXRlU2VydmljZWRhdGFLZXkoZG9tYWluU2VydmljZSldXVwiXG4gICAgICAgIGRhdGE9XCJ7e3NlcnZpY2VEYXRhfX1cIlxuICAgICAgPlxuICAgICAgPC9hcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgc2VydmljZSBkZXYgdG9vbCBhbGxvd3MgeW91IHRvIGNhbGwgYW55IGF2YWlsYWJsZSBzZXJ2aWNlIGluIEhvbWVcbiAgICAgICAgICBBc3Npc3RhbnQuXG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGEtZm9ybVwiPlxuICAgICAgICAgIDxoYS1zZXJ2aWNlLXBpY2tlclxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tkb21haW5TZXJ2aWNlfX1cIlxuICAgICAgICAgID48L2hhLXNlcnZpY2UtcGlja2VyPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29tcHV0ZUhhc0VudGl0eShfYXR0cmlidXRlcyldXVwiPlxuICAgICAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJbW19jb21wdXRlRW50aXR5VmFsdWUocGFyc2VkSlNPTildXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIl9lbnRpdHlQaWNrZWRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgICAgZG9tYWluLWZpbHRlcj1cIltbX2NvbXB1dGVFbnRpdHlEb21haW5GaWx0ZXIoX2RvbWFpbildXVwiXG4gICAgICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgICAgID48L2hhLWVudGl0eS1waWNrZXI+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8cD5TZXJ2aWNlIERhdGEgKFlBTUwsIG9wdGlvbmFsKTwvcD5cbiAgICAgICAgICA8aGEtY29kZS1lZGl0b3JcbiAgICAgICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgICAgIHZhbHVlPVwiW1tzZXJ2aWNlRGF0YV1dXCJcbiAgICAgICAgICAgIGVycm9yPVwiW1shdmFsaWRKU09OXV1cIlxuICAgICAgICAgICAgb24tdmFsdWUtY2hhbmdlZD1cIl95YW1sQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtY29kZS1lZGl0b3I+XG4gICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIiByYWlzZWQgZGlzYWJsZWQ9XCJbWyF2YWxpZEpTT05dXVwiPlxuICAgICAgICAgICAgQ2FsbCBTZXJ2aWNlXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRvbWFpblNlcnZpY2VdXVwiPlxuICAgICAgICAgIDxoMT5TZWxlY3QgYSBzZXJ2aWNlIHRvIHNlZSB0aGUgZGVzY3JpcHRpb248L2gxPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkb21haW5TZXJ2aWNlXV1cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9kZXNjcmlwdGlvbl1dXCI+XG4gICAgICAgICAgICA8aDE+Tm8gZGVzY3JpcHRpb24gaXMgYXZhaWxhYmxlPC9oMT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZGVzY3JpcHRpb25dXVwiPlxuICAgICAgICAgICAgPGgzPltbX2Rlc2NyaXB0aW9uXV08L2gzPlxuXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJhdHRyaWJ1dGVzXCI+XG4gICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+UGFyYW1ldGVyPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgIDx0aD5FeGFtcGxlPC90aD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfYXR0cmlidXRlcy5sZW5ndGhdXVwiPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlRoaXMgc2VydmljZSB0YWtlcyBubyBwYXJhbWV0ZXJzLjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfYXR0cmlidXRlc11dXCIgYXM9XCJhdHRyaWJ1dGVcIj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQ+PHByZT5bW2F0dHJpYnV0ZS5rZXldXTwvcHJlPjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGUuZGVzY3JpcHRpb25dXTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+W1thdHRyaWJ1dGUuZXhhbXBsZV1dPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19hdHRyaWJ1dGVzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2ZpbGxFeGFtcGxlRGF0YVwiPlxuICAgICAgICAgICAgICAgIEZpbGwgRXhhbXBsZSBEYXRhXG4gICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZG9tYWluU2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcIl9kb21haW5TZXJ2aWNlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX2RvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKGRvbWFpblNlcnZpY2UpXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlU2VydmljZShkb21haW5TZXJ2aWNlKVwiLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZURhdGE6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZEpTT046IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVBhcnNlZFNlcnZpY2VEYXRhKHNlcnZpY2VEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgdmFsaWRKU09OOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlVmFsaWRKU09OKHBhcnNlZEpTT04pXCIsXG4gICAgICB9LFxuXG4gICAgICBfYXR0cmlidXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVBdHRyaWJ1dGVzQXJyYXkoaGFzcywgX2RvbWFpbiwgX3NlcnZpY2UpXCIsXG4gICAgICB9LFxuXG4gICAgICBfZGVzY3JpcHRpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURlc2NyaXB0aW9uKGhhc3MsIF9kb21haW4sIF9zZXJ2aWNlKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2RvbWFpblNlcnZpY2VDaGFuZ2VkKCkge1xuICAgIHRoaXMuc2VydmljZURhdGEgPSBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVBdHRyaWJ1dGVzQXJyYXkoaGFzcywgZG9tYWluLCBzZXJ2aWNlKSB7XG4gICAgY29uc3Qgc2VydmljZURvbWFpbnMgPSBoYXNzLnNlcnZpY2VzO1xuICAgIGlmICghKGRvbWFpbiBpbiBzZXJ2aWNlRG9tYWlucykpIHJldHVybiBbXTtcbiAgICBpZiAoIShzZXJ2aWNlIGluIHNlcnZpY2VEb21haW5zW2RvbWFpbl0pKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBmaWVsZHMgPSBzZXJ2aWNlRG9tYWluc1tkb21haW5dW3NlcnZpY2VdLmZpZWxkcztcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZmllbGRzKS5tYXAoZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgIHJldHVybiB7IGtleTogZmllbGQsIC4uLmZpZWxkc1tmaWVsZF0gfTtcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlRGVzY3JpcHRpb24oaGFzcywgZG9tYWluLCBzZXJ2aWNlKSB7XG4gICAgY29uc3Qgc2VydmljZURvbWFpbnMgPSBoYXNzLnNlcnZpY2VzO1xuICAgIGlmICghKGRvbWFpbiBpbiBzZXJ2aWNlRG9tYWlucykpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgaWYgKCEoc2VydmljZSBpbiBzZXJ2aWNlRG9tYWluc1tkb21haW5dKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc2VydmljZURvbWFpbnNbZG9tYWluXVtzZXJ2aWNlXS5kZXNjcmlwdGlvbjtcbiAgfVxuXG4gIF9jb21wdXRlU2VydmljZWRhdGFLZXkoZG9tYWluU2VydmljZSkge1xuICAgIHJldHVybiBgcGFuZWwtZGV2LXNlcnZpY2Utc3RhdGUtc2VydmljZWRhdGEuJHtkb21haW5TZXJ2aWNlfWA7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihkb21haW5TZXJ2aWNlKSB7XG4gICAgcmV0dXJuIGRvbWFpblNlcnZpY2Uuc3BsaXQoXCIuXCIsIDEpWzBdO1xuICB9XG5cbiAgX2NvbXB1dGVTZXJ2aWNlKGRvbWFpblNlcnZpY2UpIHtcbiAgICByZXR1cm4gZG9tYWluU2VydmljZS5zcGxpdChcIi5cIiwgMilbMV0gfHwgbnVsbDtcbiAgfVxuXG4gIF9jb21wdXRlUGFyc2VkU2VydmljZURhdGEoc2VydmljZURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHNlcnZpY2VEYXRhLnRyaW0oKSA/IHlhbWwuc2FmZUxvYWQoc2VydmljZURhdGEpIDoge307XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gRVJST1JfU0VOVElORUw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OICE9PSBFUlJPUl9TRU5USU5FTDtcbiAgfVxuXG4gIF9jb21wdXRlSGFzRW50aXR5KGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlcy5zb21lKChhdHRyKSA9PiBhdHRyLmtleSA9PT0gXCJlbnRpdHlfaWRcIik7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eVZhbHVlKHBhcnNlZEpTT04pIHtcbiAgICByZXR1cm4gcGFyc2VkSlNPTiA9PT0gRVJST1JfU0VOVElORUwgPyBcIlwiIDogcGFyc2VkSlNPTi5lbnRpdHlfaWQ7XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eURvbWFpbkZpbHRlcihkb21haW4pIHtcbiAgICByZXR1cm4gRU5USVRZX0NPTVBPTkVOVF9ET01BSU5TLmluY2x1ZGVzKGRvbWFpbikgPyBkb21haW4gOiBudWxsO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKCkge1xuICAgIGlmICh0aGlzLnBhcnNlZEpTT04gPT09IEVSUk9SX1NFTlRJTkVMKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGFsZXJ0KGBFcnJvciBwYXJzaW5nIFlBTUw6ICR7dGhpcy5zZXJ2aWNlRGF0YX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UodGhpcy5fZG9tYWluLCB0aGlzLl9zZXJ2aWNlLCB0aGlzLnBhcnNlZEpTT04pO1xuICB9XG5cbiAgX2ZpbGxFeGFtcGxlRGF0YSgpIHtcbiAgICBjb25zdCBleGFtcGxlID0ge307XG4gICAgdGhpcy5fYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGlmIChhdHRyaWJ1dGUuZXhhbXBsZSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhbHVlID0geWFtbC5zYWZlTG9hZChhdHRyaWJ1dGUuZXhhbXBsZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHZhbHVlID0gYXR0cmlidXRlLmV4YW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgZXhhbXBsZVthdHRyaWJ1dGUua2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZURhdGEgPSB5YW1sLnNhZmVEdW1wKGV4YW1wbGUpO1xuICB9XG5cbiAgX2VudGl0eVBpY2tlZChldikge1xuICAgIHRoaXMuc2VydmljZURhdGEgPSB5YW1sLnNhZmVEdW1wKHtcbiAgICAgIC4uLnRoaXMucGFyc2VkSlNPTixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgX3lhbWxDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5zZXJ2aWNlRGF0YSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJkZXZlbG9wZXItdG9vbHMtc2VydmljZVwiLCBIYVBhbmVsRGV2U2VydmljZSk7XG4iLCJpbnRlcmZhY2UgTG9hZGVkQ29kZU1pcnJvciB7XG4gIGNvZGVNaXJyb3I6IGFueTtcbiAgY29kZU1pcnJvckNzczogYW55O1xufVxuXG5sZXQgbG9hZGVkOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+O1xuXG5leHBvcnQgY29uc3QgbG9hZENvZGVNaXJyb3IgPSBhc3luYyAoKTogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPiA9PiB7XG4gIGlmICghbG9hZGVkKSB7XG4gICAgbG9hZGVkID0gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29kZW1pcnJvclwiICovIFwiLi9jb2RlbWlycm9yXCIpO1xuICB9XG4gIHJldHVybiBsb2FkZWQ7XG59O1xuIiwiLyogRm9ya2VkIGJlY2F1c2UgaXQgY29udGFpbmVkIGFuIGltcG9ydC5tZXRhIHdoaWNoIHdlYnBhY2sgZG9lc24ndCBzdXBwb3J0LiAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgeyBBcHBTdG9yYWdlQmVoYXZpb3IgfSBmcm9tIFwiQHBvbHltZXIvYXBwLXN0b3JhZ2UvYXBwLXN0b3JhZ2UtYmVoYXZpb3JcIjtcbmltcG9ydCB7IFBvbHltZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm5cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3lcIjtcblxuLyoqXG4gKiBhcHAtbG9jYWxzdG9yYWdlLWRvY3VtZW50IHN5bmNocm9uaXplcyBzdG9yYWdlIGJldHdlZW4gYW4gaW4tbWVtb3J5XG4gKiB2YWx1ZSBhbmQgYSBsb2NhdGlvbiBpbiB0aGUgYnJvd3NlcidzIGxvY2FsU3RvcmFnZSBzeXN0ZW0uXG4gKlxuICogbG9jYWxTdG9yYWdlIGlzIGEgc2ltcGxlIGFuZCB3aWRlbHkgc3VwcG9ydGVkIHN0b3JhZ2UgQVBJIHRoYXQgcHJvdmlkZXMgYm90aFxuICogcGVybWFuZW50IGFuZCBzZXNzaW9uLWJhc2VkIHN0b3JhZ2Ugb3B0aW9ucy4gVXNpbmcgYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudFxuICogeW91IGNhbiBlYXNpbHkgaW50ZWdyYXRlIGxvY2FsU3RvcmFnZSBpbnRvIHlvdXIgYXBwIHZpYSBub3JtYWwgUG9seW1lclxuICogZGF0YWJpbmRpbmcuXG4gKlxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBpcyB0aGUgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIGFuIGVsZW1lbnRcbiAqIHRoYXQgdXNlcyBgQXBwU3RvcmFnZUJlaGF2aW9yYC4gUmVhZGluZyBpdHMgY29kZSBpcyBhIGdvb2Qgd2F5IHRvIGdldFxuICogc3RhcnRlZCB3cml0aW5nIHlvdXIgb3duIHN0b3JhZ2UgZWxlbWVudC5cbiAqXG4gKiBFeGFtcGxlIHVzZTpcbiAqXG4gKiAgICAgPHBhcGVyLWlucHV0IHZhbHVlPVwie3tzZWFyY2h9fVwiPjwvcGFwZXItaW5wdXQ+XG4gKiAgICAgPGFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQga2V5PVwic2VhcmNoXCIgZGF0YT1cInt7c2VhcmNofX1cIj5cbiAqICAgICA8L2FwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnQ+XG4gKlxuICogYXBwLWxvY2Fsc3RvcmFnZS1kb2N1bWVudCBhdXRvbWF0aWNhbGx5IHN5bmNocm9uaXplcyBjaGFuZ2VzIHRvIHRoZVxuICogc2FtZSBrZXkgYWNyb3NzIG11bHRpcGxlIHRhYnMuXG4gKlxuICogT25seSBzdXBwb3J0cyBzdG9yaW5nIEpTT04tc2VyaWFsaXphYmxlIHZhbHVlcy5cbiAqL1xuUG9seW1lcih7XG4gIGlzOiBcImFwcC1sb2NhbHN0b3JhZ2UtZG9jdW1lbnRcIixcbiAgYmVoYXZpb3JzOiBbQXBwU3RvcmFnZUJlaGF2aW9yXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbG9naWNhbCBsb2NhdGlvbiB0byBzdG9yZSB0aGUgZGF0YS5cbiAgICAgKlxuICAgICAqIEB0eXBle1N0cmluZ31cbiAgICAgKi9cbiAgICBrZXk6IHsgdHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBkYXRhIHdpbGwgYXV0b21hdGljYWxseSBiZSBjbGVhcmVkIGZyb20gc3RvcmFnZSB3aGVuXG4gICAgICogdGhlIHBhZ2Ugc2Vzc2lvbiBlbmRzIChpLmUuIHdoZW4gdGhlIHVzZXIgaGFzIG5hdmlnYXRlZCBhd2F5IGZyb21cbiAgICAgKiB0aGUgcGFnZSkuXG4gICAgICovXG4gICAgc2Vzc2lvbk9ubHk6IHsgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlIH0sXG5cbiAgICAvKipcbiAgICAgKiBFaXRoZXIgYHdpbmRvdy5sb2NhbFN0b3JhZ2VgIG9yIGB3aW5kb3cuc2Vzc2lvblN0b3JhZ2VgLCBkZXBlbmRpbmcgb25cbiAgICAgKiBgdGhpcy5zZXNzaW9uT25seWAuXG4gICAgICovXG4gICAgc3RvcmFnZTogeyB0eXBlOiBPYmplY3QsIGNvbXB1dGVkOiBcIl9fY29tcHV0ZVN0b3JhZ2Uoc2Vzc2lvbk9ubHkpXCIgfSxcbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcIl9fc3RvcmFnZVNvdXJjZUNoYW5nZWQoc3RvcmFnZSwga2V5KVwiXSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5saXN0ZW4od2luZG93LCBcInN0b3JhZ2VcIiwgXCJfX29uU3RvcmFnZVwiKTtcbiAgICB0aGlzLmxpc3RlbihcbiAgICAgIHdpbmRvdy50b3AsXG4gICAgICBcImFwcC1sb2NhbC1zdG9yYWdlLWNoYW5nZWRcIixcbiAgICAgIFwiX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWRcIlxuICAgICk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudW5saXN0ZW4od2luZG93LCBcInN0b3JhZ2VcIiwgXCJfX29uU3RvcmFnZVwiKTtcbiAgICB0aGlzLnVubGlzdGVuKFxuICAgICAgd2luZG93LnRvcCxcbiAgICAgIFwiYXBwLWxvY2FsLXN0b3JhZ2UtY2hhbmdlZFwiLFxuICAgICAgXCJfX29uQXBwTG9jYWxTdG9yYWdlQ2hhbmdlZFwiXG4gICAgKTtcbiAgfSxcblxuICBnZXQgaXNOZXcoKSB7XG4gICAgcmV0dXJuICF0aGlzLmtleTtcbiAgfSxcblxuICAvKipcbiAgICogU3RvcmVzIGEgdmFsdWUgYXQgdGhlIGdpdmVuIGtleSwgYW5kIGlmIHN1Y2Nlc3NmdWwsIHVwZGF0ZXMgdGhpcy5rZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBuZXcga2V5IHRvIHVzZS5cbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIHNhdmVWYWx1ZTogZnVuY3Rpb24oa2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX19zZXRTdG9yYWdlVmFsdWUoLyp7QHR5cGUgaWYgKGtleSB0eSl7U3RyaW5nfX0qLyBrZXksIHRoaXMuZGF0YSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgIH1cblxuICAgIHRoaXMua2V5ID0gLyoqIEB0eXBlIHtTdHJpbmd9ICovIChrZXkpO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gdGhpcy56ZXJvVmFsdWU7XG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMua2V5KTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9LFxuXG4gIGdldFN0b3JlZFZhbHVlOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgaWYgKHRoaXMua2V5ICE9IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5fX3BhcnNlVmFsdWVGcm9tU3RvcmFnZSgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLmdldChwYXRoLCB7IGRhdGE6IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgfSxcblxuICBzZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24ocGF0aCwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5rZXkgIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fX3NldFN0b3JhZ2VWYWx1ZSh0aGlzLmtleSwgdGhpcy5kYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpcmUoXCJhcHAtbG9jYWwtc3RvcmFnZS1jaGFuZ2VkXCIsIHRoaXMsIHsgbm9kZTogd2luZG93LnRvcCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKTtcbiAgfSxcblxuICBfX2NvbXB1dGVTdG9yYWdlOiBmdW5jdGlvbihzZXNzaW9uT25seSkge1xuICAgIHJldHVybiBzZXNzaW9uT25seSA/IHdpbmRvdy5zZXNzaW9uU3RvcmFnZSA6IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0sXG5cbiAgX19zdG9yYWdlU291cmNlQ2hhbmdlZDogZnVuY3Rpb24oc3RvcmFnZSwga2V5KSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZVN0b3JlZFZhbHVlKCk7XG4gIH0sXG5cbiAgX19vblN0b3JhZ2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSAhPT0gdGhpcy5rZXkgfHwgZXZlbnQuc3RvcmFnZUFyZWEgIT09IHRoaXMuc3RvcmFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3luY1RvTWVtb3J5KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5zZXQoXCJkYXRhXCIsIHRoaXMuX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2UoKSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX19vbkFwcExvY2FsU3RvcmFnZUNoYW5nZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKFxuICAgICAgZXZlbnQuZGV0YWlsID09PSB0aGlzIHx8XG4gICAgICBldmVudC5kZXRhaWwua2V5ICE9PSB0aGlzLmtleSB8fFxuICAgICAgZXZlbnQuZGV0YWlsLnN0b3JhZ2UgIT09IHRoaXMuc3RvcmFnZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN5bmNUb01lbW9yeShmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc2V0KFwiZGF0YVwiLCBldmVudC5kZXRhaWwuZGF0YSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgX19wYXJzZVZhbHVlRnJvbVN0b3JhZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gcGFyc2UgdmFsdWUgZnJvbSBzdG9yYWdlIGZvclwiLCB0aGlzLmtleSk7XG4gICAgfVxuICB9LFxuXG4gIF9fc2V0U3RvcmFnZVZhbHVlOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikgdmFsdWUgPSBudWxsO1xuICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVlBO0FBSUE7QUFLQTtBQUNBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQXdHQTtBQXJHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFlQTtBQXFCQTtBQVlBO0FBbENBO0FBQ0E7QUFVQTtBQWFBO0FBY0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBV0E7OztBQUFBO0FBaEpBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXVJQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNQTtBQUNBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQWtJQTtBQWhJQTtBQUlBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFDQTs7O0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFySUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBd0lBO0FBQUE7QUF4SUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUtBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBZUE7QUFaQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTs7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBbUJBO0FBQ0E7QUFwQkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBaEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUEyTUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXZTQTtBQUNBO0FBdUpBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXhDQTtBQTZDQTs7OztBQXpNQTtBQUNBO0FBMFNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcFRBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBbkJBO0FBc0JBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=