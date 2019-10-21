(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-empty-state-card"],{

/***/ "./src/panels/lovelace/cards/hui-empty-state-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-empty-state-card.ts ***!
  \***********************************************************/
/*! exports provided: HuiEmptyStateCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiEmptyStateCard", function() { return HuiEmptyStateCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");



let HuiEmptyStateCard = class HuiEmptyStateCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    getCardSize() {
        return 2;
    }
    setConfig(_config) {
        // tslint:disable-next-line
    }
    render() {
        if (!this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        .header="${this.hass.localize("ui.panel.lovelace.cards.empty_state.title")}"
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.lovelace.cards.empty_state.no_devices")}
        </div>
        <div class="card-actions">
          <a href="/config/integrations">
            <mwc-button>
              ${this.hass.localize("ui.panel.lovelace.cards.empty_state.go_to_integrations_page")}
            </mwc-button>
          </a>
        </div>
      </header-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .content {
        margin-top: -1em;
        padding: 16px;
      }

      .card-actions a {
        text-decoration: none;
      }

      mwc-button {
        margin-left: -8px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEmptyStateCard.prototype, "hass", void 0);
HuiEmptyStateCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-empty-state-card")
], HuiEmptyStateCard);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLWVtcHR5LXN0YXRlLWNhcmQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NhcmRzL2h1aS1lbXB0eS1zdGF0ZS1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgTG92ZWxhY2VDYXJkIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBFbXB0eVN0YXRlQ2FyZENvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLWVtcHR5LXN0YXRlLWNhcmRcIilcbmV4cG9ydCBjbGFzcyBIdWlFbXB0eVN0YXRlQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQgaW1wbGVtZW50cyBMb3ZlbGFjZUNhcmQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHVibGljIGdldENhcmRTaXplKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBwdWJsaWMgc2V0Q29uZmlnKF9jb25maWc6IEVtcHR5U3RhdGVDYXJkQ29uZmlnKTogdm9pZCB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICAuaGVhZGVyPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5lbXB0eV9zdGF0ZS50aXRsZVwiXG4gICAgICAgICl9XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5jYXJkcy5lbXB0eV9zdGF0ZS5ub19kZXZpY2VzXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2ludGVncmF0aW9uc1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuY2FyZHMuZW1wdHlfc3RhdGUuZ29fdG9faW50ZWdyYXRpb25zX3BhZ2VcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlci1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xZW07XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1lbXB0eS1zdGF0ZS1jYXJkXCI6IEh1aUVtcHR5U3RhdGVDYXJkO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBOzs7QUFLQTs7Ozs7QUFPQTs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQXZEQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==