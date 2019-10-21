(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-card"],{

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


var HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");




var paperDialogClass = customElements.get("paper-dialog");
// behavior that will override existing iron-overlay-behavior and call the fixed implementation
var haTabFixBehaviorImpl = {
    get _focusableNodes() {
        return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_3__["HaIronFocusablesHelper"].getTabbableNodes(this);
    },
};
// paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore
var HaPaperDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperDialog, _super);
    function HaPaperDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HaPaperDialog;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass)));

customElements.define("ha-paper-dialog", HaPaperDialog);


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

/***/ "./src/panels/lovelace/common/get-card-element-tag.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/get-card-element-tag.ts ***!
  \************************************************************/
/*! exports provided: getCardElementTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCardElementTag", function() { return getCardElementTag; });
var CUSTOM_TYPE_PREFIX = "custom:";
function getCardElementTag(type) {
    return type.startsWith(CUSTOM_TYPE_PREFIX)
        ? type.substr(CUSTOM_TYPE_PREFIX.length)
        : "hui-" + type + "-card";
}


/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiCardEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardEditor", function() { return HuiCardEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");








var HuiCardEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCardEditor, _super);
    function HuiCardEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._GUImode = true;
        _this._loading = false;
        return _this;
    }
    Object.defineProperty(HuiCardEditor.prototype, "yaml", {
        get: function () {
            return this._yaml || "";
        },
        set: function (_yaml) {
            this._yaml = _yaml;
            try {
                this._config = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(this.yaml);
                this._updateConfigElement();
                this._error = undefined;
            }
            catch (err) {
                this._error = err.message;
            }
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "config-changed", {
                config: this.value,
                error: this._error,
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiCardEditor.prototype, "value", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            if (JSON.stringify(config) !== JSON.stringify(this._config || {})) {
                this.yaml = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(config);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiCardEditor.prototype, "hasError", {
        get: function () {
            return this._error !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiCardEditor.prototype, "_yamlEditor", {
        get: function () {
            return this.shadowRoot.querySelector("ha-code-editor");
        },
        enumerable: true,
        configurable: true
    });
    HuiCardEditor.prototype.toggleMode = function () {
        this._GUImode = !this._GUImode;
    };
    HuiCardEditor.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._refreshYamlEditor();
    };
    HuiCardEditor.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"wrapper\">\n        ", "\n        ", "\n        ", "\n        <div class=\"buttons\">\n          <mwc-button\n            @click=", "\n            ?disabled=", "\n          >\n            ", "\n          </mwc-button>\n        </div>\n      </div>\n    "], ["\n      <div class=\"wrapper\">\n        ",
            "\n        ",
            "\n        ",
            "\n        <div class=\"buttons\">\n          <mwc-button\n            @click=", "\n            ?disabled=", "\n          >\n            ",
            "\n          </mwc-button>\n        </div>\n      </div>\n    "])), this._GUImode
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"gui-editor\">\n                ", "\n              </div>\n            "], ["\n              <div class=\"gui-editor\">\n                ",
                "\n              </div>\n            "])), this._loading
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-spinner\n                        active\n                        alt=\"Loading\"\n                        class=\"center margin-bot\"\n                      ></paper-spinner>\n                    "], ["\n                      <paper-spinner\n                        active\n                        alt=\"Loading\"\n                        class=\"center margin-bot\"\n                      ></paper-spinner>\n                    "]))) : this._configElement) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"yaml-editor\">\n                <ha-code-editor\n                  mode=\"yaml\"\n                  autofocus\n                  .value=", "\n                  .error=", "\n                  .rtl=", "\n                  @value-changed=", "\n                ></ha-code-editor>\n              </div>\n            "], ["\n              <div class=\"yaml-editor\">\n                <ha-code-editor\n                  mode=\"yaml\"\n                  autofocus\n                  .value=", "\n                  .error=", "\n                  .rtl=", "\n                  @value-changed=", "\n                ></ha-code-editor>\n              </div>\n            "])), this.yaml, this._error, Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(this.hass), this._handleYAMLChanged), this._error
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"error\">\n                ", "\n              </div>\n            "], ["\n              <div class=\"error\">\n                ", "\n              </div>\n            "])), this._error) : "", this._warning
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"warning\">\n                ", "\n              </div>\n            "], ["\n              <div class=\"warning\">\n                ", "\n              </div>\n            "])), this._warning) : "", this.toggleMode, this._warning || this._error, this.hass.localize(this._GUImode
            ? "ui.panel.lovelace.editor.edit_card.show_code_editor"
            : "ui.panel.lovelace.editor.edit_card.show_visual_editor"));
    };
    HuiCardEditor.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("_GUImode")) {
            if (this._GUImode === false) {
                // Refresh code editor when switching to yaml mode
                this._refreshYamlEditor(true);
            }
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "iron-resize");
        }
    };
    HuiCardEditor.prototype._refreshYamlEditor = function (focus) {
        var _this = this;
        if (focus === void 0) { focus = false; }
        // wait on render
        setTimeout(function () {
            if (_this._yamlEditor && _this._yamlEditor.codemirror) {
                _this._yamlEditor.codemirror.refresh();
                if (focus) {
                    _this._yamlEditor.codemirror.focus();
                }
            }
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(_this, "iron-resize");
        }, 1);
    };
    HuiCardEditor.prototype._handleUIConfigChanged = function (ev) {
        ev.stopPropagation();
        var config = ev.detail.config;
        this.value = config;
    };
    HuiCardEditor.prototype._handleYAMLChanged = function (ev) {
        ev.stopPropagation();
        var newYaml = ev.detail.value;
        if (newYaml !== this.yaml) {
            this.yaml = newYaml;
        }
    };
    HuiCardEditor.prototype._updateConfigElement = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cardType, configElement, tag, elClass, err_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.value) {
                            return [2 /*return*/];
                        }
                        cardType = this.value.type;
                        configElement = this._configElement;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        this._error = undefined;
                        this._warning = undefined;
                        if (!(this._configElType !== cardType)) return [3 /*break*/, 5];
                        // If the card type has changed, we need to load a new GUI editor
                        if (!this.value.type) {
                            throw new Error("No card type defined");
                        }
                        tag = Object(_common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_4__["getCardElementTag"])(cardType);
                        elClass = customElements.get(tag);
                        if (!elClass) {
                            throw new Error("Unknown card type encountered: " + cardType + ".");
                        }
                        this._loading = true;
                        if (!(elClass && elClass.getConfigElement)) return [3 /*break*/, 3];
                        return [4 /*yield*/, elClass.getConfigElement()];
                    case 2:
                        configElement = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        configElement = undefined;
                        throw Error("WARNING: No GUI editor available for: " + cardType);
                    case 4:
                        this._configElement = configElement;
                        this._configElType = cardType;
                        _a.label = 5;
                    case 5:
                        // Setup GUI editor and check that it can handle the current config
                        try {
                            this._configElement.setConfig(this.value);
                        }
                        catch (err) {
                            throw Error("WARNING: " + err.message);
                        }
                        // Perform final setup
                        this._configElement.hass = this.hass;
                        this._configElement.addEventListener("config-changed", function (ev) {
                            return _this._handleUIConfigChanged(ev);
                        });
                        return [2 /*return*/];
                    case 6:
                        err_1 = _a.sent();
                        if (err_1.message.startsWith("WARNING:")) {
                            this._warning = err_1.message.substr(8);
                        }
                        else {
                            this._error = err_1;
                        }
                        this._GUImode = false;
                        return [3 /*break*/, 8];
                    case 7:
                        this._loading = false;
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "iron-resize");
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiCardEditor, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: flex;\n      }\n      .wrapper {\n        width: 100%;\n      }\n      .gui-editor,\n      .yaml-editor {\n        padding: 8px 0px;\n      }\n      .error {\n        color: #ef5350;\n      }\n      .warning {\n        color: #ffa726;\n      }\n      .buttons {\n        text-align: right;\n        padding: 8px 0px;\n      }\n      paper-spinner {\n        display: block;\n        margin: auto;\n      }\n    "], ["\n      :host {\n        display: flex;\n      }\n      .wrapper {\n        width: 100%;\n      }\n      .gui-editor,\n      .yaml-editor {\n        padding: 8px 0px;\n      }\n      .error {\n        color: #ef5350;\n      }\n      .warning {\n        color: #ffa726;\n      }\n      .buttons {\n        text-align: right;\n        padding: 8px 0px;\n      }\n      paper-spinner {\n        display: block;\n        margin: auto;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_yaml", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_configElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_configElType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_GUImode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_warning", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardEditor.prototype, "_loading", void 0);
    HuiCardEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-card-editor")
    ], HuiCardEditor);
    return HuiCardEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-picker.ts ***!
  \*******************************************************************/
/*! exports provided: HuiCardPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPicker", function() { return HuiCardPicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");





var cards = [
    "alarm-panel",
    "conditional",
    "entities",
    "entity-button",
    "entity-filter",
    "gauge",
    "glance",
    "history-graph",
    "horizontal-stack",
    "iframe",
    "light",
    "map",
    "markdown",
    "media-control",
    "picture",
    "picture-elements",
    "picture-entity",
    "picture-glance",
    "plant-status",
    "sensor",
    "shopping-list",
    "thermostat",
    "vertical-stack",
    "weather-forecast",
];
var HuiCardPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCardPicker, _super);
    function HuiCardPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiCardPicker.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <h3>\n        ", "\n      </h3>\n      <div class=\"cards-container\">\n        ", "\n      </div>\n      <div class=\"cards-container\">\n        <mwc-button @click=\"", "\">MANUAL CARD</mwc-button>\n      </div>\n    "], ["\n      <h3>\n        ", "\n      </h3>\n      <div class=\"cards-container\">\n        ",
            "\n      </div>\n      <div class=\"cards-container\">\n        <mwc-button @click=\"", "\">MANUAL CARD</mwc-button>\n      </div>\n    "])), this.hass.localize("ui.panel.lovelace.editor.edit_card.pick_card"), cards.map(function (card) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <mwc-button @click=\"", "\" .type=\"", "\">\n              ", "\n            </mwc-button>\n          "], ["\n            <mwc-button @click=\"", "\" .type=\"", "\">\n              ",
                "\n            </mwc-button>\n          "])), _this._cardPicked, card, _this.hass.localize("ui.panel.lovelace.editor.card." + card + ".name"));
        }), this._manualPicked);
    };
    Object.defineProperty(HuiCardPicker, "styles", {
        get: function () {
            return [
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .cards-container {\n          display: flex;\n          flex-wrap: wrap;\n          margin-bottom: 10px;\n        }\n        .cards-container mwc-button {\n          flex: 1 0 25%;\n          margin: 4px;\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .cards-container mwc-button {\n            flex: 1 0 33%;\n          }\n        }\n      "], ["\n        .cards-container {\n          display: flex;\n          flex-wrap: wrap;\n          margin-bottom: 10px;\n        }\n        .cards-container mwc-button {\n          flex: 1 0 25%;\n          margin: 4px;\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .cards-container mwc-button {\n            flex: 1 0 33%;\n          }\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    HuiCardPicker.prototype._manualPicked = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", {
            config: { type: "" },
        });
    };
    HuiCardPicker.prototype._cardPicked = function (ev) {
        var type = ev.currentTarget.type;
        var tag = Object(_common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_3__["getCardElementTag"])(type);
        var elClass = customElements.get(tag);
        var config = { type: type };
        if (elClass && elClass.getStubConfig) {
            var cardConfig = elClass.getStubConfig(this.hass);
            config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config), cardConfig);
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "config-changed", { config: config });
    };
    HuiCardPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-card-picker")
    ], HuiCardPicker);
    return HuiCardPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-card-preview.ts ***!
  \********************************************************************/
/*! exports provided: HuiCardPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardPreview", function() { return HuiCardPreview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/get-card-element-tag */ "./src/panels/lovelace/common/get-card-element-tag.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");







var HuiCardPreview = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCardPreview, _super);
    function HuiCardPreview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HuiCardPreview.prototype, "hass", {
        set: function (hass) {
            if (!this._hass || this._hass.language !== hass.language) {
                this.style.direction = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(hass) ? "rtl" : "ltr";
            }
            this._hass = hass;
            if (this._element) {
                this._element.hass = hass;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiCardPreview.prototype, "error", {
        set: function (error) {
            var configValue = Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_5__["createErrorCardConfig"])(error.type + ": " + error.message, undefined);
            this._createCard(configValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiCardPreview.prototype, "config", {
        set: function (configValue) {
            if (!configValue) {
                this._cleanup();
                return;
            }
            if (!configValue.type) {
                this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_5__["createErrorCardConfig"])("No card type found", configValue));
                return;
            }
            if (!this._element) {
                this._createCard(configValue);
                return;
            }
            var tag = Object(_common_get_card_element_tag__WEBPACK_IMPORTED_MODULE_4__["getCardElementTag"])(configValue.type);
            if (tag.toUpperCase() === this._element.tagName) {
                try {
                    this._element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_2__["default"])(configValue));
                }
                catch (err) {
                    this._createCard(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_5__["createErrorCardConfig"])(err.message, configValue));
                }
            }
            else {
                this._createCard(configValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    HuiCardPreview.prototype._createCard = function (configValue) {
        this._cleanup();
        this._element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_3__["createCardElement"])(configValue);
        if (this._hass) {
            this._element.hass = this._hass;
        }
        this.appendChild(this._element);
    };
    HuiCardPreview.prototype._cleanup = function () {
        if (!this._element) {
            return;
        }
        this.removeChild(this._element);
        this._element = undefined;
    };
    return HuiCardPreview;
}(HTMLElement));

customElements.define("hui-card-preview", HuiCardPreview);


/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts ***!
  \************************************************************************/
/*! exports provided: HuiDialogEditCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditCard", function() { return HuiDialogEditCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _hui_card_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-card-editor */ "./src/panels/lovelace/editor/card-editor/hui-card-editor.ts");
/* harmony import */ var _hui_card_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hui-card-preview */ "./src/panels/lovelace/editor/card-editor/hui-card-preview.ts");
/* harmony import */ var _hui_card_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hui-card-picker */ "./src/panels/lovelace/editor/card-editor/hui-card-picker.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");








var HuiDialogEditCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiDialogEditCard, _super);
    function HuiDialogEditCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._saving = false;
        return _this;
    }
    HuiDialogEditCard.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, view, card;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                this._params = params;
                _a = params.path, view = _a[0], card = _a[1];
                this._cardConfig =
                    card !== undefined
                        ? params.lovelace.config.views[view].cards[card]
                        : undefined;
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(HuiDialogEditCard.prototype, "_cardEditorEl", {
        get: function () {
            return this.shadowRoot.querySelector("hui-card-editor");
        },
        enumerable: true,
        configurable: true
    });
    HuiDialogEditCard.prototype.render = function () {
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var heading;
        if (this._cardConfig && this._cardConfig.type) {
            heading = this.hass.localize("ui.panel.lovelace.editor.card." + this._cardConfig.type + ".name") + " " + this.hass.localize("ui.panel.lovelace.editor.edit_card.header");
        }
        else {
            heading = this.hass.localize("ui.panel.lovelace.editor.edit_card.header");
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog with-backdrop opened modal>\n        <h2>\n          ", "\n        </h2>\n        <paper-dialog-scrollable>\n          ", "\n        </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          <mwc-button @click=\"", "\">\n            ", "\n          </mwc-button>\n          <mwc-button\n            ?disabled=\"", "\"\n            @click=\"", "\"\n          >\n            ", "\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog with-backdrop opened modal>\n        <h2>\n          ", "\n        </h2>\n        <paper-dialog-scrollable>\n          ",
            "\n        </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          <mwc-button @click=\"", "\">\n            ", "\n          </mwc-button>\n          <mwc-button\n            ?disabled=\"", "\"\n            @click=\"", "\"\n          >\n            ",
            "\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    "])), heading, this._cardConfig === undefined
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <hui-card-picker\n                  .hass=\"", "\"\n                  @config-changed=\"", "\"\n                ></hui-card-picker>\n              "], ["\n                <hui-card-picker\n                  .hass=\"", "\"\n                  @config-changed=\"", "\"\n                ></hui-card-picker>\n              "])), this.hass, this._handleCardPicked) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"content\">\n                  <div class=\"element-editor\">\n                    <hui-card-editor\n                      .hass=\"", "\"\n                      .value=\"", "\"\n                      @config-changed=\"", "\"\n                    ></hui-card-editor>\n                  </div>\n                  <div class=\"element-preview\">\n                    <hui-card-preview\n                      .hass=\"", "\"\n                      .config=\"", "\"\n                      class=", "\n                    ></hui-card-preview>\n                    ", "\n                  </div>\n                </div>\n              "], ["\n                <div class=\"content\">\n                  <div class=\"element-editor\">\n                    <hui-card-editor\n                      .hass=\"", "\"\n                      .value=\"", "\"\n                      @config-changed=\"", "\"\n                    ></hui-card-editor>\n                  </div>\n                  <div class=\"element-preview\">\n                    <hui-card-preview\n                      .hass=\"", "\"\n                      .config=\"", "\"\n                      class=", "\n                    ></hui-card-preview>\n                    ",
            "\n                  </div>\n                </div>\n              "])), this.hass, this._cardConfig, this._handleConfigChanged, this.hass, this._cardConfig, this._error ? "blur" : "", this._error
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          <paper-spinner\n                            active\n                            alt=\"Can't update card\"\n                          ></paper-spinner>\n                        "], ["\n                          <paper-spinner\n                            active\n                            alt=\"Can't update card\"\n                          ></paper-spinner>\n                        "]))) : ""), this._close, this.hass.localize("ui.common.cancel"), !this._canSave || this._saving, this._save, this._saving
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <paper-spinner active alt=\"Saving\"></paper-spinner>\n                "], ["\n                  <paper-spinner active alt=\"Saving\"></paper-spinner>\n                "]))) : this.hass.localize("ui.common.save"));
    };
    Object.defineProperty(HuiDialogEditCard, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          --code-mirror-max-height: calc(100vh - 176px);\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 845px;\n          }\n        }\n\n        ha-paper-dialog {\n          max-width: 845px;\n        }\n\n        .center {\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .content {\n          display: flex;\n          flex-direction: column;\n          margin: 0 -10px;\n        }\n        .content hui-card-preview {\n          margin: 4px auto;\n          max-width: 390px;\n        }\n        .content .element-editor {\n          margin: 0 10px;\n        }\n\n        @media (min-width: 1200px) {\n          ha-paper-dialog {\n            max-width: none;\n            width: 1000px;\n          }\n\n          .content {\n            flex-direction: row;\n          }\n          .content > * {\n            flex-basis: 0;\n            flex-grow: 1;\n            flex-shrink: 1;\n            min-width: 0;\n          }\n          .content hui-card-preview {\n            padding: 8px 0;\n            margin: auto 10px;\n            max-width: 500px;\n          }\n        }\n\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n        .hidden {\n          display: none;\n        }\n        .element-editor {\n          margin-bottom: 8px;\n        }\n        .blur {\n          filter: blur(2px) grayscale(100%);\n        }\n        .element-preview {\n          position: relative;\n        }\n        .element-preview paper-spinner {\n          top: 50%;\n          left: 50%;\n          position: absolute;\n          z-index: 10;\n        }\n        hui-card-preview {\n          padding-top: 8px;\n          margin-bottom: 4px;\n          display: block;\n          width: 100%;\n        }\n      "], ["\n        :host {\n          --code-mirror-max-height: calc(100vh - 176px);\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 845px;\n          }\n        }\n\n        ha-paper-dialog {\n          max-width: 845px;\n        }\n\n        .center {\n          margin-left: auto;\n          margin-right: auto;\n        }\n\n        .content {\n          display: flex;\n          flex-direction: column;\n          margin: 0 -10px;\n        }\n        .content hui-card-preview {\n          margin: 4px auto;\n          max-width: 390px;\n        }\n        .content .element-editor {\n          margin: 0 10px;\n        }\n\n        @media (min-width: 1200px) {\n          ha-paper-dialog {\n            max-width: none;\n            width: 1000px;\n          }\n\n          .content {\n            flex-direction: row;\n          }\n          .content > * {\n            flex-basis: 0;\n            flex-grow: 1;\n            flex-shrink: 1;\n            min-width: 0;\n          }\n          .content hui-card-preview {\n            padding: 8px 0;\n            margin: auto 10px;\n            max-width: 500px;\n          }\n        }\n\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n        .hidden {\n          display: none;\n        }\n        .element-editor {\n          margin-bottom: 8px;\n        }\n        .blur {\n          filter: blur(2px) grayscale(100%);\n        }\n        .element-preview {\n          position: relative;\n        }\n        .element-preview paper-spinner {\n          top: 50%;\n          left: 50%;\n          position: absolute;\n          z-index: 10;\n        }\n        hui-card-preview {\n          padding-top: 8px;\n          margin-bottom: 4px;\n          display: block;\n          width: 100%;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    HuiDialogEditCard.prototype._handleCardPicked = function (ev) {
        this._cardConfig = ev.detail.config;
        if (this._params.entities && this._params.entities.length > 0) {
            if (Object.keys(this._cardConfig).includes("entities")) {
                this._cardConfig.entities = this._params.entities;
            }
            else if (Object.keys(this._cardConfig).includes("entity")) {
                this._cardConfig.entity = this._params.entities[0];
            }
        }
        this._error = ev.detail.error;
    };
    HuiDialogEditCard.prototype._handleConfigChanged = function (ev) {
        this._cardConfig = ev.detail.config;
        this._error = ev.detail.error;
    };
    HuiDialogEditCard.prototype._close = function () {
        this._params = undefined;
        this._cardConfig = undefined;
        this._error = undefined;
    };
    Object.defineProperty(HuiDialogEditCard.prototype, "_canSave", {
        get: function () {
            if (this._saving) {
                return false;
            }
            if (this._cardConfig === undefined) {
                return false;
            }
            if (this._cardEditorEl && this._cardEditorEl.hasError) {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    HuiDialogEditCard.prototype._save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var lovelace;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lovelace = this._params.lovelace;
                        this._saving = true;
                        return [4 /*yield*/, lovelace.saveConfig(this._params.path.length === 1
                                ? Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["addCard"])(lovelace.config, this._params.path, this._cardConfig)
                                : Object(_config_util__WEBPACK_IMPORTED_MODULE_5__["replaceCard"])(lovelace.config, this._params.path, this._cardConfig))];
                    case 1:
                        _a.sent();
                        this._saving = false;
                        this._close();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditCard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditCard.prototype, "_params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditCard.prototype, "_cardConfig", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditCard.prototype, "_saving", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditCard.prototype, "_error", void 0);
    HuiDialogEditCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-dialog-edit-card")
    ], HuiDialogEditCard);
    return HuiDialogEditCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvY29tbW9uL2dldC1jYXJkLWVsZW1lbnQtdGFnLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL2NhcmQtZWRpdG9yL2h1aS1jYXJkLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktY2FyZC1waWNrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY2FyZC1lZGl0b3IvaHVpLWNhcmQtcHJldmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9odWktZGlhbG9nLWVkaXQtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2NvZGVtaXJyb3Iub25kZW1hbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgeyBsb2FkQ29kZU1pcnJvciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgVXBkYXRpbmdFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlZGl0b3Itc2F2ZVwiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb2RlLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhQ29kZUVkaXRvciBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIHB1YmxpYyBjb2RlbWlycm9yPzogRWRpdG9yO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9kZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcnRsID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlcnJvciA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF92YWx1ZSA9IFwiXCI7XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlbWlycm9yID8gdGhpcy5jb2RlbWlycm9yLmdldFZhbHVlKCkgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzQ29tbWVudHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInNwYW4uY20tY29tbWVudFwiKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29kZW1pcnJvci5yZWZyZXNoKCk7XG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibW9kZVwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcIm1vZGVcIiwgdGhpcy5tb2RlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJhdXRvZm9jdXNcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJhdXRvZm9jdXNcIiwgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfdmFsdWVcIikgJiYgdGhpcy5fdmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwicnRsXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiZ3V0dGVyc1wiLCB0aGlzLl9jYWxjR3V0dGVycygpKTtcbiAgICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImVycm9yXCIpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJlcnJvci1zdGF0ZVwiLCB0aGlzLmVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGF3YWl0IGxvYWRDb2RlTWlycm9yKCk7XG5cbiAgICBjb25zdCBjb2RlTWlycm9yID0gbG9hZGVkLmNvZGVNaXJyb3I7XG5cbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgIHNoYWRvd1Jvb3QhLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgICAke2xvYWRlZC5jb2RlTWlycm9yQ3NzfVxuICAgICAgLkNvZGVNaXJyb3Ige1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLWhlaWdodCwgYXV0byk7XG4gICAgICAgIGRpcmVjdGlvbjogdmFyKC0tY29kZS1taXJyb3ItZGlyZWN0aW9uLCBsdHIpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItbWF4LWhlaWdodCwgLS1jb2RlLW1pcnJvci1oZWlnaHQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYm9yZGVyLXJpZ2h0O1xuICAgICAgfVxuICAgICAgOmhvc3QoLmVycm9yLXN0YXRlKSAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1zdGF0ZS1jb2xvciwgcmVkKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuICAgICAgLnJ0bCAuQ29kZU1pcnJvci12c2Nyb2xsYmFyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICAgIC5ydGwtZ3V0dGVyIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5gO1xuXG4gICAgdGhpcy5jb2RlbWlycm9yID0gY29kZU1pcnJvcihzaGFkb3dSb290LCB7XG4gICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAgIHRhYlNpemU6IDIsXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSxcbiAgICAgIHZpZXdwb3J0TWFyZ2luOiBJbmZpbml0eSxcbiAgICAgIGV4dHJhS2V5czoge1xuICAgICAgICBUYWI6IFwiaW5kZW50TW9yZVwiLFxuICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcbiAgICAgIH0sXG4gICAgICBndXR0ZXJzOiB0aGlzLl9jYWxjR3V0dGVycygpLFxuICAgIH0pO1xuICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xuICAgIHRoaXMuY29kZW1pcnJvciEub24oXCJjaGFuZ2VzXCIsICgpID0+IHRoaXMuX29uQ2hhbmdlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMuX3ZhbHVlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY0d1dHRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnJ0bCA/IFtcInJ0bC1ndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCJdIDogW107XG4gIH1cblxuICBwcml2YXRlIF9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29kZW1pcnJvcikge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmdldFdyYXBwZXJFbGVtZW50KCkuY2xhc3NMaXN0LnRvZ2dsZShcInJ0bFwiLCB0aGlzLnJ0bCk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb2RlLWVkaXRvclwiOiBIYUNvZGVFZGl0b3I7XG4gIH1cbn1cbiIsImNvbnN0IENVU1RPTV9UWVBFX1BSRUZJWCA9IFwiY3VzdG9tOlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZEVsZW1lbnRUYWcodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGUuc3RhcnRzV2l0aChDVVNUT01fVFlQRV9QUkVGSVgpXG4gICAgPyB0eXBlLnN1YnN0cihDVVNUT01fVFlQRV9QUkVGSVgubGVuZ3RoKVxuICAgIDogYGh1aS0ke3R5cGV9LWNhcmRgO1xufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgY3NzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB5YW1sIGZyb20gXCJqcy15YW1sXCI7XG5cbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgTG92ZWxhY2VDYXJkRWRpdG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudFRhZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2V0LWNhcmQtZWxlbWVudC10YWdcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlbnRpdGllcy1jaGFuZ2VkXCI6IHtcbiAgICAgIGVudGl0aWVzOiBFbnRpdHlDb25maWdbXTtcbiAgICB9O1xuICAgIFwiY29uZmlnLWNoYW5nZWRcIjoge1xuICAgICAgY29uZmlnOiBMb3ZlbGFjZUNhcmRDb25maWc7XG4gICAgICBlcnJvcj86IHN0cmluZztcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDb25maWdDaGFuZ2VkRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGNvbmZpZzogTG92ZWxhY2VDYXJkQ29uZmlnO1xuICB9O1xufVxuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEh1aUNhcmRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3lhbWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRWxlbWVudD86IExvdmVsYWNlQ2FyZEVkaXRvcjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnRWxUeXBlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9HVUltb2RlOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gRXJyb3I6IENvbmZpZ3VyYXRpb24gYnJva2VuIC0gZG8gbm90IHNhdmVcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG4gIC8vIFdhcm5pbmc6IEdVSSBlZGl0b3IgY2FuJ3QgaGFuZGxlIGNvbmZpZ3VyYXRpb24gLSBvayB0byBzYXZlXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dhcm5pbmc/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwdWJsaWMgZ2V0IHlhbWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5feWFtbCB8fCBcIlwiO1xuICB9XG4gIHB1YmxpYyBzZXQgeWFtbChfeWFtbDogc3RyaW5nKSB7XG4gICAgdGhpcy5feWFtbCA9IF95YW1sO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jb25maWcgPSB5YW1sLnNhZmVMb2FkKHRoaXMueWFtbCk7XG4gICAgICB0aGlzLl91cGRhdGVDb25maWdFbGVtZW50KCk7XG4gICAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yID0gZXJyLm1lc3NhZ2U7XG4gICAgfVxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHtcbiAgICAgIGNvbmZpZzogdGhpcy52YWx1ZSEsXG4gICAgICBlcnJvcjogdGhpcy5fZXJyb3IsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IExvdmVsYWNlQ2FyZENvbmZpZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuICBwdWJsaWMgc2V0IHZhbHVlKGNvbmZpZzogTG92ZWxhY2VDYXJkQ29uZmlnIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvbmZpZykgIT09IEpTT04uc3RyaW5naWZ5KHRoaXMuX2NvbmZpZyB8fCB7fSkpIHtcbiAgICAgIHRoaXMueWFtbCA9IHlhbWwuc2FmZUR1bXAoY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9lcnJvciAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3lhbWxFZGl0b3IoKTogSGFDb2RlRWRpdG9yIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiaGEtY29kZS1lZGl0b3JcIikhIGFzIEhhQ29kZUVkaXRvcjtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVNb2RlKCkge1xuICAgIHRoaXMuX0dVSW1vZGUgPSAhdGhpcy5fR1VJbW9kZTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3JlZnJlc2hZYW1sRWRpdG9yKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICR7dGhpcy5fR1VJbW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImd1aS1lZGl0b3JcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2xvYWRpbmdcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2FkaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VudGVyIG1hcmdpbi1ib3RcIlxuICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5fY29uZmlnRWxlbWVudH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWFtbC1lZGl0b3JcIj5cbiAgICAgICAgICAgICAgICA8aGEtY29kZS1lZGl0b3JcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy55YW1sfVxuICAgICAgICAgICAgICAgICAgLmVycm9yPSR7dGhpcy5fZXJyb3J9XG4gICAgICAgICAgICAgICAgICAucnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVZQU1MQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICA+PC9oYS1jb2RlLWVkaXRvcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAke3RoaXMuX2Vycm9yXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX2Vycm9yfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5fd2FybmluZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndhcm5pbmdcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuX3dhcm5pbmd9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy50b2dnbGVNb2RlfVxuICAgICAgICAgICAgP2Rpc2FibGVkPSR7dGhpcy5fd2FybmluZyB8fCB0aGlzLl9lcnJvcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIHRoaXMuX0dVSW1vZGVcbiAgICAgICAgICAgICAgICA/IFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5zaG93X2NvZGVfZWRpdG9yXCJcbiAgICAgICAgICAgICAgICA6IFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5zaG93X3Zpc3VhbF9lZGl0b3JcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiX0dVSW1vZGVcIikpIHtcbiAgICAgIGlmICh0aGlzLl9HVUltb2RlID09PSBmYWxzZSkge1xuICAgICAgICAvLyBSZWZyZXNoIGNvZGUgZWRpdG9yIHdoZW4gc3dpdGNoaW5nIHRvIHlhbWwgbW9kZVxuICAgICAgICB0aGlzLl9yZWZyZXNoWWFtbEVkaXRvcih0cnVlKTtcbiAgICAgIH1cbiAgICAgIGZpcmVFdmVudCh0aGlzIGFzIEhUTUxFbGVtZW50LCBcImlyb24tcmVzaXplXCIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlZnJlc2hZYW1sRWRpdG9yKGZvY3VzID0gZmFsc2UpIHtcbiAgICAvLyB3YWl0IG9uIHJlbmRlclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3lhbWxFZGl0b3IgJiYgdGhpcy5feWFtbEVkaXRvci5jb2RlbWlycm9yKSB7XG4gICAgICAgIHRoaXMuX3lhbWxFZGl0b3IuY29kZW1pcnJvci5yZWZyZXNoKCk7XG4gICAgICAgIGlmIChmb2N1cykge1xuICAgICAgICAgIHRoaXMuX3lhbWxFZGl0b3IuY29kZW1pcnJvci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaXJlRXZlbnQodGhpcyBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVVJQ29uZmlnQ2hhbmdlZChldjogVUlDb25maWdDaGFuZ2VkRXZlbnQpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb25maWcgPSBldi5kZXRhaWwuY29uZmlnO1xuICAgIHRoaXMudmFsdWUgPSBjb25maWc7XG4gIH1cbiAgcHJpdmF0ZSBfaGFuZGxlWUFNTENoYW5nZWQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBuZXdZYW1sID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChuZXdZYW1sICE9PSB0aGlzLnlhbWwpIHtcbiAgICAgIHRoaXMueWFtbCA9IG5ld1lhbWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnRWxlbWVudCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkVHlwZSA9IHRoaXMudmFsdWUudHlwZTtcbiAgICBsZXQgY29uZmlnRWxlbWVudCA9IHRoaXMuX2NvbmZpZ0VsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fd2FybmluZyA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZ0VsVHlwZSAhPT0gY2FyZFR5cGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNhcmQgdHlwZSBoYXMgY2hhbmdlZCwgd2UgbmVlZCB0byBsb2FkIGEgbmV3IEdVSSBlZGl0b3JcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlLnR5cGUpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYXJkIHR5cGUgZGVmaW5lZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhZyA9IGdldENhcmRFbGVtZW50VGFnKGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY2FyZCB0eXBlIGV4aXN0c1xuICAgICAgICBjb25zdCBlbENsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KHRhZyk7XG4gICAgICAgIGlmICghZWxDbGFzcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjYXJkIHR5cGUgZW5jb3VudGVyZWQ6ICR7Y2FyZFR5cGV9LmApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICAgIC8vIENoZWNrIGlmIGEgR1VJIGVkaXRvciBleGlzdHNcbiAgICAgICAgaWYgKGVsQ2xhc3MgJiYgZWxDbGFzcy5nZXRDb25maWdFbGVtZW50KSB7XG4gICAgICAgICAgY29uZmlnRWxlbWVudCA9IGF3YWl0IGVsQ2xhc3MuZ2V0Q29uZmlnRWxlbWVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbmZpZ0VsZW1lbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYFdBUk5JTkc6IE5vIEdVSSBlZGl0b3IgYXZhaWxhYmxlIGZvcjogJHtjYXJkVHlwZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NvbmZpZ0VsZW1lbnQgPSBjb25maWdFbGVtZW50O1xuICAgICAgICB0aGlzLl9jb25maWdFbFR5cGUgPSBjYXJkVHlwZTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgR1VJIGVkaXRvciBhbmQgY2hlY2sgdGhhdCBpdCBjYW4gaGFuZGxlIHRoZSBjdXJyZW50IGNvbmZpZ1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCEuc2V0Q29uZmlnKHRoaXMudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IEVycm9yKGBXQVJOSU5HOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfVxuXG4gICAgICAvLyBQZXJmb3JtIGZpbmFsIHNldHVwXG4gICAgICB0aGlzLl9jb25maWdFbGVtZW50IS5oYXNzID0gdGhpcy5oYXNzO1xuICAgICAgdGhpcy5fY29uZmlnRWxlbWVudCEuYWRkRXZlbnRMaXN0ZW5lcihcImNvbmZpZy1jaGFuZ2VkXCIsIChldikgPT5cbiAgICAgICAgdGhpcy5faGFuZGxlVUlDb25maWdDaGFuZ2VkKGV2IGFzIFVJQ29uZmlnQ2hhbmdlZEV2ZW50KVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLnN0YXJ0c1dpdGgoXCJXQVJOSU5HOlwiKSkge1xuICAgICAgICB0aGlzLl93YXJuaW5nID0gZXJyLm1lc3NhZ2Uuc3Vic3RyKDgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZXJyb3IgPSBlcnI7XG4gICAgICB9XG4gICAgICB0aGlzLl9HVUltb2RlID0gZmFsc2U7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuZ3VpLWVkaXRvcixcbiAgICAgIC55YW1sLWVkaXRvciB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgICB9XG4gICAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogI2VmNTM1MDtcbiAgICAgIH1cbiAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgY29sb3I6ICNmZmE3MjY7XG4gICAgICB9XG4gICAgICAuYnV0dG9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNhcmQtZWRpdG9yXCI6IEh1aUNhcmRFZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIGNzcyxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgZ2V0Q2FyZEVsZW1lbnRUYWcgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2dldC1jYXJkLWVsZW1lbnQtdGFnXCI7XG5pbXBvcnQgeyBDYXJkUGlja1RhcmdldCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5jb25zdCBjYXJkczogc3RyaW5nW10gPSBbXG4gIFwiYWxhcm0tcGFuZWxcIixcbiAgXCJjb25kaXRpb25hbFwiLFxuICBcImVudGl0aWVzXCIsXG4gIFwiZW50aXR5LWJ1dHRvblwiLFxuICBcImVudGl0eS1maWx0ZXJcIixcbiAgXCJnYXVnZVwiLFxuICBcImdsYW5jZVwiLFxuICBcImhpc3RvcnktZ3JhcGhcIixcbiAgXCJob3Jpem9udGFsLXN0YWNrXCIsXG4gIFwiaWZyYW1lXCIsXG4gIFwibGlnaHRcIixcbiAgXCJtYXBcIixcbiAgXCJtYXJrZG93blwiLFxuICBcIm1lZGlhLWNvbnRyb2xcIixcbiAgXCJwaWN0dXJlXCIsXG4gIFwicGljdHVyZS1lbGVtZW50c1wiLFxuICBcInBpY3R1cmUtZW50aXR5XCIsXG4gIFwicGljdHVyZS1nbGFuY2VcIixcbiAgXCJwbGFudC1zdGF0dXNcIixcbiAgXCJzZW5zb3JcIixcbiAgXCJzaG9wcGluZy1saXN0XCIsXG4gIFwidGhlcm1vc3RhdFwiLFxuICBcInZlcnRpY2FsLXN0YWNrXCIsXG4gIFwid2VhdGhlci1mb3JlY2FzdFwiLFxuXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktY2FyZC1waWNrZXJcIilcbmV4cG9ydCBjbGFzcyBIdWlDYXJkUGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBwdWJsaWMgY2FyZFBpY2tlZD86IChjYXJkQ29uZjogTG92ZWxhY2VDYXJkQ29uZmlnKSA9PiB2b2lkO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMz5cbiAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5waWNrX2NhcmRcIil9XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRzLWNvbnRhaW5lclwiPlxuICAgICAgICAke2NhcmRzLm1hcCgoY2FyZDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2NhcmRQaWNrZWR9XCIgLnR5cGU9XCIke2NhcmR9XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBgdWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuJHtjYXJkfS5uYW1lYFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIGA7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fbWFudWFsUGlja2VkfVwiPk1BTlVBTCBDQVJEPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuY2FyZHMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkcy1jb250YWluZXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZmxleDogMSAwIDI1JTtcbiAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAuY2FyZHMtY29udGFpbmVyIG13Yy1idXR0b24ge1xuICAgICAgICAgICAgZmxleDogMSAwIDMzJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX21hbnVhbFBpY2tlZCgpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJjb25maWctY2hhbmdlZFwiLCB7XG4gICAgICBjb25maWc6IHsgdHlwZTogXCJcIiB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FyZFBpY2tlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0eXBlID0gKGV2LmN1cnJlbnRUYXJnZXQhIGFzIENhcmRQaWNrVGFyZ2V0KS50eXBlO1xuICAgIGNvbnN0IHRhZyA9IGdldENhcmRFbGVtZW50VGFnKHR5cGUpO1xuXG4gICAgY29uc3QgZWxDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldCh0YWcpO1xuICAgIGxldCBjb25maWc6IExvdmVsYWNlQ2FyZENvbmZpZyA9IHsgdHlwZSB9O1xuXG4gICAgaWYgKGVsQ2xhc3MgJiYgZWxDbGFzcy5nZXRTdHViQ29uZmlnKSB7XG4gICAgICBjb25zdCBjYXJkQ29uZmlnID0gZWxDbGFzcy5nZXRTdHViQ29uZmlnKHRoaXMuaGFzcyk7XG4gICAgICBjb25maWcgPSB7IC4uLmNvbmZpZywgLi4uY2FyZENvbmZpZyB9O1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcImNvbmZpZy1jaGFuZ2VkXCIsIHsgY29uZmlnIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktY2FyZC1waWNrZXJcIjogSHVpQ2FyZFBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItdGV4dGFyZWFcIjtcblxuaW1wb3J0IGRlZXBDbG9uZSBmcm9tIFwiZGVlcC1jbG9uZS1zaW1wbGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlQ2FyZEVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NyZWF0ZS1jYXJkLWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0Vycm9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDYXJkRWxlbWVudFRhZyB9IGZyb20gXCIuLi8uLi9jb21tb24vZ2V0LWNhcmQtZWxlbWVudC10YWdcIjtcbmltcG9ydCB7IGNyZWF0ZUVycm9yQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi9jYXJkcy9odWktZXJyb3ItY2FyZFwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5leHBvcnQgY2xhc3MgSHVpQ2FyZFByZXZpZXcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwcml2YXRlIF9lbGVtZW50PzogTG92ZWxhY2VDYXJkO1xuXG4gIHNldCBoYXNzKGhhc3M6IEhvbWVBc3Npc3RhbnQpIHtcbiAgICBpZiAoIXRoaXMuX2hhc3MgfHwgdGhpcy5faGFzcy5sYW5ndWFnZSAhPT0gaGFzcy5sYW5ndWFnZSkge1xuICAgICAgdGhpcy5zdHlsZS5kaXJlY3Rpb24gPSBjb21wdXRlUlRMKGhhc3MpID8gXCJydGxcIiA6IFwibHRyXCI7XG4gICAgfVxuXG4gICAgdGhpcy5faGFzcyA9IGhhc3M7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuaGFzcyA9IGhhc3M7XG4gICAgfVxuICB9XG5cbiAgc2V0IGVycm9yKGVycm9yOiBDb25maWdFcnJvcikge1xuICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY3JlYXRlRXJyb3JDYXJkQ29uZmlnKFxuICAgICAgYCR7ZXJyb3IudHlwZX06ICR7ZXJyb3IubWVzc2FnZX1gLFxuICAgICAgdW5kZWZpbmVkXG4gICAgKTtcblxuICAgIHRoaXMuX2NyZWF0ZUNhcmQoY29uZmlnVmFsdWUpO1xuICB9XG5cbiAgc2V0IGNvbmZpZyhjb25maWdWYWx1ZTogTG92ZWxhY2VDYXJkQ29uZmlnKSB7XG4gICAgaWYgKCFjb25maWdWYWx1ZSkge1xuICAgICAgdGhpcy5fY2xlYW51cCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY29uZmlnVmFsdWUudHlwZSkge1xuICAgICAgdGhpcy5fY3JlYXRlQ2FyZChcbiAgICAgICAgY3JlYXRlRXJyb3JDYXJkQ29uZmlnKFwiTm8gY2FyZCB0eXBlIGZvdW5kXCIsIGNvbmZpZ1ZhbHVlKVxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoY29uZmlnVmFsdWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhZyA9IGdldENhcmRFbGVtZW50VGFnKGNvbmZpZ1ZhbHVlLnR5cGUpO1xuXG4gICAgaWYgKHRhZy50b1VwcGVyQ2FzZSgpID09PSB0aGlzLl9lbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0Q29uZmlnKGRlZXBDbG9uZShjb25maWdWYWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUNhcmQoY3JlYXRlRXJyb3JDYXJkQ29uZmlnKGVyci5tZXNzYWdlLCBjb25maWdWYWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVDYXJkKGNvbmZpZ1ZhbHVlOiBMb3ZlbGFjZUNhcmRDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IGNyZWF0ZUNhcmRFbGVtZW50KGNvbmZpZ1ZhbHVlKTtcblxuICAgIGlmICh0aGlzLl9oYXNzKSB7XG4gICAgICB0aGlzLl9lbGVtZW50IS5oYXNzID0gdGhpcy5faGFzcztcbiAgICB9XG5cbiAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnQhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFudXAoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWNhcmQtcHJldmlld1wiOiBIdWlDYXJkUHJldmlldztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktY2FyZC1wcmV2aWV3XCIsIEh1aUNhcmRQcmV2aWV3KTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLWVkaXRvclwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIdWlDYXJkRWRpdG9yIH0gZnJvbSBcIi4vaHVpLWNhcmQtZWRpdG9yXCI7XG5pbXBvcnQgXCIuL2h1aS1jYXJkLXByZXZpZXdcIjtcbmltcG9ydCBcIi4vaHVpLWNhcmQtcGlja2VyXCI7XG5pbXBvcnQgeyBFZGl0Q2FyZERpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZWRpdC1jYXJkLWRpYWxvZ1wiO1xuaW1wb3J0IHsgYWRkQ2FyZCwgcmVwbGFjZUNhcmQgfSBmcm9tIFwiLi4vY29uZmlnLXV0aWxcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtbG92ZWxhY2VcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwicmVsb2FkLWxvdmVsYWNlXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dFZGl0Q2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRWRpdENhcmREaWFsb2dQYXJhbXM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zYXZpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXJyb3I/OiBzdHJpbmc7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBFZGl0Q2FyZERpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICBjb25zdCBbdmlldywgY2FyZF0gPSBwYXJhbXMucGF0aDtcbiAgICB0aGlzLl9jYXJkQ29uZmlnID1cbiAgICAgIGNhcmQgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHBhcmFtcy5sb3ZlbGFjZS5jb25maWcudmlld3Nbdmlld10uY2FyZHMhW2NhcmRdXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2NhcmRFZGl0b3JFbCgpOiBIdWlDYXJkRWRpdG9yIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImh1aS1jYXJkLWVkaXRvclwiKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBsZXQgaGVhZGluZzogc3RyaW5nO1xuICAgIGlmICh0aGlzLl9jYXJkQ29uZmlnICYmIHRoaXMuX2NhcmRDb25maWcudHlwZSkge1xuICAgICAgaGVhZGluZyA9IGAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgIGB1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC4ke3RoaXMuX2NhcmRDb25maWcudHlwZX0ubmFtZWBcbiAgICAgICl9ICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuaGVhZGVyXCIpfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRpbmcgPSB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuaGVhZGVyXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nIHdpdGgtYmFja2Ryb3Agb3BlbmVkIG1vZGFsPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgJHtoZWFkaW5nfVxuICAgICAgICA8L2gyPlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgICAgJHt0aGlzLl9jYXJkQ29uZmlnID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aHVpLWNhcmQtcGlja2VyXG4gICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICBAY29uZmlnLWNoYW5nZWQ9XCIke3RoaXMuX2hhbmRsZUNhcmRQaWNrZWR9XCJcbiAgICAgICAgICAgICAgICA+PC9odWktY2FyZC1waWNrZXI+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtZWRpdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxodWktY2FyZC1lZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgICAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLl9jYXJkQ29uZmlnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNvbmZpZy1jaGFuZ2VkPVwiJHt0aGlzLl9oYW5kbGVDb25maWdDaGFuZ2VkfVwiXG4gICAgICAgICAgICAgICAgICAgID48L2h1aS1jYXJkLWVkaXRvcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8aHVpLWNhcmQtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgICAgICAgICAuY29uZmlnPVwiJHt0aGlzLl9jYXJkQ29uZmlnfVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9JHt0aGlzLl9lcnJvciA/IFwiYmx1clwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPjwvaHVpLWNhcmQtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDYW4ndCB1cGRhdGUgY2FyZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgOiBgYH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgfVxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFwZXItZGlhbG9nLWJ1dHRvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlfVwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLmNhbmNlbFwiKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7IXRoaXMuX2NhblNhdmUgfHwgdGhpcy5fc2F2aW5nfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX3NhdmV9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuX3NhdmluZ1xuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmUgYWx0PVwiU2F2aW5nXCI+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnNhdmVcIil9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLWNvZGUtbWlycm9yLW1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzZweCk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIGhhLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA2NjBweCkge1xuICAgICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgICB3aWR0aDogODQ1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDg0NXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDAgLTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgbWFyZ2luOiA0cHggYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IC5lbGVtZW50LWVkaXRvciB7XG4gICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQgPiAqIHtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRlbnQgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAxMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtd2MtYnV0dG9uIHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1lZGl0b3Ige1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuYmx1ciB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDJweCkgZ3JheXNjYWxlKDEwMCUpO1xuICAgICAgICB9XG4gICAgICAgIC5lbGVtZW50LXByZXZpZXcge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAuZWxlbWVudC1wcmV2aWV3IHBhcGVyLXNwaW5uZXIge1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIH1cbiAgICAgICAgaHVpLWNhcmQtcHJldmlldyB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNhcmRQaWNrZWQoZXYpIHtcbiAgICB0aGlzLl9jYXJkQ29uZmlnID0gZXYuZGV0YWlsLmNvbmZpZztcbiAgICBpZiAodGhpcy5fcGFyYW1zIS5lbnRpdGllcyAmJiB0aGlzLl9wYXJhbXMhLmVudGl0aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9jYXJkQ29uZmlnISkuaW5jbHVkZXMoXCJlbnRpdGllc1wiKSkge1xuICAgICAgICB0aGlzLl9jYXJkQ29uZmlnIS5lbnRpdGllcyA9IHRoaXMuX3BhcmFtcyEuZW50aXRpZXM7XG4gICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKHRoaXMuX2NhcmRDb25maWchKS5pbmNsdWRlcyhcImVudGl0eVwiKSkge1xuICAgICAgICB0aGlzLl9jYXJkQ29uZmlnIS5lbnRpdHkgPSB0aGlzLl9wYXJhbXMhLmVudGl0aWVzWzBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9lcnJvciA9IGV2LmRldGFpbC5lcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNvbmZpZ0NoYW5nZWQoZXYpIHtcbiAgICB0aGlzLl9jYXJkQ29uZmlnID0gZXYuZGV0YWlsLmNvbmZpZztcbiAgICB0aGlzLl9lcnJvciA9IGV2LmRldGFpbC5lcnJvcjtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuX3BhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9jYXJkQ29uZmlnID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2NhblNhdmUoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX3NhdmluZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2FyZENvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jYXJkRWRpdG9yRWwgJiYgdGhpcy5fY2FyZEVkaXRvckVsLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBsb3ZlbGFjZSA9IHRoaXMuX3BhcmFtcyEubG92ZWxhY2U7XG4gICAgdGhpcy5fc2F2aW5nID0gdHJ1ZTtcbiAgICBhd2FpdCBsb3ZlbGFjZS5zYXZlQ29uZmlnKFxuICAgICAgdGhpcy5fcGFyYW1zIS5wYXRoLmxlbmd0aCA9PT0gMVxuICAgICAgICA/IGFkZENhcmQoXG4gICAgICAgICAgICBsb3ZlbGFjZS5jb25maWcsXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMhLnBhdGggYXMgW251bWJlcl0sXG4gICAgICAgICAgICB0aGlzLl9jYXJkQ29uZmlnIVxuICAgICAgICAgIClcbiAgICAgICAgOiByZXBsYWNlQ2FyZChcbiAgICAgICAgICAgIGxvdmVsYWNlLmNvbmZpZyxcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcyEucGF0aCBhcyBbbnVtYmVyLCBudW1iZXJdLFxuICAgICAgICAgICAgdGhpcy5fY2FyZENvbmZpZyFcbiAgICAgICAgICApXG4gICAgKTtcbiAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9jbG9zZSgpO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZGlhbG9nLWVkaXQtY2FyZFwiOiBIdWlEaWFsb2dFZGl0Q2FyZDtcbiAgfVxufVxuIiwiaW50ZXJmYWNlIExvYWRlZENvZGVNaXJyb3Ige1xuICBjb2RlTWlycm9yOiBhbnk7XG4gIGNvZGVNaXJyb3JDc3M6IGFueTtcbn1cblxubGV0IGxvYWRlZDogUHJvbWlzZTxMb2FkZWRDb2RlTWlycm9yPjtcblxuZXhwb3J0IGNvbnN0IGxvYWRDb2RlTWlycm9yID0gYXN5bmMgKCk6IFByb21pc2U8TG9hZGVkQ29kZU1pcnJvcj4gPT4ge1xuICBpZiAoIWxvYWRlZCkge1xuICAgIGxvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvZGVtaXJyb3JcIiAqLyBcIi4vY29kZW1pcnJvclwiKTtcbiAgfVxuICByZXR1cm4gbG9hZGVkO1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUFBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFlQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQWtJQTtBQWhJQTtBQUlBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFDQTs7O0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7O0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFySUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFEQTtBQUNBO0FBd0lBO0FBQUE7QUF4SUE7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBVUE7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUlBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFLQTs7QUE0T0E7QUExT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWRBO0FBZ0JBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFPQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUEyQkE7QUFPQTtBQU9BO0FBVUE7QUFoREE7QUFVQTtBQVBBO0FBdUJBO0FBT0E7QUFhQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBQUE7OztBQUVBO0FBQ0E7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQTBCQTs7O0FBQUE7QUF0UEE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBWkE7QUFEQTtBQUNBO0FBd1BBO0FBQUE7QUF4UEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFRQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQXFFQTtBQWhFQTtBQUFBO0FBQ0E7QUFhQTtBQVBBO0FBSUE7QUFHQTtBQU1BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXBFQTtBQURBO0FBQ0E7QUFxRUE7QUFBQTtBQXJFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTs7QUF5RUE7QUFyRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBS0E7QUFDQTs7O0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBYUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7QUFxUEE7QUFsUEE7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQXNDQTtBQWNBO0FBN0NBO0FBNEJBO0FBTkE7QUFvQkE7QUFRQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE2RkE7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTs7QUFQQTtBQWFBO0FBQ0E7Ozs7O0FBQ0E7QUExUEE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFEQTtBQUNBO0FBNFBBO0FBQUE7QUE1UEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9