(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-alexa"],{

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

/***/ "./src/common/entity/entity_filter.ts":
/*!********************************************!*\
  !*** ./src/common/entity/entity_filter.ts ***!
  \********************************************/
/*! exports provided: isEmptyFilter, generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyFilter", function() { return isEmptyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const isEmptyFilter = (filter) => filter.include_domains.length +
    filter.include_entities.length +
    filter.exclude_domains.length +
    filter.exclude_entities.length ===
    0;
const generateFilter = (includeDomains, includeEntities, excludeDomains, excludeEntities) => {
    const includeDomainsSet = new Set(includeDomains);
    const includeEntitiesSet = new Set(includeEntities);
    const excludeDomainsSet = new Set(excludeDomains);
    const excludeEntitiesSet = new Set(excludeEntities);
    const haveInclude = includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
    const haveExclude = excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0;
    // Case 1 - no includes or excludes - pass all entities
    if (!haveInclude && !haveExclude) {
        return () => true;
    }
    // Case 2 - includes, no excludes - only include specified entities
    if (haveInclude && !haveExclude) {
        return (entityId) => includeEntitiesSet.has(entityId) ||
            includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
    }
    // Case 3 - excludes, no includes - only exclude specified entities
    if (!haveInclude && haveExclude) {
        return (entityId) => !excludeEntitiesSet.has(entityId) &&
            !excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
    }
    // Case 4 - both includes and excludes specified
    // Case 4a - include domain specified
    //  - if domain is included, pass if entity not excluded
    //  - if domain is not included, pass if entity is included
    // note: if both include and exclude domains specified,
    //   the exclude domains are ignored
    if (includeDomainsSet.size) {
        return (entityId) => includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId))
            ? !excludeEntitiesSet.has(entityId)
            : includeEntitiesSet.has(entityId);
    }
    // Case 4b - exclude domain specified
    //  - if domain is excluded, pass if entity is included
    //  - if domain is not excluded, pass if entity not excluded
    if (excludeDomainsSet.size) {
        return (entityId) => excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId))
            ? includeEntitiesSet.has(entityId)
            : !excludeEntitiesSet.has(entityId);
    }
    // Case 4c - neither include or exclude domain specified
    //  - Only pass if entity is included.  Ignore entity excludes.
    return (entityId) => includeEntitiesSet.has(entityId);
};


/***/ }),

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
const compare = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());


/***/ }),

/***/ "./src/components/entity/state-info.js":
/*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");








class StateInfo extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `;
  }

  static get styleTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `;
  }

  static get stateBadgeTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
  }

  static get infoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: () => false,
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "computeRTL(hass)",
      },
    };
  }

  computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
  }

  computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(hass);
  }
}

customElements.define("state-info", StateInfo);


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

/***/ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts":
/*!******************************************************************!*\
  !*** ./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts ***!
  \******************************************************************/
/*! exports provided: loadDomainTogglerDialog, showDomainTogglerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDomainTogglerDialog", function() { return loadDomainTogglerDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDomainTogglerDialog", function() { return showDomainTogglerDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDomainTogglerDialog = () => Promise.all(/*! import() | dialog-domain-toggler */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("dialog-domain-toggler")]).then(__webpack_require__.bind(null, /*! ./dialog-domain-toggler */ "./src/dialogs/domain-toggler/dialog-domain-toggler.ts"));
const showDomainTogglerDialog = (element, dialogParams) => {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-domain-toggler",
        dialogImport: loadDomainTogglerDialog,
        dialogParams,
    });
};


/***/ }),

/***/ "./src/panels/config/cloud/alexa/cloud-alexa.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/alexa/cloud-alexa.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");

















const DEFAULT_CONFIG_EXPOSE = true;
const IGNORE_INTERFACES = ["Alexa.EndpointHealth"];
const configIsExposed = (config) => config.should_expose === undefined
    ? DEFAULT_CONFIG_EXPOSE
    : config.should_expose;
let CloudAlexa = class CloudAlexa extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._entityConfigs = {};
        this._popstateSyncAttached = false;
        this._popstateReloadStatusAttached = false;
        this._getEntityFilterFunc = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])((filter) => Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities));
    }
    render() {
        if (this._entities === undefined) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hass-loading-screen></hass-loading-screen>
      `;
        }
        const emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["isEmptyFilter"])(this.cloudStatus.alexa_entities);
        const filterFunc = this._getEntityFilterFunc(this.cloudStatus.alexa_entities);
        // We will only generate `isInitialExposed` during first render.
        // On each subsequent render we will use the same set so that cards
        // will not jump around when we change the exposed setting.
        const showInExposed = this._isInitialExposed || new Set();
        const trackExposed = this._isInitialExposed === undefined;
        let selected = 0;
        // On first render we decide which cards show in which category.
        // That way cards won't jump around when changing values.
        const exposedCards = [];
        const notExposedCards = [];
        this._entities.forEach((entity) => {
            const stateObj = this.hass.states[entity.entity_id];
            const config = this._entityConfigs[entity.entity_id] || {};
            const isExposed = emptyFilter
                ? configIsExposed(config)
                : filterFunc(entity.entity_id);
            if (isExposed) {
                selected++;
                if (trackExposed) {
                    showInExposed.add(entity.entity_id);
                }
            }
            const target = showInExposed.has(entity.entity_id)
                ? exposedCards
                : notExposedCards;
            target.push(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <ha-card>
          <div class="card-content">
            <state-info
              .hass=${this.hass}
              .stateObj=${stateObj}
              secondary-line
              @click=${this._showMoreInfo}
            >
              ${entity.interfaces
                .filter((ifc) => !IGNORE_INTERFACES.includes(ifc))
                .map((ifc) => ifc.replace("Alexa.", "").replace("Controller", ""))
                .join(", ")}
            </state-info>
            <ha-switch
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @change=${this._exposeChanged}
            >
              ${this.hass.localize("ui.panel.config.cloud.alexa.expose")}
            </ha-switch>
          </div>
        </ha-card>
      `);
        });
        if (trackExposed) {
            this._isInitialExposed = showInExposed;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hass-subpage header="${this.hass.localize("ui.panel.config.cloud.alexa.title")}">
        <span slot="toolbar-icon">
          ${selected}${!this.narrow
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            selected
          `
            : ""}
        </span>
        ${emptyFilter
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <paper-icon-button
                  slot="toolbar-icon"
                  icon="hass:tune"
                  @click=${this._openDomainToggler}
                ></paper-icon-button>
              `
            : ""}
        ${!emptyFilter
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="banner">
                  ${this.hass.localize("ui.panel.config.cloud.alexa.banner")}
                </div>
              `
            : ""}
          ${exposedCards.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.alexa.exposed_entities")}
                  </h1>
                  <div class="content">${exposedCards}</div>
                `
            : ""}
          ${notExposedCards.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.alexa.not_exposed_entities")}
                  </h1>
                  <div class="content">${notExposedCards}</div>
                `
            : ""}
        </div>
      </hass-subpage>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._fetchData();
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("cloudStatus")) {
            this._entityConfigs = this.cloudStatus.prefs.alexa_entity_configs;
        }
    }
    async _fetchData() {
        const entities = await Object(_data_alexa__WEBPACK_IMPORTED_MODULE_14__["fetchCloudAlexaEntities"])(this.hass);
        entities.sort((a, b) => {
            const stateA = this.hass.states[a.entity_id];
            const stateB = this.hass.states[b.entity_id];
            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(stateB) : b.entity_id);
        });
        this._entities = entities;
    }
    _showMoreInfo(ev) {
        const entityId = ev.currentTarget.stateObj.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "hass-more-info", { entityId });
    }
    async _exposeChanged(ev) {
        const entityId = ev.currentTarget.entityId;
        const newExposed = ev.target.checked;
        await this._updateExposed(entityId, newExposed);
    }
    async _updateExposed(entityId, newExposed) {
        const curExposed = configIsExposed(this._entityConfigs[entityId] || {});
        if (newExposed === curExposed) {
            return;
        }
        await this._updateConfig(entityId, {
            should_expose: newExposed,
        });
        this._ensureEntitySync();
    }
    async _updateConfig(entityId, values) {
        const updatedConfig = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_9__["updateCloudAlexaEntityConfig"])(this.hass, entityId, values);
        this._entityConfigs = Object.assign(Object.assign({}, this._entityConfigs), { [entityId]: updatedConfig });
        this._ensureStatusReload();
    }
    _openDomainToggler() {
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__["showDomainTogglerDialog"])(this, {
            domains: this._entities.map((entity) => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__["computeDomain"])(entity.entity_id)).filter((value, idx, self) => self.indexOf(value) === idx),
            toggleDomain: (domain, turnOn) => {
                this._entities.forEach((entity) => {
                    if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__["computeDomain"])(entity.entity_id) === domain) {
                        this._updateExposed(entity.entity_id, turnOn);
                    }
                });
            },
        });
    }
    _ensureStatusReload() {
        if (this._popstateReloadStatusAttached) {
            return;
        }
        this._popstateReloadStatusAttached = true;
        // Cache parent because by the time popstate happens,
        // this element is detached
        const parent = this.parentElement;
        window.addEventListener("popstate", () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(parent, "ha-refresh-cloud-status"), { once: true });
    }
    _ensureEntitySync() {
        if (this._popstateSyncAttached) {
            return;
        }
        this._popstateSyncAttached = true;
        // Cache parent because by the time popstate happens,
        // this element is detached
        // const parent = this.parentElement!;
        window.addEventListener("popstate", () => {
            // We don't have anything yet.
            // showToast(parent, { message: "Synchronizing changes to Google." });
            // cloudSyncGoogleAssistant(this.hass);
        }, { once: true });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .banner {
        color: var(--primary-text-color);
        background-color: var(
          --ha-card-background,
          var(--paper-card-background-color, white)
        );
        padding: 16px 8px;
        text-align: center;
      }
      h1 {
        color: var(--primary-text-color);
        font-size: 24px;
        letter-spacing: -0.012em;
        margin-bottom: 0;
        padding: 0 8px;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        padding: 4px;
      }
      ha-switch {
        clear: both;
      }
      ha-card {
        margin: 4px;
        width: 100%;
        max-width: 300px;
      }
      .card-content {
        padding-bottom: 12px;
      }
      state-info {
        cursor: pointer;
      }
      ha-switch {
        padding: 8px 0;
      }

      @media all and (max-width: 450px) {
        ha-card {
          max-width: 100%;
        }
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexa.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexa.prototype, "cloudStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], CloudAlexa.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexa.prototype, "_entities", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexa.prototype, "_entityConfigs", void 0);
CloudAlexa = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-alexa")
], CloudAlexa);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWxleGEvY2xvdWQtYWxleGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBkYXRlIG9iamVjdCBhcyByZWxhdGl2ZSB0aW1lIGZyb20gbm93LlxuICpcbiAqIEV4YW1wbGUgb3V0cHV0OiA1IG1pbnV0ZXMgYWdvLCBpbiAzIGRheXMuXG4gKi9cbmNvbnN0IHRlc3RzID0gWzYwLCA2MCwgMjQsIDddO1xuY29uc3QgbGFuZ0tleSA9IFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShcbiAgZGF0ZU9iajogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgb3B0aW9uczoge1xuICAgIGNvbXBhcmVUaW1lPzogRGF0ZTtcbiAgICBpbmNsdWRlVGVuc2U/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbXBhcmVUaW1lID0gb3B0aW9ucy5jb21wYXJlVGltZSB8fCBuZXcgRGF0ZSgpO1xuICBsZXQgZGVsdGEgPSAoY29tcGFyZVRpbWUuZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgY29uc3QgdGVuc2UgPSBkZWx0YSA+PSAwID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiO1xuICBkZWx0YSA9IE1hdGguYWJzKGRlbHRhKTtcblxuICBsZXQgdGltZURlc2M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkZWx0YSA8IHRlc3RzW2ldKSB7XG4gICAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi4ke2xhbmdLZXlbaV19YCxcbiAgICAgICAgXCJjb3VudFwiLFxuICAgICAgICBkZWx0YVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhIC89IHRlc3RzW2ldO1xuICB9XG5cbiAgaWYgKHRpbWVEZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICBcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi53ZWVrXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBkZWx0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5pbmNsdWRlVGVuc2UgPT09IGZhbHNlXG4gICAgPyB0aW1lRGVzY1xuICAgIDogbG9jYWxpemUoYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS4ke3RlbnNlfWAsIFwidGltZVwiLCB0aW1lRGVzYyk7XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IHR5cGUgRmlsdGVyRnVuYyA9IChlbnRpdHlJZDogc3RyaW5nKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUZpbHRlciB7XG4gIGluY2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGluY2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzRW1wdHlGaWx0ZXIgPSAoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllcy5sZW5ndGggPT09XG4gIDA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbHRlciA9IChcbiAgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUVudGl0aWVzPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdXG4pOiBGaWx0ZXJGdW5jID0+IHtcbiAgY29uc3QgaW5jbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGluY2x1ZGVEb21haW5zKTtcbiAgY29uc3QgaW5jbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChpbmNsdWRlRW50aXRpZXMpO1xuICBjb25zdCBleGNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoZXhjbHVkZURvbWFpbnMpO1xuICBjb25zdCBleGNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVFbnRpdGllcyk7XG5cbiAgY29uc3QgaGF2ZUluY2x1ZGUgPSBpbmNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBpbmNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG4gIGNvbnN0IGhhdmVFeGNsdWRlID0gZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgZXhjbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuXG4gIC8vIENhc2UgMSAtIG5vIGluY2x1ZGVzIG9yIGV4Y2x1ZGVzIC0gcGFzcyBhbGwgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKCkgPT4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENhc2UgMiAtIGluY2x1ZGVzLCBubyBleGNsdWRlcyAtIG9ubHkgaW5jbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKGhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSB8fFxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgMyAtIGV4Y2x1ZGVzLCBubyBpbmNsdWRlcyAtIG9ubHkgZXhjbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiBoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgJiZcbiAgICAgICFleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSA0IC0gYm90aCBpbmNsdWRlcyBhbmQgZXhjbHVkZXMgc3BlY2lmaWVkXG4gIC8vIENhc2UgNGEgLSBpbmNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gbm90ZTogaWYgYm90aCBpbmNsdWRlIGFuZCBleGNsdWRlIGRvbWFpbnMgc3BlY2lmaWVkLFxuICAvLyAgIHRoZSBleGNsdWRlIGRvbWFpbnMgYXJlIGlnbm9yZWRcbiAgaWYgKGluY2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YiAtIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICBpZiAoZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRjIC0gbmVpdGhlciBpbmNsdWRlIG9yIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBPbmx5IHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkLiAgSWdub3JlIGVudGl0eSBleGNsdWRlcy5cbiAgcmV0dXJuIChlbnRpdHlJZCkgPT4gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNsYXNzIFN0YXRlSW5mbyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlfSAke3RoaXMuc3RhdGVCYWRnZVRlbXBsYXRlfSAke3RoaXMuaW5mb1RlbXBsYXRlfVxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDU2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWVbaW4tZGlhbG9nXSxcbiAgICAgICAgOmhvc3QoW3NlY29uZGFyeS1saW5lXSkgLm5hbWUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtYWdvLFxuICAgICAgICAuZXh0cmEtaW5mbyxcbiAgICAgICAgLmV4dHJhLWluZm8gPiAqIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUJhZGdlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBpbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiIGluLWRpYWxvZyQ9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1hZ29cIj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRhdGV0aW1lPVwiW1tzdGF0ZU9iai5sYXN0X2NoYW5nZWRdXVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWluRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPjxzbG90PiA8L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6ICgpID0+IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1pbmZvXCIsIFN0YXRlSW5mbyk7XG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRhdGV0aW1lT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWREYXRlVGltZTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUgPSB0aGlzLnVwZGF0ZVJlbGF0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIHVwZGF0ZSBldmVyeSA2MCBzZWNvbmRzXG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUmVsYXRpdmUsIDYwMDAwKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUludGVydmFsKTtcbiAgfVxuXG4gIGRhdGV0aW1lQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsID8gbmV3IERhdGUobmV3VmFsKSA6IG51bGw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICBkYXRldGltZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbGF0aXZlKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb20odGhpcyk7XG4gICAgaWYgKCF0aGlzLnBhcnNlZERhdGVUaW1lKSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gcmVsYXRpdmVUaW1lKHRoaXMucGFyc2VkRGF0ZVRpbWUsIHRoaXMubG9jYWxpemUpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWxhdGl2ZS10aW1lXCIsIEhhUmVsYXRpdmVUaW1lKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXMge1xuICBkb21haW5zOiBzdHJpbmdbXTtcbiAgdG9nZ2xlRG9tYWluOiAoZG9tYWluOiBzdHJpbmcsIHR1cm5PbjogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIgKi8gXCIuL2RpYWxvZy1kb21haW4tdG9nZ2xlclwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERvbWFpblRvZ2dsZXJEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxuICBDbG91ZFByZWZlcmVuY2VzLFxuICB1cGRhdGVDbG91ZEFsZXhhRW50aXR5Q29uZmlnLFxuICBBbGV4YUVudGl0eUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlRmlsdGVyLFxuICBpc0VtcHR5RmlsdGVyLFxuICBFbnRpdHlGaWx0ZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXJcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyXCI7XG5pbXBvcnQgeyBBbGV4YUVudGl0eSwgZmV0Y2hDbG91ZEFsZXhhRW50aXRpZXMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9hbGV4YVwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHX0VYUE9TRSA9IHRydWU7XG5jb25zdCBJR05PUkVfSU5URVJGQUNFUyA9IFtcIkFsZXhhLkVuZHBvaW50SGVhbHRoXCJdO1xuXG5jb25zdCBjb25maWdJc0V4cG9zZWQgPSAoY29uZmlnOiBBbGV4YUVudGl0eUNvbmZpZykgPT5cbiAgY29uZmlnLnNob3VsZF9leHBvc2UgPT09IHVuZGVmaW5lZFxuICAgID8gREVGQVVMVF9DT05GSUdfRVhQT1NFXG4gICAgOiBjb25maWcuc2hvdWxkX2V4cG9zZTtcblxuQGN1c3RvbUVsZW1lbnQoXCJjbG91ZC1hbGV4YVwiKVxuY2xhc3MgQ2xvdWRBbGV4YSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGNsb3VkU3RhdHVzITogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0aWVzPzogQWxleGFFbnRpdHlbXTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9lbnRpdHlDb25maWdzOiBDbG91ZFByZWZlcmVuY2VzW1wiYWxleGFfZW50aXR5X2NvbmZpZ3NcIl0gPSB7fTtcbiAgcHJpdmF0ZSBfcG9wc3RhdGVTeW5jQXR0YWNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0luaXRpYWxFeHBvc2VkPzogU2V0PHN0cmluZz47XG5cbiAgcHJpdmF0ZSBfZ2V0RW50aXR5RmlsdGVyRnVuYyA9IG1lbW9pemVPbmUoKGZpbHRlcjogRW50aXR5RmlsdGVyKSA9PlxuICAgIGdlbmVyYXRlRmlsdGVyKFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucyxcbiAgICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucyxcbiAgICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzXG4gICAgKVxuICApO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAodGhpcy5fZW50aXRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5RmlsdGVyID0gaXNFbXB0eUZpbHRlcih0aGlzLmNsb3VkU3RhdHVzLmFsZXhhX2VudGl0aWVzKTtcbiAgICBjb25zdCBmaWx0ZXJGdW5jID0gdGhpcy5fZ2V0RW50aXR5RmlsdGVyRnVuYyhcbiAgICAgIHRoaXMuY2xvdWRTdGF0dXMuYWxleGFfZW50aXRpZXNcbiAgICApO1xuXG4gICAgLy8gV2Ugd2lsbCBvbmx5IGdlbmVyYXRlIGBpc0luaXRpYWxFeHBvc2VkYCBkdXJpbmcgZmlyc3QgcmVuZGVyLlxuICAgIC8vIE9uIGVhY2ggc3Vic2VxdWVudCByZW5kZXIgd2Ugd2lsbCB1c2UgdGhlIHNhbWUgc2V0IHNvIHRoYXQgY2FyZHNcbiAgICAvLyB3aWxsIG5vdCBqdW1wIGFyb3VuZCB3aGVuIHdlIGNoYW5nZSB0aGUgZXhwb3NlZCBzZXR0aW5nLlxuICAgIGNvbnN0IHNob3dJbkV4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkIHx8IG5ldyBTZXQoKTtcbiAgICBjb25zdCB0cmFja0V4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID09PSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSAwO1xuXG4gICAgLy8gT24gZmlyc3QgcmVuZGVyIHdlIGRlY2lkZSB3aGljaCBjYXJkcyBzaG93IGluIHdoaWNoIGNhdGVnb3J5LlxuICAgIC8vIFRoYXQgd2F5IGNhcmRzIHdvbid0IGp1bXAgYXJvdW5kIHdoZW4gY2hhbmdpbmcgdmFsdWVzLlxuICAgIGNvbnN0IGV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuICAgIGNvbnN0IG5vdEV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgdGhpcy5fZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eS5lbnRpdHlfaWRdIHx8IHt9O1xuICAgICAgY29uc3QgaXNFeHBvc2VkID0gZW1wdHlGaWx0ZXJcbiAgICAgICAgPyBjb25maWdJc0V4cG9zZWQoY29uZmlnKVxuICAgICAgICA6IGZpbHRlckZ1bmMoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICBpZiAoaXNFeHBvc2VkKSB7XG4gICAgICAgIHNlbGVjdGVkKys7XG5cbiAgICAgICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgICAgIHNob3dJbkV4cG9zZWQuYWRkKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IHNob3dJbkV4cG9zZWQuaGFzKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAgID8gZXhwb3NlZENhcmRzXG4gICAgICAgIDogbm90RXhwb3NlZENhcmRzO1xuXG4gICAgICB0YXJnZXQucHVzaChodG1sYFxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgIHNlY29uZGFyeS1saW5lXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHtlbnRpdHkuaW50ZXJmYWNlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKGlmYykgPT4gIUlHTk9SRV9JTlRFUkZBQ0VTLmluY2x1ZGVzKGlmYykpXG4gICAgICAgICAgICAgICAgLm1hcCgoaWZjKSA9PlxuICAgICAgICAgICAgICAgICAgaWZjLnJlcGxhY2UoXCJBbGV4YS5cIiwgXCJcIikucmVwbGFjZShcIkNvbnRyb2xsZXJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKX1cbiAgICAgICAgICAgIDwvc3RhdGUtaW5mbz5cbiAgICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWVtcHR5RmlsdGVyfVxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke2lzRXhwb3NlZH1cbiAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2V4cG9zZUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS5leHBvc2VcIil9XG4gICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgYCk7XG4gICAgfSk7XG5cbiAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID0gc2hvd0luRXhwb3NlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS50aXRsZVwiXG4gICAgICApfVwiPlxuICAgICAgICA8c3BhbiBzbG90PVwidG9vbGJhci1pY29uXCI+XG4gICAgICAgICAgJHtzZWxlY3RlZH0ke1xuICAgICAgIXRoaXMubmFycm93XG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIHNlbGVjdGVkXG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJcbiAgICB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgJHtcbiAgICAgICAgICBlbXB0eUZpbHRlclxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2xvdD1cInRvb2xiYXItaWNvblwiXG4gICAgICAgICAgICAgICAgICBpY29uPVwiaGFzczp0dW5lXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX29wZW5Eb21haW5Ub2dnbGVyfVxuICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgfVxuICAgICAgICAke1xuICAgICAgICAgICFlbXB0eUZpbHRlclxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hbGV4YS5iYW5uZXJcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLmV4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLm5vdF9leHBvc2VkX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7bm90RXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzLmFsZXhhX2VudGl0eV9jb25maWdzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IGZldGNoQ2xvdWRBbGV4YUVudGl0aWVzKHRoaXMuaGFzcyk7XG4gICAgZW50aXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVBID0gdGhpcy5oYXNzLnN0YXRlc1thLmVudGl0eV9pZF07XG4gICAgICBjb25zdCBzdGF0ZUIgPSB0aGlzLmhhc3Muc3RhdGVzW2IuZW50aXR5X2lkXTtcbiAgICAgIHJldHVybiBjb21wYXJlKFxuICAgICAgICBzdGF0ZUEgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQSkgOiBhLmVudGl0eV9pZCxcbiAgICAgICAgc3RhdGVCID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUIpIDogYi5lbnRpdHlfaWRcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dNb3JlSW5mbyhldikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4cG9zZUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGNvbnN0IG5ld0V4cG9zZWQgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkO1xuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQsIG5ld0V4cG9zZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRXhwb3NlZChlbnRpdHlJZDogc3RyaW5nLCBuZXdFeHBvc2VkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY3VyRXhwb3NlZCA9IGNvbmZpZ0lzRXhwb3NlZCh0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eUlkXSB8fCB7fSk7XG4gICAgaWYgKG5ld0V4cG9zZWQgPT09IGN1ckV4cG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fdXBkYXRlQ29uZmlnKGVudGl0eUlkLCB7XG4gICAgICBzaG91bGRfZXhwb3NlOiBuZXdFeHBvc2VkLFxuICAgIH0pO1xuICAgIHRoaXMuX2Vuc3VyZUVudGl0eVN5bmMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZDogc3RyaW5nLCB2YWx1ZXM6IEFsZXhhRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIHZhbHVlc1xuICAgICk7XG4gICAgdGhpcy5fZW50aXR5Q29uZmlncyA9IHtcbiAgICAgIC4uLnRoaXMuX2VudGl0eUNvbmZpZ3MsXG4gICAgICBbZW50aXR5SWRdOiB1cGRhdGVkQ29uZmlnLFxuICAgIH07XG4gICAgdGhpcy5fZW5zdXJlU3RhdHVzUmVsb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRG9tYWluVG9nZ2xlcigpIHtcbiAgICBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyh0aGlzLCB7XG4gICAgICBkb21haW5zOiB0aGlzLl9lbnRpdGllcyEubWFwKChlbnRpdHkpID0+XG4gICAgICAgIGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZClcbiAgICAgICkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLFxuICAgICAgdG9nZ2xlRG9tYWluOiAoZG9tYWluLCB0dXJuT24pID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSBkb21haW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5LmVudGl0eV9pZCwgdHVybk9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZVN0YXR1c1JlbG9hZCgpIHtcbiAgICBpZiAodGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiBmaXJlRXZlbnQocGFyZW50LCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpLFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5zdXJlRW50aXR5U3luYygpIHtcbiAgICBpZiAodGhpcy5fcG9wc3RhdGVTeW5jQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVTeW5jQXR0YWNoZWQgPSB0cnVlO1xuICAgIC8vIENhY2hlIHBhcmVudCBiZWNhdXNlIGJ5IHRoZSB0aW1lIHBvcHN0YXRlIGhhcHBlbnMsXG4gICAgLy8gdGhpcyBlbGVtZW50IGlzIGRldGFjaGVkXG4gICAgLy8gY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50ITtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicG9wc3RhdGVcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgLy8gV2UgZG9uJ3QgaGF2ZSBhbnl0aGluZyB5ZXQuXG4gICAgICAgIC8vIHNob3dUb2FzdChwYXJlbnQsIHsgbWVzc2FnZTogXCJTeW5jaHJvbml6aW5nIGNoYW5nZXMgdG8gR29vZ2xlLlwiIH0pO1xuICAgICAgICAvLyBjbG91ZFN5bmNHb29nbGVBc3Npc3RhbnQodGhpcy5oYXNzKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIH1cbiAgICAgIGhhLXN3aXRjaCB7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgfVxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtYWxleGFcIjogQ2xvdWRBbGV4YTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFNQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUFBOztBQVdBO0FBQ0E7QUFDQTtBQUdBO0FBK1NBO0FBdFNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUlBO0FBRUE7O0FBRUE7QUFDQTs7QUFJQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTtBQUNBO0FBQ0E7QUE5VEE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUNBO0FBWEE7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9