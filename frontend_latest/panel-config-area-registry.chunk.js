(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-area-registry"],{

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

/***/ "./src/components/ha-fab.ts":
/*!**********************************!*\
  !*** ./src/components/ha-fab.ts ***!
  \**********************************/
/*! exports provided: HaFab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFab", function() { return HaFab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_mwc_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-fab */ "./node_modules/@material/mwc-fab/mwc-fab.js");




// tslint:disable-next-line
const MwcFab = customElements.get("mwc-fab");
let HaFab = class HaFab extends MwcFab {
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    render() {
        const classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        const showLabel = this.label !== "" && this.extended;
        return _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <button
        .ripple="${Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])()}"
        class="mdc-fab ${Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label || this.icon}"
      >
        ${showLabel && this.showIconAtEnd ? this.label : ""}
        ${this.icon
            ? _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <ha-icon .icon=${this.icon}></ha-icon>
            `
            : ""}
        ${showLabel && !this.showIconAtEnd ? this.label : ""}
      </button>
    `;
    }
};
HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
], HaFab);



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

/***/ "./src/panels/config/area_registry/ha-config-area-registry.ts":
/*!********************************************************************!*\
  !*** ./src/panels/config/area_registry/ha-config-area-registry.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-dialog-area-registry-detail */ "./src/panels/config/area_registry/show-dialog-area-registry-detail.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");













class HaConfigAreaRegistry extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._unsubAreas) {
            this._unsubAreas();
        }
    }
    render() {
        if (!this.hass || this._areas === undefined) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <hass-loading-screen></hass-loading-screen>
      `;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <hass-subpage
        header="${this.hass.localize("ui.panel.config.area_registry.caption")}"
      >
        <ha-config-section .isWide=${this.isWide}>
          <span slot="header">
            ${this.hass.localize("ui.panel.config.area_registry.picker.header")}
          </span>
          <span slot="introduction">
            ${this.hass.localize("ui.panel.config.area_registry.picker.introduction")}
            <p>
              ${this.hass.localize("ui.panel.config.area_registry.picker.introduction2")}
            </p>
            <a href="/config/integrations/dashboard">
              ${this.hass.localize("ui.panel.config.area_registry.picker.integrations_page")}
            </a>
          </span>
          <ha-card>
            ${this._areas.map((entry) => {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                <paper-item @click=${this._openEditEntry} .entry=${entry}>
                  <paper-item-body>
                    ${entry.name}
                  </paper-item-body>
                </paper-item>
              `;
        })}
            ${this._areas.length === 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                  <div class="empty">
                    ${this.hass.localize("ui.panel.config.area_registry.no_areas")}
                    <mwc-button @click=${this._createArea}>
                      ${this.hass.localize("ui.panel.config.area_registry.create_area")}
                    </mwc-button>
                  </div>
                `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``}
          </ha-card>
        </ha-config-section>
      </hass-subpage>

      <ha-fab
        ?is-wide=${this.isWide}
        icon="hass:plus"
        title="${this.hass.localize("ui.panel.config.area_registry.create_area")}"
        @click=${this._createArea}
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_11__["classMap"])({
            rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_12__["computeRTL"])(this.hass),
        })}"
      ></ha-fab>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        Object(_show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_10__["loadAreaRegistryDetailDialog"])();
    }
    updated(changedProps) {
        super.updated(changedProps);
        if (!this._unsubAreas) {
            this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_4__["subscribeAreaRegistry"])(this.hass.connection, (areas) => {
                this._areas = areas;
            });
        }
    }
    _createArea() {
        this._openDialog();
    }
    _openEditEntry(ev) {
        const entry = ev.currentTarget.entry;
        this._openDialog(entry);
    }
    _openDialog(entry) {
        Object(_show_dialog_area_registry_detail__WEBPACK_IMPORTED_MODULE_10__["showAreaRegistryDetailDialog"])(this, {
            entry,
            createEntry: async (values) => Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_4__["createAreaRegistryEntry"])(this.hass, values),
            updateEntry: async (values) => Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_4__["updateAreaRegistryEntry"])(this.hass, entry.area_id, values),
            removeEntry: async () => {
                if (!confirm(`Are you sure you want to delete this area?

All devices in this area will become unassigned.`)) {
                    return false;
                }
                try {
                    await Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_4__["deleteAreaRegistryEntry"])(this.hass, entry.area_id);
                    return true;
                }
                catch (err) {
                    return false;
                }
            },
        });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      a {
        color: var(--primary-color);
      }
      ha-card {
        max-width: 600px;
        margin: 16px auto;
        overflow: hidden;
      }
      .empty {
        text-align: center;
      }
      paper-item {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      ha-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
      }

      ha-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }

      ha-fab.rtl {
        right: auto;
        left: 16px;
      }

      ha-fab[is-wide].rtl {
        bottom: 24px;
        right: auto;
        left: 24px;
      }
    `;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaConfigAreaRegistry.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaConfigAreaRegistry.prototype, "isWide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], HaConfigAreaRegistry.prototype, "_areas", void 0);
customElements.define("ha-config-area-registry", HaConfigAreaRegistry);


/***/ }),

/***/ "./src/panels/config/area_registry/show-dialog-area-registry-detail.ts":
/*!*****************************************************************************!*\
  !*** ./src/panels/config/area_registry/show-dialog-area-registry-detail.ts ***!
  \*****************************************************************************/
/*! exports provided: loadAreaRegistryDetailDialog, showAreaRegistryDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAreaRegistryDetailDialog", function() { return loadAreaRegistryDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAreaRegistryDetailDialog", function() { return showAreaRegistryDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadAreaRegistryDetailDialog = () => Promise.all(/*! import() | area-registry-detail-dialog */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~area-registry-detail-dialog"), __webpack_require__.e("area-registry-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-area-registry-detail */ "./src/panels/config/area_registry/dialog-area-registry-detail.ts"));
const showAreaRegistryDetailDialog = (element, systemLogDetailParams) => {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-area-registry-detail",
        dialogImport: loadAreaRegistryDetailDialog,
        dialogParams: systemLogDetailParams,
    });
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWFyZWEtcmVnaXN0cnkuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hcmVhX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2FyZWFfcmVnaXN0cnkvaGEtY29uZmlnLWFyZWEtcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvYXJlYV9yZWdpc3RyeS9zaG93LWRpYWxvZy1hcmVhLXJlZ2lzdHJ5LWRldGFpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT4ge1xuICBpZiAoYSA8IGIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgaWYgKGEgPiBiKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICByZXR1cm4gMDtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXNlSW5zZW5zaXRpdmVDb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PlxuICBjb21wYXJlKGEudG9Mb3dlckNhc2UoKSwgYi50b0xvd2VyQ2FzZSgpKTtcbiIsIi8vIEZyb206IGh0dHBzOi8vZGF2aWR3YWxzaC5uYW1lL2phdmFzY3JpcHQtZGVib3VuY2UtZnVuY3Rpb25cblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uLCB0aGF0LCBhcyBsb25nIGFzIGl0IGNvbnRpbnVlcyB0byBiZSBpbnZva2VkLCB3aWxsIG5vdFxuLy8gYmUgdHJpZ2dlcmVkLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaXQgc3RvcHMgYmVpbmcgY2FsbGVkIGZvclxuLy8gTiBtaWxsaXNlY29uZHMuIElmIGBpbW1lZGlhdGVgIGlzIHBhc3NlZCwgdHJpZ2dlciB0aGUgZnVuY3Rpb24gb24gdGhlXG4vLyBsZWFkaW5nIGVkZ2UsIGluc3RlYWQgb2YgdGhlIHRyYWlsaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBiYW4tdHlwZXNcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IDxUIGV4dGVuZHMgRnVuY3Rpb24+KFxuICBmdW5jOiBULFxuICB3YWl0LFxuICBpbW1lZGlhdGUgPSBmYWxzZVxuKTogVCA9PiB7XG4gIGxldCB0aW1lb3V0O1xuICAvLyBAdHMtaWdub3JlXG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGU6bm8tdGhpcy1hc3NpZ25tZW50XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoZWFkZXI/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGEtY2FyZC1ib3JkZXItcmFkaXVzLCAycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJveC1zaGFkb3csXG4gICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKVxuICAgICAgICApO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1oZWFkZXIpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWNvbG9yLCAtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1zaXplLCAyNHB4KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudDpub3QoOmZpcnN0LWNoaWxkKSksXG4gICAgICBzbG90Om5vdCg6Zmlyc3QtY2hpbGQpOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oZWFkZXJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+JHt0aGlzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBgfVxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FyZFwiLCBIYUNhcmQpO1xuIiwiaW1wb3J0IHtcbiAgY2xhc3NNYXAsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENvbnN0cnVjdG9yLFxufSBmcm9tIFwiQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudFwiO1xuaW1wb3J0IHsgcmlwcGxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmUuanNcIjtcblxuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgRmFiIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtZmFiXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IE13Y0ZhYiA9IGN1c3RvbUVsZW1lbnRzLmdldChcIm13Yy1mYWJcIikgYXMgQ29uc3RydWN0b3I8RmFiPjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1mYWJcIilcbmV4cG9ydCBjbGFzcyBIYUZhYiBleHRlbmRzIE13Y0ZhYiB7XG4gIC8vIFdlIG92ZXJyaWRlIHRoZSByZW5kZXIgbWV0aG9kIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbiBpY29uIGZvbnQgYW5kIG13Yy1mYWIgZG9lc24ndCBzdXBwb3J0IG91ciBzdmctaWNvbiBzZXRzLlxuICAvLyBCYXNlZCBvbiB2ZXJzaW9uIG13Yy1mYWIgMC44XG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFwibWRjLWZhYi0tbWluaVwiOiB0aGlzLm1pbmksXG4gICAgICBcIm1kYy1mYWItLWV4aXRlZFwiOiB0aGlzLmV4aXRlZCxcbiAgICAgIFwibWRjLWZhYi0tZXh0ZW5kZWRcIjogdGhpcy5leHRlbmRlZCxcbiAgICB9O1xuICAgIGNvbnN0IHNob3dMYWJlbCA9IHRoaXMubGFiZWwgIT09IFwiXCIgJiYgdGhpcy5leHRlbmRlZDtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxidXR0b25cbiAgICAgICAgLnJpcHBsZT1cIiR7cmlwcGxlKCl9XCJcbiAgICAgICAgY2xhc3M9XCJtZGMtZmFiICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCJcbiAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCIke3RoaXMubGFiZWwgfHwgdGhpcy5pY29ufVwiXG4gICAgICA+XG4gICAgICAgICR7c2hvd0xhYmVsICYmIHRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgICAke3RoaXMuaWNvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWljb24gLmljb249JHt0aGlzLmljb259PjwvaGEtaWNvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c2hvd0xhYmVsICYmICF0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogXCJcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWZhYlwiOiBIYUZhYjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSxcbiAgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnksXG4gIGNyZWF0ZUFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3MtbG9hZGluZy1zY3JlZW5cIjtcbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5pbXBvcnQge1xuICBzaG93QXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxuICBsb2FkQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1hcmVhLXJlZ2lzdHJ5LWRldGFpbFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuY2xhc3MgSGFDb25maWdBcmVhUmVnaXN0cnkgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaXNXaWRlPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXJlYXM/OiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuICBwcml2YXRlIF91bnN1YkFyZWFzPzogVW5zdWJzY3JpYmVGdW5jO1xuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkFyZWFzKSB7XG4gICAgICB0aGlzLl91bnN1YkFyZWFzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8IHRoaXMuX2FyZWFzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2VcbiAgICAgICAgaGVhZGVyPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuYXJlYV9yZWdpc3RyeS5jYXB0aW9uXCIpfVwiXG4gICAgICA+XG4gICAgICAgIDxoYS1jb25maWctc2VjdGlvbiAuaXNXaWRlPSR7dGhpcy5pc1dpZGV9PlxuICAgICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkucGlja2VyLmhlYWRlclwiKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkucGlja2VyLmludHJvZHVjdGlvblwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkucGlja2VyLmludHJvZHVjdGlvbjJcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25maWcvaW50ZWdyYXRpb25zL2Rhc2hib2FyZFwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5hcmVhX3JlZ2lzdHJ5LnBpY2tlci5pbnRlZ3JhdGlvbnNfcGFnZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgJHt0aGlzLl9hcmVhcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX29wZW5FZGl0RW50cnl9IC5lbnRyeT0ke2VudHJ5fT5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgJHt0aGlzLl9hcmVhcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkubm9fYXJlYXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jcmVhdGVBcmVhfT5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmFyZWFfcmVnaXN0cnkuY3JlYXRlX2FyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L2hhLWNvbmZpZy1zZWN0aW9uPlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG5cbiAgICAgIDxoYS1mYWJcbiAgICAgICAgP2lzLXdpZGU9JHt0aGlzLmlzV2lkZX1cbiAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgIHRpdGxlPVwiJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuYXJlYV9yZWdpc3RyeS5jcmVhdGVfYXJlYVwiXG4gICAgICAgICl9XCJcbiAgICAgICAgQGNsaWNrPSR7dGhpcy5fY3JlYXRlQXJlYX1cbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICBydGw6IGNvbXB1dGVSVEwodGhpcy5oYXNzKSxcbiAgICAgICAgfSl9XCJcbiAgICAgID48L2hhLWZhYj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBsb2FkQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCF0aGlzLl91bnN1YkFyZWFzKSB7XG4gICAgICB0aGlzLl91bnN1YkFyZWFzID0gc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KFxuICAgICAgICB0aGlzLmhhc3MuY29ubmVjdGlvbixcbiAgICAgICAgKGFyZWFzKSA9PiB7XG4gICAgICAgICAgdGhpcy5fYXJlYXMgPSBhcmVhcztcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVBcmVhKCkge1xuICAgIHRoaXMuX29wZW5EaWFsb2coKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5FZGl0RW50cnkoZXY6IE1vdXNlRXZlbnQpIHtcbiAgICBjb25zdCBlbnRyeTogQXJlYVJlZ2lzdHJ5RW50cnkgPSAoZXYuY3VycmVudFRhcmdldCEgYXMgYW55KS5lbnRyeTtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKGVudHJ5KTtcbiAgfVxuICBwcml2YXRlIF9vcGVuRGlhbG9nKGVudHJ5PzogQXJlYVJlZ2lzdHJ5RW50cnkpIHtcbiAgICBzaG93QXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nKHRoaXMsIHtcbiAgICAgIGVudHJ5LFxuICAgICAgY3JlYXRlRW50cnk6IGFzeW5jICh2YWx1ZXMpID0+XG4gICAgICAgIGNyZWF0ZUFyZWFSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcyEsIHZhbHVlcyksXG4gICAgICB1cGRhdGVFbnRyeTogYXN5bmMgKHZhbHVlcykgPT5cbiAgICAgICAgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkodGhpcy5oYXNzISwgZW50cnkhLmFyZWFfaWQsIHZhbHVlcyksXG4gICAgICByZW1vdmVFbnRyeTogYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhcmVhP1xuXG5BbGwgZGV2aWNlcyBpbiB0aGlzIGFyZWEgd2lsbCBiZWNvbWUgdW5hc3NpZ25lZC5gKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcyEsIGVudHJ5IS5hcmVhX2lkKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5lbXB0eSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgIH1cblxuICAgICAgaGEtZmFiW2lzLXdpZGVdLnJ0bCB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctYXJlYS1yZWdpc3RyeVwiLCBIYUNvbmZpZ0FyZWFSZWdpc3RyeSk7XG4iLCJpbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zLFxufSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zIHtcbiAgZW50cnk/OiBBcmVhUmVnaXN0cnlFbnRyeTtcbiAgY3JlYXRlRW50cnk6ICh2YWx1ZXM6IEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcykgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgdXBkYXRlRW50cnk6IChcbiAgICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbiAgKSA9PiBQcm9taXNlPHVua25vd24+O1xuICByZW1vdmVFbnRyeTogKCkgPT4gUHJvbWlzZTxib29sZWFuPjtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRBcmVhUmVnaXN0cnlEZXRhaWxEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJhcmVhLXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLWFyZWEtcmVnaXN0cnktZGV0YWlsXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0FyZWFSZWdpc3RyeURldGFpbERpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHN5c3RlbUxvZ0RldGFpbFBhcmFtczogQXJlYVJlZ2lzdHJ5RGV0YWlsRGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctYXJlYS1yZWdpc3RyeS1kZXRhaWxcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWRBcmVhUmVnaXN0cnlEZXRhaWxEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zOiBzeXN0ZW1Mb2dEZXRhaWxQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFTQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBOERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUEzQkE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBV0E7QUFTQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFRQTtBQUNBO0FBR0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFJQTs7O0FBS0E7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBR0E7QUFDQTs7O0FBS0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7QUFDQTtBQUNBO0FBaExBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWdMQTs7Ozs7Ozs7Ozs7OztBQ25OQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=