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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id=\"scrollable\" class=\"scrollable\" on-scroll=\"updateScrollState\">\n      <slot></slot>\n    </div>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function ready() {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function attached() {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function updateScrollState() {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function _ensureTarget() {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
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
					var w = new Worker(__webpack_require__.p + "1ad83d98797d8f2144f6.worker.js", { name: "[hash].worker.js" })
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

    if (d.type !== 'RPC') {
      return;
    }

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
      var params = [],
          len = arguments.length;

      while (len--) {
        params[len] = arguments[len];
      }

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-markdown img:first-child:last-child,\n        ha-markdown svg:first-child:last-child {\n          display: block;\n          margin: 0 auto;\n        }\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .init-spinner {\n          padding: 10px 100px 34px;\n          text-align: center;\n        }\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      </style>\n      <ha-paper-dialog\n        id=\"dialog\"\n        with-backdrop=\"\"\n        opened=\"{{_opened}}\"\n        on-opened-changed=\"_openedChanged\"\n      >\n        <h2>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'abort')]]\">\n            [[localize('ui.panel.profile.mfa_setup.title_aborted')]]\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'create_entry')]]\">\n            [[localize('ui.panel.profile.mfa_setup.title_success')]]\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'form')]]\">\n            [[_computeStepTitle(localize, _step)]]\n          </template>\n        </h2>\n        <paper-dialog-scrollable>\n          <template is=\"dom-if\" if=\"[[_errorMsg]]\">\n            <div class=\"error\">[[_errorMsg]]</div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!_step]]\">\n            <div class=\"init-spinner\">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[_step]]\">\n            <template is=\"dom-if\" if=\"[[_equals(_step.type, 'abort')]]\">\n              <ha-markdown\n                allowsvg\n                content=\"[[_computeStepAbortedReason(localize, _step)]]\"\n              ></ha-markdown>\n            </template>\n\n            <template is=\"dom-if\" if=\"[[_equals(_step.type, 'create_entry')]]\">\n              <p>\n                [[localize('ui.panel.profile.mfa_setup.step_done', 'step',\n                _step.title)]]\n              </p>\n            </template>\n\n            <template is=\"dom-if\" if=\"[[_equals(_step.type, 'form')]]\">\n              <template\n                is=\"dom-if\"\n                if=\"[[_computeStepDescription(localize, _step)]]\"\n              >\n                <ha-markdown\n                  allowsvg\n                  content=\"[[_computeStepDescription(localize, _step)]]\"\n                ></ha-markdown>\n              </template>\n\n              <ha-form\n                data=\"{{_stepData}}\"\n                schema=\"[[_step.data_schema]]\"\n                error=\"[[_step.errors]]\"\n                compute-label=\"[[_computeLabelCallback(localize, _step)]]\"\n                compute-error=\"[[_computeErrorCallback(localize, _step)]]\"\n              ></ha-form>\n            </template>\n          </template>\n        </paper-dialog-scrollable>\n        <div class=\"buttons\">\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'abort')]]\">\n            <mwc-button on-click=\"_flowDone\"\n              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button\n            >\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'create_entry')]]\">\n            <mwc-button on-click=\"_flowDone\"\n              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button\n            >\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'form')]]\">\n            <template is=\"dom-if\" if=\"[[_loading]]\">\n              <div class=\"submit-spinner\">\n                <paper-spinner active></paper-spinner>\n              </div>\n            </template>\n            <template is=\"dom-if\" if=\"[[!_loading]]\">\n              <mwc-button on-click=\"_submitStep\"\n                >[[localize('ui.panel.profile.mfa_setup.submit')]]</mwc-button\n              >\n            </template>\n          </template>\n        </div>\n      </ha-paper-dialog>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var instance = 0;
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaMfaModuleSetupFlow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaMfaModuleSetupFlow, _LocalizeMixin);

  function HaMfaModuleSetupFlow() {
    _classCallCheck(this, HaMfaModuleSetupFlow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMfaModuleSetupFlow).apply(this, arguments));
  }

  _createClass(HaMfaModuleSetupFlow, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaMfaModuleSetupFlow.prototype), "ready", this).call(this);

      this.addEventListener("keypress", function (ev) {
        if (ev.keyCode === 13) {
          _this._submitStep();
        }
      });
    }
  }, {
    key: "showDialog",
    value: function showDialog(_ref) {
      var _this2 = this;

      var hass = _ref.hass,
          continueFlowId = _ref.continueFlowId,
          mfaModuleId = _ref.mfaModuleId,
          dialogClosedCallback = _ref.dialogClosedCallback;
      this.hass = hass;
      this._instance = instance++;
      this._dialogClosedCallback = dialogClosedCallback;
      this._createdFromHandler = !!mfaModuleId;
      this._loading = true;
      this._opened = true;
      var fetchStep = continueFlowId ? this.hass.callWS({
        type: "auth/setup_mfa",
        flow_id: continueFlowId
      }) : this.hass.callWS({
        type: "auth/setup_mfa",
        mfa_module_id: mfaModuleId
      });
      var curInstance = this._instance;
      fetchStep.then(function (step) {
        if (curInstance !== _this2._instance) return;

        _this2._processStep(step);

        _this2._loading = false; // When the flow changes, center the dialog.
        // Don't do it on each step or else the dialog keeps bouncing.

        setTimeout(function () {
          return _this2.$.dialog.center();
        }, 0);
      });
    }
  }, {
    key: "_submitStep",
    value: function _submitStep() {
      var _this3 = this;

      this._loading = true;
      this._errorMsg = null;
      var curInstance = this._instance;
      this.hass.callWS({
        type: "auth/setup_mfa",
        flow_id: this._step.flow_id,
        user_input: this._stepData
      }).then(function (step) {
        if (curInstance !== _this3._instance) return;

        _this3._processStep(step);

        _this3._loading = false;
      }, function (err) {
        _this3._errorMsg = err && err.body && err.body.message || "Unknown error occurred";
        _this3._loading = false;
      });
    }
  }, {
    key: "_processStep",
    value: function _processStep(step) {
      if (!step.errors) step.errors = {};
      this._step = step; // We got a new form if there are no errors.

      if (Object.keys(step.errors).length === 0) {
        this._stepData = {};
      }
    }
  }, {
    key: "_flowDone",
    value: function _flowDone() {
      this._opened = false;
      var flowFinished = this._step && ["create_entry", "abort"].includes(this._step.type);

      if (this._step && !flowFinished && this._createdFromHandler) {// console.log('flow not finish');
      }

      this._dialogClosedCallback({
        flowFinished: flowFinished
      });

      this._errorMsg = null;
      this._step = null;
      this._stepData = {};
      this._dialogClosedCallback = null;
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(ev) {
      // Closed dialog by clicking on the overlay
      if (this._step && !ev.detail.value) {
        this._flowDone();
      }
    }
  }, {
    key: "_computeStepAbortedReason",
    value: function _computeStepAbortedReason(localize, step) {
      return localize("component.auth.mfa_setup.".concat(step.handler, ".abort.").concat(step.reason));
    }
  }, {
    key: "_computeStepTitle",
    value: function _computeStepTitle(localize, step) {
      return localize("component.auth.mfa_setup.".concat(step.handler, ".step.").concat(step.step_id, ".title")) || "Setup Multi-factor Authentication";
    }
  }, {
    key: "_computeStepDescription",
    value: function _computeStepDescription(localize, step) {
      var args = ["component.auth.mfa_setup.".concat(step.handler, ".step.").concat(step.step_id, ".description")];
      var placeholders = step.description_placeholders || {};
      Object.keys(placeholders).forEach(function (key) {
        args.push(key);
        args.push(placeholders[key]);
      });
      return localize.apply(void 0, args);
    }
  }, {
    key: "_computeLabelCallback",
    value: function _computeLabelCallback(localize, step) {
      // Returns a callback for ha-form to calculate labels per schema object
      return function (schema) {
        return localize("component.auth.mfa_setup.".concat(step.handler, ".step.").concat(step.step_id, ".data.").concat(schema.name)) || schema.name;
      };
    }
  }, {
    key: "_computeErrorCallback",
    value: function _computeErrorCallback(localize, step) {
      // Returns a callback for ha-form to calculate error messages
      return function (error) {
        return localize("component.auth.mfa_setup.".concat(step.handler, ".error.").concat(error)) || error;
      };
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        _hass: Object,
        _dialogClosedCallback: Function,
        _instance: Number,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _errorMsg: String,
        _opened: {
          type: Boolean,
          value: false
        },
        _step: {
          type: Object,
          value: null
        },

        /*
         * Store user entered data.
         */
        _stepData: Object
      };
    }
  }]);

  return HaMfaModuleSetupFlow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-mfa-module-setup-flow", HaMfaModuleSetupFlow);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy93b3JrZXJpemUtbG9hZGVyL2Rpc3QvcnBjLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1tYXJrZG93bi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL3Byb2ZpbGUvaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCJcblx0XHRcdFx0dmFyIGFkZE1ldGhvZHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd3JhcHBlci5qc1wiKVxuXHRcdFx0XHR2YXIgbWV0aG9kcyA9IFtcInJlbmRlck1hcmtkb3duXCJdXG5cdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIHcgPSBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYWQ4M2Q5ODc5N2Q4ZjIxNDRmNi53b3JrZXIuanNcIiwgeyBuYW1lOiBcIltoYXNoXS53b3JrZXIuanNcIiB9KVxuXHRcdFx0XHRcdGFkZE1ldGhvZHModywgbWV0aG9kcylcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRyZXR1cm4gd1xuXHRcdFx0XHR9XG5cdFx0XHQiLCJmdW5jdGlvbiBhZGRNZXRob2RzKHdvcmtlciwgbWV0aG9kcykge1xuICB2YXIgYyA9IDA7XG4gIHZhciBjYWxsYmFja3MgPSB7fTtcbiAgd29ya2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkID0gZS5kYXRhO1xuICAgIGlmIChkLnR5cGUgIT09ICdSUEMnKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKGQuaWQpIHtcbiAgICAgIHZhciBmID0gY2FsbGJhY2tzW2QuaWRdO1xuXG4gICAgICBpZiAoZikge1xuICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2QuaWRdO1xuXG4gICAgICAgIGlmIChkLmVycm9yKSB7XG4gICAgICAgICAgZlsxXShPYmplY3QuYXNzaWduKEVycm9yKGQuZXJyb3IubWVzc2FnZSksIGQuZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmWzBdKGQucmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgICBldnQuaW5pdEV2ZW50KGQubWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgZXZ0LmRhdGEgPSBkLnBhcmFtcztcbiAgICAgIHdvcmtlci5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgfVxuICB9KTtcbiAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICB3b3JrZXJbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJhbXMgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBwYXJhbXNbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgaWQgPSArK2M7XG4gICAgICBjYWxsYmFja3NbaWRdID0gW2EsIGJdO1xuICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ1JQQycsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB9O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNZXRob2RzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnBjLXdyYXBwZXIuanMubWFwXG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCB7IFVwZGF0aW5nRWxlbWVudCwgcHJvcGVydHksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8td2VicGFjay1sb2FkZXItc3ludGF4XG4vLyBAdHMtaWdub3JlXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcGxpY2l0LWRlcGVuZGVuY2llc1xuaW1wb3J0IG1hcmtkb3duV29ya2VyIGZyb20gXCJ3b3JrZXJpemUtbG9hZGVyIS4uL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXJcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxubGV0IHdvcmtlcjogYW55IHwgdW5kZWZpbmVkO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLW1hcmtkb3duXCIpXG5jbGFzcyBIYU1hcmtkb3duIGV4dGVuZHMgVXBkYXRpbmdFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGNvbnRlbnQgPSBcIlwiO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBhbGxvd1N2ZyA9IGZhbHNlO1xuXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIudXBkYXRlKGNoYW5nZWRQcm9wcyk7XG5cbiAgICBpZiAoIXdvcmtlcikge1xuICAgICAgd29ya2VyID0gbWFya2Rvd25Xb3JrZXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3JlbmRlcigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IGF3YWl0IHdvcmtlci5yZW5kZXJNYXJrZG93bihcbiAgICAgIHRoaXMuY29udGVudCxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtzOiB0cnVlLFxuICAgICAgICBnZm06IHRydWUsXG4gICAgICAgIHRhYmxlczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsbG93U3ZnOiB0aGlzLmFsbG93U3ZnLFxuICAgICAgfVxuICAgICk7XG5cbiAgICB0aGlzLl9yZXNpemUoKTtcblxuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICB0aGlzLFxuICAgICAgMSAvKiBTSE9XX0VMRU1FTlQgKi8sXG4gICAgICBudWxsLFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgICBjb25zdCBub2RlID0gd2Fsa2VyLmN1cnJlbnROb2RlO1xuXG4gICAgICAvLyBPcGVuIGV4dGVybmFsIGxpbmtzIGluIGEgbmV3IHdpbmRvd1xuICAgICAgaWYgKFxuICAgICAgICBub2RlIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiZcbiAgICAgICAgbm9kZS5ob3N0ICE9PSBkb2N1bWVudC5sb2NhdGlvbi5ob3N0XG4gICAgICApIHtcbiAgICAgICAgbm9kZS50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgICAgIC8vIHByb3RlY3QgcmVmZXJyZXIgb24gZXh0ZXJuYWwgbGlua3MgYW5kIGRlbnkgd2luZG93Lm9wZW5lciBhY2Nlc3MgZm9yIHNlY3VyaXR5IHJlYXNvbnNcbiAgICAgICAgLy8gKHNlZSBodHRwczovL21hdGhpYXNieW5lbnMuZ2l0aHViLmlvL3JlbC1ub29wZW5lci8pXG4gICAgICAgIG5vZGUucmVsID0gXCJub3JlZmVycmVyIG5vb3BlbmVyXCI7XG5cbiAgICAgICAgLy8gRmlyZSBhIHJlc2l6ZSBldmVudCB3aGVuIGltYWdlcyBsb2FkZWQgdG8gbm90aWZ5IGNvbnRlbnQgcmVzaXplZFxuICAgICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5fcmVzaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9yZXNpemUgPSAoKSA9PiBmaXJlRXZlbnQodGhpcywgXCJpcm9uLXJlc2l6ZVwiKTtcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLW1hcmtkb3duXCI6IEhhTWFya2Rvd247XG4gIH1cbn1cbiIsImltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtZm9ybVwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1tYXJrZG93blwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxubGV0IGluc3RhbmNlID0gMDtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYU1mYU1vZHVsZVNldHVwRmxvdyBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImhhLXN0eWxlLWRpYWxvZ1wiPlxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGhhLW1hcmtkb3duIGltZzpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkLFxuICAgICAgICBoYS1tYXJrZG93biBzdmc6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgaGEtbWFya2Rvd24gYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5pbml0LXNwaW5uZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTAwcHggMzRweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnN1Ym1pdC1zcGlubmVyIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8aGEtcGFwZXItZGlhbG9nXG4gICAgICAgIGlkPVwiZGlhbG9nXCJcbiAgICAgICAgd2l0aC1iYWNrZHJvcD1cIlwiXG4gICAgICAgIG9wZW5lZD1cInt7X29wZW5lZH19XCJcbiAgICAgICAgb24tb3BlbmVkLWNoYW5nZWQ9XCJfb3BlbmVkQ2hhbmdlZFwiXG4gICAgICA+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnYWJvcnQnKV1dXCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5wYW5lbC5wcm9maWxlLm1mYV9zZXR1cC50aXRsZV9hYm9ydGVkJyldXVxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2NyZWF0ZV9lbnRyeScpXV1cIj5cbiAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLnRpdGxlX3N1Y2Nlc3MnKV1dXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgIFtbX2NvbXB1dGVTdGVwVGl0bGUobG9jYWxpemUsIF9zdGVwKV1dXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXJyb3JNc2ddXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+W1tfZXJyb3JNc2ddXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbWyFfc3RlcF1dXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5pdC1zcGlubmVyXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfc3RlcF1dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnYWJvcnQnKV1dXCI+XG4gICAgICAgICAgICAgIDxoYS1tYXJrZG93blxuICAgICAgICAgICAgICAgIGFsbG93c3ZnXG4gICAgICAgICAgICAgICAgY29udGVudD1cIltbX2NvbXB1dGVTdGVwQWJvcnRlZFJlYXNvbihsb2NhbGl6ZSwgX3N0ZXApXV1cIlxuICAgICAgICAgICAgICA+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfZXF1YWxzKF9zdGVwLnR5cGUsICdjcmVhdGVfZW50cnknKV1dXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLnBhbmVsLnByb2ZpbGUubWZhX3NldHVwLnN0ZXBfZG9uZScsICdzdGVwJyxcbiAgICAgICAgICAgICAgICBfc3RlcC50aXRsZSldXVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVN0ZXBEZXNjcmlwdGlvbihsb2NhbGl6ZSwgX3N0ZXApXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGhhLW1hcmtkb3duXG4gICAgICAgICAgICAgICAgICBhbGxvd3N2Z1xuICAgICAgICAgICAgICAgICAgY29udGVudD1cIltbX2NvbXB1dGVTdGVwRGVzY3JpcHRpb24obG9jYWxpemUsIF9zdGVwKV1dXCJcbiAgICAgICAgICAgICAgICA+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICA8aGEtZm9ybVxuICAgICAgICAgICAgICAgIGRhdGE9XCJ7e19zdGVwRGF0YX19XCJcbiAgICAgICAgICAgICAgICBzY2hlbWE9XCJbW19zdGVwLmRhdGFfc2NoZW1hXV1cIlxuICAgICAgICAgICAgICAgIGVycm9yPVwiW1tfc3RlcC5lcnJvcnNdXVwiXG4gICAgICAgICAgICAgICAgY29tcHV0ZS1sYWJlbD1cIltbX2NvbXB1dGVMYWJlbENhbGxiYWNrKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgICAgY29tcHV0ZS1lcnJvcj1cIltbX2NvbXB1dGVFcnJvckNhbGxiYWNrKGxvY2FsaXplLCBfc3RlcCldXVwiXG4gICAgICAgICAgICAgID48L2hhLWZvcm0+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19lcXVhbHMoX3N0ZXAudHlwZSwgJ2Fib3J0JyldXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZmxvd0RvbmVcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuY2xvc2UnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnY3JlYXRlX2VudHJ5JyldXVwiPlxuICAgICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJfZmxvd0RvbmVcIlxuICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuY2xvc2UnKV1dPC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2VxdWFscyhfc3RlcC50eXBlLCAnZm9ybScpXV1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfbG9hZGluZ11dXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJtaXQtc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxwYXBlci1zcGlubmVyIGFjdGl2ZT48L3BhcGVyLXNwaW5uZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shX2xvYWRpbmddXVwiPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9zdWJtaXRTdGVwXCJcbiAgICAgICAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkucGFuZWwucHJvZmlsZS5tZmFfc2V0dXAuc3VibWl0JyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oYS1wYXBlci1kaWFsb2c+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX2hhc3M6IE9iamVjdCxcbiAgICAgIF9kaWFsb2dDbG9zZWRDYWxsYmFjazogRnVuY3Rpb24sXG4gICAgICBfaW5zdGFuY2U6IE51bWJlcixcblxuICAgICAgX2xvYWRpbmc6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgLy8gRXJyb3IgbWVzc2FnZSB3aGVuIGNhbid0IHRhbGsgdG8gc2VydmVyIGV0Y1xuICAgICAgX2Vycm9yTXNnOiBTdHJpbmcsXG5cbiAgICAgIF9vcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgX3N0ZXA6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIH0sXG5cbiAgICAgIC8qXG4gICAgICAgKiBTdG9yZSB1c2VyIGVudGVyZWQgZGF0YS5cbiAgICAgICAqL1xuICAgICAgX3N0ZXBEYXRhOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2KSA9PiB7XG4gICAgICBpZiAoZXYua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0U3RlcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0RpYWxvZyh7IGhhc3MsIGNvbnRpbnVlRmxvd0lkLCBtZmFNb2R1bGVJZCwgZGlhbG9nQ2xvc2VkQ2FsbGJhY2sgfSkge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBpbnN0YW5jZSsrO1xuICAgIHRoaXMuX2RpYWxvZ0Nsb3NlZENhbGxiYWNrID0gZGlhbG9nQ2xvc2VkQ2FsbGJhY2s7XG4gICAgdGhpcy5fY3JlYXRlZEZyb21IYW5kbGVyID0gISFtZmFNb2R1bGVJZDtcbiAgICB0aGlzLl9sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgZmV0Y2hTdGVwID0gY29udGludWVGbG93SWRcbiAgICAgID8gdGhpcy5oYXNzLmNhbGxXUyh7XG4gICAgICAgICAgdHlwZTogXCJhdXRoL3NldHVwX21mYVwiLFxuICAgICAgICAgIGZsb3dfaWQ6IGNvbnRpbnVlRmxvd0lkLFxuICAgICAgICB9KVxuICAgICAgOiB0aGlzLmhhc3MuY2FsbFdTKHtcbiAgICAgICAgICB0eXBlOiBcImF1dGgvc2V0dXBfbWZhXCIsXG4gICAgICAgICAgbWZhX21vZHVsZV9pZDogbWZhTW9kdWxlSWQsXG4gICAgICAgIH0pO1xuXG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcblxuICAgIGZldGNoU3RlcC50aGVuKChzdGVwKSA9PiB7XG4gICAgICBpZiAoY3VySW5zdGFuY2UgIT09IHRoaXMuX2luc3RhbmNlKSByZXR1cm47XG5cbiAgICAgIHRoaXMuX3Byb2Nlc3NTdGVwKHN0ZXApO1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gV2hlbiB0aGUgZmxvdyBjaGFuZ2VzLCBjZW50ZXIgdGhlIGRpYWxvZy5cbiAgICAgIC8vIERvbid0IGRvIGl0IG9uIGVhY2ggc3RlcCBvciBlbHNlIHRoZSBkaWFsb2cga2VlcHMgYm91bmNpbmcuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuJC5kaWFsb2cuY2VudGVyKCksIDApO1xuICAgIH0pO1xuICB9XG5cbiAgX3N1Ym1pdFN0ZXAoKSB7XG4gICAgdGhpcy5fbG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5fZXJyb3JNc2cgPSBudWxsO1xuXG4gICAgY29uc3QgY3VySW5zdGFuY2UgPSB0aGlzLl9pbnN0YW5jZTtcblxuICAgIHRoaXMuaGFzc1xuICAgICAgLmNhbGxXUyh7XG4gICAgICAgIHR5cGU6IFwiYXV0aC9zZXR1cF9tZmFcIixcbiAgICAgICAgZmxvd19pZDogdGhpcy5fc3RlcC5mbG93X2lkLFxuICAgICAgICB1c2VyX2lucHV0OiB0aGlzLl9zdGVwRGF0YSxcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgKHN0ZXApID0+IHtcbiAgICAgICAgICBpZiAoY3VySW5zdGFuY2UgIT09IHRoaXMuX2luc3RhbmNlKSByZXR1cm47XG5cbiAgICAgICAgICB0aGlzLl9wcm9jZXNzU3RlcChzdGVwKTtcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLl9lcnJvck1zZyA9XG4gICAgICAgICAgICAoZXJyICYmIGVyci5ib2R5ICYmIGVyci5ib2R5Lm1lc3NhZ2UpIHx8IFwiVW5rbm93biBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIF9wcm9jZXNzU3RlcChzdGVwKSB7XG4gICAgaWYgKCFzdGVwLmVycm9ycykgc3RlcC5lcnJvcnMgPSB7fTtcbiAgICB0aGlzLl9zdGVwID0gc3RlcDtcbiAgICAvLyBXZSBnb3QgYSBuZXcgZm9ybSBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLlxuICAgIGlmIChPYmplY3Qua2V5cyhzdGVwLmVycm9ycykubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9zdGVwRGF0YSA9IHt9O1xuICAgIH1cbiAgfVxuXG4gIF9mbG93RG9uZSgpIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBmYWxzZTtcbiAgICBjb25zdCBmbG93RmluaXNoZWQgPVxuICAgICAgdGhpcy5fc3RlcCAmJiBbXCJjcmVhdGVfZW50cnlcIiwgXCJhYm9ydFwiXS5pbmNsdWRlcyh0aGlzLl9zdGVwLnR5cGUpO1xuXG4gICAgaWYgKHRoaXMuX3N0ZXAgJiYgIWZsb3dGaW5pc2hlZCAmJiB0aGlzLl9jcmVhdGVkRnJvbUhhbmRsZXIpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmbG93IG5vdCBmaW5pc2gnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaWFsb2dDbG9zZWRDYWxsYmFjayh7XG4gICAgICBmbG93RmluaXNoZWQsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9lcnJvck1zZyA9IG51bGw7XG4gICAgdGhpcy5fc3RlcCA9IG51bGw7XG4gICAgdGhpcy5fc3RlcERhdGEgPSB7fTtcbiAgICB0aGlzLl9kaWFsb2dDbG9zZWRDYWxsYmFjayA9IG51bGw7XG4gIH1cblxuICBfZXF1YWxzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKGV2KSB7XG4gICAgLy8gQ2xvc2VkIGRpYWxvZyBieSBjbGlja2luZyBvbiB0aGUgb3ZlcmxheVxuICAgIGlmICh0aGlzLl9zdGVwICYmICFldi5kZXRhaWwudmFsdWUpIHtcbiAgICAgIHRoaXMuX2Zsb3dEb25lKCk7XG4gICAgfVxuICB9XG5cbiAgX2NvbXB1dGVTdGVwQWJvcnRlZFJlYXNvbihsb2NhbGl6ZSwgc3RlcCkge1xuICAgIHJldHVybiBsb2NhbGl6ZShcbiAgICAgIGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LmFib3J0LiR7c3RlcC5yZWFzb259YFxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZVN0ZXBUaXRsZShsb2NhbGl6ZSwgc3RlcCkge1xuICAgIHJldHVybiAoXG4gICAgICBsb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICApIHx8IFwiU2V0dXAgTXVsdGktZmFjdG9yIEF1dGhlbnRpY2F0aW9uXCJcbiAgICApO1xuICB9XG5cbiAgX2NvbXB1dGVTdGVwRGVzY3JpcHRpb24obG9jYWxpemUsIHN0ZXApIHtcbiAgICBjb25zdCBhcmdzID0gW1xuICAgICAgYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uc3RlcC4ke1xuICAgICAgICBzdGVwLnN0ZXBfaWRcbiAgICAgIH0uZGVzY3JpcHRpb25gLFxuICAgIF07XG4gICAgY29uc3QgcGxhY2Vob2xkZXJzID0gc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnMgfHwge307XG4gICAgT2JqZWN0LmtleXMocGxhY2Vob2xkZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGFyZ3MucHVzaChrZXkpO1xuICAgICAgYXJncy5wdXNoKHBsYWNlaG9sZGVyc1trZXldKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbG9jYWxpemUoLi4uYXJncyk7XG4gIH1cblxuICBfY29tcHV0ZUxhYmVsQ2FsbGJhY2sobG9jYWxpemUsIHN0ZXApIHtcbiAgICAvLyBSZXR1cm5zIGEgY2FsbGJhY2sgZm9yIGhhLWZvcm0gdG8gY2FsY3VsYXRlIGxhYmVscyBwZXIgc2NoZW1hIG9iamVjdFxuICAgIHJldHVybiAoc2NoZW1hKSA9PlxuICAgICAgbG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuYXV0aC5tZmFfc2V0dXAuJHtzdGVwLmhhbmRsZXJ9LnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LmRhdGEuJHtcbiAgICAgICAgICBzY2hlbWEubmFtZVxuICAgICAgICB9YFxuICAgICAgKSB8fCBzY2hlbWEubmFtZTtcbiAgfVxuXG4gIF9jb21wdXRlRXJyb3JDYWxsYmFjayhsb2NhbGl6ZSwgc3RlcCkge1xuICAgIC8vIFJldHVybnMgYSBjYWxsYmFjayBmb3IgaGEtZm9ybSB0byBjYWxjdWxhdGUgZXJyb3IgbWVzc2FnZXNcbiAgICByZXR1cm4gKGVycm9yKSA9PlxuICAgICAgbG9jYWxpemUoYGNvbXBvbmVudC5hdXRoLm1mYV9zZXR1cC4ke3N0ZXAuaGFuZGxlcn0uZXJyb3IuJHtlcnJvcn1gKSB8fFxuICAgICAgZXJyb3I7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtbWZhLW1vZHVsZS1zZXR1cC1mbG93XCIsIEhhTWZhTW9kdWxlU2V0dXBGbG93KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTtBQTZDQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUFBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXVEQTs7QUFDQTtBQXREQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVRBO0FBWUE7QUFFQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQXREQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUEwREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFtSkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7O0FBdlNBO0FBQ0E7QUFnSEE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUExQkE7QUE0QkE7Ozs7QUFqSkE7QUFDQTtBQTBTQTs7OztBIiwic291cmNlUm9vdCI6IiJ9