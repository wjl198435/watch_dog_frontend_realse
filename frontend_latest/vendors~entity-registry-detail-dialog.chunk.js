(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~entity-registry-detail-dialog"],{

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
const NeonAnimatableBehavior = {

  properties: {

    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {type: Object},

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String,
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String,
    },

  },

  _entryAnimationChanged: function() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{name: this.entryAnimation, node: this}];
  },

  _exitAnimationChanged: function() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{name: this.exitAnimation, node: this}];
  },

  _copyProperties: function(config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },

  _cloneConfig: function(config) {
    var clone = {isClone: true};
    this._copyProperties(clone, config);
    return clone;
  },

  _getAnimationConfigRecursive: function(type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value &&
        typeof this.animationConfig.value === 'function') {
      this._warn(this._logf(
          'playAnimation',
          'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));
      return;
    }

    // type is optional
    var thisConfig;
    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    }

    // iterate animations and recurse to process configurations from child nodes
    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(
              config.type || type, map, allConfigs);
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
  getAnimationConfig: function(type) {
    var map = {};
    var allConfigs = [];
    this._getAnimationConfigRecursive(type, map, allConfigs);
    // append the configurations saved in the map to the array
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
const NeonAnimationRunnerBehaviorImpl = {

  _configureAnimations: function(configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (let config, index = 0; config = configs[index]; index++) {
        let neonAnimation = document.createElement(config.name);
        // is this element actually a neon animation?
        if (neonAnimation.isNeonAnimation) {
          let result = null;
          // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined
          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function(config) {
              return null;
            }
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation,
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      let result = resultsToPlay[i].result;
      let config = resultsToPlay[i].config;
      let neonAnimation = resultsToPlay[i].neonAnimation;
      // configuration or play could fail if polyfills aren't loaded
      try {
        // Check if we have an Effect rather than an Animation
        if (typeof result.cancel != 'function') {
          result = document.timeline.play(result);
        }
      } catch (e) {
        result = null;
        console.warn('Couldnt play', '(', config.name, ').', e);
      }

      if (result) {
        results.push({
          neonAnimation: neonAnimation,
          config: config,
          animation: result,
        });
      }
    }

    return results;
  },

  _shouldComplete: function(activeEntries) {
    var finished = true;
    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }
    return finished;
  },

  _complete: function(activeEntries) {
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
  playAnimation: function(type, cookie) {
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
      this.fire('neon-animation-finish', cookie, {bubbles: false});
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function() {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);
          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {bubbles: false});
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function() {
    for (var k in this._active) {
      var entries = this._active[k]

                    for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};

/** @polymerBehavior */
const NeonAnimationRunnerBehavior =
    [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimatableBehavior"], NeonAnimationRunnerBehaviorImpl];


/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35lbnRpdHktcmVnaXN0cnktZGV0YWlsLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9uZW9uLWFuaW1hdGlvbi9uZW9uLWFuaW1hdGFibGUtYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLXJ1bm5lci1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcbiAqIGBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yYCBpcyBpbXBsZW1lbnRlZCBieSBlbGVtZW50cyBjb250YWluaW5nXG4gKiBhbmltYXRpb25zIGZvciB1c2Ugd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbiAqIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgLlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGFibGVCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBBbmltYXRpb24gY29uZmlndXJhdGlvbi4gU2VlIFJFQURNRSBmb3IgbW9yZSBpbmZvLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZW50cnknIGFuaW1hdGlvbi4gRG8gbm90IHNldFxuICAgICAqIGBhbmltYXRpb25Db25maWcuZW50cnlgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGVudHJ5QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19lbnRyeUFuaW1hdGlvbkNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSBmb3Igc2V0dGluZyBhbiAnZXhpdCcgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5leGl0YCBtYW51YWxseSBpZiB1c2luZyB0aGlzLiBUaGUgYW5pbWF0ZWQgbm9kZSBpcyBzZXRcbiAgICAgKiB0byBgdGhpc2AgaWYgdXNpbmcgdGhpcyBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBleGl0QW5pbWF0aW9uOiB7XG4gICAgICBvYnNlcnZlcjogJ19leGl0QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICB9LFxuXG4gIF9lbnRyeUFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2VudHJ5J10gPSBbe25hbWU6IHRoaXMuZW50cnlBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfZXhpdEFuaW1hdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWcgfHwge307XG4gICAgdGhpcy5hbmltYXRpb25Db25maWdbJ2V4aXQnXSA9IFt7bmFtZTogdGhpcy5leGl0QW5pbWF0aW9uLCBub2RlOiB0aGlzfV07XG4gIH0sXG5cbiAgX2NvcHlQcm9wZXJ0aWVzOiBmdW5jdGlvbihjb25maWcxLCBjb25maWcyKSB7XG4gICAgLy8gc2hhbGxvd2x5IGNvcHkgcHJvcGVydGllcyBmcm9tIGNvbmZpZzIgdG8gY29uZmlnMVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZzFbcHJvcGVydHldID0gY29uZmlnMltwcm9wZXJ0eV07XG4gICAgfVxuICB9LFxuXG4gIF9jbG9uZUNvbmZpZzogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIGNsb25lID0ge2lzQ2xvbmU6IHRydWV9O1xuICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNsb25lLCBjb25maWcpO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfSxcblxuICBfZ2V0QW5pbWF0aW9uQ29uZmlnUmVjdXJzaXZlOiBmdW5jdGlvbih0eXBlLCBtYXAsIGFsbENvbmZpZ3MpIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlICYmXG4gICAgICAgIHR5cGVvZiB0aGlzLmFuaW1hdGlvbkNvbmZpZy52YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5fd2Fybih0aGlzLl9sb2dmKFxuICAgICAgICAgICdwbGF5QW5pbWF0aW9uJyxcbiAgICAgICAgICAnUGxlYXNlIHB1dCBcXCdhbmltYXRpb25Db25maWdcXCcgaW5zaWRlIG9mIHlvdXIgY29tcG9uZW50cyBcXCdwcm9wZXJ0aWVzXFwnIG9iamVjdCBpbnN0ZWFkIG9mIG91dHNpZGUgb2YgaXQuJykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHR5cGUgaXMgb3B0aW9uYWxcbiAgICB2YXIgdGhpc0NvbmZpZztcbiAgICBpZiAodHlwZSkge1xuICAgICAgdGhpc0NvbmZpZyA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWc7XG4gICAgfVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXNDb25maWcpKSB7XG4gICAgICB0aGlzQ29uZmlnID0gW3RoaXNDb25maWddO1xuICAgIH1cblxuICAgIC8vIGl0ZXJhdGUgYW5pbWF0aW9ucyBhbmQgcmVjdXJzZSB0byBwcm9jZXNzIGNvbmZpZ3VyYXRpb25zIGZyb20gY2hpbGQgbm9kZXNcbiAgICBpZiAodGhpc0NvbmZpZykge1xuICAgICAgZm9yICh2YXIgY29uZmlnLCBpbmRleCA9IDA7IGNvbmZpZyA9IHRoaXNDb25maWdbaW5kZXhdOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChjb25maWcuYW5pbWF0YWJsZSkge1xuICAgICAgICAgIGNvbmZpZy5hbmltYXRhYmxlLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUoXG4gICAgICAgICAgICAgIGNvbmZpZy50eXBlIHx8IHR5cGUsIG1hcCwgYWxsQ29uZmlncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGNvbmZpZy5pZCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgaWYgKGNhY2hlZENvbmZpZykge1xuICAgICAgICAgICAgICAvLyBtZXJnZSBjb25maWd1cmF0aW9ucyB3aXRoIHRoZSBzYW1lIGlkLCBtYWtpbmcgYSBjbG9uZSBsYXppbHlcbiAgICAgICAgICAgICAgaWYgKCFjYWNoZWRDb25maWcuaXNDbG9uZSkge1xuICAgICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gdGhpcy5fY2xvbmVDb25maWcoY2FjaGVkQ29uZmlnKTtcbiAgICAgICAgICAgICAgICBjYWNoZWRDb25maWcgPSBtYXBbY29uZmlnLmlkXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLl9jb3B5UHJvcGVydGllcyhjYWNoZWRDb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBwdXQgYW55IGNvbmZpZ3Mgd2l0aCBhbiBpZCBpbnRvIGEgbWFwXG4gICAgICAgICAgICAgIG1hcFtjb25maWcuaWRdID0gY29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGxDb25maWdzLnB1c2goY29uZmlnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIGVsZW1lbnQgaW1wbGVtZW50aW5nIGBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JgIGNhbGxzIHRoaXNcbiAgICogbWV0aG9kIHRvIGNvbmZpZ3VyZSBhbiBhbmltYXRpb24gd2l0aCBhbiBvcHRpb25hbCB0eXBlLiBFbGVtZW50c1xuICAgKiBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIHNob3VsZCBkZWZpbmUgdGhlIHByb3BlcnR5XG4gICAqIGBhbmltYXRpb25Db25maWdgLCB3aGljaCBpcyBlaXRoZXIgYSBjb25maWd1cmF0aW9uIG9iamVjdCBvciBhIG1hcCBvZlxuICAgKiBhbmltYXRpb24gdHlwZSB0byBhcnJheSBvZiBjb25maWd1cmF0aW9uIG9iamVjdHMuXG4gICAqL1xuICBnZXRBbmltYXRpb25Db25maWc6IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICB2YXIgbWFwID0ge307XG4gICAgdmFyIGFsbENvbmZpZ3MgPSBbXTtcbiAgICB0aGlzLl9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmUodHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAvLyBhcHBlbmQgdGhlIGNvbmZpZ3VyYXRpb25zIHNhdmVkIGluIHRoZSBtYXAgdG8gdGhlIGFycmF5XG4gICAgZm9yICh2YXIga2V5IGluIG1hcCkge1xuICAgICAgYWxsQ29uZmlncy5wdXNoKG1hcFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFsbENvbmZpZ3M7XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yfSBmcm9tICcuL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgYWRkcyBhIG1ldGhvZCB0byBydW4gYW5pbWF0aW9ucy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbCA9IHtcblxuICBfY29uZmlndXJlQW5pbWF0aW9uczogZnVuY3Rpb24oY29uZmlncykge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlc3VsdHNUb1BsYXkgPSBbXTtcblxuICAgIGlmIChjb25maWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSBjb25maWdzW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLm5hbWUpO1xuICAgICAgICAvLyBpcyB0aGlzIGVsZW1lbnQgYWN0dWFsbHkgYSBuZW9uIGFuaW1hdGlvbj9cbiAgICAgICAgaWYgKG5lb25BbmltYXRpb24uaXNOZW9uQW5pbWF0aW9uKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgLy8gQ2xvc3VyZSBjb21waWxlciBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBhIHRyeSAvIGNhdGNoIGhlcmUuXG4gICAgICAgICAgLy8gLmNvbmZpZ3VyZSBuZWVkcyB0byBiZSBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBpZiAoIW5lb25BbmltYXRpb24uY29uZmlndXJlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FuaW1hdGlvbkVmZmVjdFJlYWRPbmx5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQgPSBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZShjb25maWcpO1xuICAgICAgICAgIHJlc3VsdHNUb1BsYXkucHVzaCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5pcyArICc6JywgY29uZmlnLm5hbWUsICdub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHNUb1BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzVG9QbGF5W2ldLnJlc3VsdDtcbiAgICAgIGxldCBjb25maWcgPSByZXN1bHRzVG9QbGF5W2ldLmNvbmZpZztcbiAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gcmVzdWx0c1RvUGxheVtpXS5uZW9uQW5pbWF0aW9uO1xuICAgICAgLy8gY29uZmlndXJhdGlvbiBvciBwbGF5IGNvdWxkIGZhaWwgaWYgcG9seWZpbGxzIGFyZW4ndCBsb2FkZWRcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gRWZmZWN0IHJhdGhlciB0aGFuIGFuIEFuaW1hdGlvblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5jYW5jZWwgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnRpbWVsaW5lLnBsYXkocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkbnQgcGxheScsICcoJywgY29uZmlnLm5hbWUsICcpLicsIGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBhbmltYXRpb246IHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG5cbiAgX3Nob3VsZENvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgdmFyIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5wbGF5U3RhdGUgIT0gJ2ZpbmlzaGVkJykge1xuICAgICAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaGVkO1xuICB9LFxuXG4gIF9jb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5uZW9uQW5pbWF0aW9uLmNvbXBsZXRlKGFjdGl2ZUVudHJpZXNbaV0uY29uZmlnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGB0eXBlYC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSB0eXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdD19IGNvb2tpZVxuICAgKi9cbiAgcGxheUFuaW1hdGlvbjogZnVuY3Rpb24odHlwZSwgY29va2llKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmdldEFuaW1hdGlvbkNvbmZpZyh0eXBlKTtcbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5fYWN0aXZlIHx8IHt9O1xuICAgIGlmICh0aGlzLl9hY3RpdmVbdHlwZV0pIHtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKHRoaXMuX2FjdGl2ZVt0eXBlXSk7XG4gICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbnRyaWVzID0gdGhpcy5fY29uZmlndXJlQW5pbWF0aW9ucyhjb25maWdzKTtcblxuICAgIGlmIChhY3RpdmVFbnRyaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlW3R5cGVdID0gYWN0aXZlRW50cmllcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ub25maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZENvbXBsZXRlKGFjdGl2ZUVudHJpZXMpKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGxldGUoYWN0aXZlRW50cmllcyk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICAgICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAqL1xuICBjYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGsgaW4gdGhpcy5fYWN0aXZlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuX2FjdGl2ZVtrXVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZW50cmllcykge1xuICAgICAgICBlbnRyaWVzW2pdLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSB7fTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3IgPVxuICAgIFtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yLCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=