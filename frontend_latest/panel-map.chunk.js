(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-map"],{

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
const setupLeafletMap = async (mapElement, darkMode = false) => {
    if (!mapElement.parentNode) {
        throw new Error("Cannot setup Leaflet map on disconnected element");
    }
    // tslint:disable-next-line
    const Leaflet = (await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7)));
    Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";
    const map = Leaflet.map(mapElement);
    const style = document.createElement("link");
    style.setAttribute("href", "/static/images/leaflet/leaflet.css");
    style.setAttribute("rel", "stylesheet");
    mapElement.parentNode.appendChild(style);
    map.setView([52.3731339, 4.8903147], 13);
    createTileLayer(Leaflet, darkMode).addTo(map);
    return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
    return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        minZoom: 0,
        maxZoom: 20,
    });
};


/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: computeObjectId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeObjectId", function() { return computeObjectId; });
/** Compute the object ID of a state. */
const computeObjectId = (entityId) => {
    return entityId.substr(entityId.indexOf(".") + 1);
};


/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: computeStateDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDomain", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

const computeStateDomain = (stateObj) => {
    return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(stateObj.entity_id);
};


/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: computeStateName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateName", function() { return computeStateName; });
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

const computeStateName = (stateObj) => {
    return stateObj.attributes.friendly_name === undefined
        ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["computeObjectId"])(stateObj.entity_id).replace(/_/g, " ")
        : stateObj.attributes.friendly_name || "";
};


/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
    listen(node, eventName, methodName) {
        super.listen(node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    }
}
customElements.define("ha-icon", HaIcon);


/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




// Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */
const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      /**
   * Dispatches a custom event with an optional detail value.
   *
   * @param {string} type Name of event type.
   * @param {*=} detail Detail value containing event-specific
   *   payload.
   * @param {{ bubbles: (boolean|undefined),
               cancelable: (boolean|undefined),
                composed: (boolean|undefined) }=}
    *  options Object specifying options.  These may include:
    *  `bubbles` (boolean, defaults to `true`),
    *  `cancelable` (boolean, defaults to false), and
    *  `node` on which to fire the event (HTMLElement, defaults to `this`).
    * @return {Event} The new event that was fired.
    */
      fire(type, detail, options) {
        options = options || {};
        return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
      }
    }
);


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

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */
/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
      static get properties() {
        return {
          hass: Object,

          /**
           * Translates a string to the current `language`. Any parameters to the
           * string should be passed in order, as follows:
           * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
           */
          localize: {
            type: Function,
            computed: "__computeLocalize(hass.localize)",
          },
        };
      }

      __computeLocalize(localize) {
        return localize;
      }
    }
));


/***/ }),

/***/ "./src/panels/map/ha-entity-marker.js":
/*!********************************************!*\
  !*** ./src/panels/map/ha-entity-marker.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-image/iron-image */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");






/*
 * @appliesMixin EventsMixin
 */
class HaEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-positioning"></style>
      <style>
        .marker {
          vertical-align: top;
          position: relative;
          display: block;
          margin: 0 auto;
          width: 2.5em;
          text-align: center;
          height: 2.5em;
          line-height: 2.5em;
          font-size: 1.5em;
          border-radius: 50%;
          border: 0.1em solid
            var(--ha-marker-color, var(--default-primary-color));
          color: rgb(76, 76, 76);
          background-color: white;
        }
        iron-image {
          border-radius: 50%;
        }
      </style>

      <div class="marker">
        <template is="dom-if" if="[[entityName]]"
          >[[entityName]]</template
        >
        <template is="dom-if" if="[[entityPicture]]">
          <iron-image
            sizing="cover"
            class="fit"
            src="[[entityPicture]]"
          ></iron-image>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
      },

      entityId: {
        type: String,
        value: "",
      },

      entityName: {
        type: String,
        value: null,
      },

      entityPicture: {
        type: String,
        value: null,
      },
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", (ev) => this.badgeTap(ev));
  }

  badgeTap(ev) {
    ev.stopPropagation();
    if (this.entityId) {
      this.fire("hass-more-info", { entityId: this.entityId });
    }
  }
}

customElements.define("ha-entity-marker", HaEntityMarker);


/***/ }),

/***/ "./src/panels/map/ha-panel-map.js":
/*!****************************************!*\
  !*** ./src/panels/map/ha-panel-map.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _ha_entity_marker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-entity-marker */ "./src/panels/map/ha-entity-marker.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");














/*
 * @appliesMixin LocalizeMixin
 */
class HaPanelMap extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        #map {
          height: calc(100% - 64px);
          width: 100%;
          z-index: 0;
        }
      </style>

      <app-toolbar>
        <ha-menu-button hass="[[hass]]" narrow="[[narrow]]"></ha-menu-button>
        <div main-title>[[localize('panel.map')]]</div>
      </app-toolbar>

      <div id="map"></div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        observer: "drawEntities",
      },
      narrow: Boolean,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMap();
  }

  async loadMap() {
    [this._map, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_9__["setupLeafletMap"])(this.$.map);
    this.drawEntities(this.hass);
    this._map.invalidateSize();
    this.fitMap();
  }

  disconnectedCallback() {
    if (this._map) {
      this._map.remove();
    }
  }

  fitMap() {
    var bounds;

    if (this._mapItems.length === 0) {
      this._map.setView(
        new this.Leaflet.LatLng(
          this.hass.config.latitude,
          this.hass.config.longitude
        ),
        14
      );
    } else {
      bounds = new this.Leaflet.latLngBounds(
        this._mapItems.map((item) => item.getLatLng())
      );
      this._map.fitBounds(bounds.pad(0.5));
    }
  }

  drawEntities(hass) {
    /* eslint-disable vars-on-top */
    var map = this._map;
    if (!map) return;

    if (this._mapItems) {
      this._mapItems.forEach(function(marker) {
        marker.remove();
      });
    }
    var mapItems = (this._mapItems = []);

    Object.keys(hass.states).forEach((entityId) => {
      var entity = hass.states[entityId];
      var title = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(entity);

      if (
        (entity.attributes.hidden && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(entity) !== "zone") ||
        entity.state === "home" ||
        !("latitude" in entity.attributes) ||
        !("longitude" in entity.attributes)
      ) {
        return;
      }

      var icon;

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["computeStateDomain"])(entity) === "zone") {
        // DRAW ZONE
        if (entity.attributes.passive) return;

        // create icon
        var iconHTML = "";
        if (entity.attributes.icon) {
          const el = document.createElement("ha-icon");
          el.setAttribute("icon", entity.attributes.icon);
          iconHTML = el.outerHTML;
        } else {
          iconHTML = title;
        }

        icon = this.Leaflet.divIcon({
          html: iconHTML,
          iconSize: [24, 24],
          className: "",
        });

        // create market with the icon
        mapItems.push(
          this.Leaflet.marker(
            [entity.attributes.latitude, entity.attributes.longitude],
            {
              icon: icon,
              interactive: false,
              title: title,
            }
          ).addTo(map)
        );

        // create circle around it
        mapItems.push(
          this.Leaflet.circle(
            [entity.attributes.latitude, entity.attributes.longitude],
            {
              interactive: false,
              color: "#FF9800",
              radius: entity.attributes.radius,
            }
          ).addTo(map)
        );

        return;
      }

      // DRAW ENTITY
      // create icon
      var entityPicture = entity.attributes.entity_picture || "";
      var entityName = title
        .split(" ")
        .map(function(part) {
          return part.substr(0, 1);
        })
        .join("");
      /* Leaflet clones this element before adding it to the map. This messes up
         our Polymer object and we can't pass data through. Thus we hack like this. */
      icon = this.Leaflet.divIcon({
        html:
          "<ha-entity-marker entity-id='" +
          entity.entity_id +
          "' entity-name='" +
          entityName +
          "' entity-picture='" +
          entityPicture +
          "'></ha-entity-marker>",
        iconSize: [45, 45],
        className: "",
      });

      // create market with the icon
      mapItems.push(
        this.Leaflet.marker(
          [entity.attributes.latitude, entity.attributes.longitude],
          {
            icon: icon,
            title: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["computeStateName"])(entity),
          }
        ).addTo(map)
      );

      // create circle around if entity has accuracy
      if (entity.attributes.gps_accuracy) {
        mapItems.push(
          this.Leaflet.circle(
            [entity.attributes.latitude, entity.attributes.longitude],
            {
              interactive: false,
              color: "#0288D1",
              radius: entity.attributes.gps_accuracy,
            }
          ).addTo(map)
        );
      }
    });
  }
}

customElements.define("ha-panel-map", HaPanelMap);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtbWFwLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9vYmplY3RfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9ldmVudHMtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL21hcC9oYS1lbnRpdHktbWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvbWFwL2hhLXBhbmVsLW1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAgfSBmcm9tIFwibGVhZmxldFwiO1xuXG4vLyBTZXRzIHVwIGEgTGVhZmxldCBtYXAgb24gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50XG5leHBvcnQgdHlwZSBMZWFmbGV0TW9kdWxlVHlwZSA9IHR5cGVvZiBpbXBvcnQoXCJsZWFmbGV0XCIpO1xuXG5leHBvcnQgY29uc3Qgc2V0dXBMZWFmbGV0TWFwID0gYXN5bmMgKFxuICBtYXBFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGFya01vZGUgPSBmYWxzZVxuKTogUHJvbWlzZTxbTWFwLCBMZWFmbGV0TW9kdWxlVHlwZV0+ID0+IHtcbiAgaWYgKCFtYXBFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc2V0dXAgTGVhZmxldCBtYXAgb24gZGlzY29ubmVjdGVkIGVsZW1lbnRcIik7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IExlYWZsZXQgPSAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGVhZmxldFwiICovIFwibGVhZmxldFwiKSkgYXMgTGVhZmxldE1vZHVsZVR5cGU7XG4gIExlYWZsZXQuSWNvbi5EZWZhdWx0LmltYWdlUGF0aCA9IFwiL3N0YXRpYy9pbWFnZXMvbGVhZmxldC9pbWFnZXMvXCI7XG5cbiAgY29uc3QgbWFwID0gTGVhZmxldC5tYXAobWFwRWxlbWVudCk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2xlYWZsZXQuY3NzXCIpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJyZWxcIiwgXCJzdHlsZXNoZWV0XCIpO1xuICBtYXBFbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICBtYXAuc2V0VmlldyhbNTIuMzczMTMzOSwgNC44OTAzMTQ3XSwgMTMpO1xuICBjcmVhdGVUaWxlTGF5ZXIoTGVhZmxldCwgZGFya01vZGUpLmFkZFRvKG1hcCk7XG5cbiAgcmV0dXJuIFttYXAsIExlYWZsZXRdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbGVMYXllciA9IChcbiAgbGVhZmxldDogTGVhZmxldE1vZHVsZVR5cGUsXG4gIGRhcmtNb2RlOiBib29sZWFuXG4pID0+IHtcbiAgcmV0dXJuIGxlYWZsZXQudGlsZUxheWVyKFxuICAgIGBodHRwczovL3tzfS5iYXNlbWFwcy5jYXJ0b2Nkbi5jb20vJHtcbiAgICAgIGRhcmtNb2RlID8gXCJkYXJrX2FsbFwiIDogXCJsaWdodF9hbGxcIlxuICAgIH0ve3p9L3t4fS97eX0ke2xlYWZsZXQuQnJvd3Nlci5yZXRpbmEgPyBcIkAyeC5wbmdcIiA6IFwiLnBuZ1wifWAsXG4gICAge1xuICAgICAgYXR0cmlidXRpb246XG4gICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXA8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vY2FydG8uY29tL2F0dHJpYnV0aW9uc1wiPkNBUlRPPC9hPicsXG4gICAgICBzdWJkb21haW5zOiBcImFiY2RcIixcbiAgICAgIG1pblpvb206IDAsXG4gICAgICBtYXhab29tOiAyMCxcbiAgICB9XG4gICk7XG59O1xuIiwiLyoqIENvbXB1dGUgdGhlIG9iamVjdCBJRCBvZiBhIHN0YXRlLiAqL1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVPYmplY3RJZCA9IChlbnRpdHlJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIGVudGl0eUlkLnN1YnN0cihlbnRpdHlJZC5pbmRleE9mKFwiLlwiKSArIDEpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURvbWFpbiA9IChzdGF0ZU9iajogSGFzc0VudGl0eSkgPT4ge1xuICByZXR1cm4gY29tcHV0ZURvbWFpbihzdGF0ZU9iai5lbnRpdHlfaWQpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjb21wdXRlT2JqZWN0SWQgfSBmcm9tIFwiLi9jb21wdXRlX29iamVjdF9pZFwiO1xuXG5leHBvcnQgY29uc3QgY29tcHV0ZVN0YXRlTmFtZSA9IChzdGF0ZU9iajogSGFzc0VudGl0eSk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmZyaWVuZGx5X25hbWUgPT09IHVuZGVmaW5lZFxuICAgID8gY29tcHV0ZU9iamVjdElkKHN0YXRlT2JqLmVudGl0eV9pZCkucmVwbGFjZSgvXy9nLCBcIiBcIilcbiAgICA6IHN0YXRlT2JqLmF0dHJpYnV0ZXMuZnJpZW5kbHlfbmFtZSB8fCBcIlwiO1xufTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuXG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbi8vIFBvbHltZXIgbGVnYWN5IGV2ZW50IGhlbHBlcnMgdXNlZCBjb3VydGVzeSBvZiB0aGUgUG9seW1lciBwcm9qZWN0LlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZVxuLy8gbWV0OlxuLy9cbi8vICAgICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHRcbi8vIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbi8vICAgICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuLy8gY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lclxuLy8gaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuLy8gZGlzdHJpYnV0aW9uLlxuLy8gICAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIEdvb2dsZSBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzXG4vLyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuLy8gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTXG4vLyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1Jcbi8vIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUXG4vLyBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCxcbi8vIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLFxuLy8gREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZXG4vLyBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUXG4vLyAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbi8vIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbi8qIEBwb2x5bWVyTWl4aW4gKi9cbmV4cG9ydCBjb25zdCBFdmVudHNNaXhpbiA9IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICAvKipcbiAgICogRGlzcGF0Y2hlcyBhIGN1c3RvbSBldmVudCB3aXRoIGFuIG9wdGlvbmFsIGRldGFpbCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgTmFtZSBvZiBldmVudCB0eXBlLlxuICAgKiBAcGFyYW0geyo9fSBkZXRhaWwgRGV0YWlsIHZhbHVlIGNvbnRhaW5pbmcgZXZlbnQtc3BlY2lmaWNcbiAgICogICBwYXlsb2FkLlxuICAgKiBAcGFyYW0ge3sgYnViYmxlczogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgIGNhbmNlbGFibGU6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IChib29sZWFufHVuZGVmaW5lZCkgfT19XG4gICAgKiAgb3B0aW9ucyBPYmplY3Qgc3BlY2lmeWluZyBvcHRpb25zLiAgVGhlc2UgbWF5IGluY2x1ZGU6XG4gICAgKiAgYGJ1YmJsZXNgIChib29sZWFuLCBkZWZhdWx0cyB0byBgdHJ1ZWApLFxuICAgICogIGBjYW5jZWxhYmxlYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gZmFsc2UpLCBhbmRcbiAgICAqICBgbm9kZWAgb24gd2hpY2ggdG8gZmlyZSB0aGUgZXZlbnQgKEhUTUxFbGVtZW50LCBkZWZhdWx0cyB0byBgdGhpc2ApLlxuICAgICogQHJldHVybiB7RXZlbnR9IFRoZSBuZXcgZXZlbnQgdGhhdCB3YXMgZmlyZWQuXG4gICAgKi9cbiAgICAgIGZpcmUodHlwZSwgZGV0YWlsLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICByZXR1cm4gZmlyZUV2ZW50KG9wdGlvbnMubm9kZSB8fCB0aGlzLCB0eXBlLCBkZXRhaWwsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWltYWdlL2lyb24taW1hZ2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFFbnRpdHlNYXJrZXIgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLXBvc2l0aW9uaW5nXCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLm1hcmtlciB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDIuNWVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDAuMWVtIHNvbGlkXG4gICAgICAgICAgICB2YXIoLS1oYS1tYXJrZXItY29sb3IsIHZhcigtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcikpO1xuICAgICAgICAgIGNvbG9yOiByZ2IoNzYsIDc2LCA3Nik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgaXJvbi1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWFya2VyXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlbnRpdHlOYW1lXV1cIlxuICAgICAgICAgID5bW2VudGl0eU5hbWVdXTwvdGVtcGxhdGVcbiAgICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZW50aXR5UGljdHVyZV1dXCI+XG4gICAgICAgICAgPGlyb24taW1hZ2VcbiAgICAgICAgICAgIHNpemluZz1cImNvdmVyXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZml0XCJcbiAgICAgICAgICAgIHNyYz1cIltbZW50aXR5UGljdHVyZV1dXCJcbiAgICAgICAgICA+PC9pcm9uLWltYWdlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBlbnRpdHlJZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5TmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcblxuICAgICAgZW50aXR5UGljdHVyZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHRoaXMuYmFkZ2VUYXAoZXYpKTtcbiAgfVxuXG4gIGJhZGdlVGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZW50aXR5SWQpIHtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuZW50aXR5SWQgfSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS1tYXJrZXJcIiwgSGFFbnRpdHlNYXJrZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tZW51LWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbmltcG9ydCBcIi4vaGEtZW50aXR5LW1hcmtlclwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgc2V0dXBMZWFmbGV0TWFwIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vc2V0dXAtbGVhZmxldC1tYXBcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVBhbmVsTWFwIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZVwiPlxuICAgICAgICAjbWFwIHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPGhhLW1lbnUtYnV0dG9uIGhhc3M9XCJbW2hhc3NdXVwiIG5hcnJvdz1cIltbbmFycm93XV1cIj48L2hhLW1lbnUtYnV0dG9uPlxuICAgICAgICA8ZGl2IG1haW4tdGl0bGU+W1tsb2NhbGl6ZSgncGFuZWwubWFwJyldXTwvZGl2PlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkcmF3RW50aXRpZXNcIixcbiAgICAgIH0sXG4gICAgICBuYXJyb3c6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5sb2FkTWFwKCk7XG4gIH1cblxuICBhc3luYyBsb2FkTWFwKCkge1xuICAgIFt0aGlzLl9tYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAodGhpcy4kLm1hcCk7XG4gICAgdGhpcy5kcmF3RW50aXRpZXModGhpcy5oYXNzKTtcbiAgICB0aGlzLl9tYXAuaW52YWxpZGF0ZVNpemUoKTtcbiAgICB0aGlzLmZpdE1hcCgpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgdGhpcy5fbWFwLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpdE1hcCgpIHtcbiAgICB2YXIgYm91bmRzO1xuXG4gICAgaWYgKHRoaXMuX21hcEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fbWFwLnNldFZpZXcoXG4gICAgICAgIG5ldyB0aGlzLkxlYWZsZXQuTGF0TG5nKFxuICAgICAgICAgIHRoaXMuaGFzcy5jb25maWcubGF0aXR1ZGUsXG4gICAgICAgICAgdGhpcy5oYXNzLmNvbmZpZy5sb25naXR1ZGVcbiAgICAgICAgKSxcbiAgICAgICAgMTRcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kcyA9IG5ldyB0aGlzLkxlYWZsZXQubGF0TG5nQm91bmRzKFxuICAgICAgICB0aGlzLl9tYXBJdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uZ2V0TGF0TG5nKCkpXG4gICAgICApO1xuICAgICAgdGhpcy5fbWFwLmZpdEJvdW5kcyhib3VuZHMucGFkKDAuNSkpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdFbnRpdGllcyhoYXNzKSB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgdmFycy1vbi10b3AgKi9cbiAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuICAgIGlmICghbWFwKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5fbWFwSXRlbXMpIHtcbiAgICAgIHRoaXMuX21hcEl0ZW1zLmZvckVhY2goZnVuY3Rpb24obWFya2VyKSB7XG4gICAgICAgIG1hcmtlci5yZW1vdmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgbWFwSXRlbXMgPSAodGhpcy5fbWFwSXRlbXMgPSBbXSk7XG5cbiAgICBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcykuZm9yRWFjaCgoZW50aXR5SWQpID0+IHtcbiAgICAgIHZhciBlbnRpdHkgPSBoYXNzLnN0YXRlc1tlbnRpdHlJZF07XG4gICAgICB2YXIgdGl0bGUgPSBjb21wdXRlU3RhdGVOYW1lKGVudGl0eSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKGVudGl0eS5hdHRyaWJ1dGVzLmhpZGRlbiAmJiBjb21wdXRlU3RhdGVEb21haW4oZW50aXR5KSAhPT0gXCJ6b25lXCIpIHx8XG4gICAgICAgIGVudGl0eS5zdGF0ZSA9PT0gXCJob21lXCIgfHxcbiAgICAgICAgIShcImxhdGl0dWRlXCIgaW4gZW50aXR5LmF0dHJpYnV0ZXMpIHx8XG4gICAgICAgICEoXCJsb25naXR1ZGVcIiBpbiBlbnRpdHkuYXR0cmlidXRlcylcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpY29uO1xuXG4gICAgICBpZiAoY29tcHV0ZVN0YXRlRG9tYWluKGVudGl0eSkgPT09IFwiem9uZVwiKSB7XG4gICAgICAgIC8vIERSQVcgWk9ORVxuICAgICAgICBpZiAoZW50aXR5LmF0dHJpYnV0ZXMucGFzc2l2ZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBpY29uXG4gICAgICAgIHZhciBpY29uSFRNTCA9IFwiXCI7XG4gICAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy5pY29uKSB7XG4gICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGEtaWNvblwiKTtcbiAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpY29uXCIsIGVudGl0eS5hdHRyaWJ1dGVzLmljb24pO1xuICAgICAgICAgIGljb25IVE1MID0gZWwub3V0ZXJIVE1MO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25IVE1MID0gdGl0bGU7XG4gICAgICAgIH1cblxuICAgICAgICBpY29uID0gdGhpcy5MZWFmbGV0LmRpdkljb24oe1xuICAgICAgICAgIGh0bWw6IGljb25IVE1MLFxuICAgICAgICAgIGljb25TaXplOiBbMjQsIDI0XSxcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBtYXJrZXQgd2l0aCB0aGUgaWNvblxuICAgICAgICBtYXBJdGVtcy5wdXNoKFxuICAgICAgICAgIHRoaXMuTGVhZmxldC5tYXJrZXIoXG4gICAgICAgICAgICBbZW50aXR5LmF0dHJpYnV0ZXMubGF0aXR1ZGUsIGVudGl0eS5hdHRyaWJ1dGVzLmxvbmdpdHVkZV0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGljb246IGljb24sXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICkuYWRkVG8obWFwKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBjaXJjbGUgYXJvdW5kIGl0XG4gICAgICAgIG1hcEl0ZW1zLnB1c2goXG4gICAgICAgICAgdGhpcy5MZWFmbGV0LmNpcmNsZShcbiAgICAgICAgICAgIFtlbnRpdHkuYXR0cmlidXRlcy5sYXRpdHVkZSwgZW50aXR5LmF0dHJpYnV0ZXMubG9uZ2l0dWRlXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjRkY5ODAwXCIsXG4gICAgICAgICAgICAgIHJhZGl1czogZW50aXR5LmF0dHJpYnV0ZXMucmFkaXVzLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICkuYWRkVG8obWFwKVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRFJBVyBFTlRJVFlcbiAgICAgIC8vIGNyZWF0ZSBpY29uXG4gICAgICB2YXIgZW50aXR5UGljdHVyZSA9IGVudGl0eS5hdHRyaWJ1dGVzLmVudGl0eV9waWN0dXJlIHx8IFwiXCI7XG4gICAgICB2YXIgZW50aXR5TmFtZSA9IHRpdGxlXG4gICAgICAgIC5zcGxpdChcIiBcIilcbiAgICAgICAgLm1hcChmdW5jdGlvbihwYXJ0KSB7XG4gICAgICAgICAgcmV0dXJuIHBhcnQuc3Vic3RyKDAsIDEpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgIC8qIExlYWZsZXQgY2xvbmVzIHRoaXMgZWxlbWVudCBiZWZvcmUgYWRkaW5nIGl0IHRvIHRoZSBtYXAuIFRoaXMgbWVzc2VzIHVwXG4gICAgICAgICBvdXIgUG9seW1lciBvYmplY3QgYW5kIHdlIGNhbid0IHBhc3MgZGF0YSB0aHJvdWdoLiBUaHVzIHdlIGhhY2sgbGlrZSB0aGlzLiAqL1xuICAgICAgaWNvbiA9IHRoaXMuTGVhZmxldC5kaXZJY29uKHtcbiAgICAgICAgaHRtbDpcbiAgICAgICAgICBcIjxoYS1lbnRpdHktbWFya2VyIGVudGl0eS1pZD0nXCIgK1xuICAgICAgICAgIGVudGl0eS5lbnRpdHlfaWQgK1xuICAgICAgICAgIFwiJyBlbnRpdHktbmFtZT0nXCIgK1xuICAgICAgICAgIGVudGl0eU5hbWUgK1xuICAgICAgICAgIFwiJyBlbnRpdHktcGljdHVyZT0nXCIgK1xuICAgICAgICAgIGVudGl0eVBpY3R1cmUgK1xuICAgICAgICAgIFwiJz48L2hhLWVudGl0eS1tYXJrZXI+XCIsXG4gICAgICAgIGljb25TaXplOiBbNDUsIDQ1XSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIGNyZWF0ZSBtYXJrZXQgd2l0aCB0aGUgaWNvblxuICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgdGhpcy5MZWFmbGV0Lm1hcmtlcihcbiAgICAgICAgICBbZW50aXR5LmF0dHJpYnV0ZXMubGF0aXR1ZGUsIGVudGl0eS5hdHRyaWJ1dGVzLmxvbmdpdHVkZV0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogaWNvbixcbiAgICAgICAgICAgIHRpdGxlOiBjb21wdXRlU3RhdGVOYW1lKGVudGl0eSksXG4gICAgICAgICAgfVxuICAgICAgICApLmFkZFRvKG1hcClcbiAgICAgICk7XG5cbiAgICAgIC8vIGNyZWF0ZSBjaXJjbGUgYXJvdW5kIGlmIGVudGl0eSBoYXMgYWNjdXJhY3lcbiAgICAgIGlmIChlbnRpdHkuYXR0cmlidXRlcy5ncHNfYWNjdXJhY3kpIHtcbiAgICAgICAgbWFwSXRlbXMucHVzaChcbiAgICAgICAgICB0aGlzLkxlYWZsZXQuY2lyY2xlKFxuICAgICAgICAgICAgW2VudGl0eS5hdHRyaWJ1dGVzLmxhdGl0dWRlLCBlbnRpdHkuYXR0cmlidXRlcy5sb25naXR1ZGVdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMjg4RDFcIixcbiAgICAgICAgICAgICAgcmFkaXVzOiBlbnRpdHkuYXR0cmlidXRlcy5ncHNfYWNjdXJhY3ksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKS5hZGRUbyhtYXApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFuZWwtbWFwXCIsIEhhUGFuZWxNYXApO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBRUE7QUFHQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=