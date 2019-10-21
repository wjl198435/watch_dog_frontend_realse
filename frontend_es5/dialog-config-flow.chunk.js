(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-config-flow"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/resources/markdown_worker.ts":
/*!*******************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/resources/markdown_worker.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["renderMarkdown"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "1ad83d98797d8f2144f6.worker.js", { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ "./src/common/search/search-input.ts":
/*!*******************************************!*\
  !*** ./src/common/search/search-input.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");








var SearchInput = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SearchInput, _super);
    function SearchInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchInput.prototype.render = function () {
        return Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"search-container\">\n        <paper-input\n          autofocus\n          label=\"Search\"\n          .value=", "\n          @value-changed=", "\n        >\n          <iron-icon\n            icon=\"hass:magnify\"\n            slot=\"prefix\"\n            class=\"prefix\"\n          ></iron-icon>\n          ", "\n        </paper-input>\n      </div>\n    "], ["\n      <div class=\"search-container\">\n        <paper-input\n          autofocus\n          label=\"Search\"\n          .value=", "\n          @value-changed=", "\n        >\n          <iron-icon\n            icon=\"hass:magnify\"\n            slot=\"prefix\"\n            class=\"prefix\"\n          ></iron-icon>\n          ",
            "\n        </paper-input>\n      </div>\n    "])), this.filter, this._filterInputChanged, this.filter && Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-icon-button\n                slot=\"suffix\"\n                class=\"suffix\"\n                @click=", "\n                icon=\"hass:close\"\n                alt=\"Clear\"\n                title=\"Clear\"\n              ></paper-icon-button>\n            "], ["\n              <paper-icon-button\n                slot=\"suffix\"\n                class=\"suffix\"\n                @click=", "\n                icon=\"hass:close\"\n                alt=\"Clear\"\n                title=\"Clear\"\n              ></paper-icon-button>\n            "])), this._clearSearch));
    };
    SearchInput.prototype._filterChanged = function (value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", { value: String(value) });
                return [2 /*return*/];
            });
        });
    };
    SearchInput.prototype._filterInputChanged = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._filterChanged(e.target.value);
                return [2 /*return*/];
            });
        });
    };
    SearchInput.prototype._clearSearch = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._filterChanged("");
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(SearchInput, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    "], ["\n      paper-input {\n        flex: 1 1 auto;\n        margin: 0 16px;\n      }\n      .search-container {\n        display: inline-flex;\n        width: 100%;\n        align-items: center;\n      }\n      .prefix {\n        margin: 8px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
    ], SearchInput.prototype, "filter", void 0);
    SearchInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("search-input")
    ], SearchInput);
    return SearchInput;
}(lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


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

/***/ "./src/components/ha-icon-next.ts":
/*!****************************************!*\
  !*** ./src/components/ha-icon-next.ts ***!
  \****************************************/
/*! exports provided: HaIconNext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIconNext", function() { return HaIconNext; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");


// Not duplicate, this is for typing.
// tslint:disable-next-line

var HaIconNext = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaIconNext, _super);
    function HaIconNext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaIconNext.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(function () {
            _this.icon =
                window.getComputedStyle(_this).direction === "ltr"
                    ? "hass:chevron-right"
                    : "hass:chevron-left";
        }, 100);
    };
    return HaIconNext;
}(_ha_icon__WEBPACK_IMPORTED_MODULE_2__["HaIcon"]));

customElements.define("ha-icon-next", HaIconNext);


/***/ }),

/***/ "./src/components/ha-markdown.ts":
/*!***************************************!*\
  !*** ./src/components/ha-markdown.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workerize-loader!../resources/markdown_worker */ "./node_modules/workerize-loader/dist/index.js!./src/resources/markdown_worker.ts");
/* harmony import */ var workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies


var worker;
var HaMarkdown = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaMarkdown, _super);
    function HaMarkdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = "";
        _this.allowSvg = false;
        _this._resize = function () { return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(_this, "iron-resize"); };
        return _this;
    }
    HaMarkdown.prototype.update = function (changedProps) {
        _super.prototype.update.call(this, changedProps);
        if (!worker) {
            worker = workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default()();
        }
        this._render();
    };
    HaMarkdown.prototype._render = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, walker, node;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, worker.renderMarkdown(this.content, {
                                breaks: true,
                                gfm: true,
                                tables: true,
                            }, {
                                allowSvg: this.allowSvg,
                            })];
                    case 1:
                        _a.innerHTML = _b.sent();
                        this._resize();
                        walker = document.createTreeWalker(this, 1 /* SHOW_ELEMENT */, null, false);
                        while (walker.nextNode()) {
                            node = walker.currentNode;
                            // Open external links in a new window
                            if (node instanceof HTMLAnchorElement &&
                                node.host !== document.location.host) {
                                node.target = "_blank";
                                // protect referrer on external links and deny window.opener access for security reasons
                                // (see https://mathiasbynens.github.io/rel-noopener/)
                                node.rel = "noreferrer noopener";
                                // Fire a resize event when images loaded to notify content resized
                            }
                            else if (node) {
                                node.addEventListener("load", this._resize);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaMarkdown.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean })
    ], HaMarkdown.prototype, "allowSvg", void 0);
    HaMarkdown = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-markdown")
    ], HaMarkdown);
    return HaMarkdown;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]));


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

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



var updateDeviceRegistryEntry = function (hass, deviceId, updates) {
    return hass.callWS(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "config/device_registry/update", device_id: deviceId }, updates));
};
var fetchDeviceRegistry = function (conn) {
    return conn.sendMessagePromise({
        type: "config/device_registry/list",
    });
};
var subscribeDeviceRegistryUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
        return fetchDeviceRegistry(conn).then(function (devices) {
            return store.setState(devices, true);
        });
    }, 500, true), "device_registry_updated");
};
var subscribeDeviceRegistry = function (conn, onChange) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);
};


/***/ }),

/***/ "./src/dialogs/config-flow/dialog-data-entry-flow.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/dialog-data-entry-flow.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _step_flow_pick_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./step-flow-pick-handler */ "./src/dialogs/config-flow/step-flow-pick-handler.ts");
/* harmony import */ var _step_flow_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./step-flow-loading */ "./src/dialogs/config-flow/step-flow-loading.ts");
/* harmony import */ var _step_flow_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./step-flow-form */ "./src/dialogs/config-flow/step-flow-form.ts");
/* harmony import */ var _step_flow_external__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./step-flow-external */ "./src/dialogs/config-flow/step-flow-external.ts");
/* harmony import */ var _step_flow_abort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./step-flow-abort */ "./src/dialogs/config-flow/step-flow-abort.ts");
/* harmony import */ var _step_flow_create_entry__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./step-flow-create-entry */ "./src/dialogs/config-flow/step-flow-create-entry.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");



















var instance = 0;
var DataEntryFlowDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataEntryFlowDialog, _super);
    function DataEntryFlowDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._loading = true;
        _this._instance = instance;
        return _this;
    }
    DataEntryFlowDialog.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, curInstance, step;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._params = params;
                        this._instance = instance++;
                        if (!(!params.continueFlowId && !params.startFlowHandler)) return [3 /*break*/, 6];
                        if (!params.flowConfig.getFlowHandlers) {
                            throw new Error("No getFlowHandlers defined in flow config");
                        }
                        this._step = null;
                        if (!(this._handlers === undefined)) return [3 /*break*/, 4];
                        this._loading = true;
                        this.updateComplete.then(function () { return _this._scheduleCenterDialog(); });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 3, 4]);
                        _a = this;
                        return [4 /*yield*/, params.flowConfig.getFlowHandlers(this.hass)];
                    case 2:
                        _a._handlers = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._loading = false;
                        return [7 /*endfinally*/];
                    case 4: return [4 /*yield*/, this.updateComplete];
                    case 5:
                        _b.sent();
                        this._scheduleCenterDialog();
                        return [2 /*return*/];
                    case 6:
                        this._loading = true;
                        curInstance = this._instance;
                        return [4 /*yield*/, (params.continueFlowId
                                ? params.flowConfig.fetchFlow(this.hass, params.continueFlowId)
                                : params.flowConfig.createFlow(this.hass, params.startFlowHandler))];
                    case 7:
                        step = _b.sent();
                        // Happens if second showDialog called
                        if (curInstance !== this._instance) {
                            return [2 /*return*/];
                        }
                        this._processStep(step);
                        this._loading = false;
                        // When the flow changes, center the dialog.
                        // Don't do it on each step or else the dialog keeps bouncing.
                        this._scheduleCenterDialog();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataEntryFlowDialog.prototype.render = function () {
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=", "\n      >\n        ", "\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=", "\n      >\n        ",
            "\n      </ha-paper-dialog>\n    "])), this._openedChanged, this._loading || (this._step === null && this._handlers === undefined)
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-loading></step-flow-loading>\n            "], ["\n              <step-flow-loading></step-flow-loading>\n            "]))) : this._step === undefined
            ? // When we are going to next step, we render 1 round of empty
                // to reset the element.
                ""
            : this._step === null
                ? // Show handler picker
                 Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-pick-handler\n                .flowConfig=", "\n                .hass=", "\n                .handlers=", "\n              ></step-flow-pick-handler>\n            "], ["\n              <step-flow-pick-handler\n                .flowConfig=", "\n                .hass=", "\n                .handlers=", "\n              ></step-flow-pick-handler>\n            "])), this._params.flowConfig, this.hass, this._handlers) : this._step.type === "form"
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-form\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n              ></step-flow-form>\n            "], ["\n              <step-flow-form\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n              ></step-flow-form>\n            "])), this._params.flowConfig, this._step, this.hass) : this._step.type === "external"
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-external\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n              ></step-flow-external>\n            "], ["\n              <step-flow-external\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n              ></step-flow-external>\n            "])), this._params.flowConfig, this._step, this.hass) : this._step.type === "abort"
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-abort\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n              ></step-flow-abort>\n            "], ["\n              <step-flow-abort\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n              ></step-flow-abort>\n            "])), this._params.flowConfig, this._step, this.hass) : this._devices === undefined || this._areas === undefined
                ? // When it's a create entry result, we will fetch device & area registry
                 Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-loading></step-flow-loading>\n            "], ["\n              <step-flow-loading></step-flow-loading>\n            "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <step-flow-create-entry\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n                .devices=", "\n                .areas=", "\n              ></step-flow-create-entry>\n            "], ["\n              <step-flow-create-entry\n                .flowConfig=", "\n                .step=", "\n                .hass=", "\n                .devices=", "\n                .areas=", "\n              ></step-flow-create-entry>\n            "])), this._params.flowConfig, this._step, this.hass, this._devices, this._areas));
    };
    DataEntryFlowDialog.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.addEventListener("flow-update", function (ev) {
            var _a = ev.detail, step = _a.step, stepPromise = _a.stepPromise;
            _this._processStep(step || stepPromise);
        });
    };
    DataEntryFlowDialog.prototype.updated = function (changedProps) {
        if (changedProps.has("_step") &&
            this._step &&
            this._step.type === "create_entry") {
            if (this._params.flowConfig.loadDevicesAndAreas) {
                this._fetchDevices(this._step.result);
                this._fetchAreas();
            }
            else {
                this._devices = [];
                this._areas = [];
            }
        }
        if (changedProps.has("_devices") && this._dialog) {
            this._scheduleCenterDialog();
        }
    };
    DataEntryFlowDialog.prototype._scheduleCenterDialog = function () {
        var _this = this;
        setTimeout(function () { return _this._dialog.center(); }, 0);
    };
    Object.defineProperty(DataEntryFlowDialog.prototype, "_dialog", {
        get: function () {
            return this.shadowRoot.querySelector("ha-paper-dialog");
        },
        enumerable: true,
        configurable: true
    });
    DataEntryFlowDialog.prototype._fetchDevices = function (configEntryId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._unsubDevices = Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_17__["subscribeDeviceRegistry"])(this.hass.connection, function (devices) {
                    _this._devices = devices.filter(function (device) {
                        return device.config_entries.includes(configEntryId);
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    DataEntryFlowDialog.prototype._fetchAreas = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_18__["subscribeAreaRegistry"])(this.hass.connection, function (areas) {
                    _this._areas = areas;
                });
                return [2 /*return*/];
            });
        });
    };
    DataEntryFlowDialog.prototype._processStep = function (step) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(step instanceof Promise)) return [3 /*break*/, 5];
                        this._loading = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 3, 4]);
                        _a = this;
                        return [4 /*yield*/, step];
                    case 2:
                        _a._step = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._loading = false;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                    case 5:
                        if (step === undefined) {
                            this._flowDone();
                            return [2 /*return*/];
                        }
                        this._step = undefined;
                        return [4 /*yield*/, this.updateComplete];
                    case 6:
                        _b.sent();
                        this._step = step;
                        return [2 /*return*/];
                }
            });
        });
    };
    DataEntryFlowDialog.prototype._flowDone = function () {
        if (!this._params) {
            return;
        }
        var flowFinished = Boolean(this._step && ["create_entry", "abort"].includes(this._step.type));
        // If we created this flow, delete it now.
        if (this._step && !flowFinished && !this._params.continueFlowId) {
            this._params.flowConfig.deleteFlow(this.hass, this._step.flow_id);
        }
        if (this._params.dialogClosedCallback) {
            this._params.dialogClosedCallback({
                flowFinished: flowFinished,
            });
        }
        this._step = undefined;
        this._params = undefined;
        this._devices = undefined;
        if (this._unsubAreas) {
            this._unsubAreas();
            this._unsubAreas = undefined;
        }
        if (this._unsubDevices) {
            this._unsubDevices();
            this._unsubDevices = undefined;
        }
    };
    DataEntryFlowDialog.prototype._openedChanged = function (ev) {
        // Closed dialog by clicking on the overlay
        if (!ev.detail.value) {
            if (this._step) {
                this._flowDone();
            }
            else if (this._step === null) {
                // Flow aborted during picking flow
                this._step = undefined;
                this._params = undefined;
            }
        }
    };
    Object.defineProperty(DataEntryFlowDialog, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyleDialog"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-paper-dialog > * {\n          margin: 0;\n          display: block;\n          padding: 0;\n        }\n      "], ["\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-paper-dialog > * {\n          margin: 0;\n          display: block;\n          padding: 0;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DataEntryFlowDialog.prototype, "_params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DataEntryFlowDialog.prototype, "_loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DataEntryFlowDialog.prototype, "_step", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DataEntryFlowDialog.prototype, "_devices", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DataEntryFlowDialog.prototype, "_areas", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DataEntryFlowDialog.prototype, "_handlers", void 0);
    DataEntryFlowDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("dialog-data-entry-flow")
    ], DataEntryFlowDialog);
    return DataEntryFlowDialog;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;


/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-abort.ts":
/*!****************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-abort.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");





var StepFlowAbort = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StepFlowAbort, _super);
    function StepFlowAbort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepFlowAbort.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <h2>Aborted</h2>\n      <div class=\"content\">\n        ", "\n      </div>\n      <div class=\"buttons\">\n        <mwc-button @click=\"", "\">Close</mwc-button>\n      </div>\n    "], ["\n      <h2>Aborted</h2>\n      <div class=\"content\">\n        ", "\n      </div>\n      <div class=\"buttons\">\n        <mwc-button @click=\"", "\">Close</mwc-button>\n      </div>\n    "])), this.flowConfig.renderAbortDescription(this.hass, this.step), this._flowDone);
    };
    StepFlowAbort.prototype._flowDone = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "flow-update", { step: undefined });
    };
    Object.defineProperty(StepFlowAbort, "styles", {
        get: function () {
            return _styles__WEBPACK_IMPORTED_MODULE_4__["configFlowContentStyles"];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowAbort.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowAbort.prototype, "step", void 0);
    StepFlowAbort = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-abort")
    ], StepFlowAbort);
    return StepFlowAbort;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1;


/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-create-entry.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-create-entry.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../data/area_registry */ "./src/data/area_registry.ts");










var StepFlowCreateEntry = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StepFlowCreateEntry, _super);
    function StepFlowCreateEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepFlowCreateEntry.prototype.render = function () {
        var _this = this;
        var localize = this.hass.localize;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <h2>Success!</h2>\n      <div class=\"content\">\n        ", "\n        ", "\n      </div>\n      <div class=\"buttons\">\n        ", "\n\n        <mwc-button @click=\"", "\">Finish</mwc-button>\n      </div>\n    "], ["\n      <h2>Success!</h2>\n      <div class=\"content\">\n        ", "\n        ",
            "\n      </div>\n      <div class=\"buttons\">\n        ",
            "\n\n        <mwc-button @click=\"", "\">Finish</mwc-button>\n      </div>\n    "])), this.flowConfig.renderCreateEntryDescription(this.hass, this.step), this.devices.length === 0
            ? ""
            : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <p>We found the following devices:</p>\n              <div class=\"devices\">\n                ", "\n              </div>\n            "], ["\n              <p>We found the following devices:</p>\n              <div class=\"devices\">\n                ",
                "\n              </div>\n            "])), this.devices.map(function (device) {
                return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <div class=\"device\">\n                        <div>\n                          <b>", "</b><br />\n                          ", " (", ")\n                        </div>\n                        <paper-dropdown-menu-light\n                          label=\"Area\"\n                          .device=", "\n                          @selected-item-changed=", "\n                        >\n                          <paper-listbox slot=\"dropdown-content\" selected=\"0\">\n                            <paper-item>\n                              ", "\n                            </paper-item>\n                            ", "\n                          </paper-listbox>\n                        </paper-dropdown-menu-light>\n                      </div>\n                    "], ["\n                      <div class=\"device\">\n                        <div>\n                          <b>", "</b><br />\n                          ", " (", ")\n                        </div>\n                        <paper-dropdown-menu-light\n                          label=\"Area\"\n                          .device=", "\n                          @selected-item-changed=", "\n                        >\n                          <paper-listbox slot=\"dropdown-content\" selected=\"0\">\n                            <paper-item>\n                              ",
                    "\n                            </paper-item>\n                            ",
                    "\n                          </paper-listbox>\n                        </paper-dropdown-menu-light>\n                      </div>\n                    "])), device.name, device.model, device.manufacturer, device.id, _this._handleAreaChanged, localize("ui.panel.config.integrations.config_entry.no_area"), _this.areas.map(function (area) { return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                                <paper-item .area=", ">\n                                  ", "\n                                </paper-item>\n                              "], ["\n                                <paper-item .area=", ">\n                                  ", "\n                                </paper-item>\n                              "])), area.area_id, area.name); }));
            })), this.devices.length > 0
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <mwc-button @click=\"", "\">Add Area</mwc-button>\n            "], ["\n              <mwc-button @click=\"", "\">Add Area</mwc-button>\n            "])), this._addArea) : "", this._flowDone);
    };
    StepFlowCreateEntry.prototype._flowDone = function () {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "flow-update", { step: undefined });
    };
    StepFlowCreateEntry.prototype._addArea = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var name, area, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = prompt("Name of the new area?");
                        if (!name) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_9__["createAreaRegistryEntry"])(this.hass, {
                                name: name,
                            })];
                    case 2:
                        area = _a.sent();
                        this.areas = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.areas, [area]);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        alert("Failed to create area.");
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StepFlowCreateEntry.prototype._handleAreaChanged = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var dropdown, device, area, err_2;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dropdown = ev.currentTarget;
                        device = dropdown.device;
                        // Item first becomes null, then new item.
                        if (!dropdown.selectedItem) {
                            return [2 /*return*/];
                        }
                        area = dropdown.selectedItem.area;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_8__["updateDeviceRegistryEntry"])(this.hass, device, {
                                area_id: area,
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        alert("Error saving area: " + err_2.message);
                        dropdown.value = null;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(StepFlowCreateEntry, "styles", {
        get: function () {
            return [
                _styles__WEBPACK_IMPORTED_MODULE_7__["configFlowContentStyles"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .devices {\n          display: flex;\n          flex-wrap: wrap;\n          margin: -4px;\n          max-height: 600px;\n          overflow-y: auto;\n        }\n        .device {\n          border: 1px solid var(--divider-color);\n          padding: 5px;\n          border-radius: 4px;\n          margin: 4px;\n          display: inline-block;\n          width: 200px;\n        }\n        .buttons > *:last-child {\n          margin-left: auto;\n        }\n        paper-dropdown-menu-light {\n          cursor: pointer;\n        }\n        paper-item {\n          cursor: pointer;\n          white-space: nowrap;\n        }\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .device {\n            width: 100%;\n          }\n        }\n      "], ["\n        .devices {\n          display: flex;\n          flex-wrap: wrap;\n          margin: -4px;\n          max-height: 600px;\n          overflow-y: auto;\n        }\n        .device {\n          border: 1px solid var(--divider-color);\n          padding: 5px;\n          border-radius: 4px;\n          margin: 4px;\n          display: inline-block;\n          width: 200px;\n        }\n        .buttons > *:last-child {\n          margin-left: auto;\n        }\n        paper-dropdown-menu-light {\n          cursor: pointer;\n        }\n        paper-item {\n          cursor: pointer;\n          white-space: nowrap;\n        }\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .device {\n            width: 100%;\n          }\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowCreateEntry.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowCreateEntry.prototype, "step", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowCreateEntry.prototype, "devices", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowCreateEntry.prototype, "areas", void 0);
    StepFlowCreateEntry = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-create-entry")
    ], StepFlowCreateEntry);
    return StepFlowCreateEntry;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-external.ts":
/*!*******************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-external.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");





var StepFlowExternal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StepFlowExternal, _super);
    function StepFlowExternal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepFlowExternal.prototype.render = function () {
        var localize = this.hass.localize;
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <h2>\n        ", "\n      </h2>\n      <div class=\"content\">\n        ", "\n        <div class=\"open-button\">\n          <a href=", " target=\"_blank\">\n            <mwc-button raised>\n              ", "\n            </mwc-button>\n          </a>\n        </div>\n      </div>\n    "], ["\n      <h2>\n        ", "\n      </h2>\n      <div class=\"content\">\n        ", "\n        <div class=\"open-button\">\n          <a href=", " target=\"_blank\">\n            <mwc-button raised>\n              ",
            "\n            </mwc-button>\n          </a>\n        </div>\n      </div>\n    "])), this.flowConfig.renderExternalStepHeader(this.hass, this.step), this.flowConfig.renderExternalStepDescription(this.hass, this.step), this.step.url, localize("ui.panel.config.integrations.config_flow.external_step.open_site"));
    };
    StepFlowExternal.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.hass.connection.subscribeEvents(function (ev) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (ev.data.flow_id !== this.step.flow_id) {
                    return [2 /*return*/];
                }
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "flow-update", {
                    stepPromise: this.flowConfig.fetchFlow(this.hass, this.step.flow_id),
                });
                return [2 /*return*/];
            });
        }); }, "data_entry_flow_progressed");
        window.open(this.step.url);
    };
    Object.defineProperty(StepFlowExternal, "styles", {
        get: function () {
            return [
                _styles__WEBPACK_IMPORTED_MODULE_4__["configFlowContentStyles"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .open-button {\n          text-align: center;\n          padding: 24px 0;\n        }\n        .open-button a {\n          text-decoration: none;\n        }\n      "], ["\n        .open-button {\n          text-align: center;\n          padding: 24px 0;\n        }\n        .open-button a {\n          text-decoration: none;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowExternal.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowExternal.prototype, "step", void 0);
    StepFlowExternal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-external")
    ], StepFlowExternal);
    return StepFlowExternal;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-form.ts":
/*!***************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-form.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _polymer_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../polymer-types */ "./src/polymer-types.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./src/dialogs/config-flow/styles.ts");











var StepFlowForm = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StepFlowForm, _super);
    function StepFlowForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._loading = false;
        _this._labelCallback = function (field) {
            return _this.flowConfig.renderShowFormStepFieldLabel(_this.hass, _this.step, field);
        };
        _this._errorCallback = function (error) {
            return _this.flowConfig.renderShowFormStepFieldError(_this.hass, _this.step, error);
        };
        return _this;
    }
    StepFlowForm.prototype.render = function () {
        var step = this.step;
        var stepData = this._stepDataProcessed;
        var allRequiredInfoFilledIn = stepData === undefined
            ? // If no data filled in, just check that any field is required
                step.data_schema.find(function (field) { return !field.optional; }) === undefined
            : // If data is filled in, make sure all required fields are
                stepData &&
                    step.data_schema.every(function (field) {
                        return field.optional || !["", undefined].includes(stepData[field.name]);
                    });
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <h2>\n        ", "\n      </h2>\n      <div class=\"content\">\n        ", "\n        ", "\n        <ha-form\n          .data=", "\n          @data-changed=", "\n          .schema=", "\n          .error=", "\n          .computeLabel=", "\n          .computeError=", "\n        ></ha-form>\n      </div>\n      <div class=\"buttons\">\n        ", "\n      </div>\n    "], ["\n      <h2>\n        ", "\n      </h2>\n      <div class=\"content\">\n        ",
            "\n        ", "\n        <ha-form\n          .data=", "\n          @data-changed=", "\n          .schema=", "\n          .error=", "\n          .computeLabel=", "\n          .computeError=", "\n        ></ha-form>\n      </div>\n      <div class=\"buttons\">\n        ",
            "\n      </div>\n    "])), this.flowConfig.renderShowFormStepHeader(this.hass, this.step), this._errorMsg
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"error\">", "</div>\n            "], ["\n              <div class=\"error\">", "</div>\n            "])), this._errorMsg) : "", this.flowConfig.renderShowFormStepDescription(this.hass, this.step), stepData, this._stepDataChanged, step.data_schema, step.errors, this._labelCallback, this._errorCallback, this._loading
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div class=\"submit-spinner\">\n                <paper-spinner active></paper-spinner>\n              </div>\n            "], ["\n              <div class=\"submit-spinner\">\n                <paper-spinner active></paper-spinner>\n              </div>\n            "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <div>\n                <mwc-button\n                  @click=", "\n                  .disabled=", "\n                >\n                  Submit\n                </mwc-button>\n\n                ", "\n              </div>\n            "], ["\n              <div>\n                <mwc-button\n                  @click=", "\n                  .disabled=", "\n                >\n                  Submit\n                </mwc-button>\n\n                ",
            "\n              </div>\n            "])), this._submitStep, !allRequiredInfoFilledIn, !allRequiredInfoFilledIn
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <paper-tooltip position=\"left\">\n                        Not all required fields are filled in.\n                      </paper-tooltip>\n                    "], ["\n                      <paper-tooltip position=\"left\">\n                        Not all required fields are filled in.\n                      </paper-tooltip>\n                    "]))) : Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])))));
    };
    StepFlowForm.prototype.firstUpdated = function (changedProps) {
        var _this = this;
        _super.prototype.firstUpdated.call(this, changedProps);
        this.addEventListener("keypress", function (ev) {
            if (ev.keyCode === 13) {
                _this._submitStep();
            }
        });
    };
    Object.defineProperty(StepFlowForm.prototype, "_stepDataProcessed", {
        get: function () {
            if (this._stepData !== undefined) {
                return this._stepData;
            }
            var data = {};
            this.step.data_schema.forEach(function (field) {
                if ("default" in field) {
                    data[field.name] = field.default;
                }
            });
            return data;
        },
        enumerable: true,
        configurable: true
    });
    StepFlowForm.prototype._submitStep = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var flowId, stepData, toSendData, step, err_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._loading = true;
                        this._errorMsg = undefined;
                        flowId = this.step.flow_id;
                        stepData = this._stepData || {};
                        toSendData = {};
                        Object.keys(stepData).forEach(function (key) {
                            var value = stepData[key];
                            var isEmpty = [undefined, ""].includes(value);
                            if (!isEmpty) {
                                toSendData[key] = value;
                            }
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.flowConfig.handleFlowStep(this.hass, this.step.flow_id, toSendData)];
                    case 2:
                        step = _a.sent();
                        // make sure we're still showing the same step as when we
                        // fired off request.
                        if (!this.step || flowId !== this.step.flow_id) {
                            return [2 /*return*/];
                        }
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "flow-update", {
                            step: step,
                        });
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        this._errorMsg =
                            (err_1 && err_1.body && err_1.body.message) || "Unknown error occurred";
                        return [3 /*break*/, 5];
                    case 4:
                        this._loading = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StepFlowForm.prototype._stepDataChanged = function (ev) {
        this._stepData = Object(_polymer_types__WEBPACK_IMPORTED_MODULE_8__["applyPolymerEvent"])(ev, this._stepData);
    };
    Object.defineProperty(StepFlowForm, "styles", {
        get: function () {
            return [
                _styles__WEBPACK_IMPORTED_MODULE_10__["configFlowContentStyles"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .error {\n          color: red;\n        }\n\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      "], ["\n        .error {\n          color: red;\n        }\n\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowForm.prototype, "step", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowForm.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowForm.prototype, "_loading", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowForm.prototype, "_stepData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowForm.prototype, "_errorMsg", void 0);
    StepFlowForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-form")
    ], StepFlowForm);
    return StepFlowForm;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-loading.ts":
/*!******************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-loading.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js");



var StepFlowLoading = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StepFlowLoading, _super);
    function StepFlowLoading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StepFlowLoading.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"init-spinner\">\n        <paper-spinner-lite active></paper-spinner-lite>\n      </div>\n    "], ["\n      <div class=\"init-spinner\">\n        <paper-spinner-lite active></paper-spinner-lite>\n      </div>\n    "])));
    };
    Object.defineProperty(StepFlowLoading, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .init-spinner {\n        padding: 50px 100px;\n        text-align: center;\n      }\n    "], ["\n      .init-spinner {\n        padding: 50px 100px;\n        text-align: center;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    StepFlowLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-loading")
    ], StepFlowLoading);
    return StepFlowLoading;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2;


/***/ }),

/***/ "./src/dialogs/config-flow/step-flow-pick-handler.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/config-flow/step-flow-pick-handler.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner-lite */ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit-html/directives/style-map */ "./node_modules/lit-html/directives/style-map.js");











var StepFlowPickHandler = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StepFlowPickHandler, _super);
    function StepFlowPickHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._getHandlers = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])(function (h, filter) {
            var handlers = h.map(function (handler) {
                return {
                    name: _this.hass.localize("component." + handler + ".config.title"),
                    slug: handler,
                };
            });
            if (filter) {
                var options = {
                    keys: ["name", "slug"],
                    caseSensitive: false,
                    minMatchCharLength: 2,
                    threshold: 0.2,
                };
                var fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_7__(handlers, options);
                return fuse.search(filter);
            }
            return handlers.sort(function (a, b) {
                return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
            });
        });
        return _this;
    }
    StepFlowPickHandler.prototype.render = function () {
        var _this = this;
        var handlers = this._getHandlers(this.handlers, this.filter);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <h2>", "</h2>\n      <search-input\n        .filter=", "\n        @value-changed=", "\n      ></search-input>\n      <div style=", ">\n        ", "\n      </div>\n    "], ["\n      <h2>", "</h2>\n      <search-input\n        .filter=", "\n        @value-changed=", "\n      ></search-input>\n      <div style=", ">\n        ",
            "\n      </div>\n    "])), this.hass.localize("ui.panel.config.integrations.new"), this.filter, this._filterChanged, Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_10__["styleMap"])({ width: this._width + "px" }), handlers.map(function (handler) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <paper-item @click=", " .handler=", ">\n                <paper-item-body>\n                  ", "\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            "], ["\n              <paper-item @click=", " .handler=", ">\n                <paper-item-body>\n                  ", "\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            "])), _this._handlerPicked, handler, handler.name);
        }));
    };
    StepFlowPickHandler.prototype.updated = function (changedProps) {
        _super.prototype.updated.call(this, changedProps);
        // Store the width so that when we search, box doesn't jump
        if (!this._width) {
            var width = this.shadowRoot.querySelector("div").clientWidth;
            if (width) {
                this._width = width;
            }
        }
    };
    StepFlowPickHandler.prototype._filterChanged = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.filter = e.detail.value;
                return [2 /*return*/];
            });
        });
    };
    StepFlowPickHandler.prototype._handlerPicked = function (ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "flow-update", {
                    stepPromise: this.flowConfig.createFlow(this.hass, ev.currentTarget.handler.slug),
                });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(StepFlowPickHandler, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      h2 {\n        margin-bottom: 2px;\n        padding-left: 16px;\n      }\n      div {\n        overflow: auto;\n        max-height: 600px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "], ["\n      h2 {\n        margin-bottom: 2px;\n        padding-left: 16px;\n      }\n      div {\n        overflow: auto;\n        max-height: 600px;\n      }\n      paper-item {\n        cursor: pointer;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowPickHandler.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowPickHandler.prototype, "handlers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], StepFlowPickHandler.prototype, "filter", void 0);
    StepFlowPickHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-pick-handler")
    ], StepFlowPickHandler);
    return StepFlowPickHandler;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/dialogs/config-flow/styles.ts":
/*!*******************************************!*\
  !*** ./src/dialogs/config-flow/styles.ts ***!
  \*******************************************/
/*! exports provided: configFlowContentStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFlowContentStyles", function() { return configFlowContentStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");


var configFlowContentStyles = Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n  h2 {\n    margin-top: 24px;\n    padding: 0 24px;\n  }\n\n  .content {\n    margin-top: 20px;\n    padding: 0 24px;\n  }\n\n  .buttons {\n    position: relative;\n    padding: 8px 8px 8px 24px;\n    margin: 0;\n    color: var(--primary-color);\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  ha-markdown {\n    overflow-wrap: break-word;\n  }\n  ha-markdown a {\n    color: var(--primary-color);\n  }\n  ha-markdown img:first-child:last-child {\n    display: block;\n    margin: 0 auto;\n  }\n"], ["\n  h2 {\n    margin-top: 24px;\n    padding: 0 24px;\n  }\n\n  .content {\n    margin-top: 20px;\n    padding: 0 24px;\n  }\n\n  .buttons {\n    position: relative;\n    padding: 8px 8px 8px 24px;\n    margin: 0;\n    color: var(--primary-color);\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  ha-markdown {\n    overflow-wrap: break-word;\n  }\n  ha-markdown a {\n    color: var(--primary-color);\n  }\n  ha-markdown img:first-child:last-child {\n    display: block;\n    margin: 0 auto;\n  }\n"])));
var templateObject_1;


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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


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

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

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
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/polymer-types.ts":
/*!******************************!*\
  !*** ./src/polymer-types.ts ***!
  \******************************/
/*! exports provided: applyPolymerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolymerEvent", function() { return applyPolymerEvent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var applyPolymerEvent = function (ev, curValue) {
    var _a;
    var _b = ev.detail, path = _b.path, value = _b.value;
    if (!path) {
        return value;
    }
    var propName = path.split(".")[1];
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, curValue), (_a = {}, _a[propName] = value, _a));
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLW1hcmtkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L2RpYWxvZy1kYXRhLWVudHJ5LWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWFib3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1jcmVhdGUtZW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWV4dGVybmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1mb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1sb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1waWNrLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5bWVyLXR5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdFx0XHR2YXIgYWRkTWV0aG9kcyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzXCIpXG5cdFx0XHRcdHZhciBtZXRob2RzID0gW1wicmVuZGVyTWFya2Rvd25cIl1cblx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgdyA9IG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjFhZDgzZDk4Nzk3ZDhmMjE0NGY2Lndvcmtlci5qc1wiLCB7IG5hbWU6IFwiW2hhc2hdLndvcmtlci5qc1wiIH0pXG5cdFx0XHRcdFx0YWRkTWV0aG9kcyh3LCBtZXRob2RzKVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiB3XG5cdFx0XHRcdH1cblx0XHRcdCIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0LCBodG1sIH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic2VhcmNoLWlucHV0XCIpXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcml2YXRlIGZpbHRlcj86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9maWx0ZXJJbnB1dENoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8aXJvbi1pY29uXG4gICAgICAgICAgICBpY29uPVwiaGFzczptYWduaWZ5XCJcbiAgICAgICAgICAgIHNsb3Q9XCJwcmVmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJwcmVmaXhcIlxuICAgICAgICAgID48L2lyb24taWNvbj5cbiAgICAgICAgICAke3RoaXMuZmlsdGVyICYmXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlckNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogU3RyaW5nKHZhbHVlKSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlcklucHV0Q2hhbmdlZChlKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jbGVhclNlYXJjaCgpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2VkKFwiXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5wcmVmaXgge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzZWFyY2gtaW5wdXRcIjogU2VhcmNoSW5wdXQ7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcblxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcblxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xuICAgIHJldHVybiBIYUlyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XG4gIH0sXG59O1xuXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxuLy8gZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZ1xuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kaWFsb2dcIjogSGFQYXBlckRpYWxvZztcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZGlhbG9nXCIsIEhhUGFwZXJEaWFsb2cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuLy8gTm90IGR1cGxpY2F0ZSwgdGhpcyBpcyBmb3IgdHlwaW5nLlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYUljb24gfSBmcm9tIFwiLi9oYS1pY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBIYUljb25OZXh0IGV4dGVuZHMgSGFJY29uIHtcbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyB3YWl0IHRvIGNoZWNrIGZvciBkaXJlY3Rpb24gc2luY2Ugb3RoZXJ3aXNlIGRpcmVjdGlvbiBpcyB3cm9uZyBldmVuIHRob3VnaCB0b3AgbGV2ZWwgaXMgUlRMXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmljb24gPVxuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwibHRyXCJcbiAgICAgICAgICA/IFwiaGFzczpjaGV2cm9uLXJpZ2h0XCJcbiAgICAgICAgICA6IFwiaGFzczpjaGV2cm9uLWxlZnRcIjtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uLW5leHRcIjogSGFJY29uTmV4dDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uLW5leHRcIiwgSGFJY29uTmV4dCk7XG4iLCJpbXBvcnQgeyBVcGRhdGluZ0VsZW1lbnQsIHByb3BlcnR5LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXdlYnBhY2stbG9hZGVyLXN5bnRheFxuLy8gQHRzLWlnbm9yZVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1pbXBsaWNpdC1kZXBlbmRlbmNpZXNcbmltcG9ydCBtYXJrZG93bldvcmtlciBmcm9tIFwid29ya2VyaXplLWxvYWRlciEuLi9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmxldCB3b3JrZXI6IGFueSB8IHVuZGVmaW5lZDtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1tYXJrZG93blwiKVxuY2xhc3MgSGFNYXJrZG93biBleHRlbmRzIFVwZGF0aW5nRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBjb250ZW50ID0gXCJcIjtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgYWxsb3dTdmcgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgdXBkYXRlKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuXG4gICAgaWYgKCF3b3JrZXIpIHtcbiAgICAgIHdvcmtlciA9IG1hcmtkb3duV29ya2VyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXIoKSB7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBhd2FpdCB3b3JrZXIucmVuZGVyTWFya2Rvd24oXG4gICAgICB0aGlzLmNvbnRlbnQsXG4gICAgICB7XG4gICAgICAgIGJyZWFrczogdHJ1ZSxcbiAgICAgICAgZ2ZtOiB0cnVlLFxuICAgICAgICB0YWJsZXM6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGxvd1N2ZzogdGhpcy5hbGxvd1N2ZyxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgdGhpcy5fcmVzaXplKCk7XG5cbiAgICBjb25zdCB3YWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgICAgdGhpcyxcbiAgICAgIDEgLyogU0hPV19FTEVNRU5UICovLFxuICAgICAgbnVsbCxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIHdoaWxlICh3YWxrZXIubmV4dE5vZGUoKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcblxuICAgICAgLy8gT3BlbiBleHRlcm5hbCBsaW5rcyBpbiBhIG5ldyB3aW5kb3dcbiAgICAgIGlmIChcbiAgICAgICAgbm9kZSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgIG5vZGUuaG9zdCAhPT0gZG9jdW1lbnQubG9jYXRpb24uaG9zdFxuICAgICAgKSB7XG4gICAgICAgIG5vZGUudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblxuICAgICAgICAvLyBwcm90ZWN0IHJlZmVycmVyIG9uIGV4dGVybmFsIGxpbmtzIGFuZCBkZW55IHdpbmRvdy5vcGVuZXIgYWNjZXNzIGZvciBzZWN1cml0eSByZWFzb25zXG4gICAgICAgIC8vIChzZWUgaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmdpdGh1Yi5pby9yZWwtbm9vcGVuZXIvKVxuICAgICAgICBub2RlLnJlbCA9IFwibm9yZWZlcnJlciBub29wZW5lclwiO1xuXG4gICAgICAgIC8vIEZpcmUgYSByZXNpemUgZXZlbnQgd2hlbiBpbWFnZXMgbG9hZGVkIHRvIG5vdGlmeSBjb250ZW50IHJlc2l6ZWRcbiAgICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIHRoaXMuX3Jlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVzaXplID0gKCkgPT4gZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1tYXJrZG93blwiOiBIYU1hcmtkb3duO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnkge1xuICBhcmVhX2lkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXMge1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgdmFsdWVzOiBBcmVhUmVnaXN0cnlFbnRyeU11dGFibGVQYXJhbXNcbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2NyZWF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcmVhUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgYXJlYUlkOiBzdHJpbmcsXG4gIHVwZGF0ZXM6IFBhcnRpYWw8QXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxBcmVhUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvdXBkYXRlXCIsXG4gICAgYXJlYV9pZDogYXJlYUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgYXJlYUlkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2RlbGV0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoQXJlYVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm5cbiAgICAuc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICAgIHR5cGU6IFwiY29uZmlnL2FyZWFfcmVnaXN0cnkvbGlzdFwiLFxuICAgIH0pXG4gICAgLnRoZW4oKGFyZWFzKSA9PiBhcmVhcy5zb3J0KChlbnQxLCBlbnQyKSA9PiBjb21wYXJlKGVudDEubmFtZSwgZW50Mi5uYW1lKSkpO1xuXG5jb25zdCBzdWJzY3JpYmVBcmVhUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQXJlYVJlZ2lzdHJ5KGNvbm4pLnRoZW4oKGFyZWFzKSA9PiBzdG9yZS5zZXRTdGF0ZShhcmVhcywgdHJ1ZSkpLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJhcmVhX3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGFyZWFzOiBBcmVhUmVnaXN0cnlFbnRyeVtdKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248QXJlYVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfYXJlYVJlZ2lzdHJ5XCIsXG4gICAgZmV0Y2hBcmVhUmVnaXN0cnksXG4gICAgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5IHtcbiAgaWQ6IHN0cmluZztcbiAgY29uZmlnX2VudHJpZXM6IHN0cmluZ1tdO1xuICBjb25uZWN0aW9uczogQXJyYXk8W3N0cmluZywgc3RyaW5nXT47XG4gIG1hbnVmYWN0dXJlcjogc3RyaW5nO1xuICBtb2RlbD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgc3dfdmVyc2lvbj86IHN0cmluZztcbiAgdmlhX2RldmljZV9pZD86IHN0cmluZztcbiAgYXJlYV9pZD86IHN0cmluZztcbiAgbmFtZV9ieV91c2VyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgYXJlYV9pZD86IHN0cmluZyB8IG51bGw7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBkZXZpY2VJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPERldmljZVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zPlxuKSA9PlxuICBoYXNzLmNhbGxXUzxEZXZpY2VSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZGV2aWNlX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGRldmljZV9pZDogZGV2aWNlSWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRGV2aWNlUmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hEZXZpY2VSZWdpc3RyeShjb25uKS50aGVuKChkZXZpY2VzKSA9PlxuICAgICAgICAgIHN0b3JlLnNldFN0YXRlKGRldmljZXMsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImRldmljZV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5ID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKGRldmljZXM6IERldmljZVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPERldmljZVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZHJcIixcbiAgICBmZXRjaERldmljZVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuLy8gTm90IGR1cGxpY2F0ZSwgaXMgZm9yIHR5cGluZ1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBIYVBhcGVyRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZ1wiO1xuaW1wb3J0IHsgaGFTdHlsZURpYWxvZyB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvc3R5bGVzXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuaW1wb3J0IFwiLi9zdGVwLWZsb3ctcGljay1oYW5kbGVyXCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1sb2FkaW5nXCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1mb3JtXCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1leHRlcm5hbFwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctYWJvcnRcIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWNyZWF0ZS1lbnRyeVwiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZUFyZWFSZWdpc3RyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvYXJlYV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1N0ZXAgfSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcblxubGV0IGluc3RhbmNlID0gMDtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJmbG93LXVwZGF0ZVwiOiB7XG4gICAgICBzdGVwPzogRGF0YUVudHJ5Rmxvd1N0ZXA7XG4gICAgICBzdGVwUHJvbWlzZT86IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuICAgIH07XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJkaWFsb2ctZGF0YS1lbnRyeS1mbG93XCIpXG5jbGFzcyBEYXRhRW50cnlGbG93RGlhbG9nIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfcGFyYW1zPzogRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9hZGluZyA9IHRydWU7XG4gIHByaXZhdGUgX2luc3RhbmNlID0gaW5zdGFuY2U7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3N0ZXA6XG4gICAgfCBEYXRhRW50cnlGbG93U3RlcFxuICAgIHwgdW5kZWZpbmVkXG4gICAgLy8gTnVsbCBtZWFucyB3ZSBuZWVkIHRvIHBpY2sgYSBjb25maWcgZmxvd1xuICAgIHwgbnVsbDtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGV2aWNlcz86IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXJlYXM/OiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9oYW5kbGVycz86IHN0cmluZ1tdO1xuICBwcml2YXRlIF91bnN1YkFyZWFzPzogVW5zdWJzY3JpYmVGdW5jO1xuICBwcml2YXRlIF91bnN1YkRldmljZXM/OiBVbnN1YnNjcmliZUZ1bmM7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2cocGFyYW1zOiBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fcGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2UrKztcblxuICAgIC8vIENyZWF0ZSBhIG5ldyBjb25maWcgZmxvdy4gU2hvdyBwaWNrZXJcbiAgICBpZiAoIXBhcmFtcy5jb250aW51ZUZsb3dJZCAmJiAhcGFyYW1zLnN0YXJ0Rmxvd0hhbmRsZXIpIHtcbiAgICAgIGlmICghcGFyYW1zLmZsb3dDb25maWcuZ2V0Rmxvd0hhbmRsZXJzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGdldEZsb3dIYW5kbGVycyBkZWZpbmVkIGluIGZsb3cgY29uZmlnXCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RlcCA9IG51bGw7XG5cbiAgICAgIC8vIFdlIG9ubHkgbG9hZCB0aGUgaGFuZGxlcnMgb25jZVxuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGxldGUudGhlbigoKSA9PiB0aGlzLl9zY2hlZHVsZUNlbnRlckRpYWxvZygpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVycyA9IGF3YWl0IHBhcmFtcy5mbG93Q29uZmlnLmdldEZsb3dIYW5kbGVycyh0aGlzLmhhc3MpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcbiAgICBjb25zdCBzdGVwID0gYXdhaXQgKHBhcmFtcy5jb250aW51ZUZsb3dJZFxuICAgICAgPyBwYXJhbXMuZmxvd0NvbmZpZy5mZXRjaEZsb3codGhpcy5oYXNzLCBwYXJhbXMuY29udGludWVGbG93SWQpXG4gICAgICA6IHBhcmFtcy5mbG93Q29uZmlnLmNyZWF0ZUZsb3codGhpcy5oYXNzLCBwYXJhbXMuc3RhcnRGbG93SGFuZGxlciEpKTtcblxuICAgIC8vIEhhcHBlbnMgaWYgc2Vjb25kIHNob3dEaWFsb2cgY2FsbGVkXG4gICAgaWYgKGN1ckluc3RhbmNlICE9PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyBXaGVuIHRoZSBmbG93IGNoYW5nZXMsIGNlbnRlciB0aGUgZGlhbG9nLlxuICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1wYXBlci1kaWFsb2dcbiAgICAgICAgd2l0aC1iYWNrZHJvcFxuICAgICAgICBvcGVuZWRcbiAgICAgICAgQG9wZW5lZC1jaGFuZ2VkPSR7dGhpcy5fb3BlbmVkQ2hhbmdlZH1cbiAgICAgID5cbiAgICAgICAgJHt0aGlzLl9sb2FkaW5nIHx8ICh0aGlzLl9zdGVwID09PSBudWxsICYmIHRoaXMuX2hhbmRsZXJzID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWxvYWRpbmc+PC9zdGVwLWZsb3ctbG9hZGluZz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IHRoaXMuX3N0ZXAgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gLy8gV2hlbiB3ZSBhcmUgZ29pbmcgdG8gbmV4dCBzdGVwLCB3ZSByZW5kZXIgMSByb3VuZCBvZiBlbXB0eVxuICAgICAgICAgICAgLy8gdG8gcmVzZXQgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICBcIlwiXG4gICAgICAgICAgOiB0aGlzLl9zdGVwID09PSBudWxsXG4gICAgICAgICAgPyAvLyBTaG93IGhhbmRsZXIgcGlja2VyXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LXBpY2staGFuZGxlclxuICAgICAgICAgICAgICAgIC5mbG93Q29uZmlnPSR7dGhpcy5fcGFyYW1zLmZsb3dDb25maWd9XG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLmhhbmRsZXJzPSR7dGhpcy5faGFuZGxlcnN9XG4gICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1waWNrLWhhbmRsZXI+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9zdGVwLnR5cGUgPT09IFwiZm9ybVwiXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWZvcm1cbiAgICAgICAgICAgICAgICAuZmxvd0NvbmZpZz0ke3RoaXMuX3BhcmFtcy5mbG93Q29uZmlnfVxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWZvcm0+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9zdGVwLnR5cGUgPT09IFwiZXh0ZXJuYWxcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1leHRlcm5hbFxuICAgICAgICAgICAgICAgIC5mbG93Q29uZmlnPSR7dGhpcy5fcGFyYW1zLmZsb3dDb25maWd9XG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctZXh0ZXJuYWw+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9zdGVwLnR5cGUgPT09IFwiYWJvcnRcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1hYm9ydFxuICAgICAgICAgICAgICAgIC5mbG93Q29uZmlnPSR7dGhpcy5fcGFyYW1zLmZsb3dDb25maWd9XG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctYWJvcnQ+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9kZXZpY2VzID09PSB1bmRlZmluZWQgfHwgdGhpcy5fYXJlYXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gLy8gV2hlbiBpdCdzIGEgY3JlYXRlIGVudHJ5IHJlc3VsdCwgd2Ugd2lsbCBmZXRjaCBkZXZpY2UgJiBhcmVhIHJlZ2lzdHJ5XG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWxvYWRpbmc+PC9zdGVwLWZsb3ctbG9hZGluZz5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxzdGVwLWZsb3ctY3JlYXRlLWVudHJ5XG4gICAgICAgICAgICAgICAgLmZsb3dDb25maWc9JHt0aGlzLl9wYXJhbXMuZmxvd0NvbmZpZ31cbiAgICAgICAgICAgICAgICAuc3RlcD0ke3RoaXMuX3N0ZXB9XG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgICAgLmRldmljZXM9JHt0aGlzLl9kZXZpY2VzfVxuICAgICAgICAgICAgICAgIC5hcmVhcz0ke3RoaXMuX2FyZWFzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctY3JlYXRlLWVudHJ5PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJmbG93LXVwZGF0ZVwiLCAoZXYpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RlcCwgc3RlcFByb21pc2UgfSA9IChldiBhcyBhbnkpLmRldGFpbDtcbiAgICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXAgfHwgc3RlcFByb21pc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZWRQcm9wcy5oYXMoXCJfc3RlcFwiKSAmJlxuICAgICAgdGhpcy5fc3RlcCAmJlxuICAgICAgdGhpcy5fc3RlcC50eXBlID09PSBcImNyZWF0ZV9lbnRyeVwiXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5fcGFyYW1zIS5mbG93Q29uZmlnLmxvYWREZXZpY2VzQW5kQXJlYXMpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2hEZXZpY2VzKHRoaXMuX3N0ZXAucmVzdWx0KTtcbiAgICAgICAgdGhpcy5fZmV0Y2hBcmVhcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fZGV2aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLl9hcmVhcyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX2RldmljZXNcIikgJiYgdGhpcy5fZGlhbG9nKSB7XG4gICAgICB0aGlzLl9zY2hlZHVsZUNlbnRlckRpYWxvZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fZGlhbG9nLmNlbnRlcigpLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9kaWFsb2coKTogSGFQYXBlckRpYWxvZyB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImhhLXBhcGVyLWRpYWxvZ1wiKSE7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9mZXRjaERldmljZXMoY29uZmlnRW50cnlJZCkge1xuICAgIHRoaXMuX3Vuc3ViRGV2aWNlcyA9IHN1YnNjcmliZURldmljZVJlZ2lzdHJ5KFxuICAgICAgdGhpcy5oYXNzLmNvbm5lY3Rpb24sXG4gICAgICAoZGV2aWNlcykgPT4ge1xuICAgICAgICB0aGlzLl9kZXZpY2VzID0gZGV2aWNlcy5maWx0ZXIoKGRldmljZSkgPT5cbiAgICAgICAgICBkZXZpY2UuY29uZmlnX2VudHJpZXMuaW5jbHVkZXMoY29uZmlnRW50cnlJZClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hBcmVhcygpIHtcbiAgICB0aGlzLl91bnN1YkFyZWFzID0gc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5KHRoaXMuaGFzcy5jb25uZWN0aW9uLCAoYXJlYXMpID0+IHtcbiAgICAgIHRoaXMuX2FyZWFzID0gYXJlYXM7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9wcm9jZXNzU3RlcChcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcCB8IHVuZGVmaW5lZCB8IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmIChzdGVwIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9zdGVwID0gYXdhaXQgc3RlcDtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RlcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9mbG93RG9uZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gIH1cblxuICBwcml2YXRlIF9mbG93RG9uZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBmbG93RmluaXNoZWQgPSBCb29sZWFuKFxuICAgICAgdGhpcy5fc3RlcCAmJiBbXCJjcmVhdGVfZW50cnlcIiwgXCJhYm9ydFwiXS5pbmNsdWRlcyh0aGlzLl9zdGVwLnR5cGUpXG4gICAgKTtcblxuICAgIC8vIElmIHdlIGNyZWF0ZWQgdGhpcyBmbG93LCBkZWxldGUgaXQgbm93LlxuICAgIGlmICh0aGlzLl9zdGVwICYmICFmbG93RmluaXNoZWQgJiYgIXRoaXMuX3BhcmFtcy5jb250aW51ZUZsb3dJZCkge1xuICAgICAgdGhpcy5fcGFyYW1zLmZsb3dDb25maWcuZGVsZXRlRmxvdyh0aGlzLmhhc3MsIHRoaXMuX3N0ZXAuZmxvd19pZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcmFtcy5kaWFsb2dDbG9zZWRDYWxsYmFjaykge1xuICAgICAgdGhpcy5fcGFyYW1zLmRpYWxvZ0Nsb3NlZENhbGxiYWNrKHtcbiAgICAgICAgZmxvd0ZpbmlzaGVkLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RlcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fZGV2aWNlcyA9IHVuZGVmaW5lZDtcbiAgICBpZiAodGhpcy5fdW5zdWJBcmVhcykge1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcygpO1xuICAgICAgdGhpcy5fdW5zdWJBcmVhcyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Vuc3ViRGV2aWNlcykge1xuICAgICAgdGhpcy5fdW5zdWJEZXZpY2VzKCk7XG4gICAgICB0aGlzLl91bnN1YkRldmljZXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxib29sZWFuPik6IHZvaWQge1xuICAgIC8vIENsb3NlZCBkaWFsb2cgYnkgY2xpY2tpbmcgb24gdGhlIG92ZXJsYXlcbiAgICBpZiAoIWV2LmRldGFpbC52YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuX3N0ZXApIHtcbiAgICAgICAgdGhpcy5fZmxvd0RvbmUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RlcCA9PT0gbnVsbCkge1xuICAgICAgICAvLyBGbG93IGFib3J0ZWQgZHVyaW5nIHBpY2tpbmcgZmxvd1xuICAgICAgICB0aGlzLl9zdGVwID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nID4gKiB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgXTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiOiBEYXRhRW50cnlGbG93RGlhbG9nO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcEFib3J0IH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHsgRmxvd0NvbmZpZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0ZXAtZmxvdy1hYm9ydFwiKVxuY2xhc3MgU3RlcEZsb3dBYm9ydCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgZmxvd0NvbmZpZyE6IEZsb3dDb25maWc7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgc3RlcCE6IERhdGFFbnRyeUZsb3dTdGVwQWJvcnQ7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPkFib3J0ZWQ8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgJHt0aGlzLmZsb3dDb25maWcucmVuZGVyQWJvcnREZXNjcmlwdGlvbih0aGlzLmhhc3MsIHRoaXMuc3RlcCl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fZmxvd0RvbmV9XCI+Q2xvc2U8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmxvd0RvbmUoKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwgeyBzdGVwOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjb25maWdGbG93Q29udGVudFN0eWxlcztcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RlcC1mbG93LWFib3J0XCI6IFN0ZXBGbG93QWJvcnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgRGV2aWNlUmVnaXN0cnlFbnRyeSxcbiAgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQge1xuICBBcmVhUmVnaXN0cnlFbnRyeSxcbiAgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwQ3JlYXRlRW50cnkgfSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IEZsb3dDb25maWcgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctY3JlYXRlLWVudHJ5XCIpXG5jbGFzcyBTdGVwRmxvd0NyZWF0ZUVudHJ5IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBmbG93Q29uZmlnITogRmxvd0NvbmZpZztcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIHN0ZXAhOiBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBkZXZpY2VzITogRGV2aWNlUmVnaXN0cnlFbnRyeVtdO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBhcmVhcyE6IEFyZWFSZWdpc3RyeUVudHJ5W107XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGxvY2FsaXplID0gdGhpcy5oYXNzLmxvY2FsaXplO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+U3VjY2VzcyE8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgJHt0aGlzLmZsb3dDb25maWcucmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbih0aGlzLmhhc3MsIHRoaXMuc3RlcCl9XG4gICAgICAgICR7dGhpcy5kZXZpY2VzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gXCJcIlxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPHA+V2UgZm91bmQgdGhlIGZvbGxvd2luZyBkZXZpY2VzOjwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldmljZXNcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuZGV2aWNlcy5tYXAoXG4gICAgICAgICAgICAgICAgICAoZGV2aWNlKSA9PlxuICAgICAgICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiR7ZGV2aWNlLm5hbWV9PC9iPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2RldmljZS5tb2RlbH0gKCR7ZGV2aWNlLm1hbnVmYWN0dXJlcn0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXZpY2U9JHtkZXZpY2UuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1pdGVtLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVBcmVhQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBzZWxlY3RlZD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZW50cnkubm9fYXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuYXJlYXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFyZWEpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIC5hcmVhPSR7YXJlYS5hcmVhX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2FyZWEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgJHt0aGlzLmRldmljZXMubGVuZ3RoID4gMFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9hZGRBcmVhfVwiPkFkZCBBcmVhPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cblxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Zsb3dEb25lfVwiPkZpbmlzaDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9mbG93RG9uZSgpOiB2b2lkIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7IHN0ZXA6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2FkZEFyZWEoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdChcIk5hbWUgb2YgdGhlIG5ldyBhcmVhP1wiKTtcbiAgICBpZiAoIW5hbWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZWEgPSBhd2FpdCBjcmVhdGVBcmVhUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIHtcbiAgICAgICAgbmFtZSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hcmVhcyA9IFsuLi50aGlzLmFyZWFzLCBhcmVhXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBhcmVhLlwiKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVBcmVhQ2hhbmdlZChldjogRXZlbnQpIHtcbiAgICBjb25zdCBkcm9wZG93biA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgYW55O1xuICAgIGNvbnN0IGRldmljZSA9IGRyb3Bkb3duLmRldmljZTtcblxuICAgIC8vIEl0ZW0gZmlyc3QgYmVjb21lcyBudWxsLCB0aGVuIG5ldyBpdGVtLlxuICAgIGlmICghZHJvcGRvd24uc2VsZWN0ZWRJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJlYSA9IGRyb3Bkb3duLnNlbGVjdGVkSXRlbS5hcmVhO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCB1cGRhdGVEZXZpY2VSZWdpc3RyeUVudHJ5KHRoaXMuaGFzcywgZGV2aWNlLCB7XG4gICAgICAgIGFyZWFfaWQ6IGFyZWEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGBFcnJvciBzYXZpbmcgYXJlYTogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgIGRyb3Bkb3duLnZhbHVlID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAuZGV2aWNlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luOiAtNHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmRldmljZSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25zID4gKjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0IHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1jcmVhdGUtZW50cnlcIjogU3RlcEZsb3dDcmVhdGVFbnRyeTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQge1xuICBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsLFxuICBEYXRhRW50cnlGbG93UHJvZ3Jlc3NlZEV2ZW50LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IEZsb3dDb25maWcgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctZXh0ZXJuYWxcIilcbmNsYXNzIFN0ZXBGbG93RXh0ZXJuYWwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGZsb3dDb25maWchOiBGbG93Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIHN0ZXAhOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGl6ZSA9IHRoaXMuaGFzcy5sb2NhbGl6ZTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPlxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIodGhpcy5oYXNzLCB0aGlzLnN0ZXApfVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlckV4dGVybmFsU3RlcERlc2NyaXB0aW9uKHRoaXMuaGFzcywgdGhpcy5zdGVwKX1cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9wZW4tYnV0dG9uXCI+XG4gICAgICAgICAgPGEgaHJlZj0ke3RoaXMuc3RlcC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkPlxuICAgICAgICAgICAgICAke2xvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLm9wZW5fc2l0ZVwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcykge1xuICAgIHN1cGVyLmZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuaGFzcy5jb25uZWN0aW9uLnN1YnNjcmliZUV2ZW50czxEYXRhRW50cnlGbG93UHJvZ3Jlc3NlZEV2ZW50PihcbiAgICAgIGFzeW5jIChldikgPT4ge1xuICAgICAgICBpZiAoZXYuZGF0YS5mbG93X2lkICE9PSB0aGlzLnN0ZXAuZmxvd19pZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcImZsb3ctdXBkYXRlXCIsIHtcbiAgICAgICAgICBzdGVwUHJvbWlzZTogdGhpcy5mbG93Q29uZmlnLmZldGNoRmxvdyh0aGlzLmhhc3MsIHRoaXMuc3RlcC5mbG93X2lkKSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgXCJkYXRhX2VudHJ5X2Zsb3dfcHJvZ3Jlc3NlZFwiXG4gICAgKTtcbiAgICB3aW5kb3cub3Blbih0aGlzLnN0ZXAudXJsKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIC5vcGVuLWJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgICAgfVxuICAgICAgICAub3Blbi1idXR0b24gYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1leHRlcm5hbFwiOiBTdGVwRmxvd0V4dGVybmFsO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXBcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCwgYXBwbHlQb2x5bWVyRXZlbnQgfSBmcm9tIFwiLi4vLi4vcG9seW1lci10eXBlc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwRm9ybSwgRmllbGRTY2hlbWEgfSBmcm9tIFwiLi4vLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IEZsb3dDb25maWcgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctZm9ybVwiKVxuY2xhc3MgU3RlcEZsb3dGb3JtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBmbG93Q29uZmlnITogRmxvd0NvbmZpZztcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgc3RlcCE6IERhdGFFbnRyeUZsb3dTdGVwRm9ybTtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX3N0ZXBEYXRhPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9lcnJvck1zZz86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMuc3RlcDtcbiAgICBjb25zdCBzdGVwRGF0YSA9IHRoaXMuX3N0ZXBEYXRhUHJvY2Vzc2VkO1xuXG4gICAgY29uc3QgYWxsUmVxdWlyZWRJbmZvRmlsbGVkSW4gPVxuICAgICAgc3RlcERhdGEgPT09IHVuZGVmaW5lZFxuICAgICAgICA/IC8vIElmIG5vIGRhdGEgZmlsbGVkIGluLCBqdXN0IGNoZWNrIHRoYXQgYW55IGZpZWxkIGlzIHJlcXVpcmVkXG4gICAgICAgICAgc3RlcC5kYXRhX3NjaGVtYS5maW5kKChmaWVsZCkgPT4gIWZpZWxkLm9wdGlvbmFsKSA9PT0gdW5kZWZpbmVkXG4gICAgICAgIDogLy8gSWYgZGF0YSBpcyBmaWxsZWQgaW4sIG1ha2Ugc3VyZSBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZVxuICAgICAgICAgIHN0ZXBEYXRhICYmXG4gICAgICAgICAgc3RlcC5kYXRhX3NjaGVtYS5ldmVyeShcbiAgICAgICAgICAgIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgZmllbGQub3B0aW9uYWwgfHwgIVtcIlwiLCB1bmRlZmluZWRdLmluY2x1ZGVzKHN0ZXBEYXRhIVtmaWVsZC5uYW1lXSlcbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlclNob3dGb3JtU3RlcEhlYWRlcih0aGlzLmhhc3MsIHRoaXMuc3RlcCl9XG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgJHt0aGlzLl9lcnJvck1zZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+JHt0aGlzLl9lcnJvck1zZ308L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKHRoaXMuaGFzcywgdGhpcy5zdGVwKX1cbiAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAuZGF0YT0ke3N0ZXBEYXRhfVxuICAgICAgICAgIEBkYXRhLWNoYW5nZWQ9JHt0aGlzLl9zdGVwRGF0YUNoYW5nZWR9XG4gICAgICAgICAgLnNjaGVtYT0ke3N0ZXAuZGF0YV9zY2hlbWF9XG4gICAgICAgICAgLmVycm9yPSR7c3RlcC5lcnJvcnN9XG4gICAgICAgICAgLmNvbXB1dGVMYWJlbD0ke3RoaXMuX2xhYmVsQ2FsbGJhY2t9XG4gICAgICAgICAgLmNvbXB1dGVFcnJvcj0ke3RoaXMuX2Vycm9yQ2FsbGJhY2t9XG4gICAgICAgID48L2hhLWZvcm0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICR7dGhpcy5fbG9hZGluZ1xuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Ym1pdC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9zdWJtaXRTdGVwfVxuICAgICAgICAgICAgICAgICAgLmRpc2FibGVkPSR7IWFsbFJlcXVpcmVkSW5mb0ZpbGxlZElufVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICR7IWFsbFJlcXVpcmVkSW5mb0ZpbGxlZEluXG4gICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLXRvb2x0aXAgcG9zaXRpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBOb3QgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgZmlsbGVkIGluLlxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItdG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgOiBodG1sYGB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXYpID0+IHtcbiAgICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB0aGlzLl9zdWJtaXRTdGVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfc3RlcERhdGFQcm9jZXNzZWQoKSB7XG4gICAgaWYgKHRoaXMuX3N0ZXBEYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGVwRGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgdGhpcy5zdGVwLmRhdGFfc2NoZW1hLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoXCJkZWZhdWx0XCIgaW4gZmllbGQpIHtcbiAgICAgICAgZGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLmRlZmF1bHQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9zdWJtaXRTdGVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2Vycm9yTXNnID0gdW5kZWZpbmVkO1xuXG4gICAgY29uc3QgZmxvd0lkID0gdGhpcy5zdGVwLmZsb3dfaWQ7XG4gICAgY29uc3Qgc3RlcERhdGEgPSB0aGlzLl9zdGVwRGF0YSB8fCB7fTtcblxuICAgIGNvbnN0IHRvU2VuZERhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhzdGVwRGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0ZXBEYXRhW2tleV07XG4gICAgICBjb25zdCBpc0VtcHR5ID0gW3VuZGVmaW5lZCwgXCJcIl0uaW5jbHVkZXModmFsdWUpO1xuXG4gICAgICBpZiAoIWlzRW1wdHkpIHtcbiAgICAgICAgdG9TZW5kRGF0YVtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RlcCA9IGF3YWl0IHRoaXMuZmxvd0NvbmZpZy5oYW5kbGVGbG93U3RlcChcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICB0aGlzLnN0ZXAuZmxvd19pZCxcbiAgICAgICAgdG9TZW5kRGF0YVxuICAgICAgKTtcblxuICAgICAgLy8gbWFrZSBzdXJlIHdlJ3JlIHN0aWxsIHNob3dpbmcgdGhlIHNhbWUgc3RlcCBhcyB3aGVuIHdlXG4gICAgICAvLyBmaXJlZCBvZmYgcmVxdWVzdC5cbiAgICAgIGlmICghdGhpcy5zdGVwIHx8IGZsb3dJZCAhPT0gdGhpcy5zdGVwLmZsb3dfaWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICAgIHN0ZXAsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX2Vycm9yTXNnID1cbiAgICAgICAgKGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlKSB8fCBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3N0ZXBEYXRhQ2hhbmdlZChldjogUG9seW1lckNoYW5nZWRFdmVudDxhbnk+KTogdm9pZCB7XG4gICAgdGhpcy5fc3RlcERhdGEgPSBhcHBseVBvbHltZXJFdmVudChldiwgdGhpcy5fc3RlcERhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGFiZWxDYWxsYmFjayA9IChmaWVsZDogRmllbGRTY2hlbWEpOiBzdHJpbmcgPT5cbiAgICB0aGlzLmZsb3dDb25maWcucmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRMYWJlbCh0aGlzLmhhc3MsIHRoaXMuc3RlcCwgZmllbGQpO1xuXG4gIHByaXZhdGUgX2Vycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IHN0cmluZykgPT5cbiAgICB0aGlzLmZsb3dDb25maWcucmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcih0aGlzLmhhc3MsIHRoaXMuc3RlcCwgZXJyb3IpO1xuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMsXG4gICAgICBjc3NgXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWJtaXQtc3Bpbm5lciB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1mb3JtXCI6IFN0ZXBGbG93Rm9ybTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWxvYWRpbmdcIilcbmNsYXNzIFN0ZXBGbG93TG9hZGluZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5pdC1zcGlubmVyXCI+XG4gICAgICAgIDxwYXBlci1zcGlubmVyLWxpdGUgYWN0aXZlPjwvcGFwZXItc3Bpbm5lci1saXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5pbml0LXNwaW5uZXIge1xuICAgICAgICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RlcC1mbG93LWxvYWRpbmdcIjogU3RlcEZsb3dMb2FkaW5nO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgaHRtbCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1ib2R5XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmltcG9ydCAqIGFzIEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1pY29uLW5leHRcIjtcbmltcG9ydCBcIi4uLy4uL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0XCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcFwiO1xuaW1wb3J0IHsgRmxvd0NvbmZpZyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiO1xuXG5pbnRlcmZhY2UgSGFuZGxlck9iaiB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2x1Zzogc3RyaW5nO1xufVxuXG5AY3VzdG9tRWxlbWVudChcInN0ZXAtZmxvdy1waWNrLWhhbmRsZXJcIilcbmNsYXNzIFN0ZXBGbG93UGlja0hhbmRsZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGZsb3dDb25maWchOiBGbG93Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhbmRsZXJzITogc3RyaW5nW107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgZmlsdGVyPzogc3RyaW5nO1xuICBwcml2YXRlIF93aWR0aD86IG51bWJlcjtcblxuICBwcml2YXRlIF9nZXRIYW5kbGVycyA9IG1lbW9pemVPbmUoKGg6IHN0cmluZ1tdLCBmaWx0ZXI/OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyczogSGFuZGxlck9ialtdID0gaC5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IHRoaXMuaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlcn0uY29uZmlnLnRpdGxlYCksXG4gICAgICAgIHNsdWc6IGhhbmRsZXIsXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgY29uc3Qgb3B0aW9uczogRnVzZS5GdXNlT3B0aW9uczxIYW5kbGVyT2JqPiA9IHtcbiAgICAgICAga2V5czogW1wibmFtZVwiLCBcInNsdWdcIl0sXG4gICAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDIsXG4gICAgICAgIHRocmVzaG9sZDogMC4yLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShoYW5kbGVycywgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gZnVzZS5zZWFyY2goZmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGhhbmRsZXJzLnNvcnQoKGEsIGIpID0+XG4gICAgICBhLm5hbWUudG9VcHBlckNhc2UoKSA8IGIubmFtZS50b1VwcGVyQ2FzZSgpID8gLTEgOiAxXG4gICAgKTtcbiAgfSk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5fZ2V0SGFuZGxlcnModGhpcy5oYW5kbGVycywgdGhpcy5maWx0ZXIpO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aDI+JHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLm5ld1wiKX08L2gyPlxuICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAuZmlsdGVyPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZmlsdGVyQ2hhbmdlZH1cbiAgICAgID48L3NlYXJjaC1pbnB1dD5cbiAgICAgIDxkaXYgc3R5bGU9JHtzdHlsZU1hcCh7IHdpZHRoOiBgJHt0aGlzLl93aWR0aH1weGAgfSl9PlxuICAgICAgICAke2hhbmRsZXJzLm1hcChcbiAgICAgICAgICAoaGFuZGxlcjogSGFuZGxlck9iaikgPT5cbiAgICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz0ke3RoaXMuX2hhbmRsZXJQaWNrZWR9IC5oYW5kbGVyPSR7aGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICAgICR7aGFuZGxlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgICAgICAgICAgIDxoYS1pY29uLW5leHQ+PC9oYS1pY29uLW5leHQ+XG4gICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgLy8gU3RvcmUgdGhlIHdpZHRoIHNvIHRoYXQgd2hlbiB3ZSBzZWFyY2gsIGJveCBkb2Vzbid0IGp1bXBcbiAgICBpZiAoIXRoaXMuX3dpZHRoKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcImRpdlwiKSEuY2xpZW50V2lkdGg7XG4gICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJDaGFuZ2VkKGUpIHtcbiAgICB0aGlzLmZpbHRlciA9IGUuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlclBpY2tlZChldikge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImZsb3ctdXBkYXRlXCIsIHtcbiAgICAgIHN0ZXBQcm9taXNlOiB0aGlzLmZsb3dDb25maWcuY3JlYXRlRmxvdyhcbiAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICBldi5jdXJyZW50VGFyZ2V0LmhhbmRsZXIuc2x1Z1xuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICB9XG4gICAgICBkaXYge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XG4gICAgICB9XG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1waWNrLWhhbmRsZXJcIjogU3RlcEZsb3dQaWNrSGFuZGxlcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmV4cG9ydCBjb25zdCBjb25maWdGbG93Q29udGVudFN0eWxlcyA9IGNzc2BcbiAgaDIge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgLmNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMCAyNHB4O1xuICB9XG5cbiAgLmJ1dHRvbnMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5cbiAgaGEtbWFya2Rvd24ge1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgaGEtbWFya2Rvd24gYSB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB9XG4gIGhhLW1hcmtkb3duIGltZzpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuYDtcbiIsImltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvbWl4aW5cIjtcblxuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG4vLyBQb2x5bWVyIGxlZ2FjeSBldmVudCBoZWxwZXJzIHVzZWQgY291cnRlc3kgb2YgdGhlIFBvbHltZXIgcHJvamVjdC5cbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbi8vXG4vLyBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbi8vIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbi8vIG1ldDpcbi8vXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXJcbi8vIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbi8vIGRpc3RyaWJ1dGlvbi5cbi8vICAgICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuLy8gY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb21cbi8vIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4vL1xuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuLy8gXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4vLyBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuLy8gT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4vLyBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4vLyBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbi8vIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuLy8gVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuLy8gKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4vLyBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG4vKiBAcG9seW1lck1peGluICovXG5leHBvcnQgY29uc3QgRXZlbnRzTWl4aW4gPSBkZWR1cGluZ01peGluKFxuICAoc3VwZXJDbGFzcykgPT5cbiAgICBjbGFzcyBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuICAgICAgLyoqXG4gICAqIERpc3BhdGNoZXMgYSBjdXN0b20gZXZlbnQgd2l0aCBhbiBvcHRpb25hbCBkZXRhaWwgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIE5hbWUgb2YgZXZlbnQgdHlwZS5cbiAgICogQHBhcmFtIHsqPX0gZGV0YWlsIERldGFpbCB2YWx1ZSBjb250YWluaW5nIGV2ZW50LXNwZWNpZmljXG4gICAqICAgcGF5bG9hZC5cbiAgICogQHBhcmFtIHt7IGJ1YmJsZXM6IChib29sZWFufHVuZGVmaW5lZCksXG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAoYm9vbGVhbnx1bmRlZmluZWQpIH09fVxuICAgICogIG9wdGlvbnMgT2JqZWN0IHNwZWNpZnlpbmcgb3B0aW9ucy4gIFRoZXNlIG1heSBpbmNsdWRlOlxuICAgICogIGBidWJibGVzYCAoYm9vbGVhbiwgZGVmYXVsdHMgdG8gYHRydWVgKSxcbiAgICAqICBgY2FuY2VsYWJsZWAgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGZhbHNlKSwgYW5kXG4gICAgKiAgYG5vZGVgIG9uIHdoaWNoIHRvIGZpcmUgdGhlIGV2ZW50IChIVE1MRWxlbWVudCwgZGVmYXVsdHMgdG8gYHRoaXNgKS5cbiAgICAqIEByZXR1cm4ge0V2ZW50fSBUaGUgbmV3IGV2ZW50IHRoYXQgd2FzIGZpcmVkLlxuICAgICovXG4gICAgICBmaXJlKHR5cGUsIGRldGFpbCwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgcmV0dXJuIGZpcmVFdmVudChvcHRpb25zLm5vZGUgfHwgdGhpcywgdHlwZSwgZGV0YWlsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4pO1xuIiwiZXhwb3J0IGNvbnN0IGFwcGx5UG9seW1lckV2ZW50ID0gPFQ+KFxuICBldjogUG9seW1lckNoYW5nZWRFdmVudDxUPixcbiAgY3VyVmFsdWU6IFRcbik6IFQgPT4ge1xuICBjb25zdCB7IHBhdGgsIHZhbHVlIH0gPSBldi5kZXRhaWw7XG4gIGlmICghcGF0aCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBjb25zdCBwcm9wTmFtZSA9IHBhdGguc3BsaXQoXCIuXCIpWzFdO1xuICByZXR1cm4geyAuLi5jdXJWYWx1ZSwgW3Byb3BOYW1lXTogdmFsdWUgfTtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seW1lckNoYW5nZWRFdmVudDxUPiBleHRlbmRzIEV2ZW50IHtcbiAgZGV0YWlsOiB7XG4gICAgdmFsdWU6IFQ7XG4gICAgcGF0aD86IHN0cmluZztcbiAgICBxdWV1ZVByb3BlcnR5OiBib29sZWFuO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHltZXJJcm9uU2VsZWN0RXZlbnQ8VD4gZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIGl0ZW06IFQ7XG4gIH07XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiaGFzcy1sb2dvdXRcIjogdW5kZWZpbmVkO1xuICAgIFwiaXJvbi1yZXNpemVcIjogdW5kZWZpbmVkO1xuICAgIFwiY29uZmlnLXJlZnJlc2hcIjogdW5kZWZpbmVkO1xuICAgIFwiaGFzcy1hcGktY2FsbGVkXCI6IHtcbiAgICAgIHN1Y2Nlc3M6IGJvb2xlYW47XG4gICAgICByZXNwb25zZTogdW5rbm93bjtcbiAgICB9O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBNkRBO0FBMURBO0FBQ0E7QUF1QkE7QUFJQTtBQUVBOzs7QUFDQTs7OztBQUNBO0FBRUE7OztBQUNBOzs7O0FBQ0E7QUFFQTs7O0FBQ0E7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQWNBOzs7QUFBQTtBQTNEQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBQ0E7QUE2REE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7O0FBR0E7QUFFQTtBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBQUE7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7O0FBWUE7QUFYQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUF1REE7O0FBQ0E7QUF0REE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7O0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFUQTtBQVlBO0FBRUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUF0REE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBMERBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBRUE7QUFDQTtBQVdBO0FBSUE7QUFBQTtBQUtBO0FBS0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUdBO0FBQUE7QUFIQTtBQVVBO0FBSUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQW9CQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFZQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBT0E7QUFhQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7O0FBcVFBO0FBelBBOzs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUFBOztBQUFBOzs7QUFFQTs7QUFHQTs7QUFBQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUE0REE7QUFyREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQVFBO0FBUUE7QUFRQTtBQUNBO0FBY0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOzs7O0FBRUE7QUFFQTs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUNBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7Ozs7QUFFQTtBQUFBOztBQUFBOzs7QUFFQTs7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBOzs7QUFBQTtBQXRRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFaQTtBQURBO0FBQ0E7QUF5UUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFVBO0FBUUE7QUFJQTtBQUNBO0FBSUE7QUFBQTtBQUFBOztBQTRCQTtBQW5CQTtBQUNBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQUE7QUF2QkE7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBUEE7QUFEQTtBQUNBO0FBNEJBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQVFBO0FBQUE7QUFBQTs7QUFxSkE7QUF0SUE7QUFBQTtBQUNBO0FBRUE7QUF5Q0E7QUFPQTtBQTNDQTtBQUNBO0FBaUNBO0FBNUJBO0FBZUE7QUFRQTtBQXZCQTtBQWtDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOztBQUZBO0FBR0E7Ozs7QUFFQTs7Ozs7O0FBRUE7QUFFQTs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7O0FBRkE7Ozs7QUFJQTtBQUNBOzs7Ozs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFnQ0E7QUFDQTs7O0FBQUE7QUFoSkE7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBYkE7QUFEQTtBQUNBO0FBcUpBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQVNBO0FBR0E7QUFDQTtBQVFBO0FBQUE7QUFBQTs7QUE4REE7QUFyREE7QUFDQTtBQUVBO0FBV0E7QUFNQTtBQUVBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7OztBQUFBO0FBekRBO0FBREE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQVBBO0FBREE7QUFDQTtBQThEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBNElBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFnQkE7QUF4SkE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBU0E7QUFtQ0E7QUF0Q0E7QUFnQkE7QUFvQkE7QUFMQTtBQVVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBOztBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7OztBQUVBOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBOzs7QUFBQTtBQXJLQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFoQkE7QUFEQTtBQUNBO0FBMEtBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTUE7QUFRQTtBQUdBO0FBQUE7QUFBQTs7QUFpQkE7QUFoQkE7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBTUE7OztBQUFBO0FBaEJBO0FBREE7QUFDQTtBQWlCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7O0FBa0VBO0FBaEVBO0FBQUE7QUFDQTtBQUVBO0FBaUJBO0FBUkE7QUFBQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0E7Ozs7QUFDQTtBQUVBOzs7QUFDQTtBQUNBO0FBSUE7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQWFBOzs7QUFBQTtBQTNGQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBQ0E7QUErRkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBRkE7QUFrQkE7QUFDQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==