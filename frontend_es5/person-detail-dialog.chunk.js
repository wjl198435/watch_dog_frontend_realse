(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["person-detail-dialog"],{

/***/ "./src/common/entity/valid_entity_id.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/valid_entity_id.ts ***!
  \**********************************************/
/*! exports provided: isValidEntityId, createValidEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidEntityId", function() { return isValidEntityId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidEntityId", function() { return createValidEntityId; });
var validEntityId = /^(\w+)\.(\w+)$/;
var isValidEntityId = function (entityId) {
    return validEntityId.test(entityId);
};
var createValidEntityId = function (input) {
    return input
        .toLowerCase()
        .replace(/\s|\'/g, "_") // replace spaces and quotes with underscore
        .replace(/\W/g, "") // remove not allowed chars
        .replace(/_{2,}/g, "_") // replace multiple underscores with 1
        .replace(/_$/, "");
}; // remove underscores at the end


/***/ }),

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


var HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");




var paperDialogClass = customElements.get("paper-dialog");
// behavior that will override existing iron-overlay-behavior and call the fixed implementation
var haTabFixBehaviorImpl = {
    get _focusableNodes() {
        return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_3__["HaIronFocusablesHelper"].getTabbableNodes(this);
    },
};
// paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore
var HaPaperDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPaperDialog, _super);
    function HaPaperDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HaPaperDialog;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass)));

customElements.define("ha-paper-dialog", HaPaperDialog);


/***/ }),

/***/ "./src/components/entity/ha-entities-picker.ts":
/*!*****************************************************!*\
  !*** ./src/components/entity/ha-entities-picker.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button_light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button-light */ "./node_modules/@polymer/paper-icon-button/paper-icon-button-light.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/valid_entity_id */ "./src/common/entity/valid_entity_id.ts");
/* harmony import */ var _ha_entity_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");






var HaEntitiesPickerLight = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaEntitiesPickerLight, _super);
    function HaEntitiesPickerLight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._entityFilter = function (stateObj) { return !_this.value || !_this.value.includes(stateObj.entity_id); };
        return _this;
    }
    HaEntitiesPickerLight.prototype.render = function () {
        var _this = this;
        if (!this.hass) {
            return;
        }
        var currentEntities = this._currentEntities;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div>\n        <ha-entity-picker\n          .hass=", "\n          .domainFilter=", "\n          .entityFilter=", "\n          .label=", "\n          @value-changed=", "\n        ></ha-entity-picker>\n      </div>\n    "], ["\n      ",
            "\n      <div>\n        <ha-entity-picker\n          .hass=", "\n          .domainFilter=", "\n          .entityFilter=", "\n          .label=", "\n          @value-changed=", "\n        ></ha-entity-picker>\n      </div>\n    "])), currentEntities.map(function (entityId) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          <div>\n            <ha-entity-picker\n              allow-custom-entity\n              .curValue=", "\n              .hass=", "\n              .domainFilter=", "\n              .entityFilter=", "\n              .value=", "\n              .label=", "\n              @value-changed=", "\n            ></ha-entity-picker>\n          </div>\n        "], ["\n          <div>\n            <ha-entity-picker\n              allow-custom-entity\n              .curValue=", "\n              .hass=", "\n              .domainFilter=", "\n              .entityFilter=", "\n              .value=", "\n              .label=", "\n              @value-changed=", "\n            ></ha-entity-picker>\n          </div>\n        "])), entityId, _this.hass, _this.domainFilter, _this._entityFilter, entityId, _this.pickedEntityLabel, _this._entityChanged); }), this.hass, this.domainFilter, this._entityFilter, this.pickEntityLabel, this._addEntity);
    };
    Object.defineProperty(HaEntitiesPickerLight.prototype, "_currentEntities", {
        get: function () {
            return this.value || [];
        },
        enumerable: true,
        configurable: true
    });
    HaEntitiesPickerLight.prototype._updateEntities = function (entities) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", {
                    value: entities,
                });
                this.value = entities;
                return [2 /*return*/];
            });
        });
    };
    HaEntitiesPickerLight.prototype._entityChanged = function (event) {
        event.stopPropagation();
        var curValue = event.currentTarget.curValue;
        var newValue = event.detail.value;
        if (newValue === curValue ||
            (newValue !== "" && !Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_4__["isValidEntityId"])(newValue))) {
            return;
        }
        if (newValue === "") {
            this._updateEntities(this._currentEntities.filter(function (ent) { return ent !== curValue; }));
        }
        else {
            this._updateEntities(this._currentEntities.map(function (ent) { return (ent === curValue ? newValue : ent); }));
        }
    };
    HaEntitiesPickerLight.prototype._addEntity = function (event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toAdd, currentEntities;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                event.stopPropagation();
                toAdd = event.detail.value;
                event.currentTarget.value = "";
                if (!toAdd) {
                    return [2 /*return*/];
                }
                currentEntities = this._currentEntities;
                if (currentEntities.includes(toAdd)) {
                    return [2 /*return*/];
                }
                this._updateEntities(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(currentEntities, [toAdd]));
                return [2 /*return*/];
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaEntitiesPickerLight.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaEntitiesPickerLight.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ attribute: "domain-filter" })
    ], HaEntitiesPickerLight.prototype, "domainFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ attribute: "picked-entity-label" })
    ], HaEntitiesPickerLight.prototype, "pickedEntityLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ attribute: "pick-entity-label" })
    ], HaEntitiesPickerLight.prototype, "pickEntityLabel", void 0);
    HaEntitiesPickerLight = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-entities-picker")
    ], HaEntitiesPickerLight);
    return HaEntitiesPickerLight;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/components/entity/ha-entity-picker.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-picker.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-combo-box/vaadin-combo-box-light */ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");











var rowRenderer = function (root, _owner, model) {
    if (!root.firstElementChild) {
        root.innerHTML = "\n      <style>\n        paper-icon-item {\n          margin: -10px;\n          padding: 0;\n        }\n      </style>\n      <paper-icon-item>\n        <state-badge state-obj=\"[[item]]\" slot=\"item-icon\"></state-badge>\n        <paper-item-body two-line=\"\">\n          <div class='name'>[[_computeStateName(item)]]</div>\n          <div secondary>[[item.entity_id]]</div>\n        </paper-item-body>\n      </paper-icon-item>\n    ";
    }
    root.querySelector("state-badge").stateObj = model.item;
    root.querySelector(".name").textContent = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(model.item);
    root.querySelector("[secondary]").textContent = model.item.entity_id;
};
var HaEntityPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaEntityPicker, _super);
    function HaEntityPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getStates = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (hass, domainFilter, entityFilter) {
            var states = [];
            if (!hass) {
                return [];
            }
            var entityIds = Object.keys(hass.states);
            if (domainFilter) {
                entityIds = entityIds.filter(function (eid) { return eid.substr(0, eid.indexOf(".")) === domainFilter; });
            }
            states = entityIds.sort().map(function (key) { return hass.states[key]; });
            if (entityFilter) {
                states = states.filter(function (stateObj) {
                    // We always want to include the entity of the current value
                    return stateObj.entity_id === _this.value || entityFilter(stateObj);
                });
            }
            return states;
        });
        return _this;
    }
    HaEntityPicker.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        if (changedProps.has("hass") && !this._opened) {
            this._hass = this.hass;
        }
    };
    HaEntityPicker.prototype.render = function () {
        var states = this._getStates(this._hass, this.domainFilter, this.entityFilter);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <vaadin-combo-box-light\n        item-value-path=\"entity_id\"\n        item-label-path=\"entity_id\"\n        .items=", "\n        .value=", "\n        .allowCustomValue=", "\n        .renderer=", "\n        @opened-changed=", "\n        @value-changed=", "\n      >\n        <paper-input\n          .autofocus=", "\n          .label=", "\n          .value=", "\n          .disabled=", "\n          class=\"input\"\n          autocapitalize=\"none\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          spellcheck=\"false\"\n        >\n          ", "\n          ", "\n        </paper-input>\n      </vaadin-combo-box-light>\n    "], ["\n      <vaadin-combo-box-light\n        item-value-path=\"entity_id\"\n        item-label-path=\"entity_id\"\n        .items=", "\n        .value=", "\n        .allowCustomValue=", "\n        .renderer=", "\n        @opened-changed=", "\n        @value-changed=", "\n      >\n        <paper-input\n          .autofocus=", "\n          .label=",
            "\n          .value=", "\n          .disabled=", "\n          class=\"input\"\n          autocapitalize=\"none\"\n          autocomplete=\"off\"\n          autocorrect=\"off\"\n          spellcheck=\"false\"\n        >\n          ",
            "\n          ",
            "\n        </paper-input>\n      </vaadin-combo-box-light>\n    "])), states, this._value, this.allowCustomEntity, rowRenderer, this._openedChanged, this._valueChanged, this.autofocus, this.label === undefined && this._hass
            ? this._hass.localize("ui.components.entity.entity-picker.entity")
            : this.label, this._value, this.disabled, this.value
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  aria-label=\"Clear\"\n                  slot=\"suffix\"\n                  class=\"clear-button\"\n                  icon=\"hass:close\"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  aria-label=\"Clear\"\n                  slot=\"suffix\"\n                  class=\"clear-button\"\n                  icon=\"hass:close\"\n                  no-ripple\n                >\n                  Clear\n                </paper-icon-button>\n              "]))) : "", states.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <paper-icon-button\n                  aria-label=\"Show entities\"\n                  slot=\"suffix\"\n                  class=\"toggle-button\"\n                  .icon=", "\n                >\n                  Toggle\n                </paper-icon-button>\n              "], ["\n                <paper-icon-button\n                  aria-label=\"Show entities\"\n                  slot=\"suffix\"\n                  class=\"toggle-button\"\n                  .icon=", "\n                >\n                  Toggle\n                </paper-icon-button>\n              "])), this._opened ? "hass:menu-up" : "hass:menu-down") : "");
    };
    Object.defineProperty(HaEntityPicker.prototype, "_value", {
        get: function () {
            return this.value || "";
        },
        enumerable: true,
        configurable: true
    });
    HaEntityPicker.prototype._openedChanged = function (ev) {
        this._opened = ev.detail.value;
    };
    HaEntityPicker.prototype._valueChanged = function (ev) {
        var _this = this;
        var newValue = ev.detail.value;
        if (newValue !== this._value) {
            this.value = ev.detail.value;
            setTimeout(function () {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "value-changed", { value: _this.value });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_10__["fireEvent"])(_this, "change");
            }, 0);
        }
    };
    Object.defineProperty(HaEntityPicker, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "], ["\n      paper-input > paper-icon-button {\n        width: 24px;\n        height: 24px;\n        padding: 2px;\n        color: var(--secondary-text-color);\n      }\n      [hidden] {\n        display: none;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "autofocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean, attribute: "allow-custom-entity" })
    ], HaEntityPicker.prototype, "allowCustomEntity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ attribute: "domain-filter" })
    ], HaEntityPicker.prototype, "domainFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "entityFilter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])({ type: Boolean })
    ], HaEntityPicker.prototype, "_opened", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_9__["property"])()
    ], HaEntityPicker.prototype, "_hass", void 0);
    return HaEntityPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_9__["LitElement"]));
customElements.define("ha-entity-picker", HaEntityPicker);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


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

/***/ "./src/components/user/ha-user-picker.ts":
/*!***********************************************!*\
  !*** ./src/components/user/ha-user-picker.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/user */ "./src/data/user.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");












var HaEntityPicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaEntityPicker, _super);
    function HaEntityPicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sortedUsers = Object(memoize_one__WEBPACK_IMPORTED_MODULE_7__["default"])(function (users) {
            if (!users || users.length === 1) {
                return users || [];
            }
            var sorted = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(users);
            sorted.sort(function (a, b) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_11__["compare"])(a.name, b.name); });
            return sorted;
        });
        return _this;
    }
    HaEntityPicker.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <paper-dropdown-menu-light .label=", ">\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"data-user-id\"\n          @iron-select=", "\n        >\n          <paper-icon-item data-user-id=\"\">\n            No user\n          </paper-icon-item>\n          ", "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "], ["\n      <paper-dropdown-menu-light .label=", ">\n        <paper-listbox\n          slot=\"dropdown-content\"\n          .selected=", "\n          attr-for-selected=\"data-user-id\"\n          @iron-select=", "\n        >\n          <paper-icon-item data-user-id=\"\">\n            No user\n          </paper-icon-item>\n          ",
            "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "])), this.label, this._value, this._userChanged, this._sortedUsers(this.users).map(function (user) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-icon-item data-user-id=", ">\n                <ha-user-badge .user=", " slot=\"item-icon\"></ha-user-badge>\n                ", "\n              </paper-icon-item>\n            "], ["\n              <paper-icon-item data-user-id=", ">\n                <ha-user-badge .user=", " slot=\"item-icon\"></ha-user-badge>\n                ", "\n              </paper-icon-item>\n            "])), user.id, user, user.name); }));
    };
    Object.defineProperty(HaEntityPicker.prototype, "_value", {
        get: function () {
            return this.value || "";
        },
        enumerable: true,
        configurable: true
    });
    HaEntityPicker.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        if (this.users === undefined) {
            Object(_data_user__WEBPACK_IMPORTED_MODULE_10__["fetchUsers"])(this.hass).then(function (users) {
                _this.users = users;
            });
        }
    };
    HaEntityPicker.prototype._userChanged = function (ev) {
        var _this = this;
        var newValue = ev.detail.item.dataset.userId;
        if (newValue !== this._value) {
            this.value = ev.detail.value;
            setTimeout(function () {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(_this, "value-changed", { value: newValue });
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(_this, "change");
            }, 0);
        }
    };
    Object.defineProperty(HaEntityPicker, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: inline-block;\n      }\n      paper-dropdown-menu-light {\n        display: block;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-icon-item {\n        cursor: pointer;\n      }\n    "], ["\n      :host {\n        display: inline-block;\n      }\n      paper-dropdown-menu-light {\n        display: block;\n      }\n      paper-listbox {\n        min-width: 200px;\n      }\n      paper-icon-item {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], HaEntityPicker.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], HaEntityPicker.prototype, "value", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_8__["property"])()
    ], HaEntityPicker.prototype, "users", void 0);
    return HaEntityPicker;
}(lit_element__WEBPACK_IMPORTED_MODULE_8__["LitElement"]));
customElements.define("ha-user-picker", HaEntityPicker);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/panels/config/person/dialog-person-detail.ts":
/*!**********************************************************!*\
  !*** ./src/panels/config/person/dialog-person-detail.ts ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _components_entity_ha_entities_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/entity/ha-entities-picker */ "./src/components/entity/ha-entities-picker.ts");
/* harmony import */ var _components_user_ha_user_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user/ha-user-picker */ "./src/components/user/ha-user-picker.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");









var DialogPersonDetail = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DialogPersonDetail, _super);
    function DialogPersonDetail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._submitting = false;
        return _this;
    }
    DialogPersonDetail.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._params = params;
                        this._error = undefined;
                        if (this._params.entry) {
                            this._name = this._params.entry.name || "";
                            this._userId = this._params.entry.user_id || undefined;
                            this._deviceTrackers = this._params.entry.device_trackers || [];
                        }
                        else {
                            this._name = "";
                            this._userId = undefined;
                            this._deviceTrackers = [];
                        }
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DialogPersonDetail.prototype.render = function () {
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var nameInvalid = this._name.trim() === "";
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=\"", "\"\n      >\n        <h2>\n          ", "\n        </h2>\n        <paper-dialog-scrollable>\n          ", "\n          <div class=\"form\">\n            <paper-input\n              .value=", "\n              @value-changed=", "\n              label=\"", "\"\n              error-message=\"", "\"\n              .invalid=", "\n            ></paper-input>\n            <ha-user-picker\n              label=\"", "\"\n              .hass=", "\n              .value=", "\n              .users=", "\n              @value-changed=", "\n            ></ha-user-picker>\n            <p>\n              ", "\n            </p>\n            <ha-entities-picker\n              .hass=", "\n              .value=", "\n              domain-filter=\"device_tracker\"\n              .pickedEntityLabel=", "\n              .pickEntityLabel=", "\n              @value-changed=", "\n            ></ha-entities-picker>\n          </div>\n        </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          ", "\n          <mwc-button\n            @click=\"", "\"\n            .disabled=", "\n          >\n            ", "\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=\"", "\"\n      >\n        <h2>\n          ",
            "\n        </h2>\n        <paper-dialog-scrollable>\n          ",
            "\n          <div class=\"form\">\n            <paper-input\n              .value=", "\n              @value-changed=", "\n              label=\"",
            "\"\n              error-message=\"",
            "\"\n              .invalid=", "\n            ></paper-input>\n            <ha-user-picker\n              label=\"",
            "\"\n              .hass=", "\n              .value=", "\n              .users=", "\n              @value-changed=", "\n            ></ha-user-picker>\n            <p>\n              ",
            "\n            </p>\n            <ha-entities-picker\n              .hass=", "\n              .value=", "\n              domain-filter=\"device_tracker\"\n              .pickedEntityLabel=",
            "\n              .pickEntityLabel=",
            "\n              @value-changed=", "\n            ></ha-entities-picker>\n          </div>\n        </paper-dialog-scrollable>\n        <div class=\"paper-dialog-buttons\">\n          ",
            "\n          <mwc-button\n            @click=\"", "\"\n            .disabled=", "\n          >\n            ",
            "\n          </mwc-button>\n        </div>\n      </ha-paper-dialog>\n    "])), this._openedChanged, this._params.entry
            ? this._params.entry.name
            : this.hass.localize("ui.panel.config.person.detail.new_person"), this._error
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div class=\"error\">", "</div>\n              "], ["\n                <div class=\"error\">", "</div>\n              "])), this._error) : "", this._name, this._nameChanged, this.hass.localize("ui.panel.config.person.detail.name"), this.hass.localize("ui.panel.config.person.detail.name_error_msg"), nameInvalid, this.hass.localize("ui.panel.config.person.detail.linked_user"), this.hass, this._userId, this._params.users, this._userChanged, this.hass.localize("ui.panel.config.person.detail.device_tracker_intro"), this.hass, this._deviceTrackers, this.hass.localize("ui.panel.config.person.detail.device_tracker_picked"), this.hass.localize("ui.panel.config.person.detail.device_tracker_pick"), this._deviceTrackersChanged, this._params.entry
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <mwc-button\n                  class=\"warning\"\n                  @click=\"", "\"\n                  .disabled=", "\n                >\n                  ", "\n                </mwc-button>\n              "], ["\n                <mwc-button\n                  class=\"warning\"\n                  @click=\"", "\"\n                  .disabled=", "\n                >\n                  ", "\n                </mwc-button>\n              "])), this._deleteEntry, this._submitting, this.hass.localize("ui.panel.config.person.detail.delete")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))), this._updateEntry, nameInvalid || this._submitting, this._params.entry
            ? this.hass.localize("ui.panel.config.person.detail.update")
            : this.hass.localize("ui.panel.config.person.detail.create"));
    };
    DialogPersonDetail.prototype._nameChanged = function (ev) {
        this._error = undefined;
        this._name = ev.detail.value;
    };
    DialogPersonDetail.prototype._userChanged = function (ev) {
        this._error = undefined;
        this._userId = ev.detail.value;
    };
    DialogPersonDetail.prototype._deviceTrackersChanged = function (ev) {
        this._error = undefined;
        this._deviceTrackers = ev.detail.value;
    };
    DialogPersonDetail.prototype._updateEntry = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var values, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._submitting = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        values = {
                            name: this._name.trim(),
                            device_trackers: this._deviceTrackers,
                            user_id: this._userId || null,
                        };
                        if (!this._params.entry) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._params.updateEntry(values)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this._params.createEntry(values)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        this._params = undefined;
                        return [3 /*break*/, 8];
                    case 6:
                        err_1 = _a.sent();
                        this._error = err_1 ? err_1.message : "Unknown error";
                        return [3 /*break*/, 8];
                    case 7:
                        this._submitting = false;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    DialogPersonDetail.prototype._deleteEntry = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._submitting = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this._params.removeEntry()];
                    case 2:
                        if (_a.sent()) {
                            this._params = undefined;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        this._submitting = false;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DialogPersonDetail.prototype._openedChanged = function (ev) {
        if (!ev.detail.value) {
            this._params = undefined;
        }
    };
    Object.defineProperty(DialogPersonDetail, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_8__["haStyleDialog"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ha-paper-dialog {\n          min-width: 400px;\n        }\n        .form {\n          padding-bottom: 24px;\n        }\n        ha-user-picker {\n          margin-top: 16px;\n        }\n        mwc-button.warning {\n          margin-right: auto;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n      "], ["\n        ha-paper-dialog {\n          min-width: 400px;\n        }\n        .form {\n          padding-bottom: 24px;\n        }\n        ha-user-picker {\n          margin-top: 16px;\n        }\n        mwc-button.warning {\n          margin-right: auto;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "_name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "_userId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "_deviceTrackers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "_error", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "_params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DialogPersonDetail.prototype, "_submitting", void 0);
    return DialogPersonDetail;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
customElements.define("dialog-person-detail", DialogPersonDetail);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uLWRldGFpbC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS92YWxpZF9lbnRpdHlfaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXRpZXMtcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdHktcGlja2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdXNlci9oYS11c2VyLXBpY2tlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2NvbmZpZy9wZXJzb24vZGlhbG9nLXBlcnNvbi1kZXRhaWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdmFsaWRFbnRpdHlJZCA9IC9eKFxcdyspXFwuKFxcdyspJC87XG5cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRW50aXR5SWQgPSAoZW50aXR5SWQ6IHN0cmluZykgPT5cbiAgdmFsaWRFbnRpdHlJZC50ZXN0KGVudGl0eUlkKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbGlkRW50aXR5SWQgPSAoaW5wdXQ6IHN0cmluZykgPT5cbiAgaW5wdXRcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHN8XFwnL2csIFwiX1wiKSAvLyByZXBsYWNlIHNwYWNlcyBhbmQgcXVvdGVzIHdpdGggdW5kZXJzY29yZVxuICAgIC5yZXBsYWNlKC9cXFcvZywgXCJcIikgLy8gcmVtb3ZlIG5vdCBhbGxvd2VkIGNoYXJzXG4gICAgLnJlcGxhY2UoL197Mix9L2csIFwiX1wiKSAvLyByZXBsYWNlIG11bHRpcGxlIHVuZGVyc2NvcmVzIHdpdGggMVxuICAgIC5yZXBsYWNlKC9fJC8sIFwiXCIpOyAvLyByZW1vdmUgdW5kZXJzY29yZXMgYXQgdGhlIGVuZFxuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuICBGaXhlcyBpc3N1ZSB3aXRoIG5vdCB1c2luZyBzaGFkb3cgZG9tIHByb3Blcmx5IGluIGlyb24tb3ZlcmxheS1iZWhhdmlvci9pY29uLWZvY3VzYWJsZXMtaGVscGVyLmpzXG4qL1xuaW1wb3J0IHsgZG9tIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qc1wiO1xuXG5pbXBvcnQgeyBJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCJAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuXG5leHBvcnQgY29uc3QgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX3NvcnRCeVRhYkluZGV4KHJlc3VsdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChcbiAgICAgIG5vZGUubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAhSXJvbkZvY3VzYWJsZXNIZWxwZXIuX2lzVmlzaWJsZShub2RlKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gSXJvbkZvY3VzYWJsZXNIZWxwZXIuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICB2YXIgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJ1YnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RydWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIC8vIFRPRE8odmFsZHJpbikgc3VwcG9ydCBTaGFkb3dET00gdjEgd2hlbiB1cGdyYWRpbmcgdG8gUG9seW1lciB2Mi4wLlxuICAgIHZhciBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09IFwiY29udGVudFwiIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSBcInNsb3RcIikge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgLy8gVEhJUyBJUyBUSEUgQ0hBTkdFRCBMSU5FXG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50LnNoYWRvd1Jvb3QgfHwgZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG59O1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBIYUlyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIi4vaGEtaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ0VsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItZGlhbG9nL3BhcGVyLWRpYWxvZ1wiO1xuXG5jb25zdCBwYXBlckRpYWxvZ0NsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwicGFwZXItZGlhbG9nXCIpO1xuXG4vLyBiZWhhdmlvciB0aGF0IHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgaXJvbi1vdmVybGF5LWJlaGF2aW9yIGFuZCBjYWxsIHRoZSBmaXhlZCBpbXBsZW1lbnRhdGlvblxuY29uc3QgaGFUYWJGaXhCZWhhdmlvckltcGwgPSB7XG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcbn07XG5cbi8vIHBhcGVyLWRpYWxvZyB0aGF0IHVzZXMgdGhlIGhhVGFiRml4QmVoYXZpb3JJbXBsIGJlaHZhaW9yXG4vLyBleHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZyBleHRlbmRzIHBhcGVyRGlhbG9nQ2xhc3Mge31cbi8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nXG4gIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoW2hhVGFiRml4QmVoYXZpb3JJbXBsXSwgcGFwZXJEaWFsb2dDbGFzcylcbiAgaW1wbGVtZW50cyBQYXBlckRpYWxvZ0VsZW1lbnQge31cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLXBhcGVyLWRpYWxvZ1wiOiBIYVBhcGVyRGlhbG9nO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kaWFsb2dcIiwgSGFQYXBlckRpYWxvZyk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgcHJvcGVydHksXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24tbGlnaHRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBpc1ZhbGlkRW50aXR5SWQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS92YWxpZF9lbnRpdHlfaWRcIjtcblxuaW1wb3J0IFwiLi9oYS1lbnRpdHktcGlja2VyXCI7XG4vLyBOb3QgYSBkdXBsaWNhdGUsIHR5cGUgaW1wb3J0XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyB9IGZyb20gXCIuL2hhLWVudGl0eS1waWNrZXJcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtZW50aXRpZXMtcGlja2VyXCIpXG5jbGFzcyBIYUVudGl0aWVzUGlja2VyTGlnaHQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdmFsdWU/OiBzdHJpbmdbXTtcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcImRvbWFpbi1maWx0ZXJcIiB9KSBwdWJsaWMgZG9tYWluRmlsdGVyPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyBhdHRyaWJ1dGU6IFwicGlja2VkLWVudGl0eS1sYWJlbFwiIH0pXG4gIHB1YmxpYyBwaWNrZWRFbnRpdHlMYWJlbD86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcInBpY2stZW50aXR5LWxhYmVsXCIgfSkgcHVibGljIHBpY2tFbnRpdHlMYWJlbD86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudEVudGl0aWVzID0gdGhpcy5fY3VycmVudEVudGl0aWVzO1xuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtjdXJyZW50RW50aXRpZXMubWFwKFxuICAgICAgICAoZW50aXR5SWQpID0+IGh0bWxgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoYS1lbnRpdHktcGlja2VyXG4gICAgICAgICAgICAgIGFsbG93LWN1c3RvbS1lbnRpdHlcbiAgICAgICAgICAgICAgLmN1clZhbHVlPSR7ZW50aXR5SWR9XG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAuZG9tYWluRmlsdGVyPSR7dGhpcy5kb21haW5GaWx0ZXJ9XG4gICAgICAgICAgICAgIC5lbnRpdHlGaWx0ZXI9JHt0aGlzLl9lbnRpdHlGaWx0ZXJ9XG4gICAgICAgICAgICAgIC52YWx1ZT0ke2VudGl0eUlkfVxuICAgICAgICAgICAgICAubGFiZWw9JHt0aGlzLnBpY2tlZEVudGl0eUxhYmVsfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2VudGl0eUNoYW5nZWR9XG4gICAgICAgICAgICA+PC9oYS1lbnRpdHktcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICApfVxuICAgICAgPGRpdj5cbiAgICAgICAgPGhhLWVudGl0eS1waWNrZXJcbiAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAuZG9tYWluRmlsdGVyPSR7dGhpcy5kb21haW5GaWx0ZXJ9XG4gICAgICAgICAgLmVudGl0eUZpbHRlcj0ke3RoaXMuX2VudGl0eUZpbHRlcn1cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLnBpY2tFbnRpdHlMYWJlbH1cbiAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2FkZEVudGl0eX1cbiAgICAgICAgPjwvaGEtZW50aXR5LXBpY2tlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlGaWx0ZXI6IEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyA9IChcbiAgICBzdGF0ZU9iajogSGFzc0VudGl0eVxuICApID0+ICF0aGlzLnZhbHVlIHx8ICF0aGlzLnZhbHVlLmluY2x1ZGVzKHN0YXRlT2JqLmVudGl0eV9pZCk7XG5cbiAgcHJpdmF0ZSBnZXQgX2N1cnJlbnRFbnRpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSB8fCBbXTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3VwZGF0ZUVudGl0aWVzKGVudGl0aWVzKSB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwidmFsdWUtY2hhbmdlZFwiLCB7XG4gICAgICB2YWx1ZTogZW50aXRpZXMsXG4gICAgfSk7XG5cbiAgICB0aGlzLnZhbHVlID0gZW50aXRpZXM7XG4gIH1cblxuICBwcml2YXRlIF9lbnRpdHlDaGFuZ2VkKGV2ZW50OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjdXJWYWx1ZSA9IChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkuY3VyVmFsdWU7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBldmVudC5kZXRhaWwudmFsdWU7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgPT09IGN1clZhbHVlIHx8XG4gICAgICAobmV3VmFsdWUgIT09IFwiXCIgJiYgIWlzVmFsaWRFbnRpdHlJZChuZXdWYWx1ZSkpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5fdXBkYXRlRW50aXRpZXMoXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFbnRpdGllcy5maWx0ZXIoKGVudCkgPT4gZW50ICE9PSBjdXJWYWx1ZSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUVudGl0aWVzKFxuICAgICAgICB0aGlzLl9jdXJyZW50RW50aXRpZXMubWFwKChlbnQpID0+IChlbnQgPT09IGN1clZhbHVlID8gbmV3VmFsdWUgOiBlbnQpKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hZGRFbnRpdHkoZXZlbnQ6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nPikge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHRvQWRkID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIGFueSkudmFsdWUgPSBcIlwiO1xuICAgIGlmICghdG9BZGQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudEVudGl0aWVzID0gdGhpcy5fY3VycmVudEVudGl0aWVzO1xuICAgIGlmIChjdXJyZW50RW50aXRpZXMuaW5jbHVkZXModG9BZGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlRW50aXRpZXMoWy4uLmN1cnJlbnRFbnRpdGllcywgdG9BZGRdKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZW50aXRpZXMtcGlja2VyXCI6IEhhRW50aXRpZXNQaWNrZXJMaWdodDtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWljb24taXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHlcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWNvbWJvLWJveC92YWFkaW4tY29tYm8tYm94LWxpZ2h0XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1iYWRnZVwiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmV4cG9ydCB0eXBlIEhhRW50aXR5UGlja2VyRW50aXR5RmlsdGVyRnVuYyA9IChlbnRpdHlJZDogSGFzc0VudGl0eSkgPT4gYm9vbGVhbjtcblxuY29uc3Qgcm93UmVuZGVyZXIgPSAoXG4gIHJvb3Q6IEhUTUxFbGVtZW50LFxuICBfb3duZXIsXG4gIG1vZGVsOiB7IGl0ZW06IEhhc3NFbnRpdHkgfVxuKSA9PiB7XG4gIGlmICghcm9vdC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHJvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgPHN0eWxlPlxuICAgICAgICBwYXBlci1pY29uLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogLTEwcHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxwYXBlci1pY29uLWl0ZW0+XG4gICAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW2l0ZW1dXVwiIHNsb3Q9XCJpdGVtLWljb25cIj48L3N0YXRlLWJhZGdlPlxuICAgICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPVwiXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz0nbmFtZSc+W1tfY29tcHV0ZVN0YXRlTmFtZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPGRpdiBzZWNvbmRhcnk+W1tpdGVtLmVudGl0eV9pZF1dPC9kaXY+XG4gICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgYDtcbiAgfVxuXG4gIHJvb3QucXVlcnlTZWxlY3RvcihcInN0YXRlLWJhZGdlXCIpIS5zdGF0ZU9iaiA9IG1vZGVsLml0ZW07XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpIS50ZXh0Q29udGVudCA9IGNvbXB1dGVTdGF0ZU5hbWUobW9kZWwuaXRlbSk7XG4gIHJvb3QucXVlcnlTZWxlY3RvcihcIltzZWNvbmRhcnldXCIpIS50ZXh0Q29udGVudCA9IG1vZGVsLml0ZW0uZW50aXR5X2lkO1xufTtcblxuY2xhc3MgSGFFbnRpdHlQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYXV0b2ZvY3VzPzogYm9vbGVhbjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IFwiYWxsb3ctY3VzdG9tLWVudGl0eVwiIH0pXG4gIHB1YmxpYyBhbGxvd0N1c3RvbUVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KHsgYXR0cmlidXRlOiBcImRvbWFpbi1maWx0ZXJcIiB9KSBwdWJsaWMgZG9tYWluRmlsdGVyPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgZW50aXR5RmlsdGVyPzogSGFFbnRpdHlQaWNrZXJFbnRpdHlGaWx0ZXJGdW5jO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX29wZW5lZD86IGJvb2xlYW47XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2hhc3M/OiBIb21lQXNzaXN0YW50O1xuXG4gIHByaXZhdGUgX2dldFN0YXRlcyA9IG1lbW9pemVPbmUoXG4gICAgKFxuICAgICAgaGFzczogdGhpc1tcImhhc3NcIl0sXG4gICAgICBkb21haW5GaWx0ZXI6IHRoaXNbXCJkb21haW5GaWx0ZXJcIl0sXG4gICAgICBlbnRpdHlGaWx0ZXI6IHRoaXNbXCJlbnRpdHlGaWx0ZXJcIl1cbiAgICApID0+IHtcbiAgICAgIGxldCBzdGF0ZXM6IEhhc3NFbnRpdHlbXSA9IFtdO1xuXG4gICAgICBpZiAoIWhhc3MpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgbGV0IGVudGl0eUlkcyA9IE9iamVjdC5rZXlzKGhhc3Muc3RhdGVzKTtcblxuICAgICAgaWYgKGRvbWFpbkZpbHRlcikge1xuICAgICAgICBlbnRpdHlJZHMgPSBlbnRpdHlJZHMuZmlsdGVyKFxuICAgICAgICAgIChlaWQpID0+IGVpZC5zdWJzdHIoMCwgZWlkLmluZGV4T2YoXCIuXCIpKSA9PT0gZG9tYWluRmlsdGVyXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlcyA9IGVudGl0eUlkcy5zb3J0KCkubWFwKChrZXkpID0+IGhhc3MhLnN0YXRlc1trZXldKTtcblxuICAgICAgaWYgKGVudGl0eUZpbHRlcikge1xuICAgICAgICBzdGF0ZXMgPSBzdGF0ZXMuZmlsdGVyKFxuICAgICAgICAgIChzdGF0ZU9iaikgPT5cbiAgICAgICAgICAgIC8vIFdlIGFsd2F5cyB3YW50IHRvIGluY2x1ZGUgdGhlIGVudGl0eSBvZiB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgc3RhdGVPYmouZW50aXR5X2lkID09PSB0aGlzLnZhbHVlIHx8IGVudGl0eUZpbHRlciEoc3RhdGVPYmopXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGVzO1xuICAgIH1cbiAgKTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJoYXNzXCIpICYmICF0aGlzLl9vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2hhc3MgPSB0aGlzLmhhc3M7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuX2dldFN0YXRlcyhcbiAgICAgIHRoaXMuX2hhc3MsXG4gICAgICB0aGlzLmRvbWFpbkZpbHRlcixcbiAgICAgIHRoaXMuZW50aXR5RmlsdGVyXG4gICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPHZhYWRpbi1jb21iby1ib3gtbGlnaHRcbiAgICAgICAgaXRlbS12YWx1ZS1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgaXRlbS1sYWJlbC1wYXRoPVwiZW50aXR5X2lkXCJcbiAgICAgICAgLml0ZW1zPSR7c3RhdGVzfVxuICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgLmFsbG93Q3VzdG9tVmFsdWU9JHt0aGlzLmFsbG93Q3VzdG9tRW50aXR5fVxuICAgICAgICAucmVuZGVyZXI9JHtyb3dSZW5kZXJlcn1cbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl92YWx1ZUNoYW5nZWR9XG4gICAgICA+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIC5hdXRvZm9jdXM9JHt0aGlzLmF1dG9mb2N1c31cbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmxhYmVsID09PSB1bmRlZmluZWQgJiYgdGhpcy5faGFzc1xuICAgICAgICAgICAgPyB0aGlzLl9oYXNzLmxvY2FsaXplKFwidWkuY29tcG9uZW50cy5lbnRpdHkuZW50aXR5LXBpY2tlci5lbnRpdHlcIilcbiAgICAgICAgICAgIDogdGhpcy5sYWJlbH1cbiAgICAgICAgICAudmFsdWU9JHt0aGlzLl92YWx1ZX1cbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLmRpc2FibGVkfVxuICAgICAgICAgIGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgIGF1dG9jYXBpdGFsaXplPVwibm9uZVwiXG4gICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICBhdXRvY29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgc3BlbGxjaGVjaz1cImZhbHNlXCJcbiAgICAgICAgPlxuICAgICAgICAgICR7dGhpcy52YWx1ZVxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgICAgbm8tcmlwcGxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2xlYXJcbiAgICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgJHtzdGF0ZXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgZW50aXRpZXNcIlxuICAgICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgLmljb249JHt0aGlzLl9vcGVuZWQgPyBcImhhc3M6bWVudS11cFwiIDogXCJoYXNzOm1lbnUtZG93blwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvZ2dsZVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KSB7XG4gICAgdGhpcy5fb3BlbmVkID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsdWVDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAobmV3VmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogdGhpcy52YWx1ZSB9KTtcbiAgICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiY2hhbmdlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQgPiBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cbiAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS1waWNrZXJcIiwgSGFFbnRpdHlQaWNrZXIpO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtZW50aXR5LXBpY2tlclwiOiBIYUVudGl0eVBpY2tlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaWNvbi1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCBtZW1vaXplT25lIGZyb20gXCJtZW1vaXplLW9uZVwiO1xuaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgQ1NTUmVzdWx0LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBVc2VyLCBmZXRjaFVzZXJzIH0gZnJvbSBcIi4uLy4uL2RhdGEvdXNlclwiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi8uLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcblxuY2xhc3MgSGFFbnRpdHlQaWNrZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbGFiZWw/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyB2YWx1ZT86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHVzZXJzPzogVXNlcltdO1xuXG4gIHByaXZhdGUgX3NvcnRlZFVzZXJzID0gbWVtb2l6ZU9uZSgodXNlcnM/OiBVc2VyW10pID0+IHtcbiAgICBpZiAoIXVzZXJzIHx8IHVzZXJzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHVzZXJzIHx8IFtdO1xuICAgIH1cbiAgICBjb25zdCBzb3J0ZWQgPSBbLi4udXNlcnNdO1xuICAgIHNvcnRlZC5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGEubmFtZSwgYi5uYW1lKSk7XG4gICAgcmV0dXJuIHNvcnRlZDtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQgLmxhYmVsPSR7dGhpcy5sYWJlbH0+XG4gICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgIC5zZWxlY3RlZD0ke3RoaXMuX3ZhbHVlfVxuICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiZGF0YS11c2VyLWlkXCJcbiAgICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl91c2VyQ2hhbmdlZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWl0ZW0gZGF0YS11c2VyLWlkPVwiXCI+XG4gICAgICAgICAgICBObyB1c2VyXG4gICAgICAgICAgPC9wYXBlci1pY29uLWl0ZW0+XG4gICAgICAgICAgJHt0aGlzLl9zb3J0ZWRVc2Vycyh0aGlzLnVzZXJzKS5tYXAoXG4gICAgICAgICAgICAodXNlcikgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24taXRlbSBkYXRhLXVzZXItaWQ9JHt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICA8aGEtdXNlci1iYWRnZSAudXNlcj0ke3VzZXJ9IHNsb3Q9XCJpdGVtLWljb25cIj48L2hhLXVzZXItYmFkZ2U+XG4gICAgICAgICAgICAgICAgJHt1c2VyLm5hbWV9XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1pdGVtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICl9XG4gICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlIHx8IFwiXCI7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmICh0aGlzLnVzZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZldGNoVXNlcnModGhpcy5oYXNzISkudGhlbigodXNlcnMpID0+IHtcbiAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXNlckNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2LmRldGFpbC5pdGVtLmRhdGFzZXQudXNlcklkO1xuXG4gICAgaWYgKG5ld1ZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IG5ld1ZhbHVlIH0pO1xuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJjaGFuZ2VcIik7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIHBhcGVyLWxpc3Rib3gge1xuICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaWNvbi1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtdXNlci1waWNrZXJcIiwgSGFFbnRpdHlQaWNrZXIpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgaHRtbCxcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBwcm9wZXJ0eSxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2VudGl0eS9oYS1lbnRpdGllcy1waWNrZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXNlci9oYS11c2VyLXBpY2tlclwiO1xuaW1wb3J0IHsgUGVyc29uRGV0YWlsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctcGVyc29uLWRldGFpbFwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBoYVN0eWxlRGlhbG9nIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc291cmNlcy9zdHlsZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBlcnNvbk11dGFibGVQYXJhbXMgfSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9wZXJzb25cIjtcblxuY2xhc3MgRGlhbG9nUGVyc29uRGV0YWlsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbmFtZSE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdXNlcklkPzogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9kZXZpY2VUcmFja2VycyE6IHN0cmluZ1tdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lcnJvcj86IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogUGVyc29uRGV0YWlsRGlhbG9nUGFyYW1zO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdWJtaXR0aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBQZXJzb25EZXRhaWxEaWFsb2dQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuX3BhcmFtcy5lbnRyeSkge1xuICAgICAgdGhpcy5fbmFtZSA9IHRoaXMuX3BhcmFtcy5lbnRyeS5uYW1lIHx8IFwiXCI7XG4gICAgICB0aGlzLl91c2VySWQgPSB0aGlzLl9wYXJhbXMuZW50cnkudXNlcl9pZCB8fCB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9kZXZpY2VUcmFja2VycyA9IHRoaXMuX3BhcmFtcy5lbnRyeS5kZXZpY2VfdHJhY2tlcnMgfHwgW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5fdXNlcklkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fZGV2aWNlVHJhY2tlcnMgPSBbXTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgY29uc3QgbmFtZUludmFsaWQgPSB0aGlzLl9uYW1lLnRyaW0oKSA9PT0gXCJcIjtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPVwiJHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVwiXG4gICAgICA+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICAke3RoaXMuX3BhcmFtcy5lbnRyeVxuICAgICAgICAgICAgPyB0aGlzLl9wYXJhbXMuZW50cnkubmFtZVxuICAgICAgICAgICAgOiB0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwubmV3X3BlcnNvblwiKX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgICR7dGhpcy5fZXJyb3JcbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj4ke3RoaXMuX2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICBgXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl9uYW1lfVxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX25hbWVDaGFuZ2VkfVxuICAgICAgICAgICAgICBsYWJlbD1cIiR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLm5hbWVcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmRldGFpbC5uYW1lX2Vycm9yX21zZ1wiXG4gICAgICAgICAgICAgICl9XCJcbiAgICAgICAgICAgICAgLmludmFsaWQ9JHtuYW1lSW52YWxpZH1cbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgICAgPGhhLXVzZXItcGlja2VyXG4gICAgICAgICAgICAgIGxhYmVsPVwiJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwubGlua2VkX3VzZXJcIlxuICAgICAgICAgICAgICApfVwiXG4gICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAudmFsdWU9JHt0aGlzLl91c2VySWR9XG4gICAgICAgICAgICAgIC51c2Vycz0ke3RoaXMuX3BhcmFtcy51c2Vyc31cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl91c2VyQ2hhbmdlZH1cbiAgICAgICAgICAgID48L2hhLXVzZXItcGlja2VyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLnBlcnNvbi5kZXRhaWwuZGV2aWNlX3RyYWNrZXJfaW50cm9cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGhhLWVudGl0aWVzLXBpY2tlclxuICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgLnZhbHVlPSR7dGhpcy5fZGV2aWNlVHJhY2tlcnN9XG4gICAgICAgICAgICAgIGRvbWFpbi1maWx0ZXI9XCJkZXZpY2VfdHJhY2tlclwiXG4gICAgICAgICAgICAgIC5waWNrZWRFbnRpdHlMYWJlbD0ke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLmRldmljZV90cmFja2VyX3BpY2tlZFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIC5waWNrRW50aXR5TGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmRldGFpbC5kZXZpY2VfdHJhY2tlcl9waWNrXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9kZXZpY2VUcmFja2Vyc0NoYW5nZWR9XG4gICAgICAgICAgICA+PC9oYS1lbnRpdGllcy1waWNrZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXBlci1kaWFsb2ctYnV0dG9uc1wiPlxuICAgICAgICAgICR7dGhpcy5fcGFyYW1zLmVudHJ5XG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2RlbGV0ZUVudHJ5fVwiXG4gICAgICAgICAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLmRlbGV0ZVwiKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogaHRtbGBgfVxuICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX3VwZGF0ZUVudHJ5fVwiXG4gICAgICAgICAgICAuZGlzYWJsZWQ9JHtuYW1lSW52YWxpZCB8fCB0aGlzLl9zdWJtaXR0aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgICR7dGhpcy5fcGFyYW1zLmVudHJ5XG4gICAgICAgICAgICAgID8gdGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLnBhbmVsLmNvbmZpZy5wZXJzb24uZGV0YWlsLnVwZGF0ZVwiKVxuICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcucGVyc29uLmRldGFpbC5jcmVhdGVcIil9XG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9uYW1lQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbmFtZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX3VzZXJDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PHN0cmluZz4pIHtcbiAgICB0aGlzLl9lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl91c2VySWQgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIF9kZXZpY2VUcmFja2Vyc0NoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8c3RyaW5nW10+KSB7XG4gICAgdGhpcy5fZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGV2aWNlVHJhY2tlcnMgPSBldi5kZXRhaWwudmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF91cGRhdGVFbnRyeSgpIHtcbiAgICB0aGlzLl9zdWJtaXR0aW5nID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmFsdWVzOiBQZXJzb25NdXRhYmxlUGFyYW1zID0ge1xuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRyaW0oKSxcbiAgICAgICAgZGV2aWNlX3RyYWNrZXJzOiB0aGlzLl9kZXZpY2VUcmFja2VycyxcbiAgICAgICAgdXNlcl9pZDogdGhpcy5fdXNlcklkIHx8IG51bGwsXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuX3BhcmFtcyEuZW50cnkpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fcGFyYW1zIS51cGRhdGVFbnRyeSh2YWx1ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5fcGFyYW1zIS5jcmVhdGVFbnRyeSh2YWx1ZXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5fZXJyb3IgPSBlcnIgPyBlcnIubWVzc2FnZSA6IFwiVW5rbm93biBlcnJvclwiO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGVsZXRlRW50cnkoKSB7XG4gICAgdGhpcy5fc3VibWl0dGluZyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCB0aGlzLl9wYXJhbXMhLnJlbW92ZUVudHJ5KCkpIHtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLl9zdWJtaXR0aW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIGlmICghKGV2LmRldGFpbCBhcyBhbnkpLnZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0W10ge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0ge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLXVzZXItcGlja2VyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIG13Yy1idXR0b24ud2FybmluZyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctcGVyc29uLWRldGFpbFwiOiBEaWFsb2dQZXJzb25EZXRhaWw7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiZGlhbG9nLXBlcnNvbi1kZXRhaWxcIiwgRGlhbG9nUGVyc29uRGV0YWlsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUFBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFPQTtBQUlBO0FBQ0E7QUFFQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBMENBOztBQW1EQTtBQXJGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQVdBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7OztBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFDQTtBQTNGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBQ0E7QUE2RkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQVlBO0FBSUE7QUFLQTtBQUNBO0FBZUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQXdHQTtBQXJHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFlQTtBQXFCQTtBQVlBO0FBbENBO0FBQ0E7QUFVQTtBQWFBO0FBY0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBV0E7OztBQUFBO0FBaEpBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQXVJQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6TUE7QUFLQTtBQUlBO0FBRUE7QUFBQTtBQUFBOztBQWVBO0FBWkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFvRUE7QUFsRUE7QUFDQTtBQWtCQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQWNBOzs7QUFBQTtBQTlFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUE2RUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQU9BOztBQW1MQTtBQWpMQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBT0E7QUFPQTtBQUdBO0FBTUE7QUFTQTtBQVFBO0FBR0E7QUFnQkE7QUFPQTtBQW5FQTtBQUNBO0FBSUE7QUE4Q0E7QUFlQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTs7QUFFQTs7QUFBQTs7O0FBRUE7Ozs7QUFFQTs7O0FBRUE7Ozs7OztBQUVBO0FBRUE7Ozs7O0FBQ0E7Ozs7QUFFQTs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7OztBQUFBO0FBeExBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQW1MQTtBQUFBO0FBUUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9