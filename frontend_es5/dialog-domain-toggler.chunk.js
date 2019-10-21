(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["dialog-domain-toggler"],{

/***/ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animatable-behavior.js ***!
  \**************************************************************************/
/*! exports provided: NeonAnimatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimatableBehavior", function() { return NeonAnimatableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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
 * `NeonAnimatableBehavior` is implemented by elements containing
 * animations for use with elements implementing
 * `NeonAnimationRunnerBehavior`.
 * @polymerBehavior
 */

var NeonAnimatableBehavior = {
  properties: {
    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {
      type: Object
    },

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String
    }
  },
  _entryAnimationChanged: function _entryAnimationChanged() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{
      name: this.entryAnimation,
      node: this
    }];
  },
  _exitAnimationChanged: function _exitAnimationChanged() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{
      name: this.exitAnimation,
      node: this
    }];
  },
  _copyProperties: function _copyProperties(config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },
  _cloneConfig: function _cloneConfig(config) {
    var clone = {
      isClone: true
    };

    this._copyProperties(clone, config);

    return clone;
  },
  _getAnimationConfigRecursive: function _getAnimationConfigRecursive(type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value && typeof this.animationConfig.value === 'function') {
      this._warn(this._logf('playAnimation', 'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));

      return;
    } // type is optional


    var thisConfig;

    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    } // iterate animations and recurse to process configurations from child nodes


    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(config.type || type, map, allConfigs);
        } else {
          if (config.id) {
            var cachedConfig = map[config.id];

            if (cachedConfig) {
              // merge configurations with the same id, making a clone lazily
              if (!cachedConfig.isClone) {
                map[config.id] = this._cloneConfig(cachedConfig);
                cachedConfig = map[config.id];
              }

              this._copyProperties(cachedConfig, config);
            } else {
              // put any configs with an id into a map
              map[config.id] = config;
            }
          } else {
            allConfigs.push(config);
          }
        }
      }
    }
  },

  /**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */
  getAnimationConfig: function getAnimationConfig(type) {
    var map = {};
    var allConfigs = [];

    this._getAnimationConfigRecursive(type, map, allConfigs); // append the configurations saved in the map to the array


    for (var key in map) {
      allConfigs.push(map[key]);
    }

    return allConfigs;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js ***!
  \********************************************************************************/
/*! exports provided: NeonAnimationRunnerBehaviorImpl, NeonAnimationRunnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehaviorImpl", function() { return NeonAnimationRunnerBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehavior", function() { return NeonAnimationRunnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neon-animatable-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js");
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
 * `NeonAnimationRunnerBehavior` adds a method to run animations.
 *
 * @polymerBehavior NeonAnimationRunnerBehavior
 */

var NeonAnimationRunnerBehaviorImpl = {
  _configureAnimations: function _configureAnimations(configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (var config, index = 0; config = configs[index]; index++) {
        var neonAnimation = document.createElement(config.name); // is this element actually a neon animation?

        if (neonAnimation.isNeonAnimation) {
          var result = null; // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined

          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function (config) {
              return null;
            };
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      var _result = resultsToPlay[i].result;
      var _config = resultsToPlay[i].config;
      var _neonAnimation = resultsToPlay[i].neonAnimation; // configuration or play could fail if polyfills aren't loaded

      try {
        // Check if we have an Effect rather than an Animation
        if (typeof _result.cancel != 'function') {
          _result = document.timeline.play(_result);
        }
      } catch (e) {
        _result = null;
        console.warn('Couldnt play', '(', _config.name, ').', e);
      }

      if (_result) {
        results.push({
          neonAnimation: _neonAnimation,
          config: _config,
          animation: _result
        });
      }
    }

    return results;
  },
  _shouldComplete: function _shouldComplete(activeEntries) {
    var finished = true;

    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }

    return finished;
  },
  _complete: function _complete(activeEntries) {
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].neonAnimation.complete(activeEntries[i].config);
    }

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.cancel();
    }
  },

  /**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */
  playAnimation: function playAnimation(type, cookie) {
    var configs = this.getAnimationConfig(type);

    if (!configs) {
      return;
    }

    this._active = this._active || {};

    if (this._active[type]) {
      this._complete(this._active[type]);

      delete this._active[type];
    }

    var activeEntries = this._configureAnimations(configs);

    if (activeEntries.length == 0) {
      this.fire('neon-animation-finish', cookie, {
        bubbles: false
      });
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function () {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);

          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {
            bubbles: false
          });
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function cancelAnimation() {
    for (var k in this._active) {
      var entries = this._active[k];

      for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};
/** @polymerBehavior */

var NeonAnimationRunnerBehavior = [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimatableBehavior"], NeonAnimationRunnerBehaviorImpl];

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

/***/ "./src/dialogs/domain-toggler/dialog-domain-toggler.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/domain-toggler/dialog-domain-toggler.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");




var DomainTogglerDialog = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomainTogglerDialog, _super);
    function DomainTogglerDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DomainTogglerDialog.prototype.showDialog = function (params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._params = params;
                return [2 /*return*/];
            });
        });
    };
    DomainTogglerDialog.prototype.render = function () {
        var _this = this;
        if (!this._params) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""])));
        }
        var domains = this._params.domains
            .map(function (domain) { return [_this.hass.localize("domain." + domain), domain]; })
            .sort();
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=", "\n      >\n        <h2>Toggle Domains</h2>\n        <div>\n          ", "\n        </div>\n      </ha-paper-dialog>\n    "], ["\n      <ha-paper-dialog\n        with-backdrop\n        opened\n        @opened-changed=", "\n      >\n        <h2>Toggle Domains</h2>\n        <div>\n          ",
            "\n        </div>\n      </ha-paper-dialog>\n    "])), this._openedChanged, domains.map(function (domain) {
            return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["html"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                <div>", "</div>\n                <mwc-button .domain=", " @click=", ">\n                  ", "\n                </mwc-button>\n                <mwc-button .domain=", " @click=", ">\n                  ", "\n                </mwc-button>\n              "], ["\n                <div>", "</div>\n                <mwc-button .domain=", " @click=", ">\n                  ", "\n                </mwc-button>\n                <mwc-button .domain=", " @click=", ">\n                  ", "\n                </mwc-button>\n              "])), domain[0], domain[1], _this._handleOff, _this.hass.localize("state.default.off"), domain[1], _this._handleOn, _this.hass.localize("state.default.on"));
        }));
    };
    DomainTogglerDialog.prototype._openedChanged = function (ev) {
        // Closed dialog by clicking on the overlay
        if (!ev.detail.value) {
            this._params = undefined;
        }
    };
    DomainTogglerDialog.prototype._handleOff = function (ev) {
        this._params.toggleDomain(ev.currentTarget.domain, false);
        ev.currentTarget.blur();
    };
    DomainTogglerDialog.prototype._handleOn = function (ev) {
        this._params.toggleDomain(ev.currentTarget.domain, true);
        ev.currentTarget.blur();
    };
    Object.defineProperty(DomainTogglerDialog, "styles", {
        get: function () {
            return [
                _resources_styles__WEBPACK_IMPORTED_MODULE_3__["haStyleDialog"],
                Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        div {\n          display: grid;\n          grid-template-columns: auto auto auto;\n          align-items: center;\n        }\n      "], ["\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        div {\n          display: grid;\n          grid-template-columns: auto auto auto;\n          align-items: center;\n        }\n      "]))),
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()
    ], DomainTogglerDialog.prototype, "_params", void 0);
    DomainTogglerDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("dialog-domain-toggler")
    ], DomainTogglerDialog);
    return DomainTogglerDialog;
}(lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWRvbWFpbi10b2dnbGVyLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tcnVubmVyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvZG9tYWluLXRvZ2dsZXIvZGlhbG9nLWRvbWFpbi10b2dnbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgaXMgaW1wbGVtZW50ZWQgYnkgZWxlbWVudHMgY29udGFpbmluZ1xuICogYW5pbWF0aW9ucyBmb3IgdXNlIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG4gKiBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYC5cbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRhYmxlQmVoYXZpb3IgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogQW5pbWF0aW9uIGNvbmZpZ3VyYXRpb24uIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mby5cbiAgICAgKi9cbiAgICBhbmltYXRpb25Db25maWc6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2VudHJ5JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmVudHJ5YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBlbnRyeUFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZW50cnlBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgcHJvcGVydHkgZm9yIHNldHRpbmcgYW4gJ2V4aXQnIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZXhpdGAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZXhpdEFuaW1hdGlvbjoge1xuICAgICAgb2JzZXJ2ZXI6ICdfZXhpdEFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgfSxcblxuICBfZW50cnlBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydlbnRyeSddID0gW3tuYW1lOiB0aGlzLmVudHJ5QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2V4aXRBbmltYXRpb25DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnIHx8IHt9O1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnWydleGl0J10gPSBbe25hbWU6IHRoaXMuZXhpdEFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9jb3B5UHJvcGVydGllczogZnVuY3Rpb24oY29uZmlnMSwgY29uZmlnMikge1xuICAgIC8vIHNoYWxsb3dseSBjb3B5IHByb3BlcnRpZXMgZnJvbSBjb25maWcyIHRvIGNvbmZpZzFcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWcyKSB7XG4gICAgICBjb25maWcxW3Byb3BlcnR5XSA9IGNvbmZpZzJbcHJvcGVydHldO1xuICAgIH1cbiAgfSxcblxuICBfY2xvbmVDb25maWc6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBjbG9uZSA9IHtpc0Nsb25lOiB0cnVlfTtcbiAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjbG9uZSwgY29uZmlnKTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH0sXG5cbiAgX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZTogZnVuY3Rpb24odHlwZSwgbWFwLCBhbGxDb25maWdzKSB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkNvbmZpZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX3dhcm4odGhpcy5fbG9nZihcbiAgICAgICAgICAncGxheUFuaW1hdGlvbicsXG4gICAgICAgICAgJ1BsZWFzZSBwdXQgXFwnYW5pbWF0aW9uQ29uZmlnXFwnIGluc2lkZSBvZiB5b3VyIGNvbXBvbmVudHMgXFwncHJvcGVydGllc1xcJyBvYmplY3QgaW5zdGVhZCBvZiBvdXRzaWRlIG9mIGl0LicpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB0eXBlIGlzIG9wdGlvbmFsXG4gICAgdmFyIHRoaXNDb25maWc7XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzQ29uZmlnKSkge1xuICAgICAgdGhpc0NvbmZpZyA9IFt0aGlzQ29uZmlnXTtcbiAgICB9XG5cbiAgICAvLyBpdGVyYXRlIGFuaW1hdGlvbnMgYW5kIHJlY3Vyc2UgdG8gcHJvY2VzcyBjb25maWd1cmF0aW9ucyBmcm9tIGNoaWxkIG5vZGVzXG4gICAgaWYgKHRoaXNDb25maWcpIHtcbiAgICAgIGZvciAodmFyIGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSB0aGlzQ29uZmlnW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBpZiAoY29uZmlnLmFuaW1hdGFibGUpIHtcbiAgICAgICAgICBjb25maWcuYW5pbWF0YWJsZS5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKFxuICAgICAgICAgICAgICBjb25maWcudHlwZSB8fCB0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjb25maWcuaWQpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgIGlmIChjYWNoZWRDb25maWcpIHtcbiAgICAgICAgICAgICAgLy8gbWVyZ2UgY29uZmlndXJhdGlvbnMgd2l0aCB0aGUgc2FtZSBpZCwgbWFraW5nIGEgY2xvbmUgbGF6aWx5XG4gICAgICAgICAgICAgIGlmICghY2FjaGVkQ29uZmlnLmlzQ2xvbmUpIHtcbiAgICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IHRoaXMuX2Nsb25lQ29uZmlnKGNhY2hlZENvbmZpZyk7XG4gICAgICAgICAgICAgICAgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2FjaGVkQ29uZmlnLCBjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcHV0IGFueSBjb25maWdzIHdpdGggYW4gaWQgaW50byBhIG1hcFxuICAgICAgICAgICAgICBtYXBbY29uZmlnLmlkXSA9IGNvbmZpZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsQ29uZmlncy5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBbiBlbGVtZW50IGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yYCBjYWxscyB0aGlzXG4gICAqIG1ldGhvZCB0byBjb25maWd1cmUgYW4gYW5pbWF0aW9uIHdpdGggYW4gb3B0aW9uYWwgdHlwZS4gRWxlbWVudHNcbiAgICogaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBzaG91bGQgZGVmaW5lIHRoZSBwcm9wZXJ0eVxuICAgKiBgYW5pbWF0aW9uQ29uZmlnYCwgd2hpY2ggaXMgZWl0aGVyIGEgY29uZmlndXJhdGlvbiBvYmplY3Qgb3IgYSBtYXAgb2ZcbiAgICogYW5pbWF0aW9uIHR5cGUgdG8gYXJyYXkgb2YgY29uZmlndXJhdGlvbiBvYmplY3RzLlxuICAgKi9cbiAgZ2V0QW5pbWF0aW9uQ29uZmlnOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgdmFyIG1hcCA9IHt9O1xuICAgIHZhciBhbGxDb25maWdzID0gW107XG4gICAgdGhpcy5fZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlKHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgLy8gYXBwZW5kIHRoZSBjb25maWd1cmF0aW9ucyBzYXZlZCBpbiB0aGUgbWFwIHRvIHRoZSBhcnJheVxuICAgIGZvciAodmFyIGtleSBpbiBtYXApIHtcbiAgICAgIGFsbENvbmZpZ3MucHVzaChtYXBba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBhbGxDb25maWdzO1xuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7TmVvbkFuaW1hdGFibGVCZWhhdmlvcn0gZnJvbSAnLi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGFkZHMgYSBtZXRob2QgdG8gcnVuIGFuaW1hdGlvbnMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvckltcGwgPSB7XG5cbiAgX2NvbmZpZ3VyZUFuaW1hdGlvbnM6IGZ1bmN0aW9uKGNvbmZpZ3MpIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciByZXN1bHRzVG9QbGF5ID0gW107XG5cbiAgICBpZiAoY29uZmlncy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gY29uZmlnc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG5lb25BbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbmZpZy5uYW1lKTtcbiAgICAgICAgLy8gaXMgdGhpcyBlbGVtZW50IGFjdHVhbGx5IGEgbmVvbiBhbmltYXRpb24/XG4gICAgICAgIGlmIChuZW9uQW5pbWF0aW9uLmlzTmVvbkFuaW1hdGlvbikge1xuICAgICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgICAgICAgIC8vIENsb3N1cmUgY29tcGlsZXIgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggYSB0cnkgLyBjYXRjaCBoZXJlLlxuICAgICAgICAgIC8vIC5jb25maWd1cmUgbmVlZHMgdG8gYmUgZXhwbGljaXRseSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCFuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHtBbmltYXRpb25FZmZlY3RSZWFkT25seX1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbi5jb25maWd1cmUgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVzdWx0ID0gbmVvbkFuaW1hdGlvbi5jb25maWd1cmUoY29uZmlnKTtcbiAgICAgICAgICByZXN1bHRzVG9QbGF5LnB1c2goe1xuICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnOicsIGNvbmZpZy5uYW1lLCAnbm90IGZvdW5kIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzVG9QbGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gcmVzdWx0c1RvUGxheVtpXS5yZXN1bHQ7XG4gICAgICBsZXQgY29uZmlnID0gcmVzdWx0c1RvUGxheVtpXS5jb25maWc7XG4gICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IHJlc3VsdHNUb1BsYXlbaV0ubmVvbkFuaW1hdGlvbjtcbiAgICAgIC8vIGNvbmZpZ3VyYXRpb24gb3IgcGxheSBjb3VsZCBmYWlsIGlmIHBvbHlmaWxscyBhcmVuJ3QgbG9hZGVkXG4gICAgICB0cnkge1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGFuIEVmZmVjdCByYXRoZXIgdGhhbiBhbiBBbmltYXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQuY2FuY2VsICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXN1bHQgPSBkb2N1bWVudC50aW1lbGluZS5wbGF5KHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZG50IHBsYXknLCAnKCcsIGNvbmZpZy5uYW1lLCAnKS4nLCBlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgIG5lb25BbmltYXRpb246IG5lb25BbmltYXRpb24sXG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgYW5pbWF0aW9uOiByZXN1bHQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9LFxuXG4gIF9zaG91bGRDb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIHZhciBmaW5pc2hlZCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ucGxheVN0YXRlICE9ICdmaW5pc2hlZCcpIHtcbiAgICAgICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaW5pc2hlZDtcbiAgfSxcblxuICBfY29tcGxldGU6IGZ1bmN0aW9uKGFjdGl2ZUVudHJpZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0ubmVvbkFuaW1hdGlvbi5jb21wbGV0ZShhY3RpdmVFbnRyaWVzW2ldLmNvbmZpZyk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQbGF5cyBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCBgdHlwZWAuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gdHlwZVxuICAgKiBAcGFyYW0geyFPYmplY3Q9fSBjb29raWVcbiAgICovXG4gIHBsYXlBbmltYXRpb246IGZ1bmN0aW9uKHR5cGUsIGNvb2tpZSkge1xuICAgIHZhciBjb25maWdzID0gdGhpcy5nZXRBbmltYXRpb25Db25maWcodHlwZSk7XG4gICAgaWYgKCFjb25maWdzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2FjdGl2ZSA9IHRoaXMuX2FjdGl2ZSB8fCB7fTtcbiAgICBpZiAodGhpcy5fYWN0aXZlW3R5cGVdKSB7XG4gICAgICB0aGlzLl9jb21wbGV0ZSh0aGlzLl9hY3RpdmVbdHlwZV0pO1xuICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlRW50cmllcyA9IHRoaXMuX2NvbmZpZ3VyZUFuaW1hdGlvbnMoY29uZmlncyk7XG5cbiAgICBpZiAoYWN0aXZlRW50cmllcy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2FjdGl2ZVt0eXBlXSA9IGFjdGl2ZUVudHJpZXM7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2ZUVudHJpZXNbaV0uYW5pbWF0aW9uLm9uZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRDb21wbGV0ZShhY3RpdmVFbnRyaWVzKSkge1xuICAgICAgICAgIHRoaXMuX2NvbXBsZXRlKGFjdGl2ZUVudHJpZXMpO1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hY3RpdmVbdHlwZV07XG4gICAgICAgICAgdGhpcy5maXJlKCduZW9uLWFuaW1hdGlvbi1maW5pc2gnLCBjb29raWUsIHtidWJibGVzOiBmYWxzZX0pO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIHRoZSBjdXJyZW50bHkgcnVubmluZyBhbmltYXRpb25zLlxuICAgKi9cbiAgY2FuY2VsQW5pbWF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBrIGluIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdmFyIGVudHJpZXMgPSB0aGlzLl9hY3RpdmVba11cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqIGluIGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllc1tqXS5hbmltYXRpb24uY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlID0ge307XG4gIH1cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9yID1cbiAgICBbTmVvbkFuaW1hdGFibGVCZWhhdmlvciwgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbi8qXG4gIEZpeGVzIGlzc3VlIHdpdGggbm90IHVzaW5nIHNoYWRvdyBkb20gcHJvcGVybHkgaW4gaXJvbi1vdmVybGF5LWJlaGF2aW9yL2ljb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcbiovXG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzXCI7XG5cbmltcG9ydCB7IElyb25Gb2N1c2FibGVzSGVscGVyIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBIYUlyb25Gb2N1c2FibGVzSGVscGVyID0ge1xuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiBJcm9uRm9jdXNhYmxlc0hlbHBlci5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogU2VhcmNoZXMgZm9yIG5vZGVzIHRoYXQgYXJlIHRhYmJhYmxlIGFuZCBhZGRzIHRoZW0gdG8gdGhlIGByZXN1bHRgIGFycmF5LlxuICAgKiBSZXR1cm5zIGlmIHRoZSBgcmVzdWx0YCBhcnJheSBuZWVkcyB0byBiZSBzb3J0ZWQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGUgVGhlIHN0YXJ0aW5nIHBvaW50IGZvciB0aGUgc2VhcmNoOyBhZGRlZCB0byBgcmVzdWx0YFxuICAgKiBpZiB0YWJiYWJsZS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gcmVzdWx0XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY29sbGVjdFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUsIHJlc3VsdCkge1xuICAgIC8vIElmIG5vdCBhbiBlbGVtZW50IG9yIG5vdCB2aXNpYmxlLCBubyBuZWVkIHRvIGV4cGxvcmUgY2hpbGRyZW4uXG4gICAgaWYgKFxuICAgICAgbm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICFJcm9uRm9jdXNhYmxlc0hlbHBlci5faXNWaXNpYmxlKG5vZGUpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSBJcm9uRm9jdXNhYmxlc0hlbHBlci5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJjb250ZW50XCIgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09IFwic2xvdFwiKSB7XG4gICAgICBjaGlsZHJlbiA9IGRvbShlbGVtZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgIC8vIFVzZSBzaGFkb3cgcm9vdCBpZiBwb3NzaWJsZSwgd2lsbCBjaGVjayBmb3IgZGlzdHJpYnV0ZWQgbm9kZXMuXG4gICAgICAvLyBUSElTIElTIFRIRSBDSEFOR0VEIExJTkVcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50LnJvb3QgfHwgZWxlbWVudCkuY2hpbGRyZW47XG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgIG5lZWRzU29ydCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKGNoaWxkcmVuW2ldLCByZXN1bHQpIHx8IG5lZWRzU29ydDtcbiAgICB9XG4gICAgcmV0dXJuIG5lZWRzU29ydDtcbiAgfSxcbn07XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3NcIjtcbmltcG9ydCB7IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiLi9oYS1pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzXCI7XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVyRGlhbG9nRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1kaWFsb2cvcGFwZXItZGlhbG9nXCI7XG5cbmNvbnN0IHBhcGVyRGlhbG9nQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1kaWFsb2dcIik7XG5cbi8vIGJlaGF2aW9yIHRoYXQgd2lsbCBvdmVycmlkZSBleGlzdGluZyBpcm9uLW92ZXJsYXktYmVoYXZpb3IgYW5kIGNhbGwgdGhlIGZpeGVkIGltcGxlbWVudGF0aW9uXG5jb25zdCBoYVRhYkZpeEJlaGF2aW9ySW1wbCA9IHtcbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSGFJcm9uRm9jdXNhYmxlc0hlbHBlci5nZXRUYWJiYWJsZU5vZGVzKHRoaXMpO1xuICB9LFxufTtcblxuLy8gcGFwZXItZGlhbG9nIHRoYXQgdXNlcyB0aGUgaGFUYWJGaXhCZWhhdmlvckltcGwgYmVodmFpb3Jcbi8vIGV4cG9ydCBjbGFzcyBIYVBhcGVyRGlhbG9nIGV4dGVuZHMgcGFwZXJEaWFsb2dDbGFzcyB7fVxuLy8gQHRzLWlnbm9yZVxuZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2dcbiAgZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhbaGFUYWJGaXhCZWhhdmlvckltcGxdLCBwYXBlckRpYWxvZ0NsYXNzKVxuICBpbXBsZW1lbnRzIFBhcGVyRGlhbG9nRWxlbWVudCB7fVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZGlhbG9nXCI6IEhhUGFwZXJEaWFsb2c7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXBhcGVyLWRpYWxvZ1wiLCBIYVBhcGVyRGlhbG9nKTtcbiIsImltcG9ydCB7XG4gIGN1c3RvbUVsZW1lbnQsXG4gIExpdEVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHRBcnJheSxcbiAgY3NzLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2RpYWxvZy9oYS1wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEhhRG9tYWluVG9nZ2xlckRpYWxvZ1BhcmFtcyB9IGZyb20gXCIuL3Nob3ctZGlhbG9nLWRvbWFpbi10b2dnbGVyXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uLy4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImRpYWxvZy1kb21haW4tdG9nZ2xlclwiKVxuY2xhc3MgRG9tYWluVG9nZ2xlckRpYWxvZyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3BhcmFtcz86IEhhRG9tYWluVG9nZ2xlckRpYWxvZ1BhcmFtcztcblxuICBwdWJsaWMgYXN5bmMgc2hvd0RpYWxvZyhwYXJhbXM6IEhhRG9tYWluVG9nZ2xlckRpYWxvZ1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuX3BhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3BhcmFtcykge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBkb21haW5zID0gdGhpcy5fcGFyYW1zLmRvbWFpbnNcbiAgICAgIC5tYXAoKGRvbWFpbikgPT4gW3RoaXMuaGFzcy5sb2NhbGl6ZShgZG9tYWluLiR7ZG9tYWlufWApLCBkb21haW5dKVxuICAgICAgLnNvcnQoKTtcblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIG9wZW5lZFxuICAgICAgICBAb3BlbmVkLWNoYW5nZWQ9JHt0aGlzLl9vcGVuZWRDaGFuZ2VkfVxuICAgICAgPlxuICAgICAgICA8aDI+VG9nZ2xlIERvbWFpbnM8L2gyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZG9tYWlucy5tYXAoXG4gICAgICAgICAgICAoZG9tYWluKSA9PlxuICAgICAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgICAgIDxkaXY+JHtkb21haW5bMF19PC9kaXY+XG4gICAgICAgICAgICAgICAgPG13Yy1idXR0b24gLmRvbWFpbj0ke2RvbWFpblsxXX0gQGNsaWNrPSR7dGhpcy5faGFuZGxlT2ZmfT5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwic3RhdGUuZGVmYXVsdC5vZmZcIil9XG4gICAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxtd2MtYnV0dG9uIC5kb21haW49JHtkb21haW5bMV19IEBjbGljaz0ke3RoaXMuX2hhbmRsZU9ufT5cbiAgICAgICAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwic3RhdGUuZGVmYXVsdC5vblwiKX1cbiAgICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGEtcGFwZXItZGlhbG9nPlxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9vcGVuZWRDaGFuZ2VkKGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PGJvb2xlYW4+KTogdm9pZCB7XG4gICAgLy8gQ2xvc2VkIGRpYWxvZyBieSBjbGlja2luZyBvbiB0aGUgb3ZlcmxheVxuICAgIGlmICghZXYuZGV0YWlsLnZhbHVlKSB7XG4gICAgICB0aGlzLl9wYXJhbXMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT2ZmKGV2KSB7XG4gICAgdGhpcy5fcGFyYW1zIS50b2dnbGVEb21haW4oZXYuY3VycmVudFRhcmdldC5kb21haW4sIGZhbHNlKTtcbiAgICBldi5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9uKGV2KSB7XG4gICAgdGhpcy5fcGFyYW1zIS50b2dnbGVEb21haW4oZXYuY3VycmVudFRhcmdldC5kb21haW4sIHRydWUpO1xuICAgIGV2LmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0QXJyYXkge1xuICAgIHJldHVybiBbXG4gICAgICBoYVN0eWxlRGlhbG9nLFxuICAgICAgY3NzYFxuICAgICAgICBoYS1wYXBlci1kaWFsb2cge1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJkaWFsb2ctZG9tYWluLXRvZ2dsZXJcIjogRG9tYWluVG9nZ2xlckRpYWxvZztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7O0FBTUE7QUFFQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXRCQTtBQTZCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzSEE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7Ozs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcElBO0FBdUlBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQUFBOztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBU0E7QUFJQTtBQUdBO0FBQUE7QUFBQTs7QUEwRUE7QUF0RUE7OztBQUNBOzs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFtQkE7QUFUQTtBQUFBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7OztBQUFBO0FBdkVBO0FBQUE7QUFBQTtBQUZBO0FBREE7QUFDQTtBQTBFQTtBQUFBOzs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==