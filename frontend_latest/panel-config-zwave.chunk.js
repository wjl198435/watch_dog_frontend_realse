(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-zwave"],{

/***/ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-layout-behavior/app-layout-behavior.js */ "./node_modules/@polymer/app-layout/app-layout-behavior/app-layout-behavior.js");
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
app-header-layout is a wrapper element that positions an app-header and other
content. This element uses the document scroll by default, but it can also
define its own scrolling region.

Using the document scroll:

```html
<app-header-layout>
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Using an own scrolling region:

```html
<app-header-layout has-scrolling-region style="width: 300px; height: 400px;">
  <app-header slot="header" fixed condenses effects="waterfall">
    <app-toolbar>
      <div main-title>App name</div>
    </app-toolbar>
  </app-header>
  <div>
    main content
  </div>
</app-header-layout>
```

Add the `fullbleed` attribute to app-header-layout to make it fit the size of
its container:

```html
<app-header-layout fullbleed>
 ...
</app-header-layout>
```

@group App Elements
@element app-header-layout
@demo app-header-layout/demo/simple.html Simple Demo
@demo app-header-layout/demo/scrolling-region.html Scrolling Region
@demo app-header-layout/demo/music.html Music Demo
@demo app-header-layout/demo/footer.html Footer Demo
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,

  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],

  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {type: Boolean, value: false, reflectToAttribute: true}
  },

  observers: ['resetLayout(isAttached, hasScrollingRegion)'],

  /**
   * A reference to the app-header element.
   *
   * @property header
   */
  get header() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.headerSlot).getDistributedNodes()[0];
  },

  _updateLayoutStates: function() {
    var header = this.header;
    if (!this.isAttached || !header) {
      return;
    }
    // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.
    this.$.wrapper.classList.remove('initializing');
    // Update scroll target.
    header.scrollTarget = this.hasScrollingRegion ?
        this.$.contentContainer :
        this.ownerDocument.documentElement;
    // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).
    var headerHeight = header.offsetHeight;
    // Update the header position.
    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function() {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    }
    // Update the content container position.
    var containerStyle = this.$.contentContainer.style;
    if (header.fixed && !header.condenses && this.hasScrollingRegion) {
      // If the header size does not change and we're using a scrolling region,
      // exclude the header area from the scrolling region so that the header
      // doesn't overlap the scrollbar.
      containerStyle.marginTop = headerHeight + 'px';
      containerStyle.paddingTop = '';
    } else {
      containerStyle.paddingTop = headerHeight + 'px';
      containerStyle.marginTop = '';
    }
  }
});


/***/ }),

/***/ "./src/common/config/is_pwa.ts":
/*!*************************************!*\
  !*** ./src/common/config/is_pwa.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPwa; });
/** Return if the displaymode is in standalone mode (PWA). */
function isPwa() {
    return window.matchMedia("(display-mode: standalone)").matches;
}


/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = (entityId) => {
    return entityId.substr(entityId.indexOf(".") + 1);
};


/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = (stateObj) => {
    return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};


/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = (stateObj) => {
    return stateObj.attributes.friendly_name === undefined
        ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ")
        : stateObj.attributes.friendly_name || "";
};


/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: sortStatesByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortStatesByName", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");

const sortStatesByName = (entityA, entityB) => {
    const nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityA);
    const nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(entityB);
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
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

/***/ "./src/components/ha-service-description.js":
/*!**************************************************!*\
  !*** ./src/components/ha-service-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



class HaServiceDescription extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      [[_getDescription(hass, domain, service)]]
    `;
  }

  static get properties() {
    return {
      hass: Object,
      domain: String,
      service: String,
    };
  }

  _getDescription(hass, domain, service) {
    var domainServices = hass.services[domain];
    if (!domainServices) return "";
    var serviceObject = domainServices[service];
    if (!serviceObject) return "";
    return serviceObject.description;
  }
}

customElements.define("ha-service-description", HaServiceDescription);


/***/ }),

/***/ "./src/data/zwave.ts":
/*!***************************!*\
  !*** ./src/data/zwave.ts ***!
  \***************************/
/*! exports provided: ZWAVE_NETWORK_STATE_STOPPED, ZWAVE_NETWORK_STATE_FAILED, ZWAVE_NETWORK_STATE_STARTED, ZWAVE_NETWORK_STATE_AWAKED, ZWAVE_NETWORK_STATE_READY, fetchNetworkStatus, fetchValues, fetchNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_STOPPED", function() { return ZWAVE_NETWORK_STATE_STOPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_FAILED", function() { return ZWAVE_NETWORK_STATE_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_STARTED", function() { return ZWAVE_NETWORK_STATE_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_AWAKED", function() { return ZWAVE_NETWORK_STATE_AWAKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZWAVE_NETWORK_STATE_READY", function() { return ZWAVE_NETWORK_STATE_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNetworkStatus", function() { return fetchNetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchValues", function() { return fetchValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNodeConfig", function() { return fetchNodeConfig; });
const ZWAVE_NETWORK_STATE_STOPPED = 0;
const ZWAVE_NETWORK_STATE_FAILED = 1;
const ZWAVE_NETWORK_STATE_STARTED = 5;
const ZWAVE_NETWORK_STATE_AWAKED = 7;
const ZWAVE_NETWORK_STATE_READY = 10;
const fetchNetworkStatus = (hass) => hass.callWS({
    type: "zwave/network_status",
});
const fetchValues = (hass, nodeId) => hass.callApi("GET", `zwave/values/${nodeId}`);
const fetchNodeConfig = (hass, nodeId) => hass.callApi("GET", `zwave/config/${nodeId}`);


/***/ }),

/***/ "./src/layouts/ha-app-layout.js":
/*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/




class HaAppLayout extends customElements.get("app-header-layout") {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
  }
}
customElements.define("ha-app-layout", HaAppLayout);


/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");

documentContainer.innerHTML = `<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild(documentContainer.content);


/***/ }),

/***/ "./src/panels/config/zwave/ha-config-zwave.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/ha-config-zwave.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _zwave_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zwave-groups */ "./src/panels/config/zwave/zwave-groups.js");
/* harmony import */ var _zwave_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./zwave-log */ "./src/panels/config/zwave/zwave-log.js");
/* harmony import */ var _zwave_network__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zwave-network */ "./src/panels/config/zwave/zwave-network.ts");
/* harmony import */ var _zwave_node_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zwave-node-config */ "./src/panels/config/zwave/zwave-node-config.ts");
/* harmony import */ var _zwave_usercodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zwave-usercodes */ "./src/panels/config/zwave/zwave-usercodes.js");
/* harmony import */ var _zwave_values__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zwave-values */ "./src/panels/config/zwave/zwave-values.ts");
/* harmony import */ var _zwave_node_protection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./zwave-node-protection */ "./src/panels/config/zwave/zwave-node-protection.js");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");


































/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class HaConfigZwave extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <style include="iron-flex ha-style ha-form-style">
        .content {
          margin-top: 24px;
        }

        .sectionHeader {
          position: relative;
          padding-right: 40px;
        }

        .node-info {
          margin-left: 16px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="_backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title="">
              [[localize('ui.panel.config.zwave.caption')]]
            </div>
          </app-toolbar>
        </app-header>

        <zwave-network
          id="zwave-network"
          is-wide="[[isWide]]"
          hass="[[hass]]"
        ></zwave-network>

        <!-- Node card -->
        <ha-config-section is-wide="[[isWide]]">
          <div class="sectionHeader" slot="header">
            <span>Z-Wave Node Management</span>
            <paper-icon-button
              class="toggle-help-icon"
              on-click="toggleHelp"
              icon="hass:help-circle"
            ></paper-icon-button>
          </div>
          <span slot="introduction">
            Run Z-Wave commands that affect a single node. Pick a node to see a
            list of available commands.
          </span>

          <ha-card class="content">
            <div class="device-picker">
              <paper-dropdown-menu dynamic-align="" label="Nodes" class="flex">
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{selectedNode}}"
                >
                  <template is="dom-repeat" items="[[nodes]]" as="state">
                    <paper-item>[[computeSelectCaption(state)]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            <template is="dom-if" if="[[!computeIsNodeSelected(selectedNode)]]">
              <template is="dom-if" if="[[showHelp]]">
                <div style="color: grey; padding: 12px">
                  Select node to view per-node options
                </div>
              </template>
            </template>

            <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Refresh Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <template is="dom-if" if="[[nodeFailed]]">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Remove Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>

                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Replace Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                </template>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Print Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  service-data="[[computeHealNodeServiceData(selectedNode)]]"
                >
                  Heal Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Test Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>
                <mwc-button on-click="_nodeMoreInfo"
                  >Node Information</mwc-button
                >
              </div>

              <div class="device-picker">
                <paper-dropdown-menu
                  label="Entities of this node"
                  dynamic-align=""
                  class="flex"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    selected="{{selectedEntity}}"
                  >
                    <template is="dom-repeat" items="[[entities]]" as="state">
                      <paper-item>[[state.entity_id]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <template
                is="dom-if"
                if="[[!computeIsEntitySelected(selectedEntity)]]"
              >
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    service-data="[[computeRefreshEntityServiceData(selectedEntity)]]"
                  >
                    Refresh Entity
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                  <mwc-button on-click="_entityMoreInfo"
                    >Entity Information</mwc-button
                  >
                </div>
                <div class="form-group">
                  <paper-checkbox
                    checked="{{entityIgnored}}"
                    class="form-control"
                  >
                    Exclude this entity from 牧养犬
                  </paper-checkbox>
                  <paper-input
                    disabled="{{entityIgnored}}"
                    label="Polling intensity"
                    type="number"
                    min="0"
                    value="{{entityPollingIntensity}}"
                  >
                  </paper-input>
                </div>
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="set_poll_intensity"
                    service-data="[[computePollIntensityServiceData(entityPollingIntensity)]]"
                  >
                    Save
                  </ha-call-service-button>
                </div>
              </template>
            </template>
          </ha-card>

          <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
            <!-- Value card -->
            <zwave-values
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              values="[[values]]"
            ></zwave-values>

            <!-- Group card -->
            <zwave-groups
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              groups="[[groups]]"
            ></zwave-groups>

            <!-- Config card -->
            <zwave-node-config
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              config="[[config]]"
            ></zwave-node-config>
          </template>

          <!-- Protection card -->
          <template is="dom-if" if="{{_protectionNode}}">
            <zwave-node-protection
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              protection="[[_protection]]"
            ></zwave-node-protection>
          </template>

          <!-- User Codes -->
          <template is="dom-if" if="{{hasNodeUserCodes}}">
            <zwave-usercodes
              id="zwave-usercodes"
              hass="[[hass]]"
              nodes="[[nodes]]"
              user-codes="[[userCodes]]"
              selected-node="[[selectedNode]]"
            ></zwave-usercodes>
          </template>
        </ha-config-section>

        <!-- Ozw log -->
        <ozw-log is-wide="[[isWide]]" hass="[[hass]]"></ozw-log>
      </ha-app-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      isWide: Boolean,

      nodes: {
        type: Array,
        computed: "computeNodes(hass)",
      },

      selectedNode: {
        type: Number,
        value: -1,
        observer: "selectedNodeChanged",
      },

      nodeFailed: {
        type: Boolean,
        value: false,
      },

      config: {
        type: Array,
        value: () => [],
      },

      entities: {
        type: Array,
        computed: "computeEntities(selectedNode)",
      },

      selectedEntity: {
        type: Number,
        value: -1,
        observer: "selectedEntityChanged",
      },

      values: {
        type: Array,
      },

      groups: {
        type: Array,
      },

      userCodes: {
        type: Array,
        value: () => [],
      },

      hasNodeUserCodes: {
        type: Boolean,
        value: false,
      },

      showHelp: {
        type: Boolean,
        value: false,
      },

      entityIgnored: Boolean,

      entityPollingIntensity: {
        type: Number,
        value: 0,
      },

      _protection: {
        type: Array,
        value: () => [],
      },

      _protectionNode: {
        type: Boolean,
        value: false,
      },
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", (ev) =>
      this.serviceCalled(ev)
    );
  }

  serviceCalled(ev) {
    if (ev.detail.success && ev.detail.service === "set_poll_intensity") {
      this._saveEntity();
    }
  }

  computeNodes(hass) {
    return Object.keys(hass.states)
      .map((key) => hass.states[key])
      .filter((ent) => ent.entity_id.match("zwave[.]"))
      .sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
  }

  computeEntities(selectedNode) {
    if (!this.nodes || selectedNode === -1) return -1;
    const nodeid = this.nodes[this.selectedNode].attributes.node_id;
    const hass = this.hass;
    return Object.keys(this.hass.states)
      .map((key) => hass.states[key])
      .filter((ent) => {
        if (ent.attributes.node_id === undefined) {
          return false;
        }
        return (
          !ent.attributes.hidden &&
          "node_id" in ent.attributes &&
          ent.attributes.node_id === nodeid &&
          !ent.entity_id.match("zwave[.]")
        );
      })
      .sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["sortStatesByName"]);
  }

  selectedNodeChanged(selectedNode) {
    if (selectedNode === -1) return;
    this.selectedEntity = -1;

    this.hass
      .callApi(
        "GET",
        `zwave/config/${this.nodes[selectedNode].attributes.node_id}`
      )
      .then((configs) => {
        this.config = this._objToArray(configs);
      });

    this.hass
      .callApi(
        "GET",
        `zwave/values/${this.nodes[selectedNode].attributes.node_id}`
      )
      .then((values) => {
        this.values = this._objToArray(values);
      });

    this.hass
      .callApi(
        "GET",
        `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`
      )
      .then((groups) => {
        this.groups = this._objToArray(groups);
      });

    this.hasNodeUserCodes = false;
    this.notifyPath("hasNodeUserCodes");
    this.hass
      .callApi(
        "GET",
        `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`
      )
      .then((usercodes) => {
        this.userCodes = this._objToArray(usercodes);
        this.hasNodeUserCodes = this.userCodes.length > 0;
        this.notifyPath("hasNodeUserCodes");
      });
    this.hass
      .callApi(
        "GET",
        `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`
      )
      .then((protections) => {
        this._protection = this._objToArray(protections);
        if (this._protection) {
          if (this._protection.length === 0) {
            return;
          }
          this._protectionNode = true;
        }
      });

    this.nodeFailed = this.nodes[selectedNode].attributes.is_failed;
  }

  selectedEntityChanged(selectedEntity) {
    if (selectedEntity === -1) return;
    this.hass
      .callApi(
        "GET",
        `zwave/values/${this.nodes[this.selectedNode].attributes.node_id}`
      )
      .then((values) => {
        this.values = this._objToArray(values);
      });

    const valueId = this.entities[selectedEntity].attributes.value_id;
    const valueData = this.values.find((obj) => obj.key === valueId);
    const valueIndex = this.values.indexOf(valueData);
    this.hass
      .callApi(
        "GET",
        `config/zwave/device_config/${this.entities[selectedEntity].entity_id}`
      )
      .then((data) => {
        this.setProperties({
          entityIgnored: data.ignored || false,
          entityPollingIntensity: this.values[valueIndex].value.poll_intensity,
        });
      })
      .catch(() => {
        this.setProperties({
          entityIgnored: false,
          entityPollingIntensity: this.values[valueIndex].value.poll_intensity,
        });
      });
  }

  computeSelectCaption(stateObj) {
    return (
      Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj) +
      " (Node:" +
      stateObj.attributes.node_id +
      " " +
      stateObj.attributes.query_stage +
      ")"
    );
  }

  computeSelectCaptionEnt(stateObj) {
    return Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__["computeStateDomain"])(stateObj) + "." + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["computeStateName"])(stateObj);
  }

  computeIsNodeSelected() {
    return this.nodes && this.selectedNode !== -1;
  }

  computeIsEntitySelected(selectedEntity) {
    return selectedEntity === -1;
  }

  computeNodeServiceData(selectedNode) {
    return { node_id: this.nodes[selectedNode].attributes.node_id };
  }

  computeHealNodeServiceData(selectedNode) {
    return {
      node_id: this.nodes[selectedNode].attributes.node_id,
      return_routes: true,
    };
  }

  computeRefreshEntityServiceData(selectedEntity) {
    if (selectedEntity === -1) return -1;
    return { entity_id: this.entities[selectedEntity].entity_id };
  }

  computePollIntensityServiceData(entityPollingIntensity) {
    if (!this.selectedNode === -1 || this.selectedEntity === -1) return -1;
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      value_id: this.entities[this.selectedEntity].attributes.value_id,
      poll_intensity: parseInt(entityPollingIntensity),
    };
  }

  _nodeMoreInfo() {
    this.fire("hass-more-info", {
      entityId: this.nodes[this.selectedNode].entity_id,
    });
  }

  _entityMoreInfo() {
    this.fire("hass-more-info", {
      entityId: this.entities[this.selectedEntity].entity_id,
    });
  }

  _saveEntity() {
    const data = {
      ignored: this.entityIgnored,
      polling_intensity: parseInt(this.entityPollingIntensity),
    };
    return this.hass.callApi(
      "POST",
      `config/zwave/device_config/${
        this.entities[this.selectedEntity].entity_id
      }`,
      data
    );
  }

  toggleHelp() {
    this.showHelp = !this.showHelp;
  }

  _objToArray(obj) {
    const array = [];
    Object.keys(obj).forEach((key) => {
      array.push({
        key,
        value: obj[key],
      });
    });
    return array;
  }

  _backTapped() {
    history.back();
  }
}

customElements.define("ha-config-zwave", HaConfigZwave);


/***/ }),

/***/ "./src/panels/config/zwave/zwave-groups.js":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-groups.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");











class ZwaveGroups extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 12px;
        }
      </style>
      <ha-card class="content" header="Node group associations">
        <!-- TODO make api for getting groups and members -->
        <div class="device-picker">
          <paper-dropdown-menu label="Group" dynamic-align="" class="flex">
            <paper-listbox
              slot="dropdown-content"
              selected="{{_selectedGroup}}"
            >
              <template is="dom-repeat" items="[[groups]]" as="state">
                <paper-item>[[_computeSelectCaptionGroup(state)]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <template is="dom-if" if="[[_computeIsGroupSelected(_selectedGroup)]]">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Node to control"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedTargetNode}}"
              >
                <template is="dom-repeat" items="[[nodes]]" as="state">
                  <paper-item>[[_computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="help-text">
            <span>Other Nodes in this group:</span>
            <template is="dom-repeat" items="[[_otherGroupNodes]]" as="state">
              <div>[[state]]</div>
            </template>
          </div>
          <div class="help-text">
            <span>Max Associations:</span> <span>[[_maxAssociations]]</span>
          </div>
        </template>

        <template
          is="dom-if"
          if="[[_computeIsTargetNodeSelected(_selectedTargetNode)]]"
        >
          <div class="card-actions">
            <template is="dom-if" if="[[!_noAssociationsLeft]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_addAssocServiceData]]"
              >
                Add To Group
              </ha-call-service-button>
            </template>
            <template
              is="dom-if"
              if="[[_computeTargetInGroup(_selectedGroup, _selectedTargetNode)]]"
            >
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeAssocServiceData]]"
              >
                Remove From Group
              </ha-call-service-button>
            </template>
            <template is="dom-if" if="[[_isBroadcastNodeInGroup]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeBroadcastNodeServiceData]]"
              >
                Remove Broadcast
              </ha-call-service-button>
            </template>
          </div>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      nodes: Array,

      groups: Array,

      selectedNode: {
        type: Number,
        observer: "_selectedNodeChanged",
      },

      _selectedTargetNode: {
        type: Number,
        value: -1,
        observer: "_selectedTargetNodeChanged",
      },

      _selectedGroup: {
        type: Number,
        value: -1,
      },

      _otherGroupNodes: {
        type: Array,
        value: -1,
        computed: "_computeOtherGroupNodes(_selectedGroup)",
      },

      _maxAssociations: {
        type: String,
        value: "",
        computed: "_computeMaxAssociations(_selectedGroup)",
      },

      _noAssociationsLeft: {
        type: Boolean,
        value: true,
        computed: "_computeAssociationsLeft(_selectedGroup)",
      },

      _addAssocServiceData: {
        type: String,
        value: "",
      },

      _removeAssocServiceData: {
        type: String,
        value: "",
      },

      _removeBroadcastNodeServiceData: {
        type: String,
        value: "",
      },

      _isBroadcastNodeInGroup: {
        type: Boolean,
        value: false,
      },
    };
  }

  static get observers() {
    return ["_selectedGroupChanged(groups, _selectedGroup)"];
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", (ev) =>
      this.serviceCalled(ev)
    );
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshGroups(this.selectedNode);
      }, 5000);
    }
  }

  _computeAssociationsLeft(selectedGroup) {
    if (selectedGroup === -1) return true;
    return this._maxAssociations === this._otherGroupNodes.length;
  }

  _computeMaxAssociations(selectedGroup) {
    if (selectedGroup === -1) return -1;
    const maxAssociations = this.groups[selectedGroup].value.max_associations;
    if (!maxAssociations) return "None";
    return maxAssociations;
  }

  _computeOtherGroupNodes(selectedGroup) {
    if (selectedGroup === -1) return -1;
    this.setProperties({ _isBroadcastNodeInGroup: false });
    const associations = Object.values(
      this.groups[selectedGroup].value.association_instances
    );
    if (!associations.length) return ["None"];
    return associations.map((assoc) => {
      if (!assoc.length || assoc.length !== 2) {
        return `Unknown Node: ${assoc}`;
      }
      const id = assoc[0];
      const instance = assoc[1];
      const node = this.nodes.find((n) => n.attributes.node_id === id);
      if (id === 255) {
        this.setProperties({
          _isBroadcastNodeInGroup: true,
          _removeBroadcastNodeServiceData: {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            association: "remove",
            target_node_id: 255,
            group: this.groups[selectedGroup].key,
          },
        });
      }
      if (!node) {
        return `Unknown Node (${id}: (${instance} ? ${id}.${instance} : ${id}))`;
      }
      let caption = this._computeSelectCaption(node);
      if (instance) {
        caption += `/ Instance: ${instance}`;
      }
      return caption;
    });
  }

  _computeTargetInGroup(selectedGroup, selectedTargetNode) {
    if (selectedGroup === -1 || selectedTargetNode === -1) return false;
    const associations = Object.values(
      this.groups[selectedGroup].value.associations
    );
    if (!associations.length) return false;
    return (
      associations.indexOf(
        this.nodes[selectedTargetNode].attributes.node_id
      ) !== -1
    );
  }

  _computeSelectCaption(stateObj) {
    return `${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(stateObj)}
      (Node: ${stateObj.attributes.node_id}
      ${stateObj.attributes.query_stage})`;
  }

  _computeSelectCaptionGroup(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  _computeIsTargetNodeSelected(selectedTargetNode) {
    return this.nodes && selectedTargetNode !== -1;
  }

  _computeIsGroupSelected(selectedGroup) {
    return this.nodes && this.selectedNode !== -1 && selectedGroup !== -1;
  }

  _computeAssocServiceData(selectedGroup, type) {
    if (
      !this.groups === -1 ||
      selectedGroup === -1 ||
      this.selectedNode === -1 ||
      this._selectedTargetNode === -1
    )
      return -1;
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      association: type,
      target_node_id: this.nodes[this._selectedTargetNode].attributes.node_id,
      group: this.groups[selectedGroup].key,
    };
  }

  async _refreshGroups(selectedNode) {
    const groupData = [];
    const groups = await this.hass.callApi(
      "GET",
      `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`
    );
    Object.keys(groups).forEach((key) => {
      groupData.push({
        key,
        value: groups[key],
      });
    });
    this.setProperties({
      groups: groupData,
      _maxAssociations: groupData[this._selectedGroup].value.max_associations,
      _otherGroupNodes: Object.values(
        groupData[this._selectedGroup].value.associations
      ),
      _isBroadcastNodeInGroup: false,
    });
    const oldGroup = this._selectedGroup;
    this.setProperties({ _selectedGroup: -1 });
    this.setProperties({ _selectedGroup: oldGroup });
  }

  _selectedGroupChanged() {
    if (this._selectedGroup === -1) return;
    this.setProperties({
      _maxAssociations: this.groups[this._selectedGroup].value.max_associations,
      _otherGroupNodes: Object.values(
        this.groups[this._selectedGroup].value.associations
      ),
    });
  }

  _selectedTargetNodeChanged() {
    if (this._selectedGroup === -1) return;
    if (
      this._computeTargetInGroup(this._selectedGroup, this._selectedTargetNode)
    ) {
      this.setProperties({
        _removeAssocServiceData: this._computeAssocServiceData(
          this._selectedGroup,
          "remove"
        ),
      });
    } else {
      this.setProperties({
        _addAssocServiceData: this._computeAssocServiceData(
          this._selectedGroup,
          "add"
        ),
      });
    }
  }

  _selectedNodeChanged() {
    if (this.selectedNode === -1) return;
    this.setProperties({ _selectedTargetNode: -1, _selectedGroup: -1 });
  }
}

customElements.define("zwave-groups", ZwaveGroups);


/***/ }),

/***/ "./src/panels/config/zwave/zwave-log.js":
/*!**********************************************!*\
  !*** ./src/panels/config/zwave/zwave-log.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/config/is_pwa */ "./src/common/config/is_pwa.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");












let registeredDialog = false;

class OzwLog extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style include="iron-flex ha-style">
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 24px;
      }

    </style>
    <ha-config-section is-wide="[[isWide]]">
      <span slot="header">
        [[localize('ui.panel.config.zwave.ozw_log.header')]]
      </span>
      <span slot="introduction">
        [[localize('ui.panel.config.zwave.ozw_log.introduction')]]
      </span>
      <ha-card class="content">
        <div class="device-picker">
          <paper-input label="Number of last log lines." type="number" min="0" max="1000" step="10" value="{{numLogLines}}">
          </paper-input>
        </div>
        <div class="card-actions">
          <mwc-button raised="true" on-click="_openLogWindow">Load</mwc-button>
          <mwc-button raised="true" on-click="_tailLog" disabled="{{_completeLog}}">Tail</mwc-button>
      </ha-card>
    </ha-config-section>
`;
  }

  static get properties() {
    return {
      hass: Object,

      isWide: {
        type: Boolean,
        value: false,
      },

      _ozwLogs: String,

      _completeLog: {
        type: Boolean,
        value: true,
      },

      numLogLines: {
        type: Number,
        value: 0,
        observer: "_isCompleteLog",
      },

      _intervalId: String,

      tail: Boolean,
    };
  }

  async _tailLog() {
    this.setProperties({ tail: true });
    const ozwWindow = await this._openLogWindow();
    if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
      this.setProperties({
        _intervalId: setInterval(() => {
          this._refreshLog(ozwWindow);
        }, 1500),
      });
    }
  }

  async _openLogWindow() {
    const info = await this.hass.callApi(
      "GET",
      "zwave/ozwlog?lines=" + this.numLogLines
    );
    this.setProperties({ _ozwLogs: info });
    if (Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_7__["default"])()) {
      this._showOzwlogDialog();
      return -1;
    }
    const ozwWindow = open("", "ozwLog", "toolbar");
    ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
    return ozwWindow;
  }

  async _refreshLog(ozwWindow) {
    if (ozwWindow.closed === true) {
      clearInterval(this._intervalId);
      this.setProperties({ _intervalId: null });
    } else {
      const info = await this.hass.callApi(
        "GET",
        "zwave/ozwlog?lines=" + this.numLogLines
      );
      this.setProperties({ _ozwLogs: info });
      ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
    }
  }

  _isCompleteLog() {
    if (this.numLogLines !== "0") {
      this.setProperties({ _completeLog: false });
    } else {
      this.setProperties({ _completeLog: true });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-ozwlog-dialog",
        dialogTag: "zwave-log-dialog",
        dialogImport: () =>
          Promise.all(/*! import() | zwave-log-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("zwave-log-dialog")]).then(__webpack_require__.bind(null, /*! ./zwave-log-dialog */ "./src/panels/config/zwave/zwave-log-dialog.js")),
      });
    }
  }

  _showOzwlogDialog() {
    this.fire("show-ozwlog-dialog", {
      hass: this.hass,
      _numLogLines: this.numLogLines,
      _ozwLog: this._ozwLogs,
      _tail: this.tail,
      dialogClosedCallback: () => this._dialogClosed(),
    });
  }

  _dialogClosed() {
    this.setProperties({
      tail: false,
    });
  }
}
customElements.define("ozw-log", OzwLog);


/***/ }),

/***/ "./src/panels/config/zwave/zwave-network.ts":
/*!**************************************************!*\
  !*** ./src/panels/config/zwave/zwave-network.ts ***!
  \**************************************************/
/*! exports provided: ZwaveNetwork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveNetwork", function() { return ZwaveNetwork; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../data/zwave */ "./src/data/zwave.ts");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");












let ZwaveNetwork = class ZwaveNetwork extends lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"] {
    constructor() {
        super(...arguments);
        this._showHelp = false;
        this._unsubs = [];
    }
    disconnectedCallback() {
        this._unsubscribe();
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this._getNetworkStatus();
        this._subscribe();
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <ha-config-section .isWide="${this.isWide}">
        <div class="sectionHeader" slot="header">
          <span>
            ${this.hass.localize("ui.panel.config.zwave.network_management.header")}
          </span>
          <paper-icon-button
            class="toggle-help-icon"
            @click="${this._onHelpTap}"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <div slot="introduction">
          ${this.hass.localize("ui.panel.config.zwave.network_management.introduction")}
          <p>
            <a
              href="https://www.home-assistant.io/docs/z-wave/control-panel/"
              target="_blank"
            >
              ${this.hass.localize("ui.panel.config.zwave.learn_more")}
            </a>
          </p>
        </div>

        ${this._networkStatus
            ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
              <ha-card class="content network-status">
                <div class="details">
                  ${this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_STOPPED"]
                ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                        <ha-icon icon="hass:close"></ha-icon>
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_stopped")}
                      `
                : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_STARTED"]
                    ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                        <paper-spinner active></paper-spinner>
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_starting")}<br />
                        <small>
                          ${this.hass.localize("ui.panel.config.zwave.network_status.network_starting_note")}
                        </small>
                      `
                    : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                        ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                        <ha-icon icon="hass:checkbox-marked-circle"> </ha-icon>
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_started")}<br />
                        <small>
                          ${this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_some_queried")}
                        </small>
                      `
                        : this._networkStatus.state === _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_READY"]
                            ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                        ${this.hass.localize("ui.panel.config.zwave.network_status.network_started")}<br />
                        <small>
                          ${this.hass.localize("ui.panel.config.zwave.network_status.network_started_note_all_queried")}
                        </small>
                      `
                            : ""}
                </div>
                <div class="card-actions">
                  ${this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                        ${this._generateServiceButton("stop_network")}
                        ${this._generateServiceButton("heal_network")}
                        ${this._generateServiceButton("test_network")}
                      `
                : lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                        ${this._generateServiceButton("start_network")}
                      `}
                </div>
                ${this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                      <div class="card-actions">
                        ${this._generateServiceButton("soft_reset")}
                        <ha-call-api-button
                          .hass=${this.hass}
                          path="zwave/saveconfig"
                        >
                          ${this.hass.localize("ui.panel.config.zwave.services.save_config")}
                        </ha-call-api-button>
                      </div>
                    `
                : ""}
              </ha-card>
              ${this._networkStatus.state >= _data_zwave__WEBPACK_IMPORTED_MODULE_5__["ZWAVE_NETWORK_STATE_AWAKED"]
                ? lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
                    <ha-card class="content">
                      <div class="card-actions">
                        ${this._generateServiceButton("add_node_secure")}
                        ${this._generateServiceButton("add_node")}
                        ${this._generateServiceButton("remove_node")}
                      </div>
                      <div class="card-actions">
                        ${this._generateServiceButton("cancel_command")}
                      </div>
                    </ha-card>
                  `
                : ""}
            `
            : ""}
      </ha-config-section>
    `;
    }
    async _getNetworkStatus() {
        this._networkStatus = await Object(_data_zwave__WEBPACK_IMPORTED_MODULE_5__["fetchNetworkStatus"])(this.hass);
    }
    _subscribe() {
        this._unsubs = [
            "zwave.network_start",
            "zwave.network_stop",
            "zwave.network_ready",
            "zwave.network_complete",
            "zwave.network_complete_some_dead",
        ].map((e) => this.hass.connection.subscribeEvents((event) => this._handleEvent(event), e));
    }
    _unsubscribe() {
        while (this._unsubs.length) {
            this._unsubs.pop().then((unsub) => unsub());
        }
    }
    _handleEvent(event) {
        if (event.event_type === "zwave.network_start") {
            // Optimistically set the state, wait 1s and poll the backend
            // The backend will still report a state of 0 when the 'network_start'
            // event is first fired.
            if (this._networkStatus) {
                this._networkStatus = Object.assign(Object.assign({}, this._networkStatus), { state: 5 });
            }
            setTimeout(() => this._getNetworkStatus, 1000);
        }
        else {
            this._getNetworkStatus();
        }
    }
    _onHelpTap() {
        this._showHelp = !this._showHelp;
    }
    _generateServiceButton(service) {
        return lit_element__WEBPACK_IMPORTED_MODULE_3__["html"] `
      <ha-call-service-button
        .hass=${this.hass}
        domain="zwave"
        service="${service}"
      >
        ${this.hass.localize("ui.panel.config.zwave.services." + service)}
      </ha-call-service-button>
      <ha-service-description
        .hass=${this.hass}
        domain="zwave"
        service="${service}"
        ?hidden=${!this._showHelp}
      >
      </ha-service-description>
    `;
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_4__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_3__["css"] `
        .content {
          margin-top: 24px;
        }

        .sectionHeader {
          position: relative;
          padding-right: 40px;
        }

        .network-status {
          text-align: center;
        }

        .network-status div.details {
          font-size: 1.5rem;
          padding: 24px;
        }

        .network-status ha-icon {
          display: block;
          margin: 0px auto 16px;
          width: 48px;
          height: 48px;
        }

        .network-status small {
          font-size: 1rem;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
          padding: 0 8px 12px;
        }

        [hidden] {
          display: none;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], ZwaveNetwork.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], ZwaveNetwork.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], ZwaveNetwork.prototype, "_showHelp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], ZwaveNetwork.prototype, "_networkStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()
], ZwaveNetwork.prototype, "_unsubs", void 0);
ZwaveNetwork = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("zwave-network")
], ZwaveNetwork);



/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-config.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-config.ts ***!
  \******************************************************/
/*! exports provided: ZwaveNodeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveNodeConfig", function() { return ZwaveNodeConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_zwave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/zwave */ "./src/data/zwave.ts");










let ZwaveNodeConfig = class ZwaveNodeConfig extends lit_element__WEBPACK_IMPORTED_MODULE_5__["LitElement"] {
    constructor() {
        super(...arguments);
        this.nodes = [];
        this.config = [];
        this.selectedNode = -1;
        this._wakeupInput = -1;
        this._selectedConfigParameter = -1;
        this._selectedConfigValue = -1;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
      <div class="content">
        <ha-card
          .header=${this.hass.localize("ui.panel.config.zwave.node_config.header")}
        >
          ${"wake_up_interval" in this.nodes[this.selectedNode].attributes
            ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                <div class="card-actions">
                  <paper-input
                    .floatLabel="${this.hass.localize("ui.panel.config.zwave.common.wakeup_interval")}"
                    type="number"
                    .value=${this._wakeupInput !== -1
                ? this._wakeupInput
                : this.hass.localize("ui.panel.config.zwave.common.unknown")}
                    @value-changed=${this._onWakeupIntervalChanged}
                    .placeholder=${this.nodes[this.selectedNode].attributes
                .wake_up_interval
                ? this.nodes[this.selectedNode].attributes
                    .wake_up_interval
                : this.hass.localize("ui.panel.config.zwave.common.unknown")}
                  >
                    <div suffix>
                      ${this.hass.localize("ui.panel.config.zwave.node_config.seconds")}
                    </div>
                  </paper-input>
                  <ha-call-service-button
                    .hass=${this.hass}
                    domain="zwave"
                    service="set_wakeup"
                    .serviceData=${this._computeWakeupServiceData(this._wakeupInput)}
                  >
                    ${this.hass.localize("ui.panel.config.zwave.node_config.set_wakeup")}
                  </ha-call-service-button>
                </div>
              `
            : ""}
          <div class="device-picker">
            <paper-dropdown-menu
              .label=${this.hass.localize("ui.panel.config.zwave.node_config.config_parameter")}
              dynamic-align
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${this._selectedConfigParameter}
                @iron-select=${this._selectedConfigParameterChanged}
              >
                ${this.config.map((state) => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                    <paper-item>
                      ${state.key}: ${state.value.label}
                    </paper-item>
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          ${this._configItem
            ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                ${this._configItem.value.type === "List"
                ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                      <div class="device-picker">
                        <paper-dropdown-menu
                          .label=${this.hass.localize("ui.panel.config.zwave.node_config.config_value")}
                          dynamic-align
                          class="flex"
                          .placeholder=${this._configItem.value.data}
                        >
                          <paper-listbox
                            slot="dropdown-content"
                            .selected=${this._configItem.value.data}
                            @iron-select=${this._configValueSelectChanged}
                          >
                            ${this._configItem.value.data_items.map((state) => lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                                <paper-item>${state}</paper-item>
                              `)}
                          </paper-listbox>
                        </paper-dropdown-menu>
                      </div>
                    `
                : ""}
                ${["Byte", "Short", "Int"].includes(this._configItem.value.type)
                ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                      <div class="card-actions">
                        <paper-input
                          .label=${this._configItem.value.data_items}
                          type="number"
                          .value=${this._configItem.value.data}
                          .max=${this._configItem.value.max}
                          .min=${this._configItem.value.min}
                          @value-changed=${this._configValueInputChanged}
                        >
                        </paper-input>
                      </div>
                    `
                : ""}
                ${["Bool", "Button"].includes(this._configItem.value.type)
                ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                      <div class="device-picker">
                        <paper-dropdown-menu
                          .label=${this.hass.localize("ui.panel.config.zwave.node_config.config_value")}
                          class="flex"
                          dynamic-align
                          .placeholder=${this._configItem.value.data}
                        >
                          <paper-listbox
                            slot="dropdown-content"
                            .selected=${this._configItem.value.data}
                            @iron-select=${this._configValueSelectChanged}
                          >
                            <paper-item>
                              ${this.hass.localize("ui.panel.config.zwave.node_config.true")}
                            </paper-item>
                            <paper-item>
                              ${this.hass.localize("ui.panel.config.zwave.node_config.false")}
                            </paper-item>
                          </paper-listbox>
                        </paper-dropdown-menu>
                      </div>
                    `
                : ""}
                <div class="help-text">
                  <span>${this._configItem.value.help}</span>
                </div>
                ${["Bool", "Button", "Byte", "Short", "Int", "List"].includes(this._configItem.value.type)
                ? lit_element__WEBPACK_IMPORTED_MODULE_5__["html"] `
                      <div class="card-actions">
                        <ha-call-service-button
                          .hass=${this.hass}
                          domain="zwave"
                          service="set_config_parameter"
                          .serviceData=${this._computeSetConfigParameterServiceData()}
                        >
                          ${this.hass.localize("ui.panel.config.zwave.node_config.set_config_parameter")}
                        </ha-call-service-button>
                      </div>
                    `
                : ""}
              `
            : ""}
        </ha-card>
      </div>
    `;
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_6__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_5__["css"] `
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }

        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
      `,
        ];
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.addEventListener("hass-service-called", (ev) => this.serviceCalled(ev));
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has("selectedNode")) {
            this._nodesChanged();
        }
    }
    serviceCalled(ev) {
        if (ev.detail.success) {
            setTimeout(() => {
                this._refreshConfig(this.selectedNode);
            }, 5000);
        }
    }
    _nodesChanged() {
        if (!this.nodes) {
            return;
        }
        this._configItem = undefined;
        this._wakeupInput = this.nodes[this.selectedNode].attributes.hasOwnProperty("wake_up_interval")
            ? this.nodes[this.selectedNode].attributes.wake_up_interval
            : -1;
    }
    _onWakeupIntervalChanged(value) {
        this._wakeupInput = value.detail.value;
    }
    _computeWakeupServiceData(wakeupInput) {
        return {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            value: wakeupInput,
        };
    }
    _computeSetConfigParameterServiceData() {
        if (this.selectedNode === -1 || typeof this._configItem === "undefined") {
            return false;
        }
        let valueData = "";
        if (["Short", "Byte", "Int"].includes(this._configItem.value.type)) {
            valueData =
                typeof this._selectedConfigValue === "string"
                    ? parseInt(this._selectedConfigValue, 10)
                    : this._selectedConfigValue;
        }
        if (["Bool", "Button", "List"].includes(this._configItem.value.type)) {
            valueData = this._selectedConfigValue;
        }
        return {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            parameter: this._configItem.key,
            value: valueData,
        };
    }
    _selectedConfigParameterChanged(event) {
        if (event.target.selected === -1) {
            return;
        }
        this._selectedConfigParameter = event.target.selected;
        this._configItem = this.config[event.target.selected];
    }
    _configValueSelectChanged(event) {
        if (event.target.selected === -1) {
            return;
        }
        this._selectedConfigValue = event.target.selectedItem.textContent;
    }
    _configValueInputChanged(value) {
        this._selectedConfigValue = value.detail.value;
    }
    async _refreshConfig(selectedNode) {
        const configData = [];
        const config = await Object(_data_zwave__WEBPACK_IMPORTED_MODULE_9__["fetchNodeConfig"])(this.hass, this.nodes[selectedNode].attributes.node_id);
        Object.keys(config).forEach((key) => {
            configData.push({
                key: parseInt(key, 10),
                value: config[key],
            });
        });
        this.config = configData;
        this._configItem = this.config[this._selectedConfigParameter];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "nodes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "selectedNode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "_configItem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "_wakeupInput", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "_selectedConfigParameter", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["property"])()
], ZwaveNodeConfig.prototype, "_selectedConfigValue", void 0);
ZwaveNodeConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_5__["customElement"])("zwave-node-config")
], ZwaveNodeConfig);



/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-protection.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-protection.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");










class ZwaveNodeProtection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="iron-flex ha-style">
      .card-actions.warning ha-call-api-button {
        color: var(--google-red-500);
      }
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        @apply --layout-horizontal;
        @apply --layout-center-center;
        padding: 0 24px 24px 24px;
        }

    </style>
      <div class="content">
        <ha-card header="Node protection">
          <div class="device-picker">
          <paper-dropdown-menu label="Protection" dynamic-align class="flex" placeholder="{{_loadedProtectionValue}}">
            <paper-listbox slot="dropdown-content" selected="{{_selectedProtectionParameter}}">
              <template is="dom-repeat" items="[[_protectionOptions]]" as="state">
                <paper-item>[[state]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
          </div>
          <div class="card-actions">
            <ha-call-api-button
              hass="[[hass]]"
              path="[[_nodePath]]"
              data="[[_protectionData]]">
              Set Protection
            </ha-call-service-button>
          </div>
        </ha-card>
      </div>
`;
  }

  static get properties() {
    return {
      hass: Object,

      nodes: Array,

      selectedNode: {
        type: Number,
        value: -1,
      },

      protectionNode: {
        type: Boolean,
        value: false,
      },

      _protectionValueID: {
        type: Number,
        value: -1,
      },

      _selectedProtectionParameter: {
        type: Number,
        value: -1,
        observer: "_computeProtectionData",
      },

      _protectionOptions: Array,

      _protection: {
        type: Array,
        value: () => [],
      },

      _loadedProtectionValue: {
        type: String,
        value: "",
      },

      _protectionData: {
        type: Object,
        value: {},
      },

      _nodePath: String,
    };
  }

  static get observers() {
    return ["_nodesChanged(nodes, selectedNode)"];
  }

  ready() {
    super.ready();
    this.addEventListener("hass-api-called", (ev) => this.apiCalled(ev));
  }

  apiCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshProtection(this.selectedNode);
      }, 5000);
    }
  }

  _nodesChanged() {
    if (!this.nodes) return;
    if (this.protection) {
      if (this.protection.length === 0) {
        return;
      }
      this.setProperties({
        protectionNode: true,
        _protectionOptions: this.protection[0].value,
        _loadedProtectionValue: this.protection[1].value,
        _protectionValueID: this.protection[2].value,
      });
    }
  }

  async _refreshProtection(selectedNode) {
    const protectionValues = [];
    const protections = await this.hass.callApi(
      "GET",
      `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`
    );
    Object.keys(protections).forEach((key) => {
      protectionValues.push({
        key,
        value: protections[key],
      });
    });
    this.setProperties({
      _protection: protectionValues,
      _selectedProtectionParameter: -1,
      _loadedProtectionValue: this.protection[1].value,
    });
  }

  _computeProtectionData(selectedProtectionParameter) {
    if (this.selectedNode === -1 || selectedProtectionParameter === -1) return;
    this._protectionData = {
      selection: this._protectionOptions[selectedProtectionParameter],
      value_id: this._protectionValueID,
    };
    this._nodePath = `zwave/protection/${
      this.nodes[this.selectedNode].attributes.node_id
    }`;
  }
}

customElements.define("zwave-node-protection", ZwaveNodeProtection);


/***/ }),

/***/ "./src/panels/config/zwave/zwave-usercodes.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/zwave-usercodes.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");










class ZwaveUsercodes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node user codes">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Code slot"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedUserCode}}"
              >
                <template is="dom-repeat" items="[[userCodes]]" as="state">
                  <paper-item
                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item
                  >
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <template is="dom-if" if="[[_isUserCodeSelected(_selectedUserCode)]]">
            <div class="card-actions">
              <paper-input
                label="User code"
                type="text"
                allowed-pattern="[0-9,a-f,x,\\\\]"
                maxlength="40"
                minlength="16"
                value="{{_selectedUserCodeValue}}"
              >
              </paper-input>
              <pre>Ascii: [[_computedCodeOutput]]</pre>
            </div>
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="set_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, "Add")]]'
              >
                Set Usercode
              </ha-call-service-button>
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="clear_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCode, "Delete")]]'
              >
                Delete Usercode
              </ha-call-service-button>
            </div>
          </template>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      nodes: Array,

      selectedNode: {
        type: Number,
        observer: "_selectedNodeChanged",
      },

      userCodes: Object,

      _selectedUserCode: {
        type: Number,
        value: -1,
        observer: "_selectedUserCodeChanged",
      },

      _selectedUserCodeValue: String,

      _computedCodeOutput: {
        type: String,
        value: "",
      },
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", (ev) =>
      this.serviceCalled(ev)
    );
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshUserCodes(this.selectedNode);
      }, 5000);
    }
  }

  _isUserCodeSelected(selectedUserCode) {
    if (selectedUserCode === -1) return false;
    return true;
  }

  _computeSelectCaptionUserCodes(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  _selectedUserCodeChanged(selectedUserCode) {
    if (this._selectedUserCode === -1 || selectedUserCode === -1) return;
    const value = this.userCodes[selectedUserCode].value.code;
    this.setProperties({
      _selectedUserCodeValue: this._a2hex(value),
      _computedCodeOutput: `[${this._hex2a(this._a2hex(value))}]`,
    });
  }

  _computeUserCodeServiceData(selectedUserCodeValue, type) {
    if (this.selectedNode === -1 || !selectedUserCodeValue) return -1;
    let serviceData = null;
    let valueData = null;
    if (type === "Add") {
      valueData = this._hex2a(selectedUserCodeValue);
      this._computedCodeOutput = `[${valueData}]`;
      serviceData = {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        code_slot: this._selectedUserCode,
        usercode: valueData,
      };
    }
    if (type === "Delete") {
      serviceData = {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        code_slot: this._selectedUserCode,
      };
    }
    return serviceData;
  }

  async _refreshUserCodes(selectedNode) {
    this.setProperties({ _selectedUserCodeValue: "" });
    const userCodes = [];
    const userCodeData = await this.hass.callApi(
      "GET",
      `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`
    );
    Object.keys(userCodeData).forEach((key) => {
      userCodes.push({
        key,
        value: userCodeData[key],
      });
    });
    this.setProperties({ userCodes: userCodes });
    this._selectedUserCodeChanged(this._selectedUserCode);
  }

  _a2hex(str) {
    const arr = [];
    let output = "";
    for (let i = 0, l = str.length; i < l; i++) {
      const hex = Number(str.charCodeAt(i)).toString(16);
      if (hex === "0") {
        output = "00";
      } else {
        output = hex;
      }
      arr.push("\\x" + output);
    }
    return arr.join("");
  }

  _hex2a(hexx) {
    const hex = hexx.toString();
    const hexMod = hex.replace(/\\x/g, "");
    let str = "";
    for (let i = 0; i < hexMod.length; i += 2) {
      str += String.fromCharCode(parseInt(hexMod.substr(i, 2), 16));
    }
    return str;
  }

  _selectedNodeChanged() {
    if (this.selectedNode === -1) return;
    this.setProperties({ _selecteduserCode: -1 });
  }
}

customElements.define("zwave-usercodes", ZwaveUsercodes);


/***/ }),

/***/ "./src/panels/config/zwave/zwave-values.ts":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-values.ts ***!
  \*************************************************/
/*! exports provided: ZwaveValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZwaveValues", function() { return ZwaveValues; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");








let ZwaveValues = class ZwaveValues extends lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"] {
    constructor() {
        super(...arguments);
        this.values = [];
        this._selectedValue = -1;
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
      <div class="content">
        <ha-card
          .header=${this.hass.localize("ui.panel.config.zwave.values.header")}
        >
          <div class="device-picker">
            <paper-dropdown-menu
              .label=${this.hass.localize("ui.panel.config.zwave.common.value")}
              dynamic-align
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                .selected=${this._selectedValue}
              >
                ${this.values.map((item) => lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                    <paper-item>
                      ${this._computeCaption(item)}
                    </paper-item>
                  `)}
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        </ha-card>
      </div>
    `;
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"],
            lit_element__WEBPACK_IMPORTED_MODULE_4__["css"] `
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }
      `,
        ];
    }
    _computeCaption(item) {
        let out = `${item.value.label}`;
        out += ` (${this.hass.localize("ui.panel.config.zwave.common.instance")}:`;
        out += ` ${item.value.instance},`;
        out += ` ${this.hass.localize("ui.panel.config.zwave.common.index")}:`;
        out += ` ${item.value.index})`;
        return out;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], ZwaveValues.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], ZwaveValues.prototype, "values", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], ZwaveValues.prototype, "_selectedValue", void 0);
ZwaveValues = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("zwave-values")
], ZwaveValues);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXp3YXZlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQvYXBwLWhlYWRlci1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvaXNfcHdhLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZXNfc29ydF9ieV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3p3YXZlLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2hhLWFwcC1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtZm9ybS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS9oYS1jb25maWctendhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtZ3JvdXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS1uZXR3b3JrLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLW5vZGUtY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL3p3YXZlL3p3YXZlLW5vZGUtcHJvdGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy96d2F2ZS96d2F2ZS11c2VyY29kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvendhdmUvendhdmUtdmFsdWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge0FwcExheW91dEJlaGF2aW9yfSBmcm9tICcuLi9hcHAtbGF5b3V0LWJlaGF2aW9yL2FwcC1sYXlvdXQtYmVoYXZpb3IuanMnO1xuXG4vKipcbmFwcC1oZWFkZXItbGF5b3V0IGlzIGEgd3JhcHBlciBlbGVtZW50IHRoYXQgcG9zaXRpb25zIGFuIGFwcC1oZWFkZXIgYW5kIG90aGVyXG5jb250ZW50LiBUaGlzIGVsZW1lbnQgdXNlcyB0aGUgZG9jdW1lbnQgc2Nyb2xsIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYWxzb1xuZGVmaW5lIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cblxuVXNpbmcgdGhlIGRvY3VtZW50IHNjcm9sbDpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0PlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5Vc2luZyBhbiBvd24gc2Nyb2xsaW5nIHJlZ2lvbjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGhhcy1zY3JvbGxpbmctcmVnaW9uIHN0eWxlPVwid2lkdGg6IDMwMHB4OyBoZWlnaHQ6IDQwMHB4O1wiPlxuICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQgY29uZGVuc2VzIGVmZmVjdHM9XCJ3YXRlcmZhbGxcIj5cbiAgICA8YXBwLXRvb2xiYXI+XG4gICAgICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbiAgICA8L2FwcC10b29sYmFyPlxuICA8L2FwcC1oZWFkZXI+XG4gIDxkaXY+XG4gICAgbWFpbiBjb250ZW50XG4gIDwvZGl2PlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5BZGQgdGhlIGBmdWxsYmxlZWRgIGF0dHJpYnV0ZSB0byBhcHAtaGVhZGVyLWxheW91dCB0byBtYWtlIGl0IGZpdCB0aGUgc2l6ZSBvZlxuaXRzIGNvbnRhaW5lcjpcblxuYGBgaHRtbFxuPGFwcC1oZWFkZXItbGF5b3V0IGZ1bGxibGVlZD5cbiAuLi5cbjwvYXBwLWhlYWRlci1sYXlvdXQ+XG5gYGBcblxuQGdyb3VwIEFwcCBFbGVtZW50c1xuQGVsZW1lbnQgYXBwLWhlYWRlci1sYXlvdXRcbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2ltcGxlLmh0bWwgU2ltcGxlIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vc2Nyb2xsaW5nLXJlZ2lvbi5odG1sIFNjcm9sbGluZyBSZWdpb25cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vbXVzaWMuaHRtbCBNdXNpYyBEZW1vXG5AZGVtbyBhcHAtaGVhZGVyLWxheW91dC9kZW1vL2Zvb3Rlci5odG1sIEZvb3RlciBEZW1vXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2UgYXBwLWhlYWRlci1sYXlvdXQgdG8gaGF2ZSBpdHMgb3duIHN0YWNraW5nIGNvbnRleHQgc28gdGhhdCBpdHMgcGFyZW50IGNhblxuICAgICAgICAgKiBjb250cm9sIHRoZSBzdGFja2luZyBvZiBpdCByZWxhdGl2ZSB0byBvdGhlciBlbGVtZW50cyAoZS5nLiBhcHAtZHJhd2VyLWxheW91dCkuXG4gICAgICAgICAqIFRoaXMgY291bGQgYmUgZG9uZSB1c2luZyBcXGBpc29sYXRpb246IGlzb2xhdGVcXGAsIGJ1dCB0aGF0J3Mgbm90IHdlbGwgc3VwcG9ydGVkXG4gICAgICAgICAqIGFjcm9zcyBicm93c2Vycy5cbiAgICAgICAgICovXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cblxuICAgICAgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpeGVkLXRvcDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nIDo6c2xvdHRlZChbc2xvdD1oZWFkZXJdKSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxibGVlZF0pIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkgI3dyYXBwZXIsXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIC8qIENyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgaGVyZSBzbyB0aGF0IGFsbCBjaGlsZHJlbiBhcHBlYXIgYmVsb3cgdGhlIGhlYWRlci4gKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJpbml0aWFsaXppbmdcIj5cbiAgICAgIDxzbG90IGlkPVwiaGVhZGVyU2xvdFwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2FwcC1oZWFkZXItbGF5b3V0JyxcbiAgYmVoYXZpb3JzOiBbQXBwTGF5b3V0QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgY3VycmVudCBlbGVtZW50IHdpbGwgaGF2ZSBpdHMgb3duIHNjcm9sbGluZyByZWdpb24uXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgZG9jdW1lbnQgc2Nyb2xsIHRvIGNvbnRyb2wgdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICBoYXNTY3JvbGxpbmdSZWdpb246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsncmVzZXRMYXlvdXQoaXNBdHRhY2hlZCwgaGFzU2Nyb2xsaW5nUmVnaW9uKSddLFxuXG4gIC8qKlxuICAgKiBBIHJlZmVyZW5jZSB0byB0aGUgYXBwLWhlYWRlciBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJvcGVydHkgaGVhZGVyXG4gICAqL1xuICBnZXQgaGVhZGVyKCkge1xuICAgIHJldHVybiBkb20odGhpcy4kLmhlYWRlclNsb3QpLmdldERpc3RyaWJ1dGVkTm9kZXMoKVswXTtcbiAgfSxcblxuICBfdXBkYXRlTGF5b3V0U3RhdGVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVhZGVyID0gdGhpcy5oZWFkZXI7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIWhlYWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGluaXRpYWxpemluZyBjbGFzcywgd2hpY2ggc3RhdGljbHkgcG9zaXRpb25zIHRoZSBoZWFkZXIgYW5kXG4gICAgLy8gdGhlIGNvbnRlbnQgdW50aWwgdGhlIGhlaWdodCBvZiB0aGUgaGVhZGVyIGNhbiBiZSByZWFkLlxuICAgIHRoaXMuJC53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2luaXRpYWxpemluZycpO1xuICAgIC8vIFVwZGF0ZSBzY3JvbGwgdGFyZ2V0LlxuICAgIGhlYWRlci5zY3JvbGxUYXJnZXQgPSB0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbiA/XG4gICAgICAgIHRoaXMuJC5jb250ZW50Q29udGFpbmVyIDpcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAvLyBHZXQgaGVhZGVyIGhlaWdodCBoZXJlIHNvIHRoYXQgc3R5bGUgcmVhZHMgYXJlIGJhdGNoZWQgdG9nZXRoZXIgYmVmb3JlXG4gICAgLy8gc3R5bGUgd3JpdGVzIChpLmUuIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGJlbG93KS5cbiAgICB2YXIgaGVhZGVySGVpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodDtcbiAgICAvLyBVcGRhdGUgdGhlIGhlYWRlciBwb3NpdGlvbi5cbiAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIC0gcmVjdC5yaWdodDtcbiAgICAgICAgaGVhZGVyLnN0eWxlLmxlZnQgPSByZWN0LmxlZnQgKyAncHgnO1xuICAgICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSByaWdodE9mZnNldCArICdweCc7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgICAgaGVhZGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB0aGUgY29udGVudCBjb250YWluZXIgcG9zaXRpb24uXG4gICAgdmFyIGNvbnRhaW5lclN0eWxlID0gdGhpcy4kLmNvbnRlbnRDb250YWluZXIuc3R5bGU7XG4gICAgaWYgKGhlYWRlci5maXhlZCAmJiAhaGVhZGVyLmNvbmRlbnNlcyAmJiB0aGlzLmhhc1Njcm9sbGluZ1JlZ2lvbikge1xuICAgICAgLy8gSWYgdGhlIGhlYWRlciBzaXplIGRvZXMgbm90IGNoYW5nZSBhbmQgd2UncmUgdXNpbmcgYSBzY3JvbGxpbmcgcmVnaW9uLFxuICAgICAgLy8gZXhjbHVkZSB0aGUgaGVhZGVyIGFyZWEgZnJvbSB0aGUgc2Nyb2xsaW5nIHJlZ2lvbiBzbyB0aGF0IHRoZSBoZWFkZXJcbiAgICAgIC8vIGRvZXNuJ3Qgb3ZlcmxhcCB0aGUgc2Nyb2xsYmFyLlxuICAgICAgY29udGFpbmVyU3R5bGUubWFyZ2luVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLnBhZGRpbmdUb3AgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9IGhlYWRlckhlaWdodCArICdweCc7XG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSAnJztcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqIFJldHVybiBpZiB0aGUgZGlzcGxheW1vZGUgaXMgaW4gc3RhbmRhbG9uZSBtb2RlIChQV0EpLiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQd2EoKTogYm9vbGVhbiB7XG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihkaXNwbGF5LW1vZGU6IHN0YW5kYWxvbmUpXCIpLm1hdGNoZXM7XG59XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlRG9tYWluID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG59O1xuIiwiLyoqXG4gKiBTb3J0IGZ1bmN0aW9uIHRvIGhlbHAgc29ydCBzdGF0ZXMgYnkgbmFtZVxuICpcbiAqIFVzYWdlOlxuICogICBjb25zdCBzdGF0ZXMgPSBbc3RhdGUxLCBzdGF0ZTJdXG4gKiAgIHN0YXRlcy5zb3J0KHN0YXRlc3NvcnRTdGF0ZXNCeU5hbWUpO1xuICovXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuL2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5leHBvcnQgY29uc3Qgc29ydFN0YXRlc0J5TmFtZSA9IChlbnRpdHlBOiBIYXNzRW50aXR5LCBlbnRpdHlCOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IG5hbWVBID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlBKTtcbiAgY29uc3QgbmFtZUIgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUIpO1xuICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FsbFNlcnZpY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICBpZD1cInByb2dyZXNzXCJcbiAgICAgICAgcHJvZ3Jlc3M9XCJbW3Byb2dyZXNzXV1cIlxuICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICBpZiAodGhpcy5jb25maXJtYXRpb24gJiYgIXdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybWF0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25FcnJvcigpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmNsYXNzIEhhU2VydmljZURlc2NyaXB0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgW1tfZ2V0RGVzY3JpcHRpb24oaGFzcywgZG9tYWluLCBzZXJ2aWNlKV1dXG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgZG9tYWluOiBTdHJpbmcsXG4gICAgICBzZXJ2aWNlOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9nZXREZXNjcmlwdGlvbihoYXNzLCBkb21haW4sIHNlcnZpY2UpIHtcbiAgICB2YXIgZG9tYWluU2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gICAgaWYgKCFkb21haW5TZXJ2aWNlcykgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHNlcnZpY2VPYmplY3QgPSBkb21haW5TZXJ2aWNlc1tzZXJ2aWNlXTtcbiAgICBpZiAoIXNlcnZpY2VPYmplY3QpIHJldHVybiBcIlwiO1xuICAgIHJldHVybiBzZXJ2aWNlT2JqZWN0LmRlc2NyaXB0aW9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNlcnZpY2UtZGVzY3JpcHRpb25cIiwgSGFTZXJ2aWNlRGVzY3JpcHRpb24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFpXYXZlTmV0d29ya1N0YXR1cyB7XG4gIHN0YXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVWYWx1ZSB7XG4gIGtleTogbnVtYmVyO1xuICB2YWx1ZToge1xuICAgIGluZGV4OiBudW1iZXI7XG4gICAgaW5zdGFuY2U6IG51bWJlcjtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHBvbGxfaW50ZW5zaXR5OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVDb25maWdJdGVtIHtcbiAga2V5OiBudW1iZXI7XG4gIHZhbHVlOiB7XG4gICAgZGF0YTogYW55O1xuICAgIGRhdGFfaXRlbXM6IGFueVtdO1xuICAgIGhlbHA6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG1heDogbnVtYmVyO1xuICAgIG1pbjogbnVtYmVyO1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZUNvbmZpZ1NlcnZpY2VEYXRhIHtcbiAgbm9kZV9pZDogbnVtYmVyO1xuICBwYXJhbWV0ZXI6IG51bWJlcjtcbiAgdmFsdWU6IG51bWJlciB8IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBaV2F2ZU5vZGUge1xuICBhdHRyaWJ1dGVzOiBaV2F2ZUF0dHJpYnV0ZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWldhdmVBdHRyaWJ1dGVzIHtcbiAgbm9kZV9pZDogbnVtYmVyO1xuICB3YWtlX3VwX2ludGVydmFsPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9TVE9QUEVEID0gMDtcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX0ZBSUxFRCA9IDE7XG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9TVEFSVEVEID0gNTtcbmV4cG9ydCBjb25zdCBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRCA9IDc7XG5leHBvcnQgY29uc3QgWldBVkVfTkVUV09SS19TVEFURV9SRUFEWSA9IDEwO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hOZXR3b3JrU3RhdHVzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50XG4pOiBQcm9taXNlPFpXYXZlTmV0d29ya1N0YXR1cz4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiendhdmUvbmV0d29ya19zdGF0dXNcIixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFZhbHVlcyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBub2RlSWQ6IG51bWJlcikgPT5cbiAgaGFzcy5jYWxsQXBpPFpXYXZlVmFsdWVbXT4oXCJHRVRcIiwgYHp3YXZlL3ZhbHVlcy8ke25vZGVJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTm9kZUNvbmZpZyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBub2RlSWQ6IG51bWJlcikgPT5cbiAgaGFzcy5jYWxsQXBpPFpXYXZlQ29uZmlnSXRlbVtdPihcIkdFVFwiLCBgendhdmUvY29uZmlnLyR7bm9kZUlkfWApO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG5UaGlzIGNvZGUgaXMgY29waWVkIGZyb20gYXBwLWhlYWRlci1sYXlvdXQuXG4nZnVsbGJsZWVkJyBzdXBwb3J0IGlzIHJlbW92ZWQgYXMgSG9tZSBBc3Npc3N0YW50IGRvZXNuJ3QgdXNlIGl0LlxudHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgaXMgYWRkZWQuXG4qL1xuLypcbiAgRklYTUUocG9seW1lci1tb2R1bGl6ZXIpOiB0aGUgYWJvdmUgY29tbWVudHMgd2VyZSBleHRyYWN0ZWRcbiAgZnJvbSBIVE1MIGFuZCBtYXkgYmUgb3V0IG9mIHBsYWNlIGhlcmUuIFJldmlldyB0aGVtIGFuZFxuICB0aGVuIGRlbGV0ZSB0aGlzIGNvbW1lbnQhXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuY2xhc3MgSGFBcHBMYXlvdXQgZXh0ZW5kcyBjdXN0b21FbGVtZW50cy5nZXQoXCJhcHAtaGVhZGVyLWxheW91dFwiKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2UgYXBwLWhlYWRlci1sYXlvdXQgdG8gaGF2ZSBpdHMgb3duIHN0YWNraW5nIGNvbnRleHQgc28gdGhhdCBpdHMgcGFyZW50IGNhblxuICAgICAgICAgKiBjb250cm9sIHRoZSBzdGFja2luZyBvZiBpdCByZWxhdGl2ZSB0byBvdGhlciBlbGVtZW50cyAoZS5nLiBhcHAtZHJhd2VyLWxheW91dCkuXG4gICAgICAgICAqIFRoaXMgY291bGQgYmUgZG9uZSB1c2luZyBcXGBpc29sYXRpb246IGlzb2xhdGVcXGAsIGJ1dCB0aGF0J3Mgbm90IHdlbGwgc3VwcG9ydGVkXG4gICAgICAgICAqIGFjcm9zcyBicm93c2Vycy5cbiAgICAgICAgICovXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pXG4gICAgICAgICAgI3dyYXBwZXIuaW5pdGlhbGl6aW5nXG4gICAgICAgICAgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAvKiBDcmVhdGUgYSBzdGFja2luZyBjb250ZXh0IGhlcmUgc28gdGhhdCBhbGwgY2hpbGRyZW4gYXBwZWFyIGJlbG93IHRoZSBoZWFkZXIuICovXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgLyogVXNpbmcgJ3RyYW5zZm9ybScgd2lsbCBjYXVzZSAncG9zaXRpb246IGZpeGVkJyBlbGVtZW50cyB0byBiZWhhdmUgbGlrZVxuICAgICAgICAgICAncG9zaXRpb246IGFic29sdXRlJyByZWxhdGl2ZSB0byB0aGlzIGVsZW1lbnQuICovXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgcHJpbnQge1xuICAgICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHZpc2libGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiIGNsYXNzPVwiaW5pdGlhbGl6aW5nXCI+XG4gICAgICAgIDxzbG90IGlkPVwiaGVhZGVyU2xvdFwiIG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxzbG90IGlkPVwiZmFiXCIgbmFtZT1cImZhYlwiPjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWFwcC1sYXlvdXRcIiwgSGFBcHBMYXlvdXQpO1xuIiwiY29uc3QgZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmU7XCIpO1xuXG5kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJoYS1mb3JtLXN0eWxlXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleC0yO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgIC5mb3JtLWdyb3VwLnZlcnRpY2FsIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXZlcnRpY2FsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUuZm9ybS1jb250cm9sIHtcbiAgICAgICAgbWFyZ2luOiAtOXB4IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGRvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc2VydmljZS1kZXNjcmlwdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQgXCIuLi9oYS1mb3JtLXN0eWxlXCI7XG5pbXBvcnQgXCIuL3p3YXZlLWdyb3Vwc1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1sb2dcIjtcbmltcG9ydCBcIi4vendhdmUtbmV0d29ya1wiO1xuaW1wb3J0IFwiLi96d2F2ZS1ub2RlLWNvbmZpZ1wiO1xuaW1wb3J0IFwiLi96d2F2ZS11c2VyY29kZXNcIjtcbmltcG9ydCBcIi4vendhdmUtdmFsdWVzXCI7XG5pbXBvcnQgXCIuL3p3YXZlLW5vZGUtcHJvdGVjdGlvblwiO1xuXG5pbXBvcnQgeyBzb3J0U3RhdGVzQnlOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVzX3NvcnRfYnlfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNvbmZpZ1p3YXZlIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlIGhhLWZvcm0tc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbkhlYWRlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9kZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWxwLXRleHQge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudG9nZ2xlLWhlbHAtaWNvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtYXBwLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj1cIlwiPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ9XCJcIj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIl9iYWNrVGFwcGVkXCJcbiAgICAgICAgICAgID48L2hhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXY+XG4gICAgICAgICAgICA8ZGl2IG1haW4tdGl0bGU9XCJcIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnp3YXZlLmNhcHRpb24nKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2FwcC10b29sYmFyPlxuICAgICAgICA8L2FwcC1oZWFkZXI+XG5cbiAgICAgICAgPHp3YXZlLW5ldHdvcmtcbiAgICAgICAgICBpZD1cInp3YXZlLW5ldHdvcmtcIlxuICAgICAgICAgIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICA+PC96d2F2ZS1uZXR3b3JrPlxuXG4gICAgICAgIDwhLS0gTm9kZSBjYXJkIC0tPlxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT1cIltbaXNXaWRlXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbkhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPlotV2F2ZSBOb2RlIE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJ0b2dnbGVIZWxwXCJcbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6aGVscC1jaXJjbGVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgUnVuIFotV2F2ZSBjb21tYW5kcyB0aGF0IGFmZmVjdCBhIHNpbmdsZSBub2RlLiBQaWNrIGEgbm9kZSB0byBzZWUgYVxuICAgICAgICAgICAgbGlzdCBvZiBhdmFpbGFibGUgY29tbWFuZHMuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBkeW5hbWljLWFsaWduPVwiXCIgbGFiZWw9XCJOb2Rlc1wiIGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7c2VsZWN0ZWROb2RlfX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbm9kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+W1tjb21wdXRlU2VsZWN0Q2FwdGlvbihzdGF0ZSldXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0hlbHBdXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogZ3JleTsgcGFkZGluZzogMTJweFwiPlxuICAgICAgICAgICAgICAgICAgU2VsZWN0IG5vZGUgdG8gdmlldyBwZXItbm9kZSBvcHRpb25zXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9ub2RlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJlZnJlc2ggTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWZyZXNoX25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbbm9kZUZhaWxlZF1dXCI+XG4gICAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIEZhaWxlZCBOb2RlXG4gICAgICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZW1vdmVfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInJlcGxhY2VfZmFpbGVkX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUmVwbGFjZSBGYWlsZWQgTm9kZVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVwbGFjZV9mYWlsZWRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzaG93SGVscF1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicHJpbnRfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVOb2RlU2VydmljZURhdGEoc2VsZWN0ZWROb2RlKV1dXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQcmludCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInByaW50X25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJoZWFsX25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlSGVhbE5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEhlYWwgTm9kZVxuICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8aGEtc2VydmljZS1kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJoZWFsX25vZGVcIlxuICAgICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXNob3dIZWxwXV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJ0ZXN0X25vZGVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZS1kYXRhPVwiW1tjb21wdXRlTm9kZVNlcnZpY2VEYXRhKHNlbGVjdGVkTm9kZSldXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVGVzdCBOb2RlXG4gICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxoYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgc2VydmljZT1cInRlc3Rfbm9kZVwiXG4gICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaGEtc2VydmljZS1kZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9ub2RlTW9yZUluZm9cIlxuICAgICAgICAgICAgICAgICAgPk5vZGUgSW5mb3JtYXRpb248L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW50aXRpZXMgb2YgdGhpcyBub2RlXCJcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tzZWxlY3RlZEVudGl0eX19XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tlbnRpdGllc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbc3RhdGUuZW50aXR5X2lkXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1shY29tcHV0ZUlzRW50aXR5U2VsZWN0ZWQoc2VsZWN0ZWRFbnRpdHkpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9lbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW2NvbXB1dGVSZWZyZXNoRW50aXR5U2VydmljZURhdGEoc2VsZWN0ZWRFbnRpdHkpXV1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBSZWZyZXNoIEVudGl0eVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVmcmVzaF9lbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2hvd0hlbHBdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2hhLXNlcnZpY2UtZGVzY3JpcHRpb24+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9lbnRpdHlNb3JlSW5mb1wiXG4gICAgICAgICAgICAgICAgICAgID5FbnRpdHkgSW5mb3JtYXRpb248L213Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJ7e2VudGl0eUlnbm9yZWR9fVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRXhjbHVkZSB0aGlzIGVudGl0eSBmcm9tIOeJp+WFu+eKrFxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cInt7ZW50aXR5SWdub3JlZH19XCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQb2xsaW5nIGludGVuc2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2VudGl0eVBvbGxpbmdJbnRlbnNpdHl9fVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInNldF9wb2xsX2ludGVuc2l0eVwiXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbY29tcHV0ZVBvbGxJbnRlbnNpdHlTZXJ2aWNlRGF0YShlbnRpdHlQb2xsaW5nSW50ZW5zaXR5KV1dXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2hhLWNhcmQ+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY29tcHV0ZUlzTm9kZVNlbGVjdGVkKHNlbGVjdGVkTm9kZSldXVwiPlxuICAgICAgICAgICAgPCEtLSBWYWx1ZSBjYXJkIC0tPlxuICAgICAgICAgICAgPHp3YXZlLXZhbHVlc1xuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBub2Rlcz1cIltbbm9kZXNdXVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkLW5vZGU9XCJbW3NlbGVjdGVkTm9kZV1dXCJcbiAgICAgICAgICAgICAgdmFsdWVzPVwiW1t2YWx1ZXNdXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS12YWx1ZXM+XG5cbiAgICAgICAgICAgIDwhLS0gR3JvdXAgY2FyZCAtLT5cbiAgICAgICAgICAgIDx6d2F2ZS1ncm91cHNcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICAgIGdyb3Vwcz1cIltbZ3JvdXBzXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtZ3JvdXBzPlxuXG4gICAgICAgICAgICA8IS0tIENvbmZpZyBjYXJkIC0tPlxuICAgICAgICAgICAgPHp3YXZlLW5vZGUtY29uZmlnXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQtbm9kZT1cIltbc2VsZWN0ZWROb2RlXV1cIlxuICAgICAgICAgICAgICBjb25maWc9XCJbW2NvbmZpZ11dXCJcbiAgICAgICAgICAgID48L3p3YXZlLW5vZGUtY29uZmlnPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8IS0tIFByb3RlY3Rpb24gY2FyZCAtLT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cInt7X3Byb3RlY3Rpb25Ob2RlfX1cIj5cbiAgICAgICAgICAgIDx6d2F2ZS1ub2RlLXByb3RlY3Rpb25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbm9kZXM9XCJbW25vZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICAgIHByb3RlY3Rpb249XCJbW19wcm90ZWN0aW9uXV1cIlxuICAgICAgICAgICAgPjwvendhdmUtbm9kZS1wcm90ZWN0aW9uPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8IS0tIFVzZXIgQ29kZXMgLS0+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJ7e2hhc05vZGVVc2VyQ29kZXN9fVwiPlxuICAgICAgICAgICAgPHp3YXZlLXVzZXJjb2Rlc1xuICAgICAgICAgICAgICBpZD1cInp3YXZlLXVzZXJjb2Rlc1wiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIG5vZGVzPVwiW1tub2Rlc11dXCJcbiAgICAgICAgICAgICAgdXNlci1jb2Rlcz1cIltbdXNlckNvZGVzXV1cIlxuICAgICAgICAgICAgICBzZWxlY3RlZC1ub2RlPVwiW1tzZWxlY3RlZE5vZGVdXVwiXG4gICAgICAgICAgICA+PC96d2F2ZS11c2VyY29kZXM+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8IS0tIE96dyBsb2cgLS0+XG4gICAgICAgIDxvenctbG9nIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCIgaGFzcz1cIltbaGFzc11dXCI+PC9venctbG9nPlxuICAgICAgPC9oYS1hcHAtbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuXG4gICAgICBub2Rlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZU5vZGVzKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiBcInNlbGVjdGVkTm9kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIG5vZGVGYWlsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW10sXG4gICAgICB9LFxuXG4gICAgICBlbnRpdGllczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUVudGl0aWVzKHNlbGVjdGVkTm9kZSlcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkRW50aXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWxlY3RlZEVudGl0eUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHZhbHVlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgIH0sXG5cbiAgICAgIGdyb3Vwczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgIH0sXG5cbiAgICAgIHVzZXJDb2Rlczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgaGFzTm9kZVVzZXJDb2Rlczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBzaG93SGVscDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlJZ25vcmVkOiBCb29sZWFuLFxuXG4gICAgICBlbnRpdHlQb2xsaW5nSW50ZW5zaXR5OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25Ob2RlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHNlcnZpY2VDYWxsZWQoZXYpIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MgJiYgZXYuZGV0YWlsLnNlcnZpY2UgPT09IFwic2V0X3BvbGxfaW50ZW5zaXR5XCIpIHtcbiAgICAgIHRoaXMuX3NhdmVFbnRpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlTm9kZXMoaGFzcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcylcbiAgICAgIC5tYXAoKGtleSkgPT4gaGFzcy5zdGF0ZXNba2V5XSlcbiAgICAgIC5maWx0ZXIoKGVudCkgPT4gZW50LmVudGl0eV9pZC5tYXRjaChcInp3YXZlWy5dXCIpKVxuICAgICAgLnNvcnQoc29ydFN0YXRlc0J5TmFtZSk7XG4gIH1cblxuICBjb21wdXRlRW50aXRpZXMoc2VsZWN0ZWROb2RlKSB7XG4gICAgaWYgKCF0aGlzLm5vZGVzIHx8IHNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybiAtMTtcbiAgICBjb25zdCBub2RlaWQgPSB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQ7XG4gICAgY29uc3QgaGFzcyA9IHRoaXMuaGFzcztcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYXNzLnN0YXRlcylcbiAgICAgIC5tYXAoKGtleSkgPT4gaGFzcy5zdGF0ZXNba2V5XSlcbiAgICAgIC5maWx0ZXIoKGVudCkgPT4ge1xuICAgICAgICBpZiAoZW50LmF0dHJpYnV0ZXMubm9kZV9pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgIWVudC5hdHRyaWJ1dGVzLmhpZGRlbiAmJlxuICAgICAgICAgIFwibm9kZV9pZFwiIGluIGVudC5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgZW50LmF0dHJpYnV0ZXMubm9kZV9pZCA9PT0gbm9kZWlkICYmXG4gICAgICAgICAgIWVudC5lbnRpdHlfaWQubWF0Y2goXCJ6d2F2ZVsuXVwiKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KHNvcnRTdGF0ZXNCeU5hbWUpO1xuICB9XG5cbiAgc2VsZWN0ZWROb2RlQ2hhbmdlZChzZWxlY3RlZE5vZGUpIHtcbiAgICBpZiAoc2VsZWN0ZWROb2RlID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2VsZWN0ZWRFbnRpdHkgPSAtMTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiR0VUXCIsXG4gICAgICAgIGB6d2F2ZS9jb25maWcvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChjb25maWdzKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5fb2JqVG9BcnJheShjb25maWdzKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL3ZhbHVlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuX29ialRvQXJyYXkodmFsdWVzKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL2dyb3Vwcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICAgKVxuICAgICAgLnRoZW4oKGdyb3VwcykgPT4ge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMuX29ialRvQXJyYXkoZ3JvdXBzKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5oYXNOb2RlVXNlckNvZGVzID0gZmFsc2U7XG4gICAgdGhpcy5ub3RpZnlQYXRoKFwiaGFzTm9kZVVzZXJDb2Rlc1wiKTtcbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsQXBpKFxuICAgICAgICBcIkdFVFwiLFxuICAgICAgICBgendhdmUvdXNlcmNvZGVzLyR7dGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigodXNlcmNvZGVzKSA9PiB7XG4gICAgICAgIHRoaXMudXNlckNvZGVzID0gdGhpcy5fb2JqVG9BcnJheSh1c2VyY29kZXMpO1xuICAgICAgICB0aGlzLmhhc05vZGVVc2VyQ29kZXMgPSB0aGlzLnVzZXJDb2Rlcy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLm5vdGlmeVBhdGgoXCJoYXNOb2RlVXNlckNvZGVzXCIpO1xuICAgICAgfSk7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL3Byb3RlY3Rpb24vJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChwcm90ZWN0aW9ucykgPT4ge1xuICAgICAgICB0aGlzLl9wcm90ZWN0aW9uID0gdGhpcy5fb2JqVG9BcnJheShwcm90ZWN0aW9ucyk7XG4gICAgICAgIGlmICh0aGlzLl9wcm90ZWN0aW9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3Byb3RlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX3Byb3RlY3Rpb25Ob2RlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLm5vZGVGYWlsZWQgPSB0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5pc19mYWlsZWQ7XG4gIH1cblxuICBzZWxlY3RlZEVudGl0eUNoYW5nZWQoc2VsZWN0ZWRFbnRpdHkpIHtcbiAgICBpZiAoc2VsZWN0ZWRFbnRpdHkgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYHp3YXZlL3ZhbHVlcy8ke3RoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZH1gXG4gICAgICApXG4gICAgICAudGhlbigodmFsdWVzKSA9PiB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy5fb2JqVG9BcnJheSh2YWx1ZXMpO1xuICAgICAgfSk7XG5cbiAgICBjb25zdCB2YWx1ZUlkID0gdGhpcy5lbnRpdGllc1tzZWxlY3RlZEVudGl0eV0uYXR0cmlidXRlcy52YWx1ZV9pZDtcbiAgICBjb25zdCB2YWx1ZURhdGEgPSB0aGlzLnZhbHVlcy5maW5kKChvYmopID0+IG9iai5rZXkgPT09IHZhbHVlSWQpO1xuICAgIGNvbnN0IHZhbHVlSW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKHZhbHVlRGF0YSk7XG4gICAgdGhpcy5oYXNzXG4gICAgICAuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgYGNvbmZpZy96d2F2ZS9kZXZpY2VfY29uZmlnLyR7dGhpcy5lbnRpdGllc1tzZWxlY3RlZEVudGl0eV0uZW50aXR5X2lkfWBcbiAgICAgIClcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgICAgZW50aXR5SWdub3JlZDogZGF0YS5pZ25vcmVkIHx8IGZhbHNlLFxuICAgICAgICAgIGVudGl0eVBvbGxpbmdJbnRlbnNpdHk6IHRoaXMudmFsdWVzW3ZhbHVlSW5kZXhdLnZhbHVlLnBvbGxfaW50ZW5zaXR5LFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgIGVudGl0eUlnbm9yZWQ6IGZhbHNlLFxuICAgICAgICAgIGVudGl0eVBvbGxpbmdJbnRlbnNpdHk6IHRoaXMudmFsdWVzW3ZhbHVlSW5kZXhdLnZhbHVlLnBvbGxfaW50ZW5zaXR5LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgY29tcHV0ZVNlbGVjdENhcHRpb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikgK1xuICAgICAgXCIgKE5vZGU6XCIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5ub2RlX2lkICtcbiAgICAgIFwiIFwiICtcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMucXVlcnlfc3RhZ2UgK1xuICAgICAgXCIpXCJcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZVNlbGVjdENhcHRpb25FbnQoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSArIFwiLlwiICsgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlSXNOb2RlU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXMgJiYgdGhpcy5zZWxlY3RlZE5vZGUgIT09IC0xO1xuICB9XG5cbiAgY29tcHV0ZUlzRW50aXR5U2VsZWN0ZWQoc2VsZWN0ZWRFbnRpdHkpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRFbnRpdHkgPT09IC0xO1xuICB9XG5cbiAgY29tcHV0ZU5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpIHtcbiAgICByZXR1cm4geyBub2RlX2lkOiB0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkIH07XG4gIH1cblxuICBjb21wdXRlSGVhbE5vZGVTZXJ2aWNlRGF0YShzZWxlY3RlZE5vZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIHJldHVybl9yb3V0ZXM6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVSZWZyZXNoRW50aXR5U2VydmljZURhdGEoc2VsZWN0ZWRFbnRpdHkpIHtcbiAgICBpZiAoc2VsZWN0ZWRFbnRpdHkgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHsgZW50aXR5X2lkOiB0aGlzLmVudGl0aWVzW3NlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWQgfTtcbiAgfVxuXG4gIGNvbXB1dGVQb2xsSW50ZW5zaXR5U2VydmljZURhdGEoZW50aXR5UG9sbGluZ0ludGVuc2l0eSkge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xIHx8IHRoaXMuc2VsZWN0ZWRFbnRpdHkgPT09IC0xKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIHZhbHVlX2lkOiB0aGlzLmVudGl0aWVzW3RoaXMuc2VsZWN0ZWRFbnRpdHldLmF0dHJpYnV0ZXMudmFsdWVfaWQsXG4gICAgICBwb2xsX2ludGVuc2l0eTogcGFyc2VJbnQoZW50aXR5UG9sbGluZ0ludGVuc2l0eSksXG4gICAgfTtcbiAgfVxuXG4gIF9ub2RlTW9yZUluZm8oKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIF9lbnRpdHlNb3JlSW5mbygpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogdGhpcy5lbnRpdGllc1t0aGlzLnNlbGVjdGVkRW50aXR5XS5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBfc2F2ZUVudGl0eSgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaWdub3JlZDogdGhpcy5lbnRpdHlJZ25vcmVkLFxuICAgICAgcG9sbGluZ19pbnRlbnNpdHk6IHBhcnNlSW50KHRoaXMuZW50aXR5UG9sbGluZ0ludGVuc2l0eSksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIlBPU1RcIixcbiAgICAgIGBjb25maWcvendhdmUvZGV2aWNlX2NvbmZpZy8ke1xuICAgICAgICB0aGlzLmVudGl0aWVzW3RoaXMuc2VsZWN0ZWRFbnRpdHldLmVudGl0eV9pZFxuICAgICAgfWAsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgfVxuXG4gIHRvZ2dsZUhlbHAoKSB7XG4gICAgdGhpcy5zaG93SGVscCA9ICF0aGlzLnNob3dIZWxwO1xuICB9XG5cbiAgX29ialRvQXJyYXkob2JqKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IG9ialtrZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgX2JhY2tUYXBwZWQoKSB7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXp3YXZlXCIsIEhhQ29uZmlnWndhdmUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmNsYXNzIFp3YXZlR3JvdXBzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIiBoZWFkZXI9XCJOb2RlIGdyb3VwIGFzc29jaWF0aW9uc1wiPlxuICAgICAgICA8IS0tIFRPRE8gbWFrZSBhcGkgZm9yIGdldHRpbmcgZ3JvdXBzIGFuZCBtZW1iZXJzIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51IGxhYmVsPVwiR3JvdXBcIiBkeW5hbWljLWFsaWduPVwiXCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRHcm91cH19XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tncm91cHNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW19jb21wdXRlU2VsZWN0Q2FwdGlvbkdyb3VwKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29tcHV0ZUlzR3JvdXBTZWxlY3RlZChfc2VsZWN0ZWRHcm91cCldXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIk5vZGUgdG8gY29udHJvbFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkVGFyZ2V0Tm9kZX19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbm9kZXNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPltbX2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlKV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuPk90aGVyIE5vZGVzIGluIHRoaXMgZ3JvdXA6PC9zcGFuPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfb3RoZXJHcm91cE5vZGVzXV1cIiBhcz1cInN0YXRlXCI+XG4gICAgICAgICAgICAgIDxkaXY+W1tzdGF0ZV1dPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuPk1heCBBc3NvY2lhdGlvbnM6PC9zcGFuPiA8c3Bhbj5bW19tYXhBc3NvY2lhdGlvbnNdXTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9XCJbW19jb21wdXRlSXNUYXJnZXROb2RlU2VsZWN0ZWQoX3NlbGVjdGVkVGFyZ2V0Tm9kZSldXVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9ub0Fzc29jaWF0aW9uc0xlZnRdXVwiPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjaGFuZ2VfYXNzb2NpYXRpb25cIlxuICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbX2FkZEFzc29jU2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBZGQgVG8gR3JvdXBcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVRhcmdldEluR3JvdXAoX3NlbGVjdGVkR3JvdXAsIF9zZWxlY3RlZFRhcmdldE5vZGUpXV1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJjaGFuZ2VfYXNzb2NpYXRpb25cIlxuICAgICAgICAgICAgICAgIHNlcnZpY2UtZGF0YT1cIltbX3JlbW92ZUFzc29jU2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZW1vdmUgRnJvbSBHcm91cFxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwXV1cIj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwiY2hhbmdlX2Fzc29jaWF0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9XCJbW19yZW1vdmVCcm9hZGNhc3ROb2RlU2VydmljZURhdGFdXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZW1vdmUgQnJvYWRjYXN0XG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBub2RlczogQXJyYXksXG5cbiAgICAgIGdyb3VwczogQXJyYXksXG5cbiAgICAgIHNlbGVjdGVkTm9kZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcIl9zZWxlY3RlZE5vZGVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRUYXJnZXROb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWRUYXJnZXROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgX3NlbGVjdGVkR3JvdXA6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBfb3RoZXJHcm91cE5vZGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlT3RoZXJHcm91cE5vZGVzKF9zZWxlY3RlZEdyb3VwKVwiLFxuICAgICAgfSxcblxuICAgICAgX21heEFzc29jaWF0aW9uczoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZU1heEFzc29jaWF0aW9ucyhfc2VsZWN0ZWRHcm91cClcIixcbiAgICAgIH0sXG5cbiAgICAgIF9ub0Fzc29jaWF0aW9uc0xlZnQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQXNzb2NpYXRpb25zTGVmdChfc2VsZWN0ZWRHcm91cClcIixcbiAgICAgIH0sXG5cbiAgICAgIF9hZGRBc3NvY1NlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBfcmVtb3ZlQXNzb2NTZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3JlbW92ZUJyb2FkY2FzdE5vZGVTZXJ2aWNlRGF0YToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcIl9zZWxlY3RlZEdyb3VwQ2hhbmdlZChncm91cHMsIF9zZWxlY3RlZEdyb3VwKVwiXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCAoZXYpID0+XG4gICAgICB0aGlzLnNlcnZpY2VDYWxsZWQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIHNlcnZpY2VDYWxsZWQoZXYpIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoR3JvdXBzKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlQXNzb2NpYXRpb25zTGVmdChzZWxlY3RlZEdyb3VwKSB7XG4gICAgaWYgKHNlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5fbWF4QXNzb2NpYXRpb25zID09PSB0aGlzLl9vdGhlckdyb3VwTm9kZXMubGVuZ3RoO1xuICB9XG5cbiAgX2NvbXB1dGVNYXhBc3NvY2lhdGlvbnMoc2VsZWN0ZWRHcm91cCkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIGNvbnN0IG1heEFzc29jaWF0aW9ucyA9IHRoaXMuZ3JvdXBzW3NlbGVjdGVkR3JvdXBdLnZhbHVlLm1heF9hc3NvY2lhdGlvbnM7XG4gICAgaWYgKCFtYXhBc3NvY2lhdGlvbnMpIHJldHVybiBcIk5vbmVcIjtcbiAgICByZXR1cm4gbWF4QXNzb2NpYXRpb25zO1xuICB9XG5cbiAgX2NvbXB1dGVPdGhlckdyb3VwTm9kZXMoc2VsZWN0ZWRHcm91cCkge1xuICAgIGlmIChzZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiBmYWxzZSB9KTtcbiAgICBjb25zdCBhc3NvY2lhdGlvbnMgPSBPYmplY3QudmFsdWVzKFxuICAgICAgdGhpcy5ncm91cHNbc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25faW5zdGFuY2VzXG4gICAgKTtcbiAgICBpZiAoIWFzc29jaWF0aW9ucy5sZW5ndGgpIHJldHVybiBbXCJOb25lXCJdO1xuICAgIHJldHVybiBhc3NvY2lhdGlvbnMubWFwKChhc3NvYykgPT4ge1xuICAgICAgaWYgKCFhc3NvYy5sZW5ndGggfHwgYXNzb2MubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHJldHVybiBgVW5rbm93biBOb2RlOiAke2Fzc29jfWA7XG4gICAgICB9XG4gICAgICBjb25zdCBpZCA9IGFzc29jWzBdO1xuICAgICAgY29uc3QgaW5zdGFuY2UgPSBhc3NvY1sxXTtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzLmZpbmQoKG4pID0+IG4uYXR0cmlidXRlcy5ub2RlX2lkID09PSBpZCk7XG4gICAgICBpZiAoaWQgPT09IDI1NSkge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICAgIF9pc0Jyb2FkY2FzdE5vZGVJbkdyb3VwOiB0cnVlLFxuICAgICAgICAgIF9yZW1vdmVCcm9hZGNhc3ROb2RlU2VydmljZURhdGE6IHtcbiAgICAgICAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgICAgICAgIGFzc29jaWF0aW9uOiBcInJlbW92ZVwiLFxuICAgICAgICAgICAgdGFyZ2V0X25vZGVfaWQ6IDI1NSxcbiAgICAgICAgICAgIGdyb3VwOiB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS5rZXksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGBVbmtub3duIE5vZGUgKCR7aWR9OiAoJHtpbnN0YW5jZX0gPyAke2lkfS4ke2luc3RhbmNlfSA6ICR7aWR9KSlgO1xuICAgICAgfVxuICAgICAgbGV0IGNhcHRpb24gPSB0aGlzLl9jb21wdXRlU2VsZWN0Q2FwdGlvbihub2RlKTtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBjYXB0aW9uICs9IGAvIEluc3RhbmNlOiAke2luc3RhbmNlfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FwdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlVGFyZ2V0SW5Hcm91cChzZWxlY3RlZEdyb3VwLCBzZWxlY3RlZFRhcmdldE5vZGUpIHtcbiAgICBpZiAoc2VsZWN0ZWRHcm91cCA9PT0gLTEgfHwgc2VsZWN0ZWRUYXJnZXROb2RlID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGFzc29jaWF0aW9ucyA9IE9iamVjdC52YWx1ZXMoXG4gICAgICB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS52YWx1ZS5hc3NvY2lhdGlvbnNcbiAgICApO1xuICAgIGlmICghYXNzb2NpYXRpb25zLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBhc3NvY2lhdGlvbnMuaW5kZXhPZihcbiAgICAgICAgdGhpcy5ub2Rlc1tzZWxlY3RlZFRhcmdldE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZFxuICAgICAgKSAhPT0gLTFcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTZWxlY3RDYXB0aW9uKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGAke2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopfVxuICAgICAgKE5vZGU6ICR7c3RhdGVPYmouYXR0cmlidXRlcy5ub2RlX2lkfVxuICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnF1ZXJ5X3N0YWdlfSlgO1xuICB9XG5cbiAgX2NvbXB1dGVTZWxlY3RDYXB0aW9uR3JvdXAoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gYCR7c3RhdGVPYmoua2V5fTogJHtzdGF0ZU9iai52YWx1ZS5sYWJlbH1gO1xuICB9XG5cbiAgX2NvbXB1dGVJc1RhcmdldE5vZGVTZWxlY3RlZChzZWxlY3RlZFRhcmdldE5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcyAmJiBzZWxlY3RlZFRhcmdldE5vZGUgIT09IC0xO1xuICB9XG5cbiAgX2NvbXB1dGVJc0dyb3VwU2VsZWN0ZWQoc2VsZWN0ZWRHcm91cCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzICYmIHRoaXMuc2VsZWN0ZWROb2RlICE9PSAtMSAmJiBzZWxlY3RlZEdyb3VwICE9PSAtMTtcbiAgfVxuXG4gIF9jb21wdXRlQXNzb2NTZXJ2aWNlRGF0YShzZWxlY3RlZEdyb3VwLCB0eXBlKSB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuZ3JvdXBzID09PSAtMSB8fFxuICAgICAgc2VsZWN0ZWRHcm91cCA9PT0gLTEgfHxcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fFxuICAgICAgdGhpcy5fc2VsZWN0ZWRUYXJnZXROb2RlID09PSAtMVxuICAgIClcbiAgICAgIHJldHVybiAtMTtcbiAgICByZXR1cm4ge1xuICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgYXNzb2NpYXRpb246IHR5cGUsXG4gICAgICB0YXJnZXRfbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLl9zZWxlY3RlZFRhcmdldE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIGdyb3VwOiB0aGlzLmdyb3Vwc1tzZWxlY3RlZEdyb3VwXS5rZXksXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoR3JvdXBzKHNlbGVjdGVkTm9kZSkge1xuICAgIGNvbnN0IGdyb3VwRGF0YSA9IFtdO1xuICAgIGNvbnN0IGdyb3VwcyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIGB6d2F2ZS9ncm91cHMvJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBncm91cERhdGEucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IGdyb3Vwc1trZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIGdyb3VwczogZ3JvdXBEYXRhLFxuICAgICAgX21heEFzc29jaWF0aW9uczogZ3JvdXBEYXRhW3RoaXMuX3NlbGVjdGVkR3JvdXBdLnZhbHVlLm1heF9hc3NvY2lhdGlvbnMsXG4gICAgICBfb3RoZXJHcm91cE5vZGVzOiBPYmplY3QudmFsdWVzKFxuICAgICAgICBncm91cERhdGFbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25zXG4gICAgICApLFxuICAgICAgX2lzQnJvYWRjYXN0Tm9kZUluR3JvdXA6IGZhbHNlLFxuICAgIH0pO1xuICAgIGNvbnN0IG9sZEdyb3VwID0gdGhpcy5fc2VsZWN0ZWRHcm91cDtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRHcm91cDogLTEgfSk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX3NlbGVjdGVkR3JvdXA6IG9sZEdyb3VwIH0pO1xuICB9XG5cbiAgX3NlbGVjdGVkR3JvdXBDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZEdyb3VwID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICBfbWF4QXNzb2NpYXRpb25zOiB0aGlzLmdyb3Vwc1t0aGlzLl9zZWxlY3RlZEdyb3VwXS52YWx1ZS5tYXhfYXNzb2NpYXRpb25zLFxuICAgICAgX290aGVyR3JvdXBOb2RlczogT2JqZWN0LnZhbHVlcyhcbiAgICAgICAgdGhpcy5ncm91cHNbdGhpcy5fc2VsZWN0ZWRHcm91cF0udmFsdWUuYXNzb2NpYXRpb25zXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdGVkVGFyZ2V0Tm9kZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkR3JvdXAgPT09IC0xKSByZXR1cm47XG4gICAgaWYgKFxuICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEluR3JvdXAodGhpcy5fc2VsZWN0ZWRHcm91cCwgdGhpcy5fc2VsZWN0ZWRUYXJnZXROb2RlKVxuICAgICkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgX3JlbW92ZUFzc29jU2VydmljZURhdGE6IHRoaXMuX2NvbXB1dGVBc3NvY1NlcnZpY2VEYXRhKFxuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkR3JvdXAsXG4gICAgICAgICAgXCJyZW1vdmVcIlxuICAgICAgICApLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9hZGRBc3NvY1NlcnZpY2VEYXRhOiB0aGlzLl9jb21wdXRlQXNzb2NTZXJ2aWNlRGF0YShcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZEdyb3VwLFxuICAgICAgICAgIFwiYWRkXCJcbiAgICAgICAgKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RlZE5vZGVDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEpIHJldHVybjtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyBfc2VsZWN0ZWRUYXJnZXROb2RlOiAtMSwgX3NlbGVjdGVkR3JvdXA6IC0xIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInp3YXZlLWdyb3Vwc1wiLCBad2F2ZUdyb3Vwcyk7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IGlzUHdhIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX3B3YVwiO1xuXG5pbXBvcnQgXCIuLi9oYS1jb25maWctc2VjdGlvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5cbmxldCByZWdpc3RlcmVkRGlhbG9nID0gZmFsc2U7XG5cbmNsYXNzIE96d0xvZyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuICAgIDxoYS1jb25maWctc2VjdGlvbiBpcy13aWRlPVwiW1tpc1dpZGVdXVwiPlxuICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPlxuICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuendhdmUub3p3X2xvZy5oZWFkZXInKV1dXG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy56d2F2ZS5vendfbG9nLmludHJvZHVjdGlvbicpXV1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgIDxwYXBlci1pbnB1dCBsYWJlbD1cIk51bWJlciBvZiBsYXN0IGxvZyBsaW5lcy5cIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIG1heD1cIjEwMDBcIiBzdGVwPVwiMTBcIiB2YWx1ZT1cInt7bnVtTG9nTGluZXN9fVwiPlxuICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkPVwidHJ1ZVwiIG9uLWNsaWNrPVwiX29wZW5Mb2dXaW5kb3dcIj5Mb2FkPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cInRydWVcIiBvbi1jbGljaz1cIl90YWlsTG9nXCIgZGlzYWJsZWQ9XCJ7e19jb21wbGV0ZUxvZ319XCI+VGFpbDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX296d0xvZ3M6IFN0cmluZyxcblxuICAgICAgX2NvbXBsZXRlTG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgbnVtTG9nTGluZXM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX2lzQ29tcGxldGVMb2dcIixcbiAgICAgIH0sXG5cbiAgICAgIF9pbnRlcnZhbElkOiBTdHJpbmcsXG5cbiAgICAgIHRhaWw6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIF90YWlsTG9nKCkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IHRhaWw6IHRydWUgfSk7XG4gICAgY29uc3Qgb3p3V2luZG93ID0gYXdhaXQgdGhpcy5fb3BlbkxvZ1dpbmRvdygpO1xuICAgIGlmICghaXNQd2EoKSkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgICAgX2ludGVydmFsSWQ6IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZWZyZXNoTG9nKG96d1dpbmRvdyk7XG4gICAgICAgIH0sIDE1MDApLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgX29wZW5Mb2dXaW5kb3coKSB7XG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsQXBpKFxuICAgICAgXCJHRVRcIixcbiAgICAgIFwiendhdmUvb3p3bG9nP2xpbmVzPVwiICsgdGhpcy5udW1Mb2dMaW5lc1xuICAgICk7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX296d0xvZ3M6IGluZm8gfSk7XG4gICAgaWYgKGlzUHdhKCkpIHtcbiAgICAgIHRoaXMuX3Nob3dPendsb2dEaWFsb2coKTtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgY29uc3Qgb3p3V2luZG93ID0gb3BlbihcIlwiLCBcIm96d0xvZ1wiLCBcInRvb2xiYXJcIik7XG4gICAgb3p3V2luZG93LmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmU+JHt0aGlzLl9vendMb2dzfTwvcHJlPmA7XG4gICAgcmV0dXJuIG96d1dpbmRvdztcbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoTG9nKG96d1dpbmRvdykge1xuICAgIGlmIChvendXaW5kb3cuY2xvc2VkID09PSB0cnVlKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsSWQpO1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX2ludGVydmFsSWQ6IG51bGwgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZm8gPSBhd2FpdCB0aGlzLmhhc3MuY2FsbEFwaShcbiAgICAgICAgXCJHRVRcIixcbiAgICAgICAgXCJ6d2F2ZS9vendsb2c/bGluZXM9XCIgKyB0aGlzLm51bUxvZ0xpbmVzXG4gICAgICApO1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgX296d0xvZ3M6IGluZm8gfSk7XG4gICAgICBvendXaW5kb3cuZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZT4ke3RoaXMuX296d0xvZ3N9PC9wcmU+YDtcbiAgICB9XG4gIH1cblxuICBfaXNDb21wbGV0ZUxvZygpIHtcbiAgICBpZiAodGhpcy5udW1Mb2dMaW5lcyAhPT0gXCIwXCIpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9jb21wbGV0ZUxvZzogZmFsc2UgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9jb21wbGV0ZUxvZzogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghcmVnaXN0ZXJlZERpYWxvZykge1xuICAgICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmZpcmUoXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgICAgICBkaWFsb2dTaG93RXZlbnQ6IFwic2hvdy1vendsb2ctZGlhbG9nXCIsXG4gICAgICAgIGRpYWxvZ1RhZzogXCJ6d2F2ZS1sb2ctZGlhbG9nXCIsXG4gICAgICAgIGRpYWxvZ0ltcG9ydDogKCkgPT5cbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ6d2F2ZS1sb2ctZGlhbG9nXCIgKi8gXCIuL3p3YXZlLWxvZy1kaWFsb2dcIiksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfc2hvd096d2xvZ0RpYWxvZygpIHtcbiAgICB0aGlzLmZpcmUoXCJzaG93LW96d2xvZy1kaWFsb2dcIiwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgX251bUxvZ0xpbmVzOiB0aGlzLm51bUxvZ0xpbmVzLFxuICAgICAgX296d0xvZzogdGhpcy5fb3p3TG9ncyxcbiAgICAgIF90YWlsOiB0aGlzLnRhaWwsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4gdGhpcy5fZGlhbG9nQ2xvc2VkKCksXG4gICAgfSk7XG4gIH1cblxuICBfZGlhbG9nQ2xvc2VkKCkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICB0YWlsOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwib3p3LWxvZ1wiLCBPendMb2cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBmZXRjaE5ldHdvcmtTdGF0dXMsXG4gIFpXYXZlTmV0d29ya1N0YXR1cyxcbiAgWldBVkVfTkVUV09SS19TVEFURV9TVE9QUEVELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX1NUQVJURUQsXG4gIFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VELFxuICBaV0FWRV9ORVRXT1JLX1NUQVRFX1JFQURZLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96d2F2ZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1hcGktYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJ6d2F2ZS1uZXR3b3JrXCIpXG5leHBvcnQgY2xhc3MgWndhdmVOZXR3b3JrIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGlzV2lkZSE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Nob3dIZWxwID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX25ldHdvcmtTdGF0dXM/OiBaV2F2ZU5ldHdvcmtTdGF0dXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3Vuc3ViczogQXJyYXk8UHJvbWlzZTxVbnN1YnNjcmliZUZ1bmM+PiA9IFtdO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9nZXROZXR3b3JrU3RhdHVzKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY29uZmlnLXNlY3Rpb24gLmlzV2lkZT1cIiR7dGhpcy5pc1dpZGV9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uSGVhZGVyXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX21hbmFnZW1lbnQuaGVhZGVyXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGVscC1pY29uXCJcbiAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fb25IZWxwVGFwfVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczpoZWxwLWNpcmNsZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX21hbmFnZW1lbnQuaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3Mvei13YXZlL2NvbnRyb2wtcGFuZWwvXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmxlYXJuX21vcmVcIil9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXNcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1jYXJkIGNsYXNzPVwiY29udGVudCBuZXR3b3JrLXN0YXR1c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfU1RPUFBFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwiaGFzczpjbG9zZVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdG9wcGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfU1RBUlRFRFxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0aW5nX25vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA9PT0gWldBVkVfTkVUV09SS19TVEFURV9BV0FLRURcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cImhhc3M6Y2hlY2tib3gtbWFya2VkLWNpcmNsZVwiPiA8L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubmV0d29ya19zdGF0dXMubmV0d29ya19zdGFydGVkX25vdGVfc29tZV9xdWVyaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuX25ldHdvcmtTdGF0dXMuc3RhdGUgPT09IFpXQVZFX05FVFdPUktfU1RBVEVfUkVBRFlcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5uZXR3b3JrX3N0YXR1cy5uZXR3b3JrX3N0YXJ0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5ldHdvcmtfc3RhdHVzLm5ldHdvcmtfc3RhcnRlZF9ub3RlX2FsbF9xdWVyaWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID49IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwic3RvcF9uZXR3b3JrXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oXCJoZWFsX25ldHdvcmtcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInRlc3RfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwic3RhcnRfbmV0d29ya1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5fbmV0d29ya1N0YXR1cy5zdGF0ZSA+PSBaV0FWRV9ORVRXT1JLX1NUQVRFX0FXQUtFRFxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwic29mdF9yZXNldFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLWFwaS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9XCJ6d2F2ZS9zYXZlY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLnNlcnZpY2VzLnNhdmVfY29uZmlnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGEtY2FsbC1hcGktYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgJHt0aGlzLl9uZXR3b3JrU3RhdHVzLnN0YXRlID49IFpXQVZFX05FVFdPUktfU1RBVEVfQVdBS0VEXG4gICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8aGEtY2FyZCBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcImFkZF9ub2RlX3NlY3VyZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiYWRkX25vZGVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuX2dlbmVyYXRlU2VydmljZUJ1dHRvbihcInJlbW92ZV9ub2RlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fZ2VuZXJhdGVTZXJ2aWNlQnV0dG9uKFwiY2FuY2VsX2NvbW1hbmRcIil9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZ2V0TmV0d29ya1N0YXR1cygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9uZXR3b3JrU3RhdHVzID0gYXdhaXQgZmV0Y2hOZXR3b3JrU3RhdHVzKHRoaXMuaGFzcyEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIHRoaXMuX3Vuc3VicyA9IFtcbiAgICAgIFwiendhdmUubmV0d29ya19zdGFydFwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX3N0b3BcIixcbiAgICAgIFwiendhdmUubmV0d29ya19yZWFkeVwiLFxuICAgICAgXCJ6d2F2ZS5uZXR3b3JrX2NvbXBsZXRlXCIsXG4gICAgICBcInp3YXZlLm5ldHdvcmtfY29tcGxldGVfc29tZV9kZWFkXCIsXG4gICAgXS5tYXAoKGUpID0+XG4gICAgICB0aGlzLmhhc3MhLmNvbm5lY3Rpb24uc3Vic2NyaWJlRXZlbnRzKFxuICAgICAgICAoZXZlbnQpID0+IHRoaXMuX2hhbmRsZUV2ZW50KGV2ZW50KSxcbiAgICAgICAgZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91bnN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5fdW5zdWJzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fdW5zdWJzLnBvcCgpIS50aGVuKCh1bnN1YikgPT4gdW5zdWIoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZXZlbnRfdHlwZSA9PT0gXCJ6d2F2ZS5uZXR3b3JrX3N0YXJ0XCIpIHtcbiAgICAgIC8vIE9wdGltaXN0aWNhbGx5IHNldCB0aGUgc3RhdGUsIHdhaXQgMXMgYW5kIHBvbGwgdGhlIGJhY2tlbmRcbiAgICAgIC8vIFRoZSBiYWNrZW5kIHdpbGwgc3RpbGwgcmVwb3J0IGEgc3RhdGUgb2YgMCB3aGVuIHRoZSAnbmV0d29ya19zdGFydCdcbiAgICAgIC8vIGV2ZW50IGlzIGZpcnN0IGZpcmVkLlxuICAgICAgaWYgKHRoaXMuX25ldHdvcmtTdGF0dXMpIHtcbiAgICAgICAgdGhpcy5fbmV0d29ya1N0YXR1cyA9IHsgLi4udGhpcy5fbmV0d29ya1N0YXR1cywgc3RhdGU6IDUgfTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZ2V0TmV0d29ya1N0YXR1cywgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dldE5ldHdvcmtTdGF0dXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vbkhlbHBUYXAoKTogdm9pZCB7XG4gICAgdGhpcy5fc2hvd0hlbHAgPSAhdGhpcy5fc2hvd0hlbHA7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZVNlcnZpY2VCdXR0b24oc2VydmljZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgZG9tYWluPVwiendhdmVcIlxuICAgICAgICBzZXJ2aWNlPVwiJHtzZXJ2aWNlfVwiXG4gICAgICA+XG4gICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5zZXJ2aWNlcy5cIiArIHNlcnZpY2UpfVxuICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgPGhhLXNlcnZpY2UtZGVzY3JpcHRpb25cbiAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgc2VydmljZT1cIiR7c2VydmljZX1cIlxuICAgICAgICA/aGlkZGVuPSR7IXRoaXMuX3Nob3dIZWxwfVxuICAgICAgPlxuICAgICAgPC9oYS1zZXJ2aWNlLWRlc2NyaXB0aW9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb25IZWFkZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5ldHdvcmstc3RhdHVzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMgZGl2LmRldGFpbHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubmV0d29yay1zdGF0dXMgaGEtaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAxNnB4O1xuICAgICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uZXR3b3JrLXN0YXR1cyBzbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWFjdGlvbnMud2FybmluZyBoYS1jYWxsLXNlcnZpY2UtYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvZ2dsZS1oZWxwLWljb24ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtc2VydmljZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHggMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInp3YXZlLW5ldHdvcmtcIjogWndhdmVOZXR3b3JrO1xuICB9XG59XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQge1xuICBaV2F2ZUNvbmZpZ0l0ZW0sXG4gIFpXYXZlTm9kZSxcbiAgWldhdmVDb25maWdTZXJ2aWNlRGF0YSxcbiAgZmV0Y2hOb2RlQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS96d2F2ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInp3YXZlLW5vZGUtY29uZmlnXCIpXG5leHBvcnQgY2xhc3MgWndhdmVOb2RlQ29uZmlnIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5vZGVzOiBaV2F2ZU5vZGVbXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29uZmlnOiBaV2F2ZUNvbmZpZ0l0ZW1bXSA9IFtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc2VsZWN0ZWROb2RlOiBudW1iZXIgPSAtMTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY29uZmlnSXRlbT86IFpXYXZlQ29uZmlnSXRlbTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfd2FrZXVwSW5wdXQ6IG51bWJlciA9IC0xO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zZWxlY3RlZENvbmZpZ1BhcmFtZXRlcjogbnVtYmVyID0gLTE7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3NlbGVjdGVkQ29uZmlnVmFsdWU6IG51bWJlciB8IHN0cmluZyA9IC0xO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkXG4gICAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5ub2RlX2NvbmZpZy5oZWFkZXJcIlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICAke1wid2FrZV91cF9pbnRlcnZhbFwiIGluIHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLmZsb2F0TGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLndha2V1cF9pbnRlcnZhbFwiXG4gICAgICAgICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3dha2V1cElucHV0ICE9PSAtMVxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5fd2FrZXVwSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi51bmtub3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fb25XYWtldXBJbnRlcnZhbENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcj0ke3RoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAud2FrZV91cF9pbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAud2FrZV91cF9pbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUuY29tbW9uLnVua25vd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdWZmaXg+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuc2Vjb25kc1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRvbWFpbj1cInp3YXZlXCJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZT1cInNldF93YWtldXBcIlxuICAgICAgICAgICAgICAgICAgICAuc2VydmljZURhdGE9JHt0aGlzLl9jb21wdXRlV2FrZXVwU2VydmljZURhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2FrZXVwSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnp3YXZlLm5vZGVfY29uZmlnLnNldF93YWtldXBcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuY29uZmlnX3BhcmFtZXRlclwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJ9XG4gICAgICAgICAgICAgICAgQGlyb24tc2VsZWN0PSR7dGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXJDaGFuZ2VkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmNvbmZpZy5tYXAoXG4gICAgICAgICAgICAgICAgICAoc3RhdGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICR7c3RhdGUua2V5fTogJHtzdGF0ZS52YWx1ZS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW1cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUudHlwZSA9PT0gXCJMaXN0XCJcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5ub2RlX2NvbmZpZy5jb25maWdfdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFjZWhvbGRlcj0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpcm9uLXNlbGVjdD0ke3RoaXMuX2NvbmZpZ1ZhbHVlU2VsZWN0Q2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5kYXRhX2l0ZW1zLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdGF0ZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+JHtzdGF0ZX08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgJHtbXCJCeXRlXCIsIFwiU2hvcnRcIiwgXCJJbnRcIl0uaW5jbHVkZXModGhpcy5fY29uZmlnSXRlbS52YWx1ZS50eXBlKVxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGFfaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXg9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLm1heH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLm1pbj0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUubWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2NvbmZpZ1ZhbHVlSW5wdXRDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICR7W1wiQm9vbFwiLCBcIkJ1dHRvblwiXS5pbmNsdWRlcyh0aGlzLl9jb25maWdJdGVtLnZhbHVlLnR5cGUpXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZS1waWNrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuY29uZmlnX3ZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXI9JHt0aGlzLl9jb25maWdJdGVtLnZhbHVlLmRhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX2NvbmZpZ0l0ZW0udmFsdWUuZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl9jb25maWdWYWx1ZVNlbGVjdENoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcudHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWxwLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5fY29uZmlnSXRlbS52YWx1ZS5oZWxwfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAke1tcIkJvb2xcIiwgXCJCdXR0b25cIiwgXCJCeXRlXCIsIFwiU2hvcnRcIiwgXCJJbnRcIiwgXCJMaXN0XCJdLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnSXRlbS52YWx1ZS50eXBlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21haW49XCJ6d2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJzZXRfY29uZmlnX3BhcmFtZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zZXJ2aWNlRGF0YT0ke3RoaXMuX2NvbXB1dGVTZXRDb25maWdQYXJhbWV0ZXJTZXJ2aWNlRGF0YSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuendhdmUubm9kZV9jb25maWcuc2V0X2NvbmZpZ19wYXJhbWV0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC10ZXh0IHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4IHtcbiAgICAgICAgICAtbXMtZmxleDogMSAxIDAuMDAwMDAwMDAxcHg7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDAuMDAwMDAwMDAxcHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc3Mtc2VydmljZS1jYWxsZWRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5zZXJ2aWNlQ2FsbGVkKGV2KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwic2VsZWN0ZWROb2RlXCIpKSB7XG4gICAgICB0aGlzLl9ub2Rlc0NoYW5nZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcnZpY2VDYWxsZWQoZXYpOiB2b2lkIHtcbiAgICBpZiAoZXYuZGV0YWlsLnN1Y2Nlc3MpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9yZWZyZXNoQ29uZmlnKHRoaXMuc2VsZWN0ZWROb2RlKTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX25vZGVzQ2hhbmdlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnSXRlbSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl93YWtldXBJbnB1dCA9IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoXG4gICAgICBcIndha2VfdXBfaW50ZXJ2YWxcIlxuICAgIClcbiAgICAgID8gdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy53YWtlX3VwX2ludGVydmFsIVxuICAgICAgOiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgX29uV2FrZXVwSW50ZXJ2YWxDaGFuZ2VkKHZhbHVlOiBDaGFuZ2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuX3dha2V1cElucHV0ID0gdmFsdWUuZGV0YWlsIS52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVXYWtldXBTZXJ2aWNlRGF0YSh3YWtldXBJbnB1dDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgIHZhbHVlOiB3YWtldXBJbnB1dCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVNldENvbmZpZ1BhcmFtZXRlclNlcnZpY2VEYXRhKCk6XG4gICAgfCBaV2F2ZUNvbmZpZ1NlcnZpY2VEYXRhXG4gICAgfCBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE5vZGUgPT09IC0xIHx8IHR5cGVvZiB0aGlzLl9jb25maWdJdGVtID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCB2YWx1ZURhdGE6IG51bWJlciB8IHN0cmluZyA9IFwiXCI7XG4gICAgaWYgKFtcIlNob3J0XCIsIFwiQnl0ZVwiLCBcIkludFwiXS5pbmNsdWRlcyh0aGlzLl9jb25maWdJdGVtIS52YWx1ZS50eXBlKSkge1xuICAgICAgdmFsdWVEYXRhID1cbiAgICAgICAgdHlwZW9mIHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICA/IHBhcnNlSW50KHRoaXMuX3NlbGVjdGVkQ29uZmlnVmFsdWUsIDEwKVxuICAgICAgICAgIDogdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZTtcbiAgICB9XG4gICAgaWYgKFtcIkJvb2xcIiwgXCJCdXR0b25cIiwgXCJMaXN0XCJdLmluY2x1ZGVzKHRoaXMuX2NvbmZpZ0l0ZW0hLnZhbHVlLnR5cGUpKSB7XG4gICAgICB2YWx1ZURhdGEgPSB0aGlzLl9zZWxlY3RlZENvbmZpZ1ZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbm9kZV9pZDogdGhpcy5ub2Rlc1t0aGlzLnNlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkLFxuICAgICAgcGFyYW1ldGVyOiB0aGlzLl9jb25maWdJdGVtLmtleSxcbiAgICAgIHZhbHVlOiB2YWx1ZURhdGEsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyQ2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IS5zZWxlY3RlZCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdQYXJhbWV0ZXIgPSBldmVudC50YXJnZXQhLnNlbGVjdGVkO1xuICAgIHRoaXMuX2NvbmZpZ0l0ZW0gPSB0aGlzLmNvbmZpZ1tldmVudC50YXJnZXQhLnNlbGVjdGVkXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbmZpZ1ZhbHVlU2VsZWN0Q2hhbmdlZChldmVudDogSXRlbVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0IS5zZWxlY3RlZCA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZSA9IGV2ZW50LnRhcmdldCEuc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfY29uZmlnVmFsdWVJbnB1dENoYW5nZWQodmFsdWU6IENoYW5nZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fc2VsZWN0ZWRDb25maWdWYWx1ZSA9IHZhbHVlLmRldGFpbCEudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZWZyZXNoQ29uZmlnKHNlbGVjdGVkTm9kZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbmZpZ0RhdGE6IFpXYXZlQ29uZmlnSXRlbVtdID0gW107XG4gICAgY29uc3QgY29uZmlnID0gYXdhaXQgZmV0Y2hOb2RlQ29uZmlnKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgdGhpcy5ub2Rlc1tzZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZFxuICAgICk7XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uZmlnRGF0YS5wdXNoKHtcbiAgICAgICAga2V5OiBwYXJzZUludChrZXksIDEwKSxcbiAgICAgICAgdmFsdWU6IGNvbmZpZ1trZXldLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ0RhdGE7XG4gICAgdGhpcy5fY29uZmlnSXRlbSA9IHRoaXMuY29uZmlnW3RoaXMuX3NlbGVjdGVkQ29uZmlnUGFyYW1ldGVyXTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENoYW5nZUV2ZW50IHtcbiAgZGV0YWlsPzoge1xuICAgIHZhbHVlPzogYW55O1xuICB9O1xuICB0YXJnZXQ/OiBFdmVudFRhcmdldDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaWNrZXJUYXJnZXQgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIHNlbGVjdGVkOiBudW1iZXI7XG4gIHNlbGVjdGVkSXRlbT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJdGVtU2VsZWN0ZWRFdmVudCB7XG4gIHRhcmdldD86IFBpY2tlclRhcmdldDtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInp3YXZlLW5vZGUtY29uZmlnXCI6IFp3YXZlTm9kZUNvbmZpZztcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLWFwaS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBad2F2ZU5vZGVQcm90ZWN0aW9uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAuY2FyZC1hY3Rpb25zLndhcm5pbmcgaGEtY2FsbC1hcGktYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGV2aWNlLXBpY2tlciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHggMjRweDtcbiAgICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5vZGUgcHJvdGVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgbGFiZWw9XCJQcm90ZWN0aW9uXCIgZHluYW1pYy1hbGlnbiBjbGFzcz1cImZsZXhcIiBwbGFjZWhvbGRlcj1cInt7X2xvYWRlZFByb3RlY3Rpb25WYWx1ZX19XCI+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveCBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIHNlbGVjdGVkPVwie3tfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyfX1cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfcHJvdGVjdGlvbk9wdGlvbnNdXVwiIGFzPVwic3RhdGVcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5bW3N0YXRlXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxoYS1jYWxsLWFwaS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgcGF0aD1cIltbX25vZGVQYXRoXV1cIlxuICAgICAgICAgICAgICBkYXRhPVwiW1tfcHJvdGVjdGlvbkRhdGFdXVwiPlxuICAgICAgICAgICAgICBTZXQgUHJvdGVjdGlvblxuICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBwcm90ZWN0aW9uTm9kZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvblZhbHVlSUQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICB9LFxuXG4gICAgICBfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfY29tcHV0ZVByb3RlY3Rpb25EYXRhXCIsXG4gICAgICB9LFxuXG4gICAgICBfcHJvdGVjdGlvbk9wdGlvbnM6IEFycmF5LFxuXG4gICAgICBfcHJvdGVjdGlvbjoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgdmFsdWU6ICgpID0+IFtdLFxuICAgICAgfSxcblxuICAgICAgX2xvYWRlZFByb3RlY3Rpb25WYWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgX3Byb3RlY3Rpb25EYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgX25vZGVQYXRoOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfbm9kZXNDaGFuZ2VkKG5vZGVzLCBzZWxlY3RlZE5vZGUpXCJdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLWFwaS1jYWxsZWRcIiwgKGV2KSA9PiB0aGlzLmFwaUNhbGxlZChldikpO1xuICB9XG5cbiAgYXBpQ2FsbGVkKGV2KSB7XG4gICAgaWYgKGV2LmRldGFpbC5zdWNjZXNzKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaFByb3RlY3Rpb24odGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX25vZGVzQ2hhbmdlZCgpIHtcbiAgICBpZiAoIXRoaXMubm9kZXMpIHJldHVybjtcbiAgICBpZiAodGhpcy5wcm90ZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5wcm90ZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBwcm90ZWN0aW9uTm9kZTogdHJ1ZSxcbiAgICAgICAgX3Byb3RlY3Rpb25PcHRpb25zOiB0aGlzLnByb3RlY3Rpb25bMF0udmFsdWUsXG4gICAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHRoaXMucHJvdGVjdGlvblsxXS52YWx1ZSxcbiAgICAgICAgX3Byb3RlY3Rpb25WYWx1ZUlEOiB0aGlzLnByb3RlY3Rpb25bMl0udmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBfcmVmcmVzaFByb3RlY3Rpb24oc2VsZWN0ZWROb2RlKSB7XG4gICAgY29uc3QgcHJvdGVjdGlvblZhbHVlcyA9IFtdO1xuICAgIGNvbnN0IHByb3RlY3Rpb25zID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL3Byb3RlY3Rpb24vJHt0aGlzLm5vZGVzW3NlbGVjdGVkTm9kZV0uYXR0cmlidXRlcy5ub2RlX2lkfWBcbiAgICApO1xuICAgIE9iamVjdC5rZXlzKHByb3RlY3Rpb25zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHByb3RlY3Rpb25WYWx1ZXMucHVzaCh7XG4gICAgICAgIGtleSxcbiAgICAgICAgdmFsdWU6IHByb3RlY3Rpb25zW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgX3Byb3RlY3Rpb246IHByb3RlY3Rpb25WYWx1ZXMsXG4gICAgICBfc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyOiAtMSxcbiAgICAgIF9sb2FkZWRQcm90ZWN0aW9uVmFsdWU6IHRoaXMucHJvdGVjdGlvblsxXS52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUHJvdGVjdGlvbkRhdGEoc2VsZWN0ZWRQcm90ZWN0aW9uUGFyYW1ldGVyKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSB8fCBzZWxlY3RlZFByb3RlY3Rpb25QYXJhbWV0ZXIgPT09IC0xKSByZXR1cm47XG4gICAgdGhpcy5fcHJvdGVjdGlvbkRhdGEgPSB7XG4gICAgICBzZWxlY3Rpb246IHRoaXMuX3Byb3RlY3Rpb25PcHRpb25zW3NlbGVjdGVkUHJvdGVjdGlvblBhcmFtZXRlcl0sXG4gICAgICB2YWx1ZV9pZDogdGhpcy5fcHJvdGVjdGlvblZhbHVlSUQsXG4gICAgfTtcbiAgICB0aGlzLl9ub2RlUGF0aCA9IGB6d2F2ZS9wcm90ZWN0aW9uLyR7XG4gICAgICB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWRcbiAgICB9YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS1ub2RlLXByb3RlY3Rpb25cIiwgWndhdmVOb2RlUHJvdGVjdGlvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5jbGFzcyBad2F2ZVVzZXJjb2RlcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXZpY2UtcGlja2VyIHtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIk5vZGUgdXNlciBjb2Rlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2UtcGlja2VyXCI+XG4gICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbD1cIkNvZGUgc2xvdFwiXG4gICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7X3NlbGVjdGVkVXNlckNvZGV9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3VzZXJDb2Rlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgPltbX2NvbXB1dGVTZWxlY3RDYXB0aW9uVXNlckNvZGVzKHN0YXRlKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc1VzZXJDb2RlU2VsZWN0ZWQoX3NlbGVjdGVkVXNlckNvZGUpXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VyIGNvZGVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhbGxvd2VkLXBhdHRlcm49XCJbMC05LGEtZix4LFxcXFxcXFxcXVwiXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiNDBcIlxuICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X3NlbGVjdGVkVXNlckNvZGVWYWx1ZX19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgICA8cHJlPkFzY2lpOiBbW19jb21wdXRlZENvZGVPdXRwdXRdXTwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJsb2NrXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwic2V0X3VzZXJjb2RlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9J1tbX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKF9zZWxlY3RlZFVzZXJDb2RlVmFsdWUsIFwiQWRkXCIpXV0nXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTZXQgVXNlcmNvZGVcbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwibG9ja1wiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cImNsZWFyX3VzZXJjb2RlXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlLWRhdGE9J1tbX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKF9zZWxlY3RlZFVzZXJDb2RlLCBcIkRlbGV0ZVwiKV1dJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlIFVzZXJjb2RlXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaGEtY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgbm9kZXM6IEFycmF5LFxuXG4gICAgICBzZWxlY3RlZE5vZGU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWROb2RlQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgdXNlckNvZGVzOiBPYmplY3QsXG5cbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xLFxuICAgICAgICBvYnNlcnZlcjogXCJfc2VsZWN0ZWRVc2VyQ29kZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IFN0cmluZyxcblxuICAgICAgX2NvbXB1dGVkQ29kZU91dHB1dDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNzLXNlcnZpY2UtY2FsbGVkXCIsIChldikgPT5cbiAgICAgIHRoaXMuc2VydmljZUNhbGxlZChldilcbiAgICApO1xuICB9XG5cbiAgc2VydmljZUNhbGxlZChldikge1xuICAgIGlmIChldi5kZXRhaWwuc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hVc2VyQ29kZXModGhpcy5zZWxlY3RlZE5vZGUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfVxuICB9XG5cbiAgX2lzVXNlckNvZGVTZWxlY3RlZChzZWxlY3RlZFVzZXJDb2RlKSB7XG4gICAgaWYgKHNlbGVjdGVkVXNlckNvZGUgPT09IC0xKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBfY29tcHV0ZVNlbGVjdENhcHRpb25Vc2VyQ29kZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gYCR7c3RhdGVPYmoua2V5fTogJHtzdGF0ZU9iai52YWx1ZS5sYWJlbH1gO1xuICB9XG5cbiAgX3NlbGVjdGVkVXNlckNvZGVDaGFuZ2VkKHNlbGVjdGVkVXNlckNvZGUpIHtcbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSA9PT0gLTEgfHwgc2VsZWN0ZWRVc2VyQ29kZSA9PT0gLTEpIHJldHVybjtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudXNlckNvZGVzW3NlbGVjdGVkVXNlckNvZGVdLnZhbHVlLmNvZGU7XG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHtcbiAgICAgIF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IHRoaXMuX2EyaGV4KHZhbHVlKSxcbiAgICAgIF9jb21wdXRlZENvZGVPdXRwdXQ6IGBbJHt0aGlzLl9oZXgyYSh0aGlzLl9hMmhleCh2YWx1ZSkpfV1gLFxuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVVc2VyQ29kZVNlcnZpY2VEYXRhKHNlbGVjdGVkVXNlckNvZGVWYWx1ZSwgdHlwZSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZSA9PT0gLTEgfHwgIXNlbGVjdGVkVXNlckNvZGVWYWx1ZSkgcmV0dXJuIC0xO1xuICAgIGxldCBzZXJ2aWNlRGF0YSA9IG51bGw7XG4gICAgbGV0IHZhbHVlRGF0YSA9IG51bGw7XG4gICAgaWYgKHR5cGUgPT09IFwiQWRkXCIpIHtcbiAgICAgIHZhbHVlRGF0YSA9IHRoaXMuX2hleDJhKHNlbGVjdGVkVXNlckNvZGVWYWx1ZSk7XG4gICAgICB0aGlzLl9jb21wdXRlZENvZGVPdXRwdXQgPSBgWyR7dmFsdWVEYXRhfV1gO1xuICAgICAgc2VydmljZURhdGEgPSB7XG4gICAgICAgIG5vZGVfaWQ6IHRoaXMubm9kZXNbdGhpcy5zZWxlY3RlZE5vZGVdLmF0dHJpYnV0ZXMubm9kZV9pZCxcbiAgICAgICAgY29kZV9zbG90OiB0aGlzLl9zZWxlY3RlZFVzZXJDb2RlLFxuICAgICAgICB1c2VyY29kZTogdmFsdWVEYXRhLFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT09IFwiRGVsZXRlXCIpIHtcbiAgICAgIHNlcnZpY2VEYXRhID0ge1xuICAgICAgICBub2RlX2lkOiB0aGlzLm5vZGVzW3RoaXMuc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWQsXG4gICAgICAgIGNvZGVfc2xvdDogdGhpcy5fc2VsZWN0ZWRVc2VyQ29kZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBzZXJ2aWNlRGF0YTtcbiAgfVxuXG4gIGFzeW5jIF9yZWZyZXNoVXNlckNvZGVzKHNlbGVjdGVkTm9kZSkge1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZFVzZXJDb2RlVmFsdWU6IFwiXCIgfSk7XG4gICAgY29uc3QgdXNlckNvZGVzID0gW107XG4gICAgY29uc3QgdXNlckNvZGVEYXRhID0gYXdhaXQgdGhpcy5oYXNzLmNhbGxBcGkoXG4gICAgICBcIkdFVFwiLFxuICAgICAgYHp3YXZlL3VzZXJjb2Rlcy8ke3RoaXMubm9kZXNbc2VsZWN0ZWROb2RlXS5hdHRyaWJ1dGVzLm5vZGVfaWR9YFxuICAgICk7XG4gICAgT2JqZWN0LmtleXModXNlckNvZGVEYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHVzZXJDb2Rlcy5wdXNoKHtcbiAgICAgICAga2V5LFxuICAgICAgICB2YWx1ZTogdXNlckNvZGVEYXRhW2tleV0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoeyB1c2VyQ29kZXM6IHVzZXJDb2RlcyB9KTtcbiAgICB0aGlzLl9zZWxlY3RlZFVzZXJDb2RlQ2hhbmdlZCh0aGlzLl9zZWxlY3RlZFVzZXJDb2RlKTtcbiAgfVxuXG4gIF9hMmhleChzdHIpIHtcbiAgICBjb25zdCBhcnIgPSBbXTtcbiAgICBsZXQgb3V0cHV0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGNvbnN0IGhleCA9IE51bWJlcihzdHIuY2hhckNvZGVBdChpKSkudG9TdHJpbmcoMTYpO1xuICAgICAgaWYgKGhleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgb3V0cHV0ID0gXCIwMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0cHV0ID0gaGV4O1xuICAgICAgfVxuICAgICAgYXJyLnB1c2goXCJcXFxceFwiICsgb3V0cHV0KTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5qb2luKFwiXCIpO1xuICB9XG5cbiAgX2hleDJhKGhleHgpIHtcbiAgICBjb25zdCBoZXggPSBoZXh4LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaGV4TW9kID0gaGV4LnJlcGxhY2UoL1xcXFx4L2csIFwiXCIpO1xuICAgIGxldCBzdHIgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4TW9kLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXhNb2Quc3Vic3RyKGksIDIpLCAxNikpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgX3NlbGVjdGVkTm9kZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWROb2RlID09PSAtMSkgcmV0dXJuO1xuICAgIHRoaXMuc2V0UHJvcGVydGllcyh7IF9zZWxlY3RlZHVzZXJDb2RlOiAtMSB9KTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ6d2F2ZS11c2VyY29kZXNcIiwgWndhdmVVc2VyY29kZXMpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcblxuaW1wb3J0IHsgWldhdmVWYWx1ZSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3p3YXZlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwiendhdmUtdmFsdWVzXCIpXG5leHBvcnQgY2xhc3MgWndhdmVWYWx1ZXMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWVzOiBaV2F2ZVZhbHVlW10gPSBbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfc2VsZWN0ZWRWYWx1ZTogbnVtYmVyID0gLTE7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAuaGVhZGVyPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLnZhbHVlcy5oZWFkZXJcIil9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlLXBpY2tlclwiPlxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi52YWx1ZVwiKX1cbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHt0aGlzLl9zZWxlY3RlZFZhbHVlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLnZhbHVlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoaXRlbSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLl9jb21wdXRlQ2FwdGlvbihpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRldmljZS1waWNrZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgLW1zLWZsZXg6IDEgMSAwLjAwMDAwMDAwMXB4O1xuICAgICAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMC4wMDAwMDAwMDFweDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAwLjAwMDAwMDAwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlbHAtdGV4dCB7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVDYXB0aW9uKGl0ZW0pIHtcbiAgICBsZXQgb3V0ID0gYCR7aXRlbS52YWx1ZS5sYWJlbH1gO1xuICAgIG91dCArPSBgICgke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy56d2F2ZS5jb21tb24uaW5zdGFuY2VcIil9OmA7XG4gICAgb3V0ICs9IGAgJHtpdGVtLnZhbHVlLmluc3RhbmNlfSxgO1xuICAgIG91dCArPSBgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnp3YXZlLmNvbW1vbi5pbmRleFwiKX06YDtcbiAgICBvdXQgKz0gYCAke2l0ZW0udmFsdWUuaW5kZXh9KWA7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiendhdmUtdmFsdWVzXCI6IFp3YXZlVmFsdWVzO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BOQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN1dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEtBO0FBQ0E7QUFFQTtBQVdBO0FBRUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBOztBQUdBO0FBRUE7QUFtUUE7QUFqUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7QUFNQTs7Ozs7QUFLQTs7Ozs7O0FBUUE7Ozs7O0FBS0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFJQTs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7O0FBSUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7O0FBSUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOzs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQXZRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBO0FBR0E7QUFDQTtBQUNBO0FBUUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF3VUE7QUF0VUE7QUFDQTs7O0FBR0E7O0FBSUE7QUFDQTs7O0FBR0E7O0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFLQTs7OztBQU1BOzs7QUFHQTs7QUFJQTs7O0FBS0E7QUFDQTs7O0FBR0E7Ozs7OztBQVFBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBRUE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUtBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUtBOzs7O0FBSUE7QUFDQTs7O0FBR0E7OztBQUtBOzs7OztBQU9BO0FBQ0E7O0FBRUE7O0FBRUE7QUFHQTs7O0FBR0E7OztBQUdBOztBQUVBOzs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBL1VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBREE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVOQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBR0E7QUFDQTtBQUtBO0FBQUE7O0FBRUE7QUFDQTtBQXVGQTtBQXJGQTtBQUNBOzs7QUFHQTs7OztBQUlBOzs7Ozs7QUFNQTs7QUFFQTs7QUFHQTs7QUFFQTs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFDQTtBQUFBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9