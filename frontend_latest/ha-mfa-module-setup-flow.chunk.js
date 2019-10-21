(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["ha-mfa-module-setup-flow"],{

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,

  is: 'paper-dialog-scrollable',

  properties: {

    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {type: Object}

  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function() {
    this._ensureTarget();
    this.classList.add('no-padding');
  },

  attached: function() {
    this._ensureTarget();
    requestAnimationFrame(this.updateScrollState.bind(this));
  },

  updateScrollState: function() {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass(
        'can-scroll',
        this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass(
        'scrolled-to-bottom',
        this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >=
            this.scrollTarget.scrollHeight);
  },

  _ensureTarget: function() {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement;
    // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.
    if (this.dialogElement && this.dialogElement.behaviors &&
        this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});


/***/ }),

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

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;
    if (d.type !== 'RPC') { return; }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [], len = arguments.length;
      while ( len-- ) params[ len ] = arguments[ len ];

      return new Promise(function (a, b) {
      var id = ++c;
      callbacks[id] = [a, b];
      worker.postMessage({
        type: 'RPC',
        id: id,
        method: method,
        params: params
      });
    });
    };
  });
}

module.exports = addMethods;
//# sourceMappingURL=rpc-wrapper.js.map


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

/***/ "./src/panels/profile/ha-mfa-module-setup-flow.js":
/*!********************************************************!*\
  !*** ./src/panels/profile/ha-mfa-module-setup-flow.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-markdown */ "./src/components/ha-markdown.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");














let instance = 0;

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */
class HaMfaModuleSetupFlow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style-dialog">
        .error {
          color: red;
        }
        ha-paper-dialog {
          max-width: 500px;
        }
        ha-markdown img:first-child:last-child,
        ha-markdown svg:first-child:last-child {
          display: block;
          margin: 0 auto;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        .init-spinner {
          padding: 10px 100px 34px;
          text-align: center;
        }
        .submit-spinner {
          margin-right: 16px;
        }
      </style>
      <ha-paper-dialog
        id="dialog"
        with-backdrop=""
        opened="{{_opened}}"
        on-opened-changed="_openedChanged"
      >
        <h2>
          <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
            [[localize('ui.panel.profile.mfa_setup.title_aborted')]]
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
            [[localize('ui.panel.profile.mfa_setup.title_success')]]
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
            [[_computeStepTitle(localize, _step)]]
          </template>
        </h2>
        <paper-dialog-scrollable>
          <template is="dom-if" if="[[_errorMsg]]">
            <div class="error">[[_errorMsg]]</div>
          </template>
          <template is="dom-if" if="[[!_step]]">
            <div class="init-spinner">
              <paper-spinner active></paper-spinner>
            </div>
          </template>
          <template is="dom-if" if="[[_step]]">
            <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
              <ha-markdown
                allowsvg
                content="[[_computeStepAbortedReason(localize, _step)]]"
              ></ha-markdown>
            </template>

            <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
              <p>
                [[localize('ui.panel.profile.mfa_setup.step_done', 'step',
                _step.title)]]
              </p>
            </template>

            <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
              <template
                is="dom-if"
                if="[[_computeStepDescription(localize, _step)]]"
              >
                <ha-markdown
                  allowsvg
                  content="[[_computeStepDescription(localize, _step)]]"
                ></ha-markdown>
              </template>

              <ha-form
                data="{{_stepData}}"
                schema="[[_step.data_schema]]"
                error="[[_step.errors]]"
                compute-label="[[_computeLabelCallback(localize, _step)]]"
                compute-error="[[_computeErrorCallback(localize, _step)]]"
              ></ha-form>
            </template>
          </template>
        </paper-dialog-scrollable>
        <div class="buttons">
          <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
            <mwc-button on-click="_flowDone"
              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button
            >
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
            <mwc-button on-click="_flowDone"
              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button
            >
          </template>
          <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
            <template is="dom-if" if="[[_loading]]">
              <div class="submit-spinner">
                <paper-spinner active></paper-spinner>
              </div>
            </template>
            <template is="dom-if" if="[[!_loading]]">
              <mwc-button on-click="_submitStep"
                >[[localize('ui.panel.profile.mfa_setup.submit')]]</mwc-button
              >
            </template>
          </template>
        </div>
      </ha-paper-dialog>
    `;
  }

  static get properties() {
    return {
      _hass: Object,
      _dialogClosedCallback: Function,
      _instance: Number,

      _loading: {
        type: Boolean,
        value: false,
      },

      // Error message when can't talk to server etc
      _errorMsg: String,

      _opened: {
        type: Boolean,
        value: false,
      },

      _step: {
        type: Object,
        value: null,
      },

      /*
       * Store user entered data.
       */
      _stepData: Object,
    };
  }

  ready() {
    super.ready();
    this.addEventListener("keypress", (ev) => {
      if (ev.keyCode === 13) {
        this._submitStep();
      }
    });
  }

  showDialog({ hass, continueFlowId, mfaModuleId, dialogClosedCallback }) {
    this.hass = hass;
    this._instance = instance++;
    this._dialogClosedCallback = dialogClosedCallback;
    this._createdFromHandler = !!mfaModuleId;
    this._loading = true;
    this._opened = true;

    const fetchStep = continueFlowId
      ? this.hass.callWS({
          type: "auth/setup_mfa",
          flow_id: continueFlowId,
        })
      : this.hass.callWS({
          type: "auth/setup_mfa",
          mfa_module_id: mfaModuleId,
        });

    const curInstance = this._instance;

    fetchStep.then((step) => {
      if (curInstance !== this._instance) return;

      this._processStep(step);
      this._loading = false;
      // When the flow changes, center the dialog.
      // Don't do it on each step or else the dialog keeps bouncing.
      setTimeout(() => this.$.dialog.center(), 0);
    });
  }

  _submitStep() {
    this._loading = true;
    this._errorMsg = null;

    const curInstance = this._instance;

    this.hass
      .callWS({
        type: "auth/setup_mfa",
        flow_id: this._step.flow_id,
        user_input: this._stepData,
      })
      .then(
        (step) => {
          if (curInstance !== this._instance) return;

          this._processStep(step);
          this._loading = false;
        },
        (err) => {
          this._errorMsg =
            (err && err.body && err.body.message) || "Unknown error occurred";
          this._loading = false;
        }
      );
  }

  _processStep(step) {
    if (!step.errors) step.errors = {};
    this._step = step;
    // We got a new form if there are no errors.
    if (Object.keys(step.errors).length === 0) {
      this._stepData = {};
    }
  }

  _flowDone() {
    this._opened = false;
    const flowFinished =
      this._step && ["create_entry", "abort"].includes(this._step.type);

    if (this._step && !flowFinished && this._createdFromHandler) {
      // console.log('flow not finish');
    }

    this._dialogClosedCallback({
      flowFinished,
    });

    this._errorMsg = null;
    this._step = null;
    this._stepData = {};
    this._dialogClosedCallback = null;
  }

  _equals(a, b) {
    return a === b;
  }

  _openedChanged(ev) {
    // Closed dialog by clicking on the overlay
    if (this._step && !ev.detail.value) {
      this._flowDone();
    }
  }

  _computeStepAbortedReason(localize, step) {
    return localize(
      `component.auth.mfa_setup.${step.handler}.abort.${step.reason}`
    );
  }

  _computeStepTitle(localize, step) {
    return (
      localize(
        `component.auth.mfa_setup.${step.handler}.step.${step.step_id}.title`
      ) || "Setup Multi-factor Authentication"
    );
  }

  _computeStepDescription(localize, step) {
    const args = [
      `component.auth.mfa_setup.${step.handler}.step.${
        step.step_id
      }.description`,
    ];
    const placeholders = step.description_placeholders || {};
    Object.keys(placeholders).forEach((key) => {
      args.push(key);
      args.push(placeholders[key]);
    });
    return localize(...args);
  }

  _computeLabelCallback(localize, step) {
    // Returns a callback for ha-form to calculate labels per schema object
    return (schema) =>
      localize(
        `component.auth.mfa_setup.${step.handler}.step.${step.step_id}.data.${
          schema.name
        }`
      ) || schema.name;
  }

  _computeErrorCallback(localize, step) {
    // Returns a callback for ha-form to calculate error messages
    return (error) =>
      localize(`component.auth.mfa_setup.${step.handler}.error.${error}`) ||
      error;
  }
}

customElements.define("ha-mfa-module-setup-flow", HaMfaModuleSetupFlow);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLW1hcmtkb3duLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcInJlbmRlck1hcmtkb3duXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwM2ZkNDkwYjBjZDE0MGNkZTA5OS53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiLCJmdW5jdGlvbiBhZGRNZXRob2RzKHdvcmtlciwgbWV0aG9kcykge1xuICB2YXIgYyA9IDA7XG4gIHZhciBjYWxsYmFja3MgPSB7fTtcbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkID0gZS5kYXRhO1xuICAgIGlmIChkLnR5cGUgIT09ICdSUEMnKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGQuaWQpIHtcbiAgICAgIHZhciBmID0gY2FsbGJhY2tzW2QuaWRdO1xuXG4gICAgICBpZiAoZikge1xuICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2QuaWRdO1xuXG4gICAgICAgIGlmIChkLmVycm9yKSB7XG4gICAgICAgICAgZlsxXShPYmplY3QuYXNzaWduKEVycm9yKGQuZXJyb3IubWVzc2FnZSksIGQuZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmWzBdKGQucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICBldnQuaW5pdEV2ZW50KGQubWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgZXZ0LmRhdGEgPSBkLnBhcmFtcztcbiAgICAgIHdvcmtlci5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9KTtcbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICB3b3JrZXJbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBwYXJhbXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgaWQgPSArK2M7XG4gICAgICBjYWxsYmFja3NbaWRdID0gW2EsIGJdO1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ1JQQycsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB9O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNZXRob2RzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnBjLXdyYXBwZXIuanMubWFwXG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWNoZWNrYm94L3BhcGVyLWNoZWNrYm94XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKi9cbmNsYXNzIEhhRm9ybSBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jaGVja2JveCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDIycHggMDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaXNBcnJheShzY2hlbWEpXV1cIiByZXN0YW1wPVwiXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvci5iYXNlXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj5bW2NvbXB1dGVFcnJvcihlcnJvci5iYXNlLCBzY2hlbWEpXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3NjaGVtYV1dXCI+XG4gICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgIGRhdGE9XCJbW19nZXRWYWx1ZShkYXRhLCBpdGVtKV1dXCJcbiAgICAgICAgICAgIHNjaGVtYT1cIltbaXRlbV1dXCJcbiAgICAgICAgICAgIGVycm9yPVwiW1tfZ2V0VmFsdWUoZXJyb3IsIGl0ZW0pXV1cIlxuICAgICAgICAgICAgb24tZGF0YS1jaGFuZ2VkPVwiX3ZhbHVlQ2hhbmdlZFwiXG4gICAgICAgICAgICBjb21wdXRlLWVycm9yPVwiW1tjb21wdXRlRXJyb3JdXVwiXG4gICAgICAgICAgICBjb21wdXRlLWxhYmVsPVwiW1tjb21wdXRlTGFiZWxdXVwiXG4gICAgICAgICAgICBjb21wdXRlLXN1ZmZpeD1cIltbY29tcHV0ZVN1ZmZpeF1dXCJcbiAgICAgICAgICA+PC9oYS1mb3JtPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2lzQXJyYXkoc2NoZW1hKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZXJyb3JdXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbY29tcHV0ZUVycm9yKGVycm9yLCBzY2hlbWEpXV08L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgaWY9J1tbX2VxdWFscyhzY2hlbWEudHlwZSwgXCJzdHJpbmdcIildXSdcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgaWY9J1tbX2luY2x1ZGVzKHNjaGVtYS5uYW1lLCBcInBhc3N3b3JkXCIpXV0nXG4gICAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIltbX3Bhc3N3b3JkRmllbGRUeXBlKHVubWFza2VkUGFzc3dvcmQpXV1cIlxuICAgICAgICAgICAgICBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICByZXF1aXJlZD1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGVycm9yLW1lc3NhZ2U9XCJSZXF1aXJlZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgIHRvZ2dsZXNcbiAgICAgICAgICAgICAgICBhY3RpdmU9XCJ7e3VubWFza2VkUGFzc3dvcmR9fVwiXG4gICAgICAgICAgICAgICAgc2xvdD1cInN1ZmZpeFwiXG4gICAgICAgICAgICAgICAgaWNvbj1cIltbX3Bhc3N3b3JkRmllbGRJY29uKHVubWFza2VkUGFzc3dvcmQpXV1cIlxuICAgICAgICAgICAgICAgIGlkPVwiaWNvbkJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byB0b2dnbGUgYmV0d2VlbiBtYXNrZWQgYW5kIGNsZWFyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgaWY9J1tbIV9pbmNsdWRlcyhzY2hlbWEubmFtZSwgXCJwYXNzd29yZFwiKV1dJ1xuICAgICAgICAgICAgcmVzdGFtcD1cIlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJ7e2RhdGF9fVwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIlJlcXVpcmVkXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwiaW50ZWdlclwiKV1dJ1xuICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19pc1JhbmdlKHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFtbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVxuICAgICAgICAgICAgICA8aGEtcGFwZXItc2xpZGVyXG4gICAgICAgICAgICAgICAgcGluPVwiXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgICAgICBtaW49XCJbW3NjaGVtYS52YWx1ZU1pbl1dXCJcbiAgICAgICAgICAgICAgICBtYXg9XCJbW3NjaGVtYS52YWx1ZU1heF1dXCJcbiAgICAgICAgICAgICAgPjwvaGEtcGFwZXItc2xpZGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9pc1JhbmdlKHNjaGVtYSldXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJbW3NjaGVtYS5yZXF1aXJlZF1dXCJcbiAgICAgICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc2NoZW1hLnJlcXVpcmVkXV1cIlxuICAgICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcImZsb2F0XCIpXV0nIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICA8IS0tIFRPRE8gLS0+XG4gICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIltbY29tcHV0ZUxhYmVsKHNjaGVtYSldXVwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgIHJlcXVpcmVkPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1tzY2hlbWEucmVxdWlyZWRdXVwiXG4gICAgICAgICAgICBlcnJvci1tZXNzYWdlPVwiUmVxdWlyZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIHN1ZmZpeD1cIlwiIHNsb3Q9XCJzdWZmaXhcIj5bW2NvbXB1dGVTdWZmaXgoc2NoZW1hKV1dPC9zcGFuPlxuICAgICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPSdbW19lcXVhbHMoc2NoZW1hLnR5cGUsIFwiYm9vbGVhblwiKV1dJ1xuICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwYXBlci1jaGVja2JveCBjaGVja2VkPVwie3tkYXRhfX1cIlxuICAgICAgICAgICAgICA+W1tjb21wdXRlTGFiZWwoc2NoZW1hKV1dPC9wYXBlci1jaGVja2JveFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICBpZj0nW1tfZXF1YWxzKHNjaGVtYS50eXBlLCBcInNlbGVjdFwiKV1dJ1xuICAgICAgICAgIHJlc3RhbXA9XCJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgbGFiZWw9XCJbW2NvbXB1dGVMYWJlbChzY2hlbWEpXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cInt7ZGF0YX19XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tzY2hlbWEub3B0aW9uc11dXCI+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbX29wdGlvblZhbHVlKGl0ZW0pXV1cIlxuICAgICAgICAgICAgICAgICAgPltbX29wdGlvbkxhYmVsKGl0ZW0pXV08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHNjaGVtYTogT2JqZWN0LFxuICAgICAgZXJyb3I6IE9iamVjdCxcblxuICAgICAgLy8gQSBmdW5jdGlvbiB0aGF0IGNvbXB1dGVzIHRoZSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgZm9yIGEgZ2l2ZW5cbiAgICAgIC8vIHNjaGVtYSBvYmplY3QuXG4gICAgICBjb21wdXRlTGFiZWw6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiAoKSA9PiAoc2NoZW1hKSA9PiBzY2hlbWEgJiYgc2NoZW1hLm5hbWUsXG4gICAgICB9LFxuXG4gICAgICAvLyBBIGZ1bmN0aW9uIHRoYXQgY29tcHV0ZXMgdGhlIHN1ZmZpeCB0byBiZSBkaXNwbGF5ZWQgZm9yIGEgZ2l2ZW5cbiAgICAgIC8vIHNjaGVtYSBvYmplY3QuXG4gICAgICBjb21wdXRlU3VmZml4OiB7XG4gICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICB2YWx1ZTogKCkgPT4gKHNjaGVtYSkgPT5cbiAgICAgICAgICBzY2hlbWEgJiZcbiAgICAgICAgICBzY2hlbWEuZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBzY2hlbWEuZGVzY3JpcHRpb24udW5pdF9vZl9tZWFzdXJlbWVudCxcbiAgICAgIH0sXG5cbiAgICAgIC8vIEEgZnVuY3Rpb24gdGhhdCBjb21wdXRlcyBhbiBlcnJvciBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZCBmb3IgYVxuICAgICAgLy8gZ2l2ZW4gZXJyb3IgSUQsIGFuZCByZWxldmFudCBzY2hlbWEgb2JqZWN0XG4gICAgICBjb21wdXRlRXJyb3I6IHtcbiAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgIHZhbHVlOiAoKSA9PiAoZXJyb3IsIHNjaGVtYSkgPT4gZXJyb3IsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImhhLWZvcm0sIHBhcGVyLWlucHV0LCBoYS1wYXBlci1zbGlkZXIsIHBhcGVyLWNoZWNrYm94LCBwYXBlci1kcm9wZG93bi1tZW51XCJcbiAgICApO1xuXG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlucHV0LmZvY3VzKCk7XG4gIH1cblxuICBfaXNBcnJheSh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpO1xuICB9XG5cbiAgX2lzUmFuZ2Uoc2NoZW1hKSB7XG4gICAgcmV0dXJuIFwidmFsdWVNaW5cIiBpbiBzY2hlbWEgJiYgXCJ2YWx1ZU1heFwiIGluIHNjaGVtYTtcbiAgfVxuXG4gIF9lcXVhbHMoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xuICB9XG5cbiAgX2luY2x1ZGVzKGEsIGIpIHtcbiAgICByZXR1cm4gYS5pbmRleE9mKGIpID49IDA7XG4gIH1cblxuICBfZ2V0VmFsdWUob2JqLCBpdGVtKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgcmV0dXJuIG9ialtpdGVtLm5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIF92YWx1ZUNoYW5nZWQoZXYpIHtcbiAgICBsZXQgdmFsdWUgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKGV2Lm1vZGVsLml0ZW0udHlwZSA9PT0gXCJpbnRlZ2VyXCIpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKGV2LmRldGFpbC52YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0KFtcImRhdGFcIiwgZXYubW9kZWwuaXRlbS5uYW1lXSwgdmFsdWUpO1xuICB9XG5cbiAgX3Bhc3N3b3JkRmllbGRUeXBlKHVubWFza2VkUGFzc3dvcmQpIHtcbiAgICByZXR1cm4gdW5tYXNrZWRQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwiO1xuICB9XG5cbiAgX3Bhc3N3b3JkRmllbGRJY29uKHVubWFza2VkUGFzc3dvcmQpIHtcbiAgICByZXR1cm4gdW5tYXNrZWRQYXNzd29yZCA/IFwiaGFzczpleWUtb2ZmXCIgOiBcImhhc3M6ZXllXCI7XG4gIH1cblxuICBfb3B0aW9uVmFsdWUoaXRlbSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVswXSA6IGl0ZW07XG4gIH1cblxuICBfb3B0aW9uTGFiZWwoaXRlbSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGl0ZW0pID8gaXRlbVsxXSA6IGl0ZW07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtZm9ybVwiLCBIYUZvcm0pO1xuIiwiaW1wb3J0IHsgVXBkYXRpbmdFbGVtZW50LCBwcm9wZXJ0eSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby13ZWJwYWNrLWxvYWRlci1zeW50YXhcbi8vIEB0cy1pZ25vcmVcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8taW1wbGljaXQtZGVwZW5kZW5jaWVzXG5pbXBvcnQgbWFya2Rvd25Xb3JrZXIgZnJvbSBcIndvcmtlcml6ZS1sb2FkZXIhLi4vcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlclwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuXG5sZXQgd29ya2VyOiBhbnkgfCB1bmRlZmluZWQ7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtbWFya2Rvd25cIilcbmNsYXNzIEhhTWFya2Rvd24gZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgY29udGVudCA9IFwiXCI7XG4gIEBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSkgcHVibGljIGFsbG93U3ZnID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZShjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci51cGRhdGUoY2hhbmdlZFByb3BzKTtcblxuICAgIGlmICghd29ya2VyKSB7XG4gICAgICB3b3JrZXIgPSBtYXJrZG93bldvcmtlcigpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVyKCkge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gYXdhaXQgd29ya2VyLnJlbmRlck1hcmtkb3duKFxuICAgICAgdGhpcy5jb250ZW50LFxuICAgICAge1xuICAgICAgICBicmVha3M6IHRydWUsXG4gICAgICAgIGdmbTogdHJ1ZSxcbiAgICAgICAgdGFibGVzOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxsb3dTdmc6IHRoaXMuYWxsb3dTdmcsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuXG4gICAgY29uc3Qgd2Fsa2VyID0gZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihcbiAgICAgIHRoaXMsXG4gICAgICAxIC8qIFNIT1dfRUxFTUVOVCAqLyxcbiAgICAgIG51bGwsXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB3aGlsZSAod2Fsa2VyLm5leHROb2RlKCkpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB3YWxrZXIuY3VycmVudE5vZGU7XG5cbiAgICAgIC8vIE9wZW4gZXh0ZXJuYWwgbGlua3MgaW4gYSBuZXcgd2luZG93XG4gICAgICBpZiAoXG4gICAgICAgIG5vZGUgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJlxuICAgICAgICBub2RlLmhvc3QgIT09IGRvY3VtZW50LmxvY2F0aW9uLmhvc3RcbiAgICAgICkge1xuICAgICAgICBub2RlLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgICAgICAgLy8gcHJvdGVjdCByZWZlcnJlciBvbiBleHRlcm5hbCBsaW5rcyBhbmQgZGVueSB3aW5kb3cub3BlbmVyIGFjY2VzcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuICAgICAgICAvLyAoc2VlIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5naXRodWIuaW8vcmVsLW5vb3BlbmVyLylcbiAgICAgICAgbm9kZS5yZWwgPSBcIm5vcmVmZXJyZXIgbm9vcGVuZXJcIjtcblxuICAgICAgICAvLyBGaXJlIGEgcmVzaXplIGV2ZW50IHdoZW4gaW1hZ2VzIGxvYWRlZCB0byBub3RpZnkgY29udGVudCByZXNpemVkXG4gICAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCB0aGlzLl9yZXNpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2l6ZSA9ICgpID0+IGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtbWFya2Rvd25cIjogSGFNYXJrZG93bjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc2xpZGVyL3BhcGVyLXNsaWRlclwiO1xuXG4vKipcbiAqIEBwb2x5bWVyXG4gKiBAY3VzdG9tRWxlbWVudFxuICogQGFwcGxpZXNNaXhpbiBwYXBlci1zbGlkZXJcbiAqL1xuY29uc3QgUGFwZXJTbGlkZXJDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXNsaWRlclwiKTtcblxuY2xhc3MgSGFQYXBlclNsaWRlciBleHRlbmRzIFBhcGVyU2xpZGVyQ2xhc3Mge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRwbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICB0cGwuaW5uZXJIVE1MID0gUGFwZXJTbGlkZXJDbGFzcy50ZW1wbGF0ZS5pbm5lckhUTUw7XG4gICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZUVsLmlubmVySFRNTCA9IGBcbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXIge1xuICAgICAgICBmb250LXNpemU6ICB2YXIoLS1oYS1wYXBlci1zbGlkZXItcGluLWZvbnQtc2l6ZSwgMTBweCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICB9XG5cbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcblxuICAgICAgICBib3R0b206IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDIuMmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICBmb250LXNpemU6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEuMWVtO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4xZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpcj1cInJ0bFwiXSkgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYDtcbiAgICB0cGwuY29udGVudC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICByZXR1cm4gdHBsO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1zbGlkZXJcIiwgSGFQYXBlclNsaWRlcik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWZvcm1cIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtbWFya2Rvd25cIjtcbmltcG9ydCBcIi4uLy4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmxldCBpbnN0YW5jZSA9IDA7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFNZmFNb2R1bGVTZXR1cEZsb3cgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJoYS1zdHlsZS1kaWFsb2dcIj5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIGhhLXBhcGVyLWRpYWxvZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICBoYS1tYXJrZG93biBpbWc6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCxcbiAgICAgICAgaGEtbWFya2Rvd24gc3ZnOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuaW5pdC1zcGlubmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwMHB4IDM0cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJtaXQtc3Bpbm5lciB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICBpZD1cImRpYWxvZ1wiXG4gICAgICAgIHdpdGgtYmFja2Ryb3A9XCJcIlxuICAgICAgICBvcGVuZWQ9XCJ7e19vcGVuZWR9fVwiXG4gICAgICAgIG9uLW9wZW5lZC1jaGFuZ2VkPVwiX29wZW5lZENoYW5nZWRcIlxuICAgICAgPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAudGl0bGVfYWJvcnRlZCcpXV1cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXF1YWxzKF9zdGVwLnR5cGUsICdjcmVhdGVfZW50cnknKV1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYV9zZXR1cC50aXRsZV9zdWNjZXNzJyldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Zvcm0nKV1dXCI+XG4gICAgICAgICAgICBbW19jb21wdXRlU3RlcFRpdGxlKGxvY2FsaXplLCBfc3RlcCldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2Vycm9yTXNnXV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPltbX2Vycm9yTXNnXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX3N0ZXBdXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3N0ZXBdXVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgICA8aGEtbWFya2Rvd25cbiAgICAgICAgICAgICAgICBhbGxvd3N2Z1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJbW19jb21wdXRlU3RlcEFib3J0ZWRSZWFzb24obG9jYWxpemUsIF9zdGVwKV1dXCJcbiAgICAgICAgICAgICAgPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnY3JlYXRlX2VudHJ5JyldXVwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYV9zZXR1cC5zdGVwX2RvbmUnLCAnc3RlcCcsXG4gICAgICAgICAgICAgICAgX3N0ZXAudGl0bGUpXV1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Zvcm0nKV1dXCI+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLWlmXCJcbiAgICAgICAgICAgICAgICBpZj1cIltbX2NvbXB1dGVTdGVwRGVzY3JpcHRpb24obG9jYWxpemUsIF9zdGVwKV1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoYS1tYXJrZG93blxuICAgICAgICAgICAgICAgICAgYWxsb3dzdmdcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJbW19jb21wdXRlU3RlcERlc2NyaXB0aW9uKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgICAgPjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgICAgPGhhLWZvcm1cbiAgICAgICAgICAgICAgICBkYXRhPVwie3tfc3RlcERhdGF9fVwiXG4gICAgICAgICAgICAgICAgc2NoZW1hPVwiW1tfc3RlcC5kYXRhX3NjaGVtYV1dXCJcbiAgICAgICAgICAgICAgICBlcnJvcj1cIltbX3N0ZXAuZXJyb3JzXV1cIlxuICAgICAgICAgICAgICAgIGNvbXB1dGUtbGFiZWw9XCJbW19jb21wdXRlTGFiZWxDYWxsYmFjayhsb2NhbGl6ZSwgX3N0ZXApXV1cIlxuICAgICAgICAgICAgICAgIGNvbXB1dGUtZXJyb3I9XCJbW19jb21wdXRlRXJyb3JDYWxsYmFjayhsb2NhbGl6ZSwgX3N0ZXApXV1cIlxuICAgICAgICAgICAgICA+PC9oYS1mb3JtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXF1YWxzKF9zdGVwLnR5cGUsICdhYm9ydCcpXV1cIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2Zsb3dEb25lXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLmNsb3NlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2NyZWF0ZV9lbnRyeScpXV1cIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2Zsb3dEb25lXCJcbiAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLmNsb3NlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Zvcm0nKV1dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2xvYWRpbmddXVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibWl0LXNwaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lciBhY3RpdmU+PC9wYXBlci1zcGlubmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9sb2FkaW5nXV1cIj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfc3VibWl0U3RlcFwiXG4gICAgICAgICAgICAgICAgPltbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLnN1Ym1pdCcpXV08L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9oYXNzOiBPYmplY3QsXG4gICAgICBfZGlhbG9nQ2xvc2VkQ2FsbGJhY2s6IEZ1bmN0aW9uLFxuICAgICAgX2luc3RhbmNlOiBOdW1iZXIsXG5cbiAgICAgIF9sb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIEVycm9yIG1lc3NhZ2Ugd2hlbiBjYW4ndCB0YWxrIHRvIHNlcnZlciBldGNcbiAgICAgIF9lcnJvck1zZzogU3RyaW5nLFxuXG4gICAgICBfb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIF9zdGVwOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICAvKlxuICAgICAgICogU3RvcmUgdXNlciBlbnRlcmVkIGRhdGEuXG4gICAgICAgKi9cbiAgICAgIF9zdGVwRGF0YTogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldikgPT4ge1xuICAgICAgaWYgKGV2LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuX3N1Ym1pdFN0ZXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3dEaWFsb2coeyBoYXNzLCBjb250aW51ZUZsb3dJZCwgbWZhTW9kdWxlSWQsIGRpYWxvZ0Nsb3NlZENhbGxiYWNrIH0pIHtcbiAgICB0aGlzLmhhc3MgPSBoYXNzO1xuICAgIHRoaXMuX2luc3RhbmNlID0gaW5zdGFuY2UrKztcbiAgICB0aGlzLl9kaWFsb2dDbG9zZWRDYWxsYmFjayA9IGRpYWxvZ0Nsb3NlZENhbGxiYWNrO1xuICAgIHRoaXMuX2NyZWF0ZWRGcm9tSGFuZGxlciA9ICEhbWZhTW9kdWxlSWQ7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGZldGNoU3RlcCA9IGNvbnRpbnVlRmxvd0lkXG4gICAgICA/IHRoaXMuaGFzcy5jYWxsV1Moe1xuICAgICAgICAgIHR5cGU6IFwiYXV0aC9zZXR1cF9tZmFcIixcbiAgICAgICAgICBmbG93X2lkOiBjb250aW51ZUZsb3dJZCxcbiAgICAgICAgfSlcbiAgICAgIDogdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJhdXRoL3NldHVwX21mYVwiLFxuICAgICAgICAgIG1mYV9tb2R1bGVfaWQ6IG1mYU1vZHVsZUlkLFxuICAgICAgICB9KTtcblxuICAgIGNvbnN0IGN1ckluc3RhbmNlID0gdGhpcy5faW5zdGFuY2U7XG5cbiAgICBmZXRjaFN0ZXAudGhlbigoc3RlcCkgPT4ge1xuICAgICAgaWYgKGN1ckluc3RhbmNlICE9PSB0aGlzLl9pbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLl9wcm9jZXNzU3RlcChzdGVwKTtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIC8vIFdoZW4gdGhlIGZsb3cgY2hhbmdlcywgY2VudGVyIHRoZSBkaWFsb2cuXG4gICAgICAvLyBEb24ndCBkbyBpdCBvbiBlYWNoIHN0ZXAgb3IgZWxzZSB0aGUgZGlhbG9nIGtlZXBzIGJvdW5jaW5nLlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLiQuZGlhbG9nLmNlbnRlcigpLCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zdWJtaXRTdGVwKCkge1xuICAgIHRoaXMuX2xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuX2Vycm9yTXNnID0gbnVsbDtcblxuICAgIGNvbnN0IGN1ckluc3RhbmNlID0gdGhpcy5faW5zdGFuY2U7XG5cbiAgICB0aGlzLmhhc3NcbiAgICAgIC5jYWxsV1Moe1xuICAgICAgICB0eXBlOiBcImF1dGgvc2V0dXBfbWZhXCIsXG4gICAgICAgIGZsb3dfaWQ6IHRoaXMuX3N0ZXAuZmxvd19pZCxcbiAgICAgICAgdXNlcl9pbnB1dDogdGhpcy5fc3RlcERhdGEsXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIChzdGVwKSA9PiB7XG4gICAgICAgICAgaWYgKGN1ckluc3RhbmNlICE9PSB0aGlzLl9pbnN0YW5jZSkgcmV0dXJuO1xuXG4gICAgICAgICAgdGhpcy5fcHJvY2Vzc1N0ZXAoc3RlcCk7XG4gICAgICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5fZXJyb3JNc2cgPVxuICAgICAgICAgICAgKGVyciAmJiBlcnIuYm9keSAmJiBlcnIuYm9keS5tZXNzYWdlKSB8fCBcIlVua25vd24gZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBfcHJvY2Vzc1N0ZXAoc3RlcCkge1xuICAgIGlmICghc3RlcC5lcnJvcnMpIHN0ZXAuZXJyb3JzID0ge307XG4gICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgLy8gV2UgZ290IGEgbmV3IGZvcm0gaWYgdGhlcmUgYXJlIG5vIGVycm9ycy5cbiAgICBpZiAoT2JqZWN0LmtleXMoc3RlcC5lcnJvcnMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fc3RlcERhdGEgPSB7fTtcbiAgICB9XG4gIH1cblxuICBfZmxvd0RvbmUoKSB7XG4gICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gICAgY29uc3QgZmxvd0ZpbmlzaGVkID1cbiAgICAgIHRoaXMuX3N0ZXAgJiYgW1wiY3JlYXRlX2VudHJ5XCIsIFwiYWJvcnRcIl0uaW5jbHVkZXModGhpcy5fc3RlcC50eXBlKTtcblxuICAgIGlmICh0aGlzLl9zdGVwICYmICFmbG93RmluaXNoZWQgJiYgdGhpcy5fY3JlYXRlZEZyb21IYW5kbGVyKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZmxvdyBub3QgZmluaXNoJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGlhbG9nQ2xvc2VkQ2FsbGJhY2soe1xuICAgICAgZmxvd0ZpbmlzaGVkLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fZXJyb3JNc2cgPSBudWxsO1xuICAgIHRoaXMuX3N0ZXAgPSBudWxsO1xuICAgIHRoaXMuX3N0ZXBEYXRhID0ge307XG4gICAgdGhpcy5fZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgPSBudWxsO1xuICB9XG5cbiAgX2VxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChldikge1xuICAgIC8vIENsb3NlZCBkaWFsb2cgYnkgY2xpY2tpbmcgb24gdGhlIG92ZXJsYXlcbiAgICBpZiAodGhpcy5fc3RlcCAmJiAhZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICB0aGlzLl9mbG93RG9uZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9jb21wdXRlU3RlcEFib3J0ZWRSZWFzb24obG9jYWxpemUsIHN0ZXApIHtcbiAgICByZXR1cm4gbG9jYWxpemUoXG4gICAgICBgY29tcG9uZW50LmF1dGgubWZhX3NldHVwLiR7c3RlcC5oYW5kbGVyfS5hYm9ydC4ke3N0ZXAucmVhc29ufWBcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGVwVGl0bGUobG9jYWxpemUsIHN0ZXApIHtcbiAgICByZXR1cm4gKFxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKSB8fCBcIlNldHVwIE11bHRpLWZhY3RvciBBdXRoZW50aWNhdGlvblwiXG4gICAgKTtcbiAgfVxuXG4gIF9jb21wdXRlU3RlcERlc2NyaXB0aW9uKGxvY2FsaXplLCBzdGVwKSB7XG4gICAgY29uc3QgYXJncyA9IFtcbiAgICAgIGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LnN0ZXAuJHtcbiAgICAgICAgc3RlcC5zdGVwX2lkXG4gICAgICB9LmRlc2NyaXB0aW9uYCxcbiAgICBdO1xuICAgIGNvbnN0IHBsYWNlaG9sZGVycyA9IHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzIHx8IHt9O1xuICAgIE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBhcmdzLnB1c2goa2V5KTtcbiAgICAgIGFyZ3MucHVzaChwbGFjZWhvbGRlcnNba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxvY2FsaXplKC4uLmFyZ3MpO1xuICB9XG5cbiAgX2NvbXB1dGVMYWJlbENhbGxiYWNrKGxvY2FsaXplLCBzdGVwKSB7XG4gICAgLy8gUmV0dXJucyBhIGNhbGxiYWNrIGZvciBoYS1mb3JtIHRvIGNhbGN1bGF0ZSBsYWJlbHMgcGVyIHNjaGVtYSBvYmplY3RcbiAgICByZXR1cm4gKHNjaGVtYSkgPT5cbiAgICAgIGxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LmF1dGgubWZhX3NldHVwLiR7c3RlcC5oYW5kbGVyfS5zdGVwLiR7c3RlcC5zdGVwX2lkfS5kYXRhLiR7XG4gICAgICAgICAgc2NoZW1hLm5hbWVcbiAgICAgICAgfWBcbiAgICAgICkgfHwgc2NoZW1hLm5hbWU7XG4gIH1cblxuICBfY29tcHV0ZUVycm9yQ2FsbGJhY2sobG9jYWxpemUsIHN0ZXApIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGVycm9yIG1lc3NhZ2VzXG4gICAgcmV0dXJuIChlcnJvcikgPT5cbiAgICAgIGxvY2FsaXplKGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LmVycm9yLiR7ZXJyb3J9YCkgfHxcbiAgICAgIGVycm9yO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLW1mYS1tb2R1bGUtc2V0dXAtZmxvd1wiLCBIYU1mYU1vZHVsZVNldHVwRmxvdyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7O0FBQ0E7QUFDQTtBQXVEQTtBQUNBO0FBdERBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBekRBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=