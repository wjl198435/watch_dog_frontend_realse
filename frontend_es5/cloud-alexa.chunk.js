(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-alexa"],{

/***/ "./src/common/entity/entity_filter.ts":
/*!********************************************!*\
  !*** ./src/common/entity/entity_filter.ts ***!
  \********************************************/
/*! exports provided: isEmptyFilter, generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyFilter", function() { return isEmptyFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

var isEmptyFilter = function (filter) {
    return filter.include_domains.length +
        filter.include_entities.length +
        filter.exclude_domains.length +
        filter.exclude_entities.length ===
        0;
};
var generateFilter = function (includeDomains, includeEntities, excludeDomains, excludeEntities) {
    var includeDomainsSet = new Set(includeDomains);
    var includeEntitiesSet = new Set(includeEntities);
    var excludeDomainsSet = new Set(excludeDomains);
    var excludeEntitiesSet = new Set(excludeEntities);
    var haveInclude = includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
    var haveExclude = excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0;
    // Case 1 - no includes or excludes - pass all entities
    if (!haveInclude && !haveExclude) {
        return function () { return true; };
    }
    // Case 2 - includes, no excludes - only include specified entities
    if (haveInclude && !haveExclude) {
        return function (entityId) {
            return includeEntitiesSet.has(entityId) ||
                includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
        };
    }
    // Case 3 - excludes, no includes - only exclude specified entities
    if (!haveInclude && haveExclude) {
        return function (entityId) {
            return !excludeEntitiesSet.has(entityId) &&
                !excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId));
        };
    }
    // Case 4 - both includes and excludes specified
    // Case 4a - include domain specified
    //  - if domain is included, pass if entity not excluded
    //  - if domain is not included, pass if entity is included
    // note: if both include and exclude domains specified,
    //   the exclude domains are ignored
    if (includeDomainsSet.size) {
        return function (entityId) {
            return includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId))
                ? !excludeEntitiesSet.has(entityId)
                : includeEntitiesSet.has(entityId);
        };
    }
    // Case 4b - exclude domain specified
    //  - if domain is excluded, pass if entity is included
    //  - if domain is not excluded, pass if entity not excluded
    if (excludeDomainsSet.size) {
        return function (entityId) {
            return excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["computeDomain"])(entityId))
                ? includeEntitiesSet.has(entityId)
                : !excludeEntitiesSet.has(entityId);
        };
    }
    // Case 4c - neither include or exclude domain specified
    //  - Only pass if entity is included.  Ignore entity excludes.
    return function (entityId) { return includeEntitiesSet.has(entityId); };
};


/***/ }),

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

/***/ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts":
/*!******************************************************************!*\
  !*** ./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts ***!
  \******************************************************************/
/*! exports provided: loadDomainTogglerDialog, showDomainTogglerDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDomainTogglerDialog", function() { return loadDomainTogglerDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDomainTogglerDialog", function() { return showDomainTogglerDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadDomainTogglerDialog = function () {
    return Promise.all(/*! import() | dialog-domain-toggler */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("dialog-domain-toggler")]).then(__webpack_require__.bind(null, /*! ./dialog-domain-toggler */ "./src/dialogs/domain-toggler/dialog-domain-toggler.ts"));
};
var showDomainTogglerDialog = function (element, dialogParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-domain-toggler",
        dialogImport: loadDomainTogglerDialog,
        dialogParams: dialogParams,
    });
};


/***/ }),

/***/ "./src/panels/config/cloud/alexa/cloud-alexa.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/cloud/alexa/cloud-alexa.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _data_alexa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../data/alexa */ "./src/data/alexa.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");

















var DEFAULT_CONFIG_EXPOSE = true;
var IGNORE_INTERFACES = ["Alexa.EndpointHealth"];
var configIsExposed = function (config) {
    return config.should_expose === undefined
        ? DEFAULT_CONFIG_EXPOSE
        : config.should_expose;
};
var CloudAlexa = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudAlexa, _super);
    function CloudAlexa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._entityConfigs = {};
        _this._popstateSyncAttached = false;
        _this._popstateReloadStatusAttached = false;
        _this._getEntityFilterFunc = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (filter) {
            return Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities);
        });
        return _this;
    }
    CloudAlexa.prototype.render = function () {
        var _this = this;
        if (this._entities === undefined) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hass-loading-screen></hass-loading-screen>\n      "], ["\n        <hass-loading-screen></hass-loading-screen>\n      "])));
        }
        var emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["isEmptyFilter"])(this.cloudStatus.alexa_entities);
        var filterFunc = this._getEntityFilterFunc(this.cloudStatus.alexa_entities);
        // We will only generate `isInitialExposed` during first render.
        // On each subsequent render we will use the same set so that cards
        // will not jump around when we change the exposed setting.
        var showInExposed = this._isInitialExposed || new Set();
        var trackExposed = this._isInitialExposed === undefined;
        var selected = 0;
        // On first render we decide which cards show in which category.
        // That way cards won't jump around when changing values.
        var exposedCards = [];
        var notExposedCards = [];
        this._entities.forEach(function (entity) {
            var stateObj = _this.hass.states[entity.entity_id];
            var config = _this._entityConfigs[entity.entity_id] || {};
            var isExposed = emptyFilter
                ? configIsExposed(config)
                : filterFunc(entity.entity_id);
            if (isExposed) {
                selected++;
                if (trackExposed) {
                    showInExposed.add(entity.entity_id);
                }
            }
            var target = showInExposed.has(entity.entity_id)
                ? exposedCards
                : notExposedCards;
            target.push(Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <ha-card>\n          <div class=\"card-content\">\n            <state-info\n              .hass=", "\n              .stateObj=", "\n              secondary-line\n              @click=", "\n            >\n              ", "\n            </state-info>\n            <ha-switch\n              .entityId=", "\n              .disabled=", "\n              .checked=", "\n              @change=", "\n            >\n              ", "\n            </ha-switch>\n          </div>\n        </ha-card>\n      "], ["\n        <ha-card>\n          <div class=\"card-content\">\n            <state-info\n              .hass=", "\n              .stateObj=", "\n              secondary-line\n              @click=", "\n            >\n              ",
                "\n            </state-info>\n            <ha-switch\n              .entityId=", "\n              .disabled=", "\n              .checked=", "\n              @change=", "\n            >\n              ", "\n            </ha-switch>\n          </div>\n        </ha-card>\n      "])), _this.hass, stateObj, _this._showMoreInfo, entity.interfaces
                .filter(function (ifc) { return !IGNORE_INTERFACES.includes(ifc); })
                .map(function (ifc) {
                return ifc.replace("Alexa.", "").replace("Controller", "");
            })
                .join(", "), entity.entity_id, !emptyFilter, isExposed, _this._exposeChanged, _this.hass.localize("ui.panel.config.cloud.alexa.expose")));
        });
        if (trackExposed) {
            this._isInitialExposed = showInExposed;
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage header=\"", "\">\n        <span slot=\"toolbar-icon\">\n          ", "", "\n        </span>\n        ", "\n        ", "\n          ", "\n          ", "\n        </div>\n      </hass-subpage>\n    "], ["\n      <hass-subpage header=\"",
            "\">\n        <span slot=\"toolbar-icon\">\n          ", "",
            "\n        </span>\n        ",
            "\n        ",
            "\n          ",
            "\n          ",
            "\n        </div>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.cloud.alexa.title"), selected, !this.narrow
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            selected\n          "], ["\n            selected\n          "]))) : "", emptyFilter
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  slot=\"toolbar-icon\"\n                  icon=\"hass:tune\"\n                  @click=", "\n                ></paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  slot=\"toolbar-icon\"\n                  icon=\"hass:tune\"\n                  @click=", "\n                ></paper-icon-button>\n              "])), this._openDomainToggler) : "", !emptyFilter
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"banner\">\n                  ", "\n                </div>\n              "], ["\n                <div class=\"banner\">\n                  ", "\n                </div>\n              "])), this.hass.localize("ui.panel.config.cloud.alexa.banner")) : "", exposedCards.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <h1>\n                    ", "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "], ["\n                  <h1>\n                    ",
                "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "])), this.hass.localize("ui.panel.config.cloud.alexa.exposed_entities"), exposedCards) : "", notExposedCards.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <h1>\n                    ", "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "], ["\n                  <h1>\n                    ",
                "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "])), this.hass.localize("ui.panel.config.cloud.alexa.not_exposed_entities"), notExposedCards) : "");
    };
    CloudAlexa.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._fetchData();
    };
    CloudAlexa.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("cloudStatus")) {
            this._entityConfigs = this.cloudStatus.prefs.alexa_entity_configs;
        }
    };
    CloudAlexa.prototype._fetchData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entities;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_data_alexa__WEBPACK_IMPORTED_MODULE_14__["fetchCloudAlexaEntities"])(this.hass)];
                    case 1:
                        entities = _a.sent();
                        entities.sort(function (a, b) {
                            var stateA = _this.hass.states[a.entity_id];
                            var stateB = _this.hass.states[b.entity_id];
                            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_15__["computeStateName"])(stateB) : b.entity_id);
                        });
                        this._entities = entities;
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudAlexa.prototype._showMoreInfo = function (ev) {
        var entityId = ev.currentTarget.stateObj.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "hass-more-info", { entityId: entityId });
    };
    CloudAlexa.prototype._exposeChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entityId, newExposed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entityId = ev.currentTarget.entityId;
                        newExposed = ev.target.checked;
                        return [4 /*yield*/, this._updateExposed(entityId, newExposed)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudAlexa.prototype._updateExposed = function (entityId, newExposed) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var curExposed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        curExposed = configIsExposed(this._entityConfigs[entityId] || {});
                        if (newExposed === curExposed) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._updateConfig(entityId, {
                                should_expose: newExposed,
                            })];
                    case 1:
                        _a.sent();
                        this._ensureEntitySync();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudAlexa.prototype._updateConfig = function (entityId, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var updatedConfig;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_9__["updateCloudAlexaEntityConfig"])(this.hass, entityId, values)];
                    case 1:
                        updatedConfig = _b.sent();
                        this._entityConfigs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._entityConfigs), (_a = {}, _a[entityId] = updatedConfig, _a));
                        this._ensureStatusReload();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudAlexa.prototype._openDomainToggler = function () {
        var _this = this;
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_13__["showDomainTogglerDialog"])(this, {
            domains: this._entities.map(function (entity) {
                return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__["computeDomain"])(entity.entity_id);
            }).filter(function (value, idx, self) { return self.indexOf(value) === idx; }),
            toggleDomain: function (domain, turnOn) {
                _this._entities.forEach(function (entity) {
                    if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_16__["computeDomain"])(entity.entity_id) === domain) {
                        _this._updateExposed(entity.entity_id, turnOn);
                    }
                });
            },
        });
    };
    CloudAlexa.prototype._ensureStatusReload = function () {
        if (this._popstateReloadStatusAttached) {
            return;
        }
        this._popstateReloadStatusAttached = true;
        // Cache parent because by the time popstate happens,
        // this element is detached
        var parent = this.parentElement;
        window.addEventListener("popstate", function () { return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(parent, "ha-refresh-cloud-status"); }, { once: true });
    };
    CloudAlexa.prototype._ensureEntitySync = function () {
        if (this._popstateSyncAttached) {
            return;
        }
        this._popstateSyncAttached = true;
        // Cache parent because by the time popstate happens,
        // this element is detached
        // const parent = this.parentElement!;
        window.addEventListener("popstate", function () {
            // We don't have anything yet.
            // showToast(parent, { message: "Synchronizing changes to Google." });
            // cloudSyncGoogleAssistant(this.hass);
        }, { once: true });
    };
    Object.defineProperty(CloudAlexa, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n      }\n      ha-switch {\n        clear: both;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      ha-switch {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    "], ["\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n      }\n      ha-switch {\n        clear: both;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      ha-switch {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexa.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexa.prototype, "cloudStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
    ], CloudAlexa.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexa.prototype, "_entities", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudAlexa.prototype, "_entityConfigs", void 0);
    CloudAlexa = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-alexa")
    ], CloudAlexa);
    return CloudAlexa;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYWxleGEuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RyaW5nL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9jb25maWcvY2xvdWQvYWxleGEvY2xvdWQtYWxleGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuL2NvbXB1dGVfZG9tYWluXCI7XG5cbmV4cG9ydCB0eXBlIEZpbHRlckZ1bmMgPSAoZW50aXR5SWQ6IHN0cmluZykgPT4gYm9vbGVhbjtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlGaWx0ZXIge1xuICBpbmNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBpbmNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbiAgZXhjbHVkZV9kb21haW5zOiBzdHJpbmdbXTtcbiAgZXhjbHVkZV9lbnRpdGllczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBjb25zdCBpc0VtcHR5RmlsdGVyID0gKGZpbHRlcjogRW50aXR5RmlsdGVyKSA9PlxuICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLmxlbmd0aCArXG4gICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLmxlbmd0aCArXG4gICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXMubGVuZ3RoID09PVxuICAwO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWx0ZXIgPSAoXG4gIGluY2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGluY2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdLFxuICBleGNsdWRlRG9tYWlucz86IHN0cmluZ1tdLFxuICBleGNsdWRlRW50aXRpZXM/OiBzdHJpbmdbXVxuKTogRmlsdGVyRnVuYyA9PiB7XG4gIGNvbnN0IGluY2x1ZGVEb21haW5zU2V0ID0gbmV3IFNldChpbmNsdWRlRG9tYWlucyk7XG4gIGNvbnN0IGluY2x1ZGVFbnRpdGllc1NldCA9IG5ldyBTZXQoaW5jbHVkZUVudGl0aWVzKTtcbiAgY29uc3QgZXhjbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVEb21haW5zKTtcbiAgY29uc3QgZXhjbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChleGNsdWRlRW50aXRpZXMpO1xuXG4gIGNvbnN0IGhhdmVJbmNsdWRlID0gaW5jbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgaW5jbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuICBjb25zdCBoYXZlRXhjbHVkZSA9IGV4Y2x1ZGVEb21haW5zU2V0LnNpemUgPiAwIHx8IGV4Y2x1ZGVFbnRpdGllc1NldC5zaXplID4gMDtcblxuICAvLyBDYXNlIDEgLSBubyBpbmNsdWRlcyBvciBleGNsdWRlcyAtIHBhc3MgYWxsIGVudGl0aWVzXG4gIGlmICghaGF2ZUluY2x1ZGUgJiYgIWhhdmVFeGNsdWRlKSB7XG4gICAgcmV0dXJuICgpID0+IHRydWU7XG4gIH1cblxuICAvLyBDYXNlIDIgLSBpbmNsdWRlcywgbm8gZXhjbHVkZXMgLSBvbmx5IGluY2x1ZGUgc3BlY2lmaWVkIGVudGl0aWVzXG4gIGlmIChoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgfHxcbiAgICAgIGluY2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSk7XG4gIH1cblxuICAvLyBDYXNlIDMgLSBleGNsdWRlcywgbm8gaW5jbHVkZXMgLSBvbmx5IGV4Y2x1ZGUgc3BlY2lmaWVkIGVudGl0aWVzXG4gIGlmICghaGF2ZUluY2x1ZGUgJiYgaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpICYmXG4gICAgICAhZXhjbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgNCAtIGJvdGggaW5jbHVkZXMgYW5kIGV4Y2x1ZGVzIHNwZWNpZmllZFxuICAvLyBDYXNlIDRhIC0gaW5jbHVkZSBkb21haW4gc3BlY2lmaWVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgbm90IGV4Y2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgaW5jbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vIG5vdGU6IGlmIGJvdGggaW5jbHVkZSBhbmQgZXhjbHVkZSBkb21haW5zIHNwZWNpZmllZCxcbiAgLy8gICB0aGUgZXhjbHVkZSBkb21haW5zIGFyZSBpZ25vcmVkXG4gIGlmIChpbmNsdWRlRG9tYWluc1NldC5zaXplKSB7XG4gICAgcmV0dXJuIChlbnRpdHlJZCkgPT5cbiAgICAgIGluY2x1ZGVEb21haW5zU2V0Lmhhcyhjb21wdXRlRG9tYWluKGVudGl0eUlkKSlcbiAgICAgICAgPyAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKTtcbiAgfVxuXG4gIC8vIENhc2UgNGIgLSBleGNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGV4Y2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZFxuICAvLyAgLSBpZiBkb21haW4gaXMgbm90IGV4Y2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgaWYgKGV4Y2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgZXhjbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpXG4gICAgICAgIDogIWV4Y2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YyAtIG5laXRoZXIgaW5jbHVkZSBvciBleGNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gT25seSBwYXNzIGlmIGVudGl0eSBpcyBpbmNsdWRlZC4gIElnbm9yZSBlbnRpdHkgZXhjbHVkZXMuXG4gIHJldHVybiAoZW50aXR5SWQpID0+IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xufTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhhRG9tYWluVG9nZ2xlckRpYWxvZ1BhcmFtcyB7XG4gIGRvbWFpbnM6IHN0cmluZ1tdO1xuICB0b2dnbGVEb21haW46IChkb21haW46IHN0cmluZywgdHVybk9uOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZERvbWFpblRvZ2dsZXJEaWFsb2cgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIiAqLyBcIi4vZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0RvbWFpblRvZ2dsZXJEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IEhhRG9tYWluVG9nZ2xlckRpYWxvZ1BhcmFtc1xuKTogdm9pZCA9PiB7XG4gIGZpcmVFdmVudChlbGVtZW50LCBcInNob3ctZGlhbG9nXCIsIHtcbiAgICBkaWFsb2dUYWc6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkRG9tYWluVG9nZ2xlckRpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXMsXG4gIH0pO1xufTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9sYXlvdXRzL2hhc3Mtc3VicGFnZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLWxvYWRpbmctc2NyZWVuXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWNhcmRcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENsb3VkU3RhdHVzTG9nZ2VkSW4sXG4gIENsb3VkUHJlZmVyZW5jZXMsXG4gIHVwZGF0ZUNsb3VkQWxleGFFbnRpdHlDb25maWcsXG4gIEFsZXhhRW50aXR5Q29uZmlnLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9jbG91ZFwiO1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVGaWx0ZXIsXG4gIGlzRW1wdHlGaWx0ZXIsXG4gIEVudGl0eUZpbHRlcixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZW50aXR5X2ZpbHRlclwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCB7IEFsZXhhRW50aXR5LCBmZXRjaENsb3VkQWxleGFFbnRpdGllcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2FsZXhhXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBIYVN3aXRjaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcblxuY29uc3QgREVGQVVMVF9DT05GSUdfRVhQT1NFID0gdHJ1ZTtcbmNvbnN0IElHTk9SRV9JTlRFUkZBQ0VTID0gW1wiQWxleGEuRW5kcG9pbnRIZWFsdGhcIl07XG5cbmNvbnN0IGNvbmZpZ0lzRXhwb3NlZCA9IChjb25maWc6IEFsZXhhRW50aXR5Q29uZmlnKSA9PlxuICBjb25maWcuc2hvdWxkX2V4cG9zZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBERUZBVUxUX0NPTkZJR19FWFBPU0VcbiAgICA6IGNvbmZpZy5zaG91bGRfZXhwb3NlO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLWFsZXhhXCIpXG5jbGFzcyBDbG91ZEFsZXhhIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgY2xvdWRTdGF0dXMhOiBDbG91ZFN0YXR1c0xvZ2dlZEluO1xuXG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG5cbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50aXRpZXM/OiBBbGV4YUVudGl0eVtdO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2VudGl0eUNvbmZpZ3M6IENsb3VkUHJlZmVyZW5jZXNbXCJhbGV4YV9lbnRpdHlfY29uZmlnc1wiXSA9IHt9O1xuICBwcml2YXRlIF9wb3BzdGF0ZVN5bmNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzSW5pdGlhbEV4cG9zZWQ/OiBTZXQ8c3RyaW5nPjtcblxuICBwcml2YXRlIF9nZXRFbnRpdHlGaWx0ZXJGdW5jID0gbWVtb2l6ZU9uZSgoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gICAgZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICBmaWx0ZXIuaW5jbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZW50aXRpZXMsXG4gICAgICBmaWx0ZXIuZXhjbHVkZV9kb21haW5zLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZW50aXRpZXNcbiAgICApXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbnRpdGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGhhc3MtbG9hZGluZy1zY3JlZW4+PC9oYXNzLWxvYWRpbmctc2NyZWVuPlxuICAgICAgYDtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlGaWx0ZXIgPSBpc0VtcHR5RmlsdGVyKHRoaXMuY2xvdWRTdGF0dXMuYWxleGFfZW50aXRpZXMpO1xuICAgIGNvbnN0IGZpbHRlckZ1bmMgPSB0aGlzLl9nZXRFbnRpdHlGaWx0ZXJGdW5jKFxuICAgICAgdGhpcy5jbG91ZFN0YXR1cy5hbGV4YV9lbnRpdGllc1xuICAgICk7XG5cbiAgICAvLyBXZSB3aWxsIG9ubHkgZ2VuZXJhdGUgYGlzSW5pdGlhbEV4cG9zZWRgIGR1cmluZyBmaXJzdCByZW5kZXIuXG4gICAgLy8gT24gZWFjaCBzdWJzZXF1ZW50IHJlbmRlciB3ZSB3aWxsIHVzZSB0aGUgc2FtZSBzZXQgc28gdGhhdCBjYXJkc1xuICAgIC8vIHdpbGwgbm90IGp1bXAgYXJvdW5kIHdoZW4gd2UgY2hhbmdlIHRoZSBleHBvc2VkIHNldHRpbmcuXG4gICAgY29uc3Qgc2hvd0luRXhwb3NlZCA9IHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgfHwgbmV3IFNldCgpO1xuICAgIGNvbnN0IHRyYWNrRXhwb3NlZCA9IHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPT09IHVuZGVmaW5lZDtcblxuICAgIGxldCBzZWxlY3RlZCA9IDA7XG5cbiAgICAvLyBPbiBmaXJzdCByZW5kZXIgd2UgZGVjaWRlIHdoaWNoIGNhcmRzIHNob3cgaW4gd2hpY2ggY2F0ZWdvcnkuXG4gICAgLy8gVGhhdCB3YXkgY2FyZHMgd29uJ3QganVtcCBhcm91bmQgd2hlbiBjaGFuZ2luZyB2YWx1ZXMuXG4gICAgY29uc3QgZXhwb3NlZENhcmRzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG4gICAgY29uc3Qgbm90RXhwb3NlZENhcmRzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG5cbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2VudGl0eUNvbmZpZ3NbZW50aXR5LmVudGl0eV9pZF0gfHwge307XG4gICAgICBjb25zdCBpc0V4cG9zZWQgPSBlbXB0eUZpbHRlclxuICAgICAgICA/IGNvbmZpZ0lzRXhwb3NlZChjb25maWcpXG4gICAgICAgIDogZmlsdGVyRnVuYyhlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgIGlmIChpc0V4cG9zZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQrKztcblxuICAgICAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICAgICAgc2hvd0luRXhwb3NlZC5hZGQoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2hvd0luRXhwb3NlZC5oYXMoZW50aXR5LmVudGl0eV9pZClcbiAgICAgICAgPyBleHBvc2VkQ2FyZHNcbiAgICAgICAgOiBub3RFeHBvc2VkQ2FyZHM7XG5cbiAgICAgIHRhcmdldC5wdXNoKGh0bWxgXG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtzdGF0ZU9ian1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmVcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd01vcmVJbmZvfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke2VudGl0eS5pbnRlcmZhY2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoaWZjKSA9PiAhSUdOT1JFX0lOVEVSRkFDRVMuaW5jbHVkZXMoaWZjKSlcbiAgICAgICAgICAgICAgICAubWFwKChpZmMpID0+XG4gICAgICAgICAgICAgICAgICBpZmMucmVwbGFjZShcIkFsZXhhLlwiLCBcIlwiKS5yZXBsYWNlKFwiQ29udHJvbGxlclwiLCBcIlwiKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAuam9pbihcIiwgXCIpfVxuICAgICAgICAgICAgPC9zdGF0ZS1pbmZvPlxuICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAuZW50aXR5SWQ9JHtlbnRpdHkuZW50aXR5X2lkfVxuICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHshZW1wdHlGaWx0ZXJ9XG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7aXNFeHBvc2VkfVxuICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fZXhwb3NlQ2hhbmdlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLmV4cG9zZVwiKX1cbiAgICAgICAgICAgIDwvaGEtc3dpdGNoPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2hhLWNhcmQ+XG4gICAgICBgKTtcbiAgICB9KTtcblxuICAgIGlmICh0cmFja0V4cG9zZWQpIHtcbiAgICAgIHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPSBzaG93SW5FeHBvc2VkO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhc3Mtc3VicGFnZSBoZWFkZXI9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLnRpdGxlXCJcbiAgICAgICl9XCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJ0b29sYmFyLWljb25cIj5cbiAgICAgICAgICAke3NlbGVjdGVkfSR7XG4gICAgICAhdGhpcy5uYXJyb3dcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgc2VsZWN0ZWRcbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIlxuICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICAke1xuICAgICAgICAgIGVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgICBzbG90PVwidG9vbGJhci1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnR1bmVcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fb3BlbkRvbWFpblRvZ2dsZXJ9XG4gICAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9XG4gICAgICAgICR7XG4gICAgICAgICAgIWVtcHR5RmlsdGVyXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmFsZXhhLmJhbm5lclwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgZXhwb3NlZENhcmRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWxleGEuZXhwb3NlZF9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke2V4cG9zZWRDYXJkc308L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgbm90RXhwb3NlZENhcmRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuYWxleGEubm90X2V4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtub3RFeHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYXNzLXN1YnBhZ2U+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5fZmV0Y2hEYXRhKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJjbG91ZFN0YXR1c1wiKSkge1xuICAgICAgdGhpcy5fZW50aXR5Q29uZmlncyA9IHRoaXMuY2xvdWRTdGF0dXMucHJlZnMuYWxleGFfZW50aXR5X2NvbmZpZ3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEYXRhKCkge1xuICAgIGNvbnN0IGVudGl0aWVzID0gYXdhaXQgZmV0Y2hDbG91ZEFsZXhhRW50aXRpZXModGhpcy5oYXNzKTtcbiAgICBlbnRpdGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZUEgPSB0aGlzLmhhc3Muc3RhdGVzW2EuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IHN0YXRlQiA9IHRoaXMuaGFzcy5zdGF0ZXNbYi5lbnRpdHlfaWRdO1xuICAgICAgcmV0dXJuIGNvbXBhcmUoXG4gICAgICAgIHN0YXRlQSA/IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVBKSA6IGEuZW50aXR5X2lkLFxuICAgICAgICBzdGF0ZUIgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQikgOiBiLmVudGl0eV9pZFxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLl9lbnRpdGllcyA9IGVudGl0aWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvd01vcmVJbmZvKGV2KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSBldi5jdXJyZW50VGFyZ2V0LnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJoYXNzLW1vcmUtaW5mb1wiLCB7IGVudGl0eUlkIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZXhwb3NlQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBlbnRpdHlJZCA9IChldi5jdXJyZW50VGFyZ2V0IGFzIGFueSkuZW50aXR5SWQ7XG4gICAgY29uc3QgbmV3RXhwb3NlZCA9IChldi50YXJnZXQgYXMgSGFTd2l0Y2gpLmNoZWNrZWQ7XG4gICAgYXdhaXQgdGhpcy5fdXBkYXRlRXhwb3NlZChlbnRpdHlJZCwgbmV3RXhwb3NlZCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVFeHBvc2VkKGVudGl0eUlkOiBzdHJpbmcsIG5ld0V4cG9zZWQ6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBjdXJFeHBvc2VkID0gY29uZmlnSXNFeHBvc2VkKHRoaXMuX2VudGl0eUNvbmZpZ3NbZW50aXR5SWRdIHx8IHt9KTtcbiAgICBpZiAobmV3RXhwb3NlZCA9PT0gY3VyRXhwb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLl91cGRhdGVDb25maWcoZW50aXR5SWQsIHtcbiAgICAgIHNob3VsZF9leHBvc2U6IG5ld0V4cG9zZWQsXG4gICAgfSk7XG4gICAgdGhpcy5fZW5zdXJlRW50aXR5U3luYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlQ29uZmlnKGVudGl0eUlkOiBzdHJpbmcsIHZhbHVlczogQWxleGFFbnRpdHlDb25maWcpIHtcbiAgICBjb25zdCB1cGRhdGVkQ29uZmlnID0gYXdhaXQgdXBkYXRlQ2xvdWRBbGV4YUVudGl0eUNvbmZpZyhcbiAgICAgIHRoaXMuaGFzcyxcbiAgICAgIGVudGl0eUlkLFxuICAgICAgdmFsdWVzXG4gICAgKTtcbiAgICB0aGlzLl9lbnRpdHlDb25maWdzID0ge1xuICAgICAgLi4udGhpcy5fZW50aXR5Q29uZmlncyxcbiAgICAgIFtlbnRpdHlJZF06IHVwZGF0ZWRDb25maWcsXG4gICAgfTtcbiAgICB0aGlzLl9lbnN1cmVTdGF0dXNSZWxvYWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29wZW5Eb21haW5Ub2dnbGVyKCkge1xuICAgIHNob3dEb21haW5Ub2dnbGVyRGlhbG9nKHRoaXMsIHtcbiAgICAgIGRvbWFpbnM6IHRoaXMuX2VudGl0aWVzIS5tYXAoKGVudGl0eSkgPT5cbiAgICAgICAgY29tcHV0ZURvbWFpbihlbnRpdHkuZW50aXR5X2lkKVxuICAgICAgKS5maWx0ZXIoKHZhbHVlLCBpZHgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGlkeCksXG4gICAgICB0b2dnbGVEb21haW46IChkb21haW4sIHR1cm5PbikgPT4ge1xuICAgICAgICB0aGlzLl9lbnRpdGllcyEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgaWYgKGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZCkgPT09IGRvbWFpbikge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlRXhwb3NlZChlbnRpdHkuZW50aXR5X2lkLCB0dXJuT24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5zdXJlU3RhdHVzUmVsb2FkKCkge1xuICAgIGlmICh0aGlzLl9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BvcHN0YXRlUmVsb2FkU3RhdHVzQXR0YWNoZWQgPSB0cnVlO1xuICAgIC8vIENhY2hlIHBhcmVudCBiZWNhdXNlIGJ5IHRoZSB0aW1lIHBvcHN0YXRlIGhhcHBlbnMsXG4gICAgLy8gdGhpcyBlbGVtZW50IGlzIGRldGFjaGVkXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50ITtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicG9wc3RhdGVcIixcbiAgICAgICgpID0+IGZpcmVFdmVudChwYXJlbnQsIFwiaGEtcmVmcmVzaC1jbG91ZC1zdGF0dXNcIiksXG4gICAgICB7IG9uY2U6IHRydWUgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9lbnN1cmVFbnRpdHlTeW5jKCkge1xuICAgIGlmICh0aGlzLl9wb3BzdGF0ZVN5bmNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wb3BzdGF0ZVN5bmNBdHRhY2hlZCA9IHRydWU7XG4gICAgLy8gQ2FjaGUgcGFyZW50IGJlY2F1c2UgYnkgdGhlIHRpbWUgcG9wc3RhdGUgaGFwcGVucyxcbiAgICAvLyB0aGlzIGVsZW1lbnQgaXMgZGV0YWNoZWRcbiAgICAvLyBjb25zdCBwYXJlbnQgPSB0aGlzLnBhcmVudEVsZW1lbnQhO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJwb3BzdGF0ZVwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICAvLyBXZSBkb24ndCBoYXZlIGFueXRoaW5nIHlldC5cbiAgICAgICAgLy8gc2hvd1RvYXN0KHBhcmVudCwgeyBtZXNzYWdlOiBcIlN5bmNocm9uaXppbmcgY2hhbmdlcyB0byBHb29nbGUuXCIgfSk7XG4gICAgICAgIC8vIGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCh0aGlzLmhhc3MpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5iYW5uZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgfVxuICAgICAgaGEtc3dpdGNoIHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICB9XG4gICAgICBoYS1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgfVxuICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgfVxuICAgICAgc3RhdGUtaW5mbyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIGhhLXN3aXRjaCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICBoYS1jYXJkIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJjbG91ZC1hbGV4YVwiOiBDbG91ZEFsZXhhO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7QUE4U0E7QUF0U0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBY0E7QUFKQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBUUE7QUFZQTtBQVNBO0FBWUE7QUFZQTtBQWpEQTtBQVFBO0FBV0E7QUFTQTtBQUlBO0FBUUE7QUFJQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7Ozs7O0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFHQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTs7QUFBQTtBQUtBO0FBSUE7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUE4Q0E7OztBQUFBO0FBN1RBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFDQTtBQVhBO0FBREE7QUFDQTtBQStUQTtBQUFBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==