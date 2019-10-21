(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~config-entry-system-options~device-r~780fc7fc"],{

/***/ "./node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js ***!
  \**********************************************************************/
/*! exports provided: IronFitBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFitBehavior", function() { return IronFitBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
`Polymer.IronFitBehavior` fits an element in another element using `max-height`
and `max-width`, and optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been
sized and/or positioned by CSS.

CSS properties            | Action
--------------------------|-------------------------------------------
`position` set            | Element is not centered horizontally or vertically
`top` or `bottom` set     | Element is not vertically centered
`left` or `right` set     | Element is not horizontally centered
`max-height` set          | Element respects `max-height`
`max-width` set           | Element respects `max-width`

`Polymer.IronFitBehavior` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css
position.

    <div class="container">
      <iron-fit-impl vertical-align="top" horizontal-align="auto">
        Positioned into the container
      </iron-fit-impl>
    </div>

Use `noOverlap` to position the element around another element without
overlapping it.

    <div class="container">
      <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
        Positioned around the container
      </iron-fit-impl>
    </div>

Use `horizontalOffset, verticalOffset` to offset the element from its
`positionTarget`; `Polymer.IronFitBehavior` will collapse these in order to
keep the element within `fitInto` boundaries, while preserving the element's
CSS margin values.

    <div class="container">
      <iron-fit-impl vertical-align="top" vertical-offset="20">
        With vertical offset
      </iron-fit-impl>
    </div>

@demo demo/index.html
@polymerBehavior
*/

var IronFitBehavior = {
  properties: {
    /**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */
    sizingTarget: {
      type: Object,
      value: function value() {
        return this;
      }
    },

    /**
     * The element to fit `this` into.
     */
    fitInto: {
      type: Object,
      value: window
    },

    /**
     * Will position the element around the positionTarget without overlapping
     * it.
     */
    noOverlap: {
      type: Boolean
    },

    /**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */
    positionTarget: {
      type: Element
    },

    /**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */
    horizontalAlign: {
      type: String
    },

    /**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */
    verticalAlign: {
      type: String
    },

    /**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */
    horizontalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */
    verticalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * Set to true to auto-fit on attach.
     */
    autoFitOnAttach: {
      type: Boolean,
      value: false
    },

    /** @type {?Object} */
    _fitInfo: {
      type: Object
    }
  },

  get _fitWidth() {
    var fitWidth;

    if (this.fitInto === window) {
      fitWidth = this.fitInto.innerWidth;
    } else {
      fitWidth = this.fitInto.getBoundingClientRect().width;
    }

    return fitWidth;
  },

  get _fitHeight() {
    var fitHeight;

    if (this.fitInto === window) {
      fitHeight = this.fitInto.innerHeight;
    } else {
      fitHeight = this.fitInto.getBoundingClientRect().height;
    }

    return fitHeight;
  },

  get _fitLeft() {
    var fitLeft;

    if (this.fitInto === window) {
      fitLeft = 0;
    } else {
      fitLeft = this.fitInto.getBoundingClientRect().left;
    }

    return fitLeft;
  },

  get _fitTop() {
    var fitTop;

    if (this.fitInto === window) {
      fitTop = 0;
    } else {
      fitTop = this.fitInto.getBoundingClientRect().top;
    }

    return fitTop;
  },

  /**
   * The element that should be used to position the element,
   * if no position target is configured.
   */
  get _defaultPositionTarget() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).parentNode;

    if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      parent = parent.host;
    }

    return parent;
  },

  /**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */
  get _localeHorizontalAlign() {
    if (this._isRTL) {
      // In RTL, "left" becomes "right".
      if (this.horizontalAlign === 'right') {
        return 'left';
      }

      if (this.horizontalAlign === 'left') {
        return 'right';
      }
    }

    return this.horizontalAlign;
  },

  /**
   * True if the element should be positioned instead of centered.
   * @private
   */
  get __shouldPosition() {
    return (this.horizontalAlign || this.verticalAlign) && this.positionTarget;
  },

  attached: function attached() {
    // Memoize this to avoid expensive calculations & relayouts.
    // Make sure we do it only once
    if (typeof this._isRTL === 'undefined') {
      this._isRTL = window.getComputedStyle(this).direction == 'rtl';
    }

    this.positionTarget = this.positionTarget || this._defaultPositionTarget;

    if (this.autoFitOnAttach) {
      if (window.getComputedStyle(this).display === 'none') {
        setTimeout(function () {
          this.fit();
        }.bind(this));
      } else {
        // NOTE: shadydom applies distribution asynchronously
        // for performance reasons webcomponents/shadydom#120
        // Flush to get correct layout info.
        window.ShadyDOM && ShadyDOM.flush();
        this.fit();
      }
    }
  },
  detached: function detached() {
    if (this.__deferredFit) {
      clearTimeout(this.__deferredFit);
      this.__deferredFit = null;
    }
  },

  /**
   * Positions and fits the element into the `fitInto` element.
   */
  fit: function fit() {
    this.position();
    this.constrain();
    this.center();
  },

  /**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */
  _discoverInfo: function _discoverInfo() {
    if (this._fitInfo) {
      return;
    }

    var target = window.getComputedStyle(this);
    var sizer = window.getComputedStyle(this.sizingTarget);
    this._fitInfo = {
      inlineStyle: {
        top: this.style.top || '',
        left: this.style.left || '',
        position: this.style.position || ''
      },
      sizerInlineStyle: {
        maxWidth: this.sizingTarget.style.maxWidth || '',
        maxHeight: this.sizingTarget.style.maxHeight || '',
        boxSizing: this.sizingTarget.style.boxSizing || ''
      },
      positionedBy: {
        vertically: target.top !== 'auto' ? 'top' : target.bottom !== 'auto' ? 'bottom' : null,
        horizontally: target.left !== 'auto' ? 'left' : target.right !== 'auto' ? 'right' : null
      },
      sizedBy: {
        height: sizer.maxHeight !== 'none',
        width: sizer.maxWidth !== 'none',
        minWidth: parseInt(sizer.minWidth, 10) || 0,
        minHeight: parseInt(sizer.minHeight, 10) || 0
      },
      margin: {
        top: parseInt(target.marginTop, 10) || 0,
        right: parseInt(target.marginRight, 10) || 0,
        bottom: parseInt(target.marginBottom, 10) || 0,
        left: parseInt(target.marginLeft, 10) || 0
      }
    };
  },

  /**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */
  resetFit: function resetFit() {
    var info = this._fitInfo || {};

    for (var property in info.sizerInlineStyle) {
      this.sizingTarget.style[property] = info.sizerInlineStyle[property];
    }

    for (var property in info.inlineStyle) {
      this.style[property] = info.inlineStyle[property];
    }

    this._fitInfo = null;
  },

  /**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */
  refit: function refit() {
    var scrollLeft = this.sizingTarget.scrollLeft;
    var scrollTop = this.sizingTarget.scrollTop;
    this.resetFit();
    this.fit();
    this.sizingTarget.scrollLeft = scrollLeft;
    this.sizingTarget.scrollTop = scrollTop;
  },

  /**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */
  position: function position() {
    if (!this.__shouldPosition) {
      // needs to be centered, and it is done after constrain.
      return;
    }

    this._discoverInfo();

    this.style.position = 'fixed'; // Need border-box for margin/padding.

    this.sizingTarget.style.boxSizing = 'border-box'; // Set to 0, 0 in order to discover any offset caused by parent stacking
    // contexts.

    this.style.left = '0px';
    this.style.top = '0px';
    var rect = this.getBoundingClientRect();

    var positionRect = this.__getNormalizedRect(this.positionTarget);

    var fitRect = this.__getNormalizedRect(this.fitInto);

    var margin = this._fitInfo.margin; // Consider the margin as part of the size for position calculations.

    var size = {
      width: rect.width + margin.left + margin.right,
      height: rect.height + margin.top + margin.bottom
    };

    var position = this.__getPosition(this._localeHorizontalAlign, this.verticalAlign, size, rect, positionRect, fitRect);

    var left = position.left + margin.left;
    var top = position.top + margin.top; // We first limit right/bottom within fitInto respecting the margin,
    // then use those values to limit top/left.

    var right = Math.min(fitRect.right - margin.right, left + rect.width);
    var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height); // Keep left/top within fitInto respecting the margin.

    left = Math.max(fitRect.left + margin.left, Math.min(left, right - this._fitInfo.sizedBy.minWidth));
    top = Math.max(fitRect.top + margin.top, Math.min(top, bottom - this._fitInfo.sizedBy.minHeight)); // Use right/bottom to set maxWidth/maxHeight, and respect
    // minWidth/minHeight.

    this.sizingTarget.style.maxWidth = Math.max(right - left, this._fitInfo.sizedBy.minWidth) + 'px';
    this.sizingTarget.style.maxHeight = Math.max(bottom - top, this._fitInfo.sizedBy.minHeight) + 'px'; // Remove the offset caused by any stacking context.

    this.style.left = left - rect.left + 'px';
    this.style.top = top - rect.top + 'px';
  },

  /**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */
  constrain: function constrain() {
    if (this.__shouldPosition) {
      return;
    }

    this._discoverInfo();

    var info = this._fitInfo; // position at (0px, 0px) if not already positioned, so we can measure the
    // natural size.

    if (!info.positionedBy.vertically) {
      this.style.position = 'fixed';
      this.style.top = '0px';
    }

    if (!info.positionedBy.horizontally) {
      this.style.position = 'fixed';
      this.style.left = '0px';
    } // need border-box for margin/padding


    this.sizingTarget.style.boxSizing = 'border-box'; // constrain the width and height if not already set

    var rect = this.getBoundingClientRect();

    if (!info.sizedBy.height) {
      this.__sizeDimension(rect, info.positionedBy.vertically, 'top', 'bottom', 'Height');
    }

    if (!info.sizedBy.width) {
      this.__sizeDimension(rect, info.positionedBy.horizontally, 'left', 'right', 'Width');
    }
  },

  /**
   * @protected
   * @deprecated
   */
  _sizeDimension: function _sizeDimension(rect, positionedBy, start, end, extent) {
    this.__sizeDimension(rect, positionedBy, start, end, extent);
  },

  /**
   * @private
   */
  __sizeDimension: function __sizeDimension(rect, positionedBy, start, end, extent) {
    var info = this._fitInfo;

    var fitRect = this.__getNormalizedRect(this.fitInto);

    var max = extent === 'Width' ? fitRect.width : fitRect.height;
    var flip = positionedBy === end;
    var offset = flip ? max - rect[end] : rect[start];
    var margin = info.margin[flip ? start : end];
    var offsetExtent = 'offset' + extent;
    var sizingOffset = this[offsetExtent] - this.sizingTarget[offsetExtent];
    this.sizingTarget.style['max' + extent] = max - margin - offset - sizingOffset + 'px';
  },

  /**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */
  center: function center() {
    if (this.__shouldPosition) {
      return;
    }

    this._discoverInfo();

    var positionedBy = this._fitInfo.positionedBy;

    if (positionedBy.vertically && positionedBy.horizontally) {
      // Already positioned.
      return;
    } // Need position:fixed to center


    this.style.position = 'fixed'; // Take into account the offset caused by parents that create stacking
    // contexts (e.g. with transform: translate3d). Translate to 0,0 and
    // measure the bounding rect.

    if (!positionedBy.vertically) {
      this.style.top = '0px';
    }

    if (!positionedBy.horizontally) {
      this.style.left = '0px';
    } // It will take in consideration margins and transforms


    var rect = this.getBoundingClientRect();

    var fitRect = this.__getNormalizedRect(this.fitInto);

    if (!positionedBy.vertically) {
      var top = fitRect.top - rect.top + (fitRect.height - rect.height) / 2;
      this.style.top = top + 'px';
    }

    if (!positionedBy.horizontally) {
      var left = fitRect.left - rect.left + (fitRect.width - rect.width) / 2;
      this.style.left = left + 'px';
    }
  },
  __getNormalizedRect: function __getNormalizedRect(target) {
    if (target === document.documentElement || target === window) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    }

    return target.getBoundingClientRect();
  },
  __getOffscreenArea: function __getOffscreenArea(position, size, fitRect) {
    var verticalCrop = Math.min(0, position.top) + Math.min(0, fitRect.bottom - (position.top + size.height));
    var horizontalCrop = Math.min(0, position.left) + Math.min(0, fitRect.right - (position.left + size.width));
    return Math.abs(verticalCrop) * size.width + Math.abs(horizontalCrop) * size.height;
  },
  __getPosition: function __getPosition(hAlign, vAlign, size, sizeNoMargins, positionRect, fitRect) {
    // All the possible configurations.
    // Ordered as top-left, top-right, bottom-left, bottom-right.
    var positions = [{
      verticalAlign: 'top',
      horizontalAlign: 'left',
      top: positionRect.top + this.verticalOffset,
      left: positionRect.left + this.horizontalOffset
    }, {
      verticalAlign: 'top',
      horizontalAlign: 'right',
      top: positionRect.top + this.verticalOffset,
      left: positionRect.right - size.width - this.horizontalOffset
    }, {
      verticalAlign: 'bottom',
      horizontalAlign: 'left',
      top: positionRect.bottom - size.height - this.verticalOffset,
      left: positionRect.left + this.horizontalOffset
    }, {
      verticalAlign: 'bottom',
      horizontalAlign: 'right',
      top: positionRect.bottom - size.height - this.verticalOffset,
      left: positionRect.right - size.width - this.horizontalOffset
    }];

    if (this.noOverlap) {
      // Duplicate.
      for (var i = 0, l = positions.length; i < l; i++) {
        var copy = {};

        for (var key in positions[i]) {
          copy[key] = positions[i][key];
        }

        positions.push(copy);
      } // Horizontal overlap only.


      positions[0].top = positions[1].top += positionRect.height;
      positions[2].top = positions[3].top -= positionRect.height; // Vertical overlap only.

      positions[4].left = positions[6].left += positionRect.width;
      positions[5].left = positions[7].left -= positionRect.width;
    } // Consider auto as null for coding convenience.


    vAlign = vAlign === 'auto' ? null : vAlign;
    hAlign = hAlign === 'auto' ? null : hAlign;

    if (!hAlign || hAlign === 'center') {
      positions.push({
        verticalAlign: 'top',
        horizontalAlign: 'center',
        top: positionRect.top + this.verticalOffset + (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 + positionRect.width / 2 + this.horizontalOffset
      });
      positions.push({
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        top: positionRect.bottom - size.height - this.verticalOffset - (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 + positionRect.width / 2 + this.horizontalOffset
      });
    }

    if (!vAlign || vAlign === 'middle') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'left',
        top: positionRect.top - sizeNoMargins.height / 2 + positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left + this.horizontalOffset + (this.noOverlap ? positionRect.width : 0)
      });
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'right',
        top: positionRect.top - sizeNoMargins.height / 2 + positionRect.height / 2 + this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset - (this.noOverlap ? positionRect.width : 0)
      });
    }

    if (vAlign === 'middle' && hAlign === 'center') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'center',
        top: positionRect.top - sizeNoMargins.height / 2 + positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left - sizeNoMargins.width / 2 + positionRect.width / 2 + this.horizontalOffset
      });
    }

    var position;

    for (var i = 0; i < positions.length; i++) {
      var candidate = positions[i];
      var vAlignOk = candidate.verticalAlign === vAlign;
      var hAlignOk = candidate.horizontalAlign === hAlign; // If both vAlign and hAlign are defined, return exact match.
      // For dynamicAlign and noOverlap we'll have more than one candidate, so
      // we'll have to check the offscreenArea to make the best choice.

      if (!this.dynamicAlign && !this.noOverlap && vAlignOk && hAlignOk) {
        position = candidate;
        break;
      } // Align is ok if alignment preferences are respected. If no preferences,
      // it is considered ok.


      var alignOk = (!vAlign || vAlignOk) && (!hAlign || hAlignOk); // Filter out elements that don't match the alignment (if defined).
      // With dynamicAlign, we need to consider all the positions to find the
      // one that minimizes the cropped area.

      if (!this.dynamicAlign && !alignOk) {
        continue;
      }

      candidate.offscreenArea = this.__getOffscreenArea(candidate, size, fitRect); // If not cropped and respects the align requirements, keep it.
      // This allows to prefer positions overlapping horizontally over the
      // ones overlapping vertically.

      if (candidate.offscreenArea === 0 && alignOk) {
        position = candidate;
        break;
      }

      position = position || candidate;
      var diff = candidate.offscreenArea - position.offscreenArea; // Check which crops less. If it crops equally, check if at least one
      // align setting is ok.

      if (diff < 0 || diff === 0 && (vAlignOk || hAlignOk)) {
        position = candidate;
      }
    }

    return position;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js ***!
  \*******************************************************************************/
/*! exports provided: IronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFocusablesHelper", function() { return IronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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


var p = Element.prototype;
var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
var IronFocusablesHelper = {
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
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function isFocusable(element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function isTabbable(element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function _normalizedTabIndex(element) {
    if (this.isFocusable(element)) {
      var tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
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
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = this._normalizedTabIndex(element);

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

    if (element.localName === 'content' || element.localName === 'slot') {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).getDistributedNodes();
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element.root || element).children;
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function _isVisible(element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    var style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function _sortByTabIndex(tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    var pivot = Math.ceil(len / 2);

    var left = this._sortByTabIndex(tabbables.slice(0, pivot));

    var right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function _mergeSortByTabIndex(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function _hasLowerTabOrder(a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    var ati = Math.max(a.tabIndex, 0);
    var bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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




/*
`iron-overlay-backdrop` is a backdrop used by `Polymer.IronOverlayBehavior`. It
should be a singleton.

### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
-------------------------------------------|------------------------|---------
`--iron-overlay-backdrop-background-color` | Backdrop background color | #000
`--iron-overlay-backdrop-opacity`          | Backdrop opacity | 0.6
`--iron-overlay-backdrop`                  | Mixin applied to `iron-overlay-backdrop`.                      | {}
`--iron-overlay-backdrop-opened`           | Mixin applied to `iron-overlay-backdrop` when it is displayed | {}
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject()),
  is: 'iron-overlay-backdrop',
  properties: {
    /**
     * Returns true if the backdrop is opened.
     */
    opened: {
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_openedChanged'
    }
  },
  listeners: {
    'transitionend': '_onTransitionend'
  },
  created: function created() {
    // Used to cancel previous requestAnimationFrame calls when opened changes.
    this.__openedRaf = null;
  },
  attached: function attached() {
    this.opened && this._openedChanged(this.opened);
  },

  /**
   * Appends the backdrop to document body if needed.
   */
  prepare: function prepare() {
    if (this.opened && !this.parentNode) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(document.body).appendChild(this);
    }
  },

  /**
   * Shows the backdrop.
   */
  open: function open() {
    this.opened = true;
  },

  /**
   * Hides the backdrop.
   */
  close: function close() {
    this.opened = false;
  },

  /**
   * Removes the backdrop from document body if needed.
   */
  complete: function complete() {
    if (!this.opened && this.parentNode === document.body) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this.parentNode).removeChild(this);
    }
  },
  _onTransitionend: function _onTransitionend(event) {
    if (event && event.target === this) {
      this.complete();
    }
  },

  /**
   * @param {boolean} opened
   * @private
   */
  _openedChanged: function _openedChanged(opened) {
    if (opened) {
      // Auto-attach.
      this.prepare();
    } else {
      // Animation might be disabled via the mixin or opacity custom property.
      // If it is disabled in other ways, it's up to the user to call complete.
      var cs = window.getComputedStyle(this);

      if (cs.transitionDuration === '0s' || cs.opacity == 0) {
        this.complete();
      }
    }

    if (!this.isAttached) {
      return;
    } // Always cancel previous requestAnimationFrame.


    if (this.__openedRaf) {
      window.cancelAnimationFrame(this.__openedRaf);
      this.__openedRaf = null;
    } // Force relayout to ensure proper transitions.


    this.scrollTop = this.scrollTop;
    this.__openedRaf = window.requestAnimationFrame(function () {
      this.__openedRaf = null;
      this.toggleClass('opened', this.opened);
    }.bind(this));
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js ***!
  \******************************************************************************/
/*! exports provided: IronOverlayBehaviorImpl, IronOverlayBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayBehaviorImpl", function() { return IronOverlayBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayBehavior", function() { return IronOverlayBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_fit_behavior_iron_fit_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-fit-behavior/iron-fit-behavior.js */ "./node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js");
/* harmony import */ var _iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/* harmony import */ var _iron_overlay_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iron-overlay-manager.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js");
/* harmony import */ var _iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iron-scroll-manager.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js");
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








/** @polymerBehavior */

var IronOverlayBehaviorImpl = {
  properties: {
    /**
     * True if the overlay is currently displayed.
     */
    opened: {
      observer: '_openedChanged',
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * True if the overlay was canceled when it was last closed.
     */
    canceled: {
      observer: '_canceledChanged',
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */
    withBackdrop: {
      observer: '_withBackdropChanged',
      type: Boolean
    },

    /**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable canceling the overlay with the ESC key.
     */
    noCancelOnEscKey: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable canceling the overlay by clicking outside it.
     */
    noCancelOnOutsideClick: {
      type: Boolean,
      value: false
    },

    /**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */
    closingReason: {
      // was a getter before, but needs to be a property so other
      // behaviors can override this.
      type: Object
    },

    /**
     * Set to true to enable restoring of focus when overlay is closed.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */
    allowClickThrough: {
      type: Boolean
    },

    /**
     * Set to true to keep overlay always on top.
     */
    alwaysOnTop: {
      type: Boolean
    },

    /**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */
    scrollAction: {
      type: String
    },

    /**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */
    _manager: {
      type: Object,
      value: _iron_overlay_manager_js__WEBPACK_IMPORTED_MODULE_6__["IronOverlayManager"]
    },

    /**
     * The node being focused.
     * @type {?Node}
     */
    _focusedChild: {
      type: Object
    }
  },
  listeners: {
    'iron-resize': '_onIronResize'
  },
  observers: ['__updateScrollObservers(isAttached, opened, scrollAction)'],

  /**
   * The backdrop element.
   * @return {!Element}
   */
  get backdropElement() {
    return this._manager.backdropElement;
  },

  /**
   * Returns the node to give focus to.
   * @return {!Node}
   */
  get _focusNode() {
    return this._focusedChild || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[autofocus]') || this;
  },

  /**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */
  get _focusableNodes() {
    return _iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["IronFocusablesHelper"].getTabbableNodes(this);
  },

  /**
   * @return {void}
   */
  ready: function ready() {
    // Used to skip calls to notifyResize and refit while the overlay is
    // animating.
    this.__isAnimating = false; // with-backdrop needs tabindex to be set in order to trap the focus.
    // If it is not set, IronOverlayBehavior will set it, and remove it if
    // with-backdrop = false.

    this.__shouldRemoveTabIndex = false; // Used for wrapping the focus on TAB / Shift+TAB.

    this.__firstFocusableNode = this.__lastFocusableNode = null; // Used by to keep track of the RAF callbacks.

    this.__rafs = {}; // Focused node before overlay gets opened. Can be restored on close.

    this.__restoreFocusNode = null; // Scroll info to be restored.

    this.__scrollTop = this.__scrollLeft = null;
    this.__onCaptureScroll = this.__onCaptureScroll.bind(this); // Root nodes hosting the overlay, used to listen for scroll events on them.

    this.__rootNodes = null;

    this._ensureSetup();
  },
  attached: function attached() {
    // Call _openedChanged here so that position can be computed correctly.
    if (this.opened) {
      this._openedChanged(this.opened);
    }

    this._observer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).observeNodes(this._onNodesChange);
  },
  detached: function detached() {
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).unobserveNodes(this._observer);
    this._observer = null;

    for (var cb in this.__rafs) {
      if (this.__rafs[cb] !== null) {
        cancelAnimationFrame(this.__rafs[cb]);
      }
    }

    this.__rafs = {};

    this._manager.removeOverlay(this); // We got detached while animating, ensure we show/hide the overlay
    // and fire iron-overlay-opened/closed event!


    if (this.__isAnimating) {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        // Restore the focus if necessary.
        this._applyFocus();

        this._finishRenderClosed();
      }
    }
  },

  /**
   * Toggle the opened state of the overlay.
   */
  toggle: function toggle() {
    this._setCanceled(false);

    this.opened = !this.opened;
  },

  /**
   * Open the overlay.
   */
  open: function open() {
    this._setCanceled(false);

    this.opened = true;
  },

  /**
   * Close the overlay.
   */
  close: function close() {
    this._setCanceled(false);

    this.opened = false;
  },

  /**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */
  cancel: function cancel(event) {
    var cancelEvent = this.fire('iron-overlay-canceled', event, {
      cancelable: true
    });

    if (cancelEvent.defaultPrevented) {
      return;
    }

    this._setCanceled(true);

    this.opened = false;
  },

  /**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */
  invalidateTabbables: function invalidateTabbables() {
    this.__firstFocusableNode = this.__lastFocusableNode = null;
  },
  _ensureSetup: function _ensureSetup() {
    if (this._overlaySetup) {
      return;
    }

    this._overlaySetup = true;
    this.style.outline = 'none';
    this.style.display = 'none';
  },

  /**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */
  _openedChanged: function _openedChanged(opened) {
    if (opened) {
      this.removeAttribute('aria-hidden');
    } else {
      this.setAttribute('aria-hidden', 'true');
    } // Defer any animation-related code on attached
    // (_openedChanged gets called again on attached).


    if (!this.isAttached) {
      return;
    }

    this.__isAnimating = true; // Deraf for non-blocking rendering.

    this.__deraf('__openedChanged', this.__openedChanged);
  },
  _canceledChanged: function _canceledChanged() {
    this.closingReason = this.closingReason || {};
    this.closingReason.canceled = this.canceled;
  },
  _withBackdropChanged: function _withBackdropChanged() {
    // If tabindex is already set, no need to override it.
    if (this.withBackdrop && !this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '-1');
      this.__shouldRemoveTabIndex = true;
    } else if (this.__shouldRemoveTabIndex) {
      this.removeAttribute('tabindex');
      this.__shouldRemoveTabIndex = false;
    }

    if (this.opened && this.isAttached) {
      this._manager.trackBackdrop();
    }
  },

  /**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */
  _prepareRenderOpened: function _prepareRenderOpened() {
    // Store focused node.
    this.__restoreFocusNode = this._manager.deepActiveElement; // Needed to calculate the size of the overlay so that transitions on its
    // size will have the correct starting points.

    this._preparePositioning();

    this.refit();

    this._finishPositioning(); // Safari will apply the focus to the autofocus element when displayed
    // for the first time, so we make sure to return the focus where it was.


    if (this.noAutoFocus && document.activeElement === this._focusNode) {
      this._focusNode.blur();

      this.__restoreFocusNode.focus();
    }
  },

  /**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */
  _renderOpened: function _renderOpened() {
    this._finishRenderOpened();
  },

  /**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */
  _renderClosed: function _renderClosed() {
    this._finishRenderClosed();
  },

  /**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */
  _finishRenderOpened: function _finishRenderOpened() {
    this.notifyResize();
    this.__isAnimating = false;
    this.fire('iron-overlay-opened');
  },

  /**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */
  _finishRenderClosed: function _finishRenderClosed() {
    // Hide the overlay.
    this.style.display = 'none'; // Reset z-index only at the end of the animation.

    this.style.zIndex = '';
    this.notifyResize();
    this.__isAnimating = false;
    this.fire('iron-overlay-closed', this.closingReason);
  },
  _preparePositioning: function _preparePositioning() {
    this.style.transition = this.style.webkitTransition = 'none';
    this.style.transform = this.style.webkitTransform = 'none';
    this.style.display = '';
  },
  _finishPositioning: function _finishPositioning() {
    // First, make it invisible & reactivate animations.
    this.style.display = 'none'; // Force reflow before re-enabling animations so that they don't start.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.

    this.scrollTop = this.scrollTop;
    this.style.transition = this.style.webkitTransition = '';
    this.style.transform = this.style.webkitTransform = ''; // Now that animations are enabled, make it visible again

    this.style.display = ''; // Force reflow, so that following animations are properly started.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.

    this.scrollTop = this.scrollTop;
  },

  /**
   * Applies focus according to the opened state.
   * @protected
   */
  _applyFocus: function _applyFocus() {
    if (this.opened) {
      if (!this.noAutoFocus) {
        this._focusNode.focus();
      }
    } else {
      // Restore focus.
      if (this.restoreFocusOnClose && this.__restoreFocusNode) {
        // If the activeElement is `<body>` or inside the overlay,
        // we are allowed to restore the focus. In all the other
        // cases focus might have been moved elsewhere by another
        // component or by an user interaction (e.g. click on a
        // button outside the overlay).
        var activeElement = this._manager.deepActiveElement;

        if (activeElement === document.body || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).deepContains(activeElement)) {
          this.__restoreFocusNode.focus();
        }
      }

      this.__restoreFocusNode = null;

      this._focusNode.blur();

      this._focusedChild = null;
    }
  },

  /**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureClick: function _onCaptureClick(event) {
    if (!this.noCancelOnOutsideClick) {
      this.cancel(event);
    }
  },

  /**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureFocus: function _onCaptureFocus(event) {
    if (!this.withBackdrop) {
      return;
    }

    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path;

    if (path.indexOf(this) === -1) {
      event.stopPropagation();

      this._applyFocus();
    } else {
      this._focusedChild = path[0];
    }
  },

  /**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureEsc: function _onCaptureEsc(event) {
    if (!this.noCancelOnEscKey) {
      this.cancel(event);
    }
  },

  /**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */
  _onCaptureTab: function _onCaptureTab(event) {
    if (!this.withBackdrop) {
      return;
    }

    this.__ensureFirstLastFocusables(); // TAB wraps from last to first focusable.
    // Shift + TAB wraps from first to last focusable.


    var shift = event.shiftKey;
    var nodeToCheck = shift ? this.__firstFocusableNode : this.__lastFocusableNode;
    var nodeToSet = shift ? this.__lastFocusableNode : this.__firstFocusableNode;
    var shouldWrap = false;

    if (nodeToCheck === nodeToSet) {
      // If nodeToCheck is the same as nodeToSet, it means we have an overlay
      // with 0 or 1 focusables; in either case we still need to trap the
      // focus within the overlay.
      shouldWrap = true;
    } else {
      // In dom=shadow, the manager will receive focus changes on the main
      // root but not the ones within other shadow roots, so we can't rely on
      // _focusedChild, but we should check the deepest active element.
      var focusedNode = this._manager.deepActiveElement; // If the active element is not the nodeToCheck but the overlay itself,
      // it means the focus is about to go outside the overlay, hence we
      // should prevent that (e.g. user opens the overlay and hit Shift+TAB).

      shouldWrap = focusedNode === nodeToCheck || focusedNode === this;
    }

    if (shouldWrap) {
      // When the overlay contains the last focusable element of the document
      // and it's already focused, pressing TAB would move the focus outside
      // the document (e.g. to the browser search bar). Similarly, when the
      // overlay contains the first focusable element of the document and it's
      // already focused, pressing Shift+TAB would move the focus outside the
      // document (e.g. to the browser search bar).
      // In both cases, we would not receive a focus event, but only a blur.
      // In order to achieve focus wrapping, we prevent this TAB event and
      // force the focus. This will also prevent the focus to temporarily move
      // outside the overlay, which might cause scrolling.
      event.preventDefault();
      this._focusedChild = nodeToSet;

      this._applyFocus();
    }
  },

  /**
   * Refits if the overlay is opened and not animating.
   * @protected
   */
  _onIronResize: function _onIronResize() {
    if (this.opened && !this.__isAnimating) {
      this.__deraf('refit', this.refit);
    }
  },

  /**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */
  _onNodesChange: function _onNodesChange() {
    if (this.opened && !this.__isAnimating) {
      // It might have added focusable nodes, so invalidate cached values.
      this.invalidateTabbables();
      this.notifyResize();
    }
  },

  /**
   * Updates the references to the first and last focusable nodes.
   * @private
   */
  __ensureFirstLastFocusables: function __ensureFirstLastFocusables() {
    var focusableNodes = this._focusableNodes;
    this.__firstFocusableNode = focusableNodes[0];
    this.__lastFocusableNode = focusableNodes[focusableNodes.length - 1];
  },

  /**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */
  __openedChanged: function __openedChanged() {
    if (this.opened) {
      // Make overlay visible, then add it to the manager.
      this._prepareRenderOpened();

      this._manager.addOverlay(this); // Move the focus to the child node with [autofocus].


      this._applyFocus();

      this._renderOpened();
    } else {
      // Remove overlay, then restore the focus before actually closing.
      this._manager.removeOverlay(this);

      this._applyFocus();

      this._renderClosed();
    }
  },

  /**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */
  __deraf: function __deraf(jobname, callback) {
    var rafs = this.__rafs;

    if (rafs[jobname] !== null) {
      cancelAnimationFrame(rafs[jobname]);
    }

    rafs[jobname] = requestAnimationFrame(function nextAnimationFrame() {
      rafs[jobname] = null;
      callback.call(this);
    }.bind(this));
  },

  /**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */
  __updateScrollObservers: function __updateScrollObservers(isAttached, opened, scrollAction) {
    if (!isAttached || !opened || !this.__isValidScrollAction(scrollAction)) {
      Object(_iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__["removeScrollLock"])(this);

      this.__removeScrollListeners();
    } else {
      if (scrollAction === 'lock') {
        this.__saveScrollPosition();

        Object(_iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__["pushScrollLock"])(this);
      }

      this.__addScrollListeners();
    }
  },

  /**
   * @private
   */
  __addScrollListeners: function __addScrollListeners() {
    if (!this.__rootNodes) {
      this.__rootNodes = []; // Listen for scroll events in all shadowRoots hosting this overlay only
      // when in native ShadowDOM.

      if (_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_4__["useShadow"]) {
        var node = this;

        while (node) {
          if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && node.host) {
            this.__rootNodes.push(node);
          }

          node = node.host || node.assignedSlot || node.parentNode;
        }
      }

      this.__rootNodes.push(document);
    }

    this.__rootNodes.forEach(function (el) {
      el.addEventListener('scroll', this.__onCaptureScroll, {
        capture: true,
        passive: true
      });
    }, this);
  },

  /**
   * @private
   */
  __removeScrollListeners: function __removeScrollListeners() {
    if (this.__rootNodes) {
      this.__rootNodes.forEach(function (el) {
        el.removeEventListener('scroll', this.__onCaptureScroll, {
          capture: true,
          passive: true
        });
      }, this);
    }

    if (!this.isAttached) {
      this.__rootNodes = null;
    }
  },

  /**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */
  __isValidScrollAction: function __isValidScrollAction(scrollAction) {
    return scrollAction === 'lock' || scrollAction === 'refit' || scrollAction === 'cancel';
  },

  /**
   * @private
   */
  __onCaptureScroll: function __onCaptureScroll(event) {
    if (this.__isAnimating) {
      return;
    } // Check if scroll outside the overlay.


    if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path.indexOf(this) >= 0) {
      return;
    }

    switch (this.scrollAction) {
      case 'lock':
        // NOTE: scrolling might happen if a scroll event is not cancellable, or
        // if user pressed keys that cause scrolling (they're not prevented in
        // order not to break a11y features like navigate with arrow keys).
        this.__restoreScrollPosition();

        break;

      case 'refit':
        this.__deraf('refit', this.refit);

        break;

      case 'cancel':
        this.cancel(event);
        break;
    }
  },

  /**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */
  __saveScrollPosition: function __saveScrollPosition() {
    if (document.scrollingElement) {
      this.__scrollTop = document.scrollingElement.scrollTop;
      this.__scrollLeft = document.scrollingElement.scrollLeft;
    } else {
      // Since we don't know if is the body or html, get max.
      this.__scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      this.__scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    }
  },

  /**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */
  __restoreScrollPosition: function __restoreScrollPosition() {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = this.__scrollTop;
      document.scrollingElement.scrollLeft = this.__scrollLeft;
    } else {
      // Since we don't know if is the body or html, set both.
      document.documentElement.scrollTop = document.body.scrollTop = this.__scrollTop;
      document.documentElement.scrollLeft = document.body.scrollLeft = this.__scrollLeft;
    }
  }
};
/**
  Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden
  or shown, and displays on top of other content. It includes an optional
  backdrop, and can be used to implement a variety of UI controls including
  dialogs and drop downs. Multiple overlays may be displayed at once.

  See the [demo source
  code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
  for an example.

  ### Closing and canceling

  An overlay may be hidden by closing or canceling. The difference between close
  and cancel is user intent. Closing generally implies that the user
  acknowledged the content on the overlay. By default, it will cancel whenever
  the user taps outside it or presses the escape key. This behavior is
  configurable with the `no-cancel-on-esc-key` and the
  `no-cancel-on-outside-click` properties. `close()` should be called explicitly
  by the implementer when the user interacts with a control in the overlay
  element. When the dialog is canceled, the overlay fires an
  'iron-overlay-canceled' event. Call `preventDefault` on this event to prevent
  the overlay from closing.

  ### Positioning

  By default the element is sized and positioned to fit and centered inside the
  window. You can position and size it manually using CSS. See
  `Polymer.IronFitBehavior`.

  ### Backdrop

  Set the `with-backdrop` attribute to display a backdrop behind the overlay.
  The backdrop is appended to `<body>` and is of type `<iron-overlay-backdrop>`.
  See its doc page for styling options.

  In addition, `with-backdrop` will wrap the focus within the content in the
  light DOM. Override the [`_focusableNodes`
  getter](#Polymer.IronOverlayBehavior:property-_focusableNodes) to achieve a
  different behavior.

  ### Limitations

  The element is styled to appear on top of other content by setting its
  `z-index` property. You must ensure no element has a stacking context with a
  higher `z-index` than its parent stacking context. You should place this
  element as a child of `<body>` whenever possible.

  @demo demo/index.html
  @polymerBehavior
 */

var IronOverlayBehavior = [_polymer_iron_fit_behavior_iron_fit_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFitBehavior"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], IronOverlayBehaviorImpl];
/**
 * Fired after the overlay opens.
 * @event iron-overlay-opened
 */

/**
 * Fired when the overlay is canceled, but before it is closed.
 * @event iron-overlay-canceled
 * @param {Event} event The closing of the overlay can be prevented
 * by calling `event.preventDefault()`. The `event.detail` is the original event
 * that originated the canceling (e.g. ESC keyboard event or click event outside
 * the overlay).
 */

/**
 * Fired after the overlay closes.
 * @event iron-overlay-closed
 * @param {Event} event The `event.detail` is the `closingReason` property
 * (contains `canceled`, whether the overlay was canceled).
 */

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js ***!
  \*****************************************************************************/
/*! exports provided: IronOverlayManagerClass, IronOverlayManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayManagerClass", function() { return IronOverlayManagerClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayManager", function() { return IronOverlayManager; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_overlay_backdrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-overlay-backdrop.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
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
 * @struct
 * @constructor
 * @private
 */

var IronOverlayManagerClass = function IronOverlayManagerClass() {
  /**
   * Used to keep track of the opened overlays.
   * @private {!Array<!Element>}
   */
  this._overlays = [];
  /**
   * iframes have a default z-index of 100,
   * so this default should be at least that.
   * @private {number}
   */

  this._minimumZ = 101;
  /**
   * Memoized backdrop element.
   * @private {Element|null}
   */

  this._backdropElement = null; // Enable document-wide tap recognizer.
  // NOTE: Use useCapture=true to avoid accidentally prevention of the closing
  // of an overlay via event.stopPropagation(). The only way to prevent
  // closing of an overlay should be through its APIs.
  // NOTE: enable tap on <html> to workaround Polymer/polymer#4459
  // Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
  // https://github.com/Microsoft/ChakraCore/issues/3863

  _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_4__["add"](document.documentElement, 'tap', function () {});
  document.addEventListener('tap', this._onCaptureClick.bind(this), true);
  document.addEventListener('focus', this._onCaptureFocus.bind(this), true);
  document.addEventListener('keydown', this._onCaptureKeyDown.bind(this), true);
};
IronOverlayManagerClass.prototype = {
  constructor: IronOverlayManagerClass,

  /**
   * The shared backdrop element.
   * @return {!Element} backdropElement
   */
  get backdropElement() {
    if (!this._backdropElement) {
      this._backdropElement = document.createElement('iron-overlay-backdrop');
    }

    return this._backdropElement;
  },

  /**
   * The deepest active element.
   * @return {!Element} activeElement the active element
   */
  get deepActiveElement() {
    var active = document.activeElement; // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes.
    // In these cases, default it to document.body.

    if (!active || active instanceof Element === false) {
      active = document.body;
    }

    while (active.root && Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(active.root).activeElement) {
      active = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(active.root).activeElement;
    }

    return active;
  },

  /**
   * Brings the overlay at the specified index to the front.
   * @param {number} i
   * @private
   */
  _bringOverlayAtIndexToFront: function _bringOverlayAtIndexToFront(i) {
    var overlay = this._overlays[i];

    if (!overlay) {
      return;
    }

    var lastI = this._overlays.length - 1;
    var currentOverlay = this._overlays[lastI]; // Ensure always-on-top overlay stays on top.

    if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      lastI--;
    } // If already the top element, return.


    if (i >= lastI) {
      return;
    } // Update z-index to be on top.


    var minimumZ = Math.max(this.currentOverlayZ(), this._minimumZ);

    if (this._getZ(overlay) <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    } // Shift other overlays behind the new on top.


    while (i < lastI) {
      this._overlays[i] = this._overlays[i + 1];
      i++;
    }

    this._overlays[lastI] = overlay;
  },

  /**
   * Adds the overlay and updates its z-index if it's opened, or removes it if
   * it's closed. Also updates the backdrop z-index.
   * @param {!Element} overlay
   */
  addOrRemoveOverlay: function addOrRemoveOverlay(overlay) {
    if (overlay.opened) {
      this.addOverlay(overlay);
    } else {
      this.removeOverlay(overlay);
    }
  },

  /**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   * @param {!Element} overlay
   */
  addOverlay: function addOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);

    if (i >= 0) {
      this._bringOverlayAtIndexToFront(i);

      this.trackBackdrop();
      return;
    }

    var insertionIndex = this._overlays.length;
    var currentOverlay = this._overlays[insertionIndex - 1];
    var minimumZ = Math.max(this._getZ(currentOverlay), this._minimumZ);

    var newZ = this._getZ(overlay); // Ensure always-on-top overlay stays on top.


    if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      // This bumps the z-index of +2.
      this._applyOverlayZ(currentOverlay, minimumZ);

      insertionIndex--; // Update minimumZ to match previous overlay's z-index.

      var previousOverlay = this._overlays[insertionIndex - 1];
      minimumZ = Math.max(this._getZ(previousOverlay), this._minimumZ);
    } // Update z-index and insert overlay.


    if (newZ <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }

    this._overlays.splice(insertionIndex, 0, overlay);

    this.trackBackdrop();
  },

  /**
   * @param {!Element} overlay
   */
  removeOverlay: function removeOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);

    if (i === -1) {
      return;
    }

    this._overlays.splice(i, 1);

    this.trackBackdrop();
  },

  /**
   * Returns the current overlay.
   * @return {!Element|undefined}
   */
  currentOverlay: function currentOverlay() {
    var i = this._overlays.length - 1;
    return this._overlays[i];
  },

  /**
   * Returns the current overlay z-index.
   * @return {number}
   */
  currentOverlayZ: function currentOverlayZ() {
    return this._getZ(this.currentOverlay());
  },

  /**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   * @param {number} minimumZ
   */
  ensureMinimumZ: function ensureMinimumZ(minimumZ) {
    this._minimumZ = Math.max(this._minimumZ, minimumZ);
  },
  focusOverlay: function focusOverlay() {
    var current =
    /** @type {?} */
    this.currentOverlay();

    if (current) {
      current._applyFocus();
    }
  },

  /**
   * Updates the backdrop z-index.
   */
  trackBackdrop: function trackBackdrop() {
    var overlay = this._overlayWithBackdrop(); // Avoid creating the backdrop if there is no overlay with backdrop.


    if (!overlay && !this._backdropElement) {
      return;
    }

    this.backdropElement.style.zIndex = this._getZ(overlay) - 1;
    this.backdropElement.opened = !!overlay; // Property observers are not fired until element is attached
    // in Polymer 2.x, so we ensure element is attached if needed.
    // https://github.com/Polymer/polymer/issues/4526

    this.backdropElement.prepare();
  },

  /**
   * @return {!Array<!Element>}
   */
  getBackdrops: function getBackdrops() {
    var backdrops = [];

    for (var i = 0; i < this._overlays.length; i++) {
      if (this._overlays[i].withBackdrop) {
        backdrops.push(this._overlays[i]);
      }
    }

    return backdrops;
  },

  /**
   * Returns the z-index for the backdrop.
   * @return {number}
   */
  backdropZ: function backdropZ() {
    return this._getZ(this._overlayWithBackdrop()) - 1;
  },

  /**
   * Returns the top opened overlay that has a backdrop.
   * @return {!Element|undefined}
   * @private
   */
  _overlayWithBackdrop: function _overlayWithBackdrop() {
    for (var i = this._overlays.length - 1; i >= 0; i--) {
      if (this._overlays[i].withBackdrop) {
        return this._overlays[i];
      }
    }
  },

  /**
   * Calculates the minimum z-index for the overlay.
   * @param {Element=} overlay
   * @private
   */
  _getZ: function _getZ(overlay) {
    var z = this._minimumZ;

    if (overlay) {
      var z1 = Number(overlay.style.zIndex || window.getComputedStyle(overlay).zIndex); // Check if is a number
      // Number.isNaN not supported in IE 10+

      if (z1 === z1) {
        z = z1;
      }
    }

    return z;
  },

  /**
   * @param {!Element} element
   * @param {number|string} z
   * @private
   */
  _setZ: function _setZ(element, z) {
    element.style.zIndex = z;
  },

  /**
   * @param {!Element} overlay
   * @param {number} aboveZ
   * @private
   */
  _applyOverlayZ: function _applyOverlayZ(overlay, aboveZ) {
    this._setZ(overlay, aboveZ + 2);
  },

  /**
   * Returns the deepest overlay in the path.
   * @param {!Array<!Element>=} path
   * @return {!Element|undefined}
   * @suppress {missingProperties}
   * @private
   */
  _overlayInPath: function _overlayInPath(path) {
    path = path || [];

    for (var i = 0; i < path.length; i++) {
      if (path[i]._manager === this) {
        return path[i];
      }
    }
  },

  /**
   * Ensures the click event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureClick: function _onCaptureClick(event) {
    var i = this._overlays.length - 1;
    if (i === -1) return;
    var path =
    /** @type {!Array<!EventTarget>} */
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path;
    var overlay; // Check if clicked outside of overlay.

    while ((overlay =
    /** @type {?} */
    this._overlays[i]) && this._overlayInPath(path) !== overlay) {
      overlay._onCaptureClick(event);

      if (overlay.allowClickThrough) {
        i--;
      } else {
        break;
      }
    }
  },

  /**
   * Ensures the focus event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureFocus: function _onCaptureFocus(event) {
    var overlay =
    /** @type {?} */
    this.currentOverlay();

    if (overlay) {
      overlay._onCaptureFocus(event);
    }
  },

  /**
   * Ensures TAB and ESC keyboard events are delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureKeyDown: function _onCaptureKeyDown(event) {
    var overlay =
    /** @type {?} */
    this.currentOverlay();

    if (overlay) {
      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(event, 'esc')) {
        overlay._onCaptureEsc(event);
      } else if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(event, 'tab')) {
        overlay._onCaptureTab(event);
      }
    }
  },

  /**
   * Returns if the overlay1 should be behind overlay2.
   * @param {!Element} overlay1
   * @param {!Element} overlay2
   * @return {boolean}
   * @suppress {missingProperties}
   * @private
   */
  _shouldBeBehindOverlay: function _shouldBeBehindOverlay(overlay1, overlay2) {
    return !overlay1.alwaysOnTop && overlay2.alwaysOnTop;
  }
};
var IronOverlayManager = new IronOverlayManagerClass();

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js ***!
  \****************************************************************************/
/*! exports provided: currentLockingElement, elementIsScrollLocked, pushScrollLock, removeScrollLock, _lockingElements, _lockedElementCache, _unlockedElementCache, _hasCachedLockedElement, _hasCachedUnlockedElement, _composedTreeContains, _scrollInteractionHandler, _boundScrollHandler, _lockScrollInteractions, _unlockScrollInteractions, _shouldPreventScrolling, _getScrollableNodes, _getScrollingNode, _getScrollInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLockingElement", function() { return currentLockingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementIsScrollLocked", function() { return elementIsScrollLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushScrollLock", function() { return pushScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollLock", function() { return removeScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockingElements", function() { return _lockingElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockedElementCache", function() { return _lockedElementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unlockedElementCache", function() { return _unlockedElementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_hasCachedLockedElement", function() { return _hasCachedLockedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_hasCachedUnlockedElement", function() { return _hasCachedUnlockedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_composedTreeContains", function() { return _composedTreeContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollInteractionHandler", function() { return _scrollInteractionHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_boundScrollHandler", function() { return _boundScrollHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockScrollInteractions", function() { return _lockScrollInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unlockScrollInteractions", function() { return _unlockScrollInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_shouldPreventScrolling", function() { return _shouldPreventScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollableNodes", function() { return _getScrollableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollingNode", function() { return _getScrollingNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollInfo", function() { return _getScrollInfo; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * Used to calculate the scroll direction during touch events.
 * @type {!Object}
 */

var lastTouchPosition = {
  pageX: 0,
  pageY: 0
};
/**
 * Used to avoid computing event.path and filter scrollable nodes (better perf).
 * @type {?EventTarget}
 */

var lastRootTarget = null;
/**
 * @type {!Array<!Node>}
 */

var lastScrollableNodes = [];
/**
 * @type {!Array<string>}
 */

var scrollEvents = [// Modern `wheel` event for mouse wheel scrolling:
'wheel', // Older, non-standard `mousewheel` event for some FF:
'mousewheel', // IE:
'DOMMouseScroll', // Touch enabled devices
'touchstart', 'touchmove']; // must be defined for modulizer

var _boundScrollHandler;

var currentLockingElement;
/**
 * The IronScrollManager is intended to provide a central source
 * of authority and control over which elements in a document are currently
 * allowed to scroll.
 *
 */

"TODO(modulizer): A namespace named Polymer.IronScrollManager was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
/**
 * The current element that defines the DOM boundaries of the
 * scroll lock. This is always the most recently locking element.
 *
 * @return {!Node|undefined}
 */


/**
 * Returns true if the provided element is "scroll locked", which is to
 * say that it cannot be scrolled via pointer or keyboard interactions.
 *
 * @param {!HTMLElement} element An HTML element instance which may or may
 * not be scroll locked.
 */

function elementIsScrollLocked(element) {
  var lockingElement = currentLockingElement;

  if (lockingElement === undefined) {
    return false;
  }

  var scrollLocked;

  if (_hasCachedLockedElement(element)) {
    return true;
  }

  if (_hasCachedUnlockedElement(element)) {
    return false;
  }

  scrollLocked = !!lockingElement && lockingElement !== element && !_composedTreeContains(lockingElement, element);

  if (scrollLocked) {
    _lockedElementCache.push(element);
  } else {
    _unlockedElementCache.push(element);
  }

  return scrollLocked;
}
/**
 * Push an element onto the current scroll lock stack. The most recently
 * pushed element and its children will be considered scrollable. All
 * other elements will not be scrollable.
 *
 * Scroll locking is implemented as a stack so that cases such as
 * dropdowns within dropdowns are handled well.
 *
 * @param {!HTMLElement} element The element that should lock scroll.
 */

function pushScrollLock(element) {
  // Prevent pushing the same element twice
  if (_lockingElements.indexOf(element) >= 0) {
    return;
  }

  if (_lockingElements.length === 0) {
    _lockScrollInteractions();
  }

  _lockingElements.push(element);

  currentLockingElement = _lockingElements[_lockingElements.length - 1];
  _lockedElementCache = [];
  _unlockedElementCache = [];
}
/**
 * Remove an element from the scroll lock stack. The element being
 * removed does not need to be the most recently pushed element. However,
 * the scroll lock constraints only change when the most recently pushed
 * element is removed.
 *
 * @param {!HTMLElement} element The element to remove from the scroll
 * lock stack.
 */

function removeScrollLock(element) {
  var index = _lockingElements.indexOf(element);

  if (index === -1) {
    return;
  }

  _lockingElements.splice(index, 1);

  currentLockingElement = _lockingElements[_lockingElements.length - 1];
  _lockedElementCache = [];
  _unlockedElementCache = [];

  if (_lockingElements.length === 0) {
    _unlockScrollInteractions();
  }
}
var _lockingElements = [];
var _lockedElementCache = null;
var _unlockedElementCache = null;
function _hasCachedLockedElement(element) {
  return _lockedElementCache.indexOf(element) > -1;
}
function _hasCachedUnlockedElement(element) {
  return _unlockedElementCache.indexOf(element) > -1;
}
function _composedTreeContains(element, child) {
  // NOTE(cdata): This method iterates over content elements and their
  // corresponding distributed nodes to implement a contains-like method
  // that pierces through the composed tree of the ShadowDOM. Results of
  // this operation are cached (elsewhere) on a per-scroll-lock basis, to
  // guard against potentially expensive lookups happening repeatedly as
  // a user scrolls / touchmoves.
  var contentElements;
  var distributedNodes;
  var contentIndex;
  var nodeIndex;

  if (element.contains(child)) {
    return true;
  }

  contentElements = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).querySelectorAll('content,slot');

  for (contentIndex = 0; contentIndex < contentElements.length; ++contentIndex) {
    distributedNodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(contentElements[contentIndex]).getDistributedNodes();

    for (nodeIndex = 0; nodeIndex < distributedNodes.length; ++nodeIndex) {
      // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
      if (distributedNodes[nodeIndex].nodeType !== Node.ELEMENT_NODE) continue;

      if (_composedTreeContains(distributedNodes[nodeIndex], child)) {
        return true;
      }
    }
  }

  return false;
}
function _scrollInteractionHandler(event) {
  // Avoid canceling an event with cancelable=false, e.g. scrolling is in
  // progress and cannot be interrupted.
  if (event.cancelable && _shouldPreventScrolling(event)) {
    event.preventDefault();
  } // If event has targetTouches (touch event), update last touch position.


  if (event.targetTouches) {
    var touch = event.targetTouches[0];
    lastTouchPosition.pageX = touch.pageX;
    lastTouchPosition.pageY = touch.pageY;
  }
}
/**
 * @private
 */


function _lockScrollInteractions() {
  _boundScrollHandler = _boundScrollHandler || _scrollInteractionHandler.bind(undefined);

  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.addEventListener(scrollEvents[i], _boundScrollHandler, {
      capture: true,
      passive: false
    });
  }
}
function _unlockScrollInteractions() {
  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.removeEventListener(scrollEvents[i], _boundScrollHandler, {
      capture: true,
      passive: false
    });
  }
}
/**
 * Returns true if the event causes scroll outside the current locking
 * element, e.g. pointer/keyboard interactions, or scroll "leaking"
 * outside the locking element when it is already at its scroll boundaries.
 * @param {!Event} event
 * @return {boolean}
 * @private
 */

function _shouldPreventScrolling(event) {
  // Update if root target changed. For touch events, ensure we don't
  // update during touchmove.
  var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).rootTarget;

  if (event.type !== 'touchmove' && lastRootTarget !== target) {
    lastRootTarget = target;
    lastScrollableNodes = _getScrollableNodes(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).path);
  } // Prevent event if no scrollable nodes.


  if (!lastScrollableNodes.length) {
    return true;
  } // Don't prevent touchstart event inside the locking element when it has
  // scrollable nodes.


  if (event.type === 'touchstart') {
    return false;
  } // Get deltaX/Y.


  var info = _getScrollInfo(event); // Prevent if there is no child that can scroll.


  return !_getScrollingNode(lastScrollableNodes, info.deltaX, info.deltaY);
}
/**
 * Returns an array of scrollable nodes up to the current locking element,
 * which is included too if scrollable.
 * @param {!Array<!Node>} nodes
 * @return {!Array<!Node>} scrollables
 * @private
 */

function _getScrollableNodes(nodes) {
  var scrollables = [];
  var lockingIndex = nodes.indexOf(currentLockingElement); // Loop from root target to locking element (included).

  for (var i = 0; i <= lockingIndex; i++) {
    // Skip non-Element nodes.
    if (nodes[i].nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    var node =
    /** @type {!Element} */
    nodes[i]; // Check inline style before checking computed style.

    var style = node.style;

    if (style.overflow !== 'scroll' && style.overflow !== 'auto') {
      style = window.getComputedStyle(node);
    }

    if (style.overflow === 'scroll' || style.overflow === 'auto') {
      scrollables.push(node);
    }
  }

  return scrollables;
}
/**
 * Returns the node that is scrolling. If there is no scrolling,
 * returns undefined.
 * @param {!Array<!Node>} nodes
 * @param {number} deltaX Scroll delta on the x-axis
 * @param {number} deltaY Scroll delta on the y-axis
 * @return {!Node|undefined}
 * @private
 */

function _getScrollingNode(nodes, deltaX, deltaY) {
  // No scroll.
  if (!deltaX && !deltaY) {
    return;
  } // Check only one axis according to where there is more scroll.
  // Prefer vertical to horizontal.


  var verticalScroll = Math.abs(deltaY) >= Math.abs(deltaX);

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var canScroll = false;

    if (verticalScroll) {
      // delta < 0 is scroll up, delta > 0 is scroll down.
      canScroll = deltaY < 0 ? node.scrollTop > 0 : node.scrollTop < node.scrollHeight - node.clientHeight;
    } else {
      // delta < 0 is scroll left, delta > 0 is scroll right.
      canScroll = deltaX < 0 ? node.scrollLeft > 0 : node.scrollLeft < node.scrollWidth - node.clientWidth;
    }

    if (canScroll) {
      return node;
    }
  }
}
/**
 * Returns scroll `deltaX` and `deltaY`.
 * @param {!Event} event The scroll event
 * @return {{deltaX: number, deltaY: number}} Object containing the
 * x-axis scroll delta (positive: scroll right, negative: scroll left,
 * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
 * negative: scroll up, 0: no scroll).
 * @private
 */

function _getScrollInfo(event) {
  var info = {
    deltaX: event.deltaX,
    deltaY: event.deltaY
  }; // Already available.

  if ('deltaX' in event) {} // do nothing, values are already good.
  // Safari has scroll info in `wheelDeltaX/Y`.
  else if ('wheelDeltaX' in event && 'wheelDeltaY' in event) {
      info.deltaX = -event.wheelDeltaX;
      info.deltaY = -event.wheelDeltaY;
    } // IE10 has only vertical scroll info in `wheelDelta`.
    else if ('wheelDelta' in event) {
        info.deltaX = 0;
        info.deltaY = -event.wheelDelta;
      } // Firefox has scroll info in `detail` and `axis`.
      else if ('axis' in event) {
          info.deltaX = event.axis === 1 ? event.detail : 0;
          info.deltaY = event.axis === 2 ? event.detail : 0;
        } // On mobile devices, calculate scroll direction.
        else if (event.targetTouches) {
            var touch = event.targetTouches[0]; // Touch moves from right to left => scrolling goes right.

            info.deltaX = lastTouchPosition.pageX - touch.pageX; // Touch moves from down to up => scrolling goes down.

            info.deltaY = lastTouchPosition.pageY - touch.pageY;
          }

  return info;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hcmVhLXJlZ2lzdHJ5LWRldGFpbC1kaWFsb2d+Y2xvdWQtd2ViaG9vay1tYW5hZ2UtZGlhbG9nfmNvbmZpZy1lbnRyeS1zeXN0ZW0tb3B0aW9uc35kZXZpY2Utcn43ODBmYzdmYy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWZpdC1iZWhhdmlvci9pcm9uLWZpdC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmFja2Ryb3AuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tc2Nyb2xsLW1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG5gUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgIGZpdHMgYW4gZWxlbWVudCBpbiBhbm90aGVyIGVsZW1lbnQgdXNpbmcgYG1heC1oZWlnaHRgXG5hbmQgYG1heC13aWR0aGAsIGFuZCBvcHRpb25hbGx5IGNlbnRlcnMgaXQgaW4gdGhlIHdpbmRvdyBvciBhbm90aGVyIGVsZW1lbnQuXG5cblRoZSBlbGVtZW50IHdpbGwgb25seSBiZSBzaXplZCBhbmQvb3IgcG9zaXRpb25lZCBpZiBpdCBoYXMgbm90IGFscmVhZHkgYmVlblxuc2l6ZWQgYW5kL29yIHBvc2l0aW9uZWQgYnkgQ1NTLlxuXG5DU1MgcHJvcGVydGllcyAgICAgICAgICAgIHwgQWN0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gcG9zaXRpb25gIHNldCAgICAgICAgICAgIHwgRWxlbWVudCBpcyBub3QgY2VudGVyZWQgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHlcbmB0b3BgIG9yIGBib3R0b21gIHNldCAgICAgfCBFbGVtZW50IGlzIG5vdCB2ZXJ0aWNhbGx5IGNlbnRlcmVkXG5gbGVmdGAgb3IgYHJpZ2h0YCBzZXQgICAgIHwgRWxlbWVudCBpcyBub3QgaG9yaXpvbnRhbGx5IGNlbnRlcmVkXG5gbWF4LWhlaWdodGAgc2V0ICAgICAgICAgIHwgRWxlbWVudCByZXNwZWN0cyBgbWF4LWhlaWdodGBcbmBtYXgtd2lkdGhgIHNldCAgICAgICAgICAgfCBFbGVtZW50IHJlc3BlY3RzIGBtYXgtd2lkdGhgXG5cbmBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAgY2FuIHBvc2l0aW9uIGFuIGVsZW1lbnQgaW50byBhbm90aGVyIGVsZW1lbnQgdXNpbmdcbmB2ZXJ0aWNhbEFsaWduYCBhbmQgYGhvcml6b250YWxBbGlnbmAuIFRoaXMgd2lsbCBvdmVycmlkZSB0aGUgZWxlbWVudCdzIGNzc1xucG9zaXRpb24uXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aXJvbi1maXQtaW1wbCB2ZXJ0aWNhbC1hbGlnbj1cInRvcFwiIGhvcml6b250YWwtYWxpZ249XCJhdXRvXCI+XG4gICAgICAgIFBvc2l0aW9uZWQgaW50byB0aGUgY29udGFpbmVyXG4gICAgICA8L2lyb24tZml0LWltcGw+XG4gICAgPC9kaXY+XG5cblVzZSBgbm9PdmVybGFwYCB0byBwb3NpdGlvbiB0aGUgZWxlbWVudCBhcm91bmQgYW5vdGhlciBlbGVtZW50IHdpdGhvdXRcbm92ZXJsYXBwaW5nIGl0LlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGlyb24tZml0LWltcGwgbm8tb3ZlcmxhcCB2ZXJ0aWNhbC1hbGlnbj1cImF1dG9cIiBob3Jpem9udGFsLWFsaWduPVwiYXV0b1wiPlxuICAgICAgICBQb3NpdGlvbmVkIGFyb3VuZCB0aGUgY29udGFpbmVyXG4gICAgICA8L2lyb24tZml0LWltcGw+XG4gICAgPC9kaXY+XG5cblVzZSBgaG9yaXpvbnRhbE9mZnNldCwgdmVydGljYWxPZmZzZXRgIHRvIG9mZnNldCB0aGUgZWxlbWVudCBmcm9tIGl0c1xuYHBvc2l0aW9uVGFyZ2V0YDsgYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYCB3aWxsIGNvbGxhcHNlIHRoZXNlIGluIG9yZGVyIHRvXG5rZWVwIHRoZSBlbGVtZW50IHdpdGhpbiBgZml0SW50b2AgYm91bmRhcmllcywgd2hpbGUgcHJlc2VydmluZyB0aGUgZWxlbWVudCdzXG5DU1MgbWFyZ2luIHZhbHVlcy5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpcm9uLWZpdC1pbXBsIHZlcnRpY2FsLWFsaWduPVwidG9wXCIgdmVydGljYWwtb2Zmc2V0PVwiMjBcIj5cbiAgICAgICAgV2l0aCB2ZXJ0aWNhbCBvZmZzZXRcbiAgICAgIDwvaXJvbi1maXQtaW1wbD5cbiAgICA8L2Rpdj5cblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AcG9seW1lckJlaGF2aW9yXG4qL1xuZXhwb3J0IGNvbnN0IElyb25GaXRCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0aGF0IHdpbGwgcmVjZWl2ZSBhIGBtYXgtaGVpZ2h0YC9gd2lkdGhgLiBCeSBkZWZhdWx0IGl0IGlzXG4gICAgICogdGhlIHNhbWUgYXMgYHRoaXNgLCBidXQgaXQgY2FuIGJlIHNldCB0byBhIGNoaWxkIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsLFxuICAgICAqIGZvciBleGFtcGxlLCBmb3IgaW1wbGVtZW50aW5nIGEgc2Nyb2xsaW5nIHJlZ2lvbiBpbnNpZGUgdGhlIGVsZW1lbnQuXG4gICAgICogQHR5cGUgeyFFbGVtZW50fVxuICAgICAqL1xuICAgIHNpemluZ1RhcmdldDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdG8gZml0IGB0aGlzYCBpbnRvLlxuICAgICAqL1xuICAgIGZpdEludG86IHt0eXBlOiBPYmplY3QsIHZhbHVlOiB3aW5kb3d9LFxuXG4gICAgLyoqXG4gICAgICogV2lsbCBwb3NpdGlvbiB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHBvc2l0aW9uVGFyZ2V0IHdpdGhvdXQgb3ZlcmxhcHBpbmdcbiAgICAgKiBpdC5cbiAgICAgKi9cbiAgICBub092ZXJsYXA6IHt0eXBlOiBCb29sZWFufSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcG9zaXRpb24gdGhlIGVsZW1lbnQuIElmIG5vdCBzZXQsIGl0XG4gICAgICogd2lsbCBkZWZhdWx0IHRvIHRoZSBwYXJlbnQgbm9kZS5cbiAgICAgKiBAdHlwZSB7IUVsZW1lbnR9XG4gICAgICovXG4gICAgcG9zaXRpb25UYXJnZXQ6IHt0eXBlOiBFbGVtZW50fSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBlbGVtZW50IGhvcml6b250YWxseVxuICAgICAqIHJlbGF0aXZlIHRvIHRoZSBgcG9zaXRpb25UYXJnZXRgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFwibGVmdFwiLCBcInJpZ2h0XCIsXG4gICAgICogXCJjZW50ZXJcIiwgXCJhdXRvXCIuXG4gICAgICovXG4gICAgaG9yaXpvbnRhbEFsaWduOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBlbGVtZW50IHZlcnRpY2FsbHlcbiAgICAgKiByZWxhdGl2ZSB0byB0aGUgYHBvc2l0aW9uVGFyZ2V0YC4gUG9zc2libGUgdmFsdWVzIGFyZSBcInRvcFwiLCBcImJvdHRvbVwiLFxuICAgICAqIFwibWlkZGxlXCIsIFwiYXV0b1wiLlxuICAgICAqL1xuICAgIHZlcnRpY2FsQWxpZ246IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgaXQgd2lsbCB1c2UgYGhvcml6b250YWxBbGlnbmAgYW5kIGB2ZXJ0aWNhbEFsaWduYCB2YWx1ZXMgYXNcbiAgICAgKiBwcmVmZXJyZWQgYWxpZ25tZW50IGFuZCBpZiB0aGVyZSdzIG5vdCBlbm91Z2ggc3BhY2UsIGl0IHdpbGwgcGljayB0aGVcbiAgICAgKiB2YWx1ZXMgd2hpY2ggbWluaW1pemUgdGhlIGNyb3BwaW5nLlxuICAgICAqL1xuICAgIGR5bmFtaWNBbGlnbjoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqXG4gICAgICogQSBwaXhlbCB2YWx1ZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvc2l0aW9uIGNhbGN1bGF0ZWQgZm9yIHRoZVxuICAgICAqIGdpdmVuIGBob3Jpem9udGFsQWxpZ25gLCBpbiB0aGUgZGlyZWN0aW9uIG9mIGFsaWdubWVudC4gWW91IGNhbiB0aGlua1xuICAgICAqIG9mIGl0IGFzIGluY3JlYXNpbmcgb3IgZGVjcmVhc2luZyB0aGUgZGlzdGFuY2UgdG8gdGhlIHNpZGUgb2YgdGhlXG4gICAgICogc2NyZWVuIGdpdmVuIGJ5IGBob3Jpem9udGFsQWxpZ25gLlxuICAgICAqXG4gICAgICogSWYgYGhvcml6b250YWxBbGlnbmAgaXMgXCJsZWZ0XCIgb3IgXCJjZW50ZXJcIiwgdGhpcyBvZmZzZXQgd2lsbCBpbmNyZWFzZSBvclxuICAgICAqIGRlY3JlYXNlIHRoZSBkaXN0YW5jZSB0byB0aGUgbGVmdCBzaWRlIG9mIHRoZSBzY3JlZW46IGEgbmVnYXRpdmUgb2Zmc2V0XG4gICAgICogd2lsbCBtb3ZlIHRoZSBkcm9wZG93biB0byB0aGUgbGVmdDsgYSBwb3NpdGl2ZSBvbmUsIHRvIHRoZSByaWdodC5cbiAgICAgKlxuICAgICAqIENvbnZlcnNlbHkgaWYgYGhvcml6b250YWxBbGlnbmAgaXMgXCJyaWdodFwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlXG4gICAgICogb3IgZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSByaWdodCBzaWRlIG9mIHRoZSBzY3JlZW46IGEgbmVnYXRpdmVcbiAgICAgKiBvZmZzZXQgd2lsbCBtb3ZlIHRoZSBkcm9wZG93biB0byB0aGUgcmlnaHQ7IGEgcG9zaXRpdmUgb25lLCB0byB0aGUgbGVmdC5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsT2Zmc2V0OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMCwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIEEgcGl4ZWwgdmFsdWUgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBwb3NpdGlvbiBjYWxjdWxhdGVkIGZvciB0aGVcbiAgICAgKiBnaXZlbiBgdmVydGljYWxBbGlnbmAsIGluIHRoZSBkaXJlY3Rpb24gb2YgYWxpZ25tZW50LiBZb3UgY2FuIHRoaW5rXG4gICAgICogb2YgaXQgYXMgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nIHRoZSBkaXN0YW5jZSB0byB0aGUgc2lkZSBvZiB0aGVcbiAgICAgKiBzY3JlZW4gZ2l2ZW4gYnkgYHZlcnRpY2FsQWxpZ25gLlxuICAgICAqXG4gICAgICogSWYgYHZlcnRpY2FsQWxpZ25gIGlzIFwidG9wXCIgb3IgXCJtaWRkbGVcIiwgdGhpcyBvZmZzZXQgd2lsbCBpbmNyZWFzZSBvclxuICAgICAqIGRlY3JlYXNlIHRoZSBkaXN0YW5jZSB0byB0aGUgdG9wIHNpZGUgb2YgdGhlIHNjcmVlbjogYSBuZWdhdGl2ZSBvZmZzZXRcbiAgICAgKiB3aWxsIG1vdmUgdGhlIGRyb3Bkb3duIHVwd2FyZHM7IGEgcG9zaXRpdmUgb25lLCBkb3dud2FyZHMuXG4gICAgICpcbiAgICAgKiBDb252ZXJzZWx5IGlmIGB2ZXJ0aWNhbEFsaWduYCBpcyBcImJvdHRvbVwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlXG4gICAgICogb3IgZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSBib3R0b20gc2lkZSBvZiB0aGUgc2NyZWVuOiBhIG5lZ2F0aXZlXG4gICAgICogb2Zmc2V0IHdpbGwgbW92ZSB0aGUgZHJvcGRvd24gZG93bndhcmRzOyBhIHBvc2l0aXZlIG9uZSwgdXB3YXJkcy5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE9mZnNldDoge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhdXRvLWZpdCBvbiBhdHRhY2guXG4gICAgICovXG4gICAgYXV0b0ZpdE9uQXR0YWNoOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKiBAdHlwZSB7P09iamVjdH0gKi9cbiAgICBfZml0SW5mbzoge3R5cGU6IE9iamVjdH1cbiAgfSxcblxuICBnZXQgX2ZpdFdpZHRoKCkge1xuICAgIHZhciBmaXRXaWR0aDtcbiAgICBpZiAodGhpcy5maXRJbnRvID09PSB3aW5kb3cpIHtcbiAgICAgIGZpdFdpZHRoID0gdGhpcy5maXRJbnRvLmlubmVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpdFdpZHRoID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gZml0V2lkdGg7XG4gIH0sXG5cbiAgZ2V0IF9maXRIZWlnaHQoKSB7XG4gICAgdmFyIGZpdEhlaWdodDtcbiAgICBpZiAodGhpcy5maXRJbnRvID09PSB3aW5kb3cpIHtcbiAgICAgIGZpdEhlaWdodCA9IHRoaXMuZml0SW50by5pbm5lckhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0SGVpZ2h0ID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGZpdEhlaWdodDtcbiAgfSxcblxuICBnZXQgX2ZpdExlZnQoKSB7XG4gICAgdmFyIGZpdExlZnQ7XG4gICAgaWYgKHRoaXMuZml0SW50byA9PT0gd2luZG93KSB7XG4gICAgICBmaXRMZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0TGVmdCA9IHRoaXMuZml0SW50by5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIH1cbiAgICByZXR1cm4gZml0TGVmdDtcbiAgfSxcblxuICBnZXQgX2ZpdFRvcCgpIHtcbiAgICB2YXIgZml0VG9wO1xuICAgIGlmICh0aGlzLmZpdEludG8gPT09IHdpbmRvdykge1xuICAgICAgZml0VG9wID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0VG9wID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB9XG4gICAgcmV0dXJuIGZpdFRvcDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwb3NpdGlvbiB0aGUgZWxlbWVudCxcbiAgICogaWYgbm8gcG9zaXRpb24gdGFyZ2V0IGlzIGNvbmZpZ3VyZWQuXG4gICAqL1xuICBnZXQgX2RlZmF1bHRQb3NpdGlvblRhcmdldCgpIHtcbiAgICB2YXIgcGFyZW50ID0gZG9tKHRoaXMpLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFKSB7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuaG9zdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgaG9yaXpvbnRhbCBhbGlnbiB2YWx1ZSwgYWNjb3VudGluZyBmb3IgdGhlIFJUTC9MVFIgdGV4dCBkaXJlY3Rpb24uXG4gICAqL1xuICBnZXQgX2xvY2FsZUhvcml6b250YWxBbGlnbigpIHtcbiAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgIC8vIEluIFJUTCwgXCJsZWZ0XCIgYmVjb21lcyBcInJpZ2h0XCIuXG4gICAgICBpZiAodGhpcy5ob3Jpem9udGFsQWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgcmV0dXJuICdsZWZ0JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmhvcml6b250YWxBbGlnbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgIHJldHVybiAncmlnaHQnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ob3Jpem9udGFsQWxpZ247XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHBvc2l0aW9uZWQgaW5zdGVhZCBvZiBjZW50ZXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBfX3Nob3VsZFBvc2l0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5ob3Jpem9udGFsQWxpZ24gfHwgdGhpcy52ZXJ0aWNhbEFsaWduKSAmJiB0aGlzLnBvc2l0aW9uVGFyZ2V0O1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBNZW1vaXplIHRoaXMgdG8gYXZvaWQgZXhwZW5zaXZlIGNhbGN1bGF0aW9ucyAmIHJlbGF5b3V0cy5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG8gaXQgb25seSBvbmNlXG4gICAgaWYgKHR5cGVvZiB0aGlzLl9pc1JUTCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX2lzUlRMID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09ICdydGwnO1xuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uVGFyZ2V0ID0gdGhpcy5wb3NpdGlvblRhcmdldCB8fCB0aGlzLl9kZWZhdWx0UG9zaXRpb25UYXJnZXQ7XG4gICAgaWYgKHRoaXMuYXV0b0ZpdE9uQXR0YWNoKSB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE5PVEU6IHNoYWR5ZG9tIGFwcGxpZXMgZGlzdHJpYnV0aW9uIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIHdlYmNvbXBvbmVudHMvc2hhZHlkb20jMTIwXG4gICAgICAgIC8vIEZsdXNoIHRvIGdldCBjb3JyZWN0IGxheW91dCBpbmZvLlxuICAgICAgICB3aW5kb3cuU2hhZHlET00gJiYgU2hhZHlET00uZmx1c2goKTtcbiAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fZGVmZXJyZWRGaXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9fZGVmZXJyZWRGaXQpO1xuICAgICAgdGhpcy5fX2RlZmVycmVkRml0ID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyBhbmQgZml0cyB0aGUgZWxlbWVudCBpbnRvIHRoZSBgZml0SW50b2AgZWxlbWVudC5cbiAgICovXG4gIGZpdDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wb3NpdGlvbigpO1xuICAgIHRoaXMuY29uc3RyYWluKCk7XG4gICAgdGhpcy5jZW50ZXIoKTtcbiAgfSxcblxuICAvKipcbiAgICogTWVtb2l6ZSBpbmZvcm1hdGlvbiBuZWVkZWQgdG8gcG9zaXRpb24gYW5kIHNpemUgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgKiBAc3VwcHJlc3Mge2RlcHJlY2F0ZWR9XG4gICAqL1xuICBfZGlzY292ZXJJbmZvOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fZml0SW5mbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcyk7XG4gICAgdmFyIHNpemVyID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5zaXppbmdUYXJnZXQpO1xuXG4gICAgdGhpcy5fZml0SW5mbyA9IHtcbiAgICAgIGlubGluZVN0eWxlOiB7XG4gICAgICAgIHRvcDogdGhpcy5zdHlsZS50b3AgfHwgJycsXG4gICAgICAgIGxlZnQ6IHRoaXMuc3R5bGUubGVmdCB8fCAnJyxcbiAgICAgICAgcG9zaXRpb246IHRoaXMuc3R5bGUucG9zaXRpb24gfHwgJydcbiAgICAgIH0sXG4gICAgICBzaXplcklubGluZVN0eWxlOiB7XG4gICAgICAgIG1heFdpZHRoOiB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5tYXhXaWR0aCB8fCAnJyxcbiAgICAgICAgbWF4SGVpZ2h0OiB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5tYXhIZWlnaHQgfHwgJycsXG4gICAgICAgIGJveFNpemluZzogdGhpcy5zaXppbmdUYXJnZXQuc3R5bGUuYm94U2l6aW5nIHx8ICcnXG4gICAgICB9LFxuICAgICAgcG9zaXRpb25lZEJ5OiB7XG4gICAgICAgIHZlcnRpY2FsbHk6IHRhcmdldC50b3AgIT09ICdhdXRvJyA/XG4gICAgICAgICAgICAndG9wJyA6XG4gICAgICAgICAgICAodGFyZ2V0LmJvdHRvbSAhPT0gJ2F1dG8nID8gJ2JvdHRvbScgOiBudWxsKSxcbiAgICAgICAgaG9yaXpvbnRhbGx5OiB0YXJnZXQubGVmdCAhPT0gJ2F1dG8nID9cbiAgICAgICAgICAgICdsZWZ0JyA6XG4gICAgICAgICAgICAodGFyZ2V0LnJpZ2h0ICE9PSAnYXV0bycgPyAncmlnaHQnIDogbnVsbClcbiAgICAgIH0sXG4gICAgICBzaXplZEJ5OiB7XG4gICAgICAgIGhlaWdodDogc2l6ZXIubWF4SGVpZ2h0ICE9PSAnbm9uZScsXG4gICAgICAgIHdpZHRoOiBzaXplci5tYXhXaWR0aCAhPT0gJ25vbmUnLFxuICAgICAgICBtaW5XaWR0aDogcGFyc2VJbnQoc2l6ZXIubWluV2lkdGgsIDEwKSB8fCAwLFxuICAgICAgICBtaW5IZWlnaHQ6IHBhcnNlSW50KHNpemVyLm1pbkhlaWdodCwgMTApIHx8IDBcbiAgICAgIH0sXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgdG9wOiBwYXJzZUludCh0YXJnZXQubWFyZ2luVG9wLCAxMCkgfHwgMCxcbiAgICAgICAgcmlnaHQ6IHBhcnNlSW50KHRhcmdldC5tYXJnaW5SaWdodCwgMTApIHx8IDAsXG4gICAgICAgIGJvdHRvbTogcGFyc2VJbnQodGFyZ2V0Lm1hcmdpbkJvdHRvbSwgMTApIHx8IDAsXG4gICAgICAgIGxlZnQ6IHBhcnNlSW50KHRhcmdldC5tYXJnaW5MZWZ0LCAxMCkgfHwgMFxuICAgICAgfVxuICAgIH07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBwb3NpdGlvbiBhbmQgc2l6ZSBjb25zdHJhaW50cywgYW5kIGNsZWFyXG4gICAqIHRoZSBtZW1vaXplZCBkYXRhLlxuICAgKi9cbiAgcmVzZXRGaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpbmZvID0gdGhpcy5fZml0SW5mbyB8fCB7fTtcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBpbmZvLnNpemVySW5saW5lU3R5bGUpIHtcbiAgICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlW3Byb3BlcnR5XSA9IGluZm8uc2l6ZXJJbmxpbmVTdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGluZm8uaW5saW5lU3R5bGUpIHtcbiAgICAgIHRoaXMuc3R5bGVbcHJvcGVydHldID0gaW5mby5pbmxpbmVTdHlsZVtwcm9wZXJ0eV07XG4gICAgfVxuXG4gICAgdGhpcy5fZml0SW5mbyA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVxdWl2YWxlbnQgdG8gY2FsbGluZyBgcmVzZXRGaXQoKWAgYW5kIGBmaXQoKWAuIFVzZWZ1bCB0byBjYWxsIHRoaXMgYWZ0ZXJcbiAgICogdGhlIGVsZW1lbnQgb3IgdGhlIGBmaXRJbnRvYCBlbGVtZW50IGhhcyBiZWVuIHJlc2l6ZWQsIG9yIGlmIGFueSBvZiB0aGVcbiAgICogcG9zaXRpb25pbmcgcHJvcGVydGllcyAoZS5nLiBgaG9yaXpvbnRhbEFsaWduLCB2ZXJ0aWNhbEFsaWduYCkgaXMgdXBkYXRlZC5cbiAgICogSXQgcHJlc2VydmVzIHRoZSBzY3JvbGwgcG9zaXRpb24gb2YgdGhlIHNpemluZ1RhcmdldC5cbiAgICovXG4gIHJlZml0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbFRvcDtcbiAgICB0aGlzLnJlc2V0Rml0KCk7XG4gICAgdGhpcy5maXQoKTtcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgZWxlbWVudCBhY2NvcmRpbmcgdG8gYGhvcml6b250YWxBbGlnbiwgdmVydGljYWxBbGlnbmAuXG4gICAqL1xuICBwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9fc2hvdWxkUG9zaXRpb24pIHtcbiAgICAgIC8vIG5lZWRzIHRvIGJlIGNlbnRlcmVkLCBhbmQgaXQgaXMgZG9uZSBhZnRlciBjb25zdHJhaW4uXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc2NvdmVySW5mbygpO1xuXG4gICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgLy8gTmVlZCBib3JkZXItYm94IGZvciBtYXJnaW4vcGFkZGluZy5cbiAgICB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgLy8gU2V0IHRvIDAsIDAgaW4gb3JkZXIgdG8gZGlzY292ZXIgYW55IG9mZnNldCBjYXVzZWQgYnkgcGFyZW50IHN0YWNraW5nXG4gICAgLy8gY29udGV4dHMuXG4gICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5zdHlsZS50b3AgPSAnMHB4JztcblxuICAgIHZhciByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgcG9zaXRpb25SZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMucG9zaXRpb25UYXJnZXQpO1xuICAgIHZhciBmaXRSZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMuZml0SW50byk7XG5cbiAgICB2YXIgbWFyZ2luID0gdGhpcy5fZml0SW5mby5tYXJnaW47XG5cbiAgICAvLyBDb25zaWRlciB0aGUgbWFyZ2luIGFzIHBhcnQgb2YgdGhlIHNpemUgZm9yIHBvc2l0aW9uIGNhbGN1bGF0aW9ucy5cbiAgICB2YXIgc2l6ZSA9IHtcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQsXG4gICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b21cbiAgICB9O1xuXG4gICAgdmFyIHBvc2l0aW9uID0gdGhpcy5fX2dldFBvc2l0aW9uKFxuICAgICAgICB0aGlzLl9sb2NhbGVIb3Jpem9udGFsQWxpZ24sXG4gICAgICAgIHRoaXMudmVydGljYWxBbGlnbixcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgcmVjdCxcbiAgICAgICAgcG9zaXRpb25SZWN0LFxuICAgICAgICBmaXRSZWN0KTtcblxuICAgIHZhciBsZWZ0ID0gcG9zaXRpb24ubGVmdCArIG1hcmdpbi5sZWZ0O1xuICAgIHZhciB0b3AgPSBwb3NpdGlvbi50b3AgKyBtYXJnaW4udG9wO1xuXG4gICAgLy8gV2UgZmlyc3QgbGltaXQgcmlnaHQvYm90dG9tIHdpdGhpbiBmaXRJbnRvIHJlc3BlY3RpbmcgdGhlIG1hcmdpbixcbiAgICAvLyB0aGVuIHVzZSB0aG9zZSB2YWx1ZXMgdG8gbGltaXQgdG9wL2xlZnQuXG4gICAgdmFyIHJpZ2h0ID0gTWF0aC5taW4oZml0UmVjdC5yaWdodCAtIG1hcmdpbi5yaWdodCwgbGVmdCArIHJlY3Qud2lkdGgpO1xuICAgIHZhciBib3R0b20gPSBNYXRoLm1pbihmaXRSZWN0LmJvdHRvbSAtIG1hcmdpbi5ib3R0b20sIHRvcCArIHJlY3QuaGVpZ2h0KTtcblxuICAgIC8vIEtlZXAgbGVmdC90b3Agd2l0aGluIGZpdEludG8gcmVzcGVjdGluZyB0aGUgbWFyZ2luLlxuICAgIGxlZnQgPSBNYXRoLm1heChcbiAgICAgICAgZml0UmVjdC5sZWZ0ICsgbWFyZ2luLmxlZnQsXG4gICAgICAgIE1hdGgubWluKGxlZnQsIHJpZ2h0IC0gdGhpcy5fZml0SW5mby5zaXplZEJ5Lm1pbldpZHRoKSk7XG4gICAgdG9wID0gTWF0aC5tYXgoXG4gICAgICAgIGZpdFJlY3QudG9wICsgbWFyZ2luLnRvcCxcbiAgICAgICAgTWF0aC5taW4odG9wLCBib3R0b20gLSB0aGlzLl9maXRJbmZvLnNpemVkQnkubWluSGVpZ2h0KSk7XG5cbiAgICAvLyBVc2UgcmlnaHQvYm90dG9tIHRvIHNldCBtYXhXaWR0aC9tYXhIZWlnaHQsIGFuZCByZXNwZWN0XG4gICAgLy8gbWluV2lkdGgvbWluSGVpZ2h0LlxuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heFdpZHRoID1cbiAgICAgICAgTWF0aC5tYXgocmlnaHQgLSBsZWZ0LCB0aGlzLl9maXRJbmZvLnNpemVkQnkubWluV2lkdGgpICsgJ3B4JztcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5tYXhIZWlnaHQgPVxuICAgICAgICBNYXRoLm1heChib3R0b20gLSB0b3AsIHRoaXMuX2ZpdEluZm8uc2l6ZWRCeS5taW5IZWlnaHQpICsgJ3B4JztcblxuICAgIC8vIFJlbW92ZSB0aGUgb2Zmc2V0IGNhdXNlZCBieSBhbnkgc3RhY2tpbmcgY29udGV4dC5cbiAgICB0aGlzLnN0eWxlLmxlZnQgPSAobGVmdCAtIHJlY3QubGVmdCkgKyAncHgnO1xuICAgIHRoaXMuc3R5bGUudG9wID0gKHRvcCAtIHJlY3QudG9wKSArICdweCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnN0cmFpbnMgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgdG8gYGZpdEludG9gIGJ5IHNldHRpbmcgYG1heC1oZWlnaHRgXG4gICAqIGFuZC9vciBgbWF4LXdpZHRoYC5cbiAgICovXG4gIGNvbnN0cmFpbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19zaG91bGRQb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kaXNjb3ZlckluZm8oKTtcblxuICAgIHZhciBpbmZvID0gdGhpcy5fZml0SW5mbztcbiAgICAvLyBwb3NpdGlvbiBhdCAoMHB4LCAwcHgpIGlmIG5vdCBhbHJlYWR5IHBvc2l0aW9uZWQsIHNvIHdlIGNhbiBtZWFzdXJlIHRoZVxuICAgIC8vIG5hdHVyYWwgc2l6ZS5cbiAgICBpZiAoIWluZm8ucG9zaXRpb25lZEJ5LnZlcnRpY2FsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgdGhpcy5zdHlsZS50b3AgPSAnMHB4JztcbiAgICB9XG4gICAgaWYgKCFpbmZvLnBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgfVxuXG4gICAgLy8gbmVlZCBib3JkZXItYm94IGZvciBtYXJnaW4vcGFkZGluZ1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAvLyBjb25zdHJhaW4gdGhlIHdpZHRoIGFuZCBoZWlnaHQgaWYgbm90IGFscmVhZHkgc2V0XG4gICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICghaW5mby5zaXplZEJ5LmhlaWdodCkge1xuICAgICAgdGhpcy5fX3NpemVEaW1lbnNpb24oXG4gICAgICAgICAgcmVjdCwgaW5mby5wb3NpdGlvbmVkQnkudmVydGljYWxseSwgJ3RvcCcsICdib3R0b20nLCAnSGVpZ2h0Jyk7XG4gICAgfVxuICAgIGlmICghaW5mby5zaXplZEJ5LndpZHRoKSB7XG4gICAgICB0aGlzLl9fc2l6ZURpbWVuc2lvbihcbiAgICAgICAgICByZWN0LCBpbmZvLnBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHksICdsZWZ0JywgJ3JpZ2h0JywgJ1dpZHRoJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICBfc2l6ZURpbWVuc2lvbjogZnVuY3Rpb24ocmVjdCwgcG9zaXRpb25lZEJ5LCBzdGFydCwgZW5kLCBleHRlbnQpIHtcbiAgICB0aGlzLl9fc2l6ZURpbWVuc2lvbihyZWN0LCBwb3NpdGlvbmVkQnksIHN0YXJ0LCBlbmQsIGV4dGVudCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3NpemVEaW1lbnNpb246IGZ1bmN0aW9uKHJlY3QsIHBvc2l0aW9uZWRCeSwgc3RhcnQsIGVuZCwgZXh0ZW50KSB7XG4gICAgdmFyIGluZm8gPSB0aGlzLl9maXRJbmZvO1xuICAgIHZhciBmaXRSZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMuZml0SW50byk7XG4gICAgdmFyIG1heCA9IGV4dGVudCA9PT0gJ1dpZHRoJyA/IGZpdFJlY3Qud2lkdGggOiBmaXRSZWN0LmhlaWdodDtcbiAgICB2YXIgZmxpcCA9IChwb3NpdGlvbmVkQnkgPT09IGVuZCk7XG4gICAgdmFyIG9mZnNldCA9IGZsaXAgPyBtYXggLSByZWN0W2VuZF0gOiByZWN0W3N0YXJ0XTtcbiAgICB2YXIgbWFyZ2luID0gaW5mby5tYXJnaW5bZmxpcCA/IHN0YXJ0IDogZW5kXTtcbiAgICB2YXIgb2Zmc2V0RXh0ZW50ID0gJ29mZnNldCcgKyBleHRlbnQ7XG4gICAgdmFyIHNpemluZ09mZnNldCA9IHRoaXNbb2Zmc2V0RXh0ZW50XSAtIHRoaXMuc2l6aW5nVGFyZ2V0W29mZnNldEV4dGVudF07XG4gICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGVbJ21heCcgKyBleHRlbnRdID1cbiAgICAgICAgKG1heCAtIG1hcmdpbiAtIG9mZnNldCAtIHNpemluZ09mZnNldCkgKyAncHgnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDZW50ZXJzIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseSBpZiBub3QgYWxyZWFkeSBwb3NpdGlvbmVkLiBUaGlzIGFsc29cbiAgICogc2V0cyBgcG9zaXRpb246Zml4ZWRgLlxuICAgKi9cbiAgY2VudGVyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3Nob3VsZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc2NvdmVySW5mbygpO1xuXG4gICAgdmFyIHBvc2l0aW9uZWRCeSA9IHRoaXMuX2ZpdEluZm8ucG9zaXRpb25lZEJ5O1xuICAgIGlmIChwb3NpdGlvbmVkQnkudmVydGljYWxseSAmJiBwb3NpdGlvbmVkQnkuaG9yaXpvbnRhbGx5KSB7XG4gICAgICAvLyBBbHJlYWR5IHBvc2l0aW9uZWQuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIE5lZWQgcG9zaXRpb246Zml4ZWQgdG8gY2VudGVyXG4gICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgLy8gVGFrZSBpbnRvIGFjY291bnQgdGhlIG9mZnNldCBjYXVzZWQgYnkgcGFyZW50cyB0aGF0IGNyZWF0ZSBzdGFja2luZ1xuICAgIC8vIGNvbnRleHRzIChlLmcuIHdpdGggdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCkuIFRyYW5zbGF0ZSB0byAwLDAgYW5kXG4gICAgLy8gbWVhc3VyZSB0aGUgYm91bmRpbmcgcmVjdC5cbiAgICBpZiAoIXBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5KSB7XG4gICAgICB0aGlzLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBpZiAoIXBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIH1cbiAgICAvLyBJdCB3aWxsIHRha2UgaW4gY29uc2lkZXJhdGlvbiBtYXJnaW5zIGFuZCB0cmFuc2Zvcm1zXG4gICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBmaXRSZWN0ID0gdGhpcy5fX2dldE5vcm1hbGl6ZWRSZWN0KHRoaXMuZml0SW50byk7XG4gICAgaWYgKCFwb3NpdGlvbmVkQnkudmVydGljYWxseSkge1xuICAgICAgdmFyIHRvcCA9IGZpdFJlY3QudG9wIC0gcmVjdC50b3AgKyAoZml0UmVjdC5oZWlnaHQgLSByZWN0LmhlaWdodCkgLyAyO1xuICAgICAgdGhpcy5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuICAgIH1cbiAgICBpZiAoIXBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIHZhciBsZWZ0ID0gZml0UmVjdC5sZWZ0IC0gcmVjdC5sZWZ0ICsgKGZpdFJlY3Qud2lkdGggLSByZWN0LndpZHRoKSAvIDI7XG4gICAgICB0aGlzLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICB9XG4gIH0sXG5cbiAgX19nZXROb3JtYWxpemVkUmVjdDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldCA9PT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IHRhcmdldCA9PT0gd2luZG93KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIHJpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH0sXG5cbiAgX19nZXRPZmZzY3JlZW5BcmVhOiBmdW5jdGlvbihwb3NpdGlvbiwgc2l6ZSwgZml0UmVjdCkge1xuICAgIHZhciB2ZXJ0aWNhbENyb3AgPSBNYXRoLm1pbigwLCBwb3NpdGlvbi50b3ApICtcbiAgICAgICAgTWF0aC5taW4oMCwgZml0UmVjdC5ib3R0b20gLSAocG9zaXRpb24udG9wICsgc2l6ZS5oZWlnaHQpKTtcbiAgICB2YXIgaG9yaXpvbnRhbENyb3AgPSBNYXRoLm1pbigwLCBwb3NpdGlvbi5sZWZ0KSArXG4gICAgICAgIE1hdGgubWluKDAsIGZpdFJlY3QucmlnaHQgLSAocG9zaXRpb24ubGVmdCArIHNpemUud2lkdGgpKTtcbiAgICByZXR1cm4gTWF0aC5hYnModmVydGljYWxDcm9wKSAqIHNpemUud2lkdGggK1xuICAgICAgICBNYXRoLmFicyhob3Jpem9udGFsQ3JvcCkgKiBzaXplLmhlaWdodDtcbiAgfSxcblxuXG4gIF9fZ2V0UG9zaXRpb246IGZ1bmN0aW9uKFxuICAgICAgaEFsaWduLCB2QWxpZ24sIHNpemUsIHNpemVOb01hcmdpbnMsIHBvc2l0aW9uUmVjdCwgZml0UmVjdCkge1xuICAgIC8vIEFsbCB0aGUgcG9zc2libGUgY29uZmlndXJhdGlvbnMuXG4gICAgLy8gT3JkZXJlZCBhcyB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0LlxuICAgIHZhciBwb3NpdGlvbnMgPSBbXG4gICAgICB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgKyB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdyaWdodCcsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LnRvcCArIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5yaWdodCAtIHNpemUud2lkdGggLSB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQgLSB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQgLSB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QucmlnaHQgLSBzaXplLndpZHRoIC0gdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9XG4gICAgXTtcblxuICAgIGlmICh0aGlzLm5vT3ZlcmxhcCkge1xuICAgICAgLy8gRHVwbGljYXRlLlxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwb3NpdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBjb3B5ID0ge307XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwb3NpdGlvbnNbaV0pIHtcbiAgICAgICAgICBjb3B5W2tleV0gPSBwb3NpdGlvbnNbaV1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbnMucHVzaChjb3B5KTtcbiAgICAgIH1cbiAgICAgIC8vIEhvcml6b250YWwgb3ZlcmxhcCBvbmx5LlxuICAgICAgcG9zaXRpb25zWzBdLnRvcCA9IHBvc2l0aW9uc1sxXS50b3AgKz0gcG9zaXRpb25SZWN0LmhlaWdodDtcbiAgICAgIHBvc2l0aW9uc1syXS50b3AgPSBwb3NpdGlvbnNbM10udG9wIC09IHBvc2l0aW9uUmVjdC5oZWlnaHQ7XG4gICAgICAvLyBWZXJ0aWNhbCBvdmVybGFwIG9ubHkuXG4gICAgICBwb3NpdGlvbnNbNF0ubGVmdCA9IHBvc2l0aW9uc1s2XS5sZWZ0ICs9IHBvc2l0aW9uUmVjdC53aWR0aDtcbiAgICAgIHBvc2l0aW9uc1s1XS5sZWZ0ID0gcG9zaXRpb25zWzddLmxlZnQgLT0gcG9zaXRpb25SZWN0LndpZHRoO1xuICAgIH1cblxuICAgIC8vIENvbnNpZGVyIGF1dG8gYXMgbnVsbCBmb3IgY29kaW5nIGNvbnZlbmllbmNlLlxuICAgIHZBbGlnbiA9IHZBbGlnbiA9PT0gJ2F1dG8nID8gbnVsbCA6IHZBbGlnbjtcbiAgICBoQWxpZ24gPSBoQWxpZ24gPT09ICdhdXRvJyA/IG51bGwgOiBoQWxpZ247XG5cbiAgICBpZiAoIWhBbGlnbiB8fCBoQWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0ICtcbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC5oZWlnaHQgOiAwKSxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgLSBzaXplTm9NYXJnaW5zLndpZHRoIC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3Qud2lkdGggLyAyICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9KTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LmJvdHRvbSAtIHNpemUuaGVpZ2h0IC0gdGhpcy52ZXJ0aWNhbE9mZnNldCAtXG4gICAgICAgICAgICAodGhpcy5ub092ZXJsYXAgPyBwb3NpdGlvblJlY3QuaGVpZ2h0IDogMCksXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5sZWZ0IC0gc2l6ZU5vTWFyZ2lucy53aWR0aCAvIDIgK1xuICAgICAgICAgICAgcG9zaXRpb25SZWN0LndpZHRoIC8gMiArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF2QWxpZ24gfHwgdkFsaWduID09PSAnbWlkZGxlJykge1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnbGVmdCcsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LnRvcCAtIHNpemVOb01hcmdpbnMuaGVpZ2h0IC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3QuaGVpZ2h0IC8gMiArIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5sZWZ0ICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0ICtcbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC53aWR0aCA6IDApXG4gICAgICB9KTtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wIC0gc2l6ZU5vTWFyZ2lucy5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC5oZWlnaHQgLyAyICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCAtIHRoaXMuaG9yaXpvbnRhbE9mZnNldCAtXG4gICAgICAgICAgICAodGhpcy5ub092ZXJsYXAgPyBwb3NpdGlvblJlY3Qud2lkdGggOiAwKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHZBbGlnbiA9PT0gJ21pZGRsZScgJiYgaEFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wIC0gc2l6ZU5vTWFyZ2lucy5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC5oZWlnaHQgLyAyICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgLSBzaXplTm9NYXJnaW5zLndpZHRoIC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3Qud2lkdGggLyAyICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgcG9zaXRpb247XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjYW5kaWRhdGUgPSBwb3NpdGlvbnNbaV07XG4gICAgICB2YXIgdkFsaWduT2sgPSBjYW5kaWRhdGUudmVydGljYWxBbGlnbiA9PT0gdkFsaWduO1xuICAgICAgdmFyIGhBbGlnbk9rID0gY2FuZGlkYXRlLmhvcml6b250YWxBbGlnbiA9PT0gaEFsaWduO1xuXG4gICAgICAvLyBJZiBib3RoIHZBbGlnbiBhbmQgaEFsaWduIGFyZSBkZWZpbmVkLCByZXR1cm4gZXhhY3QgbWF0Y2guXG4gICAgICAvLyBGb3IgZHluYW1pY0FsaWduIGFuZCBub092ZXJsYXAgd2UnbGwgaGF2ZSBtb3JlIHRoYW4gb25lIGNhbmRpZGF0ZSwgc29cbiAgICAgIC8vIHdlJ2xsIGhhdmUgdG8gY2hlY2sgdGhlIG9mZnNjcmVlbkFyZWEgdG8gbWFrZSB0aGUgYmVzdCBjaG9pY2UuXG4gICAgICBpZiAoIXRoaXMuZHluYW1pY0FsaWduICYmICF0aGlzLm5vT3ZlcmxhcCAmJiB2QWxpZ25PayAmJiBoQWxpZ25Paykge1xuICAgICAgICBwb3NpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsaWduIGlzIG9rIGlmIGFsaWdubWVudCBwcmVmZXJlbmNlcyBhcmUgcmVzcGVjdGVkLiBJZiBubyBwcmVmZXJlbmNlcyxcbiAgICAgIC8vIGl0IGlzIGNvbnNpZGVyZWQgb2suXG4gICAgICB2YXIgYWxpZ25PayA9ICghdkFsaWduIHx8IHZBbGlnbk9rKSAmJiAoIWhBbGlnbiB8fCBoQWxpZ25Payk7XG5cbiAgICAgIC8vIEZpbHRlciBvdXQgZWxlbWVudHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgYWxpZ25tZW50IChpZiBkZWZpbmVkKS5cbiAgICAgIC8vIFdpdGggZHluYW1pY0FsaWduLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIGFsbCB0aGUgcG9zaXRpb25zIHRvIGZpbmQgdGhlXG4gICAgICAvLyBvbmUgdGhhdCBtaW5pbWl6ZXMgdGhlIGNyb3BwZWQgYXJlYS5cbiAgICAgIGlmICghdGhpcy5keW5hbWljQWxpZ24gJiYgIWFsaWduT2spIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNhbmRpZGF0ZS5vZmZzY3JlZW5BcmVhID1cbiAgICAgICAgICB0aGlzLl9fZ2V0T2Zmc2NyZWVuQXJlYShjYW5kaWRhdGUsIHNpemUsIGZpdFJlY3QpO1xuICAgICAgLy8gSWYgbm90IGNyb3BwZWQgYW5kIHJlc3BlY3RzIHRoZSBhbGlnbiByZXF1aXJlbWVudHMsIGtlZXAgaXQuXG4gICAgICAvLyBUaGlzIGFsbG93cyB0byBwcmVmZXIgcG9zaXRpb25zIG92ZXJsYXBwaW5nIGhvcml6b250YWxseSBvdmVyIHRoZVxuICAgICAgLy8gb25lcyBvdmVybGFwcGluZyB2ZXJ0aWNhbGx5LlxuICAgICAgaWYgKGNhbmRpZGF0ZS5vZmZzY3JlZW5BcmVhID09PSAwICYmIGFsaWduT2spIHtcbiAgICAgICAgcG9zaXRpb24gPSBjYW5kaWRhdGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCBjYW5kaWRhdGU7XG4gICAgICB2YXIgZGlmZiA9IGNhbmRpZGF0ZS5vZmZzY3JlZW5BcmVhIC0gcG9zaXRpb24ub2Zmc2NyZWVuQXJlYTtcbiAgICAgIC8vIENoZWNrIHdoaWNoIGNyb3BzIGxlc3MuIElmIGl0IGNyb3BzIGVxdWFsbHksIGNoZWNrIGlmIGF0IGxlYXN0IG9uZVxuICAgICAgLy8gYWxpZ24gc2V0dGluZyBpcyBvay5cbiAgICAgIGlmIChkaWZmIDwgMCB8fCAoZGlmZiA9PT0gMCAmJiAodkFsaWduT2sgfHwgaEFsaWduT2spKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbnZhciBwID0gRWxlbWVudC5wcm90b3R5cGU7XG52YXIgbWF0Y2hlcyA9IHAubWF0Y2hlcyB8fCBwLm1hdGNoZXNTZWxlY3RvciB8fCBwLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIHAubXNNYXRjaGVzU2VsZWN0b3IgfHwgcC5vTWF0Y2hlc1NlbGVjdG9yIHx8IHAud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG5leHBvcnQgY29uc3QgSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlkcmVuLFxuICAgKiBzb3J0aW5nIHRoZSByZXN1bHQgYnkgdGFiaW5kZXguXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7IUFycmF5PCFIVE1MRWxlbWVudD59XG4gICAqL1xuICBnZXRUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgdmFyIG5lZWRzU29ydEJ5VGFiSW5kZXggPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2Rlcyhub2RlLCByZXN1bHQpO1xuICAgIGlmIChuZWVkc1NvcnRCeVRhYkluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc29ydEJ5VGFiSW5kZXgocmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBhIGVsZW1lbnQgaXMgZm9jdXNhYmxlLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNGb2N1c2FibGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2MDAxOTQvNDIyODcwMzpcbiAgICAvLyBUaGVyZSBpc24ndCBhIGRlZmluaXRlIGxpc3QsIGl0J3MgdXAgdG8gdGhlIGJyb3dzZXIuIFRoZSBvbmx5XG4gICAgLy8gc3RhbmRhcmQgd2UgaGF2ZSBpcyBET00gTGV2ZWwgMiBIVE1MXG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0yLUhUTUwvaHRtbC5odG1sLCBhY2NvcmRpbmcgdG8gd2hpY2ggdGhlXG4gICAgLy8gb25seSBlbGVtZW50cyB0aGF0IGhhdmUgYSBmb2N1cygpIG1ldGhvZCBhcmUgSFRNTElucHV0RWxlbWVudCxcbiAgICAvLyBIVE1MU2VsZWN0RWxlbWVudCwgSFRNTFRleHRBcmVhRWxlbWVudCBhbmQgSFRNTEFuY2hvckVsZW1lbnQuIFRoaXNcbiAgICAvLyBub3RhYmx5IG9taXRzIEhUTUxCdXR0b25FbGVtZW50IGFuZCBIVE1MQXJlYUVsZW1lbnQuIFJlZmVycmluZyB0byB0aGVzZVxuICAgIC8vIHRlc3RzIHdpdGggdGFiYmFibGVzIGluIGRpZmZlcmVudCBicm93c2Vyc1xuICAgIC8vIGh0dHA6Ly9hbGx5anMuaW8vZGF0YS10YWJsZXMvZm9jdXNhYmxlLmh0bWxcblxuICAgIC8vIEVsZW1lbnRzIHRoYXQgY2Fubm90IGJlIGZvY3VzZWQgaWYgdGhleSBoYXZlIFtkaXNhYmxlZF0gYXR0cmlidXRlLlxuICAgIGlmIChtYXRjaGVzLmNhbGwoZWxlbWVudCwgJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBidXR0b24sIG9iamVjdCcpKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKGVsZW1lbnQsICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgfVxuICAgIC8vIEVsZW1lbnRzIHRoYXQgY2FuIGJlIGZvY3VzZWQgZXZlbiBpZiB0aGV5IGhhdmUgW2Rpc2FibGVkXSBhdHRyaWJ1dGUuXG4gICAgcmV0dXJuIG1hdGNoZXMuY2FsbChcbiAgICAgICAgZWxlbWVudCwgJ2FbaHJlZl0sIGFyZWFbaHJlZl0sIGlmcmFtZSwgW3RhYmluZGV4XSwgW2NvbnRlbnRFZGl0YWJsZV0nKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBhIGVsZW1lbnQgaXMgdGFiYmFibGUuIFRvIGJlIHRhYmJhYmxlLCBhIGVsZW1lbnQgbXVzdCBiZVxuICAgKiBmb2N1c2FibGUsIHZpc2libGUsIGFuZCB3aXRoIGEgdGFiaW5kZXggIT09IC0xLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNUYWJiYWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLmlzRm9jdXNhYmxlKGVsZW1lbnQpICYmXG4gICAgICAgIG1hdGNoZXMuY2FsbChlbGVtZW50LCAnOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKSAmJlxuICAgICAgICB0aGlzLl9pc1Zpc2libGUoZWxlbWVudCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgZWxlbWVudCB0YWJpbmRleC4gSWYgbm90IGZvY3VzYWJsZSwgcmV0dXJucyAtMS5cbiAgICogSXQgY2hlY2tzIGZvciB0aGUgYXR0cmlidXRlIFwidGFiaW5kZXhcIiBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IHByb3BlcnR5XG4gICAqIGB0YWJJbmRleGAgc2luY2UgYnJvd3NlcnMgYXNzaWduIGRpZmZlcmVudCB2YWx1ZXMgdG8gaXQuXG4gICAqIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4geyFudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfbm9ybWFsaXplZFRhYkluZGV4OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2FibGUoZWxlbWVudCkpIHtcbiAgICAgIHZhciB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IDA7XG4gICAgICByZXR1cm4gTnVtYmVyKHRhYkluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHwgIXRoaXMuX2lzVmlzaWJsZShub2RlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZWxlbWVudCA9IC8qKiBAdHlwZSB7IUhUTUxFbGVtZW50fSAqLyAobm9kZSk7XG4gICAgdmFyIHRhYkluZGV4ID0gdGhpcy5fbm9ybWFsaXplZFRhYkluZGV4KGVsZW1lbnQpO1xuICAgIHZhciBuZWVkc1NvcnQgPSB0YWJJbmRleCA+IDA7XG4gICAgaWYgKHRhYkluZGV4ID49IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIEluIFNoYWRvd0RPTSB2MSwgdGFiIG9yZGVyIGlzIGFmZmVjdGVkIGJ5IHRoZSBvcmRlciBvZiBkaXN0cnVidXRpb24uXG4gICAgLy8gRS5nLiBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSBpbiBTaGFkb3dET00gdjEgc2hvdWxkIHJldHVybiBbI0EsICNCXTtcbiAgICAvLyBpbiBTaGFkb3dET00gdjAgdGFiIG9yZGVyIGlzIG5vdCBhZmZlY3RlZCBieSB0aGUgZGlzdHJ1YnV0aW9uIG9yZGVyLFxuICAgIC8vIGluIGZhY3QgZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgcmV0dXJucyBbI0IsICNBXS5cbiAgICAvLyAgPGRpdiBpZD1cInJvb3RcIj5cbiAgICAvLyAgIDwhLS0gc2hhZG93IC0tPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYVwiPlxuICAgIC8vICAgICA8c2xvdCBuYW1lPVwiYlwiPlxuICAgIC8vICAgPCEtLSAvc2hhZG93IC0tPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQVwiIHNsb3Q9XCJhXCI+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJCXCIgc2xvdD1cImJcIiB0YWJpbmRleD1cIjFcIj5cbiAgICAvLyAgPC9kaXY+XG4gICAgLy8gVE9ETyh2YWxkcmluKSBzdXBwb3J0IFNoYWRvd0RPTSB2MSB3aGVuIHVwZ3JhZGluZyB0byBQb2x5bWVyIHYyLjAuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIGlmIChlbGVtZW50LmxvY2FsTmFtZSA9PT0gJ2NvbnRlbnQnIHx8IGVsZW1lbnQubG9jYWxOYW1lID09PSAnc2xvdCcpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvciBgZGlzcGxheTogbm9uZWBcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc1Zpc2libGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgZmlyc3QgdG8gc2F2ZSBhIHJlLWZsb3cuIElmIGxvb2tzIGdvb2QsIGNoZWNrIGFsc29cbiAgICAvLyBjb21wdXRlZCBzdHlsZS5cbiAgICB2YXIgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGlmIChzdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJiBzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogU29ydHMgYW4gYXJyYXkgb2YgdGFiYmFibGUgZWxlbWVudHMgYnkgdGFiaW5kZXguIFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHRhYmJhYmxlc1xuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zb3J0QnlUYWJJbmRleDogZnVuY3Rpb24odGFiYmFibGVzKSB7XG4gICAgLy8gSW1wbGVtZW50IGEgbWVyZ2Ugc29ydCBhcyBBcnJheS5wcm90b3R5cGUuc29ydCBkb2VzIGEgbm9uLXN0YWJsZSBzb3J0XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydFxuICAgIHZhciBsZW4gPSB0YWJiYWJsZXMubGVuZ3RoO1xuICAgIGlmIChsZW4gPCAyKSB7XG4gICAgICByZXR1cm4gdGFiYmFibGVzO1xuICAgIH1cbiAgICB2YXIgcGl2b3QgPSBNYXRoLmNlaWwobGVuIC8gMik7XG4gICAgdmFyIGxlZnQgPSB0aGlzLl9zb3J0QnlUYWJJbmRleCh0YWJiYWJsZXMuc2xpY2UoMCwgcGl2b3QpKTtcbiAgICB2YXIgcmlnaHQgPSB0aGlzLl9zb3J0QnlUYWJJbmRleCh0YWJiYWJsZXMuc2xpY2UocGl2b3QpKTtcbiAgICByZXR1cm4gdGhpcy5fbWVyZ2VTb3J0QnlUYWJJbmRleChsZWZ0LCByaWdodCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE1lcmdlIHNvcnQgaXRlcmF0b3IsIG1lcmdlcyB0aGUgdHdvIGFycmF5cyBpbnRvIG9uZSwgc29ydGVkIGJ5IHRhYiBpbmRleC5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gbGVmdFxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByaWdodFxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9tZXJnZVNvcnRCeVRhYkluZGV4OiBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB3aGlsZSAoKGxlZnQubGVuZ3RoID4gMCkgJiYgKHJpZ2h0Lmxlbmd0aCA+IDApKSB7XG4gICAgICBpZiAodGhpcy5faGFzTG93ZXJUYWJPcmRlcihsZWZ0WzBdLCByaWdodFswXSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocmlnaHQuc2hpZnQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChsZWZ0LnNoaWZ0KCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuY29uY2F0KGxlZnQsIHJpZ2h0KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBpZiBlbGVtZW50IGBhYCBoYXMgbG93ZXIgdGFiIG9yZGVyIGNvbXBhcmVkIHRvIGVsZW1lbnQgYGJgXG4gICAqIChib3RoIGVsZW1lbnRzIGFyZSBhc3N1bWVkIHRvIGJlIGZvY3VzYWJsZSBhbmQgdGFiYmFibGUpLlxuICAgKiBFbGVtZW50cyB3aXRoIHRhYmluZGV4ID0gMCBoYXZlIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50c1xuICAgKiB3aXRoIHRhYmluZGV4ID4gMC5cbiAgICogSWYgYm90aCBoYXZlIHNhbWUgdGFiaW5kZXgsIGl0IHJldHVybnMgZmFsc2UuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBhXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBiXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaGFzTG93ZXJUYWJPcmRlcjogZnVuY3Rpb24oYSwgYikge1xuICAgIC8vIE5vcm1hbGl6ZSB0YWJJbmRleGVzXG4gICAgLy8gZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAgICB2YXIgYXRpID0gTWF0aC5tYXgoYS50YWJJbmRleCwgMCk7XG4gICAgdmFyIGJ0aSA9IE1hdGgubWF4KGIudGFiSW5kZXgsIDApO1xuICAgIHJldHVybiAoYXRpID09PSAwIHx8IGJ0aSA9PT0gMCkgPyBidGkgPiBhdGkgOiBhdGkgPiBidGk7XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLypcbmBpcm9uLW92ZXJsYXktYmFja2Ryb3BgIGlzIGEgYmFja2Ryb3AgdXNlZCBieSBgUG9seW1lci5Jcm9uT3ZlcmxheUJlaGF2aW9yYC4gSXRcbnNob3VsZCBiZSBhIHNpbmdsZXRvbi5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcuXG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tXG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvcmAgfCBCYWNrZHJvcCBiYWNrZ3JvdW5kIGNvbG9yIHwgIzAwMFxuYC0taXJvbi1vdmVybGF5LWJhY2tkcm9wLW9wYWNpdHlgICAgICAgICAgIHwgQmFja2Ryb3Agb3BhY2l0eSB8IDAuNlxuYC0taXJvbi1vdmVybGF5LWJhY2tkcm9wYCAgICAgICAgICAgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBgaXJvbi1vdmVybGF5LWJhY2tkcm9wYC4gICAgICAgICAgICAgICAgICAgICAgfCB7fVxuYC0taXJvbi1vdmVybGF5LWJhY2tkcm9wLW9wZW5lZGAgICAgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byBgaXJvbi1vdmVybGF5LWJhY2tkcm9wYCB3aGVuIGl0IGlzIGRpc3BsYXllZCB8IHt9XG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pcm9uLW92ZXJsYXktYmFja2Ryb3AtYmFja2dyb3VuZC1jb2xvciwgIzAwMCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIEBhcHBseSAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLm9wZW5lZCkge1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BhY2l0eSwgMC42KTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIEBhcHBseSAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1vcGVuZWQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdpcm9uLW92ZXJsYXktYmFja2Ryb3AnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYmFja2Ryb3AgaXMgb3BlbmVkLlxuICAgICAqL1xuICAgIG9wZW5lZDoge1xuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnLFxuICAgIH1cblxuICB9LFxuXG4gIGxpc3RlbmVyczoge1xuICAgICd0cmFuc2l0aW9uZW5kJzogJ19vblRyYW5zaXRpb25lbmQnLFxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZWQgdG8gY2FuY2VsIHByZXZpb3VzIHJlcXVlc3RBbmltYXRpb25GcmFtZSBjYWxscyB3aGVuIG9wZW5lZCBjaGFuZ2VzLlxuICAgIHRoaXMuX19vcGVuZWRSYWYgPSBudWxsO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wZW5lZCAmJiB0aGlzLl9vcGVuZWRDaGFuZ2VkKHRoaXMub3BlbmVkKTtcbiAgfSxcblxuICAvKipcbiAgICogQXBwZW5kcyB0aGUgYmFja2Ryb3AgdG8gZG9jdW1lbnQgYm9keSBpZiBuZWVkZWQuXG4gICAqL1xuICBwcmVwYXJlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgIXRoaXMucGFyZW50Tm9kZSkge1xuICAgICAgZG9tKGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2hvd3MgdGhlIGJhY2tkcm9wLlxuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgYmFja2Ryb3AuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgYmFja2Ryb3AgZnJvbSBkb2N1bWVudCBib2R5IGlmIG5lZWRlZC5cbiAgICovXG4gIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkICYmIHRoaXMucGFyZW50Tm9kZSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9tKHRoaXMucGFyZW50Tm9kZSkucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIF9vblRyYW5zaXRpb25lbmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBvcGVuZWRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vcGVuZWRDaGFuZ2VkOiBmdW5jdGlvbihvcGVuZWQpIHtcbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICAvLyBBdXRvLWF0dGFjaC5cbiAgICAgIHRoaXMucHJlcGFyZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBbmltYXRpb24gbWlnaHQgYmUgZGlzYWJsZWQgdmlhIHRoZSBtaXhpbiBvciBvcGFjaXR5IGN1c3RvbSBwcm9wZXJ0eS5cbiAgICAgIC8vIElmIGl0IGlzIGRpc2FibGVkIGluIG90aGVyIHdheXMsIGl0J3MgdXAgdG8gdGhlIHVzZXIgdG8gY2FsbCBjb21wbGV0ZS5cbiAgICAgIHZhciBjcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpO1xuICAgICAgaWYgKGNzLnRyYW5zaXRpb25EdXJhdGlvbiA9PT0gJzBzJyB8fCBjcy5vcGFjaXR5ID09IDApIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIGNhbmNlbCBwcmV2aW91cyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuXG4gICAgaWYgKHRoaXMuX19vcGVuZWRSYWYpIHtcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fb3BlbmVkUmFmKTtcbiAgICAgIHRoaXMuX19vcGVuZWRSYWYgPSBudWxsO1xuICAgIH1cbiAgICAvLyBGb3JjZSByZWxheW91dCB0byBlbnN1cmUgcHJvcGVyIHRyYW5zaXRpb25zLlxuICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gICAgdGhpcy5fX29wZW5lZFJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9fb3BlbmVkUmFmID0gbnVsbDtcbiAgICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ29wZW5lZCcsIHRoaXMub3BlbmVkKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uRml0QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZml0LWJlaGF2aW9yL2lyb24tZml0LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblJlc2l6YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7dXNlU2hhZG93fSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9zZXR0aW5ncy5qcyc7XG5cbmltcG9ydCB7SXJvbkZvY3VzYWJsZXNIZWxwZXJ9IGZyb20gJy4vaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyc7XG5pbXBvcnQge0lyb25PdmVybGF5TWFuYWdlcn0gZnJvbSAnLi9pcm9uLW92ZXJsYXktbWFuYWdlci5qcyc7XG5pbXBvcnQge3B1c2hTY3JvbGxMb2NrLCByZW1vdmVTY3JvbGxMb2NrfSBmcm9tICcuL2lyb24tc2Nyb2xsLW1hbmFnZXIuanMnO1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25PdmVybGF5QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIG92ZXJsYXkgaXMgY3VycmVudGx5IGRpc3BsYXllZC5cbiAgICAgKi9cbiAgICBvcGVuZWQ6XG4gICAgICAgIHtvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJywgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgb3ZlcmxheSB3YXMgY2FuY2VsZWQgd2hlbiBpdCB3YXMgbGFzdCBjbG9zZWQuXG4gICAgICovXG4gICAgY2FuY2VsZWQ6IHtcbiAgICAgIG9ic2VydmVyOiAnX2NhbmNlbGVkQ2hhbmdlZCcsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzcGxheSBhIGJhY2tkcm9wIGJlaGluZCB0aGUgb3ZlcmxheS4gSXQgdHJhcHMgdGhlIGZvY3VzXG4gICAgICogd2l0aGluIHRoZSBsaWdodCBET00gb2YgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgd2l0aEJhY2tkcm9wOiB7XG4gICAgICBvYnNlcnZlcjogJ193aXRoQmFja2Ryb3BDaGFuZ2VkJyxcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYXV0by1mb2N1c2luZyB0aGUgb3ZlcmxheSBvciBjaGlsZCBub2RlcyB3aXRoXG4gICAgICogdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZWAgd2hlbiB0aGUgb3ZlcmxheSBpcyBvcGVuZWQuXG4gICAgICovXG4gICAgbm9BdXRvRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgY2FuY2VsaW5nIHRoZSBvdmVybGF5IHdpdGggdGhlIEVTQyBrZXkuXG4gICAgICovXG4gICAgbm9DYW5jZWxPbkVzY0tleToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBjYW5jZWxpbmcgdGhlIG92ZXJsYXkgYnkgY2xpY2tpbmcgb3V0c2lkZSBpdC5cbiAgICAgKi9cbiAgICBub0NhbmNlbE9uT3V0c2lkZUNsaWNrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb250YWlucyB0aGUgcmVhc29uKHMpIHRoaXMgb3ZlcmxheSB3YXMgbGFzdCBjbG9zZWQgKHNlZVxuICAgICAqIGBpcm9uLW92ZXJsYXktY2xvc2VkYCkuIGBJcm9uT3ZlcmxheUJlaGF2aW9yYCBwcm92aWRlcyB0aGUgYGNhbmNlbGVkYFxuICAgICAqIHJlYXNvbjsgaW1wbGVtZW50ZXJzIG9mIHRoZSBiZWhhdmlvciBjYW4gcHJvdmlkZSBvdGhlciByZWFzb25zIGluXG4gICAgICogYWRkaXRpb24gdG8gYGNhbmNlbGVkYC5cbiAgICAgKi9cbiAgICBjbG9zaW5nUmVhc29uOiB7XG4gICAgICAvLyB3YXMgYSBnZXR0ZXIgYmVmb3JlLCBidXQgbmVlZHMgdG8gYmUgYSBwcm9wZXJ0eSBzbyBvdGhlclxuICAgICAgLy8gYmVoYXZpb3JzIGNhbiBvdmVycmlkZSB0aGlzLlxuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgcmVzdG9yaW5nIG9mIGZvY3VzIHdoZW4gb3ZlcmxheSBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgcmVzdG9yZUZvY3VzT25DbG9zZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWxsb3cgY2xpY2tzIHRvIGdvIHRocm91Z2ggb3ZlcmxheXMuXG4gICAgICogV2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGlzIG92ZXJsYXksIHRoZSBjbGljayBtYXlcbiAgICAgKiBjbG9zZSB0aGUgb3ZlcmxheSBiZWxvdy5cbiAgICAgKi9cbiAgICBhbGxvd0NsaWNrVGhyb3VnaDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8ga2VlcCBvdmVybGF5IGFsd2F5cyBvbiB0b3AuXG4gICAgICovXG4gICAgYWx3YXlzT25Ub3A6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgd2hpY2ggYWN0aW9uIHRvIHBlcmZvcm0gd2hlbiBzY3JvbGwgb3V0c2lkZSBhbiBvcGVuZWQgb3ZlcmxheVxuICAgICAqIGhhcHBlbnMuIFBvc3NpYmxlIHZhbHVlczogbG9jayAtIGJsb2NrcyBzY3JvbGxpbmcgZnJvbSBoYXBwZW5pbmcsIHJlZml0IC1cbiAgICAgKiBjb21wdXRlcyB0aGUgbmV3IHBvc2l0aW9uIG9uIHRoZSBvdmVybGF5IGNhbmNlbCAtIGNhdXNlcyB0aGUgb3ZlcmxheSB0b1xuICAgICAqIGNsb3NlXG4gICAgICovXG4gICAgc2Nyb2xsQWN0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0Y3V0IHRvIGFjY2VzcyB0byB0aGUgb3ZlcmxheSBtYW5hZ2VyLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgeyFJcm9uT3ZlcmxheU1hbmFnZXJDbGFzc31cbiAgICAgKi9cbiAgICBfbWFuYWdlcjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IElyb25PdmVybGF5TWFuYWdlcixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5vZGUgYmVpbmcgZm9jdXNlZC5cbiAgICAgKiBAdHlwZSB7P05vZGV9XG4gICAgICovXG4gICAgX2ZvY3VzZWRDaGlsZDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH1cblxuICB9LFxuXG4gIGxpc3RlbmVyczogeydpcm9uLXJlc2l6ZSc6ICdfb25Jcm9uUmVzaXplJ30sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19fdXBkYXRlU2Nyb2xsT2JzZXJ2ZXJzKGlzQXR0YWNoZWQsIG9wZW5lZCwgc2Nyb2xsQWN0aW9uKSddLFxuXG4gIC8qKlxuICAgKiBUaGUgYmFja2Ryb3AgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUVsZW1lbnR9XG4gICAqL1xuICBnZXQgYmFja2Ryb3BFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9tYW5hZ2VyLmJhY2tkcm9wRWxlbWVudDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9kZSB0byBnaXZlIGZvY3VzIHRvLlxuICAgKiBAcmV0dXJuIHshTm9kZX1cbiAgICovXG4gIGdldCBfZm9jdXNOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkQ2hpbGQgfHwgZG9tKHRoaXMpLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdJykgfHwgdGhpcztcbiAgfSxcblxuICAvKipcbiAgICogQXJyYXkgb2Ygbm9kZXMgdGhhdCBjYW4gcmVjZWl2ZSBmb2N1cyAob3ZlcmxheSBpbmNsdWRlZCksIG9yZGVyZWQgYnlcbiAgICogYHRhYmluZGV4YC4gVGhpcyBpcyB1c2VkIHRvIHJldHJpZXZlIHdoaWNoIGlzIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGVcbiAgICogbm9kZXMgaW4gb3JkZXIgdG8gd3JhcCB0aGUgZm9jdXMgZm9yIG92ZXJsYXlzIGB3aXRoLWJhY2tkcm9wYC5cbiAgICpcbiAgICogSWYgeW91IGtub3cgd2hhdCBpcyB5b3VyIGNvbnRlbnQgKHNwZWNpZmljYWxseSB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlXG4gICAqIGNoaWxkcmVuKSwgeW91IGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byByZXR1cm4gb25seSBgW2ZpcnN0Rm9jdXNhYmxlLFxuICAgKiBsYXN0Rm9jdXNhYmxlXTtgXG4gICAqIEByZXR1cm4geyFBcnJheTwhTm9kZT59XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGdldCBfZm9jdXNhYmxlTm9kZXMoKSB7XG4gICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCB0byBza2lwIGNhbGxzIHRvIG5vdGlmeVJlc2l6ZSBhbmQgcmVmaXQgd2hpbGUgdGhlIG92ZXJsYXkgaXNcbiAgICAvLyBhbmltYXRpbmcuXG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgLy8gd2l0aC1iYWNrZHJvcCBuZWVkcyB0YWJpbmRleCB0byBiZSBzZXQgaW4gb3JkZXIgdG8gdHJhcCB0aGUgZm9jdXMuXG4gICAgLy8gSWYgaXQgaXMgbm90IHNldCwgSXJvbk92ZXJsYXlCZWhhdmlvciB3aWxsIHNldCBpdCwgYW5kIHJlbW92ZSBpdCBpZlxuICAgIC8vIHdpdGgtYmFja2Ryb3AgPSBmYWxzZS5cbiAgICB0aGlzLl9fc2hvdWxkUmVtb3ZlVGFiSW5kZXggPSBmYWxzZTtcbiAgICAvLyBVc2VkIGZvciB3cmFwcGluZyB0aGUgZm9jdXMgb24gVEFCIC8gU2hpZnQrVEFCLlxuICAgIHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGUgPSB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgPSBudWxsO1xuICAgIC8vIFVzZWQgYnkgdG8ga2VlcCB0cmFjayBvZiB0aGUgUkFGIGNhbGxiYWNrcy5cbiAgICB0aGlzLl9fcmFmcyA9IHt9O1xuICAgIC8vIEZvY3VzZWQgbm9kZSBiZWZvcmUgb3ZlcmxheSBnZXRzIG9wZW5lZC4gQ2FuIGJlIHJlc3RvcmVkIG9uIGNsb3NlLlxuICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAvLyBTY3JvbGwgaW5mbyB0byBiZSByZXN0b3JlZC5cbiAgICB0aGlzLl9fc2Nyb2xsVG9wID0gdGhpcy5fX3Njcm9sbExlZnQgPSBudWxsO1xuICAgIHRoaXMuX19vbkNhcHR1cmVTY3JvbGwgPSB0aGlzLl9fb25DYXB0dXJlU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgLy8gUm9vdCBub2RlcyBob3N0aW5nIHRoZSBvdmVybGF5LCB1c2VkIHRvIGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50cyBvbiB0aGVtLlxuICAgIHRoaXMuX19yb290Tm9kZXMgPSBudWxsO1xuICAgIHRoaXMuX2Vuc3VyZVNldHVwKCk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIENhbGwgX29wZW5lZENoYW5nZWQgaGVyZSBzbyB0aGF0IHBvc2l0aW9uIGNhbiBiZSBjb21wdXRlZCBjb3JyZWN0bHkuXG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWRDaGFuZ2VkKHRoaXMub3BlbmVkKTtcbiAgICB9XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBkb20odGhpcykub2JzZXJ2ZU5vZGVzKHRoaXMuX29uTm9kZXNDaGFuZ2UpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBkb20odGhpcykudW5vYnNlcnZlTm9kZXModGhpcy5fb2JzZXJ2ZXIpO1xuICAgIHRoaXMuX29ic2VydmVyID0gbnVsbDtcbiAgICBmb3IgKHZhciBjYiBpbiB0aGlzLl9fcmFmcykge1xuICAgICAgaWYgKHRoaXMuX19yYWZzW2NiXSAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9fcmFmc1tjYl0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fcmFmcyA9IHt9O1xuICAgIHRoaXMuX21hbmFnZXIucmVtb3ZlT3ZlcmxheSh0aGlzKTtcblxuICAgIC8vIFdlIGdvdCBkZXRhY2hlZCB3aGlsZSBhbmltYXRpbmcsIGVuc3VyZSB3ZSBzaG93L2hpZGUgdGhlIG92ZXJsYXlcbiAgICAvLyBhbmQgZmlyZSBpcm9uLW92ZXJsYXktb3BlbmVkL2Nsb3NlZCBldmVudCFcbiAgICBpZiAodGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fZmluaXNoUmVuZGVyT3BlbmVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1cyBpZiBuZWNlc3NhcnkuXG4gICAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcbiAgICAgICAgdGhpcy5fZmluaXNoUmVuZGVyQ2xvc2VkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgb3ZlcmxheS5cbiAgICovXG4gIHRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPcGVuIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2xvc2UgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7RXZlbnQ9fSBldmVudCBUaGUgb3JpZ2luYWwgZXZlbnRcbiAgICovXG4gIGNhbmNlbDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgY2FuY2VsRXZlbnQgPVxuICAgICAgICB0aGlzLmZpcmUoJ2lyb24tb3ZlcmxheS1jYW5jZWxlZCcsIGV2ZW50LCB7Y2FuY2VsYWJsZTogdHJ1ZX0pO1xuICAgIGlmIChjYW5jZWxFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0Q2FuY2VsZWQodHJ1ZSk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogSW52YWxpZGF0ZXMgdGhlIGNhY2hlZCB0YWJiYWJsZSBub2Rlcy4gVG8gYmUgY2FsbGVkIHdoZW4gYW55IG9mIHRoZVxuICAgKiBmb2N1c2FibGUgY29udGVudCBjaGFuZ2VzIChlLmcuIGEgYnV0dG9uIGlzIGRpc2FibGVkKS5cbiAgICovXG4gIGludmFsaWRhdGVUYWJiYWJsZXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGUgPSB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgPSBudWxsO1xuICB9LFxuXG4gIF9lbnN1cmVTZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlTZXR1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vdmVybGF5U2V0dXAgPSB0cnVlO1xuICAgIHRoaXMuc3R5bGUub3V0bGluZSA9ICdub25lJztcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGBvcGVuZWRgIGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wZW5lZFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24ob3BlbmVkKSB7XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgLy8gRGVmZXIgYW55IGFuaW1hdGlvbi1yZWxhdGVkIGNvZGUgb24gYXR0YWNoZWRcbiAgICAvLyAoX29wZW5lZENoYW5nZWQgZ2V0cyBjYWxsZWQgYWdhaW4gb24gYXR0YWNoZWQpLlxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgIC8vIERlcmFmIGZvciBub24tYmxvY2tpbmcgcmVuZGVyaW5nLlxuICAgIHRoaXMuX19kZXJhZignX19vcGVuZWRDaGFuZ2VkJywgdGhpcy5fX29wZW5lZENoYW5nZWQpO1xuICB9LFxuXG4gIF9jYW5jZWxlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbiA9IHRoaXMuY2xvc2luZ1JlYXNvbiB8fCB7fTtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24uY2FuY2VsZWQgPSB0aGlzLmNhbmNlbGVkO1xuICB9LFxuXG4gIF93aXRoQmFja2Ryb3BDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiB0YWJpbmRleCBpcyBhbHJlYWR5IHNldCwgbm8gbmVlZCB0byBvdmVycmlkZSBpdC5cbiAgICBpZiAodGhpcy53aXRoQmFja2Ryb3AgJiYgIXRoaXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgIHRoaXMuX19zaG91bGRSZW1vdmVUYWJJbmRleCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9fc2hvdWxkUmVtb3ZlVGFiSW5kZXgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpO1xuICAgICAgdGhpcy5fX3Nob3VsZFJlbW92ZVRhYkluZGV4ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuX21hbmFnZXIudHJhY2tCYWNrZHJvcCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogdGFza3Mgd2hpY2ggbXVzdCBvY2N1ciBiZWZvcmUgb3BlbmluZzsgZS5nLiBtYWtpbmcgdGhlIGVsZW1lbnQgdmlzaWJsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX3ByZXBhcmVSZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFN0b3JlIGZvY3VzZWQgbm9kZS5cbiAgICB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZSA9IHRoaXMuX21hbmFnZXIuZGVlcEFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBOZWVkZWQgdG8gY2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBvdmVybGF5IHNvIHRoYXQgdHJhbnNpdGlvbnMgb24gaXRzXG4gICAgLy8gc2l6ZSB3aWxsIGhhdmUgdGhlIGNvcnJlY3Qgc3RhcnRpbmcgcG9pbnRzLlxuICAgIHRoaXMuX3ByZXBhcmVQb3NpdGlvbmluZygpO1xuICAgIHRoaXMucmVmaXQoKTtcbiAgICB0aGlzLl9maW5pc2hQb3NpdGlvbmluZygpO1xuXG4gICAgLy8gU2FmYXJpIHdpbGwgYXBwbHkgdGhlIGZvY3VzIHRvIHRoZSBhdXRvZm9jdXMgZWxlbWVudCB3aGVuIGRpc3BsYXllZFxuICAgIC8vIGZvciB0aGUgZmlyc3QgdGltZSwgc28gd2UgbWFrZSBzdXJlIHRvIHJldHVybiB0aGUgZm9jdXMgd2hlcmUgaXQgd2FzLlxuICAgIGlmICh0aGlzLm5vQXV0b0ZvY3VzICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuX2ZvY3VzTm9kZSkge1xuICAgICAgdGhpcy5fZm9jdXNOb2RlLmJsdXIoKTtcbiAgICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyB3aGljaCBjYXVzZSB0aGUgb3ZlcmxheSB0byBhY3R1YWxseSBvcGVuOyB0eXBpY2FsbHkgcGxheSBhblxuICAgKiBhbmltYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9yZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZpbmlzaFJlbmRlck9wZW5lZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyB3aGljaCBjYXVzZSB0aGUgb3ZlcmxheSB0byBhY3R1YWxseSBjbG9zZTsgdHlwaWNhbGx5IHBsYXkgYW5cbiAgICogYW5pbWF0aW9uLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfcmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9maW5pc2hSZW5kZXJDbG9zZWQoKTtcbiAgfSxcblxuICAvKipcbiAgICogVGFza3MgdG8gYmUgcGVyZm9ybWVkIGF0IHRoZSBlbmQgb2Ygb3BlbiBhY3Rpb24uIFdpbGwgZmlyZVxuICAgKiBgaXJvbi1vdmVybGF5LW9wZW5lZGAuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9maW5pc2hSZW5kZXJPcGVuZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gICAgdGhpcy5fX2lzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLmZpcmUoJ2lyb24tb3ZlcmxheS1vcGVuZWQnKTtcbiAgfSxcblxuICAvKipcbiAgICogVGFza3MgdG8gYmUgcGVyZm9ybWVkIGF0IHRoZSBlbmQgb2YgY2xvc2UgYWN0aW9uLiBXaWxsIGZpcmVcbiAgICogYGlyb24tb3ZlcmxheS1jbG9zZWRgLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfZmluaXNoUmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBIaWRlIHRoZSBvdmVybGF5LlxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBSZXNldCB6LWluZGV4IG9ubHkgYXQgdGhlIGVuZCBvZiB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMuc3R5bGUuekluZGV4ID0gJyc7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICB0aGlzLl9faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmZpcmUoJ2lyb24tb3ZlcmxheS1jbG9zZWQnLCB0aGlzLmNsb3NpbmdSZWFzb24pO1xuICB9LFxuXG4gIF9wcmVwYXJlUG9zaXRpb25pbmc6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUudHJhbnNpdGlvbiA9IHRoaXMuc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ25vbmUnO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9LFxuXG4gIF9maW5pc2hQb3NpdGlvbmluZzogZnVuY3Rpb24oKSB7XG4gICAgLy8gRmlyc3QsIG1ha2UgaXQgaW52aXNpYmxlICYgcmVhY3RpdmF0ZSBhbmltYXRpb25zLlxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBGb3JjZSByZWZsb3cgYmVmb3JlIHJlLWVuYWJsaW5nIGFuaW1hdGlvbnMgc28gdGhhdCB0aGV5IGRvbid0IHN0YXJ0LlxuICAgIC8vIFNldCBzY3JvbGxUb3AgdG8gaXRzZWxmIHNvIHRoYXQgQ2xvc3VyZSBDb21waWxlciBkb2Vzbid0IHJlbW92ZSB0aGlzLlxuICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gICAgdGhpcy5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gJyc7XG4gICAgdGhpcy5zdHlsZS50cmFuc2Zvcm0gPSB0aGlzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICcnO1xuICAgIC8vIE5vdyB0aGF0IGFuaW1hdGlvbnMgYXJlIGVuYWJsZWQsIG1ha2UgaXQgdmlzaWJsZSBhZ2FpblxuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgIC8vIEZvcmNlIHJlZmxvdywgc28gdGhhdCBmb2xsb3dpbmcgYW5pbWF0aW9ucyBhcmUgcHJvcGVybHkgc3RhcnRlZC5cbiAgICAvLyBTZXQgc2Nyb2xsVG9wIHRvIGl0c2VsZiBzbyB0aGF0IENsb3N1cmUgQ29tcGlsZXIgZG9lc24ndCByZW1vdmUgdGhpcy5cbiAgICB0aGlzLnNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsVG9wO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGZvY3VzIGFjY29yZGluZyB0byB0aGUgb3BlbmVkIHN0YXRlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfYXBwbHlGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICBpZiAoIXRoaXMubm9BdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNOb2RlLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlc3RvcmUgZm9jdXMuXG4gICAgICBpZiAodGhpcy5yZXN0b3JlRm9jdXNPbkNsb3NlICYmIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlKSB7XG4gICAgICAgIC8vIElmIHRoZSBhY3RpdmVFbGVtZW50IGlzIGA8Ym9keT5gIG9yIGluc2lkZSB0aGUgb3ZlcmxheSxcbiAgICAgICAgLy8gd2UgYXJlIGFsbG93ZWQgdG8gcmVzdG9yZSB0aGUgZm9jdXMuIEluIGFsbCB0aGUgb3RoZXJcbiAgICAgICAgLy8gY2FzZXMgZm9jdXMgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGVsc2V3aGVyZSBieSBhbm90aGVyXG4gICAgICAgIC8vIGNvbXBvbmVudCBvciBieSBhbiB1c2VyIGludGVyYWN0aW9uIChlLmcuIGNsaWNrIG9uIGFcbiAgICAgICAgLy8gYnV0dG9uIG91dHNpZGUgdGhlIG92ZXJsYXkpLlxuICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHRoaXMuX21hbmFnZXIuZGVlcEFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8XG4gICAgICAgICAgICBkb20odGhpcykuZGVlcENvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgdGhpcy5fZm9jdXNOb2RlLmJsdXIoKTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRDaGlsZCA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIChjbG9zZXMpIHRoZSBvdmVybGF5LiBDYWxsIHdoZW4gY2xpY2sgaGFwcGVucyBvdXRzaWRlIHRoZSBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uQ2FwdHVyZUNsaWNrOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrKSB7XG4gICAgICB0aGlzLmNhbmNlbChldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBLZWVwcyB0cmFjayBvZiB0aGUgZm9jdXNlZCBjaGlsZC4gSWYgd2l0aEJhY2tkcm9wLCB0cmFwcyBmb2N1cyB3aXRoaW5cbiAgICogb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbkNhcHR1cmVGb2N1czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMud2l0aEJhY2tkcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwYXRoID0gZG9tKGV2ZW50KS5wYXRoO1xuICAgIGlmIChwYXRoLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNlZENoaWxkID0gcGF0aFswXTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIEVTQyBrZXkgZXZlbnQgYW5kIGNhbmNlbHMgKGNsb3NlcykgdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25DYXB0dXJlRXNjOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5ub0NhbmNlbE9uRXNjS2V5KSB7XG4gICAgICB0aGlzLmNhbmNlbChldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIFRBQiBrZXkgZXZlbnRzIHRvIHRyYWNrIGZvY3VzIGNoYW5nZXMuXG4gICAqIFdpbGwgd3JhcCBmb2N1cyBmb3Igb3ZlcmxheXMgd2l0aEJhY2tkcm9wLlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uQ2FwdHVyZVRhYjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMud2l0aEJhY2tkcm9wKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX19lbnN1cmVGaXJzdExhc3RGb2N1c2FibGVzKCk7XG4gICAgLy8gVEFCIHdyYXBzIGZyb20gbGFzdCB0byBmaXJzdCBmb2N1c2FibGUuXG4gICAgLy8gU2hpZnQgKyBUQUIgd3JhcHMgZnJvbSBmaXJzdCB0byBsYXN0IGZvY3VzYWJsZS5cbiAgICB2YXIgc2hpZnQgPSBldmVudC5zaGlmdEtleTtcbiAgICB2YXIgbm9kZVRvQ2hlY2sgPVxuICAgICAgICBzaGlmdCA/IHRoaXMuX19maXJzdEZvY3VzYWJsZU5vZGUgOiB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGU7XG4gICAgdmFyIG5vZGVUb1NldCA9XG4gICAgICAgIHNoaWZ0ID8gdGhpcy5fX2xhc3RGb2N1c2FibGVOb2RlIDogdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZTtcbiAgICB2YXIgc2hvdWxkV3JhcCA9IGZhbHNlO1xuICAgIGlmIChub2RlVG9DaGVjayA9PT0gbm9kZVRvU2V0KSB7XG4gICAgICAvLyBJZiBub2RlVG9DaGVjayBpcyB0aGUgc2FtZSBhcyBub2RlVG9TZXQsIGl0IG1lYW5zIHdlIGhhdmUgYW4gb3ZlcmxheVxuICAgICAgLy8gd2l0aCAwIG9yIDEgZm9jdXNhYmxlczsgaW4gZWl0aGVyIGNhc2Ugd2Ugc3RpbGwgbmVlZCB0byB0cmFwIHRoZVxuICAgICAgLy8gZm9jdXMgd2l0aGluIHRoZSBvdmVybGF5LlxuICAgICAgc2hvdWxkV3JhcCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEluIGRvbT1zaGFkb3csIHRoZSBtYW5hZ2VyIHdpbGwgcmVjZWl2ZSBmb2N1cyBjaGFuZ2VzIG9uIHRoZSBtYWluXG4gICAgICAvLyByb290IGJ1dCBub3QgdGhlIG9uZXMgd2l0aGluIG90aGVyIHNoYWRvdyByb290cywgc28gd2UgY2FuJ3QgcmVseSBvblxuICAgICAgLy8gX2ZvY3VzZWRDaGlsZCwgYnV0IHdlIHNob3VsZCBjaGVjayB0aGUgZGVlcGVzdCBhY3RpdmUgZWxlbWVudC5cbiAgICAgIHZhciBmb2N1c2VkTm9kZSA9IHRoaXMuX21hbmFnZXIuZGVlcEFjdGl2ZUVsZW1lbnQ7XG4gICAgICAvLyBJZiB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgbm90IHRoZSBub2RlVG9DaGVjayBidXQgdGhlIG92ZXJsYXkgaXRzZWxmLFxuICAgICAgLy8gaXQgbWVhbnMgdGhlIGZvY3VzIGlzIGFib3V0IHRvIGdvIG91dHNpZGUgdGhlIG92ZXJsYXksIGhlbmNlIHdlXG4gICAgICAvLyBzaG91bGQgcHJldmVudCB0aGF0IChlLmcuIHVzZXIgb3BlbnMgdGhlIG92ZXJsYXkgYW5kIGhpdCBTaGlmdCtUQUIpLlxuICAgICAgc2hvdWxkV3JhcCA9IChmb2N1c2VkTm9kZSA9PT0gbm9kZVRvQ2hlY2sgfHwgZm9jdXNlZE5vZGUgPT09IHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRXcmFwKSB7XG4gICAgICAvLyBXaGVuIHRoZSBvdmVybGF5IGNvbnRhaW5zIHRoZSBsYXN0IGZvY3VzYWJsZSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudFxuICAgICAgLy8gYW5kIGl0J3MgYWxyZWFkeSBmb2N1c2VkLCBwcmVzc2luZyBUQUIgd291bGQgbW92ZSB0aGUgZm9jdXMgb3V0c2lkZVxuICAgICAgLy8gdGhlIGRvY3VtZW50IChlLmcuIHRvIHRoZSBicm93c2VyIHNlYXJjaCBiYXIpLiBTaW1pbGFybHksIHdoZW4gdGhlXG4gICAgICAvLyBvdmVybGF5IGNvbnRhaW5zIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudCBvZiB0aGUgZG9jdW1lbnQgYW5kIGl0J3NcbiAgICAgIC8vIGFscmVhZHkgZm9jdXNlZCwgcHJlc3NpbmcgU2hpZnQrVEFCIHdvdWxkIG1vdmUgdGhlIGZvY3VzIG91dHNpZGUgdGhlXG4gICAgICAvLyBkb2N1bWVudCAoZS5nLiB0byB0aGUgYnJvd3NlciBzZWFyY2ggYmFyKS5cbiAgICAgIC8vIEluIGJvdGggY2FzZXMsIHdlIHdvdWxkIG5vdCByZWNlaXZlIGEgZm9jdXMgZXZlbnQsIGJ1dCBvbmx5IGEgYmx1ci5cbiAgICAgIC8vIEluIG9yZGVyIHRvIGFjaGlldmUgZm9jdXMgd3JhcHBpbmcsIHdlIHByZXZlbnQgdGhpcyBUQUIgZXZlbnQgYW5kXG4gICAgICAvLyBmb3JjZSB0aGUgZm9jdXMuIFRoaXMgd2lsbCBhbHNvIHByZXZlbnQgdGhlIGZvY3VzIHRvIHRlbXBvcmFyaWx5IG1vdmVcbiAgICAgIC8vIG91dHNpZGUgdGhlIG92ZXJsYXksIHdoaWNoIG1pZ2h0IGNhdXNlIHNjcm9sbGluZy5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9mb2N1c2VkQ2hpbGQgPSBub2RlVG9TZXQ7XG4gICAgICB0aGlzLl9hcHBseUZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZWZpdHMgaWYgdGhlIG92ZXJsYXkgaXMgb3BlbmVkIGFuZCBub3QgYW5pbWF0aW5nLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25Jcm9uUmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgIXRoaXMuX19pc0FuaW1hdGluZykge1xuICAgICAgdGhpcy5fX2RlcmFmKCdyZWZpdCcsIHRoaXMucmVmaXQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogV2lsbCBjYWxsIG5vdGlmeVJlc2l6ZSBpZiBvdmVybGF5IGlzIG9wZW5lZC5cbiAgICogQ2FuIGJlIG92ZXJyaWRkZW4gaW4gb3JkZXIgdG8gYXZvaWQgbXVsdGlwbGUgb2JzZXJ2ZXJzIG9uIHRoZSBzYW1lIG5vZGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbk5vZGVzQ2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgIXRoaXMuX19pc0FuaW1hdGluZykge1xuICAgICAgLy8gSXQgbWlnaHQgaGF2ZSBhZGRlZCBmb2N1c2FibGUgbm9kZXMsIHNvIGludmFsaWRhdGUgY2FjaGVkIHZhbHVlcy5cbiAgICAgIHRoaXMuaW52YWxpZGF0ZVRhYmJhYmxlcygpO1xuICAgICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZSBub2Rlcy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fZW5zdXJlRmlyc3RMYXN0Rm9jdXNhYmxlczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvY3VzYWJsZU5vZGVzID0gdGhpcy5fZm9jdXNhYmxlTm9kZXM7XG4gICAgdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZSA9IGZvY3VzYWJsZU5vZGVzWzBdO1xuICAgIHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZSA9IGZvY3VzYWJsZU5vZGVzW2ZvY3VzYWJsZU5vZGVzLmxlbmd0aCAtIDFdO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyBleGVjdXRlZCB3aGVuIG9wZW5lZCBjaGFuZ2VzOiBwcmVwYXJlIGZvciB0aGUgb3BlbmluZywgbW92ZSB0aGVcbiAgICogZm9jdXMsIHVwZGF0ZSB0aGUgbWFuYWdlciwgcmVuZGVyIG9wZW5lZC9jbG9zZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgLy8gTWFrZSBvdmVybGF5IHZpc2libGUsIHRoZW4gYWRkIGl0IHRvIHRoZSBtYW5hZ2VyLlxuICAgICAgdGhpcy5fcHJlcGFyZVJlbmRlck9wZW5lZCgpO1xuICAgICAgdGhpcy5fbWFuYWdlci5hZGRPdmVybGF5KHRoaXMpO1xuICAgICAgLy8gTW92ZSB0aGUgZm9jdXMgdG8gdGhlIGNoaWxkIG5vZGUgd2l0aCBbYXV0b2ZvY3VzXS5cbiAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcblxuICAgICAgdGhpcy5fcmVuZGVyT3BlbmVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBvdmVybGF5LCB0aGVuIHJlc3RvcmUgdGhlIGZvY3VzIGJlZm9yZSBhY3R1YWxseSBjbG9zaW5nLlxuICAgICAgdGhpcy5fbWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuICAgICAgdGhpcy5fYXBwbHlGb2N1cygpO1xuXG4gICAgICB0aGlzLl9yZW5kZXJDbG9zZWQoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlYm91bmNlcyB0aGUgZXhlY3V0aW9uIG9mIGEgY2FsbGJhY2sgdG8gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLlxuICAgKiBAcGFyYW0geyFzdHJpbmd9IGpvYm5hbWVcbiAgICogQHBhcmFtIHshRnVuY3Rpb259IGNhbGxiYWNrIEFsd2F5cyBib3VuZCB0byBgdGhpc2BcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fZGVyYWY6IGZ1bmN0aW9uKGpvYm5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJhZnMgPSB0aGlzLl9fcmFmcztcbiAgICBpZiAocmFmc1tqb2JuYW1lXSAhPT0gbnVsbCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmc1tqb2JuYW1lXSk7XG4gICAgfVxuICAgIHJhZnNbam9ibmFtZV0gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gbmV4dEFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgcmFmc1tqb2JuYW1lXSA9IG51bGw7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNBdHRhY2hlZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5lZFxuICAgKiBAcGFyYW0ge3N0cmluZz19IHNjcm9sbEFjdGlvblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX191cGRhdGVTY3JvbGxPYnNlcnZlcnM6IGZ1bmN0aW9uKGlzQXR0YWNoZWQsIG9wZW5lZCwgc2Nyb2xsQWN0aW9uKSB7XG4gICAgaWYgKCFpc0F0dGFjaGVkIHx8ICFvcGVuZWQgfHwgIXRoaXMuX19pc1ZhbGlkU2Nyb2xsQWN0aW9uKHNjcm9sbEFjdGlvbikpIHtcbiAgICAgIHJlbW92ZVNjcm9sbExvY2sodGhpcyk7XG4gICAgICB0aGlzLl9fcmVtb3ZlU2Nyb2xsTGlzdGVuZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzY3JvbGxBY3Rpb24gPT09ICdsb2NrJykge1xuICAgICAgICB0aGlzLl9fc2F2ZVNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIHB1c2hTY3JvbGxMb2NrKHRoaXMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX2FkZFNjcm9sbExpc3RlbmVycygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fYWRkU2Nyb2xsTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX19yb290Tm9kZXMpIHtcbiAgICAgIHRoaXMuX19yb290Tm9kZXMgPSBbXTtcbiAgICAgIC8vIExpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50cyBpbiBhbGwgc2hhZG93Um9vdHMgaG9zdGluZyB0aGlzIG92ZXJsYXkgb25seVxuICAgICAgLy8gd2hlbiBpbiBuYXRpdmUgU2hhZG93RE9NLlxuICAgICAgaWYgKHVzZVNoYWRvdykge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXM7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAmJiBub2RlLmhvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX19yb290Tm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbm9kZSA9IG5vZGUuaG9zdCB8fCBub2RlLmFzc2lnbmVkU2xvdCB8fCBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX19yb290Tm9kZXMucHVzaChkb2N1bWVudCk7XG4gICAgfVxuICAgIHRoaXMuX19yb290Tm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fX29uQ2FwdHVyZVNjcm9sbCwge1xuICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3JlbW92ZVNjcm9sbExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19yb290Tm9kZXMpIHtcbiAgICAgIHRoaXMuX19yb290Tm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9fb25DYXB0dXJlU2Nyb2xsLCB7XG4gICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICBwYXNzaXZlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5fX3Jvb3ROb2RlcyA9IG51bGw7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IHNjcm9sbEFjdGlvblxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19pc1ZhbGlkU2Nyb2xsQWN0aW9uOiBmdW5jdGlvbihzY3JvbGxBY3Rpb24pIHtcbiAgICByZXR1cm4gc2Nyb2xsQWN0aW9uID09PSAnbG9jaycgfHwgc2Nyb2xsQWN0aW9uID09PSAncmVmaXQnIHx8XG4gICAgICAgIHNjcm9sbEFjdGlvbiA9PT0gJ2NhbmNlbCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX29uQ2FwdHVyZVNjcm9sbDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHNjcm9sbCBvdXRzaWRlIHRoZSBvdmVybGF5LlxuICAgIGlmIChkb20oZXZlbnQpLnBhdGguaW5kZXhPZih0aGlzKSA+PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zY3JvbGxBY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2xvY2snOlxuICAgICAgICAvLyBOT1RFOiBzY3JvbGxpbmcgbWlnaHQgaGFwcGVuIGlmIGEgc2Nyb2xsIGV2ZW50IGlzIG5vdCBjYW5jZWxsYWJsZSwgb3JcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VkIGtleXMgdGhhdCBjYXVzZSBzY3JvbGxpbmcgKHRoZXkncmUgbm90IHByZXZlbnRlZCBpblxuICAgICAgICAvLyBvcmRlciBub3QgdG8gYnJlYWsgYTExeSBmZWF0dXJlcyBsaWtlIG5hdmlnYXRlIHdpdGggYXJyb3cga2V5cykuXG4gICAgICAgIHRoaXMuX19yZXN0b3JlU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZWZpdCc6XG4gICAgICAgIHRoaXMuX19kZXJhZigncmVmaXQnLCB0aGlzLnJlZml0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICB0aGlzLmNhbmNlbChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTWVtb2l6ZXMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgb3V0c2lkZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fc2F2ZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCkge1xuICAgICAgdGhpcy5fX3Njcm9sbFRvcCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgdGhpcy5fX3Njcm9sbExlZnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpbmNlIHdlIGRvbid0IGtub3cgaWYgaXMgdGhlIGJvZHkgb3IgaHRtbCwgZ2V0IG1heC5cbiAgICAgIHRoaXMuX19zY3JvbGxUb3AgPVxuICAgICAgICAgIE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wKTtcbiAgICAgIHRoaXMuX19zY3JvbGxMZWZ0ID0gTWF0aC5tYXgoXG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsIGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgb3V0c2lkZSBzY3JvbGxpbmcgZWxlbWVudC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fcmVzdG9yZVNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCkge1xuICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLl9fc2Nyb2xsVG9wO1xuICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy5fX3Njcm9sbExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNpbmNlIHdlIGRvbid0IGtub3cgaWYgaXMgdGhlIGJvZHkgb3IgaHRtbCwgc2V0IGJvdGguXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPVxuICAgICAgICAgIHRoaXMuX19zY3JvbGxUb3A7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCA9XG4gICAgICAgICAgdGhpcy5fX3Njcm9sbExlZnQ7XG4gICAgfVxuICB9LFxuXG59O1xuXG4vKipcbiAgVXNlIGBQb2x5bWVyLklyb25PdmVybGF5QmVoYXZpb3JgIHRvIGltcGxlbWVudCBhbiBlbGVtZW50IHRoYXQgY2FuIGJlIGhpZGRlblxuICBvciBzaG93biwgYW5kIGRpc3BsYXlzIG9uIHRvcCBvZiBvdGhlciBjb250ZW50LiBJdCBpbmNsdWRlcyBhbiBvcHRpb25hbFxuICBiYWNrZHJvcCwgYW5kIGNhbiBiZSB1c2VkIHRvIGltcGxlbWVudCBhIHZhcmlldHkgb2YgVUkgY29udHJvbHMgaW5jbHVkaW5nXG4gIGRpYWxvZ3MgYW5kIGRyb3AgZG93bnMuIE11bHRpcGxlIG92ZXJsYXlzIG1heSBiZSBkaXNwbGF5ZWQgYXQgb25jZS5cblxuICBTZWUgdGhlIFtkZW1vIHNvdXJjZVxuICBjb2RlXShodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24tb3ZlcmxheS1iZWhhdmlvci9ibG9iL21hc3Rlci9kZW1vL3NpbXBsZS1vdmVybGF5Lmh0bWwpXG4gIGZvciBhbiBleGFtcGxlLlxuXG4gICMjIyBDbG9zaW5nIGFuZCBjYW5jZWxpbmdcblxuICBBbiBvdmVybGF5IG1heSBiZSBoaWRkZW4gYnkgY2xvc2luZyBvciBjYW5jZWxpbmcuIFRoZSBkaWZmZXJlbmNlIGJldHdlZW4gY2xvc2VcbiAgYW5kIGNhbmNlbCBpcyB1c2VyIGludGVudC4gQ2xvc2luZyBnZW5lcmFsbHkgaW1wbGllcyB0aGF0IHRoZSB1c2VyXG4gIGFja25vd2xlZGdlZCB0aGUgY29udGVudCBvbiB0aGUgb3ZlcmxheS4gQnkgZGVmYXVsdCwgaXQgd2lsbCBjYW5jZWwgd2hlbmV2ZXJcbiAgdGhlIHVzZXIgdGFwcyBvdXRzaWRlIGl0IG9yIHByZXNzZXMgdGhlIGVzY2FwZSBrZXkuIFRoaXMgYmVoYXZpb3IgaXNcbiAgY29uZmlndXJhYmxlIHdpdGggdGhlIGBuby1jYW5jZWwtb24tZXNjLWtleWAgYW5kIHRoZVxuICBgbm8tY2FuY2VsLW9uLW91dHNpZGUtY2xpY2tgIHByb3BlcnRpZXMuIGBjbG9zZSgpYCBzaG91bGQgYmUgY2FsbGVkIGV4cGxpY2l0bHlcbiAgYnkgdGhlIGltcGxlbWVudGVyIHdoZW4gdGhlIHVzZXIgaW50ZXJhY3RzIHdpdGggYSBjb250cm9sIGluIHRoZSBvdmVybGF5XG4gIGVsZW1lbnQuIFdoZW4gdGhlIGRpYWxvZyBpcyBjYW5jZWxlZCwgdGhlIG92ZXJsYXkgZmlyZXMgYW5cbiAgJ2lyb24tb3ZlcmxheS1jYW5jZWxlZCcgZXZlbnQuIENhbGwgYHByZXZlbnREZWZhdWx0YCBvbiB0aGlzIGV2ZW50IHRvIHByZXZlbnRcbiAgdGhlIG92ZXJsYXkgZnJvbSBjbG9zaW5nLlxuXG4gICMjIyBQb3NpdGlvbmluZ1xuXG4gIEJ5IGRlZmF1bHQgdGhlIGVsZW1lbnQgaXMgc2l6ZWQgYW5kIHBvc2l0aW9uZWQgdG8gZml0IGFuZCBjZW50ZXJlZCBpbnNpZGUgdGhlXG4gIHdpbmRvdy4gWW91IGNhbiBwb3NpdGlvbiBhbmQgc2l6ZSBpdCBtYW51YWxseSB1c2luZyBDU1MuIFNlZVxuICBgUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgLlxuXG4gICMjIyBCYWNrZHJvcFxuXG4gIFNldCB0aGUgYHdpdGgtYmFja2Ryb3BgIGF0dHJpYnV0ZSB0byBkaXNwbGF5IGEgYmFja2Ryb3AgYmVoaW5kIHRoZSBvdmVybGF5LlxuICBUaGUgYmFja2Ryb3AgaXMgYXBwZW5kZWQgdG8gYDxib2R5PmAgYW5kIGlzIG9mIHR5cGUgYDxpcm9uLW92ZXJsYXktYmFja2Ryb3A+YC5cbiAgU2VlIGl0cyBkb2MgcGFnZSBmb3Igc3R5bGluZyBvcHRpb25zLlxuXG4gIEluIGFkZGl0aW9uLCBgd2l0aC1iYWNrZHJvcGAgd2lsbCB3cmFwIHRoZSBmb2N1cyB3aXRoaW4gdGhlIGNvbnRlbnQgaW4gdGhlXG4gIGxpZ2h0IERPTS4gT3ZlcnJpZGUgdGhlIFtgX2ZvY3VzYWJsZU5vZGVzYFxuICBnZXR0ZXJdKCNQb2x5bWVyLklyb25PdmVybGF5QmVoYXZpb3I6cHJvcGVydHktX2ZvY3VzYWJsZU5vZGVzKSB0byBhY2hpZXZlIGFcbiAgZGlmZmVyZW50IGJlaGF2aW9yLlxuXG4gICMjIyBMaW1pdGF0aW9uc1xuXG4gIFRoZSBlbGVtZW50IGlzIHN0eWxlZCB0byBhcHBlYXIgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgYnkgc2V0dGluZyBpdHNcbiAgYHotaW5kZXhgIHByb3BlcnR5LiBZb3UgbXVzdCBlbnN1cmUgbm8gZWxlbWVudCBoYXMgYSBzdGFja2luZyBjb250ZXh0IHdpdGggYVxuICBoaWdoZXIgYHotaW5kZXhgIHRoYW4gaXRzIHBhcmVudCBzdGFja2luZyBjb250ZXh0LiBZb3Ugc2hvdWxkIHBsYWNlIHRoaXNcbiAgZWxlbWVudCBhcyBhIGNoaWxkIG9mIGA8Ym9keT5gIHdoZW5ldmVyIHBvc3NpYmxlLlxuXG4gIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uT3ZlcmxheUJlaGF2aW9yID1cbiAgICBbSXJvbkZpdEJlaGF2aW9yLCBJcm9uUmVzaXphYmxlQmVoYXZpb3IsIElyb25PdmVybGF5QmVoYXZpb3JJbXBsXTtcblxuLyoqXG4gKiBGaXJlZCBhZnRlciB0aGUgb3ZlcmxheSBvcGVucy5cbiAqIEBldmVudCBpcm9uLW92ZXJsYXktb3BlbmVkXG4gKi9cblxuLyoqXG4gKiBGaXJlZCB3aGVuIHRoZSBvdmVybGF5IGlzIGNhbmNlbGVkLCBidXQgYmVmb3JlIGl0IGlzIGNsb3NlZC5cbiAqIEBldmVudCBpcm9uLW92ZXJsYXktY2FuY2VsZWRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBjbG9zaW5nIG9mIHRoZSBvdmVybGF5IGNhbiBiZSBwcmV2ZW50ZWRcbiAqIGJ5IGNhbGxpbmcgYGV2ZW50LnByZXZlbnREZWZhdWx0KClgLiBUaGUgYGV2ZW50LmRldGFpbGAgaXMgdGhlIG9yaWdpbmFsIGV2ZW50XG4gKiB0aGF0IG9yaWdpbmF0ZWQgdGhlIGNhbmNlbGluZyAoZS5nLiBFU0Mga2V5Ym9hcmQgZXZlbnQgb3IgY2xpY2sgZXZlbnQgb3V0c2lkZVxuICogdGhlIG92ZXJsYXkpLlxuICovXG5cbi8qKlxuICogRmlyZWQgYWZ0ZXIgdGhlIG92ZXJsYXkgY2xvc2VzLlxuICogQGV2ZW50IGlyb24tb3ZlcmxheS1jbG9zZWRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBgZXZlbnQuZGV0YWlsYCBpcyB0aGUgYGNsb3NpbmdSZWFzb25gIHByb3BlcnR5XG4gKiAoY29udGFpbnMgYGNhbmNlbGVkYCwgd2hldGhlciB0aGUgb3ZlcmxheSB3YXMgY2FuY2VsZWQpLlxuICovXG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJy4vaXJvbi1vdmVybGF5LWJhY2tkcm9wLmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUtleXNCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQgKiBhcyBnZXN0dXJlcyBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG5cbi8qKlxuICogQHN0cnVjdFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgSXJvbk92ZXJsYXlNYW5hZ2VyQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgLyoqXG4gICAqIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb3BlbmVkIG92ZXJsYXlzLlxuICAgKiBAcHJpdmF0ZSB7IUFycmF5PCFFbGVtZW50Pn1cbiAgICovXG4gIHRoaXMuX292ZXJsYXlzID0gW107XG5cbiAgLyoqXG4gICAqIGlmcmFtZXMgaGF2ZSBhIGRlZmF1bHQgei1pbmRleCBvZiAxMDAsXG4gICAqIHNvIHRoaXMgZGVmYXVsdCBzaG91bGQgYmUgYXQgbGVhc3QgdGhhdC5cbiAgICogQHByaXZhdGUge251bWJlcn1cbiAgICovXG4gIHRoaXMuX21pbmltdW1aID0gMTAxO1xuXG4gIC8qKlxuICAgKiBNZW1vaXplZCBiYWNrZHJvcCBlbGVtZW50LlxuICAgKiBAcHJpdmF0ZSB7RWxlbWVudHxudWxsfVxuICAgKi9cbiAgdGhpcy5fYmFja2Ryb3BFbGVtZW50ID0gbnVsbDtcblxuICAvLyBFbmFibGUgZG9jdW1lbnQtd2lkZSB0YXAgcmVjb2duaXplci5cbiAgLy8gTk9URTogVXNlIHVzZUNhcHR1cmU9dHJ1ZSB0byBhdm9pZCBhY2NpZGVudGFsbHkgcHJldmVudGlvbiBvZiB0aGUgY2xvc2luZ1xuICAvLyBvZiBhbiBvdmVybGF5IHZpYSBldmVudC5zdG9wUHJvcGFnYXRpb24oKS4gVGhlIG9ubHkgd2F5IHRvIHByZXZlbnRcbiAgLy8gY2xvc2luZyBvZiBhbiBvdmVybGF5IHNob3VsZCBiZSB0aHJvdWdoIGl0cyBBUElzLlxuICAvLyBOT1RFOiBlbmFibGUgdGFwIG9uIDxodG1sPiB0byB3b3JrYXJvdW5kIFBvbHltZXIvcG9seW1lciM0NDU5XG4gIC8vIFBhc3Mgbm8tb3AgZnVuY3Rpb24gYmVjYXVzZSBNU0VkZ2UgMTUgZG9lc24ndCBoYW5kbGUgbnVsbCBhcyAybmQgYXJndW1lbnRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9DaGFrcmFDb3JlL2lzc3Vlcy8zODYzXG4gIGdlc3R1cmVzLmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICd0YXAnLCBmdW5jdGlvbigpIHt9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGFwJywgdGhpcy5fb25DYXB0dXJlQ2xpY2suYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25DYXB0dXJlRm9jdXMuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbkNhcHR1cmVLZXlEb3duLmJpbmQodGhpcyksIHRydWUpO1xufTtcblxuSXJvbk92ZXJsYXlNYW5hZ2VyQ2xhc3MucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBJcm9uT3ZlcmxheU1hbmFnZXJDbGFzcyxcblxuICAvKipcbiAgICogVGhlIHNoYXJlZCBiYWNrZHJvcCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshRWxlbWVudH0gYmFja2Ryb3BFbGVtZW50XG4gICAqL1xuICBnZXQgYmFja2Ryb3BFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpcm9uLW92ZXJsYXktYmFja2Ryb3AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JhY2tkcm9wRWxlbWVudDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGRlZXBlc3QgYWN0aXZlIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFFbGVtZW50fSBhY3RpdmVFbGVtZW50IHRoZSBhY3RpdmUgZWxlbWVudFxuICAgKi9cbiAgZ2V0IGRlZXBBY3RpdmVFbGVtZW50KCkge1xuICAgIHZhciBhY3RpdmUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIC8vIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgY2FuIGJlIG51bGxcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvYWN0aXZlRWxlbWVudFxuICAgIC8vIEluIElFIDExLCBpdCBjYW4gYWxzbyBiZSBhbiBvYmplY3Qgd2hlbiBvcGVyYXRpbmcgaW4gaWZyYW1lcy5cbiAgICAvLyBJbiB0aGVzZSBjYXNlcywgZGVmYXVsdCBpdCB0byBkb2N1bWVudC5ib2R5LlxuICAgIGlmICghYWN0aXZlIHx8IGFjdGl2ZSBpbnN0YW5jZW9mIEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICBhY3RpdmUgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cbiAgICB3aGlsZSAoYWN0aXZlLnJvb3QgJiYgZG9tKGFjdGl2ZS5yb290KS5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBhY3RpdmUgPSBkb20oYWN0aXZlLnJvb3QpLmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBhY3RpdmU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEJyaW5ncyB0aGUgb3ZlcmxheSBhdCB0aGUgc3BlY2lmaWVkIGluZGV4IHRvIHRoZSBmcm9udC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9icmluZ092ZXJsYXlBdEluZGV4VG9Gcm9udDogZnVuY3Rpb24oaSkge1xuICAgIHZhciBvdmVybGF5ID0gdGhpcy5fb3ZlcmxheXNbaV07XG4gICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsYXN0SSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7XG4gICAgdmFyIGN1cnJlbnRPdmVybGF5ID0gdGhpcy5fb3ZlcmxheXNbbGFzdEldO1xuICAgIC8vIEVuc3VyZSBhbHdheXMtb24tdG9wIG92ZXJsYXkgc3RheXMgb24gdG9wLlxuICAgIGlmIChjdXJyZW50T3ZlcmxheSAmJlxuICAgICAgICB0aGlzLl9zaG91bGRCZUJlaGluZE92ZXJsYXkob3ZlcmxheSwgY3VycmVudE92ZXJsYXkpKSB7XG4gICAgICBsYXN0SS0tO1xuICAgIH1cbiAgICAvLyBJZiBhbHJlYWR5IHRoZSB0b3AgZWxlbWVudCwgcmV0dXJuLlxuICAgIGlmIChpID49IGxhc3RJKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFVwZGF0ZSB6LWluZGV4IHRvIGJlIG9uIHRvcC5cbiAgICB2YXIgbWluaW11bVogPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRPdmVybGF5WigpLCB0aGlzLl9taW5pbXVtWik7XG4gICAgaWYgKHRoaXMuX2dldFoob3ZlcmxheSkgPD0gbWluaW11bVopIHtcbiAgICAgIHRoaXMuX2FwcGx5T3ZlcmxheVoob3ZlcmxheSwgbWluaW11bVopO1xuICAgIH1cblxuICAgIC8vIFNoaWZ0IG90aGVyIG92ZXJsYXlzIGJlaGluZCB0aGUgbmV3IG9uIHRvcC5cbiAgICB3aGlsZSAoaSA8IGxhc3RJKSB7XG4gICAgICB0aGlzLl9vdmVybGF5c1tpXSA9IHRoaXMuX292ZXJsYXlzW2kgKyAxXTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheXNbbGFzdEldID0gb3ZlcmxheTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkcyB0aGUgb3ZlcmxheSBhbmQgdXBkYXRlcyBpdHMgei1pbmRleCBpZiBpdCdzIG9wZW5lZCwgb3IgcmVtb3ZlcyBpdCBpZlxuICAgKiBpdCdzIGNsb3NlZC4gQWxzbyB1cGRhdGVzIHRoZSBiYWNrZHJvcCB6LWluZGV4LlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqL1xuICBhZGRPclJlbW92ZU92ZXJsYXk6IGZ1bmN0aW9uKG92ZXJsYXkpIHtcbiAgICBpZiAob3ZlcmxheS5vcGVuZWQpIHtcbiAgICAgIHRoaXMuYWRkT3ZlcmxheShvdmVybGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVPdmVybGF5KG92ZXJsYXkpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVHJhY2tzIG92ZXJsYXlzIGZvciB6LWluZGV4IGFuZCBmb2N1cyBtYW5hZ2VtZW50LlxuICAgKiBFbnN1cmVzIHRoZSBsYXN0IGFkZGVkIG92ZXJsYXkgd2l0aCBhbHdheXMtb24tdG9wIHJlbWFpbnMgb24gdG9wLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqL1xuICBhZGRPdmVybGF5OiBmdW5jdGlvbihvdmVybGF5KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9vdmVybGF5cy5pbmRleE9mKG92ZXJsYXkpO1xuICAgIGlmIChpID49IDApIHtcbiAgICAgIHRoaXMuX2JyaW5nT3ZlcmxheUF0SW5kZXhUb0Zyb250KGkpO1xuICAgICAgdGhpcy50cmFja0JhY2tkcm9wKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbnNlcnRpb25JbmRleCA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5c1tpbnNlcnRpb25JbmRleCAtIDFdO1xuICAgIHZhciBtaW5pbXVtWiA9IE1hdGgubWF4KHRoaXMuX2dldFooY3VycmVudE92ZXJsYXkpLCB0aGlzLl9taW5pbXVtWik7XG4gICAgdmFyIG5ld1ogPSB0aGlzLl9nZXRaKG92ZXJsYXkpO1xuXG4gICAgLy8gRW5zdXJlIGFsd2F5cy1vbi10b3Agb3ZlcmxheSBzdGF5cyBvbiB0b3AuXG4gICAgaWYgKGN1cnJlbnRPdmVybGF5ICYmXG4gICAgICAgIHRoaXMuX3Nob3VsZEJlQmVoaW5kT3ZlcmxheShvdmVybGF5LCBjdXJyZW50T3ZlcmxheSkpIHtcbiAgICAgIC8vIFRoaXMgYnVtcHMgdGhlIHotaW5kZXggb2YgKzIuXG4gICAgICB0aGlzLl9hcHBseU92ZXJsYXlaKGN1cnJlbnRPdmVybGF5LCBtaW5pbXVtWik7XG4gICAgICBpbnNlcnRpb25JbmRleC0tO1xuICAgICAgLy8gVXBkYXRlIG1pbmltdW1aIHRvIG1hdGNoIHByZXZpb3VzIG92ZXJsYXkncyB6LWluZGV4LlxuICAgICAgdmFyIHByZXZpb3VzT3ZlcmxheSA9IHRoaXMuX292ZXJsYXlzW2luc2VydGlvbkluZGV4IC0gMV07XG4gICAgICBtaW5pbXVtWiA9IE1hdGgubWF4KHRoaXMuX2dldFoocHJldmlvdXNPdmVybGF5KSwgdGhpcy5fbWluaW11bVopO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB6LWluZGV4IGFuZCBpbnNlcnQgb3ZlcmxheS5cbiAgICBpZiAobmV3WiA8PSBtaW5pbXVtWikge1xuICAgICAgdGhpcy5fYXBwbHlPdmVybGF5WihvdmVybGF5LCBtaW5pbXVtWik7XG4gICAgfVxuICAgIHRoaXMuX292ZXJsYXlzLnNwbGljZShpbnNlcnRpb25JbmRleCwgMCwgb3ZlcmxheSk7XG5cbiAgICB0aGlzLnRyYWNrQmFja2Ryb3AoKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheVxuICAgKi9cbiAgcmVtb3ZlT3ZlcmxheTogZnVuY3Rpb24ob3ZlcmxheSkge1xuICAgIHZhciBpID0gdGhpcy5fb3ZlcmxheXMuaW5kZXhPZihvdmVybGF5KTtcbiAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheXMuc3BsaWNlKGksIDEpO1xuXG4gICAgdGhpcy50cmFja0JhY2tkcm9wKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgb3ZlcmxheS5cbiAgICogQHJldHVybiB7IUVsZW1lbnR8dW5kZWZpbmVkfVxuICAgKi9cbiAgY3VycmVudE92ZXJsYXk6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4gdGhpcy5fb3ZlcmxheXNbaV07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgb3ZlcmxheSB6LWluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBjdXJyZW50T3ZlcmxheVo6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRaKHRoaXMuY3VycmVudE92ZXJsYXkoKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhhdCB0aGUgbWluaW11bSB6LWluZGV4IG9mIG5ldyBvdmVybGF5cyBpcyBhdCBsZWFzdCBgbWluaW11bVpgLlxuICAgKiBUaGlzIGRvZXMgbm90IGVmZmVjdCB0aGUgei1pbmRleCBvZiBhbnkgZXhpc3Rpbmcgb3ZlcmxheXMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaW5pbXVtWlxuICAgKi9cbiAgZW5zdXJlTWluaW11bVo6IGZ1bmN0aW9uKG1pbmltdW1aKSB7XG4gICAgdGhpcy5fbWluaW11bVogPSBNYXRoLm1heCh0aGlzLl9taW5pbXVtWiwgbWluaW11bVopO1xuICB9LFxuXG4gIGZvY3VzT3ZlcmxheTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPdmVybGF5KCkpO1xuICAgIGlmIChjdXJyZW50KSB7XG4gICAgICBjdXJyZW50Ll9hcHBseUZvY3VzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBiYWNrZHJvcCB6LWluZGV4LlxuICAgKi9cbiAgdHJhY2tCYWNrZHJvcDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLl9vdmVybGF5V2l0aEJhY2tkcm9wKCk7XG4gICAgLy8gQXZvaWQgY3JlYXRpbmcgdGhlIGJhY2tkcm9wIGlmIHRoZXJlIGlzIG5vIG92ZXJsYXkgd2l0aCBiYWNrZHJvcC5cbiAgICBpZiAoIW92ZXJsYXkgJiYgIXRoaXMuX2JhY2tkcm9wRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5zdHlsZS56SW5kZXggPSB0aGlzLl9nZXRaKG92ZXJsYXkpIC0gMTtcbiAgICB0aGlzLmJhY2tkcm9wRWxlbWVudC5vcGVuZWQgPSAhIW92ZXJsYXk7XG4gICAgLy8gUHJvcGVydHkgb2JzZXJ2ZXJzIGFyZSBub3QgZmlyZWQgdW50aWwgZWxlbWVudCBpcyBhdHRhY2hlZFxuICAgIC8vIGluIFBvbHltZXIgMi54LCBzbyB3ZSBlbnN1cmUgZWxlbWVudCBpcyBhdHRhY2hlZCBpZiBuZWVkZWQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXIvcG9seW1lci9pc3N1ZXMvNDUyNlxuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnByZXBhcmUoKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7IUFycmF5PCFFbGVtZW50Pn1cbiAgICovXG4gIGdldEJhY2tkcm9wczogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJhY2tkcm9wcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fb3ZlcmxheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5c1tpXS53aXRoQmFja2Ryb3ApIHtcbiAgICAgICAgYmFja2Ryb3BzLnB1c2godGhpcy5fb3ZlcmxheXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmFja2Ryb3BzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB6LWluZGV4IGZvciB0aGUgYmFja2Ryb3AuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGJhY2tkcm9wWjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFoodGhpcy5fb3ZlcmxheVdpdGhCYWNrZHJvcCgpKSAtIDE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRvcCBvcGVuZWQgb3ZlcmxheSB0aGF0IGhhcyBhIGJhY2tkcm9wLlxuICAgKiBAcmV0dXJuIHshRWxlbWVudHx1bmRlZmluZWR9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb3ZlcmxheVdpdGhCYWNrZHJvcDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAodGhpcy5fb3ZlcmxheXNbaV0ud2l0aEJhY2tkcm9wKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5c1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIG1pbmltdW0gei1pbmRleCBmb3IgdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7RWxlbWVudD19IG92ZXJsYXlcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9nZXRaOiBmdW5jdGlvbihvdmVybGF5KSB7XG4gICAgdmFyIHogPSB0aGlzLl9taW5pbXVtWjtcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgdmFyIHoxID0gTnVtYmVyKFxuICAgICAgICAgIG92ZXJsYXkuc3R5bGUuekluZGV4IHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG92ZXJsYXkpLnpJbmRleCk7XG4gICAgICAvLyBDaGVjayBpZiBpcyBhIG51bWJlclxuICAgICAgLy8gTnVtYmVyLmlzTmFOIG5vdCBzdXBwb3J0ZWQgaW4gSUUgMTArXG4gICAgICBpZiAoejEgPT09IHoxKSB7XG4gICAgICAgIHogPSB6MTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHo7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSB6XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfc2V0WjogZnVuY3Rpb24oZWxlbWVudCwgeikge1xuICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gejtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheVxuICAgKiBAcGFyYW0ge251bWJlcn0gYWJvdmVaXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfYXBwbHlPdmVybGF5WjogZnVuY3Rpb24ob3ZlcmxheSwgYWJvdmVaKSB7XG4gICAgdGhpcy5fc2V0WihvdmVybGF5LCBhYm92ZVogKyAyKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGVlcGVzdCBvdmVybGF5IGluIHRoZSBwYXRoLlxuICAgKiBAcGFyYW0geyFBcnJheTwhRWxlbWVudD49fSBwYXRoXG4gICAqIEByZXR1cm4geyFFbGVtZW50fHVuZGVmaW5lZH1cbiAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vdmVybGF5SW5QYXRoOiBmdW5jdGlvbihwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGggfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGF0aFtpXS5fbWFuYWdlciA9PT0gdGhpcykge1xuICAgICAgICByZXR1cm4gcGF0aFtpXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhlIGNsaWNrIGV2ZW50IGlzIGRlbGVnYXRlZCB0byB0aGUgcmlnaHQgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DYXB0dXJlQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9vdmVybGF5cy5sZW5ndGggLSAxO1xuICAgIGlmIChpID09PSAtMSlcbiAgICAgIHJldHVybjtcbiAgICB2YXIgcGF0aCA9IC8qKiBAdHlwZSB7IUFycmF5PCFFdmVudFRhcmdldD59ICovIChkb20oZXZlbnQpLnBhdGgpO1xuICAgIHZhciBvdmVybGF5O1xuICAgIC8vIENoZWNrIGlmIGNsaWNrZWQgb3V0c2lkZSBvZiBvdmVybGF5LlxuICAgIHdoaWxlICgob3ZlcmxheSA9IC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuX292ZXJsYXlzW2ldKSkgJiZcbiAgICAgICAgICAgdGhpcy5fb3ZlcmxheUluUGF0aChwYXRoKSAhPT0gb3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5fb25DYXB0dXJlQ2xpY2soZXZlbnQpO1xuICAgICAgaWYgKG92ZXJsYXkuYWxsb3dDbGlja1Rocm91Z2gpIHtcbiAgICAgICAgaS0tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIHRoZSBmb2N1cyBldmVudCBpcyBkZWxlZ2F0ZWQgdG8gdGhlIHJpZ2h0IG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uQ2FwdHVyZUZvY3VzOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBvdmVybGF5ID0gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5jdXJyZW50T3ZlcmxheSgpKTtcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5fb25DYXB0dXJlRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyBUQUIgYW5kIEVTQyBrZXlib2FyZCBldmVudHMgYXJlIGRlbGVnYXRlZCB0byB0aGUgcmlnaHQgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DYXB0dXJlS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgb3ZlcmxheSA9IC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuY3VycmVudE92ZXJsYXkoKSk7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZXZlbnQsICdlc2MnKSkge1xuICAgICAgICBvdmVybGF5Ll9vbkNhcHR1cmVFc2MoZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZXZlbnQsICd0YWInKSkge1xuICAgICAgICBvdmVybGF5Ll9vbkNhcHR1cmVUYWIoZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBpZiB0aGUgb3ZlcmxheTEgc2hvdWxkIGJlIGJlaGluZCBvdmVybGF5Mi5cbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheTFcbiAgICogQHBhcmFtIHshRWxlbWVudH0gb3ZlcmxheTJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvcGVydGllc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zaG91bGRCZUJlaGluZE92ZXJsYXk6IGZ1bmN0aW9uKG92ZXJsYXkxLCBvdmVybGF5Mikge1xuICAgIHJldHVybiAhb3ZlcmxheTEuYWx3YXlzT25Ub3AgJiYgb3ZlcmxheTIuYWx3YXlzT25Ub3A7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBJcm9uT3ZlcmxheU1hbmFnZXIgPSBuZXcgSXJvbk92ZXJsYXlNYW5hZ2VyQ2xhc3MoKTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG4vKipcbiAqIFVzZWQgdG8gY2FsY3VsYXRlIHRoZSBzY3JvbGwgZGlyZWN0aW9uIGR1cmluZyB0b3VjaCBldmVudHMuXG4gKiBAdHlwZSB7IU9iamVjdH1cbiAqL1xudmFyIGxhc3RUb3VjaFBvc2l0aW9uID0ge3BhZ2VYOiAwLCBwYWdlWTogMH07XG4vKipcbiAqIFVzZWQgdG8gYXZvaWQgY29tcHV0aW5nIGV2ZW50LnBhdGggYW5kIGZpbHRlciBzY3JvbGxhYmxlIG5vZGVzIChiZXR0ZXIgcGVyZikuXG4gKiBAdHlwZSB7P0V2ZW50VGFyZ2V0fVxuICovXG52YXIgbGFzdFJvb3RUYXJnZXQgPSBudWxsO1xuLyoqXG4gKiBAdHlwZSB7IUFycmF5PCFOb2RlPn1cbiAqL1xudmFyIGxhc3RTY3JvbGxhYmxlTm9kZXMgPSBbXTtcbi8qKlxuICogQHR5cGUgeyFBcnJheTxzdHJpbmc+fVxuICovXG52YXIgc2Nyb2xsRXZlbnRzID0gW1xuICAvLyBNb2Rlcm4gYHdoZWVsYCBldmVudCBmb3IgbW91c2Ugd2hlZWwgc2Nyb2xsaW5nOlxuICAnd2hlZWwnLFxuICAvLyBPbGRlciwgbm9uLXN0YW5kYXJkIGBtb3VzZXdoZWVsYCBldmVudCBmb3Igc29tZSBGRjpcbiAgJ21vdXNld2hlZWwnLFxuICAvLyBJRTpcbiAgJ0RPTU1vdXNlU2Nyb2xsJyxcbiAgLy8gVG91Y2ggZW5hYmxlZCBkZXZpY2VzXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZSdcbl07XG4vLyBtdXN0IGJlIGRlZmluZWQgZm9yIG1vZHVsaXplclxudmFyIF9ib3VuZFNjcm9sbEhhbmRsZXI7XG52YXIgY3VycmVudExvY2tpbmdFbGVtZW50O1xuXG4vKipcbiAqIFRoZSBJcm9uU2Nyb2xsTWFuYWdlciBpcyBpbnRlbmRlZCB0byBwcm92aWRlIGEgY2VudHJhbCBzb3VyY2VcbiAqIG9mIGF1dGhvcml0eSBhbmQgY29udHJvbCBvdmVyIHdoaWNoIGVsZW1lbnRzIGluIGEgZG9jdW1lbnQgYXJlIGN1cnJlbnRseVxuICogYWxsb3dlZCB0byBzY3JvbGwuXG4gKlxuICovXG5gVE9ETyhtb2R1bGl6ZXIpOiBBIG5hbWVzcGFjZSBuYW1lZCBQb2x5bWVyLklyb25TY3JvbGxNYW5hZ2VyIHdhc1xuZGVjbGFyZWQgaGVyZS4gVGhlIHN1cnJvdW5kaW5nIGNvbW1lbnRzIHNob3VsZCBiZSByZXZpZXdlZCxcbmFuZCB0aGlzIHN0cmluZyBjYW4gdGhlbiBiZSBkZWxldGVkYDtcblxuLyoqXG4gKiBUaGUgY3VycmVudCBlbGVtZW50IHRoYXQgZGVmaW5lcyB0aGUgRE9NIGJvdW5kYXJpZXMgb2YgdGhlXG4gKiBzY3JvbGwgbG9jay4gVGhpcyBpcyBhbHdheXMgdGhlIG1vc3QgcmVjZW50bHkgbG9ja2luZyBlbGVtZW50LlxuICpcbiAqIEByZXR1cm4geyFOb2RlfHVuZGVmaW5lZH1cbiAqL1xuZXhwb3J0IHtjdXJyZW50TG9ja2luZ0VsZW1lbnR9O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgZWxlbWVudCBpcyBcInNjcm9sbCBsb2NrZWRcIiwgd2hpY2ggaXMgdG9cbiAqIHNheSB0aGF0IGl0IGNhbm5vdCBiZSBzY3JvbGxlZCB2aWEgcG9pbnRlciBvciBrZXlib2FyZCBpbnRlcmFjdGlvbnMuXG4gKlxuICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnQgQW4gSFRNTCBlbGVtZW50IGluc3RhbmNlIHdoaWNoIG1heSBvciBtYXlcbiAqIG5vdCBiZSBzY3JvbGwgbG9ja2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudElzU2Nyb2xsTG9ja2VkKGVsZW1lbnQpIHtcbiAgdmFyIGxvY2tpbmdFbGVtZW50ID0gY3VycmVudExvY2tpbmdFbGVtZW50O1xuXG4gIGlmIChsb2NraW5nRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHNjcm9sbExvY2tlZDtcblxuICBpZiAoX2hhc0NhY2hlZExvY2tlZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChfaGFzQ2FjaGVkVW5sb2NrZWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2Nyb2xsTG9ja2VkID0gISFsb2NraW5nRWxlbWVudCAmJiBsb2NraW5nRWxlbWVudCAhPT0gZWxlbWVudCAmJlxuICAgICAgIV9jb21wb3NlZFRyZWVDb250YWlucyhsb2NraW5nRWxlbWVudCwgZWxlbWVudCk7XG5cbiAgaWYgKHNjcm9sbExvY2tlZCkge1xuICAgIF9sb2NrZWRFbGVtZW50Q2FjaGUucHVzaChlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBfdW5sb2NrZWRFbGVtZW50Q2FjaGUucHVzaChlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBzY3JvbGxMb2NrZWQ7XG59XG5cbi8qKlxuICogUHVzaCBhbiBlbGVtZW50IG9udG8gdGhlIGN1cnJlbnQgc2Nyb2xsIGxvY2sgc3RhY2suIFRoZSBtb3N0IHJlY2VudGx5XG4gKiBwdXNoZWQgZWxlbWVudCBhbmQgaXRzIGNoaWxkcmVuIHdpbGwgYmUgY29uc2lkZXJlZCBzY3JvbGxhYmxlLiBBbGxcbiAqIG90aGVyIGVsZW1lbnRzIHdpbGwgbm90IGJlIHNjcm9sbGFibGUuXG4gKlxuICogU2Nyb2xsIGxvY2tpbmcgaXMgaW1wbGVtZW50ZWQgYXMgYSBzdGFjayBzbyB0aGF0IGNhc2VzIHN1Y2ggYXNcbiAqIGRyb3Bkb3ducyB3aXRoaW4gZHJvcGRvd25zIGFyZSBoYW5kbGVkIHdlbGwuXG4gKlxuICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgbG9jayBzY3JvbGwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoU2Nyb2xsTG9jayhlbGVtZW50KSB7XG4gIC8vIFByZXZlbnQgcHVzaGluZyB0aGUgc2FtZSBlbGVtZW50IHR3aWNlXG4gIGlmIChfbG9ja2luZ0VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPj0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChfbG9ja2luZ0VsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIF9sb2NrU2Nyb2xsSW50ZXJhY3Rpb25zKCk7XG4gIH1cblxuICBfbG9ja2luZ0VsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gIGN1cnJlbnRMb2NraW5nRWxlbWVudCA9IF9sb2NraW5nRWxlbWVudHNbX2xvY2tpbmdFbGVtZW50cy5sZW5ndGggLSAxXTtcblxuICBfbG9ja2VkRWxlbWVudENhY2hlID0gW107XG4gIF91bmxvY2tlZEVsZW1lbnRDYWNoZSA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBlbGVtZW50IGZyb20gdGhlIHNjcm9sbCBsb2NrIHN0YWNrLiBUaGUgZWxlbWVudCBiZWluZ1xuICogcmVtb3ZlZCBkb2VzIG5vdCBuZWVkIHRvIGJlIHRoZSBtb3N0IHJlY2VudGx5IHB1c2hlZCBlbGVtZW50LiBIb3dldmVyLFxuICogdGhlIHNjcm9sbCBsb2NrIGNvbnN0cmFpbnRzIG9ubHkgY2hhbmdlIHdoZW4gdGhlIG1vc3QgcmVjZW50bHkgcHVzaGVkXG4gKiBlbGVtZW50IGlzIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gcmVtb3ZlIGZyb20gdGhlIHNjcm9sbFxuICogbG9jayBzdGFjay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVNjcm9sbExvY2soZWxlbWVudCkge1xuICB2YXIgaW5kZXggPSBfbG9ja2luZ0VsZW1lbnRzLmluZGV4T2YoZWxlbWVudCk7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9sb2NraW5nRWxlbWVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgY3VycmVudExvY2tpbmdFbGVtZW50ID0gX2xvY2tpbmdFbGVtZW50c1tfbG9ja2luZ0VsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gIF9sb2NrZWRFbGVtZW50Q2FjaGUgPSBbXTtcbiAgX3VubG9ja2VkRWxlbWVudENhY2hlID0gW107XG5cbiAgaWYgKF9sb2NraW5nRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgX3VubG9ja1Njcm9sbEludGVyYWN0aW9ucygpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBfbG9ja2luZ0VsZW1lbnRzID0gW107XG5leHBvcnQgbGV0IF9sb2NrZWRFbGVtZW50Q2FjaGUgPSBudWxsO1xuZXhwb3J0IGxldCBfdW5sb2NrZWRFbGVtZW50Q2FjaGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gX2hhc0NhY2hlZExvY2tlZEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gX2xvY2tlZEVsZW1lbnRDYWNoZS5pbmRleE9mKGVsZW1lbnQpID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfaGFzQ2FjaGVkVW5sb2NrZWRFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIF91bmxvY2tlZEVsZW1lbnRDYWNoZS5pbmRleE9mKGVsZW1lbnQpID4gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29tcG9zZWRUcmVlQ29udGFpbnMoZWxlbWVudCwgY2hpbGQpIHtcbiAgLy8gTk9URShjZGF0YSk6IFRoaXMgbWV0aG9kIGl0ZXJhdGVzIG92ZXIgY29udGVudCBlbGVtZW50cyBhbmQgdGhlaXJcbiAgLy8gY29ycmVzcG9uZGluZyBkaXN0cmlidXRlZCBub2RlcyB0byBpbXBsZW1lbnQgYSBjb250YWlucy1saWtlIG1ldGhvZFxuICAvLyB0aGF0IHBpZXJjZXMgdGhyb3VnaCB0aGUgY29tcG9zZWQgdHJlZSBvZiB0aGUgU2hhZG93RE9NLiBSZXN1bHRzIG9mXG4gIC8vIHRoaXMgb3BlcmF0aW9uIGFyZSBjYWNoZWQgKGVsc2V3aGVyZSkgb24gYSBwZXItc2Nyb2xsLWxvY2sgYmFzaXMsIHRvXG4gIC8vIGd1YXJkIGFnYWluc3QgcG90ZW50aWFsbHkgZXhwZW5zaXZlIGxvb2t1cHMgaGFwcGVuaW5nIHJlcGVhdGVkbHkgYXNcbiAgLy8gYSB1c2VyIHNjcm9sbHMgLyB0b3VjaG1vdmVzLlxuICB2YXIgY29udGVudEVsZW1lbnRzO1xuICB2YXIgZGlzdHJpYnV0ZWROb2RlcztcbiAgdmFyIGNvbnRlbnRJbmRleDtcbiAgdmFyIG5vZGVJbmRleDtcblxuICBpZiAoZWxlbWVudC5jb250YWlucyhjaGlsZCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnRlbnRFbGVtZW50cyA9IGRvbShlbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCdjb250ZW50LHNsb3QnKTtcblxuICBmb3IgKGNvbnRlbnRJbmRleCA9IDA7IGNvbnRlbnRJbmRleCA8IGNvbnRlbnRFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgKytjb250ZW50SW5kZXgpIHtcbiAgICBkaXN0cmlidXRlZE5vZGVzID0gZG9tKGNvbnRlbnRFbGVtZW50c1tjb250ZW50SW5kZXhdKS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG5cbiAgICBmb3IgKG5vZGVJbmRleCA9IDA7IG5vZGVJbmRleCA8IGRpc3RyaWJ1dGVkTm9kZXMubGVuZ3RoOyArK25vZGVJbmRleCkge1xuICAgICAgLy8gUG9seW1lciAyLnggcmV0dXJucyBzbG90LmFzc2lnbmVkTm9kZXMgd2hpY2ggY2FuIGNvbnRhaW4gdGV4dCBub2Rlcy5cbiAgICAgIGlmIChkaXN0cmlidXRlZE5vZGVzW25vZGVJbmRleF0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgaWYgKF9jb21wb3NlZFRyZWVDb250YWlucyhkaXN0cmlidXRlZE5vZGVzW25vZGVJbmRleF0sIGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfc2Nyb2xsSW50ZXJhY3Rpb25IYW5kbGVyKGV2ZW50KSB7XG4gIC8vIEF2b2lkIGNhbmNlbGluZyBhbiBldmVudCB3aXRoIGNhbmNlbGFibGU9ZmFsc2UsIGUuZy4gc2Nyb2xsaW5nIGlzIGluXG4gIC8vIHByb2dyZXNzIGFuZCBjYW5ub3QgYmUgaW50ZXJydXB0ZWQuXG4gIGlmIChldmVudC5jYW5jZWxhYmxlICYmIF9zaG91bGRQcmV2ZW50U2Nyb2xsaW5nKGV2ZW50KSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgLy8gSWYgZXZlbnQgaGFzIHRhcmdldFRvdWNoZXMgKHRvdWNoIGV2ZW50KSwgdXBkYXRlIGxhc3QgdG91Y2ggcG9zaXRpb24uXG4gIGlmIChldmVudC50YXJnZXRUb3VjaGVzKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcbiAgICBsYXN0VG91Y2hQb3NpdGlvbi5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIGxhc3RUb3VjaFBvc2l0aW9uLnBhZ2VZID0gdG91Y2gucGFnZVk7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQge19ib3VuZFNjcm9sbEhhbmRsZXJ9O1xuXG5leHBvcnQgZnVuY3Rpb24gX2xvY2tTY3JvbGxJbnRlcmFjdGlvbnMoKSB7XG4gIF9ib3VuZFNjcm9sbEhhbmRsZXIgPVxuICAgICAgX2JvdW5kU2Nyb2xsSGFuZGxlciB8fCBfc2Nyb2xsSW50ZXJhY3Rpb25IYW5kbGVyLmJpbmQodW5kZWZpbmVkKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzY3JvbGxFdmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgLy8gTk9URTogYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG9iamVjdHMgYXMgdGhpcmQgYXJnIHdpbGxcbiAgICAvLyBpbnRlcnByZXQgaXQgYXMgYm9vbGVhbiwgaGVuY2UgdXNlQ2FwdHVyZSA9IHRydWUgaW4gdGhpcyBjYXNlLlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIHNjcm9sbEV2ZW50c1tpXSwgX2JvdW5kU2Nyb2xsSGFuZGxlciwge2NhcHR1cmU6IHRydWUsIHBhc3NpdmU6IGZhbHNlfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF91bmxvY2tTY3JvbGxJbnRlcmFjdGlvbnMoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gc2Nyb2xsRXZlbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIC8vIE5PVEU6IGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBvYmplY3RzIGFzIHRoaXJkIGFyZyB3aWxsXG4gICAgLy8gaW50ZXJwcmV0IGl0IGFzIGJvb2xlYW4sIGhlbmNlIHVzZUNhcHR1cmUgPSB0cnVlIGluIHRoaXMgY2FzZS5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICBzY3JvbGxFdmVudHNbaV0sIF9ib3VuZFNjcm9sbEhhbmRsZXIsIHtjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZX0pO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBldmVudCBjYXVzZXMgc2Nyb2xsIG91dHNpZGUgdGhlIGN1cnJlbnQgbG9ja2luZ1xuICogZWxlbWVudCwgZS5nLiBwb2ludGVyL2tleWJvYXJkIGludGVyYWN0aW9ucywgb3Igc2Nyb2xsIFwibGVha2luZ1wiXG4gKiBvdXRzaWRlIHRoZSBsb2NraW5nIGVsZW1lbnQgd2hlbiBpdCBpcyBhbHJlYWR5IGF0IGl0cyBzY3JvbGwgYm91bmRhcmllcy5cbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfc2hvdWxkUHJldmVudFNjcm9sbGluZyhldmVudCkge1xuICAvLyBVcGRhdGUgaWYgcm9vdCB0YXJnZXQgY2hhbmdlZC4gRm9yIHRvdWNoIGV2ZW50cywgZW5zdXJlIHdlIGRvbid0XG4gIC8vIHVwZGF0ZSBkdXJpbmcgdG91Y2htb3ZlLlxuICB2YXIgdGFyZ2V0ID0gZG9tKGV2ZW50KS5yb290VGFyZ2V0O1xuICBpZiAoZXZlbnQudHlwZSAhPT0gJ3RvdWNobW92ZScgJiYgbGFzdFJvb3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgIGxhc3RSb290VGFyZ2V0ID0gdGFyZ2V0O1xuICAgIGxhc3RTY3JvbGxhYmxlTm9kZXMgPSBfZ2V0U2Nyb2xsYWJsZU5vZGVzKGRvbShldmVudCkucGF0aCk7XG4gIH1cblxuICAvLyBQcmV2ZW50IGV2ZW50IGlmIG5vIHNjcm9sbGFibGUgbm9kZXMuXG4gIGlmICghbGFzdFNjcm9sbGFibGVOb2Rlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBEb24ndCBwcmV2ZW50IHRvdWNoc3RhcnQgZXZlbnQgaW5zaWRlIHRoZSBsb2NraW5nIGVsZW1lbnQgd2hlbiBpdCBoYXNcbiAgLy8gc2Nyb2xsYWJsZSBub2Rlcy5cbiAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBHZXQgZGVsdGFYL1kuXG4gIHZhciBpbmZvID0gX2dldFNjcm9sbEluZm8oZXZlbnQpO1xuICAvLyBQcmV2ZW50IGlmIHRoZXJlIGlzIG5vIGNoaWxkIHRoYXQgY2FuIHNjcm9sbC5cbiAgcmV0dXJuICFfZ2V0U2Nyb2xsaW5nTm9kZShsYXN0U2Nyb2xsYWJsZU5vZGVzLCBpbmZvLmRlbHRhWCwgaW5mby5kZWx0YVkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Ygc2Nyb2xsYWJsZSBub2RlcyB1cCB0byB0aGUgY3VycmVudCBsb2NraW5nIGVsZW1lbnQsXG4gKiB3aGljaCBpcyBpbmNsdWRlZCB0b28gaWYgc2Nyb2xsYWJsZS5cbiAqIEBwYXJhbSB7IUFycmF5PCFOb2RlPn0gbm9kZXNcbiAqIEByZXR1cm4geyFBcnJheTwhTm9kZT59IHNjcm9sbGFibGVzXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFNjcm9sbGFibGVOb2Rlcyhub2Rlcykge1xuICB2YXIgc2Nyb2xsYWJsZXMgPSBbXTtcbiAgdmFyIGxvY2tpbmdJbmRleCA9IG5vZGVzLmluZGV4T2YoY3VycmVudExvY2tpbmdFbGVtZW50KTtcbiAgLy8gTG9vcCBmcm9tIHJvb3QgdGFyZ2V0IHRvIGxvY2tpbmcgZWxlbWVudCAoaW5jbHVkZWQpLlxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBsb2NraW5nSW5kZXg7IGkrKykge1xuICAgIC8vIFNraXAgbm9uLUVsZW1lbnQgbm9kZXMuXG4gICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBub2RlID0gLyoqIEB0eXBlIHshRWxlbWVudH0gKi8gKG5vZGVzW2ldKTtcbiAgICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgYmVmb3JlIGNoZWNraW5nIGNvbXB1dGVkIHN0eWxlLlxuICAgIHZhciBzdHlsZSA9IG5vZGUuc3R5bGU7XG4gICAgaWYgKHN0eWxlLm92ZXJmbG93ICE9PSAnc2Nyb2xsJyAmJiBzdHlsZS5vdmVyZmxvdyAhPT0gJ2F1dG8nKSB7XG4gICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIH1cbiAgICBpZiAoc3R5bGUub3ZlcmZsb3cgPT09ICdzY3JvbGwnIHx8IHN0eWxlLm92ZXJmbG93ID09PSAnYXV0bycpIHtcbiAgICAgIHNjcm9sbGFibGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzY3JvbGxhYmxlcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBub2RlIHRoYXQgaXMgc2Nyb2xsaW5nLiBJZiB0aGVyZSBpcyBubyBzY3JvbGxpbmcsXG4gKiByZXR1cm5zIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7IUFycmF5PCFOb2RlPn0gbm9kZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVggU2Nyb2xsIGRlbHRhIG9uIHRoZSB4LWF4aXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YVkgU2Nyb2xsIGRlbHRhIG9uIHRoZSB5LWF4aXNcbiAqIEByZXR1cm4geyFOb2RlfHVuZGVmaW5lZH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U2Nyb2xsaW5nTm9kZShub2RlcywgZGVsdGFYLCBkZWx0YVkpIHtcbiAgLy8gTm8gc2Nyb2xsLlxuICBpZiAoIWRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIENoZWNrIG9ubHkgb25lIGF4aXMgYWNjb3JkaW5nIHRvIHdoZXJlIHRoZXJlIGlzIG1vcmUgc2Nyb2xsLlxuICAvLyBQcmVmZXIgdmVydGljYWwgdG8gaG9yaXpvbnRhbC5cbiAgdmFyIHZlcnRpY2FsU2Nyb2xsID0gTWF0aC5hYnMoZGVsdGFZKSA+PSBNYXRoLmFicyhkZWx0YVgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICB2YXIgY2FuU2Nyb2xsID0gZmFsc2U7XG4gICAgaWYgKHZlcnRpY2FsU2Nyb2xsKSB7XG4gICAgICAvLyBkZWx0YSA8IDAgaXMgc2Nyb2xsIHVwLCBkZWx0YSA+IDAgaXMgc2Nyb2xsIGRvd24uXG4gICAgICBjYW5TY3JvbGwgPSBkZWx0YVkgPCAwID9cbiAgICAgICAgICBub2RlLnNjcm9sbFRvcCA+IDAgOlxuICAgICAgICAgIG5vZGUuc2Nyb2xsVG9wIDwgbm9kZS5zY3JvbGxIZWlnaHQgLSBub2RlLmNsaWVudEhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVsdGEgPCAwIGlzIHNjcm9sbCBsZWZ0LCBkZWx0YSA+IDAgaXMgc2Nyb2xsIHJpZ2h0LlxuICAgICAgY2FuU2Nyb2xsID0gZGVsdGFYIDwgMCA/XG4gICAgICAgICAgbm9kZS5zY3JvbGxMZWZ0ID4gMCA6XG4gICAgICAgICAgbm9kZS5zY3JvbGxMZWZ0IDwgbm9kZS5zY3JvbGxXaWR0aCAtIG5vZGUuY2xpZW50V2lkdGg7XG4gICAgfVxuICAgIGlmIChjYW5TY3JvbGwpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgc2Nyb2xsIGBkZWx0YVhgIGFuZCBgZGVsdGFZYC5cbiAqIEBwYXJhbSB7IUV2ZW50fSBldmVudCBUaGUgc2Nyb2xsIGV2ZW50XG4gKiBAcmV0dXJuIHt7ZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyfX0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlXG4gKiB4LWF4aXMgc2Nyb2xsIGRlbHRhIChwb3NpdGl2ZTogc2Nyb2xsIHJpZ2h0LCBuZWdhdGl2ZTogc2Nyb2xsIGxlZnQsXG4gKiAwOiBubyBzY3JvbGwpLCBhbmQgdGhlIHktYXhpcyBzY3JvbGwgZGVsdGEgKHBvc2l0aXZlOiBzY3JvbGwgZG93bixcbiAqIG5lZ2F0aXZlOiBzY3JvbGwgdXAsIDA6IG5vIHNjcm9sbCkuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gX2dldFNjcm9sbEluZm8oZXZlbnQpIHtcbiAgdmFyIGluZm8gPSB7ZGVsdGFYOiBldmVudC5kZWx0YVgsIGRlbHRhWTogZXZlbnQuZGVsdGFZfTtcbiAgLy8gQWxyZWFkeSBhdmFpbGFibGUuXG4gIGlmICgnZGVsdGFYJyBpbiBldmVudCkge1xuICAgIC8vIGRvIG5vdGhpbmcsIHZhbHVlcyBhcmUgYWxyZWFkeSBnb29kLlxuICB9XG4gIC8vIFNhZmFyaSBoYXMgc2Nyb2xsIGluZm8gaW4gYHdoZWVsRGVsdGFYL1lgLlxuICBlbHNlIGlmICgnd2hlZWxEZWx0YVgnIGluIGV2ZW50ICYmICd3aGVlbERlbHRhWScgaW4gZXZlbnQpIHtcbiAgICBpbmZvLmRlbHRhWCA9IC1ldmVudC53aGVlbERlbHRhWDtcbiAgICBpbmZvLmRlbHRhWSA9IC1ldmVudC53aGVlbERlbHRhWTtcbiAgfVxuICAvLyBJRTEwIGhhcyBvbmx5IHZlcnRpY2FsIHNjcm9sbCBpbmZvIGluIGB3aGVlbERlbHRhYC5cbiAgZWxzZSBpZiAoJ3doZWVsRGVsdGEnIGluIGV2ZW50KSB7XG4gICAgaW5mby5kZWx0YVggPSAwO1xuICAgIGluZm8uZGVsdGFZID0gLWV2ZW50LndoZWVsRGVsdGE7XG4gIH1cbiAgLy8gRmlyZWZveCBoYXMgc2Nyb2xsIGluZm8gaW4gYGRldGFpbGAgYW5kIGBheGlzYC5cbiAgZWxzZSBpZiAoJ2F4aXMnIGluIGV2ZW50KSB7XG4gICAgaW5mby5kZWx0YVggPSBldmVudC5heGlzID09PSAxID8gZXZlbnQuZGV0YWlsIDogMDtcbiAgICBpbmZvLmRlbHRhWSA9IGV2ZW50LmF4aXMgPT09IDIgPyBldmVudC5kZXRhaWwgOiAwO1xuICB9XG4gIC8vIE9uIG1vYmlsZSBkZXZpY2VzLCBjYWxjdWxhdGUgc2Nyb2xsIGRpcmVjdGlvbi5cbiAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0VG91Y2hlcykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LnRhcmdldFRvdWNoZXNbMF07XG4gICAgLy8gVG91Y2ggbW92ZXMgZnJvbSByaWdodCB0byBsZWZ0ID0+IHNjcm9sbGluZyBnb2VzIHJpZ2h0LlxuICAgIGluZm8uZGVsdGFYID0gbGFzdFRvdWNoUG9zaXRpb24ucGFnZVggLSB0b3VjaC5wYWdlWDtcbiAgICAvLyBUb3VjaCBtb3ZlcyBmcm9tIGRvd24gdG8gdXAgPT4gc2Nyb2xsaW5nIGdvZXMgZG93bi5cbiAgICBpbmZvLmRlbHRhWSA9IGxhc3RUb3VjaFBvc2l0aW9uLnBhZ2VZIC0gdG91Y2gucGFnZVk7XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RBO0FBRUE7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUE1RkE7QUFDQTtBQThGQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBR0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXpCQTtBQWdDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9tQkE7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbk1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBeUJBO0FBRUE7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTEE7QUFjQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdIQTs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFEQTtBQWhIQTtBQXNIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQXR0QkE7QUEwdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrREE7QUFHQTs7Ozs7QUFLQTs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbnpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7Ozs7QUFJQTtBQUVBOzs7Ozs7QUFLQTtBQUVBOzs7OztBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQTFVQTtBQTZVQTs7Ozs7Ozs7Ozs7O0FDcFlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBOzs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBSUE7QUFDQTs7OztBQUdBO0FBQ0E7Ozs7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTs7Ozs7OztBQU1BO0FBSUE7Ozs7Ozs7QUFNQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=