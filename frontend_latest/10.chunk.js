(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/resources/markdown_worker.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/resources/markdown_worker.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["renderMarkdown"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "03fd490b0cd140cde099.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;
    if (d.type !== 'RPC') { return; }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [], len = arguments.length;
      while ( len-- ) params[ len ] = arguments[ len ];

      return new Promise(function (a, b) {
      var id = ++c;
      callbacks[id] = [a, b];
      worker.postMessage({
        type: 'RPC',
        id: id,
        method: method,
        params: params
      });
    });
    };
  });
}

module.exports = addMethods;
//# sourceMappingURL=rpc-wrapper.js.map


/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
const tests = [60, 60, 24, 7];
const langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options = {}) {
    const compareTime = options.compareTime || new Date();
    let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
    const tense = delta >= 0 ? "past" : "future";
    delta = Math.abs(delta);
    let timeDesc;
    for (let i = 0; i < tests.length; i++) {
        if (delta < tests[i]) {
            delta = Math.floor(delta);
            timeDesc = localize(`ui.components.relative_time.duration.${langKey[i]}`, "count", delta);
            break;
        }
        delta /= tests[i];
    }
    if (timeDesc === undefined) {
        delta = Math.floor(delta);
        timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
    }
    return options.includeTense === false
        ? timeDesc
        : localize(`ui.components.relative_time.${tense}`, "time", timeDesc);
}


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


class HaCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        background: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        border-radius: var(--ha-card-border-radius, 2px);
        box-shadow: var(
          --ha-card-box-shadow,
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12),
          0 3px 1px -2px rgba(0, 0, 0, 0.2)
        );
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out;
        position: relative;
      }

      .card-header,
      :host ::slotted(.card-header) {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        padding: 24px 16px 16px;
        display: block;
      }

      :host ::slotted(.card-content:not(:first-child)),
      slot:not(:first-child)::slotted(.card-content) {
        padding-top: 0px;
        margin-top: -8px;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }
    `;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this.header
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <div class="card-header">${this.header}</div>
          `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``}
      <slot></slot>
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaCard.prototype, "header", void 0);
customElements.define("ha-card", HaCard);


/***/ }),

/***/ "./src/components/ha-markdown.ts":
/*!***************************************!*\
  !*** ./src/components/ha-markdown.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workerize-loader!../resources/markdown_worker */ "./node_modules/workerize-loader/dist/index.js!./src/resources/markdown_worker.ts");
/* harmony import */ var workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies


let worker;
let HaMarkdown = class HaMarkdown extends lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"] {
    constructor() {
        super(...arguments);
        this.content = "";
        this.allowSvg = false;
        this._resize = () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
    }
    update(changedProps) {
        super.update(changedProps);
        if (!worker) {
            worker = workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default()();
        }
        this._render();
    }
    async _render() {
        this.innerHTML = await worker.renderMarkdown(this.content, {
            breaks: true,
            gfm: true,
            tables: true,
        }, {
            allowSvg: this.allowSvg,
        });
        this._resize();
        const walker = document.createTreeWalker(this, 1 /* SHOW_ELEMENT */, null, false);
        while (walker.nextNode()) {
            const node = walker.currentNode;
            // Open external links in a new window
            if (node instanceof HTMLAnchorElement &&
                node.host !== document.location.host) {
                node.target = "_blank";
                // protect referrer on external links and deny window.opener access for security reasons
                // (see https://mathiasbynens.github.io/rel-noopener/)
                node.rel = "noreferrer noopener";
                // Fire a resize event when images loaded to notify content resized
            }
            else if (node) {
                node.addEventListener("load", this._resize);
            }
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaMarkdown.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], HaMarkdown.prototype, "allowSvg", void 0);
HaMarkdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-markdown")
], HaMarkdown);


/***/ }),

/***/ "./src/components/ha-paper-icon-button-prev.ts":
/*!*****************************************************!*\
  !*** ./src/components/ha-paper-icon-button-prev.ts ***!
  \*****************************************************/
/*! exports provided: HaPaperIconButtonPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonPrev", function() { return HaPaperIconButtonPrev; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");

const paperIconButtonClass = customElements.get("paper-icon-button");
class HaPaperIconButtonPrev extends paperIconButtonClass {
    connectedCallback() {
        super.connectedCallback();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            this.icon =
                window.getComputedStyle(this).direction === "ltr"
                    ? "hass:chevron-left"
                    : "hass:chevron-right";
        }, 100);
    }
}
customElements.define("ha-paper-icon-button-prev", HaPaperIconButtonPrev);


/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







/*
 * @appliesMixin LocalizeMixin
 */
class HaRelativeTime extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get properties() {
    return {
      hass: Object,
      datetime: {
        type: String,
        observer: "datetimeChanged",
      },

      datetimeObj: {
        type: Object,
        observer: "datetimeObjChanged",
      },

      parsedDateTime: Object,
    };
  }

  constructor() {
    super();
    this.updateRelative = this.updateRelative.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    // update every 60 seconds
    this.updateInterval = setInterval(this.updateRelative, 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.updateInterval);
  }

  datetimeChanged(newVal) {
    this.parsedDateTime = newVal ? new Date(newVal) : null;

    this.updateRelative();
  }

  datetimeObjChanged(newVal) {
    this.parsedDateTime = newVal;

    this.updateRelative();
  }

  updateRelative() {
    const root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);
    if (!this.parsedDateTime) {
      root.innerHTML = this.localize("ui.components.relative_time.never");
    } else {
      root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
    }
  }
}

customElements.define("ha-relative-time", HaRelativeTime);


/***/ }),

/***/ "./src/dialogs/notifications/configurator-notification-item.ts":
/*!*********************************************************************!*\
  !*** ./src/dialogs/notifications/configurator-notification-item.ts ***!
  \*********************************************************************/
/*! exports provided: HuiConfiguratorNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiConfiguratorNotificationItem", function() { return HuiConfiguratorNotificationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");





let HuiConfiguratorNotificationItem = class HuiConfiguratorNotificationItem extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        if (!this.hass || !this.notification) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <notification-item-template>
        <span slot="header">${this.hass.localize("domain.configurator")}</span>

        <div>
          ${this.hass.localize("ui.notification_drawer.click_to_configure", "entity", this.notification.attributes.friendly_name)}
        </div>

        <mwc-button slot="actions" @click="${this._handleClick}"
          >${this.hass.localize(`state.configurator.${this.notification.state}`)}</mwc-button
        >
      </notification-item-template>
    `;
    }
    _handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", {
            entityId: this.notification.entity_id,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiConfiguratorNotificationItem.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiConfiguratorNotificationItem.prototype, "notification", void 0);
HuiConfiguratorNotificationItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("configurator-notification-item")
], HuiConfiguratorNotificationItem);



/***/ }),

/***/ "./src/dialogs/notifications/notification-drawer.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/notifications/notification-drawer.js ***!
  \**********************************************************/
/*! exports provided: HuiNotificationDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationDrawer", function() { return HuiNotificationDrawer; });
/* harmony import */ var _polymer_app_layout_app_drawer_app_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-drawer/app-drawer */ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _notification_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-item */ "./src/dialogs/notifications/notification-item.ts");
/* harmony import */ var _components_ha_paper_icon_button_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-prev */ "./src/components/ha-paper-icon-button-prev.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_persistent_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/persistent_notification */ "./src/data/persistent_notification.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class HuiNotificationDrawer extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"])(
  Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])
) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="paper-material-styles">
      app-toolbar {
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        min-height: 64px;
        width: calc(100% - 32px);
      }

      .notifications {
        overflow-y: auto;
        padding-top: 16px;
        height: calc(100% - 65px);
        box-sizing: border-box;
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      }

      .notification {
        padding: 0 16px 16px;
      }

      .empty {
        padding: 16px;
        text-align: center;
      }
    </style>
    <app-drawer id='drawer' opened="{{open}}" disable-swipe align="start">
      <app-toolbar>
        <div main-title>[[localize('ui.notification_drawer.title')]]</div>
        <ha-paper-icon-button-prev on-click="_closeDrawer"></paper-icon-button>
      </app-toolbar>
      <div class="notifications">
        <template is="dom-if" if="[[!_empty(notifications)]]">
          <dom-repeat items="[[notifications]]">
            <template>
              <div class="notification">
                <notification-item hass="[[hass]]" notification="[[item]]"></notification-item>
              </div>
            </template>
          </dom-repeat>
        </template>
        <template is="dom-if" if="[[_empty(notifications)]]">
          <div class="empty">[[localize('ui.notification_drawer.empty')]]<div>
        </template>
      </div>
    </app-drawer>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      open: {
        type: Boolean,
        observer: "_openChanged",
      },
      notifications: {
        type: Array,
        computed: "_computeNotifications(open, hass, _notificationsBackend)",
      },
      _notificationsBackend: {
        type: Array,
        value: [],
      },
    };
  }

  ready() {
    super.ready();
    window.addEventListener("location-changed", () => {
      // close drawer when we navigate away.
      if (this.open) {
        this.open = false;
      }
    });
  }

  _closeDrawer(ev) {
    ev.stopPropagation();
    this.open = false;
  }

  _empty(notifications) {
    return notifications.length === 0;
  }

  _openChanged(open) {
    if (open) {
      // Render closed then animate open
      this._unsubNotifications = Object(_data_persistent_notification__WEBPACK_IMPORTED_MODULE_10__["subscribeNotifications"])(
        this.hass.connection,
        (notifications) => {
          this._notificationsBackend = notifications;
        }
      );
    } else if (this._unsubNotifications) {
      this._unsubNotifications();
      this._unsubNotifications = undefined;
    }
  }

  _computeNotifications(open, hass, notificationsBackend) {
    if (!open) {
      return [];
    }

    const configuratorEntities = Object.keys(hass.states)
      .filter((entityId) => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__["computeDomain"])(entityId) === "configurator")
      .map((entityId) => hass.states[entityId]);

    return notificationsBackend.concat(configuratorEntities);
  }

  showDialog({ narrow }) {
    this.style.setProperty(
      "--app-drawer-width",
      narrow ? window.innerWidth + "px" : "500px"
    );
    this.$.drawer.open();
  }
}
customElements.define("notification-drawer", HuiNotificationDrawer);


/***/ }),

/***/ "./src/dialogs/notifications/notification-item-template.ts":
/*!*****************************************************************!*\
  !*** ./src/dialogs/notifications/notification-item-template.ts ***!
  \*****************************************************************/
/*! exports provided: HuiNotificationItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationItemTemplate", function() { return HuiNotificationItemTemplate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");



let HuiNotificationItemTemplate = class HuiNotificationItemTemplate extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card>
        <div class="header"><slot name="header"></slot></div>
        <div class="contents"><slot></slot></div>
        <div class="actions"><slot name="actions"></slot></div>
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .contents {
        padding: 16px;
        -ms-user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }

      ha-card .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        line-height: 32px;
        /* end paper-font-headline style */

        color: var(--primary-text-color);
        padding: 16px 16px 0;
      }

      .actions {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }

      ::slotted(.primary) {
        color: var(--primary-color);
      }
    `;
    }
};
HuiNotificationItemTemplate = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("notification-item-template")
], HuiNotificationItemTemplate);



/***/ }),

/***/ "./src/dialogs/notifications/notification-item.ts":
/*!********************************************************!*\
  !*** ./src/dialogs/notifications/notification-item.ts ***!
  \********************************************************/
/*! exports provided: HuiNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiNotificationItem", function() { return HuiNotificationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _configurator_notification_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configurator-notification-item */ "./src/dialogs/notifications/configurator-notification-item.ts");
/* harmony import */ var _persistent_notification_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistent-notification-item */ "./src/dialogs/notifications/persistent-notification-item.ts");




let HuiNotificationItem = class HuiNotificationItem extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    shouldUpdate(changedProps) {
        if (!this.hass || !this.notification || changedProps.has("notification")) {
            return true;
        }
        return false;
    }
    render() {
        if (!this.hass || !this.notification) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return "entity_id" in this.notification
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
          <configurator-notification-item
            .hass="${this.hass}"
            .notification="${this.notification}"
          ></configurator-notification-item>
        `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
          <persistent-notification-item
            .hass="${this.hass}"
            .notification="${this.notification}"
          ></persistent-notification-item>
        `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiNotificationItem.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiNotificationItem.prototype, "notification", void 0);
HuiNotificationItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("notification-item")
], HuiNotificationItem);



/***/ }),

/***/ "./src/dialogs/notifications/persistent-notification-item.ts":
/*!*******************************************************************!*\
  !*** ./src/dialogs/notifications/persistent-notification-item.ts ***!
  \*******************************************************************/
/*! exports provided: HuiPersistentNotificationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPersistentNotificationItem", function() { return HuiPersistentNotificationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _notification_item_template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification-item-template */ "./src/dialogs/notifications/notification-item-template.ts");







let HuiPersistentNotificationItem = class HuiPersistentNotificationItem extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        if (!this.hass || !this.notification) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <notification-item-template>
        <span slot="header">
          ${this.notification.title || this.notification.notification_id}
        </span>

        <ha-markdown content="${this.notification.message}"></ha-markdown>

        <div class="time">
          <span>
            <ha-relative-time
              .hass="${this.hass}"
              .datetime="${this.notification.created_at}"
            ></ha-relative-time>
            <paper-tooltip
              >${this._computeTooltip(this.hass, this.notification)}</paper-tooltip
            >
          </span>
        </div>

        <mwc-button slot="actions" @click="${this._handleDismiss}"
          >${this.hass.localize("ui.card.persistent_notification.dismiss")}</mwc-button
        >
      </notification-item-template>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .time {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
      ha-relative-time {
        color: var(--secondary-text-color);
      }
      a {
        color: var(--primary-color);
      }
      ha-markdown {
        overflow-wrap: break-word;
      }
    `;
    }
    _handleDismiss() {
        this.hass.callService("persistent_notification", "dismiss", {
            notification_id: this.notification.notification_id,
        });
    }
    _computeTooltip(hass, notification) {
        if (!hass || !notification) {
            return undefined;
        }
        const d = new Date(notification.created_at);
        return d.toLocaleDateString(hass.language, {
            year: "numeric",
            month: "short",
            day: "numeric",
            minute: "numeric",
            hour: "numeric",
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPersistentNotificationItem.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPersistentNotificationItem.prototype, "notification", void 0);
HuiPersistentNotificationItem = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("persistent-notification-item")
], HuiPersistentNotificationItem);



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
const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
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
      fire(type, detail, options) {
        options = options || {};
        return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
      }
    }
);


/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      static get properties() {
        return {
          hass: Object,

          /**
           * Translates a string to the current `language`. Any parameters to the
           * string should be passed in order, as follows:
           * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
           */
          localize: {
            type: Function,
            computed: "__computeLocalize(hass.localize)",
          },
        };
      }

      __computeLocalize(localize) {
        return localize;
      }
    }
));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLW1hcmtkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLXByZXYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9ub3RpZmljYXRpb25zL2NvbmZpZ3VyYXRvci1ub3RpZmljYXRpb24taXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1kcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbi1pdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL25vdGlmaWNhdGlvbnMvcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdFx0XHR2YXIgYWRkTWV0aG9kcyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzXCIpXG5cdFx0XHRcdHZhciBtZXRob2RzID0gW1wicmVuZGVyTWFya2Rvd25cIl1cblx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgdyA9IG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzZmQ0OTBiMGNkMTQwY2RlMDk5Lndvcmtlci5qc1wiLCB7IG5hbWU6IFwiW2hhc2hdLndvcmtlci5qc1wiIH0pXG5cdFx0XHRcdFx0YWRkTWV0aG9kcyh3LCBtZXRob2RzKVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiB3XG5cdFx0XHRcdH1cblx0XHRcdCIsImZ1bmN0aW9uIGFkZE1ldGhvZHMod29ya2VyLCBtZXRob2RzKSB7XG4gIHZhciBjID0gMDtcbiAgdmFyIGNhbGxiYWNrcyA9IHt9O1xuICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGQgPSBlLmRhdGE7XG4gICAgaWYgKGQudHlwZSAhPT0gJ1JQQycpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoZC5pZCkge1xuICAgICAgdmFyIGYgPSBjYWxsYmFja3NbZC5pZF07XG5cbiAgICAgIGlmIChmKSB7XG4gICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbZC5pZF07XG5cbiAgICAgICAgaWYgKGQuZXJyb3IpIHtcbiAgICAgICAgICBmWzFdKE9iamVjdC5hc3NpZ24oRXJyb3IoZC5lcnJvci5tZXNzYWdlKSwgZC5lcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZbMF0oZC5yZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0RXZlbnQoZC5tZXRob2QsIGZhbHNlLCBmYWxzZSk7XG4gICAgICBldnQuZGF0YSA9IGQucGFyYW1zO1xuICAgICAgd29ya2VyLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9XG4gIH0pO1xuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHdvcmtlclttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgd2hpbGUgKCBsZW4tLSApIHBhcmFtc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciBpZCA9ICsrYztcbiAgICAgIGNhbGxiYWNrc1tpZF0gPSBbYSwgYl07XG4gICAgICB3b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnUlBDJyxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIH07XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1ldGhvZHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ycGMtd3JhcHBlci5qcy5tYXBcbiIsImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCB7IFVwZGF0aW5nRWxlbWVudCwgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4XG4vLyBAdHMtaWdub3JlXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcGxpY2l0LWRlcGVuZGVuY2llc1xuaW1wb3J0IG1hcmtkb3duV29ya2VyIGZyb20gXCJ3b3JrZXJpemUtbG9hZGVyIS4uL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXJcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxubGV0IHdvcmtlcjogYW55IHwgdW5kZWZpbmVkO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLW1hcmtkb3duXCIpXG5jbGFzcyBIYU1hcmtkb3duIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbnRlbnQgPSBcIlwiO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhbGxvd1N2ZyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXdvcmtlcikge1xuICAgICAgd29ya2VyID0gbWFya2Rvd25Xb3JrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbmRlcigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IGF3YWl0IHdvcmtlci5yZW5kZXJNYXJrZG93bihcbiAgICAgIHRoaXMuY29udGVudCxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICBnZm06IHRydWUsXG4gICAgICAgIHRhYmxlczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsbG93U3ZnOiB0aGlzLmFsbG93U3ZnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLl9yZXNpemUoKTtcblxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICB0aGlzLFxuICAgICAgMSAvKiBTSE9XX0VMRU1FTlQgKi8sXG4gICAgICBudWxsLFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuXG4gICAgICAvLyBPcGVuIGV4dGVybmFsIGxpbmtzIGluIGEgbmV3IHdpbmRvd1xuICAgICAgaWYgKFxuICAgICAgICBub2RlIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiZcbiAgICAgICAgbm9kZS5ob3N0ICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0XG4gICAgICApIHtcbiAgICAgICAgbm9kZS50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgICAgIC8vIHByb3RlY3QgcmVmZXJyZXIgb24gZXh0ZXJuYWwgbGlua3MgYW5kIGRlbnkgd2luZG93Lm9wZW5lciBhY2Nlc3MgZm9yIHNlY3VyaXR5IHJlYXNvbnNcbiAgICAgICAgLy8gKHNlZSBodHRwczovL21hdGhpYXNieW5lbnMuZ2l0aHViLmlvL3JlbC1ub29wZW5lci8pXG4gICAgICAgIG5vZGUucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG5cbiAgICAgICAgLy8gRmlyZSBhIHJlc2l6ZSBldmVudCB3aGVuIGltYWdlcyBsb2FkZWQgdG8gbm90aWZ5IGNvbnRlbnQgcmVzaXplZFxuICAgICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5fcmVzaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNpemUgPSAoKSA9PiBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLW1hcmtkb3duXCI6IEhhTWFya2Rvd247XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckljb25CdXR0b25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5cbmNvbnN0IHBhcGVySWNvbkJ1dHRvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWljb24tYnV0dG9uXCJcbikgYXMgQ29uc3RydWN0b3I8UGFwZXJJY29uQnV0dG9uRWxlbWVudD47XG5cbmV4cG9ydCBjbGFzcyBIYVBhcGVySWNvbkJ1dHRvblByZXYgZXh0ZW5kcyBwYXBlckljb25CdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyBcImhhc3M6Y2hldnJvbi1sZWZ0XCJcbiAgICAgICAgICA6IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCI7XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiOiBIYVBhcGVySWNvbkJ1dHRvblByZXY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItaWNvbi1idXR0b24tcHJldlwiLCBIYVBhcGVySWNvbkJ1dHRvblByZXYpO1xuIiwiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUmVsYXRpdmVUaW1lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBkYXRldGltZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkRGF0ZVRpbWU6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlID0gdGhpcy51cGRhdGVSZWxhdGl2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyB1cGRhdGUgZXZlcnkgNjAgc2Vjb25kc1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVJlbGF0aXZlLCA2MDAwMCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH1cblxuICBkYXRldGltZUNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbCA/IG5ldyBEYXRlKG5ld1ZhbCkgOiBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgZGF0ZXRpbWVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICB1cGRhdGVSZWxhdGl2ZSgpIHtcbiAgICBjb25zdCByb290ID0gZG9tKHRoaXMpO1xuICAgIGlmICghdGhpcy5wYXJzZWREYXRlVGltZSkge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSB0aGlzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLm5ldmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHJlbGF0aXZlVGltZSh0aGlzLnBhcnNlZERhdGVUaW1lLCB0aGlzLmxvY2FsaXplKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcmVsYXRpdmUtdGltZVwiLCBIYVJlbGF0aXZlVGltZSk7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IFwiLi9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBQZXJzaXRlbnROb3RpZmljYXRpb25FbnRpdHkgfSBmcm9tIFwiLi4vLi4vZGF0YS9wZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcImNvbmZpZ3VyYXRvci1ub3RpZmljYXRpb24taXRlbVwiKVxuZXhwb3J0IGNsYXNzIEh1aUNvbmZpZ3VyYXRvck5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBQZXJzaXRlbnROb3RpZmljYXRpb25FbnRpdHk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLm5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPiR7dGhpcy5oYXNzLmxvY2FsaXplKFwiZG9tYWluLmNvbmZpZ3VyYXRvclwiKX08L3NwYW4+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkubm90aWZpY2F0aW9uX2RyYXdlci5jbGlja190b19jb25maWd1cmVcIixcbiAgICAgICAgICAgIFwiZW50aXR5XCIsXG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbi5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWVcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlQ2xpY2t9XCJcbiAgICAgICAgICA+JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBgc3RhdGUuY29uZmlndXJhdG9yLiR7dGhpcy5ub3RpZmljYXRpb24uc3RhdGV9YFxuICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvbm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNsaWNrKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkOiB0aGlzLm5vdGlmaWNhdGlvbiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpQ29uZmlndXJhdG9yTm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtZHJhd2VyL2FwcC1kcmF3ZXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL25vdGlmaWNhdGlvbi1pdGVtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLXByZXZcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlTm90aWZpY2F0aW9ucyB9IGZyb20gXCIuLi8uLi9kYXRhL3BlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkRyYXdlciBleHRlbmRzIEV2ZW50c01peGluKFxuICBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KVxuKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgbWluLWhlaWdodDogNjRweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9ucyB7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuZW1wdHkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8YXBwLWRyYXdlciBpZD0nZHJhd2VyJyBvcGVuZWQ9XCJ7e29wZW59fVwiIGRpc2FibGUtc3dpcGUgYWxpZ249XCJzdGFydFwiPlxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgndWkubm90aWZpY2F0aW9uX2RyYXdlci50aXRsZScpXV08L2Rpdj5cbiAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLXByZXYgb24tY2xpY2s9XCJfY2xvc2VEcmF3ZXJcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZG9tLXJlcGVhdCBpdGVtcz1cIltbbm90aWZpY2F0aW9uc11dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8bm90aWZpY2F0aW9uLWl0ZW0gaGFzcz1cIltbaGFzc11dXCIgbm90aWZpY2F0aW9uPVwiW1tpdGVtXV1cIj48L25vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kb20tcmVwZWF0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VtcHR5KG5vdGlmaWNhdGlvbnMpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW1wdHlcIj5bW2xvY2FsaXplKCd1aS5ub3RpZmljYXRpb25fZHJhd2VyLmVtcHR5JyldXTxkaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FwcC1kcmF3ZXI+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgb3Blbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogXCJfb3BlbkNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBub3RpZmljYXRpb25zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3BlbiwgaGFzcywgX25vdGlmaWNhdGlvbnNCYWNrZW5kKVwiLFxuICAgICAgfSxcbiAgICAgIF9ub3RpZmljYXRpb25zQmFja2VuZDoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvY2F0aW9uLWNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgLy8gY2xvc2UgZHJhd2VyIHdoZW4gd2UgbmF2aWdhdGUgYXdheS5cbiAgICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfY2xvc2VEcmF3ZXIoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIF9lbXB0eShub3RpZmljYXRpb25zKSB7XG4gICAgcmV0dXJuIG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgX29wZW5DaGFuZ2VkKG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgLy8gUmVuZGVyIGNsb3NlZCB0aGVuIGFuaW1hdGUgb3BlblxuICAgICAgdGhpcy5fdW5zdWJOb3RpZmljYXRpb25zID0gc3Vic2NyaWJlTm90aWZpY2F0aW9ucyhcbiAgICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAgIChub3RpZmljYXRpb25zKSA9PiB7XG4gICAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9uc0JhY2tlbmQgPSBub3RpZmljYXRpb25zO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdW5zdWJOb3RpZmljYXRpb25zKSB7XG4gICAgICB0aGlzLl91bnN1Yk5vdGlmaWNhdGlvbnMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViTm90aWZpY2F0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZU5vdGlmaWNhdGlvbnMob3BlbiwgaGFzcywgbm90aWZpY2F0aW9uc0JhY2tlbmQpIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWd1cmF0b3JFbnRpdGllcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKVxuICAgICAgLmZpbHRlcigoZW50aXR5SWQpID0+IGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImNvbmZpZ3VyYXRvclwiKVxuICAgICAgLm1hcCgoZW50aXR5SWQpID0+IGhhc3Muc3RhdGVzW2VudGl0eUlkXSk7XG5cbiAgICByZXR1cm4gbm90aWZpY2F0aW9uc0JhY2tlbmQuY29uY2F0KGNvbmZpZ3VyYXRvckVudGl0aWVzKTtcbiAgfVxuXG4gIHNob3dEaWFsb2coeyBuYXJyb3cgfSkge1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBcIi0tYXBwLWRyYXdlci13aWR0aFwiLFxuICAgICAgbmFycm93ID8gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCIgOiBcIjUwMHB4XCJcbiAgICApO1xuICAgIHRoaXMuJC5kcmF3ZXIub3BlbigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJub3RpZmljYXRpb24tZHJhd2VyXCIsIEh1aU5vdGlmaWNhdGlvbkRyYXdlcik7XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiKVxuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkl0ZW1UZW1wbGF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50c1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj48c2xvdCBuYW1lPVwiYWN0aW9uc1wiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiB0ZXh0O1xuICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCAuaGVhZGVyIHtcbiAgICAgICAgLyogc3RhcnQgcGFwZXItZm9udC1oZWFkbGluZSBzdHlsZSAqL1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJOb3RvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOyAvKiBPUyBYIHN1YnBpeGVsIEFBIGJsZWVkIGJ1ZyAqL1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIC8qIGVuZCBwYXBlci1mb250LWhlYWRsaW5lIHN0eWxlICovXG5cbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAwO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgOjpzbG90dGVkKC5wcmltYXJ5KSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiOiBIdWlOb3RpZmljYXRpb25JdGVtVGVtcGxhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi9jb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cIjtcbmltcG9ydCBcIi4vcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJub3RpZmljYXRpb24taXRlbVwiKVxuZXhwb3J0IGNsYXNzIEh1aU5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBIYXNzRW50aXR5IHwgUGVyc2lzdGVudE5vdGlmaWNhdGlvbjtcblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5ub3RpZmljYXRpb24gfHwgY2hhbmdlZFByb3BzLmhhcyhcIm5vdGlmaWNhdGlvblwiKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLm5vdGlmaWNhdGlvbikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJlbnRpdHlfaWRcIiBpbiB0aGlzLm5vdGlmaWNhdGlvblxuICAgICAgPyBodG1sYFxuICAgICAgICAgIDxjb25maWd1cmF0b3Itbm90aWZpY2F0aW9uLWl0ZW1cbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb249XCIke3RoaXMubm90aWZpY2F0aW9ufVwiXG4gICAgICAgICAgPjwvY29uZmlndXJhdG9yLW5vdGlmaWNhdGlvbi1pdGVtPlxuICAgICAgICBgXG4gICAgICA6IGh0bWxgXG4gICAgICAgICAgPHBlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW1cbiAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgIC5ub3RpZmljYXRpb249XCIke3RoaXMubm90aWZpY2F0aW9ufVwiXG4gICAgICAgICAgPjwvcGVyc2lzdGVudC1ub3RpZmljYXRpb24taXRlbT5cbiAgICAgICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwibm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpTm90aWZpY2F0aW9uSXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb24taXRlbS10ZW1wbGF0ZVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uLy4uL2RhdGEvcGVyc2lzdGVudF9ub3RpZmljYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJwZXJzaXN0ZW50LW5vdGlmaWNhdGlvbi1pdGVtXCIpXG5leHBvcnQgY2xhc3MgSHVpUGVyc2lzdGVudE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBub3RpZmljYXRpb24/OiBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8bm90aWZpY2F0aW9uLWl0ZW0tdGVtcGxhdGU+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAke3RoaXMubm90aWZpY2F0aW9uLnRpdGxlIHx8IHRoaXMubm90aWZpY2F0aW9uLm5vdGlmaWNhdGlvbl9pZH1cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxoYS1tYXJrZG93biBjb250ZW50PVwiJHt0aGlzLm5vdGlmaWNhdGlvbi5tZXNzYWdlfVwiPjwvaGEtbWFya2Rvd24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgICAgICAgLmRhdGV0aW1lPVwiJHt0aGlzLm5vdGlmaWNhdGlvbi5jcmVhdGVkX2F0fVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXBcbiAgICAgICAgICAgICAgPiR7dGhpcy5fY29tcHV0ZVRvb2x0aXAoXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICl9PC9wYXBlci10b29sdGlwXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bXdjLWJ1dHRvbiBzbG90PVwiYWN0aW9uc1wiIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlRGlzbWlzc31cIlxuICAgICAgICAgID4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuY2FyZC5wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi5kaXNtaXNzXCJcbiAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L25vdGlmaWNhdGlvbi1pdGVtLXRlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAudGltZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgIH1cbiAgICAgIGhhLXJlbGF0aXZlLXRpbWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLW1hcmtkb3duIHtcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRGlzbWlzcygpOiB2b2lkIHtcbiAgICB0aGlzLmhhc3MhLmNhbGxTZXJ2aWNlKFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJkaXNtaXNzXCIsIHtcbiAgICAgIG5vdGlmaWNhdGlvbl9pZDogdGhpcy5ub3RpZmljYXRpb24hLm5vdGlmaWNhdGlvbl9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVUb29sdGlwKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgbm90aWZpY2F0aW9uOiBQZXJzaXN0ZW50Tm90aWZpY2F0aW9uXG4gICk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKCFoYXNzIHx8ICFub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdGlmaWNhdGlvbi5jcmVhdGVkX2F0ISk7XG4gICAgcmV0dXJuIGQudG9Mb2NhbGVEYXRlU3RyaW5nKGhhc3MubGFuZ3VhZ2UsIHtcbiAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICBtaW51dGU6IFwibnVtZXJpY1wiLFxuICAgICAgaG91cjogXCJudW1lcmljXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInBlcnNpc3RlbnQtbm90aWZpY2F0aW9uLWl0ZW1cIjogSHVpUGVyc2lzdGVudE5vdGlmaWNhdGlvbkl0ZW07XG4gIH1cbn1cbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQVNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUE4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTs7QUFDQTtBQUNBO0FBdURBO0FBQ0E7QUF0REE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUF6REE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBO0FBT0E7QUFFQTtBQUdBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQU9BO0FBQ0E7OztBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKQTtBQVNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7QUFDQTtBQUNBO0FBOUNBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBVUE7QUFDQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQS9CQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFTQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBOzs7OztBQVFBO0FBQ0E7OztBQUtBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuRkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=