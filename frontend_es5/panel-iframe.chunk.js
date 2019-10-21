(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-iframe"],{

/***/ "./src/panels/iframe/ha-panel-iframe.js":
/*!**********************************************!*\
  !*** ./src/panels/iframe/ha-panel-iframe.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        iframe {\n          border: 0;\n          width: 100%;\n          height: calc(100% - 64px);\n        }\n      </style>\n      <app-toolbar>\n        <ha-menu-button hass=\"[[hass]]\" narrow=\"[[narrow]]\"></ha-menu-button>\n        <div main-title>[[panel.title]]</div>\n      </app-toolbar>\n\n      <iframe\n        src=\"[[panel.config.url]]\"\n        sandbox=\"allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts\"\n        allowfullscreen=\"true\"\n        webkitallowfullscreen=\"true\"\n        mozallowfullscreen=\"true\"\n      ></iframe>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var HaPanelIframe =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaPanelIframe, _PolymerElement);

  function HaPanelIframe() {
    _classCallCheck(this, HaPanelIframe);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelIframe).apply(this, arguments));
  }

  _createClass(HaPanelIframe, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        narrow: Boolean,
        panel: Object
      };
    }
  }]);

  return HaPanelIframe;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-panel-iframe", HaPanelIframe);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtaWZyYW1lLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9pZnJhbWUvaGEtcGFuZWwtaWZyYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWVudS1idXR0b25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYVBhbmVsSWZyYW1lIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICBpZnJhbWUge1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8aGEtbWVudS1idXR0b24gaGFzcz1cIltbaGFzc11dXCIgbmFycm93PVwiW1tuYXJyb3ddXVwiPjwvaGEtbWVudS1idXR0b24+XG4gICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW3BhbmVsLnRpdGxlXV08L2Rpdj5cbiAgICAgIDwvYXBwLXRvb2xiYXI+XG5cbiAgICAgIDxpZnJhbWVcbiAgICAgICAgc3JjPVwiW1twYW5lbC5jb25maWcudXJsXV1cIlxuICAgICAgICBzYW5kYm94PVwiYWxsb3ctZm9ybXMgYWxsb3ctcG9wdXBzIGFsbG93LXBvaW50ZXItbG9jayBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcbiAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiXG4gICAgICAgIHdlYmtpdGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIlxuICAgICAgICBtb3phbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCJcbiAgICAgID48L2lmcmFtZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgICBwYW5lbDogT2JqZWN0LFxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtaWZyYW1lXCIsIEhhUGFuZWxJZnJhbWUpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBcUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQS9CQTtBQUNBO0FBaUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=