(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["cloud-google-assistant"],{

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

/***/ "./src/data/google_assistant.ts":
/*!**************************************!*\
  !*** ./src/data/google_assistant.ts ***!
  \**************************************/
/*! exports provided: fetchCloudGoogleEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCloudGoogleEntities", function() { return fetchCloudGoogleEntities; });
var fetchCloudGoogleEntities = function (hass) {
    return hass.callWS({ type: "cloud/google_assistant/entities" });
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

/***/ "./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts":
/*!****************************************************************************!*\
  !*** ./src/panels/config/cloud/google-assistant/cloud-google-assistant.ts ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _polymer_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _data_cloud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../data/cloud */ "./src/data/cloud.ts");
/* harmony import */ var _common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/entity/entity_filter */ "./src/common/entity/entity_filter.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var _dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../dialogs/domain-toggler/show-dialog-domain-toggler */ "./src/dialogs/domain-toggler/show-dialog-domain-toggler.ts");
/* harmony import */ var _data_google_assistant__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../data/google_assistant */ "./src/data/google_assistant.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");


















var DEFAULT_CONFIG_EXPOSE = true;
var configIsExposed = function (config) {
    return config.should_expose === undefined
        ? DEFAULT_CONFIG_EXPOSE
        : config.should_expose;
};
var CloudGoogleAssistant = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CloudGoogleAssistant, _super);
    function CloudGoogleAssistant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._entityConfigs = {};
        _this._popstateSyncAttached = false;
        _this._popstateReloadStatusAttached = false;
        _this._getEntityFilterFunc = Object(memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(function (filter) {
            return Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities);
        });
        return _this;
    }
    CloudGoogleAssistant.prototype.render = function () {
        var _this = this;
        if (this._entities === undefined) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <hass-loading-screen></hass-loading-screen>\n      "], ["\n        <hass-loading-screen></hass-loading-screen>\n      "])));
        }
        var emptyFilter = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_10__["isEmptyFilter"])(this.cloudStatus.google_entities);
        var filterFunc = this._getEntityFilterFunc(this.cloudStatus.google_entities);
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
            target.push(Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <ha-card>\n          <div class=\"card-content\">\n            <state-info\n              .hass=", "\n              .stateObj=", "\n              secondary-line\n              @click=", "\n            >\n              ", "\n            </state-info>\n            <ha-switch\n              .entityId=", "\n              .disabled=", "\n              .checked=", "\n              @change=", "\n            >\n              ", "\n            </ha-switch>\n            ", "\n          </div>\n        </ha-card>\n      "], ["\n        <ha-card>\n          <div class=\"card-content\">\n            <state-info\n              .hass=", "\n              .stateObj=", "\n              secondary-line\n              @click=", "\n            >\n              ",
                "\n            </state-info>\n            <ha-switch\n              .entityId=", "\n              .disabled=", "\n              .checked=", "\n              @change=", "\n            >\n              ", "\n            </ha-switch>\n            ",
                "\n          </div>\n        </ha-card>\n      "])), _this.hass, stateObj, _this._showMoreInfo, entity.traits
                .map(function (trait) { return trait.substr(trait.lastIndexOf(".") + 1); })
                .join(", "), entity.entity_id, !emptyFilter, isExposed, _this._exposeChanged, _this.hass.localize("ui.panel.config.cloud.google.expose"), entity.might_2fa
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <ha-switch\n                    .entityId=", "\n                    .checked=", "\n                    @change=", "\n                  >\n                    ", "\n                  </ha-switch>\n                "], ["\n                  <ha-switch\n                    .entityId=", "\n                    .checked=", "\n                    @change=", "\n                  >\n                    ",
                    "\n                  </ha-switch>\n                "])), entity.entity_id, Boolean(config.disable_2fa), _this._disable2FAChanged, _this.hass.localize("ui.panel.config.cloud.google.disable_2FA")) : ""));
        });
        if (trackExposed) {
            this._isInitialExposed = showInExposed;
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <hass-subpage header=\"", "\">\n        <span slot=\"toolbar-icon\">\n          ", "", "\n        </span>\n        ", "\n        ", "\n          ", "\n          ", "\n        </div>\n      </hass-subpage>\n    "], ["\n      <hass-subpage header=\"",
            "\">\n        <span slot=\"toolbar-icon\">\n          ", "",
            "\n        </span>\n        ",
            "\n        ",
            "\n          ",
            "\n          ",
            "\n        </div>\n      </hass-subpage>\n    "])), this.hass.localize("ui.panel.config.cloud.google.title"), selected, !this.narrow
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            selected\n          "], ["\n            selected\n          "]))) : "", emptyFilter
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  slot=\"toolbar-icon\"\n                  icon=\"hass:tune\"\n                  @click=", "\n                ></paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  slot=\"toolbar-icon\"\n                  icon=\"hass:tune\"\n                  @click=", "\n                ></paper-icon-button>\n              "])), this._openDomainToggler) : "", !emptyFilter
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"banner\">\n                  ", "\n                </div>\n              "], ["\n                <div class=\"banner\">\n                  ", "\n                </div>\n              "])), this.hass.localize("ui.panel.config.cloud.google.banner")) : "", exposedCards.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <h1>\n                    ", "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "], ["\n                  <h1>\n                    ",
                "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "])), this.hass.localize("ui.panel.config.cloud.google.exposed_entities"), exposedCards) : "", notExposedCards.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <h1>\n                    ", "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "], ["\n                  <h1>\n                    ",
                "\n                  </h1>\n                  <div class=\"content\">", "</div>\n                "])), this.hass.localize("ui.panel.config.cloud.google.not_exposed_entities"), notExposedCards) : "");
    };
    CloudGoogleAssistant.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        this._fetchData();
    };
    CloudGoogleAssistant.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("cloudStatus")) {
            this._entityConfigs = this.cloudStatus.prefs.google_entity_configs;
        }
    };
    CloudGoogleAssistant.prototype._fetchData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entities;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_data_google_assistant__WEBPACK_IMPORTED_MODULE_15__["fetchCloudGoogleEntities"])(this.hass)];
                    case 1:
                        entities = _a.sent();
                        entities.sort(function (a, b) {
                            var stateA = _this.hass.states[a.entity_id];
                            var stateB = _this.hass.states[b.entity_id];
                            return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(stateA ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__["computeStateName"])(stateA) : a.entity_id, stateB ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_16__["computeStateName"])(stateB) : b.entity_id);
                        });
                        this._entities = entities;
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudGoogleAssistant.prototype._showMoreInfo = function (ev) {
        var entityId = ev.currentTarget.stateObj.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(this, "hass-more-info", { entityId: entityId });
    };
    CloudGoogleAssistant.prototype._exposeChanged = function (ev) {
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
    CloudGoogleAssistant.prototype._updateExposed = function (entityId, newExposed) {
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
    CloudGoogleAssistant.prototype._disable2FAChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entityId, newDisable2FA, curDisable2FA;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entityId = ev.currentTarget.entityId;
                        newDisable2FA = ev.target.checked;
                        curDisable2FA = Boolean((this._entityConfigs[entityId] || {}).disable_2fa);
                        if (newDisable2FA === curDisable2FA) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this._updateConfig(entityId, {
                                disable_2fa: newDisable2FA,
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudGoogleAssistant.prototype._updateConfig = function (entityId, values) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var updatedConfig;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Object(_data_cloud__WEBPACK_IMPORTED_MODULE_9__["updateCloudGoogleEntityConfig"])(this.hass, entityId, values)];
                    case 1:
                        updatedConfig = _b.sent();
                        this._entityConfigs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._entityConfigs), (_a = {}, _a[entityId] = updatedConfig, _a));
                        this._ensureStatusReload();
                        return [2 /*return*/];
                }
            });
        });
    };
    CloudGoogleAssistant.prototype._openDomainToggler = function () {
        var _this = this;
        Object(_dialogs_domain_toggler_show_dialog_domain_toggler__WEBPACK_IMPORTED_MODULE_14__["showDomainTogglerDialog"])(this, {
            domains: this._entities.map(function (entity) {
                return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_17__["computeDomain"])(entity.entity_id);
            }).filter(function (value, idx, self) { return self.indexOf(value) === idx; }),
            toggleDomain: function (domain, turnOn) {
                _this._entities.forEach(function (entity) {
                    if (Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_17__["computeDomain"])(entity.entity_id) === domain) {
                        _this._updateExposed(entity.entity_id, turnOn);
                    }
                });
            },
        });
    };
    CloudGoogleAssistant.prototype._ensureStatusReload = function () {
        if (this._popstateReloadStatusAttached) {
            return;
        }
        this._popstateReloadStatusAttached = true;
        // Cache parent because by the time popstate happens,
        // this element is detached
        var parent = this.parentElement;
        window.addEventListener("popstate", function () { return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_12__["fireEvent"])(parent, "ha-refresh-cloud-status"); }, { once: true });
    };
    CloudGoogleAssistant.prototype._ensureEntitySync = function () {
        var _this = this;
        if (this._popstateSyncAttached) {
            return;
        }
        this._popstateSyncAttached = true;
        // Cache parent because by the time popstate happens,
        // this element is detached
        var parent = this.parentElement;
        window.addEventListener("popstate", function () {
            Object(_util_toast__WEBPACK_IMPORTED_MODULE_13__["showToast"])(parent, {
                message: _this.hass.localize("ui.panel.config.cloud.googe.sync_to_google"),
            });
            Object(_data_cloud__WEBPACK_IMPORTED_MODULE_9__["cloudSyncGoogleAssistant"])(_this.hass);
        }, { once: true });
    };
    Object.defineProperty(CloudGoogleAssistant, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      ha-switch {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    "], ["\n      .banner {\n        color: var(--primary-text-color);\n        background-color: var(\n          --ha-card-background,\n          var(--paper-card-background-color, white)\n        );\n        padding: 16px 8px;\n        text-align: center;\n      }\n      h1 {\n        color: var(--primary-text-color);\n        font-size: 24px;\n        letter-spacing: -0.012em;\n        margin-bottom: 0;\n        padding: 0 8px;\n      }\n      .content {\n        display: flex;\n        flex-wrap: wrap;\n        padding: 4px;\n      }\n      ha-card {\n        margin: 4px;\n        width: 100%;\n        max-width: 300px;\n      }\n      .card-content {\n        padding-bottom: 12px;\n      }\n      state-info {\n        cursor: pointer;\n      }\n      ha-switch {\n        padding: 8px 0;\n      }\n\n      @media all and (max-width: 450px) {\n        ha-card {\n          max-width: 100%;\n        }\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudGoogleAssistant.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudGoogleAssistant.prototype, "cloudStatus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudGoogleAssistant.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudGoogleAssistant.prototype, "_entities", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], CloudGoogleAssistant.prototype, "_entityConfigs", void 0);
    CloudGoogleAssistant = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("cloud-google-assistant")
    ], CloudGoogleAssistant);
    return CloudGoogleAssistant;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2VudGl0eV9maWx0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zdHJpbmcvY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9nb29nbGVfYXNzaXN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2RvbWFpbi10b2dnbGVyL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9wYW5lbHMvY29uZmlnL2Nsb3VkL2dvb2dsZS1hc3Npc3RhbnQvY2xvdWQtZ29vZ2xlLWFzc2lzdGFudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9kb21haW5cIjtcblxuZXhwb3J0IHR5cGUgRmlsdGVyRnVuYyA9IChlbnRpdHlJZDogc3RyaW5nKSA9PiBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eUZpbHRlciB7XG4gIGluY2x1ZGVfZG9tYWluczogc3RyaW5nW107XG4gIGluY2x1ZGVfZW50aXRpZXM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2RvbWFpbnM6IHN0cmluZ1tdO1xuICBleGNsdWRlX2VudGl0aWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGlzRW1wdHlGaWx0ZXIgPSAoZmlsdGVyOiBFbnRpdHlGaWx0ZXIpID0+XG4gIGZpbHRlci5pbmNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuaW5jbHVkZV9lbnRpdGllcy5sZW5ndGggK1xuICAgIGZpbHRlci5leGNsdWRlX2RvbWFpbnMubGVuZ3RoICtcbiAgICBmaWx0ZXIuZXhjbHVkZV9lbnRpdGllcy5sZW5ndGggPT09XG4gIDA7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUZpbHRlciA9IChcbiAgaW5jbHVkZURvbWFpbnM/OiBzdHJpbmdbXSxcbiAgaW5jbHVkZUVudGl0aWVzPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVEb21haW5zPzogc3RyaW5nW10sXG4gIGV4Y2x1ZGVFbnRpdGllcz86IHN0cmluZ1tdXG4pOiBGaWx0ZXJGdW5jID0+IHtcbiAgY29uc3QgaW5jbHVkZURvbWFpbnNTZXQgPSBuZXcgU2V0KGluY2x1ZGVEb21haW5zKTtcbiAgY29uc3QgaW5jbHVkZUVudGl0aWVzU2V0ID0gbmV3IFNldChpbmNsdWRlRW50aXRpZXMpO1xuICBjb25zdCBleGNsdWRlRG9tYWluc1NldCA9IG5ldyBTZXQoZXhjbHVkZURvbWFpbnMpO1xuICBjb25zdCBleGNsdWRlRW50aXRpZXNTZXQgPSBuZXcgU2V0KGV4Y2x1ZGVFbnRpdGllcyk7XG5cbiAgY29uc3QgaGF2ZUluY2x1ZGUgPSBpbmNsdWRlRG9tYWluc1NldC5zaXplID4gMCB8fCBpbmNsdWRlRW50aXRpZXNTZXQuc2l6ZSA+IDA7XG4gIGNvbnN0IGhhdmVFeGNsdWRlID0gZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSA+IDAgfHwgZXhjbHVkZUVudGl0aWVzU2V0LnNpemUgPiAwO1xuXG4gIC8vIENhc2UgMSAtIG5vIGluY2x1ZGVzIG9yIGV4Y2x1ZGVzIC0gcGFzcyBhbGwgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiAhaGF2ZUV4Y2x1ZGUpIHtcbiAgICByZXR1cm4gKCkgPT4gdHJ1ZTtcbiAgfVxuXG4gIC8vIENhc2UgMiAtIGluY2x1ZGVzLCBubyBleGNsdWRlcyAtIG9ubHkgaW5jbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKGhhdmVJbmNsdWRlICYmICFoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBpbmNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKSB8fFxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKTtcbiAgfVxuXG4gIC8vIENhc2UgMyAtIGV4Y2x1ZGVzLCBubyBpbmNsdWRlcyAtIG9ubHkgZXhjbHVkZSBzcGVjaWZpZWQgZW50aXRpZXNcbiAgaWYgKCFoYXZlSW5jbHVkZSAmJiBoYXZlRXhjbHVkZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCkgJiZcbiAgICAgICFleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpO1xuICB9XG5cbiAgLy8gQ2FzZSA0IC0gYm90aCBpbmNsdWRlcyBhbmQgZXhjbHVkZXMgc3BlY2lmaWVkXG4gIC8vIENhc2UgNGEgLSBpbmNsdWRlIGRvbWFpbiBzcGVjaWZpZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIGluY2x1ZGVkLCBwYXNzIGlmIGVudGl0eSBub3QgZXhjbHVkZWRcbiAgLy8gIC0gaWYgZG9tYWluIGlzIG5vdCBpbmNsdWRlZCwgcGFzcyBpZiBlbnRpdHkgaXMgaW5jbHVkZWRcbiAgLy8gbm90ZTogaWYgYm90aCBpbmNsdWRlIGFuZCBleGNsdWRlIGRvbWFpbnMgc3BlY2lmaWVkLFxuICAvLyAgIHRoZSBleGNsdWRlIGRvbWFpbnMgYXJlIGlnbm9yZWRcbiAgaWYgKGluY2x1ZGVEb21haW5zU2V0LnNpemUpIHtcbiAgICByZXR1cm4gKGVudGl0eUlkKSA9PlxuICAgICAgaW5jbHVkZURvbWFpbnNTZXQuaGFzKGNvbXB1dGVEb21haW4oZW50aXR5SWQpKVxuICAgICAgICA/ICFleGNsdWRlRW50aXRpZXNTZXQuaGFzKGVudGl0eUlkKVxuICAgICAgICA6IGluY2x1ZGVFbnRpdGllc1NldC5oYXMoZW50aXR5SWQpO1xuICB9XG5cbiAgLy8gQ2FzZSA0YiAtIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBpZiBkb21haW4gaXMgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkXG4gIC8vICAtIGlmIGRvbWFpbiBpcyBub3QgZXhjbHVkZWQsIHBhc3MgaWYgZW50aXR5IG5vdCBleGNsdWRlZFxuICBpZiAoZXhjbHVkZURvbWFpbnNTZXQuc2l6ZSkge1xuICAgIHJldHVybiAoZW50aXR5SWQpID0+XG4gICAgICBleGNsdWRlRG9tYWluc1NldC5oYXMoY29tcHV0ZURvbWFpbihlbnRpdHlJZCkpXG4gICAgICAgID8gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZClcbiAgICAgICAgOiAhZXhjbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG4gIH1cblxuICAvLyBDYXNlIDRjIC0gbmVpdGhlciBpbmNsdWRlIG9yIGV4Y2x1ZGUgZG9tYWluIHNwZWNpZmllZFxuICAvLyAgLSBPbmx5IHBhc3MgaWYgZW50aXR5IGlzIGluY2x1ZGVkLiAgSWdub3JlIGVudGl0eSBleGNsdWRlcy5cbiAgcmV0dXJuIChlbnRpdHlJZCkgPT4gaW5jbHVkZUVudGl0aWVzU2V0LmhhcyhlbnRpdHlJZCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+IHtcbiAgaWYgKGEgPCBiKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhID4gYikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59O1xuXG5leHBvcnQgY29uc3QgY2FzZUluc2Vuc2l0aXZlQ29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZykgPT5cbiAgY29tcGFyZShhLnRvTG93ZXJDYXNlKCksIGIudG9Mb3dlckNhc2UoKSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlRW50aXR5IHtcbiAgZW50aXR5X2lkOiBzdHJpbmc7XG4gIHRyYWl0czogc3RyaW5nW107XG4gIG1pZ2h0XzJmYTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQ2xvdWRHb29nbGVFbnRpdGllcyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxXUzxHb29nbGVFbnRpdHlbXT4oeyB0eXBlOiBcImNsb3VkL2dvb2dsZV9hc3Npc3RhbnQvZW50aXRpZXNcIiB9KTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXMge1xuICBkb21haW5zOiBzdHJpbmdbXTtcbiAgdG9nZ2xlRG9tYWluOiAoZG9tYWluOiBzdHJpbmcsIHR1cm5PbjogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREb21haW5Ub2dnbGVyRGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWRvbWFpbi10b2dnbGVyXCIgKi8gXCIuL2RpYWxvZy1kb21haW4tdG9nZ2xlclwiKTtcblxuZXhwb3J0IGNvbnN0IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBIYURvbWFpblRvZ2dsZXJEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiLFxuICAgIGRpYWxvZ0ltcG9ydDogbG9hZERvbWFpblRvZ2dsZXJEaWFsb2csXG4gICAgZGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b25cIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vLi4vbGF5b3V0cy9oYXNzLXN1YnBhZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2xheW91dHMvaGFzcy1sb2FkaW5nLXNjcmVlblwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYXJkXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDbG91ZFN0YXR1c0xvZ2dlZEluLFxuICBDbG91ZFByZWZlcmVuY2VzLFxuICB1cGRhdGVDbG91ZEdvb2dsZUVudGl0eUNvbmZpZyxcbiAgY2xvdWRTeW5jR29vZ2xlQXNzaXN0YW50LFxuICBHb29nbGVFbnRpdHlDb25maWcsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2Nsb3VkXCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZUZpbHRlcixcbiAgaXNFbXB0eUZpbHRlcixcbiAgRW50aXR5RmlsdGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2VudGl0eS9lbnRpdHlfZmlsdGVyXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgc2hvd1RvYXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvdG9hc3RcIjtcbmltcG9ydCB7IHNob3dEb21haW5Ub2dnbGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvc2hvdy1kaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjtcbmltcG9ydCB7XG4gIEdvb2dsZUVudGl0eSxcbiAgZmV0Y2hDbG91ZEdvb2dsZUVudGl0aWVzLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZGF0YS9nb29nbGVfYXNzaXN0YW50XCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5pbXBvcnQgeyBIYVN3aXRjaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9kb21haW5cIjtcblxuY29uc3QgREVGQVVMVF9DT05GSUdfRVhQT1NFID0gdHJ1ZTtcblxuY29uc3QgY29uZmlnSXNFeHBvc2VkID0gKGNvbmZpZzogR29vZ2xlRW50aXR5Q29uZmlnKSA9PlxuICBjb25maWcuc2hvdWxkX2V4cG9zZSA9PT0gdW5kZWZpbmVkXG4gICAgPyBERUZBVUxUX0NPTkZJR19FWFBPU0VcbiAgICA6IGNvbmZpZy5zaG91bGRfZXhwb3NlO1xuXG5AY3VzdG9tRWxlbWVudChcImNsb3VkLWdvb2dsZS1hc3Npc3RhbnRcIilcbmNsYXNzIENsb3VkR29vZ2xlQXNzaXN0YW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNsb3VkU3RhdHVzITogQ2xvdWRTdGF0dXNMb2dnZWRJbjtcbiAgQHByb3BlcnR5KCkgcHVibGljIG5hcnJvdyE6IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2VudGl0aWVzPzogR29vZ2xlRW50aXR5W107XG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2VudGl0eUNvbmZpZ3M6IENsb3VkUHJlZmVyZW5jZXNbXCJnb29nbGVfZW50aXR5X2NvbmZpZ3NcIl0gPSB7fTtcbiAgcHJpdmF0ZSBfcG9wc3RhdGVTeW5jQXR0YWNoZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCA9IGZhbHNlO1xuICBwcml2YXRlIF9pc0luaXRpYWxFeHBvc2VkPzogU2V0PHN0cmluZz47XG5cbiAgcHJpdmF0ZSBfZ2V0RW50aXR5RmlsdGVyRnVuYyA9IG1lbW9pemVPbmUoKGZpbHRlcjogRW50aXR5RmlsdGVyKSA9PlxuICAgIGdlbmVyYXRlRmlsdGVyKFxuICAgICAgZmlsdGVyLmluY2x1ZGVfZG9tYWlucyxcbiAgICAgIGZpbHRlci5pbmNsdWRlX2VudGl0aWVzLFxuICAgICAgZmlsdGVyLmV4Y2x1ZGVfZG9tYWlucyxcbiAgICAgIGZpbHRlci5leGNsdWRlX2VudGl0aWVzXG4gICAgKVxuICApO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAodGhpcy5fZW50aXRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYXNzLWxvYWRpbmctc2NyZWVuPjwvaGFzcy1sb2FkaW5nLXNjcmVlbj5cbiAgICAgIGA7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5RmlsdGVyID0gaXNFbXB0eUZpbHRlcih0aGlzLmNsb3VkU3RhdHVzLmdvb2dsZV9lbnRpdGllcyk7XG4gICAgY29uc3QgZmlsdGVyRnVuYyA9IHRoaXMuX2dldEVudGl0eUZpbHRlckZ1bmMoXG4gICAgICB0aGlzLmNsb3VkU3RhdHVzLmdvb2dsZV9lbnRpdGllc1xuICAgICk7XG5cbiAgICAvLyBXZSB3aWxsIG9ubHkgZ2VuZXJhdGUgYGlzSW5pdGlhbEV4cG9zZWRgIGR1cmluZyBmaXJzdCByZW5kZXIuXG4gICAgLy8gT24gZWFjaCBzdWJzZXF1ZW50IHJlbmRlciB3ZSB3aWxsIHVzZSB0aGUgc2FtZSBzZXQgc28gdGhhdCBjYXJkc1xuICAgIC8vIHdpbGwgbm90IGp1bXAgYXJvdW5kIHdoZW4gd2UgY2hhbmdlIHRoZSBleHBvc2VkIHNldHRpbmcuXG4gICAgY29uc3Qgc2hvd0luRXhwb3NlZCA9IHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgfHwgbmV3IFNldCgpO1xuICAgIGNvbnN0IHRyYWNrRXhwb3NlZCA9IHRoaXMuX2lzSW5pdGlhbEV4cG9zZWQgPT09IHVuZGVmaW5lZDtcblxuICAgIGxldCBzZWxlY3RlZCA9IDA7XG5cbiAgICAvLyBPbiBmaXJzdCByZW5kZXIgd2UgZGVjaWRlIHdoaWNoIGNhcmRzIHNob3cgaW4gd2hpY2ggY2F0ZWdvcnkuXG4gICAgLy8gVGhhdCB3YXkgY2FyZHMgd29uJ3QganVtcCBhcm91bmQgd2hlbiBjaGFuZ2luZyB2YWx1ZXMuXG4gICAgY29uc3QgZXhwb3NlZENhcmRzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG4gICAgY29uc3Qgbm90RXhwb3NlZENhcmRzOiBUZW1wbGF0ZVJlc3VsdFtdID0gW107XG5cbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzLnN0YXRlc1tlbnRpdHkuZW50aXR5X2lkXTtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuX2VudGl0eUNvbmZpZ3NbZW50aXR5LmVudGl0eV9pZF0gfHwge307XG4gICAgICBjb25zdCBpc0V4cG9zZWQgPSBlbXB0eUZpbHRlclxuICAgICAgICA/IGNvbmZpZ0lzRXhwb3NlZChjb25maWcpXG4gICAgICAgIDogZmlsdGVyRnVuYyhlbnRpdHkuZW50aXR5X2lkKTtcbiAgICAgIGlmIChpc0V4cG9zZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQrKztcblxuICAgICAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICAgICAgc2hvd0luRXhwb3NlZC5hZGQoZW50aXR5LmVudGl0eV9pZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdGFyZ2V0ID0gc2hvd0luRXhwb3NlZC5oYXMoZW50aXR5LmVudGl0eV9pZClcbiAgICAgICAgPyBleHBvc2VkQ2FyZHNcbiAgICAgICAgOiBub3RFeHBvc2VkQ2FyZHM7XG5cbiAgICAgIHRhcmdldC5wdXNoKGh0bWxgXG4gICAgICAgIDxoYS1jYXJkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtzdGF0ZU9ian1cbiAgICAgICAgICAgICAgc2Vjb25kYXJ5LWxpbmVcbiAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc2hvd01vcmVJbmZvfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke2VudGl0eS50cmFpdHNcbiAgICAgICAgICAgICAgICAubWFwKCh0cmFpdCkgPT4gdHJhaXQuc3Vic3RyKHRyYWl0Lmxhc3RJbmRleE9mKFwiLlwiKSArIDEpKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiLCBcIil9XG4gICAgICAgICAgICA8L3N0YXRlLWluZm8+XG4gICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgIC5lbnRpdHlJZD0ke2VudGl0eS5lbnRpdHlfaWR9XG4gICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFlbXB0eUZpbHRlcn1cbiAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtpc0V4cG9zZWR9XG4gICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9leHBvc2VDaGFuZ2VkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLmV4cG9zZVwiKX1cbiAgICAgICAgICAgIDwvaGEtc3dpdGNoPlxuICAgICAgICAgICAgJHtlbnRpdHkubWlnaHRfMmZhXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoYS1zd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgLmVudGl0eUlkPSR7ZW50aXR5LmVudGl0eV9pZH1cbiAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHtCb29sZWFuKGNvbmZpZy5kaXNhYmxlXzJmYSl9XG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9kaXNhYmxlMkZBQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5kaXNhYmxlXzJGQVwiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oYS1jYXJkPlxuICAgICAgYCk7XG4gICAgfSk7XG5cbiAgICBpZiAodHJhY2tFeHBvc2VkKSB7XG4gICAgICB0aGlzLl9pc0luaXRpYWxFeHBvc2VkID0gc2hvd0luRXhwb3NlZDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYXNzLXN1YnBhZ2UgaGVhZGVyPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nbGUudGl0bGVcIlxuICAgICAgKX1cIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cInRvb2xiYXItaWNvblwiPlxuICAgICAgICAgICR7c2VsZWN0ZWR9JHtcbiAgICAgICF0aGlzLm5hcnJvd1xuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICBzZWxlY3RlZFxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwiXG4gICAgfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgICR7XG4gICAgICAgICAgZW1wdHlGaWx0ZXJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJ0b29sYmFyLWljb25cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6dHVuZVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9vcGVuRG9tYWluVG9nZ2xlcn1cbiAgICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgJHtcbiAgICAgICAgICAhZW1wdHlGaWx0ZXJcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFubmVyXCI+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLmJhbm5lclwiKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgICAke1xuICAgICAgICAgICAgZXhwb3NlZENhcmRzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY2xvdWQuZ29vZ2xlLmV4cG9zZWRfZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+JHtleHBvc2VkQ2FyZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgJHtcbiAgICAgICAgICAgIG5vdEV4cG9zZWRDYXJkcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmNsb3VkLmdvb2dsZS5ub3RfZXhwb3NlZF9lbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj4ke25vdEV4cG9zZWRDYXJkc308L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhc3Mtc3VicGFnZT5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9mZXRjaERhdGEoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcImNsb3VkU3RhdHVzXCIpKSB7XG4gICAgICB0aGlzLl9lbnRpdHlDb25maWdzID0gdGhpcy5jbG91ZFN0YXR1cy5wcmVmcy5nb29nbGVfZW50aXR5X2NvbmZpZ3M7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEYXRhKCkge1xuICAgIGNvbnN0IGVudGl0aWVzID0gYXdhaXQgZmV0Y2hDbG91ZEdvb2dsZUVudGl0aWVzKHRoaXMuaGFzcyk7XG4gICAgZW50aXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVBID0gdGhpcy5oYXNzLnN0YXRlc1thLmVudGl0eV9pZF07XG4gICAgICBjb25zdCBzdGF0ZUIgPSB0aGlzLmhhc3Muc3RhdGVzW2IuZW50aXR5X2lkXTtcbiAgICAgIHJldHVybiBjb21wYXJlKFxuICAgICAgICBzdGF0ZUEgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlQSkgOiBhLmVudGl0eV9pZCxcbiAgICAgICAgc3RhdGVCID8gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZUIpIDogYi5lbnRpdHlfaWRcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5fZW50aXRpZXMgPSBlbnRpdGllcztcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dNb3JlSW5mbyhldikge1xuICAgIGNvbnN0IGVudGl0eUlkID0gZXYuY3VycmVudFRhcmdldC5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4cG9zZUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZW50aXR5SWQgPSAoZXYuY3VycmVudFRhcmdldCBhcyBhbnkpLmVudGl0eUlkO1xuICAgIGNvbnN0IG5ld0V4cG9zZWQgPSAoZXYudGFyZ2V0IGFzIEhhU3dpdGNoKS5jaGVja2VkO1xuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5SWQsIG5ld0V4cG9zZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfdXBkYXRlRXhwb3NlZChlbnRpdHlJZDogc3RyaW5nLCBuZXdFeHBvc2VkOiBib29sZWFuKSB7XG4gICAgY29uc3QgY3VyRXhwb3NlZCA9IGNvbmZpZ0lzRXhwb3NlZCh0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eUlkXSB8fCB7fSk7XG4gICAgaWYgKG5ld0V4cG9zZWQgPT09IGN1ckV4cG9zZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fdXBkYXRlQ29uZmlnKGVudGl0eUlkLCB7XG4gICAgICBzaG91bGRfZXhwb3NlOiBuZXdFeHBvc2VkLFxuICAgIH0pO1xuICAgIHRoaXMuX2Vuc3VyZUVudGl0eVN5bmMoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2Rpc2FibGUyRkFDaGFuZ2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55KS5lbnRpdHlJZDtcbiAgICBjb25zdCBuZXdEaXNhYmxlMkZBID0gKGV2LnRhcmdldCBhcyBIYVN3aXRjaCkuY2hlY2tlZDtcbiAgICBjb25zdCBjdXJEaXNhYmxlMkZBID0gQm9vbGVhbihcbiAgICAgICh0aGlzLl9lbnRpdHlDb25maWdzW2VudGl0eUlkXSB8fCB7fSkuZGlzYWJsZV8yZmFcbiAgICApO1xuICAgIGlmIChuZXdEaXNhYmxlMkZBID09PSBjdXJEaXNhYmxlMkZBKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuX3VwZGF0ZUNvbmZpZyhlbnRpdHlJZCwge1xuICAgICAgZGlzYWJsZV8yZmE6IG5ld0Rpc2FibGUyRkEsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVDb25maWcoZW50aXR5SWQ6IHN0cmluZywgdmFsdWVzOiBHb29nbGVFbnRpdHlDb25maWcpIHtcbiAgICBjb25zdCB1cGRhdGVkQ29uZmlnID0gYXdhaXQgdXBkYXRlQ2xvdWRHb29nbGVFbnRpdHlDb25maWcoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIHZhbHVlc1xuICAgICk7XG4gICAgdGhpcy5fZW50aXR5Q29uZmlncyA9IHtcbiAgICAgIC4uLnRoaXMuX2VudGl0eUNvbmZpZ3MsXG4gICAgICBbZW50aXR5SWRdOiB1cGRhdGVkQ29uZmlnLFxuICAgIH07XG4gICAgdGhpcy5fZW5zdXJlU3RhdHVzUmVsb2FkKCk7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuRG9tYWluVG9nZ2xlcigpIHtcbiAgICBzaG93RG9tYWluVG9nZ2xlckRpYWxvZyh0aGlzLCB7XG4gICAgICBkb21haW5zOiB0aGlzLl9lbnRpdGllcyEubWFwKChlbnRpdHkpID0+XG4gICAgICAgIGNvbXB1dGVEb21haW4oZW50aXR5LmVudGl0eV9pZClcbiAgICAgICkuZmlsdGVyKCh2YWx1ZSwgaWR4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpZHgpLFxuICAgICAgdG9nZ2xlRG9tYWluOiAoZG9tYWluLCB0dXJuT24pID0+IHtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMhLmZvckVhY2goKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGlmIChjb21wdXRlRG9tYWluKGVudGl0eS5lbnRpdHlfaWQpID09PSBkb21haW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUV4cG9zZWQoZW50aXR5LmVudGl0eV9pZCwgdHVybk9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZVN0YXR1c1JlbG9hZCgpIHtcbiAgICBpZiAodGhpcy5fcG9wc3RhdGVSZWxvYWRTdGF0dXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wb3BzdGF0ZVJlbG9hZFN0YXR1c0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAvLyBDYWNoZSBwYXJlbnQgYmVjYXVzZSBieSB0aGUgdGltZSBwb3BzdGF0ZSBoYXBwZW5zLFxuICAgIC8vIHRoaXMgZWxlbWVudCBpcyBkZXRhY2hlZFxuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMucGFyZW50RWxlbWVudCE7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInBvcHN0YXRlXCIsXG4gICAgICAoKSA9PiBmaXJlRXZlbnQocGFyZW50LCBcImhhLXJlZnJlc2gtY2xvdWQtc3RhdHVzXCIpLFxuICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZW5zdXJlRW50aXR5U3luYygpIHtcbiAgICBpZiAodGhpcy5fcG9wc3RhdGVTeW5jQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcG9wc3RhdGVTeW5jQXR0YWNoZWQgPSB0cnVlO1xuICAgIC8vIENhY2hlIHBhcmVudCBiZWNhdXNlIGJ5IHRoZSB0aW1lIHBvcHN0YXRlIGhhcHBlbnMsXG4gICAgLy8gdGhpcyBlbGVtZW50IGlzIGRldGFjaGVkXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50ITtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwicG9wc3RhdGVcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgc2hvd1RvYXN0KHBhcmVudCwge1xuICAgICAgICAgIG1lc3NhZ2U6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jbG91ZC5nb29nZS5zeW5jX3RvX2dvb2dsZVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3VkU3luY0dvb2dsZUFzc2lzdGFudCh0aGlzLmhhc3MpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5iYW5uZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKFxuICAgICAgICAgIC0taGEtY2FyZC1iYWNrZ3JvdW5kLFxuICAgICAgICAgIHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpXG4gICAgICAgICk7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMTJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgfVxuICAgICAgaGEtY2FyZCB7XG4gICAgICAgIG1hcmdpbjogNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgIH1cbiAgICAgIHN0YXRlLWluZm8ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgaGEtY2FyZCB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiY2xvdWQtZ29vZ2xlLWFzc2lzdGFudFwiOiBDbG91ZEdvb2dsZUFzc2lzdGFudDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7QUFzVUE7QUE5VEE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBV0E7QUFzQkE7QUF2QkE7QUFDQTtBQVdBO0FBUUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFRQTtBQVlBO0FBU0E7QUFZQTtBQVlBO0FBakRBO0FBUUE7QUFXQTtBQVNBO0FBSUE7QUFRQTtBQUlBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7Ozs7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUdBOzs7OztBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTs7Ozs7QUFHQTtBQUVBOzs7Ozs7QUFDQTs7QUFBQTtBQUtBO0FBSUE7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBMkNBOzs7QUFBQTtBQWhWQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQ0E7QUFOQTtBQURBO0FBQ0E7QUFrVkE7QUFBQTs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=