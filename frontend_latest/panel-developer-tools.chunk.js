(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-developer-tools"],{

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

/***/ "./src/common/dom/scroll-to-target.ts":
/*!********************************************!*\
  !*** ./src/common/dom/scroll-to-target.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollToTarget; });
/**
 * Scroll to a specific y coordinate.
 *
 * Copied from paper-scroll-header-panel.
 *
 * @method scroll
 * @param {number} top The coordinate to scroll to, along the y-axis.
 * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
 */
function scrollToTarget(element, target) {
    // the scroll event will trigger _updateScrollState directly,
    // However, _updateScrollState relies on the previous `scrollTop` to update the states.
    // Calling _updateScrollState will ensure that the states are synced correctly.
    const top = 0;
    const scroller = target;
    const easingFn = function easeOutQuad(t, b, c, d) {
        /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
        t /= d;
        return -c * t * (t - 2) + b;
        /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
    };
    const animationId = Math.random();
    const duration = 200;
    const startTime = Date.now();
    const currentScrollTop = scroller.scrollTop;
    const deltaScrollTop = top - currentScrollTop;
    element._currentAnimationId = animationId;
    (function updateFrame() {
        const now = Date.now();
        const elapsedTime = now - startTime;
        if (elapsedTime > duration) {
            scroller.scrollTop = top;
        }
        else if (element._currentAnimationId === animationId) {
            scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
            requestAnimationFrame(updateFrame.bind(element));
        }
    }.call(element));
}


/***/ }),

/***/ "./src/panels/developer-tools/developer-tools-router.ts":
/*!**************************************************************!*\
  !*** ./src/panels/developer-tools/developer-tools-router.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");



let DeveloperToolsRouter = class DeveloperToolsRouter extends _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_1__["HassRouterPage"] {
    constructor() {
        super(...arguments);
        this.routerOptions = {
            // defaultPage: "info",
            beforeRender: (page) => {
                if (!page || page === "not_found") {
                    // If we can, we are going to restore the last visited page.
                    return this._currentPage ? this._currentPage : "info";
                }
                return undefined;
            },
            cacheAll: true,
            showLoading: true,
            routes: {
                event: {
                    tag: "developer-tools-event",
                    load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7), __webpack_require__.e(18), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! ./event/developer-tools-event */ "./src/panels/developer-tools/event/developer-tools-event.js")),
                },
                info: {
                    tag: "developer-tools-info",
                    load: () => __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./info/developer-tools-info */ "./src/panels/developer-tools/info/developer-tools-info.ts")),
                },
                logs: {
                    tag: "developer-tools-logs",
                    load: () => Promise.all(/*! import() */[__webpack_require__.e(6), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./logs/developer-tools-logs */ "./src/panels/developer-tools/logs/developer-tools-logs.ts")),
                },
                mqtt: {
                    tag: "developer-tools-mqtt",
                    load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./mqtt/developer-tools-mqtt */ "./src/panels/developer-tools/mqtt/developer-tools-mqtt.ts")),
                },
                service: {
                    tag: "developer-tools-service",
                    load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(7), __webpack_require__.e(15), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./service/developer-tools-service */ "./src/panels/developer-tools/service/developer-tools-service.js")),
                },
                state: {
                    tag: "developer-tools-state",
                    load: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(4), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./state/developer-tools-state */ "./src/panels/developer-tools/state/developer-tools-state.js")),
                },
                template: {
                    tag: "developer-tools-template",
                    load: () => __webpack_require__.e(/*! import() */ 17).then(__webpack_require__.bind(null, /*! ./template/developer-tools-template */ "./src/panels/developer-tools/template/developer-tools-template.js")),
                },
            },
        };
    }
    updatePageEl(el) {
        if ("setProperties" in el) {
            // As long as we have Polymer pages
            el.setProperties({
                hass: this.hass,
                narrow: this.narrow,
            });
        }
        else {
            el.hass = this.hass;
            el.narrow = this.narrow;
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], DeveloperToolsRouter.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], DeveloperToolsRouter.prototype, "narrow", void 0);
DeveloperToolsRouter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("developer-tools-router")
], DeveloperToolsRouter);


/***/ }),

/***/ "./src/panels/developer-tools/ha-panel-developer-tools.ts":
/*!****************************************************************!*\
  !*** ./src/panels/developer-tools/ha-panel-developer-tools.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _developer_tools_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./developer-tools-router */ "./src/panels/developer-tools/developer-tools-router.ts");
/* harmony import */ var _common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/scroll-to-target */ "./src/common/dom/scroll-to-target.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");














let PanelDeveloperTools = class PanelDeveloperTools extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        const page = this._page;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <app-header-layout has-scrolling-region>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            ></ha-menu-button>
            <div main-title>${this.hass.localize("panel.developer_tools")}</div>
          </app-toolbar>
          <paper-tabs
            scrollable
            attr-for-selected="page-name"
            .selected=${page}
            @iron-activate=${this.handlePageSelected}
          >
            <paper-tab page-name="state">
              ${this.hass.localize("ui.panel.developer-tools.tabs.states.title")}
            </paper-tab>
            <paper-tab page-name="service">
              ${this.hass.localize("ui.panel.developer-tools.tabs.services.title")}
            </paper-tab>
            <paper-tab page-name="logs">
              ${this.hass.localize("ui.panel.developer-tools.tabs.logs.title")}
            </paper-tab>
            <paper-tab page-name="template">
              ${this.hass.localize("ui.panel.developer-tools.tabs.templates.title")}
            </paper-tab>
            <paper-tab page-name="event">
              ${this.hass.localize("ui.panel.developer-tools.tabs.events.title")}
            </paper-tab>
            ${Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_13__["default"])(this.hass, "mqtt")
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <paper-tab page-name="mqtt">
                    ${this.hass.localize("ui.panel.developer-tools.tabs.mqtt.title")}
                  </paper-tab>
                `
            : ""}
            <paper-tab page-name="info">
              ${this.hass.localize("ui.panel.developer-tools.tabs.info.title")}
            </paper-tab>
          </paper-tabs>
        </app-header>
        <developer-tools-router
          .route=${this.route}
          .narrow=${this.narrow}
          .hass=${this.hass}
        ></developer-tools-router>
      </app-header-layout>
    `;
    }
    handlePageSelected(ev) {
        const newPage = ev.detail.item.getAttribute("page-name");
        if (newPage !== this._page) {
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_12__["navigate"])(this, `/developer-tools/${newPage}`);
        }
        Object(_common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_10__["default"])(this, 
        // @ts-ignore
        this.shadowRoot.querySelector("app-header-layout").header.scrollTarget);
    }
    get _page() {
        return this.route.path.substr(1);
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          color: var(--primary-text-color);
          --paper-card-header-color: var(--primary-text-color);
        }
        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: #fff;
          text-transform: uppercase;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], PanelDeveloperTools.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], PanelDeveloperTools.prototype, "route", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], PanelDeveloperTools.prototype, "narrow", void 0);
PanelDeveloperTools = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-panel-developer-tools")
], PanelDeveloperTools);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtZGV2ZWxvcGVyLXRvb2xzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zY3JvbGwtdG8tdGFyZ2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2RldmVsb3Blci10b29scy1yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvaGEtcGFuZWwtZGV2ZWxvcGVyLXRvb2xzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqIFJldHVybiBpZiBhIGNvbXBvbmVudCBpcyBsb2FkZWQuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0NvbXBvbmVudExvYWRlZChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29tcG9uZW50OiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICByZXR1cm4gaGFzcyAmJiBoYXNzLmNvbmZpZy5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KSAhPT0gLTE7XG59XG4iLCIvKipcbiAqIFNjcm9sbCB0byBhIHNwZWNpZmljIHkgY29vcmRpbmF0ZS5cbiAqXG4gKiBDb3BpZWQgZnJvbSBwYXBlci1zY3JvbGwtaGVhZGVyLXBhbmVsLlxuICpcbiAqIEBtZXRob2Qgc2Nyb2xsXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRoZSBjb29yZGluYXRlIHRvIHNjcm9sbCB0bywgYWxvbmcgdGhlIHktYXhpcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc21vb3RoIHRydWUgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBzaG91bGQgYmUgc21vb3RobHkgYWRqdXN0ZWQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0KGVsZW1lbnQsIHRhcmdldCkge1xuICAvLyB0aGUgc2Nyb2xsIGV2ZW50IHdpbGwgdHJpZ2dlciBfdXBkYXRlU2Nyb2xsU3RhdGUgZGlyZWN0bHksXG4gIC8vIEhvd2V2ZXIsIF91cGRhdGVTY3JvbGxTdGF0ZSByZWxpZXMgb24gdGhlIHByZXZpb3VzIGBzY3JvbGxUb3BgIHRvIHVwZGF0ZSB0aGUgc3RhdGVzLlxuICAvLyBDYWxsaW5nIF91cGRhdGVTY3JvbGxTdGF0ZSB3aWxsIGVuc3VyZSB0aGF0IHRoZSBzdGF0ZXMgYXJlIHN5bmNlZCBjb3JyZWN0bHkuXG4gIGNvbnN0IHRvcCA9IDA7XG4gIGNvbnN0IHNjcm9sbGVyID0gdGFyZ2V0O1xuICBjb25zdCBlYXNpbmdGbiA9IGZ1bmN0aW9uIGVhc2VPdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiwgc3BhY2UtaW5maXgtb3BzLCBuby1taXhlZC1vcGVyYXRvcnMgKi9cbiAgICB0IC89IGQ7XG4gICAgcmV0dXJuIC1jICogdCAqICh0IC0gMikgKyBiO1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tcGFyYW0tcmVhc3NpZ24sIHNwYWNlLWluZml4LW9wcywgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4gIH07XG4gIGNvbnN0IGFuaW1hdGlvbklkID0gTWF0aC5yYW5kb20oKTtcbiAgY29uc3QgZHVyYXRpb24gPSAyMDA7XG4gIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gIGNvbnN0IGN1cnJlbnRTY3JvbGxUb3AgPSBzY3JvbGxlci5zY3JvbGxUb3A7XG4gIGNvbnN0IGRlbHRhU2Nyb2xsVG9wID0gdG9wIC0gY3VycmVudFNjcm9sbFRvcDtcbiAgZWxlbWVudC5fY3VycmVudEFuaW1hdGlvbklkID0gYW5pbWF0aW9uSWQ7XG4gIChmdW5jdGlvbiB1cGRhdGVGcmFtZSgpIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gbm93IC0gc3RhcnRUaW1lO1xuICAgIGlmIChlbGFwc2VkVGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICBzY3JvbGxlci5zY3JvbGxUb3AgPSB0b3A7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50Ll9jdXJyZW50QW5pbWF0aW9uSWQgPT09IGFuaW1hdGlvbklkKSB7XG4gICAgICBzY3JvbGxlci5zY3JvbGxUb3AgPSBlYXNpbmdGbihcbiAgICAgICAgZWxhcHNlZFRpbWUsXG4gICAgICAgIGN1cnJlbnRTY3JvbGxUb3AsXG4gICAgICAgIGRlbHRhU2Nyb2xsVG9wLFxuICAgICAgICBkdXJhdGlvblxuICAgICAgKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZS5iaW5kKGVsZW1lbnQpKTtcbiAgICB9XG4gIH0uY2FsbChlbGVtZW50KSk7XG59XG4iLCJpbXBvcnQgeyBIYXNzUm91dGVyUGFnZSwgUm91dGVyT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9sYXlvdXRzL2hhc3Mtcm91dGVyLXBhZ2VcIjtcbmltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIHByb3BlcnR5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiZGV2ZWxvcGVyLXRvb2xzLXJvdXRlclwiKVxuY2xhc3MgRGV2ZWxvcGVyVG9vbHNSb3V0ZXIgZXh0ZW5kcyBIYXNzUm91dGVyUGFnZSB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgcHJvdGVjdGVkIHJvdXRlck9wdGlvbnM6IFJvdXRlck9wdGlvbnMgPSB7XG4gICAgLy8gZGVmYXVsdFBhZ2U6IFwiaW5mb1wiLFxuICAgIGJlZm9yZVJlbmRlcjogKHBhZ2UpID0+IHtcbiAgICAgIGlmICghcGFnZSB8fCBwYWdlID09PSBcIm5vdF9mb3VuZFwiKSB7XG4gICAgICAgIC8vIElmIHdlIGNhbiwgd2UgYXJlIGdvaW5nIHRvIHJlc3RvcmUgdGhlIGxhc3QgdmlzaXRlZCBwYWdlLlxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBhZ2UgPyB0aGlzLl9jdXJyZW50UGFnZSA6IFwiaW5mb1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGNhY2hlQWxsOiB0cnVlLFxuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIHJvdXRlczoge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdGFnOiBcImRldmVsb3Blci10b29scy1ldmVudFwiLFxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoXCIuL2V2ZW50L2RldmVsb3Blci10b29scy1ldmVudFwiKSxcbiAgICAgIH0sXG4gICAgICBpbmZvOiB7XG4gICAgICAgIHRhZzogXCJkZXZlbG9wZXItdG9vbHMtaW5mb1wiLFxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoXCIuL2luZm8vZGV2ZWxvcGVyLXRvb2xzLWluZm9cIiksXG4gICAgICB9LFxuICAgICAgbG9nczoge1xuICAgICAgICB0YWc6IFwiZGV2ZWxvcGVyLXRvb2xzLWxvZ3NcIixcbiAgICAgICAgbG9hZDogKCkgPT4gaW1wb3J0KFwiLi9sb2dzL2RldmVsb3Blci10b29scy1sb2dzXCIpLFxuICAgICAgfSxcbiAgICAgIG1xdHQ6IHtcbiAgICAgICAgdGFnOiBcImRldmVsb3Blci10b29scy1tcXR0XCIsXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydChcIi4vbXF0dC9kZXZlbG9wZXItdG9vbHMtbXF0dFwiKSxcbiAgICAgIH0sXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHRhZzogXCJkZXZlbG9wZXItdG9vbHMtc2VydmljZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoXCIuL3NlcnZpY2UvZGV2ZWxvcGVyLXRvb2xzLXNlcnZpY2VcIiksXG4gICAgICB9LFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgdGFnOiBcImRldmVsb3Blci10b29scy1zdGF0ZVwiLFxuICAgICAgICBsb2FkOiAoKSA9PiBpbXBvcnQoXCIuL3N0YXRlL2RldmVsb3Blci10b29scy1zdGF0ZVwiKSxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICB0YWc6IFwiZGV2ZWxvcGVyLXRvb2xzLXRlbXBsYXRlXCIsXG4gICAgICAgIGxvYWQ6ICgpID0+IGltcG9ydChcIi4vdGVtcGxhdGUvZGV2ZWxvcGVyLXRvb2xzLXRlbXBsYXRlXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHByb3RlY3RlZCB1cGRhdGVQYWdlRWwoZWwpIHtcbiAgICBpZiAoXCJzZXRQcm9wZXJ0aWVzXCIgaW4gZWwpIHtcbiAgICAgIC8vIEFzIGxvbmcgYXMgd2UgaGF2ZSBQb2x5bWVyIHBhZ2VzXG4gICAgICAoZWwgYXMgUG9seW1lckVsZW1lbnQpLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgIG5hcnJvdzogdGhpcy5uYXJyb3csXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgIGVsLm5hcnJvdyA9IHRoaXMubmFycm93O1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGV2ZWxvcGVyLXRvb2xzLXJvdXRlclwiOiBEZXZlbG9wZXJUb29sc1JvdXRlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdGFicy9wYXBlci10YWJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFic1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuL2RldmVsb3Blci10b29scy1yb3V0ZXJcIjtcblxuaW1wb3J0IHNjcm9sbFRvVGFyZ2V0IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3Njcm9sbC10by10YXJnZXRcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBSb3V0ZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQgaXNDb21wb25lbnRMb2FkZWQgZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXBhbmVsLWRldmVsb3Blci10b29sc1wiKVxuY2xhc3MgUGFuZWxEZXZlbG9wZXJUb29scyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgcGFnZSA9IHRoaXMuX3BhZ2U7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIGZpeGVkIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPiR7dGhpcy5oYXNzLmxvY2FsaXplKFwicGFuZWwuZGV2ZWxvcGVyX3Rvb2xzXCIpfTwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgICAgPHBhcGVyLXRhYnNcbiAgICAgICAgICAgIHNjcm9sbGFibGVcbiAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwicGFnZS1uYW1lXCJcbiAgICAgICAgICAgIC5zZWxlY3RlZD0ke3BhZ2V9XG4gICAgICAgICAgICBAaXJvbi1hY3RpdmF0ZT0ke3RoaXMuaGFuZGxlUGFnZVNlbGVjdGVkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci10YWIgcGFnZS1uYW1lPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zdGF0ZXMudGl0bGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cInNlcnZpY2VcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5zZXJ2aWNlcy50aXRsZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgICAgIDxwYXBlci10YWIgcGFnZS1uYW1lPVwibG9nc1wiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmRldmVsb3Blci10b29scy50YWJzLmxvZ3MudGl0bGVcIil9XG4gICAgICAgICAgICA8L3BhcGVyLXRhYj5cbiAgICAgICAgICAgIDxwYXBlci10YWIgcGFnZS1uYW1lPVwidGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy50ZW1wbGF0ZXMudGl0bGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuZXZlbnRzLnRpdGxlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgJHtpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIFwibXF0dFwiKVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cGFwZXItdGFiIHBhZ2UtbmFtZT1cIm1xdHRcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5kZXZlbG9wZXItdG9vbHMudGFicy5tcXR0LnRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPHBhcGVyLXRhYiBwYWdlLW5hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuZGV2ZWxvcGVyLXRvb2xzLnRhYnMuaW5mby50aXRsZVwiKX1cbiAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgIDwvcGFwZXItdGFicz5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGV2ZWxvcGVyLXRvb2xzLXJvdXRlclxuICAgICAgICAgIC5yb3V0ZT0ke3RoaXMucm91dGV9XG4gICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICA+PC9kZXZlbG9wZXItdG9vbHMtcm91dGVyPlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQYWdlU2VsZWN0ZWQoZXYpIHtcbiAgICBjb25zdCBuZXdQYWdlID0gZXYuZGV0YWlsLml0ZW0uZ2V0QXR0cmlidXRlKFwicGFnZS1uYW1lXCIpO1xuICAgIGlmIChuZXdQYWdlICE9PSB0aGlzLl9wYWdlKSB7XG4gICAgICBuYXZpZ2F0ZSh0aGlzLCBgL2RldmVsb3Blci10b29scy8ke25ld1BhZ2V9YCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsVG9UYXJnZXQoXG4gICAgICB0aGlzLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiYXBwLWhlYWRlci1sYXlvdXRcIikuaGVhZGVyLnNjcm9sbFRhcmdldFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoLnN1YnN0cigxKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIC0tcGFwZXItY2FyZC1oZWFkZXItY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItdGFicyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgLS1wYXBlci10YWJzLXNlbGVjdGlvbi1iYXItY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYW5lbC1kZXZlbG9wZXItdG9vbHNcIjogUGFuZWxEZXZlbG9wZXJUb29scztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUtBO0FBQUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMURBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7OztBQUtBOzs7QUFLQTs7O0FBR0E7OztBQUtBOztBQUlBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBckdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==