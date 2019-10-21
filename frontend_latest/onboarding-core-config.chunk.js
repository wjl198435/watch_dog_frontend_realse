(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-core-config"],{

/***/ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js ***!
  \****************************************************************************/
/*! exports provided: PaperInkyFocusBehaviorImpl, PaperInkyFocusBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehaviorImpl", function() { return PaperInkyFocusBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehavior", function() { return PaperInkyFocusBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/







/**
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 *
 * @polymerBehavior PaperInkyFocusBehavior
 */
const PaperInkyFocusBehaviorImpl = {
  observers: ['_focusedChanged(receivedFocusFromKeyboard)'],

  _focusedChanged: function(receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }
    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },

  _createRipple: function() {
    var ripple = _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._createRipple();
    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};

/** @polymerBehavior */
const PaperInkyFocusBehavior = [
  _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"],
  _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"],
  _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"],
  PaperInkyFocusBehaviorImpl
];


/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js ***!
  \************************************************************************/
/*! exports provided: PaperRippleBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperRippleBehavior", function() { return PaperRippleBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */
const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {type: Boolean, observer: '_noinkChanged'},

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object,
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function() {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function(event) {
    _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonStateImpl"]._downHandler.call(this, event);
    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function(optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;
      if (rippleContainer) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(rippleContainer).appendChild(this._ripple);
      }
      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this._rippleContainer || this);
        var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(optTriggeringEvent).rootTarget;
        if (domContainer.deepContains(/** @type {Node} */ (target))) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function() {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function() {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function() {
    var element = /** @type {!PaperRippleElement} */ (
        document.createElement('paper-ripple'));
    return element;
  },

  _noinkChanged: function(noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};


/***/ }),

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
const setupLeafletMap = async (mapElement, darkMode = false) => {
    if (!mapElement.parentNode) {
        throw new Error("Cannot setup Leaflet map on disconnected element");
    }
    // tslint:disable-next-line
    const Leaflet = (await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7)));
    Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";
    const map = Leaflet.map(mapElement);
    const style = document.createElement("link");
    style.setAttribute("href", "/static/images/leaflet/leaflet.css");
    style.setAttribute("rel", "stylesheet");
    mapElement.parentNode.appendChild(style);
    map.setView([52.3731339, 4.8903147], 13);
    createTileLayer(Leaflet, darkMode).addTo(map);
    return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
    return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        minZoom: 0,
        maxZoom: 20,
    });
};


/***/ }),

/***/ "./src/components/map/ha-location-editor.ts":
/*!**************************************************!*\
  !*** ./src/components/map/ha-location-editor.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




let LocationEditor = class LocationEditor extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.fitZoom = 16;
    }
    fitMap() {
        if (!this._leafletMap || !this.location) {
            return;
        }
        this._leafletMap.setView(this.location, this.fitZoom);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div id="map"></div>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._initMap();
    }
    updated(changedProps) {
        super.updated(changedProps);
        // Still loading.
        if (!this.Leaflet) {
            return;
        }
        this._updateMarker();
        if (!this._ignoreFitToMap || this._ignoreFitToMap !== this.location) {
            this.fitMap();
        }
        this._ignoreFitToMap = undefined;
    }
    get _mapEl() {
        return this.shadowRoot.querySelector("div");
    }
    async _initMap() {
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_2__["setupLeafletMap"])(this._mapEl);
        this._leafletMap.addEventListener("click", 
        // @ts-ignore
        (ev) => this._updateLocation(ev.latlng));
        this._updateMarker();
        this.fitMap();
        this._leafletMap.invalidateSize();
    }
    _updateLocation(latlng) {
        let longitude = latlng.lng;
        if (Math.abs(longitude) > 180.0) {
            // Normalize longitude if map provides values beyond -180 to +180 degrees.
            longitude = (((longitude % 360.0) + 540.0) % 360.0) - 180.0;
        }
        this.location = this._ignoreFitToMap = [latlng.lat, longitude];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "change", undefined, { bubbles: false });
    }
    _updateMarker() {
        if (!this.location) {
            if (this._locationMarker) {
                this._locationMarker.remove();
                this._locationMarker = undefined;
            }
            return;
        }
        if (this._locationMarker) {
            this._locationMarker.setLatLng(this.location);
            return;
        }
        this._locationMarker = this.Leaflet.marker(this.location, {
            draggable: true,
        });
        this._locationMarker.addEventListener("dragend", 
        // @ts-ignore
        (ev) => this._updateLocation(ev.target.getLatLng()));
        this._leafletMap.addLayer(this._locationMarker);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], LocationEditor.prototype, "location", void 0);
LocationEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-location-editor")
], LocationEditor);


/***/ }),

/***/ "./src/components/timezone-datalist.ts":
/*!*********************************************!*\
  !*** ./src/components/timezone-datalist.ts ***!
  \*********************************************/
/*! exports provided: createTimezoneListEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimezoneListEl", function() { return createTimezoneListEl; });
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-timezones-json */ "./node_modules/google-timezones-json/index.js");
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_timezones_json__WEBPACK_IMPORTED_MODULE_0__);

const createTimezoneListEl = () => {
    const list = document.createElement("datalist");
    list.id = "timezones";
    Object.keys(google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a).forEach((key) => {
        const option = document.createElement("option");
        option.value = key;
        option.innerHTML = google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a[key];
        list.appendChild(option);
    });
    return list;
};


/***/ }),

/***/ "./src/data/core.ts":
/*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
/*! exports provided: saveCoreConfig, detectCoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCoreConfig", function() { return saveCoreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCoreConfig", function() { return detectCoreConfig; });
const saveCoreConfig = (hass, values) => hass.callWS(Object.assign({ type: "config/core/update" }, values));
const detectCoreConfig = (hass) => hass.callWS({
    type: "config/core/detect",
});


/***/ }),

/***/ "./src/onboarding/onboarding-core-config.ts":
/*!**************************************************!*\
  !*** ./src/onboarding/onboarding-core-config.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/core */ "./src/data/core.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_timezone_datalist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/timezone-datalist */ "./src/components/timezone-datalist.ts");
/* harmony import */ var _components_map_ha_location_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/map/ha-location-editor */ "./src/components/map/ha-location-editor.ts");











const amsterdam = [52.3731339, 4.8903147];
let OnboardingCoreConfig = class OnboardingCoreConfig extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._working = false;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro", "name", this.hass.user.name)}
      </p>

      <paper-input
        .label=${this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name")}
        name="name"
        .disabled=${this._working}
        .value=${this._nameValue}
        @value-changed=${this._handleChange}
      ></paper-input>

      <div class="middle-text">
        <p>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location")}
        </p>

        <div class="row">
          <div>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location_detect")}
          </div>
          <mwc-button @click=${this._detect}>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.button_detect")}
          </mwc-button>
        </div>
      </div>

      <div class="row">
        <ha-location-editor
          class="flex"
          .location=${this._locationValue}
          .fitZoom=${14}
          @change=${this._locationChanged}
        ></ha-location-editor>
      </div>

      <div class="row">
        <paper-input
          class="flex"
          .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone")}
          name="timeZone"
          list="timezones"
          .disabled=${this._working}
          .value=${this._timeZoneValue}
          @value-changed=${this._handleChange}
        ></paper-input>

        <paper-input
          class="flex"
          .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation")}
          name="elevation"
          type="number"
          .disabled=${this._working}
          .value=${this._elevationValue}
          @value-changed=${this._handleChange}
        >
          <span slot="suffix">
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation_meters")}
          </span>
        </paper-input>
      </div>

      <div class="row">
        <div class="flex">
          ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system")}
        </div>
        <paper-radio-group
          class="flex"
          .selected=${this._unitSystemValue}
          @selected-changed=${this._unitSystemChanged}
        >
          <paper-radio-button name="metric" .disabled=${this._working}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")}
            <div class="secondary">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example")}
            </div>
          </paper-radio-button>
          <paper-radio-button name="imperial" .disabled=${this._working}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial")}
            <div class="secondary">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.imperial_example")}
            </div>
          </paper-radio-button>
        </paper-radio-group>
      </div>

      <div class="footer">
        <mwc-button @click=${this._save} .disabled=${this._working}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")}
        </mwc-button>
      </div>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        setTimeout(() => this.shadowRoot.querySelector("paper-input").focus(), 100);
        this.addEventListener("keypress", (ev) => {
            if (ev.keyCode === 13) {
                this._save(ev);
            }
        });
        const input = this.shadowRoot.querySelector("[name=timeZone]");
        input.inputElement.appendChild(Object(_components_timezone_datalist__WEBPACK_IMPORTED_MODULE_9__["createTimezoneListEl"])());
    }
    get _nameValue() {
        return this._name !== undefined
            ? this._name
            : this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default");
    }
    get _locationValue() {
        return this._location || amsterdam;
    }
    get _elevationValue() {
        return this._elevation !== undefined ? this._elevation : 0;
    }
    get _timeZoneValue() {
        return this._timeZone;
    }
    get _unitSystemValue() {
        return this._unitSystem !== undefined ? this._unitSystem : "metric";
    }
    _handleChange(ev) {
        const target = ev.currentTarget;
        this[`_${target.name}`] = target.value;
    }
    _locationChanged(ev) {
        this._location = ev.currentTarget.location;
    }
    _unitSystemChanged(ev) {
        this._unitSystem = ev.detail.value;
    }
    async _detect() {
        this._working = true;
        try {
            const values = await Object(_data_core__WEBPACK_IMPORTED_MODULE_6__["detectCoreConfig"])(this.hass);
            if (values.latitude && values.longitude) {
                this._location = [Number(values.latitude), Number(values.longitude)];
            }
            if (values.elevation) {
                this._elevation = String(values.elevation);
            }
            if (values.unit_system) {
                this._unitSystem = values.unit_system;
            }
            if (values.time_zone) {
                this._timeZone = values.time_zone;
            }
        }
        catch (err) {
            alert(`Failed to detect location information: ${err.message}`);
        }
        finally {
            this._working = false;
        }
    }
    async _save(ev) {
        ev.preventDefault();
        this._working = true;
        try {
            const location = this._locationValue;
            await Object(_data_core__WEBPACK_IMPORTED_MODULE_6__["saveCoreConfig"])(this.hass, {
                location_name: this._nameValue,
                latitude: location[0],
                longitude: location[1],
                elevation: Number(this._elevationValue),
                unit_system: this._unitSystemValue,
                time_zone: this._timeZoneValue || "UTC",
            });
            const result = await Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_7__["onboardCoreConfigStep"])(this.hass);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "onboarding-step", {
                type: "core_config",
                result,
            });
        }
        catch (err) {
            this._working = false;
            alert("FAIL");
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .row {
        display: flex;
        flex-direction: row;
        margin: 0 -8px;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
      }

      .flex {
        flex: 1;
      }

      .middle-text {
        margin: 24px 0;
      }

      .row > * {
        margin: 0 8px;
      }
      .footer {
        margin-top: 16px;
        text-align: right;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "onboardingLocalize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "_working", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "_name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "_location", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "_elevation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "_unitSystem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], OnboardingCoreConfig.prototype, "_timeZone", void 0);
OnboardingCoreConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("onboarding-core-config")
], OnboardingCoreConfig);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jb3JlLWNvbmZpZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zZXR1cC1sZWFmbGV0LW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAvaGEtbG9jYXRpb24tZWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RpbWV6b25lLWRhdGFsaXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29uYm9hcmRpbmcvb25ib2FyZGluZy1jb3JlLWNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1yaXBwbGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIGBQYXBlcklua3lGb2N1c0JlaGF2aW9yYCBpbXBsZW1lbnRzIGEgcmlwcGxlIHdoZW4gdGhlIGVsZW1lbnQgaGFzIGtleWJvYXJkXG4gKiBmb2N1cy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySW5reUZvY3VzQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsID0ge1xuICBvYnNlcnZlcnM6IFsnX2ZvY3VzZWRDaGFuZ2VkKHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQpJ10sXG5cbiAgX2ZvY3VzZWRDaGFuZ2VkOiBmdW5jdGlvbihyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgaWYgKHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuZW5zdXJlUmlwcGxlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICB0aGlzLl9yaXBwbGUuaG9sZERvd24gPSByZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkO1xuICAgIH1cbiAgfSxcblxuICBfY3JlYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmlwcGxlID0gUGFwZXJSaXBwbGVCZWhhdmlvci5fY3JlYXRlUmlwcGxlKCk7XG4gICAgcmlwcGxlLmlkID0gJ2luayc7XG4gICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnY2VudGVyJywgJycpO1xuICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICByZXR1cm4gcmlwcGxlO1xuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVySW5reUZvY3VzQmVoYXZpb3IgPSBbXG4gIElyb25CdXR0b25TdGF0ZSxcbiAgSXJvbkNvbnRyb2xTdGF0ZSxcbiAgUGFwZXJSaXBwbGVCZWhhdmlvcixcbiAgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvckltcGxcbl07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZUltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tYnV0dG9uLXN0YXRlLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAqIGBQYXBlclJpcHBsZUJlaGF2aW9yYCBkeW5hbWljYWxseSBpbXBsZW1lbnRzIGEgcmlwcGxlIHdoZW4gdGhlIGVsZW1lbnQgaGFzXG4gKiBmb2N1cyB2aWEgcG9pbnRlciBvciBrZXlib2FyZC5cbiAqXG4gKiBOT1RFOiBUaGlzIGJlaGF2aW9yIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhbmQgYWZ0ZXJcbiAqIGBJcm9uQnV0dG9uU3RhdGVgIGFuZCBgSXJvbkNvbnRyb2xTdGF0ZWAuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlclJpcHBsZUJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlclJpcHBsZUJlaGF2aW9yID0ge1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGVsZW1lbnQgd2lsbCBub3QgcHJvZHVjZSBhIHJpcHBsZSBlZmZlY3Qgd2hlbiBpbnRlcmFjdGVkXG4gICAgICogd2l0aCB2aWEgdGhlIHBvaW50ZXIuXG4gICAgICovXG4gICAgbm9pbms6IHt0eXBlOiBCb29sZWFuLCBvYnNlcnZlcjogJ19ub2lua0NoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtFbGVtZW50fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBfcmlwcGxlQ29udGFpbmVyOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIGEgYDxwYXBlci1yaXBwbGU+YCBlbGVtZW50IGlzIGF2YWlsYWJsZSB3aGVuIHRoZSBlbGVtZW50IGlzXG4gICAqIGZvY3VzZWQuXG4gICAqL1xuICBfYnV0dG9uU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkKSB7XG4gICAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW4gYWRkaXRpb24gdG8gdGhlIGZ1bmN0aW9uYWxpdHkgcHJvdmlkZWQgaW4gYElyb25CdXR0b25TdGF0ZWAsIGVuc3VyZXNcbiAgICogYSByaXBwbGUgZWZmZWN0IGlzIGNyZWF0ZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBpbiBhIGBwcmVzc2VkYCBzdGF0ZS5cbiAgICovXG4gIF9kb3duSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBJcm9uQnV0dG9uU3RhdGVJbXBsLl9kb3duSGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICBpZiAodGhpcy5wcmVzc2VkKSB7XG4gICAgICB0aGlzLmVuc3VyZVJpcHBsZShldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoaXMgZWxlbWVudCBjb250YWlucyBhIHJpcHBsZSBlZmZlY3QuIEZvciBzdGFydHVwIGVmZmljaWVuY3lcbiAgICogdGhlIHJpcHBsZSBlZmZlY3QgaXMgZHluYW1pY2FsbHkgb24gZGVtYW5kIHdoZW4gbmVlZGVkLlxuICAgKiBAcGFyYW0geyFFdmVudD19IG9wdFRyaWdnZXJpbmdFdmVudCAob3B0aW9uYWwpIGV2ZW50IHRoYXQgdHJpZ2dlcmVkIHRoZVxuICAgKiByaXBwbGUuXG4gICAqL1xuICBlbnN1cmVSaXBwbGU6IGZ1bmN0aW9uKG9wdFRyaWdnZXJpbmdFdmVudCkge1xuICAgIGlmICghdGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlID0gdGhpcy5fY3JlYXRlUmlwcGxlKCk7XG4gICAgICB0aGlzLl9yaXBwbGUubm9pbmsgPSB0aGlzLm5vaW5rO1xuICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IHRoaXMuX3JpcHBsZUNvbnRhaW5lciB8fCB0aGlzLnJvb3Q7XG4gICAgICBpZiAocmlwcGxlQ29udGFpbmVyKSB7XG4gICAgICAgIGRvbShyaXBwbGVDb250YWluZXIpLmFwcGVuZENoaWxkKHRoaXMuX3JpcHBsZSk7XG4gICAgICB9XG4gICAgICBpZiAob3B0VHJpZ2dlcmluZ0V2ZW50KSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBldmVudCBoYXBwZW5lZCBpbnNpZGUgb2YgdGhlIHJpcHBsZSBjb250YWluZXJcbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIGhvc3QgaW5zdGVhZCBvZiB0aGUgcm9vdCBiZWNhdXNlIGRpc3RyaWJ1dGVkIHRleHRcbiAgICAgICAgLy8gbm9kZXMgYXJlIG5vdCB2YWxpZCBldmVudCB0YXJnZXRzXG4gICAgICAgIHZhciBkb21Db250YWluZXIgPSBkb20odGhpcy5fcmlwcGxlQ29udGFpbmVyIHx8IHRoaXMpO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZG9tKG9wdFRyaWdnZXJpbmdFdmVudCkucm9vdFRhcmdldDtcbiAgICAgICAgaWYgKGRvbUNvbnRhaW5lci5kZWVwQ29udGFpbnMoLyoqIEB0eXBlIHtOb2RlfSAqLyAodGFyZ2V0KSkpIHtcbiAgICAgICAgICB0aGlzLl9yaXBwbGUudWlEb3duQWN0aW9uKG9wdFRyaWdnZXJpbmdFdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGA8cGFwZXItcmlwcGxlPmAgZWxlbWVudCB1c2VkIGJ5IHRoaXMgZWxlbWVudCB0byBjcmVhdGVcbiAgICogcmlwcGxlIGVmZmVjdHMuIFRoZSBlbGVtZW50J3MgcmlwcGxlIGlzIGNyZWF0ZWQgb24gZGVtYW5kLCB3aGVuXG4gICAqIG5lY2Vzc2FyeSwgYW5kIGNhbGxpbmcgdGhpcyBtZXRob2Qgd2lsbCBmb3JjZSB0aGVcbiAgICogcmlwcGxlIHRvIGJlIGNyZWF0ZWQuXG4gICAqL1xuICBnZXRSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZW5zdXJlUmlwcGxlKCk7XG4gICAgcmV0dXJuIHRoaXMuX3JpcHBsZTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgZWxlbWVudCBjdXJyZW50bHkgY29udGFpbnMgYSByaXBwbGUgZWZmZWN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaGFzUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9yaXBwbGUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGVsZW1lbnQncyByaXBwbGUgZWZmZWN0IHZpYSBjcmVhdGluZyBhIGA8cGFwZXItcmlwcGxlPmAuXG4gICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGN1c3RvbWl6ZSB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFQYXBlclJpcHBsZUVsZW1lbnR9IFJldHVybnMgYSBgPHBhcGVyLXJpcHBsZT5gIGVsZW1lbnQuXG4gICAqL1xuICBfY3JlYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IVBhcGVyUmlwcGxlRWxlbWVudH0gKi8gKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXBlci1yaXBwbGUnKSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG5cbiAgX25vaW5rQ2hhbmdlZDogZnVuY3Rpb24obm9pbmspIHtcbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlLm5vaW5rID0gbm9pbms7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgTWFwIH0gZnJvbSBcImxlYWZsZXRcIjtcblxuLy8gU2V0cyB1cCBhIExlYWZsZXQgbWFwIG9uIHRoZSBwcm92aWRlZCBET00gZWxlbWVudFxuZXhwb3J0IHR5cGUgTGVhZmxldE1vZHVsZVR5cGUgPSB0eXBlb2YgaW1wb3J0KFwibGVhZmxldFwiKTtcblxuZXhwb3J0IGNvbnN0IHNldHVwTGVhZmxldE1hcCA9IGFzeW5jIChcbiAgbWFwRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRhcmtNb2RlID0gZmFsc2Vcbik6IFByb21pc2U8W01hcCwgTGVhZmxldE1vZHVsZVR5cGVdPiA9PiB7XG4gIGlmICghbWFwRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHNldHVwIExlYWZsZXQgbWFwIG9uIGRpc2Nvbm5lY3RlZCBlbGVtZW50XCIpO1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBMZWFmbGV0ID0gKGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlYWZsZXRcIiAqLyBcImxlYWZsZXRcIikpIGFzIExlYWZsZXRNb2R1bGVUeXBlO1xuICBMZWFmbGV0Lkljb24uRGVmYXVsdC5pbWFnZVBhdGggPSBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvaW1hZ2VzL1wiO1xuXG4gIGNvbnN0IG1hcCA9IExlYWZsZXQubWFwKG1hcEVsZW1lbnQpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9sZWFmbGV0LmNzc1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwicmVsXCIsIFwic3R5bGVzaGVldFwiKTtcbiAgbWFwRWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgbWFwLnNldFZpZXcoWzUyLjM3MzEzMzksIDQuODkwMzE0N10sIDEzKTtcbiAgY3JlYXRlVGlsZUxheWVyKExlYWZsZXQsIGRhcmtNb2RlKS5hZGRUbyhtYXApO1xuXG4gIHJldHVybiBbbWFwLCBMZWFmbGV0XTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUaWxlTGF5ZXIgPSAoXG4gIGxlYWZsZXQ6IExlYWZsZXRNb2R1bGVUeXBlLFxuICBkYXJrTW9kZTogYm9vbGVhblxuKSA9PiB7XG4gIHJldHVybiBsZWFmbGV0LnRpbGVMYXllcihcbiAgICBgaHR0cHM6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tLyR7XG4gICAgICBkYXJrTW9kZSA/IFwiZGFya19hbGxcIiA6IFwibGlnaHRfYWxsXCJcbiAgICB9L3t6fS97eH0ve3l9JHtsZWFmbGV0LkJyb3dzZXIucmV0aW5hID8gXCJAMngucG5nXCIgOiBcIi5wbmdcIn1gLFxuICAgIHtcbiAgICAgIGF0dHJpYnV0aW9uOlxuICAgICAgICAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL2NhcnRvLmNvbS9hdHRyaWJ1dGlvbnNcIj5DQVJUTzwvYT4nLFxuICAgICAgc3ViZG9tYWluczogXCJhYmNkXCIsXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMjAsXG4gICAgfVxuICApO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE1hcmtlciwgTWFwLCBMZWFmbGV0TW91c2VFdmVudCwgRHJhZ0VuZEV2ZW50LCBMYXRMbmcgfSBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IHtcbiAgc2V0dXBMZWFmbGV0TWFwLFxuICBMZWFmbGV0TW9kdWxlVHlwZSxcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXBcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1sb2NhdGlvbi1lZGl0b3JcIilcbmNsYXNzIExvY2F0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb2NhdGlvbj86IFtudW1iZXIsIG51bWJlcl07XG4gIHB1YmxpYyBmaXRab29tID0gMTY7XG5cbiAgcHJpdmF0ZSBfaWdub3JlRml0VG9NYXA/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIExlYWZsZXQ/OiBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgcHJpdmF0ZSBfbGVhZmxldE1hcD86IE1hcDtcbiAgcHJpdmF0ZSBfbG9jYXRpb25NYXJrZXI/OiBNYXJrZXI7XG5cbiAgcHVibGljIGZpdE1hcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2xlYWZsZXRNYXAgfHwgIXRoaXMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGVhZmxldE1hcC5zZXRWaWV3KHRoaXMubG9jYXRpb24sIHRoaXMuZml0Wm9vbSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2luaXRNYXAoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBTdGlsbCBsb2FkaW5nLlxuICAgIGlmICghdGhpcy5MZWFmbGV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgaWYgKCF0aGlzLl9pZ25vcmVGaXRUb01hcCB8fCB0aGlzLl9pZ25vcmVGaXRUb01hcCAhPT0gdGhpcy5sb2NhdGlvbikge1xuICAgICAgdGhpcy5maXRNYXAoKTtcbiAgICB9XG4gICAgdGhpcy5faWdub3JlRml0VG9NYXAgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbWFwRWwoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaW5pdE1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBbdGhpcy5fbGVhZmxldE1hcCwgdGhpcy5MZWFmbGV0XSA9IGF3YWl0IHNldHVwTGVhZmxldE1hcCh0aGlzLl9tYXBFbCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKGV2OiBMZWFmbGV0TW91c2VFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYubGF0bG5nKVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgdGhpcy5maXRNYXAoKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmludmFsaWRhdGVTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVMb2NhdGlvbihsYXRsbmc6IExhdExuZykge1xuICAgIGxldCBsb25naXR1ZGUgPSBsYXRsbmcubG5nO1xuICAgIGlmIChNYXRoLmFicyhsb25naXR1ZGUpID4gMTgwLjApIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSBsb25naXR1ZGUgaWYgbWFwIHByb3ZpZGVzIHZhbHVlcyBiZXlvbmQgLTE4MCB0byArMTgwIGRlZ3JlZXMuXG4gICAgICBsb25naXR1ZGUgPSAoKChsb25naXR1ZGUgJSAzNjAuMCkgKyA1NDAuMCkgJSAzNjAuMCkgLSAxODAuMDtcbiAgICB9XG4gICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuX2lnbm9yZUZpdFRvTWFwID0gW2xhdGxuZy5sYXQsIGxvbmdpdHVkZV07XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIsIHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcmtlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubG9jYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLl9sb2NhdGlvbk1hcmtlcikge1xuICAgICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fbG9jYXRpb25NYXJrZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2VyKSB7XG4gICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlci5zZXRMYXRMbmcodGhpcy5sb2NhdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyID0gdGhpcy5MZWFmbGV0IS5tYXJrZXIodGhpcy5sb2NhdGlvbiwge1xuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRyYWdlbmRcIixcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChldjogRHJhZ0VuZEV2ZW50KSA9PiB0aGlzLl91cGRhdGVMb2NhdGlvbihldi50YXJnZXQuZ2V0TGF0TG5nKCkpXG4gICAgKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwIS5hZGRMYXllcih0aGlzLl9sb2NhdGlvbk1hcmtlcik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgfVxuICAgICAgI21hcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1sb2NhdGlvbi1lZGl0b3JcIjogTG9jYXRpb25FZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB0aW1lem9uZXMgZnJvbSBcImdvb2dsZS10aW1lem9uZXMtanNvblwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXpvbmVMaXN0RWwgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG4gIGxpc3QuaWQgPSBcInRpbWV6b25lc1wiO1xuICBPYmplY3Qua2V5cyh0aW1lem9uZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0ga2V5O1xuICAgIG9wdGlvbi5pbm5lckhUTUwgPSB0aW1lem9uZXNba2V5XTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICByZXR1cm4gbGlzdDtcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzQ29uZmlnIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1VwZGF0ZVZhbHVlcyB7XG4gIGxvY2F0aW9uX25hbWU6IHN0cmluZztcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIGVsZXZhdGlvbjogbnVtYmVyO1xuICB1bml0X3N5c3RlbTogXCJtZXRyaWNcIiB8IFwiaW1wZXJpYWxcIjtcbiAgdGltZV96b25lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29yZUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8SGFzc0NvbmZpZz4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2NvcmUvdXBkYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdENvcmVDb25maWcgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8UGFydGlhbDxDb25maWdVcGRhdGVWYWx1ZXM+Pih7XG4gICAgdHlwZTogXCJjb25maWcvY29yZS9kZXRlY3RcIixcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1ncm91cC9wYXBlci1yYWRpby1ncm91cFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvblwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENvbmZpZ1VwZGF0ZVZhbHVlcyxcbiAgZGV0ZWN0Q29yZUNvbmZpZyxcbiAgc2F2ZUNvcmVDb25maWcsXG59IGZyb20gXCIuLi9kYXRhL2NvcmVcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgb25ib2FyZENvcmVDb25maWdTdGVwIH0gZnJvbSBcIi4uL2RhdGEvb25ib2FyZGluZ1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGNyZWF0ZVRpbWV6b25lTGlzdEVsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdGltZXpvbmUtZGF0YWxpc3RcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvbWFwL2hhLWxvY2F0aW9uLWVkaXRvclwiO1xuXG5jb25zdCBhbXN0ZXJkYW0gPSBbNTIuMzczMTMzOSwgNC44OTAzMTQ3XTtcblxuQGN1c3RvbUVsZW1lbnQoXCJvbmJvYXJkaW5nLWNvcmUtY29uZmlnXCIpXG5jbGFzcyBPbmJvYXJkaW5nQ29yZUNvbmZpZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBvbmJvYXJkaW5nTG9jYWxpemUhOiBMb2NhbGl6ZUZ1bmM7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd29ya2luZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25hbWUhOiBDb25maWdVcGRhdGVWYWx1ZXNbXCJsb2NhdGlvbl9uYW1lXCJdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9sb2NhdGlvbiE6IFtudW1iZXIsIG51bWJlcl07XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VsZXZhdGlvbiE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdW5pdFN5c3RlbSE6IENvbmZpZ1VwZGF0ZVZhbHVlc1tcInVuaXRfc3lzdGVtXCJdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF90aW1lWm9uZSE6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cD5cbiAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5pbnRyb1wiLFxuICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgIHRoaXMuaGFzcy51c2VyIS5uYW1lXG4gICAgICAgICl9XG4gICAgICA8L3A+XG5cbiAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAubGFiZWw9JHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5sb2NhdGlvbl9uYW1lXCJcbiAgICAgICAgKX1cbiAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lVmFsdWV9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQ2hhbmdlfVxuICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtdGV4dFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcuaW50cm9fbG9jYXRpb25cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmNvcmUtY29uZmlnLmludHJvX2xvY2F0aW9uX2RldGVjdFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX2RldGVjdH0+XG4gICAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5idXR0b25fZGV0ZWN0XCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxoYS1sb2NhdGlvbi1lZGl0b3JcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIC5sb2NhdGlvbj0ke3RoaXMuX2xvY2F0aW9uVmFsdWV9XG4gICAgICAgICAgLmZpdFpvb209JHsxNH1cbiAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fbG9jYXRpb25DaGFuZ2VkfVxuICAgICAgICA+PC9oYS1sb2NhdGlvbi1lZGl0b3I+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnRpbWVfem9uZVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgICBuYW1lPVwidGltZVpvbmVcIlxuICAgICAgICAgIGxpc3Q9XCJ0aW1lem9uZXNcIlxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fdGltZVpvbmVWYWx1ZX1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5lbGV2YXRpb25cIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cImVsZXZhdGlvblwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fd29ya2luZ31cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl9lbGV2YXRpb25WYWx1ZX1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJzdWZmaXhcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5lbGV2YXRpb25fbWV0ZXJzXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHBhcGVyLXJhZGlvLWdyb3VwXG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl91bml0U3lzdGVtVmFsdWV9XG4gICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl91bml0U3lzdGVtQ2hhbmdlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1ldHJpY1wiIC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9PlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtX21ldHJpY1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5tZXRyaWNfZXhhbXBsZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJpbXBlcmlhbFwiIC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9PlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtX2ltcGVyaWFsXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmltcGVyaWFsX2V4YW1wbGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9zYXZlfSAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfT5cbiAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcuZmluaXNoXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwicGFwZXItaW5wdXRcIikhLmZvY3VzKCksXG4gICAgICAxMDBcbiAgICApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldikgPT4ge1xuICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX3NhdmUoZXYpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJbbmFtZT10aW1lWm9uZV1cIlxuICAgICkgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgaW5wdXQuaW5wdXRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpbWV6b25lTGlzdEVsKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX25hbWVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZSAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHRoaXMuX25hbWVcbiAgICAgIDogdGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcubG9jYXRpb25fbmFtZV9kZWZhdWx0XCJcbiAgICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9sb2NhdGlvblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9sb2NhdGlvbiB8fCBhbXN0ZXJkYW07XG4gIH1cblxuICBwcml2YXRlIGdldCBfZWxldmF0aW9uVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZXZhdGlvbiAhPT0gdW5kZWZpbmVkID8gdGhpcy5fZWxldmF0aW9uIDogMDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90aW1lWm9uZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lWm9uZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF91bml0U3lzdGVtVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VuaXRTeXN0ZW0gIT09IHVuZGVmaW5lZCA/IHRoaXMuX3VuaXRTeXN0ZW0gOiBcIm1ldHJpY1wiO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2hhbmdlKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVySW5wdXRFbGVtZW50O1xuICAgIHRoaXNbYF8ke3RhcmdldC5uYW1lfWBdID0gdGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9jYXRpb25DaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5fbG9jYXRpb24gPSBldi5jdXJyZW50VGFyZ2V0LmxvY2F0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfdW5pdFN5c3RlbUNoYW5nZWQoXG4gICAgZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Q29uZmlnVXBkYXRlVmFsdWVzW1widW5pdF9zeXN0ZW1cIl0+XG4gICkge1xuICAgIHRoaXMuX3VuaXRTeXN0ZW0gPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kZXRlY3QoKSB7XG4gICAgdGhpcy5fd29ya2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IGRldGVjdENvcmVDb25maWcodGhpcy5oYXNzKTtcbiAgICAgIGlmICh2YWx1ZXMubGF0aXR1ZGUgJiYgdmFsdWVzLmxvbmdpdHVkZSkge1xuICAgICAgICB0aGlzLl9sb2NhdGlvbiA9IFtOdW1iZXIodmFsdWVzLmxhdGl0dWRlKSwgTnVtYmVyKHZhbHVlcy5sb25naXR1ZGUpXTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZXMuZWxldmF0aW9uKSB7XG4gICAgICAgIHRoaXMuX2VsZXZhdGlvbiA9IFN0cmluZyh2YWx1ZXMuZWxldmF0aW9uKTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZXMudW5pdF9zeXN0ZW0pIHtcbiAgICAgICAgdGhpcy5fdW5pdFN5c3RlbSA9IHZhbHVlcy51bml0X3N5c3RlbTtcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZXMudGltZV96b25lKSB7XG4gICAgICAgIHRoaXMuX3RpbWVab25lID0gdmFsdWVzLnRpbWVfem9uZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBGYWlsZWQgdG8gZGV0ZWN0IGxvY2F0aW9uIGluZm9ybWF0aW9uOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl93b3JraW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2F2ZShldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5fd29ya2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5fbG9jYXRpb25WYWx1ZTtcbiAgICAgIGF3YWl0IHNhdmVDb3JlQ29uZmlnKHRoaXMuaGFzcywge1xuICAgICAgICBsb2NhdGlvbl9uYW1lOiB0aGlzLl9uYW1lVmFsdWUsXG4gICAgICAgIGxhdGl0dWRlOiBsb2NhdGlvblswXSxcbiAgICAgICAgbG9uZ2l0dWRlOiBsb2NhdGlvblsxXSxcbiAgICAgICAgZWxldmF0aW9uOiBOdW1iZXIodGhpcy5fZWxldmF0aW9uVmFsdWUpLFxuICAgICAgICB1bml0X3N5c3RlbTogdGhpcy5fdW5pdFN5c3RlbVZhbHVlLFxuICAgICAgICB0aW1lX3pvbmU6IHRoaXMuX3RpbWVab25lVmFsdWUgfHwgXCJVVENcIixcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgb25ib2FyZENvcmVDb25maWdTdGVwKHRoaXMuaGFzcyk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJvbmJvYXJkaW5nLXN0ZXBcIiwge1xuICAgICAgICB0eXBlOiBcImNvcmVfY29uZmlnXCIsXG4gICAgICAgIHJlc3VsdCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fd29ya2luZyA9IGZhbHNlO1xuICAgICAgYWxlcnQoXCJGQUlMXCIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBtYXJnaW46IDAgLThweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnNlY29uZGFyeSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgLm1pZGRsZS10ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAyNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5yb3cgPiAqIHtcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvbmJvYXJkaW5nLWNvcmUtY29uZmlnXCI6IE9uYm9hcmRpbmdDb3JlQ29uZmlnO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkhBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQVdBO0FBSUE7QUFHQTtBQUFBOztBQUVBO0FBdUdBO0FBOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBeEdBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFBQTs7QUFJQTtBQTJRQTtBQW5RQTtBQUNBOztBQUVBOzs7O0FBUUE7O0FBSUE7QUFDQTtBQUNBOzs7OztBQUtBOzs7OztBQU9BOztBQUlBO0FBQ0E7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7OztBQVNBOzs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBOztBQUlBOzs7QUFLQTtBQUNBOztBQUlBOzs7Ozs7O0FBU0E7QUFDQTs7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBOVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVZBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==