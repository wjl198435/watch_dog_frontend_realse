(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-server-control"],{

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);

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






var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-progress-button\n        id=\"progress\"\n        progress=\"[[progress]]\"\n        on-click=\"buttonTapped\"\n        ><slot></slot\n      ></ha-progress-button>\n    "]);

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





/*
 * @appliesMixin EventsMixin
 */

var HaCallServiceButton =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaCallServiceButton, _EventsMixin);

  function HaCallServiceButton() {
    _classCallCheck(this, HaCallServiceButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCallServiceButton).apply(this, arguments));
  }

  _createClass(HaCallServiceButton, [{
    key: "buttonTapped",
    value: function buttonTapped() {
      if (this.confirmation && !window.confirm(this.confirmation)) {
        return;
      }

      this.progress = true;
      var el = this;
      var eventData = {
        domain: this.domain,
        service: this.service,
        serviceData: this.serviceData
      };
      this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
        el.progress = false;
        el.$.progress.actionSuccess();
        eventData.success = true;
      }, function () {
        el.progress = false;
        el.$.progress.actionError();
        eventData.success = false;
      }).then(function () {
        el.fire("hass-service-called", eventData);
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        progress: {
          type: Boolean,
          value: false
        },
        domain: {
          type: String
        },
        service: {
          type: String
        },
        serviceData: {
          type: Object,
          value: {}
        },
        confirmation: {
          type: String
        }
      };
    }
  }]);

  return HaCallServiceButton;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-call-service-button", HaCallServiceButton);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$=\"[[computeContentClasses(isWide)]]\">\n        <div class=\"header\"><slot name=\"header\"></slot></div>\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <div class=\"intro\"><slot name=\"introduction\"></slot></div>\n          <div class=\"panel flex-auto\"><slot></slot></div>\n        </div>\n      </div>\n    "]);

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





var HaConfigSection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigSection, _PolymerElement);

  function HaConfigSection() {
    _classCallCheck(this, HaConfigSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSection).apply(this, arguments));
  }

  _createClass(HaConfigSection, [{
    key: "computeContentClasses",
    value: function computeContentClasses(isWide) {
      var classes = "content ";
      return isWide ? classes : classes + "narrow";
    }
  }, {
    key: "computeClasses",
    value: function computeClasses(isWide) {
      var classes = "together layout ";
      return classes + (isWide ? "horizontal" : "vertical narrow");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        narrow: {
          type: Boolean
        },
        isWide: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigSection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-config-section", HaConfigSection);

/***/ }),

/***/ "./src/panels/config/server_control/ha-config-section-server-control.js":
/*!******************************************************************************!*\
  !*** ./src/panels/config/server_control/ha-config-section-server-control.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .validate-container {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          height: 140px;\n        }\n\n        .validate-result {\n          color: var(--google-green-500);\n          font-weight: 500;\n          margin-bottom: 1em;\n        }\n\n        .config-invalid {\n          margin: 1em 0;\n        }\n\n        .config-invalid .text {\n          color: var(--google-red-500);\n          font-weight: 500;\n        }\n\n        .config-invalid mwc-button {\n          float: right;\n        }\n\n        .validate-log {\n          white-space: pre-wrap;\n          direction: ltr;\n        }\n      </style>\n      <ha-config-section is-wide=\"[[isWide]]\">\n        <span slot=\"header\"\n          >[[localize('ui.panel.config.server_control.caption')]]</span\n        >\n        <span slot=\"introduction\"\n          >[[localize('ui.panel.config.server_control.description')]]</span\n        >\n\n        <template is=\"dom-if\" if=\"[[showAdvanced]]\">\n          <ha-card\n            header=\"[[localize('ui.panel.config.server_control.section.validation.heading')]]\"\n          >\n            <div class=\"card-content\">\n              [[localize('ui.panel.config.server_control.section.validation.introduction')]]\n              <template is=\"dom-if\" if=\"[[!validateLog]]\">\n                <div class=\"validate-container\">\n                  <template is=\"dom-if\" if=\"[[!validating]]\">\n                    <template is=\"dom-if\" if=\"[[isValid]]\">\n                      <div class=\"validate-result\" id=\"result\">\n                        [[localize('ui.panel.config.server_control.section.validation.valid')]]\n                      </div>\n                    </template>\n                    <mwc-button raised=\"\" on-click=\"validateConfig\">\n                      [[localize('ui.panel.config.server_control.section.validation.check_config')]]\n                    </mwc-button>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[validating]]\">\n                    <paper-spinner active=\"\"></paper-spinner>\n                  </template>\n                </div>\n              </template>\n              <template is=\"dom-if\" if=\"[[validateLog]]\">\n                <div class=\"config-invalid\">\n                  <span class=\"text\">\n                    [[localize('ui.panel.config.server_control.section.validation.invalid')]]\n                  </span>\n                  <mwc-button raised=\"\" on-click=\"validateConfig\">\n                    [[localize('ui.panel.config.server_control.section.validation.check_config')]]\n                  </mwc-button>\n                </div>\n                <div id=\"configLog\" class=\"validate-log\">[[validateLog]]</div>\n              </template>\n            </div>\n          </ha-card>\n\n          <ha-card\n            header=\"[[localize('ui.panel.config.server_control.section.reloading.heading')]]\"\n          >\n            <div class=\"card-content\">\n              [[localize('ui.panel.config.server_control.section.reloading.introduction')]]\n            </div>\n            <div class=\"card-actions\">\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"homeassistant\"\n                service=\"reload_core_config\"\n                >[[localize('ui.panel.config.server_control.section.reloading.core')]]\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"group\"\n                service=\"reload\"\n                hidden$=\"[[!groupLoaded(hass)]]\"\n                >[[localize('ui.panel.config.server_control.section.reloading.group')]]\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"automation\"\n                service=\"reload\"\n                hidden$=\"[[!automationLoaded(hass)]]\"\n                >[[localize('ui.panel.config.server_control.section.reloading.automation')]]\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"script\"\n                service=\"reload\"\n                hidden$=\"[[!scriptLoaded(hass)]]\"\n                >[[localize('ui.panel.config.server_control.section.reloading.script')]]\n              </ha-call-service-button>\n              <ha-call-service-button\n                hass=\"[[hass]]\"\n                domain=\"scene\"\n                service=\"reload\"\n                hidden$=\"[[!sceneLoaded(hass)]]\"\n                >[[localize('ui.panel.config.server_control.section.reloading.scene')]]\n              </ha-call-service-button>\n            </div>\n          </ha-card>\n        </template>\n        <ha-card\n          header=\"[[localize('ui.panel.config.server_control.section.server_management.heading')]]\"\n        >\n          <div class=\"card-content\">\n            [[localize('ui.panel.config.server_control.section.server_management.introduction')]]\n          </div>\n          <div class=\"card-actions warning\">\n            <ha-call-service-button\n              class=\"warning\"\n              hass=\"[[hass]]\"\n              domain=\"homeassistant\"\n              service=\"restart\"\n              confirmation=\"[[localize('ui.panel.config.server_control.section.server_management.confirm_restart')]]\"\n              >[[localize('ui.panel.config.server_control.section.server_management.restart')]]\n            </ha-call-service-button>\n            <ha-call-service-button\n              class=\"warning\"\n              hass=\"[[hass]]\"\n              domain=\"homeassistant\"\n              service=\"stop\"\n              confirmation=\"[[localize('ui.panel.config.server_control.section.server_management.confirm_stop')]]\"\n              >[[localize('ui.panel.config.server_control.section.server_management.stop')]]\n            </ha-call-service-button>\n          </div>\n        </ha-card>\n      </ha-config-section>\n    "]);

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











/*
 * @appliesMixin LocalizeMixin
 */

var HaConfigSectionServerControl =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigSectionServerControl, _LocalizeMixin);

  function HaConfigSectionServerControl() {
    _classCallCheck(this, HaConfigSectionServerControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSectionServerControl).apply(this, arguments));
  }

  _createClass(HaConfigSectionServerControl, [{
    key: "groupLoaded",
    value: function groupLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "group");
    }
  }, {
    key: "automationLoaded",
    value: function automationLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "automation");
    }
  }, {
    key: "scriptLoaded",
    value: function scriptLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "script");
    }
  }, {
    key: "sceneLoaded",
    value: function sceneLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(hass, "scene");
    }
  }, {
    key: "validateConfig",
    value: function validateConfig() {
      var _this = this;

      this.validating = true;
      this.validateLog = "";
      this.isValid = null;
      this.hass.callApi("POST", "config/core/check_config").then(function (result) {
        _this.validating = false;
        _this.isValid = result.result === "valid";

        if (!_this.isValid) {
          _this.validateLog = result.errors;
        }
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        isWide: {
          type: Boolean,
          value: false
        },
        validating: {
          type: Boolean,
          value: false
        },
        isValid: {
          type: Boolean,
          value: null
        },
        validateLog: {
          type: String,
          value: ""
        },
        showAdvanced: Boolean
      };
    }
  }]);

  return HaConfigSectionServerControl;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-config-section-server-control", HaConfigSectionServerControl);

/***/ }),

/***/ "./src/panels/config/server_control/ha-config-server-control.js":
/*!**********************************************************************!*\
  !*** ./src/panels/config/server_control/ha-config-server-control.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_config_section_server_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-config-section-server-control */ "./src/panels/config/server_control/ha-config-section-server-control.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding-bottom: 32px;\n        }\n\n        .border {\n          margin: 32px auto 0;\n          border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n          max-width: 1040px;\n        }\n\n        .narrow .border {\n          max-width: 640px;\n        }\n      </style>\n\n      <hass-subpage\n        header=\"[[localize('ui.panel.config.server_control.caption')]]\"\n      >\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <ha-config-section-server-control\n            is-wide=\"[[isWide]]\"\n            show-advanced=\"[[showAdvanced]]\"\n            hass=\"[[hass]]\"\n          ></ha-config-section-server-control>\n        </div>\n      </hass-subpage>\n    "]);

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










/*
 * @appliesMixin LocalizeMixin
 */

var HaConfigServerControl =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigServerControl, _LocalizeMixin);

  function HaConfigServerControl() {
    _classCallCheck(this, HaConfigServerControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigServerControl).apply(this, arguments));
  }

  _createClass(HaConfigServerControl, [{
    key: "computeClasses",
    value: function computeClasses(isWide) {
      return isWide ? "content" : "content narrow";
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        isWide: Boolean,
        showAdvanced: Boolean
      };
    }
  }]);

  return HaConfigServerControl;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-config-server-control", HaConfigServerControl);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNlcnZlci1jb250cm9sLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25zL2hhLWNhbGwtc2VydmljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9oYS1jb25maWctc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zZXJ2ZXJfY29udHJvbC9oYS1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9zZXJ2ZXJfY29udHJvbC9oYS1jb25maWctc2VydmVyLWNvbnRyb2wuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcHJvZ3Jlc3MtYnV0dG9uXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FsbFNlcnZpY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXByb2dyZXNzLWJ1dHRvblxuICAgICAgICBpZD1cInByb2dyZXNzXCJcbiAgICAgICAgcHJvZ3Jlc3M9XCJbW3Byb2dyZXNzXV1cIlxuICAgICAgICBvbi1jbGljaz1cImJ1dHRvblRhcHBlZFwiXG4gICAgICAgID48c2xvdD48L3Nsb3RcbiAgICAgID48L2hhLXByb2dyZXNzLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGRvbWFpbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuXG4gICAgICBzZXJ2aWNlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG5cbiAgICAgIHNlcnZpY2VEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgfSxcblxuICAgICAgY29uZmlybWF0aW9uOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGJ1dHRvblRhcHBlZCgpIHtcbiAgICBpZiAodGhpcy5jb25maXJtYXRpb24gJiYgIXdpbmRvdy5jb25maXJtKHRoaXMuY29uZmlybWF0aW9uKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb2dyZXNzID0gdHJ1ZTtcbiAgICB2YXIgZWwgPSB0aGlzO1xuICAgIHZhciBldmVudERhdGEgPSB7XG4gICAgICBkb21haW46IHRoaXMuZG9tYWluLFxuICAgICAgc2VydmljZTogdGhpcy5zZXJ2aWNlLFxuICAgICAgc2VydmljZURhdGE6IHRoaXMuc2VydmljZURhdGEsXG4gICAgfTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxTZXJ2aWNlKHRoaXMuZG9tYWluLCB0aGlzLnNlcnZpY2UsIHRoaXMuc2VydmljZURhdGEpXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwucHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgICBlbC4kLnByb2dyZXNzLmFjdGlvblN1Y2Nlc3MoKTtcbiAgICAgICAgICBldmVudERhdGEuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVsLnByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgICAgZWwuJC5wcm9ncmVzcy5hY3Rpb25FcnJvcigpO1xuICAgICAgICAgIGV2ZW50RGF0YS5zdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBlbC5maXJlKFwiaGFzcy1zZXJ2aWNlLWNhbGxlZFwiLCBldmVudERhdGEpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiLCBIYUNhbGxTZXJ2aWNlQnV0dG9uKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbi8qKlxuICogUG9seW1lciBNaXhpbiB0byBlbmFibGUgYSBsb2NhbGl6ZSBmdW5jdGlvbiBwb3dlcmVkIGJ5IGxhbmd1YWdlL3Jlc291cmNlcyBmcm9tIGhhc3Mgb2JqZWN0LlxuICpcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBUcmFuc2xhdGVzIGEgc3RyaW5nIHRvIHRoZSBjdXJyZW50IGBsYW5ndWFnZWAuIEFueSBwYXJhbWV0ZXJzIHRvIHRoZVxuICAgICAgICAgICAqIHN0cmluZyBzaG91bGQgYmUgcGFzc2VkIGluIG9yZGVyLCBhcyBmb2xsb3dzOlxuICAgICAgICAgICAqIGBsb2NhbGl6ZShzdHJpbmdLZXksIHBhcmFtMU5hbWUsIHBhcmFtMVZhbHVlLCBwYXJhbTJOYW1lLCBwYXJhbTJWYWx1ZSlgXG4gICAgICAgICAgICovXG4gICAgICAgICAgbG9jYWxpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgY29tcHV0ZWQ6IFwiX19jb21wdXRlTG9jYWxpemUoaGFzcy5sb2NhbGl6ZSlcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBfX2NvbXB1dGVMb2NhbGl6ZShsb2NhbGl6ZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemU7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCBcIi4uL2hhLWNvbmZpZy1zZWN0aW9uXCI7XG5cbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdTZWN0aW9uU2VydmVyQ29udHJvbCBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGhhLXN0eWxlXCI+XG4gICAgICAgIC52YWxpZGF0ZS1jb250YWluZXIge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyLWNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYXRlLXJlc3VsdCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1ncmVlbi01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbmZpZy1pbnZhbGlkIHtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbmZpZy1pbnZhbGlkIC50ZXh0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlnLWludmFsaWQgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbGlkYXRlLWxvZyB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9XCJbW2lzV2lkZV1dXCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJoZWFkZXJcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuY2FwdGlvbicpXV08L3NwYW5cbiAgICAgICAgPlxuICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLmRlc2NyaXB0aW9uJyldXTwvc3BhblxuICAgICAgICA+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dBZHZhbmNlZF1dXCI+XG4gICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24uaGVhZGluZycpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24udmFsaWRhdGlvbi5pbnRyb2R1Y3Rpb24nKV1dXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shdmFsaWRhdGVMb2ddXVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWxpZGF0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shdmFsaWRhdGluZ11dXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpc1ZhbGlkXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsaWRhdGUtcmVzdWx0XCIgaWQ9XCJyZXN1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24udmFsaWQnKV1dXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD1cIlwiIG9uLWNsaWNrPVwidmFsaWRhdGVDb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi52YWxpZGF0aW9uLmNoZWNrX2NvbmZpZycpXV1cbiAgICAgICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1t2YWxpZGF0aW5nXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPVwiXCI+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3ZhbGlkYXRlTG9nXV1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29uZmlnLWludmFsaWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi52YWxpZGF0aW9uLmludmFsaWQnKV1dXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiByYWlzZWQ9XCJcIiBvbi1jbGljaz1cInZhbGlkYXRlQ29uZmlnXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnZhbGlkYXRpb24uY2hlY2tfY29uZmlnJyldXVxuICAgICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb25maWdMb2dcIiBjbGFzcz1cInZhbGlkYXRlLWxvZ1wiPltbdmFsaWRhdGVMb2ddXTwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuXG4gICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5oZWFkaW5nJyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuc2VjdGlvbi5yZWxvYWRpbmcuaW50cm9kdWN0aW9uJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJob21lYXNzaXN0YW50XCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkX2NvcmVfY29uZmlnXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24ucmVsb2FkaW5nLmNvcmUnKV1dXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cImdyb3VwXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shZ3JvdXBMb2FkZWQoaGFzcyldXVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5ncm91cCcpXV1cbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgICA8aGEtY2FsbC1zZXJ2aWNlLWJ1dHRvblxuICAgICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgICAgZG9tYWluPVwiYXV0b21hdGlvblwiXG4gICAgICAgICAgICAgICAgc2VydmljZT1cInJlbG9hZFwiXG4gICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIWF1dG9tYXRpb25Mb2FkZWQoaGFzcyldXVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5hdXRvbWF0aW9uJyldXVxuICAgICAgICAgICAgICA8L2hhLWNhbGwtc2VydmljZS1idXR0b24+XG4gICAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBkb21haW49XCJzY3JpcHRcIlxuICAgICAgICAgICAgICAgIHNlcnZpY2U9XCJyZWxvYWRcIlxuICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFzY3JpcHRMb2FkZWQoaGFzcyldXVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5zY3JpcHQnKV1dXG4gICAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPGhhLWNhbGwtc2VydmljZS1idXR0b25cbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGRvbWFpbj1cInNjZW5lXCJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVsb2FkXCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shc2NlbmVMb2FkZWQoaGFzcyldXVwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnJlbG9hZGluZy5zY2VuZScpXV1cbiAgICAgICAgICAgICAgPC9oYS1jYWxsLXNlcnZpY2UtYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8aGEtY2FyZFxuICAgICAgICAgIGhlYWRlcj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LmhlYWRpbmcnKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LmludHJvZHVjdGlvbicpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIHdhcm5pbmdcIj5cbiAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRvbWFpbj1cImhvbWVhc3Npc3RhbnRcIlxuICAgICAgICAgICAgICBzZXJ2aWNlPVwicmVzdGFydFwiXG4gICAgICAgICAgICAgIGNvbmZpcm1hdGlvbj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LmNvbmZpcm1fcmVzdGFydCcpXV1cIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24uc2VydmVyX21hbmFnZW1lbnQucmVzdGFydCcpXV1cbiAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICAgIDxoYS1jYWxsLXNlcnZpY2UtYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRvbWFpbj1cImhvbWVhc3Npc3RhbnRcIlxuICAgICAgICAgICAgICBzZXJ2aWNlPVwic3RvcFwiXG4gICAgICAgICAgICAgIGNvbmZpcm1hdGlvbj1cIltbbG9jYWxpemUoJ3VpLnBhbmVsLmNvbmZpZy5zZXJ2ZXJfY29udHJvbC5zZWN0aW9uLnNlcnZlcl9tYW5hZ2VtZW50LmNvbmZpcm1fc3RvcCcpXV1cIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwuY29uZmlnLnNlcnZlcl9jb250cm9sLnNlY3Rpb24uc2VydmVyX21hbmFnZW1lbnQuc3RvcCcpXV1cbiAgICAgICAgICAgIDwvaGEtY2FsbC1zZXJ2aWNlLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICB2YWxpZGF0aW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGlzVmFsaWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICB2YWxpZGF0ZUxvZzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgc2hvd0FkdmFuY2VkOiBCb29sZWFuLFxuICAgIH07XG4gIH1cblxuICBncm91cExvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwiZ3JvdXBcIik7XG4gIH1cblxuICBhdXRvbWF0aW9uTG9hZGVkKGhhc3MpIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJhdXRvbWF0aW9uXCIpO1xuICB9XG5cbiAgc2NyaXB0TG9hZGVkKGhhc3MpIHtcbiAgICByZXR1cm4gaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJzY3JpcHRcIik7XG4gIH1cblxuICBzY2VuZUxvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwic2NlbmVcIik7XG4gIH1cblxuICB2YWxpZGF0ZUNvbmZpZygpIHtcbiAgICB0aGlzLnZhbGlkYXRpbmcgPSB0cnVlO1xuICAgIHRoaXMudmFsaWRhdGVMb2cgPSBcIlwiO1xuICAgIHRoaXMuaXNWYWxpZCA9IG51bGw7XG5cbiAgICB0aGlzLmhhc3MuY2FsbEFwaShcIlBPU1RcIiwgXCJjb25maWcvY29yZS9jaGVja19jb25maWdcIikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICB0aGlzLnZhbGlkYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNWYWxpZCA9IHJlc3VsdC5yZXN1bHQgPT09IFwidmFsaWRcIjtcblxuICAgICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUxvZyA9IHJlc3VsdC5lcnJvcnM7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLWNvbmZpZy1zZWN0aW9uLXNlcnZlci1jb250cm9sXCIsXG4gIEhhQ29uZmlnU2VjdGlvblNlcnZlckNvbnRyb2xcbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGFzcy1zdWJwYWdlXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcblxuaW1wb3J0IFwiLi9oYS1jb25maWctc2VjdGlvbi1zZXJ2ZXItY29udHJvbFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFDb25maWdTZXJ2ZXJDb250cm9sIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaGEtc3R5bGVcIj5cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvcmRlciB7XG4gICAgICAgICAgbWFyZ2luOiAzMnB4IGF1dG8gMDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXJyb3cgLmJvcmRlciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhc3Mtc3VicGFnZVxuICAgICAgICBoZWFkZXI9XCJbW2xvY2FsaXplKCd1aS5wYW5lbC5jb25maWcuc2VydmVyX2NvbnRyb2wuY2FwdGlvbicpXV1cIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzZXMoaXNXaWRlKV1dXCI+XG4gICAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uLXNlcnZlci1jb250cm9sXG4gICAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgICAgICBzaG93LWFkdmFuY2VkPVwiW1tzaG93QWR2YW5jZWRdXVwiXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgID48L2hhLWNvbmZpZy1zZWN0aW9uLXNlcnZlci1jb250cm9sPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGlzV2lkZTogQm9vbGVhbixcbiAgICAgIHNob3dBZHZhbmNlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgcmV0dXJuIGlzV2lkZSA/IFwiY29udGVudFwiIDogXCJjb250ZW50IG5hcnJvd1wiO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbmZpZy1zZXJ2ZXItY29udHJvbFwiLCBIYUNvbmZpZ1NlcnZlckNvbnRyb2wpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBeUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBRUE7QUFFQTtBQUxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUF0RUE7QUFDQTtBQVFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQXZCQTtBQTJCQTs7OztBQXhDQTtBQUNBO0FBeUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFtQkE7QUFDQTtBQXBCQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBYUE7QUFoQkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQXhGQTtBQUNBO0FBMERBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBOzs7O0FBN0VBO0FBQ0E7QUEyRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXNMQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBbE5BO0FBQ0E7QUFvSkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBekJBO0FBMkJBOzs7O0FBcExBO0FBQ0E7QUFxTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7OztBQTFDQTtBQUNBO0FBNkJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQXZDQTtBQUNBO0FBNkNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=