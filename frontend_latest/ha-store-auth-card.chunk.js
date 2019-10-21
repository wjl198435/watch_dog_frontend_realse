(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-store-auth-card"],{

/***/ "./src/dialogs/ha-store-auth-card.js":
/*!*******************************************!*\
  !*** ./src/dialogs/ha-store-auth-card.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-card/paper-card */ "./node_modules/@polymer/paper-card/paper-card.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/ha-style */ "./src/resources/ha-style.ts");









class HaStoreAuth extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        paper-card {
          position: fixed;
          padding: 8px 0;
          bottom: 16px;
          right: 16px;
        }

        .card-content {
          color: var(--primary-text-color);
        }

        .card-actions {
          text-align: right;
          border-top: 0;
          margin-right: -4px;
        }

        :host(.small) paper-card {
          bottom: 0;
          left: 0;
          right: 0;
        }
      </style>
      <paper-card elevation="4">
        <div class="card-content">[[localize('ui.auth_store.ask')]]</div>
        <div class="card-actions">
          <mwc-button on-click="_done"
            >[[localize('ui.auth_store.decline')]]</mwc-button
          >
          <mwc-button raised on-click="_save"
            >[[localize('ui.auth_store.confirm')]]</mwc-button
          >
        </div>
      </paper-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
    };
  }

  ready() {
    super.ready();
    this.classList.toggle("small", window.innerWidth < 600);
  }

  _save() {
    Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_3__["enableWrite"])();
    this._done();
  }

  _done() {
    const card = this.shadowRoot.querySelector("paper-card");
    card.style.transition = "bottom .25s";
    card.style.bottom = `-${card.offsetHeight + 8}px`;
    setTimeout(() => this.parentNode.removeChild(this), 300);
  }
}

customElements.define("ha-store-auth-card", HaStoreAuth);


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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtc3RvcmUtYXV0aC1jYXJkLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvaGEtc3RvcmUtYXV0aC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbG9jYWxpemUtbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBlbmFibGVXcml0ZSB9IGZyb20gXCIuLi9jb21tb24vYXV0aC90b2tlbl9zdG9yYWdlXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCBcIi4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYVN0b3JlQXV0aCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGVcIj5cbiAgICAgICAgcGFwZXItY2FyZCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdCguc21hbGwpIHBhcGVyLWNhcmQge1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHBhcGVyLWNhcmQgZWxldmF0aW9uPVwiNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+W1tsb2NhbGl6ZSgndWkuYXV0aF9zdG9yZS5hc2snKV1dPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9kb25lXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5hdXRoX3N0b3JlLmRlY2xpbmUnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZCBvbi1jbGljaz1cIl9zYXZlXCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5hdXRoX3N0b3JlLmNvbmZpcm0nKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcGFwZXItY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwic21hbGxcIiwgd2luZG93LmlubmVyV2lkdGggPCA2MDApO1xuICB9XG5cbiAgX3NhdmUoKSB7XG4gICAgZW5hYmxlV3JpdGUoKTtcbiAgICB0aGlzLl9kb25lKCk7XG4gIH1cblxuICBfZG9uZSgpIHtcbiAgICBjb25zdCBjYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJwYXBlci1jYXJkXCIpO1xuICAgIGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYm90dG9tIC4yNXNcIjtcbiAgICBjYXJkLnN0eWxlLmJvdHRvbSA9IGAtJHtjYXJkLm9mZnNldEhlaWdodCArIDh9cHhgO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpLCAzMDApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0b3JlLWF1dGgtY2FyZFwiLCBIYVN0b3JlQXV0aCk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9