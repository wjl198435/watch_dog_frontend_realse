(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["panel-custom"],{

/***/ "./src/common/dom/load_resource.ts":
/*!*****************************************!*\
  !*** ./src/common/dom/load_resource.ts ***!
  \*****************************************/
/*! exports provided: loadCSS, loadJS, loadImg, loadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCSS", function() { return loadCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJS", function() { return loadJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImg", function() { return loadImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModule", function() { return loadModule; });
// Load a resource and get a promise when loading done.
// From: https://davidwalsh.name/javascript-loader
var _load = function (tag, url, type) {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise(function (resolve, reject) {
        var element = document.createElement(tag);
        var attr = "src";
        var parent = "body";
        // Important success and error for the promise
        element.onload = function () { return resolve(url); };
        element.onerror = function () { return reject(url); };
        // Need to set different attributes depending on tag type
        switch (tag) {
            case "script":
                element.async = true;
                if (type) {
                    element.type = type;
                }
                break;
            case "link":
                element.type = "text/css";
                element.rel = "stylesheet";
                attr = "href";
                parent = "head";
        }
        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
    });
};
var loadCSS = function (url) { return _load("link", url); };
var loadJS = function (url) { return _load("script", url); };
var loadImg = function (url) { return _load("img", url); };
var loadModule = function (url) { return _load("script", url, "module"); };


/***/ }),

/***/ "./src/panels/custom/ha-panel-custom.ts":
/*!**********************************************!*\
  !*** ./src/panels/custom/ha-panel-custom.ts ***!
  \**********************************************/
/*! exports provided: HaPanelCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPanelCustom", function() { return HaPanelCustom; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/custom-panel/load-custom-panel */ "./src/util/custom-panel/load-custom-panel.ts");
/* harmony import */ var _util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/custom-panel/create-custom-panel-element */ "./src/util/custom-panel/create-custom-panel-element.ts");
/* harmony import */ var _util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/custom-panel/set-custom-panel-properties */ "./src/util/custom-panel/set-custom-panel-properties.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/navigate */ "./src/common/navigate.ts");






var HaPanelCustom = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HaPanelCustom, _super);
    function HaPanelCustom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Since navigate fires events on `window`, we need to expose this as a function
        // to allow custom panels to forward their location changes to the main window
        // instead of their iframe window.
        _this.navigate = function (path, replace) {
            return Object(_common_navigate__WEBPACK_IMPORTED_MODULE_5__["navigate"])(_this, path, replace);
        };
        return _this;
    }
    HaPanelCustom.prototype.registerIframe = function (initialize, setProperties) {
        initialize(this.panel, {
            hass: this.hass,
            narrow: this.narrow,
            route: this.route,
        });
        this._setProperties = setProperties;
    };
    HaPanelCustom.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        this._cleanupPanel();
    };
    HaPanelCustom.prototype.updated = function (changedProps) {
        if (changedProps.has("panel")) {
            // Clean up old things if we had a panel
            if (changedProps.get("panel")) {
                this._cleanupPanel();
            }
            this._createPanel(this.panel);
            return;
        }
        if (!this._setProperties) {
            return;
        }
        var props = {};
        // @ts-ignore
        for (var _i = 0, _a = changedProps.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            props[key] = this[key];
        }
        this._setProperties(props);
    };
    HaPanelCustom.prototype._cleanupPanel = function () {
        delete window.customPanel;
        this._setProperties = undefined;
        while (this.lastChild) {
            this.removeChild(this.lastChild);
        }
    };
    HaPanelCustom.prototype._createPanel = function (panel) {
        var _this = this;
        var config = panel.config._panel_custom;
        var tempA = document.createElement("a");
        tempA.href = config.html_url || config.js_url || config.module_url || "";
        if (!config.trust_external &&
            !["localhost", "127.0.0.1", location.hostname].includes(tempA.hostname)) {
            if (!confirm("Do you trust the external panel \"" + config.name + "\" at \"" + tempA.href + "\"?\n\nIt will have access to all data in \u7267\u517B\u72AC.\n\n(Check docs for the panel_custom component to hide this message)")) {
                return;
            }
        }
        if (!config.embed_iframe) {
            Object(_util_custom_panel_load_custom_panel__WEBPACK_IMPORTED_MODULE_2__["loadCustomPanel"])(config).then(function () {
                var element = Object(_util_custom_panel_create_custom_panel_element__WEBPACK_IMPORTED_MODULE_3__["createCustomPanelElement"])(config);
                _this._setProperties = function (props) {
                    return Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_4__["setCustomPanelProperties"])(element, props);
                };
                Object(_util_custom_panel_set_custom_panel_properties__WEBPACK_IMPORTED_MODULE_4__["setCustomPanelProperties"])(element, {
                    panel: panel,
                    hass: _this.hass,
                    narrow: _this.narrow,
                    route: _this.route,
                });
                _this.appendChild(element);
            }, function () {
                alert("Unable to load custom panel from " + tempA.href);
            });
            return;
        }
        window.customPanel = this;
        this.innerHTML = "\n    <style>\n      iframe {\n        border: 0;\n        width: 100%;\n        height: 100%;\n        display: block;\n      }\n    </style>\n    <iframe></iframe>\n    ".trim();
        var iframeDoc = this.querySelector("iframe").contentWindow.document;
        iframeDoc.open();
        iframeDoc.write("<!doctype html><script src='" + window.customPanelJS + "'></script>");
        iframeDoc.close();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelCustom.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelCustom.prototype, "narrow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelCustom.prototype, "route", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], HaPanelCustom.prototype, "panel", void 0);
    return HaPanelCustom;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"]));

customElements.define("ha-panel-custom", HaPanelCustom);


/***/ }),

/***/ "./src/util/custom-panel/create-custom-panel-element.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/create-custom-panel-element.ts ***!
  \**************************************************************/
/*! exports provided: createCustomPanelElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomPanelElement", function() { return createCustomPanelElement; });
var createCustomPanelElement = function (panelConfig) {
    // Legacy support. Custom panels used to have to define element ha-panel-{name}
    var tagName = "html_url" in panelConfig
        ? "ha-panel-" + panelConfig.name
        : panelConfig.name;
    return document.createElement(tagName);
};


/***/ }),

/***/ "./src/util/custom-panel/load-custom-panel.ts":
/*!****************************************************!*\
  !*** ./src/util/custom-panel/load-custom-panel.ts ***!
  \****************************************************/
/*! exports provided: loadCustomPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCustomPanel", function() { return loadCustomPanel; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

// Make sure we only import every JS-based panel once (HTML import has this built-in)
var JS_CACHE = {};
var loadCustomPanel = function (panelConfig) {
    if (panelConfig.html_url) {
        var toLoad = [
            __webpack_require__.e(/*! import() | import-href-polyfill */ "import-href-polyfill").then(__webpack_require__.bind(null, /*! ../../resources/html-import/import-href */ "./src/resources/html-import/import-href.js")),
        ];
        if (!panelConfig.embed_iframe) {
            toLoad.push(Promise.all(/*! import() | legacy-support */[__webpack_require__.e("vendors~legacy-support"), __webpack_require__.e("legacy-support")]).then(__webpack_require__.bind(null, /*! ../legacy-support */ "./src/util/legacy-support.js")));
        }
        return Promise.all(toLoad).then(function (_a) {
            var importHrefPromise = _a[0].importHrefPromise;
            return importHrefPromise(panelConfig.html_url);
        });
    }
    if (panelConfig.js_url) {
        if (!(panelConfig.js_url in JS_CACHE)) {
            JS_CACHE[panelConfig.js_url] = Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])(panelConfig.js_url);
        }
        return JS_CACHE[panelConfig.js_url];
    }
    if (panelConfig.module_url) {
        return Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadModule"])(panelConfig.module_url);
    }
    return Promise.reject("No valid url found in panel config.");
};


/***/ }),

/***/ "./src/util/custom-panel/set-custom-panel-properties.ts":
/*!**************************************************************!*\
  !*** ./src/util/custom-panel/set-custom-panel-properties.ts ***!
  \**************************************************************/
/*! exports provided: setCustomPanelProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCustomPanelProperties", function() { return setCustomPanelProperties; });
var setCustomPanelProperties = function (root, properties) {
    if ("setProperties" in root) {
        root.setProperties(properties);
    }
    else {
        Object.keys(properties).forEach(function (key) {
            root[key] = properties[key];
        });
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtY3VzdG9tLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vbG9hZF9yZXNvdXJjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2N1c3RvbS9oYS1wYW5lbC1jdXN0b20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY3VzdG9tLXBhbmVsL2NyZWF0ZS1jdXN0b20tcGFuZWwtZWxlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jdXN0b20tcGFuZWwvbG9hZC1jdXN0b20tcGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvY3VzdG9tLXBhbmVsL3NldC1jdXN0b20tcGFuZWwtcHJvcGVydGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb2FkIGEgcmVzb3VyY2UgYW5kIGdldCBhIHByb21pc2Ugd2hlbiBsb2FkaW5nIGRvbmUuXG4vLyBGcm9tOiBodHRwczovL2Rhdmlkd2Fsc2gubmFtZS9qYXZhc2NyaXB0LWxvYWRlclxuXG5jb25zdCBfbG9hZCA9IChcbiAgdGFnOiBcImxpbmtcIiB8IFwic2NyaXB0XCIgfCBcImltZ1wiLFxuICB1cmw6IHN0cmluZyxcbiAgdHlwZT86IFwibW9kdWxlXCJcbikgPT4ge1xuICAvLyBUaGlzIHByb21pc2Ugd2lsbCBiZSB1c2VkIGJ5IFByb21pc2UuYWxsIHRvIGRldGVybWluZSBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGxldCBhdHRyID0gXCJzcmNcIjtcbiAgICBsZXQgcGFyZW50ID0gXCJib2R5XCI7XG5cbiAgICAvLyBJbXBvcnRhbnQgc3VjY2VzcyBhbmQgZXJyb3IgZm9yIHRoZSBwcm9taXNlXG4gICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHVybCk7XG4gICAgZWxlbWVudC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHVybCk7XG5cbiAgICAvLyBOZWVkIHRvIHNldCBkaWZmZXJlbnQgYXR0cmlidXRlcyBkZXBlbmRpbmcgb24gdGFnIHR5cGVcbiAgICBzd2l0Y2ggKHRhZykge1xuICAgICAgY2FzZSBcInNjcmlwdFwiOlxuICAgICAgICAoZWxlbWVudCBhcyBIVE1MU2NyaXB0RWxlbWVudCkuYXN5bmMgPSB0cnVlO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgIChlbGVtZW50IGFzIEhUTUxTY3JpcHRFbGVtZW50KS50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsaW5rXCI6XG4gICAgICAgIChlbGVtZW50IGFzIEhUTUxMaW5rRWxlbWVudCkudHlwZSA9IFwidGV4dC9jc3NcIjtcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTExpbmtFbGVtZW50KS5yZWwgPSBcInN0eWxlc2hlZXRcIjtcbiAgICAgICAgYXR0ciA9IFwiaHJlZlwiO1xuICAgICAgICBwYXJlbnQgPSBcImhlYWRcIjtcbiAgICB9XG5cbiAgICAvLyBJbmplY3QgaW50byBkb2N1bWVudCB0byBraWNrIG9mZiBsb2FkaW5nXG4gICAgZWxlbWVudFthdHRyXSA9IHVybDtcbiAgICBkb2N1bWVudFtwYXJlbnRdLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ1NTID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcImxpbmtcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkSlMgPSAodXJsOiBzdHJpbmcpID0+IF9sb2FkKFwic2NyaXB0XCIsIHVybCk7XG5leHBvcnQgY29uc3QgbG9hZEltZyA9ICh1cmw6IHN0cmluZykgPT4gX2xvYWQoXCJpbWdcIiwgdXJsKTtcbmV4cG9ydCBjb25zdCBsb2FkTW9kdWxlID0gKHVybDogc3RyaW5nKSA9PiBfbG9hZChcInNjcmlwdFwiLCB1cmwsIFwibW9kdWxlXCIpO1xuIiwiaW1wb3J0IHsgcHJvcGVydHksIFByb3BlcnR5VmFsdWVzLCBVcGRhdGluZ0VsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvYWRDdXN0b21QYW5lbCB9IGZyb20gXCIuLi8uLi91dGlsL2N1c3RvbS1wYW5lbC9sb2FkLWN1c3RvbS1wYW5lbFwiO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL2NyZWF0ZS1jdXN0b20tcGFuZWwtZWxlbWVudFwiO1xuaW1wb3J0IHsgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzIH0gZnJvbSBcIi4uLy4uL3V0aWwvY3VzdG9tLXBhbmVsL3NldC1jdXN0b20tcGFuZWwtcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgUm91dGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEN1c3RvbVBhbmVsSW5mbyB9IGZyb20gXCIuLi8uLi9kYXRhL3BhbmVsX2N1c3RvbVwiO1xuaW1wb3J0IHsgbmF2aWdhdGUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL25hdmlnYXRlXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgY3VzdG9tUGFuZWw6IEhhUGFuZWxDdXN0b20gfCB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEhhUGFuZWxDdXN0b20gZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBuYXJyb3chOiBib29sZWFuO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcm91dGUhOiBSb3V0ZTtcbiAgQHByb3BlcnR5KCkgcHVibGljIHBhbmVsITogQ3VzdG9tUGFuZWxJbmZvO1xuICBwcml2YXRlIF9zZXRQcm9wZXJ0aWVzPzogKHByb3BzOiB7fSkgPT4gdm9pZCB8IHVuZGVmaW5lZDtcblxuICAvLyBTaW5jZSBuYXZpZ2F0ZSBmaXJlcyBldmVudHMgb24gYHdpbmRvd2AsIHdlIG5lZWQgdG8gZXhwb3NlIHRoaXMgYXMgYSBmdW5jdGlvblxuICAvLyB0byBhbGxvdyBjdXN0b20gcGFuZWxzIHRvIGZvcndhcmQgdGhlaXIgbG9jYXRpb24gY2hhbmdlcyB0byB0aGUgbWFpbiB3aW5kb3dcbiAgLy8gaW5zdGVhZCBvZiB0aGVpciBpZnJhbWUgd2luZG93LlxuICBwdWJsaWMgbmF2aWdhdGUgPSAocGF0aDogc3RyaW5nLCByZXBsYWNlPzogYm9vbGVhbikgPT5cbiAgICBuYXZpZ2F0ZSh0aGlzLCBwYXRoLCByZXBsYWNlKTtcblxuICBwdWJsaWMgcmVnaXN0ZXJJZnJhbWUoaW5pdGlhbGl6ZSwgc2V0UHJvcGVydGllcykge1xuICAgIGluaXRpYWxpemUodGhpcy5wYW5lbCwge1xuICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgIH0pO1xuICAgIHRoaXMuX3NldFByb3BlcnRpZXMgPSBzZXRQcm9wZXJ0aWVzO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fY2xlYW51cFBhbmVsKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgaWYgKGNoYW5nZWRQcm9wcy5oYXMoXCJwYW5lbFwiKSkge1xuICAgICAgLy8gQ2xlYW4gdXAgb2xkIHRoaW5ncyBpZiB3ZSBoYWQgYSBwYW5lbFxuICAgICAgaWYgKGNoYW5nZWRQcm9wcy5nZXQoXCJwYW5lbFwiKSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwUGFuZWwoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NyZWF0ZVBhbmVsKHRoaXMucGFuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX3NldFByb3BlcnRpZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSB7fTtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgZm9yIChjb25zdCBrZXkgb2YgY2hhbmdlZFByb3BzLmtleXMoKSkge1xuICAgICAgcHJvcHNba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG4gICAgdGhpcy5fc2V0UHJvcGVydGllcyhwcm9wcyk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhbnVwUGFuZWwoKSB7XG4gICAgZGVsZXRlIHdpbmRvdy5jdXN0b21QYW5lbDtcbiAgICB0aGlzLl9zZXRQcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgIHdoaWxlICh0aGlzLmxhc3RDaGlsZCkge1xuICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlUGFuZWwocGFuZWw6IEN1c3RvbVBhbmVsSW5mbykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHBhbmVsLmNvbmZpZyEuX3BhbmVsX2N1c3RvbTtcblxuICAgIGNvbnN0IHRlbXBBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdGVtcEEuaHJlZiA9IGNvbmZpZy5odG1sX3VybCB8fCBjb25maWcuanNfdXJsIHx8IGNvbmZpZy5tb2R1bGVfdXJsIHx8IFwiXCI7XG5cbiAgICBpZiAoXG4gICAgICAhY29uZmlnLnRydXN0X2V4dGVybmFsICYmXG4gICAgICAhW1wibG9jYWxob3N0XCIsIFwiMTI3LjAuMC4xXCIsIGxvY2F0aW9uLmhvc3RuYW1lXS5pbmNsdWRlcyh0ZW1wQS5ob3N0bmFtZSlcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oYERvIHlvdSB0cnVzdCB0aGUgZXh0ZXJuYWwgcGFuZWwgXCIke2NvbmZpZy5uYW1lfVwiIGF0IFwiJHtcbiAgICAgICAgICB0ZW1wQS5ocmVmXG4gICAgICAgIH1cIj9cblxuSXQgd2lsbCBoYXZlIGFjY2VzcyB0byBhbGwgZGF0YSBpbiDniaflhbvniqwuXG5cbihDaGVjayBkb2NzIGZvciB0aGUgcGFuZWxfY3VzdG9tIGNvbXBvbmVudCB0byBoaWRlIHRoaXMgbWVzc2FnZSlgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbmZpZy5lbWJlZF9pZnJhbWUpIHtcbiAgICAgIGxvYWRDdXN0b21QYW5lbChjb25maWcpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlQ3VzdG9tUGFuZWxFbGVtZW50KGNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5fc2V0UHJvcGVydGllcyA9IChwcm9wcykgPT5cbiAgICAgICAgICAgIHNldEN1c3RvbVBhbmVsUHJvcGVydGllcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgICAgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzKGVsZW1lbnQsIHtcbiAgICAgICAgICAgIHBhbmVsLFxuICAgICAgICAgICAgaGFzczogdGhpcy5oYXNzLFxuICAgICAgICAgICAgbmFycm93OiB0aGlzLm5hcnJvdyxcbiAgICAgICAgICAgIHJvdXRlOiB0aGlzLnJvdXRlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChgVW5hYmxlIHRvIGxvYWQgY3VzdG9tIHBhbmVsIGZyb20gJHt0ZW1wQS5ocmVmfWApO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdpbmRvdy5jdXN0b21QYW5lbCA9IHRoaXM7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgaWZyYW1lIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxpZnJhbWU+PC9pZnJhbWU+XG4gICAgYC50cmltKCk7XG4gICAgY29uc3QgaWZyYW1lRG9jID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpIS5jb250ZW50V2luZG93IS5kb2N1bWVudDtcbiAgICBpZnJhbWVEb2Mub3BlbigpO1xuICAgIGlmcmFtZURvYy53cml0ZShcbiAgICAgIGA8IWRvY3R5cGUgaHRtbD48c2NyaXB0IHNyYz0nJHt3aW5kb3cuY3VzdG9tUGFuZWxKU30nPjwvc2NyaXB0PmBcbiAgICApO1xuICAgIGlmcmFtZURvYy5jbG9zZSgpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhbmVsLWN1c3RvbVwiLCBIYVBhbmVsQ3VzdG9tKTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVDdXN0b21QYW5lbEVsZW1lbnQgPSAocGFuZWxDb25maWcpID0+IHtcbiAgLy8gTGVnYWN5IHN1cHBvcnQuIEN1c3RvbSBwYW5lbHMgdXNlZCB0byBoYXZlIHRvIGRlZmluZSBlbGVtZW50IGhhLXBhbmVsLXtuYW1lfVxuICBjb25zdCB0YWdOYW1lID1cbiAgICBcImh0bWxfdXJsXCIgaW4gcGFuZWxDb25maWdcbiAgICAgID8gYGhhLXBhbmVsLSR7cGFuZWxDb25maWcubmFtZX1gXG4gICAgICA6IHBhbmVsQ29uZmlnLm5hbWU7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xufTtcbiIsImltcG9ydCB7IGxvYWRKUywgbG9hZE1vZHVsZSB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2xvYWRfcmVzb3VyY2VcIjtcblxuLy8gTWFrZSBzdXJlIHdlIG9ubHkgaW1wb3J0IGV2ZXJ5IEpTLWJhc2VkIHBhbmVsIG9uY2UgKEhUTUwgaW1wb3J0IGhhcyB0aGlzIGJ1aWx0LWluKVxuY29uc3QgSlNfQ0FDSEUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGxvYWRDdXN0b21QYW5lbCA9IChwYW5lbENvbmZpZyk6IFByb21pc2U8dW5rbm93bj4gPT4ge1xuICBpZiAocGFuZWxDb25maWcuaHRtbF91cmwpIHtcbiAgICBjb25zdCB0b0xvYWQgPSBbXG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJpbXBvcnQtaHJlZi1wb2x5ZmlsbFwiICovIFwiLi4vLi4vcmVzb3VyY2VzL2h0bWwtaW1wb3J0L2ltcG9ydC1ocmVmXCIpLFxuICAgIF07XG5cbiAgICBpZiAoIXBhbmVsQ29uZmlnLmVtYmVkX2lmcmFtZSkge1xuICAgICAgdG9Mb2FkLnB1c2goXG4gICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxlZ2FjeS1zdXBwb3J0XCIgKi8gXCIuLi9sZWdhY3ktc3VwcG9ydFwiKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodG9Mb2FkKS50aGVuKChbeyBpbXBvcnRIcmVmUHJvbWlzZSB9XSkgPT5cbiAgICAgIGltcG9ydEhyZWZQcm9taXNlKHBhbmVsQ29uZmlnLmh0bWxfdXJsKVxuICAgICk7XG4gIH1cbiAgaWYgKHBhbmVsQ29uZmlnLmpzX3VybCkge1xuICAgIGlmICghKHBhbmVsQ29uZmlnLmpzX3VybCBpbiBKU19DQUNIRSkpIHtcbiAgICAgIEpTX0NBQ0hFW3BhbmVsQ29uZmlnLmpzX3VybF0gPSBsb2FkSlMocGFuZWxDb25maWcuanNfdXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIEpTX0NBQ0hFW3BhbmVsQ29uZmlnLmpzX3VybF07XG4gIH1cbiAgaWYgKHBhbmVsQ29uZmlnLm1vZHVsZV91cmwpIHtcbiAgICByZXR1cm4gbG9hZE1vZHVsZShwYW5lbENvbmZpZy5tb2R1bGVfdXJsKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJObyB2YWxpZCB1cmwgZm91bmQgaW4gcGFuZWwgY29uZmlnLlwiKTtcbn07XG4iLCJleHBvcnQgY29uc3Qgc2V0Q3VzdG9tUGFuZWxQcm9wZXJ0aWVzID0gKHJvb3QsIHByb3BlcnRpZXMpID0+IHtcbiAgaWYgKFwic2V0UHJvcGVydGllc1wiIGluIHJvb3QpIHtcbiAgICByb290LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByb290W2tleV0gPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgfSk7XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQTJHQTtBQXpHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFwSEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBa0hBO0FBQUE7QUF0SEE7QUF3SEE7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==