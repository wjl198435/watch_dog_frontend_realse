(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-history"],{

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using `isolation: isolate`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        /**\n         * Force app-header-layout to have its own stacking context so that its parent can\n         * control the stacking of it relative to other elements (e.g. app-drawer-layout).\n         * This could be done using \\`isolation: isolate\\`, but that's not well supported\n         * across browsers.\n         */\n        position: relative;\n        z-index: 0;\n      }\n\n      #wrapper ::slotted([slot=header]) {\n        @apply --layout-fixed-top;\n        z-index: 1;\n      }\n\n      #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) {\n        height: 100%;\n      }\n\n      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {\n        position: absolute;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {\n        position: relative;\n      }\n\n      :host([has-scrolling-region]) #wrapper #contentContainer {\n        @apply --layout-fit;\n        overflow-y: auto;\n        -webkit-overflow-scrolling: touch;\n      }\n\n      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {\n        position: relative;\n      }\n\n      :host([fullbleed]) {\n        @apply --layout-vertical;\n        @apply --layout-fit;\n      }\n\n      :host([fullbleed]) #wrapper,\n      :host([fullbleed]) #wrapper #contentContainer {\n        @apply --layout-vertical;\n        @apply --layout-flex;\n      }\n\n      #contentContainer {\n        /* Create a stacking context here so that all children appear below the header. */\n        position: relative;\n        z-index: 0;\n      }\n\n      @media print {\n        :host([has-scrolling-region]) #wrapper #contentContainer {\n          overflow-y: visible;\n        }\n      }\n\n    </style>\n\n    <div id=\"wrapper\" class=\"initializing\">\n      <slot id=\"headerSlot\" name=\"header\"></slot>\n\n      <div id=\"contentContainer\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-header-layout',
  behaviors: [_app_layout_behavior_app_layout_behavior_js__WEBPACK_IMPORTED_MODULE_5__["AppLayoutBehavior"]],
  properties: {
    /**
     * If true, the current element will have its own scrolling region.
     * Otherwise, it will use the document scroll to control the header.
     */
    hasScrollingRegion: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    }
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

  _updateLayoutStates: function _updateLayoutStates() {
    var header = this.header;

    if (!this.isAttached || !header) {
      return;
    } // Remove the initializing class, which staticly positions the header and
    // the content until the height of the header can be read.


    this.$.wrapper.classList.remove('initializing'); // Update scroll target.

    header.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement; // Get header height here so that style reads are batched together before
    // style writes (i.e. getBoundingClientRect() below).

    var headerHeight = header.offsetHeight; // Update the header position.

    if (!this.hasScrollingRegion) {
      requestAnimationFrame(function () {
        var rect = this.getBoundingClientRect();
        var rightOffset = document.documentElement.clientWidth - rect.right;
        header.style.left = rect.left + 'px';
        header.style.right = rightOffset + 'px';
      }.bind(this));
    } else {
      header.style.left = '';
      header.style.right = '';
    } // Update the content container position.


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
var computeObjectId = function (entityId) {
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

var computeStateDomain = function (stateObj) {
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

var computeStateName = function (stateObj) {
    return stateObj.attributes.friendly_name === undefined
        ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ")
        : stateObj.attributes.friendly_name || "";
};


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/history/ha-panel-history.js":
/*!************************************************!*\
  !*** ./src/panels/history/ha-panel-history.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../resources/ha-date-picker-style */ "./src/resources/ha-date-picker-style.js");
/* harmony import */ var _resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_resources_ha_date_picker_style__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 0 16px 16px;\n        }\n\n        vaadin-date-picker {\n          margin-right: 16px;\n          max-width: 200px;\n        }\n\n        paper-dropdown-menu {\n          max-width: 100px;\n          margin-top: 13px;\n          margin-right: 16px;\n          --paper-input-container-label-floating: {\n            padding-bottom: 10px;\n          }\n        }\n\n        :host([rtl]) paper-dropdown-menu {\n          text-align: right;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <ha-state-history-data\n        hass=\"[[hass]]\"\n        filter-type=\"[[_filterType]]\"\n        start-time=\"[[_computeStartTime(_currentDate)]]\"\n        end-time=\"[[endTime]]\"\n        data=\"{{stateHistory}}\"\n        is-loading=\"{{isLoadingData}}\"\n      ></ha-state-history-data>\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button\n              hass=\"[[hass]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-menu-button>\n            <div main-title>[[localize('panel.history')]]</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"flex content\">\n          <div class=\"flex layout horizontal wrap\">\n            <vaadin-date-picker\n              id=\"picker\"\n              value=\"{{_currentDate}}\"\n              label=\"[[localize('ui.panel.history.showing_entries')]]\"\n              disabled=\"[[isLoadingData]]\"\n              required\n            ></vaadin-date-picker>\n\n            <paper-dropdown-menu\n              label-float\n              label=\"[[localize('ui.panel.history.period')]]\"\n              disabled=\"[[isLoadingData]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{_periodIndex}}\"\n              >\n                <paper-item\n                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item\n                >\n                <paper-item\n                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item\n                >\n                <paper-item\n                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item\n                >\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[stateHistory]]\"\n            is-loading-data=\"[[isLoadingData]]\"\n            end-time=\"[[endTime]]\"\n            no-single\n          >\n          </state-history-charts>\n        </div>\n      </app-header-layout>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




















/*
 * @appliesMixin LocalizeMixin
 */

var HaPanelHistory =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPanelHistory, _LocalizeMixin);

  function HaPanelHistory() {
    _classCallCheck(this, HaPanelHistory);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelHistory).apply(this, arguments));
  }

  _createClass(HaPanelHistory, [{
    key: "datepickerFocus",
    value: function datepickerFocus() {
      this.datePicker.adjustPosition();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaPanelHistory.prototype), "connectedCallback", this).call(this); // We are unable to parse date because we use intl api to render date


      this.$.picker.set("i18n.parseDate", null);
      this.$.picker.set("i18n.formatDate", function (date) {
        return Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__["default"])(new Date(date.year, date.month, date.day), _this.hass.language);
      });
    }
  }, {
    key: "_computeStartTime",
    value: function _computeStartTime(_currentDate) {
      if (!_currentDate) return undefined;

      var parts = _currentDate.split("-");

      parts[1] = parseInt(parts[1]) - 1;
      return new Date(parts[0], parts[1], parts[2]);
    }
  }, {
    key: "_computeEndTime",
    value: function _computeEndTime(_currentDate, periodIndex) {
      var startTime = this._computeStartTime(_currentDate);

      var endTime = new Date(startTime);
      endTime.setDate(startTime.getDate() + this._computeFilterDays(periodIndex));
      return endTime;
    }
  }, {
    key: "_computeFilterDays",
    value: function _computeFilterDays(periodIndex) {
      switch (periodIndex) {
        case 1:
          return 3;

        case 2:
          return 7;

        default:
          return 1;
      }
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        narrow: Boolean,
        stateHistory: {
          type: Object,
          value: null
        },
        _periodIndex: {
          type: Number,
          value: 0
        },
        isLoadingData: {
          type: Boolean,
          value: false
        },
        endTime: {
          type: Object,
          computed: "_computeEndTime(_currentDate, _periodIndex)"
        },
        // ISO8601 formatted date string
        _currentDate: {
          type: String,
          value: function value() {
            var value = new Date();
            var today = new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
            return today.toISOString().split("T")[0];
          }
        },
        _filterType: {
          type: String,
          value: "date"
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return HaPanelHistory;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__["PolymerElement"]));

customElements.define("ha-panel-history", HaPanelHistory);

/***/ }),

/***/ "./src/resources/ha-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = "<dom-module id=\"ha-date-picker-vaadin-date-picker-styles\" theme-for=\"vaadin-date-picker\">\n  <template>\n    <style>\n      :host([required]) [part~=\"clear-button\"] {\n        display: none;\n      }\n\n      [part~=\"toggle-button\"] {\n        color: var(--secondary-text-color);\n        font-size: var(--paper-font-subhead_-_font-size);\n        margin-right: 5px;\n      }\n\n      :host([opened]) [part~=\"toggle-button\"] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"ha-date-picker-text-field-styles\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style>\n      :host {\n        padding: 8px 0;\n      }\n\n      [part~=\"label\"] {\n        color: var(--paper-input-container-color, var(--secondary-text-color));\n        font-family: var(--paper-font-caption_-_font-family);\n        font-size: var(--paper-font-caption_-_font-size);\n        font-weight: var(--paper-font-caption_-_font-weight);\n        letter-spacing: var(--paper-font-caption_-_letter-spacing);\n        line-height: var(--paper-font-caption_-_line-height);\n      }\n      :host([focused]) [part~=\"label\"] {\n          color: var(--paper-input-container-focus-color, var(--primary-color));\n      }\n\n      [part~=\"input-field\"] {\n        padding-bottom: 1px;\n        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));\n        line-height: var(--paper-font-subhead_-_line-height);\n      }\n\n      :host([focused]) [part~=\"input-field\"] {\n        padding-bottom: 0;\n        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));\n      }\n      [part~=\"value\"]:focus {\n        outline: none;\n      }\n\n      [part~=\"value\"] {\n        font-size: var(--paper-font-subhead_-_font-size);\n        font-family: inherit;\n        color: inherit;\n        border: none;\n        background: transparent;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"ha-date-picker-button-styles\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host([part~=\"today-button\"]) [part~=\"button\"]::before {\n        content: \"\u29BF\";\n        color: var(--primary-color);\n      }\n\n      [part~=\"button\"] {\n        font-family: inherit;\n        font-size: var(--paper-font-subhead_-_font-size);\n        border: none;\n        background: transparent;\n        cursor: pointer;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n        color: inherit;\n      }\n\n      [part~=\"button\"]:focus {\n        outline: none;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"ha-date-picker-overlay-styles\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style include=\"vaadin-date-picker-overlay-default-theme\">\n      :host {\n        background-color: var(--paper-card-background-color, var(--primary-background-color));\n      }\n\n      [part~=\"toolbar\"] {\n        padding: 0.3em;\n        background-color: var(--secondary-background-color);\n      }\n\n      [part=\"years\"] {\n        background-color: var(--paper-grey-200);\n      }\n\n    </style>\n  </template>\n</dom-module><dom-module id=\"ha-date-picker-month-styles\" theme-for=\"vaadin-month-calendar\">\n  <template>\n    <style include=\"vaadin-month-calendar-default-theme\">\n      :host([focused]) [part=\"date\"][focused],\n      [part=\"date\"][selected] {\n        background-color: var(--paper-grey-200);\n      }\n      [part=\"date\"][today] {\n        color: var(--primary-color);\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild(documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGlzdG9yeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL2xvY2FsaXplLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvaGlzdG9yeS9oYS1wYW5lbC1oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvaGEtZGF0ZS1waWNrZXItc3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7QXBwTGF5b3V0QmVoYXZpb3J9IGZyb20gJy4uL2FwcC1sYXlvdXQtYmVoYXZpb3IvYXBwLWxheW91dC1iZWhhdmlvci5qcyc7XG5cbi8qKlxuYXBwLWhlYWRlci1sYXlvdXQgaXMgYSB3cmFwcGVyIGVsZW1lbnQgdGhhdCBwb3NpdGlvbnMgYW4gYXBwLWhlYWRlciBhbmQgb3RoZXJcbmNvbnRlbnQuIFRoaXMgZWxlbWVudCB1c2VzIHRoZSBkb2N1bWVudCBzY3JvbGwgYnkgZGVmYXVsdCwgYnV0IGl0IGNhbiBhbHNvXG5kZWZpbmUgaXRzIG93biBzY3JvbGxpbmcgcmVnaW9uLlxuXG5Vc2luZyB0aGUgZG9jdW1lbnQgc2Nyb2xsOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQ+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cblVzaW5nIGFuIG93biBzY3JvbGxpbmcgcmVnaW9uOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24gc3R5bGU9XCJ3aWR0aDogMzAwcHg7IGhlaWdodDogNDAwcHg7XCI+XG4gIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZCBjb25kZW5zZXMgZWZmZWN0cz1cIndhdGVyZmFsbFwiPlxuICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICAgIDwvYXBwLXRvb2xiYXI+XG4gIDwvYXBwLWhlYWRlcj5cbiAgPGRpdj5cbiAgICBtYWluIGNvbnRlbnRcbiAgPC9kaXY+XG48L2FwcC1oZWFkZXItbGF5b3V0PlxuYGBgXG5cbkFkZCB0aGUgYGZ1bGxibGVlZGAgYXR0cmlidXRlIHRvIGFwcC1oZWFkZXItbGF5b3V0IHRvIG1ha2UgaXQgZml0IHRoZSBzaXplIG9mXG5pdHMgY29udGFpbmVyOlxuXG5gYGBodG1sXG48YXBwLWhlYWRlci1sYXlvdXQgZnVsbGJsZWVkPlxuIC4uLlxuPC9hcHAtaGVhZGVyLWxheW91dD5cbmBgYFxuXG5AZ3JvdXAgQXBwIEVsZW1lbnRzXG5AZWxlbWVudCBhcHAtaGVhZGVyLWxheW91dFxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zaW1wbGUuaHRtbCBTaW1wbGUgRGVtb1xuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9zY3JvbGxpbmctcmVnaW9uLmh0bWwgU2Nyb2xsaW5nIFJlZ2lvblxuQGRlbW8gYXBwLWhlYWRlci1sYXlvdXQvZGVtby9tdXNpYy5odG1sIE11c2ljIERlbW9cbkBkZW1vIGFwcC1oZWFkZXItbGF5b3V0L2RlbW8vZm9vdGVyLmh0bWwgRm9vdGVyIERlbW9cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlciA6OnNsb3R0ZWQoW3Nsb3Q9aGVhZGVyXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml4ZWQtdG9wO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlci5pbml0aWFsaXppbmcgOjpzbG90dGVkKFtzbG90PWhlYWRlcl0pIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIuaW5pdGlhbGl6aW5nICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbGJsZWVkXSkge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtdmVydGljYWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlcixcbiAgICAgIDpob3N0KFtmdWxsYmxlZWRdKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgLyogQ3JlYXRlIGEgc3RhY2tpbmcgY29udGV4dCBoZXJlIHNvIHRoYXQgYWxsIGNoaWxkcmVuIGFwcGVhciBiZWxvdyB0aGUgaGVhZGVyLiAqL1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cIndyYXBwZXJcIiBjbGFzcz1cImluaXRpYWxpemluZ1wiPlxuICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRDb250YWluZXJcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnYXBwLWhlYWRlci1sYXlvdXQnLFxuICBiZWhhdmlvcnM6IFtBcHBMYXlvdXRCZWhhdmlvcl0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBjdXJyZW50IGVsZW1lbnQgd2lsbCBoYXZlIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBkb2N1bWVudCBzY3JvbGwgdG8gY29udHJvbCB0aGUgaGVhZGVyLlxuICAgICAqL1xuICAgIGhhc1Njcm9sbGluZ1JlZ2lvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfVxuICB9LFxuXG4gIG9ic2VydmVyczogWydyZXNldExheW91dChpc0F0dGFjaGVkLCBoYXNTY3JvbGxpbmdSZWdpb24pJ10sXG5cbiAgLyoqXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBhcHAtaGVhZGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcm9wZXJ0eSBoZWFkZXJcbiAgICovXG4gIGdldCBoZWFkZXIoKSB7XG4gICAgcmV0dXJuIGRvbSh0aGlzLiQuaGVhZGVyU2xvdCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpWzBdO1xuICB9LFxuXG4gIF91cGRhdGVMYXlvdXRTdGF0ZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWFkZXIgPSB0aGlzLmhlYWRlcjtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCB8fCAhaGVhZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFJlbW92ZSB0aGUgaW5pdGlhbGl6aW5nIGNsYXNzLCB3aGljaCBzdGF0aWNseSBwb3NpdGlvbnMgdGhlIGhlYWRlciBhbmRcbiAgICAvLyB0aGUgY29udGVudCB1bnRpbCB0aGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy4kLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgLy8gVXBkYXRlIHNjcm9sbCB0YXJnZXQuXG4gICAgaGVhZGVyLnNjcm9sbFRhcmdldCA9IHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uID9cbiAgICAgICAgdGhpcy4kLmNvbnRlbnRDb250YWluZXIgOlxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIC8vIEdldCBoZWFkZXIgaGVpZ2h0IGhlcmUgc28gdGhhdCBzdHlsZSByZWFkcyBhcmUgYmF0Y2hlZCB0b2dldGhlciBiZWZvcmVcbiAgICAvLyBzdHlsZSB3cml0ZXMgKGkuZS4gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgYmVsb3cpLlxuICAgIHZhciBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0O1xuICAgIC8vIFVwZGF0ZSB0aGUgaGVhZGVyIHBvc2l0aW9uLlxuICAgIGlmICghdGhpcy5oYXNTY3JvbGxpbmdSZWdpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSByZWN0LnJpZ2h0O1xuICAgICAgICBoZWFkZXIuc3R5bGUubGVmdCA9IHJlY3QubGVmdCArICdweCc7XG4gICAgICAgIGhlYWRlci5zdHlsZS5yaWdodCA9IHJpZ2h0T2Zmc2V0ICsgJ3B4JztcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlci5zdHlsZS5sZWZ0ID0gJyc7XG4gICAgICBoZWFkZXIuc3R5bGUucmlnaHQgPSAnJztcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBjb250ZW50IGNvbnRhaW5lciBwb3NpdGlvbi5cbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB0aGlzLiQuY29udGVudENvbnRhaW5lci5zdHlsZTtcbiAgICBpZiAoaGVhZGVyLmZpeGVkICYmICFoZWFkZXIuY29uZGVuc2VzICYmIHRoaXMuaGFzU2Nyb2xsaW5nUmVnaW9uKSB7XG4gICAgICAvLyBJZiB0aGUgaGVhZGVyIHNpemUgZG9lcyBub3QgY2hhbmdlIGFuZCB3ZSdyZSB1c2luZyBhIHNjcm9sbGluZyByZWdpb24sXG4gICAgICAvLyBleGNsdWRlIHRoZSBoZWFkZXIgYXJlYSBmcm9tIHRoZSBzY3JvbGxpbmcgcmVnaW9uIHNvIHRoYXQgdGhlIGhlYWRlclxuICAgICAgLy8gZG9lc24ndCBvdmVybGFwIHRoZSBzY3JvbGxiYXIuXG4gICAgICBjb250YWluZXJTdHlsZS5tYXJnaW5Ub3AgPSBoZWFkZXJIZWlnaHQgKyAncHgnO1xuICAgICAgY29udGFpbmVyU3R5bGUucGFkZGluZ1RvcCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXJTdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcbiAgICAgIGNvbnRhaW5lclN0eWxlLm1hcmdpblRvcCA9ICcnO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKiogQ29tcHV0ZSB0aGUgb2JqZWN0IElEIG9mIGEgc3RhdGUuICovXG5leHBvcnQgY29uc3QgY29tcHV0ZU9iamVjdElkID0gKGVudGl0eUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gZW50aXR5SWQuc3Vic3RyKGVudGl0eUlkLmluZGV4T2YoXCIuXCIpICsgMSk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX2RvbWFpblwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlRG9tYWluID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIHJldHVybiBjb21wdXRlRG9tYWluKHN0YXRlT2JqLmVudGl0eV9pZCk7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGNvbXB1dGVPYmplY3RJZCB9IGZyb20gXCIuL2NvbXB1dGVfb2JqZWN0X2lkXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVOYW1lID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBjb21wdXRlT2JqZWN0SWQoc3RhdGVPYmouZW50aXR5X2lkKS5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgIDogc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IFwiXCI7XG59O1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3ZhYWRpbi1kYXRlLXBpY2tlclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLWRhdGUtcGlja2VyLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGFuZWxIaXN0b3J5IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFhZGluLWRhdGUtcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItbGFiZWwtZmxvYXRpbmc6IHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBwYXBlci1kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLXN0YXRlLWhpc3RvcnktZGF0YVxuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBmaWx0ZXItdHlwZT1cIltbX2ZpbHRlclR5cGVdXVwiXG4gICAgICAgIHN0YXJ0LXRpbWU9XCJbW19jb21wdXRlU3RhcnRUaW1lKF9jdXJyZW50RGF0ZSldXVwiXG4gICAgICAgIGVuZC10aW1lPVwiW1tlbmRUaW1lXV1cIlxuICAgICAgICBkYXRhPVwie3tzdGF0ZUhpc3Rvcnl9fVwiXG4gICAgICAgIGlzLWxvYWRpbmc9XCJ7e2lzTG9hZGluZ0RhdGF9fVwiXG4gICAgICA+PC9oYS1zdGF0ZS1oaXN0b3J5LWRhdGE+XG4gICAgICA8YXBwLWhlYWRlci1sYXlvdXQgaGFzLXNjcm9sbGluZy1yZWdpb24+XG4gICAgICAgIDxhcHAtaGVhZGVyIHNsb3Q9XCJoZWFkZXJcIiBmaXhlZD5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtbWVudS1idXR0b25cbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgbmFycm93PVwiW1tuYXJyb3ddXVwiXG4gICAgICAgICAgICA+PC9oYS1tZW51LWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2xvY2FsaXplKCdwYW5lbC5oaXN0b3J5JyldXTwvZGl2PlxuICAgICAgICAgIDwvYXBwLXRvb2xiYXI+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBjb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbGF5b3V0IGhvcml6b250YWwgd3JhcFwiPlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cInBpY2tlclwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tfY3VycmVudERhdGV9fVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuaGlzdG9yeS5zaG93aW5nX2VudHJpZXMnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ0RhdGFdXVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+PC92YWFkaW4tZGF0ZS1waWNrZXI+XG5cbiAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgIGxhYmVsLWZsb2F0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkucGFuZWwuaGlzdG9yeS5wZXJpb2QnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2lzTG9hZGluZ0RhdGFdXVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tfcGVyaW9kSW5kZXh9fVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLmRheScsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi5kYXknLCAnY291bnQnLCAzKV1dPC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24ud2VlaycsICdjb3VudCcsIDEpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3RhdGUtaGlzdG9yeS1jaGFydHNcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBoaXN0b3J5LWRhdGE9XCJbW3N0YXRlSGlzdG9yeV1dXCJcbiAgICAgICAgICAgIGlzLWxvYWRpbmctZGF0YT1cIltbaXNMb2FkaW5nRGF0YV1dXCJcbiAgICAgICAgICAgIGVuZC10aW1lPVwiW1tlbmRUaW1lXV1cIlxuICAgICAgICAgICAgbm8tc2luZ2xlXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvc3RhdGUtaGlzdG9yeS1jaGFydHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcHAtaGVhZGVyLWxheW91dD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG5cbiAgICAgIHN0YXRlSGlzdG9yeToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgX3BlcmlvZEluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuXG4gICAgICBpc0xvYWRpbmdEYXRhOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGVuZFRpbWU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZUVuZFRpbWUoX2N1cnJlbnREYXRlLCBfcGVyaW9kSW5kZXgpXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBJU084NjAxIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICAgICAgX2N1cnJlbnREYXRlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoXG4gICAgICAgICAgICBEYXRlLlVUQyh2YWx1ZS5nZXRGdWxsWWVhcigpLCB2YWx1ZS5nZXRNb250aCgpLCB2YWx1ZS5nZXREYXRlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBfZmlsdGVyVHlwZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcImRhdGVcIixcbiAgICAgIH0sXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBkYXRlcGlja2VyRm9jdXMoKSB7XG4gICAgdGhpcy5kYXRlUGlja2VyLmFkanVzdFBvc2l0aW9uKCk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIC8vIFdlIGFyZSB1bmFibGUgdG8gcGFyc2UgZGF0ZSBiZWNhdXNlIHdlIHVzZSBpbnRsIGFwaSB0byByZW5kZXIgZGF0ZVxuICAgIHRoaXMuJC5waWNrZXIuc2V0KFwiaTE4bi5wYXJzZURhdGVcIiwgbnVsbCk7XG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLmZvcm1hdERhdGVcIiwgKGRhdGUpID0+XG4gICAgICBmb3JtYXREYXRlKG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLCB0aGlzLmhhc3MubGFuZ3VhZ2UpXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhcnRUaW1lKF9jdXJyZW50RGF0ZSkge1xuICAgIGlmICghX2N1cnJlbnREYXRlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJ0cyA9IF9jdXJyZW50RGF0ZS5zcGxpdChcIi1cIik7XG4gICAgcGFydHNbMV0gPSBwYXJzZUludChwYXJ0c1sxXSkgLSAxO1xuICAgIHJldHVybiBuZXcgRGF0ZShwYXJ0c1swXSwgcGFydHNbMV0sIHBhcnRzWzJdKTtcbiAgfVxuXG4gIF9jb21wdXRlRW5kVGltZShfY3VycmVudERhdGUsIHBlcmlvZEluZGV4KSB7XG4gICAgdmFyIHN0YXJ0VGltZSA9IHRoaXMuX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKTtcbiAgICB2YXIgZW5kVGltZSA9IG5ldyBEYXRlKHN0YXJ0VGltZSk7XG4gICAgZW5kVGltZS5zZXREYXRlKHN0YXJ0VGltZS5nZXREYXRlKCkgKyB0aGlzLl9jb21wdXRlRmlsdGVyRGF5cyhwZXJpb2RJbmRleCkpO1xuICAgIHJldHVybiBlbmRUaW1lO1xuICB9XG5cbiAgX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSB7XG4gICAgc3dpdGNoIChwZXJpb2RJbmRleCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIDc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtaGlzdG9yeVwiLCBIYVBhbmVsSGlzdG9yeSk7XG4iLCJjb25zdCBkb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbmRvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZTtcIik7XG5cbmRvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLXZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXJcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0KFtyZXF1aXJlZF0pIFtwYXJ0fj1cImNsZWFyLWJ1dHRvblwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbb3BlbmVkXSkgW3BhcnR+PVwidG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItdGV4dC1maWVsZC1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tcGFwZXItZm9udC1jYXB0aW9uXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9mb250LXdlaWdodCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9sZXR0ZXItc3BhY2luZyk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9saW5lLWhlaWdodCk7XG4gICAgICB9XG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImxhYmVsXCJdIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydH49XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWZvY3VzLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICBbcGFydH49XCJ2YWx1ZVwiXTpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInZhbHVlXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLWJ1dHRvbi1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbcGFydH49XCJ0b2RheS1idXR0b25cIl0pIFtwYXJ0fj1cImJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLipr9cIjtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl0ge1xuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LXN1YmhlYWRfLV9mb250LXNpemUpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tbWluLWhlaWdodCwgNDhweCk7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiYnV0dG9uXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cInRvb2xiYXJcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwLjNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS0yMDApO1xuICAgICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48ZG9tLW1vZHVsZSBpZD1cImhhLWRhdGUtcGlja2VyLW1vbnRoLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tbW9udGgtY2FsZW5kYXItZGVmYXVsdC10aGVtZVwiPlxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydD1cImRhdGVcIl1bZm9jdXNlZF0sXG4gICAgICBbcGFydD1cImRhdGVcIl1bc2VsZWN0ZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItZ3JleS0yMDApO1xuICAgICAgfVxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0lBOzs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFnSkE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXZMQTtBQUNBO0FBMEZBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBekNBO0FBK0NBOzs7O0FBOUlBO0FBQ0E7QUEwTEE7Ozs7Ozs7Ozs7O0FDcE5BO0FBQ0E7QUFFQTtBQW9IQTs7OztBIiwic291cmNlUm9vdCI6IiJ9