(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-edit-view"],{

/***/ "./src/common/string/slugify.ts":
/*!**************************************!*\
  !*** ./src/common/string/slugify.ts ***!
  \**************************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
// https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
var slugify = function (value) {
    var a = "àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;";
    var b = "aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------";
    var p = new RegExp(a.split("").join("|"), "g");
    return value
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, function (c) { return b.charAt(a.indexOf(c)); }) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};


/***/ }),

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

/***/ "./src/panels/lovelace/editor/view-editor/hui-dialog-edit-view.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-dialog-edit-view.ts ***!
  \************************************************************************/
/*! exports provided: HuiDialogEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogEditView", function() { return HuiDialogEditView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _hui_edit_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-edit-view */ "./src/panels/lovelace/editor/view-editor/hui-edit-view.ts");



var HuiDialogEditView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiDialogEditView, _super);
    function HuiDialogEditView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiDialogEditView.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._params = params;
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.shadowRoot.children[0].showDialog();
                        return [2 /*return*/];
                }
            });
        });
    };
    HuiDialogEditView.prototype.render = function () {
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hui-edit-view\n        .hass=\"", "\"\n        .lovelace=\"", "\"\n        .viewIndex=\"", "\"\n      >\n      </hui-edit-view>\n    "], ["\n      <hui-edit-view\n        .hass=\"", "\"\n        .lovelace=\"", "\"\n        .viewIndex=\"", "\"\n      >\n      </hui-edit-view>\n    "])), this.hass, this._params.lovelace, this._params.viewIndex);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditView.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogEditView.prototype, "_params", void 0);
    HuiDialogEditView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-dialog-edit-view")
    ], HuiDialogEditView);
    return HuiDialogEditView;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/hui-edit-view.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-edit-view.ts ***!
  \*****************************************************************/
/*! exports provided: HuiEditView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEditView", function() { return HuiEditView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button.js */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_hui_entity_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/hui-entity-editor */ "./src/panels/lovelace/components/hui-entity-editor.ts");
/* harmony import */ var _hui_view_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hui-view-editor */ "./src/panels/lovelace/editor/view-editor/hui-view-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _process_editor_entities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../process-editor-entities */ "./src/panels/lovelace/editor/process-editor-entities.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config-util */ "./src/panels/lovelace/editor/config-util.ts");
















var HuiEditView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiEditView, _super);
    function HuiEditView() {
        var _this = _super.call(this) || this;
        _this._saving = false;
        _this._curTabIndex = 0;
        return _this;
    }
    HuiEditView.prototype.showDialog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, cards, badges, viewConfig;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this._dialog == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        if (this.viewIndex === undefined) {
                            this._config = {};
                            this._badges = [];
                            this._cards = [];
                        }
                        else {
                            _a = this.lovelace.config.views[this.viewIndex], cards = _a.cards, badges = _a.badges, viewConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["cards", "badges"]);
                            this._config = viewConfig;
                            this._badges = badges ? Object(_process_editor_entities__WEBPACK_IMPORTED_MODULE_13__["processEditorEntities"])(badges) : [];
                            this._cards = cards;
                        }
                        this._dialog.open();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HuiEditView.prototype, "_dialog", {
        get: function () {
            return this.shadowRoot.querySelector("ha-paper-dialog");
        },
        enumerable: true,
        configurable: true
    });
    HuiEditView.prototype.render = function () {
        var content;
        switch (this._curTab) {
            case "tab-settings":
                content = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <hui-view-editor\n            .isNew=", "\n            .hass=\"", "\"\n            .config=\"", "\"\n            @view-config-changed=\"", "\"\n          ></hui-view-editor>\n        "], ["\n          <hui-view-editor\n            .isNew=", "\n            .hass=\"", "\"\n            .config=\"", "\"\n            @view-config-changed=\"", "\"\n          ></hui-view-editor>\n        "])), this.viewIndex === undefined, this.hass, this._config, this._viewConfigChanged);
                break;
            case "tab-badges":
                content = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <hui-entity-editor\n            .hass=\"", "\"\n            .entities=\"", "\"\n            @entities-changed=\"", "\"\n          ></hui-entity-editor>\n        "], ["\n          <hui-entity-editor\n            .hass=\"", "\"\n            .entities=\"", "\"\n            @entities-changed=\"", "\"\n          ></hui-entity-editor>\n        "])), this.hass, this._badges, this._badgesChanged);
                break;
            case "tab-cards":
                content = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          Cards\n        "], ["\n          Cards\n        "])));
                break;
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog with-backdrop>\n        <h2>\n          ", "\n        </h2>\n        <paper-tabs\n          scrollable\n          hide-scroll-buttons\n          .selected=\"", "\"\n          @selected-item-changed=\"", "\"\n        >\n          <paper-tab id=\"tab-settings\">Settings</paper-tab>\n          <paper-tab id=\"tab-badges\">Badges</paper-tab>\n        </paper-tabs>\n        <paper-dialog-scrollable> ", " </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          ", "\n          <mwc-button @click=\"", "\"\n            >", "</mwc-button\n          >\n          <mwc-button\n            ?disabled=\"", "\"\n            @click=\"", "\"\n          >\n            <paper-spinner\n              ?active=\"", "\"\n              alt=\"Saving\"\n            ></paper-spinner>\n            ", "</mwc-button\n          >\n        </div>\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog with-backdrop>\n        <h2>\n          ", "\n        </h2>\n        <paper-tabs\n          scrollable\n          hide-scroll-buttons\n          .selected=\"", "\"\n          @selected-item-changed=\"", "\"\n        >\n          <paper-tab id=\"tab-settings\">Settings</paper-tab>\n          <paper-tab id=\"tab-badges\">Badges</paper-tab>\n        </paper-tabs>\n        <paper-dialog-scrollable> ", " </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          ",
            "\n          <mwc-button @click=\"", "\"\n            >", "</mwc-button\n          >\n          <mwc-button\n            ?disabled=\"", "\"\n            @click=\"", "\"\n          >\n            <paper-spinner\n              ?active=\"", "\"\n              alt=\"Saving\"\n            ></paper-spinner>\n            ", "</mwc-button\n          >\n        </div>\n      </ha-paper-dialog>\n    "])), this.hass.localize("ui.panel.lovelace.editor.edit_view.header"), this._curTabIndex, this._handleTabSelected, content, this.viewIndex !== undefined
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  class=\"delete\"\n                  title=\"Delete\"\n                  icon=\"hass:delete\"\n                  @click=\"", "\"\n                ></paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  class=\"delete\"\n                  title=\"Delete\"\n                  icon=\"hass:delete\"\n                  @click=\"", "\"\n                ></paper-icon-button>\n              "])), this._delete) : "", this._closeDialog, this.hass.localize("ui.common.cancel"), !this._config || this._saving, this._save, this._saving, this.hass.localize("ui.common.save"));
    };
    HuiEditView.prototype._delete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._cards && this._cards.length > 0) {
                            alert("You can't delete a view that has cards in it. Remove the cards first.");
                            return [2 /*return*/];
                        }
                        if (!confirm("Are you sure you want to delete this view?")) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.lovelace.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_15__["deleteView"])(this.lovelace.config, this.viewIndex))];
                    case 2:
                        _a.sent();
                        this._closeDialog();
                        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_14__["navigate"])(this, "/lovelace/0");
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        alert("Deleting failed: " + err_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HuiEditView.prototype._resizeDialog = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this._dialog, "iron-resize");
                        return [2 /*return*/];
                }
            });
        });
    };
    HuiEditView.prototype._closeDialog = function () {
        this._curTabIndex = 0;
        this.lovelace = undefined;
        this._config = {};
        this._badges = [];
        this._dialog.close();
    };
    HuiEditView.prototype._handleTabSelected = function (ev) {
        if (!ev.detail.value) {
            return;
        }
        this._curTab = ev.detail.value.id;
        this._resizeDialog();
    };
    HuiEditView.prototype._save = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var viewConf, lovelace, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._config) {
                            return [2 /*return*/];
                        }
                        if (!this._isConfigChanged()) {
                            this._closeDialog();
                            return [2 /*return*/];
                        }
                        this._saving = true;
                        viewConf = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), { badges: this._badges.map(function (entityConf) { return entityConf.entity; }), cards: this._cards });
                        lovelace = this.lovelace;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, lovelace.saveConfig(this._creatingView
                                ? Object(_config_util__WEBPACK_IMPORTED_MODULE_15__["addView"])(lovelace.config, viewConf)
                                : Object(_config_util__WEBPACK_IMPORTED_MODULE_15__["replaceView"])(lovelace.config, this.viewIndex, viewConf))];
                    case 2:
                        _a.sent();
                        this._closeDialog();
                        return [3 /*break*/, 5];
                    case 3:
                        err_2 = _a.sent();
                        alert("Saving failed: " + err_2.message);
                        return [3 /*break*/, 5];
                    case 4:
                        this._saving = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HuiEditView.prototype._viewConfigChanged = function (ev) {
        if (ev.detail && ev.detail.config) {
            this._config = ev.detail.config;
        }
    };
    HuiEditView.prototype._badgesChanged = function (ev) {
        if (!this._badges || !this.hass || !ev.detail || !ev.detail.entities) {
            return;
        }
        this._badges = ev.detail.entities;
    };
    HuiEditView.prototype._isConfigChanged = function () {
        return (this._creatingView ||
            JSON.stringify(this._config) !==
                JSON.stringify(this.lovelace.config.views[this.viewIndex]));
    };
    Object.defineProperty(HuiEditView.prototype, "_creatingView", {
        get: function () {
            return this.viewIndex === undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiEditView, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyleDialog"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 650px;\n          }\n        }\n        ha-paper-dialog {\n          max-width: 650px;\n        }\n        paper-tabs {\n          --paper-tabs-selection-bar-color: var(--primary-color);\n          text-transform: uppercase;\n          border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        }\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n        paper-icon-button.delete {\n          margin-right: auto;\n          color: var(--secondary-text-color);\n        }\n        paper-spinner {\n          display: none;\n        }\n        paper-spinner[active] {\n          display: block;\n        }\n        .hidden {\n          display: none;\n        }\n        .error {\n          color: #ef5350;\n          border-bottom: 1px solid #ef5350;\n        }\n      </style>\n    "], ["\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          /* overrule the ha-style-dialog max-height on small screens */\n          ha-paper-dialog {\n            max-height: 100%;\n            height: 100%;\n          }\n        }\n        @media all and (min-width: 660px) {\n          ha-paper-dialog {\n            width: 650px;\n          }\n        }\n        ha-paper-dialog {\n          max-width: 650px;\n        }\n        paper-tabs {\n          --paper-tabs-selection-bar-color: var(--primary-color);\n          text-transform: uppercase;\n          border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n        }\n        mwc-button paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n        paper-icon-button.delete {\n          margin-right: auto;\n          color: var(--secondary-text-color);\n        }\n        paper-spinner {\n          display: none;\n        }\n        paper-spinner[active] {\n          display: block;\n        }\n        .hidden {\n          display: none;\n        }\n        .error {\n          color: #ef5350;\n          border-bottom: 1px solid #ef5350;\n        }\n      </style>\n    "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "lovelace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "viewIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "_config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "_badges", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "_cards", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "_saving", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiEditView.prototype, "_curTab", void 0);
    HuiEditView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-edit-view")
    ], HuiEditView);
    return HuiEditView;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/hui-view-editor.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/hui-view-editor.ts ***!
  \*******************************************************************/
/*! exports provided: HuiViewEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiViewEditor", function() { return HuiViewEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-elements/config-elements-style */ "./src/panels/lovelace/editor/config-elements/config-elements-style.ts");
/* harmony import */ var _common_string_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/string/slugify */ "./src/common/string/slugify.ts");
/* harmony import */ var _components_hui_theme_select_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hui-theme-select-editor */ "./src/panels/lovelace/components/hui-theme-select-editor.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");








var HuiViewEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiViewEditor, _super);
    function HuiViewEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._suggestedPath = false;
        return _this;
    }
    Object.defineProperty(HuiViewEditor.prototype, "_path", {
        get: function () {
            if (!this._config) {
                return "";
            }
            return this._config.path || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiViewEditor.prototype, "_title", {
        get: function () {
            if (!this._config) {
                return "";
            }
            return this._config.title || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiViewEditor.prototype, "_icon", {
        get: function () {
            if (!this._config) {
                return "";
            }
            return this._config.icon || "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiViewEditor.prototype, "_theme", {
        get: function () {
            if (!this._config) {
                return "";
            }
            return this._config.theme || "Backend-selected";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiViewEditor.prototype, "_panel", {
        get: function () {
            if (!this._config) {
                return false;
            }
            return this._config.panel || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HuiViewEditor.prototype, "config", {
        set: function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    HuiViewEditor.prototype.render = function () {
        if (!this.hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div class=\"card-config\">\n        <paper-input\n          label=\"Title\"\n          .value=", "\n          .configValue=", "\n          @value-changed=", "\n          @blur=", "\n        ></paper-input>\n        <paper-input\n          label=\"Icon\"\n          .value=", "\n          .configValue=", "\n          @value-changed=", "\n        ></paper-input>\n        <paper-input\n          label=\"URL Path\"\n          .value=", "\n          .configValue=", "\n          @value-changed=", "\n        ></paper-input>\n        <hui-theme-select-editor\n          .hass=", "\n          .value=", "\n          .configValue=", "\n          @theme-changed=", "\n        ></hui-theme-select-editor>\n        <ha-switch\n          ?checked=", "\n          .configValue=", "\n          @change=", "\n          >Panel Mode?</ha-switch\n        >\n      </div>\n    "], ["\n      ", "\n      <div class=\"card-config\">\n        <paper-input\n          label=\"Title\"\n          .value=", "\n          .configValue=", "\n          @value-changed=", "\n          @blur=", "\n        ></paper-input>\n        <paper-input\n          label=\"Icon\"\n          .value=", "\n          .configValue=", "\n          @value-changed=", "\n        ></paper-input>\n        <paper-input\n          label=\"URL Path\"\n          .value=", "\n          .configValue=", "\n          @value-changed=", "\n        ></paper-input>\n        <hui-theme-select-editor\n          .hass=", "\n          .value=", "\n          .configValue=", "\n          @theme-changed=", "\n        ></hui-theme-select-editor>\n        <ha-switch\n          ?checked=", "\n          .configValue=", "\n          @change=", "\n          >Panel Mode?</ha-switch\n        >\n      </div>\n    "])), _config_elements_config_elements_style__WEBPACK_IMPORTED_MODULE_4__["configElementStyle"], this._title, "title", this._valueChanged, this._handleTitleBlur, this._icon, "icon", this._valueChanged, this._path, "path", this._valueChanged, this.hass, this._theme, "theme", this._valueChanged, this._panel !== false, "panel", this._valueChanged);
    };
    HuiViewEditor.prototype._valueChanged = function (ev) {
        var _a;
        var target = ev.currentTarget;
        if (this["_" + target.configValue] === target.value) {
            return;
        }
        var newConfig;
        if (target.configValue) {
            newConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), (_a = {}, _a[target.configValue] = target.checked !== undefined ? target.checked : target.value, _a));
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "view-config-changed", { config: newConfig });
    };
    HuiViewEditor.prototype._handleTitleBlur = function (ev) {
        if (!this.isNew ||
            this._suggestedPath ||
            this._config.path ||
            !ev.currentTarget.value) {
            return;
        }
        var config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._config), { path: Object(_common_string_slugify__WEBPACK_IMPORTED_MODULE_5__["slugify"])(ev.currentTarget.value) });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "view-config-changed", { config: config });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiViewEditor.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiViewEditor.prototype, "isNew", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiViewEditor.prototype, "_config", void 0);
    HuiViewEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-view-editor")
    ], HuiViewEditor);
    return HuiViewEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1lZGl0LXZpZXcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9zbHVnaWZ5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3Byb2Nlc3MtZWRpdG9yLWVudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3ZpZXctZWRpdG9yL2h1aS1kaWFsb2ctZWRpdC12aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3ZpZXctZWRpdG9yL2h1aS1lZGl0LXZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3Ivdmlldy1lZGl0b3IvaHVpLXZpZXctZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2hhZ2VtYW5uLzM4MmFkZmM1N2FkYmQ1YWYwNzhkYzkzZmVlZjAxZmUxXG5leHBvcnQgY29uc3Qgc2x1Z2lmeSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGEgPVxuICAgIFwiw6DDocOkw6LDo8OlxIPDpsSFw6fEh8SNxJHEj8Oow6nEm8SXw6vDqsSZxJ/HteG4p8Osw63Dr8OuxK/FguG4v8e5xYTFiMOxw7LDs8O2w7TFk8O44bmVxZXFmcOfxZ/Fm8WhyJnFpcibw7nDusO8w7vHmMWvxbHFq8Wz4bqD4bqNw7/DvcW6xb7FvMK3L18sOjtcIjtcbiAgY29uc3QgYiA9XG4gICAgXCJhYWFhYWFhYWFjY2NkZGVlZWVlZWVnZ2hpaWlpaWxtbm5ubm9vb29vb3BycnNzc3NzdHR1dXV1dXV1dXV3eHl5enp6LS0tLS0tXCI7XG4gIGNvbnN0IHAgPSBuZXcgUmVnRXhwKGEuc3BsaXQoXCJcIikuam9pbihcInxcIiksIFwiZ1wiKTtcblxuICByZXR1cm4gdmFsdWVcbiAgICAudG9TdHJpbmcoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCItXCIpIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggLVxuICAgIC5yZXBsYWNlKHAsIChjKSA9PiBiLmNoYXJBdChhLmluZGV4T2YoYykpKSAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgIC5yZXBsYWNlKC8mL2csIFwiLWFuZC1cIikgLy8gUmVwbGFjZSAmIHdpdGggJ2FuZCdcbiAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCBcIlwiKSAvLyBSZW1vdmUgYWxsIG5vbi13b3JkIGNoYXJhY3RlcnNcbiAgICAucmVwbGFjZSgvXFwtXFwtKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cbiAgICAucmVwbGFjZSgvXi0rLywgXCJcIikgLy8gVHJpbSAtIGZyb20gc3RhcnQgb2YgdGV4dFxuICAgIC5yZXBsYWNlKC8tKyQvLCBcIlwiKTsgLy8gVHJpbSAtIGZyb20gZW5kIG9mIHRleHRcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50LCBIQVNTRG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwidGhlbWUtY2hhbmdlZFwiOiB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gZm9yIGFkZCBldmVudCBsaXN0ZW5lclxuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRFdmVudE1hcCB7XG4gICAgXCJ0aGVtZS1jaGFuZ2VkXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlUaGVtZVNlbGVjdEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCB0aGVtZXMgPSBbXCJCYWNrZW5kLXNlbGVjdGVkXCIsIFwiZGVmYXVsdFwiXS5jb25jYXQoXG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmhhc3MhLnRoZW1lcy50aGVtZXMpLnNvcnQoKVxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWwgfHxcbiAgICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmNhcmQuZ2VuZXJpYy50aGVtZVwiKSArXG4gICAgICAgICAgICBcIiAoXCIgK1xuICAgICAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuY2FyZC5jb25maWcub3B0aW9uYWxcIlxuICAgICAgICAgICAgKSArXG4gICAgICAgICAgICBcIilcIn1cbiAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICBAdmFsdWUtY2hhbmdlZD1cIiR7dGhpcy5fY2hhbmdlZH1cIlxuICAgICAgPlxuICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9XCIke3RoaXMudmFsdWV9XCJcbiAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cInRoZW1lXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhlbWVzLm1hcCgodGhlbWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSB0aGVtZT1cIiR7dGhlbWV9XCI+JHt0aGVtZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hhbmdlZChldik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8IGV2LnRhcmdldC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInRoZW1lLWNoYW5nZWRcIik7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS10aGVtZS1zZWxlY3QtZWRpdG9yXCI6IEh1aVRoZW1lU2VsZWN0RWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFbnRpdHlDb25maWcgfSBmcm9tIFwiLi4vZW50aXR5LXJvd3MvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NFZGl0b3JFbnRpdGllcyhlbnRpdGllcyk6IEVudGl0eUNvbmZpZ1tdIHtcbiAgcmV0dXJuIGVudGl0aWVzLm1hcCgoZW50aXR5Q29uZikgPT4ge1xuICAgIGlmICh0eXBlb2YgZW50aXR5Q29uZiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHsgZW50aXR5OiBlbnRpdHlDb25mIH07XG4gICAgfVxuICAgIHJldHVybiBlbnRpdHlDb25mO1xuICB9KTtcbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCBcIi4vaHVpLWVkaXQtdmlld1wiO1xuaW1wb3J0IHsgRWRpdFZpZXdEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWVkaXQtdmlldy1kaWFsb2dcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtbG92ZWxhY2VcIjogdW5kZWZpbmVkO1xuICB9XG4gIC8vIGZvciBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50RXZlbnRNYXAge1xuICAgIFwicmVsb2FkLWxvdmVsYWNlXCI6IEhBU1NEb21FdmVudDx1bmRlZmluZWQ+O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWRpYWxvZy1lZGl0LXZpZXdcIilcbmV4cG9ydCBjbGFzcyBIdWlEaWFsb2dFZGl0VmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcm90ZWN0ZWQgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRWRpdFZpZXdEaWFsb2dQYXJhbXM7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBFZGl0Vmlld0RpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgICh0aGlzLnNoYWRvd1Jvb3QhLmNoaWxkcmVuWzBdIGFzIGFueSkuc2hvd0RpYWxvZygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxodWktZWRpdC12aWV3XG4gICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgLmxvdmVsYWNlPVwiJHt0aGlzLl9wYXJhbXMubG92ZWxhY2V9XCJcbiAgICAgICAgLnZpZXdJbmRleD1cIiR7dGhpcy5fcGFyYW1zLnZpZXdJbmRleH1cIlxuICAgICAgPlxuICAgICAgPC9odWktZWRpdC12aWV3PlxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1kaWFsb2ctZWRpdC12aWV3XCI6IEh1aURpYWxvZ0VkaXRWaWV3O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBjc3MsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYlwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvbi5qc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhUGFwZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcblxuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaHVpLWVudGl0eS1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaHVpLXZpZXctZWRpdG9yXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBMb3ZlbGFjZVZpZXdDb25maWcsXG4gIExvdmVsYWNlQ2FyZENvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVudGl0aWVzRWRpdG9yRXZlbnQsIFZpZXdFZGl0RXZlbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHByb2Nlc3NFZGl0b3JFbnRpdGllcyB9IGZyb20gXCIuLi9wcm9jZXNzLWVkaXRvci1lbnRpdGllc1wiO1xuaW1wb3J0IHsgRW50aXR5Q29uZmlnIH0gZnJvbSBcIi4uLy4uL2VudGl0eS1yb3dzL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBkZWxldGVWaWV3LCBhZGRWaWV3LCByZXBsYWNlVmlldyB9IGZyb20gXCIuLi9jb25maWctdXRpbFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1lZGl0LXZpZXdcIilcbmV4cG9ydCBjbGFzcyBIdWlFZGl0VmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgdmlld0luZGV4PzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWc/OiBMb3ZlbGFjZVZpZXdDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYmFkZ2VzPzogRW50aXR5Q29uZmlnW107XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FyZHM/OiBMb3ZlbGFjZUNhcmRDb25maWdbXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zYXZpbmc6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY3VyVGFiPzogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2N1clRhYkluZGV4OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY3VyVGFiSW5kZXggPSAwO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gV2FpdCB0aWxsIGRpYWxvZyBpcyByZW5kZXJlZC5cbiAgICBpZiAodGhpcy5fZGlhbG9nID09IG51bGwpIHtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld0luZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IHt9O1xuICAgICAgdGhpcy5fYmFkZ2VzID0gW107XG4gICAgICB0aGlzLl9jYXJkcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNhcmRzLCBiYWRnZXMsIC4uLnZpZXdDb25maWcgfSA9IHRoaXMubG92ZWxhY2UhLmNvbmZpZy52aWV3c1tcbiAgICAgICAgdGhpcy52aWV3SW5kZXhcbiAgICAgIF07XG4gICAgICB0aGlzLl9jb25maWcgPSB2aWV3Q29uZmlnO1xuICAgICAgdGhpcy5fYmFkZ2VzID0gYmFkZ2VzID8gcHJvY2Vzc0VkaXRvckVudGl0aWVzKGJhZGdlcykgOiBbXTtcbiAgICAgIHRoaXMuX2NhcmRzID0gY2FyZHM7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlhbG9nLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogSGFQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgbGV0IGNvbnRlbnQ7XG4gICAgc3dpdGNoICh0aGlzLl9jdXJUYWIpIHtcbiAgICAgIGNhc2UgXCJ0YWItc2V0dGluZ3NcIjpcbiAgICAgICAgY29udGVudCA9IGh0bWxgXG4gICAgICAgICAgPGh1aS12aWV3LWVkaXRvclxuICAgICAgICAgICAgLmlzTmV3PSR7dGhpcy52aWV3SW5kZXggPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5jb25maWc9XCIke3RoaXMuX2NvbmZpZ31cIlxuICAgICAgICAgICAgQHZpZXctY29uZmlnLWNoYW5nZWQ9XCIke3RoaXMuX3ZpZXdDb25maWdDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLXZpZXctZWRpdG9yPlxuICAgICAgICBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0YWItYmFkZ2VzXCI6XG4gICAgICAgIGNvbnRlbnQgPSBodG1sYFxuICAgICAgICAgIDxodWktZW50aXR5LWVkaXRvclxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmVudGl0aWVzPVwiJHt0aGlzLl9iYWRnZXN9XCJcbiAgICAgICAgICAgIEBlbnRpdGllcy1jaGFuZ2VkPVwiJHt0aGlzLl9iYWRnZXNDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaHVpLWVudGl0eS1lZGl0b3I+XG4gICAgICAgIGA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRhYi1jYXJkc1wiOlxuICAgICAgICBjb250ZW50ID0gaHRtbGBcbiAgICAgICAgICBDYXJkc1xuICAgICAgICBgO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nIHdpdGgtYmFja2Ryb3A+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF92aWV3LmhlYWRlclwiKX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLXRhYnNcbiAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgaGlkZS1zY3JvbGwtYnV0dG9uc1xuICAgICAgICAgIC5zZWxlY3RlZD1cIiR7dGhpcy5fY3VyVGFiSW5kZXh9XCJcbiAgICAgICAgICBAc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkPVwiJHt0aGlzLl9oYW5kbGVUYWJTZWxlY3RlZH1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXRhYiBpZD1cInRhYi1zZXR0aW5nc1wiPlNldHRpbmdzPC9wYXBlci10YWI+XG4gICAgICAgICAgPHBhcGVyLXRhYiBpZD1cInRhYi1iYWRnZXNcIj5CYWRnZXM8L3BhcGVyLXRhYj5cbiAgICAgICAgPC9wYXBlci10YWJzPlxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+ICR7Y29udGVudH0gPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhcGVyLWRpYWxvZy1idXR0b25zXCI+XG4gICAgICAgICAgJHt0aGlzLnZpZXdJbmRleCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9kZWxldGV9XCJcbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fY2xvc2VEaWFsb2d9XCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uY2FuY2VsXCIpfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHshdGhpcy5fY29uZmlnIHx8IHRoaXMuX3NhdmluZ31cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9zYXZlfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgP2FjdGl2ZT1cIiR7dGhpcy5fc2F2aW5nfVwiXG4gICAgICAgICAgICAgIGFsdD1cIlNhdmluZ1wiXG4gICAgICAgICAgICA+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnNhdmVcIil9PC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kZWxldGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuX2NhcmRzICYmIHRoaXMuX2NhcmRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBcIllvdSBjYW4ndCBkZWxldGUgYSB2aWV3IHRoYXQgaGFzIGNhcmRzIGluIGl0LiBSZW1vdmUgdGhlIGNhcmRzIGZpcnN0LlwiXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB2aWV3P1wiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmxvdmVsYWNlIS5zYXZlQ29uZmlnKFxuICAgICAgICBkZWxldGVWaWV3KHRoaXMubG92ZWxhY2UhLmNvbmZpZywgdGhpcy52aWV3SW5kZXghKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBgL2xvdmVsYWNlLzBgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBEZWxldGluZyBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVzaXplRGlhbG9nKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgZmlyZUV2ZW50KHRoaXMuX2RpYWxvZyBhcyBIVE1MRWxlbWVudCwgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlRGlhbG9nKCk6IHZvaWQge1xuICAgIHRoaXMuX2N1clRhYkluZGV4ID0gMDtcbiAgICB0aGlzLmxvdmVsYWNlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2NvbmZpZyA9IHt9O1xuICAgIHRoaXMuX2JhZGdlcyA9IFtdO1xuICAgIHRoaXMuX2RpYWxvZy5jbG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVGFiU2VsZWN0ZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY3VyVGFiID0gZXYuZGV0YWlsLnZhbHVlLmlkO1xuICAgIHRoaXMuX3Jlc2l6ZURpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2lzQ29uZmlnQ2hhbmdlZCgpKSB7XG4gICAgICB0aGlzLl9jbG9zZURpYWxvZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NhdmluZyA9IHRydWU7XG5cbiAgICBjb25zdCB2aWV3Q29uZjogTG92ZWxhY2VWaWV3Q29uZmlnID0ge1xuICAgICAgLi4udGhpcy5fY29uZmlnLFxuICAgICAgYmFkZ2VzOiB0aGlzLl9iYWRnZXMhLm1hcCgoZW50aXR5Q29uZikgPT4gZW50aXR5Q29uZi5lbnRpdHkpLFxuICAgICAgY2FyZHM6IHRoaXMuX2NhcmRzLFxuICAgIH07XG5cbiAgICBjb25zdCBsb3ZlbGFjZSA9IHRoaXMubG92ZWxhY2UhO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGxvdmVsYWNlLnNhdmVDb25maWcoXG4gICAgICAgIHRoaXMuX2NyZWF0aW5nVmlld1xuICAgICAgICAgID8gYWRkVmlldyhsb3ZlbGFjZS5jb25maWcsIHZpZXdDb25mKVxuICAgICAgICAgIDogcmVwbGFjZVZpZXcobG92ZWxhY2UuY29uZmlnLCB0aGlzLnZpZXdJbmRleCEsIHZpZXdDb25mKVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlRGlhbG9nKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgU2F2aW5nIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdmlld0NvbmZpZ0NoYW5nZWQoZXY6IFZpZXdFZGl0RXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXYuZGV0YWlsICYmIGV2LmRldGFpbC5jb25maWcpIHtcbiAgICAgIHRoaXMuX2NvbmZpZyA9IGV2LmRldGFpbC5jb25maWc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYmFkZ2VzQ2hhbmdlZChldjogRW50aXRpZXNFZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5fYmFkZ2VzIHx8ICF0aGlzLmhhc3MgfHwgIWV2LmRldGFpbCB8fCAhZXYuZGV0YWlsLmVudGl0aWVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2JhZGdlcyA9IGV2LmRldGFpbC5lbnRpdGllcztcbiAgfVxuXG4gIHByaXZhdGUgX2lzQ29uZmlnQ2hhbmdlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fY3JlYXRpbmdWaWV3IHx8XG4gICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLl9jb25maWcpICE9PVxuICAgICAgICBKU09OLnN0cmluZ2lmeSh0aGlzLmxvdmVsYWNlIS5jb25maWcudmlld3NbdGhpcy52aWV3SW5kZXghXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2NyZWF0aW5nVmlldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52aWV3SW5kZXggPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC8qIG92ZXJydWxlIHRoZSBoYS1zdHlsZS1kaWFsb2cgbWF4LWhlaWdodCBvbiBzbWFsbCBzY3JlZW5zICovXG4gICAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDY2MHB4KSB7XG4gICAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICAgIHdpZHRoOiA2NTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uLmRlbGV0ZSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1zcGlubmVyW2FjdGl2ZV0ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2VmNTM1MDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmNTM1MDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lZGl0LXZpZXdcIjogSHVpRWRpdFZpZXc7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuXG5pbXBvcnQgeyBFZGl0b3JUYXJnZXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0VsZW1lbnRTdHlsZSB9IGZyb20gXCIuLi9jb25maWctZWxlbWVudHMvY29uZmlnLWVsZW1lbnRzLXN0eWxlXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZVZpZXdDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc3RyaW5nL3NsdWdpZnlcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9odWktdGhlbWUtc2VsZWN0LWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJ2aWV3LWNvbmZpZy1jaGFuZ2VkXCI6IHtcbiAgICAgIGNvbmZpZzogTG92ZWxhY2VWaWV3Q29uZmlnO1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJodWktdmlldy1lZGl0b3JcIilcbmV4cG9ydCBjbGFzcyBIdWlWaWV3RWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzTmV3ITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnITogTG92ZWxhY2VWaWV3Q29uZmlnO1xuICBwcml2YXRlIF9zdWdnZXN0ZWRQYXRoID0gZmFsc2U7XG5cbiAgZ2V0IF9wYXRoKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnBhdGggfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfdGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9jb25maWcudGl0bGUgfHwgXCJcIjtcbiAgfVxuXG4gIGdldCBfaWNvbigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fY29uZmlnKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5pY29uIHx8IFwiXCI7XG4gIH1cblxuICBnZXQgX3RoZW1lKCk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnRoZW1lIHx8IFwiQmFja2VuZC1zZWxlY3RlZFwiO1xuICB9XG5cbiAgZ2V0IF9wYW5lbCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fY29uZmlnLnBhbmVsIHx8IGZhbHNlO1xuICB9XG5cbiAgc2V0IGNvbmZpZyhjb25maWc6IExvdmVsYWNlVmlld0NvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7Y29uZmlnRWxlbWVudFN0eWxlfVxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29uZmlnXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3RpdGxlfVxuICAgICAgICAgIC5jb25maWdWYWx1ZT0ke1widGl0bGVcIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICBAYmx1cj0ke3RoaXMuX2hhbmRsZVRpdGxlQmx1cn1cbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiSWNvblwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5faWNvbn1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcImljb25cIn1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiVVJMIFBhdGhcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3BhdGh9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJwYXRoXCJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8aHVpLXRoZW1lLXNlbGVjdC1lZGl0b3JcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aGVtZX1cbiAgICAgICAgICAuY29uZmlnVmFsdWU9JHtcInRoZW1lXCJ9XG4gICAgICAgICAgQHRoZW1lLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgID48L2h1aS10aGVtZS1zZWxlY3QtZWRpdG9yPlxuICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgP2NoZWNrZWQ9JHt0aGlzLl9wYW5lbCAhPT0gZmFsc2V9XG4gICAgICAgICAgLmNvbmZpZ1ZhbHVlPSR7XCJwYW5lbFwifVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICAgICAgPlBhbmVsIE1vZGU/PC9oYS1zd2l0Y2hcbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0ISBhcyBFZGl0b3JUYXJnZXQ7XG5cbiAgICBpZiAodGhpc1tgXyR7dGFyZ2V0LmNvbmZpZ1ZhbHVlfWBdID09PSB0YXJnZXQudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbmV3Q29uZmlnO1xuXG4gICAgaWYgKHRhcmdldC5jb25maWdWYWx1ZSkge1xuICAgICAgbmV3Q29uZmlnID0ge1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIFt0YXJnZXQuY29uZmlnVmFsdWUhXTpcbiAgICAgICAgICB0YXJnZXQuY2hlY2tlZCAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0LmNoZWNrZWQgOiB0YXJnZXQudmFsdWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZpcmVFdmVudCh0aGlzLCBcInZpZXctY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWc6IG5ld0NvbmZpZyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVRpdGxlQmx1cihldikge1xuICAgIGlmIChcbiAgICAgICF0aGlzLmlzTmV3IHx8XG4gICAgICB0aGlzLl9zdWdnZXN0ZWRQYXRoIHx8XG4gICAgICB0aGlzLl9jb25maWcucGF0aCB8fFxuICAgICAgIWV2LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7IC4uLnRoaXMuX2NvbmZpZywgcGF0aDogc2x1Z2lmeShldi5jdXJyZW50VGFyZ2V0LnZhbHVlKSB9O1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZpZXctY29uZmlnLWNoYW5nZWRcIiwgeyBjb25maWcgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS12aWV3LWVkaXRvclwiOiBIdWlWaWV3RWRpdG9yO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBU0E7QUFHQTtBQWNBO0FBQUE7QUFBQTs7QUFvREE7QUEvQ0E7QUFDQTtBQUlBO0FBUUE7QUFhQTtBQWxCQTtBQUNBO0FBQ0E7QUFHQTtBQVVBO0FBR0E7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUtBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQW9EQTtBQUFBO0FBcERBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBVUE7QUFlQTtBQUFBO0FBQUE7O0FBd0JBO0FBbkJBOzs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQXRCQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUF3QkE7QUFBQTtBQXhCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFtQkE7QUFBQTtBQUVBO0FBQ0E7O0FBQ0E7QUFFQTs7Ozs7O0FBRUE7QUFDQTs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQXlCQTtBQVJBO0FBeUJBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7O0FBR0E7O0FBQUE7QUFHQTtBQUNBOzs7O0FBRUE7Ozs7OztBQUVBO0FBRUE7Ozs7QUFDQTs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTs7OztBQUdBO0FBRUE7QUFDQTs7QUFIQTtBQUtBOzs7O0FBRUE7OztBQUVBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTZDQTtBQUNBOzs7QUFBQTtBQWpSQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFmQTtBQURBO0FBQ0E7QUFtUkE7QUFBQTtBQW5SQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQU9BO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBcUhBO0FBbkhBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFvQ0E7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBdkhBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQXlIQTtBQUFBO0FBekhBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==