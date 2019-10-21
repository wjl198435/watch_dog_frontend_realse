(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-sidebar"],{

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");


var ironIconClass = customElements.get("iron-icon");
var loaded = false;
var HaIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIcon, _super);
    function HaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIcon.prototype.listen = function (node, eventName, methodName) {
        _super.prototype.listen.call(this, node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    };
    return HaIcon;
}(ironIconClass));

customElements.define("ha-icon", HaIcon);


/***/ }),

/***/ "./src/components/ha-sidebar.ts":
/*!**************************************!*\
  !*** ./src/components/ha-sidebar.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_user_ha_user_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/user/ha-user-badge */ "./src/components/user/ha-user-badge.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/const */ "./src/common/const.ts");
/* harmony import */ var _external_app_external_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../external_app/external_config */ "./src/external_app/external_config.ts");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");

















var SHOW_AFTER_SPACER = ["config", "developer-tools", "hassio"];
var SUPPORT_SCROLL_IF_NEEDED = "scrollIntoViewIfNeeded" in document.body;
var SORT_VALUE_URL_PATHS = {
    map: 1,
    logbook: 2,
    history: 3,
    "developer-tools": 9,
    hassio: 10,
    config: 11,
};
var panelSorter = function (a, b) {
    var aBuiltIn = a.url_path in SORT_VALUE_URL_PATHS;
    var bBuiltIn = b.url_path in SORT_VALUE_URL_PATHS;
    if (aBuiltIn && bBuiltIn) {
        return SORT_VALUE_URL_PATHS[a.url_path] - SORT_VALUE_URL_PATHS[b.url_path];
    }
    if (aBuiltIn) {
        return -1;
    }
    if (bBuiltIn) {
        return 1;
    }
    // both not built in, sort by title
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1;
    }
    return 0;
};
var computePanels = function (hass) {
    var panels = hass.panels;
    if (!panels) {
        return [[], []];
    }
    var beforeSpacer = [];
    var afterSpacer = [];
    Object.values(panels).forEach(function (panel) {
        if (!panel.title) {
            return;
        }
        (SHOW_AFTER_SPACER.includes(panel.url_path)
            ? afterSpacer
            : beforeSpacer).push(panel);
    });
    beforeSpacer.sort(panelSorter);
    afterSpacer.sort(panelSorter);
    return [beforeSpacer, afterSpacer];
};
/*
 * @appliesMixin LocalizeMixin
 */
var HaSidebar = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaSidebar, _super);
    function HaSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.alwaysExpand = false;
        _this.expanded = false;
        _this._defaultPage = localStorage.defaultPage || _common_const__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_PANEL"];
        // property used only in css
        // @ts-ignore
        _this._rtl = false;
        _this._recentKeydownActiveUntil = 0;
        return _this;
    }
    HaSidebar.prototype.render = function () {
        var _this = this;
        var hass = this.hass;
        if (!hass) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var _a = computePanels(hass), beforeSpacer = _a[0], afterSpacer = _a[1];
        var notificationCount = this._notifications
            ? this._notifications.length
            : 0;
        for (var entityId in hass.states) {
            if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_14__["computeDomain"])(entityId) === "configurator") {
                notificationCount++;
            }
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"menu\">\n        ", "\n        <span class=\"title\">\u7267\u517B\u72AC</span>\n      </div>\n      <paper-listbox\n        attr-for-selected=\"data-panel\"\n        .selected=", "\n        @focusin=", "\n        @focusout=", "\n        @scroll=", "\n        @keydown=", "\n      >\n        ", "\n        ", "\n        <div class=\"spacer\" disabled></div>\n\n        ", "\n        ", "\n      </paper-listbox>\n\n      <div class=\"divider\"></div>\n\n      <paper-icon-item\n        class=\"notifications\"\n        aria-role=\"option\"\n        @click=", "\n        @mouseenter=", "\n        @mouseleave=", "\n      >\n        <ha-icon slot=\"item-icon\" icon=\"hass:bell\"></ha-icon>\n        ", "\n        <span class=\"item-text\">\n          ", "\n        </span>\n        ", "\n      </paper-icon-item>\n\n      <a\n        class=", "\n        href=\"/profile\"\n        data-panel=\"panel\"\n        tabindex=\"-1\"\n        aria-role=\"option\"\n        aria-label=", "\n      >\n        <paper-icon-item\n          @mouseenter=", "\n          @mouseleave=", "\n        >\n          <ha-user-badge slot=\"item-icon\" .user=", "></ha-user-badge>\n\n          <span class=\"item-text\">\n            ", "\n          </span>\n        </paper-icon-item>\n      </a>\n      <div disabled class=\"bottom-spacer\"></div>\n      <div class=\"tooltip\"></div>\n    "], ["\n      <div class=\"menu\">\n        ",
            "\n        <span class=\"title\">\u7267\u517B\u72AC</span>\n      </div>\n      <paper-listbox\n        attr-for-selected=\"data-panel\"\n        .selected=", "\n        @focusin=", "\n        @focusout=", "\n        @scroll=", "\n        @keydown=", "\n      >\n        ",
            "\n        ",
            "\n        <div class=\"spacer\" disabled></div>\n\n        ",
            "\n        ",
            "\n      </paper-listbox>\n\n      <div class=\"divider\"></div>\n\n      <paper-icon-item\n        class=\"notifications\"\n        aria-role=\"option\"\n        @click=", "\n        @mouseenter=", "\n        @mouseleave=", "\n      >\n        <ha-icon slot=\"item-icon\" icon=\"hass:bell\"></ha-icon>\n        ",
            "\n        <span class=\"item-text\">\n          ", "\n        </span>\n        ",
            "\n      </paper-icon-item>\n\n      <a\n        class=",
            "\n        href=\"/profile\"\n        data-panel=\"panel\"\n        tabindex=\"-1\"\n        aria-role=\"option\"\n        aria-label=", "\n      >\n        <paper-icon-item\n          @mouseenter=", "\n          @mouseleave=", "\n        >\n          <ha-user-badge slot=\"item-icon\" .user=", "></ha-user-badge>\n\n          <span class=\"item-text\">\n            ", "\n          </span>\n        </paper-icon-item>\n      </a>\n      <div disabled class=\"bottom-spacer\"></div>\n      <div class=\"tooltip\"></div>\n    "])), !this.narrow
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-icon-button\n                aria-label=\"Sidebar Toggle\"\n                .icon=", "\n                @click=", "\n              ></paper-icon-button>\n            "], ["\n              <paper-icon-button\n                aria-label=\"Sidebar Toggle\"\n                .icon=",
                "\n                @click=", "\n              ></paper-icon-button>\n            "])), hass.dockedSidebar === "docked"
                ? "hass:menu-open"
                : "hass:menu", this._toggleSidebar) : "", hass.panelUrl, this._listboxFocusIn, this._listboxFocusOut, this._listboxScroll, this._listboxKeydown, this._renderPanel(this._defaultPage, "hass:apps", hass.localize("panel.states")), beforeSpacer.map(function (panel) {
            return _this._renderPanel(panel.url_path, panel.icon, hass.localize("panel." + panel.title) || panel.title);
        }), afterSpacer.map(function (panel) {
            return _this._renderPanel(panel.url_path, panel.icon, hass.localize("panel." + panel.title) || panel.title);
        }), this._externalConfig && this._externalConfig.hasSettingsScreen
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <a\n                aria-role=\"option\"\n                aria-label=\"App Configuration\"\n                href=\"#external-app-configuration\"\n                tabindex=\"-1\"\n                @click=", "\n              >\n                <paper-icon-item\n                  @mouseenter=", "\n                  @mouseleave=", "\n                >\n                  <ha-icon\n                    slot=\"item-icon\"\n                    icon=\"hass:cellphone-settings-variant\"\n                  ></ha-icon>\n                  <span class=\"item-text\">\n                    ", "\n                  </span>\n                </paper-icon-item>\n              </a>\n            "], ["\n              <a\n                aria-role=\"option\"\n                aria-label=\"App Configuration\"\n                href=\"#external-app-configuration\"\n                tabindex=\"-1\"\n                @click=", "\n              >\n                <paper-icon-item\n                  @mouseenter=", "\n                  @mouseleave=", "\n                >\n                  <ha-icon\n                    slot=\"item-icon\"\n                    icon=\"hass:cellphone-settings-variant\"\n                  ></ha-icon>\n                  <span class=\"item-text\">\n                    ", "\n                  </span>\n                </paper-icon-item>\n              </a>\n            "])), this._handleExternalAppConfiguration, this._itemMouseEnter, this._itemMouseLeave, hass.localize("ui.sidebar.external_app_configuration")) : "", this._handleShowNotificationDrawer, this._itemMouseEnter, this._itemMouseLeave, !this.expanded && notificationCount > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <span class=\"notification-badge\" slot=\"item-icon\">\n                ", "\n              </span>\n            "], ["\n              <span class=\"notification-badge\" slot=\"item-icon\">\n                ", "\n              </span>\n            "])), notificationCount) : "", hass.localize("ui.notification_drawer.title"), this.expanded && notificationCount > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <span class=\"notification-badge\">", "</span>\n            "], ["\n              <span class=\"notification-badge\">", "</span>\n            "])), notificationCount) : "", Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_15__["classMap"])({
            profile: true,
            // Mimick behavior that paper-listbox provides
            "iron-selected": hass.panelUrl === "profile",
        }), hass.localize("panel.profile"), this._itemMouseEnter, this._itemMouseLeave, hass.user, hass.user ? hass.user.name : "");
    };
    HaSidebar.prototype.shouldUpdate = function (changedProps) {
        if (changedProps.has("expanded") ||
            changedProps.has("narrow") ||
            changedProps.has("alwaysExpand") ||
            changedProps.has("_externalConfig") ||
            changedProps.has("_notifications")) {
            return true;
        }
        if (!this.hass || !changedProps.has("hass")) {
            return false;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass) {
            return true;
        }
        var hass = this.hass;
        return (hass.panels !== oldHass.panels ||
            hass.panelUrl !== oldHass.panelUrl ||
            hass.user !== oldHass.user ||
            hass.localize !== oldHass.localize ||
            hass.states !== oldHass.states);
    };
    HaSidebar.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        if (this.hass && this.hass.auth.external) {
            Object(_external_app_external_config__WEBPACK_IMPORTED_MODULE_12__["getExternalConfig"])(this.hass.auth.external).then(function (conf) {
                _this._externalConfig = conf;
            });
        }
        Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_13__["subscribeNotifications"])(this.hass.connection, function (notifications) {
            _this._notifications = notifications;
        });
    };
    HaSidebar.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("alwaysExpand")) {
            this.expanded = this.alwaysExpand;
        }
        if (!changedProps.has("hass")) {
            return;
        }
        this._rtl = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTL"])(this.hass);
        if (!SUPPORT_SCROLL_IF_NEEDED) {
            return;
        }
        var oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.panelUrl !== this.hass.panelUrl) {
            var selectedEl = this.shadowRoot.querySelector(".iron-selected");
            if (selectedEl) {
                // @ts-ignore
                selectedEl.scrollIntoViewIfNeeded();
            }
        }
    };
    Object.defineProperty(HaSidebar.prototype, "_tooltip", {
        get: function () {
            return this.shadowRoot.querySelector(".tooltip");
        },
        enumerable: true,
        configurable: true
    });
    HaSidebar.prototype._itemMouseEnter = function (ev) {
        // On keypresses on the listbox, we're going to ignore mouse enter events
        // for 100ms so that we ignore it when pressing down arrow scrolls the
        // sidebar causing the mouse to hover a new icon
        if (this.expanded ||
            new Date().getTime() < this._recentKeydownActiveUntil) {
            return;
        }
        if (this._mouseLeaveTimeout) {
            clearTimeout(this._mouseLeaveTimeout);
            this._mouseLeaveTimeout = undefined;
        }
        this._showTooltip(ev.currentTarget);
    };
    HaSidebar.prototype._itemMouseLeave = function () {
        var _this = this;
        if (this._mouseLeaveTimeout) {
            clearTimeout(this._mouseLeaveTimeout);
        }
        this._mouseLeaveTimeout = window.setTimeout(function () {
            _this._hideTooltip();
        }, 500);
    };
    HaSidebar.prototype._listboxFocusIn = function (ev) {
        if (this.expanded || ev.target.nodeName !== "A") {
            return;
        }
        this._showTooltip(ev.target.querySelector("paper-icon-item"));
    };
    HaSidebar.prototype._listboxFocusOut = function () {
        this._hideTooltip();
    };
    HaSidebar.prototype._listboxScroll = function () {
        // On keypresses on the listbox, we're going to ignore scroll events
        // for 100ms so that if pressing down arrow scrolls the sidebar, the tooltip
        // will not be hidden.
        if (new Date().getTime() < this._recentKeydownActiveUntil) {
            return;
        }
        this._hideTooltip();
    };
    HaSidebar.prototype._listboxKeydown = function () {
        this._recentKeydownActiveUntil = new Date().getTime() + 100;
    };
    HaSidebar.prototype._showTooltip = function (item) {
        if (this._tooltipHideTimeout) {
            clearTimeout(this._tooltipHideTimeout);
            this._tooltipHideTimeout = undefined;
        }
        var tooltip = this._tooltip;
        var listbox = this.shadowRoot.querySelector("paper-listbox");
        var top = item.offsetTop + 7;
        if (listbox.contains(item)) {
            top -= listbox.scrollTop;
        }
        tooltip.innerHTML = item.querySelector(".item-text").innerHTML;
        tooltip.style.display = "block";
        tooltip.style.top = top + "px";
        tooltip.style.left = item.offsetLeft + item.clientWidth + 12 + "px";
    };
    HaSidebar.prototype._hideTooltip = function () {
        var _this = this;
        // Delay it a little in case other events are pending processing.
        if (!this._tooltipHideTimeout) {
            this._tooltipHideTimeout = window.setTimeout(function () {
                _this._tooltipHideTimeout = undefined;
                _this._tooltip.style.display = "none";
            }, 10);
        }
    };
    HaSidebar.prototype._handleShowNotificationDrawer = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "hass-show-notifications");
    };
    HaSidebar.prototype._handleExternalAppConfiguration = function (ev) {
        ev.preventDefault();
        this.hass.auth.external.fireMessage({
            type: "config_screen/show",
        });
    };
    HaSidebar.prototype._toggleSidebar = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "hass-toggle-menu");
    };
    HaSidebar.prototype._renderPanel = function (urlPath, icon, title) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <a\n        aria-role=\"option\"\n        href=\"", "\"\n        data-panel=\"", "\"\n        tabindex=\"-1\"\n      >\n        <paper-icon-item\n          @mouseenter=", "\n          @mouseleave=", "\n        >\n          <ha-icon slot=\"item-icon\" .icon=\"", "\"></ha-icon>\n          <span class=\"item-text\">", "</span>\n        </paper-icon-item>\n      </a>\n    "], ["\n      <a\n        aria-role=\"option\"\n        href=\"", "\"\n        data-panel=\"", "\"\n        tabindex=\"-1\"\n      >\n        <paper-icon-item\n          @mouseenter=", "\n          @mouseleave=", "\n        >\n          <ha-icon slot=\"item-icon\" .icon=\"", "\"></ha-icon>\n          <span class=\"item-text\">", "</span>\n        </paper-icon-item>\n      </a>\n    "])), "/" + urlPath, urlPath, this._itemMouseEnter, this._itemMouseLeave, icon, title);
    };
    Object.defineProperty(HaSidebar, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        height: 100%;\n        display: block;\n        overflow: hidden;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        border-right: 1px solid var(--divider-color);\n        background-color: var(--sidebar-background-color);\n        width: 64px;\n      }\n      :host([expanded]) {\n        width: 256px;\n      }\n\n      .menu {\n        box-sizing: border-box;\n        height: 65px;\n        display: flex;\n        padding: 0 12px;\n        border-bottom: 1px solid transparent;\n        white-space: nowrap;\n        font-weight: 400;\n        color: var(--primary-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        background-color: var(--primary-background-color);\n        font-size: 20px;\n        align-items: center;\n      }\n      :host([expanded]) .menu {\n        width: 256px;\n      }\n\n      .menu paper-icon-button {\n        color: var(--sidebar-icon-color);\n      }\n      :host([expanded]) .menu paper-icon-button {\n        margin-right: 23px;\n      }\n      :host([expanded][_rtl]) .menu paper-icon-button {\n        margin-right: 0px;\n        margin-left: 23px;\n      }\n\n      .title {\n        display: none;\n      }\n      :host([expanded]) .title {\n        display: initial;\n      }\n\n      paper-listbox::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 0.4rem;\n      }\n\n      paper-listbox::-webkit-scrollbar-thumb {\n        -webkit-border-radius: 4px;\n        border-radius: 4px;\n        background: var(--scrollbar-thumb-color);\n      }\n\n      paper-listbox {\n        padding: 4px 0;\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        height: calc(100% - 196px);\n        overflow-y: auto;\n        overflow-x: hidden;\n        scrollbar-color: var(--scrollbar-thumb-color) transparent;\n        scrollbar-width: thin;\n      }\n\n      a {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        text-decoration: none;\n      }\n\n      paper-icon-item {\n        box-sizing: border-box;\n        margin: 4px 8px;\n        padding-left: 12px;\n        border-radius: 4px;\n        --paper-item-min-height: 40px;\n        width: 48px;\n      }\n      :host([expanded]) paper-icon-item {\n        width: 240px;\n      }\n      :host([_rtl]) paper-icon-item {\n        padding-left: auto;\n        padding-right: 12px;\n      }\n\n      ha-icon[slot=\"item-icon\"] {\n        color: var(--sidebar-icon-color);\n      }\n\n      .iron-selected paper-icon-item:before {\n        border-radius: 4px;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        content: \"\";\n        background-color: var(--sidebar-selected-icon-color);\n        opacity: 0.12;\n        transition: opacity 15ms linear;\n        will-change: opacity;\n      }\n\n      .iron-selected paper-icon-item[pressed]:before {\n        opacity: 0.37;\n      }\n\n      paper-icon-item span {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      a.iron-selected paper-icon-item ha-icon {\n        color: var(--sidebar-selected-icon-color);\n      }\n\n      a.iron-selected .item-text {\n        color: var(--sidebar-selected-text-color);\n      }\n\n      paper-icon-item .item-text {\n        display: none;\n      }\n      :host([expanded]) paper-icon-item .item-text {\n        display: block;\n      }\n\n      .divider {\n        bottom: 112px;\n        padding: 10px 0;\n      }\n      .divider::before {\n        content: \" \";\n        display: block;\n        height: 1px;\n        background-color: var(--divider-color);\n      }\n\n      .notifications {\n        cursor: pointer;\n      }\n      .notifications .item-text {\n        flex: 1;\n      }\n      .profile {\n      }\n      .profile paper-icon-item {\n        padding-left: 4px;\n      }\n      :host([_rtl]) .profile paper-icon-item {\n        padding-left: auto;\n        padding-right: 4px;\n      }\n      .profile .item-text {\n        margin-left: 8px;\n      }\n      :host([_rtl]) .profile .item-text {\n        margin-right: 8px;\n      }\n\n      .notification-badge {\n        min-width: 20px;\n        box-sizing: border-box;\n        border-radius: 50%;\n        font-weight: 400;\n        background-color: var(--accent-color);\n        line-height: 20px;\n        text-align: center;\n        padding: 0px 6px;\n        color: var(--text-primary-color);\n      }\n      ha-icon + .notification-badge {\n        position: absolute;\n        bottom: 14px;\n        left: 26px;\n        font-size: 0.65em;\n      }\n\n      .spacer {\n        flex: 1;\n        pointer-events: none;\n      }\n\n      .subheader {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        padding: 16px;\n        white-space: nowrap;\n      }\n\n      .dev-tools {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 0 8px;\n        width: 256px;\n        box-sizing: border-box;\n      }\n\n      .dev-tools a {\n        color: var(--sidebar-icon-color);\n      }\n\n      .tooltip {\n        display: none;\n        position: absolute;\n        opacity: 0.9;\n        border-radius: 2px;\n        white-space: nowrap;\n        color: var(--sidebar-background-color);\n        background-color: var(--sidebar-text-color);\n        padding: 4px;\n        font-weight: 500;\n      }\n\n      :host([_rtl]) .menu paper-icon-button {\n        -webkit-transform: scaleX(-1);\n        transform: scaleX(-1);\n      }\n    "], ["\n      :host {\n        height: 100%;\n        display: block;\n        overflow: hidden;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        border-right: 1px solid var(--divider-color);\n        background-color: var(--sidebar-background-color);\n        width: 64px;\n      }\n      :host([expanded]) {\n        width: 256px;\n      }\n\n      .menu {\n        box-sizing: border-box;\n        height: 65px;\n        display: flex;\n        padding: 0 12px;\n        border-bottom: 1px solid transparent;\n        white-space: nowrap;\n        font-weight: 400;\n        color: var(--primary-text-color);\n        border-bottom: 1px solid var(--divider-color);\n        background-color: var(--primary-background-color);\n        font-size: 20px;\n        align-items: center;\n      }\n      :host([expanded]) .menu {\n        width: 256px;\n      }\n\n      .menu paper-icon-button {\n        color: var(--sidebar-icon-color);\n      }\n      :host([expanded]) .menu paper-icon-button {\n        margin-right: 23px;\n      }\n      :host([expanded][_rtl]) .menu paper-icon-button {\n        margin-right: 0px;\n        margin-left: 23px;\n      }\n\n      .title {\n        display: none;\n      }\n      :host([expanded]) .title {\n        display: initial;\n      }\n\n      paper-listbox::-webkit-scrollbar {\n        width: 0.4rem;\n        height: 0.4rem;\n      }\n\n      paper-listbox::-webkit-scrollbar-thumb {\n        -webkit-border-radius: 4px;\n        border-radius: 4px;\n        background: var(--scrollbar-thumb-color);\n      }\n\n      paper-listbox {\n        padding: 4px 0;\n        display: flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        height: calc(100% - 196px);\n        overflow-y: auto;\n        overflow-x: hidden;\n        scrollbar-color: var(--scrollbar-thumb-color) transparent;\n        scrollbar-width: thin;\n      }\n\n      a {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        text-decoration: none;\n      }\n\n      paper-icon-item {\n        box-sizing: border-box;\n        margin: 4px 8px;\n        padding-left: 12px;\n        border-radius: 4px;\n        --paper-item-min-height: 40px;\n        width: 48px;\n      }\n      :host([expanded]) paper-icon-item {\n        width: 240px;\n      }\n      :host([_rtl]) paper-icon-item {\n        padding-left: auto;\n        padding-right: 12px;\n      }\n\n      ha-icon[slot=\"item-icon\"] {\n        color: var(--sidebar-icon-color);\n      }\n\n      .iron-selected paper-icon-item:before {\n        border-radius: 4px;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        content: \"\";\n        background-color: var(--sidebar-selected-icon-color);\n        opacity: 0.12;\n        transition: opacity 15ms linear;\n        will-change: opacity;\n      }\n\n      .iron-selected paper-icon-item[pressed]:before {\n        opacity: 0.37;\n      }\n\n      paper-icon-item span {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n      }\n\n      a.iron-selected paper-icon-item ha-icon {\n        color: var(--sidebar-selected-icon-color);\n      }\n\n      a.iron-selected .item-text {\n        color: var(--sidebar-selected-text-color);\n      }\n\n      paper-icon-item .item-text {\n        display: none;\n      }\n      :host([expanded]) paper-icon-item .item-text {\n        display: block;\n      }\n\n      .divider {\n        bottom: 112px;\n        padding: 10px 0;\n      }\n      .divider::before {\n        content: \" \";\n        display: block;\n        height: 1px;\n        background-color: var(--divider-color);\n      }\n\n      .notifications {\n        cursor: pointer;\n      }\n      .notifications .item-text {\n        flex: 1;\n      }\n      .profile {\n      }\n      .profile paper-icon-item {\n        padding-left: 4px;\n      }\n      :host([_rtl]) .profile paper-icon-item {\n        padding-left: auto;\n        padding-right: 4px;\n      }\n      .profile .item-text {\n        margin-left: 8px;\n      }\n      :host([_rtl]) .profile .item-text {\n        margin-right: 8px;\n      }\n\n      .notification-badge {\n        min-width: 20px;\n        box-sizing: border-box;\n        border-radius: 50%;\n        font-weight: 400;\n        background-color: var(--accent-color);\n        line-height: 20px;\n        text-align: center;\n        padding: 0px 6px;\n        color: var(--text-primary-color);\n      }\n      ha-icon + .notification-badge {\n        position: absolute;\n        bottom: 14px;\n        left: 26px;\n        font-size: 0.65em;\n      }\n\n      .spacer {\n        flex: 1;\n        pointer-events: none;\n      }\n\n      .subheader {\n        color: var(--sidebar-text-color);\n        font-weight: 500;\n        font-size: 14px;\n        padding: 16px;\n        white-space: nowrap;\n      }\n\n      .dev-tools {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        padding: 0 8px;\n        width: 256px;\n        box-sizing: border-box;\n      }\n\n      .dev-tools a {\n        color: var(--sidebar-icon-color);\n      }\n\n      .tooltip {\n        display: none;\n        position: absolute;\n        opacity: 0.9;\n        border-radius: 2px;\n        white-space: nowrap;\n        color: var(--sidebar-background-color);\n        background-color: var(--sidebar-text-color);\n        padding: 4px;\n        font-weight: 500;\n      }\n\n      :host([_rtl]) .menu paper-icon-button {\n        -webkit-transform: scaleX(-1);\n        transform: scaleX(-1);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSidebar.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSidebar.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
    ], HaSidebar.prototype, "alwaysExpand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean, reflect: true })
    ], HaSidebar.prototype, "expanded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSidebar.prototype, "_defaultPage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSidebar.prototype, "_externalConfig", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaSidebar.prototype, "_notifications", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean, reflect: true })
    ], HaSidebar.prototype, "_rtl", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["eventOptions"])({
            passive: true,
        })
    ], HaSidebar.prototype, "_listboxScroll", null);
    return HaSidebar;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-sidebar", HaSidebar);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ }),

/***/ "./src/components/user/ha-user-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/user/ha-user-badge.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");



var computeInitials = function (name) {
    if (!name) {
        return "user";
    }
    return (name
        .trim()
        // Split by space and take first 3 words
        .split(" ")
        .slice(0, 3)
        // Of each word, take first letter
        .map(function (s) { return s.substr(0, 1); })
        .join(""));
};
var StateBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateBadge, _super);
    function StateBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateBadge.prototype.render = function () {
        var user = this.user;
        var initials = user ? computeInitials(user.name) : "?";
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n    "], ["\n      ", "\n    "])), initials);
    };
    StateBadge.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_2__["toggleAttribute"])(this, "long", (this.user ? computeInitials(this.user.name) : "?").length > 2);
    };
    Object.defineProperty(StateBadge, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: inline-block;\n        box-sizing: border-box;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 50%;\n        text-align: center;\n        background-color: var(--light-primary-color);\n        text-decoration: none;\n        color: var(--primary-text-color);\n        overflow: hidden;\n      }\n\n      :host([long]) {\n        font-size: 80%;\n      }\n    "], ["\n      :host {\n        display: inline-block;\n        box-sizing: border-box;\n        width: 40px;\n        line-height: 40px;\n        border-radius: 50%;\n        text-align: center;\n        background-color: var(--light-primary-color);\n        text-decoration: none;\n        color: var(--primary-text-color);\n        overflow: hidden;\n      }\n\n      :host([long]) {\n        font-size: 80%;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StateBadge.prototype, "user", void 0);
    StateBadge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-user-badge")
    ], StateBadge);
    return StateBadge;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/external_app/external_config.ts":
/*!*********************************************!*\
  !*** ./src/external_app/external_config.ts ***!
  \*********************************************/
/*! exports provided: getExternalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExternalConfig", function() { return getExternalConfig; });
var getExternalConfig = function (bus) {
    if (!bus.cache.cfg) {
        bus.cache.cfg = bus.sendMessage({
            type: "config/get",
        });
    }
    return bus.cache.cfg;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtc2lkZWJhci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyL2hhLXVzZXItYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4dGVybmFsX2FwcC9leHRlcm5hbF9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHByb3BlcnR5LFxuICBldmVudE9wdGlvbnMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiLi9oYS1pY29uXCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvdXNlci9oYS11c2VyLWJhZGdlXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBQYW5lbEluZm8gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IERFRkFVTFRfUEFORUwgfSBmcm9tIFwiLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQge1xuICBnZXRFeHRlcm5hbENvbmZpZyxcbiAgRXh0ZXJuYWxDb25maWcsXG59IGZyb20gXCIuLi9leHRlcm5hbF9hcHAvZXh0ZXJuYWxfY29uZmlnXCI7XG5pbXBvcnQge1xuICBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uLFxuICBzdWJzY3JpYmVOb3RpZmljYXRpb25zLFxufSBmcm9tIFwiLi4vZGF0YS9wZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJY29uSXRlbUVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pY29uLWl0ZW1cIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuY29uc3QgU0hPV19BRlRFUl9TUEFDRVIgPSBbXCJjb25maWdcIiwgXCJkZXZlbG9wZXItdG9vbHNcIiwgXCJoYXNzaW9cIl07XG5cbmNvbnN0IFNVUFBPUlRfU0NST0xMX0lGX05FRURFRCA9IFwic2Nyb2xsSW50b1ZpZXdJZk5lZWRlZFwiIGluIGRvY3VtZW50LmJvZHk7XG5cbmNvbnN0IFNPUlRfVkFMVUVfVVJMX1BBVEhTID0ge1xuICBtYXA6IDEsXG4gIGxvZ2Jvb2s6IDIsXG4gIGhpc3Rvcnk6IDMsXG4gIFwiZGV2ZWxvcGVyLXRvb2xzXCI6IDksXG4gIGhhc3NpbzogMTAsXG4gIGNvbmZpZzogMTEsXG59O1xuXG5jb25zdCBwYW5lbFNvcnRlciA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGFCdWlsdEluID0gYS51cmxfcGF0aCBpbiBTT1JUX1ZBTFVFX1VSTF9QQVRIUztcbiAgY29uc3QgYkJ1aWx0SW4gPSBiLnVybF9wYXRoIGluIFNPUlRfVkFMVUVfVVJMX1BBVEhTO1xuXG4gIGlmIChhQnVpbHRJbiAmJiBiQnVpbHRJbikge1xuICAgIHJldHVybiBTT1JUX1ZBTFVFX1VSTF9QQVRIU1thLnVybF9wYXRoXSAtIFNPUlRfVkFMVUVfVVJMX1BBVEhTW2IudXJsX3BhdGhdO1xuICB9XG4gIGlmIChhQnVpbHRJbikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYkJ1aWx0SW4pIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICAvLyBib3RoIG5vdCBidWlsdCBpbiwgc29ydCBieSB0aXRsZVxuICBpZiAoYS50aXRsZSEgPCBiLnRpdGxlISkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS50aXRsZSEgPiBiLnRpdGxlISkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgY29tcHV0ZVBhbmVscyA9IChoYXNzOiBIb21lQXNzaXN0YW50KTogW1BhbmVsSW5mb1tdLCBQYW5lbEluZm9bXV0gPT4ge1xuICBjb25zdCBwYW5lbHMgPSBoYXNzLnBhbmVscztcbiAgaWYgKCFwYW5lbHMpIHtcbiAgICByZXR1cm4gW1tdLCBbXV07XG4gIH1cblxuICBjb25zdCBiZWZvcmVTcGFjZXI6IFBhbmVsSW5mb1tdID0gW107XG4gIGNvbnN0IGFmdGVyU3BhY2VyOiBQYW5lbEluZm9bXSA9IFtdO1xuXG4gIE9iamVjdC52YWx1ZXMocGFuZWxzKS5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICAgIGlmICghcGFuZWwudGl0bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKFNIT1dfQUZURVJfU1BBQ0VSLmluY2x1ZGVzKHBhbmVsLnVybF9wYXRoKVxuICAgICAgPyBhZnRlclNwYWNlclxuICAgICAgOiBiZWZvcmVTcGFjZXJcbiAgICApLnB1c2gocGFuZWwpO1xuICB9KTtcblxuICBiZWZvcmVTcGFjZXIuc29ydChwYW5lbFNvcnRlcik7XG4gIGFmdGVyU3BhY2VyLnNvcnQocGFuZWxTb3J0ZXIpO1xuXG4gIHJldHVybiBbYmVmb3JlU3BhY2VyLCBhZnRlclNwYWNlcl07XG59O1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhU2lkZWJhciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGFsd2F5c0V4cGFuZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBleHBhbmRlZCA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgX2RlZmF1bHRQYWdlPzogc3RyaW5nID1cbiAgICBsb2NhbFN0b3JhZ2UuZGVmYXVsdFBhZ2UgfHwgREVGQVVMVF9QQU5FTDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXh0ZXJuYWxDb25maWc/OiBFeHRlcm5hbENvbmZpZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbm90aWZpY2F0aW9ucz86IFBlcnNpc3RlbnROb3RpZmljYXRpb25bXTtcbiAgLy8gcHJvcGVydHkgdXNlZCBvbmx5IGluIGNzc1xuICAvLyBAdHMtaWdub3JlXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHJpdmF0ZSBfcnRsID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbW91c2VMZWF2ZVRpbWVvdXQ/OiBudW1iZXI7XG4gIHByaXZhdGUgX3Rvb2x0aXBIaWRlVGltZW91dD86IG51bWJlcjtcbiAgcHJpdmF0ZSBfcmVjZW50S2V5ZG93bkFjdGl2ZVVudGlsID0gMDtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG5cbiAgICBpZiAoIWhhc3MpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgW2JlZm9yZVNwYWNlciwgYWZ0ZXJTcGFjZXJdID0gY29tcHV0ZVBhbmVscyhoYXNzKTtcblxuICAgIGxldCBub3RpZmljYXRpb25Db3VudCA9IHRoaXMuX25vdGlmaWNhdGlvbnNcbiAgICAgID8gdGhpcy5fbm90aWZpY2F0aW9ucy5sZW5ndGhcbiAgICAgIDogMDtcbiAgICBmb3IgKGNvbnN0IGVudGl0eUlkIGluIGhhc3Muc3RhdGVzKSB7XG4gICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkgPT09IFwiY29uZmlndXJhdG9yXCIpIHtcbiAgICAgICAgbm90aWZpY2F0aW9uQ291bnQrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZW51XCI+XG4gICAgICAgICR7IXRoaXMubmFycm93XG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2lkZWJhciBUb2dnbGVcIlxuICAgICAgICAgICAgICAgIC5pY29uPSR7aGFzcy5kb2NrZWRTaWRlYmFyID09PSBcImRvY2tlZFwiXG4gICAgICAgICAgICAgICAgICA/IFwiaGFzczptZW51LW9wZW5cIlxuICAgICAgICAgICAgICAgICAgOiBcImhhc3M6bWVudVwifVxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3RvZ2dsZVNpZGViYXJ9XG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPueJp+WFu+eKrDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJkYXRhLXBhbmVsXCJcbiAgICAgICAgLnNlbGVjdGVkPSR7aGFzcy5wYW5lbFVybH1cbiAgICAgICAgQGZvY3VzaW49JHt0aGlzLl9saXN0Ym94Rm9jdXNJbn1cbiAgICAgICAgQGZvY3Vzb3V0PSR7dGhpcy5fbGlzdGJveEZvY3VzT3V0fVxuICAgICAgICBAc2Nyb2xsPSR7dGhpcy5fbGlzdGJveFNjcm9sbH1cbiAgICAgICAgQGtleWRvd249JHt0aGlzLl9saXN0Ym94S2V5ZG93bn1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9yZW5kZXJQYW5lbChcbiAgICAgICAgICB0aGlzLl9kZWZhdWx0UGFnZSxcbiAgICAgICAgICBcImhhc3M6YXBwc1wiLFxuICAgICAgICAgIGhhc3MubG9jYWxpemUoXCJwYW5lbC5zdGF0ZXNcIilcbiAgICAgICAgKX1cbiAgICAgICAgJHtiZWZvcmVTcGFjZXIubWFwKChwYW5lbCkgPT5cbiAgICAgICAgICB0aGlzLl9yZW5kZXJQYW5lbChcbiAgICAgICAgICAgIHBhbmVsLnVybF9wYXRoLFxuICAgICAgICAgICAgcGFuZWwuaWNvbixcbiAgICAgICAgICAgIGhhc3MubG9jYWxpemUoYHBhbmVsLiR7cGFuZWwudGl0bGV9YCkgfHwgcGFuZWwudGl0bGVcbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZXJcIiBkaXNhYmxlZD48L2Rpdj5cblxuICAgICAgICAke2FmdGVyU3BhY2VyLm1hcCgocGFuZWwpID0+XG4gICAgICAgICAgdGhpcy5fcmVuZGVyUGFuZWwoXG4gICAgICAgICAgICBwYW5lbC51cmxfcGF0aCxcbiAgICAgICAgICAgIHBhbmVsLmljb24sXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBwYW5lbC4ke3BhbmVsLnRpdGxlfWApIHx8IHBhbmVsLnRpdGxlXG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgICAke3RoaXMuX2V4dGVybmFsQ29uZmlnICYmIHRoaXMuX2V4dGVybmFsQ29uZmlnLmhhc1NldHRpbmdzU2NyZWVuXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFwcCBDb25maWd1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2V4dGVybmFsLWFwcC1jb25maWd1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVFeHRlcm5hbEFwcENvbmZpZ3VyYXRpb259XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1pdGVtXG4gICAgICAgICAgICAgICAgICBAbW91c2VlbnRlcj0ke3RoaXMuX2l0ZW1Nb3VzZUVudGVyfVxuICAgICAgICAgICAgICAgICAgQG1vdXNlbGVhdmU9JHt0aGlzLl9pdGVtTW91c2VMZWF2ZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aGEtaWNvblxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiaXRlbS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2VsbHBob25lLXNldHRpbmdzLXZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLnNpZGViYXIuZXh0ZXJuYWxfYXBwX2NvbmZpZ3VyYXRpb25cIil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXZpZGVyXCI+PC9kaXY+XG5cbiAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgY2xhc3M9XCJub3RpZmljYXRpb25zXCJcbiAgICAgICAgYXJpYS1yb2xlPVwib3B0aW9uXCJcbiAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlU2hvd05vdGlmaWNhdGlvbkRyYXdlcn1cbiAgICAgICAgQG1vdXNlZW50ZXI9JHt0aGlzLl9pdGVtTW91c2VFbnRlcn1cbiAgICAgICAgQG1vdXNlbGVhdmU9JHt0aGlzLl9pdGVtTW91c2VMZWF2ZX1cbiAgICAgID5cbiAgICAgICAgPGhhLWljb24gc2xvdD1cIml0ZW0taWNvblwiIGljb249XCJoYXNzOmJlbGxcIj48L2hhLWljb24+XG4gICAgICAgICR7IXRoaXMuZXhwYW5kZWQgJiYgbm90aWZpY2F0aW9uQ291bnQgPiAwXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vdGlmaWNhdGlvbi1iYWRnZVwiIHNsb3Q9XCJpdGVtLWljb25cIj5cbiAgICAgICAgICAgICAgICAke25vdGlmaWNhdGlvbkNvdW50fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdGV4dFwiPlxuICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLm5vdGlmaWNhdGlvbl9kcmF3ZXIudGl0bGVcIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgJHt0aGlzLmV4cGFuZGVkICYmIG5vdGlmaWNhdGlvbkNvdW50ID4gMFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RpZmljYXRpb24tYmFkZ2VcIj4ke25vdGlmaWNhdGlvbkNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L3BhcGVyLWljb24taXRlbT5cblxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgcHJvZmlsZTogdHJ1ZSxcbiAgICAgICAgICAvLyBNaW1pY2sgYmVoYXZpb3IgdGhhdCBwYXBlci1saXN0Ym94IHByb3ZpZGVzXG4gICAgICAgICAgXCJpcm9uLXNlbGVjdGVkXCI6IGhhc3MucGFuZWxVcmwgPT09IFwicHJvZmlsZVwiLFxuICAgICAgICB9KX1cbiAgICAgICAgaHJlZj1cIi9wcm9maWxlXCJcbiAgICAgICAgZGF0YS1wYW5lbD1cInBhbmVsXCJcbiAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgIGFyaWEtcm9sZT1cIm9wdGlvblwiXG4gICAgICAgIGFyaWEtbGFiZWw9JHtoYXNzLmxvY2FsaXplKFwicGFuZWwucHJvZmlsZVwiKX1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWljb24taXRlbVxuICAgICAgICAgIEBtb3VzZWVudGVyPSR7dGhpcy5faXRlbU1vdXNlRW50ZXJ9XG4gICAgICAgICAgQG1vdXNlbGVhdmU9JHt0aGlzLl9pdGVtTW91c2VMZWF2ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoYS11c2VyLWJhZGdlIHNsb3Q9XCJpdGVtLWljb25cIiAudXNlcj0ke2hhc3MudXNlcn0+PC9oYS11c2VyLWJhZGdlPlxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXRleHRcIj5cbiAgICAgICAgICAgICR7aGFzcy51c2VyID8gaGFzcy51c2VyLm5hbWUgOiBcIlwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICA8L2E+XG4gICAgICA8ZGl2IGRpc2FibGVkIGNsYXNzPVwiYm90dG9tLXNwYWNlclwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBcIj48L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNob3VsZFVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlZFByb3BzLmhhcyhcImV4cGFuZGVkXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwibmFycm93XCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiYWx3YXlzRXhwYW5kXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX2V4dGVybmFsQ29uZmlnXCIpIHx8XG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX25vdGlmaWNhdGlvbnNcIilcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQ7XG4gICAgaWYgKCFvbGRIYXNzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICByZXR1cm4gKFxuICAgICAgaGFzcy5wYW5lbHMgIT09IG9sZEhhc3MucGFuZWxzIHx8XG4gICAgICBoYXNzLnBhbmVsVXJsICE9PSBvbGRIYXNzLnBhbmVsVXJsIHx8XG4gICAgICBoYXNzLnVzZXIgIT09IG9sZEhhc3MudXNlciB8fFxuICAgICAgaGFzcy5sb2NhbGl6ZSAhPT0gb2xkSGFzcy5sb2NhbGl6ZSB8fFxuICAgICAgaGFzcy5zdGF0ZXMgIT09IG9sZEhhc3Muc3RhdGVzXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLmhhc3MuYXV0aC5leHRlcm5hbCkge1xuICAgICAgZ2V0RXh0ZXJuYWxDb25maWcodGhpcy5oYXNzLmF1dGguZXh0ZXJuYWwpLnRoZW4oKGNvbmYpID0+IHtcbiAgICAgICAgdGhpcy5fZXh0ZXJuYWxDb25maWcgPSBjb25mO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHN1YnNjcmliZU5vdGlmaWNhdGlvbnModGhpcy5oYXNzLmNvbm5lY3Rpb24sIChub3RpZmljYXRpb25zKSA9PiB7XG4gICAgICB0aGlzLl9ub3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucztcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImFsd2F5c0V4cGFuZFwiKSkge1xuICAgICAgdGhpcy5leHBhbmRlZCA9IHRoaXMuYWx3YXlzRXhwYW5kO1xuICAgIH1cbiAgICBpZiAoIWNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fcnRsID0gY29tcHV0ZVJUTCh0aGlzLmhhc3MpO1xuXG4gICAgaWYgKCFTVVBQT1JUX1NDUk9MTF9JRl9ORUVERUQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb2xkSGFzcyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJoYXNzXCIpIGFzIEhvbWVBc3Npc3RhbnQgfCB1bmRlZmluZWQ7XG4gICAgaWYgKCFvbGRIYXNzIHx8IG9sZEhhc3MucGFuZWxVcmwgIT09IHRoaXMuaGFzcy5wYW5lbFVybCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRFbCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcIi5pcm9uLXNlbGVjdGVkXCIpO1xuICAgICAgaWYgKHNlbGVjdGVkRWwpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBzZWxlY3RlZEVsLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiLnRvb2x0aXBcIikhIGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfaXRlbU1vdXNlRW50ZXIoZXY6IE1vdXNlRXZlbnQpIHtcbiAgICAvLyBPbiBrZXlwcmVzc2VzIG9uIHRoZSBsaXN0Ym94LCB3ZSdyZSBnb2luZyB0byBpZ25vcmUgbW91c2UgZW50ZXIgZXZlbnRzXG4gICAgLy8gZm9yIDEwMG1zIHNvIHRoYXQgd2UgaWdub3JlIGl0IHdoZW4gcHJlc3NpbmcgZG93biBhcnJvdyBzY3JvbGxzIHRoZVxuICAgIC8vIHNpZGViYXIgY2F1c2luZyB0aGUgbW91c2UgdG8gaG92ZXIgYSBuZXcgaWNvblxuICAgIGlmIChcbiAgICAgIHRoaXMuZXhwYW5kZWQgfHxcbiAgICAgIG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgdGhpcy5fcmVjZW50S2V5ZG93bkFjdGl2ZVVudGlsXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9tb3VzZUxlYXZlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0KTtcbiAgICAgIHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB0aGlzLl9zaG93VG9vbHRpcChldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVySWNvbkl0ZW1FbGVtZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgX2l0ZW1Nb3VzZUxlYXZlKCkge1xuICAgIGlmICh0aGlzLl9tb3VzZUxlYXZlVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX21vdXNlTGVhdmVUaW1lb3V0KTtcbiAgICB9XG4gICAgdGhpcy5fbW91c2VMZWF2ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9oaWRlVG9vbHRpcCgpO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0Ym94Rm9jdXNJbihldikge1xuICAgIGlmICh0aGlzLmV4cGFuZGVkIHx8IGV2LnRhcmdldC5ub2RlTmFtZSAhPT0gXCJBXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2hvd1Rvb2x0aXAoZXYudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1pY29uLWl0ZW1cIikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGJveEZvY3VzT3V0KCkge1xuICAgIHRoaXMuX2hpZGVUb29sdGlwKCk7XG4gIH1cblxuICBAZXZlbnRPcHRpb25zKHtcbiAgICBwYXNzaXZlOiB0cnVlLFxuICB9KVxuICBwcml2YXRlIF9saXN0Ym94U2Nyb2xsKCkge1xuICAgIC8vIE9uIGtleXByZXNzZXMgb24gdGhlIGxpc3Rib3gsIHdlJ3JlIGdvaW5nIHRvIGlnbm9yZSBzY3JvbGwgZXZlbnRzXG4gICAgLy8gZm9yIDEwMG1zIHNvIHRoYXQgaWYgcHJlc3NpbmcgZG93biBhcnJvdyBzY3JvbGxzIHRoZSBzaWRlYmFyLCB0aGUgdG9vbHRpcFxuICAgIC8vIHdpbGwgbm90IGJlIGhpZGRlbi5cbiAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPCB0aGlzLl9yZWNlbnRLZXlkb3duQWN0aXZlVW50aWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faGlkZVRvb2x0aXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3Rib3hLZXlkb3duKCkge1xuICAgIHRoaXMuX3JlY2VudEtleWRvd25BY3RpdmVVbnRpbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMTAwO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd1Rvb2x0aXAoaXRlbTogUGFwZXJJY29uSXRlbUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0KTtcbiAgICAgIHRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuX3Rvb2x0aXA7XG4gICAgY29uc3QgbGlzdGJveCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInBhcGVyLWxpc3Rib3hcIikhO1xuICAgIGxldCB0b3AgPSBpdGVtLm9mZnNldFRvcCArIDc7XG4gICAgaWYgKGxpc3Rib3guY29udGFpbnMoaXRlbSkpIHtcbiAgICAgIHRvcCAtPSBsaXN0Ym94LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgdG9vbHRpcC5pbm5lckhUTUwgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS10ZXh0XCIpIS5pbm5lckhUTUw7XG4gICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRvb2x0aXAuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBgJHtpdGVtLm9mZnNldExlZnQgKyBpdGVtLmNsaWVudFdpZHRoICsgMTJ9cHhgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZVRvb2x0aXAoKSB7XG4gICAgLy8gRGVsYXkgaXQgYSBsaXR0bGUgaW4gY2FzZSBvdGhlciBldmVudHMgYXJlIHBlbmRpbmcgcHJvY2Vzc2luZy5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXBIaWRlVGltZW91dCkge1xuICAgICAgdGhpcy5fdG9vbHRpcEhpZGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl90b29sdGlwSGlkZVRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNob3dOb3RpZmljYXRpb25EcmF3ZXIoKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1zaG93LW5vdGlmaWNhdGlvbnNcIik7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFeHRlcm5hbEFwcENvbmZpZ3VyYXRpb24oZXY6IEV2ZW50KSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmhhc3MuYXV0aC5leHRlcm5hbCEuZmlyZU1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJjb25maWdfc2NyZWVuL3Nob3dcIixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZVNpZGViYXIoKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy10b2dnbGUtbWVudVwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlclBhbmVsKHVybFBhdGgsIGljb24sIHRpdGxlKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YVxuICAgICAgICBhcmlhLXJvbGU9XCJvcHRpb25cIlxuICAgICAgICBocmVmPVwiJHtgLyR7dXJsUGF0aH1gfVwiXG4gICAgICAgIGRhdGEtcGFuZWw9XCIke3VybFBhdGh9XCJcbiAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pY29uLWl0ZW1cbiAgICAgICAgICBAbW91c2VlbnRlcj0ke3RoaXMuX2l0ZW1Nb3VzZUVudGVyfVxuICAgICAgICAgIEBtb3VzZWxlYXZlPSR7dGhpcy5faXRlbU1vdXNlTGVhdmV9XG4gICAgICAgID5cbiAgICAgICAgICA8aGEtaWNvbiBzbG90PVwiaXRlbS1pY29uXCIgLmljb249XCIke2ljb259XCI+PC9oYS1pY29uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10ZXh0XCI+JHt0aXRsZX08L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgPC9hPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkge1xuICAgICAgICB3aWR0aDogMjU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW51IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgLm1lbnUge1xuICAgICAgICB3aWR0aDogMjU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZW51IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjNweDtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtleHBhbmRlZF1bX3J0bF0pIC5tZW51IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgOmhvc3QoW2V4cGFuZGVkXSkgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbGlzdGJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC40cmVtO1xuICAgICAgICBoZWlnaHQ6IDAuNHJlbTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbGlzdGJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zY3JvbGxiYXItdGh1bWItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTk2cHgpO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogdmFyKC0tc2Nyb2xsYmFyLXRodW1iLWNvbG9yKSB0cmFuc3BhcmVudDtcbiAgICAgICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDRweCA4cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjQwcHg7XG4gICAgICB9XG4gICAgICA6aG9zdChbX3J0bF0pIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogYXV0bztcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAgIH1cblxuICAgICAgaGEtaWNvbltzbG90PVwiaXRlbS1pY29uXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbTpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1zZWxlY3RlZC1pY29uLWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMC4xMjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNW1zIGxpbmVhcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIC5pcm9uLXNlbGVjdGVkIHBhcGVyLWljb24taXRlbVtwcmVzc2VkXTpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjM3O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIGEuaXJvbi1zZWxlY3RlZCBwYXBlci1pY29uLWl0ZW0gaGEtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLWljb24tY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBhLmlyb24tc2VsZWN0ZWQgLml0ZW0tdGV4dCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyLXNlbGVjdGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWl0ZW0gLml0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICA6aG9zdChbZXhwYW5kZWRdKSBwYXBlci1pY29uLWl0ZW0gLml0ZW0tdGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuZGl2aWRlciB7XG4gICAgICAgIGJvdHRvbTogMTEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgIH1cbiAgICAgIC5kaXZpZGVyOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbnMge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubm90aWZpY2F0aW9ucyAuaXRlbS10ZXh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIHtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW19ydGxdKSAucHJvZmlsZSBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IGF1dG87XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICAgIH1cbiAgICAgIC5wcm9maWxlIC5pdGVtLXRleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICAgOmhvc3QoW19ydGxdKSAucHJvZmlsZSAuaXRlbS10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24tYmFkZ2Uge1xuICAgICAgICBtaW4td2lkdGg6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1pY29uICsgLm5vdGlmaWNhdGlvbi1iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAxNHB4O1xuICAgICAgICBsZWZ0OiAyNnB4O1xuICAgICAgICBmb250LXNpemU6IDAuNjVlbTtcbiAgICAgIH1cblxuICAgICAgLnNwYWNlciB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAuc3ViaGVhZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgLmRldi10b29scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIHdpZHRoOiAyNTZweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cblxuICAgICAgLmRldi10b29scyBhIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItaWNvbi1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC50b29sdGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW19ydGxdKSAubWVudSBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc2lkZWJhclwiOiBIYVNpZGViYXI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2lkZWJhclwiLCBIYVNpZGViYXIpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL2RhdGEvdXNlclwiO1xuaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHRvZ2dsZUF0dHJpYnV0ZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3RvZ2dsZV9hdHRyaWJ1dGVcIjtcblxuY29uc3QgY29tcHV0ZUluaXRpYWxzID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoIW5hbWUpIHtcbiAgICByZXR1cm4gXCJ1c2VyXCI7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBuYW1lXG4gICAgICAudHJpbSgpXG4gICAgICAvLyBTcGxpdCBieSBzcGFjZSBhbmQgdGFrZSBmaXJzdCAzIHdvcmRzXG4gICAgICAuc3BsaXQoXCIgXCIpXG4gICAgICAuc2xpY2UoMCwgMylcbiAgICAgIC8vIE9mIGVhY2ggd29yZCwgdGFrZSBmaXJzdCBsZXR0ZXJcbiAgICAgIC5tYXAoKHMpID0+IHMuc3Vic3RyKDAsIDEpKVxuICAgICAgLmpvaW4oXCJcIilcbiAgKTtcbn07XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtdXNlci1iYWRnZVwiKVxuY2xhc3MgU3RhdGVCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdXNlcj86IFVzZXIgfCBDdXJyZW50VXNlcjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgdXNlciA9IHRoaXMudXNlcjtcbiAgICBjb25zdCBpbml0aWFscyA9IHVzZXIgPyBjb21wdXRlSW5pdGlhbHModXNlci5uYW1lKSA6IFwiP1wiO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtpbml0aWFsc31cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRvZ2dsZUF0dHJpYnV0ZShcbiAgICAgIHRoaXMsXG4gICAgICBcImxvbmdcIixcbiAgICAgICh0aGlzLnVzZXIgPyBjb21wdXRlSW5pdGlhbHModGhpcy51c2VyLm5hbWUpIDogXCI/XCIpLmxlbmd0aCA+IDJcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbG9uZ10pIHtcbiAgICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtdXNlci1iYWRnZVwiOiBTdGF0ZUJhZGdlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBFeHRlcm5hbE1lc3NhZ2luZyB9IGZyb20gXCIuL2V4dGVybmFsX21lc3NhZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsQ29uZmlnIHtcbiAgaGFzU2V0dGluZ3NTY3JlZW46IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRFeHRlcm5hbENvbmZpZyA9IChcbiAgYnVzOiBFeHRlcm5hbE1lc3NhZ2luZ1xuKTogUHJvbWlzZTxFeHRlcm5hbENvbmZpZz4gPT4ge1xuICBpZiAoIWJ1cy5jYWNoZS5jZmcpIHtcbiAgICBidXMuY2FjaGUuY2ZnID0gYnVzLnNlbmRNZXNzYWdlPEV4dGVybmFsQ29uZmlnPih7XG4gICAgICB0eXBlOiBcImNvbmZpZy9nZXRcIixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYnVzLmNhY2hlLmNmZztcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBS0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFlQTtBQVpBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUlBOztBQXNqQkE7QUFwakJBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFlQTtBQU9BO0FBU0E7QUF3QkE7QUFtQkE7QUFRQTtBQVFBO0FBbkdBO0FBS0E7QUFEQTtBQUNBO0FBcUJBO0FBQUE7QUFTQTtBQUFBO0FBT0E7QUFvQ0E7QUFVQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBcUJBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFnQkE7QUFFQTtBQUFBO0FBQ0E7QUE0T0E7OztBQUFBO0FBcGtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFpUUE7QUFIQTtBQUNBO0FBQ0E7QUFTQTtBQWlUQTtBQUFBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqckJBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTs7QUF3Q0E7QUFyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBa0JBOzs7QUFBQTtBQXRDQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUF3Q0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=