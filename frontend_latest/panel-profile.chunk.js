(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-profile"],{

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
    ? (dateObj, locales) => dateObj.toLocaleString(locales, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));


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

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu");
// patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183
class HaPaperDropdownClass extends paperDropdownClass {
    ready() {
        super.ready();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            if (window.getComputedStyle(this).direction === "rtl") {
                this.style.textAlign = "right";
            }
        }, 100);
    }
}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);


/***/ }),

/***/ "./src/components/ha-push-notifications-toggle.js":
/*!********************************************************!*\
  !*** ./src/components/ha-push-notifications-toggle.js ***!
  \********************************************************/
/*! exports provided: pushSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushSupported", function() { return pushSupported; });
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_notify_html5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/notify_html5 */ "./src/data/notify_html5.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-switch */ "./src/components/ha-switch.ts");








const pushSupported =
  "serviceWorker" in navigator &&
  "PushManager" in window &&
  (document.location.protocol === "https:" ||
    document.location.hostname === "localhost" ||
    document.location.hostname === "127.0.0.1");

/*
 * @appliesMixin EventsMixin
 */
class HaPushNotificationsToggle extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-switch
        disabled="[[_compDisabled(disabled, loading)]]"
        checked="{{pushChecked}}"
        on-change="handlePushChange"
      ></ha-switch>
    `;
  }

  static get properties() {
    return {
      hass: { type: Object, value: null },
      disabled: {
        type: Boolean,
        value: false,
      },
      pushChecked: {
        type: Boolean,
        value:
          "Notification" in window && Notification.permission === "granted",
      },
      loading: {
        type: Boolean,
        value: true,
      },
    };
  }

  async connectedCallback() {
    super.connectedCallback();

    if (!pushSupported) return;

    try {
      const reg = await navigator.serviceWorker.ready;
      if (!reg.pushManager) {
        return;
      }
      reg.pushManager.getSubscription().then((subscription) => {
        this.loading = false;
        this.pushChecked = !!subscription;
      });
    } catch (err) {
      // We don't set loading to `false` so we remain disabled
    }
  }

  handlePushChange(event) {
    // Somehow this is triggered on Safari on page load causing
    // it to get into a loop and crash the page.
    if (!pushSupported) return;

    if (event.target.checked) {
      this.subscribePushNotifications();
    } else {
      this.unsubscribePushNotifications();
    }
  }

  async subscribePushNotifications() {
    const reg = await navigator.serviceWorker.ready;
    let sub;

    try {
      let browserName;
      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        browserName = "firefox";
      } else {
        browserName = "chrome";
      }

      const name = prompt("What should this device be called ?");
      if (name == null) {
        this.pushChecked = false;
        return;
      }

      let applicationServerKey;
      try {
        applicationServerKey = await Object(_data_notify_html5__WEBPACK_IMPORTED_MODULE_2__["getAppKey"])(this.hass);
      } catch (ex) {
        applicationServerKey = null;
      }

      if (applicationServerKey) {
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey,
        });
      } else {
        sub = await reg.pushManager.subscribe({ userVisibleOnly: true });
      }

      await this.hass.callApi("POST", "notify.html5", {
        subscription: sub,
        browser: browserName,
        name,
      });
    } catch (err) {
      const message = err.message || "Notification registration failed.";
      if (sub) {
        await sub.unsubscribe();
      }

      // eslint-disable-next-line
      console.error(err);

      this.fire("hass-notification", { message });
      this.pushChecked = false;
    }
  }

  async unsubscribePushNotifications() {
    const reg = await navigator.serviceWorker.ready;

    try {
      const sub = await reg.pushManager.getSubscription();

      if (!sub) return;

      await this.hass.callApi("DELETE", "notify.html5", { subscription: sub });
      await sub.unsubscribe();
    } catch (err) {
      const message =
        err.message || "Failed unsubscribing for push notifications.";

      // eslint-disable-next-line
      console.error("Error in unsub push", err);

      this.fire("hass-notification", { message });
      this.pushChecked = true;
    }
  }

  _compDisabled(disabled, loading) {
    return disabled || loading;
  }
}

customElements.define(
  "ha-push-notifications-toggle",
  HaPushNotificationsToggle
);


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
const MwcSwitch = customElements.get("mwc-switch");
let HaSwitch = class HaSwitch extends MwcSwitch {
    firstUpdated() {
        super.firstUpdated();
        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
        this.classList.toggle("slotted", Boolean(this._slot.assignedNodes().length));
    }
    static get styles() {
        return [
            _material_mwc_switch_mwc_switch_css__WEBPACK_IMPORTED_MODULE_3__["style"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb {
          background-color: var(--paper-toggle-button-unchecked-button-color);
          border-color: var(--paper-toggle-button-unchecked-button-color);
        }
        .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track {
          background-color: var(--paper-toggle-button-unchecked-bar-color);
          border-color: var(--paper-toggle-button-unchecked-bar-color);
        }
        :host(.slotted) .mdc-switch {
          margin-right: 24px;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("slot")
], HaSwitch.prototype, "_slot", void 0);
HaSwitch = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-switch")
], HaSwitch);



/***/ }),

/***/ "./src/data/notify_html5.ts":
/*!**********************************!*\
  !*** ./src/data/notify_html5.ts ***!
  \**********************************/
/*! exports provided: getAppKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppKey", function() { return getAppKey; });
function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
const getAppKey = async (hass) => {
    const res = await hass.callWS({
        type: "notify/html5/appkey",
    });
    return res ? urlBase64ToUint8Array(res) : null;
};


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


/***/ }),

/***/ "./src/panels/profile/ha-advanced-mode-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/profile/ha-advanced-mode-card.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");




let AdvancedModeCard = class AdvancedModeCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card>
        <div class="card-header">
          <div class="title">Advanced mode</div>
          <ha-switch
            .checked=${this.coreUserData && this.coreUserData.showAdvanced}
            .disabled=${this.coreUserData === undefined}
            @change=${this._advancedToggled}
          ></ha-switch>
        </div>
        <div class="card-content">
          牧养犬 hides advanced features and options by default. You can make
          these features accessible by checking this toggle. This is a
          user-specific setting and does not impact other users using Home
          Assistant.
        </div>
      </ha-card>
    `;
    }
    async _advancedToggled(ev) {
        Object(_data_frontend__WEBPACK_IMPORTED_MODULE_3__["getOptimisticFrontendUserDataCollection"])(this.hass.connection, "core").save({
            showAdvanced: ev.currentTarget.checked,
        });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .card-header {
        display: flex;
      }
      .title {
        flex: 1;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], AdvancedModeCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], AdvancedModeCard.prototype, "coreUserData", void 0);
AdvancedModeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-advanced-mode-card")
], AdvancedModeCard);


/***/ }),

/***/ "./src/panels/profile/ha-change-password-card.js":
/*!*******************************************************!*\
  !*** ./src/panels/profile/ha-change-password-card.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");











/*
 * @appliesMixin LocalizeMixin
 */
class HaChangePasswordCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style">
        .error {
          color: red;
        }
        .status {
          color: var(--primary-color);
        }
        .error,
        .status {
          position: absolute;
          top: -4px;
        }
        .currentPassword {
          margin-top: -4px;
        }
      </style>
      <div>
        <ha-card
          header="[[localize('ui.panel.profile.change_password.header')]]"
        >
          <div class="card-content">
            <template is="dom-if" if="[[_errorMsg]]">
              <div class="error">[[_errorMsg]]</div>
            </template>
            <template is="dom-if" if="[[_statusMsg]]">
              <div class="status">[[_statusMsg]]</div>
            </template>
            <paper-input
              class="currentPassword"
              label="[[localize('ui.panel.profile.change_password.current_password')]]"
              type="password"
              value="{{_currentPassword}}"
              required
              auto-validate
              error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
            ></paper-input>
            <template is="dom-if" if="[[_currentPassword]]">
              <paper-input
                label="[[localize('ui.panel.profile.change_password.new_password')]]"
                type="password"
                value="{{_password1}}"
                required
                auto-validate
                error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
              ></paper-input>
              <paper-input
                label="[[localize('ui.panel.profile.change_password.confirm_new_password')]]"
                type="password"
                value="{{_password2}}"
                required
                auto-validate
                error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
              ></paper-input>
            </template>
          </div>
          <div class="card-actions">
            <template is="dom-if" if="[[_loading]]">
              <div><paper-spinner active></paper-spinner></div>
            </template>
            <template is="dom-if" if="[[!_loading]]">
              <mwc-button on-click="_changePassword"
                >[[localize('ui.panel.profile.change_password.submit')]]</mwc-button
              >
            </template>
          </div>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      _loading: {
        type: Boolean,
        value: false,
      },

      // Error message when can't talk to server etc
      _statusMsg: String,
      _errorMsg: String,

      _currentPassword: String,
      _password1: String,
      _password2: String,
    };
  }

  ready() {
    super.ready();
    this.addEventListener("keypress", (ev) => {
      this._statusMsg = null;
      if (ev.keyCode === 13) {
        this._changePassword();
      }
    });
  }

  async _changePassword() {
    this._statusMsg = null;
    if (!this._currentPassword || !this._password1 || !this._password2) return;

    if (this._password1 !== this._password2) {
      this._errorMsg = "New password confirmation doesn't match";
      return;
    }

    if (this._currentPassword === this._password1) {
      this._errorMsg = "New password must be different than current password";
      return;
    }

    this._loading = true;
    this._errorMsg = null;

    try {
      await this.hass.callWS({
        type: "config/auth_provider/homeassistant/change_password",
        current_password: this._currentPassword,
        new_password: this._password1,
      });

      this.setProperties({
        _statusMsg: "Password changed successfully",
        _currentPassword: null,
        _password1: null,
        _password2: null,
      });
    } catch (err) {
      this._errorMsg = err.message;
    }

    this._loading = false;
  }
}

customElements.define("ha-change-password-card", HaChangePasswordCard);


/***/ }),

/***/ "./src/panels/profile/ha-force-narrow-row.ts":
/*!***************************************************!*\
  !*** ./src/panels/profile/ha-force-narrow-row.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");





let HaForcedNarrowRow = class HaForcedNarrowRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${this.hass.localize("ui.panel.profile.force_narrow.header")}
        </span>
        <span slot="description">
          ${this.hass.localize("ui.panel.profile.force_narrow.description")}
        </span>
        <ha-switch
          .checked=${this.hass.dockedSidebar === "always_hidden"}
          @change=${this._checkedChanged}
        ></ha-switch>
      </ha-settings-row>
    `;
    }
    async _checkedChanged(ev) {
        const newValue = ev.target.checked;
        if (newValue === (this.hass.dockedSidebar === "always_hidden")) {
            return;
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-dock-sidebar", {
            dock: newValue ? "always_hidden" : "auto",
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaForcedNarrowRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaForcedNarrowRow.prototype, "narrow", void 0);
HaForcedNarrowRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-force-narrow-row")
], HaForcedNarrowRow);


/***/ }),

/***/ "./src/panels/profile/ha-long-lived-access-tokens-card.js":
/*!****************************************************************!*\
  !*** ./src/panels/profile/ha-long-lived-access-tokens-card.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");













/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class HaLongLivedTokens extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        .card-content {
          margin: -1em 0;
        }
        a {
          color: var(--primary-color);
        }
        paper-icon-button {
          color: var(--primary-text-color);
        }
      </style>
      <ha-card
        header="[[localize('ui.panel.profile.long_lived_access_tokens.header')]]"
      >
        <div class="card-content">
          <p>
            [[localize('ui.panel.profile.long_lived_access_tokens.description')]]
            <a
              href="https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests"
              target="_blank"
            >
              [[localize('ui.panel.profile.long_lived_access_tokens.learn_auth_requests')]]
            </a>
          </p>
          <template is="dom-if" if="[[!_tokens.length]]">
            <p>
              [[localize('ui.panel.profile.long_lived_access_tokens.empty_state')]]
            </p>
          </template>
        </div>
        <template is="dom-repeat" items="[[_tokens]]">
          <ha-settings-row two-line>
            <span slot="heading">[[item.client_name]]</span>
            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>
            <paper-icon-button
              icon="hass:delete"
              on-click="_handleDelete"
            ></paper-icon-button>
          </ha-settings-row>
        </template>
        <div class="card-actions">
          <mwc-button on-click="_handleCreate">
            [[localize('ui.panel.profile.long_lived_access_tokens.create')]]
          </mwc-button>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      refreshTokens: Array,
      _tokens: {
        type: Array,
        computed: "_computeTokens(refreshTokens)",
      },
    };
  }

  _computeTokens(refreshTokens) {
    return refreshTokens
      .filter((tkn) => tkn.type === "long_lived_access_token")
      .reverse();
  }

  _formatTitle(name) {
    return this.localize(
      "ui.panel.profile.long_lived_access_tokens.token_title",
      "name",
      name
    );
  }

  _formatCreatedAt(created) {
    return this.localize(
      "ui.panel.profile.long_lived_access_tokens.created_at",
      "date",
      Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(created), this.hass.language)
    );
  }

  async _handleCreate() {
    const name = prompt(
      this.localize("ui.panel.profile.long_lived_access_tokens.prompt_name")
    );
    if (!name) return;
    try {
      const token = await this.hass.callWS({
        type: "auth/long_lived_access_token",
        lifespan: 3650,
        client_name: name,
      });
      prompt(
        this.localize(
          "ui.panel.profile.long_lived_access_tokens.prompt_copy_token"
        ),
        token
      );
      this.fire("hass-refresh-tokens");
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      alert(
        this.localize("ui.panel.profile.long_lived_access_tokens.create_failed")
      );
    }
  }

  async _handleDelete(ev) {
    if (
      !confirm(
        this.localize(
          "ui.panel.profile.long_lived_access_tokens.confirm_delete",
          "name",
          ev.model.item.client_name
        )
      )
    ) {
      return;
    }
    try {
      await this.hass.callWS({
        type: "auth/delete_refresh_token",
        refresh_token_id: ev.model.item.id,
      });
      this.fire("hass-refresh-tokens");
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      alert(
        this.localize("ui.panel.profile.long_lived_access_tokens.delete_failed")
      );
    }
  }
}

customElements.define("ha-long-lived-access-tokens-card", HaLongLivedTokens);


/***/ }),

/***/ "./src/panels/profile/ha-mfa-modules-card.js":
/*!***************************************************!*\
  !*** ./src/panels/profile/ha-mfa-modules-card.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");












let registeredDialog = false;

/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class HaMfaModulesCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .error {
          color: red;
        }
        .status {
          color: var(--primary-color);
        }
        .error,
        .status {
          position: absolute;
          top: -4px;
        }
        mwc-button {
          margin-right: -0.57em;
        }
      </style>
      <ha-card header="[[localize('ui.panel.profile.mfa.header')]]">
        <template is="dom-repeat" items="[[mfaModules]]" as="module">
          <paper-item>
            <paper-item-body two-line="">
              <div>[[module.name]]</div>
              <div secondary="">[[module.id]]</div>
            </paper-item-body>
            <template is="dom-if" if="[[module.enabled]]">
              <mwc-button on-click="_disable"
                >[[localize('ui.panel.profile.mfa.disable')]]</mwc-button
              >
            </template>
            <template is="dom-if" if="[[!module.enabled]]">
              <mwc-button on-click="_enable"
                >[[localize('ui.panel.profile.mfa.enable')]]</mwc-button
              >
            </template>
          </paper-item>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      _loading: {
        type: Boolean,
        value: false,
      },

      // Error message when can't talk to server etc
      _statusMsg: String,
      _errorMsg: String,

      mfaModules: Array,
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-mfa-module-setup-flow",
        dialogTag: "ha-mfa-module-setup-flow",
        dialogImport: () =>
          Promise.all(/*! import() | ha-mfa-module-setup-flow */[__webpack_require__.e(5), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("ha-mfa-module-setup-flow")]).then(__webpack_require__.bind(null, /*! ./ha-mfa-module-setup-flow */ "./src/panels/profile/ha-mfa-module-setup-flow.js")),
      });
    }
  }

  _enable(ev) {
    this.fire("show-mfa-module-setup-flow", {
      hass: this.hass,
      mfaModuleId: ev.model.module.id,
      dialogClosedCallback: () => this._refreshCurrentUser(),
    });
  }

  _disable(ev) {
    if (
      !confirm(
        this.localize(
          "ui.panel.profile.mfa.confirm_disable",
          "name",
          ev.model.module.name
        )
      )
    ) {
      return;
    }

    const mfaModuleId = ev.model.module.id;

    this.hass
      .callWS({
        type: "auth/depose_mfa",
        mfa_module_id: mfaModuleId,
      })
      .then(() => {
        this._refreshCurrentUser();
      });
  }

  _refreshCurrentUser() {
    this.fire("hass-refresh-current-user");
  }
}

customElements.define("ha-mfa-modules-card", HaMfaModulesCard);


/***/ }),

/***/ "./src/panels/profile/ha-panel-profile.ts":
/*!************************************************!*\
  !*** ./src/panels/profile/ha-panel-profile.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _data_frontend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/frontend */ "./src/data/frontend.ts");
/* harmony import */ var _ha_change_password_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-change-password-card */ "./src/panels/profile/ha-change-password-card.js");
/* harmony import */ var _ha_mfa_modules_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ha-mfa-modules-card */ "./src/panels/profile/ha-mfa-modules-card.js");
/* harmony import */ var _ha_advanced_mode_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-advanced-mode-card */ "./src/panels/profile/ha-advanced-mode-card.ts");
/* harmony import */ var _ha_refresh_tokens_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-refresh-tokens-card */ "./src/panels/profile/ha-refresh-tokens-card.js");
/* harmony import */ var _ha_long_lived_access_tokens_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ha-long-lived-access-tokens-card */ "./src/panels/profile/ha-long-lived-access-tokens-card.js");
/* harmony import */ var _ha_pick_language_row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ha-pick-language-row */ "./src/panels/profile/ha-pick-language-row.js");
/* harmony import */ var _ha_pick_theme_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ha-pick-theme-row */ "./src/panels/profile/ha-pick-theme-row.js");
/* harmony import */ var _ha_push_notifications_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ha-push-notifications-row */ "./src/panels/profile/ha-push-notifications-row.js");
/* harmony import */ var _ha_force_narrow_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ha-force-narrow-row */ "./src/panels/profile/ha-force-narrow-row.ts");
/* harmony import */ var _ha_set_vibrate_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ha-set-vibrate-row */ "./src/panels/profile/ha-set-vibrate-row.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
























class HaPanelProfile extends lit_element__WEBPACK_IMPORTED_MODULE_21__["LitElement"] {
    connectedCallback() {
        super.connectedCallback();
        this._refreshRefreshTokens();
        this._unsubCoreData = Object(_data_frontend__WEBPACK_IMPORTED_MODULE_10__["getOptimisticFrontendUserDataCollection"])(this.hass.connection, "core").subscribe((coreUserData) => {
            this._coreUserData = coreUserData;
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._unsubCoreData) {
            this._unsubCoreData();
            this._unsubCoreData = undefined;
        }
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_21__["html"] `
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            ></ha-menu-button>
            <div main-title>${this.hass.localize("panel.profile")}</div>
          </app-toolbar>
        </app-header>

        <div class="content">
          <ha-card .header=${this.hass.user.name}>
            <div class="card-content">
              ${this.hass.localize("ui.panel.profile.current_user", "fullName", this.hass.user.name)}
              ${this.hass.user.is_owner
            ? this.hass.localize("ui.panel.profile.is_owner")
            : ""}
            </div>

            <ha-pick-language-row
              .narrow=${this.narrow}
              .hass=${this.hass}
            ></ha-pick-language-row>
            <ha-pick-theme-row
              .narrow=${this.narrow}
              .hass=${this.hass}
            ></ha-pick-theme-row>
            ${this.hass.dockedSidebar !== "auto" || !this.narrow
            ? lit_element__WEBPACK_IMPORTED_MODULE_21__["html"] `
                  <ha-force-narrow-row
                    .narrow=${this.narrow}
                    .hass=${this.hass}
                  ></ha-force-narrow-row>
                `
            : ""}
            ${navigator.vibrate
            ? lit_element__WEBPACK_IMPORTED_MODULE_21__["html"] `
                  <ha-set-vibrate-row
                    .narrow=${this.narrow}
                    .hass=${this.hass}
                  ></ha-set-vibrate-row>
                `
            : ""}
            <ha-push-notifications-row
              .narrow=${this.narrow}
              .hass=${this.hass}
            ></ha-push-notifications-row>

            <div class="card-actions">
              <mwc-button class="warning" @click=${this._handleLogOut}>
                ${this.hass.localize("ui.panel.profile.logout")}
              </mwc-button>
            </div>
          </ha-card>

          ${this.hass.user.credentials.some((cred) => cred.auth_provider_type === "homeassistant")
            ? lit_element__WEBPACK_IMPORTED_MODULE_21__["html"] `
                <ha-change-password-card
                  .hass=${this.hass}
                ></ha-change-password-card>
              `
            : ""}

          <ha-mfa-modules-card
            .hass=${this.hass}
            .mfaModules=${this.hass.user.mfa_modules}
          ></ha-mfa-modules-card>

          ${this.hass.user.is_admin
            ? lit_element__WEBPACK_IMPORTED_MODULE_21__["html"] `
                <ha-advanced-mode-card
                  .hass=${this.hass}
                  .coreUserData=${this._coreUserData}
                ></ha-advanced-mode-card>
              `
            : ""}

          <ha-refresh-tokens-card
            .hass=${this.hass}
            .refreshTokens=${this._refreshTokens}
            @hass-refresh-tokens=${this._refreshRefreshTokens}
          ></ha-refresh-tokens-card>

          <ha-long-lived-access-tokens-card
            .hass=${this.hass}
            .refreshTokens=${this._refreshTokens}
            @hass-refresh-tokens=${this._refreshRefreshTokens}
          ></ha-long-lived-access-tokens-card>
        </div>
      </app-header-layout>
    `;
    }
    async _refreshRefreshTokens() {
        this._refreshTokens = await this.hass.callWS({
            type: "auth/refresh_tokens",
        });
    }
    _handleLogOut() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "hass-logout");
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_22__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_21__["css"] `
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          display: block;
          max-width: 600px;
          margin: 0 auto;
        }

        .content > * {
          display: block;
          margin: 24px 0;
        }

        .promo-advanced {
          text-align: center;
          color: var(--secondary-text-color);
        }
      `,
        ];
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
], HaPanelProfile.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
], HaPanelProfile.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
], HaPanelProfile.prototype, "_refreshTokens", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_21__["property"])()
], HaPanelProfile.prototype, "_coreUserData", void 0);
customElements.define("ha-panel-profile", HaPanelProfile);


/***/ }),

/***/ "./src/panels/profile/ha-pick-language-row.js":
/*!****************************************************!*\
  !*** ./src/panels/profile/ha-pick-language-row.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");












/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class HaPickLanguageRow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        a {
          color: var(--primary-color);
        }
        paper-item {
          direction: ltr;
        }
        paper-item[is-rtl] {
          direction: rtl;
        }
      </style>
      <ha-settings-row narrow="[[narrow]]">
        <span slot="heading"
          >[[localize('ui.panel.profile.language.header')]]</span
        >
        <span slot="description">
          <a
            href="https://developers.home-assistant.io/docs/en/internationalization_translation.html"
            target="_blank"
            >[[localize('ui.panel.profile.language.link_promo')]]</a
          >
        </span>
        <ha-paper-dropdown-menu
          label="[[localize('ui.panel.profile.language.dropdown_label')]]"
          dynamic-align=""
        >
          <paper-listbox
            slot="dropdown-content"
            attr-for-selected="language-tag"
            selected="{{languageSelection}}"
          >
            <template is="dom-repeat" items="[[languages]]">
              <paper-item language-tag$="[[item.key]]" is-rtl$="[[item.isRTL]]">
                [[item.nativeName]]
              </paper-item>
            </template>
          </paper-listbox>
        </ha-paper-dropdown-menu>
      </ha-settings-row>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      languageSelection: {
        type: String,
        observer: "languageSelectionChanged",
      },
      languages: {
        type: Array,
        computed: "computeLanguages(hass)",
      },
    };
  }

  static get observers() {
    return ["setLanguageSelection(language)"];
  }

  computeLanguages(hass) {
    if (!hass || !hass.translationMetadata) {
      return [];
    }
    const translations = hass.translationMetadata.translations;
    return Object.keys(translations).map((key) => ({
      key,
      ...translations[key],
    }));
  }

  setLanguageSelection(language) {
    this.languageSelection = language;
  }

  languageSelectionChanged(newVal) {
    // Only fire event if language was changed. This prevents select updates when
    // responding to hass changes.
    if (newVal !== this.hass.language) {
      this.fire("hass-language-select", { language: newVal });
    }
  }

  ready() {
    super.ready();
    if (this.hass && this.hass.language) {
      this.setLanguageSelection(this.hass.language);
    }
  }
}

customElements.define("ha-pick-language-row", HaPickLanguageRow);


/***/ }),

/***/ "./src/panels/profile/ha-pick-theme-row.js":
/*!*************************************************!*\
  !*** ./src/panels/profile/ha-pick-theme-row.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");










/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class HaPickThemeRow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        a {
          color: var(--primary-color);
        }
      </style>
      <ha-settings-row narrow="[[narrow]]">
        <span slot="heading"
          >[[localize('ui.panel.profile.themes.header')]]</span
        >
        <span slot="description">
          <template is="dom-if" if="[[!_hasThemes]]">
            [[localize('ui.panel.profile.themes.error_no_theme')]]
          </template>
          <a
            href="https://www.home-assistant.io/integrations/frontend/#defining-themes"
            target="_blank"
            >[[localize('ui.panel.profile.themes.link_promo')]]</a
          >
        </span>
        <ha-paper-dropdown-menu
          label="[[localize('ui.panel.profile.themes.dropdown_label')]]"
          dynamic-align
          disabled="[[!_hasThemes]]"
        >
          <paper-listbox slot="dropdown-content" selected="{{selectedTheme}}">
            <template is="dom-repeat" items="[[themes]]" as="theme">
              <paper-item>[[theme]]</paper-item>
            </template>
          </paper-listbox>
        </ha-paper-dropdown-menu>
      </ha-settings-row>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      _hasThemes: {
        type: Boolean,
        computed: "_compHasThemes(hass)",
      },
      themes: {
        type: Array,
        computed: "_computeThemes(hass)",
      },
      selectedTheme: {
        type: Number,
      },
    };
  }

  static get observers() {
    return ["selectionChanged(hass, selectedTheme)"];
  }

  _compHasThemes(hass) {
    return (
      hass.themes &&
      hass.themes.themes &&
      Object.keys(hass.themes.themes).length
    );
  }

  ready() {
    super.ready();
    if (
      this.hass.selectedTheme &&
      this.themes.indexOf(this.hass.selectedTheme) > 0
    ) {
      this.selectedTheme = this.themes.indexOf(this.hass.selectedTheme);
    } else if (!this.hass.selectedTheme) {
      this.selectedTheme = 1;
    }
  }

  _computeThemes(hass) {
    if (!hass) return [];
    return [].concat(Object.keys(hass.themes.themes).sort());
  }

  selectionChanged(hass, selection) {
    if (selection > 0 && selection < this.themes.length) {
      if (hass.selectedTheme !== this.themes[selection]) {
        this.fire("settheme", this.themes[selection]);
      }
    } else if (selection === 0 && hass.selectedTheme !== "") {
      this.fire("settheme", "");
    }
  }
}

customElements.define("ha-pick-theme-row", HaPickThemeRow);


/***/ }),

/***/ "./src/panels/profile/ha-push-notifications-row.js":
/*!*********************************************************!*\
  !*** ./src/panels/profile/ha-push-notifications-row.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_label_iron_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-label/iron-label */ "./node_modules/@polymer/iron-label/iron-label.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-push-notifications-toggle */ "./src/components/ha-push-notifications-toggle.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");












/*
 * @appliesMixin LocalizeMixin
 */
class HaPushNotificationsRow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        a {
          color: var(--primary-color);
        }
      </style>
      <ha-settings-row narrow="[[narrow]]">
        <span slot="heading"
          >[[localize('ui.panel.profile.push_notifications.header')]]</span
        >
        <span slot="description">
          [[_description(_platformLoaded, _pushSupported)]]
          <a
            href="https://www.home-assistant.io/integrations/notify.html5/"
            target="_blank"
            >[[localize('ui.panel.profile.push_notifications.link_promo')]]</a
          >
        </span>
        <ha-push-notifications-toggle
          hass="[[hass]]"
          disabled="[[_error]]"
        ></ha-push-notifications-toggle>
      </ha-settings-row>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      _platformLoaded: {
        type: Boolean,
        computed: "_compPlatformLoaded(hass)",
      },
      _pushSupported: {
        type: Boolean,
        value: _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__["pushSupported"],
      },
      _error: {
        type: Boolean,
        computed: "_compError(_platformLoaded, _pushSupported)",
      },
    };
  }

  _compPlatformLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "notify.html5");
  }

  _compError(platformLoaded, pushSupported_) {
    return !platformLoaded || !pushSupported_;
  }

  _description(platformLoaded, pushSupported_) {
    let key;
    if (!pushSupported_) {
      key = "error_use_https";
    } else if (!platformLoaded) {
      key = "error_load_platform";
    } else {
      key = "description";
    }
    return this.localize(`ui.panel.profile.push_notifications.${key}`);
  }
}

customElements.define("ha-push-notifications-row", HaPushNotificationsRow);


/***/ }),

/***/ "./src/panels/profile/ha-refresh-tokens-card.js":
/*!******************************************************!*\
  !*** ./src/panels/profile/ha-refresh-tokens-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");













/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class HaRefreshTokens extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-icon-button {
          color: var(--primary-text-color);
        }
        paper-icon-button[disabled] {
          color: var(--disabled-text-color);
        }
      </style>
      <ha-card header="[[localize('ui.panel.profile.refresh_tokens.header')]]">
        <div class="card-content">
          [[localize('ui.panel.profile.refresh_tokens.description')]]
        </div>
        <template is="dom-repeat" items="[[_computeTokens(refreshTokens)]]">
          <ha-settings-row three-line>
            <span slot="heading">[[_formatTitle(item.client_id)]]</span>
            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>
            <div slot="description">[[_formatLastUsed(item)]]</div>
            <div>
              <template is="dom-if" if="[[item.is_current]]">
                <paper-tooltip position="left"
                  >[[localize('ui.panel.profile.refresh_tokens.current_token_tooltip')]]</paper-tooltip
                >
              </template>
              <paper-icon-button
                icon="hass:delete"
                on-click="_handleDelete"
                disabled="[[item.is_current]]"
              ></paper-icon-button>
            </div>
          </ha-settings-row>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      refreshTokens: Array,
    };
  }

  _computeTokens(refreshTokens) {
    return refreshTokens.filter((tkn) => tkn.type === "normal").reverse();
  }

  _formatTitle(clientId) {
    return this.localize(
      "ui.panel.profile.refresh_tokens.token_title",
      "clientId",
      clientId
    );
  }

  _formatCreatedAt(created) {
    return this.localize(
      "ui.panel.profile.refresh_tokens.created_at",
      "date",
      Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(created), this.hass.language)
    );
  }

  _formatLastUsed(item) {
    return item.last_used_at
      ? this.localize(
          "ui.panel.profile.refresh_tokens.last_used",
          "date",
          Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(item.last_used_at), this.hass.language),
          "location",
          item.last_used_ip
        )
      : this.localize("ui.panel.profile.refresh_tokens.not_used");
  }

  async _handleDelete(ev) {
    if (
      !confirm(
        this.localize(
          "ui.panel.profile.refresh_tokens.confirm_delete",
          "name",
          ev.model.item.client_id
        )
      )
    ) {
      return;
    }
    try {
      await this.hass.callWS({
        type: "auth/delete_refresh_token",
        refresh_token_id: ev.model.item.id,
      });
      this.fire("hass-refresh-tokens");
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      alert(this.localize("ui.panel.profile.refresh_tokens.delete_failed"));
    }
  }
}

customElements.define("ha-refresh-tokens-card", HaRefreshTokens);


/***/ }),

/***/ "./src/panels/profile/ha-set-vibrate-row.ts":
/*!**************************************************!*\
  !*** ./src/panels/profile/ha-set-vibrate-row.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");






let HaSetVibrateRow = class HaSetVibrateRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-settings-row .narrow=${this.narrow}>
        <span slot="heading">
          ${this.hass.localize("ui.panel.profile.vibrate.header")}
        </span>
        <span slot="description">
          ${this.hass.localize("ui.panel.profile.vibrate.description")}
        </span>
        <ha-switch
          .checked=${this.hass.vibrate}
          @change=${this._checkedChanged}
        ></ha-switch>
      </ha-settings-row>
    `;
    }
    async _checkedChanged(ev) {
        const vibrate = ev.target.checked;
        if (vibrate === this.hass.vibrate) {
            return;
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-vibrate", {
            vibrate,
        });
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_5__["forwardHaptic"])("light");
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaSetVibrateRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaSetVibrateRow.prototype, "narrow", void 0);
HaSetVibrateRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-set-vibrate-row")
], HaSetVibrateRow);


/***/ }),

/***/ "./src/panels/profile/ha-settings-row.js":
/*!***********************************************!*\
  !*** ./src/panels/profile/ha-settings-row.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



class HaSettingsRow extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          padding: 0 16px;
          align-content: normal;
          align-self: auto;
          align-items: center;
        }
        :host([narrow]) {
          align-items: normal;
          flex-direction: column;
          border-top: 1px solid var(--divider-color);
          padding-bottom: 8px;
        }
        paper-item-body {
          padding-right: 16px;
        }
      </style>
      <paper-item-body two-line$="[[!threeLine]]" three-line$="[[threeLine]]">
        <slot name="heading"></slot>
        <div secondary><slot name="description"></slot></div>
      </paper-item-body>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      narrow: {
        type: Boolean,
        reflectToAttribute: true,
      },
      threeLine: {
        type: Boolean,
        value: false,
      },
    };
  }
}

customElements.define("ha-settings-row", HaSettingsRow);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtcHJvZmlsZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wdXNoLW5vdGlmaWNhdGlvbnMtdG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9ub3RpZnlfaHRtbDUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtYWR2YW5jZWQtbW9kZS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1jaGFuZ2UtcGFzc3dvcmQtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtZm9yY2UtbmFycm93LXJvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLW1mYS1tb2R1bGVzLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLXBhbmVsLXByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9wcm9maWxlL2hhLXBpY2stbGFuZ3VhZ2Utcm93LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1waWNrLXRoZW1lLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtcmVmcmVzaC10b2tlbnMtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtc2V0LXZpYnJhdGUtcm93LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvcHJvZmlsZS9oYS1zZXR0aW5ncy1yb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogUmV0dXJuIGlmIGEgY29tcG9uZW50IGlzIGxvYWRlZC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQ29tcG9uZW50TG9hZGVkKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbn1cbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXJcIjtcblxuY29uc3QgcGFwZXJEcm9wZG93bkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQb2x5bWVyRWxlbWVudD47XG5cbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRHJvcGRvd25DbGFzcyBleHRlbmRzIHBhcGVyRHJvcGRvd25DbGFzcyB7XG4gIHB1YmxpYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiOiBIYVBhcGVyRHJvcGRvd25DbGFzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCIsIEhhUGFwZXJEcm9wZG93bkNsYXNzKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGdldEFwcEtleSB9IGZyb20gXCIuLi9kYXRhL25vdGlmeV9odG1sNVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgXCIuL2hhLXN3aXRjaFwiO1xuXG5leHBvcnQgY29uc3QgcHVzaFN1cHBvcnRlZCA9XG4gIFwic2VydmljZVdvcmtlclwiIGluIG5hdmlnYXRvciAmJlxuICBcIlB1c2hNYW5hZ2VyXCIgaW4gd2luZG93ICYmXG4gIChkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCA9PT0gXCJodHRwczpcIiB8fFxuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lID09PSBcImxvY2FsaG9zdFwiIHx8XG4gICAgZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgPT09IFwiMTI3LjAuMC4xXCIpO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVB1c2hOb3RpZmljYXRpb25zVG9nZ2xlIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgZGlzYWJsZWQ9XCJbW19jb21wRGlzYWJsZWQoZGlzYWJsZWQsIGxvYWRpbmcpXV1cIlxuICAgICAgICBjaGVja2VkPVwie3twdXNoQ2hlY2tlZH19XCJcbiAgICAgICAgb24tY2hhbmdlPVwiaGFuZGxlUHVzaENoYW5nZVwiXG4gICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogeyB0eXBlOiBPYmplY3QsIHZhbHVlOiBudWxsIH0sXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcHVzaENoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6XG4gICAgICAgICAgXCJOb3RpZmljYXRpb25cIiBpbiB3aW5kb3cgJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiLFxuICAgICAgfSxcbiAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCFwdXNoU3VwcG9ydGVkKSByZXR1cm47XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG4gICAgICBpZiAoIXJlZy5wdXNoTWFuYWdlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZWcucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCkudGhlbigoc3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hDaGVja2VkID0gISFzdWJzY3JpcHRpb247XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIFdlIGRvbid0IHNldCBsb2FkaW5nIHRvIGBmYWxzZWAgc28gd2UgcmVtYWluIGRpc2FibGVkXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHVzaENoYW5nZShldmVudCkge1xuICAgIC8vIFNvbWVob3cgdGhpcyBpcyB0cmlnZ2VyZWQgb24gU2FmYXJpIG9uIHBhZ2UgbG9hZCBjYXVzaW5nXG4gICAgLy8gaXQgdG8gZ2V0IGludG8gYSBsb29wIGFuZCBjcmFzaCB0aGUgcGFnZS5cbiAgICBpZiAoIXB1c2hTdXBwb3J0ZWQpIHJldHVybjtcblxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgdGhpcy5zdWJzY3JpYmVQdXNoTm90aWZpY2F0aW9ucygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzdWJzY3JpYmVQdXNoTm90aWZpY2F0aW9ucygpIHtcbiAgICBjb25zdCByZWcgPSBhd2FpdCBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeTtcbiAgICBsZXQgc3ViO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBicm93c2VyTmFtZTtcbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIikgPiAtMSkge1xuICAgICAgICBicm93c2VyTmFtZSA9IFwiZmlyZWZveFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJvd3Nlck5hbWUgPSBcImNocm9tZVwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gcHJvbXB0KFwiV2hhdCBzaG91bGQgdGhpcyBkZXZpY2UgYmUgY2FsbGVkID9cIik7XG4gICAgICBpZiAobmFtZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucHVzaENoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgYXBwbGljYXRpb25TZXJ2ZXJLZXk7XG4gICAgICB0cnkge1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleSA9IGF3YWl0IGdldEFwcEtleSh0aGlzLmhhc3MpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgYXBwbGljYXRpb25TZXJ2ZXJLZXkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoYXBwbGljYXRpb25TZXJ2ZXJLZXkpIHtcbiAgICAgICAgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLnN1YnNjcmliZSh7XG4gICAgICAgICAgdXNlclZpc2libGVPbmx5OiB0cnVlLFxuICAgICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YiA9IGF3YWl0IHJlZy5wdXNoTWFuYWdlci5zdWJzY3JpYmUoeyB1c2VyVmlzaWJsZU9ubHk6IHRydWUgfSk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcIm5vdGlmeS5odG1sNVwiLCB7XG4gICAgICAgIHN1YnNjcmlwdGlvbjogc3ViLFxuICAgICAgICBicm93c2VyOiBicm93c2VyTmFtZSxcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGVyci5tZXNzYWdlIHx8IFwiTm90aWZpY2F0aW9uIHJlZ2lzdHJhdGlvbiBmYWlsZWQuXCI7XG4gICAgICBpZiAoc3ViKSB7XG4gICAgICAgIGF3YWl0IHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgdGhpcy5maXJlKFwiaGFzcy1ub3RpZmljYXRpb25cIiwgeyBtZXNzYWdlIH0pO1xuICAgICAgdGhpcy5wdXNoQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVuc3Vic2NyaWJlUHVzaE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgY29uc3QgcmVnID0gYXdhaXQgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVhZHk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3ViID0gYXdhaXQgcmVnLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuXG4gICAgICBpZiAoIXN1YikgcmV0dXJuO1xuXG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBcIm5vdGlmeS5odG1sNVwiLCB7IHN1YnNjcmlwdGlvbjogc3ViIH0pO1xuICAgICAgYXdhaXQgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICAgZXJyLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdW5zdWJzY3JpYmluZyBmb3IgcHVzaCBub3RpZmljYXRpb25zLlwiO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiB1bnN1YiBwdXNoXCIsIGVycik7XG5cbiAgICAgIHRoaXMuZmlyZShcImhhc3Mtbm90aWZpY2F0aW9uXCIsIHsgbWVzc2FnZSB9KTtcbiAgICAgIHRoaXMucHVzaENoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wRGlzYWJsZWQoZGlzYWJsZWQsIGxvYWRpbmcpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgbG9hZGluZztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwiaGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZVwiLFxuICBIYVB1c2hOb3RpZmljYXRpb25zVG9nZ2xlXG4pO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IsIGN1c3RvbUVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzLCBxdWVyeSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoL213Yy1zd2l0Y2gtY3NzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NTd2l0Y2ggPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2Mtc3dpdGNoXCIpIGFzIENvbnN0cnVjdG9yPFN3aXRjaD47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc3dpdGNoXCIpXG5leHBvcnQgY2xhc3MgSGFTd2l0Y2ggZXh0ZW5kcyBNd2NTd2l0Y2gge1xuICBAcXVlcnkoXCJzbG90XCIpIHByaXZhdGUgX3Nsb3QhOiBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tZGMtdGhlbWUtc2Vjb25kYXJ5XCIsIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJzbG90dGVkXCIsXG4gICAgICBCb29sZWFuKHRoaXMuX3Nsb3QuYXNzaWduZWROb2RlcygpLmxlbmd0aClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdHJhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zbG90dGVkKSAubWRjLXN3aXRjaCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN3aXRjaFwiOiBIYVN3aXRjaDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5mdW5jdGlvbiB1cmxCYXNlNjRUb1VpbnQ4QXJyYXkoYmFzZTY0U3RyaW5nKSB7XG4gIGNvbnN0IHBhZGRpbmcgPSBcIj1cIi5yZXBlYXQoKDQgLSAoYmFzZTY0U3RyaW5nLmxlbmd0aCAlIDQpKSAlIDQpO1xuICBjb25zdCBiYXNlNjQgPSAoYmFzZTY0U3RyaW5nICsgcGFkZGluZykucmVwbGFjZSgvLS9nLCBcIitcIikucmVwbGFjZSgvXy9nLCBcIi9cIik7XG5cbiAgY29uc3QgcmF3RGF0YSA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gIGNvbnN0IG91dHB1dEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkocmF3RGF0YS5sZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmF3RGF0YS5sZW5ndGg7ICsraSkge1xuICAgIG91dHB1dEFycmF5W2ldID0gcmF3RGF0YS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIHJldHVybiBvdXRwdXRBcnJheTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldEFwcEtleSA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50KSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGhhc3MuY2FsbFdTPHN0cmluZz4oe1xuICAgIHR5cGU6IFwibm90aWZ5L2h0bWw1L2FwcGtleVwiLFxuICB9KTtcbiAgcmV0dXJuIHJlcyA/IHVybEJhc2U2NFRvVWludDhBcnJheShyZXMpIDogbnVsbDtcbn07XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDb3JlRnJvbnRlbmRVc2VyRGF0YSxcbiAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWFkdmFuY2VkLW1vZGUtY2FyZFwiKVxuY2xhc3MgQWR2YW5jZWRNb2RlQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb3JlVXNlckRhdGE/OiBDb3JlRnJvbnRlbmRVc2VyRGF0YTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+QWR2YW5jZWQgbW9kZTwvZGl2PlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5jb3JlVXNlckRhdGEgJiYgdGhpcy5jb3JlVXNlckRhdGEuc2hvd0FkdmFuY2VkfVxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5jb3JlVXNlckRhdGEgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9hZHZhbmNlZFRvZ2dsZWR9XG4gICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIOeJp+WFu+eKrCBoaWRlcyBhZHZhbmNlZCBmZWF0dXJlcyBhbmQgb3B0aW9ucyBieSBkZWZhdWx0LiBZb3UgY2FuIG1ha2VcbiAgICAgICAgICB0aGVzZSBmZWF0dXJlcyBhY2Nlc3NpYmxlIGJ5IGNoZWNraW5nIHRoaXMgdG9nZ2xlLiBUaGlzIGlzIGFcbiAgICAgICAgICB1c2VyLXNwZWNpZmljIHNldHRpbmcgYW5kIGRvZXMgbm90IGltcGFjdCBvdGhlciB1c2VycyB1c2luZyBIb21lXG4gICAgICAgICAgQXNzaXN0YW50LlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfYWR2YW5jZWRUb2dnbGVkKGV2KSB7XG4gICAgZ2V0T3B0aW1pc3RpY0Zyb250ZW5kVXNlckRhdGFDb2xsZWN0aW9uKHRoaXMuaGFzcy5jb25uZWN0aW9uLCBcImNvcmVcIikuc2F2ZSh7XG4gICAgICBzaG93QWR2YW5jZWQ6IGV2LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5jYXJkLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAudGl0bGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWFkdmFuY2VkLW1vZGUtY2FyZFwiOiBBZHZhbmNlZE1vZGVDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDaGFuZ2VQYXNzd29yZENhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmVycm9yLFxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50UGFzc3dvcmQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmhlYWRlcicpXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcnJvck1zZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbX2Vycm9yTXNnXV08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3N0YXR1c01zZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXNcIj5bW19zdGF0dXNNc2ddXTwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBjbGFzcz1cImN1cnJlbnRQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuY3VycmVudF9wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnRQYXNzd29yZH19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZVxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuZXJyb3JfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jdXJyZW50UGFzc3dvcmRdXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLm5ld19wYXNzd29yZCcpXV1cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19wYXNzd29yZDF9fVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlXG4gICAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmVycm9yX3JlcXVpcmVkJyldXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUuY2hhbmdlX3Bhc3N3b3JkLmNvbmZpcm1fbmV3X3Bhc3N3b3JkJyldXVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3Bhc3N3b3JkMn19XCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGVcbiAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5jaGFuZ2VfcGFzc3dvcmQuZXJyb3JfcmVxdWlyZWQnKV1dXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXY+PHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9sb2FkaW5nXV1cIj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfY2hhbmdlUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmNoYW5nZV9wYXNzd29yZC5zdWJtaXQnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX3N0YXR1c01zZzogU3RyaW5nLFxuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIF9jdXJyZW50UGFzc3dvcmQ6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDE6IFN0cmluZyxcbiAgICAgIF9wYXNzd29yZDI6IFN0cmluZyxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX3N0YXR1c01zZyA9IG51bGw7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlUGFzc3dvcmQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIF9jaGFuZ2VQYXNzd29yZCgpIHtcbiAgICB0aGlzLl9zdGF0dXNNc2cgPSBudWxsO1xuICAgIGlmICghdGhpcy5fY3VycmVudFBhc3N3b3JkIHx8ICF0aGlzLl9wYXNzd29yZDEgfHwgIXRoaXMuX3Bhc3N3b3JkMikgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuX3Bhc3N3b3JkMSAhPT0gdGhpcy5fcGFzc3dvcmQyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IFwiTmV3IHBhc3N3b3JkIGNvbmZpcm1hdGlvbiBkb2Vzbid0IG1hdGNoXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRQYXNzd29yZCA9PT0gdGhpcy5fcGFzc3dvcmQxKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9IFwiTmV3IHBhc3N3b3JkIG11c3QgYmUgZGlmZmVyZW50IHRoYW4gY3VycmVudCBwYXNzd29yZFwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2Vycm9yTXNnID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJjb25maWcvYXV0aF9wcm92aWRlci9ob21lYXNzaXN0YW50L2NoYW5nZV9wYXNzd29yZFwiLFxuICAgICAgICBjdXJyZW50X3Bhc3N3b3JkOiB0aGlzLl9jdXJyZW50UGFzc3dvcmQsXG4gICAgICAgIG5ld19wYXNzd29yZDogdGhpcy5fcGFzc3dvcmQxLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9zdGF0dXNNc2c6IFwiUGFzc3dvcmQgY2hhbmdlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgX2N1cnJlbnRQYXNzd29yZDogbnVsbCxcbiAgICAgICAgX3Bhc3N3b3JkMTogbnVsbCxcbiAgICAgICAgX3Bhc3N3b3JkMjogbnVsbCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3JNc2cgPSBlcnIubWVzc2FnZTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2hhbmdlLXBhc3N3b3JkLWNhcmRcIiwgSGFDaGFuZ2VQYXNzd29yZENhcmQpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZm9yY2UtbmFycm93LXJvd1wiKVxuY2xhc3MgSGFGb3JjZWROYXJyb3dSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IC5uYXJyb3c9JHt0aGlzLm5hcnJvd30+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLmZvcmNlX25hcnJvdy5oZWFkZXJcIil9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLmZvcmNlX25hcnJvdy5kZXNjcmlwdGlvblwiKX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLmhhc3MuZG9ja2VkU2lkZWJhciA9PT0gXCJhbHdheXNfaGlkZGVuXCJ9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2NoZWNrZWRDaGFuZ2VkfVxuICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2hlY2tlZENoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gKHRoaXMuaGFzcy5kb2NrZWRTaWRlYmFyID09PSBcImFsd2F5c19oaWRkZW5cIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1kb2NrLXNpZGViYXJcIiwge1xuICAgICAgZG9jazogbmV3VmFsdWUgPyBcImFsd2F5c19oaWRkZW5cIiA6IFwiYXV0b1wiLFxuICAgIH0pO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1mb3JjZS1uYXJyb3ctcm93XCI6IEhhRm9yY2VkTmFycm93Um93O1xuICB9XG59XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdERhdGVUaW1lIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL2hhLXNldHRpbmdzLXJvd1wiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhTG9uZ0xpdmVkVG9rZW5zIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgbWFyZ2luOiAtMWVtIDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jYXJkXG4gICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmhlYWRlcicpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5kZXNjcmlwdGlvbicpXV1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9lbi9hdXRoX2FwaS5odG1sI21ha2luZy1hdXRoZW50aWNhdGVkLXJlcXVlc3RzXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMubGVhcm5fYXV0aF9yZXF1ZXN0cycpXV1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfdG9rZW5zLmxlbmd0aF1dXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMuZW1wdHlfc3RhdGUnKV1dXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX3Rva2Vuc11dXCI+XG4gICAgICAgICAgPGhhLXNldHRpbmdzLXJvdyB0d28tbGluZT5cbiAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCI+W1tpdGVtLmNsaWVudF9uYW1lXV08L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJkZXNjcmlwdGlvblwiPltbX2Zvcm1hdENyZWF0ZWRBdChpdGVtLmNyZWF0ZWRfYXQpXV08L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpkZWxldGVcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVEZWxldGVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9oYS1zZXR0aW5ncy1yb3c+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9oYW5kbGVDcmVhdGVcIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmNyZWF0ZScpXV1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHJlZnJlc2hUb2tlbnM6IEFycmF5LFxuICAgICAgX3Rva2Vuczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVUb2tlbnMocmVmcmVzaFRva2VucylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlVG9rZW5zKHJlZnJlc2hUb2tlbnMpIHtcbiAgICByZXR1cm4gcmVmcmVzaFRva2Vuc1xuICAgICAgLmZpbHRlcigodGtuKSA9PiB0a24udHlwZSA9PT0gXCJsb25nX2xpdmVkX2FjY2Vzc190b2tlblwiKVxuICAgICAgLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9mb3JtYXRUaXRsZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLnRva2VuX3RpdGxlXCIsXG4gICAgICBcIm5hbWVcIixcbiAgICAgIG5hbWVcbiAgICApO1xuICB9XG5cbiAgX2Zvcm1hdENyZWF0ZWRBdChjcmVhdGVkKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXG4gICAgICBcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmNyZWF0ZWRfYXRcIixcbiAgICAgIFwiZGF0ZVwiLFxuICAgICAgZm9ybWF0RGF0ZVRpbWUobmV3IERhdGUoY3JlYXRlZCksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgX2hhbmRsZUNyZWF0ZSgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KFxuICAgICAgdGhpcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLnByb21wdF9uYW1lXCIpXG4gICAgKTtcbiAgICBpZiAoIW5hbWUpIHJldHVybjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJhdXRoL2xvbmdfbGl2ZWRfYWNjZXNzX3Rva2VuXCIsXG4gICAgICAgIGxpZmVzcGFuOiAzNjUwLFxuICAgICAgICBjbGllbnRfbmFtZTogbmFtZSxcbiAgICAgIH0pO1xuICAgICAgcHJvbXB0KFxuICAgICAgICB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMucHJvbXB0X2NvcHlfdG9rZW5cIlxuICAgICAgICApLFxuICAgICAgICB0b2tlblxuICAgICAgKTtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtcmVmcmVzaC10b2tlbnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGFsZXJ0KFxuICAgICAgICB0aGlzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS5sb25nX2xpdmVkX2FjY2Vzc190b2tlbnMuY3JlYXRlX2ZhaWxlZFwiKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfaGFuZGxlRGVsZXRlKGV2KSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmxvbmdfbGl2ZWRfYWNjZXNzX3Rva2Vucy5jb25maXJtX2RlbGV0ZVwiLFxuICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgIGV2Lm1vZGVsLml0ZW0uY2xpZW50X25hbWVcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiYXV0aC9kZWxldGVfcmVmcmVzaF90b2tlblwiLFxuICAgICAgICByZWZyZXNoX3Rva2VuX2lkOiBldi5tb2RlbC5pdGVtLmlkLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZpcmUoXCJoYXNzLXJlZnJlc2gtdG9rZW5zXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBhbGVydChcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9uZ19saXZlZF9hY2Nlc3NfdG9rZW5zLmRlbGV0ZV9mYWlsZWRcIilcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxvbmctbGl2ZWQtYWNjZXNzLXRva2Vucy1jYXJkXCIsIEhhTG9uZ0xpdmVkVG9rZW5zKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFNZmFNb2R1bGVzQ2FyZCBleHRlbmRzIEV2ZW50c01peGluKExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvcixcbiAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTRweDtcbiAgICAgICAgfVxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYS5oZWFkZXInKV1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbWZhTW9kdWxlc11dXCIgYXM9XCJtb2R1bGVcIj5cbiAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICAgICAgPGRpdj5bW21vZHVsZS5uYW1lXV08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk9XCJcIj5bW21vZHVsZS5pZF1dPC9kaXY+XG4gICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1ttb2R1bGUuZW5hYmxlZF1dXCI+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2Rpc2FibGVcIlxuICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYS5kaXNhYmxlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFtb2R1bGUuZW5hYmxlZF1dXCI+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2VuYWJsZVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhLmVuYWJsZScpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBfbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvLyBFcnJvciBtZXNzYWdlIHdoZW4gY2FuJ3QgdGFsayB0byBzZXJ2ZXIgZXRjXG4gICAgICBfc3RhdHVzTXNnOiBTdHJpbmcsXG4gICAgICBfZXJyb3JNc2c6IFN0cmluZyxcblxuICAgICAgbWZhTW9kdWxlczogQXJyYXksXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAoIXJlZ2lzdGVyZWREaWFsb2cpIHtcbiAgICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgICAgdGhpcy5maXJlKFwicmVnaXN0ZXItZGlhbG9nXCIsIHtcbiAgICAgICAgZGlhbG9nU2hvd0V2ZW50OiBcInNob3ctbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIsXG4gICAgICAgIGRpYWxvZ1RhZzogXCJoYS1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIixcbiAgICAgICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvd1wiICovIFwiLi9oYS1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIiksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfZW5hYmxlKGV2KSB7XG4gICAgdGhpcy5maXJlKFwic2hvdy1tZmEtbW9kdWxlLXNldHVwLWZsb3dcIiwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgbWZhTW9kdWxlSWQ6IGV2Lm1vZGVsLm1vZHVsZS5pZCxcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB0aGlzLl9yZWZyZXNoQ3VycmVudFVzZXIoKSxcbiAgICB9KTtcbiAgfVxuXG4gIF9kaXNhYmxlKGV2KSB7XG4gICAgaWYgKFxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLm1mYS5jb25maXJtX2Rpc2FibGVcIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICBldi5tb2RlbC5tb2R1bGUubmFtZVxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbWZhTW9kdWxlSWQgPSBldi5tb2RlbC5tb2R1bGUuaWQ7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcImF1dGgvZGVwb3NlX21mYVwiLFxuICAgICAgICBtZmFfbW9kdWxlX2lkOiBtZmFNb2R1bGVJZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hDdXJyZW50VXNlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBfcmVmcmVzaEN1cnJlbnRVc2VyKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtcmVmcmVzaC1jdXJyZW50LXVzZXJcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWZhLW1vZHVsZXMtY2FyZFwiLCBIYU1mYU1vZHVsZXNDYXJkKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci9hcHAtaGVhZGVyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQge1xuICBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24sXG4gIENvcmVGcm9udGVuZFVzZXJEYXRhLFxufSBmcm9tIFwiLi4vLi4vZGF0YS9mcm9udGVuZFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNoYW5nZS1wYXNzd29yZC1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLW1mYS1tb2R1bGVzLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtYWR2YW5jZWQtbW9kZS1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLXJlZnJlc2gtdG9rZW5zLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmRcIjtcblxuaW1wb3J0IFwiLi9oYS1waWNrLWxhbmd1YWdlLXJvd1wiO1xuaW1wb3J0IFwiLi9oYS1waWNrLXRoZW1lLXJvd1wiO1xuaW1wb3J0IFwiLi9oYS1wdXNoLW5vdGlmaWNhdGlvbnMtcm93XCI7XG5pbXBvcnQgXCIuL2hhLWZvcmNlLW5hcnJvdy1yb3dcIjtcbmltcG9ydCBcIi4vaGEtc2V0LXZpYnJhdGUtcm93XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmNsYXNzIEhhUGFuZWxQcm9maWxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3JlZnJlc2hUb2tlbnM/OiB1bmtub3duW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NvcmVVc2VyRGF0YT86IENvcmVGcm9udGVuZFVzZXJEYXRhIHwgbnVsbDtcbiAgcHJpdmF0ZSBfdW5zdWJDb3JlRGF0YT86IFVuc3Vic2NyaWJlRnVuYztcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9yZWZyZXNoUmVmcmVzaFRva2VucygpO1xuICAgIHRoaXMuX3Vuc3ViQ29yZURhdGEgPSBnZXRPcHRpbWlzdGljRnJvbnRlbmRVc2VyRGF0YUNvbGxlY3Rpb24oXG4gICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgIFwiY29yZVwiXG4gICAgKS5zdWJzY3JpYmUoKGNvcmVVc2VyRGF0YSkgPT4ge1xuICAgICAgdGhpcy5fY29yZVVzZXJEYXRhID0gY29yZVVzZXJEYXRhO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViQ29yZURhdGEpIHtcbiAgICAgIHRoaXMuX3Vuc3ViQ29yZURhdGEoKTtcbiAgICAgIHRoaXMuX3Vuc3ViQ29yZURhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ+XG4gICAgICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICAgICAgPGhhLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT4ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInBhbmVsLnByb2ZpbGVcIil9PC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNhcmQgLmhlYWRlcj0ke3RoaXMuaGFzcy51c2VyIS5uYW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLmN1cnJlbnRfdXNlclwiLFxuICAgICAgICAgICAgICAgIFwiZnVsbE5hbWVcIixcbiAgICAgICAgICAgICAgICB0aGlzLmhhc3MudXNlciEubmFtZVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy51c2VyIS5pc19vd25lclxuICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS5pc19vd25lclwiKVxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aGEtcGljay1sYW5ndWFnZS1yb3dcbiAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgID48L2hhLXBpY2stbGFuZ3VhZ2Utcm93PlxuICAgICAgICAgICAgPGhhLXBpY2stdGhlbWUtcm93XG4gICAgICAgICAgICAgIC5uYXJyb3c9JHt0aGlzLm5hcnJvd31cbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICA+PC9oYS1waWNrLXRoZW1lLXJvdz5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmRvY2tlZFNpZGViYXIgIT09IFwiYXV0b1wiIHx8ICF0aGlzLm5hcnJvd1xuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aGEtZm9yY2UtbmFycm93LXJvd1xuICAgICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtZm9yY2UtbmFycm93LXJvdz5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICR7bmF2aWdhdG9yLnZpYnJhdGVcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLXNldC12aWJyYXRlLXJvd1xuICAgICAgICAgICAgICAgICAgICAubmFycm93PSR7dGhpcy5uYXJyb3d9XG4gICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtc2V0LXZpYnJhdGUtcm93PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgPGhhLXB1c2gtbm90aWZpY2F0aW9ucy1yb3dcbiAgICAgICAgICAgICAgLm5hcnJvdz0ke3RoaXMubmFycm93fVxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgID48L2hhLXB1c2gtbm90aWZpY2F0aW9ucy1yb3c+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gY2xhc3M9XCJ3YXJuaW5nXCIgQGNsaWNrPSR7dGhpcy5faGFuZGxlTG9nT3V0fT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLnByb2ZpbGUubG9nb3V0XCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICAke3RoaXMuaGFzcy51c2VyIS5jcmVkZW50aWFscy5zb21lKFxuICAgICAgICAgICAgKGNyZWQpID0+IGNyZWQuYXV0aF9wcm92aWRlcl90eXBlID09PSBcImhvbWVhc3Npc3RhbnRcIlxuICAgICAgICAgIClcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtY2hhbmdlLXBhc3N3b3JkLWNhcmRcbiAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgID48L2hhLWNoYW5nZS1wYXNzd29yZC1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICA8aGEtbWZhLW1vZHVsZXMtY2FyZFxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAubWZhTW9kdWxlcz0ke3RoaXMuaGFzcy51c2VyIS5tZmFfbW9kdWxlc31cbiAgICAgICAgICA+PC9oYS1tZmEtbW9kdWxlcy1jYXJkPlxuXG4gICAgICAgICAgJHt0aGlzLmhhc3MudXNlciEuaXNfYWRtaW5cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtYWR2YW5jZWQtbW9kZS1jYXJkXG4gICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAgIC5jb3JlVXNlckRhdGE9JHt0aGlzLl9jb3JlVXNlckRhdGF9XG4gICAgICAgICAgICAgICAgPjwvaGEtYWR2YW5jZWQtbW9kZS1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICA8aGEtcmVmcmVzaC10b2tlbnMtY2FyZFxuICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAucmVmcmVzaFRva2Vucz0ke3RoaXMuX3JlZnJlc2hUb2tlbnN9XG4gICAgICAgICAgICBAaGFzcy1yZWZyZXNoLXRva2Vucz0ke3RoaXMuX3JlZnJlc2hSZWZyZXNoVG9rZW5zfVxuICAgICAgICAgID48L2hhLXJlZnJlc2gtdG9rZW5zLWNhcmQ+XG5cbiAgICAgICAgICA8aGEtbG9uZy1saXZlZC1hY2Nlc3MtdG9rZW5zLWNhcmRcbiAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgLnJlZnJlc2hUb2tlbnM9JHt0aGlzLl9yZWZyZXNoVG9rZW5zfVxuICAgICAgICAgICAgQGhhc3MtcmVmcmVzaC10b2tlbnM9JHt0aGlzLl9yZWZyZXNoUmVmcmVzaFRva2Vuc31cbiAgICAgICAgICA+PC9oYS1sb25nLWxpdmVkLWFjY2Vzcy10b2tlbnMtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZWZyZXNoUmVmcmVzaFRva2VucygpIHtcbiAgICB0aGlzLl9yZWZyZXNoVG9rZW5zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICB0eXBlOiBcImF1dGgvcmVmcmVzaF90b2tlbnNcIixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUxvZ091dCgpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLWxvZ291dFwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50ID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvbW8tYWR2YW5jZWQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtcHJvZmlsZVwiLCBIYVBhbmVsUHJvZmlsZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVBpY2tMYW5ndWFnZVJvdyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pdGVtW2lzLXJ0bF0ge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLXNldHRpbmdzLXJvdyBuYXJyb3c9XCJbW25hcnJvd11dXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sYW5ndWFnZS5oZWFkZXInKV1dPC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9lbi9pbnRlcm5hdGlvbmFsaXphdGlvbl90cmFuc2xhdGlvbi5odG1sXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sYW5ndWFnZS5saW5rX3Byb21vJyldXTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5sYW5ndWFnZS5kcm9wZG93bl9sYWJlbCcpXV1cIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwibGFuZ3VhZ2UtdGFnXCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3tsYW5ndWFnZVNlbGVjdGlvbn19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW2xhbmd1YWdlc11dXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIGxhbmd1YWdlLXRhZyQ9XCJbW2l0ZW0ua2V5XV1cIiBpcy1ydGwkPVwiW1tpdGVtLmlzUlRMXV1cIj5cbiAgICAgICAgICAgICAgICBbW2l0ZW0ubmF0aXZlTmFtZV1dXG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBsYW5ndWFnZVNlbGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImxhbmd1YWdlU2VsZWN0aW9uQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGxhbmd1YWdlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUxhbmd1YWdlcyhoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInNldExhbmd1YWdlU2VsZWN0aW9uKGxhbmd1YWdlKVwiXTtcbiAgfVxuXG4gIGNvbXB1dGVMYW5ndWFnZXMoaGFzcykge1xuICAgIGlmICghaGFzcyB8fCAhaGFzcy50cmFuc2xhdGlvbk1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IGhhc3MudHJhbnNsYXRpb25NZXRhZGF0YS50cmFuc2xhdGlvbnM7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRyYW5zbGF0aW9ucykubWFwKChrZXkpID0+ICh7XG4gICAgICBrZXksXG4gICAgICAuLi50cmFuc2xhdGlvbnNba2V5XSxcbiAgICB9KSk7XG4gIH1cblxuICBzZXRMYW5ndWFnZVNlbGVjdGlvbihsYW5ndWFnZSkge1xuICAgIHRoaXMubGFuZ3VhZ2VTZWxlY3Rpb24gPSBsYW5ndWFnZTtcbiAgfVxuXG4gIGxhbmd1YWdlU2VsZWN0aW9uQ2hhbmdlZChuZXdWYWwpIHtcbiAgICAvLyBPbmx5IGZpcmUgZXZlbnQgaWYgbGFuZ3VhZ2Ugd2FzIGNoYW5nZWQuIFRoaXMgcHJldmVudHMgc2VsZWN0IHVwZGF0ZXMgd2hlblxuICAgIC8vIHJlc3BvbmRpbmcgdG8gaGFzcyBjaGFuZ2VzLlxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuaGFzcy5sYW5ndWFnZSkge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1sYW5ndWFnZS1zZWxlY3RcIiwgeyBsYW5ndWFnZTogbmV3VmFsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKHRoaXMuaGFzcyAmJiB0aGlzLmhhc3MubGFuZ3VhZ2UpIHtcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2VTZWxlY3Rpb24odGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGljay1sYW5ndWFnZS1yb3dcIiwgSGFQaWNrTGFuZ3VhZ2VSb3cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFQaWNrVGhlbWVSb3cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IG5hcnJvdz1cIltbbmFycm93XV1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnRoZW1lcy5oZWFkZXInKV1dPC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaGFzVGhlbWVzXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUudGhlbWVzLmVycm9yX25vX3RoZW1lJyldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9pbnRlZ3JhdGlvbnMvZnJvbnRlbmQvI2RlZmluaW5nLXRoZW1lc1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUudGhlbWVzLmxpbmtfcHJvbW8nKV1dPC9hXG4gICAgICAgICAgPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnRoZW1lcy5kcm9wZG93bl9sYWJlbCcpXV1cIlxuICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICBkaXNhYmxlZD1cIltbIV9oYXNUaGVtZXNdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIHNlbGVjdGVkPVwie3tzZWxlY3RlZFRoZW1lfX1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdGhlbWVzXV1cIiBhcz1cInRoZW1lXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbdGhlbWVdXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2hhLXNldHRpbmdzLXJvdz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBfaGFzVGhlbWVzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wSGFzVGhlbWVzKGhhc3MpXCIsXG4gICAgICB9LFxuICAgICAgdGhlbWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVRoZW1lcyhoYXNzKVwiLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkVGhlbWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInNlbGVjdGlvbkNoYW5nZWQoaGFzcywgc2VsZWN0ZWRUaGVtZSlcIl07XG4gIH1cblxuICBfY29tcEhhc1RoZW1lcyhoYXNzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGhhc3MudGhlbWVzICYmXG4gICAgICBoYXNzLnRoZW1lcy50aGVtZXMgJiZcbiAgICAgIE9iamVjdC5rZXlzKGhhc3MudGhlbWVzLnRoZW1lcykubGVuZ3RoXG4gICAgKTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUgJiZcbiAgICAgIHRoaXMudGhlbWVzLmluZGV4T2YodGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUpID4gMFxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhpcy50aGVtZXMuaW5kZXhPZih0aGlzLmhhc3Muc2VsZWN0ZWRUaGVtZSk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNzLnNlbGVjdGVkVGhlbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IDE7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVUaGVtZXMoaGFzcykge1xuICAgIGlmICghaGFzcykgcmV0dXJuIFtdO1xuICAgIHJldHVybiBbXS5jb25jYXQoT2JqZWN0LmtleXMoaGFzcy50aGVtZXMudGhlbWVzKS5zb3J0KCkpO1xuICB9XG5cbiAgc2VsZWN0aW9uQ2hhbmdlZChoYXNzLCBzZWxlY3Rpb24pIHtcbiAgICBpZiAoc2VsZWN0aW9uID4gMCAmJiBzZWxlY3Rpb24gPCB0aGlzLnRoZW1lcy5sZW5ndGgpIHtcbiAgICAgIGlmIChoYXNzLnNlbGVjdGVkVGhlbWUgIT09IHRoaXMudGhlbWVzW3NlbGVjdGlvbl0pIHtcbiAgICAgICAgdGhpcy5maXJlKFwic2V0dGhlbWVcIiwgdGhpcy50aGVtZXNbc2VsZWN0aW9uXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWxlY3Rpb24gPT09IDAgJiYgaGFzcy5zZWxlY3RlZFRoZW1lICE9PSBcIlwiKSB7XG4gICAgICB0aGlzLmZpcmUoXCJzZXR0aGVtZVwiLCBcIlwiKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGljay10aGVtZS1yb3dcIiwgSGFQaWNrVGhlbWVSb3cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tbGFiZWwvaXJvbi1sYWJlbFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IHB1c2hTdXBwb3J0ZWQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oYS1wdXNoLW5vdGlmaWNhdGlvbnMtdG9nZ2xlXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9oYS1zZXR0aW5ncy1yb3dcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVB1c2hOb3RpZmljYXRpb25zUm93IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IG5hcnJvdz1cIltbbmFycm93XV1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnB1c2hfbm90aWZpY2F0aW9ucy5oZWFkZXInKV1dPC9zcGFuXG4gICAgICAgID5cbiAgICAgICAgPHNwYW4gc2xvdD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgW1tfZGVzY3JpcHRpb24oX3BsYXRmb3JtTG9hZGVkLCBfcHVzaFN1cHBvcnRlZCldXVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vaW50ZWdyYXRpb25zL25vdGlmeS5odG1sNS9cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnB1c2hfbm90aWZpY2F0aW9ucy5saW5rX3Byb21vJyldXTwvYVxuICAgICAgICAgID5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW19lcnJvcl1dXCJcbiAgICAgICAgPjwvaGEtcHVzaC1ub3RpZmljYXRpb25zLXRvZ2dsZT5cbiAgICAgIDwvaGEtc2V0dGluZ3Mtcm93PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcbiAgICAgIF9wbGF0Zm9ybUxvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcFBsYXRmb3JtTG9hZGVkKGhhc3MpXCIsXG4gICAgICB9LFxuICAgICAgX3B1c2hTdXBwb3J0ZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHB1c2hTdXBwb3J0ZWQsXG4gICAgICB9LFxuICAgICAgX2Vycm9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wRXJyb3IoX3BsYXRmb3JtTG9hZGVkLCBfcHVzaFN1cHBvcnRlZClcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wUGxhdGZvcm1Mb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcIm5vdGlmeS5odG1sNVwiKTtcbiAgfVxuXG4gIF9jb21wRXJyb3IocGxhdGZvcm1Mb2FkZWQsIHB1c2hTdXBwb3J0ZWRfKSB7XG4gICAgcmV0dXJuICFwbGF0Zm9ybUxvYWRlZCB8fCAhcHVzaFN1cHBvcnRlZF87XG4gIH1cblxuICBfZGVzY3JpcHRpb24ocGxhdGZvcm1Mb2FkZWQsIHB1c2hTdXBwb3J0ZWRfKSB7XG4gICAgbGV0IGtleTtcbiAgICBpZiAoIXB1c2hTdXBwb3J0ZWRfKSB7XG4gICAgICBrZXkgPSBcImVycm9yX3VzZV9odHRwc1wiO1xuICAgIH0gZWxzZSBpZiAoIXBsYXRmb3JtTG9hZGVkKSB7XG4gICAgICBrZXkgPSBcImVycm9yX2xvYWRfcGxhdGZvcm1cIjtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShgdWkucGFuZWwucHJvZmlsZS5wdXNoX25vdGlmaWNhdGlvbnMuJHtrZXl9YCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHVzaC1ub3RpZmljYXRpb25zLXJvd1wiLCBIYVB1c2hOb3RpZmljYXRpb25zUm93KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5cbmltcG9ydCBcIi4vaGEtc2V0dGluZ3Mtcm93XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWZyZXNoVG9rZW5zIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5oZWFkZXInKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmRlc2NyaXB0aW9uJyldXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfY29tcHV0ZVRva2VucyhyZWZyZXNoVG9rZW5zKV1dXCI+XG4gICAgICAgICAgPGhhLXNldHRpbmdzLXJvdyB0aHJlZS1saW5lPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRpbmdcIj5bW19mb3JtYXRUaXRsZShpdGVtLmNsaWVudF9pZCldXTwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImRlc2NyaXB0aW9uXCI+W1tfZm9ybWF0Q3JlYXRlZEF0KGl0ZW0uY3JlYXRlZF9hdCldXTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiZGVzY3JpcHRpb25cIj5bW19mb3JtYXRMYXN0VXNlZChpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaXRlbS5pc19jdXJyZW50XV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdG9vbHRpcCBwb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMuY3VycmVudF90b2tlbl90b29sdGlwJyldXTwvcGFwZXItdG9vbHRpcFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9oYW5kbGVEZWxldGVcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpdGVtLmlzX2N1cnJlbnRdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1zZXR0aW5ncy1yb3c+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgcmVmcmVzaFRva2VuczogQXJyYXksXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlVG9rZW5zKHJlZnJlc2hUb2tlbnMpIHtcbiAgICByZXR1cm4gcmVmcmVzaFRva2Vucy5maWx0ZXIoKHRrbikgPT4gdGtuLnR5cGUgPT09IFwibm9ybWFsXCIpLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9mb3JtYXRUaXRsZShjbGllbnRJZCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFxuICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLnRva2VuX3RpdGxlXCIsXG4gICAgICBcImNsaWVudElkXCIsXG4gICAgICBjbGllbnRJZFxuICAgICk7XG4gIH1cblxuICBfZm9ybWF0Q3JlYXRlZEF0KGNyZWF0ZWQpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbGl6ZShcbiAgICAgIFwidWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5jcmVhdGVkX2F0XCIsXG4gICAgICBcImRhdGVcIixcbiAgICAgIGZvcm1hdERhdGVUaW1lKG5ldyBEYXRlKGNyZWF0ZWQpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIF9mb3JtYXRMYXN0VXNlZChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0ubGFzdF91c2VkX2F0XG4gICAgICA/IHRoaXMubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmxhc3RfdXNlZFwiLFxuICAgICAgICAgIFwiZGF0ZVwiLFxuICAgICAgICAgIGZvcm1hdERhdGVUaW1lKG5ldyBEYXRlKGl0ZW0ubGFzdF91c2VkX2F0KSwgdGhpcy5oYXNzLmxhbmd1YWdlKSxcbiAgICAgICAgICBcImxvY2F0aW9uXCIsXG4gICAgICAgICAgaXRlbS5sYXN0X3VzZWRfaXBcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS5yZWZyZXNoX3Rva2Vucy5ub3RfdXNlZFwiKTtcbiAgfVxuXG4gIGFzeW5jIF9oYW5kbGVEZWxldGUoZXYpIHtcbiAgICBpZiAoXG4gICAgICAhY29uZmlybShcbiAgICAgICAgdGhpcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnByb2ZpbGUucmVmcmVzaF90b2tlbnMuY29uZmlybV9kZWxldGVcIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICBldi5tb2RlbC5pdGVtLmNsaWVudF9pZFxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgdHlwZTogXCJhdXRoL2RlbGV0ZV9yZWZyZXNoX3Rva2VuXCIsXG4gICAgICAgIHJlZnJlc2hfdG9rZW5faWQ6IGV2Lm1vZGVsLml0ZW0uaWQsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtcmVmcmVzaC10b2tlbnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGFsZXJ0KHRoaXMubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLnJlZnJlc2hfdG9rZW5zLmRlbGV0ZV9mYWlsZWRcIikpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWZyZXNoLXRva2Vucy1jYXJkXCIsIEhhUmVmcmVzaFRva2Vucyk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXNldHRpbmdzLXJvd1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcbmltcG9ydCB7IGZvcndhcmRIYXB0aWMgfSBmcm9tIFwiLi4vLi4vZGF0YS9oYXB0aWNzXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc2V0LXZpYnJhdGUtcm93XCIpXG5jbGFzcyBIYVNldFZpYnJhdGVSb3cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93ITogYm9vbGVhbjtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtc2V0dGluZ3Mtcm93IC5uYXJyb3c9JHt0aGlzLm5hcnJvd30+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkaW5nXCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5wcm9maWxlLnZpYnJhdGUuaGVhZGVyXCIpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwucHJvZmlsZS52aWJyYXRlLmRlc2NyaXB0aW9uXCIpfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuaGFzcy52aWJyYXRlfVxuICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9jaGVja2VkQ2hhbmdlZH1cbiAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgPC9oYS1zZXR0aW5ncy1yb3c+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NoZWNrZWRDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IHZpYnJhdGUgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkO1xuICAgIGlmICh2aWJyYXRlID09PSB0aGlzLmhhc3MudmlicmF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLXZpYnJhdGVcIiwge1xuICAgICAgdmlicmF0ZSxcbiAgICB9KTtcbiAgICBmb3J3YXJkSGFwdGljKFwibGlnaHRcIik7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXNldC12aWJyYXRlLXJvd1wiOiBIYVNldFZpYnJhdGVSb3c7XG4gIH1cbn1cbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhU2V0dGluZ3NSb3cgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBub3JtYWw7XG4gICAgICAgICAgYWxpZ24tc2VsZjogYXV0bztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtuYXJyb3ddKSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IG5vcm1hbDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWl0ZW0tYm9keSB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmUkPVwiW1shdGhyZWVMaW5lXV1cIiB0aHJlZS1saW5lJD1cIltbdGhyZWVMaW5lXV1cIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRpbmdcIj48L3Nsb3Q+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PjxzbG90IG5hbWU9XCJkZXNjcmlwdGlvblwiPjwvc2xvdD48L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgdGhyZWVMaW5lOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zZXR0aW5ncy1yb3dcIiwgSGFTZXR0aW5nc1Jvdyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFTQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBOERBOzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBU0E7QUFFQTtBQU1BO0FBSUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUF4Q0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBUUE7QUFDQTtBQUdBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFFQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTs7QUFFQTtBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7QUFLQTtBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFyS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBb0tBOzs7Ozs7Ozs7Ozs7O0FDaE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFRQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBSUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=