(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-view-editable"],{

/***/ "./src/components/ha-fab.ts":
/*!**********************************!*\
  !*** ./src/components/ha-fab.ts ***!
  \**********************************/
/*! exports provided: HaFab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFab", function() { return HaFab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_mwc_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-fab */ "./node_modules/@material/mwc-fab/mwc-fab.js");




// tslint:disable-next-line
var MwcFab = customElements.get("mwc-fab");
var HaFab = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaFab, _super);
    function HaFab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    HaFab.prototype.render = function () {
        var classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        var showLabel = this.label !== "" && this.extended;
        return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ", "\n        ", "\n      </button>\n    "], ["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ",
            "\n        ", "\n      </button>\n    "])), Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])(), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes), this.disabled, this.label || this.icon, showLabel && this.showIconAtEnd ? this.label : "", this.icon
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-icon .icon=", "></ha-icon>\n            "], ["\n              <ha-icon .icon=", "></ha-icon>\n            "])), this.icon) : "", showLabel && !this.showIconAtEnd ? this.label : "");
    };
    HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
    ], HaFab);
    return HaFab;
}(MwcFab));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/components/hui-card-options.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-card-options.ts ***!
  \************************************************************/
/*! exports provided: HuiCardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardOptions", function() { return HuiCardOptions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/delete-card */ "./src/panels/lovelace/editor/delete-card.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts");










var HuiCardOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiCardOptions, _super);
    function HuiCardOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiCardOptions.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <slot></slot>\n      <div class=\"options\">\n        <div class=\"primary-actions\">\n          <mwc-button @click=\"", "\"\n            >", "</mwc-button\n          >\n        </div>\n        <div class=\"secondary-actions\">\n          <paper-icon-button\n            title=\"Move card down\"\n            class=\"move-arrow\"\n            icon=\"hass:arrow-down\"\n            @click=\"", "\"\n            ?disabled=\"", "\"\n          ></paper-icon-button>\n          <paper-icon-button\n            title=\"Move card up\"\n            class=\"move-arrow\"\n            icon=\"hass:arrow-up\"\n            @click=\"", "\"\n            ?disabled=\"", "\"\n          ></paper-icon-button>\n          <paper-menu-button\n            horizontal-align=\"right\"\n            vertical-align=\"bottom\"\n            vertical-offset=\"40\"\n          >\n            <paper-icon-button\n              icon=\"hass:dots-vertical\"\n              slot=\"dropdown-trigger\"\n              aria-label=\"More options\"\n            ></paper-icon-button>\n            <paper-listbox slot=\"dropdown-content\">\n              <paper-item @click=\"", "\">\n                ", "</paper-item\n              >\n              <paper-item @click=\"", "\">\n                ", "</paper-item\n              >\n            </paper-listbox>\n          </paper-menu-button>\n        </div>\n      </div>\n    "], ["\n      <slot></slot>\n      <div class=\"options\">\n        <div class=\"primary-actions\">\n          <mwc-button @click=\"", "\"\n            >",
            "</mwc-button\n          >\n        </div>\n        <div class=\"secondary-actions\">\n          <paper-icon-button\n            title=\"Move card down\"\n            class=\"move-arrow\"\n            icon=\"hass:arrow-down\"\n            @click=\"", "\"\n            ?disabled=\"",
            "\"\n          ></paper-icon-button>\n          <paper-icon-button\n            title=\"Move card up\"\n            class=\"move-arrow\"\n            icon=\"hass:arrow-up\"\n            @click=\"", "\"\n            ?disabled=\"", "\"\n          ></paper-icon-button>\n          <paper-menu-button\n            horizontal-align=\"right\"\n            vertical-align=\"bottom\"\n            vertical-offset=\"40\"\n          >\n            <paper-icon-button\n              icon=\"hass:dots-vertical\"\n              slot=\"dropdown-trigger\"\n              aria-label=\"More options\"\n            ></paper-icon-button>\n            <paper-listbox slot=\"dropdown-content\">\n              <paper-item @click=\"", "\">\n                ",
            "</paper-item\n              >\n              <paper-item @click=\"", "\">\n                ",
            "</paper-item\n              >\n            </paper-listbox>\n          </paper-menu-button>\n        </div>\n      </div>\n    "])), this._editCard, this.hass.localize("ui.panel.lovelace.editor.edit_card.edit"), this._cardDown, this.lovelace.config.views[this.path[0]].cards
            .length ===
            this.path[1] + 1, this._cardUp, this.path[1] === 0, this._moveCard, this.hass.localize("ui.panel.lovelace.editor.edit_card.move"), this._deleteCard, this.hass.localize("ui.panel.lovelace.editor.edit_card.delete"));
    };
    Object.defineProperty(HuiCardOptions, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      div.options {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 8px;\n        background: var(--paper-card-background-color, white);\n        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,\n          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,\n          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;\n        display: flex;\n      }\n\n      div.options .primary-actions {\n        flex: 1;\n        margin: auto;\n      }\n\n      div.options .secondary-actions {\n        flex: 4;\n        text-align: right;\n      }\n\n      paper-icon-button {\n        color: var(--primary-text-color);\n      }\n\n      paper-icon-button.move-arrow[disabled] {\n        color: var(--disabled-text-color);\n      }\n\n      paper-menu-button {\n        color: var(--secondary-text-color);\n        padding: 0;\n      }\n\n      paper-item.header {\n        color: var(--primary-text-color);\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n    "], ["\n      div.options {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 8px;\n        background: var(--paper-card-background-color, white);\n        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,\n          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,\n          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;\n        display: flex;\n      }\n\n      div.options .primary-actions {\n        flex: 1;\n        margin: auto;\n      }\n\n      div.options .secondary-actions {\n        flex: 4;\n        text-align: right;\n      }\n\n      paper-icon-button {\n        color: var(--primary-text-color);\n      }\n\n      paper-icon-button.move-arrow[disabled] {\n        color: var(--disabled-text-color);\n      }\n\n      paper-menu-button {\n        color: var(--secondary-text-color);\n        padding: 0;\n      }\n\n      paper-item.header {\n        color: var(--primary-text-color);\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HuiCardOptions.prototype._editCard = function () {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_6__["showEditCardDialog"])(this, {
            lovelace: this.lovelace,
            path: this.path,
        });
    };
    HuiCardOptions.prototype._cardUp = function () {
        var lovelace = this.lovelace;
        var path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_8__["swapCard"])(lovelace.config, path, [path[0], path[1] - 1]));
    };
    HuiCardOptions.prototype._cardDown = function () {
        var lovelace = this.lovelace;
        var path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_8__["swapCard"])(lovelace.config, path, [path[0], path[1] + 1]));
    };
    HuiCardOptions.prototype._moveCard = function () {
        Object(_editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_9__["showMoveCardViewDialog"])(this, {
            path: this.path,
            lovelace: this.lovelace,
        });
    };
    HuiCardOptions.prototype._deleteCard = function () {
        Object(_editor_delete_card__WEBPACK_IMPORTED_MODULE_7__["confDeleteCard"])(this.lovelace, this.path);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardOptions.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardOptions.prototype, "lovelace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiCardOptions.prototype, "path", void 0);
    HuiCardOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-card-options")
    ], HuiCardOptions);
    return HuiCardOptions;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts ***!
  \******************************************************************************/
/*! exports provided: showMoveCardViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoveCardViewDialog", function() { return showMoveCardViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var registeredDialog = false;
var registerEditCardDialog = function (element) {
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
        dialogShowEvent: "show-move-card-view",
        dialogTag: "hui-dialog-move-card-view",
        dialogImport: function () {
            return Promise.all(/*! import() | hui-dialog-move-card-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-move-card-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-move-card-view */ "./src/panels/lovelace/editor/card-editor/hui-dialog-move-card-view.ts"));
        },
    });
};
var showMoveCardViewDialog = function (element, moveCardViewDialogParams) {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditCardDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-move-card-view", moveCardViewDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/delete-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/delete-card.ts ***!
  \***************************************************/
/*! exports provided: confDeleteCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confDeleteCard", function() { return confDeleteCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-util */ "./src/panels/lovelace/editor/config-util.ts");


function confDeleteCard(lovelace, path) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
        var err_1;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm("Are you sure you want to delete this card?")) {
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, lovelace.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_1__["deleteCard"])(lovelace.config, path))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    alert("Deleting failed: " + err_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/panels/lovelace/views/hui-view-editable.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/views/hui-view-editable.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hui-card-options */ "./src/panels/lovelace/components/hui-card-options.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
// hui-view dependencies for when in edit mode.




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21wb25lbnRzL2h1aS1jYXJkLW9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1tb3ZlLWNhcmQtdmlldy1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9lZGl0b3IvZGVsZXRlLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS92aWV3cy9odWktdmlldy1lZGl0YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGFzc01hcCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qc1wiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjRmFiID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWZhYlwiKSBhcyBDb25zdHJ1Y3RvcjxGYWI+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZhYlwiKVxuZXhwb3J0IGNsYXNzIEhhRmFiIGV4dGVuZHMgTXdjRmFiIHtcbiAgLy8gV2Ugb3ZlcnJpZGUgdGhlIHJlbmRlciBtZXRob2QgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFuIGljb24gZm9udCBhbmQgbXdjLWZhYiBkb2Vzbid0IHN1cHBvcnQgb3VyIHN2Zy1pY29uIHNldHMuXG4gIC8vIEJhc2VkIG9uIHZlcnNpb24gbXdjLWZhYiAwLjhcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJtZGMtZmFiLS1taW5pXCI6IHRoaXMubWluaSxcbiAgICAgIFwibWRjLWZhYi0tZXhpdGVkXCI6IHRoaXMuZXhpdGVkLFxuICAgICAgXCJtZGMtZmFiLS1leHRlbmRlZFwiOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gXCJcIiAmJiB0aGlzLmV4dGVuZGVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvblxuICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCJcbiAgICAgID5cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5pY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZmFiXCI6IEhhRmFiO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgeyBzaG93RWRpdENhcmREaWFsb2cgfSBmcm9tIFwiLi4vZWRpdG9yL2NhcmQtZWRpdG9yL3Nob3ctZWRpdC1jYXJkLWRpYWxvZ1wiO1xuaW1wb3J0IHsgY29uZkRlbGV0ZUNhcmQgfSBmcm9tIFwiLi4vZWRpdG9yL2RlbGV0ZS1jYXJkXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNhcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9sb3ZlbGFjZVwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN3YXBDYXJkIH0gZnJvbSBcIi4uL2VkaXRvci9jb25maWctdXRpbFwiO1xuaW1wb3J0IHsgc2hvd01vdmVDYXJkVmlld0RpYWxvZyB9IGZyb20gXCIuLi9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1tb3ZlLWNhcmQtdmlldy1kaWFsb2dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktY2FyZC1vcHRpb25zXCIpXG5leHBvcnQgY2xhc3MgSHVpQ2FyZE9wdGlvbnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGNhcmRDb25maWc/OiBMb3ZlbGFjZUNhcmRDb25maWc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb3ZlbGFjZT86IExvdmVsYWNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBwYXRoPzogW251bWJlciwgbnVtYmVyXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWFyeS1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9lZGl0Q2FyZH1cIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmVkaXRcIlxuICAgICAgICAgICAgKX08L213Yy1idXR0b25cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5LWFjdGlvbnNcIj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBjYXJkIGRvd25cIlxuICAgICAgICAgICAgY2xhc3M9XCJtb3ZlLWFycm93XCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jYXJkRG93bn1cIlxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLmxvdmVsYWNlIS5jb25maWcudmlld3NbdGhpcy5wYXRoIVswXV0uY2FyZHMhXG4gICAgICAgICAgICAgIC5sZW5ndGggPT09XG4gICAgICAgICAgICAgIHRoaXMucGF0aCFbMV0gKyAxfVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICB0aXRsZT1cIk1vdmUgY2FyZCB1cFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1vdmUtYXJyb3dcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctdXBcIlxuICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9jYXJkVXB9XCJcbiAgICAgICAgICAgID9kaXNhYmxlZD1cIiR7dGhpcy5wYXRoIVsxXSA9PT0gMH1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1tZW51LWJ1dHRvblxuICAgICAgICAgICAgaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduPVwiYm90dG9tXCJcbiAgICAgICAgICAgIHZlcnRpY2FsLW9mZnNldD1cIjQwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy12ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk1vcmUgb3B0aW9uc1wiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz1cIiR7dGhpcy5fbW92ZUNhcmR9XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLm1vdmVcIlxuICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gQGNsaWNrPVwiJHt0aGlzLl9kZWxldGVDYXJkfVwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5kZWxldGVcIlxuICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLW1lbnUtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBkaXYub3B0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMnB4IDJweCAwcHgsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMXB4IDVweCAtNHB4LFxuICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggM3B4IDFweCAtMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyAucHJpbWFyeS1hY3Rpb25zIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBkaXYub3B0aW9ucyAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4OiA0O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ubW92ZS1hcnJvd1tkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLW1lbnUtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbS5oZWFkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9lZGl0Q2FyZCgpOiB2b2lkIHtcbiAgICBzaG93RWRpdENhcmREaWFsb2codGhpcywge1xuICAgICAgbG92ZWxhY2U6IHRoaXMubG92ZWxhY2UhLFxuICAgICAgcGF0aDogdGhpcy5wYXRoISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmRVcCgpOiB2b2lkIHtcbiAgICBjb25zdCBsb3ZlbGFjZSA9IHRoaXMubG92ZWxhY2UhO1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGghO1xuICAgIGxvdmVsYWNlLnNhdmVDb25maWcoXG4gICAgICBzd2FwQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgsIFtwYXRoWzBdLCBwYXRoWzFdIC0gMV0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmREb3duKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZSE7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aCE7XG4gICAgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgIHN3YXBDYXJkKGxvdmVsYWNlLmNvbmZpZywgcGF0aCwgW3BhdGhbMF0sIHBhdGhbMV0gKyAxXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbW92ZUNhcmQoKTogdm9pZCB7XG4gICAgc2hvd01vdmVDYXJkVmlld0RpYWxvZyh0aGlzLCB7XG4gICAgICBwYXRoOiB0aGlzLnBhdGghLFxuICAgICAgbG92ZWxhY2U6IHRoaXMubG92ZWxhY2UhLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlQ2FyZCgpOiB2b2lkIHtcbiAgICBjb25mRGVsZXRlQ2FyZCh0aGlzLmxvdmVsYWNlISwgdGhpcy5wYXRoISk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLW9wdGlvbnNcIjogSHVpQ2FyZE9wdGlvbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiOiBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXM7XG4gIH1cbn1cblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXMge1xuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdO1xuICBsb3ZlbGFjZTogTG92ZWxhY2U7XG59XG5cbmNvbnN0IHJlZ2lzdGVyRWRpdENhcmREaWFsb2cgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBFdmVudCA9PlxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1Nob3dFdmVudDogXCJzaG93LW1vdmUtY2FyZC12aWV3XCIsXG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIiksXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd01vdmVDYXJkVmlld0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIG1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtczogTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgcmVnaXN0ZXJFZGl0Q2FyZERpYWxvZyhlbGVtZW50KTtcbiAgfVxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LW1vdmUtY2FyZC12aWV3XCIsIG1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRlbGV0ZUNhcmQgfSBmcm9tIFwiLi9jb25maWctdXRpbFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZkRlbGV0ZUNhcmQoXG4gIGxvdmVsYWNlOiBMb3ZlbGFjZSxcbiAgcGF0aDogW251bWJlciwgbnVtYmVyXVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmICghY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXJkP1wiKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIGF3YWl0IGxvdmVsYWNlLnNhdmVDb25maWcoZGVsZXRlQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYWxlcnQoYERlbGV0aW5nIGZhaWxlZDogJHtlcnIubWVzc2FnZX1gKTtcbiAgfVxufVxuIiwiLy8gaHVpLXZpZXcgZGVwZW5kZW5jaWVzIGZvciB3aGVuIGluIGVkaXQgbW9kZS5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9uc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQTJCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBSEE7QUFPQTtBQTFCQTtBQURBO0FBQ0E7QUEyQkE7QUFBQTtBQTNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQWtKQTtBQXpJQTtBQUNBO0FBT0E7QUFXQTtBQXVCQTtBQUtBO0FBN0JBO0FBQ0E7QUFtQ0E7QUFFQTtBQUFBO0FBQ0E7QUE2Q0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUE5SUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQUNBO0FBa0pBO0FBQUE7QUFsSkE7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFPQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUVBOztBQUFBOzs7O0FBRUE7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9