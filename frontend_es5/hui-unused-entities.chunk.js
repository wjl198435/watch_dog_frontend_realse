(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities"],{

/***/ "./src/components/ha-fab.ts":
/*!**********************************!*\
  !*** ./src/components/ha-fab.ts ***!
  \**********************************/
/*! exports provided: HaFab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaFab", function() { return HaFab; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
/* harmony import */ var _material_mwc_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-fab */ "./node_modules/@material/mwc-fab/mwc-fab.js");




// tslint:disable-next-line
var MwcFab = customElements.get("mwc-fab");
var HaFab = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaFab, _super);
    function HaFab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // We override the render method because we don't have an icon font and mwc-fab doesn't support our svg-icon sets.
    // Based on version mwc-fab 0.8
    HaFab.prototype.render = function () {
        var classes = {
            "mdc-fab--mini": this.mini,
            "mdc-fab--exited": this.exited,
            "mdc-fab--extended": this.extended,
        };
        var showLabel = this.label !== "" && this.extended;
        return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ", "\n        ", "\n      </button>\n    "], ["\n      <button\n        .ripple=\"", "\"\n        class=\"mdc-fab ", "\"\n        ?disabled=\"", "\"\n        aria-label=\"", "\"\n      >\n        ", "\n        ",
            "\n        ", "\n      </button>\n    "])), Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_2__["ripple"])(), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["classMap"])(classes), this.disabled, this.label || this.icon, showLabel && this.showIconAtEnd ? this.label : "", this.icon
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-icon .icon=", "></ha-icon>\n            "], ["\n              <ha-icon .icon=", "></ha-icon>\n            "])), this.icon) : "", showLabel && !this.showIconAtEnd ? this.label : "");
    };
    HaFab = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-fab")
    ], HaFab);
    return HaFab;
}(MwcFab));

var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/panels/lovelace/common/compute-unused-entities.ts":
/*!***************************************************************!*\
  !*** ./src/panels/lovelace/common/compute-unused-entities.ts ***!
  \***************************************************************/
/*! exports provided: computeUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeUnusedEntities", function() { return computeUnusedEntities; });
var EXCLUDED_DOMAINS = ["zone", "persistent_notification"];
var addFromAction = function (entities, actionConfig) {
    if (actionConfig.action !== "call-service" ||
        !actionConfig.service_data ||
        !actionConfig.service_data.entity_id) {
        return;
    }
    var entityIds = actionConfig.service_data.entity_id;
    if (!Array.isArray(entityIds)) {
        entityIds = [entityIds];
    }
    for (var _i = 0, entityIds_1 = entityIds; _i < entityIds_1.length; _i++) {
        var entityId = entityIds_1[_i];
        entities.add(entityId);
    }
};
var addEntityId = function (entities, entity) {
    if (typeof entity === "string") {
        entities.add(entity);
        return;
    }
    if (entity.entity) {
        entities.add(entity.entity);
    }
    if (entity.camera_image) {
        entities.add(entity.camera_image);
    }
    if (entity.tap_action) {
        addFromAction(entities, entity.tap_action);
    }
    if (entity.hold_action) {
        addFromAction(entities, entity.hold_action);
    }
};
var addEntities = function (entities, obj) {
    if (obj.entity) {
        addEntityId(entities, obj.entity);
    }
    if (obj.entities) {
        obj.entities.forEach(function (entity) { return addEntityId(entities, entity); });
    }
    if (obj.card) {
        addEntities(entities, obj.card);
    }
    if (obj.cards) {
        obj.cards.forEach(function (card) { return addEntities(entities, card); });
    }
    if (obj.elements) {
        obj.elements.forEach(function (card) { return addEntities(entities, card); });
    }
    if (obj.badges) {
        obj.badges.forEach(function (badge) { return addEntityId(entities, badge); });
    }
};
var computeUsedEntities = function (config) {
    var entities = new Set();
    config.views.forEach(function (view) { return addEntities(entities, view); });
    return entities;
};
var computeUnusedEntities = function (hass, config) {
    var usedEntities = computeUsedEntities(config);
    return Object.keys(hass.states)
        .filter(function (entity) {
        return !usedEntities.has(entity) &&
            !EXCLUDED_DOMAINS.includes(entity.split(".", 1)[0]);
    })
        .sort();
};


/***/ }),

/***/ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts ***!
  \***************************************************************************/
/*! exports provided: showSelectViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSelectViewDialog", function() { return showSelectViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var showSelectViewDialog = function (element, selectViewDialogParams) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
        dialogTag: "hui-dialog-select-view",
        dialogImport: function () {
            return Promise.all(/*! import() | hui-dialog-select-view */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-select-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-select-view */ "./src/panels/lovelace/editor/select-view/hui-dialog-select-view.ts"));
        },
        dialogParams: selectViewDialogParams,
    });
};


/***/ }),

/***/ "./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts":
/*!***************************************************************************!*\
  !*** ./src/panels/lovelace/editor/unused-entities/hui-unused-entities.ts ***!
  \***************************************************************************/
/*! exports provided: HuiUnusedEntities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiUnusedEntities", function() { return HuiUnusedEntities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ha-fab */ "./src/components/ha-fab.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_data_table_ha_data_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/data-table/ha-data-table */ "./src/components/data-table/ha-data-table.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/compute-unused-entities */ "./src/panels/lovelace/common/compute-unused-entities.ts");
/* harmony import */ var _select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../select-view/show-select-view-dialog */ "./src/panels/lovelace/editor/select-view/show-select-view-dialog.ts");
/* harmony import */ var _card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
















var HuiUnusedEntities = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HuiUnusedEntities, _super);
    function HuiUnusedEntities() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._unusedEntities = [];
        _this._selectedEntities = [];
        _this._columns = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (narrow) {
            var columns = {
                entity: {
                    title: "Entity",
                    sortable: true,
                    filterable: true,
                    filterKey: "friendly_name",
                    direction: "asc",
                    template: function (stateObj) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <div @click=", " style=\"cursor: pointer;\">\n            <state-badge\n              .hass=", "\n              .stateObj=", "\n            ></state-badge>\n            ", "\n          </div>\n        "], ["\n          <div @click=", " style=\"cursor: pointer;\">\n            <state-badge\n              .hass=", "\n              .stateObj=", "\n            ></state-badge>\n            ", "\n          </div>\n        "])), _this._handleEntityClicked, _this.hass, stateObj, stateObj.friendly_name); },
                },
            };
            if (narrow) {
                return columns;
            }
            columns.entity_id = {
                title: "Entity id",
                sortable: true,
                filterable: true,
            };
            columns.domain = {
                title: "Domain",
                sortable: true,
                filterable: true,
            };
            columns.last_changed = {
                title: "Last Changed",
                type: "numeric",
                sortable: true,
                template: function (lastChanged) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <ha-relative-time\n          .hass=", "\n          .datetime=", "\n        ></ha-relative-time>\n      "], ["\n        <ha-relative-time\n          .hass=", "\n          .datetime=", "\n        ></ha-relative-time>\n      "])), _this.hass, lastChanged); },
            };
            return columns;
        });
        return _this;
    }
    Object.defineProperty(HuiUnusedEntities.prototype, "_config", {
        get: function () {
            return this.lovelace.config;
        },
        enumerable: true,
        configurable: true
    });
    HuiUnusedEntities.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        if (changedProperties.has("lovelace")) {
            this._getUnusedEntities();
        }
    };
    HuiUnusedEntities.prototype.render = function () {
        var _this = this;
        if (!this.hass || !this.lovelace) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        if (this.lovelace.mode === "storage" && this.lovelace.editMode === false) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-card header=\"Unused entities\">\n        <div class=\"card-content\">\n          These are the entities that you have available, but are not in your\n          Lovelace UI yet.\n          ", "\n        </div>\n      </ha-card>\n      <ha-data-table\n        .columns=", "\n        .data=", "\n        .id=", "\n        .selectable=", "\n        @selection-changed=", "\n      ></ha-data-table>\n      ", "\n    "], ["\n      <ha-card header=\"Unused entities\">\n        <div class=\"card-content\">\n          These are the entities that you have available, but are not in your\n          Lovelace UI yet.\n          ",
            "\n        </div>\n      </ha-card>\n      <ha-data-table\n        .columns=", "\n        .data=",
            "\n        .id=", "\n        .selectable=", "\n        @selection-changed=", "\n      ></ha-data-table>\n      ",
            "\n    "])), this.lovelace.mode === "storage"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <br />Select the entities you want to add to a card and then\n                click the add card button.\n              "], ["\n                <br />Select the entities you want to add to a card and then\n                click the add card button.\n              "]))) : "", this._columns(this.narrow), this._unusedEntities.map(function (entity) {
            var stateObj = _this.hass.states[entity];
            return {
                entity_id: entity,
                entity: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, stateObj), { friendly_name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_9__["computeStateName"])(stateObj) }),
                domain: Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_10__["computeDomain"])(entity),
                last_changed: stateObj.last_changed,
            };
        }), "entity_id", this.lovelace.mode === "storage", this._handleSelectionChanged, this.lovelace.mode === "storage"
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-fab\n              class=\"", "\"\n              icon=\"hass:plus\"\n              label=\"", "\"\n              @click=\"", "\"\n            ></ha-fab>\n          "], ["\n            <ha-fab\n              class=\"",
                "\"\n              icon=\"hass:plus\"\n              label=\"",
                "\"\n              @click=\"", "\"\n            ></ha-fab>\n          "])), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_2__["classMap"])({
                rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass),
            }), this.hass.localize("ui.panel.lovelace.editor.edit_card.add"), this._selectView) : "");
    };
    HuiUnusedEntities.prototype._getUnusedEntities = function () {
        if (!this.hass || !this.lovelace) {
            return;
        }
        this._selectedEntities = [];
        this._unusedEntities = Object(_common_compute_unused_entities__WEBPACK_IMPORTED_MODULE_12__["computeUnusedEntities"])(this.hass, this._config);
    };
    HuiUnusedEntities.prototype._handleSelectionChanged = function (ev) {
        var changedSelection = ev.detail;
        var entity = changedSelection.id;
        if (changedSelection.selected) {
            this._selectedEntities.push(entity);
        }
        else {
            var index = this._selectedEntities.indexOf(entity);
            if (index !== -1) {
                this._selectedEntities.splice(index, 1);
            }
        }
    };
    HuiUnusedEntities.prototype._handleEntityClicked = function (ev) {
        var entityId = ev.target
            .closest("tr")
            .getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_15__["fireEvent"])(this, "hass-more-info", {
            entityId: entityId,
        });
    };
    HuiUnusedEntities.prototype._selectView = function () {
        var _this = this;
        Object(_select_view_show_select_view_dialog__WEBPACK_IMPORTED_MODULE_13__["showSelectViewDialog"])(this, {
            lovelace: this.lovelace,
            viewSelectedCallback: function (view) { return _this._addCard(view); },
        });
    };
    HuiUnusedEntities.prototype._addCard = function (view) {
        Object(_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_14__["showEditCardDialog"])(this, {
            lovelace: this.lovelace,
            path: [view],
            entities: this._selectedEntities,
        });
    };
    Object.defineProperty(HuiUnusedEntities, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        background: var(--lovelace-background);\n        padding: 16px;\n      }\n      ha-fab {\n        position: sticky;\n        float: right;\n        bottom: 16px;\n        z-index: 1;\n      }\n      ha-fab.rtl {\n        float: left;\n      }\n      ha-card {\n        margin-bottom: 16px;\n      }\n    "], ["\n      :host {\n        background: var(--lovelace-background);\n        padding: 16px;\n      }\n      ha-fab {\n        position: sticky;\n        float: right;\n        bottom: 16px;\n        z-index: 1;\n      }\n      ha-fab.rtl {\n        float: left;\n      }\n      ha-card {\n        margin-bottom: 16px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiUnusedEntities.prototype, "lovelace", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiUnusedEntities.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiUnusedEntities.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HuiUnusedEntities.prototype, "_unusedEntities", void 0);
    HuiUnusedEntities = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("hui-unused-entities")
    ], HuiUnusedEntities);
    return HuiUnusedEntities;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllcy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWZhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9jb21wdXRlLXVudXNlZC1lbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9zZWxlY3Qtdmlldy9zaG93LXNlbGVjdC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci91bnVzZWQtZW50aXRpZXMvaHVpLXVudXNlZC1lbnRpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGFzc01hcCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ29uc3RydWN0b3IsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1yaXBwbGUvcmlwcGxlLWRpcmVjdGl2ZS5qc1wiO1xuXG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWZhYlwiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBGYWIgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1mYWJcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTXdjRmFiID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWZhYlwiKSBhcyBDb25zdHJ1Y3RvcjxGYWI+O1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWZhYlwiKVxuZXhwb3J0IGNsYXNzIEhhRmFiIGV4dGVuZHMgTXdjRmFiIHtcbiAgLy8gV2Ugb3ZlcnJpZGUgdGhlIHJlbmRlciBtZXRob2QgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFuIGljb24gZm9udCBhbmQgbXdjLWZhYiBkb2Vzbid0IHN1cHBvcnQgb3VyIHN2Zy1pY29uIHNldHMuXG4gIC8vIEJhc2VkIG9uIHZlcnNpb24gbXdjLWZhYiAwLjhcbiAgcHJvdGVjdGVkIHJlbmRlcigpIHtcbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgXCJtZGMtZmFiLS1taW5pXCI6IHRoaXMubWluaSxcbiAgICAgIFwibWRjLWZhYi0tZXhpdGVkXCI6IHRoaXMuZXhpdGVkLFxuICAgICAgXCJtZGMtZmFiLS1leHRlbmRlZFwiOiB0aGlzLmV4dGVuZGVkLFxuICAgIH07XG4gICAgY29uc3Qgc2hvd0xhYmVsID0gdGhpcy5sYWJlbCAhPT0gXCJcIiAmJiB0aGlzLmV4dGVuZGVkO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGJ1dHRvblxuICAgICAgICAucmlwcGxlPVwiJHtyaXBwbGUoKX1cIlxuICAgICAgICBjbGFzcz1cIm1kYy1mYWIgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMuZGlzYWJsZWR9XCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIiR7dGhpcy5sYWJlbCB8fCB0aGlzLmljb259XCJcbiAgICAgID5cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgdGhpcy5zaG93SWNvbkF0RW5kID8gdGhpcy5sYWJlbCA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5pY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiAuaWNvbj0ke3RoaXMuaWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzaG93TGFiZWwgJiYgIXRoaXMuc2hvd0ljb25BdEVuZCA/IHRoaXMubGFiZWwgOiBcIlwifVxuICAgICAgPC9idXR0b24+XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZmFiXCI6IEhhRmFiO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb3ZlbGFjZUNvbmZpZywgQWN0aW9uQ29uZmlnIH0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvbG92ZWxhY2VcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgRVhDTFVERURfRE9NQUlOUyA9IFtcInpvbmVcIiwgXCJwZXJzaXN0ZW50X25vdGlmaWNhdGlvblwiXTtcblxuY29uc3QgYWRkRnJvbUFjdGlvbiA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIGFjdGlvbkNvbmZpZzogQWN0aW9uQ29uZmlnKSA9PiB7XG4gIGlmIChcbiAgICBhY3Rpb25Db25maWcuYWN0aW9uICE9PSBcImNhbGwtc2VydmljZVwiIHx8XG4gICAgIWFjdGlvbkNvbmZpZy5zZXJ2aWNlX2RhdGEgfHxcbiAgICAhYWN0aW9uQ29uZmlnLnNlcnZpY2VfZGF0YS5lbnRpdHlfaWRcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBlbnRpdHlJZHMgPSBhY3Rpb25Db25maWcuc2VydmljZV9kYXRhLmVudGl0eV9pZDtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVudGl0eUlkcykpIHtcbiAgICBlbnRpdHlJZHMgPSBbZW50aXR5SWRzXTtcbiAgfVxuICBmb3IgKGNvbnN0IGVudGl0eUlkIG9mIGVudGl0eUlkcykge1xuICAgIGVudGl0aWVzLmFkZChlbnRpdHlJZCk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZEVudGl0eUlkID0gKGVudGl0aWVzOiBTZXQ8c3RyaW5nPiwgZW50aXR5KSA9PiB7XG4gIGlmICh0eXBlb2YgZW50aXR5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgZW50aXRpZXMuYWRkKGVudGl0eSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVudGl0eS5lbnRpdHkpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5LmVudGl0eSk7XG4gIH1cbiAgaWYgKGVudGl0eS5jYW1lcmFfaW1hZ2UpIHtcbiAgICBlbnRpdGllcy5hZGQoZW50aXR5LmNhbWVyYV9pbWFnZSk7XG4gIH1cbiAgaWYgKGVudGl0eS50YXBfYWN0aW9uKSB7XG4gICAgYWRkRnJvbUFjdGlvbihlbnRpdGllcywgZW50aXR5LnRhcF9hY3Rpb24pO1xuICB9XG4gIGlmIChlbnRpdHkuaG9sZF9hY3Rpb24pIHtcbiAgICBhZGRGcm9tQWN0aW9uKGVudGl0aWVzLCBlbnRpdHkuaG9sZF9hY3Rpb24pO1xuICB9XG59O1xuXG5jb25zdCBhZGRFbnRpdGllcyA9IChlbnRpdGllczogU2V0PHN0cmluZz4sIG9iaikgPT4ge1xuICBpZiAob2JqLmVudGl0eSkge1xuICAgIGFkZEVudGl0eUlkKGVudGl0aWVzLCBvYmouZW50aXR5KTtcbiAgfVxuICBpZiAob2JqLmVudGl0aWVzKSB7XG4gICAgb2JqLmVudGl0aWVzLmZvckVhY2goKGVudGl0eSkgPT4gYWRkRW50aXR5SWQoZW50aXRpZXMsIGVudGl0eSkpO1xuICB9XG4gIGlmIChvYmouY2FyZCkge1xuICAgIGFkZEVudGl0aWVzKGVudGl0aWVzLCBvYmouY2FyZCk7XG4gIH1cbiAgaWYgKG9iai5jYXJkcykge1xuICAgIG9iai5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiBhZGRFbnRpdGllcyhlbnRpdGllcywgY2FyZCkpO1xuICB9XG4gIGlmIChvYmouZWxlbWVudHMpIHtcbiAgICBvYmouZWxlbWVudHMuZm9yRWFjaCgoY2FyZCkgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIGNhcmQpKTtcbiAgfVxuICBpZiAob2JqLmJhZGdlcykge1xuICAgIG9iai5iYWRnZXMuZm9yRWFjaCgoYmFkZ2UpID0+IGFkZEVudGl0eUlkKGVudGl0aWVzLCBiYWRnZSkpO1xuICB9XG59O1xuXG5jb25zdCBjb21wdXRlVXNlZEVudGl0aWVzID0gKGNvbmZpZykgPT4ge1xuICBjb25zdCBlbnRpdGllcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25maWcudmlld3MuZm9yRWFjaCgodmlldykgPT4gYWRkRW50aXRpZXMoZW50aXRpZXMsIHZpZXcpKTtcbiAgcmV0dXJuIGVudGl0aWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVVbnVzZWRFbnRpdGllcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgY29uZmlnOiBMb3ZlbGFjZUNvbmZpZ1xuKTogc3RyaW5nW10gPT4ge1xuICBjb25zdCB1c2VkRW50aXRpZXMgPSBjb21wdXRlVXNlZEVudGl0aWVzKGNvbmZpZyk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhoYXNzLnN0YXRlcylcbiAgICAuZmlsdGVyKFxuICAgICAgKGVudGl0eSkgPT5cbiAgICAgICAgIXVzZWRFbnRpdGllcy5oYXMoZW50aXR5KSAmJlxuICAgICAgICAhRVhDTFVERURfRE9NQUlOUy5pbmNsdWRlcyhlbnRpdHkuc3BsaXQoXCIuXCIsIDEpWzBdKVxuICAgIClcbiAgICAuc29ydCgpO1xufTtcbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0Vmlld0RpYWxvZ1BhcmFtcyB7XG4gIGxvdmVsYWNlOiBMb3ZlbGFjZTtcbiAgdmlld1NlbGVjdGVkQ2FsbGJhY2s6ICh2aWV3OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBzaG93U2VsZWN0Vmlld0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIHNlbGVjdFZpZXdEaWFsb2dQYXJhbXM6IFNlbGVjdFZpZXdEaWFsb2dQYXJhbXNcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLXNlbGVjdC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctc2VsZWN0LXZpZXdcIiksXG4gICAgZGlhbG9nUGFyYW1zOiBzZWxlY3RWaWV3RGlhbG9nUGFyYW1zLFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBodG1sLFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHByb3BlcnR5LFxuICBjdXN0b21FbGVtZW50LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSBcImxpdC1odG1sL2RpcmVjdGl2ZXMvY2xhc3MtbWFwXCI7XG5cbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2hhLWZhYlwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9oYS1pY29uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7XG4gIFNlbGVjdGlvbkNoYW5nZWRFdmVudCxcbiAgRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9kYXRhLXRhYmxlL2hhLWRhdGEtdGFibGVcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfZG9tYWluXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IGNvbXB1dGVVbnVzZWRFbnRpdGllcyB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcHV0ZS11bnVzZWQtZW50aXRpZXNcIjtcbmltcG9ydCB7IHNob3dTZWxlY3RWaWV3RGlhbG9nIH0gZnJvbSBcIi4uL3NlbGVjdC12aWV3L3Nob3ctc2VsZWN0LXZpZXctZGlhbG9nXCI7XG5pbXBvcnQgeyBzaG93RWRpdENhcmREaWFsb2cgfSBmcm9tIFwiLi4vY2FyZC1lZGl0b3Ivc2hvdy1lZGl0LWNhcmQtZGlhbG9nXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZUNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaHVpLXVudXNlZC1lbnRpdGllc1wiKVxuZXhwb3J0IGNsYXNzIEh1aVVudXNlZEVudGl0aWVzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBsb3ZlbGFjZT86IExvdmVsYWNlO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgbmFycm93PzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF91bnVzZWRFbnRpdGllczogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIF9zZWxlY3RlZEVudGl0aWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgZ2V0IF9jb25maWcoKTogTG92ZWxhY2VDb25maWcge1xuICAgIHJldHVybiB0aGlzLmxvdmVsYWNlIS5jb25maWc7XG4gIH1cblxuICBwcml2YXRlIF9jb2x1bW5zID0gbWVtb2l6ZU9uZSgobmFycm93OiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0ge1xuICAgICAgZW50aXR5OiB7XG4gICAgICAgIHRpdGxlOiBcIkVudGl0eVwiLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZmlsdGVyS2V5OiBcImZyaWVuZGx5X25hbWVcIixcbiAgICAgICAgZGlyZWN0aW9uOiBcImFzY1wiLFxuICAgICAgICB0ZW1wbGF0ZTogKHN0YXRlT2JqKSA9PiBodG1sYFxuICAgICAgICAgIDxkaXYgQGNsaWNrPSR7dGhpcy5faGFuZGxlRW50aXR5Q2xpY2tlZH0gc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXI7XCI+XG4gICAgICAgICAgICA8c3RhdGUtYmFkZ2VcbiAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3MhfVxuICAgICAgICAgICAgICAuc3RhdGVPYmo9JHtzdGF0ZU9ian1cbiAgICAgICAgICAgID48L3N0YXRlLWJhZGdlPlxuICAgICAgICAgICAgJHtzdGF0ZU9iai5mcmllbmRseV9uYW1lfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKG5hcnJvdykge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfVxuXG4gICAgY29sdW1ucy5lbnRpdHlfaWQgPSB7XG4gICAgICB0aXRsZTogXCJFbnRpdHkgaWRcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbHVtbnMuZG9tYWluID0ge1xuICAgICAgdGl0bGU6IFwiRG9tYWluXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgfTtcbiAgICBjb2x1bW5zLmxhc3RfY2hhbmdlZCA9IHtcbiAgICAgIHRpdGxlOiBcIkxhc3QgQ2hhbmdlZFwiLFxuICAgICAgdHlwZTogXCJudW1lcmljXCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAobGFzdENoYW5nZWQ6IHN0cmluZykgPT4gaHRtbGBcbiAgICAgICAgPGhhLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzcyF9XG4gICAgICAgICAgLmRhdGV0aW1lPSR7bGFzdENoYW5nZWR9XG4gICAgICAgID48L2hhLXJlbGF0aXZlLXRpbWU+XG4gICAgICBgLFxuICAgIH07XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BlcnRpZXM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcGVydGllcyk7XG5cbiAgICBpZiAoY2hhbmdlZFByb3BlcnRpZXMuaGFzKFwibG92ZWxhY2VcIikpIHtcbiAgICAgIHRoaXMuX2dldFVudXNlZEVudGl0aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLmxvdmVsYWNlKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxvdmVsYWNlLm1vZGUgPT09IFwic3RvcmFnZVwiICYmIHRoaXMubG92ZWxhY2UuZWRpdE1vZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWNhcmQgaGVhZGVyPVwiVW51c2VkIGVudGl0aWVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICBUaGVzZSBhcmUgdGhlIGVudGl0aWVzIHRoYXQgeW91IGhhdmUgYXZhaWxhYmxlLCBidXQgYXJlIG5vdCBpbiB5b3VyXG4gICAgICAgICAgTG92ZWxhY2UgVUkgeWV0LlxuICAgICAgICAgICR7dGhpcy5sb3ZlbGFjZS5tb2RlID09PSBcInN0b3JhZ2VcIlxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxiciAvPlNlbGVjdCB0aGUgZW50aXRpZXMgeW91IHdhbnQgdG8gYWRkIHRvIGEgY2FyZCBhbmQgdGhlblxuICAgICAgICAgICAgICAgIGNsaWNrIHRoZSBhZGQgY2FyZCBidXR0b24uXG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLWNhcmQ+XG4gICAgICA8aGEtZGF0YS10YWJsZVxuICAgICAgICAuY29sdW1ucz0ke3RoaXMuX2NvbHVtbnModGhpcy5uYXJyb3chKX1cbiAgICAgICAgLmRhdGE9JHt0aGlzLl91bnVzZWRFbnRpdGllcy5tYXAoKGVudGl0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5oYXNzIS5zdGF0ZXNbZW50aXR5XTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZW50aXR5X2lkOiBlbnRpdHksXG4gICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgLi4uc3RhdGVPYmosXG4gICAgICAgICAgICAgIGZyaWVuZGx5X25hbWU6IGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbWFpbjogY29tcHV0ZURvbWFpbihlbnRpdHkpLFxuICAgICAgICAgICAgbGFzdF9jaGFuZ2VkOiBzdGF0ZU9iaiEubGFzdF9jaGFuZ2VkLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pfVxuICAgICAgICAuaWQ9JHtcImVudGl0eV9pZFwifVxuICAgICAgICAuc2VsZWN0YWJsZT0ke3RoaXMubG92ZWxhY2UhLm1vZGUgPT09IFwic3RvcmFnZVwifVxuICAgICAgICBAc2VsZWN0aW9uLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVTZWxlY3Rpb25DaGFuZ2VkfVxuICAgICAgPjwvaGEtZGF0YS10YWJsZT5cbiAgICAgICR7dGhpcy5sb3ZlbGFjZS5tb2RlID09PSBcInN0b3JhZ2VcIlxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtZmFiXG4gICAgICAgICAgICAgIGNsYXNzPVwiJHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgcnRsOiBjb21wdXRlUlRMKHRoaXMuaGFzcyksXG4gICAgICAgICAgICAgIH0pfVwiXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLmVkaXRfY2FyZC5hZGRcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIEBjbGljaz1cIiR7dGhpcy5fc2VsZWN0Vmlld31cIlxuICAgICAgICAgICAgPjwvaGEtZmFiPlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9nZXRVbnVzZWRFbnRpdGllcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzcyB8fCAhdGhpcy5sb3ZlbGFjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEVudGl0aWVzID0gW107XG4gICAgdGhpcy5fdW51c2VkRW50aXRpZXMgPSBjb21wdXRlVW51c2VkRW50aXRpZXModGhpcy5oYXNzLCB0aGlzLl9jb25maWchKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlbGVjdGlvbkNoYW5nZWQoZXY6IEN1c3RvbUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2hhbmdlZFNlbGVjdGlvbiA9IGV2LmRldGFpbCBhcyBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gICAgY29uc3QgZW50aXR5ID0gY2hhbmdlZFNlbGVjdGlvbi5pZDtcbiAgICBpZiAoY2hhbmdlZFNlbGVjdGlvbi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5wdXNoKGVudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fc2VsZWN0ZWRFbnRpdGllcy5pbmRleE9mKGVudGl0eSk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRW50aXRpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVFbnRpdHlDbGlja2VkKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IGVudGl0eUlkID0gKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC5jbG9zZXN0KFwidHJcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIikhO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImhhc3MtbW9yZS1pbmZvXCIsIHtcbiAgICAgIGVudGl0eUlkLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0VmlldygpOiB2b2lkIHtcbiAgICBzaG93U2VsZWN0Vmlld0RpYWxvZyh0aGlzLCB7XG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgICB2aWV3U2VsZWN0ZWRDYWxsYmFjazogKHZpZXcpID0+IHRoaXMuX2FkZENhcmQodmlldyksXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hZGRDYXJkKHZpZXc6IG51bWJlcik6IHZvaWQge1xuICAgIHNob3dFZGl0Q2FyZERpYWxvZyh0aGlzLCB7XG4gICAgICBsb3ZlbGFjZTogdGhpcy5sb3ZlbGFjZSEsXG4gICAgICBwYXRoOiBbdmlld10sXG4gICAgICBlbnRpdGllczogdGhpcy5fc2VsZWN0ZWRFbnRpdGllcyxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbG92ZWxhY2UtYmFja2dyb3VuZCk7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBoYS1mYWIge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJvdHRvbTogMTZweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cbiAgICAgIGhhLWZhYi5ydGwge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIGhhLWNhcmQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS11bnVzZWQtZW50aXRpZXNcIjogSHVpVW51c2VkRW50aXRpZXM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1BO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQTJCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBSEE7QUFPQTtBQTFCQTtBQURBO0FBQ0E7QUEyQkE7QUFBQTtBQTNCQTs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFXQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTs7QUFvSUE7QUF2TEE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBbURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBZ0JBO0FBa0JBO0FBdENBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBSUE7QUFJQTtBQUxBO0FBQ0E7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQWtCQTs7O0FBQUE7QUFoTUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBUEE7QUFEQTtBQUNBO0FBa01BO0FBQUE7QUFsTUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9