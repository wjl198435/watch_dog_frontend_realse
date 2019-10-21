(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-lovelace"],{

/***/ "./src/cast/const.ts":
/*!***************************!*\
  !*** ./src/cast/const.ts ***!
  \***************************/
/*! exports provided: CAST_DEV, CAST_APP_ID, CAST_NS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV", function() { return CAST_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_APP_ID", function() { return CAST_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_NS", function() { return CAST_NS; });
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");

// Guard dev mode with `__dev__` so it can only ever be enabled in dev mode.
const CAST_DEV =  true && true;
const CAST_APP_ID = CAST_DEV ? _dev_const__WEBPACK_IMPORTED_MODULE_0__["CAST_DEV_APP_ID"] : "B12CE3CA";
const CAST_NS = "urn:x-cast:com.nabucasa.hast";


/***/ }),

/***/ "./src/cast/dev_const.ts":
/*!*******************************!*\
  !*** ./src/cast/dev_const.ts ***!
  \*******************************/
/*! exports provided: CAST_DEV_APP_ID, CAST_DEV_HASS_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV_APP_ID", function() { return CAST_DEV_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAST_DEV_HASS_URL", function() { return CAST_DEV_HASS_URL; });
// Replace this with your own unpublished cast app that points at your local dev
const CAST_DEV_APP_ID = "5FE44367";
// Chromecast SDK will only load on localhost and HTTPS
// So during local development we have to send our dev IP address,
// but then run the UI on localhost.
const CAST_DEV_HASS_URL = "http://192.168.1.234:8123";


/***/ }),

/***/ "./src/cast/receiver_messages.ts":
/*!***************************************!*\
  !*** ./src/cast/receiver_messages.ts ***!
  \***************************************/
/*! exports provided: castSendAuth, castSendShowLovelaceView, castSendShowDemo, ensureConnectedCastSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendAuth", function() { return castSendAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendShowLovelaceView", function() { return castSendShowLovelaceView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castSendShowDemo", function() { return castSendShowDemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureConnectedCastSession", function() { return ensureConnectedCastSession; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
// Nessages to be processed inside the Cast Receiver app


const castSendAuth = (cast, auth) => cast.sendMessage({
    type: "connect",
    refreshToken: auth.data.refresh_token,
    clientId: auth.data.clientId,
    hassUrl: _const__WEBPACK_IMPORTED_MODULE_0__["CAST_DEV"] ? _dev_const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV_HASS_URL"] : auth.data.hassUrl,
});
const castSendShowLovelaceView = (cast, viewPath) => cast.sendMessage({
    type: "show_lovelace_view",
    viewPath,
});
const castSendShowDemo = (cast) => cast.sendMessage({
    type: "show_demo",
});
const ensureConnectedCastSession = (cast, auth) => {
    if (cast.castConnectedToOurHass) {
        return;
    }
    return new Promise((resolve) => {
        const unsub = cast.addEventListener("connection-changed", () => {
            if (cast.castConnectedToOurHass) {
                unsub();
                resolve();
            }
        });
        castSendAuth(cast, auth);
    });
};


/***/ }),

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
const _load = (tag, url, type) => {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise((resolve, reject) => {
        const element = document.createElement(tag);
        let attr = "src";
        let parent = "body";
        // Important success and error for the promise
        element.onload = () => resolve(url);
        element.onerror = () => reject(url);
        // Need to set different attributes depending on tag type
        switch (tag) {
            case "script":
                element.async = true;
                if (type) {
                    element.type = type;
                }
                break;
            case "link":
                element.type = "text/css";
                element.rel = "stylesheet";
                attr = "href";
                parent = "head";
        }
        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
    });
};
const loadCSS = (url) => _load("link", url);
const loadJS = (url) => _load("script", url);
const loadImg = (url) => _load("img", url);
const loadModule = (url) => _load("script", url, "module");


/***/ }),

/***/ "./src/common/dom/scroll-to-target.ts":
/*!********************************************!*\
  !*** ./src/common/dom/scroll-to-target.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollToTarget; });
/**
 * Scroll to a specific y coordinate.
 *
 * Copied from paper-scroll-header-panel.
 *
 * @method scroll
 * @param {number} top The coordinate to scroll to, along the y-axis.
 * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
 */
function scrollToTarget(element, target) {
    // the scroll event will trigger _updateScrollState directly,
    // However, _updateScrollState relies on the previous `scrollTop` to update the states.
    // Calling _updateScrollState will ensure that the states are synced correctly.
    const top = 0;
    const scroller = target;
    const easingFn = function easeOutQuad(t, b, c, d) {
        /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
        t /= d;
        return -c * t * (t - 2) + b;
        /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
    };
    const animationId = Math.random();
    const duration = 200;
    const startTime = Date.now();
    const currentScrollTop = scroller.scrollTop;
    const deltaScrollTop = top - currentScrollTop;
    element._currentAnimationId = animationId;
    (function updateFrame() {
        const now = Date.now();
        const elapsedTime = now - startTime;
        if (elapsedTime > duration) {
            scroller.scrollTop = top;
        }
        else if (element._currentAnimationId === animationId) {
            scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
            requestAnimationFrame(updateFrame.bind(element));
        }
    }.call(element));
}


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

/***/ "./src/common/entity/valid_entity_id.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/valid_entity_id.ts ***!
  \**********************************************/
/*! exports provided: isValidEntityId, createValidEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEntityId", function() { return isValidEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidEntityId", function() { return createValidEntityId; });
const validEntityId = /^(\w+)\.(\w+)$/;
const isValidEntityId = (entityId) => validEntityId.test(entityId);
const createValidEntityId = (input) => input
    .toLowerCase()
    .replace(/\s|\'/g, "_") // replace spaces and quotes with underscore
    .replace(/\W/g, "") // remove not allowed chars
    .replace(/_{2,}/g, "_") // replace multiple underscores with 1
    .replace(/_$/, ""); // remove underscores at the end


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

/***/ "./src/common/util/parse-aspect-ratio.ts":
/*!***********************************************!*\
  !*** ./src/common/util/parse-aspect-ratio.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseAspectRatio; });
// Handle 16x9, 16:9, 1.78x1, 1.78:1, 1.78
// Ignore everything else
const parseOrThrow = (num) => {
    const parsed = parseFloat(num);
    if (isNaN(parsed)) {
        throw new Error(`${num} is not a number`);
    }
    return parsed;
};
function parseAspectRatio(input) {
    if (!input) {
        return null;
    }
    try {
        if (input.endsWith("%")) {
            return { w: 100, h: parseOrThrow(input.substr(0, input.length - 1)) };
        }
        const arr = input.replace(":", "x").split("x");
        if (arr.length === 0) {
            return null;
        }
        return arr.length === 1
            ? { w: parseOrThrow(arr[0]), h: 1 }
            : { w: parseOrThrow(arr[0]), h: parseOrThrow(arr[1]) };
    }
    catch (err) {
        // Ignore the error
    }
    return null;
}


/***/ }),

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = (cb) => {
    requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
    return new Promise((resolve) => {
        afterNextRender(resolve);
    });
};


/***/ }),

/***/ "./src/common/util/subscribe-one.ts":
/*!******************************************!*\
  !*** ./src/common/util/subscribe-one.ts ***!
  \******************************************/
/*! exports provided: subscribeOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeOne", function() { return subscribeOne; });
const subscribeOne = async (conn, subscribe) => new Promise((resolve) => {
    const unsub = subscribe(conn, (items) => {
        unsub();
        resolve(items);
    });
});


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

/***/ "./src/components/ha-date-input.ts":
/*!*****************************************!*\
  !*** ./src/components/ha-date-input.ts ***!
  \*****************************************/
/*! exports provided: HaDateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDateInput", function() { return HaDateInput; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");



let HaDateInput = class HaDateInput extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: block;
        font-family: var(--paper-font-common-base_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-common-base_-_-webkit-font-smoothing
        );
      }

      paper-input {
        width: 30px;
        text-align: center;
        --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        --paper-input-container-input_-_-moz-appearance: textfield;
        --paper-input-container-shared-input-style_-_appearance: textfield;
        --paper-input-container-input-webkit-spinner_-_-webkit-appearance: none;
        --paper-input-container-input-webkit-spinner_-_margin: 0;
        --paper-input-container-input-webkit-spinner_-_display: none;
      }

      paper-input#year {
        width: 50px;
      }

      .date-input-wrap {
        display: flex;
        flex-direction: row;
      }
    `;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="date-input-wrap">
        <paper-input
          id="year"
          type="number"
          .value=${this.year}
          @change=${this._formatYear}
          maxlength="4"
          max="9999"
          min="0"
          .disabled=${this.disabled}
          no-label-float
        >
          <span suffix="" slot="suffix">-</span>
        </paper-input>
        <paper-input
          id="month"
          type="number"
          .value=${this.month}
          @change=${this._formatMonth}
          maxlength="2"
          max="12"
          min="1"
          .disabled=${this.disabled}
          no-label-float
        >
          <span suffix="" slot="suffix">-</span>
        </paper-input>
        <paper-input
          id="day"
          type="number"
          .value=${this.day}
          @change=${this._formatDay}
          maxlength="2"
          max="31"
          min="1"
          .disabled=${this.disabled}
          no-label-float
        >
        </paper-input>
      </div>
    `;
    }
    _formatYear() {
        const yearElement = this.shadowRoot.getElementById("year");
        this.year = yearElement.value;
    }
    _formatMonth() {
        const monthElement = this.shadowRoot.getElementById("month");
        this.month = ("0" + monthElement.value).slice(-2);
    }
    _formatDay() {
        const dayElement = this.shadowRoot.getElementById("day");
        this.day = ("0" + dayElement.value).slice(-2);
    }
    get value() {
        return `${this.year}-${this.month}-${this.day}`;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaDateInput.prototype, "year", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaDateInput.prototype, "month", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaDateInput.prototype, "day", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
], HaDateInput.prototype, "disabled", void 0);
HaDateInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-date-input")
], HaDateInput);



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

/***/ "./src/components/ha-paper-icon-button-arrow-next.ts":
/*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-next.ts ***!
  \***********************************************************/
/*! exports provided: HaPaperIconButtonArrowNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonArrowNext", function() { return HaPaperIconButtonArrowNext; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");

const paperIconButtonClass = customElements.get("paper-icon-button");
class HaPaperIconButtonArrowNext extends paperIconButtonClass {
    connectedCallback() {
        super.connectedCallback();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            this.icon =
                window.getComputedStyle(this).direction === "ltr"
                    ? "hass:arrow-right"
                    : "hass:arrow-left";
        }, 100);
    }
}
customElements.define("ha-paper-icon-button-arrow-next", HaPaperIconButtonArrowNext);


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

/***/ "./src/data/alarm_control_panel.ts":
/*!*****************************************!*\
  !*** ./src/data/alarm_control_panel.ts ***!
  \*****************************************/
/*! exports provided: FORMAT_TEXT, FORMAT_NUMBER, callAlarmAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT_TEXT", function() { return FORMAT_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORMAT_NUMBER", function() { return FORMAT_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAlarmAction", function() { return callAlarmAction; });
const FORMAT_TEXT = "text";
const FORMAT_NUMBER = "number";
const callAlarmAction = (hass, entity, action, code) => {
    hass.callService("alarm_control_panel", "alarm_" + action, {
        entity_id: entity,
        code,
    });
};


/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (hass, values) => hass.callWS(Object.assign({ type: "config/area_registry/create" }, values));
const updateAreaRegistryEntry = (hass, areaId, updates) => hass.callWS(Object.assign({ type: "config/area_registry/update", area_id: areaId }, updates));
const deleteAreaRegistryEntry = (hass, areaId) => hass.callWS({
    type: "config/area_registry/delete",
    area_id: areaId,
});
const fetchAreaRegistry = (conn) => conn
    .sendMessagePromise({
    type: "config/area_registry/list",
})
    .then((areas) => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));
const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then((areas) => store.setState(areas, true)), 500, true), "area_registry_updated");
const subscribeAreaRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);


/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");


const updateDeviceRegistryEntry = (hass, deviceId, updates) => hass.callWS(Object.assign({ type: "config/device_registry/update", device_id: deviceId }, updates));
const fetchDeviceRegistry = (conn) => conn.sendMessagePromise({
    type: "config/device_registry/list",
});
const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchDeviceRegistry(conn).then((devices) => store.setState(devices, true)), 500, true), "device_registry_updated");
const subscribeDeviceRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);


/***/ }),

/***/ "./src/data/entity.ts":
/*!****************************!*\
  !*** ./src/data/entity.ts ***!
  \****************************/
/*! exports provided: UNAVAILABLE, ENTITY_COMPONENT_DOMAINS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAVAILABLE", function() { return UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITY_COMPONENT_DOMAINS", function() { return ENTITY_COMPONENT_DOMAINS; });
const UNAVAILABLE = "unavailable";
const ENTITY_COMPONENT_DOMAINS = [
    "air_quality",
    "alarm_control_panel",
    "alert",
    "automation",
    "binary_sensor",
    "calendar",
    "camera",
    "counter",
    "cover",
    "dominos",
    "fan",
    "geo_location",
    "group",
    "history_graph",
    "image_processing",
    "input_boolean",
    "input_datetime",
    "input_number",
    "input_select",
    "input_text",
    "light",
    "lock",
    "mailbox",
    "media_player",
    "person",
    "plant",
    "remember_the_milk",
    "remote",
    "scene",
    "script",
    "sensor",
    "switch",
    "timer",
    "utility_meter",
    "vacuum",
    "weather",
    "wink",
    "zha",
    "zwave",
];


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

/***/ "./src/data/input_datetime.ts":
/*!************************************!*\
  !*** ./src/data/input_datetime.ts ***!
  \************************************/
/*! exports provided: setInputDateTimeValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputDateTimeValue", function() { return setInputDateTimeValue; });
const setInputDateTimeValue = (hass, entityId, time = undefined, date = undefined) => {
    const param = { entity_id: entityId, time, date };
    hass.callService(entityId.split(".", 1)[0], "set_datetime", param);
};


/***/ }),

/***/ "./src/data/input_text.ts":
/*!********************************!*\
  !*** ./src/data/input_text.ts ***!
  \********************************/
/*! exports provided: setValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setValue", function() { return setValue; });
const setValue = (hass, entity, value) => hass.callService(entity.split(".", 1)[0], "set_value", {
    value,
    entity_id: entity,
});


/***/ }),

/***/ "./src/data/light.ts":
/*!***************************!*\
  !*** ./src/data/light.ts ***!
  \***************************/
/*! exports provided: SUPPORT_BRIGHTNESS, SUPPORT_COLOR_TEMP, SUPPORT_EFFECT, SUPPORT_FLASH, SUPPORT_COLOR, SUPPORT_TRANSITION, SUPPORT_WHITE_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_BRIGHTNESS", function() { return SUPPORT_BRIGHTNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_COLOR_TEMP", function() { return SUPPORT_COLOR_TEMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_EFFECT", function() { return SUPPORT_EFFECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_FLASH", function() { return SUPPORT_FLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_COLOR", function() { return SUPPORT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_TRANSITION", function() { return SUPPORT_TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_WHITE_VALUE", function() { return SUPPORT_WHITE_VALUE; });
const SUPPORT_BRIGHTNESS = 1;
const SUPPORT_COLOR_TEMP = 2;
const SUPPORT_EFFECT = 4;
const SUPPORT_FLASH = 8;
const SUPPORT_COLOR = 16;
const SUPPORT_TRANSITION = 32;
const SUPPORT_WHITE_VALUE = 128;


/***/ }),

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchConfig, saveConfig, subscribeLovelaceUpdates, getLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const fetchConfig = (conn, force) => conn.sendMessagePromise({
    type: "lovelace/config",
    force,
});
const saveConfig = (hass, config) => hass.callWS({
    type: "lovelace/config/save",
    config,
});
const subscribeLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");
const getLovelaceCollection = (conn) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", (conn2) => fetchConfig(conn2, false), (_conn, store) => subscribeLovelaceUpdates(conn, () => fetchConfig(conn, false).then((config) => store.setState(config, true))));


/***/ }),

/***/ "./src/data/shopping-list.ts":
/*!***********************************!*\
  !*** ./src/data/shopping-list.ts ***!
  \***********************************/
/*! exports provided: fetchItems, updateItem, clearItems, addItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchItems", function() { return fetchItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearItems", function() { return clearItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
const fetchItems = (hass) => hass.callWS({
    type: "shopping_list/items",
});
const updateItem = (hass, itemId, item) => hass.callWS(Object.assign({ type: "shopping_list/items/update", item_id: itemId }, item));
const clearItems = (hass) => hass.callWS({
    type: "shopping_list/items/clear",
});
const addItem = (hass, name) => hass.callWS({
    type: "shopping_list/items/add",
    name,
});


/***/ }),

/***/ "./src/data/ws-templates.ts":
/*!**********************************!*\
  !*** ./src/data/ws-templates.ts ***!
  \**********************************/
/*! exports provided: subscribeRenderTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeRenderTemplate", function() { return subscribeRenderTemplate; });
const subscribeRenderTemplate = (conn, onChange, params) => {
    return conn.subscribeMessage((msg) => onChange(msg.result), Object.assign({ type: "render_template" }, params));
};


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-alarm-panel-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-alarm-panel-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_label_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-label-badge */ "./src/components/ha-label-badge.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/alarm_control_panel */ "./src/data/alarm_control_panel.ts");







const ICONS = {
    armed_away: "hass:shield-lock",
    armed_custom_bypass: "hass:security",
    armed_home: "hass:shield-home",
    armed_night: "hass:shield-home",
    disarmed: "hass:shield-check",
    pending: "hass:shield-outline",
    triggered: "hass:bell-ring",
};
const BUTTONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "clear"];
let HuiAlarmPanelCard = class HuiAlarmPanelCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-alarm-panel-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-alarm-panel-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-alarm-panel-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-alarm-panel-card-editor.ts"));
        return document.createElement("hui-alarm-panel-card-editor");
    }
    static getStubConfig() {
        return { states: ["arm_home", "arm_away"], entity: "" };
    }
    getCardSize() {
        if (!this._config || !this.hass) {
            return 0;
        }
        const stateObj = this.hass.states[this._config.entity];
        return !stateObj || stateObj.attributes.code_format !== _data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__["FORMAT_NUMBER"]
            ? 3
            : 8;
    }
    setConfig(config) {
        if (!config ||
            !config.entity ||
            config.entity.split(".")[0] !== "alarm_control_panel") {
            throw new Error("Invalid card configuration");
        }
        const defaults = {
            states: ["arm_away", "arm_home"],
        };
        this._config = Object.assign(Object.assign({}, defaults), config);
        this._code = "";
    }
    shouldUpdate(changedProps) {
        if (changedProps.has("_config") || changedProps.has("_code")) {
            return true;
        }
        const oldHass = changedProps.get("hass");
        if (oldHass) {
            return (oldHass.states[this._config.entity] !==
                this.hass.states[this._config.entity]);
        }
        return true;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        .header="${this._config.name ||
            stateObj.attributes.friendly_name ||
            this._label(stateObj.state)}"
      >
        <ha-label-badge
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ [stateObj.state]: true })}"
          .icon="${ICONS[stateObj.state] || "hass:shield-outline"}"
          .label="${this._stateIconLabel(stateObj.state)}"
        ></ha-label-badge>
        <div id="armActions" class="actions">
          ${(stateObj.state === "disarmed"
            ? this._config.states
            : ["disarm"]).map((state) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button
                .action="${state}"
                @click="${this._handleActionClick}"
                outlined
              >
                ${this._label(state)}
              </mwc-button>
            `;
        })}
        </div>
        ${!stateObj.attributes.code_format
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-input
                id="alarmCode"
                label="Alarm Code"
                type="password"
                .value="${this._code}"
              ></paper-input>
            `}
        ${stateObj.attributes.code_format !== _data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__["FORMAT_NUMBER"]
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div id="keypad">
                ${BUTTONS.map((value) => {
                return value === ""
                    ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                        <mwc-button disabled></mwc-button>
                      `
                    : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                        <mwc-button
                          .value="${value}"
                          @click="${this._handlePadClick}"
                          dense
                        >
                          ${value === "clear"
                        ? this._label("clear_code")
                        : value}
                        </mwc-button>
                      `;
            })}
              </div>
            `}
      </ha-card>
    `;
    }
    _stateIconLabel(state) {
        const stateLabel = state.split("_").pop();
        return stateLabel === "disarmed" ||
            stateLabel === "triggered" ||
            !stateLabel
            ? ""
            : stateLabel;
    }
    _label(state) {
        return (this.hass.localize(`state.alarm_control_panel.${state}`) ||
            this.hass.localize(`ui.card.alarm_control_panel.${state}`));
    }
    _handlePadClick(e) {
        const val = e.currentTarget.value;
        this._code = val === "clear" ? "" : this._code + val;
    }
    _handleActionClick(e) {
        const input = this.shadowRoot.querySelector("#alarmCode");
        const code = this._code ||
            (input && input.value && input.value.length > 0 ? input.value : "");
        Object(_data_alarm_control_panel__WEBPACK_IMPORTED_MODULE_6__["callAlarmAction"])(this.hass, this._config.entity, e.currentTarget.action, code);
        this._code = "";
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        padding-bottom: 16px;
        position: relative;
        --alarm-color-disarmed: var(--label-badge-green);
        --alarm-color-pending: var(--label-badge-yellow);
        --alarm-color-triggered: var(--label-badge-red);
        --alarm-color-armed: var(--label-badge-red);
        --alarm-color-autoarm: rgba(0, 153, 255, 0.1);
        --alarm-state-color: var(--alarm-color-armed);
        --base-unit: 15px;
        font-size: calc(var(--base-unit));
      }

      ha-label-badge {
        --ha-label-badge-color: var(--alarm-state-color);
        --label-badge-text-color: var(--alarm-state-color);
        --label-badge-background-color: var(--paper-card-background-color);
        color: var(--alarm-state-color);
        position: absolute;
        right: 12px;
        top: 12px;
      }

      .disarmed {
        --alarm-state-color: var(--alarm-color-disarmed);
      }

      .triggered {
        --alarm-state-color: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }

      .arming {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }

      .pending {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }

      @keyframes pulse {
        0% {
          --ha-label-badge-color: var(--alarm-state-color);
        }
        100% {
          --ha-label-badge-color: rgba(255, 153, 0, 0.3);
        }
      }

      paper-input {
        margin: 0 auto 8px;
        max-width: 150px;
        font-size: calc(var(--base-unit));
        text-align: center;
      }

      .state {
        margin-left: 16px;
        font-size: calc(var(--base-unit) * 0.9);
        position: relative;
        bottom: 16px;
        color: var(--alarm-state-color);
        animation: none;
      }

      #keypad {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: auto;
        width: 300px;
      }

      #keypad mwc-button {
        margin-bottom: 5%;
        width: 30%;
        padding: calc(var(--base-unit));
        font-size: calc(var(--base-unit) * 1.1);
        box-sizing: border-box;
      }

      .actions {
        margin: 0 8px;
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-size: calc(var(--base-unit) * 1);
      }

      .actions mwc-button {
        min-width: calc(var(--base-unit) * 9);
        margin: 0 4px 4px;
      }

      mwc-button#disarm {
        color: var(--google-red-500);
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiAlarmPanelCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiAlarmPanelCard.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiAlarmPanelCard.prototype, "_code", void 0);
HuiAlarmPanelCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-alarm-panel-card")
], HuiAlarmPanelCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-conditional-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-conditional-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lovelace/common/validate-condition */ "./src/panels/lovelace/common/validate-condition.ts");



class HuiConditionalCard extends HTMLElement {
    setConfig(config) {
        if (!config.card ||
            !config.conditions ||
            !Array.isArray(config.conditions) ||
            !Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_2__["validateConditionalConfig"])(config.conditions)) {
            throw new Error("Error in card configuration.");
        }
        if (this._card && this._card.parentElement) {
            this.removeChild(this._card);
        }
        this._config = config;
        this._card = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_0__["createCardElement"])(config.card);
        this.update();
    }
    set hass(hass) {
        this._hass = hass;
        this.update();
    }
    getCardSize() {
        return Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__["computeCardSize"])(this._card);
    }
    update() {
        if (!this._card || !this._hass) {
            return;
        }
        const visible = this._config && Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_2__["checkConditionsMet"])(this._config.conditions, this._hass);
        if (visible) {
            this._card.hass = this._hass;
            if (!this._card.parentElement) {
                this.appendChild(this._card);
            }
        }
        else if (this._card.parentElement) {
            this.removeChild(this._card);
        }
        // This will hide the complete card so it won't get styled by parent
        this.style.setProperty("display", visible ? "" : "none");
    }
}
customElements.define("hui-conditional-card", HuiConditionalCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-entities-card.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entities-card.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_entities_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-entities-toggle */ "./src/panels/lovelace/components/hui-entities-toggle.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_create_row_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/create-row-element */ "./src/panels/lovelace/common/create-row-element.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");










let HuiEntitiesCard = class HuiEntitiesCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-entities-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-entities-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-entities-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-entities-card-editor.ts"));
        return document.createElement("hui-entities-card-editor");
    }
    static getStubConfig() {
        return { entities: [] };
    }
    set hass(hass) {
        this._hass = hass;
        this.shadowRoot.querySelectorAll("#states > div > *").forEach((element) => {
            element.hass = hass;
        });
        const entitiesToggle = this.shadowRoot.querySelector("hui-entities-toggle");
        if (entitiesToggle) {
            entitiesToggle.hass = hass;
        }
    }
    getCardSize() {
        if (!this._config) {
            return 0;
        }
        // +1 for the header
        return (this._config.title ? 1 : 0) + this._config.entities.length;
    }
    setConfig(config) {
        const entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_6__["processConfigEntities"])(config.entities);
        this._config = Object.assign({ theme: "default" }, config);
        this._configEntities = entities;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (this._hass && this._config) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_9__["default"])(this, this._hass.themes, this._config.theme);
        }
    }
    render() {
        if (!this._config || !this._hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const { show_header_toggle, title } = this._config;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card>
        ${!title && !show_header_toggle
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="card-header">
                <div class="name">${title}</div>
                ${show_header_toggle === false
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``
                : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <hui-entities-toggle
                        .hass="${this._hass}"
                        .entities="${this._configEntities.map((conf) => conf.entity)}"
                      ></hui-entities-toggle>
                    `}
              </div>
            `}
        <div id="states" class="card-content">
          ${this._configEntities.map((entityConf) => this.renderEntity(entityConf))}
        </div>
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .card-header {
        display: flex;
        justify-content: space-between;
      }

      .card-header .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-header hui-entities-toggle {
        margin: -4px 0;
      }

      #states > * {
        margin: 8px 0;
      }

      #states > div > * {
        overflow: hidden;
      }

      .state-card-dialog {
        cursor: pointer;
      }
    `;
    }
    renderEntity(entityConf) {
        const element = Object(_common_create_row_element__WEBPACK_IMPORTED_MODULE_7__["createRowElement"])(entityConf);
        if (this._hass) {
            element.hass = this._hass;
        }
        if (entityConf.entity &&
            !_common_const__WEBPACK_IMPORTED_MODULE_5__["DOMAINS_HIDE_MORE_INFO"].includes(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_8__["computeDomain"])(entityConf.entity))) {
            element.classList.add("state-card-dialog");
            element.addEventListener("click", () => this._handleClick(entityConf));
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div>${element}</div>
    `;
    }
    _handleClick(entityConf) {
        const entityId = entityConf.entity;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", { entityId });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntitiesCard.prototype, "_config", void 0);
HuiEntitiesCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entities-card")
], HuiEntitiesCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-entity-button-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entity-button-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");















let HuiEntityButtonCard = class HuiEntityButtonCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-entity-button-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-entity-button-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-entity-button-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-entity-button-card-editor.ts"));
        return document.createElement("hui-entity-button-card-editor");
    }
    static getStubConfig() {
        return {
            tap_action: { action: "toggle" },
            hold_action: { action: "more-info" },
            show_icon: true,
            show_name: true,
        };
    }
    getCardSize() {
        return 2;
    }
    setConfig(config) {
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_6__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid Entity");
        }
        this._config = Object.assign({ theme: "default", hold_action: { action: "more-info" }, show_icon: true, show_name: true }, config);
        if (_common_const__WEBPACK_IMPORTED_MODULE_14__["DOMAINS_TOGGLE"].has(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_11__["computeDomain"])(config.entity))) {
            this._config = Object.assign({ tap_action: {
                    action: "toggle",
                } }, this._config);
        }
        else {
            this._config = Object.assign({ tap_action: {
                    action: "more-info",
                } }, this._config);
        }
    }
    shouldUpdate(changedProps) {
        if (changedProps.has("_config")) {
            return true;
        }
        const oldHass = changedProps.get("hass");
        if (oldHass) {
            return (oldHass.states[this._config.entity] !==
                this.hass.states[this._config.entity]);
        }
        return true;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__["longPress"])()}"
      >
        ${this._config.show_icon
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-icon
                data-domain="${Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(stateObj)}"
                data-state="${stateObj.state}"
                .icon="${this._config.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__["stateIcon"])(stateObj)}"
                style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
                filter: this._computeBrightness(stateObj),
                color: this._computeColor(stateObj),
                height: this._config.icon_height
                    ? this._config.icon_height
                    : "auto",
            })}"
              ></ha-icon>
            `
            : ""}
        ${this._config.show_name
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <span>
                ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(stateObj)}
              </span>
            `
            : ""}
        <mwc-ripple></mwc-ripple>
      </ha-card>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        const oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_10__["default"])(this, this.hass.themes, this._config.theme);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 4% 0;
        font-size: 1.2rem;
      }

      ha-icon {
        width: 40%;
        height: auto;
        color: var(--paper-item-icon-color, #44739e);
      }

      ha-icon[data-domain="light"][data-state="on"],
      ha-icon[data-domain="switch"][data-state="on"],
      ha-icon[data-domain="binary_sensor"][data-state="on"],
      ha-icon[data-domain="fan"][data-state="on"],
      ha-icon[data-domain="sun"][data-state="above_horizon"] {
        color: var(--paper-item-icon-active-color, #fdd835);
      }

      ha-icon[data-state="unavailable"] {
        color: var(--state-icon-unavailable-color);
      }
    `;
    }
    _computeBrightness(stateObj) {
        if (!stateObj.attributes.brightness) {
            return "";
        }
        const brightness = stateObj.attributes.brightness;
        return `brightness(${(brightness + 245) / 5}%)`;
    }
    _computeColor(stateObj) {
        if (!stateObj.attributes.hs_color) {
            return "";
        }
        const [hue, sat] = stateObj.attributes.hs_color;
        if (sat <= 10) {
            return "";
        }
        return `hsl(${hue}, 100%, ${100 - sat / 2}%)`;
    }
    _handleTap() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, this._config, true);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntityButtonCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntityButtonCard.prototype, "_config", void 0);
HuiEntityButtonCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entity-button-card")
], HuiEntityButtonCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-entity-filter-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-entity-filter-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_evaluate_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/evaluate-filter */ "./src/panels/lovelace/common/evaluate-filter.ts");



class EntityFilterCard extends HTMLElement {
    getCardSize() {
        return this._element ? this._element.getCardSize() : 1;
    }
    setConfig(config) {
        if (!config.entities || !Array.isArray(config.entities)) {
            throw new Error("entities must be specified.");
        }
        if (!(config.state_filter && Array.isArray(config.state_filter)) &&
            !config.entities.every((entity) => typeof entity === "object" &&
                entity.state_filter &&
                Array.isArray(entity.state_filter))) {
            throw new Error("Incorrect filter config.");
        }
        this._config = config;
        this._configEntities = undefined;
        this._baseCardConfig = Object.assign({ type: "entities", entities: [] }, this._config.card);
        if (this.lastChild) {
            this.removeChild(this.lastChild);
            this._element = undefined;
        }
    }
    set hass(hass) {
        if (!hass || !this._config) {
            return;
        }
        if (!this.haveEntitiesChanged(hass)) {
            this._hass = hass;
            return;
        }
        this._hass = hass;
        if (!this._configEntities) {
            this._configEntities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_1__["processConfigEntities"])(this._config.entities);
        }
        const entitiesList = this._configEntities.filter((entityConf) => {
            const stateObj = hass.states[entityConf.entity];
            if (!stateObj) {
                return false;
            }
            if (entityConf.state_filter) {
                for (const filter of entityConf.state_filter) {
                    if (Object(_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_2__["evaluateFilter"])(stateObj, filter)) {
                        return true;
                    }
                }
            }
            else {
                for (const filter of this._config.state_filter) {
                    if (Object(_common_evaluate_filter__WEBPACK_IMPORTED_MODULE_2__["evaluateFilter"])(stateObj, filter)) {
                        return true;
                    }
                }
            }
            return false;
        });
        if (entitiesList.length === 0 && this._config.show_empty === false) {
            this.style.display = "none";
            return;
        }
        const element = this._cardElement();
        if (!element) {
            return;
        }
        if (element.tagName !== "HUI-ERROR-CARD") {
            const isSame = this._oldEntities &&
                entitiesList.length === this._oldEntities.length &&
                entitiesList.every((entity, idx) => entity === this._oldEntities[idx]);
            if (!isSame) {
                this._oldEntities = entitiesList;
                element.setConfig(Object.assign(Object.assign({}, this._baseCardConfig), { entities: entitiesList }));
            }
            element.isPanel = this.isPanel;
            element.hass = hass;
        }
        // Attach element if it has never been attached.
        if (!this.lastChild) {
            this.appendChild(element);
        }
        this.style.display = "block";
    }
    haveEntitiesChanged(hass) {
        if (!this._hass) {
            return true;
        }
        if (!this._configEntities) {
            return true;
        }
        for (const config of this._configEntities) {
            if (this._hass.states[config.entity] !== hass.states[config.entity] ||
                this._hass.localize !== hass.localize) {
                return true;
            }
        }
        return false;
    }
    _cardElement() {
        if (!this._element && this._config) {
            const element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_0__["createCardElement"])(this._baseCardConfig);
            this._element = element;
        }
        return this._element;
    }
}
customElements.define("hui-entity-filter-card", EntityFilterCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-error-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-error-card.ts ***!
  \*****************************************************/
/*! exports provided: createErrorCardElement, createErrorCardConfig, HuiErrorCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorCardElement", function() { return createErrorCardElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createErrorCardConfig", function() { return createErrorCardConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiErrorCard", function() { return HuiErrorCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


const createErrorCardElement = (config) => {
    const el = document.createElement("hui-error-card");
    el.setConfig(config);
    return el;
};
const createErrorCardConfig = (error, origConfig) => ({
    type: "error",
    error,
    origConfig,
});
let HuiErrorCard = class HuiErrorCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    getCardSize() {
        return 4;
    }
    setConfig(config) {
        this._config = config;
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this._config.error}
      <pre>${this._toStr(this._config.origConfig)}</pre>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: block;
        background-color: #ef5350;
        color: white;
        padding: 8px;
        font-weight: 500;
        user-select: text;
        cursor: default;
      }
    `;
    }
    _toStr(config) {
        return JSON.stringify(config, null, 2);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiErrorCard.prototype, "_config", void 0);
HuiErrorCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-error-card")
], HuiErrorCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-gauge-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-gauge-card.ts ***!
  \*****************************************************/
/*! exports provided: severityMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "severityMap", function() { return severityMap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");










const severityMap = {
    red: "var(--label-badge-red)",
    green: "var(--label-badge-green)",
    yellow: "var(--label-badge-yellow)",
    normal: "var(--label-badge-blue)",
};
let HuiGaugeCard = class HuiGaugeCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._baseUnit = "50px";
    }
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-gauge-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-gauge-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-gauge-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-gauge-card-editor.ts"));
        return document.createElement("hui-gauge-card-editor");
    }
    static getStubConfig() {
        return { entity: "" };
    }
    getCardSize() {
        return 2;
    }
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error("Invalid card configuration");
        }
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_5__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid Entity");
        }
        this._config = Object.assign({ min: 0, max: 100, theme: "default" }, config);
    }
    connectedCallback() {
        super.connectedCallback();
        this._setBaseUnit();
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        const state = Number(stateObj.state);
        if (isNaN(state)) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_non_numeric", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        @click="${this._handleClick}"
        style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
            "--base-unit": this._baseUnit,
        })}
      >
        <div class="container">
          <div class="gauge-a"></div>
          <div class="gauge-b"></div>
          <div
            class="gauge-c"
            style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_2__["styleMap"])({
            transform: `rotate(${this._translateTurn(state)}turn)`,
            "background-color": this._computeSeverity(state),
        })}
          ></div>
          <div class="gauge-data">
            <div id="percent">
              ${stateObj.state}
              ${this._config.unit ||
            stateObj.attributes.unit_of_measurement ||
            ""}
            </div>
            <div id="name">
              ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj)}
            </div>
          </div>
        </div>
      </ha-card>
    `;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_9__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    firstUpdated() {
        this._updated = true;
        this._setBaseUnit();
        this.classList.add("init");
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        const oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__["default"])(this, this.hass.themes, this._config.theme);
        }
    }
    _setBaseUnit() {
        if (!this.isConnected || !this._updated) {
            return;
        }
        const baseUnit = this._computeBaseUnit();
        if (baseUnit !== "0px") {
            this._baseUnit = baseUnit;
        }
    }
    _computeSeverity(numberValue) {
        const sections = this._config.severity;
        if (!sections) {
            return severityMap.normal;
        }
        const sectionsArray = Object.keys(sections);
        const sortable = sectionsArray.map((severity) => [
            severity,
            sections[severity],
        ]);
        for (const severity of sortable) {
            if (severityMap[severity[0]] == null || isNaN(severity[1])) {
                return severityMap.normal;
            }
        }
        sortable.sort((a, b) => a[1] - b[1]);
        if (numberValue >= sortable[0][1] && numberValue < sortable[1][1]) {
            return severityMap[sortable[0][0]];
        }
        if (numberValue >= sortable[1][1] && numberValue < sortable[2][1]) {
            return severityMap[sortable[1][0]];
        }
        if (numberValue >= sortable[2][1]) {
            return severityMap[sortable[2][0]];
        }
        return severityMap.normal;
    }
    _translateTurn(value) {
        const { min, max } = this._config;
        const maxTurnValue = Math.min(Math.max(value, min), max);
        return (5 * (maxTurnValue - min)) / (max - min) / 10;
    }
    _computeBaseUnit() {
        return this.clientWidth < 200 ? this.clientWidth / 5 + "px" : "50px";
    }
    _handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "hass-more-info", { entityId: this._config.entity });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        height: calc(var(--base-unit) * 3);
        position: relative;
        cursor: pointer;
      }
      .container {
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        position: absolute;
        top: calc(var(--base-unit) * 1.5);
        left: 50%;
        overflow: hidden;
        text-align: center;
        transform: translate(-50%, -50%);
      }
      .gauge-a {
        z-index: 1;
        position: absolute;
        background-color: var(--primary-background-color);
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        top: 0%;
        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)
          0px 0px;
      }
      .gauge-b {
        z-index: 3;
        position: absolute;
        background-color: var(--paper-card-background-color);
        width: calc(var(--base-unit) * 2.5);
        height: calc(var(--base-unit) * 1.25);
        top: calc(var(--base-unit) * 0.75);
        margin-left: calc(var(--base-unit) * 0.75);
        margin-right: auto;
        border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5)
          0px 0px;
      }
      .gauge-c {
        z-index: 2;
        position: absolute;
        background-color: var(--label-badge-blue);
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2);
        top: calc(var(--base-unit) * 2);
        margin-left: auto;
        margin-right: auto;
        border-radius: 0px 0px calc(var(--base-unit) * 2)
          calc(var(--base-unit) * 2);
        transform-origin: center top;
      }
      .init .gauge-c {
        transition: all 1.3s ease-in-out;
      }
      .gauge-data {
        z-index: 4;
        color: var(--primary-text-color);
        line-height: calc(var(--base-unit) * 0.3);
        position: absolute;
        width: calc(var(--base-unit) * 4);
        height: calc(var(--base-unit) * 2.1);
        top: calc(var(--base-unit) * 1.2);
        margin-left: auto;
        margin-right: auto;
      }
      .init .gauge-data {
        transition: all 1s ease-out;
      }
      .gauge-data #percent {
        font-size: calc(var(--base-unit) * 0.55);
      }
      .gauge-data #name {
        padding-top: calc(var(--base-unit) * 0.15);
        font-size: calc(var(--base-unit) * 0.3);
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGaugeCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGaugeCard.prototype, "_baseUnit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGaugeCard.prototype, "_config", void 0);
HuiGaugeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-gauge-card")
], HuiGaugeCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-glance-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-glance-card.ts ***!
  \******************************************************/
/*! exports provided: HuiGlanceCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiGlanceCard", function() { return HuiGlanceCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");














let HuiGlanceCard = class HuiGlanceCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-glance-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-glance-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-glance-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-glance-card-editor.ts"));
        return document.createElement("hui-glance-card-editor");
    }
    static getStubConfig() {
        return { entities: [] };
    }
    getCardSize() {
        return ((this._config.title ? 1 : 0) +
            Math.ceil(this._configEntities.length / 5));
    }
    setConfig(config) {
        this._config = Object.assign({ theme: "default" }, config);
        const entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_12__["processConfigEntities"])(config.entities);
        for (const entity of entities) {
            if ((entity.tap_action &&
                entity.tap_action.action === "call-service" &&
                !entity.tap_action.service) ||
                (entity.hold_action &&
                    entity.hold_action.action === "call-service" &&
                    !entity.hold_action.service)) {
                throw new Error('Missing required property "service" when tap_action or hold_action is call-service');
            }
        }
        const columns = config.columns || Math.min(config.entities.length, 5);
        this.style.setProperty("--glance-column-width", `${100 / columns}%`);
        this._configEntities = entities;
        if (this.hass) {
            this.requestUpdate();
        }
    }
    shouldUpdate(changedProps) {
        if (changedProps.has("_config")) {
            return true;
        }
        const oldHass = changedProps.get("hass");
        if (oldHass && this._configEntities) {
            for (const entity of this._configEntities) {
                if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const { title } = this._config;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card .header="${title}">
        <div class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ entities: true, "no-header": !title })}">
          ${this._configEntities.map((entityConf) => this.renderEntity(entityConf))}
        </div>
      </ha-card>
    `;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (!this._config || !this.hass) {
            return;
        }
        const oldHass = changedProperties.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_4__["default"])(this, this.hass.themes, this._config.theme);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .entities {
        display: flex;
        padding: 0 16px 4px;
        flex-wrap: wrap;
      }
      .entities.no-header {
        padding-top: 16px;
      }
      .entity {
        box-sizing: border-box;
        padding: 0 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        margin-bottom: 12px;
        width: var(--glance-column-width, 20%);
      }
      .entity div {
        width: 100%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .name {
        min-height: var(--paper-font-body1_-_line-height, 20px);
      }
      state-badge {
        margin: 8px 0;
      }
    `;
    }
    renderEntity(entityConf) {
        const stateObj = this.hass.states[entityConf.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", entityConf.entity)}
        ></hui-warning-element>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div
        class="entity"
        .entityConf="${entityConf}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_11__["longPress"])()}"
      >
        ${this._config.show_name !== false
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="name">
                ${"name" in entityConf
                ? entityConf.name
                : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj)}
              </div>
            `
            : ""}
        ${this._config.show_icon !== false
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <state-badge
                .hass=${this.hass}
                .stateObj=${stateObj}
                .overrideIcon=${entityConf.icon}
                .overrideImage=${entityConf.image}
              ></state-badge>
            `
            : ""}
        ${this._config.show_state !== false
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div>
                ${entityConf.show_last_changed
                ? Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(stateObj.last_changed), this.hass.localize)
                : Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
              </div>
            `
            : ""}
      </div>
    `;
    }
    _handleTap(ev) {
        const config = ev.currentTarget.entityConf;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, config, false);
    }
    _handleHold(ev) {
        const config = ev.currentTarget.entityConf;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_13__["handleClick"])(this, this.hass, config, true);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGlanceCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGlanceCard.prototype, "_config", void 0);
HuiGlanceCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-glance-card")
], HuiGlanceCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-history-graph-card.js":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-history-graph-card.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");









class HuiHistoryGraphCard extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static async getConfigElement() {
    await Promise.all(/*! import() | hui-history-graph-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-history-graph-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-history-graph-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-history-graph-card-editor.ts"));
    return document.createElement("hui-history-graph-card-editor");
  }

  static getStubConfig() {
    return { entities: [] };
  }

  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .content {
          padding: 16px;
        }
        [header] .content {
          padding-top: 0;
        }
      </style>

      <ha-card header$="[[_config.title]]">
        <div class="content">
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[_entities]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            names="[[_names]]"
            up-to-now
            no-single
          ></state-history-charts>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      _config: Object,
      _names: Object,
      _entities: Array,

      _stateHistory: Object,
      _stateHistoryLoading: Boolean,
      _cacheConfig: Object,
    };
  }

  getCardSize() {
    return 4;
  }

  setConfig(config) {
    const entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_5__["processConfigEntities"])(config.entities);

    this._config = config;

    const _entities = [];
    const _names = {};
    entities.forEach((entity) => {
      _entities.push(entity.entity);
      if (entity.name) {
        _names[entity.entity] = entity.name;
      }
    });

    this.setProperties({
      _cacheConfig: {
        cacheKey: _entities.join(),
        hoursToShow: config.hours_to_show || 24,
        refresh: config.refresh_interval || 0,
      },
      _entities,
      _names,
    });
  }
}

customElements.define("hui-history-graph-card", HuiHistoryGraphCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-horizontal-stack-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-horizontal-stack-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _hui_stack_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-stack-card */ "./src/panels/lovelace/cards/hui-stack-card.ts");



class HuiHorizontalStackCard extends _hui_stack_card__WEBPACK_IMPORTED_MODULE_2__["HuiStackCard"] {
    getCardSize() {
        let totalSize = 0;
        if (this._cards) {
            for (const element of this._cards) {
                const elementSize = Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__["computeCardSize"])(element);
                totalSize = elementSize > totalSize ? elementSize : totalSize;
            }
        }
        return totalSize;
    }
    renderStyle() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <style>
        #root {
          display: flex;
        }
        #root > * {
          flex: 1 1 0;
          margin: 0 4px;
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      </style>
    `;
    }
}
customElements.define("hui-horizontal-stack-card", HuiHorizontalStackCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-iframe-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-iframe-card.ts ***!
  \******************************************************/
/*! exports provided: HuiIframeCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiIframeCard", function() { return HuiIframeCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");




let HuiIframeCard = class HuiIframeCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-iframe-card-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-iframe-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-iframe-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-iframe-card-editor.ts"));
        return document.createElement("hui-iframe-card-editor");
    }
    static getStubConfig() {
        return { url: "https://www.home-assistant.io", aspect_ratio: "50%" };
    }
    getCardSize() {
        if (!this._config) {
            return 3;
        }
        const aspectRatio = this._config.aspect_ratio
            ? Number(this._config.aspect_ratio.replace("%", ""))
            : 50;
        return 1 + aspectRatio / 25;
    }
    setConfig(config) {
        if (!config.url) {
            throw new Error("URL required");
        }
        this._config = config;
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const aspectRatio = this._config.aspect_ratio || "50%";
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card .header="${this._config.title}">
        <div
          id="root"
          style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_3__["styleMap"])({
            "padding-top": aspectRatio,
        })}"
        >
          <iframe src="${this._config.url}"></iframe>
        </div>
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        overflow: hidden;
      }

      #root {
        width: 100%;
        position: relative;
      }

      iframe {
        position: absolute;
        border: none;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiIframeCard.prototype, "_config", void 0);
HuiIframeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-iframe-card")
], HuiIframeCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-legacy-wrapper-card.js":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-legacy-wrapper-card.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegacyWrapperCard; });
/* harmony import */ var _hui_error_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");



class LegacyWrapperCard extends HTMLElement {
  constructor(tag, domain) {
    super();
    this._tag = tag.toUpperCase();
    this._domain = domain;
    this._element = null;
  }

  getCardSize() {
    return 3;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("No entity specified");
    }

    if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_1__["computeDomain"])(config.entity) !== this._domain) {
      throw new Error(
        `Specified entity needs to be of domain ${this._domain}.`
      );
    }

    this._config = config;
  }

  set hass(hass) {
    const entityId = this._config.entity;

    if (entityId in hass.states) {
      this._ensureElement(this._tag);
      this.lastChild.hass = hass;
      this.lastChild.stateObj = hass.states[entityId];
      this.lastChild.config = this._config;
    } else {
      this._ensureElement("HUI-ERROR-CARD");
      this.lastChild.setConfig(
        Object(_hui_error_card__WEBPACK_IMPORTED_MODULE_0__["createErrorCardConfig"])(
          `No state available for ${entityId}`,
          this._config
        )
      );
    }
  }

  _ensureElement(tag) {
    if (this.lastChild && this.lastChild.tagName === tag) return;

    if (this.lastChild) {
      this.removeChild(this.lastChild);
    }

    this.appendChild(document.createElement(tag));
  }
}


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-light-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-light-card.ts ***!
  \*****************************************************/
/*! exports provided: HuiLightCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiLightCard", function() { return HuiLightCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _thomasloven_round_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @thomasloven/round-slider */ "./node_modules/@thomasloven/round-slider/src/main.js");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _components_hui_unavailable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hui-unavailable */ "./src/panels/lovelace/components/hui-unavailable.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/entity/toggle-entity */ "./src/panels/lovelace/common/entity/toggle-entity.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _data_light__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/light */ "./src/data/light.ts");

















let HuiLightCard = class HuiLightCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-light-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-light-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-light-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-light-card-editor.ts"));
        return document.createElement("hui-light-card-editor");
    }
    static getStubConfig() {
        return { entity: "" };
    }
    getCardSize() {
        return 2;
    }
    setConfig(config) {
        if (!config.entity || config.entity.split(".")[0] !== "light") {
            throw new Error("Specify an entity from within the light domain.");
        }
        this._config = Object.assign({ theme: "default" }, config);
    }
    render() {
        if (!this.hass || !this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        const brightness = Math.round((stateObj.attributes.brightness / 254) * 100) || 0;
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this.renderStyle()}
      <ha-card>
        ${stateObj.state === "unavailable"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <hui-unavailable
                .text="${this.hass.localize("state.default.unavailable")}"
              ></hui-unavailable>
            `
            : ""}
        <paper-icon-button
          icon="hass:dots-vertical"
          class="more-info"
          @click="${this._handleMoreInfo}"
        ></paper-icon-button>

        <div id="light">
          ${Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_15__["supportsFeature"])(stateObj, _data_light__WEBPACK_IMPORTED_MODULE_16__["SUPPORT_BRIGHTNESS"])
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <round-slider
                  min="1"
                  .value=${brightness}
                  @value-changing=${this._dragEvent}
                  @value-changed=${this._setBrightness}
                ></round-slider>
              `
            : ""}
          <ha-icon
            class="light-icon"
            data-state="${stateObj.state}"
            .icon="${this._config.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_4__["stateIcon"])(stateObj)}"
            style="${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_12__["styleMap"])({
            filter: this._computeBrightness(stateObj),
            color: this._computeColor(stateObj),
        })}"
            @click="${this._handleTap}"
          ></ha-icon>
        </div>

        <div id="tooltip">
          <div class="brightness" @ha-click="${this._handleTap}">
            ${brightness} %
          </div>
          <div class="name">
            ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj)}
          </div>
        </div>
      </ha-card>
    `;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_13__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || !this.hass) {
            return;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return;
        }
        const oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_6__["default"])(this, this.hass.themes, this._config.theme);
        }
    }
    renderStyle() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <style>
        :host {
          display: block;
        }

        ha-card {
          position: relative;
          overflow: hidden;
          --name-font-size: 1.2rem;
          --brightness-font-size: 1.2rem;
          --rail-border-color: transparent;
        }

        #tooltip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          text-align: center;
        }

        #light {
          margin: auto;
          padding-top: 0;
          padding-bottom: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 160px;
          width: 160px;
        }
        #light round-slider {
          margin: 0 auto;
          display: inline-block;
          --round-slider-path-color: var(--disabled-text-color);
          --round-slider-bar-color: var(--primary-color);
          z-index: 20;
        }

        .light-icon {
          position: absolute;
          margin: 0 auto;
          width: 76px;
          height: 76px;
          color: var(--paper-item-icon-color, #44739e);
          cursor: pointer;
          z-index: 20;
        }

        .light-icon[data-state="on"] {
          color: var(--paper-item-icon-active-color, #fdd835);
        }

        .light-icon[data-state="unavailable"] {
          color: var(--state-icon-unavailable-color);
        }

        .name {
          position: absolute;
          top: 160px;
          left: 50%;
          transform: translate(-50%);
          font-size: var(--name-font-size);
        }

        .brightness {
          font-size: var(--brightness-font-size);
          position: absolute;
          margin: 0 auto;
          top: 135px;
          left: 50%;
          transform: translate(-50%);
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          -moz-transition: opacity 0.5s ease-in-out;
          -webkit-transition: opacity 0.5s ease-in-out;
          cursor: pointer;
          pointer-events: none;
        }

        .show_brightness {
          opacity: 1;
        }

        .more-info {
          position: absolute;
          cursor: pointer;
          top: 0;
          right: 0;
          z-index: 25;
          color: var(--secondary-text-color);
        }
      </style>
    `;
    }
    _dragEvent(e) {
        this.shadowRoot.querySelector(".brightness").innerHTML =
            e.detail.value + "%";
        this._showBrightness();
        this._hideBrightness();
    }
    _showBrightness() {
        clearTimeout(this._brightnessTimout);
        this.shadowRoot.querySelector(".brightness").classList.add("show_brightness");
    }
    _hideBrightness() {
        this._brightnessTimout = window.setTimeout(() => {
            this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness");
        }, 500);
    }
    _setBrightness(e) {
        this.hass.callService("light", "turn_on", {
            entity_id: this._config.entity,
            brightness_pct: e.detail.value,
        });
    }
    _computeBrightness(stateObj) {
        if (!stateObj.attributes.brightness) {
            return "";
        }
        const brightness = stateObj.attributes.brightness;
        return `brightness(${(brightness + 245) / 5}%)`;
    }
    _computeColor(stateObj) {
        if (!stateObj.attributes.hs_color) {
            return "";
        }
        const [hue, sat] = stateObj.attributes.hs_color;
        if (sat <= 10) {
            return "";
        }
        return `hsl(${hue}, 100%, ${100 - sat / 2}%)`;
    }
    _handleTap() {
        Object(_common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_14__["toggleEntity"])(this.hass, this._config.entity);
    }
    _handleMoreInfo() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(this, "hass-more-info", {
            entityId: this._config.entity,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiLightCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiLightCard.prototype, "_config", void 0);
HuiLightCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-light-card")
], HuiLightCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-map-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-map-card.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _map_ha_entity_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map/ha-entity-marker */ "./src/panels/map/ha-entity-marker.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");












let HuiMapCard = class HuiMapCard extends lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"] {
    constructor() {
        super(...arguments);
        this.isPanel = false;
        this._debouncedResizeListener = Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_7__["debounce"])(() => {
            if (!this._leafletMap) {
                return;
            }
            this._leafletMap.invalidateSize();
        }, 100, false);
        this._mapItems = [];
        this._connected = false;
    }
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-map-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-map-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-map-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-map-card-editor.ts"));
        return document.createElement("hui-map-card-editor");
    }
    static getStubConfig() {
        return { entities: [] };
    }
    setConfig(config) {
        if (!config) {
            throw new Error("Error in card configuration.");
        }
        if (!config.entities && !config.geo_location_sources) {
            throw new Error("Either entities or geo_location_sources must be defined");
        }
        if (config.entities && !Array.isArray(config.entities)) {
            throw new Error("Entities need to be an array");
        }
        if (config.geo_location_sources &&
            !Array.isArray(config.geo_location_sources)) {
            throw new Error("Geo_location_sources needs to be an array");
        }
        this._config = config;
        this._configEntities = config.entities
            ? Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_10__["processConfigEntities"])(config.entities)
            : [];
    }
    getCardSize() {
        if (!this._config) {
            return 3;
        }
        const ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__["default"])(this._config.aspect_ratio);
        const ar = ratio && ratio.w > 0 && ratio.h > 0
            ? `${((100 * ratio.h) / ratio.w).toFixed(2)}`
            : "100";
        return 1 + Math.floor(Number(ar) / 25) || 3;
    }
    connectedCallback() {
        super.connectedCallback();
        this._connected = true;
        if (this.hasUpdated) {
            this.loadMap();
            this._attachObserver();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._connected = false;
        if (this._leafletMap) {
            this._leafletMap.remove();
            this._leafletMap = undefined;
            this.Leaflet = undefined;
        }
        if (this._resizeObserver) {
            this._resizeObserver.unobserve(this._mapEl);
        }
        else {
            window.removeEventListener("resize", this._debouncedResizeListener);
        }
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] `
      <ha-card id="card" .header=${this._config.title}>
        <div id="root">
          <div
            id="map"
            class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__["classMap"])({ dark: this._config.dark_mode === true })}
          ></div>
          <paper-icon-button
            @click=${this._fitMap}
            icon="hass:image-filter-center-focus"
            title="Reset focus"
          ></paper-icon-button>
        </div>
      </ha-card>
    `;
    }
    shouldUpdate(changedProps) {
        if (!changedProps.has("hass") || changedProps.size > 1) {
            return true;
        }
        const oldHass = changedProps.get("hass");
        if (!oldHass || !this._configEntities) {
            return true;
        }
        // Check if any state has changed
        for (const entity of this._configEntities) {
            if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                return true;
            }
        }
        return false;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.loadMap();
        const root = this.shadowRoot.getElementById("root");
        if (!this._config || this.isPanel || !root) {
            return;
        }
        if (this._connected) {
            this._attachObserver();
        }
        const ratio = Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_8__["default"])(this._config.aspect_ratio);
        root.style.paddingBottom =
            ratio && ratio.w > 0 && ratio.h > 0
                ? `${((100 * ratio.h) / ratio.w).toFixed(2)}%`
                : (root.style.paddingBottom = "100%");
    }
    updated(changedProps) {
        if (changedProps.has("hass")) {
            this._drawEntities();
        }
        if (changedProps.has("_config") &&
            changedProps.get("_config") !== undefined) {
            this.updateMap(changedProps.get("_config"));
        }
    }
    get _mapEl() {
        return this.shadowRoot.getElementById("map");
    }
    async loadMap() {
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_4__["setupLeafletMap"])(this._mapEl, this._config !== undefined ? this._config.dark_mode === true : false);
        this._drawEntities();
        this._leafletMap.invalidateSize();
        this._fitMap();
    }
    updateMap(oldConfig) {
        const map = this._leafletMap;
        const config = this._config;
        const Leaflet = this.Leaflet;
        if (!map || !config || !Leaflet) {
            return;
        }
        if (config.dark_mode !== oldConfig.dark_mode) {
            Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_4__["createTileLayer"])(Leaflet, config.dark_mode === true).addTo(map);
        }
        if (config.entities !== oldConfig.entities ||
            config.geo_location_sources !== oldConfig.geo_location_sources) {
            this._drawEntities();
        }
        map.invalidateSize();
        this._fitMap();
    }
    _fitMap() {
        if (!this._leafletMap || !this.Leaflet || !this._config || !this.hass) {
            return;
        }
        const zoom = this._config.default_zoom;
        if (this._mapItems.length === 0) {
            this._leafletMap.setView(new this.Leaflet.LatLng(this.hass.config.latitude, this.hass.config.longitude), zoom || 14);
            return;
        }
        const bounds = this.Leaflet.latLngBounds(this._mapItems ? this._mapItems.map((item) => item.getLatLng()) : []);
        this._leafletMap.fitBounds(bounds.pad(0.5));
        if (zoom && this._leafletMap.getZoom() > zoom) {
            this._leafletMap.setZoom(zoom);
        }
    }
    _drawEntities() {
        const hass = this.hass;
        const map = this._leafletMap;
        const config = this._config;
        const Leaflet = this.Leaflet;
        if (!hass || !map || !config || !Leaflet) {
            return;
        }
        if (this._mapItems) {
            this._mapItems.forEach((marker) => marker.remove());
        }
        const mapItems = (this._mapItems = []);
        const allEntities = this._configEntities.concat();
        // Calculate visible geo location sources
        if (config.geo_location_sources) {
            const includesAll = config.geo_location_sources.includes("all");
            for (const entityId of Object.keys(hass.states)) {
                const stateObj = hass.states[entityId];
                if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entityId) === "geo_location" &&
                    (includesAll ||
                        config.geo_location_sources.includes(stateObj.attributes.source))) {
                    allEntities.push({ entity: entityId });
                }
            }
        }
        for (const entity of allEntities) {
            const entityId = entity.entity;
            const stateObj = hass.states[entityId];
            if (!stateObj) {
                continue;
            }
            const title = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj);
            const { latitude, longitude, passive, icon, radius, entity_picture: entityPicture, gps_accuracy: gpsAccuracy, } = stateObj.attributes;
            if (!(latitude && longitude)) {
                continue;
            }
            if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(stateObj) === "zone") {
                // DRAW ZONE
                if (passive) {
                    continue;
                }
                // create marker with the icon
                mapItems.push(Leaflet.marker([latitude, longitude], {
                    icon: Leaflet.divIcon({
                        html: icon ? `<ha-icon icon="${icon}"></ha-icon>` : title,
                        iconSize: [24, 24],
                        className: "",
                    }),
                    interactive: false,
                    title,
                }));
                // create circle around it
                mapItems.push(Leaflet.circle([latitude, longitude], {
                    interactive: false,
                    color: "#FF9800",
                    radius,
                }));
                continue;
            }
            // DRAW ENTITY
            // create icon
            const entityName = title
                .split(" ")
                .map((part) => part[0])
                .join("")
                .substr(0, 3);
            // create market with the icon
            mapItems.push(Leaflet.marker([latitude, longitude], {
                icon: Leaflet.divIcon({
                    // Leaflet clones this element before adding it to the map. This messes up
                    // our Polymer object and we can't pass data through. Thus we hack like this.
                    html: `
              <ha-entity-marker
                entity-id="${entityId}"
                entity-name="${entityName}"
                entity-picture="${entityPicture || ""}"
              ></ha-entity-marker>
            `,
                    iconSize: [48, 48],
                    className: "",
                }),
                title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj),
            }));
            // create circle around if entity has accuracy
            if (gpsAccuracy) {
                mapItems.push(Leaflet.circle([latitude, longitude], {
                    interactive: false,
                    color: "#0288D1",
                    radius: gpsAccuracy,
                }));
            }
        }
        this._mapItems.forEach((marker) => map.addLayer(marker));
    }
    _attachObserver() {
        // Observe changes to map size and invalidate to prevent broken rendering
        // Uses ResizeObserver in Chrome, otherwise window resize event
        // @ts-ignore
        if (typeof ResizeObserver === "function") {
            // @ts-ignore
            this._resizeObserver = new ResizeObserver(() => this._debouncedResizeListener());
            this._resizeObserver.observe(this._mapEl);
        }
        else {
            window.addEventListener("resize", this._debouncedResizeListener);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"] `
      :host([ispanel]) ha-card {
        left: 0;
        top: 0;
        width: 100%;
        /**
       * In panel mode we want a full height map. Since parent #view
       * only sets min-height, we need absolute positioning here
       */
        height: 100%;
        position: absolute;
      }

      ha-card {
        overflow: hidden;
      }

      #map {
        z-index: 0;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fafaf8;
      }

      #map.dark {
        background: #090909;
      }

      paper-icon-button {
        position: absolute;
        top: 75px;
        left: 7px;
      }

      #root {
        position: relative;
      }

      :host([ispanel]) #root {
        height: 100%;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], HuiMapCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])({ type: Boolean, reflect: true })
], HuiMapCard.prototype, "isPanel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], HuiMapCard.prototype, "_config", void 0);
HuiMapCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("hui-map-card")
], HuiMapCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-markdown-card.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-markdown-card.ts ***!
  \********************************************************/
/*! exports provided: HuiMarkdownCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiMarkdownCard", function() { return HuiMarkdownCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _data_ws_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/ws-templates */ "./src/data/ws-templates.ts");






let HuiMarkdownCard = class HuiMarkdownCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._content = "";
    }
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-markdown-card-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-markdown-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-markdown-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-markdown-card-editor.ts"));
        return document.createElement("hui-markdown-card-editor");
    }
    static getStubConfig() {
        return {
            content: "The **Markdown** card allows you to write any text. You can style it **bold**, *italicized*, ~strikethrough~ etc. You can do images, links, and more.\n\nFor more information see the [Markdown Cheatsheet](https://commonmark.org/help).",
        };
    }
    getCardSize() {
        return this._config === undefined
            ? 3
            : this._config.card_size === undefined
                ? this._config.content.split("\n").length + (this._config.title ? 1 : 0)
                : this._config.card_size;
    }
    setConfig(config) {
        if (!config.content) {
            throw new Error("Invalid Configuration: Content Required");
        }
        this._config = config;
        this._disconnect().then(() => {
            if (this._hass) {
                this._connect();
            }
        });
    }
    disconnectedCallback() {
        this._disconnect();
    }
    set hass(hass) {
        this._hass = hass;
        this._connect();
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card .header="${this._config.title}">
        <ha-markdown
          class="markdown ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "no-header": !this._config.title,
        })}"
          .content="${this._content}"
        ></ha-markdown>
      </ha-card>
    `;
    }
    async _connect() {
        if (!this._unsubRenderTemplate && this._hass && this._config) {
            this._unsubRenderTemplate = Object(_data_ws_templates__WEBPACK_IMPORTED_MODULE_5__["subscribeRenderTemplate"])(this._hass.connection, (result) => {
                this._content = result;
            }, {
                template: this._config.content,
                entity_ids: this._config.entity_id,
                variables: { config: this._config },
            });
            this._unsubRenderTemplate.catch(() => {
                this._content = this._config.content;
                this._unsubRenderTemplate = undefined;
            });
        }
    }
    async _disconnect() {
        if (this._unsubRenderTemplate) {
            try {
                const unsub = await this._unsubRenderTemplate;
                this._unsubRenderTemplate = undefined;
                await unsub();
            }
            catch (e) {
                if (e.code === "not_found") {
                    // If we get here, the connection was probably already closed. Ignore.
                }
                else {
                    throw e;
                }
            }
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-markdown {
        display: block;
        padding: 0 16px 16px;
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }
      .markdown.no-header {
        padding-top: 16px;
      }
      ha-markdown > *:first-child {
        margin-top: 0;
      }
      ha-markdown > *:last-child {
        margin-bottom: 0;
      }
      ha-markdown a {
        color: var(--primary-color);
      }
      ha-markdown img {
        max-width: 100%;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiMarkdownCard.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiMarkdownCard.prototype, "_content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiMarkdownCard.prototype, "_unsubRenderTemplate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiMarkdownCard.prototype, "_hass", void 0);
HuiMarkdownCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-markdown-card")
], HuiMarkdownCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-media-control-card.js":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-media-control-card.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_ha_media_player_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../cards/ha-media_player-card */ "./src/cards/ha-media_player-card.js");
/* harmony import */ var _hui_legacy_wrapper_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hui-legacy-wrapper-card */ "./src/panels/lovelace/cards/hui-legacy-wrapper-card.js");




class HuiMediaControlCard extends _hui_legacy_wrapper_card__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static async getConfigElement() {
    await Promise.all(/*! import() | hui-media-control-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-media-control-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-media-control-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-media-control-card-editor.ts"));
    return document.createElement("hui-media-control-card-editor");
  }

  static getStubConfig() {
    return { entity: "" };
  }

  constructor() {
    super("ha-media_player-card", "media_player");
  }
}

customElements.define("hui-media-control-card", HuiMediaControlCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-card.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-card.ts ***!
  \*******************************************************/
/*! exports provided: HuiPictureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiPictureCard", function() { return HuiPictureCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");






let HuiPictureCard = class HuiPictureCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-picture-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-picture-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-card-editor.ts"));
        return document.createElement("hui-picture-card-editor");
    }
    static getStubConfig() {
        return {
            image: "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png",
            tap_action: { action: "none" },
            hold_action: { action: "none" },
        };
    }
    getCardSize() {
        return 3;
    }
    setConfig(config) {
        if (!config || !config.image) {
            throw new Error("Invalid Configuration: 'image' required");
        }
        this._config = config;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__["longPress"])()}"
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
            clickable: Boolean(this._config.tap_action || this._config.hold_action),
        })}"
      >
        <img src="${this.hass.hassUrl(this._config.image)}" />
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        overflow: hidden;
      }

      ha-card.clickable {
        cursor: pointer;
      }

      img {
        display: block;
        width: 100%;
      }
    `;
    }
    _handleTap() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, true);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureCard.prototype, "_config", void 0);
HuiPictureCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-card")
], HuiPictureCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-elements-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-elements-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./picture-elements/create-styled-hui-element */ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts");



let HuiPictureElementsCard = class HuiPictureElementsCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    set hass(hass) {
        this._hass = hass;
        for (const el of Array.from(this.shadowRoot.querySelectorAll("#root > *"))) {
            const element = el;
            element.hass = this._hass;
        }
    }
    getCardSize() {
        return 4;
    }
    setConfig(config) {
        if (!config) {
            throw new Error("Invalid Configuration");
        }
        else if (!(config.image || config.camera_image || config.state_image) ||
            (config.state_image && !config.entity)) {
            throw new Error("Invalid Configuration: image required");
        }
        else if (!Array.isArray(config.elements)) {
            throw new Error("Invalid Configuration: elements required");
        }
        this._config = config;
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card .header="${this._config.title}">
        <div id="root">
          <hui-image
            .hass=${this._hass}
            .image=${this._config.image}
            .stateImage=${this._config.state_image}
            .stateFilter=${this._config.state_filter}
            .cameraImage=${this._config.camera_image}
            .cameraView=${this._config.camera_view}
            .entity=${this._config.entity}
            .aspectRatio=${this._config.aspect_ratio}
          ></hui-image>
          ${this._config.elements.map((elementConfig) => {
            const element = Object(_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_2__["createStyledHuiElement"])(elementConfig);
            element.hass = this._hass;
            return element;
        })}
        </div>
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      #root {
        position: relative;
      }

      .element {
        position: absolute;
        transform: translate(-50%, -50%);
      }

      ha-card {
        overflow: hidden;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureElementsCard.prototype, "_config", void 0);
HuiPictureElementsCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-elements-card")
], HuiPictureElementsCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-entity-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-entity-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _data_entity__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/entity */ "./src/data/entity.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");













let HuiPictureEntityCard = class HuiPictureEntityCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-picture-entity-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-picture-entity-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-entity-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-entity-card-editor.ts"));
        return document.createElement("hui-picture-entity-card-editor");
    }
    static getStubConfig() {
        return {
            entity: "",
            image: "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png",
        };
    }
    getCardSize() {
        return 3;
    }
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(config.entity) !== "camera" &&
            (!config.image && !config.state_image && !config.camera_image)) {
            throw new Error("No image source configured.");
        }
        this._config = Object.assign({ show_name: true, show_state: true }, config);
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_12__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        const name = this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj);
        const state = Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_8__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language);
        let footer = "";
        if (this._config.show_name && this._config.show_state) {
            footer = lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <div class="footer both">
          <div>${name}</div>
          <div>${state}</div>
        </div>
      `;
        }
        else if (this._config.show_name) {
            footer = lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <div class="footer">${name}</div>
      `;
        }
        else if (this._config.show_state) {
            footer = lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <div class="footer state">${state}</div>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card>
        <hui-image
          .hass=${this.hass}
          .image=${this._config.image}
          .stateImage=${this._config.state_image}
          .stateFilter=${this._config.state_filter}
          .cameraImage=${Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(this._config.entity) === "camera"
            ? this._config.entity
            : this._config.camera_image}
          .cameraView=${this._config.camera_view}
          .entity=${this._config.entity}
          .aspectRatio=${this._config.aspect_ratio}
          @ha-click=${this._handleTap}
          @ha-hold=${this._handleHold}
          .longPress=${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_9__["longPress"])()}
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            clickable: stateObj.state !== _data_entity__WEBPACK_IMPORTED_MODULE_11__["UNAVAILABLE"],
        })}
        ></hui-image>
        ${footer}
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        min-height: 75px;
        overflow: hidden;
        position: relative;
      }

      hui-image.clickable {
        cursor: pointer;
      }

      .footer {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 16px;
        font-size: 16px;
        line-height: 16px;
        color: white;
      }

      .both {
        display: flex;
        justify-content: space-between;
      }

      .state {
        text-align: right;
      }
    `;
    }
    _handleTap() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_10__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_10__["handleClick"])(this, this.hass, this._config, true);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureEntityCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureEntityCard.prototype, "_config", void 0);
HuiPictureEntityCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-entity-card")
], HuiPictureEntityCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-picture-glance-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-picture-glance-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
















const STATES_OFF = new Set(["closed", "locked", "not_home", "off"]);
let HuiPictureGlanceCard = class HuiPictureGlanceCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-picture-glance-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-picture-glance-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-picture-glance-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-picture-glance-card-editor.ts"));
        return document.createElement("hui-picture-glance-card-editor");
    }
    static getStubConfig() {
        return {
            image: "https://www.home-assistant.io/images/merchandise/shirt-frontpage.png",
            entities: [],
        };
    }
    getCardSize() {
        return 3;
    }
    setConfig(config) {
        if (!config ||
            !config.entities ||
            !Array.isArray(config.entities) ||
            !(config.image || config.camera_image || config.state_image) ||
            (config.state_image && !config.entity)) {
            throw new Error("Invalid card configuration");
        }
        const entities = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_13__["processConfigEntities"])(config.entities);
        this._entitiesDialog = [];
        this._entitiesToggle = [];
        entities.forEach((item) => {
            if (config.force_dialog ||
                !_common_const__WEBPACK_IMPORTED_MODULE_11__["DOMAINS_TOGGLE"].has(Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_4__["computeDomain"])(item.entity))) {
                this._entitiesDialog.push(item);
            }
            else {
                this._entitiesToggle.push(item);
            }
        });
        this._config = config;
    }
    shouldUpdate(changedProps) {
        if (Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_15__["hasConfigOrEntityChanged"])(this, changedProps)) {
            return true;
        }
        const oldHass = changedProps.get("hass");
        if (this._entitiesDialog) {
            for (const entity of this._entitiesDialog) {
                if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                    return true;
                }
            }
        }
        if (this._entitiesToggle) {
            for (const entity of this._entitiesToggle) {
                if (oldHass.states[entity.entity] !== this.hass.states[entity.entity]) {
                    return true;
                }
            }
        }
        return false;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card>
        <hui-image
          class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            clickable: Boolean(this._config.tap_action ||
                this._config.hold_action ||
                this._config.camera_image),
        })}
          @ha-click=${this._handleTap}
          @ha-hold=${this._handleHold}
          .longPress=${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__["longPress"])()}
          .config=${this._config}
          .hass=${this.hass}
          .image=${this._config.image}
          .stateImage=${this._config.state_image}
          .stateFilter=${this._config.state_filter}
          .cameraImage=${this._config.camera_image}
          .cameraView=${this._config.camera_view}
          .entity=${this._config.entity}
          .aspectRatio=${this._config.aspect_ratio}
        ></hui-image>
        <div class="box">
          ${this._config.title
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="title">${this._config.title + "hha"}</div>
              `
            : ""}
          <div>
            ${this._entitiesDialog.map((entityConf) => this.renderEntity(entityConf, true))}
          </div>
          <div>
            ${this._entitiesToggle.map((entityConf) => this.renderEntity(entityConf, false))}
          </div>
        </div>
      </ha-card>
    `;
    }
    renderEntity(entityConf, dialog) {
        const stateObj = this.hass.states[entityConf.entity];
        entityConf = Object.assign({ tap_action: { action: dialog ? "more-info" : "toggle" } }, entityConf);
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", entityConf.entity)}
        ></hui-warning-element>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-icon
        @ha-click=${this._handleTap}
        @ha-hold=${this._handleHold}
        .longPress=${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_12__["longPress"])()}
        .config=${entityConf}
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "state-on": !STATES_OFF.has(stateObj.state),
        })}"
        .icon="${entityConf.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__["stateIcon"])(stateObj)}"
        title="${`
            ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj)} : ${Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_10__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
          `}"
      ></ha-icon>
    `;
    }
    _handleTap(ev) {
        const config = ev.currentTarget.config;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_14__["handleClick"])(this, this.hass, config, false);
    }
    _handleHold(ev) {
        const config = ev.currentTarget.config;
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_14__["handleClick"])(this, this.hass, config, true);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        position: relative;
        min-height: 48px;
        overflow: hidden;
      }

      hui-image.clickable {
        cursor: pointer;
      }

      .box {
        /* start paper-font-common-nowrap style */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /* end paper-font-common-nowrap style */

        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        font-size: 16px;
        line-height: 40px;
        color: white;
        display: flex;
        justify-content: space-between;
      }

      .box .title {
        font-weight: 500;
        margin-left: 8px;
      }

      ha-icon {
        cursor: pointer;
        padding: 8px;
        color: #a9a9a9;
      }

      ha-icon.state-on {
        color: white;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureGlanceCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPictureGlanceCard.prototype, "_config", void 0);
HuiPictureGlanceCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-picture-glance-card")
], HuiPictureGlanceCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-plant-status-card.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-plant-status-card.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







const SENSORS = {
    moisture: "hass:water",
    temperature: "hass:thermometer",
    brightness: "hass:white-balance-sunny",
    conductivity: "hass:emoticon-poop",
    battery: "hass:battery",
};
let HuiPlantStatusCard = class HuiPlantStatusCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-plant-status-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-plant-status-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-plant-status-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-plant-status-card-editor.ts"));
        return document.createElement("hui-plant-status-card-editor");
    }
    static getStubConfig() {
        return { entity: "" };
    }
    getCardSize() {
        return 3;
    }
    setConfig(config) {
        if (!config.entity || config.entity.split(".")[0] !== "plant") {
            throw new Error("Specify an entity from within the plant domain.");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this.hass || !this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        class="${stateObj.attributes.entity_picture ? "has-plant-image" : ""}"
      >
        <div
          class="banner"
          style="background-image:url(${stateObj.attributes.entity_picture})"
        >
          <div class="header">
            ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj)}
          </div>
        </div>
        <div class="content">
          ${this.computeAttributes(stateObj).map((item) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div
                class="attributes"
                @click="${this._handleMoreInfo}"
                .value="${item}"
              >
                <div>
                  <ha-icon
                    icon="${this.computeIcon(item, stateObj.attributes.battery)}"
                  ></ha-icon>
                </div>
                <div
                  class="${stateObj.attributes.problem.indexOf(item) === -1
            ? ""
            : "problem"}"
                >
                  ${stateObj.attributes[item]}
                </div>
                <div class="uom">
                  ${stateObj.attributes.unit_of_measurement_dict[item] || ""}
                </div>
              </div>
            `)}
        </div>
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .banner {
        display: flex;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding-top: 12px;
      }

      .has-plant-image .banner {
        padding-top: 30%;
      }

      .header {
        /* start paper-font-headline style */
        font-family: "Roboto", "Noto", sans-serif;
        -webkit-font-smoothing: antialiased; /* OS X subpixel AA bleed bug */
        text-rendering: optimizeLegibility;
        font-size: 24px;
        font-weight: 400;
        letter-spacing: -0.012em;
        /* end paper-font-headline style */

        line-height: 40px;
        padding: 8px 16px;
      }

      .has-plant-image .header {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        padding: 16px;
        color: white;
        width: 100%;
        background: rgba(0, 0, 0, var(--dark-secondary-opacity));
      }

      .content {
        display: flex;
        justify-content: space-between;
        padding: 16px 32px 24px 32px;
      }

      .has-plant-image .content {
        padding-bottom: 16px;
      }

      ha-icon {
        color: var(--paper-item-icon-color);
        margin-bottom: 8px;
      }

      .attributes {
        cursor: pointer;
      }

      .attributes div {
        text-align: center;
      }

      .problem {
        color: var(--google-red-500);
        font-weight: bold;
      }

      .uom {
        color: var(--secondary-text-color);
      }
    `;
    }
    computeAttributes(stateObj) {
        return Object.keys(SENSORS).filter((key) => key in stateObj.attributes);
    }
    computeIcon(attr, batLvl) {
        const icon = SENSORS[attr];
        if (attr === "battery") {
            if (batLvl <= 5) {
                return `${icon}-alert`;
            }
            if (batLvl < 95) {
                return `${icon}-${Math.round(batLvl / 10 - 0.01) * 10}`;
            }
        }
        return icon;
    }
    _handleMoreInfo(ev) {
        const target = ev.currentTarget;
        const stateObj = this.hass.states[this._config.entity];
        if (target.value) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "hass-more-info", {
                entityId: stateObj.attributes.sensors[target.value],
            });
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPlantStatusCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiPlantStatusCard.prototype, "_config", void 0);
HuiPlantStatusCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-plant-status-card")
], HuiPlantStatusCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-sensor-card.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-sensor-card.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_history__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/history */ "./src/data/history.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");












const midPoint = (_Ax, _Ay, _Bx, _By) => {
    const _Zx = (_Ax - _Bx) / 2 + _Bx;
    const _Zy = (_Ay - _By) / 2 + _By;
    return [_Zx, _Zy];
};
const getPath = (coords) => {
    let next;
    let Z;
    const X = 0;
    const Y = 1;
    let path = "";
    let last = coords.filter(Boolean)[0];
    path += `M ${last[X]},${last[Y]}`;
    for (const coord of coords) {
        next = coord;
        Z = midPoint(last[X], last[Y], next[X], next[Y]);
        path += ` ${Z[X]},${Z[Y]}`;
        path += ` Q${next[X]},${next[Y]}`;
        last = next;
    }
    path += ` ${next[X]},${next[Y]}`;
    return path;
};
const calcPoints = (history, hours, width, detail, min, max) => {
    const coords = [];
    const margin = 5;
    const height = 80;
    width -= 10;
    let yRatio = (max - min) / height;
    yRatio = yRatio !== 0 ? yRatio : height;
    let xRatio = width / (hours - (detail === 1 ? 1 : 0));
    xRatio = isFinite(xRatio) ? xRatio : width;
    const getCoords = (item, i, offset = 0, depth = 1) => {
        if (depth > 1) {
            return item.forEach((subItem, index) => getCoords(subItem, i, index, depth - 1));
        }
        const average = item.reduce((sum, entry) => sum + parseFloat(entry.state), 0) /
            item.length;
        const x = xRatio * (i + offset / 6) + margin;
        const y = height - (average - min) / yRatio + margin * 2;
        return coords.push([x, y]);
    };
    history.forEach((item, i) => getCoords(item, i, 0, detail));
    if (coords.length === 1) {
        coords[1] = [width + margin, coords[0][1]];
    }
    coords.push([width + margin, coords[coords.length - 1][1]]);
    return coords;
};
const coordinates = (history, hours, width, detail) => {
    history.forEach((item) => (item.state = Number(item.state)));
    history = history.filter((item) => !Number.isNaN(item.state));
    const min = Math.min.apply(Math, history.map((item) => item.state));
    const max = Math.max.apply(Math, history.map((item) => item.state));
    const now = new Date().getTime();
    const reduce = (res, item, point) => {
        const age = now - new Date(item.last_changed).getTime();
        let key = Math.abs(age / (1000 * 3600) - hours);
        if (point) {
            key = (key - Math.floor(key)) * 60;
            key = Number((Math.round(key / 10) * 10).toString()[0]);
        }
        else {
            key = Math.floor(key);
        }
        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(item);
        return res;
    };
    history = history.reduce((res, item) => reduce(res, item, false), []);
    if (detail > 1) {
        history = history.map((entry) => entry.reduce((res, item) => reduce(res, item, true), []));
    }
    return calcPoints(history, hours, width, detail, min, max);
};
let HuiSensorCard = class HuiSensorCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-sensor-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-sensor-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-sensor-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-sensor-card-editor.ts"));
        return document.createElement("hui-sensor-card-editor");
    }
    static getStubConfig() {
        return { entity: "" };
    }
    setConfig(config) {
        if (!config.entity || config.entity.split(".")[0] !== "sensor") {
            throw new Error("Specify an entity from within the sensor domain.");
        }
        const cardConfig = Object.assign({ detail: 1, theme: "default", hours_to_show: 24 }, config);
        cardConfig.hours_to_show = Number(cardConfig.hours_to_show);
        cardConfig.detail =
            cardConfig.detail === 1 || cardConfig.detail === 2
                ? cardConfig.detail
                : 1;
        this._config = cardConfig;
    }
    getCardSize() {
        return 3;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        let graph;
        if (stateObj && this._config.graph === "line") {
            if (!stateObj.attributes.unit_of_measurement) {
                return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
          <hui-warning
            >Entity: ${this._config.entity} - Has no Unit of Measurement and
            therefore can not display a line graph.</hui-warning
          >
        `;
            }
            else if (!this._history) {
                graph = lit_element__WEBPACK_IMPORTED_MODULE_1__["svg"] `
          <svg width="100%" height="100%" viewBox="0 0 500 100"></svg>
        `;
            }
            else {
                graph = lit_element__WEBPACK_IMPORTED_MODULE_1__["svg"] `
          <svg width="100%" height="100%" viewBox="0 0 500 100">
            <path
              d="${this._history}"
              fill="none"
              stroke="var(--accent-color)"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        `;
            }
        }
        else {
            graph = "";
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card @click="${this._handleClick}">
        <div class="flex">
          <div class="icon">
            <ha-icon
              .icon="${this._config.icon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_5__["stateIcon"])(stateObj)}"
            ></ha-icon>
          </div>
          <div class="header">
            <span class="name"
              >${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj)}</span
            >
          </div>
        </div>
        <div class="flex info">
          <span id="value">${stateObj.state}</span>
          <span id="measurement"
            >${this._config.unit ||
            stateObj.attributes.unit_of_measurement}</span
          >
        </div>
        <div class="graph"><div>${graph}</div></div>
      </ha-card>
    `;
    }
    firstUpdated() {
        this._date = new Date();
    }
    shouldUpdate(changedProps) {
        if (changedProps.has("_history")) {
            return true;
        }
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_11__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || this._config.graph !== "line" || !this.hass) {
            return;
        }
        const oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_3__["default"])(this, this.hass.themes, this._config.theme);
        }
        const minute = 60000;
        if (changedProps.has("_config")) {
            this._getHistory();
        }
        else if (Date.now() - this._date.getTime() >= minute) {
            this._getHistory();
        }
    }
    _handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "hass-more-info", { entityId: this._config.entity });
    }
    async _getHistory() {
        const endTime = new Date();
        const startTime = new Date();
        startTime.setHours(endTime.getHours() - this._config.hours_to_show);
        const stateHistory = await Object(_data_history__WEBPACK_IMPORTED_MODULE_10__["fetchRecent"])(this.hass, this._config.entity, startTime, endTime);
        if (stateHistory.length < 1 || stateHistory[0].length < 1) {
            return;
        }
        const coords = coordinates(stateHistory[0], this._config.hours_to_show, 500, this._config.detail);
        this._history = getPath(coords);
        this._date = new Date();
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: flex;
        flex-direction: column;
      }

      ha-card {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 16px;
        position: relative;
        cursor: pointer;
      }

      .flex {
        display: flex;
      }

      .header {
        align-items: center;
        display: flex;
        min-width: 0;
        opacity: 0.8;
        position: relative;
      }

      .name {
        display: block;
        display: -webkit-box;
        font-size: 1.2rem;
        font-weight: 500;
        max-height: 1.4rem;
        margin-top: 2px;
        opacity: 0.8;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        word-break: break-all;
      }

      .icon {
        color: var(--paper-item-icon-color, #44739e);
        display: inline-block;
        flex: 0 0 40px;
        line-height: 40px;
        position: relative;
        text-align: center;
        width: 40px;
      }

      .info {
        flex-wrap: wrap;
        margin: 16px 0 16px 8px;
      }

      #value {
        display: inline-block;
        font-size: 2rem;
        font-weight: 400;
        line-height: 1em;
        margin-right: 4px;
      }

      #measurement {
        align-self: flex-end;
        display: inline-block;
        font-size: 1.3rem;
        line-height: 1.2em;
        margin-top: 0.1em;
        opacity: 0.6;
        vertical-align: bottom;
      }

      .graph {
        align-self: flex-end;
        margin: auto;
        margin-bottom: 0px;
        position: relative;
        width: 100%;
      }

      .graph > div {
        align-self: flex-end;
        margin: auto 8px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorCard.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorCard.prototype, "_history", void 0);
HuiSensorCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-sensor-card")
], HuiSensorCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-shopping-list-card.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-shopping-list-card.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _data_shopping_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/shopping-list */ "./src/data/shopping-list.ts");







let HuiShoppingListCard = class HuiShoppingListCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-shopping-list-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-shopping-list-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-shopping-list-editor */ "./src/panels/lovelace/editor/config-elements/hui-shopping-list-editor.ts"));
        return document.createElement("hui-shopping-list-card-editor");
    }
    static getStubConfig() {
        return {};
    }
    getCardSize() {
        return (this._config ? (this._config.title ? 1 : 0) : 0) + 3;
    }
    setConfig(config) {
        this._config = config;
        this._uncheckedItems = [];
        this._checkedItems = [];
        this._fetchData();
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.hass) {
            this._unsubEvents = this.hass.connection.subscribeEvents(() => this._fetchData(), "shopping_list_updated");
            this._fetchData();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._unsubEvents) {
            this._unsubEvents.then((unsub) => unsub());
        }
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card .header="${this._config.title}">
        <div class="addRow">
          <ha-icon
            class="addButton"
            @click="${this._addItem}"
            icon="hass:plus"
            .title="${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}"
          >
          </ha-icon>
          <paper-item-body>
            <paper-input
              no-label-float
              class="addBox"
              placeholder="${this.hass.localize("ui.panel.lovelace.cards.shopping-list.add_item")}"
              @keydown="${this._addKeyPress}"
            ></paper-input>
          </paper-item-body>
        </div>
        ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_2__["repeat"])(this._uncheckedItems, (item) => item.id, (item, index) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="editRow">
                <paper-checkbox
                  slot="item-icon"
                  id="${index}"
                  ?checked="${item.complete}"
                  .itemId="${item.id}"
                  @click="${this._completeItem}"
                  tabindex="0"
                ></paper-checkbox>
                <paper-item-body>
                  <paper-input
                    no-label-float
                    .value="${item.name}"
                    .itemId="${item.id}"
                    @change="${this._saveEdit}"
                  ></paper-input>
                </paper-item-body>
              </div>
            `)}
        ${this._checkedItems.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="divider"></div>
              <div class="checked">
                <span class="label">
                  ${this.hass.localize("ui.panel.lovelace.cards.shopping-list.checked_items")}
                </span>
                <ha-icon
                  class="clearall"
                  @click="${this._clearItems}"
                  icon="hass:notification-clear-all"
                  .title="${this.hass.localize("ui.panel.lovelace.cards.shopping-list.clear_items")}"
                >
                </ha-icon>
              </div>
              ${Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_2__["repeat"])(this._checkedItems, (item) => item.id, (item, index) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                    <div class="editRow">
                      <paper-checkbox
                        slot="item-icon"
                        id="${index}"
                        ?checked="${item.complete}"
                        .itemId="${item.id}"
                        @click="${this._completeItem}"
                        tabindex="0"
                      ></paper-checkbox>
                      <paper-item-body>
                        <paper-input
                          no-label-float
                          .value="${item.name}"
                          .itemId="${item.id}"
                          @change="${this._saveEdit}"
                        ></paper-input>
                      </paper-item-body>
                    </div>
                  `)}
            `
            : ""}
      </ha-card>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .editRow,
      .addRow {
        display: flex;
        flex-direction: row;
      }

      .addButton {
        padding: 9px 15px 11px 15px;
        cursor: pointer;
      }

      paper-item-body {
        width: 75%;
      }

      paper-checkbox {
        padding: 11px 11px 11px 18px;
      }

      paper-input {
        --paper-input-container-underline: {
          display: none;
        }
        --paper-input-container-underline-focus: {
          display: none;
        }
        --paper-input-container-underline-disabled: {
          display: none;
        }
        position: relative;
        top: 1px;
      }

      .checked {
        margin-left: 17px;
        margin-bottom: 11px;
        margin-top: 11px;
      }

      .label {
        color: var(--primary-color);
      }

      .divider {
        height: 1px;
        background-color: var(--divider-color);
        margin: 10px;
      }

      .clearall {
        cursor: pointer;
        margin-bottom: 3px;
        float: right;
        padding-right: 10px;
      }

      .addRow > ha-icon {
        color: var(--secondary-text-color);
      }
    `;
    }
    async _fetchData() {
        if (this.hass) {
            const checkedItems = [];
            const uncheckedItems = [];
            const items = await Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["fetchItems"])(this.hass);
            for (const key in items) {
                if (items[key].complete) {
                    checkedItems.push(items[key]);
                }
                else {
                    uncheckedItems.push(items[key]);
                }
            }
            this._checkedItems = checkedItems;
            this._uncheckedItems = uncheckedItems;
        }
    }
    _completeItem(ev) {
        Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["updateItem"])(this.hass, ev.target.itemId, {
            complete: ev.target.checked,
        }).catch(() => this._fetchData());
    }
    _saveEdit(ev) {
        Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["updateItem"])(this.hass, ev.target.itemId, {
            name: ev.target.value,
        }).catch(() => this._fetchData());
        ev.target.blur();
    }
    _clearItems() {
        if (this.hass) {
            Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["clearItems"])(this.hass).catch(() => this._fetchData());
        }
    }
    get _newItem() {
        return this.shadowRoot.querySelector(".addBox");
    }
    _addItem(ev) {
        const newItem = this._newItem;
        if (newItem.value.length > 0) {
            Object(_data_shopping_list__WEBPACK_IMPORTED_MODULE_6__["addItem"])(this.hass, newItem.value).catch(() => this._fetchData());
        }
        newItem.value = "";
        if (ev) {
            newItem.focus();
        }
    }
    _addKeyPress(ev) {
        if (ev.keyCode === 13) {
            this._addItem(null);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiShoppingListCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiShoppingListCard.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiShoppingListCard.prototype, "_uncheckedItems", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiShoppingListCard.prototype, "_checkedItems", void 0);
HuiShoppingListCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-shopping-list-card")
], HuiShoppingListCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-stack-card.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-stack-card.ts ***!
  \*****************************************************/
/*! exports provided: HuiStackCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStackCard", function() { return HuiStackCard; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");


class HuiStackCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    static get properties() {
        return {
            _config: {},
        };
    }
    set hass(hass) {
        this._hass = hass;
        if (!this._cards) {
            return;
        }
        for (const element of this._cards) {
            element.hass = this._hass;
        }
    }
    setConfig(config) {
        if (!config || !config.cards || !Array.isArray(config.cards)) {
            throw new Error("Card config incorrect");
        }
        this._config = config;
        this._cards = config.cards.map((card) => {
            const element = this._createCardElement(card);
            return element;
        });
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      ${this.renderStyle()}
      ${this._config.title
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <div class="card-header">${this._config.title}</div>
          `
            : ""}
      <div id="root">${this._cards}</div>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
      .card-header {
        color: var(--ha-card-header-color, --primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        font-size: var(--ha-card-header-font-size, 24px);
        letter-spacing: -0.012em;
        line-height: 32px;
        display: block;
        padding: 24px 16px 16px;
      }
    `;
    }
    _createCardElement(cardConfig) {
        const element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_1__["createCardElement"])(cardConfig);
        if (this._hass) {
            element.hass = this._hass;
        }
        element.addEventListener("ll-rebuild", (ev) => {
            ev.stopPropagation();
            this._rebuildCard(element, cardConfig);
        }, { once: true });
        return element;
    }
    _rebuildCard(cardElToReplace, config) {
        const newCardEl = this._createCardElement(config);
        cardElToReplace.parentElement.replaceChild(newCardEl, cardElToReplace);
        this._cards = this._cards.map((curCardEl) => curCardEl === cardElToReplace ? newCardEl : curCardEl);
    }
}


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-thermostat-card.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-thermostat-card.ts ***!
  \**********************************************************/
/*! exports provided: HuiThermostatCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiThermostatCard", function() { return HuiThermostatCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _resources_jquery_roundslider_ondemand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/jquery.roundslider.ondemand */ "./src/resources/jquery.roundslider.ondemand.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/climate */ "./src/data/climate.ts");














const thermostatConfig = {
    radius: 150,
    circleShape: "pie",
    startAngle: 315,
    width: 5,
    lineCap: "round",
    handleSize: "+10",
    showTooltip: false,
    animation: false,
};
const modeIcons = {
    auto: "hass:calendar-repeat",
    heat_cool: "hass:autorenew",
    heat: "hass:fire",
    cool: "hass:snowflake",
    off: "hass:power",
    fan_only: "hass:fan",
    dry: "hass:water-percent",
};
let HuiThermostatCard = class HuiThermostatCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-thermostat-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-thermostat-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-thermostat-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-thermostat-card-editor.ts"));
        return document.createElement("hui-thermostat-card-editor");
    }
    static getStubConfig() {
        return { entity: "" };
    }
    getCardSize() {
        return 4;
    }
    setConfig(config) {
        if (!config.entity || config.entity.split(".")[0] !== "climate") {
            throw new Error("Specify an entity from within the climate domain.");
        }
        this._config = Object.assign({ theme: "default" }, config);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this._updated && !this._loaded) {
            this._initialLoad();
        }
    }
    render() {
        if (!this.hass || !this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        const mode = stateObj.state in modeIcons ? stateObj.state : "unknown-mode";
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this.renderStyle()}
      <ha-card
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            [mode]: true,
            large: this._broadCard,
            small: !this._broadCard,
        })}"
      >
        <div id="root">
          <paper-icon-button
            icon="hass:dots-vertical"
            class="more-info"
            @click="${this._handleMoreInfo}"
          ></paper-icon-button>
          <div id="thermostat"></div>
          <div id="tooltip">
            <div class="title">
              ${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj)}
            </div>
            <div class="current-temperature">
              <span class="current-temperature-text">
                ${stateObj.attributes.current_temperature}
                ${stateObj.attributes.current_temperature
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <span class="uom"
                        >${this.hass.config.unit_system.temperature}</span
                      >
                    `
            : ""}
              </span>
            </div>
            <div class="climate-info">
              <div id="set-temperature"></div>
              <div class="current-mode">
                ${stateObj.attributes.hvac_action
            ? this.hass.localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`)
            : this.hass.localize(`state.climate.${stateObj.state}`)}
                ${stateObj.attributes.preset_mode &&
            stateObj.attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_13__["CLIMATE_PRESET_NONE"]
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      -
                      ${this.hass.localize(`state_attributes.climate.preset_mode.${stateObj.attributes.preset_mode}`) || stateObj.attributes.preset_mode}
                    `
            : ""}
              </div>
              <div class="modes">
                ${(stateObj.attributes.hvac_modes || [])
            .concat()
            .sort(_data_climate__WEBPACK_IMPORTED_MODULE_13__["compareClimateHvacModes"])
            .map((modeItem) => this._renderIcon(modeItem, mode))}
              </div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_9__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    firstUpdated() {
        this._updated = true;
        if (this.isConnected && !this._loaded) {
            this._initialLoad();
        }
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._config || !this.hass || !changedProps.has("hass")) {
            return;
        }
        const oldHass = changedProps.get("hass");
        if (!oldHass || oldHass.themes !== this.hass.themes) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_7__["default"])(this, this.hass.themes, this._config.theme);
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return;
        }
        if (this._jQuery &&
            // If jQuery changed, we just rendered in firstUpdated
            !changedProps.has("_jQuery") &&
            (!oldHass || oldHass.states[this._config.entity] !== stateObj)) {
            const [sliderValue, uiValue, sliderType] = this._genSliderValue(stateObj);
            this._jQuery("#thermostat", this.shadowRoot).roundSlider({
                sliderType,
                value: sliderValue,
                disabled: sliderValue === null,
                min: stateObj.attributes.min_temp,
                max: stateObj.attributes.max_temp,
            });
            this._updateSetTemp(uiValue);
        }
    }
    get _stepSize() {
        const stateObj = this.hass.states[this._config.entity];
        if (stateObj.attributes.target_temp_step) {
            return stateObj.attributes.target_temp_step;
        }
        return this.hass.config.unit_system.temperature === _common_const__WEBPACK_IMPORTED_MODULE_11__["UNIT_F"] ? 1 : 0.5;
    }
    async _initialLoad() {
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            // Card will require refresh to work again
            return;
        }
        this._loaded = true;
        await this.updateComplete;
        let radius = this.clientWidth / 3.2;
        this._broadCard = this.clientWidth > 390;
        if (radius === 0) {
            radius = 100;
        }
        this.shadowRoot.querySelector("#thermostat").style.height = radius * 2 + "px";
        const loaded = await Object(_resources_jquery_roundslider_ondemand__WEBPACK_IMPORTED_MODULE_10__["loadRoundslider"])();
        this._roundSliderStyle = loaded.roundSliderStyle;
        this._jQuery = loaded.jQuery;
        const [sliderValue, uiValue, sliderType] = this._genSliderValue(stateObj);
        this._jQuery("#thermostat", this.shadowRoot).roundSlider(Object.assign(Object.assign({}, thermostatConfig), { radius, min: stateObj.attributes.min_temp, max: stateObj.attributes.max_temp, sliderType, change: (value) => this._setTemperature(value), drag: (value) => this._dragEvent(value), value: sliderValue, disabled: sliderValue === null, step: this._stepSize }));
        this._updateSetTemp(uiValue);
    }
    _genSliderValue(stateObj) {
        let sliderType;
        let sliderValue;
        let uiValue;
        if (stateObj.state === "unavailable") {
            sliderType = "min-range";
            sliderValue = null;
            uiValue = this.hass.localize("state.default.unavailable");
        }
        else if (stateObj.attributes.target_temp_low &&
            stateObj.attributes.target_temp_high) {
            sliderType = "range";
            sliderValue = `${stateObj.attributes.target_temp_low}, ${stateObj.attributes.target_temp_high}`;
            uiValue = this.formatTemp([
                String(stateObj.attributes.target_temp_low),
                String(stateObj.attributes.target_temp_high),
            ], false);
        }
        else {
            sliderType = "min-range";
            sliderValue = Number.isFinite(Number(stateObj.attributes.temperature))
                ? stateObj.attributes.temperature
                : null;
            uiValue = sliderValue !== null ? String(sliderValue) : "";
        }
        return [sliderValue, uiValue, sliderType];
    }
    _updateSetTemp(value) {
        this.shadowRoot.querySelector("#set-temperature").innerHTML = value;
    }
    _dragEvent(e) {
        this._updateSetTemp(this.formatTemp(String(e.value).split(","), true));
    }
    _setTemperature(e) {
        const stateObj = this.hass.states[this._config.entity];
        if (stateObj.attributes.target_temp_low &&
            stateObj.attributes.target_temp_high) {
            if (e.handle.index === 1) {
                this.hass.callService("climate", "set_temperature", {
                    entity_id: this._config.entity,
                    target_temp_low: e.handle.value,
                    target_temp_high: stateObj.attributes.target_temp_high,
                });
            }
            else {
                this.hass.callService("climate", "set_temperature", {
                    entity_id: this._config.entity,
                    target_temp_low: stateObj.attributes.target_temp_low,
                    target_temp_high: e.handle.value,
                });
            }
        }
        else {
            this.hass.callService("climate", "set_temperature", {
                entity_id: this._config.entity,
                temperature: e.value,
            });
        }
    }
    _renderIcon(mode, currentMode) {
        if (!modeIcons[mode]) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-icon
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ "selected-icon": currentMode === mode })}"
        .mode="${mode}"
        .icon="${modeIcons[mode]}"
        @click="${this._handleModeClick}"
      ></ha-icon>
    `;
    }
    _handleMoreInfo() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "hass-more-info", {
            entityId: this._config.entity,
        });
    }
    _handleModeClick(e) {
        this.hass.callService("climate", "set_hvac_mode", {
            entity_id: this._config.entity,
            hvac_mode: e.currentTarget.mode,
        });
    }
    formatTemp(temps, spaceStepSize) {
        temps = temps.filter(Boolean);
        // If we are sliding the slider, append 0 to the temperatures if we're
        // having a 0.5 step size, so that the text doesn't jump while sliding
        if (spaceStepSize) {
            const stepSize = this._stepSize;
            temps = temps.map((val) => val.includes(".") || stepSize === 1 ? val : `${val}.0`);
        }
        return temps.join("-");
    }
    renderStyle() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this._roundSliderStyle}
      <style>
        :host {
          display: block;
        }
        ha-card {
          overflow: hidden;
          --rail-border-color: transparent;
          --auto-color: green;
          --eco-color: springgreen;
          --cool-color: #2b9af9;
          --heat-color: #ff8100;
          --manual-color: #44739e;
          --off-color: #8a8a8a;
          --fan_only-color: #8a8a8a;
          --dry-color: #efbd07;
          --idle-color: #8a8a8a;
          --unknown-color: #bac;
        }
        #root {
          position: relative;
          overflow: hidden;
        }
        .auto,
        .heat_cool {
          --mode-color: var(--auto-color);
        }
        .cool {
          --mode-color: var(--cool-color);
        }
        .heat {
          --mode-color: var(--heat-color);
        }
        .manual {
          --mode-color: var(--manual-color);
        }
        .off {
          --mode-color: var(--off-color);
        }
        .fan_only {
          --mode-color: var(--fan_only-color);
        }
        .eco {
          --mode-color: var(--eco-color);
        }
        .dry {
          --mode-color: var(--dry-color);
        }
        .idle {
          --mode-color: var(--idle-color);
        }
        .unknown-mode {
          --mode-color: var(--unknown-color);
        }
        .no-title {
          --title-position-top: 33% !important;
        }
        .large {
          --thermostat-padding-top: 25px;
          --thermostat-margin-bottom: 25px;
          --title-font-size: 28px;
          --title-position-top: 27%;
          --climate-info-position-top: 81%;
          --set-temperature-font-size: 25px;
          --current-temperature-font-size: 71px;
          --current-temperature-position-top: 10%;
          --current-temperature-text-padding-left: 15px;
          --uom-font-size: 20px;
          --uom-margin-left: -18px;
          --current-mode-font-size: 18px;
          --set-temperature-margin-bottom: -5px;
        }
        .small {
          --thermostat-padding-top: 15px;
          --thermostat-margin-bottom: 15px;
          --title-font-size: 18px;
          --title-position-top: 28%;
          --climate-info-position-top: 79%;
          --set-temperature-font-size: 16px;
          --current-temperature-font-size: 25px;
          --current-temperature-position-top: 5%;
          --current-temperature-text-padding-left: 7px;
          --uom-font-size: 12px;
          --uom-margin-left: -5px;
          --current-mode-font-size: 14px;
          --set-temperature-margin-bottom: 0px;
        }
        #thermostat {
          margin: 0 auto var(--thermostat-margin-bottom);
          padding-top: var(--thermostat-padding-top);
        }
        #thermostat .rs-range-color {
          background-color: var(--mode-color, var(--disabled-text-color));
        }
        #thermostat .rs-path-color {
          background-color: var(--disabled-text-color);
        }
        #thermostat .rs-handle {
          background-color: var(--paper-card-background-color, white);
          padding: 10px;
          margin: -10px 0 0 -8px !important;
          border: 2px solid var(--disabled-text-color);
        }
        #thermostat .rs-handle.rs-focus {
          border-color: var(--mode-color, var(--disabled-text-color));
        }
        #thermostat .rs-handle:after {
          border-color: var(--mode-color, var(--disabled-text-color));
          background-color: var(--mode-color, var(--disabled-text-color));
        }
        #thermostat .rs-border {
          border-color: var(--rail-border-color);
        }
        #thermostat .rs-bar.rs-transition.rs-first,
        .rs-bar.rs-transition.rs-second {
          z-index: 20 !important;
        }
        #thermostat .rs-readonly {
          z-index: 10;
          top: auto;
        }
        #thermostat .rs-inner.rs-bg-color.rs-border,
        #thermostat .rs-overlay.rs-transition.rs-bg-color {
          background-color: var(--paper-card-background-color, white);
        }
        #tooltip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          text-align: center;
          z-index: 15;
          color: var(--primary-text-color);
        }
        #set-temperature {
          font-size: var(--set-temperature-font-size);
          margin-bottom: var(--set-temperature-margin-bottom);
          min-height: 1.2em;
        }
        .title {
          font-size: var(--title-font-size);
          position: absolute;
          top: var(--title-position-top);
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .climate-info {
          position: absolute;
          top: var(--climate-info-position-top);
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        .current-mode {
          font-size: var(--current-mode-font-size);
          color: var(--secondary-text-color);
        }
        .modes {
          margin-top: 16px;
        }
        .modes ha-icon {
          color: var(--disabled-text-color);
          cursor: pointer;
          display: inline-block;
          margin: 0 10px;
        }
        .modes ha-icon.selected-icon {
          color: var(--mode-color);
        }
        .current-temperature {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: var(--current-temperature-font-size);
        }
        .current-temperature-text {
          padding-left: var(--current-temperature-text-padding-left);
        }
        .uom {
          font-size: var(--uom-font-size);
          vertical-align: top;
          margin-left: var(--uom-margin-left);
        }
        .more-info {
          position: absolute;
          cursor: pointer;
          top: 0;
          right: 0;
          z-index: 25;
          color: var(--secondary-text-color);
        }
      </style>
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThermostatCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThermostatCard.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThermostatCard.prototype, "_roundSliderStyle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiThermostatCard.prototype, "_jQuery", void 0);
HuiThermostatCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-thermostat-card")
], HuiThermostatCard);



/***/ }),

/***/ "./src/panels/lovelace/cards/hui-vertical-stack-card.ts":
/*!**************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-vertical-stack-card.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _hui_stack_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hui-stack-card */ "./src/panels/lovelace/cards/hui-stack-card.ts");



class HuiVerticalStackCard extends _hui_stack_card__WEBPACK_IMPORTED_MODULE_2__["HuiStackCard"] {
    getCardSize() {
        let totalSize = 0;
        if (!this._cards) {
            return totalSize;
        }
        for (const element of this._cards) {
            totalSize += Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_1__["computeCardSize"])(element);
        }
        return totalSize;
    }
    renderStyle() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <style>
        #root {
          display: flex;
          flex-direction: column;
        }
        #root > * {
          margin: 4px 0 4px 0;
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      </style>
    `;
    }
}
customElements.define("hui-vertical-stack-card", HuiVerticalStackCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/hui-weather-forecast-card.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/cards/hui-weather-forecast-card.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");










const cardinalDirections = [
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
const weatherIcons = {
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
let HuiWeatherForecastCard = class HuiWeatherForecastCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static async getConfigElement() {
        await Promise.all(/*! import() | hui-weather-forecast-card-editor */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e("hui-weather-forecast-card-editor")]).then(__webpack_require__.bind(null, /*! ../editor/config-elements/hui-weather-forecast-card-editor */ "./src/panels/lovelace/editor/config-elements/hui-weather-forecast-card-editor.ts"));
        return document.createElement("hui-weather-forecast-card-editor");
    }
    static getStubConfig() {
        return { entity: "" };
    }
    getCardSize() {
        return 4;
    }
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error("Invalid card configuration");
        }
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_4__["isValidEntityId"])(config.entity)) {
            throw new Error("Invalid Entity");
        }
        this._config = config;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass")) {
            Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_9__["toggleAttribute"])(this, "rtl", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass));
        }
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        const forecast = stateObj.attributes.forecast
            ? stateObj.attributes.forecast.slice(0, 5)
            : undefined;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card @click="${this.handleClick}">
        <div class="header">
          ${this.hass.localize(`state.weather.${stateObj.state}`) ||
            stateObj.state}
          <div class="name">
            ${(this._config && this._config.name) || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj)}
          </div>
        </div>
        <div class="content">
          <div class="now">
            <div class="main">
              ${stateObj.state in weatherIcons
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                    <ha-icon icon="${weatherIcons[stateObj.state]}"></ha-icon>
                  `
            : ""}
              <div class="temp">
                ${stateObj.attributes.temperature}<span
                  >${this.getUnit("temperature")}</span
                >
              </div>
            </div>
            <div class="attributes">
              ${this._showValue(stateObj.attributes.pressure)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.air_pressure")}:
                      <span class="measurand">
                        ${stateObj.attributes.pressure}
                        ${this.getUnit("air_pressure")}
                      </span>
                    </div>
                  `
            : ""}
              ${this._showValue(stateObj.attributes.humidity)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.humidity")}:
                      <span class="measurand"
                        >${stateObj.attributes.humidity} %</span
                      >
                    </div>
                  `
            : ""}
              ${this._showValue(stateObj.attributes.wind_speed)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                    <div>
                      ${this.hass.localize("ui.card.weather.attributes.wind_speed")}:
                      <span class="measurand">
                        ${stateObj.attributes.wind_speed}
                        ${this.getUnit("length")}/h
                      </span>
                      ${this.getWindBearing(stateObj.attributes.wind_bearing)}
                    </div>
                  `
            : ""}
            </div>
          </div>
          ${forecast
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="forecast">
                  ${forecast.map((item) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <div>
                        <div class="weekday">
                          ${new Date(item.datetime).toLocaleDateString(this.hass.language, { weekday: "short" })}<br />
                          ${!this._showValue(item.templow)
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                ${new Date(item.datetime).toLocaleTimeString(this.hass.language, { hour: "numeric" })}
                              `
                : ""}
                        </div>
                        ${this._showValue(item.condition)
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                              <div class="icon">
                                <ha-icon
                                  .icon="${weatherIcons[item.condition]}"
                                ></ha-icon>
                              </div>
                            `
                : ""}
                        ${this._showValue(item.temperature)
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                              <div class="temp">
                                ${item.temperature}
                                ${this.getUnit("temperature")}
                              </div>
                            `
                : ""}
                        ${this._showValue(item.templow)
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                              <div class="templow">
                                ${item.templow} ${this.getUnit("temperature")}
                              </div>
                            `
                : ""}
                        ${this._showValue(item.precipitation)
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                              <div class="precipitation">
                                ${item.precipitation}
                                ${this.getUnit("precipitation")}
                              </div>
                            `
                : ""}
                      </div>
                    `)}
                </div>
              `
            : ""}
        </div>
      </ha-card>
    `;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    handleClick() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(this, "hass-more-info", { entityId: this._config.entity });
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
        const degreenum = parseInt(degree, 10);
        if (isFinite(degreenum)) {
            // tslint:disable-next-line: no-bitwise
            return cardinalDirections[(((degreenum + 11.25) / 22.5) | 0) % 16];
        }
        return degree;
    }
    getWindBearing(bearing) {
        if (bearing != null) {
            const cardinalDirection = this.windBearingToText(bearing);
            return `(${this.hass.localize(`ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`) || cardinalDirection})`;
        }
        return ``;
    }
    _showValue(item) {
        return typeof item !== "undefined" && item !== null;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        cursor: pointer;
      }

      .content {
        padding: 0 20px 20px;
      }

      ha-icon {
        color: var(--paper-item-icon-color);
      }

      .header {
        font-family: var(--paper-font-headline_-_font-family);
        -webkit-font-smoothing: var(
          --paper-font-headline_-_-webkit-font-smoothing
        );
        font-size: var(--paper-font-headline_-_font-size);
        font-weight: var(--paper-font-headline_-_font-weight);
        letter-spacing: var(--paper-font-headline_-_letter-spacing);
        line-height: var(--paper-font-headline_-_line-height);
        text-rendering: var(
          --paper-font-common-expensive-kerning_-_text-rendering
        );
        opacity: var(--dark-primary-opacity);
        padding: 24px 16px 16px;
        display: flex;
        align-items: baseline;
      }

      .name {
        margin-left: 16px;
        font-size: 16px;
        color: var(--secondary-text-color);
      }

      :host([rtl]) .name {
        margin-left: 0px;
        margin-right: 16px;
      }

      .now {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .main {
        display: flex;
        align-items: center;
        margin-right: 32px;
      }

      :host([rtl]) .main {
        margin-right: 0px;
      }

      .main ha-icon {
        --iron-icon-height: 72px;
        --iron-icon-width: 72px;
        margin-right: 8px;
      }

      :host([rtl]) .main ha-icon {
        margin-right: 0px;
      }

      .main .temp {
        font-size: 52px;
        line-height: 1em;
        position: relative;
      }

      :host([rtl]) .main .temp {
        direction: ltr;
        margin-right: 28px;
      }

      .main .temp span {
        font-size: 24px;
        line-height: 1em;
        position: absolute;
        top: 4px;
      }

      .measurand {
        display: inline-block;
      }

      :host([rtl]) .measurand {
        direction: ltr;
      }

      .forecast {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
      }

      .forecast div {
        flex: 0 0 auto;
        text-align: center;
      }

      .forecast .icon {
        margin: 4px 0;
        text-align: center;
      }

      :host([rtl]) .forecast .temp {
        direction: ltr;
      }

      .weekday {
        font-weight: bold;
      }

      .attributes,
      .templow,
      .precipitation {
        color: var(--secondary-text-color);
      }

      :host([rtl]) .precipitation {
        direction: ltr;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiWeatherForecastCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiWeatherForecastCard.prototype, "_config", void 0);
HuiWeatherForecastCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-weather-forecast-card")
], HuiWeatherForecastCard);


/***/ }),

/***/ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts ***!
  \*********************************************************************************/
/*! exports provided: createStyledHuiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyledHuiElement", function() { return createStyledHuiElement; });
/* harmony import */ var _common_create_hui_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/create-hui-element */ "./src/panels/lovelace/common/create-hui-element.ts");

function createStyledHuiElement(elementConfig) {
    const element = Object(_common_create_hui_element__WEBPACK_IMPORTED_MODULE_0__["createHuiElement"])(elementConfig);
    // keep conditional card as a transparent container so let its position remain static
    if (element.tagName !== "HUI-CONDITIONAL-ELEMENT") {
        element.classList.add("element");
    }
    if (elementConfig.style) {
        Object.keys(elementConfig.style).forEach((prop) => {
            element.style.setProperty(prop, elementConfig.style[prop]);
        });
    }
    return element;
}


/***/ }),

/***/ "./src/panels/lovelace/common/call-service.ts":
/*!****************************************************!*\
  !*** ./src/panels/lovelace/common/call-service.ts ***!
  \****************************************************/
/*! exports provided: callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return callService; });
const callService = (config, hass) => {
    const entityId = config.entity;
    const [domain, service] = config.service.split(".", 2);
    const serviceData = Object.assign({ entity_id: entityId }, config.service_data);
    hass.callService(domain, service, serviceData);
};


/***/ }),

/***/ "./src/panels/lovelace/common/compute-card-size.ts":
/*!*********************************************************!*\
  !*** ./src/panels/lovelace/common/compute-card-size.ts ***!
  \*********************************************************/
/*! exports provided: computeCardSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeCardSize", function() { return computeCardSize; });
const computeCardSize = (card) => {
    return typeof card.getCardSize === "function" ? card.getCardSize() : 1;
};


/***/ }),

/***/ "./src/panels/lovelace/common/compute-tooltip.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/compute-tooltip.ts ***!
  \*******************************************************/
/*! exports provided: computeTooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeTooltip", function() { return computeTooltip; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");

const computeTooltip = (hass, config) => {
    if (config.title === null) {
        return "";
    }
    if (config.title) {
        return config.title;
    }
    let stateName = "";
    let tooltip = "";
    if (config.entity) {
        stateName =
            config.entity in hass.states
                ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(hass.states[config.entity])
                : config.entity;
    }
    const tapTooltip = config.tap_action
        ? computeActionTooltip(hass, stateName, config.tap_action, false)
        : "";
    const holdTooltip = config.hold_action
        ? computeActionTooltip(hass, stateName, config.hold_action, true)
        : "";
    const newline = tapTooltip && holdTooltip ? "\n" : "";
    tooltip = tapTooltip + newline + holdTooltip;
    return tooltip;
};
function computeActionTooltip(hass, state, config, isHold) {
    if (!config || !config.action || config.action === "none") {
        return "";
    }
    let tooltip = (isHold
        ? hass.localize("ui.panel.lovelace.cards.picture-elements.hold")
        : hass.localize("ui.panel.lovelace.cards.picture-elements.tap")) + " ";
    switch (config.action) {
        case "navigate":
            tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.navigate_to", "location", config.navigation_path)}`;
            break;
        case "url":
            tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.url", "url_path", config.url_path)}`;
            break;
        case "toggle":
            tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.toggle", "name", state)}`;
            break;
        case "call-service":
            tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.call_service", "name", config.service)}`;
            break;
        case "more-info":
            tooltip += `${hass.localize("ui.panel.lovelace.cards.picture-elements.more_info", "name", state)}`;
            break;
    }
    return tooltip;
}


/***/ }),

/***/ "./src/panels/lovelace/common/create-card-element.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/common/create-card-element.ts ***!
  \***********************************************************/
/*! exports provided: createCardElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCardElement", function() { return createCardElement; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cards_hui_alarm_panel_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/hui-alarm-panel-card */ "./src/panels/lovelace/cards/hui-alarm-panel-card.ts");
/* harmony import */ var _cards_hui_conditional_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/hui-conditional-card */ "./src/panels/lovelace/cards/hui-conditional-card.ts");
/* harmony import */ var _cards_hui_entities_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/hui-entities-card */ "./src/panels/lovelace/cards/hui-entities-card.ts");
/* harmony import */ var _cards_hui_entity_button_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/hui-entity-button-card */ "./src/panels/lovelace/cards/hui-entity-button-card.ts");
/* harmony import */ var _cards_hui_entity_filter_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/hui-entity-filter-card */ "./src/panels/lovelace/cards/hui-entity-filter-card.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _cards_hui_glance_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cards/hui-glance-card */ "./src/panels/lovelace/cards/hui-glance-card.ts");
/* harmony import */ var _cards_hui_history_graph_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/hui-history-graph-card */ "./src/panels/lovelace/cards/hui-history-graph-card.js");
/* harmony import */ var _cards_hui_horizontal_stack_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cards/hui-horizontal-stack-card */ "./src/panels/lovelace/cards/hui-horizontal-stack-card.ts");
/* harmony import */ var _cards_hui_iframe_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cards/hui-iframe-card */ "./src/panels/lovelace/cards/hui-iframe-card.ts");
/* harmony import */ var _cards_hui_light_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../cards/hui-light-card */ "./src/panels/lovelace/cards/hui-light-card.ts");
/* harmony import */ var _cards_hui_map_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cards/hui-map-card */ "./src/panels/lovelace/cards/hui-map-card.ts");
/* harmony import */ var _cards_hui_markdown_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../cards/hui-markdown-card */ "./src/panels/lovelace/cards/hui-markdown-card.ts");
/* harmony import */ var _cards_hui_media_control_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../cards/hui-media-control-card */ "./src/panels/lovelace/cards/hui-media-control-card.js");
/* harmony import */ var _cards_hui_picture_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../cards/hui-picture-card */ "./src/panels/lovelace/cards/hui-picture-card.ts");
/* harmony import */ var _cards_hui_picture_elements_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cards/hui-picture-elements-card */ "./src/panels/lovelace/cards/hui-picture-elements-card.ts");
/* harmony import */ var _cards_hui_picture_entity_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../cards/hui-picture-entity-card */ "./src/panels/lovelace/cards/hui-picture-entity-card.ts");
/* harmony import */ var _cards_hui_picture_glance_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../cards/hui-picture-glance-card */ "./src/panels/lovelace/cards/hui-picture-glance-card.ts");
/* harmony import */ var _cards_hui_plant_status_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../cards/hui-plant-status-card */ "./src/panels/lovelace/cards/hui-plant-status-card.ts");
/* harmony import */ var _cards_hui_sensor_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../cards/hui-sensor-card */ "./src/panels/lovelace/cards/hui-sensor-card.ts");
/* harmony import */ var _cards_hui_vertical_stack_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../cards/hui-vertical-stack-card */ "./src/panels/lovelace/cards/hui-vertical-stack-card.ts");
/* harmony import */ var _cards_hui_shopping_list_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../cards/hui-shopping-list-card */ "./src/panels/lovelace/cards/hui-shopping-list-card.ts");
/* harmony import */ var _cards_hui_thermostat_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../cards/hui-thermostat-card */ "./src/panels/lovelace/cards/hui-thermostat-card.ts");
/* harmony import */ var _cards_hui_weather_forecast_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../cards/hui-weather-forecast-card */ "./src/panels/lovelace/cards/hui-weather-forecast-card.ts");
/* harmony import */ var _cards_hui_gauge_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../cards/hui-gauge-card */ "./src/panels/lovelace/cards/hui-gauge-card.ts");



























const CARD_TYPES = new Set([
    "alarm-panel",
    "conditional",
    "entities",
    "entity-button",
    "entity-filter",
    "error",
    "gauge",
    "glance",
    "history-graph",
    "horizontal-stack",
    "iframe",
    "light",
    "map",
    "markdown",
    "media-control",
    "picture",
    "picture-elements",
    "picture-entity",
    "picture-glance",
    "plant-status",
    "sensor",
    "shopping-list",
    "thermostat",
    "vertical-stack",
    "weather-forecast",
]);
const CUSTOM_TYPE_PREFIX = "custom:";
const TIMEOUT = 2000;
const _createElement = (tag, config) => {
    const element = document.createElement(tag);
    try {
        element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
    }
    catch (err) {
        // tslint:disable-next-line
        console.error(tag, err);
        return _createErrorElement(err.message, config);
    }
    return element;
};
const _createErrorElement = (error, config) => Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_7__["createErrorCardElement"])(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_7__["createErrorCardConfig"])(error, config));
const createCardElement = (config) => {
    if (!config || typeof config !== "object" || !config.type) {
        return _createErrorElement("No card type configured.", config);
    }
    if (config.type.startsWith(CUSTOM_TYPE_PREFIX)) {
        const tag = config.type.substr(CUSTOM_TYPE_PREFIX.length);
        if (customElements.get(tag)) {
            return _createElement(tag, config);
        }
        const element = _createErrorElement(`Custom element doesn't exist: ${tag}.`, config);
        element.style.display = "None";
        const timer = window.setTimeout(() => {
            element.style.display = "";
        }, TIMEOUT);
        customElements.whenDefined(tag).then(() => {
            clearTimeout(timer);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(element, "ll-rebuild");
        });
        return element;
    }
    if (!CARD_TYPES.has(config.type)) {
        return _createErrorElement(`Unknown card type encountered: ${config.type}.`, config);
    }
    return _createElement(`hui-${config.type}-card`, config);
};


/***/ }),

/***/ "./src/panels/lovelace/common/create-hui-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/create-hui-element.ts ***!
  \**********************************************************/
/*! exports provided: createHuiElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHuiElement", function() { return createHuiElement; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _elements_hui_conditional_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/hui-conditional-element */ "./src/panels/lovelace/elements/hui-conditional-element.ts");
/* harmony import */ var _elements_hui_icon_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/hui-icon-element */ "./src/panels/lovelace/elements/hui-icon-element.ts");
/* harmony import */ var _elements_hui_image_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/hui-image-element */ "./src/panels/lovelace/elements/hui-image-element.ts");
/* harmony import */ var _elements_hui_service_button_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/hui-service-button-element */ "./src/panels/lovelace/elements/hui-service-button-element.ts");
/* harmony import */ var _elements_hui_state_badge_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/hui-state-badge-element */ "./src/panels/lovelace/elements/hui-state-badge-element.ts");
/* harmony import */ var _elements_hui_state_icon_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../elements/hui-state-icon-element */ "./src/panels/lovelace/elements/hui-state-icon-element.ts");
/* harmony import */ var _elements_hui_state_label_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements/hui-state-label-element */ "./src/panels/lovelace/elements/hui-state-label-element.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");










const CUSTOM_TYPE_PREFIX = "custom:";
const ELEMENT_TYPES = new Set([
    "conditional",
    "icon",
    "image",
    "service-button",
    "state-badge",
    "state-icon",
    "state-label",
]);
const TIMEOUT = 2000;
const _createElement = (tag, config) => {
    const element = document.createElement(tag);
    try {
        element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
    }
    catch (err) {
        // tslint:disable-next-line
        console.error(tag, err);
        return _createErrorElement(err.message, config);
    }
    return element;
};
const _createErrorElement = (error, config) => Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_9__["createErrorCardElement"])(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_9__["createErrorCardConfig"])(error, config));
function _hideErrorElement(element) {
    element.style.display = "None";
    return window.setTimeout(() => {
        element.style.display = "";
    }, TIMEOUT);
}
const createHuiElement = (config) => {
    if (!config || typeof config !== "object" || !config.type) {
        return _createErrorElement("No element type configured.", config);
    }
    if (config.type.startsWith(CUSTOM_TYPE_PREFIX)) {
        const tag = config.type.substr(CUSTOM_TYPE_PREFIX.length);
        if (customElements.get(tag)) {
            return _createElement(tag, config);
        }
        const element = _createErrorElement(`Custom element doesn't exist: ${tag}.`, config);
        const timer = _hideErrorElement(element);
        customElements.whenDefined(tag).then(() => {
            clearTimeout(timer);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_8__["fireEvent"])(element, "ll-rebuild");
        });
        return element;
    }
    if (!ELEMENT_TYPES.has(config.type)) {
        return _createErrorElement(`Unknown element type encountered: ${config.type}.`, config);
    }
    return _createElement(`hui-${config.type}-element`, config);
};


/***/ }),

/***/ "./src/panels/lovelace/common/create-row-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/create-row-element.ts ***!
  \**********************************************************/
/*! exports provided: createRowElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRowElement", function() { return createRowElement; });
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/hui-error-card */ "./src/panels/lovelace/cards/hui-error-card.ts");
/* harmony import */ var _entity_rows_hui_climate_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../entity-rows/hui-climate-entity-row */ "./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts");
/* harmony import */ var _entity_rows_hui_cover_entity_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../entity-rows/hui-cover-entity-row */ "./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts");
/* harmony import */ var _entity_rows_hui_group_entity_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../entity-rows/hui-group-entity-row */ "./src/panels/lovelace/entity-rows/hui-group-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_datetime_entity_row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../entity-rows/hui-input-datetime-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_number_entity_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../entity-rows/hui-input-number-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_select_entity_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../entity-rows/hui-input-select-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts");
/* harmony import */ var _entity_rows_hui_input_text_entity_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../entity-rows/hui-input-text-entity-row */ "./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts");
/* harmony import */ var _entity_rows_hui_lock_entity_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../entity-rows/hui-lock-entity-row */ "./src/panels/lovelace/entity-rows/hui-lock-entity-row.ts");
/* harmony import */ var _entity_rows_hui_media_player_entity_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../entity-rows/hui-media-player-entity-row */ "./src/panels/lovelace/entity-rows/hui-media-player-entity-row.ts");
/* harmony import */ var _entity_rows_hui_scene_entity_row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../entity-rows/hui-scene-entity-row */ "./src/panels/lovelace/entity-rows/hui-scene-entity-row.ts");
/* harmony import */ var _entity_rows_hui_script_entity_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../entity-rows/hui-script-entity-row */ "./src/panels/lovelace/entity-rows/hui-script-entity-row.ts");
/* harmony import */ var _entity_rows_hui_sensor_entity_row__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../entity-rows/hui-sensor-entity-row */ "./src/panels/lovelace/entity-rows/hui-sensor-entity-row.ts");
/* harmony import */ var _entity_rows_hui_text_entity_row__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../entity-rows/hui-text-entity-row */ "./src/panels/lovelace/entity-rows/hui-text-entity-row.ts");
/* harmony import */ var _entity_rows_hui_timer_entity_row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../entity-rows/hui-timer-entity-row */ "./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts");
/* harmony import */ var _entity_rows_hui_toggle_entity_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../entity-rows/hui-toggle-entity-row */ "./src/panels/lovelace/entity-rows/hui-toggle-entity-row.ts");
/* harmony import */ var _special_rows_hui_call_service_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../special-rows/hui-call-service-row */ "./src/panels/lovelace/special-rows/hui-call-service-row.ts");
/* harmony import */ var _special_rows_hui_divider_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../special-rows/hui-divider-row */ "./src/panels/lovelace/special-rows/hui-divider-row.ts");
/* harmony import */ var _special_rows_hui_section_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../special-rows/hui-section-row */ "./src/panels/lovelace/special-rows/hui-section-row.ts");
/* harmony import */ var _special_rows_hui_weblink_row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../special-rows/hui-weblink-row */ "./src/panels/lovelace/special-rows/hui-weblink-row.ts");
/* harmony import */ var _special_rows_hui_cast_row__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../special-rows/hui-cast-row */ "./src/panels/lovelace/special-rows/hui-cast-row.ts");























const CUSTOM_TYPE_PREFIX = "custom:";
const SPECIAL_TYPES = new Set([
    "call-service",
    "divider",
    "section",
    "weblink",
    "cast",
    "select",
]);
const DOMAIN_TO_ELEMENT_TYPE = {
    alert: "toggle",
    automation: "toggle",
    climate: "climate",
    cover: "cover",
    fan: "toggle",
    group: "group",
    input_boolean: "toggle",
    input_number: "input-number",
    input_select: "input-select",
    input_text: "input-text",
    light: "toggle",
    lock: "lock",
    media_player: "media-player",
    remote: "toggle",
    scene: "scene",
    script: "script",
    sensor: "sensor",
    timer: "timer",
    switch: "toggle",
    vacuum: "toggle",
    // Temporary. Once climate is rewritten,
    // water heater should get it's own row.
    water_heater: "climate",
    input_datetime: "input-datetime",
};
const TIMEOUT = 2000;
const _createElement = (tag, config) => {
    const element = document.createElement(tag);
    try {
        element.setConfig(Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
    }
    catch (err) {
        // tslint:disable-next-line
        console.error(tag, err);
        return _createErrorElement(err.message, config);
    }
    return element;
};
const _createErrorElement = (error, config) => Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardElement"])(Object(_cards_hui_error_card__WEBPACK_IMPORTED_MODULE_2__["createErrorCardConfig"])(error, config));
const _hideErrorElement = (element) => {
    element.style.display = "None";
    return window.setTimeout(() => {
        element.style.display = "";
    }, TIMEOUT);
};
const createRowElement = (config) => {
    let tag;
    if (!config ||
        typeof config !== "object" ||
        (!config.entity && !config.type)) {
        return _createErrorElement("Invalid config given.", config);
    }
    const type = config.type || "default";
    if (SPECIAL_TYPES.has(type)) {
        return _createElement(`hui-${type}-row`, config);
    }
    if (type.startsWith(CUSTOM_TYPE_PREFIX)) {
        tag = type.substr(CUSTOM_TYPE_PREFIX.length);
        if (customElements.get(tag)) {
            return _createElement(tag, config);
        }
        const element = _createErrorElement(`Custom element doesn't exist: ${tag}.`, config);
        const timer = _hideErrorElement(element);
        customElements.whenDefined(tag).then(() => {
            clearTimeout(timer);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(element, "ll-rebuild");
        });
        return element;
    }
    if (!config.entity) {
        return _createErrorElement("Invalid config given.", config);
    }
    const domain = config.entity.split(".", 1)[0];
    tag = `hui-${DOMAIN_TO_ELEMENT_TYPE[domain] || "text"}-entity-row`;
    return _createElement(tag, config);
};


/***/ }),

/***/ "./src/panels/lovelace/common/directives/long-press-directive.ts":
/*!***********************************************************************!*\
  !*** ./src/panels/lovelace/common/directives/long-press-directive.ts ***!
  \***********************************************************************/
/*! exports provided: longPressBind, longPress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longPressBind", function() { return longPressBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longPress", function() { return longPress; });
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var _material_mwc_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-ripple */ "./node_modules/@material/mwc-ripple/mwc-ripple.js");


const isTouch = "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
class LongPress extends HTMLElement {
    constructor() {
        super();
        this.holdTime = 500;
        this.ripple = document.createElement("mwc-ripple");
        this.timer = undefined;
        this.held = false;
        this.cooldownStart = false;
        this.cooldownEnd = false;
    }
    connectedCallback() {
        Object.assign(this.style, {
            position: "absolute",
            width: isTouch ? "100px" : "50px",
            height: isTouch ? "100px" : "50px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
        });
        this.appendChild(this.ripple);
        this.ripple.primary = true;
        [
            "touchcancel",
            "mouseout",
            "mouseup",
            "touchmove",
            "mousewheel",
            "wheel",
            "scroll",
        ].forEach((ev) => {
            document.addEventListener(ev, () => {
                clearTimeout(this.timer);
                this.stopAnimation();
                this.timer = undefined;
            }, { passive: true });
        });
    }
    bind(element) {
        if (element.longPress) {
            return;
        }
        element.longPress = true;
        element.addEventListener("contextmenu", (ev) => {
            const e = ev || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            e.cancelBubble = true;
            e.returnValue = false;
            return false;
        });
        const clickStart = (ev) => {
            if (this.cooldownStart) {
                return;
            }
            this.held = false;
            let x;
            let y;
            if (ev.touches) {
                x = ev.touches[0].pageX;
                y = ev.touches[0].pageY;
            }
            else {
                x = ev.pageX;
                y = ev.pageY;
            }
            this.timer = window.setTimeout(() => {
                this.startAnimation(x, y);
                this.held = true;
            }, this.holdTime);
            this.cooldownStart = true;
            window.setTimeout(() => (this.cooldownStart = false), 100);
        };
        const clickEnd = (ev) => {
            if (this.cooldownEnd ||
                (["touchend", "touchcancel"].includes(ev.type) &&
                    this.timer === undefined)) {
                return;
            }
            clearTimeout(this.timer);
            this.stopAnimation();
            this.timer = undefined;
            if (this.held) {
                element.dispatchEvent(new Event("ha-hold"));
            }
            else {
                element.dispatchEvent(new Event("ha-click"));
            }
            this.cooldownEnd = true;
            window.setTimeout(() => (this.cooldownEnd = false), 100);
        };
        element.addEventListener("touchstart", clickStart, { passive: true });
        element.addEventListener("touchend", clickEnd);
        element.addEventListener("touchcancel", clickEnd);
        // iOS 13 sends a complete normal touchstart-touchend series of events followed by a mousedown-click series.
        // That might be a bug, but until it's fixed, this should make long-press work.
        // If it's not a bug that is fixed, this might need updating with the next iOS version.
        // Note that all events (both touch and mouse) must be listened for in order to work on computers with both mouse and touchscreen.
        const isIOS13 = window.navigator.userAgent.match(/iPhone OS 13_/);
        if (!isIOS13) {
            element.addEventListener("mousedown", clickStart, { passive: true });
            element.addEventListener("click", clickEnd);
        }
    }
    startAnimation(x, y) {
        Object.assign(this.style, {
            left: `${x}px`,
            top: `${y}px`,
            display: null,
        });
        this.ripple.disabled = false;
        this.ripple.active = true;
        this.ripple.unbounded = true;
    }
    stopAnimation() {
        this.ripple.active = false;
        this.ripple.disabled = true;
        this.style.display = "none";
    }
}
customElements.define("long-press", LongPress);
const getLongPress = () => {
    const body = document.body;
    if (body.querySelector("long-press")) {
        return body.querySelector("long-press");
    }
    const longpress = document.createElement("long-press");
    body.appendChild(longpress);
    return longpress;
};
const longPressBind = (element) => {
    const longpress = getLongPress();
    if (!longpress) {
        return;
    }
    longpress.bind(element);
};
const longPress = Object(lit_html__WEBPACK_IMPORTED_MODULE_0__["directive"])(() => (part) => {
    longPressBind(part.committer.element);
});


/***/ }),

/***/ "./src/panels/lovelace/common/entity/toggle-entity.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/entity/toggle-entity.ts ***!
  \************************************************************/
/*! exports provided: toggleEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleEntity", function() { return toggleEntity; });
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _turn_on_off_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./turn-on-off-entity */ "./src/panels/lovelace/common/entity/turn-on-off-entity.ts");


const toggleEntity = (hass, entityId) => {
    const turnOn = _common_const__WEBPACK_IMPORTED_MODULE_0__["STATES_OFF"].includes(hass.states[entityId].state);
    return Object(_turn_on_off_entity__WEBPACK_IMPORTED_MODULE_1__["turnOnOffEntity"])(hass, entityId, turnOn);
};


/***/ }),

/***/ "./src/panels/lovelace/common/entity/turn-on-off-entities.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/common/entity/turn-on-off-entities.ts ***!
  \*******************************************************************/
/*! exports provided: turnOnOffEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOnOffEntities", function() { return turnOnOffEntities; });
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/const */ "./src/common/const.ts");


const turnOnOffEntities = (hass, entityIds, turnOn = true) => {
    const domainsToCall = {};
    entityIds.forEach((entityId) => {
        if (_common_const__WEBPACK_IMPORTED_MODULE_1__["STATES_OFF"].includes(hass.states[entityId].state) === turnOn) {
            const stateDomain = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId);
            const serviceDomain = ["cover", "lock"].includes(stateDomain)
                ? stateDomain
                : "homeassistant";
            if (!(serviceDomain in domainsToCall)) {
                domainsToCall[serviceDomain] = [];
            }
            domainsToCall[serviceDomain].push(entityId);
        }
    });
    Object.keys(domainsToCall).forEach((domain) => {
        let service;
        switch (domain) {
            case "lock":
                service = turnOn ? "unlock" : "lock";
                break;
            case "cover":
                service = turnOn ? "open_cover" : "close_cover";
                break;
            default:
                service = turnOn ? "turn_on" : "turn_off";
        }
        const entities = domainsToCall[domain];
        hass.callService(domain, service, { entity_id: entities });
    });
};


/***/ }),

/***/ "./src/panels/lovelace/common/entity/turn-on-off-entity.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/common/entity/turn-on-off-entity.ts ***!
  \*****************************************************************/
/*! exports provided: turnOnOffEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnOnOffEntity", function() { return turnOnOffEntity; });
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");

const turnOnOffEntity = (hass, entityId, turnOn = true) => {
    const stateDomain = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId);
    const serviceDomain = stateDomain === "group" ? "homeassistant" : stateDomain;
    let service;
    switch (stateDomain) {
        case "lock":
            service = turnOn ? "unlock" : "lock";
            break;
        case "cover":
            service = turnOn ? "open_cover" : "close_cover";
            break;
        default:
            service = turnOn ? "turn_on" : "turn_off";
    }
    return hass.callService(serviceDomain, service, { entity_id: entityId });
};


/***/ }),

/***/ "./src/panels/lovelace/common/evaluate-filter.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/evaluate-filter.ts ***!
  \*******************************************************/
/*! exports provided: evaluateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateFilter", function() { return evaluateFilter; });
const evaluateFilter = (stateObj, filter) => {
    const operator = filter.operator || "==";
    const value = filter.value || filter;
    const state = filter.attribute
        ? stateObj.attributes[filter.attribute]
        : stateObj.state;
    switch (operator) {
        case "==":
            return state === value;
        case "<=":
            return state <= value;
        case "<":
            return state < value;
        case ">=":
            return state >= value;
        case ">":
            return state > value;
        case "!=":
            return state !== value;
        case "regex": {
            return state.match(value);
        }
        default:
            return false;
    }
};


/***/ }),

/***/ "./src/panels/lovelace/common/generate-lovelace-config.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/common/generate-lovelace-config.ts ***!
  \****************************************************************/
/*! exports provided: generateDefaultViewConfig, generateLovelaceConfigFromHass, generateLovelaceConfigFromData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultViewConfig", function() { return generateDefaultViewConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLovelaceConfigFromHass", function() { return generateLovelaceConfigFromHass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateLovelaceConfigFromData", function() { return generateLovelaceConfigFromData; });
/* harmony import */ var _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/extract_views */ "./src/common/entity/extract_views.ts");
/* harmony import */ var _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/get_view_entities */ "./src/common/entity/get_view_entities.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/entity/split_by_groups */ "./src/common/entity/split_by_groups.ts");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/util/subscribe-one */ "./src/common/util/subscribe-one.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");











const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
const DOMAINS_BADGES = [
    "binary_sensor",
    "person",
    "device_tracker",
    "mailbox",
    "sensor",
    "sun",
    "timer",
];
const HIDE_DOMAIN = new Set([
    "persistent_notification",
    "configurator",
    "geo_location",
]);
let subscribedRegistries = false;
const splitByAreas = (areaEntries, deviceEntries, entityEntries, entities) => {
    const allEntities = Object.assign({}, entities);
    const areasWithEntities = [];
    for (const area of areaEntries) {
        const areaEntities = [];
        const areaDevices = new Set(deviceEntries
            .filter((device) => device.area_id === area.area_id)
            .map((device) => device.id));
        for (const entity of entityEntries) {
            if (areaDevices.has(
            // @ts-ignore
            entity.device_id) &&
                entity.entity_id in allEntities) {
                areaEntities.push(allEntities[entity.entity_id]);
                delete allEntities[entity.entity_id];
            }
        }
        if (areaEntities.length > 0) {
            areasWithEntities.push([area, areaEntities]);
        }
    }
    return {
        areasWithEntities,
        otherEntities: allEntities,
    };
};
const computeCards = (states, entityCardOptions) => {
    const cards = [];
    // For entity card
    const entities = [];
    for (const [entityId, stateObj] of states) {
        const domain = Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_6__["computeDomain"])(entityId);
        if (domain === "alarm_control_panel") {
            cards.push({
                type: "alarm-panel",
                entity: entityId,
            });
        }
        else if (domain === "camera") {
            cards.push({
                type: "picture-entity",
                entity: entityId,
            });
        }
        else if (domain === "climate") {
            cards.push({
                type: "thermostat",
                entity: entityId,
            });
        }
        else if (domain === "history_graph" && stateObj) {
            cards.push({
                type: "history-graph",
                entities: stateObj.attributes.entity_id,
                hours_to_show: stateObj.attributes.hours_to_show,
                title: stateObj.attributes.friendly_name,
                refresh_interval: stateObj.attributes.refresh,
            });
        }
        else if (domain === "media_player") {
            cards.push({
                type: "media-control",
                entity: entityId,
            });
        }
        else if (domain === "plant") {
            cards.push({
                type: "plant-status",
                entity: entityId,
            });
        }
        else if (domain === "weather") {
            cards.push({
                type: "weather-forecast",
                entity: entityId,
            });
        }
        else if (domain === "weblink" && stateObj) {
            const conf = {
                type: "weblink",
                url: stateObj.state,
                name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj),
            };
            if ("icon" in stateObj.attributes) {
                conf.icon = stateObj.attributes.icon;
            }
            entities.push(conf);
        }
        else {
            entities.push(entityId);
        }
    }
    if (entities.length > 0) {
        cards.unshift(Object.assign({ type: "entities", entities }, entityCardOptions));
    }
    return cards;
};
const computeDefaultViewStates = (entities) => {
    const states = {};
    Object.keys(entities).forEach((entityId) => {
        const stateObj = entities[entityId];
        if (!stateObj.attributes.hidden &&
            !HIDE_DOMAIN.has(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(stateObj))) {
            states[entityId] = entities[entityId];
        }
    });
    return states;
};
const generateDefaultViewConfig = (areaEntries, deviceEntries, entityEntries, entities, localize) => {
    const states = computeDefaultViewStates(entities);
    const path = "default_view";
    const title = "Home";
    const icon = undefined;
    // In the case of a default view, we want to use the group order attribute
    const groupOrders = {};
    Object.keys(states).forEach((entityId) => {
        const stateObj = states[entityId];
        if (stateObj.attributes.order) {
            groupOrders[entityId] = stateObj.attributes.order;
        }
    });
    const splittedByAreas = splitByAreas(areaEntries, deviceEntries, entityEntries, states);
    const config = generateViewConfig(localize, path, title, icon, splittedByAreas.otherEntities, groupOrders);
    const areaCards = [];
    splittedByAreas.areasWithEntities.forEach(([area, areaEntities]) => {
        areaCards.push(...computeCards(areaEntities.map((entity) => [entity.entity_id, entity]), {
            title: area.name,
            show_header_toggle: true,
        }));
    });
    config.cards.unshift(...areaCards);
    return config;
};
const generateViewConfig = (localize, path, title, icon, entities, groupOrders) => {
    const splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_3__["splitByGroups"])(entities);
    splitted.groups.sort((gr1, gr2) => groupOrders[gr1.entity_id] - groupOrders[gr2.entity_id]);
    const badgeEntities = {};
    const ungroupedEntitites = {};
    // Organize ungrouped entities in badges/ungrouped things
    Object.keys(splitted.ungrouped).forEach((entityId) => {
        const state = splitted.ungrouped[entityId];
        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["computeStateDomain"])(state);
        const coll = DOMAINS_BADGES.includes(domain)
            ? badgeEntities
            : ungroupedEntitites;
        if (!(domain in coll)) {
            coll[domain] = [];
        }
        coll[domain].push(state.entity_id);
    });
    let badges = [];
    DOMAINS_BADGES.forEach((domain) => {
        if (domain in badgeEntities) {
            badges = badges.concat(badgeEntities[domain]);
        }
    });
    let cards = [];
    splitted.groups.forEach((groupEntity) => {
        cards = cards.concat(computeCards(groupEntity.attributes.entity_id.map((entityId) => [entityId, entities[entityId]]), {
            title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(groupEntity),
            show_header_toggle: groupEntity.attributes.control !== "hidden",
        }));
    });
    Object.keys(ungroupedEntitites)
        .sort()
        .forEach((domain) => {
        cards = cards.concat(computeCards(ungroupedEntitites[domain].map((entityId) => [entityId, entities[entityId]]), {
            title: localize(`domain.${domain}`),
        }));
    });
    const view = {
        path,
        title,
        badges,
        cards,
    };
    if (icon) {
        view.icon = icon;
    }
    return view;
};
const generateLovelaceConfigFromHass = async (hass) => {
    // We want to keep the registry subscriptions alive after generating the UI
    // so that we don't serve up stale data after changing areas.
    if (!subscribedRegistries) {
        subscribedRegistries = true;
        Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_7__["subscribeAreaRegistry"])(hass.connection, () => undefined);
        Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeDeviceRegistry"])(hass.connection, () => undefined);
        Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeEntityRegistry"])(hass.connection, () => undefined);
    }
    const [areaEntries, deviceEntries, entityEntries] = await Promise.all([
        Object(_common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_8__["subscribeOne"])(hass.connection, _data_area_registry__WEBPACK_IMPORTED_MODULE_7__["subscribeAreaRegistry"]),
        Object(_common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_8__["subscribeOne"])(hass.connection, _data_device_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeDeviceRegistry"]),
        Object(_common_util_subscribe_one__WEBPACK_IMPORTED_MODULE_8__["subscribeOne"])(hass.connection, _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["subscribeEntityRegistry"]),
    ]);
    return generateLovelaceConfigFromData(hass.config, areaEntries, deviceEntries, entityEntries, hass.states, hass.localize);
};
const generateLovelaceConfigFromData = async (config, areaEntries, deviceEntries, entityEntries, entities, localize) => {
    const viewEntities = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_0__["extractViews"])(entities);
    const views = viewEntities.map((viewEntity) => {
        const states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_1__["getViewEntities"])(entities, viewEntity);
        // In the case of a normal view, we use group order as specified in view
        const groupOrders = {};
        Object.keys(states).forEach((entityId, idx) => {
            groupOrders[entityId] = idx;
        });
        return generateViewConfig(localize, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_4__["computeObjectId"])(viewEntity.entity_id), Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(viewEntity), viewEntity.attributes.icon, states, groupOrders);
    });
    let title = config.location_name;
    // User can override default view. If they didn't, we will add one
    // that contains all entities.
    if (viewEntities.length === 0 ||
        viewEntities[0].entity_id !== DEFAULT_VIEW_ENTITY_ID) {
        views.unshift(generateDefaultViewConfig(areaEntries, deviceEntries, entityEntries, entities, localize));
        // Add map of geo locations to default view if loaded
        if (config.components.includes("geo_location")) {
            if (views[0] && views[0].cards) {
                views[0].cards.push({
                    type: "map",
                    geo_location_sources: ["all"],
                });
            }
        }
        // Make sure we don't have Home as title and first tab.
        if (views.length > 1 && title === "Home") {
            title = "牧养犬";
        }
    }
    // User has no entities
    if (views.length === 1 && views[0].cards.length === 0) {
        __webpack_require__.e(/*! import() | hui-empty-state-card */ "hui-empty-state-card").then(__webpack_require__.bind(null, /*! ../cards/hui-empty-state-card */ "./src/panels/lovelace/cards/hui-empty-state-card.ts"));
        views[0].cards.push({
            type: "custom:hui-empty-state-card",
        });
    }
    return {
        title,
        views,
    };
};


/***/ }),

/***/ "./src/panels/lovelace/common/handle-click.ts":
/*!****************************************************!*\
  !*** ./src/panels/lovelace/common/handle-click.ts ***!
  \****************************************************/
/*! exports provided: handleClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClick", function() { return handleClick; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _src_panels_lovelace_common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/panels/lovelace/common/entity/toggle-entity */ "./src/panels/lovelace/common/entity/toggle-entity.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");




const handleClick = (node, hass, config, hold) => {
    let actionConfig;
    if (hold && config.hold_action) {
        actionConfig = config.hold_action;
    }
    else if (!hold && config.tap_action) {
        actionConfig = config.tap_action;
    }
    if (!actionConfig) {
        actionConfig = {
            action: "more-info",
        };
    }
    switch (actionConfig.action) {
        case "more-info":
            if (config.entity || config.camera_image) {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(node, "hass-more-info", {
                    entityId: config.entity ? config.entity : config.camera_image,
                });
            }
            break;
        case "navigate":
            if (actionConfig.navigation_path) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(node, actionConfig.navigation_path);
            }
            break;
        case "url":
            if (actionConfig.url_path) {
                window.open(actionConfig.url_path);
            }
            break;
        case "toggle":
            if (config.entity) {
                Object(_src_panels_lovelace_common_entity_toggle_entity__WEBPACK_IMPORTED_MODULE_2__["toggleEntity"])(hass, config.entity);
            }
            break;
        case "call-service": {
            if (!actionConfig.service) {
                Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("failure");
                return;
            }
            const [domain, service] = actionConfig.service.split(".", 2);
            hass.callService(domain, service, actionConfig.service_data);
        }
    }
    Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("light");
};


/***/ }),

/***/ "./src/panels/lovelace/common/has-changed.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/common/has-changed.ts ***!
  \***************************************************/
/*! exports provided: hasConfigOrEntityChanged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasConfigOrEntityChanged", function() { return hasConfigOrEntityChanged; });
// Check if config or Entity changed
function hasConfigOrEntityChanged(element, changedProps) {
    if (changedProps.has("_config")) {
        return true;
    }
    const oldHass = changedProps.get("hass");
    if (!oldHass) {
        return true;
    }
    return (oldHass.states[element._config.entity] !==
        element.hass.states[element._config.entity] ||
        oldHass.localize !== element.hass.localize);
}


/***/ }),

/***/ "./src/panels/lovelace/common/load-resources.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/load-resources.ts ***!
  \******************************************************/
/*! exports provided: loadLovelaceResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLovelaceResources", function() { return loadLovelaceResources; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

// CSS and JS should only be imported once. Modules and HTML are safe.
const CSS_CACHE = {};
const JS_CACHE = {};
const loadLovelaceResources = (resources, hassUrl) => resources.forEach((resource) => {
    const normalizedUrl = new URL(resource.url, hassUrl).toString();
    switch (resource.type) {
        case "css":
            if (normalizedUrl in CSS_CACHE) {
                break;
            }
            CSS_CACHE[normalizedUrl] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadCSS"])(normalizedUrl);
            break;
        case "js":
            if (normalizedUrl in JS_CACHE) {
                break;
            }
            JS_CACHE[normalizedUrl] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(normalizedUrl);
            break;
        case "module":
            Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadModule"])(normalizedUrl);
            break;
        case "html":
            __webpack_require__.e(/*! import() | import-href-polyfill */ "import-href-polyfill").then(__webpack_require__.bind(null, /*! ../../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js")).then(({ importHref }) => importHref(normalizedUrl));
            break;
        default:
            // tslint:disable-next-line
            console.warn(`Unknown resource type specified: ${resource.type}`);
    }
});


/***/ }),

/***/ "./src/panels/lovelace/common/process-config-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/process-config-entities.ts ***!
  \***************************************************************/
/*! exports provided: processConfigEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processConfigEntities", function() { return processConfigEntities; });
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
// Parse array of entity objects from config

const processConfigEntities = (entities) => {
    if (!entities || !Array.isArray(entities)) {
        throw new Error("Entities need to be an array");
    }
    return entities.map((entityConf, index) => {
        if (typeof entityConf === "object" &&
            !Array.isArray(entityConf) &&
            entityConf.type) {
            return entityConf;
        }
        let config;
        if (typeof entityConf === "string") {
            // tslint:disable-next-line:no-object-literal-type-assertion
            config = { entity: entityConf };
        }
        else if (typeof entityConf === "object" && !Array.isArray(entityConf)) {
            if (!entityConf.entity) {
                throw new Error(`Entity object at position ${index} is missing entity field.`);
            }
            config = entityConf;
        }
        else {
            throw new Error(`Invalid entity specified at position ${index}.`);
        }
        if (!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__["isValidEntityId"])(config.entity)) {
            throw new Error(`Invalid entity ID at position ${index}: ${config.entity}`);
        }
        return config;
    });
};


/***/ }),

/***/ "./src/panels/lovelace/common/validate-condition.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/common/validate-condition.ts ***!
  \**********************************************************/
/*! exports provided: checkConditionsMet, validateConditionalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkConditionsMet", function() { return checkConditionsMet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateConditionalConfig", function() { return validateConditionalConfig; });
function checkConditionsMet(conditions, hass) {
    return conditions.every((c) => {
        const state = hass.states[c.entity]
            ? hass.states[c.entity].state
            : "unavailable";
        return c.state ? state === c.state : state !== c.state_not;
    });
}
function validateConditionalConfig(conditions) {
    return conditions.every((c) => (c.entity && (c.state || c.state_not)));
}


/***/ }),

/***/ "./src/panels/lovelace/components/hui-entities-toggle.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-entities-toggle.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_entity_turn_on_off_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/turn-on-off-entities */ "./src/panels/lovelace/common/entity/turn-on-off-entities.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");






let HuiEntitiesToggle = class HuiEntitiesToggle extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("entities")) {
            this._toggleEntities = this.entities.filter((entityId) => entityId in this.hass.states &&
                _common_const__WEBPACK_IMPORTED_MODULE_3__["DOMAINS_TOGGLE"].has(entityId.split(".", 1)[0]));
        }
    }
    render() {
        if (!this._toggleEntities) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-switch
        aria-label="Toggle entities."
        ?checked="${this._toggleEntities.some((entityId) => {
            const stateObj = this.hass.states[entityId];
            return stateObj && stateObj.state === "on";
        })}"
        @change="${this._callService}"
      ></ha-switch>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        width: 38px;
        display: block;
      }
      ha-switch {
        padding: 13px 5px;
        margin: -4px -5px;
      }
    `;
    }
    _callService(ev) {
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_5__["forwardHaptic"])("light");
        const turnOn = ev.target.checked;
        Object(_common_entity_turn_on_off_entities__WEBPACK_IMPORTED_MODULE_4__["turnOnOffEntities"])(this.hass, this._toggleEntities, turnOn);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntitiesToggle.prototype, "entities", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntitiesToggle.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiEntitiesToggle.prototype, "_toggleEntities", void 0);
HuiEntitiesToggle = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-entities-toggle")
], HuiEntitiesToggle);


/***/ }),

/***/ "./src/panels/lovelace/components/hui-generic-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-generic-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/dom/toggle_attribute */ "./src/common/dom/toggle_attribute.ts");









class HuiGenericEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"] {
    constructor() {
        super(...arguments);
        this.showSecondary = true;
    }
    render() {
        if (!this.hass || !this.config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] ``;
        }
        const stateObj = this.config.entity
            ? this.hass.states[this.config.entity]
            : undefined;
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this.config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] `
      <state-badge
        .hass=${this.hass}
        .stateObj=${stateObj}
        .overrideIcon=${this.config.icon}
        .overrideImage=${this.config.image}
      ></state-badge>
      <div class="flex">
        <div class="info">
          ${this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(stateObj)}
          <div class="secondary">
            ${!this.showSecondary
            ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] `
                  <slot name="secondary"></slot>
                `
            : this.config.secondary_info === "entity-id"
                ? stateObj.entity_id
                : this.config.secondary_info === "last-changed"
                    ? lit_element__WEBPACK_IMPORTED_MODULE_2__["html"] `
                  <ha-relative-time
                    .hass=${this.hass}
                    .datetime=${stateObj.last_changed}
                  ></ha-relative-time>
                `
                    : ""}
          </div>
        </div>

        <slot></slot>
      </div>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass")) {
            Object(_common_dom_toggle_attribute__WEBPACK_IMPORTED_MODULE_8__["toggleAttribute"])(this, "rtl", Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass));
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"] `
      :host {
        display: flex;
        align-items: center;
      }
      .flex {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 0;
      }
      .info {
        flex: 1 0 60px;
      }
      .info,
      .info > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .flex ::slotted(*) {
        margin-left: 8px;
        min-width: 0;
      }
      .flex ::slotted([slot="secondary"]) {
        margin-left: 0;
      }
      .secondary,
      ha-relative-time {
        display: block;
        color: var(--secondary-text-color);
      }
      state-badge {
        flex: 0 0 40px;
      }
      :host([rtl]) .flex {
        margin-left: 0;
        margin-right: 16px;
      }
      :host([rtl]) .flex ::slotted(*) {
        margin-left: 0;
        margin-right: 8px;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], HuiGenericEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], HuiGenericEntityRow.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], HuiGenericEntityRow.prototype, "showSecondary", void 0);
customElements.define("hui-generic-entity-row", HuiGenericEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/components/hui-image.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/components/hui-image.ts ***!
  \*****************************************************/
/*! exports provided: HuiImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiImage", function() { return HuiImage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/util/parse-aspect-ratio */ "./src/common/util/parse-aspect-ratio.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");







const UPDATE_INTERVAL = 10000;
const DEFAULT_FILTER = "grayscale(100%)";
let HuiImage = class HuiImage extends lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
    connectedCallback() {
        super.connectedCallback();
        this._attached = true;
        if (this.cameraImage && this.cameraView !== "live") {
            this._startUpdateCameraInterval();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._attached = false;
        this._stopUpdateCameraInterval();
    }
    render() {
        const ratio = this.aspectRatio ? Object(_common_util_parse_aspect_ratio__WEBPACK_IMPORTED_MODULE_2__["default"])(this.aspectRatio) : null;
        const stateObj = this.hass && this.entity ? this.hass.states[this.entity] : undefined;
        const state = stateObj ? stateObj.state : "unavailable";
        // Figure out image source to use
        let imageSrc;
        let cameraObj;
        // Track if we are we using a fallback image, used for filter.
        let imageFallback = !this.stateImage;
        if (this.cameraImage) {
            if (this.cameraView === "live") {
                cameraObj =
                    this.hass && this.hass.states[this.cameraImage];
            }
            else {
                imageSrc = this._cameraImageSrc;
            }
        }
        else if (this.stateImage) {
            const stateImage = this.stateImage[state];
            if (stateImage) {
                imageSrc = stateImage;
            }
            else {
                imageSrc = this.image;
                imageFallback = true;
            }
        }
        else {
            imageSrc = this.image;
        }
        if (imageSrc) {
            imageSrc = this.hass.hassUrl(imageSrc);
        }
        // Figure out filter to use
        let filter = this.filter || "";
        if (this.stateFilter && this.stateFilter[state]) {
            filter = this.stateFilter[state];
        }
        if (!filter && this.entity) {
            const isOff = !stateObj || _common_const__WEBPACK_IMPORTED_MODULE_1__["STATES_OFF"].includes(state);
            filter = isOff && imageFallback ? DEFAULT_FILTER : "";
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <div
        style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
            paddingBottom: ratio && ratio.w > 0 && ratio.h > 0
                ? `${((100 * ratio.h) / ratio.w).toFixed(2)}%`
                : "",
        })}
        class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
            ratio: Boolean(ratio && ratio.w > 0 && ratio.h > 0),
        })}
      >
        ${this.cameraImage && this.cameraView === "live"
            ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
              <ha-camera-stream
                .hass="${this.hass}"
                .stateObj="${cameraObj}"
              ></ha-camera-stream>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
              <img
                id="image"
                src=${imageSrc}
                @error=${this._onImageError}
                @load=${this._onImageLoad}
                style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
                filter,
                display: this._loadError ? "none" : "block",
            })}
              />
            `}
        <div
          id="brokenImage"
          style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_4__["styleMap"])({
            height: `${this._lastImageHeight || "100"}px`,
            display: this._loadError ? "block" : "none",
        })}
        ></div>
      </div>
    `;
    }
    updated(changedProps) {
        if (changedProps.has("cameraImage") && this.cameraView !== "live") {
            this._updateCameraImageSrc();
            this._startUpdateCameraInterval();
            return;
        }
    }
    _startUpdateCameraInterval() {
        this._stopUpdateCameraInterval();
        if (this.cameraImage && this._attached) {
            this._cameraUpdater = window.setInterval(() => this._updateCameraImageSrc(), UPDATE_INTERVAL);
        }
    }
    _stopUpdateCameraInterval() {
        if (this._cameraUpdater) {
            clearInterval(this._cameraUpdater);
        }
    }
    _onImageError() {
        this._loadError = true;
    }
    async _onImageLoad() {
        this._loadError = false;
        await this.updateComplete;
        this._lastImageHeight = this._image.offsetHeight;
    }
    async _updateCameraImageSrc() {
        if (!this.hass || !this.cameraImage) {
            return;
        }
        const cameraState = this.hass.states[this.cameraImage];
        if (!cameraState) {
            this._onImageError();
            return;
        }
        this._cameraImageSrc = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.cameraImage);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["css"] `
      img {
        display: block;
        height: auto;
        transition: filter 0.2s linear;
        width: 100%;
      }

      .ratio {
        position: relative;
        width: 100%;
        height: 0;
      }

      .ratio img,
      .ratio div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #brokenImage {
        background: grey url("/static/images/image-broken.svg") center/36px
          no-repeat;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "entity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "stateImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "cameraImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "cameraView", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "aspectRatio", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "filter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "stateFilter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "_loadError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HuiImage.prototype, "_cameraImageSrc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["query"])("img")
], HuiImage.prototype, "_image", void 0);
HuiImage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("hui-image")
], HuiImage);



/***/ }),

/***/ "./src/panels/lovelace/components/hui-timestamp-display.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-timestamp-display.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");






const FORMATS = {
    date: _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"],
    datetime: _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_3__["default"],
    time: _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_4__["default"],
};
const INTERVAL_FORMAT = ["relative", "total"];
let HuiTimestampDisplay = class HuiTimestampDisplay extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    connectedCallback() {
        super.connectedCallback();
        this._connected = true;
        this._startInterval();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._connected = false;
        this._clearInterval();
    }
    render() {
        if (!this.ts || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        if (isNaN(this.ts.getTime())) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        Invalid date
      `;
        }
        const format = this._format;
        if (INTERVAL_FORMAT.includes(format)) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        ${this._relative}
      `;
        }
        if (format in FORMATS) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        ${FORMATS[format](this.ts, this.hass.language)}
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      Invalid format
    `;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (!changedProperties.has("format") || !this._connected) {
            return;
        }
        if (INTERVAL_FORMAT.includes("relative")) {
            this._startInterval();
        }
        else {
            this._clearInterval();
        }
    }
    get _format() {
        return this.format || "relative";
    }
    _startInterval() {
        this._clearInterval();
        if (this._connected && INTERVAL_FORMAT.includes(this._format)) {
            this._updateRelative();
            this._interval = window.setInterval(() => this._updateRelative(), 1000);
        }
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = undefined;
        }
    }
    _updateRelative() {
        if (this.ts && this.hass.localize) {
            this._relative =
                this._format === "relative"
                    ? Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__["default"])(this.ts, this.hass.localize)
                    : (this._relative = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(), this.hass.localize, {
                        compareTime: this.ts,
                        includeTense: false,
                    }));
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimestampDisplay.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimestampDisplay.prototype, "ts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimestampDisplay.prototype, "format", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimestampDisplay.prototype, "_relative", void 0);
HuiTimestampDisplay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-timestamp-display")
], HuiTimestampDisplay);


/***/ }),

/***/ "./src/panels/lovelace/components/hui-unavailable.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/components/hui-unavailable.ts ***!
  \***********************************************************/
/*! exports provided: HuiUnavailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnavailable", function() { return HuiUnavailable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


let HuiUnavailable = class HuiUnavailable extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="disabled-overlay">
        <div>${this.text}</div>
      </div>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .disabled-overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--state-icon-unavailable-color);
        opacity: 0.5;
        z-index: 50;
      }

      .disabled-overlay div {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 24px;
        color: var(--primary-text-color);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiUnavailable.prototype, "text", void 0);
HuiUnavailable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-unavailable")
], HuiUnavailable);



/***/ }),

/***/ "./src/panels/lovelace/components/hui-warning-element.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-warning-element.ts ***!
  \***************************************************************/
/*! exports provided: HuiWarningElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiWarningElement", function() { return HuiWarningElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");



let HuiWarningElement = class HuiWarningElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-icon icon="hass:alert" .title="${this.label}"></ha-icon>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-icon {
        color: #fce588;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiWarningElement.prototype, "label", void 0);
HuiWarningElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-warning-element")
], HuiWarningElement);



/***/ }),

/***/ "./src/panels/lovelace/components/hui-warning.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/components/hui-warning.ts ***!
  \*******************************************************/
/*! exports provided: HuiWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiWarning", function() { return HuiWarning; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


let HuiWarning = class HuiWarning extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <slot></slot>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
    `;
    }
};
HuiWarning = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-warning")
], HuiWarning);



/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts ***!
  \*************************************************************************/
/*! exports provided: showEditCardDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditCardDialog", function() { return showEditCardDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;
const dialogShowEvent = "show-edit-card";
const dialogTag = "hui-dialog-edit-card";
const registerEditCardDialog = (element) => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
    dialogShowEvent,
    dialogTag,
    dialogImport: () => Promise.all(/*! import() | hui-dialog-edit-card */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~0273678c"), __webpack_require__.e(7), __webpack_require__.e("hui-dialog-edit-card")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-edit-card */ "./src/panels/lovelace/editor/card-editor/hui-dialog-edit-card.ts")),
});
const showEditCardDialog = (element, editCardDialogParams) => {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditCardDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, editCardDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/config-util.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/config-util.ts ***!
  \***************************************************/
/*! exports provided: addCard, replaceCard, deleteCard, swapCard, moveCard, addView, replaceView, swapView, deleteView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCard", function() { return addCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceCard", function() { return replaceCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCard", function() { return deleteCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapCard", function() { return swapCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveCard", function() { return moveCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addView", function() { return addView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceView", function() { return replaceView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapView", function() { return swapView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteView", function() { return deleteView; });
const addCard = (config, path, cardConfig) => {
    const [viewIndex] = path;
    const views = [];
    config.views.forEach((viewConf, index) => {
        if (index !== viewIndex) {
            views.push(config.views[index]);
            return;
        }
        const cards = viewConf.cards
            ? [...viewConf.cards, cardConfig]
            : [cardConfig];
        views.push(Object.assign(Object.assign({}, viewConf), { cards }));
    });
    return Object.assign(Object.assign({}, config), { views });
};
const replaceCard = (config, path, cardConfig) => {
    const [viewIndex, cardIndex] = path;
    const views = [];
    config.views.forEach((viewConf, index) => {
        if (index !== viewIndex) {
            views.push(config.views[index]);
            return;
        }
        views.push(Object.assign(Object.assign({}, viewConf), { cards: (viewConf.cards || []).map((origConf, ind) => ind === cardIndex ? cardConfig : origConf) }));
    });
    return Object.assign(Object.assign({}, config), { views });
};
const deleteCard = (config, path) => {
    const [viewIndex, cardIndex] = path;
    const views = [];
    config.views.forEach((viewConf, index) => {
        if (index !== viewIndex) {
            views.push(config.views[index]);
            return;
        }
        views.push(Object.assign(Object.assign({}, viewConf), { cards: (viewConf.cards || []).filter((_origConf, ind) => ind !== cardIndex) }));
    });
    return Object.assign(Object.assign({}, config), { views });
};
const swapCard = (config, path1, path2) => {
    const card1 = config.views[path1[0]].cards[path1[1]];
    const card2 = config.views[path2[0]].cards[path2[1]];
    const origView1 = config.views[path1[0]];
    const newView1 = Object.assign(Object.assign({}, origView1), { cards: origView1.cards.map((origCard, index) => index === path1[1] ? card2 : origCard) });
    const origView2 = path1[0] === path2[0] ? newView1 : config.views[path2[0]];
    const newView2 = Object.assign(Object.assign({}, origView2), { cards: origView2.cards.map((origCard, index) => index === path2[1] ? card1 : origCard) });
    return Object.assign(Object.assign({}, config), { views: config.views.map((origView, index) => index === path2[0] ? newView2 : index === path1[0] ? newView1 : origView) });
};
const moveCard = (config, fromPath, toPath) => {
    if (fromPath[0] === toPath[0]) {
        throw new Error("You can not move a card to the view it is in.");
    }
    const fromView = config.views[fromPath[0]];
    const card = fromView.cards[fromPath[1]];
    const newView1 = Object.assign(Object.assign({}, fromView), { cards: (fromView.cards || []).filter((_origConf, ind) => ind !== fromPath[1]) });
    const toView = config.views[toPath[0]];
    const cards = toView.cards ? [...toView.cards, card] : [card];
    const newView2 = Object.assign(Object.assign({}, toView), { cards });
    return Object.assign(Object.assign({}, config), { views: config.views.map((origView, index) => index === toPath[0]
            ? newView2
            : index === fromPath[0]
                ? newView1
                : origView) });
};
const addView = (config, viewConfig) => (Object.assign(Object.assign({}, config), { views: config.views.concat(viewConfig) }));
const replaceView = (config, viewIndex, viewConfig) => (Object.assign(Object.assign({}, config), { views: config.views.map((origView, index) => index === viewIndex ? viewConfig : origView) }));
const swapView = (config, path1, path2) => {
    const view1 = config.views[path1];
    const view2 = config.views[path2];
    return Object.assign(Object.assign({}, config), { views: config.views.map((origView, index) => index === path2 ? view1 : index === path1 ? view2 : origView) });
};
const deleteView = (config, viewIndex) => (Object.assign(Object.assign({}, config), { views: config.views.filter((_origView, index) => index !== viewIndex) }));


/***/ }),

/***/ "./src/panels/lovelace/editor/lovelace-editor/show-edit-lovelace-dialog.ts":
/*!*********************************************************************************!*\
  !*** ./src/panels/lovelace/editor/lovelace-editor/show-edit-lovelace-dialog.ts ***!
  \*********************************************************************************/
/*! exports provided: showEditLovelaceDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditLovelaceDialog", function() { return showEditLovelaceDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;
const dialogShowEvent = "show-edit-lovelace";
const dialogTag = "hui-dialog-edit-lovelace";
const registerEditLovelaceDialog = (element) => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
    dialogShowEvent,
    dialogTag,
    dialogImport: () => Promise.all(/*! import() | hui-dialog-edit-lovelace */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-edit-lovelace")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-edit-lovelace */ "./src/panels/lovelace/editor/lovelace-editor/hui-dialog-edit-lovelace.ts")),
});
const showEditLovelaceDialog = (element, lovelace) => {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditLovelaceDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, lovelace);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/show-save-config-dialog.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/editor/show-save-config-dialog.ts ***!
  \***************************************************************/
/*! exports provided: showSaveDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveDialog", function() { return showSaveDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const dialogShowEvent = "show-save-config";
const dialogTag = "hui-dialog-save-config";
let registeredDialog = false;
const showSaveDialog = (element, saveDialogParams) => {
    if (!registeredDialog) {
        registeredDialog = true;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
            dialogShowEvent,
            dialogTag,
            dialogImport: () => Promise.all(/*! import() | hui-dialog-save-config */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-save-config")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-save-config */ "./src/panels/lovelace/editor/hui-dialog-save-config.ts")),
        });
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, saveDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/editor/view-editor/show-edit-view-dialog.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/lovelace/editor/view-editor/show-edit-view-dialog.ts ***!
  \*************************************************************************/
/*! exports provided: showEditViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEditViewDialog", function() { return showEditViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;
const dialogShowEvent = "show-edit-view";
const dialogTag = "hui-dialog-edit-view";
const registerEditViewDialog = (element) => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
    dialogShowEvent,
    dialogTag,
    dialogImport: () => Promise.all(/*! import() | hui-dialog-edit-view */[__webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~hui-dialog-edit-view"), __webpack_require__.e("hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge-card-editor~hu~90f96f72"), __webpack_require__.e("hui-dialog-edit-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-edit-view */ "./src/panels/lovelace/editor/view-editor/hui-dialog-edit-view.ts")),
});
const showEditViewDialog = (element, editViewDialogParams) => {
    if (!registeredDialog) {
        registeredDialog = true;
        registerEditViewDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, editViewDialogParams);
};


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-conditional-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-conditional-element.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lovelace/common/validate-condition */ "./src/panels/lovelace/common/validate-condition.ts");
/* harmony import */ var _cards_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards/picture-elements/create-styled-hui-element */ "./src/panels/lovelace/cards/picture-elements/create-styled-hui-element.ts");


class HuiConditionalElement extends HTMLElement {
    constructor() {
        super(...arguments);
        this._elements = [];
    }
    setConfig(config) {
        if (!config.conditions ||
            !Array.isArray(config.conditions) ||
            !config.elements ||
            !Array.isArray(config.elements) ||
            !Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_0__["validateConditionalConfig"])(config.conditions)) {
            throw new Error("Error in card configuration.");
        }
        if (this._elements.length > 0) {
            this._elements.map((el) => {
                if (el.parentElement) {
                    el.parentElement.removeChild(el);
                }
            });
            this._elements = [];
        }
        this._config = config;
        this._config.elements.map((elementConfig) => {
            this._elements.push(Object(_cards_picture_elements_create_styled_hui_element__WEBPACK_IMPORTED_MODULE_1__["createStyledHuiElement"])(elementConfig));
        });
        this.updateElements();
    }
    set hass(hass) {
        this._hass = hass;
        this.updateElements();
    }
    updateElements() {
        if (!this._hass || !this._config) {
            return;
        }
        const visible = Object(_lovelace_common_validate_condition__WEBPACK_IMPORTED_MODULE_0__["checkConditionsMet"])(this._config.conditions, this._hass);
        this._elements.map((el) => {
            if (visible) {
                el.hass = this._hass;
                if (!el.parentElement) {
                    this.appendChild(el);
                }
            }
            else if (el.parentElement) {
                el.parentElement.removeChild(el);
            }
        });
    }
}
customElements.define("hui-conditional-element", HuiConditionalElement);


/***/ }),

/***/ "./src/panels/lovelace/elements/hui-icon-element.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-icon-element.ts ***!
  \**********************************************************/
/*! exports provided: HuiIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiIconElement", function() { return HuiIconElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");






let HuiIconElement = class HuiIconElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config.icon) {
            throw Error("Invalid Configuration: 'icon' required");
        }
        this._config = config;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-icon
        .icon="${this._config.icon}"
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config)}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__["longPress"])()}"
      ></ha-icon>
    `;
    }
    _handleTap() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, true);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        cursor: pointer;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiIconElement.prototype, "_config", void 0);
HuiIconElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-icon-element")
], HuiIconElement);



/***/ }),

/***/ "./src/panels/lovelace/elements/hui-image-element.ts":
/*!***********************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-image-element.ts ***!
  \***********************************************************/
/*! exports provided: HuiImageElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiImageElement", function() { return HuiImageElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-image */ "./src/panels/lovelace/components/hui-image.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");






let HuiImageElement = class HuiImageElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw Error("Error in element configuration");
        }
        this.classList.toggle("clickable", config.tap_action && config.tap_action.action !== "none");
        this._config = config;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-image
        .hass="${this.hass}"
        .entity="${this._config.entity}"
        .image="${this._config.image}"
        .stateImage="${this._config.state_image}"
        .cameraImage="${this._config.camera_image}"
        .filter="${this._config.filter}"
        .stateFilter="${this._config.state_filter}"
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_3__["computeTooltip"])(this.hass, this._config)}"
        .aspectRatio="${this._config.aspect_ratio}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_5__["longPress"])()}"
      ></hui-image>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host(.clickable) {
        cursor: pointer;
        overflow: hidden;
        -webkit-touch-callout: none !important;
      }
      hui-image {
        -webkit-user-select: none !important;
      }
    `;
    }
    _handleTap() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_4__["handleClick"])(this, this.hass, this._config, true);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiImageElement.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiImageElement.prototype, "_config", void 0);
HuiImageElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-image-element")
], HuiImageElement);



/***/ }),

/***/ "./src/panels/lovelace/elements/hui-service-button-element.ts":
/*!********************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-service-button-element.ts ***!
  \********************************************************************/
/*! exports provided: HuiServiceButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiServiceButtonElement", function() { return HuiServiceButtonElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");



let HuiServiceButtonElement = class HuiServiceButtonElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static get properties() {
        return { _config: {} };
    }
    setConfig(config) {
        if (!config || !config.service) {
            throw Error("Invalid Configuration: 'service' required");
        }
        [this._domain, this._service] = config.service.split(".", 2);
        if (!this._domain) {
            throw Error("Invalid Configuration: 'service' does not have a domain");
        }
        if (!this._service) {
            throw Error("Invalid Configuration: 'service' does not have a service name");
        }
        this._config = config;
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-call-service-button
        .hass="${this.hass}"
        .domain="${this._domain}"
        .service="${this._service}"
        .serviceData="${this._config.service_data}"
        >${this._config.title}</ha-call-service-button
      >
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-call-service-button {
        color: var(--primary-color);
        white-space: nowrap;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiServiceButtonElement.prototype, "_config", void 0);
HuiServiceButtonElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-service-button-element")
], HuiServiceButtonElement);



/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-badge-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-badge-element.ts ***!
  \*****************************************************************/
/*! exports provided: HuiStateBadgeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStateBadgeElement", function() { return HuiStateBadgeElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






let HuiStateBadgeElement = class HuiStateBadgeElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config.entity) {
            throw Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning-element
          label="${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}"
        ></hui-warning-element>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-state-label-badge
        .hass="${this.hass}"
        .state="${stateObj}"
        .title="${this._config.title === undefined
            ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj)
            : this._config.title === null
                ? ""
                : this._config.title}"
      ></ha-state-label-badge>
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiStateBadgeElement.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiStateBadgeElement.prototype, "_config", void 0);
HuiStateBadgeElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-state-badge-element")
], HuiStateBadgeElement);



/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-icon-element.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-icon-element.ts ***!
  \****************************************************************/
/*! exports provided: HuiStateIconElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiStateIconElement", function() { return HuiStateIconElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








let HuiStateIconElement = class HuiStateIconElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config.entity) {
            throw Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}
        ></hui-warning-element>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <state-badge
        .stateObj="${stateObj}"
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_4__["computeTooltip"])(this.hass, this._config)}"
        @ha-click="${this._handleClick}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_6__["longPress"])()}"
        .overrideIcon=${this._config.icon}
      ></state-badge>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        cursor: pointer;
      }
    `;
    }
    _handleClick() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_5__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_5__["handleClick"])(this, this.hass, this._config, true);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiStateIconElement.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiStateIconElement.prototype, "_config", void 0);
HuiStateIconElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-state-icon-element")
], HuiStateIconElement);



/***/ }),

/***/ "./src/panels/lovelace/elements/hui-state-label-element.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/elements/hui-state-label-element.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _components_hui_warning_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning-element */ "./src/panels/lovelace/components/hui-warning-element.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_compute_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/compute-tooltip */ "./src/panels/lovelace/common/compute-tooltip.ts");
/* harmony import */ var _common_handle_click__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/handle-click */ "./src/panels/lovelace/common/handle-click.ts");
/* harmony import */ var _common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/directives/long-press-directive */ "./src/panels/lovelace/common/directives/long-press-directive.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");









let HuiStateLabelElement = class HuiStateLabelElement extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config.entity) {
            throw Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_8__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning-element
          label=${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}
        ></hui-warning-element>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div
        .title="${Object(_common_compute_tooltip__WEBPACK_IMPORTED_MODULE_5__["computeTooltip"])(this.hass, this._config)}"
        @ha-click="${this._handleTap}"
        @ha-hold="${this._handleHold}"
        .longPress="${Object(_common_directives_long_press_directive__WEBPACK_IMPORTED_MODULE_7__["longPress"])()}"
      >
        ${this._config.prefix}${stateObj
            ? Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)
            : "-"}${this._config.suffix}
      </div>
    `;
    }
    _handleTap() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_6__["handleClick"])(this, this.hass, this._config, false);
    }
    _handleHold() {
        Object(_common_handle_click__WEBPACK_IMPORTED_MODULE_6__["handleClick"])(this, this.hass, this._config, true);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        cursor: pointer;
      }
      div {
        padding: 8px;
        white-space: nowrap;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiStateLabelElement.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiStateLabelElement.prototype, "_config", void 0);
HuiStateLabelElement = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-state-label-element")
], HuiStateLabelElement);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-climate-entity-row.ts ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_climate_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-climate-state */ "./src/components/ha-climate-state.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






let HuiClimateEntityRow = class HuiClimateEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this.hass || !this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <ha-climate-state
          .hass="${this.hass}"
          .stateObj="${stateObj}"
        ></ha-climate-state>
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-climate-state {
        text-align: right;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiClimateEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiClimateEntityRow.prototype, "_config", void 0);
HuiClimateEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-climate-entity-row")
], HuiClimateEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-cover-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_ha_cover_controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-cover-controls */ "./src/components/ha-cover-controls.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








let HuiCoverEntityRow = class HuiCoverEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${Object(_util_cover_model__WEBPACK_IMPORTED_MODULE_6__["isTiltOnly"])(stateObj)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-cover-tilt-controls
                .hass="${this.hass}"
                .stateObj="${stateObj}"
              ></ha-cover-tilt-controls>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-cover-controls
                .hass="${this.hass}"
                .stateObj="${stateObj}"
              ></ha-cover-controls>
            `}
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-cover-controls,
      ha-cover-tilt-controls {
        margin-right: -0.57em;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCoverEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCoverEntityRow.prototype, "_config", void 0);
HuiCoverEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-cover-entity-row")
], HuiCoverEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-group-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-group-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








let HuiGroupEntityRow = class HuiGroupEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${this._computeCanToggle(stateObj.attributes.entity_id)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${stateObj}"
              ></ha-entity-toggle>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div>
                ${Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
              </div>
            `}
      </hui-generic-entity-row>
    `;
    }
    _computeCanToggle(entityIds) {
        return entityIds.some((entityId) => _common_const__WEBPACK_IMPORTED_MODULE_6__["DOMAINS_TOGGLE"].has(entityId.split(".", 1)[0]));
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGroupEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiGroupEntityRow.prototype, "_config", void 0);
HuiGroupEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-group-entity-row")
], HuiGroupEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-datetime-entity-row.ts ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_paper_time_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/paper-time-input.js */ "./src/components/paper-time-input.js");
/* harmony import */ var _components_ha_date_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-date-input */ "./src/components/ha-date-input.ts");
/* harmony import */ var _data_input_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/input_datetime */ "./src/data/input_datetime.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







let HuiInputDatetimeEntityRow = class HuiInputDatetimeEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${stateObj.attributes.has_date
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-date-input
                .year=${stateObj.attributes.year}
                .month=${("0" + stateObj.attributes.month).slice(-2)}
                .day=${("0" + stateObj.attributes.day).slice(-2)}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
              ></ha-date-input>
              ${stateObj.attributes.has_time ? "," : ""}
            `
            : ``}
        ${stateObj.attributes.has_time
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-time-input
                .hour=${stateObj.state === "unknown"
                ? ""
                : ("0" + stateObj.attributes.hour).slice(-2)}
                .min=${stateObj.state === "unknown"
                ? ""
                : ("0" + stateObj.attributes.minute).slice(-2)}
                .amPm=${false}
                @change=${this._selectedValueChanged}
                @click=${this._stopEventPropagation}
                hide-label
                format="24"
              ></paper-time-input>
            `
            : ``}
      </hui-generic-entity-row>
    `;
    }
    _stopEventPropagation(ev) {
        ev.stopPropagation();
    }
    get _timeInputEl() {
        return this.shadowRoot.querySelector("paper-time-input");
    }
    get _dateInputEl() {
        return this.shadowRoot.querySelector("ha-date-input");
    }
    _selectedValueChanged(ev) {
        const stateObj = this.hass.states[this._config.entity];
        const time = this._timeInputEl !== null
            ? this._timeInputEl.value.trim() + ":00"
            : undefined;
        const date = this._dateInputEl !== null ? this._dateInputEl.value : undefined;
        if (time !== stateObj.state) {
            Object(_data_input_datetime__WEBPACK_IMPORTED_MODULE_5__["setInputDateTimeValue"])(this.hass, stateObj.entity_id, time, date);
        }
        ev.target.blur();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputDatetimeEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputDatetimeEntityRow.prototype, "_config", void 0);
HuiInputDatetimeEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-datetime-entity-row")
], HuiInputDatetimeEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-number-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_ha_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-slider */ "./src/components/ha-slider.js");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








let HuiInputNumberEntityRow = class HuiInputNumberEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this._updated && !this._loaded) {
            this._initialLoad();
        }
    }
    firstUpdated() {
        this._updated = true;
        if (this.isConnected && !this._loaded) {
            this._initialLoad();
        }
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${stateObj.attributes.mode === "slider"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="flex">
                  <ha-slider
                    .dir="${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTLDirection"])(this.hass)}"
                    .step="${Number(stateObj.attributes.step)}"
                    .min="${Number(stateObj.attributes.min)}"
                    .max="${Number(stateObj.attributes.max)}"
                    .value="${Number(stateObj.state)}"
                    pin
                    @change="${this._selectedValueChanged}"
                    ignore-bar-touch
                    id="input"
                  ></ha-slider>
                  <span class="state">
                    ${Number(stateObj.state)}
                    ${stateObj.attributes.unit_of_measurement}
                  </span>
                </div>
              `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <paper-input
                  no-label-float
                  auto-validate
                  .pattern="[0-9]+([\\.][0-9]+)?"
                  .step="${Number(stateObj.attributes.step)}"
                  .min="${Number(stateObj.attributes.min)}"
                  .max="${Number(stateObj.attributes.max)}"
                  .value="${Number(stateObj.state)}"
                  type="number"
                  @change="${this._selectedValueChanged}"
                  id="input"
                ></paper-input>
              `}
        </div>
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .flex {
        display: flex;
        align-items: center;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      paper-input {
        text-align: end;
      }
    `;
    }
    async _initialLoad() {
        this._loaded = true;
        await this.updateComplete;
        const element = this.shadowRoot.querySelector(".state");
        if (!element || !this.parentElement) {
            return;
        }
        element.hidden = this.parentElement.clientWidth <= 350;
    }
    get _inputElement() {
        // linter recommended the following syntax
        return this.shadowRoot.getElementById("input");
    }
    _selectedValueChanged() {
        const element = this._inputElement;
        const stateObj = this.hass.states[this._config.entity];
        if (element.value !== stateObj.state) {
            Object(_data_input_text__WEBPACK_IMPORTED_MODULE_6__["setValue"])(this.hass, stateObj.entity_id, element.value);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputNumberEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputNumberEntityRow.prototype, "_config", void 0);
HuiInputNumberEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-number-entity-row")
], HuiInputNumberEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-select-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/input-select */ "./src/data/input-select.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/dom/stop_propagation */ "./src/common/dom/stop_propagation.ts");












let HuiInputSelectEntityRow = class HuiInputSelectEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_9__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this.hass || !this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <state-badge .stateObj="${stateObj}"></state-badge>
      <ha-paper-dropdown-menu
        .label=${this._config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj)}
        .value=${stateObj.state}
        @iron-select=${this._selectedChanged}
        @click=${_common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_11__["stopPropagation"]}
      >
        <paper-listbox slot="dropdown-content">
          ${stateObj.attributes.options.map((option) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-item>${option}</paper-item>
            `)}
        </paper-listbox>
      </ha-paper-dropdown-menu>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this.hass || !this._config) {
            return;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return;
        }
        // Update selected after rendering the items or else it won't work in Firefox
        this.shadowRoot.querySelector("paper-listbox").selected = stateObj.attributes.options.indexOf(stateObj.state);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: flex;
        align-items: center;
      }
      ha-paper-dropdown-menu {
        margin-left: 16px;
        flex: 1;
      }

      paper-item {
        cursor: pointer;
        min-width: 200px;
      }
    `;
    }
    _selectedChanged(ev) {
        const stateObj = this.hass.states[this._config.entity];
        const option = ev.target.selectedItem.innerText.trim();
        if (option === stateObj.state) {
            return;
        }
        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_10__["forwardHaptic"])("light");
        Object(_data_input_select__WEBPACK_IMPORTED_MODULE_8__["setInputSelectOption"])(this.hass, stateObj.entity_id, option);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputSelectEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputSelectEntityRow.prototype, "_config", void 0);
HuiInputSelectEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-select-entity-row")
], HuiInputSelectEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-input-text-entity-row.ts ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _data_input_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/input_text */ "./src/data/input_text.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






let HuiInputTextEntityRow = class HuiInputTextEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <paper-input
          no-label-float
          .value="${stateObj.state}"
          .minlength="${stateObj.attributes.min}"
          .maxlength="${stateObj.attributes.max}"
          .autoValidate="${stateObj.attributes.pattern}"
          .pattern="${stateObj.attributes.pattern}"
          .type="${stateObj.attributes.mode}"
          @change="${this._selectedValueChanged}"
          placeholder="(empty value)"
        ></paper-input>
      </hui-generic-entity-row>
    `;
    }
    get _inputEl() {
        return this.shadowRoot.querySelector("paper-input");
    }
    _selectedValueChanged(ev) {
        const element = this._inputEl;
        const stateObj = this.hass.states[this._config.entity];
        if (element.value !== stateObj.state) {
            Object(_data_input_text__WEBPACK_IMPORTED_MODULE_4__["setValue"])(this.hass, stateObj.entity_id, element.value);
        }
        ev.target.blur();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputTextEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiInputTextEntityRow.prototype, "_config", void 0);
HuiInputTextEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-input-text-entity-row")
], HuiInputTextEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-lock-entity-row.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-lock-entity-row.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");





let HuiLockEntityRow = class HuiLockEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_4__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <mwc-button @click="${this._callService}">
          ${stateObj.state === "locked"
            ? this.hass.localize("ui.card.lock.unlock")
            : this.hass.localize("ui.card.lock.lock")}
        </mwc-button>
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      mwc-button {
        margin-right: -0.57em;
      }
    `;
    }
    _callService(ev) {
        ev.stopPropagation();
        const stateObj = this.hass.states[this._config.entity];
        this.hass.callService("lock", stateObj.state === "locked" ? "unlock" : "lock", { entity_id: stateObj.entity_id });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiLockEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiLockEntityRow.prototype, "_config", void 0);
HuiLockEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-lock-entity-row")
], HuiLockEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-media-player-entity-row.ts":
/*!************************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-media-player-entity-row.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _data_media_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/media-player */ "./src/data/media-player.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");








let HuiMediaPlayerEntityRow = class HuiMediaPlayerEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error("Invalid Configuration: 'entity' required");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_7__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this.hass || !this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row
        .hass="${this.hass}"
        .config="${this._config}"
        .showSecondary=${false}
      >
        ${_data_media_player__WEBPACK_IMPORTED_MODULE_6__["OFF_STATES"].includes(stateObj.state)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div>
                ${this.hass.localize(`state.media_player.${stateObj.state}`) ||
                this.hass.localize(`state.default.${stateObj.state}`) ||
                stateObj.state}
              </div>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="controls">
                ${stateObj.state !== "playing" &&
                !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["SUPPORTS_PLAY"])
                ? ""
                : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <paper-icon-button
                        icon="${this._computeControlIcon(stateObj)}"
                        @click="${this._playPause}"
                      ></paper-icon-button>
                    `}
                ${Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["SUPPORT_NEXT_TRACK"])
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <paper-icon-button
                        icon="hass:skip-next"
                        @click="${this._nextTrack}"
                      ></paper-icon-button>
                    `
                : ""}
              </div>
              <div slot="secondary">${this._computeMediaTitle(stateObj)}</div>
            `}
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .controls {
        white-space: nowrap;
      }
    `;
    }
    _computeControlIcon(stateObj) {
        if (stateObj.state !== "playing") {
            return "hass:play";
        }
        // tslint:disable-next-line:no-bitwise
        return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_5__["supportsFeature"])(stateObj, _data_media_player__WEBPACK_IMPORTED_MODULE_6__["SUPPORT_PAUSE"])
            ? "hass:pause"
            : "hass:stop";
    }
    _computeMediaTitle(stateObj) {
        let prefix;
        let suffix;
        switch (stateObj.attributes.media_content_type) {
            case "music":
                prefix = stateObj.attributes.media_artist;
                suffix = stateObj.attributes.media_title;
                break;
            case "tvshow":
                prefix = stateObj.attributes.media_series_title;
                suffix = stateObj.attributes.media_title;
                break;
            default:
                prefix =
                    stateObj.attributes.media_title ||
                        stateObj.attributes.app_name ||
                        stateObj.state;
                suffix = "";
        }
        return prefix && suffix ? `${prefix}: ${suffix}` : prefix || suffix || "";
    }
    _playPause(ev) {
        ev.stopPropagation();
        this.hass.callService("media_player", "media_play_pause", {
            entity_id: this._config.entity,
        });
    }
    _nextTrack(ev) {
        ev.stopPropagation();
        this.hass.callService("media_player", "media_next_track", {
            entity_id: this._config.entity,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiMediaPlayerEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiMediaPlayerEntityRow.prototype, "_config", void 0);
HuiMediaPlayerEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-media-player-entity-row")
], HuiMediaPlayerEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-scene-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-scene-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






let HuiSceneEntityRow = class HuiSceneEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${stateObj.attributes.can_cancel
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${stateObj}"
              ></ha-entity-toggle>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button @click="${this._callService}">
                ${this.hass.localize("ui.card.scene.activate")}
              </mwc-button>
            `}
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      mwc-button {
        margin-right: -0.57em;
      }
    `;
    }
    _callService(ev) {
        ev.stopPropagation();
        this.hass.callService("scene", "turn_on", {
            entity_id: this._config.entity,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSceneEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSceneEntityRow.prototype, "_config", void 0);
HuiSceneEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-scene-entity-row")
], HuiSceneEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-script-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-script-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






let HuiScriptEntityRow = class HuiScriptEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${stateObj.attributes.can_cancel
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${stateObj}"
              ></ha-entity-toggle>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button @click="${this._callService}">
                ${this.hass.localize("ui.card.script.execute")}
              </mwc-button>
            `}
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      mwc-button {
        margin-right: -0.57em;
      }
    `;
    }
    _callService(ev) {
        ev.stopPropagation();
        this.hass.callService("script", "turn_on", {
            entity_id: this._config.entity,
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiScriptEntityRow.prototype, "_config", void 0);
HuiScriptEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-script-entity-row")
], HuiScriptEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-sensor-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-sensor-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_timestamp_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-timestamp-display */ "./src/panels/lovelace/components/hui-timestamp-display.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");







let HuiSensorEntityRow = class HuiSensorEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${stateObj.attributes.device_class === "timestamp" &&
            stateObj.state !== "unavailable"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <hui-timestamp-display
                  .hass="${this.hass}"
                  .ts="${new Date(stateObj.state)}"
                  .format="${this._config.format}"
                ></hui-timestamp-display>
              `
            : Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
        </div>
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      div {
        text-align: right;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSensorEntityRow.prototype, "_config", void 0);
HuiSensorEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-sensor-entity-row")
], HuiSensorEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-text-entity-row.ts":
/*!****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-text-entity-row.ts ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");






let HuiTextEntityRow = class HuiTextEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_5__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>
          ${Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_4__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
        </div>
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      div {
        text-align: right;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTextEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTextEntityRow.prototype, "_config", void 0);
HuiTextEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-text-entity-row")
], HuiTextEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-timer-entity-row.ts ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







let HuiTimerEntityRow = class HuiTimerEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._clearInterval();
    }
    connectedCallback() {
        super.connectedCallback();
        if (this._config && this._config.entity) {
            const stateObj = this.hass.states[this._config.entity];
            if (stateObj) {
                this._startInterval(stateObj);
            }
        }
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        <div>${this._computeDisplay(stateObj)}</div>
      </hui-generic-entity-row>
    `;
    }
    shouldUpdate(changedProps) {
        if (changedProps.has("_timeRemaining")) {
            return true;
        }
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("hass")) {
            const stateObj = this.hass.states[this._config.entity];
            const oldHass = changedProps.get("hass");
            const oldStateObj = oldHass
                ? oldHass.states[this._config.entity]
                : undefined;
            if (oldStateObj !== stateObj) {
                this._startInterval(stateObj);
            }
            else if (!stateObj) {
                this._clearInterval();
            }
        }
    }
    _clearInterval() {
        if (this._interval) {
            window.clearInterval(this._interval);
            this._interval = undefined;
        }
    }
    _startInterval(stateObj) {
        this._clearInterval();
        this._calculateRemaining(stateObj);
        if (stateObj.state === "active") {
            this._interval = window.setInterval(() => this._calculateRemaining(stateObj), 1000);
        }
    }
    _calculateRemaining(stateObj) {
        this._timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__["timerTimeRemaining"])(stateObj);
    }
    _computeDisplay(stateObj) {
        if (!stateObj) {
            return null;
        }
        if (stateObj.state === "idle" || this._timeRemaining === 0) {
            return this.hass.localize("state.timer." + stateObj.state);
        }
        let display = Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__["default"])(this._timeRemaining || 0);
        if (stateObj.state === "paused") {
            display += ` (${this.hass.localize("state.timer.paused")})`;
        }
        return display;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimerEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimerEntityRow.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiTimerEntityRow.prototype, "_timeRemaining", void 0);
HuiTimerEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-timer-entity-row")
], HuiTimerEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/entity-rows/hui-toggle-entity-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/entity-rows/hui-toggle-entity-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_hui_generic_entity_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hui-generic-entity-row */ "./src/panels/lovelace/components/hui-generic-entity-row.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_hui_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hui-warning */ "./src/panels/lovelace/components/hui-warning.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_has_changed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/has-changed */ "./src/panels/lovelace/common/has-changed.ts");







let HuiToggleEntityRow = class HuiToggleEntityRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Configuration error");
        }
        this._config = config;
    }
    shouldUpdate(changedProps) {
        return Object(_common_has_changed__WEBPACK_IMPORTED_MODULE_6__["hasConfigOrEntityChanged"])(this, changedProps);
    }
    render() {
        if (!this._config || !this.hass) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hui-warning
          >${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}</hui-warning
        >
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hui-generic-entity-row .hass="${this.hass}" .config="${this._config}">
        ${stateObj.state === "on" || stateObj.state === "off"
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-entity-toggle
                .hass="${this.hass}"
                .stateObj="${stateObj}"
              ></ha-entity-toggle>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div>
                ${Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__["computeStateDisplay"])(this.hass.localize, stateObj, this.hass.language)}
              </div>
            `}
      </hui-generic-entity-row>
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiToggleEntityRow.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiToggleEntityRow.prototype, "_config", void 0);
HuiToggleEntityRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-toggle-entity-row")
], HuiToggleEntityRow);


/***/ }),

/***/ "./src/panels/lovelace/ha-panel-lovelace.ts":
/*!**************************************************!*\
  !*** ./src/panels/lovelace/ha-panel-lovelace.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/lovelace */ "./src/data/lovelace.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _layouts_hass_error_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/hass-error-screen */ "./src/layouts/hass-error-screen.ts");
/* harmony import */ var _hui_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hui-root */ "./src/panels/lovelace/hui-root.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _editor_show_save_config_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor/show-save-config-dialog */ "./src/panels/lovelace/editor/show-save-config-dialog.ts");
/* harmony import */ var _common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/generate-lovelace-config */ "./src/panels/lovelace/common/generate-lovelace-config.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/toast */ "./src/util/toast.ts");










let editorLoaded = false;
class LovelacePanel extends lit_element__WEBPACK_IMPORTED_MODULE_6__["LitElement"] {
    constructor() {
        super();
        this._state = "loading";
        this._ignoreNextUpdateEvent = false;
        this._closeEditor = this._closeEditor.bind(this);
    }
    render() {
        const state = this._state;
        if (state === "loaded") {
            return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"] `
        <hui-root
          .hass="${this.hass}"
          .lovelace="${this.lovelace}"
          .route="${this.route}"
          .columns="${this._columns}"
          .narrow=${this.narrow}
          @config-refresh="${this._forceFetchConfig}"
        ></hui-root>
      `;
        }
        if (state === "error") {
            return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"] `
        <hass-error-screen title="Lovelace" .error="${this._errorMsg}">
          <mwc-button on-click="_forceFetchConfig"
            >${this.hass.localize("ui.panel.lovelace.reload_lovelace")}</mwc-button
          >
        </hass-error-screen>
      `;
        }
        if (state === "yaml-editor") {
            return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"] `
        <hui-editor
          .hass="${this.hass}"
          .lovelace="${this.lovelace}"
          .closeEditor="${this._closeEditor}"
        ></hui-editor>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_6__["html"] `
      <hass-loading-screen
        rootnav
        .hass=${this.hass}
        .narrow=${this.narrow}
      ></hass-loading-screen>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("narrow")) {
            this._updateColumns();
            return;
        }
        if (!changedProps.has("hass")) {
            return;
        }
        const oldHass = changedProps.get("hass");
        if (oldHass && this.hass.dockedSidebar !== oldHass.dockedSidebar) {
            this._updateColumns();
        }
    }
    firstUpdated() {
        this._fetchConfig(false);
        // we don't want to unsub as we want to stay informed of updates
        Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_2__["subscribeLovelaceUpdates"])(this.hass.connection, () => this._lovelaceChanged());
        // reload lovelace on reconnect so we are sure we have the latest config
        window.addEventListener("connection-status", (ev) => {
            if (ev.detail === "connected") {
                this._fetchConfig(false);
            }
        });
        this._updateColumns = this._updateColumns.bind(this);
        this.mqls = [300, 600, 900, 1200].map((width) => {
            const mql = matchMedia(`(min-width: ${width}px)`);
            mql.addListener(this._updateColumns);
            return mql;
        });
        this._updateColumns();
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.lovelace &&
            this.hass &&
            this.lovelace.language !== this.hass.language) {
            // language has been changed, rebuild UI
            this._setLovelaceConfig(this.lovelace.config, this.lovelace.mode);
        }
        else if (this.lovelace && this.lovelace.mode === "generated") {
            // When lovelace is generated, we re-generate each time a user goes
            // to the states panel to make sure new entities are shown.
            this._state = "loading";
            this._regenerateConfig();
        }
    }
    async _regenerateConfig() {
        const conf = await Object(_common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_8__["generateLovelaceConfigFromHass"])(this.hass);
        this._setLovelaceConfig(conf, "generated");
        this._state = "loaded";
    }
    _closeEditor() {
        this._state = "loaded";
    }
    _updateColumns() {
        const matchColumns = this.mqls.reduce((cols, mql) => cols + Number(mql.matches), 0);
        // Do -1 column if the menu is docked and open
        this._columns = Math.max(1, matchColumns -
            Number(!this.narrow && this.hass.dockedSidebar === "docked"));
    }
    _lovelaceChanged() {
        if (this._ignoreNextUpdateEvent) {
            this._ignoreNextUpdateEvent = false;
            return;
        }
        Object(_util_toast__WEBPACK_IMPORTED_MODULE_9__["showToast"])(this, {
            message: this.hass.localize("ui.panel.lovelace.changed_toast.message"),
            action: {
                action: () => this._fetchConfig(false),
                text: this.hass.localize("ui.panel.lovelace.changed_toast.refresh"),
            },
            duration: 0,
            dismissable: false,
        });
    }
    _forceFetchConfig() {
        this._fetchConfig(true);
    }
    async _fetchConfig(forceDiskRefresh) {
        let conf;
        let confMode = this.panel.config.mode;
        let confProm;
        const llWindow = window;
        // On first load, we speed up loading page by having LL promise ready
        if (llWindow.llConfProm) {
            confProm = llWindow.llConfProm;
            llWindow.llConfProm = undefined;
        }
        else {
            // Refreshing a YAML config can trigger an update event. We will ignore
            // all update events while fetching the config and for 2 seconds after the cnofig is back.
            // We ignore because we already have the latest config.
            if (this.lovelace && this.lovelace.mode === "yaml") {
                this._ignoreNextUpdateEvent = true;
            }
            confProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_2__["fetchConfig"])(this.hass.connection, forceDiskRefresh);
        }
        try {
            conf = await confProm;
        }
        catch (err) {
            if (err.code !== "config_not_found") {
                // tslint:disable-next-line
                console.log(err);
                this._state = "error";
                this._errorMsg = err.message;
                return;
            }
            conf = await Object(_common_generate_lovelace_config__WEBPACK_IMPORTED_MODULE_8__["generateLovelaceConfigFromHass"])(this.hass);
            confMode = "generated";
        }
        finally {
            // Ignore updates for another 2 seconds.
            if (this.lovelace && this.lovelace.mode === "yaml") {
                setTimeout(() => {
                    this._ignoreNextUpdateEvent = false;
                }, 2000);
            }
        }
        this._state = "loaded";
        this._setLovelaceConfig(conf, confMode);
    }
    _checkLovelaceConfig(config) {
        // Somehow there can be badges with value null, we remove those
        config.views.forEach((view) => {
            if (view.badges) {
                view.badges = view.badges.filter(Boolean);
            }
        });
    }
    _setLovelaceConfig(config, mode) {
        this._checkLovelaceConfig(config);
        this.lovelace = {
            config,
            mode,
            editMode: this.lovelace ? this.lovelace.editMode : false,
            language: this.hass.language,
            enableFullEditMode: () => {
                if (!editorLoaded) {
                    editorLoaded = true;
                    Promise.all(/*! import() | lovelace-yaml-editor */[__webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"), __webpack_require__.e(7), __webpack_require__.e("lovelace-yaml-editor")]).then(__webpack_require__.bind(null, /*! ./hui-editor */ "./src/panels/lovelace/hui-editor.ts"));
                }
                this._state = "yaml-editor";
            },
            setEditMode: (editMode) => {
                if (!editMode || this.lovelace.mode !== "generated") {
                    this._updateLovelace({ editMode });
                    return;
                }
                Object(_editor_show_save_config_dialog__WEBPACK_IMPORTED_MODULE_7__["showSaveDialog"])(this, {
                    lovelace: this.lovelace,
                });
            },
            saveConfig: async (newConfig) => {
                const { config: previousConfig, mode: previousMode } = this.lovelace;
                this._checkLovelaceConfig(newConfig);
                try {
                    // Optimistic update
                    this._updateLovelace({
                        config: newConfig,
                        mode: "storage",
                    });
                    this._ignoreNextUpdateEvent = true;
                    await Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_2__["saveConfig"])(this.hass, newConfig);
                }
                catch (err) {
                    // tslint:disable-next-line
                    console.error(err);
                    // Rollback the optimistic update
                    this._updateLovelace({
                        config: previousConfig,
                        mode: previousMode,
                    });
                    throw err;
                }
            },
        };
    }
    _updateLovelace(props) {
        this.lovelace = Object.assign(Object.assign({}, this.lovelace), props);
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "panel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "route", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "_columns", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "_state", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "_errorMsg", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_6__["property"])()
], LovelacePanel.prototype, "lovelace", void 0);
customElements.define("ha-panel-lovelace", LovelacePanel);


/***/ }),

/***/ "./src/panels/lovelace/hui-root.ts":
/*!*****************************************!*\
  !*** ./src/panels/lovelace/hui-root.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_scroll_effects_effects_waterfall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-scroll-effects/effects/waterfall */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/dom/scroll-to-target */ "./src/common/dom/scroll-to-target.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _components_ha_start_voice_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/ha-start-voice-button */ "./src/components/ha-start-voice-button.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_next__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-next */ "./src/components/ha-paper-icon-button-arrow-next.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./editor/config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _views_hui_view__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/hui-view */ "./src/panels/lovelace/views/hui-view.ts");
/* harmony import */ var _views_hui_panel_view__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/hui-panel-view */ "./src/panels/lovelace/views/hui-panel-view.ts");
/* harmony import */ var _editor_view_editor_show_edit_view_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./editor/view-editor/show-edit-view-dialog */ "./src/panels/lovelace/editor/view-editor/show-edit-view-dialog.ts");
/* harmony import */ var _editor_lovelace_editor_show_edit_lovelace_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./editor/lovelace-editor/show-edit-lovelace-dialog */ "./src/panels/lovelace/editor/lovelace-editor/show-edit-lovelace-dialog.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_load_resources__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/load-resources */ "./src/panels/lovelace/common/load-resources.ts");


























// Not a duplicate import, this one is for type
// tslint:disable-next-line








class HUIRoot extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super();
        // The view can trigger a re-render when it knows that certain
        // web components have been loaded.
        this._debouncedConfigChanged = Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_21__["debounce"])(() => this._selectView(this._curView, true), 100, false);
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.classList.toggle("disable-text-select", /Chrome/.test(navigator.userAgent) && /Android/.test(navigator.userAgent));
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
    <app-route .route="${this.route}" pattern="/:view" data="${this._routeData}" @data-changed="${this._routeDataChanged}"></app-route>
    <ha-app-layout id="layout">
      <app-header slot="header" effects="waterfall" class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "edit-mode": this._editMode,
        })}" fixed condenses>
        ${this._editMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <app-toolbar class="edit-mode">
                  <paper-icon-button
                    icon="hass:close"
                    @click="${this._editModeDisable}"
                  ></paper-icon-button>
                  <div main-title>
                    ${this.config.title ||
                this.hass.localize("ui.panel.lovelace.editor.header")}
                    <paper-icon-button
                      icon="hass:pencil"
                      class="edit-icon"
                      @click="${this._editLovelace}"
                    ></paper-icon-button>
                  </div>
                  <paper-icon-button
                    icon="hass:help-circle"
                    title="Help"
                    @click="${this._handleHelp}"
                  ></paper-icon-button>
                  <paper-menu-button
                    no-animations
                    horizontal-align="right"
                    horizontal-offset="-5"
                  >
                    <paper-icon-button
                      aria-label="Open Lovelace menu"
                      icon="hass:dots-vertical"
                      slot="dropdown-trigger"
                    ></paper-icon-button>
                    <paper-listbox
                      @iron-select="${this._deselect}"
                      slot="dropdown-content"
                    >
                      ${ false /* No unused entities available in the demo */
                ? undefined
                : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                              @tap="${this._handleUnusedEntities}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                            </paper-item>
                          `}
                      <paper-item @tap="${this.lovelace.enableFullEditMode}">
                        ${this.hass.localize("ui.panel.lovelace.editor.menu.raw_editor")}
                      </paper-item>
                    </paper-listbox>
                  </paper-menu-button>
                </app-toolbar>
              `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <app-toolbar>
                  <ha-menu-button
                    .hass=${this.hass}
                    .narrow=${this.narrow}
                  ></ha-menu-button>
                  <div main-title>${this.config.title || "牧养犬"}</div>
                  <ha-start-voice-button
                    .hass="${this.hass}"
                  ></ha-start-voice-button>
                  <paper-menu-button
                    no-animations
                    horizontal-align="right"
                    horizontal-offset="-5"
                  >
                    <paper-icon-button
                      icon="hass:dots-vertical"
                      slot="dropdown-trigger"
                    ></paper-icon-button>
                    <paper-listbox
                      @iron-select="${this._deselect}"
                      slot="dropdown-content"
                    >
                      ${this._yamlMode
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.refresh")}
                              @tap="${this._handleRefresh}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.refresh")}
                            </paper-item>
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                              @tap="${this._handleUnusedEntities}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.unused_entities")}
                            </paper-item>
                          `
                : ""}
                      ${this.hass.user.is_admin
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                            <paper-item
                              aria-label=${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                              @tap="${this._editModeEnable}"
                            >
                              ${this.hass.localize("ui.panel.lovelace.menu.configure_ui")}
                            </paper-item>
                          `
                : ""}
                      <paper-item
                        aria-label=${this.hass.localize("ui.panel.lovelace.menu.help")}
                        @tap="${this._handleHelp}"
                      >
                        ${this.hass.localize("ui.panel.lovelace.menu.help")}
                      </paper-item>
                    </paper-listbox>
                  </paper-menu-button>
                </app-toolbar>
              `}

        ${this.lovelace.config.views.length > 1 || this._editMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div sticky>
                  <paper-tabs
                    scrollable
                    .selected="${this._curView}"
                    @iron-activate="${this._handleViewSelected}"
                    dir="${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_31__["computeRTLDirection"])(this.hass)}"
                  >
                    ${this.lovelace.config.views.map((view) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                        <paper-tab
                          aria-label="${view.title}"
                          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                "hide-tab": Boolean(!this._editMode &&
                    view.visible !== undefined &&
                    ((Array.isArray(view.visible) &&
                        !view.visible.some((e) => e.user === this.hass.user.id)) ||
                        view.visible === false)),
            })}"
                        >
                          ${this._editMode
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                <ha-paper-icon-button-arrow-prev
                                  title="Move view left"
                                  class="edit-icon view"
                                  @click="${this._moveViewLeft}"
                                  ?disabled="${this._curView === 0}"
                                ></ha-paper-icon-button-arrow-prev>
                              `
                : ""}
                          ${view.icon
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                <ha-icon
                                  title="${view.title}"
                                  .icon="${view.icon}"
                                ></ha-icon>
                              `
                : view.title || "Unnamed view"}
                          ${this._editMode
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                <ha-icon
                                  title="Edit view"
                                  class="edit-icon view"
                                  icon="hass:pencil"
                                  @click="${this._editView}"
                                ></ha-icon>
                                <ha-paper-icon-button-arrow-next
                                  title="Move view right"
                                  class="edit-icon view"
                                  @click="${this._moveViewRight}"
                                  ?disabled="${this._curView +
                    1 ===
                    this.lovelace.config.views.length}"
                                ></ha-paper-icon-button-arrow-next>
                              `
                : ""}
                        </paper-tab>
                      `)}
                    ${this._editMode
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                          <paper-icon-button
                            id="add-view"
                            @click="${this._addView}"
                            title="${this.hass.localize("ui.panel.lovelace.editor.edit_view.add")}"
                            icon="hass:plus"
                          ></paper-icon-button>
                        `
                : ""}
                  </paper-tabs>
                </div>
              `
            : ""}
      </app-header>
      <div id='view' class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            "tabs-hidden": this.lovelace.config.views.length < 2,
        })}" @ll-rebuild='${this._debouncedConfigChanged}'></div>
    </app-header-layout>
    `;
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_30__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          --dark-color: #455a64;
          --text-dark-color: #fff;
        }

        :host(.disable-text-select) {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
        }
        paper-menu-button {
          padding: 0;
        }
        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
        .edit-mode {
          background-color: var(--dark-color, #455a64);
          color: var(--text-dark-color);
        }
        .edit-mode div[main-title] {
          pointer-events: auto;
        }
        paper-tab.iron-selected .edit-icon {
          display: inline-flex;
        }
        .edit-icon {
          color: var(--accent-color);
          padding-left: 8px;
        }
        .edit-icon[disabled] {
          color: var(--disabled-text-color);
        }
        .edit-icon.view {
          display: none;
        }
        #add-view {
          position: absolute;
          height: 44px;
        }
        #add-view ha-icon {
          background-color: var(--accent-color);
          border-radius: 5px;
          margin-top: 4px;
        }
        app-toolbar a {
          color: var(--text-primary-color, white);
        }
        mwc-button.warning:not([disabled]) {
          color: var(--google-red-500);
        }
        #view {
          min-height: calc(100vh - 112px);
          /**
          * Since we only set min-height, if child nodes need percentage
          * heights they must use absolute positioning so we need relative
          * positioning here.
          *
          * https://www.w3.org/TR/CSS2/visudet.html#the-height-property
          */
          position: relative;
          display: flex;
        }
        #view > * {
          /**
          * The view could get larger than the window in Firefox
          * to prevent that we set the max-width to 100%
          * flex-grow: 1 and flex-basis: 100% should make sure the view
          * stays full width.
          *
          * https://github.com/home-assistant/home-assistant-polymer/pull/3806
          */
          flex: 1 1 100%;
          max-width: 100%;
        }
        #view.tabs-hidden {
          min-height: calc(100vh - 64px);
        }
        paper-item {
          cursor: pointer;
        }
        .hide-tab {
          display: none;
        }
      `,
        ];
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const view = this._viewRoot;
        const huiView = view.lastChild;
        if (changedProperties.has("columns") &&
            huiView &&
            huiView instanceof _views_hui_view__WEBPACK_IMPORTED_MODULE_25__["HUIView"]) {
            huiView.columns = this.columns;
        }
        if (changedProperties.has("hass") && huiView) {
            huiView.hass = this.hass;
        }
        let newSelectView;
        let force = false;
        if (changedProperties.has("route")) {
            const views = this.config && this.config.views;
            if (this.route.path === "" &&
                this.route.prefix === "/lovelace" &&
                views) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, `/lovelace/${views[0].path || 0}`, true);
                newSelectView = 0;
            }
            else if (this._routeData.view === "hass-unused-entities") {
                newSelectView = "hass-unused-entities";
            }
            else if (this._routeData.view) {
                const selectedView = this._routeData.view;
                const selectedViewInt = parseInt(selectedView, 10);
                let index = 0;
                for (let i = 0; i < views.length; i++) {
                    if (views[i].path === selectedView || i === selectedViewInt) {
                        index = i;
                        break;
                    }
                }
                newSelectView = index;
            }
        }
        if (changedProperties.has("lovelace")) {
            const oldLovelace = changedProperties.get("lovelace");
            if (!oldLovelace || oldLovelace.config !== this.lovelace.config) {
                if (this.lovelace.config.resources) {
                    Object(_common_load_resources__WEBPACK_IMPORTED_MODULE_32__["loadLovelaceResources"])(this.lovelace.config.resources, this.hass.auth.data.hassUrl);
                }
                // On config change, recreate the current view from scratch.
                force = true;
                // Recalculate to see if we need to adjust content area for tab bar
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
            }
            if (!oldLovelace || oldLovelace.editMode !== this.lovelace.editMode) {
                // Leave unused entities when leaving edit mode
                if (this.lovelace.mode === "storage" &&
                    this._routeData.view === "hass-unused-entities") {
                    const views = this.config && this.config.views;
                    Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, `/lovelace/${views[0].path || 0}`);
                    newSelectView = 0;
                }
                // On edit mode change, recreate the current view from scratch
                force = true;
                // Recalculate to see if we need to adjust content area for tab bar
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
            }
        }
        if (newSelectView !== undefined || force) {
            if (force && newSelectView === undefined) {
                newSelectView = this._curView;
            }
            // Will allow for ripples to start rendering
            Object(_common_util_render_status__WEBPACK_IMPORTED_MODULE_29__["afterNextRender"])(() => this._selectView(newSelectView, force));
        }
    }
    get config() {
        return this.lovelace.config;
    }
    get _yamlMode() {
        return this.lovelace.mode === "yaml";
    }
    get _editMode() {
        return this.lovelace.editMode;
    }
    get _layout() {
        return this.shadowRoot.getElementById("layout");
    }
    get _viewRoot() {
        return this.shadowRoot.getElementById("view");
    }
    _routeDataChanged(ev) {
        this._routeData = ev.detail.value;
    }
    _handleRefresh() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "config-refresh");
    }
    _handleUnusedEntities() {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, `/lovelace/hass-unused-entities`);
    }
    _deselect(ev) {
        ev.target.selected = null;
    }
    _handleHelp() {
        window.open("https://www.home-assistant.io/lovelace/", "_blank");
    }
    _editModeEnable() {
        if (this._yamlMode) {
            window.alert("The edit UI is not available when in YAML mode.");
            return;
        }
        this.lovelace.setEditMode(true);
        if (this.config.views.length < 2) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
        }
    }
    _editModeDisable() {
        this.lovelace.setEditMode(false);
        if (this.config.views.length < 2) {
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_23__["fireEvent"])(this, "iron-resize");
        }
    }
    _editLovelace() {
        Object(_editor_lovelace_editor_show_edit_lovelace_dialog__WEBPACK_IMPORTED_MODULE_28__["showEditLovelaceDialog"])(this, this.lovelace);
    }
    _editView() {
        Object(_editor_view_editor_show_edit_view_dialog__WEBPACK_IMPORTED_MODULE_27__["showEditViewDialog"])(this, {
            lovelace: this.lovelace,
            viewIndex: this._curView,
        });
    }
    _moveViewLeft() {
        const lovelace = this.lovelace;
        const oldIndex = this._curView;
        const newIndex = this._curView - 1;
        this._curView = newIndex;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_24__["swapView"])(lovelace.config, oldIndex, newIndex));
    }
    _moveViewRight() {
        const lovelace = this.lovelace;
        const oldIndex = this._curView;
        const newIndex = this._curView + 1;
        this._curView = newIndex;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_24__["swapView"])(lovelace.config, oldIndex, newIndex));
    }
    _addView() {
        Object(_editor_view_editor_show_edit_view_dialog__WEBPACK_IMPORTED_MODULE_27__["showEditViewDialog"])(this, {
            lovelace: this.lovelace,
        });
    }
    _handleViewSelected(ev) {
        const viewIndex = ev.detail.selected;
        if (viewIndex !== this._curView) {
            const path = this.config.views[viewIndex].path || viewIndex;
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_22__["navigate"])(this, `/lovelace/${path}`);
        }
        Object(_common_dom_scroll_to_target__WEBPACK_IMPORTED_MODULE_15__["default"])(this, this._layout.header.scrollTarget);
    }
    _selectView(viewIndex, force) {
        if (!force && this._curView === viewIndex) {
            return;
        }
        viewIndex = viewIndex === undefined ? 0 : viewIndex;
        this._curView = viewIndex;
        if (force) {
            this._viewCache = {};
        }
        // Recreate a new element to clear the applied themes.
        const root = this._viewRoot;
        if (root.lastChild) {
            root.removeChild(root.lastChild);
        }
        if (viewIndex === "hass-unused-entities") {
            const unusedEntities = document.createElement("hui-unused-entities");
            // Wait for promise to resolve so that the element has been upgraded.
            Promise.all(/*! import() | hui-unused-entities */[__webpack_require__.e("vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"), __webpack_require__.e("hui-unused-entities")]).then(__webpack_require__.bind(null, /*! ./editor/unused-entities/hui-unused-entities */ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts")).then(() => {
                unusedEntities.hass = this.hass;
                unusedEntities.lovelace = this.lovelace;
                unusedEntities.narrow = this.narrow;
            });
            if (this.config.background) {
                unusedEntities.style.setProperty("--lovelace-background", this.config.background);
            }
            root.append(unusedEntities);
            return;
        }
        let view;
        const viewConfig = this.config.views[viewIndex];
        if (!viewConfig) {
            this._editModeEnable();
            return;
        }
        if (!force && this._viewCache[viewIndex]) {
            view = this._viewCache[viewIndex];
        }
        else {
            if (viewConfig.panel && viewConfig.cards && viewConfig.cards.length > 0) {
                view = document.createElement("hui-panel-view");
                view.config = viewConfig;
            }
            else {
                view = document.createElement("hui-view");
                view.lovelace = this.lovelace;
                view.columns = this.columns;
                view.index = viewIndex;
            }
            this._viewCache[viewIndex] = view;
        }
        view.hass = this.hass;
        const configBackground = viewConfig.background || this.config.background;
        if (configBackground) {
            view.style.setProperty("--lovelace-background", configBackground);
        }
        root.append(view);
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "lovelace", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "columns", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "route", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "_routeData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIRoot.prototype, "_curView", void 0);
customElements.define("hui-root", HUIRoot);


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-call-service-row.ts":
/*!******************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-call-service-row.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_call_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/call-service */ "./src/panels/lovelace/common/call-service.ts");





let HuiCallServiceRow = class HuiCallServiceRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config || !config.name || !config.service) {
            throw new Error("Error in card configuration.");
        }
        this._config = Object.assign({ icon: "hass:remote", action_name: "Run" }, config);
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div>${this._config.name}</div>
        <mwc-button @click="${this._callService}"
          >${this._config.action_name}</mwc-button
        >
      </div>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        overflow: hidden;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .flex div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      mwc-button {
        margin-right: -0.57em;
      }
    `;
    }
    _callService() {
        Object(_common_call_service__WEBPACK_IMPORTED_MODULE_4__["callService"])(this._config, this.hass);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCallServiceRow.prototype, "_config", void 0);
HuiCallServiceRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-call-service-row")
], HuiCallServiceRow);


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-cast-row.ts":
/*!**********************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-cast-row.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _cast_receiver_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cast/receiver_messages */ "./src/cast/receiver_messages.ts");





let HuiCastRow = class HuiCastRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._noHTTPS = false;
    }
    setConfig(config) {
        if (!config || config.view === undefined || config.view === null) {
            throw new Error("Invalid Configuration: 'view' required");
        }
        this._config = Object.assign({ icon: "hass:television", name: "牧养犬 Cast" }, config);
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const active = this._castManager &&
            this._castManager.status &&
            this._config.view === this._castManager.status.lovelacePath;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div class="name">${this._config.name}</div>
        ${this._noHTTPS
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              Cast requires HTTPS
            `
            : this._castManager === undefined
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``
                : this._castManager === null
                    ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              Cast API unavailable
            `
                    : this._castManager.castState === "NO_DEVICES_AVAILABLE"
                        ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              No devices found
            `
                        : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="controls">
                <google-cast-launcher></google-cast-launcher>
                <mwc-button
                  @click=${this._sendLovelace}
                  class=${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({ inactive: !Boolean(active) })}
                  .unelevated=${active}
                  .disabled=${!this._castManager.status}
                >
                  SHOW
                </mwc-button>
              </div>
            `}
      </div>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        if (location.protocol === "http:" && location.hostname !== "localhost") {
            this._noHTTPS = true;
        }
        __webpack_require__.e(/*! import() */ 19).then(__webpack_require__.bind(null, /*! ../../../cast/cast_manager */ "./src/cast/cast_manager.ts")).then(({ getCastManager }) => getCastManager(this.hass.auth).then((mgr) => {
            this._castManager = mgr;
            mgr.addEventListener("connection-changed", () => {
                this.requestUpdate();
            });
            mgr.addEventListener("state-changed", () => {
                this.requestUpdate();
            });
        }, () => {
            this._castManager = null;
        }));
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (this._config && this._config.hide_if_unavailable) {
            this.style.display =
                !this._castManager ||
                    this._castManager.castState === "NO_DEVICES_AVAILABLE"
                    ? "none"
                    : "";
        }
    }
    async _sendLovelace() {
        await Object(_cast_receiver_messages__WEBPACK_IMPORTED_MODULE_4__["ensureConnectedCastSession"])(this._castManager, this.hass.auth);
        Object(_cast_receiver_messages__WEBPACK_IMPORTED_MODULE_4__["castSendShowLovelaceView"])(this._castManager, this._config.view);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        display: flex;
        align-items: center;
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      .flex {
        flex: 1;
        margin-left: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .controls {
        display: flex;
        align-items: center;
      }
      google-cast-launcher {
        margin-right: 0.57em;
        cursor: pointer;
        display: inline-block;
        height: 24px;
        width: 24px;
      }
      .inactive {
        padding: 0 4px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCastRow.prototype, "_config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCastRow.prototype, "_castManager", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiCastRow.prototype, "_noHTTPS", void 0);
HuiCastRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-cast-row")
], HuiCastRow);


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-divider-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-divider-row.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


let HuiDividerRow = class HuiDividerRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Error in card configuration.");
        }
        this._config = Object.assign({ style: {
                height: "1px",
                "background-color": "var(--secondary-text-color)",
            } }, config);
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const el = document.createElement("div");
        Object.keys(this._config.style).forEach((prop) => {
            el.style.setProperty(prop, this._config.style[prop]);
        });
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${el}
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiDividerRow.prototype, "_config", void 0);
HuiDividerRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-divider-row")
], HuiDividerRow);


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-section-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-section-row.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");



let HuiSectionRow = class HuiSectionRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config) {
            throw new Error("Error in card configuration.");
        }
        this._config = config;
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="divider"></div>
      ${this._config.label
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
            <div class="label">${this._config.label}</div>
          `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``}
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .label {
        color: var(--primary-color);
        margin-left: 8px;
        margin-bottom: 16px;
        margin-top: 16px;
      }
      .divider {
        height: 1px;
        background-color: var(--secondary-text-color);
        opacity: 0.25;
        margin-left: -16px;
        margin-right: -16px;
        margin-top: 8px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiSectionRow.prototype, "_config", void 0);
HuiSectionRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-section-row")
], HuiSectionRow);


/***/ }),

/***/ "./src/panels/lovelace/special-rows/hui-weblink-row.ts":
/*!*************************************************************!*\
  !*** ./src/panels/lovelace/special-rows/hui-weblink-row.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");



let HuiWeblinkRow = class HuiWeblinkRow extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    setConfig(config) {
        if (!config || !config.url) {
            throw new Error("Invalid Configuration: 'url' required");
        }
        this._config = Object.assign({ icon: "hass:link", name: config.url }, config);
    }
    render() {
        if (!this._config) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <a
        href=${this._config.url}
        target=${this._config.url.indexOf("://") !== -1 ? "_blank" : ""}
      >
        <ha-icon .icon="${this._config.icon}"></ha-icon>
        <div>${this._config.name}</div>
      </a>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      a {
        display: flex;
        align-items: center;
        color: var(--primary-color);
      }
      ha-icon {
        padding: 8px;
        color: var(--paper-item-icon-color);
      }
      div {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-left: 16px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HuiWeblinkRow.prototype, "_config", void 0);
HuiWeblinkRow = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-weblink-row")
], HuiWeblinkRow);


/***/ }),

/***/ "./src/panels/lovelace/views/hui-panel-view.ts":
/*!*****************************************************!*\
  !*** ./src/panels/lovelace/views/hui-panel-view.ts ***!
  \*****************************************************/
/*! exports provided: HUIPanelView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUIPanelView", function() { return HUIPanelView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");




let HUIPanelView = class HUIPanelView extends lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"] {
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.style.setProperty("background", "var(--lovelace-background)");
    }
    update(changedProperties) {
        super.update(changedProperties);
        const hass = this.hass;
        const hassChanged = changedProperties.has("hass");
        const oldHass = changedProperties.get("hass");
        const configChanged = changedProperties.has("config");
        if (configChanged) {
            this._createCard();
        }
        else if (hassChanged) {
            this.lastChild.hass = this.hass;
        }
        if (configChanged ||
            (hassChanged &&
                oldHass &&
                (hass.themes !== oldHass.themes ||
                    hass.selectedTheme !== oldHass.selectedTheme))) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__["default"])(this, hass.themes, this.config.theme);
        }
    }
    _createCard() {
        if (this.lastChild) {
            this.removeChild(this.lastChild);
        }
        const card = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_3__["createCardElement"])(this.config.cards[0]);
        card.hass = this.hass;
        card.isPanel = true;
        this.append(card);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIPanelView.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HUIPanelView.prototype, "config", void 0);
HUIPanelView = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-panel-view")
], HUIPanelView);



/***/ }),

/***/ "./src/panels/lovelace/views/hui-view.ts":
/*!***********************************************!*\
  !*** ./src/panels/lovelace/views/hui-view.ts ***!
  \***********************************************/
/*! exports provided: HUIView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HUIView", function() { return HUIView; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
/* harmony import */ var _common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/dom/apply_themes_on_element */ "./src/common/dom/apply_themes_on_element.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_create_card_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/create-card-element */ "./src/panels/lovelace/common/create-card-element.ts");
/* harmony import */ var _common_compute_card_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/compute-card-size */ "./src/panels/lovelace/common/compute-card-size.ts");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_process_config_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/process-config-entities */ "./src/panels/lovelace/common/process-config-entities.ts");









let editCodeLoaded = false;
// Find column with < 5 entities, else column with lowest count
const getColumnIndex = (columnEntityCount, size) => {
    let minIndex = 0;
    for (let i = 0; i < columnEntityCount.length; i++) {
        if (columnEntityCount[i] < 5) {
            minIndex = i;
            break;
        }
        if (columnEntityCount[i] < columnEntityCount[minIndex]) {
            minIndex = i;
        }
    }
    columnEntityCount[minIndex] += size;
    return minIndex;
};
class HUIView extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    constructor() {
        super();
        this._cards = [];
        this._badges = [];
    }
    static get properties() {
        return {
            hass: {},
            lovelace: {},
            columns: { type: Number },
            index: { type: Number },
            _cards: {},
            _badges: {},
        };
    }
    // Public to make demo happy
    createCardElement(cardConfig) {
        const element = Object(_common_create_card_element__WEBPACK_IMPORTED_MODULE_4__["createCardElement"])(cardConfig);
        element.hass = this.hass;
        element.addEventListener("ll-rebuild", (ev) => {
            // In edit mode let it go to hui-root and rebuild whole view.
            if (!this.lovelace.editMode) {
                ev.stopPropagation();
                this._rebuildCard(element, cardConfig);
            }
        }, { once: true });
        return element;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      ${this.renderStyles()}
      <div id="badges"></div>
      <div id="columns"></div>
      ${this.lovelace.editMode
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
            <ha-fab
              icon="hass:plus"
              title="${this.hass.localize("ui.panel.lovelace.editor.edit_card.add")}"
              @click="${this._addCard}"
              class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_3__["classMap"])({
                rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(this.hass),
            })}"
            ></ha-fab>
          `
            : ""}
    `;
    }
    renderStyles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <style>
        :host {
          display: block;
          box-sizing: border-box;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
          background: var(--lovelace-background);
        }

        #badges {
          margin: 8px 16px;
          font-size: 85%;
          text-align: center;
        }

        #columns {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .column {
          flex-basis: 0;
          flex-grow: 1;
          max-width: 500px;
        }

        .column > * {
          display: block;
          margin: 4px 4px 8px;
        }

        ha-fab {
          position: sticky;
          float: right;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        ha-fab.rtl {
          float: left;
          right: auto;
          left: 16px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          .column > * {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 599px) {
          .column {
            max-width: 600px;
          }
        }
      </style>
    `;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        const hass = this.hass;
        const lovelace = this.lovelace;
        if (lovelace.editMode && !editCodeLoaded) {
            editCodeLoaded = true;
            __webpack_require__.e(/*! import() | hui-view-editable */ "hui-view-editable").then(__webpack_require__.bind(null, /*! ./hui-view-editable */ "./src/panels/lovelace/views/hui-view-editable.ts"));
        }
        const hassChanged = changedProperties.has("hass");
        let editModeChanged = false;
        let configChanged = false;
        if (changedProperties.has("index")) {
            configChanged = true;
        }
        else if (changedProperties.has("lovelace")) {
            const oldLovelace = changedProperties.get("lovelace");
            editModeChanged =
                !oldLovelace || lovelace.editMode !== oldLovelace.editMode;
            configChanged = !oldLovelace || lovelace.config !== oldLovelace.config;
        }
        if (configChanged) {
            this._createBadges(lovelace.config.views[this.index]);
        }
        else if (hassChanged) {
            this._badges.forEach((badge) => {
                const { element, entityId } = badge;
                element.hass = hass;
                element.state = hass.states[entityId];
            });
        }
        if (configChanged || editModeChanged || changedProperties.has("columns")) {
            this._createCards(lovelace.config.views[this.index]);
        }
        else if (hassChanged) {
            this._cards.forEach((element) => {
                element.hass = this.hass;
            });
        }
        const oldHass = changedProperties.get("hass");
        if (configChanged ||
            editModeChanged ||
            (hassChanged &&
                oldHass &&
                (hass.themes !== oldHass.themes ||
                    hass.selectedTheme !== oldHass.selectedTheme))) {
            Object(_common_dom_apply_themes_on_element__WEBPACK_IMPORTED_MODULE_2__["default"])(this, hass.themes, lovelace.config.views[this.index].theme);
        }
    }
    _addCard() {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_6__["showEditCardDialog"])(this, {
            lovelace: this.lovelace,
            path: [this.index],
        });
    }
    _createBadges(config) {
        const root = this.shadowRoot.getElementById("badges");
        while (root.lastChild) {
            root.removeChild(root.lastChild);
        }
        if (!config || !config.badges || !Array.isArray(config.badges)) {
            root.style.display = "none";
            this._badges = [];
            return;
        }
        const elements = [];
        const badges = Object(_common_process_config_entities__WEBPACK_IMPORTED_MODULE_8__["processConfigEntities"])(config.badges);
        for (const badge of badges) {
            const element = document.createElement("ha-state-label-badge");
            const entityId = badge.entity;
            element.hass = this.hass;
            element.state = this.hass.states[entityId];
            element.name = badge.name;
            element.icon = badge.icon;
            element.image = badge.image;
            elements.push({ element, entityId });
            root.appendChild(element);
        }
        this._badges = elements;
        root.style.display = elements.length > 0 ? "block" : "none";
    }
    _createCards(config) {
        const root = this.shadowRoot.getElementById("columns");
        while (root.lastChild) {
            root.removeChild(root.lastChild);
        }
        if (!config || !config.cards || !Array.isArray(config.cards)) {
            this._cards = [];
            return;
        }
        const elements = [];
        const elementsToAppend = [];
        config.cards.forEach((cardConfig, cardIndex) => {
            const element = this.createCardElement(cardConfig);
            elements.push(element);
            if (!this.lovelace.editMode) {
                elementsToAppend.push(element);
                return;
            }
            const wrapper = document.createElement("hui-card-options");
            wrapper.hass = this.hass;
            wrapper.lovelace = this.lovelace;
            wrapper.path = [this.index, cardIndex];
            wrapper.appendChild(element);
            elementsToAppend.push(wrapper);
        });
        let columns = [];
        const columnEntityCount = [];
        for (let i = 0; i < this.columns; i++) {
            columns.push([]);
            columnEntityCount.push(0);
        }
        elements.forEach((el, index) => {
            const cardSize = Object(_common_compute_card_size__WEBPACK_IMPORTED_MODULE_5__["computeCardSize"])(el);
            // Element to append might be the wrapped card when we're editing.
            columns[getColumnIndex(columnEntityCount, cardSize)].push(elementsToAppend[index]);
        });
        // Remove empty columns
        columns = columns.filter((val) => val.length > 0);
        columns.forEach((column) => {
            const columnEl = document.createElement("div");
            columnEl.classList.add("column");
            column.forEach((el) => columnEl.appendChild(el));
            root.appendChild(columnEl);
        });
        this._cards = elements;
    }
    _rebuildCard(cardElToReplace, config) {
        const newCardEl = this.createCardElement(config);
        cardElToReplace.parentElement.replaceChild(newCardEl, cardElToReplace);
        this._cards = this._cards.map((curCardEl) => curCardEl === cardElToReplace ? newCardEl : curCardEl);
    }
}
customElements.define("hui-view", HUIView);


/***/ }),

/***/ "./src/panels/map/ha-entity-marker.js":
/*!********************************************!*\
  !*** ./src/panels/map/ha-entity-marker.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");






/*
 * @appliesMixin EventsMixin
 */
class HaEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]"
          >[[entityName]]</template
        >
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      entityId: {
        type: String,
        value: "",
      },

      entityName: {
        type: String,
        value: null,
      },

      entityPicture: {
        type: String,
        value: null,
      },
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", (ev) => this.badgeTap(ev));
  }

  badgeTap(ev) {
    ev.stopPropagation();
    if (this.entityId) {
      this.fire("hass-more-info", { entityId: this.entityId });
    }
  }
}

customElements.define("ha-entity-marker", HaEntityMarker);


/***/ }),

/***/ "./src/resources/jquery.roundslider.ondemand.ts":
/*!******************************************************!*\
  !*** ./src/resources/jquery.roundslider.ondemand.ts ***!
  \******************************************************/
/*! exports provided: loadRoundslider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRoundslider", function() { return loadRoundslider; });
let loaded;
const loadRoundslider = async () => {
    if (!loaded) {
        loaded = Promise.all(/*! import() | jquery-roundslider */[__webpack_require__.e("vendors~jquery-roundslider"), __webpack_require__.e("jquery-roundslider")]).then(__webpack_require__.bind(null, /*! ./jquery.roundslider */ "./src/resources/jquery.roundslider.js"));
    }
    return loaded;
};


/***/ })

}]);