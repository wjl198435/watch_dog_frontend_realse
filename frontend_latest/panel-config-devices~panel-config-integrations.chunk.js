(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-config-devices~panel-config-integrations"],{

/***/ "./src/common/util/render-status.ts":
/*!******************************************!*\
  !*** ./src/common/util/render-status.ts ***!
  \******************************************/
/*! exports provided: afterNextRender, nextRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "afterNextRender", function() { return afterNextRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextRender", function() { return nextRender; });
const afterNextRender = (cb) => {
    requestAnimationFrame(() => setTimeout(cb, 0));
};
const nextRender = () => {
    return new Promise((resolve) => {
        afterNextRender(resolve);
    });
};


/***/ }),

/***/ "./src/components/entity/ha-state-icon.js":
/*!************************************************!*\
  !*** ./src/components/entity/ha-state-icon.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");






class HaStateIcon extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object,
      },
    };
  }

  computeIcon(stateObj) {
    return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["stateIcon"])(stateObj);
  }
}

customElements.define("ha-state-icon", HaStateIcon);


/***/ }),

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const createAreaRegistryEntry = (hass, values) => hass.callWS(Object.assign({ type: "config/area_registry/create" }, values));
const updateAreaRegistryEntry = (hass, areaId, updates) => hass.callWS(Object.assign({ type: "config/area_registry/update", area_id: areaId }, updates));
const deleteAreaRegistryEntry = (hass, areaId) => hass.callWS({
    type: "config/area_registry/delete",
    area_id: areaId,
});
const fetchAreaRegistry = (conn) => conn
    .sendMessagePromise({
    type: "config/area_registry/list",
})
    .then((areas) => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));
const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then((areas) => store.setState(areas, true)), 500, true), "area_registry_updated");
const subscribeAreaRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);


/***/ }),

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: getConfigEntries, deleteConfigEntry, getConfigEntrySystemOptions, updateConfigEntrySystemOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigEntry", function() { return deleteConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntrySystemOptions", function() { return getConfigEntrySystemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntrySystemOptions", function() { return updateConfigEntrySystemOptions; });
const getConfigEntries = (hass) => hass.callApi("GET", "config/config_entries/entry");
const deleteConfigEntry = (hass, configEntryId) => hass.callApi("DELETE", `config/config_entries/entry/${configEntryId}`);
const getConfigEntrySystemOptions = (hass, configEntryId) => hass.callWS({
    type: "config_entries/system_options/list",
    entry_id: configEntryId,
});
const updateConfigEntrySystemOptions = (hass, configEntryId, params) => hass.callWS(Object.assign({ type: "config_entries/system_options/update", entry_id: configEntryId }, params));


/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (hass, entry) => {
    if (entry.name) {
        return entry.name;
    }
    const state = hass.states[entry.entity_id];
    return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({ type: "config/entity_registry/update", entity_id: entityId }, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
    type: "config/entity_registry/remove",
    entity_id: entityId,
});
const fetchEntityRegistry = (conn) => conn.sendMessagePromise({
    type: "config/entity_registry/list",
});
const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then((entities) => store.setState(entities, true)), 500, true), "entity_registry_updated");
const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);


/***/ }),

/***/ "./src/panels/config/devices/ha-devices-data-table.ts":
/*!************************************************************!*\
  !*** ./src/panels/config/devices/ha-devices-data-table.ts ***!
  \************************************************************/
/*! exports provided: HaDevicesDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDevicesDataTable", function() { return HaDevicesDataTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");







let HaDevicesDataTable = class HaDevicesDataTable extends lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"] {
    constructor() {
        super(...arguments);
        this.narrow = false;
        this._devices = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])((devices, entries, entities, areas, domain, localize) => {
            // Some older installations might have devices pointing at invalid entryIDs
            // So we guard for that.
            let outputDevices = devices;
            const deviceLookup = {};
            for (const device of devices) {
                deviceLookup[device.id] = device;
            }
            const deviceEntityLookup = {};
            for (const entity of entities) {
                if (!entity.device_id) {
                    continue;
                }
                if (!(entity.device_id in deviceEntityLookup)) {
                    deviceEntityLookup[entity.device_id] = [];
                }
                deviceEntityLookup[entity.device_id].push(entity);
            }
            const entryLookup = {};
            for (const entry of entries) {
                entryLookup[entry.entry_id] = entry;
            }
            const areaLookup = {};
            for (const area of areas) {
                areaLookup[area.area_id] = area;
            }
            if (domain) {
                outputDevices = outputDevices.filter((device) => device.config_entries.find((entryId) => entryId in entryLookup && entryLookup[entryId].domain === domain));
            }
            outputDevices = outputDevices.map((device) => {
                return Object.assign(Object.assign({}, device), { name: device.name_by_user ||
                        device.name ||
                        this._fallbackDeviceName(device.id, deviceEntityLookup) ||
                        "No name", model: device.model || "<unknown>", manufacturer: device.manufacturer || "<unknown>", area: device.area_id ? areaLookup[device.area_id].name : "No area", integration: device.config_entries.length
                        ? device.config_entries
                            .filter((entId) => entId in entryLookup)
                            .map((entId) => localize(`component.${entryLookup[entId].domain}.config.title`) || entryLookup[entId].domain)
                            .join(", ")
                        : "No integration", battery_entity: this._batteryEntity(device.id, deviceEntityLookup) });
            });
            return outputDevices;
        });
        this._columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])((narrow) => narrow
            ? {
                name: {
                    title: "Device",
                    sortable: true,
                    filterKey: "name",
                    filterable: true,
                    direction: "asc",
                    template: (name, device) => {
                        const battery = device.battery_entity
                            ? this.hass.states[device.battery_entity]
                            : undefined;
                        // Have to work on a nice layout for mobile
                        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                  ${name}<br />
                  ${device.area} | ${device.integration}<br />
                  ${battery
                            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                        ${battery.state}%
                        <ha-state-icon
                          .hass=${this.hass}
                          .stateObj=${battery}
                        ></ha-state-icon>
                      `
                            : ""}
                `;
                    },
                },
            }
            : {
                name: {
                    title: "Device",
                    sortable: true,
                    filterable: true,
                    direction: "asc",
                },
                manufacturer: {
                    title: "Manufacturer",
                    sortable: true,
                    filterable: true,
                },
                model: {
                    title: "Model",
                    sortable: true,
                    filterable: true,
                },
                area: {
                    title: "Area",
                    sortable: true,
                    filterable: true,
                },
                integration: {
                    title: "Integration",
                    sortable: true,
                    filterable: true,
                },
                battery_entity: {
                    title: "Battery",
                    sortable: true,
                    type: "numeric",
                    template: (batteryEntity) => {
                        const battery = batteryEntity
                            ? this.hass.states[batteryEntity]
                            : undefined;
                        return battery
                            ? lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                      ${battery.state}%
                      <ha-state-icon
                        .hass=${this.hass}
                        .stateObj=${battery}
                      ></ha-state-icon>
                    `
                            : lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
                      -
                    `;
                    },
                },
            });
    }
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_4__["html"] `
      <ha-data-table
        .columns=${this._columns(this.narrow)}
        .data=${this._devices(this.devices, this.entries, this.entities, this.areas, this.domain, this.hass.localize)}
        @row-click=${this._handleRowClicked}
      ></ha-data-table>
    `;
    }
    _batteryEntity(deviceId, deviceEntityLookup) {
        const batteryEntity = (deviceEntityLookup[deviceId] || []).find((entity) => this.hass.states[entity.entity_id] &&
            this.hass.states[entity.entity_id].attributes.device_class === "battery");
        return batteryEntity ? batteryEntity.entity_id : undefined;
    }
    _fallbackDeviceName(deviceId, deviceEntityLookup) {
        for (const entity of deviceEntityLookup[deviceId] || []) {
            const stateObj = this.hass.states[entity.entity_id];
            if (stateObj) {
                return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj);
            }
        }
        return undefined;
    }
    _handleRowClicked(ev) {
        const deviceId = ev.detail.id;
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, `/config/devices/device/${deviceId}`);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "narrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "devices", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "entries", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "entities", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "areas", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()
], HaDevicesDataTable.prototype, "domain", void 0);
HaDevicesDataTable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-devices-data-table")
], HaDevicesDataTable);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWRldmljZXN+cGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9yZW5kZXItc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29uZmlnX2VudHJpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZW50aXR5X3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2RldmljZXMvaGEtZGV2aWNlcy1kYXRhLXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZnRlck5leHRSZW5kZXIgPSAoY2I6ICgpID0+IHZvaWQpOiB2b2lkID0+IHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHNldFRpbWVvdXQoY2IsIDApKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuZXh0UmVuZGVyID0gKCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBhZnRlck5leHRSZW5kZXIocmVzb2x2ZSk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2hhLWljb25cIjtcbmltcG9ydCB7IHN0YXRlSWNvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L3N0YXRlX2ljb25cIjtcblxuY2xhc3MgSGFTdGF0ZUljb24gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtaWNvbiBpY29uPVwiW1tjb21wdXRlSWNvbihzdGF0ZU9iaildXVwiPjwvaGEtaWNvbj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlSWNvbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZUljb24oc3RhdGVPYmopO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0YXRlLWljb25cIiwgSGFTdGF0ZUljb24pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5IHtcbiAgZW50cnlfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBjb25uZWN0aW9uX2NsYXNzOiBzdHJpbmc7XG4gIHN1cHBvcnRzX29wdGlvbnM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zIHtcbiAgZGlzYWJsZV9uZXdfZW50aXRpZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyaWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdFbnRyeVtdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeVwiKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0VudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPHtcbiAgICByZXF1aXJlX3Jlc3RhcnQ6IGJvb2xlYW47XG4gIH0+KFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnkvJHtjb25maWdFbnRyeUlkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsV1M8Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zPih7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy9saXN0XCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmcsXG4gIHBhcmFtczogUGFydGlhbDxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+XG4pID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL3VwZGF0ZVwiLFxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgZGlzYWJsZWRfYnk/OiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50cnkuZW50aXR5X2lkXTtcbiAgcmV0dXJuIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcz5cbik6IFByb21pc2U8RW50aXR5UmVnaXN0cnlFbnRyeT4gPT5cbiAgaGFzcy5jYWxsV1M8RW50aXR5UmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3JlbW92ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEVudGl0eVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRW50aXR5UmVnaXN0cnkoY29ubikudGhlbigoZW50aXRpZXMpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZW50aXRpZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImVudGl0eV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxFbnRpdHlSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2VudGl0eVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hFbnRpdHlSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLXN0YXRlLWljb25cIjtcblxuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7XG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgUm93Q2xpY2tlZEV2ZW50LFxuICBEYXRhVGFibGVSb3dEYXRhLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgRGV2aWNlUmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgQXJlYVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUm93RGF0YSBleHRlbmRzIERldmljZVJlZ2lzdHJ5RW50cnkge1xuICBkZXZpY2U/OiBEZXZpY2VSb3dEYXRhO1xuICBhcmVhPzogc3RyaW5nO1xuICBpbnRlZ3JhdGlvbj86IHN0cmluZztcbiAgYmF0dGVyeV9lbnRpdHk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlRW50aXR5TG9va3VwIHtcbiAgW2RldmljZUlkOiBzdHJpbmddOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlcy1kYXRhLXRhYmxlXCIpXG5leHBvcnQgY2xhc3MgSGFEZXZpY2VzRGF0YVRhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlcyE6IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGVudHJpZXMhOiBDb25maWdFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXRpZXMhOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhcmVhcyE6IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkb21haW4hOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGV2aWNlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgZGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdLFxuICAgICAgZW50cmllczogQ29uZmlnRW50cnlbXSxcbiAgICAgIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10sXG4gICAgICBhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIGRvbWFpbjogc3RyaW5nLFxuICAgICAgbG9jYWxpemU6IExvY2FsaXplRnVuY1xuICAgICkgPT4ge1xuICAgICAgLy8gU29tZSBvbGRlciBpbnN0YWxsYXRpb25zIG1pZ2h0IGhhdmUgZGV2aWNlcyBwb2ludGluZyBhdCBpbnZhbGlkIGVudHJ5SURzXG4gICAgICAvLyBTbyB3ZSBndWFyZCBmb3IgdGhhdC5cblxuICAgICAgbGV0IG91dHB1dERldmljZXM6IERldmljZVJvd0RhdGFbXSA9IGRldmljZXM7XG5cbiAgICAgIGNvbnN0IGRldmljZUxvb2t1cDogeyBbZGV2aWNlSWQ6IHN0cmluZ106IERldmljZVJlZ2lzdHJ5RW50cnkgfSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBkZXZpY2Ugb2YgZGV2aWNlcykge1xuICAgICAgICBkZXZpY2VMb29rdXBbZGV2aWNlLmlkXSA9IGRldmljZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdHlMb29rdXAgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XG4gICAgICAgIGlmICghZW50aXR5LmRldmljZV9pZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVudGl0eS5kZXZpY2VfaWQgaW4gZGV2aWNlRW50aXR5TG9va3VwKSkge1xuICAgICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5wdXNoKGVudGl0eSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5TG9va3VwOiB7IFtlbnRyeUlkOiBzdHJpbmddOiBDb25maWdFbnRyeSB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgZW50cnlMb29rdXBbZW50cnkuZW50cnlfaWRdID0gZW50cnk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFyZWFMb29rdXA6IHsgW2FyZWFJZDogc3RyaW5nXTogQXJlYVJlZ2lzdHJ5RW50cnkgfSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBhcmVhIG9mIGFyZWFzKSB7XG4gICAgICAgIGFyZWFMb29rdXBbYXJlYS5hcmVhX2lkXSA9IGFyZWE7XG4gICAgICB9XG5cbiAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgb3V0cHV0RGV2aWNlcyA9IG91dHB1dERldmljZXMuZmlsdGVyKChkZXZpY2UpID0+XG4gICAgICAgICAgZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmZpbmQoXG4gICAgICAgICAgICAoZW50cnlJZCkgPT5cbiAgICAgICAgICAgICAgZW50cnlJZCBpbiBlbnRyeUxvb2t1cCAmJiBlbnRyeUxvb2t1cFtlbnRyeUlkXS5kb21haW4gPT09IGRvbWFpblxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0RGV2aWNlcyA9IG91dHB1dERldmljZXMubWFwKChkZXZpY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5kZXZpY2UsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIGRldmljZS5uYW1lX2J5X3VzZXIgfHxcbiAgICAgICAgICAgIGRldmljZS5uYW1lIHx8XG4gICAgICAgICAgICB0aGlzLl9mYWxsYmFja0RldmljZU5hbWUoZGV2aWNlLmlkLCBkZXZpY2VFbnRpdHlMb29rdXApIHx8XG4gICAgICAgICAgICBcIk5vIG5hbWVcIixcbiAgICAgICAgICBtb2RlbDogZGV2aWNlLm1vZGVsIHx8IFwiPHVua25vd24+XCIsXG4gICAgICAgICAgbWFudWZhY3R1cmVyOiBkZXZpY2UubWFudWZhY3R1cmVyIHx8IFwiPHVua25vd24+XCIsXG4gICAgICAgICAgYXJlYTogZGV2aWNlLmFyZWFfaWQgPyBhcmVhTG9va3VwW2RldmljZS5hcmVhX2lkXS5uYW1lIDogXCJObyBhcmVhXCIsXG4gICAgICAgICAgaW50ZWdyYXRpb246IGRldmljZS5jb25maWdfZW50cmllcy5sZW5ndGhcbiAgICAgICAgICAgID8gZGV2aWNlLmNvbmZpZ19lbnRyaWVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZW50SWQpID0+IGVudElkIGluIGVudHJ5TG9va3VwKVxuICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAoZW50SWQpID0+XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIGBjb21wb25lbnQuJHtlbnRyeUxvb2t1cFtlbnRJZF0uZG9tYWlufS5jb25maWcudGl0bGVgXG4gICAgICAgICAgICAgICAgICAgICkgfHwgZW50cnlMb29rdXBbZW50SWRdLmRvbWFpblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpXG4gICAgICAgICAgICA6IFwiTm8gaW50ZWdyYXRpb25cIixcbiAgICAgICAgICBiYXR0ZXJ5X2VudGl0eTogdGhpcy5fYmF0dGVyeUVudGl0eShkZXZpY2UuaWQsIGRldmljZUVudGl0eUxvb2t1cCksXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG91dHB1dERldmljZXM7XG4gICAgfVxuICApO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKFxuICAgIChuYXJyb3c6IGJvb2xlYW4pOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT5cbiAgICAgIG5hcnJvd1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2aWNlXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJLZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAobmFtZSwgZGV2aWNlOiBEYXRhVGFibGVSb3dEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmF0dGVyeSA9IGRldmljZS5iYXR0ZXJ5X2VudGl0eVxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhc3Muc3RhdGVzW2RldmljZS5iYXR0ZXJ5X2VudGl0eV1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEhhdmUgdG8gd29yayBvbiBhIG5pY2UgbGF5b3V0IGZvciBtb2JpbGVcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7bmFtZX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICR7ZGV2aWNlLmFyZWF9IHwgJHtkZXZpY2UuaW50ZWdyYXRpb259PGJyIC8+XG4gICAgICAgICAgICAgICAgICAke2JhdHRlcnlcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtiYXR0ZXJ5LnN0YXRlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1zdGF0ZS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzIX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7YmF0dGVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLXN0YXRlLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2aWNlXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIk1hbnVmYWN0dXJlclwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB0aXRsZTogXCJNb2RlbFwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcmVhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFyZWFcIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZWdyYXRpb246IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSW50ZWdyYXRpb25cIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmF0dGVyeV9lbnRpdHk6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQmF0dGVyeVwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAoYmF0dGVyeUVudGl0eTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmF0dGVyeSA9IGJhdHRlcnlFbnRpdHlcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLnN0YXRlc1tiYXR0ZXJ5RW50aXR5XVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhdHRlcnlcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAke2JhdHRlcnkuc3RhdGV9JVxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1zdGF0ZS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtiYXR0ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgID48L2hhLXN0YXRlLWljb24+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1kYXRhLXRhYmxlXG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdyl9XG4gICAgICAgIC5kYXRhPSR7dGhpcy5fZGV2aWNlcyhcbiAgICAgICAgICB0aGlzLmRldmljZXMsXG4gICAgICAgICAgdGhpcy5lbnRyaWVzLFxuICAgICAgICAgIHRoaXMuZW50aXRpZXMsXG4gICAgICAgICAgdGhpcy5hcmVhcyxcbiAgICAgICAgICB0aGlzLmRvbWFpbixcbiAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemVcbiAgICAgICAgKX1cbiAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX2hhbmRsZVJvd0NsaWNrZWR9XG4gICAgICA+PC9oYS1kYXRhLXRhYmxlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9iYXR0ZXJ5RW50aXR5KFxuICAgIGRldmljZUlkOiBzdHJpbmcsXG4gICAgZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdHlMb29rdXBcbiAgKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBiYXR0ZXJ5RW50aXR5ID0gKGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2VJZF0gfHwgW10pLmZpbmQoXG4gICAgICAoZW50aXR5KSA9PlxuICAgICAgICB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdICYmXG4gICAgICAgIHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0uYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgPT09IFwiYmF0dGVyeVwiXG4gICAgKTtcblxuICAgIHJldHVybiBiYXR0ZXJ5RW50aXR5ID8gYmF0dGVyeUVudGl0eS5lbnRpdHlfaWQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9mYWxsYmFja0RldmljZU5hbWUoXG4gICAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgICBkZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0eUxvb2t1cFxuICApOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2VJZF0gfHwgW10pIHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJvd0NsaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZGV2aWNlSWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvZGV2aWNlcy9kZXZpY2UvJHtkZXZpY2VJZH1gKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlcy1kYXRhLXRhYmxlXCI6IEhhRGV2aWNlc0RhdGFUYWJsZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQVdBO0FBU0E7QUFXQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVdBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBaUJBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFFQTtBQUVBO0FBbUJBO0FBRUE7QUFjQTtBQUFBOztBQUVBO0FBT0E7QUFTQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQW1EQTtBQWhEQTtBQUNBOztBQUVBO0FBQ0E7QUFRQTs7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6TkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQUNBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=