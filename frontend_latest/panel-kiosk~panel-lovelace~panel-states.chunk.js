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














/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class HaMediaPlayerCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style
        include="paper-material-styles iron-flex iron-flex-alignment iron-positioning"
      >
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
        }

        .banner {
          position: relative;
          background-color: white;
          border-top-left-radius: 2px;
          border-top-right-radius: 2px;
        }

        .banner:before {
          display: block;
          content: "";
          width: 100%;
          /* removed .25% from 16:9 ratio to fix YT black bars */
          padding-top: 56%;
          transition: padding-top 0.8s;
        }

        .banner.no-cover {
          background-position: center center;
          background-image: url(/static/images/card_media_player_bg.png);
          background-repeat: no-repeat;
          background-color: var(--primary-color);
        }

        .banner.content-type-music:before {
          padding-top: 100%;
        }

        .banner.content-type-game:before {
          padding-top: 100%;
        }

        .banner.no-cover:before {
          padding-top: 88px;
        }

        .banner > .cover {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          border-top-left-radius: 2px;
          border-top-right-radius: 2px;

          background-position: center center;
          background-size: cover;
          transition: opacity 0.8s;
          opacity: 1;
        }

        .banner.is-off > .cover {
          opacity: 0;
        }

        .banner > .caption {
          @apply --paper-font-caption;

          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;

          background-color: rgba(0, 0, 0, var(--dark-secondary-opacity));

          padding: 8px 16px;

          font-size: 14px;
          font-weight: 500;
          color: white;

          transition: background-color 0.5s;
        }

        .banner.is-off > .caption {
          background-color: initial;
        }

        .banner > .caption .title {
          @apply --paper-font-common-nowrap;
          font-size: 1.2em;
          margin: 8px 0 4px;
        }

        .progress {
          width: 100%;
          height: var(--paper-progress-height, 4px);
          margin-top: calc(-1 * var(--paper-progress-height, 4px));
          --paper-progress-active-color: var(--accent-color);
          --paper-progress-container-color: rgba(200, 200, 200, 0.5);
        }

        .controls {
          position: relative;
          @apply --paper-font-body1;
          padding: 8px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;
          background-color: var(--paper-card-background-color, white);
        }

        .controls paper-icon-button {
          width: 44px;
          height: 44px;
        }

        .playback-controls {
          direction: ltr;
        }

        paper-icon-button {
          opacity: var(--dark-primary-opacity);
        }

        paper-icon-button[disabled] {
          opacity: var(--dark-disabled-opacity);
        }

        paper-icon-button.primary {
          width: 56px !important;
          height: 56px !important;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          padding: 8px;
          transition: background-color 0.5s;
        }

        paper-icon-button.primary[disabled] {
          background-color: rgba(0, 0, 0, var(--dark-disabled-opacity));
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div
        class$="[[computeBannerClasses(playerObj, _coverShowing, _coverLoadError)]]"
      >
        <div class="cover" id="cover"></div>

        <div class="caption">
          [[_computeStateName(stateObj)]]
          <div class="title">[[computePrimaryText(localize, playerObj)]]</div>
          [[playerObj.secondaryTitle]]<br />
        </div>
      </div>

      <paper-progress
        max="[[stateObj.attributes.media_duration]]"
        value="[[playbackPosition]]"
        hidden$="[[computeHideProgress(playerObj)]]"
        class="progress"
      ></paper-progress>

      <div class="controls layout horizontal justified">
        <paper-icon-button
          aria-label="Turn off"
          icon="hass:power"
          on-click="handleTogglePower"
          invisible$="[[computeHidePowerButton(playerObj)]]"
          class="self-center secondary"
        ></paper-icon-button>

        <div class="playback-controls">
          <paper-icon-button
            aria-label="Previous track"
            icon="hass:skip-previous"
            invisible$="[[!playerObj.supportsPreviousTrack]]"
            disabled="[[playerObj.isOff]]"
            on-click="handlePrevious"
          ></paper-icon-button>
          <paper-icon-button
            aria-label="Play or Pause"
            class="primary"
            icon="[[computePlaybackControlIcon(playerObj)]]"
            invisible$="[[!computePlaybackControlIcon(playerObj)]]"
            disabled="[[playerObj.isOff]]"
            on-click="handlePlaybackControl"
          ></paper-icon-button>
          <paper-icon-button
            aria-label="Next track"
            icon="hass:skip-next"
            invisible$="[[!playerObj.supportsNextTrack]]"
            disabled="[[playerObj.isOff]]"
            on-click="handleNext"
          ></paper-icon-button>
        </div>

        <paper-icon-button
          aria-label="More information."
          icon="hass:dots-vertical"
          on-click="handleOpenMoreInfo"
          class="self-center secondary"
        ></paper-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      playerObj: {
        type: Object,
        computed: "computePlayerObj(hass, stateObj)",
        observer: "playerObjChanged",
      },
      playbackControlIcon: {
        type: String,
        computed: "computePlaybackControlIcon(playerObj)",
      },
      playbackPosition: Number,
      _coverShowing: {
        type: Boolean,
        value: false,
      },
      _coverLoadError: {
        type: Boolean,
        value: false,
      },
    };
  }

  async playerObjChanged(playerObj, oldPlayerObj) {
    if (playerObj.isPlaying && playerObj.showProgress) {
      if (!this._positionTracking) {
        this._positionTracking = setInterval(
          () => this.updatePlaybackPosition(),
          1000
        );
      }
    } else if (this._positionTracking) {
      clearInterval(this._positionTracking);
      this._positionTracking = null;
    }
    if (playerObj.showProgress) {
      this.updatePlaybackPosition();
    }

    const picture = playerObj.stateObj.attributes.entity_picture;
    const oldPicture =
      oldPlayerObj && oldPlayerObj.stateObj.attributes.entity_picture;

    if (picture !== oldPicture && !picture) {
      this.$.cover.style.backgroundImage = "";
      return;
    }
    if (picture === oldPicture) {
      return;
    }

    // We have a new picture url
    // If entity picture is non-relative, we use that url directly.
    if (picture.substr(0, 1) !== "/") {
      this._coverShowing = true;
      this._coverLoadError = false;
      this.$.cover.style.backgroundImage = `url(${picture})`;
      return;
    }

    try {
      const {
        content_type: contentType,
        content,
      } = await Object(_data_media_player__WEBPACK_IMPORTED_MODULE_7__["fetchMediaPlayerThumbnailWithCache"])(
        this.hass,
        playerObj.stateObj.entity_id
      );
      this._coverShowing = true;
      this._coverLoadError = false;
      this.$.cover.style.backgroundImage = `url(data:${contentType};base64,${content})`;
    } catch (err) {
      this._coverShowing = false;
      this._coverLoadError = true;
      this.$.cover.style.backgroundImage = "";
    }
  }

  updatePlaybackPosition() {
    this.playbackPosition = this.playerObj.currentProgress;
  }

  computeBannerClasses(playerObj, coverShowing, coverLoadError) {
    var cls = "banner";

    if (!playerObj) {
      return cls;
    }

    if (playerObj.isOff || playerObj.isIdle) {
      cls += " is-off no-cover";
    } else if (
      !playerObj.stateObj.attributes.entity_picture ||
      coverLoadError ||
      !coverShowing
    ) {
      cls += " no-cover";
    } else if (playerObj.stateObj.attributes.media_content_type === "music") {
      cls += " content-type-music";
    } else if (playerObj.stateObj.attributes.media_content_type === "game") {
      cls += " content-type-game";
    }
    return cls;
  }

  computeHideProgress(playerObj) {
    return !playerObj.showProgress;
  }

  computeHidePowerButton(playerObj) {
    return playerObj.isOff
      ? !playerObj.supportsTurnOn
      : !playerObj.supportsTurnOff;
  }

  computePlayerObj(hass, stateObj) {
    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
  }

  computePrimaryText(localize, playerObj) {
    return (
      playerObj.primaryTitle ||
      localize(`state.media_player.${playerObj.stateObj.state}`) ||
      localize(`state.default.${playerObj.stateObj.state}`) ||
      playerObj.stateObj.state
    );
  }

  computePlaybackControlIcon(playerObj) {
    if (playerObj.isPlaying) {
      return playerObj.supportsPause ? "hass:pause" : "hass:stop";
    }
    if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
      if (
        playerObj.hasMediaControl &&
        playerObj.supportsPause &&
        !playerObj.isPaused
      ) {
        return "hass:play-pause";
      }
      return playerObj.supportsPlay ? "hass:play" : null;
    }
    return "";
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
  }

  handleNext(ev) {
    ev.stopPropagation();
    this.playerObj.nextTrack();
  }

  handleOpenMoreInfo(ev) {
    ev.stopPropagation();
    this.fire("hass-more-info", { entityId: this.stateObj.entity_id });
  }

  handlePlaybackControl(ev) {
    ev.stopPropagation();
    this.playerObj.mediaPlayPause();
  }

  handlePrevious(ev) {
    ev.stopPropagation();
    this.playerObj.previousTrack();
  }

  handleTogglePower(ev) {
    ev.stopPropagation();
    this.playerObj.togglePower();
  }
}
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
const extractViews = (entities) => {
    const views = [];
    Object.keys(entities).forEach((entityId) => {
        const entity = entities[entityId];
        if (entity.attributes.view) {
            views.push(entity);
        }
    });
    views.sort((view1, view2) => {
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
const getGroupEntities = (entities, group) => {
    const result = {};
    group.attributes.entity_id.forEach((entityId) => {
        const entity = entities[entityId];
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
const getViewEntities = (entities, view) => {
    const viewEntities = {};
    view.attributes.entity_id.forEach((entityId) => {
        const entity = entities[entityId];
        if (entity && !entity.attributes.hidden) {
            viewEntities[entity.entity_id] = entity;
            if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entity.entity_id) === "group") {
                const groupEntities = Object(_get_group_entities__WEBPACK_IMPORTED_MODULE_1__["getGroupEntities"])(entities, entity);
                Object.keys(groupEntities).forEach((grEntityId) => {
                    const grEntity = groupEntities[grEntityId];
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
const splitByGroups = (entities) => {
    const groups = [];
    const ungrouped = {};
    Object.keys(entities).forEach((entityId) => {
        const entity = entities[entityId];
        if (Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId) === "group") {
            groups.push(entity);
        }
        else {
            ungrouped[entityId] = entity;
        }
    });
    groups.forEach((group) => group.attributes.entity_id.forEach((entityId) => {
        delete ungrouped[entityId];
    }));
    return { groups, ungrouped };
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











let HaStateLabelBadge = class HaStateLabelBadge extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    connectedCallback() {
        super.connectedCallback();
        this._connected = true;
        this.startInterval(this.state);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._connected = false;
        this.clearInterval();
    }
    render() {
        const state = this.state;
        if (!state) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
        <ha-label-badge
          class="warning"
          label="${this.hass.localize("state_badge.default.error")}"
          icon="hass:alert"
          description="${this.hass.localize("state_badge.default.entity_not_found")}"
        ></ha-label-badge>
      `;
        }
        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(state);
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-label-badge
        class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
            [domain]: true,
            "has-unit_of_measurement": "unit_of_measurement" in state.attributes,
        })}"
        .value="${this._computeValue(domain, state)}"
        .icon="${this.icon ? this.icon : this._computeIcon(domain, state)}"
        .image="${this.icon
            ? ""
            : this.image
                ? this.image
                : state.attributes.entity_picture}"
        .label="${this._computeLabel(domain, state, this._timerTimeRemaining)}"
        .description="${this.name ? this.name : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(state)}"
      ></ha-label-badge>
    `;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        this.addEventListener("click", (ev) => {
            ev.stopPropagation();
            if (this.state) {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "hass-more-info", { entityId: this.state.entity_id });
            }
        });
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (this._connected && changedProperties.has("state")) {
            this.startInterval(this.state);
        }
    }
    _computeValue(domain, state) {
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
                    : this.hass.localize(`component.${domain}.state.${state.state}`) ||
                        state.state;
        }
    }
    _computeIcon(domain, state) {
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
    }
    _computeLabel(domain, state, _timerTimeRemaining) {
        if (state.state === "unavailable" ||
            ["device_tracker", "alarm_control_panel", "person"].includes(domain)) {
            // Localize the state with a special state_badge namespace, which has variations of
            // the state translations that are truncated to fit within the badge label. Translations
            // are only added for device_tracker, alarm_control_panel and person.
            return (this.hass.localize(`state_badge.${domain}.${state.state}`) ||
                this.hass.localize(`state_badge.default.${state.state}`) ||
                state.state);
        }
        if (domain === "timer") {
            return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_9__["default"])(_timerTimeRemaining);
        }
        return state.attributes.unit_of_measurement || null;
    }
    clearInterval() {
        if (this._updateRemaining) {
            clearInterval(this._updateRemaining);
            this._updateRemaining = undefined;
        }
    }
    startInterval(stateObj) {
        this.clearInterval();
        if (stateObj && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(stateObj) === "timer") {
            this.calculateTimerRemaining(stateObj);
            if (stateObj.state === "active") {
                this._updateRemaining = window.setInterval(() => this.calculateTimerRemaining(this.state), 1000);
            }
        }
    }
    calculateTimerRemaining(stateObj) {
        this._timerTimeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_8__["timerTimeRemaining"])(stateObj);
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      :host {
        cursor: pointer;
      }

      ha-label-badge {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }
      ha-label-badge.has-unit_of_measurement {
        --ha-label-badge-label-text-transform: none;
      }

      ha-label-badge.binary_sensor,
      ha-label-badge.updater {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .red {
        --ha-label-badge-color: var(--label-badge-red, #df4c1e);
      }

      .blue {
        --ha-label-badge-color: var(--label-badge-blue, #039be5);
      }

      .green {
        --ha-label-badge-color: var(--label-badge-green, #0da035);
      }

      .yellow {
        --ha-label-badge-color: var(--label-badge-yellow, #f4b400);
      }

      .grey {
        --ha-label-badge-color: var(--label-badge-grey, var(--paper-grey-500));
      }

      .warning {
        --ha-label-badge-color: var(--label-badge-yellow, #fce588);
      }
    `;
    }
};
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

/***/ "./src/components/ha-label-badge.ts":
/*!******************************************!*\
  !*** ./src/components/ha-label-badge.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");



class HaLabelBadge extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
    static get properties() {
        return {
            value: {},
            icon: {},
            label: {},
            description: {},
            image: {},
        };
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
      <div class="badge-container">
        <div class="label-badge" id="badge">
          <div
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
            value: true,
            big: Boolean(this.value && this.value.length > 4),
        })}"
          >
            ${this.icon && !this.value && !this.image
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                  <ha-icon .icon="${this.icon}"></ha-icon>
                `
            : ""}
            ${this.value && !this.image
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                  <span>${this.value}</span>
                `
            : ""}
          </div>
          ${this.label
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
                <div
                  class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
                label: true,
                big: this.label.length > 5,
            })}"
                >
                  <span>${this.label}</span>
                </div>
              `
            : ""}
        </div>
        ${this.description
            ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"] `
              <div class="title">${this.description}</div>
            `
            : ""}
      </div>
    `;
    }
    static get styles() {
        return [
            lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
        .badge-container {
          display: inline-block;
          text-align: center;
          vertical-align: top;
        }
        .label-badge {
          position: relative;
          display: block;
          margin: 0 auto;
          width: var(--ha-label-badge-size, 2.5em);
          text-align: center;
          height: var(--ha-label-badge-size, 2.5em);
          line-height: var(--ha-label-badge-size, 2.5em);
          font-size: var(--ha-label-badge-font-size, 1.5em);
          border-radius: 50%;
          border: 0.1em solid var(--ha-label-badge-color, var(--primary-color));
          color: var(--label-badge-text-color, rgb(76, 76, 76));

          white-space: nowrap;
          background-color: var(--label-badge-background-color, white);
          background-size: cover;
          transition: border 0.3s ease-in-out;
        }
        .label-badge .value {
          font-size: 90%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label-badge .value.big {
          font-size: 70%;
        }
        .label-badge .label {
          position: absolute;
          bottom: -1em;
          /* Make the label as wide as container+border. (parent_borderwidth / font-size) */
          left: -0.2em;
          right: -0.2em;
          line-height: 1em;
          font-size: 0.5em;
        }
        .label-badge .label span {
          box-sizing: border-box;
          max-width: 100%;
          display: inline-block;
          background-color: var(--ha-label-badge-color, var(--primary-color));
          color: var(--ha-label-badge-label-color, white);
          border-radius: 1em;
          padding: 9% 16% 8% 16%; /* mostly apitalized text, not much descenders => bit more top margin */
          font-weight: 500;
          overflow: hidden;
          text-transform: uppercase;
          text-overflow: ellipsis;
          transition: background-color 0.3s ease-in-out;
          text-transform: var(--ha-label-badge-label-text-transform, uppercase);
        }
        .label-badge .label.big span {
          font-size: 90%;
          padding: 10% 12% 7% 12%; /* push smaller text a bit down to center vertically */
        }
        .badge-container .title {
          margin-top: 1em;
          font-size: var(--ha-label-badge-title-font-size, 0.9em);
          width: var(--ha-label-badge-title-width, 5em);
          font-weight: var(--ha-label-badge-title-font-weight, 400);
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
      `,
        ];
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("image")) {
            this.shadowRoot.getElementById("badge").style.backgroundImage = this
                .image
                ? `url(${this.image})`
                : "";
        }
    }
}
customElements.define("ha-label-badge", HaLabelBadge);


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









/*
 * @appliesMixin EventsMixin
 */
class HaStartVoiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-icon-button
        aria-label="Start conversation"
        icon="hass:microphone"
        hidden$="[[!canListen]]"
        on-click="handleListenClick"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        value: null,
      },

      canListen: {
        type: Boolean,
        computed: "computeCanListen(hass)",
        notify: true,
      },
    };
  }

  computeCanListen(hass) {
    return (
      "webkitSpeechRecognition" in window &&
      Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "conversation")
    );
  }

  handleListenClick() {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "show-dialog", {
      dialogImport: () =>
        __webpack_require__.e(/*! import() | voice-command-dialog */ "voice-command-dialog").then(__webpack_require__.bind(null, /*! ../dialogs/ha-voice-command-dialog */ "./src/dialogs/ha-voice-command-dialog.js")),
      dialogTag: "ha-voice-command-dialog",
    });
  }
}

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

const SUPPORT_PAUSE = 1;
const SUPPORT_NEXT_TRACK = 32;
const SUPPORTS_PLAY = 16384;
const OFF_STATES = ["off", "idle"];
const fetchMediaPlayerThumbnailWithCache = (hass, entityId) => Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_media_playerTmb", 9000, fetchMediaPlayerThumbnail, hass, entityId);
const fetchMediaPlayerThumbnail = (hass, entityId) => {
    return hass.callWS({
        type: "media_player_thumbnail",
        entity_id: entityId,
    });
};


/***/ }),

/***/ "./src/layouts/ha-app-layout.js":
/*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/




class HaAppLayout extends customElements.get("app-header-layout") {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
  }
}
customElements.define("ha-app-layout", HaAppLayout);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwta2lvc2t+cGFuZWwtbG92ZWxhY2V+cGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLW1lZGlhX3BsYXllci1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2V4dHJhY3Rfdmlld3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvZ2V0X2dyb3VwX2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2dldF92aWV3X2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3NwbGl0X2J5X2dyb3Vwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtc3RhdGUtbGFiZWwtYmFkZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1sYWJlbC1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zdGFydC12b2ljZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvbWVkaWEtcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL2hhLWFwcC1sYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1wcm9ncmVzcy9wYXBlci1wcm9ncmVzc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuaW1wb3J0IHsgZmV0Y2hNZWRpYVBsYXllclRodW1ibmFpbFdpdGhDYWNoZSB9IGZyb20gXCIuLi9kYXRhL21lZGlhLXBsYXllclwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFNZWRpYVBsYXllckNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlXG4gICAgICAgIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXMgaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnQgaXJvbi1wb3NpdGlvbmluZ1wiXG4gICAgICA+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZm9udC1zaXplOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lcjpiZWZvcmUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgLyogcmVtb3ZlZCAuMjUlIGZyb20gMTY6OSByYXRpbyB0byBmaXggWVQgYmxhY2sgYmFycyAqL1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA1NiU7XG4gICAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZy10b3AgMC44cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIubm8tY292ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvaW1hZ2VzL2NhcmRfbWVkaWFfcGxheWVyX2JnLnBuZyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuY29udGVudC10eXBlLW11c2ljOmJlZm9yZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyLmNvbnRlbnQtdHlwZS1nYW1lOmJlZm9yZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyLm5vLWNvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDg4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyID4gLmNvdmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjhzO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyLmlzLW9mZiA+IC5jb3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIgPiAuY2FwdGlvbiB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrLXNlY29uZGFyeS1vcGFjaXR5KSk7XG5cbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcblxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYW5uZXIuaXMtb2ZmID4gLmNhcHRpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFubmVyID4gLmNhcHRpb24gLnRpdGxlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICBtYXJnaW46IDhweCAwIDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYXBlci1wcm9ncmVzcy1oZWlnaHQsIDRweCk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXBhcGVyLXByb2dyZXNzLWhlaWdodCwgNHB4KSk7XG4gICAgICAgICAgLS1wYXBlci1wcm9ncmVzcy1hY3RpdmUtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgICAgLS1wYXBlci1wcm9ncmVzcy1jb250YWluZXItY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNDRweDtcbiAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGxheWJhY2stY29udHJvbHMge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstcHJpbWFyeS1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uW2Rpc2FibGVkXSB7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uLnByaW1hcnkge1xuICAgICAgICAgIHdpZHRoOiA1NnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ucHJpbWFyeVtkaXNhYmxlZF0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tZGFyay1kaXNhYmxlZC1vcGFjaXR5KSk7XG4gICAgICAgIH1cblxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3MkPVwiW1tjb21wdXRlQmFubmVyQ2xhc3NlcyhwbGF5ZXJPYmosIF9jb3ZlclNob3dpbmcsIF9jb3ZlckxvYWRFcnJvcildXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb3ZlclwiIGlkPVwiY292ZXJcIj48L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICAgIFtbX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5bW2NvbXB1dGVQcmltYXJ5VGV4dChsb2NhbGl6ZSwgcGxheWVyT2JqKV1dPC9kaXY+XG4gICAgICAgICAgW1twbGF5ZXJPYmouc2Vjb25kYXJ5VGl0bGVdXTxiciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cGFwZXItcHJvZ3Jlc3NcbiAgICAgICAgbWF4PVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX2R1cmF0aW9uXV1cIlxuICAgICAgICB2YWx1ZT1cIltbcGxheWJhY2tQb3NpdGlvbl1dXCJcbiAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVQcm9ncmVzcyhwbGF5ZXJPYmopXV1cIlxuICAgICAgICBjbGFzcz1cInByb2dyZXNzXCJcbiAgICAgID48L3BhcGVyLXByb2dyZXNzPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMgbGF5b3V0IGhvcml6b250YWwganVzdGlmaWVkXCI+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUdXJuIG9mZlwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6cG93ZXJcIlxuICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlVG9nZ2xlUG93ZXJcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbW2NvbXB1dGVIaWRlUG93ZXJCdXR0b24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICBjbGFzcz1cInNlbGYtY2VudGVyIHNlY29uZGFyeVwiXG4gICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwbGF5YmFjay1jb250cm9sc1wiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHRyYWNrXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnNraXAtcHJldmlvdXNcIlxuICAgICAgICAgICAgaW52aXNpYmxlJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ByZXZpb3VzVHJhY2tdXVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQcmV2aW91c1wiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGxheSBvciBQYXVzZVwiXG4gICAgICAgICAgICBjbGFzcz1cInByaW1hcnlcIlxuICAgICAgICAgICAgaWNvbj1cIltbY29tcHV0ZVBsYXliYWNrQ29udHJvbEljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW3BsYXllck9iai5pc09mZl1dXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlUGxheWJhY2tDb250cm9sXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IHRyYWNrXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnNraXAtbmV4dFwiXG4gICAgICAgICAgICBpbnZpc2libGUkPVwiW1shcGxheWVyT2JqLnN1cHBvcnRzTmV4dFRyYWNrXV1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW3BsYXllck9iai5pc09mZl1dXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlTmV4dFwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb3JlIGluZm9ybWF0aW9uLlwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy12ZXJ0aWNhbFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVPcGVuTW9yZUluZm9cIlxuICAgICAgICAgIGNsYXNzPVwic2VsZi1jZW50ZXIgc2Vjb25kYXJ5XCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgcGxheWVyT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVBsYXllck9iaihoYXNzLCBzdGF0ZU9iailcIixcbiAgICAgICAgb2JzZXJ2ZXI6IFwicGxheWVyT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHBsYXliYWNrQ29udHJvbEljb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXCIsXG4gICAgICB9LFxuICAgICAgcGxheWJhY2tQb3NpdGlvbjogTnVtYmVyLFxuICAgICAgX2NvdmVyU2hvd2luZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2NvdmVyTG9hZEVycm9yOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIHBsYXllck9iakNoYW5nZWQocGxheWVyT2JqLCBvbGRQbGF5ZXJPYmopIHtcbiAgICBpZiAocGxheWVyT2JqLmlzUGxheWluZyAmJiBwbGF5ZXJPYmouc2hvd1Byb2dyZXNzKSB7XG4gICAgICBpZiAoIXRoaXMuX3Bvc2l0aW9uVHJhY2tpbmcpIHtcbiAgICAgICAgdGhpcy5fcG9zaXRpb25UcmFja2luZyA9IHNldEludGVydmFsKFxuICAgICAgICAgICgpID0+IHRoaXMudXBkYXRlUGxheWJhY2tQb3NpdGlvbigpLFxuICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX3Bvc2l0aW9uVHJhY2tpbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcG9zaXRpb25UcmFja2luZyk7XG4gICAgICB0aGlzLl9wb3NpdGlvblRyYWNraW5nID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHBsYXllck9iai5zaG93UHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMudXBkYXRlUGxheWJhY2tQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IHBpY3R1cmUgPSBwbGF5ZXJPYmouc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZTtcbiAgICBjb25zdCBvbGRQaWN0dXJlID1cbiAgICAgIG9sZFBsYXllck9iaiAmJiBvbGRQbGF5ZXJPYmouc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZTtcblxuICAgIGlmIChwaWN0dXJlICE9PSBvbGRQaWN0dXJlICYmICFwaWN0dXJlKSB7XG4gICAgICB0aGlzLiQuY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBpY3R1cmUgPT09IG9sZFBpY3R1cmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBXZSBoYXZlIGEgbmV3IHBpY3R1cmUgdXJsXG4gICAgLy8gSWYgZW50aXR5IHBpY3R1cmUgaXMgbm9uLXJlbGF0aXZlLCB3ZSB1c2UgdGhhdCB1cmwgZGlyZWN0bHkuXG4gICAgaWYgKHBpY3R1cmUuc3Vic3RyKDAsIDEpICE9PSBcIi9cIikge1xuICAgICAgdGhpcy5fY292ZXJTaG93aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2NvdmVyTG9hZEVycm9yID0gZmFsc2U7XG4gICAgICB0aGlzLiQuY292ZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3BpY3R1cmV9KWA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGVudF90eXBlOiBjb250ZW50VHlwZSxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0gPSBhd2FpdCBmZXRjaE1lZGlhUGxheWVyVGh1bWJuYWlsV2l0aENhY2hlKFxuICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgIHBsYXllck9iai5zdGF0ZU9iai5lbnRpdHlfaWRcbiAgICAgICk7XG4gICAgICB0aGlzLl9jb3ZlclNob3dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fY292ZXJMb2FkRXJyb3IgPSBmYWxzZTtcbiAgICAgIHRoaXMuJC5jb3Zlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKGRhdGE6JHtjb250ZW50VHlwZX07YmFzZTY0LCR7Y29udGVudH0pYDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2NvdmVyU2hvd2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fY292ZXJMb2FkRXJyb3IgPSB0cnVlO1xuICAgICAgdGhpcy4kLmNvdmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUGxheWJhY2tQb3NpdGlvbigpIHtcbiAgICB0aGlzLnBsYXliYWNrUG9zaXRpb24gPSB0aGlzLnBsYXllck9iai5jdXJyZW50UHJvZ3Jlc3M7XG4gIH1cblxuICBjb21wdXRlQmFubmVyQ2xhc3NlcyhwbGF5ZXJPYmosIGNvdmVyU2hvd2luZywgY292ZXJMb2FkRXJyb3IpIHtcbiAgICB2YXIgY2xzID0gXCJiYW5uZXJcIjtcblxuICAgIGlmICghcGxheWVyT2JqKSB7XG4gICAgICByZXR1cm4gY2xzO1xuICAgIH1cblxuICAgIGlmIChwbGF5ZXJPYmouaXNPZmYgfHwgcGxheWVyT2JqLmlzSWRsZSkge1xuICAgICAgY2xzICs9IFwiIGlzLW9mZiBuby1jb3ZlclwiO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICAhcGxheWVyT2JqLnN0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmUgfHxcbiAgICAgIGNvdmVyTG9hZEVycm9yIHx8XG4gICAgICAhY292ZXJTaG93aW5nXG4gICAgKSB7XG4gICAgICBjbHMgKz0gXCIgbm8tY292ZXJcIjtcbiAgICB9IGVsc2UgaWYgKHBsYXllck9iai5zdGF0ZU9iai5hdHRyaWJ1dGVzLm1lZGlhX2NvbnRlbnRfdHlwZSA9PT0gXCJtdXNpY1wiKSB7XG4gICAgICBjbHMgKz0gXCIgY29udGVudC10eXBlLW11c2ljXCI7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJPYmouc3RhdGVPYmouYXR0cmlidXRlcy5tZWRpYV9jb250ZW50X3R5cGUgPT09IFwiZ2FtZVwiKSB7XG4gICAgICBjbHMgKz0gXCIgY29udGVudC10eXBlLWdhbWVcIjtcbiAgICB9XG4gICAgcmV0dXJuIGNscztcbiAgfVxuXG4gIGNvbXB1dGVIaWRlUHJvZ3Jlc3MocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuICFwbGF5ZXJPYmouc2hvd1Byb2dyZXNzO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gcGxheWVyT2JqLmlzT2ZmXG4gICAgICA/ICFwbGF5ZXJPYmouc3VwcG9ydHNUdXJuT25cbiAgICAgIDogIXBsYXllck9iai5zdXBwb3J0c1R1cm5PZmY7XG4gIH1cblxuICBjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBIYXNzTWVkaWFQbGF5ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZVByaW1hcnlUZXh0KGxvY2FsaXplLCBwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLnByaW1hcnlUaXRsZSB8fFxuICAgICAgbG9jYWxpemUoYHN0YXRlLm1lZGlhX3BsYXllci4ke3BsYXllck9iai5zdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgbG9jYWxpemUoYHN0YXRlLmRlZmF1bHQuJHtwbGF5ZXJPYmouc3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIHBsYXllck9iai5zdGF0ZU9iai5zdGF0ZVxuICAgICk7XG4gIH1cblxuICBjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopIHtcbiAgICBpZiAocGxheWVyT2JqLmlzUGxheWluZykge1xuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BhdXNlID8gXCJoYXNzOnBhdXNlXCIgOiBcImhhc3M6c3RvcFwiO1xuICAgIH1cbiAgICBpZiAocGxheWVyT2JqLmhhc01lZGlhQ29udHJvbCB8fCBwbGF5ZXJPYmouaXNPZmYgfHwgcGxheWVyT2JqLmlzSWRsZSkge1xuICAgICAgaWYgKFxuICAgICAgICBwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sICYmXG4gICAgICAgIHBsYXllck9iai5zdXBwb3J0c1BhdXNlICYmXG4gICAgICAgICFwbGF5ZXJPYmouaXNQYXVzZWRcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJoYXNzOnBsYXktcGF1c2VcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwbGF5ZXJPYmouc3VwcG9ydHNQbGF5ID8gXCJoYXNzOnBsYXlcIiA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBoYW5kbGVOZXh0KGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoubmV4dFRyYWNrKCk7XG4gIH1cblxuICBoYW5kbGVPcGVuTW9yZUluZm8oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmZpcmUoXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCB9KTtcbiAgfVxuXG4gIGhhbmRsZVBsYXliYWNrQ29udHJvbChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucGxheWVyT2JqLm1lZGlhUGxheVBhdXNlKCk7XG4gIH1cblxuICBoYW5kbGVQcmV2aW91cyhldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucGxheWVyT2JqLnByZXZpb3VzVHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVBvd2VyKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5wbGF5ZXJPYmoudG9nZ2xlUG93ZXIoKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWVkaWFfcGxheWVyLWNhcmRcIiwgSGFNZWRpYVBsYXllckNhcmQpO1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgREVGQVVMVF9WSUVXX0VOVElUWV9JRCB9IGZyb20gXCIuLi9jb25zdFwiO1xuaW1wb3J0IHsgR3JvdXBFbnRpdHkgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLy8gUmV0dXJuIGFuIG9yZGVyZWQgYXJyYXkgb2YgYXZhaWxhYmxlIHZpZXdzXG5leHBvcnQgY29uc3QgZXh0cmFjdFZpZXdzID0gKGVudGl0aWVzOiBIYXNzRW50aXRpZXMpOiBHcm91cEVudGl0eVtdID0+IHtcbiAgY29uc3Qgdmlld3M6IEdyb3VwRW50aXR5W10gPSBbXTtcblxuICBPYmplY3Qua2V5cyhlbnRpdGllcykuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG4gICAgaWYgKGVudGl0eS5hdHRyaWJ1dGVzLnZpZXcpIHtcbiAgICAgIHZpZXdzLnB1c2goZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcbiAgICB9XG4gIH0pO1xuXG4gIHZpZXdzLnNvcnQoKHZpZXcxLCB2aWV3MikgPT4ge1xuICAgIGlmICh2aWV3MS5lbnRpdHlfaWQgPT09IERFRkFVTFRfVklFV19FTlRJVFlfSUQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHZpZXcyLmVudGl0eV9pZCA9PT0gREVGQVVMVF9WSUVXX0VOVElUWV9JRCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiB2aWV3MS5hdHRyaWJ1dGVzLm9yZGVyIC0gdmlldzIuYXR0cmlidXRlcy5vcmRlcjtcbiAgfSk7XG5cbiAgcmV0dXJuIHZpZXdzO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdGllcyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEdyb3VwRW50aXR5IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRHcm91cEVudGl0aWVzID0gKFxuICBlbnRpdGllczogSGFzc0VudGl0aWVzLFxuICBncm91cDogR3JvdXBFbnRpdHlcbikgPT4ge1xuICBjb25zdCByZXN1bHQgPSB7fTtcblxuICBncm91cC5hdHRyaWJ1dGVzLmVudGl0eV9pZC5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIHJlc3VsdFtlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgSGFzc0VudGl0aWVzIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBnZXRHcm91cEVudGl0aWVzIH0gZnJvbSBcIi4vZ2V0X2dyb3VwX2VudGl0aWVzXCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGVudGl0aWVzIHRoYXQgdGhlIHZpZXcgd2lsbCBzaG93XG4vLyBpbmNsdWRpbmcgZW1iZWRkZWQgZ3JvdXBzLlxuZXhwb3J0IGNvbnN0IGdldFZpZXdFbnRpdGllcyA9IChcbiAgZW50aXRpZXM6IEhhc3NFbnRpdGllcyxcbiAgdmlldzogR3JvdXBFbnRpdHlcbik6IEhhc3NFbnRpdGllcyA9PiB7XG4gIGNvbnN0IHZpZXdFbnRpdGllcyA9IHt9O1xuXG4gIHZpZXcuYXR0cmlidXRlcy5lbnRpdHlfaWQuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBlbnRpdGllc1tlbnRpdHlJZF07XG5cbiAgICBpZiAoZW50aXR5ICYmICFlbnRpdHkuYXR0cmlidXRlcy5oaWRkZW4pIHtcbiAgICAgIHZpZXdFbnRpdGllc1tlbnRpdHkuZW50aXR5X2lkXSA9IGVudGl0eTtcblxuICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IFwiZ3JvdXBcIikge1xuICAgICAgICBjb25zdCBncm91cEVudGl0aWVzID0gZ2V0R3JvdXBFbnRpdGllcyhlbnRpdGllcywgZW50aXR5IGFzIEdyb3VwRW50aXR5KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhncm91cEVudGl0aWVzKS5mb3JFYWNoKChnckVudGl0eUlkKSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JFbnRpdHkgPSBncm91cEVudGl0aWVzW2dyRW50aXR5SWRdO1xuXG4gICAgICAgICAgaWYgKCFnckVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbikge1xuICAgICAgICAgICAgdmlld0VudGl0aWVzW2dyRW50aXR5SWRdID0gZ3JFbnRpdHk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2aWV3RW50aXRpZXM7XG59O1xuIiwiaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5pbXBvcnQgeyBIYXNzRW50aXRpZXMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBHcm91cEVudGl0eSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG4vLyBTcGxpdCBhIGNvbGxlY3Rpb24gaW50byBhIGxpc3Qgb2YgZ3JvdXBzIGFuZCBhICdyZXN0JyBsaXN0IG9mIHVuZ3JvdXBlZFxuLy8gZW50aXRpZXMuXG4vLyBSZXR1cm5zIHsgZ3JvdXBzOiBbXSwgdW5ncm91cGVkOiB7fSB9XG5leHBvcnQgY29uc3Qgc3BsaXRCeUdyb3VwcyA9IChlbnRpdGllczogSGFzc0VudGl0aWVzKSA9PiB7XG4gIGNvbnN0IGdyb3VwczogR3JvdXBFbnRpdHlbXSA9IFtdO1xuICBjb25zdCB1bmdyb3VwZWQ6IEhhc3NFbnRpdGllcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKGVudGl0aWVzKS5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgIGNvbnN0IGVudGl0eSA9IGVudGl0aWVzW2VudGl0eUlkXTtcblxuICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eUlkKSA9PT0gXCJncm91cFwiKSB7XG4gICAgICBncm91cHMucHVzaChlbnRpdHkgYXMgR3JvdXBFbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bmdyb3VwZWRbZW50aXR5SWRdID0gZW50aXR5O1xuICAgIH1cbiAgfSk7XG5cbiAgZ3JvdXBzLmZvckVhY2goKGdyb3VwKSA9PlxuICAgIGdyb3VwLmF0dHJpYnV0ZXMuZW50aXR5X2lkLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICBkZWxldGUgdW5ncm91cGVkW2VudGl0eUlkXTtcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiB7IGdyb3VwcywgdW5ncm91cGVkIH07XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGRvbWFpbkljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9kb21haW5faWNvblwiO1xuaW1wb3J0IHsgc3RhdGVJY29uIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvc3RhdGVfaWNvblwiO1xuaW1wb3J0IHsgdGltZXJUaW1lUmVtYWluaW5nIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvdGltZXJfdGltZV9yZW1haW5pbmdcIjtcbmltcG9ydCBzZWNvbmRzVG9EdXJhdGlvbiBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL3NlY29uZHNfdG9fZHVyYXRpb25cIjtcblxuaW1wb3J0IFwiLi4vaGEtbGFiZWwtYmFkZ2VcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1zdGF0ZS1sYWJlbC1iYWRnZVwiKVxuZXhwb3J0IGNsYXNzIEhhU3RhdGVMYWJlbEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGU/OiBIYXNzRW50aXR5O1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYW1lPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpY29uPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpbWFnZT86IHN0cmluZztcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF90aW1lclRpbWVSZW1haW5pbmc/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfY29ubmVjdGVkPzogYm9vbGVhbjtcblxuICBwcml2YXRlIF91cGRhdGVSZW1haW5pbmc/OiBudW1iZXI7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCk6IHZvaWQge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY29ubmVjdGVkID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhLWxhYmVsLWJhZGdlXG4gICAgICAgICAgY2xhc3M9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInN0YXRlX2JhZGdlLmRlZmF1bHQuZXJyb3JcIil9XCJcbiAgICAgICAgICBpY29uPVwiaGFzczphbGVydFwiXG4gICAgICAgICAgZGVzY3JpcHRpb249XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInN0YXRlX2JhZGdlLmRlZmF1bHQuZW50aXR5X25vdF9mb3VuZFwiXG4gICAgICAgICAgKX1cIlxuICAgICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWxhYmVsLWJhZGdlXG4gICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgW2RvbWFpbl06IHRydWUsXG4gICAgICAgICAgXCJoYXMtdW5pdF9vZl9tZWFzdXJlbWVudFwiOiBcInVuaXRfb2ZfbWVhc3VyZW1lbnRcIiBpbiBzdGF0ZS5hdHRyaWJ1dGVzLFxuICAgICAgICB9KX1cIlxuICAgICAgICAudmFsdWU9XCIke3RoaXMuX2NvbXB1dGVWYWx1ZShkb21haW4sIHN0YXRlKX1cIlxuICAgICAgICAuaWNvbj1cIiR7dGhpcy5pY29uID8gdGhpcy5pY29uIDogdGhpcy5fY29tcHV0ZUljb24oZG9tYWluLCBzdGF0ZSl9XCJcbiAgICAgICAgLmltYWdlPVwiJHt0aGlzLmljb25cbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IHRoaXMuaW1hZ2VcbiAgICAgICAgICA/IHRoaXMuaW1hZ2VcbiAgICAgICAgICA6IHN0YXRlLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmV9XCJcbiAgICAgICAgLmxhYmVsPVwiJHt0aGlzLl9jb21wdXRlTGFiZWwoZG9tYWluLCBzdGF0ZSwgdGhpcy5fdGltZXJUaW1lUmVtYWluaW5nKX1cIlxuICAgICAgICAuZGVzY3JpcHRpb249XCIke3RoaXMubmFtZSA/IHRoaXMubmFtZSA6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGUpfVwiXG4gICAgICA+PC9oYS1sYWJlbC1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZSkge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkOiB0aGlzLnN0YXRlLmVudGl0eV9pZCB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXMpO1xuXG4gICAgaWYgKHRoaXMuX2Nvbm5lY3RlZCAmJiBjaGFuZ2VkUHJvcGVydGllcy5oYXMoXCJzdGF0ZVwiKSkge1xuICAgICAgdGhpcy5zdGFydEludGVydmFsKHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVWYWx1ZShkb21haW46IHN0cmluZywgc3RhdGU6IEhhc3NFbnRpdHkpIHtcbiAgICBzd2l0Y2ggKGRvbWFpbikge1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInBlcnNvblwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJzdW5cIjpcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICBjYXNlIFwidGltZXJcIjpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBjYXNlIFwic2Vuc29yXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGUuc3RhdGUgPT09IFwidW5rbm93blwiXG4gICAgICAgICAgPyBcIi1cIlxuICAgICAgICAgIDogdGhpcy5oYXNzIS5sb2NhbGl6ZShgY29tcG9uZW50LiR7ZG9tYWlufS5zdGF0ZS4ke3N0YXRlLnN0YXRlfWApIHx8XG4gICAgICAgICAgICAgIHN0YXRlLnN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVJY29uKGRvbWFpbjogc3RyaW5nLCBzdGF0ZTogSGFzc0VudGl0eSkge1xuICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChkb21haW4pIHtcbiAgICAgIGNhc2UgXCJhbGFybV9jb250cm9sX3BhbmVsXCI6XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJwZW5kaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOmNsb2NrLWZhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfYXdheVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpuYXR1cmVcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfaG9tZVwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczpob21lLXZhcmlhbnRcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuc3RhdGUgPT09IFwiYXJtZWRfbmlnaHRcIikge1xuICAgICAgICAgIHJldHVybiBcImhhc3M6d2VhdGhlci1uaWdodFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5zdGF0ZSA9PT0gXCJhcm1lZF9jdXN0b21fYnlwYXNzXCIpIHtcbiAgICAgICAgICByZXR1cm4gXCJoYXNzOnNoaWVsZC1ob21lXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLnN0YXRlID09PSBcInRyaWdnZXJlZFwiKSB7XG4gICAgICAgICAgcmV0dXJuIFwiaGFzczphbGVydC1jaXJjbGVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdGF0ZSA9PSAnZGlzYXJtZWQnXG4gICAgICAgIHJldHVybiBkb21haW5JY29uKGRvbWFpbiwgc3RhdGUuc3RhdGUpO1xuICAgICAgY2FzZSBcImJpbmFyeV9zZW5zb3JcIjpcbiAgICAgIGNhc2UgXCJkZXZpY2VfdHJhY2tlclwiOlxuICAgICAgY2FzZSBcInVwZGF0ZXJcIjpcbiAgICAgIGNhc2UgXCJwZXJzb25cIjpcbiAgICAgICAgcmV0dXJuIHN0YXRlSWNvbihzdGF0ZSk7XG4gICAgICBjYXNlIFwic3VuXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJhYm92ZV9ob3Jpem9uXCJcbiAgICAgICAgICA/IGRvbWFpbkljb24oZG9tYWluKVxuICAgICAgICAgIDogXCJoYXNzOmJyaWdodG5lc3MtM1wiO1xuICAgICAgY2FzZSBcInRpbWVyXCI6XG4gICAgICAgIHJldHVybiBzdGF0ZS5zdGF0ZSA9PT0gXCJhY3RpdmVcIiA/IFwiaGFzczp0aW1lclwiIDogXCJoYXNzOnRpbWVyLW9mZlwiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcHV0ZUxhYmVsKGRvbWFpbiwgc3RhdGUsIF90aW1lclRpbWVSZW1haW5pbmcpIHtcbiAgICBpZiAoXG4gICAgICBzdGF0ZS5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiIHx8XG4gICAgICBbXCJkZXZpY2VfdHJhY2tlclwiLCBcImFsYXJtX2NvbnRyb2xfcGFuZWxcIiwgXCJwZXJzb25cIl0uaW5jbHVkZXMoZG9tYWluKVxuICAgICkge1xuICAgICAgLy8gTG9jYWxpemUgdGhlIHN0YXRlIHdpdGggYSBzcGVjaWFsIHN0YXRlX2JhZGdlIG5hbWVzcGFjZSwgd2hpY2ggaGFzIHZhcmlhdGlvbnMgb2ZcbiAgICAgIC8vIHRoZSBzdGF0ZSB0cmFuc2xhdGlvbnMgdGhhdCBhcmUgdHJ1bmNhdGVkIHRvIGZpdCB3aXRoaW4gdGhlIGJhZGdlIGxhYmVsLiBUcmFuc2xhdGlvbnNcbiAgICAgIC8vIGFyZSBvbmx5IGFkZGVkIGZvciBkZXZpY2VfdHJhY2tlciwgYWxhcm1fY29udHJvbF9wYW5lbCBhbmQgcGVyc29uLlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShgc3RhdGVfYmFkZ2UuJHtkb21haW59LiR7c3RhdGUuc3RhdGV9YCkgfHxcbiAgICAgICAgdGhpcy5oYXNzIS5sb2NhbGl6ZShgc3RhdGVfYmFkZ2UuZGVmYXVsdC4ke3N0YXRlLnN0YXRlfWApIHx8XG4gICAgICAgIHN0YXRlLnN0YXRlXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoZG9tYWluID09PSBcInRpbWVyXCIpIHtcbiAgICAgIHJldHVybiBzZWNvbmRzVG9EdXJhdGlvbihfdGltZXJUaW1lUmVtYWluaW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudCB8fCBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl91cGRhdGVSZW1haW5pbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fdXBkYXRlUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICBpZiAoc3RhdGVPYmogJiYgY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlT2JqKSA9PT0gXCJ0aW1lclwiKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHN0YXRlT2JqKTtcblxuICAgICAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgICAoKSA9PiB0aGlzLmNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHRoaXMuc3RhdGUpLFxuICAgICAgICAgIDEwMDBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbWVyUmVtYWluaW5nKHN0YXRlT2JqKSB7XG4gICAgdGhpcy5fdGltZXJUaW1lUmVtYWluaW5nID0gdGltZXJUaW1lUmVtYWluaW5nKHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBoYS1sYWJlbC1iYWRnZSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXJlZCwgI2RmNGMxZSk7XG4gICAgICB9XG4gICAgICBoYS1sYWJlbC1iYWRnZS5oYXMtdW5pdF9vZl9tZWFzdXJlbWVudCB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtbGFiZWwtdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIGhhLWxhYmVsLWJhZGdlLmJpbmFyeV9zZW5zb3IsXG4gICAgICBoYS1sYWJlbC1iYWRnZS51cGRhdGVyIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UtYmx1ZSwgIzAzOWJlNSk7XG4gICAgICB9XG5cbiAgICAgIC5yZWQge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1yZWQsICNkZjRjMWUpO1xuICAgICAgfVxuXG4gICAgICAuYmx1ZSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWJsdWUsICMwMzliZTUpO1xuICAgICAgfVxuXG4gICAgICAuZ3JlZW4ge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS1ncmVlbiwgIzBkYTAzNSk7XG4gICAgICB9XG5cbiAgICAgIC55ZWxsb3cge1xuICAgICAgICAtLWhhLWxhYmVsLWJhZGdlLWNvbG9yOiB2YXIoLS1sYWJlbC1iYWRnZS15ZWxsb3csICNmNGI0MDApO1xuICAgICAgfVxuXG4gICAgICAuZ3JleSB7XG4gICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWdyZXksIHZhcigtLXBhcGVyLWdyZXktNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC53YXJuaW5nIHtcbiAgICAgICAgLS1oYS1sYWJlbC1iYWRnZS1jb2xvcjogdmFyKC0tbGFiZWwtYmFkZ2UteWVsbG93LCAjZmNlNTg4KTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1zdGF0ZS1sYWJlbC1iYWRnZVwiOiBIYVN0YXRlTGFiZWxCYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmNsYXNzIEhhQ2FyZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGVhZGVyPzogc3RyaW5nO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhhLWNhcmQtYm9yZGVyLXJhZGl1cywgMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1ib3gtc2hhZG93LFxuICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSxcbiAgICAgICAgICAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMilcbiAgICAgICAgKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuY2FyZC1oZWFkZXIsXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtaGVhZGVyKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oYS1jYXJkLWhlYWRlci1jb2xvciwgLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taGEtY2FyZC1oZWFkZXItZm9udC1mYW1pbHksIGluaGVyaXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWNhcmQtaGVhZGVyLWZvbnQtc2l6ZSwgMjRweCk7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKC5jYXJkLWNvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCkpLFxuICAgICAgc2xvdDpub3QoOmZpcnN0LWNoaWxkKTo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1jb250ZW50KSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuaGVhZGVyXG4gICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlclwiPiR7dGhpcy5oZWFkZXJ9PC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgYH1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRcIiwgSGFDYXJkKTtcbiIsImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIFByb3BlcnR5RGVjbGFyYXRpb25zLFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5pbXBvcnQgXCIuL2hhLWljb25cIjtcblxuY2xhc3MgSGFMYWJlbEJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgcHVibGljIGljb24/OiBzdHJpbmc7XG4gIHB1YmxpYyBsYWJlbD86IHN0cmluZztcbiAgcHVibGljIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBwdWJsaWMgaW1hZ2U/OiBzdHJpbmc7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCk6IFByb3BlcnR5RGVjbGFyYXRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHt9LFxuICAgICAgaWNvbjoge30sXG4gICAgICBsYWJlbDoge30sXG4gICAgICBkZXNjcmlwdGlvbjoge30sXG4gICAgICBpbWFnZToge30sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsLWJhZGdlXCIgaWQ9XCJiYWRnZVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICBiaWc6IEJvb2xlYW4odGhpcy52YWx1ZSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+IDQpLFxuICAgICAgICAgICAgfSl9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAke3RoaXMuaWNvbiAmJiAhdGhpcy52YWx1ZSAmJiAhdGhpcy5pbWFnZVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj1cIiR7dGhpcy5pY29ufVwiPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICR7dGhpcy52YWx1ZSAmJiAhdGhpcy5pbWFnZVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4ke3RoaXMudmFsdWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICR7dGhpcy5sYWJlbFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBiaWc6IHRoaXMubGFiZWwubGVuZ3RoID4gNSxcbiAgICAgICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+JHt0aGlzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHt0aGlzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj4ke3RoaXMuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgY3NzYFxuICAgICAgICAuYmFkZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXNpemUsIDIuNWVtKTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1zaXplLCAyLjVlbSk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXNpemUsIDIuNWVtKTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWxhYmVsLWJhZGdlLWZvbnQtc2l6ZSwgMS41ZW0pO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDAuMWVtIHNvbGlkIHZhcigtLWhhLWxhYmVsLWJhZGdlLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLXRleHQtY29sb3IsIHJnYig3NiwgNzYsIDc2KSk7XG5cbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhYmVsLWJhZGdlLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAudmFsdWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgLmxhYmVsLWJhZGdlIC52YWx1ZS5iaWcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNzAlO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAubGFiZWwge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0xZW07XG4gICAgICAgICAgLyogTWFrZSB0aGUgbGFiZWwgYXMgd2lkZSBhcyBjb250YWluZXIrYm9yZGVyLiAocGFyZW50X2JvcmRlcndpZHRoIC8gZm9udC1zaXplKSAqL1xuICAgICAgICAgIGxlZnQ6IC0wLjJlbTtcbiAgICAgICAgICByaWdodDogLTAuMmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICAgICAgfVxuICAgICAgICAubGFiZWwtYmFkZ2UgLmxhYmVsIHNwYW4ge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS1sYWJlbC1jb2xvciwgd2hpdGUpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nOiA5JSAxNiUgOCUgMTYlOyAvKiBtb3N0bHkgYXBpdGFsaXplZCB0ZXh0LCBub3QgbXVjaCBkZXNjZW5kZXJzID0+IGJpdCBtb3JlIHRvcCBtYXJnaW4gKi9cbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWhhLWxhYmVsLWJhZGdlLWxhYmVsLXRleHQtdHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xuICAgICAgICB9XG4gICAgICAgIC5sYWJlbC1iYWRnZSAubGFiZWwuYmlnIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgICAgICAgIHBhZGRpbmc6IDEwJSAxMiUgNyUgMTIlOyAvKiBwdXNoIHNtYWxsZXIgdGV4dCBhIGJpdCBkb3duIHRvIGNlbnRlciB2ZXJ0aWNhbGx5ICovXG4gICAgICAgIH1cbiAgICAgICAgLmJhZGdlLWNvbnRhaW5lciAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWhhLWxhYmVsLWJhZGdlLXRpdGxlLWZvbnQtc2l6ZSwgMC45ZW0pO1xuICAgICAgICAgIHdpZHRoOiB2YXIoLS1oYS1sYWJlbC1iYWRnZS10aXRsZS13aWR0aCwgNWVtKTtcbiAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0taGEtbGFiZWwtYmFkZ2UtdGl0bGUtZm9udC13ZWlnaHQsIDQwMCk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcGVydGllczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wZXJ0aWVzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwiaW1hZ2VcIikpIHtcbiAgICAgIHRoaXMuc2hhZG93Um9vdCEuZ2V0RWxlbWVudEJ5SWQoXCJiYWRnZVwiKSEuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpc1xuICAgICAgICAuaW1hZ2VcbiAgICAgICAgPyBgdXJsKCR7dGhpcy5pbWFnZX0pYFxuICAgICAgICA6IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1sYWJlbC1iYWRnZVwiOiBIYUxhYmVsQmFkZ2U7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbGFiZWwtYmFkZ2VcIiwgSGFMYWJlbEJhZGdlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmltcG9ydCBpc0NvbXBvbmVudExvYWRlZCBmcm9tIFwiLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhU3RhcnRWb2ljZUJ1dHRvbiBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXJ0IGNvbnZlcnNhdGlvblwiXG4gICAgICAgIGljb249XCJoYXNzOm1pY3JvcGhvbmVcIlxuICAgICAgICBoaWRkZW4kPVwiW1shY2FuTGlzdGVuXV1cIlxuICAgICAgICBvbi1jbGljaz1cImhhbmRsZUxpc3RlbkNsaWNrXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIGNhbkxpc3Rlbjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlQ2FuTGlzdGVuKGhhc3MpXCIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVDYW5MaXN0ZW4oaGFzcykge1xuICAgIHJldHVybiAoXG4gICAgICBcIndlYmtpdFNwZWVjaFJlY29nbml0aW9uXCIgaW4gd2luZG93ICYmXG4gICAgICBpc0NvbXBvbmVudExvYWRlZChoYXNzLCBcImNvbnZlcnNhdGlvblwiKVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVMaXN0ZW5DbGljaygpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInZvaWNlLWNvbW1hbmQtZGlhbG9nXCIgKi8gXCIuLi9kaWFsb2dzL2hhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIpLFxuICAgICAgZGlhbG9nVGFnOiBcImhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIsXG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtc3RhcnQtdm9pY2UtYnV0dG9uXCIsIEhhU3RhcnRWb2ljZUJ1dHRvbik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCB7IHRpbWVDYWNoZVByb21pc2VGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL3RpbWUtY2FjaGUtZnVuY3Rpb24tcHJvbWlzZVwiO1xuXG5leHBvcnQgY29uc3QgU1VQUE9SVF9QQVVTRSA9IDE7XG5leHBvcnQgY29uc3QgU1VQUE9SVF9ORVhUX1RSQUNLID0gMzI7XG5leHBvcnQgY29uc3QgU1VQUE9SVFNfUExBWSA9IDE2Mzg0O1xuZXhwb3J0IGNvbnN0IE9GRl9TVEFURVMgPSBbXCJvZmZcIiwgXCJpZGxlXCJdO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhUGxheWVyVGh1bWJuYWlsIHtcbiAgY29udGVudF90eXBlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWxXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbikgPT5cbiAgdGltZUNhY2hlUHJvbWlzZUZ1bmMoXG4gICAgXCJfbWVkaWFfcGxheWVyVG1iXCIsXG4gICAgOTAwMCxcbiAgICBmZXRjaE1lZGlhUGxheWVyVGh1bWJuYWlsLFxuICAgIGhhc3MsXG4gICAgZW50aXR5SWRcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWVkaWFQbGF5ZXJUaHVtYm5haWwgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbikgPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsV1M8TWVkaWFQbGF5ZXJUaHVtYm5haWw+KHtcbiAgICB0eXBlOiBcIm1lZGlhX3BsYXllcl90aHVtYm5haWxcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9KTtcbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcblRoaXMgY29kZSBpcyBjb3BpZWQgZnJvbSBhcHAtaGVhZGVyLWxheW91dC5cbidmdWxsYmxlZWQnIHN1cHBvcnQgaXMgcmVtb3ZlZCBhcyBIb21lIEFzc2lzc3RhbnQgZG9lc24ndCB1c2UgaXQuXG50cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSBpcyBhZGRlZC5cbiovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0L2FwcC1oZWFkZXItbGF5b3V0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5jbGFzcyBIYUFwcExheW91dCBleHRlbmRzIGN1c3RvbUVsZW1lbnRzLmdldChcImFwcC1oZWFkZXItbGF5b3V0XCIpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZSBhcHAtaGVhZGVyLWxheW91dCB0byBoYXZlIGl0cyBvd24gc3RhY2tpbmcgY29udGV4dCBzbyB0aGF0IGl0cyBwYXJlbnQgY2FuXG4gICAgICAgICAqIGNvbnRyb2wgdGhlIHN0YWNraW5nIG9mIGl0IHJlbGF0aXZlIHRvIG90aGVyIGVsZW1lbnRzIChlLmcuIGFwcC1kcmF3ZXItbGF5b3V0KS5cbiAgICAgICAgICogVGhpcyBjb3VsZCBiZSBkb25lIHVzaW5nIFxcYGlzb2xhdGlvbjogaXNvbGF0ZVxcYCwgYnV0IHRoYXQncyBub3Qgd2VsbCBzdXBwb3J0ZWRcbiAgICAgICAgICogYWNyb3NzIGJyb3dzZXJzLlxuICAgICAgICAgKi9cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICN3cmFwcGVyIDo6c2xvdHRlZChbc2xvdD1cImhlYWRlclwiXSkge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1maXhlZC10b3A7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICN3cmFwcGVyLmluaXRpYWxpemluZyA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgOjpzbG90dGVkKFtzbG90PVwiaGVhZGVyXCJdKSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSlcbiAgICAgICAgICAjd3JhcHBlci5pbml0aWFsaXppbmdcbiAgICAgICAgICA6OnNsb3R0ZWQoW3Nsb3Q9XCJoZWFkZXJcIl0pIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbaGFzLXNjcm9sbGluZy1yZWdpb25dKSAjd3JhcHBlciAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtoYXMtc2Nyb2xsaW5nLXJlZ2lvbl0pICN3cmFwcGVyLmluaXRpYWxpemluZyAjY29udGVudENvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgIC8qIENyZWF0ZSBhIHN0YWNraW5nIGNvbnRleHQgaGVyZSBzbyB0aGF0IGFsbCBjaGlsZHJlbiBhcHBlYXIgYmVsb3cgdGhlIGhlYWRlci4gKi9cbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAvKiBVc2luZyAndHJhbnNmb3JtJyB3aWxsIGNhdXNlICdwb3NpdGlvbjogZml4ZWQnIGVsZW1lbnRzIHRvIGJlaGF2ZSBsaWtlXG4gICAgICAgICAgICdwb3NpdGlvbjogYWJzb2x1dGUnIHJlbGF0aXZlIHRvIHRoaXMgZWxlbWVudC4gKi9cbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBwcmludCB7XG4gICAgICAgICAgOmhvc3QoW2hhcy1zY3JvbGxpbmctcmVnaW9uXSkgI3dyYXBwZXIgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogdmlzaWJsZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCIgY2xhc3M9XCJpbml0aWFsaXppbmdcIj5cbiAgICAgICAgPHNsb3QgaWQ9XCJoZWFkZXJTbG90XCIgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cblxuICAgICAgICA8ZGl2IGlkPVwiY29udGVudENvbnRhaW5lclwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPHNsb3QgaWQ9XCJmYWJcIiBuYW1lPVwiZmFiXCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYXBwLWxheW91dFwiLCBIYUFwcExheW91dCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZaQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQVlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUdBOztBQUVBOztBQUlBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7QUF4T0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBWEE7QUFEQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBU0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQThEQTs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBWUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==