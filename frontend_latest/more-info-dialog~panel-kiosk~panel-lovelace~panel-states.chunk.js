(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],{

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

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
    const parts = duration.split(":").map(Number);
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
}


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

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
const leftPad = (num) => (num < 10 ? `0${num}` : num);
function secondsToDuration(d) {
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);
    if (h > 0) {
        return `${h}:${leftPad(m)}:${leftPad(s)}`;
    }
    if (m > 0) {
        return `${m}:${leftPad(s)}`;
    }
    if (s > 0) {
        return "" + s;
    }
    return null;
}


/***/ }),

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
const stopPropagation = (ev) => ev.stopPropagation();


/***/ }),

/***/ "./src/common/entity/supports-feature.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
const supportsFeature = (stateObj, feature) => {
    // tslint:disable-next-line:no-bitwise
    return (stateObj.attributes.supported_features & feature) !== 0;
};


/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerTimeRemaining", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

const timerTimeRemaining = (stateObj) => {
    let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);
    if (stateObj.state === "active") {
        const now = new Date().getTime();
        const madeActive = new Date(stateObj.last_changed).getTime();
        timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
    }
    return timeRemaining;
};


/***/ }),

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
const timeCachePromiseFunc = async (cacheKey, cacheTime, func, hass, entityId, ...args) => {
    let cache = hass[cacheKey];
    if (!cache) {
        cache = hass[cacheKey] = {};
    }
    const lastResult = cache[entityId];
    if (lastResult) {
        return lastResult;
    }
    const result = func(hass, entityId, ...args);
    cache[entityId] = result;
    result.then(
    // When successful, set timer to clear cache
    () => setTimeout(() => {
        cache[entityId] = undefined;
    }, cacheTime), 
    // On failure, clear cache right away
    () => {
        cache[entityId] = undefined;
    });
    return result;
};


/***/ }),

/***/ "./src/components/entity/ha-entity-toggle.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-switch */ "./src/components/ha-switch.ts");








const isOn = (stateObj) => stateObj !== undefined && !_common_const__WEBPACK_IMPORTED_MODULE_2__["STATES_OFF"].includes(stateObj.state);
class HaEntityToggle extends lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
    constructor() {
        super(...arguments);
        this._isOn = false;
    }
    render() {
        if (!this.stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
        <ha-switch disabled></ha-switch>
      `;
        }
        if (this.stateObj.attributes.assumed_state) {
            return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
        <paper-icon-button
          aria-label=${`Turn ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <ha-switch
        aria-label=${`Toggle ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(this.stateObj)} ${this._isOn ? "off" : "on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></ha-switch>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.addEventListener("click", (ev) => ev.stopPropagation());
    }
    updated(changedProps) {
        if (changedProps.has("stateObj")) {
            this._isOn = isOn(this.stateObj);
        }
    }
    _toggleChanged(ev) {
        const newVal = ev.target.checked;
        if (newVal !== this._isOn) {
            this._callService(newVal);
        }
    }
    _turnOn() {
        this._callService(true);
    }
    _turnOff() {
        this._callService(false);
    }
    // We will force a re-render after a successful call to re-sync the toggle
    // with the state. It will be out of sync if our service call did not
    // result in the entity to be turned on. Since the state is not changing,
    // the resync is not called automatic.
    async _callService(turnOn) {
        if (!this.hass || !this.stateObj) {
            return;
        }
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_4__["forwardHaptic"])("light");
        const stateDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(this.stateObj);
        let serviceDomain;
        let service;
        if (stateDomain === "lock") {
            serviceDomain = "lock";
            service = turnOn ? "unlock" : "lock";
        }
        else if (stateDomain === "cover") {
            serviceDomain = "cover";
            service = turnOn ? "open_cover" : "close_cover";
        }
        else if (stateDomain === "group") {
            serviceDomain = "homeassistant";
            service = turnOn ? "turn_on" : "turn_off";
        }
        else {
            serviceDomain = stateDomain;
            service = turnOn ? "turn_on" : "turn_off";
        }
        const currentState = this.stateObj;
        // Optimistic update.
        this._isOn = turnOn;
        await this.hass.callService(serviceDomain, service, {
            entity_id: this.stateObj.entity_id,
        });
        setTimeout(async () => {
            // If after 2 seconds we have not received a state update
            // reset the switch to it's original state.
            if (this.stateObj === currentState) {
                this._isOn = isOn(this.stateObj);
            }
        }, 2000);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"] `
      :host {
        white-space: nowrap;
        min-width: 38px;
      }
      paper-icon-button {
        color: var(
          --paper-icon-button-inactive-color,
          var(--primary-text-color)
        );
        transition: color 0.5s;
      }
      paper-icon-button[state-active] {
        color: var(--paper-icon-button-active-color, var(--primary-color));
      }
      ha-switch {
        padding: 13px 5px;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaEntityToggle.prototype, "stateObj", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaEntityToggle.prototype, "_isOn", void 0);
customElements.define("ha-entity-toggle", HaEntityToggle);


/***/ }),

/***/ "./src/components/ha-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/climate */ "./src/data/climate.ts");






/*
 * @appliesMixin LocalizeMixin
 */
class HaClimateState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      currentStatus: {
        type: String,
        computed: "computeCurrentStatus(hass, stateObj)",
      },
    };
  }

  computeCurrentStatus(hass, stateObj) {
    if (!hass || !stateObj) return null;
    if (stateObj.attributes.current_temperature != null) {
      return `${stateObj.attributes.current_temperature} ${
        hass.config.unit_system.temperature
      }`;
    }
    if (stateObj.attributes.current_humidity != null) {
      return `${stateObj.attributes.current_humidity} %`;
    }
    return null;
  }

  computeTarget(hass, stateObj) {
    if (!hass || !stateObj) return null;
    // We're using "!= null" on purpose so that we match both null and undefined.
    if (
      stateObj.attributes.target_temp_low != null &&
      stateObj.attributes.target_temp_high != null
    ) {
      return `${stateObj.attributes.target_temp_low}-${
        stateObj.attributes.target_temp_high
      } ${hass.config.unit_system.temperature}`;
    }
    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${
        hass.config.unit_system.temperature
      }`;
    }
    if (
      stateObj.attributes.target_humidity_low != null &&
      stateObj.attributes.target_humidity_high != null
    ) {
      return `${stateObj.attributes.target_humidity_low}-${
        stateObj.attributes.target_humidity_high
      }%`;
    }
    if (stateObj.attributes.humidity != null) {
      return `${stateObj.attributes.humidity} %`;
    }

    return "";
  }

  _hasKnownState(state) {
    return state !== "unknown";
  }

  _localizeState(localize, stateObj) {
    const stateString = localize(`state.climate.${stateObj.state}`);
    return stateObj.attributes.hvac_action
      ? `${localize(
          `state_attributes.climate.hvac_action.${
            stateObj.attributes.hvac_action
          }`
        )} (${stateString})`
      : stateString;
  }

  _localizePreset(localize, preset) {
    return localize(`state_attributes.climate.preset_mode.${preset}`) || preset;
  }

  _renderPreset(attributes) {
    return (
      attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_3__["CLIMATE_PRESET_NONE"]
    );
  }
}
customElements.define("ha-climate-state", HaClimateState);


/***/ }),

/***/ "./src/components/ha-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");






class HaCoverControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="hass:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },
      stateObj: {
        type: Object,
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)",
      },
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
  }

  onOpenTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCover();
  }

  onCloseTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCover();
  }

  onStopTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCover();
  }
}

customElements.define("ha-cover-controls", HaCoverControls);


/***/ }),

/***/ "./src/components/ha-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");







class HaCoverTiltControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },
      stateObj: {
        type: Object,
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)",
      },
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyOpenTilt && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyClosedTilt && !assumedState;
  }

  onOpenTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCoverTilt();
  }

  onCloseTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCoverTilt();
  }

  onStopTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCoverTilt();
  }
}

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);


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

/***/ "./src/components/ha-slider.js":
/*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");


const PaperSliderClass = customElements.get("paper-slider");
let subTemplate;

class HaSlider extends PaperSliderClass {
  static get template() {
    if (!subTemplate) {
      subTemplate = PaperSliderClass.template.cloneNode(true);

      const superStyle = subTemplate.content.querySelector("style");

      // append style to add mirroring of pin in RTL
      superStyle.appendChild(
        document.createTextNode(`
          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {
            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            }
        `)
      );
    }
    return subTemplate;
  }

  _calcStep(value) {
    if (!this.step) {
      return parseFloat(value);
    }

    const numSteps = Math.round((value - this.min) / this.step);
    const stepStr = this.step.toString();
    const stepPointAt = stepStr.indexOf(".");
    if (stepPointAt !== -1) {
      /**
       * For small values of this.step, if we calculate the step using
       * For non-integer values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can round with the decimal precision of `step`
       */
      const precision = 10 ** (stepStr.length - stepPointAt - 1);
      return (
        Math.round((numSteps * this.step + this.min) * precision) / precision
      );
    }

    return numSteps * this.step + this.min;
  }
}
customElements.define("ha-slider", HaSlider);


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

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
const hassUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (hass, path) => hass.callWS({ type: "auth/sign_path", path });
const fetchAuthProviders = () => fetch("/auth/providers", {
    credentials: "same-origin",
});


/***/ }),

/***/ "./src/data/camera.ts":
/*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
/*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_ON_OFF", function() { return CAMERA_SUPPORT_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_STREAM", function() { return CAMERA_SUPPORT_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMJPEGStreamUrl", function() { return computeMJPEGStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrlWithCache", function() { return fetchThumbnailUrlWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrl", function() { return fetchThumbnailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnail", function() { return fetchThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreamUrl", function() { return fetchStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCameraPrefs", function() { return fetchCameraPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCameraPrefs", function() { return updateCameraPrefs; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/data/auth.ts");


const CAMERA_SUPPORT_ON_OFF = 1;
const CAMERA_SUPPORT_STREAM = 2;
const computeMJPEGStreamUrl = (entity) => `/api/camera_proxy_stream/${entity.entity_id}?token=${entity.attributes.access_token}`;
const fetchThumbnailUrlWithCache = (hass, entityId) => Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
const fetchThumbnailUrl = async (hass, entityId) => {
    const path = await Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, `/api/camera_proxy/${entityId}`);
    return hass.hassUrl(path.path);
};
const fetchThumbnail = (hass, entityId) => {
    // tslint:disable-next-line: no-console
    console.warn("This method has been deprecated.");
    return hass.callWS({
        type: "camera_thumbnail",
        entity_id: entityId,
    });
};
const fetchStreamUrl = async (hass, entityId, format) => {
    const data = {
        type: "camera/stream",
        entity_id: entityId,
    };
    if (format) {
        // @ts-ignore
        data.format = format;
    }
    const stream = await hass.callWS(data);
    stream.url = hass.hassUrl(stream.url);
    return stream;
};
const fetchCameraPrefs = (hass, entityId) => hass.callWS({
    type: "camera/get_prefs",
    entity_id: entityId,
});
const updateCameraPrefs = (hass, entityId, prefs) => hass.callWS(Object.assign({ type: "camera/update_prefs", entity_id: entityId }, prefs));


/***/ }),

/***/ "./src/data/climate.ts":
/*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
/*! exports provided: CLIMATE_PRESET_NONE, CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT, compareClimateHvacModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_PRESET_NONE", function() { return CLIMATE_PRESET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_HUMIDITY", function() { return CLIMATE_SUPPORT_TARGET_HUMIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_FAN_MODE", function() { return CLIMATE_SUPPORT_FAN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_PRESET_MODE", function() { return CLIMATE_SUPPORT_PRESET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_SWING_MODE", function() { return CLIMATE_SUPPORT_SWING_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_AUX_HEAT", function() { return CLIMATE_SUPPORT_AUX_HEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareClimateHvacModes", function() { return compareClimateHvacModes; });
const CLIMATE_PRESET_NONE = "none";
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
const CLIMATE_SUPPORT_AUX_HEAT = 64;
const hvacModeOrdering = {
    auto: 1,
    heat_cool: 2,
    heat: 3,
    cool: 4,
    dry: 5,
    fan_only: 6,
    off: 7,
};
const compareClimateHvacModes = (mode1, mode2) => hvacModeOrdering[mode1] - hvacModeOrdering[mode2];


/***/ }),

/***/ "./src/data/input-select.ts":
/*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
const setInputSelectOption = (hass, entity, option) => hass.callService("input_select", "select_option", {
    option,
    entity_id: entity,
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

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");


/* eslint-enable no-bitwise */
class CoverEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isFullyOpen() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 100;
    }
    return this.stateObj.state === "open";
  }

  get isFullyClosed() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 0;
    }
    return this.stateObj.state === "closed";
  }

  get isFullyOpenTilt() {
    return this._attr.current_tilt_position === 100;
  }

  get isFullyClosedTilt() {
    return this._attr.current_tilt_position === 0;
  }

  get isOpening() {
    return this.stateObj.state === "opening";
  }

  get isClosing() {
    return this.stateObj.state === "closing";
  }

  get supportsOpen() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsClose() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
  }

  get supportsSetPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsStop() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsOpenTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsCloseTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsStopTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
  }

  get supportsSetTiltPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get isTiltOnly() {
    const supportsCover =
      this.supportsOpen || this.supportsClose || this.supportsStop;
    const supportsTilt =
      this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
    return supportsTilt && !supportsCover;
  }

  openCover() {
    this.callService("open_cover");
  }

  closeCover() {
    this.callService("close_cover");
  }

  stopCover() {
    this.callService("stop_cover");
  }

  openCoverTilt() {
    this.callService("open_cover_tilt");
  }

  closeCoverTilt() {
    this.callService("close_cover_tilt");
  }

  stopCoverTilt() {
    this.callService("stop_cover_tilt");
  }

  setCoverPosition(position) {
    this.callService("set_cover_position", { position });
  }

  setCoverTiltPosition(tiltPosition) {
    this.callService("set_cover_tilt_position", {
      tilt_position: tiltPosition,
    });
  }

  // helper method

  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("cover", service, data);
  }
}

const supportsOpen = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);

const supportsClose = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);

const supportsSetPosition = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);

const supportsStop = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);

const supportsOpenTilt = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);

const supportsCloseTilt = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);

const supportsStopTilt = (stateObj) => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);

const supportsSetTiltPosition = (stateObj) =>
  Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);

function isTiltOnly(stateObj) {
  const supportsCover =
    supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  const supportsTilt =
    supportsOpenTilt(stateObj) ||
    supportsCloseTilt(stateObj) ||
    supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}


/***/ }),

/***/ "./src/util/hass-media-player-model.js":
/*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayerEntity; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");


class MediaPlayerEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isOff() {
    return this.stateObj.state === "off";
  }

  get isIdle() {
    return this.stateObj.state === "idle";
  }

  get isMuted() {
    return this._attr.is_volume_muted;
  }

  get isPaused() {
    return this.stateObj.state === "paused";
  }

  get isPlaying() {
    return this.stateObj.state === "playing";
  }

  get isMusic() {
    return this._attr.media_content_type === "music";
  }

  get isTVShow() {
    return this._attr.media_content_type === "tvshow";
  }

  get hasMediaControl() {
    return (
      ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1
    );
  }

  get volumeSliderValue() {
    return this._attr.volume_level * 100;
  }

  get showProgress() {
    return (
      (this.isPlaying || this.isPaused) &&
      "media_duration" in this.stateObj.attributes &&
      "media_position" in this.stateObj.attributes &&
      "media_position_updated_at" in this.stateObj.attributes
    );
  }

  get currentProgress() {
    var progress = this._attr.media_position;
    if (this.isPlaying) {
      progress +=
        (Date.now() -
          new Date(this._attr.media_position_updated_at).getTime()) /
        1000.0;
    }
    return progress;
  }

  get supportsPause() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsVolumeSet() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsVolumeMute() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsPreviousTrack() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsNextTrack() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsTurnOn() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get supportsTurnOff() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
  }

  get supportsPlayMedia() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
  }

  get supportsVolumeButtons() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
  }

  get supportsSelectSource() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
  }

  get supportsSelectSoundMode() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
  }

  get supportsPlay() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
  }

  get primaryTitle() {
    return this._attr.media_title;
  }

  get secondaryTitle() {
    if (this.isMusic) {
      return this._attr.media_artist;
    }
    if (this.isTVShow) {
      var text = this._attr.media_series_title;

      if (this._attr.media_season) {
        text += " S" + this._attr.media_season;

        if (this._attr.media_episode) {
          text += "E" + this._attr.media_episode;
        }
      }

      return text;
    }
    if (this._attr.app_name) {
      return this._attr.app_name;
    }
    return "";
  }

  get source() {
    return this._attr.source;
  }

  get sourceList() {
    return this._attr.source_list;
  }

  get soundMode() {
    return this._attr.sound_mode;
  }

  get soundModeList() {
    return this._attr.sound_mode_list;
  }

  mediaPlayPause() {
    this.callService("media_play_pause");
  }

  nextTrack() {
    this.callService("media_next_track");
  }

  playbackControl() {
    this.callService("media_play_pause");
  }

  previousTrack() {
    this.callService("media_previous_track");
  }

  setVolume(volume) {
    this.callService("volume_set", { volume_level: volume });
  }

  togglePower() {
    if (this.isOff) {
      this.turnOn();
    } else {
      this.turnOff();
    }
  }

  turnOff() {
    this.callService("turn_off");
  }

  turnOn() {
    this.callService("turn_on");
  }

  volumeDown() {
    this.callService("volume_down");
  }

  volumeMute(mute) {
    if (!this.supportsVolumeMute) {
      throw new Error("Muting volume not supported");
    }
    this.callService("volume_mute", { is_volume_muted: mute });
  }

  volumeUp() {
    this.callService("volume_up");
  }

  selectSource(source) {
    this.callService("select_source", { source });
  }

  selectSoundMode(soundMode) {
    this.callService("select_sound_mode", { sound_mode: soundMode });
  }

  // helper method

  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("media_player", service, data);
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1zdGF0ZXMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZHVyYXRpb25fdG9fc2Vjb25kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9zZWNvbmRzX3RvX2R1cmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3N0b3BfcHJvcGFnYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvdGltZS1jYWNoZS1mdW5jdGlvbi1wcm9taXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNsaW1hdGUtc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLW1hcmtkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXN3aXRjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2lucHV0LXNlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb3Zlci1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcInJlbmRlck1hcmtkb3duXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwM2ZkNDkwYjBjZDE0MGNkZTA5OS53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNDb21wb25lbnRMb2FkZWQoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbXBvbmVudDogc3RyaW5nXG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIGhhc3MgJiYgaGFzcy5jb25maWcuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCkgIT09IC0xO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHVyYXRpb25Ub1NlY29uZHMoZHVyYXRpb246IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IHBhcnRzID0gZHVyYXRpb24uc3BsaXQoXCI6XCIpLm1hcChOdW1iZXIpO1xuICByZXR1cm4gcGFydHNbMF0gKiAzNjAwICsgcGFydHNbMV0gKiA2MCArIHBhcnRzWzJdO1xufVxuIiwiaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuXG4vKipcbiAqIENhbGN1bGF0ZSBhIHN0cmluZyByZXByZXNlbnRpbmcgYSBkYXRlIG9iamVjdCBhcyByZWxhdGl2ZSB0aW1lIGZyb20gbm93LlxuICpcbiAqIEV4YW1wbGUgb3V0cHV0OiA1IG1pbnV0ZXMgYWdvLCBpbiAzIGRheXMuXG4gKi9cbmNvbnN0IHRlc3RzID0gWzYwLCA2MCwgMjQsIDddO1xuY29uc3QgbGFuZ0tleSA9IFtcInNlY29uZFwiLCBcIm1pbnV0ZVwiLCBcImhvdXJcIiwgXCJkYXlcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0aXZlVGltZShcbiAgZGF0ZU9iajogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgb3B0aW9uczoge1xuICAgIGNvbXBhcmVUaW1lPzogRGF0ZTtcbiAgICBpbmNsdWRlVGVuc2U/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyB7XG4gIGNvbnN0IGNvbXBhcmVUaW1lID0gb3B0aW9ucy5jb21wYXJlVGltZSB8fCBuZXcgRGF0ZSgpO1xuICBsZXQgZGVsdGEgPSAoY29tcGFyZVRpbWUuZ2V0VGltZSgpIC0gZGF0ZU9iai5nZXRUaW1lKCkpIC8gMTAwMDtcbiAgY29uc3QgdGVuc2UgPSBkZWx0YSA+PSAwID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiO1xuICBkZWx0YSA9IE1hdGguYWJzKGRlbHRhKTtcblxuICBsZXQgdGltZURlc2M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChkZWx0YSA8IHRlc3RzW2ldKSB7XG4gICAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgICAgdGltZURlc2MgPSBsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi4ke2xhbmdLZXlbaV19YCxcbiAgICAgICAgXCJjb3VudFwiLFxuICAgICAgICBkZWx0YVxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlbHRhIC89IHRlc3RzW2ldO1xuICB9XG5cbiAgaWYgKHRpbWVEZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICBkZWx0YSA9IE1hdGguZmxvb3IoZGVsdGEpO1xuICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICBcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5kdXJhdGlvbi53ZWVrXCIsXG4gICAgICBcImNvdW50XCIsXG4gICAgICBkZWx0YVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gb3B0aW9ucy5pbmNsdWRlVGVuc2UgPT09IGZhbHNlXG4gICAgPyB0aW1lRGVzY1xuICAgIDogbG9jYWxpemUoYHVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS4ke3RlbnNlfWAsIFwidGltZVwiLCB0aW1lRGVzYyk7XG59XG4iLCJjb25zdCBsZWZ0UGFkID0gKG51bTogbnVtYmVyKSA9PiAobnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWNvbmRzVG9EdXJhdGlvbihkOiBudW1iZXIpIHtcbiAgY29uc3QgaCA9IE1hdGguZmxvb3IoZCAvIDM2MDApO1xuICBjb25zdCBtID0gTWF0aC5mbG9vcigoZCAlIDM2MDApIC8gNjApO1xuICBjb25zdCBzID0gTWF0aC5mbG9vcigoZCAlIDM2MDApICUgNjApO1xuXG4gIGlmIChoID4gMCkge1xuICAgIHJldHVybiBgJHtofToke2xlZnRQYWQobSl9OiR7bGVmdFBhZChzKX1gO1xuICB9XG4gIGlmIChtID4gMCkge1xuICAgIHJldHVybiBgJHttfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAocyA+IDApIHtcbiAgICByZXR1cm4gXCJcIiArIHM7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4iLCJleHBvcnQgY29uc3Qgc3RvcFByb3BhZ2F0aW9uID0gKGV2KSA9PiBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0ZlYXR1cmUgPSAoXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBmZWF0dXJlOiBudW1iZXJcbik6IGJvb2xlYW4gPT4ge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICByZXR1cm4gKHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzISAmIGZlYXR1cmUpICE9PSAwO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgZHVyYXRpb25Ub1NlY29uZHMgZnJvbSBcIi4uL2RhdGV0aW1lL2R1cmF0aW9uX3RvX3NlY29uZHNcIjtcblxuZXhwb3J0IGNvbnN0IHRpbWVyVGltZVJlbWFpbmluZyA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICBsZXQgdGltZVJlbWFpbmluZyA9IGR1cmF0aW9uVG9TZWNvbmRzKHN0YXRlT2JqLmF0dHJpYnV0ZXMucmVtYWluaW5nKTtcblxuICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBtYWRlQWN0aXZlID0gbmV3IERhdGUoc3RhdGVPYmoubGFzdF9jaGFuZ2VkKS5nZXRUaW1lKCk7XG4gICAgdGltZVJlbWFpbmluZyA9IE1hdGgubWF4KHRpbWVSZW1haW5pbmcgLSAobm93IC0gbWFkZUFjdGl2ZSkgLyAxMDAwLCAwKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lUmVtYWluaW5nO1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFJlc3VsdENhY2hlPFQ+IHtcbiAgW2VudGl0eUlkOiBzdHJpbmddOiBQcm9taXNlPFQ+IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgdGltZUNhY2hlUHJvbWlzZUZ1bmMgPSBhc3luYyA8VD4oXG4gIGNhY2hlS2V5OiBzdHJpbmcsXG4gIGNhY2hlVGltZTogbnVtYmVyLFxuICBmdW5jOiAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBlbnRpdHlJZDogc3RyaW5nLFxuICAgIC4uLmFyZ3M6IHVua25vd25bXVxuICApID0+IFByb21pc2U8VD4sXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIC4uLmFyZ3M6IHVua25vd25bXVxuKTogUHJvbWlzZTxUPiA9PiB7XG4gIGxldCBjYWNoZTogUmVzdWx0Q2FjaGU8VD4gfCB1bmRlZmluZWQgPSAoaGFzcyBhcyBhbnkpW2NhY2hlS2V5XTtcblxuICBpZiAoIWNhY2hlKSB7XG4gICAgY2FjaGUgPSBoYXNzW2NhY2hlS2V5XSA9IHt9O1xuICB9XG5cbiAgY29uc3QgbGFzdFJlc3VsdCA9IGNhY2hlW2VudGl0eUlkXTtcblxuICBpZiAobGFzdFJlc3VsdCkge1xuICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gZnVuYyhoYXNzLCBlbnRpdHlJZCwgLi4uYXJncyk7XG4gIGNhY2hlW2VudGl0eUlkXSA9IHJlc3VsdDtcblxuICByZXN1bHQudGhlbihcbiAgICAvLyBXaGVuIHN1Y2Nlc3NmdWwsIHNldCB0aW1lciB0byBjbGVhciBjYWNoZVxuICAgICgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FjaGUhW2VudGl0eUlkXSA9IHVuZGVmaW5lZDtcbiAgICAgIH0sIGNhY2hlVGltZSksXG4gICAgLy8gT24gZmFpbHVyZSwgY2xlYXIgY2FjaGUgcmlnaHQgYXdheVxuICAgICgpID0+IHtcbiAgICAgIGNhY2hlIVtlbnRpdHlJZF0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IHsgU1RBVEVTX09GRiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBmb3J3YXJkSGFwdGljIH0gZnJvbSBcIi4uLy4uL2RhdGEvaGFwdGljc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5pbXBvcnQgXCIuLi9oYS1zd2l0Y2hcIjtcblxuY29uc3QgaXNPbiA9IChzdGF0ZU9iaj86IEhhc3NFbnRpdHkpID0+XG4gIHN0YXRlT2JqICE9PSB1bmRlZmluZWQgJiYgIVNUQVRFU19PRkYuaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpO1xuXG5jbGFzcyBIYUVudGl0eVRvZ2dsZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAvLyBoYXNzIGlzIG5vdCBhIHByb3BlcnR5IHNvIHRoYXQgd2Ugb25seSByZS1yZW5kZXIgb24gc3RhdGVPYmogY2hhbmdlc1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IEhhc3NFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2lzT246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhLXN3aXRjaCBkaXNhYmxlZD48L2hhLXN3aXRjaD5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD0ke2BUdXJuICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gb2ZmYH1cbiAgICAgICAgICBpY29uPVwiaGFzczpmbGFzaC1vZmZcIlxuICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3R1cm5PZmZ9XG4gICAgICAgICAgP3N0YXRlLWFjdGl2ZT0keyF0aGlzLl9pc09ufVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD0ke2BUdXJuICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gb25gfVxuICAgICAgICAgIGljb249XCJoYXNzOmZsYXNoXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90dXJuT259XG4gICAgICAgICAgP3N0YXRlLWFjdGl2ZT0ke3RoaXMuX2lzT259XG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgYXJpYS1sYWJlbD0ke2BUb2dnbGUgJHtjb21wdXRlU3RhdGVOYW1lKHRoaXMuc3RhdGVPYmopfSAke1xuICAgICAgICAgIHRoaXMuX2lzT24gPyBcIm9mZlwiIDogXCJvblwiXG4gICAgICAgIH1gfVxuICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2lzT259XG4gICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90b2dnbGVDaGFuZ2VkfVxuICAgICAgPjwvaGEtc3dpdGNoPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHRoaXMuX2lzT24gPSBpc09uKHRoaXMuc3RhdGVPYmopO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3RvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBldi50YXJnZXQuY2hlY2tlZDtcblxuICAgIGlmIChuZXdWYWwgIT09IHRoaXMuX2lzT24pIHtcbiAgICAgIHRoaXMuX2NhbGxTZXJ2aWNlKG5ld1ZhbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdHVybk9uKCkge1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlKHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHVybk9mZigpIHtcbiAgICB0aGlzLl9jYWxsU2VydmljZShmYWxzZSk7XG4gIH1cblxuICAvLyBXZSB3aWxsIGZvcmNlIGEgcmUtcmVuZGVyIGFmdGVyIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlLXN5bmMgdGhlIHRvZ2dsZVxuICAvLyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXQgb2Ygc3luYyBpZiBvdXIgc2VydmljZSBjYWxsIGRpZCBub3RcbiAgLy8gcmVzdWx0IGluIHRoZSBlbnRpdHkgdG8gYmUgdHVybmVkIG9uLiBTaW5jZSB0aGUgc3RhdGUgaXMgbm90IGNoYW5naW5nLFxuICAvLyB0aGUgcmVzeW5jIGlzIG5vdCBjYWxsZWQgYXV0b21hdGljLlxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZSh0dXJuT24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3J3YXJkSGFwdGljKFwibGlnaHRcIik7XG4gICAgY29uc3Qgc3RhdGVEb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4odGhpcy5zdGF0ZU9iaik7XG4gICAgbGV0IHNlcnZpY2VEb21haW47XG4gICAgbGV0IHNlcnZpY2U7XG5cbiAgICBpZiAoc3RhdGVEb21haW4gPT09IFwibG9ja1wiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJsb2NrXCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ1bmxvY2tcIiA6IFwibG9ja1wiO1xuICAgIH0gZWxzZSBpZiAoc3RhdGVEb21haW4gPT09IFwiY292ZXJcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwiY292ZXJcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcIm9wZW5fY292ZXJcIiA6IFwiY2xvc2VfY292ZXJcIjtcbiAgICB9IGVsc2UgaWYgKHN0YXRlRG9tYWluID09PSBcImdyb3VwXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImhvbWVhc3Npc3RhbnRcIjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInR1cm5fb25cIiA6IFwidHVybl9vZmZcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VydmljZURvbWFpbiA9IHN0YXRlRG9tYWluO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidHVybl9vblwiIDogXCJ0dXJuX29mZlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICAvLyBPcHRpbWlzdGljIHVwZGF0ZS5cbiAgICB0aGlzLl9pc09uID0gdHVybk9uO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKHNlcnZpY2VEb21haW4sIHNlcnZpY2UsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgIC8vIElmIGFmdGVyIDIgc2Vjb25kcyB3ZSBoYXZlIG5vdCByZWNlaXZlZCBhIHN0YXRlIHVwZGF0ZVxuICAgICAgLy8gcmVzZXQgdGhlIHN3aXRjaCB0byBpdCdzIG9yaWdpbmFsIHN0YXRlLlxuICAgICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IGN1cnJlbnRTdGF0ZSkge1xuICAgICAgICB0aGlzLl9pc09uID0gaXNPbih0aGlzLnN0YXRlT2JqKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgIC0tcGFwZXItaWNvbi1idXR0b24taW5hY3RpdmUtY29sb3IsXG4gICAgICAgICAgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKVxuICAgICAgICApO1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1idXR0b25bc3RhdGUtYWN0aXZlXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pY29uLWJ1dHRvbi1hY3RpdmUtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIGhhLXN3aXRjaCB7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggNXB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZW50aXR5LXRvZ2dsZVwiLCBIYUVudGl0eVRvZ2dsZSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBDTElNQVRFX1BSRVNFVF9OT05FIH0gZnJvbSBcIi4uL2RhdGEvY2xpbWF0ZVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhQ2xpbWF0ZVN0YXRlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXJyZW50IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51bml0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXRcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19oYXNLbm93blN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPlxuICAgICAgICAgICAgW1tfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmopXV1cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfcmVuZGVyUHJlc2V0KHN0YXRlT2JqLmF0dHJpYnV0ZXMpXV1cIj5cbiAgICAgICAgICAgICAgLSBbW19sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZSldXVxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2N1cnJlbnRTdGF0dXNdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQuY2xpbWF0ZS5jdXJyZW50bHknKV1dOlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bml0XCI+W1tjdXJyZW50U3RhdHVzXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjdXJyZW50U3RhdHVzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUN1cnJlbnRTdGF0dXMoaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ3VycmVudFN0YXR1cyhoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmICghaGFzcyB8fCAhc3RhdGVPYmopIHJldHVybiBudWxsO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF90ZW1wZXJhdHVyZX0gJHtcbiAgICAgICAgaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVcbiAgICAgIH1gO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X2h1bWlkaXR5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfaHVtaWRpdHl9ICVgO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVUYXJnZXQoaGFzcywgc3RhdGVPYmopIHtcbiAgICBpZiAoIWhhc3MgfHwgIXN0YXRlT2JqKSByZXR1cm4gbnVsbDtcbiAgICAvLyBXZSdyZSB1c2luZyBcIiE9IG51bGxcIiBvbiBwdXJwb3NlIHNvIHRoYXQgd2UgbWF0Y2ggYm90aCBudWxsIGFuZCB1bmRlZmluZWQuXG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cgIT0gbnVsbCAmJlxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd30tJHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICB9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7XG4gICAgICAgIGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlXG4gICAgICB9YDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2ggIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2xvd30tJHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfaHVtaWRpdHlfaGlnaFxuICAgICAgfSVgO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfaGFzS25vd25TdGF0ZShzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZSAhPT0gXCJ1bmtub3duXCI7XG4gIH1cblxuICBfbG9jYWxpemVTdGF0ZShsb2NhbGl6ZSwgc3RhdGVPYmopIHtcbiAgICBjb25zdCBzdGF0ZVN0cmluZyA9IGxvY2FsaXplKGBzdGF0ZS5jbGltYXRlLiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb25cbiAgICAgID8gYCR7bG9jYWxpemUoXG4gICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5odmFjX2FjdGlvbi4ke1xuICAgICAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5odmFjX2FjdGlvblxuICAgICAgICAgIH1gXG4gICAgICAgICl9ICgke3N0YXRlU3RyaW5nfSlgXG4gICAgICA6IHN0YXRlU3RyaW5nO1xuICB9XG5cbiAgX2xvY2FsaXplUHJlc2V0KGxvY2FsaXplLCBwcmVzZXQpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5wcmVzZXRfbW9kZS4ke3ByZXNldH1gKSB8fCBwcmVzZXQ7XG4gIH1cblxuICBfcmVuZGVyUHJlc2V0KGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgYXR0cmlidXRlcy5wcmVzZXRfbW9kZSAmJiBhdHRyaWJ1dGVzLnByZXNldF9tb2RlICE9PSBDTElNQVRFX1BSRVNFVF9OT05FXG4gICAgKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2xpbWF0ZS1zdGF0ZVwiLCBIYUNsaW1hdGVTdGF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IENvdmVyRW50aXR5IGZyb20gXCIuLi91dGlsL2NvdmVyLW1vZGVsXCI7XG5cbmNsYXNzIEhhQ292ZXJDb250cm9scyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInN0YXRlXCI+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIGNvdmVyXCJcbiAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvbk9wZW5UYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNPcGVuXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlN0b3AgdGhlIGNvdmVyIGZyb20gbW92aW5nXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpzdG9wXCJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uU3RvcFRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BdXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgY292ZXJcIlxuICAgICAgICAgIGljb249XCJoYXNzOmFycm93LWRvd25cIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRhcFwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c0Nsb3NlXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiAoZW50aXR5T2JqLmlzRnVsbHlPcGVuIHx8IGVudGl0eU9iai5pc09wZW5pbmcpICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIChlbnRpdHlPYmouaXNGdWxseUNsb3NlZCB8fCBlbnRpdHlPYmouaXNDbG9zaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgb25PcGVuVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyKCk7XG4gIH1cblxuICBvbkNsb3NlVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouY2xvc2VDb3ZlcigpO1xuICB9XG5cbiAgb25TdG9wVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouc3RvcENvdmVyKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY292ZXItY29udHJvbHNcIiwgSGFDb3ZlckNvbnRyb2xzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IENvdmVyRW50aXR5IGZyb20gXCIuLi91dGlsL2NvdmVyLW1vZGVsXCI7XG5cbmNsYXNzIEhhQ292ZXJUaWx0Q29udHJvbHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBjb3ZlciB0aWx0XCJcbiAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctdG9wLXJpZ2h0XCJcbiAgICAgICAgb24tY2xpY2s9XCJvbk9wZW5UaWx0VGFwXCJcbiAgICAgICAgdGl0bGU9XCJPcGVuIHRpbHRcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzT3BlblRpbHRdXVwiXG4gICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN0b3AgY292ZXIgZnJvbSBtb3ZpbmdcIlxuICAgICAgICBpY29uPVwiaGFzczpzdG9wXCJcbiAgICAgICAgb24tY2xpY2s9XCJvblN0b3BUaWx0VGFwXCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1N0b3BUaWx0XV1cIlxuICAgICAgICB0aXRsZT1cIlN0b3AgdGlsdFwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2UgY292ZXIgdGlsdFwiXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LWJvdHRvbS1sZWZ0XCJcbiAgICAgICAgb24tY2xpY2s9XCJvbkNsb3NlVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiQ2xvc2UgdGlsdFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNDbG9zZVRpbHRdXVwiXG4gICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaildXVwiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgZW50aXR5T2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVPcGVuRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIGVudGl0eU9iai5pc0Z1bGx5T3BlblRpbHQgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIGNvbXB1dGVDbG9zZWREaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gZW50aXR5T2JqLmlzRnVsbHlDbG9zZWRUaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBvbk9wZW5UaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmoub3BlbkNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25DbG9zZVRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5jbG9zZUNvdmVyVGlsdCgpO1xuICB9XG5cbiAgb25TdG9wVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlclRpbHQoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb3Zlci10aWx0LWNvbnRyb2xzXCIsIEhhQ292ZXJUaWx0Q29udHJvbHMpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBVcGRhdGluZ0VsZW1lbnQsIHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXdlYnBhY2stbG9hZGVyLXN5bnRheFxuLy8gQHRzLWlnbm9yZVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBsaWNpdC1kZXBlbmRlbmNpZXNcbmltcG9ydCBtYXJrZG93bldvcmtlciBmcm9tIFwid29ya2VyaXplLWxvYWRlciEuLi9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmxldCB3b3JrZXI6IGFueSB8IHVuZGVmaW5lZDtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1tYXJrZG93blwiKVxuY2xhc3MgSGFNYXJrZG93biBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb250ZW50ID0gXCJcIjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYWxsb3dTdmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF3b3JrZXIpIHtcbiAgICAgIHdvcmtlciA9IG1hcmtkb3duV29ya2VyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXIoKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBhd2FpdCB3b3JrZXIucmVuZGVyTWFya2Rvd24oXG4gICAgICB0aGlzLmNvbnRlbnQsXG4gICAgICB7XG4gICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGxvd1N2ZzogdGhpcy5hbGxvd1N2ZyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5fcmVzaXplKCk7XG5cbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgdGhpcyxcbiAgICAgIDEgLyogU0hPV19FTEVNRU5UICovLFxuICAgICAgbnVsbCxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgLy8gT3BlbiBleHRlcm5hbCBsaW5rcyBpbiBhIG5ldyB3aW5kb3dcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgIG5vZGUuaG9zdCAhPT0gZG9jdW1lbnQubG9jYXRpb24uaG9zdFxuICAgICAgKSB7XG4gICAgICAgIG5vZGUudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgICAgICAvLyBwcm90ZWN0IHJlZmVycmVyIG9uIGV4dGVybmFsIGxpbmtzIGFuZCBkZW55IHdpbmRvdy5vcGVuZXIgYWNjZXNzIGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAgIC8vIChzZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmdpdGh1Yi5pby9yZWwtbm9vcGVuZXIvKVxuICAgICAgICBub2RlLnJlbCA9IFwibm9yZWZlcnJlciBub29wZW5lclwiO1xuXG4gICAgICAgIC8vIEZpcmUgYSByZXNpemUgZXZlbnQgd2hlbiBpbWFnZXMgbG9hZGVkIHRvIG5vdGlmeSBjb250ZW50IHJlc2l6ZWRcbiAgICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzaXplID0gKCkgPT4gZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1tYXJrZG93blwiOiBIYU1hcmtkb3duO1xuICB9XG59XG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgcmVsYXRpdmVUaW1lIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFSZWxhdGl2ZVRpbWUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZGF0ZXRpbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRhdGV0aW1lT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWREYXRlVGltZTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUgPSB0aGlzLnVwZGF0ZVJlbGF0aXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIHVwZGF0ZSBldmVyeSA2MCBzZWNvbmRzXG4gICAgdGhpcy51cGRhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudXBkYXRlUmVsYXRpdmUsIDYwMDAwKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnVwZGF0ZUludGVydmFsKTtcbiAgfVxuXG4gIGRhdGV0aW1lQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsID8gbmV3IERhdGUobmV3VmFsKSA6IG51bGw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICBkYXRldGltZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIHVwZGF0ZVJlbGF0aXZlKCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb20odGhpcyk7XG4gICAgaWYgKCF0aGlzLnBhcnNlZERhdGVUaW1lKSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHRoaXMubG9jYWxpemUoXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUubmV2ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gcmVsYXRpdmVUaW1lKHRoaXMucGFyc2VkRGF0ZVRpbWUsIHRoaXMubG9jYWxpemUpO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1yZWxhdGl2ZS10aW1lXCIsIEhhUmVsYXRpdmVUaW1lKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlclwiO1xuXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xubGV0IHN1YlRlbXBsYXRlO1xuXG5jbGFzcyBIYVNsaWRlciBleHRlbmRzIFBhcGVyU2xpZGVyQ2xhc3Mge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGlmICghc3ViVGVtcGxhdGUpIHtcbiAgICAgIHN1YlRlbXBsYXRlID0gUGFwZXJTbGlkZXJDbGFzcy50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIGNvbnN0IHN1cGVyU3R5bGUgPSBzdWJUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKTtcblxuICAgICAgLy8gYXBwZW5kIHN0eWxlIHRvIGFkZCBtaXJyb3Jpbmcgb2YgcGluIGluIFJUTFxuICAgICAgc3VwZXJTdHlsZS5hcHBlbmRDaGlsZChcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYFxuICAgICAgICAgIDpob3N0KFtkaXI9XCJydGxcIl0pICNzbGlkZXJDb250YWluZXIucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBzdWJUZW1wbGF0ZTtcbiAgfVxuXG4gIF9jYWxjU3RlcCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5zdGVwKSB7XG4gICAgICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbnVtU3RlcHMgPSBNYXRoLnJvdW5kKCh2YWx1ZSAtIHRoaXMubWluKSAvIHRoaXMuc3RlcCk7XG4gICAgY29uc3Qgc3RlcFN0ciA9IHRoaXMuc3RlcC50b1N0cmluZygpO1xuICAgIGNvbnN0IHN0ZXBQb2ludEF0ID0gc3RlcFN0ci5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoc3RlcFBvaW50QXQgIT09IC0xKSB7XG4gICAgICAvKipcbiAgICAgICAqIEZvciBzbWFsbCB2YWx1ZXMgb2YgdGhpcy5zdGVwLCBpZiB3ZSBjYWxjdWxhdGUgdGhlIHN0ZXAgdXNpbmdcbiAgICAgICAqIEZvciBub24taW50ZWdlciB2YWx1ZXMgb2YgdGhpcy5zdGVwLCBpZiB3ZSBjYWxjdWxhdGUgdGhlIHN0ZXAgdXNpbmdcbiAgICAgICAqIGBNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwYCB3ZSBtYXkgaGl0IGEgcHJlY2lzaW9uIHBvaW50IGlzc3VlXG4gICAgICAgKiBlZy4gMC4xICogMC4yID0gIDAuMDIwMDAwMDAwMDAwMDAwMDA0XG4gICAgICAgKiBodHRwOi8vZG9jcy5vcmFjbGUuY29tL2NkL0UxOTk1Ny0wMS84MDYtMzU2OC9uY2dfZ29sZGJlcmcuaHRtbFxuICAgICAgICpcbiAgICAgICAqIGFzIGEgd29yayBhcm91bmQgd2UgY2FuIHJvdW5kIHdpdGggdGhlIGRlY2ltYWwgcHJlY2lzaW9uIG9mIGBzdGVwYFxuICAgICAgICovXG4gICAgICBjb25zdCBwcmVjaXNpb24gPSAxMCAqKiAoc3RlcFN0ci5sZW5ndGggLSBzdGVwUG9pbnRBdCAtIDEpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgTWF0aC5yb3VuZCgobnVtU3RlcHMgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbikgKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBudW1TdGVwcyAqIHRoaXMuc3RlcCArIHRoaXMubWluO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zbGlkZXJcIiwgSGFTbGlkZXIpO1xuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IsIGN1c3RvbUVsZW1lbnQsIENTU1Jlc3VsdCwgY3NzLCBxdWVyeSB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1zd2l0Y2hcIjtcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoL213Yy1zd2l0Y2gtY3NzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNd2NTd2l0Y2ggPSBjdXN0b21FbGVtZW50cy5nZXQoXCJtd2Mtc3dpdGNoXCIpIGFzIENvbnN0cnVjdG9yPFN3aXRjaD47XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtc3dpdGNoXCIpXG5leHBvcnQgY2xhc3MgSGFTd2l0Y2ggZXh0ZW5kcyBNd2NTd2l0Y2gge1xuICBAcXVlcnkoXCJzbG90XCIpIHByaXZhdGUgX3Nsb3QhOiBIVE1MU2xvdEVsZW1lbnQ7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KFwiLS1tZGMtdGhlbWUtc2Vjb25kYXJ5XCIsIFwidmFyKC0tcHJpbWFyeS1jb2xvcilcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJzbG90dGVkXCIsXG4gICAgICBCb29sZWFuKHRoaXMuX3Nsb3QuYXNzaWduZWROb2RlcygpLmxlbmd0aClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190aHVtYiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJ1dHRvbi1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLm1kYy1zd2l0Y2g6bm90KC5tZGMtc3dpdGNoLS1jaGVja2VkKSAubWRjLXN3aXRjaF9fdHJhY2sge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1iYXItY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5zbG90dGVkKSAubWRjLXN3aXRjaCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN3aXRjaFwiOiBIYVN3aXRjaDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWRlbnRpYWwge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmVkUGF0aCB7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGhhc3NVcmwgPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2lnbmVkUGF0aCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNpZ25lZFBhdGg+ID0+IGhhc3MuY2FsbFdTKHsgdHlwZTogXCJhdXRoL3NpZ25fcGF0aFwiLCBwYXRoIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoUHJvdmlkZXJzID0gKCkgPT5cbiAgZmV0Y2goXCIvYXV0aC9wcm92aWRlcnNcIiwge1xuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgQ2FtZXJhRW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0aW1lQ2FjaGVQcm9taXNlRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2VcIjtcbmltcG9ydCB7IGdldFNpZ25lZFBhdGggfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBDQU1FUkFfU1VQUE9SVF9PTl9PRkYgPSAxO1xuZXhwb3J0IGNvbnN0IENBTUVSQV9TVVBQT1JUX1NUUkVBTSA9IDI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUHJlZmVyZW5jZXMge1xuICBwcmVsb2FkX3N0cmVhbTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFUaHVtYm5haWwge1xuICBjb250ZW50X3R5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZU1KUEVHU3RyZWFtVXJsID0gKGVudGl0eTogQ2FtZXJhRW50aXR5KSA9PlxuICBgL2FwaS9jYW1lcmFfcHJveHlfc3RyZWFtLyR7ZW50aXR5LmVudGl0eV9pZH0/dG9rZW49JHtcbiAgICBlbnRpdHkuYXR0cmlidXRlcy5hY2Nlc3NfdG9rZW5cbiAgfWA7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PlxuICB0aW1lQ2FjaGVQcm9taXNlRnVuYyhcbiAgICBcIl9jYW1lcmFUbWJVcmxcIixcbiAgICA5MDAwLFxuICAgIGZldGNoVGh1bWJuYWlsVXJsLFxuICAgIGhhc3MsXG4gICAgZW50aXR5SWRcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsVXJsID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgcGF0aCA9IGF3YWl0IGdldFNpZ25lZFBhdGgoaGFzcywgYC9hcGkvY2FtZXJhX3Byb3h5LyR7ZW50aXR5SWR9YCk7XG4gIHJldHVybiBoYXNzLmhhc3NVcmwocGF0aC5wYXRoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkLlwiKTtcbiAgcmV0dXJuIGhhc3MuY2FsbFdTPENhbWVyYVRodW1ibmFpbD4oe1xuICAgIHR5cGU6IFwiY2FtZXJhX3RodW1ibmFpbFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU3RyZWFtVXJsID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBmb3JtYXQ/OiBcImhsc1wiXG4pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0eXBlOiBcImNhbWVyYS9zdHJlYW1cIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9O1xuICBpZiAoZm9ybWF0KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGRhdGEuZm9ybWF0ID0gZm9ybWF0O1xuICB9XG4gIGNvbnN0IHN0cmVhbSA9IGF3YWl0IGhhc3MuY2FsbFdTPFN0cmVhbT4oZGF0YSk7XG4gIHN0cmVhbS51cmwgPSBoYXNzLmhhc3NVcmwoc3RyZWFtLnVybCk7XG4gIHJldHVybiBzdHJlYW07XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYW1lcmFQcmVmcyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxDYW1lcmFQcmVmZXJlbmNlcz4oe1xuICAgIHR5cGU6IFwiY2FtZXJhL2dldF9wcmVmc1wiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FtZXJhUHJlZnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHByZWZzOiB7XG4gICAgcHJlbG9hZF9zdHJlYW0/OiBib29sZWFuO1xuICB9XG4pID0+XG4gIGhhc3MuY2FsbFdTPENhbWVyYVByZWZlcmVuY2VzPih7XG4gICAgdHlwZTogXCJjYW1lcmEvdXBkYXRlX3ByZWZzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi5wcmVmcyxcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IHR5cGUgSHZhY01vZGUgPVxuICB8IFwib2ZmXCJcbiAgfCBcImhlYXRcIlxuICB8IFwiY29vbFwiXG4gIHwgXCJoZWF0X2Nvb2xcIlxuICB8IFwiYXV0b1wiXG4gIHwgXCJkcnlcIlxuICB8IFwiZmFuX29ubHlcIjtcblxuZXhwb3J0IGNvbnN0IENMSU1BVEVfUFJFU0VUX05PTkUgPSBcIm5vbmVcIjtcblxuZXhwb3J0IHR5cGUgSHZhY0FjdGlvbiA9IFwib2ZmXCIgfCBcImhlYXRpbmdcIiB8IFwiY29vbGluZ1wiIHwgXCJkcnlpbmdcIiB8IFwiaWRsZVwiO1xuXG5leHBvcnQgdHlwZSBDbGltYXRlRW50aXR5ID0gSGFzc0VudGl0eUJhc2UgJiB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGh2YWNfbW9kZTogSHZhY01vZGU7XG4gICAgaHZhY19tb2RlczogSHZhY01vZGVbXTtcbiAgICBodmFjX2FjdGlvbj86IEh2YWNBY3Rpb247XG4gICAgY3VycmVudF90ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIG1pbl90ZW1wOiBudW1iZXI7XG4gICAgbWF4X3RlbXA6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX3N0ZXA/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfaGlnaD86IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9sb3c/OiBudW1iZXI7XG4gICAgaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgY3VycmVudF9odW1pZGl0eT86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfbG93PzogbnVtYmVyO1xuICAgIHRhcmdldF9odW1pZGl0eV9oaWdoPzogbnVtYmVyO1xuICAgIG1pbl9odW1pZGl0eT86IG51bWJlcjtcbiAgICBtYXhfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgZmFuX21vZGU/OiBzdHJpbmc7XG4gICAgZmFuX21vZGVzPzogc3RyaW5nW107XG4gICAgcHJlc2V0X21vZGU/OiBzdHJpbmc7XG4gICAgcHJlc2V0X21vZGVzPzogc3RyaW5nW107XG4gICAgc3dpbmdfbW9kZT86IHN0cmluZztcbiAgICBzd2luZ19tb2Rlcz86IHN0cmluZ1tdO1xuICAgIGF1eF9oZWF0PzogXCJvblwiIHwgXCJvZmZcIjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFID0gMTtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFID0gMjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZID0gNDtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUgPSA4O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFID0gMzI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUID0gNjQ7XG5cbmNvbnN0IGh2YWNNb2RlT3JkZXJpbmc6IHsgW2tleSBpbiBIdmFjTW9kZV06IG51bWJlciB9ID0ge1xuICBhdXRvOiAxLFxuICBoZWF0X2Nvb2w6IDIsXG4gIGhlYXQ6IDMsXG4gIGNvb2w6IDQsXG4gIGRyeTogNSxcbiAgZmFuX29ubHk6IDYsXG4gIG9mZjogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wYXJlQ2xpbWF0ZUh2YWNNb2RlcyA9IChtb2RlMTogSHZhY01vZGUsIG1vZGUyOiBIdmFjTW9kZSkgPT5cbiAgaHZhY01vZGVPcmRlcmluZ1ttb2RlMV0gLSBodmFjTW9kZU9yZGVyaW5nW21vZGUyXTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNldElucHV0U2VsZWN0T3B0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHk6IHN0cmluZyxcbiAgb3B0aW9uOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsU2VydmljZShcImlucHV0X3NlbGVjdFwiLCBcInNlbGVjdF9vcHRpb25cIiwge1xuICAgIG9wdGlvbixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgfSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuLyogZXNsaW50LWVuYWJsZSBuby1iaXR3aXNlICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3ZlckVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdGhpcy5oYXNzID0gaGFzcztcbiAgICB0aGlzLnN0YXRlT2JqID0gc3RhdGVPYmo7XG4gICAgdGhpcy5fYXR0ciA9IHN0YXRlT2JqLmF0dHJpYnV0ZXM7XG4gICAgdGhpcy5fZmVhdCA9IHRoaXMuX2F0dHIuc3VwcG9ydGVkX2ZlYXR1cmVzO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlPcGVuKCkge1xuICAgIGlmICh0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiA9PT0gMTAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvcGVuXCI7XG4gIH1cblxuICBnZXQgaXNGdWxseUNsb3NlZCgpIHtcbiAgICBpZiAodGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gPT09IDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImNsb3NlZFwiO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlPcGVuVGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3RpbHRfcG9zaXRpb24gPT09IDEwMDtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5Q2xvc2VkVGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3RpbHRfcG9zaXRpb24gPT09IDA7XG4gIH1cblxuICBnZXQgaXNPcGVuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcIm9wZW5pbmdcIjtcbiAgfVxuXG4gIGdldCBpc0Nsb3NpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiY2xvc2luZ1wiO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzT3BlbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzQ2xvc2UoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTdG9wKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNPcGVuVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDE2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0Nsb3NlVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDMyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1N0b3BUaWx0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTI4KTtcbiAgfVxuXG4gIGdldCBpc1RpbHRPbmx5KCkge1xuICAgIGNvbnN0IHN1cHBvcnRzQ292ZXIgPVxuICAgICAgdGhpcy5zdXBwb3J0c09wZW4gfHwgdGhpcy5zdXBwb3J0c0Nsb3NlIHx8IHRoaXMuc3VwcG9ydHNTdG9wO1xuICAgIGNvbnN0IHN1cHBvcnRzVGlsdCA9XG4gICAgICB0aGlzLnN1cHBvcnRzT3BlblRpbHQgfHwgdGhpcy5zdXBwb3J0c0Nsb3NlVGlsdCB8fCB0aGlzLnN1cHBvcnRzU3RvcFRpbHQ7XG4gICAgcmV0dXJuIHN1cHBvcnRzVGlsdCAmJiAhc3VwcG9ydHNDb3ZlcjtcbiAgfVxuXG4gIG9wZW5Db3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwib3Blbl9jb3ZlclwiKTtcbiAgfVxuXG4gIGNsb3NlQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcImNsb3NlX2NvdmVyXCIpO1xuICB9XG5cbiAgc3RvcENvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzdG9wX2NvdmVyXCIpO1xuICB9XG5cbiAgb3BlbkNvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwib3Blbl9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgY2xvc2VDb3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcImNsb3NlX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBzdG9wQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzdG9wX2NvdmVyX3RpbHRcIik7XG4gIH1cblxuICBzZXRDb3ZlclBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNldF9jb3Zlcl9wb3NpdGlvblwiLCB7IHBvc2l0aW9uIH0pO1xuICB9XG5cbiAgc2V0Q292ZXJUaWx0UG9zaXRpb24odGlsdFBvc2l0aW9uKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNldF9jb3Zlcl90aWx0X3Bvc2l0aW9uXCIsIHtcbiAgICAgIHRpbHRfcG9zaXRpb246IHRpbHRQb3NpdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RcblxuICBjYWxsU2VydmljZShzZXJ2aWNlLCBkYXRhID0ge30pIHtcbiAgICBkYXRhLmVudGl0eV9pZCA9IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImNvdmVyXCIsIHNlcnZpY2UsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c09wZW4gPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMSk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c0Nsb3NlID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDIpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTZXRQb3NpdGlvbiA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA0KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU3RvcCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzT3BlblRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTYpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNDbG9zZVRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTdG9wVGlsdCA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA2NCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1NldFRpbHRQb3NpdGlvbiA9IChzdGF0ZU9iaikgPT5cbiAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNUaWx0T25seShzdGF0ZU9iaikge1xuICBjb25zdCBzdXBwb3J0c0NvdmVyID1cbiAgICBzdXBwb3J0c09wZW4oc3RhdGVPYmopIHx8IHN1cHBvcnRzQ2xvc2Uoc3RhdGVPYmopIHx8IHN1cHBvcnRzU3RvcChzdGF0ZU9iaik7XG4gIGNvbnN0IHN1cHBvcnRzVGlsdCA9XG4gICAgc3VwcG9ydHNPcGVuVGlsdChzdGF0ZU9iaikgfHxcbiAgICBzdXBwb3J0c0Nsb3NlVGlsdChzdGF0ZU9iaikgfHxcbiAgICBzdXBwb3J0c1N0b3BUaWx0KHN0YXRlT2JqKTtcbiAgcmV0dXJuIHN1cHBvcnRzVGlsdCAmJiAhc3VwcG9ydHNDb3Zlcjtcbn1cbiIsImltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFQbGF5ZXJFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5zdGF0ZU9iaiA9IHN0YXRlT2JqO1xuICAgIHRoaXMuX2F0dHIgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2ZlYXQgPSB0aGlzLl9hdHRyLnN1cHBvcnRlZF9mZWF0dXJlcztcbiAgfVxuXG4gIGdldCBpc09mZigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvZmZcIjtcbiAgfVxuXG4gIGdldCBpc0lkbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiaWRsZVwiO1xuICB9XG5cbiAgZ2V0IGlzTXV0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuaXNfdm9sdW1lX211dGVkO1xuICB9XG5cbiAgZ2V0IGlzUGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcInBhdXNlZFwiO1xuICB9XG5cbiAgZ2V0IGlzUGxheWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwbGF5aW5nXCI7XG4gIH1cblxuICBnZXQgaXNNdXNpYygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9jb250ZW50X3R5cGUgPT09IFwibXVzaWNcIjtcbiAgfVxuXG4gIGdldCBpc1RWU2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5tZWRpYV9jb250ZW50X3R5cGUgPT09IFwidHZzaG93XCI7XG4gIH1cblxuICBnZXQgaGFzTWVkaWFDb250cm9sKCkge1xuICAgIHJldHVybiAoXG4gICAgICBbXCJwbGF5aW5nXCIsIFwicGF1c2VkXCIsIFwidW5rbm93blwiLCBcIm9uXCJdLmluZGV4T2YodGhpcy5zdGF0ZU9iai5zdGF0ZSkgIT09IC0xXG4gICAgKTtcbiAgfVxuXG4gIGdldCB2b2x1bWVTbGlkZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci52b2x1bWVfbGV2ZWwgKiAxMDA7XG4gIH1cblxuICBnZXQgc2hvd1Byb2dyZXNzKCkge1xuICAgIHJldHVybiAoXG4gICAgICAodGhpcy5pc1BsYXlpbmcgfHwgdGhpcy5pc1BhdXNlZCkgJiZcbiAgICAgIFwibWVkaWFfZHVyYXRpb25cIiBpbiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgIFwibWVkaWFfcG9zaXRpb25cIiBpbiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMgJiZcbiAgICAgIFwibWVkaWFfcG9zaXRpb25fdXBkYXRlZF9hdFwiIGluIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlc1xuICAgICk7XG4gIH1cblxuICBnZXQgY3VycmVudFByb2dyZXNzKCkge1xuICAgIHZhciBwcm9ncmVzcyA9IHRoaXMuX2F0dHIubWVkaWFfcG9zaXRpb247XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICBwcm9ncmVzcyArPVxuICAgICAgICAoRGF0ZS5ub3coKSAtXG4gICAgICAgICAgbmV3IERhdGUodGhpcy5fYXR0ci5tZWRpYV9wb3NpdGlvbl91cGRhdGVkX2F0KS5nZXRUaW1lKCkpIC9cbiAgICAgICAgMTAwMC4wO1xuICAgIH1cbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQYXVzZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lU2V0KCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVNdXRlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNQcmV2aW91c1RyYWNrKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzTmV4dFRyYWNrKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVHVybk9uKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTI4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1R1cm5PZmYoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAyNTYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUGxheU1lZGlhKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNTEyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZUJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NlbGVjdFNvdXJjZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDIwNDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU2VsZWN0U291bmRNb2RlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgNjU1MzYpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUGxheSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDE2Mzg0KTtcbiAgfVxuXG4gIGdldCBwcmltYXJ5VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfdGl0bGU7XG4gIH1cblxuICBnZXQgc2Vjb25kYXJ5VGl0bGUoKSB7XG4gICAgaWYgKHRoaXMuaXNNdXNpYykge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfYXJ0aXN0O1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1RWU2hvdykge1xuICAgICAgdmFyIHRleHQgPSB0aGlzLl9hdHRyLm1lZGlhX3Nlcmllc190aXRsZTtcblxuICAgICAgaWYgKHRoaXMuX2F0dHIubWVkaWFfc2Vhc29uKSB7XG4gICAgICAgIHRleHQgKz0gXCIgU1wiICsgdGhpcy5fYXR0ci5tZWRpYV9zZWFzb247XG5cbiAgICAgICAgaWYgKHRoaXMuX2F0dHIubWVkaWFfZXBpc29kZSkge1xuICAgICAgICAgIHRleHQgKz0gXCJFXCIgKyB0aGlzLl9hdHRyLm1lZGlhX2VwaXNvZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9hdHRyLmFwcF9uYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5hcHBfbmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBnZXQgc291cmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdXJjZTtcbiAgfVxuXG4gIGdldCBzb3VyY2VMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdXJjZV9saXN0O1xuICB9XG5cbiAgZ2V0IHNvdW5kTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VuZF9tb2RlO1xuICB9XG5cbiAgZ2V0IHNvdW5kTW9kZUxpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291bmRfbW9kZV9saXN0O1xuICB9XG5cbiAgbWVkaWFQbGF5UGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3BsYXlfcGF1c2VcIik7XG4gIH1cblxuICBuZXh0VHJhY2soKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX25leHRfdHJhY2tcIik7XG4gIH1cblxuICBwbGF5YmFja0NvbnRyb2woKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm1lZGlhX3BsYXlfcGF1c2VcIik7XG4gIH1cblxuICBwcmV2aW91c1RyYWNrKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9wcmV2aW91c190cmFja1wiKTtcbiAgfVxuXG4gIHNldFZvbHVtZSh2b2x1bWUpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX3NldFwiLCB7IHZvbHVtZV9sZXZlbDogdm9sdW1lIH0pO1xuICB9XG5cbiAgdG9nZ2xlUG93ZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNPZmYpIHtcbiAgICAgIHRoaXMudHVybk9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHVybk9mZigpO1xuICAgIH1cbiAgfVxuXG4gIHR1cm5PZmYoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInR1cm5fb2ZmXCIpO1xuICB9XG5cbiAgdHVybk9uKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ0dXJuX29uXCIpO1xuICB9XG5cbiAgdm9sdW1lRG93bigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX2Rvd25cIik7XG4gIH1cblxuICB2b2x1bWVNdXRlKG11dGUpIHtcbiAgICBpZiAoIXRoaXMuc3VwcG9ydHNWb2x1bWVNdXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXRpbmcgdm9sdW1lIG5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfbXV0ZVwiLCB7IGlzX3ZvbHVtZV9tdXRlZDogbXV0ZSB9KTtcbiAgfVxuXG4gIHZvbHVtZVVwKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ2b2x1bWVfdXBcIik7XG4gIH1cblxuICBzZWxlY3RTb3VyY2Uoc291cmNlKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNlbGVjdF9zb3VyY2VcIiwgeyBzb3VyY2UgfSk7XG4gIH1cblxuICBzZWxlY3RTb3VuZE1vZGUoc291bmRNb2RlKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInNlbGVjdF9zb3VuZF9tb2RlXCIsIHsgc291bmRfbW9kZTogc291bmRNb2RlIH0pO1xuICB9XG5cbiAgLy8gaGVscGVyIG1ldGhvZFxuXG4gIGNhbGxTZXJ2aWNlKHNlcnZpY2UsIGRhdGEgPSB7fSkge1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcGxheWVyXCIsIHNlcnZpY2UsIGRhdGEpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFZQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBO0FBRUE7QUFDQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQTtBQUFBOztBQUlBO0FBa0lBO0FBaElBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFuSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBb0lBOzs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBRUE7QUFHQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTs7QUFDQTtBQUNBO0FBdURBO0FBQ0E7QUF0REE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUF6REE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBZUE7QUFLQTtBQVlBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwSkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9