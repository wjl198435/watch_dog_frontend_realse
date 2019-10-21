(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-integrations"],{

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function _iconChanged(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function _srcChanged(src) {
    this._updateIcon();
  },
  _usesIconset: function _usesIconset() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function _updateIcon() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});

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

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
var debounce = function (func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    // @ts-ignore
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // tslint:disable:no-this-assignment
        // @ts-ignore
        var context = this;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
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

/***/ "./src/data/config_flow.ts":
/*!*********************************!*\
  !*** ./src/data/config_flow.ts ***!
  \*********************************/
/*! exports provided: createConfigFlow, fetchConfigFlow, handleConfigFlowStep, deleteConfigFlow, getConfigFlowHandlers, getConfigFlowInProgressCollection, subscribeConfigFlowInProgress, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowInProgressCollection", function() { return getConfigFlowInProgressCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");



var createConfigFlow = function (hass, handler) {
    return hass.callApi("POST", "config/config_entries/flow", {
        handler: handler,
    });
};
var fetchConfigFlow = function (hass, flowId) {
    return hass.callApi("GET", "config/config_entries/flow/" + flowId);
};
var handleConfigFlowStep = function (hass, flowId, data) {
    return hass.callApi("POST", "config/config_entries/flow/" + flowId, data);
};
var deleteConfigFlow = function (hass, flowId) {
    return hass.callApi("DELETE", "config/config_entries/flow/" + flowId);
};
var getConfigFlowHandlers = function (hass) {
    return hass.callApi("GET", "config/config_entries/flow_handlers");
};
var fetchConfigFlowInProgress = function (conn) {
    return conn.sendMessagePromise({
        type: "config_entries/flow/progress",
    });
};
var subscribeConfigFlowInProgressUpdates = function (conn, store) {
    return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
        return fetchConfigFlowInProgress(conn).then(function (flows) {
            return store.setState(flows, true);
        });
    }, 500, true), "config_entry_discovered");
};
var getConfigFlowInProgressCollection = function (conn) {
    return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_2__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
};
var subscribeConfigFlowInProgress = function (hass, onChange) { return getConfigFlowInProgressCollection(hass.connection).subscribe(onChange); };
var localizeConfigFlowTitle = function (localize, flow) {
    var placeholders = flow.context.title_placeholders || {};
    var placeholderKeys = Object.keys(placeholders);
    if (placeholderKeys.length === 0) {
        return localize("component." + flow.handler + ".config.title");
    }
    var args = [];
    placeholderKeys.forEach(function (key) {
        args.push(key);
        args.push(placeholders[key]);
    });
    return localize.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(["component." + flow.handler + ".config.flow_title"], args));
};


/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
/*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigFlowDialog", function() { return loadConfigFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigFlowDialog", function() { return showConfigFlowDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");






var loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__["loadDataEntryFlowDialog"];
var showConfigFlowDialog = function (element, dialogParams) {
    return Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_4__["showFlowDialog"])(element, dialogParams, {
        loadDevicesAndAreas: true,
        getFlowHandlers: function (hass) {
            return Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_1__["getConfigFlowHandlers"])(hass).then(function (handlers) {
                return handlers.sort(function (handlerA, handlerB) {
                    return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_5__["caseInsensitiveCompare"])(hass.localize("component." + handlerA + ".config.title"), hass.localize("component." + handlerB + ".config.title"));
                });
            });
        },
        createFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["createConfigFlow"],
        fetchFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["fetchConfigFlow"],
        handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["handleConfigFlowStep"],
        deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_1__["deleteConfigFlow"],
        renderAbortDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config.abort." + step.reason, step.description_placeholders);
            return description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "], ["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "])), description) : "";
        },
        renderShowFormStepHeader: function (hass, step) {
            return hass.localize("component." + step.handler + ".config.step." + step.step_id + ".title");
        },
        renderShowFormStepDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config.step." + step.step_id + ".description", step.description_placeholders);
            return description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "], ["\n            <ha-markdown allowsvg .content=", "></ha-markdown>\n          "])), description) : "";
        },
        renderShowFormStepFieldLabel: function (hass, step, field) {
            return hass.localize("component." + step.handler + ".config.step." + step.step_id + ".data." + field.name);
        },
        renderShowFormStepFieldError: function (hass, step, error) {
            return hass.localize("component." + step.handler + ".config.error." + error);
        },
        renderExternalStepHeader: function (hass, step) {
            return hass.localize("component." + step.handler + ".config.step." + step.step_id + ".title");
        },
        renderExternalStepDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config." + step.step_id + ".description", step.description_placeholders);
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        <p>\n          ", "\n        </p>\n        ", "\n      "], ["\n        <p>\n          ",
                "\n        </p>\n        ",
                "\n      "])), hass.localize("ui.panel.config.integrations.config_flow.external_step.description"), description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "], ["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "])), description) : "");
        },
        renderCreateEntryDescription: function (hass, step) {
            var description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_3__["localizeKey"])(hass.localize, "component." + step.handler + ".config.create_entry." + (step.description ||
                "default"), step.description_placeholders);
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ", "\n        <p>Created config for ", ".</p>\n      "], ["\n        ",
                "\n        <p>Created config for ", ".</p>\n      "])), description
                ? Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["html"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "], ["\n              <ha-markdown allowsvg .content=", "></ha-markdown>\n            "])), description) : "", step.title);
        },
    });
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;


/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts":
/*!****************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-data-entry-flow.ts ***!
  \****************************************************************/
/*! exports provided: loadDataEntryFlowDialog, showFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataEntryFlowDialog", function() { return loadDataEntryFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFlowDialog", function() { return showFlowDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");


var loadDataEntryFlowDialog = function () {
    return Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~ha-sidebar~more-info~702391a3"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~8bd3e4d4"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~482d8d48"), __webpack_require__.e("vendors~device-registry-detail-dialog~dialog-config-flow~dialog-zha-device-info~more-info-dialog~pan~aeba8a04"), __webpack_require__.e(5), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-config-automation~panel-c~a4d29058"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e(11), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow~panel-config-automation~panel-config-script"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
};
var showFlowDialog = function (element, dialogParams, flowConfig) {
    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(element, "show-dialog", {
        dialogTag: "dialog-data-entry-flow",
        dialogImport: loadDataEntryFlowDialog,
        dialogParams: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, dialogParams), { flowConfig: flowConfig }),
    });
};


/***/ }),

/***/ "./src/onboarding/integration-badge.ts":
/*!*********************************************!*\
  !*** ./src/onboarding/integration-badge.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");



var IntegrationBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IntegrationBadge, _super);
    function IntegrationBadge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clickable = false;
        return _this;
    }
    IntegrationBadge.prototype.render = function () {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <div class=\"icon\">\n        <iron-icon .icon=", "></iron-icon>\n        ", "\n      </div>\n      <div class=\"title\">", "</div>\n    "], ["\n      <div class=\"icon\">\n        <iron-icon .icon=", "></iron-icon>\n        ",
            "\n      </div>\n      <div class=\"title\">", "</div>\n    "])), this.icon, this.badgeIcon
            ? Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n              <ha-icon class=\"badge\" .icon=", "></ha-icon>\n            "], ["\n              <ha-icon class=\"badge\" .icon=", "></ha-icon>\n            "])), this.badgeIcon) : "", this.title);
    };
    Object.defineProperty(IntegrationBadge, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      :host {\n        display: inline-flex;\n        flex-direction: column;\n        text-align: center;\n        color: var(--primary-text-color);\n      }\n\n      :host([clickable]) {\n        color: var(--primary-text-color);\n      }\n\n      .icon {\n        position: relative;\n        margin: 0 auto 8px;\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        border: 1px solid var(--secondary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      :host([clickable]) .icon {\n        border-color: var(--primary-color);\n        border-width: 2px;\n      }\n\n      .badge {\n        position: absolute;\n        color: var(--primary-color);\n        bottom: -5px;\n        right: -5px;\n        background-color: white;\n        border-radius: 50%;\n        width: 18px;\n        display: block;\n        height: 18px;\n      }\n\n      .title {\n        min-height: 2.3em;\n      }\n    "], ["\n      :host {\n        display: inline-flex;\n        flex-direction: column;\n        text-align: center;\n        color: var(--primary-text-color);\n      }\n\n      :host([clickable]) {\n        color: var(--primary-text-color);\n      }\n\n      .icon {\n        position: relative;\n        margin: 0 auto 8px;\n        height: 40px;\n        width: 40px;\n        border-radius: 50%;\n        border: 1px solid var(--secondary-text-color);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n      :host([clickable]) .icon {\n        border-color: var(--primary-color);\n        border-width: 2px;\n      }\n\n      .badge {\n        position: absolute;\n        color: var(--primary-color);\n        bottom: -5px;\n        right: -5px;\n        background-color: white;\n        border-radius: 50%;\n        width: 18px;\n        display: block;\n        height: 18px;\n      }\n\n      .title {\n        min-height: 2.3em;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], IntegrationBadge.prototype, "icon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], IntegrationBadge.prototype, "title", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], IntegrationBadge.prototype, "badgeIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])({ type: Boolean, reflect: true })
    ], IntegrationBadge.prototype, "clickable", void 0);
    IntegrationBadge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("integration-badge")
    ], IntegrationBadge);
    return IntegrationBadge;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ "./src/onboarding/onboarding-integrations.ts":
/*!***************************************************!*\
  !*** ./src/onboarding/onboarding-integrations.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _integration_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./integration-badge */ "./src/onboarding/integration-badge.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/config_flow */ "./src/data/config_flow.ts");











var OnboardingIntegrations = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OnboardingIntegrations, _super);
    function OnboardingIntegrations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OnboardingIntegrations.prototype.connectedCallback = function () {
        var _this = this;
        _super.prototype.connectedCallback.call(this);
        this._unsubEvents = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["subscribeConfigFlowInProgress"])(this.hass, function (flows) {
            _this._discovered = flows;
        });
    };
    OnboardingIntegrations.prototype.disconnectedCallback = function () {
        _super.prototype.disconnectedCallback.call(this);
        if (this._unsubEvents) {
            this._unsubEvents();
            this._unsubEvents = undefined;
        }
    };
    OnboardingIntegrations.prototype.render = function () {
        var _this = this;
        if (!this._entries || !this._discovered) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        // Render discovered and existing entries together sorted by localized title.
        var entries = this._entries.map(function (entry) {
            var title = _this.hass.localize("component." + entry.domain + ".config.title");
            return [
                title,
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <integration-badge\n              .title=", "\n              icon=\"hass:check\"\n            ></integration-badge>\n          "], ["\n            <integration-badge\n              .title=", "\n              icon=\"hass:check\"\n            ></integration-badge>\n          "])), title),
            ];
        });
        var discovered = this._discovered.map(function (flow) {
            var title = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["localizeConfigFlowTitle"])(_this.hass.localize, flow);
            return [
                title,
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            <button .flowId=", " @click=", ">\n              <integration-badge\n                clickable\n                .title=", "\n                icon=\"hass:plus\"\n              ></integration-badge>\n            </button>\n          "], ["\n            <button .flowId=", " @click=", ">\n              <integration-badge\n                clickable\n                .title=", "\n                icon=\"hass:plus\"\n              ></integration-badge>\n            </button>\n          "])), flow.flow_id, _this._continueFlow, title),
            ];
        });
        var content = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(entries, discovered).sort(function (a, b) { return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_5__["compare"])(a[0], b[0]); })
            .map(function (item) { return item[1]; });
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <p>\n        ", "\n      </p>\n      <div class=\"badges\">\n        ", "\n        <button @click=", ">\n          <integration-badge\n            clickable\n            title=", "\n            icon=\"hass:dots-horizontal\"\n          ></integration-badge>\n        </button>\n      </div>\n      <div class=\"footer\">\n        <mwc-button @click=", ">\n          ", "\n        </mwc-button>\n      </div>\n    "], ["\n      <p>\n        ", "\n      </p>\n      <div class=\"badges\">\n        ", "\n        <button @click=", ">\n          <integration-badge\n            clickable\n            title=",
            "\n            icon=\"hass:dots-horizontal\"\n          ></integration-badge>\n        </button>\n      </div>\n      <div class=\"footer\">\n        <mwc-button @click=", ">\n          ",
            "\n        </mwc-button>\n      </div>\n    "])), this.onboardingLocalize("ui.panel.page-onboarding.integration.intro"), content, this._createFlow, this.onboardingLocalize("ui.panel.page-onboarding.integration.more_integrations"), this._finish, this.onboardingLocalize("ui.panel.page-onboarding.integration.finish"));
    };
    OnboardingIntegrations.prototype.firstUpdated = function (changedProps) {
        _super.prototype.firstUpdated.call(this, changedProps);
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_3__["loadConfigFlowDialog"])();
        this._loadConfigEntries();
        /* polyfill for paper-dropdown */
        __webpack_require__.e(/*! import() | polyfill-web-animations-next */ "vendors~polyfill-web-animations-next").then(__webpack_require__.t.bind(null, /*! web-animations-js/web-animations-next-lite.min */ "./node_modules/web-animations-js/web-animations-next-lite.min.js", 7));
    };
    OnboardingIntegrations.prototype._createFlow = function () {
        var _this = this;
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_3__["showConfigFlowDialog"])(this, {
            dialogClosedCallback: function () {
                _this._loadConfigEntries();
                Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["getConfigFlowInProgressCollection"])(_this.hass.connection).refresh();
            },
        });
    };
    OnboardingIntegrations.prototype._continueFlow = function (ev) {
        var _this = this;
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_3__["showConfigFlowDialog"])(this, {
            continueFlowId: ev.currentTarget.flowId,
            dialogClosedCallback: function () {
                _this._loadConfigEntries();
                Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_10__["getConfigFlowInProgressCollection"])(_this.hass.connection).refresh();
            },
        });
    };
    OnboardingIntegrations.prototype._loadConfigEntries = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_4__["getConfigEntries"])(this.hass)];
                    case 1:
                        entries = _a.sent();
                        // We filter out the config entry for the local weather.
                        // It is one that we create automatically and it will confuse the user
                        // if it starts showing up during onboarding.
                        this._entries = entries.filter(function (entry) { return entry.domain !== "met"; });
                        return [2 /*return*/];
                }
            });
        });
    };
    OnboardingIntegrations.prototype._finish = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_8__["onboardIntegrationStep"])(this.hass, {
                            client_id: Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_9__["genClientId"])(),
                        })];
                    case 1:
                        result = _a.sent();
                        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "onboarding-step", {
                            type: "integration",
                            result: result,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(OnboardingIntegrations, "styles", {
        get: function () {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      .badges {\n        margin-top: 24px;\n      }\n      .badges > * {\n        width: 24%;\n        min-width: 90px;\n        margin-bottom: 24px;\n      }\n      button {\n        display: inline-block;\n        cursor: pointer;\n        padding: 0;\n        border: 0;\n        background: 0;\n        font: inherit;\n      }\n      .footer {\n        text-align: right;\n      }\n    "], ["\n      .badges {\n        margin-top: 24px;\n      }\n      .badges > * {\n        width: 24%;\n        min-width: 90px;\n        margin-bottom: 24px;\n      }\n      button {\n        display: inline-block;\n        cursor: pointer;\n        padding: 0;\n        border: 0;\n        background: 0;\n        font: inherit;\n      }\n      .footer {\n        text-align: right;\n      }\n    "])));
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], OnboardingIntegrations.prototype, "hass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], OnboardingIntegrations.prototype, "onboardingLocalize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], OnboardingIntegrations.prototype, "_entries", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], OnboardingIntegrations.prototype, "_discovered", void 0);
    OnboardingIntegrations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("onboarding-integrations")
    ], OnboardingIntegrations);
    return OnboardingIntegrations;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9pbnRlZ3JhdGlvbi1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWludGVncmF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IElyb25JY29uRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5cbmNvbnN0IGlyb25JY29uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJpcm9uLWljb25cIikgYXMgQ29uc3RydWN0b3I8XG4gIElyb25JY29uRWxlbWVudFxuPjtcblxubGV0IGxvYWRlZCA9IGZhbHNlO1xuXG5leHBvcnQgY2xhc3MgSGFJY29uIGV4dGVuZHMgaXJvbkljb25DbGFzcyB7XG4gIHByaXZhdGUgX2ljb25zZXROYW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBsaXN0ZW4oXG4gICAgbm9kZTogRXZlbnRUYXJnZXQgfCBudWxsLFxuICAgIGV2ZW50TmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZE5hbWU6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICBzdXBlci5saXN0ZW4obm9kZSwgZXZlbnROYW1lLCBtZXRob2ROYW1lKTtcblxuICAgIGlmICghbG9hZGVkICYmIHRoaXMuX2ljb25zZXROYW1lID09PSBcIm1kaVwiKSB7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibWRpLWljb25zXCIgKi8gXCIuLi9yZXNvdXJjZXMvbWRpLWljb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtaWNvblwiOiBIYUljb247XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaWNvblwiLCBIYUljb24pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0VudHJ5IHtcbiAgZW50cnlfaWQ6IHN0cmluZztcbiAgZG9tYWluOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHNvdXJjZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBjb25uZWN0aW9uX2NsYXNzOiBzdHJpbmc7XG4gIHN1cHBvcnRzX29wdGlvbnM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zIHtcbiAgZGlzYWJsZV9uZXdfZW50aXRpZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyaWVzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxDb25maWdFbnRyeVtdPihcIkdFVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeVwiKTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvbmZpZ0VudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPHtcbiAgICByZXF1aXJlX3Jlc3RhcnQ6IGJvb2xlYW47XG4gIH0+KFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZW50cnkvJHtjb25maWdFbnRyeUlkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsV1M8Q29uZmlnRW50cnlTeXN0ZW1PcHRpb25zPih7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9zeXN0ZW1fb3B0aW9ucy9saXN0XCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ29uZmlnRW50cnlTeXN0ZW1PcHRpb25zID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWdFbnRyeUlkOiBzdHJpbmcsXG4gIHBhcmFtczogUGFydGlhbDxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+XG4pID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL3VwZGF0ZVwiLFxuICAgIGVudHJ5X2lkOiBjb25maWdFbnRyeUlkLFxuICAgIC4uLnBhcmFtcyxcbiAgfSk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcCwgRGF0YUVudHJ5Rmxvd1Byb2dyZXNzIH0gZnJvbSBcIi4vZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcIlBPU1RcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd1wiLCB7XG4gICAgaGFuZGxlcixcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJHRVRcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YFxuICApO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ29uZmlnRmxvd1N0ZXAgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGZsb3dJZDogc3RyaW5nLFxuICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4pID0+XG4gIGhhc3MuY2FsbEFwaTxEYXRhRW50cnlGbG93U3RlcD4oXG4gICAgXCJQT1NUXCIsXG4gICAgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWAsXG4gICAgZGF0YVxuICApO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dIYW5kbGVycyA9IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PlxuICBoYXNzLmNhbGxBcGk8c3RyaW5nW10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3dfaGFuZGxlcnNcIik7XG5cbmNvbnN0IGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvZmxvdy9wcm9ncmVzc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MoY29ubikudGhlbigoZmxvd3MpID0+XG4gICAgICAgICAgc3RvcmUuc2V0U3RhdGUoZmxvd3MsIHRydWUpXG4gICAgICAgICksXG4gICAgICA1MDAsXG4gICAgICB0cnVlXG4gICAgKSxcbiAgICBcImNvbmZpZ19lbnRyeV9kaXNjb3ZlcmVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uPERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdPihcbiAgICBjb25uLFxuICAgIFwiX2NvbmZpZ0Zsb3dQcm9ncmVzc1wiLFxuICAgIGZldGNoQ29uZmlnRmxvd0luUHJvZ3Jlc3MsXG4gICAgc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3NVcGRhdGVzXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgb25DaGFuZ2U6IChmbG93czogRGF0YUVudHJ5Rmxvd1Byb2dyZXNzW10pID0+IHZvaWRcbikgPT4gZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKGhhc3MuY29ubmVjdGlvbikuc3Vic2NyaWJlKG9uQ2hhbmdlKTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplQ29uZmlnRmxvd1RpdGxlID0gKFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBmbG93OiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NcbikgPT4ge1xuICBjb25zdCBwbGFjZWhvbGRlcnMgPSBmbG93LmNvbnRleHQudGl0bGVfcGxhY2Vob2xkZXJzIHx8IHt9O1xuICBjb25zdCBwbGFjZWhvbGRlcktleXMgPSBPYmplY3Qua2V5cyhwbGFjZWhvbGRlcnMpO1xuICBpZiAocGxhY2Vob2xkZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgY29tcG9uZW50LiR7Zmxvdy5oYW5kbGVyfS5jb25maWcudGl0bGVgKTtcbiAgfVxuICBjb25zdCBhcmdzOiBzdHJpbmdbXSA9IFtdO1xuICBwbGFjZWhvbGRlcktleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgYXJncy5wdXNoKGtleSk7XG4gICAgYXJncy5wdXNoKHBsYWNlaG9sZGVyc1trZXldKTtcbiAgfSk7XG4gIHJldHVybiBsb2NhbGl6ZShgY29tcG9uZW50LiR7Zmxvdy5oYW5kbGVyfS5jb25maWcuZmxvd190aXRsZWAsIC4uLmFyZ3MpO1xufTtcbiIsImltcG9ydCB7XG4gIGdldENvbmZpZ0Zsb3dIYW5kbGVycyxcbiAgZmV0Y2hDb25maWdGbG93LFxuICBoYW5kbGVDb25maWdGbG93U3RlcCxcbiAgZGVsZXRlQ29uZmlnRmxvdyxcbiAgY3JlYXRlQ29uZmlnRmxvdyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29uZmlnX2Zsb3dcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IGxvY2FsaXplS2V5IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7XG4gIHNob3dGbG93RGlhbG9nLFxuICBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLFxuICBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbn0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5pbXBvcnQgeyBjYXNlSW5zZW5zaXRpdmVDb21wYXJlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuXG5leHBvcnQgY29uc3QgbG9hZENvbmZpZ0Zsb3dEaWFsb2cgPSBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZztcblxuZXhwb3J0IGNvbnN0IHNob3dDb25maWdGbG93RGlhbG9nID0gKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgZGlhbG9nUGFyYW1zOiBPbWl0PERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsIFwiZmxvd0NvbmZpZ1wiPlxuKTogdm9pZCA9PlxuICBzaG93Rmxvd0RpYWxvZyhlbGVtZW50LCBkaWFsb2dQYXJhbXMsIHtcbiAgICBsb2FkRGV2aWNlc0FuZEFyZWFzOiB0cnVlLFxuICAgIGdldEZsb3dIYW5kbGVyczogKGhhc3MpID0+XG4gICAgICBnZXRDb25maWdGbG93SGFuZGxlcnMoaGFzcykudGhlbigoaGFuZGxlcnMpID0+XG4gICAgICAgIGhhbmRsZXJzLnNvcnQoKGhhbmRsZXJBLCBoYW5kbGVyQikgPT5cbiAgICAgICAgICBjYXNlSW5zZW5zaXRpdmVDb21wYXJlKFxuICAgICAgICAgICAgaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckF9LmNvbmZpZy50aXRsZWApLFxuICAgICAgICAgICAgaGFzcy5sb2NhbGl6ZShgY29tcG9uZW50LiR7aGFuZGxlckJ9LmNvbmZpZy50aXRsZWApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApLFxuICAgIGNyZWF0ZUZsb3c6IGNyZWF0ZUNvbmZpZ0Zsb3csXG4gICAgZmV0Y2hGbG93OiBmZXRjaENvbmZpZ0Zsb3csXG4gICAgaGFuZGxlRmxvd1N0ZXA6IGhhbmRsZUNvbmZpZ0Zsb3dTdGVwLFxuICAgIGRlbGV0ZUZsb3c6IGRlbGV0ZUNvbmZpZ0Zsb3csXG5cbiAgICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5hYm9ydC4ke3N0ZXAucmVhc29ufWAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEhlYWRlcihoYXNzLCBzdGVwKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRlc2NyaXB0aW9uYCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCI7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkTGFiZWwoaGFzcywgc3RlcCwgZmllbGQpIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGF0YS4ke1xuICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgfWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoaGFzcywgc3RlcCwgZXJyb3IpIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5lcnJvci4ke2Vycm9yfWApO1xuICAgIH0sXG5cbiAgICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoaGFzcywgc3RlcCkge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5zdGVwLiR7c3RlcC5zdGVwX2lkfS50aXRsZWBcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHJlbmRlckV4dGVybmFsU3RlcERlc2NyaXB0aW9uKGhhc3MsIHN0ZXApIHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gbG9jYWxpemVLZXkoXG4gICAgICAgIGhhc3MubG9jYWxpemUsXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwPlxuICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5jb25maWdfZmxvdy5leHRlcm5hbF9zdGVwLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIGA7XG4gICAgfSxcblxuICAgIHJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmNyZWF0ZV9lbnRyeS4ke3N0ZXAuZGVzY3JpcHRpb24gfHxcbiAgICAgICAgICBcImRlZmF1bHRcIn1gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcblxuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7ZGVzY3JpcHRpb25cbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93biBhbGxvd3N2ZyAuY29udGVudD0ke2Rlc2NyaXB0aW9ufT48L2hhLW1hcmtkb3duPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPHA+Q3JlYXRlZCBjb25maWcgZm9yICR7c3RlcC50aXRsZX0uPC9wPlxuICAgICAgYDtcbiAgICB9LFxuICB9KTtcbiIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0IH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5LFxuICBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsLFxuICBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gIERhdGFFbnRyeUZsb3dTdGVwLFxuICBEYXRhRW50cnlGbG93U3RlcEFib3J0LFxuICBGaWVsZFNjaGVtYSxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxvd0NvbmZpZyB7XG4gIGxvYWREZXZpY2VzQW5kQXJlYXM6IGJvb2xlYW47XG5cbiAgZ2V0Rmxvd0hhbmRsZXJzPzogKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+IFByb21pc2U8c3RyaW5nW10+O1xuXG4gIGNyZWF0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgZmV0Y2hGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKTogUHJvbWlzZTxEYXRhRW50cnlGbG93U3RlcD47XG5cbiAgaGFuZGxlRmxvd1N0ZXAoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBmbG93SWQ6IHN0cmluZyxcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gICk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGRlbGV0ZUZsb3coaGFzczogSG9tZUFzc2lzdGFudCwgZmxvd0lkOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+O1xuXG4gIHJlbmRlckFib3J0RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEFib3J0XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm1cbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcERlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBGaWVsZExhYmVsKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICAgIGZpZWxkOiBGaWVsZFNjaGVtYVxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybSxcbiAgICBlcnJvcjogc3RyaW5nXG4gICk6IHN0cmluZztcblxuICByZW5kZXJFeHRlcm5hbFN0ZXBIZWFkZXIoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsXG4gICk6IHN0cmluZztcblxuICByZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRXh0ZXJuYWxcbiAgKTogVGVtcGxhdGVSZXN1bHQgfCBcIlwiO1xuXG4gIHJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5XG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zIHtcbiAgc3RhcnRGbG93SGFuZGxlcj86IHN0cmluZztcbiAgY29udGludWVGbG93SWQ/OiBzdHJpbmc7XG4gIGRpYWxvZ0Nsb3NlZENhbGxiYWNrPzogKHBhcmFtczogeyBmbG93RmluaXNoZWQ6IGJvb2xlYW4gfSkgPT4gdm9pZDtcbiAgZmxvd0NvbmZpZzogRmxvd0NvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWREYXRhRW50cnlGbG93RGlhbG9nID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZGlhbG9nLWNvbmZpZy1mbG93XCIgKi8gXCIuL2RpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIik7XG5cbmV4cG9ydCBjb25zdCBzaG93Rmxvd0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGRpYWxvZ1BhcmFtczogT21pdDxEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zLCBcImZsb3dDb25maWdcIj4sXG4gIGZsb3dDb25maWc6IEZsb3dDb25maWdcbik6IHZvaWQgPT4ge1xuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LWRpYWxvZ1wiLCB7XG4gICAgZGlhbG9nVGFnOiBcImRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIixcbiAgICBkaWFsb2dJbXBvcnQ6IGxvYWREYXRhRW50cnlGbG93RGlhbG9nLFxuICAgIGRpYWxvZ1BhcmFtczoge1xuICAgICAgLi4uZGlhbG9nUGFyYW1zLFxuICAgICAgZmxvd0NvbmZpZyxcbiAgICB9LFxuICB9KTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaGEtaWNvblwiO1xuXG5AY3VzdG9tRWxlbWVudChcImludGVncmF0aW9uLWJhZGdlXCIpXG5jbGFzcyBJbnRlZ3JhdGlvbkJhZGdlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBpY29uITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgdGl0bGUhOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBiYWRnZUljb24/OiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6IHRydWUgfSkgcHVibGljIGNsaWNrYWJsZSA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgIDxpcm9uLWljb24gLmljb249JHt0aGlzLmljb259PjwvaXJvbi1pY29uPlxuICAgICAgICAke3RoaXMuYmFkZ2VJY29uXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8aGEtaWNvbiBjbGFzcz1cImJhZGdlXCIgLmljb249JHt0aGlzLmJhZGdlSWNvbn0+PC9oYS1pY29uPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0aGlzLnRpdGxlfTwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2xpY2thYmxlXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDhweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbY2xpY2thYmxlXSkgLmljb24ge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICAgIH1cblxuICAgICAgLmJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvdHRvbTogLTVweDtcbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAudGl0bGUge1xuICAgICAgICBtaW4taGVpZ2h0OiAyLjNlbTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJpbnRlZ3JhdGlvbi1iYWRnZVwiOiBJbnRlZ3JhdGlvbkJhZGdlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQge1xuICBsb2FkQ29uZmlnRmxvd0RpYWxvZyxcbiAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2csXG59IGZyb20gXCIuLi9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDb25maWdFbnRyaWVzLCBDb25maWdFbnRyeSB9IGZyb20gXCIuLi9kYXRhL2NvbmZpZ19lbnRyaWVzXCI7XG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcIi4uL2NvbW1vbi9zdHJpbmcvY29tcGFyZVwiO1xuaW1wb3J0IFwiLi9pbnRlZ3JhdGlvbi1iYWRnZVwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IG9uYm9hcmRJbnRlZ3JhdGlvblN0ZXAgfSBmcm9tIFwiLi4vZGF0YS9vbmJvYXJkaW5nXCI7XG5pbXBvcnQgeyBnZW5DbGllbnRJZCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dQcm9ncmVzcyB9IGZyb20gXCIuLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHtcbiAgbG9jYWxpemVDb25maWdGbG93VGl0bGUsXG4gIHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzLFxuICBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24sXG59IGZyb20gXCIuLi9kYXRhL2NvbmZpZ19mbG93XCI7XG5cbkBjdXN0b21FbGVtZW50KFwib25ib2FyZGluZy1pbnRlZ3JhdGlvbnNcIilcbmNsYXNzIE9uYm9hcmRpbmdJbnRlZ3JhdGlvbnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb25ib2FyZGluZ0xvY2FsaXplITogTG9jYWxpemVGdW5jO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbnRyaWVzPzogQ29uZmlnRW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZGlzY292ZXJlZD86IERhdGFFbnRyeUZsb3dQcm9ncmVzc1tdO1xuICBwcml2YXRlIF91bnN1YkV2ZW50cz86ICgpID0+IHZvaWQ7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fdW5zdWJFdmVudHMgPSBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyh0aGlzLmhhc3MsIChmbG93cykgPT4ge1xuICAgICAgdGhpcy5fZGlzY292ZXJlZCA9IGZsb3dzO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgaWYgKHRoaXMuX3Vuc3ViRXZlbnRzKSB7XG4gICAgICB0aGlzLl91bnN1YkV2ZW50cygpO1xuICAgICAgdGhpcy5fdW5zdWJFdmVudHMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5fZW50cmllcyB8fCAhdGhpcy5fZGlzY292ZXJlZCkge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG4gICAgLy8gUmVuZGVyIGRpc2NvdmVyZWQgYW5kIGV4aXN0aW5nIGVudHJpZXMgdG9nZXRoZXIgc29ydGVkIGJ5IGxvY2FsaXplZCB0aXRsZS5cbiAgICBjb25zdCBlbnRyaWVzOiBBcnJheTxbc3RyaW5nLCBUZW1wbGF0ZVJlc3VsdF0+ID0gdGhpcy5fZW50cmllcy5tYXAoXG4gICAgICAoZW50cnkpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgYGNvbXBvbmVudC4ke2VudHJ5LmRvbWFpbn0uY29uZmlnLnRpdGxlYFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICA8aW50ZWdyYXRpb24tYmFkZ2VcbiAgICAgICAgICAgICAgLnRpdGxlPSR7dGl0bGV9XG4gICAgICAgICAgICAgIGljb249XCJoYXNzOmNoZWNrXCJcbiAgICAgICAgICAgID48L2ludGVncmF0aW9uLWJhZGdlPlxuICAgICAgICAgIGAsXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBkaXNjb3ZlcmVkOiBBcnJheTxbc3RyaW5nLCBUZW1wbGF0ZVJlc3VsdF0+ID0gdGhpcy5fZGlzY292ZXJlZC5tYXAoXG4gICAgICAoZmxvdykgPT4ge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGxvY2FsaXplQ29uZmlnRmxvd1RpdGxlKHRoaXMuaGFzcy5sb2NhbGl6ZSwgZmxvdyk7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgIDxidXR0b24gLmZsb3dJZD0ke2Zsb3cuZmxvd19pZH0gQGNsaWNrPSR7dGhpcy5fY29udGludWVGbG93fT5cbiAgICAgICAgICAgICAgPGludGVncmF0aW9uLWJhZGdlXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgLnRpdGxlPSR7dGl0bGV9XG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6cGx1c1wiXG4gICAgICAgICAgICAgID48L2ludGVncmF0aW9uLWJhZGdlPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgYCxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBbLi4uZW50cmllcywgLi4uZGlzY292ZXJlZF1cbiAgICAgIC5zb3J0KChhLCBiKSA9PiBjb21wYXJlKGFbMF0sIGJbMF0pKVxuICAgICAgLm1hcCgoaXRlbSkgPT4gaXRlbVsxXSk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxwPlxuICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmludGVncmF0aW9uLmludHJvXCIpfVxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzcz1cImJhZGdlc1wiPlxuICAgICAgICAke2NvbnRlbnR9XG4gICAgICAgIDxidXR0b24gQGNsaWNrPSR7dGhpcy5fY3JlYXRlRmxvd30+XG4gICAgICAgICAgPGludGVncmF0aW9uLWJhZGdlXG4gICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgIHRpdGxlPSR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmludGVncmF0aW9uLm1vcmVfaW50ZWdyYXRpb25zXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLWhvcml6b250YWxcIlxuICAgICAgICAgID48L2ludGVncmF0aW9uLWJhZGdlPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9maW5pc2h9PlxuICAgICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5pbnRlZ3JhdGlvbi5maW5pc2hcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICBsb2FkQ29uZmlnRmxvd0RpYWxvZygpO1xuICAgIHRoaXMuX2xvYWRDb25maWdFbnRyaWVzKCk7XG4gICAgLyogcG9seWZpbGwgZm9yIHBhcGVyLWRyb3Bkb3duICovXG4gICAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwicG9seWZpbGwtd2ViLWFuaW1hdGlvbnMtbmV4dFwiICovIFwid2ViLWFuaW1hdGlvbnMtanMvd2ViLWFuaW1hdGlvbnMtbmV4dC1saXRlLm1pblwiKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZUZsb3coKSB7XG4gICAgc2hvd0NvbmZpZ0Zsb3dEaWFsb2codGhpcywge1xuICAgICAgZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5fbG9hZENvbmZpZ0VudHJpZXMoKTtcbiAgICAgICAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uKHRoaXMuaGFzcyEuY29ubmVjdGlvbikucmVmcmVzaCgpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbnRpbnVlRmxvdyhldikge1xuICAgIHNob3dDb25maWdGbG93RGlhbG9nKHRoaXMsIHtcbiAgICAgIGNvbnRpbnVlRmxvd0lkOiBldi5jdXJyZW50VGFyZ2V0LmZsb3dJZCxcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2xvYWRDb25maWdFbnRyaWVzKCk7XG4gICAgICAgIGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbih0aGlzLmhhc3MhLmNvbm5lY3Rpb24pLnJlZnJlc2goKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9sb2FkQ29uZmlnRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZ2V0Q29uZmlnRW50cmllcyh0aGlzLmhhc3MhKTtcbiAgICAvLyBXZSBmaWx0ZXIgb3V0IHRoZSBjb25maWcgZW50cnkgZm9yIHRoZSBsb2NhbCB3ZWF0aGVyLlxuICAgIC8vIEl0IGlzIG9uZSB0aGF0IHdlIGNyZWF0ZSBhdXRvbWF0aWNhbGx5IGFuZCBpdCB3aWxsIGNvbmZ1c2UgdGhlIHVzZXJcbiAgICAvLyBpZiBpdCBzdGFydHMgc2hvd2luZyB1cCBkdXJpbmcgb25ib2FyZGluZy5cbiAgICB0aGlzLl9lbnRyaWVzID0gZW50cmllcy5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5kb21haW4gIT09IFwibWV0XCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmluaXNoKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uYm9hcmRJbnRlZ3JhdGlvblN0ZXAodGhpcy5oYXNzLCB7XG4gICAgICBjbGllbnRfaWQ6IGdlbkNsaWVudElkKCksXG4gICAgfSk7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwib25ib2FyZGluZy1zdGVwXCIsIHtcbiAgICAgIHR5cGU6IFwiaW50ZWdyYXRpb25cIixcbiAgICAgIHJlc3VsdCxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIC5iYWRnZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgfVxuICAgICAgLmJhZGdlcyA+ICoge1xuICAgICAgICB3aWR0aDogMjQlO1xuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG4gICAgICBidXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAwO1xuICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgLmZvb3RlciB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm9uYm9hcmRpbmctaW50ZWdyYXRpb25zXCI6IE9uYm9hcmRpbmdJbnRlZ3JhdGlvbnM7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBdUJBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUtBO0FBSUE7QUFFQTtBQUFBO0FBQUE7O0FBZUE7QUFaQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBS0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFLQTtBQUtBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQURBO0FBSEE7QUFZQTtBQUNBO0FBQUE7QUFPQTtBQUtBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQU9BO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBTUE7QUFJQTtBQU1BO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBS0E7QUFIQTtBQU1BO0FBQ0E7QUF6R0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBOEVBO0FBQ0E7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFTQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBK0RBO0FBN0RBO0FBQ0E7QUFPQTtBQUhBO0FBT0E7QUFFQTtBQUFBO0FBQ0E7QUE2Q0E7OztBQUFBO0FBakVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFDQTtBQW1FQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRUE7QUFVQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUFBO0FBQUE7O0FBOEpBO0FBdkpBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBV0E7QUFTQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQXFCQTs7O0FBQUE7QUE1SkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQUNBO0FBOEpBO0FBQUE7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9