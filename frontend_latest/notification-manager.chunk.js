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
/* harmony import */ var _polymer_paper_toast_paper_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-toast/paper-toast */ "./node_modules/@polymer/paper-toast/paper-toast.js");

// tslint:disable-next-line
const PaperToast = customElements.get("paper-toast");
class HaToast extends PaperToast {
    connectedCallback() {
        super.connectedCallback();
        if (!this._resizeListener) {
            this._resizeListener = (ev) => this.classList.toggle("fit-bottom", ev.matches);
            this._mediaq = window.matchMedia("(max-width: 599px");
        }
        this._mediaq.addListener(this._resizeListener);
        this._resizeListener(this._mediaq);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._mediaq.removeListener(this._resizeListener);
    }
}
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





class NotificationManager extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._noCancelOnOutsideClick = false;
    }
    async showDialog({ message, action, duration, dismissable, }) {
        let toast = this._toast;
        // Can happen on initial load
        if (!toast) {
            await this.updateComplete;
            toast = this._toast;
        }
        toast.setAttribute("dir", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_2__["computeRTL"])(this.hass) ? "rtl" : "ltr");
        this._action = action || undefined;
        this._noCancelOnOutsideClick =
            dismissable === undefined ? false : !dismissable;
        toast.hide();
        toast.show({
            text: message,
            duration: duration === undefined ? 3000 : duration,
        });
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-toast .noCancelOnOutsideClick=${this._noCancelOnOutsideClick}>
        ${this._action
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button
                .label=${this._action.text}
                @click=${this.buttonClicked}
              ></mwc-button>
            `
            : ""}
      </ha-toast>
    `;
    }
    buttonClicked() {
        this._toast.hide();
        if (this._action) {
            this._action.action();
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      mwc-button {
        color: var(--primary-color);
        font-weight: bold;
      }
    `;
    }
}
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
customElements.define("notification-manager", NotificationManager);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLW1hbmFnZXIuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS10b2FzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFuYWdlcnMvbm90aWZpY2F0aW9uLW1hbmFnZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9hc3QvcGFwZXItdG9hc3RcIjtcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBQYXBlclRvYXN0ID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItdG9hc3RcIik7XG5cbmV4cG9ydCBjbGFzcyBIYVRvYXN0IGV4dGVuZHMgUGFwZXJUb2FzdCB7XG4gIHByaXZhdGUgX3Jlc2l6ZUxpc3RlbmVyPzogKG9iajogeyBtYXRjaGVzOiBib29sZWFuIH0pID0+IHVua25vd247XG4gIHByaXZhdGUgX21lZGlhcT86IE1lZGlhUXVlcnlMaXN0O1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCF0aGlzLl9yZXNpemVMaXN0ZW5lcikge1xuICAgICAgdGhpcy5fcmVzaXplTGlzdGVuZXIgPSAoZXYpID0+XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcImZpdC1ib3R0b21cIiwgZXYubWF0Y2hlcyk7XG4gICAgICB0aGlzLl9tZWRpYXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDU5OXB4XCIpO1xuICAgIH1cbiAgICB0aGlzLl9tZWRpYXEhLmFkZExpc3RlbmVyKHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcbiAgICB0aGlzLl9yZXNpemVMaXN0ZW5lcih0aGlzLl9tZWRpYXEhKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX21lZGlhcSEucmVtb3ZlTGlzdGVuZXIodGhpcy5fcmVzaXplTGlzdGVuZXIhKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdG9hc3RcIjogSGFUb2FzdDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS10b2FzdFwiLCBIYVRvYXN0KTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHF1ZXJ5LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXRvYXN0XCI7XG4vLyBUeXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhVG9hc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9oYS10b2FzdFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dUb2FzdFBhcmFtcyB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICBkaXNtaXNzYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RBY3Rpb25QYXJhbXMge1xuICBhY3Rpb246ICgpID0+IHZvaWQ7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY2xhc3MgTm90aWZpY2F0aW9uTWFuYWdlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWN0aW9uPzogVG9hc3RBY3Rpb25QYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25vQ2FuY2VsT25PdXRzaWRlQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAcXVlcnkoXCJoYS10b2FzdFwiKSBwcml2YXRlIF90b2FzdCE6IEhhVG9hc3Q7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coe1xuICAgIG1lc3NhZ2UsXG4gICAgYWN0aW9uLFxuICAgIGR1cmF0aW9uLFxuICAgIGRpc21pc3NhYmxlLFxuICB9OiBTaG93VG9hc3RQYXJhbXMpIHtcbiAgICBsZXQgdG9hc3QgPSB0aGlzLl90b2FzdDtcbiAgICAvLyBDYW4gaGFwcGVuIG9uIGluaXRpYWwgbG9hZFxuICAgIGlmICghdG9hc3QpIHtcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICB0b2FzdCA9IHRoaXMuX3RvYXN0O1xuICAgIH1cbiAgICB0b2FzdC5zZXRBdHRyaWJ1dGUoXCJkaXJcIiwgY29tcHV0ZVJUTCh0aGlzLmhhc3MpID8gXCJydGxcIiA6IFwibHRyXCIpO1xuICAgIHRoaXMuX2FjdGlvbiA9IGFjdGlvbiB8fCB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbm9DYW5jZWxPbk91dHNpZGVDbGljayA9XG4gICAgICBkaXNtaXNzYWJsZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhZGlzbWlzc2FibGU7XG4gICAgdG9hc3QuaGlkZSgpO1xuICAgIHRvYXN0LnNob3coe1xuICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gMzAwMCA6IGR1cmF0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXRvYXN0IC5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrPSR7dGhpcy5fbm9DYW5jZWxPbk91dHNpZGVDbGlja30+XG4gICAgICAgICR7dGhpcy5fYWN0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuX2FjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuYnV0dG9uQ2xpY2tlZH1cbiAgICAgICAgICAgICAgPjwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2hhLXRvYXN0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGJ1dHRvbkNsaWNrZWQoKSB7XG4gICAgdGhpcy5fdG9hc3QuaGlkZSgpO1xuICAgIGlmICh0aGlzLl9hY3Rpb24pIHtcbiAgICAgIHRoaXMuX2FjdGlvbi5hY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm5vdGlmaWNhdGlvbi1tYW5hZ2VyXCIsIE5vdGlmaWNhdGlvbk1hbmFnZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhc3Mtbm90aWZpY2F0aW9uXCI6IFNob3dUb2FzdFBhcmFtcztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBU0E7QUFFQTtBQUNBO0FBaUJBO0FBQUE7O0FBSUE7QUF5REE7QUFyREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUF5REE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=