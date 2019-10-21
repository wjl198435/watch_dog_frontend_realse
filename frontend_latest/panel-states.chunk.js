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





class HaBadgesCard extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        ha-state-label-badge {
          display: inline-block;
          margin-bottom: var(--ha-state-label-badge-margin-bottom, 16px);
        }
      </style>
      <template is="dom-repeat" items="[[states]]">
        <ha-state-label-badge
          hass="[[hass]]"
          state="[[item]]"
        ></ha-state-label-badge>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      states: Array,
    };
  }
}
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









const UPDATE_INTERVAL = 10000; // ms
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class HaCameraCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="paper-material-styles">
        :host {
          @apply --paper-material-elevation-1;
          display: block;
          position: relative;
          font-size: 0px;
          border-radius: 2px;
          cursor: pointer;
          min-height: 48px;
          line-height: 0;
        }
        .camera-feed {
          width: 100%;
          height: auto;
          border-radius: 2px;
        }
        .caption {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0px;
          right: 0px;
          bottom: 0px;
          border-bottom-left-radius: 2px;
          border-bottom-right-radius: 2px;

          background-color: rgba(0, 0, 0, 0.3);
          padding: 16px;

          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          color: white;
        }
      </style>

      <template is="dom-if" if="[[cameraFeedSrc]]">
        <img
          src="[[cameraFeedSrc]]"
          class="camera-feed"
          alt="[[_computeStateName(stateObj)]]"
          on-load="_imageLoaded"
          on-error="_imageError"
        />
      </template>
      <div class="caption">
        [[_computeStateName(stateObj)]]
        <template is="dom-if" if="[[!imageLoaded]]">
          ([[localize('ui.card.camera.not_available')]])
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "updateCameraFeedSrc",
      },
      cameraFeedSrc: {
        type: String,
        value: "",
      },
      imageLoaded: {
        type: Boolean,
        value: true,
      },
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", () => this.cardTapped());
  }

  connectedCallback() {
    super.connectedCallback();
    this.timer = setInterval(() => this.updateCameraFeedSrc(), UPDATE_INTERVAL);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timer);
  }

  _imageLoaded() {
    this.imageLoaded = true;
  }

  _imageError() {
    this.imageLoaded = false;
  }

  cardTapped() {
    this.fire("hass-more-info", { entityId: this.stateObj.entity_id });
  }

  async updateCameraFeedSrc() {
    this.cameraFeedSrc = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(
      this.hass,
      this.stateObj.entity_id
    );
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj);
  }
}
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












class HaCardChooser extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      cardData: {
        type: Object,
        observer: "cardDataChanged",
      },
    };
  }

  _updateCard(newData) {
    Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__["default"])(
      this,
      "HA-" + newData.cardType.toUpperCase() + "-CARD",
      newData
    );
  }

  createObserver() {
    this._updatesAllowed = false;
    this.observer = new IntersectionObserver((entries) => {
      if (!entries.length) return;
      if (entries[0].isIntersecting) {
        this.style.height = "";
        if (this._detachedChild) {
          this.appendChild(this._detachedChild);
          this._detachedChild = null;
        }
        this._updateCard(this.cardData); // Don't use 'newData' as it might have changed.
        this._updatesAllowed = true;
      } else {
        // Set the card to be 48px high. Otherwise if the card is kept as 0px height then all
        // following cards would trigger the observer at once.
        const offsetHeight = this.offsetHeight;
        this.style.height = `${offsetHeight || 48}px`;
        if (this.lastChild) {
          this._detachedChild = this.lastChild;
          this.removeChild(this.lastChild);
        }
        this._updatesAllowed = false;
      }
    });
    this.observer.observe(this);
  }

  cardDataChanged(newData) {
    if (!newData) return;
    // ha-entities-card is exempt from observer as it doesn't load heavy resources.
    // and usually doesn't load external resources (except for entity_picture).
    const eligibleToObserver =
      window.IntersectionObserver && newData.cardType !== "entities";
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
}
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















class HaEntitiesCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex"></style>
      <style>
        ha-card {
          padding: 16px;
        }
        .states {
          margin: -4px 0;
        }
        .state {
          padding: 4px 0;
        }
        .header {
          @apply --paper-font-headline;
          /* overwriting line-height +8 because entity-toggle can be 40px height,
           compensating this with reduced padding */
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
        }
        .header .name {
          @apply --paper-font-common-nowrap;
        }
        ha-entity-toggle {
          margin-left: 16px;
        }
        .more-info {
          cursor: pointer;
        }
      </style>

      <ha-card>
        <template is="dom-if" if="[[title]]">
          <div
            class$="[[computeTitleClass(groupEntity)]]"
            on-click="entityTapped"
          >
            <div class="flex name">[[title]]</div>
            <template is="dom-if" if="[[showGroupToggle(groupEntity, states)]]">
              <ha-entity-toggle
                hass="[[hass]]"
                state-obj="[[groupEntity]]"
              ></ha-entity-toggle>
            </template>
          </div>
        </template>
        <div class="states">
          <template
            is="dom-repeat"
            items="[[states]]"
            on-dom-change="addTapEvents"
          >
            <div class$="[[computeStateClass(item)]]">
              <state-card-content
                hass="[[hass]]"
                class="state-card"
                state-obj="[[item]]"
              ></state-card-content>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      states: Array,
      groupEntity: Object,
      title: {
        type: String,
        computed: "computeTitle(states, groupEntity, localize)",
      },
    };
  }

  constructor() {
    super();
    // We need to save a single bound function reference to ensure the event listener
    // can identify it properly.
    this.entityTapped = this.entityTapped.bind(this);
  }

  computeTitle(states, groupEntity, localize) {
    if (groupEntity) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(groupEntity).trim();
    }
    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(states[0]);
    return (
      (localize && localize(`domain.${domain}`)) || domain.replace(/_/g, " ")
    );
  }

  computeTitleClass(groupEntity) {
    let classes = "header horizontal layout center ";
    if (groupEntity) {
      classes += "more-info";
    }
    return classes;
  }

  computeStateClass(stateObj) {
    return Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__["stateMoreInfoType"])(stateObj) !== "hidden"
      ? "state more-info"
      : "state";
  }

  addTapEvents() {
    const cards = this.root.querySelectorAll(".state");
    cards.forEach((card) => {
      if (card.classList.contains("more-info")) {
        card.addEventListener("click", this.entityTapped);
      } else {
        card.removeEventListener("click", this.entityTapped);
      }
    });
  }

  entityTapped(ev) {
    const item = this.root
      .querySelector("dom-repeat")
      .itemForElement(ev.target);
    let entityId;
    if (!item && !this.groupEntity) {
      return;
    }
    ev.stopPropagation();

    if (item) {
      entityId = item.entity_id;
    } else {
      entityId = this.groupEntity.entity_id;
    }
    this.fire("hass-more-info", { entityId: entityId });
  }

  showGroupToggle(groupEntity, states) {
    if (
      !groupEntity ||
      !states ||
      groupEntity.attributes.control === "hidden" ||
      (groupEntity.state !== "on" && groupEntity.state !== "off")
    ) {
      return false;
    }

    // Only show if we can toggle 2+ entities in group
    let canToggleCount = 0;
    for (let i = 0; i < states.length; i++) {
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
}
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











/*
 * @appliesMixin LocalizeMixin
 */
class HaPersistentNotificationCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
        }
        ha-markdown {
          display: block;
          padding: 0 16px;
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }
        ha-markdown p:first-child {
          margin-top: 0;
        }
        ha-markdown p:last-child {
          margin-bottom: 0;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img {
          max-width: 100%;
        }
        mwc-button {
          margin: 8px;
        }
      </style>

      <ha-card header="[[computeTitle(stateObj)]]">
        <ha-markdown content="[[stateObj.attributes.message]]"></ha-markdown>
        <mwc-button on-click="dismissTap"
          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button
        >
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
    };
  }

  computeTitle(stateObj) {
    return stateObj.attributes.title || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj);
  }

  dismissTap(ev) {
    ev.preventDefault();
    this.hass.callService("persistent_notification", "dismiss", {
      notification_id: Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__["computeObjectId"])(this.stateObj.entity_id),
    });
  }
}
customElements.define(
  "ha-persistent_notification-card",
  HaPersistentNotificationCard
);


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









class HaPlantCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .banner {
          display: flex;
          align-items: flex-end;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          padding-top: 12px;
        }
        .has-plant-image .banner {
          padding-top: 30%;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          padding: 8px 16px;
        }
        .has-plant-image .header {
          font-size: 16px;
          font-weight: 500;
          line-height: 16px;
          padding: 16px;
          color: white;
          width: 100%;
          background: rgba(0, 0, 0, var(--dark-secondary-opacity));
        }
        .content {
          display: flex;
          justify-content: space-between;
          padding: 16px 32px 24px 32px;
        }
        .has-plant-image .content {
          padding-bottom: 16px;
        }
        ha-icon {
          color: var(--paper-item-icon-color);
          margin-bottom: 8px;
        }
        .attributes {
          cursor: pointer;
        }
        .attributes div {
          text-align: center;
        }
        .problem {
          color: var(--google-red-500);
          font-weight: bold;
        }
        .uom {
          color: var(--secondary-text-color);
        }
      </style>

      <ha-card
        class$="[[computeImageClass(stateObj.attributes.entity_picture)]]"
      >
        <div
          class="banner"
          style="background-image:url([[stateObj.attributes.entity_picture]])"
        >
          <div class="header">[[computeTitle(stateObj)]]</div>
        </div>
        <div class="content">
          <template
            is="dom-repeat"
            items="[[computeAttributes(stateObj.attributes)]]"
          >
            <div class="attributes" on-click="attributeClicked">
              <div>
                <ha-icon
                  icon="[[computeIcon(item, stateObj.attributes.battery)]]"
                ></ha-icon>
              </div>
              <div
                class$="[[computeAttributeClass(stateObj.attributes.problem, item)]]"
              >
                [[computeValue(stateObj.attributes, item)]]
              </div>
              <div class="uom">
                [[computeUom(stateObj.attributes.unit_of_measurement_dict,
                item)]]
              </div>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      config: Object,
    };
  }

  constructor() {
    super();
    this.sensors = {
      moisture: "hass:water",
      temperature: "hass:thermometer",
      brightness: "hass:white-balance-sunny",
      conductivity: "hass:emoticon-poop",
      battery: "hass:battery",
    };
  }

  computeTitle(stateObj) {
    return (this.config && this.config.name) || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
  }

  computeAttributes(data) {
    return Object.keys(this.sensors).filter((key) => key in data);
  }

  computeIcon(attr, batLvl) {
    const icon = this.sensors[attr];
    if (attr === "battery") {
      if (batLvl <= 5) {
        return `${icon}-alert`;
      }
      if (batLvl < 95) {
        return `${icon}-${Math.round(batLvl / 10 - 0.01) * 10}`;
      }
    }
    return icon;
  }

  computeValue(attributes, attr) {
    return attributes[attr];
  }

  computeUom(dict, attr) {
    return dict[attr] || "";
  }

  computeAttributeClass(problem, attr) {
    return problem.indexOf(attr) === -1 ? "" : "problem";
  }

  computeImageClass(entityPicture) {
    return entityPicture ? "has-plant-image" : "";
  }

  attributeClicked(ev) {
    this.fire("hass-more-info", {
      entityId: this.stateObj.attributes.sensors[ev.model.item],
    });
  }
}

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












/*
 * @appliesMixin LocalizeMixin
 */
class HaWeatherCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          cursor: pointer;
        }

        .content {
          padding: 0 20px 20px;
        }

        ha-icon {
          color: var(--paper-item-icon-color);
        }

        .header {
          font-family: var(--paper-font-headline_-_font-family);
          -webkit-font-smoothing: var(
            --paper-font-headline_-_-webkit-font-smoothing
          );
          font-size: var(--paper-font-headline_-_font-size);
          font-weight: var(--paper-font-headline_-_font-weight);
          letter-spacing: var(--paper-font-headline_-_letter-spacing);
          line-height: var(--paper-font-headline_-_line-height);
          text-rendering: var(
            --paper-font-common-expensive-kerning_-_text-rendering
          );
          opacity: var(--dark-primary-opacity);
          padding: 24px 16px 16px;
          display: flex;
          align-items: baseline;
        }

        .name {
          margin-left: 16px;
          font-size: 16px;
          color: var(--secondary-text-color);
        }

        :host([rtl]) .name {
          margin-left: 0px;
          margin-right: 16px;
        }

        .now {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .main {
          display: flex;
          align-items: center;
          margin-right: 32px;
        }

        :host([rtl]) .main {
          margin-right: 0px;
        }

        .main ha-icon {
          --iron-icon-height: 72px;
          --iron-icon-width: 72px;
          margin-right: 8px;
        }

        :host([rtl]) .main ha-icon {
          margin-right: 0px;
        }

        .main .temp {
          font-size: 52px;
          line-height: 1em;
          position: relative;
        }

        :host([rtl]) .main .temp {
          direction: ltr;
          margin-right: 28px;
        }

        .main .temp span {
          font-size: 24px;
          line-height: 1em;
          position: absolute;
          top: 4px;
        }

        .measurand {
          display: inline-block;
        }

        :host([rtl]) .measurand {
          direction: ltr;
        }

        .forecast {
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
        }

        .forecast div {
          flex: 0 0 auto;
          text-align: center;
        }

        .forecast .icon {
          margin: 4px 0;
          text-align: center;
        }

        :host([rtl]) .forecast .temp {
          direction: ltr;
        }

        .weekday {
          font-weight: bold;
        }

        .attributes,
        .templow,
        .precipitation {
          color: var(--secondary-text-color);
        }

        :host([rtl]) .precipitation {
          direction: ltr;
        }
      </style>
      <ha-card>
        <div class="header">
          [[computeState(stateObj.state, localize)]]
          <div class="name">[[computeName(stateObj)]]</div>
        </div>
        <div class="content">
          <div class="now">
            <div class="main">
              <template is="dom-if" if="[[showWeatherIcon(stateObj.state)]]">
                <ha-icon icon="[[getWeatherIcon(stateObj.state)]]"></ha-icon>
              </template>
              <div class="temp">
                [[stateObj.attributes.temperature]]<span
                  >[[getUnit('temperature')]]</span
                >
              </div>
            </div>
            <div class="attributes">
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.pressure)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.air_pressure')]]:
                  <span class="measurand">
                    [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
                  </span>
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.humidity)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.humidity')]]:
                  <span class="measurand"
                    >[[stateObj.attributes.humidity]] %</span
                  >
                </div>
              </template>
              <template
                is="dom-if"
                if="[[_showValue(stateObj.attributes.wind_speed)]]"
              >
                <div>
                  [[localize('ui.card.weather.attributes.wind_speed')]]:
                  <span class="measurand">
                    [[getWindSpeed(stateObj.attributes.wind_speed)]]
                  </span>
                  [[getWindBearing(stateObj.attributes.wind_bearing, localize)]]
                </div>
              </template>
            </div>
          </div>
          <template is="dom-if" if="[[forecast]]">
            <div class="forecast">
              <template is="dom-repeat" items="[[forecast]]">
                <div>
                  <div class="weekday">
                    [[computeDate(item.datetime)]]<br />
                    <template is="dom-if" if="[[!_showValue(item.templow)]]">
                      [[computeTime(item.datetime)]]
                    </template>
                  </div>
                  <template is="dom-if" if="[[_showValue(item.condition)]]">
                    <div class="icon">
                      <ha-icon
                        icon="[[getWeatherIcon(item.condition)]]"
                      ></ha-icon>
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.temperature)]]">
                    <div class="temp">
                      [[item.temperature]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.templow)]]">
                    <div class="templow">
                      [[item.templow]] [[getUnit('temperature')]]
                    </div>
                  </template>
                  <template is="dom-if" if="[[_showValue(item.precipitation)]]">
                    <div class="precipitation">
                      [[item.precipitation]] [[getUnit('precipitation')]]
                    </div>
                  </template>
                </div>
              </template>
            </div>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      config: Object,
      stateObj: Object,
      forecast: {
        type: Array,
        computed: "computeForecast(stateObj.attributes.forecast)",
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)",
      },
    };
  }

  constructor() {
    super();
    this.cardinalDirections = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
      "N",
    ];
    this.weatherIcons = {
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
      "windy-variant": "hass:weather-windy-variant",
    };
  }

  ready() {
    this.addEventListener("click", this._onClick);
    super.ready();
  }

  _onClick() {
    this.fire("hass-more-info", { entityId: this.stateObj.entity_id });
  }

  computeForecast(forecast) {
    return forecast && forecast.slice(0, 5);
  }

  getUnit(measure) {
    const lengthUnit = this.hass.config.unit_system.length || "";
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

  computeState(state, localize) {
    return localize(`state.weather.${state}`) || state;
  }

  computeName(stateObj) {
    return (this.config && this.config.name) || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(stateObj);
  }

  showWeatherIcon(condition) {
    return condition in this.weatherIcons;
  }

  getWeatherIcon(condition) {
    return this.weatherIcons[condition];
  }

  windBearingToText(degree) {
    const degreenum = parseInt(degree);
    if (isFinite(degreenum)) {
      return this.cardinalDirections[(((degreenum + 11.25) / 22.5) | 0) % 16];
    }
    return degree;
  }

  getWindSpeed(speed) {
    return `${speed} ${this.getUnit("length")}/h`;
  }

  getWindBearing(bearing, localize) {
    if (bearing != null) {
      const cardinalDirection = this.windBearingToText(bearing);
      return `(${localize(
        `ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`
      ) || cardinalDirection})`;
    }
    return ``;
  }

  _showValue(item) {
    return typeof item !== "undefined" && item !== null;
  }

  computeDate(data) {
    const date = new Date(data);
    return date.toLocaleDateString(this.hass.language, { weekday: "short" });
  }

  computeTime(data) {
    const date = new Date(data);
    return date.toLocaleTimeString(this.hass.language, { hour: "numeric" });
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
  }
}
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














// mapping domain to size of the card.
const DOMAINS_WITH_CARD = {
  camera: 4,
  history_graph: 4,
  media_player: 3,
  persistent_notification: 0,
  plant: 3,
  weather: 4,
};

// 4 types:
// badges: 0 .. 10
// before groups < 0
// groups: X
// rest: 100

const PRIORITY = {
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
  mailbox: 8,
};

const getPriority = (domain) => (domain in PRIORITY ? PRIORITY[domain] : 100);

const sortPriority = (domainA, domainB) => domainA.priority - domainB.priority;

const entitySortBy = (entityA, entityB) => {
  const nameA = (
    entityA.attributes.friendly_name || entityA.entity_id
  ).toLowerCase();
  const nameB = (
    entityB.attributes.friendly_name || entityB.entity_id
  ).toLowerCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const iterateDomainSorted = (collection, func) => {
  Object.keys(collection)
    .map((key) => collection[key])
    .sort(sortPriority)
    .forEach((domain) => {
      domain.states.sort(entitySortBy);
      func(domain);
    });
};

class HaCards extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex iron-flex-factors"></style>
      <style>
        :host {
          display: block;
          padding: 4px 4px 0;
          transform: translateZ(0);
          position: relative;
        }

        .badges {
          font-size: 85%;
          text-align: center;
          padding-top: 16px;
        }

        .column {
          max-width: 500px;
          overflow-x: hidden;
        }

        ha-card-chooser {
          display: block;
          margin: 4px 4px 8px;
        }

        @media (max-width: 500px) {
          :host {
            padding-left: 0;
            padding-right: 0;
          }

          ha-card-chooser {
            margin-left: 0;
            margin-right: 0;
          }
        }

        @media (max-width: 599px) {
          .column {
            max-width: 600px;
          }
        }
      </style>

      <div id="main">
        <template is="dom-if" if="[[cards.badges.length]]">
          <div class="badges">
            <template is="dom-if" if="[[cards.demo]]">
              <ha-demo-badge></ha-demo-badge>
            </template>

            <ha-badges-card
              states="[[cards.badges]]"
              hass="[[hass]]"
            ></ha-badges-card>
          </div>
        </template>

        <div class="horizontal layout center-justified">
          <template is="dom-repeat" items="[[cards.columns]]" as="column">
            <div class="column flex-1">
              <template is="dom-repeat" items="[[column]]" as="card">
                <ha-card-chooser card-data="[[card]]"></ha-card-chooser>
              </template>
            </div>
          </template>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,

      columns: {
        type: Number,
        value: 2,
      },

      states: Object,

      viewVisible: {
        type: Boolean,
        value: false,
      },

      orderedGroupEntities: Array,

      cards: Object,
    };
  }

  static get observers() {
    return ["updateCards(columns, states, viewVisible, orderedGroupEntities)"];
  }

  updateCards(columns, states, viewVisible, orderedGroupEntities) {
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
    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(
      this._debouncer,
      _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(10),
      () => {
        // Things might have changed since it got scheduled.
        if (this.viewVisible) {
          this.cards = this.computeCards(columns, states, orderedGroupEntities);
        }
      }
    );
  }

  emptyCards() {
    return {
      demo: false,
      badges: [],
      columns: [],
    };
  }

  computeCards(columns, states, orderedGroupEntities) {
    const hass = this.hass;

    const cards = this.emptyCards();

    const entityCount = [];
    for (let i = 0; i < columns; i++) {
      cards.columns.push([]);
      entityCount.push(0);
    }

    // Find column with < 5 entities, else column with lowest count
    function getIndex(size) {
      let minIndex = 0;
      for (let i = 0; i < entityCount.length; i++) {
        if (entityCount[i] < 5) {
          minIndex = i;
          break;
        }
        if (entityCount[i] < entityCount[minIndex]) {
          minIndex = i;
        }
      }

      entityCount[minIndex] += size;

      return minIndex;
    }

    function addEntitiesCard(name, entities, groupEntity) {
      if (entities.length === 0) return;

      const owncard = [];
      const other = [];

      let size = 0;

      entities.forEach((entity) => {
        const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(entity);

        if (
          domain in DOMAINS_WITH_CARD &&
          !entity.attributes.custom_ui_state_card
        ) {
          owncard.push(entity);
          size += DOMAINS_WITH_CARD[domain];
        } else {
          other.push(entity);
          size++;
        }
      });

      // Add 1 to the size if we're rendering entities card
      size += other.length > 0;

      const curIndex = getIndex(size);

      if (other.length > 0) {
        cards.columns[curIndex].push({
          hass: hass,
          cardType: "entities",
          states: other,
          groupEntity: groupEntity || false,
        });
      }

      owncard.forEach((entity) => {
        cards.columns[curIndex].push({
          hass: hass,
          cardType: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(entity),
          stateObj: entity,
        });
      });
    }

    const splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__["splitByGroups"])(states);
    if (orderedGroupEntities) {
      splitted.groups.sort(
        (gr1, gr2) =>
          orderedGroupEntities[gr1.entity_id] -
          orderedGroupEntities[gr2.entity_id]
      );
    } else {
      splitted.groups.sort(
        (gr1, gr2) => gr1.attributes.order - gr2.attributes.order
      );
    }

    const badgesColl = {};
    const beforeGroupColl = {};
    const afterGroupedColl = {};

    Object.keys(splitted.ungrouped).forEach((key) => {
      const state = splitted.ungrouped[key];
      const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["computeStateDomain"])(state);

      if (domain === "a") {
        cards.demo = true;
        return;
      }

      const priority = getPriority(domain);
      let coll;

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
          states: [],
        };
      }

      coll[domain].states.push(state);
    });

    if (orderedGroupEntities) {
      Object.keys(badgesColl)
        .map((key) => badgesColl[key])
        .forEach((domain) => {
          cards.badges.push.apply(cards.badges, domain.states);
        });

      cards.badges.sort(
        (e1, e2) =>
          orderedGroupEntities[e1.entity_id] -
          orderedGroupEntities[e2.entity_id]
      );
    } else {
      iterateDomainSorted(badgesColl, (domain) => {
        cards.badges.push.apply(cards.badges, domain.states);
      });
    }

    iterateDomainSorted(beforeGroupColl, (domain) => {
      addEntitiesCard(domain.domain, domain.states);
    });

    splitted.groups.forEach((groupState) => {
      const entities = Object(_common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__["getGroupEntities"])(states, groupState);
      addEntitiesCard(
        groupState.entity_id,
        Object.keys(entities).map((key) => entities[key]),
        groupState
      );
    });

    iterateDomainSorted(afterGroupedColl, (domain) => {
      addEntitiesCard(domain.domain, domain.states);
    });

    // Remove empty columns
    cards.columns = cards.columns.filter((val) => val.length > 0);

    return cards;
  }
}
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





class HaDemoBadge extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          --ha-label-badge-color: #dac90d;
        }
      </style>

      <ha-label-badge
        icon="hass:emoticon"
        label="Demo"
        description=""
      ></ha-label-badge>
    `;
  }
}

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



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      navigate(...args) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"])(this, ...args);
      }
    }
));


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


























const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
const ALWAYS_SHOW_DOMAIN = ["persistent_notification", "configurator"];

/*
 * @appliesMixin EventsMixin
 * @appliesMixin NavigateMixin
 */
class PartialCards extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__["EventsMixin"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex iron-positioning ha-style">
        :host {
          -ms-user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
        }

        ha-app-layout {
          min-height: 100%;
          background-color: var(--secondary-background-color, #e5e5e5);
        }

        iron-pages {
          height: 100%;
        }

        paper-tabs {
          margin-left: 12px;
          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);
          text-transform: uppercase;
        }
      </style>
      <app-route
        route="{{route}}"
        pattern="/:view"
        data="{{routeData}}"
        active="{{routeMatch}}"
      ></app-route>
      <ha-app-layout id="layout">
        <app-header effects="waterfall" condenses="" fixed="" slot="header">
          <app-toolbar>
            <ha-menu-button
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-menu-button>
            <div main-title="">
              [[computeTitle(views, defaultView, locationName)]]
            </div>
            <ha-start-voice-button hass="[[hass]]"></ha-start-voice-button>
          </app-toolbar>

          <div sticky="" hidden$="[[areTabsHidden(views, showTabs)]]">
            <paper-tabs
              scrollable=""
              selected="[[currentView]]"
              attr-for-selected="data-entity"
              on-iron-activate="handleViewSelected"
            >
              <paper-tab data-entity="" on-click="scrollToTop">
                <template is="dom-if" if="[[!defaultView]]">
                  Home
                </template>
                <template is="dom-if" if="[[defaultView]]">
                  <template is="dom-if" if="[[defaultView.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(defaultView)]]"
                      icon="[[defaultView.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!defaultView.attributes.icon]]">
                    [[_computeStateName(defaultView)]]
                  </template>
                </template>
              </paper-tab>
              <template is="dom-repeat" items="[[views]]">
                <paper-tab
                  data-entity$="[[item.entity_id]]"
                  on-click="scrollToTop"
                >
                  <template is="dom-if" if="[[item.attributes.icon]]">
                    <ha-icon
                      title$="[[_computeStateName(item)]]"
                      icon="[[item.attributes.icon]]"
                    ></ha-icon>
                  </template>
                  <template is="dom-if" if="[[!item.attributes.icon]]">
                    [[_computeStateName(item)]]
                  </template>
                </paper-tab>
              </template>
            </paper-tabs>
          </div>
        </app-header>

        <iron-pages
          attr-for-selected="data-view"
          selected="[[currentView]]"
          selected-attribute="view-visible"
        >
          <ha-cards
            data-view=""
            states="[[viewStates]]"
            columns="[[_columns]]"
            hass="[[hass]]"
            panel-visible="[[panelVisible]]"
            ordered-group-entities="[[orderedGroupEntities]]"
          ></ha-cards>

          <template is="dom-repeat" items="[[views]]">
            <ha-cards
              data-view$="[[item.entity_id]]"
              states="[[viewStates]]"
              columns="[[_columns]]"
              hass="[[hass]]"
              panel-visible="[[panelVisible]]"
              ordered-group-entities="[[orderedGroupEntities]]"
            ></ha-cards>
          </template>
        </iron-pages>
      </ha-app-layout>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        value: null,
        observer: "hassChanged",
      },

      narrow: {
        type: Boolean,
        value: false,
      },

      panelVisible: {
        type: Boolean,
        value: false,
      },

      route: Object,
      routeData: Object,
      routeMatch: Boolean,

      _columns: {
        type: Number,
        value: 1,
      },

      locationName: {
        type: String,
        value: "",
        computed: "_computeLocationName(hass)",
      },

      currentView: {
        type: String,
        computed: "_computeCurrentView(hass, routeMatch, routeData)",
      },

      views: {
        type: Array,
      },

      defaultView: {
        type: Object,
      },

      viewStates: {
        type: Object,
        computed: "computeViewStates(currentView, hass, defaultView)",
      },

      orderedGroupEntities: {
        type: Array,
        computed: "computeOrderedGroupEntities(currentView, hass, defaultView)",
      },

      showTabs: {
        type: Boolean,
        value: true,
      },
    };
  }

  static get observers() {
    return ["_updateColumns(narrow, hass.dockedSidebar)"];
  }

  ready() {
    this._updateColumns = this._updateColumns.bind(this);
    this.mqls = [300, 600, 900, 1200].map((width) =>
      matchMedia(`(min-width: ${width}px)`)
    );
    super.ready();
  }

  connectedCallback() {
    super.connectedCallback();
    this.mqls.forEach((mql) => mql.addListener(this._updateColumns));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.mqls.forEach((mql) => mql.removeListener(this._updateColumns));
  }

  _updateColumns() {
    const matchColumns = this.mqls.reduce((cols, mql) => cols + mql.matches, 0);
    // Do -1 column if the menu is docked and open
    this._columns = Math.max(
      1,
      matchColumns - (!this.narrow && this.hass.dockedSidebar === "docked")
    );
  }

  areTabsHidden(views, showTabs) {
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
  scrollToTop() {
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
        scroller.scrollTop = easingFn(
          elapsedTime,
          currentScrollTop,
          deltaScrollTop,
          duration
        );
        requestAnimationFrame(updateFrame.bind(this));
      }
    }.call(this));
  }

  handleViewSelected(ev) {
    const view = ev.detail.item.getAttribute("data-entity") || null;

    if (view !== this.currentView) {
      let path = "/states";
      if (view) {
        path += "/" + view;
      }
      this.navigate(path);
    }
  }

  _computeCurrentView(hass, routeMatch, routeData) {
    if (!routeMatch) return "";
    if (
      !hass.states[routeData.view] ||
      !hass.states[routeData.view].attributes.view
    ) {
      return "";
    }
    return routeData.view;
  }

  computeTitle(views, defaultView, locationName) {
    return (views &&
      views.length > 0 &&
      !defaultView &&
      locationName === "Home") ||
      !locationName
      ? "牧养犬"
      : locationName;
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__["computeStateName"])(stateObj);
  }

  _computeLocationName(hass) {
    return Object(_common_config_location_name__WEBPACK_IMPORTED_MODULE_19__["default"])(hass);
  }

  hassChanged(hass) {
    if (!hass) return;
    const views = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__["extractViews"])(hass.states);
    let defaultView = null;
    // If default view present, it's in first index.
    if (views.length > 0 && views[0].entity_id === DEFAULT_VIEW_ENTITY_ID) {
      defaultView = views.shift();
    }

    this.setProperties({ views, defaultView });
  }

  isView(currentView, defaultView) {
    return (
      (currentView || defaultView) &&
      this.hass.states[currentView || DEFAULT_VIEW_ENTITY_ID]
    );
  }

  _defaultViewFilter(hass, entityId) {
    // Filter out hidden
    return !hass.states[entityId].attributes.hidden;
  }

  _computeDefaultViewStates(hass, entityIds) {
    const states = {};
    entityIds
      .filter(this._defaultViewFilter.bind(null, hass))
      .forEach((entityId) => {
        states[entityId] = hass.states[entityId];
      });
    return states;
  }

  /*
    Compute the states to show for current view.

    Will make sure we always show entities from ALWAYS_SHOW_DOMAINS domains.
  */
  computeViewStates(currentView, hass, defaultView) {
    const entityIds = Object.keys(hass.states);

    // If we base off all entities, only have to filter out hidden
    if (!this.isView(currentView, defaultView)) {
      return this._computeDefaultViewStates(hass, entityIds);
    }

    let states;
    if (currentView) {
      states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["getViewEntities"])(hass.states, hass.states[currentView]);
    } else {
      states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["getViewEntities"])(
        hass.states,
        hass.states[DEFAULT_VIEW_ENTITY_ID]
      );
    }

    // Make sure certain domains are always shown.
    entityIds.forEach((entityId) => {
      const state = hass.states[entityId];

      if (ALWAYS_SHOW_DOMAIN.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__["computeStateDomain"])(state))) {
        states[entityId] = state;
      }
    });

    return states;
  }

  /*
    Compute the ordered list of groups for this view
  */
  computeOrderedGroupEntities(currentView, hass, defaultView) {
    if (!this.isView(currentView, defaultView)) {
      return null;
    }

    var orderedGroupEntities = {};
    var entitiesList =
      hass.states[currentView || DEFAULT_VIEW_ENTITY_ID].attributes.entity_id;

    for (var i = 0; i < entitiesList.length; i++) {
      orderedGroupEntities[entitiesList[i]] = i;
    }

    return orderedGroupEntities;
  }
}

customElements.define("ha-panel-states", PartialCards);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NhcmRzL2hhLWJhZGdlcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1jYW1lcmEtY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FyZHMvaGEtY2FyZC1jaG9vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1lbnRpdGllcy1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1wbGFudC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS13ZWF0aGVyLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25maWcvbG9jYXRpb25fbmFtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1kZW1vLWJhZGdlLmpzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvbmF2aWdhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9zdGF0ZXMvaGEtcGFuZWwtc3RhdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L2hhLXN0YXRlLWxhYmVsLWJhZGdlXCI7XG5cbmNsYXNzIEhhQmFkZ2VzQ2FyZCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgaGEtc3RhdGUtbGFiZWwtYmFkZ2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1oYS1zdGF0ZS1sYWJlbC1iYWRnZS1tYXJnaW4tYm90dG9tLCAxNnB4KTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc3RhdGVzXV1cIj5cbiAgICAgICAgPGhhLXN0YXRlLWxhYmVsLWJhZGdlXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZT1cIltbaXRlbV1dXCJcbiAgICAgICAgPjwvaGEtc3RhdGUtbGFiZWwtYmFkZ2U+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlczogQXJyYXksXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtYmFkZ2VzLWNhcmRcIiwgSGFCYWRnZXNDYXJkKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXN0eWxlcy9lbGVtZW50LXN0eWxlcy9wYXBlci1tYXRlcmlhbC1zdHlsZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGZldGNoVGh1bWJuYWlsVXJsV2l0aENhY2hlIH0gZnJvbSBcIi4uL2RhdGEvY2FtZXJhXCI7XG5cbmNvbnN0IFVQREFURV9JTlRFUlZBTCA9IDEwMDAwOyAvLyBtc1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNhbWVyYUNhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1tYXRlcmlhbC1zdHlsZXNcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0xO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBmb250LXNpemU6IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbWVyYS1mZWVkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXB0aW9uIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjYW1lcmFGZWVkU3JjXV1cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIltbY2FtZXJhRmVlZFNyY11dXCJcbiAgICAgICAgICBjbGFzcz1cImNhbWVyYS1mZWVkXCJcbiAgICAgICAgICBhbHQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICBvbi1sb2FkPVwiX2ltYWdlTG9hZGVkXCJcbiAgICAgICAgICBvbi1lcnJvcj1cIl9pbWFnZUVycm9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FwdGlvblwiPlxuICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKV1dXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaW1hZ2VMb2FkZWRdXVwiPlxuICAgICAgICAgIChbW2xvY2FsaXplKCd1aS5jYXJkLmNhbWVyYS5ub3RfYXZhaWxhYmxlJyldXSlcbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwidXBkYXRlQ2FtZXJhRmVlZFNyY1wiLFxuICAgICAgfSxcbiAgICAgIGNhbWVyYUZlZWRTcmM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBpbWFnZUxvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jYXJkVGFwcGVkKCkpO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy51cGRhdGVDYW1lcmFGZWVkU3JjKCksIFVQREFURV9JTlRFUlZBTCk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gIH1cblxuICBfaW1hZ2VMb2FkZWQoKSB7XG4gICAgdGhpcy5pbWFnZUxvYWRlZCA9IHRydWU7XG4gIH1cblxuICBfaW1hZ2VFcnJvcigpIHtcbiAgICB0aGlzLmltYWdlTG9hZGVkID0gZmFsc2U7XG4gIH1cblxuICBjYXJkVGFwcGVkKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlQ2FtZXJhRmVlZFNyYygpIHtcbiAgICB0aGlzLmNhbWVyYUZlZWRTcmMgPSBhd2FpdCBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZShcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIHRoaXMuc3RhdGVPYmouZW50aXR5X2lkXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jYW1lcmEtY2FyZFwiLCBIYUNhbWVyYUNhcmQpO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1jYW1lcmEtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1lbnRpdGllcy1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLWhpc3RvcnlfZ3JhcGgtY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1tZWRpYV9wbGF5ZXItY2FyZFwiO1xuaW1wb3J0IFwiLi9oYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkXCI7XG5pbXBvcnQgXCIuL2hhLXBsYW50LWNhcmRcIjtcbmltcG9ydCBcIi4vaGEtd2VhdGhlci1jYXJkXCI7XG5cbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcblxuY2xhc3MgSGFDYXJkQ2hvb3NlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYXJkRGF0YToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImNhcmREYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX3VwZGF0ZUNhcmQobmV3RGF0YSkge1xuICAgIGR5bmFtaWNDb250ZW50VXBkYXRlcihcbiAgICAgIHRoaXMsXG4gICAgICBcIkhBLVwiICsgbmV3RGF0YS5jYXJkVHlwZS50b1VwcGVyQ2FzZSgpICsgXCItQ0FSRFwiLFxuICAgICAgbmV3RGF0YVxuICAgICk7XG4gIH1cblxuICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICB0aGlzLl91cGRhdGVzQWxsb3dlZCA9IGZhbHNlO1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGlmICghZW50cmllcy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGlmIChlbnRyaWVzWzBdLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICAgICAgaWYgKHRoaXMuX2RldGFjaGVkQ2hpbGQpIHtcbiAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2RldGFjaGVkQ2hpbGQpO1xuICAgICAgICAgIHRoaXMuX2RldGFjaGVkQ2hpbGQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNhcmQodGhpcy5jYXJkRGF0YSk7IC8vIERvbid0IHVzZSAnbmV3RGF0YScgYXMgaXQgbWlnaHQgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICB0aGlzLl91cGRhdGVzQWxsb3dlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZXQgdGhlIGNhcmQgdG8gYmUgNDhweCBoaWdoLiBPdGhlcndpc2UgaWYgdGhlIGNhcmQgaXMga2VwdCBhcyAwcHggaGVpZ2h0IHRoZW4gYWxsXG4gICAgICAgIC8vIGZvbGxvd2luZyBjYXJkcyB3b3VsZCB0cmlnZ2VyIHRoZSBvYnNlcnZlciBhdCBvbmNlLlxuICAgICAgICBjb25zdCBvZmZzZXRIZWlnaHQgPSB0aGlzLm9mZnNldEhlaWdodDtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHtvZmZzZXRIZWlnaHQgfHwgNDh9cHhgO1xuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICB0aGlzLl9kZXRhY2hlZENoaWxkID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRlc0FsbG93ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcyk7XG4gIH1cblxuICBjYXJkRGF0YUNoYW5nZWQobmV3RGF0YSkge1xuICAgIGlmICghbmV3RGF0YSkgcmV0dXJuO1xuICAgIC8vIGhhLWVudGl0aWVzLWNhcmQgaXMgZXhlbXB0IGZyb20gb2JzZXJ2ZXIgYXMgaXQgZG9lc24ndCBsb2FkIGhlYXZ5IHJlc291cmNlcy5cbiAgICAvLyBhbmQgdXN1YWxseSBkb2Vzbid0IGxvYWQgZXh0ZXJuYWwgcmVzb3VyY2VzIChleGNlcHQgZm9yIGVudGl0eV9waWN0dXJlKS5cbiAgICBjb25zdCBlbGlnaWJsZVRvT2JzZXJ2ZXIgPVxuICAgICAgd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyICYmIG5ld0RhdGEuY2FyZFR5cGUgIT09IFwiZW50aXRpZXNcIjtcbiAgICBpZiAoIWVsaWdpYmxlVG9PYnNlcnZlcikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUodGhpcyk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgdGhpcy5fdXBkYXRlQ2FyZChuZXdEYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm9ic2VydmVyKSB7XG4gICAgICB0aGlzLmNyZWF0ZU9ic2VydmVyKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl91cGRhdGVzQWxsb3dlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQ2FyZChuZXdEYXRhKTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmQtY2hvb3NlclwiLCBIYUNhcmRDaG9vc2VyKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktdG9nZ2xlXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBzdGF0ZU1vcmVJbmZvVHlwZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N0YXRlX21vcmVfaW5mb190eXBlXCI7XG5pbXBvcnQgeyBjYW5Ub2dnbGVTdGF0ZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2Nhbl90b2dnbGVfc3RhdGVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgSGFFbnRpdGllc0NhcmQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0ZXMge1xuICAgICAgICAgIG1hcmdpbjogLTRweCAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgICAvKiBvdmVyd3JpdGluZyBsaW5lLWhlaWdodCArOCBiZWNhdXNlIGVudGl0eS10b2dnbGUgY2FuIGJlIDQwcHggaGVpZ2h0LFxuICAgICAgICAgICBjb21wZW5zYXRpbmcgdGhpcyB3aXRoIHJlZHVjZWQgcGFkZGluZyAqL1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAwIDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIGhhLWVudGl0eS10b2dnbGUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5tb3JlLWluZm8ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGhhLWNhcmQ+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1t0aXRsZV1dXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3MkPVwiW1tjb21wdXRlVGl0bGVDbGFzcyhncm91cEVudGl0eSldXVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImVudGl0eVRhcHBlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbmFtZVwiPltbdGl0bGVdXTwvZGl2PlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3Nob3dHcm91cFRvZ2dsZShncm91cEVudGl0eSwgc3RhdGVzKV1dXCI+XG4gICAgICAgICAgICAgIDxoYS1lbnRpdHktdG9nZ2xlXG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW2dyb3VwRW50aXR5XV1cIlxuICAgICAgICAgICAgICA+PC9oYS1lbnRpdHktdG9nZ2xlPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlc1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZXNdXVwiXG4gICAgICAgICAgICBvbi1kb20tY2hhbmdlPVwiYWRkVGFwRXZlbnRzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZVN0YXRlQ2xhc3MoaXRlbSldXVwiPlxuICAgICAgICAgICAgICA8c3RhdGUtY2FyZC1jb250ZW50XG4gICAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN0YXRlLWNhcmRcIlxuICAgICAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbaXRlbV1dXCJcbiAgICAgICAgICAgICAgPjwvc3RhdGUtY2FyZC1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVzOiBBcnJheSxcbiAgICAgIGdyb3VwRW50aXR5OiBPYmplY3QsXG4gICAgICB0aXRsZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVUaXRsZShzdGF0ZXMsIGdyb3VwRW50aXR5LCBsb2NhbGl6ZSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gV2UgbmVlZCB0byBzYXZlIGEgc2luZ2xlIGJvdW5kIGZ1bmN0aW9uIHJlZmVyZW5jZSB0byBlbnN1cmUgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgLy8gY2FuIGlkZW50aWZ5IGl0IHByb3Blcmx5LlxuICAgIHRoaXMuZW50aXR5VGFwcGVkID0gdGhpcy5lbnRpdHlUYXBwZWQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXB1dGVUaXRsZShzdGF0ZXMsIGdyb3VwRW50aXR5LCBsb2NhbGl6ZSkge1xuICAgIGlmIChncm91cEVudGl0eSkge1xuICAgICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoZ3JvdXBFbnRpdHkpLnRyaW0oKTtcbiAgICB9XG4gICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlc1swXSk7XG4gICAgcmV0dXJuIChcbiAgICAgIChsb2NhbGl6ZSAmJiBsb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApKSB8fCBkb21haW4ucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZVRpdGxlQ2xhc3MoZ3JvdXBFbnRpdHkpIHtcbiAgICBsZXQgY2xhc3NlcyA9IFwiaGVhZGVyIGhvcml6b250YWwgbGF5b3V0IGNlbnRlciBcIjtcbiAgICBpZiAoZ3JvdXBFbnRpdHkpIHtcbiAgICAgIGNsYXNzZXMgKz0gXCJtb3JlLWluZm9cIjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH1cblxuICBjb21wdXRlU3RhdGVDbGFzcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU1vcmVJbmZvVHlwZShzdGF0ZU9iaikgIT09IFwiaGlkZGVuXCJcbiAgICAgID8gXCJzdGF0ZSBtb3JlLWluZm9cIlxuICAgICAgOiBcInN0YXRlXCI7XG4gIH1cblxuICBhZGRUYXBFdmVudHMoKSB7XG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5zdGF0ZVwiKTtcbiAgICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICBpZiAoY2FyZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb3JlLWluZm9cIikpIHtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5lbnRpdHlUYXBwZWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5lbnRpdHlUYXBwZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZW50aXR5VGFwcGVkKGV2KSB7XG4gICAgY29uc3QgaXRlbSA9IHRoaXMucm9vdFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCJkb20tcmVwZWF0XCIpXG4gICAgICAuaXRlbUZvckVsZW1lbnQoZXYudGFyZ2V0KTtcbiAgICBsZXQgZW50aXR5SWQ7XG4gICAgaWYgKCFpdGVtICYmICF0aGlzLmdyb3VwRW50aXR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGVudGl0eUlkID0gaXRlbS5lbnRpdHlfaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGl0eUlkID0gdGhpcy5ncm91cEVudGl0eS5lbnRpdHlfaWQ7XG4gICAgfVxuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IGVudGl0eUlkIH0pO1xuICB9XG5cbiAgc2hvd0dyb3VwVG9nZ2xlKGdyb3VwRW50aXR5LCBzdGF0ZXMpIHtcbiAgICBpZiAoXG4gICAgICAhZ3JvdXBFbnRpdHkgfHxcbiAgICAgICFzdGF0ZXMgfHxcbiAgICAgIGdyb3VwRW50aXR5LmF0dHJpYnV0ZXMuY29udHJvbCA9PT0gXCJoaWRkZW5cIiB8fFxuICAgICAgKGdyb3VwRW50aXR5LnN0YXRlICE9PSBcIm9uXCIgJiYgZ3JvdXBFbnRpdHkuc3RhdGUgIT09IFwib2ZmXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gT25seSBzaG93IGlmIHdlIGNhbiB0b2dnbGUgMisgZW50aXRpZXMgaW4gZ3JvdXBcbiAgICBsZXQgY2FuVG9nZ2xlQ291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWNhblRvZ2dsZVN0YXRlKHRoaXMuaGFzcywgc3RhdGVzW2ldKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FuVG9nZ2xlQ291bnQrKztcblxuICAgICAgaWYgKGNhblRvZ2dsZUNvdW50ID4gMSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FuVG9nZ2xlQ291bnQgPiAxO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1lbnRpdGllcy1jYXJkXCIsIEhhRW50aXRpZXNDYXJkKTtcbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtbWFya2Rvd25cIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgY29tcHV0ZU9iamVjdElkIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWRcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVBlcnNpc3RlbnROb3RpZmljYXRpb25DYXJkIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogaW5pdGlhbDtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBpbml0aWFsO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBwOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8aGEtY2FyZCBoZWFkZXI9XCJbW2NvbXB1dGVUaXRsZShzdGF0ZU9iaildXVwiPlxuICAgICAgICA8aGEtbWFya2Rvd24gY29udGVudD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tZXNzYWdlXV1cIj48L2hhLW1hcmtkb3duPlxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImRpc21pc3NUYXBcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLnBlcnNpc3RlbnRfbm90aWZpY2F0aW9uLmRpc21pc3MnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvaGEtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlVGl0bGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy50aXRsZSB8fCBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc21pc3NUYXAoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsIFwiZGlzbWlzc1wiLCB7XG4gICAgICBub3RpZmljYXRpb25faWQ6IGNvbXB1dGVPYmplY3RJZCh0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCksXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJoYS1wZXJzaXN0ZW50X25vdGlmaWNhdGlvbi1jYXJkXCIsXG4gIEhhUGVyc2lzdGVudE5vdGlmaWNhdGlvbkNhcmRcbik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNsYXNzIEhhUGxhbnRDYXJkIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuaGFzLXBsYW50LWltYWdlIC5iYW5uZXIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1oZWFkbGluZTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuaGFzLXBsYW50LWltYWdlIC5oZWFkZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgdmFyKC0tZGFyay1zZWNvbmRhcnktb3BhY2l0eSkpO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHggMjRweCAzMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oYXMtcGxhbnQtaW1hZ2UgLmNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLWljb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRlcyB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hdHRyaWJ1dGVzIGRpdiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9ibGVtIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC51b20ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1jYXJkXG4gICAgICAgIGNsYXNzJD1cIltbY29tcHV0ZUltYWdlQ2xhc3Moc3RhdGVPYmouYXR0cmlidXRlcy5lbnRpdHlfcGljdHVyZSldXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImJhbm5lclwiXG4gICAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOnVybChbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZW50aXR5X3BpY3R1cmVdXSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPltbY29tcHV0ZVRpdGxlKHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgIGl0ZW1zPVwiW1tjb21wdXRlQXR0cmlidXRlcyhzdGF0ZU9iai5hdHRyaWJ1dGVzKV1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXR0cmlidXRlc1wiIG9uLWNsaWNrPVwiYXR0cmlidXRlQ2xpY2tlZFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlSWNvbihpdGVtLCBzdGF0ZU9iai5hdHRyaWJ1dGVzLmJhdHRlcnkpXV1cIlxuICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3MkPVwiW1tjb21wdXRlQXR0cmlidXRlQ2xhc3Moc3RhdGVPYmouYXR0cmlidXRlcy5wcm9ibGVtLCBpdGVtKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFtbY29tcHV0ZVZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMsIGl0ZW0pXV1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1b21cIj5cbiAgICAgICAgICAgICAgICBbW2NvbXB1dGVVb20oc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50X2RpY3QsXG4gICAgICAgICAgICAgICAgaXRlbSldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBjb25maWc6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbnNvcnMgPSB7XG4gICAgICBtb2lzdHVyZTogXCJoYXNzOndhdGVyXCIsXG4gICAgICB0ZW1wZXJhdHVyZTogXCJoYXNzOnRoZXJtb21ldGVyXCIsXG4gICAgICBicmlnaHRuZXNzOiBcImhhc3M6d2hpdGUtYmFsYW5jZS1zdW5ueVwiLFxuICAgICAgY29uZHVjdGl2aXR5OiBcImhhc3M6ZW1vdGljb24tcG9vcFwiLFxuICAgICAgYmF0dGVyeTogXCJoYXNzOmJhdHRlcnlcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVRpdGxlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5uYW1lKSB8fCBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zZW5zb3JzKS5maWx0ZXIoKGtleSkgPT4ga2V5IGluIGRhdGEpO1xuICB9XG5cbiAgY29tcHV0ZUljb24oYXR0ciwgYmF0THZsKSB7XG4gICAgY29uc3QgaWNvbiA9IHRoaXMuc2Vuc29yc1thdHRyXTtcbiAgICBpZiAoYXR0ciA9PT0gXCJiYXR0ZXJ5XCIpIHtcbiAgICAgIGlmIChiYXRMdmwgPD0gNSkge1xuICAgICAgICByZXR1cm4gYCR7aWNvbn0tYWxlcnRgO1xuICAgICAgfVxuICAgICAgaWYgKGJhdEx2bCA8IDk1KSB7XG4gICAgICAgIHJldHVybiBgJHtpY29ufS0ke01hdGgucm91bmQoYmF0THZsIC8gMTAgLSAwLjAxKSAqIDEwfWA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpY29uO1xuICB9XG5cbiAgY29tcHV0ZVZhbHVlKGF0dHJpYnV0ZXMsIGF0dHIpIHtcbiAgICByZXR1cm4gYXR0cmlidXRlc1thdHRyXTtcbiAgfVxuXG4gIGNvbXB1dGVVb20oZGljdCwgYXR0cikge1xuICAgIHJldHVybiBkaWN0W2F0dHJdIHx8IFwiXCI7XG4gIH1cblxuICBjb21wdXRlQXR0cmlidXRlQ2xhc3MocHJvYmxlbSwgYXR0cikge1xuICAgIHJldHVybiBwcm9ibGVtLmluZGV4T2YoYXR0cikgPT09IC0xID8gXCJcIiA6IFwicHJvYmxlbVwiO1xuICB9XG5cbiAgY29tcHV0ZUltYWdlQ2xhc3MoZW50aXR5UGljdHVyZSkge1xuICAgIHJldHVybiBlbnRpdHlQaWN0dXJlID8gXCJoYXMtcGxhbnQtaW1hZ2VcIiA6IFwiXCI7XG4gIH1cblxuICBhdHRyaWJ1dGVDbGlja2VkKGV2KSB7XG4gICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwge1xuICAgICAgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5zZW5zb3JzW2V2Lm1vZGVsLml0ZW1dLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBsYW50LWNhcmRcIiwgSGFQbGFudENhcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgSGFXZWF0aGVyQ2FyZCBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1pY29uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaXRlbS1pY29uLWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wYXBlci1mb250LWhlYWRsaW5lXy1fZm9udC1mYW1pbHkpO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHZhcihcbiAgICAgICAgICAgIC0tcGFwZXItZm9udC1oZWFkbGluZV8tXy13ZWJraXQtZm9udC1zbW9vdGhpbmdcbiAgICAgICAgICApO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcGFwZXItZm9udC1oZWFkbGluZV8tX2ZvbnQtc2l6ZSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9mb250LXdlaWdodCk7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9sZXR0ZXItc3BhY2luZyk7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLXBhcGVyLWZvbnQtaGVhZGxpbmVfLV9saW5lLWhlaWdodCk7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IHZhcihcbiAgICAgICAgICAgIC0tcGFwZXItZm9udC1jb21tb24tZXhwZW5zaXZlLWtlcm5pbmdfLV90ZXh0LXJlbmRlcmluZ1xuICAgICAgICAgICk7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTZweCAxNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5uYW1lIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkgLm1haW4ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4gaGEtaWNvbiB7XG4gICAgICAgICAgLS1pcm9uLWljb24taGVpZ2h0OiA3MnB4O1xuICAgICAgICAgIC0taXJvbi1pY29uLXdpZHRoOiA3MnB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5tYWluIGhhLWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4gLnRlbXAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAubWFpbiAudGVtcCB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1haW4gLnRlbXAgc3BhbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lYXN1cmFuZCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5tZWFzdXJhbmQge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmVjYXN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmVjYXN0IGRpdiB7XG4gICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvcmVjYXN0IC5pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAuZm9yZWNhc3QgLnRlbXAge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG5cbiAgICAgICAgLndlZWtkYXkge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgLmF0dHJpYnV0ZXMsXG4gICAgICAgIC50ZW1wbG93LFxuICAgICAgICAucHJlY2lwaXRhdGlvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSAucHJlY2lwaXRhdGlvbiB7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtY2FyZD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIFtbY29tcHV0ZVN0YXRlKHN0YXRlT2JqLnN0YXRlLCBsb2NhbGl6ZSldXVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+W1tjb21wdXRlTmFtZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc2hvd1dlYXRoZXJJY29uKHN0YXRlT2JqLnN0YXRlKV1dXCI+XG4gICAgICAgICAgICAgICAgPGhhLWljb24gaWNvbj1cIltbZ2V0V2VhdGhlckljb24oc3RhdGVPYmouc3RhdGUpXV1cIj48L2hhLWljb24+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wXCI+XG4gICAgICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlXV08c3BhblxuICAgICAgICAgICAgICAgICAgPltbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dPC9zcGFuXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0ZXNcIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc3N1cmUpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmFpcl9wcmVzc3VyZScpXV06XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYXN1cmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICBbW3N0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc3N1cmVdXSBbW2dldFVuaXQoJ2Fpcl9wcmVzc3VyZScpXV1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHkpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmh1bWlkaXR5JyldXTpcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWVhc3VyYW5kXCJcbiAgICAgICAgICAgICAgICAgICAgPltbc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eV1dICU8L3NwYW5cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1tfc2hvd1ZhbHVlKHN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZCldXVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMud2luZF9zcGVlZCcpXV06XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYXN1cmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICBbW2dldFdpbmRTcGVlZChzdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfc3BlZWQpXV1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIFtbZ2V0V2luZEJlYXJpbmcoc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX2JlYXJpbmcsIGxvY2FsaXplKV1dXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZm9yZWNhc3RdXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0XCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbZm9yZWNhc3RdXVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheVwiPlxuICAgICAgICAgICAgICAgICAgICBbW2NvbXB1dGVEYXRlKGl0ZW0uZGF0ZXRpbWUpXV08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfc2hvd1ZhbHVlKGl0ZW0udGVtcGxvdyldXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbY29tcHV0ZVRpbWUoaXRlbS5kYXRldGltZSldXVxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3Nob3dWYWx1ZShpdGVtLmNvbmRpdGlvbildXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiW1tnZXRXZWF0aGVySWNvbihpdGVtLmNvbmRpdGlvbildXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaGEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS50ZW1wZXJhdHVyZSldXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbaXRlbS50ZW1wZXJhdHVyZV1dIFtbZ2V0VW5pdCgndGVtcGVyYXR1cmUnKV1dXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc2hvd1ZhbHVlKGl0ZW0udGVtcGxvdyldXVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIFtbaXRlbS50ZW1wbG93XV0gW1tnZXRVbml0KCd0ZW1wZXJhdHVyZScpXV1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19zaG93VmFsdWUoaXRlbS5wcmVjaXBpdGF0aW9uKV1dXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmVjaXBpdGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgW1tpdGVtLnByZWNpcGl0YXRpb25dXSBbW2dldFVuaXQoJ3ByZWNpcGl0YXRpb24nKV1dXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1jYXJkPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGNvbmZpZzogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGZvcmVjYXN0OiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRm9yZWNhc3Qoc3RhdGVPYmouYXR0cmlidXRlcy5mb3JlY2FzdClcIixcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmNhcmRpbmFsRGlyZWN0aW9ucyA9IFtcbiAgICAgIFwiTlwiLFxuICAgICAgXCJOTkVcIixcbiAgICAgIFwiTkVcIixcbiAgICAgIFwiRU5FXCIsXG4gICAgICBcIkVcIixcbiAgICAgIFwiRVNFXCIsXG4gICAgICBcIlNFXCIsXG4gICAgICBcIlNTRVwiLFxuICAgICAgXCJTXCIsXG4gICAgICBcIlNTV1wiLFxuICAgICAgXCJTV1wiLFxuICAgICAgXCJXU1dcIixcbiAgICAgIFwiV1wiLFxuICAgICAgXCJXTldcIixcbiAgICAgIFwiTldcIixcbiAgICAgIFwiTk5XXCIsXG4gICAgICBcIk5cIixcbiAgICBdO1xuICAgIHRoaXMud2VhdGhlckljb25zID0ge1xuICAgICAgXCJjbGVhci1uaWdodFwiOiBcImhhc3M6d2VhdGhlci1uaWdodFwiLFxuICAgICAgY2xvdWR5OiBcImhhc3M6d2VhdGhlci1jbG91ZHlcIixcbiAgICAgIGV4Y2VwdGlvbmFsOiBcImhhc3M6YWxlcnQtY2lyY2xlLW91dGxpbmVcIixcbiAgICAgIGZvZzogXCJoYXNzOndlYXRoZXItZm9nXCIsXG4gICAgICBoYWlsOiBcImhhc3M6d2VhdGhlci1oYWlsXCIsXG4gICAgICBsaWdodG5pbmc6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZ1wiLFxuICAgICAgXCJsaWdodG5pbmctcmFpbnlcIjogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nLXJhaW55XCIsXG4gICAgICBwYXJ0bHljbG91ZHk6IFwiaGFzczp3ZWF0aGVyLXBhcnRseS1jbG91ZHlcIixcbiAgICAgIHBvdXJpbmc6IFwiaGFzczp3ZWF0aGVyLXBvdXJpbmdcIixcbiAgICAgIHJhaW55OiBcImhhc3M6d2VhdGhlci1yYWlueVwiLFxuICAgICAgc25vd3k6IFwiaGFzczp3ZWF0aGVyLXNub3d5XCIsXG4gICAgICBcInNub3d5LXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLXNub3d5LXJhaW55XCIsXG4gICAgICBzdW5ueTogXCJoYXNzOndlYXRoZXItc3VubnlcIixcbiAgICAgIHdpbmR5OiBcImhhc3M6d2VhdGhlci13aW5keVwiLFxuICAgICAgXCJ3aW5keS12YXJpYW50XCI6IFwiaGFzczp3ZWF0aGVyLXdpbmR5LXZhcmlhbnRcIixcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5fb25DbGljayk7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgfVxuXG4gIF9vbkNsaWNrKCkge1xuICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG5cbiAgY29tcHV0ZUZvcmVjYXN0KGZvcmVjYXN0KSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0ICYmIGZvcmVjYXN0LnNsaWNlKDAsIDUpO1xuICB9XG5cbiAgZ2V0VW5pdChtZWFzdXJlKSB7XG4gICAgY29uc3QgbGVuZ3RoVW5pdCA9IHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW0ubGVuZ3RoIHx8IFwiXCI7XG4gICAgc3dpdGNoIChtZWFzdXJlKSB7XG4gICAgICBjYXNlIFwiYWlyX3ByZXNzdXJlXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcImhQYVwiIDogXCJpbkhnXCI7XG4gICAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0O1xuICAgICAgY2FzZSBcInByZWNpcGl0YXRpb25cIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwibW1cIiA6IFwiaW5cIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtW21lYXN1cmVdIHx8IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZVN0YXRlKHN0YXRlLCBsb2NhbGl6ZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUud2VhdGhlci4ke3N0YXRlfWApIHx8IHN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm5hbWUpIHx8IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgc2hvd1dlYXRoZXJJY29uKGNvbmRpdGlvbikge1xuICAgIHJldHVybiBjb25kaXRpb24gaW4gdGhpcy53ZWF0aGVySWNvbnM7XG4gIH1cblxuICBnZXRXZWF0aGVySWNvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy53ZWF0aGVySWNvbnNbY29uZGl0aW9uXTtcbiAgfVxuXG4gIHdpbmRCZWFyaW5nVG9UZXh0KGRlZ3JlZSkge1xuICAgIGNvbnN0IGRlZ3JlZW51bSA9IHBhcnNlSW50KGRlZ3JlZSk7XG4gICAgaWYgKGlzRmluaXRlKGRlZ3JlZW51bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICAgIH1cbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG5cbiAgZ2V0V2luZFNwZWVkKHNwZWVkKSB7XG4gICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaGA7XG4gIH1cblxuICBnZXRXaW5kQmVhcmluZyhiZWFyaW5nLCBsb2NhbGl6ZSkge1xuICAgIGlmIChiZWFyaW5nICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNhcmRpbmFsRGlyZWN0aW9uID0gdGhpcy53aW5kQmVhcmluZ1RvVGV4dChiZWFyaW5nKTtcbiAgICAgIHJldHVybiBgKCR7bG9jYWxpemUoXG4gICAgICAgIGB1aS5jYXJkLndlYXRoZXIuY2FyZGluYWxfZGlyZWN0aW9uLiR7Y2FyZGluYWxEaXJlY3Rpb24udG9Mb3dlckNhc2UoKX1gXG4gICAgICApIHx8IGNhcmRpbmFsRGlyZWN0aW9ufSlgO1xuICAgIH1cbiAgICByZXR1cm4gYGA7XG4gIH1cblxuICBfc2hvd1ZhbHVlKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlbSAhPT0gbnVsbDtcbiAgfVxuXG4gIGNvbXB1dGVEYXRlKGRhdGEpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YSk7XG4gICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuaGFzcy5sYW5ndWFnZSwgeyB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XG4gIH1cblxuICBjb21wdXRlVGltZShkYXRhKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGEpO1xuICAgIHJldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZyh0aGlzLmhhc3MubGFuZ3VhZ2UsIHsgaG91cjogXCJudW1lcmljXCIgfSk7XG4gIH1cblxuICBfY29tcHV0ZVJUTChoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVSVEwoaGFzcyk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXdlYXRoZXItY2FyZFwiLCBIYVdlYXRoZXJDYXJkKTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuLyoqIEdldCB0aGUgbG9jYXRpb24gbmFtZSBmcm9tIGEgaGFzcyBvYmplY3QuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlTG9jYXRpb25OYW1lKGhhc3M6IEhvbWVBc3Npc3RhbnQpOiBzdHJpbmcge1xuICByZXR1cm4gaGFzcyAmJiBoYXNzLmNvbmZpZy5sb2NhdGlvbl9uYW1lO1xufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY2FyZHMvaGEtYmFkZ2VzLWNhcmRcIjtcbmltcG9ydCBcIi4uL2NhcmRzL2hhLWNhcmQtY2hvb3NlclwiO1xuaW1wb3J0IFwiLi9oYS1kZW1vLWJhZGdlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBzcGxpdEJ5R3JvdXBzIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvc3BsaXRfYnlfZ3JvdXBzXCI7XG5pbXBvcnQgeyBnZXRHcm91cEVudGl0aWVzIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvZ2V0X2dyb3VwX2VudGl0aWVzXCI7XG5cbi8vIG1hcHBpbmcgZG9tYWluIHRvIHNpemUgb2YgdGhlIGNhcmQuXG5jb25zdCBET01BSU5TX1dJVEhfQ0FSRCA9IHtcbiAgY2FtZXJhOiA0LFxuICBoaXN0b3J5X2dyYXBoOiA0LFxuICBtZWRpYV9wbGF5ZXI6IDMsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiAwLFxuICBwbGFudDogMyxcbiAgd2VhdGhlcjogNCxcbn07XG5cbi8vIDQgdHlwZXM6XG4vLyBiYWRnZXM6IDAgLi4gMTBcbi8vIGJlZm9yZSBncm91cHMgPCAwXG4vLyBncm91cHM6IFhcbi8vIHJlc3Q6IDEwMFxuXG5jb25zdCBQUklPUklUWSA9IHtcbiAgLy8gYmVmb3JlIGdyb3VwcyA8IDBcbiAgY29uZmlndXJhdG9yOiAtMjAsXG4gIHBlcnNpc3RlbnRfbm90aWZpY2F0aW9uOiAtMTUsXG5cbiAgLy8gYmFkZ2VzIGhhdmUgcHJpb3JpdHkgPj0gMFxuICB1cGRhdGVyOiAwLFxuICBzdW46IDEsXG4gIHBlcnNvbjogMixcbiAgZGV2aWNlX3RyYWNrZXI6IDMsXG4gIGFsYXJtX2NvbnRyb2xfcGFuZWw6IDQsXG4gIHRpbWVyOiA1LFxuICBzZW5zb3I6IDYsXG4gIGJpbmFyeV9zZW5zb3I6IDcsXG4gIG1haWxib3g6IDgsXG59O1xuXG5jb25zdCBnZXRQcmlvcml0eSA9IChkb21haW4pID0+IChkb21haW4gaW4gUFJJT1JJVFkgPyBQUklPUklUWVtkb21haW5dIDogMTAwKTtcblxuY29uc3Qgc29ydFByaW9yaXR5ID0gKGRvbWFpbkEsIGRvbWFpbkIpID0+IGRvbWFpbkEucHJpb3JpdHkgLSBkb21haW5CLnByaW9yaXR5O1xuXG5jb25zdCBlbnRpdHlTb3J0QnkgPSAoZW50aXR5QSwgZW50aXR5QikgPT4ge1xuICBjb25zdCBuYW1lQSA9IChcbiAgICBlbnRpdHlBLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBlbnRpdHlBLmVudGl0eV9pZFxuICApLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IG5hbWVCID0gKFxuICAgIGVudGl0eUIuYXR0cmlidXRlcy5mcmllbmRseV9uYW1lIHx8IGVudGl0eUIuZW50aXR5X2lkXG4gICkudG9Mb3dlckNhc2UoKTtcblxuICBpZiAobmFtZUEgPCBuYW1lQikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAobmFtZUEgPiBuYW1lQikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgaXRlcmF0ZURvbWFpblNvcnRlZCA9IChjb2xsZWN0aW9uLCBmdW5jKSA9PiB7XG4gIE9iamVjdC5rZXlzKGNvbGxlY3Rpb24pXG4gICAgLm1hcCgoa2V5KSA9PiBjb2xsZWN0aW9uW2tleV0pXG4gICAgLnNvcnQoc29ydFByaW9yaXR5KVxuICAgIC5mb3JFYWNoKChkb21haW4pID0+IHtcbiAgICAgIGRvbWFpbi5zdGF0ZXMuc29ydChlbnRpdHlTb3J0QnkpO1xuICAgICAgZnVuYyhkb21haW4pO1xuICAgIH0pO1xufTtcblxuY2xhc3MgSGFDYXJkcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1mYWN0b3JzXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDRweCA0cHggMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhZGdlcyB7XG4gICAgICAgICAgZm9udC1zaXplOiA4NSU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICBoYS1jYXJkLWNob29zZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogNHB4IDRweCA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhLWNhcmQtY2hvb3NlciB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbY2FyZHMuYmFkZ2VzLmxlbmd0aF1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhZGdlc1wiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhcmRzLmRlbW9dXVwiPlxuICAgICAgICAgICAgICA8aGEtZGVtby1iYWRnZT48L2hhLWRlbW8tYmFkZ2U+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8aGEtYmFkZ2VzLWNhcmRcbiAgICAgICAgICAgICAgc3RhdGVzPVwiW1tjYXJkcy5iYWRnZXNdXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICA+PC9oYS1iYWRnZXMtY2FyZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBsYXlvdXQgY2VudGVyLWp1c3RpZmllZFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbY2FyZHMuY29sdW1uc11dXCIgYXM9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gZmxleC0xXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbY29sdW1uXV1cIiBhcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8aGEtY2FyZC1jaG9vc2VyIGNhcmQtZGF0YT1cIltbY2FyZF1dXCI+PC9oYS1jYXJkLWNob29zZXI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgY29sdW1uczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAyLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVzOiBPYmplY3QsXG5cbiAgICAgIHZpZXdWaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIG9yZGVyZWRHcm91cEVudGl0aWVzOiBBcnJheSxcblxuICAgICAgY2FyZHM6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInVwZGF0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgdmlld1Zpc2libGUsIG9yZGVyZWRHcm91cEVudGl0aWVzKVwiXTtcbiAgfVxuXG4gIHVwZGF0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgdmlld1Zpc2libGUsIG9yZGVyZWRHcm91cEVudGl0aWVzKSB7XG4gICAgaWYgKCF2aWV3VmlzaWJsZSkge1xuICAgICAgaWYgKHRoaXMuJC5tYWluLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy4kLm1haW4uX3BhcmVudE5vZGUgPSB0aGlzLiQubWFpbi5wYXJlbnROb2RlO1xuICAgICAgICB0aGlzLiQubWFpbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJC5tYWluKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLiQubWFpbi5wYXJlbnROb2RlICYmIHRoaXMuJC5tYWluLl9wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLiQubWFpbi5fcGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLiQubWFpbik7XG4gICAgfVxuICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlcixcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMTApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBUaGluZ3MgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIGl0IGdvdCBzY2hlZHVsZWQuXG4gICAgICAgIGlmICh0aGlzLnZpZXdWaXNpYmxlKSB7XG4gICAgICAgICAgdGhpcy5jYXJkcyA9IHRoaXMuY29tcHV0ZUNhcmRzKGNvbHVtbnMsIHN0YXRlcywgb3JkZXJlZEdyb3VwRW50aXRpZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGVtcHR5Q2FyZHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbW86IGZhbHNlLFxuICAgICAgYmFkZ2VzOiBbXSxcbiAgICAgIGNvbHVtbnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlQ2FyZHMoY29sdW1ucywgc3RhdGVzLCBvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgIGNvbnN0IGhhc3MgPSB0aGlzLmhhc3M7XG5cbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuZW1wdHlDYXJkcygpO1xuXG4gICAgY29uc3QgZW50aXR5Q291bnQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgICAgY2FyZHMuY29sdW1ucy5wdXNoKFtdKTtcbiAgICAgIGVudGl0eUNvdW50LnB1c2goMCk7XG4gICAgfVxuXG4gICAgLy8gRmluZCBjb2x1bW4gd2l0aCA8IDUgZW50aXRpZXMsIGVsc2UgY29sdW1uIHdpdGggbG93ZXN0IGNvdW50XG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoc2l6ZSkge1xuICAgICAgbGV0IG1pbkluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW50aXR5Q291bnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVudGl0eUNvdW50W2ldIDwgNSkge1xuICAgICAgICAgIG1pbkluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW50aXR5Q291bnRbaV0gPCBlbnRpdHlDb3VudFttaW5JbmRleF0pIHtcbiAgICAgICAgICBtaW5JbmRleCA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZW50aXR5Q291bnRbbWluSW5kZXhdICs9IHNpemU7XG5cbiAgICAgIHJldHVybiBtaW5JbmRleDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFbnRpdGllc0NhcmQobmFtZSwgZW50aXRpZXMsIGdyb3VwRW50aXR5KSB7XG4gICAgICBpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IG93bmNhcmQgPSBbXTtcbiAgICAgIGNvbnN0IG90aGVyID0gW107XG5cbiAgICAgIGxldCBzaXplID0gMDtcblxuICAgICAgZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihlbnRpdHkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBkb21haW4gaW4gRE9NQUlOU19XSVRIX0NBUkQgJiZcbiAgICAgICAgICAhZW50aXR5LmF0dHJpYnV0ZXMuY3VzdG9tX3VpX3N0YXRlX2NhcmRcbiAgICAgICAgKSB7XG4gICAgICAgICAgb3duY2FyZC5wdXNoKGVudGl0eSk7XG4gICAgICAgICAgc2l6ZSArPSBET01BSU5TX1dJVEhfQ0FSRFtkb21haW5dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG90aGVyLnB1c2goZW50aXR5KTtcbiAgICAgICAgICBzaXplKys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgMSB0byB0aGUgc2l6ZSBpZiB3ZSdyZSByZW5kZXJpbmcgZW50aXRpZXMgY2FyZFxuICAgICAgc2l6ZSArPSBvdGhlci5sZW5ndGggPiAwO1xuXG4gICAgICBjb25zdCBjdXJJbmRleCA9IGdldEluZGV4KHNpemUpO1xuXG4gICAgICBpZiAob3RoZXIubGVuZ3RoID4gMCkge1xuICAgICAgICBjYXJkcy5jb2x1bW5zW2N1ckluZGV4XS5wdXNoKHtcbiAgICAgICAgICBoYXNzOiBoYXNzLFxuICAgICAgICAgIGNhcmRUeXBlOiBcImVudGl0aWVzXCIsXG4gICAgICAgICAgc3RhdGVzOiBvdGhlcixcbiAgICAgICAgICBncm91cEVudGl0eTogZ3JvdXBFbnRpdHkgfHwgZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBvd25jYXJkLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICBjYXJkcy5jb2x1bW5zW2N1ckluZGV4XS5wdXNoKHtcbiAgICAgICAgICBoYXNzOiBoYXNzLFxuICAgICAgICAgIGNhcmRUeXBlOiBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSxcbiAgICAgICAgICBzdGF0ZU9iajogZW50aXR5LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHNwbGl0dGVkID0gc3BsaXRCeUdyb3VwcyhzdGF0ZXMpO1xuICAgIGlmIChvcmRlcmVkR3JvdXBFbnRpdGllcykge1xuICAgICAgc3BsaXR0ZWQuZ3JvdXBzLnNvcnQoXG4gICAgICAgIChncjEsIGdyMikgPT5cbiAgICAgICAgICBvcmRlcmVkR3JvdXBFbnRpdGllc1tncjEuZW50aXR5X2lkXSAtXG4gICAgICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZ3IyLmVudGl0eV9pZF1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwbGl0dGVkLmdyb3Vwcy5zb3J0KFxuICAgICAgICAoZ3IxLCBncjIpID0+IGdyMS5hdHRyaWJ1dGVzLm9yZGVyIC0gZ3IyLmF0dHJpYnV0ZXMub3JkZXJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgYmFkZ2VzQ29sbCA9IHt9O1xuICAgIGNvbnN0IGJlZm9yZUdyb3VwQ29sbCA9IHt9O1xuICAgIGNvbnN0IGFmdGVyR3JvdXBlZENvbGwgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHNwbGl0dGVkLnVuZ3JvdXBlZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHNwbGl0dGVkLnVuZ3JvdXBlZFtrZXldO1xuICAgICAgY29uc3QgZG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKTtcblxuICAgICAgaWYgKGRvbWFpbiA9PT0gXCJhXCIpIHtcbiAgICAgICAgY2FyZHMuZGVtbyA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBnZXRQcmlvcml0eShkb21haW4pO1xuICAgICAgbGV0IGNvbGw7XG5cbiAgICAgIGlmIChwcmlvcml0eSA8IDApIHtcbiAgICAgICAgY29sbCA9IGJlZm9yZUdyb3VwQ29sbDtcbiAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPCAxMCkge1xuICAgICAgICBjb2xsID0gYmFkZ2VzQ29sbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGwgPSBhZnRlckdyb3VwZWRDb2xsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShkb21haW4gaW4gY29sbCkpIHtcbiAgICAgICAgY29sbFtkb21haW5dID0ge1xuICAgICAgICAgIGRvbWFpbjogZG9tYWluLFxuICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICBzdGF0ZXM6IFtdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb2xsW2RvbWFpbl0uc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH0pO1xuXG4gICAgaWYgKG9yZGVyZWRHcm91cEVudGl0aWVzKSB7XG4gICAgICBPYmplY3Qua2V5cyhiYWRnZXNDb2xsKVxuICAgICAgICAubWFwKChrZXkpID0+IGJhZGdlc0NvbGxba2V5XSlcbiAgICAgICAgLmZvckVhY2goKGRvbWFpbikgPT4ge1xuICAgICAgICAgIGNhcmRzLmJhZGdlcy5wdXNoLmFwcGx5KGNhcmRzLmJhZGdlcywgZG9tYWluLnN0YXRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICBjYXJkcy5iYWRnZXMuc29ydChcbiAgICAgICAgKGUxLCBlMikgPT5cbiAgICAgICAgICBvcmRlcmVkR3JvdXBFbnRpdGllc1tlMS5lbnRpdHlfaWRdIC1cbiAgICAgICAgICBvcmRlcmVkR3JvdXBFbnRpdGllc1tlMi5lbnRpdHlfaWRdXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGVyYXRlRG9tYWluU29ydGVkKGJhZGdlc0NvbGwsIChkb21haW4pID0+IHtcbiAgICAgICAgY2FyZHMuYmFkZ2VzLnB1c2guYXBwbHkoY2FyZHMuYmFkZ2VzLCBkb21haW4uc3RhdGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGl0ZXJhdGVEb21haW5Tb3J0ZWQoYmVmb3JlR3JvdXBDb2xsLCAoZG9tYWluKSA9PiB7XG4gICAgICBhZGRFbnRpdGllc0NhcmQoZG9tYWluLmRvbWFpbiwgZG9tYWluLnN0YXRlcyk7XG4gICAgfSk7XG5cbiAgICBzcGxpdHRlZC5ncm91cHMuZm9yRWFjaCgoZ3JvdXBTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBnZXRHcm91cEVudGl0aWVzKHN0YXRlcywgZ3JvdXBTdGF0ZSk7XG4gICAgICBhZGRFbnRpdGllc0NhcmQoXG4gICAgICAgIGdyb3VwU3RhdGUuZW50aXR5X2lkLFxuICAgICAgICBPYmplY3Qua2V5cyhlbnRpdGllcykubWFwKChrZXkpID0+IGVudGl0aWVzW2tleV0pLFxuICAgICAgICBncm91cFN0YXRlXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgaXRlcmF0ZURvbWFpblNvcnRlZChhZnRlckdyb3VwZWRDb2xsLCAoZG9tYWluKSA9PiB7XG4gICAgICBhZGRFbnRpdGllc0NhcmQoZG9tYWluLmRvbWFpbiwgZG9tYWluLnN0YXRlcyk7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgY29sdW1uc1xuICAgIGNhcmRzLmNvbHVtbnMgPSBjYXJkcy5jb2x1bW5zLmZpbHRlcigodmFsKSA9PiB2YWwubGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gY2FyZHM7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNhcmRzXCIsIEhhQ2FyZHMpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1sYWJlbC1iYWRnZVwiO1xuXG5jbGFzcyBIYURlbW9CYWRnZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC0taGEtbGFiZWwtYmFkZ2UtY29sb3I6ICNkYWM5MGQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxoYS1sYWJlbC1iYWRnZVxuICAgICAgICBpY29uPVwiaGFzczplbW90aWNvblwiXG4gICAgICAgIGxhYmVsPVwiRGVtb1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiXCJcbiAgICAgID48L2hhLWxhYmVsLWJhZGdlPlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZGVtby1iYWRnZVwiLCBIYURlbW9CYWRnZSk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi9jb21tb24vbmF2aWdhdGVcIjtcblxuLypcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIG5hdmlnYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgbmF2aWdhdGUodGhpcywgLi4uYXJncyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtc2Nyb2xsLWVmZmVjdHMvZWZmZWN0cy93YXRlcmZhbGxcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1yb3V0ZS9hcHAtcm91dGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLXBhZ2VzL2lyb24tcGFnZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRhYnMvcGFwZXItdGFiXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10YWJzL3BhcGVyLXRhYnNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLXN0YXJ0LXZvaWNlLWJ1dHRvblwiO1xuXG5pbXBvcnQgXCIuLi8uLi9sYXlvdXRzL2hhLWFwcC1sYXlvdXRcIjtcblxuaW1wb3J0IHsgZXh0cmFjdFZpZXdzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZXh0cmFjdF92aWV3c1wiO1xuaW1wb3J0IHsgZ2V0Vmlld0VudGl0aWVzIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvZ2V0X3ZpZXdfZW50aXRpZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgY29tcHV0ZUxvY2F0aW9uTmFtZSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbmZpZy9sb2NhdGlvbl9uYW1lXCI7XG5pbXBvcnQgTmF2aWdhdGVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL25hdmlnYXRlLW1peGluXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbmNvbnN0IERFRkFVTFRfVklFV19FTlRJVFlfSUQgPSBcImdyb3VwLmRlZmF1bHRfdmlld1wiO1xuY29uc3QgQUxXQVlTX1NIT1dfRE9NQUlOID0gW1wicGVyc2lzdGVudF9ub3RpZmljYXRpb25cIiwgXCJjb25maWd1cmF0b3JcIl07XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIE5hdmlnYXRlTWl4aW5cbiAqL1xuY2xhc3MgUGFydGlhbENhcmRzIGV4dGVuZHMgRXZlbnRzTWl4aW4oTmF2aWdhdGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tcG9zaXRpb25pbmcgaGEtc3R5bGVcIj5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1hcHAtbGF5b3V0IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjZTVlNWU1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlyb24tcGFnZXMge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLXRhYnMge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIC0tcGFwZXItdGFicy1zZWxlY3Rpb24tYmFyLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IsICNmZmYpO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86dmlld1wiXG4gICAgICAgIGRhdGE9XCJ7e3JvdXRlRGF0YX19XCJcbiAgICAgICAgYWN0aXZlPVwie3tyb3V0ZU1hdGNofX1cIlxuICAgICAgPjwvYXBwLXJvdXRlPlxuICAgICAgPGhhLWFwcC1sYXlvdXQgaWQ9XCJsYXlvdXRcIj5cbiAgICAgICAgPGFwcC1oZWFkZXIgZWZmZWN0cz1cIndhdGVyZmFsbFwiIGNvbmRlbnNlcz1cIlwiIGZpeGVkPVwiXCIgc2xvdD1cImhlYWRlclwiPlxuICAgICAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgICAgIDxoYS1tZW51LWJ1dHRvblxuICAgICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgICBuYXJyb3c9XCJbW25hcnJvd11dXCJcbiAgICAgICAgICAgID48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+XG4gICAgICAgICAgICAgIFtbY29tcHV0ZVRpdGxlKHZpZXdzLCBkZWZhdWx0VmlldywgbG9jYXRpb25OYW1lKV1dXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoYS1zdGFydC12b2ljZS1idXR0b24gaGFzcz1cIltbaGFzc11dXCI+PC9oYS1zdGFydC12b2ljZS1idXR0b24+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgICAgIDxkaXYgc3RpY2t5PVwiXCIgaGlkZGVuJD1cIltbYXJlVGFic0hpZGRlbih2aWV3cywgc2hvd1RhYnMpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci10YWJzXG4gICAgICAgICAgICAgIHNjcm9sbGFibGU9XCJcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS1lbnRpdHlcIlxuICAgICAgICAgICAgICBvbi1pcm9uLWFjdGl2YXRlPVwiaGFuZGxlVmlld1NlbGVjdGVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLXRhYiBkYXRhLWVudGl0eT1cIlwiIG9uLWNsaWNrPVwic2Nyb2xsVG9Ub3BcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWRlZmF1bHRWaWV3XV1cIj5cbiAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tkZWZhdWx0Vmlld11dXCI+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZGVmYXVsdFZpZXcuYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXCJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiW1tkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiXG4gICAgICAgICAgICAgICAgICAgID48L2hhLWljb24+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFkZWZhdWx0Vmlldy5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGRlZmF1bHRWaWV3KV1dXG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgIDwvcGFwZXItdGFiPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3ZpZXdzXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItdGFiXG4gICAgICAgICAgICAgICAgICBkYXRhLWVudGl0eSQ9XCJbW2l0ZW0uZW50aXR5X2lkXV1cIlxuICAgICAgICAgICAgICAgICAgb24tY2xpY2s9XCJzY3JvbGxUb1RvcFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZSQ9XCJbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cIlxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJbW2l0ZW0uYXR0cmlidXRlcy5pY29uXV1cIlxuICAgICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shaXRlbS5hdHRyaWJ1dGVzLmljb25dXVwiPlxuICAgICAgICAgICAgICAgICAgICBbW19jb21wdXRlU3RhdGVOYW1lKGl0ZW0pXV1cbiAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9wYXBlci10YWI+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLXRhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXBwLWhlYWRlcj5cblxuICAgICAgICA8aXJvbi1wYWdlc1xuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS12aWV3XCJcbiAgICAgICAgICBzZWxlY3RlZD1cIltbY3VycmVudFZpZXddXVwiXG4gICAgICAgICAgc2VsZWN0ZWQtYXR0cmlidXRlPVwidmlldy12aXNpYmxlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1jYXJkc1xuICAgICAgICAgICAgZGF0YS12aWV3PVwiXCJcbiAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgIGNvbHVtbnM9XCJbW19jb2x1bW5zXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgIG9yZGVyZWQtZ3JvdXAtZW50aXRpZXM9XCJbW29yZGVyZWRHcm91cEVudGl0aWVzXV1cIlxuICAgICAgICAgID48L2hhLWNhcmRzPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t2aWV3c11dXCI+XG4gICAgICAgICAgICA8aGEtY2FyZHNcbiAgICAgICAgICAgICAgZGF0YS12aWV3JD1cIltbaXRlbS5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICAgIHN0YXRlcz1cIltbdmlld1N0YXRlc11dXCJcbiAgICAgICAgICAgICAgY29sdW1ucz1cIltbX2NvbHVtbnNdXVwiXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIHBhbmVsLXZpc2libGU9XCJbW3BhbmVsVmlzaWJsZV1dXCJcbiAgICAgICAgICAgICAgb3JkZXJlZC1ncm91cC1lbnRpdGllcz1cIltbb3JkZXJlZEdyb3VwRW50aXRpZXNdXVwiXG4gICAgICAgICAgICA+PC9oYS1jYXJkcz5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2lyb24tcGFnZXM+XG4gICAgICA8L2hhLWFwcC1sYXlvdXQ+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBvYnNlcnZlcjogXCJoYXNzQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgbmFycm93OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIHBhbmVsVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICByb3V0ZTogT2JqZWN0LFxuICAgICAgcm91dGVEYXRhOiBPYmplY3QsXG4gICAgICByb3V0ZU1hdGNoOiBCb29sZWFuLFxuXG4gICAgICBfY29sdW1uczoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcblxuICAgICAgbG9jYXRpb25OYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlTG9jYXRpb25OYW1lKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICBjdXJyZW50Vmlldzoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlQ3VycmVudFZpZXcoaGFzcywgcm91dGVNYXRjaCwgcm91dGVEYXRhKVwiLFxuICAgICAgfSxcblxuICAgICAgdmlld3M6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICB9LFxuXG4gICAgICBkZWZhdWx0Vmlldzoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICB2aWV3U3RhdGVzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiY29tcHV0ZVZpZXdTdGF0ZXMoY3VycmVudFZpZXcsIGhhc3MsIGRlZmF1bHRWaWV3KVwiLFxuICAgICAgfSxcblxuICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVPcmRlcmVkR3JvdXBFbnRpdGllcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpXCIsXG4gICAgICB9LFxuXG4gICAgICBzaG93VGFiczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJfdXBkYXRlQ29sdW1ucyhuYXJyb3csIGhhc3MuZG9ja2VkU2lkZWJhcilcIl07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICB0aGlzLl91cGRhdGVDb2x1bW5zID0gdGhpcy5fdXBkYXRlQ29sdW1ucy5iaW5kKHRoaXMpO1xuICAgIHRoaXMubXFscyA9IFszMDAsIDYwMCwgOTAwLCAxMjAwXS5tYXAoKHdpZHRoKSA9PlxuICAgICAgbWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHt3aWR0aH1weClgKVxuICAgICk7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5tcWxzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKHRoaXMuX3VwZGF0ZUNvbHVtbnMpKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5tcWxzLmZvckVhY2goKG1xbCkgPT4gbXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMuX3VwZGF0ZUNvbHVtbnMpKTtcbiAgfVxuXG4gIF91cGRhdGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IG1hdGNoQ29sdW1ucyA9IHRoaXMubXFscy5yZWR1Y2UoKGNvbHMsIG1xbCkgPT4gY29scyArIG1xbC5tYXRjaGVzLCAwKTtcbiAgICAvLyBEbyAtMSBjb2x1bW4gaWYgdGhlIG1lbnUgaXMgZG9ja2VkIGFuZCBvcGVuXG4gICAgdGhpcy5fY29sdW1ucyA9IE1hdGgubWF4KFxuICAgICAgMSxcbiAgICAgIG1hdGNoQ29sdW1ucyAtICghdGhpcy5uYXJyb3cgJiYgdGhpcy5oYXNzLmRvY2tlZFNpZGViYXIgPT09IFwiZG9ja2VkXCIpXG4gICAgKTtcbiAgfVxuXG4gIGFyZVRhYnNIaWRkZW4odmlld3MsIHNob3dUYWJzKSB7XG4gICAgcmV0dXJuICF2aWV3cyB8fCAhdmlld3MubGVuZ3RoIHx8ICFzaG93VGFicztcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyB5IGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIENvcGllZCBmcm9tIHBhcGVyLXNjcm9sbC1oZWFkZXItcGFuZWwuXG4gICAqXG4gICAqIEBtZXRob2Qgc2Nyb2xsXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3AgVGhlIGNvb3JkaW5hdGUgdG8gc2Nyb2xsIHRvLCBhbG9uZyB0aGUgeS1heGlzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNtb290aCB0cnVlIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gc2hvdWxkIGJlIHNtb290aGx5IGFkanVzdGVkLlxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AoKSB7XG4gICAgLy8gdGhlIHNjcm9sbCBldmVudCB3aWxsIHRyaWdnZXIgX3VwZGF0ZVNjcm9sbFN0YXRlIGRpcmVjdGx5LFxuICAgIC8vIEhvd2V2ZXIsIF91cGRhdGVTY3JvbGxTdGF0ZSByZWxpZXMgb24gdGhlIHByZXZpb3VzIGBzY3JvbGxUb3BgIHRvIHVwZGF0ZSB0aGUgc3RhdGVzLlxuICAgIC8vIENhbGxpbmcgX3VwZGF0ZVNjcm9sbFN0YXRlIHdpbGwgZW5zdXJlIHRoYXQgdGhlIHN0YXRlcyBhcmUgc3luY2VkIGNvcnJlY3RseS5cbiAgICB2YXIgdG9wID0gMDtcbiAgICB2YXIgc2Nyb2xsZXIgPSB0aGlzLiQubGF5b3V0LmhlYWRlci5zY3JvbGxUYXJnZXQ7XG4gICAgdmFyIGVhc2luZ0ZuID0gZnVuY3Rpb24gZWFzZU91dFF1YWQodCwgYiwgYywgZCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24sIHNwYWNlLWluZml4LW9wcywgbm8tbWl4ZWQtb3BlcmF0b3JzICovXG4gICAgICB0IC89IGQ7XG4gICAgICByZXR1cm4gLWMgKiB0ICogKHQgLSAyKSArIGI7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduLCBzcGFjZS1pbmZpeC1vcHMsIG5vLW1peGVkLW9wZXJhdG9ycyAqL1xuICAgIH07XG4gICAgdmFyIGFuaW1hdGlvbklkID0gTWF0aC5yYW5kb20oKTtcbiAgICB2YXIgZHVyYXRpb24gPSAyMDA7XG4gICAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGN1cnJlbnRTY3JvbGxUb3AgPSBzY3JvbGxlci5zY3JvbGxUb3A7XG4gICAgdmFyIGRlbHRhU2Nyb2xsVG9wID0gdG9wIC0gY3VycmVudFNjcm9sbFRvcDtcbiAgICB0aGlzLl9jdXJyZW50QW5pbWF0aW9uSWQgPSBhbmltYXRpb25JZDtcbiAgICAoZnVuY3Rpb24gdXBkYXRlRnJhbWUoKSB7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIHZhciBlbGFwc2VkVGltZSA9IG5vdyAtIHN0YXJ0VGltZTtcbiAgICAgIGlmIChlbGFwc2VkVGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VycmVudEFuaW1hdGlvbklkID09PSBhbmltYXRpb25JZCkge1xuICAgICAgICBzY3JvbGxlci5zY3JvbGxUb3AgPSBlYXNpbmdGbihcbiAgICAgICAgICBlbGFwc2VkVGltZSxcbiAgICAgICAgICBjdXJyZW50U2Nyb2xsVG9wLFxuICAgICAgICAgIGRlbHRhU2Nyb2xsVG9wLFxuICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgICk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVGcmFtZS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LmNhbGwodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlVmlld1NlbGVjdGVkKGV2KSB7XG4gICAgY29uc3QgdmlldyA9IGV2LmRldGFpbC5pdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZW50aXR5XCIpIHx8IG51bGw7XG5cbiAgICBpZiAodmlldyAhPT0gdGhpcy5jdXJyZW50Vmlldykge1xuICAgICAgbGV0IHBhdGggPSBcIi9zdGF0ZXNcIjtcbiAgICAgIGlmICh2aWV3KSB7XG4gICAgICAgIHBhdGggKz0gXCIvXCIgKyB2aWV3O1xuICAgICAgfVxuICAgICAgdGhpcy5uYXZpZ2F0ZShwYXRoKTtcbiAgICB9XG4gIH1cblxuICBfY29tcHV0ZUN1cnJlbnRWaWV3KGhhc3MsIHJvdXRlTWF0Y2gsIHJvdXRlRGF0YSkge1xuICAgIGlmICghcm91dGVNYXRjaCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKFxuICAgICAgIWhhc3Muc3RhdGVzW3JvdXRlRGF0YS52aWV3XSB8fFxuICAgICAgIWhhc3Muc3RhdGVzW3JvdXRlRGF0YS52aWV3XS5hdHRyaWJ1dGVzLnZpZXdcbiAgICApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVEYXRhLnZpZXc7XG4gIH1cblxuICBjb21wdXRlVGl0bGUodmlld3MsIGRlZmF1bHRWaWV3LCBsb2NhdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gKHZpZXdzICYmXG4gICAgICB2aWV3cy5sZW5ndGggPiAwICYmXG4gICAgICAhZGVmYXVsdFZpZXcgJiZcbiAgICAgIGxvY2F0aW9uTmFtZSA9PT0gXCJIb21lXCIpIHx8XG4gICAgICAhbG9jYXRpb25OYW1lXG4gICAgICA/IFwi54mn5YW754qsXCJcbiAgICAgIDogbG9jYXRpb25OYW1lO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBfY29tcHV0ZUxvY2F0aW9uTmFtZShoYXNzKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVMb2NhdGlvbk5hbWUoaGFzcyk7XG4gIH1cblxuICBoYXNzQ2hhbmdlZChoYXNzKSB7XG4gICAgaWYgKCFoYXNzKSByZXR1cm47XG4gICAgY29uc3Qgdmlld3MgPSBleHRyYWN0Vmlld3MoaGFzcy5zdGF0ZXMpO1xuICAgIGxldCBkZWZhdWx0VmlldyA9IG51bGw7XG4gICAgLy8gSWYgZGVmYXVsdCB2aWV3IHByZXNlbnQsIGl0J3MgaW4gZmlyc3QgaW5kZXguXG4gICAgaWYgKHZpZXdzLmxlbmd0aCA+IDAgJiYgdmlld3NbMF0uZW50aXR5X2lkID09PSBERUZBVUxUX1ZJRVdfRU5USVRZX0lEKSB7XG4gICAgICBkZWZhdWx0VmlldyA9IHZpZXdzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgdmlld3MsIGRlZmF1bHRWaWV3IH0pO1xuICB9XG5cbiAgaXNWaWV3KGN1cnJlbnRWaWV3LCBkZWZhdWx0Vmlldykge1xuICAgIHJldHVybiAoXG4gICAgICAoY3VycmVudFZpZXcgfHwgZGVmYXVsdFZpZXcpICYmXG4gICAgICB0aGlzLmhhc3Muc3RhdGVzW2N1cnJlbnRWaWV3IHx8IERFRkFVTFRfVklFV19FTlRJVFlfSURdXG4gICAgKTtcbiAgfVxuXG4gIF9kZWZhdWx0Vmlld0ZpbHRlcihoYXNzLCBlbnRpdHlJZCkge1xuICAgIC8vIEZpbHRlciBvdXQgaGlkZGVuXG4gICAgcmV0dXJuICFoYXNzLnN0YXRlc1tlbnRpdHlJZF0uYXR0cmlidXRlcy5oaWRkZW47XG4gIH1cblxuICBfY29tcHV0ZURlZmF1bHRWaWV3U3RhdGVzKGhhc3MsIGVudGl0eUlkcykge1xuICAgIGNvbnN0IHN0YXRlcyA9IHt9O1xuICAgIGVudGl0eUlkc1xuICAgICAgLmZpbHRlcih0aGlzLl9kZWZhdWx0Vmlld0ZpbHRlci5iaW5kKG51bGwsIGhhc3MpKVxuICAgICAgLmZvckVhY2goKGVudGl0eUlkKSA9PiB7XG4gICAgICAgIHN0YXRlc1tlbnRpdHlJZF0gPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgICB9KTtcbiAgICByZXR1cm4gc3RhdGVzO1xuICB9XG5cbiAgLypcbiAgICBDb21wdXRlIHRoZSBzdGF0ZXMgdG8gc2hvdyBmb3IgY3VycmVudCB2aWV3LlxuXG4gICAgV2lsbCBtYWtlIHN1cmUgd2UgYWx3YXlzIHNob3cgZW50aXRpZXMgZnJvbSBBTFdBWVNfU0hPV19ET01BSU5TIGRvbWFpbnMuXG4gICovXG4gIGNvbXB1dGVWaWV3U3RhdGVzKGN1cnJlbnRWaWV3LCBoYXNzLCBkZWZhdWx0Vmlldykge1xuICAgIGNvbnN0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgIC8vIElmIHdlIGJhc2Ugb2ZmIGFsbCBlbnRpdGllcywgb25seSBoYXZlIHRvIGZpbHRlciBvdXQgaGlkZGVuXG4gICAgaWYgKCF0aGlzLmlzVmlldyhjdXJyZW50VmlldywgZGVmYXVsdFZpZXcpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcHV0ZURlZmF1bHRWaWV3U3RhdGVzKGhhc3MsIGVudGl0eUlkcyk7XG4gICAgfVxuXG4gICAgbGV0IHN0YXRlcztcbiAgICBpZiAoY3VycmVudFZpZXcpIHtcbiAgICAgIHN0YXRlcyA9IGdldFZpZXdFbnRpdGllcyhoYXNzLnN0YXRlcywgaGFzcy5zdGF0ZXNbY3VycmVudFZpZXddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVzID0gZ2V0Vmlld0VudGl0aWVzKFxuICAgICAgICBoYXNzLnN0YXRlcyxcbiAgICAgICAgaGFzcy5zdGF0ZXNbREVGQVVMVF9WSUVXX0VOVElUWV9JRF1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIGNlcnRhaW4gZG9tYWlucyBhcmUgYWx3YXlzIHNob3duLlxuICAgIGVudGl0eUlkcy5mb3JFYWNoKChlbnRpdHlJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG5cbiAgICAgIGlmIChBTFdBWVNfU0hPV19ET01BSU4uaW5jbHVkZXMoY29tcHV0ZVN0YXRlRG9tYWluKHN0YXRlKSkpIHtcbiAgICAgICAgc3RhdGVzW2VudGl0eUlkXSA9IHN0YXRlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlcztcbiAgfVxuXG4gIC8qXG4gICAgQ29tcHV0ZSB0aGUgb3JkZXJlZCBsaXN0IG9mIGdyb3VwcyBmb3IgdGhpcyB2aWV3XG4gICovXG4gIGNvbXB1dGVPcmRlcmVkR3JvdXBFbnRpdGllcyhjdXJyZW50VmlldywgaGFzcywgZGVmYXVsdFZpZXcpIHtcbiAgICBpZiAoIXRoaXMuaXNWaWV3KGN1cnJlbnRWaWV3LCBkZWZhdWx0VmlldykpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBvcmRlcmVkR3JvdXBFbnRpdGllcyA9IHt9O1xuICAgIHZhciBlbnRpdGllc0xpc3QgPVxuICAgICAgaGFzcy5zdGF0ZXNbY3VycmVudFZpZXcgfHwgREVGQVVMVF9WSUVXX0VOVElUWV9JRF0uYXR0cmlidXRlcy5lbnRpdHlfaWQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgb3JkZXJlZEdyb3VwRW50aXRpZXNbZW50aXRpZXNMaXN0W2ldXSA9IGk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yZGVyZWRHcm91cEVudGl0aWVzO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLXN0YXRlc1wiLCBQYXJ0aWFsQ2FyZHMpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1WEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==