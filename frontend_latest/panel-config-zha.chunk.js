(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zha"],{

/***/ "./src/panels/config/zha/zha-config-panel.ts":
/*!***************************************************!*\
  !*** ./src/panels/config/zha/zha-config-panel.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");




let ZHAConfigPanel = class ZHAConfigPanel extends _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__["HassRouterPage"] {
    constructor() {
        super(...arguments);
        this.routerOptions = {
            defaultPage: "configuration",
            cacheAll: true,
            preloadAll: true,
            routes: {
                configuration: {
                    tag: "ha-config-zha",
                    load: () => Promise.all(/*! import() | zha-configuration-page */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e("vendors~dialog-zha-device-info~panel-config-zwave~zha-add-devices-page~zha-configuration-page"), __webpack_require__.e(4), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-configuration-page"), __webpack_require__.e("zha-configuration-page")]).then(__webpack_require__.bind(null, /*! ./ha-config-zha */ "./src/panels/config/zha/ha-config-zha.ts")),
                },
                add: {
                    tag: "zha-add-devices-page",
                    load: () => Promise.all(/*! import() | zha-add-devices-page */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("vendors~dialog-zha-device-info~panel-config-zwave~zha-add-devices-page~zha-configuration-page"), __webpack_require__.e(4), __webpack_require__.e("dialog-zha-device-info~zha-add-devices-page~zha-configuration-page"), __webpack_require__.e("zha-add-devices-page")]).then(__webpack_require__.bind(null, /*! ./zha-add-devices-page */ "./src/panels/config/zha/zha-add-devices-page.ts")),
                },
            },
        };
    }
    updatePageEl(el) {
        el.route = this.routeTail;
        el.hass = this.hass;
        el.isWide = this.isWide;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], ZHAConfigPanel.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], ZHAConfigPanel.prototype, "isWide", void 0);
ZHAConfigPanel = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("zha-config-panel")
], ZHAConfigPanel);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXpoYS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3poYS96aGEtY29uZmlnLXBhbmVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInpoYS1jb25maWctcGFuZWxcIilcbmNsYXNzIFpIQUNvbmZpZ1BhbmVsIGV4dGVuZHMgSGFzc1JvdXRlclBhZ2Uge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByb3V0ZXJPcHRpb25zOiBSb3V0ZXJPcHRpb25zID0ge1xuICAgIGRlZmF1bHRQYWdlOiBcImNvbmZpZ3VyYXRpb25cIixcbiAgICBjYWNoZUFsbDogdHJ1ZSxcbiAgICBwcmVsb2FkQWxsOiB0cnVlLFxuICAgIHJvdXRlczoge1xuICAgICAgY29uZmlndXJhdGlvbjoge1xuICAgICAgICB0YWc6IFwiaGEtY29uZmlnLXpoYVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInpoYS1jb25maWd1cmF0aW9uLXBhZ2VcIiAqLyBcIi4vaGEtY29uZmlnLXpoYVwiKSxcbiAgICAgIH0sXG4gICAgICBhZGQ6IHtcbiAgICAgICAgdGFnOiBcInpoYS1hZGQtZGV2aWNlcy1wYWdlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+XG4gICAgICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiemhhLWFkZC1kZXZpY2VzLXBhZ2VcIiAqLyBcIi4vemhhLWFkZC1kZXZpY2VzLXBhZ2VcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVBhZ2VFbChlbCk6IHZvaWQge1xuICAgIGVsLnJvdXRlID0gdGhpcy5yb3V0ZVRhaWw7XG4gICAgZWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICBlbC5pc1dpZGUgPSB0aGlzLmlzV2lkZTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiemhhLWNvbmZpZy1wYW5lbFwiOiBaSEFDb25maWdQYW5lbDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBT0E7QUFBQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=