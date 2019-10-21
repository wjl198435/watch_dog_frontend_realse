(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog"],{

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.
/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */
const DEFAULT_PANEL = "lovelace";
/** Domains that have a state card. */
const DOMAINS_WITH_CARD = [
    "climate",
    "cover",
    "configurator",
    "input_select",
    "input_number",
    "input_text",
    "lock",
    "media_player",
    "scene",
    "script",
    "timer",
    "vacuum",
    "water_heater",
    "weblink",
];
/** Domains with separate more info dialog. */
const DOMAINS_WITH_MORE_INFO = [
    "alarm_control_panel",
    "automation",
    "camera",
    "climate",
    "configurator",
    "cover",
    "fan",
    "group",
    "history_graph",
    "input_datetime",
    "light",
    "lock",
    "media_player",
    "script",
    "sun",
    "timer",
    "updater",
    "vacuum",
    "water_heater",
    "weather",
];
/** Domains that show no more info dialog. */
const DOMAINS_HIDE_MORE_INFO = [
    "input_number",
    "input_select",
    "input_text",
    "scene",
    "weblink",
];
/** Domains that should have the history hidden in the more info dialog. */
const DOMAINS_MORE_INFO_NO_HISTORY = [
    "camera",
    "configurator",
    "history_graph",
    "scene",
];
/** States that we consider "off". */
const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */
const DOMAINS_TOGGLE = new Set([
    "fan",
    "input_boolean",
    "light",
    "switch",
    "group",
    "automation",
]);
/** Temperature units. */
const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */
const DEFAULT_VIEW_ENTITY_ID = "group.default_view";


/***/ }),

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: computeDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDomain", function() { return computeDomain; });
const computeDomain = (entityId) => {
    return entityId.substr(0, entityId.indexOf("."));
};


/***/ }),

/***/ "./src/common/entity/feature_class_names.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/feature_class_names.ts ***!
  \**************************************************/
/*! exports provided: featureClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureClassNames", function() { return featureClassNames; });
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");

// Expects classNames to be an object mapping feature-bit -> className
const featureClassNames = (stateObj, classNames) => {
    if (!stateObj || !stateObj.attributes.supported_features) {
        return "";
    }
    return Object.keys(classNames)
        .map((feature) => Object(_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, Number(feature)) ? classNames[feature] : "")
        .filter((attr) => attr !== "")
        .join(" ");
};


/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
const debounce = (func, wait, immediate = false) => {
    let timeout;
    // @ts-ignore
    return function (...args) {
        // tslint:disable:no-this-assignment
        // @ts-ignore
        const context = this;
        const later = () => {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};


/***/ }),

/***/ "./src/components/ha-attributes.js":
/*!*****************************************!*\
  !*** ./src/components/ha-attributes.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");






class HaAttributes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .data-entry .value {
          max-width: 200px;
          overflow-wrap: break-word;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: right;
        }
      </style>

      <div class="layout vertical">
        <template
          is="dom-repeat"
          items="[[computeDisplayAttributes(stateObj, filtersArray)]]"
          as="attribute"
        >
          <div class="data-entry layout justified horizontal">
            <div class="key">[[formatAttribute(attribute)]]</div>
            <div class="value">
              [[formatAttributeValue(stateObj, attribute)]]
            </div>
          </div>
        </template>
        <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">
          [[computeAttribution(stateObj)]]
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object,
      },
      extraFilters: {
        type: String,
        value: "",
      },
      filtersArray: {
        type: Array,
        computed: "computeFiltersArray(extraFilters)",
      },
    };
  }

  computeFiltersArray(extraFilters) {
    return Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIC_STATE_ATTRIBUTES).concat(
      extraFilters ? extraFilters.split(",") : []
    );
  }

  computeDisplayAttributes(stateObj, filtersArray) {
    if (!stateObj) {
      return [];
    }
    return Object.keys(stateObj.attributes).filter(function(key) {
      return filtersArray.indexOf(key) === -1;
    });
  }

  formatAttribute(attribute) {
    return attribute.replace(/_/g, " ");
  }

  formatAttributeValue(stateObj, attribute) {
    var value = stateObj.attributes[attribute];
    if (value === null) return "-";
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    return value instanceof Object ? JSON.stringify(value, null, 2) : value;
  }

  computeAttribution(stateObj) {
    return stateObj.attributes.attribution;
  }
}

customElements.define("ha-attributes", HaAttributes);


/***/ }),

/***/ "./src/components/ha-camera-stream.ts":
/*!********************************************!*\
  !*** ./src/components/ha-camera-stream.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");






let HaCameraStream = class HaCameraStream extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.showControls = false;
        this._attached = false;
        // We keep track if we should force MJPEG with a string
        // that way it automatically resets if we change entity.
        this._forceMJPEG = undefined;
    }
    connectedCallback() {
        super.connectedCallback();
        this._attached = true;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._attached = false;
    }
    render() {
        if (!this.stateObj || !this._attached) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${ false || this._shouldRenderMJPEG
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <img
              @load=${this._elementResized}
              .src=${ false
                ? undefined
                : Object(_data_camera__WEBPACK_IMPORTED_MODULE_4__["computeMJPEGStreamUrl"])(this.stateObj)}
              .alt=${`Preview of the ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(this.stateObj)} camera.`}
            />
          `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <video
              autoplay
              muted
              playsinline
              ?controls=${this.showControls}
              @loadeddata=${this._elementResized}
            ></video>
          `}
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        const stateObjChanged = changedProps.has("stateObj");
        const attachedChanged = changedProps.has("_attached");
        const oldState = changedProps.get("stateObj");
        const oldEntityId = oldState ? oldState.entity_id : undefined;
        const curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;
        if ((!stateObjChanged && !attachedChanged) ||
            (stateObjChanged && oldEntityId === curEntityId)) {
            return;
        }
        // If we are no longer attached, destroy polyfill.
        if (attachedChanged && !this._attached) {
            this._destroyPolyfill();
            return;
        }
        // Nothing to do if we are render MJPEG.
        if (this._shouldRenderMJPEG) {
            return;
        }
        // Tear down existing polyfill, if available
        this._destroyPolyfill();
        if (curEntityId) {
            this._startHls();
        }
    }
    get _shouldRenderMJPEG() {
        return (this._forceMJPEG === this.stateObj.entity_id ||
            !this.hass.config.components.includes("stream") ||
            !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_4__["CAMERA_SUPPORT_STREAM"]));
    }
    get _videoEl() {
        return this.shadowRoot.querySelector("video");
    }
    async _startHls() {
        // tslint:disable-next-line
        const Hls = (await __webpack_require__.e(/*! import() | hls.js */ "vendors~hls.js").then(__webpack_require__.t.bind(null, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 7)))
            .default;
        let hlsSupported = Hls.isSupported();
        const videoEl = this._videoEl;
        if (!hlsSupported) {
            hlsSupported =
                videoEl.canPlayType("application/vnd.apple.mpegurl") !== "";
        }
        if (!hlsSupported) {
            this._forceMJPEG = this.stateObj.entity_id;
            return;
        }
        try {
            const { url } = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_4__["fetchStreamUrl"])(this.hass, this.stateObj.entity_id);
            if (Hls.isSupported()) {
                this._renderHLSPolyfill(videoEl, Hls, url);
            }
            else {
                this._renderHLSNative(videoEl, url);
            }
            return;
        }
        catch (err) {
            // Fails if we were unable to get a stream
            // tslint:disable-next-line
            console.error(err);
            this._forceMJPEG = this.stateObj.entity_id;
        }
    }
    async _renderHLSNative(videoEl, url) {
        videoEl.src = url;
        await new Promise((resolve) => videoEl.addEventListener("loadedmetadata", resolve));
        videoEl.play();
    }
    async _renderHLSPolyfill(videoEl, 
    // tslint:disable-next-line
    Hls, url) {
        const hls = new Hls();
        this._hlsPolyfillInstance = hls;
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            hls.loadSource(url);
        });
    }
    _elementResized() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
    }
    _destroyPolyfill() {
        if (this._hlsPolyfillInstance) {
            this._hlsPolyfillInstance.destroy();
            this._hlsPolyfillInstance = undefined;
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host,
      img,
      video {
        display: block;
      }

      img,
      video {
        width: 100%;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaCameraStream.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaCameraStream.prototype, "stateObj", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], HaCameraStream.prototype, "showControls", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaCameraStream.prototype, "_attached", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaCameraStream.prototype, "_forceMJPEG", void 0);
HaCameraStream = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-camera-stream")
], HaCameraStream);


/***/ }),

/***/ "./src/components/ha-climate-control.js":
/*!**********************************************!*\
  !*** ./src/components/ha-climate-control.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");







/*
 * @appliesMixin EventsMixin
 */
class HaClimateControl extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
          direction: ltr;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      value: {
        type: Number,
        observer: "valueChanged",
      },
      units: {
        type: String,
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      step: {
        type: Number,
        value: 1,
      },
    };
  }

  temperatureStateInFlux(inFlux) {
    this.$.target_temperature.classList.toggle("in-flux", inFlux);
  }

  _round(val) {
    // round value to precision derived from step
    // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
    const s = this.step.toString().split(".");
    return s[1] ? parseFloat(val.toFixed(s[1].length)) : Math.round(val);
  }

  incrementValue() {
    const newval = this._round(this.value + this.step);
    if (this.value < this.max) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }
    if (newval <= this.max) {
      // If no initial target_temp
      // this forces control to start
      // from the min configured instead of 0
      if (newval <= this.min) {
        this.value = this.min;
      } else {
        this.value = newval;
      }
    } else {
      this.value = this.max;
    }
  }

  decrementValue() {
    const newval = this._round(this.value - this.step);
    if (this.value > this.min) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }
    if (newval >= this.min) {
      this.value = newval;
    } else {
      this.value = this.min;
    }
  }

  valueChanged() {
    // when the last_changed timestamp is changed,
    // trigger a potential event fire in
    // the future, as long as last changed is far enough in the
    // past.
    if (this.last_changed) {
      window.setTimeout(() => {
        const now = Date.now();
        if (now - this.last_changed >= 2000) {
          this.fire("change");
          this.temperatureStateInFlux(false);
          this.last_changed = null;
        }
      }, 2010);
    }
  }
}

customElements.define("ha-climate-control", HaClimateControl);


/***/ }),

/***/ "./src/components/ha-color-picker.js":
/*!*******************************************!*\
  !*** ./src/components/ha-color-picker.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");





/**
 * Color-picker custom element
 *
 * @appliesMixin EventsMixin
 */
class HaColorPicker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          user-select: none;
          -webkit-user-select: none;
        }

        #canvas {
          position: relative;
          width: 100%;
          max-width: 330px;
        }
        #canvas > * {
          display: block;
        }
        #interactionLayer {
          color: white;
          position: absolute;
          cursor: crosshair;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        #backgroundLayer {
          width: 100%;
          overflow: visible;
          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
          --wheel-shadow: var(
            --ha-color-picker-wheel-shadow,
            rgb(15, 15, 15) 10px 5px 5px 0px
          );
        }

        #marker {
          fill: currentColor;
          stroke: var(--ha-color-picker-marker-bordercolor, white);
          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
          filter: url(#marker-shadow);
        }
        .dragging #marker {
        }

        #colorTooltip {
          display: none;
          fill: currentColor;
          stroke: var(--ha-color-picker-tooltip-bordercolor, white);
          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
        }

        .touch.dragging #colorTooltip {
          display: inherit;
        }
      </style>
      <div id="canvas">
        <svg id="interactionLayer">
          <defs>
            <filter
              id="marker-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              ></feOffset>
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              ></feGaussianBlur>
              <feComponentTransfer in="blurOut" result="alphaOut">
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="alphaOut"
                mode="normal"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <canvas id="backgroundLayer"></canvas>
      </div>
    `;
  }

  static get properties() {
    return {
      hsColor: {
        type: Object,
      },

      // use these properties to update the state via attributes
      desiredHsColor: {
        type: Object,
        observer: "applyHsColor",
      },

      // width, height and radius apply to the coordinates of
      // of the canvas.
      // border width are relative to these numbers
      // the onscreen displayed size should be controlled with css
      // and should be the same or smaller
      width: {
        type: Number,
        value: 500,
      },

      height: {
        type: Number,
        value: 500,
      },

      radius: {
        type: Number,
        value: 225,
      },

      // the amount segments for the hue
      // 0 = continuous gradient
      // other than 0 gives 'pie-pieces'
      hueSegments: {
        type: Number,
        value: 0,
        observer: "segmentationChange",
      },

      // the amount segments for the hue
      // 0 = continuous gradient
      // 1 = only fully saturated
      // > 1 = segments from white to fully saturated
      saturationSegments: {
        type: Number,
        value: 0,
        observer: "segmentationChange",
      },

      // set to true to make the segments purely esthetical
      // this allows selection off all collors, also
      // interpolated between the segments
      ignoreSegments: {
        type: Boolean,
        value: false,
      },

      // throttle te amount of 'colorselected' events fired
      // value is timeout in milliseconds
      throttle: {
        type: Number,
        value: 500,
      },
    };
  }

  ready() {
    super.ready();
    this.setupLayers();
    this.drawColorWheel();
    this.drawMarker();

    this.interactionLayer.addEventListener("mousedown", (ev) =>
      this.onMouseDown(ev)
    );
    this.interactionLayer.addEventListener("touchstart", (ev) =>
      this.onTouchStart(ev)
    );
  }

  // converts browser coordinates to canvas canvas coordinates
  // origin is wheel center
  // returns {x: X, y: Y} object
  convertToCanvasCoordinates(clientX, clientY) {
    var svgPoint = this.interactionLayer.createSVGPoint();
    svgPoint.x = clientX;
    svgPoint.y = clientY;
    var cc = svgPoint.matrixTransform(
      this.interactionLayer.getScreenCTM().inverse()
    );
    return { x: cc.x, y: cc.y };
  }

  // Mouse events

  onMouseDown(ev) {
    const cc = this.convertToCanvasCoordinates(ev.clientX, ev.clientY);
    // return if we're not on the wheel
    if (!this.isInWheel(cc.x, cc.y)) {
      return;
    }
    // a mousedown in wheel is always a color select action
    this.onMouseSelect(ev);
    // allow dragging
    this.canvas.classList.add("mouse", "dragging");
    this.addEventListener("mousemove", this.onMouseSelect);
    this.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseUp() {
    this.canvas.classList.remove("mouse", "dragging");
    this.removeEventListener("mousemove", this.onMouseSelect);
  }

  onMouseSelect(ev) {
    requestAnimationFrame(() => this.processUserSelect(ev));
  }

  // Touch events

  onTouchStart(ev) {
    var touch = ev.changedTouches[0];
    const cc = this.convertToCanvasCoordinates(touch.clientX, touch.clientY);
    // return if we're not on the wheel
    if (!this.isInWheel(cc.x, cc.y)) {
      return;
    }
    if (ev.target === this.marker) {
      // drag marker
      ev.preventDefault();
      this.canvas.classList.add("touch", "dragging");
      this.addEventListener("touchmove", this.onTouchSelect);
      this.addEventListener("touchend", this.onTouchEnd);
      return;
    }
    // don't fire color selection immediately,
    // wait for touchend and invalidate when we scroll
    this.tapBecameScroll = false;
    this.addEventListener("touchend", this.onTap);
    this.addEventListener(
      "touchmove",
      () => {
        this.tapBecameScroll = true;
      },
      { passive: true }
    );
  }

  onTap(ev) {
    if (this.tapBecameScroll) {
      return;
    }
    ev.preventDefault();
    this.onTouchSelect(ev);
  }

  onTouchEnd() {
    this.canvas.classList.remove("touch", "dragging");
    this.removeEventListener("touchmove", this.onTouchSelect);
  }

  onTouchSelect(ev) {
    requestAnimationFrame(() => this.processUserSelect(ev.changedTouches[0]));
  }

  /*
   * General event/selection handling
   */

  // Process user input to color
  processUserSelect(ev) {
    var canvasXY = this.convertToCanvasCoordinates(ev.clientX, ev.clientY);
    var hs = this.getColor(canvasXY.x, canvasXY.y);
    this.onColorSelect(hs);
  }

  // apply color to marker position and canvas
  onColorSelect(hs) {
    this.setMarkerOnColor(hs); // marker always follows mounse 'raw' hs value (= mouse position)
    if (!this.ignoreSegments) {
      // apply segments if needed
      hs = this.applySegmentFilter(hs);
    }
    // always apply the new color to the interface / canvas
    this.applyColorToCanvas(hs);
    // throttling is applied to updating the exposed colors (properties)
    // and firing of events
    if (this.colorSelectIsThrottled) {
      // make sure we apply the last selected color
      // eventually after throttle limit has passed
      clearTimeout(this.ensureFinalSelect);
      this.ensureFinalSelect = setTimeout(() => {
        this.fireColorSelected(hs); // do it for the final time
      }, this.throttle);
      return;
    }
    this.fireColorSelected(hs); // do it
    this.colorSelectIsThrottled = true;
    setTimeout(() => {
      this.colorSelectIsThrottled = false;
    }, this.throttle);
  }

  // set color values and fire colorselected event
  fireColorSelected(hs) {
    this.hsColor = hs;
    this.fire("colorselected", { hs: { h: hs.h, s: hs.s } });
  }

  /*
   * Interface updating
   */

  // set marker position to the given color
  setMarkerOnColor(hs) {
    var dist = hs.s * this.radius;
    var theta = ((hs.h - 180) / 180) * Math.PI;
    var markerdX = -dist * Math.cos(theta);
    var markerdY = -dist * Math.sin(theta);
    var translateString = `translate(${markerdX},${markerdY})`;
    this.marker.setAttribute("transform", translateString);
    this.tooltip.setAttribute("transform", translateString);
  }

  // apply given color to interface elements
  applyColorToCanvas(hs) {
    // we're not really converting hs to hsl here, but we keep it cheap
    // setting the color on the interactionLayer, the svg elements can inherit
    this.interactionLayer.style.color = `hsl(${hs.h}, 100%, ${100 -
      hs.s * 50}%)`;
  }

  applyHsColor(hs) {
    // do nothing is we already have the same color
    if (this.hsColor && this.hsColor.h === hs.h && this.hsColor.s === hs.s) {
      return;
    }
    this.setMarkerOnColor(hs); // marker is always set on 'raw' hs position
    if (!this.ignoreSegments) {
      // apply segments if needed
      hs = this.applySegmentFilter(hs);
    }
    this.hsColor = hs;
    // always apply the new color to the interface / canvas
    this.applyColorToCanvas(hs);
  }

  /*
   * input processing helpers
   */

  // get angle (degrees)
  getAngle(dX, dY) {
    var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive
    var angle = (theta / Math.PI) * 180 + 180; // degrees, clockwise from right
    return angle;
  }

  // returns true when coordinates are in the colorwheel
  isInWheel(x, y) {
    return this.getDistance(x, y) <= 1;
  }

  // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside
  getDistance(dX, dY) {
    return Math.sqrt(dX * dX + dY * dY) / this.radius;
  }

  /*
   * Getting colors
   */

  getColor(x, y) {
    var hue = this.getAngle(x, y); // degrees, clockwise from right
    var relativeDistance = this.getDistance(x, y); // edge of radius = 1
    var sat = Math.min(relativeDistance, 1); // Distance from center
    return { h: hue, s: sat };
  }

  applySegmentFilter(hs) {
    // apply hue segment steps
    if (this.hueSegments) {
      const angleStep = 360 / this.hueSegments;
      const halfAngleStep = angleStep / 2;
      hs.h -= halfAngleStep; // take the 'centered segemnts' into account
      if (hs.h < 0) {
        hs.h += 360;
      } // don't end up below 0
      const rest = hs.h % angleStep;
      hs.h -= rest - angleStep;
    }

    // apply saturation segment steps
    if (this.saturationSegments) {
      if (this.saturationSegments === 1) {
        hs.s = 1;
      } else {
        var segmentSize = 1 / this.saturationSegments;
        var saturationStep = 1 / (this.saturationSegments - 1);
        var calculatedSat = Math.floor(hs.s / segmentSize) * saturationStep;
        hs.s = Math.min(calculatedSat, 1);
      }
    }
    return hs;
  }

  /*
   * Drawing related stuff
   */

  setupLayers() {
    this.canvas = this.$.canvas;
    this.backgroundLayer = this.$.backgroundLayer;
    this.interactionLayer = this.$.interactionLayer;

    // coordinate origin position (center of the wheel)
    this.originX = this.width / 2;
    this.originY = this.originX;

    // synchronise width/height coordinates
    this.backgroundLayer.width = this.width;
    this.backgroundLayer.height = this.height;
    this.interactionLayer.setAttribute(
      "viewBox",
      `${-this.originX} ${-this.originY} ${this.width} ${this.height}`
    );
  }

  drawColorWheel() {
    /*
     *  Setting up all paremeters
     */
    let shadowColor;
    let shadowOffsetX;
    let shadowOffsetY;
    let shadowBlur;
    const context = this.backgroundLayer.getContext("2d");
    // postioning and sizing
    const cX = this.originX;
    const cY = this.originY;
    const radius = this.radius;
    const counterClockwise = false;
    // styling of the wheel
    const wheelStyle = window.getComputedStyle(this.backgroundLayer, null);
    const borderWidth = parseInt(
      wheelStyle.getPropertyValue("--wheel-borderwidth"),
      10
    );
    const borderColor = wheelStyle
      .getPropertyValue("--wheel-bordercolor")
      .trim();
    const wheelShadow = wheelStyle.getPropertyValue("--wheel-shadow").trim();
    // extract shadow properties from  CCS variable
    // the shadow should be defined as: "10px 5px 5px 0px COLOR"
    if (wheelShadow !== "none") {
      const values = wheelShadow.split("px ");
      shadowColor = values.pop();
      shadowOffsetX = parseInt(values[0], 10);
      shadowOffsetY = parseInt(values[1], 10);
      shadowBlur = parseInt(values[2], 10) || 0;
    }
    const borderRadius = radius + borderWidth / 2;
    const wheelRadius = radius;
    const shadowRadius = radius + borderWidth;

    /*
     *  Drawing functions
     */
    function drawCircle(hueSegments, saturationSegments) {
      hueSegments = hueSegments || 360; // reset 0 segments to 360
      const angleStep = 360 / hueSegments;
      const halfAngleStep = angleStep / 2; // center segments on color
      for (var angle = 0; angle <= 360; angle += angleStep) {
        var startAngle = (angle - halfAngleStep) * (Math.PI / 180);
        var endAngle = (angle + halfAngleStep + 1) * (Math.PI / 180);
        context.beginPath();
        context.moveTo(cX, cY);
        context.arc(
          cX,
          cY,
          wheelRadius,
          startAngle,
          endAngle,
          counterClockwise
        );
        context.closePath();
        // gradient
        var gradient = context.createRadialGradient(
          cX,
          cY,
          0,
          cX,
          cY,
          wheelRadius
        );
        let lightness = 100;
        // first gradient stop
        gradient.addColorStop(0, `hsl(${angle}, 100%, ${lightness}%)`);
        // segment gradient stops
        if (saturationSegments > 0) {
          const ratioStep = 1 / saturationSegments;
          let ratio = 0;
          for (var stop = 1; stop < saturationSegments; stop += 1) {
            var prevLighness = lightness;
            ratio = stop * ratioStep;
            lightness = 100 - 50 * ratio;
            gradient.addColorStop(
              ratio,
              `hsl(${angle}, 100%, ${prevLighness}%)`
            );
            gradient.addColorStop(ratio, `hsl(${angle}, 100%, ${lightness}%)`);
          }
          gradient.addColorStop(ratio, `hsl(${angle}, 100%, 50%)`);
        }
        // last gradient stop
        gradient.addColorStop(1, `hsl(${angle}, 100%, 50%)`);

        context.fillStyle = gradient;
        context.fill();
      }
    }

    function drawShadow() {
      context.save();
      context.beginPath();
      context.arc(cX, cY, shadowRadius, 0, 2 * Math.PI, false);
      context.shadowColor = shadowColor;
      context.shadowOffsetX = shadowOffsetX;
      context.shadowOffsetY = shadowOffsetY;
      context.shadowBlur = shadowBlur;
      context.fillStyle = "white";
      context.fill();
      context.restore();
    }

    function drawBorder() {
      context.beginPath();
      context.arc(cX, cY, borderRadius, 0, 2 * Math.PI, false);
      context.lineWidth = borderWidth;
      context.strokeStyle = borderColor;
      context.stroke();
    }

    /*
     *   Call the drawing functions
     *   draws the shadow, wheel and border
     */
    if (wheelStyle.shadow !== "none") {
      drawShadow();
    }
    drawCircle(this.hueSegments, this.saturationSegments);
    if (borderWidth > 0) {
      drawBorder();
    }
  }

  /*
   *   Draw the (draggable) marker and tooltip
   *   on the interactionLayer)
   */

  drawMarker() {
    const svgElement = this.interactionLayer;
    const markerradius = this.radius * 0.08;
    const tooltipradius = this.radius * 0.15;
    const TooltipOffsetY = -(tooltipradius * 3);
    const TooltipOffsetX = 0;

    svgElement.marker = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgElement.marker.setAttribute("id", "marker");
    svgElement.marker.setAttribute("r", markerradius);
    this.marker = svgElement.marker;
    svgElement.appendChild(svgElement.marker);

    svgElement.tooltip = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    svgElement.tooltip.setAttribute("id", "colorTooltip");
    svgElement.tooltip.setAttribute("r", tooltipradius);
    svgElement.tooltip.setAttribute("cx", TooltipOffsetX);
    svgElement.tooltip.setAttribute("cy", TooltipOffsetY);
    this.tooltip = svgElement.tooltip;
    svgElement.appendChild(svgElement.tooltip);
  }

  segmentationChange() {
    if (this.backgroundLayer) {
      this.drawColorWheel();
    }
  }
}
customElements.define("ha-color-picker", HaColorPicker);


/***/ }),

/***/ "./src/components/ha-labeled-slider.js":
/*!*********************************************!*\
  !*** ./src/components/ha-labeled-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");






class HaLabeledSlider extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: block;
        }

        .title {
          margin-bottom: 16px;
          opacity: var(--dark-primary-opacity);
        }

        ha-icon {
          float: left;
          margin-top: 4px;
          opacity: var(--dark-secondary-opacity);
        }

        ha-paper-slider {
          background-image: var(--ha-slider-background);
        }
      </style>

      <div class="title">[[caption]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-paper-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-paper-slider>
      </div>
    `;
  }

  static get properties() {
    return {
      caption: String,
      disabled: Boolean,
      min: Number,
      max: Number,
      pin: Boolean,
      step: Number,

      extra: {
        type: Boolean,
        value: false,
      },
      ignoreBarTouch: {
        type: Boolean,
        value: true,
      },
      icon: {
        type: String,
        value: "",
      },
      value: {
        type: Number,
        notify: true,
      },
    };
  }
}

customElements.define("ha-labeled-slider", HaLabeledSlider);


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

/***/ "./src/components/ha-paper-icon-button-arrow-prev.ts":
/*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-prev.ts ***!
  \***********************************************************/
/*! exports provided: HaPaperIconButtonArrowPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonArrowPrev", function() { return HaPaperIconButtonArrowPrev; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");

const paperIconButtonClass = customElements.get("paper-icon-button");
class HaPaperIconButtonArrowPrev extends paperIconButtonClass {
    connectedCallback() {
        super.connectedCallback();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            this.icon =
                window.getComputedStyle(this).direction === "ltr"
                    ? this.hassio
                        ? "hassio:arrow-left"
                        : "hass:arrow-left"
                    : this.hassio
                        ? "hassio:arrow-right"
                        : "hass:arrow-right";
        }, 100);
    }
}
customElements.define("ha-paper-icon-button-arrow-prev", HaPaperIconButtonArrowPrev);


/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");


/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */
const PaperSliderClass = customElements.get("paper-slider");

class HaPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }
}
customElements.define("ha-paper-slider", HaPaperSlider);


/***/ }),

/***/ "./src/components/ha-water_heater-control.js":
/*!***************************************************!*\
  !*** ./src/components/ha-water_heater-control.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");







/*
 * @appliesMixin EventsMixin
 */
class HaWaterHeaterControl extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      value: {
        type: Number,
        observer: "valueChanged",
      },
      units: {
        type: String,
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      step: {
        type: Number,
        value: 1,
      },
    };
  }

  temperatureStateInFlux(inFlux) {
    this.$.target_temperature.classList.toggle("in-flux", inFlux);
  }

  incrementValue() {
    const newval = this.value + this.step;
    if (this.value < this.max) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }
    if (newval <= this.max) {
      // If no initial target_temp
      // this forces control to start
      // from the min configured instead of 0
      if (newval <= this.min) {
        this.value = this.min;
      } else {
        this.value = newval;
      }
    } else {
      this.value = this.max;
    }
  }

  decrementValue() {
    const newval = this.value - this.step;
    if (this.value > this.min) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }
    if (newval >= this.min) {
      this.value = newval;
    } else {
      this.value = this.min;
    }
  }

  valueChanged() {
    // when the last_changed timestamp is changed,
    // trigger a potential event fire in
    // the future, as long as last changed is far enough in the
    // past.
    if (this.last_changed) {
      window.setTimeout(() => {
        const now = Date.now();
        if (now - this.last_changed >= 2000) {
          this.fire("change");
          this.temperatureStateInFlux(false);
          this.last_changed = null;
        }
      }, 2010);
    }
  }
}

customElements.define("ha-water_heater-control", HaWaterHeaterControl);


/***/ }),

/***/ "./src/components/paper-time-input.js":
/*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
/*! exports provided: PaperTimeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperTimeInput", function() { return PaperTimeInput; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/







class PaperTimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          on-change="_shouldFormatHour"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          on-change="_formatMin"
          required=""
          auto-validate="[[autoValidate]]"
          prevent-invalid-input=""
          maxlength="2"
          max="59"
          min="0"
          no-label-float=""
          disabled="[[disabled]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  static get properties() {
    return {
      /**
       * Label for the input
       */
      label: {
        type: String,
        value: "Time",
      },
      /**
       * auto validate time inputs
       */
      autoValidate: {
        type: Boolean,
        value: true,
      },
      /**
       * hides the label
       */
      hideLabel: {
        type: Boolean,
        value: false,
      },
      /**
       * 12 or 24 hr format
       */
      format: {
        type: Number,
        value: 12,
      },
      /**
       * disables the inputs
       */
      disabled: {
        type: Boolean,
        value: false,
      },
      /**
       * hour
       */
      hour: {
        type: String,
        notify: true,
      },
      /**
       * minute
       */
      min: {
        type: String,
        notify: true,
      },
      /**
       * AM or PM
       */
      amPm: {
        type: String,
        notify: true,
        value: "AM",
      },
      /**
       * Formatted time string
       */
      value: {
        type: String,
        notify: true,
        readOnly: true,
        computed: "_computeTime(min, hour, amPm)",
      },
    };
  }

  /**
   * Validate the inputs
   * @return {boolean}
   */
  validate() {
    var valid = true;
    // Validate hour & min fields
    if (!this.$.hour.validate() | !this.$.min.validate()) {
      valid = false;
    }
    // Validate AM PM if 12 hour time
    if (this.format === 12 && !this.$.dropdown.validate()) {
      valid = false;
    }
    return valid;
  }

  /**
   * Create time string
   */
  _computeTime(min, hour, amPm) {
    if (hour && min) {
      // No ampm on 24 hr time
      if (this.format === 24) {
        amPm = "";
      }
      return hour + ":" + min + " " + amPm;
    }
    return undefined;
  }

  /**
   * Format min
   */
  _formatMin() {
    if (this.min.toString().length === 1) {
      this.min = this.min < 10 ? "0" + this.min : this.min;
    }
  }

  /**
   * Hour needs a leading zero in 24hr format
   */
  _shouldFormatHour() {
    if (this.format === 24 && this.hour.toString().length === 1) {
      this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
    }
  }

  /**
   * 24 hour format has a max hr of 23
   */
  _computeHourMax(format) {
    if (format === 12) {
      return format;
    }
    return 23;
  }

  _equal(n1, n2) {
    return n1 === n2;
  }
}

customElements.define("paper-time-input", PaperTimeInput);


/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (hass, entry) => {
    if (entry.name) {
        return entry.name;
    }
    const state = hass.states[entry.entity_id];
    return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({ type: "config/entity_registry/update", entity_id: entityId }, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
    type: "config/entity_registry/remove",
    entity_id: entityId,
});
const fetchEntityRegistry = (conn) => conn.sendMessagePromise({
    type: "config/entity_registry/list",
});
const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then((entities) => store.setState(entities, true)), 500, true), "entity_registry_updated");
const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);


/***/ }),

/***/ "./src/dialogs/ha-more-info-dialog.js":
/*!********************************************!*\
  !*** ./src/dialogs/ha-more-info-dialog.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _more_info_more_info_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info/more-info-controls */ "./src/dialogs/more-info/more-info-controls.js");
/* harmony import */ var _more_info_more_info_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info/more-info-settings */ "./src/dialogs/more-info/more-info-settings.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js");















/*
 * @appliesMixin DialogMixin
 */
class HaMoreInfoDialog extends Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="ha-style-dialog paper-dialog-shared-styles">
        :host {
          font-size: 14px;
          width: 365px;
          border-radius: 2px;
        }

        more-info-controls,
        more-info-settings {
          --more-info-header-background: var(--secondary-background-color);
          --more-info-header-color: var(--primary-text-color);
          --ha-more-info-app-toolbar-title: {
            /* Design guideline states 24px, changed to 16 to align with state info */
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            /* webkit and blink still support simple multiline text-overflow */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          more-info-controls,
          more-info-settings {
            --more-info-header-background: var(--primary-color);
            --more-info-header-color: var(--text-primary-color);
          }
          :host {
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          :host::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        :host([data-domain="camera"]) {
          width: auto;
        }

        :host([data-domain="history_graph"]),
        :host([large]) {
          width: 90%;
        }
      </style>

      <template is="dom-if" if="[[!_page]]">
        <more-info-controls
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          dialog-element="[[_dialogElement]]"
          can-configure="[[_registryInfo]]"
          large="{{large}}"
        ></more-info-controls>
      </template>
      <template is="dom-if" if='[[_equals(_page, "settings")]]'>
        <more-info-settings
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          registry-info="{{_registryInfo}}"
        ></more-info-settings>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        computed: "_computeStateObj(hass)",
        observer: "_stateObjChanged",
      },

      large: {
        type: Boolean,
        reflectToAttribute: true,
        observer: "_largeChanged",
      },

      _dialogElement: Object,
      _registryInfo: Object,

      _page: {
        type: String,
        value: null,
      },

      dataDomain: {
        computed: "_computeDomain(stateObj)",
        reflectToAttribute: true,
      },
    };
  }

  static get observers() {
    return ["_dialogOpenChanged(opened)"];
  }

  ready() {
    super.ready();
    this._dialogElement = this;
    this.addEventListener("more-info-page", (ev) => {
      this._page = ev.detail.page;
    });
  }

  _computeDomain(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(stateObj) : "";
  }

  _computeStateObj(hass) {
    return hass.states[hass.moreInfoEntityId] || null;
  }

  async _stateObjChanged(newVal, oldVal) {
    if (!newVal) {
      this.setProperties({
        opened: false,
        _page: null,
        _registryInfo: null,
        large: false,
      });
      return;
    }

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        // allow dialog to render content before showing it so it will be
        // positioned correctly.
        this.opened = true;
      })
    );

    if (
      !Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(this.hass, "config") ||
      (oldVal && oldVal.entity_id === newVal.entity_id)
    ) {
      return;
    }

    if (this.hass.user.is_admin) {
      try {
        const info = await this.hass.callWS({
          type: "config/entity_registry/get",
          entity_id: newVal.entity_id,
        });
        this._registryInfo = info;
      } catch (err) {
        this._registryInfo = null;
      }
    }
  }

  _dialogOpenChanged(newVal) {
    if (!newVal && this.stateObj) {
      this.fire("hass-more-info", { entityId: null });
    }
  }

  _equals(a, b) {
    return a === b;
  }

  _largeChanged() {
    this.notifyResize();
  }
}
customElements.define("ha-more-info-dialog", HaMoreInfoDialog);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js":
/*!*************************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-alarm_control_panel.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");









class MoreInfoAlarmControlPanel extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex"></style>
      <style>
        paper-input {
          margin: auto;
          max-width: 200px;
        }
        .pad {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .pad div {
          display: flex;
          flex-direction: column;
        }
        .pad mwc-button {
          width: 80px;
        }
        .actions mwc-button {
          min-width: 160px;
          margin-bottom: 16px;
        }
        mwc-button.disarm {
          color: var(--google-red-500);
        }
      </style>

      <template is="dom-if" if="[[_codeFormat]]">
        <paper-input
          label="[[localize('ui.card.alarm_control_panel.code')]]"
          value="{{_enteredCode}}"
          type="password"
          disabled="[[!_inputEnabled]]"
        ></paper-input>

        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">
          <div class="pad">
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="1"
                raised
                >1</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="4"
                raised
                >4</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="7"
                raised
                >7</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="2"
                raised
                >2</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="5"
                raised
                >5</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="8"
                raised
                >8</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="0"
                raised
                >0</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="3"
                raised
                >3</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="6"
                raised
                >6</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="9"
                raised
                >9</mwc-button
              >
              <mwc-button
                on-click="_clearEnteredCode"
                disabled="[[!_inputEnabled]]"
                raised
              >
                [[localize('ui.card.alarm_control_panel.clear_code')]]
              </mwc-button>
            </div>
          </div>
        </template>
      </template>

      <div class="layout horizontal center-justified actions">
        <template is="dom-if" if="[[_disarmVisible]]">
          <mwc-button
            raised
            class="disarm"
            on-click="_callService"
            data-service="alarm_disarm"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.disarm')]]
          </mwc-button>
        </template>
        <template is="dom-if" if="[[_armVisible]]">
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_home"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_home')]]
          </mwc-button>
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_away"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_away')]]
          </mwc-button>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "_stateObjChanged",
      },
      _enteredCode: {
        type: String,
        value: "",
      },
      _codeFormat: {
        type: String,
        value: "",
      },
      _codeValid: {
        type: Boolean,
        computed:
          "_validateCode(_enteredCode,  _codeFormat,  _armVisible, _codeArmRequired)",
      },
      _disarmVisible: {
        type: Boolean,
        value: false,
      },
      _armVisible: {
        type: Boolean,
        value: false,
      },
      _inputEnabled: {
        type: Boolean,
        value: false,
      },
    };
  }

  constructor() {
    super();
    this._armedStates = [
      "armed_home",
      "armed_away",
      "armed_night",
      "armed_custom_bypass",
    ];
  }

  _stateObjChanged(newVal, oldVal) {
    if (newVal) {
      const state = newVal.state;
      const props = {
        _codeFormat: newVal.attributes.code_format,
        _armVisible: state === "disarmed",
        _codeArmRequired: newVal.attributes.code_arm_required,
        _disarmVisible:
          this._armedStates.includes(state) ||
          state === "pending" ||
          state === "triggered" ||
          state === "arming",
      };
      props._inputEnabled = props._disarmVisible || props._armVisible;
      this.setProperties(props);
    }
    if (oldVal) {
      setTimeout(() => {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "iron-resize");
      }, 500);
    }
  }

  _isNumber(format) {
    return format === "Number";
  }

  _validateCode(code, format, armVisible, codeArmRequired) {
    return !format || code.length > 0 || (armVisible && !codeArmRequired);
  }

  _digitClicked(ev) {
    this._enteredCode += ev.target.getAttribute("data-digit");
  }

  _clearEnteredCode() {
    this._enteredCode = "";
  }

  _callService(ev) {
    const service = ev.target.getAttribute("data-service");
    const data = {
      entity_id: this.stateObj.entity_id,
      code: this._enteredCode,
    };
    this.hass.callService("alarm_control_panel", service, data).then(() => {
      this._enteredCode = "";
    });
  }
}
customElements.define(
  "more-info-alarm_control_panel",
  MoreInfoAlarmControlPanel
);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-automation.js":
/*!****************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-automation.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");








class MoreInfoAutomation extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .actions {
          margin: 36px 0 8px 0;
          text-align: right;
        }
      </style>

      <div class="flex">
        <div>[[localize('ui.card.automation.last_triggered')]]:</div>
        <ha-relative-time
          hass="[[hass]]"
          datetime="[[stateObj.attributes.last_triggered]]"
        ></ha-relative-time>
      </div>

      <div class="actions">
        <mwc-button on-click="handleTriggerTapped">
          [[localize('ui.card.automation.trigger')]]
        </mwc-button>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
    };
  }

  handleTriggerTapped() {
    this.hass.callService("automation", "trigger", {
      entity_id: this.stateObj.entity_id,
    });
  }
}

customElements.define("more-info-automation", MoreInfoAutomation);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-camera.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-camera.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _components_ha_camera_stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-camera-stream */ "./src/components/ha-camera-stream.ts");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");






class MoreInfoCamera extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._attached = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this._attached = true;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._attached = false;
    }
    render() {
        if (!this._attached || !this.hass || !this.stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-camera-stream
        .hass="${this.hass}"
        .stateObj="${this.stateObj}"
        showcontrols
      ></ha-camera-stream>
      ${this._cameraPrefs
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <paper-checkbox
              .checked=${this._cameraPrefs.preload_stream}
              @change=${this._handleCheckboxChanged}
            >
              Preload stream
            </paper-checkbox>
          `
            : undefined}
    `;
    }
    updated(changedProps) {
        if (!changedProps.has("stateObj")) {
            return;
        }
        const oldState = changedProps.get("stateObj");
        const oldEntityId = oldState ? oldState.entity_id : undefined;
        const curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;
        // Same entity, ignore.
        if (curEntityId === oldEntityId) {
            return;
        }
        if (curEntityId &&
            this.hass.config.components.includes("stream") &&
            Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_3__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_2__["CAMERA_SUPPORT_STREAM"])) {
            // Fetch in background while we set up the video.
            this._fetchCameraPrefs();
        }
    }
    async _fetchCameraPrefs() {
        this._cameraPrefs = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_2__["fetchCameraPrefs"])(this.hass, this.stateObj.entity_id);
    }
    async _handleCheckboxChanged(ev) {
        const checkbox = ev.currentTarget;
        try {
            this._cameraPrefs = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_2__["updateCameraPrefs"])(this.hass, this.stateObj.entity_id, {
                preload_stream: checkbox.checked,
            });
        }
        catch (err) {
            alert(err.message);
            checkbox.checked = !checkbox.checked;
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      paper-checkbox {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--secondary-background-color);
        padding: 5px;
        border-bottom-left-radius: 6px;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], MoreInfoCamera.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], MoreInfoCamera.prototype, "stateObj", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], MoreInfoCamera.prototype, "_cameraPrefs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], MoreInfoCamera.prototype, "_attached", void 0);
customElements.define("more-info-camera", MoreInfoCamera);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-climate.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-climate.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_climate_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-climate-control */ "./src/components/ha-climate-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/climate */ "./src/data/climate.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");














class MoreInfoClimate extends lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"] {
    render() {
        if (!this.stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] ``;
        }
        const hass = this.hass;
        const stateObj = this.stateObj;
        const supportTargetTemperature = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_TARGET_TEMPERATURE"]);
        const supportTargetTemperatureRange = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE"]);
        const supportTargetHumidity = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_TARGET_HUMIDITY"]);
        const supportFanMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_FAN_MODE"]);
        const supportPresetMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_PRESET_MODE"]);
        const supportSwingMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_SWING_MODE"]);
        const supportAuxHeat = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_11__["CLIMATE_SUPPORT_AUX_HEAT"]);
        const temperatureStepSize = stateObj.attributes.target_temp_step ||
            (hass.config.unit_system.temperature.indexOf("F") === -1 ? 0.5 : 1);
        const rtlDirection = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_10__["computeRTLDirection"])(hass);
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
      <div
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_13__["classMap"])({
            "has-current_temperature": "current_temperature" in stateObj.attributes,
            "has-current_humidity": "current_humidity" in stateObj.attributes,
            "has-target_temperature": supportTargetTemperature,
            "has-target_temperature_range": supportTargetTemperatureRange,
            "has-target_humidity": supportTargetHumidity,
            "has-fan_mode": supportFanMode,
            "has-swing_mode": supportSwingMode,
            "has-aux_heat": supportAuxHeat,
            "has-preset_mode": supportPresetMode,
        })}
      >
        <div class="container-temperature">
          <div class=${stateObj.state}>
            ${supportTargetTemperature || supportTargetTemperatureRange
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                  <div>
                    ${hass.localize("ui.card.climate.target_temperature")}
                  </div>
                `
            : ""}
            ${stateObj.attributes.temperature
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                  <ha-climate-control
                    .value=${stateObj.attributes.temperature}
                    .units=${hass.config.unit_system.temperature}
                    .step=${temperatureStepSize}
                    .min=${stateObj.attributes.min_temp}
                    .max=${stateObj.attributes.max_temp}
                    @change=${this._targetTemperatureChanged}
                  ></ha-climate-control>
                `
            : ""}
            ${stateObj.attributes.target_temp_low ||
            stateObj.attributes.target_temp_high
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                  <ha-climate-control
                    .value=${stateObj.attributes.target_temp_low}
                    .units=${hass.config.unit_system.temperature}
                    .step=${temperatureStepSize}
                    .min=${stateObj.attributes.min_temp}
                    .max=${stateObj.attributes.target_temp_high}
                    class="range-control-left"
                    @change=${this._targetTemperatureLowChanged}
                  ></ha-climate-control>
                  <ha-climate-control
                    .value=${stateObj.attributes.target_temp_high}
                    .units=${hass.config.unit_system.temperature}
                    .step=${temperatureStepSize}
                    .min=${stateObj.attributes.target_temp_low}
                    .max=${stateObj.attributes.max_temp}
                    class="range-control-right"
                    @change=${this._targetTemperatureHighChanged}
                  ></ha-climate-control>
                `
            : ""}
          </div>
        </div>

        ${supportTargetHumidity
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
              <div class="container-humidity">
                <div>${hass.localize("ui.card.climate.target_humidity")}</div>
                <div class="single-row">
                  <div class="target-humidity">
                    ${stateObj.attributes.humidity} %
                  </div>
                  <ha-paper-slider
                    class="humidity"
                    step="1"
                    pin
                    ignore-bar-touch
                    dir=${rtlDirection}
                    .min=${stateObj.attributes.min_humidity}
                    .max=${stateObj.attributes.max_humidity}
                    .secondaryProgress=${stateObj.attributes.max_humidity}
                    .value=${stateObj.attributes.humidity}
                    @change=${this._targetHumiditySliderChanged}
                  >
                  </ha-paper-slider>
                </div>
              </div>
            `
            : ""}

        <div class="container-hvac_modes">
          <div class="controls">
            <ha-paper-dropdown-menu
              label-float
              dynamic-align
              .label=${hass.localize("ui.card.climate.operation")}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${stateObj.state}
                @selected-changed=${this._handleOperationmodeChanged}
              >
                ${stateObj.attributes.hvac_modes
            .concat()
            .sort(_data_climate__WEBPACK_IMPORTED_MODULE_11__["compareClimateHvacModes"])
            .map((mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                      <paper-item item-name=${mode}>
                        ${hass.localize(`state.climate.${mode}`)}
                      </paper-item>
                    `)}
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </div>

        ${supportPresetMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
              <div class="container-preset_modes">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${hass.localize("ui.card.climate.preset_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${stateObj.attributes.preset_mode}
                    @selected-changed=${this._handlePresetmodeChanged}
                  >
                    ${stateObj.attributes.preset_modes.map((mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                        <paper-item item-name=${mode}>
                          ${hass.localize(`state_attributes.climate.preset_mode.${mode}`) || mode}
                        </paper-item>
                      `)}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `
            : ""}
        ${supportFanMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
              <div class="container-fan_list">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${hass.localize("ui.card.climate.fan_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${stateObj.attributes.fan_mode}
                    @selected-changed=${this._handleFanmodeChanged}
                  >
                    ${stateObj.attributes.fan_modes.map((mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                        <paper-item item-name=${mode}>
                          ${hass.localize(`state_attributes.climate.fan_mode.${mode}`) || mode}
                        </paper-item>
                      `)}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `
            : ""}
        ${supportSwingMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
              <div class="container-swing_list">
                <ha-paper-dropdown-menu
                  label-float
                  dynamic-align
                  .label=${hass.localize("ui.card.climate.swing_mode")}
                >
                  <paper-listbox
                    slot="dropdown-content"
                    attr-for-selected="item-name"
                    .selected=${stateObj.attributes.swing_mode}
                    @selected-changed=${this._handleSwingmodeChanged}
                  >
                    ${stateObj.attributes.swing_modes.map((mode) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                        <paper-item item-name=${mode}>${mode}</paper-item>
                      `)}
                  </paper-listbox>
                </ha-paper-dropdown-menu>
              </div>
            `
            : ""}
        ${supportAuxHeat
            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
              <div class="container-aux_heat">
                <div class="center horizontal layout single-row">
                  <div class="flex">
                    ${hass.localize("ui.card.climate.aux_heat")}
                  </div>
                  <ha-switch
                    .checked=${stateObj.attributes.aux_heat === "on"}
                    @change=${this._auxToggleChanged}
                  ></ha-switch>
                </div>
              </div>
            `
            : ""}
      </div>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!changedProps.has("stateObj") || !this.stateObj) {
            return;
        }
        if (this._resizeDebounce) {
            clearTimeout(this._resizeDebounce);
        }
        this._resizeDebounce = window.setTimeout(() => {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "iron-resize");
            this._resizeDebounce = undefined;
        }, 500);
    }
    _targetTemperatureChanged(ev) {
        const newVal = ev.target.value;
        this._callServiceHelper(this.stateObj.attributes.temperature, newVal, "set_temperature", { temperature: newVal });
    }
    _targetTemperatureLowChanged(ev) {
        const newVal = ev.currentTarget.value;
        this._callServiceHelper(this.stateObj.attributes.target_temp_low, newVal, "set_temperature", {
            target_temp_low: newVal,
            target_temp_high: this.stateObj.attributes.target_temp_high,
        });
    }
    _targetTemperatureHighChanged(ev) {
        const newVal = ev.currentTarget.value;
        this._callServiceHelper(this.stateObj.attributes.target_temp_high, newVal, "set_temperature", {
            target_temp_low: this.stateObj.attributes.target_temp_low,
            target_temp_high: newVal,
        });
    }
    _targetHumiditySliderChanged(ev) {
        const newVal = ev.target.value;
        this._callServiceHelper(this.stateObj.attributes.humidity, newVal, "set_humidity", { humidity: newVal });
    }
    _auxToggleChanged(ev) {
        const newVal = ev.target.checked;
        this._callServiceHelper(this.stateObj.attributes.aux_heat === "on", newVal, "set_aux_heat", { aux_heat: newVal });
    }
    _handleFanmodeChanged(ev) {
        const newVal = ev.detail.value;
        this._callServiceHelper(this.stateObj.attributes.fan_mode, newVal, "set_fan_mode", { fan_mode: newVal });
    }
    _handleOperationmodeChanged(ev) {
        const newVal = ev.detail.value;
        this._callServiceHelper(this.stateObj.state, newVal, "set_hvac_mode", {
            hvac_mode: newVal,
        });
    }
    _handleSwingmodeChanged(ev) {
        const newVal = ev.detail.value;
        this._callServiceHelper(this.stateObj.attributes.swing_mode, newVal, "set_swing_mode", { swing_mode: newVal });
    }
    _handlePresetmodeChanged(ev) {
        const newVal = ev.detail.value || null;
        this._callServiceHelper(this.stateObj.attributes.preset_mode, newVal, "set_preset_mode", { preset_mode: newVal });
    }
    async _callServiceHelper(oldVal, newVal, service, data) {
        if (oldVal === newVal) {
            return;
        }
        data.entity_id = this.stateObj.entity_id;
        const curState = this.stateObj;
        await this.hass.callService("climate", service, data);
        // We reset stateObj to re-sync the inputs with the state. It will be out
        // of sync if our service call did not result in the entity to be turned
        // on. Since the state is not changing, the resync is not called automatic.
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // No need to resync if we received a new state.
        if (this.stateObj !== curState) {
            return;
        }
        this.stateObj = undefined;
        await this.updateComplete;
        // Only restore if not set yet by a state change
        if (this.stateObj === undefined) {
            this.stateObj = curState;
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["css"] `
      :host {
        color: var(--primary-text-color);
      }

      .container-hvac_modes iron-icon,
      .container-fan_list iron-icon,
      .container-swing_list iron-icon {
        margin: 22px 16px 0 0;
      }

      ha-paper-dropdown-menu {
        width: 100%;
      }

      paper-item {
        cursor: pointer;
      }

      ha-paper-slider {
        width: 100%;
      }

      .container-humidity .single-row {
        display: flex;
        height: 50px;
      }

      .target-humidity {
        width: 90px;
        font-size: 200%;
        margin: auto;
        direction: ltr;
      }

      ha-climate-control.range-control-left,
      ha-climate-control.range-control-right {
        float: left;
        width: 46%;
      }
      ha-climate-control.range-control-left {
        margin-right: 4%;
      }
      ha-climate-control.range-control-right {
        margin-left: 4%;
      }

      .humidity {
        --paper-slider-active-color: var(--paper-blue-400);
        --paper-slider-secondary-color: var(--paper-blue-400);
      }

      .single-row {
        padding: 8px 0;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], MoreInfoClimate.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], MoreInfoClimate.prototype, "stateObj", void 0);
customElements.define("more-info-climate", MoreInfoClimate);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-configurator.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-configurator.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_input_iron_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.ts");










class MoreInfoConfigurator extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex"></style>
      <style>
        p {
          margin: 8px 0;
        }

        a {
          color: var(--primary-color);
        }

        p > img {
          max-width: 100%;
        }

        p.center {
          text-align: center;
        }

        p.error {
          color: #c62828;
        }

        p.submit {
          text-align: center;
          height: 41px;
        }

        paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }

        [hidden] {
          display: none;
        }
      </style>

      <div class="layout vertical">
        <template is="dom-if" if="[[isConfigurable]]">
          <ha-markdown
            content="[[stateObj.attributes.description]]"
          ></ha-markdown>

          <p class="error" hidden$="[[!stateObj.attributes.errors]]">
            [[stateObj.attributes.errors]]
          </p>

          <template is="dom-repeat" items="[[stateObj.attributes.fields]]">
            <paper-input
              label="[[item.name]]"
              name="[[item.id]]"
              type="[[item.type]]"
              on-change="fieldChanged"
            ></paper-input>
          </template>

          <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">
            <mwc-button
              raised=""
              disabled="[[isConfiguring]]"
              on-click="submitClicked"
            >
              <paper-spinner
                active="[[isConfiguring]]"
                hidden="[[!isConfiguring]]"
                alt="Configuring"
              ></paper-spinner>
              [[stateObj.attributes.submit_caption]]
            </mwc-button>
          </p>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object,
      },

      action: {
        type: String,
        value: "display",
      },

      isConfigurable: {
        type: Boolean,
        computed: "computeIsConfigurable(stateObj)",
      },

      isConfiguring: {
        type: Boolean,
        value: false,
      },

      fieldInput: {
        type: Object,
        value: function() {
          return {};
        },
      },
    };
  }

  computeIsConfigurable(stateObj) {
    return stateObj.state === "configure";
  }

  fieldChanged(ev) {
    var el = ev.target;
    this.fieldInput[el.name] = el.value;
  }

  submitClicked() {
    var data = {
      configure_id: this.stateObj.attributes.configure_id,
      fields: this.fieldInput,
    };

    this.isConfiguring = true;

    this.hass.callService("configurator", "configure", data).then(
      function() {
        this.isConfiguring = false;
      }.bind(this),
      function() {
        this.isConfiguring = false;
      }.bind(this)
    );
  }
}

customElements.define("more-info-configurator", MoreInfoConfigurator);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-content.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-content.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _more_info_alarm_control_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-info-alarm_control_panel */ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js");
/* harmony import */ var _more_info_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-info-automation */ "./src/dialogs/more-info/controls/more-info-automation.js");
/* harmony import */ var _more_info_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-info-camera */ "./src/dialogs/more-info/controls/more-info-camera.ts");
/* harmony import */ var _more_info_climate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-info-climate */ "./src/dialogs/more-info/controls/more-info-climate.ts");
/* harmony import */ var _more_info_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info-configurator */ "./src/dialogs/more-info/controls/more-info-configurator.js");
/* harmony import */ var _more_info_cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info-cover */ "./src/dialogs/more-info/controls/more-info-cover.js");
/* harmony import */ var _more_info_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-info-default */ "./src/dialogs/more-info/controls/more-info-default.js");
/* harmony import */ var _more_info_fan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-info-fan */ "./src/dialogs/more-info/controls/more-info-fan.js");
/* harmony import */ var _more_info_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-info-group */ "./src/dialogs/more-info/controls/more-info-group.js");
/* harmony import */ var _more_info_history_graph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-info-history_graph */ "./src/dialogs/more-info/controls/more-info-history_graph.js");
/* harmony import */ var _more_info_input_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-info-input_datetime */ "./src/dialogs/more-info/controls/more-info-input_datetime.js");
/* harmony import */ var _more_info_light__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-info-light */ "./src/dialogs/more-info/controls/more-info-light.js");
/* harmony import */ var _more_info_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-info-lock */ "./src/dialogs/more-info/controls/more-info-lock.js");
/* harmony import */ var _more_info_media_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./more-info-media_player */ "./src/dialogs/more-info/controls/more-info-media_player.js");
/* harmony import */ var _more_info_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./more-info-script */ "./src/dialogs/more-info/controls/more-info-script.js");
/* harmony import */ var _more_info_sun__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./more-info-sun */ "./src/dialogs/more-info/controls/more-info-sun.js");
/* harmony import */ var _more_info_timer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./more-info-timer */ "./src/dialogs/more-info/controls/more-info-timer.ts");
/* harmony import */ var _more_info_updater__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more-info-updater */ "./src/dialogs/more-info/controls/more-info-updater.js");
/* harmony import */ var _more_info_vacuum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./more-info-vacuum */ "./src/dialogs/more-info/controls/more-info-vacuum.js");
/* harmony import */ var _more_info_water_heater__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./more-info-water_heater */ "./src/dialogs/more-info/controls/more-info-water_heater.js");
/* harmony import */ var _more_info_weather__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./more-info-weather */ "./src/dialogs/more-info/controls/more-info-weather.js");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
























class MoreInfoContent extends lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"] {
    static get properties() {
        return {
            hass: {},
            stateObj: {},
        };
    }
    firstUpdated() {
        this.style.position = "relative";
        this.style.display = "block";
    }
    // This is not a lit element, but an updating element, so we implement update
    update(changedProps) {
        super.update(changedProps);
        const stateObj = this.stateObj;
        const hass = this.hass;
        if (!stateObj || !hass) {
            if (this.lastChild) {
                this._detachedChild = this.lastChild;
                // Detach child to prevent it from doing work.
                this.removeChild(this.lastChild);
            }
            return;
        }
        if (this._detachedChild) {
            this.appendChild(this._detachedChild);
            this._detachedChild = undefined;
        }
        const moreInfoType = stateObj.attributes && "custom_ui_more_info" in stateObj.attributes
            ? stateObj.attributes.custom_ui_more_info
            : "more-info-" + Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_22__["stateMoreInfoType"])(stateObj);
        Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_23__["default"])(this, moreInfoType.toUpperCase(), {
            hass,
            stateObj,
        });
    }
}
customElements.define("more-info-content", MoreInfoContent);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-cover.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-cover.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");














const FEATURE_CLASS_NAMES = {
  128: "has-set_tilt_position",
};
class MoreInfoCover extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        .current_position,
        .tilt {
          max-height: 0px;
          overflow: hidden;
        }

        .has-current_position .current_position,
        .has-set_tilt_position .tilt,
        .has-current_tilt_position .tilt {
          max-height: 208px;
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <div class$="[[computeClassNames(stateObj)]]">
        <div class="current_position">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.position')]]"
            pin=""
            value="{{coverPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetPosition]]"
            on-change="coverPositionSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="tilt">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.tilt_position')]]"
            pin=""
            extra=""
            value="{{coverTiltPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetTiltPosition]]"
            on-change="coverTiltPositionSliderChanged"
          >
            <ha-cover-tilt-controls
              slot="extra"
              hidden$="[[entityObj.isTiltOnly]]"
              hass="[[hass]]"
              state-obj="[[stateObj]]"
            ></ha-cover-tilt-controls>
          </ha-labeled-slider>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "stateObjChanged",
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)",
      },
      coverPositionSliderValue: Number,
      coverTiltPositionSliderValue: Number,
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
  }

  stateObjChanged(newVal) {
    if (newVal) {
      this.setProperties({
        coverPositionSliderValue: newVal.attributes.current_position,
        coverTiltPositionSliderValue: newVal.attributes.current_tilt_position,
      });
    }
  }

  computeClassNames(stateObj) {
    var classes = [
      Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__["attributeClassNames"])(stateObj, [
        "current_position",
        "current_tilt_position",
      ]),
      Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_7__["featureClassNames"])(stateObj, FEATURE_CLASS_NAMES),
    ];
    return classes.join(" ");
  }

  coverPositionSliderChanged(ev) {
    this.entityObj.setCoverPosition(ev.target.value);
  }

  coverTiltPositionSliderChanged(ev) {
    this.entityObj.setCoverTiltPosition(ev.target.value);
  }
}

customElements.define("more-info-cover", MoreInfoCover);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-default.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-default.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");





class MoreInfoDefault extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object,
      },
    };
  }
}

customElements.define("more-info-default", MoreInfoDefault);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-fan.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-fan.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
















/*
 * @appliesMixin EventsMixin
 */
class MoreInfoFan extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="iron-flex"></style>
      <style>
        .container-speed_list,
        .container-direction,
        .container-oscillating {
          display: none;
        }

        .has-speed_list .container-speed_list,
        .has-direction .container-direction,
        .has-oscillating .container-oscillating {
          display: block;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-speed_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.fan.speed')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.speed]]"
              on-selected-changed="speedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <div class="container-oscillating">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
            <ha-switch
              checked="[[oscillationToggleChecked]]"
              on-change="oscillationToggleChanged"
            >
            </ha-switch>
          </div>
        </div>

        <div class="container-direction">
          <div class="direction">
            <div>[[localize('ui.card.fan.direction')]]</div>
            <paper-icon-button
              icon="hass:rotate-left"
              on-click="onDirectionReverse"
              title="[[localize('ui.card.fan.reverse')]]"
              disabled="[[computeIsRotatingReverse(stateObj)]]"
            ></paper-icon-button>
            <paper-icon-button
              icon="hass:rotate-right"
              on-click="onDirectionForward"
              title="[[localize('ui.card.fan.forward')]]"
              disabled="[[computeIsRotatingForward(stateObj)]]"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="speed,speed_list,oscillating,direction"
      ></ha-attributes>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      stateObj: {
        type: Object,
        observer: "stateObjChanged",
      },

      oscillationToggleChecked: {
        type: Boolean,
      },
    };
  }

  stateObjChanged(newVal, oldVal) {
    if (newVal) {
      this.setProperties({
        oscillationToggleChecked: newVal.attributes.oscillating,
      });
    }

    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  computeClassNames(stateObj) {
    return (
      "more-info-fan " +
      Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["attributeClassNames"])(stateObj, ["oscillating", "speed_list", "direction"])
    );
  }

  speedChanged(ev) {
    var oldVal = this.stateObj.attributes.speed;
    var newVal = ev.detail.value;

    if (!newVal || oldVal === newVal) return;

    this.hass.callService("fan", "turn_on", {
      entity_id: this.stateObj.entity_id,
      speed: newVal,
    });
  }

  oscillationToggleChanged(ev) {
    var oldVal = this.stateObj.attributes.oscillating;
    var newVal = ev.target.checked;

    if (oldVal === newVal) return;

    this.hass.callService("fan", "oscillate", {
      entity_id: this.stateObj.entity_id,
      oscillating: newVal,
    });
  }

  onDirectionReverse() {
    this.hass.callService("fan", "set_direction", {
      entity_id: this.stateObj.entity_id,
      direction: "reverse",
    });
  }

  onDirectionForward() {
    this.hass.callService("fan", "set_direction", {
      entity_id: this.stateObj.entity_id,
      direction: "forward",
    });
  }

  computeIsRotatingReverse(stateObj) {
    return stateObj.attributes.direction === "reverse";
  }

  computeIsRotatingForward(stateObj) {
    return stateObj.attributes.direction === "forward";
  }
}

customElements.define("more-info-fan", MoreInfoFan);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-group.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-group.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");









class MoreInfoGroup extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .child-card {
          margin-bottom: 8px;
        }

        .child-card:last-child {
          margin-bottom: 0;
        }
      </style>

      <div id="groupedControlDetails"></div>
      <template is="dom-repeat" items="[[states]]" as="state">
        <div class="child-card">
          <state-card-content
            state-obj="[[state]]"
            hass="[[hass]]"
          ></state-card-content>
        </div>
      </template>
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

      states: {
        type: Array,
        computed: "computeStates(stateObj, hass)",
      },
    };
  }

  static get observers() {
    return ["statesChanged(stateObj, states)"];
  }

  computeStates(stateObj, hass) {
    var states = [];
    var entIds = stateObj.attributes.entity_id || [];

    for (var i = 0; i < entIds.length; i++) {
      var state = hass.states[entIds[i]];

      if (state) {
        states.push(state);
      }
    }

    return states;
  }

  statesChanged(stateObj, states) {
    let groupDomainStateObj = false;
    let groupDomain = false;

    if (states && states.length > 0) {
      const baseStateObj = states.find((s) => s.state === "on") || states[0];
      groupDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(baseStateObj);

      // Groups need to be filtered out or we'll show content of
      // first child above the children of the current group
      if (groupDomain !== "group") {
        groupDomainStateObj = {
          ...baseStateObj,
          entity_id: stateObj.entity_id,
          attributes: { ...baseStateObj.attributes },
        };

        for (let i = 0; i < states.length; i++) {
          if (groupDomain !== Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(states[i])) {
            groupDomainStateObj = false;
            break;
          }
        }
      }
    }

    if (!groupDomainStateObj) {
      const el = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this.$.groupedControlDetails);
      if (el.lastChild) {
        el.removeChild(el.lastChild);
      }
    } else {
      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__["default"])(
        this.$.groupedControlDetails,
        "MORE-INFO-" + groupDomain.toUpperCase(),
        { stateObj: groupDomainStateObj, hass: this.hass }
      );
    }
  }
}

customElements.define("more-info-group", MoreInfoGroup);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-history_graph.js":
/*!*******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-history_graph.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_history_graph_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");






class MoreInfoHistoryGraph extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: block;
          margin-bottom: 6px;
        }
      </style>
      <ha-history_graph-card
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog=""
      >
        <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
      </ha-history_graph-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
    };
  }
}
customElements.define("more-info-history_graph", MoreInfoHistoryGraph);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-input_datetime.js":
/*!********************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-input_datetime.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");











class DatetimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
          <div>
            <vaadin-date-picker
              id="dateInput"
              on-value-changed="dateTimeChanged"
              label="Date"
              value="{{selectedDate}}"
            ></vaadin-date-picker>
          </div>
        </template>
        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
          <div>
            <paper-time-input
              hour="{{selectedHour}}"
              min="{{selectedMinute}}"
              format="24"
            ></paper-time-input>
          </div>
        </template>
      </div>
    `;
  }

  constructor() {
    super();
    this.is_ready = false;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      stateObj: {
        type: Object,
        observer: "stateObjChanged",
      },

      selectedDate: {
        type: String,
        observer: "dateTimeChanged",
      },

      selectedHour: {
        type: Number,
        observer: "dateTimeChanged",
      },

      selectedMinute: {
        type: Number,
        observer: "dateTimeChanged",
      },
    };
  }

  ready() {
    super.ready();
    this.is_ready = true;
  }

  /* Convert the date in the stateObj into a string useable by vaadin-date-picker */
  getDateString(stateObj) {
    if (stateObj.state === "unknown") {
      return "";
    }
    var monthFiller;
    if (stateObj.attributes.month < 10) {
      monthFiller = "0";
    } else {
      monthFiller = "";
    }

    var dayFiller;
    if (stateObj.attributes.day < 10) {
      dayFiller = "0";
    } else {
      dayFiller = "";
    }

    return (
      stateObj.attributes.year +
      "-" +
      monthFiller +
      stateObj.attributes.month +
      "-" +
      dayFiller +
      stateObj.attributes.day
    );
  }

  /* Should fire when any value was changed *by the user*, not b/c of setting
   * initial values. */
  dateTimeChanged() {
    // Check if the change is really coming from the user
    if (!this.is_ready) {
      return;
    }

    let changed = false;
    let minuteFiller;

    const serviceData = {
      entity_id: this.stateObj.entity_id,
    };

    if (this.stateObj.attributes.has_time) {
      changed |=
        parseInt(this.selectedMinute) !== this.stateObj.attributes.minute;
      changed |= parseInt(this.selectedHour) !== this.stateObj.attributes.hour;
      if (this.selectedMinute < 10) {
        minuteFiller = "0";
      } else {
        minuteFiller = "";
      }
      var timeStr =
        this.selectedHour + ":" + minuteFiller + this.selectedMinute;
      serviceData.time = timeStr;
    }

    if (this.stateObj.attributes.has_date) {
      if (this.selectedDate.length === 0) {
        return; // Date was not set
      }

      const dateValInput = new Date(this.selectedDate);
      const dateValState = new Date(
        this.stateObj.attributes.year,
        this.stateObj.attributes.month - 1,
        this.stateObj.attributes.day
      );

      changed |= dateValState !== dateValInput;

      serviceData.date = this.selectedDate;
    }

    if (changed) {
      this.hass.callService("input_datetime", "set_datetime", serviceData);
    }
  }

  stateObjChanged(newVal) {
    // Set to non-ready s.t. dateTimeChanged does not fire
    this.is_ready = false;

    if (newVal.attributes.has_time) {
      this.selectedHour = newVal.attributes.hour;
      this.selectedMinute = newVal.attributes.minute;
    }

    if (newVal.attributes.has_date) {
      this.selectedDate = this.getDateString(newVal);
    }

    this.is_ready = true;
  }

  doesHaveDate(stateObj) {
    return stateObj.attributes.has_date;
  }

  doesHaveTime(stateObj) {
    return stateObj.attributes.has_time;
  }

  computeClassNames(stateObj) {
    return (
      "more-info-input_datetime " +
      Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["attributeClassNames"])(stateObj, ["has_time", "has_date"])
    );
  }
}

customElements.define("more-info-input_datetime", DatetimeInput);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-light.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-light.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-color-picker */ "./src/components/ha-color-picker.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
















const FEATURE_CLASS_NAMES = {
  1: "has-brightness",
  2: "has-color_temp",
  4: "has-effect_list",
  16: "has-color",
  128: "has-white_value",
};
/*
 * @appliesMixin EventsMixin
 */
class MoreInfoLight extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex"></style>
      <style>
        .effect_list,
        .brightness,
        .color_temp,
        .white_value {
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .color_temp {
          --ha-slider-background: -webkit-linear-gradient(
            right,
            rgb(255, 160, 0) 0%,
            white 50%,
            rgb(166, 209, 255) 100%
          );
          /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
          --paper-slider-knob-start-border-color: var(--primary-color);
        }

        .segmentationContainer {
          position: relative;
          width: 100%;
        }

        ha-color-picker {
          display: block;
          width: 100%;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          padding: 0px;
          max-height: 0px;
          width: 23px;
          height: 23px;
          opacity: var(--dark-secondary-opacity);
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-color.is-on .segmentationContainer .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          width: 23px;
          height: 23px;
          padding: 0px;
          opacity: var(--dark-secondary-opacity);
        }

        .has-effect_list.is-on .effect_list,
        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          max-height: 84px;
        }

        .has-brightness .has-color_temp.is-on,
        .has-white_value.is-on {
          margin-top: -16px;
        }

        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          padding-top: 16px;
        }

        .has-color.is-on .segmentationButton {
          max-height: 100px;
          overflow: visible;
        }

        .has-color.is-on ha-color-picker {
          max-height: 500px;
          overflow: visible;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .is-unavailable .control {
          max-height: 0px;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="control brightness">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.brightness')]]"
            icon="hass:brightness-5"
            min="1"
            max="255"
            value="{{brightnessSliderValue}}"
            on-change="brightnessSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control color_temp">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.color_temperature')]]"
            icon="hass:thermometer"
            min="[[stateObj.attributes.min_mireds]]"
            max="[[stateObj.attributes.max_mireds]]"
            value="{{ctSliderValue}}"
            on-change="ctSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control white_value">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.white_value')]]"
            icon="hass:file-word-box"
            max="255"
            value="{{wvSliderValue}}"
            on-change="wvSliderChanged"
          ></ha-labeled-slider>
        </div>
        <div class="segmentationContainer">
          <ha-color-picker
            class="control color"
            on-colorselected="colorPicked"
            desired-hs-color="{{colorPickerColor}}"
            throttle="500"
            hue-segments="{{hueSegments}}"
            saturation-segments="{{saturationSegments}}"
          >
          </ha-color-picker>
          <paper-icon-button
            icon="mdi:palette"
            on-click="segmentClick"
            class="control segmentationButton"
          ></paper-icon-button>
        </div>

        <div class="control effect_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.light.effect')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.effect]]"
              on-selected-changed="effectChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.effect_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <ha-attributes
          state-obj="[[stateObj]]"
          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"
        ></ha-attributes>
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
        observer: "stateObjChanged",
      },

      brightnessSliderValue: {
        type: Number,
        value: 0,
      },

      ctSliderValue: {
        type: Number,
        value: 0,
      },

      wvSliderValue: {
        type: Number,
        value: 0,
      },

      hueSegments: {
        type: Number,
        value: 24,
      },

      saturationSegments: {
        type: Number,
        value: 8,
      },

      colorPickerColor: {
        type: Object,
      },
    };
  }

  stateObjChanged(newVal, oldVal) {
    const props = {
      brightnessSliderValue: 0,
    };

    if (newVal && newVal.state === "on") {
      props.brightnessSliderValue = newVal.attributes.brightness;
      props.ctSliderValue = newVal.attributes.color_temp;
      props.wvSliderValue = newVal.attributes.white_value;
      if (newVal.attributes.hs_color) {
        props.colorPickerColor = {
          h: newVal.attributes.hs_color[0],
          s: newVal.attributes.hs_color[1] / 100,
        };
      }
    }

    this.setProperties(props);

    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  computeClassNames(stateObj) {
    const classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__["featureClassNames"])(stateObj, FEATURE_CLASS_NAMES)];
    if (stateObj && stateObj.state === "on") {
      classes.push("is-on");
    }
    if (stateObj && stateObj.state === "unavailable") {
      classes.push("is-unavailable");
    }
    return classes.join(" ");
  }

  effectChanged(ev) {
    var oldVal = this.stateObj.attributes.effect;
    var newVal = ev.detail.value;

    if (!newVal || oldVal === newVal) return;

    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      effect: newVal,
    });
  }

  brightnessSliderChanged(ev) {
    var bri = parseInt(ev.target.value, 10);

    if (isNaN(bri)) return;

    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      brightness: bri,
    });
  }

  ctSliderChanged(ev) {
    var ct = parseInt(ev.target.value, 10);

    if (isNaN(ct)) return;

    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      color_temp: ct,
    });
  }

  wvSliderChanged(ev) {
    var wv = parseInt(ev.target.value, 10);

    if (isNaN(wv)) return;

    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      white_value: wv,
    });
  }

  segmentClick() {
    if (this.hueSegments === 24 && this.saturationSegments === 8) {
      this.setProperties({ hueSegments: 0, saturationSegments: 0 });
    } else {
      this.setProperties({ hueSegments: 24, saturationSegments: 8 });
    }
  }

  serviceChangeColor(hass, entityId, color) {
    hass.callService("light", "turn_on", {
      entity_id: entityId,
      hs_color: [color.h, color.s * 100],
    });
  }

  /**
   * Called when a new color has been picked.
   * should be throttled with the 'throttle=' attribute of the color picker
   */
  colorPicked(ev) {
    this.serviceChangeColor(this.hass, this.stateObj.entity_id, ev.detail.hs);
  }
}

customElements.define("more-info-light", MoreInfoLight);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-lock.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-lock.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");









/*
 * @appliesMixin LocalizeMixin
 */
class MoreInfoLock extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        paper-input {
          display: inline-block;
        }
      </style>

      <template is="dom-if" if="[[stateObj.attributes.code_format]]">
        <paper-input
          label="[[localize('ui.card.lock.code')]]"
          value="{{enteredCode}}"
          pattern="[[stateObj.attributes.code_format]]"
          type="password"
        ></paper-input>
        <mwc-button
          on-click="callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </template>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="code_format"
      ></ha-attributes>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "stateObjChanged",
      },
      enteredCode: {
        type: String,
        value: "",
      },
      isLocked: Boolean,
    };
  }

  stateObjChanged(newVal) {
    if (newVal) {
      this.isLocked = newVal.state === "locked";
    }
  }

  callService(ev) {
    const service = ev.target.getAttribute("data-service");
    const data = {
      entity_id: this.stateObj.entity_id,
      code: this.enteredCode,
    };
    this.hass.callService("lock", service, data);
  }
}

customElements.define("more-info-lock", MoreInfoLock);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-media_player.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-media_player.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");


















/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class MoreInfoMediaPlayer extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .media-state {
          text-transform: capitalize;
        }

        paper-icon-button[highlight] {
          color: var(--accent-color);
        }

        .volume {
          margin-bottom: 8px;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-volume_level .volume {
          max-height: 40px;
        }

        iron-icon.source-input {
          padding: 7px;
          margin-top: 15px;
        }

        ha-paper-dropdown-menu.source-input {
          margin-left: 10px;
        }

        [hidden] {
          display: none !important;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="layout horizontal">
          <div class="flex">
            <paper-icon-button
              icon="hass:power"
              highlight$="[[playerObj.isOff]]"
              on-click="handleTogglePower"
              hidden$="[[computeHidePowerButton(playerObj)]]"
            ></paper-icon-button>
          </div>
          <div>
            <template
              is="dom-if"
              if="[[computeShowPlaybackControls(playerObj)]]"
            >
              <paper-icon-button
                icon="hass:skip-previous"
                on-click="handlePrevious"
                hidden$="[[!playerObj.supportsPreviousTrack]]"
              ></paper-icon-button>
              <paper-icon-button
                icon="[[computePlaybackControlIcon(playerObj)]]"
                on-click="handlePlaybackControl"
                hidden$="[[!computePlaybackControlIcon(playerObj)]]"
                highlight=""
              ></paper-icon-button>
              <paper-icon-button
                icon="hass:skip-next"
                on-click="handleNext"
                hidden$="[[!playerObj.supportsNextTrack]]"
              ></paper-icon-button>
            </template>
          </div>
        </div>
        <!-- VOLUME -->
        <div
          class="volume_buttons center horizontal layout"
          hidden$="[[computeHideVolumeButtons(playerObj)]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            icon="hass:volume-off"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeDown"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeDown"
            on-touchstart="handleVolumeDown"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-medium"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeUp"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeUp"
            on-touchstart="handleVolumeUp"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-high"
          ></paper-icon-button>
        </div>
        <div
          class="volume center horizontal layout"
          hidden$="[[!playerObj.supportsVolumeSet]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            hidden$="[[playerObj.supportsVolumeButtons]]"
            icon="[[computeMuteVolumeIcon(playerObj)]]"
          ></paper-icon-button>
          <ha-paper-slider
            disabled$="[[playerObj.isMuted]]"
            min="0"
            max="100"
            value="[[playerObj.volumeSliderValue]]"
            on-change="volumeSliderChanged"
            class="flex"
            ignore-bar-touch=""
            dir="{{rtl}}"
          >
          </ha-paper-slider>
        </div>
        <!-- SOURCE PICKER -->
        <div
          class="controls layout horizontal justified"
          hidden$="[[computeHideSelectSource(playerObj)]]"
        >
          <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>
          <ha-paper-dropdown-menu
            class="flex source-input"
            dynamic-align=""
            label-float=""
            label="[[localize('ui.card.media_player.source')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="[[playerObj.source]]"
              on-selected-changed="handleSourceChanged"
            >
              <template is="dom-repeat" items="[[playerObj.sourceList]]">
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>
        <!-- SOUND MODE PICKER -->
        <template is="dom-if" if="[[!computeHideSelectSoundMode(playerObj)]]">
          <div class="controls layout horizontal justified">
            <iron-icon class="source-input" icon="hass:music-note"></iron-icon>
            <ha-paper-dropdown-menu
              class="flex source-input"
              dynamic-align
              label-float
              label="[[localize('ui.card.media_player.sound_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                selected="[[playerObj.soundMode]]"
                on-selected-changed="handleSoundModeChanged"
              >
                <template is="dom-repeat" items="[[playerObj.soundModeList]]">
                  <paper-item item-name$="[[item]]">[[item]]</paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>
        <!-- TTS -->
        <div
          hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]"
          class="layout horizontal end"
        >
          <paper-input
            id="ttsInput"
            label="[[localize('ui.card.media_player.text_to_speak')]]"
            class="flex"
            value="{{ttsMessage}}"
            on-keydown="ttsCheckForEnter"
          ></paper-input>
          <paper-icon-button
            icon="hass:send"
            on-click="sendTTS"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      playerObj: {
        type: Object,
        computed: "computePlayerObj(hass, stateObj)",
        observer: "playerObjChanged",
      },

      ttsLoaded: {
        type: Boolean,
        computed: "computeTTSLoaded(hass)",
      },

      ttsMessage: {
        type: String,
        value: "",
      },

      rtl: {
        type: String,
        computed: "_computeRTLDirection(hass)",
      },
    };
  }

  computePlayerObj(hass, stateObj) {
    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__["default"](hass, stateObj);
  }

  playerObjChanged(newVal, oldVal) {
    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  computeClassNames(stateObj) {
    return Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["attributeClassNames"])(stateObj, ["volume_level"]);
  }

  computeMuteVolumeIcon(playerObj) {
    return playerObj.isMuted ? "hass:volume-off" : "hass:volume-high";
  }

  computeHideVolumeButtons(playerObj) {
    return !playerObj.supportsVolumeButtons || playerObj.isOff;
  }

  computeShowPlaybackControls(playerObj) {
    return !playerObj.isOff && playerObj.hasMediaControl;
  }

  computePlaybackControlIcon(playerObj) {
    if (playerObj.isPlaying) {
      return playerObj.supportsPause ? "hass:pause" : "hass:stop";
    }
    if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
      if (
        playerObj.hasMediaControl &&
        playerObj.supportsPause &&
        !playerObj.isPaused
      ) {
        return "hass:play-pause";
      }
      return playerObj.supportsPlay ? "hass:play" : null;
    }
    return "";
  }

  computeHidePowerButton(playerObj) {
    return playerObj.isOff
      ? !playerObj.supportsTurnOn
      : !playerObj.supportsTurnOff;
  }

  computeHideSelectSource(playerObj) {
    return (
      playerObj.isOff ||
      !playerObj.supportsSelectSource ||
      !playerObj.sourceList
    );
  }

  computeHideSelectSoundMode(playerObj) {
    return (
      playerObj.isOff ||
      !playerObj.supportsSelectSoundMode ||
      !playerObj.soundModeList
    );
  }

  computeHideTTS(ttsLoaded, playerObj) {
    return !ttsLoaded || !playerObj.supportsPlayMedia;
  }

  computeTTSLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__["default"])(hass, "tts");
  }

  handleTogglePower() {
    this.playerObj.togglePower();
  }

  handlePrevious() {
    this.playerObj.previousTrack();
  }

  handlePlaybackControl() {
    this.playerObj.mediaPlayPause();
  }

  handleNext() {
    this.playerObj.nextTrack();
  }

  handleSourceChanged(ev) {
    if (!this.playerObj) return;

    var oldVal = this.playerObj.source;
    var newVal = ev.detail.value;

    if (!newVal || oldVal === newVal) return;

    this.playerObj.selectSource(newVal);
  }

  handleSoundModeChanged(ev) {
    if (!this.playerObj) return;

    var oldVal = this.playerObj.soundMode;
    var newVal = ev.detail.value;

    if (!newVal || oldVal === newVal) return;

    this.playerObj.selectSoundMode(newVal);
  }

  handleVolumeTap() {
    if (!this.playerObj.supportsVolumeMute) {
      return;
    }
    this.playerObj.volumeMute(!this.playerObj.isMuted);
  }

  handleVolumeTouchEnd(ev) {
    /* when touch ends, we must prevent this from
     * becoming a mousedown, up, click by emulation */
    ev.preventDefault();
  }

  handleVolumeUp() {
    const obj = this.$.volumeUp;
    this.handleVolumeWorker("volume_up", obj, true);
  }

  handleVolumeDown() {
    const obj = this.$.volumeDown;
    this.handleVolumeWorker("volume_down", obj, true);
  }

  handleVolumeWorker(service, obj, force) {
    if (force || (obj !== undefined && obj.pointerDown)) {
      this.playerObj.callService(service);
      setTimeout(() => this.handleVolumeWorker(service, obj, false), 500);
    }
  }

  volumeSliderChanged(ev) {
    const volPercentage = parseFloat(ev.target.value);
    const volume = volPercentage > 0 ? volPercentage / 100 : 0;
    this.playerObj.setVolume(volume);
  }

  ttsCheckForEnter(ev) {
    if (ev.keyCode === 13) this.sendTTS();
  }

  sendTTS() {
    const services = this.hass.services.tts;
    const serviceKeys = Object.keys(services).sort();
    let service;
    let i;

    for (i = 0; i < serviceKeys.length; i++) {
      if (serviceKeys[i].indexOf("_say") !== -1) {
        service = serviceKeys[i];
        break;
      }
    }

    if (!service) {
      return;
    }

    this.hass.callService("tts", service, {
      entity_id: this.stateObj.entity_id,
      message: this.ttsMessage,
    });
    this.ttsMessage = "";
    this.$.ttsInput.focus();
  }

  _computeRTLDirection(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTLDirection"])(hass);
  }
}

customElements.define("more-info-media_player", MoreInfoMediaPlayer);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-script.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-script.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");





class MoreInfoScript extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="layout vertical">
        <div class="data-entry layout justified horizontal">
          <div class="key">
            [[localize('ui.dialogs.more_info_control.script.last_action')]]
          </div>
          <div class="value">[[stateObj.attributes.last_action]]</div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object,
      },
    };
  }
}

customElements.define("more-info-script", MoreInfoScript);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-sun.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-sun.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");









class MoreInfoSun extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>

      <template
        is="dom-repeat"
        items="[[computeOrder(risingDate, settingDate)]]"
      >
        <div class="data-entry layout justified horizontal">
          <div class="key">
            <span>[[itemCaption(item)]]</span>
            <ha-relative-time
              hass="[[hass]]"
              datetime-obj="[[itemDate(item)]]"
            ></ha-relative-time>
          </div>
          <div class="value">[[itemValue(item)]]</div>
        </div>
      </template>
      <div class="data-entry layout justified horizontal">
        <div class="key">
          [[localize('ui.dialogs.more_info_control.sun.elevation')]]
        </div>
        <div class="value">[[stateObj.attributes.elevation]]</div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      risingDate: {
        type: Object,
        computed: "computeRising(stateObj)",
      },

      settingDate: {
        type: Object,
        computed: "computeSetting(stateObj)",
      },
    };
  }

  computeRising(stateObj) {
    return new Date(stateObj.attributes.next_rising);
  }

  computeSetting(stateObj) {
    return new Date(stateObj.attributes.next_setting);
  }

  computeOrder(risingDate, settingDate) {
    return risingDate > settingDate ? ["set", "ris"] : ["ris", "set"];
  }

  itemCaption(type) {
    if (type === "ris") {
      return this.localize("ui.dialogs.more_info_control.sun.rising");
    }
    return this.localize("ui.dialogs.more_info_control.sun.setting");
  }

  itemDate(type) {
    return type === "ris" ? this.risingDate : this.settingDate;
  }

  itemValue(type) {
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__["default"])(this.itemDate(type), this.hass.language);
  }
}

customElements.define("more-info-sun", MoreInfoSun);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-timer.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-timer.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");



let MoreInfoTimer = class MoreInfoTimer extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        if (!this.hass || !this.stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-attributes
        .stateObj=${this.stateObj}
        .extraFilters=${"remaining"}
      ></ha-attributes>
      <div class="actions">
        ${this.stateObj.state === "idle" || this.stateObj.state === "paused"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button
                .action="${"start"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.start")}
              </mwc-button>
            `
            : ""}
        ${this.stateObj.state === "active"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button
                .action="${"pause"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.pause")}
              </mwc-button>
            `
            : ""}
        ${this.stateObj.state === "active" || this.stateObj.state === "paused"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button
                .action="${"cancel"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.cancel")}
              </mwc-button>
              <mwc-button
                .action="${"finish"}"
                @click="${this._handleActionClick}"
              >
                ${this.hass.localize("ui.card.timer.actions.finish")}
              </mwc-button>
            `
            : ""}
      </div>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!changedProps.has("stateObj") || !this.stateObj) {
            return;
        }
    }
    _handleActionClick(e) {
        const action = e.currentTarget.action;
        this.hass.callService("timer", action, {
            entity_id: this.stateObj.entity_id,
        });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .actions {
        margin: 0 8px;
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], MoreInfoTimer.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], MoreInfoTimer.prototype, "stateObj", void 0);
MoreInfoTimer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("more-info-timer")
], MoreInfoTimer);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-updater.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-updater.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




class MoreInfoUpdater extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .link {
          color: #03a9f4;
        }
      </style>

      <div>
        <a
          class="link"
          href="https://www.home-assistant.io/docs/installation/updating/"
          target="_blank"
          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a
        >
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object,
      },
    };
  }

  computeReleaseNotes(stateObj) {
    return (
      stateObj.attributes.release_notes ||
      "https://www.home-assistant.io/docs/installation/updating/"
    );
  }
}

customElements.define("more-info-updater", MoreInfoUpdater);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-vacuum.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-vacuum.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");












class MoreInfoVacuum extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        .status-subtitle {
          color: var(--secondary-text-color);
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class="horizontal justified layout">
        <div hidden$="[[!supportsStatus(stateObj)]]">
          <span class="status-subtitle">Status: </span
          ><span><strong>[[stateObj.attributes.status]]</strong></span>
        </div>
        <div hidden$="[[!supportsBattery(stateObj)]]">
          <span
            ><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon>
            [[stateObj.attributes.battery_level]] %</span
          >
        </div>
      </div>
      <div hidden$="[[!supportsCommandBar(stateObj)]]">
        <p></p>
        <div class="status-subtitle">Vacuum cleaner commands:</div>
        <div class="horizontal justified layout">
          <template is="dom-if" if="[[supportsStart(stateObj)]]">
            <div>
              <paper-icon-button
                icon="hass:play"
                on-click="onStart"
                title="Start"
              ></paper-icon-button>
            </div>
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:pause"
                on-click="onPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>
          <template is="dom-if" if="[[!supportsStart(stateObj)]]">
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:play-pause"
                on-click="onPlayPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>

          <div hidden$="[[!supportsStop(stateObj)]]">
            <paper-icon-button
              icon="hass:stop"
              on-click="onStop"
              title="Stop"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsCleanSpot(stateObj)]]">
            <paper-icon-button
              icon="hass:broom"
              on-click="onCleanSpot"
              title="Clean spot"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsLocate(stateObj)]]">
            <paper-icon-button
              icon="hass:map-marker"
              on-click="onLocate"
              title="Locate"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsReturnHome(stateObj)]]">
            <paper-icon-button
              icon="hass:home-map-marker"
              on-click="onReturnHome"
              title="Return home"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <div hidden$="[[!supportsFanSpeed(stateObj)]]">
        <div class="horizontal justified layout">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="Fan speed"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.fan_speed]]"
              on-selected-changed="fanSpeedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.fan_speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
          <div
            style="justify-content: center; align-self: center; padding-top: 1.3em"
          >
            <span
              ><iron-icon icon="hass:fan"></iron-icon>
              [[stateObj.attributes.fan_speed]]</span
            >
          </div>
        </div>
        <p></p>
      </div>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"
      ></ha-attributes>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      inDialog: {
        type: Boolean,
        value: false,
      },

      stateObj: {
        type: Object,
      },
    };
  }

  supportsPause(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4);
  }

  supportsStop(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8);
  }

  supportsReturnHome(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16);
  }

  supportsFanSpeed(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 32);
  }

  supportsBattery(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 64);
  }

  supportsStatus(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 128);
  }

  supportsLocate(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512);
  }

  supportsCleanSpot(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024);
  }

  supportsStart(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
  }

  supportsCommandBar(stateObj) {
    return (
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4) |
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8) |
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16) |
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512) |
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024) |
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192)
    );
  }

  fanSpeedChanged(ev) {
    var oldVal = this.stateObj.attributes.fan_speed;
    var newVal = ev.detail.value;

    if (!newVal || oldVal === newVal) return;

    this.hass.callService("vacuum", "set_fan_speed", {
      entity_id: this.stateObj.entity_id,
      fan_speed: newVal,
    });
  }

  onStop() {
    this.hass.callService("vacuum", "stop", {
      entity_id: this.stateObj.entity_id,
    });
  }

  onPlayPause() {
    this.hass.callService("vacuum", "start_pause", {
      entity_id: this.stateObj.entity_id,
    });
  }

  onPause() {
    this.hass.callService("vacuum", "pause", {
      entity_id: this.stateObj.entity_id,
    });
  }

  onStart() {
    this.hass.callService("vacuum", "start", {
      entity_id: this.stateObj.entity_id,
    });
  }

  onLocate() {
    this.hass.callService("vacuum", "locate", {
      entity_id: this.stateObj.entity_id,
    });
  }

  onCleanSpot() {
    this.hass.callService("vacuum", "clean_spot", {
      entity_id: this.stateObj.entity_id,
    });
  }

  onReturnHome() {
    this.hass.callService("vacuum", "return_to_base", {
      entity_id: this.stateObj.entity_id,
    });
  }
}

customElements.define("more-info-vacuum", MoreInfoVacuum);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-water_heater.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-water_heater.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_water_heater_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-water_heater-control */ "./src/components/ha-water_heater-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");



















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class MoreInfoWaterHeater extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        .container-away_mode,
        .container-temperature,
        .container-operation_list,

        .has-away_mode .container-away_mode,
        .has-target_temperature .container-temperature,
        .has-operation_mode .container-operation_list,

        .container-operation_list iron-icon,

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-paper-slider {
          width: 100%;
        }

        ha-water_heater-control.range-control-left,
        ha-water_heater-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-water_heater-control.range-control-left {
          margin-right: 4%;
        }
        ha-water_heater-control.range-control-right {
          margin-left: 4%;
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.water_heater.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-water_heater-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-water_heater-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.water_heater.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">
                [[localize('ui.card.water_heater.away_mode')]]
              </div>
              <ha-switch
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </ha-switch>
            </div>
          </div>
        </template>
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
        observer: "stateObjChanged",
      },

      awayToggleChecked: Boolean,
    };
  }

  stateObjChanged(newVal, oldVal) {
    if (newVal) {
      this.setProperties({
        awayToggleChecked: newVal.attributes.away_mode === "on",
      });
    }

    if (oldVal) {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(
        this._debouncer,
        _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__["timeOut"].after(500),
        () => {
          this.fire("iron-resize");
        }
      );
    }
  }

  computeTemperatureStepSize(hass, stateObj) {
    if (stateObj.attributes.target_temp_step) {
      return stateObj.attributes.target_temp_step;
    }
    if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
      return 1;
    }
    return 0.5;
  }

  supportsTemperatureControls(stateObj) {
    return this.supportsTemperature(stateObj);
  }

  supportsTemperature(stateObj) {
    return (
      Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 1) &&
      typeof stateObj.attributes.temperature === "number"
    );
  }

  supportsOperationMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 2);
  }

  supportsAwayMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 4);
  }

  computeClassNames(stateObj) {
    const _featureClassNames = {
      1: "has-target_temperature",
      2: "has-operation_mode",
      4: "has-away_mode",
    };

    var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_13__["featureClassNames"])(stateObj, _featureClassNames)];

    classes.push("more-info-water_heater");

    return classes.join(" ");
  }

  targetTemperatureChanged(ev) {
    const temperature = ev.target.value;
    if (temperature === this.stateObj.attributes.temperature) return;
    this.callServiceHelper("set_temperature", { temperature: temperature });
  }

  awayToggleChanged(ev) {
    const oldVal = this.stateObj.attributes.away_mode === "on";
    const newVal = ev.target.checked;
    if (oldVal === newVal) return;
    this.callServiceHelper("set_away_mode", { away_mode: newVal });
  }

  handleOperationmodeChanged(ev) {
    const oldVal = this.stateObj.attributes.operation_mode;
    const newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.callServiceHelper("set_operation_mode", {
      operation_mode: newVal,
    });
  }

  callServiceHelper(service, data) {
    // We call stateChanged after a successful call to re-sync the inputs
    // with the state. It will be out of sync if our service call did not
    // result in the entity to be turned on. Since the state is not changing,
    // the resync is not called automatic.
    /* eslint-disable no-param-reassign */
    data.entity_id = this.stateObj.entity_id;
    /* eslint-enable no-param-reassign */
    this.hass.callService("water_heater", service, data).then(() => {
      this.stateObjChanged(this.stateObj);
    });
  }

  _localizeOperationMode(localize, mode) {
    return localize(`state.water_heater.${mode}`) || mode;
  }
}

customElements.define("more-info-water_heater", MoreInfoWaterHeater);


/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-weather.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-weather.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






/*
 * @appliesMixin LocalizeMixin
 */
class MoreInfoWeather extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        iron-icon {
          color: var(--paper-item-icon-color);
        }
        .section {
          margin: 16px 0 8px 0;
          font-size: 1.2em;
        }

        .flex {
          display: flex;
          height: 32px;
          align-items: center;
        }

        .main {
          flex: 1;
          margin-left: 24px;
        }

        .temp,
        .templow {
          min-width: 48px;
          text-align: right;
        }

        .templow {
          margin: 0 16px;
          color: var(--secondary-text-color);
        }

        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
        }
      </style>

      <div class="flex">
        <iron-icon icon="hass:thermometer"></iron-icon>
        <div class="main">
          [[localize('ui.card.weather.attributes.temperature')]]
        </div>
        <div>
          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]
        </div>
      </div>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">
        <div class="flex">
          <iron-icon icon="hass:gauge"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.air_pressure')]]
          </div>
          <div>
            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">
        <div class="flex">
          <iron-icon icon="hass:water-percent"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.humidity')]]
          </div>
          <div>[[stateObj.attributes.humidity]] %</div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">
        <div class="flex">
          <iron-icon icon="hass:weather-windy"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.wind_speed')]]
          </div>
          <div>
            [[getWind(stateObj.attributes.wind_speed,
            stateObj.attributes.wind_bearing, localize)]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">
        <div class="flex">
          <iron-icon icon="hass:eye"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.visibility')]]
          </div>
          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>
        </div>
      </template>

      <template is="dom-if" if="[[stateObj.attributes.forecast]]">
        <div class="section">[[localize('ui.card.weather.forecast')]]:</div>
        <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">
          <div class="flex">
            <template is="dom-if" if="[[_showValue(item.condition)]]">
              <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>
            </template>
            <template is="dom-if" if="[[!_showValue(item.templow)]]">
              <div class="main">[[computeDateTime(item.datetime)]]</div>
            </template>
            <template is="dom-if" if="[[_showValue(item.templow)]]">
              <div class="main">[[computeDate(item.datetime)]]</div>
              <div class="templow">
                [[item.templow]] [[getUnit('temperature')]]
              </div>
            </template>
            <div class="temp">
              [[item.temperature]] [[getUnit('temperature')]]
            </div>
          </div>
        </template>
      </template>

      <template is="dom-if" if="stateObj.attributes.attribution">
        <div class="attribution">[[stateObj.attributes.attribution]]</div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
    };
  }

  constructor() {
    super();
    this.cardinalDirections = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
      "N",
    ];
    this.weatherIcons = {
      "clear-night": "hass:weather-night",
      cloudy: "hass:weather-cloudy",
      exceptional: "hass:alert-circle-outline",
      fog: "hass:weather-fog",
      hail: "hass:weather-hail",
      lightning: "hass:weather-lightning",
      "lightning-rainy": "hass:weather-lightning-rainy",
      partlycloudy: "hass:weather-partly-cloudy",
      pouring: "hass:weather-pouring",
      rainy: "hass:weather-rainy",
      snowy: "hass:weather-snowy",
      "snowy-rainy": "hass:weather-snowy-rainy",
      sunny: "hass:weather-sunny",
      windy: "hass:weather-windy",
      "windy-variant": "hass:weather-windy-variant",
    };
  }

  computeDate(data) {
    const date = new Date(data);
    return date.toLocaleDateString(this.hass.language, {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  }

  computeDateTime(data) {
    const date = new Date(data);
    return date.toLocaleDateString(this.hass.language, {
      weekday: "long",
      hour: "numeric",
    });
  }

  getUnit(measure) {
    const lengthUnit = this.hass.config.unit_system.length || "";
    switch (measure) {
      case "air_pressure":
        return lengthUnit === "km" ? "hPa" : "inHg";
      case "length":
        return lengthUnit;
      case "precipitation":
        return lengthUnit === "km" ? "mm" : "in";
      default:
        return this.hass.config.unit_system[measure] || "";
    }
  }

  windBearingToText(degree) {
    const degreenum = parseInt(degree);
    if (isFinite(degreenum)) {
      return this.cardinalDirections[(((degreenum + 11.25) / 22.5) | 0) % 16];
    }
    return degree;
  }

  getWind(speed, bearing, localize) {
    if (bearing != null) {
      const cardinalDirection = this.windBearingToText(bearing);
      return `${speed} ${this.getUnit("length")}/h (${localize(
        `ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`
      ) || cardinalDirection})`;
    }
    return `${speed} ${this.getUnit("length")}/h`;
  }

  getWeatherIcon(condition) {
    return this.weatherIcons[condition];
  }

  _showValue(item) {
    return typeof item !== "undefined" && item !== null;
  }
}

customElements.define("more-info-weather", MoreInfoWeather);


/***/ }),

/***/ "./src/dialogs/more-info/more-info-controls.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-controls.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _controls_more_info_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");




















const DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
/*
 * @appliesMixin EventsMixin
 */
class MoreInfoControls extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style-dialog">
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        state-card-content {
          display: block;
          padding: 16px;
        }

        state-history-charts {
          max-width: 100%;
          margin-bottom: 16px;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        :host([domain="camera"]) paper-dialog-scrollable {
          margin: 0 -24px -21px;
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      </style>

      <app-toolbar>
        <paper-icon-button
          aria-label="Dismiss dialog"
          icon="hass:close"
          dialog-dismiss
        ></paper-icon-button>
        <div class="main-title" main-title="" on-click="enlarge">
          [[_computeStateName(stateObj)]]
        </div>
        <template is="dom-if" if="[[canConfigure]]">
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
        <state-card-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
          in-dialog=""
        ></state-card-content>
      </template>
      <paper-dialog-scrollable dialog-element="[[dialogElement]]">
        <template
          is="dom-if"
          if="[[_computeShowHistoryComponent(hass, stateObj)]]"
          restamp=""
        >
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[stateObj.entity_id]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            up-to-now
          ></state-history-charts>
        </template>
        <more-info-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></more-info-content>
      </paper-dialog-scrollable>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      stateObj: {
        type: Object,
        observer: "_stateObjChanged",
      },

      dialogElement: Object,
      canConfigure: Boolean,

      domain: {
        type: String,
        reflectToAttribute: true,
        computed: "_computeDomain(stateObj)",
      },

      _stateHistory: Object,
      _stateHistoryLoading: Boolean,

      large: {
        type: Boolean,
        value: false,
        notify: true,
      },

      _cacheConfig: {
        type: Object,
        value: {
          refresh: 60,
          cacheKey: null,
          hoursToShow: 24,
        },
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  enlarge() {
    this.large = !this.large;
  }

  _computeShowStateInfo(stateObj) {
    return !stateObj || !DOMAINS_NO_INFO.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj));
  }

  _computeShowHistoryComponent(hass, stateObj) {
    return (
      hass &&
      stateObj &&
      Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__["default"])(hass, "history") &&
      !_common_const__WEBPACK_IMPORTED_MODULE_13__["DOMAINS_MORE_INFO_NO_HISTORY"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj))
    );
  }

  _computeDomain(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj) : "";
  }

  _computeStateName(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["computeStateName"])(stateObj) : "";
  }

  _stateObjChanged(newVal) {
    if (!newVal) {
      return;
    }

    if (this._cacheConfig.cacheKey !== `more_info.${newVal.entity_id}`) {
      this._cacheConfig = {
        ...this._cacheConfig,
        cacheKey: `more_info.${newVal.entity_id}`,
      };
    }
  }

  _gotoSettings() {
    this.fire("more-info-page", { page: "settings" });
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
  }
}
customElements.define("more-info-controls", MoreInfoControls);


/***/ }),

/***/ "./src/dialogs/more-info/more-info-settings.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-settings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class MoreInfoSettings extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);

          /* to fit save button */
          padding-right: 0;
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        app-toolbar mwc-button {
          font-size: 0.8em;
          margin: 0;
          --mdc-theme-primary: var(--more-info-header-color);
        }

        .form {
          padding: 0 24px 24px;
        }
      </style>

      <app-toolbar>
        <ha-paper-icon-button-arrow-prev
          on-click="_backTapped"
        ></ha-paper-icon-button-arrow-prev>
        <div main-title="">[[_computeStateName(stateObj)]]</div>
        <mwc-button on-click="_save" disabled="[[_computeInvalid(_entityId)]]"
          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button
        >
      </app-toolbar>

      <div class="form">
        <paper-input
          value="{{_name}}"
          label="[[localize('ui.dialogs.more_info_settings.name')]]"
        ></paper-input>
        <paper-input
          value="{{_entityId}}"
          label="[[localize('ui.dialogs.more_info_settings.entity_id')]]"
          error-message="Domain needs to stay the same"
          invalid="[[_computeInvalid(_entityId)]]"
        ></paper-input>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,

      registryInfo: {
        type: Object,
        observer: "_registryInfoChanged",
        notify: true,
      },

      _name: String,
      _entityId: String,
    };
  }

  _computeStateName(stateObj) {
    if (!stateObj) return "";
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
  }

  _computeInvalid(entityId) {
    return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(this.stateObj.entity_id) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entityId);
  }

  _registryInfoChanged(newVal) {
    if (newVal) {
      this.setProperties({
        _name: newVal.name,
        _entityId: newVal.entity_id,
      });
    } else {
      this.setProperties({
        _name: "",
        _entityId: "",
      });
    }
  }

  _backTapped() {
    this.fire("more-info-page", { page: null });
  }

  async _save() {
    try {
      const info = await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["updateEntityRegistryEntry"])(
        this.hass,
        this.stateObj.entity_id,
        {
          name: this._name,
          new_entity_id: this._entityId,
        }
      );

      Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__["showSaveSuccessToast"])(this, this.hass);

      this.registryInfo = info;

      // Keep the more info dialog open at the new entity.
      if (this.stateObj.entity_id !== this._entityId) {
        this.fire("hass-more-info", { entityId: this._entityId });
      }
    } catch (err) {
      alert(`save failed: ${err.message}`);
    }
  }
}
customElements.define("more-info-settings", MoreInfoSettings);


/***/ }),

/***/ "./src/mixins/dialog-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-mixin */ "./src/mixins/events-mixin.js");




/**
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])(
      [_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]],
      superClass
    ) {
      static get properties() {
        return {
          withBackdrop: {
            type: Boolean,
            value: true,
          },
        };
      }
    }
));


/***/ }),

/***/ "./src/util/hass-attributes-util.js":
/*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hassAttributeUtil = {};

hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: [
    "battery",
    "cold",
    "connectivity",
    "door",
    "garage_door",
    "gas",
    "heat",
    "light",
    "lock",
    "moisture",
    "motion",
    "moving",
    "occupancy",
    "opening",
    "plug",
    "power",
    "presence",
    "problem",
    "safety",
    "smoke",
    "sound",
    "vibration",
    "window",
  ],
  cover: [
    "awning",
    "blind",
    "curtain",
    "damper",
    "door",
    "garage",
    "shade",
    "shutter",
    "window",
  ],
  sensor: [
    "battery",
    "humidity",
    "illuminance",
    "temperature",
    "pressure",
    "power",
    "signal_strength",
  ],
  switch: ["switch", "outlet"],
};

hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";

hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  boolean: "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value",
};

// Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.
hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: { type: "string", description: "Name" },
  icon: { type: "icon" },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"],
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"],
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: { type: "boolean" },
  homebridge_name: { type: "string" },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: { type: "string" },
  custom_ui_state_card: { type: "string" },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"],
  },
  hidden: { type: "boolean", description: "Hide from UI" },
  assumed_state: {
    type: "boolean",
    domains: [
      "switch",
      "light",
      "cover",
      "climate",
      "fan",
      "group",
      "water_heater",
    ],
  },
  initial_state: {
    type: "string",
    domains: ["automation"],
  },
  unit_of_measurement: { type: "string" },
};

/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWwvZGVib3VuY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYW1lcmEtc3RyZWFtLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNsaW1hdGUtY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb2xvci1waWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS13YXRlcl9oZWF0ZXItY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYXBlci10aW1lLWlucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9oYS1tb3JlLWluZm8tZGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tYWxhcm1fY29udHJvbF9wYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWF1dG9tYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jYW1lcmEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY29uZmlndXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY29udGVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWZhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8taGlzdG9yeV9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tbGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tbWVkaWFfcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tc3VuLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby11cGRhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tdmFjdXVtLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8td2F0ZXJfaGVhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8td2VhdGhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vbW9yZS1pbmZvLWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9tb3JlLWluZm8tc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9kaWFsb2ctbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJoYXNzOmJvb2ttYXJrXCI7XG5cbi8qKiBQYW5lbCB0byBzaG93IHdoZW4gbm8gcGFuZWwgaXMgcGlja2VkLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFORUwgPSBcImxvdmVsYWNlXCI7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvdmVyXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInRpbWVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjbGltYXRlXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiY292ZXJcIixcbiAgXCJmYW5cIixcbiAgXCJncm91cFwiLFxuICBcImhpc3RvcnlfZ3JhcGhcIixcbiAgXCJpbnB1dF9kYXRldGltZVwiLFxuICBcImxpZ2h0XCIsXG4gIFwibG9ja1wiLFxuICBcIm1lZGlhX3BsYXllclwiLFxuICBcInNjcmlwdFwiLFxuICBcInN1blwiLFxuICBcInRpbWVyXCIsXG4gIFwidXBkYXRlclwiLFxuICBcInZhY3V1bVwiLFxuICBcIndhdGVyX2hlYXRlclwiLFxuICBcIndlYXRoZXJcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdyBubyBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfSElERV9NT1JFX0lORk8gPSBbXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcInNjZW5lXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgdGhhdCBzaG91bGQgaGF2ZSB0aGUgaGlzdG9yeSBoaWRkZW4gaW4gdGhlIG1vcmUgaW5mbyBkaWFsb2cuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWSA9IFtcbiAgXCJjYW1lcmFcIixcbiAgXCJjb25maWd1cmF0b3JcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwic2NlbmVcIixcbl07XG5cbi8qKiBTdGF0ZXMgdGhhdCB3ZSBjb25zaWRlciBcIm9mZlwiLiAqL1xuZXhwb3J0IGNvbnN0IFNUQVRFU19PRkYgPSBbXCJjbG9zZWRcIiwgXCJsb2NrZWRcIiwgXCJvZmZcIl07XG5cbi8qKiBEb21haW5zIHdoZXJlIHdlIGFsbG93IHRvZ2dsZSBpbiBMb3ZlbGFjZS4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX1RPR0dMRSA9IG5ldyBTZXQoW1xuICBcImZhblwiLFxuICBcImlucHV0X2Jvb2xlYW5cIixcbiAgXCJsaWdodFwiLFxuICBcInN3aXRjaFwiLFxuICBcImdyb3VwXCIsXG4gIFwiYXV0b21hdGlvblwiLFxuXSk7XG5cbi8qKiBUZW1wZXJhdHVyZSB1bml0cy4gKi9cbmV4cG9ydCBjb25zdCBVTklUX0MgPSBcIsKwQ1wiO1xuZXhwb3J0IGNvbnN0IFVOSVRfRiA9IFwiwrBGXCI7XG5cbi8qKiBFbnRpdHkgSUQgb2YgdGhlIGRlZmF1bHQgdmlldy4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1ZJRVdfRU5USVRZX0lEID0gXCJncm91cC5kZWZhdWx0X3ZpZXdcIjtcbiIsImV4cG9ydCBjb25zdCBjb21wdXRlRG9tYWluID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKDAsIGVudGl0eUlkLmluZGV4T2YoXCIuXCIpKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4vc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG4vLyBFeHBlY3RzIGNsYXNzTmFtZXMgdG8gYmUgYW4gb2JqZWN0IG1hcHBpbmcgZmVhdHVyZS1iaXQgLT4gY2xhc3NOYW1lXG5leHBvcnQgY29uc3QgZmVhdHVyZUNsYXNzTmFtZXMgPSAoXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBjbGFzc05hbWVzOiB7IFtmZWF0dXJlOiBudW1iZXJdOiBzdHJpbmcgfVxuKSA9PiB7XG4gIGlmICghc3RhdGVPYmogfHwgIXN0YXRlT2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoY2xhc3NOYW1lcylcbiAgICAubWFwKChmZWF0dXJlKSA9PlxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBOdW1iZXIoZmVhdHVyZSkpID8gY2xhc3NOYW1lc1tmZWF0dXJlXSA6IFwiXCJcbiAgICApXG4gICAgLmZpbHRlcigoYXR0cikgPT4gYXR0ciAhPT0gXCJcIilcbiAgICAuam9pbihcIiBcIik7XG59O1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgaGFzc0F0dHJpYnV0ZVV0aWwgZnJvbSBcIi4uL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWxcIjtcblxuY2xhc3MgSGFBdHRyaWJ1dGVzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5kYXRhLWVudHJ5IC52YWx1ZSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgIGl0ZW1zPVwiW1tjb21wdXRlRGlzcGxheUF0dHJpYnV0ZXMoc3RhdGVPYmosIGZpbHRlcnNBcnJheSldXVwiXG4gICAgICAgICAgYXM9XCJhdHRyaWJ1dGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+W1tmb3JtYXRBdHRyaWJ1dGUoYXR0cmlidXRlKV1dPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgW1tmb3JtYXRBdHRyaWJ1dGVWYWx1ZShzdGF0ZU9iaiwgYXR0cmlidXRlKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0aW9uXCIgaGlkZGVuJD1cIltbIWNvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIFtbY29tcHV0ZUF0dHJpYnV0aW9uKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGV4dHJhRmlsdGVyczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIGZpbHRlcnNBcnJheToge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRmlsdGVyc0FycmF5KGV4dHJhRmlsdGVycykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTKS5jb25jYXQoXG4gICAgICBleHRyYUZpbHRlcnMgPyBleHRyYUZpbHRlcnMuc3BsaXQoXCIsXCIpIDogW11cbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZURpc3BsYXlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBmaWx0ZXJzQXJyYXkpIHtcbiAgICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdGF0ZU9iai5hdHRyaWJ1dGVzKS5maWx0ZXIoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZmlsdGVyc0FycmF5LmluZGV4T2Yoa2V5KSA9PT0gLTE7XG4gICAgfSk7XG4gIH1cblxuICBmb3JtYXRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZS5yZXBsYWNlKC9fL2csIFwiIFwiKTtcbiAgfVxuXG4gIGZvcm1hdEF0dHJpYnV0ZVZhbHVlKHN0YXRlT2JqLCBhdHRyaWJ1dGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV07XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSByZXR1cm4gXCItXCI7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWUuam9pbihcIiwgXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgMikgOiB2YWx1ZTtcbiAgfVxuXG4gIGNvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmF0dHJpYnV0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWF0dHJpYnV0ZXNcIiwgSGFBdHRyaWJ1dGVzKTtcbiIsImltcG9ydCB7XG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgQ2FtZXJhRW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBDQU1FUkFfU1VQUE9SVF9TVFJFQU0sXG4gIGZldGNoU3RyZWFtVXJsLFxuICBjb21wdXRlTUpQRUdTdHJlYW1VcmwsXG59IGZyb20gXCIuLi9kYXRhL2NhbWVyYVwiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG50eXBlIEhMU01vZHVsZSA9IHR5cGVvZiBpbXBvcnQoXCJobHMuanNcIik7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY2FtZXJhLXN0cmVhbVwiKVxuY2xhc3MgSGFDYW1lcmFTdHJlYW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBDYW1lcmFFbnRpdHk7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIHNob3dDb250cm9scyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9hdHRhY2hlZCA9IGZhbHNlO1xuICAvLyBXZSBrZWVwIHRyYWNrIGlmIHdlIHNob3VsZCBmb3JjZSBNSlBFRyB3aXRoIGEgc3RyaW5nXG4gIC8vIHRoYXQgd2F5IGl0IGF1dG9tYXRpY2FsbHkgcmVzZXRzIGlmIHdlIGNoYW5nZSBlbnRpdHkuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2ZvcmNlTUpQRUc6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfaGxzUG9seWZpbGxJbnN0YW5jZT86IEhscztcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZU9iaiB8fCAhdGhpcy5fYXR0YWNoZWQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke19fREVNT19fIHx8IHRoaXMuX3Nob3VsZFJlbmRlck1KUEVHXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgQGxvYWQ9JHt0aGlzLl9lbGVtZW50UmVzaXplZH1cbiAgICAgICAgICAgICAgLnNyYz0ke19fREVNT19fXG4gICAgICAgICAgICAgICAgPyBgL2FwaS9jYW1lcmFfcHJveHlfc3RyZWFtLyR7dGhpcy5zdGF0ZU9iai5lbnRpdHlfaWR9YFxuICAgICAgICAgICAgICAgIDogY29tcHV0ZU1KUEVHU3RyZWFtVXJsKHRoaXMuc3RhdGVPYmopfVxuICAgICAgICAgICAgICAuYWx0PSR7YFByZXZpZXcgb2YgdGhlICR7Y29tcHV0ZVN0YXRlTmFtZShcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlT2JqXG4gICAgICAgICAgICAgICl9IGNhbWVyYS5gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICBhdXRvcGxheVxuICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgICBwbGF5c2lubGluZVxuICAgICAgICAgICAgICA/Y29udHJvbHM9JHt0aGlzLnNob3dDb250cm9sc31cbiAgICAgICAgICAgICAgQGxvYWRlZGRhdGE9JHt0aGlzLl9lbGVtZW50UmVzaXplZH1cbiAgICAgICAgICAgID48L3ZpZGVvPlxuICAgICAgICAgIGB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBjb25zdCBzdGF0ZU9iakNoYW5nZWQgPSBjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIik7XG4gICAgY29uc3QgYXR0YWNoZWRDaGFuZ2VkID0gY2hhbmdlZFByb3BzLmhhcyhcIl9hdHRhY2hlZFwiKTtcblxuICAgIGNvbnN0IG9sZFN0YXRlID0gY2hhbmdlZFByb3BzLmdldChcInN0YXRlT2JqXCIpIGFzIHRoaXNbXCJzdGF0ZU9ialwiXTtcbiAgICBjb25zdCBvbGRFbnRpdHlJZCA9IG9sZFN0YXRlID8gb2xkU3RhdGUuZW50aXR5X2lkIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGN1ckVudGl0eUlkID0gdGhpcy5zdGF0ZU9iaiA/IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKFxuICAgICAgKCFzdGF0ZU9iakNoYW5nZWQgJiYgIWF0dGFjaGVkQ2hhbmdlZCkgfHxcbiAgICAgIChzdGF0ZU9iakNoYW5nZWQgJiYgb2xkRW50aXR5SWQgPT09IGN1ckVudGl0eUlkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHdlIGFyZSBubyBsb25nZXIgYXR0YWNoZWQsIGRlc3Ryb3kgcG9seWZpbGwuXG4gICAgaWYgKGF0dGFjaGVkQ2hhbmdlZCAmJiAhdGhpcy5fYXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3lQb2x5ZmlsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE5vdGhpbmcgdG8gZG8gaWYgd2UgYXJlIHJlbmRlciBNSlBFRy5cbiAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyTUpQRUcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUZWFyIGRvd24gZXhpc3RpbmcgcG9seWZpbGwsIGlmIGF2YWlsYWJsZVxuICAgIHRoaXMuX2Rlc3Ryb3lQb2x5ZmlsbCgpO1xuXG4gICAgaWYgKGN1ckVudGl0eUlkKSB7XG4gICAgICB0aGlzLl9zdGFydEhscygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9zaG91bGRSZW5kZXJNSlBFRygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fZm9yY2VNSlBFRyA9PT0gdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkIHx8XG4gICAgICAhdGhpcy5oYXNzIS5jb25maWcuY29tcG9uZW50cy5pbmNsdWRlcyhcInN0cmVhbVwiKSB8fFxuICAgICAgIXN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqISwgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdmlkZW9FbCgpOiBIVE1MVmlkZW9FbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc3RhcnRIbHMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgY29uc3QgSGxzID0gKChhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJobHMuanNcIiAqLyBcImhscy5qc1wiKSkgYXMgYW55KVxuICAgICAgLmRlZmF1bHQgYXMgSExTTW9kdWxlO1xuICAgIGxldCBobHNTdXBwb3J0ZWQgPSBIbHMuaXNTdXBwb3J0ZWQoKTtcbiAgICBjb25zdCB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcblxuICAgIGlmICghaGxzU3VwcG9ydGVkKSB7XG4gICAgICBobHNTdXBwb3J0ZWQgPVxuICAgICAgICB2aWRlb0VsLmNhblBsYXlUeXBlKFwiYXBwbGljYXRpb24vdm5kLmFwcGxlLm1wZWd1cmxcIikgIT09IFwiXCI7XG4gICAgfVxuXG4gICAgaWYgKCFobHNTdXBwb3J0ZWQpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBmZXRjaFN0cmVhbVVybChcbiAgICAgICAgdGhpcy5oYXNzISxcbiAgICAgICAgdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkXG4gICAgICApO1xuXG4gICAgICBpZiAoSGxzLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVySExTUG9seWZpbGwodmlkZW9FbCwgSGxzLCB1cmwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVySExTTmF0aXZlKHZpZGVvRWwsIHVybCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBGYWlscyBpZiB3ZSB3ZXJlIHVuYWJsZSB0byBnZXQgYSBzdHJlYW1cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgdGhpcy5fZm9yY2VNSlBFRyA9IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXJITFNOYXRpdmUodmlkZW9FbDogSFRNTFZpZGVvRWxlbWVudCwgdXJsOiBzdHJpbmcpIHtcbiAgICB2aWRlb0VsLnNyYyA9IHVybDtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgIHZpZGVvRWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlZG1ldGFkYXRhXCIsIHJlc29sdmUpXG4gICAgKTtcbiAgICB2aWRlb0VsLnBsYXkoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbmRlckhMU1BvbHlmaWxsKFxuICAgIHZpZGVvRWw6IEhUTUxWaWRlb0VsZW1lbnQsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgSGxzOiBITFNNb2R1bGUsXG4gICAgdXJsOiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3QgaGxzID0gbmV3IEhscygpO1xuICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UgPSBobHM7XG4gICAgaGxzLmF0dGFjaE1lZGlhKHZpZGVvRWwpO1xuICAgIGhscy5vbihIbHMuRXZlbnRzLk1FRElBX0FUVEFDSEVELCAoKSA9PiB7XG4gICAgICBobHMubG9hZFNvdXJjZSh1cmwpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZWxlbWVudFJlc2l6ZWQoKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG4gIH1cblxuICBwcml2YXRlIF9kZXN0cm95UG9seWZpbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgdGhpcy5faGxzUG9seWZpbGxJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCxcbiAgICAgIGltZyxcbiAgICAgIHZpZGVvIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGltZyxcbiAgICAgIHZpZGVvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtY2FtZXJhLXN0cmVhbVwiOiBIYUNhbWVyYVN0cmVhbTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2xpbWF0ZUNvbnRyb2wgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC8qIGxvY2FsIERPTSBzdHlsZXMgZ28gaGVyZSAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWp1c3RpZmllZDtcbiAgICAgICAgfVxuICAgICAgICAuaW4tZmx1eCN0YXJnZXRfdGVtcGVyYXR1cmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgI3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNlbGYtY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1idXR0b25zIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLSBsb2NhbCBET00gZ29lcyBoZXJlIC0tPlxuICAgICAgPGRpdiBpZD1cInRhcmdldF90ZW1wZXJhdHVyZVwiPltbdmFsdWVdXSBbW3VuaXRzXV08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWJ1dHRvbnNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNoZXZyb24tdXBcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJpbmNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiZGVjcmVtZW50VmFsdWVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwidmFsdWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBzdGVwOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGluRmx1eCkge1xuICAgIHRoaXMuJC50YXJnZXRfdGVtcGVyYXR1cmUuY2xhc3NMaXN0LnRvZ2dsZShcImluLWZsdXhcIiwgaW5GbHV4KTtcbiAgfVxuXG4gIF9yb3VuZCh2YWwpIHtcbiAgICAvLyByb3VuZCB2YWx1ZSB0byBwcmVjaXNpb24gZGVyaXZlZCBmcm9tIHN0ZXBcbiAgICAvLyBpbnNpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9zb3VuZGFyMjQvcm91bmRTbGlkZXIvYmxvYi9tYXN0ZXIvc3JjL3JvdW5kc2xpZGVyLmpzXG4gICAgY29uc3QgcyA9IHRoaXMuc3RlcC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcbiAgICByZXR1cm4gc1sxXSA/IHBhcnNlRmxvYXQodmFsLnRvRml4ZWQoc1sxXS5sZW5ndGgpKSA6IE1hdGgucm91bmQodmFsKTtcbiAgfVxuXG4gIGluY3JlbWVudFZhbHVlKCkge1xuICAgIGNvbnN0IG5ld3ZhbCA9IHRoaXMuX3JvdW5kKHRoaXMudmFsdWUgKyB0aGlzLnN0ZXApO1xuICAgIGlmICh0aGlzLnZhbHVlIDwgdGhpcy5tYXgpIHtcbiAgICAgIHRoaXMubGFzdF9jaGFuZ2VkID0gRGF0ZS5ub3coKTtcbiAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eCh0cnVlKTtcbiAgICB9XG4gICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1heCkge1xuICAgICAgLy8gSWYgbm8gaW5pdGlhbCB0YXJnZXRfdGVtcFxuICAgICAgLy8gdGhpcyBmb3JjZXMgY29udHJvbCB0byBzdGFydFxuICAgICAgLy8gZnJvbSB0aGUgbWluIGNvbmZpZ3VyZWQgaW5zdGVhZCBvZiAwXG4gICAgICBpZiAobmV3dmFsIDw9IHRoaXMubWluKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1heDtcbiAgICB9XG4gIH1cblxuICBkZWNyZW1lbnRWYWx1ZSgpIHtcbiAgICBjb25zdCBuZXd2YWwgPSB0aGlzLl9yb3VuZCh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgICBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWluKSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPj0gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgLy8gd2hlbiB0aGUgbGFzdF9jaGFuZ2VkIHRpbWVzdGFtcCBpcyBjaGFuZ2VkLFxuICAgIC8vIHRyaWdnZXIgYSBwb3RlbnRpYWwgZXZlbnQgZmlyZSBpblxuICAgIC8vIHRoZSBmdXR1cmUsIGFzIGxvbmcgYXMgbGFzdCBjaGFuZ2VkIGlzIGZhciBlbm91Z2ggaW4gdGhlXG4gICAgLy8gcGFzdC5cbiAgICBpZiAodGhpcy5sYXN0X2NoYW5nZWQpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdF9jaGFuZ2VkID49IDIwMDApIHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMTApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jbGltYXRlLWNvbnRyb2xcIiwgSGFDbGltYXRlQ29udHJvbCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qKlxuICogQ29sb3ItcGlja2VyIGN1c3RvbSBlbGVtZW50XG4gKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNvbG9yUGlja2VyIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAjY2FudmFzIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMzBweDtcbiAgICAgICAgfVxuICAgICAgICAjY2FudmFzID4gKiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgI2ludGVyYWN0aW9uTGF5ZXIge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY3Vyc29yOiBjcm9zc2hhaXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgICNiYWNrZ3JvdW5kTGF5ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgIC0td2hlZWwtYm9yZGVyY29sb3I6IHZhcigtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1ib3JkZXJjb2xvciwgd2hpdGUpO1xuICAgICAgICAgIC0td2hlZWwtYm9yZGVyd2lkdGg6IHZhcigtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1ib3JkZXJ3aWR0aCwgMyk7XG4gICAgICAgICAgLS13aGVlbC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLXNoYWRvdyxcbiAgICAgICAgICAgIHJnYigxNSwgMTUsIDE1KSAxMHB4IDVweCA1cHggMHB4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgICNtYXJrZXIge1xuICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICBzdHJva2U6IHZhcigtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IHZhcigtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyd2lkdGgsIDMpO1xuICAgICAgICAgIGZpbHRlcjogdXJsKCNtYXJrZXItc2hhZG93KTtcbiAgICAgICAgfVxuICAgICAgICAuZHJhZ2dpbmcgI21hcmtlciB7XG4gICAgICAgIH1cblxuICAgICAgICAjY29sb3JUb29sdGlwIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICBzdHJva2U6IHZhcigtLWhhLWNvbG9yLXBpY2tlci10b29sdGlwLWJvcmRlcmNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1oYS1jb2xvci1waWNrZXItdG9vbHRpcC1ib3JkZXJ3aWR0aCwgMyk7XG4gICAgICAgIH1cblxuICAgICAgICAudG91Y2guZHJhZ2dpbmcgI2NvbG9yVG9vbHRpcCB7XG4gICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgaWQ9XCJjYW52YXNcIj5cbiAgICAgICAgPHN2ZyBpZD1cImludGVyYWN0aW9uTGF5ZXJcIj5cbiAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgIDxmaWx0ZXJcbiAgICAgICAgICAgICAgaWQ9XCJtYXJrZXItc2hhZG93XCJcbiAgICAgICAgICAgICAgeD1cIi01MCVcIlxuICAgICAgICAgICAgICB5PVwiLTUwJVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjIwMCVcIlxuICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGZlT2Zmc2V0XG4gICAgICAgICAgICAgICAgcmVzdWx0PVwib2ZmT3V0XCJcbiAgICAgICAgICAgICAgICBpbj1cIlNvdXJjZUFscGhhXCJcbiAgICAgICAgICAgICAgICBkeD1cIjJcIlxuICAgICAgICAgICAgICAgIGR5PVwiMlwiXG4gICAgICAgICAgICAgID48L2ZlT2Zmc2V0PlxuICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXJcbiAgICAgICAgICAgICAgICByZXN1bHQ9XCJibHVyT3V0XCJcbiAgICAgICAgICAgICAgICBpbj1cIm9mZk91dFwiXG4gICAgICAgICAgICAgICAgc3RkRGV2aWF0aW9uPVwiMlwiXG4gICAgICAgICAgICAgID48L2ZlR2F1c3NpYW5CbHVyPlxuICAgICAgICAgICAgICA8ZmVDb21wb25lbnRUcmFuc2ZlciBpbj1cImJsdXJPdXRcIiByZXN1bHQ9XCJhbHBoYU91dFwiPlxuICAgICAgICAgICAgICAgIDxmZUZ1bmNBIHR5cGU9XCJsaW5lYXJcIiBzbG9wZT1cIjAuM1wiPjwvZmVGdW5jQT5cbiAgICAgICAgICAgICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPlxuICAgICAgICAgICAgICA8ZmVCbGVuZFxuICAgICAgICAgICAgICAgIGluPVwiU291cmNlR3JhcGhpY1wiXG4gICAgICAgICAgICAgICAgaW4yPVwiYWxwaGFPdXRcIlxuICAgICAgICAgICAgICAgIG1vZGU9XCJub3JtYWxcIlxuICAgICAgICAgICAgICA+PC9mZUJsZW5kPlxuICAgICAgICAgICAgPC9maWx0ZXI+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGNhbnZhcyBpZD1cImJhY2tncm91bmRMYXllclwiPjwvY2FudmFzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHNDb2xvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICAvLyB1c2UgdGhlc2UgcHJvcGVydGllcyB0byB1cGRhdGUgdGhlIHN0YXRlIHZpYSBhdHRyaWJ1dGVzXG4gICAgICBkZXNpcmVkSHNDb2xvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImFwcGx5SHNDb2xvclwiLFxuICAgICAgfSxcblxuICAgICAgLy8gd2lkdGgsIGhlaWdodCBhbmQgcmFkaXVzIGFwcGx5IHRvIHRoZSBjb29yZGluYXRlcyBvZlxuICAgICAgLy8gb2YgdGhlIGNhbnZhcy5cbiAgICAgIC8vIGJvcmRlciB3aWR0aCBhcmUgcmVsYXRpdmUgdG8gdGhlc2UgbnVtYmVyc1xuICAgICAgLy8gdGhlIG9uc2NyZWVuIGRpc3BsYXllZCBzaXplIHNob3VsZCBiZSBjb250cm9sbGVkIHdpdGggY3NzXG4gICAgICAvLyBhbmQgc2hvdWxkIGJlIHRoZSBzYW1lIG9yIHNtYWxsZXJcbiAgICAgIHdpZHRoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgIH0sXG5cbiAgICAgIGhlaWdodDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICB9LFxuXG4gICAgICByYWRpdXM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMjI1LFxuICAgICAgfSxcblxuICAgICAgLy8gdGhlIGFtb3VudCBzZWdtZW50cyBmb3IgdGhlIGh1ZVxuICAgICAgLy8gMCA9IGNvbnRpbnVvdXMgZ3JhZGllbnRcbiAgICAgIC8vIG90aGVyIHRoYW4gMCBnaXZlcyAncGllLXBpZWNlcydcbiAgICAgIGh1ZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIG9ic2VydmVyOiBcInNlZ21lbnRhdGlvbkNoYW5nZVwiLFxuICAgICAgfSxcblxuICAgICAgLy8gdGhlIGFtb3VudCBzZWdtZW50cyBmb3IgdGhlIGh1ZVxuICAgICAgLy8gMCA9IGNvbnRpbnVvdXMgZ3JhZGllbnRcbiAgICAgIC8vIDEgPSBvbmx5IGZ1bGx5IHNhdHVyYXRlZFxuICAgICAgLy8gPiAxID0gc2VnbWVudHMgZnJvbSB3aGl0ZSB0byBmdWxseSBzYXR1cmF0ZWRcbiAgICAgIHNhdHVyYXRpb25TZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWdtZW50YXRpb25DaGFuZ2VcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHNldCB0byB0cnVlIHRvIG1ha2UgdGhlIHNlZ21lbnRzIHB1cmVseSBlc3RoZXRpY2FsXG4gICAgICAvLyB0aGlzIGFsbG93cyBzZWxlY3Rpb24gb2ZmIGFsbCBjb2xsb3JzLCBhbHNvXG4gICAgICAvLyBpbnRlcnBvbGF0ZWQgYmV0d2VlbiB0aGUgc2VnbWVudHNcbiAgICAgIGlnbm9yZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRocm90dGxlIHRlIGFtb3VudCBvZiAnY29sb3JzZWxlY3RlZCcgZXZlbnRzIGZpcmVkXG4gICAgICAvLyB2YWx1ZSBpcyB0aW1lb3V0IGluIG1pbGxpc2Vjb25kc1xuICAgICAgdGhyb3R0bGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLnNldHVwTGF5ZXJzKCk7XG4gICAgdGhpcy5kcmF3Q29sb3JXaGVlbCgpO1xuICAgIHRoaXMuZHJhd01hcmtlcigpO1xuXG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2KSA9PlxuICAgICAgdGhpcy5vbk1vdXNlRG93bihldilcbiAgICApO1xuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZXYpID0+XG4gICAgICB0aGlzLm9uVG91Y2hTdGFydChldilcbiAgICApO1xuICB9XG5cbiAgLy8gY29udmVydHMgYnJvd3NlciBjb29yZGluYXRlcyB0byBjYW52YXMgY2FudmFzIGNvb3JkaW5hdGVzXG4gIC8vIG9yaWdpbiBpcyB3aGVlbCBjZW50ZXJcbiAgLy8gcmV0dXJucyB7eDogWCwgeTogWX0gb2JqZWN0XG4gIGNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKGNsaWVudFgsIGNsaWVudFkpIHtcbiAgICB2YXIgc3ZnUG9pbnQgPSB0aGlzLmludGVyYWN0aW9uTGF5ZXIuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICBzdmdQb2ludC54ID0gY2xpZW50WDtcbiAgICBzdmdQb2ludC55ID0gY2xpZW50WTtcbiAgICB2YXIgY2MgPSBzdmdQb2ludC5tYXRyaXhUcmFuc2Zvcm0oXG4gICAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpXG4gICAgKTtcbiAgICByZXR1cm4geyB4OiBjYy54LCB5OiBjYy55IH07XG4gIH1cblxuICAvLyBNb3VzZSBldmVudHNcblxuICBvbk1vdXNlRG93bihldikge1xuICAgIGNvbnN0IGNjID0gdGhpcy5jb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyhldi5jbGllbnRYLCBldi5jbGllbnRZKTtcbiAgICAvLyByZXR1cm4gaWYgd2UncmUgbm90IG9uIHRoZSB3aGVlbFxuICAgIGlmICghdGhpcy5pc0luV2hlZWwoY2MueCwgY2MueSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYSBtb3VzZWRvd24gaW4gd2hlZWwgaXMgYWx3YXlzIGEgY29sb3Igc2VsZWN0IGFjdGlvblxuICAgIHRoaXMub25Nb3VzZVNlbGVjdChldik7XG4gICAgLy8gYWxsb3cgZHJhZ2dpbmdcbiAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwibW91c2VcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlU2VsZWN0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwKTtcbiAgfVxuXG4gIG9uTW91c2VVcCgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwibW91c2VcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlU2VsZWN0KTtcbiAgfVxuXG4gIG9uTW91c2VTZWxlY3QoZXYpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5wcm9jZXNzVXNlclNlbGVjdChldikpO1xuICB9XG5cbiAgLy8gVG91Y2ggZXZlbnRzXG5cbiAgb25Ub3VjaFN0YXJ0KGV2KSB7XG4gICAgdmFyIHRvdWNoID0gZXYuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgY29uc3QgY2MgPSB0aGlzLmNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKHRvdWNoLmNsaWVudFgsIHRvdWNoLmNsaWVudFkpO1xuICAgIC8vIHJldHVybiBpZiB3ZSdyZSBub3Qgb24gdGhlIHdoZWVsXG4gICAgaWYgKCF0aGlzLmlzSW5XaGVlbChjYy54LCBjYy55KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXYudGFyZ2V0ID09PSB0aGlzLm1hcmtlcikge1xuICAgICAgLy8gZHJhZyBtYXJrZXJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwidG91Y2hcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hTZWxlY3QpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy5vblRvdWNoRW5kKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZG9uJ3QgZmlyZSBjb2xvciBzZWxlY3Rpb24gaW1tZWRpYXRlbHksXG4gICAgLy8gd2FpdCBmb3IgdG91Y2hlbmQgYW5kIGludmFsaWRhdGUgd2hlbiB3ZSBzY3JvbGxcbiAgICB0aGlzLnRhcEJlY2FtZVNjcm9sbCA9IGZhbHNlO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25UYXApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwidG91Y2htb3ZlXCIsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMudGFwQmVjYW1lU2Nyb2xsID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB7IHBhc3NpdmU6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBvblRhcChldikge1xuICAgIGlmICh0aGlzLnRhcEJlY2FtZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25Ub3VjaFNlbGVjdChldik7XG4gIH1cblxuICBvblRvdWNoRW5kKCkge1xuICAgIHRoaXMuY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3VjaFwiLCBcImRyYWdnaW5nXCIpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLm9uVG91Y2hTZWxlY3QpO1xuICB9XG5cbiAgb25Ub3VjaFNlbGVjdChldikge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnByb2Nlc3NVc2VyU2VsZWN0KGV2LmNoYW5nZWRUb3VjaGVzWzBdKSk7XG4gIH1cblxuICAvKlxuICAgKiBHZW5lcmFsIGV2ZW50L3NlbGVjdGlvbiBoYW5kbGluZ1xuICAgKi9cblxuICAvLyBQcm9jZXNzIHVzZXIgaW5wdXQgdG8gY29sb3JcbiAgcHJvY2Vzc1VzZXJTZWxlY3QoZXYpIHtcbiAgICB2YXIgY2FudmFzWFkgPSB0aGlzLmNvbnZlcnRUb0NhbnZhc0Nvb3JkaW5hdGVzKGV2LmNsaWVudFgsIGV2LmNsaWVudFkpO1xuICAgIHZhciBocyA9IHRoaXMuZ2V0Q29sb3IoY2FudmFzWFkueCwgY2FudmFzWFkueSk7XG4gICAgdGhpcy5vbkNvbG9yU2VsZWN0KGhzKTtcbiAgfVxuXG4gIC8vIGFwcGx5IGNvbG9yIHRvIG1hcmtlciBwb3NpdGlvbiBhbmQgY2FudmFzXG4gIG9uQ29sb3JTZWxlY3QoaHMpIHtcbiAgICB0aGlzLnNldE1hcmtlck9uQ29sb3IoaHMpOyAvLyBtYXJrZXIgYWx3YXlzIGZvbGxvd3MgbW91bnNlICdyYXcnIGhzIHZhbHVlICg9IG1vdXNlIHBvc2l0aW9uKVxuICAgIGlmICghdGhpcy5pZ25vcmVTZWdtZW50cykge1xuICAgICAgLy8gYXBwbHkgc2VnbWVudHMgaWYgbmVlZGVkXG4gICAgICBocyA9IHRoaXMuYXBwbHlTZWdtZW50RmlsdGVyKGhzKTtcbiAgICB9XG4gICAgLy8gYWx3YXlzIGFwcGx5IHRoZSBuZXcgY29sb3IgdG8gdGhlIGludGVyZmFjZSAvIGNhbnZhc1xuICAgIHRoaXMuYXBwbHlDb2xvclRvQ2FudmFzKGhzKTtcbiAgICAvLyB0aHJvdHRsaW5nIGlzIGFwcGxpZWQgdG8gdXBkYXRpbmcgdGhlIGV4cG9zZWQgY29sb3JzIChwcm9wZXJ0aWVzKVxuICAgIC8vIGFuZCBmaXJpbmcgb2YgZXZlbnRzXG4gICAgaWYgKHRoaXMuY29sb3JTZWxlY3RJc1Rocm90dGxlZCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHdlIGFwcGx5IHRoZSBsYXN0IHNlbGVjdGVkIGNvbG9yXG4gICAgICAvLyBldmVudHVhbGx5IGFmdGVyIHRocm90dGxlIGxpbWl0IGhhcyBwYXNzZWRcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmVuc3VyZUZpbmFsU2VsZWN0KTtcbiAgICAgIHRoaXMuZW5zdXJlRmluYWxTZWxlY3QgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlQ29sb3JTZWxlY3RlZChocyk7IC8vIGRvIGl0IGZvciB0aGUgZmluYWwgdGltZVxuICAgICAgfSwgdGhpcy50aHJvdHRsZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZmlyZUNvbG9yU2VsZWN0ZWQoaHMpOyAvLyBkbyBpdFxuICAgIHRoaXMuY29sb3JTZWxlY3RJc1Rocm90dGxlZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbG9yU2VsZWN0SXNUaHJvdHRsZWQgPSBmYWxzZTtcbiAgICB9LCB0aGlzLnRocm90dGxlKTtcbiAgfVxuXG4gIC8vIHNldCBjb2xvciB2YWx1ZXMgYW5kIGZpcmUgY29sb3JzZWxlY3RlZCBldmVudFxuICBmaXJlQ29sb3JTZWxlY3RlZChocykge1xuICAgIHRoaXMuaHNDb2xvciA9IGhzO1xuICAgIHRoaXMuZmlyZShcImNvbG9yc2VsZWN0ZWRcIiwgeyBoczogeyBoOiBocy5oLCBzOiBocy5zIH0gfSk7XG4gIH1cblxuICAvKlxuICAgKiBJbnRlcmZhY2UgdXBkYXRpbmdcbiAgICovXG5cbiAgLy8gc2V0IG1hcmtlciBwb3NpdGlvbiB0byB0aGUgZ2l2ZW4gY29sb3JcbiAgc2V0TWFya2VyT25Db2xvcihocykge1xuICAgIHZhciBkaXN0ID0gaHMucyAqIHRoaXMucmFkaXVzO1xuICAgIHZhciB0aGV0YSA9ICgoaHMuaCAtIDE4MCkgLyAxODApICogTWF0aC5QSTtcbiAgICB2YXIgbWFya2VyZFggPSAtZGlzdCAqIE1hdGguY29zKHRoZXRhKTtcbiAgICB2YXIgbWFya2VyZFkgPSAtZGlzdCAqIE1hdGguc2luKHRoZXRhKTtcbiAgICB2YXIgdHJhbnNsYXRlU3RyaW5nID0gYHRyYW5zbGF0ZSgke21hcmtlcmRYfSwke21hcmtlcmRZfSlgO1xuICAgIHRoaXMubWFya2VyLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB0cmFuc2xhdGVTdHJpbmcpO1xuICAgIHRoaXMudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlU3RyaW5nKTtcbiAgfVxuXG4gIC8vIGFwcGx5IGdpdmVuIGNvbG9yIHRvIGludGVyZmFjZSBlbGVtZW50c1xuICBhcHBseUNvbG9yVG9DYW52YXMoaHMpIHtcbiAgICAvLyB3ZSdyZSBub3QgcmVhbGx5IGNvbnZlcnRpbmcgaHMgdG8gaHNsIGhlcmUsIGJ1dCB3ZSBrZWVwIGl0IGNoZWFwXG4gICAgLy8gc2V0dGluZyB0aGUgY29sb3Igb24gdGhlIGludGVyYWN0aW9uTGF5ZXIsIHRoZSBzdmcgZWxlbWVudHMgY2FuIGluaGVyaXRcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuc3R5bGUuY29sb3IgPSBgaHNsKCR7aHMuaH0sIDEwMCUsICR7MTAwIC1cbiAgICAgIGhzLnMgKiA1MH0lKWA7XG4gIH1cblxuICBhcHBseUhzQ29sb3IoaHMpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlzIHdlIGFscmVhZHkgaGF2ZSB0aGUgc2FtZSBjb2xvclxuICAgIGlmICh0aGlzLmhzQ29sb3IgJiYgdGhpcy5oc0NvbG9yLmggPT09IGhzLmggJiYgdGhpcy5oc0NvbG9yLnMgPT09IGhzLnMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRNYXJrZXJPbkNvbG9yKGhzKTsgLy8gbWFya2VyIGlzIGFsd2F5cyBzZXQgb24gJ3JhdycgaHMgcG9zaXRpb25cbiAgICBpZiAoIXRoaXMuaWdub3JlU2VnbWVudHMpIHtcbiAgICAgIC8vIGFwcGx5IHNlZ21lbnRzIGlmIG5lZWRlZFxuICAgICAgaHMgPSB0aGlzLmFwcGx5U2VnbWVudEZpbHRlcihocyk7XG4gICAgfVxuICAgIHRoaXMuaHNDb2xvciA9IGhzO1xuICAgIC8vIGFsd2F5cyBhcHBseSB0aGUgbmV3IGNvbG9yIHRvIHRoZSBpbnRlcmZhY2UgLyBjYW52YXNcbiAgICB0aGlzLmFwcGx5Q29sb3JUb0NhbnZhcyhocyk7XG4gIH1cblxuICAvKlxuICAgKiBpbnB1dCBwcm9jZXNzaW5nIGhlbHBlcnNcbiAgICovXG5cbiAgLy8gZ2V0IGFuZ2xlIChkZWdyZWVzKVxuICBnZXRBbmdsZShkWCwgZFkpIHtcbiAgICB2YXIgdGhldGEgPSBNYXRoLmF0YW4yKC1kWSwgLWRYKTsgLy8gcmFkaWFucyBmcm9tIHRoZSBsZWZ0IGVkZ2UsIGNsb2Nrd2lzZSA9IHBvc2l0aXZlXG4gICAgdmFyIGFuZ2xlID0gKHRoZXRhIC8gTWF0aC5QSSkgKiAxODAgKyAxODA7IC8vIGRlZ3JlZXMsIGNsb2Nrd2lzZSBmcm9tIHJpZ2h0XG4gICAgcmV0dXJuIGFuZ2xlO1xuICB9XG5cbiAgLy8gcmV0dXJucyB0cnVlIHdoZW4gY29vcmRpbmF0ZXMgYXJlIGluIHRoZSBjb2xvcndoZWVsXG4gIGlzSW5XaGVlbCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSkgPD0gMTtcbiAgfVxuXG4gIC8vIHJldHVybnMgZGlzdGFuY2UgZnJvbSB3aGVlbCBjZW50ZXIsIDAgPSBjZW50ZXIsIDEgPSBlZGdlLCA+MSA9IG91dHNpZGVcbiAgZ2V0RGlzdGFuY2UoZFgsIGRZKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChkWCAqIGRYICsgZFkgKiBkWSkgLyB0aGlzLnJhZGl1cztcbiAgfVxuXG4gIC8qXG4gICAqIEdldHRpbmcgY29sb3JzXG4gICAqL1xuXG4gIGdldENvbG9yKHgsIHkpIHtcbiAgICB2YXIgaHVlID0gdGhpcy5nZXRBbmdsZSh4LCB5KTsgLy8gZGVncmVlcywgY2xvY2t3aXNlIGZyb20gcmlnaHRcbiAgICB2YXIgcmVsYXRpdmVEaXN0YW5jZSA9IHRoaXMuZ2V0RGlzdGFuY2UoeCwgeSk7IC8vIGVkZ2Ugb2YgcmFkaXVzID0gMVxuICAgIHZhciBzYXQgPSBNYXRoLm1pbihyZWxhdGl2ZURpc3RhbmNlLCAxKTsgLy8gRGlzdGFuY2UgZnJvbSBjZW50ZXJcbiAgICByZXR1cm4geyBoOiBodWUsIHM6IHNhdCB9O1xuICB9XG5cbiAgYXBwbHlTZWdtZW50RmlsdGVyKGhzKSB7XG4gICAgLy8gYXBwbHkgaHVlIHNlZ21lbnQgc3RlcHNcbiAgICBpZiAodGhpcy5odWVTZWdtZW50cykge1xuICAgICAgY29uc3QgYW5nbGVTdGVwID0gMzYwIC8gdGhpcy5odWVTZWdtZW50cztcbiAgICAgIGNvbnN0IGhhbGZBbmdsZVN0ZXAgPSBhbmdsZVN0ZXAgLyAyO1xuICAgICAgaHMuaCAtPSBoYWxmQW5nbGVTdGVwOyAvLyB0YWtlIHRoZSAnY2VudGVyZWQgc2VnZW1udHMnIGludG8gYWNjb3VudFxuICAgICAgaWYgKGhzLmggPCAwKSB7XG4gICAgICAgIGhzLmggKz0gMzYwO1xuICAgICAgfSAvLyBkb24ndCBlbmQgdXAgYmVsb3cgMFxuICAgICAgY29uc3QgcmVzdCA9IGhzLmggJSBhbmdsZVN0ZXA7XG4gICAgICBocy5oIC09IHJlc3QgLSBhbmdsZVN0ZXA7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgc2F0dXJhdGlvbiBzZWdtZW50IHN0ZXBzXG4gICAgaWYgKHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzKSB7XG4gICAgICBpZiAodGhpcy5zYXR1cmF0aW9uU2VnbWVudHMgPT09IDEpIHtcbiAgICAgICAgaHMucyA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2VnbWVudFNpemUgPSAxIC8gdGhpcy5zYXR1cmF0aW9uU2VnbWVudHM7XG4gICAgICAgIHZhciBzYXR1cmF0aW9uU3RlcCA9IDEgLyAodGhpcy5zYXR1cmF0aW9uU2VnbWVudHMgLSAxKTtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZWRTYXQgPSBNYXRoLmZsb29yKGhzLnMgLyBzZWdtZW50U2l6ZSkgKiBzYXR1cmF0aW9uU3RlcDtcbiAgICAgICAgaHMucyA9IE1hdGgubWluKGNhbGN1bGF0ZWRTYXQsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHM7XG4gIH1cblxuICAvKlxuICAgKiBEcmF3aW5nIHJlbGF0ZWQgc3R1ZmZcbiAgICovXG5cbiAgc2V0dXBMYXllcnMoKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLiQuY2FudmFzO1xuICAgIHRoaXMuYmFja2dyb3VuZExheWVyID0gdGhpcy4kLmJhY2tncm91bmRMYXllcjtcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIgPSB0aGlzLiQuaW50ZXJhY3Rpb25MYXllcjtcblxuICAgIC8vIGNvb3JkaW5hdGUgb3JpZ2luIHBvc2l0aW9uIChjZW50ZXIgb2YgdGhlIHdoZWVsKVxuICAgIHRoaXMub3JpZ2luWCA9IHRoaXMud2lkdGggLyAyO1xuICAgIHRoaXMub3JpZ2luWSA9IHRoaXMub3JpZ2luWDtcblxuICAgIC8vIHN5bmNocm9uaXNlIHdpZHRoL2hlaWdodCBjb29yZGluYXRlc1xuICAgIHRoaXMuYmFja2dyb3VuZExheWVyLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLmJhY2tncm91bmRMYXllci5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICBgJHstdGhpcy5vcmlnaW5YfSAkey10aGlzLm9yaWdpbll9ICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gXG4gICAgKTtcbiAgfVxuXG4gIGRyYXdDb2xvcldoZWVsKCkge1xuICAgIC8qXG4gICAgICogIFNldHRpbmcgdXAgYWxsIHBhcmVtZXRlcnNcbiAgICAgKi9cbiAgICBsZXQgc2hhZG93Q29sb3I7XG4gICAgbGV0IHNoYWRvd09mZnNldFg7XG4gICAgbGV0IHNoYWRvd09mZnNldFk7XG4gICAgbGV0IHNoYWRvd0JsdXI7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuYmFja2dyb3VuZExheWVyLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAvLyBwb3N0aW9uaW5nIGFuZCBzaXppbmdcbiAgICBjb25zdCBjWCA9IHRoaXMub3JpZ2luWDtcbiAgICBjb25zdCBjWSA9IHRoaXMub3JpZ2luWTtcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLnJhZGl1cztcbiAgICBjb25zdCBjb3VudGVyQ2xvY2t3aXNlID0gZmFsc2U7XG4gICAgLy8gc3R5bGluZyBvZiB0aGUgd2hlZWxcbiAgICBjb25zdCB3aGVlbFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5iYWNrZ3JvdW5kTGF5ZXIsIG51bGwpO1xuICAgIGNvbnN0IGJvcmRlcldpZHRoID0gcGFyc2VJbnQoXG4gICAgICB3aGVlbFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLXdoZWVsLWJvcmRlcndpZHRoXCIpLFxuICAgICAgMTBcbiAgICApO1xuICAgIGNvbnN0IGJvcmRlckNvbG9yID0gd2hlZWxTdHlsZVxuICAgICAgLmdldFByb3BlcnR5VmFsdWUoXCItLXdoZWVsLWJvcmRlcmNvbG9yXCIpXG4gICAgICAudHJpbSgpO1xuICAgIGNvbnN0IHdoZWVsU2hhZG93ID0gd2hlZWxTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS13aGVlbC1zaGFkb3dcIikudHJpbSgpO1xuICAgIC8vIGV4dHJhY3Qgc2hhZG93IHByb3BlcnRpZXMgZnJvbSAgQ0NTIHZhcmlhYmxlXG4gICAgLy8gdGhlIHNoYWRvdyBzaG91bGQgYmUgZGVmaW5lZCBhczogXCIxMHB4IDVweCA1cHggMHB4IENPTE9SXCJcbiAgICBpZiAod2hlZWxTaGFkb3cgIT09IFwibm9uZVwiKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB3aGVlbFNoYWRvdy5zcGxpdChcInB4IFwiKTtcbiAgICAgIHNoYWRvd0NvbG9yID0gdmFsdWVzLnBvcCgpO1xuICAgICAgc2hhZG93T2Zmc2V0WCA9IHBhcnNlSW50KHZhbHVlc1swXSwgMTApO1xuICAgICAgc2hhZG93T2Zmc2V0WSA9IHBhcnNlSW50KHZhbHVlc1sxXSwgMTApO1xuICAgICAgc2hhZG93Qmx1ciA9IHBhcnNlSW50KHZhbHVlc1syXSwgMTApIHx8IDA7XG4gICAgfVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHJhZGl1cyArIGJvcmRlcldpZHRoIC8gMjtcbiAgICBjb25zdCB3aGVlbFJhZGl1cyA9IHJhZGl1cztcbiAgICBjb25zdCBzaGFkb3dSYWRpdXMgPSByYWRpdXMgKyBib3JkZXJXaWR0aDtcblxuICAgIC8qXG4gICAgICogIERyYXdpbmcgZnVuY3Rpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gZHJhd0NpcmNsZShodWVTZWdtZW50cywgc2F0dXJhdGlvblNlZ21lbnRzKSB7XG4gICAgICBodWVTZWdtZW50cyA9IGh1ZVNlZ21lbnRzIHx8IDM2MDsgLy8gcmVzZXQgMCBzZWdtZW50cyB0byAzNjBcbiAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDM2MCAvIGh1ZVNlZ21lbnRzO1xuICAgICAgY29uc3QgaGFsZkFuZ2xlU3RlcCA9IGFuZ2xlU3RlcCAvIDI7IC8vIGNlbnRlciBzZWdtZW50cyBvbiBjb2xvclxuICAgICAgZm9yICh2YXIgYW5nbGUgPSAwOyBhbmdsZSA8PSAzNjA7IGFuZ2xlICs9IGFuZ2xlU3RlcCkge1xuICAgICAgICB2YXIgc3RhcnRBbmdsZSA9IChhbmdsZSAtIGhhbGZBbmdsZVN0ZXApICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICB2YXIgZW5kQW5nbGUgPSAoYW5nbGUgKyBoYWxmQW5nbGVTdGVwICsgMSkgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgIGNvbnRleHQubW92ZVRvKGNYLCBjWSk7XG4gICAgICAgIGNvbnRleHQuYXJjKFxuICAgICAgICAgIGNYLFxuICAgICAgICAgIGNZLFxuICAgICAgICAgIHdoZWVsUmFkaXVzLFxuICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgY291bnRlckNsb2Nrd2lzZVxuICAgICAgICApO1xuICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAvLyBncmFkaWVudFxuICAgICAgICB2YXIgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KFxuICAgICAgICAgIGNYLFxuICAgICAgICAgIGNZLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgY1gsXG4gICAgICAgICAgY1ksXG4gICAgICAgICAgd2hlZWxSYWRpdXNcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGxpZ2h0bmVzcyA9IDEwMDtcbiAgICAgICAgLy8gZmlyc3QgZ3JhZGllbnQgc3RvcFxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYGhzbCgke2FuZ2xlfSwgMTAwJSwgJHtsaWdodG5lc3N9JSlgKTtcbiAgICAgICAgLy8gc2VnbWVudCBncmFkaWVudCBzdG9wc1xuICAgICAgICBpZiAoc2F0dXJhdGlvblNlZ21lbnRzID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJhdGlvU3RlcCA9IDEgLyBzYXR1cmF0aW9uU2VnbWVudHM7XG4gICAgICAgICAgbGV0IHJhdGlvID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBzdG9wID0gMTsgc3RvcCA8IHNhdHVyYXRpb25TZWdtZW50czsgc3RvcCArPSAxKSB7XG4gICAgICAgICAgICB2YXIgcHJldkxpZ2huZXNzID0gbGlnaHRuZXNzO1xuICAgICAgICAgICAgcmF0aW8gPSBzdG9wICogcmF0aW9TdGVwO1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gMTAwIC0gNTAgKiByYXRpbztcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcbiAgICAgICAgICAgICAgcmF0aW8sXG4gICAgICAgICAgICAgIGBoc2woJHthbmdsZX0sIDEwMCUsICR7cHJldkxpZ2huZXNzfSUpYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChyYXRpbywgYGhzbCgke2FuZ2xlfSwgMTAwJSwgJHtsaWdodG5lc3N9JSlgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKHJhdGlvLCBgaHNsKCR7YW5nbGV9LCAxMDAlLCA1MCUpYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGFzdCBncmFkaWVudCBzdG9wXG4gICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBgaHNsKCR7YW5nbGV9LCAxMDAlLCA1MCUpYCk7XG5cbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhd1NoYWRvdygpIHtcbiAgICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnRleHQuYXJjKGNYLCBjWSwgc2hhZG93UmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgY29udGV4dC5zaGFkb3dDb2xvciA9IHNoYWRvd0NvbG9yO1xuICAgICAgY29udGV4dC5zaGFkb3dPZmZzZXRYID0gc2hhZG93T2Zmc2V0WDtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WSA9IHNoYWRvd09mZnNldFk7XG4gICAgICBjb250ZXh0LnNoYWRvd0JsdXIgPSBzaGFkb3dCbHVyO1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICBjb250ZXh0LmZpbGwoKTtcbiAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdCb3JkZXIoKSB7XG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgY29udGV4dC5hcmMoY1gsIGNZLCBib3JkZXJSYWRpdXMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlcldpZHRoO1xuICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqICAgQ2FsbCB0aGUgZHJhd2luZyBmdW5jdGlvbnNcbiAgICAgKiAgIGRyYXdzIHRoZSBzaGFkb3csIHdoZWVsIGFuZCBib3JkZXJcbiAgICAgKi9cbiAgICBpZiAod2hlZWxTdHlsZS5zaGFkb3cgIT09IFwibm9uZVwiKSB7XG4gICAgICBkcmF3U2hhZG93KCk7XG4gICAgfVxuICAgIGRyYXdDaXJjbGUodGhpcy5odWVTZWdtZW50cywgdGhpcy5zYXR1cmF0aW9uU2VnbWVudHMpO1xuICAgIGlmIChib3JkZXJXaWR0aCA+IDApIHtcbiAgICAgIGRyYXdCb3JkZXIoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiAgIERyYXcgdGhlIChkcmFnZ2FibGUpIG1hcmtlciBhbmQgdG9vbHRpcFxuICAgKiAgIG9uIHRoZSBpbnRlcmFjdGlvbkxheWVyKVxuICAgKi9cblxuICBkcmF3TWFya2VyKCkge1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSB0aGlzLmludGVyYWN0aW9uTGF5ZXI7XG4gICAgY29uc3QgbWFya2VycmFkaXVzID0gdGhpcy5yYWRpdXMgKiAwLjA4O1xuICAgIGNvbnN0IHRvb2x0aXByYWRpdXMgPSB0aGlzLnJhZGl1cyAqIDAuMTU7XG4gICAgY29uc3QgVG9vbHRpcE9mZnNldFkgPSAtKHRvb2x0aXByYWRpdXMgKiAzKTtcbiAgICBjb25zdCBUb29sdGlwT2Zmc2V0WCA9IDA7XG5cbiAgICBzdmdFbGVtZW50Lm1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwiY2lyY2xlXCJcbiAgICApO1xuICAgIHN2Z0VsZW1lbnQubWFya2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFya2VyXCIpO1xuICAgIHN2Z0VsZW1lbnQubWFya2VyLnNldEF0dHJpYnV0ZShcInJcIiwgbWFya2VycmFkaXVzKTtcbiAgICB0aGlzLm1hcmtlciA9IHN2Z0VsZW1lbnQubWFya2VyO1xuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC5tYXJrZXIpO1xuXG4gICAgc3ZnRWxlbWVudC50b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJjaXJjbGVcIlxuICAgICk7XG4gICAgc3ZnRWxlbWVudC50b29sdGlwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29sb3JUb29sdGlwXCIpO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRvb2x0aXByYWRpdXMpO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBUb29sdGlwT2Zmc2V0WCk7XG4gICAgc3ZnRWxlbWVudC50b29sdGlwLnNldEF0dHJpYnV0ZShcImN5XCIsIFRvb2x0aXBPZmZzZXRZKTtcbiAgICB0aGlzLnRvb2x0aXAgPSBzdmdFbGVtZW50LnRvb2x0aXA7XG4gICAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChzdmdFbGVtZW50LnRvb2x0aXApO1xuICB9XG5cbiAgc2VnbWVudGF0aW9uQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmJhY2tncm91bmRMYXllcikge1xuICAgICAgdGhpcy5kcmF3Q29sb3JXaGVlbCgpO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29sb3ItcGlja2VyXCIsIEhhQ29sb3JQaWNrZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4vaGEtaWNvblwiO1xuXG5jbGFzcyBIYUxhYmVsZWRTbGlkZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1pY29uIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1zZWNvbmRhcnktb3BhY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWhhLXNsaWRlci1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+W1tjYXB0aW9uXV08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleHRyYS1jb250YWluZXJcIj48c2xvdCBuYW1lPVwiZXh0cmFcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICA8aGEtaWNvbiBpY29uPVwiW1tpY29uXV1cIiBoaWRkZW4kPVwiW1shaWNvbl1dXCI+PC9oYS1pY29uPlxuICAgICAgICA8aGEtcGFwZXItc2xpZGVyXG4gICAgICAgICAgbWluPVwiW1ttaW5dXVwiXG4gICAgICAgICAgbWF4PVwiW1ttYXhdXVwiXG4gICAgICAgICAgc3RlcD1cIltbc3RlcF1dXCJcbiAgICAgICAgICBwaW49XCJbW3Bpbl1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgPjwvaGEtcGFwZXItc2xpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FwdGlvbjogU3RyaW5nLFxuICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICBtaW46IE51bWJlcixcbiAgICAgIG1heDogTnVtYmVyLFxuICAgICAgcGluOiBCb29sZWFuLFxuICAgICAgc3RlcDogTnVtYmVyLFxuXG4gICAgICBleHRyYToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgaWdub3JlQmFyVG91Y2g6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgICAgaWNvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxhYmVsZWQtc2xpZGVyXCIsIEhhTGFiZWxlZFNsaWRlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyXCI7XG5cbmNvbnN0IHBhcGVyRHJvcGRvd25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcbiAgXCJwYXBlci1kcm9wZG93bi1tZW51XCJcbikgYXMgQ29uc3RydWN0b3I8UG9seW1lckVsZW1lbnQ+O1xuXG4vLyBwYXRjaGVzIHBhcGVyIGRyb3AgZG93biB0byBwcm9wZXJseSBzdXBwb3J0IFJUTCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItZHJvcGRvd24tbWVudS9pc3N1ZXMvMTgzXG5leHBvcnQgY2xhc3MgSGFQYXBlckRyb3Bkb3duQ2xhc3MgZXh0ZW5kcyBwYXBlckRyb3Bkb3duQ2xhc3Mge1xuICBwdWJsaWMgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcInJ0bFwiKSB7XG4gICAgICAgIHRoaXMuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjogSGFQYXBlckRyb3Bkb3duQ2xhc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiLCBIYVBhcGVyRHJvcGRvd25DbGFzcyk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJJY29uQnV0dG9uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuXG5jb25zdCBwYXBlckljb25CdXR0b25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcbiAgXCJwYXBlci1pY29uLWJ1dHRvblwiXG4pIGFzIENvbnN0cnVjdG9yPFBhcGVySWNvbkJ1dHRvbkVsZW1lbnQ+O1xuXG5leHBvcnQgY2xhc3MgSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXYgZXh0ZW5kcyBwYXBlckljb25CdXR0b25DbGFzcyB7XG4gIHB1YmxpYyBoYXNzaW8/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gd2FpdCB0byBjaGVjayBmb3IgZGlyZWN0aW9uIHNpbmNlIG90aGVyd2lzZSBkaXJlY3Rpb24gaXMgd3JvbmcgZXZlbiB0aG91Z2ggdG9wIGxldmVsIGlzIFJUTFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pY29uID1cbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSBcImx0clwiXG4gICAgICAgICAgPyB0aGlzLmhhc3Npb1xuICAgICAgICAgICAgPyBcImhhc3NpbzphcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgIDogXCJoYXNzOmFycm93LWxlZnRcIlxuICAgICAgICAgIDogdGhpcy5oYXNzaW9cbiAgICAgICAgICA/IFwiaGFzc2lvOmFycm93LXJpZ2h0XCJcbiAgICAgICAgICA6IFwiaGFzczphcnJvdy1yaWdodFwiO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjogSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXY7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIixcbiAgSGFQYXBlckljb25CdXR0b25BcnJvd1ByZXZcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1zbGlkZXIvcGFwZXItc2xpZGVyXCI7XG5cbi8qKlxuICogQHBvbHltZXJcbiAqIEBjdXN0b21FbGVtZW50XG4gKiBAYXBwbGllc01peGluIHBhcGVyLXNsaWRlclxuICovXG5jb25zdCBQYXBlclNsaWRlckNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItc2xpZGVyXCIpO1xuXG5jbGFzcyBIYVBhcGVyU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdHBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuICAgIHRwbC5pbm5lckhUTUwgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmlubmVySFRNTDtcbiAgICBjb25zdCBzdHlsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gYFxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogIHZhcigtLWhhLXBhcGVyLXNsaWRlci1waW4tZm9udC1zaXplLCAxMHB4KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4yZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSg3cHgsIC03cHgpO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMS4xZW07XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjFlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgfVxuXG4gICAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICBgO1xuICAgIHRwbC5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlRWwpO1xuICAgIHJldHVybiB0cGw7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLXNsaWRlclwiLCBIYVBhcGVyU2xpZGVyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVdhdGVySGVhdGVyQ29udHJvbCBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLyogbG9jYWwgRE9NIHN0eWxlcyBnbyBoZXJlICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtanVzdGlmaWVkO1xuICAgICAgICB9XG4gICAgICAgIC5pbi1mbHV4I3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2VsZi1jZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb250cm9sLWJ1dHRvbnMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8IS0tIGxvY2FsIERPTSBnb2VzIGhlcmUgLS0+XG4gICAgICA8ZGl2IGlkPVwidGFyZ2V0X3RlbXBlcmF0dXJlXCI+W1t2YWx1ZV1dIFtbdW5pdHNdXTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uc1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi11cFwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImluY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLWRvd25cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJkZWNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJ2YWx1ZUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB1bml0czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHRlbXBlcmF0dXJlU3RhdGVJbkZsdXgoaW5GbHV4KSB7XG4gICAgdGhpcy4kLnRhcmdldF90ZW1wZXJhdHVyZS5jbGFzc0xpc3QudG9nZ2xlKFwiaW4tZmx1eFwiLCBpbkZsdXgpO1xuICB9XG5cbiAgaW5jcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy52YWx1ZSArIHRoaXMuc3RlcDtcbiAgICBpZiAodGhpcy52YWx1ZSA8IHRoaXMubWF4KSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPD0gdGhpcy5tYXgpIHtcbiAgICAgIC8vIElmIG5vIGluaXRpYWwgdGFyZ2V0X3RlbXBcbiAgICAgIC8vIHRoaXMgZm9yY2VzIGNvbnRyb2wgdG8gc3RhcnRcbiAgICAgIC8vIGZyb20gdGhlIG1pbiBjb25maWd1cmVkIGluc3RlYWQgb2YgMFxuICAgICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1pbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy52YWx1ZSAtIHRoaXMuc3RlcDtcbiAgICBpZiAodGhpcy52YWx1ZSA+IHRoaXMubWluKSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPj0gdGhpcy5taW4pIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXd2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgLy8gd2hlbiB0aGUgbGFzdF9jaGFuZ2VkIHRpbWVzdGFtcCBpcyBjaGFuZ2VkLFxuICAgIC8vIHRyaWdnZXIgYSBwb3RlbnRpYWwgZXZlbnQgZmlyZSBpblxuICAgIC8vIHRoZSBmdXR1cmUsIGFzIGxvbmcgYXMgbGFzdCBjaGFuZ2VkIGlzIGZhciBlbm91Z2ggaW4gdGhlXG4gICAgLy8gcGFzdC5cbiAgICBpZiAodGhpcy5sYXN0X2NoYW5nZWQpIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKG5vdyAtIHRoaXMubGFzdF9jaGFuZ2VkID49IDIwMDApIHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJjaGFuZ2VcIik7XG4gICAgICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMTApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS13YXRlcl9oZWF0ZXItY29udHJvbFwiLCBIYVdhdGVySGVhdGVyQ29udHJvbCk7XG4iLCIvKipcbkFkYXB0ZWQgZnJvbSBwYXBlci10aW1lLWlucHV0IGZyb21cbmh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuYnVybnMyMy9wYXBlci10aW1lLWlucHV0XG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXG5cbmA8cGFwZXItdGltZS1pbnB1dD5gIFBvbHltZXIgZWxlbWVudCB0byBhY2NlcHQgYSB0aW1lIHdpdGggcGFwZXItaW5wdXQgJiBwYXBlci1kcm9wZG93bi1tZW51XG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcblxuIyMjIFN0eWxpbmdcblxuYDxwYXBlci10aW1lLWlucHV0PmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcmAgfCBkcm9wZG93biByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxuYC0tcGFwZXItdGltZS1kcm9wZG93bi1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZHJvcGRvd24gaW5wdXQgfCBge31gXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXBlclRpbWVJbnB1dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgICAvKiBEYW1uIHlvdSBmaXJlZm94XG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XG4gICAgICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3OTA5MzUvY2FuLWktaGlkZS10aGUtaHRtbDUtbnVtYmVyLWlucHV0LXMtc3Bpbi1ib3hcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZV8tXy13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAvKiBGb3JjZSByaXBwbGUgdG8gdXNlIHRoZSB3aG9sZSBjb250YWluZXIgKi9cbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLXBhcGVyLXRpbWUtaW5wdXQtZHJvcGRvd24tcmlwcGxlLWNvbG9yLFxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYnV0dG9uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWlucHV0LXdyYXAge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1uby13cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGxhYmVsIGhpZGRlbiQ9XCJbW2hpZGVMYWJlbF1dXCI+W1tsYWJlbF1dPC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWlucHV0LXdyYXBcIj5cbiAgICAgICAgPCEtLSBIb3VyIElucHV0IC0tPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBpZD1cImhvdXJcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3tob3VyfX1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9zaG91bGRGb3JtYXRIb3VyXCJcbiAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dD1cIlwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgbWF4PVwiW1tfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KV1dXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBNaW4gSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9mb3JtYXRNaW5cIlxuICAgICAgICAgIHJlcXVpcmVkPVwiXCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgcHJldmVudC1pbnZhbGlkLWlucHV0PVwiXCJcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCI1OVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuXG4gICAgICAgIDwhLS0gRHJvcGRvd24gTWVudSAtLT5cbiAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICBpZD1cImRyb3Bkb3duXCJcbiAgICAgICAgICByZXF1aXJlZD1cIlwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbX2VxdWFsKGZvcm1hdCwgMjQpXV1cIlxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHNlbGVjdGVkPVwie3thbVBtfX1cIlxuICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtIG5hbWU9XCJBTVwiPkFNPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgPHBhcGVyLWl0ZW0gbmFtZT1cIlBNXCI+UE08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIExhYmVsIGZvciB0aGUgaW5wdXRcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJUaW1lXCIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhdXRvIHZhbGlkYXRlIHRpbWUgaW5wdXRzXG4gICAgICAgKi9cbiAgICAgIGF1dG9WYWxpZGF0ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGhpZGVzIHRoZSBsYWJlbFxuICAgICAgICovXG4gICAgICBoaWRlTGFiZWw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogMTIgb3IgMjQgaHIgZm9ybWF0XG4gICAgICAgKi9cbiAgICAgIGZvcm1hdDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxMixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGRpc2FibGVzIHRoZSBpbnB1dHNcbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogaG91clxuICAgICAgICovXG4gICAgICBob3VyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogbWludXRlXG4gICAgICAgKi9cbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEFNIG9yIFBNXG4gICAgICAgKi9cbiAgICAgIGFtUG06IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBcIkFNXCIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBGb3JtYXR0ZWQgdGltZSBzdHJpbmdcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVRpbWUobWluLCBob3VyLCBhbVBtKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBpbnB1dHNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgLy8gVmFsaWRhdGUgaG91ciAmIG1pbiBmaWVsZHNcbiAgICBpZiAoIXRoaXMuJC5ob3VyLnZhbGlkYXRlKCkgfCAhdGhpcy4kLm1pbi52YWxpZGF0ZSgpKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBWYWxpZGF0ZSBBTSBQTSBpZiAxMiBob3VyIHRpbWVcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyICYmICF0aGlzLiQuZHJvcGRvd24udmFsaWRhdGUoKSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aW1lIHN0cmluZ1xuICAgKi9cbiAgX2NvbXB1dGVUaW1lKG1pbiwgaG91ciwgYW1QbSkge1xuICAgIGlmIChob3VyICYmIG1pbikge1xuICAgICAgLy8gTm8gYW1wbSBvbiAyNCBociB0aW1lXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0KSB7XG4gICAgICAgIGFtUG0gPSBcIlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbiArIFwiIFwiICsgYW1QbTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgbWluXG4gICAqL1xuICBfZm9ybWF0TWluKCkge1xuICAgIGlmICh0aGlzLm1pbi50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5taW4gPSB0aGlzLm1pbiA8IDEwID8gXCIwXCIgKyB0aGlzLm1pbiA6IHRoaXMubWluO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb3VyIG5lZWRzIGEgbGVhZGluZyB6ZXJvIGluIDI0aHIgZm9ybWF0XG4gICAqL1xuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0ICYmIHRoaXMuaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5ob3VyID0gdGhpcy5ob3VyIDwgMTAgPyBcIjBcIiArIHRoaXMuaG91ciA6IHRoaXMuaG91cjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogMjQgaG91ciBmb3JtYXQgaGFzIGEgbWF4IGhyIG9mIDIzXG4gICAqL1xuICBfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gMTIpIHtcbiAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuICAgIHJldHVybiAyMztcbiAgfVxuXG4gIF9lcXVhbChuMSwgbjIpIHtcbiAgICByZXR1cm4gbjEgPT09IG4yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInBhcGVyLXRpbWUtaW5wdXRcIiwgUGFwZXJUaW1lSW5wdXQpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeSB7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyeV9pZD86IHN0cmluZztcbiAgZGV2aWNlX2lkPzogc3RyaW5nO1xuICBkaXNhYmxlZF9ieTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zIHtcbiAgbmFtZT86IHN0cmluZyB8IG51bGw7XG4gIGRpc2FibGVkX2J5Pzogc3RyaW5nIHwgbnVsbDtcbiAgbmV3X2VudGl0eV9pZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVFbnRpdHlSZWdpc3RyeU5hbWUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudHJ5OiBFbnRpdHlSZWdpc3RyeUVudHJ5XG4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgaWYgKGVudHJ5Lm5hbWUpIHtcbiAgICByZXR1cm4gZW50cnkubmFtZTtcbiAgfVxuICBjb25zdCBzdGF0ZSA9IGhhc3Muc3RhdGVzW2VudHJ5LmVudGl0eV9pZF07XG4gIHJldHVybiBzdGF0ZSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXM+XG4pOiBQcm9taXNlPEVudGl0eVJlZ2lzdHJ5RW50cnk+ID0+XG4gIGhhc3MuY2FsbFdTPEVudGl0eVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9yZW1vdmVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcblxuY29uc3QgZmV0Y2hFbnRpdHlSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2xpc3RcIixcbiAgfSk7XG5cbmNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGVudGl0aWVzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGVudGl0aWVzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJlbnRpdHlfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChlbnRpdGllczogRW50aXR5UmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248RW50aXR5UmVnaXN0cnlFbnRyeVtdPihcbiAgICBcIl9lbnRpdHlSZWdpc3RyeVwiLFxuICAgIGZldGNoRW50aXR5UmVnaXN0cnksXG4gICAgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL21vcmUtaW5mby9tb3JlLWluZm8tY29udHJvbHNcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvL21vcmUtaW5mby1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcblxuaW1wb3J0IERpYWxvZ01peGluIGZyb20gXCIuLi9taXhpbnMvZGlhbG9nLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIERpYWxvZ01peGluXG4gKi9cbmNsYXNzIEhhTW9yZUluZm9EaWFsb2cgZXh0ZW5kcyBEaWFsb2dNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2cgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB3aWR0aDogMzY1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICBtb3JlLWluZm8tc2V0dGluZ3Mge1xuICAgICAgICAgIC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlOiB7XG4gICAgICAgICAgICAvKiBEZXNpZ24gZ3VpZGVsaW5lIHN0YXRlcyAyNHB4LCBjaGFuZ2VkIHRvIDE2IHRvIGFsaWduIHdpdGggc3RhdGUgaW5mbyAqL1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyLjZlbTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAvKiB3ZWJraXQgYW5kIGJsaW5rIHN0aWxsIHN1cHBvcnQgc2ltcGxlIG11bHRpbGluZSB0ZXh0LW92ZXJmbG93ICovXG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBvdmVycnVsZSB0aGUgaGEtc3R5bGUtZGlhbG9nIG1heC1oZWlnaHQgb24gc21hbGwgc2NyZWVucyAqL1xuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgbW9yZS1pbmZvLWNvbnRyb2xzLFxuICAgICAgICAgIG1vcmUtaW5mby1zZXR0aW5ncyB7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RhdGEtZG9tYWluPVwiY2FtZXJhXCJdKSB7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZGF0YS1kb21haW49XCJoaXN0b3J5X2dyYXBoXCJdKSxcbiAgICAgICAgOmhvc3QoW2xhcmdlXSkge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3BhZ2VdXVwiPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRyb2xzXG4gICAgICAgICAgY2xhc3M9XCJuby1wYWRkaW5nXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZGlhbG9nLWVsZW1lbnQ9XCJbW19kaWFsb2dFbGVtZW50XV1cIlxuICAgICAgICAgIGNhbi1jb25maWd1cmU9XCJbW19yZWdpc3RyeUluZm9dXVwiXG4gICAgICAgICAgbGFyZ2U9XCJ7e2xhcmdlfX1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tY29udHJvbHM+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9J1tbX2VxdWFscyhfcGFnZSwgXCJzZXR0aW5nc1wiKV1dJz5cbiAgICAgICAgPG1vcmUtaW5mby1zZXR0aW5nc1xuICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZ1wiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIHJlZ2lzdHJ5LWluZm89XCJ7e19yZWdpc3RyeUluZm99fVwiXG4gICAgICAgID48L21vcmUtaW5mby1zZXR0aW5ncz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVN0YXRlT2JqKGhhc3MpXCIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2xhcmdlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX2RpYWxvZ0VsZW1lbnQ6IE9iamVjdCxcbiAgICAgIF9yZWdpc3RyeUluZm86IE9iamVjdCxcblxuICAgICAgX3BhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGFEb21haW46IHtcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVEb21haW4oc3RhdGVPYmopXCIsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfZGlhbG9nT3BlbkNoYW5nZWQob3BlbmVkKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fZGlhbG9nRWxlbWVudCA9IHRoaXM7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW9yZS1pbmZvLXBhZ2VcIiwgKGV2KSA9PiB7XG4gICAgICB0aGlzLl9wYWdlID0gZXYuZGV0YWlsLnBhZ2U7XG4gICAgfSk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU9iaihoYXNzKSB7XG4gICAgcmV0dXJuIGhhc3Muc3RhdGVzW2hhc3MubW9yZUluZm9FbnRpdHlJZF0gfHwgbnVsbDtcbiAgfVxuXG4gIGFzeW5jIF9zdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgX3BhZ2U6IG51bGwsXG4gICAgICAgIF9yZWdpc3RyeUluZm86IG51bGwsXG4gICAgICAgIGxhcmdlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgLy8gYWxsb3cgZGlhbG9nIHRvIHJlbmRlciBjb250ZW50IGJlZm9yZSBzaG93aW5nIGl0IHNvIGl0IHdpbGwgYmVcbiAgICAgICAgLy8gcG9zaXRpb25lZCBjb3JyZWN0bHkuXG4gICAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgICFpc0NvbXBvbmVudExvYWRlZCh0aGlzLmhhc3MsIFwiY29uZmlnXCIpIHx8XG4gICAgICAob2xkVmFsICYmIG9sZFZhbC5lbnRpdHlfaWQgPT09IG5ld1ZhbC5lbnRpdHlfaWQpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGFzcy51c2VyLmlzX2FkbWluKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpbmZvID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L2dldFwiLFxuICAgICAgICAgIGVudGl0eV9pZDogbmV3VmFsLmVudGl0eV9pZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5SW5mbyA9IGluZm87XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlJbmZvID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGlhbG9nT3BlbkNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKCFuZXdWYWwgJiYgdGhpcy5zdGF0ZU9iaikge1xuICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9sYXJnZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbW9yZS1pbmZvLWRpYWxvZ1wiLCBIYU1vcmVJbmZvRGlhbG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuY2xhc3MgTW9yZUluZm9BbGFybUNvbnRyb2xQYW5lbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wYWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAucGFkIGRpdiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIC5wYWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24uZGlzYXJtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2NvZGVGb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQuYWxhcm1fY29udHJvbF9wYW5lbC5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e19lbnRlcmVkQ29kZX19XCJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc051bWJlcihfY29kZUZvcm1hdCldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjFcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4xPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNFwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjQ8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI3XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NzwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjJcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4yPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiNVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjU8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI4XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+ODwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjBcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID4wPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiM1wiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjM8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI2XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NjwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjlcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID45PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9jbGVhckVudGVyZWRDb2RlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuY2xlYXJfY29kZScpXV1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWwgY2VudGVyLWp1c3RpZmllZCBhY3Rpb25zXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZGlzYXJtVmlzaWJsZV1dXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgY2xhc3M9XCJkaXNhcm1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfY2FsbFNlcnZpY2VcIlxuICAgICAgICAgICAgZGF0YS1zZXJ2aWNlPVwiYWxhcm1fZGlzYXJtXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2NvZGVWYWxpZF1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuZGlzYXJtJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19hcm1WaXNpYmxlXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1faG9tZVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9ob21lJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1fYXdheVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9hd2F5JyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIF9lbnRlcmVkQ29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9jb2RlRm9ybWF0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX2NvZGVWYWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDpcbiAgICAgICAgICBcIl92YWxpZGF0ZUNvZGUoX2VudGVyZWRDb2RlLCAgX2NvZGVGb3JtYXQsICBfYXJtVmlzaWJsZSwgX2NvZGVBcm1SZXF1aXJlZClcIixcbiAgICAgIH0sXG4gICAgICBfZGlzYXJtVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2FybVZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIF9pbnB1dEVuYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9hcm1lZFN0YXRlcyA9IFtcbiAgICAgIFwiYXJtZWRfaG9tZVwiLFxuICAgICAgXCJhcm1lZF9hd2F5XCIsXG4gICAgICBcImFybWVkX25pZ2h0XCIsXG4gICAgICBcImFybWVkX2N1c3RvbV9ieXBhc3NcIixcbiAgICBdO1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIGNvbnN0IHN0YXRlID0gbmV3VmFsLnN0YXRlO1xuICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIF9jb2RlRm9ybWF0OiBuZXdWYWwuYXR0cmlidXRlcy5jb2RlX2Zvcm1hdCxcbiAgICAgICAgX2FybVZpc2libGU6IHN0YXRlID09PSBcImRpc2FybWVkXCIsXG4gICAgICAgIF9jb2RlQXJtUmVxdWlyZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvZGVfYXJtX3JlcXVpcmVkLFxuICAgICAgICBfZGlzYXJtVmlzaWJsZTpcbiAgICAgICAgICB0aGlzLl9hcm1lZFN0YXRlcy5pbmNsdWRlcyhzdGF0ZSkgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJwZW5kaW5nXCIgfHxcbiAgICAgICAgICBzdGF0ZSA9PT0gXCJ0cmlnZ2VyZWRcIiB8fFxuICAgICAgICAgIHN0YXRlID09PSBcImFybWluZ1wiLFxuICAgICAgfTtcbiAgICAgIHByb3BzLl9pbnB1dEVuYWJsZWQgPSBwcm9wcy5fZGlzYXJtVmlzaWJsZSB8fCBwcm9wcy5fYXJtVmlzaWJsZTtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gICAgfVxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzTnVtYmVyKGZvcm1hdCkge1xuICAgIHJldHVybiBmb3JtYXQgPT09IFwiTnVtYmVyXCI7XG4gIH1cblxuICBfdmFsaWRhdGVDb2RlKGNvZGUsIGZvcm1hdCwgYXJtVmlzaWJsZSwgY29kZUFybVJlcXVpcmVkKSB7XG4gICAgcmV0dXJuICFmb3JtYXQgfHwgY29kZS5sZW5ndGggPiAwIHx8IChhcm1WaXNpYmxlICYmICFjb2RlQXJtUmVxdWlyZWQpO1xuICB9XG5cbiAgX2RpZ2l0Q2xpY2tlZChldikge1xuICAgIHRoaXMuX2VudGVyZWRDb2RlICs9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRpZ2l0XCIpO1xuICB9XG5cbiAgX2NsZWFyRW50ZXJlZENvZGUoKSB7XG4gICAgdGhpcy5fZW50ZXJlZENvZGUgPSBcIlwiO1xuICB9XG5cbiAgX2NhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLl9lbnRlcmVkQ29kZSxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgc2VydmljZSwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9lbnRlcmVkQ29kZSA9IFwiXCI7XG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJtb3JlLWluZm8tYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBNb3JlSW5mb0FsYXJtQ29udHJvbFBhbmVsXG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmNsYXNzIE1vcmVJbmZvQXV0b21hdGlvbiBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBtYXJnaW46IDM2cHggMCA4cHggMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGRpdj5bW2xvY2FsaXplKCd1aS5jYXJkLmF1dG9tYXRpb24ubGFzdF90cmlnZ2VyZWQnKV1dOjwvZGl2PlxuICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgZGF0ZXRpbWU9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF90cmlnZ2VyZWRdXVwiXG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJoYW5kbGVUcmlnZ2VyVGFwcGVkXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hdXRvbWF0aW9uLnRyaWdnZXInKV1dXG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRyaWdnZXJUYXBwZWQoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiYXV0b21hdGlvblwiLCBcInRyaWdnZXJcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tYXV0b21hdGlvblwiLCBNb3JlSW5mb0F1dG9tYXRpb24pO1xuIiwiaW1wb3J0IHtcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50LCBDYW1lcmFFbnRpdHkgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENBTUVSQV9TVVBQT1JUX1NUUkVBTSxcbiAgQ2FtZXJhUHJlZmVyZW5jZXMsXG4gIGZldGNoQ2FtZXJhUHJlZnMsXG4gIHVwZGF0ZUNhbWVyYVByZWZzLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FtZXJhLXN0cmVhbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbi8vIE5vdCBkdXBsaWNhdGUgaW1wb3J0LCBpdCdzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJDaGVja2JveEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcblxuY2xhc3MgTW9yZUluZm9DYW1lcmEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBDYW1lcmFFbnRpdHk7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2NhbWVyYVByZWZzPzogQ2FtZXJhUHJlZmVyZW5jZXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2F0dGFjaGVkID0gZmFsc2U7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2F0dGFjaGVkIHx8ICF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FtZXJhLXN0cmVhbVxuICAgICAgICAuaGFzcz1cIiR7dGhpcy5oYXNzfVwiXG4gICAgICAgIC5zdGF0ZU9iaj1cIiR7dGhpcy5zdGF0ZU9ian1cIlxuICAgICAgICBzaG93Y29udHJvbHNcbiAgICAgID48L2hhLWNhbWVyYS1zdHJlYW0+XG4gICAgICAke3RoaXMuX2NhbWVyYVByZWZzXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxwYXBlci1jaGVja2JveFxuICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NhbWVyYVByZWZzLnByZWxvYWRfc3RyZWFtfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5faGFuZGxlQ2hlY2tib3hDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcmVsb2FkIHN0cmVhbVxuICAgICAgICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICBgXG4gICAgICAgIDogdW5kZWZpbmVkfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIC8vIFNhbWUgZW50aXR5LCBpZ25vcmUuXG4gICAgaWYgKGN1ckVudGl0eUlkID09PSBvbGRFbnRpdHlJZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGN1ckVudGl0eUlkICYmXG4gICAgICB0aGlzLmhhc3MhLmNvbmZpZy5jb21wb25lbnRzLmluY2x1ZGVzKFwic3RyZWFtXCIpICYmXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApIHtcbiAgICAgIC8vIEZldGNoIGluIGJhY2tncm91bmQgd2hpbGUgd2Ugc2V0IHVwIHRoZSB2aWRlby5cbiAgICAgIHRoaXMuX2ZldGNoQ2FtZXJhUHJlZnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaENhbWVyYVByZWZzKCkge1xuICAgIHRoaXMuX2NhbWVyYVByZWZzID0gYXdhaXQgZmV0Y2hDYW1lcmFQcmVmcyhcbiAgICAgIHRoaXMuaGFzcyEsXG4gICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWRcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlQ2hlY2tib3hDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBldi5jdXJyZW50VGFyZ2V0IGFzIFBhcGVyQ2hlY2tib3hFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9jYW1lcmFQcmVmcyA9IGF3YWl0IHVwZGF0ZUNhbWVyYVByZWZzKFxuICAgICAgICB0aGlzLmhhc3MhLFxuICAgICAgICB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmVsb2FkX3N0cmVhbTogY2hlY2tib3guY2hlY2tlZCEsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gIWNoZWNrYm94LmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItY2hlY2tib3gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY2FtZXJhXCIsIE1vcmVJbmZvQ2FtZXJhKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNsaW1hdGUtY29udHJvbFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zd2l0Y2hcIjtcblxuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbGltYXRlRW50aXR5LFxuICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFLFxuICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFLFxuICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZLFxuICBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUsXG4gIENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFLFxuICBDTElNQVRFX1NVUFBPUlRfQVVYX0hFQVQsXG4gIENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSxcbiAgY29tcGFyZUNsaW1hdGVIdmFjTW9kZXMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NsaW1hdGVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmNsYXNzIE1vcmVJbmZvQ2xpbWF0ZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IENsaW1hdGVFbnRpdHk7XG4gIHByaXZhdGUgX3Jlc2l6ZURlYm91bmNlPzogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0VGFyZ2V0SHVtaWRpdHkgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfSFVNSURJVFlcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRGYW5Nb2RlID0gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUpO1xuICAgIGNvbnN0IHN1cHBvcnRQcmVzZXRNb2RlID0gc3VwcG9ydHNGZWF0dXJlKFxuICAgICAgc3RhdGVPYmosXG4gICAgICBDTElNQVRFX1NVUFBPUlRfUFJFU0VUX01PREVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRTd2luZ01vZGUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFXG4gICAgKTtcbiAgICBjb25zdCBzdXBwb3J0QXV4SGVhdCA9IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUKTtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlU3RlcFNpemUgPVxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9zdGVwIHx8XG4gICAgICAoaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmUuaW5kZXhPZihcIkZcIikgPT09IC0xID8gMC41IDogMSk7XG5cbiAgICBjb25zdCBydGxEaXJlY3Rpb24gPSBjb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPSR7Y2xhc3NNYXAoe1xuICAgICAgICAgIFwiaGFzLWN1cnJlbnRfdGVtcGVyYXR1cmVcIjpcbiAgICAgICAgICAgIFwiY3VycmVudF90ZW1wZXJhdHVyZVwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgXCJoYXMtY3VycmVudF9odW1pZGl0eVwiOiBcImN1cnJlbnRfaHVtaWRpdHlcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzLFxuICAgICAgICAgIFwiaGFzLXRhcmdldF90ZW1wZXJhdHVyZVwiOiBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmUsXG4gICAgICAgICAgXCJoYXMtdGFyZ2V0X3RlbXBlcmF0dXJlX3JhbmdlXCI6IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlLFxuICAgICAgICAgIFwiaGFzLXRhcmdldF9odW1pZGl0eVwiOiBzdXBwb3J0VGFyZ2V0SHVtaWRpdHksXG4gICAgICAgICAgXCJoYXMtZmFuX21vZGVcIjogc3VwcG9ydEZhbk1vZGUsXG4gICAgICAgICAgXCJoYXMtc3dpbmdfbW9kZVwiOiBzdXBwb3J0U3dpbmdNb2RlLFxuICAgICAgICAgIFwiaGFzLWF1eF9oZWF0XCI6IHN1cHBvcnRBdXhIZWF0LFxuICAgICAgICAgIFwiaGFzLXByZXNldF9tb2RlXCI6IHN1cHBvcnRQcmVzZXRNb2RlLFxuICAgICAgICB9KX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci10ZW1wZXJhdHVyZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9JHtzdGF0ZU9iai5zdGF0ZX0+XG4gICAgICAgICAgICAke3N1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZSB8fCBzdXBwb3J0VGFyZ2V0VGVtcGVyYXR1cmVSYW5nZVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUudGFyZ2V0X3RlbXBlcmF0dXJlXCIpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmVcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLWNsaW1hdGUtY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAudW5pdHM9JHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnN0ZXA9JHt0ZW1wZXJhdHVyZVN0ZXBTaXplfVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcH1cbiAgICAgICAgICAgICAgICAgICAgLm1heD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRUZW1wZXJhdHVyZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1jbGltYXRlLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93IHx8XG4gICAgICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2hcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLWNsaW1hdGUtY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd31cbiAgICAgICAgICAgICAgICAgICAgLnVuaXRzPSR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC5zdGVwPSR7dGVtcGVyYXR1cmVTdGVwU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2h9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFuZ2UtY29udHJvbC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RhcmdldFRlbXBlcmF0dXJlTG93Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L2hhLWNsaW1hdGUtY29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxoYS1jbGltYXRlLWNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdofVxuICAgICAgICAgICAgICAgICAgICAudW5pdHM9JHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnN0ZXA9JHt0ZW1wZXJhdHVyZVN0ZXBTaXplfVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF90ZW1wfVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJhbmdlLWNvbnRyb2wtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0VGVtcGVyYXR1cmVIaWdoQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L2hhLWNsaW1hdGUtY29udHJvbD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHtzdXBwb3J0VGFyZ2V0SHVtaWRpdHlcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PiR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS50YXJnZXRfaHVtaWRpdHlcIil9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXQtaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5fSAlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJodW1pZGl0eVwiXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgcGluXG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZS1iYXItdG91Y2hcbiAgICAgICAgICAgICAgICAgICAgZGlyPSR7cnRsRGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy5taW5faHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIC5tYXg9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF9odW1pZGl0eX1cbiAgICAgICAgICAgICAgICAgICAgLnNlY29uZGFyeVByb2dyZXNzPSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfaHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHl9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRIdW1pZGl0eVNsaWRlckNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItaHZhY19tb2Rlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLm9wZXJhdGlvblwiKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLnN0YXRlfVxuICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlT3BlcmF0aW9ubW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19tb2Rlc1xuICAgICAgICAgICAgICAgICAgLmNvbmNhdCgpXG4gICAgICAgICAgICAgICAgICAuc29ydChjb21wYXJlQ2xpbWF0ZUh2YWNNb2RlcylcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKGBzdGF0ZS5jbGltYXRlLiR7bW9kZX1gKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgJHtzdXBwb3J0UHJlc2V0TW9kZVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1wcmVzZXRfbW9kZXNcIj5cbiAgICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUucHJlc2V0X21vZGVcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc2V0X21vZGV9XG4gICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlUHJlc2V0bW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZXMhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAobW9kZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5wcmVzZXRfbW9kZS4ke21vZGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IG1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3N1cHBvcnRGYW5Nb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZhbl9saXN0XCI+XG4gICAgICAgICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAubGFiZWw9JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmZhbl9tb2RlXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9tb2RlfVxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUZhbm1vZGVDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmFuX21vZGVzIS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9JHttb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUuZmFuX21vZGUuJHttb2RlfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB8fCBtb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzdXBwb3J0U3dpbmdNb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXN3aW5nX2xpc3RcIj5cbiAgICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuc3dpbmdfbW9kZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5zd2luZ19tb2RlfVxuICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVN3aW5nbW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5zd2luZ19tb2RlcyEubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPSR7bW9kZX0+JHttb2RlfTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c3VwcG9ydEF1eEhlYXRcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItYXV4X2hlYXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIGhvcml6b250YWwgbGF5b3V0IHNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5hdXhfaGVhdFwiKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuYXV4X2hlYXQgPT09IFwib25cIn1cbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2F1eFRvZ2dsZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICghY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jlc2l6ZURlYm91bmNlKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fcmVzaXplRGVib3VuY2UpO1xuICAgIH1cbiAgICB0aGlzLl9yZXNpemVEZWJvdW5jZSA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgICAgdGhpcy5fcmVzaXplRGVib3VuY2UgPSB1bmRlZmluZWQ7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldFRlbXBlcmF0dXJlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAgeyB0ZW1wZXJhdHVyZTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVMb3dDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0X3RlbXBfbG93OiBuZXdWYWwsXG4gICAgICAgIHRhcmdldF90ZW1wX2hpZ2g6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVIaWdoQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2gsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAge1xuICAgICAgICB0YXJnZXRfdGVtcF9sb3c6IHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93LFxuICAgICAgICB0YXJnZXRfdGVtcF9oaWdoOiBuZXdWYWwsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RhcmdldEh1bWlkaXR5U2xpZGVyQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMuaHVtaWRpdHksXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF9odW1pZGl0eVwiLFxuICAgICAgeyBodW1pZGl0eTogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXV4VG9nZ2xlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwiLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfYXV4X2hlYXRcIixcbiAgICAgIHsgYXV4X2hlYXQ6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUZhbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5mYW5fbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X2Zhbl9tb2RlXCIsXG4gICAgICB7IGZhbl9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcGVyYXRpb25tb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcih0aGlzLnN0YXRlT2JqIS5zdGF0ZSwgbmV3VmFsLCBcInNldF9odmFjX21vZGVcIiwge1xuICAgICAgaHZhY19tb2RlOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVTd2luZ21vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5zd2luZ19tb2RlLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfc3dpbmdfbW9kZVwiLFxuICAgICAgeyBzd2luZ19tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQcmVzZXRtb2RlQ2hhbmdlZChldikge1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZSB8fCBudWxsO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5wcmVzZXRfbW9kZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X3ByZXNldF9tb2RlXCIsXG4gICAgICB7IHByZXNldF9tb2RlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jYWxsU2VydmljZUhlbHBlcihcbiAgICBvbGRWYWw6IHVua25vd24sXG4gICAgbmV3VmFsOiB1bmtub3duLFxuICAgIHNlcnZpY2U6IHN0cmluZyxcbiAgICBkYXRhOiB7XG4gICAgICBlbnRpdHlfaWQ/OiBzdHJpbmc7XG4gICAgICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xuICAgIH1cbiAgKSB7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgY29uc3QgY3VyU3RhdGUgPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgYXdhaXQgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY2xpbWF0ZVwiLCBzZXJ2aWNlLCBkYXRhKTtcblxuICAgIC8vIFdlIHJlc2V0IHN0YXRlT2JqIHRvIHJlLXN5bmMgdGhlIGlucHV0cyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXRcbiAgICAvLyBvZiBzeW5jIGlmIG91ciBzZXJ2aWNlIGNhbGwgZGlkIG5vdCByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWRcbiAgICAvLyBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZywgdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAyMDAwKSk7XG5cbiAgICAvLyBObyBuZWVkIHRvIHJlc3luYyBpZiB3ZSByZWNlaXZlZCBhIG5ldyBzdGF0ZS5cbiAgICBpZiAodGhpcy5zdGF0ZU9iaiAhPT0gY3VyU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlT2JqID0gdW5kZWZpbmVkO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgLy8gT25seSByZXN0b3JlIGlmIG5vdCBzZXQgeWV0IGJ5IGEgc3RhdGUgY2hhbmdlXG4gICAgaWYgKHRoaXMuc3RhdGVPYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZU9iaiA9IGN1clN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHZhY19tb2RlcyBpcm9uLWljb24sXG4gICAgICAuY29udGFpbmVyLWZhbl9saXN0IGlyb24taWNvbixcbiAgICAgIC5jb250YWluZXItc3dpbmdfbGlzdCBpcm9uLWljb24ge1xuICAgICAgICBtYXJnaW46IDIycHggMTZweCAwIDA7XG4gICAgICB9XG5cbiAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5jb250YWluZXItaHVtaWRpdHkgLnNpbmdsZS1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG5cbiAgICAgIC50YXJnZXQtaHVtaWRpdHkge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgfVxuXG4gICAgICBoYS1jbGltYXRlLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQ2JTtcbiAgICAgIH1cbiAgICAgIGhhLWNsaW1hdGUtY29udHJvbC5yYW5nZS1jb250cm9sLWxlZnQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICAgfVxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtcmlnaHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICB9XG5cbiAgICAgIC5odW1pZGl0eSB7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLWFjdGl2ZS1jb2xvcjogdmFyKC0tcGFwZXItYmx1ZS00MDApO1xuICAgICAgICAtLXBhcGVyLXNsaWRlci1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBhcGVyLWJsdWUtNDAwKTtcbiAgICAgIH1cblxuICAgICAgLnNpbmdsZS1yb3cge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jbGltYXRlXCIsIE1vcmVJbmZvQ2xpbWF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pbnB1dC9pcm9uLWlucHV0XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbmZpZ3VyYXRvciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAgPiBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuY2VudGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogI2M2MjgyODtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuc3VibWl0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0MXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItc3Bpbm5lciB7XG4gICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IHZlcnRpY2FsXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpc0NvbmZpZ3VyYWJsZV1dXCI+XG4gICAgICAgICAgPGhhLW1hcmtkb3duXG4gICAgICAgICAgICBjb250ZW50PVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uXV1cIlxuICAgICAgICAgID48L2hhLW1hcmtkb3duPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiIGhpZGRlbiQ9XCJbWyFzdGF0ZU9iai5hdHRyaWJ1dGVzLmVycm9yc11dXCI+XG4gICAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZXJyb3JzXV1cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmllbGRzXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbaXRlbS5uYW1lXV1cIlxuICAgICAgICAgICAgICBuYW1lPVwiW1tpdGVtLmlkXV1cIlxuICAgICAgICAgICAgICB0eXBlPVwiW1tpdGVtLnR5cGVdXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cImZpZWxkQ2hhbmdlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJzdWJtaXRcIiBoaWRkZW4kPVwiW1shc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXCI+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICByYWlzZWQ9XCJcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJzdWJtaXRDbGlja2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXJcbiAgICAgICAgICAgICAgICBhY3RpdmU9XCJbW2lzQ29uZmlndXJpbmddXVwiXG4gICAgICAgICAgICAgICAgaGlkZGVuPVwiW1shaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb25maWd1cmluZ1wiXG4gICAgICAgICAgICAgID48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5zdWJtaXRfY2FwdGlvbl1dXG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgYWN0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiZGlzcGxheVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmFibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUlzQ29uZmlndXJhYmxlKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgaXNDb25maWd1cmluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBmaWVsZElucHV0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVJc0NvbmZpZ3VyYWJsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJjb25maWd1cmVcIjtcbiAgfVxuXG4gIGZpZWxkQ2hhbmdlZChldikge1xuICAgIHZhciBlbCA9IGV2LnRhcmdldDtcbiAgICB0aGlzLmZpZWxkSW5wdXRbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgfVxuXG4gIHN1Ym1pdENsaWNrZWQoKSB7XG4gICAgdmFyIGRhdGEgPSB7XG4gICAgICBjb25maWd1cmVfaWQ6IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5jb25maWd1cmVfaWQsXG4gICAgICBmaWVsZHM6IHRoaXMuZmllbGRJbnB1dCxcbiAgICB9O1xuXG4gICAgdGhpcy5pc0NvbmZpZ3VyaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImNvbmZpZ3VyYXRvclwiLCBcImNvbmZpZ3VyZVwiLCBkYXRhKS50aGVuKFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaXNDb25maWd1cmluZyA9IGZhbHNlO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29uZmlndXJhdG9yXCIsIE1vcmVJbmZvQ29uZmlndXJhdG9yKTtcbiIsImltcG9ydCB7XG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVXBkYXRpbmdFbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4vbW9yZS1pbmZvLWFsYXJtX2NvbnRyb2xfcGFuZWxcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWF1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWNhbWVyYVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY2xpbWF0ZVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1jb3ZlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZGVmYXVsdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZmFuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1ncm91cFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWxpZ2h0XCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1sb2NrXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tc3VuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby10aW1lclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tdXBkYXRlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tdmFjdXVtXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby13YXRlcl9oZWF0ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXdlYXRoZXJcIjtcblxuaW1wb3J0IHsgc3RhdGVNb3JlSW5mb1R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZVwiO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbnRlbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIHB1YmxpYyBzdGF0ZU9iaj86IEhhc3NFbnRpdHk7XG4gIHByaXZhdGUgX2RldGFjaGVkQ2hpbGQ/OiBDaGlsZE5vZGU7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBzdGF0ZU9iajoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICAvLyBUaGlzIGlzIG5vdCBhIGxpdCBlbGVtZW50LCBidXQgYW4gdXBkYXRpbmcgZWxlbWVudCwgc28gd2UgaW1wbGVtZW50IHVwZGF0ZVxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcblxuICAgIGlmICghc3RhdGVPYmogfHwgIWhhc3MpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIC8vIERldGFjaCBjaGlsZCB0byBwcmV2ZW50IGl0IGZyb20gZG9pbmcgd29yay5cbiAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RldGFjaGVkQ2hpbGQpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fZGV0YWNoZWRDaGlsZCk7XG4gICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IG1vcmVJbmZvVHlwZSA9XG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwiY3VzdG9tX3VpX21vcmVfaW5mb1wiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgICAgICAgPyBzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1c3RvbV91aV9tb3JlX2luZm9cbiAgICAgICAgOiBcIm1vcmUtaW5mby1cIiArIHN0YXRlTW9yZUluZm9UeXBlKHN0YXRlT2JqKTtcblxuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcih0aGlzLCBtb3JlSW5mb1R5cGUudG9VcHBlckNhc2UoKSwge1xuICAgICAgaGFzcyxcbiAgICAgIHN0YXRlT2JqLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jb250ZW50XCIsIE1vcmVJbmZvQ29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY292ZXItdGlsdC1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1sYWJlbGVkLXNsaWRlclwiO1xuXG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uLy4uLy4uL3V0aWwvY292ZXItbW9kZWxcIjtcbmltcG9ydCB7IGZlYXR1cmVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmNvbnN0IEZFQVRVUkVfQ0xBU1NfTkFNRVMgPSB7XG4gIDEyODogXCJoYXMtc2V0X3RpbHRfcG9zaXRpb25cIixcbn07XG5jbGFzcyBNb3JlSW5mb0NvdmVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY3VycmVudF9wb3NpdGlvbixcbiAgICAgICAgLnRpbHQge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1jdXJyZW50X3Bvc2l0aW9uIC5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICAuaGFzLXNldF90aWx0X3Bvc2l0aW9uIC50aWx0LFxuICAgICAgICAuaGFzLWN1cnJlbnRfdGlsdF9wb3NpdGlvbiAudGlsdCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMjA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnRfcG9zaXRpb25cIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmNvdmVyLnBvc2l0aW9uJyldXVwiXG4gICAgICAgICAgICBwaW49XCJcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2NvdmVyUG9zaXRpb25TbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU2V0UG9zaXRpb25dXVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJjb3ZlclBvc2l0aW9uU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aWx0XCI+XG4gICAgICAgICAgPGhhLWxhYmVsZWQtc2xpZGVyXG4gICAgICAgICAgICBjYXB0aW9uPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5jb3Zlci50aWx0X3Bvc2l0aW9uJyldXVwiXG4gICAgICAgICAgICBwaW49XCJcIlxuICAgICAgICAgICAgZXh0cmE9XCJcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2NvdmVyVGlsdFBvc2l0aW9uU2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIWVudGl0eU9iai5zdXBwb3J0c1NldFRpbHRQb3NpdGlvbl1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cImNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGhhLWNvdmVyLXRpbHQtY29udHJvbHNcbiAgICAgICAgICAgICAgc2xvdD1cImV4dHJhXCJcbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbZW50aXR5T2JqLmlzVGlsdE9ubHldXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgICA+PC9oYS1jb3Zlci10aWx0LWNvbnRyb2xzPlxuICAgICAgICAgIDwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICAgIGNvdmVyUG9zaXRpb25TbGlkZXJWYWx1ZTogTnVtYmVyLFxuICAgICAgY292ZXJUaWx0UG9zaXRpb25TbGlkZXJWYWx1ZTogTnVtYmVyLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgY292ZXJQb3NpdGlvblNsaWRlclZhbHVlOiBuZXdWYWwuYXR0cmlidXRlcy5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICBjb3ZlclRpbHRQb3NpdGlvblNsaWRlclZhbHVlOiBuZXdWYWwuYXR0cmlidXRlcy5jdXJyZW50X3RpbHRfcG9zaXRpb24sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHZhciBjbGFzc2VzID0gW1xuICAgICAgYXR0cmlidXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgW1xuICAgICAgICBcImN1cnJlbnRfcG9zaXRpb25cIixcbiAgICAgICAgXCJjdXJyZW50X3RpbHRfcG9zaXRpb25cIixcbiAgICAgIF0pLFxuICAgICAgZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIEZFQVRVUkVfQ0xBU1NfTkFNRVMpLFxuICAgIF07XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBjb3ZlclBvc2l0aW9uU2xpZGVyQ2hhbmdlZChldikge1xuICAgIHRoaXMuZW50aXR5T2JqLnNldENvdmVyUG9zaXRpb24oZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyQ2hhbmdlZChldikge1xuICAgIHRoaXMuZW50aXR5T2JqLnNldENvdmVyVGlsdFBvc2l0aW9uKGV2LnRhcmdldC52YWx1ZSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvdmVyXCIsIE1vcmVJbmZvQ292ZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5cbmNsYXNzIE1vcmVJbmZvRGVmYXVsdCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1hdHRyaWJ1dGVzIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvaGEtYXR0cmlidXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWRlZmF1bHRcIiwgTW9yZUluZm9EZWZhdWx0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9GYW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyLXNwZWVkX2xpc3QsXG4gICAgICAgIC5jb250YWluZXItZGlyZWN0aW9uLFxuICAgICAgICAuY29udGFpbmVyLW9zY2lsbGF0aW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1zcGVlZF9saXN0IC5jb250YWluZXItc3BlZWRfbGlzdCxcbiAgICAgICAgLmhhcy1kaXJlY3Rpb24gLmNvbnRhaW5lci1kaXJlY3Rpb24sXG4gICAgICAgIC5oYXMtb3NjaWxsYXRpbmcgLmNvbnRhaW5lci1vc2NpbGxhdGluZyB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItc3BlZWRfbGlzdFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uc3BlZWQnKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkXV1cIlxuICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwic3BlZWRDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkX2xpc3RdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3NjaWxsYXRpbmdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyIGhvcml6b250YWwgbGF5b3V0IHNpbmdsZS1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4ub3NjaWxsYXRlJyldXTwvZGl2PlxuICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICBjaGVja2VkPVwiW1tvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWRdXVwiXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cIm9zY2lsbGF0aW9uVG9nZ2xlQ2hhbmdlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1kaXJlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2PltbbG9jYWxpemUoJ3VpLmNhcmQuZmFuLmRpcmVjdGlvbicpXV08L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpyb3RhdGUtbGVmdFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25EaXJlY3Rpb25SZXZlcnNlXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmZhbi5yZXZlcnNlJyldXVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tjb21wdXRlSXNSb3RhdGluZ1JldmVyc2Uoc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cm90YXRlLXJpZ2h0XCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJvbkRpcmVjdGlvbkZvcndhcmRcIlxuICAgICAgICAgICAgICB0aXRsZT1cIltbbG9jYWxpemUoJ3VpLmNhcmQuZmFuLmZvcndhcmQnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVJc1JvdGF0aW5nRm9yd2FyZChzdGF0ZU9iaildXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgZXh0cmEtZmlsdGVycz1cInNwZWVkLHNwZWVkX2xpc3Qsb3NjaWxsYXRpbmcsZGlyZWN0aW9uXCJcbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgb3NjaWxsYXRpb25Ub2dnbGVDaGVja2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLm9zY2lsbGF0aW5nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBcIm1vcmUtaW5mby1mYW4gXCIgK1xuICAgICAgYXR0cmlidXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgW1wib3NjaWxsYXRpbmdcIiwgXCJzcGVlZF9saXN0XCIsIFwiZGlyZWN0aW9uXCJdKVxuICAgICk7XG4gIH1cblxuICBzcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnNwZWVkO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgc3BlZWQ6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIG9zY2lsbGF0aW9uVG9nZ2xlQ2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMub3NjaWxsYXRpbmc7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LnRhcmdldC5jaGVja2VkO1xuXG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJvc2NpbGxhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG9zY2lsbGF0aW5nOiBuZXdWYWwsXG4gICAgfSk7XG4gIH1cblxuICBvbkRpcmVjdGlvblJldmVyc2UoKSB7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiZmFuXCIsIFwic2V0X2RpcmVjdGlvblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgZGlyZWN0aW9uOiBcInJldmVyc2VcIixcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGlyZWN0aW9uRm9yd2FyZCgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJzZXRfZGlyZWN0aW9uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBkaXJlY3Rpb246IFwiZm9yd2FyZFwiLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZUlzUm90YXRpbmdSZXZlcnNlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGlyZWN0aW9uID09PSBcInJldmVyc2VcIjtcbiAgfVxuXG4gIGNvbXB1dGVJc1JvdGF0aW5nRm9yd2FyZChzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmRpcmVjdGlvbiA9PT0gXCJmb3J3YXJkXCI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWZhblwiLCBNb3JlSW5mb0Zhbik7XG4iLCJpbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuXG5jbGFzcyBNb3JlSW5mb0dyb3VwIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY2hpbGQtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoaWxkLWNhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBpZD1cImdyb3VwZWRDb250cm9sRGV0YWlsc1wiPjwvZGl2PlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzdGF0ZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNoaWxkLWNhcmRcIj5cbiAgICAgICAgICA8c3RhdGUtY2FyZC1jb250ZW50XG4gICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVN0YXRlcyhzdGF0ZU9iaiwgaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJzdGF0ZXNDaGFuZ2VkKHN0YXRlT2JqLCBzdGF0ZXMpXCJdO1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlcyhzdGF0ZU9iaiwgaGFzcykge1xuICAgIHZhciBzdGF0ZXMgPSBbXTtcbiAgICB2YXIgZW50SWRzID0gc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfaWQgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudElkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50SWRzW2ldXTtcblxuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVzO1xuICB9XG5cbiAgc3RhdGVzQ2hhbmdlZChzdGF0ZU9iaiwgc3RhdGVzKSB7XG4gICAgbGV0IGdyb3VwRG9tYWluU3RhdGVPYmogPSBmYWxzZTtcbiAgICBsZXQgZ3JvdXBEb21haW4gPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZXMgJiYgc3RhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGJhc2VTdGF0ZU9iaiA9IHN0YXRlcy5maW5kKChzKSA9PiBzLnN0YXRlID09PSBcIm9uXCIpIHx8IHN0YXRlc1swXTtcbiAgICAgIGdyb3VwRG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKGJhc2VTdGF0ZU9iaik7XG5cbiAgICAgIC8vIEdyb3VwcyBuZWVkIHRvIGJlIGZpbHRlcmVkIG91dCBvciB3ZSdsbCBzaG93IGNvbnRlbnQgb2ZcbiAgICAgIC8vIGZpcnN0IGNoaWxkIGFib3ZlIHRoZSBjaGlsZHJlbiBvZiB0aGUgY3VycmVudCBncm91cFxuICAgICAgaWYgKGdyb3VwRG9tYWluICE9PSBcImdyb3VwXCIpIHtcbiAgICAgICAgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IHtcbiAgICAgICAgICAuLi5iYXNlU3RhdGVPYmosXG4gICAgICAgICAgZW50aXR5X2lkOiBzdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICAgICAgYXR0cmlidXRlczogeyAuLi5iYXNlU3RhdGVPYmouYXR0cmlidXRlcyB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGdyb3VwRG9tYWluICE9PSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVzW2ldKSkge1xuICAgICAgICAgICAgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFncm91cERvbWFpblN0YXRlT2JqKSB7XG4gICAgICBjb25zdCBlbCA9IGRvbSh0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzKTtcbiAgICAgIGlmIChlbC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgICB0aGlzLiQuZ3JvdXBlZENvbnRyb2xEZXRhaWxzLFxuICAgICAgICBcIk1PUkUtSU5GTy1cIiArIGdyb3VwRG9tYWluLnRvVXBwZXJDYXNlKCksXG4gICAgICAgIHsgc3RhdGVPYmo6IGdyb3VwRG9tYWluU3RhdGVPYmosIGhhc3M6IHRoaXMuaGFzcyB9XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZ3JvdXBcIiwgTW9yZUluZm9Hcm91cCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jYXJkcy9oYS1oaXN0b3J5X2dyYXBoLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0hpc3RvcnlHcmFwaCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1oaXN0b3J5X2dyYXBoLWNhcmRcbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgID5cbiAgICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgICAgPC9oYS1oaXN0b3J5X2dyYXBoLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiLCBNb3JlSW5mb0hpc3RvcnlHcmFwaCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci92YWFkaW4tZGF0ZS1waWNrZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL3BhcGVyLXRpbWUtaW5wdXRcIjtcblxuaW1wb3J0IHsgYXR0cmlidXRlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lc1wiO1xuXG5jbGFzcyBEYXRldGltZUlucHV0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkb2VzSGF2ZURhdGUoc3RhdGVPYmopXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx2YWFkaW4tZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgaWQ9XCJkYXRlSW5wdXRcIlxuICAgICAgICAgICAgICBvbi12YWx1ZS1jaGFuZ2VkPVwiZGF0ZVRpbWVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e3NlbGVjdGVkRGF0ZX19XCJcbiAgICAgICAgICAgID48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvZXNIYXZlVGltZShzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBhcGVyLXRpbWUtaW5wdXRcbiAgICAgICAgICAgICAgaG91cj1cInt7c2VsZWN0ZWRIb3VyfX1cIlxuICAgICAgICAgICAgICBtaW49XCJ7e3NlbGVjdGVkTWludXRlfX1cIlxuICAgICAgICAgICAgICBmb3JtYXQ9XCIyNFwiXG4gICAgICAgICAgICA+PC9wYXBlci10aW1lLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pc19yZWFkeSA9IGZhbHNlO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZERhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRlVGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkSG91cjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRNaW51dGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRlVGltZUNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5pc19yZWFkeSA9IHRydWU7XG4gIH1cblxuICAvKiBDb252ZXJ0IHRoZSBkYXRlIGluIHRoZSBzdGF0ZU9iaiBpbnRvIGEgc3RyaW5nIHVzZWFibGUgYnkgdmFhZGluLWRhdGUtcGlja2VyICovXG4gIGdldERhdGVTdHJpbmcoc3RhdGVPYmopIHtcbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwidW5rbm93blwiKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgdmFyIG1vbnRoRmlsbGVyO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIDwgMTApIHtcbiAgICAgIG1vbnRoRmlsbGVyID0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vbnRoRmlsbGVyID0gXCJcIjtcbiAgICB9XG5cbiAgICB2YXIgZGF5RmlsbGVyO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLmRheSA8IDEwKSB7XG4gICAgICBkYXlGaWxsZXIgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5RmlsbGVyID0gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyICtcbiAgICAgIFwiLVwiICtcbiAgICAgIG1vbnRoRmlsbGVyICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggK1xuICAgICAgXCItXCIgK1xuICAgICAgZGF5RmlsbGVyICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5XG4gICAgKTtcbiAgfVxuXG4gIC8qIFNob3VsZCBmaXJlIHdoZW4gYW55IHZhbHVlIHdhcyBjaGFuZ2VkICpieSB0aGUgdXNlciosIG5vdCBiL2Mgb2Ygc2V0dGluZ1xuICAgKiBpbml0aWFsIHZhbHVlcy4gKi9cbiAgZGF0ZVRpbWVDaGFuZ2VkKCkge1xuICAgIC8vIENoZWNrIGlmIHRoZSBjaGFuZ2UgaXMgcmVhbGx5IGNvbWluZyBmcm9tIHRoZSB1c2VyXG4gICAgaWYgKCF0aGlzLmlzX3JlYWR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICBsZXQgbWludXRlRmlsbGVyO1xuXG4gICAgY29uc3Qgc2VydmljZURhdGEgPSB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgICBjaGFuZ2VkIHw9XG4gICAgICAgIHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRNaW51dGUpICE9PSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWludXRlO1xuICAgICAgY2hhbmdlZCB8PSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cikgIT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5ob3VyO1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNaW51dGUgPCAxMCkge1xuICAgICAgICBtaW51dGVGaWxsZXIgPSBcIjBcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbnV0ZUZpbGxlciA9IFwiXCI7XG4gICAgICB9XG4gICAgICB2YXIgdGltZVN0ciA9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyICsgXCI6XCIgKyBtaW51dGVGaWxsZXIgKyB0aGlzLnNlbGVjdGVkTWludXRlO1xuICAgICAgc2VydmljZURhdGEudGltZSA9IHRpbWVTdHI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47IC8vIERhdGUgd2FzIG5vdCBzZXRcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0ZVZhbElucHV0ID0gbmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGUpO1xuICAgICAgY29uc3QgZGF0ZVZhbFN0YXRlID0gbmV3IERhdGUoXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggLSAxLFxuICAgICAgICB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5XG4gICAgICApO1xuXG4gICAgICBjaGFuZ2VkIHw9IGRhdGVWYWxTdGF0ZSAhPT0gZGF0ZVZhbElucHV0O1xuXG4gICAgICBzZXJ2aWNlRGF0YS5kYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImlucHV0X2RhdGV0aW1lXCIsIFwic2V0X2RhdGV0aW1lXCIsIHNlcnZpY2VEYXRhKTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgLy8gU2V0IHRvIG5vbi1yZWFkeSBzLnQuIGRhdGVUaW1lQ2hhbmdlZCBkb2VzIG5vdCBmaXJlXG4gICAgdGhpcy5pc19yZWFkeSA9IGZhbHNlO1xuXG4gICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSG91ciA9IG5ld1ZhbC5hdHRyaWJ1dGVzLmhvdXI7XG4gICAgICB0aGlzLnNlbGVjdGVkTWludXRlID0gbmV3VmFsLmF0dHJpYnV0ZXMubWludXRlO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWwuYXR0cmlidXRlcy5oYXNfZGF0ZSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLmdldERhdGVTdHJpbmcobmV3VmFsKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzX3JlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIGRvZXNIYXZlRGF0ZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlO1xuICB9XG5cbiAgZG9lc0hhdmVUaW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWU7XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBcIm1vcmUtaW5mby1pbnB1dF9kYXRldGltZSBcIiArXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJoYXNfdGltZVwiLCBcImhhc19kYXRlXCJdKVxuICAgICk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lXCIsIERhdGV0aW1lSW5wdXQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtYXR0cmlidXRlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2xvci1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbGFiZWxlZC1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuXG5pbXBvcnQgeyBmZWF0dXJlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2ZlYXR1cmVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY29uc3QgRkVBVFVSRV9DTEFTU19OQU1FUyA9IHtcbiAgMTogXCJoYXMtYnJpZ2h0bmVzc1wiLFxuICAyOiBcImhhcy1jb2xvcl90ZW1wXCIsXG4gIDQ6IFwiaGFzLWVmZmVjdF9saXN0XCIsXG4gIDE2OiBcImhhcy1jb2xvclwiLFxuICAxMjg6IFwiaGFzLXdoaXRlX3ZhbHVlXCIsXG59O1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9MaWdodCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5lZmZlY3RfbGlzdCxcbiAgICAgICAgLmJyaWdodG5lc3MsXG4gICAgICAgIC5jb2xvcl90ZW1wLFxuICAgICAgICAud2hpdGVfdmFsdWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbG9yX3RlbXAge1xuICAgICAgICAgIC0taGEtc2xpZGVyLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgcmlnaHQsXG4gICAgICAgICAgICByZ2IoMjU1LCAxNjAsIDApIDAlLFxuICAgICAgICAgICAgd2hpdGUgNTAlLFxuICAgICAgICAgICAgcmdiKDE2NiwgMjA5LCAyNTUpIDEwMCVcbiAgICAgICAgICApO1xuICAgICAgICAgIC8qIFRoZSBjb2xvciB0ZW1wIG1pbmltdW0gdmFsdWUgc2hvdWxkbid0IGJlIHJlbmRlcmVkIGRpZmZlcmVudGx5LiBJdCdzIG5vdCBcIm9mZlwiLiAqL1xuICAgICAgICAgIC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWdtZW50YXRpb25Db250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNvbG9yLXBpY2tlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWdtZW50YXRpb25CdXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDExJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIC5zZWdtZW50YXRpb25Db250YWluZXIgLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTElO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICAgICAgd2lkdGg6IDIzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXNlY29uZGFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtZWZmZWN0X2xpc3QuaXMtb24gLmVmZmVjdF9saXN0LFxuICAgICAgICAuaGFzLWJyaWdodG5lc3MgLmJyaWdodG5lc3MsXG4gICAgICAgIC5oYXMtY29sb3JfdGVtcC5pcy1vbiAuY29sb3JfdGVtcCxcbiAgICAgICAgLmhhcy13aGl0ZV92YWx1ZS5pcy1vbiAud2hpdGVfdmFsdWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDg0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWJyaWdodG5lc3MgLmhhcy1jb2xvcl90ZW1wLmlzLW9uLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmhhcy1jb2xvcl90ZW1wLmlzLW9uIC5jb2xvcl90ZW1wLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIC5zZWdtZW50YXRpb25CdXR0b24ge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1jb2xvci5pcy1vbiBoYS1jb2xvci1waWNrZXIge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLWJvcmRlcndpZHRoOiA1O1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLWJvcmRlcmNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcndpZHRoOiAyO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLW1hcmtlci1ib3JkZXJjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuaXMtdW5hdmFpbGFibGUgLmNvbnRyb2wge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGJyaWdodG5lc3NcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmJyaWdodG5lc3MnKV1dXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmJyaWdodG5lc3MtNVwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjI1NVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7YnJpZ2h0bmVzc1NsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiYnJpZ2h0bmVzc1NsaWRlckNoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWxhYmVsZWQtc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBjb2xvcl90ZW1wXCI+XG4gICAgICAgICAgPGhhLWxhYmVsZWQtc2xpZGVyXG4gICAgICAgICAgICBjYXB0aW9uPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5saWdodC5jb2xvcl90ZW1wZXJhdHVyZScpXV1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dGhlcm1vbWV0ZXJcIlxuICAgICAgICAgICAgbWluPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl9taXJlZHNdXVwiXG4gICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X21pcmVkc11dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tjdFNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiY3RTbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgd2hpdGVfdmFsdWVcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LndoaXRlX3ZhbHVlJyldXVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpmaWxlLXdvcmQtYm94XCJcbiAgICAgICAgICAgIG1heD1cIjI1NVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7d3ZTbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cInd2U2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VnbWVudGF0aW9uQ29udGFpbmVyXCI+XG4gICAgICAgICAgPGhhLWNvbG9yLXBpY2tlclxuICAgICAgICAgICAgY2xhc3M9XCJjb250cm9sIGNvbG9yXCJcbiAgICAgICAgICAgIG9uLWNvbG9yc2VsZWN0ZWQ9XCJjb2xvclBpY2tlZFwiXG4gICAgICAgICAgICBkZXNpcmVkLWhzLWNvbG9yPVwie3tjb2xvclBpY2tlckNvbG9yfX1cIlxuICAgICAgICAgICAgdGhyb3R0bGU9XCI1MDBcIlxuICAgICAgICAgICAgaHVlLXNlZ21lbnRzPVwie3todWVTZWdtZW50c319XCJcbiAgICAgICAgICAgIHNhdHVyYXRpb24tc2VnbWVudHM9XCJ7e3NhdHVyYXRpb25TZWdtZW50c319XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1jb2xvci1waWNrZXI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwibWRpOnBhbGV0dGVcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJzZWdtZW50Q2xpY2tcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb250cm9sIHNlZ21lbnRhdGlvbkJ1dHRvblwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGVmZmVjdF9saXN0XCI+XG4gICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmVmZmVjdCcpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZWZmZWN0XV1cIlxuICAgICAgICAgICAgICBvbi1zZWxlY3RlZC1jaGFuZ2VkPVwiZWZmZWN0Q2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3RfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGV4dHJhLWZpbHRlcnM9XCJicmlnaHRuZXNzLGNvbG9yX3RlbXAsd2hpdGVfdmFsdWUsZWZmZWN0X2xpc3QsZWZmZWN0LGhzX2NvbG9yLHJnYl9jb2xvcix4eV9jb2xvcixtaW5fbWlyZWRzLG1heF9taXJlZHNcIlxuICAgICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYnJpZ2h0bmVzc1NsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBjdFNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICB3dlNsaWRlclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBodWVTZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAyNCxcbiAgICAgIH0sXG5cbiAgICAgIHNhdHVyYXRpb25TZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA4LFxuICAgICAgfSxcblxuICAgICAgY29sb3JQaWNrZXJDb2xvcjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIGJyaWdodG5lc3NTbGlkZXJWYWx1ZTogMCxcbiAgICB9O1xuXG4gICAgaWYgKG5ld1ZhbCAmJiBuZXdWYWwuc3RhdGUgPT09IFwib25cIikge1xuICAgICAgcHJvcHMuYnJpZ2h0bmVzc1NsaWRlclZhbHVlID0gbmV3VmFsLmF0dHJpYnV0ZXMuYnJpZ2h0bmVzcztcbiAgICAgIHByb3BzLmN0U2xpZGVyVmFsdWUgPSBuZXdWYWwuYXR0cmlidXRlcy5jb2xvcl90ZW1wO1xuICAgICAgcHJvcHMud3ZTbGlkZXJWYWx1ZSA9IG5ld1ZhbC5hdHRyaWJ1dGVzLndoaXRlX3ZhbHVlO1xuICAgICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhzX2NvbG9yKSB7XG4gICAgICAgIHByb3BzLmNvbG9yUGlja2VyQ29sb3IgPSB7XG4gICAgICAgICAgaDogbmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3JbMF0sXG4gICAgICAgICAgczogbmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3JbMV0gLyAxMDAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BzKTtcblxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpcmUoXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopIHtcbiAgICBjb25zdCBjbGFzc2VzID0gW2ZlYXR1cmVDbGFzc05hbWVzKHN0YXRlT2JqLCBGRUFUVVJFX0NMQVNTX05BTUVTKV07XG4gICAgaWYgKHN0YXRlT2JqICYmIHN0YXRlT2JqLnN0YXRlID09PSBcIm9uXCIpIHtcbiAgICAgIGNsYXNzZXMucHVzaChcImlzLW9uXCIpO1xuICAgIH1cbiAgICBpZiAoc3RhdGVPYmogJiYgc3RhdGVPYmouc3RhdGUgPT09IFwidW5hdmFpbGFibGVcIikge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiaXMtdW5hdmFpbGFibGVcIik7XG4gICAgfVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgZWZmZWN0Q2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuZWZmZWN0O1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBlZmZlY3Q6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIGJyaWdodG5lc3NTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIGJyaSA9IHBhcnNlSW50KGV2LnRhcmdldC52YWx1ZSwgMTApO1xuXG4gICAgaWYgKGlzTmFOKGJyaSkpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgYnJpZ2h0bmVzczogYnJpLFxuICAgIH0pO1xuICB9XG5cbiAgY3RTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIGN0ID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oY3QpKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGNvbG9yX3RlbXA6IGN0LFxuICAgIH0pO1xuICB9XG5cbiAgd3ZTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIHd2ID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4od3YpKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIHdoaXRlX3ZhbHVlOiB3dixcbiAgICB9KTtcbiAgfVxuXG4gIHNlZ21lbnRDbGljaygpIHtcbiAgICBpZiAodGhpcy5odWVTZWdtZW50cyA9PT0gMjQgJiYgdGhpcy5zYXR1cmF0aW9uU2VnbWVudHMgPT09IDgpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGh1ZVNlZ21lbnRzOiAwLCBzYXR1cmF0aW9uU2VnbWVudHM6IDAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IGh1ZVNlZ21lbnRzOiAyNCwgc2F0dXJhdGlvblNlZ21lbnRzOiA4IH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlcnZpY2VDaGFuZ2VDb2xvcihoYXNzLCBlbnRpdHlJZCwgY29sb3IpIHtcbiAgICBoYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgICBoc19jb2xvcjogW2NvbG9yLmgsIGNvbG9yLnMgKiAxMDBdLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbmV3IGNvbG9yIGhhcyBiZWVuIHBpY2tlZC5cbiAgICogc2hvdWxkIGJlIHRocm90dGxlZCB3aXRoIHRoZSAndGhyb3R0bGU9JyBhdHRyaWJ1dGUgb2YgdGhlIGNvbG9yIHBpY2tlclxuICAgKi9cbiAgY29sb3JQaWNrZWQoZXYpIHtcbiAgICB0aGlzLnNlcnZpY2VDaGFuZ2VDb2xvcih0aGlzLmhhc3MsIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLCBldi5kZXRhaWwuaHMpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1saWdodFwiLCBNb3JlSW5mb0xpZ2h0KTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0xvY2sgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvZGVfZm9ybWF0XV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxvY2suY29kZScpXV1cIlxuICAgICAgICAgIHZhbHVlPVwie3tlbnRlcmVkQ29kZX19XCJcbiAgICAgICAgICBwYXR0ZXJuPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNvZGVfZm9ybWF0XV1cIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIG9uLWNsaWNrPVwiY2FsbFNlcnZpY2VcIlxuICAgICAgICAgIGRhdGEtc2VydmljZT1cInVubG9ja1wiXG4gICAgICAgICAgaGlkZGVuJD1cIltbIWlzTG9ja2VkXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLmxvY2sudW5sb2NrJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJjYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwibG9ja1wiXG4gICAgICAgICAgaGlkZGVuJD1cIltbaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay5sb2NrJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGhhLWF0dHJpYnV0ZXNcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgZXh0cmEtZmlsdGVycz1cImNvZGVfZm9ybWF0XCJcbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBlbnRlcmVkQ29kZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIGlzTG9ja2VkOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQobmV3VmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IG5ld1ZhbC5zdGF0ZSA9PT0gXCJsb2NrZWRcIjtcbiAgICB9XG4gIH1cblxuICBjYWxsU2VydmljZShldikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZXJ2aWNlXCIpO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgY29kZTogdGhpcy5lbnRlcmVkQ29kZSxcbiAgICB9O1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxvY2tcIiwgc2VydmljZSwgZGF0YSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWxvY2tcIiwgTW9yZUluZm9Mb2NrKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBIYXNzTWVkaWFQbGF5ZXJFbnRpdHkgZnJvbSBcIi4uLy4uLy4uL3V0aWwvaGFzcy1tZWRpYS1wbGF5ZXItbW9kZWxcIjtcblxuaW1wb3J0IHsgYXR0cmlidXRlQ2xhc3NOYW1lcyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2F0dHJpYnV0ZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IGlzQ29tcG9uZW50TG9hZGVkIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXB1dGVSVExEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb01lZGlhUGxheWVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAubWVkaWEtc3RhdGUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25baGlnaGxpZ2h0XSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAudm9sdW1lIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtdm9sdW1lX2xldmVsIC52b2x1bWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpcm9uLWljb24uc291cmNlLWlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUuc291cmNlLWlucHV0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnBvd2VyXCJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0JD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVRvZ2dsZVBvd2VyXCJcbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgIGlmPVwiW1tjb21wdXRlU2hvd1BsYXliYWNrQ29udHJvbHMocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ByZXZpb3VzVHJhY2tdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlUGxheWJhY2tDb250cm9sXCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shY29tcHV0ZVBsYXliYWNrQ29udHJvbEljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1uZXh0XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZU5leHRcIlxuICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNOZXh0VHJhY2tdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gVk9MVU1FIC0tPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ2b2x1bWVfYnV0dG9ucyBjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlVm9sdW1lQnV0dG9ucyhwbGF5ZXJPYmopXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVZvbHVtZVRhcFwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp2b2x1bWUtb2ZmXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGlkPVwidm9sdW1lRG93blwiXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgb24tbW91c2Vkb3duPVwiaGFuZGxlVm9sdW1lRG93blwiXG4gICAgICAgICAgICBvbi10b3VjaHN0YXJ0PVwiaGFuZGxlVm9sdW1lRG93blwiXG4gICAgICAgICAgICBvbi10b3VjaGVuZD1cImhhbmRsZVZvbHVtZVRvdWNoRW5kXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnZvbHVtZS1tZWRpdW1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJ2b2x1bWVVcFwiXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgb24tbW91c2Vkb3duPVwiaGFuZGxlVm9sdW1lVXBcIlxuICAgICAgICAgICAgb24tdG91Y2hzdGFydD1cImhhbmRsZVZvbHVtZVVwXCJcbiAgICAgICAgICAgIG9uLXRvdWNoZW5kPVwiaGFuZGxlVm9sdW1lVG91Y2hFbmRcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dm9sdW1lLWhpZ2hcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lIGNlbnRlciBob3Jpem9udGFsIGxheW91dFwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ZvbHVtZVNldF1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVWb2x1bWVUYXBcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbcGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lQnV0dG9uc11dXCJcbiAgICAgICAgICAgIGljb249XCJbW2NvbXB1dGVNdXRlVm9sdW1lSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgIGRpc2FibGVkJD1cIltbcGxheWVyT2JqLmlzTXV0ZWRdXVwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICB2YWx1ZT1cIltbcGxheWVyT2JqLnZvbHVtZVNsaWRlclZhbHVlXV1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwidm9sdW1lU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgaWdub3JlLWJhci10b3VjaD1cIlwiXG4gICAgICAgICAgICBkaXI9XCJ7e3J0bH19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNPVVJDRSBQSUNLRVIgLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNvbnRyb2xzIGxheW91dCBob3Jpem9udGFsIGp1c3RpZmllZFwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVTZWxlY3RTb3VyY2UocGxheWVyT2JqKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJzb3VyY2UtaW5wdXRcIiBpY29uPVwiaGFzczpsb2dpbi12YXJpYW50XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBzb3VyY2UtaW5wdXRcIlxuICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubWVkaWFfcGxheWVyLnNvdXJjZScpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbcGxheWVyT2JqLnNvdXJjZV1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZVNvdXJjZUNoYW5nZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3BsYXllck9iai5zb3VyY2VMaXN0XV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNPVU5EIE1PREUgUElDS0VSIC0tPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWNvbXB1dGVIaWRlU2VsZWN0U291bmRNb2RlKHBsYXllck9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIj5cbiAgICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJzb3VyY2UtaW5wdXRcIiBpY29uPVwiaGFzczptdXNpYy1ub3RlXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXggc291cmNlLWlucHV0XCJcbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubWVkaWFfcGxheWVyLnNvdW5kX21vZGUnKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1twbGF5ZXJPYmouc291bmRNb2RlXV1cIlxuICAgICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJoYW5kbGVTb3VuZE1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbcGxheWVyT2JqLnNvdW5kTW9kZUxpc3RdXVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFRUUyAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlVFRTKHR0c0xvYWRlZCwgcGxheWVyT2JqKV1dXCJcbiAgICAgICAgICBjbGFzcz1cImxheW91dCBob3Jpem9udGFsIGVuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGlkPVwidHRzSW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci50ZXh0X3RvX3NwZWFrJyldXVwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e3R0c01lc3NhZ2V9fVwiXG4gICAgICAgICAgICBvbi1rZXlkb3duPVwidHRzQ2hlY2tGb3JFbnRlclwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZW5kXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwic2VuZFRUU1wiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIHBsYXllck9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICAgIG9ic2VydmVyOiBcInBsYXllck9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHR0c0xvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlVFRTTG9hZGVkKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICB0dHNNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVBsYXllck9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgSGFzc01lZGlhUGxheWVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIHBsYXllck9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAob2xkVmFsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlKFwiaXJvbi1yZXNpemVcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcInZvbHVtZV9sZXZlbFwiXSk7XG4gIH1cblxuICBjb21wdXRlTXV0ZVZvbHVtZUljb24ocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuIHBsYXllck9iai5pc011dGVkID8gXCJoYXNzOnZvbHVtZS1vZmZcIiA6IFwiaGFzczp2b2x1bWUtaGlnaFwiO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVWb2x1bWVCdXR0b25zKHBsYXllck9iaikge1xuICAgIHJldHVybiAhcGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lQnV0dG9ucyB8fCBwbGF5ZXJPYmouaXNPZmY7XG4gIH1cblxuICBjb21wdXRlU2hvd1BsYXliYWNrQ29udHJvbHMocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuICFwbGF5ZXJPYmouaXNPZmYgJiYgcGxheWVyT2JqLmhhc01lZGlhQ29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nKSB7XG4gICAgICByZXR1cm4gcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgPyBcImhhc3M6cGF1c2VcIiA6IFwiaGFzczpzdG9wXCI7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sIHx8IHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2wgJiZcbiAgICAgICAgcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgJiZcbiAgICAgICAgIXBsYXllck9iai5pc1BhdXNlZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBcImhhc3M6cGxheS1wYXVzZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BsYXkgPyBcImhhc3M6cGxheVwiIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb21wdXRlSGlkZVBvd2VyQnV0dG9uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNPZmZcbiAgICAgID8gIXBsYXllck9iai5zdXBwb3J0c1R1cm5PblxuICAgICAgOiAhcGxheWVyT2JqLnN1cHBvcnRzVHVybk9mZjtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlU2VsZWN0U291cmNlKHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmouaXNPZmYgfHxcbiAgICAgICFwbGF5ZXJPYmouc3VwcG9ydHNTZWxlY3RTb3VyY2UgfHxcbiAgICAgICFwbGF5ZXJPYmouc291cmNlTGlzdFxuICAgICk7XG4gIH1cblxuICBjb21wdXRlSGlkZVNlbGVjdFNvdW5kTW9kZShwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLmlzT2ZmIHx8XG4gICAgICAhcGxheWVyT2JqLnN1cHBvcnRzU2VsZWN0U291bmRNb2RlIHx8XG4gICAgICAhcGxheWVyT2JqLnNvdW5kTW9kZUxpc3RcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVUVFModHRzTG9hZGVkLCBwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXR0c0xvYWRlZCB8fCAhcGxheWVyT2JqLnN1cHBvcnRzUGxheU1lZGlhO1xuICB9XG5cbiAgY29tcHV0ZVRUU0xvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwidHRzXCIpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlUG93ZXIoKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoudG9nZ2xlUG93ZXIoKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzKCkge1xuICAgIHRoaXMucGxheWVyT2JqLnByZXZpb3VzVHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVBsYXliYWNrQ29udHJvbCgpIHtcbiAgICB0aGlzLnBsYXllck9iai5tZWRpYVBsYXlQYXVzZSgpO1xuICB9XG5cbiAgaGFuZGxlTmV4dCgpIHtcbiAgICB0aGlzLnBsYXllck9iai5uZXh0VHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVNvdXJjZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyT2JqKSByZXR1cm47XG5cbiAgICB2YXIgb2xkVmFsID0gdGhpcy5wbGF5ZXJPYmouc291cmNlO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wbGF5ZXJPYmouc2VsZWN0U291cmNlKG5ld1ZhbCk7XG4gIH1cblxuICBoYW5kbGVTb3VuZE1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLnBsYXllck9iaikgcmV0dXJuO1xuXG4gICAgdmFyIG9sZFZhbCA9IHRoaXMucGxheWVyT2JqLnNvdW5kTW9kZTtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMucGxheWVyT2JqLnNlbGVjdFNvdW5kTW9kZShuZXdWYWwpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVGFwKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXJPYmouc3VwcG9ydHNWb2x1bWVNdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxheWVyT2JqLnZvbHVtZU11dGUoIXRoaXMucGxheWVyT2JqLmlzTXV0ZWQpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVG91Y2hFbmQoZXYpIHtcbiAgICAvKiB3aGVuIHRvdWNoIGVuZHMsIHdlIG11c3QgcHJldmVudCB0aGlzIGZyb21cbiAgICAgKiBiZWNvbWluZyBhIG1vdXNlZG93biwgdXAsIGNsaWNrIGJ5IGVtdWxhdGlvbiAqL1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVWb2x1bWVVcCgpIHtcbiAgICBjb25zdCBvYmogPSB0aGlzLiQudm9sdW1lVXA7XG4gICAgdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoXCJ2b2x1bWVfdXBcIiwgb2JqLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZURvd24oKSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy4kLnZvbHVtZURvd247XG4gICAgdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoXCJ2b2x1bWVfZG93blwiLCBvYmosIHRydWUpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lV29ya2VyKHNlcnZpY2UsIG9iaiwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgKG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iai5wb2ludGVyRG93bikpIHtcbiAgICAgIHRoaXMucGxheWVyT2JqLmNhbGxTZXJ2aWNlKHNlcnZpY2UpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVZvbHVtZVdvcmtlcihzZXJ2aWNlLCBvYmosIGZhbHNlKSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICB2b2x1bWVTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3Qgdm9sUGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCB2b2x1bWUgPSB2b2xQZXJjZW50YWdlID4gMCA/IHZvbFBlcmNlbnRhZ2UgLyAxMDAgOiAwO1xuICAgIHRoaXMucGxheWVyT2JqLnNldFZvbHVtZSh2b2x1bWUpO1xuICB9XG5cbiAgdHRzQ2hlY2tGb3JFbnRlcihldikge1xuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykgdGhpcy5zZW5kVFRTKCk7XG4gIH1cblxuICBzZW5kVFRTKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gdGhpcy5oYXNzLnNlcnZpY2VzLnR0cztcbiAgICBjb25zdCBzZXJ2aWNlS2V5cyA9IE9iamVjdC5rZXlzKHNlcnZpY2VzKS5zb3J0KCk7XG4gICAgbGV0IHNlcnZpY2U7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2VydmljZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzZXJ2aWNlS2V5c1tpXS5pbmRleE9mKFwiX3NheVwiKSAhPT0gLTEpIHtcbiAgICAgICAgc2VydmljZSA9IHNlcnZpY2VLZXlzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ0dHNcIiwgc2VydmljZSwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHRzTWVzc2FnZSxcbiAgICB9KTtcbiAgICB0aGlzLnR0c01lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMuJC50dHNJbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgX2NvbXB1dGVSVExEaXJlY3Rpb24oaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIiwgTW9yZUluZm9NZWRpYVBsYXllcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9TY3JpcHQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1lbnRyeSBsYXlvdXQganVzdGlmaWVkIGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnNjcmlwdC5sYXN0X2FjdGlvbicpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF9hY3Rpb25dXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tc2NyaXB0XCIsIE1vcmVJbmZvU2NyaXB0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IGZvcm1hdFRpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuXG5jbGFzcyBNb3JlSW5mb1N1biBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgaXRlbXM9XCJbW2NvbXB1dGVPcmRlcihyaXNpbmdEYXRlLCBzZXR0aW5nRGF0ZSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWVudHJ5IGxheW91dCBqdXN0aWZpZWQgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIj5cbiAgICAgICAgICAgIDxzcGFuPltbaXRlbUNhcHRpb24oaXRlbSldXTwvc3Bhbj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRhdGV0aW1lLW9iaj1cIltbaXRlbURhdGUoaXRlbSldXVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZVwiPltbaXRlbVZhbHVlKGl0ZW0pXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cImRhdGEtZW50cnkgbGF5b3V0IGp1c3RpZmllZCBob3Jpem9udGFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnN1bi5lbGV2YXRpb24nKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZWxldmF0aW9uXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICByaXNpbmdEYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVJpc2luZyhzdGF0ZU9iailcIixcbiAgICAgIH0sXG5cbiAgICAgIHNldHRpbmdEYXRlOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNldHRpbmcoc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlUmlzaW5nKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHN0YXRlT2JqLmF0dHJpYnV0ZXMubmV4dF9yaXNpbmcpO1xuICB9XG5cbiAgY29tcHV0ZVNldHRpbmcoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IERhdGUoc3RhdGVPYmouYXR0cmlidXRlcy5uZXh0X3NldHRpbmcpO1xuICB9XG5cbiAgY29tcHV0ZU9yZGVyKHJpc2luZ0RhdGUsIHNldHRpbmdEYXRlKSB7XG4gICAgcmV0dXJuIHJpc2luZ0RhdGUgPiBzZXR0aW5nRGF0ZSA/IFtcInNldFwiLCBcInJpc1wiXSA6IFtcInJpc1wiLCBcInNldFwiXTtcbiAgfVxuXG4gIGl0ZW1DYXB0aW9uKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJyaXNcIikge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYWxpemUoXCJ1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnN1bi5yaXNpbmdcIik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvY2FsaXplKFwidWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4uc2V0dGluZ1wiKTtcbiAgfVxuXG4gIGl0ZW1EYXRlKHR5cGUpIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gXCJyaXNcIiA/IHRoaXMucmlzaW5nRGF0ZSA6IHRoaXMuc2V0dGluZ0RhdGU7XG4gIH1cblxuICBpdGVtVmFsdWUodHlwZSkge1xuICAgIHJldHVybiBmb3JtYXRUaW1lKHRoaXMuaXRlbURhdGUodHlwZSksIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXN1blwiLCBNb3JlSW5mb1N1bik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUaW1lckVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3RpbWVyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibW9yZS1pbmZvLXRpbWVyXCIpXG5jbGFzcyBNb3JlSW5mb1RpbWVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBUaW1lckVudGl0eTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICAuc3RhdGVPYmo9JHt0aGlzLnN0YXRlT2JqfVxuICAgICAgICAuZXh0cmFGaWx0ZXJzPSR7XCJyZW1haW5pbmdcIn1cbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiaWRsZVwiIHx8IHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgLmFjdGlvbj1cIiR7XCJzdGFydFwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLnN0YXJ0XCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgLmFjdGlvbj1cIiR7XCJwYXVzZVwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLnBhdXNlXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIgfHwgdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAuYWN0aW9uPVwiJHtcImNhbmNlbFwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLmNhbmNlbFwiKX1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5hY3Rpb249XCIke1wiZmluaXNoXCJ9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUFjdGlvbkNsaWNrfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jYXJkLnRpbWVyLmFjdGlvbnMuZmluaXNoXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBY3Rpb25DbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgYWN0aW9uID0gKGUuY3VycmVudFRhcmdldCBhcyBhbnkpLmFjdGlvbjtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ0aW1lclwiLCBhY3Rpb24sIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJtb3JlLWluZm8tdGltZXJcIjogTW9yZUluZm9UaW1lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9VcGRhdGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9pbnN0YWxsYXRpb24vdXBkYXRpbmcvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnVwZGF0ZXIudGl0bGUnKV1dPC9hXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVSZWxlYXNlTm90ZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5yZWxlYXNlX25vdGVzIHx8XG4gICAgICBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvaW5zdGFsbGF0aW9uL3VwZGF0aW5nL1wiXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tdXBkYXRlclwiLCBNb3JlSW5mb1VwZGF0ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuY2xhc3MgTW9yZUluZm9WYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtc3VidGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1zdWJ0aXRsZVwiPlN0YXR1czogPC9zcGFuXG4gICAgICAgICAgPjxzcGFuPjxzdHJvbmc+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXR1c11dPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgID48aXJvbi1pY29uIGljb249XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeV9pY29uXV1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5X2xldmVsXV0gJTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaildXVwiPlxuICAgICAgICA8cD48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtc3VidGl0bGVcIj5WYWN1dW0gY2xlYW5lciBjb21tYW5kczo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdXBwb3J0c1N0YXJ0KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uU3RhcnRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwYXVzZVwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJvblBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3VwcG9ydHNTdGFydChzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5LXBhdXNlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUGxheVBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdG9wKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTdG9wXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ2xlYW5TcG90KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJvb21cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xlYW5TcG90XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhbiBzcG90XCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzTG9jYXRlKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25Mb2NhdGVcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxvY2F0ZVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpob21lLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUmV0dXJuSG9tZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmV0dXJuIGhvbWVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzRmFuU3BlZWQoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFuIHNwZWVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZF1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImZhblNwZWVkQ2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1zZWxmOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxLjNlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgPjxpcm9uLWljb24gaWNvbj1cImhhc3M6ZmFuXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRdXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiZmFuX3NwZWVkLGZhbl9zcGVlZF9saXN0LHN0YXR1cyxiYXR0ZXJ5X2xldmVsLGJhdHRlcnlfaWNvblwiXG4gICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3VwcG9ydHNQYXVzZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBzdXBwb3J0c0ZhblNwZWVkKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgc3VwcG9ydHNMb2NhdGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgc3VwcG9ydHNDbGVhblNwb3Qoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIHN1cHBvcnRzU3RhcnQoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKTtcbiAgfVxuXG4gIHN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNikgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTAyNCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKVxuICAgICk7XG4gIH1cblxuICBmYW5TcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZDtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInNldF9mYW5fc3BlZWRcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGZhbl9zcGVlZDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0b3BcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGxheVBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0X3BhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInBhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0XCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvY2F0ZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJsb2NhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYW5TcG90KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcImNsZWFuX3Nwb3RcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmV0dXJuSG9tZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJyZXR1cm5fdG9fYmFzZVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby12YWN1dW1cIiwgTW9yZUluZm9WYWN1dW0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IHsgZmVhdHVyZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XYXRlckhlYXRlciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuY29udGFpbmVyLW9wZXJhdGlvbl9saXN0LFxuXG4gICAgICAgIC5oYXMtYXdheV9tb2RlIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuaGFzLXRhcmdldF90ZW1wZXJhdHVyZSAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuaGFzLW9wZXJhdGlvbl9tb2RlIC5jb250YWluZXItb3BlcmF0aW9uX2xpc3QsXG5cbiAgICAgICAgLmNvbnRhaW5lci1vcGVyYXRpb25fbGlzdCBpcm9uLWljb24sXG5cbiAgICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICB9XG4gICAgICAgIGhhLXdhdGVyX2hlYXRlci1jb250cm9sLnJhbmdlLWNvbnRyb2wtbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgfVxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzJD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5vcGVyYXRpb25fbW9kZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIudGFyZ2V0X3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8aGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dXCJcbiAgICAgICAgICAgICAgICB1bml0cz1cIltbaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVdXVwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIltbY29tcHV0ZVRlbXBlcmF0dXJlU3RlcFNpemUoaGFzcywgc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcF1dXCJcbiAgICAgICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXBdXVwiXG4gICAgICAgICAgICAgICAgb24tY2hhbmdlPVwidGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXdhdGVyX2hlYXRlci1jb250cm9sPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3BlcmF0aW9uX2xpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLm9wZXJhdGlvbicpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlXV1cIlxuICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX2xpc3RdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPltbX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzQXdheU1vZGUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF3YXlfbW9kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIuYXdheV9tb2RlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJbW2F3YXlUb2dnbGVDaGVja2VkXV1cIlxuICAgICAgICAgICAgICAgIG9uLWNoYW5nZT1cImF3YXlUb2dnbGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYXdheVRvZ2dsZUNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGF3YXlUb2dnbGVDaGVja2VkOiBuZXdWYWwuYXR0cmlidXRlcy5hd2F5X21vZGUgPT09IFwib25cIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgICB0aW1lT3V0LmFmdGVyKDUwMCksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlVGVtcGVyYXR1cmVTdGVwU2l6ZShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXA7XG4gICAgfVxuICAgIGlmIChoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZS5pbmRleE9mKFwiRlwiKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMC41O1xuICB9XG5cbiAgc3VwcG9ydHNUZW1wZXJhdHVyZUNvbnRyb2xzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaik7XG4gIH1cblxuICBzdXBwb3J0c1RlbXBlcmF0dXJlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMSkgJiZcbiAgICAgIHR5cGVvZiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlID09PSBcIm51bWJlclwiXG4gICAgKTtcbiAgfVxuXG4gIHN1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgc3VwcG9ydHNBd2F5TW9kZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopIHtcbiAgICBjb25zdCBfZmVhdHVyZUNsYXNzTmFtZXMgPSB7XG4gICAgICAxOiBcImhhcy10YXJnZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIDI6IFwiaGFzLW9wZXJhdGlvbl9tb2RlXCIsXG4gICAgICA0OiBcImhhcy1hd2F5X21vZGVcIixcbiAgICB9O1xuXG4gICAgdmFyIGNsYXNzZXMgPSBbZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIF9mZWF0dXJlQ2xhc3NOYW1lcyldO1xuXG4gICAgY2xhc3Nlcy5wdXNoKFwibW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiKTtcblxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgdGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRlbXBlcmF0dXJlID09PSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUpIHJldHVybjtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlSGVscGVyKFwic2V0X3RlbXBlcmF0dXJlXCIsIHsgdGVtcGVyYXR1cmU6IHRlbXBlcmF0dXJlIH0pO1xuICB9XG5cbiAgYXdheVRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXdheV9tb2RlID09PSBcIm9uXCI7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG4gICAgdGhpcy5jYWxsU2VydmljZUhlbHBlcihcInNldF9hd2F5X21vZGVcIiwgeyBhd2F5X21vZGU6IG5ld1ZhbCB9KTtcbiAgfVxuXG4gIGhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlO1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuICAgIHRoaXMuY2FsbFNlcnZpY2VIZWxwZXIoXCJzZXRfb3BlcmF0aW9uX21vZGVcIiwge1xuICAgICAgb3BlcmF0aW9uX21vZGU6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxTZXJ2aWNlSGVscGVyKHNlcnZpY2UsIGRhdGEpIHtcbiAgICAvLyBXZSBjYWxsIHN0YXRlQ2hhbmdlZCBhZnRlciBhIHN1Y2Nlc3NmdWwgY2FsbCB0byByZS1zeW5jIHRoZSBpbnB1dHNcbiAgICAvLyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXQgb2Ygc3luYyBpZiBvdXIgc2VydmljZSBjYWxsIGRpZCBub3RcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWQgb24uIFNpbmNlIHRoZSBzdGF0ZSBpcyBub3QgY2hhbmdpbmcsXG4gICAgLy8gdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIndhdGVyX2hlYXRlclwiLCBzZXJ2aWNlLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVPYmpDaGFuZ2VkKHRoaXMuc3RhdGVPYmopO1xuICAgIH0pO1xuICB9XG5cbiAgX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgbW9kZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUud2F0ZXJfaGVhdGVyLiR7bW9kZX1gKSB8fCBtb2RlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby13YXRlcl9oZWF0ZXJcIiwgTW9yZUluZm9XYXRlckhlYXRlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XZWF0aGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBpcm9uLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5zZWN0aW9uIHtcbiAgICAgICAgICBtYXJnaW46IDE2cHggMCA4cHggMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZW1wLFxuICAgICAgICAudGVtcGxvdyB7XG4gICAgICAgICAgbWluLXdpZHRoOiA0OHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlbXBsb3cge1xuICAgICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOnRoZXJtb21ldGVyXCI+PC9pcm9uLWljb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczpnYXVnZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5haXJfcHJlc3N1cmUnKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzc3VyZV1dIFtbZ2V0VW5pdCgnYWlyX3ByZXNzdXJlJyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5KV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczp3YXRlci1wZXJjZW50XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmh1bWlkaXR5JyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5XV0gJTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfc3BlZWQpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOndlYXRoZXItd2luZHlcIj48L2lyb24taWNvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMud2luZF9zcGVlZCcpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgW1tnZXRXaW5kKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZCxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9iZWFyaW5nLCBsb2NhbGl6ZSldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShzdGF0ZU9iai5hdHRyaWJ1dGVzLnZpc2liaWxpdHkpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOmV5ZVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy52aXNpYmlsaXR5JyldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnZpc2liaWxpdHldXSBbW2dldFVuaXQoJ2xlbmd0aCcpXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mb3JlY2FzdF1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+W1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmZvcmVjYXN0JyldXTo8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0XV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS5jb25kaXRpb24pXV1cIj5cbiAgICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiW1tnZXRXZWF0aGVySWNvbihpdGVtLmNvbmRpdGlvbildXVwiPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3Nob3dWYWx1ZShpdGVtLnRlbXBsb3cpXV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5bW2NvbXB1dGVEYXRlVGltZShpdGVtLmRhdGV0aW1lKV1dPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS50ZW1wbG93KV1dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+W1tjb21wdXRlRGF0ZShpdGVtLmRhdGV0aW1lKV1dPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbG93XCI+XG4gICAgICAgICAgICAgICAgW1tpdGVtLnRlbXBsb3ddXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICBbW2l0ZW0udGVtcGVyYXR1cmVdXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cInN0YXRlT2JqLmF0dHJpYnV0ZXMuYXR0cmlidXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0aW9uXCI+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmF0dHJpYnV0aW9uXV08L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNhcmRpbmFsRGlyZWN0aW9ucyA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgICBcIk5cIixcbiAgICBdO1xuICAgIHRoaXMud2VhdGhlckljb25zID0ge1xuICAgICAgXCJjbGVhci1uaWdodFwiOiBcImhhc3M6d2VhdGhlci1uaWdodFwiLFxuICAgICAgY2xvdWR5OiBcImhhc3M6d2VhdGhlci1jbG91ZHlcIixcbiAgICAgIGV4Y2VwdGlvbmFsOiBcImhhc3M6YWxlcnQtY2lyY2xlLW91dGxpbmVcIixcbiAgICAgIGZvZzogXCJoYXNzOndlYXRoZXItZm9nXCIsXG4gICAgICBoYWlsOiBcImhhc3M6d2VhdGhlci1oYWlsXCIsXG4gICAgICBsaWdodG5pbmc6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZ1wiLFxuICAgICAgXCJsaWdodG5pbmctcmFpbnlcIjogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nLXJhaW55XCIsXG4gICAgICBwYXJ0bHljbG91ZHk6IFwiaGFzczp3ZWF0aGVyLXBhcnRseS1jbG91ZHlcIixcbiAgICAgIHBvdXJpbmc6IFwiaGFzczp3ZWF0aGVyLXBvdXJpbmdcIixcbiAgICAgIHJhaW55OiBcImhhc3M6d2VhdGhlci1yYWlueVwiLFxuICAgICAgc25vd3k6IFwiaGFzczp3ZWF0aGVyLXNub3d5XCIsXG4gICAgICBcInNub3d5LXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLXNub3d5LXJhaW55XCIsXG4gICAgICBzdW5ueTogXCJoYXNzOndlYXRoZXItc3VubnlcIixcbiAgICAgIHdpbmR5OiBcImhhc3M6d2VhdGhlci13aW5keVwiLFxuICAgICAgXCJ3aW5keS12YXJpYW50XCI6IFwiaGFzczp3ZWF0aGVyLXdpbmR5LXZhcmlhbnRcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZURhdGUoZGF0YSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5oYXNzLmxhbmd1YWdlLCB7XG4gICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZURhdGVUaW1lKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwge1xuICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVuaXQobWVhc3VyZSkge1xuICAgIGNvbnN0IGxlbmd0aFVuaXQgPSB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLmxlbmd0aCB8fCBcIlwiO1xuICAgIHN3aXRjaCAobWVhc3VyZSkge1xuICAgICAgY2FzZSBcImFpcl9wcmVzc3VyZVwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdCA9PT0gXCJrbVwiID8gXCJoUGFcIiA6IFwiaW5IZ1wiO1xuICAgICAgY2FzZSBcImxlbmd0aFwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdDtcbiAgICAgIGNhc2UgXCJwcmVjaXBpdGF0aW9uXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcIm1tXCIgOiBcImluXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbVttZWFzdXJlXSB8fCBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIHdpbmRCZWFyaW5nVG9UZXh0KGRlZ3JlZSkge1xuICAgIGNvbnN0IGRlZ3JlZW51bSA9IHBhcnNlSW50KGRlZ3JlZSk7XG4gICAgaWYgKGlzRmluaXRlKGRlZ3JlZW51bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICAgIH1cbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG5cbiAgZ2V0V2luZChzcGVlZCwgYmVhcmluZywgbG9jYWxpemUpIHtcbiAgICBpZiAoYmVhcmluZyAhPSBudWxsKSB7XG4gICAgICBjb25zdCBjYXJkaW5hbERpcmVjdGlvbiA9IHRoaXMud2luZEJlYXJpbmdUb1RleHQoYmVhcmluZyk7XG4gICAgICByZXR1cm4gYCR7c3BlZWR9ICR7dGhpcy5nZXRVbml0KFwibGVuZ3RoXCIpfS9oICgke2xvY2FsaXplKFxuICAgICAgICBgdWkuY2FyZC53ZWF0aGVyLmNhcmRpbmFsX2RpcmVjdGlvbi4ke2NhcmRpbmFsRGlyZWN0aW9uLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgKSB8fCBjYXJkaW5hbERpcmVjdGlvbn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaGA7XG4gIH1cblxuICBnZXRXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVySWNvbnNbY29uZGl0aW9uXTtcbiAgfVxuXG4gIF9zaG93VmFsdWUoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVtICE9PSBudWxsO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby13ZWF0aGVyXCIsIE1vcmVJbmZvV2VhdGhlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uLy4uL2RhdGEvaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCBcIi4vY29udHJvbHMvbW9yZS1pbmZvLWNvbnRlbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBET01BSU5TX01PUkVfSU5GT19OT19ISVNUT1JZIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb25zdFwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jb25zdCBET01BSU5TX05PX0lORk8gPSBbXCJjYW1lcmFcIiwgXCJjb25maWd1cmF0b3JcIiwgXCJoaXN0b3J5X2dyYXBoXCJdO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9Db250cm9scyBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlLWRpYWxvZ1wiPlxuICAgICAgICBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItY29sb3IpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZCk7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciBbbWFpbi10aXRsZV0ge1xuICAgICAgICAgIEBhcHBseSAtLWhhLW1vcmUtaW5mby1hcHAtdG9vbGJhci10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWhpc3RvcnktY2hhcnRzIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ1MXB4KSBhbmQgKG1pbi1oZWlnaHQ6IDUwMXB4KSB7XG4gICAgICAgICAgLm1haW4tdGl0bGUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RvbWFpbj1cImNhbWVyYVwiXSkgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUge1xuICAgICAgICAgIG1hcmdpbjogMCAtMjRweCAtMjFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBhcHAtdG9vbGJhciB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkRpc21pc3MgZGlhbG9nXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpjbG9zZVwiXG4gICAgICAgICAgZGlhbG9nLWRpc21pc3NcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLXRpdGxlXCIgbWFpbi10aXRsZT1cIlwiIG9uLWNsaWNrPVwiZW5sYXJnZVwiPlxuICAgICAgICAgIFtbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjYW5Db25maWd1cmVdXVwiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2V0dGluZ3NcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJfZ290b1NldHRpbmdzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvYXBwLXRvb2xiYXI+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29tcHV0ZVNob3dTdGF0ZUluZm8oc3RhdGVPYmopXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDxzdGF0ZS1jYXJkLWNvbnRlbnRcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgaW4tZGlhbG9nPVwiXCJcbiAgICAgICAgPjwvc3RhdGUtY2FyZC1jb250ZW50PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSBkaWFsb2ctZWxlbWVudD1cIltbZGlhbG9nRWxlbWVudF1dXCI+XG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj1cIltbX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChoYXNzLCBzdGF0ZU9iaildXVwiXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8aGEtc3RhdGUtaGlzdG9yeS1kYXRhXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgZmlsdGVyLXR5cGU9XCJyZWNlbnQtZW50aXR5XCJcbiAgICAgICAgICAgIGVudGl0eS1pZD1cIltbc3RhdGVPYmouZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgZGF0YT1cInt7X3N0YXRlSGlzdG9yeX19XCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmc9XCJ7e19zdGF0ZUhpc3RvcnlMb2FkaW5nfX1cIlxuICAgICAgICAgICAgY2FjaGUtY29uZmlnPVwiW1tfY2FjaGVDb25maWddXVwiXG4gICAgICAgICAgPjwvaGEtc3RhdGUtaGlzdG9yeS1kYXRhPlxuICAgICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0c1xuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIGhpc3RvcnktZGF0YT1cIltbX3N0YXRlSGlzdG9yeV1dXCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmctZGF0YT1cIltbX3N0YXRlSGlzdG9yeUxvYWRpbmddXVwiXG4gICAgICAgICAgICB1cC10by1ub3dcbiAgICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0cz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPG1vcmUtaW5mby1jb250ZW50XG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tY29udGVudD5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIGRpYWxvZ0VsZW1lbnQ6IE9iamVjdCxcbiAgICAgIGNhbkNvbmZpZ3VyZTogQm9vbGVhbixcblxuICAgICAgZG9tYWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZURvbWFpbihzdGF0ZU9iailcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zdGF0ZUhpc3Rvcnk6IE9iamVjdCxcbiAgICAgIF9zdGF0ZUhpc3RvcnlMb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgICBsYXJnZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIF9jYWNoZUNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgcmVmcmVzaDogNjAsXG4gICAgICAgICAgY2FjaGVLZXk6IG51bGwsXG4gICAgICAgICAgaG91cnNUb1Nob3c6IDI0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBlbmxhcmdlKCkge1xuICAgIHRoaXMubGFyZ2UgPSAhdGhpcy5sYXJnZTtcbiAgfVxuXG4gIF9jb21wdXRlU2hvd1N0YXRlSW5mbyhzdGF0ZU9iaikge1xuICAgIHJldHVybiAhc3RhdGVPYmogfHwgIURPTUFJTlNfTk9fSU5GTy5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopKTtcbiAgfVxuXG4gIF9jb21wdXRlU2hvd0hpc3RvcnlDb21wb25lbnQoaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgaGFzcyAmJlxuICAgICAgc3RhdGVPYmogJiZcbiAgICAgIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiaGlzdG9yeVwiKSAmJlxuICAgICAgIURPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkuaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVEb21haW4oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIDogXCJcIjtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jYWNoZUNvbmZpZy5jYWNoZUtleSAhPT0gYG1vcmVfaW5mby4ke25ld1ZhbC5lbnRpdHlfaWR9YCkge1xuICAgICAgdGhpcy5fY2FjaGVDb25maWcgPSB7XG4gICAgICAgIC4uLnRoaXMuX2NhY2hlQ29uZmlnLFxuICAgICAgICBjYWNoZUtleTogYG1vcmVfaW5mby4ke25ld1ZhbC5lbnRpdHlfaWR9YCxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgX2dvdG9TZXR0aW5ncygpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IFwic2V0dGluZ3NcIiB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvbnRyb2xzXCIsIE1vcmVJbmZvQ29udHJvbHMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9lbnRpdHlfcmVnaXN0cnlcIjtcbmltcG9ydCB7IHNob3dTYXZlU3VjY2Vzc1RvYXN0IH0gZnJvbSBcIi4uLy4uL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcIjtcbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9TZXR0aW5ncyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kKTtcblxuICAgICAgICAgIC8qIHRvIGZpdCBzYXZlIGJ1dHRvbiAqL1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtdG9vbGJhciBbbWFpbi10aXRsZV0ge1xuICAgICAgICAgIEBhcHBseSAtLWhhLW1vcmUtaW5mby1hcHAtdG9vbGJhci10aXRsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIG13Yy1idXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC0tbWRjLXRoZW1lLXByaW1hcnk6IHZhcigtLW1vcmUtaW5mby1oZWFkZXItY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjRweCAyNHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgIDxoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XG4gICAgICAgICAgb24tY2xpY2s9XCJfYmFja1RhcHBlZFwiXG4gICAgICAgID48L2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXY+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT1cIlwiPltbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfc2F2ZVwiIGRpc2FibGVkPVwiW1tfY29tcHV0ZUludmFsaWQoX2VudGl0eUlkKV1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3Muc2F2ZScpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgdmFsdWU9XCJ7e19uYW1lfX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3MubmFtZScpXV1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgdmFsdWU9XCJ7e19lbnRpdHlJZH19XCJcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmRpYWxvZ3MubW9yZV9pbmZvX3NldHRpbmdzLmVudGl0eV9pZCcpXV1cIlxuICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJEb21haW4gbmVlZHMgdG8gc3RheSB0aGUgc2FtZVwiXG4gICAgICAgICAgaW52YWxpZD1cIltbX2NvbXB1dGVJbnZhbGlkKF9lbnRpdHlJZCldXVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcblxuICAgICAgcmVnaXN0cnlJbmZvOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3JlZ2lzdHJ5SW5mb0NoYW5nZWRcIixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX25hbWU6IFN0cmluZyxcbiAgICAgIF9lbnRpdHlJZDogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmopIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIF9jb21wdXRlSW52YWxpZChlbnRpdHlJZCkge1xuICAgIHJldHVybiBjb21wdXRlRG9tYWluKHRoaXMuc3RhdGVPYmouZW50aXR5X2lkKSAhPT0gY29tcHV0ZURvbWFpbihlbnRpdHlJZCk7XG4gIH1cblxuICBfcmVnaXN0cnlJbmZvQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfbmFtZTogbmV3VmFsLm5hbWUsXG4gICAgICAgIF9lbnRpdHlJZDogbmV3VmFsLmVudGl0eV9pZCxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBfbmFtZTogXCJcIixcbiAgICAgICAgX2VudGl0eUlkOiBcIlwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX2JhY2tUYXBwZWQoKSB7XG4gICAgdGhpcy5maXJlKFwibW9yZS1pbmZvLXBhZ2VcIiwgeyBwYWdlOiBudWxsIH0pO1xuICB9XG5cbiAgYXN5bmMgX3NhdmUoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB1cGRhdGVFbnRpdHlSZWdpc3RyeUVudHJ5KFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgICBuZXdfZW50aXR5X2lkOiB0aGlzLl9lbnRpdHlJZCxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgc2hvd1NhdmVTdWNjZXNzVG9hc3QodGhpcywgdGhpcy5oYXNzKTtcblxuICAgICAgdGhpcy5yZWdpc3RyeUluZm8gPSBpbmZvO1xuXG4gICAgICAvLyBLZWVwIHRoZSBtb3JlIGluZm8gZGlhbG9nIG9wZW4gYXQgdGhlIG5ldyBlbnRpdHkuXG4gICAgICBpZiAodGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgIT09IHRoaXMuX2VudGl0eUlkKSB7XG4gICAgICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuX2VudGl0eUlkIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoYHNhdmUgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLXNldHRpbmdzXCIsIE1vcmVJbmZvU2V0dGluZ3MpO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuaW1wb3J0IHsgUGFwZXJEaWFsb2dCZWhhdmlvciB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4vZXZlbnRzLW1peGluXCI7XG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gUGFwZXJEaWFsb2dCZWhhdmlvclxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICAgICAgW0V2ZW50c01peGluLCBQYXBlckRpYWxvZ0JlaGF2aW9yXSxcbiAgICAgIHN1cGVyQ2xhc3NcbiAgICApIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aXRoQmFja2Ryb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJjb25zdCBoYXNzQXR0cmlidXRlVXRpbCA9IHt9O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTID0ge1xuICBiaW5hcnlfc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJjb2xkXCIsXG4gICAgXCJjb25uZWN0aXZpdHlcIixcbiAgICBcImRvb3JcIixcbiAgICBcImdhcmFnZV9kb29yXCIsXG4gICAgXCJnYXNcIixcbiAgICBcImhlYXRcIixcbiAgICBcImxpZ2h0XCIsXG4gICAgXCJsb2NrXCIsXG4gICAgXCJtb2lzdHVyZVwiLFxuICAgIFwibW90aW9uXCIsXG4gICAgXCJtb3ZpbmdcIixcbiAgICBcIm9jY3VwYW5jeVwiLFxuICAgIFwib3BlbmluZ1wiLFxuICAgIFwicGx1Z1wiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInByZXNlbmNlXCIsXG4gICAgXCJwcm9ibGVtXCIsXG4gICAgXCJzYWZldHlcIixcbiAgICBcInNtb2tlXCIsXG4gICAgXCJzb3VuZFwiLFxuICAgIFwidmlicmF0aW9uXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgY292ZXI6IFtcbiAgICBcImF3bmluZ1wiLFxuICAgIFwiYmxpbmRcIixcbiAgICBcImN1cnRhaW5cIixcbiAgICBcImRhbXBlclwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlXCIsXG4gICAgXCJzaGFkZVwiLFxuICAgIFwic2h1dHRlclwiLFxuICAgIFwid2luZG93XCIsXG4gIF0sXG4gIHNlbnNvcjogW1xuICAgIFwiYmF0dGVyeVwiLFxuICAgIFwiaHVtaWRpdHlcIixcbiAgICBcImlsbHVtaW5hbmNlXCIsXG4gICAgXCJ0ZW1wZXJhdHVyZVwiLFxuICAgIFwicHJlc3N1cmVcIixcbiAgICBcInBvd2VyXCIsXG4gICAgXCJzaWduYWxfc3RyZW5ndGhcIixcbiAgXSxcbiAgc3dpdGNoOiBbXCJzd2l0Y2hcIiwgXCJvdXRsZXRcIl0sXG59O1xuXG5oYXNzQXR0cmlidXRlVXRpbC5VTktOT1dOX1RZUEUgPSBcImpzb25cIjtcbmhhc3NBdHRyaWJ1dGVVdGlsLkFERF9UWVBFID0gXCJrZXktdmFsdWVcIjtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVFlQRV9UT19UQUcgPSB7XG4gIHN0cmluZzogXCJoYS1jdXN0b21pemUtc3RyaW5nXCIsXG4gIGpzb246IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBpY29uOiBcImhhLWN1c3RvbWl6ZS1pY29uXCIsXG4gIGJvb2xlYW46IFwiaGEtY3VzdG9taXplLWJvb2xlYW5cIixcbiAgYXJyYXk6IFwiaGEtY3VzdG9taXplLWFycmF5XCIsXG4gIFwia2V5LXZhbHVlXCI6IFwiaGEtY3VzdG9taXplLWtleS12YWx1ZVwiLFxufTtcblxuLy8gQXR0cmlidXRlcyBoZXJlIHNlcnZlIGR1YWwgcHVycG9zZTpcbi8vIDEpIEFueSBrZXkgb2YgdGhpcyBvYmplY3Qgd29uJ3QgYmUgc2hvd24gaW4gbW9yZS1pbmZvIHdpbmRvdy5cbi8vIDIpIEFueSBrZXkgd2hpY2ggaGFzIHZhbHVlIG90aGVyIHRoYW4gdW5kZWZpbmVkIHdpbGwgYXBwZWFyIGluIGN1c3RvbWl6YXRpb25cbi8vICAgIGNvbmZpZyBhY2NvcmRpbmcgdG8gaXRzIHZhbHVlLlxuaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUyA9IGhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgfHwge1xuICBlbnRpdHlfcGljdHVyZTogdW5kZWZpbmVkLFxuICBmcmllbmRseV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIsIGRlc2NyaXB0aW9uOiBcIk5hbWVcIiB9LFxuICBpY29uOiB7IHR5cGU6IFwiaWNvblwiIH0sXG4gIGVtdWxhdGVkX2h1ZToge1xuICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgZW11bGF0ZWRfaHVlX25hbWU6IHtcbiAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgIGRvbWFpbnM6IFtcImVtdWxhdGVkX2h1ZVwiXSxcbiAgfSxcbiAgaGFhc2thX2hpZGRlbjogdW5kZWZpbmVkLFxuICBoYWFza2FfbmFtZTogdW5kZWZpbmVkLFxuICBob21lYnJpZGdlX2hpZGRlbjogeyB0eXBlOiBcImJvb2xlYW5cIiB9LFxuICBob21lYnJpZGdlX25hbWU6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBzdXBwb3J0ZWRfZmVhdHVyZXM6IHVuZGVmaW5lZCxcbiAgYXR0cmlidXRpb246IHVuZGVmaW5lZCxcbiAgY3VzdG9tX3VpX21vcmVfaW5mbzogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGN1c3RvbV91aV9zdGF0ZV9jYXJkOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgZGV2aWNlX2NsYXNzOiB7XG4gICAgdHlwZTogXCJhcnJheVwiLFxuICAgIG9wdGlvbnM6IGhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MsXG4gICAgZGVzY3JpcHRpb246IFwiRGV2aWNlIGNsYXNzXCIsXG4gICAgZG9tYWluczogW1wiYmluYXJ5X3NlbnNvclwiLCBcImNvdmVyXCIsIFwic2Vuc29yXCIsIFwic3dpdGNoXCJdLFxuICB9LFxuICBoaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIsIGRlc2NyaXB0aW9uOiBcIkhpZGUgZnJvbSBVSVwiIH0sXG4gIGFzc3VtZWRfc3RhdGU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXG4gICAgICBcInN3aXRjaFwiLFxuICAgICAgXCJsaWdodFwiLFxuICAgICAgXCJjb3ZlclwiLFxuICAgICAgXCJjbGltYXRlXCIsXG4gICAgICBcImZhblwiLFxuICAgICAgXCJncm91cFwiLFxuICAgICAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgICBdLFxuICB9LFxuICBpbml0aWFsX3N0YXRlOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJhdXRvbWF0aW9uXCJdLFxuICB9LFxuICB1bml0X29mX21lYXN1cmVtZW50OiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhc3NBdHRyaWJ1dGVVdGlsO1xuIiwiaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4vdG9hc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNob3dTYXZlU3VjY2Vzc1RvYXN0ID0gKGVsOiBIVE1MRWxlbWVudCwgaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgc2hvd1RvYXN0KGVsLCB7XG4gICAgbWVzc2FnZTogaGFzcyEubG9jYWxpemUoXCJ1aS5jb21tb24uc3VjY2Vzc2Z1bGx5X3NhdmVkXCIpLFxuICB9KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFXQTtBQUVBO0FBQ0E7QUFLQTtBQUtBO0FBQUE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQStLQTtBQTVLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBckxBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3psQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFJQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0U0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWlCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQWFBOzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN01BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQVdBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFBQTs7QUFJQTtBQStGQTtBQTdGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQWxHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFpR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFXQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOzs7QUFHQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBOzs7Ozs7QUFPQTtBQUNBOzs7OztBQUtBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFFQTtBQUNBOztBQUlBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7O0FBSUE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBRUE7QUFDQTs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REE7QUFDQTtBQUNBO0FBMWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQTJjQTs7Ozs7Ozs7Ozs7OztBQ2pmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25KQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeGFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQVVBO0FBTUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFoRkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0lBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==