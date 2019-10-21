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
var afterNextRender = function (cb) {
    requestAnimationFrame(function () { return setTimeout(cb, 0); });
};
var nextRender = function () {
    return new Promise(function (resolve) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-icon icon=\"[[computeIcon(stateObj)]]\"></ha-icon>\n    "]);

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






var HaStateIcon =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaStateIcon, _PolymerElement);

  function HaStateIcon() {
    _classCallCheck(this, HaStateIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaStateIcon).apply(this, arguments));
  }

  _createClass(HaStateIcon, [{
    key: "computeIcon",
    value: function computeIcon(stateObj) {
      return Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["stateIcon"])(stateObj);
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
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return HaStateIcon;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-state-icon", HaStateIcon);

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");


var ironIconClass = customElements.get("iron-icon");
var loaded = false;
var HaIcon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIcon, _super);
    function HaIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIcon.prototype.listen = function (node, eventName, methodName) {
        _super.prototype.listen.call(this, node, eventName, methodName);
        if (!loaded && this._iconsetName === "mdi") {
            loaded = true;
            __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
        }
    };
    return HaIcon;
}(ironIconClass));

customElements.define("ha-icon", HaIcon);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");




var createAreaRegistryEntry = function (hass, values) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/area_registry/create" }, values));
};
var updateAreaRegistryEntry = function (hass, areaId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/area_registry/update", area_id: areaId }, updates));
};
var deleteAreaRegistryEntry = function (hass, areaId) {
    return hass.callWS({
        type: "config/area_registry/delete",
        area_id: areaId,
    });
};
var fetchAreaRegistry = function (conn) {
    return conn
        .sendMessagePromise({
        type: "config/area_registry/list",
    })
        .then(function (areas) { return areas.sort(function (ent1, ent2) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_2__["compare"])(ent1.name, ent2.name); }); });
};
var subscribeAreaRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
        return fetchAreaRegistry(conn).then(function (areas) { return store.setState(areas, true); });
    }, 500, true), "area_registry_updated");
};
var subscribeAreaRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var getConfigEntries = function (hass) {
    return hass.callApi("GET", "config/config_entries/entry");
};
var deleteConfigEntry = function (hass, configEntryId) {
    return hass.callApi("DELETE", "config/config_entries/entry/" + configEntryId);
};
var getConfigEntrySystemOptions = function (hass, configEntryId) {
    return hass.callWS({
        type: "config_entries/system_options/list",
        entry_id: configEntryId,
    });
};
var updateConfigEntrySystemOptions = function (hass, configEntryId, params) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config_entries/system_options/update", entry_id: configEntryId }, params));
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");




var computeEntityRegistryName = function (hass, entry) {
    if (entry.name) {
        return entry.name;
    }
    var state = hass.states[entry.entity_id];
    return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_2__["computeStateName"])(state) : null;
};
var updateEntityRegistryEntry = function (hass, entityId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/entity_registry/update", entity_id: entityId }, updates));
};
var removeEntityRegistryEntry = function (hass, entityId) {
    return hass.callWS({
        type: "config/entity_registry/remove",
        entity_id: entityId,
    });
};
var fetchEntityRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/entity_registry/list",
    });
};
var subscribeEntityRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_3__["debounce"])(function () {
        return fetchEntityRegistry(conn).then(function (entities) {
            return store.setState(entities, true);
        });
    }, 500, true), "entity_registry_updated");
};
var subscribeEntityRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);
};


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







var HaDevicesDataTable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDevicesDataTable, _super);
    function HaDevicesDataTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.narrow = false;
        _this._devices = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (devices, entries, entities, areas, domain, localize) {
            // Some older installations might have devices pointing at invalid entryIDs
            // So we guard for that.
            var outputDevices = devices;
            var deviceLookup = {};
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                deviceLookup[device.id] = device;
            }
            var deviceEntityLookup = {};
            for (var _a = 0, entities_1 = entities; _a < entities_1.length; _a++) {
                var entity = entities_1[_a];
                if (!entity.device_id) {
                    continue;
                }
                if (!(entity.device_id in deviceEntityLookup)) {
                    deviceEntityLookup[entity.device_id] = [];
                }
                deviceEntityLookup[entity.device_id].push(entity);
            }
            var entryLookup = {};
            for (var _b = 0, entries_1 = entries; _b < entries_1.length; _b++) {
                var entry = entries_1[_b];
                entryLookup[entry.entry_id] = entry;
            }
            var areaLookup = {};
            for (var _c = 0, areas_1 = areas; _c < areas_1.length; _c++) {
                var area = areas_1[_c];
                areaLookup[area.area_id] = area;
            }
            if (domain) {
                outputDevices = outputDevices.filter(function (device) {
                    return device.config_entries.find(function (entryId) {
                        return entryId in entryLookup && entryLookup[entryId].domain === domain;
                    });
                });
            }
            outputDevices = outputDevices.map(function (device) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, device), { name: device.name_by_user ||
                        device.name ||
                        _this._fallbackDeviceName(device.id, deviceEntityLookup) ||
                        "No name", model: device.model || "<unknown>", manufacturer: device.manufacturer || "<unknown>", area: device.area_id ? areaLookup[device.area_id].name : "No area", integration: device.config_entries.length
                        ? device.config_entries
                            .filter(function (entId) { return entId in entryLookup; })
                            .map(function (entId) {
                            return localize("component." + entryLookup[entId].domain + ".config.title") || entryLookup[entId].domain;
                        })
                            .join(", ")
                        : "No integration", battery_entity: _this._batteryEntity(device.id, deviceEntityLookup) });
            });
            return outputDevices;
        });
        _this._columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (narrow) {
            return narrow
                ? {
                    name: {
                        title: "Device",
                        sortable: true,
                        filterKey: "name",
                        filterable: true,
                        direction: "asc",
                        template: function (name, device) {
                            var battery = device.battery_entity
                                ? _this.hass.states[device.battery_entity]
                                : undefined;
                            // Have to work on a nice layout for mobile
                            return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  ", "<br />\n                  ", " | ", "<br />\n                  ", "\n                "], ["\n                  ", "<br />\n                  ", " | ", "<br />\n                  ",
                                "\n                "])), name, device.area, device.integration, battery
                                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        ", "%\n                        <ha-state-icon\n                          .hass=", "\n                          .stateObj=", "\n                        ></ha-state-icon>\n                      "], ["\n                        ", "%\n                        <ha-state-icon\n                          .hass=", "\n                          .stateObj=", "\n                        ></ha-state-icon>\n                      "])), battery.state, _this.hass, battery) : "");
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
                        template: function (batteryEntity) {
                            var battery = batteryEntity
                                ? _this.hass.states[batteryEntity]
                                : undefined;
                            return battery
                                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      ", "%\n                      <ha-state-icon\n                        .hass=", "\n                        .stateObj=", "\n                      ></ha-state-icon>\n                    "], ["\n                      ", "%\n                      <ha-state-icon\n                        .hass=", "\n                        .stateObj=", "\n                      ></ha-state-icon>\n                    "])), battery.state, _this.hass, battery) : Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      -\n                    "], ["\n                      -\n                    "])));
                        },
                    },
                };
        });
        return _this;
    }
    HaDevicesDataTable.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-data-table\n        .columns=", "\n        .data=", "\n        @row-click=", "\n      ></ha-data-table>\n    "], ["\n      <ha-data-table\n        .columns=", "\n        .data=",
            "\n        @row-click=", "\n      ></ha-data-table>\n    "])), this._columns(this.narrow), this._devices(this.devices, this.entries, this.entities, this.areas, this.domain, this.hass.localize), this._handleRowClicked);
    };
    HaDevicesDataTable.prototype._batteryEntity = function (deviceId, deviceEntityLookup) {
        var _this = this;
        var batteryEntity = (deviceEntityLookup[deviceId] || []).find(function (entity) {
            return _this.hass.states[entity.entity_id] &&
                _this.hass.states[entity.entity_id].attributes.device_class === "battery";
        });
        return batteryEntity ? batteryEntity.entity_id : undefined;
    };
    HaDevicesDataTable.prototype._fallbackDeviceName = function (deviceId, deviceEntityLookup) {
        for (var _i = 0, _a = deviceEntityLookup[deviceId] || []; _i < _a.length; _i++) {
            var entity = _a[_i];
            var stateObj = this.hass.states[entity.entity_id];
            if (stateObj) {
                return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_6__["computeStateName"])(stateObj);
            }
        }
        return undefined;
    };
    HaDevicesDataTable.prototype._handleRowClicked = function (ev) {
        var deviceId = ev.detail.id;
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(this, "/config/devices/device/" + deviceId);
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
    return HaDevicesDataTable;
}(lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY29uZmlnLWRldmljZXN+cGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9yZW5kZXItc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1zdGF0ZS1pY29uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXJlYV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb25maWdfZW50cmllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9lbnRpdHlfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9kZXZpY2VzL2hhLWRldmljZXMtZGF0YS10YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYWZ0ZXJOZXh0UmVuZGVyID0gKGNiOiAoKSA9PiB2b2lkKTogdm9pZCA9PiB7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzZXRUaW1lb3V0KGNiLCAwKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbmV4dFJlbmRlciA9ICgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHJlc29sdmUpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1pY29uXCI7XG5pbXBvcnQgeyBzdGF0ZUljb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9pY29uXCI7XG5cbmNsYXNzIEhhU3RhdGVJY29uIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWljb24gaWNvbj1cIltbY29tcHV0ZUljb24oc3RhdGVPYmopXV1cIj48L2hhLWljb24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUljb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVJY29uKHN0YXRlT2JqKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1zdGF0ZS1pY29uXCIsIEhhU3RhdGVJY29uKTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5IHtcbiAgZW50cnlfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBjb25uZWN0aW9uX2NsYXNzOiBzdHJpbmc7XG4gIHN1cHBvcnRzX29wdGlvbnM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zIHtcbiAgZGlzYWJsZV9uZXdfZW50aXRpZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyaWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdFbnRyeVtdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeVwiKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0VudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPHtcbiAgICByZXF1aXJlX3Jlc3RhcnQ6IGJvb2xlYW47XG4gIH0+KFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnkvJHtjb25maWdFbnRyeUlkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsV1M8Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zPih7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy9saXN0XCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmcsXG4gIHBhcmFtczogUGFydGlhbDxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+XG4pID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL3VwZGF0ZVwiLFxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlSZWdpc3RyeUVudHJ5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcGxhdGZvcm06IHN0cmluZztcbiAgY29uZmlnX2VudHJ5X2lkPzogc3RyaW5nO1xuICBkZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkX2J5OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnlVcGRhdGVQYXJhbXMge1xuICBuYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgZGlzYWJsZWRfYnk/OiBzdHJpbmcgfCBudWxsO1xuICBuZXdfZW50aXR5X2lkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZUVudGl0eVJlZ2lzdHJ5TmFtZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50cnk6IEVudGl0eVJlZ2lzdHJ5RW50cnlcbik6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAoZW50cnkubmFtZSkge1xuICAgIHJldHVybiBlbnRyeS5uYW1lO1xuICB9XG4gIGNvbnN0IHN0YXRlID0gaGFzcy5zdGF0ZXNbZW50cnkuZW50aXR5X2lkXTtcbiAgcmV0dXJuIHN0YXRlID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZSkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8RW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcz5cbik6IFByb21pc2U8RW50aXR5UmVnaXN0cnlFbnRyeT4gPT5cbiAgaGFzcy5jYWxsV1M8RW50aXR5UmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3JlbW92ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEVudGl0eVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRW50aXR5UmVnaXN0cnkoY29ubikudGhlbigoZW50aXRpZXMpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZW50aXRpZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImVudGl0eV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxFbnRpdHlSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2VudGl0eVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hFbnRpdHlSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgZGVkdXBpbmdNaXhpbiB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9taXhpblwiO1xuLyoqXG4gKiBQb2x5bWVyIE1peGluIHRvIGVuYWJsZSBhIGxvY2FsaXplIGZ1bmN0aW9uIHBvd2VyZWQgYnkgbGFuZ3VhZ2UvcmVzb3VyY2VzIGZyb20gaGFzcyBvYmplY3QuXG4gKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgZGVmYXVsdCBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFRyYW5zbGF0ZXMgYSBzdHJpbmcgdG8gdGhlIGN1cnJlbnQgYGxhbmd1YWdlYC4gQW55IHBhcmFtZXRlcnMgdG8gdGhlXG4gICAgICAgICAgICogc3RyaW5nIHNob3VsZCBiZSBwYXNzZWQgaW4gb3JkZXIsIGFzIGZvbGxvd3M6XG4gICAgICAgICAgICogYGxvY2FsaXplKHN0cmluZ0tleSwgcGFyYW0xTmFtZSwgcGFyYW0xVmFsdWUsIHBhcmFtMk5hbWUsIHBhcmFtMlZhbHVlKWBcbiAgICAgICAgICAgKi9cbiAgICAgICAgICBsb2NhbGl6ZToge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBjb21wdXRlZDogXCJfX2NvbXB1dGVMb2NhbGl6ZShoYXNzLmxvY2FsaXplKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIF9fY29tcHV0ZUxvY2FsaXplKGxvY2FsaXplKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZW50aXR5L2hhLXN0YXRlLWljb25cIjtcblxuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5cbmltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBwcm9wZXJ0eSxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7XG4gIERhdGFUYWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgUm93Q2xpY2tlZEV2ZW50LFxuICBEYXRhVGFibGVSb3dEYXRhLFxufSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgRGV2aWNlUmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgQ29uZmlnRW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgQXJlYVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBuYXZpZ2F0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbmF2aWdhdGVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUm93RGF0YSBleHRlbmRzIERldmljZVJlZ2lzdHJ5RW50cnkge1xuICBkZXZpY2U/OiBEZXZpY2VSb3dEYXRhO1xuICBhcmVhPzogc3RyaW5nO1xuICBpbnRlZ3JhdGlvbj86IHN0cmluZztcbiAgYmF0dGVyeV9lbnRpdHk/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlRW50aXR5TG9va3VwIHtcbiAgW2RldmljZUlkOiBzdHJpbmddOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG59XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZGV2aWNlcy1kYXRhLXRhYmxlXCIpXG5leHBvcnQgY2xhc3MgSGFEZXZpY2VzRGF0YVRhYmxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyA9IGZhbHNlO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZGV2aWNlcyE6IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGVudHJpZXMhOiBDb25maWdFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXRpZXMhOiBFbnRpdHlSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBhcmVhcyE6IEFyZWFSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBkb21haW4hOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfZGV2aWNlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgZGV2aWNlczogRGV2aWNlUmVnaXN0cnlFbnRyeVtdLFxuICAgICAgZW50cmllczogQ29uZmlnRW50cnlbXSxcbiAgICAgIGVudGl0aWVzOiBFbnRpdHlSZWdpc3RyeUVudHJ5W10sXG4gICAgICBhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSxcbiAgICAgIGRvbWFpbjogc3RyaW5nLFxuICAgICAgbG9jYWxpemU6IExvY2FsaXplRnVuY1xuICAgICkgPT4ge1xuICAgICAgLy8gU29tZSBvbGRlciBpbnN0YWxsYXRpb25zIG1pZ2h0IGhhdmUgZGV2aWNlcyBwb2ludGluZyBhdCBpbnZhbGlkIGVudHJ5SURzXG4gICAgICAvLyBTbyB3ZSBndWFyZCBmb3IgdGhhdC5cblxuICAgICAgbGV0IG91dHB1dERldmljZXM6IERldmljZVJvd0RhdGFbXSA9IGRldmljZXM7XG5cbiAgICAgIGNvbnN0IGRldmljZUxvb2t1cDogeyBbZGV2aWNlSWQ6IHN0cmluZ106IERldmljZVJlZ2lzdHJ5RW50cnkgfSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBkZXZpY2Ugb2YgZGV2aWNlcykge1xuICAgICAgICBkZXZpY2VMb29rdXBbZGV2aWNlLmlkXSA9IGRldmljZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdHlMb29rdXAgPSB7fTtcbiAgICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XG4gICAgICAgIGlmICghZW50aXR5LmRldmljZV9pZCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGVudGl0eS5kZXZpY2VfaWQgaW4gZGV2aWNlRW50aXR5TG9va3VwKSkge1xuICAgICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGRldmljZUVudGl0eUxvb2t1cFtlbnRpdHkuZGV2aWNlX2lkXS5wdXNoKGVudGl0eSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5TG9va3VwOiB7IFtlbnRyeUlkOiBzdHJpbmddOiBDb25maWdFbnRyeSB9ID0ge307XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgZW50cnlMb29rdXBbZW50cnkuZW50cnlfaWRdID0gZW50cnk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFyZWFMb29rdXA6IHsgW2FyZWFJZDogc3RyaW5nXTogQXJlYVJlZ2lzdHJ5RW50cnkgfSA9IHt9O1xuICAgICAgZm9yIChjb25zdCBhcmVhIG9mIGFyZWFzKSB7XG4gICAgICAgIGFyZWFMb29rdXBbYXJlYS5hcmVhX2lkXSA9IGFyZWE7XG4gICAgICB9XG5cbiAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgb3V0cHV0RGV2aWNlcyA9IG91dHB1dERldmljZXMuZmlsdGVyKChkZXZpY2UpID0+XG4gICAgICAgICAgZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmZpbmQoXG4gICAgICAgICAgICAoZW50cnlJZCkgPT5cbiAgICAgICAgICAgICAgZW50cnlJZCBpbiBlbnRyeUxvb2t1cCAmJiBlbnRyeUxvb2t1cFtlbnRyeUlkXS5kb21haW4gPT09IGRvbWFpblxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0RGV2aWNlcyA9IG91dHB1dERldmljZXMubWFwKChkZXZpY2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5kZXZpY2UsXG4gICAgICAgICAgbmFtZTpcbiAgICAgICAgICAgIGRldmljZS5uYW1lX2J5X3VzZXIgfHxcbiAgICAgICAgICAgIGRldmljZS5uYW1lIHx8XG4gICAgICAgICAgICB0aGlzLl9mYWxsYmFja0RldmljZU5hbWUoZGV2aWNlLmlkLCBkZXZpY2VFbnRpdHlMb29rdXApIHx8XG4gICAgICAgICAgICBcIk5vIG5hbWVcIixcbiAgICAgICAgICBtb2RlbDogZGV2aWNlLm1vZGVsIHx8IFwiPHVua25vd24+XCIsXG4gICAgICAgICAgbWFudWZhY3R1cmVyOiBkZXZpY2UubWFudWZhY3R1cmVyIHx8IFwiPHVua25vd24+XCIsXG4gICAgICAgICAgYXJlYTogZGV2aWNlLmFyZWFfaWQgPyBhcmVhTG9va3VwW2RldmljZS5hcmVhX2lkXS5uYW1lIDogXCJObyBhcmVhXCIsXG4gICAgICAgICAgaW50ZWdyYXRpb246IGRldmljZS5jb25maWdfZW50cmllcy5sZW5ndGhcbiAgICAgICAgICAgID8gZGV2aWNlLmNvbmZpZ19lbnRyaWVzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoZW50SWQpID0+IGVudElkIGluIGVudHJ5TG9va3VwKVxuICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAoZW50SWQpID0+XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIGBjb21wb25lbnQuJHtlbnRyeUxvb2t1cFtlbnRJZF0uZG9tYWlufS5jb25maWcudGl0bGVgXG4gICAgICAgICAgICAgICAgICAgICkgfHwgZW50cnlMb29rdXBbZW50SWRdLmRvbWFpblxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpXG4gICAgICAgICAgICA6IFwiTm8gaW50ZWdyYXRpb25cIixcbiAgICAgICAgICBiYXR0ZXJ5X2VudGl0eTogdGhpcy5fYmF0dGVyeUVudGl0eShkZXZpY2UuaWQsIGRldmljZUVudGl0eUxvb2t1cCksXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG91dHB1dERldmljZXM7XG4gICAgfVxuICApO1xuXG4gIHByaXZhdGUgX2NvbHVtbnMgPSBtZW1vaXplT25lKFxuICAgIChuYXJyb3c6IGJvb2xlYW4pOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPT5cbiAgICAgIG5hcnJvd1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2aWNlXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJLZXk6IFwibmFtZVwiLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAobmFtZSwgZGV2aWNlOiBEYXRhVGFibGVSb3dEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmF0dGVyeSA9IGRldmljZS5iYXR0ZXJ5X2VudGl0eVxuICAgICAgICAgICAgICAgICAgPyB0aGlzLmhhc3Muc3RhdGVzW2RldmljZS5iYXR0ZXJ5X2VudGl0eV1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIC8vIEhhdmUgdG8gd29yayBvbiBhIG5pY2UgbGF5b3V0IGZvciBtb2JpbGVcbiAgICAgICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICR7bmFtZX08YnIgLz5cbiAgICAgICAgICAgICAgICAgICR7ZGV2aWNlLmFyZWF9IHwgJHtkZXZpY2UuaW50ZWdyYXRpb259PGJyIC8+XG4gICAgICAgICAgICAgICAgICAke2JhdHRlcnlcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtiYXR0ZXJ5LnN0YXRlfSVcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoYS1zdGF0ZS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzIX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRlT2JqPSR7YmF0dGVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgID48L2hhLXN0YXRlLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2aWNlXCIsXG4gICAgICAgICAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiYXNjXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFudWZhY3R1cmVyOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIk1hbnVmYWN0dXJlclwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB0aXRsZTogXCJNb2RlbFwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcmVhOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIkFyZWFcIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZWdyYXRpb246IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiSW50ZWdyYXRpb25cIixcbiAgICAgICAgICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmF0dGVyeV9lbnRpdHk6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwiQmF0dGVyeVwiLFxuICAgICAgICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdHlwZTogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgIHRlbXBsYXRlOiAoYmF0dGVyeUVudGl0eTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmF0dGVyeSA9IGJhdHRlcnlFbnRpdHlcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5oYXNzLnN0YXRlc1tiYXR0ZXJ5RW50aXR5XVxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhdHRlcnlcbiAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAke2JhdHRlcnkuc3RhdGV9JVxuICAgICAgICAgICAgICAgICAgICAgIDxoYS1zdGF0ZS1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtiYXR0ZXJ5fVxuICAgICAgICAgICAgICAgICAgICAgID48L2hhLXN0YXRlLWljb24+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1kYXRhLXRhYmxlXG4gICAgICAgIC5jb2x1bW5zPSR7dGhpcy5fY29sdW1ucyh0aGlzLm5hcnJvdyl9XG4gICAgICAgIC5kYXRhPSR7dGhpcy5fZGV2aWNlcyhcbiAgICAgICAgICB0aGlzLmRldmljZXMsXG4gICAgICAgICAgdGhpcy5lbnRyaWVzLFxuICAgICAgICAgIHRoaXMuZW50aXRpZXMsXG4gICAgICAgICAgdGhpcy5hcmVhcyxcbiAgICAgICAgICB0aGlzLmRvbWFpbixcbiAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemVcbiAgICAgICAgKX1cbiAgICAgICAgQHJvdy1jbGljaz0ke3RoaXMuX2hhbmRsZVJvd0NsaWNrZWR9XG4gICAgICA+PC9oYS1kYXRhLXRhYmxlPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9iYXR0ZXJ5RW50aXR5KFxuICAgIGRldmljZUlkOiBzdHJpbmcsXG4gICAgZGV2aWNlRW50aXR5TG9va3VwOiBEZXZpY2VFbnRpdHlMb29rdXBcbiAgKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBiYXR0ZXJ5RW50aXR5ID0gKGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2VJZF0gfHwgW10pLmZpbmQoXG4gICAgICAoZW50aXR5KSA9PlxuICAgICAgICB0aGlzLmhhc3Muc3RhdGVzW2VudGl0eS5lbnRpdHlfaWRdICYmXG4gICAgICAgIHRoaXMuaGFzcy5zdGF0ZXNbZW50aXR5LmVudGl0eV9pZF0uYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MgPT09IFwiYmF0dGVyeVwiXG4gICAgKTtcblxuICAgIHJldHVybiBiYXR0ZXJ5RW50aXR5ID8gYmF0dGVyeUVudGl0eS5lbnRpdHlfaWQgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIF9mYWxsYmFja0RldmljZU5hbWUoXG4gICAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgICBkZXZpY2VFbnRpdHlMb29rdXA6IERldmljZUVudGl0eUxvb2t1cFxuICApOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIGRldmljZUVudGl0eUxvb2t1cFtkZXZpY2VJZF0gfHwgW10pIHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgIGlmIChzdGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJvd0NsaWNrZWQoZXY6IEN1c3RvbUV2ZW50KSB7XG4gICAgY29uc3QgZGV2aWNlSWQgPSAoZXYuZGV0YWlsIGFzIFJvd0NsaWNrZWRFdmVudCkuaWQ7XG4gICAgbmF2aWdhdGUodGhpcywgYC9jb25maWcvZGV2aWNlcy9kZXZpY2UvJHtkZXZpY2VJZH1gKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZGV2aWNlcy1kYXRhLXRhYmxlXCI6IEhhRGV2aWNlc0RhdGFUYWJsZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBOzs7QUFoQkE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7OztBQWJBO0FBQ0E7QUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBS0E7QUFJQTtBQUVBO0FBQUE7QUFBQTs7QUFlQTtBQVpBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFQTtBQUNBO0FBV0E7QUFJQTtBQUFBO0FBS0E7QUFLQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBR0E7QUFBQTtBQUhBO0FBVUE7QUFJQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUtBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBRUE7QUFDQTtBQWlCQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQU1BO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBREE7QUFIQTtBQVlBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFhQTtBQWhCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBRUE7QUFFQTtBQW1CQTtBQUVBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQU9BO0FBU0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBN0VBOztBQWdJQTtBQWhEQTtBQUNBO0FBVUE7QUFJQTtBQUVBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBeE5BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFDQTtBQTBOQTtBQUFBO0FBMU5BOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==