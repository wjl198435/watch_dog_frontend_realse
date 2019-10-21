(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-cloud"],{

/***/ "./node_modules/@material/mwc-base/form-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/mwc-base/form-element.js ***!
  \*********************************************************/
/*! exports provided: defaultConverter, notEqual, UpdatingElement, customElement, property, query, queryAll, eventOptions, html, svg, TemplateResult, SVGTemplateResult, supportsAdoptingStyleSheets, CSSResult, unsafeCSS, css, LitElement, classMap, observer, addHasRemoveClass, BaseElement, FormElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony import */ var _base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["property"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["queryAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["eventOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["TemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGTemplateResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["SVGTemplateResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classMap", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["classMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["observer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addHasRemoveClass", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["addHasRemoveClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseElement", function() { return _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"]; });

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


class FormElement extends _base_element__WEBPACK_IMPORTED_MODULE_0__["BaseElement"] {
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    click() {
        if (this.formElement) {
            this.formElement.focus();
            this.formElement.click();
        }
    }
    setAriaLabel(label) {
        if (this.formElement) {
            this.formElement.setAttribute('aria-label', label);
        }
    }
    firstUpdated() {
        super.firstUpdated();
        this.mdcRoot.addEventListener('change', (e) => {
            this.dispatchEvent(new Event('change', e));
        });
    }
}
//# sourceMappingURL=form-element.js.map

/***/ }),

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

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");

// Not duplicate, this is for typing.
// tslint:disable-next-line

class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"] {
    connectedCallback() {
        super.connectedCallback();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            this.icon =
                window.getComputedStyle(this).direction === "ltr"
                    ? "hass:chevron-right"
                    : "hass:chevron-left";
        }, 100);
    }
}
customElements.define("ha-icon-next", HaIconNext);


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

/***/ "./src/data/alexa.ts":
/*!***************************!*\
  !*** ./src/data/alexa.ts ***!
  \***************************/
/*! exports provided: fetchCloudAlexaEntities, syncCloudAlexaEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudAlexaEntities", function() { return fetchCloudAlexaEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncCloudAlexaEntities", function() { return syncCloudAlexaEntities; });
const fetchCloudAlexaEntities = (hass) => hass.callWS({ type: "cloud/alexa/entities" });
const syncCloudAlexaEntities = (hass) => hass.callWS({ type: "cloud/alexa/sync" });


/***/ }),

/***/ "./src/data/webhook.ts":
/*!*****************************!*\
  !*** ./src/data/webhook.ts ***!
  \*****************************/
/*! exports provided: fetchWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWebhooks", function() { return fetchWebhooks; });
const fetchWebhooks = (hass) => hass.callWS({
    type: "webhook/list",
});


/***/ }),

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      navigate(...args) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
      }
    }
));


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-account.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-account.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _cloud_webhooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cloud-webhooks */ "./src/panels/config/cloud/account/cloud-webhooks.ts");
/* harmony import */ var _cloud_alexa_pref__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cloud-alexa-pref */ "./src/panels/config/cloud/account/cloud-alexa-pref.ts");
/* harmony import */ var _cloud_google_pref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cloud-google-pref */ "./src/panels/config/cloud/account/cloud-google-pref.ts");
/* harmony import */ var _cloud_remote_pref__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cloud-remote-pref */ "./src/panels/config/cloud/account/cloud-remote-pref.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");





















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class CloudAccount extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex ha-style">
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        .account-row {
          display: flex;
          padding: 0 16px;
        }
        mwc-button {
          align-self: center;
        }
        .soon {
          font-style: italic;
          margin-top: 24px;
          text-align: center;
        }
        .nowrap {
          white-space: nowrap;
        }
        .wrap {
          white-space: normal;
        }
        .status {
          text-transform: capitalize;
          padding: 16px;
        }
        a {
          color: var(--primary-color);
        }
      </style>
      <hass-subpage header="[[localize('ui.panel.config.cloud.caption')]]">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header"
              >[[localize('ui.panel.config.cloud.caption')]]</span
            >
            <div slot="introduction">
              <p>
                [[localize('ui.panel.config.cloud.account.thank_you_note')]]
              </p>
            </div>

            <ha-card
              header="[[localize('ui.panel.config.cloud.account.nabu_casa_account')]]"
            >
              <div class="account-row">
                <paper-item-body two-line="">
                  [[cloudStatus.email]]
                  <div secondary class="wrap">
                    [[_formatSubscription(_subscription)]]
                  </div>
                </paper-item-body>
              </div>

              <div class="account-row">
                <paper-item-body
                  >[[localize('ui.panel.config.cloud.account.connection_status')]]</paper-item-body
                >
                <div class="status">[[cloudStatus.cloud]]</div>
              </div>

              <div class="card-actions">
                <a href="https://account.nabucasa.com" target="_blank"
                  ><mwc-button
                    >[[localize('ui.panel.config.cloud.account.manage_account')]]</mwc-button
                  ></a
                >
                <mwc-button style="float: right" on-click="handleLogout"
                  >[[localize('ui.panel.config.cloud.account.sign_out')]]</mwc-button
                >
              </div>
            </ha-card>
          </ha-config-section>

          <ha-config-section is-wide="[[isWide]]">
            <span slot="header"
              >[[localize('ui.panel.config.cloud.account.integrations')]]</span
            >
            <div slot="introduction">
              <p>
                [[localize('ui.panel.config.cloud.account.integrations_introduction')]]
              </p>
              <p>
                [[localize('ui.panel.config.cloud.account.integrations_introduction2')]]
                <a href="https://www.nabucasa.com" target="_blank"
                  >[[localize('ui.panel.config.cloud.account.integrations_link_all_features')]]</a
                >.
              </p>
            </div>

            <cloud-remote-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-remote-pref>

            <cloud-alexa-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-alexa-pref>

            <cloud-google-pref
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-google-pref>

            <cloud-webhooks
              hass="[[hass]]"
              cloud-status="[[cloudStatus]]"
            ></cloud-webhooks>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      cloudStatus: Object,
      _subscription: {
        type: Object,
        value: null,
      },
    };
  }

  ready() {
    super.ready();
    this._fetchSubscriptionInfo();
  }

  _computeRemoteConnected(connected) {
    return connected
      ? this.hass.localize("ui.panel.config.cloud.account.connected")
      : this.hass.localize("ui.panel.config.cloud.account.not_connected");
  }

  async _fetchSubscriptionInfo() {
    this._subscription = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_14__["fetchCloudSubscriptionInfo"])(this.hass);
    if (
      this._subscription.provider &&
      this.cloudStatus &&
      this.cloudStatus.cloud !== "connected"
    ) {
      this.fire("ha-refresh-cloud-status");
    }
  }

  handleLogout() {
    this.hass
      .callApi("post", "cloud/logout")
      .then(() => this.fire("ha-refresh-cloud-status"));
  }

  _formatSubscription(subInfo) {
    if (subInfo === null) {
      return this.hass.localize(
        "ui.panel.config.cloud.account.fetching_subscription"
      );
    }

    let description = subInfo.human_description;

    if (subInfo.plan_renewal_date) {
      description = description.replace(
        "{periodEnd}",
        Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_15__["default"])(
          new Date(subInfo.plan_renewal_date * 1000),
          this.hass.language
        )
      );
    }

    return description;
  }
}

customElements.define("cloud-account", CloudAccount);


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-alexa-pref.ts":
/*!*************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-alexa-pref.ts ***!
  \*************************************************************/
/*! exports provided: CloudAlexaPref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudAlexaPref", function() { return CloudAlexaPref; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");








class CloudAlexaPref extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._syncing = false;
    }
    render() {
        if (!this.cloudStatus) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const { alexa_enabled, alexa_report_state } = this.cloudStatus.prefs;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.alexa.title")}
      >
        <div class="switch">
          <ha-switch
            .checked=${alexa_enabled}
            @change=${this._enabledToggleChanged}
          ></ha-switch>
        </div>
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.alexa.info")}
          <ul>
            <li>
              <a
                href="https://skills-store.amazon.com/deeplink/dp/B0772J1QKB?deviceType=app"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.alexa.enable_ha_skill")}
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/amazon_alexa/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.alexa.config_documentation")}
              </a>
            </li>
          </ul>
          ${alexa_enabled
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="state-reporting">
                  <h3>
                    ${this.hass.localize("ui.panel.config.cloud.account.alexa.enable_state_reporting")}
                  </h3>
                  <div class="state-reporting-switch">
                    <ha-switch
                      .checked=${alexa_report_state}
                      @change=${this._reportToggleChanged}
                    ></ha-switch>
                  </div>
                </div>
                <p>
                  ${this.hass.localize("ui.panel.config.cloud.account.alexa.info_state_reporting")}
                </p>
              `
            : ""}
        </div>
        <div class="card-actions">
          <mwc-button @click=${this._handleSync} .disabled=${this._syncing}>
            ${this.hass.localize("ui.panel.config.cloud.account.alexa.sync_entities")}
          </mwc-button>
          <div class="spacer"></div>
          <a href="/config/cloud/alexa">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.account.alexa.manage_entities")}</mwc-button
            >
          </a>
        </div>
      </ha-card>
    `;
    }
    async _handleSync() {
        this._syncing = true;
        try {
            await Object(_data_alexa__WEBPACK_IMPORTED_MODULE_7__["syncCloudAlexaEntities"])(this.hass);
        }
        catch (err) {
            alert(`${this.hass.localize("ui.panel.config.cloud.account.alexa.sync_entities_error")} ${err.body.message}`);
        }
        finally {
            this._syncing = false;
        }
    }
    async _enabledToggleChanged(ev) {
        const toggle = ev.target;
        try {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, { alexa_enabled: toggle.checked });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        }
        catch (err) {
            toggle.checked = !toggle.checked;
        }
    }
    async _reportToggleChanged(ev) {
        const toggle = ev.target;
        try {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
                alexa_report_state: toggle.checked,
            });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        }
        catch (err) {
            alert(`${this.hass.localize("ui.panel.config.cloud.account.alexa.state_reporting_error", "enable_disable", this.hass.localize(toggle.checked
                ? "ui.panel.config.cloud.account.alexa.enable"
                : "ui.panel.config.cloud.account.alexa.disable"))} ${err.message}`);
            toggle.checked = !toggle.checked;
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      a {
        color: var(--primary-color);
      }
      .switch {
        position: absolute;
        right: 24px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
      .state-reporting {
        display: flex;
        margin-top: 1.5em;
      }
      .state-reporting + p {
        margin-top: 0.5em;
      }
      .state-reporting h3 {
        flex-grow: 1;
        margin: 0;
      }
      .state-reporting-switch {
        margin-top: 0.25em;
        margin-right: 7px;
        margin-left: 0.5em;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexaPref.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexaPref.prototype, "cloudStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], CloudAlexaPref.prototype, "_syncing", void 0);
customElements.define("cloud-alexa-pref", CloudAlexaPref);


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-google-pref.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-google-pref.ts ***!
  \**************************************************************/
/*! exports provided: CloudGooglePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudGooglePref", function() { return CloudGooglePref; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");








class CloudGooglePref extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    static get properties() {
        return {
            hass: {},
            cloudStatus: {},
        };
    }
    render() {
        if (!this.cloudStatus) {
            return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] ``;
        }
        const { google_enabled, google_report_state, google_secure_devices_pin, } = this.cloudStatus.prefs;
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.google.title")}
      >
        <div class="switch">
          <ha-switch
            id="google_enabled"
            .checked="${google_enabled}"
            @change="${this._enableToggleChanged}"
          ></ha-switch>
        </div>
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.google.info")}
          <ul>
            <li>
              <a
                href="https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.google.enable_ha_skill")}
              </a>
            </li>
            <li>
              <a
                href="https://www.nabucasa.com/config/google_assistant/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.cloud.account.google.config_documentation")}
              </a>
            </li>
          </ul>
          ${google_enabled
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <div class="state-reporting">
                  <h3>
                    ${this.hass.localize("ui.panel.config.cloud.account.google.enable_state_reporting")}
                  </h3>
                  <div class="state-reporting-switch">
                    <ha-switch
                      .checked=${google_report_state}
                      @change=${this._reportToggleChanged}
                    ></ha-switch>
                  </div>
                </div>
                <p>
                  ${this.hass.localize("ui.panel.config.cloud.account.google.info_state_reporting")}
                </p>

                <div class="secure_devices">
                  <h3>
                    ${this.hass.localize("ui.panel.config.cloud.account.google.security_devices")}
                  </h3>
                  ${this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_info")}
                  <paper-input
                    label="${this.hass.localize("ui.panel.config.cloud.account.google.devices_pin")}"
                    id="google_secure_devices_pin"
                    placeholder="${this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_hint")}"
                    .value=${google_secure_devices_pin || ""}
                    @change="${this._pinChanged}"
                  ></paper-input>
                </div>
              `
            : ""}
        </div>
        <div class="card-actions">
          <ha-call-api-button
            .hass="${this.hass}"
            .disabled="${!google_enabled}"
            path="cloud/google_actions/sync"
          >
            ${this.hass.localize("ui.panel.config.cloud.account.google.sync_entities")}
          </ha-call-api-button>
          <div class="spacer"></div>
          <a href="/config/cloud/google-assistant">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.account.google.manage_entities")}</mwc-button
            >
          </a>
        </div>
      </ha-card>
    `;
    }
    async _enableToggleChanged(ev) {
        const toggle = ev.target;
        try {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, { [toggle.id]: toggle.checked });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        }
        catch (err) {
            toggle.checked = !toggle.checked;
        }
    }
    async _reportToggleChanged(ev) {
        const toggle = ev.target;
        try {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
                google_report_state: toggle.checked,
            });
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        }
        catch (err) {
            alert(`Unable to ${toggle.checked ? "enable" : "disable"} report state. ${err.message}`);
            toggle.checked = !toggle.checked;
        }
    }
    async _pinChanged(ev) {
        const input = ev.target;
        try {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
                [input.id]: input.value || null,
            });
            Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_7__["showSaveSuccessToast"])(this, this.hass);
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
        }
        catch (err) {
            alert(`${this.hass.localize("ui.panel.config.cloud.account.google.enter_pin_error")} ${err.message}`);
            input.value = this.cloudStatus.prefs.google_secure_devices_pin;
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
      a {
        color: var(--primary-color);
      }
      .switch {
        position: absolute;
        right: 24px;
        top: 32px;
      }
      ha-call-api-button {
        color: var(--primary-color);
        font-weight: 500;
      }
      .secure_devices {
        padding-top: 8px;
      }
      paper-input {
        width: 250px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
      .state-reporting {
        display: flex;
        margin-top: 1.5em;
      }
      .state-reporting + p {
        margin-top: 0.5em;
      }
      h3 {
        margin: 0 0 8px 0;
      }
      .state-reporting h3 {
        flex-grow: 1;
        margin: 0;
      }
      .state-reporting-switch {
        margin-top: 0.25em;
        margin-right: 7px;
        margin-left: 0.5em;
      }
    `;
    }
}
customElements.define("cloud-google-pref", CloudGooglePref);


/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-remote-pref.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-remote-pref.ts ***!
  \**************************************************************/
/*! exports provided: CloudRemotePref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudRemotePref", function() { return CloudRemotePref; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-cloud-certificate/show-dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts");









let CloudRemotePref = class CloudRemotePref extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    static get properties() {
        return {
            hass: {},
            cloudStatus: {},
        };
    }
    render() {
        if (!this.cloudStatus) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        const { remote_connected, remote_domain, remote_certificate, } = this.cloudStatus;
        if (!remote_certificate) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <ha-card
          header=${this.hass.localize("ui.panel.config.cloud.account.remote.title")}
        >
          <div class="preparing">
            ${this.hass.localize("ui.panel.config.cloud.account.remote.access_is_being_prepared")}
          </div>
        </ha-card>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.remote.title")}
      >
        <div class="switch">
          <ha-switch
            .checked="${remote_connected}"
            @change="${this._toggleChanged}"
          ></ha-switch>
        </div>
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.remote.info")}
          ${remote_connected
            ? this.hass.localize("ui.panel.config.cloud.account.remote.instance_is_available")
            : this.hass.localize("ui.panel.config.cloud.account.remote.instance_will_be_available")}
          <a href="https://${remote_domain}" target="_blank" class="break-word">
            https://${remote_domain}</a
          >.
        </div>
        <div class="card-actions">
          <a href="https://www.nabucasa.com/config/remote/" target="_blank">
            <mwc-button
              >${this.hass.localize("ui.panel.config.cloud.account.remote.link_learn_how_it_works")}</mwc-button
            >
          </a>
          ${remote_certificate
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="spacer"></div>
                <mwc-button @click=${this._openCertInfo}>
                  ${this.hass.localize("ui.panel.config.cloud.account.remote.certificate_info")}
                </mwc-button>
              `
            : ""}
        </div>
      </ha-card>
    `;
    }
    _openCertInfo() {
        Object(_dialog_cloud_certificate_show_dialog_cloud_certificate__WEBPACK_IMPORTED_MODULE_8__["showCloudCertificateDialog"])(this, {
            certificateInfo: this.cloudStatus.remote_certificate,
        });
    }
    async _toggleChanged(ev) {
        const toggle = ev.target;
        try {
            if (toggle.checked) {
                await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["connectCloudRemote"])(this.hass);
            }
            else {
                await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["disconnectCloudRemote"])(this.hass);
            }
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "ha-refresh-cloud-status");
        }
        catch (err) {
            alert(err.message);
            toggle.checked = !toggle.checked;
        }
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .preparing {
        padding: 0 16px 16px;
      }
      a {
        color: var(--primary-color);
      }
      .break-word {
        overflow-wrap: break-word;
      }
      .switch {
        position: absolute;
        right: 24px;
        top: 32px;
      }
      .card-actions {
        display: flex;
      }
      .card-actions a {
        text-decoration: none;
      }
      .spacer {
        flex-grow: 1;
      }
    `;
    }
};
CloudRemotePref = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-remote-pref")
], CloudRemotePref);



/***/ }),

/***/ "./src/panels/config/cloud/account/cloud-webhooks.ts":
/*!***********************************************************!*\
  !*** ./src/panels/config/cloud/account/cloud-webhooks.ts ***!
  \***********************************************************/
/*! exports provided: CloudWebhooks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudWebhooks", function() { return CloudWebhooks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_webhook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/webhook */ "./src/data/webhook.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../dialog-manage-cloudhook/show-dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts");










class CloudWebhooks extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super();
        this._progress = [];
    }
    static get properties() {
        return {
            hass: {},
            cloudStatus: {},
            _cloudHooks: {},
            _localHooks: {},
            _progress: {},
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._fetchData();
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      ${this.renderStyle()}
      <ha-card
        header=${this.hass.localize("ui.panel.config.cloud.account.webhooks.title")}
      >
        <div class="card-content">
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.info")}
          ${this._renderBody()}

          <div class="footer">
            <a href="https://www.nabucasa.com/config/webhooks" target="_blank">
              ${this.hass.localize("ui.panel.config.cloud.account.webhooks.link_learn_more")}
            </a>
          </div>
        </div>
      </ha-card>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("cloudStatus") && this.cloudStatus) {
            this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
        }
    }
    _renderBody() {
        if (!this.cloudStatus || !this._localHooks || !this._cloudHooks) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <div class="body-text">
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.loading")}
        </div>
      `;
        }
        if (this._localHooks.length === 0) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <div class="body-text">
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet")}
          <a href="/config/integrations"
            >${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_integration")}</a
          >
          ${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet2")}
          <a href="/config/automation/new"
            >${this.hass.localize("ui.panel.config.cloud.account.webhooks.no_hooks_yet_link_automation")}</a
          >.
        </div>
      `;
        }
        return this._localHooks.map((entry) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <div class="webhook" .entry="${entry}">
          <paper-item-body two-line>
            <div>
              ${entry.name}
              ${entry.domain === entry.name.toLowerCase()
            ? ""
            : ` (${entry.domain})`}
            </div>
            <div secondary>${entry.webhook_id}</div>
          </paper-item-body>
          ${this._progress.includes(entry.webhook_id)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <div class="progress">
                  <paper-spinner active></paper-spinner>
                </div>
              `
            : this._cloudHooks[entry.webhook_id]
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <mwc-button @click="${this._handleManageButton}">
                  ${this.hass.localize("ui.panel.config.cloud.account.webhooks.manage")}
                </mwc-button>
              `
                : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <ha-switch @click="${this._enableWebhook}"></ha-switch>
              `}
        </div>
      `);
    }
    _showDialog(webhookId) {
        const webhook = this._localHooks.find((ent) => ent.webhook_id === webhookId);
        const cloudhook = this._cloudHooks[webhookId];
        Object(_dialog_manage_cloudhook_show_dialog_manage_cloudhook__WEBPACK_IMPORTED_MODULE_9__["showManageCloudhookDialog"])(this, {
            webhook,
            cloudhook,
            disableHook: () => this._disableWebhook(webhookId),
        });
    }
    _handleManageButton(ev) {
        const entry = ev.currentTarget.parentElement.entry;
        this._showDialog(entry.webhook_id);
    }
    async _enableWebhook(ev) {
        const entry = ev.currentTarget.parentElement.entry;
        this._progress = [...this._progress, entry.webhook_id];
        let updatedWebhook;
        try {
            updatedWebhook = await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["createCloudhook"])(this.hass, entry.webhook_id);
        }
        catch (err) {
            alert(err.message);
            return;
        }
        finally {
            this._progress = this._progress.filter((wid) => wid !== entry.webhook_id);
        }
        this._cloudHooks = Object.assign(Object.assign({}, this._cloudHooks), { [entry.webhook_id]: updatedWebhook });
        // Only open dialog if we're not also enabling others, otherwise it's confusing
        if (this._progress.length === 0) {
            this._showDialog(entry.webhook_id);
        }
    }
    async _disableWebhook(webhookId) {
        this._progress = [...this._progress, webhookId];
        try {
            await Object(_data_cloud__WEBPACK_IMPORTED_MODULE_8__["deleteCloudhook"])(this.hass, webhookId);
        }
        catch (err) {
            alert(`${this.hass.localize("ui.panel.config.cloud.account.webhooks.disable_hook_error_msg")} ${err.message}`);
            return;
        }
        finally {
            this._progress = this._progress.filter((wid) => wid !== webhookId);
        }
        // Remove cloud related parts from entry.
        const _a = this._cloudHooks, _b = webhookId, disabledHook = _a[_b], newHooks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, [typeof _b === "symbol" ? _b : _b + ""]);
        this._cloudHooks = newHooks;
    }
    async _fetchData() {
        this._localHooks = this.hass.config.components.includes("webhook")
            ? await Object(_data_webhook__WEBPACK_IMPORTED_MODULE_7__["fetchWebhooks"])(this.hass)
            : [];
    }
    renderStyle() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <style>
        .body-text {
          padding: 8px 0;
        }
        .webhook {
          display: flex;
          padding: 4px 0;
        }
        .progress {
          margin-right: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .footer {
          padding-top: 16px;
        }
        .body-text a,
        .footer a {
          color: var(--primary-color);
        }
      </style>
    `;
    }
}
customElements.define("cloud-webhooks", CloudWebhooks);


/***/ }),

/***/ "./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts":
/*!*******************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-cloud-certificate/show-dialog-cloud-certificate.ts ***!
  \*******************************************************************************************/
/*! exports provided: showCloudCertificateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCloudCertificateDialog", function() { return showCloudCertificateDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showCloudCertificateDialog = (element, webhookDialogParams) => {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-cloud-certificate",
        dialogImport: () => Promise.all(/*! import() | dialog-cloud-certificate */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("dialog-cloud-certificate")]).then(__webpack_require__.bind(null, /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate/dialog-cloud-certificate.ts")),
        dialogParams: webhookDialogParams,
    });
};


/***/ }),

/***/ "./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts":
/*!*****************************************************************************************!*\
  !*** ./src/panels/config/cloud/dialog-manage-cloudhook/show-dialog-manage-cloudhook.ts ***!
  \*****************************************************************************************/
/*! exports provided: showManageCloudhookDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showManageCloudhookDialog", function() { return showManageCloudhookDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const showManageCloudhookDialog = (element, webhookDialogParams) => {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-manage-cloudhook",
        dialogImport: () => Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-manage-cloudhook */ "./src/panels/config/cloud/dialog-manage-cloudhook/dialog-manage-cloudhook.ts")),
        dialogParams: webhookDialogParams,
    });
};


/***/ }),

/***/ "./src/panels/config/cloud/ha-config-cloud.ts":
/*!****************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _account_cloud_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account/cloud-account */ "./src/panels/config/cloud/account/cloud-account.js");
/* harmony import */ var _login_cloud_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/cloud-login */ "./src/panels/config/cloud/login/cloud-login.js");
/* harmony import */ var _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/hass-router-page */ "./src/layouts/hass-router-page.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");






const LOGGED_IN_URLS = ["account", "google-assistant", "alexa"];
const NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];
let HaConfigCloud = class HaConfigCloud extends _layouts_hass_router_page__WEBPACK_IMPORTED_MODULE_3__["HassRouterPage"] {
    constructor() {
        super(...arguments);
        this.routerOptions = {
            defaultPage: "login",
            showLoading: true,
            initialLoad: () => this._cloudStatusLoaded,
            // Guard the different pages based on if we're logged in.
            beforeRender: (page) => {
                if (this.cloudStatus.logged_in) {
                    if (!LOGGED_IN_URLS.includes(page)) {
                        return "account";
                    }
                }
                else {
                    if (!NOT_LOGGED_IN_URLS.includes(page)) {
                        return "login";
                    }
                }
                return undefined;
            },
            routes: {
                login: {
                    tag: "cloud-login",
                },
                register: {
                    tag: "cloud-register",
                    load: () => __webpack_require__.e(/*! import() | cloud-register */ "cloud-register").then(__webpack_require__.bind(null, /*! ./register/cloud-register */ "./src/panels/config/cloud/register/cloud-register.js")),
                },
                "forgot-password": {
                    tag: "cloud-forgot-password",
                    load: () => __webpack_require__.e(/*! import() | cloud-forgot-password */ "cloud-forgot-password").then(__webpack_require__.bind(null, /*! ./forgot-password/cloud-forgot-password */ "./src/panels/config/cloud/forgot-password/cloud-forgot-password.js")),
                },
                account: {
                    tag: "cloud-account",
                },
                "google-assistant": {
                    tag: "cloud-google-assistant",
                    load: () => Promise.all(/*! import() | cloud-google-assistant */[__webpack_require__.e(4), __webpack_require__.e("cloud-google-assistant")]).then(__webpack_require__.bind(null, /*! ./google-assistant/cloud-google-assistant */ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts")),
                },
                alexa: {
                    tag: "cloud-alexa",
                    load: () => Promise.all(/*! import() | cloud-alexa */[__webpack_require__.e(4), __webpack_require__.e("cloud-alexa")]).then(__webpack_require__.bind(null, /*! ./alexa/cloud-alexa */ "./src/panels/config/cloud/alexa/cloud-alexa.ts")),
                },
            },
        };
        this._flashMessage = "";
        this._loginEmail = "";
        this._cloudStatusLoaded = new Promise((resolve) => {
            this._resolveCloudStatusLoaded = resolve;
        });
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.addEventListener("cloud-done", (ev) => {
            this._flashMessage = ev.detail.flashMessage;
            Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, "/config/cloud/login");
        });
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("cloudStatus")) {
            const oldStatus = changedProps.get("cloudStatus");
            if (oldStatus === undefined) {
                this._resolveCloudStatusLoaded();
            }
            else if (oldStatus.logged_in !== this.cloudStatus.logged_in) {
                Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, this.route.prefix, true);
            }
        }
    }
    createElement(tag) {
        const el = super.createElement(tag);
        el.addEventListener("email-changed", (ev) => {
            this._loginEmail = ev.detail.value;
        });
        el.addEventListener("flash-message-changed", (ev) => {
            this._flashMessage = ev.detail.value;
        });
        return el;
    }
    updatePageEl(el) {
        // We are not going to update if the current page if we are not logged in
        // and the current page requires being logged in. Happens when we log out.
        if (this.cloudStatus &&
            !this.cloudStatus.logged_in &&
            LOGGED_IN_URLS.includes(this._currentPage)) {
            return;
        }
        if ("setProperties" in el) {
            // As long as we have Polymer pages
            el.setProperties({
                hass: this.hass,
                email: this._loginEmail,
                isWide: this.isWide,
                cloudStatus: this.cloudStatus,
                flashMessage: this._flashMessage,
            });
        }
        else {
            el.hass = this.hass;
            el.email = this._loginEmail;
            el.isWide = this.isWide;
            el.narrow = this.narrow;
            el.cloudStatus = this.cloudStatus;
            el.flashMessage = this._flashMessage;
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "route", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "cloudStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "_flashMessage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaConfigCloud.prototype, "_loginEmail", void 0);
HaConfigCloud = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-config-cloud")
], HaConfigCloud);


/***/ }),

/***/ "./src/panels/config/cloud/login/cloud-login.js":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/login/cloud-login.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");



















/*
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */
class CloudLogin extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_16__["default"])(
  Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]))
) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding-bottom: 24px;
          direction: ltr;
        }
        [slot="introduction"] {
          margin: -1em 0;
        }
        [slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-item {
          cursor: pointer;
        }
        ha-card {
          overflow: hidden;
        }
        ha-card .card-header {
          margin-bottom: -8px;
        }
        h1 {
          @apply --paper-font-headline;
          margin: 0;
        }
        .error {
          color: var(--google-red-500);
        }
        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        [hidden] {
          display: none;
        }
        .flash-msg {
          padding-right: 44px;
        }
        .flash-msg paper-icon-button {
          position: absolute;
          top: 8px;
          right: 8px;
          color: var(--secondary-text-color);
        }
      </style>
      <hass-subpage header="[[localize('ui.panel.config.cloud.caption')]]">
        <div class="content">
          <ha-config-section is-wide="[[isWide]]">
            <span slot="header"
              >[[localize('ui.panel.config.cloud.caption')]]</span
            >
            <div slot="introduction">
              <p>
                [[localize('ui.panel.config.cloud.login.introduction')]]
              </p>
              <p>
                [[localize('ui.panel.config.cloud.login.introduction2')]]
                <a href="https://www.nabucasa.com" target="_blank"
                  >Nabu&nbsp;Casa,&nbsp;Inc</a
                >
                [[localize('ui.panel.config.cloud.login.introduction2a')]]
              </p>
              <p>
                [[localize('ui.panel.config.cloud.login.introduction3')]]
              </p>
              <p>
                <a href="https://www.nabucasa.com" target="_blank"
                  >[[localize('ui.panel.config.cloud.login.learn_more_link')]]</a
                >
              </p>
            </div>

            <ha-card hidden$="[[!flashMessage]]">
              <div class="card-content flash-msg">
                [[flashMessage]]
                <paper-icon-button icon="hass:close" on-click="_dismissFlash"
                  >[[localize('ui.panel.config.cloud.login.dismiss')]]</paper-icon-button
                >
                <paper-ripple id="flashRipple" noink=""></paper-ripple>
              </div>
            </ha-card>

            <ha-card
              header="[[localize('ui.panel.config.cloud.login.sign_in')]]"
            >
              <div class="card-content">
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
                <paper-input
                  label="[[localize('ui.panel.config.cloud.login.email')]]"
                  id="email"
                  type="email"
                  value="{{email}}"
                  on-keydown="_keyDown"
                  error-message="[[localize('ui.panel.config.cloud.login.email_error_msg')]]"
                ></paper-input>
                <paper-input
                  id="password"
                  label="[[localize('ui.panel.config.cloud.login.password')]]"
                  value="{{_password}}"
                  type="password"
                  on-keydown="_keyDown"
                  error-message="[[localize('ui.panel.config.cloud.login.password_error_msg')]]"
                ></paper-input>
              </div>
              <div class="card-actions">
                <ha-progress-button
                  on-click="_handleLogin"
                  progress="[[_requestInProgress]]"
                  >[[localize('ui.panel.config.cloud.login.sign_in')]]</ha-progress-button
                >
                <button
                  class="link"
                  hidden="[[_requestInProgress]]"
                  on-click="_handleForgotPassword"
                >
                  [[localize('ui.panel.config.cloud.login.forgot_password')]]
                </button>
              </div>
            </ha-card>

            <ha-card>
              <paper-item on-click="_handleRegister">
                <paper-item-body two-line="">
                  [[localize('ui.panel.config.cloud.login.start_trial')]]
                  <div secondary="">
                    [[localize('ui.panel.config.cloud.login.trial_info')]]
                  </div>
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            </ha-card>
          </ha-config-section>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      email: {
        type: String,
        notify: true,
      },
      _password: {
        type: String,
        value: "",
      },
      _requestInProgress: {
        type: Boolean,
        value: false,
      },
      flashMessage: {
        type: String,
        notify: true,
      },
      _error: String,
    };
  }

  static get observers() {
    return ["_inputChanged(email, _password)"];
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.flashMessage) {
      // Wait for DOM to be drawn
      requestAnimationFrame(() =>
        requestAnimationFrame(() => this.$.flashRipple.simulatedRipple())
      );
    }
  }

  _inputChanged() {
    this.$.email.invalid = false;
    this.$.password.invalid = false;
    this._error = false;
  }

  _keyDown(ev) {
    // validate on enter
    if (ev.keyCode === 13) {
      this._handleLogin();
      ev.preventDefault();
    }
  }

  _handleLogin() {
    let invalid = false;

    if (!this.email || !this.email.includes("@")) {
      this.$.email.invalid = true;
      this.$.email.focus();
      invalid = true;
    }

    if (this._password.length < 8) {
      this.$.password.invalid = true;

      if (!invalid) {
        invalid = true;
        this.$.password.focus();
      }
    }

    if (invalid) return;

    this._requestInProgress = true;

    this.hass
      .callApi("post", "cloud/login", {
        email: this.email,
        password: this._password,
      })
      .then(
        () => {
          this.fire("ha-refresh-cloud-status");
          this.setProperties({
            email: "",
            _password: "",
          });
        },
        (err) => {
          // Do this before setProperties because changing it clears errors.
          this._password = "";

          const errCode = err && err.body && err.body.code;
          if (errCode === "PasswordChangeRequired") {
            alert(
              "[[localize('ui.panel.config.cloud.login.alert_password_change_required')]]"
            );
            this.navigate("/config/cloud/forgot-password");
            return;
          }

          const props = {
            _requestInProgress: false,
            _error:
              err && err.body && err.body.message
                ? err.body.message
                : "Unknown error",
          };

          if (errCode === "UserNotConfirmed") {
            props._error =
              "[[localize('ui.panel.config.cloud.login.alert_email_confirm_necessary')]]";
          }

          this.setProperties(props);
          this.$.email.focus();
        }
      );
  }

  _handleRegister() {
    this.flashMessage = "";
    this.navigate("/config/cloud/register");
  }

  _handleForgotPassword() {
    this.flashMessage = "";
    this.navigate("/config/cloud/forgot-password");
  }

  _dismissFlash() {
    // give some time to let the ripple finish.
    setTimeout(() => {
      this.flashMessage = "";
    }, 200);
  }
}

customElements.define("cloud-login", CloudLogin);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWNsb3VkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9td2MtYmFzZS9mb3JtLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24tbmV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zd2l0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYWxleGEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd2ViaG9vay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLWFsZXhhLXByZWYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWNjb3VudC9jbG91ZC1nb29nbGUtcHJlZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9jbG91ZC9hY2NvdW50L2Nsb3VkLXJlbW90ZS1wcmVmLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2FjY291bnQvY2xvdWQtd2ViaG9va3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlL3Nob3ctZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvaGEtY29uZmlnLWNsb3VkLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2xvZ2luL2Nsb3VkLWxvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3RvYXN0LXNhdmVkLXN1Y2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbnlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbllvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbmRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbldJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxubGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHsgQmFzZUVsZW1lbnQgfSBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2Jhc2UtZWxlbWVudCc7XG5leHBvcnQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gICAgY3JlYXRlUmVuZGVyUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nLCBkZWxlZ2F0ZXNGb2N1czogdHJ1ZSB9KTtcbiAgICB9XG4gICAgY2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QXJpYUxhYmVsKGxhYmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgICAgICB0aGlzLm1kY1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybS1lbGVtZW50LmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qXG5Vc2UgYDxwYXBlci1pdGVtLWJvZHk+YCBpbiBhIGA8cGFwZXItaXRlbT5gIG9yIGA8cGFwZXItaWNvbi1pdGVtPmAgdG8gbWFrZSB0d28tXG5vciB0aHJlZS0gbGluZSBpdGVtcy4gSXQgaXMgYSBmbGV4IGl0ZW0gdGhhdCBpcyBhIHZlcnRpY2FsIGZsZXhib3guXG5cbiAgICA8cGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHkgdHdvLWxpbmU+XG4gICAgICAgIDxkaXY+U2hvdyB5b3VyIHN0YXR1czwvZGl2PlxuICAgICAgICA8ZGl2IHNlY29uZGFyeT5Zb3VyIHN0YXR1cyBpcyB2aXNpYmxlIHRvIGV2ZXJ5b25lPC9kaXY+XG4gICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICA8L3BhcGVyLWl0ZW0+XG5cblRoZSBjaGlsZCBlbGVtZW50cyB3aXRoIHRoZSBgc2Vjb25kYXJ5YCBhdHRyaWJ1dGUgaXMgZ2l2ZW4gc2Vjb25kYXJ5IHRleHRcbnN0eWxpbmcuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pdGVtLWJvZHktdHdvLWxpbmUtbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiBhIHR3by1saW5lIGl0ZW0gfCBgNzJweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0aHJlZS1saW5lIGl0ZW0gfCBgODhweGBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3JgIHwgRm9yZWdyb3VuZCBjb2xvciBmb3IgdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBgLS1zZWNvbmRhcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnlgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgYHNlY29uZGFyeWAgYXJlYSB8IGB7fWBcblxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAvKiBuZWVkZWQgZm9yIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzIHRvIHdvcmsgb24gZmYgKi9cbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWp1c3RpZmllZDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0d28tbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHQsIDcycHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhyZWUtbGluZV0pIHtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1ib2R5LXRocmVlLWxpbmUtbWluLWhlaWdodCwgODhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKFtzZWNvbmRhcnldKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnktY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1ib2R5LXNlY29uZGFyeTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0tYm9keSdcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKSB7XG4gIHRyeSB7XG4gICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVTdHJpbmcobG9jYWxlcywge1xuICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbW9udGg6IFwibG9uZ1wiLFxuICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICBob3VyOiBcIm51bWVyaWNcIixcbiAgICAgICAgbWludXRlOiBcIjItZGlnaXRcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcImhhRGF0ZVRpbWVcIikpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgICA6IFwiaGFzczpjaGV2cm9uLWxlZnRcIjtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgY3VzdG9tRWxlbWVudCwgQ1NTUmVzdWx0LCBjc3MsIHF1ZXJ5IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLXN3aXRjaFwiO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1zd2l0Y2gvbXdjLXN3aXRjaC1jc3NcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSBcIkBtYXRlcmlhbC9td2Mtc3dpdGNoXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IE13Y1N3aXRjaCA9IGN1c3RvbUVsZW1lbnRzLmdldChcIm13Yy1zd2l0Y2hcIikgYXMgQ29uc3RydWN0b3I8U3dpdGNoPjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zd2l0Y2hcIilcbmV4cG9ydCBjbGFzcyBIYVN3aXRjaCBleHRlbmRzIE13Y1N3aXRjaCB7XG4gIEBxdWVyeShcInNsb3RcIikgcHJpdmF0ZSBfc2xvdCE6IEhUTUxTbG90RWxlbWVudDtcblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZCgpO1xuICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoXCItLW1kYy10aGVtZS1zZWNvbmRhcnlcIiwgXCJ2YXIoLS1wcmltYXJ5LWNvbG9yKVwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXG4gICAgICBcInNsb3R0ZWRcIixcbiAgICAgIEJvb2xlYW4odGhpcy5fc2xvdC5hc3NpZ25lZE5vZGVzKCkubGVuZ3RoKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBzdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5tZGMtc3dpdGNoOm5vdCgubWRjLXN3aXRjaC0tY2hlY2tlZCkgLm1kYy1zd2l0Y2hfX3RodW1iIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci10b2dnbGUtYnV0dG9uLXVuY2hlY2tlZC1idXR0b24tY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYnV0dG9uLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAubWRjLXN3aXRjaDpub3QoLm1kYy1zd2l0Y2gtLWNoZWNrZWQpIC5tZGMtc3dpdGNoX190cmFjayB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItdG9nZ2xlLWJ1dHRvbi11bmNoZWNrZWQtYmFyLWNvbG9yKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXRvZ2dsZS1idXR0b24tdW5jaGVja2VkLWJhci1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoLnNsb3R0ZWQpIC5tZGMtc3dpdGNoIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtc3dpdGNoXCI6IEhhU3dpdGNoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxleGFFbnRpdHkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgZGlzcGxheV9jYXRlZ29yaWVzOiBzdHJpbmdbXTtcbiAgaW50ZXJmYWNlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaENsb3VkQWxleGFFbnRpdGllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxBbGV4YUVudGl0eVtdPih7IHR5cGU6IFwiY2xvdWQvYWxleGEvZW50aXRpZXNcIiB9KTtcblxuZXhwb3J0IGNvbnN0IHN5bmNDbG91ZEFsZXhhRW50aXRpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1MoeyB0eXBlOiBcImNsb3VkL2FsZXhhL3N5bmNcIiB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXZWJob29rIHtcbiAgd2ViaG9va19pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hXZWJob29rcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KTogUHJvbWlzZTxXZWJob29rW10+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcIndlYmhvb2svbGlzdFwiLFxuICB9KTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG4vKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgbmF2aWdhdGUoLi4uYXJncykge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLXdlYmhvb2tzXCI7XG5pbXBvcnQgXCIuL2Nsb3VkLWFsZXhhLXByZWZcIjtcbmltcG9ydCBcIi4vY2xvdWQtZ29vZ2xlLXByZWZcIjtcbmltcG9ydCBcIi4vY2xvdWQtcmVtb3RlLXByZWZcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IHsgZmV0Y2hDbG91ZFN1YnNjcmlwdGlvbkluZm8gfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgQ2xvdWRBY2NvdW50IGV4dGVuZHMgRXZlbnRzTWl4aW4oTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIHtcbiAgICAgICAgICBtYXJnaW46IC0xZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIC5hY2NvdW50LXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zb29uIHtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLm5vd3JhcCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAud3JhcCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmNhcHRpb24nKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5jYXB0aW9uJyldXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnRoYW5rX3lvdV9ub3RlJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgICAgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQubmFidV9jYXNhX2FjY291bnQnKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY291bnQtcm93XCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgW1tjbG91ZFN0YXR1cy5lbWFpbF1dXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeSBjbGFzcz1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgW1tfZm9ybWF0U3Vic2NyaXB0aW9uKF9zdWJzY3JpcHRpb24pXV1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3VudC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5XG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuY29ubmVjdGlvbl9zdGF0dXMnKV1dPC9wYXBlci1pdGVtLWJvZHlcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPltbY2xvdWRTdGF0dXMuY2xvdWRdXTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWNjb3VudC5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPjxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5tYW5hZ2VfYWNjb3VudCcpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID48L2FcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gc3R5bGU9XCJmbG9hdDogcmlnaHRcIiBvbi1jbGljaz1cImhhbmRsZUxvZ291dFwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuc2lnbl9vdXQnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuXG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9ucycpXV08L3NwYW5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5pbnRlZ3JhdGlvbnNfaW50cm9kdWN0aW9uJyldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9uc19pbnRyb2R1Y3Rpb24yJyldXVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmludGVncmF0aW9uc19saW5rX2FsbF9mZWF0dXJlcycpXV08L2FcbiAgICAgICAgICAgICAgICA+LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGNsb3VkLXJlbW90ZS1wcmVmXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGNsb3VkLXN0YXR1cz1cIltbY2xvdWRTdGF0dXNdXVwiXG4gICAgICAgICAgICA+PC9jbG91ZC1yZW1vdGUtcHJlZj5cblxuICAgICAgICAgICAgPGNsb3VkLWFsZXhhLXByZWZcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgY2xvdWQtc3RhdHVzPVwiW1tjbG91ZFN0YXR1c11dXCJcbiAgICAgICAgICAgID48L2Nsb3VkLWFsZXhhLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC1nb29nbGUtcHJlZlxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtZ29vZ2xlLXByZWY+XG5cbiAgICAgICAgICAgIDxjbG91ZC13ZWJob29rc1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBjbG91ZC1zdGF0dXM9XCJbW2Nsb3VkU3RhdHVzXV1cIlxuICAgICAgICAgICAgPjwvY2xvdWQtd2ViaG9va3M+XG4gICAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBpc1dpZGU6IEJvb2xlYW4sXG4gICAgICBjbG91ZFN0YXR1czogT2JqZWN0LFxuICAgICAgX3N1YnNjcmlwdGlvbjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9mZXRjaFN1YnNjcmlwdGlvbkluZm8oKTtcbiAgfVxuXG4gIF9jb21wdXRlUmVtb3RlQ29ubmVjdGVkKGNvbm5lY3RlZCkge1xuICAgIHJldHVybiBjb25uZWN0ZWRcbiAgICAgID8gdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuY29ubmVjdGVkXCIpXG4gICAgICA6IHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lm5vdF9jb25uZWN0ZWRcIik7XG4gIH1cblxuICBhc3luYyBfZmV0Y2hTdWJzY3JpcHRpb25JbmZvKCkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGF3YWl0IGZldGNoQ2xvdWRTdWJzY3JpcHRpb25JbmZvKHRoaXMuaGFzcyk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnByb3ZpZGVyICYmXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzICYmXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmNsb3VkICE9PSBcImNvbm5lY3RlZFwiXG4gICAgKSB7XG4gICAgICB0aGlzLmZpcmUoXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVMb2dvdXQoKSB7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcInBvc3RcIiwgXCJjbG91ZC9sb2dvdXRcIilcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZmlyZShcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpKTtcbiAgfVxuXG4gIF9mb3JtYXRTdWJzY3JpcHRpb24oc3ViSW5mbykge1xuICAgIGlmIChzdWJJbmZvID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmZldGNoaW5nX3N1YnNjcmlwdGlvblwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IHN1YkluZm8uaHVtYW5fZGVzY3JpcHRpb247XG5cbiAgICBpZiAoc3ViSW5mby5wbGFuX3JlbmV3YWxfZGF0ZSkge1xuICAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbi5yZXBsYWNlKFxuICAgICAgICBcIntwZXJpb2RFbmR9XCIsXG4gICAgICAgIGZvcm1hdERhdGVUaW1lKFxuICAgICAgICAgIG5ldyBEYXRlKHN1YkluZm8ucGxhbl9yZW5ld2FsX2RhdGUgKiAxMDAwKSxcbiAgICAgICAgICB0aGlzLmhhc3MubGFuZ3VhZ2VcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtYWNjb3VudFwiLCBDbG91ZEFjY291bnQpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1c0xvZ2dlZEluLCB1cGRhdGVDbG91ZFByZWYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgc3luY0Nsb3VkQWxleGFFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2FsZXhhXCI7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZEFsZXhhUHJlZiBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjbG91ZFN0YXR1cz86IENsb3VkU3RhdHVzTG9nZ2VkSW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N5bmNpbmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNsb3VkU3RhdHVzKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYWxleGFfZW5hYmxlZCwgYWxleGFfcmVwb3J0X3N0YXRlIH0gPSB0aGlzLmNsb3VkU3RhdHVzIS5wcmVmcztcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgaGVhZGVyPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLnRpdGxlXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIC5jaGVja2VkPSR7YWxleGFfZW5hYmxlZH1cbiAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9lbmFibGVkVG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICA+PC9oYS1zd2l0Y2g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuaW5mb1wiKX1cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc2tpbGxzLXN0b3JlLmFtYXpvbi5jb20vZGVlcGxpbmsvZHAvQjA3NzJKMVFLQj9kZXZpY2VUeXBlPWFwcFwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuZW5hYmxlX2hhX3NraWxsXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL2FtYXpvbl9hbGV4YS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmNvbmZpZ19kb2N1bWVudGF0aW9uXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgJHthbGV4YV9lbmFibGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlLXJlcG9ydGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5lbmFibGVfc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGUtcmVwb3J0aW5nLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHthbGV4YV9yZXBvcnRfc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3JlcG9ydFRvZ2dsZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgID48L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmluZm9fc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5faGFuZGxlU3luY30gLmRpc2FibGVkPSR7dGhpcy5fc3luY2luZ30+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuc3luY19lbnRpdGllc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvY2xvdWQvYWxleGFcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5hbGV4YS5tYW5hZ2VfZW50aXRpZXNcIlxuICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZVN5bmMoKSB7XG4gICAgdGhpcy5fc3luY2luZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN5bmNDbG91ZEFsZXhhRW50aXRpZXModGhpcy5oYXNzISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLnN5bmNfZW50aXRpZXNfZXJyb3JcIlxuICAgICAgICApfSAke2Vyci5ib2R5Lm1lc3NhZ2V9YFxuICAgICAgKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fc3luY2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2VuYWJsZWRUb2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZXYudGFyZ2V0IGFzIEhhU3dpdGNoO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVDbG91ZFByZWYodGhpcy5oYXNzISwgeyBhbGV4YV9lbmFibGVkOiB0b2dnbGUuY2hlY2tlZCEgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlcG9ydFRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIGFsZXhhX3JlcG9ydF9zdGF0ZTogdG9nZ2xlLmNoZWNrZWQhLFxuICAgICAgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFxuICAgICAgICBgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuc3RhdGVfcmVwb3J0aW5nX2Vycm9yXCIsXG4gICAgICAgICAgXCJlbmFibGVfZGlzYWJsZVwiLFxuICAgICAgICAgIHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICB0b2dnbGUuY2hlY2tlZFxuICAgICAgICAgICAgICA/IFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuYWxleGEuZW5hYmxlXCJcbiAgICAgICAgICAgICAgOiBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LmFsZXhhLmRpc2FibGVcIlxuICAgICAgICAgIClcbiAgICAgICAgKX0gJHtlcnIubWVzc2FnZX1gXG4gICAgICApO1xuICAgICAgdG9nZ2xlLmNoZWNrZWQgPSAhdG9nZ2xlLmNoZWNrZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgfVxuICAgICAgLnN0YXRlLXJlcG9ydGluZyBoMyB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLnN0YXRlLXJlcG9ydGluZy1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtYWxleGEtcHJlZlwiOiBDbG91ZEFsZXhhUHJlZjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1hbGV4YS1wcmVmXCIsIENsb3VkQWxleGFQcmVmKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbG91ZFN0YXR1c0xvZ2dlZEluLCB1cGRhdGVDbG91ZFByZWYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IHNob3dTYXZlU3VjY2Vzc1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRHb29nbGVQcmVmIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGNsb3VkU3RhdHVzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG91ZFN0YXR1cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBnb29nbGVfZW5hYmxlZCxcbiAgICAgIGdvb2dsZV9yZXBvcnRfc3RhdGUsXG4gICAgICBnb29nbGVfc2VjdXJlX2RldmljZXNfcGluLFxuICAgIH0gPSB0aGlzLmNsb3VkU3RhdHVzLnByZWZzO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLnRpdGxlXCJcbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN3aXRjaFwiPlxuICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgIGlkPVwiZ29vZ2xlX2VuYWJsZWRcIlxuICAgICAgICAgICAgLmNoZWNrZWQ9XCIke2dvb2dsZV9lbmFibGVkfVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJHt0aGlzLl9lbmFibGVUb2dnbGVDaGFuZ2VkfVwiXG4gICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5pbmZvXCIpfVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hc3Npc3RhbnQuZ29vZ2xlLmNvbS9zZXJ2aWNlcy9hL3VpZC8wMDAwMDA5MWZkNWZiODc1P2hsPWVuLVVTXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuZW5hYmxlX2hhX3NraWxsXCJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL2dvb2dsZV9hc3Npc3RhbnQvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuY29uZmlnX2RvY3VtZW50YXRpb25cIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICAke2dvb2dsZV9lbmFibGVkXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlLXJlcG9ydGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuZW5hYmxlX3N0YXRlX3JlcG9ydGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlLXJlcG9ydGluZy1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7Z29vZ2xlX3JlcG9ydF9zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fcmVwb3J0VG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgPjwvaGEtc3dpdGNoPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmluZm9fc3RhdGVfcmVwb3J0aW5nXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3VyZV9kZXZpY2VzXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5zZWN1cml0eV9kZXZpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmVudGVyX3Bpbl9pbmZvXCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5nb29nbGUuZGV2aWNlc19waW5cIlxuICAgICAgICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ29vZ2xlX3NlY3VyZV9kZXZpY2VzX3BpblwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLmVudGVyX3Bpbl9oaW50XCJcbiAgICAgICAgICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtnb29nbGVfc2VjdXJlX2RldmljZXNfcGluIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIke3RoaXMuX3BpbkNoYW5nZWR9XCJcbiAgICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPGhhLWNhbGwtYXBpLWJ1dHRvblxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgLmRpc2FibGVkPVwiJHshZ29vZ2xlX2VuYWJsZWR9XCJcbiAgICAgICAgICAgIHBhdGg9XCJjbG91ZC9nb29nbGVfYWN0aW9ucy9zeW5jXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQuZ29vZ2xlLnN5bmNfZW50aXRpZXNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2hhLWNhbGwtYXBpLWJ1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2VyXCI+PC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvY2xvdWQvZ29vZ2xlLWFzc2lzdGFudFwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5tYW5hZ2VfZW50aXRpZXNcIlxuICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2VuYWJsZVRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7IFt0b2dnbGUuaWRdOiB0b2dnbGUuY2hlY2tlZCEgfSk7XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlcG9ydFRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBldi50YXJnZXQgYXMgSGFTd2l0Y2g7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIGdvb2dsZV9yZXBvcnRfc3RhdGU6IHRvZ2dsZS5jaGVja2VkISxcbiAgICAgIH0pO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYFVuYWJsZSB0byAke3RvZ2dsZS5jaGVja2VkID8gXCJlbmFibGVcIiA6IFwiZGlzYWJsZVwifSByZXBvcnQgc3RhdGUuICR7XG4gICAgICAgICAgZXJyLm1lc3NhZ2VcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgICB0b2dnbGUuY2hlY2tlZCA9ICF0b2dnbGUuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9waW5DaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHVwZGF0ZUNsb3VkUHJlZih0aGlzLmhhc3MhLCB7XG4gICAgICAgIFtpbnB1dC5pZF06IGlucHV0LnZhbHVlIHx8IG51bGwsXG4gICAgICB9KTtcbiAgICAgIHNob3dTYXZlU3VjY2Vzc1RvYXN0KHRoaXMsIHRoaXMuaGFzcyEpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50Lmdvb2dsZS5lbnRlcl9waW5fZXJyb3JcIlxuICAgICAgICApfSAke2Vyci5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgICBpbnB1dC52YWx1ZSA9IHRoaXMuY2xvdWRTdGF0dXMhLnByZWZzLmdvb2dsZV9zZWN1cmVfZGV2aWNlc19waW47XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNHB4O1xuICAgICAgICB0b3A6IDMycHg7XG4gICAgICB9XG4gICAgICBoYS1jYWxsLWFwaS1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgICAuc2VjdXJlX2RldmljZXMge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWFjdGlvbnMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zcGFjZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgICB9XG4gICAgICAuc3RhdGUtcmVwb3J0aW5nICsgcCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmcgaDMge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5zdGF0ZS1yZXBvcnRpbmctc3dpdGNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLWdvb2dsZS1wcmVmXCI6IENsb3VkR29vZ2xlUHJlZjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1nb29nbGUtcHJlZlwiLCBDbG91ZEdvb2dsZVByZWYpO1xuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhU3dpdGNoIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBjb25uZWN0Q2xvdWRSZW1vdGUsXG4gIGRpc2Nvbm5lY3RDbG91ZFJlbW90ZSxcbiAgQ2xvdWRTdGF0dXNMb2dnZWRJbixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IHNob3dDbG91ZENlcnRpZmljYXRlRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZS9zaG93LWRpYWxvZy1jbG91ZC1jZXJ0aWZpY2F0ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLXJlbW90ZS1wcmVmXCIpXG5leHBvcnQgY2xhc3MgQ2xvdWRSZW1vdGVQcmVmIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGNsb3VkU3RhdHVzPzogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKTogUHJvcGVydHlEZWNsYXJhdGlvbnMge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7fSxcbiAgICAgIGNsb3VkU3RhdHVzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5jbG91ZFN0YXR1cykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICByZW1vdGVfY29ubmVjdGVkLFxuICAgICAgcmVtb3RlX2RvbWFpbixcbiAgICAgIHJlbW90ZV9jZXJ0aWZpY2F0ZSxcbiAgICB9ID0gdGhpcy5jbG91ZFN0YXR1cztcblxuICAgIGlmICghcmVtb3RlX2NlcnRpZmljYXRlKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUudGl0bGVcIlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJlcGFyaW5nXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLmFjY2Vzc19pc19iZWluZ19wcmVwYXJlZFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgaGVhZGVyPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS50aXRsZVwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2hcIj5cbiAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAuY2hlY2tlZD1cIiR7cmVtb3RlX2Nvbm5lY3RlZH1cIlxuICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fdG9nZ2xlQ2hhbmdlZH1cIlxuICAgICAgICAgID48L2hhLXN3aXRjaD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUuaW5mb1wiKX1cbiAgICAgICAgICAke3JlbW90ZV9jb25uZWN0ZWRcbiAgICAgICAgICAgID8gdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS5pbnN0YW5jZV9pc19hdmFpbGFibGVcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC5yZW1vdGUuaW5zdGFuY2Vfd2lsbF9iZV9hdmFpbGFibGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovLyR7cmVtb3RlX2RvbWFpbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cImJyZWFrLXdvcmRcIj5cbiAgICAgICAgICAgIGh0dHBzOi8vJHtyZW1vdGVfZG9tYWlufTwvYVxuICAgICAgICAgID4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbS9jb25maWcvcmVtb3RlL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgPiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LnJlbW90ZS5saW5rX2xlYXJuX2hvd19pdF93b3Jrc1wiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgICR7cmVtb3RlX2NlcnRpZmljYXRlXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz0ke3RoaXMuX29wZW5DZXJ0SW5mb30+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQucmVtb3RlLmNlcnRpZmljYXRlX2luZm9cIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5DZXJ0SW5mbygpIHtcbiAgICBzaG93Q2xvdWRDZXJ0aWZpY2F0ZURpYWxvZyh0aGlzLCB7XG4gICAgICBjZXJ0aWZpY2F0ZUluZm86IHRoaXMuY2xvdWRTdGF0dXMhLnJlbW90ZV9jZXJ0aWZpY2F0ZSEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF90b2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZXYudGFyZ2V0IGFzIEhhU3dpdGNoO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xuICAgICAgICBhd2FpdCBjb25uZWN0Q2xvdWRSZW1vdGUodGhpcy5oYXNzISk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBkaXNjb25uZWN0Q2xvdWRSZW1vdGUodGhpcy5oYXNzISk7XG4gICAgICB9XG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJoYS1yZWZyZXNoLWNsb3VkLXN0YXR1c1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgIHRvZ2dsZS5jaGVja2VkID0gIXRvZ2dsZS5jaGVja2VkO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5wcmVwYXJpbmcge1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICAuYnJlYWstd29yZCB7XG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB9XG4gICAgICAuc3dpdGNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgdG9wOiAzMnB4O1xuICAgICAgfVxuICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG4gICAgICAuY2FyZC1hY3Rpb25zIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuc3BhY2VyIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLXJlbW90ZS1wcmVmXCI6IENsb3VkUmVtb3RlUHJlZjtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFdlYmhvb2tFcnJvciB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgV2ViaG9vaywgZmV0Y2hXZWJob29rcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3dlYmhvb2tcIjtcbmltcG9ydCB7XG4gIGNyZWF0ZUNsb3VkaG9vayxcbiAgZGVsZXRlQ2xvdWRob29rLFxuICBDbG91ZFdlYmhvb2ssXG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQgeyBzaG93TWFuYWdlQ2xvdWRob29rRGlhbG9nIH0gZnJvbSBcIi4uL2RpYWxvZy1tYW5hZ2UtY2xvdWRob29rL3Nob3ctZGlhbG9nLW1hbmFnZS1jbG91ZGhvb2tcIjtcblxuZXhwb3J0IGNsYXNzIENsb3VkV2ViaG9va3MgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgY2xvdWRTdGF0dXM/OiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuICBwcml2YXRlIF9jbG91ZEhvb2tzPzogeyBbd2ViaG9va0lkOiBzdHJpbmddOiBDbG91ZFdlYmhvb2sgfTtcbiAgcHJpdmF0ZSBfbG9jYWxIb29rcz86IFdlYmhvb2tbXTtcbiAgcHJpdmF0ZSBfcHJvZ3Jlc3M6IHN0cmluZ1tdO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHt9LFxuICAgICAgY2xvdWRTdGF0dXM6IHt9LFxuICAgICAgX2Nsb3VkSG9va3M6IHt9LFxuICAgICAgX2xvY2FsSG9va3M6IHt9LFxuICAgICAgX3Byb2dyZXNzOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9wcm9ncmVzcyA9IFtdO1xuICB9XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHt0aGlzLnJlbmRlclN0eWxlKCl9XG4gICAgICA8aGEtY2FyZFxuICAgICAgICBoZWFkZXI9JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3MudGl0bGVcIlxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3MuaW5mb1wiKX1cbiAgICAgICAgICAke3RoaXMuX3JlbmRlckJvZHkoKX1cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5uYWJ1Y2FzYS5jb20vY29uZmlnL3dlYmhvb2tzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLmxpbmtfbGVhcm5fbW9yZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikgJiYgdGhpcy5jbG91ZFN0YXR1cykge1xuICAgICAgdGhpcy5fY2xvdWRIb29rcyA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnMuY2xvdWRob29rcyB8fCB7fTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJCb2R5KCkge1xuICAgIGlmICghdGhpcy5jbG91ZFN0YXR1cyB8fCAhdGhpcy5fbG9jYWxIb29rcyB8fCAhdGhpcy5fY2xvdWRIb29rcykge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LXRleHRcIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLmxvYWRpbmdcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbG9jYWxIb29rcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS10ZXh0XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5ub19ob29rc195ZXRcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvaW50ZWdyYXRpb25zXCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3Mubm9faG9va3NfeWV0X2xpbmtfaW50ZWdyYXRpb25cIlxuICAgICAgICAgICAgKX08L2FcbiAgICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5ub19ob29rc195ZXQyXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxhIGhyZWY9XCIvY29uZmlnL2F1dG9tYXRpb24vbmV3XCJcbiAgICAgICAgICAgID4ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFjY291bnQud2ViaG9va3Mubm9faG9va3NfeWV0X2xpbmtfYXV0b21hdGlvblwiXG4gICAgICAgICAgICApfTwvYVxuICAgICAgICAgID4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbG9jYWxIb29rcy5tYXAoXG4gICAgICAoZW50cnkpID0+IGh0bWxgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWJob29rXCIgLmVudHJ5PVwiJHtlbnRyeX1cIj5cbiAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgJHtlbnRyeS5uYW1lfVxuICAgICAgICAgICAgICAke2VudHJ5LmRvbWFpbiA9PT0gZW50cnkubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgPyBcIlwiXG4gICAgICAgICAgICAgICAgOiBgICgke2VudHJ5LmRvbWFpbn0pYH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzZWNvbmRhcnk+JHtlbnRyeS53ZWJob29rX2lkfTwvZGl2PlxuICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICR7dGhpcy5fcHJvZ3Jlc3MuaW5jbHVkZXMoZW50cnkud2ViaG9va19pZClcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogdGhpcy5fY2xvdWRIb29rcyFbZW50cnkud2ViaG9va19pZF1cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZU1hbmFnZUJ1dHRvbn1cIj5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWNjb3VudC53ZWJob29rcy5tYW5hZ2VcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtc3dpdGNoIEBjbGljaz1cIiR7dGhpcy5fZW5hYmxlV2ViaG9va31cIj48L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dEaWFsb2cod2ViaG9va0lkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB3ZWJob29rID0gdGhpcy5fbG9jYWxIb29rcyEuZmluZChcbiAgICAgIChlbnQpID0+IGVudC53ZWJob29rX2lkID09PSB3ZWJob29rSWRcbiAgICApITtcbiAgICBjb25zdCBjbG91ZGhvb2sgPSB0aGlzLl9jbG91ZEhvb2tzIVt3ZWJob29rSWRdO1xuICAgIHNob3dNYW5hZ2VDbG91ZGhvb2tEaWFsb2codGhpcywge1xuICAgICAgd2ViaG9vayxcbiAgICAgIGNsb3VkaG9vayxcbiAgICAgIGRpc2FibGVIb29rOiAoKSA9PiB0aGlzLl9kaXNhYmxlV2ViaG9vayh3ZWJob29rSWQpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTWFuYWdlQnV0dG9uKGV2OiBNb3VzZUV2ZW50KSB7XG4gICAgY29uc3QgZW50cnkgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLnBhcmVudEVsZW1lbnQuZW50cnkgYXMgV2ViaG9vaztcbiAgICB0aGlzLl9zaG93RGlhbG9nKGVudHJ5LndlYmhvb2tfaWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZW5hYmxlV2ViaG9vayhldjogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGVudHJ5ID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5wYXJlbnRFbGVtZW50LmVudHJ5O1xuICAgIHRoaXMuX3Byb2dyZXNzID0gWy4uLnRoaXMuX3Byb2dyZXNzLCBlbnRyeS53ZWJob29rX2lkXTtcbiAgICBsZXQgdXBkYXRlZFdlYmhvb2s7XG5cbiAgICB0cnkge1xuICAgICAgdXBkYXRlZFdlYmhvb2sgPSBhd2FpdCBjcmVhdGVDbG91ZGhvb2sodGhpcy5oYXNzISwgZW50cnkud2ViaG9va19pZCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydCgoZXJyIGFzIFdlYmhvb2tFcnJvcikubWVzc2FnZSk7XG4gICAgICByZXR1cm47XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3Byb2dyZXNzID0gdGhpcy5fcHJvZ3Jlc3MuZmlsdGVyKCh3aWQpID0+IHdpZCAhPT0gZW50cnkud2ViaG9va19pZCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2xvdWRIb29rcyA9IHtcbiAgICAgIC4uLnRoaXMuX2Nsb3VkSG9va3MsXG4gICAgICBbZW50cnkud2ViaG9va19pZF06IHVwZGF0ZWRXZWJob29rLFxuICAgIH07XG5cbiAgICAvLyBPbmx5IG9wZW4gZGlhbG9nIGlmIHdlJ3JlIG5vdCBhbHNvIGVuYWJsaW5nIG90aGVycywgb3RoZXJ3aXNlIGl0J3MgY29uZnVzaW5nXG4gICAgaWYgKHRoaXMuX3Byb2dyZXNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fc2hvd0RpYWxvZyhlbnRyeS53ZWJob29rX2lkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9kaXNhYmxlV2ViaG9vayh3ZWJob29rSWQ6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb2dyZXNzID0gWy4uLnRoaXMuX3Byb2dyZXNzLCB3ZWJob29rSWRdO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBkZWxldGVDbG91ZGhvb2sodGhpcy5oYXNzISwgd2ViaG9va0lkISk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgYCR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5hY2NvdW50LndlYmhvb2tzLmRpc2FibGVfaG9va19lcnJvcl9tc2dcIlxuICAgICAgICApfSAkeyhlcnIgYXMgV2ViaG9va0Vycm9yKS5tZXNzYWdlfWBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX3Byb2dyZXNzID0gdGhpcy5fcHJvZ3Jlc3MuZmlsdGVyKCh3aWQpID0+IHdpZCAhPT0gd2ViaG9va0lkKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgY2xvdWQgcmVsYXRlZCBwYXJ0cyBmcm9tIGVudHJ5LlxuICAgIGNvbnN0IHsgW3dlYmhvb2tJZF06IGRpc2FibGVkSG9vaywgLi4ubmV3SG9va3MgfSA9IHRoaXMuX2Nsb3VkSG9va3MhO1xuICAgIHRoaXMuX2Nsb3VkSG9va3MgPSBuZXdIb29rcztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICB0aGlzLl9sb2NhbEhvb2tzID0gdGhpcy5oYXNzIS5jb25maWcuY29tcG9uZW50cy5pbmNsdWRlcyhcIndlYmhvb2tcIilcbiAgICAgID8gYXdhaXQgZmV0Y2hXZWJob29rcyh0aGlzLmhhc3MhKVxuICAgICAgOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU3R5bGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5ib2R5LXRleHQge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICB9XG4gICAgICAgIC53ZWJob29rIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuYm9keS10ZXh0IGEsXG4gICAgICAgIC5mb290ZXIgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImNsb3VkLXdlYmhvb2tzXCI6IENsb3VkV2ViaG9va3M7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY2xvdWQtd2ViaG9va3NcIiwgQ2xvdWRXZWJob29rcyk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDbG91ZENlcnRpZmljYXRlUGFyYW1zIHtcbiAgY2VydGlmaWNhdGVJbmZvOiBDZXJ0aWZpY2F0ZUluZm9ybWF0aW9uO1xufVxuXG5leHBvcnQgY29uc3Qgc2hvd0Nsb3VkQ2VydGlmaWNhdGVEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB3ZWJob29rRGlhbG9nUGFyYW1zOiBDbG91ZENlcnRpZmljYXRlUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctY2xvdWQtY2VydGlmaWNhdGVcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctY2xvdWQtY2VydGlmaWNhdGVcIiAqLyBcIi4vZGlhbG9nLWNsb3VkLWNlcnRpZmljYXRlXCIpLFxuICAgIGRpYWxvZ1BhcmFtczogd2ViaG9va0RpYWxvZ1BhcmFtcyxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgV2ViaG9vayB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL3dlYmhvb2tcIjtcbmltcG9ydCB7IENsb3VkV2ViaG9vayB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2ViaG9va0RpYWxvZ1BhcmFtcyB7XG4gIHdlYmhvb2s6IFdlYmhvb2s7XG4gIGNsb3VkaG9vazogQ2xvdWRXZWJob29rO1xuICBkaXNhYmxlSG9vazogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IHNob3dNYW5hZ2VDbG91ZGhvb2tEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICB3ZWJob29rRGlhbG9nUGFyYW1zOiBXZWJob29rRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctbWFuYWdlLWNsb3VkaG9va1wiLFxuICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNsb3VkLXdlYmhvb2stbWFuYWdlLWRpYWxvZ1wiICovIFwiLi9kaWFsb2ctbWFuYWdlLWNsb3VkaG9va1wiKSxcbiAgICBkaWFsb2dQYXJhbXM6IHdlYmhvb2tEaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCBcIi4vYWNjb3VudC9jbG91ZC1hY2NvdW50XCI7XG5pbXBvcnQgXCIuL2xvZ2luL2Nsb3VkLWxvZ2luXCI7XG5pbXBvcnQge1xuICBIYXNzUm91dGVyUGFnZSxcbiAgUm91dGVyT3B0aW9ucyxcbn0gZnJvbSBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1yb3V0ZXItcGFnZVwiO1xuaW1wb3J0IHsgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIFJvdXRlIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IENsb3VkU3RhdHVzIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY2xvdWRcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuXG5jb25zdCBMT0dHRURfSU5fVVJMUyA9IFtcImFjY291bnRcIiwgXCJnb29nbGUtYXNzaXN0YW50XCIsIFwiYWxleGFcIl07XG5jb25zdCBOT1RfTE9HR0VEX0lOX1VSTFMgPSBbXCJsb2dpblwiLCBcInJlZ2lzdGVyXCIsIFwiZm9yZ290LXBhc3N3b3JkXCJdO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNvbmZpZy1jbG91ZFwiKVxuY2xhc3MgSGFDb25maWdDbG91ZCBleHRlbmRzIEhhc3NSb3V0ZXJQYWdlIHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlITogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyByb3V0ZSE6IFJvdXRlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1cztcblxuICBwcm90ZWN0ZWQgcm91dGVyT3B0aW9uczogUm91dGVyT3B0aW9ucyA9IHtcbiAgICBkZWZhdWx0UGFnZTogXCJsb2dpblwiLFxuICAgIHNob3dMb2FkaW5nOiB0cnVlLFxuICAgIGluaXRpYWxMb2FkOiAoKSA9PiB0aGlzLl9jbG91ZFN0YXR1c0xvYWRlZCxcbiAgICAvLyBHdWFyZCB0aGUgZGlmZmVyZW50IHBhZ2VzIGJhc2VkIG9uIGlmIHdlJ3JlIGxvZ2dlZCBpbi5cbiAgICBiZWZvcmVSZW5kZXI6IChwYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICh0aGlzLmNsb3VkU3RhdHVzLmxvZ2dlZF9pbikge1xuICAgICAgICBpZiAoIUxPR0dFRF9JTl9VUkxTLmluY2x1ZGVzKHBhZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiYWNjb3VudFwiO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIU5PVF9MT0dHRURfSU5fVVJMUy5pbmNsdWRlcyhwYWdlKSkge1xuICAgICAgICAgIHJldHVybiBcImxvZ2luXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGxvZ2luOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1sb2dpblwiLFxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1yZWdpc3RlclwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNsb3VkLXJlZ2lzdGVyXCIgKi8gXCIuL3JlZ2lzdGVyL2Nsb3VkLXJlZ2lzdGVyXCIpLFxuICAgICAgfSxcbiAgICAgIFwiZm9yZ290LXBhc3N3b3JkXCI6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWZvcmdvdC1wYXNzd29yZFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNsb3VkLWZvcmdvdC1wYXNzd29yZFwiICovIFwiLi9mb3Jnb3QtcGFzc3dvcmQvY2xvdWQtZm9yZ290LXBhc3N3b3JkXCIpLFxuICAgICAgfSxcbiAgICAgIGFjY291bnQ6IHtcbiAgICAgICAgdGFnOiBcImNsb3VkLWFjY291bnRcIixcbiAgICAgIH0sXG4gICAgICBcImdvb2dsZS1hc3Npc3RhbnRcIjoge1xuICAgICAgICB0YWc6IFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIiAqLyBcIi4vZ29vZ2xlLWFzc2lzdGFudC9jbG91ZC1nb29nbGUtYXNzaXN0YW50XCIpLFxuICAgICAgfSxcbiAgICAgIGFsZXhhOiB7XG4gICAgICAgIHRhZzogXCJjbG91ZC1hbGV4YVwiLFxuICAgICAgICBsb2FkOiAoKSA9PlxuICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNsb3VkLWFsZXhhXCIgKi8gXCIuL2FsZXhhL2Nsb3VkLWFsZXhhXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2ZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvZ2luRW1haWwgPSBcIlwiO1xuICBwcml2YXRlIF9yZXNvbHZlQ2xvdWRTdGF0dXNMb2FkZWQhOiAoKSA9PiB2b2lkO1xuICBwcml2YXRlIF9jbG91ZFN0YXR1c0xvYWRlZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgdGhpcy5fcmVzb2x2ZUNsb3VkU3RhdHVzTG9hZGVkID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbG91ZC1kb25lXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5fZmxhc2hNZXNzYWdlID0gKGV2IGFzIGFueSkuZGV0YWlsLmZsYXNoTWVzc2FnZTtcbiAgICAgIG5hdmlnYXRlKHRoaXMsIFwiL2NvbmZpZy9jbG91ZC9sb2dpblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiY2xvdWRTdGF0dXNcIikpIHtcbiAgICAgIGNvbnN0IG9sZFN0YXR1cyA9IGNoYW5nZWRQcm9wcy5nZXQoXCJjbG91ZFN0YXR1c1wiKSBhc1xuICAgICAgICB8IENsb3VkU3RhdHVzXG4gICAgICAgIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKG9sZFN0YXR1cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVDbG91ZFN0YXR1c0xvYWRlZCgpO1xuICAgICAgfSBlbHNlIGlmIChvbGRTdGF0dXMubG9nZ2VkX2luICE9PSB0aGlzLmNsb3VkU3RhdHVzLmxvZ2dlZF9pbikge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCB0aGlzLnJvdXRlLnByZWZpeCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUVsZW1lbnQodGFnOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IHN1cGVyLmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZW1haWwtY2hhbmdlZFwiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX2xvZ2luRW1haWwgPSAoZXYgYXMgUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KS5kZXRhaWwudmFsdWU7XG4gICAgfSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZsYXNoLW1lc3NhZ2UtY2hhbmdlZFwiLCAoZXYpID0+IHtcbiAgICAgIHRoaXMuX2ZsYXNoTWVzc2FnZSA9IChldiBhcyBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pLmRldGFpbC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWw7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlUGFnZUVsKGVsKSB7XG4gICAgLy8gV2UgYXJlIG5vdCBnb2luZyB0byB1cGRhdGUgaWYgdGhlIGN1cnJlbnQgcGFnZSBpZiB3ZSBhcmUgbm90IGxvZ2dlZCBpblxuICAgIC8vIGFuZCB0aGUgY3VycmVudCBwYWdlIHJlcXVpcmVzIGJlaW5nIGxvZ2dlZCBpbi4gSGFwcGVucyB3aGVuIHdlIGxvZyBvdXQuXG4gICAgaWYgKFxuICAgICAgdGhpcy5jbG91ZFN0YXR1cyAmJlxuICAgICAgIXRoaXMuY2xvdWRTdGF0dXMubG9nZ2VkX2luICYmXG4gICAgICBMT0dHRURfSU5fVVJMUy5pbmNsdWRlcyh0aGlzLl9jdXJyZW50UGFnZSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoXCJzZXRQcm9wZXJ0aWVzXCIgaW4gZWwpIHtcbiAgICAgIC8vIEFzIGxvbmcgYXMgd2UgaGF2ZSBQb2x5bWVyIHBhZ2VzXG4gICAgICAoZWwgYXMgUG9seW1lckVsZW1lbnQpLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgIGVtYWlsOiB0aGlzLl9sb2dpbkVtYWlsLFxuICAgICAgICBpc1dpZGU6IHRoaXMuaXNXaWRlLFxuICAgICAgICBjbG91ZFN0YXR1czogdGhpcy5jbG91ZFN0YXR1cyxcbiAgICAgICAgZmxhc2hNZXNzYWdlOiB0aGlzLl9mbGFzaE1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuaGFzcyA9IHRoaXMuaGFzcztcbiAgICAgIGVsLmVtYWlsID0gdGhpcy5fbG9naW5FbWFpbDtcbiAgICAgIGVsLmlzV2lkZSA9IHRoaXMuaXNXaWRlO1xuICAgICAgZWwubmFycm93ID0gdGhpcy5uYXJyb3c7XG4gICAgICBlbC5jbG91ZFN0YXR1cyA9IHRoaXMuY2xvdWRTdGF0dXM7XG4gICAgICBlbC5mbGFzaE1lc3NhZ2UgPSB0aGlzLl9mbGFzaE1lc3NhZ2U7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1jb25maWctY2xvdWRcIjogSGFDb25maWdDbG91ZDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4uLy4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWljb24tbmV4dFwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gTmF2aWdhdGVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIENsb3VkTG9naW4gZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFxuICBOYXZpZ2F0ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSlcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICAgIFtzbG90PVwiaW50cm9kdWN0aW9uXCJdIHtcbiAgICAgICAgICBtYXJnaW46IC0xZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBbc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgICAgaGEtY2FyZCAuY2FyZC1oZWFkZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5mbGFzaC1tc2cge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZsYXNoLW1zZyBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogOHB4O1xuICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmNhcHRpb24nKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5jYXB0aW9uJyldXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmludHJvZHVjdGlvbjInKV1dXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm5hYnVjYXNhLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+TmFidSZuYnNwO0Nhc2EsJm5ic3A7SW5jPC9hXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5pbnRyb2R1Y3Rpb24yYScpXV1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uaW50cm9kdWN0aW9uMycpXV1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubmFidWNhc2EuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4ubGVhcm5fbW9yZV9saW5rJyldXTwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoYS1jYXJkIGhpZGRlbiQ9XCJbWyFmbGFzaE1lc3NhZ2VdXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IGZsYXNoLW1zZ1wiPlxuICAgICAgICAgICAgICAgIFtbZmxhc2hNZXNzYWdlXV1cbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cImhhc3M6Y2xvc2VcIiBvbi1jbGljaz1cIl9kaXNtaXNzRmxhc2hcIlxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5kaXNtaXNzJyldXTwvcGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXJpcHBsZSBpZD1cImZsYXNoUmlwcGxlXCIgbm9pbms9XCJcIj48L3BhcGVyLXJpcHBsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5zaWduX2luJyldXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiBoaWRkZW4kPVwiW1shX2Vycm9yXV1cIj5bW19lcnJvcl1dPC9kaXY+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5lbWFpbCcpXV1cIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2VtYWlsfX1cIlxuICAgICAgICAgICAgICAgICAgb24ta2V5ZG93bj1cIl9rZXlEb3duXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uZW1haWxfZXJyb3JfbXNnJyldXVwiXG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLnBhc3N3b3JkJyldXVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3Bhc3N3b3JkfX1cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIG9uLWtleWRvd249XCJfa2V5RG93blwiXG4gICAgICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLnBhc3N3b3JkX2Vycm9yX21zZycpXV1cIlxuICAgICAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxoYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2hhbmRsZUxvZ2luXCJcbiAgICAgICAgICAgICAgICAgIHByb2dyZXNzPVwiW1tfcmVxdWVzdEluUHJvZ3Jlc3NdXVwiXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLnNpZ25faW4nKV1dPC9oYS1wcm9ncmVzcy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICAgIGhpZGRlbj1cIltbX3JlcXVlc3RJblByb2dyZXNzXV1cIlxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfaGFuZGxlRm9yZ290UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5mb3Jnb3RfcGFzc3dvcmQnKV1dXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgICA8aGEtY2FyZD5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gb24tY2xpY2s9XCJfaGFuZGxlUmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4uc3RhcnRfdHJpYWwnKV1dXG4gICAgICAgICAgICAgICAgICA8ZGl2IHNlY29uZGFyeT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuY2xvdWQubG9naW4udHJpYWxfaW5mbycpXV1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF9wYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgZmxhc2hNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIF9lcnJvcjogU3RyaW5nLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX2lucHV0Q2hhbmdlZChlbWFpbCwgX3Bhc3N3b3JkKVwiXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuZmxhc2hNZXNzYWdlKSB7XG4gICAgICAvLyBXYWl0IGZvciBET00gdG8gYmUgZHJhd25cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy4kLmZsYXNoUmlwcGxlLnNpbXVsYXRlZFJpcHBsZSgpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBfaW5wdXRDaGFuZ2VkKCkge1xuICAgIHRoaXMuJC5lbWFpbC5pbnZhbGlkID0gZmFsc2U7XG4gICAgdGhpcy4kLnBhc3N3b3JkLmludmFsaWQgPSBmYWxzZTtcbiAgICB0aGlzLl9lcnJvciA9IGZhbHNlO1xuICB9XG5cbiAgX2tleURvd24oZXYpIHtcbiAgICAvLyB2YWxpZGF0ZSBvbiBlbnRlclxuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5faGFuZGxlTG9naW4oKTtcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUxvZ2luKCkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuZW1haWwgfHwgIXRoaXMuZW1haWwuaW5jbHVkZXMoXCJAXCIpKSB7XG4gICAgICB0aGlzLiQuZW1haWwuaW52YWxpZCA9IHRydWU7XG4gICAgICB0aGlzLiQuZW1haWwuZm9jdXMoKTtcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXNzd29yZC5sZW5ndGggPCA4KSB7XG4gICAgICB0aGlzLiQucGFzc3dvcmQuaW52YWxpZCA9IHRydWU7XG5cbiAgICAgIGlmICghaW52YWxpZCkge1xuICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4kLnBhc3N3b3JkLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGludmFsaWQpIHJldHVybjtcblxuICAgIHRoaXMuX3JlcXVlc3RJblByb2dyZXNzID0gdHJ1ZTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXCJwb3N0XCIsIFwiY2xvdWQvbG9naW5cIiwge1xuICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuX3Bhc3N3b3JkLFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5maXJlKFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIik7XG4gICAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgX3Bhc3N3b3JkOiBcIlwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gRG8gdGhpcyBiZWZvcmUgc2V0UHJvcGVydGllcyBiZWNhdXNlIGNoYW5naW5nIGl0IGNsZWFycyBlcnJvcnMuXG4gICAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcIlwiO1xuXG4gICAgICAgICAgY29uc3QgZXJyQ29kZSA9IGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5jb2RlO1xuICAgICAgICAgIGlmIChlcnJDb2RlID09PSBcIlBhc3N3b3JkQ2hhbmdlUmVxdWlyZWRcIikge1xuICAgICAgICAgICAgYWxlcnQoXG4gICAgICAgICAgICAgIFwiW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLmNsb3VkLmxvZ2luLmFsZXJ0X3Bhc3N3b3JkX2NoYW5nZV9yZXF1aXJlZCcpXV1cIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGUoXCIvY29uZmlnL2Nsb3VkL2ZvcmdvdC1wYXNzd29yZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgICAgIF9yZXF1ZXN0SW5Qcm9ncmVzczogZmFsc2UsXG4gICAgICAgICAgICBfZXJyb3I6XG4gICAgICAgICAgICAgIGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgPyBlcnIuYm9keS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgOiBcIlVua25vd24gZXJyb3JcIixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGVyckNvZGUgPT09IFwiVXNlck5vdENvbmZpcm1lZFwiKSB7XG4gICAgICAgICAgICBwcm9wcy5fZXJyb3IgPVxuICAgICAgICAgICAgICBcIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5jbG91ZC5sb2dpbi5hbGVydF9lbWFpbF9jb25maXJtX25lY2Vzc2FyeScpXV1cIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuICAgICAgICAgIHRoaXMuJC5lbWFpbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgX2hhbmRsZVJlZ2lzdGVyKCkge1xuICAgIHRoaXMuZmxhc2hNZXNzYWdlID0gXCJcIjtcbiAgICB0aGlzLm5hdmlnYXRlKFwiL2NvbmZpZy9jbG91ZC9yZWdpc3RlclwiKTtcbiAgfVxuXG4gIF9oYW5kbGVGb3Jnb3RQYXNzd29yZCgpIHtcbiAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gICAgdGhpcy5uYXZpZ2F0ZShcIi9jb25maWcvY2xvdWQvZm9yZ290LXBhc3N3b3JkXCIpO1xuICB9XG5cbiAgX2Rpc21pc3NGbGFzaCgpIHtcbiAgICAvLyBnaXZlIHNvbWUgdGltZSB0byBsZXQgdGhlIHJpcHBsZSBmaW5pc2guXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZsYXNoTWVzc2FnZSA9IFwiXCI7XG4gICAgfSwgMjAwKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjbG91ZC1sb2dpblwiLCBDbG91ZExvZ2luKTtcbiIsImltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuL3RvYXN0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzaG93U2F2ZVN1Y2Nlc3NUb2FzdCA9IChlbDogSFRNTEVsZW1lbnQsIGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIHNob3dUb2FzdChlbCwge1xuICAgIG1lc3NhZ2U6IGhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnN1Y2Nlc3NmdWxseV9zYXZlZFwiKSxcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBREE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7QUFRQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUFBOztBQUdBO0FBNEtBO0FBMUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQTs7OztBQU1BO0FBQ0E7Ozs7QUFJQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVVBOzs7O0FBTUE7QUFDQTs7O0FBR0E7Ozs7QUFNQTtBQUNBOzs7OztBQUtBOztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBT0E7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBO0FBQ0E7QUE5S0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBb0xBOzs7Ozs7Ozs7Ozs7O0FDM01BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BOztBQUVBOzs7OztBQU9BO0FBQ0E7Ozs7QUFJQTs7Ozs7OztBQU9BOzs7Ozs7OztBQVVBOzs7O0FBTUE7QUFDQTs7O0FBR0E7Ozs7QUFNQTtBQUNBOzs7OztBQUtBOzs7OztBQU9BOztBQUlBOztBQUlBOztBQUlBO0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBOzs7OztBQU9BOzs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVBBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBS0E7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUNBOztBQUVBOzs7QUFLQTs7O0FBS0E7QUFDQTtBQUVBOztBQUVBOzs7O0FBTUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTs7Ozs7O0FBTUE7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQTtBQXZJQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBRUE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUlBO0FBQ0E7QUFFQTtBQUNBOztBQUVBOztBQUlBOztBQUlBOztBQUlBOzs7QUFLQTtBQUNBO0FBRUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDM1BBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBR0E7QUFBQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFpRUE7QUEvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0hBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWlEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF2REE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL1NBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9