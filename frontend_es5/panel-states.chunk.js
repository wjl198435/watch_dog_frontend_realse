(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-states"],{

/***/ "./src/cards/ha-badges-card.js":
/*!*************************************!*\
  !*** ./src/cards/ha-badges-card.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-state-label-badge {\n          display: inline-block;\n          margin-bottom: var(--ha-state-label-badge-margin-bottom, 16px);\n        }\n      </style>\n      <template is=\"dom-repeat\" items=\"[[states]]\">\n        <ha-state-label-badge\n          hass=\"[[hass]]\"\n          state=\"[[item]]\"\n        ></ha-state-label-badge>\n      </template>\n    "]);

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





var HaBadgesCard =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaBadgesCard, _PolymerElement);

  function HaBadgesCard() {
    _classCallCheck(this, HaBadgesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaBadgesCard).apply(this, arguments));
  }

  _createClass(HaBadgesCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        states: Array
      };
    }
  }]);

  return HaBadgesCard;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-badges-card", HaBadgesCard);

/***/ }),

/***/ "./src/cards/ha-camera-card.js":
/*!*************************************!*\
  !*** ./src/cards/ha-camera-card.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"paper-material-styles\">\n        :host {\n          @apply --paper-material-elevation-1;\n          display: block;\n          position: relative;\n          font-size: 0px;\n          border-radius: 2px;\n          cursor: pointer;\n          min-height: 48px;\n          line-height: 0;\n        }\n        .camera-feed {\n          width: 100%;\n          height: auto;\n          border-radius: 2px;\n        }\n        .caption {\n          @apply --paper-font-common-nowrap;\n          position: absolute;\n          left: 0px;\n          right: 0px;\n          bottom: 0px;\n          border-bottom-left-radius: 2px;\n          border-bottom-right-radius: 2px;\n\n          background-color: rgba(0, 0, 0, 0.3);\n          padding: 16px;\n\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 16px;\n          color: white;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[cameraFeedSrc]]\">\n        <img\n          src=\"[[cameraFeedSrc]]\"\n          class=\"camera-feed\"\n          alt=\"[[_computeStateName(stateObj)]]\"\n          on-load=\"_imageLoaded\"\n          on-error=\"_imageError\"\n        />\n      </template>\n      <div class=\"caption\">\n        [[_computeStateName(stateObj)]]\n        <template is=\"dom-if\" if=\"[[!imageLoaded]]\">\n          ([[localize('ui.card.camera.not_available')]])\n        </template>\n      </div>\n    "]);

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








var UPDATE_INTERVAL = 10000; // ms

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaCameraCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaCameraCard, _LocalizeMixin);

  function HaCameraCard() {
    _classCallCheck(this, HaCameraCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCameraCard).apply(this, arguments));
  }

  _createClass(HaCameraCard, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaCameraCard.prototype), "ready", this).call(this);

      this.addEventListener("click", function () {
        return _this.cardTapped();
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(HaCameraCard.prototype), "connectedCallback", this).call(this);

      this.timer = setInterval(function () {
        return _this2.updateCameraFeedSrc();
      }, UPDATE_INTERVAL);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaCameraCard.prototype), "disconnectedCallback", this).call(this);

      clearInterval(this.timer);
    }
  }, {
    key: "_imageLoaded",
    value: function _imageLoaded() {
      this.imageLoaded = true;
    }
  }, {
    key: "_imageError",
    value: function _imageError() {
      this.imageLoaded = false;
    }
  }, {
    key: "cardTapped",
    value: function cardTapped() {
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }, {
    key: "updateCameraFeedSrc",
    value: function () {
      var _updateCameraFeedSrc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.stateObj.entity_id);

              case 2:
                this.cameraFeedSrc = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateCameraFeedSrc() {
        return _updateCameraFeedSrc.apply(this, arguments);
      }

      return updateCameraFeedSrc;
    }()
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj);
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
        stateObj: {
          type: Object,
          observer: "updateCameraFeedSrc"
        },
        cameraFeedSrc: {
          type: String,
          value: ""
        },
        imageLoaded: {
          type: Boolean,
          value: true
        }
      };
    }
  }]);

  return HaCameraCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("ha-camera-card", HaCameraCard);

/***/ }),

/***/ "./src/cards/ha-card-chooser.js":
/*!**************************************!*\
  !*** ./src/cards/ha-card-chooser.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_camera_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-camera-card */ "./src/cards/ha-camera-card.js");
/* harmony import */ var _ha_entities_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-entities-card */ "./src/cards/ha-entities-card.js");
/* harmony import */ var _ha_history_graph_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _ha_media_player_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-media_player-card */ "./src/cards/ha-media_player-card.js");
/* harmony import */ var _ha_persistent_notification_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-persistent_notification-card */ "./src/cards/ha-persistent_notification-card.js");
/* harmony import */ var _ha_plant_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-plant-card */ "./src/cards/ha-plant-card.js");
/* harmony import */ var _ha_weather_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-weather-card */ "./src/cards/ha-weather-card.js");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var HaCardChooser =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCardChooser, _PolymerElement);

  function HaCardChooser() {
    _classCallCheck(this, HaCardChooser);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCardChooser).apply(this, arguments));
  }

  _createClass(HaCardChooser, [{
    key: "_updateCard",
    value: function _updateCard(newData) {
      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "HA-" + newData.cardType.toUpperCase() + "-CARD", newData);
    }
  }, {
    key: "createObserver",
    value: function createObserver() {
      var _this = this;

      this._updatesAllowed = false;
      this.observer = new IntersectionObserver(function (entries) {
        if (!entries.length) return;

        if (entries[0].isIntersecting) {
          _this.style.height = "";

          if (_this._detachedChild) {
            _this.appendChild(_this._detachedChild);

            _this._detachedChild = null;
          }

          _this._updateCard(_this.cardData); // Don't use 'newData' as it might have changed.


          _this._updatesAllowed = true;
        } else {
          // Set the card to be 48px high. Otherwise if the card is kept as 0px height then all
          // following cards would trigger the observer at once.
          var offsetHeight = _this.offsetHeight;
          _this.style.height = "".concat(offsetHeight || 48, "px");

          if (_this.lastChild) {
            _this._detachedChild = _this.lastChild;

            _this.removeChild(_this.lastChild);
          }

          _this._updatesAllowed = false;
        }
      });
      this.observer.observe(this);
    }
  }, {
    key: "cardDataChanged",
    value: function cardDataChanged(newData) {
      if (!newData) return; // ha-entities-card is exempt from observer as it doesn't load heavy resources.
      // and usually doesn't load external resources (except for entity_picture).

      var eligibleToObserver = window.IntersectionObserver && newData.cardType !== "entities";

      if (!eligibleToObserver) {
        if (this.observer) {
          this.observer.unobserve(this);
          this.observer = null;
        }

        this.style.height = "";

        this._updateCard(newData);

        return;
      }

      if (!this.observer) {
        this.createObserver();
      }

      if (this._updatesAllowed) {
        this._updateCard(newData);
      }
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        cardData: {
          type: Object,
          observer: "cardDataChanged"
        }
      };
    }
  }]);

  return HaCardChooser;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define("ha-card-chooser", HaCardChooser);

/***/ }),

/***/ "./src/cards/ha-entities-card.js":
/*!***************************************!*\
  !*** ./src/cards/ha-entities-card.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/entity/can_toggle_state */ "./src/common/entity/can_toggle_state.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        ha-card {\n          padding: 16px;\n        }\n        .states {\n          margin: -4px 0;\n        }\n        .state {\n          padding: 4px 0;\n        }\n        .header {\n          @apply --paper-font-headline;\n          /* overwriting line-height +8 because entity-toggle can be 40px height,\n           compensating this with reduced padding */\n          line-height: 40px;\n          color: var(--primary-text-color);\n          padding: 4px 0 12px;\n        }\n        .header .name {\n          @apply --paper-font-common-nowrap;\n        }\n        ha-entity-toggle {\n          margin-left: 16px;\n        }\n        .more-info {\n          cursor: pointer;\n        }\n      </style>\n\n      <ha-card>\n        <template is=\"dom-if\" if=\"[[title]]\">\n          <div\n            class$=\"[[computeTitleClass(groupEntity)]]\"\n            on-click=\"entityTapped\"\n          >\n            <div class=\"flex name\">[[title]]</div>\n            <template is=\"dom-if\" if=\"[[showGroupToggle(groupEntity, states)]]\">\n              <ha-entity-toggle\n                hass=\"[[hass]]\"\n                state-obj=\"[[groupEntity]]\"\n              ></ha-entity-toggle>\n            </template>\n          </div>\n        </template>\n        <div class=\"states\">\n          <template\n            is=\"dom-repeat\"\n            items=\"[[states]]\"\n            on-dom-change=\"addTapEvents\"\n          >\n            <div class$=\"[[computeStateClass(item)]]\">\n              <state-card-content\n                hass=\"[[hass]]\"\n                class=\"state-card\"\n                state-obj=\"[[item]]\"\n              ></state-card-content>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var HaEntitiesCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaEntitiesCard, _LocalizeMixin);

  _createClass(HaEntitiesCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        states: Array,
        groupEntity: Object,
        title: {
          type: String,
          computed: "computeTitle(states, groupEntity, localize)"
        }
      };
    }
  }]);

  function HaEntitiesCard() {
    var _this;

    _classCallCheck(this, HaEntitiesCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaEntitiesCard).call(this)); // We need to save a single bound function reference to ensure the event listener
    // can identify it properly.

    _this.entityTapped = _this.entityTapped.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaEntitiesCard, [{
    key: "computeTitle",
    value: function computeTitle(states, groupEntity, localize) {
      if (groupEntity) {
        return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(groupEntity).trim();
      }

      var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(states[0]);
      return localize && localize("domain.".concat(domain)) || domain.replace(/_/g, " ");
    }
  }, {
    key: "computeTitleClass",
    value: function computeTitleClass(groupEntity) {
      var classes = "header horizontal layout center ";

      if (groupEntity) {
        classes += "more-info";
      }

      return classes;
    }
  }, {
    key: "computeStateClass",
    value: function computeStateClass(stateObj) {
      return Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__["stateMoreInfoType"])(stateObj) !== "hidden" ? "state more-info" : "state";
    }
  }, {
    key: "addTapEvents",
    value: function addTapEvents() {
      var _this2 = this;

      var cards = this.root.querySelectorAll(".state");
      cards.forEach(function (card) {
        if (card.classList.contains("more-info")) {
          card.addEventListener("click", _this2.entityTapped);
        } else {
          card.removeEventListener("click", _this2.entityTapped);
        }
      });
    }
  }, {
    key: "entityTapped",
    value: function entityTapped(ev) {
      var item = this.root.querySelector("dom-repeat").itemForElement(ev.target);
      var entityId;

      if (!item && !this.groupEntity) {
        return;
      }

      ev.stopPropagation();

      if (item) {
        entityId = item.entity_id;
      } else {
        entityId = this.groupEntity.entity_id;
      }

      this.fire("hass-more-info", {
        entityId: entityId
      });
    }
  }, {
    key: "showGroupToggle",
    value: function showGroupToggle(groupEntity, states) {
      if (!groupEntity || !states || groupEntity.attributes.control === "hidden" || groupEntity.state !== "on" && groupEntity.state !== "off") {
        return false;
      } // Only show if we can toggle 2+ entities in group


      var canToggleCount = 0;

      for (var i = 0; i < states.length; i++) {
        if (!Object(_common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__["canToggleState"])(this.hass, states[i])) {
          continue;
        }

        canToggleCount++;

        if (canToggleCount > 1) {
          break;
        }
      }

      return canToggleCount > 1;
    }
  }]);

  return HaEntitiesCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("ha-entities-card", HaEntitiesCard);

/***/ }),

/***/ "./src/cards/ha-persistent_notification-card.js":
/*!******************************************************!*\
  !*** ./src/cards/ha-persistent_notification-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --paper-font-body1;\n        }\n        ha-markdown {\n          display: block;\n          padding: 0 16px;\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n        ha-markdown p:first-child {\n          margin-top: 0;\n        }\n        ha-markdown p:last-child {\n          margin-bottom: 0;\n        }\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        ha-markdown img {\n          max-width: 100%;\n        }\n        mwc-button {\n          margin: 8px;\n        }\n      </style>\n\n      <ha-card header=\"[[computeTitle(stateObj)]]\">\n        <ha-markdown content=\"[[stateObj.attributes.message]]\"></ha-markdown>\n        <mwc-button on-click=\"dismissTap\"\n          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button\n        >\n      </ha-card>\n    "]);

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

var HaPersistentNotificationCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPersistentNotificationCard, _LocalizeMixin);

  function HaPersistentNotificationCard() {
    _classCallCheck(this, HaPersistentNotificationCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPersistentNotificationCard).apply(this, arguments));
  }

  _createClass(HaPersistentNotificationCard, [{
    key: "computeTitle",
    value: function computeTitle(stateObj) {
      return stateObj.attributes.title || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj);
    }
  }, {
    key: "dismissTap",
    value: function dismissTap(ev) {
      ev.preventDefault();
      this.hass.callService("persistent_notification", "dismiss", {
        notification_id: Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__["computeObjectId"])(this.stateObj.entity_id)
      });
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
        stateObj: Object
      };
    }
  }]);

  return HaPersistentNotificationCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-persistent_notification-card", HaPersistentNotificationCard);

/***/ }),

/***/ "./src/cards/ha-plant-card.js":
/*!************************************!*\
  !*** ./src/cards/ha-plant-card.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .banner {\n          display: flex;\n          align-items: flex-end;\n          background-repeat: no-repeat;\n          background-size: cover;\n          background-position: center;\n          padding-top: 12px;\n        }\n        .has-plant-image .banner {\n          padding-top: 30%;\n        }\n        .header {\n          @apply --paper-font-headline;\n          line-height: 40px;\n          padding: 8px 16px;\n        }\n        .has-plant-image .header {\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 16px;\n          padding: 16px;\n          color: white;\n          width: 100%;\n          background: rgba(0, 0, 0, var(--dark-secondary-opacity));\n        }\n        .content {\n          display: flex;\n          justify-content: space-between;\n          padding: 16px 32px 24px 32px;\n        }\n        .has-plant-image .content {\n          padding-bottom: 16px;\n        }\n        ha-icon {\n          color: var(--paper-item-icon-color);\n          margin-bottom: 8px;\n        }\n        .attributes {\n          cursor: pointer;\n        }\n        .attributes div {\n          text-align: center;\n        }\n        .problem {\n          color: var(--google-red-500);\n          font-weight: bold;\n        }\n        .uom {\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <ha-card\n        class$=\"[[computeImageClass(stateObj.attributes.entity_picture)]]\"\n      >\n        <div\n          class=\"banner\"\n          style=\"background-image:url([[stateObj.attributes.entity_picture]])\"\n        >\n          <div class=\"header\">[[computeTitle(stateObj)]]</div>\n        </div>\n        <div class=\"content\">\n          <template\n            is=\"dom-repeat\"\n            items=\"[[computeAttributes(stateObj.attributes)]]\"\n          >\n            <div class=\"attributes\" on-click=\"attributeClicked\">\n              <div>\n                <ha-icon\n                  icon=\"[[computeIcon(item, stateObj.attributes.battery)]]\"\n                ></ha-icon>\n              </div>\n              <div\n                class$=\"[[computeAttributeClass(stateObj.attributes.problem, item)]]\"\n              >\n                [[computeValue(stateObj.attributes, item)]]\n              </div>\n              <div class=\"uom\">\n                [[computeUom(stateObj.attributes.unit_of_measurement_dict,\n                item)]]\n              </div>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var HaPlantCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaPlantCard, _EventsMixin);

  _createClass(HaPlantCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        config: Object
      };
    }
  }]);

  function HaPlantCard() {
    var _this;

    _classCallCheck(this, HaPlantCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaPlantCard).call(this));
    _this.sensors = {
      moisture: "hass:water",
      temperature: "hass:thermometer",
      brightness: "hass:white-balance-sunny",
      conductivity: "hass:emoticon-poop",
      battery: "hass:battery"
    };
    return _this;
  }

  _createClass(HaPlantCard, [{
    key: "computeTitle",
    value: function computeTitle(stateObj) {
      return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeAttributes",
    value: function computeAttributes(data) {
      return Object.keys(this.sensors).filter(function (key) {
        return key in data;
      });
    }
  }, {
    key: "computeIcon",
    value: function computeIcon(attr, batLvl) {
      var icon = this.sensors[attr];

      if (attr === "battery") {
        if (batLvl <= 5) {
          return "".concat(icon, "-alert");
        }

        if (batLvl < 95) {
          return "".concat(icon, "-").concat(Math.round(batLvl / 10 - 0.01) * 10);
        }
      }

      return icon;
    }
  }, {
    key: "computeValue",
    value: function computeValue(attributes, attr) {
      return attributes[attr];
    }
  }, {
    key: "computeUom",
    value: function computeUom(dict, attr) {
      return dict[attr] || "";
    }
  }, {
    key: "computeAttributeClass",
    value: function computeAttributeClass(problem, attr) {
      return problem.indexOf(attr) === -1 ? "" : "problem";
    }
  }, {
    key: "computeImageClass",
    value: function computeImageClass(entityPicture) {
      return entityPicture ? "has-plant-image" : "";
    }
  }, {
    key: "attributeClicked",
    value: function attributeClicked(ev) {
      this.fire("hass-more-info", {
        entityId: this.stateObj.attributes.sensors[ev.model.item]
      });
    }
  }]);

  return HaPlantCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-plant-card", HaPlantCard);

/***/ }),

/***/ "./src/cards/ha-weather-card.js":
/*!**************************************!*\
  !*** ./src/cards/ha-weather-card.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          cursor: pointer;\n        }\n\n        .content {\n          padding: 0 20px 20px;\n        }\n\n        ha-icon {\n          color: var(--paper-item-icon-color);\n        }\n\n        .header {\n          font-family: var(--paper-font-headline_-_font-family);\n          -webkit-font-smoothing: var(\n            --paper-font-headline_-_-webkit-font-smoothing\n          );\n          font-size: var(--paper-font-headline_-_font-size);\n          font-weight: var(--paper-font-headline_-_font-weight);\n          letter-spacing: var(--paper-font-headline_-_letter-spacing);\n          line-height: var(--paper-font-headline_-_line-height);\n          text-rendering: var(\n            --paper-font-common-expensive-kerning_-_text-rendering\n          );\n          opacity: var(--dark-primary-opacity);\n          padding: 24px 16px 16px;\n          display: flex;\n          align-items: baseline;\n        }\n\n        .name {\n          margin-left: 16px;\n          font-size: 16px;\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .name {\n          margin-left: 0px;\n          margin-right: 16px;\n        }\n\n        .now {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          flex-wrap: wrap;\n        }\n\n        .main {\n          display: flex;\n          align-items: center;\n          margin-right: 32px;\n        }\n\n        :host([rtl]) .main {\n          margin-right: 0px;\n        }\n\n        .main ha-icon {\n          --iron-icon-height: 72px;\n          --iron-icon-width: 72px;\n          margin-right: 8px;\n        }\n\n        :host([rtl]) .main ha-icon {\n          margin-right: 0px;\n        }\n\n        .main .temp {\n          font-size: 52px;\n          line-height: 1em;\n          position: relative;\n        }\n\n        :host([rtl]) .main .temp {\n          direction: ltr;\n          margin-right: 28px;\n        }\n\n        .main .temp span {\n          font-size: 24px;\n          line-height: 1em;\n          position: absolute;\n          top: 4px;\n        }\n\n        .measurand {\n          display: inline-block;\n        }\n\n        :host([rtl]) .measurand {\n          direction: ltr;\n        }\n\n        .forecast {\n          margin-top: 16px;\n          display: flex;\n          justify-content: space-between;\n        }\n\n        .forecast div {\n          flex: 0 0 auto;\n          text-align: center;\n        }\n\n        .forecast .icon {\n          margin: 4px 0;\n          text-align: center;\n        }\n\n        :host([rtl]) .forecast .temp {\n          direction: ltr;\n        }\n\n        .weekday {\n          font-weight: bold;\n        }\n\n        .attributes,\n        .templow,\n        .precipitation {\n          color: var(--secondary-text-color);\n        }\n\n        :host([rtl]) .precipitation {\n          direction: ltr;\n        }\n      </style>\n      <ha-card>\n        <div class=\"header\">\n          [[computeState(stateObj.state, localize)]]\n          <div class=\"name\">[[computeName(stateObj)]]</div>\n        </div>\n        <div class=\"content\">\n          <div class=\"now\">\n            <div class=\"main\">\n              <template is=\"dom-if\" if=\"[[showWeatherIcon(stateObj.state)]]\">\n                <ha-icon icon=\"[[getWeatherIcon(stateObj.state)]]\"></ha-icon>\n              </template>\n              <div class=\"temp\">\n                [[stateObj.attributes.temperature]]<span\n                  >[[getUnit('temperature')]]</span\n                >\n              </div>\n            </div>\n            <div class=\"attributes\">\n              <template\n                is=\"dom-if\"\n                if=\"[[_showValue(stateObj.attributes.pressure)]]\"\n              >\n                <div>\n                  [[localize('ui.card.weather.attributes.air_pressure')]]:\n                  <span class=\"measurand\">\n                    [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]\n                  </span>\n                </div>\n              </template>\n              <template\n                is=\"dom-if\"\n                if=\"[[_showValue(stateObj.attributes.humidity)]]\"\n              >\n                <div>\n                  [[localize('ui.card.weather.attributes.humidity')]]:\n                  <span class=\"measurand\"\n                    >[[stateObj.attributes.humidity]] %</span\n                  >\n                </div>\n              </template>\n              <template\n                is=\"dom-if\"\n                if=\"[[_showValue(stateObj.attributes.wind_speed)]]\"\n              >\n                <div>\n                  [[localize('ui.card.weather.attributes.wind_speed')]]:\n                  <span class=\"measurand\">\n                    [[getWindSpeed(stateObj.attributes.wind_speed)]]\n                  </span>\n                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]\n                </div>\n              </template>\n            </div>\n          </div>\n          <template is=\"dom-if\" if=\"[[forecast]]\">\n            <div class=\"forecast\">\n              <template is=\"dom-repeat\" items=\"[[forecast]]\">\n                <div>\n                  <div class=\"weekday\">\n                    [[computeDate(item.datetime)]]<br />\n                    <template is=\"dom-if\" if=\"[[!_showValue(item.templow)]]\">\n                      [[computeTime(item.datetime)]]\n                    </template>\n                  </div>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.condition)]]\">\n                    <div class=\"icon\">\n                      <ha-icon\n                        icon=\"[[getWeatherIcon(item.condition)]]\"\n                      ></ha-icon>\n                    </div>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.temperature)]]\">\n                    <div class=\"temp\">\n                      [[item.temperature]] [[getUnit('temperature')]]\n                    </div>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.templow)]]\">\n                    <div class=\"templow\">\n                      [[item.templow]] [[getUnit('temperature')]]\n                    </div>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[_showValue(item.precipitation)]]\">\n                    <div class=\"precipitation\">\n                      [[item.precipitation]] [[getUnit('precipitation')]]\n                    </div>\n                  </template>\n                </div>\n              </template>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var HaWeatherCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaWeatherCard, _LocalizeMixin);

  _createClass(HaWeatherCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        config: Object,
        stateObj: Object,
        forecast: {
          type: Array,
          computed: "computeForecast(stateObj.attributes.forecast)"
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  function HaWeatherCard() {
    var _this;

    _classCallCheck(this, HaWeatherCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaWeatherCard).call(this));
    _this.cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    _this.weatherIcons = {
      "clear-night": "hass:weather-night",
      cloudy: "hass:weather-cloudy",
      exceptional: "hass:alert-circle-outline",
      fog: "hass:weather-fog",
      hail: "hass:weather-hail",
      lightning: "hass:weather-lightning",
      "lightning-rainy": "hass:weather-lightning-rainy",
      partlycloudy: "hass:weather-partly-cloudy",
      pouring: "hass:weather-pouring",
      rainy: "hass:weather-rainy",
      snowy: "hass:weather-snowy",
      "snowy-rainy": "hass:weather-snowy-rainy",
      sunny: "hass:weather-sunny",
      windy: "hass:weather-windy",
      "windy-variant": "hass:weather-windy-variant"
    };
    return _this;
  }

  _createClass(HaWeatherCard, [{
    key: "ready",
    value: function ready() {
      this.addEventListener("click", this._onClick);

      _get(_getPrototypeOf(HaWeatherCard.prototype), "ready", this).call(this);
    }
  }, {
    key: "_onClick",
    value: function _onClick() {
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }, {
    key: "computeForecast",
    value: function computeForecast(forecast) {
      return forecast && forecast.slice(0, 5);
    }
  }, {
    key: "getUnit",
    value: function getUnit(measure) {
      var lengthUnit = this.hass.config.unit_system.length || "";

      switch (measure) {
        case "air_pressure":
          return lengthUnit === "km" ? "hPa" : "inHg";

        case "length":
          return lengthUnit;

        case "precipitation":
          return lengthUnit === "km" ? "mm" : "in";

        default:
          return this.hass.config.unit_system[measure] || "";
      }
    }
  }, {
    key: "computeState",
    value: function computeState(state, localize) {
      return localize("state.weather.".concat(state)) || state;
    }
  }, {
    key: "computeName",
    value: function computeName(stateObj) {
      return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
    }
  }, {
    key: "showWeatherIcon",
    value: function showWeatherIcon(condition) {
      return condition in this.weatherIcons;
    }
  }, {
    key: "getWeatherIcon",
    value: function getWeatherIcon(condition) {
      return this.weatherIcons[condition];
    }
  }, {
    key: "windBearingToText",
    value: function windBearingToText(degree) {
      var degreenum = parseInt(degree);

      if (isFinite(degreenum)) {
        return this.cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
      }

      return degree;
    }
  }, {
    key: "getWindSpeed",
    value: function getWindSpeed(speed) {
      return "".concat(speed, " ").concat(this.getUnit("length"), "/h");
    }
  }, {
    key: "getWindBearing",
    value: function getWindBearing(bearing, localize) {
      if (bearing != null) {
        var cardinalDirection = this.windBearingToText(bearing);
        return "(".concat(localize("ui.card.weather.cardinal_direction.".concat(cardinalDirection.toLowerCase())) || cardinalDirection, ")");
      }

      return "";
    }
  }, {
    key: "_showValue",
    value: function _showValue(item) {
      return typeof item !== "undefined" && item !== null;
    }
  }, {
    key: "computeDate",
    value: function computeDate(data) {
      var date = new Date(data);
      return date.toLocaleDateString(this.hass.language, {
        weekday: "short"
      });
    }
  }, {
    key: "computeTime",
    value: function computeTime(data) {
      var date = new Date(data);
      return date.toLocaleTimeString(this.hass.language, {
        hour: "numeric"
      });
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
    }
  }]);

  return HaWeatherCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])));

customElements.define("ha-weather-card", HaWeatherCard);

/***/ }),

/***/ "./src/common/config/location_name.ts":
/*!********************************************!*\
  !*** ./src/common/config/location_name.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeLocationName; });
/** Get the location name from a hass object. */
function computeLocationName(hass) {
    return hass && hass.config.location_name;
}


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

/***/ "./src/components/ha-cards.js":
/*!************************************!*\
  !*** ./src/components/ha-cards.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_badges_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/ha-badges-card */ "./src/cards/ha-badges-card.js");
/* harmony import */ var _cards_ha_card_chooser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/ha-card-chooser */ "./src/cards/ha-card-chooser.js");
/* harmony import */ var _ha_demo_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-demo-badge */ "./src/components/ha-demo-badge.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/entity/split_by_groups */ "./src/common/entity/split_by_groups.ts");
/* harmony import */ var _common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/entity/get_group_entities */ "./src/common/entity/get_group_entities.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-factors\"></style>\n      <style>\n        :host {\n          display: block;\n          padding: 4px 4px 0;\n          transform: translateZ(0);\n          position: relative;\n        }\n\n        .badges {\n          font-size: 85%;\n          text-align: center;\n          padding-top: 16px;\n        }\n\n        .column {\n          max-width: 500px;\n          overflow-x: hidden;\n        }\n\n        ha-card-chooser {\n          display: block;\n          margin: 4px 4px 8px;\n        }\n\n        @media (max-width: 500px) {\n          :host {\n            padding-left: 0;\n            padding-right: 0;\n          }\n\n          ha-card-chooser {\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n\n        @media (max-width: 599px) {\n          .column {\n            max-width: 600px;\n          }\n        }\n      </style>\n\n      <div id=\"main\">\n        <template is=\"dom-if\" if=\"[[cards.badges.length]]\">\n          <div class=\"badges\">\n            <template is=\"dom-if\" if=\"[[cards.demo]]\">\n              <ha-demo-badge></ha-demo-badge>\n            </template>\n\n            <ha-badges-card\n              states=\"[[cards.badges]]\"\n              hass=\"[[hass]]\"\n            ></ha-badges-card>\n          </div>\n        </template>\n\n        <div class=\"horizontal layout center-justified\">\n          <template is=\"dom-repeat\" items=\"[[cards.columns]]\" as=\"column\">\n            <div class=\"column flex-1\">\n              <template is=\"dom-repeat\" items=\"[[column]]\" as=\"card\">\n                <ha-card-chooser card-data=\"[[card]]\"></ha-card-chooser>\n              </template>\n            </div>\n          </template>\n        </div>\n      </div>\n    "]);

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











 // mapping domain to size of the card.

var DOMAINS_WITH_CARD = {
  camera: 4,
  history_graph: 4,
  media_player: 3,
  persistent_notification: 0,
  plant: 3,
  weather: 4
}; // 4 types:
// badges: 0 .. 10
// before groups < 0
// groups: X
// rest: 100

var PRIORITY = {
  // before groups < 0
  configurator: -20,
  persistent_notification: -15,
  // badges have priority >= 0
  updater: 0,
  sun: 1,
  person: 2,
  device_tracker: 3,
  alarm_control_panel: 4,
  timer: 5,
  sensor: 6,
  binary_sensor: 7,
  mailbox: 8
};

var getPriority = function getPriority(domain) {
  return domain in PRIORITY ? PRIORITY[domain] : 100;
};

var sortPriority = function sortPriority(domainA, domainB) {
  return domainA.priority - domainB.priority;
};

var entitySortBy = function entitySortBy(entityA, entityB) {
  var nameA = (entityA.attributes.friendly_name || entityA.entity_id).toLowerCase();
  var nameB = (entityB.attributes.friendly_name || entityB.entity_id).toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

var iterateDomainSorted = function iterateDomainSorted(collection, func) {
  Object.keys(collection).map(function (key) {
    return collection[key];
  }).sort(sortPriority).forEach(function (domain) {
    domain.states.sort(entitySortBy);
    func(domain);
  });
};

var HaCards =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCards, _PolymerElement);

  function HaCards() {
    _classCallCheck(this, HaCards);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCards).apply(this, arguments));
  }

  _createClass(HaCards, [{
    key: "updateCards",
    value: function updateCards(columns, states, viewVisible, orderedGroupEntities) {
      var _this = this;

      if (!viewVisible) {
        if (this.$.main.parentNode) {
          this.$.main._parentNode = this.$.main.parentNode;
          this.$.main.parentNode.removeChild(this.$.main);
        }

        return;
      }

      if (!this.$.main.parentNode && this.$.main._parentNode) {
        this.$.main._parentNode.appendChild(this.$.main);
      }

      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(10), function () {
        // Things might have changed since it got scheduled.
        if (_this.viewVisible) {
          _this.cards = _this.computeCards(columns, states, orderedGroupEntities);
        }
      });
    }
  }, {
    key: "emptyCards",
    value: function emptyCards() {
      return {
        demo: false,
        badges: [],
        columns: []
      };
    }
  }, {
    key: "computeCards",
    value: function computeCards(columns, states, orderedGroupEntities) {
      var hass = this.hass;
      var cards = this.emptyCards();
      var entityCount = [];

      for (var i = 0; i < columns; i++) {
        cards.columns.push([]);
        entityCount.push(0);
      } // Find column with < 5 entities, else column with lowest count


      function getIndex(size) {
        var minIndex = 0;

        for (var _i = 0; _i < entityCount.length; _i++) {
          if (entityCount[_i] < 5) {
            minIndex = _i;
            break;
          }

          if (entityCount[_i] < entityCount[minIndex]) {
            minIndex = _i;
          }
        }

        entityCount[minIndex] += size;
        return minIndex;
      }

      function addEntitiesCard(name, entities, groupEntity) {
        if (entities.length === 0) return;
        var owncard = [];
        var other = [];
        var size = 0;
        entities.forEach(function (entity) {
          var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(entity);

          if (domain in DOMAINS_WITH_CARD && !entity.attributes.custom_ui_state_card) {
            owncard.push(entity);
            size += DOMAINS_WITH_CARD[domain];
          } else {
            other.push(entity);
            size++;
          }
        }); // Add 1 to the size if we're rendering entities card

        size += other.length > 0;
        var curIndex = getIndex(size);

        if (other.length > 0) {
          cards.columns[curIndex].push({
            hass: hass,
            cardType: "entities",
            states: other,
            groupEntity: groupEntity || false
          });
        }

        owncard.forEach(function (entity) {
          cards.columns[curIndex].push({
            hass: hass,
            cardType: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(entity),
            stateObj: entity
          });
        });
      }

      var splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__["splitByGroups"])(states);

      if (orderedGroupEntities) {
        splitted.groups.sort(function (gr1, gr2) {
          return orderedGroupEntities[gr1.entity_id] - orderedGroupEntities[gr2.entity_id];
        });
      } else {
        splitted.groups.sort(function (gr1, gr2) {
          return gr1.attributes.order - gr2.attributes.order;
        });
      }

      var badgesColl = {};
      var beforeGroupColl = {};
      var afterGroupedColl = {};
      Object.keys(splitted.ungrouped).forEach(function (key) {
        var state = splitted.ungrouped[key];
        var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(state);

        if (domain === "a") {
          cards.demo = true;
          return;
        }

        var priority = getPriority(domain);
        var coll;

        if (priority < 0) {
          coll = beforeGroupColl;
        } else if (priority < 10) {
          coll = badgesColl;
        } else {
          coll = afterGroupedColl;
        }

        if (!(domain in coll)) {
          coll[domain] = {
            domain: domain,
            priority: priority,
            states: []
          };
        }

        coll[domain].states.push(state);
      });

      if (orderedGroupEntities) {
        Object.keys(badgesColl).map(function (key) {
          return badgesColl[key];
        }).forEach(function (domain) {
          cards.badges.push.apply(cards.badges, domain.states);
        });
        cards.badges.sort(function (e1, e2) {
          return orderedGroupEntities[e1.entity_id] - orderedGroupEntities[e2.entity_id];
        });
      } else {
        iterateDomainSorted(badgesColl, function (domain) {
          cards.badges.push.apply(cards.badges, domain.states);
        });
      }

      iterateDomainSorted(beforeGroupColl, function (domain) {
        addEntitiesCard(domain.domain, domain.states);
      });
      splitted.groups.forEach(function (groupState) {
        var entities = Object(_common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__["getGroupEntities"])(states, groupState);
        addEntitiesCard(groupState.entity_id, Object.keys(entities).map(function (key) {
          return entities[key];
        }), groupState);
      });
      iterateDomainSorted(afterGroupedColl, function (domain) {
        addEntitiesCard(domain.domain, domain.states);
      }); // Remove empty columns

      cards.columns = cards.columns.filter(function (val) {
        return val.length > 0;
      });
      return cards;
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
        columns: {
          type: Number,
          value: 2
        },
        states: Object,
        viewVisible: {
          type: Boolean,
          value: false
        },
        orderedGroupEntities: Array,
        cards: Object
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["updateCards(columns, states, viewVisible, orderedGroupEntities)"];
    }
  }]);

  return HaCards;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]);

customElements.define("ha-cards", HaCards);

/***/ }),

/***/ "./src/components/ha-demo-badge.js":
/*!*****************************************!*\
  !*** ./src/components/ha-demo-badge.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-label-badge */ "./src/components/ha-label-badge.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          --ha-label-badge-color: #dac90d;\n        }\n      </style>\n\n      <ha-label-badge\n        icon=\"hass:emoticon\"\n        label=\"Demo\"\n        description=\"\"\n      ></ha-label-badge>\n    "]);

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





var HaDemoBadge =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaDemoBadge, _PolymerElement);

  function HaDemoBadge() {
    _classCallCheck(this, HaDemoBadge);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaDemoBadge).apply(this, arguments));
  }

  _createClass(HaDemoBadge, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }]);

  return HaDemoBadge;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-demo-badge", HaDemoBadge);

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

/***/ "./src/panels/states/ha-panel-states.js":
/*!**********************************************!*\
  !*** ./src/panels/states/ha-panel-states.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_scroll_effects_effects_waterfall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-scroll-effects/effects/waterfall */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-pages/iron-pages */ "./node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _components_ha_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-cards */ "./src/components/ha-cards.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_start_voice_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-start-voice-button */ "./src/components/ha-start-voice-button.js");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/entity/extract_views */ "./src/common/entity/extract_views.ts");
/* harmony import */ var _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/entity/get_view_entities */ "./src/common/entity/get_view_entities.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_location_name__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/config/location_name */ "./src/common/config/location_name.ts");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-positioning ha-style\">\n        :host {\n          -ms-user-select: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n        }\n\n        ha-app-layout {\n          min-height: 100%;\n          background-color: var(--secondary-background-color, #e5e5e5);\n        }\n\n        iron-pages {\n          height: 100%;\n        }\n\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);\n          text-transform: uppercase;\n        }\n      </style>\n      <app-route\n        route=\"{{route}}\"\n        pattern=\"/:view\"\n        data=\"{{routeData}}\"\n        active=\"{{routeMatch}}\"\n      ></app-route>\n      <ha-app-layout id=\"layout\">\n        <app-header effects=\"waterfall\" condenses=\"\" fixed=\"\" slot=\"header\">\n          <app-toolbar>\n            <ha-menu-button\n              hass=\"[[hass]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-menu-button>\n            <div main-title=\"\">\n              [[computeTitle(views, defaultView, locationName)]]\n            </div>\n            <ha-start-voice-button hass=\"[[hass]]\"></ha-start-voice-button>\n          </app-toolbar>\n\n          <div sticky=\"\" hidden$=\"[[areTabsHidden(views, showTabs)]]\">\n            <paper-tabs\n              scrollable=\"\"\n              selected=\"[[currentView]]\"\n              attr-for-selected=\"data-entity\"\n              on-iron-activate=\"handleViewSelected\"\n            >\n              <paper-tab data-entity=\"\" on-click=\"scrollToTop\">\n                <template is=\"dom-if\" if=\"[[!defaultView]]\">\n                  Home\n                </template>\n                <template is=\"dom-if\" if=\"[[defaultView]]\">\n                  <template is=\"dom-if\" if=\"[[defaultView.attributes.icon]]\">\n                    <ha-icon\n                      title$=\"[[_computeStateName(defaultView)]]\"\n                      icon=\"[[defaultView.attributes.icon]]\"\n                    ></ha-icon>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[!defaultView.attributes.icon]]\">\n                    [[_computeStateName(defaultView)]]\n                  </template>\n                </template>\n              </paper-tab>\n              <template is=\"dom-repeat\" items=\"[[views]]\">\n                <paper-tab\n                  data-entity$=\"[[item.entity_id]]\"\n                  on-click=\"scrollToTop\"\n                >\n                  <template is=\"dom-if\" if=\"[[item.attributes.icon]]\">\n                    <ha-icon\n                      title$=\"[[_computeStateName(item)]]\"\n                      icon=\"[[item.attributes.icon]]\"\n                    ></ha-icon>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[!item.attributes.icon]]\">\n                    [[_computeStateName(item)]]\n                  </template>\n                </paper-tab>\n              </template>\n            </paper-tabs>\n          </div>\n        </app-header>\n\n        <iron-pages\n          attr-for-selected=\"data-view\"\n          selected=\"[[currentView]]\"\n          selected-attribute=\"view-visible\"\n        >\n          <ha-cards\n            data-view=\"\"\n            states=\"[[viewStates]]\"\n            columns=\"[[_columns]]\"\n            hass=\"[[hass]]\"\n            panel-visible=\"[[panelVisible]]\"\n            ordered-group-entities=\"[[orderedGroupEntities]]\"\n          ></ha-cards>\n\n          <template is=\"dom-repeat\" items=\"[[views]]\">\n            <ha-cards\n              data-view$=\"[[item.entity_id]]\"\n              states=\"[[viewStates]]\"\n              columns=\"[[_columns]]\"\n              hass=\"[[hass]]\"\n              panel-visible=\"[[panelVisible]]\"\n              ordered-group-entities=\"[[orderedGroupEntities]]\"\n            ></ha-cards>\n          </template>\n        </iron-pages>\n      </ha-app-layout>\n    "]);

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























var DEFAULT_VIEW_ENTITY_ID = "group.default_view";
var ALWAYS_SHOW_DOMAIN = ["persistent_notification", "configurator"];
/*
 * @appliesMixin EventsMixin
 * @appliesMixin NavigateMixin
 */

var PartialCards =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(PartialCards, _EventsMixin);

  function PartialCards() {
    _classCallCheck(this, PartialCards);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartialCards).apply(this, arguments));
  }

  _createClass(PartialCards, [{
    key: "ready",
    value: function ready() {
      this._updateColumns = this._updateColumns.bind(this);
      this.mqls = [300, 600, 900, 1200].map(function (width) {
        return matchMedia("(min-width: ".concat(width, "px)"));
      });

      _get(_getPrototypeOf(PartialCards.prototype), "ready", this).call(this);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(PartialCards.prototype), "connectedCallback", this).call(this);

      this.mqls.forEach(function (mql) {
        return mql.addListener(_this._updateColumns);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(PartialCards.prototype), "disconnectedCallback", this).call(this);

      this.mqls.forEach(function (mql) {
        return mql.removeListener(_this2._updateColumns);
      });
    }
  }, {
    key: "_updateColumns",
    value: function _updateColumns() {
      var matchColumns = this.mqls.reduce(function (cols, mql) {
        return cols + mql.matches;
      }, 0); // Do -1 column if the menu is docked and open

      this._columns = Math.max(1, matchColumns - (!this.narrow && this.hass.dockedSidebar === "docked"));
    }
  }, {
    key: "areTabsHidden",
    value: function areTabsHidden(views, showTabs) {
      return !views || !views.length || !showTabs;
    }
    /**
     * Scroll to a specific y coordinate.
     *
     * Copied from paper-scroll-header-panel.
     *
     * @method scroll
     * @param {number} top The coordinate to scroll to, along the y-axis.
     * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
     */

  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      // the scroll event will trigger _updateScrollState directly,
      // However, _updateScrollState relies on the previous `scrollTop` to update the states.
      // Calling _updateScrollState will ensure that the states are synced correctly.
      var top = 0;
      var scroller = this.$.layout.header.scrollTarget;

      var easingFn = function easeOutQuad(t, b, c, d) {
        /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
        t /= d;
        return -c * t * (t - 2) + b;
        /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
      };

      var animationId = Math.random();
      var duration = 200;
      var startTime = Date.now();
      var currentScrollTop = scroller.scrollTop;
      var deltaScrollTop = top - currentScrollTop;
      this._currentAnimationId = animationId;
      (function updateFrame() {
        var now = Date.now();
        var elapsedTime = now - startTime;

        if (elapsedTime > duration) {
          scroller.scrollTop = top;
        } else if (this._currentAnimationId === animationId) {
          scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
          requestAnimationFrame(updateFrame.bind(this));
        }
      }).call(this);
    }
  }, {
    key: "handleViewSelected",
    value: function handleViewSelected(ev) {
      var view = ev.detail.item.getAttribute("data-entity") || null;

      if (view !== this.currentView) {
        var path = "/states";

        if (view) {
          path += "/" + view;
        }

        this.navigate(path);
      }
    }
  }, {
    key: "_computeCurrentView",
    value: function _computeCurrentView(hass, routeMatch, routeData) {
      if (!routeMatch) return "";

      if (!hass.states[routeData.view] || !hass.states[routeData.view].attributes.view) {
        return "";
      }

      return routeData.view;
    }
  }, {
    key: "computeTitle",
    value: function computeTitle(views, defaultView, locationName) {
      return views && views.length > 0 && !defaultView && locationName === "Home" || !locationName ? "牧养犬" : locationName;
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__["computeStateName"])(stateObj);
    }
  }, {
    key: "_computeLocationName",
    value: function _computeLocationName(hass) {
      return Object(_common_config_location_name__WEBPACK_IMPORTED_MODULE_19__["default"])(hass);
    }
  }, {
    key: "hassChanged",
    value: function hassChanged(hass) {
      if (!hass) return;
      var views = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__["extractViews"])(hass.states);
      var defaultView = null; // If default view present, it's in first index.

      if (views.length > 0 && views[0].entity_id === DEFAULT_VIEW_ENTITY_ID) {
        defaultView = views.shift();
      }

      this.setProperties({
        views: views,
        defaultView: defaultView
      });
    }
  }, {
    key: "isView",
    value: function isView(currentView, defaultView) {
      return (currentView || defaultView) && this.hass.states[currentView || DEFAULT_VIEW_ENTITY_ID];
    }
  }, {
    key: "_defaultViewFilter",
    value: function _defaultViewFilter(hass, entityId) {
      // Filter out hidden
      return !hass.states[entityId].attributes.hidden;
    }
  }, {
    key: "_computeDefaultViewStates",
    value: function _computeDefaultViewStates(hass, entityIds) {
      var states = {};
      entityIds.filter(this._defaultViewFilter.bind(null, hass)).forEach(function (entityId) {
        states[entityId] = hass.states[entityId];
      });
      return states;
    }
    /*
      Compute the states to show for current view.
       Will make sure we always show entities from ALWAYS_SHOW_DOMAINS domains.
    */

  }, {
    key: "computeViewStates",
    value: function computeViewStates(currentView, hass, defaultView) {
      var entityIds = Object.keys(hass.states); // If we base off all entities, only have to filter out hidden

      if (!this.isView(currentView, defaultView)) {
        return this._computeDefaultViewStates(hass, entityIds);
      }

      var states;

      if (currentView) {
        states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["getViewEntities"])(hass.states, hass.states[currentView]);
      } else {
        states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["getViewEntities"])(hass.states, hass.states[DEFAULT_VIEW_ENTITY_ID]);
      } // Make sure certain domains are always shown.


      entityIds.forEach(function (entityId) {
        var state = hass.states[entityId];

        if (ALWAYS_SHOW_DOMAIN.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__["computeStateDomain"])(state))) {
          states[entityId] = state;
        }
      });
      return states;
    }
    /*
      Compute the ordered list of groups for this view
    */

  }, {
    key: "computeOrderedGroupEntities",
    value: function computeOrderedGroupEntities(currentView, hass, defaultView) {
      if (!this.isView(currentView, defaultView)) {
        return null;
      }

      var orderedGroupEntities = {};
      var entitiesList = hass.states[currentView || DEFAULT_VIEW_ENTITY_ID].attributes.entity_id;

      for (var i = 0; i < entitiesList.length; i++) {
        orderedGroupEntities[entitiesList[i]] = i;
      }

      return orderedGroupEntities;
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
          type: Object,
          value: null,
          observer: "hassChanged"
        },
        narrow: {
          type: Boolean,
          value: false
        },
        panelVisible: {
          type: Boolean,
          value: false
        },
        route: Object,
        routeData: Object,
        routeMatch: Boolean,
        _columns: {
          type: Number,
          value: 1
        },
        locationName: {
          type: String,
          value: "",
          computed: "_computeLocationName(hass)"
        },
        currentView: {
          type: String,
          computed: "_computeCurrentView(hass, routeMatch, routeData)"
        },
        views: {
          type: Array
        },
        defaultView: {
          type: Object
        },
        viewStates: {
          type: Object,
          computed: "computeViewStates(currentView, hass, defaultView)"
        },
        orderedGroupEntities: {
          type: Array,
          computed: "computeOrderedGroupEntities(currentView, hass, defaultView)"
        },
        showTabs: {
          type: Boolean,
          value: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_updateColumns(narrow, hass.dockedSidebar)"];
    }
  }]);

  return PartialCards;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__["EventsMixin"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])));

customElements.define("ha-panel-states", PartialCards);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLWJhZGdlcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1jYW1lcmEtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtY2FyZC1jaG9vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1lbnRpdGllcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wbGFudC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS13ZWF0aGVyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvbG9jYXRpb25fbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWRlbW8tYmFkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9uYXZpZ2F0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3N0YXRlcy9oYS1wYW5lbC1zdGF0ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtbGFiZWwtYmFkZ2VcIjtcblxuY2xhc3MgSGFCYWRnZXNDYXJkIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1zdGF0ZS1sYWJlbC1iYWRnZSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWhhLXN0YXRlLWxhYmVsLWJhZGdlLW1hcmdpbi1ib3R0b20sIDE2cHgpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzdGF0ZXNdXVwiPlxuICAgICAgICA8aGEtc3RhdGUtbGFiZWwtYmFkZ2VcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlPVwiW1tpdGVtXV1cIlxuICAgICAgICA+PC9oYS1zdGF0ZS1sYWJlbC1iYWRnZT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVzOiBBcnJheSxcbiAgICB9O1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1iYWRnZXMtY2FyZFwiLCBIYUJhZGdlc0NhcmQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgZmV0Y2hUaHVtYm5haWxVcmxXaXRoQ2FjaGUgfSBmcm9tIFwiLi4vZGF0YS9jYW1lcmFcIjtcblxuY29uc3QgVVBEQVRFX0lOVEVSVkFMID0gMTAwMDA7IC8vIG1zXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhQ2FtZXJhQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlc1wiPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTE7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWluLWhlaWdodDogNDhweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAuY2FtZXJhLWZlZWQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcHRpb24ge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhbWVyYUZlZWRTcmNdXVwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiW1tjYW1lcmFGZWVkU3JjXV1cIlxuICAgICAgICAgIGNsYXNzPVwiY2FtZXJhLWZlZWRcIlxuICAgICAgICAgIGFsdD1cIltbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cIlxuICAgICAgICAgIG9uLWxvYWQ9XCJfaW1hZ2VMb2FkZWRcIlxuICAgICAgICAgIG9uLWVycm9yPVwiX2ltYWdlRXJyb3JcIlxuICAgICAgICAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgIFtbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFpbWFnZUxvYWRlZF1dXCI+XG4gICAgICAgICAgKFtbbG9jYWxpemUoJ3VpLmNhcmQuY2FtZXJhLm5vdF9hdmFpbGFibGUnKV1dKVxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJ1cGRhdGVDYW1lcmFGZWVkU3JjXCIsXG4gICAgICB9LFxuICAgICAgY2FtZXJhRmVlZFNyYzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIGltYWdlTG9hZGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNhcmRUYXBwZWQoKSk7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZUNhbWVyYUZlZWRTcmMoKSwgVVBEQVRFX0lOVEVSVkFMKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgfVxuXG4gIF9pbWFnZUxvYWRlZCgpIHtcbiAgICB0aGlzLmltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIF9pbWFnZUVycm9yKCkge1xuICAgIHRoaXMuaW1hZ2VMb2FkZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNhcmRUYXBwZWQoKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfSk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVDYW1lcmFGZWVkU3JjKCkge1xuICAgIHRoaXMuY2FtZXJhRmVlZFNyYyA9IGF3YWl0IGZldGNoVGh1bWJuYWlsVXJsV2l0aENhY2hlKFxuICAgICAgdGhpcy5oYXNzLFxuICAgICAgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWRcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhbWVyYS1jYXJkXCIsIEhhQ2FtZXJhQ2FyZCk7XG4iLCJpbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL2hhLWNhbWVyYS1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWVudGl0aWVzLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtaGlzdG9yeV9ncmFwaC1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLW1lZGlhX3BsYXllci1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLXBlcnNpc3RlbnRfbm90aWZpY2F0aW9uLWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtcGxhbnQtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS13ZWF0aGVyLWNhcmRcIjtcblxuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuXG5jbGFzcyBIYUNhcmRDaG9vc2VyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmREYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiY2FyZERhdGFDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBfdXBkYXRlQ2FyZChuZXdEYXRhKSB7XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKFxuICAgICAgdGhpcyxcbiAgICAgIFwiSEEtXCIgKyBuZXdEYXRhLmNhcmRUeXBlLnRvVXBwZXJDYXNlKCkgKyBcIi1DQVJEXCIsXG4gICAgICBuZXdEYXRhXG4gICAgKTtcbiAgfVxuXG4gIGNyZWF0ZU9ic2VydmVyKCkge1xuICAgIHRoaXMuX3VwZGF0ZXNBbGxvd2VkID0gZmFsc2U7XG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgaWYgKCFlbnRyaWVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgaWYgKGVudHJpZXNbMF0uaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgICBpZiAodGhpcy5fZGV0YWNoZWRDaGlsZCkge1xuICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fZGV0YWNoZWRDaGlsZCk7XG4gICAgICAgICAgdGhpcy5fZGV0YWNoZWRDaGlsZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlQ2FyZCh0aGlzLmNhcmREYXRhKTsgLy8gRG9uJ3QgdXNlICduZXdEYXRhJyBhcyBpdCBtaWdodCBoYXZlIGNoYW5nZWQuXG4gICAgICAgIHRoaXMuX3VwZGF0ZXNBbGxvd2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNldCB0aGUgY2FyZCB0byBiZSA0OHB4IGhpZ2guIE90aGVyd2lzZSBpZiB0aGUgY2FyZCBpcyBrZXB0IGFzIDBweCBoZWlnaHQgdGhlbiBhbGxcbiAgICAgICAgLy8gZm9sbG93aW5nIGNhcmRzIHdvdWxkIHRyaWdnZXIgdGhlIG9ic2VydmVyIGF0IG9uY2UuXG4gICAgICAgIGNvbnN0IG9mZnNldEhlaWdodCA9IHRoaXMub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke29mZnNldEhlaWdodCB8fCA0OH1weGA7XG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXMuX2RldGFjaGVkQ2hpbGQgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl91cGRhdGVzQWxsb3dlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzKTtcbiAgfVxuXG4gIGNhcmREYXRhQ2hhbmdlZChuZXdEYXRhKSB7XG4gICAgaWYgKCFuZXdEYXRhKSByZXR1cm47XG4gICAgLy8gaGEtZW50aXRpZXMtY2FyZCBpcyBleGVtcHQgZnJvbSBvYnNlcnZlciBhcyBpdCBkb2Vzbid0IGxvYWQgaGVhdnkgcmVzb3VyY2VzLlxuICAgIC8vIGFuZCB1c3VhbGx5IGRvZXNuJ3QgbG9hZCBleHRlcm5hbCByZXNvdXJjZXMgKGV4Y2VwdCBmb3IgZW50aXR5X3BpY3R1cmUpLlxuICAgIGNvbnN0IGVsaWdpYmxlVG9PYnNlcnZlciA9XG4gICAgICB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgbmV3RGF0YS5jYXJkVHlwZSAhPT0gXCJlbnRpdGllc1wiO1xuICAgIGlmICghZWxpZ2libGVUb09ic2VydmVyKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlciA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgICB0aGlzLl91cGRhdGVDYXJkKG5ld0RhdGEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuY3JlYXRlT2JzZXJ2ZXIoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3VwZGF0ZXNBbGxvd2VkKSB7XG4gICAgICB0aGlzLl91cGRhdGVDYXJkKG5ld0RhdGEpO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FyZC1jaG9vc2VyXCIsIEhhQ2FyZENob29zZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGVcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvbnRlbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IHN0YXRlTW9yZUluZm9UeXBlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfbW9yZV9pbmZvX3R5cGVcIjtcbmltcG9ydCB7IGNhblRvZ2dsZVN0YXRlIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY2FuX3RvZ2dsZV9zdGF0ZVwiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jbGFzcyBIYUVudGl0aWVzQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlcyB7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIC8qIG92ZXJ3cml0aW5nIGxpbmUtaGVpZ2h0ICs4IGJlY2F1c2UgZW50aXR5LXRvZ2dsZSBjYW4gYmUgNDBweCBoZWlnaHQsXG4gICAgICAgICAgIGNvbXBlbnNhdGluZyB0aGlzIHdpdGggcmVkdWNlZCBwYWRkaW5nICovXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDAgMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIC5uYW1lIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgaGEtZW50aXR5LXRvZ2dsZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1vcmUtaW5mbyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3RpdGxlXV1cIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVUaXRsZUNsYXNzKGdyb3VwRW50aXR5KV1dXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiZW50aXR5VGFwcGVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBuYW1lXCI+W1t0aXRsZV1dPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd0dyb3VwVG9nZ2xlKGdyb3VwRW50aXR5LCBzdGF0ZXMpXV1cIj5cbiAgICAgICAgICAgICAgPGhhLWVudGl0eS10b2dnbGVcbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbZ3JvdXBFbnRpdHldXVwiXG4gICAgICAgICAgICAgID48L2hhLWVudGl0eS10b2dnbGU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVzXCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlc11dXCJcbiAgICAgICAgICAgIG9uLWRvbS1jaGFuZ2U9XCJhZGRUYXBFdmVudHNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlU3RhdGVDbGFzcyhpdGVtKV1dXCI+XG4gICAgICAgICAgICAgIDxzdGF0ZS1jYXJkLWNvbnRlbnRcbiAgICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic3RhdGUtY2FyZFwiXG4gICAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tpdGVtXV1cIlxuICAgICAgICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZXM6IEFycmF5LFxuICAgICAgZ3JvdXBFbnRpdHk6IE9iamVjdCxcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVRpdGxlKHN0YXRlcywgZ3JvdXBFbnRpdHksIGxvY2FsaXplKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvLyBXZSBuZWVkIHRvIHNhdmUgYSBzaW5nbGUgYm91bmQgZnVuY3Rpb24gcmVmZXJlbmNlIHRvIGVuc3VyZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICAvLyBjYW4gaWRlbnRpZnkgaXQgcHJvcGVybHkuXG4gICAgdGhpcy5lbnRpdHlUYXBwZWQgPSB0aGlzLmVudGl0eVRhcHBlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHN0YXRlcywgZ3JvdXBFbnRpdHksIGxvY2FsaXplKSB7XG4gICAgaWYgKGdyb3VwRW50aXR5KSB7XG4gICAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShncm91cEVudGl0eSkudHJpbSgpO1xuICAgIH1cbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVzWzBdKTtcbiAgICByZXR1cm4gKFxuICAgICAgKGxvY2FsaXplICYmIGxvY2FsaXplKGBkb21haW4uJHtkb21haW59YCkpIHx8IGRvbWFpbi5yZXBsYWNlKC9fL2csIFwiIFwiKVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlVGl0bGVDbGFzcyhncm91cEVudGl0eSkge1xuICAgIGxldCBjbGFzc2VzID0gXCJoZWFkZXIgaG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyIFwiO1xuICAgIGlmIChncm91cEVudGl0eSkge1xuICAgICAgY2xhc3NlcyArPSBcIm1vcmUtaW5mb1wiO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NlcztcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZUNsYXNzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlTW9yZUluZm9UeXBlKHN0YXRlT2JqKSAhPT0gXCJoaWRkZW5cIlxuICAgICAgPyBcInN0YXRlIG1vcmUtaW5mb1wiXG4gICAgICA6IFwic3RhdGVcIjtcbiAgfVxuXG4gIGFkZFRhcEV2ZW50cygpIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0YXRlXCIpO1xuICAgIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGlmIChjYXJkLmNsYXNzTGlzdC5jb250YWlucyhcIm1vcmUtaW5mb1wiKSkge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVudGl0eVRhcHBlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmVudGl0eVRhcHBlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBlbnRpdHlUYXBwZWQoZXYpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5yb290XG4gICAgICAucXVlcnlTZWxlY3RvcihcImRvbS1yZXBlYXRcIilcbiAgICAgIC5pdGVtRm9yRWxlbWVudChldi50YXJnZXQpO1xuICAgIGxldCBlbnRpdHlJZDtcbiAgICBpZiAoIWl0ZW0gJiYgIXRoaXMuZ3JvdXBFbnRpdHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgZW50aXR5SWQgPSBpdGVtLmVudGl0eV9pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZW50aXR5SWQgPSB0aGlzLmdyb3VwRW50aXR5LmVudGl0eV9pZDtcbiAgICB9XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogZW50aXR5SWQgfSk7XG4gIH1cblxuICBzaG93R3JvdXBUb2dnbGUoZ3JvdXBFbnRpdHksIHN0YXRlcykge1xuICAgIGlmIChcbiAgICAgICFncm91cEVudGl0eSB8fFxuICAgICAgIXN0YXRlcyB8fFxuICAgICAgZ3JvdXBFbnRpdHkuYXR0cmlidXRlcy5jb250cm9sID09PSBcImhpZGRlblwiIHx8XG4gICAgICAoZ3JvdXBFbnRpdHkuc3RhdGUgIT09IFwib25cIiAmJiBncm91cEVudGl0eS5zdGF0ZSAhPT0gXCJvZmZcIilcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBPbmx5IHNob3cgaWYgd2UgY2FuIHRvZ2dsZSAyKyBlbnRpdGllcyBpbiBncm91cFxuICAgIGxldCBjYW5Ub2dnbGVDb3VudCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghY2FuVG9nZ2xlU3RhdGUodGhpcy5oYXNzLCBzdGF0ZXNbaV0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjYW5Ub2dnbGVDb3VudCsrO1xuXG4gICAgICBpZiAoY2FuVG9nZ2xlQ291bnQgPiAxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYW5Ub2dnbGVDb3VudCA+IDE7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0aWVzLWNhcmRcIiwgSGFFbnRpdGllc0NhcmQpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX29iamVjdF9pZFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhUGVyc2lzdGVudE5vdGlmaWNhdGlvbkNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBwOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBhIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gaW1nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1jYXJkIGhlYWRlcj1cIltbY29tcHV0ZVRpdGxlKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxoYS1tYXJrZG93biBjb250ZW50PVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1lc3NhZ2VdXVwiPjwvaGEtbWFya2Rvd24+XG4gICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiZGlzbWlzc1RhcFwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQucGVyc2lzdGVudF9ub3RpZmljYXRpb24uZGlzbWlzcycpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVUaXRsZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRpdGxlIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgZGlzbWlzc1RhcChldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJkaXNtaXNzXCIsIHtcbiAgICAgIG5vdGlmaWNhdGlvbl9pZDogY29tcHV0ZU9iamVjdElkKHRoaXMuc3RhdGVPYmouZW50aXR5X2lkKSxcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcImhhLXBlcnNpc3RlbnRfbm90aWZpY2F0aW9uLWNhcmRcIixcbiAgSGFQZXJzaXN0ZW50Tm90aWZpY2F0aW9uQ2FyZFxuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuY2xhc3MgSGFQbGFudENhcmQgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oYXMtcGxhbnQtaW1hZ2UgLmJhbm5lciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWhlYWRsaW5lO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oYXMtcGxhbnQtaW1hZ2UgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrLXNlY29uZGFyeS1vcGFjaXR5KSk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMzJweCAyNHB4IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhhcy1wbGFudC1pbWFnZSAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0taWNvbi1jb2xvcik7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGVzIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0ZXMgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2JsZW0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnVvbSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLWNhcmRcbiAgICAgICAgY2xhc3MkPVwiW1tjb21wdXRlSW1hZ2VDbGFzcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiYmFubmVyXCJcbiAgICAgICAgICBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKFtbc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZV1dKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+W1tjb21wdXRlVGl0bGUoc3RhdGVPYmopXV08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgaXRlbXM9XCJbW2NvbXB1dGVBdHRyaWJ1dGVzKHN0YXRlT2JqLmF0dHJpYnV0ZXMpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdHRyaWJ1dGVzXCIgb24tY2xpY2s9XCJhdHRyaWJ1dGVDbGlja2VkXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJbW2NvbXB1dGVJY29uKGl0ZW0sIHN0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeSldXVwiXG4gICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVBdHRyaWJ1dGVDbGFzcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnByb2JsZW0sIGl0ZW0pXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgW1tjb21wdXRlVmFsdWUoc3RhdGVPYmouYXR0cmlidXRlcywgaXRlbSldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVvbVwiPlxuICAgICAgICAgICAgICAgIFtbY29tcHV0ZVVvbShzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnRfZGljdCxcbiAgICAgICAgICAgICAgICBpdGVtKV1dXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGNvbmZpZzogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc2Vuc29ycyA9IHtcbiAgICAgIG1vaXN0dXJlOiBcImhhc3M6d2F0ZXJcIixcbiAgICAgIHRlbXBlcmF0dXJlOiBcImhhc3M6dGhlcm1vbWV0ZXJcIixcbiAgICAgIGJyaWdodG5lc3M6IFwiaGFzczp3aGl0ZS1iYWxhbmNlLXN1bm55XCIsXG4gICAgICBjb25kdWN0aXZpdHk6IFwiaGFzczplbW90aWNvbi1wb29wXCIsXG4gICAgICBiYXR0ZXJ5OiBcImhhc3M6YmF0dGVyeVwiLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlVGl0bGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm5hbWUpIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZUF0dHJpYnV0ZXMoZGF0YSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnNlbnNvcnMpLmZpbHRlcigoa2V5KSA9PiBrZXkgaW4gZGF0YSk7XG4gIH1cblxuICBjb21wdXRlSWNvbihhdHRyLCBiYXRMdmwpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5zZW5zb3JzW2F0dHJdO1xuICAgIGlmIChhdHRyID09PSBcImJhdHRlcnlcIikge1xuICAgICAgaWYgKGJhdEx2bCA8PSA1KSB7XG4gICAgICAgIHJldHVybiBgJHtpY29ufS1hbGVydGA7XG4gICAgICB9XG4gICAgICBpZiAoYmF0THZsIDwgOTUpIHtcbiAgICAgICAgcmV0dXJuIGAke2ljb259LSR7TWF0aC5yb3VuZChiYXRMdmwgLyAxMCAtIDAuMDEpICogMTB9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGljb247XG4gIH1cblxuICBjb21wdXRlVmFsdWUoYXR0cmlidXRlcywgYXR0cikge1xuICAgIHJldHVybiBhdHRyaWJ1dGVzW2F0dHJdO1xuICB9XG5cbiAgY29tcHV0ZVVvbShkaWN0LCBhdHRyKSB7XG4gICAgcmV0dXJuIGRpY3RbYXR0cl0gfHwgXCJcIjtcbiAgfVxuXG4gIGNvbXB1dGVBdHRyaWJ1dGVDbGFzcyhwcm9ibGVtLCBhdHRyKSB7XG4gICAgcmV0dXJuIHByb2JsZW0uaW5kZXhPZihhdHRyKSA9PT0gLTEgPyBcIlwiIDogXCJwcm9ibGVtXCI7XG4gIH1cblxuICBjb21wdXRlSW1hZ2VDbGFzcyhlbnRpdHlQaWN0dXJlKSB7XG4gICAgcmV0dXJuIGVudGl0eVBpY3R1cmUgPyBcImhhcy1wbGFudC1pbWFnZVwiIDogXCJcIjtcbiAgfVxuXG4gIGF0dHJpYnV0ZUNsaWNrZWQoZXYpIHtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7XG4gICAgICBlbnRpdHlJZDogdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnNlbnNvcnNbZXYubW9kZWwuaXRlbV0sXG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGxhbnQtY2FyZFwiLCBIYVBsYW50Q2FyZCk7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtY2FyZFwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVdlYXRoZXJDYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LWZhbWlseSk7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1mb250LWhlYWRsaW5lXy1fLXdlYmtpdC1mb250LXNtb290aGluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC1zaXplKTtcbiAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtd2VpZ2h0KTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2xldHRlci1zcGFjaW5nKTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2xpbmUtaGVpZ2h0KTtcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1mb250LWNvbW1vbi1leHBlbnNpdmUta2VybmluZ18tX3RleHQtcmVuZGVyaW5nXG4gICAgICAgICAgKTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLXByaW1hcnktb3BhY2l0eSk7XG4gICAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWFpbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiBoYS1pY29uIHtcbiAgICAgICAgICAtLWlyb24taWNvbi1oZWlnaHQ6IDcycHg7XG4gICAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDcycHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm1haW4gaGEtaWNvbiB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiAudGVtcCB7XG4gICAgICAgICAgZm9udC1zaXplOiA1MnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5tYWluIC50ZW1wIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbiAudGVtcCBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWVhc3VyYW5kIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm1lYXN1cmFuZCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZWNhc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZWNhc3QgZGl2IHtcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZWNhc3QgLmljb24ge1xuICAgICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5mb3JlY2FzdCAudGVtcCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICAud2Vla2RheSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXR0cmlidXRlcyxcbiAgICAgICAgLnRlbXBsb3csXG4gICAgICAgIC5wcmVjaXBpdGF0aW9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5wcmVjaXBpdGF0aW9uIHtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxoYS1jYXJkPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgW1tjb21wdXRlU3RhdGUoc3RhdGVPYmouc3RhdGUsIGxvY2FsaXplKV1dXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj5bW2NvbXB1dGVOYW1lKHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzaG93V2VhdGhlckljb24oc3RhdGVPYmouc3RhdGUpXV1cIj5cbiAgICAgICAgICAgICAgICA8aGEtaWNvbiBpY29uPVwiW1tnZXRXZWF0aGVySWNvbihzdGF0ZU9iai5zdGF0ZSldXVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBcIj5cbiAgICAgICAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmVdXTxzcGFuXG4gICAgICAgICAgICAgICAgICA+W1tnZXRVbml0KCd0ZW1wZXJhdHVyZScpXV08L3NwYW5cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRlc1wiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgICAgaWY9XCJbW19zaG93VmFsdWUoc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzc3VyZSldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMuYWlyX3ByZXNzdXJlJyldXTpcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhc3VyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5wcmVzc3VyZV1dIFtbZ2V0VW5pdCgnYWlyX3ByZXNzdXJlJyldXVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgICAgaWY9XCJbW19zaG93VmFsdWUoc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eSldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMuaHVtaWRpdHknKV1dOlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJhbmRcIlxuICAgICAgICAgICAgICAgICAgICA+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5XV0gJTwvc3BhblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgICAgaWY9XCJbW19zaG93VmFsdWUoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy53aW5kX3NwZWVkJyldXTpcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhc3VyYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIFtbZ2V0V2luZFNwZWVkKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZCldXVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgW1tnZXRXaW5kQmVhcmluZyhzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfYmVhcmluZywgbG9jYWxpemUpXV1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tmb3JlY2FzdF1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9yZWNhc3RcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tmb3JlY2FzdF1dXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIFtbY29tcHV0ZURhdGUoaXRlbS5kYXRldGltZSldXTxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9zaG93VmFsdWUoaXRlbS50ZW1wbG93KV1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgW1tjb21wdXRlVGltZShpdGVtLmRhdGV0aW1lKV1dXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0uY29uZGl0aW9uKV1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJbW2dldFdlYXRoZXJJY29uKGl0ZW0uY29uZGl0aW9uKV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnRlbXBlcmF0dXJlKV1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgW1tpdGVtLnRlbXBlcmF0dXJlXV0gW1tnZXRVbml0KCd0ZW1wZXJhdHVyZScpXV1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS50ZW1wbG93KV1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgW1tpdGVtLnRlbXBsb3ddXSBbW2dldFVuaXQoJ3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLnByZWNpcGl0YXRpb24pXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByZWNpcGl0YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICBbW2l0ZW0ucHJlY2lwaXRhdGlvbl1dIFtbZ2V0VW5pdCgncHJlY2lwaXRhdGlvbicpXV1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgY29uZmlnOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgZm9yZWNhc3Q6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVGb3JlY2FzdChzdGF0ZU9iai5hdHRyaWJ1dGVzLmZvcmVjYXN0KVwiLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlUlRMKGhhc3MpXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuY2FyZGluYWxEaXJlY3Rpb25zID0gW1xuICAgICAgXCJOXCIsXG4gICAgICBcIk5ORVwiLFxuICAgICAgXCJORVwiLFxuICAgICAgXCJFTkVcIixcbiAgICAgIFwiRVwiLFxuICAgICAgXCJFU0VcIixcbiAgICAgIFwiU0VcIixcbiAgICAgIFwiU1NFXCIsXG4gICAgICBcIlNcIixcbiAgICAgIFwiU1NXXCIsXG4gICAgICBcIlNXXCIsXG4gICAgICBcIldTV1wiLFxuICAgICAgXCJXXCIsXG4gICAgICBcIldOV1wiLFxuICAgICAgXCJOV1wiLFxuICAgICAgXCJOTldcIixcbiAgICAgIFwiTlwiLFxuICAgIF07XG4gICAgdGhpcy53ZWF0aGVySWNvbnMgPSB7XG4gICAgICBcImNsZWFyLW5pZ2h0XCI6IFwiaGFzczp3ZWF0aGVyLW5pZ2h0XCIsXG4gICAgICBjbG91ZHk6IFwiaGFzczp3ZWF0aGVyLWNsb3VkeVwiLFxuICAgICAgZXhjZXB0aW9uYWw6IFwiaGFzczphbGVydC1jaXJjbGUtb3V0bGluZVwiLFxuICAgICAgZm9nOiBcImhhc3M6d2VhdGhlci1mb2dcIixcbiAgICAgIGhhaWw6IFwiaGFzczp3ZWF0aGVyLWhhaWxcIixcbiAgICAgIGxpZ2h0bmluZzogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nXCIsXG4gICAgICBcImxpZ2h0bmluZy1yYWlueVwiOiBcImhhc3M6d2VhdGhlci1saWdodG5pbmctcmFpbnlcIixcbiAgICAgIHBhcnRseWNsb3VkeTogXCJoYXNzOndlYXRoZXItcGFydGx5LWNsb3VkeVwiLFxuICAgICAgcG91cmluZzogXCJoYXNzOndlYXRoZXItcG91cmluZ1wiLFxuICAgICAgcmFpbnk6IFwiaGFzczp3ZWF0aGVyLXJhaW55XCIsXG4gICAgICBzbm93eTogXCJoYXNzOndlYXRoZXItc25vd3lcIixcbiAgICAgIFwic25vd3ktcmFpbnlcIjogXCJoYXNzOndlYXRoZXItc25vd3ktcmFpbnlcIixcbiAgICAgIHN1bm55OiBcImhhc3M6d2VhdGhlci1zdW5ueVwiLFxuICAgICAgd2luZHk6IFwiaGFzczp3ZWF0aGVyLXdpbmR5XCIsXG4gICAgICBcIndpbmR5LXZhcmlhbnRcIjogXCJoYXNzOndlYXRoZXItd2luZHktdmFyaWFudFwiLFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9vbkNsaWNrKTtcbiAgICBzdXBlci5yZWFkeSgpO1xuICB9XG5cbiAgX29uQ2xpY2soKSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQgfSk7XG4gIH1cblxuICBjb21wdXRlRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgICByZXR1cm4gZm9yZWNhc3QgJiYgZm9yZWNhc3Quc2xpY2UoMCwgNSk7XG4gIH1cblxuICBnZXRVbml0KG1lYXN1cmUpIHtcbiAgICBjb25zdCBsZW5ndGhVbml0ID0gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbS5sZW5ndGggfHwgXCJcIjtcbiAgICBzd2l0Y2ggKG1lYXN1cmUpIHtcbiAgICAgIGNhc2UgXCJhaXJfcHJlc3N1cmVcIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwiaFBhXCIgOiBcImluSGdcIjtcbiAgICAgIGNhc2UgXCJsZW5ndGhcIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQ7XG4gICAgICBjYXNlIFwicHJlY2lwaXRhdGlvblwiOlxuICAgICAgICByZXR1cm4gbGVuZ3RoVW5pdCA9PT0gXCJrbVwiID8gXCJtbVwiIDogXCJpblwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW1bbWVhc3VyZV0gfHwgXCJcIjtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlU3RhdGUoc3RhdGUsIGxvY2FsaXplKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZS53ZWF0aGVyLiR7c3RhdGV9YCkgfHwgc3RhdGU7XG4gIH1cblxuICBjb21wdXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcubmFtZSkgfHwgY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBzaG93V2VhdGhlckljb24oY29uZGl0aW9uKSB7XG4gICAgcmV0dXJuIGNvbmRpdGlvbiBpbiB0aGlzLndlYXRoZXJJY29ucztcbiAgfVxuXG4gIGdldFdlYXRoZXJJY29uKGNvbmRpdGlvbikge1xuICAgIHJldHVybiB0aGlzLndlYXRoZXJJY29uc1tjb25kaXRpb25dO1xuICB9XG5cbiAgd2luZEJlYXJpbmdUb1RleHQoZGVncmVlKSB7XG4gICAgY29uc3QgZGVncmVlbnVtID0gcGFyc2VJbnQoZGVncmVlKTtcbiAgICBpZiAoaXNGaW5pdGUoZGVncmVlbnVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FyZGluYWxEaXJlY3Rpb25zWygoKGRlZ3JlZW51bSArIDExLjI1KSAvIDIyLjUpIHwgMCkgJSAxNl07XG4gICAgfVxuICAgIHJldHVybiBkZWdyZWU7XG4gIH1cblxuICBnZXRXaW5kU3BlZWQoc3BlZWQpIHtcbiAgICByZXR1cm4gYCR7c3BlZWR9ICR7dGhpcy5nZXRVbml0KFwibGVuZ3RoXCIpfS9oYDtcbiAgfVxuXG4gIGdldFdpbmRCZWFyaW5nKGJlYXJpbmcsIGxvY2FsaXplKSB7XG4gICAgaWYgKGJlYXJpbmcgIT0gbnVsbCkge1xuICAgICAgY29uc3QgY2FyZGluYWxEaXJlY3Rpb24gPSB0aGlzLndpbmRCZWFyaW5nVG9UZXh0KGJlYXJpbmcpO1xuICAgICAgcmV0dXJuIGAoJHtsb2NhbGl6ZShcbiAgICAgICAgYHVpLmNhcmQud2VhdGhlci5jYXJkaW5hbF9kaXJlY3Rpb24uJHtjYXJkaW5hbERpcmVjdGlvbi50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICkgfHwgY2FyZGluYWxEaXJlY3Rpb259KWA7XG4gICAgfVxuICAgIHJldHVybiBgYDtcbiAgfVxuXG4gIF9zaG93VmFsdWUoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVtICE9PSBudWxsO1xuICB9XG5cbiAgY29tcHV0ZURhdGUoZGF0YSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5oYXNzLmxhbmd1YWdlLCB7IHdlZWtkYXk6IFwic2hvcnRcIiB9KTtcbiAgfVxuXG4gIGNvbXB1dGVUaW1lKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwgeyBob3VyOiBcIm51bWVyaWNcIiB9KTtcbiAgfVxuXG4gIF9jb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtd2VhdGhlci1jYXJkXCIsIEhhV2VhdGhlckNhcmQpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vKiogR2V0IHRoZSBsb2NhdGlvbiBuYW1lIGZyb20gYSBoYXNzIG9iamVjdC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVMb2NhdGlvbk5hbWUoaGFzczogSG9tZUFzc2lzdGFudCk6IHN0cmluZyB7XG4gIHJldHVybiBoYXNzICYmIGhhc3MuY29uZmlnLmxvY2F0aW9uX25hbWU7XG59XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcblxuY2xhc3MgSGFDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoZWFkZXI/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJhY2tncm91bmQsXG4gICAgICAgICAgdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSlcbiAgICAgICAgKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGEtY2FyZC1ib3JkZXItcmFkaXVzLCAycHgpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoXG4gICAgICAgICAgLS1oYS1jYXJkLWJveC1zaGFkb3csXG4gICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuICAgICAgICAgIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKVxuICAgICAgICApO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLWhlYWRlcixcbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1oZWFkZXIpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWNvbG9yLCAtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oYS1jYXJkLWhlYWRlci1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1zaXplLCAyNHB4KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4IDE2cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudDpub3QoOmZpcnN0LWNoaWxkKSksXG4gICAgICBzbG90Om5vdCg6Zmlyc3QtY2hpbGQpOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQpIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWFjdGlvbnMpIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5oZWFkZXJcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+JHt0aGlzLmhlYWRlcn08L2Rpdj5cbiAgICAgICAgICBgXG4gICAgICAgIDogaHRtbGBgfVxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2FyZFwiLCBIYUNhcmQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY2FyZHMvaGEtYmFkZ2VzLWNhcmRcIjtcbmltcG9ydCBcIi4uL2NhcmRzL2hhLWNhcmQtY2hvb3NlclwiO1xuaW1wb3J0IFwiLi9oYS1kZW1vLWJhZGdlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBzcGxpdEJ5R3JvdXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3BsaXRfYnlfZ3JvdXBzXCI7XG5pbXBvcnQgeyBnZXRHcm91cEVudGl0aWVzIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvZ2V0X2dyb3VwX2VudGl0aWVzXCI7XG5cbi8vIG1hcHBpbmcgZG9tYWluIHRvIHNpemUgb2YgdGhlIGNhcmQuXG5jb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IHtcbiAgY2FtZXJhOiA0LFxuICBoaXN0b3J5X2dyYXBoOiA0LFxuICBtZWRpYV9wbGF5ZXI6IDMsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiAwLFxuICBwbGFudDogMyxcbiAgd2VhdGhlcjogNCxcbn07XG5cbi8vIDQgdHlwZXM6XG4vLyBiYWRnZXM6IDAgLi4gMTBcbi8vIGJlZm9yZSBncm91cHMgPCAwXG4vLyBncm91cHM6IFhcbi8vIHJlc3Q6IDEwMFxuXG5jb25zdCBQUklPUklUWSA9IHtcbiAgLy8gYmVmb3JlIGdyb3VwcyA8IDBcbiAgY29uZmlndXJhdG9yOiAtMjAsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiAtMTUsXG5cbiAgLy8gYmFkZ2VzIGhhdmUgcHJpb3JpdHkgPj0gMFxuICB1cGRhdGVyOiAwLFxuICBzdW46IDEsXG4gIHBlcnNvbjogMixcbiAgZGV2aWNlX3RyYWNrZXI6IDMsXG4gIGFsYXJtX2NvbnRyb2xfcGFuZWw6IDQsXG4gIHRpbWVyOiA1LFxuICBzZW5zb3I6IDYsXG4gIGJpbmFyeV9zZW5zb3I6IDcsXG4gIG1haWxib3g6IDgsXG59O1xuXG5jb25zdCBnZXRQcmlvcml0eSA9IChkb21haW4pID0+IChkb21haW4gaW4gUFJJT1JJVFkgPyBQUklPUklUWVtkb21haW5dIDogMTAwKTtcblxuY29uc3Qgc29ydFByaW9yaXR5ID0gKGRvbWFpbkEsIGRvbWFpbkIpID0+IGRvbWFpbkEucHJpb3JpdHkgLSBkb21haW5CLnByaW9yaXR5O1xuXG5jb25zdCBlbnRpdHlTb3J0QnkgPSAoZW50aXR5QSwgZW50aXR5QikgPT4ge1xuICBjb25zdCBuYW1lQSA9IChcbiAgICBlbnRpdHlBLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBlbnRpdHlBLmVudGl0eV9pZFxuICApLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IG5hbWVCID0gKFxuICAgIGVudGl0eUIuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IGVudGl0eUIuZW50aXR5X2lkXG4gICkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgaXRlcmF0ZURvbWFpblNvcnRlZCA9IChjb2xsZWN0aW9uLCBmdW5jKSA9PiB7XG4gIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pXG4gICAgLm1hcCgoa2V5KSA9PiBjb2xsZWN0aW9uW2tleV0pXG4gICAgLnNvcnQoc29ydFByaW9yaXR5KVxuICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgIGRvbWFpbi5zdGF0ZXMuc29ydChlbnRpdHlTb3J0QnkpO1xuICAgICAgZnVuYyhkb21haW4pO1xuICAgIH0pO1xufTtcblxuY2xhc3MgSGFDYXJkcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA0cHggMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhZGdlcyB7XG4gICAgICAgICAgZm9udC1zaXplOiA4NSU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkLWNob29zZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogNHB4IDRweCA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhLWNhcmQtY2hvb3NlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2FyZHMuYmFkZ2VzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhZGdlc1wiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhcmRzLmRlbW9dXVwiPlxuICAgICAgICAgICAgICA8aGEtZGVtby1iYWRnZT48L2hhLWRlbW8tYmFkZ2U+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8aGEtYmFkZ2VzLWNhcmRcbiAgICAgICAgICAgICAgc3RhdGVzPVwiW1tjYXJkcy5iYWRnZXNdXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICA+PC9oYS1iYWRnZXMtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyLWp1c3RpZmllZFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbY2FyZHMuY29sdW1uc11dXCIgYXM9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gZmxleC0xXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbY29sdW1uXV1cIiBhcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aGEtY2FyZC1jaG9vc2VyIGNhcmQtZGF0YT1cIltbY2FyZF1dXCI+PC9oYS1jYXJkLWNob29zZXI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgY29sdW1uczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAyLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVzOiBPYmplY3QsXG5cbiAgICAgIHZpZXdWaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIG9yZGVyZWRHcm91cEVudGl0aWVzOiBBcnJheSxcblxuICAgICAgY2FyZHM6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInVwZGF0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgdmlld1Zpc2libGUsIG9yZGVyZWRHcm91cEVudGl0aWVzKVwiXTtcbiAgfVxuXG4gIHVwZGF0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgdmlld1Zpc2libGUsIG9yZGVyZWRHcm91cEVudGl0aWVzKSB7XG4gICAgaWYgKCF2aWV3VmlzaWJsZSkge1xuICAgICAgaWYgKHRoaXMuJC5tYWluLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy4kLm1haW4uX3BhcmVudE5vZGUgPSB0aGlzLiQubWFpbi5wYXJlbnROb2RlO1xuICAgICAgICB0aGlzLiQubWFpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJC5tYWluKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLiQubWFpbi5wYXJlbnROb2RlICYmIHRoaXMuJC5tYWluLl9wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLiQubWFpbi5fcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiQubWFpbik7XG4gICAgfVxuICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMTApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBUaGluZ3MgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIGl0IGdvdCBzY2hlZHVsZWQuXG4gICAgICAgIGlmICh0aGlzLnZpZXdWaXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY29tcHV0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgb3JkZXJlZEdyb3VwRW50aXRpZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGVtcHR5Q2FyZHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbW86IGZhbHNlLFxuICAgICAgYmFkZ2VzOiBbXSxcbiAgICAgIGNvbHVtbnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ2FyZHMoY29sdW1ucywgc3RhdGVzLCBvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG5cbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuZW1wdHlDYXJkcygpO1xuXG4gICAgY29uc3QgZW50aXR5Q291bnQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgY2FyZHMuY29sdW1ucy5wdXNoKFtdKTtcbiAgICAgIGVudGl0eUNvdW50LnB1c2goMCk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBjb2x1bW4gd2l0aCA8IDUgZW50aXRpZXMsIGVsc2UgY29sdW1uIHdpdGggbG93ZXN0IGNvdW50XG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoc2l6ZSkge1xuICAgICAgbGV0IG1pbkluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXR5Q291bnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVudGl0eUNvdW50W2ldIDwgNSkge1xuICAgICAgICAgIG1pbkluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50aXR5Q291bnRbaV0gPCBlbnRpdHlDb3VudFttaW5JbmRleF0pIHtcbiAgICAgICAgICBtaW5JbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW50aXR5Q291bnRbbWluSW5kZXhdICs9IHNpemU7XG5cbiAgICAgIHJldHVybiBtaW5JbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFbnRpdGllc0NhcmQobmFtZSwgZW50aXRpZXMsIGdyb3VwRW50aXR5KSB7XG4gICAgICBpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IG93bmNhcmQgPSBbXTtcbiAgICAgIGNvbnN0IG90aGVyID0gW107XG5cbiAgICAgIGxldCBzaXplID0gMDtcblxuICAgICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb21haW4gaW4gRE9NQUlOU19XSVRIX0NBUkQgJiZcbiAgICAgICAgICAhZW50aXR5LmF0dHJpYnV0ZXMuY3VzdG9tX3VpX3N0YXRlX2NhcmRcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3duY2FyZC5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgc2l6ZSArPSBET01BSU5TX1dJVEhfQ0FSRFtkb21haW5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG90aGVyLnB1c2goZW50aXR5KTtcbiAgICAgICAgICBzaXplKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgMSB0byB0aGUgc2l6ZSBpZiB3ZSdyZSByZW5kZXJpbmcgZW50aXRpZXMgY2FyZFxuICAgICAgc2l6ZSArPSBvdGhlci5sZW5ndGggPiAwO1xuXG4gICAgICBjb25zdCBjdXJJbmRleCA9IGdldEluZGV4KHNpemUpO1xuXG4gICAgICBpZiAob3RoZXIubGVuZ3RoID4gMCkge1xuICAgICAgICBjYXJkcy5jb2x1bW5zW2N1ckluZGV4XS5wdXNoKHtcbiAgICAgICAgICBoYXNzOiBoYXNzLFxuICAgICAgICAgIGNhcmRUeXBlOiBcImVudGl0aWVzXCIsXG4gICAgICAgICAgc3RhdGVzOiBvdGhlcixcbiAgICAgICAgICBncm91cEVudGl0eTogZ3JvdXBFbnRpdHkgfHwgZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvd25jYXJkLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBjYXJkcy5jb2x1bW5zW2N1ckluZGV4XS5wdXNoKHtcbiAgICAgICAgICBoYXNzOiBoYXNzLFxuICAgICAgICAgIGNhcmRUeXBlOiBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSxcbiAgICAgICAgICBzdGF0ZU9iajogZW50aXR5LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNwbGl0dGVkID0gc3BsaXRCeUdyb3VwcyhzdGF0ZXMpO1xuICAgIGlmIChvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgICAgc3BsaXR0ZWQuZ3JvdXBzLnNvcnQoXG4gICAgICAgIChncjEsIGdyMikgPT5cbiAgICAgICAgICBvcmRlcmVkR3JvdXBFbnRpdGllc1tncjEuZW50aXR5X2lkXSAtXG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZ3IyLmVudGl0eV9pZF1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0dGVkLmdyb3Vwcy5zb3J0KFxuICAgICAgICAoZ3IxLCBncjIpID0+IGdyMS5hdHRyaWJ1dGVzLm9yZGVyIC0gZ3IyLmF0dHJpYnV0ZXMub3JkZXJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgYmFkZ2VzQ29sbCA9IHt9O1xuICAgIGNvbnN0IGJlZm9yZUdyb3VwQ29sbCA9IHt9O1xuICAgIGNvbnN0IGFmdGVyR3JvdXBlZENvbGwgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHNwbGl0dGVkLnVuZ3JvdXBlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHNwbGl0dGVkLnVuZ3JvdXBlZFtrZXldO1xuICAgICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKTtcblxuICAgICAgaWYgKGRvbWFpbiA9PT0gXCJhXCIpIHtcbiAgICAgICAgY2FyZHMuZGVtbyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBnZXRQcmlvcml0eShkb21haW4pO1xuICAgICAgbGV0IGNvbGw7XG5cbiAgICAgIGlmIChwcmlvcml0eSA8IDApIHtcbiAgICAgICAgY29sbCA9IGJlZm9yZUdyb3VwQ29sbDtcbiAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPCAxMCkge1xuICAgICAgICBjb2xsID0gYmFkZ2VzQ29sbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGwgPSBhZnRlckdyb3VwZWRDb2xsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShkb21haW4gaW4gY29sbCkpIHtcbiAgICAgICAgY29sbFtkb21haW5dID0ge1xuICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICBzdGF0ZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2xsW2RvbWFpbl0uc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9yZGVyZWRHcm91cEVudGl0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhiYWRnZXNDb2xsKVxuICAgICAgICAubWFwKChrZXkpID0+IGJhZGdlc0NvbGxba2V5XSlcbiAgICAgICAgLmZvckVhY2goKGRvbWFpbikgPT4ge1xuICAgICAgICAgIGNhcmRzLmJhZGdlcy5wdXNoLmFwcGx5KGNhcmRzLmJhZGdlcywgZG9tYWluLnN0YXRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBjYXJkcy5iYWRnZXMuc29ydChcbiAgICAgICAgKGUxLCBlMikgPT5cbiAgICAgICAgICBvcmRlcmVkR3JvdXBFbnRpdGllc1tlMS5lbnRpdHlfaWRdIC1cbiAgICAgICAgICBvcmRlcmVkR3JvdXBFbnRpdGllc1tlMi5lbnRpdHlfaWRdXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlRG9tYWluU29ydGVkKGJhZGdlc0NvbGwsIChkb21haW4pID0+IHtcbiAgICAgICAgY2FyZHMuYmFkZ2VzLnB1c2guYXBwbHkoY2FyZHMuYmFkZ2VzLCBkb21haW4uc3RhdGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGl0ZXJhdGVEb21haW5Tb3J0ZWQoYmVmb3JlR3JvdXBDb2xsLCAoZG9tYWluKSA9PiB7XG4gICAgICBhZGRFbnRpdGllc0NhcmQoZG9tYWluLmRvbWFpbiwgZG9tYWluLnN0YXRlcyk7XG4gICAgfSk7XG5cbiAgICBzcGxpdHRlZC5ncm91cHMuZm9yRWFjaCgoZ3JvdXBTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKHN0YXRlcywgZ3JvdXBTdGF0ZSk7XG4gICAgICBhZGRFbnRpdGllc0NhcmQoXG4gICAgICAgIGdyb3VwU3RhdGUuZW50aXR5X2lkLFxuICAgICAgICBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKChrZXkpID0+IGVudGl0aWVzW2tleV0pLFxuICAgICAgICBncm91cFN0YXRlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgaXRlcmF0ZURvbWFpblNvcnRlZChhZnRlckdyb3VwZWRDb2xsLCAoZG9tYWluKSA9PiB7XG4gICAgICBhZGRFbnRpdGllc0NhcmQoZG9tYWluLmRvbWFpbiwgZG9tYWluLnN0YXRlcyk7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgY29sdW1uc1xuICAgIGNhcmRzLmNvbHVtbnMgPSBjYXJkcy5jb2x1bW5zLmZpbHRlcigodmFsKSA9PiB2YWwubGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY2FyZHM7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRzXCIsIEhhQ2FyZHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1sYWJlbC1iYWRnZVwiO1xuXG5jbGFzcyBIYURlbW9CYWRnZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6ICNkYWM5MGQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1sYWJlbC1iYWRnZVxuICAgICAgICBpY29uPVwiaGFzczplbW90aWNvblwiXG4gICAgICAgIGxhYmVsPVwiRGVtb1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiXCJcbiAgICAgID48L2hhLWxhYmVsLWJhZGdlPlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZGVtby1iYWRnZVwiLCBIYURlbW9CYWRnZSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuLypcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIG5hdmlnYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvZWZmZWN0cy93YXRlcmZhbGxcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLXBhZ2VzL2lyb24tcGFnZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFiXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXN0YXJ0LXZvaWNlLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcblxuaW1wb3J0IHsgZXh0cmFjdFZpZXdzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZXh0cmFjdF92aWV3c1wiO1xuaW1wb3J0IHsgZ2V0Vmlld0VudGl0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZUxvY2F0aW9uTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9sb2NhdGlvbl9uYW1lXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuY29uc3QgQUxXQVlTX1NIT1dfRE9NQUlOID0gW1wicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJjb25maWd1cmF0b3JcIl07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgUGFydGlhbENhcmRzIGV4dGVuZHMgRXZlbnRzTWl4aW4oTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tcG9zaXRpb25pbmcgaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1hcHAtbGF5b3V0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjZTVlNWU1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlyb24tcGFnZXMge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IsICNmZmYpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86dmlld1wiXG4gICAgICAgIGRhdGE9XCJ7e3JvdXRlRGF0YX19XCJcbiAgICAgICAgYWN0aXZlPVwie3tyb3V0ZU1hdGNofX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGhhLWFwcC1sYXlvdXQgaWQ9XCJsYXlvdXRcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiIGNvbmRlbnNlcz1cIlwiIGZpeGVkPVwiXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbY29tcHV0ZVRpdGxlKHZpZXdzLCBkZWZhdWx0VmlldywgbG9jYXRpb25OYW1lKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoYS1zdGFydC12b2ljZS1idXR0b24gaGFzcz1cIltbaGFzc11dXCI+PC9oYS1zdGFydC12b2ljZS1idXR0b24+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgICAgIDxkaXYgc3RpY2t5PVwiXCIgaGlkZGVuJD1cIltbYXJlVGFic0hpZGRlbih2aWV3cywgc2hvd1RhYnMpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgICAgIHNjcm9sbGFibGU9XCJcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1lbnRpdHlcIlxuICAgICAgICAgICAgICBvbi1pcm9uLWFjdGl2YXRlPVwiaGFuZGxlVmlld1NlbGVjdGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXRhYiBkYXRhLWVudGl0eT1cIlwiIG9uLWNsaWNrPVwic2Nyb2xsVG9Ub3BcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRlZmF1bHRWaWV3XV1cIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZWZhdWx0Vmlld11dXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZGVmYXVsdFZpZXcuYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiW1tkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiXG4gICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3ZpZXdzXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdGFiXG4gICAgICAgICAgICAgICAgICBkYXRhLWVudGl0eSQ9XCJbW2l0ZW0uZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJzY3JvbGxUb1RvcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIlxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaXRlbS5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8aXJvbi1wYWdlc1xuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS12aWV3XCJcbiAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgc2VsZWN0ZWQtYXR0cmlidXRlPVwidmlldy12aXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1jYXJkc1xuICAgICAgICAgICAgZGF0YS12aWV3PVwiXCJcbiAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgIGNvbHVtbnM9XCJbW19jb2x1bW5zXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgIG9yZGVyZWQtZ3JvdXAtZW50aXRpZXM9XCJbW29yZGVyZWRHcm91cEVudGl0aWVzXV1cIlxuICAgICAgICAgID48L2hhLWNhcmRzPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t2aWV3c11dXCI+XG4gICAgICAgICAgICA8aGEtY2FyZHNcbiAgICAgICAgICAgICAgZGF0YS12aWV3JD1cIltbaXRlbS5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgICAgY29sdW1ucz1cIltbX2NvbHVtbnNdXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgICAgb3JkZXJlZC1ncm91cC1lbnRpdGllcz1cIltbb3JkZXJlZEdyb3VwRW50aXRpZXNdXVwiXG4gICAgICAgICAgICA+PC9oYS1jYXJkcz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2lyb24tcGFnZXM+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHBhbmVsVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICByb3V0ZU1hdGNoOiBCb29sZWFuLFxuXG4gICAgICBfY29sdW1uczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcblxuICAgICAgbG9jYXRpb25OYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlTG9jYXRpb25OYW1lKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBjdXJyZW50Vmlldzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ3VycmVudFZpZXcoaGFzcywgcm91dGVNYXRjaCwgcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgdmlld3M6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICB2aWV3U3RhdGVzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVZpZXdTdGF0ZXMoY3VycmVudFZpZXcsIGhhc3MsIGRlZmF1bHRWaWV3KVwiLFxuICAgICAgfSxcblxuICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVPcmRlcmVkR3JvdXBFbnRpdGllcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93VGFiczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfdXBkYXRlQ29sdW1ucyhuYXJyb3csIGhhc3MuZG9ja2VkU2lkZWJhcilcIl07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICB0aGlzLl91cGRhdGVDb2x1bW5zID0gdGhpcy5fdXBkYXRlQ29sdW1ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubXFscyA9IFszMDAsIDYwMCwgOTAwLCAxMjAwXS5tYXAoKHdpZHRoKSA9PlxuICAgICAgbWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKVxuICAgICk7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5tcWxzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKHRoaXMuX3VwZGF0ZUNvbHVtbnMpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5tcWxzLmZvckVhY2goKG1xbCkgPT4gbXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMuX3VwZGF0ZUNvbHVtbnMpKTtcbiAgfVxuXG4gIF91cGRhdGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IG1hdGNoQ29sdW1ucyA9IHRoaXMubXFscy5yZWR1Y2UoKGNvbHMsIG1xbCkgPT4gY29scyArIG1xbC5tYXRjaGVzLCAwKTtcbiAgICAvLyBEbyAtMSBjb2x1bW4gaWYgdGhlIG1lbnUgaXMgZG9ja2VkIGFuZCBvcGVuXG4gICAgdGhpcy5fY29sdW1ucyA9IE1hdGgubWF4KFxuICAgICAgMSxcbiAgICAgIG1hdGNoQ29sdW1ucyAtICghdGhpcy5uYXJyb3cgJiYgdGhpcy5oYXNzLmRvY2tlZFNpZGViYXIgPT09IFwiZG9ja2VkXCIpXG4gICAgKTtcbiAgfVxuXG4gIGFyZVRhYnNIaWRkZW4odmlld3MsIHNob3dUYWJzKSB7XG4gICAgcmV0dXJuICF2aWV3cyB8fCAhdmlld3MubGVuZ3RoIHx8ICFzaG93VGFicztcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyB5IGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIENvcGllZCBmcm9tIHBhcGVyLXNjcm9sbC1oZWFkZXItcGFuZWwuXG4gICAqXG4gICAqIEBtZXRob2Qgc2Nyb2xsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIGNvb3JkaW5hdGUgdG8gc2Nyb2xsIHRvLCBhbG9uZyB0aGUgeS1heGlzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNtb290aCB0cnVlIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gc2hvdWxkIGJlIHNtb290aGx5IGFkanVzdGVkLlxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgLy8gdGhlIHNjcm9sbCBldmVudCB3aWxsIHRyaWdnZXIgX3VwZGF0ZVNjcm9sbFN0YXRlIGRpcmVjdGx5LFxuICAgIC8vIEhvd2V2ZXIsIF91cGRhdGVTY3JvbGxTdGF0ZSByZWxpZXMgb24gdGhlIHByZXZpb3VzIGBzY3JvbGxUb3BgIHRvIHVwZGF0ZSB0aGUgc3RhdGVzLlxuICAgIC8vIENhbGxpbmcgX3VwZGF0ZVNjcm9sbFN0YXRlIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHN0YXRlcyBhcmUgc3luY2VkIGNvcnJlY3RseS5cbiAgICB2YXIgdG9wID0gMDtcbiAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLiQubGF5b3V0LmhlYWRlci5zY3JvbGxUYXJnZXQ7XG4gICAgdmFyIGVhc2luZ0ZuID0gZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIHNwYWNlLWluZml4LW9wcywgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4gICAgICB0IC89IGQ7XG4gICAgICByZXR1cm4gLWMgKiB0ICogKHQgLSAyKSArIGI7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBzcGFjZS1pbmZpeC1vcHMsIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuICAgIH07XG4gICAgdmFyIGFuaW1hdGlvbklkID0gTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZHVyYXRpb24gPSAyMDA7XG4gICAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGN1cnJlbnRTY3JvbGxUb3AgPSBzY3JvbGxlci5zY3JvbGxUb3A7XG4gICAgdmFyIGRlbHRhU2Nyb2xsVG9wID0gdG9wIC0gY3VycmVudFNjcm9sbFRvcDtcbiAgICB0aGlzLl9jdXJyZW50QW5pbWF0aW9uSWQgPSBhbmltYXRpb25JZDtcbiAgICAoZnVuY3Rpb24gdXBkYXRlRnJhbWUoKSB7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBlbGFwc2VkVGltZSA9IG5vdyAtIHN0YXJ0VGltZTtcbiAgICAgIGlmIChlbGFwc2VkVGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudEFuaW1hdGlvbklkID09PSBhbmltYXRpb25JZCkge1xuICAgICAgICBzY3JvbGxlci5zY3JvbGxUb3AgPSBlYXNpbmdGbihcbiAgICAgICAgICBlbGFwc2VkVGltZSxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wLFxuICAgICAgICAgIGRlbHRhU2Nyb2xsVG9wLFxuICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LmNhbGwodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlVmlld1NlbGVjdGVkKGV2KSB7XG4gICAgY29uc3QgdmlldyA9IGV2LmRldGFpbC5pdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZW50aXR5XCIpIHx8IG51bGw7XG5cbiAgICBpZiAodmlldyAhPT0gdGhpcy5jdXJyZW50Vmlldykge1xuICAgICAgbGV0IHBhdGggPSBcIi9zdGF0ZXNcIjtcbiAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgIHBhdGggKz0gXCIvXCIgKyB2aWV3O1xuICAgICAgfVxuICAgICAgdGhpcy5uYXZpZ2F0ZShwYXRoKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUN1cnJlbnRWaWV3KGhhc3MsIHJvdXRlTWF0Y2gsIHJvdXRlRGF0YSkge1xuICAgIGlmICghcm91dGVNYXRjaCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKFxuICAgICAgIWhhc3Muc3RhdGVzW3JvdXRlRGF0YS52aWV3XSB8fFxuICAgICAgIWhhc3Muc3RhdGVzW3JvdXRlRGF0YS52aWV3XS5hdHRyaWJ1dGVzLnZpZXdcbiAgICApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVEYXRhLnZpZXc7XG4gIH1cblxuICBjb21wdXRlVGl0bGUodmlld3MsIGRlZmF1bHRWaWV3LCBsb2NhdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gKHZpZXdzICYmXG4gICAgICB2aWV3cy5sZW5ndGggPiAwICYmXG4gICAgICAhZGVmYXVsdFZpZXcgJiZcbiAgICAgIGxvY2F0aW9uTmFtZSA9PT0gXCJIb21lXCIpIHx8XG4gICAgICAhbG9jYXRpb25OYW1lXG4gICAgICA/IFwi54mn5YW754qsXCJcbiAgICAgIDogbG9jYXRpb25OYW1lO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBfY29tcHV0ZUxvY2F0aW9uTmFtZShoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVMb2NhdGlvbk5hbWUoaGFzcyk7XG4gIH1cblxuICBoYXNzQ2hhbmdlZChoYXNzKSB7XG4gICAgaWYgKCFoYXNzKSByZXR1cm47XG4gICAgY29uc3Qgdmlld3MgPSBleHRyYWN0Vmlld3MoaGFzcy5zdGF0ZXMpO1xuICAgIGxldCBkZWZhdWx0VmlldyA9IG51bGw7XG4gICAgLy8gSWYgZGVmYXVsdCB2aWV3IHByZXNlbnQsIGl0J3MgaW4gZmlyc3QgaW5kZXguXG4gICAgaWYgKHZpZXdzLmxlbmd0aCA+IDAgJiYgdmlld3NbMF0uZW50aXR5X2lkID09PSBERUZBVUxUX1ZJRVdfRU5USVRZX0lEKSB7XG4gICAgICBkZWZhdWx0VmlldyA9IHZpZXdzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmlld3MsIGRlZmF1bHRWaWV3IH0pO1xuICB9XG5cbiAgaXNWaWV3KGN1cnJlbnRWaWV3LCBkZWZhdWx0Vmlldykge1xuICAgIHJldHVybiAoXG4gICAgICAoY3VycmVudFZpZXcgfHwgZGVmYXVsdFZpZXcpICYmXG4gICAgICB0aGlzLmhhc3Muc3RhdGVzW2N1cnJlbnRWaWV3IHx8IERFRkFVTFRfVklFV19FTlRJVFlfSURdXG4gICAgKTtcbiAgfVxuXG4gIF9kZWZhdWx0Vmlld0ZpbHRlcihoYXNzLCBlbnRpdHlJZCkge1xuICAgIC8vIEZpbHRlciBvdXQgaGlkZGVuXG4gICAgcmV0dXJuICFoYXNzLnN0YXRlc1tlbnRpdHlJZF0uYXR0cmlidXRlcy5oaWRkZW47XG4gIH1cblxuICBfY29tcHV0ZURlZmF1bHRWaWV3U3RhdGVzKGhhc3MsIGVudGl0eUlkcykge1xuICAgIGNvbnN0IHN0YXRlcyA9IHt9O1xuICAgIGVudGl0eUlkc1xuICAgICAgLmZpbHRlcih0aGlzLl9kZWZhdWx0Vmlld0ZpbHRlci5iaW5kKG51bGwsIGhhc3MpKVxuICAgICAgLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICAgIHN0YXRlc1tlbnRpdHlJZF0gPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgICB9KTtcbiAgICByZXR1cm4gc3RhdGVzO1xuICB9XG5cbiAgLypcbiAgICBDb21wdXRlIHRoZSBzdGF0ZXMgdG8gc2hvdyBmb3IgY3VycmVudCB2aWV3LlxuXG4gICAgV2lsbCBtYWtlIHN1cmUgd2UgYWx3YXlzIHNob3cgZW50aXRpZXMgZnJvbSBBTFdBWVNfU0hPV19ET01BSU5TIGRvbWFpbnMuXG4gICovXG4gIGNvbXB1dGVWaWV3U3RhdGVzKGN1cnJlbnRWaWV3LCBoYXNzLCBkZWZhdWx0Vmlldykge1xuICAgIGNvbnN0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgIC8vIElmIHdlIGJhc2Ugb2ZmIGFsbCBlbnRpdGllcywgb25seSBoYXZlIHRvIGZpbHRlciBvdXQgaGlkZGVuXG4gICAgaWYgKCF0aGlzLmlzVmlldyhjdXJyZW50VmlldywgZGVmYXVsdFZpZXcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZURlZmF1bHRWaWV3U3RhdGVzKGhhc3MsIGVudGl0eUlkcyk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlcztcbiAgICBpZiAoY3VycmVudFZpZXcpIHtcbiAgICAgIHN0YXRlcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgaGFzcy5zdGF0ZXNbY3VycmVudFZpZXddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZ2V0Vmlld0VudGl0aWVzKFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgaGFzcy5zdGF0ZXNbREVGQVVMVF9WSUVXX0VOVElUWV9JRF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGNlcnRhaW4gZG9tYWlucyBhcmUgYWx3YXlzIHNob3duLlxuICAgIGVudGl0eUlkcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG5cbiAgICAgIGlmIChBTFdBWVNfU0hPV19ET01BSU4uaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKSkpIHtcbiAgICAgICAgc3RhdGVzW2VudGl0eUlkXSA9IHN0YXRlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIC8qXG4gICAgQ29tcHV0ZSB0aGUgb3JkZXJlZCBsaXN0IG9mIGdyb3VwcyBmb3IgdGhpcyB2aWV3XG4gICovXG4gIGNvbXB1dGVPcmRlcmVkR3JvdXBFbnRpdGllcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpIHtcbiAgICBpZiAoIXRoaXMuaXNWaWV3KGN1cnJlbnRWaWV3LCBkZWZhdWx0VmlldykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBvcmRlcmVkR3JvdXBFbnRpdGllcyA9IHt9O1xuICAgIHZhciBlbnRpdGllc0xpc3QgPVxuICAgICAgaGFzcy5zdGF0ZXNbY3VycmVudFZpZXcgfHwgREVGQVVMVF9WSUVXX0VOVElUWV9JRF0uYXR0cmlidXRlcy5lbnRpdHlfaWQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZW50aXRpZXNMaXN0W2ldXSA9IGk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyZWRHcm91cEVudGl0aWVzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLXN0YXRlc1wiLCBQYXJ0aWFsQ2FyZHMpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBY0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQXZCQTtBQUNBO0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBMEVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTs7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBN0dBO0FBQ0E7QUFvREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVZBO0FBZUE7Ozs7QUF4RUE7QUFDQTtBQStHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTs7OztBQVJBO0FBQ0E7QUFtRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUErREE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBU0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFwS0E7QUFDQTtBQXFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUF2REE7QUFDQTtBQW9DQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBN0NBO0FBQ0E7QUF5REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUF3RkE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBU0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7OztBQXhKQTtBQUNBO0FBMEpBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7O0FBQ0E7QUFDQTtBQStOQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVJBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFyQkE7QUFzQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQVVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUE3V0E7QUFDQTtBQThXQTs7Ozs7Ozs7Ozs7O0FDNVhBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQVNBO0FBQUE7QUFBQTs7QUE2REE7QUExREE7QUFBQTtBQUNBO0FBNkNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUhBO0FBTUE7QUEzREE7QUFBQTtBQUFBO0FBNERBO0FBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFvR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7OztBQXBTQTtBQUNBO0FBc0VBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBakJBO0FBbUJBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFsR0E7QUFDQTtBQXNTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JYQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQWFBOzs7O0FBZkE7QUFDQTtBQWlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBdUxBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFoWUE7QUFDQTtBQWdIQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF2REE7QUE0REE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQXJMQTtBQUNBO0FBbVlBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=