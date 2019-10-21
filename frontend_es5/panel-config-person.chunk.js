(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-person"],{

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
var compare = function (a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};
var caseInsensitiveCompare = function (a, b) {
    return compare(a.toLowerCase(), b.toLowerCase());
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


var HaCard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCard, _super);
    function HaCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaCard, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "], ["\n      :host {\n        background: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        border-radius: var(--ha-card-border-radius, 2px);\n        box-shadow: var(\n          --ha-card-box-shadow,\n          0 2px 2px 0 rgba(0, 0, 0, 0.14),\n          0 1px 5px 0 rgba(0, 0, 0, 0.12),\n          0 3px 1px -2px rgba(0, 0, 0, 0.2)\n        );\n        color: var(--primary-text-color);\n        display: block;\n        transition: all 0.3s ease-out;\n        position: relative;\n      }\n\n      .card-header,\n      :host ::slotted(.card-header) {\n        color: var(--ha-card-header-color, --primary-text-color);\n        font-family: var(--ha-card-header-font-family, inherit);\n        font-size: var(--ha-card-header-font-size, 24px);\n        letter-spacing: -0.012em;\n        line-height: 32px;\n        padding: 24px 16px 16px;\n        display: block;\n      }\n\n      :host ::slotted(.card-content:not(:first-child)),\n      slot:not(:first-child)::slotted(.card-content) {\n        padding-top: 0px;\n        margin-top: -8px;\n      }\n\n      :host ::slotted(.card-content) {\n        padding: 16px;\n      }\n\n      :host ::slotted(.card-actions) {\n        border-top: 1px solid #e8e8e8;\n        padding: 5px 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    HaCard.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <slot></slot>\n    "], ["\n      ",
            "\n      <slot></slot>\n    "])), this.header
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <div class=\"card-header\">", "</div>\n          "], ["\n            <div class=\"card-header\">", "</div>\n          "])), this.header) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))));
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaCard.prototype, "header", void 0);
    return HaCard;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-card", HaCard);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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
var MwcFab = customElements.get("mwc-fab");
var HaFab = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaFab, _super);
    function HaFab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    HaFab.prototype.render = function () {
        var classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        var showLabel = this.label !== "" && this.extended;
        return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ", "\n        ", "\n      </button>\n    "], ["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ",
            "\n        ", "\n      </button>\n    "])), Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])(), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes), this.disabled, this.label || this.icon, showLabel && this.showIconAtEnd ? this.label : "", this.icon
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-icon .icon=", "></ha-icon>\n            "], ["\n              <ha-icon .icon=", "></ha-icon>\n            "])), this.icon) : "", showLabel && !this.showIconAtEnd ? this.label : "");
    };
    HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
    ], HaFab);
    return HaFab;
}(MwcFab));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/data/person.ts":
/*!****************************!*\
  !*** ./src/data/person.ts ***!
  \****************************/
/*! exports provided: fetchPersons, createPerson, updatePerson, deletePerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPersons", function() { return fetchPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPerson", function() { return createPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerson", function() { return updatePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePerson", function() { return deletePerson; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var fetchPersons = function (hass) {
    return hass.callWS({ type: "person/list" });
};
var createPerson = function (hass, values) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "person/create" }, values));
};
var updatePerson = function (hass, personId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "person/update", person_id: personId }, updates));
};
var deletePerson = function (hass, personId) {
    return hass.callWS({
        type: "person/delete",
        person_id: personId,
    });
};


/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var SYSTEM_GROUP_ID_ADMIN = "system-admin";
var SYSTEM_GROUP_ID_USER = "system-users";
var SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
var fetchUsers = function (hass) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2 /*return*/, hass.callWS({
                type: "config/auth/list",
            })];
    });
}); };
var createUser = function (hass, name) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2 /*return*/, hass.callWS({
                type: "config/auth/create",
                name: name,
            })];
    });
}); };
var updateUser = function (hass, userId, params) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2 /*return*/, hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params), { type: "config/auth/update", user_id: userId }))];
    });
}); };
var deleteUser = function (hass, userId) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2 /*return*/, hass.callWS({
                type: "config/auth/delete",
                user_id: userId,
            })];
    });
}); };


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

/***/ "./src/panels/config/person/ha-config-person.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/person/ha-config-person.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _data_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/person */ "./src/data/person.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-dialog-person-detail */ "./src/panels/config/person/show-dialog-person-detail.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");













var HaConfigPerson = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaConfigPerson, _super);
    function HaConfigPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaConfigPerson, "properties", {
        get: function () {
            return {
                hass: {},
                isWide: {},
                _storageItems: {},
                _configItems: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    HaConfigPerson.prototype.render = function () {
        var _this = this;
        if (!this.hass ||
            this._storageItems === undefined ||
            this._configItems === undefined) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hass-loading-screen></hass-loading-screen>\n      "], ["\n        <hass-loading-screen></hass-loading-screen>\n      "])));
        }
        var hass = this.hass;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage header=", ">\n        <ha-config-section .isWide=", ">\n          <span slot=\"header\"\n            >", "</span\n          >\n          <span slot=\"introduction\">\n            ", "\n            ", "\n          </span>\n          <ha-card class=\"storage\">\n            ", "\n            ", "\n          </ha-card>\n          ", "\n        </ha-config-section>\n      </hass-subpage>\n\n      <ha-fab\n        ?is-wide=", "\n        icon=\"hass:plus\"\n        title=\"", "\"\n        @click=", "\n      ></ha-fab>\n    "], ["\n      <hass-subpage header=", ">\n        <ha-config-section .isWide=", ">\n          <span slot=\"header\"\n            >", "</span\n          >\n          <span slot=\"introduction\">\n            ", "\n            ",
            "\n          </span>\n          <ha-card class=\"storage\">\n            ",
            "\n            ",
            "\n          </ha-card>\n          ",
            "\n        </ha-config-section>\n      </hass-subpage>\n\n      <ha-fab\n        ?is-wide=", "\n        icon=\"hass:plus\"\n        title=\"", "\"\n        @click=", "\n      ></ha-fab>\n    "])), hass.localize("ui.panel.config.person.caption"), this.isWide, hass.localize("ui.panel.config.person.caption"), hass.localize("ui.panel.config.person.introduction"), this._configItems.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <p>\n                    ", "\n                  </p>\n                "], ["\n                  <p>\n                    ",
                "\n                  </p>\n                "])), hass.localize("ui.panel.config.person.note_about_persons_configured_in_yaml")) : "", this._storageItems.map(function (entry) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-item @click=", " .entry=", ">\n                  <paper-item-body>\n                    ", "\n                  </paper-item-body>\n                </paper-item>\n              "], ["\n                <paper-item @click=", " .entry=", ">\n                  <paper-item-body>\n                    ", "\n                  </paper-item-body>\n                </paper-item>\n              "])), _this._openEditEntry, entry, entry.name);
        }), this._storageItems.length === 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <div class=\"empty\">\n                    ", "\n                    <mwc-button @click=", ">\n                      ", "</mwc-button\n                    >\n                  </div>\n                "], ["\n                  <div class=\"empty\">\n                    ",
                "\n                    <mwc-button @click=", ">\n                      ",
                "</mwc-button\n                    >\n                  </div>\n                "])), hass.localize("ui.panel.config.person.no_persons_created_yet"), this._createPerson, hass.localize("ui.panel.config.person.create_person")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))), this._configItems.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <ha-card header=\"Configuration.yaml persons\">\n                  ", "\n                </ha-card>\n              "], ["\n                <ha-card header=\"Configuration.yaml persons\">\n                  ",
                "\n                </ha-card>\n              "])), this._configItems.map(function (entry) {
                return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-item>\n                        <paper-item-body>\n                          ", "\n                        </paper-item-body>\n                      </paper-item>\n                    "], ["\n                      <paper-item>\n                        <paper-item-body>\n                          ", "\n                        </paper-item-body>\n                      </paper-item>\n                    "])), entry.name);
            })) : "", this.isWide, hass.localize("ui.panel.config.person.add_person"), this._createPerson);
    };
    HaConfigPerson.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._fetchData();
        Object(_show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_11__["loadPersonDetailDialog"])();
    };
    HaConfigPerson.prototype._fetchData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var personData;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._usersLoad = Object(_data_user__WEBPACK_IMPORTED_MODULE_12__["fetchUsers"])(this.hass);
                        return [4 /*yield*/, Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["fetchPersons"])(this.hass)];
                    case 1:
                        personData = _a.sent();
                        this._storageItems = personData.storage.sort(function (ent1, ent2) {
                            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(ent1.name, ent2.name);
                        });
                        this._configItems = personData.config.sort(function (ent1, ent2) {
                            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(ent1.name, ent2.name);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HaConfigPerson.prototype._createPerson = function () {
        this._openDialog();
    };
    HaConfigPerson.prototype._openEditEntry = function (ev) {
        var entry = ev.currentTarget.entry;
        this._openDialog(entry);
    };
    HaConfigPerson.prototype._allowedUsers = function (users, currentPerson) {
        var used = new Set();
        for (var _i = 0, _a = [this._configItems, this._storageItems]; _i < _a.length; _i++) {
            var coll = _a[_i];
            for (var _b = 0, _c = coll; _b < _c.length; _b++) {
                var pers = _c[_b];
                if (pers.user_id) {
                    used.add(pers.user_id);
                }
            }
        }
        var currentUserId = currentPerson ? currentPerson.user_id : undefined;
        return users.filter(function (user) { return user.id === currentUserId || !used.has(user.id); });
    };
    HaConfigPerson.prototype._openDialog = function (entry) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var users;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._usersLoad];
                    case 1:
                        users = _a.sent();
                        Object(_show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_11__["showPersonDetailDialog"])(this, {
                            entry: entry,
                            users: this._allowedUsers(users, entry),
                            createEntry: function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var created;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["createPerson"])(this.hass, values)];
                                        case 1:
                                            created = _a.sent();
                                            this._storageItems = this._storageItems.concat(created).sort(function (ent1, ent2) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_9__["compare"])(ent1.name, ent2.name); });
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            updateEntry: function (values) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var updated;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["updatePerson"])(this.hass, entry.id, values)];
                                        case 1:
                                            updated = _a.sent();
                                            this._storageItems = this._storageItems.map(function (ent) {
                                                return ent === entry ? updated : ent;
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            removeEntry: function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                var err_1;
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!confirm(this.hass.localize("ui.panel.config.person.confirm_delete") + "\n\n" + this.hass.localize("ui.panel.config.person.confirm_delete2"))) {
                                                return [2 /*return*/, false];
                                            }
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["deletePerson"])(this.hass, entry.id)];
                                        case 2:
                                            _a.sent();
                                            this._storageItems = this._storageItems.filter(function (ent) { return ent !== entry; });
                                            return [2 /*return*/, true];
                                        case 3:
                                            err_1 = _a.sent();
                                            return [2 /*return*/, false];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(HaConfigPerson, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        max-width: 600px;\n        margin: 16px auto;\n        overflow: hidden;\n      }\n      .empty {\n        text-align: center;\n        padding: 8px;\n      }\n      paper-item {\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n      ha-card.storage paper-item {\n        cursor: pointer;\n      }\n      ha-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      ha-fab[is-wide] {\n        bottom: 24px;\n        right: 24px;\n      }\n    "], ["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        max-width: 600px;\n        margin: 16px auto;\n        overflow: hidden;\n      }\n      .empty {\n        text-align: center;\n        padding: 8px;\n      }\n      paper-item {\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n      ha-card.storage paper-item {\n        cursor: pointer;\n      }\n      ha-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      ha-fab[is-wide] {\n        bottom: 24px;\n        right: 24px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    return HaConfigPerson;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-config-person", HaConfigPerson);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/panels/config/person/show-dialog-person-detail.ts":
/*!***************************************************************!*\
  !*** ./src/panels/config/person/show-dialog-person-detail.ts ***!
  \***************************************************************/
/*! exports provided: loadPersonDetailDialog, showPersonDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPersonDetailDialog", function() { return loadPersonDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPersonDetailDialog", function() { return showPersonDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadPersonDetailDialog = function () {
    return Promise.all(/*! import() | person-detail-dialog */[__webpack_require__.e(0), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~person-detail-dialog"), __webpack_require__.e(4), __webpack_require__.e("person-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-person-detail */ "./src/panels/config/person/dialog-person-detail.ts"));
};
var showPersonDetailDialog = function (element, systemLogDetailParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-person-detail",
        dialogImport: loadPersonDetailDialog,
        dialogParams: systemLogDetailParams,
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLXBlcnNvbi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mYWIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvcGVyc29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvaGEtY29uZmlnLXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvcGVyc29uL2hhLWNvbmZpZy1wZXJzb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvcGVyc29uL3Nob3ctZGlhbG9nLXBlcnNvbi1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoZWFkZXI/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGEtY2FyZC1ib3JkZXItcmFkaXVzLCAycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJveC1zaGFkb3csXG4gICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKVxuICAgICAgICApO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1oZWFkZXIpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWNvbG9yLCAtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1zaXplLCAyNHB4KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudDpub3QoOmZpcnN0LWNoaWxkKSksXG4gICAgICBzbG90Om5vdCg6Zmlyc3QtY2hpbGQpOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oZWFkZXJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+JHt0aGlzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBgfVxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FyZFwiLCBIYUNhcmQpO1xuIiwiaW1wb3J0IHtcbiAgY2xhc3NNYXAsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENvbnN0cnVjdG9yLFxufSBmcm9tIFwiQG1hdGVyaWFsL213Yy1iYXNlL2Jhc2UtZWxlbWVudFwiO1xuaW1wb3J0IHsgcmlwcGxlIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtcmlwcGxlL3JpcHBsZS1kaXJlY3RpdmUuanNcIjtcblxuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgRmFiIH0gZnJvbSBcIkBtYXRlcmlhbC9td2MtZmFiXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IE13Y0ZhYiA9IGN1c3RvbUVsZW1lbnRzLmdldChcIm13Yy1mYWJcIikgYXMgQ29uc3RydWN0b3I8RmFiPjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1mYWJcIilcbmV4cG9ydCBjbGFzcyBIYUZhYiBleHRlbmRzIE13Y0ZhYiB7XG4gIC8vIFdlIG92ZXJyaWRlIHRoZSByZW5kZXIgbWV0aG9kIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhbiBpY29uIGZvbnQgYW5kIG13Yy1mYWIgZG9lc24ndCBzdXBwb3J0IG91ciBzdmctaWNvbiBzZXRzLlxuICAvLyBCYXNlZCBvbiB2ZXJzaW9uIG13Yy1mYWIgMC44XG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgIFwibWRjLWZhYi0tbWluaVwiOiB0aGlzLm1pbmksXG4gICAgICBcIm1kYy1mYWItLWV4aXRlZFwiOiB0aGlzLmV4aXRlZCxcbiAgICAgIFwibWRjLWZhYi0tZXh0ZW5kZWRcIjogdGhpcy5leHRlbmRlZCxcbiAgICB9O1xuICAgIGNvbnN0IHNob3dMYWJlbCA9IHRoaXMubGFiZWwgIT09IFwiXCIgJiYgdGhpcy5leHRlbmRlZDtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxidXR0b25cbiAgICAgICAgLnJpcHBsZT1cIiR7cmlwcGxlKCl9XCJcbiAgICAgICAgY2xhc3M9XCJtZGMtZmFiICR7Y2xhc3NNYXAoY2xhc3Nlcyl9XCJcbiAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLmRpc2FibGVkfVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCIke3RoaXMubGFiZWwgfHwgdGhpcy5pY29ufVwiXG4gICAgICA+XG4gICAgICAgICR7c2hvd0xhYmVsICYmIHRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgICAke3RoaXMuaWNvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWljb24gLmljb249JHt0aGlzLmljb259PjwvaGEtaWNvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c2hvd0xhYmVsICYmICF0aGlzLnNob3dJY29uQXRFbmQgPyB0aGlzLmxhYmVsIDogXCJcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWZhYlwiOiBIYUZhYjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNvbiB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXNlcl9pZD86IHN0cmluZztcbiAgZGV2aWNlX3RyYWNrZXJzPzogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uTXV0YWJsZVBhcmFtcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgdXNlcl9pZDogc3RyaW5nIHwgbnVsbDtcbiAgZGV2aWNlX3RyYWNrZXJzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUGVyc29ucyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzx7XG4gICAgc3RvcmFnZTogUGVyc29uW107XG4gICAgY29uZmlnOiBQZXJzb25bXTtcbiAgfT4oeyB0eXBlOiBcInBlcnNvbi9saXN0XCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQZXJzb24gPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogUGVyc29uTXV0YWJsZVBhcmFtc1xuKSA9PlxuICBoYXNzLmNhbGxXUzxQZXJzb24+KHtcbiAgICB0eXBlOiBcInBlcnNvbi9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUGVyc29uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwZXJzb25JZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPFBlcnNvbk11dGFibGVQYXJhbXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPFBlcnNvbj4oe1xuICAgIHR5cGU6IFwicGVyc29uL3VwZGF0ZVwiLFxuICAgIHBlcnNvbl9pZDogcGVyc29uSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQZXJzb24gPSAoaGFzczogSG9tZUFzc2lzdGFudCwgcGVyc29uSWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwicGVyc29uL2RlbGV0ZVwiLFxuICAgIHBlcnNvbl9pZDogcGVyc29uSWQsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbCB9IGZyb20gXCIuL2F1dGhcIjtcblxuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9BRE1JTiA9IFwic3lzdGVtLWFkbWluXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0dST1VQX0lEX1VTRVIgPSBcInN5c3RlbS11c2Vyc1wiO1xuZXhwb3J0IGNvbnN0IFNZU1RFTV9HUk9VUF9JRF9SRUFEX09OTFkgPSBcInN5c3RlbS1yZWFkLW9ubHlcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBpc19vd25lcjogYm9vbGVhbjtcbiAgaXNfYWN0aXZlOiBib29sZWFuO1xuICBzeXN0ZW1fZ2VuZXJhdGVkOiBib29sZWFuO1xuICBncm91cF9pZHM6IHN0cmluZ1tdO1xuICBjcmVkZW50aWFsczogQ3JlZGVudGlhbFtdO1xufVxuXG5pbnRlcmZhY2UgVXBkYXRlVXNlclBhcmFtcyB7XG4gIG5hbWU/OiBVc2VyW1wibmFtZVwiXTtcbiAgZ3JvdXBfaWRzPzogVXNlcltcImdyb3VwX2lkc1wiXTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsV1M8VXNlcltdPih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9saXN0XCIsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50LCBuYW1lOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTPHsgdXNlcjogVXNlciB9Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXV0aC9jcmVhdGVcIixcbiAgICBuYW1lLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHVzZXJJZDogc3RyaW5nLFxuICBwYXJhbXM6IFVwZGF0ZVVzZXJQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8eyB1c2VyOiBVc2VyIH0+KHtcbiAgICAuLi5wYXJhbXMsXG4gICAgdHlwZTogXCJjb25maWcvYXV0aC91cGRhdGVcIixcbiAgICB1c2VyX2lkOiB1c2VySWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jIChoYXNzOiBIb21lQXNzaXN0YW50LCB1c2VySWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsV1M8dm9pZD4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2F1dGgvZGVsZXRlXCIsXG4gICAgdXNlcl9pZDogdXNlcklkLFxuICB9KTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5jbGFzcyBIYUNvbmZpZ1NlY3Rpb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBoYS1zdHlsZVwiPlxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMjhweCAyMHB4IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWRpc3BsYXkxO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50b2dldGhlciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRybyB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwgOjpzbG90dGVkKCopIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hcnJvdy5jb250ZW50IHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLnRvZ2V0aGVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXJyb3cgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgfVxuICAgICAgICAubmFycm93IC5pbnRybyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDb250ZW50Q2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3Nlcyhpc1dpZGUpXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW50cm9cIj48c2xvdCBuYW1lPVwiaW50cm9kdWN0aW9uXCI+PC9zbG90PjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBmbGV4LWF1dG9cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBuYXJyb3c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG5cbiAgICAgIGlzV2lkZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcImNvbnRlbnQgXCI7XG5cbiAgICByZXR1cm4gaXNXaWRlID8gY2xhc3NlcyA6IGNsYXNzZXMgKyBcIm5hcnJvd1wiO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzZXMoaXNXaWRlKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBcInRvZ2V0aGVyIGxheW91dCBcIjtcblxuICAgIHJldHVybiBjbGFzc2VzICsgKGlzV2lkZSA/IFwiaG9yaXpvbnRhbFwiIDogXCJ2ZXJ0aWNhbCBuYXJyb3dcIik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY29uZmlnLXNlY3Rpb25cIiwgSGFDb25maWdTZWN0aW9uKTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgUHJvcGVydHlEZWNsYXJhdGlvbnMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBQZXJzb24sXG4gIGZldGNoUGVyc29ucyxcbiAgdXBkYXRlUGVyc29uLFxuICBkZWxldGVQZXJzb24sXG4gIGNyZWF0ZVBlcnNvbixcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvcGVyc29uXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtZmFiXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IFwiLi4vaGEtY29uZmlnLXNlY3Rpb25cIjtcbmltcG9ydCB7XG4gIHNob3dQZXJzb25EZXRhaWxEaWFsb2csXG4gIGxvYWRQZXJzb25EZXRhaWxEaWFsb2csXG59IGZyb20gXCIuL3Nob3ctZGlhbG9nLXBlcnNvbi1kZXRhaWxcIjtcbmltcG9ydCB7IFVzZXIsIGZldGNoVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS91c2VyXCI7XG5cbmNsYXNzIEhhQ29uZmlnUGVyc29uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgcHVibGljIGlzV2lkZT86IGJvb2xlYW47XG4gIHByaXZhdGUgX3N0b3JhZ2VJdGVtcz86IFBlcnNvbltdO1xuICBwcml2YXRlIF9jb25maWdJdGVtcz86IFBlcnNvbltdO1xuICBwcml2YXRlIF91c2Vyc0xvYWQ/OiBQcm9taXNlPFVzZXJbXT47XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBpc1dpZGU6IHt9LFxuICAgICAgX3N0b3JhZ2VJdGVtczoge30sXG4gICAgICBfY29uZmlnSXRlbXM6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRoaXMuaGFzcyB8fFxuICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2NvbmZpZ0l0ZW1zID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGFzcy1sb2FkaW5nLXNjcmVlbj48L2hhc3MtbG9hZGluZy1zY3JlZW4+XG4gICAgICBgO1xuICAgIH1cbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5jYXB0aW9uXCIpfT5cbiAgICAgICAgPGhhLWNvbmZpZy1zZWN0aW9uIC5pc1dpZGU9JHt0aGlzLmlzV2lkZX0+XG4gICAgICAgICAgPHNwYW4gc2xvdD1cImhlYWRlclwiXG4gICAgICAgICAgICA+JHtoYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5jYXB0aW9uXCIpfTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzbG90PVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmludHJvZHVjdGlvblwiKX1cbiAgICAgICAgICAgICR7dGhpcy5fY29uZmlnSXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5ub3RlX2Fib3V0X3BlcnNvbnNfY29uZmlndXJlZF9pbl95YW1sXCJcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGhhLWNhcmQgY2xhc3M9XCJzdG9yYWdlXCI+XG4gICAgICAgICAgICAke3RoaXMuX3N0b3JhZ2VJdGVtcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX29wZW5FZGl0RW50cnl9IC5lbnRyeT0ke2VudHJ5fT5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICR7ZW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgJHt0aGlzLl9zdG9yYWdlSXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbXB0eVwiPlxuICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLm5vX3BlcnNvbnNfY3JlYXRlZF95ZXRcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9jcmVhdGVQZXJzb259PlxuICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5jcmVhdGVfcGVyc29uXCJcbiAgICAgICAgICAgICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogaHRtbGBgfVxuICAgICAgICAgIDwvaGEtY2FyZD5cbiAgICAgICAgICAke3RoaXMuX2NvbmZpZ0l0ZW1zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8aGEtY2FyZCBoZWFkZXI9XCJDb25maWd1cmF0aW9uLnlhbWwgcGVyc29uc1wiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9jb25maWdJdGVtcy5tYXAoKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtlbnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvaGEtY29uZmlnLXNlY3Rpb24+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cblxuICAgICAgPGhhLWZhYlxuICAgICAgICA/aXMtd2lkZT0ke3RoaXMuaXNXaWRlfVxuICAgICAgICBpY29uPVwiaGFzczpwbHVzXCJcbiAgICAgICAgdGl0bGU9XCIke2hhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmFkZF9wZXJzb25cIil9XCJcbiAgICAgICAgQGNsaWNrPSR7dGhpcy5fY3JlYXRlUGVyc29ufVxuICAgICAgPjwvaGEtZmFiPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2ZldGNoRGF0YSgpO1xuICAgIGxvYWRQZXJzb25EZXRhaWxEaWFsb2coKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoRGF0YSgpIHtcbiAgICB0aGlzLl91c2Vyc0xvYWQgPSBmZXRjaFVzZXJzKHRoaXMuaGFzcyEpO1xuICAgIGNvbnN0IHBlcnNvbkRhdGEgPSBhd2FpdCBmZXRjaFBlcnNvbnModGhpcy5oYXNzISk7XG5cbiAgICB0aGlzLl9zdG9yYWdlSXRlbXMgPSBwZXJzb25EYXRhLnN0b3JhZ2Uuc29ydCgoZW50MSwgZW50MikgPT5cbiAgICAgIGNvbXBhcmUoZW50MS5uYW1lLCBlbnQyLm5hbWUpXG4gICAgKTtcbiAgICB0aGlzLl9jb25maWdJdGVtcyA9IHBlcnNvbkRhdGEuY29uZmlnLnNvcnQoKGVudDEsIGVudDIpID0+XG4gICAgICBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVQZXJzb24oKSB7XG4gICAgdGhpcy5fb3BlbkRpYWxvZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbkVkaXRFbnRyeShldjogTW91c2VFdmVudCkge1xuICAgIGNvbnN0IGVudHJ5OiBQZXJzb24gPSAoZXYuY3VycmVudFRhcmdldCEgYXMgYW55KS5lbnRyeTtcbiAgICB0aGlzLl9vcGVuRGlhbG9nKGVudHJ5KTtcbiAgfVxuXG4gIHByaXZhdGUgX2FsbG93ZWRVc2Vycyh1c2VyczogVXNlcltdLCBjdXJyZW50UGVyc29uPzogUGVyc29uKSB7XG4gICAgY29uc3QgdXNlZCA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGNvbnN0IGNvbGwgb2YgW3RoaXMuX2NvbmZpZ0l0ZW1zLCB0aGlzLl9zdG9yYWdlSXRlbXNdKSB7XG4gICAgICBmb3IgKGNvbnN0IHBlcnMgb2YgY29sbCEpIHtcbiAgICAgICAgaWYgKHBlcnMudXNlcl9pZCkge1xuICAgICAgICAgIHVzZWQuYWRkKHBlcnMudXNlcl9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgY3VycmVudFVzZXJJZCA9IGN1cnJlbnRQZXJzb24gPyBjdXJyZW50UGVyc29uLnVzZXJfaWQgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHVzZXJzLmZpbHRlcihcbiAgICAgICh1c2VyKSA9PiB1c2VyLmlkID09PSBjdXJyZW50VXNlcklkIHx8ICF1c2VkLmhhcyh1c2VyLmlkKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9vcGVuRGlhbG9nKGVudHJ5PzogUGVyc29uKSB7XG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLl91c2Vyc0xvYWQhO1xuXG4gICAgc2hvd1BlcnNvbkRldGFpbERpYWxvZyh0aGlzLCB7XG4gICAgICBlbnRyeSxcbiAgICAgIHVzZXJzOiB0aGlzLl9hbGxvd2VkVXNlcnModXNlcnMsIGVudHJ5KSxcbiAgICAgIGNyZWF0ZUVudHJ5OiBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBjcmVhdGVQZXJzb24odGhpcy5oYXNzISwgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID0gdGhpcy5fc3RvcmFnZUl0ZW1zIS5jb25jYXQoY3JlYXRlZCkuc29ydChcbiAgICAgICAgICAoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSlcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB1cGRhdGVFbnRyeTogYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgICAgICBjb25zdCB1cGRhdGVkID0gYXdhaXQgdXBkYXRlUGVyc29uKHRoaXMuaGFzcyEsIGVudHJ5IS5pZCwgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZUl0ZW1zID0gdGhpcy5fc3RvcmFnZUl0ZW1zIS5tYXAoKGVudCkgPT5cbiAgICAgICAgICBlbnQgPT09IGVudHJ5ID8gdXBkYXRlZCA6IGVudFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUVudHJ5OiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhY29uZmlybShgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmNvbmZpcm1fZGVsZXRlXCJcbiAgICAgICAgICApfVxuXG4ke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmNvbmZpcm1fZGVsZXRlMlwiKX1gKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGF3YWl0IGRlbGV0ZVBlcnNvbih0aGlzLmhhc3MhLCBlbnRyeSEuaWQpO1xuICAgICAgICAgIHRoaXMuX3N0b3JhZ2VJdGVtcyA9IHRoaXMuX3N0b3JhZ2VJdGVtcyEuZmlsdGVyKFxuICAgICAgICAgICAgKGVudCkgPT4gZW50ICE9PSBlbnRyeVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuZW1wdHkge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgfVxuICAgICAgaGEtY2FyZC5zdG9yYWdlIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIGhhLWZhYltpcy13aWRlXSB7XG4gICAgICAgIGJvdHRvbTogMjRweDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jb25maWctcGVyc29uXCIsIEhhQ29uZmlnUGVyc29uKTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IFBlcnNvbiwgUGVyc29uTXV0YWJsZVBhcmFtcyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3BlcnNvblwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3VzZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25EZXRhaWxEaWFsb2dQYXJhbXMge1xuICBlbnRyeT86IFBlcnNvbjtcbiAgdXNlcnM6IFVzZXJbXTtcbiAgY3JlYXRlRW50cnk6ICh2YWx1ZXM6IFBlcnNvbk11dGFibGVQYXJhbXMpID0+IFByb21pc2U8dW5rbm93bj47XG4gIHVwZGF0ZUVudHJ5OiAodXBkYXRlczogUGFydGlhbDxQZXJzb25NdXRhYmxlUGFyYW1zPikgPT4gUHJvbWlzZTx1bmtub3duPjtcbiAgcmVtb3ZlRW50cnk6ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkUGVyc29uRGV0YWlsRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicGVyc29uLWRldGFpbC1kaWFsb2dcIiAqLyBcIi4vZGlhbG9nLXBlcnNvbi1kZXRhaWxcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93UGVyc29uRGV0YWlsRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgc3lzdGVtTG9nRGV0YWlsUGFyYW1zOiBQZXJzb25EZXRhaWxEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1wZXJzb24tZGV0YWlsXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkUGVyc29uRGV0YWlsRGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczogc3lzdGVtTG9nRGV0YWlsUGFyYW1zLFxuICB9KTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFTQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQUE7QUFDQTtBQTZDQTs7O0FBQUE7QUFFQTtBQUNBO0FBS0E7QUFIQTtBQU1BO0FBM0RBO0FBQUE7QUFBQTtBQTREQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQTJCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBSEE7QUFPQTtBQTFCQTtBQURBO0FBQ0E7QUEyQkE7QUFBQTtBQTNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBS0E7QUFJQTtBQUFBO0FBS0E7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFpQkE7O0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFFQTs7QUFLQTs7QUFJQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBK0VBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBeEZBO0FBQ0E7QUEwREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBY0E7Ozs7QUE3RUE7QUFDQTtBQTJGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBUUE7QUFDQTtBQUdBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUF1TkE7QUFoTkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQWdCQTtBQVdBO0FBY0E7QUFnQkE7QUFoREE7QUFJQTtBQU9BO0FBT0E7QUFFQTtBQUlBO0FBSUE7QUFPQTtBQVVBO0FBUEE7QUFPQTtBQWNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7Ozs7OztBQUNBOztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQTs7QUFBQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBRUE7QUFDQTs7Ozs7QUFDQTtBQU9BO0FBQ0E7Ozs7QUFHQTs7QUFBQTtBQUNBO0FBR0E7OztBQUVBOzs7O0FBRUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQWdDQTs7O0FBQUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeFBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==