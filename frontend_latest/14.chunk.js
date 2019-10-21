(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[14],{

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

/***/ "./src/components/ha-code-editor.ts":
/*!******************************************!*\
  !*** ./src/components/ha-code-editor.ts ***!
  \******************************************/
/*! exports provided: HaCodeEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCodeEditor", function() { return HaCodeEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/codemirror.ondemand */ "./src/resources/codemirror.ondemand.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");




let HaCodeEditor = class HaCodeEditor extends lit_element__WEBPACK_IMPORTED_MODULE_3__["UpdatingElement"] {
    constructor() {
        super(...arguments);
        this.autofocus = false;
        this.rtl = false;
        this.error = false;
        this._value = "";
    }
    set value(value) {
        this._value = value;
    }
    get value() {
        return this.codemirror ? this.codemirror.getValue() : this._value;
    }
    get hasComments() {
        return this.shadowRoot.querySelector("span.cm-comment") ? true : false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.codemirror) {
            return;
        }
        this.codemirror.refresh();
        if (this.autofocus !== false) {
            this.codemirror.focus();
        }
    }
    update(changedProps) {
        super.update(changedProps);
        if (!this.codemirror) {
            return;
        }
        if (changedProps.has("mode")) {
            this.codemirror.setOption("mode", this.mode);
        }
        if (changedProps.has("autofocus")) {
            this.codemirror.setOption("autofocus", this.autofocus !== false);
        }
        if (changedProps.has("_value") && this._value !== this.value) {
            this.codemirror.setValue(this._value);
        }
        if (changedProps.has("rtl")) {
            this.codemirror.setOption("gutters", this._calcGutters());
            this._setScrollBarDirection();
        }
        if (changedProps.has("error")) {
            this.classList.toggle("error-state", this.error);
        }
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._load();
    }
    async _load() {
        const loaded = await Object(_resources_codemirror_ondemand__WEBPACK_IMPORTED_MODULE_1__["loadCodeMirror"])();
        const codeMirror = loaded.codeMirror;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
    <style>
      ${loaded.codeMirrorCss}
      .CodeMirror {
        height: var(--code-mirror-height, auto);
        direction: var(--code-mirror-direction, ltr);
      }
      .CodeMirror-scroll {
        max-height: var(--code-mirror-max-height, --code-mirror-height);
      }
      .CodeMirror-gutters {
        border-right: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        background-color: var(--paper-dialog-background-color, var(--primary-background-color));
        transition: 0.2s ease border-right;
      }
      :host(.error-state) .CodeMirror-gutters {
        border-color: var(--error-state-color, red);
      }
      .CodeMirror-focused .CodeMirror-gutters {
        border-right: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      .CodeMirror-linenumber {
        color: var(--paper-dialog-color, var(--primary-text-color));
      }
      .rtl .CodeMirror-vscrollbar {
        right: auto;
        left: 0px;
      }
      .rtl-gutter {
        width: 20px;
      }
    </style>`;
        this.codemirror = codeMirror(shadowRoot, {
            value: this._value,
            lineNumbers: true,
            tabSize: 2,
            mode: this.mode,
            autofocus: this.autofocus !== false,
            viewportMargin: Infinity,
            extraKeys: {
                Tab: "indentMore",
                "Shift-Tab": "indentLess",
            },
            gutters: this._calcGutters(),
        });
        this._setScrollBarDirection();
        this.codemirror.on("changes", () => this._onChange());
    }
    _onChange() {
        const newValue = this.value;
        if (newValue === this._value) {
            return;
        }
        this._value = newValue;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "value-changed", { value: this._value });
    }
    _calcGutters() {
        return this.rtl ? ["rtl-gutter", "CodeMirror-linenumbers"] : [];
    }
    _setScrollBarDirection() {
        if (this.codemirror) {
            this.codemirror.getWrapperElement().classList.toggle("rtl", this.rtl);
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "mode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "autofocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "rtl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "error", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], HaCodeEditor.prototype, "_value", void 0);
HaCodeEditor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-code-editor")
], HaCodeEditor);



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

/***/ "./src/panels/developer-tools/event/developer-tools-event.js":
/*!*******************************************************************!*\
  !*** ./src/panels/developer-tools/event/developer-tools-event.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _events_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./events-list */ "./src/panels/developer-tools/event/events-list.js");
/* harmony import */ var _event_subscribe_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-subscribe-card */ "./src/panels/developer-tools/event/event-subscribe-card.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");














const ERROR_SENTINEL = {};
/*
 * @appliesMixin EventsMixin
 */
class HaPanelDevEvent extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style iron-flex iron-positioning"></style>
      <style>
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
          @apply --paper-font-body1;
          padding: 16px;
          direction: ltr;
          display: block;
        }

        .ha-form {
          margin-right: 16px;
          max-width: 400px;
        }

        mwc-button {
          margin-top: 8px;
        }

        .header {
          @apply --paper-font-title;
        }

        event-subscribe-card {
          display: block;
          max-width: 800px;
          margin: 16px auto;
        }
      </style>

      <div class$="[[computeFormClasses(narrow)]]">
        <div class="flex">
          <p>
            Fire an event on the event bus.
            <a
              href="https://www.home-assistant.io/docs/configuration/events/"
              target="_blank"
              >Events Documentation.</a
            >
          </p>
          <div class="ha-form">
            <paper-input
              label="Event Type"
              autofocus
              required
              value="{{eventType}}"
            ></paper-input>
            <p>Event Data (YAML, optional)</p>
            <ha-code-editor
              mode="yaml"
              value="[[eventData]]"
              error="[[!validJSON]]"
              on-value-changed="_yamlChanged"
            ></ha-code-editor>
            <mwc-button on-click="fireEvent" raised disabled="[[!validJSON]]"
              >Fire Event</mwc-button
            >
          </div>
        </div>

        <div>
          <div class="header">Available Events</div>
          <events-list
            on-event-selected="eventSelected"
            hass="[[hass]]"
          ></events-list>
        </div>
      </div>
      <event-subscribe-card hass="[[hass]]"></event-subscribe-card>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      eventType: {
        type: String,
        value: "",
      },

      eventData: {
        type: String,
        value: "",
      },

      parsedJSON: {
        type: Object,
        computed: "_computeParsedEventData(eventData)",
      },

      validJSON: {
        type: Boolean,
        computed: "_computeValidJSON(parsedJSON)",
      },
    };
  }

  eventSelected(ev) {
    this.eventType = ev.detail.eventType;
  }

  _computeParsedEventData(eventData) {
    try {
      return eventData.trim() ? js_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.safeLoad(eventData) : {};
    } catch (err) {
      return ERROR_SENTINEL;
    }
  }

  _computeValidJSON(parsedJSON) {
    return parsedJSON !== ERROR_SENTINEL;
  }

  _yamlChanged(ev) {
    this.eventData = ev.detail.value;
  }

  fireEvent() {
    if (!this.eventType) {
      alert("Event type is a mandatory field");
      return;
    }
    this.hass.callApi("POST", "events/" + this.eventType, this.parsedJSON).then(
      function() {
        this.fire("hass-notification", {
          message: "Event " + this.eventType + " successful fired!",
        });
      }.bind(this)
    );
  }

  computeFormClasses(narrow) {
    return narrow ? "" : "layout horizontal";
  }
}

customElements.define("developer-tools-event", HaPanelDevEvent);


/***/ }),

/***/ "./src/panels/developer-tools/event/event-subscribe-card.ts":
/*!******************************************************************!*\
  !*** ./src/panels/developer-tools/event/event-subscribe-card.ts ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");






let EventSubscribeCard = class EventSubscribeCard extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._eventType = "";
        this._events = [];
        this._eventCount = 0;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._subscribed) {
            this._subscribed();
            this._subscribed = undefined;
        }
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card header="Listen to events">
        <form>
          <paper-input
            .label=${this._subscribed
            ? "Listening to"
            : "Event to subscribe to"}
            .disabled=${this._subscribed !== undefined}
            .value=${this._eventType}
            @value-changed=${this._valueChanged}
          ></paper-input>
          <mwc-button
            .disabled=${this._eventType === ""}
            @click=${this._handleSubmit}
            type="submit"
          >
            ${this._subscribed ? "Stop listening" : "Start listening"}
          </mwc-button>
        </form>
        <div class="events">
          ${this._events.map((ev) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="event">
                Event ${ev.id} fired
                ${Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(ev.event.time_fired), this.hass.language)}:
                <pre>${JSON.stringify(ev.event, null, 4)}</pre>
              </div>
            `)}
        </div>
      </ha-card>
    `;
    }
    _valueChanged(ev) {
        this._eventType = ev.detail.value;
    }
    async _handleSubmit() {
        if (this._subscribed) {
            this._subscribed();
            this._subscribed = undefined;
        }
        else {
            this._subscribed = await this.hass.connection.subscribeEvents((event) => {
                const tail = this._events.length > 30 ? this._events.slice(0, 29) : this._events;
                this._events = [
                    {
                        event,
                        id: this._eventCount++,
                    },
                    ...tail,
                ];
            }, this._eventType);
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      form {
        display: block;
        padding: 16px;
      }
      paper-input {
        display: inline-block;
        width: 200px;
      }
      .events {
        margin: -16px 0;
        padding: 0 16px;
      }
      .event {
        border-bottom: 1px solid var(--divider-color);
        padding-bottom: 16px;
        margin: 16px 0;
      }
      .event:last-child {
        border-bottom: 0;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], EventSubscribeCard.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], EventSubscribeCard.prototype, "_eventType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], EventSubscribeCard.prototype, "_subscribed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], EventSubscribeCard.prototype, "_events", void 0);
EventSubscribeCard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("event-subscribe-card")
], EventSubscribeCard);


/***/ }),

/***/ "./src/panels/developer-tools/event/events-list.js":
/*!*********************************************************!*\
  !*** ./src/panels/developer-tools/event/events-list.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");





/*
 * @appliesMixin EventsMixin
 */
class EventsList extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style: none;
          line-height: 2em;
        }

        a {
          color: var(--dark-primary-color);
        }
      </style>

      <ul>
        <template is="dom-repeat" items="[[events]]" as="event">
          <li>
            <a href="#" on-click="eventSelected">{{event.event}}</a>
            <span> (</span><span>{{event.listener_count}}</span
            ><span> listeners)</span>
          </li>
        </template>
      </ul>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      events: {
        type: Array,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.hass.callApi("GET", "events").then(
      function(events) {
        this.events = events;
      }.bind(this)
    );
  }

  eventSelected(ev) {
    ev.preventDefault();
    this.fire("event-selected", { eventType: ev.model.event.event });
  }
}

customElements.define("events-list", EventsList);


/***/ }),

/***/ "./src/resources/codemirror.ondemand.ts":
/*!**********************************************!*\
  !*** ./src/resources/codemirror.ondemand.ts ***!
  \**********************************************/
/*! exports provided: loadCodeMirror */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCodeMirror", function() { return loadCodeMirror; });
let loaded;
const loadCodeMirror = async () => {
    if (!loaded) {
        loaded = Promise.all(/*! import() | codemirror */[__webpack_require__.e("vendors~codemirror"), __webpack_require__.e("codemirror")]).then(__webpack_require__.bind(null, /*! ./codemirror */ "./src/resources/codemirror.ts"));
    }
    return loaded;
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY29kZS1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9kZXZlbG9wZXItdG9vbHMvZXZlbnQvZGV2ZWxvcGVyLXRvb2xzLWV2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2V2ZW50L2V2ZW50LXN1YnNjcmliZS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvZGV2ZWxvcGVyLXRvb2xzL2V2ZW50L2V2ZW50cy1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpKTtcbiIsImltcG9ydCB7XG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5jbGFzcyBIYUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhlYWRlcj86IHN0cmluZztcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYmFja2dyb3VuZCxcbiAgICAgICAgICB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKVxuICAgICAgICApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oYS1jYXJkLWJvcmRlci1yYWRpdXMsIDJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcihcbiAgICAgICAgICAtLWhhLWNhcmQtYm94LXNoYWRvdyxcbiAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksXG4gICAgICAgICAgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpXG4gICAgICAgICk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmNhcmQtaGVhZGVyLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWhlYWRlcikge1xuICAgICAgICBjb2xvcjogdmFyKC0taGEtY2FyZC1oZWFkZXItY29sb3IsIC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LXNpemUsIDI0cHgpO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDEyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nOiAyNHB4IDE2cHggMTZweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50Om5vdCg6Zmlyc3QtY2hpbGQpKSxcbiAgICAgIHNsb3Q6bm90KDpmaXJzdC1jaGlsZCk6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtYWN0aW9ucykge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLmhlYWRlclxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj4ke3RoaXMuaGVhZGVyfTwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBodG1sYGB9XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYXJkXCIsIEhhQ2FyZCk7XG4iLCJpbXBvcnQgeyBsb2FkQ29kZU1pcnJvciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvY29kZW1pcnJvci5vbmRlbWFuZFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgVXBkYXRpbmdFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcImNvZGVtaXJyb3JcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJlZGl0b3Itc2F2ZVwiOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jb2RlLWVkaXRvclwiKVxuZXhwb3J0IGNsYXNzIEhhQ29kZUVkaXRvciBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIHB1YmxpYyBjb2RlbWlycm9yPzogRWRpdG9yO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbW9kZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcnRsID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBlcnJvciA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF92YWx1ZSA9IFwiXCI7XG5cbiAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb2RlbWlycm9yID8gdGhpcy5jb2RlbWlycm9yLmdldFZhbHVlKCkgOiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGFzQ29tbWVudHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInNwYW4uY20tY29tbWVudFwiKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghdGhpcy5jb2RlbWlycm9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY29kZW1pcnJvci5yZWZyZXNoKCk7XG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXRoaXMuY29kZW1pcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwibW9kZVwiKSkge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLnNldE9wdGlvbihcIm1vZGVcIiwgdGhpcy5tb2RlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJhdXRvZm9jdXNcIikpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRPcHRpb24oXCJhdXRvZm9jdXNcIiwgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJfdmFsdWVcIikgJiYgdGhpcy5fdmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuY29kZW1pcnJvci5zZXRWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwicnRsXCIpKSB7XG4gICAgICB0aGlzLmNvZGVtaXJyb3Iuc2V0T3B0aW9uKFwiZ3V0dGVyc1wiLCB0aGlzLl9jYWxjR3V0dGVycygpKTtcbiAgICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImVycm9yXCIpKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJlcnJvci1zdGF0ZVwiLCB0aGlzLmVycm9yKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGxvYWRlZCA9IGF3YWl0IGxvYWRDb2RlTWlycm9yKCk7XG5cbiAgICBjb25zdCBjb2RlTWlycm9yID0gbG9hZGVkLmNvZGVNaXJyb3I7XG5cbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcblxuICAgIHNoYWRvd1Jvb3QhLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgICAke2xvYWRlZC5jb2RlTWlycm9yQ3NzfVxuICAgICAgLkNvZGVNaXJyb3Ige1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvZGUtbWlycm9yLWhlaWdodCwgYXV0byk7XG4gICAgICAgIGRpcmVjdGlvbjogdmFyKC0tY29kZS1taXJyb3ItZGlyZWN0aW9uLCBsdHIpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3Itc2Nyb2xsIHtcbiAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tY29kZS1taXJyb3ItbWF4LWhlaWdodCwgLS1jb2RlLW1pcnJvci1oZWlnaHQpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYm9yZGVyLXJpZ2h0O1xuICAgICAgfVxuICAgICAgOmhvc3QoLmVycm9yLXN0YXRlKSAuQ29kZU1pcnJvci1ndXR0ZXJzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1zdGF0ZS1jb2xvciwgcmVkKTtcbiAgICAgIH1cbiAgICAgIC5Db2RlTWlycm9yLWZvY3VzZWQgLkNvZGVNaXJyb3ItZ3V0dGVycyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuICAgICAgLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgfVxuICAgICAgLnJ0bCAuQ29kZU1pcnJvci12c2Nyb2xsYmFyIHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICAgIC5ydGwtZ3V0dGVyIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5gO1xuXG4gICAgdGhpcy5jb2RlbWlycm9yID0gY29kZU1pcnJvcihzaGFkb3dSb290LCB7XG4gICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICAgIHRhYlNpemU6IDIsXG4gICAgICBtb2RlOiB0aGlzLm1vZGUsXG4gICAgICBhdXRvZm9jdXM6IHRoaXMuYXV0b2ZvY3VzICE9PSBmYWxzZSxcbiAgICAgIHZpZXdwb3J0TWFyZ2luOiBJbmZpbml0eSxcbiAgICAgIGV4dHJhS2V5czoge1xuICAgICAgICBUYWI6IFwiaW5kZW50TW9yZVwiLFxuICAgICAgICBcIlNoaWZ0LVRhYlwiOiBcImluZGVudExlc3NcIixcbiAgICAgIH0sXG4gICAgICBndXR0ZXJzOiB0aGlzLl9jYWxjR3V0dGVycygpLFxuICAgIH0pO1xuICAgIHRoaXMuX3NldFNjcm9sbEJhckRpcmVjdGlvbigpO1xuICAgIHRoaXMuY29kZW1pcnJvciEub24oXCJjaGFuZ2VzXCIsICgpID0+IHRoaXMuX29uQ2hhbmdlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIGlmIChuZXdWYWx1ZSA9PT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IHRoaXMuX3ZhbHVlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY0d1dHRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnJ0bCA/IFtcInJ0bC1ndXR0ZXJcIiwgXCJDb2RlTWlycm9yLWxpbmVudW1iZXJzXCJdIDogW107XG4gIH1cblxuICBwcml2YXRlIF9zZXRTY3JvbGxCYXJEaXJlY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29kZW1pcnJvcikge1xuICAgICAgdGhpcy5jb2RlbWlycm9yLmdldFdyYXBwZXJFbGVtZW50KCkuY2xhc3NMaXN0LnRvZ2dsZShcInJ0bFwiLCB0aGlzLnJ0bCk7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb2RlLWVkaXRvclwiOiBIYUNvZGVFZGl0b3I7XG4gIH1cbn1cbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHlhbWwgZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuL2V2ZW50cy1saXN0XCI7XG5pbXBvcnQgXCIuL2V2ZW50LXN1YnNjcmliZS1jYXJkXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNvbnN0IEVSUk9SX1NFTlRJTkVMID0ge307XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVBhbmVsRGV2RXZlbnQgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZSBpcm9uLWZsZXggaXJvbi1wb3NpdGlvbmluZ1wiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYS1mb3JtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC1zdWJzY3JpYmUtY2FyZCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVGb3JtQ2xhc3NlcyhuYXJyb3cpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEZpcmUgYW4gZXZlbnQgb24gdGhlIGV2ZW50IGJ1cy5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5ob21lLWFzc2lzdGFudC5pby9kb2NzL2NvbmZpZ3VyYXRpb24vZXZlbnRzL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5FdmVudHMgRG9jdW1lbnRhdGlvbi48L2FcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhhLWZvcm1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIkV2ZW50IFR5cGVcIlxuICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e2V2ZW50VHlwZX19XCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPHA+RXZlbnQgRGF0YSAoWUFNTCwgb3B0aW9uYWwpPC9wPlxuICAgICAgICAgICAgPGhhLWNvZGUtZWRpdG9yXG4gICAgICAgICAgICAgIG1vZGU9XCJ5YW1sXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJbW2V2ZW50RGF0YV1dXCJcbiAgICAgICAgICAgICAgZXJyb3I9XCJbWyF2YWxpZEpTT05dXVwiXG4gICAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJfeWFtbENoYW5nZWRcIlxuICAgICAgICAgICAgPjwvaGEtY29kZS1lZGl0b3I+XG4gICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImZpcmVFdmVudFwiIHJhaXNlZCBkaXNhYmxlZD1cIltbIXZhbGlkSlNPTl1dXCJcbiAgICAgICAgICAgICAgPkZpcmUgRXZlbnQ8L213Yy1idXR0b25cbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+QXZhaWxhYmxlIEV2ZW50czwvZGl2PlxuICAgICAgICAgIDxldmVudHMtbGlzdFxuICAgICAgICAgICAgb24tZXZlbnQtc2VsZWN0ZWQ9XCJldmVudFNlbGVjdGVkXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgPjwvZXZlbnRzLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZXZlbnQtc3Vic2NyaWJlLWNhcmQgaGFzcz1cIltbaGFzc11dXCI+PC9ldmVudC1zdWJzY3JpYmUtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGV2ZW50VHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgZXZlbnREYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBwYXJzZWRKU09OOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVQYXJzZWRFdmVudERhdGEoZXZlbnREYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgdmFsaWRKU09OOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlVmFsaWRKU09OKHBhcnNlZEpTT04pXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBldmVudFNlbGVjdGVkKGV2KSB7XG4gICAgdGhpcy5ldmVudFR5cGUgPSBldi5kZXRhaWwuZXZlbnRUeXBlO1xuICB9XG5cbiAgX2NvbXB1dGVQYXJzZWRFdmVudERhdGEoZXZlbnREYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBldmVudERhdGEudHJpbSgpID8geWFtbC5zYWZlTG9hZChldmVudERhdGEpIDoge307XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gRVJST1JfU0VOVElORUw7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVWYWxpZEpTT04ocGFyc2VkSlNPTikge1xuICAgIHJldHVybiBwYXJzZWRKU09OICE9PSBFUlJPUl9TRU5USU5FTDtcbiAgfVxuXG4gIF95YW1sQ2hhbmdlZChldikge1xuICAgIHRoaXMuZXZlbnREYXRhID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgZmlyZUV2ZW50KCkge1xuICAgIGlmICghdGhpcy5ldmVudFR5cGUpIHtcbiAgICAgIGFsZXJ0KFwiRXZlbnQgdHlwZSBpcyBhIG1hbmRhdG9yeSBmaWVsZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJQT1NUXCIsIFwiZXZlbnRzL1wiICsgdGhpcy5ldmVudFR5cGUsIHRoaXMucGFyc2VkSlNPTikudGhlbihcbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmZpcmUoXCJoYXNzLW5vdGlmaWNhdGlvblwiLCB7XG4gICAgICAgICAgbWVzc2FnZTogXCJFdmVudCBcIiArIHRoaXMuZXZlbnRUeXBlICsgXCIgc3VjY2Vzc2Z1bCBmaXJlZCFcIixcbiAgICAgICAgfSk7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUZvcm1DbGFzc2VzKG5hcnJvdykge1xuICAgIHJldHVybiBuYXJyb3cgPyBcIlwiIDogXCJsYXlvdXQgaG9yaXpvbnRhbFwiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImRldmVsb3Blci10b29scy1ldmVudFwiLCBIYVBhbmVsRGV2RXZlbnQpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IEhhc3NFdmVudCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgZm9ybWF0X3RpbWUgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfdGltZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImV2ZW50LXN1YnNjcmliZS1jYXJkXCIpXG5jbGFzcyBFdmVudFN1YnNjcmliZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2V2ZW50VHlwZSA9IFwiXCI7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc3Vic2NyaWJlZD86ICgpID0+IHZvaWQ7XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZXZlbnRzOiBBcnJheTx7IGlkOiBudW1iZXI7IGV2ZW50OiBIYXNzRXZlbnQgfT4gPSBbXTtcblxuICBwcml2YXRlIF9ldmVudENvdW50ID0gMDtcblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAodGhpcy5fc3Vic2NyaWJlZCkge1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCgpO1xuICAgICAgdGhpcy5fc3Vic2NyaWJlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIkxpc3RlbiB0byBldmVudHNcIj5cbiAgICAgICAgPGZvcm0+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9zdWJzY3JpYmVkXG4gICAgICAgICAgICAgID8gXCJMaXN0ZW5pbmcgdG9cIlxuICAgICAgICAgICAgICA6IFwiRXZlbnQgdG8gc3Vic2NyaWJlIHRvXCJ9XG4gICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJzY3JpYmVkICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9ldmVudFR5cGV9XG4gICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX3ZhbHVlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fZXZlbnRUeXBlID09PSBcIlwifVxuICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5faGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLl9zdWJzY3JpYmVkID8gXCJTdG9wIGxpc3RlbmluZ1wiIDogXCJTdGFydCBsaXN0ZW5pbmdcIn1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c1wiPlxuICAgICAgICAgICR7dGhpcy5fZXZlbnRzLm1hcChcbiAgICAgICAgICAgIChldikgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgRXZlbnQgJHtldi5pZH0gZmlyZWRcbiAgICAgICAgICAgICAgICAke2Zvcm1hdF90aW1lKFxuICAgICAgICAgICAgICAgICAgbmV3IERhdGUoZXYuZXZlbnQudGltZV9maXJlZCksXG4gICAgICAgICAgICAgICAgICB0aGlzLmhhc3MhLmxhbmd1YWdlXG4gICAgICAgICAgICAgICAgKX06XG4gICAgICAgICAgICAgICAgPHByZT4ke0pTT04uc3RyaW5naWZ5KGV2LmV2ZW50LCBudWxsLCA0KX08L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX3ZhbHVlQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5fZXZlbnRUeXBlID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlU3VibWl0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLl9zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkKCk7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdWJzY3JpYmVkID0gYXdhaXQgdGhpcy5oYXNzIS5jb25uZWN0aW9uLnN1YnNjcmliZUV2ZW50czxIYXNzRXZlbnQ+KFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YWlsID1cbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cy5sZW5ndGggPiAzMCA/IHRoaXMuX2V2ZW50cy5zbGljZSgwLCAyOSkgOiB0aGlzLl9ldmVudHM7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgaWQ6IHRoaXMuX2V2ZW50Q291bnQrKyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi50YWlsLFxuICAgICAgICAgIF07XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX2V2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICAgLmV2ZW50cyB7XG4gICAgICAgIG1hcmdpbjogLTE2cHggMDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgfVxuICAgICAgLmV2ZW50IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICB9XG4gICAgICAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZXZlbnQtc3Vic2NyaWJlLWNhcmRcIjogRXZlbnRTdWJzY3JpYmVDYXJkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEV2ZW50c0xpc3QgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICB1bCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx1bD5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tldmVudHNdXVwiIGFzPVwiZXZlbnRcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uLWNsaWNrPVwiZXZlbnRTZWxlY3RlZFwiPnt7ZXZlbnQuZXZlbnR9fTwvYT5cbiAgICAgICAgICAgIDxzcGFuPiAoPC9zcGFuPjxzcGFuPnt7ZXZlbnQubGlzdGVuZXJfY291bnR9fTwvc3BhblxuICAgICAgICAgICAgPjxzcGFuPiBsaXN0ZW5lcnMpPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcIkdFVFwiLCBcImV2ZW50c1wiKS50aGVuKFxuICAgICAgZnVuY3Rpb24oZXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgfS5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfVxuXG4gIGV2ZW50U2VsZWN0ZWQoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZmlyZShcImV2ZW50LXNlbGVjdGVkXCIsIHsgZXZlbnRUeXBlOiBldi5tb2RlbC5ldmVudC5ldmVudCB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJldmVudHMtbGlzdFwiLCBFdmVudHNMaXN0KTtcbiIsImludGVyZmFjZSBMb2FkZWRDb2RlTWlycm9yIHtcbiAgY29kZU1pcnJvcjogYW55O1xuICBjb2RlTWlycm9yQ3NzOiBhbnk7XG59XG5cbmxldCBsb2FkZWQ6IFByb21pc2U8TG9hZGVkQ29kZU1pcnJvcj47XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29kZU1pcnJvciA9IGFzeW5jICgpOiBQcm9taXNlPExvYWRlZENvZGVNaXJyb3I+ID0+IHtcbiAgaWYgKCFsb2FkZWQpIHtcbiAgICBsb2FkZWQgPSBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJjb2RlbWlycm9yXCIgKi8gXCIuL2NvZGVtaXJyb3JcIik7XG4gIH1cbiAgcmV0dXJuIGxvYWRlZDtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFTQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBOERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFlQTtBQUFBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBa0lBO0FBaElBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdElBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsS0E7QUFTQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQUE7O0FBR0E7QUFJQTtBQUVBO0FBa0dBO0FBaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7Ozs7QUFJQTs7QUFHQTtBQUNBO0FBSUE7O0FBRUE7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBMUdBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==