(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-integrations"],{

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
var compare = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
var caseInsensitiveCompare = function (a, b) {
    return compare(a.toLowerCase(), b.toLowerCase());
};


/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
var debounce = function (func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    // @ts-ignore
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable:no-this-assignment
        // @ts-ignore
        var context = this;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};


/***/ }),

/***/ "./src/components/ha-card.ts":
/*!***********************************!*\
  !*** ./src/components/ha-card.ts ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var HaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCard, _super);
    function HaCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "], ["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HaCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <slot></slot>\n    "], ["\n      ",
            "\n      <slot></slot>\n    "])), this.header
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"card-header\">", "</div>\n          "], ["\n            <div class=\"card-header\">", "</div>\n          "])), this.header) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCard.prototype, "header", void 0);
    return HaCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-card", HaCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

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

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");


// Not duplicate, this is for typing.
// tslint:disable-next-line

var HaIconNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIconNext, _super);
    function HaIconNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIconNext.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            _this.icon =
                window.getComputedStyle(_this).direction === "ltr"
                    ? "hass:chevron-right"
                    : "hass:chevron-left";
        }, 100);
    };
    return HaIconNext;
}(_ha_icon__WEBPACK_IMPORTED_MODULE_2__["HaIcon"]));

customElements.define("ha-icon-next", HaIconNext);


/***/ }),

/***/ "./src/data/config_flow.ts":
/*!*********************************!*\
  !*** ./src/data/config_flow.ts ***!
  \*********************************/
/*! exports provided: createConfigFlow, fetchConfigFlow, handleConfigFlowStep, deleteConfigFlow, getConfigFlowHandlers, getConfigFlowInProgressCollection, subscribeConfigFlowInProgress, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowInProgressCollection", function() { return getConfigFlowInProgressCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");



var createConfigFlow = function (hass, handler) {
    return hass.callApi("POST", "config/config_entries/flow", {
        handler: handler,
    });
};
var fetchConfigFlow = function (hass, flowId) {
    return hass.callApi("GET", "config/config_entries/flow/" + flowId);
};
var handleConfigFlowStep = function (hass, flowId, data) {
    return hass.callApi("POST", "config/config_entries/flow/" + flowId, data);
};
var deleteConfigFlow = function (hass, flowId) {
    return hass.callApi("DELETE", "config/config_entries/flow/" + flowId);
};
var getConfigFlowHandlers = function (hass) {
    return hass.callApi("GET", "config/config_entries/flow_handlers");
};
var fetchConfigFlowInProgress = function (conn) {
    return conn.sendMessagePromise({
        type: "config_entries/flow/progress",
    });
};
var subscribeConfigFlowInProgressUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
        return fetchConfigFlowInProgress(conn).then(function (flows) {
            return store.setState(flows, true);
        });
    }, 500, true), "config_entry_discovered");
};
var getConfigFlowInProgressCollection = function (conn) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_2__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
};
var subscribeConfigFlowInProgress = function (hass, onChange) { return getConfigFlowInProgressCollection(hass.connection).subscribe(onChange); };
var localizeConfigFlowTitle = function (localize, flow) {
    var placeholders = flow.context.title_placeholders || {};
    var placeholderKeys = Object.keys(placeholders);
    if (placeholderKeys.length === 0) {
        return localize("component." + flow.handler + ".config.title");
    }
    var args = [];
    placeholderKeys.forEach(function (key) {
        args.push(key);
        args.push(placeholders[key]);
    });
    return localize.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["component." + flow.handler + ".config.flow_title"], args));
};


/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



var updateDeviceRegistryEntry = function (hass, deviceId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/device_registry/update", device_id: deviceId }, updates));
};
var fetchDeviceRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/device_registry/list",
    });
};
var subscribeDeviceRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
        return fetchDeviceRegistry(conn).then(function (devices) {
            return store.setState(devices, true);
        });
    }, 500, true), "device_registry_updated");
};
var subscribeDeviceRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);
};


/***/ }),

/***/ "./src/data/options_flow.ts":
/*!**********************************!*\
  !*** ./src/data/options_flow.ts ***!
  \**********************************/
/*! exports provided: createOptionsFlow, fetchOptionsFlow, handleOptionsFlowStep, deleteOptionsFlow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOptionsFlow", function() { return createOptionsFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchOptionsFlow", function() { return fetchOptionsFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleOptionsFlowStep", function() { return handleOptionsFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOptionsFlow", function() { return deleteOptionsFlow; });
var createOptionsFlow = function (hass, handler) {
    return hass.callApi("POST", "config/config_entries/options/flow", {
        handler: handler,
    });
};
var fetchOptionsFlow = function (hass, flowId) {
    return hass.callApi("GET", "config/config_entries/options/flow/" + flowId);
};
var handleOptionsFlowStep = function (hass, flowId, data) {
    return hass.callApi("POST", "config/config_entries/options/flow/" + flowId, data);
};
var deleteOptionsFlow = function (hass, flowId) {
    return hass.callApi("DELETE", "config/config_entries/options/flow/" + flowId);
};


/***/ }),

/***/ "./src/dialogs/config-entry-system-options/show-dialog-config-entry-system-options.ts":
/*!********************************************************************************************!*\
  !*** ./src/dialogs/config-entry-system-options/show-dialog-config-entry-system-options.ts ***!
  \********************************************************************************************/
/*! exports provided: loadConfigEntrySystemOptionsDialog, showConfigEntrySystemOptionsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigEntrySystemOptionsDialog", function() { return loadConfigEntrySystemOptionsDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigEntrySystemOptionsDialog", function() { return showConfigEntrySystemOptionsDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadConfigEntrySystemOptionsDialog = function () {
    return Promise.all(/*! import() | config-entry-system-options */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~config-entry-system-options~more-info-dialog~panel-config-automation~panel-config-cloud~pane~be267696"), __webpack_require__.e("vendors~config-entry-system-options"), __webpack_require__.e("config-entry-system-options")]).then(__webpack_require__.bind(null, /*! ./dialog-config-entry-system-options */ "./src/dialogs/config-entry-system-options/dialog-config-entry-system-options.ts"));
};
var showConfigEntrySystemOptionsDialog = function (element, systemLogDetailParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-config-entry-system-options",
        dialogImport: loadConfigEntrySystemOptionsDialog,
        dialogParams: systemLogDetailParams,
    });
};


/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
/*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigFlowDialog", function() { return loadConfigFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigFlowDialog", function() { return showConfigFlowDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");






var loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__["loadDataEntryFlowDialog"];
var showConfigFlowDialog = function (element, dialogParams) {
    return Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__["showFlowDialog"])(element, dialogParams, {
        loadDevicesAndAreas: true,
        getFlowHandlers: function (hass) {
            return Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_1__["getConfigFlowHandlers"])(hass).then(function (handlers) {
                return handlers.sort(function (handlerA, handlerB) {
                    return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_5__["caseInsensitiveCompare"])(hass.localize("component." + handlerA + ".config.title"), hass.localize("component." + handlerB + ".config.title"));
                });
            });
        },
        createFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["createConfigFlow"],
        fetchFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["fetchConfigFlow"],
        handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["handleConfigFlowStep"],
        deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["deleteConfigFlow"],
        renderAbortDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config.abort." + step.reason, step.description_placeholders);
            return description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "], ["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "])), description) : "";
        },
        renderShowFormStepHeader: function (hass, step) {
            return hass.localize("component." + step.handler + ".config.step." + step.step_id + ".title");
        },
        renderShowFormStepDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config.step." + step.step_id + ".description", step.description_placeholders);
            return description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "], ["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "])), description) : "";
        },
        renderShowFormStepFieldLabel: function (hass, step, field) {
            return hass.localize("component." + step.handler + ".config.step." + step.step_id + ".data." + field.name);
        },
        renderShowFormStepFieldError: function (hass, step, error) {
            return hass.localize("component." + step.handler + ".config.error." + error);
        },
        renderExternalStepHeader: function (hass, step) {
            return hass.localize("component." + step.handler + ".config.step." + step.step_id + ".title");
        },
        renderExternalStepDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config." + step.step_id + ".description", step.description_placeholders);
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <p>\n          ", "\n        </p>\n        ", "\n      "], ["\n        <p>\n          ",
                "\n        </p>\n        ",
                "\n      "])), hass.localize("ui.panel.config.integrations.config_flow.external_step.description"), description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "], ["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "])), description) : "");
        },
        renderCreateEntryDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config.create_entry." + (step.description ||
                "default"), step.description_placeholders);
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ", "\n        <p>Created config for ", ".</p>\n      "], ["\n        ",
                "\n        <p>Created config for ", ".</p>\n      "])), description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "], ["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "])), description) : "", step.title);
        },
    });
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts":
/*!****************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-data-entry-flow.ts ***!
  \****************************************************************/
/*! exports provided: loadDataEntryFlowDialog, showFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataEntryFlowDialog", function() { return loadDataEntryFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFlowDialog", function() { return showFlowDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


var loadDataEntryFlowDialog = function () {
    return Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(5), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e(11), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
};
var showFlowDialog = function (element, dialogParams, flowConfig) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-data-entry-flow",
        dialogImport: loadDataEntryFlowDialog,
        dialogParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dialogParams), { flowConfig: flowConfig }),
    });
};


/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-options-flow.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-options-flow.ts ***!
  \*************************************************************/
/*! exports provided: loadOptionsFlowDialog, showOptionsFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOptionsFlowDialog", function() { return loadOptionsFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOptionsFlowDialog", function() { return showOptionsFlowDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_options_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/options_flow */ "./src/data/options_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");





var loadOptionsFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__["loadDataEntryFlowDialog"];
var showOptionsFlowDialog = function (element, configEntry) {
    return Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__["showFlowDialog"])(element, {
        startFlowHandler: configEntry.entry_id,
    }, {
        loadDevicesAndAreas: false,
        createFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_1__["createOptionsFlow"],
        fetchFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_1__["fetchOptionsFlow"],
        handleFlowStep: _data_options_flow__WEBPACK_IMPORTED_MODULE_1__["handleOptionsFlowStep"],
        deleteFlow: _data_options_flow__WEBPACK_IMPORTED_MODULE_1__["deleteOptionsFlow"],
        renderAbortDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + configEntry.domain + ".options.abort." + step.reason, step.description_placeholders);
            return description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "], ["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "])), description) : "";
        },
        renderShowFormStepHeader: function (hass, _step) {
            return hass.localize("ui.dialogs.options_flow.form.header");
        },
        renderShowFormStepDescription: function (_hass, _step) {
            return "";
        },
        renderShowFormStepFieldLabel: function (hass, step, field) {
            return hass.localize("component." + configEntry.domain + ".options.step." + step.step_id + ".data." + field.name);
        },
        renderShowFormStepFieldError: function (hass, _step, error) {
            return hass.localize("component." + configEntry.domain + ".options.error." + error);
        },
        renderExternalStepHeader: function (_hass, _step) {
            return "";
        },
        renderExternalStepDescription: function (_hass, _step) {
            return "";
        },
        renderCreateEntryDescription: function (hass, _step) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <p>", "</p>\n        "], ["\n          <p>", "</p>\n        "])), hass.localize("ui.dialogs.options_flow.success.description"));
        },
    });
};
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

        /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$=\"[[computeContentClasses(isWide)]]\">\n        <div class=\"header\"><slot name=\"header\"></slot></div>\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <div class=\"intro\"><slot name=\"introduction\"></slot></div>\n          <div class=\"panel flex-auto\"><slot></slot></div>\n        </div>\n      </div>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HaConfigSection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigSection, _PolymerElement);

  function HaConfigSection() {
    _classCallCheck(this, HaConfigSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSection).apply(this, arguments));
  }

  _createClass(HaConfigSection, [{
    key: "computeContentClasses",
    value: function computeContentClasses(isWide) {
      var classes = "content ";
      return isWide ? classes : classes + "narrow";
    }
  }, {
    key: "computeClasses",
    value: function computeClasses(isWide) {
      var classes = "together layout ";
      return classes + (isWide ? "horizontal" : "vertical narrow");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        narrow: {
          type: Boolean
        },
        isWide: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigSection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-config-section", HaConfigSection);

/***/ }),

/***/ "./src/panels/config/integrations/config-entry/ha-ce-entities-card.js":
/*!****************************************************************************!*\
  !*** ./src/panels/config/integrations/config-entry/ha-ce-entities-card.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/entity_registry */ "./src/data/entity_registry.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-card {\n          margin-top: 8px;\n          padding-bottom: 8px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n      </style>\n      <ha-card header=\"[[heading]]\">\n        <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"entity\">\n          <paper-icon-item on-click=\"_openMoreInfo\">\n            <state-badge\n              state-obj=\"[[_computeStateObj(entity, hass)]]\"\n              slot=\"item-icon\"\n            ></state-badge>\n            <paper-item-body>\n              <div class=\"name\">[[_computeEntityName(entity, hass)]]</div>\n              <div class=\"secondary entity-id\">[[entity.entity_id]]</div>\n            </paper-item-body>\n          </paper-icon-item>\n        </template>\n      </ha-card>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











/*
 * @appliesMixin LocalizeMixIn
 * @appliesMixin EventsMixin
 */

var HaCeEntitiesCard =
/*#__PURE__*/
function (_LocalizeMixIn) {
  _inherits(HaCeEntitiesCard, _LocalizeMixIn);

  function HaCeEntitiesCard() {
    _classCallCheck(this, HaCeEntitiesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCeEntitiesCard).apply(this, arguments));
  }

  _createClass(HaCeEntitiesCard, [{
    key: "_computeStateObj",
    value: function _computeStateObj(entity, hass) {
      return hass.states[entity.entity_id];
    }
  }, {
    key: "_computeEntityName",
    value: function _computeEntityName(entity, hass) {
      return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_9__["computeEntityRegistryName"])(hass, entity) || "(".concat(this.localize("ui.panel.config.integrations.config_entry.entity_unavailable"), ")");
    }
  }, {
    key: "_openMoreInfo",
    value: function _openMoreInfo(ev) {
      this.fire("hass-more-info", {
        entityId: ev.model.entity.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        heading: String,
        entities: Array,
        hass: Object
      };
    }
  }]);

  return HaCeEntitiesCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-ce-entities-card", HaCeEntitiesCard);

/***/ }),

/***/ "./src/panels/config/integrations/config-entry/ha-config-entry-page.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/config/integrations/config-entry/ha-config-entry-page.ts ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../layouts/hass-error-screen */ "./src/layouts/hass-error-screen.ts");
/* harmony import */ var _devices_ha_devices_data_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../devices/ha-devices-data-table */ "./src/panels/config/devices/ha-devices-data-table.ts");
/* harmony import */ var _ha_ce_entities_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-ce-entities-card */ "./src/panels/config/integrations/config-entry/ha-ce-entities-card.js");
/* harmony import */ var _dialogs_config_flow_show_dialog_options_flow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../dialogs/config-flow/show-dialog-options-flow */ "./src/dialogs/config-flow/show-dialog-options-flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _dialogs_config_entry_system_options_show_dialog_config_entry_system_options__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../dialogs/config-entry-system-options/show-dialog-config-entry-system-options */ "./src/dialogs/config-entry-system-options/show-dialog-config-entry-system-options.ts");












var HaConfigEntryPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaConfigEntryPage, _super);
    function HaConfigEntryPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._computeConfigEntryDevices = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(function (configEntry, devices) {
            if (!devices) {
                return [];
            }
            return devices.filter(function (device) {
                return device.config_entries.includes(configEntry.entry_id);
            });
        });
        _this._computeNoDeviceEntities = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(function (configEntry, entities) {
            if (!entities) {
                return [];
            }
            return entities.filter(function (ent) { return !ent.device_id && ent.config_entry_id === configEntry.entry_id; });
        });
        return _this;
    }
    Object.defineProperty(HaConfigEntryPage.prototype, "_configEntry", {
        get: function () {
            var _this = this;
            return this.configEntries
                ? this.configEntries.find(function (entry) { return entry.entry_id === _this.configEntryId; })
                : undefined;
        },
        enumerable: true,
        configurable: true
    });
    HaConfigEntryPage.prototype.render = function () {
        var configEntry = this._configEntry;
        if (!configEntry) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hass-error-screen error=\"Integration not found.\"></hass-error-screen>\n      "], ["\n        <hass-error-screen error=\"Integration not found.\"></hass-error-screen>\n      "])));
        }
        var configEntryDevices = this._computeConfigEntryDevices(configEntry, this.deviceRegistryEntries);
        var noDeviceEntities = this._computeNoDeviceEntities(configEntry, this.entityRegistryEntries);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage .header=", ">\n        ", "\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:message-settings-variant\"\n          @click=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:delete\"\n          @click=", "\n        ></paper-icon-button>\n\n        <div class=\"content\">\n          ", "\n          ", "\n        </div>\n      </hass-subpage>\n    "], ["\n      <hass-subpage .header=", ">\n        ",
            "\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:message-settings-variant\"\n          @click=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:delete\"\n          @click=", "\n        ></paper-icon-button>\n\n        <div class=\"content\">\n          ",
            "\n          ",
            "\n        </div>\n      </hass-subpage>\n    "])), configEntry.title, configEntry.supports_options
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-icon-button\n                slot=\"toolbar-icon\"\n                icon=\"hass:settings\"\n                @click=", "\n              ></paper-icon-button>\n            "], ["\n              <paper-icon-button\n                slot=\"toolbar-icon\"\n                icon=\"hass:settings\"\n                @click=", "\n              ></paper-icon-button>\n            "])), this._showSettings) : "", this._showSystemOptions, this._removeEntry, configEntryDevices.length === 0 && noDeviceEntities.length === 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <p>\n                  ", "\n                </p>\n              "], ["\n                <p>\n                  ",
                "\n                </p>\n              "])), this.hass.localize("ui.panel.config.integrations.config_entry.no_devices")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <ha-devices-data-table\n                  .hass=", "\n                  .narrow=", "\n                  .devices=", "\n                  .entries=", "\n                  .entities=", "\n                  .areas=", "\n                ></ha-devices-data-table>\n              "], ["\n                <ha-devices-data-table\n                  .hass=", "\n                  .narrow=", "\n                  .devices=", "\n                  .entries=", "\n                  .entities=", "\n                  .areas=", "\n                ></ha-devices-data-table>\n              "])), this.hass, this.narrow, configEntryDevices, this.configEntries, this.entityRegistryEntries, this.areas), noDeviceEntities.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <ha-ce-entities-card\n                  .heading=", "\n                  .entities=", "\n                  .hass=", "\n                  .narrow=", "\n                ></ha-ce-entities-card>\n              "], ["\n                <ha-ce-entities-card\n                  .heading=",
                "\n                  .entities=", "\n                  .hass=", "\n                  .narrow=", "\n                ></ha-ce-entities-card>\n              "])), this.hass.localize("ui.panel.config.integrations.config_entry.no_device"), noDeviceEntities, this.hass, this.narrow) : "");
    };
    HaConfigEntryPage.prototype._showSettings = function () {
        Object(_dialogs_config_flow_show_dialog_options_flow__WEBPACK_IMPORTED_MODULE_6__["showOptionsFlowDialog"])(this, this._configEntry);
    };
    HaConfigEntryPage.prototype._showSystemOptions = function () {
        Object(_dialogs_config_entry_system_options_show_dialog_config_entry_system_options__WEBPACK_IMPORTED_MODULE_11__["showConfigEntrySystemOptionsDialog"])(this, {
            entry: this._configEntry,
        });
    };
    HaConfigEntryPage.prototype._removeEntry = function () {
        var _this = this;
        if (!confirm(this.hass.localize("ui.panel.config.integrations.config_entry.delete_confirm"))) {
            return;
        }
        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_9__["deleteConfigEntry"])(this.hass, this.configEntryId).then(function (result) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "hass-reload-entries");
            if (result.require_restart) {
                alert(_this.hass.localize("ui.panel.config.integrations.config_entry.restart_confirm"));
            }
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_8__["navigate"])(_this, "/config/integrations/dashboard", true);
        });
    };
    Object.defineProperty(HaConfigEntryPage, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .content {\n        padding: 4px;\n      }\n      p {\n        text-align: center;\n      }\n      ha-devices-data-table {\n        width: 100%;\n      }\n    "], ["\n      .content {\n        padding: 4px;\n      }\n      p {\n        text-align: center;\n      }\n      ha-devices-data-table {\n        width: 100%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "configEntryId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "configEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "entityRegistryEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "deviceRegistryEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_7__["property"])()
    ], HaConfigEntryPage.prototype, "areas", void 0);
    return HaConfigEntryPage;
}(lit_element__WEBPACK_IMPORTED_MODULE_7__["LitElement"]));
customElements.define("ha-config-entry-page", HaConfigEntryPage);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/panels/config/integrations/ha-config-entries-dashboard.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-entries-dashboard.ts ***!
  \***********************************************************************/
/*! exports provided: HaConfigManagerDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaConfigManagerDashboard", function() { return HaConfigManagerDashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");





















var HaConfigManagerDashboard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaConfigManagerDashboard, _super);
    function HaConfigManagerDashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaConfigManagerDashboard.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_17__["loadConfigFlowDialog"])();
    };
    HaConfigManagerDashboard.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage\n        header=", "\n      >\n        ", "\n\n        <ha-config-section class=\"configured\">\n          <span slot=\"header\"\n            >", "</span\n          >\n          <ha-card>\n            ", "\n          </ha-card>\n        </ha-config-section>\n\n        <ha-fab\n          icon=\"hass:plus\"\n          title=", "\n          @click=", "\n          ?rtl=", "\n        ></ha-fab>\n      </hass-subpage>\n    "], ["\n      <hass-subpage\n        header=", "\n      >\n        ",
            "\n\n        <ha-config-section class=\"configured\">\n          <span slot=\"header\"\n            >",
            "</span\n          >\n          <ha-card>\n            ",
            "\n          </ha-card>\n        </ha-config-section>\n\n        <ha-fab\n          icon=\"hass:plus\"\n          title=", "\n          @click=", "\n          ?rtl=", "\n        ></ha-fab>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.integrations.caption"), this.configEntriesInProgress.length
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-config-section>\n                <span slot=\"header\"\n                  >", "</span\n                >\n                <ha-card>\n                  ", "\n                </ha-card>\n              </ha-config-section>\n            "], ["\n              <ha-config-section>\n                <span slot=\"header\"\n                  >",
                "</span\n                >\n                <ha-card>\n                  ",
                "\n                </ha-card>\n              </ha-config-section>\n            "])), this.hass.localize("ui.panel.config.integrations.discovered"), this.configEntriesInProgress.map(function (flow) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"config-entry-row\">\n                        <paper-item-body>\n                          ", "\n                        </paper-item-body>\n                        <mwc-button\n                          @click=", "\n                          data-id=\"", "\"\n                          >", "</mwc-button\n                        >\n                      </div>\n                    "], ["\n                      <div class=\"config-entry-row\">\n                        <paper-item-body>\n                          ", "\n                        </paper-item-body>\n                        <mwc-button\n                          @click=", "\n                          data-id=\"", "\"\n                          >",
                "</mwc-button\n                        >\n                      </div>\n                    "])), Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_18__["localizeConfigFlowTitle"])(_this.hass.localize, flow), _this._continueFlow, flow.flow_id, _this.hass.localize("ui.panel.config.integrations.configure")); })) : "", this.hass.localize("ui.panel.config.integrations.configured"), this.entityRegistryEntries.length
            ? this.configEntries.map(function (item, idx) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <a\n                      href=\"/config/integrations/config_entry/", "\"\n                    >\n                      <paper-item data-index=", ">\n                        <paper-item-body two-line>\n                          <div>\n                            ", ":\n                            ", "\n                          </div>\n                          <div secondary>\n                            ", "\n                          </div>\n                        </paper-item-body>\n                        <ha-icon-next></ha-icon-next>\n                      </paper-item>\n                    </a>\n                  "], ["\n                    <a\n                      href=\"/config/integrations/config_entry/", "\"\n                    >\n                      <paper-item data-index=", ">\n                        <paper-item-body two-line>\n                          <div>\n                            ",
                ":\n                            ", "\n                          </div>\n                          <div secondary>\n                            ",
                "\n                          </div>\n                        </paper-item-body>\n                        <ha-icon-next></ha-icon-next>\n                      </paper-item>\n                    </a>\n                  "])), item.entry_id, idx, _this.hass.localize("component." + item.domain + ".config.title"), item.title, _this._getEntities(item).map(function (entity) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                <span>\n                                  <ha-state-icon\n                                    .stateObj=", "\n                                  ></ha-state-icon>\n                                  <paper-tooltip position=\"bottom\"\n                                    >", "</paper-tooltip\n                                  >\n                                </span>\n                              "], ["\n                                <span>\n                                  <ha-state-icon\n                                    .stateObj=", "\n                                  ></ha-state-icon>\n                                  <paper-tooltip position=\"bottom\"\n                                    >", "</paper-tooltip\n                                  >\n                                </span>\n                              "])), entity, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__["computeStateName"])(entity)); })); })
            : Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <div class=\"config-entry-row\">\n                    <paper-item-body two-line>\n                      <div>\n                        ", "\n                      </div>\n                    </paper-item-body>\n                  </div>\n                "], ["\n                  <div class=\"config-entry-row\">\n                    <paper-item-body two-line>\n                      <div>\n                        ",
                "\n                      </div>\n                    </paper-item-body>\n                  </div>\n                "])), this.hass.localize("ui.panel.config.integrations.none")), this.hass.localize("ui.panel.config.integrations.new"), this._createFlow, Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTL"])(this.hass));
    };
    HaConfigManagerDashboard.prototype._createFlow = function () {
        var _this = this;
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_17__["showConfigFlowDialog"])(this, {
            dialogClosedCallback: function () { return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_20__["fireEvent"])(_this, "hass-reload-entries"); },
        });
    };
    HaConfigManagerDashboard.prototype._continueFlow = function (ev) {
        var _this = this;
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_17__["showConfigFlowDialog"])(this, {
            continueFlowId: ev.target.getAttribute("data-id") || undefined,
            dialogClosedCallback: function () { return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_20__["fireEvent"])(_this, "hass-reload-entries"); },
        });
    };
    HaConfigManagerDashboard.prototype._getEntities = function (configEntry) {
        var _this = this;
        if (!this.entityRegistryEntries) {
            return [];
        }
        var states = [];
        this.entityRegistryEntries.forEach(function (entity) {
            if (entity.config_entry_id === configEntry.entry_id &&
                entity.entity_id in _this.hass.states) {
                states.push(_this.hass.states[entity.entity_id]);
            }
        });
        return states;
    };
    Object.defineProperty(HaConfigManagerDashboard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ha-card {\n        overflow: hidden;\n      }\n      mwc-button {\n        top: 3px;\n        margin-right: -0.57em;\n      }\n      .config-entry-row {\n        display: flex;\n        padding: 0 16px;\n      }\n      ha-icon {\n        cursor: pointer;\n        margin: 8px;\n      }\n      .configured a {\n        color: var(--primary-text-color);\n        text-decoration: none;\n      }\n      ha-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      ha-fab[rtl] {\n        right: auto;\n        left: 16px;\n      }\n    "], ["\n      ha-card {\n        overflow: hidden;\n      }\n      mwc-button {\n        top: 3px;\n        margin-right: -0.57em;\n      }\n      .config-entry-row {\n        display: flex;\n        padding: 0 16px;\n      }\n      ha-icon {\n        cursor: pointer;\n        margin: 8px;\n      }\n      .configured a {\n        color: var(--primary-text-color);\n        text-decoration: none;\n      }\n      ha-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      ha-fab[rtl] {\n        right: auto;\n        left: 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["property"])()
    ], HaConfigManagerDashboard.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["property"])()
    ], HaConfigManagerDashboard.prototype, "configEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["property"])()
    ], HaConfigManagerDashboard.prototype, "entityRegistryEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["property"])()
    ], HaConfigManagerDashboard.prototype, "configEntriesInProgress", void 0);
    HaConfigManagerDashboard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_19__["customElement"])("ha-config-entries-dashboard")
    ], HaConfigManagerDashboard);
    return HaConfigManagerDashboard;
}(lit_element__WEBPACK_IMPORTED_MODULE_19__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/panels/config/integrations/ha-config-integrations.ts":
/*!******************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-integrations.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_config_entries_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-config-entries-dashboard */ "./src/panels/config/integrations/ha-config-entries-dashboard.ts");
/* harmony import */ var _config_entry_ha_config_entry_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-entry/ha-config-entry-page */ "./src/panels/config/integrations/config-entry/ha-config-entry-page.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/config_flow */ "./src/data/config_flow.ts");












var HaConfigIntegrations = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaConfigIntegrations, _super);
    function HaConfigIntegrations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.routerOptions = {
            defaultPage: "dashboard",
            routes: {
                dashboard: {
                    tag: "ha-config-entries-dashboard",
                },
                config_entry: {
                    tag: "ha-config-entry-page",
                },
            },
        };
        _this._configEntries = [];
        _this._configEntriesInProgress = [];
        _this._entityRegistryEntries = [];
        _this._deviceRegistryEntries = [];
        _this._areas = [];
        return _this;
    }
    HaConfigIntegrations.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        if (!this.hass) {
            return;
        }
        this._loadData();
    };
    HaConfigIntegrations.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._unsubs) {
            while (this._unsubs.length) {
                this._unsubs.pop()();
            }
            this._unsubs = undefined;
        }
    };
    HaConfigIntegrations.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.addEventListener("hass-reload-entries", function () {
            _this._loadData();
            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_11__["getConfigFlowInProgressCollection"])(_this.hass.connection).refresh();
        });
    };
    HaConfigIntegrations.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (!this._unsubs && changedProps.has("hass")) {
            this._loadData();
        }
    };
    HaConfigIntegrations.prototype.updatePageEl = function (pageEl) {
        pageEl.hass = this.hass;
        pageEl.entityRegistryEntries = this._entityRegistryEntries;
        pageEl.configEntries = this._configEntries;
        if (this._currentPage === "dashboard") {
            pageEl.configEntriesInProgress = this._configEntriesInProgress;
            return;
        }
        pageEl.configEntryId = this.routeTail.path.substr(1);
        pageEl.deviceRegistryEntries = this._deviceRegistryEntries;
        pageEl.areas = this._areas;
        pageEl.narrow = this.narrow;
    };
    HaConfigIntegrations.prototype._loadData = function () {
        var _this = this;
        Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_8__["getConfigEntries"])(this.hass).then(function (configEntries) {
            _this._configEntries = configEntries.sort(function (conf1, conf2) {
                return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_5__["compare"])(conf1.title, conf2.title);
            });
        });
        if (this._unsubs) {
            return;
        }
        this._unsubs = [
            Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_6__["subscribeAreaRegistry"])(this.hass.connection, function (areas) {
                _this._areas = areas;
            }),
            Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeEntityRegistry"])(this.hass.connection, function (entries) {
                _this._entityRegistryEntries = entries;
            }),
            Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeDeviceRegistry"])(this.hass.connection, function (entries) {
                _this._deviceRegistryEntries = entries;
            }),
            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_11__["subscribeConfigFlowInProgress"])(this.hass, function (flowsInProgress) {
                _this._configEntriesInProgress = flowsInProgress;
            }),
        ];
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "_configEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "_configEntriesInProgress", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "_entityRegistryEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "_deviceRegistryEntries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], HaConfigIntegrations.prototype, "_areas", void 0);
    HaConfigIntegrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("ha-config-integrations")
    ], HaConfigIntegrations);
    return HaConfigIntegrations;
}(_layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_7__["HassRouterPage"]));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlsL2RlYm91bmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZmFiLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb25maWdfZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kZXZpY2VfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvb3B0aW9uc19mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9ucy9zaG93LWRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctY29uZmlnLWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLW9wdGlvbnMtZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvY29uZmlnLWVudHJ5L2hhLWNlLWVudGl0aWVzLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaW50ZWdyYXRpb25zL2NvbmZpZy1lbnRyeS9oYS1jb25maWctZW50cnktcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9pbnRlZ3JhdGlvbnMvaGEtY29uZmlnLWVudHJpZXMtZGFzaGJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2ludGVncmF0aW9ucy9oYS1jb25maWctaW50ZWdyYXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5jbGFzcyBIYUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhlYWRlcj86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYS1jYXJkLWJvcmRlci1yYWRpdXMsIDJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYm94LXNoYWRvdyxcbiAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtaGVhZGVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWhlYWRlcikge1xuICAgICAgICBjb2xvcjogdmFyKC0taGEtY2FyZC1oZWFkZXItY29sb3IsIC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LXNpemUsIDI0cHgpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50Om5vdCg6Zmlyc3QtY2hpbGQpKSxcbiAgICAgIHNsb3Q6bm90KDpmaXJzdC1jaGlsZCk6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLmhlYWRlclxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj4ke3RoaXMuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYGB9XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkXCIsIEhhQ2FyZCk7XG4iLCJpbXBvcnQge1xuICBjbGFzc01hcCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qc1wiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjRmFiID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWZhYlwiKSBhcyBDb25zdHJ1Y3RvcjxGYWI+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZhYlwiKVxuZXhwb3J0IGNsYXNzIEhhRmFiIGV4dGVuZHMgTXdjRmFiIHtcbiAgLy8gV2Ugb3ZlcnJpZGUgdGhlIHJlbmRlciBtZXRob2QgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFuIGljb24gZm9udCBhbmQgbXdjLWZhYiBkb2Vzbid0IHN1cHBvcnQgb3VyIHN2Zy1pY29uIHNldHMuXG4gIC8vIEJhc2VkIG9uIHZlcnNpb24gbXdjLWZhYiAwLjhcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJtZGMtZmFiLS1taW5pXCI6IHRoaXMubWluaSxcbiAgICAgIFwibWRjLWZhYi0tZXhpdGVkXCI6IHRoaXMuZXhpdGVkLFxuICAgICAgXCJtZGMtZmFiLS1leHRlbmRlZFwiOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gXCJcIiAmJiB0aGlzLmV4dGVuZGVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvblxuICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCJcbiAgICAgID5cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5pY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZmFiXCI6IEhhRmFiO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaWNvbiA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICAgID8gXCJoYXNzOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb24tbmV4dFwiOiBIYUljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb24tbmV4dFwiLCBIYUljb25OZXh0KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwLCBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBnZXRDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFwiUE9TVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93XCIsIHtcbiAgICBoYW5kbGVyLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIkdFVFwiLFxuICAgIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDb25maWdGbG93U3RlcCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZmxvd0lkOiBzdHJpbmcsXG4gIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCxcbiAgICBkYXRhXG4gICk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxzdHJpbmdbXT4oXCJHRVRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd19oYW5kbGVyc1wiKTtcblxuY29uc3QgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9mbG93L3Byb2dyZXNzXCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzc1VwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyhjb25uKS50aGVuKChmbG93cykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShmbG93cywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiY29uZmlnX2VudHJ5X2Rpc2NvdmVyZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb248RGF0YUVudHJ5Rmxvd1Byb2dyZXNzW10+KFxuICAgIGNvbm4sXG4gICAgXCJfY29uZmlnRmxvd1Byb2dyZXNzXCIsXG4gICAgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyxcbiAgICBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzc1VwZGF0ZXNcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBvbkNoYW5nZTogKGZsb3dzOiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXSkgPT4gdm9pZFxuKSA9PiBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24oaGFzcy5jb25uZWN0aW9uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVDb25maWdGbG93VGl0bGUgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGZsb3c6IERhdGFFbnRyeUZsb3dQcm9ncmVzc1xuKSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IGZsb3cuY29udGV4dC50aXRsZV9wbGFjZWhvbGRlcnMgfHwge307XG4gIGNvbnN0IHBsYWNlaG9sZGVyS2V5cyA9IE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycyk7XG4gIGlmIChwbGFjZWhvbGRlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy50aXRsZWApO1xuICB9XG4gIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gW107XG4gIHBsYWNlaG9sZGVyS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhcmdzLnB1c2goa2V5KTtcbiAgICBhcmdzLnB1c2gocGxhY2Vob2xkZXJzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy5mbG93X3RpdGxlYCwgLi4uYXJncyk7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1N0ZXAgfSBmcm9tIFwiLi9kYXRhX2VudHJ5X2Zsb3dcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU9wdGlvbnNGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBcImNvbmZpZy9jb25maWdfZW50cmllcy9vcHRpb25zL2Zsb3dcIixcbiAgICB7XG4gICAgICBoYW5kbGVyLFxuICAgIH1cbiAgKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoT3B0aW9uc0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJHRVRcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL29wdGlvbnMvZmxvdy8ke2Zsb3dJZH1gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVPcHRpb25zRmxvd1N0ZXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGZsb3dJZDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9vcHRpb25zL2Zsb3cvJHtmbG93SWR9YCxcbiAgICBkYXRhXG4gICk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVPcHRpb25zRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvb3B0aW9ucy9mbG93LyR7Zmxvd0lkfWApO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9uc0RpYWxvZ1BhcmFtcyB7XG4gIGVudHJ5OiBDb25maWdFbnRyeTtcbiAgLy8gdXBkYXRlRW50cnk6IChcbiAgLy8gICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4gIC8vICkgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgLy8gcmVtb3ZlRW50cnk6ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zXCIgKi8gXCIuL2RpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1jb25maWctZW50cnktc3lzdGVtLW9wdGlvbnNcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnNEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIGdldENvbmZpZ0Zsb3dIYW5kbGVycyxcbiAgZmV0Y2hDb25maWdGbG93LFxuICBoYW5kbGVDb25maWdGbG93U3RlcCxcbiAgZGVsZXRlQ29uZmlnRmxvdyxcbiAgY3JlYXRlQ29uZmlnRmxvdyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2Zsb3dcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7XG4gIHNob3dGbG93RGlhbG9nLFxuICBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLFxuICBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbn0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5pbXBvcnQgeyBjYXNlSW5zZW5zaXRpdmVDb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZztcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maWdGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBPbWl0PERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsIFwiZmxvd0NvbmZpZ1wiPlxuKTogdm9pZCA9PlxuICBzaG93Rmxvd0RpYWxvZyhlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHtcbiAgICBsb2FkRGV2aWNlc0FuZEFyZWFzOiB0cnVlLFxuICAgIGdldEZsb3dIYW5kbGVyczogKGhhc3MpID0+XG4gICAgICBnZXRDb25maWdGbG93SGFuZGxlcnMoaGFzcykudGhlbigoaGFuZGxlcnMpID0+XG4gICAgICAgIGhhbmRsZXJzLnNvcnQoKGhhbmRsZXJBLCBoYW5kbGVyQikgPT5cbiAgICAgICAgICBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKFxuICAgICAgICAgICAgaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckF9LmNvbmZpZy50aXRsZWApLFxuICAgICAgICAgICAgaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckJ9LmNvbmZpZy50aXRsZWApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgIGNyZWF0ZUZsb3c6IGNyZWF0ZUNvbmZpZ0Zsb3csXG4gICAgZmV0Y2hGbG93OiBmZXRjaENvbmZpZ0Zsb3csXG4gICAgaGFuZGxlRmxvd1N0ZXA6IGhhbmRsZUNvbmZpZ0Zsb3dTdGVwLFxuICAgIGRlbGV0ZUZsb3c6IGRlbGV0ZUNvbmZpZ0Zsb3csXG5cbiAgICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5hYm9ydC4ke3N0ZXAucmVhc29ufWAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEhlYWRlcihoYXNzLCBzdGVwKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRlc2NyaXB0aW9uYCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkTGFiZWwoaGFzcywgc3RlcCwgZmllbGQpIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGF0YS4ke1xuICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoaGFzcywgc3RlcCwgZXJyb3IpIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5lcnJvci4ke2Vycm9yfWApO1xuICAgIH0sXG5cbiAgICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoaGFzcywgc3RlcCkge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5zdGVwLiR7c3RlcC5zdGVwX2lkfS50aXRsZWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlckV4dGVybmFsU3RlcERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwPlxuICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIGA7XG4gICAgfSxcblxuICAgIHJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmNyZWF0ZV9lbnRyeS4ke3N0ZXAuZGVzY3JpcHRpb24gfHxcbiAgICAgICAgICBcImRlZmF1bHRcIn1gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHA+Q3JlYXRlZCBjb25maWcgZm9yICR7c3RlcC50aXRsZX0uPC9wPlxuICAgICAgYDtcbiAgICB9LFxuICB9KTtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5LFxuICBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsLFxuICBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gIERhdGFFbnRyeUZsb3dTdGVwLFxuICBEYXRhRW50cnlGbG93U3RlcEFib3J0LFxuICBGaWVsZFNjaGVtYSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxvd0NvbmZpZyB7XG4gIGxvYWREZXZpY2VzQW5kQXJlYXM6IGJvb2xlYW47XG5cbiAgZ2V0Rmxvd0hhbmRsZXJzPzogKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+IFByb21pc2U8c3RyaW5nW10+O1xuXG4gIGNyZWF0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgZmV0Y2hGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgaGFuZGxlRmxvd1N0ZXAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBmbG93SWQ6IHN0cmluZyxcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGRlbGV0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+O1xuXG4gIHJlbmRlckFib3J0RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEFib3J0XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm1cbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICAgIGZpZWxkOiBGaWVsZFNjaGVtYVxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybSxcbiAgICBlcnJvcjogc3RyaW5nXG4gICk6IHN0cmluZztcblxuICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsXG4gICk6IHN0cmluZztcblxuICByZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRXh0ZXJuYWxcbiAgKTogVGVtcGxhdGVSZXN1bHQgfCBcIlwiO1xuXG4gIHJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zIHtcbiAgc3RhcnRGbG93SGFuZGxlcj86IHN0cmluZztcbiAgY29udGludWVGbG93SWQ/OiBzdHJpbmc7XG4gIGRpYWxvZ0Nsb3NlZENhbGxiYWNrPzogKHBhcmFtczogeyBmbG93RmluaXNoZWQ6IGJvb2xlYW4gfSkgPT4gdm9pZDtcbiAgZmxvd0NvbmZpZzogRmxvd0NvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREYXRhRW50cnlGbG93RGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWNvbmZpZy1mbG93XCIgKi8gXCIuL2RpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Rmxvd0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogT21pdDxEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLCBcImZsb3dDb25maWdcIj4sXG4gIGZsb3dDb25maWc6IEZsb3dDb25maWdcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREYXRhRW50cnlGbG93RGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgZmxvd0NvbmZpZyxcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBmZXRjaE9wdGlvbnNGbG93LFxuICBoYW5kbGVPcHRpb25zRmxvd1N0ZXAsXG4gIGRlbGV0ZU9wdGlvbnNGbG93LFxuICBjcmVhdGVPcHRpb25zRmxvdyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvb3B0aW9uc19mbG93XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUtleSB9IGZyb20gXCIuLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQge1xuICBzaG93Rmxvd0RpYWxvZyxcbiAgbG9hZERhdGFFbnRyeUZsb3dEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuXG5leHBvcnQgY29uc3QgbG9hZE9wdGlvbnNGbG93RGlhbG9nID0gbG9hZERhdGFFbnRyeUZsb3dEaWFsb2c7XG5cbmV4cG9ydCBjb25zdCBzaG93T3B0aW9uc0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBjb25maWdFbnRyeTogQ29uZmlnRW50cnlcbik6IHZvaWQgPT5cbiAgc2hvd0Zsb3dEaWFsb2coXG4gICAgZWxlbWVudCxcbiAgICB7XG4gICAgICBzdGFydEZsb3dIYW5kbGVyOiBjb25maWdFbnRyeS5lbnRyeV9pZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxvYWREZXZpY2VzQW5kQXJlYXM6IGZhbHNlLFxuICAgICAgY3JlYXRlRmxvdzogY3JlYXRlT3B0aW9uc0Zsb3csXG4gICAgICBmZXRjaEZsb3c6IGZldGNoT3B0aW9uc0Zsb3csXG4gICAgICBoYW5kbGVGbG93U3RlcDogaGFuZGxlT3B0aW9uc0Zsb3dTdGVwLFxuICAgICAgZGVsZXRlRmxvdzogZGVsZXRlT3B0aW9uc0Zsb3csXG5cbiAgICAgIHJlbmRlckFib3J0RGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgICAgYGNvbXBvbmVudC4ke2NvbmZpZ0VudHJ5LmRvbWFpbn0ub3B0aW9ucy5hYm9ydC4ke3N0ZXAucmVhc29ufWAsXG4gICAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIjtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlclNob3dGb3JtU3RlcEhlYWRlcihoYXNzLCBfc3RlcCkge1xuICAgICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShgdWkuZGlhbG9ncy5vcHRpb25zX2Zsb3cuZm9ybS5oZWFkZXJgKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKF9oYXNzLCBfc3RlcCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkTGFiZWwoaGFzcywgc3RlcCwgZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgICAgYGNvbXBvbmVudC4ke2NvbmZpZ0VudHJ5LmRvbWFpbn0ub3B0aW9ucy5zdGVwLiR7c3RlcC5zdGVwX2lkfS5kYXRhLiR7XG4gICAgICAgICAgICBmaWVsZC5uYW1lXG4gICAgICAgICAgfWBcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoaGFzcywgX3N0ZXAsIGVycm9yKSB7XG4gICAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICAgIGBjb21wb25lbnQuJHtjb25maWdFbnRyeS5kb21haW59Lm9wdGlvbnMuZXJyb3IuJHtlcnJvcn1gXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoX2hhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oX2hhc3MsIF9zdGVwKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbihoYXNzLCBfc3RlcCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICA8cD4ke2hhc3MubG9jYWxpemUoYHVpLmRpYWxvZ3Mub3B0aW9uc19mbG93LnN1Y2Nlc3MuZGVzY3JpcHRpb25gKX08L3A+XG4gICAgICAgIGA7XG4gICAgICB9LFxuICAgIH1cbiAgKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peEluIGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZW50aXR5X3JlZ2lzdHJ5XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4SW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDZUVudGl0aWVzQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4SW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIltbaGVhZGluZ11dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZW50aXRpZXNdXVwiIGFzPVwiZW50aXR5XCI+XG4gICAgICAgICAgPHBhcGVyLWljb24taXRlbSBvbi1jbGljaz1cIl9vcGVuTW9yZUluZm9cIj5cbiAgICAgICAgICAgIDxzdGF0ZS1iYWRnZVxuICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW19jb21wdXRlU3RhdGVPYmooZW50aXR5LCBoYXNzKV1dXCJcbiAgICAgICAgICAgICAgc2xvdD1cIml0ZW0taWNvblwiXG4gICAgICAgICAgICA+PC9zdGF0ZS1iYWRnZT5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+W1tfY29tcHV0ZUVudGl0eU5hbWUoZW50aXR5LCBoYXNzKV1dPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnkgZW50aXR5LWlkXCI+W1tlbnRpdHkuZW50aXR5X2lkXV08L2Rpdj5cbiAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRpbmc6IFN0cmluZyxcbiAgICAgIGVudGl0aWVzOiBBcnJheSxcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU9iaihlbnRpdHksIGhhc3MpIHtcbiAgICByZXR1cm4gaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gIH1cblxuICBfY29tcHV0ZUVudGl0eU5hbWUoZW50aXR5LCBoYXNzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUoaGFzcywgZW50aXR5KSB8fFxuICAgICAgYCgke3RoaXMubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkuZW50aXR5X3VuYXZhaWxhYmxlXCJcbiAgICAgICl9KWBcbiAgICApO1xuICB9XG5cbiAgX29wZW5Nb3JlSW5mbyhldikge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IGV2Lm1vZGVsLmVudGl0eS5lbnRpdHlfaWQgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2UtZW50aXRpZXMtY2FyZFwiLCBIYUNlRW50aXRpZXNDYXJkKTtcbiIsImltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1lcnJvci1zY3JlZW5cIjtcblxuaW1wb3J0IFwiLi4vLi4vZGV2aWNlcy9oYS1kZXZpY2VzLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4vaGEtY2UtZW50aXRpZXMtY2FyZFwiO1xuaW1wb3J0IHsgc2hvd09wdGlvbnNGbG93RGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvY29uZmlnLWZsb3cvc2hvdy1kaWFsb2ctb3B0aW9ucy1mbG93XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eSwgTGl0RWxlbWVudCwgQ1NTUmVzdWx0LCBjc3MsIGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ29uZmlnRW50cnksXG4gIGRlbGV0ZUNvbmZpZ0VudHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgRGV2aWNlUmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQXJlYVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBzaG93Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvY29uZmlnLWVudHJ5LXN5c3RlbS1vcHRpb25zL3Nob3ctZGlhbG9nLWNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc1wiO1xuXG5jbGFzcyBIYUNvbmZpZ0VudHJ5UGFnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnRW50cnlJZCE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbmZpZ0VudHJpZXMhOiBDb25maWdFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXR5UmVnaXN0cnlFbnRyaWVzITogRW50aXR5UmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlUmVnaXN0cnlFbnRyaWVzITogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYXJlYXMhOiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuXG4gIHByaXZhdGUgZ2V0IF9jb25maWdFbnRyeSgpOiBDb25maWdFbnRyeSB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnRW50cmllc1xuICAgICAgPyB0aGlzLmNvbmZpZ0VudHJpZXMuZmluZChcbiAgICAgICAgICAoZW50cnkpID0+IGVudHJ5LmVudHJ5X2lkID09PSB0aGlzLmNvbmZpZ0VudHJ5SWRcbiAgICAgICAgKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlQ29uZmlnRW50cnlEZXZpY2VzID0gbWVtb2l6ZU9uZShcbiAgICAoY29uZmlnRW50cnk6IENvbmZpZ0VudHJ5LCBkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHtcbiAgICAgIGlmICghZGV2aWNlcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT5cbiAgICAgICAgZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmluY2x1ZGVzKGNvbmZpZ0VudHJ5LmVudHJ5X2lkKVxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZU5vRGV2aWNlRW50aXRpZXMgPSBtZW1vaXplT25lKFxuICAgIChjb25maWdFbnRyeTogQ29uZmlnRW50cnksIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHtcbiAgICAgIGlmICghZW50aXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihcbiAgICAgICAgKGVudCkgPT4gIWVudC5kZXZpY2VfaWQgJiYgZW50LmNvbmZpZ19lbnRyeV9pZCA9PT0gY29uZmlnRW50cnkuZW50cnlfaWRcbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY29uZmlnRW50cnkgPSB0aGlzLl9jb25maWdFbnRyeTtcblxuICAgIGlmICghY29uZmlnRW50cnkpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1lcnJvci1zY3JlZW4gZXJyb3I9XCJJbnRlZ3JhdGlvbiBub3QgZm91bmQuXCI+PC9oYXNzLWVycm9yLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgY29uZmlnRW50cnlEZXZpY2VzID0gdGhpcy5fY29tcHV0ZUNvbmZpZ0VudHJ5RGV2aWNlcyhcbiAgICAgIGNvbmZpZ0VudHJ5LFxuICAgICAgdGhpcy5kZXZpY2VSZWdpc3RyeUVudHJpZXNcbiAgICApO1xuXG4gICAgY29uc3Qgbm9EZXZpY2VFbnRpdGllcyA9IHRoaXMuX2NvbXB1dGVOb0RldmljZUVudGl0aWVzKFxuICAgICAgY29uZmlnRW50cnksXG4gICAgICB0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllc1xuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgLmhlYWRlcj0ke2NvbmZpZ0VudHJ5LnRpdGxlfT5cbiAgICAgICAgJHtjb25maWdFbnRyeS5zdXBwb3J0c19vcHRpb25zXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpzZXR0aW5nc1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd1NldHRpbmdzfVxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgIGljb249XCJoYXNzOm1lc3NhZ2Utc2V0dGluZ3MtdmFyaWFudFwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd1N5c3RlbU9wdGlvbnN9XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3JlbW92ZUVudHJ5fVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICR7Y29uZmlnRW50cnlEZXZpY2VzLmxlbmd0aCA9PT0gMCAmJiBub0RldmljZUVudGl0aWVzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fZGV2aWNlc1wiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgIDxoYS1kZXZpY2VzLWRhdGEtdGFibGVcbiAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAgICAgLmRldmljZXM9JHtjb25maWdFbnRyeURldmljZXN9XG4gICAgICAgICAgICAgICAgICAuZW50cmllcz0ke3RoaXMuY29uZmlnRW50cmllc31cbiAgICAgICAgICAgICAgICAgIC5lbnRpdGllcz0ke3RoaXMuZW50aXR5UmVnaXN0cnlFbnRyaWVzfVxuICAgICAgICAgICAgICAgICAgLmFyZWFzPSR7dGhpcy5hcmVhc31cbiAgICAgICAgICAgICAgICA+PC9oYS1kZXZpY2VzLWRhdGEtdGFibGU+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgJHtub0RldmljZUVudGl0aWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtY2UtZW50aXRpZXMtY2FyZFxuICAgICAgICAgICAgICAgICAgLmhlYWRpbmc9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fZGV2aWNlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAuZW50aXRpZXM9JHtub0RldmljZUVudGl0aWVzfVxuICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgPjwvaGEtY2UtZW50aXRpZXMtY2FyZD5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9zaG93U2V0dGluZ3MoKSB7XG4gICAgc2hvd09wdGlvbnNGbG93RGlhbG9nKHRoaXMsIHRoaXMuX2NvbmZpZ0VudHJ5ISk7XG4gIH1cblxuICBwcml2YXRlIF9zaG93U3lzdGVtT3B0aW9ucygpIHtcbiAgICBzaG93Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zRGlhbG9nKHRoaXMsIHtcbiAgICAgIGVudHJ5OiB0aGlzLl9jb25maWdFbnRyeSEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVFbnRyeSgpIHtcbiAgICBpZiAoXG4gICAgICAhY29uZmlybShcbiAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkuZGVsZXRlX2NvbmZpcm1cIlxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGVsZXRlQ29uZmlnRW50cnkodGhpcy5oYXNzLCB0aGlzLmNvbmZpZ0VudHJ5SWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1yZWxvYWQtZW50cmllc1wiKTtcbiAgICAgIGlmIChyZXN1bHQucmVxdWlyZV9yZXN0YXJ0KSB7XG4gICAgICAgIGFsZXJ0KFxuICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkucmVzdGFydF9jb25maXJtXCJcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBcIi9jb25maWcvaW50ZWdyYXRpb25zL2Rhc2hib2FyZFwiLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIGhhLWRldmljZXMtZGF0YS10YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLWVudHJ5LXBhZ2VcIiwgSGFDb25maWdFbnRyeVBhZ2UpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcblxuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24tbmV4dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLXN0YXRlLWljb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2csXG59IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93XCI7XG5pbXBvcnQgeyBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbmZpZ0VudHJ5IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY29uZmlnX2VudHJpZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dQcm9ncmVzcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiKVxuZXhwb3J0IGNsYXNzIEhhQ29uZmlnTWFuYWdlckRhc2hib2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBjb25maWdFbnRyaWVzITogQ29uZmlnRW50cnlbXTtcblxuICAvKipcbiAgICogRW50aXR5IFJlZ2lzdHJ5IGVudHJpZXMuXG4gICAqL1xuICBAcHJvcGVydHkoKSBwcml2YXRlIGVudGl0eVJlZ2lzdHJ5RW50cmllcyE6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXTtcblxuICAvKipcbiAgICogQ3VycmVudCBmbG93cyB0aGF0IGFyZSBpbiBwcm9ncmVzcyBhbmQgaGF2ZSBub3QgYmVlbiBzdGFydGVkIGJ5IGEgdXNlci5cbiAgICogRm9yIGV4YW1wbGUsIGNhbiBiZSBkaXNjb3ZlcmVkIGRldmljZXMgdGhhdCByZXF1aXJlIG1vcmUgY29uZmlnLlxuICAgKi9cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBjb25maWdFbnRyaWVzSW5Qcm9ncmVzcyE6IERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGxvYWRDb25maWdGbG93RGlhbG9nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2VcbiAgICAgICAgaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jYXB0aW9uXCIpfVxuICAgICAgPlxuICAgICAgICAke3RoaXMuY29uZmlnRW50cmllc0luUHJvZ3Jlc3MubGVuZ3RoXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5kaXNjb3ZlcmVkXCJcbiAgICAgICAgICAgICAgICAgICl9PC9zcGFuXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmNvbmZpZ0VudHJpZXNJblByb2dyZXNzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKGZsb3cpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZy1lbnRyeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7bG9jYWxpemVDb25maWdGbG93VGl0bGUodGhpcy5oYXNzLmxvY2FsaXplLCBmbG93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY29udGludWVGbG93fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWlkPVwiJHtmbG93LmZsb3dfaWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWd1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGNsYXNzPVwiY29uZmlndXJlZFwiPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgICAgPiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlndXJlZFwiXG4gICAgICAgICAgICApfTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgICR7dGhpcy5lbnRpdHlSZWdpc3RyeUVudHJpZXMubGVuZ3RoXG4gICAgICAgICAgICAgID8gdGhpcy5jb25maWdFbnRyaWVzLm1hcChcbiAgICAgICAgICAgICAgICAgIChpdGVtOiBhbnksIGlkeCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbmZpZy9pbnRlZ3JhdGlvbnMvY29uZmlnX2VudHJ5LyR7aXRlbS5lbnRyeV9pZH1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gZGF0YS1pbmRleD0ke2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGNvbXBvbmVudC4ke2l0ZW0uZG9tYWlufS5jb25maWcudGl0bGVgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZXRFbnRpdGllcyhpdGVtKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50aXR5KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGEtc3RhdGUtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7ZW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLXN0YXRlLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPiR7Y29tcHV0ZVN0YXRlTmFtZShlbnRpdHkpfTwvcGFwZXItdG9vbHRpcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvbi1uZXh0PjwvaGEtaWNvbi1uZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZy1lbnRyeS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG5cbiAgICAgICAgPGhhLWZhYlxuICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgIHRpdGxlPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5uZXdcIil9XG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY3JlYXRlRmxvd31cbiAgICAgICAgICA/cnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MhKX1cbiAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZsb3coKSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IGZpcmVFdmVudCh0aGlzLCBcImhhc3MtcmVsb2FkLWVudHJpZXNcIiksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb250aW51ZUZsb3coZXY6IEV2ZW50KSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgY29udGludWVGbG93SWQ6XG4gICAgICAgIChldi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgfHwgdW5kZWZpbmVkLFxuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IGZpcmVFdmVudCh0aGlzLCBcImhhc3MtcmVsb2FkLWVudHJpZXNcIiksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRFbnRpdGllcyhjb25maWdFbnRyeTogQ29uZmlnRW50cnkpOiBIYXNzRW50aXR5W10ge1xuICAgIGlmICghdGhpcy5lbnRpdHlSZWdpc3RyeUVudHJpZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGVzOiBIYXNzRW50aXR5W10gPSBbXTtcbiAgICB0aGlzLmVudGl0eVJlZ2lzdHJ5RW50cmllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50aXR5LmNvbmZpZ19lbnRyeV9pZCA9PT0gY29uZmlnRW50cnkuZW50cnlfaWQgJiZcbiAgICAgICAgZW50aXR5LmVudGl0eV9pZCBpbiB0aGlzLmhhc3Muc3RhdGVzXG4gICAgICApIHtcbiAgICAgICAgc3RhdGVzLnB1c2godGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgfVxuICAgICAgLmNvbmZpZy1lbnRyeS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1pY29uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgIH1cbiAgICAgIC5jb25maWd1cmVkIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgaGEtZmFiIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IHByb3BlcnR5LCBjdXN0b21FbGVtZW50LCBQcm9wZXJ0eVZhbHVlcyB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiO1xuaW1wb3J0IFwiLi9jb25maWctZW50cnkvaGEtY29uZmlnLWVudHJ5LXBhZ2VcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnksIGdldENvbmZpZ0VudHJpZXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHtcbiAgRW50aXR5UmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgVW5zdWJzY3JpYmVGdW5jIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1Byb2dyZXNzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQge1xuICBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyxcbiAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZmxvd1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhc3MtcmVsb2FkLWVudHJpZXNcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLWludGVncmF0aW9uc1wiKVxuY2xhc3MgSGFDb25maWdJbnRlZ3JhdGlvbnMgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJvdXRlck9wdGlvbnM6IFJvdXRlck9wdGlvbnMgPSB7XG4gICAgZGVmYXVsdFBhZ2U6IFwiZGFzaGJvYXJkXCIsXG4gICAgcm91dGVzOiB7XG4gICAgICBkYXNoYm9hcmQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1lbnRyaWVzLWRhc2hib2FyZFwiLFxuICAgICAgfSxcbiAgICAgIGNvbmZpZ19lbnRyeToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWVudHJ5LXBhZ2VcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb25maWdFbnRyaWVzOiBDb25maWdFbnRyeVtdID0gW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvbmZpZ0VudHJpZXNJblByb2dyZXNzOiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdHlSZWdpc3RyeUVudHJpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VSZWdpc3RyeUVudHJpZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gIHByaXZhdGUgX3Vuc3Vicz86IFVuc3Vic2NyaWJlRnVuY1tdO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YnMpIHtcbiAgICAgIHdoaWxlICh0aGlzLl91bnN1YnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Vuc3Vicy5wb3AoKSEoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3Vuc3VicyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3MtcmVsb2FkLWVudHJpZXNcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICAgIGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbih0aGlzLmhhc3MuY29ubmVjdGlvbikucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoIXRoaXMuX3Vuc3VicyAmJiBjaGFuZ2VkUHJvcHMuaGFzKFwiaGFzc1wiKSkge1xuICAgICAgdGhpcy5fbG9hZERhdGEoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFnZUVsKHBhZ2VFbCkge1xuICAgIHBhZ2VFbC5oYXNzID0gdGhpcy5oYXNzO1xuXG4gICAgcGFnZUVsLmVudGl0eVJlZ2lzdHJ5RW50cmllcyA9IHRoaXMuX2VudGl0eVJlZ2lzdHJ5RW50cmllcztcbiAgICBwYWdlRWwuY29uZmlnRW50cmllcyA9IHRoaXMuX2NvbmZpZ0VudHJpZXM7XG5cbiAgICBpZiAodGhpcy5fY3VycmVudFBhZ2UgPT09IFwiZGFzaGJvYXJkXCIpIHtcbiAgICAgIHBhZ2VFbC5jb25maWdFbnRyaWVzSW5Qcm9ncmVzcyA9IHRoaXMuX2NvbmZpZ0VudHJpZXNJblByb2dyZXNzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBhZ2VFbC5jb25maWdFbnRyeUlkID0gdGhpcy5yb3V0ZVRhaWwucGF0aC5zdWJzdHIoMSk7XG4gICAgcGFnZUVsLmRldmljZVJlZ2lzdHJ5RW50cmllcyA9IHRoaXMuX2RldmljZVJlZ2lzdHJ5RW50cmllcztcbiAgICBwYWdlRWwuYXJlYXMgPSB0aGlzLl9hcmVhcztcbiAgICBwYWdlRWwubmFycm93ID0gdGhpcy5uYXJyb3c7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkRGF0YSgpIHtcbiAgICBnZXRDb25maWdFbnRyaWVzKHRoaXMuaGFzcykudGhlbigoY29uZmlnRW50cmllcykgPT4ge1xuICAgICAgdGhpcy5fY29uZmlnRW50cmllcyA9IGNvbmZpZ0VudHJpZXMuc29ydCgoY29uZjEsIGNvbmYyKSA9PlxuICAgICAgICBjb21wYXJlKGNvbmYxLnRpdGxlLCBjb25mMi50aXRsZSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3Vuc3Vicykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl91bnN1YnMgPSBbXG4gICAgICBzdWJzY3JpYmVBcmVhUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChhcmVhcykgPT4ge1xuICAgICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgICAgfSksXG4gICAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKGVudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXR5UmVnaXN0cnlFbnRyaWVzID0gZW50cmllcztcbiAgICAgIH0pLFxuICAgICAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnkodGhpcy5oYXNzLmNvbm5lY3Rpb24sIChlbnRyaWVzKSA9PiB7XG4gICAgICAgIHRoaXMuX2RldmljZVJlZ2lzdHJ5RW50cmllcyA9IGVudHJpZXM7XG4gICAgICB9KSxcbiAgICAgIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzKHRoaXMuaGFzcywgKGZsb3dzSW5Qcm9ncmVzcykgPT4ge1xuICAgICAgICB0aGlzLl9jb25maWdFbnRyaWVzSW5Qcm9ncmVzcyA9IGZsb3dzSW5Qcm9ncmVzcztcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIjogSGFDb25maWdJbnRlZ3JhdGlvbnM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBU0E7QUFBQTtBQUFBOztBQTZEQTtBQTFEQTtBQUFBO0FBQ0E7QUE2Q0E7OztBQUFBO0FBRUE7QUFDQTtBQUtBO0FBSEE7QUFNQTtBQTNEQTtBQUFBO0FBQUE7QUE0REE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFNQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQUE7QUFBQTs7QUEyQkE7QUExQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZQTtBQUhBO0FBT0E7QUExQkE7QUFEQTtBQUNBO0FBMkJBO0FBQUE7QUEzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBWUE7QUFYQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFLQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFZQTtBQUNBO0FBQUE7QUFPQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBb0JBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBREE7QUFIQTtBQVlBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFBQTtBQUtBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBT0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFNQTtBQUlBO0FBTUE7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFLQTtBQUhBO0FBTUE7QUFDQTtBQXpHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUE4RUE7QUFDQTtBQUFBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBSUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQTdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFGQTtBQWtCQTtBQUNBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUF4RkE7QUFDQTtBQTBEQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7OztBQTdFQTtBQUNBO0FBMkZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBdUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFyREE7QUFDQTtBQTJCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7QUFyQ0E7QUFDQTtBQXdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBaUJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBK0hBO0FBMUpBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7QUFBQTtBQXdCQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFLQTtBQUtBO0FBVUE7QUE4QkE7QUFZQTtBQWpEQTtBQXFCQTtBQUlBO0FBY0E7QUFJQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBV0E7OztBQUFBO0FBaktBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQTRKQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBV0E7QUFLQTtBQUFBO0FBQUE7O0FBd0xBO0FBeEtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBZ0NBO0FBTUE7QUErQ0E7QUFoRkE7QUFLQTtBQWtCQTtBQUpBO0FBa0JBO0FBVUE7QUFlQTtBQVFBO0FBTUE7QUFnQkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFnQ0E7OztBQUFBO0FBdExBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQWRBO0FBREE7QUFDQTtBQXdMQTtBQUFBO0FBeExBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUlBO0FBTUE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQStFQTtBQTNFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXBCQTtBQURBO0FBQ0E7QUFtR0E7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==