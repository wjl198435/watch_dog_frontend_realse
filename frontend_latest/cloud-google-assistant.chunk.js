(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-google-assistant"],{

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

/***/ "./src/data/google_assistant.ts":
/*!**************************************!*\
  !*** ./src/data/google_assistant.ts ***!
  \**************************************/
/*! exports provided: fetchCloudGoogleEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudGoogleEntities", function() { return fetchCloudGoogleEntities; });
const fetchCloudGoogleEntities = (hass) => hass.callWS({ type: "cloud/google_assistant/entities" });


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

/***/ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _data_google_assistant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../data/google_assistant */ "./src/data/google_assistant.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");


















const DEFAULT_CONFIG_EXPOSE = true;
const configIsExposed = (config) => config.should_expose === undefined
    ? DEFAULT_CONFIG_EXPOSE
    : config.should_expose;
let CloudGoogleAssistant = class CloudGoogleAssistant extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._entityConfigs = {};
        this._popstateSyncAttached = false;
        this._popstateReloadStatusAttached = false;
        this._getEntityFilterFunc = Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])((filter) => Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities));
    }
    render() {
        if (this._entities === undefined) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hass-loading-screen></hass-loading-screen>
      `;
        }
        const emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["isEmptyFilter"])(this.cloudStatus.google_entities);
        const filterFunc = this._getEntityFilterFunc(this.cloudStatus.google_entities);
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
              ${entity.traits
                .map((trait) => trait.substr(trait.lastIndexOf(".") + 1))
                .join(", ")}
            </state-info>
            <ha-switch
              .entityId=${entity.entity_id}
              .disabled=${!emptyFilter}
              .checked=${isExposed}
              @change=${this._exposeChanged}
            >
              ${this.hass.localize("ui.panel.config.cloud.google.expose")}
            </ha-switch>
            ${entity.might_2fa
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <ha-switch
                    .entityId=${entity.entity_id}
                    .checked=${Boolean(config.disable_2fa)}
                    @change=${this._disable2FAChanged}
                  >
                    ${this.hass.localize("ui.panel.config.cloud.google.disable_2FA")}
                  </ha-switch>
                `
                : ""}
          </div>
        </ha-card>
      `);
        });
        if (trackExposed) {
            this._isInitialExposed = showInExposed;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hass-subpage header="${this.hass.localize("ui.panel.config.cloud.google.title")}">
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
                  ${this.hass.localize("ui.panel.config.cloud.google.banner")}
                </div>
              `
            : ""}
          ${exposedCards.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.google.exposed_entities")}
                  </h1>
                  <div class="content">${exposedCards}</div>
                `
            : ""}
          ${notExposedCards.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <h1>
                    ${this.hass.localize("ui.panel.config.cloud.google.not_exposed_entities")}
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
            this._entityConfigs = this.cloudStatus.prefs.google_entity_configs;
        }
    }
    async _fetchData() {
        const entities = await Object(_data_google_assistant__WEBPACK_IMPORTED_MODULE_15__["fetchCloudGoogleEntities"])(this.hass);
        entities.sort((a, b) => {
            const stateA = this.hass.states[a.entity_id];
            const stateB = this.hass.states[b.entity_id];
            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__["computeStateName"])(stateB) : b.entity_id);
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
    async _disable2FAChanged(ev) {
        const entityId = ev.currentTarget.entityId;
        const newDisable2FA = ev.target.checked;
        const curDisable2FA = Boolean((this._entityConfigs[entityId] || {}).disable_2fa);
        if (newDisable2FA === curDisable2FA) {
            return;
        }
        await this._updateConfig(entityId, {
            disable_2fa: newDisable2FA,
        });
    }
    async _updateConfig(entityId, values) {
        const updatedConfig = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_9__["updateCloudGoogleEntityConfig"])(this.hass, entityId, values);
        this._entityConfigs = Object.assign(Object.assign({}, this._entityConfigs), { [entityId]: updatedConfig });
        this._ensureStatusReload();
    }
    _openDomainToggler() {
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__["showDomainTogglerDialog"])(this, {
            domains: this._entities.map((entity) => Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_17__["computeDomain"])(entity.entity_id)).filter((value, idx, self) => self.indexOf(value) === idx),
            toggleDomain: (domain, turnOn) => {
                this._entities.forEach((entity) => {
                    if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_17__["computeDomain"])(entity.entity_id) === domain) {
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
        const parent = this.parentElement;
        window.addEventListener("popstate", () => {
            Object(_util_toast__WEBPACK_IMPORTED_MODULE_13__["showToast"])(parent, {
                message: this.hass.localize("ui.panel.config.cloud.googe.sync_to_google"),
            });
            Object(_data_cloud__WEBPACK_IMPORTED_MODULE_9__["cloudSyncGoogleAssistant"])(this.hass);
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
], CloudGoogleAssistant.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudGoogleAssistant.prototype, "cloudStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudGoogleAssistant.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudGoogleAssistant.prototype, "_entities", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudGoogleAssistant.prototype, "_entityConfigs", void 0);
CloudGoogleAssistant = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-google-assistant")
], CloudGoogleAssistant);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9nb29nbGVfYXNzaXN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2dvb2dsZS1hc3Npc3RhbnQvY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGEgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRhdGUgb2JqZWN0IGFzIHJlbGF0aXZlIHRpbWUgZnJvbSBub3cuXG4gKlxuICogRXhhbXBsZSBvdXRwdXQ6IDUgbWludXRlcyBhZ28sIGluIDMgZGF5cy5cbiAqL1xuY29uc3QgdGVzdHMgPSBbNjAsIDYwLCAyNCwgN107XG5jb25zdCBsYW5nS2V5ID0gW1wic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKFxuICBkYXRlT2JqOiBEYXRlLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBvcHRpb25zOiB7XG4gICAgY29tcGFyZVRpbWU/OiBEYXRlO1xuICAgIGluY2x1ZGVUZW5zZT86IGJvb2xlYW47XG4gIH0gPSB7fVxuKTogc3RyaW5nIHtcbiAgY29uc3QgY29tcGFyZVRpbWUgPSBvcHRpb25zLmNvbXBhcmVUaW1lIHx8IG5ldyBEYXRlKCk7XG4gIGxldCBkZWx0YSA9IChjb21wYXJlVGltZS5nZXRUaW1lKCkgLSBkYXRlT2JqLmdldFRpbWUoKSkgLyAxMDAwO1xuICBjb25zdCB0ZW5zZSA9IGRlbHRhID49IDAgPyBcInBhc3RcIiA6IFwiZnV0dXJlXCI7XG4gIGRlbHRhID0gTWF0aC5hYnMoZGVsdGEpO1xuXG4gIGxldCB0aW1lRGVzYztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGRlbHRhIDwgdGVzdHNbaV0pIHtcbiAgICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgICBgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLiR7bGFuZ0tleVtpXX1gLFxuICAgICAgICBcImNvdW50XCIsXG4gICAgICAgIGRlbHRhXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVsdGEgLz0gdGVzdHNbaV07XG4gIH1cblxuICBpZiAodGltZURlc2MgPT09IHVuZGVmaW5lZCkge1xuICAgIGRlbHRhID0gTWF0aC5mbG9vcihkZWx0YSk7XG4gICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgIFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLmR1cmF0aW9uLndlZWtcIixcbiAgICAgIFwiY291bnRcIixcbiAgICAgIGRlbHRhXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBvcHRpb25zLmluY2x1ZGVUZW5zZSA9PT0gZmFsc2VcbiAgICA/IHRpbWVEZXNjXG4gICAgOiBsb2NhbGl6ZShgdWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLiR7dGVuc2V9YCwgXCJ0aW1lXCIsIHRpbWVEZXNjKTtcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJGdW5jID0gKGVudGl0eUlkOiBzdHJpbmcpID0+IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5RmlsdGVyIHtcbiAgaW5jbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9lbnRpdGllczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGV4Y2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgaXNFbXB0eUZpbHRlciA9IChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzLmxlbmd0aCA9PT1cbiAgMDtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRmlsdGVyID0gKFxuICBpbmNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBpbmNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgZXhjbHVkZUVudGl0aWVzPzogc3RyaW5nW11cbik6IEZpbHRlckZ1bmMgPT4ge1xuICBjb25zdCBpbmNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoaW5jbHVkZURvbWFpbnMpO1xuICBjb25zdCBpbmNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGluY2x1ZGVFbnRpdGllcyk7XG4gIGNvbnN0IGV4Y2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChleGNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGV4Y2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoZXhjbHVkZUVudGl0aWVzKTtcblxuICBjb25zdCBoYXZlSW5jbHVkZSA9IGluY2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGluY2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcbiAgY29uc3QgaGF2ZUV4Y2x1ZGUgPSBleGNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBleGNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG5cbiAgLy8gQ2FzZSAxIC0gbm8gaW5jbHVkZXMgb3IgZXhjbHVkZXMgLSBwYXNzIGFsbCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoKSA9PiB0cnVlO1xuICB9XG5cbiAgLy8gQ2FzZSAyIC0gaW5jbHVkZXMsIG5vIGV4Y2x1ZGVzIC0gb25seSBpbmNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpIHx8XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSAzIC0gZXhjbHVkZXMsIG5vIGluY2x1ZGVzIC0gb25seSBleGNsdWRlIHNwZWNpZmllZCBlbnRpdGllc1xuICBpZiAoIWhhdmVJbmNsdWRlICYmIGhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSAmJlxuICAgICAgIWV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDQgLSBib3RoIGluY2x1ZGVzIGFuZCBleGNsdWRlcyBzcGVjaWZpZWRcbiAgLy8gQ2FzZSA0YSAtIGluY2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyBub3RlOiBpZiBib3RoIGluY2x1ZGUgYW5kIGV4Y2x1ZGUgZG9tYWlucyBzcGVjaWZpZWQsXG4gIC8vICAgdGhlIGV4Y2x1ZGUgZG9tYWlucyBhcmUgaWdub3JlZFxuICBpZiAoaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRiIC0gZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBleGNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIGlmIChleGNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGV4Y2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGMgLSBuZWl0aGVyIGluY2x1ZGUgb3IgZXhjbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIE9ubHkgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWQuICBJZ25vcmUgZW50aXR5IGV4Y2x1ZGVzLlxuICByZXR1cm4gKGVudGl0eUlkKSA9PiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbn07XG4iLCJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2hhLXJlbGF0aXZlLXRpbWVcIjtcbmltcG9ydCBcIi4vc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuY2xhc3MgU3RhdGVJbmZvIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLnN0eWxlVGVtcGxhdGV9ICR7dGhpcy5zdGF0ZUJhZGdlVGVtcGxhdGV9ICR7dGhpcy5pbmZvVGVtcGxhdGV9XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtYmFkZ2Uge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZVtpbi1kaWFsb2ddLFxuICAgICAgICA6aG9zdChbc2Vjb25kYXJ5LWxpbmVdKSAubmFtZSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGltZS1hZ28sXG4gICAgICAgIC5leHRyYS1pbmZvLFxuICAgICAgICAuZXh0cmEtaW5mbyA+ICoge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlQmFkZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIj48L3N0YXRlLWJhZGdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCIgaW4tZGlhbG9nJD1cIltbaW5EaWFsb2ddXVwiPlxuICAgICAgICAgIFtbY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbaW5EaWFsb2ddXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWFnb1wiPlxuICAgICAgICAgICAgPGhhLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmxhc3RfY2hhbmdlZF1dXCJcbiAgICAgICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaW5EaWFsb2ddXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1pbmZvXCI+PHNsb3Q+IDwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogKCkgPT4gZmFsc2UsXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWluZm9cIiwgU3RhdGVJbmZvKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVJlbGF0aXZlVGltZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXJlbGF0aXZlLXRpbWVcIiwgSGFSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZUVudGl0eSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICB0cmFpdHM6IHN0cmluZ1tdO1xuICBtaWdodF8yZmE6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkR29vZ2xlRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8R29vZ2xlRW50aXR5W10+KHsgdHlwZTogXCJjbG91ZC9nb29nbGVfYXNzaXN0YW50L2VudGl0aWVzXCIgfSk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zIHtcbiAgZG9tYWluczogc3RyaW5nW107XG4gIHRvZ2dsZURvbWFpbjogKGRvbWFpbjogc3RyaW5nLCB0dXJuT246IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiICovIFwiLi9kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogSGFEb21haW5Ub2dnbGVyRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3MtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbiAgQ2xvdWRQcmVmZXJlbmNlcyxcbiAgdXBkYXRlQ2xvdWRHb29nbGVFbnRpdHlDb25maWcsXG4gIGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCxcbiAgR29vZ2xlRW50aXR5Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVGaWx0ZXIsXG4gIGlzRW1wdHlGaWx0ZXIsXG4gIEVudGl0eUZpbHRlcixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlclwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL3RvYXN0XCI7XG5pbXBvcnQgeyBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyXCI7XG5pbXBvcnQge1xuICBHb29nbGVFbnRpdHksXG4gIGZldGNoQ2xvdWRHb29nbGVFbnRpdGllcyxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvZ29vZ2xlX2Fzc2lzdGFudFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgSGFTd2l0Y2ggfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5cbmNvbnN0IERFRkFVTFRfQ09ORklHX0VYUE9TRSA9IHRydWU7XG5cbmNvbnN0IGNvbmZpZ0lzRXhwb3NlZCA9IChjb25maWc6IEdvb2dsZUVudGl0eUNvbmZpZykgPT5cbiAgY29uZmlnLnNob3VsZF9leHBvc2UgPT09IHVuZGVmaW5lZFxuICAgID8gREVGQVVMVF9DT05GSUdfRVhQT1NFXG4gICAgOiBjb25maWcuc2hvdWxkX2V4cG9zZTtcblxuQGN1c3RvbUVsZW1lbnQoXCJjbG91ZC1nb29nbGUtYXNzaXN0YW50XCIpXG5jbGFzcyBDbG91ZEdvb2dsZUFzc2lzdGFudCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cyE6IENsb3VkU3RhdHVzTG9nZ2VkSW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRpdGllcz86IEdvb2dsZUVudGl0eVtdO1xuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9lbnRpdHlDb25maWdzOiBDbG91ZFByZWZlcmVuY2VzW1wiZ29vZ2xlX2VudGl0eV9jb25maWdzXCJdID0ge307XG4gIHByaXZhdGUgX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaXNJbml0aWFsRXhwb3NlZD86IFNldDxzdHJpbmc+O1xuXG4gIHByaXZhdGUgX2dldEVudGl0eUZpbHRlckZ1bmMgPSBtZW1vaXplT25lKChmaWx0ZXI6IEVudGl0eUZpbHRlcikgPT5cbiAgICBnZW5lcmF0ZUZpbHRlcihcbiAgICAgIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMsXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcyxcbiAgICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllc1xuICAgIClcbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VudGl0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUZpbHRlciA9IGlzRW1wdHlGaWx0ZXIodGhpcy5jbG91ZFN0YXR1cy5nb29nbGVfZW50aXRpZXMpO1xuICAgIGNvbnN0IGZpbHRlckZ1bmMgPSB0aGlzLl9nZXRFbnRpdHlGaWx0ZXJGdW5jKFxuICAgICAgdGhpcy5jbG91ZFN0YXR1cy5nb29nbGVfZW50aXRpZXNcbiAgICApO1xuXG4gICAgLy8gV2Ugd2lsbCBvbmx5IGdlbmVyYXRlIGBpc0luaXRpYWxFeHBvc2VkYCBkdXJpbmcgZmlyc3QgcmVuZGVyLlxuICAgIC8vIE9uIGVhY2ggc3Vic2VxdWVudCByZW5kZXIgd2Ugd2lsbCB1c2UgdGhlIHNhbWUgc2V0IHNvIHRoYXQgY2FyZHNcbiAgICAvLyB3aWxsIG5vdCBqdW1wIGFyb3VuZCB3aGVuIHdlIGNoYW5nZSB0aGUgZXhwb3NlZCBzZXR0aW5nLlxuICAgIGNvbnN0IHNob3dJbkV4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkIHx8IG5ldyBTZXQoKTtcbiAgICBjb25zdCB0cmFja0V4cG9zZWQgPSB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID09PSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgc2VsZWN0ZWQgPSAwO1xuXG4gICAgLy8gT24gZmlyc3QgcmVuZGVyIHdlIGRlY2lkZSB3aGljaCBjYXJkcyBzaG93IGluIHdoaWNoIGNhdGVnb3J5LlxuICAgIC8vIFRoYXQgd2F5IGNhcmRzIHdvbid0IGp1bXAgYXJvdW5kIHdoZW4gY2hhbmdpbmcgdmFsdWVzLlxuICAgIGNvbnN0IGV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuICAgIGNvbnN0IG5vdEV4cG9zZWRDYXJkczogVGVtcGxhdGVSZXN1bHRbXSA9IFtdO1xuXG4gICAgdGhpcy5fZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF07XG4gICAgICBjb25zdCBjb25maWcgPSB0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eS5lbnRpdHlfaWRdIHx8IHt9O1xuICAgICAgY29uc3QgaXNFeHBvc2VkID0gZW1wdHlGaWx0ZXJcbiAgICAgICAgPyBjb25maWdJc0V4cG9zZWQoY29uZmlnKVxuICAgICAgICA6IGZpbHRlckZ1bmMoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICBpZiAoaXNFeHBvc2VkKSB7XG4gICAgICAgIHNlbGVjdGVkKys7XG5cbiAgICAgICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgICAgIHNob3dJbkV4cG9zZWQuYWRkKGVudGl0eS5lbnRpdHlfaWQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IHNob3dJbkV4cG9zZWQuaGFzKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICAgID8gZXhwb3NlZENhcmRzXG4gICAgICAgIDogbm90RXhwb3NlZENhcmRzO1xuXG4gICAgICB0YXJnZXQucHVzaChodG1sYFxuICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3RhdGUtaW5mb1xuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7c3RhdGVPYmp9XG4gICAgICAgICAgICAgIHNlY29uZGFyeS1saW5lXG4gICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3Nob3dNb3JlSW5mb31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHtlbnRpdHkudHJhaXRzXG4gICAgICAgICAgICAgICAgLm1hcCgodHJhaXQpID0+IHRyYWl0LnN1YnN0cih0cmFpdC5sYXN0SW5kZXhPZihcIi5cIikgKyAxKSlcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtlbnRpdHkuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshZW1wdHlGaWx0ZXJ9XG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7aXNFeHBvc2VkfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZXhwb3NlQ2hhbmdlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5leHBvc2VcIil9XG4gICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICR7ZW50aXR5Lm1pZ2h0XzJmYVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7Qm9vbGVhbihjb25maWcuZGlzYWJsZV8yZmEpfVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZGlzYWJsZTJGQUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nbGUuZGlzYWJsZV8yRkFcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIGApO1xuICAgIH0pO1xuXG4gICAgaWYgKHRyYWNrRXhwb3NlZCkge1xuICAgICAgdGhpcy5faXNJbml0aWFsRXhwb3NlZCA9IHNob3dJbkV4cG9zZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLnRpdGxlXCJcbiAgICAgICl9XCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5iYW5uZXJcIil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIGV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5leHBvc2VkX2VudGl0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPiR7ZXhwb3NlZENhcmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICAgICR7XG4gICAgICAgICAgICBub3RFeHBvc2VkQ2FyZHMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nbGUubm90X2V4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtub3RFeHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjbG91ZFN0YXR1c1wiKSkge1xuICAgICAgdGhpcy5fZW50aXR5Q29uZmlncyA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnMuZ29vZ2xlX2VudGl0eV9jb25maWdzO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IGZldGNoQ2xvdWRHb29nbGVFbnRpdGllcyh0aGlzLmhhc3MpO1xuICAgIGVudGl0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlQSA9IHRoaXMuaGFzcy5zdGF0ZXNbYS5lbnRpdHlfaWRdO1xuICAgICAgY29uc3Qgc3RhdGVCID0gdGhpcy5oYXNzLnN0YXRlc1tiLmVudGl0eV9pZF07XG4gICAgICByZXR1cm4gY29tcGFyZShcbiAgICAgICAgc3RhdGVBID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUEpIDogYS5lbnRpdHlfaWQsXG4gICAgICAgIHN0YXRlQiA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVCKSA6IGIuZW50aXR5X2lkXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuX2VudGl0aWVzID0gZW50aXRpZXM7XG4gIH1cblxuICBwcml2YXRlIF9zaG93TW9yZUluZm8oZXYpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IGV2LmN1cnJlbnRUYXJnZXQuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHBvc2VDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdFeHBvc2VkID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgICBhd2FpdCB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eUlkLCBuZXdFeHBvc2VkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQ6IHN0cmluZywgbmV3RXhwb3NlZDogYm9vbGVhbikge1xuICAgIGNvbnN0IGN1ckV4cG9zZWQgPSBjb25maWdJc0V4cG9zZWQodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pO1xuICAgIGlmIChuZXdFeHBvc2VkID09PSBjdXJFeHBvc2VkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgc2hvdWxkX2V4cG9zZTogbmV3RXhwb3NlZCxcbiAgICB9KTtcbiAgICB0aGlzLl9lbnN1cmVFbnRpdHlTeW5jKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kaXNhYmxlMkZBQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgY29uc3QgbmV3RGlzYWJsZTJGQSA9IChldi50YXJnZXQgYXMgSGFTd2l0Y2gpLmNoZWNrZWQ7XG4gICAgY29uc3QgY3VyRGlzYWJsZTJGQSA9IEJvb2xlYW4oXG4gICAgICAodGhpcy5fZW50aXR5Q29uZmlnc1tlbnRpdHlJZF0gfHwge30pLmRpc2FibGVfMmZhXG4gICAgKTtcbiAgICBpZiAobmV3RGlzYWJsZTJGQSA9PT0gY3VyRGlzYWJsZTJGQSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl91cGRhdGVDb25maWcoZW50aXR5SWQsIHtcbiAgICAgIGRpc2FibGVfMmZhOiBuZXdEaXNhYmxlMkZBLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnKGVudGl0eUlkOiBzdHJpbmcsIHZhbHVlczogR29vZ2xlRW50aXR5Q29uZmlnKSB7XG4gICAgY29uc3QgdXBkYXRlZENvbmZpZyA9IGF3YWl0IHVwZGF0ZUNsb3VkR29vZ2xlRW50aXR5Q29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgZW50aXR5SWQsXG4gICAgICB2YWx1ZXNcbiAgICApO1xuICAgIHRoaXMuX2VudGl0eUNvbmZpZ3MgPSB7XG4gICAgICAuLi50aGlzLl9lbnRpdHlDb25maWdzLFxuICAgICAgW2VudGl0eUlkXTogdXBkYXRlZENvbmZpZyxcbiAgICB9O1xuICAgIHRoaXMuX2Vuc3VyZVN0YXR1c1JlbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkRvbWFpblRvZ2dsZXIoKSB7XG4gICAgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2codGhpcywge1xuICAgICAgZG9tYWluczogdGhpcy5fZW50aXRpZXMhLm1hcCgoZW50aXR5KSA9PlxuICAgICAgICBjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpXG4gICAgICApLmZpbHRlcigodmFsdWUsIGlkeCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaWR4KSxcbiAgICAgIHRvZ2dsZURvbWFpbjogKGRvbWFpbiwgdHVybk9uKSA9PiB7XG4gICAgICAgIHRoaXMuX2VudGl0aWVzIS5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVFeHBvc2VkKGVudGl0eS5lbnRpdHlfaWQsIHR1cm5Pbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVTdGF0dXNSZWxvYWQoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4gZmlyZUV2ZW50KHBhcmVudCwgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZUVudGl0eVN5bmMoKSB7XG4gICAgaWYgKHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlU3luY0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHNob3dUb2FzdChwYXJlbnQsIHtcbiAgICAgICAgICBtZXNzYWdlOiB0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2Uuc3luY190b19nb29nbGVcIlxuICAgICAgICAgICksXG4gICAgICAgIH0pO1xuICAgICAgICBjbG91ZFN5bmNHb29nbGVBc3Npc3RhbnQodGhpcy5oYXNzKTtcbiAgICAgIH0sXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuYmFubmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgfVxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICB9XG4gICAgICBzdGF0ZS1pbmZvIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgICAgaGEtc3dpdGNoIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIjogQ2xvdWRHb29nbGVBc3Npc3RhbnQ7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQUE7O0FBTUE7QUFDQTtBQUNBO0FBR0E7QUF1VUE7QUE5VEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFJQTtBQUVBOztBQUVBO0FBQ0E7O0FBSUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFHQTtBQUNBOztBQUVBOztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBalZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQU5BO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==