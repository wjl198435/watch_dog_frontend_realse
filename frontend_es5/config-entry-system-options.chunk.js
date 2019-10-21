(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["config-entry-system-options"],{

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

/***/ "./src/components/ha-switch.ts":
/*!*************************************!*\
  !*** ./src/components/ha-switch.ts ***!
  \*************************************/
/*! exports provided: HaSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaSwitch", function() { return HaSwitch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-switch */ "./node_modules/@material/mwc-switch/mwc-switch.js");
/* harmony import */ var _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-switch/mwc-switch-css */ "./node_modules/@material/mwc-switch/mwc-switch-css.js");




// tslint:disable-next-line
var MwcSwitch = customElements.get("mwc-switch");
var HaSwitch = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaSwitch, _super);
    function HaSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaSwitch.prototype.firstUpdated = function () {
        _super.prototype.firstUpdated.call(this);
        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
        this.classList.toggle("slotted", Boolean(this._slot.assignedNodes().length));
    };
    Object.defineProperty(HaSwitch, "styles", {
        get: function () {
            return [
                _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_3__["style"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--paper-toggle-button-unchecked-button-color);\n          border-color: var(--paper-toggle-button-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--paper-toggle-button-unchecked-bar-color);\n          border-color: var(--paper-toggle-button-unchecked-bar-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      "], ["\n        :host {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {\n          background-color: var(--paper-toggle-button-unchecked-button-color);\n          border-color: var(--paper-toggle-button-unchecked-button-color);\n        }\n        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {\n          background-color: var(--paper-toggle-button-unchecked-bar-color);\n          border-color: var(--paper-toggle-button-unchecked-bar-color);\n        }\n        :host(.slotted) .mdc-switch {\n          margin-right: 24px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("slot")
    ], HaSwitch.prototype, "_slot", void 0);
    HaSwitch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-switch")
    ], HaSwitch);
    return HaSwitch;
}(MwcSwitch));

var templateObject_1;


/***/ }),

/***/ "./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts":
/*!***************************************************************************************!*\
  !*** ./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");








var DialogConfigEntrySystemOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogConfigEntrySystemOptions, _super);
    function DialogConfigEntrySystemOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogConfigEntrySystemOptions.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var systemOptions;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._params = params;
                        this._error = undefined;
                        this._loading = true;
                        return [4 /*yield*/, Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_6__["getConfigEntrySystemOptions"])(this.hass, params.entry.entry_id)];
                    case 1:
                        systemOptions = _a.sent();
                        this._loading = false;
                        this._disableNewEntities = systemOptions.disable_new_entities;
                        return [4 /*yield*/, this.updateComplete];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogConfigEntrySystemOptions.prototype.render = function () {
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=\"", "\"\n      >\n        <h2>\n          ", "\n        </h2>\n        <paper-dialog-scrollable>\n          ", "\n        </paper-dialog-scrollable>\n        ", "\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=\"", "\"\n      >\n        <h2>\n          ", "\n        </h2>\n        <paper-dialog-scrollable>\n          ",
            "\n        </paper-dialog-scrollable>\n        ",
            "\n      </ha-paper-dialog>\n    "])), this._openedChanged, this.hass.localize("ui.dialogs.config_entry_system_options.title"), this._loading
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"init-spinner\">\n                  <paper-spinner-lite active></paper-spinner-lite>\n                </div>\n              "], ["\n                <div class=\"init-spinner\">\n                  <paper-spinner-lite active></paper-spinner-lite>\n                </div>\n              "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                ", "\n                <div class=\"form\">\n                  <ha-switch\n                    .checked=", "\n                    @change=", "\n                    .disabled=", "\n                  >\n                    <div>\n                      <p>\n                        ", "\n                      </p>\n                      <p class=\"secondary\">\n                        ", "\n                      </p>\n                    </div>\n                  </ha-switch>\n                </div>\n              "], ["\n                ",
            "\n                <div class=\"form\">\n                  <ha-switch\n                    .checked=", "\n                    @change=", "\n                    .disabled=", "\n                  >\n                    <div>\n                      <p>\n                        ",
            "\n                      </p>\n                      <p class=\"secondary\">\n                        ",
            "\n                      </p>\n                    </div>\n                  </ha-switch>\n                </div>\n              "])), this._error
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"error\">", "</div>\n                    "], ["\n                      <div class=\"error\">", "</div>\n                    "])), this._error) : "", !this._disableNewEntities, this._disableNewEntitiesChanged, this._submitting, this.hass.localize("ui.dialogs.config_entry_system_options.enable_new_entities_label"), this.hass.localize("ui.dialogs.config_entry_system_options.enable_new_entities_description")), !this._loading
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"paper-dialog-buttons\">\n                <mwc-button\n                  @click=\"", "\"\n                  .disabled=", "\n                >\n                  ", "\n                </mwc-button>\n              </div>\n            "], ["\n              <div class=\"paper-dialog-buttons\">\n                <mwc-button\n                  @click=\"", "\"\n                  .disabled=", "\n                >\n                  ",
                "\n                </mwc-button>\n              </div>\n            "])), this._updateEntry, this._submitting, this.hass.localize("ui.panel.config.entity_registry.editor.update")) : "");
    };
    DialogConfigEntrySystemOptions.prototype._disableNewEntitiesChanged = function (ev) {
        this._error = undefined;
        this._disableNewEntities = !ev.target.checked;
    };
    DialogConfigEntrySystemOptions.prototype._updateEntry = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._submitting = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_6__["updateConfigEntrySystemOptions"])(this.hass, this._params.entry.entry_id, {
                                disable_new_entities: this._disableNewEntities,
                            })];
                    case 2:
                        _a.sent();
                        this._params = undefined;
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        this._error = err_1.message || "Unknown error";
                        return [3 /*break*/, 5];
                    case 4:
                        this._submitting = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DialogConfigEntrySystemOptions.prototype._openedChanged = function (ev) {
        if (!ev.detail.value) {
            this._params = undefined;
        }
    };
    Object.defineProperty(DialogConfigEntrySystemOptions, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_7__["haStyleDialog"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ha-paper-dialog {\n          min-width: 400px;\n          max-width: 500px;\n        }\n        .init-spinner {\n          padding: 50px 100px;\n          text-align: center;\n        }\n\n        .form {\n          padding-top: 6px;\n          padding-bottom: 24px;\n          color: var(--primary-text-color);\n        }\n        p {\n          margin: 0;\n        }\n        .secondary {\n          color: var(--secondary-text-color);\n        }\n\n        .error {\n          color: var(--google-red-500);\n        }\n      "], ["\n        ha-paper-dialog {\n          min-width: 400px;\n          max-width: 500px;\n        }\n        .init-spinner {\n          padding: 50px 100px;\n          text-align: center;\n        }\n\n        .form {\n          padding-top: 6px;\n          padding-bottom: 24px;\n          color: var(--primary-text-color);\n        }\n        p {\n          margin: 0;\n        }\n        .secondary {\n          color: var(--secondary-text-color);\n        }\n\n        .error {\n          color: var(--google-red-500);\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogConfigEntrySystemOptions.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogConfigEntrySystemOptions.prototype, "_disableNewEntities", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogConfigEntrySystemOptions.prototype, "_error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogConfigEntrySystemOptions.prototype, "_params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogConfigEntrySystemOptions.prototype, "_loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogConfigEntrySystemOptions.prototype, "_submitting", void 0);
    DialogConfigEntrySystemOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("dialog-config-entry-system-options")
    ], DialogConfigEntrySystemOptions);
    return DialogConfigEntrySystemOptions;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zd2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zL2RpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgY3VzdG9tRWxlbWVudCwgQ1NTUmVzdWx0LCBjc3MsIHF1ZXJ5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1zd2l0Y2gvbXdjLXN3aXRjaC1jc3NcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IE13Y1N3aXRjaCA9IGN1c3RvbUVsZW1lbnRzLmdldChcIm13Yy1zd2l0Y2hcIikgYXMgQ29uc3RydWN0b3I8U3dpdGNoPjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zd2l0Y2hcIilcbmV4cG9ydCBjbGFzcyBIYVN3aXRjaCBleHRlbmRzIE13Y1N3aXRjaCB7XG4gIEBxdWVyeShcInNsb3RcIikgcHJpdmF0ZSBfc2xvdCE6IEhUTUxTbG90RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW1kYy10aGVtZS1zZWNvbmRhcnlcIiwgXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcInNsb3R0ZWRcIixcbiAgICAgIEJvb2xlYW4odGhpcy5fc2xvdC5hc3NpZ25lZE5vZGVzKCkubGVuZ3RoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190cmFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLnNsb3R0ZWQpIC5tZGMtc3dpdGNoIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc3dpdGNoXCI6IEhhU3dpdGNoO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc1wiO1xuaW1wb3J0IHtcbiAgZ2V0Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zLFxuICB1cGRhdGVDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMsXG59IGZyb20gXCIuLi8uLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zXCIpXG5jbGFzcyBEaWFsb2dDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kaXNhYmxlTmV3RW50aXRpZXMhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nUGFyYW1zO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2FkaW5nPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3VibWl0dGluZz86IGJvb2xlYW47XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coXG4gICAgcGFyYW1zOiBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2dQYXJhbXNcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IHN5c3RlbU9wdGlvbnMgPSBhd2FpdCBnZXRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBwYXJhbXMuZW50cnkuZW50cnlfaWRcbiAgICApO1xuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9kaXNhYmxlTmV3RW50aXRpZXMgPSBzeXN0ZW1PcHRpb25zLmRpc2FibGVfbmV3X2VudGl0aWVzO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIHdpdGgtYmFja2Ryb3BcbiAgICAgICAgb3BlbmVkXG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD1cIiR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cIlxuICAgICAgPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5kaWFsb2dzLmNvbmZpZ19lbnRyeV9zeXN0ZW1fb3B0aW9ucy50aXRsZVwiKX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICR7dGhpcy5fbG9hZGluZ1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbml0LXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlPjwvcGFwZXItc3Bpbm5lci1saXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgJHt0aGlzLl9lcnJvclxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0keyF0aGlzLl9kaXNhYmxlTmV3RW50aXRpZXN9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9kaXNhYmxlTmV3RW50aXRpZXNDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5jb25maWdfZW50cnlfc3lzdGVtX29wdGlvbnMuZW5hYmxlX25ld19lbnRpdGllc19sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5jb25maWdfZW50cnlfc3lzdGVtX29wdGlvbnMuZW5hYmxlX25ld19lbnRpdGllc19kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgJHshdGhpcy5fbG9hZGluZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fdXBkYXRlRW50cnl9XCJcbiAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3N1Ym1pdHRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmVudGl0eV9yZWdpc3RyeS5lZGl0b3IudXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzYWJsZU5ld0VudGl0aWVzQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9kaXNhYmxlTmV3RW50aXRpZXMgPSAhKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudHJ5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3N1Ym1pdHRpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5fcGFyYW1zIS5lbnRyeS5lbnRyeV9pZCxcbiAgICAgICAge1xuICAgICAgICAgIGRpc2FibGVfbmV3X2VudGl0aWVzOiB0aGlzLl9kaXNhYmxlTmV3RW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvciA9IGVyci5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwiO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIGlmICghKGV2LmRldGFpbCBhcyBhbnkpLnZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW5pdC1zcGlubmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICAuc2Vjb25kYXJ5IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIjogRGlhbG9nQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7QUFHQTtBQUVBO0FBRUE7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFBQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQUE7QUFBQTs7QUFtQ0E7QUFoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFrQkE7QUFDQTs7O0FBQUE7QUFqQ0E7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBbUNBO0FBQUE7QUFuQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUtBO0FBS0E7QUFBQTtBQUFBOztBQXNKQTtBQTlJQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFJQTtBQUNBO0FBQ0E7O0FBQUE7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMENBO0FBZUE7QUE5Q0E7QUFVQTtBQVdBO0FBS0E7QUFuQkE7QUEyQkE7QUFRQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7Ozs7QUFFQTtBQUlBO0FBQ0E7O0FBTEE7QUFPQTs7OztBQUVBOzs7QUFFQTs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTBCQTtBQUNBOzs7QUFBQTtBQXBKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUFzSkE7QUFBQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=