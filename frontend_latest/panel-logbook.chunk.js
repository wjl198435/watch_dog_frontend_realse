(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-logbook"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleDateStringSupportsOptions() {
    try {
        new Date().toLocaleDateString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleDateStringSupportsOptions()
    ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate"));


/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");

// Check for support of native locale string options
function toLocaleTimeStringSupportsOptions() {
    try {
        new Date().toLocaleTimeString("i");
    }
    catch (e) {
        return e.name === "RangeError";
    }
    return false;
}
/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions()
    ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
        hour: "numeric",
        minute: "2-digit",
    })
    : (dateObj) => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"));


/***/ }),

/***/ "./src/components/entity/ha-entity-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-picker.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");











const rowRenderer = (root, _owner, model) => {
    if (!root.firstElementChild) {
        root.innerHTML = `
      <style>
        paper-icon-item {
          margin: -10px;
          padding: 0;
        }
      </style>
      <paper-icon-item>
        <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>
        <paper-item-body two-line="">
          <div class='name'>[[_computeStateName(item)]]</div>
          <div secondary>[[item.entity_id]]</div>
        </paper-item-body>
      </paper-icon-item>
    `;
    }
    root.querySelector("state-badge").stateObj = model.item;
    root.querySelector(".name").textContent = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(model.item);
    root.querySelector("[secondary]").textContent = model.item.entity_id;
};
class HaEntityPicker extends lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"] {
    constructor() {
        super(...arguments);
        this._getStates = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((hass, domainFilter, entityFilter) => {
            let states = [];
            if (!hass) {
                return [];
            }
            let entityIds = Object.keys(hass.states);
            if (domainFilter) {
                entityIds = entityIds.filter((eid) => eid.substr(0, eid.indexOf(".")) === domainFilter);
            }
            states = entityIds.sort().map((key) => hass.states[key]);
            if (entityFilter) {
                states = states.filter((stateObj) => 
                // We always want to include the entity of the current value
                stateObj.entity_id === this.value || entityFilter(stateObj));
            }
            return states;
        });
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass") && !this._opened) {
            this._hass = this.hass;
        }
    }
    render() {
        const states = this._getStates(this._hass, this.domainFilter, this.entityFilter);
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
      <vaadin-combo-box-light
        item-value-path="entity_id"
        item-label-path="entity_id"
        .items=${states}
        .value=${this._value}
        .allowCustomValue=${this.allowCustomEntity}
        .renderer=${rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .autofocus=${this.autofocus}
          .label=${this.label === undefined && this._hass
            ? this._hass.localize("ui.components.entity.entity-picker.entity")
            : this.label}
          .value=${this._value}
          .disabled=${this.disabled}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this.value
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <paper-icon-button
                  aria-label="Clear"
                  slot="suffix"
                  class="clear-button"
                  icon="hass:close"
                  no-ripple
                >
                  Clear
                </paper-icon-button>
              `
            : ""}
          ${states.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_9__["html"] `
                <paper-icon-button
                  aria-label="Show entities"
                  slot="suffix"
                  class="toggle-button"
                  .icon=${this._opened ? "hass:menu-up" : "hass:menu-down"}
                >
                  Toggle
                </paper-icon-button>
              `
            : ""}
        </paper-input>
      </vaadin-combo-box-light>
    `;
    }
    get _value() {
        return this.value || "";
    }
    _openedChanged(ev) {
        this._opened = ev.detail.value;
    }
    _valueChanged(ev) {
        const newValue = ev.detail.value;
        if (newValue !== this._value) {
            this.value = ev.detail.value;
            setTimeout(() => {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "value-changed", { value: this.value });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(this, "change");
            }, 0);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_9__["css"] `
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], HaEntityPicker.prototype, "autofocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], HaEntityPicker.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean, attribute: "allow-custom-entity" })
], HaEntityPicker.prototype, "allowCustomEntity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaEntityPicker.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaEntityPicker.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaEntityPicker.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ attribute: "domain-filter" })
], HaEntityPicker.prototype, "domainFilter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaEntityPicker.prototype, "entityFilter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
], HaEntityPicker.prototype, "_opened", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
], HaEntityPicker.prototype, "_hass", void 0);
customElements.define("ha-entity-picker", HaEntityPicker);


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

/***/ "./src/panels/logbook/ha-logbook-data.js":
/*!***********************************************!*\
  !*** ./src/panels/logbook/ha-logbook-data.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");


const DATA_CACHE = {};
const ALL_ENTITIES = "*";

class HaLogbookData extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "hassChanged",
      },

      filterDate: {
        type: String,
        observer: "filterDataChanged",
      },

      filterPeriod: {
        type: Number,
        observer: "filterDataChanged",
      },

      filterEntity: {
        type: String,
        observer: "filterDataChanged",
      },

      isLoading: {
        type: Boolean,
        value: true,
        readOnly: true,
        notify: true,
      },

      entries: {
        type: Object,
        value: null,
        readOnly: true,
        notify: true,
      },
    };
  }

  hassChanged(newHass, oldHass) {
    if (!oldHass && this.filterDate) {
      this.updateData();
    }
  }

  filterDataChanged(newValue, oldValue) {
    if (oldValue !== undefined) {
      this.updateData();
    }
  }

  updateData() {
    if (!this.hass) return;

    this._setIsLoading(true);

    this.getDate(this.filterDate, this.filterPeriod, this.filterEntity).then(
      (logbookEntries) => {
        this._setEntries(logbookEntries);
        this._setIsLoading(false);
      }
    );
  }

  getDate(date, period, entityId) {
    if (!entityId) entityId = ALL_ENTITIES;

    if (!DATA_CACHE[period]) DATA_CACHE[period] = [];
    if (!DATA_CACHE[period][date]) DATA_CACHE[period][date] = [];

    if (DATA_CACHE[period][date][entityId]) {
      return DATA_CACHE[period][date][entityId];
    }

    if (entityId !== ALL_ENTITIES && DATA_CACHE[period][date][ALL_ENTITIES]) {
      return DATA_CACHE[period][date][ALL_ENTITIES].then(function(entities) {
        return entities.filter(function(entity) {
          return entity.entity_id === entityId;
        });
      });
    }

    DATA_CACHE[period][date][entityId] = this._getFromServer(
      date,
      period,
      entityId
    );
    return DATA_CACHE[period][date][entityId];
  }

  _getFromServer(date, period, entityId) {
    let url = "logbook/" + date + "?period=" + period;
    if (entityId !== ALL_ENTITIES) {
      url += "&entity=" + entityId;
    }

    return this.hass.callApi("GET", url).then(
      function(logbookEntries) {
        logbookEntries.reverse();
        return logbookEntries;
      },
      function() {
        return null;
      }
    );
  }

  refreshLogbook() {
    DATA_CACHE[this.filterPeriod][this.filterDate] = [];
    this.updateData();
  }
}

customElements.define("ha-logbook-data", HaLogbookData);


/***/ }),

/***/ "./src/panels/logbook/ha-logbook.js":
/*!******************************************!*\
  !*** ./src/panels/logbook/ha-logbook.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");











/*
 * @appliesMixin EventsMixin
 */
class HaLogbook extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          display: block;
        }

        :host([rtl]) {
          direction: ltr;
        }

        .entry {
          @apply --paper-font-body1;
          line-height: 2em;
        }

        .time {
          width: 55px;
          font-size: 0.8em;
          color: var(--secondary-text-color);
        }

        :host([rtl]) .date {
          direction: rtl;
        }

        iron-icon {
          margin: 0 8px 0 16px;
          color: var(--primary-text-color);
        }

        .message {
          color: var(--primary-text-color);
        }

        a {
          color: var(--primary-color);
        }
      </style>

      <template is="dom-if" if="[[!entries.length]]">
        No logbook entries found.
      </template>

      <template is="dom-repeat" items="[[entries]]">
        <template is="dom-if" if="{{_needHeader(entries.*, index)}}">
          <h4 class="date">[[_formatDate(item.when)]]</h4>
        </template>

        <div class="horizontal layout entry">
          <div class="time">[[_formatTime(item.when)]]</div>
          <iron-icon icon="[[_computeIcon(item.domain)]]"></iron-icon>
          <div class="message" flex="">
            <template is="dom-if" if="[[!item.entity_id]]">
              <span class="name">[[item.name]]</span>
            </template>
            <template is="dom-if" if="[[item.entity_id]]">
              <a href="#" on-click="entityClicked" class="name"
                >[[item.name]]</a
              >
            </template>
            <span> </span> <span>[[item.message]]</span>
          </div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      entries: {
        type: Array,
        value: [],
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  _formatTime(date) {
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__["default"])(new Date(date), this.hass.language);
  }

  _formatDate(date) {
    return Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(date), this.hass.language);
  }

  _needHeader(change, index) {
    if (!index) return true;
    const current = this.get("when", change.base[index]);
    const previous = this.get("when", change.base[index - 1]);
    return (
      current &&
      previous &&
      new Date(current).toDateString() !== new Date(previous).toDateString()
    );
  }

  _computeIcon(domain) {
    return Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_7__["domainIcon"])(domain);
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_8__["computeRTL"])(hass);
  }

  entityClicked(ev) {
    ev.preventDefault();
    this.fire("hass-more-info", { entityId: ev.model.item.entity_id });
  }
}

customElements.define("ha-logbook", HaLogbook);


/***/ }),

/***/ "./src/panels/logbook/ha-panel-logbook.js":
/*!************************************************!*\
  !*** ./src/panels/logbook/ha-panel-logbook.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_logbook_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-logbook-data */ "./src/panels/logbook/ha-logbook-data.js");
/* harmony import */ var _ha_logbook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-logbook */ "./src/panels/logbook/ha-logbook.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");






















/*
 * @appliesMixin LocalizeMixin
 */
class HaPanelLogbook extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="ha-style">
        .content {
          padding: 0 16px 16px;
        }

        paper-spinner {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .wrap {
          margin-bottom: 24px;
        }

        vaadin-date-picker {
          --vaadin-date-picker-clear-icon: {
            display: none;
          }
          max-width: 200px;
          margin-right: 16px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-right: 16px;
          --paper-input-container-label-floating: {
            padding-bottom: 10px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
        }

        paper-item {
          cursor: pointer;
        }

        ha-entity-picker {
          display: inline-block;
          width: 100%;
          max-width: 400px;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <ha-logbook-data
        hass="[[hass]]"
        is-loading="{{isLoading}}"
        entries="{{entries}}"
        filter-date="[[_computeFilterDate(_currentDate)]]"
        filter-period="[[_computeFilterDays(_periodIndex)]]"
        filter-entity="[[entityId]]"
      ></ha-logbook-data>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.logbook')]]</div>
            <paper-icon-button
              icon="hass:refresh"
              on-click="refreshLogbook"
              hidden$="[[isLoading]]"
            ></paper-icon-button>
          </app-toolbar>
        </app-header>

        <div class="content">
          <paper-spinner
            active="[[isLoading]]"
            hidden$="[[!isLoading]]"
            alt="[[localize('ui.common.loading')]]"
          ></paper-spinner>

          <div class="flex layout horizontal wrap">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.logbook.showing_entries')]]"
              disabled="[[isLoading]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.logbook.period')]]"
              disabled="[[isLoading]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_periodIndex}}"
              >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item
                >
              </paper-listbox>
            </paper-dropdown-menu>

            <ha-entity-picker
              hass="[[hass]]"
              value="{{_entityId}}"
              label="[[localize('ui.components.entity.entity-picker.entity')]]"
              disabled="[[isLoading]]"
              on-change="_entityPicked"
            ></ha-entity-picker>
          </div>

          <ha-logbook
            hass="[[hass]]"
            entries="[[entries]]"
            hidden$="[[isLoading]]"
          ></ha-logbook>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,

      // ISO8601 formatted date string
      _currentDate: {
        type: String,
        value: function() {
          const value = new Date();
          const today = new Date(
            Date.UTC(value.getFullYear(), value.getMonth(), value.getDate())
          );
          return today.toISOString().split("T")[0];
        },
      },

      _periodIndex: {
        type: Number,
        value: 0,
      },

      _entityId: {
        type: String,
        value: "",
      },

      entityId: {
        type: String,
        value: "",
        readOnly: true,
      },

      isLoading: {
        type: Boolean,
      },

      entries: {
        type: Array,
      },

      datePicker: {
        type: Object,
      },

      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    // We are unable to parse date because we use intl api to render date
    this.$.picker.set("i18n.parseDate", null);
    this.$.picker.set("i18n.formatDate", (date) =>
      Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(date.year, date.month, date.day), this.hass.language)
    );
  }

  _computeFilterDate(_currentDate) {
    if (!_currentDate) return undefined;
    var parts = _currentDate.split("-");
    parts[1] = parseInt(parts[1]) - 1;
    return new Date(parts[0], parts[1], parts[2]).toISOString();
  }

  _computeFilterDays(periodIndex) {
    switch (periodIndex) {
      case 1:
        return 3;
      case 2:
        return 7;
      default:
        return 1;
    }
  }

  _entityPicked(ev) {
    this._setEntityId(ev.target.value);
  }

  refreshLogbook() {
    this.shadowRoot.querySelector("ha-logbook-data").refreshLogbook();
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_17__["computeRTL"])(hass);
  }
}

customElements.define("ha-panel-logbook", HaPanelLogbook);


/***/ }),

/***/ "./src/resources/ha-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");

documentContainer.innerHTML = `<dom-module id="ha-date-picker-vaadin-date-picker-styles" theme-for="vaadin-date-picker">
  <template>
    <style>
      :host([required]) [part~="clear-button"] {
        display: none;
      }

      [part~="toggle-button"] {
        color: var(--secondary-text-color);
        font-size: var(--paper-font-subhead_-_font-size);
        margin-right: 5px;
      }

      :host([opened]) [part~="toggle-button"] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">
  <template>
    <style>
      :host {
        padding: 8px 0;
      }

      [part~="label"] {
        color: var(--paper-input-container-color, var(--secondary-text-color));
        font-family: var(--paper-font-caption_-_font-family);
        font-size: var(--paper-font-caption_-_font-size);
        font-weight: var(--paper-font-caption_-_font-weight);
        letter-spacing: var(--paper-font-caption_-_letter-spacing);
        line-height: var(--paper-font-caption_-_line-height);
      }
      :host([focused]) [part~="label"] {
          color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="input-field"] {
        padding-bottom: 1px;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        line-height: var(--paper-font-subhead_-_line-height);
      }

      :host([focused]) [part~="input-field"] {
        padding-bottom: 0;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      [part~="value"]:focus {
        outline: none;
      }

      [part~="value"] {
        font-size: var(--paper-font-subhead_-_font-size);
        font-family: inherit;
        color: inherit;
        border: none;
        background: transparent;
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">
  <template>
    <style>
      :host([part~="today-button"]) [part~="button"]::before {
        content: "⦿";
        color: var(--primary-color);
      }

      [part~="button"] {
        font-family: inherit;
        font-size: var(--paper-font-subhead_-_font-size);
        border: none;
        background: transparent;
        cursor: pointer;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
        color: inherit;
      }

      [part~="button"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="vaadin-date-picker-overlay-default-theme">
      :host {
        background-color: var(--paper-card-background-color, var(--primary-background-color));
      }

      [part~="toolbar"] {
        padding: 0.3em;
        background-color: var(--secondary-background-color);
      }

      [part="years"] {
        background-color: var(--paper-grey-200);
      }

    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">
  <template>
    <style include="vaadin-month-calendar-default-theme">
      :host([focused]) [part="date"][focused],
      [part="date"][selected] {
        background-color: var(--paper-grey-200);
      }
      [part="date"][today] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild(documentContainer.content);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbG9nYm9vay5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb2dib29rL2hhLWxvZ2Jvb2stZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvZ2Jvb2svaGEtbG9nYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvZ2Jvb2svaGEtcGFuZWwtbG9nYm9vay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2hhLWRhdGUtcGlja2VyLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bURhdGVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcInNob3J0VGltZVwiKSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3ZhYWRpbi1jb21iby1ib3gtbGlnaHRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuXG5pbXBvcnQgXCIuL3N0YXRlLWJhZGdlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IHR5cGUgSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jID0gKGVudGl0eUlkOiBIYXNzRW50aXR5KSA9PiBib29sZWFuO1xuXG5jb25zdCByb3dSZW5kZXJlciA9IChcbiAgcm9vdDogSFRNTEVsZW1lbnQsXG4gIF9vd25lcixcbiAgbW9kZWw6IHsgaXRlbTogSGFzc0VudGl0eSB9XG4pID0+IHtcbiAgaWYgKCFyb290LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgcm9vdC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWljb24taXRlbSB7XG4gICAgICAgICAgbWFyZ2luOiAtMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWljb24taXRlbT5cbiAgICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbaXRlbV1dXCIgc2xvdD1cIml0ZW0taWNvblwiPjwvc3RhdGUtYmFkZ2U+XG4gICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU9XCJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSduYW1lJz5bW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV08L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNlY29uZGFyeT5bW2l0ZW0uZW50aXR5X2lkXV08L2Rpdj5cbiAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICA8L3BhcGVyLWljb24taXRlbT5cbiAgICBgO1xuICB9XG5cbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwic3RhdGUtYmFkZ2VcIikhLnN0YXRlT2JqID0gbW9kZWwuaXRlbTtcbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVcIikhLnRleHRDb250ZW50ID0gY29tcHV0ZVN0YXRlTmFtZShtb2RlbC5pdGVtKTtcbiAgcm9vdC5xdWVyeVNlbGVjdG9yKFwiW3NlY29uZGFyeV1cIikhLnRleHRDb250ZW50ID0gbW9kZWwuaXRlbS5lbnRpdHlfaWQ7XG59O1xuXG5jbGFzcyBIYUVudGl0eVBpY2tlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhdXRvZm9jdXM/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBkaXNhYmxlZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogXCJhbGxvdy1jdXN0b20tZW50aXR5XCIgfSlcbiAgcHVibGljIGFsbG93Q3VzdG9tRW50aXR5O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHZhbHVlPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwiZG9tYWluLWZpbHRlclwiIH0pIHB1YmxpYyBkb21haW5GaWx0ZXI/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlbnRpdHlGaWx0ZXI/OiBIYUVudGl0eVBpY2tlckVudGl0eUZpbHRlckZ1bmM7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfb3BlbmVkPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgcHJpdmF0ZSBfZ2V0U3RhdGVzID0gbWVtb2l6ZU9uZShcbiAgICAoXG4gICAgICBoYXNzOiB0aGlzW1wiaGFzc1wiXSxcbiAgICAgIGRvbWFpbkZpbHRlcjogdGhpc1tcImRvbWFpbkZpbHRlclwiXSxcbiAgICAgIGVudGl0eUZpbHRlcjogdGhpc1tcImVudGl0eUZpbHRlclwiXVxuICAgICkgPT4ge1xuICAgICAgbGV0IHN0YXRlczogSGFzc0VudGl0eVtdID0gW107XG5cbiAgICAgIGlmICghaGFzcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICBsZXQgZW50aXR5SWRzID0gT2JqZWN0LmtleXMoaGFzcy5zdGF0ZXMpO1xuXG4gICAgICBpZiAoZG9tYWluRmlsdGVyKSB7XG4gICAgICAgIGVudGl0eUlkcyA9IGVudGl0eUlkcy5maWx0ZXIoXG4gICAgICAgICAgKGVpZCkgPT4gZWlkLnN1YnN0cigwLCBlaWQuaW5kZXhPZihcIi5cIikpID09PSBkb21haW5GaWx0ZXJcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgc3RhdGVzID0gZW50aXR5SWRzLnNvcnQoKS5tYXAoKGtleSkgPT4gaGFzcyEuc3RhdGVzW2tleV0pO1xuXG4gICAgICBpZiAoZW50aXR5RmlsdGVyKSB7XG4gICAgICAgIHN0YXRlcyA9IHN0YXRlcy5maWx0ZXIoXG4gICAgICAgICAgKHN0YXRlT2JqKSA9PlxuICAgICAgICAgICAgLy8gV2UgYWx3YXlzIHdhbnQgdG8gaW5jbHVkZSB0aGUgZW50aXR5IG9mIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBzdGF0ZU9iai5lbnRpdHlfaWQgPT09IHRoaXMudmFsdWUgfHwgZW50aXR5RmlsdGVyIShzdGF0ZU9iailcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZXM7XG4gICAgfVxuICApO1xuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImhhc3NcIikgJiYgIXRoaXMuX29wZW5lZCkge1xuICAgICAgdGhpcy5faGFzcyA9IHRoaXMuaGFzcztcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5fZ2V0U3RhdGVzKFxuICAgICAgdGhpcy5faGFzcyxcbiAgICAgIHRoaXMuZG9tYWluRmlsdGVyLFxuICAgICAgdGhpcy5lbnRpdHlGaWx0ZXJcbiAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8dmFhZGluLWNvbWJvLWJveC1saWdodFxuICAgICAgICBpdGVtLXZhbHVlLXBhdGg9XCJlbnRpdHlfaWRcIlxuICAgICAgICBpdGVtLWxhYmVsLXBhdGg9XCJlbnRpdHlfaWRcIlxuICAgICAgICAuaXRlbXM9JHtzdGF0ZXN9XG4gICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAuYWxsb3dDdXN0b21WYWx1ZT0ke3RoaXMuYWxsb3dDdXN0b21FbnRpdHl9XG4gICAgICAgIC5yZW5kZXJlcj0ke3Jvd1JlbmRlcmVyfVxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgLmF1dG9mb2N1cz0ke3RoaXMuYXV0b2ZvY3VzfVxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMubGFiZWwgPT09IHVuZGVmaW5lZCAmJiB0aGlzLl9oYXNzXG4gICAgICAgICAgICA/IHRoaXMuX2hhc3MubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLmVudGl0eS5lbnRpdHktcGlja2VyLmVudGl0eVwiKVxuICAgICAgICAgICAgOiB0aGlzLmxhYmVsfVxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuZGlzYWJsZWR9XG4gICAgICAgICAgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgYXV0b2NhcGl0YWxpemU9XCJub25lXCJcbiAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGF1dG9jb3JyZWN0PVwib2ZmXCJcbiAgICAgICAgICBzcGVsbGNoZWNrPVwiZmFsc2VcIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLnZhbHVlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xlYXJcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImNsZWFyLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgICAgICAgICBuby1yaXBwbGVcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDbGVhclxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAke3N0YXRlcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdyBlbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAuaWNvbj0ke3RoaXMuX29wZW5lZCA/IFwiaGFzczptZW51LXVwXCIgOiBcImhhc3M6bWVudS1kb3duXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVG9nZ2xlXG4gICAgICAgICAgICAgICAgPC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgXCJcIjtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF92YWx1ZUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7IHZhbHVlOiB0aGlzLnZhbHVlIH0pO1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1pbnB1dCA+IHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgICAgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LXBpY2tlclwiLCBIYUVudGl0eVBpY2tlcik7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1lbnRpdHktcGlja2VyXCI6IEhhRW50aXR5UGlja2VyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBJcm9uSWNvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuXG5jb25zdCBpcm9uSWNvbkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwiaXJvbi1pY29uXCIpIGFzIENvbnN0cnVjdG9yPFxuICBJcm9uSWNvbkVsZW1lbnRcbj47XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbiBleHRlbmRzIGlyb25JY29uQ2xhc3Mge1xuICBwcml2YXRlIF9pY29uc2V0TmFtZT86IHN0cmluZztcblxuICBwdWJsaWMgbGlzdGVuKFxuICAgIG5vZGU6IEV2ZW50VGFyZ2V0IHwgbnVsbCxcbiAgICBldmVudE5hbWU6IHN0cmluZyxcbiAgICBtZXRob2ROYW1lOiBzdHJpbmdcbiAgKTogdm9pZCB7XG4gICAgc3VwZXIubGlzdGVuKG5vZGUsIGV2ZW50TmFtZSwgbWV0aG9kTmFtZSk7XG5cbiAgICBpZiAoIWxvYWRlZCAmJiB0aGlzLl9pY29uc2V0TmFtZSA9PT0gXCJtZGlcIikge1xuICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm1kaS1pY29uc1wiICovIFwiLi4vcmVzb3VyY2VzL21kaS1pY29uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb25cIjogSGFJY29uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb25cIiwgSGFJY29uKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY29uc3QgREFUQV9DQUNIRSA9IHt9O1xuY29uc3QgQUxMX0VOVElUSUVTID0gXCIqXCI7XG5cbmNsYXNzIEhhTG9nYm9va0RhdGEgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImhhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJEYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZmlsdGVyRGF0YUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGZpbHRlclBlcmlvZDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcImZpbHRlckRhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJFbnRpdHk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJmaWx0ZXJEYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgZW50cmllczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgaGFzc0NoYW5nZWQobmV3SGFzcywgb2xkSGFzcykge1xuICAgIGlmICghb2xkSGFzcyAmJiB0aGlzLmZpbHRlckRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckRhdGFDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVEYXRhKCkge1xuICAgIGlmICghdGhpcy5oYXNzKSByZXR1cm47XG5cbiAgICB0aGlzLl9zZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0aGlzLmdldERhdGUodGhpcy5maWx0ZXJEYXRlLCB0aGlzLmZpbHRlclBlcmlvZCwgdGhpcy5maWx0ZXJFbnRpdHkpLnRoZW4oXG4gICAgICAobG9nYm9va0VudHJpZXMpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0RW50cmllcyhsb2dib29rRW50cmllcyk7XG4gICAgICAgIHRoaXMuX3NldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGdldERhdGUoZGF0ZSwgcGVyaW9kLCBlbnRpdHlJZCkge1xuICAgIGlmICghZW50aXR5SWQpIGVudGl0eUlkID0gQUxMX0VOVElUSUVTO1xuXG4gICAgaWYgKCFEQVRBX0NBQ0hFW3BlcmlvZF0pIERBVEFfQ0FDSEVbcGVyaW9kXSA9IFtdO1xuICAgIGlmICghREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdKSBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV0gPSBbXTtcblxuICAgIGlmIChEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdKSB7XG4gICAgICByZXR1cm4gREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXTtcbiAgICB9XG5cbiAgICBpZiAoZW50aXR5SWQgIT09IEFMTF9FTlRJVElFUyAmJiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bQUxMX0VOVElUSUVTXSkge1xuICAgICAgcmV0dXJuIERBVEFfQ0FDSEVbcGVyaW9kXVtkYXRlXVtBTExfRU5USVRJRVNdLnRoZW4oZnVuY3Rpb24oZW50aXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihmdW5jdGlvbihlbnRpdHkpIHtcbiAgICAgICAgICByZXR1cm4gZW50aXR5LmVudGl0eV9pZCA9PT0gZW50aXR5SWQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgREFUQV9DQUNIRVtwZXJpb2RdW2RhdGVdW2VudGl0eUlkXSA9IHRoaXMuX2dldEZyb21TZXJ2ZXIoXG4gICAgICBkYXRlLFxuICAgICAgcGVyaW9kLFxuICAgICAgZW50aXR5SWRcbiAgICApO1xuICAgIHJldHVybiBEQVRBX0NBQ0hFW3BlcmlvZF1bZGF0ZV1bZW50aXR5SWRdO1xuICB9XG5cbiAgX2dldEZyb21TZXJ2ZXIoZGF0ZSwgcGVyaW9kLCBlbnRpdHlJZCkge1xuICAgIGxldCB1cmwgPSBcImxvZ2Jvb2svXCIgKyBkYXRlICsgXCI/cGVyaW9kPVwiICsgcGVyaW9kO1xuICAgIGlmIChlbnRpdHlJZCAhPT0gQUxMX0VOVElUSUVTKSB7XG4gICAgICB1cmwgKz0gXCImZW50aXR5PVwiICsgZW50aXR5SWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaGFzcy5jYWxsQXBpKFwiR0VUXCIsIHVybCkudGhlbihcbiAgICAgIGZ1bmN0aW9uKGxvZ2Jvb2tFbnRyaWVzKSB7XG4gICAgICAgIGxvZ2Jvb2tFbnRyaWVzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvZ2Jvb2tFbnRyaWVzO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaExvZ2Jvb2soKSB7XG4gICAgREFUQV9DQUNIRVt0aGlzLmZpbHRlclBlcmlvZF1bdGhpcy5maWx0ZXJEYXRlXSA9IFtdO1xuICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxvZ2Jvb2stZGF0YVwiLCBIYUxvZ2Jvb2tEYXRhKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBkb21haW5JY29uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZG9tYWluX2ljb25cIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFMb2dib29rIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbnRyeSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUge1xuICAgICAgICAgIHdpZHRoOiA1NXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAuZGF0ZSB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgIH1cblxuICAgICAgICBpcm9uLWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMCA4cHggMCAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWVudHJpZXMubGVuZ3RoXV1cIj5cbiAgICAgICAgTm8gbG9nYm9vayBlbnRyaWVzIGZvdW5kLlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRyaWVzXV1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJ7e19uZWVkSGVhZGVyKGVudHJpZXMuKiwgaW5kZXgpfX1cIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJkYXRlXCI+W1tfZm9ybWF0RGF0ZShpdGVtLndoZW4pXV08L2g0PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGxheW91dCBlbnRyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lXCI+W1tfZm9ybWF0VGltZShpdGVtLndoZW4pXV08L2Rpdj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJbW19jb21wdXRlSWNvbihpdGVtLmRvbWFpbildXVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlXCIgZmxleD1cIlwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFpdGVtLmVudGl0eV9pZF1dXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPltbaXRlbS5uYW1lXV08L3NwYW4+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2l0ZW0uZW50aXR5X2lkXV1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbi1jbGljaz1cImVudGl0eUNsaWNrZWRcIiBjbGFzcz1cIm5hbWVcIlxuICAgICAgICAgICAgICAgID5bW2l0ZW0ubmFtZV1dPC9hXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8c3Bhbj4gPC9zcGFuPiA8c3Bhbj5bW2l0ZW0ubWVzc2FnZV1dPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlbnRyaWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogW10sXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9mb3JtYXRUaW1lKGRhdGUpIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZShuZXcgRGF0ZShkYXRlKSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgfVxuXG4gIF9mb3JtYXREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZm9ybWF0RGF0ZShuZXcgRGF0ZShkYXRlKSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgfVxuXG4gIF9uZWVkSGVhZGVyKGNoYW5nZSwgaW5kZXgpIHtcbiAgICBpZiAoIWluZGV4KSByZXR1cm4gdHJ1ZTtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXQoXCJ3aGVuXCIsIGNoYW5nZS5iYXNlW2luZGV4XSk7XG4gICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmdldChcIndoZW5cIiwgY2hhbmdlLmJhc2VbaW5kZXggLSAxXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIGN1cnJlbnQgJiZcbiAgICAgIHByZXZpb3VzICYmXG4gICAgICBuZXcgRGF0ZShjdXJyZW50KS50b0RhdGVTdHJpbmcoKSAhPT0gbmV3IERhdGUocHJldmlvdXMpLnRvRGF0ZVN0cmluZygpXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlSWNvbihkb21haW4pIHtcbiAgICByZXR1cm4gZG9tYWluSWNvbihkb21haW4pO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG5cbiAgZW50aXR5Q2xpY2tlZChldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZXYubW9kZWwuaXRlbS5lbnRpdHlfaWQgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbG9nYm9va1wiLCBIYUxvZ2Jvb2spO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdmFhZGluLWRhdGUtcGlja2VyXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1kYXRlLXBpY2tlci1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4vaGEtbG9nYm9vay1kYXRhXCI7XG5pbXBvcnQgXCIuL2hhLWxvZ2Jvb2tcIjtcblxuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxMb2dib29rIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICB2YWFkaW4tZGF0ZS1waWNrZXIge1xuICAgICAgICAgIC0tdmFhZGluLWRhdGUtcGlja2VyLWNsZWFyLWljb246IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc6IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWVudGl0eS1waWNrZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLWxvZ2Jvb2stZGF0YVxuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBpcy1sb2FkaW5nPVwie3tpc0xvYWRpbmd9fVwiXG4gICAgICAgIGVudHJpZXM9XCJ7e2VudHJpZXN9fVwiXG4gICAgICAgIGZpbHRlci1kYXRlPVwiW1tfY29tcHV0ZUZpbHRlckRhdGUoX2N1cnJlbnREYXRlKV1dXCJcbiAgICAgICAgZmlsdGVyLXBlcmlvZD1cIltbX2NvbXB1dGVGaWx0ZXJEYXlzKF9wZXJpb2RJbmRleCldXVwiXG4gICAgICAgIGZpbHRlci1lbnRpdHk9XCJbW2VudGl0eUlkXV1cIlxuICAgICAgPjwvaGEtbG9nYm9vay1kYXRhPlxuXG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5sb2dib29rJyldXTwvZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnJlZnJlc2hcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cInJlZnJlc2hMb2dib29rXCJcbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgIGFjdGl2ZT1cIltbaXNMb2FkaW5nXV1cIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbIWlzTG9hZGluZ11dXCJcbiAgICAgICAgICAgIGFsdD1cIltbbG9jYWxpemUoJ3VpLmNvbW1vbi5sb2FkaW5nJyldXVwiXG4gICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGxheW91dCBob3Jpem9udGFsIHdyYXBcIj5cbiAgICAgICAgICAgIDx2YWFkaW4tZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgaWQ9XCJwaWNrZXJcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2N1cnJlbnREYXRlfX1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmxvZ2Jvb2suc2hvd2luZ19lbnRyaWVzJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC92YWFkaW4tZGF0ZS1waWNrZXI+XG5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwubG9nYm9vay5wZXJpb2QnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19wZXJpb2RJbmRleH19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uZGF5JywgJ2NvdW50JywgMSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLmRheScsICdjb3VudCcsIDMpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi53ZWVrJywgJ2NvdW50JywgMSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuXG4gICAgICAgICAgICA8aGEtZW50aXR5LXBpY2tlclxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7X2VudGl0eUlkfX1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNvbXBvbmVudHMuZW50aXR5LmVudGl0eS1waWNrZXIuZW50aXR5JyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0xvYWRpbmddXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIl9lbnRpdHlQaWNrZWRcIlxuICAgICAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoYS1sb2dib29rXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgZW50cmllcz1cIltbZW50cmllc11dXCJcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2lzTG9hZGluZ11dXCJcbiAgICAgICAgICA+PC9oYS1sb2dib29rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXBwLWhlYWRlci1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgbmFycm93OiBCb29sZWFuLFxuXG4gICAgICAvLyBJU084NjAxIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICAgICAgX2N1cnJlbnREYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgRGF0ZS5VVEModmFsdWUuZ2V0RnVsbFllYXIoKSwgdmFsdWUuZ2V0TW9udGgoKSwgdmFsdWUuZ2V0RGF0ZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgX3BlcmlvZEluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBfZW50aXR5SWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG5cbiAgICAgIGVudGl0eUlkOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgaXNMb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuXG4gICAgICBlbnRyaWVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgfSxcblxuICAgICAgZGF0ZVBpY2tlcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyBXZSBhcmUgdW5hYmxlIHRvIHBhcnNlIGRhdGUgYmVjYXVzZSB3ZSB1c2UgaW50bCBhcGkgdG8gcmVuZGVyIGRhdGVcbiAgICB0aGlzLiQucGlja2VyLnNldChcImkxOG4ucGFyc2VEYXRlXCIsIG51bGwpO1xuICAgIHRoaXMuJC5waWNrZXIuc2V0KFwiaTE4bi5mb3JtYXREYXRlXCIsIChkYXRlKSA9PlxuICAgICAgZm9ybWF0RGF0ZShuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KSwgdGhpcy5oYXNzLmxhbmd1YWdlKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRhdGUoX2N1cnJlbnREYXRlKSB7XG4gICAgaWYgKCFfY3VycmVudERhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcnRzID0gX2N1cnJlbnREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBwYXJ0c1sxXSA9IHBhcnNlSW50KHBhcnRzWzFdKSAtIDE7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnRzWzBdLCBwYXJ0c1sxXSwgcGFydHNbMl0pLnRvSVNPU3RyaW5nKCk7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRheXMocGVyaW9kSW5kZXgpIHtcbiAgICBzd2l0Y2ggKHBlcmlvZEluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gNztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIF9lbnRpdHlQaWNrZWQoZXYpIHtcbiAgICB0aGlzLl9zZXRFbnRpdHlJZChldi50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcmVmcmVzaExvZ2Jvb2soKSB7XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJoYS1sb2dib29rLWRhdGFcIikucmVmcmVzaExvZ2Jvb2soKTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1sb2dib29rXCIsIEhhUGFuZWxMb2dib29rKTtcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW3JlcXVpcmVkXSkgW3BhcnR+PVwiY2xlYXItYnV0dG9uXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1zaXplKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtvcGVuZWRdKSBbcGFydH49XCJ0b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+PGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci10ZXh0LWZpZWxkLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi10ZXh0LWZpZWxkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJsYWJlbFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1jYXB0aW9uXy1fZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fbGluZS1oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIFtwYXJ0fj1cInZhbHVlXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidmFsdWVcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItYnV0dG9uLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1idXR0b25cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0KFtwYXJ0fj1cInRvZGF5LWJ1dHRvblwiXSkgW3BhcnR+PVwiYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIuKmv1wiO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImJ1dHRvblwiXSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl06Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+PGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWRlZmF1bHQtdGhlbWVcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidG9vbGJhclwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTIwMCk7XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItbW9udGgtc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi1tb250aC1jYWxlbmRhci1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0PVwiZGF0ZVwiXVtmb2N1c2VkXSxcbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtzZWxlY3RlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTIwMCk7XG4gICAgICB9XG4gICAgICBbcGFydD1cImRhdGVcIl1bdG9kYXldIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVlBO0FBSUE7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBYUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXdHQTtBQXJHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFqSkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBeUlBOzs7Ozs7Ozs7Ozs7O0FDek1BO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUVBO0FBR0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzdQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=