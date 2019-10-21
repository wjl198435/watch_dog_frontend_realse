(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-unused-entities~panel-config-devices~panel-config-entity-registry~panel-config-integrations"],{

/***/ "./node_modules/@material/animation/util.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/animation/util.js ***!
  \**************************************************/
/*! exports provided: getCorrectPropertyName, getCorrectEventName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function() { return getCorrectPropertyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCorrectEventName", function() { return getCorrectEventName; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssPropertyNameMap = {
  animation: {
    prefixed: '-webkit-animation',
    standard: 'animation'
  },
  transform: {
    prefixed: '-webkit-transform',
    standard: 'transform'
  },
  transition: {
    prefixed: '-webkit-transition',
    standard: 'transition'
  }
};
var jsEventTypeMap = {
  animationend: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationEnd',
    standard: 'animationend'
  },
  animationiteration: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationIteration',
    standard: 'animationiteration'
  },
  animationstart: {
    cssProperty: 'animation',
    prefixed: 'webkitAnimationStart',
    standard: 'animationstart'
  },
  transitionend: {
    cssProperty: 'transition',
    prefixed: 'webkitTransitionEnd',
    standard: 'transitionend'
  }
};

function isWindow(windowObj) {
  return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}

function getCorrectPropertyName(windowObj, cssProperty) {
  if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
    var el = windowObj.document.createElement('div');
    var _a = cssPropertyNameMap[cssProperty],
        standard = _a.standard,
        prefixed = _a.prefixed;
    var isStandard = standard in el.style;
    return isStandard ? standard : prefixed;
  }

  return cssProperty;
}
function getCorrectEventName(windowObj, eventType) {
  if (isWindow(windowObj) && eventType in jsEventTypeMap) {
    var el = windowObj.document.createElement('div');
    var _a = jsEventTypeMap[eventType],
        standard = _a.standard,
        prefixed = _a.prefixed,
        cssProperty = _a.cssProperty;
    var isStandard = cssProperty in el.style;
    return isStandard ? standard : prefixed;
  }

  return eventType;
}

/***/ }),

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/*! exports provided: MDCComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCComponent", function() { return MDCComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/base/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */



var MDCComponent =
/** @class */
function () {
  function MDCComponent(root, foundation) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    this.root_ = root;
    this.initialize.apply(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](args)); // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.

    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  MDCComponent.attachTo = function (root) {
    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
    // returns an instantiated component with its root set to that element. Also note that in the cases of
    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
    // from getDefaultFoundation().
    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]({}));
  };
  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


  MDCComponent.prototype.initialize = function () {
    var _args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      _args[_i] = arguments[_i];
    } // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.

  };

  MDCComponent.prototype.getDefaultFoundation = function () {
    // Subclasses must override this method to return a properly configured foundation class for the
    // component.
    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
  };

  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
    // object. An example of this would be a form control wrapper that needs to synchronize its internal state
    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
  };

  MDCComponent.prototype.destroy = function () {
    // Subclasses may implement this method to release any resources / deregister any listeners they have
    // attached. An example of this might be deregistering a resize event from the window object.
    this.foundation_.destroy();
  };

  MDCComponent.prototype.listen = function (evtType, handler, options) {
    this.root_.addEventListener(evtType, handler, options);
  };

  MDCComponent.prototype.unlisten = function (evtType, handler, options) {
    this.root_.removeEventListener(evtType, handler, options);
  };
  /**
   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
   */


  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
    if (shouldBubble === void 0) {
      shouldBubble = false;
    }

    var evt;

    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  };

  return MDCComponent;
}();

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCComponent);

/***/ }),

/***/ "./node_modules/@material/checkbox/component.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/component.js ***!
  \******************************************************/
/*! exports provided: MDCCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() { return MDCCheckbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_animation_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/animation/util */ "./node_modules/@material/animation/util.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/ripple/component */ "./node_modules/@material/ripple/component.js");
/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/ripple/foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/checkbox/foundation.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */








var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckbox =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckbox, _super);

  function MDCCheckbox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.ripple_ = _this.createRipple_();
    return _this;
  }

  MDCCheckbox.attachTo = function (root) {
    return new MDCCheckbox(root);
  };

  Object.defineProperty(MDCCheckbox.prototype, "ripple", {
    get: function get() {
      return this.ripple_;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "checked", {
    get: function get() {
      return this.nativeControl_.checked;
    },
    set: function set(checked) {
      this.nativeControl_.checked = checked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
    get: function get() {
      return this.nativeControl_.indeterminate;
    },
    set: function set(indeterminate) {
      this.nativeControl_.indeterminate = indeterminate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "disabled", {
    get: function get() {
      return this.nativeControl_.disabled;
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckbox.prototype, "value", {
    get: function get() {
      return this.nativeControl_.value;
    },
    set: function set(value) {
      this.nativeControl_.value = value;
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckbox.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.handleChange_ = function () {
      return _this.foundation_.handleChange();
    };

    this.handleAnimationEnd_ = function () {
      return _this.foundation_.handleAnimationEnd();
    };

    this.nativeControl_.addEventListener('change', this.handleChange_);
    this.listen(Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
    this.installPropertyChangeHooks_();
  };

  MDCCheckbox.prototype.destroy = function () {
    this.ripple_.destroy();
    this.nativeControl_.removeEventListener('change', this.handleChange_);
    this.unlisten(Object(_material_animation_util__WEBPACK_IMPORTED_MODULE_1__["getCorrectEventName"])(window, 'animationend'), this.handleAnimationEnd_);
    this.uninstallPropertyChangeHooks_();

    _super.prototype.destroy.call(this);
  };

  MDCCheckbox.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = {
      addClass: function addClass(className) {
        return _this.root_.classList.add(className);
      },
      forceLayout: function forceLayout() {
        return _this.root_.offsetWidth;
      },
      hasNativeControl: function hasNativeControl() {
        return !!_this.nativeControl_;
      },
      isAttachedToDOM: function isAttachedToDOM() {
        return Boolean(_this.root_.parentNode);
      },
      isChecked: function isChecked() {
        return _this.checked;
      },
      isIndeterminate: function isIndeterminate() {
        return _this.indeterminate;
      },
      removeClass: function removeClass(className) {
        return _this.root_.classList.remove(className);
      },
      removeNativeControlAttr: function removeNativeControlAttr(attr) {
        return _this.nativeControl_.removeAttribute(attr);
      },
      setNativeControlAttr: function setNativeControlAttr(attr, value) {
        return _this.nativeControl_.setAttribute(attr, value);
      },
      setNativeControlDisabled: function setNativeControlDisabled(disabled) {
        return _this.nativeControl_.disabled = disabled;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_7__["MDCCheckboxFoundation"](adapter);
  };

  MDCCheckbox.prototype.createRipple_ = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


    var adapter = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCRipple"].createAdapter(this), {
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return _this.nativeControl_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_3__["applyPassive"])());
      },
      isSurfaceActive: function isSurfaceActive() {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_4__["matches"])(_this.nativeControl_, ':active');
      },
      isUnbounded: function isUnbounded() {
        return true;
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return _this.nativeControl_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_3__["applyPassive"])());
      }
    });

    return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_5__["MDCRipple"](this.root_, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_6__["MDCRippleFoundation"](adapter));
  };

  MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
    var _this = this;

    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
      // See: https://bugs.webkit.org/show_bug.cgi?id=49739

      if (!validDescriptor(desc)) {
        return;
      } // Type cast is needed for compatibility with Closure Compiler.


      var nativeGetter = desc.get;
      var nativeCbDesc = {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        get: nativeGetter,
        set: function set(state) {
          desc.set.call(nativeCb, state);

          _this.foundation_.handleChange();
        }
      };
      Object.defineProperty(nativeCb, controlState, nativeCbDesc);
    });
  };

  MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
    var nativeCb = this.nativeControl_;
    var cbProto = Object.getPrototypeOf(nativeCb);
    CB_PROTO_PROPS.forEach(function (controlState) {
      var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);

      if (!validDescriptor(desc)) {
        return;
      }

      Object.defineProperty(nativeCb, controlState, desc);
    });
  };

  Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation__WEBPACK_IMPORTED_MODULE_7__["MDCCheckboxFoundation"].strings.NATIVE_CONTROL_SELECTOR;
      var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);

      if (!el) {
        throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
      }

      return el;
    },
    enumerable: true,
    configurable: true
  });
  return MDCCheckbox;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__["MDCComponent"]);



function validDescriptor(inputPropDesc) {
  return !!inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),

/***/ "./node_modules/@material/checkbox/constants.js":
/*!******************************************************!*\
  !*** ./node_modules/@material/checkbox/constants.js ***!
  \******************************************************/
/*! exports provided: cssClasses, strings, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  BACKGROUND: 'mdc-checkbox__background',
  CHECKED: 'mdc-checkbox--checked',
  CHECKMARK: 'mdc-checkbox__checkmark',
  CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
  DISABLED: 'mdc-checkbox--disabled',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  MIXEDMARK: 'mdc-checkbox__mixedmark',
  NATIVE_CONTROL: 'mdc-checkbox__native-control',
  ROOT: 'mdc-checkbox',
  SELECTED: 'mdc-checkbox--selected',
  UPGRADED: 'mdc-checkbox--upgraded'
};
var strings = {
  ARIA_CHECKED_ATTR: 'aria-checked',
  ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
  NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_UNCHECKED: 'unchecked'
};
var numbers = {
  ANIM_END_LATCH_MS: 250
};

/***/ }),

/***/ "./node_modules/@material/checkbox/foundation.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/checkbox/foundation.js ***!
  \*******************************************************/
/*! exports provided: MDCCheckboxFoundation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() { return MDCCheckboxFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/checkbox/constants.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCCheckboxFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCCheckboxFoundation, _super);

  function MDCCheckboxFoundation(adapter) {
    var _this = _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCCheckboxFoundation.defaultAdapter, adapter)) || this;

    _this.currentCheckState_ = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.enableAnimationEndHandler_ = false;
    return _this;
  }

  Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "strings", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "numbers", {
    get: function get() {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClass: function addClass() {
          return undefined;
        },
        forceLayout: function forceLayout() {
          return undefined;
        },
        hasNativeControl: function hasNativeControl() {
          return false;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return false;
        },
        isChecked: function isChecked() {
          return false;
        },
        isIndeterminate: function isIndeterminate() {
          return false;
        },
        removeClass: function removeClass() {
          return undefined;
        },
        removeNativeControlAttr: function removeNativeControlAttr() {
          return undefined;
        },
        setNativeControlAttr: function setNativeControlAttr() {
          return undefined;
        },
        setNativeControlDisabled: function setNativeControlDisabled() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });

  MDCCheckboxFoundation.prototype.init = function () {
    this.currentCheckState_ = this.determineCheckState_();
    this.updateAriaChecked_();
    this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].UPGRADED);
  };

  MDCCheckboxFoundation.prototype.destroy = function () {
    clearTimeout(this.animEndLatchTimer_);
  };

  MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
    this.adapter_.setNativeControlDisabled(disabled);

    if (disabled) {
      this.adapter_.addClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    } else {
      this.adapter_.removeClass(_constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].DISABLED);
    }
  };
  /**
   * Handles the animationend event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
    var _this = this;

    if (!this.enableAnimationEndHandler_) {
      return;
    }

    clearTimeout(this.animEndLatchTimer_);
    this.animEndLatchTimer_ = setTimeout(function () {
      _this.adapter_.removeClass(_this.currentAnimationClass_);

      _this.enableAnimationEndHandler_ = false;
    }, _constants__WEBPACK_IMPORTED_MODULE_2__["numbers"].ANIM_END_LATCH_MS);
  };
  /**
   * Handles the change event for the checkbox
   */


  MDCCheckboxFoundation.prototype.handleChange = function () {
    this.transitionCheckState_();
  };

  MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
    if (!this.adapter_.hasNativeControl()) {
      return;
    }

    var oldState = this.currentCheckState_;
    var newState = this.determineCheckState_();

    if (oldState === newState) {
      return;
    }

    this.updateAriaChecked_();
    var TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
    var SELECTED = _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].SELECTED;

    if (newState === TRANSITION_STATE_UNCHECKED) {
      this.adapter_.removeClass(SELECTED);
    } else {
      this.adapter_.addClass(SELECTED);
    } // Check to ensure that there isn't a previously existing animation class, in case for example
    // the user interacted with the checkbox before the animation was finished.


    if (this.currentAnimationClass_.length > 0) {
      clearTimeout(this.animEndLatchTimer_);
      this.adapter_.forceLayout();
      this.adapter_.removeClass(this.currentAnimationClass_);
    }

    this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
    this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
    // to the DOM.

    if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
      this.adapter_.addClass(this.currentAnimationClass_);
      this.enableAnimationEndHandler_ = true;
    }
  };

  MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
    var TRANSITION_STATE_INDETERMINATE = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INDETERMINATE,
        TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;

    if (this.adapter_.isIndeterminate()) {
      return TRANSITION_STATE_INDETERMINATE;
    }

    return this.adapter_.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
  };

  MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
    var TRANSITION_STATE_INIT = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_INIT,
        TRANSITION_STATE_CHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_CHECKED,
        TRANSITION_STATE_UNCHECKED = _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].TRANSITION_STATE_UNCHECKED;
    var _a = MDCCheckboxFoundation.cssClasses,
        ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED,
        ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE,
        ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED,
        ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE,
        ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED,
        ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;

    switch (oldState) {
      case TRANSITION_STATE_INIT:
        if (newState === TRANSITION_STATE_UNCHECKED) {
          return '';
        }

        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;

      case TRANSITION_STATE_UNCHECKED:
        return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

      case TRANSITION_STATE_CHECKED:
        return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;

      default:
        // TRANSITION_STATE_INDETERMINATE
        return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
    }
  };

  MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
    // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
    if (this.adapter_.isIndeterminate()) {
      this.adapter_.setNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_INDETERMINATE_VALUE);
    } else {
      // The on/off state does not need to keep track of aria-checked, since
      // the screenreader uses the checked property on the checkbox element.
      this.adapter_.removeNativeControlAttr(_constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_CHECKED_ATTR);
    }
  };

  return MDCCheckboxFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);

 // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.

/* harmony default export */ __webpack_exports__["default"] = (MDCCheckboxFoundation);

/***/ }),

/***/ "./node_modules/@material/data-table/component.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/data-table/component.js ***!
  \********************************************************/
/*! exports provided: MDCDataTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDataTable", function() { return MDCDataTable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_checkbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/checkbox/component */ "./node_modules/@material/checkbox/component.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/data-table/constants.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/data-table/foundation.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCDataTable =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDataTable, _super);

  function MDCDataTable() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MDCDataTable.attachTo = function (root) {
    return new MDCDataTable(root);
  };

  MDCDataTable.prototype.initialize = function (checkboxFactory) {
    if (checkboxFactory === void 0) {
      checkboxFactory = function checkboxFactory(el) {
        return new _material_checkbox_component__WEBPACK_IMPORTED_MODULE_2__["MDCCheckbox"](el);
      };
    }

    this.checkboxFactory_ = checkboxFactory;
  };

  MDCDataTable.prototype.initialSyncWithDOM = function () {
    var _this = this;

    this.headerRow_ = this.root_.querySelector("." + _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].HEADER_ROW);

    this.handleHeaderRowCheckboxChange_ = function () {
      return _this.foundation_.handleHeaderRowCheckboxChange();
    };

    this.headerRow_.addEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_ = this.root_.querySelector("." + _constants__WEBPACK_IMPORTED_MODULE_4__["cssClasses"].CONTENT);

    this.handleRowCheckboxChange_ = function (event) {
      return _this.foundation_.handleRowCheckboxChange(event);
    };

    this.content_.addEventListener('change', this.handleRowCheckboxChange_);
    this.layout();
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   */


  MDCDataTable.prototype.layout = function () {
    this.foundation_.layout();
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTable.prototype.getRows = function () {
    return this.foundation_.getRows();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTable.prototype.getSelectedRowIds = function () {
    return this.foundation_.getSelectedRowIds();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTable.prototype.setSelectedRowIds = function (rowIds) {
    this.foundation_.setSelectedRowIds(rowIds);
  };

  MDCDataTable.prototype.destroy = function () {
    this.headerRow_.removeEventListener('change', this.handleHeaderRowCheckboxChange_);
    this.content_.removeEventListener('change', this.handleRowCheckboxChange_);
    this.headerRowCheckbox_.destroy();
    this.rowCheckboxList_.forEach(function (checkbox) {
      return checkbox.destroy();
    });
  };

  MDCDataTable.prototype.getDefaultFoundation = function () {
    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.


    var adapter = {
      addClassAtRowIndex: function addClassAtRowIndex(rowIndex, className) {
        return _this.getRows()[rowIndex].classList.add(className);
      },
      getRowCount: function getRowCount() {
        return _this.getRows().length;
      },
      getRowElements: function getRowElements() {
        return [].slice.call(_this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_SELECTOR));
      },
      getRowIdAtIndex: function getRowIdAtIndex(rowIndex) {
        return _this.getRows()[rowIndex].getAttribute(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].DATA_ROW_ID_ATTR);
      },
      getRowIndexByChildElement: function getRowIndexByChildElement(el) {
        return _this.getRows().indexOf(Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["closest"])(el, _constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_SELECTOR));
      },
      getSelectedRowCount: function getSelectedRowCount() {
        return _this.root_.querySelectorAll(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_SELECTED_SELECTOR).length;
      },
      isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked(rowIndex) {
        return _this.rowCheckboxList_[rowIndex].checked;
      },
      isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
        return _this.headerRowCheckbox_.checked;
      },
      isRowsSelectable: function isRowsSelectable() {
        return !!_this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_CHECKBOX_SELECTOR);
      },
      notifyRowSelectionChanged: function notifyRowSelectionChanged(data) {
        _this.emit(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].ROW_SELECTION_CHANGED, {
          row: _this.getRowByIndex_(data.rowIndex),
          rowId: _this.getRowIdByIndex_(data.rowIndex),
          rowIndex: data.rowIndex,
          selected: data.selected
        },
        /** shouldBubble */
        true);
      },
      notifySelectedAll: function notifySelectedAll() {
        return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].SELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      notifyUnselectedAll: function notifyUnselectedAll() {
        return _this.emit(_constants__WEBPACK_IMPORTED_MODULE_4__["events"].UNSELECTED_ALL, {},
        /** shouldBubble */
        true);
      },
      registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
        if (_this.headerRowCheckbox_) {
          _this.headerRowCheckbox_.destroy();
        }

        var checkboxEl = _this.root_.querySelector(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].HEADER_ROW_CHECKBOX_SELECTOR);

        _this.headerRowCheckbox_ = _this.checkboxFactory_(checkboxEl);
      },
      registerRowCheckboxes: function registerRowCheckboxes() {
        if (_this.rowCheckboxList_) {
          _this.rowCheckboxList_.forEach(function (checkbox) {
            return checkbox.destroy();
          });
        }

        _this.rowCheckboxList_ = [];

        _this.getRows().forEach(function (rowEl) {
          var checkbox = _this.checkboxFactory_(rowEl.querySelector(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].ROW_CHECKBOX_SELECTOR));

          _this.rowCheckboxList_.push(checkbox);
        });
      },
      removeClassAtRowIndex: function removeClassAtRowIndex(rowIndex, className) {
        _this.getRows()[rowIndex].classList.remove(className);
      },
      setAttributeAtRowIndex: function setAttributeAtRowIndex(rowIndex, attr, value) {
        _this.getRows()[rowIndex].setAttribute(attr, value);
      },
      setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked(checked) {
        _this.headerRowCheckbox_.checked = checked;
      },
      setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate(indeterminate) {
        _this.headerRowCheckbox_.indeterminate = indeterminate;
      },
      setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex(rowIndex, checked) {
        _this.rowCheckboxList_[rowIndex].checked = checked;
      }
    };
    return new _foundation__WEBPACK_IMPORTED_MODULE_5__["MDCDataTableFoundation"](adapter);
  };

  MDCDataTable.prototype.getRowByIndex_ = function (index) {
    return this.getRows()[index];
  };

  MDCDataTable.prototype.getRowIdByIndex_ = function (index) {
    return this.getRowByIndex_(index).getAttribute(_constants__WEBPACK_IMPORTED_MODULE_4__["strings"].DATA_ROW_ID_ATTR);
  };

  return MDCDataTable;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ }),

/***/ "./node_modules/@material/data-table/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/data-table/constants.js ***!
  \********************************************************/
/*! exports provided: cssClasses, strings, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return cssClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
  CELL: 'mdc-data-table__cell',
  CELL_NUMERIC: 'mdc-data-table__cell--numeric',
  CONTENT: 'mdc-data-table__content',
  HEADER_ROW: 'mdc-data-table__header-row',
  HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
  ROOT: 'mdc-data-table',
  ROW: 'mdc-data-table__row',
  ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
  ROW_SELECTED: 'mdc-data-table__row--selected'
};
var strings = {
  ARIA_SELECTED: 'aria-selected',
  DATA_ROW_ID_ATTR: 'data-row-id',
  HEADER_ROW_CHECKBOX_SELECTOR: "." + cssClasses.HEADER_ROW_CHECKBOX,
  ROW_CHECKBOX_SELECTOR: "." + cssClasses.ROW_CHECKBOX,
  ROW_SELECTED_SELECTOR: "." + cssClasses.ROW_SELECTED,
  ROW_SELECTOR: "." + cssClasses.ROW
};
var events = {
  ROW_SELECTION_CHANGED: 'MDCDataTable:rowSelectionChanged',
  SELECTED_ALL: 'MDCDataTable:selectedAll',
  UNSELECTED_ALL: 'MDCDataTable:unselectedAll'
};

/***/ }),

/***/ "./node_modules/@material/data-table/foundation.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/data-table/foundation.js ***!
  \*********************************************************/
/*! exports provided: MDCDataTableFoundation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCDataTableFoundation", function() { return MDCDataTableFoundation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/foundation */ "./node_modules/@material/base/foundation.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/data-table/constants.js");
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




var MDCDataTableFoundation =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCDataTableFoundation, _super);

  function MDCDataTableFoundation(adapter) {
    return _super.call(this, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, MDCDataTableFoundation.defaultAdapter, adapter)) || this;
  }

  Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
    get: function get() {
      return {
        addClassAtRowIndex: function addClassAtRowIndex() {
          return undefined;
        },
        getRowCount: function getRowCount() {
          return 0;
        },
        getRowElements: function getRowElements() {
          return [];
        },
        getRowIdAtIndex: function getRowIdAtIndex() {
          return '';
        },
        getRowIndexByChildElement: function getRowIndexByChildElement() {
          return 0;
        },
        getSelectedRowCount: function getSelectedRowCount() {
          return 0;
        },
        isCheckboxAtRowIndexChecked: function isCheckboxAtRowIndexChecked() {
          return false;
        },
        isHeaderRowCheckboxChecked: function isHeaderRowCheckboxChecked() {
          return false;
        },
        isRowsSelectable: function isRowsSelectable() {
          return false;
        },
        notifyRowSelectionChanged: function notifyRowSelectionChanged() {
          return undefined;
        },
        notifySelectedAll: function notifySelectedAll() {
          return undefined;
        },
        notifyUnselectedAll: function notifyUnselectedAll() {
          return undefined;
        },
        registerHeaderRowCheckbox: function registerHeaderRowCheckbox() {
          return undefined;
        },
        registerRowCheckboxes: function registerRowCheckboxes() {
          return undefined;
        },
        removeClassAtRowIndex: function removeClassAtRowIndex() {
          return undefined;
        },
        setAttributeAtRowIndex: function setAttributeAtRowIndex() {
          return undefined;
        },
        setHeaderRowCheckboxChecked: function setHeaderRowCheckboxChecked() {
          return undefined;
        },
        setHeaderRowCheckboxIndeterminate: function setHeaderRowCheckboxIndeterminate() {
          return undefined;
        },
        setRowCheckboxCheckedAtIndex: function setRowCheckboxCheckedAtIndex() {
          return undefined;
        }
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   * Use this if registering checkbox is synchronous.
   */

  MDCDataTableFoundation.prototype.layout = function () {
    if (this.adapter_.isRowsSelectable()) {
      this.adapter_.registerHeaderRowCheckbox();
      this.adapter_.registerRowCheckboxes();
      this.setHeaderRowCheckboxState_();
    }
  };
  /**
   * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
   * Use this if registering checkbox is asynchronous.
   */


  MDCDataTableFoundation.prototype.layoutAsync = function () {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
      return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.adapter_.isRowsSelectable()) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , this.adapter_.registerHeaderRowCheckbox()];

          case 1:
            _a.sent();

            return [4
            /*yield*/
            , this.adapter_.registerRowCheckboxes()];

          case 2:
            _a.sent();

            this.setHeaderRowCheckboxState_();
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };
  /**
   * @return Returns array of row elements.
   */


  MDCDataTableFoundation.prototype.getRows = function () {
    return this.adapter_.getRowElements();
  };
  /**
   * Sets selected row ids. Overwrites previously selected rows.
   * @param rowIds Array of row ids that needs to be selected.
   */


  MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
      var isSelected = false;

      if (rowId && rowIds.indexOf(rowId) >= 0) {
        isSelected = true;
      }

      this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
      this.selectRowAtIndex_(rowIndex, isSelected);
    }

    this.setHeaderRowCheckboxState_();
  };
  /**
   * @return Returns array of selected row ids.
   */


  MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
    var selectedRowIds = [];

    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      if (this.adapter_.isCheckboxAtRowIndexChecked(rowIndex)) {
        selectedRowIds.push(this.adapter_.getRowIdAtIndex(rowIndex));
      }
    }

    return selectedRowIds;
  };
  /**
   * Handles header row checkbox change event.
   */


  MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
    var isHeaderChecked = this.adapter_.isHeaderRowCheckboxChecked();

    for (var rowIndex = 0; rowIndex < this.adapter_.getRowCount(); rowIndex++) {
      this.adapter_.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
      this.selectRowAtIndex_(rowIndex, isHeaderChecked);
    }

    if (isHeaderChecked) {
      this.adapter_.notifySelectedAll();
    } else {
      this.adapter_.notifyUnselectedAll();
    }
  };
  /**
   * Handles change event originated from row checkboxes.
   */


  MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
    var rowIndex = this.adapter_.getRowIndexByChildElement(event.target);

    if (rowIndex === -1) {
      return;
    }

    var selected = this.adapter_.isCheckboxAtRowIndexChecked(rowIndex);
    this.selectRowAtIndex_(rowIndex, selected);
    this.setHeaderRowCheckboxState_();
    var rowId = this.adapter_.getRowIdAtIndex(rowIndex);
    this.adapter_.notifyRowSelectionChanged({
      rowId: rowId,
      rowIndex: rowIndex,
      selected: selected
    });
  };
  /**
   * Updates header row checkbox state based on number of rows selected.
   */


  MDCDataTableFoundation.prototype.setHeaderRowCheckboxState_ = function () {
    if (this.adapter_.getSelectedRowCount() === this.adapter_.getRowCount()) {
      this.adapter_.setHeaderRowCheckboxChecked(true);
      this.adapter_.setHeaderRowCheckboxIndeterminate(false);
    } else if (this.adapter_.getSelectedRowCount() === 0) {
      this.adapter_.setHeaderRowCheckboxIndeterminate(false);
      this.adapter_.setHeaderRowCheckboxChecked(false);
    } else {
      this.adapter_.setHeaderRowCheckboxIndeterminate(true);
      this.adapter_.setHeaderRowCheckboxChecked(false);
    }
  };
  /**
   * Sets the attributes of row element based on selection state.
   */


  MDCDataTableFoundation.prototype.selectRowAtIndex_ = function (rowIndex, selected) {
    if (selected) {
      this.adapter_.addClassAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ROW_SELECTED);
      this.adapter_.setAttributeAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'true');
    } else {
      this.adapter_.removeClassAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"].ROW_SELECTED);
      this.adapter_.setAttributeAtRowIndex(rowIndex, _constants__WEBPACK_IMPORTED_MODULE_2__["strings"].ARIA_SELECTED, 'false');
    }
  };

  return MDCDataTableFoundation;
}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_1__["MDCFoundation"]);



/***/ }),

/***/ "./node_modules/@material/data-table/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/data-table/index.js ***!
  \****************************************************/
/*! exports provided: MDCDataTable, MDCDataTableFoundation, cssClasses, strings, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./node_modules/@material/data-table/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDataTable", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["MDCDataTable"]; });

/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/data-table/foundation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MDCDataTableFoundation", function() { return _foundation__WEBPACK_IMPORTED_MODULE_1__["MDCDataTableFoundation"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@material/data-table/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssClasses", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["cssClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["strings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _constants__WEBPACK_IMPORTED_MODULE_2__["events"]; });

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */




/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js ***!
  \******************************************************************/
/*! exports provided: CheckboxBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxBase", function() { return CheckboxBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_checkbox_foundation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/checkbox/foundation.js */ "./node_modules/@material/checkbox/foundation.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-ripple/ripple-directive.js */ "./node_modules/@material/mwc-ripple/ripple-directive.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"mdc-checkbox\"\n           @animationend=\"", "\"\n           .ripple=\"", "\">\n        <input type=\"checkbox\"\n              class=\"mdc-checkbox__native-control\"\n              @change=\"", "\"\n              .indeterminate=\"", "\"\n              .checked=\"", "\"\n              .value=\"", "\">\n        <div class=\"mdc-checkbox__background\">\n          <svg class=\"mdc-checkbox__checkmark\"\n              viewBox=\"0 0 24 24\">\n            <path class=\"mdc-checkbox__checkmark-path\"\n                  fill=\"none\"\n                  d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n          </svg>\n          <div class=\"mdc-checkbox__mixedmark\"></div>\n        </div>\n      </div>"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CheckboxBase =
/*#__PURE__*/
function (_FormElement) {
  _inherits(CheckboxBase, _FormElement);

  function CheckboxBase() {
    var _this;

    _classCallCheck(this, CheckboxBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxBase).apply(this, arguments));
    _this.checked = false;
    _this.indeterminate = false;
    _this.disabled = false;
    _this.value = '';
    _this.mdcFoundationClass = _material_checkbox_foundation_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    return _this;
  }

  _createClass(CheckboxBase, [{
    key: "createAdapter",
    value: function createAdapter() {
      var _this2 = this;

      return Object.assign(Object.assign({}, Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["addHasRemoveClass"])(this.mdcRoot)), {
        forceLayout: function forceLayout() {
          _this2.mdcRoot.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return _this2.isConnected;
        },
        isIndeterminate: function isIndeterminate() {
          return _this2.indeterminate;
        },
        isChecked: function isChecked() {
          return _this2.checked;
        },
        hasNativeControl: function hasNativeControl() {
          return Boolean(_this2.formElement);
        },
        setNativeControlDisabled: function setNativeControlDisabled(disabled) {
          _this2.formElement.disabled = disabled;
        },
        setNativeControlAttr: function setNativeControlAttr(attr, value) {
          _this2.formElement.setAttribute(attr, value);
        },
        removeNativeControlAttr: function removeNativeControlAttr(attr) {
          _this2.formElement.removeAttribute(attr);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this._animationEndHandler, Object(_material_mwc_ripple_ripple_directive_js__WEBPACK_IMPORTED_MODULE_3__["ripple"])(), this._changeHandler, this.indeterminate, this.checked, this.value);
    }
  }, {
    key: "_changeHandler",
    value: function _changeHandler() {
      this.checked = this.formElement.checked;
      this.indeterminate = this.formElement.indeterminate;
      this.mdcFoundation.handleChange();
    }
  }, {
    key: "_animationEndHandler",
    value: function _animationEndHandler() {
      this.mdcFoundation.handleAnimationEnd();
    }
  }, {
    key: "ripple",
    get: function get() {
      return this.mdcRoot.ripple;
    }
  }]);

  return CheckboxBase;
}(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["FormElement"]);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["query"])('.mdc-checkbox')], CheckboxBase.prototype, "mdcRoot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["query"])('input')], CheckboxBase.prototype, "formElement", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], CheckboxBase.prototype, "checked", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
})], CheckboxBase.prototype, "indeterminate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: Boolean
}), Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["observer"])(function (value) {
  this.mdcFoundation.setDisabled(value);
})], CheckboxBase.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_2__["property"])({
  type: String
})], CheckboxBase.prototype, "value", void 0);

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js ***!
  \*****************************************************************/
/*! exports provided: style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return style; });
/* harmony import */ var _material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-base/base-element */ "./node_modules/@material/mwc-base/base-element.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox.mdc-checkbox--selected::before,.mdc-checkbox.mdc-checkbox--selected::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-checkbox--selected::before,.mdc-checkbox.mdc-checkbox--selected::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox.mdc-checkbox--selected:hover::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-u6ulq4g{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-u6ulq4g{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-u6ulq4g}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-u6ulq4g}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}@media screen and (-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox__background .mdc-checkbox__background::before{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-checkbox{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);padding:11px}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#000}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-on-surface, #000)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox .mdc-checkbox__background{left:11px;right:initial;top:11px}.mdc-checkbox[dir=rtl] .mdc-checkbox .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}:host{outline:none}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

var style = Object(_material_mwc_base_base_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());

/***/ }),

/***/ "./node_modules/@material/mwc-checkbox/mwc-checkbox.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/mwc-checkbox/mwc-checkbox.js ***!
  \*************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-base/form-element.js */ "./node_modules/@material/mwc-base/form-element.js");
/* harmony import */ var _mwc_checkbox_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mwc-checkbox-base.js */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-base.js");
/* harmony import */ var _mwc_checkbox_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mwc-checkbox-css.js */ "./node_modules/@material/mwc-checkbox/mwc-checkbox-css.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/





var Checkbox =
/*#__PURE__*/
function (_CheckboxBase) {
  _inherits(Checkbox, _CheckboxBase);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).apply(this, arguments));
  }

  return Checkbox;
}(_mwc_checkbox_base_js__WEBPACK_IMPORTED_MODULE_2__["CheckboxBase"]);

Checkbox.styles = _mwc_checkbox_css_js__WEBPACK_IMPORTED_MODULE_3__["style"];
Checkbox = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_material_mwc_base_form_element_js__WEBPACK_IMPORTED_MODULE_1__["customElement"])('mwc-checkbox')], Checkbox);


/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/*! exports provided: MDCRipple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDCRipple", function() { return MDCRipple; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/base/component */ "./node_modules/@material/base/component.js");
/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ "./node_modules/@material/dom/events.js");
/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ "./node_modules/@material/dom/ponyfill.js");
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ "./node_modules/@material/ripple/foundation.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./node_modules/@material/ripple/util.js");
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */







var MDCRipple =
/** @class */
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MDCRipple, _super);

  function MDCRipple() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.disabled = false;
    return _this;
  }

  MDCRipple.attachTo = function (root, opts) {
    if (opts === void 0) {
      opts = {
        isUnbounded: undefined
      };
    }

    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified

    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }

    return ripple;
  };

  MDCRipple.createAdapter = function (instance) {
    return {
      addClass: function addClass(className) {
        return instance.root_.classList.add(className);
      },
      browserSupportsCssVars: function browserSupportsCssVars() {
        return _util__WEBPACK_IMPORTED_MODULE_5__["supportsCssVariables"](window);
      },
      computeBoundingRect: function computeBoundingRect() {
        return instance.root_.getBoundingClientRect();
      },
      containsEventTarget: function containsEventTarget(target) {
        return instance.root_.contains(target);
      },
      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
        return instance.root_.removeEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      deregisterResizeHandler: function deregisterResizeHandler(handler) {
        return window.removeEventListener('resize', handler);
      },
      getWindowPageOffset: function getWindowPageOffset() {
        return {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
      },
      isSurfaceActive: function isSurfaceActive() {
        return Object(_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__["matches"])(instance.root_, ':active');
      },
      isSurfaceDisabled: function isSurfaceDisabled() {
        return Boolean(instance.disabled);
      },
      isUnbounded: function isUnbounded() {
        return Boolean(instance.unbounded);
      },
      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
        return document.documentElement.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
        return instance.root_.addEventListener(evtType, handler, Object(_material_dom_events__WEBPACK_IMPORTED_MODULE_2__["applyPassive"])());
      },
      registerResizeHandler: function registerResizeHandler(handler) {
        return window.addEventListener('resize', handler);
      },
      removeClass: function removeClass(className) {
        return instance.root_.classList.remove(className);
      },
      updateCssVariable: function updateCssVariable(varName, value) {
        return instance.root_.style.setProperty(varName, value);
      }
    };
  };

  Object.defineProperty(MDCRipple.prototype, "unbounded", {
    get: function get() {
      return Boolean(this.unbounded_);
    },
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    },
    enumerable: true,
    configurable: true
  });

  MDCRipple.prototype.activate = function () {
    this.foundation_.activate();
  };

  MDCRipple.prototype.deactivate = function () {
    this.foundation_.deactivate();
  };

  MDCRipple.prototype.layout = function () {
    this.foundation_.layout();
  };

  MDCRipple.prototype.getDefaultFoundation = function () {
    return new _foundation__WEBPACK_IMPORTED_MODULE_4__["MDCRippleFoundation"](MDCRipple.createAdapter(this));
  };

  MDCRipple.prototype.initialSyncWithDOM = function () {
    var root = this.root_;
    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
  };
  /**
   * Closure Compiler throws an access control error when directly accessing a
   * protected or private property inside a getter/setter, like unbounded above.
   * By accessing the protected property inside a method, we solve that problem.
   * That's why this function exists.
   */


  MDCRipple.prototype.setUnbounded_ = function () {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  };

  return MDCRipple;
}(_material_base_component__WEBPACK_IMPORTED_MODULE_1__["MDCComponent"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktdW51c2VkLWVudGl0aWVzfnBhbmVsLWNvbmZpZy1kZXZpY2VzfnBhbmVsLWNvbmZpZy1lbnRpdHktcmVnaXN0cnl+cGFuZWwtY29uZmlnLWludGVncmF0aW9ucy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2NoZWNrYm94L2ZvdW5kYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kYXRhLXRhYmxlL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RhdGEtdGFibGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGF0YS10YWJsZS9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGF0YS10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1jaGVja2JveC9td2MtY2hlY2tib3gtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL213Yy1jaGVja2JveC9td2MtY2hlY2tib3gtY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbXdjLWNoZWNrYm94L213Yy1jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzUHJvcGVydHlOYW1lTWFwID0ge1xuICAgIGFuaW1hdGlvbjoge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtYW5pbWF0aW9uJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb24nLFxuICAgIH0sXG4gICAgdHJhbnNmb3JtOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC10cmFuc2Zvcm0nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zZm9ybScsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC10cmFuc2l0aW9uJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uJyxcbiAgICB9LFxufTtcbnZhciBqc0V2ZW50VHlwZU1hcCA9IHtcbiAgICBhbmltYXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uZW5kJyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbml0ZXJhdGlvbjoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25pdGVyYXRpb24nLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uc3RhcnQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25zdGFydCcsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uZW5kOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAndHJhbnNpdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgfSxcbn07XG5mdW5jdGlvbiBpc1dpbmRvdyh3aW5kb3dPYmopIHtcbiAgICByZXR1cm4gQm9vbGVhbih3aW5kb3dPYmouZG9jdW1lbnQpICYmIHR5cGVvZiB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvd09iaiwgY3NzUHJvcGVydHkpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBjc3NQcm9wZXJ0eSBpbiBjc3NQcm9wZXJ0eU5hbWVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBjc3NQcm9wZXJ0eU5hbWVNYXBbY3NzUHJvcGVydHldLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkO1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IHN0YW5kYXJkIGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBjc3NQcm9wZXJ0eTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvd09iaiwgZXZlbnRUeXBlKSB7XG4gICAgaWYgKGlzV2luZG93KHdpbmRvd09iaikgJiYgZXZlbnRUeXBlIGluIGpzRXZlbnRUeXBlTWFwKSB7XG4gICAgICAgIHZhciBlbCA9IHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIF9hID0ganNFdmVudFR5cGVNYXBbZXZlbnRUeXBlXSwgc3RhbmRhcmQgPSBfYS5zdGFuZGFyZCwgcHJlZml4ZWQgPSBfYS5wcmVmaXhlZCwgY3NzUHJvcGVydHkgPSBfYS5jc3NQcm9wZXJ0eTtcbiAgICAgICAgdmFyIGlzU3RhbmRhcmQgPSBjc3NQcm9wZXJ0eSBpbiBlbC5zdHlsZTtcbiAgICAgICAgcmV0dXJuIGlzU3RhbmRhcmQgPyBzdGFuZGFyZCA6IHByZWZpeGVkO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnRUeXBlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBNRENDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDQ29tcG9uZW50KHJvb3QsIGZvdW5kYXRpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb290XyA9IHJvb3Q7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCB0c2xpYl8xLl9fc3ByZWFkKGFyZ3MpKTtcbiAgICAgICAgLy8gTm90ZSB0aGF0IHdlIGluaXRpYWxpemUgZm91bmRhdGlvbiBoZXJlIGFuZCBub3Qgd2l0aGluIHRoZSBjb25zdHJ1Y3RvcidzIGRlZmF1bHQgcGFyYW0gc28gdGhhdFxuICAgICAgICAvLyB0aGlzLnJvb3RfIGlzIGRlZmluZWQgYW5kIGNhbiBiZSB1c2VkIHdpdGhpbiB0aGUgZm91bmRhdGlvbiBjbGFzcy5cbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXyA9IGZvdW5kYXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuZ2V0RGVmYXVsdEZvdW5kYXRpb24oKSA6IGZvdW5kYXRpb247XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uaW5pdCgpO1xuICAgICAgICB0aGlzLmluaXRpYWxTeW5jV2l0aERPTSgpO1xuICAgIH1cbiAgICBNRENDb21wb25lbnQuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHdoaWNoIGV4dGVuZCBNRENCYXNlIHNob3VsZCBwcm92aWRlIGFuIGF0dGFjaFRvKCkgbWV0aG9kIHRoYXQgdGFrZXMgYSByb290IGVsZW1lbnQgYW5kXG4gICAgICAgIC8vIHJldHVybnMgYW4gaW5zdGFudGlhdGVkIGNvbXBvbmVudCB3aXRoIGl0cyByb290IHNldCB0byB0aGF0IGVsZW1lbnQuIEFsc28gbm90ZSB0aGF0IGluIHRoZSBjYXNlcyBvZlxuICAgICAgICAvLyBzdWJjbGFzc2VzLCBhbiBleHBsaWNpdCBmb3VuZGF0aW9uIGNsYXNzIHdpbGwgbm90IGhhdmUgdG8gYmUgcGFzc2VkIGluOyBpdCB3aWxsIHNpbXBseSBiZSBpbml0aWFsaXplZFxuICAgICAgICAvLyBmcm9tIGdldERlZmF1bHRGb3VuZGF0aW9uKCkuXG4gICAgICAgIHJldHVybiBuZXcgTURDQ29tcG9uZW50KHJvb3QsIG5ldyBNRENGb3VuZGF0aW9uKHt9KSk7XG4gICAgfTtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbWV0aG9kIHBhcmFtIG9ubHkgZXhpc3RzIGZvciB0eXBpbmcgcHVycG9zZXM7IGl0IGRvZXMgbm90IG5lZWQgdG8gYmUgdW5pdCB0ZXN0ZWQgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgX2FyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTdWJjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIHRvIGRvIGFueSBhZGRpdGlvbmFsIHNldHVwIHdvcmsgdGhhdCB3b3VsZCBiZSBjb25zaWRlcmVkIHBhcnQgb2YgYVxuICAgICAgICAvLyBcImNvbnN0cnVjdG9yXCIuIEVzc2VudGlhbGx5LCBpdCBpcyBhIGhvb2sgaW50byB0aGUgcGFyZW50IGNvbnN0cnVjdG9yIGJlZm9yZSB0aGUgZm91bmRhdGlvbiBpc1xuICAgICAgICAvLyBpbml0aWFsaXplZC4gQW55IGFkZGl0aW9uYWwgYXJndW1lbnRzIGJlc2lkZXMgcm9vdCBhbmQgZm91bmRhdGlvbiB3aWxsIGJlIHBhc3NlZCBpbiBoZXJlLlxuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS5nZXREZWZhdWx0Rm91bmRhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBtdXN0IG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBhIHByb3Blcmx5IGNvbmZpZ3VyZWQgZm91bmRhdGlvbiBjbGFzcyBmb3IgdGhlXG4gICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdWJjbGFzc2VzIG11c3Qgb3ZlcnJpZGUgZ2V0RGVmYXVsdEZvdW5kYXRpb24gdG8gcmV0dXJuIGEgcHJvcGVybHkgY29uZmlndXJlZCAnICtcbiAgICAgICAgICAgICdmb3VuZGF0aW9uIGNsYXNzJyk7XG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmluaXRpYWxTeW5jV2l0aERPTSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgaWYgdGhleSBuZWVkIHRvIHBlcmZvcm0gd29yayB0byBzeW5jaHJvbml6ZSB3aXRoIGEgaG9zdCBET01cbiAgICAgICAgLy8gb2JqZWN0LiBBbiBleGFtcGxlIG9mIHRoaXMgd291bGQgYmUgYSBmb3JtIGNvbnRyb2wgd3JhcHBlciB0aGF0IG5lZWRzIHRvIHN5bmNocm9uaXplIGl0cyBpbnRlcm5hbCBzdGF0ZVxuICAgICAgICAvLyB0byBzb21lIHByb3BlcnR5IG9yIGF0dHJpYnV0ZSBvZiB0aGUgaG9zdCBET00uIFBsZWFzZSBub3RlOiB0aGlzIGlzICpub3QqIHRoZSBwbGFjZSB0byBwZXJmb3JtIERPTVxuICAgICAgICAvLyByZWFkcy93cml0ZXMgdGhhdCB3b3VsZCBjYXVzZSBsYXlvdXQgLyBwYWludCwgYXMgdGhpcyBpcyBjYWxsZWQgc3luY2hyb25vdXNseSBmcm9tIHdpdGhpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfTtcbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgbWF5IGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZWxlYXNlIGFueSByZXNvdXJjZXMgLyBkZXJlZ2lzdGVyIGFueSBsaXN0ZW5lcnMgdGhleSBoYXZlXG4gICAgICAgIC8vIGF0dGFjaGVkLiBBbiBleGFtcGxlIG9mIHRoaXMgbWlnaHQgYmUgZGVyZWdpc3RlcmluZyBhIHJlc2l6ZSBldmVudCBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0LlxuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmRlc3Ryb3koKTtcbiAgICB9O1xuICAgIE1EQ0NvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgTURDQ29tcG9uZW50LnByb3RvdHlwZS51bmxpc3RlbiA9IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucm9vdF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZpcmVzIGEgY3Jvc3MtYnJvd3Nlci1jb21wYXRpYmxlIGN1c3RvbSBldmVudCBmcm9tIHRoZSBjb21wb25lbnQgcm9vdCBvZiB0aGUgZ2l2ZW4gdHlwZSwgd2l0aCB0aGUgZ2l2ZW4gZGF0YS5cbiAgICAgKi9cbiAgICBNRENDb21wb25lbnQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXZ0VHlwZSwgZXZ0RGF0YSwgc2hvdWxkQnViYmxlKSB7XG4gICAgICAgIGlmIChzaG91bGRCdWJibGUgPT09IHZvaWQgMCkgeyBzaG91bGRCdWJibGUgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgZXZ0O1xuICAgICAgICBpZiAodHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZ0VHlwZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6IHNob3VsZEJ1YmJsZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IGV2dERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgICAgICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldnRUeXBlLCBzaG91bGRCdWJibGUsIGZhbHNlLCBldnREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RfLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0IHsgTURDQ29tcG9uZW50IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGdldENvcnJlY3RFdmVudE5hbWUgfSBmcm9tICdAbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwnO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9kb20vZXZlbnRzJztcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ1JpcHBsZSB9IGZyb20gJ0BtYXRlcmlhbC9yaXBwbGUvY29tcG9uZW50JztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgTURDQ2hlY2tib3hGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbnZhciBDQl9QUk9UT19QUk9QUyA9IFsnY2hlY2tlZCcsICdpbmRldGVybWluYXRlJ107XG52YXIgTURDQ2hlY2tib3ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTURDQ2hlY2tib3gsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDQ2hlY2tib3goKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5yaXBwbGVfID0gX3RoaXMuY3JlYXRlUmlwcGxlXygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1EQ0NoZWNrYm94LmF0dGFjaFRvID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNRENDaGVja2JveChyb290KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveC5wcm90b3R5cGUsIFwicmlwcGxlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yaXBwbGVfO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3gucHJvdG90eXBlLCBcImNoZWNrZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZUNvbnRyb2xfLmNoZWNrZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQ29udHJvbF8uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGVja2JveC5wcm90b3R5cGUsIFwiaW5kZXRlcm1pbmF0ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlQ29udHJvbF8uaW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5uYXRpdmVDb250cm9sXy5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlQ29udHJvbF8uZGlzYWJsZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZvdW5kYXRpb25fLnNldERpc2FibGVkKGRpc2FibGVkKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlQ29udHJvbF8udmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUNvbnRyb2xfLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0NoZWNrYm94LnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUNoYW5nZSgpOyB9O1xuICAgICAgICB0aGlzLmhhbmRsZUFuaW1hdGlvbkVuZF8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVBbmltYXRpb25FbmQoKTsgfTtcbiAgICAgICAgdGhpcy5uYXRpdmVDb250cm9sXy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUNoYW5nZV8pO1xuICAgICAgICB0aGlzLmxpc3RlbihnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvdywgJ2FuaW1hdGlvbmVuZCcpLCB0aGlzLmhhbmRsZUFuaW1hdGlvbkVuZF8pO1xuICAgICAgICB0aGlzLmluc3RhbGxQcm9wZXJ0eUNoYW5nZUhvb2tzXygpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmlwcGxlXy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVDaGFuZ2VfKTtcbiAgICAgICAgdGhpcy51bmxpc3RlbihnZXRDb3JyZWN0RXZlbnROYW1lKHdpbmRvdywgJ2FuaW1hdGlvbmVuZCcpLCB0aGlzLmhhbmRsZUFuaW1hdGlvbkVuZF8pO1xuICAgICAgICB0aGlzLnVuaW5zdGFsbFByb3BlcnR5Q2hhbmdlSG9va3NfKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIF90aGlzLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGZvcmNlTGF5b3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yb290Xy5vZmZzZXRXaWR0aDsgfSxcbiAgICAgICAgICAgIGhhc05hdGl2ZUNvbnRyb2w6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICEhX3RoaXMubmF0aXZlQ29udHJvbF87IH0sXG4gICAgICAgICAgICBpc0F0dGFjaGVkVG9ET006IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEJvb2xlYW4oX3RoaXMucm9vdF8ucGFyZW50Tm9kZSk7IH0sXG4gICAgICAgICAgICBpc0NoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNoZWNrZWQ7IH0sXG4gICAgICAgICAgICBpc0luZGV0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmluZGV0ZXJtaW5hdGU7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgcmVtb3ZlTmF0aXZlQ29udHJvbEF0dHI6IGZ1bmN0aW9uIChhdHRyKSB7IHJldHVybiBfdGhpcy5uYXRpdmVDb250cm9sXy5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7IH0sXG4gICAgICAgICAgICBzZXROYXRpdmVDb250cm9sQXR0cjogZnVuY3Rpb24gKGF0dHIsIHZhbHVlKSB7IHJldHVybiBfdGhpcy5uYXRpdmVDb250cm9sXy5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpOyB9LFxuICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbERpc2FibGVkOiBmdW5jdGlvbiAoZGlzYWJsZWQpIHsgcmV0dXJuIF90aGlzLm5hdGl2ZUNvbnRyb2xfLmRpc2FibGVkID0gZGlzYWJsZWQ7IH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgTURDQ2hlY2tib3hGb3VuZGF0aW9uKGFkYXB0ZXIpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3gucHJvdG90eXBlLmNyZWF0ZVJpcHBsZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIERPIE5PVCBJTkxJTkUgdGhpcyB2YXJpYWJsZS4gRm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGZvdW5kYXRpb25zIHRha2UgYSBQYXJ0aWFsPE1EQ0Zvb0FkYXB0ZXI+LlxuICAgICAgICAvLyBUbyBlbnN1cmUgd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IG9taXQgYW55IG1ldGhvZHMsIHdlIG5lZWQgYSBzZXBhcmF0ZSwgc3Ryb25nbHkgdHlwZWQgYWRhcHRlciB2YXJpYWJsZS5cbiAgICAgICAgdmFyIGFkYXB0ZXIgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENSaXBwbGUuY3JlYXRlQWRhcHRlcih0aGlzKSwgeyBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubmF0aXZlQ29udHJvbF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7IH0sIGlzU3VyZmFjZUFjdGl2ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhfdGhpcy5uYXRpdmVDb250cm9sXywgJzphY3RpdmUnKTsgfSwgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikgeyByZXR1cm4gX3RoaXMubmF0aXZlQ29udHJvbF8uYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyLCBhcHBseVBhc3NpdmUoKSk7IH0gfSk7XG4gICAgICAgIHJldHVybiBuZXcgTURDUmlwcGxlKHRoaXMucm9vdF8sIG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpKTtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94LnByb3RvdHlwZS5pbnN0YWxsUHJvcGVydHlDaGFuZ2VIb29rc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBuYXRpdmVDYiA9IHRoaXMubmF0aXZlQ29udHJvbF87XG4gICAgICAgIHZhciBjYlByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5hdGl2ZUNiKTtcbiAgICAgICAgQ0JfUFJPVE9fUFJPUFMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbFN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY2JQcm90bywgY29udHJvbFN0YXRlKTtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgdG8gY2hlY2sgZm9yIHRoaXMgZGVzY3JpcHRvciwgc2luY2Ugc29tZSBicm93c2VycyAoU2FmYXJpKSBkb24ndCBzdXBwb3J0IGl0cyByZXR1cm4uXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00OTczOVxuICAgICAgICAgICAgaWYgKCF2YWxpZERlc2NyaXB0b3IoZGVzYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUeXBlIGNhc3QgaXMgbmVlZGVkIGZvciBjb21wYXRpYmlsaXR5IHdpdGggQ2xvc3VyZSBDb21waWxlci5cbiAgICAgICAgICAgIHZhciBuYXRpdmVHZXR0ZXIgPSBkZXNjLmdldDtcbiAgICAgICAgICAgIHZhciBuYXRpdmVDYkRlc2MgPSB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBkZXNjLmNvbmZpZ3VyYWJsZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBkZXNjLmVudW1lcmFibGUsXG4gICAgICAgICAgICAgICAgZ2V0OiBuYXRpdmVHZXR0ZXIsXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5zZXQuY2FsbChuYXRpdmVDYiwgc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5mb3VuZGF0aW9uXy5oYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuYXRpdmVDYiwgY29udHJvbFN0YXRlLCBuYXRpdmVDYkRlc2MpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94LnByb3RvdHlwZS51bmluc3RhbGxQcm9wZXJ0eUNoYW5nZUhvb2tzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5hdGl2ZUNiID0gdGhpcy5uYXRpdmVDb250cm9sXztcbiAgICAgICAgdmFyIGNiUHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmF0aXZlQ2IpO1xuICAgICAgICBDQl9QUk9UT19QUk9QUy5mb3JFYWNoKGZ1bmN0aW9uIChjb250cm9sU3RhdGUpIHtcbiAgICAgICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjYlByb3RvLCBjb250cm9sU3RhdGUpO1xuICAgICAgICAgICAgaWYgKCF2YWxpZERlc2NyaXB0b3IoZGVzYykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmF0aXZlQ2IsIGNvbnRyb2xTdGF0ZSwgZGVzYyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoZWNrYm94LnByb3RvdHlwZSwgXCJuYXRpdmVDb250cm9sX1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIE5BVElWRV9DT05UUk9MX1NFTEVDVE9SID0gTURDQ2hlY2tib3hGb3VuZGF0aW9uLnN0cmluZ3MuTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IpO1xuICAgICAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNoZWNrYm94IGNvbXBvbmVudCByZXF1aXJlcyBhIFwiICsgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1IgKyBcIiBlbGVtZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTURDQ2hlY2tib3g7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDQ2hlY2tib3ggfTtcbmZ1bmN0aW9uIHZhbGlkRGVzY3JpcHRvcihpbnB1dFByb3BEZXNjKSB7XG4gICAgcmV0dXJuICEhaW5wdXRQcm9wRGVzYyAmJiB0eXBlb2YgaW5wdXRQcm9wRGVzYy5zZXQgPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlJyxcbiAgICBBTklNX0NIRUNLRURfVU5DSEVDS0VEOiAnbWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkJyxcbiAgICBBTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRDogJ21kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLWNoZWNrZWQnLFxuICAgIEFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQnLFxuICAgIEFOSU1fVU5DSEVDS0VEX0NIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWNoZWNrZWQnLFxuICAgIEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEU6ICdtZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUnLFxuICAgIEJBQ0tHUk9VTkQ6ICdtZGMtY2hlY2tib3hfX2JhY2tncm91bmQnLFxuICAgIENIRUNLRUQ6ICdtZGMtY2hlY2tib3gtLWNoZWNrZWQnLFxuICAgIENIRUNLTUFSSzogJ21kYy1jaGVja2JveF9fY2hlY2ttYXJrJyxcbiAgICBDSEVDS01BUktfUEFUSDogJ21kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGgnLFxuICAgIERJU0FCTEVEOiAnbWRjLWNoZWNrYm94LS1kaXNhYmxlZCcsXG4gICAgSU5ERVRFUk1JTkFURTogJ21kYy1jaGVja2JveC0taW5kZXRlcm1pbmF0ZScsXG4gICAgTUlYRURNQVJLOiAnbWRjLWNoZWNrYm94X19taXhlZG1hcmsnLFxuICAgIE5BVElWRV9DT05UUk9MOiAnbWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbCcsXG4gICAgUk9PVDogJ21kYy1jaGVja2JveCcsXG4gICAgU0VMRUNURUQ6ICdtZGMtY2hlY2tib3gtLXNlbGVjdGVkJyxcbiAgICBVUEdSQURFRDogJ21kYy1jaGVja2JveC0tdXBncmFkZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0NIRUNLRURfQVRUUjogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJJQV9DSEVDS0VEX0lOREVURVJNSU5BVEVfVkFMVUU6ICdtaXhlZCcsXG4gICAgTkFUSVZFX0NPTlRST0xfU0VMRUNUT1I6ICcubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbCcsXG4gICAgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEOiAnY2hlY2tlZCcsXG4gICAgVFJBTlNJVElPTl9TVEFURV9JTkRFVEVSTUlOQVRFOiAnaW5kZXRlcm1pbmF0ZScsXG4gICAgVFJBTlNJVElPTl9TVEFURV9JTklUOiAnaW5pdCcsXG4gICAgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ6ICd1bmNoZWNrZWQnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBBTklNX0VORF9MQVRDSF9NUzogMjUwLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0NoZWNrYm94Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENDaGVja2JveEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDQ2hlY2tib3hGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgTURDQ2hlY2tib3hGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY3VycmVudENoZWNrU3RhdGVfID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0lOSVQ7XG4gICAgICAgIF90aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18gPSAnJztcbiAgICAgICAgX3RoaXMuYW5pbUVuZExhdGNoVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2hlY2tib3hGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9yY2VMYXlvdXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNOYXRpdmVDb250cm9sOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0F0dGFjaGVkVG9ET006IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNJbmRldGVybWluYXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZU5hdGl2ZUNvbnRyb2xBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TmF0aXZlQ29udHJvbEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROYXRpdmVDb250cm9sRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Q2hlY2tTdGF0ZV8gPSB0aGlzLmRldGVybWluZUNoZWNrU3RhdGVfKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQXJpYUNoZWNrZWRfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5VUEdSQURFRCk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyk7XG4gICAgfTtcbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLnNldERpc2FibGVkID0gZnVuY3Rpb24gKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0TmF0aXZlQ29udHJvbERpc2FibGVkKGRpc2FibGVkKTtcbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkRJU0FCTEVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgYW5pbWF0aW9uZW5kIGV2ZW50IGZvciB0aGUgY2hlY2tib3hcbiAgICAgKi9cbiAgICBNRENDaGVja2JveEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUFuaW1hdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZUFuaW1hdGlvbkVuZEhhbmRsZXJfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbUVuZExhdGNoVGltZXJfKTtcbiAgICAgICAgdGhpcy5hbmltRW5kTGF0Y2hUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKF90aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgICAgICAgX3RoaXMuZW5hYmxlQW5pbWF0aW9uRW5kSGFuZGxlcl8gPSBmYWxzZTtcbiAgICAgICAgfSwgbnVtYmVycy5BTklNX0VORF9MQVRDSF9NUyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSBjaGVja2JveFxuICAgICAqL1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb25DaGVja1N0YXRlXygpO1xuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS50cmFuc2l0aW9uQ2hlY2tTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyXy5oYXNOYXRpdmVDb250cm9sKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2xkU3RhdGUgPSB0aGlzLmN1cnJlbnRDaGVja1N0YXRlXztcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gdGhpcy5kZXRlcm1pbmVDaGVja1N0YXRlXygpO1xuICAgICAgICBpZiAob2xkU3RhdGUgPT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVBcmlhQ2hlY2tlZF8oKTtcbiAgICAgICAgdmFyIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgdmFyIFNFTEVDVEVEID0gY3NzQ2xhc3Nlcy5TRUxFQ1RFRDtcbiAgICAgICAgaWYgKG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVDbGFzcyhTRUxFQ1RFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmFkZENsYXNzKFNFTEVDVEVEKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0byBlbnN1cmUgdGhhdCB0aGVyZSBpc24ndCBhIHByZXZpb3VzbHkgZXhpc3RpbmcgYW5pbWF0aW9uIGNsYXNzLCBpbiBjYXNlIGZvciBleGFtcGxlXG4gICAgICAgIC8vIHRoZSB1c2VyIGludGVyYWN0ZWQgd2l0aCB0aGUgY2hlY2tib3ggYmVmb3JlIHRoZSBhbmltYXRpb24gd2FzIGZpbmlzaGVkLlxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1FbmRMYXRjaFRpbWVyXyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLmZvcmNlTGF5b3V0KCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnJlbW92ZUNsYXNzKHRoaXMuY3VycmVudEFuaW1hdGlvbkNsYXNzXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uQ2xhc3NfID0gdGhpcy5nZXRUcmFuc2l0aW9uQW5pbWF0aW9uQ2xhc3NfKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuY3VycmVudENoZWNrU3RhdGVfID0gbmV3U3RhdGU7XG4gICAgICAgIC8vIENoZWNrIGZvciBwYXJlbnROb2RlIHNvIHRoYXQgYW5pbWF0aW9ucyBhcmUgb25seSBydW4gd2hlbiB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZFxuICAgICAgICAvLyB0byB0aGUgRE9NLlxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc0F0dGFjaGVkVG9ET00oKSAmJiB0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5hZGRDbGFzcyh0aGlzLmN1cnJlbnRBbmltYXRpb25DbGFzc18pO1xuICAgICAgICAgICAgdGhpcy5lbmFibGVBbmltYXRpb25FbmRIYW5kbGVyXyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuZGV0ZXJtaW5lQ2hlY2tTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEUgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfSU5ERVRFUk1JTkFURSwgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQsIFRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEID0gc3RyaW5ncy5UUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNJbmRldGVybWluYXRlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlcl8uaXNDaGVja2VkKCkgPyBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgOiBUUkFOU0lUSU9OX1NUQVRFX1VOQ0hFQ0tFRDtcbiAgICB9O1xuICAgIE1EQ0NoZWNrYm94Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VHJhbnNpdGlvbkFuaW1hdGlvbkNsYXNzXyA9IGZ1bmN0aW9uIChvbGRTdGF0ZSwgbmV3U3RhdGUpIHtcbiAgICAgICAgdmFyIFRSQU5TSVRJT05fU1RBVEVfSU5JVCA9IHN0cmluZ3MuVFJBTlNJVElPTl9TVEFURV9JTklULCBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCwgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQgPSBzdHJpbmdzLlRSQU5TSVRJT05fU1RBVEVfVU5DSEVDS0VEO1xuICAgICAgICB2YXIgX2EgPSBNRENDaGVja2JveEZvdW5kYXRpb24uY3NzQ2xhc3NlcywgQU5JTV9VTkNIRUNLRURfQ0hFQ0tFRCA9IF9hLkFOSU1fVU5DSEVDS0VEX0NIRUNLRUQsIEFOSU1fVU5DSEVDS0VEX0lOREVURVJNSU5BVEUgPSBfYS5BTklNX1VOQ0hFQ0tFRF9JTkRFVEVSTUlOQVRFLCBBTklNX0NIRUNLRURfVU5DSEVDS0VEID0gX2EuQU5JTV9DSEVDS0VEX1VOQ0hFQ0tFRCwgQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEUgPSBfYS5BTklNX0NIRUNLRURfSU5ERVRFUk1JTkFURSwgQU5JTV9JTkRFVEVSTUlOQVRFX0NIRUNLRUQgPSBfYS5BTklNX0lOREVURVJNSU5BVEVfQ0hFQ0tFRCwgQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRCA9IF9hLkFOSU1fSU5ERVRFUk1JTkFURV9VTkNIRUNLRUQ7XG4gICAgICAgIHN3aXRjaCAob2xkU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9JTklUOlxuICAgICAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA/IEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEIDogQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlID09PSBUUkFOU0lUSU9OX1NUQVRFX0NIRUNLRUQgPyBBTklNX1VOQ0hFQ0tFRF9DSEVDS0VEIDogQU5JTV9VTkNIRUNLRURfSU5ERVRFUk1JTkFURTtcbiAgICAgICAgICAgIGNhc2UgVFJBTlNJVElPTl9TVEFURV9DSEVDS0VEOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZSA9PT0gVFJBTlNJVElPTl9TVEFURV9VTkNIRUNLRUQgPyBBTklNX0NIRUNLRURfVU5DSEVDS0VEIDogQU5JTV9DSEVDS0VEX0lOREVURVJNSU5BVEU7XG4gICAgICAgICAgICBkZWZhdWx0OiAvLyBUUkFOU0lUSU9OX1NUQVRFX0lOREVURVJNSU5BVEVcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUgPT09IFRSQU5TSVRJT05fU1RBVEVfQ0hFQ0tFRCA/IEFOSU1fSU5ERVRFUk1JTkFURV9DSEVDS0VEIDogQU5JTV9JTkRFVEVSTUlOQVRFX1VOQ0hFQ0tFRDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDQ2hlY2tib3hGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVBcmlhQ2hlY2tlZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEVuc3VyZSBhcmlhLWNoZWNrZWQgaXMgc2V0IHRvIG1peGVkIGlmIGNoZWNrYm94IGlzIGluIGluZGV0ZXJtaW5hdGUgc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmlzSW5kZXRlcm1pbmF0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldE5hdGl2ZUNvbnRyb2xBdHRyKHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0lOREVURVJNSU5BVEVfVkFMVUUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIG9uL29mZiBzdGF0ZSBkb2VzIG5vdCBuZWVkIHRvIGtlZXAgdHJhY2sgb2YgYXJpYS1jaGVja2VkLCBzaW5jZVxuICAgICAgICAgICAgLy8gdGhlIHNjcmVlbnJlYWRlciB1c2VzIHRoZSBjaGVja2VkIHByb3BlcnR5IG9uIHRoZSBjaGVja2JveCBlbGVtZW50LlxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZW1vdmVOYXRpdmVDb250cm9sQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRF9BVFRSKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NoZWNrYm94Rm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDQ2hlY2tib3hGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDQ2hlY2tib3hGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENDb21wb25lbnQgfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTURDQ2hlY2tib3ggfSBmcm9tICdAbWF0ZXJpYWwvY2hlY2tib3gvY29tcG9uZW50JztcbmltcG9ydCB7IGNsb3Nlc3QgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIGV2ZW50cywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xudmFyIE1EQ0RhdGFUYWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENEYXRhVGFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRGF0YVRhYmxlKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0RhdGFUYWJsZS5hdHRhY2hUbyA9IGZ1bmN0aW9uIChyb290KSB7XG4gICAgICAgIHJldHVybiBuZXcgTURDRGF0YVRhYmxlKHJvb3QpO1xuICAgIH07XG4gICAgTURDRGF0YVRhYmxlLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGNoZWNrYm94RmFjdG9yeSkge1xuICAgICAgICBpZiAoY2hlY2tib3hGYWN0b3J5ID09PSB2b2lkIDApIHsgY2hlY2tib3hGYWN0b3J5ID0gZnVuY3Rpb24gKGVsKSB7IHJldHVybiBuZXcgTURDQ2hlY2tib3goZWwpOyB9OyB9XG4gICAgICAgIHRoaXMuY2hlY2tib3hGYWN0b3J5XyA9IGNoZWNrYm94RmFjdG9yeTtcbiAgICB9O1xuICAgIE1EQ0RhdGFUYWJsZS5wcm90b3R5cGUuaW5pdGlhbFN5bmNXaXRoRE9NID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmhlYWRlclJvd18gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDbGFzc2VzLkhFQURFUl9ST1cpO1xuICAgICAgICB0aGlzLmhhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmZvdW5kYXRpb25fLmhhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlKCk7IH07XG4gICAgICAgIHRoaXMuaGVhZGVyUm93Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlXyk7XG4gICAgICAgIHRoaXMuY29udGVudF8gPSB0aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBjc3NDbGFzc2VzLkNPTlRFTlQpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvd0NoZWNrYm94Q2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuZm91bmRhdGlvbl8uaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2UoZXZlbnQpOyB9O1xuICAgICAgICB0aGlzLmNvbnRlbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2VfKTtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlLWluaXRpYWxpemVzIGhlYWRlciByb3cgY2hlY2tib3ggYW5kIHJvdyBjaGVja2JveGVzIHdoZW4gc2VsZWN0YWJsZSByb3dzIGFyZSBhZGRlZCBvciByZW1vdmVkIGZyb20gdGFibGUuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYXJyYXkgb2Ygcm93IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZS5wcm90b3R5cGUuZ2V0Um93cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0Um93cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGFycmF5IG9mIHNlbGVjdGVkIHJvdyBpZHMuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlLnByb3RvdHlwZS5nZXRTZWxlY3RlZFJvd0lkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRhdGlvbl8uZ2V0U2VsZWN0ZWRSb3dJZHMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgc2VsZWN0ZWQgcm93IGlkcy4gT3ZlcndyaXRlcyBwcmV2aW91c2x5IHNlbGVjdGVkIHJvd3MuXG4gICAgICogQHBhcmFtIHJvd0lkcyBBcnJheSBvZiByb3cgaWRzIHRoYXQgbmVlZHMgdG8gYmUgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlLnByb3RvdHlwZS5zZXRTZWxlY3RlZFJvd0lkcyA9IGZ1bmN0aW9uIChyb3dJZHMpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRTZWxlY3RlZFJvd0lkcyhyb3dJZHMpO1xuICAgIH07XG4gICAgTURDRGF0YVRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhlYWRlclJvd18ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZV8pO1xuICAgICAgICB0aGlzLmNvbnRlbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2VfKTtcbiAgICAgICAgdGhpcy5oZWFkZXJSb3dDaGVja2JveF8uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnJvd0NoZWNrYm94TGlzdF8uZm9yRWFjaChmdW5jdGlvbiAoY2hlY2tib3gpIHsgcmV0dXJuIGNoZWNrYm94LmRlc3Ryb3koKTsgfSk7XG4gICAgfTtcbiAgICBNRENEYXRhVGFibGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBETyBOT1QgSU5MSU5FIHRoaXMgdmFyaWFibGUuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBmb3VuZGF0aW9ucyB0YWtlIGEgUGFydGlhbDxNRENGb29BZGFwdGVyPi5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHdlIGRvbid0IGFjY2lkZW50YWxseSBvbWl0IGFueSBtZXRob2RzLCB3ZSBuZWVkIGEgc2VwYXJhdGUsIHN0cm9uZ2x5IHR5cGVkIGFkYXB0ZXIgdmFyaWFibGUuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgIHZhciBhZGFwdGVyID0ge1xuICAgICAgICAgICAgYWRkQ2xhc3NBdFJvd0luZGV4OiBmdW5jdGlvbiAocm93SW5kZXgsIGNsYXNzTmFtZSkgeyByZXR1cm4gX3RoaXMuZ2V0Um93cygpW3Jvd0luZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH0sXG4gICAgICAgICAgICBnZXRSb3dDb3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZ2V0Um93cygpLmxlbmd0aDsgfSxcbiAgICAgICAgICAgIGdldFJvd0VsZW1lbnRzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXS5zbGljZS5jYWxsKF90aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3JBbGwoc3RyaW5ncy5ST1dfU0VMRUNUT1IpKTsgfSxcbiAgICAgICAgICAgIGdldFJvd0lkQXRJbmRleDogZnVuY3Rpb24gKHJvd0luZGV4KSB7IHJldHVybiBfdGhpcy5nZXRSb3dzKClbcm93SW5kZXhdLmdldEF0dHJpYnV0ZShzdHJpbmdzLkRBVEFfUk9XX0lEX0FUVFIpOyB9LFxuICAgICAgICAgICAgZ2V0Um93SW5kZXhCeUNoaWxkRWxlbWVudDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldFJvd3MoKS5pbmRleE9mKGNsb3Nlc3QoZWwsIHN0cmluZ3MuUk9XX1NFTEVDVE9SKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRSb3dDb3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucm9vdF8ucXVlcnlTZWxlY3RvckFsbChzdHJpbmdzLlJPV19TRUxFQ1RFRF9TRUxFQ1RPUikubGVuZ3RoOyB9LFxuICAgICAgICAgICAgaXNDaGVja2JveEF0Um93SW5kZXhDaGVja2VkOiBmdW5jdGlvbiAocm93SW5kZXgpIHsgcmV0dXJuIF90aGlzLnJvd0NoZWNrYm94TGlzdF9bcm93SW5kZXhdLmNoZWNrZWQ7IH0sXG4gICAgICAgICAgICBpc0hlYWRlclJvd0NoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuaGVhZGVyUm93Q2hlY2tib3hfLmNoZWNrZWQ7IH0sXG4gICAgICAgICAgICBpc1Jvd3NTZWxlY3RhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIV90aGlzLnJvb3RfLnF1ZXJ5U2VsZWN0b3Ioc3RyaW5ncy5ST1dfQ0hFQ0tCT1hfU0VMRUNUT1IpOyB9LFxuICAgICAgICAgICAgbm90aWZ5Um93U2VsZWN0aW9uQ2hhbmdlZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KGV2ZW50cy5ST1dfU0VMRUNUSU9OX0NIQU5HRUQsIHtcbiAgICAgICAgICAgICAgICAgICAgcm93OiBfdGhpcy5nZXRSb3dCeUluZGV4XyhkYXRhLnJvd0luZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgcm93SWQ6IF90aGlzLmdldFJvd0lkQnlJbmRleF8oZGF0YS5yb3dJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIHJvd0luZGV4OiBkYXRhLnJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogZGF0YS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICB9LCBcbiAgICAgICAgICAgICAgICAvKiogc2hvdWxkQnViYmxlICovIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vdGlmeVNlbGVjdGVkQWxsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5lbWl0KGV2ZW50cy5TRUxFQ1RFRF9BTEwsIHt9LCAvKiogc2hvdWxkQnViYmxlICovIHRydWUpOyB9LFxuICAgICAgICAgICAgbm90aWZ5VW5zZWxlY3RlZEFsbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZW1pdChldmVudHMuVU5TRUxFQ1RFRF9BTEwsIHt9LCAvKiogc2hvdWxkQnViYmxlICovIHRydWUpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJIZWFkZXJSb3dDaGVja2JveDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5oZWFkZXJSb3dDaGVja2JveF8pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGVhZGVyUm93Q2hlY2tib3hfLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrYm94RWwgPSBfdGhpcy5yb290Xy5xdWVyeVNlbGVjdG9yKHN0cmluZ3MuSEVBREVSX1JPV19DSEVDS0JPWF9TRUxFQ1RPUik7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGVhZGVyUm93Q2hlY2tib3hfID0gX3RoaXMuY2hlY2tib3hGYWN0b3J5XyhjaGVja2JveEVsKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJvd0NoZWNrYm94ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucm93Q2hlY2tib3hMaXN0Xykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3dDaGVja2JveExpc3RfLmZvckVhY2goZnVuY3Rpb24gKGNoZWNrYm94KSB7IHJldHVybiBjaGVja2JveC5kZXN0cm95KCk7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5yb3dDaGVja2JveExpc3RfID0gW107XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2V0Um93cygpLmZvckVhY2goZnVuY3Rpb24gKHJvd0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2JveCA9IF90aGlzLmNoZWNrYm94RmFjdG9yeV8ocm93RWwucXVlcnlTZWxlY3RvcihzdHJpbmdzLlJPV19DSEVDS0JPWF9TRUxFQ1RPUikpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb3dDaGVja2JveExpc3RfLnB1c2goY2hlY2tib3gpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzQXRSb3dJbmRleDogZnVuY3Rpb24gKHJvd0luZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nZXRSb3dzKClbcm93SW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVBdFJvd0luZGV4OiBmdW5jdGlvbiAocm93SW5kZXgsIGF0dHIsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ2V0Um93cygpW3Jvd0luZGV4XS5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5oZWFkZXJSb3dDaGVja2JveF8uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SGVhZGVyUm93Q2hlY2tib3hJbmRldGVybWluYXRlOiBmdW5jdGlvbiAoaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhlYWRlclJvd0NoZWNrYm94Xy5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRSb3dDaGVja2JveENoZWNrZWRBdEluZGV4OiBmdW5jdGlvbiAocm93SW5kZXgsIGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yb3dDaGVja2JveExpc3RfW3Jvd0luZGV4XS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgTURDRGF0YVRhYmxlRm91bmRhdGlvbihhZGFwdGVyKTtcbiAgICB9O1xuICAgIE1EQ0RhdGFUYWJsZS5wcm90b3R5cGUuZ2V0Um93QnlJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Um93cygpW2luZGV4XTtcbiAgICB9O1xuICAgIE1EQ0RhdGFUYWJsZS5wcm90b3R5cGUuZ2V0Um93SWRCeUluZGV4XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSb3dCeUluZGV4XyhpbmRleCkuZ2V0QXR0cmlidXRlKHN0cmluZ3MuREFUQV9ST1dfSURfQVRUUik7XG4gICAgfTtcbiAgICByZXR1cm4gTURDRGF0YVRhYmxlO1xufShNRENDb21wb25lbnQpKTtcbmV4cG9ydCB7IE1EQ0RhdGFUYWJsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tcG9uZW50LmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIENFTEw6ICdtZGMtZGF0YS10YWJsZV9fY2VsbCcsXG4gICAgQ0VMTF9OVU1FUklDOiAnbWRjLWRhdGEtdGFibGVfX2NlbGwtLW51bWVyaWMnLFxuICAgIENPTlRFTlQ6ICdtZGMtZGF0YS10YWJsZV9fY29udGVudCcsXG4gICAgSEVBREVSX1JPVzogJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93JyxcbiAgICBIRUFERVJfUk9XX0NIRUNLQk9YOiAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3ctY2hlY2tib3gnLFxuICAgIFJPT1Q6ICdtZGMtZGF0YS10YWJsZScsXG4gICAgUk9XOiAnbWRjLWRhdGEtdGFibGVfX3JvdycsXG4gICAgUk9XX0NIRUNLQk9YOiAnbWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveCcsXG4gICAgUk9XX1NFTEVDVEVEOiAnbWRjLWRhdGEtdGFibGVfX3Jvdy0tc2VsZWN0ZWQnLFxufTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgREFUQV9ST1dfSURfQVRUUjogJ2RhdGEtcm93LWlkJyxcbiAgICBIRUFERVJfUk9XX0NIRUNLQk9YX1NFTEVDVE9SOiBcIi5cIiArIGNzc0NsYXNzZXMuSEVBREVSX1JPV19DSEVDS0JPWCxcbiAgICBST1dfQ0hFQ0tCT1hfU0VMRUNUT1I6IFwiLlwiICsgY3NzQ2xhc3Nlcy5ST1dfQ0hFQ0tCT1gsXG4gICAgUk9XX1NFTEVDVEVEX1NFTEVDVE9SOiBcIi5cIiArIGNzc0NsYXNzZXMuUk9XX1NFTEVDVEVELFxuICAgIFJPV19TRUxFQ1RPUjogXCIuXCIgKyBjc3NDbGFzc2VzLlJPVyxcbn07XG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcbiAgICBST1dfU0VMRUNUSU9OX0NIQU5HRUQ6ICdNRENEYXRhVGFibGU6cm93U2VsZWN0aW9uQ2hhbmdlZCcsXG4gICAgU0VMRUNURURfQUxMOiAnTURDRGF0YVRhYmxlOnNlbGVjdGVkQWxsJyxcbiAgICBVTlNFTEVDVEVEX0FMTDogJ01EQ0RhdGFUYWJsZTp1bnNlbGVjdGVkQWxsJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENEYXRhVGFibGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRGF0YVRhYmxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBNRENEYXRhVGFibGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NBdFJvd0luZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Um93Q291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Um93RWxlbWVudHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvd0lkQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Um93SW5kZXhCeUNoaWxkRWxlbWVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFJvd0NvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGlzQ2hlY2tib3hBdFJvd0luZGV4Q2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNIZWFkZXJSb3dDaGVja2JveENoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzUm93c1NlbGVjdGFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVJvd1NlbGVjdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZEFsbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVVuc2VsZWN0ZWRBbGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckhlYWRlclJvd0NoZWNrYm94OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSb3dDaGVja2JveGVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3NBdFJvd0luZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlQXRSb3dJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94SW5kZXRlcm1pbmF0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFJvd0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJlLWluaXRpYWxpemVzIGhlYWRlciByb3cgY2hlY2tib3ggYW5kIHJvdyBjaGVja2JveGVzIHdoZW4gc2VsZWN0YWJsZSByb3dzIGFyZSBhZGRlZCBvciByZW1vdmVkIGZyb20gdGFibGUuXG4gICAgICogVXNlIHRoaXMgaWYgcmVnaXN0ZXJpbmcgY2hlY2tib3ggaXMgc3luY2hyb25vdXMuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyXy5pc1Jvd3NTZWxlY3RhYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJIZWFkZXJSb3dDaGVja2JveCgpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJvd0NoZWNrYm94ZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SGVhZGVyUm93Q2hlY2tib3hTdGF0ZV8oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmUtaW5pdGlhbGl6ZXMgaGVhZGVyIHJvdyBjaGVja2JveCBhbmQgcm93IGNoZWNrYm94ZXMgd2hlbiBzZWxlY3RhYmxlIHJvd3MgYXJlIGFkZGVkIG9yIHJlbW92ZWQgZnJvbSB0YWJsZS5cbiAgICAgKiBVc2UgdGhpcyBpZiByZWdpc3RlcmluZyBjaGVja2JveCBpcyBhc3luY2hyb25vdXMuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0QXN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRhcHRlcl8uaXNSb3dzU2VsZWN0YWJsZSgpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYWRhcHRlcl8ucmVnaXN0ZXJIZWFkZXJSb3dDaGVja2JveCgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5hZGFwdGVyXy5yZWdpc3RlclJvd0NoZWNrYm94ZXMoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SGVhZGVyUm93Q2hlY2tib3hTdGF0ZV8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGFycmF5IG9mIHJvdyBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXy5nZXRSb3dFbGVtZW50cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBzZWxlY3RlZCByb3cgaWRzLiBPdmVyd3JpdGVzIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93cy5cbiAgICAgKiBAcGFyYW0gcm93SWRzIEFycmF5IG9mIHJvdyBpZHMgdGhhdCBuZWVkcyB0byBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZFJvd0lkcyA9IGZ1bmN0aW9uIChyb3dJZHMpIHtcbiAgICAgICAgZm9yICh2YXIgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHRoaXMuYWRhcHRlcl8uZ2V0Um93Q291bnQoKTsgcm93SW5kZXgrKykge1xuICAgICAgICAgICAgdmFyIHJvd0lkID0gdGhpcy5hZGFwdGVyXy5nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpO1xuICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyb3dJZCAmJiByb3dJZHMuaW5kZXhPZihyb3dJZCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRSb3dDaGVja2JveENoZWNrZWRBdEluZGV4KHJvd0luZGV4LCBpc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Um93QXRJbmRleF8ocm93SW5kZXgsIGlzU2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0SGVhZGVyUm93Q2hlY2tib3hTdGF0ZV8oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyBhcnJheSBvZiBzZWxlY3RlZCByb3cgaWRzLlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNlbGVjdGVkUm93SWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRSb3dJZHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHRoaXMuYWRhcHRlcl8uZ2V0Um93Q291bnQoKTsgcm93SW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcl8uaXNDaGVja2JveEF0Um93SW5kZXhDaGVja2VkKHJvd0luZGV4KSkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93SWRzLnB1c2godGhpcy5hZGFwdGVyXy5nZXRSb3dJZEF0SW5kZXgocm93SW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRSb3dJZHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGhlYWRlciByb3cgY2hlY2tib3ggY2hhbmdlIGV2ZW50LlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUhlYWRlclJvd0NoZWNrYm94Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNIZWFkZXJDaGVja2VkID0gdGhpcy5hZGFwdGVyXy5pc0hlYWRlclJvd0NoZWNrYm94Q2hlY2tlZCgpO1xuICAgICAgICBmb3IgKHZhciByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5hZGFwdGVyXy5nZXRSb3dDb3VudCgpOyByb3dJbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldFJvd0NoZWNrYm94Q2hlY2tlZEF0SW5kZXgocm93SW5kZXgsIGlzSGVhZGVyQ2hlY2tlZCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFJvd0F0SW5kZXhfKHJvd0luZGV4LCBpc0hlYWRlckNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0hlYWRlckNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5U2VsZWN0ZWRBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5VW5zZWxlY3RlZEFsbCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNoYW5nZSBldmVudCBvcmlnaW5hdGVkIGZyb20gcm93IGNoZWNrYm94ZXMuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlUm93Q2hlY2tib3hDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIHJvd0luZGV4ID0gdGhpcy5hZGFwdGVyXy5nZXRSb3dJbmRleEJ5Q2hpbGRFbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmFkYXB0ZXJfLmlzQ2hlY2tib3hBdFJvd0luZGV4Q2hlY2tlZChyb3dJbmRleCk7XG4gICAgICAgIHRoaXMuc2VsZWN0Um93QXRJbmRleF8ocm93SW5kZXgsIHNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJSb3dDaGVja2JveFN0YXRlXygpO1xuICAgICAgICB2YXIgcm93SWQgPSB0aGlzLmFkYXB0ZXJfLmdldFJvd0lkQXRJbmRleChyb3dJbmRleCk7XG4gICAgICAgIHRoaXMuYWRhcHRlcl8ubm90aWZ5Um93U2VsZWN0aW9uQ2hhbmdlZCh7IHJvd0lkOiByb3dJZCwgcm93SW5kZXg6IHJvd0luZGV4LCBzZWxlY3RlZDogc2VsZWN0ZWQgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGhlYWRlciByb3cgY2hlY2tib3ggc3RhdGUgYmFzZWQgb24gbnVtYmVyIG9mIHJvd3Mgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SGVhZGVyUm93Q2hlY2tib3hTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXJfLmdldFNlbGVjdGVkUm93Q291bnQoKSA9PT0gdGhpcy5hZGFwdGVyXy5nZXRSb3dDb3VudCgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uc2V0SGVhZGVyUm93Q2hlY2tib3hJbmRldGVybWluYXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXJfLmdldFNlbGVjdGVkUm93Q291bnQoKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRIZWFkZXJSb3dDaGVja2JveEluZGV0ZXJtaW5hdGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRIZWFkZXJSb3dDaGVja2JveENoZWNrZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyXy5zZXRIZWFkZXJSb3dDaGVja2JveEluZGV0ZXJtaW5hdGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZChmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGF0dHJpYnV0ZXMgb2Ygcm93IGVsZW1lbnQgYmFzZWQgb24gc2VsZWN0aW9uIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNlbGVjdFJvd0F0SW5kZXhfID0gZnVuY3Rpb24gKHJvd0luZGV4LCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8uYWRkQ2xhc3NBdFJvd0luZGV4KHJvd0luZGV4LCBjc3NDbGFzc2VzLlJPV19TRUxFQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUF0Um93SW5kZXgocm93SW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlcl8ucmVtb3ZlQ2xhc3NBdFJvd0luZGV4KHJvd0luZGV4LCBjc3NDbGFzc2VzLlJPV19TRUxFQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXJfLnNldEF0dHJpYnV0ZUF0Um93SW5kZXgocm93SW5kZXgsIHN0cmluZ3MuQVJJQV9TRUxFQ1RFRCwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENEYXRhVGFibGVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENEYXRhVGFibGVGb3VuZGF0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3VuZGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY29uc3RhbnRzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IF9fZGVjb3JhdGUgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCBNRENDaGVja2JveEZvdW5kYXRpb24gZnJvbSAnQG1hdGVyaWFsL2NoZWNrYm94L2ZvdW5kYXRpb24uanMnO1xuaW1wb3J0IHsgYWRkSGFzUmVtb3ZlQ2xhc3MsIEZvcm1FbGVtZW50LCBodG1sLCBvYnNlcnZlciwgcHJvcGVydHksIHF1ZXJ5IH0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Zvcm0tZWxlbWVudC5qcyc7XG5pbXBvcnQgeyByaXBwbGUgfSBmcm9tICdAbWF0ZXJpYWwvbXdjLXJpcHBsZS9yaXBwbGUtZGlyZWN0aXZlLmpzJztcbmV4cG9ydCBjbGFzcyBDaGVja2JveEJhc2UgZXh0ZW5kcyBGb3JtRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMubWRjRm91bmRhdGlvbkNsYXNzID0gTURDQ2hlY2tib3hGb3VuZGF0aW9uO1xuICAgIH1cbiAgICBnZXQgcmlwcGxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZGNSb290LnJpcHBsZTtcbiAgICB9XG4gICAgY3JlYXRlQWRhcHRlcigpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWRkSGFzUmVtb3ZlQ2xhc3ModGhpcy5tZGNSb290KSksIHsgZm9yY2VMYXlvdXQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1kY1Jvb3Qub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB9LCBpc0F0dGFjaGVkVG9ET006ICgpID0+IHRoaXMuaXNDb25uZWN0ZWQsIGlzSW5kZXRlcm1pbmF0ZTogKCkgPT4gdGhpcy5pbmRldGVybWluYXRlLCBpc0NoZWNrZWQ6ICgpID0+IHRoaXMuY2hlY2tlZCwgaGFzTmF0aXZlQ29udHJvbDogKCkgPT4gQm9vbGVhbih0aGlzLmZvcm1FbGVtZW50KSwgc2V0TmF0aXZlQ29udHJvbERpc2FibGVkOiAoZGlzYWJsZWQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1FbGVtZW50LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgICAgICB9LCBzZXROYXRpdmVDb250cm9sQXR0cjogKGF0dHIsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICAgICAgfSwgcmVtb3ZlTmF0aXZlQ29udHJvbEF0dHI6IChhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9IH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hlY2tib3hcIlxuICAgICAgICAgICBAYW5pbWF0aW9uZW5kPVwiJHt0aGlzLl9hbmltYXRpb25FbmRIYW5kbGVyfVwiXG4gICAgICAgICAgIC5yaXBwbGU9XCIke3JpcHBsZSgpfVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJtZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sXCJcbiAgICAgICAgICAgICAgQGNoYW5nZT1cIiR7dGhpcy5fY2hhbmdlSGFuZGxlcn1cIlxuICAgICAgICAgICAgICAuaW5kZXRlcm1pbmF0ZT1cIiR7dGhpcy5pbmRldGVybWluYXRlfVwiXG4gICAgICAgICAgICAgIC5jaGVja2VkPVwiJHt0aGlzLmNoZWNrZWR9XCJcbiAgICAgICAgICAgICAgLnZhbHVlPVwiJHt0aGlzLnZhbHVlfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cIm1kYy1jaGVja2JveF9fY2hlY2ttYXJrXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJtZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMS43MywxMi45MSA4LjEsMTkuMjggMjIuNzksNC41OVwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWNoZWNrYm94X19taXhlZG1hcmtcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICBfY2hhbmdlSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5mb3JtRWxlbWVudC5jaGVja2VkO1xuICAgICAgICB0aGlzLmluZGV0ZXJtaW5hdGUgPSB0aGlzLmZvcm1FbGVtZW50LmluZGV0ZXJtaW5hdGU7XG4gICAgICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVDaGFuZ2UoKTtcbiAgICB9XG4gICAgX2FuaW1hdGlvbkVuZEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMubWRjRm91bmRhdGlvbi5oYW5kbGVBbmltYXRpb25FbmQoKTtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBxdWVyeSgnLm1kYy1jaGVja2JveCcpXG5dLCBDaGVja2JveEJhc2UucHJvdG90eXBlLCBcIm1kY1Jvb3RcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHF1ZXJ5KCdpbnB1dCcpXG5dLCBDaGVja2JveEJhc2UucHJvdG90eXBlLCBcImZvcm1FbGVtZW50XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBwcm9wZXJ0eSh7IHR5cGU6IEJvb2xlYW4gfSlcbl0sIENoZWNrYm94QmFzZS5wcm90b3R5cGUsIFwiY2hlY2tlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pXG5dLCBDaGVja2JveEJhc2UucHJvdG90eXBlLCBcImluZGV0ZXJtaW5hdGVcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KSxcbiAgICBvYnNlcnZlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5tZGNGb3VuZGF0aW9uLnNldERpc2FibGVkKHZhbHVlKTtcbiAgICB9KVxuXSwgQ2hlY2tib3hCYXNlLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgcHJvcGVydHkoeyB0eXBlOiBTdHJpbmcgfSlcbl0sIENoZWNrYm94QmFzZS5wcm90b3R5cGUsIFwidmFsdWVcIiwgdm9pZCAwKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW13Yy1jaGVja2JveC1iYXNlLmpzLm1hcCIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BtYXRlcmlhbC9td2MtYmFzZS9iYXNlLWVsZW1lbnQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlID0gY3NzIGBAa2V5ZnJhbWVzIG1kYy1jaGVja2JveC11bmNoZWNrZWQtY2hlY2tlZC1jaGVja21hcmstcGF0aHswJSw1MCV7c3Ryb2tlLWRhc2hvZmZzZXQ6MjkuNzgzMzM4NX01MCV7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKX0xMDAle3N0cm9rZS1kYXNob2Zmc2V0OjB9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LXVuY2hlY2tlZC1pbmRldGVybWluYXRlLW1peGVkbWFya3swJSw2OC4yJXt0cmFuc2Zvcm06c2NhbGVYKDApfTY4LjIle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsIDAsIDAsIDEpfTEwMCV7dHJhbnNmb3JtOnNjYWxlWCgxKX19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtY2hlY2tlZC11bmNoZWNrZWQtY2hlY2ttYXJrLXBhdGh7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllcigwLjQsIDAsIDEsIDEpO29wYWNpdHk6MTtzdHJva2UtZGFzaG9mZnNldDowfXRve29wYWNpdHk6MDtzdHJva2UtZGFzaG9mZnNldDotMjkuNzgzMzM4NX19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtY2hlY2tlZC1pbmRldGVybWluYXRlLWNoZWNrbWFya3tmcm9te2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtY2hlY2ttYXJre2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC4xNCwgMCwgMCwgMSk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgbWRjLWNoZWNrYm94LWNoZWNrZWQtaW5kZXRlcm1pbmF0ZS1taXhlZG1hcmt7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOm1kYy1hbmltYXRpb24tZGVjZWxlcmF0aW9uLWN1cnZlLXRpbWluZy1mdW5jdGlvbjt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7b3BhY2l0eTowfXRve3RyYW5zZm9ybTpyb3RhdGUoMGRlZyk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtbWl4ZWRtYXJre2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC4xNCwgMCwgMCwgMSk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtvcGFjaXR5OjF9dG97dHJhbnNmb3JtOnJvdGF0ZSgzMTVkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS11bmNoZWNrZWQtbWl4ZWRtYXJrezAle2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyO3RyYW5zZm9ybTpzY2FsZVgoMSk7b3BhY2l0eToxfTMyLjglLDEwMCV7dHJhbnNmb3JtOnNjYWxlWCgwKTtvcGFjaXR5OjB9fS5tZGMtY2hlY2tib3h7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246cmVsYXRpdmU7ZmxleDowIDAgMThweDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bGluZS1oZWlnaHQ6MDt3aGl0ZS1zcGFjZTpub3dyYXA7Y3Vyc29yOnBvaW50ZXI7dmVydGljYWwtYWxpZ246Ym90dG9tfS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmUsLm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODZ9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZSwubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZDo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDo6YmVmb3JlLC5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2fUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDo6YmVmb3JlLC5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDo6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX19Lm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkOmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1jaGVja2JveC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkOm5vdCgubWRjLXJpcHBsZS11cGdyYWRlZCk6Zm9jdXM6OmJlZm9yZSwubWRjLWNoZWNrYm94Lm1kYy1jaGVja2JveC0tc2VsZWN0ZWQubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkOjpiZWZvcmV7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmFjdGl2ZTo6YWZ0ZXJ7dHJhbnNpdGlvbi1kdXJhdGlvbjo3NW1zO29wYWNpdHk6LjEyfS5tZGMtY2hlY2tib3gubWRjLWNoZWNrYm94LS1zZWxlY3RlZC5tZGMtcmlwcGxlLXVwZ3JhZGVkey0tbWRjLXJpcHBsZS1mZy1vcGFjaXR5OiAwLjEyfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkLm1kYy1jaGVja2JveC0tc2VsZWN0ZWQ6OmJlZm9yZSwubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZC5tZGMtY2hlY2tib3gtLXNlbGVjdGVkOjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODZ9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQubWRjLWNoZWNrYm94LS1zZWxlY3RlZDo6YmVmb3JlLC5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkLm1kYy1jaGVja2JveC0tc2VsZWN0ZWQ6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWQ6aW5kZXRlcm1pbmF0ZX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2JvcmRlci1jb2xvcjojMDE4Nzg2O2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX1Aa2V5ZnJhbWVzIG1kYy1jaGVja2JveC1mYWRlLWluLWJhY2tncm91bmQtdTZ1bHE0Z3swJXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9NTAle2JvcmRlci1jb2xvcjojMDE4Nzg2O2JvcmRlci1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KTtiYWNrZ3JvdW5kLWNvbG9yOiMwMTg3ODY7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMDE4Nzg2KX19QGtleWZyYW1lcyBtZGMtY2hlY2tib3gtZmFkZS1vdXQtYmFja2dyb3VuZC11NnVscTRnezAlLDgwJXtib3JkZXItY29sb3I6IzAxODc4Njtib3JkZXItY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nik7YmFja2dyb3VuZC1jb2xvcjojMDE4Nzg2O2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzAxODc4Nil9MTAwJXtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNTQpO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9fS5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWNoZWNrZWQgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUgLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6ZW5hYmxlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2FuaW1hdGlvbi1uYW1lOm1kYy1jaGVja2JveC1mYWRlLWluLWJhY2tncm91bmQtdTZ1bHE0Z30ubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmVuYWJsZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZHthbmltYXRpb24tbmFtZTptZGMtY2hlY2tib3gtZmFkZS1vdXQtYmFja2dyb3VuZC11NnVscTRnfS5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3tjb2xvcjojZmZmfS5tZGMtY2hlY2tib3hfX21peGVkbWFya3tib3JkZXItY29sb3I6I2ZmZn0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbFtkaXNhYmxlZF06bm90KDpjaGVja2VkKTpub3QoOmluZGV0ZXJtaW5hdGUpfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjI2KX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbFtkaXNhYmxlZF06Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sW2Rpc2FibGVkXTppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjYpfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKXsubWRjLWNoZWNrYm94X19taXhlZG1hcmt7bWFyZ2luOjAgMXB4fX0ubWRjLWNoZWNrYm94LS1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lfS5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjphYnNvbHV0ZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MThweDtoZWlnaHQ6MThweDtib3JkZXI6MnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O3BvaW50ZXItZXZlbnRzOm5vbmU7d2lsbC1jaGFuZ2U6YmFja2dyb3VuZC1jb2xvcixib3JkZXItY29sb3I7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDkwbXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSksYm9yZGVyLWNvbG9yIDkwbXMgMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSl9Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojMDAwfUBzdXBwb3J0cyBub3QgKC1tcy1pbWUtYWxpZ246IGF1dG8pey5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZDo6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UsICMwMDApfX0ubWRjLWNoZWNrYm94X19jaGVja21hcmt7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7d2lkdGg6MTAwJTtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IDE4MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3tvcGFjaXR5OjF9Lm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGh7dHJhbnNpdGlvbjpzdHJva2UtZGFzaG9mZnNldCAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS13aWR0aDozLjEycHg7c3Ryb2tlLWRhc2hvZmZzZXQ6MjkuNzgzMzM4NTtzdHJva2UtZGFzaGFycmF5OjI5Ljc4MzMzODV9Lm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre3dpZHRoOjEwMCU7aGVpZ2h0OjA7dHJhbnNmb3JtOnNjYWxlWCgwKSByb3RhdGUoMGRlZyk7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItc3R5bGU6c29saWQ7b3BhY2l0eTowO3RyYW5zaXRpb246b3BhY2l0eSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpLHRyYW5zZm9ybSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tdXBncmFkZWQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLC5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoLC5tZGMtY2hlY2tib3gtLXVwZ3JhZGVkIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3t0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudH0ubWRjLWNoZWNrYm94LS1hbmltLXVuY2hlY2tlZC1jaGVja2VkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveC0tYW5pbS11bmNoZWNrZWQtaW5kZXRlcm1pbmF0ZSAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kLC5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC11bmNoZWNrZWQgLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCwubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7YW5pbWF0aW9uLWR1cmF0aW9uOjE4MG1zO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyfS5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWNoZWNrZWQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJrLXBhdGh7YW5pbWF0aW9uOm1kYy1jaGVja2JveC11bmNoZWNrZWQtY2hlY2tlZC1jaGVja21hcmstcGF0aCAxODBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0tdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre2FuaW1hdGlvbjptZGMtY2hlY2tib3gtdW5jaGVja2VkLWluZGV0ZXJtaW5hdGUtbWl4ZWRtYXJrIDkwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWNoZWNrZWQtdW5jaGVja2VkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoe2FuaW1hdGlvbjptZGMtY2hlY2tib3gtY2hlY2tlZC11bmNoZWNrZWQtY2hlY2ttYXJrLXBhdGggOTBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LWNoZWNrZWQtaW5kZXRlcm1pbmF0ZS1jaGVja21hcmsgOTBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0tY2hlY2tlZC1pbmRldGVybWluYXRlIC5tZGMtY2hlY2tib3hfX21peGVkbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LWNoZWNrZWQtaW5kZXRlcm1pbmF0ZS1taXhlZG1hcmsgOTBtcyBsaW5lYXIgMHM7dHJhbnNpdGlvbjpub25lfS5tZGMtY2hlY2tib3gtLWFuaW0taW5kZXRlcm1pbmF0ZS1jaGVja2VkIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3thbmltYXRpb246bWRjLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUtY2hlY2tlZC1jaGVja21hcmsgNTAwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94LS1hbmltLWluZGV0ZXJtaW5hdGUtY2hlY2tlZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLWNoZWNrZWQtbWl4ZWRtYXJrIDUwMG1zIGxpbmVhciAwczt0cmFuc2l0aW9uOm5vbmV9Lm1kYy1jaGVja2JveC0tYW5pbS1pbmRldGVybWluYXRlLXVuY2hlY2tlZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7YW5pbWF0aW9uOm1kYy1jaGVja2JveC1pbmRldGVybWluYXRlLXVuY2hlY2tlZC1taXhlZG1hcmsgMzAwbXMgbGluZWFyIDBzO3RyYW5zaXRpb246bm9uZX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDpjaGVja2Vkfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsLm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6aW5kZXRlcm1pbmF0ZX4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIDkwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLGJhY2tncm91bmQtY29sb3IgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSl9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFyay1wYXRoLC5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmluZGV0ZXJtaW5hdGV+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19jaGVja21hcmstcGF0aHtzdHJva2UtZGFzaG9mZnNldDowfS5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTt0cmFuc2Zvcm06c2NhbGUoMCwgMCk7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwiO3dpbGwtY2hhbmdlOm9wYWNpdHksdHJhbnNmb3JtO3RyYW5zaXRpb246b3BhY2l0eSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpLHRyYW5zZm9ybSA5MG1zIDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmZvY3Vzfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQ6OmJlZm9yZXt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eTouMTI7dHJhbnNpdGlvbjpvcGFjaXR5IDgwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLHRyYW5zZm9ybSA4MG1zIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7b3BhY2l0eTowO2N1cnNvcjppbmhlcml0fS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmRpc2FibGVke2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9Lm1kYy1jaGVja2JveF9fbmF0aXZlLWNvbnRyb2w6Y2hlY2tlZH4ubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kIC5tZGMtY2hlY2tib3hfX2NoZWNrbWFya3t0cmFuc2l0aW9uOm9wYWNpdHkgMTgwbXMgMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpLHRyYW5zZm9ybSAxODBtcyAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7b3BhY2l0eToxfS5tZGMtY2hlY2tib3hfX25hdGl2ZS1jb250cm9sOmNoZWNrZWR+Lm1kYy1jaGVja2JveF9fYmFja2dyb3VuZCAubWRjLWNoZWNrYm94X19taXhlZG1hcmt7dHJhbnNmb3JtOnNjYWxlWCgxKSByb3RhdGUoLTQ1ZGVnKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fY2hlY2ttYXJre3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MDt0cmFuc2l0aW9uOm9wYWNpdHkgOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSx0cmFuc2Zvcm0gOTBtcyAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKX0ubWRjLWNoZWNrYm94X19uYXRpdmUtY29udHJvbDppbmRldGVybWluYXRlfi5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQgLm1kYy1jaGVja2JveF9fbWl4ZWRtYXJre3RyYW5zZm9ybTpzY2FsZVgoMSkgcm90YXRlKDBkZWcpO29wYWNpdHk6MX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctcmFkaXVzLWlue2Zyb217YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQsIDApKSBzY2FsZSgxKX10b3t0cmFuc2Zvcm06dHJhbnNsYXRlKHZhcigtLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCwgMCkpIHNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX19QGtleWZyYW1lcyBtZGMtcmlwcGxlLWZnLW9wYWNpdHktaW57ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OjB9dG97b3BhY2l0eTp2YXIoLS1tZGMtcmlwcGxlLWZnLW9wYWNpdHksIDApfX1Aa2V5ZnJhbWVzIG1kYy1yaXBwbGUtZmctb3BhY2l0eS1vdXR7ZnJvbXthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjtvcGFjaXR5OnZhcigtLW1kYy1yaXBwbGUtZmctb3BhY2l0eSwgMCl9dG97b3BhY2l0eTowfX0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Z3stLW1kYy1yaXBwbGUtc3VyZmFjZS10ZXN0LWVkZ2UtdmFyOiAxcHggc29saWQgIzAwMDt2aXNpYmlsaXR5OmhpZGRlbn0ubWRjLXJpcHBsZS1zdXJmYWNlLS10ZXN0LWVkZ2UtdmFyLWJ1Zzo6YmVmb3Jle2JvcmRlcjp2YXIoLS1tZGMtcmlwcGxlLXN1cmZhY2UtdGVzdC1lZGdlLXZhcil9Lm1kYy1jaGVja2JveHstLW1kYy1yaXBwbGUtZmctc2l6ZTogMDstLW1kYy1yaXBwbGUtbGVmdDogMDstLW1kYy1yaXBwbGUtdG9wOiAwOy0tbWRjLXJpcHBsZS1mZy1zY2FsZTogMTstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZDogMDstLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLXN0YXJ0OiAwOy13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApO3BhZGRpbmc6MTFweH0ubWRjLWNoZWNrYm94OjpiZWZvcmUsLm1kYy1jaGVja2JveDo6YWZ0ZXJ7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyLXJhZGl1czo1MCU7b3BhY2l0eTowO3BvaW50ZXItZXZlbnRzOm5vbmU7Y29udGVudDpcIlwifS5tZGMtY2hlY2tib3g6OmJlZm9yZXt0cmFuc2l0aW9uOm9wYWNpdHkgMTVtcyBsaW5lYXIsYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhcjt6LWluZGV4OjF9Lm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkOjpiZWZvcmV7dHJhbnNmb3JtOnNjYWxlKHZhcigtLW1kYy1yaXBwbGUtZmctc2NhbGUsIDEpKX0ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDowO2xlZnQ6MDt0cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkOjphZnRlcnt0b3A6dmFyKC0tbWRjLXJpcHBsZS10b3AsIDApO2xlZnQ6dmFyKC0tbWRjLXJpcHBsZS1sZWZ0LCAwKX0ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtYWN0aXZhdGlvbjo6YWZ0ZXJ7YW5pbWF0aW9uOm1kYy1yaXBwbGUtZmctcmFkaXVzLWluIDIyNW1zIGZvcndhcmRzLG1kYy1yaXBwbGUtZmctb3BhY2l0eS1pbiA3NW1zIGZvcndhcmRzfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1kZWFjdGl2YXRpb246OmFmdGVye2FuaW1hdGlvbjptZGMtcmlwcGxlLWZnLW9wYWNpdHktb3V0IDE1MG1zO3RyYW5zZm9ybTp0cmFuc2xhdGUodmFyKC0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kLCAwKSkgc2NhbGUodmFyKC0tbWRjLXJpcHBsZS1mZy1zY2FsZSwgMSkpfS5tZGMtY2hlY2tib3g6OmJlZm9yZSwubWRjLWNoZWNrYm94OjphZnRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9QHN1cHBvcnRzIG5vdCAoLW1zLWltZS1hbGlnbjogYXV0byl7Lm1kYy1jaGVja2JveDo6YmVmb3JlLC5tZGMtY2hlY2tib3g6OmFmdGVye2JhY2tncm91bmQtY29sb3I6dmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UsICMwMDApfX0ubWRjLWNoZWNrYm94OmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDR9Lm1kYy1jaGVja2JveDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOmZvY3VzOjpiZWZvcmUsLm1kYy1jaGVja2JveC5tZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6OmJlZm9yZXt0cmFuc2l0aW9uLWR1cmF0aW9uOjc1bXM7b3BhY2l0eTouMTJ9Lm1kYy1jaGVja2JveDpub3QoLm1kYy1yaXBwbGUtdXBncmFkZWQpOjphZnRlcnt0cmFuc2l0aW9uOm9wYWNpdHkgMTUwbXMgbGluZWFyfS5tZGMtY2hlY2tib3g6bm90KC5tZGMtcmlwcGxlLXVwZ3JhZGVkKTphY3RpdmU6OmFmdGVye3RyYW5zaXRpb24tZHVyYXRpb246NzVtcztvcGFjaXR5Oi4xMn0ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWR7LS1tZGMtcmlwcGxlLWZnLW9wYWNpdHk6IDAuMTJ9Lm1kYy1jaGVja2JveDo6YmVmb3JlLC5tZGMtY2hlY2tib3g6OmFmdGVye3RvcDpjYWxjKDUwJSAtIDUwJSk7bGVmdDpjYWxjKDUwJSAtIDUwJSk7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmJlZm9yZSwubWRjLWNoZWNrYm94Lm1kYy1yaXBwbGUtdXBncmFkZWQ6OmFmdGVye3RvcDp2YXIoLS1tZGMtcmlwcGxlLXRvcCwgY2FsYyg1MCUgLSA1MCUpKTtsZWZ0OnZhcigtLW1kYy1yaXBwbGUtbGVmdCwgY2FsYyg1MCUgLSA1MCUpKTt3aWR0aDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpO2hlaWdodDp2YXIoLS1tZGMtcmlwcGxlLWZnLXNpemUsIDEwMCUpfS5tZGMtY2hlY2tib3gubWRjLXJpcHBsZS11cGdyYWRlZDo6YWZ0ZXJ7d2lkdGg6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKTtoZWlnaHQ6dmFyKC0tbWRjLXJpcHBsZS1mZy1zaXplLCAxMDAlKX0ubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmR7bGVmdDoxMXB4O3JpZ2h0OmluaXRpYWw7dG9wOjExcHh9Lm1kYy1jaGVja2JveFtkaXI9cnRsXSAubWRjLWNoZWNrYm94IC5tZGMtY2hlY2tib3hfX2JhY2tncm91bmQsW2Rpcj1ydGxdIC5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5ke2xlZnQ6aW5pdGlhbDtyaWdodDoxMXB4fS5tZGMtY2hlY2tib3ggLm1kYy1jaGVja2JveF9fYmFja2dyb3VuZDo6YmVmb3Jle3RvcDotMTNweDtsZWZ0Oi0xM3B4O3dpZHRoOjQwcHg7aGVpZ2h0OjQwcHh9Lm1kYy1yaXBwbGUtdXBncmFkZWQtLWJhY2tncm91bmQtZm9jdXNlZCAubWRjLWNoZWNrYm94X19iYWNrZ3JvdW5kOjpiZWZvcmV7Y29udGVudDpub25lfTpob3N0e291dGxpbmU6bm9uZX1gO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bXdjLWNoZWNrYm94LWNzcy5qcy5tYXAiLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG4vKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xueW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG5TZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG5saW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5pbXBvcnQgeyBjdXN0b21FbGVtZW50IH0gZnJvbSAnQG1hdGVyaWFsL213Yy1iYXNlL2Zvcm0tZWxlbWVudC5qcyc7XG5pbXBvcnQgeyBDaGVja2JveEJhc2UgfSBmcm9tICcuL213Yy1jaGVja2JveC1iYXNlLmpzJztcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnLi9td2MtY2hlY2tib3gtY3NzLmpzJztcbmxldCBDaGVja2JveCA9IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ2hlY2tib3hCYXNlIHtcbn07XG5DaGVja2JveC5zdHlsZXMgPSBzdHlsZTtcbkNoZWNrYm94ID0gX19kZWNvcmF0ZShbXG4gICAgY3VzdG9tRWxlbWVudCgnbXdjLWNoZWNrYm94Jylcbl0sIENoZWNrYm94KTtcbmV4cG9ydCB7IENoZWNrYm94IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1td2MtY2hlY2tib3guanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDQ29tcG9uZW50IH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IGFwcGx5UGFzc2l2ZSB9IGZyb20gJ0BtYXRlcmlhbC9kb20vZXZlbnRzJztcbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICdAbWF0ZXJpYWwvZG9tL3BvbnlmaWxsJztcbmltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfSBmcm9tICcuL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xudmFyIE1EQ1JpcHBsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhNRENSaXBwbGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBNRENSaXBwbGUuYXR0YWNoVG8gPSBmdW5jdGlvbiAocm9vdCwgb3B0cykge1xuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7IGlzVW5ib3VuZGVkOiB1bmRlZmluZWQgfTsgfVxuICAgICAgICB2YXIgcmlwcGxlID0gbmV3IE1EQ1JpcHBsZShyb290KTtcbiAgICAgICAgLy8gT25seSBvdmVycmlkZSB1bmJvdW5kZWQgYmVoYXZpb3IgaWYgb3B0aW9uIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkXG4gICAgICAgIGlmIChvcHRzLmlzVW5ib3VuZGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJpcHBsZS51bmJvdW5kZWQgPSBvcHRzLmlzVW5ib3VuZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByaXBwbGU7XG4gICAgfTtcbiAgICBNRENSaXBwbGUuY3JlYXRlQWRhcHRlciA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjbGFzc05hbWUpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfSxcbiAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KTsgfSxcbiAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluc3RhbmNlLnJvb3RfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOyB9LFxuICAgICAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY29udGFpbnModGFyZ2V0KTsgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uIChldnRUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJvb3RfLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpOyB9LFxuICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogd2luZG93LnBhZ2VYT2Zmc2V0LCB5OiB3aW5kb3cucGFnZVlPZmZzZXQgfSk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoaW5zdGFuY2Uucm9vdF8sICc6YWN0aXZlJyk7IH0sXG4gICAgICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS5kaXNhYmxlZCk7IH0sXG4gICAgICAgICAgICBpc1VuYm91bmRlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQm9vbGVhbihpbnN0YW5jZS51bmJvdW5kZWQpOyB9LFxuICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKGV2dFR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciwgYXBwbHlQYXNzaXZlKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoZXZ0VHlwZSwgaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5yb290Xy5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIsIGFwcGx5UGFzc2l2ZSgpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlcik7IH0sXG4gICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9LFxuICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICh2YXJOYW1lLCB2YWx1ZSkgeyByZXR1cm4gaW5zdGFuY2Uucm9vdF8uc3R5bGUuc2V0UHJvcGVydHkodmFyTmFtZSwgdmFsdWUpOyB9LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZS5wcm90b3R5cGUsIFwidW5ib3VuZGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5ib3VuZGVkXyA9IEJvb2xlYW4odW5ib3VuZGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5ib3VuZGVkXygpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZvdW5kYXRpb25fLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8uZGVhY3RpdmF0ZSgpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZm91bmRhdGlvbl8ubGF5b3V0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGUucHJvdG90eXBlLmdldERlZmF1bHRGb3VuZGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IE1EQ1JpcHBsZUZvdW5kYXRpb24oTURDUmlwcGxlLmNyZWF0ZUFkYXB0ZXIodGhpcykpO1xuICAgIH07XG4gICAgTURDUmlwcGxlLnByb3RvdHlwZS5pbml0aWFsU3luY1dpdGhET00gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByb290ID0gdGhpcy5yb290XztcbiAgICAgICAgdGhpcy51bmJvdW5kZWQgPSAnbWRjUmlwcGxlSXNVbmJvdW5kZWQnIGluIHJvb3QuZGF0YXNldDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3N1cmUgQ29tcGlsZXIgdGhyb3dzIGFuIGFjY2VzcyBjb250cm9sIGVycm9yIHdoZW4gZGlyZWN0bHkgYWNjZXNzaW5nIGFcbiAgICAgKiBwcm90ZWN0ZWQgb3IgcHJpdmF0ZSBwcm9wZXJ0eSBpbnNpZGUgYSBnZXR0ZXIvc2V0dGVyLCBsaWtlIHVuYm91bmRlZCBhYm92ZS5cbiAgICAgKiBCeSBhY2Nlc3NpbmcgdGhlIHByb3RlY3RlZCBwcm9wZXJ0eSBpbnNpZGUgYSBtZXRob2QsIHdlIHNvbHZlIHRoYXQgcHJvYmxlbS5cbiAgICAgKiBUaGF0J3Mgd2h5IHRoaXMgZnVuY3Rpb24gZXhpc3RzLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZS5wcm90b3R5cGUuc2V0VW5ib3VuZGVkXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mb3VuZGF0aW9uXy5zZXRVbmJvdW5kZWQoQm9vbGVhbih0aGlzLnVuYm91bmRlZF8pKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENSaXBwbGU7XG59KE1EQ0NvbXBvbmVudCkpO1xuZXhwb3J0IHsgTURDUmlwcGxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wb25lbnQuanMubWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWhCQTtBQUNBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0REE7QUF3REE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hKQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQW5CQTtBQXFCQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBQ0E7QUFUQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQVNBO0FBdEJBO0FBQUE7QUFBQTtBQXdCQTtBQW9CQTtBQTVDQTtBQUFBO0FBQUE7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFqREE7QUFBQTtBQUFBO0FBbURBO0FBQ0E7QUFwREE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQVhBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFxREE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUF4QkE7QUEwQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==