(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["notification-manager"],{

/***/ "./src/components/ha-toast.ts":
/*!************************************!*\
  !*** ./src/components/ha-toast.ts ***!
  \************************************/
/*! exports provided: HaToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaToast", function() { return HaToast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_toast_paper_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-toast/paper-toast */ "./node_modules/@polymer/paper-toast/paper-toast.js");


// tslint:disable-next-line
var PaperToast = customElements.get("paper-toast");
var HaToast = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaToast, _super);
    function HaToast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaToast.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        if (!this._resizeListener) {
            this._resizeListener = function (ev) {
                return _this.classList.toggle("fit-bottom", ev.matches);
            };
            this._mediaq = window.matchMedia("(max-width: 599px");
        }
        this._mediaq.addListener(this._resizeListener);
        this._resizeListener(this._mediaq);
    };
    HaToast.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._mediaq.removeListener(this._resizeListener);
    };
    return HaToast;
}(PaperToast));

customElements.define("ha-toast", HaToast);


/***/ }),

/***/ "./src/managers/notification-manager.ts":
/*!**********************************************!*\
  !*** ./src/managers/notification-manager.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-toast */ "./src/components/ha-toast.ts");





var NotificationManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NotificationManager, _super);
    function NotificationManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._noCancelOnOutsideClick = false;
        return _this;
    }
    NotificationManager.prototype.showDialog = function (_a) {
        var message = _a.message, action = _a.action, duration = _a.duration, dismissable = _a.dismissable;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        toast = this._toast;
                        if (!!toast) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _b.sent();
                        toast = this._toast;
                        _b.label = 2;
                    case 2:
                        toast.setAttribute("dir", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__["computeRTL"])(this.hass) ? "rtl" : "ltr");
                        this._action = action || undefined;
                        this._noCancelOnOutsideClick =
                            dismissable === undefined ? false : !dismissable;
                        toast.hide();
                        toast.show({
                            text: message,
                            duration: duration === undefined ? 3000 : duration,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NotificationManager.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-toast .noCancelOnOutsideClick=", ">\n        ", "\n      </ha-toast>\n    "], ["\n      <ha-toast .noCancelOnOutsideClick=", ">\n        ",
            "\n      </ha-toast>\n    "])), this._noCancelOnOutsideClick, this._action
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button\n                .label=", "\n                @click=", "\n              ></mwc-button>\n            "], ["\n              <mwc-button\n                .label=", "\n                @click=", "\n              ></mwc-button>\n            "])), this._action.text, this.buttonClicked) : "");
    };
    NotificationManager.prototype.buttonClicked = function () {
        this._toast.hide();
        if (this._action) {
            this._action.action();
        }
    };
    Object.defineProperty(NotificationManager, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      mwc-button {\n        color: var(--primary-color);\n        font-weight: bold;\n      }\n    "], ["\n      mwc-button {\n        color: var(--primary-color);\n        font-weight: bold;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], NotificationManager.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], NotificationManager.prototype, "_action", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], NotificationManager.prototype, "_noCancelOnOutsideClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("ha-toast")
    ], NotificationManager.prototype, "_toast", void 0);
    return NotificationManager;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("notification-manager", NotificationManager);
var templateObject_1, templateObject_2, templateObject_3;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLW1hbmFnZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS10b2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlcnMvbm90aWZpY2F0aW9uLW1hbmFnZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9hc3QvcGFwZXItdG9hc3RcIjtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBQYXBlclRvYXN0ID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItdG9hc3RcIik7XG5cbmV4cG9ydCBjbGFzcyBIYVRvYXN0IGV4dGVuZHMgUGFwZXJUb2FzdCB7XG4gIHByaXZhdGUgX3Jlc2l6ZUxpc3RlbmVyPzogKG9iajogeyBtYXRjaGVzOiBib29sZWFuIH0pID0+IHVua25vd247XG4gIHByaXZhdGUgX21lZGlhcT86IE1lZGlhUXVlcnlMaXN0O1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCF0aGlzLl9yZXNpemVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIgPSAoZXYpID0+XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImZpdC1ib3R0b21cIiwgZXYubWF0Y2hlcyk7XG4gICAgICB0aGlzLl9tZWRpYXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU5OXB4XCIpO1xuICAgIH1cbiAgICB0aGlzLl9tZWRpYXEhLmFkZExpc3RlbmVyKHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcbiAgICB0aGlzLl9yZXNpemVMaXN0ZW5lcih0aGlzLl9tZWRpYXEhKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX21lZGlhcSEucmVtb3ZlTGlzdGVuZXIodGhpcy5fcmVzaXplTGlzdGVuZXIhKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdG9hc3RcIjogSGFUb2FzdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS10b2FzdFwiLCBIYVRvYXN0KTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHF1ZXJ5LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXRvYXN0XCI7XG4vLyBUeXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhVG9hc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oYS10b2FzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dUb2FzdFBhcmFtcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBkaXNtaXNzYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb25QYXJhbXMge1xuICBhY3Rpb246ICgpID0+IHZvaWQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY2xhc3MgTm90aWZpY2F0aW9uTWFuYWdlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25vQ2FuY2VsT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoXCJoYS10b2FzdFwiKSBwcml2YXRlIF90b2FzdCE6IEhhVG9hc3Q7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coe1xuICAgIG1lc3NhZ2UsXG4gICAgYWN0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGRpc21pc3NhYmxlLFxuICB9OiBTaG93VG9hc3RQYXJhbXMpIHtcbiAgICBsZXQgdG9hc3QgPSB0aGlzLl90b2FzdDtcbiAgICAvLyBDYW4gaGFwcGVuIG9uIGluaXRpYWwgbG9hZFxuICAgIGlmICghdG9hc3QpIHtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICB0b2FzdCA9IHRoaXMuX3RvYXN0O1xuICAgIH1cbiAgICB0b2FzdC5zZXRBdHRyaWJ1dGUoXCJkaXJcIiwgY29tcHV0ZVJUTCh0aGlzLmhhc3MpID8gXCJydGxcIiA6IFwibHRyXCIpO1xuICAgIHRoaXMuX2FjdGlvbiA9IGFjdGlvbiB8fCB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbm9DYW5jZWxPbk91dHNpZGVDbGljayA9XG4gICAgICBkaXNtaXNzYWJsZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhZGlzbWlzc2FibGU7XG4gICAgdG9hc3QuaGlkZSgpO1xuICAgIHRvYXN0LnNob3coe1xuICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gMzAwMCA6IGR1cmF0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXRvYXN0IC5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrPSR7dGhpcy5fbm9DYW5jZWxPbk91dHNpZGVDbGlja30+XG4gICAgICAgICR7dGhpcy5fYWN0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuX2FjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuYnV0dG9uQ2xpY2tlZH1cbiAgICAgICAgICAgICAgPjwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhLXRvYXN0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgdGhpcy5fdG9hc3QuaGlkZSgpO1xuICAgIGlmICh0aGlzLl9hY3Rpb24pIHtcbiAgICAgIHRoaXMuX2FjdGlvbi5hY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm5vdGlmaWNhdGlvbi1tYW5hZ2VyXCIsIE5vdGlmaWNhdGlvbk1hbmFnZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhc3Mtbm90aWZpY2F0aW9uXCI6IFNob3dUb2FzdFBhcmFtcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBb0JBO0FBaEJBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFTQTtBQUVBO0FBQ0E7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUF5REE7QUFyREE7QUFDQTs7Ozs7O0FBS0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQU5BO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFNQTs7O0FBQUE7QUEzREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBdURBO0FBQUE7QUFFQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=