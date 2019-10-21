(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-config-automation~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/components/entity/ha-entity-toggle.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-switch */ "./src/components/ha-switch.ts");








var isOn = function (stateObj) {
    return stateObj !== undefined && !_common_const__WEBPACK_IMPORTED_MODULE_2__["STATES_OFF"].includes(stateObj.state);
};
var HaEntityToggle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaEntityToggle, _super);
    function HaEntityToggle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isOn = false;
        return _this;
    }
    HaEntityToggle.prototype.render = function () {
        if (!this.stateObj) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <ha-switch disabled></ha-switch>\n      "], ["\n        <ha-switch disabled></ha-switch>\n      "])));
        }
        if (this.stateObj.attributes.assumed_state) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <paper-icon-button\n          aria-label=", "\n          icon=\"hass:flash-off\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=", "\n          icon=\"hass:flash\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n      "], ["\n        <paper-icon-button\n          aria-label=", "\n          icon=\"hass:flash-off\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          aria-label=", "\n          icon=\"hass:flash\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n      "])), "Turn " + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj) + " off", this._turnOff, !this._isOn, "Turn " + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj) + " on", this._turnOn, this._isOn);
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-switch\n        aria-label=", "\n        .checked=", "\n        @change=", "\n      ></ha-switch>\n    "], ["\n      <ha-switch\n        aria-label=",
            "\n        .checked=", "\n        @change=", "\n      ></ha-switch>\n    "])), "Toggle " + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj) + " " + (this._isOn ? "off" : "on"), this._isOn, this._toggleChanged);
    };
    HaEntityToggle.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this.addEventListener("click", function (ev) { return ev.stopPropagation(); });
    };
    HaEntityToggle.prototype.updated = function (changedProps) {
        if (changedProps.has("stateObj")) {
            this._isOn = isOn(this.stateObj);
        }
    };
    HaEntityToggle.prototype._toggleChanged = function (ev) {
        var newVal = ev.target.checked;
        if (newVal !== this._isOn) {
            this._callService(newVal);
        }
    };
    HaEntityToggle.prototype._turnOn = function () {
        this._callService(true);
    };
    HaEntityToggle.prototype._turnOff = function () {
        this._callService(false);
    };
    // We will force a re-render after a successful call to re-sync the toggle
    // with the state. It will be out of sync if our service call did not
    // result in the entity to be turned on. Since the state is not changing,
    // the resync is not called automatic.
    HaEntityToggle.prototype._callService = function (turnOn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stateDomain, serviceDomain, service, currentState;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.hass || !this.stateObj) {
                            return [2 /*return*/];
                        }
                        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_4__["forwardHaptic"])("light");
                        stateDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(this.stateObj);
                        if (stateDomain === "lock") {
                            serviceDomain = "lock";
                            service = turnOn ? "unlock" : "lock";
                        }
                        else if (stateDomain === "cover") {
                            serviceDomain = "cover";
                            service = turnOn ? "open_cover" : "close_cover";
                        }
                        else if (stateDomain === "group") {
                            serviceDomain = "homeassistant";
                            service = turnOn ? "turn_on" : "turn_off";
                        }
                        else {
                            serviceDomain = stateDomain;
                            service = turnOn ? "turn_on" : "turn_off";
                        }
                        currentState = this.stateObj;
                        // Optimistic update.
                        this._isOn = turnOn;
                        return [4 /*yield*/, this.hass.callService(serviceDomain, service, {
                                entity_id: this.stateObj.entity_id,
                            })];
                    case 1:
                        _a.sent();
                        setTimeout(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                // If after 2 seconds we have not received a state update
                                // reset the switch to it's original state.
                                if (this.stateObj === currentState) {
                                    this._isOn = isOn(this.stateObj);
                                }
                                return [2 /*return*/];
                            });
                        }); }, 2000);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HaEntityToggle, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      ha-switch {\n        padding: 13px 5px;\n      }\n    "], ["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      ha-switch {\n        padding: 13px 5px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaEntityToggle.prototype, "stateObj", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
    ], HaEntityToggle.prototype, "_isOn", void 0);
    return HaEntityToggle;
}(lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]));
customElements.define("ha-entity-toggle", HaEntityToggle);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zd2l0Y2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHsgU1RBVEVTX09GRiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBmb3J3YXJkSGFwdGljIH0gZnJvbSBcIi4uLy4uL2RhdGEvaGFwdGljc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5pbXBvcnQgXCIuLi9oYS1zd2l0Y2hcIjtcblxuY29uc3QgaXNPbiA9IChzdGF0ZU9iaj86IEhhc3NFbnRpdHkpID0+XG4gIHN0YXRlT2JqICE9PSB1bmRlZmluZWQgJiYgIVNUQVRFU19PRkYuaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpO1xuXG5jbGFzcyBIYUVudGl0eVRvZ2dsZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyBoYXNzIGlzIG5vdCBhIHByb3BlcnR5IHNvIHRoYXQgd2Ugb25seSByZS1yZW5kZXIgb24gc3RhdGVPYmogY2hhbmdlc1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IEhhc3NFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2lzT246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhLXN3aXRjaCBkaXNhYmxlZD48L2hhLXN3aXRjaD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD0ke2BUdXJuICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gb2ZmYH1cbiAgICAgICAgICBpY29uPVwiaGFzczpmbGFzaC1vZmZcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3R1cm5PZmZ9XG4gICAgICAgICAgP3N0YXRlLWFjdGl2ZT0keyF0aGlzLl9pc09ufVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD0ke2BUdXJuICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gb25gfVxuICAgICAgICAgIGljb249XCJoYXNzOmZsYXNoXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90dXJuT259XG4gICAgICAgICAgP3N0YXRlLWFjdGl2ZT0ke3RoaXMuX2lzT259XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgYXJpYS1sYWJlbD0ke2BUb2dnbGUgJHtjb21wdXRlU3RhdGVOYW1lKHRoaXMuc3RhdGVPYmopfSAke1xuICAgICAgICAgIHRoaXMuX2lzT24gPyBcIm9mZlwiIDogXCJvblwiXG4gICAgICAgIH1gfVxuICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2lzT259XG4gICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90b2dnbGVDaGFuZ2VkfVxuICAgICAgPjwvaGEtc3dpdGNoPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHRoaXMuX2lzT24gPSBpc09uKHRoaXMuc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBldi50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuX2lzT24pIHtcbiAgICAgIHRoaXMuX2NhbGxTZXJ2aWNlKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHVybk9uKCkge1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHVybk9mZigpIHtcbiAgICB0aGlzLl9jYWxsU2VydmljZShmYWxzZSk7XG4gIH1cblxuICAvLyBXZSB3aWxsIGZvcmNlIGEgcmUtcmVuZGVyIGFmdGVyIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlLXN5bmMgdGhlIHRvZ2dsZVxuICAvLyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXQgb2Ygc3luYyBpZiBvdXIgc2VydmljZSBjYWxsIGRpZCBub3RcbiAgLy8gcmVzdWx0IGluIHRoZSBlbnRpdHkgdG8gYmUgdHVybmVkIG9uLiBTaW5jZSB0aGUgc3RhdGUgaXMgbm90IGNoYW5naW5nLFxuICAvLyB0aGUgcmVzeW5jIGlzIG5vdCBjYWxsZWQgYXV0b21hdGljLlxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZSh0dXJuT24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3J3YXJkSGFwdGljKFwibGlnaHRcIik7XG4gICAgY29uc3Qgc3RhdGVEb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4odGhpcy5zdGF0ZU9iaik7XG4gICAgbGV0IHNlcnZpY2VEb21haW47XG4gICAgbGV0IHNlcnZpY2U7XG5cbiAgICBpZiAoc3RhdGVEb21haW4gPT09IFwibG9ja1wiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJsb2NrXCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ1bmxvY2tcIiA6IFwibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVEb21haW4gPT09IFwiY292ZXJcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwiY292ZXJcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcIm9wZW5fY292ZXJcIiA6IFwiY2xvc2VfY292ZXJcIjtcbiAgICB9IGVsc2UgaWYgKHN0YXRlRG9tYWluID09PSBcImdyb3VwXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImhvbWVhc3Npc3RhbnRcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInR1cm5fb25cIiA6IFwidHVybl9vZmZcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VydmljZURvbWFpbiA9IHN0YXRlRG9tYWluO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidHVybl9vblwiIDogXCJ0dXJuX29mZlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICAvLyBPcHRpbWlzdGljIHVwZGF0ZS5cbiAgICB0aGlzLl9pc09uID0gdHVybk9uO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHNlcnZpY2VEb21haW4sIHNlcnZpY2UsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIElmIGFmdGVyIDIgc2Vjb25kcyB3ZSBoYXZlIG5vdCByZWNlaXZlZCBhIHN0YXRlIHVwZGF0ZVxuICAgICAgLy8gcmVzZXQgdGhlIHN3aXRjaCB0byBpdCdzIG9yaWdpbmFsIHN0YXRlLlxuICAgICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICB0aGlzLl9pc09uID0gaXNPbih0aGlzLnN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgIC0tcGFwZXItaWNvbi1idXR0b24taW5hY3RpdmUtY29sb3IsXG4gICAgICAgICAgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVxuICAgICAgICApO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1idXR0b25bc3RhdGUtYWN0aXZlXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pY29uLWJ1dHRvbi1hY3RpdmUtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIGhhLXN3aXRjaCB7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggNXB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LXRvZ2dsZVwiLCBIYUVudGl0eVRvZ2dsZSk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgY3VzdG9tRWxlbWVudCwgQ1NTUmVzdWx0LCBjc3MsIHF1ZXJ5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1zd2l0Y2gvbXdjLXN3aXRjaC1jc3NcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IE13Y1N3aXRjaCA9IGN1c3RvbUVsZW1lbnRzLmdldChcIm13Yy1zd2l0Y2hcIikgYXMgQ29uc3RydWN0b3I8U3dpdGNoPjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zd2l0Y2hcIilcbmV4cG9ydCBjbGFzcyBIYVN3aXRjaCBleHRlbmRzIE13Y1N3aXRjaCB7XG4gIEBxdWVyeShcInNsb3RcIikgcHJpdmF0ZSBfc2xvdCE6IEhUTUxTbG90RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW1kYy10aGVtZS1zZWNvbmRhcnlcIiwgXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcInNsb3R0ZWRcIixcbiAgICAgIEJvb2xlYW4odGhpcy5fc2xvdC5hc3NpZ25lZE5vZGVzKCkubGVuZ3RoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190cmFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLnNsb3R0ZWQpIC5tZGMtc3dpdGNoIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc3dpdGNoXCI6IEhhU3dpdGNoO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQWtJQTtBQWhJQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFjQTtBQUVBO0FBSUE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRkE7QUFJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQW1CQTs7O0FBQUE7QUFsSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBa0lBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBbUNBO0FBaENBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBa0JBO0FBQ0E7OztBQUFBO0FBakNBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQW1DQTtBQUFBO0FBbkNBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==