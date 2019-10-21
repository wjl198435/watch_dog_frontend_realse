(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-automation"],{

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleStringSupportsOptions() {
    try {
        new Date().toLocaleString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions()
    ? function (dateObj, locales) {
        return dateObj.toLocaleString(locales, {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
        });
    }
    : function (dateObj) { return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"); });


/***/ }),

/***/ "./src/components/device/ha-device-trigger-picker.ts":
/*!***********************************************************!*\
  !*** ./src/components/device/ha-device-trigger-picker.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/device_automation */ "./src/data/device_automation.ts");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-device-automation-picker */ "./src/components/device/ha-device-automation-picker.ts");





var HaDeviceTriggerPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDeviceTriggerPicker, _super);
    function HaDeviceTriggerPicker() {
        var _this = _super.call(this, _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["localizeDeviceAutomationTrigger"], _data_device_automation__WEBPACK_IMPORTED_MODULE_2__["fetchDeviceTriggers"], function (deviceId) { return ({
            device_id: deviceId || "",
            platform: "device",
            domain: "",
            entity_id: "",
        }); }) || this;
        _this.NO_AUTOMATION_TEXT = "No triggers";
        _this.UNKNOWN_AUTOMATION_TEXT = "Unknown trigger";
        return _this;
    }
    HaDeviceTriggerPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-device-trigger-picker")
    ], HaDeviceTriggerPicker);
    return HaDeviceTriggerPicker;
}(_ha_device_automation_picker__WEBPACK_IMPORTED_MODULE_4__["HaDeviceAutomationPicker"]));


/***/ }),

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: deleteAutomation, showAutomationEditor, getAutomationEditorInitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAutomationEditor", function() { return showAutomationEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutomationEditorInitData", function() { return getAutomationEditorInitData; });
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");

var deleteAutomation = function (hass, id) {
    return hass.callApi("DELETE", "config/automation/config/" + id);
};
var inititialAutomationEditorData;
var showAutomationEditor = function (el, data) {
    inititialAutomationEditorData = data;
    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_0__["navigate"])(el, "/config/automation/new");
};
var getAutomationEditorInitData = function () {
    var data = inititialAutomationEditorData;
    inititialAutomationEditorData = undefined;
    return data;
};


/***/ }),

/***/ "./src/panels/config/automation/ha-automation-editor.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-editor.ts ***!
  \**************************************************************/
/*! exports provided: HaAutomationEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaAutomationEditor", function() { return HaAutomationEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _js_automation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../js/automation */ "./src/panels/config/js/automation.tsx");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");

















function AutomationEditor(mountEl, props, mergeEl) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(_js_automation__WEBPACK_IMPORTED_MODULE_10__["default"], props), mountEl, mergeEl);
}
var HaAutomationEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaAutomationEditor, _super);
    function HaAutomationEditor() {
        var _this = _super.call(this) || this;
        _this._configChanged = _this._configChanged.bind(_this);
        return _this;
    }
    Object.defineProperty(HaAutomationEditor, "properties", {
        get: function () {
            return {
                hass: {},
                automation: {},
                creatingNew: {},
                isWide: {},
                _errors: {},
                _dirty: {},
                _config: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    HaAutomationEditor.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._rendered) {
            Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_11__["default"])(this._rendered);
            this._rendered = undefined;
        }
    };
    HaAutomationEditor.prototype.render = function () {
        if (!this.hass) {
            return;
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-app-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              @click=", "\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title>\n              ", "\n            </div>\n            ", "\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          ", "\n          <div\n            id=\"root\"\n            class=\"", "\"\n          ></div>\n        </div>\n        <ha-fab\n          slot=\"fab\"\n          ?is-wide=\"", "\"\n          ?dirty=\"", "\"\n          icon=\"hass:content-save\"\n          .title=\"", "\"\n          @click=", "\n          class=\"", "\"\n        ></ha-fab>\n      </ha-app-layout>\n    "], ["\n      <ha-app-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              @click=", "\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title>\n              ",
            "\n            </div>\n            ",
            "\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          ",
            "\n          <div\n            id=\"root\"\n            class=\"",
            "\"\n          ></div>\n        </div>\n        <ha-fab\n          slot=\"fab\"\n          ?is-wide=\"", "\"\n          ?dirty=\"", "\"\n          icon=\"hass:content-save\"\n          .title=\"",
            "\"\n          @click=", "\n          class=\"",
            "\"\n        ></ha-fab>\n      </ha-app-layout>\n    "])), this._backTapped, this.automation
            ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__["computeStateName"])(this.automation)
            : this.hass.localize("ui.panel.config.automation.editor.default_name"), this.creatingNew
            ? ""
            : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <paper-icon-button\n                    icon=\"hass:delete\"\n                    @click=", "\n                  ></paper-icon-button>\n                "], ["\n                  <paper-icon-button\n                    icon=\"hass:delete\"\n                    @click=", "\n                  ></paper-icon-button>\n                "])), this._delete), this._errors
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"errors\">", "</div>\n              "], ["\n                <div class=\"errors\">", "</div>\n              "])), this._errors) : "", Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
            rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.hass),
        }), this.isWide, this._dirty, this.hass.localize("ui.panel.config.automation.editor.save"), this._saveAutomation, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
            rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.hass),
        }));
    };
    HaAutomationEditor.prototype.updated = function (changedProps) {
        var _this = this;
        _super.prototype.updated.call(this, changedProps);
        var oldAutomation = changedProps.get("automation");
        if (changedProps.has("automation") &&
            this.automation &&
            this.hass &&
            // Only refresh config if we picked a new automation. If same ID, don't fetch it.
            (!oldAutomation ||
                oldAutomation.attributes.id !== this.automation.attributes.id)) {
            this.hass
                .callApi("GET", "config/automation/config/" + this.automation.attributes.id)
                .then(function (config) {
                // Normalize data: ensure trigger, action and condition are lists
                // Happens when people copy paste their automations into the config
                for (var _i = 0, _a = ["trigger", "condition", "action"]; _i < _a.length; _i++) {
                    var key = _a[_i];
                    var value = config[key];
                    if (value && !Array.isArray(value)) {
                        config[key] = [value];
                    }
                }
                _this._dirty = false;
                _this._config = config;
            }, function (resp) {
                alert(resp.status_code === 404
                    ? _this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable")
                    : _this.hass.localize("ui.panel.config.automation.editor.load_error_unknown", "err_no", resp.status_code));
                history.back();
            });
        }
        if (changedProps.has("creatingNew") && this.creatingNew && this.hass) {
            this._dirty = false;
            this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ alias: this.hass.localize("ui.panel.config.automation.editor.default_name"), description: "", trigger: [{ platform: "state" }], condition: [], action: [{ service: "" }] }, Object(_data_automation__WEBPACK_IMPORTED_MODULE_14__["getAutomationEditorInitData"])());
        }
        if (changedProps.has("_config") && this.hass) {
            this._rendered = AutomationEditor(this.shadowRoot.querySelector("#root"), {
                automation: this._config,
                onChange: this._configChanged,
                isWide: this.isWide,
                hass: this.hass,
                localize: this.hass.localize,
            }, this._rendered);
        }
    };
    HaAutomationEditor.prototype._configChanged = function (config) {
        // onChange gets called a lot during initial rendering causing recursing calls.
        if (!this._rendered) {
            return;
        }
        this._config = config;
        this._errors = undefined;
        this._dirty = true;
    };
    HaAutomationEditor.prototype._backTapped = function () {
        if (this._dirty &&
            !confirm(this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"))) {
            return;
        }
        history.back();
    };
    HaAutomationEditor.prototype._delete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Are you sure you want to delete this automation?")) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Object(_data_automation__WEBPACK_IMPORTED_MODULE_14__["deleteAutomation"])(this.hass, this.automation.attributes.id)];
                    case 1:
                        _a.sent();
                        history.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    HaAutomationEditor.prototype._saveAutomation = function () {
        var _this = this;
        var id = this.creatingNew
            ? "" + Date.now()
            : this.automation.attributes.id;
        this.hass.callApi("POST", "config/automation/config/" + id, this._config).then(function () {
            _this._dirty = false;
            if (_this.creatingNew) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_15__["navigate"])(_this, "/config/automation/edit/" + id, true);
            }
        }, function (errors) {
            _this._errors = errors.body.message;
            throw errors;
        });
    };
    Object.defineProperty(HaAutomationEditor, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_13__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ha-card {\n          overflow: hidden;\n        }\n        .errors {\n          padding: 20px;\n          font-weight: bold;\n          color: var(--google-red-500);\n        }\n        .content {\n          padding-bottom: 20px;\n        }\n        .triggers,\n        .script {\n          margin-top: -16px;\n        }\n        .triggers ha-card,\n        .script ha-card {\n          margin-top: 16px;\n        }\n        .add-card mwc-button {\n          display: block;\n          text-align: center;\n        }\n        .card-menu {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n          color: var(--primary-text-color);\n        }\n        .rtl .card-menu {\n          right: auto;\n          left: 0;\n        }\n        .card-menu paper-item {\n          cursor: pointer;\n        }\n        span[slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n          margin-bottom: -80px;\n          transition: margin-bottom 0.3s;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[dirty] {\n          margin-bottom: 0;\n        }\n\n        ha-fab.rtl {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[is-wide].rtl {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      "], ["\n        ha-card {\n          overflow: hidden;\n        }\n        .errors {\n          padding: 20px;\n          font-weight: bold;\n          color: var(--google-red-500);\n        }\n        .content {\n          padding-bottom: 20px;\n        }\n        .triggers,\n        .script {\n          margin-top: -16px;\n        }\n        .triggers ha-card,\n        .script ha-card {\n          margin-top: 16px;\n        }\n        .add-card mwc-button {\n          display: block;\n          text-align: center;\n        }\n        .card-menu {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n          color: var(--primary-text-color);\n        }\n        .rtl .card-menu {\n          right: auto;\n          left: 0;\n        }\n        .card-menu paper-item {\n          cursor: pointer;\n        }\n        span[slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n          margin-bottom: -80px;\n          transition: margin-bottom 0.3s;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[dirty] {\n          margin-bottom: 0;\n        }\n\n        ha-fab.rtl {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[is-wide].rtl {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    return HaAutomationEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

customElements.define("ha-automation-editor", HaAutomationEditor);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ "./src/panels/config/automation/ha-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-picker.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
















var HaAutomationPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaAutomationPicker, _super);
    function HaAutomationPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaAutomationPicker.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage\n        .header=", "\n      >\n        <ha-config-section .isWide=", ">\n          <div slot=\"header\">\n            ", "\n          </div>\n          <div slot=\"introduction\">\n            ", "\n            <p>\n              <a\n                href=\"https://home-assistant.io/docs/automation/editor/\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </p>\n          </div>\n\n          <ha-card\n            .heading=", "\n          >\n            ", "\n          </ha-card>\n        </ha-config-section>\n\n        <a href=\"/config/automation/new\">\n          <ha-fab\n            slot=\"fab\"\n            ?is-wide=", "\n            icon=\"hass:plus\"\n            title=", "\n            ?rtl=", "\n          ></ha-fab\n        ></a>\n      </hass-subpage>\n    "], ["\n      <hass-subpage\n        .header=", "\n      >\n        <ha-config-section .isWide=", ">\n          <div slot=\"header\">\n            ", "\n          </div>\n          <div slot=\"introduction\">\n            ",
            "\n            <p>\n              <a\n                href=\"https://home-assistant.io/docs/automation/editor/\"\n                target=\"_blank\"\n              >\n                ",
            "\n              </a>\n            </p>\n          </div>\n\n          <ha-card\n            .heading=",
            "\n          >\n            ",
            "\n          </ha-card>\n        </ha-config-section>\n\n        <a href=\"/config/automation/new\">\n          <ha-fab\n            slot=\"fab\"\n            ?is-wide=", "\n            icon=\"hass:plus\"\n            title=",
            "\n            ?rtl=", "\n          ></ha-fab\n        ></a>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.automation.caption"), this.isWide, this.hass.localize("ui.panel.config.automation.picker.header"), this.hass.localize("ui.panel.config.automation.picker.introduction"), this.hass.localize("ui.panel.config.automation.picker.learn_more"), this.hass.localize("ui.panel.config.automation.picker.pick_automation"), this.automations.length === 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <div class=\"card-content\">\n                    <p>\n                      ", "\n                    </p>\n                  </div>\n                "], ["\n                  <div class=\"card-content\">\n                    <p>\n                      ",
                "\n                    </p>\n                  </div>\n                "])), this.hass.localize("ui.panel.config.automation.picker.no_automations")) : this.automations.map(function (automation) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n\n                      <div class='automation'>\n                        <ha-entity-toggle\n                          .hass=", "\n                          .stateObj=", "\n                        ></ha-entity-toggle>\n\n                        <paper-item-body two-line>\n                          <div>", "</div>\n                          <div secondary>\n                            Last triggered: ", "\n                          </div>\n                        </paper-item-body>\n                        <div class='actions'>\n                          <paper-icon-button\n                            .automation=", "\n                            @click=", "\n                            icon=\"hass:information-outline\"\n                          ></paper-icon-button>\n                          <a\n                            href=", "\n                          >\n                            <paper-icon-button\n                              icon=\"hass:pencil\"\n                              .disabled=", "\n                            ></paper-icon-button>\n                            ", "\n                          </a>\n                        </div>\n                      </div>\n                    </a>\n                  "], ["\n\n                      <div class='automation'>\n                        <ha-entity-toggle\n                          .hass=", "\n                          .stateObj=", "\n                        ></ha-entity-toggle>\n\n                        <paper-item-body two-line>\n                          <div>", "</div>\n                          <div secondary>\n                            Last triggered: ",
            "\n                          </div>\n                        </paper-item-body>\n                        <div class='actions'>\n                          <paper-icon-button\n                            .automation=", "\n                            @click=", "\n                            icon=\"hass:information-outline\"\n                          ></paper-icon-button>\n                          <a\n                            href=",
            "\n                          >\n                            <paper-icon-button\n                              icon=\"hass:pencil\"\n                              .disabled=", "\n                            ></paper-icon-button>\n                            ",
            "\n                          </a>\n                        </div>\n                      </div>\n                    </a>\n                  "])), _this.hass, automation, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["computeStateName"])(automation), automation.attributes.last_triggered
            ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(automation.attributes.last_triggered), _this.hass.language)
            : "never", automation, _this._showInfo, Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_2__["ifDefined"])(automation.attributes.id
            ? "/config/automation/edit/" + automation.attributes.id
            : undefined), !automation.attributes.id, !automation.attributes.id
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                    <paper-tooltip position=\"left\">\n                                      Only automations defined in\n                                      automations.yaml are editable.\n                                    </paper-tooltip>\n                                  "], ["\n                                    <paper-tooltip position=\"left\">\n                                      Only automations defined in\n                                      automations.yaml are editable.\n                                    </paper-tooltip>\n                                  "]))) : ""); }), this.isWide, this.hass.localize("ui.panel.config.automation.picker.add_automation"), Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__["computeRTL"])(this.hass));
    };
    HaAutomationPicker.prototype._showInfo = function (ev) {
        var entityId = ev.currentTarget.automation.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__["fireEvent"])(this, "hass-more-info", { entityId: entityId });
    };
    Object.defineProperty(HaAutomationPicker, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_13__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          margin-bottom: 56px;\n        }\n\n        .automation {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px 0 16px;\n        }\n\n        .automation a[href] {\n          color: var(--primary-text-color);\n        }\n\n        ha-entity-toggle {\n          margin-right: 16px;\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "], ["\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          margin-bottom: 56px;\n        }\n\n        .automation {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px 0 16px;\n        }\n\n        .automation a[href] {\n          color: var(--primary-text-color);\n        }\n\n        ha-entity-toggle {\n          margin-right: 16px;\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaAutomationPicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaAutomationPicker.prototype, "isWide", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaAutomationPicker.prototype, "automations", void 0);
    HaAutomationPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-automation-picker")
    ], HaAutomationPicker);
    return HaAutomationPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ }),

/***/ "./src/panels/config/automation/ha-config-automation.js":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-config-automation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_automation_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-automation-editor */ "./src/panels/config/automation/ha-automation-editor.ts");
/* harmony import */ var _ha_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-automation-picker */ "./src/panels/config/automation/ha-automation-picker.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-automation-picker,\n        ha-automation-editor {\n          height: 100%;\n        }\n      </style>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/edit/:automation\"\n        data=\"{{_routeData}}\"\n        active=\"{{_edittingAutomation}}\"\n      ></app-route>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/new\"\n        active=\"{{_creatingNew}}\"\n      ></app-route>\n\n      <template is=\"dom-if\" if=\"[[!showEditor]]\">\n        <ha-automation-picker\n          hass=\"[[hass]]\"\n          automations=\"[[automations]]\"\n          is-wide=\"[[isWide]]\"\n        ></ha-automation-picker>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[showEditor]]\" restamp=\"\">\n        <ha-automation-editor\n          hass=\"[[hass]]\"\n          automation=\"[[automation]]\"\n          is-wide=\"[[isWide]]\"\n          creating-new=\"[[_creatingNew]]\"\n        ></ha-automation-editor>\n      </template>\n    "]);

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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var HaConfigAutomation =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigAutomation, _PolymerElement);

  function HaConfigAutomation() {
    _classCallCheck(this, HaConfigAutomation);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigAutomation).apply(this, arguments));
  }

  _createClass(HaConfigAutomation, [{
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaConfigAutomation.prototype), "disconnectedCallback", this).call(this);

      this.route = {
        path: "",
        prefix: ""
      };
    }
  }, {
    key: "computeAutomation",
    value: function computeAutomation(automations, edittingAddon, routeData) {
      if (!automations || !edittingAddon) {
        return null;
      }

      for (var i = 0; i < automations.length; i++) {
        if (automations[i].attributes.id === routeData.automation) {
          return automations[i];
        }
      }

      return null;
    }
  }, {
    key: "computeAutomations",
    value: function computeAutomations(hass) {
      var automations = [];
      Object.keys(hass.states).forEach(function (key) {
        var entity = hass.states[key];

        if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(entity) === "automation") {
          automations.push(entity);
        }
      });
      return automations.sort(function entitySortBy(entityA, entityB) {
        var nameA = (entityA.attributes.alias || entityA.entity_id).toLowerCase();
        var nameB = (entityB.attributes.alias || entityB.entity_id).toLowerCase();

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
  }, {
    key: "computeShowEditor",
    value: function computeShowEditor(_edittingAutomation, _creatingNew) {
      return _creatingNew || _edittingAutomation;
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
        hass: Object,
        route: Object,
        isWide: Boolean,
        _routeData: Object,
        _routeMatches: Boolean,
        _creatingNew: Boolean,
        _edittingAutomation: Boolean,
        automations: {
          type: Array,
          computed: "computeAutomations(hass)"
        },
        automation: {
          type: Object,
          computed: "computeAutomation(automations, _edittingAutomation, _routeData)"
        },
        showEditor: {
          type: Boolean,
          computed: "computeShowEditor(_edittingAutomation, _creatingNew)"
        }
      };
    }
  }]);

  return HaConfigAutomation;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-config-automation", HaConfigAutomation);

/***/ }),

/***/ "./src/panels/config/js/automation.tsx":
/*!*********************************************!*\
  !*** ./src/panels/config/js/automation.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _trigger_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trigger/index */ "./src/panels/config/js/trigger/index.tsx");
/* harmony import */ var _condition_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./condition/index */ "./src/panels/config/js/condition/index.tsx");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.tsx");









var Automation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Automation, _super);
    function Automation() {
        var _this = _super.call(this) || this;
        _this.onChange = _this.onChange.bind(_this);
        _this.triggerChanged = _this.triggerChanged.bind(_this);
        _this.conditionChanged = _this.conditionChanged.bind(_this);
        _this.actionChanged = _this.actionChanged.bind(_this);
        return _this;
    }
    Automation.prototype.onChange = function (ev) {
        var _a;
        this.props.onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.automation), (_a = {}, _a[ev.target.name] = ev.target.value, _a)));
    };
    Automation.prototype.triggerChanged = function (trigger) {
        this.props.onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.automation), { trigger: trigger }));
    };
    Automation.prototype.conditionChanged = function (condition) {
        this.props.onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.automation), { condition: condition }));
    };
    Automation.prototype.actionChanged = function (action) {
        this.props.onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.automation), { action: action }));
    };
    Automation.prototype.render = function (_a) {
        var automation = _a.automation, isWide = _a.isWide, hass = _a.hass, localize = _a.localize;
        var alias = automation.alias, description = automation.description, trigger = automation.trigger, condition = automation.condition, action = automation.action;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "header" }, alias),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "introduction" }, localize("ui.panel.config.automation.editor.introduction")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-content" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.alias"), name: "alias", value: alias, "onvalue-changed": this.onChange }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.description.label"), placeholder: localize("ui.panel.config.automation.editor.description.placeholder"), name: "description", value: description, "onvalue-changed": this.onChange })))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "header" }, localize("ui.panel.config.automation.editor.triggers.header")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "introduction" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null, localize("ui.panel.config.automation.editor.triggers.introduction")),
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: "https://home-assistant.io/docs/automation/trigger/", target: "_blank" }, localize("ui.panel.config.automation.editor.triggers.learn_more"))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_trigger_index__WEBPACK_IMPORTED_MODULE_6__["default"], { trigger: trigger, onChange: this.triggerChanged, hass: hass, localize: localize })),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "header" }, localize("ui.panel.config.automation.editor.conditions.header")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "introduction" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null, localize("ui.panel.config.automation.editor.conditions.introduction")),
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: "https://home-assistant.io/docs/scripts/conditions/", target: "_blank" }, localize("ui.panel.config.automation.editor.conditions.learn_more"))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_condition_index__WEBPACK_IMPORTED_MODULE_7__["default"], { condition: condition || [], onChange: this.conditionChanged, hass: hass, localize: localize })),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "header" }, localize("ui.panel.config.automation.editor.actions.header")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "introduction" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null, localize("ui.panel.config.automation.editor.actions.introduction")),
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: "https://home-assistant.io/docs/automation/action/", target: "_blank" }, localize("ui.panel.config.automation.editor.actions.learn_more"))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_8__["default"], { script: action, onChange: this.actionChanged, hass: hass, localize: localize }))));
    };
    return Automation;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Automation);


/***/ }),

/***/ "./src/panels/config/js/trigger/device.tsx":
/*!*************************************************!*\
  !*** ./src/panels/config/js/trigger/device.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_device_ha_device_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/device/ha-device-picker */ "./src/components/device/ha-device-picker.ts");
/* harmony import */ var _components_device_ha_device_trigger_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/device/ha-device-trigger-picker */ "./src/components/device/ha-device-trigger-picker.ts");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _data_device_automation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../data/device_automation */ "./src/data/device_automation.ts");






var DeviceTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DeviceTrigger, _super);
    function DeviceTrigger() {
        var _this = _super.call(this) || this;
        _this.devicePicked = _this.devicePicked.bind(_this);
        _this.deviceTriggerPicked = _this.deviceTriggerPicked.bind(_this);
        _this._extraFieldsChanged = _this._extraFieldsChanged.bind(_this);
        _this.state = { device_id: undefined, capabilities: undefined };
        return _this;
    }
    DeviceTrigger.prototype.devicePicked = function (ev) {
        this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state), { device_id: ev.target.value }));
    };
    DeviceTrigger.prototype.deviceTriggerPicked = function (ev) {
        var trigger = ev.target.value;
        if (this._origTrigger &&
            Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["deviceAutomationsEqual"])(this._origTrigger, trigger)) {
            trigger = this._origTrigger;
        }
        this.props.onChange(this.props.index, trigger);
    };
    /* eslint-disable camelcase */
    DeviceTrigger.prototype.render = function (_a, _b) {
        var _this = this;
        var trigger = _a.trigger, hass = _a.hass;
        var device_id = _b.device_id, capabilities = _b.capabilities;
        if (device_id === undefined) {
            device_id = trigger.device_id;
        }
        var extraFieldsData = capabilities && capabilities.extra_fields
            ? capabilities.extra_fields.map(function (item) {
                var _a;
                return _a = {}, _a[item.name] = _this.props.trigger[item.name], _a;
            })
            : undefined;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-device-picker", { value: device_id, onChange: this.devicePicked, hass: hass, label: "Device" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-device-trigger-picker", { value: trigger, deviceId: device_id, onChange: this.deviceTriggerPicked, hass: hass, label: "Trigger" }),
            extraFieldsData && (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-form", { data: Object.assign.apply(Object, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([{}], extraFieldsData)), "onData-changed": this._extraFieldsChanged, schema: this.state.capabilities.extra_fields, computeLabel: this._extraFieldsComputeLabelCallback(hass.localize) }))));
    };
    DeviceTrigger.prototype.componentDidMount = function () {
        if (!this.state.capabilities) {
            this._getCapabilities();
        }
        if (this.props.trigger) {
            this._origTrigger = this.props.trigger;
        }
    };
    DeviceTrigger.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.trigger !== this.props.trigger) {
            this._getCapabilities();
        }
    };
    DeviceTrigger.prototype._getCapabilities = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var trigger, capabilities, _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        trigger = this.props.trigger;
                        if (!trigger.domain) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(_data_device_automation__WEBPACK_IMPORTED_MODULE_5__["fetchDeviceTriggerCapabilities"])(this.props.hass, trigger)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3:
                        capabilities = _a;
                        this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state), { capabilities: capabilities }));
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceTrigger.prototype._extraFieldsChanged = function (ev) {
        var _a;
        if (!ev.detail.path) {
            return;
        }
        var item = ev.detail.path.replace("data.", "");
        var value = ev.detail.value || undefined;
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), (_a = {}, _a[item] = value, _a)));
    };
    DeviceTrigger.prototype._extraFieldsComputeLabelCallback = function (localize) {
        // Returns a callback for ha-form to calculate labels per schema object
        return function (schema) {
            return localize("ui.panel.config.automation.editor.triggers.type.device.extra_fields." + schema.name) || schema.name;
        };
    };
    return DeviceTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (DeviceTrigger);
DeviceTrigger.defaultConfig = {
    device_id: "",
    domain: "",
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/event.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/event.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _yaml_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../yaml_textarea */ "./src/panels/config/js/yaml_textarea.tsx");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





var EventTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(EventTrigger, _super);
    function EventTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_this, "trigger");
        _this.eventDataChanged = _this.eventDataChanged.bind(_this);
        return _this;
    }
    /* eslint-disable camelcase */
    // tslint:disable-next-line: variable-name
    EventTrigger.prototype.eventDataChanged = function (event_data) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { event_data: event_data }));
    };
    EventTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var event_type = trigger.event_type, event_data = trigger.event_data;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.event.event_type"), name: "event_type", value: event_type, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_yaml_textarea__WEBPACK_IMPORTED_MODULE_3__["default"], { label: localize("ui.panel.config.automation.editor.triggers.type.event.event_data"), value: event_data, onChange: this.eventDataChanged })));
    };
    return EventTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (EventTrigger);
EventTrigger.defaultConfig = {
    event_type: "",
    event_data: {},
};


/***/ }),

/***/ "./src/panels/config/js/trigger/geo_location.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/geo_location.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");






var GeolocationTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationTrigger, _super);
    function GeolocationTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_5__["onChangeEvent"].bind(_this, "trigger");
        _this.zonePicked = _this.zonePicked.bind(_this);
        _this.radioGroupPicked = _this.radioGroupPicked.bind(_this);
        return _this;
    }
    GeolocationTrigger.prototype.zonePicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { zone: ev.target.value }));
    };
    GeolocationTrigger.prototype.radioGroupPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { event: ev.target.selected }));
    };
    /* eslint-disable camelcase */
    GeolocationTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, hass = _a.hass, localize = _a.localize;
        var source = trigger.source, zone = trigger.zone, event = trigger.event;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.source"), name: "source", value: source, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.zone"), value: zone, onChange: this.zonePicked, hass: hass, allowCustomEntity: true, domainFilter: "zone" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "enter" }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.enter")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "leave" }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.leave")))));
    };
    return GeolocationTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (GeolocationTrigger);
GeolocationTrigger.defaultConfig = {
    source: "",
    zone: "",
    event: "enter",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/homeassistant.tsx":
/*!********************************************************!*\
  !*** ./src/panels/config/js/trigger/homeassistant.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");




var HassTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HassTrigger, _super);
    function HassTrigger() {
        var _this = _super.call(this) || this;
        _this.radioGroupPicked = _this.radioGroupPicked.bind(_this);
        return _this;
    }
    HassTrigger.prototype.radioGroupPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { event: ev.target.selected }));
    };
    /* eslint-disable camelcase */
    HassTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var event = trigger.event;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "start" }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "shutdown" }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown")))));
    };
    return HassTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (HassTrigger);
HassTrigger.defaultConfig = {
    event: "start",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/index.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trigger_row */ "./src/panels/config/js/trigger/trigger_row.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.tsx");






var Trigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Trigger, _super);
    function Trigger() {
        var _this = _super.call(this) || this;
        _this.addTrigger = _this.addTrigger.bind(_this);
        _this.triggerChanged = _this.triggerChanged.bind(_this);
        return _this;
    }
    Trigger.prototype.addTrigger = function () {
        var trigger = this.props.trigger.concat(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ platform: "state" }, _state__WEBPACK_IMPORTED_MODULE_5__["default"].defaultConfig));
        this.props.onChange(trigger);
    };
    Trigger.prototype.triggerChanged = function (index, newValue) {
        var trigger = this.props.trigger.concat();
        if (newValue === null) {
            trigger.splice(index, 1);
        }
        else {
            trigger[index] = newValue;
        }
        this.props.onChange(trigger);
    };
    Trigger.prototype.render = function (_a) {
        var _this = this;
        var trigger = _a.trigger, hass = _a.hass, localize = _a.localize;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "triggers" },
            trigger.map(function (trg, idx) { return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_trigger_row__WEBPACK_IMPORTED_MODULE_4__["default"], { index: idx, trigger: trg, onChange: _this.triggerChanged, hass: hass, localize: localize })); }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-actions add-card" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("mwc-button", { onTap: this.addTrigger }, localize("ui.panel.config.automation.editor.triggers.add"))))));
    };
    return Trigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Trigger);


/***/ }),

/***/ "./src/panels/config/js/trigger/mqtt.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/mqtt.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var MQTTTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MQTTTrigger, _super);
    function MQTTTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "trigger");
        return _this;
    }
    /* eslint-disable camelcase */
    MQTTTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var topic = trigger.topic, payload = trigger.payload;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.topic"), name: "topic", value: topic, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.payload"), name: "payload", value: payload, "onvalue-changed": this.onChange })));
    };
    return MQTTTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (MQTTTrigger);
MQTTTrigger.defaultConfig = {
    topic: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/numeric_state.tsx":
/*!********************************************************!*\
  !*** ./src/panels/config/js/trigger/numeric_state.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");






var NumericStateTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NumericStateTrigger, _super);
    function NumericStateTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_5__["onChangeEvent"].bind(_this, "trigger");
        _this.entityPicked = _this.entityPicked.bind(_this);
        return _this;
    }
    NumericStateTrigger.prototype.entityPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { entity_id: ev.target.value }));
    };
    /* eslint-disable camelcase */
    NumericStateTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, hass = _a.hass, localize = _a.localize;
        var value_template = trigger.value_template, entity_id = trigger.entity_id, below = trigger.below, above = trigger.above;
        var trgFor = trigger.for;
        if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
            // If the trigger was defined using the yaml dict syntax, convert it to
            // the equivalent string format
            var _b = trgFor.hours, hours = _b === void 0 ? 0 : _b, _c = trgFor.minutes, minutes = _c === void 0 ? 0 : _c, _d = trgFor.seconds, seconds = _d === void 0 ? 0 : _d;
            hours = hours.toString();
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
            trgFor = hours + ":" + minutes + ":" + seconds;
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"), name: "above", value: above, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"), name: "below", value: below, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.for"), name: "for", value: trgFor, "onvalue-changed": this.onChange })));
    };
    return NumericStateTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (NumericStateTrigger);
NumericStateTrigger.defaultConfig = {
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/state.tsx":
/*!************************************************!*\
  !*** ./src/panels/config/js/trigger/state.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





var StateTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateTrigger, _super);
    function StateTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_this, "trigger");
        _this.entityPicked = _this.entityPicked.bind(_this);
        return _this;
    }
    StateTrigger.prototype.entityPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { entity_id: ev.target.value }));
    };
    /* eslint-disable camelcase */
    StateTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, hass = _a.hass, localize = _a.localize;
        var entity_id = trigger.entity_id, to = trigger.to;
        var trgFrom = trigger.from;
        var trgFor = trigger.for;
        if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
            // If the trigger was defined using the yaml dict syntax, convert it to
            // the equivalent string format
            var _b = trgFor.hours, hours = _b === void 0 ? 0 : _b, _c = trgFor.minutes, minutes = _c === void 0 ? 0 : _c, _d = trgFor.seconds, seconds = _d === void 0 ? 0 : _d;
            hours = hours.toString();
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
            trgFor = hours + ":" + minutes + ":" + seconds;
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.from"), name: "from", value: trgFrom, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.to"), name: "to", value: to, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.state.for"), name: "for", value: trgFor, "onvalue-changed": this.onChange })));
    };
    return StateTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (StateTrigger);
StateTrigger.defaultConfig = {
    entity_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/sun.tsx":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/sun.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");






var SunTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SunTrigger, _super);
    function SunTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_5__["onChangeEvent"].bind(_this, "trigger");
        _this.radioGroupPicked = _this.radioGroupPicked.bind(_this);
        return _this;
    }
    SunTrigger.prototype.radioGroupPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { event: ev.target.selected }));
    };
    /* eslint-disable camelcase */
    SunTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var offset = trigger.offset, event = trigger.event;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.sun.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "sunrise" }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "sunset" }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunset"))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.sun.offset"), name: "offset", value: offset, "onvalue-changed": this.onChange })));
    };
    return SunTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (SunTrigger);
SunTrigger.defaultConfig = {
    event: "sunrise",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/template.tsx":
/*!***************************************************!*\
  !*** ./src/panels/config/js/trigger/template.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var TemplateTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TemplateTrigger, _super);
    function TemplateTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "trigger");
        return _this;
    }
    TemplateTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        /* eslint-disable camelcase */
        var value_template = trigger.value_template;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-textarea", { label: localize("ui.panel.config.automation.editor.triggers.type.template.value_template"), name: "value_template", value: value_template, "onvalue-changed": this.onChange, dir: "ltr" })));
    };
    return TemplateTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TemplateTrigger);
TemplateTrigger.defaultConfig = {
    value_template: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/time.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/time.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var TimeTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeTrigger, _super);
    function TimeTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "trigger");
        return _this;
    }
    /* eslint-disable camelcase */
    TimeTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var at = trigger.at;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time.at"), name: "at", value: at, "onvalue-changed": this.onChange })));
    };
    return TimeTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TimeTrigger);
TimeTrigger.defaultConfig = {
    at: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/time_pattern.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/time_pattern.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var TimePatternTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimePatternTrigger, _super);
    function TimePatternTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "trigger");
        return _this;
    }
    /* eslint-disable camelcase */
    TimePatternTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var hours = trigger.hours, minutes = trigger.minutes, seconds = trigger.seconds;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.hours"), name: "hours", value: hours, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"), name: "minutes", value: minutes, "onvalue-changed": this.onChange }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"), name: "seconds", value: seconds, "onvalue-changed": this.onChange })));
    };
    return TimePatternTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TimePatternTrigger);
TimePatternTrigger.defaultConfig = {
    hours: "",
    minutes: "",
    seconds: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_edit.tsx":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_edit.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device */ "./src/panels/config/js/trigger/device.tsx");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/trigger/event.tsx");
/* harmony import */ var _geo_location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geo_location */ "./src/panels/config/js/trigger/geo_location.tsx");
/* harmony import */ var _homeassistant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homeassistant */ "./src/panels/config/js/trigger/homeassistant.tsx");
/* harmony import */ var _mqtt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mqtt */ "./src/panels/config/js/trigger/mqtt.tsx");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/trigger/numeric_state.tsx");
/* harmony import */ var _time_pattern__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time_pattern */ "./src/panels/config/js/trigger/time_pattern.tsx");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.tsx");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/trigger/sun.tsx");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/trigger/template.tsx");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/trigger/time.tsx");
/* harmony import */ var _webhook__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./webhook */ "./src/panels/config/js/trigger/webhook.tsx");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/trigger/zone.tsx");


















var TYPES = {
    device: _device__WEBPACK_IMPORTED_MODULE_5__["default"],
    event: _event__WEBPACK_IMPORTED_MODULE_6__["default"],
    state: _state__WEBPACK_IMPORTED_MODULE_12__["default"],
    geo_location: _geo_location__WEBPACK_IMPORTED_MODULE_7__["default"],
    homeassistant: _homeassistant__WEBPACK_IMPORTED_MODULE_8__["default"],
    mqtt: _mqtt__WEBPACK_IMPORTED_MODULE_9__["default"],
    numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_10__["default"],
    sun: _sun__WEBPACK_IMPORTED_MODULE_13__["default"],
    template: _template__WEBPACK_IMPORTED_MODULE_14__["default"],
    time: _time__WEBPACK_IMPORTED_MODULE_15__["default"],
    time_pattern: _time_pattern__WEBPACK_IMPORTED_MODULE_11__["default"],
    webhook: _webhook__WEBPACK_IMPORTED_MODULE_16__["default"],
    zone: _zone__WEBPACK_IMPORTED_MODULE_17__["default"],
};
var OPTIONS = Object.keys(TYPES).sort();
var TriggerEdit = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TriggerEdit, _super);
    function TriggerEdit() {
        var _this = _super.call(this) || this;
        _this.typeChanged = _this.typeChanged.bind(_this);
        return _this;
    }
    TriggerEdit.prototype.render = function (_a) {
        var index = _a.index, trigger = _a.trigger, onChange = _a.onChange, hass = _a.hass, localize = _a.localize;
        // tslint:disable-next-line: variable-name
        var Comp = TYPES[trigger.platform];
        var selected = OPTIONS.indexOf(trigger.platform);
        if (!Comp) {
            return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
                localize("ui.panel.config.automation.editor.triggers.unsupported_platform", "platform", trigger.platform),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("pre", null, JSON.stringify(trigger, null, 2))));
        }
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-dropdown-menu-light", { label: localize("ui.panel.config.automation.editor.triggers.type_select"), "no-animations": true },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-listbox", { slot: "dropdown-content", selected: selected, "oniron-select": this.typeChanged }, OPTIONS.map(function (opt) { return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { platform: opt }, localize("ui.panel.config.automation.editor.triggers.type." + opt + ".label"))); }))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(Comp, { index: index, trigger: trigger, onChange: onChange, hass: hass, localize: localize })));
    };
    TriggerEdit.prototype.typeChanged = function (ev) {
        var type = ev.target.selectedItem.attributes.platform.value;
        if (type !== this.props.trigger.platform) {
            this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ platform: type }, TYPES[type].defaultConfig));
        }
    };
    return TriggerEdit;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TriggerEdit);


/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_row.tsx":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_row.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trigger_edit */ "./src/panels/config/js/trigger/trigger_edit.tsx");








var TriggerRow = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TriggerRow, _super);
    function TriggerRow() {
        var _this = _super.call(this) || this;
        _this.onDelete = _this.onDelete.bind(_this);
        return _this;
    }
    TriggerRow.prototype.render = function (props) {
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-content" },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-menu" },
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-menu-button", { "no-animations": true, "horizontal-align": "right", "horizontal-offset": "-5", "vertical-offset": "-5" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-icon-button", { icon: "hass:dots-vertical", slot: "dropdown-trigger" }),
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-listbox", { slot: "dropdown-content" },
                            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { disabled: true }, props.localize("ui.panel.config.automation.editor.triggers.duplicate")),
                            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-item", { onTap: this.onDelete }, props.localize("ui.panel.config.automation.editor.triggers.delete"))))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_trigger_edit__WEBPACK_IMPORTED_MODULE_7__["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)))));
    };
    TriggerRow.prototype.onDelete = function () {
        // eslint-disable-next-line
        if (confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))) {
            this.props.onChange(this.props.index, null);
        }
    };
    return TriggerRow;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (TriggerRow);


/***/ }),

/***/ "./src/panels/config/js/trigger/webhook.tsx":
/*!**************************************************!*\
  !*** ./src/panels/config/js/trigger/webhook.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




var WebhookTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(WebhookTrigger, _super);
    function WebhookTrigger() {
        var _this = _super.call(this) || this;
        _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_this, "trigger");
        return _this;
    }
    WebhookTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, localize = _a.localize;
        var webhookId = trigger.webhook_id;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"), name: "webhook_id", value: webhookId, "onvalue-changed": this.onChange })));
    };
    return WebhookTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (WebhookTrigger);
WebhookTrigger.defaultConfig = {
    webhook_id: "",
};


/***/ }),

/***/ "./src/panels/config/js/trigger/zone.tsx":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/zone.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");







function zoneAndLocationFilter(stateObj) {
    return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__["hasLocation"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(stateObj) !== "zone";
}
var ZoneTrigger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZoneTrigger, _super);
    function ZoneTrigger() {
        var _this = _super.call(this) || this;
        _this.radioGroupPicked = _this.radioGroupPicked.bind(_this);
        _this.entityPicked = _this.entityPicked.bind(_this);
        _this.zonePicked = _this.zonePicked.bind(_this);
        return _this;
    }
    /* eslint-disable camelcase */
    ZoneTrigger.prototype.render = function (_a) {
        var trigger = _a.trigger, hass = _a.hass, localize = _a.localize;
        var entity_id = trigger.entity_id, zone = trigger.zone, event = trigger.event;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.triggers.type.zone.entity"), value: entity_id, onChange: this.entityPicked, hass: hass, allowCustomEntity: true, entityFilter: zoneAndLocationFilter }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-entity-picker", { label: localize("ui.panel.config.automation.editor.triggers.type.zone.zone"), value: zone, onChange: this.zonePicked, hass: hass, allowCustomEntity: true, domainFilter: "zone" }),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("label", { id: "eventlabel" }, localize("ui.panel.config.automation.editor.triggers.type.zone.event")),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-group", { selected: event, "aria-labelledby": "eventlabel", "onpaper-radio-group-changed": this.radioGroupPicked },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "enter" }, localize("ui.panel.config.automation.editor.triggers.type.zone.enter")),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-radio-button", { name: "leave" }, localize("ui.panel.config.automation.editor.triggers.type.zone.leave")))));
    };
    ZoneTrigger.prototype.entityPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { entity_id: ev.target.value }));
    };
    ZoneTrigger.prototype.zonePicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { zone: ev.target.value }));
    };
    ZoneTrigger.prototype.radioGroupPicked = function (ev) {
        this.props.onChange(this.props.index, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.trigger), { event: ev.target.selected }));
    };
    return ZoneTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ZoneTrigger);
ZoneTrigger.defaultConfig = {
    entity_id: "",
    zone: "",
    event: "enter",
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWF1dG9tYXRpb24uY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS10cmlnZ2VyLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRvbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2F1dG9tYXRpb24vaGEtYXV0b21hdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXV0b21hdGlvbi9oYS1hdXRvbWF0aW9uLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9hdXRvbWF0aW9uL2hhLWNvbmZpZy1hdXRvbWF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL2F1dG9tYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvZGV2aWNlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2V2ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2dlb19sb2NhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9ob21lYXNzaXN0YW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL21xdHQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvbnVtZXJpY19zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci9zdW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdGltZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvanMvdHJpZ2dlci90aW1lX3BhdHRlcm4udHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvdHJpZ2dlcl9lZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3RyaWdnZXJfcm93LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9qcy90cmlnZ2VyL3dlYmhvb2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3RyaWdnZXIvem9uZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQge1xuICBEZXZpY2VUcmlnZ2VyLFxuICBmZXRjaERldmljZVRyaWdnZXJzLFxuICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25UcmlnZ2VyLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfYXV0b21hdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgeyBIYURldmljZUF1dG9tYXRpb25QaWNrZXIgfSBmcm9tIFwiLi9oYS1kZXZpY2UtYXV0b21hdGlvbi1waWNrZXJcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1kZXZpY2UtdHJpZ2dlci1waWNrZXJcIilcbmNsYXNzIEhhRGV2aWNlVHJpZ2dlclBpY2tlciBleHRlbmRzIEhhRGV2aWNlQXV0b21hdGlvblBpY2tlcjxEZXZpY2VUcmlnZ2VyPiB7XG4gIHByb3RlY3RlZCBOT19BVVRPTUFUSU9OX1RFWFQgPSBcIk5vIHRyaWdnZXJzXCI7XG4gIHByb3RlY3RlZCBVTktOT1dOX0FVVE9NQVRJT05fVEVYVCA9IFwiVW5rbm93biB0cmlnZ2VyXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXG4gICAgICBsb2NhbGl6ZURldmljZUF1dG9tYXRpb25UcmlnZ2VyLFxuICAgICAgZmV0Y2hEZXZpY2VUcmlnZ2VycyxcbiAgICAgIChkZXZpY2VJZD86IHN0cmluZykgPT4gKHtcbiAgICAgICAgZGV2aWNlX2lkOiBkZXZpY2VJZCB8fCBcIlwiLFxuICAgICAgICBwbGF0Zm9ybTogXCJkZXZpY2VcIixcbiAgICAgICAgZG9tYWluOiBcIlwiLFxuICAgICAgICBlbnRpdHlfaWQ6IFwiXCIsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWRldmljZS10cmlnZ2VyLXBpY2tlclwiOiBIYURldmljZVRyaWdnZXJQaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEhhc3NFbnRpdHlCYXNlLFxuICBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSxcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0b21hdGlvbkVudGl0eSBleHRlbmRzIEhhc3NFbnRpdHlCYXNlIHtcbiAgYXR0cmlidXRlczogSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UgJiB7XG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgbGFzdF90cmlnZ2VyZWQ6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdXRvbWF0aW9uQ29uZmlnIHtcbiAgYWxpYXM6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgdHJpZ2dlcjogYW55W107XG4gIGNvbmRpdGlvbj86IGFueVtdO1xuICBhY3Rpb246IGFueVtdO1xufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQXV0b21hdGlvbiA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBpZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9hdXRvbWF0aW9uL2NvbmZpZy8ke2lkfWApO1xuXG5sZXQgaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGE6IFBhcnRpYWw8QXV0b21hdGlvbkNvbmZpZz4gfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBjb25zdCBzaG93QXV0b21hdGlvbkVkaXRvciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBkYXRhPzogUGFydGlhbDxBdXRvbWF0aW9uQ29uZmlnPlxuKSA9PiB7XG4gIGluaXRpdGlhbEF1dG9tYXRpb25FZGl0b3JEYXRhID0gZGF0YTtcbiAgbmF2aWdhdGUoZWwsIFwiL2NvbmZpZy9hdXRvbWF0aW9uL25ld1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBdXRvbWF0aW9uRWRpdG9ySW5pdERhdGEgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBpbml0aXRpYWxBdXRvbWF0aW9uRWRpdG9yRGF0YTtcbiAgaW5pdGl0aWFsQXV0b21hdGlvbkVkaXRvckRhdGEgPSB1bmRlZmluZWQ7XG4gIHJldHVybiBkYXRhO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuaW1wb3J0IHsgaCwgcmVuZGVyIH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcblxuaW1wb3J0IEF1dG9tYXRpb24gZnJvbSBcIi4uL2pzL2F1dG9tYXRpb25cIjtcbmltcG9ydCB1bm1vdW50UHJlYWN0IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJlYWN0L3VubW91bnRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBBdXRvbWF0aW9uRW50aXR5LFxuICBBdXRvbWF0aW9uQ29uZmlnLFxuICBkZWxldGVBdXRvbWF0aW9uLFxuICBnZXRBdXRvbWF0aW9uRWRpdG9ySW5pdERhdGEsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2F1dG9tYXRpb25cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5mdW5jdGlvbiBBdXRvbWF0aW9uRWRpdG9yKG1vdW50RWwsIHByb3BzLCBtZXJnZUVsKSB7XG4gIHJldHVybiByZW5kZXIoaChBdXRvbWF0aW9uLCBwcm9wcyksIG1vdW50RWwsIG1lcmdlRWwpO1xufVxuXG5leHBvcnQgY2xhc3MgSGFBdXRvbWF0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGF1dG9tYXRpb24hOiBBdXRvbWF0aW9uRW50aXR5O1xuICBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgcHVibGljIGNyZWF0aW5nTmV3PzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY29uZmlnPzogQXV0b21hdGlvbkNvbmZpZztcbiAgcHJpdmF0ZSBfZGlydHk/OiBib29sZWFuO1xuICBwcml2YXRlIF9yZW5kZXJlZD86IHVua25vd247XG4gIHByaXZhdGUgX2Vycm9ycz86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGF1dG9tYXRpb246IHt9LFxuICAgICAgY3JlYXRpbmdOZXc6IHt9LFxuICAgICAgaXNXaWRlOiB7fSxcbiAgICAgIF9lcnJvcnM6IHt9LFxuICAgICAgX2RpcnR5OiB7fSxcbiAgICAgIF9jb25maWc6IHt9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2NvbmZpZ0NoYW5nZWQgPSB0aGlzLl9jb25maWdDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fcmVuZGVyZWQpIHtcbiAgICAgIHVubW91bnRQcmVhY3QodGhpcy5fcmVuZGVyZWQpO1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWFwcC1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlxuICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9iYWNrVGFwcGVkfVxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICAgJHt0aGlzLmF1dG9tYXRpb25cbiAgICAgICAgICAgICAgICA/IGNvbXB1dGVTdGF0ZU5hbWUodGhpcy5hdXRvbWF0aW9uKVxuICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5kZWZhdWx0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgJHt0aGlzLmNyZWF0aW5nTmV3XG4gICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fZGVsZXRlfVxuICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuX2Vycm9yc1xuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvcnNcIj4ke3RoaXMuX2Vycm9yc308L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwicm9vdFwiXG4gICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICBydGw6IGNvbXB1dGVSVEwodGhpcy5oYXNzKSxcbiAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhhLWZhYlxuICAgICAgICAgIHNsb3Q9XCJmYWJcIlxuICAgICAgICAgID9pcy13aWRlPVwiJHt0aGlzLmlzV2lkZX1cIlxuICAgICAgICAgID9kaXJ0eT1cIiR7dGhpcy5fZGlydHl9XCJcbiAgICAgICAgICBpY29uPVwiaGFzczpjb250ZW50LXNhdmVcIlxuICAgICAgICAgIC50aXRsZT1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3Iuc2F2ZVwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3NhdmVBdXRvbWF0aW9ufVxuICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICBydGw6IGNvbXB1dGVSVEwodGhpcy5oYXNzKSxcbiAgICAgICAgICB9KX1cIlxuICAgICAgICA+PC9oYS1mYWI+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBjb25zdCBvbGRBdXRvbWF0aW9uID0gY2hhbmdlZFByb3BzLmdldChcImF1dG9tYXRpb25cIikgYXMgQXV0b21hdGlvbkVudGl0eTtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiYXV0b21hdGlvblwiKSAmJlxuICAgICAgdGhpcy5hdXRvbWF0aW9uICYmXG4gICAgICB0aGlzLmhhc3MgJiZcbiAgICAgIC8vIE9ubHkgcmVmcmVzaCBjb25maWcgaWYgd2UgcGlja2VkIGEgbmV3IGF1dG9tYXRpb24uIElmIHNhbWUgSUQsIGRvbid0IGZldGNoIGl0LlxuICAgICAgKCFvbGRBdXRvbWF0aW9uIHx8XG4gICAgICAgIG9sZEF1dG9tYXRpb24uYXR0cmlidXRlcy5pZCAhPT0gdGhpcy5hdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWQpXG4gICAgKSB7XG4gICAgICB0aGlzLmhhc3NcbiAgICAgICAgLmNhbGxBcGk8QXV0b21hdGlvbkNvbmZpZz4oXG4gICAgICAgICAgXCJHRVRcIixcbiAgICAgICAgICBgY29uZmlnL2F1dG9tYXRpb24vY29uZmlnLyR7dGhpcy5hdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWR9YFxuICAgICAgICApXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChjb25maWcpID0+IHtcbiAgICAgICAgICAgIC8vIE5vcm1hbGl6ZSBkYXRhOiBlbnN1cmUgdHJpZ2dlciwgYWN0aW9uIGFuZCBjb25kaXRpb24gYXJlIGxpc3RzXG4gICAgICAgICAgICAvLyBIYXBwZW5zIHdoZW4gcGVvcGxlIGNvcHkgcGFzdGUgdGhlaXIgYXV0b21hdGlvbnMgaW50byB0aGUgY29uZmlnXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBbXCJ0cmlnZ2VyXCIsIFwiY29uZGl0aW9uXCIsIFwiYWN0aW9uXCJdKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IFt2YWx1ZV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAocmVzcCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgIHJlc3Auc3RhdHVzX2NvZGUgPT09IDQwNFxuICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci5sb2FkX2Vycm9yX25vdF9lZGl0YWJsZVwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmxvYWRfZXJyb3JfdW5rbm93blwiLFxuICAgICAgICAgICAgICAgICAgICBcImVycl9ub1wiLFxuICAgICAgICAgICAgICAgICAgICByZXNwLnN0YXR1c19jb2RlXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY3JlYXRpbmdOZXdcIikgJiYgdGhpcy5jcmVhdGluZ05ldyAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb25maWcgPSB7XG4gICAgICAgIGFsaWFzOiB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuZGVmYXVsdF9uYW1lXCJcbiAgICAgICAgKSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIHRyaWdnZXI6IFt7IHBsYXRmb3JtOiBcInN0YXRlXCIgfV0sXG4gICAgICAgIGNvbmRpdGlvbjogW10sXG4gICAgICAgIGFjdGlvbjogW3sgc2VydmljZTogXCJcIiB9XSxcbiAgICAgICAgLi4uZ2V0QXV0b21hdGlvbkVkaXRvckluaXREYXRhKCksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbmZpZ1wiKSAmJiB0aGlzLmhhc3MpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gQXV0b21hdGlvbkVkaXRvcihcbiAgICAgICAgdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIiksXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvbWF0aW9uOiB0aGlzLl9jb25maWcsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuX2NvbmZpZ0NoYW5nZWQsXG4gICAgICAgICAgaXNXaWRlOiB0aGlzLmlzV2lkZSxcbiAgICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgICAgbG9jYWxpemU6IHRoaXMuaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5fcmVuZGVyZWRcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnQ2hhbmdlZChjb25maWc6IEF1dG9tYXRpb25Db25maWcpOiB2b2lkIHtcbiAgICAvLyBvbkNoYW5nZSBnZXRzIGNhbGxlZCBhIGxvdCBkdXJpbmcgaW5pdGlhbCByZW5kZXJpbmcgY2F1c2luZyByZWN1cnNpbmcgY2FsbHMuXG4gICAgaWYgKCF0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy5fZXJyb3JzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2JhY2tUYXBwZWQoKTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fZGlydHkgJiZcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnVuc2F2ZWRfY29uZmlybVwiKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZSgpIHtcbiAgICBpZiAoIWNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXV0b21hdGlvbj9cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgZGVsZXRlQXV0b21hdGlvbih0aGlzLmhhc3MsIHRoaXMuYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkISk7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9zYXZlQXV0b21hdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY3JlYXRpbmdOZXdcbiAgICAgID8gXCJcIiArIERhdGUubm93KClcbiAgICAgIDogdGhpcy5hdXRvbWF0aW9uLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdGhpcy5oYXNzIS5jYWxsQXBpKFxuICAgICAgXCJQT1NUXCIsXG4gICAgICBcImNvbmZpZy9hdXRvbWF0aW9uL2NvbmZpZy9cIiArIGlkLFxuICAgICAgdGhpcy5fY29uZmlnXG4gICAgKS50aGVuKFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNyZWF0aW5nTmV3KSB7XG4gICAgICAgICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvYXV0b21hdGlvbi9lZGl0LyR7aWR9YCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3JzKSA9PiB7XG4gICAgICAgIHRoaXMuX2Vycm9ycyA9IGVycm9ycy5ib2R5Lm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycm9ycztcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzLFxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMgaGEtY2FyZCxcbiAgICAgICAgLnNjcmlwdCBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtY2FyZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5ydGwgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1tZW51IHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuW3Nsb3Q9XCJpbnRyb2R1Y3Rpb25cIl0gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGhhLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04MHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IG1hcmdpbi1ib3R0b20gMC4zcztcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2RpcnR5XSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ucnRsIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWF1dG9tYXRpb24tZWRpdG9yXCIsIEhhQXV0b21hdGlvbkVkaXRvcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaWZEZWZpbmVkIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvaWYtZGVmaW5lZFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGVcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBBdXRvbWF0aW9uRW50aXR5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvYXV0b21hdGlvblwiO1xuaW1wb3J0IGZvcm1hdF9kYXRlX3RpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtYXV0b21hdGlvbi1waWNrZXJcIilcbmNsYXNzIEhhQXV0b21hdGlvblBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYXV0b21hdGlvbnMhOiBBdXRvbWF0aW9uRW50aXR5W107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uY2FwdGlvblwiKX1cbiAgICAgID5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5oZWFkZXJcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ob21lLWFzc2lzdGFudC5pby9kb2NzL2F1dG9tYXRpb24vZWRpdG9yL1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIubGVhcm5fbW9yZVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgIC5oZWFkaW5nPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5waWNrX2F1dG9tYXRpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuYXV0b21hdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLnBpY2tlci5ub19hdXRvbWF0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IHRoaXMuYXV0b21hdGlvbnMubWFwKFxuICAgICAgICAgICAgICAgICAgKGF1dG9tYXRpb24pID0+IGh0bWxgXG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdhdXRvbWF0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1lbnRpdHktdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9JHthdXRvbWF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaGEtZW50aXR5LXRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2NvbXB1dGVTdGF0ZU5hbWUoYXV0b21hdGlvbil9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc2Vjb25kYXJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgdHJpZ2dlcmVkOiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmxhc3RfdHJpZ2dlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0X2RhdGVfdGltZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aW9uLmF0dHJpYnV0ZXMubGFzdF90cmlnZ2VyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJuZXZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nYWN0aW9ucyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdXRvbWF0aW9uPSR7YXV0b21hdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zaG93SW5mb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczppbmZvcm1hdGlvbi1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0ke2lmRGVmaW5lZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb24uYXR0cmlidXRlcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAvY29uZmlnL2F1dG9tYXRpb24vZWRpdC8ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGlvbi5hdHRyaWJ1dGVzLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwZW5jaWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWF1dG9tYXRpb24uYXR0cmlidXRlcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWF1dG9tYXRpb24uYXR0cmlidXRlcy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT25seSBhdXRvbWF0aW9ucyBkZWZpbmVkIGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpb25zLnlhbWwgYXJlIGVkaXRhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci10b29sdGlwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2F1dG9tYXRpb24vbmV3XCI+XG4gICAgICAgICAgPGhhLWZhYlxuICAgICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICB0aXRsZT0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5waWNrZXIuYWRkX2F1dG9tYXRpb25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID9ydGw9JHtjb21wdXRlUlRMKHRoaXMuaGFzcyl9XG4gICAgICAgICAgPjwvaGEtZmFiXG4gICAgICAgID48L2E+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd0luZm8oZXYpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IGV2LmN1cnJlbnRUYXJnZXQuYXV0b21hdGlvbi5lbnRpdHlfaWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hdXRvbWF0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBob3Jpem9udGFsO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dG9tYXRpb24gYVtocmVmXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1lbnRpdHktdG9nZ2xlIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYiB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1hdXRvbWF0aW9uLXBpY2tlclwiOiBIYUF1dG9tYXRpb25QaWNrZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtYXV0b21hdGlvbi1lZGl0b3JcIjtcbmltcG9ydCBcIi4vaGEtYXV0b21hdGlvbi1waWNrZXJcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcblxuY2xhc3MgSGFDb25maWdBdXRvbWF0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1hdXRvbWF0aW9uLXBpY2tlcixcbiAgICAgICAgaGEtYXV0b21hdGlvbi1lZGl0b3Ige1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL2VkaXQvOmF1dG9tYXRpb25cIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgICBhY3RpdmU9XCJ7e19lZGl0dGluZ0F1dG9tYXRpb259fVwiXG4gICAgICA+PC9hcHAtcm91dGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi9uZXdcIlxuICAgICAgICBhY3RpdmU9XCJ7e19jcmVhdGluZ05ld319XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFzaG93RWRpdG9yXV1cIj5cbiAgICAgICAgPGhhLWF1dG9tYXRpb24tcGlja2VyXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBhdXRvbWF0aW9ucz1cIltbYXV0b21hdGlvbnNdXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICA+PC9oYS1hdXRvbWF0aW9uLXBpY2tlcj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93RWRpdG9yXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxoYS1hdXRvbWF0aW9uLWVkaXRvclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgYXV0b21hdGlvbj1cIltbYXV0b21hdGlvbl1dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgY3JlYXRpbmctbmV3PVwiW1tfY3JlYXRpbmdOZXddXVwiXG4gICAgICAgID48L2hhLWF1dG9tYXRpb24tZWRpdG9yPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3JvdXRlTWF0Y2hlczogQm9vbGVhbixcbiAgICAgIF9jcmVhdGluZ05ldzogQm9vbGVhbixcbiAgICAgIF9lZGl0dGluZ0F1dG9tYXRpb246IEJvb2xlYW4sXG5cbiAgICAgIGF1dG9tYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlQXV0b21hdGlvbnMoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIGF1dG9tYXRpb246IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcImNvbXB1dGVBdXRvbWF0aW9uKGF1dG9tYXRpb25zLCBfZWRpdHRpbmdBdXRvbWF0aW9uLCBfcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgc2hvd0VkaXRvcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU2hvd0VkaXRvcihfZWRpdHRpbmdBdXRvbWF0aW9uLCBfY3JlYXRpbmdOZXcpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMucm91dGUgPSB7IHBhdGg6IFwiXCIsIHByZWZpeDogXCJcIiB9O1xuICB9XG5cbiAgY29tcHV0ZUF1dG9tYXRpb24oYXV0b21hdGlvbnMsIGVkaXR0aW5nQWRkb24sIHJvdXRlRGF0YSkge1xuICAgIGlmICghYXV0b21hdGlvbnMgfHwgIWVkaXR0aW5nQWRkb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF1dG9tYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXV0b21hdGlvbnNbaV0uYXR0cmlidXRlcy5pZCA9PT0gcm91dGVEYXRhLmF1dG9tYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGF1dG9tYXRpb25zW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVBdXRvbWF0aW9ucyhoYXNzKSB7XG4gICAgdmFyIGF1dG9tYXRpb25zID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBlbnRpdHkgPSBoYXNzLnN0YXRlc1trZXldO1xuXG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgPT09IFwiYXV0b21hdGlvblwiKSB7XG4gICAgICAgIGF1dG9tYXRpb25zLnB1c2goZW50aXR5KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhdXRvbWF0aW9ucy5zb3J0KGZ1bmN0aW9uIGVudGl0eVNvcnRCeShlbnRpdHlBLCBlbnRpdHlCKSB7XG4gICAgICB2YXIgbmFtZUEgPSAoZW50aXR5QS5hdHRyaWJ1dGVzLmFsaWFzIHx8IGVudGl0eUEuZW50aXR5X2lkKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIG5hbWVCID0gKGVudGl0eUIuYXR0cmlidXRlcy5hbGlhcyB8fCBlbnRpdHlCLmVudGl0eV9pZCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ0F1dG9tYXRpb24sIF9jcmVhdGluZ05ldykge1xuICAgIHJldHVybiBfY3JlYXRpbmdOZXcgfHwgX2VkaXR0aW5nQXV0b21hdGlvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctYXV0b21hdGlvblwiLCBIYUNvbmZpZ0F1dG9tYXRpb24pO1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgVHJpZ2dlciBmcm9tIFwiLi90cmlnZ2VyL2luZGV4XCI7XG5pbXBvcnQgQ29uZGl0aW9uIGZyb20gXCIuL2NvbmRpdGlvbi9pbmRleFwiO1xuaW1wb3J0IFNjcmlwdCBmcm9tIFwiLi9zY3JpcHQvaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0b21hdGlvbiBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCA9IHRoaXMudHJpZ2dlckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbmRpdGlvbkNoYW5nZWQgPSB0aGlzLmNvbmRpdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmFjdGlvbkNoYW5nZWQgPSB0aGlzLmFjdGlvbkNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZShldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgLi4udGhpcy5wcm9wcy5hdXRvbWF0aW9uLFxuICAgICAgW2V2LnRhcmdldC5uYW1lXTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHRyaWdnZXJDaGFuZ2VkKHRyaWdnZXIpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHsgLi4udGhpcy5wcm9wcy5hdXRvbWF0aW9uLCB0cmlnZ2VyIH0pO1xuICB9XG5cbiAgcHVibGljIGNvbmRpdGlvbkNoYW5nZWQoY29uZGl0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMuYXV0b21hdGlvbiwgY29uZGl0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIGFjdGlvbkNoYW5nZWQoYWN0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7IC4uLnRoaXMucHJvcHMuYXV0b21hdGlvbiwgYWN0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IGF1dG9tYXRpb24sIGlzV2lkZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYWxpYXMsIGRlc2NyaXB0aW9uLCB0cmlnZ2VyLCBjb25kaXRpb24sIGFjdGlvbiB9ID0gYXV0b21hdGlvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+e2FsaWFzfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmFsaWFzXCIpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbGlhc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FsaWFzfVxuICAgICAgICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuZGVzY3JpcHRpb24ubGFiZWxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuZGVzY3JpcHRpb24ucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPXtpc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2hvbWUtYXNzaXN0YW50LmlvL2RvY3MvYXV0b21hdGlvbi90cmlnZ2VyL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy5sZWFybl9tb3JlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPFRyaWdnZXJcbiAgICAgICAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50cmlnZ2VyQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuY29uZGl0aW9ucy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY3JpcHRzL2NvbmRpdGlvbnMvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLmNvbmRpdGlvbnMubGVhcm5fbW9yZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxDb25kaXRpb25cbiAgICAgICAgICAgIGNvbmRpdGlvbj17Y29uZGl0aW9uIHx8IFtdfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY29uZGl0aW9uQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5oZWFkZXJcIil9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5pbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9hdXRvbWF0aW9uL2FjdGlvbi9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IuYWN0aW9ucy5sZWFybl9tb3JlXCIpfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgICBzY3JpcHQ9e2FjdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFjdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGV2aWNlL2hhLWRldmljZS10cmlnZ2VyLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtXCI7XG5cbmltcG9ydCB7XG4gIGZldGNoRGV2aWNlVHJpZ2dlckNhcGFiaWxpdGllcyxcbiAgZGV2aWNlQXV0b21hdGlvbnNFcXVhbCxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX2F1dG9tYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGV2aWNlVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICBwcml2YXRlIF9vcmlnVHJpZ2dlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZGV2aWNlUGlja2VkID0gdGhpcy5kZXZpY2VQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRldmljZVRyaWdnZXJQaWNrZWQgPSB0aGlzLmRldmljZVRyaWdnZXJQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9leHRyYUZpZWxkc0NoYW5nZWQgPSB0aGlzLl9leHRyYUZpZWxkc0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0geyBkZXZpY2VfaWQ6IHVuZGVmaW5lZCwgY2FwYWJpbGl0aWVzOiB1bmRlZmluZWQgfTtcbiAgfVxuXG4gIHB1YmxpYyBkZXZpY2VQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgZGV2aWNlX2lkOiBldi50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBwdWJsaWMgZGV2aWNlVHJpZ2dlclBpY2tlZChldikge1xuICAgIGxldCB0cmlnZ2VyID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIGlmIChcbiAgICAgIHRoaXMuX29yaWdUcmlnZ2VyICYmXG4gICAgICBkZXZpY2VBdXRvbWF0aW9uc0VxdWFsKHRoaXMuX29yaWdUcmlnZ2VyLCB0cmlnZ2VyKVxuICAgICkge1xuICAgICAgdHJpZ2dlciA9IHRoaXMuX29yaWdUcmlnZ2VyO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHRyaWdnZXIpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzIH0sIHsgZGV2aWNlX2lkLCBjYXBhYmlsaXRpZXMgfSkge1xuICAgIGlmIChkZXZpY2VfaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGV2aWNlX2lkID0gdHJpZ2dlci5kZXZpY2VfaWQ7XG4gICAgfVxuICAgIGNvbnN0IGV4dHJhRmllbGRzRGF0YSA9XG4gICAgICBjYXBhYmlsaXRpZXMgJiYgY2FwYWJpbGl0aWVzLmV4dHJhX2ZpZWxkc1xuICAgICAgICA/IGNhcGFiaWxpdGllcy5leHRyYV9maWVsZHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBbaXRlbS5uYW1lXTogdGhpcy5wcm9wcy50cmlnZ2VyW2l0ZW0ubmFtZV0gfTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtZGV2aWNlLXBpY2tlclxuICAgICAgICAgIHZhbHVlPXtkZXZpY2VfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGV2aWNlUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJEZXZpY2VcIlxuICAgICAgICAvPlxuICAgICAgICA8aGEtZGV2aWNlLXRyaWdnZXItcGlja2VyXG4gICAgICAgICAgdmFsdWU9e3RyaWdnZXJ9XG4gICAgICAgICAgZGV2aWNlSWQ9e2RldmljZV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZXZpY2VUcmlnZ2VyUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbGFiZWw9XCJUcmlnZ2VyXCJcbiAgICAgICAgLz5cbiAgICAgICAge2V4dHJhRmllbGRzRGF0YSAmJiAoXG4gICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgIGRhdGE9e09iamVjdC5hc3NpZ24oe30sIC4uLmV4dHJhRmllbGRzRGF0YSl9XG4gICAgICAgICAgICBvbkRhdGEtY2hhbmdlZD17dGhpcy5fZXh0cmFGaWVsZHNDaGFuZ2VkfVxuICAgICAgICAgICAgc2NoZW1hPXt0aGlzLnN0YXRlLmNhcGFiaWxpdGllcy5leHRyYV9maWVsZHN9XG4gICAgICAgICAgICBjb21wdXRlTGFiZWw9e3RoaXMuX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2soaGFzcy5sb2NhbGl6ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmNhcGFiaWxpdGllcykge1xuICAgICAgdGhpcy5fZ2V0Q2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIpIHtcbiAgICAgIHRoaXMuX29yaWdUcmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy50cmlnZ2VyICE9PSB0aGlzLnByb3BzLnRyaWdnZXIpIHtcbiAgICAgIHRoaXMuX2dldENhcGFiaWxpdGllcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2dldENhcGFiaWxpdGllcygpIHtcbiAgICBjb25zdCB0cmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyO1xuXG4gICAgY29uc3QgY2FwYWJpbGl0aWVzID0gdHJpZ2dlci5kb21haW5cbiAgICAgID8gYXdhaXQgZmV0Y2hEZXZpY2VUcmlnZ2VyQ2FwYWJpbGl0aWVzKHRoaXMucHJvcHMuaGFzcywgdHJpZ2dlcilcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgY2FwYWJpbGl0aWVzIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZXh0cmFGaWVsZHNDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCFldi5kZXRhaWwucGF0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gZXYuZGV0YWlsLnBhdGgucmVwbGFjZShcImRhdGEuXCIsIFwiXCIpO1xuICAgIGNvbnN0IHZhbHVlID0gZXYuZGV0YWlsLnZhbHVlIHx8IHVuZGVmaW5lZDtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgW2l0ZW1dOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2V4dHJhRmllbGRzQ29tcHV0ZUxhYmVsQ2FsbGJhY2sobG9jYWxpemUpIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGxhYmVscyBwZXIgc2NoZW1hIG9iamVjdFxuICAgIHJldHVybiAoc2NoZW1hKSA9PlxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5kZXZpY2UuZXh0cmFfZmllbGRzLiR7XG4gICAgICAgICAgc2NoZW1hLm5hbWVcbiAgICAgICAgfWBcbiAgICAgICkgfHwgc2NoZW1hLm5hbWU7XG4gIH1cbn1cblxuKERldmljZVRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBkZXZpY2VfaWQ6IFwiXCIsXG4gIGRvbWFpbjogXCJcIixcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCBZQU1MVGV4dEFyZWEgZnJvbSBcIi4uL3lhbWxfdGV4dGFyZWFcIjtcbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZXZlbnREYXRhQ2hhbmdlZCA9IHRoaXMuZXZlbnREYXRhQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBwdWJsaWMgZXZlbnREYXRhQ2hhbmdlZChldmVudF9kYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudF9kYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGV2ZW50X3R5cGUsIGV2ZW50X2RhdGEgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZXZlbnQuZXZlbnRfdHlwZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiZXZlbnRfdHlwZVwiXG4gICAgICAgICAgdmFsdWU9e2V2ZW50X3R5cGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8WUFNTFRleHRBcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ldmVudC5ldmVudF9kYXRhXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIHZhbHVlPXtldmVudF9kYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmV2ZW50RGF0YUNoYW5nZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihFdmVudFRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBldmVudF90eXBlOiBcIlwiLFxuICBldmVudF9kYXRhOiB7fSxcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlclwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2VvbG9jYXRpb25UcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgICB0aGlzLnpvbmVQaWNrZWQgPSB0aGlzLnpvbmVQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyB6b25lUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICB6b25lOiBldi50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmFkaW9Hcm91cFBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgZXZlbnQ6IGV2LnRhcmdldC5zZWxlY3RlZCxcbiAgICB9KTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgc291cmNlLCB6b25lLCBldmVudCB9ID0gdHJpZ2dlcjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi5zb3VyY2VcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInNvdXJjZVwiXG4gICAgICAgICAgdmFsdWU9e3NvdXJjZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5nZW9fbG9jYXRpb24uem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17em9uZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy56b25lUGlja2VkfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgYWxsb3dDdXN0b21FbnRpdHlcbiAgICAgICAgICBkb21haW5GaWx0ZXI9XCJ6b25lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLmV2ZW50XCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8cGFwZXItcmFkaW8tZ3JvdXBcbiAgICAgICAgICBzZWxlY3RlZD17ZXZlbnR9XG4gICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXZlbnRsYWJlbFwiXG4gICAgICAgICAgb25wYXBlci1yYWRpby1ncm91cC1jaGFuZ2VkPXt0aGlzLnJhZGlvR3JvdXBQaWNrZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJlbnRlclwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLmdlb19sb2NhdGlvbi5lbnRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImxlYXZlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuZ2VvX2xvY2F0aW9uLmxlYXZlXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihHZW9sb2NhdGlvblRyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICBzb3VyY2U6IFwiXCIsXG4gIHpvbmU6IFwiXCIsXG4gIGV2ZW50OiBcImVudGVyXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFzc1RyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBldmVudCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGlkPVwiZXZlbnRsYWJlbFwiPlxuICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuaG9tZWFzc2lzdGFudC5ldmVudFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgc2VsZWN0ZWQ9e2V2ZW50fVxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV2ZW50bGFiZWxcIlxuICAgICAgICAgIG9ucGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZD17dGhpcy5yYWRpb0dyb3VwUGlja2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic3RhcnRcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ob21lYXNzaXN0YW50LnN0YXJ0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwic2h1dGRvd25cIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5ob21lYXNzaXN0YW50LnNodXRkb3duXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihIYXNzVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGV2ZW50OiBcInN0YXJ0XCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgVHJpZ2dlclJvdyBmcm9tIFwiLi90cmlnZ2VyX3Jvd1wiO1xuaW1wb3J0IFN0YXRlVHJpZ2dlciBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hZGRUcmlnZ2VyID0gdGhpcy5hZGRUcmlnZ2VyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmlnZ2VyQ2hhbmdlZCA9IHRoaXMudHJpZ2dlckNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRUcmlnZ2VyKCkge1xuICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLnByb3BzLnRyaWdnZXIuY29uY2F0KHtcbiAgICAgIHBsYXRmb3JtOiBcInN0YXRlXCIsXG4gICAgICAuLi4oU3RhdGVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyxcbiAgICB9KTtcblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodHJpZ2dlcik7XG4gIH1cblxuICBwdWJsaWMgdHJpZ2dlckNoYW5nZWQoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgY29uc3QgdHJpZ2dlciA9IHRoaXMucHJvcHMudHJpZ2dlci5jb25jYXQoKTtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdHJpZ2dlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmlnZ2VyW2luZGV4XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodHJpZ2dlcik7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzPVwidHJpZ2dlcnNcIj5cbiAgICAgICAge3RyaWdnZXIubWFwKCh0cmcsIGlkeCkgPT4gKFxuICAgICAgICAgIDxUcmlnZ2VyUm93XG4gICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgdHJpZ2dlcj17dHJnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudHJpZ2dlckNoYW5nZWR9XG4gICAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGFkZC1jYXJkXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvblRhcD17dGhpcy5hZGRUcmlnZ2VyfT5cbiAgICAgICAgICAgICAge2xvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmFkZFwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1RVFRUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgdG9waWMsIHBheWxvYWQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubXF0dC50b3BpY1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidG9waWNcIlxuICAgICAgICAgIHZhbHVlPXt0b3BpY31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUubXF0dC5wYXlsb2FkXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJwYXlsb2FkXCJcbiAgICAgICAgICB2YWx1ZT17cGF5bG9hZH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihNUVRUVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHRvcGljOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXRleHRhcmVhXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWVyaWNTdGF0ZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSwgZW50aXR5X2lkLCBiZWxvdywgYWJvdmUgfSA9IHRyaWdnZXI7XG4gICAgbGV0IHRyZ0ZvciA9IHRyaWdnZXIuZm9yO1xuXG4gICAgaWYgKHRyZ0ZvciAmJiAodHJnRm9yLmhvdXJzIHx8IHRyZ0Zvci5taW51dGVzIHx8IHRyZ0Zvci5zZWNvbmRzKSkge1xuICAgICAgLy8gSWYgdGhlIHRyaWdnZXIgd2FzIGRlZmluZWQgdXNpbmcgdGhlIHlhbWwgZGljdCBzeW50YXgsIGNvbnZlcnQgaXQgdG9cbiAgICAgIC8vIHRoZSBlcXVpdmFsZW50IHN0cmluZyBmb3JtYXRcbiAgICAgIGxldCB7IGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwIH0gPSB0cmdGb3I7XG4gICAgICBob3VycyA9IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gICAgICB0cmdGb3IgPSBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUuYWJvdmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImFib3ZlXCJcbiAgICAgICAgICB2YWx1ZT17YWJvdmV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUuYmVsb3dcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImJlbG93XCJcbiAgICAgICAgICB2YWx1ZT17YmVsb3d9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8aGEtdGV4dGFyZWFcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLm51bWVyaWNfc3RhdGUudmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInZhbHVlX3RlbXBsYXRlXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVfdGVtcGxhdGV9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpcj1cImx0clwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZm9yXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJmb3JcIlxuICAgICAgICAgIHZhbHVlPXt0cmdGb3J9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oTnVtZXJpY1N0YXRlVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbn07XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGF0ZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICAgIHRoaXMuZW50aXR5UGlja2VkID0gdGhpcy5lbnRpdHlQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBlbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMuaW5kZXgsIHtcbiAgICAgIC4uLnRoaXMucHJvcHMudHJpZ2dlcixcbiAgICAgIGVudGl0eV9pZDogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBoYXNzLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBlbnRpdHlfaWQsIHRvIH0gPSB0cmlnZ2VyO1xuICAgIGNvbnN0IHRyZ0Zyb20gPSB0cmlnZ2VyLmZyb207XG4gICAgbGV0IHRyZ0ZvciA9IHRyaWdnZXIuZm9yO1xuXG4gICAgaWYgKHRyZ0ZvciAmJiAodHJnRm9yLmhvdXJzIHx8IHRyZ0Zvci5taW51dGVzIHx8IHRyZ0Zvci5zZWNvbmRzKSkge1xuICAgICAgLy8gSWYgdGhlIHRyaWdnZXIgd2FzIGRlZmluZWQgdXNpbmcgdGhlIHlhbWwgZGljdCBzeW50YXgsIGNvbnZlcnQgaXQgdG9cbiAgICAgIC8vIHRoZSBlcXVpdmFsZW50IHN0cmluZyBmb3JtYXRcbiAgICAgIGxldCB7IGhvdXJzID0gMCwgbWludXRlcyA9IDAsIHNlY29uZHMgPSAwIH0gPSB0cmdGb3I7XG4gICAgICBob3VycyA9IGhvdXJzLnRvU3RyaW5nKCk7XG4gICAgICBtaW51dGVzID0gbWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgIHNlY29uZHMgPSBzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gICAgICB0cmdGb3IgPSBgJHtob3Vyc306JHttaW51dGVzfToke3NlY29uZHN9YDtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgdmFsdWU9e2VudGl0eV9pZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbnRpdHlQaWNrZWR9XG4gICAgICAgICAgaGFzcz17aGFzc31cbiAgICAgICAgICBhbGxvd0N1c3RvbUVudGl0eVxuICAgICAgICAvPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN0YXRlLmZyb21cIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImZyb21cIlxuICAgICAgICAgIHZhbHVlPXt0cmdGcm9tfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdGF0ZS50b1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidG9cIlxuICAgICAgICAgIHZhbHVlPXt0b31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuc3RhdGUuZm9yXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJmb3JcIlxuICAgICAgICAgIHZhbHVlPXt0cmdGb3J9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oU3RhdGVUcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZW50aXR5X2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW5UcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgY29uc3QgeyBvZmZzZXQsIGV2ZW50IH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaWQ9XCJldmVudGxhYmVsXCI+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdW4uZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIHNlbGVjdGVkPXtldmVudH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJldmVudGxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMucmFkaW9Hcm91cFBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnJpc2VcIj5cbiAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS5zdW4uc3VucmlzZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInN1bnNldFwiPlxuICAgICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN1bi5zdW5zZXRcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9wYXBlci1yYWRpby1ncm91cD5cblxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnN1bi5vZmZzZXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIm9mZnNldFwiXG4gICAgICAgICAgdmFsdWU9e29mZnNldH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihTdW5UcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgZXZlbnQ6IFwic3VucmlzZVwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS10ZXh0YXJlYVwiO1xuXG5pbXBvcnQgeyBvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9wcmVhY3QvZXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVtcGxhdGVUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyB0cmlnZ2VyLCBsb2NhbGl6ZSB9KSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgY29uc3QgeyB2YWx1ZV90ZW1wbGF0ZSB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLXRleHRhcmVhXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50ZW1wbGF0ZS52YWx1ZV90ZW1wbGF0ZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidmFsdWVfdGVtcGxhdGVcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZV90ZW1wbGF0ZX1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlyPVwibHRyXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuKFRlbXBsYXRlVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIHZhbHVlX3RlbXBsYXRlOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVUcmlnZ2VyIGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBwcml2YXRlIG9uQ2hhbmdlOiAob2JqOiBhbnkpID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2VFdmVudC5iaW5kKHRoaXMsIFwidHJpZ2dlclwiKTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuICBwdWJsaWMgcmVuZGVyKHsgdHJpZ2dlciwgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYXQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZS5hdFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiYXRcIlxuICAgICAgICAgIHZhbHVlPXthdH1cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbihUaW1lVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGF0OiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcblxuaW1wb3J0IHsgb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vcHJlYWN0L2V2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVQYXR0ZXJuVHJpZ2dlciBleHRlbmRzIENvbXBvbmVudDxhbnk+IHtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKG9iajogYW55KSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzLCBcInRyaWdnZXJcIik7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIH0gPSB0cmlnZ2VyO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD17bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnRpbWVfcGF0dGVybi5ob3Vyc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwiaG91cnNcIlxuICAgICAgICAgIHZhbHVlPXtob3Vyc31cbiAgICAgICAgICBvbnZhbHVlLWNoYW5nZWQ9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUudGltZV9wYXR0ZXJuLm1pbnV0ZXNcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIm1pbnV0ZXNcIlxuICAgICAgICAgIHZhbHVlPXttaW51dGVzfVxuICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS50aW1lX3BhdHRlcm4uc2Vjb25kc1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwic2Vjb25kc1wiXG4gICAgICAgICAgdmFsdWU9e3NlY29uZHN9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oVGltZVBhdHRlcm5UcmlnZ2VyIGFzIGFueSkuZGVmYXVsdENvbmZpZyA9IHtcbiAgaG91cnM6IFwiXCIsXG4gIG1pbnV0ZXM6IFwiXCIsXG4gIHNlY29uZHM6IFwiXCIsXG59O1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCBEZXZpY2VUcmlnZ2VyIGZyb20gXCIuL2RldmljZVwiO1xuaW1wb3J0IEV2ZW50VHJpZ2dlciBmcm9tIFwiLi9ldmVudFwiO1xuaW1wb3J0IEdlb2xvY2F0aW9uVHJpZ2dlciBmcm9tIFwiLi9nZW9fbG9jYXRpb25cIjtcbmltcG9ydCBIYXNzVHJpZ2dlciBmcm9tIFwiLi9ob21lYXNzaXN0YW50XCI7XG5pbXBvcnQgTVFUVFRyaWdnZXIgZnJvbSBcIi4vbXF0dFwiO1xuaW1wb3J0IE51bWVyaWNTdGF0ZVRyaWdnZXIgZnJvbSBcIi4vbnVtZXJpY19zdGF0ZVwiO1xuaW1wb3J0IFRpbWVQYXR0ZXJuVHJpZ2dlciBmcm9tIFwiLi90aW1lX3BhdHRlcm5cIjtcbmltcG9ydCBTdGF0ZVRyaWdnZXIgZnJvbSBcIi4vc3RhdGVcIjtcbmltcG9ydCBTdW5UcmlnZ2VyIGZyb20gXCIuL3N1blwiO1xuaW1wb3J0IFRlbXBsYXRlVHJpZ2dlciBmcm9tIFwiLi90ZW1wbGF0ZVwiO1xuaW1wb3J0IFRpbWVUcmlnZ2VyIGZyb20gXCIuL3RpbWVcIjtcbmltcG9ydCBXZWJob29rVHJpZ2dlciBmcm9tIFwiLi93ZWJob29rXCI7XG5pbXBvcnQgWm9uZVRyaWdnZXIgZnJvbSBcIi4vem9uZVwiO1xuXG5jb25zdCBUWVBFUyA9IHtcbiAgZGV2aWNlOiBEZXZpY2VUcmlnZ2VyLFxuICBldmVudDogRXZlbnRUcmlnZ2VyLFxuICBzdGF0ZTogU3RhdGVUcmlnZ2VyLFxuICBnZW9fbG9jYXRpb246IEdlb2xvY2F0aW9uVHJpZ2dlcixcbiAgaG9tZWFzc2lzdGFudDogSGFzc1RyaWdnZXIsXG4gIG1xdHQ6IE1RVFRUcmlnZ2VyLFxuICBudW1lcmljX3N0YXRlOiBOdW1lcmljU3RhdGVUcmlnZ2VyLFxuICBzdW46IFN1blRyaWdnZXIsXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVRyaWdnZXIsXG4gIHRpbWU6IFRpbWVUcmlnZ2VyLFxuICB0aW1lX3BhdHRlcm46IFRpbWVQYXR0ZXJuVHJpZ2dlcixcbiAgd2ViaG9vazogV2ViaG9va1RyaWdnZXIsXG4gIHpvbmU6IFpvbmVUcmlnZ2VyLFxufTtcblxuY29uc3QgT1BUSU9OUyA9IE9iamVjdC5rZXlzKFRZUEVTKS5zb3J0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyaWdnZXJFZGl0IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50eXBlQ2hhbmdlZCA9IHRoaXMudHlwZUNoYW5nZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoeyBpbmRleCwgdHJpZ2dlciwgb25DaGFuZ2UsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgICBjb25zdCBDb21wID0gVFlQRVNbdHJpZ2dlci5wbGF0Zm9ybV07XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBPUFRJT05TLmluZGV4T2YodHJpZ2dlci5wbGF0Zm9ybSk7XG5cbiAgICBpZiAoIUNvbXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudW5zdXBwb3J0ZWRfcGxhdGZvcm1cIixcbiAgICAgICAgICAgIFwicGxhdGZvcm1cIixcbiAgICAgICAgICAgIHRyaWdnZXIucGxhdGZvcm1cbiAgICAgICAgICApfVxuICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHRyaWdnZXIsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGVfc2VsZWN0XCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5vLWFuaW1hdGlvbnNcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBvbmlyb24tc2VsZWN0PXt0aGlzLnR5cGVDaGFuZ2VkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtPUFRJT05TLm1hcCgob3B0KSA9PiAoXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIHBsYXRmb3JtPXtvcHR9PlxuICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIGB1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS4ke29wdH0ubGFiZWxgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgICAgIDxDb21wXG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHRyaWdnZXI9e3RyaWdnZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgbG9jYWxpemU9e2xvY2FsaXplfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHlwZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0eXBlID0gZXYudGFyZ2V0LnNlbGVjdGVkSXRlbS5hdHRyaWJ1dGVzLnBsYXRmb3JtLnZhbHVlO1xuXG4gICAgaWYgKHR5cGUgIT09IHRoaXMucHJvcHMudHJpZ2dlci5wbGF0Zm9ybSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAgIHBsYXRmb3JtOiB0eXBlLFxuICAgICAgICAuLi5UWVBFU1t0eXBlXS5kZWZhdWx0Q29uZmlnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1tZW51LWJ1dHRvbi9wYXBlci1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IFRyaWdnZXJFZGl0IGZyb20gXCIuL3RyaWdnZXJfZWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlnZ2VyUm93IGV4dGVuZHMgQ29tcG9uZW50PGFueT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1tZW51XCI+XG4gICAgICAgICAgICA8cGFwZXItbWVudS1idXR0b25cbiAgICAgICAgICAgICAgbm8tYW5pbWF0aW9uc1xuICAgICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgICBob3Jpem9udGFsLW9mZnNldD1cIi01XCJcbiAgICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmR1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBvblRhcD17dGhpcy5vbkRlbGV0ZX0+XG4gICAgICAgICAgICAgICAgICB7cHJvcHMubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VHJpZ2dlckVkaXQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRlbGV0ZSgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBpZiAoXG4gICAgICBjb25maXJtKFxuICAgICAgICB0aGlzLnByb3BzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLmRlbGV0ZV9jb25maXJtXCJcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCBudWxsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5cbmltcG9ydCB7IG9uQ2hhbmdlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3ByZWFjdC9ldmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2ViaG9va1RyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIHByaXZhdGUgb25DaGFuZ2U6IChvYmo6IGFueSkgPT4gdm9pZDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSBvbkNoYW5nZUV2ZW50LmJpbmQodGhpcywgXCJ0cmlnZ2VyXCIpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCB9ID0gdHJpZ2dlcjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS53ZWJob29rLndlYmhvb2tfaWRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cIndlYmhvb2tfaWRcIlxuICAgICAgICAgIHZhbHVlPXt3ZWJob29rSWR9XG4gICAgICAgICAgb252YWx1ZS1jaGFuZ2VkPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4oV2ViaG9va1RyaWdnZXIgYXMgYW55KS5kZWZhdWx0Q29uZmlnID0ge1xuICB3ZWJob29rX2lkOiBcIlwiLFxufTtcbiIsImltcG9ydCB7IGgsIENvbXBvbmVudCB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyXCI7XG5cbmltcG9ydCB7IGhhc0xvY2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvaGFzX2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuXG5mdW5jdGlvbiB6b25lQW5kTG9jYXRpb25GaWx0ZXIoc3RhdGVPYmopIHtcbiAgcmV0dXJuIGhhc0xvY2F0aW9uKHN0YXRlT2JqKSAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopICE9PSBcInpvbmVcIjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9uZVRyaWdnZXIgZXh0ZW5kcyBDb21wb25lbnQ8YW55PiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJhZGlvR3JvdXBQaWNrZWQgPSB0aGlzLnJhZGlvR3JvdXBQaWNrZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudGl0eVBpY2tlZCA9IHRoaXMuZW50aXR5UGlja2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy56b25lUGlja2VkID0gdGhpcy56b25lUGlja2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgcHVibGljIHJlbmRlcih7IHRyaWdnZXIsIGhhc3MsIGxvY2FsaXplIH0pIHtcbiAgICBjb25zdCB7IGVudGl0eV9pZCwgem9uZSwgZXZlbnQgfSA9IHRyaWdnZXI7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLmVudGl0eVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17ZW50aXR5X2lkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVudGl0eVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgZW50aXR5RmlsdGVyPXt6b25lQW5kTG9jYXRpb25GaWx0ZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgbGFiZWw9e2xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXV0b21hdGlvbi5lZGl0b3IudHJpZ2dlcnMudHlwZS56b25lLnpvbmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgdmFsdWU9e3pvbmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuem9uZVBpY2tlZH1cbiAgICAgICAgICBoYXNzPXtoYXNzfVxuICAgICAgICAgIGFsbG93Q3VzdG9tRW50aXR5XG4gICAgICAgICAgZG9tYWluRmlsdGVyPVwiem9uZVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBpZD1cImV2ZW50bGFiZWxcIj5cbiAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hdXRvbWF0aW9uLmVkaXRvci50cmlnZ2Vycy50eXBlLnpvbmUuZXZlbnRcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIHNlbGVjdGVkPXtldmVudH1cbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJldmVudGxhYmVsXCJcbiAgICAgICAgICBvbnBhcGVyLXJhZGlvLWdyb3VwLWNoYW5nZWQ9e3RoaXMucmFkaW9Hcm91cFBpY2tlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImVudGVyXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuem9uZS5lbnRlclwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImxlYXZlXCI+XG4gICAgICAgICAgICB7bG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmF1dG9tYXRpb24uZWRpdG9yLnRyaWdnZXJzLnR5cGUuem9uZS5sZWF2ZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50aXR5UGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBlbnRpdHlfaWQ6IGV2LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgem9uZVBpY2tlZChldikge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UodGhpcy5wcm9wcy5pbmRleCwge1xuICAgICAgLi4udGhpcy5wcm9wcy50cmlnZ2VyLFxuICAgICAgem9uZTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByYWRpb0dyb3VwUGlja2VkKGV2KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLmluZGV4LCB7XG4gICAgICAuLi50aGlzLnByb3BzLnRyaWdnZXIsXG4gICAgICBldmVudDogZXYudGFyZ2V0LnNlbGVjdGVkLFxuICAgIH0pO1xuICB9XG59XG5cbihab25lVHJpZ2dlciBhcyBhbnkpLmRlZmF1bHRDb25maWcgPSB7XG4gIGVudGl0eV9pZDogXCJcIixcbiAgem9uZTogXCJcIixcbiAgZXZlbnQ6IFwiZW50ZXJcIixcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTs7QUFhQTtBQWZBO0FBREE7QUFDQTtBQWdCQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQXNCQTtBQUFBO0FBRUE7O0FBQ0E7QUFmQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFTQTtBQVNBO0FBS0E7QUFVQTtBQUlBO0FBeENBO0FBQ0E7QUFLQTtBQUNBO0FBV0E7QUFPQTtBQUNBO0FBYUE7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFNQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXNFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQUE7QUFBQTs7QUEyTEE7QUF0TEE7QUFBQTtBQUNBO0FBV0E7QUFRQTtBQVFBO0FBc0VBO0FBV0E7QUE5RUE7QUFLQTtBQXlCQTtBQWdCQTtBQWVBO0FBdENBO0FBTUE7QUFhQTtBQUdBO0FBU0E7QUE4QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF1REE7QUFDQTs7O0FBQUE7QUF6TEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBMkxBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQS9HQTtBQUNBO0FBb0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFwQkE7QUF5QkE7Ozs7QUFsRUE7QUFDQTtBQWtIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFNQTtBQWVBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFTQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFTQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBS0E7QUFPQTtBQVNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFKQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFPQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBOztBQUFBOzs7QUFDQTs7O0FBRkE7QUFHQTs7Ozs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFTQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFRQTtBQVVBO0FBS0E7QUFLQTtBQUtBO0FBUUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBS0E7QUFLQTtBQVFBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQVVBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQVFBO0FBUUE7QUFTQTtBQVVBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBUUE7QUFRQTtBQVVBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFLQTtBQUtBO0FBT0E7QUFVQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQVFBO0FBVUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUtBO0FBR0E7QUFDQTtBQUVBO0FBTUE7QUFjQTtBQVNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUlBO0FBQ0E7QUFLQTtBQVFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBOztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFVQTtBQVVBO0FBS0E7QUFLQTtBQUtBO0FBUUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=