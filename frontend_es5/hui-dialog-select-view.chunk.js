(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-dialog-select-view"],{

/***/ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts ***!
  \**************************************************************************/
/*! exports provided: HuiDialogSelectView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiDialogSelectView", function() { return HuiDialogSelectView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");
/* harmony import */ var _components_hui_views_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/hui-views-list */ "./src/panels/lovelace/components/hui-views-list.ts");





var HuiDialogSelectView = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiDialogSelectView, _super);
    function HuiDialogSelectView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuiDialogSelectView.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._params = params;
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HuiDialogSelectView.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_3__["toggleAttribute"])(this, "hide-icons", this._params.lovelace.config
            ? !this._params.lovelace.config.views.some(function (view) { return view.icon; })
            : true);
    };
    HuiDialogSelectView.prototype.render = function () {
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=\"", "\"\n      >\n        <h2>Choose a view</h2>\n        <hui-views-list \n        .lovelaceConfig=", " \n        @view-selected=", ">\n        </hui-view-list>\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=\"", "\"\n      >\n        <h2>Choose a view</h2>\n        <hui-views-list \n        .lovelaceConfig=", " \n        @view-selected=", ">\n        </hui-view-list>\n      </ha-paper-dialog>\n    "])), this._openedChanged, this._params.lovelace.config, this._selectView);
    };
    Object.defineProperty(HuiDialogSelectView.prototype, "_dialog", {
        get: function () {
            return this.shadowRoot.querySelector("ha-paper-dialog");
        },
        enumerable: true,
        configurable: true
    });
    HuiDialogSelectView.prototype._selectView = function (e) {
        var view = e.detail.view;
        this._params.viewSelectedCallback(view);
        this._dialog.close();
    };
    HuiDialogSelectView.prototype._openedChanged = function (ev) {
        if (!ev.detail.value) {
            this._params = undefined;
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiDialogSelectView.prototype, "_params", void 0);
    HuiDialogSelectView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-dialog-select-view")
    ], HuiDialogSelectView);
    return HuiDialogSelectView;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWRpYWxvZy1zZWxlY3Qtdmlldy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbG92ZWxhY2UvZWRpdG9yL3NlbGVjdC12aWV3L2h1aS1kaWFsb2ctc2VsZWN0LXZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyB0b2dnbGVBdHRyaWJ1dGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS90b2dnbGVfYXR0cmlidXRlXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2h1aS12aWV3cy1saXN0XCI7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgSGFQYXBlckRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcblxuaW1wb3J0IHsgU2VsZWN0Vmlld0RpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctc2VsZWN0LXZpZXctZGlhbG9nXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3BvbHltZXItdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJodWktZGlhbG9nLXNlbGVjdC12aWV3XCIpXG5leHBvcnQgY2xhc3MgSHVpRGlhbG9nU2VsZWN0VmlldyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9wYXJhbXM/OiBTZWxlY3RWaWV3RGlhbG9nUGFyYW1zO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogU2VsZWN0Vmlld0RpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRvZ2dsZUF0dHJpYnV0ZShcbiAgICAgIHRoaXMsXG4gICAgICBcImhpZGUtaWNvbnNcIixcbiAgICAgIHRoaXMuX3BhcmFtcyEubG92ZWxhY2UhLmNvbmZpZ1xuICAgICAgICA/ICF0aGlzLl9wYXJhbXMhLmxvdmVsYWNlIS5jb25maWcudmlld3Muc29tZSgodmlldykgPT4gdmlldy5pY29uKVxuICAgICAgICA6IHRydWVcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5fcGFyYW1zKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPVwiJHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxoMj5DaG9vc2UgYSB2aWV3PC9oMj5cbiAgICAgICAgPGh1aS12aWV3cy1saXN0IFxuICAgICAgICAubG92ZWxhY2VDb25maWc9JHt0aGlzLl9wYXJhbXMhLmxvdmVsYWNlLmNvbmZpZ30gXG4gICAgICAgIEB2aWV3LXNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0Vmlld30+XG4gICAgICAgIDwvaHVpLXZpZXctbGlzdD5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZGlhbG9nKCk6IEhhUGFwZXJEaWFsb2cge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJoYS1wYXBlci1kaWFsb2dcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0VmlldyhlOiBDdXN0b21FdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZpZXc6IG51bWJlciA9IGUuZGV0YWlsLnZpZXc7XG4gICAgdGhpcy5fcGFyYW1zIS52aWV3U2VsZWN0ZWRDYWxsYmFjayh2aWV3KTtcbiAgICB0aGlzLl9kaWFsb2cuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICBpZiAoIShldi5kZXRhaWwgYXMgYW55KS52YWx1ZSkge1xuICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaHVpLWRpYWxvZy1zZWxlY3Qtdmlld1wiOiBIdWlEaWFsb2dTZWxlY3RWaWV3O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBUUE7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBOztBQXFEQTtBQWxEQTs7Ozs7QUFDQTtBQUNBOztBQUFBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBcURBO0FBQUE7QUFyREE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9