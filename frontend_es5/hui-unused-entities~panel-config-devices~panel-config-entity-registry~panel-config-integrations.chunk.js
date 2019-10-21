(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"],{

/***/ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist!./src/components/data-table/sort_filter_worker.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(/*! ../../../node_modules/workerize-loader/dist/rpc-wrapper.js */ "./node_modules/workerize-loader/dist/rpc-wrapper.js")
				var methods = ["filterSortData","filterData","sortData"]
				module.exports = function() {
					var w = new Worker(__webpack_require__.p + "dd45ce9b64c4f9c93d31.worker.js", { name: "[hash].worker.js" })
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

/***/ "./src/components/data-table/ha-data-table.ts":
/*!****************************************************!*\
  !*** ./src/components/data-table/ha-data-table.ts ***!
  \****************************************************/
/*! exports provided: HaDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaDataTable", function() { return HaDataTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
/* harmony import */ var deep_clone_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deep-clone-simple */ "./node_modules/deep-clone-simple/index.js");
/* harmony import */ var _material_data_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/data-table */ "./node_modules/@material/data-table/index.js");
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workerize-loader!./sort_filter_worker */ "./node_modules/workerize-loader/dist/index.js!./src/components/data-table/sort_filter_worker.ts");
/* harmony import */ var workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_search_search_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/search/search-input */ "./src/common/search/search-input.ts");
/* harmony import */ var _ha_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-checkbox */ "./src/components/ha-checkbox.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_util_render_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/util/render-status */ "./src/common/util/render-status.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/util/debounce */ "./src/common/util/debounce.ts");





// eslint-disable-next-line import/no-webpack-loader-syntax
// @ts-ignore
// tslint:disable-next-line: no-implicit-dependencies







var HaDataTable = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaDataTable, _super);
    function HaDataTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.columns = {};
        _this.data = [];
        _this.selectable = false;
        _this.id = "id";
        _this.mdcFoundationClass = _material_data_table__WEBPACK_IMPORTED_MODULE_3__["MDCDataTableFoundation"];
        _this._filterable = false;
        _this._headerChecked = false;
        _this._headerIndeterminate = false;
        _this._checkedRows = [];
        _this._filter = "";
        _this._sortDirection = null;
        _this._filteredData = [];
        _this._sortColumns = {};
        _this.curRequest = 0;
        _this._debounceSearch = Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_11__["debounce"])(function (ev) {
            _this._filter = ev.detail.value;
        }, 200, false);
        return _this;
    }
    HaDataTable.prototype.firstUpdated = function () {
        _super.prototype.firstUpdated.call(this);
        this._worker = workerize_loader_sort_filter_worker__WEBPACK_IMPORTED_MODULE_5___default()();
    };
    HaDataTable.prototype.updated = function (properties) {
        _super.prototype.updated.call(this, properties);
        if (properties.has("columns")) {
            this._filterable = Object.values(this.columns).some(function (column) { return column.filterable; });
            for (var columnId in this.columns) {
                if (this.columns[columnId].direction) {
                    this._sortDirection = this.columns[columnId].direction;
                    this._sortColumn = columnId;
                    break;
                }
            }
            var clonedColumns = Object(deep_clone_simple__WEBPACK_IMPORTED_MODULE_2__["default"])(this.columns);
            Object.values(clonedColumns).forEach(function (column) {
                delete column.title;
                delete column.type;
                delete column.template;
            });
            this._sortColumns = clonedColumns;
        }
        if (properties.has("data") ||
            properties.has("columns") ||
            properties.has("_filter") ||
            properties.has("_sortColumn") ||
            properties.has("_sortDirection")) {
            this._filterData();
        }
    };
    HaDataTable.prototype.render = function () {
        var _this = this;
        return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      ", "\n      <div class=\"mdc-data-table\">\n        <table class=\"mdc-data-table__table\">\n          <thead>\n            <tr class=\"mdc-data-table__header-row\">\n              ", "\n              ", "\n            </tr>\n          </thead>\n          <tbody class=\"mdc-data-table__content\">\n            ", "\n          </tbody>\n        </table>\n      </div>\n    "], ["\n      ",
            "\n      <div class=\"mdc-data-table\">\n        <table class=\"mdc-data-table__table\">\n          <thead>\n            <tr class=\"mdc-data-table__header-row\">\n              ",
            "\n              ",
            "\n            </tr>\n          </thead>\n          <tbody class=\"mdc-data-table__content\">\n            ",
            "\n          </tbody>\n        </table>\n      </div>\n    "])), this._filterable
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <search-input\n              @value-changed=", "\n            ></search-input>\n          "], ["\n            <search-input\n              @value-changed=", "\n            ></search-input>\n          "])), this._handleSearchChange) : "", this.selectable
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    <th\n                      class=\"mdc-data-table__header-cell mdc-data-table__header-cell--checkbox\"\n                      role=\"columnheader\"\n                      scope=\"col\"\n                    >\n                      <ha-checkbox\n                        id=\"header-checkbox\"\n                        class=\"mdc-data-table__row-checkbox\"\n                        @change=", "\n                        .indeterminate=", "\n                        .checked=", "\n                      >\n                      </ha-checkbox>\n                    </th>\n                  "], ["\n                    <th\n                      class=\"mdc-data-table__header-cell mdc-data-table__header-cell--checkbox\"\n                      role=\"columnheader\"\n                      scope=\"col\"\n                    >\n                      <ha-checkbox\n                        id=\"header-checkbox\"\n                        class=\"mdc-data-table__row-checkbox\"\n                        @change=", "\n                        .indeterminate=", "\n                        .checked=", "\n                      >\n                      </ha-checkbox>\n                    </th>\n                  "])), this._handleHeaderRowCheckboxChange, this._headerIndeterminate, this._headerChecked) : "", Object.entries(this.columns).map(function (columnEntry) {
            var key = columnEntry[0], column = columnEntry[1];
            var sorted = key === _this._sortColumn;
            var classes = {
                "mdc-data-table__header-cell--numeric": Boolean(column.type && column.type === "numeric"),
                "mdc-data-table__header-cell--icon": Boolean(column.type && column.type === "icon"),
                sortable: Boolean(column.sortable),
                "not-sorted": Boolean(column.sortable && !sorted),
            };
            return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                  <th\n                    class=\"mdc-data-table__header-cell ", "\"\n                    role=\"columnheader\"\n                    scope=\"col\"\n                    @click=", "\n                    data-column-id=\"", "\"\n                  >\n                    ", "\n                    <span>", "</span>\n                  </th>\n                "], ["\n                  <th\n                    class=\"mdc-data-table__header-cell ", "\"\n                    role=\"columnheader\"\n                    scope=\"col\"\n                    @click=", "\n                    data-column-id=\"", "\"\n                  >\n                    ",
                "\n                    <span>", "</span>\n                  </th>\n                "])), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["classMap"])(classes), _this._handleHeaderClick, key, column.sortable
                ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                          <ha-icon\n                            .icon=", "\n                          ></ha-icon>\n                        "], ["\n                          <ha-icon\n                            .icon=",
                    "\n                          ></ha-icon>\n                        "])), sorted && _this._sortDirection === "desc"
                    ? "hass:arrow-down"
                    : "hass:arrow-up") : "", column.title);
        }), Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__["repeat"])(this._filteredData, function (row) { return row[_this.id]; }, function (row) { return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <tr\n                  data-row-id=\"", "\"\n                  @click=", "\n                  class=\"mdc-data-table__row\"\n                >\n                  ", "\n                  ", "\n                </tr>\n              "], ["\n                <tr\n                  data-row-id=\"", "\"\n                  @click=", "\n                  class=\"mdc-data-table__row\"\n                >\n                  ",
            "\n                  ",
            "\n                </tr>\n              "])), row[_this.id], _this._handleRowClick, _this.selectable
            ? Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                        <td\n                          class=\"mdc-data-table__cell mdc-data-table__cell--checkbox\"\n                        >\n                          <ha-checkbox\n                            class=\"mdc-data-table__row-checkbox\"\n                            @change=", "\n                            .checked=", "\n                          >\n                          </ha-checkbox>\n                        </td>\n                      "], ["\n                        <td\n                          class=\"mdc-data-table__cell mdc-data-table__cell--checkbox\"\n                        >\n                          <ha-checkbox\n                            class=\"mdc-data-table__row-checkbox\"\n                            @change=", "\n                            .checked=", "\n                          >\n                          </ha-checkbox>\n                        </td>\n                      "])), _this._handleRowCheckboxChange, _this._checkedRows.includes(row[_this.id])) : "", Object.entries(_this.columns).map(function (columnEntry) {
            var key = columnEntry[0], column = columnEntry[1];
            return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                      <td\n                        class=\"mdc-data-table__cell ", "\"\n                      >\n                        ", "\n                      </td>\n                    "], ["\n                      <td\n                        class=\"mdc-data-table__cell ",
                "\"\n                      >\n                        ",
                "\n                      </td>\n                    "])), Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["classMap"])({
                "mdc-data-table__cell--numeric": Boolean(column.type && column.type === "numeric"),
                "mdc-data-table__cell--icon": Boolean(column.type && column.type === "icon"),
            }), column.template
                ? column.template(row[key], row)
                : row[key]);
        })); }));
    };
    HaDataTable.prototype.createAdapter = function () {
        var _this = this;
        return {
            addClassAtRowIndex: function (rowIndex, cssClasses) {
                _this.rowElements[rowIndex].classList.add(cssClasses);
            },
            getRowCount: function () { return _this.data.length; },
            getRowElements: function () { return _this.rowElements; },
            getRowIdAtIndex: function (rowIndex) { return _this._getRowIdAtIndex(rowIndex); },
            getRowIndexByChildElement: function (el) {
                return Array.prototype.indexOf.call(_this.rowElements, el.closest("tr"));
            },
            getSelectedRowCount: function () { return _this._checkedRows.length; },
            isCheckboxAtRowIndexChecked: function (rowIndex) {
                return _this._checkedRows.includes(_this._getRowIdAtIndex(rowIndex));
            },
            isHeaderRowCheckboxChecked: function () { return _this._headerChecked; },
            isRowsSelectable: function () { return true; },
            notifyRowSelectionChanged: function () { return undefined; },
            notifySelectedAll: function () { return undefined; },
            notifyUnselectedAll: function () { return undefined; },
            registerHeaderRowCheckbox: function () { return undefined; },
            registerRowCheckboxes: function () { return undefined; },
            removeClassAtRowIndex: function (rowIndex, cssClasses) {
                _this.rowElements[rowIndex].classList.remove(cssClasses);
            },
            setAttributeAtRowIndex: function (rowIndex, attr, value) {
                _this.rowElements[rowIndex].setAttribute(attr, value);
            },
            setHeaderRowCheckboxChecked: function (checked) {
                _this._headerChecked = checked;
            },
            setHeaderRowCheckboxIndeterminate: function (indeterminate) {
                _this._headerIndeterminate = indeterminate;
            },
            setRowCheckboxCheckedAtIndex: function (rowIndex, checked) {
                _this._setRowChecked(_this._getRowIdAtIndex(rowIndex), checked);
            },
        };
    };
    HaDataTable.prototype._filterData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var startTime, curRequest, filterProm, data, curTime, elapsed;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = new Date().getTime();
                        this.curRequest++;
                        curRequest = this.curRequest;
                        filterProm = this._worker.filterSortData(this.data, this._sortColumns, this._filter, this._sortDirection, this._sortColumn);
                        return [4 /*yield*/, Promise.all([filterProm, _common_util_render_status__WEBPACK_IMPORTED_MODULE_10__["nextRender"]])];
                    case 1:
                        data = (_a.sent())[0];
                        curTime = new Date().getTime();
                        elapsed = curTime - startTime;
                        if (!(elapsed < 100)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100 - elapsed); })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (this.curRequest !== curRequest) {
                            return [2 /*return*/];
                        }
                        this._filteredData = data;
                        return [2 /*return*/];
                }
            });
        });
    };
    HaDataTable.prototype._getRowIdAtIndex = function (rowIndex) {
        return this.rowElements[rowIndex].getAttribute("data-row-id");
    };
    HaDataTable.prototype._handleHeaderClick = function (ev) {
        var columnId = ev.target
            .closest("th")
            .getAttribute("data-column-id");
        if (!this.columns[columnId].sortable) {
            return;
        }
        if (!this._sortDirection || this._sortColumn !== columnId) {
            this._sortDirection = "asc";
        }
        else if (this._sortDirection === "asc") {
            this._sortDirection = "desc";
        }
        else {
            this._sortDirection = null;
        }
        this._sortColumn = this._sortDirection === null ? undefined : columnId;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "sorting-changed", {
            column: columnId,
            direction: this._sortDirection,
        });
    };
    HaDataTable.prototype._handleHeaderRowCheckboxChange = function () {
        this._headerChecked = this._headerCheckbox.checked;
        this._headerIndeterminate = this._headerCheckbox.indeterminate;
        this.mdcFoundation.handleHeaderRowCheckboxChange();
    };
    HaDataTable.prototype._handleRowCheckboxChange = function (ev) {
        var checkbox = ev.target;
        var rowId = checkbox.closest("tr").getAttribute("data-row-id");
        this._setRowChecked(rowId, checkbox.checked);
        this.mdcFoundation.handleRowCheckboxChange(ev);
    };
    HaDataTable.prototype._handleRowClick = function (ev) {
        var rowId = ev.target
            .closest("tr")
            .getAttribute("data-row-id");
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "row-click", { id: rowId }, { bubbles: false });
    };
    HaDataTable.prototype._setRowChecked = function (rowId, checked) {
        if (checked && !this._checkedRows.includes(rowId)) {
            this._checkedRows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this._checkedRows, [rowId]);
        }
        else if (!checked) {
            var index = this._checkedRows.indexOf(rowId);
            if (index !== -1) {
                this._checkedRows.splice(index, 1);
            }
        }
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "selection-changed", {
            id: rowId,
            selected: checked,
        });
    };
    HaDataTable.prototype._handleSearchChange = function (ev) {
        this._debounceSearch(ev);
    };
    Object.defineProperty(HaDataTable, "styles", {
        get: function () {
            return Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      /* default mdc styles, colors changed, without checkbox styles */\n\n      .mdc-data-table__content {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table {\n        background-color: var(--card-background-color);\n        border-radius: 4px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: rgba(var(--rgb-primary-text-color), 0.12);\n        display: inline-flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        overflow-x: auto;\n      }\n\n      .mdc-data-table__row--selected {\n        background-color: rgba(var(--rgb-primary-color), 0.04);\n      }\n\n      .mdc-data-table__row {\n        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);\n      }\n\n      .mdc-data-table__row {\n        border-top-width: 1px;\n        border-top-style: solid;\n      }\n\n      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {\n        background-color: rgba(var(--rgb-primary-text-color), 0.04);\n      }\n\n      .mdc-data-table__header-cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__header-row {\n        height: 56px;\n      }\n\n      .mdc-data-table__row {\n        height: 52px;\n      }\n\n      .mdc-data-table__cell,\n      .mdc-data-table__header-cell {\n        padding-right: 16px;\n        padding-left: 16px;\n      }\n\n      .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__cell--checkbox {\n        /* @noflip */\n        padding-left: 16px;\n        /* @noflip */\n        padding-right: 0;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__header-cell--checkbox[dir=\"rtl\"],\n      [dir=\"rtl\"] .mdc-data-table__cell--checkbox,\n      .mdc-data-table__cell--checkbox[dir=\"rtl\"] {\n        /* @noflip */\n        padding-left: 0;\n        /* @noflip */\n        padding-right: 16px;\n      }\n\n      .mdc-data-table__table {\n        width: 100%;\n        border: 0;\n        white-space: nowrap;\n        border-collapse: collapse;\n      }\n\n      .mdc-data-table__cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table__cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__cell--numeric,\n      .mdc-data-table__cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__cell--icon {\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n\n      .mdc-data-table__header-cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.375rem;\n        font-weight: 500;\n        letter-spacing: 0.0071428571em;\n        text-decoration: inherit;\n        text-transform: inherit;\n        text-align: left;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell,\n      .mdc-data-table__header-cell[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: right;\n      }\n\n      .mdc-data-table__header-cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--numeric,\n      .mdc-data-table__header-cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__header-cell--icon {\n        text-align: center;\n      }\n\n      /* custom from here */\n\n      .mdc-data-table {\n        display: block;\n      }\n      .mdc-data-table__header-cell {\n        overflow: hidden;\n      }\n      .mdc-data-table__header-cell.sortable {\n        cursor: pointer;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon)\n        span {\n        position: relative;\n        left: -24px;\n      }\n      .mdc-data-table__header-cell.not-sorted > * {\n        transition: left 0.2s ease 0s;\n      }\n      .mdc-data-table__header-cell.not-sorted ha-icon {\n        left: -36px;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon):hover\n        span {\n        left: 0px;\n      }\n      .mdc-data-table__header-cell:hover.not-sorted ha-icon {\n        left: 0px;\n      }\n    "], ["\n      /* default mdc styles, colors changed, without checkbox styles */\n\n      .mdc-data-table__content {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table {\n        background-color: var(--card-background-color);\n        border-radius: 4px;\n        border-width: 1px;\n        border-style: solid;\n        border-color: rgba(var(--rgb-primary-text-color), 0.12);\n        display: inline-flex;\n        flex-direction: column;\n        box-sizing: border-box;\n        overflow-x: auto;\n      }\n\n      .mdc-data-table__row--selected {\n        background-color: rgba(var(--rgb-primary-color), 0.04);\n      }\n\n      .mdc-data-table__row {\n        border-top-color: rgba(var(--rgb-primary-text-color), 0.12);\n      }\n\n      .mdc-data-table__row {\n        border-top-width: 1px;\n        border-top-style: solid;\n      }\n\n      .mdc-data-table__row:not(.mdc-data-table__row--selected):hover {\n        background-color: rgba(var(--rgb-primary-text-color), 0.04);\n      }\n\n      .mdc-data-table__header-cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__cell {\n        color: var(--primary-text-color);\n      }\n\n      .mdc-data-table__header-row {\n        height: 56px;\n      }\n\n      .mdc-data-table__row {\n        height: 52px;\n      }\n\n      .mdc-data-table__cell,\n      .mdc-data-table__header-cell {\n        padding-right: 16px;\n        padding-left: 16px;\n      }\n\n      .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__cell--checkbox {\n        /* @noflip */\n        padding-left: 16px;\n        /* @noflip */\n        padding-right: 0;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--checkbox,\n      .mdc-data-table__header-cell--checkbox[dir=\"rtl\"],\n      [dir=\"rtl\"] .mdc-data-table__cell--checkbox,\n      .mdc-data-table__cell--checkbox[dir=\"rtl\"] {\n        /* @noflip */\n        padding-left: 0;\n        /* @noflip */\n        padding-right: 16px;\n      }\n\n      .mdc-data-table__table {\n        width: 100%;\n        border: 0;\n        white-space: nowrap;\n        border-collapse: collapse;\n      }\n\n      .mdc-data-table__cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.25rem;\n        font-weight: 400;\n        letter-spacing: 0.0178571429em;\n        text-decoration: inherit;\n        text-transform: inherit;\n      }\n\n      .mdc-data-table__cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__cell--numeric,\n      .mdc-data-table__cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__cell--icon {\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n\n      .mdc-data-table__header-cell {\n        font-family: Roboto, sans-serif;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-font-smoothing: antialiased;\n        font-size: 0.875rem;\n        line-height: 1.375rem;\n        font-weight: 500;\n        letter-spacing: 0.0071428571em;\n        text-decoration: inherit;\n        text-transform: inherit;\n        text-align: left;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell,\n      .mdc-data-table__header-cell[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: right;\n      }\n\n      .mdc-data-table__header-cell--numeric {\n        text-align: right;\n      }\n      [dir=\"rtl\"] .mdc-data-table__header-cell--numeric,\n      .mdc-data-table__header-cell--numeric[dir=\"rtl\"] {\n        /* @noflip */\n        text-align: left;\n      }\n\n      .mdc-data-table__header-cell--icon {\n        text-align: center;\n      }\n\n      /* custom from here */\n\n      .mdc-data-table {\n        display: block;\n      }\n      .mdc-data-table__header-cell {\n        overflow: hidden;\n      }\n      .mdc-data-table__header-cell.sortable {\n        cursor: pointer;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon)\n        span {\n        position: relative;\n        left: -24px;\n      }\n      .mdc-data-table__header-cell.not-sorted > * {\n        transition: left 0.2s ease 0s;\n      }\n      .mdc-data-table__header-cell.not-sorted ha-icon {\n        left: -36px;\n      }\n      .mdc-data-table__header-cell.not-sorted:not(.mdc-data-table__header-cell--numeric):not(.mdc-data-table__header-cell--icon):hover\n        span {\n        left: 0px;\n      }\n      .mdc-data-table__header-cell:hover.not-sorted ha-icon {\n        left: 0px;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Object })
    ], HaDataTable.prototype, "columns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Array })
    ], HaDataTable.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean })
    ], HaDataTable.prototype, "selectable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String })
    ], HaDataTable.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["query"])(".mdc-data-table")
    ], HaDataTable.prototype, "mdcRoot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["queryAll"])(".mdc-data-table__row")
    ], HaDataTable.prototype, "rowElements", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#header-checkbox")
    ], HaDataTable.prototype, "_headerCheckbox", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean })
    ], HaDataTable.prototype, "_filterable", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean })
    ], HaDataTable.prototype, "_headerChecked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Boolean })
    ], HaDataTable.prototype, "_headerIndeterminate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Array })
    ], HaDataTable.prototype, "_checkedRows", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String })
    ], HaDataTable.prototype, "_filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String })
    ], HaDataTable.prototype, "_sortColumn", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: String })
    ], HaDataTable.prototype, "_sortDirection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["property"])({ type: Array })
    ], HaDataTable.prototype, "_filteredData", void 0);
    HaDataTable = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-data-table")
    ], HaDataTable);
    return HaDataTable;
}(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_4__["BaseElement"]));

var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;


/***/ }),

/***/ "./src/components/ha-checkbox.ts":
/*!***************************************!*\
  !*** ./src/components/ha-checkbox.ts ***!
  \***************************************/
/*! exports provided: HaCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaCheckbox", function() { return HaCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-checkbox */ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js");
/* harmony import */ var _material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-checkbox/mwc-checkbox-css */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");




// tslint:disable-next-line
var MwcCheckbox = customElements.get("mwc-checkbox");
var HaCheckbox = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaCheckbox, _super);
    function HaCheckbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HaCheckbox.prototype.firstUpdated = function () {
        _super.prototype.firstUpdated.call(this);
        this.style.setProperty("--mdc-theme-secondary", "var(--primary-color)");
    };
    Object.defineProperty(HaCheckbox, "styles", {
        get: function () {
            return [
                _material_mwc_checkbox_mwc_checkbox_css__WEBPACK_IMPORTED_MODULE_3__["style"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)\n          ~ .mdc-checkbox__background {\n          border-color: rgba(var(--rgb-primary-text-color), 0.54);\n        }\n      "], ["\n        .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)\n          ~ .mdc-checkbox__background {\n          border-color: rgba(var(--rgb-primary-text-color), 0.54);\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    HaCheckbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("ha-checkbox")
    ], HaCheckbox);
    return HaCheckbox;
}(MwcCheckbox));

var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXVudXNlZC1lbnRpdGllc35wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctZW50aXR5LXJlZ2lzdHJ5fnBhbmVsLWNvbmZpZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRhLXRhYmxlL3NvcnRfZmlsdGVyX3dvcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3NlYXJjaC9zZWFyY2gtaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGF0YS10YWJsZS9oYS1kYXRhLXRhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNoZWNrYm94LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdFx0XHR2YXIgYWRkTWV0aG9kcyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzXCIpXG5cdFx0XHRcdHZhciBtZXRob2RzID0gW1wiZmlsdGVyU29ydERhdGFcIixcImZpbHRlckRhdGFcIixcInNvcnREYXRhXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZDQ1Y2U5YjY0YzRmOWM5M2QzMS53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCwgaHRtbCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcInNlYXJjaC1pbnB1dFwiKVxuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBmaWx0ZXI/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgbGFiZWw9XCJTZWFyY2hcIlxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuZmlsdGVyfVxuICAgICAgICAgIEB2YWx1ZS1jaGFuZ2VkPSR7dGhpcy5fZmlsdGVySW5wdXRDaGFuZ2VkfVxuICAgICAgICA+XG4gICAgICAgICAgPGlyb24taWNvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFnbmlmeVwiXG4gICAgICAgICAgICBzbG90PVwicHJlZml4XCJcbiAgICAgICAgICAgIGNsYXNzPVwicHJlZml4XCJcbiAgICAgICAgICA+PC9pcm9uLWljb24+XG4gICAgICAgICAgJHt0aGlzLmZpbHRlciAmJlxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzdWZmaXhcIlxuICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2NsZWFyU2VhcmNofVxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDbGVhclwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhclwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJ2YWx1ZS1jaGFuZ2VkXCIsIHsgdmFsdWU6IFN0cmluZyh2YWx1ZSkgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9maWx0ZXJJbnB1dENoYW5nZWQoZSkge1xuICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfY2xlYXJTZWFyY2goKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2hhbmdlZChcIlwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgfVxuICAgICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAucHJlZml4IHtcbiAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic2VhcmNoLWlucHV0XCI6IFNlYXJjaElucHV0O1xuICB9XG59XG4iLCJpbXBvcnQgeyByZXBlYXQgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9yZXBlYXRcIjtcbmltcG9ydCBkZWVwQ2xvbmUgZnJvbSBcImRlZXAtY2xvbmUtc2ltcGxlXCI7XG5cbmltcG9ydCB7XG4gIE1EQ0RhdGFUYWJsZUFkYXB0ZXIsXG4gIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24sXG59IGZyb20gXCJAbWF0ZXJpYWwvZGF0YS10YWJsZVwiO1xuXG5pbXBvcnQge1xuICBCYXNlRWxlbWVudCxcbiAgaHRtbCxcbiAgcXVlcnksXG4gIHF1ZXJ5QWxsLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIGNsYXNzTWFwLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJAbWF0ZXJpYWwvbXdjLWJhc2UvYmFzZS1lbGVtZW50XCI7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4XG4vLyBAdHMtaWdub3JlXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcGxpY2l0LWRlcGVuZGVuY2llc1xuaW1wb3J0IHNvcnRGaWx0ZXJXb3JrZXIgZnJvbSBcIndvcmtlcml6ZS1sb2FkZXIhLi9zb3J0X2ZpbHRlcl93b3JrZXJcIjtcblxuaW1wb3J0IFwiLi4vaGEtaWNvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tbW9uL3NlYXJjaC9zZWFyY2gtaW5wdXRcIjtcbmltcG9ydCBcIi4uL2hhLWNoZWNrYm94XCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhQ2hlY2tib3ggfSBmcm9tIFwiLi4vaGEtY2hlY2tib3hcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IG5leHRSZW5kZXIgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvcmVuZGVyLXN0YXR1c1wiO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvZGVib3VuY2VcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvLyBmb3IgZmlyZSBldmVudFxuICBpbnRlcmZhY2UgSEFTU0RvbUV2ZW50cyB7XG4gICAgXCJzZWxlY3Rpb24tY2hhbmdlZFwiOiBTZWxlY3Rpb25DaGFuZ2VkRXZlbnQ7XG4gICAgXCJyb3ctY2xpY2tcIjogUm93Q2xpY2tlZEV2ZW50O1xuICAgIFwic29ydGluZy1jaGFuZ2VkXCI6IFNvcnRpbmdDaGFuZ2VkRXZlbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3dDbGlja2VkRXZlbnQge1xuICBpZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbkNoYW5nZWRFdmVudCB7XG4gIGlkOiBzdHJpbmc7XG4gIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRpbmdDaGFuZ2VkRXZlbnQge1xuICBjb2x1bW46IHN0cmluZztcbiAgZGlyZWN0aW9uOiBTb3J0aW5nRGlyZWN0aW9uO1xufVxuXG5leHBvcnQgdHlwZSBTb3J0aW5nRGlyZWN0aW9uID0gXCJkZXNjXCIgfCBcImFzY1wiIHwgbnVsbDtcblxuZXhwb3J0IGludGVyZmFjZSBEYXRhVGFibGVDb2x1bW5Db250YWluZXIge1xuICBba2V5OiBzdHJpbmddOiBEYXRhVGFibGVDb2x1bW5EYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFUYWJsZVNvcnRDb2x1bW5EYXRhIHtcbiAgc29ydGFibGU/OiBib29sZWFuO1xuICBmaWx0ZXJhYmxlPzogYm9vbGVhbjtcbiAgZmlsdGVyS2V5Pzogc3RyaW5nO1xuICBkaXJlY3Rpb24/OiBTb3J0aW5nRGlyZWN0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFUYWJsZUNvbHVtbkRhdGEgZXh0ZW5kcyBEYXRhVGFibGVTb3J0Q29sdW1uRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHR5cGU/OiBcIm51bWVyaWNcIiB8IFwiaWNvblwiO1xuICB0ZW1wbGF0ZT86IDxUPihkYXRhOiBhbnksIHJvdzogVCkgPT4gVGVtcGxhdGVSZXN1bHQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVRhYmxlUm93RGF0YSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1kYXRhLXRhYmxlXCIpXG5leHBvcnQgY2xhc3MgSGFEYXRhVGFibGUgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IE9iamVjdCB9KSBwdWJsaWMgY29sdW1uczogRGF0YVRhYmxlQ29sdW1uQ29udGFpbmVyID0ge307XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pIHB1YmxpYyBkYXRhOiBEYXRhVGFibGVSb3dEYXRhW10gPSBbXTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwdWJsaWMgc2VsZWN0YWJsZSA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHVibGljIGlkID0gXCJpZFwiO1xuICBwcm90ZWN0ZWQgbWRjRm91bmRhdGlvbiE6IE1EQ0RhdGFUYWJsZUZvdW5kYXRpb247XG4gIHByb3RlY3RlZCByZWFkb25seSBtZGNGb3VuZGF0aW9uQ2xhc3MgPSBNRENEYXRhVGFibGVGb3VuZGF0aW9uO1xuICBAcXVlcnkoXCIubWRjLWRhdGEtdGFibGVcIikgcHJvdGVjdGVkIG1kY1Jvb3QhOiBIVE1MRWxlbWVudDtcbiAgQHF1ZXJ5QWxsKFwiLm1kYy1kYXRhLXRhYmxlX19yb3dcIikgcHJvdGVjdGVkIHJvd0VsZW1lbnRzITogSFRNTEVsZW1lbnRbXTtcbiAgQHF1ZXJ5KFwiI2hlYWRlci1jaGVja2JveFwiKSBwcml2YXRlIF9oZWFkZXJDaGVja2JveCE6IEhhQ2hlY2tib3g7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHJpdmF0ZSBfZmlsdGVyYWJsZSA9IGZhbHNlO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHByaXZhdGUgX2hlYWRlckNoZWNrZWQgPSBmYWxzZTtcbiAgQHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSBwcml2YXRlIF9oZWFkZXJJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEFycmF5IH0pIHByaXZhdGUgX2NoZWNrZWRSb3dzOiBzdHJpbmdbXSA9IFtdO1xuICBAcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSkgcHJpdmF0ZSBfZmlsdGVyID0gXCJcIjtcbiAgQHByb3BlcnR5KHsgdHlwZTogU3RyaW5nIH0pIHByaXZhdGUgX3NvcnRDb2x1bW4/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KSBwcml2YXRlIF9zb3J0RGlyZWN0aW9uOiBTb3J0aW5nRGlyZWN0aW9uID0gbnVsbDtcbiAgQHByb3BlcnR5KHsgdHlwZTogQXJyYXkgfSkgcHJpdmF0ZSBfZmlsdGVyZWREYXRhOiBEYXRhVGFibGVSb3dEYXRhW10gPSBbXTtcbiAgcHJpdmF0ZSBfc29ydENvbHVtbnM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBEYXRhVGFibGVTb3J0Q29sdW1uRGF0YTtcbiAgfSA9IHt9O1xuICBwcml2YXRlIGN1clJlcXVlc3QgPSAwO1xuICBwcml2YXRlIF93b3JrZXI6IGFueSB8IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF9kZWJvdW5jZVNlYXJjaCA9IGRlYm91bmNlKFxuICAgIChldikgPT4ge1xuICAgICAgdGhpcy5fZmlsdGVyID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIH0sXG4gICAgMjAwLFxuICAgIGZhbHNlXG4gICk7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoKTtcbiAgICB0aGlzLl93b3JrZXIgPSBzb3J0RmlsdGVyV29ya2VyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChwcm9wZXJ0aWVzOiBQcm9wZXJ0eVZhbHVlcykge1xuICAgIHN1cGVyLnVwZGF0ZWQocHJvcGVydGllcyk7XG5cbiAgICBpZiAocHJvcGVydGllcy5oYXMoXCJjb2x1bW5zXCIpKSB7XG4gICAgICB0aGlzLl9maWx0ZXJhYmxlID0gT2JqZWN0LnZhbHVlcyh0aGlzLmNvbHVtbnMpLnNvbWUoXG4gICAgICAgIChjb2x1bW4pID0+IGNvbHVtbi5maWx0ZXJhYmxlXG4gICAgICApO1xuXG4gICAgICBmb3IgKGNvbnN0IGNvbHVtbklkIGluIHRoaXMuY29sdW1ucykge1xuICAgICAgICBpZiAodGhpcy5jb2x1bW5zW2NvbHVtbklkXS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gdGhpcy5jb2x1bW5zW2NvbHVtbklkXS5kaXJlY3Rpb24hO1xuICAgICAgICAgIHRoaXMuX3NvcnRDb2x1bW4gPSBjb2x1bW5JZDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjbG9uZWRDb2x1bW5zOiBEYXRhVGFibGVDb2x1bW5Db250YWluZXIgPSBkZWVwQ2xvbmUodGhpcy5jb2x1bW5zKTtcbiAgICAgIE9iamVjdC52YWx1ZXMoY2xvbmVkQ29sdW1ucykuZm9yRWFjaCgoY29sdW1uOiBEYXRhVGFibGVDb2x1bW5EYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBjb2x1bW4udGl0bGU7XG4gICAgICAgIGRlbGV0ZSBjb2x1bW4udHlwZTtcbiAgICAgICAgZGVsZXRlIGNvbHVtbi50ZW1wbGF0ZTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zb3J0Q29sdW1ucyA9IGNsb25lZENvbHVtbnM7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJkYXRhXCIpIHx8XG4gICAgICBwcm9wZXJ0aWVzLmhhcyhcImNvbHVtbnNcIikgfHxcbiAgICAgIHByb3BlcnRpZXMuaGFzKFwiX2ZpbHRlclwiKSB8fFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJfc29ydENvbHVtblwiKSB8fFxuICAgICAgcHJvcGVydGllcy5oYXMoXCJfc29ydERpcmVjdGlvblwiKVxuICAgICkge1xuICAgICAgdGhpcy5fZmlsdGVyRGF0YSgpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAke3RoaXMuX2ZpbHRlcmFibGVcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPHNlYXJjaC1pbnB1dFxuICAgICAgICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZVNlYXJjaENoYW5nZX1cbiAgICAgICAgICAgID48L3NlYXJjaC1pbnB1dD5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIn1cbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtZGF0YS10YWJsZVwiPlxuICAgICAgICA8dGFibGUgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fdGFibGVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvd1wiPlxuICAgICAgICAgICAgICAke3RoaXMuc2VsZWN0YWJsZVxuICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwgbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGhhLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImhlYWRlci1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3ctY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2hhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmluZGV0ZXJtaW5hdGU9JHt0aGlzLl9oZWFkZXJJbmRldGVybWluYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9oZWFkZXJDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L2hhLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgJHtPYmplY3QuZW50cmllcyh0aGlzLmNvbHVtbnMpLm1hcCgoY29sdW1uRW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBba2V5LCBjb2x1bW5dID0gY29sdW1uRW50cnk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0ga2V5ID09PSB0aGlzLl9zb3J0Q29sdW1uO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpY1wiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gXCJudW1lcmljXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvblwiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgICBjb2x1bW4udHlwZSAmJiBjb2x1bW4udHlwZSA9PT0gXCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBzb3J0YWJsZTogQm9vbGVhbihjb2x1bW4uc29ydGFibGUpLFxuICAgICAgICAgICAgICAgICAgXCJub3Qtc29ydGVkXCI6IEJvb2xlYW4oY29sdW1uLnNvcnRhYmxlICYmICFzb3J0ZWQpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwgJHtjbGFzc01hcChjbGFzc2VzKX1cIlxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9JHt0aGlzLl9oYW5kbGVIZWFkZXJDbGlja31cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1jb2x1bW4taWQ9XCIke2tleX1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAke2NvbHVtbi5zb3J0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhhLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbj0ke3NvcnRlZCAmJiB0aGlzLl9zb3J0RGlyZWN0aW9uID09PSBcImRlc2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaGFzczphcnJvdy11cFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9oYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JHtjb2x1bW4udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHkgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY29udGVudFwiPlxuICAgICAgICAgICAgJHtyZXBlYXQoXG4gICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSEsXG4gICAgICAgICAgICAgIChyb3c6IERhdGFUYWJsZVJvd0RhdGEpID0+IHJvd1t0aGlzLmlkXSxcbiAgICAgICAgICAgICAgKHJvdzogRGF0YVRhYmxlUm93RGF0YSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtcm93LWlkPVwiJHtyb3dbdGhpcy5pZF19XCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz0ke3RoaXMuX2hhbmRsZVJvd0NsaWNrfVxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fcm93XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAke3RoaXMuc2VsZWN0YWJsZVxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY2VsbCBtZGMtZGF0YS10YWJsZV9fY2VsbC0tY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aGEtY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19yb3ctY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9oYW5kbGVSb3dDaGVja2JveENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tlZD0ke3RoaXMuX2NoZWNrZWRSb3dzLmluY2x1ZGVzKHJvd1t0aGlzLmlkXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oYS1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAke09iamVjdC5lbnRyaWVzKHRoaXMuY29sdW1ucykubWFwKChjb2x1bW5FbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBba2V5LCBjb2x1bW5dID0gY29sdW1uRW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fY2VsbCAke2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpY1wiOiBCb29sZWFuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi50eXBlICYmIGNvbHVtbi50eXBlID09PSBcIm51bWVyaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kYy1kYXRhLXRhYmxlX19jZWxsLS1pY29uXCI6IEJvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLnR5cGUgJiYgY29sdW1uLnR5cGUgPT09IFwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Y29sdW1uLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gY29sdW1uLnRlbXBsYXRlKHJvd1trZXldLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogcm93W2tleV19XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQWRhcHRlcigpOiBNRENEYXRhVGFibGVBZGFwdGVyIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkQ2xhc3NBdFJvd0luZGV4OiAocm93SW5kZXg6IG51bWJlciwgY3NzQ2xhc3Nlczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcyk7XG4gICAgICB9LFxuICAgICAgZ2V0Um93Q291bnQ6ICgpID0+IHRoaXMuZGF0YS5sZW5ndGgsXG4gICAgICBnZXRSb3dFbGVtZW50czogKCkgPT4gdGhpcy5yb3dFbGVtZW50cyxcbiAgICAgIGdldFJvd0lkQXRJbmRleDogKHJvd0luZGV4OiBudW1iZXIpID0+IHRoaXMuX2dldFJvd0lkQXRJbmRleChyb3dJbmRleCksXG4gICAgICBnZXRSb3dJbmRleEJ5Q2hpbGRFbGVtZW50OiAoZWw6IEVsZW1lbnQpID0+XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwodGhpcy5yb3dFbGVtZW50cywgZWwuY2xvc2VzdChcInRyXCIpKSxcbiAgICAgIGdldFNlbGVjdGVkUm93Q291bnQ6ICgpID0+IHRoaXMuX2NoZWNrZWRSb3dzLmxlbmd0aCxcbiAgICAgIGlzQ2hlY2tib3hBdFJvd0luZGV4Q2hlY2tlZDogKHJvd0luZGV4OiBudW1iZXIpID0+XG4gICAgICAgIHRoaXMuX2NoZWNrZWRSb3dzLmluY2x1ZGVzKHRoaXMuX2dldFJvd0lkQXRJbmRleChyb3dJbmRleCkpLFxuICAgICAgaXNIZWFkZXJSb3dDaGVja2JveENoZWNrZWQ6ICgpID0+IHRoaXMuX2hlYWRlckNoZWNrZWQsXG4gICAgICBpc1Jvd3NTZWxlY3RhYmxlOiAoKSA9PiB0cnVlLFxuICAgICAgbm90aWZ5Um93U2VsZWN0aW9uQ2hhbmdlZDogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgbm90aWZ5U2VsZWN0ZWRBbGw6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIG5vdGlmeVVuc2VsZWN0ZWRBbGw6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIHJlZ2lzdGVySGVhZGVyUm93Q2hlY2tib3g6ICgpID0+IHVuZGVmaW5lZCxcbiAgICAgIHJlZ2lzdGVyUm93Q2hlY2tib3hlczogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgcmVtb3ZlQ2xhc3NBdFJvd0luZGV4OiAocm93SW5kZXg6IG51bWJlciwgY3NzQ2xhc3Nlczogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucm93RWxlbWVudHNbcm93SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3Nlcyk7XG4gICAgICB9LFxuICAgICAgc2V0QXR0cmlidXRlQXRSb3dJbmRleDogKFxuICAgICAgICByb3dJbmRleDogbnVtYmVyLFxuICAgICAgICBhdHRyOiBzdHJpbmcsXG4gICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICkgPT4ge1xuICAgICAgICB0aGlzLnJvd0VsZW1lbnRzW3Jvd0luZGV4XS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZDogKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgdGhpcy5faGVhZGVyQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICB9LFxuICAgICAgc2V0SGVhZGVyUm93Q2hlY2tib3hJbmRldGVybWluYXRlOiAoaW5kZXRlcm1pbmF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLl9oZWFkZXJJbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICAgIH0sXG4gICAgICBzZXRSb3dDaGVja2JveENoZWNrZWRBdEluZGV4OiAocm93SW5kZXg6IG51bWJlciwgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICB0aGlzLl9zZXRSb3dDaGVja2VkKHRoaXMuX2dldFJvd0lkQXRJbmRleChyb3dJbmRleCksIGNoZWNrZWQpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVyRGF0YSgpIHtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmN1clJlcXVlc3QrKztcbiAgICBjb25zdCBjdXJSZXF1ZXN0ID0gdGhpcy5jdXJSZXF1ZXN0O1xuXG4gICAgY29uc3QgZmlsdGVyUHJvbSA9IHRoaXMuX3dvcmtlci5maWx0ZXJTb3J0RGF0YShcbiAgICAgIHRoaXMuZGF0YSxcbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5zLFxuICAgICAgdGhpcy5fZmlsdGVyLFxuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbixcbiAgICAgIHRoaXMuX3NvcnRDb2x1bW5cbiAgICApO1xuXG4gICAgY29uc3QgW2RhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZpbHRlclByb20sIG5leHRSZW5kZXJdKTtcblxuICAgIGNvbnN0IGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBlbGFwc2VkID0gY3VyVGltZSAtIHN0YXJ0VGltZTtcblxuICAgIGlmIChlbGFwc2VkIDwgMTAwKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAgLSBlbGFwc2VkKSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1clJlcXVlc3QgIT09IGN1clJlcXVlc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZmlsdGVyZWREYXRhID0gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFJvd0lkQXRJbmRleChyb3dJbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb3dFbGVtZW50c1tyb3dJbmRleF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlSGVhZGVyQ2xpY2soZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgY29sdW1uSWQgPSAoZXYudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxuICAgICAgLmNsb3Nlc3QoXCJ0aFwiKSFcbiAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtbi1pZFwiKSE7XG4gICAgaWYgKCF0aGlzLmNvbHVtbnNbY29sdW1uSWRdLnNvcnRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fc29ydERpcmVjdGlvbiB8fCB0aGlzLl9zb3J0Q29sdW1uICE9PSBjb2x1bW5JZCkge1xuICAgICAgdGhpcy5fc29ydERpcmVjdGlvbiA9IFwiYXNjXCI7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zb3J0RGlyZWN0aW9uID09PSBcImFzY1wiKSB7XG4gICAgICB0aGlzLl9zb3J0RGlyZWN0aW9uID0gXCJkZXNjXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NvcnREaXJlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuX3NvcnRDb2x1bW4gPSB0aGlzLl9zb3J0RGlyZWN0aW9uID09PSBudWxsID8gdW5kZWZpbmVkIDogY29sdW1uSWQ7XG5cbiAgICBmaXJlRXZlbnQodGhpcywgXCJzb3J0aW5nLWNoYW5nZWRcIiwge1xuICAgICAgY29sdW1uOiBjb2x1bW5JZCxcbiAgICAgIGRpcmVjdGlvbjogdGhpcy5fc29ydERpcmVjdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlKCkge1xuICAgIHRoaXMuX2hlYWRlckNoZWNrZWQgPSB0aGlzLl9oZWFkZXJDaGVja2JveC5jaGVja2VkO1xuICAgIHRoaXMuX2hlYWRlckluZGV0ZXJtaW5hdGUgPSB0aGlzLl9oZWFkZXJDaGVja2JveC5pbmRldGVybWluYXRlO1xuICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2UoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBldi50YXJnZXQgYXMgSGFDaGVja2JveDtcbiAgICBjb25zdCByb3dJZCA9IGNoZWNrYm94LmNsb3Nlc3QoXCJ0clwiKSEuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIik7XG5cbiAgICB0aGlzLl9zZXRSb3dDaGVja2VkKHJvd0lkISwgY2hlY2tib3guY2hlY2tlZCk7XG4gICAgdGhpcy5tZGNGb3VuZGF0aW9uLmhhbmRsZVJvd0NoZWNrYm94Q2hhbmdlKGV2KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVJvd0NsaWNrKGV2OiBFdmVudCkge1xuICAgIGNvbnN0IHJvd0lkID0gKGV2LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIC5jbG9zZXN0KFwidHJcIikhXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3ctaWRcIikhO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInJvdy1jbGlja1wiLCB7IGlkOiByb3dJZCB9LCB7IGJ1YmJsZXM6IGZhbHNlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0Um93Q2hlY2tlZChyb3dJZDogc3RyaW5nLCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgaWYgKGNoZWNrZWQgJiYgIXRoaXMuX2NoZWNrZWRSb3dzLmluY2x1ZGVzKHJvd0lkKSkge1xuICAgICAgdGhpcy5fY2hlY2tlZFJvd3MgPSBbLi4udGhpcy5fY2hlY2tlZFJvd3MsIHJvd0lkXTtcbiAgICB9IGVsc2UgaWYgKCFjaGVja2VkKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2NoZWNrZWRSb3dzLmluZGV4T2Yocm93SWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9jaGVja2VkUm93cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBmaXJlRXZlbnQodGhpcywgXCJzZWxlY3Rpb24tY2hhbmdlZFwiLCB7XG4gICAgICBpZDogcm93SWQsXG4gICAgICBzZWxlY3RlZDogY2hlY2tlZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNlYXJjaENoYW5nZShldjogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9kZWJvdW5jZVNlYXJjaChldik7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAvKiBkZWZhdWx0IG1kYyBzdHlsZXMsIGNvbG9ycyBjaGFuZ2VkLCB3aXRob3V0IGNoZWNrYm94IHN0eWxlcyAqL1xuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NvbnRlbnQge1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxNzg1NzE0MjllbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjEyKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93LS1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktY29sb3IpLCAwLjA0KTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3cge1xuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKHZhcigtLXJnYi1wcmltYXJ5LXRleHQtY29sb3IpLCAwLjEyKTtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19yb3cge1xuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX3Jvdzpub3QoLm1kYy1kYXRhLXRhYmxlX19yb3ctLXNlbGVjdGVkKTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuMDQpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3cge1xuICAgICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fcm93IHtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1jaGVja2JveCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tY2hlY2tib3gge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1jaGVja2JveCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWNoZWNrYm94W2Rpcj1cInJ0bFwiXSxcbiAgICAgIFtkaXI9XCJydGxcIl0gLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1jaGVja2JveCxcbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbC0tY2hlY2tib3hbZGlyPVwicnRsXCJdIHtcbiAgICAgICAgLyogQG5vZmxpcCAqL1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX190YWJsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICB9XG5cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9fY2VsbCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE3ODU3MTQyOWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWMge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIFtkaXI9XCJydGxcIl0gLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljW2Rpcj1cInJ0bFwiXSB7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19jZWxsLS1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA3MTQyODU3MWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgICAgW2Rpcj1cInJ0bFwiXSAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLFxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbFtkaXI9XCJydGxcIl0ge1xuICAgICAgICAvKiBAbm9mbGlwICovXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgICBbZGlyPVwicnRsXCJdIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLW51bWVyaWMsXG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1udW1lcmljW2Rpcj1cInJ0bFwiXSB7XG4gICAgICAgIC8qIEBub2ZsaXAgKi9cbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0taWNvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLyogY3VzdG9tIGZyb20gaGVyZSAqL1xuXG4gICAgICAubWRjLWRhdGEtdGFibGUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5zb3J0YWJsZSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwubm90LXNvcnRlZDpub3QoLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYyk6bm90KC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWljb24pXG4gICAgICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IC0yNHB4O1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5ub3Qtc29ydGVkID4gKiB7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4ycyBlYXNlIDBzO1xuICAgICAgfVxuICAgICAgLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC5ub3Qtc29ydGVkIGhhLWljb24ge1xuICAgICAgICBsZWZ0OiAtMzZweDtcbiAgICAgIH1cbiAgICAgIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwubm90LXNvcnRlZDpub3QoLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYyk6bm90KC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtLWljb24pOmhvdmVyXG4gICAgICAgIHNwYW4ge1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICB9XG4gICAgICAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsOmhvdmVyLm5vdC1zb3J0ZWQgaGEtaWNvbiB7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1kYXRhLXRhYmxlXCI6IEhhRGF0YVRhYmxlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb25zdHJ1Y3RvciwgY3VzdG9tRWxlbWVudCwgQ1NTUmVzdWx0LCBjc3MgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtY2hlY2tib3hcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1jaGVja2JveFwiO1xuaW1wb3J0IHsgc3R5bGUgfSBmcm9tIFwiQG1hdGVyaWFsL213Yy1jaGVja2JveC9td2MtY2hlY2tib3gtY3NzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IE13Y0NoZWNrYm94ID0gY3VzdG9tRWxlbWVudHMuZ2V0KFwibXdjLWNoZWNrYm94XCIpIGFzIENvbnN0cnVjdG9yPENoZWNrYm94PjtcblxuQGN1c3RvbUVsZW1lbnQoXCJoYS1jaGVja2JveFwiKVxuZXhwb3J0IGNsYXNzIEhhQ2hlY2tib3ggZXh0ZW5kcyBNd2NDaGVja2JveCB7XG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKCk7XG4gICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbWRjLXRoZW1lLXNlY29uZGFyeVwiLCBcInZhcigtLXByaW1hcnktY29sb3IpXCIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdFtdIHtcbiAgICByZXR1cm4gW1xuICAgICAgc3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpXG4gICAgICAgICAgfiAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tcmdiLXByaW1hcnktdGV4dC1jb2xvciksIDAuNTQpO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNoZWNrYm94XCI6IEhhQ2hlY2tib3g7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTs7QUE2REE7QUExREE7QUFDQTtBQXVCQTtBQUlBO0FBRUE7OztBQUNBOzs7O0FBQ0E7QUFFQTs7O0FBQ0E7Ozs7QUFDQTtBQUVBOzs7QUFDQTs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBY0E7OztBQUFBO0FBM0RBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTtBQTZEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUVBO0FBS0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQWlEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7O0FBaWVBO0FBNWRBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBT0E7QUFzQkE7QUFrQ0E7QUFnREE7QUE3R0E7QUFXQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFQQTtBQUlBO0FBREE7QUFDQTtBQU9BO0FBMEJBO0FBbUJBO0FBL0JBO0FBY0E7QUFDQTtBQVNBO0FBSUE7QUFWQTtBQUdBO0FBR0E7QUFHQTtBQUNBO0FBR0E7QUFRQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFBQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFpTEE7OztBQUFBO0FBMWZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQWpCQTtBQURBO0FBQ0E7QUE0ZkE7QUFBQTtBQTVmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7O0FBaUJBO0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7OztBQUFBO0FBaEJBO0FBREE7QUFDQTtBQWlCQTtBQUFBO0FBakJBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==