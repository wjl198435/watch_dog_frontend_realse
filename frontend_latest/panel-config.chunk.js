(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
    return hass && hass.config.components.indexOf(component) !== -1;
}


/***/ }),

/***/ "./src/common/dom/media_query.ts":
/*!***************************************!*\
  !*** ./src/common/dom/media_query.ts ***!
  \***************************************/
/*! exports provided: listenMediaQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenMediaQuery", function() { return listenMediaQuery; });
/**
 * Attach a media query. Listener is called right away and when it matches.
 * @param mediaQuery media query to match.
 * @param listener listener to call when media query changes between match/unmatch
 * @returns function to remove the listener.
 */
const listenMediaQuery = (mediaQuery, matchesChanged) => {
    const mql = matchMedia(mediaQuery);
    const listener = (e) => matchesChanged(e.matches);
    mql.addListener(listener);
    matchesChanged(mql.matches);
    return () => mql.removeListener(listener);
};


/***/ }),

/***/ "./src/data/cloud.ts":
/*!***************************!*\
  !*** ./src/data/cloud.ts ***!
  \***************************/
/*! exports provided: fetchCloudStatus, createCloudhook, deleteCloudhook, connectCloudRemote, disconnectCloudRemote, fetchCloudSubscriptionInfo, updateCloudPref, updateCloudGoogleEntityConfig, cloudSyncGoogleAssistant, updateCloudAlexaEntityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudStatus", function() { return fetchCloudStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCloudhook", function() { return createCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCloudhook", function() { return deleteCloudhook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectCloudRemote", function() { return connectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disconnectCloudRemote", function() { return disconnectCloudRemote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudSubscriptionInfo", function() { return fetchCloudSubscriptionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudPref", function() { return updateCloudPref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudGoogleEntityConfig", function() { return updateCloudGoogleEntityConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloudSyncGoogleAssistant", function() { return cloudSyncGoogleAssistant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloudAlexaEntityConfig", function() { return updateCloudAlexaEntityConfig; });
const fetchCloudStatus = (hass) => hass.callWS({ type: "cloud/status" });
const createCloudhook = (hass, webhookId) => hass.callWS({
    type: "cloud/cloudhook/create",
    webhook_id: webhookId,
});
const deleteCloudhook = (hass, webhookId) => hass.callWS({
    type: "cloud/cloudhook/delete",
    webhook_id: webhookId,
});
const connectCloudRemote = (hass) => hass.callWS({
    type: "cloud/remote/connect",
});
const disconnectCloudRemote = (hass) => hass.callWS({
    type: "cloud/remote/disconnect",
});
const fetchCloudSubscriptionInfo = (hass) => hass.callWS({ type: "cloud/subscription" });
const updateCloudPref = (hass, prefs) => hass.callWS(Object.assign({ type: "cloud/update_prefs" }, prefs));
const updateCloudGoogleEntityConfig = (hass, entityId, values) => hass.callWS(Object.assign({ type: "cloud/google_assistant/entities/update", entity_id: entityId }, values));
const cloudSyncGoogleAssistant = (hass) => hass.callApi("POST", "cloud/google_actions/sync");
const updateCloudAlexaEntityConfig = (hass, entityId, values) => hass.callWS(Object.assign({ type: "cloud/alexa/entities/update", entity_id: entityId }, values));


/***/ }),

/***/ "./src/panels/config/ha-panel-config.ts":
/*!**********************************************!*\
  !*** ./src/panels/config/ha-panel-config.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_dom_media_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/dom/media_query */ "./src/common/dom/media_query.ts");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");








let HaPanelConfig = class HaPanelConfig extends _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_6__["HassRouterPage"] {
    constructor() {
        super(...arguments);
        this.routerOptions = {
            defaultPage: "dashboard",
            cacheAll: true,
            preloadAll: true,
            routes: {
                area_registry: {
                    tag: "ha-config-area-registry",
                    load: () => Promise.all(/*! import() | panel-config-area-registry */[__webpack_require__.e("vendors~panel-config-area-registry"), __webpack_require__.e("panel-config-area-registry")]).then(__webpack_require__.bind(null, /*! ./area_registry/ha-config-area-registry */ "./src/panels/config/area_registry/ha-config-area-registry.ts")),
                },
                automation: {
                    tag: "ha-config-automation",
                    load: () => Promise.all(/*! import() | panel-config-automation */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(5), __webpack_require__.e("vendors~config-entry-system-options~more-info-dialog~panel-config-automation~panel-config-cloud~pane~be267696"), __webpack_require__.e(6), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-script~p~227a5ab6"), __webpack_require__.e(7), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e(8), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation~panel-config-script"), __webpack_require__.e(4), __webpack_require__.e("panel-config-automation~panel-config-devices~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-automation")]).then(__webpack_require__.bind(null, /*! ./automation/ha-config-automation */ "./src/panels/config/automation/ha-config-automation.js")),
                },
                cloud: {
                    tag: "ha-config-cloud",
                    load: () => Promise.all(/*! import() | panel-config-cloud */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~more-info-dialog~panel-config-automation~panel-config-cloud~pane~be267696"), __webpack_require__.e(6), __webpack_require__.e("panel-config-cloud~panel-config-zwave"), __webpack_require__.e("panel-config-cloud")]).then(__webpack_require__.bind(null, /*! ./cloud/ha-config-cloud */ "./src/panels/config/cloud/ha-config-cloud.ts")),
                },
                core: {
                    tag: "ha-config-core",
                    load: () => Promise.all(/*! import() | panel-config-core */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-core"), __webpack_require__.e("panel-config-core")]).then(__webpack_require__.bind(null, /*! ./core/ha-config-core */ "./src/panels/config/core/ha-config-core.js")),
                },
                devices: {
                    tag: "ha-config-devices",
                    load: () => Promise.all(/*! import() | panel-config-devices */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~more-info-dialog~panel-config-automation~panel-config-cloud~pane~be267696"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-script~p~227a5ab6"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entity-registry~panel-config-integrations~panel-lovelace"), __webpack_require__.e("vendors~panel-config-devices~panel-config-integrations"), __webpack_require__.e(4), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("panel-config-automation~panel-config-devices~panel-config-script"), __webpack_require__.e("panel-config-devices~panel-config-integrations"), __webpack_require__.e("panel-config-devices")]).then(__webpack_require__.bind(null, /*! ./devices/ha-config-devices */ "./src/panels/config/devices/ha-config-devices.ts")),
                },
                server_control: {
                    tag: "ha-config-server-control",
                    load: () => Promise.all(/*! import() | panel-config-server-control */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("panel-config-server-control")]).then(__webpack_require__.bind(null, /*! ./server_control/ha-config-server-control */ "./src/panels/config/server_control/ha-config-server-control.js")),
                },
                customize: {
                    tag: "ha-config-customize",
                    load: () => Promise.all(/*! import() | panel-config-customize */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(5), __webpack_require__.e("vendors~panel-config-customize"), __webpack_require__.e("panel-config-customize")]).then(__webpack_require__.bind(null, /*! ./customize/ha-config-customize */ "./src/panels/config/customize/ha-config-customize.js")),
                },
                dashboard: {
                    tag: "ha-config-dashboard",
                    load: () => Promise.all(/*! import() | panel-config-dashboard */[__webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("vendors~panel-config-dashboard"), __webpack_require__.e("panel-config-dashboard")]).then(__webpack_require__.bind(null, /*! ./dashboard/ha-config-dashboard */ "./src/panels/config/dashboard/ha-config-dashboard.js")),
                },
                entity_registry: {
                    tag: "ha-config-entity-registry",
                    load: () => Promise.all(/*! import() | panel-config-entity-registry */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~config-entry-system-options~more-info-dialog~panel-config-automation~panel-config-cloud~pane~be267696"), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entity-registry~panel-config-integrations~panel-lovelace"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("panel-config-entity-registry")]).then(__webpack_require__.bind(null, /*! ./entity_registry/ha-config-entity-registry */ "./src/panels/config/entity_registry/ha-config-entity-registry.ts")),
                },
                integrations: {
                    tag: "ha-config-integrations",
                    load: () => Promise.all(/*! import() | panel-config-integrations */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-script~p~227a5ab6"), __webpack_require__.e(8), __webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-devices~panel-config-entity-registry~panel-config-integrations~panel-lovelace"), __webpack_require__.e("vendors~panel-config-devices~panel-config-integrations"), __webpack_require__.e("vendors~panel-config-integrations"), __webpack_require__.e(4), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("panel-config-devices~panel-config-integrations"), __webpack_require__.e("panel-config-integrations")]).then(__webpack_require__.bind(null, /*! ./integrations/ha-config-integrations */ "./src/panels/config/integrations/ha-config-integrations.ts")),
                },
                person: {
                    tag: "ha-config-person",
                    load: () => Promise.all(/*! import() | panel-config-person */[__webpack_require__.e("vendors~panel-config-person~panel-config-users"), __webpack_require__.e("panel-config-person")]).then(__webpack_require__.bind(null, /*! ./person/ha-config-person */ "./src/panels/config/person/ha-config-person.ts")),
                },
                script: {
                    tag: "ha-config-script",
                    load: () => Promise.all(/*! import() | panel-config-script */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(5), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-script~p~227a5ab6"), __webpack_require__.e(7), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~onboarding-core-config~panel-config-automation~panel-config-core~panel-config-script"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-script"), __webpack_require__.e("vendors~panel-config-automation~panel-config-script"), __webpack_require__.e(4), __webpack_require__.e("panel-config-automation~panel-config-devices~panel-config-script"), __webpack_require__.e("panel-config-automation~panel-config-script"), __webpack_require__.e("panel-config-script")]).then(__webpack_require__.bind(null, /*! ./script/ha-config-script */ "./src/panels/config/script/ha-config-script.js")),
                },
                users: {
                    tag: "ha-config-users",
                    load: () => Promise.all(/*! import() | panel-config-users */[__webpack_require__.e("vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-script~p~227a5ab6"), __webpack_require__.e("vendors~panel-config-person~panel-config-users"), __webpack_require__.e("panel-config-users")]).then(__webpack_require__.bind(null, /*! ./users/ha-config-users */ "./src/panels/config/users/ha-config-users.js")),
                },
                zha: {
                    tag: "zha-config-panel",
                    load: () => __webpack_require__.e(/*! import() | panel-config-zha */ "panel-config-zha").then(__webpack_require__.bind(null, /*! ./zha/zha-config-panel */ "./src/panels/config/zha/zha-config-panel.ts")),
                },
                zwave: {
                    tag: "ha-config-zwave",
                    load: () => Promise.all(/*! import() | panel-config-zwave */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~panel-calendar~panel-config-automation~panel-config-core~panel-config-customize~panel-config~c123bdd1"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(5), __webpack_require__.e("vendors~dialog-zha-device-info~panel-config-zwave~zha-add-devices-page~zha-configuration-page"), __webpack_require__.e("panel-config-cloud~panel-config-zwave"), __webpack_require__.e("panel-config-zwave")]).then(__webpack_require__.bind(null, /*! ./zwave/ha-config-zwave */ "./src/panels/config/zwave/ha-config-zwave.js")),
                },
            },
        };
        this._wideSidebar = false;
        this._wide = false;
        this._listeners = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_5__["listenMediaQuery"])("(min-width: 1040px)", (matches) => {
            this._wide = matches;
        }));
        this._listeners.push(Object(_common_dom_media_query__WEBPACK_IMPORTED_MODULE_5__["listenMediaQuery"])("(min-width: 1296px)", (matches) => {
            this._wideSidebar = matches;
        }));
        this._listeners.push(Object(_data_frontend__WEBPACK_IMPORTED_MODULE_7__["getOptimisticFrontendUserDataCollection"])(this.hass.connection, "core").subscribe((coreUserData) => {
            this._coreUserData = coreUserData || {};
        }));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        while (this._listeners.length) {
            this._listeners.pop()();
        }
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        if (Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_3__["default"])(this.hass, "cloud")) {
            this._updateCloudStatus();
        }
        this.addEventListener("ha-refresh-cloud-status", () => this._updateCloudStatus());
    }
    updatePageEl(el) {
        const showAdvanced = !!(this._coreUserData && this._coreUserData.showAdvanced);
        const isWide = this.hass.dockedSidebar === "docked" ? this._wideSidebar : this._wide;
        if ("setProperties" in el) {
            // As long as we have Polymer panels
            el.setProperties({
                route: this.routeTail,
                hass: this.hass,
                showAdvanced,
                isWide,
                narrow: this.narrow,
                cloudStatus: this._cloudStatus,
            });
        }
        else {
            el.route = this.routeTail;
            el.hass = this.hass;
            el.showAdvanced = showAdvanced;
            el.isWide = isWide;
            el.narrow = this.narrow;
            el.cloudStatus = this._cloudStatus;
        }
    }
    async _updateCloudStatus() {
        this._cloudStatus = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_4__["fetchCloudStatus"])(this.hass);
        if (this._cloudStatus.cloud === "connecting") {
            setTimeout(() => this._updateCloudStatus(), 5000);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelConfig.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelConfig.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelConfig.prototype, "_wideSidebar", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelConfig.prototype, "_wide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelConfig.prototype, "_coreUserData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelConfig.prototype, "_cloudStatus", void 0);
HaPanelConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-panel-config")
], HaPanelConfig);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9tZWRpYV9xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbG91ZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1wYW5lbC1jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ29tcG9uZW50TG9hZGVkKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbn1cbiIsIi8qKlxuICogQXR0YWNoIGEgbWVkaWEgcXVlcnkuIExpc3RlbmVyIGlzIGNhbGxlZCByaWdodCBhd2F5IGFuZCB3aGVuIGl0IG1hdGNoZXMuXG4gKiBAcGFyYW0gbWVkaWFRdWVyeSBtZWRpYSBxdWVyeSB0byBtYXRjaC5cbiAqIEBwYXJhbSBsaXN0ZW5lciBsaXN0ZW5lciB0byBjYWxsIHdoZW4gbWVkaWEgcXVlcnkgY2hhbmdlcyBiZXR3ZWVuIG1hdGNoL3VubWF0Y2hcbiAqIEByZXR1cm5zIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgbGlzdGVuZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ZW5NZWRpYVF1ZXJ5ID0gKFxuICBtZWRpYVF1ZXJ5OiBzdHJpbmcsXG4gIG1hdGNoZXNDaGFuZ2VkOiAobWF0Y2hlczogYm9vbGVhbikgPT4gdm9pZFxuKSA9PiB7XG4gIGNvbnN0IG1xbCA9IG1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG4gIGNvbnN0IGxpc3RlbmVyID0gKGUpID0+IG1hdGNoZXNDaGFuZ2VkKGUubWF0Y2hlcyk7XG4gIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIG1hdGNoZXNDaGFuZ2VkKG1xbC5tYXRjaGVzKTtcbiAgcmV0dXJuICgpID0+IG1xbC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRW50aXR5RmlsdGVyIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlclwiO1xuXG5pbnRlcmZhY2UgQ2xvdWRTdGF0dXNCYXNlIHtcbiAgbG9nZ2VkX2luOiBib29sZWFuO1xuICBjbG91ZDogXCJkaXNjb25uZWN0ZWRcIiB8IFwiY29ubmVjdGluZ1wiIHwgXCJjb25uZWN0ZWRcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbiAgb3ZlcnJpZGVfbmFtZT86IHN0cmluZztcbiAgYWxpYXNlcz86IHN0cmluZ1tdO1xuICBkaXNhYmxlXzJmYT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxleGFFbnRpdHlDb25maWcge1xuICBzaG91bGRfZXhwb3NlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uIHtcbiAgY29tbW9uX25hbWU6IHN0cmluZztcbiAgZXhwaXJlX2RhdGU6IHN0cmluZztcbiAgZmluZ2VycHJpbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZFByZWZlcmVuY2VzIHtcbiAgZ29vZ2xlX2VuYWJsZWQ6IGJvb2xlYW47XG4gIGFsZXhhX2VuYWJsZWQ6IGJvb2xlYW47XG4gIHJlbW90ZV9lbmFibGVkOiBib29sZWFuO1xuICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGNsb3VkaG9va3M6IHsgW3dlYmhvb2tJZDogc3RyaW5nXTogQ2xvdWRXZWJob29rIH07XG4gIGdvb2dsZV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogR29vZ2xlRW50aXR5Q29uZmlnO1xuICB9O1xuICBhbGV4YV9lbnRpdHlfY29uZmlnczoge1xuICAgIFtlbnRpdHlJZDogc3RyaW5nXTogQWxleGFFbnRpdHlDb25maWc7XG4gIH07XG4gIGFsZXhhX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbiAgZ29vZ2xlX3JlcG9ydF9zdGF0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXNMb2dnZWRJbiA9IENsb3VkU3RhdHVzQmFzZSAmIHtcbiAgZW1haWw6IHN0cmluZztcbiAgZ29vZ2xlX2VudGl0aWVzOiBFbnRpdHlGaWx0ZXI7XG4gIGdvb2dsZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgYWxleGFfZW50aXRpZXM6IEVudGl0eUZpbHRlcjtcbiAgcHJlZnM6IENsb3VkUHJlZmVyZW5jZXM7XG4gIHJlbW90ZV9kb21haW46IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcmVtb3RlX2Nvbm5lY3RlZDogYm9vbGVhbjtcbiAgcmVtb3RlX2NlcnRpZmljYXRlOiB1bmRlZmluZWQgfCBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uO1xufTtcblxuZXhwb3J0IHR5cGUgQ2xvdWRTdGF0dXMgPSBDbG91ZFN0YXR1c0Jhc2UgfCBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbkluZm8ge1xuICBodW1hbl9kZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkV2ViaG9vayB7XG4gIHdlYmhvb2tfaWQ6IHN0cmluZztcbiAgY2xvdWRob29rX2lkOiBzdHJpbmc7XG4gIGNsb3VkaG9va191cmw6IHN0cmluZztcbiAgbWFuYWdlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkU3RhdHVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPENsb3VkU3RhdHVzPih7IHR5cGU6IFwiY2xvdWQvc3RhdHVzXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbG91ZGhvb2sgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPENsb3VkV2ViaG9vaz4oe1xuICAgIHR5cGU6IFwiY2xvdWQvY2xvdWRob29rL2NyZWF0ZVwiLFxuICAgIHdlYmhvb2tfaWQ6IHdlYmhvb2tJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDbG91ZGhvb2sgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgd2ViaG9va0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL2Nsb3VkaG9vay9kZWxldGVcIixcbiAgICB3ZWJob29rX2lkOiB3ZWJob29rSWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY29ubmVjdENsb3VkUmVtb3RlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9jb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGlzY29ubmVjdENsb3VkUmVtb3RlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNsb3VkL3JlbW90ZS9kaXNjb25uZWN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8gPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8U3Vic2NyaXB0aW9uSW5mbz4oeyB0eXBlOiBcImNsb3VkL3N1YnNjcmlwdGlvblwiIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xvdWRQcmVmID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwcmVmczoge1xuICAgIGdvb2dsZV9lbmFibGVkPzogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9lbmFibGVkXCJdO1xuICAgIGFsZXhhX2VuYWJsZWQ/OiBDbG91ZFByZWZlcmVuY2VzW1wiYWxleGFfZW5hYmxlZFwiXTtcbiAgICBhbGV4YV9yZXBvcnRfc3RhdGU/OiBDbG91ZFByZWZlcmVuY2VzW1wiYWxleGFfcmVwb3J0X3N0YXRlXCJdO1xuICAgIGdvb2dsZV9yZXBvcnRfc3RhdGU/OiBDbG91ZFByZWZlcmVuY2VzW1wiZ29vZ2xlX3JlcG9ydF9zdGF0ZVwiXTtcbiAgICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluPzogQ2xvdWRQcmVmZXJlbmNlc1tcImdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW5cIl07XG4gIH1cbikgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY2xvdWQvdXBkYXRlX3ByZWZzXCIsXG4gICAgLi4ucHJlZnMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2xvdWRHb29nbGVFbnRpdHlDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHZhbHVlczogR29vZ2xlRW50aXR5Q29uZmlnXG4pID0+XG4gIGhhc3MuY2FsbFdTPEdvb2dsZUVudGl0eUNvbmZpZz4oe1xuICAgIHR5cGU6IFwiY2xvdWQvZ29vZ2xlX2Fzc2lzdGFudC9lbnRpdGllcy91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBjbG91ZFN5bmNHb29nbGVBc3Npc3RhbnQgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcImNsb3VkL2dvb2dsZV9hY3Rpb25zL3N5bmNcIik7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDbG91ZEFsZXhhRW50aXR5Q29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB2YWx1ZXM6IEFsZXhhRW50aXR5Q29uZmlnXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFsZXhhRW50aXR5Q29uZmlnPih7XG4gICAgdHlwZTogXCJjbG91ZC9hbGV4YS9lbnRpdGllcy91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBwcm9wZXJ0eSwgUHJvcGVydHlWYWx1ZXMsIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENsb3VkU3RhdHVzLCBmZXRjaENsb3VkU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IGxpc3Rlbk1lZGlhUXVlcnkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9tZWRpYV9xdWVyeVwiO1xuaW1wb3J0IHsgSGFzc1JvdXRlclBhZ2UsIFJvdXRlck9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9oYXNzLXJvdXRlci1wYWdlXCI7XG5pbXBvcnQge1xuICBDb3JlRnJvbnRlbmRVc2VyRGF0YSxcbiAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCI6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLXBhbmVsLWNvbmZpZ1wiKVxuY2xhc3MgSGFQYW5lbENvbmZpZyBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJkYXNoYm9hcmRcIixcbiAgICBjYWNoZUFsbDogdHJ1ZSxcbiAgICBwcmVsb2FkQWxsOiB0cnVlLFxuICAgIHJvdXRlczoge1xuICAgICAgYXJlYV9yZWdpc3RyeToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWFyZWEtcmVnaXN0cnlcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctYXJlYS1yZWdpc3RyeVwiICovIFwiLi9hcmVhX3JlZ2lzdHJ5L2hhLWNvbmZpZy1hcmVhLXJlZ2lzdHJ5XCIpLFxuICAgICAgfSxcbiAgICAgIGF1dG9tYXRpb246IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1hdXRvbWF0aW9uXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWF1dG9tYXRpb25cIiAqLyBcIi4vYXV0b21hdGlvbi9oYS1jb25maWctYXV0b21hdGlvblwiKSxcbiAgICAgIH0sXG4gICAgICBjbG91ZDoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWNsb3VkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWNsb3VkXCIgKi8gXCIuL2Nsb3VkL2hhLWNvbmZpZy1jbG91ZFwiKSxcbiAgICAgIH0sXG4gICAgICBjb3JlOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctY29yZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1jb3JlXCIgKi8gXCIuL2NvcmUvaGEtY29uZmlnLWNvcmVcIiksXG4gICAgICB9LFxuICAgICAgZGV2aWNlczoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWRldmljZXNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctZGV2aWNlc1wiICovIFwiLi9kZXZpY2VzL2hhLWNvbmZpZy1kZXZpY2VzXCIpLFxuICAgICAgfSxcbiAgICAgIHNlcnZlcl9jb250cm9sOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctc2VydmVyLWNvbnRyb2xcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctc2VydmVyLWNvbnRyb2xcIiAqLyBcIi4vc2VydmVyX2NvbnRyb2wvaGEtY29uZmlnLXNlcnZlci1jb250cm9sXCIpLFxuICAgICAgfSxcbiAgICAgIGN1c3RvbWl6ZToge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWN1c3RvbWl6ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1jdXN0b21pemVcIiAqLyBcIi4vY3VzdG9taXplL2hhLWNvbmZpZy1jdXN0b21pemVcIiksXG4gICAgICB9LFxuICAgICAgZGFzaGJvYXJkOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctZGFzaGJvYXJkXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLWRhc2hib2FyZFwiICovIFwiLi9kYXNoYm9hcmQvaGEtY29uZmlnLWRhc2hib2FyZFwiKSxcbiAgICAgIH0sXG4gICAgICBlbnRpdHlfcmVnaXN0cnk6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1lbnRpdHktcmVnaXN0cnlcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctZW50aXR5LXJlZ2lzdHJ5XCIgKi8gXCIuL2VudGl0eV9yZWdpc3RyeS9oYS1jb25maWctZW50aXR5LXJlZ2lzdHJ5XCIpLFxuICAgICAgfSxcbiAgICAgIGludGVncmF0aW9uczoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLWludGVncmF0aW9uc1wiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIiAqLyBcIi4vaW50ZWdyYXRpb25zL2hhLWNvbmZpZy1pbnRlZ3JhdGlvbnNcIiksXG4gICAgICB9LFxuICAgICAgcGVyc29uOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctcGVyc29uXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGFuZWwtY29uZmlnLXBlcnNvblwiICovIFwiLi9wZXJzb24vaGEtY29uZmlnLXBlcnNvblwiKSxcbiAgICAgIH0sXG4gICAgICBzY3JpcHQ6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy1zY3JpcHRcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctc2NyaXB0XCIgKi8gXCIuL3NjcmlwdC9oYS1jb25maWctc2NyaXB0XCIpLFxuICAgICAgfSxcbiAgICAgIHVzZXJzOiB7XG4gICAgICAgIHRhZzogXCJoYS1jb25maWctdXNlcnNcIixcbiAgICAgICAgbG9hZDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJwYW5lbC1jb25maWctdXNlcnNcIiAqLyBcIi4vdXNlcnMvaGEtY29uZmlnLXVzZXJzXCIpLFxuICAgICAgfSxcbiAgICAgIHpoYToge1xuICAgICAgICB0YWc6IFwiemhhLWNvbmZpZy1wYW5lbFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy16aGFcIiAqLyBcIi4vemhhL3poYS1jb25maWctcGFuZWxcIiksXG4gICAgICB9LFxuICAgICAgendhdmU6IHtcbiAgICAgICAgdGFnOiBcImhhLWNvbmZpZy16d2F2ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBhbmVsLWNvbmZpZy16d2F2ZVwiICovIFwiLi96d2F2ZS9oYS1jb25maWctendhdmVcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd2lkZVNpZGViYXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd2lkZTogYm9vbGVhbiA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb3JlVXNlckRhdGE/OiBDb3JlRnJvbnRlbmRVc2VyRGF0YTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1cztcblxuICBwcml2YXRlIF9saXN0ZW5lcnM6IEFycmF5PCgpID0+IHZvaWQ+ID0gW107XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goXG4gICAgICBsaXN0ZW5NZWRpYVF1ZXJ5KFwiKG1pbi13aWR0aDogMTA0MHB4KVwiLCAobWF0Y2hlcykgPT4ge1xuICAgICAgICB0aGlzLl93aWRlID0gbWF0Y2hlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGxpc3Rlbk1lZGlhUXVlcnkoXCIobWluLXdpZHRoOiAxMjk2cHgpXCIsIChtYXRjaGVzKSA9PiB7XG4gICAgICAgIHRoaXMuX3dpZGVTaWRlYmFyID0gbWF0Y2hlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChcbiAgICAgIGdldE9wdGltaXN0aWNGcm9udGVuZFVzZXJEYXRhQ29sbGVjdGlvbihcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIFwiY29yZVwiXG4gICAgICApLnN1YnNjcmliZSgoY29yZVVzZXJEYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvcmVVc2VyRGF0YSA9IGNvcmVVc2VyRGF0YSB8fCB7fTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHdoaWxlICh0aGlzLl9saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9saXN0ZW5lcnMucG9wKCkhKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGlzQ29tcG9uZW50TG9hZGVkKHRoaXMuaGFzcywgXCJjbG91ZFwiKSkge1xuICAgICAgdGhpcy5fdXBkYXRlQ2xvdWRTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIiwgKCkgPT5cbiAgICAgIHRoaXMuX3VwZGF0ZUNsb3VkU3RhdHVzKClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChlbCkge1xuICAgIGNvbnN0IHNob3dBZHZhbmNlZCA9ICEhKFxuICAgICAgdGhpcy5fY29yZVVzZXJEYXRhICYmIHRoaXMuX2NvcmVVc2VyRGF0YS5zaG93QWR2YW5jZWRcbiAgICApO1xuICAgIGNvbnN0IGlzV2lkZSA9XG4gICAgICB0aGlzLmhhc3MuZG9ja2VkU2lkZWJhciA9PT0gXCJkb2NrZWRcIiA/IHRoaXMuX3dpZGVTaWRlYmFyIDogdGhpcy5fd2lkZTtcblxuICAgIGlmIChcInNldFByb3BlcnRpZXNcIiBpbiBlbCkge1xuICAgICAgLy8gQXMgbG9uZyBhcyB3ZSBoYXZlIFBvbHltZXIgcGFuZWxzXG4gICAgICAoZWwgYXMgUG9seW1lckVsZW1lbnQpLnNldFByb3BlcnRpZXMoe1xuICAgICAgICByb3V0ZTogdGhpcy5yb3V0ZVRhaWwsXG4gICAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgICAgc2hvd0FkdmFuY2VkLFxuICAgICAgICBpc1dpZGUsXG4gICAgICAgIG5hcnJvdzogdGhpcy5uYXJyb3csXG4gICAgICAgIGNsb3VkU3RhdHVzOiB0aGlzLl9jbG91ZFN0YXR1cyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yb3V0ZSA9IHRoaXMucm91dGVUYWlsO1xuICAgICAgZWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgIGVsLnNob3dBZHZhbmNlZCA9IHNob3dBZHZhbmNlZDtcbiAgICAgIGVsLmlzV2lkZSA9IGlzV2lkZTtcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgICAgZWwuY2xvdWRTdGF0dXMgPSB0aGlzLl9jbG91ZFN0YXR1cztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDbG91ZFN0YXR1cygpIHtcbiAgICB0aGlzLl9jbG91ZFN0YXR1cyA9IGF3YWl0IGZldGNoQ2xvdWRTdGF0dXModGhpcy5oYXNzKTtcblxuICAgIGlmICh0aGlzLl9jbG91ZFN0YXR1cy5jbG91ZCA9PT0gXCJjb25uZWN0aW5nXCIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fdXBkYXRlQ2xvdWRTdGF0dXMoKSwgNTAwMCk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYW5lbC1jb25maWdcIjogSGFQYW5lbENvbmZpZztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBOzs7OztBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNrREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFlQTtBQVdBO0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQTJFQTtBQXpFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFxRkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBMUZBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==