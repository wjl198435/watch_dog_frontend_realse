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
					var w = new Worker(__webpack_require__.p + "03fd490b0cd140cde099.worker.js", { name: "[hash].worker.js" })
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








let SearchInput = class SearchInput extends lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"] {
    render() {
        return lit_html__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="search-container">
        <paper-input
          autofocus
          label="Search"
          .value=${this.filter}
          @value-changed=${this._filterInputChanged}
        >
          <iron-icon
            icon="hass:magnify"
            slot="prefix"
            class="prefix"
          ></iron-icon>
          ${this.filter &&
            lit_html__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-icon-button
                slot="suffix"
                class="suffix"
                @click=${this._clearSearch}
                icon="hass:close"
                alt="Clear"
                title="Clear"
              ></paper-icon-button>
            `}
        </paper-input>
      </div>
    `;
    }
    async _filterChanged(value) {
        Object(_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "value-changed", { value: String(value) });
    }
    async _filterInputChanged(e) {
        this._filterChanged(e.target.value);
    }
    async _clearSearch() {
        this._filterChanged("");
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"] `
      paper-input {
        flex: 1 1 auto;
        margin: 0 16px;
      }
      .search-container {
        display: inline-flex;
        width: 100%;
        align-items: center;
      }
      .prefix {
        margin: 8px;
      }
    `;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()
], SearchInput.prototype, "filter", void 0);
SearchInput = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["customElement"])("search-input")
], SearchInput);


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




const HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function(node) {
    var result = [];
    // If there is at least one element with tabindex > 0, we need to sort
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
  _collectTabbableNodes: function(node, result) {
    // If not an element or not visible, no need to explore children.
    if (
      node.nodeType !== Node.ELEMENT_NODE ||
      !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)
    ) {
      return false;
    }
    var element = /** @type {!HTMLElement} */ (node);
    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);
    var needsSort = tabIndex > 0;
    if (tabIndex >= 0) {
      result.push(element);
    }

    // In ShadowDOM v1, tab order is affected by the order of distrubution.
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
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children;
      // /////////////////////////
    }
    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }
    return needsSort;
  },
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
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");



const paperDialogClass = customElements.get("paper-dialog");
// behavior that will override existing iron-overlay-behavior and call the fixed implementation
const haTabFixBehaviorImpl = {
    get _focusableNodes() {
        return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
    },
};
// paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore
class HaPaperDialog extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass) {
}
customElements.define("ha-paper-dialog", HaPaperDialog);


/***/ }),

/***/ "./src/components/ha-form.js":
/*!***********************************!*\
  !*** ./src/components/ha-form.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");












/*
 * @appliesMixin EventsMixin
 */
class HaForm extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-error="[[computeError]]"
            compute-label="[[computeLabel]]"
            compute-suffix="[[computeSuffix]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          >
            <span suffix="" slot="suffix">[[computeSuffix(schema)]]</span>
          </paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        notify: true,
      },
      schema: Object,
      error: Object,

      // A function that computes the label to be displayed for a given
      // schema object.
      computeLabel: {
        type: Function,
        value: () => (schema) => schema && schema.name,
      },

      // A function that computes the suffix to be displayed for a given
      // schema object.
      computeSuffix: {
        type: Function,
        value: () => (schema) =>
          schema &&
          schema.description &&
          schema.description.unit_of_measurement,
      },

      // A function that computes an error message to be displayed for a
      // given error ID, and relevant schema object
      computeError: {
        type: Function,
        value: () => (error, schema) => error, // eslint-disable-line no-unused-vars
      },
    };
  }

  focus() {
    const input = this.shadowRoot.querySelector(
      "ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu"
    );

    if (!input) {
      return;
    }

    input.focus();
  }

  _isArray(val) {
    return Array.isArray(val);
  }

  _isRange(schema) {
    return "valueMin" in schema && "valueMax" in schema;
  }

  _equals(a, b) {
    return a === b;
  }

  _includes(a, b) {
    return a.indexOf(b) >= 0;
  }

  _getValue(obj, item) {
    if (obj) {
      return obj[item.name];
    }
    return null;
  }

  _valueChanged(ev) {
    let value = ev.detail.value;
    if (ev.model.item.type === "integer") {
      value = Number(ev.detail.value);
    }
    this.set(["data", ev.model.item.name], value);
  }

  _passwordFieldType(unmaskedPassword) {
    return unmaskedPassword ? "text" : "password";
  }

  _passwordFieldIcon(unmaskedPassword) {
    return unmaskedPassword ? "hass:eye-off" : "hass:eye";
  }

  _optionValue(item) {
    return Array.isArray(item) ? item[0] : item;
  }

  _optionLabel(item) {
    return Array.isArray(item) ? item[1] : item;
  }
}

customElements.define("ha-form", HaForm);


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
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");

// Not duplicate, this is for typing.
// tslint:disable-next-line

class HaIconNext extends _ha_icon__WEBPACK_IMPORTED_MODULE_1__["HaIcon"] {
    connectedCallback() {
        super.connectedCallback();
        // wait to check for direction since otherwise direction is wrong even though top level is RTL
        setTimeout(() => {
            this.icon =
                window.getComputedStyle(this).direction === "ltr"
                    ? "hass:chevron-right"
                    : "hass:chevron-left";
        }, 100);
    }
}
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


let worker;
let HaMarkdown = class HaMarkdown extends lit_element__WEBPACK_IMPORTED_MODULE_1__["UpdatingElement"] {
    constructor() {
        super(...arguments);
        this.content = "";
        this.allowSvg = false;
        this._resize = () => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "iron-resize");
    }
    update(changedProps) {
        super.update(changedProps);
        if (!worker) {
            worker = workerize_loader_resources_markdown_worker__WEBPACK_IMPORTED_MODULE_2___default()();
        }
        this._render();
    }
    async _render() {
        this.innerHTML = await worker.renderMarkdown(this.content, {
            breaks: true,
            gfm: true,
            tables: true,
        }, {
            allowSvg: this.allowSvg,
        });
        this._resize();
        const walker = document.createTreeWalker(this, 1 /* SHOW_ELEMENT */, null, false);
        while (walker.nextNode()) {
            const node = walker.currentNode;
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
    }
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


/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");


/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */
const PaperSliderClass = customElements.get("paper-slider");

class HaPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }
}
customElements.define("ha-paper-slider", HaPaperSlider);


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
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");


const updateDeviceRegistryEntry = (hass, deviceId, updates) => hass.callWS(Object.assign({ type: "config/device_registry/update", device_id: deviceId }, updates));
const fetchDeviceRegistry = (conn) => conn.sendMessagePromise({
    type: "config/device_registry/list",
});
const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchDeviceRegistry(conn).then((devices) => store.setState(devices, true)), 500, true), "device_registry_updated");
const subscribeDeviceRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);


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



















let instance = 0;
let DataEntryFlowDialog = class DataEntryFlowDialog extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._loading = true;
        this._instance = instance;
    }
    async showDialog(params) {
        this._params = params;
        this._instance = instance++;
        // Create a new config flow. Show picker
        if (!params.continueFlowId && !params.startFlowHandler) {
            if (!params.flowConfig.getFlowHandlers) {
                throw new Error("No getFlowHandlers defined in flow config");
            }
            this._step = null;
            // We only load the handlers once
            if (this._handlers === undefined) {
                this._loading = true;
                this.updateComplete.then(() => this._scheduleCenterDialog());
                try {
                    this._handlers = await params.flowConfig.getFlowHandlers(this.hass);
                }
                finally {
                    this._loading = false;
                }
            }
            await this.updateComplete;
            this._scheduleCenterDialog();
            return;
        }
        this._loading = true;
        const curInstance = this._instance;
        const step = await (params.continueFlowId
            ? params.flowConfig.fetchFlow(this.hass, params.continueFlowId)
            : params.flowConfig.createFlow(this.hass, params.startFlowHandler));
        // Happens if second showDialog called
        if (curInstance !== this._instance) {
            return;
        }
        this._processStep(step);
        this._loading = false;
        // When the flow changes, center the dialog.
        // Don't do it on each step or else the dialog keeps bouncing.
        this._scheduleCenterDialog();
    }
    render() {
        if (!this._params) {
            return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``;
        }
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <ha-paper-dialog
        with-backdrop
        opened
        @opened-changed=${this._openedChanged}
      >
        ${this._loading || (this._step === null && this._handlers === undefined)
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-loading></step-flow-loading>
            `
            : this._step === undefined
                ? // When we are going to next step, we render 1 round of empty
                    // to reset the element.
                    ""
                : this._step === null
                    ? // Show handler picker
                        lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-pick-handler
                .flowConfig=${this._params.flowConfig}
                .hass=${this.hass}
                .handlers=${this._handlers}
              ></step-flow-pick-handler>
            `
                    : this._step.type === "form"
                        ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-form
                .flowConfig=${this._params.flowConfig}
                .step=${this._step}
                .hass=${this.hass}
              ></step-flow-form>
            `
                        : this._step.type === "external"
                            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-external
                .flowConfig=${this._params.flowConfig}
                .step=${this._step}
                .hass=${this.hass}
              ></step-flow-external>
            `
                            : this._step.type === "abort"
                                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-abort
                .flowConfig=${this._params.flowConfig}
                .step=${this._step}
                .hass=${this.hass}
              ></step-flow-abort>
            `
                                : this._devices === undefined || this._areas === undefined
                                    ? // When it's a create entry result, we will fetch device & area registry
                                        lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-loading></step-flow-loading>
            `
                                    : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <step-flow-create-entry
                .flowConfig=${this._params.flowConfig}
                .step=${this._step}
                .hass=${this.hass}
                .devices=${this._devices}
                .areas=${this._areas}
              ></step-flow-create-entry>
            `}
      </ha-paper-dialog>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.addEventListener("flow-update", (ev) => {
            const { step, stepPromise } = ev.detail;
            this._processStep(step || stepPromise);
        });
    }
    updated(changedProps) {
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
    }
    _scheduleCenterDialog() {
        setTimeout(() => this._dialog.center(), 0);
    }
    get _dialog() {
        return this.shadowRoot.querySelector("ha-paper-dialog");
    }
    async _fetchDevices(configEntryId) {
        this._unsubDevices = Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_17__["subscribeDeviceRegistry"])(this.hass.connection, (devices) => {
            this._devices = devices.filter((device) => device.config_entries.includes(configEntryId));
        });
    }
    async _fetchAreas() {
        this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_18__["subscribeAreaRegistry"])(this.hass.connection, (areas) => {
            this._areas = areas;
        });
    }
    async _processStep(step) {
        if (step instanceof Promise) {
            this._loading = true;
            try {
                this._step = await step;
            }
            finally {
                this._loading = false;
            }
            return;
        }
        if (step === undefined) {
            this._flowDone();
            return;
        }
        this._step = undefined;
        await this.updateComplete;
        this._step = step;
    }
    _flowDone() {
        if (!this._params) {
            return;
        }
        const flowFinished = Boolean(this._step && ["create_entry", "abort"].includes(this._step.type));
        // If we created this flow, delete it now.
        if (this._step && !flowFinished && !this._params.continueFlowId) {
            this._params.flowConfig.deleteFlow(this.hass, this._step.flow_id);
        }
        if (this._params.dialogClosedCallback) {
            this._params.dialogClosedCallback({
                flowFinished,
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
    }
    _openedChanged(ev) {
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
    }
    static get styles() {
        return [
            _resources_styles__WEBPACK_IMPORTED_MODULE_10__["haStyleDialog"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        ha-paper-dialog {
          max-width: 500px;
        }
        ha-paper-dialog > * {
          margin: 0;
          display: block;
          padding: 0;
        }
      `,
        ];
    }
};
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





let StepFlowAbort = class StepFlowAbort extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <h2>Aborted</h2>
      <div class="content">
        ${this.flowConfig.renderAbortDescription(this.hass, this.step)}
      </div>
      <div class="buttons">
        <mwc-button @click="${this._flowDone}">Close</mwc-button>
      </div>
    `;
    }
    _flowDone() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "flow-update", { step: undefined });
    }
    static get styles() {
        return _styles__WEBPACK_IMPORTED_MODULE_4__["configFlowContentStyles"];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], StepFlowAbort.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], StepFlowAbort.prototype, "step", void 0);
StepFlowAbort = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-abort")
], StepFlowAbort);


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










let StepFlowCreateEntry = class StepFlowCreateEntry extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        const localize = this.hass.localize;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <h2>Success!</h2>
      <div class="content">
        ${this.flowConfig.renderCreateEntryDescription(this.hass, this.step)}
        ${this.devices.length === 0
            ? ""
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <p>We found the following devices:</p>
              <div class="devices">
                ${this.devices.map((device) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <div class="device">
                        <div>
                          <b>${device.name}</b><br />
                          ${device.model} (${device.manufacturer})
                        </div>
                        <paper-dropdown-menu-light
                          label="Area"
                          .device=${device.id}
                          @selected-item-changed=${this._handleAreaChanged}
                        >
                          <paper-listbox slot="dropdown-content" selected="0">
                            <paper-item>
                              ${localize("ui.panel.config.integrations.config_entry.no_area")}
                            </paper-item>
                            ${this.areas.map((area) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                                <paper-item .area=${area.area_id}>
                                  ${area.name}
                                </paper-item>
                              `)}
                          </paper-listbox>
                        </paper-dropdown-menu-light>
                      </div>
                    `)}
              </div>
            `}
      </div>
      <div class="buttons">
        ${this.devices.length > 0
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <mwc-button @click="${this._addArea}">Add Area</mwc-button>
            `
            : ""}

        <mwc-button @click="${this._flowDone}">Finish</mwc-button>
      </div>
    `;
    }
    _flowDone() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "flow-update", { step: undefined });
    }
    async _addArea() {
        const name = prompt("Name of the new area?");
        if (!name) {
            return;
        }
        try {
            const area = await Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_9__["createAreaRegistryEntry"])(this.hass, {
                name,
            });
            this.areas = [...this.areas, area];
        }
        catch (err) {
            alert("Failed to create area.");
        }
    }
    async _handleAreaChanged(ev) {
        const dropdown = ev.currentTarget;
        const device = dropdown.device;
        // Item first becomes null, then new item.
        if (!dropdown.selectedItem) {
            return;
        }
        const area = dropdown.selectedItem.area;
        try {
            await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_8__["updateDeviceRegistryEntry"])(this.hass, device, {
                area_id: area,
            });
        }
        catch (err) {
            alert(`Error saving area: ${err.message}`);
            dropdown.value = null;
        }
    }
    static get styles() {
        return [
            _styles__WEBPACK_IMPORTED_MODULE_7__["configFlowContentStyles"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        .devices {
          display: flex;
          flex-wrap: wrap;
          margin: -4px;
          max-height: 600px;
          overflow-y: auto;
        }
        .device {
          border: 1px solid var(--divider-color);
          padding: 5px;
          border-radius: 4px;
          margin: 4px;
          display: inline-block;
          width: 200px;
        }
        .buttons > *:last-child {
          margin-left: auto;
        }
        paper-dropdown-menu-light {
          cursor: pointer;
        }
        paper-item {
          cursor: pointer;
          white-space: nowrap;
        }
        @media all and (max-width: 450px), all and (max-height: 500px) {
          .device {
            width: 100%;
          }
        }
      `,
        ];
    }
};
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





let StepFlowExternal = class StepFlowExternal extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        const localize = this.hass.localize;
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <h2>
        ${this.flowConfig.renderExternalStepHeader(this.hass, this.step)}
      </h2>
      <div class="content">
        ${this.flowConfig.renderExternalStepDescription(this.hass, this.step)}
        <div class="open-button">
          <a href=${this.step.url} target="_blank">
            <mwc-button raised>
              ${localize("ui.panel.config.integrations.config_flow.external_step.open_site")}
            </mwc-button>
          </a>
        </div>
      </div>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.hass.connection.subscribeEvents(async (ev) => {
            if (ev.data.flow_id !== this.step.flow_id) {
                return;
            }
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_3__["fireEvent"])(this, "flow-update", {
                stepPromise: this.flowConfig.fetchFlow(this.hass, this.step.flow_id),
            });
        }, "data_entry_flow_progressed");
        window.open(this.step.url);
    }
    static get styles() {
        return [
            _styles__WEBPACK_IMPORTED_MODULE_4__["configFlowContentStyles"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        .open-button {
          text-align: center;
          padding: 24px 0;
        }
        .open-button a {
          text-decoration: none;
        }
      `,
        ];
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], StepFlowExternal.prototype, "hass", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
], StepFlowExternal.prototype, "step", void 0);
StepFlowExternal = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-external")
], StepFlowExternal);


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











let StepFlowForm = class StepFlowForm extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._loading = false;
        this._labelCallback = (field) => this.flowConfig.renderShowFormStepFieldLabel(this.hass, this.step, field);
        this._errorCallback = (error) => this.flowConfig.renderShowFormStepFieldError(this.hass, this.step, error);
    }
    render() {
        const step = this.step;
        const stepData = this._stepDataProcessed;
        const allRequiredInfoFilledIn = stepData === undefined
            ? // If no data filled in, just check that any field is required
                step.data_schema.find((field) => !field.optional) === undefined
            : // If data is filled in, make sure all required fields are
                stepData &&
                    step.data_schema.every((field) => field.optional || !["", undefined].includes(stepData[field.name]));
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <h2>
        ${this.flowConfig.renderShowFormStepHeader(this.hass, this.step)}
      </h2>
      <div class="content">
        ${this._errorMsg
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="error">${this._errorMsg}</div>
            `
            : ""}
        ${this.flowConfig.renderShowFormStepDescription(this.hass, this.step)}
        <ha-form
          .data=${stepData}
          @data-changed=${this._stepDataChanged}
          .schema=${step.data_schema}
          .error=${step.errors}
          .computeLabel=${this._labelCallback}
          .computeError=${this._errorCallback}
        ></ha-form>
      </div>
      <div class="buttons">
        ${this._loading
            ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div class="submit-spinner">
                <paper-spinner active></paper-spinner>
              </div>
            `
            : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <div>
                <mwc-button
                  @click=${this._submitStep}
                  .disabled=${!allRequiredInfoFilledIn}
                >
                  Submit
                </mwc-button>

                ${!allRequiredInfoFilledIn
                ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
                      <paper-tooltip position="left">
                        Not all required fields are filled in.
                      </paper-tooltip>
                    `
                : lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] ``}
              </div>
            `}
      </div>
    `;
    }
    firstUpdated(changedProps) {
        super.firstUpdated(changedProps);
        this.addEventListener("keypress", (ev) => {
            if (ev.keyCode === 13) {
                this._submitStep();
            }
        });
    }
    get _stepDataProcessed() {
        if (this._stepData !== undefined) {
            return this._stepData;
        }
        const data = {};
        this.step.data_schema.forEach((field) => {
            if ("default" in field) {
                data[field.name] = field.default;
            }
        });
        return data;
    }
    async _submitStep() {
        this._loading = true;
        this._errorMsg = undefined;
        const flowId = this.step.flow_id;
        const stepData = this._stepData || {};
        const toSendData = {};
        Object.keys(stepData).forEach((key) => {
            const value = stepData[key];
            const isEmpty = [undefined, ""].includes(value);
            if (!isEmpty) {
                toSendData[key] = value;
            }
        });
        try {
            const step = await this.flowConfig.handleFlowStep(this.hass, this.step.flow_id, toSendData);
            // make sure we're still showing the same step as when we
            // fired off request.
            if (!this.step || flowId !== this.step.flow_id) {
                return;
            }
            Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_9__["fireEvent"])(this, "flow-update", {
                step,
            });
        }
        catch (err) {
            this._errorMsg =
                (err && err.body && err.body.message) || "Unknown error occurred";
        }
        finally {
            this._loading = false;
        }
    }
    _stepDataChanged(ev) {
        this._stepData = Object(_polymer_types__WEBPACK_IMPORTED_MODULE_8__["applyPolymerEvent"])(ev, this._stepData);
    }
    static get styles() {
        return [
            _styles__WEBPACK_IMPORTED_MODULE_10__["configFlowContentStyles"],
            lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
        .error {
          color: red;
        }

        .submit-spinner {
          margin-right: 16px;
        }
      `,
        ];
    }
};
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



let StepFlowLoading = class StepFlowLoading extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <div class="init-spinner">
        <paper-spinner-lite active></paper-spinner-lite>
      </div>
    `;
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      .init-spinner {
        padding: 50px 100px;
        text-align: center;
      }
    `;
    }
};
StepFlowLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("step-flow-loading")
], StepFlowLoading);


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











let StepFlowPickHandler = class StepFlowPickHandler extends lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"] {
    constructor() {
        super(...arguments);
        this._getHandlers = Object(memoize_one__WEBPACK_IMPORTED_MODULE_6__["default"])((h, filter) => {
            const handlers = h.map((handler) => {
                return {
                    name: this.hass.localize(`component.${handler}.config.title`),
                    slug: handler,
                };
            });
            if (filter) {
                const options = {
                    keys: ["name", "slug"],
                    caseSensitive: false,
                    minMatchCharLength: 2,
                    threshold: 0.2,
                };
                const fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_7__(handlers, options);
                return fuse.search(filter);
            }
            return handlers.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1);
        });
    }
    render() {
        const handlers = this._getHandlers(this.handlers, this.filter);
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
      <h2>${this.hass.localize("ui.panel.config.integrations.new")}</h2>
      <search-input
        .filter=${this.filter}
        @value-changed=${this._filterChanged}
      ></search-input>
      <div style=${Object(lit_html_directives_style_map__WEBPACK_IMPORTED_MODULE_10__["styleMap"])({ width: `${this._width}px` })}>
        ${handlers.map((handler) => lit_element__WEBPACK_IMPORTED_MODULE_1__["html"] `
              <paper-item @click=${this._handlerPicked} .handler=${handler}>
                <paper-item-body>
                  ${handler.name}
                </paper-item-body>
                <ha-icon-next></ha-icon-next>
              </paper-item>
            `)}
      </div>
    `;
    }
    updated(changedProps) {
        super.updated(changedProps);
        // Store the width so that when we search, box doesn't jump
        if (!this._width) {
            const width = this.shadowRoot.querySelector("div").clientWidth;
            if (width) {
                this._width = width;
            }
        }
    }
    async _filterChanged(e) {
        this.filter = e.detail.value;
    }
    async _handlerPicked(ev) {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "flow-update", {
            stepPromise: this.flowConfig.createFlow(this.hass, ev.currentTarget.handler.slug),
        });
    }
    static get styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_1__["css"] `
      h2 {
        margin-bottom: 2px;
        padding-left: 16px;
      }
      div {
        overflow: auto;
        max-height: 600px;
      }
      paper-item {
        cursor: pointer;
      }
    `;
    }
};
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
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");

const configFlowContentStyles = lit_element__WEBPACK_IMPORTED_MODULE_0__["css"] `
  h2 {
    margin-top: 24px;
    padding: 0 24px;
  }

  .content {
    margin-top: 20px;
    padding: 0 24px;
  }

  .buttons {
    position: relative;
    padding: 8px 8px 8px 24px;
    margin: 0;
    color: var(--primary-color);
    display: flex;
    justify-content: flex-end;
  }

  ha-markdown {
    overflow-wrap: break-word;
  }
  ha-markdown a {
    color: var(--primary-color);
  }
  ha-markdown img:first-child:last-child {
    display: block;
    margin: 0 auto;
  }
`;


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
const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(
  (superClass) =>
    class extends superClass {
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
      fire(type, detail, options) {
        options = options || {};
        return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
      }
    }
);


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
const applyPolymerEvent = (ev, curValue) => {
    const { path, value } = ev.detail;
    if (!path) {
        return value;
    }
    const propName = path.split(".")[1];
    return Object.assign(Object.assign({}, curValue), { [propName]: value });
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWNvbmZpZy1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zZWFyY2gvc2VhcmNoLWlucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLW5leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtbWFya2Rvd24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2FyZWFfcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L2RpYWxvZy1kYXRhLWVudHJ5LWZsb3cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWFib3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1jcmVhdGUtZW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3RlcC1mbG93LWV4dGVybmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1mb3JtLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1sb2FkaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3N0ZXAtZmxvdy1waWNrLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvY29uZmlnLWZsb3cvc3R5bGVzLnRzIiwid2VicGFjazovLy8uL3NyYy9taXhpbnMvZXZlbnRzLW1peGluLmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5bWVyLXR5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXHRcdFx0XHR2YXIgYWRkTWV0aG9kcyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13cmFwcGVyLmpzXCIpXG5cdFx0XHRcdHZhciBtZXRob2RzID0gW1wicmVuZGVyTWFya2Rvd25cIl1cblx0XHRcdFx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgdyA9IG5ldyBXb3JrZXIoX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjAzZmQ0OTBiMGNkMTQwY2RlMDk5Lndvcmtlci5qc1wiLCB7IG5hbWU6IFwiW2hhc2hdLndvcmtlci5qc1wiIH0pXG5cdFx0XHRcdFx0YWRkTWV0aG9kcyh3LCBtZXRob2RzKVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHJldHVybiB3XG5cdFx0XHRcdH1cblx0XHRcdCIsImltcG9ydCB7IFRlbXBsYXRlUmVzdWx0LCBodG1sIH0gZnJvbSBcImxpdC1odG1sXCI7XG5pbXBvcnQge1xuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgTGl0RWxlbWVudCxcbiAgcHJvcGVydHksXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5cbkBjdXN0b21FbGVtZW50KFwic2VhcmNoLWlucHV0XCIpXG5jbGFzcyBTZWFyY2hJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwcml2YXRlIGZpbHRlcj86IHN0cmluZztcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICBsYWJlbD1cIlNlYXJjaFwiXG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5maWx0ZXJ9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9maWx0ZXJJbnB1dENoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8aXJvbi1pY29uXG4gICAgICAgICAgICBpY29uPVwiaGFzczptYWduaWZ5XCJcbiAgICAgICAgICAgIHNsb3Q9XCJwcmVmaXhcIlxuICAgICAgICAgICAgY2xhc3M9XCJwcmVmaXhcIlxuICAgICAgICAgID48L2lyb24taWNvbj5cbiAgICAgICAgICAke3RoaXMuZmlsdGVyICYmXG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNsZWFyXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlckNoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcInZhbHVlLWNoYW5nZWRcIiwgeyB2YWx1ZTogU3RyaW5nKHZhbHVlKSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbHRlcklucHV0Q2hhbmdlZChlKSB7XG4gICAgdGhpcy5fZmlsdGVyQ2hhbmdlZChlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9jbGVhclNlYXJjaCgpIHtcbiAgICB0aGlzLl9maWx0ZXJDaGFuZ2VkKFwiXCIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICB9XG4gICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5wcmVmaXgge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzZWFyY2gtaW5wdXRcIjogU2VhcmNoSW5wdXQ7XG4gIH1cbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcblxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcblxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xuICAgIHJldHVybiBIYUlyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XG4gIH0sXG59O1xuXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxuLy8gZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZ1xuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kaWFsb2dcIjogSGFQYXBlckRpYWxvZztcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZGlhbG9nXCIsIEhhUGFwZXJEaWFsb2cpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItY2hlY2tib3gvcGFwZXItY2hlY2tib3hcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFGb3JtIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWNoZWNrYm94IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogMjJweCAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc0FycmF5KHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2Vycm9yLmJhc2VdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbY29tcHV0ZUVycm9yKGVycm9yLmJhc2UsIHNjaGVtYSldXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc2NoZW1hXV1cIj5cbiAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgZGF0YT1cIltbX2dldFZhbHVlKGRhdGEsIGl0ZW0pXV1cIlxuICAgICAgICAgICAgc2NoZW1hPVwiW1tpdGVtXV1cIlxuICAgICAgICAgICAgZXJyb3I9XCJbW19nZXRWYWx1ZShlcnJvciwgaXRlbSldXVwiXG4gICAgICAgICAgICBvbi1kYXRhLWNoYW5nZWQ9XCJfdmFsdWVDaGFuZ2VkXCJcbiAgICAgICAgICAgIGNvbXB1dGUtZXJyb3I9XCJbW2NvbXB1dGVFcnJvcl1dXCJcbiAgICAgICAgICAgIGNvbXB1dGUtbGFiZWw9XCJbW2NvbXB1dGVMYWJlbF1dXCJcbiAgICAgICAgICAgIGNvbXB1dGUtc3VmZml4PVwiW1tjb21wdXRlU3VmZml4XV1cIlxuICAgICAgICAgID48L2hhLWZvcm0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfaXNBcnJheShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvcl1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+W1tjb21wdXRlRXJyb3IoZXJyb3IsIHNjaGVtYSldXTwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcInN0cmluZ1wiKV1dJ1xuICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj0nW1tfaW5jbHVkZXMoc2NoZW1hLm5hbWUsIFwicGFzc3dvcmRcIildXSdcbiAgICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiW1tfcGFzc3dvcmRGaWVsZFR5cGUodW5tYXNrZWRQYXNzd29yZCldXVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgdG9nZ2xlc1xuICAgICAgICAgICAgICAgIGFjdGl2ZT1cInt7dW5tYXNrZWRQYXNzd29yZH19XCJcbiAgICAgICAgICAgICAgICBzbG90PVwic3VmZml4XCJcbiAgICAgICAgICAgICAgICBpY29uPVwiW1tfcGFzc3dvcmRGaWVsZEljb24odW5tYXNrZWRQYXNzd29yZCldXVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpY29uQnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNsaWNrIHRvIHRvZ2dsZSBiZXR3ZWVuIG1hc2tlZCBhbmQgY2xlYXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICBpZj0nW1shX2luY2x1ZGVzKHNjaGVtYS5uYW1lLCBcInBhc3N3b3JkXCIpXV0nXG4gICAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJpbnRlZ2VyXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2lzUmFuZ2Uoc2NoZW1hKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXG4gICAgICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgICAgICBwaW49XCJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc2NoZW1hLnZhbHVlTWluXV1cIlxuICAgICAgICAgICAgICAgIG1heD1cIltbc2NoZW1hLnZhbHVlTWF4XV1cIlxuICAgICAgICAgICAgICA+PC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2lzUmFuZ2Uoc2NoZW1hKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICA+PC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwiZmxvYXRcIildXScgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgIDwhLS0gVE9ETyAtLT5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPltbY29tcHV0ZVN1ZmZpeChzY2hlbWEpXV08L3NwYW4+XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJib29sZWFuXCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94IGNoZWNrZWQ9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgID5bW2NvbXB1dGVMYWJlbChzY2hlbWEpXV08L3BhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwic2VsZWN0XCIpXV0nXG4gICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudSBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYS5vcHRpb25zXV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tfb3B0aW9uVmFsdWUoaXRlbSldXVwiXG4gICAgICAgICAgICAgICAgICA+W1tfb3B0aW9uTGFiZWwoaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgc2NoZW1hOiBPYmplY3QsXG4gICAgICBlcnJvcjogT2JqZWN0LFxuXG4gICAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgdGhlIGxhYmVsIHRvIGJlIGRpc3BsYXllZCBmb3IgYSBnaXZlblxuICAgICAgLy8gc2NoZW1hIG9iamVjdC5cbiAgICAgIGNvbXB1dGVMYWJlbDoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6ICgpID0+IChzY2hlbWEpID0+IHNjaGVtYSAmJiBzY2hlbWEubmFtZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIEEgZnVuY3Rpb24gdGhhdCBjb21wdXRlcyB0aGUgc3VmZml4IHRvIGJlIGRpc3BsYXllZCBmb3IgYSBnaXZlblxuICAgICAgLy8gc2NoZW1hIG9iamVjdC5cbiAgICAgIGNvbXB1dGVTdWZmaXg6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiAoKSA9PiAoc2NoZW1hKSA9PlxuICAgICAgICAgIHNjaGVtYSAmJlxuICAgICAgICAgIHNjaGVtYS5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHNjaGVtYS5kZXNjcmlwdGlvbi51bml0X29mX21lYXN1cmVtZW50LFxuICAgICAgfSxcblxuICAgICAgLy8gQSBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIGFuIGVycm9yIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkIGZvciBhXG4gICAgICAvLyBnaXZlbiBlcnJvciBJRCwgYW5kIHJlbGV2YW50IHNjaGVtYSBvYmplY3RcbiAgICAgIGNvbXB1dGVFcnJvcjoge1xuICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgdmFsdWU6ICgpID0+IChlcnJvciwgc2NoZW1hKSA9PiBlcnJvciwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZm9jdXMoKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiaGEtZm9ybSwgcGFwZXItaW5wdXQsIGhhLXBhcGVyLXNsaWRlciwgcGFwZXItY2hlY2tib3gsIHBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuICAgICk7XG5cbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIF9pc0FycmF5KHZhbCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG4gIH1cblxuICBfaXNSYW5nZShzY2hlbWEpIHtcbiAgICByZXR1cm4gXCJ2YWx1ZU1pblwiIGluIHNjaGVtYSAmJiBcInZhbHVlTWF4XCIgaW4gc2NoZW1hO1xuICB9XG5cbiAgX2VxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICBfaW5jbHVkZXMoYSwgYikge1xuICAgIHJldHVybiBhLmluZGV4T2YoYikgPj0gMDtcbiAgfVxuXG4gIF9nZXRWYWx1ZShvYmosIGl0ZW0pIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqW2l0ZW0ubmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgX3ZhbHVlQ2hhbmdlZChldikge1xuICAgIGxldCB2YWx1ZSA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoZXYubW9kZWwuaXRlbS50eXBlID09PSBcImludGVnZXJcIikge1xuICAgICAgdmFsdWUgPSBOdW1iZXIoZXYuZGV0YWlsLnZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXQoW1wiZGF0YVwiLCBldi5tb2RlbC5pdGVtLm5hbWVdLCB2YWx1ZSk7XG4gIH1cblxuICBfcGFzc3dvcmRGaWVsZFR5cGUodW5tYXNrZWRQYXNzd29yZCkge1xuICAgIHJldHVybiB1bm1hc2tlZFBhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCI7XG4gIH1cblxuICBfcGFzc3dvcmRGaWVsZEljb24odW5tYXNrZWRQYXNzd29yZCkge1xuICAgIHJldHVybiB1bm1hc2tlZFBhc3N3b3JkID8gXCJoYXNzOmV5ZS1vZmZcIiA6IFwiaGFzczpleWVcIjtcbiAgfVxuXG4gIF9vcHRpb25WYWx1ZShpdGVtKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtWzBdIDogaXRlbTtcbiAgfVxuXG4gIF9vcHRpb25MYWJlbChpdGVtKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaXRlbSkgPyBpdGVtWzFdIDogaXRlbTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1mb3JtXCIsIEhhRm9ybSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhSWNvbiB9IGZyb20gXCIuL2hhLWljb25cIjtcblxuZXhwb3J0IGNsYXNzIEhhSWNvbk5leHQgZXh0ZW5kcyBIYUljb24ge1xuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaWNvbiA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICAgID8gXCJoYXNzOmNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgIDogXCJoYXNzOmNoZXZyb24tbGVmdFwiO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWljb24tbmV4dFwiOiBIYUljb25OZXh0O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWljb24tbmV4dFwiLCBIYUljb25OZXh0KTtcbiIsImltcG9ydCB7IFVwZGF0aW5nRWxlbWVudCwgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4XG4vLyBAdHMtaWdub3JlXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcGxpY2l0LWRlcGVuZGVuY2llc1xuaW1wb3J0IG1hcmtkb3duV29ya2VyIGZyb20gXCJ3b3JrZXJpemUtbG9hZGVyIS4uL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXJcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxubGV0IHdvcmtlcjogYW55IHwgdW5kZWZpbmVkO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLW1hcmtkb3duXCIpXG5jbGFzcyBIYU1hcmtkb3duIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbnRlbnQgPSBcIlwiO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhbGxvd1N2ZyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXdvcmtlcikge1xuICAgICAgd29ya2VyID0gbWFya2Rvd25Xb3JrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbmRlcigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IGF3YWl0IHdvcmtlci5yZW5kZXJNYXJrZG93bihcbiAgICAgIHRoaXMuY29udGVudCxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICBnZm06IHRydWUsXG4gICAgICAgIHRhYmxlczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsbG93U3ZnOiB0aGlzLmFsbG93U3ZnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLl9yZXNpemUoKTtcblxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICB0aGlzLFxuICAgICAgMSAvKiBTSE9XX0VMRU1FTlQgKi8sXG4gICAgICBudWxsLFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuXG4gICAgICAvLyBPcGVuIGV4dGVybmFsIGxpbmtzIGluIGEgbmV3IHdpbmRvd1xuICAgICAgaWYgKFxuICAgICAgICBub2RlIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiZcbiAgICAgICAgbm9kZS5ob3N0ICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0XG4gICAgICApIHtcbiAgICAgICAgbm9kZS50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgICAgIC8vIHByb3RlY3QgcmVmZXJyZXIgb24gZXh0ZXJuYWwgbGlua3MgYW5kIGRlbnkgd2luZG93Lm9wZW5lciBhY2Nlc3MgZm9yIHNlY3VyaXR5IHJlYXNvbnNcbiAgICAgICAgLy8gKHNlZSBodHRwczovL21hdGhpYXNieW5lbnMuZ2l0aHViLmlvL3JlbC1ub29wZW5lci8pXG4gICAgICAgIG5vZGUucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG5cbiAgICAgICAgLy8gRmlyZSBhIHJlc2l6ZSBldmVudCB3aGVuIGltYWdlcyBsb2FkZWQgdG8gbm90aWZ5IGNvbnRlbnQgcmVzaXplZFxuICAgICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5fcmVzaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNpemUgPSAoKSA9PiBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLW1hcmtkb3duXCI6IEhhTWFya2Rvd247XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNsaWRlci9wYXBlci1zbGlkZXJcIjtcblxuLyoqXG4gKiBAcG9seW1lclxuICogQGN1c3RvbUVsZW1lbnRcbiAqIEBhcHBsaWVzTWl4aW4gcGFwZXItc2xpZGVyXG4gKi9cbmNvbnN0IFBhcGVyU2xpZGVyQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1zbGlkZXJcIik7XG5cbmNsYXNzIEhhUGFwZXJTbGlkZXIgZXh0ZW5kcyBQYXBlclNsaWRlckNsYXNzIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0cGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG4gICAgdHBsLmlubmVySFRNTCA9IFBhcGVyU2xpZGVyQ2xhc3MudGVtcGxhdGUuaW5uZXJIVE1MO1xuICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgc3R5bGVFbC5pbm5lckhUTUwgPSBgXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAgdmFyKC0taGEtcGFwZXItc2xpZGVyLXBpbi1mb250LXNpemUsIDEwcHgpO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICAucGluID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG5cbiAgICAgICAgYm90dG9tOiBjYWxjKDE1cHggKyB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXNsaWRlci1oZWlnaHQpLzIpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHdpZHRoOiAyLjJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjJlbTtcblxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSkgdHJhbnNsYXRlKDdweCwgLTdweCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgdG9wOiB1bnNldDtcbiAgICAgICAgZm9udC1zaXplOiB1bnNldDtcblxuICAgICAgICBib3R0b206IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xLjFlbTtcbiAgICAgICAgd2lkdGg6IDIuMmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMWVtO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB9XG5cbiAgICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTEwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXI9XCJydGxcIl0pIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGUoMCwgLTE3cHgpIHNjYWxlWCgtMSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIGA7XG4gICAgdHBsLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgcmV0dXJuIHRwbDtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItc2xpZGVyXCIsIEhhUGFwZXJTbGlkZXIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvbXBhcmUgfSBmcm9tIFwiLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFyZWFSZWdpc3RyeUVudHJ5IHtcbiAgYXJlYV9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogQXJlYVJlZ2lzdHJ5RW50cnlNdXRhYmxlUGFyYW1zXG4pID0+XG4gIGhhc3MuY2FsbFdTPEFyZWFSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9jcmVhdGVcIixcbiAgICAuLi52YWx1ZXMsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJlYVJlZ2lzdHJ5RW50cnkgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGFyZWFJZDogc3RyaW5nLFxuICB1cGRhdGVzOiBQYXJ0aWFsPEFyZWFSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8QXJlYVJlZ2lzdHJ5RW50cnk+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGFyZWFfaWQ6IGFyZWFJZCxcbiAgICAuLi51cGRhdGVzLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUFyZWFSZWdpc3RyeUVudHJ5ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGFyZWFJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb25maWcvYXJlYV9yZWdpc3RyeS9kZWxldGVcIixcbiAgICBhcmVhX2lkOiBhcmVhSWQsXG4gIH0pO1xuXG5jb25zdCBmZXRjaEFyZWFSZWdpc3RyeSA9IChjb25uKSA9PlxuICBjb25uXG4gICAgLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgICB0eXBlOiBcImNvbmZpZy9hcmVhX3JlZ2lzdHJ5L2xpc3RcIixcbiAgICB9KVxuICAgIC50aGVuKChhcmVhcykgPT4gYXJlYXMuc29ydCgoZW50MSwgZW50MikgPT4gY29tcGFyZShlbnQxLm5hbWUsIGVudDIubmFtZSkpKTtcblxuY29uc3Qgc3Vic2NyaWJlQXJlYVJlZ2lzdHJ5VXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgZGVib3VuY2UoXG4gICAgICAoKSA9PlxuICAgICAgICBmZXRjaEFyZWFSZWdpc3RyeShjb25uKS50aGVuKChhcmVhcykgPT4gc3RvcmUuc2V0U3RhdGUoYXJlYXMsIHRydWUpKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiYXJlYV9yZWdpc3RyeV91cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUFyZWFSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChhcmVhczogQXJlYVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEFyZWFSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2FyZWFSZWdpc3RyeVwiLFxuICAgIGZldGNoQXJlYVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUFyZWFSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVnaXN0cnlFbnRyeSB7XG4gIGlkOiBzdHJpbmc7XG4gIGNvbmZpZ19lbnRyaWVzOiBzdHJpbmdbXTtcbiAgY29ubmVjdGlvbnM6IEFycmF5PFtzdHJpbmcsIHN0cmluZ10+O1xuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN3X3ZlcnNpb24/OiBzdHJpbmc7XG4gIHZpYV9kZXZpY2VfaWQ/OiBzdHJpbmc7XG4gIGFyZWFfaWQ/OiBzdHJpbmc7XG4gIG5hbWVfYnlfdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcyB7XG4gIGFyZWFfaWQ/OiBzdHJpbmcgfCBudWxsO1xuICBuYW1lX2J5X3VzZXI/OiBzdHJpbmcgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZGV2aWNlSWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxEZXZpY2VSZWdpc3RyeUVudHJ5TXV0YWJsZVBhcmFtcz5cbikgPT5cbiAgaGFzcy5jYWxsV1M8RGV2aWNlUmVnaXN0cnlFbnRyeT4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2RldmljZV9yZWdpc3RyeS91cGRhdGVcIixcbiAgICBkZXZpY2VfaWQ6IGRldmljZUlkLFxuICAgIC4uLnVwZGF0ZXMsXG4gIH0pO1xuXG5jb25zdCBmZXRjaERldmljZVJlZ2lzdHJ5ID0gKGNvbm4pID0+XG4gIGNvbm4uc2VuZE1lc3NhZ2VQcm9taXNlKHtcbiAgICB0eXBlOiBcImNvbmZpZy9kZXZpY2VfcmVnaXN0cnkvbGlzdFwiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlRGV2aWNlUmVnaXN0cnlVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICBkZWJvdW5jZShcbiAgICAgICgpID0+XG4gICAgICAgIGZldGNoRGV2aWNlUmVnaXN0cnkoY29ubikudGhlbigoZGV2aWNlcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShkZXZpY2VzLCB0cnVlKVxuICAgICAgICApLFxuICAgICAgNTAwLFxuICAgICAgdHJ1ZVxuICAgICksXG4gICAgXCJkZXZpY2VfcmVnaXN0cnlfdXBkYXRlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeSA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChkZXZpY2VzOiBEZXZpY2VSZWdpc3RyeUVudHJ5W10pID0+IHZvaWRcbikgPT5cbiAgY3JlYXRlQ29sbGVjdGlvbjxEZXZpY2VSZWdpc3RyeUVudHJ5W10+KFxuICAgIFwiX2RyXCIsXG4gICAgZmV0Y2hEZXZpY2VSZWdpc3RyeSxcbiAgICBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeVVwZGF0ZXMsXG4gICAgY29ubixcbiAgICBvbkNoYW5nZVxuICApO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXRvb2x0aXAvcGFwZXItdG9vbHRpcFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtZm9ybVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbi8vIE5vdCBkdXBsaWNhdGUsIGlzIGZvciB0eXBpbmdcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSGFQYXBlckRpYWxvZyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IHsgUG9seW1lckNoYW5nZWRFdmVudCB9IGZyb20gXCIuLi8uLi9wb2x5bWVyLXR5cGVzXCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93RGlhbG9nUGFyYW1zIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5cbmltcG9ydCBcIi4vc3RlcC1mbG93LXBpY2staGFuZGxlclwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctbG9hZGluZ1wiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctZm9ybVwiO1xuaW1wb3J0IFwiLi9zdGVwLWZsb3ctZXh0ZXJuYWxcIjtcbmltcG9ydCBcIi4vc3RlcC1mbG93LWFib3J0XCI7XG5pbXBvcnQgXCIuL3N0ZXAtZmxvdy1jcmVhdGUtZW50cnlcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHN1YnNjcmliZURldmljZVJlZ2lzdHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9kZXZpY2VfcmVnaXN0cnlcIjtcbmltcG9ydCB7XG4gIEFyZWFSZWdpc3RyeUVudHJ5LFxuICBzdWJzY3JpYmVBcmVhUmVnaXN0cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2FyZWFfcmVnaXN0cnlcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5cbmxldCBpbnN0YW5jZSA9IDA7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwiZmxvdy11cGRhdGVcIjoge1xuICAgICAgc3RlcD86IERhdGFFbnRyeUZsb3dTdGVwO1xuICAgICAgc3RlcFByb21pc2U/OiBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPjtcbiAgICB9O1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KFwiZGlhbG9nLWRhdGEtZW50cnktZmxvd1wiKVxuY2xhc3MgRGF0YUVudHJ5Rmxvd0RpYWxvZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXM7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2xvYWRpbmcgPSB0cnVlO1xuICBwcml2YXRlIF9pbnN0YW5jZSA9IGluc3RhbmNlO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9zdGVwOlxuICAgIHwgRGF0YUVudHJ5Rmxvd1N0ZXBcbiAgICB8IHVuZGVmaW5lZFxuICAgIC8vIE51bGwgbWVhbnMgd2UgbmVlZCB0byBwaWNrIGEgY29uZmlnIGZsb3dcbiAgICB8IG51bGw7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2RldmljZXM/OiBEZXZpY2VSZWdpc3RyeUVudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2FyZWFzPzogQXJlYVJlZ2lzdHJ5RW50cnlbXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfaGFuZGxlcnM/OiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfdW5zdWJBcmVhcz86IFVuc3Vic2NyaWJlRnVuYztcbiAgcHJpdmF0ZSBfdW5zdWJEZXZpY2VzPzogVW5zdWJzY3JpYmVGdW5jO1xuXG4gIHB1YmxpYyBhc3luYyBzaG93RGlhbG9nKHBhcmFtczogRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGluc3RhbmNlKys7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgY29uZmlnIGZsb3cuIFNob3cgcGlja2VyXG4gICAgaWYgKCFwYXJhbXMuY29udGludWVGbG93SWQgJiYgIXBhcmFtcy5zdGFydEZsb3dIYW5kbGVyKSB7XG4gICAgICBpZiAoIXBhcmFtcy5mbG93Q29uZmlnLmdldEZsb3dIYW5kbGVycykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBnZXRGbG93SGFuZGxlcnMgZGVmaW5lZCBpbiBmbG93IGNvbmZpZ1wiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N0ZXAgPSBudWxsO1xuXG4gICAgICAvLyBXZSBvbmx5IGxvYWQgdGhlIGhhbmRsZXJzIG9uY2VcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4oKCkgPT4gdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBhd2FpdCBwYXJhbXMuZmxvd0NvbmZpZy5nZXRGbG93SGFuZGxlcnModGhpcy5oYXNzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7XG4gICAgICB0aGlzLl9zY2hlZHVsZUNlbnRlckRpYWxvZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGN1ckluc3RhbmNlID0gdGhpcy5faW5zdGFuY2U7XG4gICAgY29uc3Qgc3RlcCA9IGF3YWl0IChwYXJhbXMuY29udGludWVGbG93SWRcbiAgICAgID8gcGFyYW1zLmZsb3dDb25maWcuZmV0Y2hGbG93KHRoaXMuaGFzcywgcGFyYW1zLmNvbnRpbnVlRmxvd0lkKVxuICAgICAgOiBwYXJhbXMuZmxvd0NvbmZpZy5jcmVhdGVGbG93KHRoaXMuaGFzcywgcGFyYW1zLnN0YXJ0Rmxvd0hhbmRsZXIhKSk7XG5cbiAgICAvLyBIYXBwZW5zIGlmIHNlY29uZCBzaG93RGlhbG9nIGNhbGxlZFxuICAgIGlmIChjdXJJbnN0YW5jZSAhPT0gdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wcm9jZXNzU3RlcChzdGVwKTtcbiAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gV2hlbiB0aGUgZmxvdyBjaGFuZ2VzLCBjZW50ZXIgdGhlIGRpYWxvZy5cbiAgICAvLyBEb24ndCBkbyBpdCBvbiBlYWNoIHN0ZXAgb3IgZWxzZSB0aGUgZGlhbG9nIGtlZXBzIGJvdW5jaW5nLlxuICAgIHRoaXMuX3NjaGVkdWxlQ2VudGVyRGlhbG9nKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIHdpdGgtYmFja2Ryb3BcbiAgICAgICAgb3BlbmVkXG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICA+XG4gICAgICAgICR7dGhpcy5fbG9hZGluZyB8fCAodGhpcy5fc3RlcCA9PT0gbnVsbCAmJiB0aGlzLl9oYW5kbGVycyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1sb2FkaW5nPjwvc3RlcC1mbG93LWxvYWRpbmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiB0aGlzLl9zdGVwID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IC8vIFdoZW4gd2UgYXJlIGdvaW5nIHRvIG5leHQgc3RlcCwgd2UgcmVuZGVyIDEgcm91bmQgb2YgZW1wdHlcbiAgICAgICAgICAgIC8vIHRvIHJlc2V0IHRoZSBlbGVtZW50LlxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgIDogdGhpcy5fc3RlcCA9PT0gbnVsbFxuICAgICAgICAgID8gLy8gU2hvdyBoYW5kbGVyIHBpY2tlclxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1waWNrLWhhbmRsZXJcbiAgICAgICAgICAgICAgICAuZmxvd0NvbmZpZz0ke3RoaXMuX3BhcmFtcy5mbG93Q29uZmlnfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgIC5oYW5kbGVycz0ke3RoaXMuX2hhbmRsZXJzfVxuICAgICAgICAgICAgICA+PC9zdGVwLWZsb3ctcGljay1oYW5kbGVyPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fc3RlcC50eXBlID09PSBcImZvcm1cIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1mb3JtXG4gICAgICAgICAgICAgICAgLmZsb3dDb25maWc9JHt0aGlzLl9wYXJhbXMuZmxvd0NvbmZpZ31cbiAgICAgICAgICAgICAgICAuc3RlcD0ke3RoaXMuX3N0ZXB9XG4gICAgICAgICAgICAgICAgLmhhc3M9JHt0aGlzLmhhc3N9XG4gICAgICAgICAgICAgID48L3N0ZXAtZmxvdy1mb3JtPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fc3RlcC50eXBlID09PSBcImV4dGVybmFsXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxzdGVwLWZsb3ctZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAuZmxvd0NvbmZpZz0ke3RoaXMuX3BhcmFtcy5mbG93Q29uZmlnfVxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWV4dGVybmFsPlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fc3RlcC50eXBlID09PSBcImFib3J0XCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxzdGVwLWZsb3ctYWJvcnRcbiAgICAgICAgICAgICAgICAuZmxvd0NvbmZpZz0ke3RoaXMuX3BhcmFtcy5mbG93Q29uZmlnfVxuICAgICAgICAgICAgICAgIC5zdGVwPSR7dGhpcy5fc3RlcH1cbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWFib3J0PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogdGhpcy5fZGV2aWNlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2FyZWFzID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IC8vIFdoZW4gaXQncyBhIGNyZWF0ZSBlbnRyeSByZXN1bHQsIHdlIHdpbGwgZmV0Y2ggZGV2aWNlICYgYXJlYSByZWdpc3RyeVxuICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgPHN0ZXAtZmxvdy1sb2FkaW5nPjwvc3RlcC1mbG93LWxvYWRpbmc+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBodG1sYFxuICAgICAgICAgICAgICA8c3RlcC1mbG93LWNyZWF0ZS1lbnRyeVxuICAgICAgICAgICAgICAgIC5mbG93Q29uZmlnPSR7dGhpcy5fcGFyYW1zLmZsb3dDb25maWd9XG4gICAgICAgICAgICAgICAgLnN0ZXA9JHt0aGlzLl9zdGVwfVxuICAgICAgICAgICAgICAgIC5oYXNzPSR7dGhpcy5oYXNzfVxuICAgICAgICAgICAgICAgIC5kZXZpY2VzPSR7dGhpcy5fZGV2aWNlc31cbiAgICAgICAgICAgICAgICAuYXJlYXM9JHt0aGlzLl9hcmVhc31cbiAgICAgICAgICAgICAgPjwvc3RlcC1mbG93LWNyZWF0ZS1lbnRyeT5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiZmxvdy11cGRhdGVcIiwgKGV2KSA9PiB7XG4gICAgICBjb25zdCB7IHN0ZXAsIHN0ZXBQcm9taXNlIH0gPSAoZXYgYXMgYW55KS5kZXRhaWw7XG4gICAgICB0aGlzLl9wcm9jZXNzU3RlcChzdGVwIHx8IHN0ZXBQcm9taXNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VkUHJvcHMuaGFzKFwiX3N0ZXBcIikgJiZcbiAgICAgIHRoaXMuX3N0ZXAgJiZcbiAgICAgIHRoaXMuX3N0ZXAudHlwZSA9PT0gXCJjcmVhdGVfZW50cnlcIlxuICAgICkge1xuICAgICAgaWYgKHRoaXMuX3BhcmFtcyEuZmxvd0NvbmZpZy5sb2FkRGV2aWNlc0FuZEFyZWFzKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoRGV2aWNlcyh0aGlzLl9zdGVwLnJlc3VsdCk7XG4gICAgICAgIHRoaXMuX2ZldGNoQXJlYXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2RldmljZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fYXJlYXMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcIl9kZXZpY2VzXCIpICYmIHRoaXMuX2RpYWxvZykge1xuICAgICAgdGhpcy5fc2NoZWR1bGVDZW50ZXJEaWFsb2coKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zY2hlZHVsZUNlbnRlckRpYWxvZygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2RpYWxvZy5jZW50ZXIoKSwgMCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfZGlhbG9nKCk6IEhhUGFwZXJEaWFsb2cge1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJoYS1wYXBlci1kaWFsb2dcIikhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmV0Y2hEZXZpY2VzKGNvbmZpZ0VudHJ5SWQpIHtcbiAgICB0aGlzLl91bnN1YkRldmljZXMgPSBzdWJzY3JpYmVEZXZpY2VSZWdpc3RyeShcbiAgICAgIHRoaXMuaGFzcy5jb25uZWN0aW9uLFxuICAgICAgKGRldmljZXMpID0+IHtcbiAgICAgICAgdGhpcy5fZGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKChkZXZpY2UpID0+XG4gICAgICAgICAgZGV2aWNlLmNvbmZpZ19lbnRyaWVzLmluY2x1ZGVzKGNvbmZpZ0VudHJ5SWQpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQXJlYXMoKSB7XG4gICAgdGhpcy5fdW5zdWJBcmVhcyA9IHN1YnNjcmliZUFyZWFSZWdpc3RyeSh0aGlzLmhhc3MuY29ubmVjdGlvbiwgKGFyZWFzKSA9PiB7XG4gICAgICB0aGlzLl9hcmVhcyA9IGFyZWFzO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcHJvY2Vzc1N0ZXAoXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXAgfCB1bmRlZmluZWQgfCBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPlxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoc3RlcCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fc3RlcCA9IGF3YWl0IHN0ZXA7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fZmxvd0RvbmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc3RlcCA9IHVuZGVmaW5lZDtcbiAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlO1xuICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmxvd0RvbmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9wYXJhbXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZmxvd0ZpbmlzaGVkID0gQm9vbGVhbihcbiAgICAgIHRoaXMuX3N0ZXAgJiYgW1wiY3JlYXRlX2VudHJ5XCIsIFwiYWJvcnRcIl0uaW5jbHVkZXModGhpcy5fc3RlcC50eXBlKVxuICAgICk7XG5cbiAgICAvLyBJZiB3ZSBjcmVhdGVkIHRoaXMgZmxvdywgZGVsZXRlIGl0IG5vdy5cbiAgICBpZiAodGhpcy5fc3RlcCAmJiAhZmxvd0ZpbmlzaGVkICYmICF0aGlzLl9wYXJhbXMuY29udGludWVGbG93SWQpIHtcbiAgICAgIHRoaXMuX3BhcmFtcy5mbG93Q29uZmlnLmRlbGV0ZUZsb3codGhpcy5oYXNzLCB0aGlzLl9zdGVwLmZsb3dfaWQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJhbXMuZGlhbG9nQ2xvc2VkQ2FsbGJhY2spIHtcbiAgICAgIHRoaXMuX3BhcmFtcy5kaWFsb2dDbG9zZWRDYWxsYmFjayh7XG4gICAgICAgIGZsb3dGaW5pc2hlZCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3N0ZXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2RldmljZXMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHRoaXMuX3Vuc3ViQXJlYXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViQXJlYXMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViQXJlYXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl91bnN1YkRldmljZXMpIHtcbiAgICAgIHRoaXMuX3Vuc3ViRGV2aWNlcygpO1xuICAgICAgdGhpcy5fdW5zdWJEZXZpY2VzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wZW5lZENoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8Ym9vbGVhbj4pOiB2b2lkIHtcbiAgICAvLyBDbG9zZWQgZGlhbG9nIGJ5IGNsaWNraW5nIG9uIHRoZSBvdmVybGF5XG4gICAgaWYgKCFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9zdGVwKSB7XG4gICAgICAgIHRoaXMuX2Zsb3dEb25lKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0ZXAgPT09IG51bGwpIHtcbiAgICAgICAgLy8gRmxvdyBhYm9ydGVkIGR1cmluZyBwaWNraW5nIGZsb3dcbiAgICAgICAgdGhpcy5fc3RlcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdEFycmF5IHtcbiAgICByZXR1cm4gW1xuICAgICAgaGFTdHlsZURpYWxvZyxcbiAgICAgIGNzc2BcbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyA+ICoge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICBgLFxuICAgIF07XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjogRGF0YUVudHJ5Rmxvd0RpYWxvZztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcblxuaW1wb3J0IHsgRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydCB9IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7IEZsb3dDb25maWcgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctYWJvcnRcIilcbmNsYXNzIFN0ZXBGbG93QWJvcnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGZsb3dDb25maWchOiBGbG93Q29uZmlnO1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIHN0ZXAhOiBEYXRhRW50cnlGbG93U3RlcEFib3J0O1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5BYm9ydGVkPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlckFib3J0RGVzY3JpcHRpb24odGhpcy5oYXNzLCB0aGlzLnN0ZXApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2Zsb3dEb25lfVwiPkNsb3NlPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgX2Zsb3dEb25lKCk6IHZvaWQge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImZsb3ctdXBkYXRlXCIsIHsgc3RlcDogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY29uZmlnRmxvd0NvbnRlbnRTdHlsZXM7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1hYm9ydFwiOiBTdGVwRmxvd0Fib3J0O1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCB7XG4gIERldmljZVJlZ2lzdHJ5RW50cnksXG4gIHVwZGF0ZURldmljZVJlZ2lzdHJ5RW50cnksXG59IGZyb20gXCIuLi8uLi9kYXRhL2RldmljZV9yZWdpc3RyeVwiO1xuaW1wb3J0IHtcbiAgQXJlYVJlZ2lzdHJ5RW50cnksXG4gIGNyZWF0ZUFyZWFSZWdpc3RyeUVudHJ5LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9hcmVhX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcENyZWF0ZUVudHJ5IH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBGbG93Q29uZmlnIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWNyZWF0ZS1lbnRyeVwiKVxuY2xhc3MgU3RlcEZsb3dDcmVhdGVFbnRyeSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgZmxvd0NvbmZpZyE6IEZsb3dDb25maWc7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHB1YmxpYyBzdGVwITogRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeTtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgZGV2aWNlcyE6IERldmljZVJlZ2lzdHJ5RW50cnlbXTtcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgYXJlYXMhOiBBcmVhUmVnaXN0cnlFbnRyeVtdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBsb2NhbGl6ZSA9IHRoaXMuaGFzcy5sb2NhbGl6ZTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPlN1Y2Nlc3MhPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICR7dGhpcy5mbG93Q29uZmlnLnJlbmRlckNyZWF0ZUVudHJ5RGVzY3JpcHRpb24odGhpcy5oYXNzLCB0aGlzLnN0ZXApfVxuICAgICAgICAke3RoaXMuZGV2aWNlcy5sZW5ndGggPT09IDBcbiAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICAgIDxwPldlIGZvdW5kIHRoZSBmb2xsb3dpbmcgZGV2aWNlczo8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXZpY2VzXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmRldmljZXMubWFwKFxuICAgICAgICAgICAgICAgICAgKGRldmljZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2aWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ke2RldmljZS5uYW1lfTwvYj48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXZpY2UubW9kZWx9ICgke2RldmljZS5tYW51ZmFjdHVyZXJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItZHJvcGRvd24tbWVudS1saWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV2aWNlPSR7ZGV2aWNlLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBAc2VsZWN0ZWQtaXRlbS1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlQXJlYUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCIgc2VsZWN0ZWQ9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2xvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2VudHJ5Lm5vX2FyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmFyZWFzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcmVhKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSAuYXJlYT0ke2FyZWEuYXJlYV9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHthcmVhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICR7dGhpcy5kZXZpY2VzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uIEBjbGljaz1cIiR7dGhpcy5fYWRkQXJlYX1cIj5BZGQgQXJlYTwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPVwiJHt0aGlzLl9mbG93RG9uZX1cIj5GaW5pc2g8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmxvd0RvbmUoKTogdm9pZCB7XG4gICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwgeyBzdGVwOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9hZGRBcmVhKCkge1xuICAgIGNvbnN0IG5hbWUgPSBwcm9tcHQoXCJOYW1lIG9mIHRoZSBuZXcgYXJlYT9cIik7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhcmVhID0gYXdhaXQgY3JlYXRlQXJlYVJlZ2lzdHJ5RW50cnkodGhpcy5oYXNzLCB7XG4gICAgICAgIG5hbWUsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXJlYXMgPSBbLi4udGhpcy5hcmVhcywgYXJlYV07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcIkZhaWxlZCB0byBjcmVhdGUgYXJlYS5cIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlQXJlYUNoYW5nZWQoZXY6IEV2ZW50KSB7XG4gICAgY29uc3QgZHJvcGRvd24gPSBldi5jdXJyZW50VGFyZ2V0IGFzIGFueTtcbiAgICBjb25zdCBkZXZpY2UgPSBkcm9wZG93bi5kZXZpY2U7XG5cbiAgICAvLyBJdGVtIGZpcnN0IGJlY29tZXMgbnVsbCwgdGhlbiBuZXcgaXRlbS5cbiAgICBpZiAoIWRyb3Bkb3duLnNlbGVjdGVkSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFyZWEgPSBkcm9wZG93bi5zZWxlY3RlZEl0ZW0uYXJlYTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgdXBkYXRlRGV2aWNlUmVnaXN0cnlFbnRyeSh0aGlzLmhhc3MsIGRldmljZSwge1xuICAgICAgICBhcmVhX2lkOiBhcmVhLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgRXJyb3Igc2F2aW5nIGFyZWE6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICBkcm9wZG93bi52YWx1ZSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBjb25maWdGbG93Q29udGVudFN0eWxlcyxcbiAgICAgIGNzc2BcbiAgICAgICAgLmRldmljZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbjogLTRweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5kZXZpY2Uge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9ucyA+ICo6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudS1saWdodCB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSwgYWxsIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAgICAgICAuZGV2aWNlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctY3JlYXRlLWVudHJ5XCI6IFN0ZXBGbG93Q3JlYXRlRW50cnk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjdXN0b21FbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0QXJyYXksXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBjb25maWdGbG93Q29udGVudFN0eWxlcyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IHtcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbCxcbiAgRGF0YUVudHJ5Rmxvd1Byb2dyZXNzZWRFdmVudCxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBGbG93Q29uZmlnIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWV4dGVybmFsXCIpXG5jbGFzcyBTdGVwRmxvd0V4dGVybmFsIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBmbG93Q29uZmlnITogRmxvd0NvbmZpZztcblxuICBAcHJvcGVydHkoKVxuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBzdGVwITogRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbDtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgY29uc3QgbG9jYWxpemUgPSB0aGlzLmhhc3MubG9jYWxpemU7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoMj5cbiAgICAgICAgJHt0aGlzLmZsb3dDb25maWcucmVuZGVyRXh0ZXJuYWxTdGVwSGVhZGVyKHRoaXMuaGFzcywgdGhpcy5zdGVwKX1cbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJFeHRlcm5hbFN0ZXBEZXNjcmlwdGlvbih0aGlzLmhhc3MsIHRoaXMuc3RlcCl9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvcGVuLWJ1dHRvblwiPlxuICAgICAgICAgIDxhIGhyZWY9JHt0aGlzLnN0ZXAudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIHJhaXNlZD5cbiAgICAgICAgICAgICAgJHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuZXh0ZXJuYWxfc3RlcC5vcGVuX3NpdGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmhhc3MuY29ubmVjdGlvbi5zdWJzY3JpYmVFdmVudHM8RGF0YUVudHJ5Rmxvd1Byb2dyZXNzZWRFdmVudD4oXG4gICAgICBhc3luYyAoZXYpID0+IHtcbiAgICAgICAgaWYgKGV2LmRhdGEuZmxvd19pZCAhPT0gdGhpcy5zdGVwLmZsb3dfaWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICAgICAgc3RlcFByb21pc2U6IHRoaXMuZmxvd0NvbmZpZy5mZXRjaEZsb3codGhpcy5oYXNzLCB0aGlzLnN0ZXAuZmxvd19pZCksXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIFwiZGF0YV9lbnRyeV9mbG93X3Byb2dyZXNzZWRcIlxuICAgICk7XG4gICAgd2luZG93Lm9wZW4odGhpcy5zdGVwLnVybCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAub3Blbi1idXR0b24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLm9wZW4tYnV0dG9uIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctZXh0ZXJuYWxcIjogU3RlcEZsb3dFeHRlcm5hbDtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdEFycmF5LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItdG9vbHRpcC9wYXBlci10b29sdGlwXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXJcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1mb3JtXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5pbXBvcnQgXCIuLi8uLi9yZXNvdXJjZXMvaGEtc3R5bGVcIjtcbmltcG9ydCB7IFBvbHltZXJDaGFuZ2VkRXZlbnQsIGFwcGx5UG9seW1lckV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93U3RlcEZvcm0sIEZpZWxkU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2RhdGEvZGF0YV9lbnRyeV9mbG93XCI7XG5pbXBvcnQgeyBGbG93Q29uZmlnIH0gZnJvbSBcIi4vc2hvdy1kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCI7XG5cbkBjdXN0b21FbGVtZW50KFwic3RlcC1mbG93LWZvcm1cIilcbmNsYXNzIFN0ZXBGbG93Rm9ybSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgZmxvd0NvbmZpZyE6IEZsb3dDb25maWc7XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIHN0ZXAhOiBEYXRhRW50cnlGbG93U3RlcEZvcm07XG5cbiAgQHByb3BlcnR5KClcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuXG4gIEBwcm9wZXJ0eSgpXG4gIHByaXZhdGUgX2xvYWRpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKVxuICBwcml2YXRlIF9zdGVwRGF0YT86IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgQHByb3BlcnR5KClcbiAgcHJpdmF0ZSBfZXJyb3JNc2c/OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLnN0ZXA7XG4gICAgY29uc3Qgc3RlcERhdGEgPSB0aGlzLl9zdGVwRGF0YVByb2Nlc3NlZDtcblxuICAgIGNvbnN0IGFsbFJlcXVpcmVkSW5mb0ZpbGxlZEluID1cbiAgICAgIHN0ZXBEYXRhID09PSB1bmRlZmluZWRcbiAgICAgICAgPyAvLyBJZiBubyBkYXRhIGZpbGxlZCBpbiwganVzdCBjaGVjayB0aGF0IGFueSBmaWVsZCBpcyByZXF1aXJlZFxuICAgICAgICAgIHN0ZXAuZGF0YV9zY2hlbWEuZmluZCgoZmllbGQpID0+ICFmaWVsZC5vcHRpb25hbCkgPT09IHVuZGVmaW5lZFxuICAgICAgICA6IC8vIElmIGRhdGEgaXMgZmlsbGVkIGluLCBtYWtlIHN1cmUgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmVcbiAgICAgICAgICBzdGVwRGF0YSAmJlxuICAgICAgICAgIHN0ZXAuZGF0YV9zY2hlbWEuZXZlcnkoXG4gICAgICAgICAgICAoZmllbGQpID0+XG4gICAgICAgICAgICAgIGZpZWxkLm9wdGlvbmFsIHx8ICFbXCJcIiwgdW5kZWZpbmVkXS5pbmNsdWRlcyhzdGVwRGF0YSFbZmllbGQubmFtZV0pXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPlxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJTaG93Rm9ybVN0ZXBIZWFkZXIodGhpcy5oYXNzLCB0aGlzLnN0ZXApfVxuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICR7dGhpcy5fZXJyb3JNc2dcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPiR7dGhpcy5fZXJyb3JNc2d9PC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuZmxvd0NvbmZpZy5yZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbih0aGlzLmhhc3MsIHRoaXMuc3RlcCl9XG4gICAgICAgIDxoYS1mb3JtXG4gICAgICAgICAgLmRhdGE9JHtzdGVwRGF0YX1cbiAgICAgICAgICBAZGF0YS1jaGFuZ2VkPSR7dGhpcy5fc3RlcERhdGFDaGFuZ2VkfVxuICAgICAgICAgIC5zY2hlbWE9JHtzdGVwLmRhdGFfc2NoZW1hfVxuICAgICAgICAgIC5lcnJvcj0ke3N0ZXAuZXJyb3JzfVxuICAgICAgICAgIC5jb21wdXRlTGFiZWw9JHt0aGlzLl9sYWJlbENhbGxiYWNrfVxuICAgICAgICAgIC5jb21wdXRlRXJyb3I9JHt0aGlzLl9lcnJvckNhbGxiYWNrfVxuICAgICAgICA+PC9oYS1mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAke3RoaXMuX2xvYWRpbmdcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogaHRtbGBcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fc3VibWl0U3RlcH1cbiAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZD0keyFhbGxSZXF1aXJlZEluZm9GaWxsZWRJbn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAkeyFhbGxSZXF1aXJlZEluZm9GaWxsZWRJblxuICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci10b29sdGlwIHBvc2l0aW9uPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm90IGFsbCByZXF1aXJlZCBmaWVsZHMgYXJlIGZpbGxlZCBpbi5cbiAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLXRvb2x0aXA+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgIDogaHRtbGBgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0U3RlcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3N0ZXBEYXRhUHJvY2Vzc2VkKCkge1xuICAgIGlmICh0aGlzLl9zdGVwRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RlcERhdGE7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIHRoaXMuc3RlcC5kYXRhX3NjaGVtYS5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKFwiZGVmYXVsdFwiIGluIGZpZWxkKSB7XG4gICAgICAgIGRhdGFbZmllbGQubmFtZV0gPSBmaWVsZC5kZWZhdWx0O1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc3VibWl0U3RlcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9lcnJvck1zZyA9IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IGZsb3dJZCA9IHRoaXMuc3RlcC5mbG93X2lkO1xuICAgIGNvbnN0IHN0ZXBEYXRhID0gdGhpcy5fc3RlcERhdGEgfHwge307XG5cbiAgICBjb25zdCB0b1NlbmREYXRhID0ge307XG4gICAgT2JqZWN0LmtleXMoc3RlcERhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdGVwRGF0YVtrZXldO1xuICAgICAgY29uc3QgaXNFbXB0eSA9IFt1bmRlZmluZWQsIFwiXCJdLmluY2x1ZGVzKHZhbHVlKTtcblxuICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgIHRvU2VuZERhdGFba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0ZXAgPSBhd2FpdCB0aGlzLmZsb3dDb25maWcuaGFuZGxlRmxvd1N0ZXAoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zdGVwLmZsb3dfaWQsXG4gICAgICAgIHRvU2VuZERhdGFcbiAgICAgICk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBzdGlsbCBzaG93aW5nIHRoZSBzYW1lIHN0ZXAgYXMgd2hlbiB3ZVxuICAgICAgLy8gZmlyZWQgb2ZmIHJlcXVlc3QuXG4gICAgICBpZiAoIXRoaXMuc3RlcCB8fCBmbG93SWQgIT09IHRoaXMuc3RlcC5mbG93X2lkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiZmxvdy11cGRhdGVcIiwge1xuICAgICAgICBzdGVwLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLl9lcnJvck1zZyA9XG4gICAgICAgIChlcnIgJiYgZXJyLmJvZHkgJiYgZXJyLmJvZHkubWVzc2FnZSkgfHwgXCJVbmtub3duIGVycm9yIG9jY3VycmVkXCI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zdGVwRGF0YUNoYW5nZWQoZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8YW55Pik6IHZvaWQge1xuICAgIHRoaXMuX3N0ZXBEYXRhID0gYXBwbHlQb2x5bWVyRXZlbnQoZXYsIHRoaXMuX3N0ZXBEYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xhYmVsQ2FsbGJhY2sgPSAoZmllbGQ6IEZpZWxkU2NoZW1hKTogc3RyaW5nID0+XG4gICAgdGhpcy5mbG93Q29uZmlnLnJlbmRlclNob3dGb3JtU3RlcEZpZWxkTGFiZWwodGhpcy5oYXNzLCB0aGlzLnN0ZXAsIGZpZWxkKTtcblxuICBwcml2YXRlIF9lcnJvckNhbGxiYWNrID0gKGVycm9yOiBzdHJpbmcpID0+XG4gICAgdGhpcy5mbG93Q29uZmlnLnJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IodGhpcy5oYXNzLCB0aGlzLnN0ZXAsIGVycm9yKTtcblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRBcnJheSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGNvbmZpZ0Zsb3dDb250ZW50U3R5bGVzLFxuICAgICAgY3NzYFxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VibWl0LXNwaW5uZXIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctZm9ybVwiOiBTdGVwRmxvd0Zvcm07XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIENTU1Jlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItbGl0ZVwiO1xuXG5AY3VzdG9tRWxlbWVudChcInN0ZXAtZmxvdy1sb2FkaW5nXCIpXG5jbGFzcyBTdGVwRmxvd0xvYWRpbmcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImluaXQtc3Bpbm5lclwiPlxuICAgICAgICA8cGFwZXItc3Bpbm5lci1saXRlIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXItbGl0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuaW5pdC1zcGlubmVyIHtcbiAgICAgICAgcGFkZGluZzogNTBweCAxMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcInN0ZXAtZmxvdy1sb2FkaW5nXCI6IFN0ZXBGbG93TG9hZGluZztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY3NzLFxuICBDU1NSZXN1bHQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBUZW1wbGF0ZVJlc3VsdCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItbGl0ZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYm9keVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IG1lbW9pemVPbmUgZnJvbSBcIm1lbW9pemUtb25lXCI7XG5pbXBvcnQgKiBhcyBGdXNlIGZyb20gXCJmdXNlLmpzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtaWNvbi1uZXh0XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21tb24vc2VhcmNoL3NlYXJjaC1pbnB1dFwiO1xuaW1wb3J0IHsgc3R5bGVNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXBcIjtcbmltcG9ydCB7IEZsb3dDb25maWcgfSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcblxuaW50ZXJmYWNlIEhhbmRsZXJPYmoge1xuICBuYW1lOiBzdHJpbmc7XG4gIHNsdWc6IHN0cmluZztcbn1cblxuQGN1c3RvbUVsZW1lbnQoXCJzdGVwLWZsb3ctcGljay1oYW5kbGVyXCIpXG5jbGFzcyBTdGVwRmxvd1BpY2tIYW5kbGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHB1YmxpYyBmbG93Q29uZmlnITogRmxvd0NvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYW5kbGVycyE6IHN0cmluZ1tdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIGZpbHRlcj86IHN0cmluZztcbiAgcHJpdmF0ZSBfd2lkdGg/OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfZ2V0SGFuZGxlcnMgPSBtZW1vaXplT25lKChoOiBzdHJpbmdbXSwgZmlsdGVyPzogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcnM6IEhhbmRsZXJPYmpbXSA9IGgubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiB0aGlzLmhhc3MubG9jYWxpemUoYGNvbXBvbmVudC4ke2hhbmRsZXJ9LmNvbmZpZy50aXRsZWApLFxuICAgICAgICBzbHVnOiBoYW5kbGVyLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEZ1c2UuRnVzZU9wdGlvbnM8SGFuZGxlck9iaj4gPSB7XG4gICAgICAgIGtleXM6IFtcIm5hbWVcIiwgXCJzbHVnXCJdLFxuICAgICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAyLFxuICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgIH07XG4gICAgICBjb25zdCBmdXNlID0gbmV3IEZ1c2UoaGFuZGxlcnMsIG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIGZ1c2Uuc2VhcmNoKGZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVycy5zb3J0KChhLCBiKSA9PlxuICAgICAgYS5uYW1lLnRvVXBwZXJDYXNlKCkgPCBiLm5hbWUudG9VcHBlckNhc2UoKSA/IC0xIDogMVxuICAgICk7XG4gIH0pO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuX2dldEhhbmRsZXJzKHRoaXMuaGFuZGxlcnMsIHRoaXMuZmlsdGVyKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGgyPiR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkucGFuZWwuY29uZmlnLmludGVncmF0aW9ucy5uZXdcIil9PC9oMj5cbiAgICAgIDxzZWFyY2gtaW5wdXRcbiAgICAgICAgLmZpbHRlcj0ke3RoaXMuZmlsdGVyfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2ZpbHRlckNoYW5nZWR9XG4gICAgICA+PC9zZWFyY2gtaW5wdXQ+XG4gICAgICA8ZGl2IHN0eWxlPSR7c3R5bGVNYXAoeyB3aWR0aDogYCR7dGhpcy5fd2lkdGh9cHhgIH0pfT5cbiAgICAgICAgJHtoYW5kbGVycy5tYXAoXG4gICAgICAgICAgKGhhbmRsZXI6IEhhbmRsZXJPYmopID0+XG4gICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICA8cGFwZXItaXRlbSBAY2xpY2s9JHt0aGlzLl9oYW5kbGVyUGlja2VkfSAuaGFuZGxlcj0ke2hhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgICAgICAgICAgICAke2hhbmRsZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0tYm9keT5cbiAgICAgICAgICAgICAgICA8aGEtaWNvbi1uZXh0PjwvaGEtaWNvbi1uZXh0PlxuICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICBgXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIC8vIFN0b3JlIHRoZSB3aWR0aCBzbyB0aGF0IHdoZW4gd2Ugc2VhcmNoLCBib3ggZG9lc24ndCBqdW1wXG4gICAgaWYgKCF0aGlzLl93aWR0aCkge1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIikhLmNsaWVudFdpZHRoO1xuICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZmlsdGVyQ2hhbmdlZChlKSB7XG4gICAgdGhpcy5maWx0ZXIgPSBlLmRldGFpbC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2hhbmRsZXJQaWNrZWQoZXYpIHtcbiAgICBmaXJlRXZlbnQodGhpcywgXCJmbG93LXVwZGF0ZVwiLCB7XG4gICAgICBzdGVwUHJvbWlzZTogdGhpcy5mbG93Q29uZmlnLmNyZWF0ZUZsb3coXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgZXYuY3VycmVudFRhcmdldC5oYW5kbGVyLnNsdWdcbiAgICAgICksXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgICAgZGl2IHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgICAgfVxuICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJzdGVwLWZsb3ctcGljay1oYW5kbGVyXCI6IFN0ZXBGbG93UGlja0hhbmRsZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNzcyB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuXG5leHBvcnQgY29uc3QgY29uZmlnRmxvd0NvbnRlbnRTdHlsZXMgPSBjc3NgXG4gIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgfVxuXG4gIC5idXR0b25zIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMjRweDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4gIGhhLW1hcmtkb3duIHtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB9XG4gIGhhLW1hcmtkb3duIGEge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgfVxuICBoYS1tYXJrZG93biBpbWc6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5cbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuLy8gUG9seW1lciBsZWdhY3kgZXZlbnQgaGVscGVycyB1c2VkIGNvdXJ0ZXN5IG9mIHRoZSBQb2x5bWVyIHByb2plY3QuXG4vL1xuLy8gQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4vL1xuLy8gUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4vLyBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlXG4vLyBtZXQ6XG4vL1xuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuLy8gICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyXG4vLyBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4vLyBkaXN0cmlidXRpb24uXG4vLyAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgR29vZ2xlIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHNcbi8vIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tXG4vLyB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuLy9cbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlNcbi8vIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1Rcbi8vIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUlxuLy8gQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFRcbi8vIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLFxuLy8gU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4vLyBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTllcbi8vIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlRcbi8vIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRVxuLy8gT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblxuLyogQHBvbHltZXJNaXhpbiAqL1xuZXhwb3J0IGNvbnN0IEV2ZW50c01peGluID0gZGVkdXBpbmdNaXhpbihcbiAgKHN1cGVyQ2xhc3MpID0+XG4gICAgY2xhc3MgZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgICAgIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgY3VzdG9tIGV2ZW50IHdpdGggYW4gb3B0aW9uYWwgZGV0YWlsIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBOYW1lIG9mIGV2ZW50IHR5cGUuXG4gICAqIEBwYXJhbSB7Kj19IGRldGFpbCBEZXRhaWwgdmFsdWUgY29udGFpbmluZyBldmVudC1zcGVjaWZpY1xuICAgKiAgIHBheWxvYWQuXG4gICAqIEBwYXJhbSB7eyBidWJibGVzOiAoYm9vbGVhbnx1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogKGJvb2xlYW58dW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogKGJvb2xlYW58dW5kZWZpbmVkKSB9PX1cbiAgICAqICBvcHRpb25zIE9iamVjdCBzcGVjaWZ5aW5nIG9wdGlvbnMuICBUaGVzZSBtYXkgaW5jbHVkZTpcbiAgICAqICBgYnViYmxlc2AgKGJvb2xlYW4sIGRlZmF1bHRzIHRvIGB0cnVlYCksXG4gICAgKiAgYGNhbmNlbGFibGVgIChib29sZWFuLCBkZWZhdWx0cyB0byBmYWxzZSksIGFuZFxuICAgICogIGBub2RlYCBvbiB3aGljaCB0byBmaXJlIHRoZSBldmVudCAoSFRNTEVsZW1lbnQsIGRlZmF1bHRzIHRvIGB0aGlzYCkuXG4gICAgKiBAcmV0dXJuIHtFdmVudH0gVGhlIG5ldyBldmVudCB0aGF0IHdhcyBmaXJlZC5cbiAgICAqL1xuICAgICAgZmlyZSh0eXBlLCBkZXRhaWwsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHJldHVybiBmaXJlRXZlbnQob3B0aW9ucy5ub2RlIHx8IHRoaXMsIHR5cGUsIGRldGFpbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImV4cG9ydCBjb25zdCBhcHBseVBvbHltZXJFdmVudCA9IDxUPihcbiAgZXY6IFBvbHltZXJDaGFuZ2VkRXZlbnQ8VD4sXG4gIGN1clZhbHVlOiBUXG4pOiBUID0+IHtcbiAgY29uc3QgeyBwYXRoLCB2YWx1ZSB9ID0gZXYuZGV0YWlsO1xuICBpZiAoIXBhdGgpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgY29uc3QgcHJvcE5hbWUgPSBwYXRoLnNwbGl0KFwiLlwiKVsxXTtcbiAgcmV0dXJuIHsgLi4uY3VyVmFsdWUsIFtwcm9wTmFtZV06IHZhbHVlIH07XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHltZXJDaGFuZ2VkRXZlbnQ8VD4gZXh0ZW5kcyBFdmVudCB7XG4gIGRldGFpbDoge1xuICAgIHZhbHVlOiBUO1xuICAgIHBhdGg/OiBzdHJpbmc7XG4gICAgcXVldWVQcm9wZXJ0eTogYm9vbGVhbjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5bWVySXJvblNlbGVjdEV2ZW50PFQ+IGV4dGVuZHMgRXZlbnQge1xuICBkZXRhaWw6IHtcbiAgICBpdGVtOiBUO1xuICB9O1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGZvciBmaXJlIGV2ZW50XG4gIGludGVyZmFjZSBIQVNTRG9tRXZlbnRzIHtcbiAgICBcImhhc3MtbG9nb3V0XCI6IHVuZGVmaW5lZDtcbiAgICBcImlyb24tcmVzaXplXCI6IHVuZGVmaW5lZDtcbiAgICBcImNvbmZpZy1yZWZyZXNoXCI6IHVuZGVmaW5lZDtcbiAgICBcImhhc3MtYXBpLWNhbGxlZFwiOiB7XG4gICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgcmVzcG9uc2U6IHVua25vd247XG4gICAgfTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBOzs7OztBQUtBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBOzs7O0FBSUE7Ozs7O0FBS0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBNURBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7O0FBQ0E7QUFDQTtBQXVEQTtBQUNBO0FBdERBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBekRBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFXQTtBQVNBO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFXQTs7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9CQTtBQVdBO0FBRUE7QUFDQTtBQUVBO0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBT0E7QUFhQTtBQUFBOztBQUdBO0FBQ0E7QUFxUUE7QUF6UEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBdlFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVpBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFRQTtBQUlBO0FBQ0E7QUFJQTtBQVNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBUEE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQVFBO0FBZUE7QUFDQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUtBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7O0FBSUE7O0FBSUE7QUFFQTtBQUNBOztBQUVBOzs7O0FBS0E7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQWpKQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFiQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBU0E7QUFHQTtBQUNBO0FBUUE7QUFTQTtBQUNBO0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBOzs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQTFEQTtBQURBO0FBQ0E7QUFHQTtBQURBO0FBQ0E7QUFQQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBS0E7QUFBQTs7QUFVQTtBQTRJQTtBQUdBO0FBaUJBO0FBeEpBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUF0S0E7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBR0E7QUFEQTtBQUNBO0FBaEJBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBUUE7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFqQkE7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVNBO0FBQUE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFrRUE7QUFoRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUE7Ozs7QUFJQTs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBNUZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9