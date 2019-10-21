(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-kiosk"],{

/***/ "./src/panels/kiosk/ha-panel-kiosk.js":
/*!********************************************!*\
  !*** ./src/panels/kiosk/ha-panel-kiosk.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _states_ha_panel_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/ha-panel-states */ "./src/panels/states/ha-panel-states.js");





class HaPanelKiosk extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-panel-states
        id="kiosk-states"
        hass="[[hass]]"
        show-menu
        route="[[route]]"
        panel-visible
      ></ha-panel-states>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: Object,
    };
  }
}

customElements.define("ha-panel-kiosk", HaPanelKiosk);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwta2lvc2suY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2tpb3NrL2hhLXBhbmVsLWtpb3NrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL3N0YXRlcy9oYS1wYW5lbC1zdGF0ZXNcIjtcblxuY2xhc3MgSGFQYW5lbEtpb3NrIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXBhbmVsLXN0YXRlc1xuICAgICAgICBpZD1cImtpb3NrLXN0YXRlc1wiXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHNob3ctbWVudVxuICAgICAgICByb3V0ZT1cIltbcm91dGVdXVwiXG4gICAgICAgIHBhbmVsLXZpc2libGVcbiAgICAgID48L2hhLXBhbmVsLXN0YXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwta2lvc2tcIiwgSGFQYW5lbEtpb3NrKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9