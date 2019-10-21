(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-core"],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
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









const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer layer-1">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-2">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-3">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>

    <div class="spinner-layer layer-4">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,

  is: 'paper-spinner',

  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});


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

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");






/*
 * @appliesMixin EventsMixin
 */
class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      progress: {
        type: Boolean,
        value: false,
      },

      domain: {
        type: String,
      },

      service: {
        type: String,
      },

      serviceData: {
        type: Object,
        value: {},
      },

      confirmation: {
        type: String,
      },
    };
  }

  buttonTapped() {
    if (this.confirmation && !window.confirm(this.confirmation)) {
      return;
    }
    this.progress = true;
    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData,
    };

    this.hass
      .callService(this.domain, this.service, this.serviceData)
      .then(
        function() {
          el.progress = false;
          el.$.progress.actionSuccess();
          eventData.success = true;
        },
        function() {
          el.progress = false;
          el.$.progress.actionError();
          eventData.success = false;
        }
      )
      .then(function() {
        el.fire("hass-service-called", eventData);
      });
  }
}

customElements.define("ha-call-service-button", HaCallServiceButton);


/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");





class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      progress: {
        type: Boolean,
        value: false,
      },

      disabled: {
        type: Boolean,
        value: false,
      },
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", (ev) => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }
}

customElements.define("ha-progress-button", HaProgressButton);


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

/***/ "./src/panels/config/core/ha-config-core-form.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/core/ha-config-core-form.ts ***!
  \*******************************************************/
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
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/core */ "./src/data/core.ts");
/* harmony import */ var _components_timezone_datalist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/timezone-datalist */ "./src/components/timezone-datalist.ts");
/* harmony import */ var _components_map_ha_location_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/map/ha-location-editor */ "./src/components/map/ha-location-editor.ts");











let ConfigCoreForm = class ConfigCoreForm extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._working = false;
    }
    render() {
        const canEdit = ["storage", "default"].includes(this.hass.config.config_source);
        const disabled = this._working || !canEdit;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        .header=${this.hass.localize("ui.panel.config.core.section.core.form.heading")}
      >
        <div class="card-content">
          ${!canEdit
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <p>
                  ${this.hass.localize("ui.panel.config.core.section.core.core_config.edit_requires_storage")}
                </p>
              `
            : ""}

          <div class="row">
            <ha-location-editor
              class="flex"
              .location=${this._locationValue}
              @change=${this._locationChanged}
            ></ha-location-editor>
          </div>

          <div class="row">
            <div class="flex">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone")}
            </div>

            <paper-input
              class="flex"
              .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone")}
              name="timeZone"
              list="timezones"
              .disabled=${disabled}
              .value=${this._timeZoneValue}
              @value-changed=${this._handleChange}
            ></paper-input>
          </div>
          <div class="row">
            <div class="flex">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation")}
            </div>

            <paper-input
              class="flex"
              .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation")}
              name="elevation"
              type="number"
              .disabled=${disabled}
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
              <paper-radio-button name="metric" .disabled=${disabled}>
                ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")}
                <div class="secondary">
                  ${this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example")}
                </div>
              </paper-radio-button>
              <paper-radio-button name="imperial" .disabled=${disabled}>
                ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial")}
                <div class="secondary">
                  ${this.hass.localize("ui.panel.config.core.section.core.core_config.imperial_example")}
                </div>
              </paper-radio-button>
            </paper-radio-group>
          </div>
        </div>
        <div class="card-actions">
          <mwc-button @click=${this._save} .disabled=${disabled}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.save_button")}
          </mwc-button>
        </div>
      </ha-card>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        const input = this.shadowRoot.querySelector("[name=timeZone]");
        input.inputElement.appendChild(Object(_components_timezone_datalist__WEBPACK_IMPORTED_MODULE_9__["createTimezoneListEl"])());
    }
    get _locationValue() {
        return this._location !== undefined
            ? this._location
            : [Number(this.hass.config.latitude), Number(this.hass.config.longitude)];
    }
    get _elevationValue() {
        return this._elevation !== undefined
            ? this._elevation
            : this.hass.config.elevation;
    }
    get _timeZoneValue() {
        return this._timeZone !== undefined
            ? this._timeZone
            : this.hass.config.time_zone;
    }
    get _unitSystemValue() {
        return this._unitSystem !== undefined
            ? this._unitSystem
            : this.hass.config.unit_system.temperature === _common_const__WEBPACK_IMPORTED_MODULE_7__["UNIT_C"]
                ? "metric"
                : "imperial";
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
    async _save() {
        this._working = true;
        try {
            const location = this._locationValue;
            await Object(_data_core__WEBPACK_IMPORTED_MODULE_8__["saveCoreConfig"])(this.hass, {
                latitude: location[0],
                longitude: location[1],
                elevation: Number(this._elevationValue),
                unit_system: this._unitSystemValue,
                time_zone: this._timeZoneValue,
            });
        }
        catch (err) {
            alert("FAIL");
        }
        finally {
            this._working = false;
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

      .row > * {
        margin: 0 8px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigCoreForm.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigCoreForm.prototype, "_working", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigCoreForm.prototype, "_location", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigCoreForm.prototype, "_elevation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigCoreForm.prototype, "_unitSystem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigCoreForm.prototype, "_timeZone", void 0);
ConfigCoreForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-core-form")
], ConfigCoreForm);


/***/ }),

/***/ "./src/panels/config/core/ha-config-core.js":
/*!**************************************************!*\
  !*** ./src/panels/config/core/ha-config-core.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-config-section-core */ "./src/panels/config/core/ha-config-section-core.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");













/*
 * @appliesMixin LocalizeMixin
 */
class HaConfigCore extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 32px;
        }

        .border {
          margin: 32px auto 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          max-width: 1040px;
        }

        .narrow .border {
          max-width: 640px;
        }
      </style>

      <hass-subpage header="[[localize('ui.panel.config.core.caption')]]">
        <div class$="[[computeClasses(isWide)]]">
          <ha-config-section-core
            is-wide="[[isWide]]"
            show-advanced="[[showAdvanced]]"
            hass="[[hass]]"
          ></ha-config-section-core>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      showAdvanced: Boolean,
    };
  }

  computeClasses(isWide) {
    return isWide ? "content" : "content narrow";
  }
}

customElements.define("ha-config-core", HaConfigCore);


/***/ }),

/***/ "./src/panels/config/core/ha-config-name-form.ts":
/*!*******************************************************!*\
  !*** ./src/panels/config/core/ha-config-name-form.ts ***!
  \*******************************************************/
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
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/core */ "./src/data/core.ts");








let ConfigNameForm = class ConfigNameForm extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._working = false;
    }
    render() {
        const canEdit = ["storage", "default"].includes(this.hass.config.config_source);
        const disabled = this._working || !canEdit;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card>
        <div class="card-content">
          ${!canEdit
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <p>
                  ${this.hass.localize("ui.panel.config.core.section.core.core_config.edit_requires_storage")}
                </p>
              `
            : ""}
          <paper-input
            class="flex"
            .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.location_name")}
            name="name"
            .disabled=${disabled}
            .value=${this._nameValue}
            @value-changed=${this._handleChange}
          ></paper-input>
        </div>
        <div class="card-actions">
          <mwc-button @click=${this._save} .disabled=${disabled}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.save_button")}
          </mwc-button>
        </div>
      </ha-card>
    `;
    }
    get _nameValue() {
        return this._name !== undefined
            ? this._name
            : this.hass.config.location_name;
    }
    _handleChange(ev) {
        const target = ev.currentTarget;
        this[`_${target.name}`] = target.value;
    }
    async _save() {
        this._working = true;
        try {
            await Object(_data_core__WEBPACK_IMPORTED_MODULE_7__["saveCoreConfig"])(this.hass, {
                location_name: this._nameValue,
            });
        }
        catch (err) {
            alert("FAIL");
        }
        finally {
            this._working = false;
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigNameForm.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigNameForm.prototype, "_working", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], ConfigNameForm.prototype, "_name", void 0);
ConfigNameForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-config-name-form")
], ConfigNameForm);


/***/ }),

/***/ "./src/panels/config/core/ha-config-section-core.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/core/ha-config-section-core.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_config_name_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ha-config-name-form */ "./src/panels/config/core/ha-config-name-form.ts");
/* harmony import */ var _ha_config_core_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ha-config-core-form */ "./src/panels/config/core/ha-config-core-form.ts");

















/*
 * @appliesMixin LocalizeMixin
 */
class HaConfigSectionCore extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex ha-style">
        .validate-container {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: 140px;
        }

        .validate-result {
          color: var(--google-green-500);
          font-weight: 500;
          margin-bottom: 1em;
        }

        .config-invalid {
          margin: 1em 0;
        }

        .config-invalid .text {
          color: var(--google-red-500);
          font-weight: 500;
        }

        .config-invalid mwc-button {
          float: right;
        }

        .validate-log {
          white-space: pre-wrap;
          direction: ltr;
        }
      </style>
      <ha-config-section is-wide="[[isWide]]">
        <span slot="header"
          >[[localize('ui.panel.config.core.section.core.header')]]</span
        >
        <span slot="introduction"
          >[[localize('ui.panel.config.core.section.core.introduction')]]</span
        >

        <ha-config-name-form hass="[[hass]]"></ha-config-name-form>
        <ha-config-core-form hass="[[hass]]"></ha-config-core-form>
      </ha-config-section>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      isWide: {
        type: Boolean,
        value: false,
      },

      validating: {
        type: Boolean,
        value: false,
      },

      isValid: {
        type: Boolean,
        value: null,
      },

      validateLog: {
        type: String,
        value: "",
      },

      showAdvanced: Boolean,
    };
  }

  groupLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "group");
  }

  automationLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "automation");
  }

  scriptLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "script");
  }

  validateConfig() {
    this.validating = true;
    this.validateLog = "";
    this.isValid = null;

    this.hass.callApi("POST", "config/core/check_config").then((result) => {
      this.validating = false;
      this.isValid = result.result === "valid";

      if (!this.isValid) {
        this.validateLog = result.errors;
      }
    });
  }
}

customElements.define("ha-config-section-core", HaConfigSectionCore);


/***/ }),

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");





class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      narrow: {
        type: Boolean,
      },

      isWide: {
        type: Boolean,
        value: false,
      },
    };
  }

  computeContentClasses(isWide) {
    var classes = "content ";

    return isWide ? classes : classes + "narrow";
  }

  computeClasses(isWide) {
    var classes = "together layout ";

    return classes + (isWide ? "horizontal" : "vertical narrow");
  }
}

customElements.define("ha-config-section", HaConfigSection);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNvcmUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC9oYS1sb2NhdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGltZXpvbmUtZGF0YWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2V2ZW50cy1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2NvcmUvaGEtY29uZmlnLWNvcmUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jb3JlL2hhLWNvbmZpZy1jb3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2NvcmUvaGEtY29uZmlnLW5hbWUtZm9ybS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jb3JlL2hhLWNvbmZpZy1zZWN0aW9uLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsImltcG9ydCB7IE1hcCB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbi8vIFNldHMgdXAgYSBMZWFmbGV0IG1hcCBvbiB0aGUgcHJvdmlkZWQgRE9NIGVsZW1lbnRcbmV4cG9ydCB0eXBlIExlYWZsZXRNb2R1bGVUeXBlID0gdHlwZW9mIGltcG9ydChcImxlYWZsZXRcIik7XG5cbmV4cG9ydCBjb25zdCBzZXR1cExlYWZsZXRNYXAgPSBhc3luYyAoXG4gIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkYXJrTW9kZSA9IGZhbHNlXG4pOiBQcm9taXNlPFtNYXAsIExlYWZsZXRNb2R1bGVUeXBlXT4gPT4ge1xuICBpZiAoIW1hcEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXR1cCBMZWFmbGV0IG1hcCBvbiBkaXNjb25uZWN0ZWQgZWxlbWVudFwiKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgTGVhZmxldCA9IChhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsZWFmbGV0XCIgKi8gXCJsZWFmbGV0XCIpKSBhcyBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgTGVhZmxldC5JY29uLkRlZmF1bHQuaW1hZ2VQYXRoID0gXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2ltYWdlcy9cIjtcblxuICBjb25zdCBtYXAgPSBMZWFmbGV0Lm1hcChtYXBFbGVtZW50KTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvbGVhZmxldC5jc3NcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gIG1hcEVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIG1hcC5zZXRWaWV3KFs1Mi4zNzMxMzM5LCA0Ljg5MDMxNDddLCAxMyk7XG4gIGNyZWF0ZVRpbGVMYXllcihMZWFmbGV0LCBkYXJrTW9kZSkuYWRkVG8obWFwKTtcblxuICByZXR1cm4gW21hcCwgTGVhZmxldF07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGlsZUxheWVyID0gKFxuICBsZWFmbGV0OiBMZWFmbGV0TW9kdWxlVHlwZSxcbiAgZGFya01vZGU6IGJvb2xlYW5cbikgPT4ge1xuICByZXR1cm4gbGVhZmxldC50aWxlTGF5ZXIoXG4gICAgYGh0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS8ke1xuICAgICAgZGFya01vZGUgPyBcImRhcmtfYWxsXCIgOiBcImxpZ2h0X2FsbFwiXG4gICAgfS97en0ve3h9L3t5fSR7bGVhZmxldC5Ccm93c2VyLnJldGluYSA/IFwiQDJ4LnBuZ1wiIDogXCIucG5nXCJ9YCxcbiAgICB7XG4gICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4sICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9jYXJ0by5jb20vYXR0cmlidXRpb25zXCI+Q0FSVE88L2E+JyxcbiAgICAgIHN1YmRvbWFpbnM6IFwiYWJjZFwiLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDIwLFxuICAgIH1cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uICYmICF3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm1hdGlvbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRydWU7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgIHNlcnZpY2U6IHRoaXMuc2VydmljZSxcbiAgICAgIHNlcnZpY2VEYXRhOiB0aGlzLnNlcnZpY2VEYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlLCB0aGlzLnNlcnZpY2VEYXRhKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuZmlyZShcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgZXZlbnREYXRhKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE1hcmtlciwgTWFwLCBMZWFmbGV0TW91c2VFdmVudCwgRHJhZ0VuZEV2ZW50LCBMYXRMbmcgfSBmcm9tIFwibGVhZmxldFwiO1xuaW1wb3J0IHtcbiAgc2V0dXBMZWFmbGV0TWFwLFxuICBMZWFmbGV0TW9kdWxlVHlwZSxcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXBcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1sb2NhdGlvbi1lZGl0b3JcIilcbmNsYXNzIExvY2F0aW9uRWRpdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb2NhdGlvbj86IFtudW1iZXIsIG51bWJlcl07XG4gIHB1YmxpYyBmaXRab29tID0gMTY7XG5cbiAgcHJpdmF0ZSBfaWdub3JlRml0VG9NYXA/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBwcml2YXRlIExlYWZsZXQ/OiBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgcHJpdmF0ZSBfbGVhZmxldE1hcD86IE1hcDtcbiAgcHJpdmF0ZSBfbG9jYXRpb25NYXJrZXI/OiBNYXJrZXI7XG5cbiAgcHVibGljIGZpdE1hcCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2xlYWZsZXRNYXAgfHwgIXRoaXMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbGVhZmxldE1hcC5zZXRWaWV3KHRoaXMubG9jYXRpb24sIHRoaXMuZml0Wm9vbSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2luaXRNYXAoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG5cbiAgICAvLyBTdGlsbCBsb2FkaW5nLlxuICAgIGlmICghdGhpcy5MZWFmbGV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgaWYgKCF0aGlzLl9pZ25vcmVGaXRUb01hcCB8fCB0aGlzLl9pZ25vcmVGaXRUb01hcCAhPT0gdGhpcy5sb2NhdGlvbikge1xuICAgICAgdGhpcy5maXRNYXAoKTtcbiAgICB9XG4gICAgdGhpcy5faWdub3JlRml0VG9NYXAgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbWFwRWwoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaW5pdE1hcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBbdGhpcy5fbGVhZmxldE1hcCwgdGhpcy5MZWFmbGV0XSA9IGF3YWl0IHNldHVwTGVhZmxldE1hcCh0aGlzLl9tYXBFbCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgKGV2OiBMZWFmbGV0TW91c2VFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYubGF0bG5nKVxuICAgICk7XG4gICAgdGhpcy5fdXBkYXRlTWFya2VyKCk7XG4gICAgdGhpcy5maXRNYXAoKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwLmludmFsaWRhdGVTaXplKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVMb2NhdGlvbihsYXRsbmc6IExhdExuZykge1xuICAgIGxldCBsb25naXR1ZGUgPSBsYXRsbmcubG5nO1xuICAgIGlmIChNYXRoLmFicyhsb25naXR1ZGUpID4gMTgwLjApIHtcbiAgICAgIC8vIE5vcm1hbGl6ZSBsb25naXR1ZGUgaWYgbWFwIHByb3ZpZGVzIHZhbHVlcyBiZXlvbmQgLTE4MCB0byArMTgwIGRlZ3JlZXMuXG4gICAgICBsb25naXR1ZGUgPSAoKChsb25naXR1ZGUgJSAzNjAuMCkgKyA1NDAuMCkgJSAzNjAuMCkgLSAxODAuMDtcbiAgICB9XG4gICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuX2lnbm9yZUZpdFRvTWFwID0gW2xhdGxuZy5sYXQsIGxvbmdpdHVkZV07XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIsIHVuZGVmaW5lZCwgeyBidWJibGVzOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZU1hcmtlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubG9jYXRpb24pIHtcbiAgICAgIGlmICh0aGlzLl9sb2NhdGlvbk1hcmtlcikge1xuICAgICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlci5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fbG9jYXRpb25NYXJrZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xvY2F0aW9uTWFya2VyKSB7XG4gICAgICB0aGlzLl9sb2NhdGlvbk1hcmtlci5zZXRMYXRMbmcodGhpcy5sb2NhdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyID0gdGhpcy5MZWFmbGV0IS5tYXJrZXIodGhpcy5sb2NhdGlvbiwge1xuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRyYWdlbmRcIixcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChldjogRHJhZ0VuZEV2ZW50KSA9PiB0aGlzLl91cGRhdGVMb2NhdGlvbihldi50YXJnZXQuZ2V0TGF0TG5nKCkpXG4gICAgKTtcbiAgICB0aGlzLl9sZWFmbGV0TWFwIS5hZGRMYXllcih0aGlzLl9sb2NhdGlvbk1hcmtlcik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgfVxuICAgICAgI21hcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1sb2NhdGlvbi1lZGl0b3JcIjogTG9jYXRpb25FZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB0aW1lem9uZXMgZnJvbSBcImdvb2dsZS10aW1lem9uZXMtanNvblwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGltZXpvbmVMaXN0RWwgPSAoKSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YWxpc3RcIik7XG4gIGxpc3QuaWQgPSBcInRpbWV6b25lc1wiO1xuICBPYmplY3Qua2V5cyh0aW1lem9uZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0ga2V5O1xuICAgIG9wdGlvbi5pbm5lckhUTUwgPSB0aW1lem9uZXNba2V5XTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuICByZXR1cm4gbGlzdDtcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzQ29uZmlnIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1VwZGF0ZVZhbHVlcyB7XG4gIGxvY2F0aW9uX25hbWU6IHN0cmluZztcbiAgbGF0aXR1ZGU6IG51bWJlcjtcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XG4gIGVsZXZhdGlvbjogbnVtYmVyO1xuICB1bml0X3N5c3RlbTogXCJtZXRyaWNcIiB8IFwiaW1wZXJpYWxcIjtcbiAgdGltZV96b25lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29yZUNvbmZpZyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBQYXJ0aWFsPENvbmZpZ1VwZGF0ZVZhbHVlcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8SGFzc0NvbmZpZz4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2NvcmUvdXBkYXRlXCIsXG4gICAgLi4udmFsdWVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRldGVjdENvcmVDb25maWcgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8UGFydGlhbDxDb25maWdVcGRhdGVWYWx1ZXM+Pih7XG4gICAgdHlwZTogXCJjb25maWcvY29yZS9kZXRlY3RcIixcbiAgfSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IFVOSVRfQyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uc3RcIjtcbmltcG9ydCB7IENvbmZpZ1VwZGF0ZVZhbHVlcywgc2F2ZUNvcmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb3JlXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lem9uZUxpc3RFbCB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3RpbWV6b25lLWRhdGFsaXN0XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL21hcC9oYS1sb2NhdGlvbi1lZGl0b3JcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb25maWctY29yZS1mb3JtXCIpXG5jbGFzcyBDb25maWdDb3JlRm9ybSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd29ya2luZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvY2F0aW9uITogW251bWJlciwgbnVtYmVyXTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbGV2YXRpb24hOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3VuaXRTeXN0ZW0hOiBDb25maWdVcGRhdGVWYWx1ZXNbXCJ1bml0X3N5c3RlbVwiXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdGltZVpvbmUhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGNhbkVkaXQgPSBbXCJzdG9yYWdlXCIsIFwiZGVmYXVsdFwiXS5pbmNsdWRlcyhcbiAgICAgIHRoaXMuaGFzcy5jb25maWcuY29uZmlnX3NvdXJjZVxuICAgICk7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLl93b3JraW5nIHx8ICFjYW5FZGl0O1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmZvcm0uaGVhZGluZ1wiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAkeyFjYW5FZGl0XG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuZWRpdF9yZXF1aXJlc19zdG9yYWdlXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8aGEtbG9jYXRpb24tZWRpdG9yXG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIC5sb2NhdGlvbj0ke3RoaXMuX2xvY2F0aW9uVmFsdWV9XG4gICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9sb2NhdGlvbkNoYW5nZWR9XG4gICAgICAgICAgICA+PC9oYS1sb2NhdGlvbi1lZGl0b3I+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy50aW1lX3pvbmVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcudGltZV96b25lXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbmFtZT1cInRpbWVab25lXCJcbiAgICAgICAgICAgICAgbGlzdD1cInRpbWV6b25lc1wiXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke2Rpc2FibGVkfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl90aW1lWm9uZVZhbHVlfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVsZXZhdGlvblwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5lbGV2YXRpb25cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICBuYW1lPVwiZWxldmF0aW9uXCJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0ke2Rpc2FibGVkfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9lbGV2YXRpb25WYWx1ZX1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIHNsb3Q9XCJzdWZmaXhcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVsZXZhdGlvbl9tZXRlcnNcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy51bml0X3N5c3RlbVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl91bml0U3lzdGVtVmFsdWV9XG4gICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5fdW5pdFN5c3RlbUNoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1ldHJpY1wiIC5kaXNhYmxlZD0ke2Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLnVuaXRfc3lzdGVtX21ldHJpY1wiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcubWV0cmljX2V4YW1wbGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cImltcGVyaWFsXCIgLmRpc2FibGVkPSR7ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcudW5pdF9zeXN0ZW1faW1wZXJpYWxcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmltcGVyaWFsX2V4YW1wbGVcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX3NhdmV9IC5kaXNhYmxlZD0ke2Rpc2FibGVkfT5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5zYXZlX2J1dHRvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIltuYW1lPXRpbWVab25lXVwiXG4gICAgKSBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICBpbnB1dC5pbnB1dEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGltZXpvbmVMaXN0RWwoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbG9jYXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb24gIT09IHVuZGVmaW5lZFxuICAgICAgPyB0aGlzLl9sb2NhdGlvblxuICAgICAgOiBbTnVtYmVyKHRoaXMuaGFzcy5jb25maWcubGF0aXR1ZGUpLCBOdW1iZXIodGhpcy5oYXNzLmNvbmZpZy5sb25naXR1ZGUpXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9lbGV2YXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxldmF0aW9uICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fZWxldmF0aW9uXG4gICAgICA6IHRoaXMuaGFzcy5jb25maWcuZWxldmF0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RpbWVab25lVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpbWVab25lICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fdGltZVpvbmVcbiAgICAgIDogdGhpcy5oYXNzLmNvbmZpZy50aW1lX3pvbmU7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdW5pdFN5c3RlbVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl91bml0U3lzdGVtICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fdW5pdFN5c3RlbVxuICAgICAgOiB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlID09PSBVTklUX0NcbiAgICAgID8gXCJtZXRyaWNcIlxuICAgICAgOiBcImltcGVyaWFsXCI7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpc1tgXyR7dGFyZ2V0Lm5hbWV9YF0gPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9sb2NhdGlvbkNoYW5nZWQoZXYpIHtcbiAgICB0aGlzLl9sb2NhdGlvbiA9IGV2LmN1cnJlbnRUYXJnZXQubG9jYXRpb247XG4gIH1cblxuICBwcml2YXRlIF91bml0U3lzdGVtQ2hhbmdlZChcbiAgICBldjogUG9seW1lckNoYW5nZWRFdmVudDxDb25maWdVcGRhdGVWYWx1ZXNbXCJ1bml0X3N5c3RlbVwiXT5cbiAgKSB7XG4gICAgdGhpcy5fdW5pdFN5c3RlbSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoKSB7XG4gICAgdGhpcy5fd29ya2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5fbG9jYXRpb25WYWx1ZTtcbiAgICAgIGF3YWl0IHNhdmVDb3JlQ29uZmlnKHRoaXMuaGFzcywge1xuICAgICAgICBsYXRpdHVkZTogbG9jYXRpb25bMF0sXG4gICAgICAgIGxvbmdpdHVkZTogbG9jYXRpb25bMV0sXG4gICAgICAgIGVsZXZhdGlvbjogTnVtYmVyKHRoaXMuX2VsZXZhdGlvblZhbHVlKSxcbiAgICAgICAgdW5pdF9zeXN0ZW06IHRoaXMuX3VuaXRTeXN0ZW1WYWx1ZSxcbiAgICAgICAgdGltZV96b25lOiB0aGlzLl90aW1lWm9uZVZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcIkZBSUxcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3dvcmtpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAucm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luOiAwIC04cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnkge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuZmxleCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5yb3cgPiAqIHtcbiAgICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctY29yZS1mb3JtXCI6IENvbmZpZ0NvcmVGb3JtO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9oYS1jb25maWctc2VjdGlvbi1jb3JlXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ0NvcmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9yZGVyIHtcbiAgICAgICAgICBtYXJnaW46IDMycHggYXV0byAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgIG1heC13aWR0aDogMTA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdyAuYm9yZGVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGFzcy1zdWJwYWdlIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jb3JlLmNhcHRpb24nKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24tY29yZVxuICAgICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgICAgc2hvdy1hZHZhbmNlZD1cIltbc2hvd0FkdmFuY2VkXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICA+PC9oYS1jb25maWctc2VjdGlvbi1jb3JlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgcmV0dXJuIGlzV2lkZSA/IFwiY29udGVudFwiIDogXCJjb250ZW50IG5hcnJvd1wiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1jb3JlXCIsIEhhQ29uZmlnQ29yZSk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWdyb3VwL3BhcGVyLXJhZGlvLWdyb3VwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1yYWRpby1idXR0b24vcGFwZXItcmFkaW8tYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IENvbmZpZ1VwZGF0ZVZhbHVlcywgc2F2ZUNvcmVDb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb3JlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtY29uZmlnLW5hbWUtZm9ybVwiKVxuY2xhc3MgQ29uZmlnTmFtZUZvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dvcmtpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uYW1lITogQ29uZmlnVXBkYXRlVmFsdWVzW1wibG9jYXRpb25fbmFtZVwiXTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgY2FuRWRpdCA9IFtcInN0b3JhZ2VcIiwgXCJkZWZhdWx0XCJdLmluY2x1ZGVzKFxuICAgICAgdGhpcy5oYXNzLmNvbmZpZy5jb25maWdfc291cmNlXG4gICAgKTtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuX3dvcmtpbmcgfHwgIWNhbkVkaXQ7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHshY2FuRWRpdFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNvcmUuc2VjdGlvbi5jb3JlLmNvcmVfY29uZmlnLmVkaXRfcmVxdWlyZXNfc3RvcmFnZVwiXG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcubG9jYXRpb25fbmFtZVwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgLmRpc2FibGVkPSR7ZGlzYWJsZWR9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lVmFsdWV9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9zYXZlfSAuZGlzYWJsZWQ9JHtkaXNhYmxlZH0+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuc2F2ZV9idXR0b25cIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbmFtZVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9uYW1lICE9PSB1bmRlZmluZWRcbiAgICAgID8gdGhpcy5fbmFtZVxuICAgICAgOiB0aGlzLmhhc3MuY29uZmlnLmxvY2F0aW9uX25hbWU7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVDaGFuZ2UoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdGhpc1tgXyR7dGFyZ2V0Lm5hbWV9YF0gPSB0YXJnZXQudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zYXZlKCkge1xuICAgIHRoaXMuX3dvcmtpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzYXZlQ29yZUNvbmZpZyh0aGlzLmhhc3MsIHtcbiAgICAgICAgbG9jYXRpb25fbmFtZTogdGhpcy5fbmFtZVZhbHVlLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcIkZBSUxcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3dvcmtpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNvbmZpZy1uYW1lLWZvcm1cIjogQ29uZmlnTmFtZUZvcm07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5cbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCBcIi4vaGEtY29uZmlnLW5hbWUtZm9ybVwiO1xuaW1wb3J0IFwiLi9oYS1jb25maWctY29yZS1mb3JtXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdTZWN0aW9uQ29yZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC52YWxpZGF0ZS1jb250YWluZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYXRlLXJlc3VsdCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1ncmVlbi01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbmZpZy1pbnZhbGlkIHtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbmZpZy1pbnZhbGlkIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYXRlLWxvZyB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuaGVhZGVyJyldXTwvc3BhblxuICAgICAgICA+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuaW50cm9kdWN0aW9uJyldXTwvc3BhblxuICAgICAgICA+XG5cbiAgICAgICAgPGhhLWNvbmZpZy1uYW1lLWZvcm0gaGFzcz1cIltbaGFzc11dXCI+PC9oYS1jb25maWctbmFtZS1mb3JtPlxuICAgICAgICA8aGEtY29uZmlnLWNvcmUtZm9ybSBoYXNzPVwiW1toYXNzXV1cIj48L2hhLWNvbmZpZy1jb3JlLWZvcm0+XG4gICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkYXRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgaXNWYWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIHZhbGlkYXRlTG9nOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93QWR2YW5jZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGdyb3VwTG9hZGVkKGhhc3MpIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJncm91cFwiKTtcbiAgfVxuXG4gIGF1dG9tYXRpb25Mb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcImF1dG9tYXRpb25cIik7XG4gIH1cblxuICBzY3JpcHRMb2FkZWQoaGFzcykge1xuICAgIHJldHVybiBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcInNjcmlwdFwiKTtcbiAgfVxuXG4gIHZhbGlkYXRlQ29uZmlnKCkge1xuICAgIHRoaXMudmFsaWRhdGluZyA9IHRydWU7XG4gICAgdGhpcy52YWxpZGF0ZUxvZyA9IFwiXCI7XG4gICAgdGhpcy5pc1ZhbGlkID0gbnVsbDtcblxuICAgIHRoaXMuaGFzcy5jYWxsQXBpKFwiUE9TVFwiLCBcImNvbmZpZy9jb3JlL2NoZWNrX2NvbmZpZ1wiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1ZhbGlkID0gcmVzdWx0LnJlc3VsdCA9PT0gXCJ2YWxpZFwiO1xuXG4gICAgICBpZiAoIXRoaXMuaXNWYWxpZCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlTG9nID0gcmVzdWx0LmVycm9ycztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvbi1jb3JlXCIsIEhhQ29uZmlnU2VjdGlvbkNvcmUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2VjdGlvbiBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAyOHB4IDIwcHggMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtZGlzcGxheTE7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmludHJvIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCA6OnNsb3R0ZWQoKikge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAubmFycm93LmNvbnRlbnQge1xuICAgICAgICAgIG1heC13aWR0aDogNjQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAudG9nZXRoZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5hcnJvdyAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmludHJvIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNvbnRlbnRDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc2VzKGlzV2lkZSldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnRyb1wiPjxzbG90IG5hbWU9XCJpbnRyb2R1Y3Rpb25cIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIGZsZXgtYXV0b1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIG5hcnJvdzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgfSxcblxuICAgICAgaXNXaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwiY29udGVudCBcIjtcblxuICAgIHJldHVybiBpc1dpZGUgPyBjbGFzc2VzIDogY2xhc3NlcyArIFwibmFycm93XCI7XG4gIH1cblxuICBjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpIHtcbiAgICB2YXIgY2xhc3NlcyA9IFwidG9nZXRoZXIgbGF5b3V0IFwiO1xuXG4gICAgcmV0dXJuIGNsYXNzZXMgKyAoaXNXaWRlID8gXCJob3Jpem9udGFsXCIgOiBcInZlcnRpY2FsIG5hcnJvd1wiKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctc2VjdGlvblwiLCBIYUNvbmZpZ1NlY3Rpb24pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBU0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQThEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQVdBO0FBSUE7QUFHQTtBQUFBOztBQUVBO0FBdUdBO0FBOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBeEdBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7O0FBR0E7QUEwTkE7QUFsTkE7QUFDQTtBQUdBO0FBRUE7O0FBRUE7OztBQUtBO0FBQ0E7O0FBRUE7O0FBSUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7Ozs7O0FBTUE7Ozs7O0FBT0E7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7Ozs7QUFPQTs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7OztBQVNBOzs7O0FBTUE7QUFDQTs7QUFFQTtBQUNBOztBQUlBOzs7QUFLQTtBQUNBOztBQUlBOzs7Ozs7O0FBU0E7QUFDQTs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUE1TkE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBR0E7QUFBQTs7QUFHQTtBQW1FQTtBQS9EQTtBQUNBO0FBR0E7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFJQTtBQUNBOzs7QUFHQTs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=