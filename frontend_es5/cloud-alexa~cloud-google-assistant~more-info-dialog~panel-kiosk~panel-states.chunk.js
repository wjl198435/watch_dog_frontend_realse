(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-alexa~cloud-google-assistant~more-info-dialog~panel-kiosk~panel-states"],{

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
var tests = [60, 60, 24, 7];
var langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options) {
    if (options === void 0) { options = {}; }
    var compareTime = options.compareTime || new Date();
    var delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
    var tense = delta >= 0 ? "past" : "future";
    delta = Math.abs(delta);
    var timeDesc;
    for (var i = 0; i < tests.length; i++) {
        if (delta < tests[i]) {
            delta = Math.floor(delta);
            timeDesc = localize("ui.components.relative_time.duration." + langKey[i], "count", delta);
            break;
        }
        delta /= tests[i];
    }
    if (timeDesc === undefined) {
        delta = Math.floor(delta);
        timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
    }
    return options.includeTense === false
        ? timeDesc
        : localize("ui.components.relative_time." + tense, "time", timeDesc);
}


/***/ }),

/***/ "./src/components/entity/state-info.js":
/*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"info\">\n        <div class=\"name\" in-dialog$=\"[[inDialog]]\">\n          [[computeStateName(stateObj)]]\n        </div>\n\n        <template is=\"dom-if\" if=\"[[inDialog]]\">\n          <div class=\"time-ago\">\n            <ha-relative-time\n              hass=\"[[hass]]\"\n              datetime=\"[[stateObj.last_changed]]\"\n            ></ha-relative-time>\n          </div>\n        </template>\n        <template is=\"dom-if\" if=\"[[!inDialog]]\">\n          <div class=\"extra-info\"><slot> </slot></div>\n        </template>\n      </div>\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      <state-badge state-obj=\"[[stateObj]]\"></state-badge>\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          min-width: 120px;\n          white-space: nowrap;\n        }\n\n        state-badge {\n          float: left;\n        }\n\n        :host([rtl]) state-badge {\n          float: right;\n        }\n\n        .info {\n          margin-left: 56px;\n        }\n\n        :host([rtl]) .info {\n          margin-right: 56px;\n          margin-left: 0;\n          text-align: right;\n        }\n\n        .name {\n          @apply --paper-font-common-nowrap;\n          color: var(--primary-text-color);\n          line-height: 40px;\n        }\n\n        .name[in-dialog],\n        :host([secondary-line]) .name {\n          line-height: 20px;\n        }\n\n        .time-ago,\n        .extra-info,\n        .extra-info > * {\n          @apply --paper-font-common-nowrap;\n          color: var(--secondary-text-color);\n        }\n      </style>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", " ", " ", "\n    "]);

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








var StateInfo =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateInfo, _PolymerElement);

  function StateInfo() {
    _classCallCheck(this, StateInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateInfo).apply(this, arguments));
  }

  _createClass(StateInfo, [{
    key: "computeStateName",
    value: function computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeRTL",
    value: function computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.styleTemplate, this.stateBadgeTemplate, this.infoTemplate);
    }
  }, {
    key: "styleTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
    }
  }, {
    key: "stateBadgeTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3());
    }
  }, {
    key: "infoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: function value() {
            return false;
          }
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "computeRTL(hass)"
        }
      };
    }
  }]);

  return StateInfo;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("state-info", StateInfo);

/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin LocalizeMixin
 */

var HaRelativeTime =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaRelativeTime, _LocalizeMixin);

  _createClass(HaRelativeTime, null, [{
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        datetime: {
          type: String,
          observer: "datetimeChanged"
        },
        datetimeObj: {
          type: Object,
          observer: "datetimeObjChanged"
        },
        parsedDateTime: Object
      };
    }
  }]);

  function HaRelativeTime() {
    var _this;

    _classCallCheck(this, HaRelativeTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaRelativeTime).call(this));
    _this.updateRelative = _this.updateRelative.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaRelativeTime, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "connectedCallback", this).call(this); // update every 60 seconds


      this.updateInterval = setInterval(this.updateRelative, 60000);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "disconnectedCallback", this).call(this);

      clearInterval(this.updateInterval);
    }
  }, {
    key: "datetimeChanged",
    value: function datetimeChanged(newVal) {
      this.parsedDateTime = newVal ? new Date(newVal) : null;
      this.updateRelative();
    }
  }, {
    key: "datetimeObjChanged",
    value: function datetimeObjChanged(newVal) {
      this.parsedDateTime = newVal;
      this.updateRelative();
    }
  }, {
    key: "updateRelative",
    value: function updateRelative() {
      var root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

      if (!this.parsedDateTime) {
        root.innerHTML = this.localize("ui.components.relative_time.never");
      } else {
        root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
      }
    }
  }]);

  return HaRelativeTime;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-relative-time", HaRelativeTime);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGF+Y2xvdWQtZ29vZ2xlLWFzc2lzdGFudH5tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWtpb3NrfnBhbmVsLXN0YXRlcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvcmVsYXRpdmVfdGltZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vaGEtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVJUTCB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbC9jb21wdXRlX3J0bFwiO1xuXG5jbGFzcyBTdGF0ZUluZm8gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuc3R5bGVUZW1wbGF0ZX0gJHt0aGlzLnN0YXRlQmFkZ2VUZW1wbGF0ZX0gJHt0aGlzLmluZm9UZW1wbGF0ZX1cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgc3RhdGUtYmFkZ2Uge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAuaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1NnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYW1lW2luLWRpYWxvZ10sXG4gICAgICAgIDpob3N0KFtzZWNvbmRhcnktbGluZV0pIC5uYW1lIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWFnbyxcbiAgICAgICAgLmV4dHJhLWluZm8sXG4gICAgICAgIC5leHRyYS1pbmZvID4gKiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVCYWRnZVRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWJhZGdlIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiPjwvc3RhdGUtYmFkZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIiBpbi1kaWFsb2ckPVwiW1tpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgW1tjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtYWdvXCI+XG4gICAgICAgICAgICA8aGEtcmVsYXRpdmUtdGltZVxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBkYXRldGltZT1cIltbc3RhdGVPYmoubGFzdF9jaGFuZ2VkXV1cIlxuICAgICAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFpbkRpYWxvZ11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImV4dHJhLWluZm9cIj48c2xvdD4gPC9zbG90PjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiAoKSA9PiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtaW5mb1wiLCBTdGF0ZUluZm8pO1xuIiwiaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHJlbGF0aXZlVGltZSBmcm9tIFwiLi4vY29tbW9uL2RhdGV0aW1lL3JlbGF0aXZlX3RpbWVcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUmVsYXRpdmVUaW1lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGRhdGV0aW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZXRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBkYXRldGltZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgcGFyc2VkRGF0ZVRpbWU6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlID0gdGhpcy51cGRhdGVSZWxhdGl2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAvLyB1cGRhdGUgZXZlcnkgNjAgc2Vjb25kc1xuICAgIHRoaXMudXBkYXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZVJlbGF0aXZlLCA2MDAwMCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy51cGRhdGVJbnRlcnZhbCk7XG4gIH1cblxuICBkYXRldGltZUNoYW5nZWQobmV3VmFsKSB7XG4gICAgdGhpcy5wYXJzZWREYXRlVGltZSA9IG5ld1ZhbCA/IG5ldyBEYXRlKG5ld1ZhbCkgOiBudWxsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgZGF0ZXRpbWVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWw7XG5cbiAgICB0aGlzLnVwZGF0ZVJlbGF0aXZlKCk7XG4gIH1cblxuICB1cGRhdGVSZWxhdGl2ZSgpIHtcbiAgICBjb25zdCByb290ID0gZG9tKHRoaXMpO1xuICAgIGlmICghdGhpcy5wYXJzZWREYXRlVGltZSkge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSB0aGlzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5yZWxhdGl2ZV90aW1lLm5ldmVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LmlubmVySFRNTCA9IHJlbGF0aXZlVGltZSh0aGlzLnBhcnNlZERhdGVUaW1lLCB0aGlzLmxvY2FsaXplKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcmVsYXRpdmUtdGltZVwiLCBIYVJlbGF0aXZlVGltZSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBbUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF4R0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBNkNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFtQkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBYUE7Ozs7QUFqR0E7QUFDQTtBQTJHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBckRBO0FBQ0E7QUF1REE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==