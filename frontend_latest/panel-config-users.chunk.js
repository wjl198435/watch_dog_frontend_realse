(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-users"],{

/***/ "./node_modules/lit-html/directives/until.js":
/*!***************************************************!*\
  !*** ./node_modules/lit-html/directives/until.js ***!
  \***************************************************/
/*! exports provided: until */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony import */ var _lib_parts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/parts.js */ "./node_modules/lit-html/lib/parts.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */


const _state = new WeakMap();
// Effectively infinity, but a SMI.
const _infinity = 0x7fffffff;
/**
 * Renders one of a series of values, including Promises, to a Part.
 *
 * Values are rendered in priority order, with the first argument having the
 * highest priority and the last argument having the lowest priority. If a
 * value is a Promise, low-priority values will be rendered until it resolves.
 *
 * The priority of values can be used to create placeholder content for async
 * data. For example, a Promise with pending content can be the first,
 * highest-priority, argument, and a non_promise loading indicator template can
 * be used as the second, lower-priority, argument. The loading indicator will
 * render immediately, and the primary content will render when the Promise
 * resolves.
 *
 * Example:
 *
 *     const content = fetch('./content.txt').then(r => r.text());
 *     html`${until(content, html`<span>Loading...</span>`)}`
 */
const until = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_1__["directive"])((...args) => (part) => {
    let state = _state.get(part);
    if (state === undefined) {
        state = {
            lastRenderedIndex: _infinity,
            values: [],
        };
        _state.set(part, state);
    }
    const previousValues = state.values;
    let previousLength = previousValues.length;
    state.values = args;
    for (let i = 0; i < args.length; i++) {
        // If we've rendered a higher-priority value already, stop.
        if (i > state.lastRenderedIndex) {
            break;
        }
        const value = args[i];
        // Render non-Promise values immediately
        if (Object(_lib_parts_js__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"])(value) ||
            typeof value.then !== 'function') {
            part.setValue(value);
            state.lastRenderedIndex = i;
            // Since a lower-priority value will never overwrite a higher-priority
            // synchronous value, we can stop processsing now.
            break;
        }
        // If this is a Promise we've already handled, skip it.
        if (i < previousLength && value === previousValues[i]) {
            continue;
        }
        // We have a Promise that we haven't seen before, so priorities may have
        // changed. Forget what we rendered before.
        state.lastRenderedIndex = _infinity;
        previousLength = 0;
        Promise.resolve(value).then((resolvedValue) => {
            const index = state.values.indexOf(value);
            // If state.values doesn't contain the value, we've re-rendered without
            // the value, so don't render it. Then, only render if the value is
            // higher-priority than what's already been rendered.
            if (index > -1 && index < state.lastRenderedIndex) {
                state.lastRenderedIndex = index;
                part.setValue(resolvedValue);
                part.commit();
            }
        });
    }
});
//# sourceMappingURL=until.js.map

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
const MwcFab = customElements.get("mwc-fab");
let HaFab = class HaFab extends MwcFab {
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    render() {
        const classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        const showLabel = this.label !== "" && this.extended;
        return _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <button
        .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])()}"
        class="mdc-fab ${Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label || this.icon}"
      >
        ${showLabel && this.showIconAtEnd ? this.label : ""}
        ${this.icon
            ? _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-icon .icon=${this.icon}></ha-icon>
            `
            : ""}
        ${showLabel && !this.showIconAtEnd ? this.label : ""}
      </button>
    `;
    }
};
HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
], HaFab);



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
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");

// Not duplicate, this is for typing.
// tslint:disable-next-line

class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"] {
    connectedCallback() {
        super.connectedCallback();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            this.icon =
                window.getComputedStyle(this).direction === "ltr"
                    ? "hass:chevron-right"
                    : "hass:chevron-left";
        }, 100);
    }
}
customElements.define("ha-icon-next", HaIconNext);


/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
    listen(node, eventName, methodName) {
        super.listen(node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    }
}
customElements.define("ha-icon", HaIcon);


/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
const SYSTEM_GROUP_ID_ADMIN = "system-admin";
const SYSTEM_GROUP_ID_USER = "system-users";
const SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
const fetchUsers = async (hass) => hass.callWS({
    type: "config/auth/list",
});
const createUser = async (hass, name) => hass.callWS({
    type: "config/auth/create",
    name,
});
const updateUser = async (hass, userId, params) => hass.callWS(Object.assign(Object.assign({}, params), { type: "config/auth/update", user_id: userId }));
const deleteUser = async (hass, userId) => hass.callWS({
    type: "config/auth/delete",
    user_id: userId,
});


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

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      navigate(...args) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
      }
    }
));


/***/ }),

/***/ "./src/panels/config/users/ha-config-user-picker.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/users/ha-config-user-picker.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
















let registeredDialog = false;

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 */
class HaUserPicker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(
  Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]))
) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        ha-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }
        ha-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }
        ha-fab[rtl] {
          right: auto;
          left: 16px;
        }
        ha-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }

        ha-card {
          max-width: 600px;
          margin: 16px auto;
          overflow: hidden;
        }
        a {
          text-decoration: none;
          color: var(--primary-text-color);
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.users.picker.title')]]">
        <ha-card>
          <template is="dom-repeat" items="[[users]]" as="user">
            <a href="[[_computeUrl(user)]]">
              <paper-item>
                <paper-item-body two-line>
                  <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
                  <div secondary="">
                    [[_computeGroup(localize, user)]]
                    <template is="dom-if" if="[[user.system_generated]]">
                      -
                      [[localize('ui.panel.config.users.picker.system_generated')]]
                    </template>
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </a>
          </template>
        </ha-card>

        <ha-fab
          is-wide$="[[isWide]]"
          icon="hass:plus"
          title="[[localize('ui.panel.config.users.picker.add_user')]]"
          on-click="_addUser"
          rtl$="[[rtl]]"
        ></ha-fab>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      users: Array,

      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-add-user",
        dialogTag: "ha-dialog-add-user",
        dialogImport: () =>
          Promise.all(/*! import() | ha-dialog-add-user */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~ha-dialog-add-user"), __webpack_require__.e("ha-dialog-add-user")]).then(__webpack_require__.bind(null, /*! ./ha-dialog-add-user */ "./src/panels/config/users/ha-dialog-add-user.js")),
      });
    }
  }

  _withDefault(value, defaultValue) {
    return value || defaultValue;
  }

  _computeUrl(user) {
    return `/config/users/${user.id}`;
  }

  _computeGroup(localize, user) {
    return localize(`groups.${user.group_ids[0]}`);
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(hass);
  }

  _addUser() {
    this.fire("show-add-user", {
      hass: this.hass,
      dialogClosedCallback: async ({ userId }) => {
        this.fire("reload-users");
        if (userId) this.navigate(`/config/users/${userId}`);
      },
    });
  }
}

customElements.define("ha-config-user-picker", HaUserPicker);


/***/ }),

/***/ "./src/panels/config/users/ha-config-users.js":
/*!****************************************************!*\
  !*** ./src/panels/config/users/ha-config-users.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _ha_config_user_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-config-user-picker */ "./src/panels/config/users/ha-config-user-picker.js");
/* harmony import */ var _ha_user_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-user-editor */ "./src/panels/config/users/ha-user-editor.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");













/*
 * @appliesMixin NavigateMixin
 */
class HaConfigUsers extends Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <app-route
        route="[[route]]"
        pattern="/:user"
        data="{{_routeData}}"
      ></app-route>

      <template is="dom-if" if='[[_equals(_routeData.user, "picker")]]'>
        <ha-config-user-picker
          hass="[[hass]]"
          users="[[_users]]"
        ></ha-config-user-picker>
      </template>
      <template
        is="dom-if"
        if='[[!_equals(_routeData.user, "picker")]]'
        restamp
      >
        <ha-user-editor
          hass="[[hass]]"
          user="[[_computeUser(_users, _routeData.user)]]"
        ></ha-user-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: {
        type: Object,
        observer: "_checkRoute",
      },
      _routeData: Object,
      _user: {
        type: Object,
        value: null,
      },
      _users: {
        type: Array,
        value: null,
      },
    };
  }

  ready() {
    super.ready();
    this._loadData();
    this.addEventListener("reload-users", () => this._loadData());
  }

  _handlePickUser(ev) {
    this._user = ev.detail.user;
  }

  _checkRoute(route) {
    // prevent list getting under toolbar
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "iron-resize");

    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(
      this._debouncer,
      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(0),
      () => {
        if (route.path === "") {
          this.navigate(`${route.prefix}/picker`, true);
        }
      }
    );
  }

  _computeUser(users, userId) {
    return users && users.filter((u) => u.id === userId)[0];
  }

  _equals(a, b) {
    return a === b;
  }

  async _loadData() {
    this._users = await Object(_data_user__WEBPACK_IMPORTED_MODULE_9__["fetchUsers"])(this.hass);
  }
}

customElements.define("ha-config-users", HaConfigUsers);


/***/ }),

/***/ "./src/panels/config/users/ha-user-editor.ts":
/*!***************************************************!*\
  !*** ./src/panels/config/users/ha-user-editor.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_until__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/until */ "./node_modules/lit-html/directives/until.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");











const GROUPS = [_data_user__WEBPACK_IMPORTED_MODULE_9__["SYSTEM_GROUP_ID_USER"], _data_user__WEBPACK_IMPORTED_MODULE_9__["SYSTEM_GROUP_ID_ADMIN"]];
let HaUserEditor = class HaUserEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        const hass = this.hass;
        const user = this.user;
        if (!hass || !user) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hass-subpage
        .header=${hass.localize("ui.panel.config.users.editor.caption")}
      >
        <ha-card .header=${this._name}>
          <table class="card-content">
            <tr>
              <td>${hass.localize("ui.panel.config.users.editor.id")}</td>
              <td>${user.id}</td>
            </tr>
            <tr>
              <td>${hass.localize("ui.panel.config.users.editor.owner")}</td>
              <td>${user.is_owner}</td>
            </tr>
            <tr>
              <td>${hass.localize("ui.panel.config.users.editor.group")}</td>
              <td>
                <select
                  @change=${this._handleGroupChange}
                  .value=${Object(lit_html_directives_until__WEBPACK_IMPORTED_MODULE_2__["until"])(this.updateComplete.then(() => user.group_ids[0]))}
                >
                  ${GROUPS.map((groupId) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <option value=${groupId}>
                        ${hass.localize(`groups.${groupId}`)}
                      </option>
                    `)}
                </select>
              </td>
            </tr>
            ${user.group_ids[0] === _data_user__WEBPACK_IMPORTED_MODULE_9__["SYSTEM_GROUP_ID_USER"]
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <tr>
                    <td colspan="2" class="user-experiment">
                      The users group is a work in progress. The user will be
                      unable to administer the instance via the UI. We're still
                      auditing all management API endpoints to ensure that they
                      correctly limit access to administrators.
                    </td>
                  </tr>
                `
            : ""}

            <tr>
              <td>${hass.localize("ui.panel.config.users.editor.active")}</td>
              <td>${user.is_active}</td>
            </tr>
            <tr>
              <td>
                ${hass.localize("ui.panel.config.users.editor.system_generated")}
              </td>
              <td>${user.system_generated}</td>
            </tr>
          </table>

          <div class="card-actions">
            <mwc-button @click=${this._handleRenameUser}>
              ${hass.localize("ui.panel.config.users.editor.rename_user")}
            </mwc-button>
            <mwc-button
              class="warning"
              @click=${this._deleteUser}
              .disabled=${user.system_generated}
            >
              ${hass.localize("ui.panel.config.users.editor.delete_user")}
            </mwc-button>
            ${user.system_generated
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  ${hass.localize("ui.panel.config.users.editor.system_generated_users_not_removable")}
                `
            : ""}
          </div>
        </ha-card>
      </hass-subpage>
    `;
    }
    get _name() {
        return (this.user &&
            (this.user.name ||
                this.hass.localize("ui.panel.config.users.editor.unnamed_user")));
    }
    async _handleRenameUser(ev) {
        ev.currentTarget.blur();
        const newName = prompt(this.hass.localize("ui.panel.config.users.editor.enter_new_name"), this.user.name);
        if (newName === null || newName === this.user.name) {
            return;
        }
        try {
            await Object(_data_user__WEBPACK_IMPORTED_MODULE_9__["updateUser"])(this.hass, this.user.id, {
                name: newName,
            });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "reload-users");
        }
        catch (err) {
            alert(`${this.hass.localize("ui.panel.config.users.editor.user_rename_failed")} ${err.message}`);
        }
    }
    async _handleGroupChange(ev) {
        const selectEl = ev.currentTarget;
        const newGroup = selectEl.value;
        try {
            await Object(_data_user__WEBPACK_IMPORTED_MODULE_9__["updateUser"])(this.hass, this.user.id, {
                group_ids: [newGroup],
            });
            Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_10__["showSaveSuccessToast"])(this, this.hass);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "reload-users");
        }
        catch (err) {
            alert(`${this.hass.localize("ui.panel.config.users.editor.group_update_failed")} ${err.message}`);
            selectEl.value = this.user.group_ids[0];
        }
    }
    async _deleteUser(ev) {
        if (!confirm(this.hass.localize("ui.panel.config.users.editor.confirm_user_deletion", "name", this._name))) {
            ev.target.blur();
            return;
        }
        try {
            await Object(_data_user__WEBPACK_IMPORTED_MODULE_9__["deleteUser"])(this.hass, this.user.id);
        }
        catch (err) {
            alert(err.code);
            return;
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "reload-users");
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_8__["navigate"])(this, "/config/users");
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        ha-card {
          max-width: 600px;
          margin: 0 auto 16px;
        }
        hass-subpage ha-card:first-of-type {
          direction: ltr;
        }
        table {
          width: 100%;
        }
        td {
          vertical-align: top;
        }
        .user-experiment {
          padding: 8px 0;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaUserEditor.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaUserEditor.prototype, "user", void 0);
HaUserEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-user-editor")
], HaUserEditor);


/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

const showSaveSuccessToast = (el, hass) => Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
    message: hass.localize("ui.common.successfully_saved"),
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXVzZXJzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbmF2aWdhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvdXNlcnMvaGEtY29uZmlnLXVzZXItcGlja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3VzZXJzL2hhLWNvbmZpZy11c2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy91c2Vycy9oYS11c2VyLWVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuICogVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXRcbiAqIGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gKiBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuICogc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4gKi9cbmltcG9ydCB7IGlzUHJpbWl0aXZlIH0gZnJvbSAnLi4vbGliL3BhcnRzLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmNvbnN0IF9zdGF0ZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBFZmZlY3RpdmVseSBpbmZpbml0eSwgYnV0IGEgU01JLlxuY29uc3QgX2luZmluaXR5ID0gMHg3ZmZmZmZmZjtcbi8qKlxuICogUmVuZGVycyBvbmUgb2YgYSBzZXJpZXMgb2YgdmFsdWVzLCBpbmNsdWRpbmcgUHJvbWlzZXMsIHRvIGEgUGFydC5cbiAqXG4gKiBWYWx1ZXMgYXJlIHJlbmRlcmVkIGluIHByaW9yaXR5IG9yZGVyLCB3aXRoIHRoZSBmaXJzdCBhcmd1bWVudCBoYXZpbmcgdGhlXG4gKiBoaWdoZXN0IHByaW9yaXR5IGFuZCB0aGUgbGFzdCBhcmd1bWVudCBoYXZpbmcgdGhlIGxvd2VzdCBwcmlvcml0eS4gSWYgYVxuICogdmFsdWUgaXMgYSBQcm9taXNlLCBsb3ctcHJpb3JpdHkgdmFsdWVzIHdpbGwgYmUgcmVuZGVyZWQgdW50aWwgaXQgcmVzb2x2ZXMuXG4gKlxuICogVGhlIHByaW9yaXR5IG9mIHZhbHVlcyBjYW4gYmUgdXNlZCB0byBjcmVhdGUgcGxhY2Vob2xkZXIgY29udGVudCBmb3IgYXN5bmNcbiAqIGRhdGEuIEZvciBleGFtcGxlLCBhIFByb21pc2Ugd2l0aCBwZW5kaW5nIGNvbnRlbnQgY2FuIGJlIHRoZSBmaXJzdCxcbiAqIGhpZ2hlc3QtcHJpb3JpdHksIGFyZ3VtZW50LCBhbmQgYSBub25fcHJvbWlzZSBsb2FkaW5nIGluZGljYXRvciB0ZW1wbGF0ZSBjYW5cbiAqIGJlIHVzZWQgYXMgdGhlIHNlY29uZCwgbG93ZXItcHJpb3JpdHksIGFyZ3VtZW50LiBUaGUgbG9hZGluZyBpbmRpY2F0b3Igd2lsbFxuICogcmVuZGVyIGltbWVkaWF0ZWx5LCBhbmQgdGhlIHByaW1hcnkgY29udGVudCB3aWxsIHJlbmRlciB3aGVuIHRoZSBQcm9taXNlXG4gKiByZXNvbHZlcy5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICBjb25zdCBjb250ZW50ID0gZmV0Y2goJy4vY29udGVudC50eHQnKS50aGVuKHIgPT4gci50ZXh0KCkpO1xuICogICAgIGh0bWxgJHt1bnRpbChjb250ZW50LCBodG1sYDxzcGFuPkxvYWRpbmcuLi48L3NwYW4+YCl9YFxuICovXG5leHBvcnQgY29uc3QgdW50aWwgPSBkaXJlY3RpdmUoKC4uLmFyZ3MpID0+IChwYXJ0KSA9PiB7XG4gICAgbGV0IHN0YXRlID0gX3N0YXRlLmdldChwYXJ0KTtcbiAgICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhc3RSZW5kZXJlZEluZGV4OiBfaW5maW5pdHksXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBfc3RhdGUuc2V0KHBhcnQsIHN0YXRlKTtcbiAgICB9XG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZXMgPSBzdGF0ZS52YWx1ZXM7XG4gICAgbGV0IHByZXZpb3VzTGVuZ3RoID0gcHJldmlvdXNWYWx1ZXMubGVuZ3RoO1xuICAgIHN0YXRlLnZhbHVlcyA9IGFyZ3M7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHdlJ3ZlIHJlbmRlcmVkIGEgaGlnaGVyLXByaW9yaXR5IHZhbHVlIGFscmVhZHksIHN0b3AuXG4gICAgICAgIGlmIChpID4gc3RhdGUubGFzdFJlbmRlcmVkSW5kZXgpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXJnc1tpXTtcbiAgICAgICAgLy8gUmVuZGVyIG5vbi1Qcm9taXNlIHZhbHVlcyBpbW1lZGlhdGVseVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodmFsdWUpIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUudGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcGFydC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCA9IGk7XG4gICAgICAgICAgICAvLyBTaW5jZSBhIGxvd2VyLXByaW9yaXR5IHZhbHVlIHdpbGwgbmV2ZXIgb3ZlcndyaXRlIGEgaGlnaGVyLXByaW9yaXR5XG4gICAgICAgICAgICAvLyBzeW5jaHJvbm91cyB2YWx1ZSwgd2UgY2FuIHN0b3AgcHJvY2Vzc3Npbmcgbm93LlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIFByb21pc2Ugd2UndmUgYWxyZWFkeSBoYW5kbGVkLCBza2lwIGl0LlxuICAgICAgICBpZiAoaSA8IHByZXZpb3VzTGVuZ3RoICYmIHZhbHVlID09PSBwcmV2aW91c1ZhbHVlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2UgaGF2ZSBhIFByb21pc2UgdGhhdCB3ZSBoYXZlbid0IHNlZW4gYmVmb3JlLCBzbyBwcmlvcml0aWVzIG1heSBoYXZlXG4gICAgICAgIC8vIGNoYW5nZWQuIEZvcmdldCB3aGF0IHdlIHJlbmRlcmVkIGJlZm9yZS5cbiAgICAgICAgc3RhdGUubGFzdFJlbmRlcmVkSW5kZXggPSBfaW5maW5pdHk7XG4gICAgICAgIHByZXZpb3VzTGVuZ3RoID0gMDtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKChyZXNvbHZlZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN0YXRlLnZhbHVlcy5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIElmIHN0YXRlLnZhbHVlcyBkb2Vzbid0IGNvbnRhaW4gdGhlIHZhbHVlLCB3ZSd2ZSByZS1yZW5kZXJlZCB3aXRob3V0XG4gICAgICAgICAgICAvLyB0aGUgdmFsdWUsIHNvIGRvbid0IHJlbmRlciBpdC4gVGhlbiwgb25seSByZW5kZXIgaWYgdGhlIHZhbHVlIGlzXG4gICAgICAgICAgICAvLyBoaWdoZXItcHJpb3JpdHkgdGhhbiB3aGF0J3MgYWxyZWFkeSBiZWVuIHJlbmRlcmVkLlxuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBzdGF0ZS5sYXN0UmVuZGVyZWRJbmRleCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmxhc3RSZW5kZXJlZEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcGFydC5zZXRWYWx1ZShyZXNvbHZlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXJ0LmNvbW1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVudGlsLmpzLm1hcCIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5jbGFzcyBIYUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhlYWRlcj86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYS1jYXJkLWJvcmRlci1yYWRpdXMsIDJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYm94LXNoYWRvdyxcbiAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtaGVhZGVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWhlYWRlcikge1xuICAgICAgICBjb2xvcjogdmFyKC0taGEtY2FyZC1oZWFkZXItY29sb3IsIC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LXNpemUsIDI0cHgpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50Om5vdCg6Zmlyc3QtY2hpbGQpKSxcbiAgICAgIHNsb3Q6bm90KDpmaXJzdC1jaGlsZCk6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLmhlYWRlclxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj4ke3RoaXMuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYGB9XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkXCIsIEhhQ2FyZCk7XG4iLCJpbXBvcnQge1xuICBjbGFzc01hcCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qc1wiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjRmFiID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWZhYlwiKSBhcyBDb25zdHJ1Y3RvcjxGYWI+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZhYlwiKVxuZXhwb3J0IGNsYXNzIEhhRmFiIGV4dGVuZHMgTXdjRmFiIHtcbiAgLy8gV2Ugb3ZlcnJpZGUgdGhlIHJlbmRlciBtZXRob2QgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFuIGljb24gZm9udCBhbmQgbXdjLWZhYiBkb2Vzbid0IHN1cHBvcnQgb3VyIHN2Zy1pY29uIHNldHMuXG4gIC8vIEJhc2VkIG9uIHZlcnNpb24gbXdjLWZhYiAwLjhcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJtZGMtZmFiLS1taW5pXCI6IHRoaXMubWluaSxcbiAgICAgIFwibWRjLWZhYi0tZXhpdGVkXCI6IHRoaXMuZXhpdGVkLFxuICAgICAgXCJtZGMtZmFiLS1leHRlbmRlZFwiOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gXCJcIiAmJiB0aGlzLmV4dGVuZGVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvblxuICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCJcbiAgICAgID5cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5pY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZmFiXCI6IEhhRmFiO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaWNvbiA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICAgID8gXCJoYXNzOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb24tbmV4dFwiOiBIYUljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb24tbmV4dFwiLCBIYUljb25OZXh0KTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbCB9IGZyb20gXCIuL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9BRE1JTiA9IFwic3lzdGVtLWFkbWluXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX1VTRVIgPSBcInN5c3RlbS11c2Vyc1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9SRUFEX09OTFkgPSBcInN5c3RlbS1yZWFkLW9ubHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc19vd25lcjogYm9vbGVhbjtcbiAgaXNfYWN0aXZlOiBib29sZWFuO1xuICBzeXN0ZW1fZ2VuZXJhdGVkOiBib29sZWFuO1xuICBncm91cF9pZHM6IHN0cmluZ1tdO1xuICBjcmVkZW50aWFsczogQ3JlZGVudGlhbFtdO1xufVxuXG5pbnRlcmZhY2UgVXBkYXRlVXNlclBhcmFtcyB7XG4gIG5hbWU/OiBVc2VyW1wibmFtZVwiXTtcbiAgZ3JvdXBfaWRzPzogVXNlcltcImdyb3VwX2lkc1wiXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8VXNlcltdPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50LCBuYW1lOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9jcmVhdGVcIixcbiAgICBuYW1lLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVzZXJJZDogc3RyaW5nLFxuICBwYXJhbXM6IFVwZGF0ZVVzZXJQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8eyB1c2VyOiBVc2VyIH0+KHtcbiAgICAuLi5wYXJhbXMsXG4gICAgdHlwZTogXCJjb25maWcvYXV0aC91cGRhdGVcIixcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50LCB1c2VySWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8dm9pZD4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvZGVsZXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbi8qXG4gKiBAcG9seW1lck1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBuYXZpZ2F0ZSguLi5hcmdzKSB7XG4gICAgICAgIG5hdmlnYXRlKHRoaXMsIC4uLmFyZ3MpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLW5leHRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IE5hdmlnYXRlTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9uYXZpZ2F0ZS1taXhpblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVVzZXJQaWNrZXIgZXh0ZW5kcyBFdmVudHNNaXhpbihcbiAgTmF2aWdhdGVNaXhpbihMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSlcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1mYWIge1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICBib3R0b206IDE2cHg7XG4gICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWJbcnRsXSB7XG4gICAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5waWNrZXIudGl0bGUnKV1dXCI+XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbdXNlcnNdXVwiIGFzPVwidXNlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIltbX2NvbXB1dGVVcmwodXNlcildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgICAgICAgPGRpdj5bW193aXRoRGVmYXVsdCh1c2VyLm5hbWUsICdVbm5hbWVkIFVzZXInKV1dPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlR3JvdXAobG9jYWxpemUsIHVzZXIpXV1cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3VzZXIuc3lzdGVtX2dlbmVyYXRlZF1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy51c2Vycy5waWNrZXIuc3lzdGVtX2dlbmVyYXRlZCcpXV1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgPGhhLWZhYlxuICAgICAgICAgIGlzLXdpZGUkPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgdGl0bGU9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcudXNlcnMucGlja2VyLmFkZF91c2VyJyldXVwiXG4gICAgICAgICAgb24tY2xpY2s9XCJfYWRkVXNlclwiXG4gICAgICAgICAgcnRsJD1cIltbcnRsXV1cIlxuICAgICAgICA+PC9oYS1mYWI+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICB1c2VyczogQXJyYXksXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgICByZWdpc3RlcmVkRGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZmlyZShcInJlZ2lzdGVyLWRpYWxvZ1wiLCB7XG4gICAgICAgIGRpYWxvZ1Nob3dFdmVudDogXCJzaG93LWFkZC11c2VyXCIsXG4gICAgICAgIGRpYWxvZ1RhZzogXCJoYS1kaWFsb2ctYWRkLXVzZXJcIixcbiAgICAgICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhhLWRpYWxvZy1hZGQtdXNlclwiICovIFwiLi9oYS1kaWFsb2ctYWRkLXVzZXJcIiksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfd2l0aERlZmF1bHQodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSB8fCBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICBfY29tcHV0ZVVybCh1c2VyKSB7XG4gICAgcmV0dXJuIGAvY29uZmlnL3VzZXJzLyR7dXNlci5pZH1gO1xuICB9XG5cbiAgX2NvbXB1dGVHcm91cChsb2NhbGl6ZSwgdXNlcikge1xuICAgIHJldHVybiBsb2NhbGl6ZShgZ3JvdXBzLiR7dXNlci5ncm91cF9pZHNbMF19YCk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cblxuICBfYWRkVXNlcigpIHtcbiAgICB0aGlzLmZpcmUoXCJzaG93LWFkZC11c2VyXCIsIHtcbiAgICAgIGhhc3M6IHRoaXMuaGFzcyxcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoXCJyZWxvYWQtdXNlcnNcIik7XG4gICAgICAgIGlmICh1c2VySWQpIHRoaXMubmF2aWdhdGUoYC9jb25maWcvdXNlcnMvJHt1c2VySWR9YCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy11c2VyLXBpY2tlclwiLCBIYVVzZXJQaWNrZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLXJvdXRlL2FwcC1yb3V0ZVwiO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luY1wiO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5cbmltcG9ydCBcIi4vaGEtY29uZmlnLXVzZXItcGlja2VyXCI7XG5pbXBvcnQgXCIuL2hhLXVzZXItZWRpdG9yXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBmZXRjaFVzZXJzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvdXNlclwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBOYXZpZ2F0ZU1peGluXG4gKi9cbmNsYXNzIEhhQ29uZmlnVXNlcnMgZXh0ZW5kcyBOYXZpZ2F0ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi86dXNlclwiXG4gICAgICAgIGRhdGE9XCJ7e19yb3V0ZURhdGF9fVwiXG4gICAgICA+PC9hcHAtcm91dGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPSdbW19lcXVhbHMoX3JvdXRlRGF0YS51c2VyLCBcInBpY2tlclwiKV1dJz5cbiAgICAgICAgPGhhLWNvbmZpZy11c2VyLXBpY2tlclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgdXNlcnM9XCJbW191c2Vyc11dXCJcbiAgICAgICAgPjwvaGEtY29uZmlnLXVzZXItcGlja2VyPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGlmPSdbWyFfZXF1YWxzKF9yb3V0ZURhdGEudXNlciwgXCJwaWNrZXJcIildXSdcbiAgICAgICAgcmVzdGFtcFxuICAgICAgPlxuICAgICAgICA8aGEtdXNlci1lZGl0b3JcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHVzZXI9XCJbW19jb21wdXRlVXNlcihfdXNlcnMsIF9yb3V0ZURhdGEudXNlcildXVwiXG4gICAgICAgID48L2hhLXVzZXItZWRpdG9yPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByb3V0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9jaGVja1JvdXRlXCIsXG4gICAgICB9LFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3VzZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgICBfdXNlcnM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9sb2FkRGF0YSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInJlbG9hZC11c2Vyc1wiLCAoKSA9PiB0aGlzLl9sb2FkRGF0YSgpKTtcbiAgfVxuXG4gIF9oYW5kbGVQaWNrVXNlcihldikge1xuICAgIHRoaXMuX3VzZXIgPSBldi5kZXRhaWwudXNlcjtcbiAgfVxuXG4gIF9jaGVja1JvdXRlKHJvdXRlKSB7XG4gICAgLy8gcHJldmVudCBsaXN0IGdldHRpbmcgdW5kZXIgdG9vbGJhclxuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuXG4gICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgdGltZU91dC5hZnRlcigwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKHJvdXRlLnBhdGggPT09IFwiXCIpIHtcbiAgICAgICAgICB0aGlzLm5hdmlnYXRlKGAke3JvdXRlLnByZWZpeH0vcGlja2VyYCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVVc2VyKHVzZXJzLCB1c2VySWQpIHtcbiAgICByZXR1cm4gdXNlcnMgJiYgdXNlcnMuZmlsdGVyKCh1KSA9PiB1LmlkID09PSB1c2VySWQpWzBdO1xuICB9XG5cbiAgX2VxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICBhc3luYyBfbG9hZERhdGEoKSB7XG4gICAgdGhpcy5fdXNlcnMgPSBhd2FpdCBmZXRjaFVzZXJzKHRoaXMuaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXVzZXJzXCIsIEhhQ29uZmlnVXNlcnMpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IHVudGlsIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvdW50aWxcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgeyBoYVN0eWxlIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5pbXBvcnQge1xuICBVc2VyLFxuICBkZWxldGVVc2VyLFxuICB1cGRhdGVVc2VyLFxuICBTWVNURU1fR1JPVVBfSURfVVNFUixcbiAgU1lTVEVNX0dST1VQX0lEX0FETUlOLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5pbXBvcnQgeyBzaG93U2F2ZVN1Y2Nlc3NUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi91dGlsL3RvYXN0LXNhdmVkLXN1Y2Nlc3NcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJyZWxvYWQtdXNlcnNcIjogdW5kZWZpbmVkO1xuICB9XG59XG5cbmNvbnN0IEdST1VQUyA9IFtTWVNURU1fR1JPVVBfSURfVVNFUiwgU1lTVEVNX0dST1VQX0lEX0FETUlOXTtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS11c2VyLWVkaXRvclwiKVxuY2xhc3MgSGFVc2VyRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHVzZXI/OiBVc2VyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXI7XG4gICAgaWYgKCFoYXNzIHx8ICF1c2VyKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICAuaGVhZGVyPSR7aGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuY2FwdGlvblwiKX1cbiAgICAgID5cbiAgICAgICAgPGhhLWNhcmQgLmhlYWRlcj0ke3RoaXMuX25hbWV9PlxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5pZFwiKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmlkfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5vd25lclwiKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JHt1c2VyLmlzX293bmVyfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5ncm91cFwiKX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZUdyb3VwQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7dW50aWwoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB1c2VyLmdyb3VwX2lkc1swXSlcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgJHtHUk9VUFMubWFwKFxuICAgICAgICAgICAgICAgICAgICAoZ3JvdXBJZCkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSR7Z3JvdXBJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoYGdyb3Vwcy4ke2dyb3VwSWR9YCl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgJHt1c2VyLmdyb3VwX2lkc1swXSA9PT0gU1lTVEVNX0dST1VQX0lEX1VTRVJcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIiBjbGFzcz1cInVzZXItZXhwZXJpbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFRoZSB1c2VycyBncm91cCBpcyBhIHdvcmsgaW4gcHJvZ3Jlc3MuIFRoZSB1c2VyIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAgICAgICB1bmFibGUgdG8gYWRtaW5pc3RlciB0aGUgaW5zdGFuY2UgdmlhIHRoZSBVSS4gV2UncmUgc3RpbGxcbiAgICAgICAgICAgICAgICAgICAgICBhdWRpdGluZyBhbGwgbWFuYWdlbWVudCBBUEkgZW5kcG9pbnRzIHRvIGVuc3VyZSB0aGF0IHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICBjb3JyZWN0bHkgbGltaXQgYWNjZXNzIHRvIGFkbWluaXN0cmF0b3JzLlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5hY3RpdmVcIil9PC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5pc19hY3RpdmV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3Iuc3lzdGVtX2dlbmVyYXRlZFwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkPiR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9oYW5kbGVSZW5hbWVVc2VyfT5cbiAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5yZW5hbWVfdXNlclwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2RlbGV0ZVVzZXJ9XG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke3VzZXIuc3lzdGVtX2dlbmVyYXRlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5kZWxldGVfdXNlclwiKX1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICR7dXNlci5zeXN0ZW1fZ2VuZXJhdGVkXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnN5c3RlbV9nZW5lcmF0ZWRfdXNlcnNfbm90X3JlbW92YWJsZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX25hbWUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMudXNlciAmJlxuICAgICAgKHRoaXMudXNlci5uYW1lIHx8XG4gICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLnVubmFtZWRfdXNlclwiKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlUmVuYW1lVXNlcihldik6IFByb21pc2U8dm9pZD4ge1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoXG4gICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnVzZXJzLmVkaXRvci5lbnRlcl9uZXdfbmFtZVwiKSxcbiAgICAgIHRoaXMudXNlciEubmFtZVxuICAgICk7XG4gICAgaWYgKG5ld05hbWUgPT09IG51bGwgfHwgbmV3TmFtZSA9PT0gdGhpcy51c2VyIS5uYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZVVzZXIodGhpcy5oYXNzISwgdGhpcy51c2VyIS5pZCwge1xuICAgICAgICBuYW1lOiBuZXdOYW1lLFxuICAgICAgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJyZWxvYWQtdXNlcnNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IudXNlcl9yZW5hbWVfZmFpbGVkXCJcbiAgICAgICAgKX0gJHtlcnIubWVzc2FnZX1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZUdyb3VwQ2hhbmdlKGV2KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VsZWN0RWwgPSBldi5jdXJyZW50VGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIGNvbnN0IG5ld0dyb3VwID0gc2VsZWN0RWwudmFsdWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZVVzZXIodGhpcy5oYXNzISwgdGhpcy51c2VyIS5pZCwge1xuICAgICAgICBncm91cF9pZHM6IFtuZXdHcm91cF0sXG4gICAgICB9KTtcbiAgICAgIHNob3dTYXZlU3VjY2Vzc1RvYXN0KHRoaXMsIHRoaXMuaGFzcyEpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwicmVsb2FkLXVzZXJzXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIGAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcudXNlcnMuZWRpdG9yLmdyb3VwX3VwZGF0ZV9mYWlsZWRcIlxuICAgICAgICApfSAke2Vyci5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgICBzZWxlY3RFbC52YWx1ZSA9IHRoaXMudXNlciEuZ3JvdXBfaWRzWzBdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2RlbGV0ZVVzZXIoZXYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoXG4gICAgICAhY29uZmlybShcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy51c2Vycy5lZGl0b3IuY29uZmlybV91c2VyX2RlbGV0aW9uXCIsXG4gICAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgICAgdGhpcy5fbmFtZVxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICBldi50YXJnZXQuYmx1cigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlVXNlcih0aGlzLmhhc3MhLCB0aGlzLnVzZXIhLmlkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5jb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwicmVsb2FkLXVzZXJzXCIpO1xuICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy91c2Vyc1wiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGFzcy1zdWJwYWdlIGhhLWNhcmQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHRkIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyLWV4cGVyaW1lbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXVzZXItZWRpdG9yXCI6IEhhVXNlckVkaXRvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgc2hvd1RvYXN0KGVsLCB7XG4gICAgbWVzc2FnZTogaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uc3VjY2Vzc2Z1bGx5X3NhdmVkXCIpLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQVNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUE4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBO0FBTUE7QUFFQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQTNCQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBSUE7QUFFQTtBQUdBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBaUJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQVFBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7O0FBSUE7QUFFQTtBQUNBOztBQUVBOzs7O0FBS0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFJQTs7Ozs7QUFLQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBcE1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==