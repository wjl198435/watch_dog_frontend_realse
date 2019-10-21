(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-history"],{

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






















/*
 * @appliesMixin LocalizeMixin
 */
class HaPanelHistory extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_9__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_8__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 0 16px 16px;
        }

        vaadin-date-picker {
          margin-right: 16px;
          max-width: 200px;
        }

        paper-dropdown-menu {
          max-width: 100px;
          margin-top: 13px;
          margin-right: 16px;
          --paper-input-container-label-floating: {
            padding-bottom: 10px;
          }
        }

        :host([rtl]) paper-dropdown-menu {
          text-align: right;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <ha-state-history-data
        hass="[[hass]]"
        filter-type="[[_filterType]]"
        start-time="[[_computeStartTime(_currentDate)]]"
        end-time="[[endTime]]"
        data="{{stateHistory}}"
        is-loading="{{isLoadingData}}"
      ></ha-state-history-data>
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title>[[localize('panel.history')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div class="flex layout horizontal wrap">
            <vaadin-date-picker
              id="picker"
              value="{{_currentDate}}"
              label="[[localize('ui.panel.history.showing_entries')]]"
              disabled="[[isLoadingData]]"
              required
            ></vaadin-date-picker>

            <paper-dropdown-menu
              label-float
              label="[[localize('ui.panel.history.period')]]"
              disabled="[[isLoadingData]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_periodIndex}}"
              >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 1)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.day', 'count', 3)]]</paper-item
                >
                <paper-item
                  >[[localize('ui.duration.week', 'count', 1)]]</paper-item
                >
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[isLoadingData]]"
            end-time="[[endTime]]"
            no-single
          >
          </state-history-charts>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,

      stateHistory: {
        type: Object,
        value: null,
      },

      _periodIndex: {
        type: Number,
        value: 0,
      },

      isLoadingData: {
        type: Boolean,
        value: false,
      },

      endTime: {
        type: Object,
        computed: "_computeEndTime(_currentDate, _periodIndex)",
      },

      // ISO8601 formatted date string
      _currentDate: {
        type: String,
        value: function() {
          var value = new Date();
          var today = new Date(
            Date.UTC(value.getFullYear(), value.getMonth(), value.getDate())
          );
          return today.toISOString().split("T")[0];
        },
      },

      _filterType: {
        type: String,
        value: "date",
      },

      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  datepickerFocus() {
    this.datePicker.adjustPosition();
  }

  connectedCallback() {
    super.connectedCallback();
    // We are unable to parse date because we use intl api to render date
    this.$.picker.set("i18n.parseDate", null);
    this.$.picker.set("i18n.formatDate", (date) =>
      Object(_common_datetime_format_date__WEBPACK_IMPORTED_MODULE_16__["default"])(new Date(date.year, date.month, date.day), this.hass.language)
    );
  }

  _computeStartTime(_currentDate) {
    if (!_currentDate) return undefined;
    var parts = _currentDate.split("-");
    parts[1] = parseInt(parts[1]) - 1;
    return new Date(parts[0], parts[1], parts[2]);
  }

  _computeEndTime(_currentDate, periodIndex) {
    var startTime = this._computeStartTime(_currentDate);
    var endTime = new Date(startTime);
    endTime.setDate(startTime.getDate() + this._computeFilterDays(periodIndex));
    return endTime;
  }

  _computeFilterDays(periodIndex) {
    switch (periodIndex) {
      case 1:
        return 3;
      case 2:
        return 7;
      default:
        return 1;
    }
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_18__["computeRTL"])(hass);
  }
}

customElements.define("ha-panel-history", HaPanelHistory);


/***/ }),

/***/ "./src/resources/ha-date-picker-style.js":
/*!***********************************************!*\
  !*** ./src/resources/ha-date-picker-style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");

documentContainer.innerHTML = `<dom-module id="ha-date-picker-vaadin-date-picker-styles" theme-for="vaadin-date-picker">
  <template>
    <style>
      :host([required]) [part~="clear-button"] {
        display: none;
      }

      [part~="toggle-button"] {
        color: var(--secondary-text-color);
        font-size: var(--paper-font-subhead_-_font-size);
        margin-right: 5px;
      }

      :host([opened]) [part~="toggle-button"] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-text-field-styles" theme-for="vaadin-text-field">
  <template>
    <style>
      :host {
        padding: 8px 0;
      }

      [part~="label"] {
        color: var(--paper-input-container-color, var(--secondary-text-color));
        font-family: var(--paper-font-caption_-_font-family);
        font-size: var(--paper-font-caption_-_font-size);
        font-weight: var(--paper-font-caption_-_font-weight);
        letter-spacing: var(--paper-font-caption_-_letter-spacing);
        line-height: var(--paper-font-caption_-_line-height);
      }
      :host([focused]) [part~="label"] {
          color: var(--paper-input-container-focus-color, var(--primary-color));
      }

      [part~="input-field"] {
        padding-bottom: 1px;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        line-height: var(--paper-font-subhead_-_line-height);
      }

      :host([focused]) [part~="input-field"] {
        padding-bottom: 0;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));
      }
      [part~="value"]:focus {
        outline: none;
      }

      [part~="value"] {
        font-size: var(--paper-font-subhead_-_font-size);
        font-family: inherit;
        color: inherit;
        border: none;
        background: transparent;
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-button-styles" theme-for="vaadin-button">
  <template>
    <style>
      :host([part~="today-button"]) [part~="button"]::before {
        content: "⦿";
        color: var(--primary-color);
      }

      [part~="button"] {
        font-family: inherit;
        font-size: var(--paper-font-subhead_-_font-size);
        border: none;
        background: transparent;
        cursor: pointer;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
        color: inherit;
      }

      [part~="button"]:focus {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="vaadin-date-picker-overlay-default-theme">
      :host {
        background-color: var(--paper-card-background-color, var(--primary-background-color));
      }

      [part~="toolbar"] {
        padding: 0.3em;
        background-color: var(--secondary-background-color);
      }

      [part="years"] {
        background-color: var(--paper-grey-200);
      }

    </style>
  </template>
</dom-module><dom-module id="ha-date-picker-month-styles" theme-for="vaadin-month-calendar">
  <template>
    <style include="vaadin-month-calendar-default-theme">
      :host([focused]) [part="date"][focused],
      [part="date"][selected] {
        background-color: var(--paper-grey-200);
      }
      [part="date"][today] {
        color: var(--primary-color);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild(documentContainer.content);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaGlzdG9yeS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfb2JqZWN0X2lkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2hpc3RvcnkvaGEtcGFuZWwtaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2hhLWRhdGUtcGlja2VyLXN0eWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb21wdXRlIHRoZSBvYmplY3QgSUQgb2YgYSBzdGF0ZS4gKi9cbmV4cG9ydCBjb25zdCBjb21wdXRlT2JqZWN0SWQgPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoZW50aXR5SWQuaW5kZXhPZihcIi5cIikgKyAxKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlU3RhdGVEb21haW4gPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgcmV0dXJuIGNvbXB1dGVEb21haW4oc3RhdGVPYmouZW50aXR5X2lkKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4vY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZU5hbWUgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5mcmllbmRseV9uYW1lID09PSB1bmRlZmluZWRcbiAgICA/IGNvbXB1dGVPYmplY3RJZChzdGF0ZU9iai5lbnRpdHlfaWQpLnJlcGxhY2UoL18vZywgXCIgXCIpXG4gICAgOiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgfHwgXCJcIjtcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuaW1wb3J0IFwiQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdmFhZGluLWRhdGUtcGlja2VyXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uLy4uL2RhdGEvaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtZGF0ZS1waWNrZXItc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFQYW5lbEhpc3RvcnkgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICB2YWFkaW4tZGF0ZS1waWNrZXIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci1sYWJlbC1mbG9hdGluZzoge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIHBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtc3RhdGUtaGlzdG9yeS1kYXRhXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIGZpbHRlci10eXBlPVwiW1tfZmlsdGVyVHlwZV1dXCJcbiAgICAgICAgc3RhcnQtdGltZT1cIltbX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKV1dXCJcbiAgICAgICAgZW5kLXRpbWU9XCJbW2VuZFRpbWVdXVwiXG4gICAgICAgIGRhdGE9XCJ7e3N0YXRlSGlzdG9yeX19XCJcbiAgICAgICAgaXMtbG9hZGluZz1cInt7aXNMb2FkaW5nRGF0YX19XCJcbiAgICAgID48L2hhLXN0YXRlLWhpc3RvcnktZGF0YT5cbiAgICAgIDxhcHAtaGVhZGVyLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj5cbiAgICAgICAgPGFwcC1oZWFkZXIgc2xvdD1cImhlYWRlclwiIGZpeGVkPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPltbbG9jYWxpemUoJ3BhbmVsLmhpc3RvcnknKV1dPC9kaXY+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBsYXlvdXQgaG9yaXpvbnRhbCB3cmFwXCI+XG4gICAgICAgICAgICA8dmFhZGluLWRhdGUtcGlja2VyXG4gICAgICAgICAgICAgIGlkPVwicGlja2VyXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e19jdXJyZW50RGF0ZX19XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5oaXN0b3J5LnNob3dpbmdfZW50cmllcycpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nRGF0YV1dXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cblxuICAgICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5oaXN0b3J5LnBlcmlvZCcpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbaXNMb2FkaW5nRGF0YV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJ7e19wZXJpb2RJbmRleH19XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtXG4gICAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuZHVyYXRpb24uZGF5JywgJ2NvdW50JywgMSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmR1cmF0aW9uLmRheScsICdjb3VudCcsIDMpXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kdXJhdGlvbi53ZWVrJywgJ2NvdW50JywgMSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0c1xuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIGhpc3RvcnktZGF0YT1cIltbc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tpc0xvYWRpbmdEYXRhXV1cIlxuICAgICAgICAgICAgZW5kLXRpbWU9XCJbW2VuZFRpbWVdXVwiXG4gICAgICAgICAgICBuby1zaW5nbGVcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9zdGF0ZS1oaXN0b3J5LWNoYXJ0cz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIG5hcnJvdzogQm9vbGVhbixcblxuICAgICAgc3RhdGVIaXN0b3J5OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBfcGVyaW9kSW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGlzTG9hZGluZ0RhdGE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgZW5kVGltZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRW5kVGltZShfY3VycmVudERhdGUsIF9wZXJpb2RJbmRleClcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIElTTzg2MDEgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gICAgICBfY3VycmVudERhdGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgIERhdGUuVVRDKHZhbHVlLmdldEZ1bGxZZWFyKCksIHZhbHVlLmdldE1vbnRoKCksIHZhbHVlLmdldERhdGUoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIF9maWx0ZXJUeXBlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiZGF0ZVwiLFxuICAgICAgfSxcblxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGRhdGVwaWNrZXJGb2N1cygpIHtcbiAgICB0aGlzLmRhdGVQaWNrZXIuYWRqdXN0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gV2UgYXJlIHVuYWJsZSB0byBwYXJzZSBkYXRlIGJlY2F1c2Ugd2UgdXNlIGludGwgYXBpIHRvIHJlbmRlciBkYXRlXG4gICAgdGhpcy4kLnBpY2tlci5zZXQoXCJpMThuLnBhcnNlRGF0ZVwiLCBudWxsKTtcbiAgICB0aGlzLiQucGlja2VyLnNldChcImkxOG4uZm9ybWF0RGF0ZVwiLCAoZGF0ZSkgPT5cbiAgICAgIGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIHRoaXMuaGFzcy5sYW5ndWFnZSlcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGFydFRpbWUoX2N1cnJlbnREYXRlKSB7XG4gICAgaWYgKCFfY3VycmVudERhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcnRzID0gX2N1cnJlbnREYXRlLnNwbGl0KFwiLVwiKTtcbiAgICBwYXJ0c1sxXSA9IHBhcnNlSW50KHBhcnRzWzFdKSAtIDE7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHBhcnRzWzBdLCBwYXJ0c1sxXSwgcGFydHNbMl0pO1xuICB9XG5cbiAgX2NvbXB1dGVFbmRUaW1lKF9jdXJyZW50RGF0ZSwgcGVyaW9kSW5kZXgpIHtcbiAgICB2YXIgc3RhcnRUaW1lID0gdGhpcy5fY29tcHV0ZVN0YXJ0VGltZShfY3VycmVudERhdGUpO1xuICAgIHZhciBlbmRUaW1lID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgICBlbmRUaW1lLnNldERhdGUoc3RhcnRUaW1lLmdldERhdGUoKSArIHRoaXMuX2NvbXB1dGVGaWx0ZXJEYXlzKHBlcmlvZEluZGV4KSk7XG4gICAgcmV0dXJuIGVuZFRpbWU7XG4gIH1cblxuICBfY29tcHV0ZUZpbHRlckRheXMocGVyaW9kSW5kZXgpIHtcbiAgICBzd2l0Y2ggKHBlcmlvZEluZGV4KSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gNztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYW5lbC1oaXN0b3J5XCIsIEhhUGFuZWxIaXN0b3J5KTtcbiIsImNvbnN0IGRvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lO1wiKTtcblxuZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3QoW3JlcXVpcmVkXSkgW3BhcnR+PVwiY2xlYXItYnV0dG9uXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fZm9udC1zaXplKTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtvcGVuZWRdKSBbcGFydH49XCJ0b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+PGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci10ZXh0LWZpZWxkLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi10ZXh0LWZpZWxkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJsYWJlbFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsIHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wYXBlci1mb250LWNhcHRpb25fLV9mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1jYXB0aW9uXy1fZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtY2FwdGlvbl8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnR+PVwibGFiZWxcIl0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1zdWJoZWFkXy1fbGluZS1oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0fj1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYXBlci1pbnB1dC1jb250YWluZXItZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgIH1cbiAgICAgIFtwYXJ0fj1cInZhbHVlXCJdOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidmFsdWVcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItYnV0dG9uLXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1idXR0b25cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0KFtwYXJ0fj1cInRvZGF5LWJ1dHRvblwiXSkgW3BhcnR+PVwiYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIuKmv1wiO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImJ1dHRvblwiXSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXBhcGVyLWZvbnQtc3ViaGVhZF8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogdmFyKC0tcGFwZXItaXRlbS1taW4taGVpZ2h0LCA0OHB4KTtcbiAgICAgICAgcGFkZGluZzogMHB4IDE2cHg7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJidXR0b25cIl06Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+PGRvbS1tb2R1bGUgaWQ9XCJoYS1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWRlZmF1bHQtdGhlbWVcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwidG9vbGJhclwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTIwMCk7XG4gICAgICB9XG5cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPjxkb20tbW9kdWxlIGlkPVwiaGEtZGF0ZS1waWNrZXItbW9udGgtc3R5bGVzXCIgdGhlbWUtZm9yPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi1tb250aC1jYWxlbmRhci1kZWZhdWx0LXRoZW1lXCI+XG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0PVwiZGF0ZVwiXVtmb2N1c2VkXSxcbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtzZWxlY3RlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1ncmV5LTIwMCk7XG4gICAgICB9XG4gICAgICBbcGFydD1cImRhdGVcIl1bdG9kYXldIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChkb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9