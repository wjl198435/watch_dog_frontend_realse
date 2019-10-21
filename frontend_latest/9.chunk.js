(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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








/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,

  is: 'paper-item-body'
});


/***/ }),

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

/***/ "./src/data/error_log.ts":
/*!*******************************!*\
  !*** ./src/data/error_log.ts ***!
  \*******************************/
/*! exports provided: fetchErrorLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchErrorLog", function() { return fetchErrorLog; });
const fetchErrorLog = (hass) => hass.callApi("GET", "error_log");


/***/ }),

/***/ "./src/data/system_log.ts":
/*!********************************!*\
  !*** ./src/data/system_log.ts ***!
  \********************************/
/*! exports provided: fetchSystemLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSystemLog", function() { return fetchSystemLog; });
const fetchSystemLog = (hass) => hass.callApi("GET", "error/all");


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

/***/ "./src/panels/developer-tools/logs/developer-tools-logs.ts":
/*!*****************************************************************!*\
  !*** ./src/panels/developer-tools/logs/developer-tools-logs.ts ***!
  \*****************************************************************/
/*! exports provided: HaPanelDevLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPanelDevLogs", function() { return HaPanelDevLogs; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _logs_system_log_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logs/system-log-card */ "./src/panels/developer-tools/logs/system-log-card.ts");
/* harmony import */ var _logs_error_log_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logs/error-log-card */ "./src/panels/developer-tools/logs/error-log-card.ts");





let HaPanelDevLogs = class HaPanelDevLogs extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    connectedCallback() {
        super.connectedCallback();
        if (this.systemLog && this.systemLog.loaded) {
            this.systemLog.fetchData();
        }
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="content">
        <system-log-card .hass=${this.hass}></system-log-card>
        <error-log-card .hass=${this.hass}></error-log-card>
      </div>
    `;
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_2__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          direction: ltr;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaPanelDevLogs.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["query"])("system-log-card")
], HaPanelDevLogs.prototype, "systemLog", void 0);
HaPanelDevLogs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("developer-tools-logs")
], HaPanelDevLogs);



/***/ }),

/***/ "./src/panels/developer-tools/logs/error-log-card.ts":
/*!***********************************************************!*\
  !*** ./src/panels/developer-tools/logs/error-log-card.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _data_error_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/error_log */ "./src/data/error_log.ts");




class ErrorLogCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    static get properties() {
        return {
            hass: {},
            _errorLog: {},
        };
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <p class="error-log-intro">
        ${this._errorLog
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
              <paper-icon-button
                icon="hass:refresh"
                @click=${this._refreshErrorLog}
              ></paper-icon-button>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
              <mwc-button raised @click=${this._refreshErrorLog}>
                Load Full 牧养犬 Log
              </mwc-button>
            `}
      </p>
      <div class="error-log">${this._errorLog}</div>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
      .error-log-intro {
        text-align: center;
        margin: 16px;
      }

      paper-icon-button {
        float: right;
      }

      .error-log {
        @apply --paper-font-code)
          clear: both;
        white-space: pre-wrap;
        margin: 16px;
      }
    `;
    }
    async _refreshErrorLog() {
        this._errorLog = "Loading error log…";
        const log = await Object(_data_error_log__WEBPACK_IMPORTED_MODULE_3__["fetchErrorLog"])(this.hass);
        this._errorLog = log || "No errors have been reported.";
    }
}
customElements.define("error-log-card", ErrorLogCard);


/***/ }),

/***/ "./src/panels/developer-tools/logs/show-dialog-system-log-detail.ts":
/*!**************************************************************************!*\
  !*** ./src/panels/developer-tools/logs/show-dialog-system-log-detail.ts ***!
  \**************************************************************************/
/*! exports provided: showSystemLogDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSystemLogDetailDialog", function() { return showSystemLogDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;
const dialogShowEvent = "show-dialog-system-log-detail";
const dialogTag = "dialog-system-log-detail";
const registerDialog = (element) => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
    dialogShowEvent,
    dialogTag,
    dialogImport: () => Promise.all(/*! import() | system-log-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~system-log-detail-dialog"), __webpack_require__.e("system-log-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-system-log-detail */ "./src/panels/developer-tools/logs/dialog-system-log-detail.ts")),
});
const showSystemLogDetailDialog = (element, systemLogDetailParams) => {
    if (!registeredDialog) {
        registeredDialog = true;
        registerDialog(element);
    }
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, systemLogDetailParams);
};


/***/ }),

/***/ "./src/panels/developer-tools/logs/system-log-card.ts":
/*!************************************************************!*\
  !*** ./src/panels/developer-tools/logs/system-log-card.ts ***!
  \************************************************************/
/*! exports provided: SystemLogCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemLogCard", function() { return SystemLogCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _data_system_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/system_log */ "./src/data/system_log.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./show-dialog-system-log-detail */ "./src/panels/developer-tools/logs/show-dialog-system-log-detail.ts");













const formatLogTime = (date, language) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const dateTime = new Date(date * 1000);
    const dateTimeDay = new Date(date * 1000).setHours(0, 0, 0, 0);
    return dateTimeDay < today
        ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_10__["default"])(dateTime, language)
        : Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_11__["default"])(dateTime, language);
};
let SystemLogCard = class SystemLogCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this.loaded = false;
    }
    static get properties() {
        return {
            hass: {},
            _items: {},
        };
    }
    async fetchData() {
        this._items = undefined;
        this._items = await Object(_data_system_log__WEBPACK_IMPORTED_MODULE_9__["fetchSystemLog"])(this.hass);
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="system-log-intro">
        <ha-card>
          ${this._items === undefined
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="loading-container">
                  <paper-spinner active></paper-spinner>
                </div>
              `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                ${this._items.length === 0
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <div class="card-content">There are no new issues!</div>
                    `
                : this._items.map((item) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                        <paper-item @click=${this._openLog} .logItem=${item}>
                          <paper-item-body two-line>
                            <div class="row">
                              ${item.message}
                            </div>
                            <div secondary>
                              ${formatLogTime(item.timestamp, this.hass.language)}
                              ${item.source} (${item.level})
                              ${item.count > 1
                    ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                    - message first occured at
                                    ${formatLogTime(item.first_occured, this.hass.language)}
                                    and shows up ${item.count} times
                                  `
                    : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``}
                            </div>
                          </paper-item-body>
                        </paper-item>
                      `)}

                <div class="card-actions">
                  <ha-call-service-button
                    .hass=${this.hass}
                    domain="system_log"
                    service="clear"
                    >Clear</ha-call-service-button
                  >
                  <ha-progress-button @click=${this.fetchData}
                    >Refresh</ha-progress-button
                  >
                </div>
              `}
        </ha-card>
      </div>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.fetchData();
        this.loaded = true;
        this.addEventListener("hass-service-called", (ev) => this.serviceCalled(ev));
    }
    serviceCalled(ev) {
        // Check if this is for us
        if (ev.detail.success && ev.detail.domain === "system_log") {
            // Do the right thing depending on service
            if (ev.detail.service === "clear") {
                this._items = [];
            }
        }
    }
    _openLog(ev) {
        const item = ev.currentTarget.logItem;
        Object(_show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_12__["showSystemLogDetailDialog"])(this, { item });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      ha-card {
        padding-top: 16px;
      }

      paper-item {
        cursor: pointer;
      }

      .system-log-intro {
        margin: 16px;
      }

      .loading-container {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
    }
};
SystemLogCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("system-log-card")
], SystemLogCard);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLXByb2dyZXNzLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2Vycm9yX2xvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9zeXN0ZW1fbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2xvZ3MvZGV2ZWxvcGVyLXRvb2xzLWxvZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvbG9ncy9lcnJvci1sb2ctY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2RldmVsb3Blci10b29scy9sb2dzL3Nob3ctZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2xvZ3Mvc3lzdGVtLWxvZy1jYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJpXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGUubmFtZSA9PT0gXCJSYW5nZUVycm9yXCI7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCAodG9Mb2NhbGVUaW1lU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcInNob3J0VGltZVwiKSk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLXByb2dyZXNzLWJ1dHRvblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbGxTZXJ2aWNlQnV0dG9uIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgaWQ9XCJwcm9ncmVzc1wiXG4gICAgICAgIHByb2dyZXNzPVwiW1twcm9ncmVzc11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJidXR0b25UYXBwZWRcIlxuICAgICAgICA+PHNsb3Q+PC9zbG90XG4gICAgICA+PC9oYS1wcm9ncmVzcy1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBwcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcblxuICAgICAgc2VydmljZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiB7fSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpcm1hdGlvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBidXR0b25UYXBwZWQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlybWF0aW9uICYmICF3aW5kb3cuY29uZmlybSh0aGlzLmNvbmZpcm1hdGlvbikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9ncmVzcyA9IHRydWU7XG4gICAgdmFyIGVsID0gdGhpcztcbiAgICB2YXIgZXZlbnREYXRhID0ge1xuICAgICAgZG9tYWluOiB0aGlzLmRvbWFpbixcbiAgICAgIHNlcnZpY2U6IHRoaXMuc2VydmljZSxcbiAgICAgIHNlcnZpY2VEYXRhOiB0aGlzLnNlcnZpY2VEYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsU2VydmljZSh0aGlzLmRvbWFpbiwgdGhpcy5zZXJ2aWNlLCB0aGlzLnNlcnZpY2VEYXRhKVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25TdWNjZXNzKCk7XG4gICAgICAgICAgZXZlbnREYXRhLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICBlbC5wcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICAgIGVsLiQucHJvZ3Jlc3MuYWN0aW9uRXJyb3IoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgZWwuZmlyZShcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgZXZlbnREYXRhKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbGwtc2VydmljZS1idXR0b25cIiwgSGFDYWxsU2VydmljZUJ1dHRvbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYVByb2dyZXNzQnV0dG9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3MgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogd2hpdGU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29vZ2xlLWdyZWVuLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciBtd2MtYnV0dG9uIHtcbiAgICAgICAgICAtLW1kYy10aGVtZS1wcmltYXJ5OiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBpZD1cImJ1dHRvblwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwiYnV0dG9uVGFwcGVkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbcHJvZ3Jlc3NdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPjxwYXBlci1zcGlubmVyIGFjdGl2ZT1cIlwiPjwvcGFwZXItc3Bpbm5lcj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgcHJvZ3Jlc3M6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHZhciBjbGFzc0xpc3QgPSB0aGlzLiQuY29udGFpbmVyLmNsYXNzTGlzdDtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5idXR0b25UYXBwZWQoZXYpKTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZChldikge1xuICAgIGlmICh0aGlzLnByb2dyZXNzKSBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGFjdGlvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJzdWNjZXNzXCIpO1xuICB9XG5cbiAgYWN0aW9uRXJyb3IoKSB7XG4gICAgdGhpcy50ZW1wQ2xhc3MoXCJlcnJvclwiKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNhYmxlZChkaXNhYmxlZCwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZGlzYWJsZWQgfHwgcHJvZ3Jlc3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcHJvZ3Jlc3MtYnV0dG9uXCIsIEhhUHJvZ3Jlc3NCdXR0b24pO1xuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGZldGNoRXJyb3JMb2cgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPHN0cmluZz4oXCJHRVRcIiwgXCJlcnJvcl9sb2dcIik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nZ2VkRXJyb3Ige1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGxldmVsOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICAvLyB1bml4IHRpbWVzdGFtcCBpbiBzZWNvbmRzXG4gIHRpbWVzdGFtcDogbnVtYmVyO1xuICBleGNlcHRpb246IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgLy8gdW5peCB0aW1lc3RhbXAgaW4gc2Vjb25kc1xuICBmaXJzdF9vY2N1cmVkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFN5c3RlbUxvZyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8TG9nZ2VkRXJyb3JbXT4oXCJHRVRcIiwgXCJlcnJvci9hbGxcIik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIHF1ZXJ5LFxuICBjdXN0b21FbGVtZW50LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5cbmltcG9ydCBcIi4uL2xvZ3Mvc3lzdGVtLWxvZy1jYXJkXCI7XG5pbXBvcnQgXCIuLi9sb2dzL2Vycm9yLWxvZy1jYXJkXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFN5c3RlbUxvZ0NhcmQgfSBmcm9tIFwiLi4vbG9ncy9zeXN0ZW0tbG9nLWNhcmRcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJkZXZlbG9wZXItdG9vbHMtbG9nc1wiKVxuZXhwb3J0IGNsYXNzIEhhUGFuZWxEZXZMb2dzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcXVlcnkoXCJzeXN0ZW0tbG9nLWNhcmRcIikgcHJpdmF0ZSBzeXN0ZW1Mb2c/OiBTeXN0ZW1Mb2dDYXJkO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLnN5c3RlbUxvZyAmJiB0aGlzLnN5c3RlbUxvZy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuc3lzdGVtTG9nLmZldGNoRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxzeXN0ZW0tbG9nLWNhcmQgLmhhc3M9JHt0aGlzLmhhc3N9Pjwvc3lzdGVtLWxvZy1jYXJkPlxuICAgICAgICA8ZXJyb3ItbG9nLWNhcmQgLmhhc3M9JHt0aGlzLmhhc3N9PjwvZXJyb3ItbG9nLWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlLFxuICAgICAgY3NzYFxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkZXZlbG9wZXItdG9vbHMtbG9nc1wiOiBIYVBhbmVsRGV2TG9ncztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmV0Y2hFcnJvckxvZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2Vycm9yX2xvZ1wiO1xuXG5jbGFzcyBFcnJvckxvZ0NhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwcml2YXRlIF9lcnJvckxvZz86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIF9lcnJvckxvZzoge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbG9nLWludHJvXCI+XG4gICAgICAgICR7dGhpcy5fZXJyb3JMb2dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnJlZnJlc2hcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX3JlZnJlc2hFcnJvckxvZ31cbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQgQGNsaWNrPSR7dGhpcy5fcmVmcmVzaEVycm9yTG9nfT5cbiAgICAgICAgICAgICAgICBMb2FkIEZ1bGwg54mn5YW754qsIExvZ1xuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgfVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWxvZ1wiPiR7dGhpcy5fZXJyb3JMb2d9PC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5lcnJvci1sb2ctaW50cm8ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG5cbiAgICAgIC5lcnJvci1sb2cge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvZGUpXG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZWZyZXNoRXJyb3JMb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fZXJyb3JMb2cgPSBcIkxvYWRpbmcgZXJyb3IgbG9n4oCmXCI7XG4gICAgY29uc3QgbG9nID0gYXdhaXQgZmV0Y2hFcnJvckxvZyh0aGlzLmhhc3MhKTtcbiAgICB0aGlzLl9lcnJvckxvZyA9IGxvZyB8fCBcIk5vIGVycm9ycyBoYXZlIGJlZW4gcmVwb3J0ZWQuXCI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZXJyb3ItbG9nLWNhcmRcIiwgRXJyb3JMb2dDYXJkKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvZ2dlZEVycm9yIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc3lzdGVtX2xvZ1wiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcInNob3ctZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCI6IFN5c3RlbUxvZ0RldGFpbERpYWxvZ1BhcmFtcztcbiAgfVxufVxuXG5sZXQgcmVnaXN0ZXJlZERpYWxvZyA9IGZhbHNlO1xuY29uc3QgZGlhbG9nU2hvd0V2ZW50ID0gXCJzaG93LWRpYWxvZy1zeXN0ZW0tbG9nLWRldGFpbFwiO1xuY29uc3QgZGlhbG9nVGFnID0gXCJkaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTeXN0ZW1Mb2dEZXRhaWxEaWFsb2dQYXJhbXMge1xuICBpdGVtOiBMb2dnZWRFcnJvcjtcbn1cblxuY29uc3QgcmVnaXN0ZXJEaWFsb2cgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInJlZ2lzdGVyLWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nU2hvd0V2ZW50LFxuICAgIGRpYWxvZ1RhZyxcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJzeXN0ZW0tbG9nLWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLXN5c3RlbS1sb2ctZGV0YWlsXCIpLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNob3dTeXN0ZW1Mb2dEZXRhaWxEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXM6IFN5c3RlbUxvZ0RldGFpbERpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgIHJlZ2lzdGVyZWREaWFsb2cgPSB0cnVlO1xuICAgIHJlZ2lzdGVyRGlhbG9nKGVsZW1lbnQpO1xuICB9XG4gIGZpcmVFdmVudChlbGVtZW50LCBkaWFsb2dTaG93RXZlbnQsIHN5c3RlbUxvZ0RldGFpbFBhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb2dnZWRFcnJvciwgZmV0Y2hTeXN0ZW1Mb2cgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9zeXN0ZW1fbG9nXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG5pbXBvcnQgeyBzaG93U3lzdGVtTG9nRGV0YWlsRGlhbG9nIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctc3lzdGVtLWxvZy1kZXRhaWxcIjtcblxuY29uc3QgZm9ybWF0TG9nVGltZSA9IChkYXRlLCBsYW5ndWFnZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgZGF0ZVRpbWUgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XG4gIGNvbnN0IGRhdGVUaW1lRGF5ID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gIHJldHVybiBkYXRlVGltZURheSA8IHRvZGF5XG4gICAgPyBmb3JtYXREYXRlVGltZShkYXRlVGltZSwgbGFuZ3VhZ2UpXG4gICAgOiBmb3JtYXRUaW1lKGRhdGVUaW1lLCBsYW5ndWFnZSk7XG59O1xuXG5AY3VzdG9tRWxlbWVudChcInN5c3RlbS1sb2ctY2FyZFwiKVxuZXhwb3J0IGNsYXNzIFN5c3RlbUxvZ0NhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgbG9hZGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2l0ZW1zPzogTG9nZ2VkRXJyb3JbXTtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIF9pdGVtczoge30sXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBmZXRjaERhdGEoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5faXRlbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5faXRlbXMgPSBhd2FpdCBmZXRjaFN5c3RlbUxvZyh0aGlzLmhhc3MhKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJzeXN0ZW0tbG9nLWludHJvXCI+XG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICR7dGhpcy5faXRlbXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICAgICR7dGhpcy5faXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlRoZXJlIGFyZSBubyBuZXcgaXNzdWVzITwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuX2l0ZW1zLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX29wZW5Mb2d9IC5sb2dJdGVtPSR7aXRlbX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdExvZ1RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc3MhLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnNvdXJjZX0gKCR7aXRlbS5sZXZlbH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2l0ZW0uY291bnQgPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gbWVzc2FnZSBmaXJzdCBvY2N1cmVkIGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdExvZ1RpbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZmlyc3Rfb2NjdXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNzIS5sYW5ndWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBzaG93cyB1cCAke2l0ZW0uY291bnR9IHRpbWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInN5c3RlbV9sb2dcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2xlYXJcIlxuICAgICAgICAgICAgICAgICAgICA+Q2xlYXI8L2hhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b24gQGNsaWNrPSR7dGhpcy5mZXRjaERhdGF9XG4gICAgICAgICAgICAgICAgICAgID5SZWZyZXNoPC9oYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTogdm9pZCB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5mZXRjaERhdGEoKTtcbiAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzZXJ2aWNlQ2FsbGVkKGV2KTogdm9pZCB7XG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBmb3IgdXNcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MgJiYgZXYuZGV0YWlsLmRvbWFpbiA9PT0gXCJzeXN0ZW1fbG9nXCIpIHtcbiAgICAgIC8vIERvIHRoZSByaWdodCB0aGluZyBkZXBlbmRpbmcgb24gc2VydmljZVxuICAgICAgaWYgKGV2LmRldGFpbC5zZXJ2aWNlID09PSBcImNsZWFyXCIpIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcGVuTG9nKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGl0ZW0gPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmxvZ0l0ZW07XG4gICAgc2hvd1N5c3RlbUxvZ0RldGFpbERpYWxvZyh0aGlzLCB7IGl0ZW0gfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zeXN0ZW0tbG9nLWludHJvIHtcbiAgICAgICAgbWFyZ2luOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubG9hZGluZy1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzeXN0ZW0tbG9nLWNhcmRcIjogU3lzdGVtTG9nQ2FyZDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQVNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUE4REE7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFZQTtBQUVBO0FBQ0E7QUFLQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBR0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7O0FBRUE7QUEwSEE7QUF2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOzs7QUFHQTs7O0FBR0E7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFJQTs7Ozs7QUFLQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQTVIQTtBQURBO0FBQ0E7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==