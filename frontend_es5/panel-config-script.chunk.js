(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-script"],{

/***/ "./src/data/script.ts":
/*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
/*! exports provided: triggerScript, deleteScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerScript", function() { return triggerScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScript", function() { return deleteScript; });
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");

var triggerScript = function (hass, entityId, variables) { return hass.callService("script", Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(entityId), variables); };
var deleteScript = function (hass, objectId) {
    return hass.callApi("DELETE", "config/script/config/" + objectId);
};


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
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
        key: "navigate",
        value: function navigate() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"].apply(void 0, [this].concat(args));
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/config/js/script.tsx":
/*!*****************************************!*\
  !*** ./src/panels/config/js/script.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.tsx");






var ScriptEditor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ScriptEditor, _super);
    function ScriptEditor() {
        var _this = _super.call(this) || this;
        _this.onChange = _this.onChange.bind(_this);
        _this.sequenceChanged = _this.sequenceChanged.bind(_this);
        return _this;
    }
    ScriptEditor.prototype.onChange = function (ev) {
        var _a;
        this.props.onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.script), (_a = {}, _a[ev.target.name] = ev.target.value, _a)));
    };
    ScriptEditor.prototype.sequenceChanged = function (sequence) {
        this.props.onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.script), { sequence: sequence }));
    };
    // @ts-ignore
    ScriptEditor.prototype.render = function (_a) {
        var script = _a.script, isWide = _a.isWide, hass = _a.hass, localize = _a.localize;
        var alias = script.alias, sequence = script.sequence;
        return (Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", null,
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "header" }, alias),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "introduction" }, "Use scripts to execute a sequence of actions."),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-card", null,
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("div", { class: "card-content" },
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("paper-input", { label: "Name", name: "alias", value: alias, "onvalue-changed": this.onChange })))),
            Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("ha-config-section", { "is-wide": isWide },
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "header" }, "Sequence"),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("span", { slot: "introduction" },
                    "The sequence of actions of this script.",
                    Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("p", null,
                        Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])("a", { href: "https://home-assistant.io/docs/scripts/", target: "_blank" }, "Learn more about available actions."))),
                Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_5__["default"], { script: sequence, onChange: this.sequenceChanged, hass: hass, localize: localize }))));
    };
    return ScriptEditor;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ScriptEditor);


/***/ }),

/***/ "./src/panels/config/script/ha-config-script.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-config-script.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_script_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-script-editor */ "./src/panels/config/script/ha-script-editor.js");
/* harmony import */ var _ha_script_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-script-picker */ "./src/panels/config/script/ha-script-picker.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-script-picker,\n        ha-script-editor {\n          height: 100%;\n        }\n      </style>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/edit/:script\"\n        data=\"{{_routeData}}\"\n        active=\"{{_edittingScript}}\"\n      ></app-route>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/new\"\n        active=\"{{_creatingNew}}\"\n      ></app-route>\n\n      <template is=\"dom-if\" if=\"[[!showEditor]]\">\n        <ha-script-picker\n          hass=\"[[hass]]\"\n          scripts=\"[[scripts]]\"\n          is-wide=\"[[isWide]]\"\n        ></ha-script-picker>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[showEditor]]\" restamp=\"\">\n        <ha-script-editor\n          hass=\"[[hass]]\"\n          script=\"[[script]]\"\n          is-wide=\"[[isWide]]\"\n          creating-new=\"[[_creatingNew]]\"\n        ></ha-script-editor>\n      </template>\n    "]);

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









var HaConfigScript =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigScript, _PolymerElement);

  function HaConfigScript() {
    _classCallCheck(this, HaConfigScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigScript).apply(this, arguments));
  }

  _createClass(HaConfigScript, [{
    key: "computeScript",
    value: function computeScript(scripts, edittingAddon, routeData) {
      if (!scripts || !edittingAddon) {
        return null;
      }

      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].entity_id === routeData.script) {
          return scripts[i];
        }
      }

      return null;
    }
  }, {
    key: "computeScripts",
    value: function computeScripts(hass) {
      var scripts = [];
      Object.keys(hass.states).forEach(function (key) {
        var entity = hass.states[key];

        if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(entity) === "script") {
          scripts.push(entity);
        }
      });
      return scripts.sort(function entitySortBy(entityA, entityB) {
        var nameA = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entityA);
        var nameB = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(entityB);

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
  }, {
    key: "computeShowEditor",
    value: function computeShowEditor(_edittingScript, _creatingNew) {
      return _creatingNew || _edittingScript;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        route: Object,
        isWide: Boolean,
        _routeData: Object,
        _routeMatches: Boolean,
        _creatingNew: Boolean,
        _edittingScript: Boolean,
        scripts: {
          type: Array,
          computed: "computeScripts(hass)"
        },
        script: {
          type: Object,
          computed: "computeScript(scripts, _edittingScript, _routeData)"
        },
        showEditor: {
          type: Boolean,
          computed: "computeShowEditor(_edittingScript, _creatingNew)"
        }
      };
    }
  }]);

  return HaConfigScript;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-config-script", HaConfigScript);

/***/ }),

/***/ "./src/panels/config/script/ha-script-editor.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-editor.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/script */ "./src/panels/config/js/script.tsx");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .errors {\n          padding: 20px;\n          font-weight: bold;\n          color: var(--google-red-500);\n        }\n        .content {\n          padding-bottom: 20px;\n        }\n        .triggers,\n        .script {\n          margin-top: -16px;\n        }\n        .triggers ha-card,\n        .script ha-card {\n          margin-top: 16px;\n        }\n        .add-card mwc-button {\n          display: block;\n          text-align: center;\n        }\n        .card-menu {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n          color: var(--primary-text-color);\n        }\n        .card-menu paper-item {\n          cursor: pointer;\n        }\n        span[slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n          margin-bottom: -80px;\n          transition: margin-bottom 0.3s;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[dirty] {\n          margin-bottom: 0;\n        }\n\n        ha-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      </style>\n      <ha-app-layout has-scrolling-region=\"\">\n        <app-header slot=\"header\" fixed=\"\">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click=\"backTapped\"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title>[[computeHeader(script)]]</div>\n            <template is=\"dom-if\" if=\"[[!creatingNew]]\">\n              <paper-icon-button\n                icon=\"hass:delete\"\n                on-click=\"_delete\"\n              ></paper-icon-button>\n            </template>\n          </app-toolbar>\n        </app-header>\n        <div class=\"content\">\n          <template is=\"dom-if\" if=\"[[errors]]\">\n            <div class=\"errors\">[[errors]]</div>\n          </template>\n          <div id=\"root\"></div>\n        </div>\n        <ha-fab\n          slot=\"fab\"\n          is-wide$=\"[[isWide]]\"\n          dirty$=\"[[dirty]]\"\n          icon=\"hass:content-save\"\n          title=\"[[localize('ui.common.save')]]\"\n          on-click=\"saveScript\"\n          rtl$=\"[[rtl]]\"\n        ></ha-fab>\n      </ha-app-layout>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



















function ScriptEditor(mountEl, props, mergeEl) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_5__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_5__["h"])(_js_script__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin NavigateMixin
 */


var HaScriptEditor =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaScriptEditor, _LocalizeMixin);

  function HaScriptEditor() {
    _classCallCheck(this, HaScriptEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaScriptEditor).apply(this, arguments));
  }

  _createClass(HaScriptEditor, [{
    key: "ready",
    value: function ready() {
      this.configChanged = this.configChanged.bind(this);

      _get(_getPrototypeOf(HaScriptEditor.prototype), "ready", this).call(this); // This call will initialize preact.

    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaScriptEditor.prototype), "disconnectedCallback", this).call(this);

      if (this._rendered) {
        Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
        this._rendered = null;
      }
    }
  }, {
    key: "configChanged",
    value: function configChanged(config) {
      // onChange gets called a lot during initial rendering causing recursing calls.
      if (this._rendered === null) return;
      this.config = config;
      this.errors = null;
      this.dirty = true;

      this._updateComponent();
    }
  }, {
    key: "scriptChanged",
    value: function scriptChanged(newVal, oldVal) {
      var _this = this;

      if (!newVal) return;

      if (!this.hass) {
        setTimeout(function () {
          return _this.scriptChanged(newVal, oldVal);
        }, 0);
        return;
      }

      if (oldVal && oldVal.entity_id === newVal.entity_id) {
        return;
      }

      this.hass.callApi("get", "config/script/config/" + Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["computeObjectId"])(newVal.entity_id)).then(function (config) {
        // Normalize data: ensure sequence is a list
        // Happens when people copy paste their scripts into the config
        var value = config.sequence;

        if (value && !Array.isArray(value)) {
          config.sequence = [value];
        }

        _this.dirty = false;
        _this.config = config;

        _this._updateComponent();
      }, function () {
        alert(_this.hass.localize("ui.panel.config.script.editor.load_error_not_editable"));
        history.back();
      });
    }
  }, {
    key: "creatingNewChanged",
    value: function creatingNewChanged(newVal) {
      if (!newVal) {
        return;
      }

      this.dirty = false;
      this.config = {
        alias: this.hass.localize("ui.panel.config.script.editor.default_name"),
        sequence: [{
          service: "",
          data: {}
        }]
      };

      this._updateComponent();
    }
  }, {
    key: "backTapped",
    value: function backTapped() {
      if (this.dirty && // eslint-disable-next-line
      !confirm(this.hass.localize("ui.panel.config.common.editor.confirm_unsaved"))) {
        return;
      }

      history.back();
    }
  }, {
    key: "_updateComponent",
    value: function _updateComponent() {
      var _this2 = this;

      if (this._renderScheduled || !this.hass || !this.config) return;
      this._renderScheduled = true;
      Promise.resolve().then(function () {
        _this2._rendered = ScriptEditor(_this2.$.root, {
          script: _this2.config,
          onChange: _this2.configChanged,
          isWide: _this2.isWide,
          hass: _this2.hass,
          localize: _this2.localize
        }, _this2._rendered);
        _this2._renderScheduled = false;
      });
    }
  }, {
    key: "_delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (confirm(this.hass.localize("ui.panel.config.script.editor.delete_confirm"))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return Object(_data_script__WEBPACK_IMPORTED_MODULE_16__["deleteScript"])(this.hass, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["computeObjectId"])(this.script.entity_id));

              case 4:
                history.back();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "saveScript",
    value: function saveScript() {
      var _this3 = this;

      var id = this.creatingNew ? "" + Date.now() : Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["computeObjectId"])(this.script.entity_id);
      this.hass.callApi("post", "config/script/config/" + id, this.config).then(function () {
        _this3.dirty = false;

        if (_this3.creatingNew) {
          _this3.navigate("/config/script/edit/".concat(id), true);
        }
      }, function (errors) {
        _this3.errors = errors.body.message;
        throw errors;
      });
    }
  }, {
    key: "computeHeader",
    value: function computeHeader(script) {
      return script ? this.hass.localize("ui.panel.config.script.editor.header", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__["computeStateName"])(script)) : this.hass.localize("ui.panel.config.script.editor.default_name");
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
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
        hass: {
          type: Object
        },
        errors: {
          type: Object,
          value: null
        },
        dirty: {
          type: Boolean,
          value: false
        },
        config: {
          type: Object,
          value: null
        },
        script: {
          type: Object,
          observer: "scriptChanged"
        },
        creatingNew: {
          type: Boolean,
          observer: "creatingNewChanged"
        },
        isWide: {
          type: Boolean,
          observer: "_updateComponent"
        },
        _rendered: {
          type: Object,
          value: null
        },
        _renderScheduled: {
          type: Boolean,
          value: false
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return HaScriptEditor;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-script-editor", HaScriptEditor);

/***/ }),

/***/ "./src/panels/config/script/ha-script-picker.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-picker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");













var HaScriptPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaScriptPicker, _super);
    function HaScriptPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaScriptPicker.prototype.render = function () {
        var _this = this;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage\n        .header=", "\n      >\n        <ha-config-section .isWide=", ">\n          <div slot=\"header\">\n            ", "\n          </div>\n          <div slot=\"introduction\">\n            ", "\n            <p>\n              <a\n                href=\"https://home-assistant.io/docs/scripts/editor/\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </p>\n          </div>\n\n          <ha-card\n            header=\"", "\"\n          >\n            ", "\n          </ha-card>\n        </ha-config-section>\n\n        <a href=\"/config/script/new\">\n          <ha-fab\n            slot=\"fab\"\n            ?is-wide=", "\n            icon=\"hass:plus\"\n            title=\"", "\"\n            ?rtl=", "\n          ></ha-fab>\n        </a>\n      </hass-subpage>\n    "], ["\n      <hass-subpage\n        .header=", "\n      >\n        <ha-config-section .isWide=", ">\n          <div slot=\"header\">\n            ", "\n          </div>\n          <div slot=\"introduction\">\n            ", "\n            <p>\n              <a\n                href=\"https://home-assistant.io/docs/scripts/editor/\"\n                target=\"_blank\"\n              >\n                ",
            "\n              </a>\n            </p>\n          </div>\n\n          <ha-card\n            header=\"",
            "\"\n          >\n            ",
            "\n          </ha-card>\n        </ha-config-section>\n\n        <a href=\"/config/script/new\">\n          <ha-fab\n            slot=\"fab\"\n            ?is-wide=", "\n            icon=\"hass:plus\"\n            title=\"",
            "\"\n            ?rtl=", "\n          ></ha-fab>\n        </a>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.script.caption"), this.isWide, this.hass.localize("ui.panel.config.script.picker.header"), this.hass.localize("ui.panel.config.script.picker.introduction"), this.hass.localize("ui.panel.config.script.picker.learn_more"), this.hass.localize("ui.panel.config.script.picker.pick_script"), this.scripts.length === 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <div class=\"card-content\">\n                    <p>\n                      ", "\n                    </p>\n                  </div>\n                "], ["\n                  <div class=\"card-content\">\n                    <p>\n                      ",
                "\n                    </p>\n                  </div>\n                "])), this.hass.localize("ui.panel.config.script.picker.no_scripts")) : this.scripts.map(function (script) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <div class=\"script\">\n                      <paper-icon-button\n                        .script=", "\n                        icon=\"hass:play\"\n                        @click=", "\n                      ></paper-icon-button>\n                      <paper-item-body>\n                        <div>", "</div>\n                      </paper-item-body>\n                      <div class=\"actions\">\n                        <a href=", ">\n                          <paper-icon-button\n                            icon=\"hass:pencil\"\n                          ></paper-icon-button>\n                        </a>\n                      </div>\n                    </div>\n                  "], ["\n                    <div class=\"script\">\n                      <paper-icon-button\n                        .script=", "\n                        icon=\"hass:play\"\n                        @click=", "\n                      ></paper-icon-button>\n                      <paper-item-body>\n                        <div>", "</div>\n                      </paper-item-body>\n                      <div class=\"actions\">\n                        <a href=", ">\n                          <paper-icon-button\n                            icon=\"hass:pencil\"\n                          ></paper-icon-button>\n                        </a>\n                      </div>\n                    </div>\n                  "])), script, _this._runScript, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(script), "/config/script/edit/" + script.entity_id); }), this.isWide, this.hass.localize("ui.panel.config.script.picker.add_script"), Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(this.hass));
    };
    HaScriptPicker.prototype._runScript = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var script;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        script = ev.currentTarget.script;
                        return [4 /*yield*/, Object(_data_script__WEBPACK_IMPORTED_MODULE_11__["triggerScript"])(this.hass, script.entity_id)];
                    case 1:
                        _a.sent();
                        Object(_util_toast__WEBPACK_IMPORTED_MODULE_12__["showToast"])(this, {
                            message: this.hass.localize("ui.notification_toast.triggered", "name", Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(script)),
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HaScriptPicker, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyle"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          padding-bottom: 8px;\n          margin-bottom: 56px;\n        }\n\n        .script {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px;\n          margin: 4px 0;\n        }\n\n        .script > *:first-child {\n          margin-right: 8px;\n        }\n\n        .script a[href],\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "], ["\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          padding-bottom: 8px;\n          margin-bottom: 56px;\n        }\n\n        .script {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px;\n          margin: 4px 0;\n        }\n\n        .script > *:first-child {\n          margin-right: 8px;\n        }\n\n        .script a[href],\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        ha-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        ha-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        ha-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        ha-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaScriptPicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaScriptPicker.prototype, "scripts", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaScriptPicker.prototype, "isWide", void 0);
    HaScriptPicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-script-picker")
    ], HaScriptPicker);
    return HaScriptPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXNjcmlwdC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9kYXRhL3NjcmlwdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWl4aW5zL25hdmlnYXRlLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2pzL3NjcmlwdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NyaXB0L2hhLWNvbmZpZy1zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NyaXB0L2hhLXNjcmlwdC1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvc2NyaXB0L2hhLXNjcmlwdC1waWNrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFdmVudEFjdGlvbiB7XG4gIGV2ZW50OiBzdHJpbmc7XG4gIGV2ZW50X2RhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICBldmVudF9kYXRhX3RlbXBsYXRlPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VBY3Rpb24ge1xuICBkZXZpY2VfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdHJpZ2dlclNjcmlwdCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdmFyaWFibGVzPzoge31cbikgPT4gaGFzcy5jYWxsU2VydmljZShcInNjcmlwdFwiLCBjb21wdXRlT2JqZWN0SWQoZW50aXR5SWQpLCB2YXJpYWJsZXMpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU2NyaXB0ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIG9iamVjdElkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaShcIkRFTEVURVwiLCBgY29uZmlnL3NjcmlwdC9jb25maWcvJHtvYmplY3RJZH1gKTtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcbmltcG9ydCB7IG5hdmlnYXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9uYXZpZ2F0ZVwiO1xuXG4vKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgbmF2aWdhdGUoLi4uYXJncykge1xuICAgICAgICBuYXZpZ2F0ZSh0aGlzLCAuLi5hcmdzKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSBcInByZWFjdFwiO1xuXG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuXG5pbXBvcnQgU2NyaXB0IGZyb20gXCIuL3NjcmlwdC9pbmRleFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JpcHRFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQ8e1xuICBvbkNoYW5nZTogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk7XG4gIHNjcmlwdDogYW55O1xuICBpc1dpZGU6IGFueTtcbiAgaGFzczogYW55O1xuICBsb2NhbGl6ZTogYW55O1xufT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlcXVlbmNlQ2hhbmdlZCA9IHRoaXMuc2VxdWVuY2VDaGFuZ2VkLmJpbmQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25DaGFuZ2UoZXYpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgIC4uLnRoaXMucHJvcHMuc2NyaXB0LFxuICAgICAgW2V2LnRhcmdldC5uYW1lXTogZXYudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHNlcXVlbmNlQ2hhbmdlZChzZXF1ZW5jZSkge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoeyAuLi50aGlzLnByb3BzLnNjcmlwdCwgc2VxdWVuY2UgfSk7XG4gIH1cblxuICAvLyBAdHMtaWdub3JlXG4gIHB1YmxpYyByZW5kZXIoeyBzY3JpcHQsIGlzV2lkZSwgaGFzcywgbG9jYWxpemUgfSkge1xuICAgIGNvbnN0IHsgYWxpYXMsIHNlcXVlbmNlIH0gPSBzY3JpcHQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIGlzLXdpZGU9e2lzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiPnthbGlhc308L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgVXNlIHNjcmlwdHMgdG8gZXhlY3V0ZSBhIHNlcXVlbmNlIG9mIGFjdGlvbnMuXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbGlhc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2FsaWFzfVxuICAgICAgICAgICAgICAgIG9udmFsdWUtY2hhbmdlZD17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8aGEtY29uZmlnLXNlY3Rpb24gaXMtd2lkZT17aXNXaWRlfT5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaGVhZGVyXCI+U2VxdWVuY2U8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgVGhlIHNlcXVlbmNlIG9mIGFjdGlvbnMgb2YgdGhpcyBzY3JpcHQuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY3JpcHRzL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIExlYXJuIG1vcmUgYWJvdXQgYXZhaWxhYmxlIGFjdGlvbnMuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPFNjcmlwdFxuICAgICAgICAgICAgc2NyaXB0PXtzZXF1ZW5jZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlcXVlbmNlQ2hhbmdlZH1cbiAgICAgICAgICAgIGhhc3M9e2hhc3N9XG4gICAgICAgICAgICBsb2NhbGl6ZT17bG9jYWxpemV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtc2NyaXB0LWVkaXRvclwiO1xuaW1wb3J0IFwiLi9oYS1zY3JpcHQtcGlja2VyXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5cbmNsYXNzIEhhQ29uZmlnU2NyaXB0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1zY3JpcHQtcGlja2VyLFxuICAgICAgICBoYS1zY3JpcHQtZWRpdG9yIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwiW1tyb3V0ZV1dXCJcbiAgICAgICAgcGF0dGVybj1cIi9lZGl0LzpzY3JpcHRcIlxuICAgICAgICBkYXRhPVwie3tfcm91dGVEYXRhfX1cIlxuICAgICAgICBhY3RpdmU9XCJ7e19lZGl0dGluZ1NjcmlwdH19XCJcbiAgICAgID48L2FwcC1yb3V0ZT5cbiAgICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJbW3JvdXRlXV1cIlxuICAgICAgICBwYXR0ZXJuPVwiL25ld1wiXG4gICAgICAgIGFjdGl2ZT1cInt7X2NyZWF0aW5nTmV3fX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIXNob3dFZGl0b3JdXVwiPlxuICAgICAgICA8aGEtc2NyaXB0LXBpY2tlclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc2NyaXB0cz1cIltbc2NyaXB0c11dXCJcbiAgICAgICAgICBpcy13aWRlPVwiW1tpc1dpZGVdXVwiXG4gICAgICAgID48L2hhLXNjcmlwdC1waWNrZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0VkaXRvcl1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICA8aGEtc2NyaXB0LWVkaXRvclxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc2NyaXB0PVwiW1tzY3JpcHRdXVwiXG4gICAgICAgICAgaXMtd2lkZT1cIltbaXNXaWRlXV1cIlxuICAgICAgICAgIGNyZWF0aW5nLW5ldz1cIltbX2NyZWF0aW5nTmV3XV1cIlxuICAgICAgICA+PC9oYS1zY3JpcHQtZWRpdG9yPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgaXNXaWRlOiBCb29sZWFuLFxuICAgICAgX3JvdXRlRGF0YTogT2JqZWN0LFxuICAgICAgX3JvdXRlTWF0Y2hlczogQm9vbGVhbixcbiAgICAgIF9jcmVhdGluZ05ldzogQm9vbGVhbixcbiAgICAgIF9lZGl0dGluZ1NjcmlwdDogQm9vbGVhbixcblxuICAgICAgc2NyaXB0czoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVNjcmlwdHMoaGFzcylcIixcbiAgICAgIH0sXG5cbiAgICAgIHNjcmlwdDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVTY3JpcHQoc2NyaXB0cywgX2VkaXR0aW5nU2NyaXB0LCBfcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgc2hvd0VkaXRvcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU2hvd0VkaXRvcihfZWRpdHRpbmdTY3JpcHQsIF9jcmVhdGluZ05ldylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVTY3JpcHQoc2NyaXB0cywgZWRpdHRpbmdBZGRvbiwgcm91dGVEYXRhKSB7XG4gICAgaWYgKCFzY3JpcHRzIHx8ICFlZGl0dGluZ0FkZG9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc2NyaXB0c1tpXS5lbnRpdHlfaWQgPT09IHJvdXRlRGF0YS5zY3JpcHQpIHtcbiAgICAgICAgcmV0dXJuIHNjcmlwdHNbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29tcHV0ZVNjcmlwdHMoaGFzcykge1xuICAgIHZhciBzY3JpcHRzID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBlbnRpdHkgPSBoYXNzLnN0YXRlc1trZXldO1xuXG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgPT09IFwic2NyaXB0XCIpIHtcbiAgICAgICAgc2NyaXB0cy5wdXNoKGVudGl0eSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2NyaXB0cy5zb3J0KGZ1bmN0aW9uIGVudGl0eVNvcnRCeShlbnRpdHlBLCBlbnRpdHlCKSB7XG4gICAgICB2YXIgbmFtZUEgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eUEpO1xuICAgICAgdmFyIG5hbWVCID0gY29tcHV0ZVN0YXRlTmFtZShlbnRpdHlCKTtcblxuICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXB1dGVTaG93RWRpdG9yKF9lZGl0dGluZ1NjcmlwdCwgX2NyZWF0aW5nTmV3KSB7XG4gICAgcmV0dXJuIF9jcmVhdGluZ05ldyB8fCBfZWRpdHRpbmdTY3JpcHQ7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNjcmlwdFwiLCBIYUNvbmZpZ1NjcmlwdCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2xheW91dHMvaGEtYXBwLWxheW91dFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuXG5pbXBvcnQgU2NyaXB0IGZyb20gXCIuLi9qcy9zY3JpcHRcIjtcbmltcG9ydCB1bm1vdW50UHJlYWN0IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcHJlYWN0L3VubW91bnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCBOYXZpZ2F0ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbmF2aWdhdGUtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuaW1wb3J0IHsgZGVsZXRlU2NyaXB0IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5cbmZ1bmN0aW9uIFNjcmlwdEVkaXRvcihtb3VudEVsLCBwcm9wcywgbWVyZ2VFbCkge1xuICByZXR1cm4gcmVuZGVyKGgoU2NyaXB0LCBwcm9wcyksIG1vdW50RWwsIG1lcmdlRWwpO1xufVxuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgSGFTY3JpcHRFZGl0b3IgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKE5hdmlnYXRlTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlXCI+XG4gICAgICAgIC5lcnJvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaWdnZXJzLFxuICAgICAgICAuc2NyaXB0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudHJpZ2dlcnMgaGEtY2FyZCxcbiAgICAgICAgLnNjcmlwdCBoYS1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtY2FyZCBtd2MtYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmQtbWVudSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLW1lbnUgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW5bc2xvdD1cImludHJvZHVjdGlvblwiXSBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTgwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWFyZ2luLWJvdHRvbSAwLjNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW2lzLXdpZGVdIHtcbiAgICAgICAgICBib3R0b206IDI0cHg7XG4gICAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbZGlydHldIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW3J0bF0ge1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbcnRsXVtpcy13aWRlXSB7XG4gICAgICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtYXBwLWxheW91dCBoYXMtc2Nyb2xsaW5nLXJlZ2lvbj1cIlwiPlxuICAgICAgICA8YXBwLWhlYWRlciBzbG90PVwiaGVhZGVyXCIgZml4ZWQ9XCJcIj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8aGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlxuICAgICAgICAgICAgICBvbi1jbGljaz1cImJhY2tUYXBwZWRcIlxuICAgICAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5bW2NvbXB1dGVIZWFkZXIoc2NyaXB0KV1dPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWNyZWF0aW5nTmV3XV1cIj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6ZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kZWxldGVcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvcnNdXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yc1wiPltbZXJyb3JzXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDxkaXYgaWQ9XCJyb290XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgaXMtd2lkZSQ9XCJbW2lzV2lkZV1dXCJcbiAgICAgICAgICBkaXJ0eSQ9XCJbW2RpcnR5XV1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmNvbnRlbnQtc2F2ZVwiXG4gICAgICAgICAgdGl0bGU9XCJbW2xvY2FsaXplKCd1aS5jb21tb24uc2F2ZScpXV1cIlxuICAgICAgICAgIG9uLWNsaWNrPVwic2F2ZVNjcmlwdFwiXG4gICAgICAgICAgcnRsJD1cIltbcnRsXV1cIlxuICAgICAgICA+PC9oYS1mYWI+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGRpcnR5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbmZpZzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgc2NyaXB0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2NyaXB0Q2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgY3JlYXRpbmdOZXc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiY3JlYXRpbmdOZXdDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBpc1dpZGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3VwZGF0ZUNvbXBvbmVudFwiLFxuICAgICAgfSxcblxuICAgICAgX3JlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBfcmVuZGVyU2NoZWR1bGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICB0aGlzLmNvbmZpZ0NoYW5nZWQgPSB0aGlzLmNvbmZpZ0NoYW5nZWQuYmluZCh0aGlzKTtcbiAgICBzdXBlci5yZWFkeSgpOyAvLyBUaGlzIGNhbGwgd2lsbCBpbml0aWFsaXplIHByZWFjdC5cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3JlbmRlcmVkKSB7XG4gICAgICB1bm1vdW50UHJlYWN0KHRoaXMuX3JlbmRlcmVkKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBjb25maWdDaGFuZ2VkKGNvbmZpZykge1xuICAgIC8vIG9uQ2hhbmdlIGdldHMgY2FsbGVkIGEgbG90IGR1cmluZyBpbml0aWFsIHJlbmRlcmluZyBjYXVzaW5nIHJlY3Vyc2luZyBjYWxscy5cbiAgICBpZiAodGhpcy5fcmVuZGVyZWQgPT09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmVycm9ycyA9IG51bGw7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG4gIH1cblxuICBzY3JpcHRDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKCFuZXdWYWwpIHJldHVybjtcbiAgICBpZiAoIXRoaXMuaGFzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcmlwdENoYW5nZWQobmV3VmFsLCBvbGRWYWwpLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9sZFZhbCAmJiBvbGRWYWwuZW50aXR5X2lkID09PSBuZXdWYWwuZW50aXR5X2lkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxBcGkoXG4gICAgICAgIFwiZ2V0XCIsXG4gICAgICAgIFwiY29uZmlnL3NjcmlwdC9jb25maWcvXCIgKyBjb21wdXRlT2JqZWN0SWQobmV3VmFsLmVudGl0eV9pZClcbiAgICAgIClcbiAgICAgIC50aGVuKFxuICAgICAgICAoY29uZmlnKSA9PiB7XG4gICAgICAgICAgLy8gTm9ybWFsaXplIGRhdGE6IGVuc3VyZSBzZXF1ZW5jZSBpcyBhIGxpc3RcbiAgICAgICAgICAvLyBIYXBwZW5zIHdoZW4gcGVvcGxlIGNvcHkgcGFzdGUgdGhlaXIgc2NyaXB0cyBpbnRvIHRoZSBjb25maWdcbiAgICAgICAgICB2YXIgdmFsdWUgPSBjb25maWcuc2VxdWVuY2U7XG4gICAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgY29uZmlnLnNlcXVlbmNlID0gW3ZhbHVlXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5sb2FkX2Vycm9yX25vdF9lZGl0YWJsZVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgICBoaXN0b3J5LmJhY2soKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGNyZWF0aW5nTmV3Q2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgdGhpcy5jb25maWcgPSB7XG4gICAgICBhbGlhczogdGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5lZGl0b3IuZGVmYXVsdF9uYW1lXCIpLFxuICAgICAgc2VxdWVuY2U6IFt7IHNlcnZpY2U6IFwiXCIsIGRhdGE6IHt9IH1dLFxuICAgIH07XG4gICAgdGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG4gIH1cblxuICBiYWNrVGFwcGVkKCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZGlydHkgJiZcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgIWNvbmZpcm0oXG4gICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5jb21tb24uZWRpdG9yLmNvbmZpcm1fdW5zYXZlZFwiKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaXN0b3J5LmJhY2soKTtcbiAgfVxuXG4gIF91cGRhdGVDb21wb25lbnQoKSB7XG4gICAgaWYgKHRoaXMuX3JlbmRlclNjaGVkdWxlZCB8fCAhdGhpcy5oYXNzIHx8ICF0aGlzLmNvbmZpZykgcmV0dXJuO1xuICAgIHRoaXMuX3JlbmRlclNjaGVkdWxlZCA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlZCA9IFNjcmlwdEVkaXRvcihcbiAgICAgICAgdGhpcy4kLnJvb3QsXG4gICAgICAgIHtcbiAgICAgICAgICBzY3JpcHQ6IHRoaXMuY29uZmlnLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNvbmZpZ0NoYW5nZWQsXG4gICAgICAgICAgaXNXaWRlOiB0aGlzLmlzV2lkZSxcbiAgICAgICAgICBoYXNzOiB0aGlzLmhhc3MsXG4gICAgICAgICAgbG9jYWxpemU6IHRoaXMubG9jYWxpemUsXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuX3JlbmRlcmVkXG4gICAgICApO1xuICAgICAgdGhpcy5fcmVuZGVyU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBfZGVsZXRlKCkge1xuICAgIGlmIChcbiAgICAgICFjb25maXJtKFxuICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5kZWxldGVfY29uZmlybVwiKVxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCBkZWxldGVTY3JpcHQodGhpcy5oYXNzLCBjb21wdXRlT2JqZWN0SWQodGhpcy5zY3JpcHQuZW50aXR5X2lkKSk7XG4gICAgaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBzYXZlU2NyaXB0KCkge1xuICAgIHZhciBpZCA9IHRoaXMuY3JlYXRpbmdOZXdcbiAgICAgID8gXCJcIiArIERhdGUubm93KClcbiAgICAgIDogY29tcHV0ZU9iamVjdElkKHRoaXMuc2NyaXB0LmVudGl0eV9pZCk7XG4gICAgdGhpcy5oYXNzLmNhbGxBcGkoXCJwb3N0XCIsIFwiY29uZmlnL3NjcmlwdC9jb25maWcvXCIgKyBpZCwgdGhpcy5jb25maWcpLnRoZW4oXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jcmVhdGluZ05ldykge1xuICAgICAgICAgIHRoaXMubmF2aWdhdGUoYC9jb25maWcvc2NyaXB0L2VkaXQvJHtpZH1gLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnJvcnMpID0+IHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnMuYm9keS5tZXNzYWdlO1xuICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVIZWFkZXIoc2NyaXB0KSB7XG4gICAgcmV0dXJuIHNjcmlwdFxuICAgICAgPyB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5oZWFkZXJcIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICBjb21wdXRlU3RhdGVOYW1lKHNjcmlwdClcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuc2NyaXB0LmVkaXRvci5kZWZhdWx0X25hbWVcIik7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc2NyaXB0LWVkaXRvclwiLCBIYVNjcmlwdEVkaXRvcik7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcblxuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgaGFTdHlsZSB9IGZyb20gXCIuLi8uLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0cmlnZ2VyU2NyaXB0IH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvc2NyaXB0XCI7XG5pbXBvcnQgeyBzaG93VG9hc3QgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC90b2FzdFwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXNjcmlwdC1waWNrZXJcIilcbmNsYXNzIEhhU2NyaXB0UGlja2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHNjcmlwdHMhOiBIYXNzRW50aXR5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpc1dpZGUhOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2VcbiAgICAgICAgLmhlYWRlcj0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQuY2FwdGlvblwiKX1cbiAgICAgID5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgPGRpdiBzbG90PVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLmhlYWRlclwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHNsb3Q9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIuaW50cm9kdWN0aW9uXCIpfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9zY3JpcHRzL2VkaXRvci9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIubGVhcm5fbW9yZVwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGhhLWNhcmRcbiAgICAgICAgICAgIGhlYWRlcj1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLnBpY2tfc2NyaXB0XCJcbiAgICAgICAgICAgICl9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuc2NyaXB0cy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnNjcmlwdC5waWNrZXIubm9fc2NyaXB0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IHRoaXMuc2NyaXB0cy5tYXAoXG4gICAgICAgICAgICAgICAgICAoc2NyaXB0KSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2NyaXB0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2NyaXB0PSR7c2NyaXB0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9ydW5TY3JpcHR9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtjb21wdXRlU3RhdGVOYW1lKHNjcmlwdCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JHtgL2NvbmZpZy9zY3JpcHQvZWRpdC8ke3NjcmlwdC5lbnRpdHlfaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBlbmNpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgPC9oYS1jb25maWctc2VjdGlvbj5cblxuICAgICAgICA8YSBocmVmPVwiL2NvbmZpZy9zY3JpcHQvbmV3XCI+XG4gICAgICAgICAgPGhhLWZhYlxuICAgICAgICAgICAgc2xvdD1cImZhYlwiXG4gICAgICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICB0aXRsZT1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5zY3JpcHQucGlja2VyLmFkZF9zY3JpcHRcIlxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgP3J0bD0ke2NvbXB1dGVSVEwodGhpcy5oYXNzKX1cbiAgICAgICAgICA+PC9oYS1mYWI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaGFzcy1zdWJwYWdlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9ydW5TY3JpcHQoZXYpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBldi5jdXJyZW50VGFyZ2V0LnNjcmlwdCBhcyBIYXNzRW50aXR5O1xuICAgIGF3YWl0IHRyaWdnZXJTY3JpcHQodGhpcy5oYXNzLCBzY3JpcHQuZW50aXR5X2lkKTtcbiAgICBzaG93VG9hc3QodGhpcywge1xuICAgICAgbWVzc2FnZTogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBcInVpLm5vdGlmaWNhdGlvbl90b2FzdC50cmlnZ2VyZWRcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIGNvbXB1dGVTdGF0ZU5hbWUoc2NyaXB0KVxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZSxcbiAgICAgIGNzc2BcbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogaG9yaXpvbnRhbDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0ID4gKjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0IGFbaHJlZl0sXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiAxNnB4O1xuICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1mYWJbaXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWZhYltydGxdIHtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtZmFiW3J0bF1baXMtd2lkZV0ge1xuICAgICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgICBsZWZ0OiAyNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXNjcmlwdC1waWNrZXJcIjogSGFTY3JpcHRQaWNrZXI7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQU1BO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBT0E7QUFBQTtBQUdBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFTQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBbUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBekdBO0FBQ0E7QUFvQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQW5CQTtBQXdCQTs7OztBQWpFQTtBQUNBO0FBNEdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUEwSkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFTQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBSUE7Ozs7Ozs7OztBQU1BO0FBQ0E7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE1U0E7QUFDQTtBQWdHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBN0NBO0FBbURBOzs7O0FBeEpBO0FBQ0E7QUErU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlVQTtBQVNBO0FBQ0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBNkpBO0FBeEpBO0FBQUE7QUFDQTtBQWlCQTtBQVFBO0FBZ0NBO0FBV0E7QUF4Q0E7QUFLQTtBQXlDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUtBOzs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTBEQTtBQUNBOzs7QUFBQTtBQTNKQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBQ0E7QUE2SkE7QUFBQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=