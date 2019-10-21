(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/cards/ha-media_player-card.js":
/*!*******************************************!*\
  !*** ./src/cards/ha-media_player-card.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_progress_paper_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-progress/paper-progress */ "./node_modules/@polymer/paper-progress/paper-progress.js");
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
/* harmony import */ var _data_media_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/media-player */ "./src/data/media-player.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style\n        include=\"paper-material-styles iron-flex iron-flex-alignment iron-positioning\"\n      >\n        :host {\n          @apply --paper-material-elevation-1;\n          display: block;\n          position: relative;\n          font-size: 0px;\n          border-radius: 2px;\n        }\n\n        .banner {\n          position: relative;\n          background-color: white;\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px;\n        }\n\n        .banner:before {\n          display: block;\n          content: \"\";\n          width: 100%;\n          /* removed .25% from 16:9 ratio to fix YT black bars */\n          padding-top: 56%;\n          transition: padding-top 0.8s;\n        }\n\n        .banner.no-cover {\n          background-position: center center;\n          background-image: url(/static/images/card_media_player_bg.png);\n          background-repeat: no-repeat;\n          background-color: var(--primary-color);\n        }\n\n        .banner.content-type-music:before {\n          padding-top: 100%;\n        }\n\n        .banner.content-type-game:before {\n          padding-top: 100%;\n        }\n\n        .banner.no-cover:before {\n          padding-top: 88px;\n        }\n\n        .banner > .cover {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n\n          border-top-left-radius: 2px;\n          border-top-right-radius: 2px;\n\n          background-position: center center;\n          background-size: cover;\n          transition: opacity 0.8s;\n          opacity: 1;\n        }\n\n        .banner.is-off > .cover {\n          opacity: 0;\n        }\n\n        .banner > .caption {\n          @apply --paper-font-caption;\n\n          position: absolute;\n          left: 0;\n          right: 0;\n          bottom: 0;\n\n          background-color: rgba(0, 0, 0, var(--dark-secondary-opacity));\n\n          padding: 8px 16px;\n\n          font-size: 14px;\n          font-weight: 500;\n          color: white;\n\n          transition: background-color 0.5s;\n        }\n\n        .banner.is-off > .caption {\n          background-color: initial;\n        }\n\n        .banner > .caption .title {\n          @apply --paper-font-common-nowrap;\n          font-size: 1.2em;\n          margin: 8px 0 4px;\n        }\n\n        .progress {\n          width: 100%;\n          height: var(--paper-progress-height, 4px);\n          margin-top: calc(-1 * var(--paper-progress-height, 4px));\n          --paper-progress-active-color: var(--accent-color);\n          --paper-progress-container-color: rgba(200, 200, 200, 0.5);\n        }\n\n        .controls {\n          position: relative;\n          @apply --paper-font-body1;\n          padding: 8px;\n          border-bottom-left-radius: 2px;\n          border-bottom-right-radius: 2px;\n          background-color: var(--paper-card-background-color, white);\n        }\n\n        .controls paper-icon-button {\n          width: 44px;\n          height: 44px;\n        }\n\n        .playback-controls {\n          direction: ltr;\n        }\n\n        paper-icon-button {\n          opacity: var(--dark-primary-opacity);\n        }\n\n        paper-icon-button[disabled] {\n          opacity: var(--dark-disabled-opacity);\n        }\n\n        paper-icon-button.primary {\n          width: 56px !important;\n          height: 56px !important;\n          background-color: var(--primary-color);\n          color: white;\n          border-radius: 50%;\n          padding: 8px;\n          transition: background-color 0.5s;\n        }\n\n        paper-icon-button.primary[disabled] {\n          background-color: rgba(0, 0, 0, var(--dark-disabled-opacity));\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div\n        class$=\"[[computeBannerClasses(playerObj, _coverShowing, _coverLoadError)]]\"\n      >\n        <div class=\"cover\" id=\"cover\"></div>\n\n        <div class=\"caption\">\n          [[_computeStateName(stateObj)]]\n          <div class=\"title\">[[computePrimaryText(localize, playerObj)]]</div>\n          [[playerObj.secondaryTitle]]<br />\n        </div>\n      </div>\n\n      <paper-progress\n        max=\"[[stateObj.attributes.media_duration]]\"\n        value=\"[[playbackPosition]]\"\n        hidden$=\"[[computeHideProgress(playerObj)]]\"\n        class=\"progress\"\n      ></paper-progress>\n\n      <div class=\"controls layout horizontal justified\">\n        <paper-icon-button\n          aria-label=\"Turn off\"\n          icon=\"hass:power\"\n          on-click=\"handleTogglePower\"\n          invisible$=\"[[computeHidePowerButton(playerObj)]]\"\n          class=\"self-center secondary\"\n        ></paper-icon-button>\n\n        <div class=\"playback-controls\">\n          <paper-icon-button\n            aria-label=\"Previous track\"\n            icon=\"hass:skip-previous\"\n            invisible$=\"[[!playerObj.supportsPreviousTrack]]\"\n            disabled=\"[[playerObj.isOff]]\"\n            on-click=\"handlePrevious\"\n          ></paper-icon-button>\n          <paper-icon-button\n            aria-label=\"Play or Pause\"\n            class=\"primary\"\n            icon=\"[[computePlaybackControlIcon(playerObj)]]\"\n            invisible$=\"[[!computePlaybackControlIcon(playerObj)]]\"\n            disabled=\"[[playerObj.isOff]]\"\n            on-click=\"handlePlaybackControl\"\n          ></paper-icon-button>\n          <paper-icon-button\n            aria-label=\"Next track\"\n            icon=\"hass:skip-next\"\n            invisible$=\"[[!playerObj.supportsNextTrack]]\"\n            disabled=\"[[playerObj.isOff]]\"\n            on-click=\"handleNext\"\n          ></paper-icon-button>\n        </div>\n\n        <paper-icon-button\n          aria-label=\"More information.\"\n          icon=\"hass:dots-vertical\"\n          on-click=\"handleOpenMoreInfo\"\n          class=\"self-center secondary\"\n        ></paper-icon-button>\n      </div>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaMediaPlayerCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaMediaPlayerCard, _LocalizeMixin);

  function HaMediaPlayerCard() {
    _classCallCheck(this, HaMediaPlayerCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMediaPlayerCard).apply(this, arguments));
  }

  _createClass(HaMediaPlayerCard, [{
    key: "playerObjChanged",
    value: function () {
      var _playerObjChanged = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(playerObj, oldPlayerObj) {
        var _this = this;

        var picture, oldPicture, _ref, contentType, content;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (playerObj.isPlaying && playerObj.showProgress) {
                  if (!this._positionTracking) {
                    this._positionTracking = setInterval(function () {
                      return _this.updatePlaybackPosition();
                    }, 1000);
                  }
                } else if (this._positionTracking) {
                  clearInterval(this._positionTracking);
                  this._positionTracking = null;
                }

                if (playerObj.showProgress) {
                  this.updatePlaybackPosition();
                }

                picture = playerObj.stateObj.attributes.entity_picture;
                oldPicture = oldPlayerObj && oldPlayerObj.stateObj.attributes.entity_picture;

                if (!(picture !== oldPicture && !picture)) {
                  _context.next = 7;
                  break;
                }

                this.$.cover.style.backgroundImage = "";
                return _context.abrupt("return");

              case 7:
                if (!(picture === oldPicture)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                if (!(picture.substr(0, 1) !== "/")) {
                  _context.next = 14;
                  break;
                }

                this._coverShowing = true;
                this._coverLoadError = false;
                this.$.cover.style.backgroundImage = "url(".concat(picture, ")");
                return _context.abrupt("return");

              case 14:
                _context.prev = 14;
                _context.next = 17;
                return Object(_data_media_player__WEBPACK_IMPORTED_MODULE_7__["fetchMediaPlayerThumbnailWithCache"])(this.hass, playerObj.stateObj.entity_id);

              case 17:
                _ref = _context.sent;
                contentType = _ref.content_type;
                content = _ref.content;
                this._coverShowing = true;
                this._coverLoadError = false;
                this.$.cover.style.backgroundImage = "url(data:".concat(contentType, ";base64,").concat(content, ")");
                _context.next = 30;
                break;

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](14);
                this._coverShowing = false;
                this._coverLoadError = true;
                this.$.cover.style.backgroundImage = "";

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 25]]);
      }));

      function playerObjChanged(_x, _x2) {
        return _playerObjChanged.apply(this, arguments);
      }

      return playerObjChanged;
    }()
  }, {
    key: "updatePlaybackPosition",
    value: function updatePlaybackPosition() {
      this.playbackPosition = this.playerObj.currentProgress;
    }
  }, {
    key: "computeBannerClasses",
    value: function computeBannerClasses(playerObj, coverShowing, coverLoadError) {
      var cls = "banner";

      if (!playerObj) {
        return cls;
      }

      if (playerObj.isOff || playerObj.isIdle) {
        cls += " is-off no-cover";
      } else if (!playerObj.stateObj.attributes.entity_picture || coverLoadError || !coverShowing) {
        cls += " no-cover";
      } else if (playerObj.stateObj.attributes.media_content_type === "music") {
        cls += " content-type-music";
      } else if (playerObj.stateObj.attributes.media_content_type === "game") {
        cls += " content-type-game";
      }

      return cls;
    }
  }, {
    key: "computeHideProgress",
    value: function computeHideProgress(playerObj) {
      return !playerObj.showProgress;
    }
  }, {
    key: "computeHidePowerButton",
    value: function computeHidePowerButton(playerObj) {
      return playerObj.isOff ? !playerObj.supportsTurnOn : !playerObj.supportsTurnOff;
    }
  }, {
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
    }
  }, {
    key: "computePrimaryText",
    value: function computePrimaryText(localize, playerObj) {
      return playerObj.primaryTitle || localize("state.media_player.".concat(playerObj.stateObj.state)) || localize("state.default.".concat(playerObj.stateObj.state)) || playerObj.stateObj.state;
    }
  }, {
    key: "computePlaybackControlIcon",
    value: function computePlaybackControlIcon(playerObj) {
      if (playerObj.isPlaying) {
        return playerObj.supportsPause ? "hass:pause" : "hass:stop";
      }

      if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
        if (playerObj.hasMediaControl && playerObj.supportsPause && !playerObj.isPaused) {
          return "hass:play-pause";
        }

        return playerObj.supportsPlay ? "hass:play" : null;
      }

      return "";
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
    }
  }, {
    key: "handleNext",
    value: function handleNext(ev) {
      ev.stopPropagation();
      this.playerObj.nextTrack();
    }
  }, {
    key: "handleOpenMoreInfo",
    value: function handleOpenMoreInfo(ev) {
      ev.stopPropagation();
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }, {
    key: "handlePlaybackControl",
    value: function handlePlaybackControl(ev) {
      ev.stopPropagation();
      this.playerObj.mediaPlayPause();
    }
  }, {
    key: "handlePrevious",
    value: function handlePrevious(ev) {
      ev.stopPropagation();
      this.playerObj.previousTrack();
    }
  }, {
    key: "handleTogglePower",
    value: function handleTogglePower(ev) {
      ev.stopPropagation();
      this.playerObj.togglePower();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        playerObj: {
          type: Object,
          computed: "computePlayerObj(hass, stateObj)",
          observer: "playerObjChanged"
        },
        playbackControlIcon: {
          type: String,
          computed: "computePlaybackControlIcon(playerObj)"
        },
        playbackPosition: Number,
        _coverShowing: {
          type: Boolean,
          value: false
        },
        _coverLoadError: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaMediaPlayerCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

customElements.define("ha-media_player-card", HaMediaPlayerCard);

/***/ }),

/***/ "./src/common/entity/extract_views.ts":
/*!********************************************!*\
  !*** ./src/common/entity/extract_views.ts ***!
  \********************************************/
/*! exports provided: extractViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractViews", function() { return extractViews; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");

// Return an ordered array of available views
var extractViews = function (entities) {
    var views = [];
    Object.keys(entities).forEach(function (entityId) {
        var entity = entities[entityId];
        if (entity.attributes.view) {
            views.push(entity);
        }
    });
    views.sort(function (view1, view2) {
        if (view1.entity_id === _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIEW_ENTITY_ID"]) {
            return -1;
        }
        if (view2.entity_id === _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_VIEW_ENTITY_ID"]) {
            return 1;
        }
        return view1.attributes.order - view2.attributes.order;
    });
    return views;
};


/***/ }),

/***/ "./src/common/entity/get_group_entities.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/get_group_entities.ts ***!
  \*************************************************/
/*! exports provided: getGroupEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupEntities", function() { return getGroupEntities; });
var getGroupEntities = function (entities, group) {
    var result = {};
    group.attributes.entity_id.forEach(function (entityId) {
        var entity = entities[entityId];
        if (entity) {
            result[entity.entity_id] = entity;
        }
    });
    return result;
};


/***/ }),

/***/ "./src/common/entity/get_view_entities.ts":
/*!************************************************!*\
  !*** ./src/common/entity/get_view_entities.ts ***!
  \************************************************/
/*! exports provided: getViewEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewEntities", function() { return getViewEntities; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _get_group_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get_group_entities */ "./src/common/entity/get_group_entities.ts");


// Return an object containing all entities that the view will show
// including embedded groups.
var getViewEntities = function (entities, view) {
    var viewEntities = {};
    view.attributes.entity_id.forEach(function (entityId) {
        var entity = entities[entityId];
        if (entity && !entity.attributes.hidden) {
            viewEntities[entity.entity_id] = entity;
            if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entity.entity_id) === "group") {
                var groupEntities_1 = Object(_get_group_entities__WEBPACK_IMPORTED_MODULE_1__["getGroupEntities"])(entities, entity);
                Object.keys(groupEntities_1).forEach(function (grEntityId) {
                    var grEntity = groupEntities_1[grEntityId];
                    if (!grEntity.attributes.hidden) {
                        viewEntities[grEntityId] = grEntity;
                    }
                });
            }
        }
    });
    return viewEntities;
};


/***/ }),

/***/ "./src/common/entity/split_by_groups.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/split_by_groups.ts ***!
  \**********************************************/
/*! exports provided: splitByGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitByGroups", function() { return splitByGroups; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

// Split a collection into a list of groups and a 'rest' list of ungrouped
// entities.
// Returns { groups: [], ungrouped: {} }
var splitByGroups = function (entities) {
    var groups = [];
    var ungrouped = {};
    Object.keys(entities).forEach(function (entityId) {
        var entity = entities[entityId];
        if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId) === "group") {
            groups.push(entity);
        }
        else {
            ungrouped[entityId] = entity;
        }
    });
    groups.forEach(function (group) {
        return group.attributes.entity_id.forEach(function (entityId) {
            delete ungrouped[entityId];
        });
    });
    return { groups: groups, ungrouped: ungrouped };
};


/***/ }),

/***/ "./src/components/entity/ha-state-label-badge.ts":
/*!*******************************************************!*\
  !*** ./src/components/entity/ha-state-label-badge.ts ***!
  \*******************************************************/
/*! exports provided: HaStateLabelBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaStateLabelBadge", function() { return HaStateLabelBadge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");
/* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ha-label-badge */ "./src/components/ha-label-badge.ts");











var HaStateLabelBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaStateLabelBadge, _super);
    function HaStateLabelBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaStateLabelBadge.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        this._connected = true;
        this.startInterval(this.state);
    };
    HaStateLabelBadge.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._connected = false;
        this.clearInterval();
    };
    HaStateLabelBadge.prototype.render = function () {
        var _a;
        var state = this.state;
        if (!state) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <ha-label-badge\n          class=\"warning\"\n          label=\"", "\"\n          icon=\"hass:alert\"\n          description=\"", "\"\n        ></ha-label-badge>\n      "], ["\n        <ha-label-badge\n          class=\"warning\"\n          label=\"", "\"\n          icon=\"hass:alert\"\n          description=\"",
                "\"\n        ></ha-label-badge>\n      "])), this.hass.localize("state_badge.default.error"), this.hass.localize("state_badge.default.entity_not_found"));
        }
        var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(state);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-label-badge\n        class=\"", "\"\n        .value=\"", "\"\n        .icon=\"", "\"\n        .image=\"", "\"\n        .label=\"", "\"\n        .description=\"", "\"\n      ></ha-label-badge>\n    "], ["\n      <ha-label-badge\n        class=\"",
            "\"\n        .value=\"", "\"\n        .icon=\"", "\"\n        .image=\"",
            "\"\n        .label=\"", "\"\n        .description=\"", "\"\n      ></ha-label-badge>\n    "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])((_a = {},
            _a[domain] = true,
            _a["has-unit_of_measurement"] = "unit_of_measurement" in state.attributes,
            _a)), this._computeValue(domain, state), this.icon ? this.icon : this._computeIcon(domain, state), this.icon
            ? ""
            : this.image
                ? this.image
                : state.attributes.entity_picture, this._computeLabel(domain, state, this._timerTimeRemaining), this.name ? this.name : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(state));
    };
    HaStateLabelBadge.prototype.firstUpdated = function (changedProperties) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProperties);
        this.addEventListener("click", function (ev) {
            ev.stopPropagation();
            if (_this.state) {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(_this, "hass-more-info", { entityId: _this.state.entity_id });
            }
        });
    };
    HaStateLabelBadge.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (this._connected && changedProperties.has("state")) {
            this.startInterval(this.state);
        }
    };
    HaStateLabelBadge.prototype._computeValue = function (domain, state) {
        switch (domain) {
            case "binary_sensor":
            case "device_tracker":
            case "person":
            case "updater":
            case "sun":
            case "alarm_control_panel":
            case "timer":
                return null;
            case "sensor":
            default:
                return state.state === "unknown"
                    ? "-"
                    : this.hass.localize("component." + domain + ".state." + state.state) ||
                        state.state;
        }
    };
    HaStateLabelBadge.prototype._computeIcon = function (domain, state) {
        if (state.state === "unavailable") {
            return null;
        }
        switch (domain) {
            case "alarm_control_panel":
                if (state.state === "pending") {
                    return "hass:clock-fast";
                }
                if (state.state === "armed_away") {
                    return "hass:nature";
                }
                if (state.state === "armed_home") {
                    return "hass:home-variant";
                }
                if (state.state === "armed_night") {
                    return "hass:weather-night";
                }
                if (state.state === "armed_custom_bypass") {
                    return "hass:shield-home";
                }
                if (state.state === "triggered") {
                    return "hass:alert-circle";
                }
                // state == 'disarmed'
                return Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_6__["domainIcon"])(domain, state.state);
            case "binary_sensor":
            case "device_tracker":
            case "updater":
            case "person":
                return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_7__["stateIcon"])(state);
            case "sun":
                return state.state === "above_horizon"
                    ? Object(_common_entity_domain_icon__WEBPACK_IMPORTED_MODULE_6__["domainIcon"])(domain)
                    : "hass:brightness-3";
            case "timer":
                return state.state === "active" ? "hass:timer" : "hass:timer-off";
            default:
                return null;
        }
    };
    HaStateLabelBadge.prototype._computeLabel = function (domain, state, _timerTimeRemaining) {
        if (state.state === "unavailable" ||
            ["device_tracker", "alarm_control_panel", "person"].includes(domain)) {
            // Localize the state with a special state_badge namespace, which has variations of
            // the state translations that are truncated to fit within the badge label. Translations
            // are only added for device_tracker, alarm_control_panel and person.
            return (this.hass.localize("state_badge." + domain + "." + state.state) ||
                this.hass.localize("state_badge.default." + state.state) ||
                state.state);
        }
        if (domain === "timer") {
            return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_9__["default"])(_timerTimeRemaining);
        }
        return state.attributes.unit_of_measurement || null;
    };
    HaStateLabelBadge.prototype.clearInterval = function () {
        if (this._updateRemaining) {
            clearInterval(this._updateRemaining);
            this._updateRemaining = undefined;
        }
    };
    HaStateLabelBadge.prototype.startInterval = function (stateObj) {
        var _this = this;
        this.clearInterval();
        if (stateObj && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(stateObj) === "timer") {
            this.calculateTimerRemaining(stateObj);
            if (stateObj.state === "active") {
                this._updateRemaining = window.setInterval(function () { return _this.calculateTimerRemaining(_this.state); }, 1000);
            }
        }
    };
    HaStateLabelBadge.prototype.calculateTimerRemaining = function (stateObj) {
        this._timerTimeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_8__["timerTimeRemaining"])(stateObj);
    };
    Object.defineProperty(HaStateLabelBadge, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        cursor: pointer;\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n      ha-label-badge.has-unit_of_measurement {\n        --ha-label-badge-label-text-transform: none;\n      }\n\n      ha-label-badge.binary_sensor,\n      ha-label-badge.updater {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .red {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n\n      .blue {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .green {\n        --ha-label-badge-color: var(--label-badge-green, #0da035);\n      }\n\n      .yellow {\n        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n      }\n\n      .grey {\n        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));\n      }\n\n      .warning {\n        --ha-label-badge-color: var(--label-badge-yellow, #fce588);\n      }\n    "], ["\n      :host {\n        cursor: pointer;\n      }\n\n      ha-label-badge {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n      ha-label-badge.has-unit_of_measurement {\n        --ha-label-badge-label-text-transform: none;\n      }\n\n      ha-label-badge.binary_sensor,\n      ha-label-badge.updater {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .red {\n        --ha-label-badge-color: var(--label-badge-red, #df4c1e);\n      }\n\n      .blue {\n        --ha-label-badge-color: var(--label-badge-blue, #039be5);\n      }\n\n      .green {\n        --ha-label-badge-color: var(--label-badge-green, #0da035);\n      }\n\n      .yellow {\n        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);\n      }\n\n      .grey {\n        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));\n      }\n\n      .warning {\n        --ha-label-badge-color: var(--label-badge-yellow, #fce588);\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaStateLabelBadge.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaStateLabelBadge.prototype, "state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaStateLabelBadge.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaStateLabelBadge.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaStateLabelBadge.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaStateLabelBadge.prototype, "_timerTimeRemaining", void 0);
    HaStateLabelBadge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-state-label-badge")
    ], HaStateLabelBadge);
    return HaStateLabelBadge;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/components/ha-label-badge.ts":
/*!******************************************!*\
  !*** ./src/components/ha-label-badge.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");




var HaLabelBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaLabelBadge, _super);
    function HaLabelBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HaLabelBadge, "properties", {
        get: function () {
            return {
                value: {},
                icon: {},
                label: {},
                description: {},
                image: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    HaLabelBadge.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"badge-container\">\n        <div class=\"label-badge\" id=\"badge\">\n          <div\n            class=\"", "\"\n          >\n            ", "\n            ", "\n          </div>\n          ", "\n        </div>\n        ", "\n      </div>\n    "], ["\n      <div class=\"badge-container\">\n        <div class=\"label-badge\" id=\"badge\">\n          <div\n            class=\"",
            "\"\n          >\n            ",
            "\n            ",
            "\n          </div>\n          ",
            "\n        </div>\n        ",
            "\n      </div>\n    "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            value: true,
            big: Boolean(this.value && this.value.length > 4),
        }), this.icon && !this.value && !this.image
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-icon .icon=\"", "\"></ha-icon>\n                "], ["\n                  <ha-icon .icon=\"", "\"></ha-icon>\n                "])), this.icon) : "", this.value && !this.image
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <span>", "</span>\n                "], ["\n                  <span>", "</span>\n                "])), this.value) : "", this.label
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div\n                  class=\"", "\"\n                >\n                  <span>", "</span>\n                </div>\n              "], ["\n                <div\n                  class=\"",
                "\"\n                >\n                  <span>", "</span>\n                </div>\n              "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                label: true,
                big: this.label.length > 5,
            }), this.label) : "", this.description
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"title\">", "</div>\n            "], ["\n              <div class=\"title\">", "</div>\n            "])), this.description) : "");
    };
    Object.defineProperty(HaLabelBadge, "styles", {
        get: function () {
            return [
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "], ["\n        .badge-container {\n          display: inline-block;\n          text-align: center;\n          vertical-align: top;\n        }\n        .label-badge {\n          position: relative;\n          display: block;\n          margin: 0 auto;\n          width: var(--ha-label-badge-size, 2.5em);\n          text-align: center;\n          height: var(--ha-label-badge-size, 2.5em);\n          line-height: var(--ha-label-badge-size, 2.5em);\n          font-size: var(--ha-label-badge-font-size, 1.5em);\n          border-radius: 50%;\n          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));\n          color: var(--label-badge-text-color, rgb(76, 76, 76));\n\n          white-space: nowrap;\n          background-color: var(--label-badge-background-color, white);\n          background-size: cover;\n          transition: border 0.3s ease-in-out;\n        }\n        .label-badge .value {\n          font-size: 90%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        .label-badge .value.big {\n          font-size: 70%;\n        }\n        .label-badge .label {\n          position: absolute;\n          bottom: -1em;\n          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */\n          left: -0.2em;\n          right: -0.2em;\n          line-height: 1em;\n          font-size: 0.5em;\n        }\n        .label-badge .label span {\n          box-sizing: border-box;\n          max-width: 100%;\n          display: inline-block;\n          background-color: var(--ha-label-badge-color, var(--primary-color));\n          color: var(--ha-label-badge-label-color, white);\n          border-radius: 1em;\n          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */\n          font-weight: 500;\n          overflow: hidden;\n          text-transform: uppercase;\n          text-overflow: ellipsis;\n          transition: background-color 0.3s ease-in-out;\n          text-transform: var(--ha-label-badge-label-text-transform, uppercase);\n        }\n        .label-badge .label.big span {\n          font-size: 90%;\n          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */\n        }\n        .badge-container .title {\n          margin-top: 1em;\n          font-size: var(--ha-label-badge-title-font-size, 0.9em);\n          width: var(--ha-label-badge-title-width, 5em);\n          font-weight: var(--ha-label-badge-title-font-weight, 400);\n          overflow: hidden;\n          text-overflow: ellipsis;\n          line-height: normal;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    HaLabelBadge.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("image")) {
            this.shadowRoot.getElementById("badge").style.backgroundImage = this
                .image
                ? "url(" + this.image + ")"
                : "";
        }
    };
    return HaLabelBadge;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("ha-label-badge", HaLabelBadge);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/components/ha-start-voice-button.js":
/*!*************************************************!*\
  !*** ./src/components/ha-start-voice-button.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-icon-button\n        aria-label=\"Start conversation\"\n        icon=\"hass:microphone\"\n        hidden$=\"[[!canListen]]\"\n        on-click=\"handleListenClick\"\n      ></paper-icon-button>\n    "]);

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

var HaStartVoiceButton =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaStartVoiceButton, _EventsMixin);

  function HaStartVoiceButton() {
    _classCallCheck(this, HaStartVoiceButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaStartVoiceButton).apply(this, arguments));
  }

  _createClass(HaStartVoiceButton, [{
    key: "computeCanListen",
    value: function computeCanListen(hass) {
      return "webkitSpeechRecognition" in window && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "conversation");
    }
  }, {
    key: "handleListenClick",
    value: function handleListenClick() {
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "show-dialog", {
        dialogImport: function dialogImport() {
          return __webpack_require__.e(/*! import() | voice-command-dialog */ "voice-command-dialog").then(__webpack_require__.bind(null, /*! ../dialogs/ha-voice-command-dialog */ "./src/dialogs/ha-voice-command-dialog.js"));
        },
        dialogTag: "ha-voice-command-dialog"
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
        hass: {
          type: Object,
          value: null
        },
        canListen: {
          type: Boolean,
          computed: "computeCanListen(hass)",
          notify: true
        }
      };
    }
  }]);

  return HaStartVoiceButton;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-start-voice-button", HaStartVoiceButton);

/***/ }),

/***/ "./src/data/media-player.ts":
/*!**********************************!*\
  !*** ./src/data/media-player.ts ***!
  \**********************************/
/*! exports provided: SUPPORT_PAUSE, SUPPORT_NEXT_TRACK, SUPPORTS_PLAY, OFF_STATES, fetchMediaPlayerThumbnailWithCache, fetchMediaPlayerThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_PAUSE", function() { return SUPPORT_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_NEXT_TRACK", function() { return SUPPORT_NEXT_TRACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORTS_PLAY", function() { return SUPPORTS_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OFF_STATES", function() { return OFF_STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMediaPlayerThumbnailWithCache", function() { return fetchMediaPlayerThumbnailWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMediaPlayerThumbnail", function() { return fetchMediaPlayerThumbnail; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");

var SUPPORT_PAUSE = 1;
var SUPPORT_NEXT_TRACK = 32;
var SUPPORTS_PLAY = 16384;
var OFF_STATES = ["off", "idle"];
var fetchMediaPlayerThumbnailWithCache = function (hass, entityId) {
    return Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_media_playerTmb", 9000, fetchMediaPlayerThumbnail, hass, entityId);
};
var fetchMediaPlayerThumbnail = function (hass, entityId) {
    return hass.callWS({
        type: "media_player_thumbnail",
        entity_id: entityId,
    });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwta2lvc2t+cGFuZWwtbG92ZWxhY2V+cGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLW1lZGlhX3BsYXllci1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2V4dHJhY3Rfdmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X2dyb3VwX2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3NwbGl0X2J5X2dyb3Vwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtbGFiZWwtYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbGFiZWwtYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtc3RhcnQtdm9pY2UtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL21lZGlhLXBsYXllci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXByb2dyZXNzL3BhcGVyLXByb2dyZXNzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zdHlsZXMvZWxlbWVudC1zdHlsZXMvcGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgSGFzc01lZGlhUGxheWVyRW50aXR5IGZyb20gXCIuLi91dGlsL2hhc3MtbWVkaWEtcGxheWVyLW1vZGVsXCI7XG5pbXBvcnQgeyBmZXRjaE1lZGlhUGxheWVyVGh1bWJuYWlsV2l0aENhY2hlIH0gZnJvbSBcIi4uL2RhdGEvbWVkaWEtcGxheWVyXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1lZGlhUGxheWVyQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGVcbiAgICAgICAgaW5jbHVkZT1cInBhcGVyLW1hdGVyaWFsLXN0eWxlcyBpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudCBpcm9uLXBvc2l0aW9uaW5nXCJcbiAgICAgID5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyOmJlZm9yZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAvKiByZW1vdmVkIC4yNSUgZnJvbSAxNjo5IHJhdGlvIHRvIGZpeCBZVCBibGFjayBiYXJzICovXG4gICAgICAgICAgcGFkZGluZy10b3A6IDU2JTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjhzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5uby1jb3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9pbWFnZXMvY2FyZF9tZWRpYV9wbGF5ZXJfYmcucG5nKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5jb250ZW50LXR5cGUtbXVzaWM6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuY29udGVudC10eXBlLWdhbWU6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIubm8tY292ZXI6YmVmb3JlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogODhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY292ZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcblxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHM7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuaXMtb2ZmID4gLmNvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciA+IC5jYXB0aW9uIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNhcHRpb247XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpKTtcblxuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci5pcy1vZmYgPiAuY2FwdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY2FwdGlvbiAudGl0bGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgIG1hcmdpbjogOHB4IDAgNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhcGVyLXByb2dyZXNzLWhlaWdodCwgNHB4KTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaGVpZ2h0LCA0cHgpKTtcbiAgICAgICAgICAtLXBhcGVyLXByb2dyZXNzLWFjdGl2ZS1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICAgICAgICAtLXBhcGVyLXByb2dyZXNzLWNvbnRhaW5lci1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItY2FyZC1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbHMgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wbGF5YmFjay1jb250cm9scyB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1kYXJrLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ucHJpbWFyeSB7XG4gICAgICAgICAgd2lkdGg6IDU2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbi5wcmltYXJ5W2Rpc2FibGVkXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrLWRpc2FibGVkLW9wYWNpdHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcyQ9XCJbW2NvbXB1dGVCYW5uZXJDbGFzc2VzKHBsYXllck9iaiwgX2NvdmVyU2hvd2luZywgX2NvdmVyTG9hZEVycm9yKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvdmVyXCIgaWQ9XCJjb3ZlclwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXB0aW9uXCI+XG4gICAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopXV08L2Rpdj5cbiAgICAgICAgICBbW3BsYXllck9iai5zZWNvbmRhcnlUaXRsZV1dPGJyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxwYXBlci1wcm9ncmVzc1xuICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfZHVyYXRpb25dXVwiXG4gICAgICAgIHZhbHVlPVwiW1twbGF5YmFja1Bvc2l0aW9uXV1cIlxuICAgICAgICBoaWRkZW4kPVwiW1tjb21wdXRlSGlkZVByb2dyZXNzKHBsYXllck9iaildXVwiXG4gICAgICAgIGNsYXNzPVwicHJvZ3Jlc3NcIlxuICAgICAgPjwvcGFwZXItcHJvZ3Jlc3M+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlR1cm4gb2ZmXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpwb3dlclwiXG4gICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVUb2dnbGVQb3dlclwiXG4gICAgICAgICAgaW52aXNpYmxlJD1cIltbY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgIGNsYXNzPVwic2VsZi1jZW50ZXIgc2Vjb25kYXJ5XCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXliYWNrLWNvbnRyb2xzXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUHJldmlvdXMgdHJhY2tcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1wcmV2aW91c1wiXG4gICAgICAgICAgICBpbnZpc2libGUkPVwiW1shcGxheWVyT2JqLnN1cHBvcnRzUHJldmlvdXNUcmFja11dXCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1twbGF5ZXJPYmouaXNPZmZdXVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVByZXZpb3VzXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQbGF5IG9yIFBhdXNlXCJcbiAgICAgICAgICAgIGNsYXNzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgaW52aXNpYmxlJD1cIltbIWNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaildXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQbGF5YmFja0NvbnRyb2xcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgdHJhY2tcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1uZXh0XCJcbiAgICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNOZXh0VHJhY2tdXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVOZXh0XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1vcmUgaW5mb3JtYXRpb24uXCJcbiAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZU9wZW5Nb3JlSW5mb1wiXG4gICAgICAgICAgY2xhc3M9XCJzZWxmLWNlbnRlciBzZWNvbmRhcnlcIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBwbGF5ZXJPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgICBvYnNlcnZlcjogXCJwbGF5ZXJPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgcGxheWJhY2tDb250cm9sSWNvbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iailcIixcbiAgICAgIH0sXG4gICAgICBwbGF5YmFja1Bvc2l0aW9uOiBOdW1iZXIsXG4gICAgICBfY292ZXJTaG93aW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfY292ZXJMb2FkRXJyb3I6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgcGxheWVyT2JqQ2hhbmdlZChwbGF5ZXJPYmosIG9sZFBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nICYmIHBsYXllck9iai5zaG93UHJvZ3Jlc3MpIHtcbiAgICAgIGlmICghdGhpcy5fcG9zaXRpb25UcmFja2luZykge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblRyYWNraW5nID0gc2V0SW50ZXJ2YWwoXG4gICAgICAgICAgKCkgPT4gdGhpcy51cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCksXG4gICAgICAgICAgMTAwMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5fcG9zaXRpb25UcmFja2luZykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9wb3NpdGlvblRyYWNraW5nKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uVHJhY2tpbmcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAocGxheWVyT2JqLnNob3dQcm9ncmVzcykge1xuICAgICAgdGhpcy51cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGljdHVyZSA9IHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuICAgIGNvbnN0IG9sZFBpY3R1cmUgPVxuICAgICAgb2xkUGxheWVyT2JqICYmIG9sZFBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlO1xuXG4gICAgaWYgKHBpY3R1cmUgIT09IG9sZFBpY3R1cmUgJiYgIXBpY3R1cmUpIHtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGljdHVyZSA9PT0gb2xkUGljdHVyZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdlIGhhdmUgYSBuZXcgcGljdHVyZSB1cmxcbiAgICAvLyBJZiBlbnRpdHkgcGljdHVyZSBpcyBub24tcmVsYXRpdmUsIHdlIHVzZSB0aGF0IHVybCBkaXJlY3RseS5cbiAgICBpZiAocGljdHVyZS5zdWJzdHIoMCwgMSkgIT09IFwiL1wiKSB7XG4gICAgICB0aGlzLl9jb3ZlclNob3dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fY292ZXJMb2FkRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGljdHVyZX0pYDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb250ZW50X3R5cGU6IGNvbnRlbnRUeXBlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgfSA9IGF3YWl0IGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWxXaXRoQ2FjaGUoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NvdmVyU2hvd2luZyA9IHRydWU7XG4gICAgICB0aGlzLl9jb3ZlckxvYWRFcnJvciA9IGZhbHNlO1xuICAgICAgdGhpcy4kLmNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoZGF0YToke2NvbnRlbnRUeXBlfTtiYXNlNjQsJHtjb250ZW50fSlgO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fY292ZXJTaG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLl9jb3ZlckxvYWRFcnJvciA9IHRydWU7XG4gICAgICB0aGlzLiQuY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVQbGF5YmFja1Bvc2l0aW9uKCkge1xuICAgIHRoaXMucGxheWJhY2tQb3NpdGlvbiA9IHRoaXMucGxheWVyT2JqLmN1cnJlbnRQcm9ncmVzcztcbiAgfVxuXG4gIGNvbXB1dGVCYW5uZXJDbGFzc2VzKHBsYXllck9iaiwgY292ZXJTaG93aW5nLCBjb3ZlckxvYWRFcnJvcikge1xuICAgIHZhciBjbHMgPSBcImJhbm5lclwiO1xuXG4gICAgaWYgKCFwbGF5ZXJPYmopIHtcbiAgICAgIHJldHVybiBjbHM7XG4gICAgfVxuXG4gICAgaWYgKHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBjbHMgKz0gXCIgaXMtb2ZmIG5vLWNvdmVyXCI7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICFwbGF5ZXJPYmouc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSB8fFxuICAgICAgY292ZXJMb2FkRXJyb3IgfHxcbiAgICAgICFjb3ZlclNob3dpbmdcbiAgICApIHtcbiAgICAgIGNscyArPSBcIiBuby1jb3ZlclwiO1xuICAgIH0gZWxzZSBpZiAocGxheWVyT2JqLnN0YXRlT2JqLmF0dHJpYnV0ZXMubWVkaWFfY29udGVudF90eXBlID09PSBcIm11c2ljXCIpIHtcbiAgICAgIGNscyArPSBcIiBjb250ZW50LXR5cGUtbXVzaWNcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJnYW1lXCIpIHtcbiAgICAgIGNscyArPSBcIiBjb250ZW50LXR5cGUtZ2FtZVwiO1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVQcm9ncmVzcyhwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXBsYXllck9iai5zaG93UHJvZ3Jlc3M7XG4gIH1cblxuICBjb21wdXRlSGlkZVBvd2VyQnV0dG9uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNPZmZcbiAgICAgID8gIXBsYXllck9iai5zdXBwb3J0c1R1cm5PblxuICAgICAgOiAhcGxheWVyT2JqLnN1cHBvcnRzVHVybk9mZjtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IEhhc3NNZWRpYVBsYXllckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUHJpbWFyeVRleHQobG9jYWxpemUsIHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmoucHJpbWFyeVRpdGxlIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUubWVkaWFfcGxheWVyLiR7cGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBsb2NhbGl6ZShgc3RhdGUuZGVmYXVsdC4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgcGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nKSB7XG4gICAgICByZXR1cm4gcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgPyBcImhhc3M6cGF1c2VcIiA6IFwiaGFzczpzdG9wXCI7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sIHx8IHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2wgJiZcbiAgICAgICAgcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgJiZcbiAgICAgICAgIXBsYXllck9iai5pc1BhdXNlZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBcImhhc3M6cGxheS1wYXVzZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BsYXkgPyBcImhhc3M6cGxheVwiIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGhhbmRsZU5leHQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnBsYXllck9iai5uZXh0VHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZU9wZW5Nb3JlSW5mbyhldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgaGFuZGxlUGxheWJhY2tDb250cm9sKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoubWVkaWFQbGF5UGF1c2UoKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoucHJldmlvdXNUcmFjaygpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlUG93ZXIoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnBsYXllck9iai50b2dnbGVQb3dlcigpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1tZWRpYV9wbGF5ZXItY2FyZFwiLCBIYU1lZGlhUGxheWVyQ2FyZCk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBERUZBVUxUX1ZJRVdfRU5USVRZX0lEIH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBSZXR1cm4gYW4gb3JkZXJlZCBhcnJheSBvZiBhdmFpbGFibGUgdmlld3NcbmV4cG9ydCBjb25zdCBleHRyYWN0Vmlld3MgPSAoZW50aXRpZXM6IEhhc3NFbnRpdGllcyk6IEdyb3VwRW50aXR5W10gPT4ge1xuICBjb25zdCB2aWV3czogR3JvdXBFbnRpdHlbXSA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGVudGl0aWVzKS5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcbiAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMudmlldykge1xuICAgICAgdmlld3MucHVzaChlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmlld3Muc29ydCgodmlldzEsIHZpZXcyKSA9PiB7XG4gICAgaWYgKHZpZXcxLmVudGl0eV9pZCA9PT0gREVGQVVMVF9WSUVXX0VOVElUWV9JRCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAodmlldzIuZW50aXR5X2lkID09PSBERUZBVUxUX1ZJRVdfRU5USVRZX0lEKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIHZpZXcxLmF0dHJpYnV0ZXMub3JkZXIgLSB2aWV3Mi5hdHRyaWJ1dGVzLm9yZGVyO1xuICB9KTtcblxuICByZXR1cm4gdmlld3M7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldEdyb3VwRW50aXRpZXMgPSAoXG4gIGVudGl0aWVzOiBIYXNzRW50aXRpZXMsXG4gIGdyb3VwOiBHcm91cEVudGl0eVxuKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmVzdWx0W2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IGdldEdyb3VwRW50aXRpZXMgfSBmcm9tIFwiLi9nZXRfZ3JvdXBfZW50aXRpZXNcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZW50aXRpZXMgdGhhdCB0aGUgdmlldyB3aWxsIHNob3dcbi8vIGluY2x1ZGluZyBlbWJlZGRlZCBncm91cHMuXG5leHBvcnQgY29uc3QgZ2V0Vmlld0VudGl0aWVzID0gKFxuICBlbnRpdGllczogSGFzc0VudGl0aWVzLFxuICB2aWV3OiBHcm91cEVudGl0eVxuKTogSGFzc0VudGl0aWVzID0+IHtcbiAgY29uc3Qgdmlld0VudGl0aWVzID0ge307XG5cbiAgdmlldy5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkgJiYgIWVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgdmlld0VudGl0aWVzW2VudGl0eS5lbnRpdHlfaWRdID0gZW50aXR5O1xuXG4gICAgICBpZiAoY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKSA9PT0gXCJncm91cFwiKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKGVudGl0aWVzLCBlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwRW50aXRpZXMpLmZvckVhY2goKGdyRW50aXR5SWQpID0+IHtcbiAgICAgICAgICBjb25zdCBnckVudGl0eSA9IGdyb3VwRW50aXRpZXNbZ3JFbnRpdHlJZF07XG5cbiAgICAgICAgICBpZiAoIWdyRW50aXR5LmF0dHJpYnV0ZXMuaGlkZGVuKSB7XG4gICAgICAgICAgICB2aWV3RW50aXRpZXNbZ3JFbnRpdHlJZF0gPSBnckVudGl0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdFbnRpdGllcztcbn07XG4iLCJpbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8vIFNwbGl0IGEgY29sbGVjdGlvbiBpbnRvIGEgbGlzdCBvZiBncm91cHMgYW5kIGEgJ3Jlc3QnIGxpc3Qgb2YgdW5ncm91cGVkXG4vLyBlbnRpdGllcy5cbi8vIFJldHVybnMgeyBncm91cHM6IFtdLCB1bmdyb3VwZWQ6IHt9IH1cbmV4cG9ydCBjb25zdCBzcGxpdEJ5R3JvdXBzID0gKGVudGl0aWVzOiBIYXNzRW50aXRpZXMpID0+IHtcbiAgY29uc3QgZ3JvdXBzOiBHcm91cEVudGl0eVtdID0gW107XG4gIGNvbnN0IHVuZ3JvdXBlZDogSGFzc0VudGl0aWVzID0ge307XG5cbiAgT2JqZWN0LmtleXMoZW50aXRpZXMpLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgY29uc3QgZW50aXR5ID0gZW50aXRpZXNbZW50aXR5SWRdO1xuXG4gICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5SWQpID09PSBcImdyb3VwXCIpIHtcbiAgICAgIGdyb3Vwcy5wdXNoKGVudGl0eSBhcyBHcm91cEVudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuZ3JvdXBlZFtlbnRpdHlJZF0gPSBlbnRpdHk7XG4gICAgfVxuICB9KTtcblxuICBncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+XG4gICAgZ3JvdXAuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICAgIGRlbGV0ZSB1bmdyb3VwZWRbZW50aXR5SWRdO1xuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHsgZ3JvdXBzLCB1bmdyb3VwZWQgfTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZG9tYWluSWNvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2RvbWFpbl9pY29uXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5pbXBvcnQgeyB0aW1lclRpbWVSZW1haW5pbmcgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZ1wiO1xuaW1wb3J0IHNlY29uZHNUb0R1cmF0aW9uIGZyb20gXCIuLi8uLi9jb21tb24vZGF0ZXRpbWUvc2Vjb25kc190b19kdXJhdGlvblwiO1xuXG5pbXBvcnQgXCIuLi9oYS1sYWJlbC1iYWRnZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLXN0YXRlLWxhYmVsLWJhZGdlXCIpXG5leHBvcnQgY2xhc3MgSGFTdGF0ZUxhYmVsQmFkZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZT86IEhhc3NFbnRpdHk7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIG5hbWU/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGljb24/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGltYWdlPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3RpbWVyVGltZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwcml2YXRlIF9jb25uZWN0ZWQ/OiBib29sZWFuO1xuXG4gIHByaXZhdGUgX3VwZGF0ZVJlbWFpbmluZz86IG51bWJlcjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpOiB2b2lkIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgICBjbGFzcz1cIndhcm5pbmdcIlxuICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwic3RhdGVfYmFkZ2UuZGVmYXVsdC5lcnJvclwiKX1cIlxuICAgICAgICAgIGljb249XCJoYXNzOmFsZXJ0XCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwic3RhdGVfYmFkZ2UuZGVmYXVsdC5lbnRpdHlfbm90X2ZvdW5kXCJcbiAgICAgICAgICApfVwiXG4gICAgICAgID48L2hhLWxhYmVsLWJhZGdlPlxuICAgICAgYDtcbiAgICB9XG5cbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGUpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtbGFiZWwtYmFkZ2VcbiAgICAgICAgY2xhc3M9XCIke2NsYXNzTWFwKHtcbiAgICAgICAgICBbZG9tYWluXTogdHJ1ZSxcbiAgICAgICAgICBcImhhcy11bml0X29mX21lYXN1cmVtZW50XCI6IFwidW5pdF9vZl9tZWFzdXJlbWVudFwiIGluIHN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgICAgIH0pfVwiXG4gICAgICAgIC52YWx1ZT1cIiR7dGhpcy5fY29tcHV0ZVZhbHVlKGRvbWFpbiwgc3RhdGUpfVwiXG4gICAgICAgIC5pY29uPVwiJHt0aGlzLmljb24gPyB0aGlzLmljb24gOiB0aGlzLl9jb21wdXRlSWNvbihkb21haW4sIHN0YXRlKX1cIlxuICAgICAgICAuaW1hZ2U9XCIke3RoaXMuaWNvblxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogdGhpcy5pbWFnZVxuICAgICAgICAgID8gdGhpcy5pbWFnZVxuICAgICAgICAgIDogc3RhdGUuYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZX1cIlxuICAgICAgICAubGFiZWw9XCIke3RoaXMuX2NvbXB1dGVMYWJlbChkb21haW4sIHN0YXRlLCB0aGlzLl90aW1lclRpbWVSZW1haW5pbmcpfVwiXG4gICAgICAgIC5kZXNjcmlwdGlvbj1cIiR7dGhpcy5uYW1lID8gdGhpcy5uYW1lIDogY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSl9XCJcbiAgICAgID48L2hhLWxhYmVsLWJhZGdlPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGUuZW50aXR5X2lkIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAodGhpcy5fY29ubmVjdGVkICYmIGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcInN0YXRlXCIpKSB7XG4gICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZVZhbHVlKGRvbWFpbjogc3RyaW5nLCBzdGF0ZTogSGFzc0VudGl0eSkge1xuICAgIHN3aXRjaCAoZG9tYWluKSB7XG4gICAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgY2FzZSBcImRldmljZV90cmFja2VyXCI6XG4gICAgICBjYXNlIFwicGVyc29uXCI6XG4gICAgICBjYXNlIFwidXBkYXRlclwiOlxuICAgICAgY2FzZSBcInN1blwiOlxuICAgICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgIGNhc2UgXCJ0aW1lclwiOlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIGNhc2UgXCJzZW5zb3JcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmtub3duXCJcbiAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKGBjb21wb25lbnQuJHtkb21haW59LnN0YXRlLiR7c3RhdGUuc3RhdGV9YCkgfHxcbiAgICAgICAgICAgICAgc3RhdGUuc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUljb24oZG9tYWluOiBzdHJpbmcsIHN0YXRlOiBIYXNzRW50aXR5KSB7XG4gICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGRvbWFpbikge1xuICAgICAgY2FzZSBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIjpcbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInBlbmRpbmdcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6Y2xvY2stZmFzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9hd2F5XCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOm5hdHVyZVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9ob21lXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmhvbWUtdmFyaWFudFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9uaWdodFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczp3ZWF0aGVyLW5pZ2h0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcImFybWVkX2N1c3RvbV9ieXBhc3NcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6c2hpZWxkLWhvbWVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwidHJpZ2dlcmVkXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmFsZXJ0LWNpcmNsZVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0YXRlID09ICdkaXNhcm1lZCdcbiAgICAgICAgcmV0dXJuIGRvbWFpbkljb24oZG9tYWluLCBzdGF0ZS5zdGF0ZSk7XG4gICAgICBjYXNlIFwiYmluYXJ5X3NlbnNvclwiOlxuICAgICAgY2FzZSBcImRldmljZV90cmFja2VyXCI6XG4gICAgICBjYXNlIFwidXBkYXRlclwiOlxuICAgICAgY2FzZSBcInBlcnNvblwiOlxuICAgICAgICByZXR1cm4gc3RhdGVJY29uKHN0YXRlKTtcbiAgICAgIGNhc2UgXCJzdW5cIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0YXRlID09PSBcImFib3ZlX2hvcml6b25cIlxuICAgICAgICAgID8gZG9tYWluSWNvbihkb21haW4pXG4gICAgICAgICAgOiBcImhhc3M6YnJpZ2h0bmVzcy0zXCI7XG4gICAgICBjYXNlIFwidGltZXJcIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlLnN0YXRlID09PSBcImFjdGl2ZVwiID8gXCJoYXNzOnRpbWVyXCIgOiBcImhhc3M6dGltZXItb2ZmXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jb21wdXRlTGFiZWwoZG9tYWluLCBzdGF0ZSwgX3RpbWVyVGltZVJlbWFpbmluZykge1xuICAgIGlmIChcbiAgICAgIHN0YXRlLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIgfHxcbiAgICAgIFtcImRldmljZV90cmFja2VyXCIsIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLCBcInBlcnNvblwiXS5pbmNsdWRlcyhkb21haW4pXG4gICAgKSB7XG4gICAgICAvLyBMb2NhbGl6ZSB0aGUgc3RhdGUgd2l0aCBhIHNwZWNpYWwgc3RhdGVfYmFkZ2UgbmFtZXNwYWNlLCB3aGljaCBoYXMgdmFyaWF0aW9ucyBvZlxuICAgICAgLy8gdGhlIHN0YXRlIHRyYW5zbGF0aW9ucyB0aGF0IGFyZSB0cnVuY2F0ZWQgdG8gZml0IHdpdGhpbiB0aGUgYmFkZ2UgbGFiZWwuIFRyYW5zbGF0aW9uc1xuICAgICAgLy8gYXJlIG9ubHkgYWRkZWQgZm9yIGRldmljZV90cmFja2VyLCBhbGFybV9jb250cm9sX3BhbmVsIGFuZCBwZXJzb24uXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKGBzdGF0ZV9iYWRnZS4ke2RvbWFpbn0uJHtzdGF0ZS5zdGF0ZX1gKSB8fFxuICAgICAgICB0aGlzLmhhc3MhLmxvY2FsaXplKGBzdGF0ZV9iYWRnZS5kZWZhdWx0LiR7c3RhdGUuc3RhdGV9YCkgfHxcbiAgICAgICAgc3RhdGUuc3RhdGVcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChkb21haW4gPT09IFwidGltZXJcIikge1xuICAgICAgcmV0dXJuIHNlY29uZHNUb0R1cmF0aW9uKF90aW1lclRpbWVSZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGUuYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50IHx8IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFySW50ZXJ2YWwoKSB7XG4gICAgaWYgKHRoaXMuX3VwZGF0ZVJlbWFpbmluZykge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl91cGRhdGVSZW1haW5pbmcpO1xuICAgICAgdGhpcy5fdXBkYXRlUmVtYWluaW5nID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRJbnRlcnZhbChzdGF0ZU9iaikge1xuICAgIHRoaXMuY2xlYXJJbnRlcnZhbCgpO1xuICAgIGlmIChzdGF0ZU9iaiAmJiBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopID09PSBcInRpbWVyXCIpIHtcbiAgICAgIHRoaXMuY2FsY3VsYXRlVGltZXJSZW1haW5pbmcoc3RhdGVPYmopO1xuXG4gICAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVtYWluaW5nID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAgICgpID0+IHRoaXMuY2FsY3VsYXRlVGltZXJSZW1haW5pbmcodGhpcy5zdGF0ZSksXG4gICAgICAgICAgMTAwMFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGltZXJSZW1haW5pbmcoc3RhdGVPYmopIHtcbiAgICB0aGlzLl90aW1lclRpbWVSZW1haW5pbmcgPSB0aW1lclRpbWVSZW1haW5pbmcoc3RhdGVPYmopO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGhhLWxhYmVsLWJhZGdlIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtcmVkLCAjZGY0YzFlKTtcbiAgICAgIH1cbiAgICAgIGhhLWxhYmVsLWJhZGdlLmhhcy11bml0X29mX21lYXN1cmVtZW50IHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1sYWJlbC10ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaGEtbGFiZWwtYmFkZ2UuYmluYXJ5X3NlbnNvcixcbiAgICAgIGhhLWxhYmVsLWJhZGdlLnVwZGF0ZXIge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1ibHVlLCAjMDM5YmU1KTtcbiAgICAgIH1cblxuICAgICAgLnJlZCB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXJlZCwgI2RmNGMxZSk7XG4gICAgICB9XG5cbiAgICAgIC5ibHVlIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSwgIzAzOWJlNSk7XG4gICAgICB9XG5cbiAgICAgIC5ncmVlbiB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWdyZWVuLCAjMGRhMDM1KTtcbiAgICAgIH1cblxuICAgICAgLnllbGxvdyB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXllbGxvdywgI2Y0YjQwMCk7XG4gICAgICB9XG5cbiAgICAgIC5ncmV5IHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtZ3JleSwgdmFyKC0tcGFwZXItZ3JleS01MDApKTtcbiAgICAgIH1cblxuICAgICAgLndhcm5pbmcge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS15ZWxsb3csICNmY2U1ODgpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXN0YXRlLWxhYmVsLWJhZGdlXCI6IEhhU3RhdGVMYWJlbEJhZGdlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBQcm9wZXJ0eURlY2xhcmF0aW9ucyxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IFwiLi9oYS1pY29uXCI7XG5cbmNsYXNzIEhhTGFiZWxCYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgdmFsdWU/OiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uPzogc3RyaW5nO1xuICBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgcHVibGljIGltYWdlPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpOiBQcm9wZXJ0eURlY2xhcmF0aW9ucyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7fSxcbiAgICAgIGljb246IHt9LFxuICAgICAgbGFiZWw6IHt9LFxuICAgICAgZGVzY3JpcHRpb246IHt9LFxuICAgICAgaW1hZ2U6IHt9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFkZ2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbC1iYWRnZVwiIGlkPVwiYmFkZ2VcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgYmlnOiBCb29sZWFuKHRoaXMudmFsdWUgJiYgdGhpcy52YWx1ZS5sZW5ndGggPiA0KSxcbiAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHt0aGlzLmljb24gJiYgIXRoaXMudmFsdWUgJiYgIXRoaXMuaW1hZ2VcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGhhLWljb24gLmljb249XCIke3RoaXMuaWNvbn1cIj48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAke3RoaXMudmFsdWUgJiYgIXRoaXMuaW1hZ2VcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLnZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAke3RoaXMubGFiZWxcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIiR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYmlnOiB0aGlzLmxhYmVsLmxlbmd0aCA+IDUsXG4gICAgICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7dGhpcy5kZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNzc2BcbiAgICAgICAgLmJhZGdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1zaXplLCAyLjVlbSk7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogdmFyKC0taGEtbGFiZWwtYmFkZ2Utc2l6ZSwgMi41ZW0pO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1zaXplLCAyLjVlbSk7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1mb250LXNpemUsIDEuNWVtKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAwLjFlbSBzb2xpZCB2YXIoLS1oYS1sYWJlbC1iYWRnZS1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS10ZXh0LWNvbG9yLCByZ2IoNzYsIDc2LCA3NikpO1xuXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLnZhbHVlIHtcbiAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAudmFsdWUuYmlnIHtcbiAgICAgICAgICBmb250LXNpemU6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLmxhYmVsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAtMWVtO1xuICAgICAgICAgIC8qIE1ha2UgdGhlIGxhYmVsIGFzIHdpZGUgYXMgY29udGFpbmVyK2JvcmRlci4gKHBhcmVudF9ib3JkZXJ3aWR0aCAvIGZvbnQtc2l6ZSkgKi9cbiAgICAgICAgICBsZWZ0OiAtMC4yZW07XG4gICAgICAgICAgcmlnaHQ6IC0wLjJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC5sYWJlbCBzcGFuIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGEtbGFiZWwtYmFkZ2UtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taGEtbGFiZWwtYmFkZ2UtbGFiZWwtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICAgICAgcGFkZGluZzogOSUgMTYlIDglIDE2JTsgLyogbW9zdGx5IGFwaXRhbGl6ZWQgdGV4dCwgbm90IG11Y2ggZGVzY2VuZGVycyA9PiBiaXQgbW9yZSB0b3AgbWFyZ2luICovXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1sYWJlbC10ZXh0LXRyYW5zZm9ybSwgdXBwZXJjYXNlKTtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLmxhYmVsLmJpZyBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMCUgMTIlIDclIDEyJTsgLyogcHVzaCBzbWFsbGVyIHRleHQgYSBiaXQgZG93biB0byBjZW50ZXIgdmVydGljYWxseSAqL1xuICAgICAgICB9XG4gICAgICAgIC5iYWRnZS1jb250YWluZXIgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS10aXRsZS1mb250LXNpemUsIDAuOWVtKTtcbiAgICAgICAgICB3aWR0aDogdmFyKC0taGEtbGFiZWwtYmFkZ2UtdGl0bGUtd2lkdGgsIDVlbSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXRpdGxlLWZvbnQtd2VpZ2h0LCA0MDApO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wZXJ0aWVzLmhhcyhcImltYWdlXCIpKSB7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QhLmdldEVsZW1lbnRCeUlkKFwiYmFkZ2VcIikhLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHRoaXNcbiAgICAgICAgLmltYWdlXG4gICAgICAgID8gYHVybCgke3RoaXMuaW1hZ2V9KWBcbiAgICAgICAgOiBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtbGFiZWwtYmFkZ2VcIjogSGFMYWJlbEJhZGdlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWxhYmVsLWJhZGdlXCIsIEhhTGFiZWxCYWRnZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG5pbXBvcnQgaXNDb21wb25lbnRMb2FkZWQgZnJvbSBcIi4uL2NvbW1vbi9jb25maWcvaXNfY29tcG9uZW50X2xvYWRlZFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYVN0YXJ0Vm9pY2VCdXR0b24gZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTdGFydCBjb252ZXJzYXRpb25cIlxuICAgICAgICBpY29uPVwiaGFzczptaWNyb3Bob25lXCJcbiAgICAgICAgaGlkZGVuJD1cIltbIWNhbkxpc3Rlbl1dXCJcbiAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVMaXN0ZW5DbGlja1wiXG4gICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBjYW5MaXN0ZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZUNhbkxpc3RlbihoYXNzKVwiLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ2FuTGlzdGVuKGhhc3MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgXCJ3ZWJraXRTcGVlY2hSZWNvZ25pdGlvblwiIGluIHdpbmRvdyAmJlxuICAgICAgaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJjb252ZXJzYXRpb25cIilcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlTGlzdGVuQ2xpY2soKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgICAgZGlhbG9nSW1wb3J0OiAoKSA9PlxuICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJ2b2ljZS1jb21tYW5kLWRpYWxvZ1wiICovIFwiLi4vZGlhbG9ncy9oYS12b2ljZS1jb21tYW5kLWRpYWxvZ1wiKSxcbiAgICAgIGRpYWxvZ1RhZzogXCJoYS12b2ljZS1jb21tYW5kLWRpYWxvZ1wiLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0YXJ0LXZvaWNlLWJ1dHRvblwiLCBIYVN0YXJ0Vm9pY2VCdXR0b24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgeyB0aW1lQ2FjaGVQcm9taXNlRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2VcIjtcblxuZXhwb3J0IGNvbnN0IFNVUFBPUlRfUEFVU0UgPSAxO1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRfTkVYVF9UUkFDSyA9IDMyO1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRTX1BMQVkgPSAxNjM4NDtcbmV4cG9ydCBjb25zdCBPRkZfU1RBVEVTID0gW1wib2ZmXCIsIFwiaWRsZVwiXTtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVBsYXllclRodW1ibmFpbCB7XG4gIGNvbnRlbnRfdHlwZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lZGlhUGxheWVyVGh1bWJuYWlsV2l0aENhY2hlID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+XG4gIHRpbWVDYWNoZVByb21pc2VGdW5jKFxuICAgIFwiX21lZGlhX3BsYXllclRtYlwiLFxuICAgIDkwMDAsXG4gICAgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbCxcbiAgICBoYXNzLFxuICAgIGVudGl0eUlkXG4gICk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1lZGlhUGxheWVyVGh1bWJuYWlsID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+IHtcbiAgcmV0dXJuIGhhc3MuY2FsbFdTPE1lZGlhUGxheWVyVGh1bWJuYWlsPih7XG4gICAgdHlwZTogXCJtZWRpYV9wbGF5ZXJfdGh1bWJuYWlsXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQStPQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7QUFNQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQVFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFuWUE7QUFDQTtBQWtOQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFzQkE7Ozs7QUE3T0E7QUFDQTtBQXFZQTs7Ozs7Ozs7Ozs7O0FDdlpBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQVlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTs7QUF5T0E7QUF4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBO0FBQ0E7QUFPQTtBQUdBO0FBRUE7QUFFQTtBQUtBO0FBT0E7QUFUQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUF5Q0E7OztBQUFBO0FBdk9BO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQVhBO0FBREE7QUFDQTtBQXlPQTtBQUFBO0FBek9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQVNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBZ0pBO0FBeklBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUVBO0FBQ0E7QUFPQTtBQU1BO0FBS0E7QUFhQTtBQU1BO0FBaENBO0FBQ0E7QUFDQTtBQUdBO0FBS0E7QUFNQTtBQUtBO0FBRkE7QUFDQTtBQUNBO0FBUUE7QUFNQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBc0VBO0FBQ0E7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBLGdPQUNBO0FBREE7QUFFQTtBQUhBO0FBS0E7OztBQXZDQTtBQUNBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVlBOzs7O0FBekJBO0FBQ0E7QUEwQ0E7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBSUE7QUFBQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==