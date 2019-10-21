(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@polymer/iron-list/iron-list.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-list/iron-list.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/mutable-data-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/templatizer-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id=\"selector\" items=\"{{items}}\" selected=\"{{selectedItems}}\" selected-item=\"{{selectedItem}}\"></array-selector>\n\n    <div id=\"items\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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














var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var SECRET_TABINDEX = -100;
/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Styling

You can use the `--iron-list-items-container` mixin to style the container of
items:

```css
iron-list {
 --iron-list-items-container: {
    margin: auto;
  };
}
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@group Iron Element
@element iron-list
@demo demo/index.html

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject()),
  is: 'iron-list',
  properties: {
    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {
      type: Array
    },

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {
      type: String,
      value: 'item'
    },

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {
      type: String,
      value: 'index'
    },

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {
      type: String,
      value: 'selected'
    },

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {
      type: Boolean,
      value: false
    },

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {
      type: Object,
      notify: true
    },

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {
      type: Object,
      notify: true
    },

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {
      type: Boolean,
      value: false
    },

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {
      type: Number,
      value: 0
    }
  },
  observers: ['_itemsChanged(items.*)', '_selectionEnabledChanged(selectionEnabled)', '_multiSelectionChanged(multiSelection)', '_setOverflow(scrollTarget, scrollOffset)'],
  behaviors: [_polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__["Templatizer"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronScrollTargetBehavior"], _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__["OptionalMutableDataBehavior"]],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is the same as `scrollTop`.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplateInstanceBase>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?TemplatizerNode}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);

    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;

    if (val < 0) {
      val = this._physicalCount + val;
    }

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;

    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;
      idx = this._iterateItems(function (pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
        } // Handle a partially rendered final row in grid mode


        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - vidx % this._itemsPerRow;
        }
      }) || 0;
      this._firstVisibleIndexVal = idx;
    }

    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;

    if (idx == null) {
      if (this.grid) {
        idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;

        this._iterateItems(function (pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }

          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }

      this._lastVisibleIndexVal = idx;
    }

    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  ready: function ready() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },
  attached: function attached() {
    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },
  detached: function detached() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function _setOverflow(scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : ''; // Clear cache.

    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;

    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function updateViewportBoundaries() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function _scrollHandler() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0; // Track the current scroll position.

    this._scrollPosition = scrollTop; // Clear indexes for first and last visible indexes.

    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null; // Random access.

    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;

      var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;

      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset.

      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;

      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);

      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }

      this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);

      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function _getReusables(fromTop) {
    var ith, lastIth, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    var scrollTop = this._scrollTop;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      lastIth = this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      lastIth = this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }

    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;

      if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
        break;
      }

      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        } // Check that the index is not visible.


        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }

        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        } // Check that the index is not visible.


        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }

        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = ith === 0 ? physicalCount - 1 : ith - 1;
      }
    }

    return {
      indexes: idxs,
      physicalTop: top - this._scrollOffset
    };
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function _update(itemSet, movingUp) {
    if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
      return;
    }

    this._manageFocus();

    this._assignModels(itemSet);

    this._updateMetrics(itemSet); // Adjust offset after measuring.


    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }

    this._positionItems();

    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function _createPool(size) {
    this._ensureTemplatized();

    var i, inst;
    var physicalItems = new Array(size);

    for (i = 0; i < size; i++) {
      inst = this.stamp(null); // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.

      physicalItems[i] = inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    }

    return physicalItems;
  },
  _isClientFull: function _isClientFull() {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function _increasePoolIfNeeded(count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);

    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;

      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }

      nextPhysicalCount -= correction;
    }

    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }

    if (delta > 0) {
      var ts = window.performance.now(); // Concat arrays in place.

      [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.

      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }

      this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.

      if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }

      this._update();

      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    } // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.


    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {// Do nothing.
    } else if (!this._isClientFull()) {
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["idlePeriod"]);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function _render() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }

    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);

      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;

      this._update(reusables.indexes);

      this._update();

      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();

      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function _ensureTemplatized() {
    if (this.ctor) {
      return;
    }

    this._userTemplate = this.queryEffectiveChildren('template');

    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }

    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },
  _gridChanged: function _gridChanged(newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined') return;
    this.notifyResize();
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function _itemsChanged(change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;

      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }

      this._removeFocusedItem();

      this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);

      this._virtualCount = this.items ? this.items.length : 0; // Only blur if at least one item is added or removed.

      var itemAddedOrRemoved = change.value.indexSplices.some(function (splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });

      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();

        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      } // Render only if the affected index is rendered.


      var affectedIndexRendered = change.value.indexSplices.some(function (splice) {
        return splice.index + splice.addedCount >= this._virtualStart && splice.index <= this._virtualEnd;
      }, this);

      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }
  },
  _forwardItemPath: function _forwardItemPath(path, value) {
    path = path.slice(6); // 'items.'.length == 6

    var dot = path.indexOf('.');

    if (dot === -1) {
      dot = path.length;
    }

    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    var vidx = parseInt(path.substring(0, dot), 10);
    isIndexRendered = this._isIndexRendered(vidx);

    if (isIndexRendered) {
      pidx = this._getPhysicalIndex(vidx);
      inst = this.modelForElement(this._physicalItems[pidx]);
    } else if (offscreenInstance) {
      inst = offscreenInstance;
    }

    if (!inst || inst[this.indexAs] !== vidx) {
      return;
    }

    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');

    inst._setPendingPropertyOrPath(path, value, false, true);

    inst._flushProperties && inst._flushProperties(true); // TODO(blasten): V1 doesn't do this and it's a bug

    if (isIndexRendered) {
      this._updateMetrics([pidx]);

      this._positionItems();

      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!Object>} splices
   */
  _adjustVirtualIndex: function _adjustVirtualIndex(splices) {
    splices.forEach(function (splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this); // We only need to care about changes happening above the current position

      if (splice.index < this._virtualStart) {
        var delta = Math.max(splice.addedCount - splice.removed.length, splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;

        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },
  _removeItem: function _removeItem(item) {
    this.$.selector.deselect(item); // remove the current focused item

    if (this._focusedItem && this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function _iterateItems(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);

        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;

      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }

      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function _computeVidx(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }

    return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function _assignModels(itemSet) {
    this._iterateItems(function (pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];

      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = null;

        this._forwardProperty(inst, this.as, item);

        this._forwardProperty(inst, this.selectedAs, this.$.selector.isSelected(item));

        this._forwardProperty(inst, this.indexAs, vidx);

        this._forwardProperty(inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);

        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function _updateMetrics(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function (pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();

      this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    } // Update the average if it measured something.


    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
    }
  },
  _updateGridMetrics: function _updateGridMetrics() {
    this._itemWidth = this._physicalCount > 0 ? this._physicalItems[0].getBoundingClientRect().width : 200;
    this._rowHeight = this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ? Math.floor(this._viewportWidth / this._itemWidth) : this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function _positionItems() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function (pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor(modulus * this._itemWidth + rowOffset);

        if (this._isRTL) {
          x = x * -1;
        }

        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);

        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      this._iterateItems(function (pidx, vidx) {
        this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
        y += this._physicalSizes[pidx];
      });
    }
  },
  _getPhysicalSizeIncrement: function _getPhysicalSizeIncrement(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }

    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }

    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function _shouldRenderNextRow(vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function _adjustScrollPosition() {
    var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0); // Note: the delta can be positive or negative.

    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      var scrollTop = this._scrollTop; // juking scroll position during interial scrolling on iOS is no bueno

      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function _resetScrollPosition(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function _updateScrollerSize(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
    }

    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight; // Amortize height adjustment, so it won't trigger large repaints too often.

    if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function scrollToItem(item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function scrollToIndex(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }

    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])(); // Items should have been rendered prior scrolling to an index.

    if (this._physicalCount === 0) {
      return;
    }

    idx = this._clamp(idx, 0, this._virtualCount - 1); // Update the virtual start only when needed.

    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
    }

    this._manageFocus();

    this._assignModels();

    this._updateMetrics(); // Estimate new physical offset.


    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize; // scroll to the item as much as we can.

    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }

    this._updateScrollerSize(true);

    this._positionItems();

    this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);

    this._increasePoolIfNeeded(0); // clear cached visible index.


    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function _resetAverage() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function _resizeHandler() {
    this._debounce('_render', function () {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;

      if (this._isVisible) {
        this.updateViewportBoundaries(); // Reinstall the scroll event listener.

        this.toggleScrollListener(true);

        this._resetAverage();

        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function selectItem(item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function selectIndex(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);

      if (model) {
        model[this.selectedAs] = true;
      }

      this.updateSizeForIndex(index);
    }

    this.$.selector.selectIndex(index);
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function deselectItem(item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function deselectIndex(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }

    this.$.selector.deselectIndex(index);
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function toggleSelectionForItem(item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function toggleSelectionForIndex(index) {
    var isSelected = this.$.selector.isIndexSelected ? this.$.selector.isIndexSelected(index) : this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function clearSelection() {
    this._iterateItems(function (pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });

    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function _selectionEnabledChanged(selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function _selectionHandler(e) {
    var model = this.modelForElement(e.target);

    if (!model) {
      return;
    }

    var modelTabIndex, activeElTabIndex;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(e).path[0];

    var activeEl = this._getActiveElement();

    var physicalItem = this._physicalItems[this._getPhysicalIndex(model[this.indexAs])]; // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043


    if (target.localName === 'input' || target.localName === 'button' || target.localName === 'select') {
      return;
    } // Set a temporary tabindex


    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex; // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`

    if (activeEl && physicalItem !== activeEl && physicalItem.contains(activeEl) && activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }

    this.toggleSelectionForItem(model[this.as]);
  },
  _multiSelectionChanged: function _multiSelectionChanged(multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function updateSizeForItem(item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function updateSizeForIndex(index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }

    this._updateMetrics([this._getPhysicalIndex(index)]);

    this._positionItems();

    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function _manageFocus() {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function _convertIndexToCompleteRow(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
  },
  _isIndexRendered: function _isIndexRendered(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },
  _isIndexVisible: function _isIndexVisible(idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },
  _getPhysicalIndex: function _getPhysicalIndex(vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },
  focusItem: function focusItem(idx) {
    this._focusPhysicalItem(idx);
  },
  _focusPhysicalItem: function _focusPhysicalItem(idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }

    this._restoreFocusedItem(); // scroll to index to make sure it's rendered


    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }

    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];

    var model = this.modelForElement(physicalItem);
    var focusable; // set a secret tab index

    model.tabIndex = SECRET_TABINDEX; // check if focusable element is the physical item

    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    } // search for the element which tabindex is bound to the secret tab index


    if (!focusable) {
      focusable = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(physicalItem).querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    } // restore the tab index


    model.tabIndex = 0; // focus the focusable element

    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },
  _removeFocusedItem: function _removeFocusedItem() {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }

    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },
  _createFocusBackfillItem: function _createFocusBackfillItem() {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }

    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem = inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    } // Set the offcreen focused physical item.


    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx; // Hide the focused physical.

    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },
  _restoreFocusedItem: function _restoreFocusedItem() {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    } // Assign models to the focused index.


    this._assignModels(); // Get the new physical index for the focused index.


    var fpidx = this._focusedPhysicalIndex = this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];

    if (!onScreenItem) {
      return;
    }

    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem); // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').

    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1; // Restore the focused physical item.

      this._physicalItems[fpidx] = this._offscreenFocusedItem; // Hide the physical item that backfills.

      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();

      this._focusBackfillItem = null;
    }

    this._offscreenFocusedItem = null;
  },
  _didFocus: function _didFocus(e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;

    if (!targetModel) {
      return;
    }

    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem(); // Restore tabIndex for the currently focused item.


      if (focusedModel) {
        focusedModel.tabIndex = -1;
      } // Set the tabIndex for the next focused item.


      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];

      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },
  _keydownHandler: function _keydownHandler(e) {
    switch (e.keyCode) {
      case
      /* ARROW_DOWN */
      40:
        if (this._focusedVirtualIndex < this._virtualCount - 1) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_RIGHT */
      39:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;

      case
      /* ARROW_UP */
      38:
        if (this._focusedVirtualIndex > 0) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_LEFT */
      37:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;

      case
      /* ENTER */
      13:
        this._focusPhysicalItem(this._focusedVirtualIndex);

        if (this.selectionEnabled) this._selectionHandler(e);
        break;
    }
  },
  _clamp: function _clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _debounce: function _debounce(name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__["Debouncer"].debounce(this._debouncers[name], asyncModule, cb.bind(this));
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["enqueueDebouncer"])(this._debouncers[name]);
  },
  _forwardProperty: function _forwardProperty(inst, name, value) {
    inst._setPendingProperty(name, value);
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function _forwardHostPropV2(prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).forwardHostProp(prop, value);
      }
    }, this);
  },
  _notifyInstancePropV2: function _notifyInstancePropV2(inst, prop, value) {
    if (Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["matches"])(this.as, prop)) {
      var idx = inst[this.indexAs];

      if (prop == this.as) {
        this.items[idx] = value;
      }

      this.notifyPath(Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["translate"])(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function _getStampedChildren() {
    return this._physicalItems;
  },
  _forwardInstancePath: function _forwardInstancePath(inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
    }
  },
  _forwardParentPath: function _forwardParentPath(path, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).notifyPath(path, value, true);
      }
    }, this);
  },
  _forwardParentProp: function _forwardParentProp(prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item)[prop] = value;
      }
    }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function _getActiveElement() {
    var itemsHost = this._itemsParent.node.domHost;
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(itemsHost ? itemsHost.root : document).activeElement;
  }
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js ***!
  \*******************************************************************************************/
/*! exports provided: ComboBoxDataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxDataProviderMixin", function() { return ComboBoxDataProviderMixin; });
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */

var ComboBoxDataProviderMixin = function ComboBoxDataProviderMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(DataProviderMixin, _superClass);

      function DataProviderMixin() {
        _classCallCheck(this, DataProviderMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(DataProviderMixin).apply(this, arguments));
      }

      _createClass(DataProviderMixin, [{
        key: "_dataProviderClearFilter",
        value: function _dataProviderClearFilter(dataProvider, opened, value) {
          // Can't depend on filter in this obsever as we don't want
          // to clear the filter whenever it's set
          if (dataProvider && this.filter) {
            this.size = undefined;
            this._pendingRequests = {};
            this.filter = '';
            this.clearCache();
          }
        }
      }, {
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(DataProviderMixin.prototype), "ready", this).call(this);

          this.clearCache();
          this.$.overlay.addEventListener('index-requested', function (e) {
            var index = e.detail.index;

            if (index !== undefined) {
              var page = _this._getPageForIndex(index);

              if (_this._shouldLoadPage(page)) {
                _this._loadPage(page);
              }
            }
          });
        }
      }, {
        key: "_dataProviderFilterChanged",
        value: function _dataProviderFilterChanged() {
          if (this.dataProvider && this.opened) {
            this.size = undefined;
            this._pendingRequests = {};
            this.clearCache();
          }
        }
      }, {
        key: "_ensureFirstPage",
        value: function _ensureFirstPage(opened) {
          if (opened && this._shouldLoadPage(0)) {
            this._loadPage(0);
          }
        }
      }, {
        key: "_shouldLoadPage",
        value: function _shouldLoadPage(page) {
          if (!this.filteredItems || this._forceNextRequest) {
            this._forceNextRequest = false;
            return true;
          }

          var loadedItem = this.filteredItems[page * this.pageSize];

          if (loadedItem !== undefined) {
            return loadedItem instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"];
          } else {
            return this.size === undefined;
          }
        }
      }, {
        key: "_loadPage",
        value: function _loadPage(page) {
          var _this2 = this;

          // make sure same page isn't requested multiple times.
          if (!this._pendingRequests[page] && this.dataProvider) {
            this.loading = true;
            var params = {
              page: page,
              pageSize: this.pageSize,
              filter: this.filter
            };

            var callback = function callback(items, size) {
              if (_this2._pendingRequests[page] === callback) {
                if (!_this2.filteredItems) {
                  var filteredItems = [];
                  filteredItems.splice.apply(filteredItems, [params.page * params.pageSize, items.length].concat(_toConsumableArray(items)));
                  _this2.filteredItems = filteredItems;
                } else {
                  _this2.splice.apply(_this2, ['filteredItems', params.page * params.pageSize, items.length].concat(_toConsumableArray(items)));
                } // Update selectedItem from filteredItems if value is set


                if (_this2._isValidValue(_this2.value) && _this2._getItemValue(_this2.selectedItem) !== _this2.value) {
                  _this2._selectItemForValue(_this2.value);
                }

                _this2.size = size;
                delete _this2._pendingRequests[page];

                if (Object.keys(_this2._pendingRequests).length === 0) {
                  _this2.loading = false;
                }
              }
            };

            this._pendingRequests[page] = callback;
            this.dataProvider(params, callback);
          }
        }
      }, {
        key: "_getPageForIndex",
        value: function _getPageForIndex(index) {
          return Math.floor(index / this.pageSize);
        }
        /**
         * Clears the cached pages and reloads data from dataprovider when needed.
         */

      }, {
        key: "clearCache",
        value: function clearCache() {
          if (!this.dataProvider) {
            return;
          }

          this._pendingRequests = {};
          var filteredItems = [];

          for (var i = 0; i < (this.size || 0); i++) {
            filteredItems.push(this.__placeHolder);
          }

          this.filteredItems = filteredItems;

          if (this.opened) {
            this._loadPage(0);
          } else {
            this._forceNextRequest = true;
          }
        }
      }, {
        key: "_sizeChanged",
        value: function _sizeChanged() {
          var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var filteredItems = (this.filteredItems || []).slice(0, size);

          for (var i = 0; i < size; i++) {
            filteredItems[i] = filteredItems[i] !== undefined ? filteredItems[i] : this.__placeHolder;
          }

          this.filteredItems = filteredItems;
        }
      }, {
        key: "_pageSizeChanged",
        value: function _pageSizeChanged(pageSize, oldPageSize) {
          if (Math.floor(pageSize) !== pageSize || pageSize === 0) {
            this.pageSize = oldPageSize;
            throw new Error('`pageSize` value must be an integer > 0');
          }

          this.clearCache();
        }
      }, {
        key: "_dataProviderChanged",
        value: function _dataProviderChanged(dataProvider, oldDataProvider) {
          var _this3 = this;

          this._ensureItemsOrDataProvider(function () {
            _this3.dataProvider = oldDataProvider;
          });
        }
      }, {
        key: "_ensureItemsOrDataProvider",
        value: function _ensureItemsOrDataProvider(restoreOldValueCallback) {
          if (this.items !== undefined && this.dataProvider !== undefined) {
            restoreOldValueCallback();
            throw new Error('Using `items` and `dataProvider` together is not supported');
          }
        }
      }, {
        key: "_warnDataProviderValue",
        value: function _warnDataProviderValue(dataProvider, value) {
          if (dataProvider && value !== '' && (this.selectedItem === undefined || this.selectedItem === null)) {
            var valueIndex = this._indexOfValue(value, this.filteredItems);

            if (valueIndex < 0 || !this._getItemLabel(this.filteredItems[valueIndex])) {
              /* eslint-disable no-console */
              console.warn('Warning: unable to determine the label for the provided `value`. ' + 'Nothing to display in the text field. This usually happens when ' + 'setting an initial `value` before any items are returned from ' + 'the `dataProvider` callback. Consider setting `selectedItem` ' + 'instead of `value`');
              /* eslint-enable no-console */
            }
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Number of items fetched at a time from the dataprovider.
             */
            pageSize: {
              type: Number,
              value: 50,
              observer: '_pageSizeChanged'
            },

            /**
             * Total number of items.
             */
            size: {
              type: Number,
              observer: '_sizeChanged'
            },

            /**
             * Function that provides items lazily. Receives arguments `params`, `callback`
             *
             * `params.page` Requested page index
             *
             * `params.pageSize` Current page size
             *
             * `params.filter` Currently applied filter
             *
             * `callback(items, size)` Callback function with arguments:
             *   - `items` Current page of items
             *   - `size` Total number of items.
             */
            dataProvider: {
              type: Object,
              observer: '_dataProviderChanged'
            },
            _pendingRequests: {
              value: function value() {
                return {};
              }
            },
            __placeHolder: {
              value: new _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"]()
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_dataProviderFilterChanged(filter, dataProvider)', '_dataProviderClearFilter(dataProvider, opened, value)', '_warnDataProviderValue(dataProvider, value)', '_ensureFirstPage(opened)'];
        }
      }]);

      return DataProviderMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_list_iron_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-list/iron-list.js */ "./node_modules/@polymer/iron-list/iron-list.js");
/* harmony import */ var _vaadin_combo_box_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-combo-box-item.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js");
/* harmony import */ var _vaadin_combo_box_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role$=\"[[_getAriaRole(index)]]\" aria-selected$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"], ["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role\\$=\"[[_getAriaRole(index)]]\" aria-selected\\$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme\\$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"]);

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







var TOUCH_DEVICE = function () {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}();
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */


var ComboBoxDropdownWrapperElement =
/*#__PURE__*/
function (_ref) {
  _inherits(ComboBoxDropdownWrapperElement, _ref);

  function ComboBoxDropdownWrapperElement() {
    _classCallCheck(this, ComboBoxDropdownWrapperElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxDropdownWrapperElement).apply(this, arguments));
  }

  _createClass(ComboBoxDropdownWrapperElement, [{
    key: "_fireTouchAction",
    value: function _fireTouchAction(sourceEvent) {
      this.dispatchEvent(new CustomEvent('vaadin-overlay-touch-action', {
        detail: {
          sourceEvent: sourceEvent
        }
      }));
    }
  }, {
    key: "_getItems",
    value: function _getItems(opened, items) {
      return opened ? items : [];
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, items, loading) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        if (!opened) {
          return;
        } else {
          this._initDropdown();
        }
      } // Do not attach if no items
      // Do not dettach if opened but user types an invalid search


      this.$.dropdown.opened = !!(opened && (loading || this.$.dropdown.opened || items && items.length));
    }
  }, {
    key: "_initDropdown",
    value: function _initDropdown() {
      var _this = this;

      this.$.dropdown.removeAttribute('disable-upgrade');

      this._templateChanged();

      this._loadingChanged(this.loading);

      this.$.dropdown.$.overlay.addEventListener('touchend', function (e) {
        return _this._fireTouchAction(e);
      });
      this.$.dropdown.$.overlay.addEventListener('touchmove', function (e) {
        return _this._fireTouchAction(e);
      }); // Prevent blurring the input when clicking inside the overlay.

      this.$.dropdown.$.overlay.addEventListener('mousedown', function (e) {
        return e.preventDefault();
      }); // IE11: when scrolling with mouse, the focus goes to the scroller.
      // This causes the overlay closing due to defocusing the input field.
      // Prevent focusing the scroller by setting `unselectable="on"`.

      if (/Trident/.test(navigator.userAgent)) {
        this._scroller.setAttribute('unselectable', 'on');
      }
    }
  }, {
    key: "_templateChanged",
    value: function _templateChanged(e) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        return;
      }

      this._selector = this.$.dropdown.$.overlay.content.querySelector('#selector');
      this._scroller = this.$.dropdown.$.overlay.content.querySelector('#scroller');
    }
  }, {
    key: "_loadingChanged",
    value: function _loadingChanged(loading) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        return;
      }

      if (loading) {
        this.$.dropdown.$.overlay.setAttribute('loading', '');
      } else {
        this.$.dropdown.$.overlay.removeAttribute('loading');
      }
    }
  }, {
    key: "_selectorChanged",
    value: function _selectorChanged(selector) {
      this._patchWheelOverScrolling();
    }
  }, {
    key: "_setOverlayHeight",
    value: function _setOverlayHeight() {
      if (!this.opened || !this.positionTarget || !this._selector) {
        return;
      }

      var targetRect = this.positionTarget.getBoundingClientRect();
      this._scroller.style.maxHeight = (window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-combo-box-overlay-max-height') : getComputedStyle(this).getPropertyValue('--vaadin-combo-box-overlay-max-height')) || '65vh';

      var maxHeight = this._maxOverlayHeight(targetRect); // overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.


      this.$.dropdown.$.overlay.style.maxHeight = maxHeight; // we need to set height for iron-list to make its `firstVisibleIndex` work correctly.

      this._selector.style.maxHeight = maxHeight;
      this.updateViewportBoundaries();
    }
  }, {
    key: "_maxOverlayHeight",
    value: function _maxOverlayHeight(targetRect) {
      var margin = 8;
      var minHeight = 116; // Height of two items in combo-box

      var bottom = Math.min(window.innerHeight, document.body.scrollHeight - document.body.scrollTop);

      if (this.$.dropdown.alignedAbove) {
        return Math.max(targetRect.top - margin + Math.min(document.body.scrollTop, 0), minHeight) + 'px';
      } else {
        return Math.max(bottom - targetRect.bottom - margin, minHeight) + 'px';
      }
    }
  }, {
    key: "_getFocusedItem",
    value: function _getFocusedItem(focusedIndex) {
      if (focusedIndex >= 0) {
        return this._items[focusedIndex];
      }
    }
  }, {
    key: "_isItemSelected",
    value: function _isItemSelected(item, selectedItem, itemIdPath) {
      if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"]) {
        return false;
      } else if (itemIdPath && item !== undefined && selectedItem !== undefined) {
        return this.get(itemIdPath, item) === this.get(itemIdPath, selectedItem);
      } else {
        return item === selectedItem;
      }
    }
  }, {
    key: "_onItemClick",
    value: function _onItemClick(e) {
      if (e.detail && e.detail.sourceEvent && e.detail.sourceEvent.stopPropagation) {
        this._stopPropagation(e.detail.sourceEvent);
      }

      this.dispatchEvent(new CustomEvent('selection-changed', {
        detail: {
          item: e.model.item
        }
      }));
    }
    /**
     * Gets the index of the item with the provided label.
     * @return {Number}
     */

  }, {
    key: "indexOfLabel",
    value: function indexOfLabel(label) {
      if (this._items && label) {
        for (var i = 0; i < this._items.length; i++) {
          if (this.getItemLabel(this._items[i]).toString().toLowerCase() === label.toString().toLowerCase()) {
            return i;
          }
        }
      }

      return -1;
    }
    /**
     * If dataProvider is used, dispatch a request for the item’s index if
     * the item is a placeholder object.
     *
     * @return {Number}
     */

  }, {
    key: "__requestItemByIndex",
    value: function __requestItemByIndex(item, index) {
      if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"] && index !== undefined) {
        this.dispatchEvent(new CustomEvent('index-requested', {
          detail: {
            index: index
          }
        }));
      }

      return index;
    }
    /**
     * Gets the label string for the item based on the `_itemLabelPath`.
     * @return {String}
     */

  }, {
    key: "getItemLabel",
    value: function getItemLabel(item, itemLabelPath) {
      itemLabelPath = itemLabelPath || this._itemLabelPath;
      var label = item && itemLabelPath ? this.get(itemLabelPath, item) : undefined;

      if (label === undefined || label === null) {
        label = item ? item.toString() : '';
      }

      return label;
    }
  }, {
    key: "_isItemFocused",
    value: function _isItemFocused(focusedIndex, itemIndex) {
      return focusedIndex == itemIndex;
    }
  }, {
    key: "_getAriaSelected",
    value: function _getAriaSelected(focusedIndex, itemIndex) {
      return this._isItemFocused(focusedIndex, itemIndex).toString();
    }
  }, {
    key: "_getAriaRole",
    value: function _getAriaRole(itemIndex) {
      return itemIndex !== undefined ? 'option' : false;
    }
  }, {
    key: "_focusedIndexChanged",
    value: function _focusedIndexChanged(index) {
      if (index >= 0) {
        this._scrollIntoView(index);
      }
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(index) {
      var visibleItemsCount = this._visibleItemsCount();

      if (visibleItemsCount === undefined) {
        // Scroller is not visible. Moving is unnecessary.
        return;
      }

      var targetIndex = index;

      if (index > this._selector.lastVisibleIndex - 1) {
        // Index is below the bottom, scrolling down. Make the item appear at the bottom.
        targetIndex = index - visibleItemsCount + 1;
      } else if (index > this._selector.firstVisibleIndex) {
        // The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
        // the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
        targetIndex = this._selector.firstVisibleIndex;
      }

      this._selector.scrollToIndex(Math.max(0, targetIndex)); // Sometimes the item is partly below the bottom edge, detect and adjust.


      var pidx = this._selector._getPhysicalIndex(index),
          physicalItem = this._selector._physicalItems[pidx];

      if (!physicalItem) {
        return;
      }

      var physicalItemRect = physicalItem.getBoundingClientRect(),
          scrollerRect = this._scroller.getBoundingClientRect(),
          scrollTopAdjust = physicalItemRect.bottom - scrollerRect.bottom + this._viewportTotalPaddingBottom;

      if (scrollTopAdjust > 0) {
        this._scroller.scrollTop += scrollTopAdjust;
      }
    }
  }, {
    key: "ensureItemsRendered",
    value: function ensureItemsRendered() {
      this._selector._render();
    }
  }, {
    key: "adjustScrollPosition",
    value: function adjustScrollPosition() {
      if (this.opened && this._items) {
        this._scrollIntoView(this._focusedIndex);
      }
    }
    /**
     * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
     * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
     * scrolling the parent similarly to touch scrolling.
     */

  }, {
    key: "_patchWheelOverScrolling",
    value: function _patchWheelOverScrolling() {
      var selector = this._selector;
      selector.addEventListener('wheel', function (e) {
        var scroller = selector._scroller || selector.scrollTarget;
        var scrolledToTop = scroller.scrollTop === 0;
        var scrolledToBottom = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 1;

        if (scrolledToTop && e.deltaY < 0) {
          e.preventDefault();
        } else if (scrolledToBottom && e.deltaY > 0) {
          e.preventDefault();
        }
      });
    }
  }, {
    key: "updateViewportBoundaries",
    value: function updateViewportBoundaries() {
      this._cachedViewportTotalPaddingBottom = undefined;

      this._selector.updateViewportBoundaries();
    }
  }, {
    key: "_visibleItemsCount",
    value: function _visibleItemsCount() {
      if (!this._selector) {
        return;
      } // Ensure items are rendered


      this._selector.flushDebouncer('_debounceTemplate'); // Ensure items are positioned


      this._selector.scrollToIndex(this._selector.firstVisibleIndex); // Ensure viewport boundaries are up-to-date


      this.updateViewportBoundaries();
      return this._selector.lastVisibleIndex - this._selector.firstVisibleIndex + 1;
    }
  }, {
    key: "_selectItem",
    value: function _selectItem(item) {
      item = typeof item === 'number' ? this._items[item] : item;

      if (this._selector.selectedItem !== item) {
        this._selector.selectItem(item);
      }
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }, {
    key: "_hidden",
    value: function _hidden(itemsChange) {
      return !this.loading && (!this._items || !this._items.length);
    }
  }, {
    key: "_viewportTotalPaddingBottom",
    get: function get() {
      if (this._cachedViewportTotalPaddingBottom === undefined) {
        var itemsStyle = window.getComputedStyle(this._selector.$.items);
        this._cachedViewportTotalPaddingBottom = [itemsStyle.paddingBottom, itemsStyle.borderBottomWidth].map(function (v) {
          return parseInt(v, 10);
        }).reduce(function (sum, v) {
          return sum + v;
        });
      }

      return this._cachedViewportTotalPaddingBottom;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-dropdown-wrapper';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * True if the device supports touch events.
         */
        touchDevice: {
          type: Boolean,
          value: TOUCH_DEVICE
        },
        opened: Boolean,

        /**
         * The element to position/align the dropdown by.
         */
        positionTarget: {
          type: Object
        },

        /**
         * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
         */
        renderer: Function,

        /**
         * `true` when new items are being loaded.
         */
        loading: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          observer: '_setOverlayHeight'
        },

        /**
         * Used to propagate the `theme` attribute from the host element.
         */
        theme: String,
        _selectedItem: {
          type: Object
        },
        _items: {
          type: Object
        },
        _focusedIndex: {
          type: Number,
          value: -1,
          observer: '_focusedIndexChanged'
        },
        _focusedItem: {
          type: String,
          computed: '_getFocusedItem(_focusedIndex)'
        },
        _itemLabelPath: {
          type: String,
          value: 'label'
        },
        _itemValuePath: {
          type: String,
          value: 'value'
        },
        _selector: Object,
        _itemIdPath: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_selectorChanged(_selector)', '_loadingChanged(loading)', '_openedChanged(opened, _items, loading)'];
    }
  }]);

  return ComboBoxDropdownWrapperElement;
}(
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(_class, _PolymerElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  return _class;
}(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(ComboBoxDropdownWrapperElement.is, ComboBoxDropdownWrapperElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"], ["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden\\$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme\\$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

var ComboBoxOverlayElement =
/*#__PURE__*/
function (_OverlayElement) {
  _inherits(ComboBoxOverlayElement, _OverlayElement);

  function ComboBoxOverlayElement() {
    _classCallCheck(this, ComboBoxOverlayElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxOverlayElement).apply(this, arguments));
  }

  _createClass(ComboBoxOverlayElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxOverlayElement.prototype), "ready", this).call(this);

      var loader = document.createElement('div');
      loader.setAttribute('part', 'loader');
      var content = this.shadowRoot.querySelector(['[part~="content"]']);
      content.parentNode.insertBefore(loader, content);
    }
  }], [{
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-overlay';
    }
  }]);

  return ComboBoxOverlayElement;
}(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__["OverlayElement"]);

customElements.define(ComboBoxOverlayElement.is, ComboBoxOverlayElement);
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */

var ComboBoxDropdownElement =
/*#__PURE__*/
function (_DisableUpgradeMixin) {
  _inherits(ComboBoxDropdownElement, _DisableUpgradeMixin);

  _createClass(ComboBoxDropdownElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-dropdown';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        opened: {
          type: Boolean,
          observer: '_openedChanged'
        },
        template: {
          type: Object,
          notify: true
        },

        /**
         * The element to position/align the dropdown by.
         */
        positionTarget: {
          type: Object
        },

        /**
         * If `true`, overlay is aligned above the `positionTarget`
         */
        alignedAbove: {
          type: Boolean,
          value: false
        },

        /**
         * Used to propagate the `theme` attribute from the host element.
         */
        theme: String
      };
    }
  }]);

  function ComboBoxDropdownElement() {
    var _this;

    _classCallCheck(this, ComboBoxDropdownElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxDropdownElement).call(this));
    _this._boundSetPosition = _this._setPosition.bind(_assertThisInitialized(_this));
    _this._boundOutsideClickListener = _this._outsideClickListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ComboBoxDropdownElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "connectedCallback", this).call(this);

      this.addEventListener('iron-resize', this._boundSetPosition);
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "ready", this).call(this); // Preventing the default modal behaviour of the overlay on input clicking


      this.$.overlay.addEventListener('vaadin-overlay-outside-click', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "disconnectedCallback", this).call(this);

      this.removeEventListener('iron-resize', this._boundSetPosition); // Making sure the overlay is closed and removed from DOM after detaching the dropdown.

      this.opened = false;
    }
  }, {
    key: "notifyResize",
    value: function notifyResize() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "notifyResize", this).call(this);

      if (this.positionTarget && this.opened) {
        this._setPosition(); // Schedule another position update (to cover virtual keyboard opening for example)


        requestAnimationFrame(this._setPosition.bind(this));
      }
    }
    /**
     * Fired after the `vaadin-combo-box-dropdown` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */

    /**
     * Fired after the `vaadin-combo-box-dropdown` closes.
     *
     * @event vaadin-combo-box-dropdown-closed
     */

  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, oldValue) {
      if (!!opened === !!oldValue) {
        return;
      }

      if (opened) {
        this.$.overlay.style.position = this._isPositionFixed(this.positionTarget) ? 'fixed' : 'absolute';

        this._setPosition();

        window.addEventListener('scroll', this._boundSetPosition, true);
        document.addEventListener('click', this._boundOutsideClickListener, true);
        this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-opened', {
          bubbles: true,
          composed: true
        }));
      } else {
        window.removeEventListener('scroll', this._boundSetPosition, true);
        document.removeEventListener('click', this._boundOutsideClickListener, true);
        this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-closed', {
          bubbles: true,
          composed: true
        }));
      }
    } // We need to listen on 'click' event and capture it and close the overlay before
    // propagating the event to the listener in the button. Otherwise, if the clicked button would call
    // open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4

  }, {
    key: "_outsideClickListener",
    value: function _outsideClickListener(event) {
      var eventPath = event.composedPath();

      if (eventPath.indexOf(this.positionTarget) < 0 && eventPath.indexOf(this.$.overlay) < 0) {
        this.opened = false;
      }
    }
  }, {
    key: "_isPositionFixed",
    value: function _isPositionFixed(element) {
      var offsetParent = this._getOffsetParent(element);

      return window.getComputedStyle(element).position === 'fixed' || offsetParent && this._isPositionFixed(offsetParent);
    }
  }, {
    key: "_getOffsetParent",
    value: function _getOffsetParent(element) {
      if (element.assignedSlot) {
        return element.assignedSlot.parentElement;
      } else if (element.parentElement) {
        return element.offsetParent;
      }

      var parent = element.parentNode;

      if (parent && parent.nodeType === 11 && parent.host) {
        return parent.host; // parent is #shadowRoot
      }
    }
  }, {
    key: "_verticalOffset",
    value: function _verticalOffset(overlayRect, targetRect) {
      return this.alignedAbove ? -overlayRect.height : targetRect.height;
    }
  }, {
    key: "_shouldAlignAbove",
    value: function _shouldAlignAbove(targetRect) {
      var spaceBelow = (window.innerHeight - targetRect.bottom - Math.min(document.body.scrollTop, 0)) / window.innerHeight;
      return spaceBelow < 0.30;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition(e) {
      if (e && e.target) {
        var target = e.target === document ? document.body : e.target;
        var parent = this.$.overlay.parentElement;

        if (!(target.contains(this.$.overlay) || target.contains(this.positionTarget)) || parent !== document.body) {
          return;
        }
      }

      var targetRect = this.positionTarget.getBoundingClientRect();
      this.alignedAbove = this._shouldAlignAbove(targetRect);
      var overlayRect = this.$.overlay.getBoundingClientRect();
      this._translateX = targetRect.left - overlayRect.left + (this._translateX || 0);
      this._translateY = targetRect.top - overlayRect.top + (this._translateY || 0) + this._verticalOffset(overlayRect, targetRect);

      var _devicePixelRatio = window.devicePixelRatio || 1;

      this._translateX = Math.round(this._translateX * _devicePixelRatio) / _devicePixelRatio;
      this._translateY = Math.round(this._translateY * _devicePixelRatio) / _devicePixelRatio;
      this.$.overlay.style.transform = "translate3d(".concat(this._translateX, "px, ").concat(this._translateY, "px, 0)");
      this.$.overlay.style.width = this.positionTarget.clientWidth + 'px';
      this.$.overlay.style.justifyContent = this.alignedAbove ? 'flex-end' : 'flex-start'; // TODO: fire only when position actually changes changes

      this.dispatchEvent(new CustomEvent('position-changed'));
    }
  }]);

  return ComboBoxDropdownElement;
}(Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__["mixinBehaviors"])(_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronResizableBehavior"], _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ComboBoxDropdownElement.is, ComboBoxDropdownElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n         display: none;\n      }\n    </style>\n    <div part=\"content\" id=\"content\"></div>\n"]);

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * The default element used for items in the vaadin-combo-box.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the item label or template content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `selected` | Set when the item is selected | :host
 * `focused` | Set when the item is focused | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @private
 */

var ComboBoxItemElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(ComboBoxItemElement, _ThemableMixin);

  function ComboBoxItemElement() {
    _classCallCheck(this, ComboBoxItemElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxItemElement).apply(this, arguments));
  }

  _createClass(ComboBoxItemElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxItemElement.prototype), "connectedCallback", this).call(this);

      if (!this._itemTemplateInstance) {
        // 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
        var overlay = this.getRootNode().host.getRootNode().host;
        var dropdown = overlay.__dataHost;
        var comboBoxOverlay = dropdown.getRootNode().host;
        this._comboBox = comboBoxOverlay.getRootNode().host;

        this._comboBox._ensureTemplatized();

        if (this._comboBox._TemplateClass) {
          this._itemTemplateInstance = new this._comboBox._TemplateClass({});
          this.$.content.textContent = '';
          this.$.content.appendChild(this._itemTemplateInstance.root);
        }
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!this.renderer) {
        return;
      }

      var model = {
        index: this.index,
        item: this.item
      };
      this.renderer(this.$.content, this._comboBox, model);
    }
  }, {
    key: "_rendererOrItemChanged",
    value: function _rendererOrItemChanged(renderer, index, item) {
      if (item === undefined || index === undefined) {
        return;
      }

      if (this._oldRenderer !== renderer) {
        this.$.content.innerHTML = '';
      }

      if (renderer) {
        this._oldRenderer = renderer;

        this._render();
      }
    }
  }, {
    key: "_updateLabel",
    value: function _updateLabel(label, _itemTemplateInstance) {
      if (_itemTemplateInstance === undefined && this.$.content && !this.renderer) {
        // Only set label to textContent no template
        this.$.content.textContent = label;
      }
    }
  }, {
    key: "_updateTemplateInstanceVariable",
    value: function _updateTemplateInstanceVariable(variable, value, _itemTemplateInstance) {
      if (variable === undefined || value === undefined || _itemTemplateInstance === undefined) {
        return;
      }

      _itemTemplateInstance[variable] = value;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-item';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * The index of the item
         */
        index: Number,

        /**
         * The item to render
         * @type {(String|Object)}
         */
        item: Object,

        /**
         * The text label corresponding to the item
         */
        label: String,

        /**
         * True when item is selected
         */
        selected: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * True when item is focused
         */
        focused: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * The template instance corresponding to the item
         */
        _itemTemplateInstance: Object,

        /**
         * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
         */
        renderer: Function,

        /**
         * Saved instance of a custom renderer function.
         */
        _oldRenderer: Function
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_rendererOrItemChanged(renderer, index, item.*)', '_updateLabel(label, _itemTemplateInstance)', '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)', '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)', '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)', '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)'];
    }
  }]);

  return ComboBoxItemElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(ComboBoxItemElement.is, ComboBoxItemElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js ***!
  \*****************************************************************************/
/*! exports provided: ComboBoxLightElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxLightElement", function() { return ComboBoxLightElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-mixin.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js");
/* harmony import */ var _vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-data-provider-mixin.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js");
/* harmony import */ var _vaadin_combo_box_dropdown_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-wrapper.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id=\"overlay\" opened=\"[[opened]]\" position-target=\"[[inputElement]]\" renderer=\"[[renderer]]\" _focused-index=\"[[_focusedIndex]]\" _item-id-path=\"[[itemIdPath]]\" _item-label-path=\"[[itemLabelPath]]\" loading=\"[[loading]]\" theme=\"[[theme]]\">\n    </vaadin-combo-box-dropdown-wrapper>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * `<vaadin-combo-box-light>` is a customizable version of the `<vaadin-combo-box>` providing
 * only the dropdown functionality and leaving the input field definition to the user.
 *
 * The element has the same API as `<vaadin-combo-box>`.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `value` by default. See the example below for a simplest possible example
 * using a `<vaadin-text-field>` element.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <vaadin-text-field>
 *   </vaadin-text-field>
 * </vaadin-combo-box-light>
 * ```
 *
 * If you are using other custom input fields like `<iron-input>`, you
 * need to define the name of the bindable property with the `attrForValue` attribute.
 *
 * ```html
 * <vaadin-combo-box-light attr-for-value="bind-value">
 *   <iron-input>
 *     <input>
 *   </iron-input>
 * </vaadin-combo-box-light>
 * ```
 *
 * In the next example you can see how to create a custom input field based
 * on a `<paper-input>` decorated with a custom `<iron-icon>` and
 * two `<paper-button>`s to act as the clear and toggle controls.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <paper-input label="Elements" class="input">
 *     <iron-icon icon="toll" slot="prefix"></iron-icon>
 *     <paper-button slot="suffix" class="clear-button">Clear</paper-button>
 *     <paper-button slot="suffix" class="toggle-button">Toggle</paper-button>
 *   </paper-input>
 * </vaadin-combo-box-light>
 * ```
 * @memberof Vaadin
 * @mixes Vaadin.ComboBoxDataProviderMixin
 * @mixes Vaadin.ComboBoxMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 */

var ComboBoxLightElement =
/*#__PURE__*/
function (_ThemePropertyMixin) {
  _inherits(ComboBoxLightElement, _ThemePropertyMixin);

  _createClass(ComboBoxLightElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-light';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Name of the two-way data-bindable property representing the
         * value of the custom input field.
         */
        attrForValue: {
          type: String,
          value: 'value'
        },
        inputElement: {
          type: Element,
          readOnly: true
        }
      };
    }
  }]);

  function ComboBoxLightElement() {
    var _this;

    _classCallCheck(this, ComboBoxLightElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxLightElement).call(this));
    _this._boundInputValueChanged = _this._inputValueChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ComboBoxLightElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "ready", this).call(this);

      this._toggleElement = this.querySelector('.toggle-button');
      this._clearElement = this.querySelector('.clear-button');
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "connectedCallback", this).call(this);

      var cssSelector = 'vaadin-text-field,iron-input,paper-input,.paper-input-input,.input';

      this._setInputElement(this.querySelector(cssSelector));

      this._revertInputValue();

      this.inputElement.addEventListener('input', this._boundInputValueChanged);

      this._preventInputBlur();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "disconnectedCallback", this).call(this);

      this.inputElement.removeEventListener('input', this._boundInputValueChanged);

      this._restoreInputBlur();
    }
  }, {
    key: "focused",
    get: function get() {
      return this.getRootNode().activeElement === this.inputElement;
    }
  }, {
    key: "_propertyForValue",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__["dashToCamelCase"])(this.attrForValue);
    }
  }, {
    key: "_inputElementValue",
    get: function get() {
      return this.inputElement && this.inputElement[this._propertyForValue];
    },
    set: function set(value) {
      if (this.inputElement) {
        this.inputElement[this._propertyForValue] = value;
      }
    }
  }]);

  return ComboBoxLightElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemePropertyMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxDataProviderMixin"])(Object(_vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ComboBoxMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

customElements.define(ComboBoxLightElement.is, ComboBoxLightElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ComboBoxMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxMixin", function() { return ComboBoxMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * @polymerMixin
 */

var ComboBoxMixin = function ComboBoxMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_subclass) {
      _inherits(VaadinComboBoxMixinElement, _subclass);

      function VaadinComboBoxMixinElement() {
        _classCallCheck(this, VaadinComboBoxMixinElement);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinComboBoxMixinElement).apply(this, arguments));
      }

      _createClass(VaadinComboBoxMixinElement, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinComboBoxMixinElement.prototype), "ready", this).call(this);

          this.addEventListener('focusout', function (e) {
            // Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
            var dropdown = _this.$.overlay.$.dropdown;

            if (dropdown && dropdown.$ && e.relatedTarget === dropdown.$.overlay) {
              e.composedPath()[0].focus();
              return;
            }

            if (!_this._closeOnBlurIsPrevented) {
              _this.close();
            }
          });
          this._lastCommittedValue = this.value;
          _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yAnnouncer"].requestAvailability(); // 2.0 does not support 'overlay.selection-changed' syntax in listeners

          this.$.overlay.addEventListener('selection-changed', this._overlaySelectedItemChanged.bind(this));
          this.addEventListener('vaadin-combo-box-dropdown-closed', this._onClosed.bind(this));
          this.addEventListener('vaadin-combo-box-dropdown-opened', this._onOpened.bind(this));
          this.addEventListener('keydown', this._onKeyDown.bind(this));
          this.addEventListener('click', this._onClick.bind(this));
          this.$.overlay.addEventListener('vaadin-overlay-touch-action', this._onOverlayTouchAction.bind(this));
          this.addEventListener('touchend', function (e) {
            if (!_this._clearElement || e.composedPath()[0] !== _this._clearElement) {
              return;
            }

            e.preventDefault();

            _this._clear();
          });
          this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_5__["FlattenedNodesObserver"](this, function (info) {
            _this._setTemplateFromNodes(info.addedNodes);
          });
        }
        /**
         * Manually invoke existing renderer.
         */

      }, {
        key: "render",
        value: function render() {
          if (this.$.overlay._selector) {
            this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item').forEach(function (item) {
              return item._render();
            });
          }
        }
      }, {
        key: "_setTemplateFromNodes",
        value: function _setTemplateFromNodes(nodes) {
          this._itemTemplate = nodes.filter(function (node) {
            return node.localName && node.localName === 'template';
          })[0] || this._itemTemplate;
        }
      }, {
        key: "_removeNewRendererOrTemplate",
        value: function _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
          if (template !== oldTemplate) {
            this._itemTemplate = undefined;
          } else if (renderer !== oldRenderer) {
            this.renderer = undefined;
          }
        }
      }, {
        key: "_templateOrRendererChanged",
        value: function _templateOrRendererChanged(template, renderer) {
          if (template && renderer) {
            this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

            throw new Error('You should only use either a renderer or a template for combo box items');
          }

          this._oldTemplate = template;
          this._oldRenderer = renderer;
        }
        /**
         * Opens the dropdown list.
         */

      }, {
        key: "open",
        value: function open() {
          // Prevent _open() being called when input is disabled or read-only
          if (!this.disabled && !this.readonly) {
            this.opened = true;
          }
        }
        /**
         * Closes the dropdown list.
         */

      }, {
        key: "close",
        value: function close() {
          this.opened = false;
        }
      }, {
        key: "_openedChanged",
        value: function _openedChanged(value, old) {
          // Prevent _close() being called when opened is set to its default value (false).
          if (old === undefined) {
            return;
          }

          if (this.opened) {
            this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring'); // For touch devices, we don't want to popup virtual keyboard on touch devices unless input
            // is explicitly focused by the user.

            if (!this.$.overlay.touchDevice) {
              // Check to see if there is a focused property and if it's already true.
              if (!this.focused) {
                this.focus();
              }
            }
          } else {
            if (this._openedWithFocusRing && this.hasAttribute('focused')) {
              this.focusElement.setAttribute('focus-ring', '');
            }

            this._onClosed();
          }
        }
      }, {
        key: "_onOverlayTouchAction",
        value: function _onOverlayTouchAction(event) {
          // On touch devices, blur the input on touch start inside the overlay, in order to hide
          // the virtual keyboard. But don't close the overlay on this blur.
          this._closeOnBlurIsPrevented = true;
          this.inputElement.blur();
          this._closeOnBlurIsPrevented = false;
        }
      }, {
        key: "_onClick",
        value: function _onClick(e) {
          this._closeOnBlurIsPrevented = true;
          var path = e.composedPath();

          if (path.indexOf(this._clearElement) !== -1) {
            this._clear();

            this.focus();
          } else if (path.indexOf(this.inputElement) !== -1) {
            if (path.indexOf(this._toggleElement) > -1 && this.opened) {
              this.close();
            } else {
              this.open();
            }
          }

          this._closeOnBlurIsPrevented = false;
        }
        /**
         * Keyboard navigation
         */

      }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
          if (this._isEventKey(e, 'down')) {
            this._closeOnBlurIsPrevented = true;

            this._onArrowDown();

            this._closeOnBlurIsPrevented = false; // prevent caret from moving

            e.preventDefault();
          } else if (this._isEventKey(e, 'up')) {
            this._closeOnBlurIsPrevented = true;

            this._onArrowUp();

            this._closeOnBlurIsPrevented = false; // prevent caret from moving

            e.preventDefault();
          } else if (this._isEventKey(e, 'enter')) {
            this._onEnter(e);
          } else if (this._isEventKey(e, 'esc')) {
            this._onEscape(e);
          }
        }
      }, {
        key: "_isEventKey",
        value: function _isEventKey(e, k) {
          return _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k);
        }
      }, {
        key: "_getItemLabel",
        value: function _getItemLabel(item) {
          return this.$.overlay.getItemLabel(item);
        }
      }, {
        key: "_getItemValue",
        value: function _getItemValue(item) {
          var value = item && this.itemValuePath ? this.get(this.itemValuePath, item) : undefined;

          if (value === undefined) {
            value = item ? item.toString() : '';
          }

          return value;
        }
      }, {
        key: "_onArrowDown",
        value: function _onArrowDown() {
          if (this.opened) {
            if (this.$.overlay._items) {
              this._focusedIndex = Math.min(this.$.overlay._items.length - 1, this._focusedIndex + 1);

              this._prefillFocusedItemLabel();
            }
          } else {
            this.open();
          }
        }
      }, {
        key: "_onArrowUp",
        value: function _onArrowUp() {
          if (this.opened) {
            if (this._focusedIndex > -1) {
              this._focusedIndex = Math.max(0, this._focusedIndex - 1);
            } else {
              if (this.$.overlay._items) {
                this._focusedIndex = this.$.overlay._items.length - 1;
              }
            }

            this._prefillFocusedItemLabel();
          } else {
            this.open();
          }
        }
      }, {
        key: "_prefillFocusedItemLabel",
        value: function _prefillFocusedItemLabel() {
          var _this2 = this;

          if (this._focusedIndex > -1) {
            // Reset the input value asyncronously to prevent partial value changes
            // announce. Makes OSX VoiceOver to announce the complete value instead.
            this._inputElementValue = ''; // 1ms delay needed for OSX VoiceOver to realise input value was reset

            setTimeout(function () {
              _this2._inputElementValue = _this2._getItemLabel(_this2.$.overlay._focusedItem);

              _this2._markAllSelectionRange();
            }, 1);
          }
        }
      }, {
        key: "_setSelectionRange",
        value: function _setSelectionRange(start, end) {
          // vaadin-text-field does not implement setSelectionRange, hence we need the native input
          var input = this._nativeInput || this.inputElement; // Setting selection range focuses and/or moves the caret in some browsers,
          // and there's no need to modify the selection range if the input isn't focused anyway.
          // This affects Safari. When the overlay is open, and then hiting tab, browser should focus
          // the next focusable element instead of the combo-box itself.
          // Checking the focused property here is enough instead of checking the activeElement.

          if (this.hasAttribute('focused') && input && input.setSelectionRange) {
            try {
              input.setSelectionRange(start, end);
            } catch (ignore) {// IE11 randomly fails when running tests in Sauce.
            }
          }
        }
      }, {
        key: "_markAllSelectionRange",
        value: function _markAllSelectionRange() {
          if (this._inputElementValue !== undefined) {
            this._setSelectionRange(0, this._inputElementValue.length);
          }
        }
      }, {
        key: "_clearSelectionRange",
        value: function _clearSelectionRange() {
          if (this._inputElementValue !== undefined) {
            var pos = this._inputElementValue ? this._inputElementValue.length : 0;

            this._setSelectionRange(pos, pos);
          }
        }
      }, {
        key: "_onEnter",
        value: function _onEnter(e) {
          // should close on enter when custom values are allowed, input field is cleared, or when an existing
          // item is focused with keyboard.
          if (this.opened && (this.allowCustomValue || this._inputElementValue === '' || this._focusedIndex > -1)) {
            this.close(); // Do not submit the surrounding form.

            e.preventDefault();
          }
        }
      }, {
        key: "_onEscape",
        value: function _onEscape(e) {
          if (this.opened) {
            this._stopPropagation(e);

            if (this._focusedIndex > -1) {
              this._focusedIndex = -1;

              this._revertInputValue();
            } else {
              this.cancel();
            }
          }
        }
      }, {
        key: "_toggleElementChanged",
        value: function _toggleElementChanged(toggleElement) {
          if (toggleElement) {
            // Don't blur the input on toggle mousedown
            toggleElement.addEventListener('mousedown', function (e) {
              return e.preventDefault();
            });
          }
        }
        /**
         * Clears the current value.
         */

      }, {
        key: "_clear",
        value: function _clear() {
          this.selectedItem = null;

          if (this.allowCustomValue) {
            this.value = '';
          }

          if (!this.opened) {
            this._detectAndDispatchChange();
          }
        }
        /**
         * Reverts back to original value.
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this._revertInputValueToValue(); // In the next _detectAndDispatchChange() call, the change detection should not pass


          this._lastCommittedValue = this.value;
          this.close();
        }
      }, {
        key: "_onOpened",
        value: function _onOpened() {
          var _this3 = this;

          // Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
          // we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
          // because that will cause problems to say the least.
          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__["flush"])(); // With iron-list v1.3.9, calling `notifyResize()` no longer renders
          // the items synchronously. It is required to have the items rendered
          // before we update the overlay and the list positions and sizes.

          this.$.overlay.ensureItemsRendered();

          this.$.overlay._selector.toggleScrollListener(true); // Ensure metrics are up-to-date


          this.$.overlay.updateViewportBoundaries(); // Force iron-list to create reusable nodes. Otherwise it will only start
          // doing that in scroll listener, which is especially slow in Edge.

          this.$.overlay._selector._increasePoolIfNeeded();

          setTimeout(function () {
            return _this3._resizeDropdown();
          }, 1); // Defer scroll position adjustment to prevent freeze in Edge

          window.requestAnimationFrame(function () {
            return _this3.$.overlay.adjustScrollPosition();
          }); // _detectAndDispatchChange() should not consider value changes done before opening

          this._lastCommittedValue = this.value;
        }
      }, {
        key: "_onClosed",
        value: function _onClosed() {
          // Happens when the overlay is closed by clicking outside
          if (this.opened) {
            this.close();
          }

          if (this.$.overlay._items && this._focusedIndex > -1) {
            var focusedItem = this.$.overlay._items[this._focusedIndex];

            if (this.selectedItem !== focusedItem) {
              this.selectedItem = focusedItem;
            } // make sure input field is updated in case value doesn't change (i.e. FOO -> foo)


            this._inputElementValue = this._getItemLabel(this.selectedItem);
          } else if (this._inputElementValue === '' || this._inputElementValue === undefined) {
            this.selectedItem = null;

            if (this.allowCustomValue) {
              this.value = '';
            }
          } else {
            if (this.allowCustomValue) {
              var e = new CustomEvent('custom-value-set', {
                detail: this._inputElementValue,
                composed: true,
                cancelable: true,
                bubbles: true
              });
              this.dispatchEvent(e);

              if (!e.defaultPrevented) {
                var customValue = this._inputElementValue;

                this._selectItemForValue(customValue);

                this.value = customValue;
              }
            } else {
              this._inputElementValue = this.selectedItem ? this._getItemLabel(this.selectedItem) : '';
            }
          }

          this._detectAndDispatchChange();

          this._clearSelectionRange();

          if (!this.dataProvider) {
            this.filter = '';
          }
        }
      }, {
        key: "_inputValueChanged",

        /**
         *  Filtering and items handling
         */
        value: function _inputValueChanged(e) {
          // Handle only input events from our inputElement.
          if (e.composedPath().indexOf(this.inputElement) !== -1) {
            this._inputElementValue = this.inputElement[this._propertyForValue];

            this._filterFromInput();
          }
        }
      }, {
        key: "_filterFromInput",
        value: function _filterFromInput(e) {
          if (!this.opened) {
            this.open();
          }

          if (this.filter === this._inputElementValue) {
            // Filter and input value might get out of sync, while keyboard navigating for example.
            // Afterwards, input value might be changed to the same value as used in filtering.
            // In situation like these, we need to make sure all the filter changes handlers are run.
            this._filterChanged(this.filter, this.itemValuePath, this.itemLabelPath);
          } else {
            this.filter = this._inputElementValue;
          }
        }
      }, {
        key: "_itemLabelPathChanged",
        value: function _itemLabelPathChanged(itemLabelPath, oldItemLabelPath) {
          if (typeof itemLabelPath !== 'string') {
            console.error('You should set itemLabelPath to a valid string');
          }
        }
      }, {
        key: "_filterChanged",
        value: function _filterChanged(filter, itemValuePath, itemLabelPath) {
          if (filter === undefined) {
            return;
          }

          if (this.items) {
            this.filteredItems = this._filterItems(this.items, filter);
          } else {
            // With certain use cases (e. g., external filtering), `items` are
            // undefined. Filtering is unnecessary per se, but the filteredItems
            // observer should still be invoked to update focused item.
            this._filteredItemsChanged({
              path: 'filteredItems',
              value: this.filteredItems
            }, itemValuePath, itemLabelPath);
          }
        }
      }, {
        key: "_loadingChanged",
        value: function _loadingChanged(loading) {
          if (loading) {
            this._focusedIndex = -1;
          }
        }
      }, {
        key: "_revertInputValue",
        value: function _revertInputValue() {
          if (this.filter !== '') {
            this._inputElementValue = this.filter;
          } else {
            this._revertInputValueToValue();
          }

          this._clearSelectionRange();
        }
      }, {
        key: "_revertInputValueToValue",
        value: function _revertInputValueToValue() {
          if (this.allowCustomValue && !this.selectedItem) {
            this._inputElementValue = this.value;
          } else {
            this._inputElementValue = this._getItemLabel(this.selectedItem);
          }
        }
      }, {
        key: "_resizeDropdown",
        value: function _resizeDropdown() {
          this.$.overlay.$.dropdown.notifyResize();
        }
      }, {
        key: "_updateHasValue",
        value: function _updateHasValue(hasValue) {
          if (hasValue) {
            this.setAttribute('has-value', '');
          } else {
            this.removeAttribute('has-value');
          }
        }
      }, {
        key: "_selectedItemChanged",
        value: function _selectedItemChanged(selectedItem, itemLabelPath) {
          if (selectedItem === null || selectedItem === undefined) {
            if (this.filteredItems) {
              if (!this.allowCustomValue) {
                this.value = '';
              }

              this._updateHasValue(this.value !== '');

              this._inputElementValue = this.value;
            }
          } else {
            var value = this._getItemValue(selectedItem);

            if (this.value !== value) {
              this.value = value;
            }

            this._updateHasValue(true);

            this._inputElementValue = this._getItemLabel(selectedItem); // Could not be defined in 1.x because ready is called after all prop-setters

            if (this.inputElement) {
              this.inputElement[this._propertyForValue] = this._inputElementValue;
            }
          }

          this.$.overlay._selectedItem = selectedItem;

          if (this.filteredItems && this.$.overlay._items) {
            this._focusedIndex = this.filteredItems.indexOf(selectedItem);
          }
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(value, oldVal) {
          if (value === '' && oldVal === undefined) {
            // initializing, no need to do anything (#554)
            return;
          }

          if (this._isValidValue(value)) {
            var item;

            if (this._getItemValue(this.selectedItem) !== value) {
              this._selectItemForValue(value);
            } else {
              item = this.selectedItem;
            }

            if (!item && this.allowCustomValue) {
              this._inputElementValue = value;
            }

            this._updateHasValue(this.value !== '');
          } else {
            this.selectedItem = null;
          } // In the next _detectAndDispatchChange() call, the change detection should pass


          this._lastCommittedValue = undefined;
        }
      }, {
        key: "_detectAndDispatchChange",
        value: function _detectAndDispatchChange() {
          if (this.value !== this._lastCommittedValue) {
            this.dispatchEvent(new CustomEvent('change', {
              bubbles: true
            }));
            this._lastCommittedValue = this.value;
          }
        }
      }, {
        key: "_itemsChanged",
        value: function _itemsChanged(items, oldItems) {
          var _this4 = this;

          this._ensureItemsOrDataProvider(function () {
            _this4.items = oldItems;
          });
        }
      }, {
        key: "_itemsOrPathsChanged",
        value: function _itemsOrPathsChanged(e, itemValuePath, itemLabelPath) {
          if (e.value === undefined) {
            return;
          }

          if (e.path === 'items' || e.path === 'items.splices') {
            this.filteredItems = this.items ? this.items.slice(0) : this.items;

            var valueIndex = this._indexOfValue(this.value, this.items);

            this._focusedIndex = valueIndex;
            var item = valueIndex > -1 && this.items[valueIndex];

            if (item) {
              this.selectedItem = item;
            }
          }
        }
      }, {
        key: "_filteredItemsChanged",
        value: function _filteredItemsChanged(e, itemValuePath, itemLabelPath) {
          if (e.value === undefined) {
            return;
          }

          if (e.path === 'filteredItems' || e.path === 'filteredItems.splices') {
            this._setOverlayItems(this.filteredItems);

            this._focusedIndex = this.opened ? this.$.overlay.indexOfLabel(this.filter) : this._indexOfValue(this.value, this.filteredItems);

            if (this.opened) {
              this._repositionOverlay();
            }
          }
        }
      }, {
        key: "_filterItems",
        value: function _filterItems(arr, filter) {
          var _this5 = this;

          if (!arr) {
            return arr;
          }

          return arr.filter(function (item) {
            filter = filter ? filter.toString().toLowerCase() : ''; // Check if item contains input value.

            return _this5._getItemLabel(item).toString().toLowerCase().indexOf(filter) > -1;
          });
        }
      }, {
        key: "_selectItemForValue",
        value: function _selectItemForValue(value) {
          var valueIndex = this._indexOfValue(value, this.filteredItems);

          var previouslySelectedItem = this.selectedItem;
          this.selectedItem = valueIndex >= 0 ? this.filteredItems[valueIndex] : this.dataProvider && this.selectedItem === undefined ? undefined : null;

          if (this.selectedItem === null && previouslySelectedItem === null) {
            this._selectedItemChanged(this.selectedItem);
          }
        }
      }, {
        key: "_setOverlayItems",
        value: function _setOverlayItems(items) {
          this.$.overlay.set('_items', items);

          if (this.opened) {
            this._resizeDropdown();
          }
        }
      }, {
        key: "_repositionOverlay",
        value: function _repositionOverlay() {
          var _this6 = this;

          // async needed to reposition correctly after filtering
          // (especially when aligned on top of input)
          setTimeout(function () {
            _this6._resizeDropdown();

            _this6.$.overlay.updateViewportBoundaries();

            _this6.$.overlay.ensureItemsRendered();

            _this6.$.overlay._selector.notifyResize();

            Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_1__["flush"])();
          }, 1);
        }
      }, {
        key: "_indexOfValue",
        value: function _indexOfValue(value, items) {
          if (items && this._isValidValue(value)) {
            for (var i = 0; i < items.length; i++) {
              if (this._getItemValue(items[i]) === value) {
                return i;
              }
            }
          }

          return -1;
        }
        /**
         * Checks if the value is supported as an item value in this control.
         *
         * @return {boolean}
         */

      }, {
        key: "_isValidValue",
        value: function _isValidValue(value) {
          return value !== undefined && value !== null;
        }
      }, {
        key: "_overlaySelectedItemChanged",
        value: function _overlaySelectedItemChanged(e) {
          // stop this private event from leaking outside.
          e.stopPropagation();

          if (e.detail.item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_6__["ComboBoxPlaceholder"]) {
            // Placeholder items should not be selectable.
            return;
          }

          if (this.opened) {
            this.close();
          }

          if (this.selectedItem !== e.detail.item) {
            this.selectedItem = e.detail.item;

            this._detectAndDispatchChange();
          }
        }
        /**
         * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
         *
         * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
         */

      }, {
        key: "validate",
        value: function validate() {
          return !(this.invalid = !this.checkValidity());
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         *
         * You can override the `checkValidity` method for custom validations.
         */

      }, {
        key: "checkValidity",
        value: function checkValidity() {
          if (this.inputElement.validate) {
            return this.inputElement.validate();
          }
        }
      }, {
        key: "_ensureTemplatized",
        value: function _ensureTemplatized() {
          if (!this._TemplateClass) {
            var tpl = this._itemTemplate || this._getRootTemplate();

            if (tpl) {
              this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_2__["templatize"])(tpl, this, {
                instanceProps: this._instanceProps,
                forwardHostProp: function forwardHostProp(prop, value) {
                  var items = this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item');

                  Array.prototype.forEach.call(items, function (item) {
                    if (item._itemTemplateInstance) {
                      item._itemTemplateInstance.set(prop, value);

                      item._itemTemplateInstance.notifyPath(prop, value, true);
                    }
                  });
                }
              });
            }
          }
        }
      }, {
        key: "_getRootTemplate",
        value: function _getRootTemplate() {
          return Array.prototype.filter.call(this.children, function (elem) {
            return elem.tagName === 'TEMPLATE';
          })[0];
        }
      }, {
        key: "_preventInputBlur",
        value: function _preventInputBlur() {
          if (this._toggleElement) {
            this._toggleElement.addEventListener('click', this._preventDefault);
          }

          if (this._clearElement) {
            this._clearElement.addEventListener('click', this._preventDefault);
          }
        }
      }, {
        key: "_restoreInputBlur",
        value: function _restoreInputBlur() {
          if (this._toggleElement) {
            this._toggleElement.removeEventListener('click', this._preventDefault);
          }

          if (this._clearElement) {
            this._clearElement.removeEventListener('click', this._preventDefault);
          }
        }
      }, {
        key: "_preventDefault",
        value: function _preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "_stopPropagation",
        value: function _stopPropagation(e) {
          e.stopPropagation();
        }
        /**
         * Fired when the value changes.
         *
         * @event value-changed
         * @param {Object} detail
         *  @param {String} detail.value the combobox value
         */

        /**
         * Fired when selected item changes.
         *
         * @event selected-item-changed
         * @param {Object} detail
         *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
         */

        /**
         * Fired when the user sets a custom value.
         * @event custom-value-set
         * @param {String} detail the custom value
         */

        /**
         * Fired when value changes.
         * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
         * @event change
         */

      }, {
        key: "_propertyForValue",
        get: function get() {
          return 'value';
        }
      }, {
        key: "_instanceProps",
        get: function get() {
          return {
            item: true,
            index: true,
            selected: true,
            focused: true
          };
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * True if the dropdown is open, false otherwise.
             */
            opened: {
              type: Boolean,
              notify: true,
              value: false,
              reflectToAttribute: true,
              observer: '_openedChanged'
            },

            /**
             * Set to true to disable this element.
             */
            disabled: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },

            /**
             * When present, it specifies that the element field is read-only.
             */
            readonly: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },

            /**
             * Custom function for rendering the content of every item.
             * Receives three arguments:
             *
             * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
             * - `comboBox` The reference to the `<vaadin-combo-box>` element.
             * - `model` The object with the properties related with the rendered
             *   item, contains:
             *   - `model.index` The index of the rendered item.
             *   - `model.item` The item.
             */
            renderer: Function,

            /**
             * A full set of items to filter the visible options from.
             * The items can be of either `String` or `Object` type.
             */
            items: {
              type: Array,
              observer: '_itemsChanged'
            },

            /**
             * If `true`, the user can input a value that is not present in the items list.
             * `value` property will be set to the input value in this case.
             * Also, when `value` is set programmatically, the input value will be set
             * to reflect that value.
             */
            allowCustomValue: {
              type: Boolean,
              value: false
            },

            /**
             * A subset of items, filtered based on the user input. Filtered items
             * can be assigned directly to omit the internal filtering functionality.
             * The items can be of either `String` or `Object` type.
             */
            filteredItems: {
              type: Array
            },

            /**
             * The `String` value for the selected item of the combo box. Provides
             * the value for `iron-form`.
             *
             * When there’s no item selected, the value is an empty string.
             *
             * Use `selectedItem` property to get the raw selected item from
             * the `items` array.
             */
            value: {
              type: String,
              observer: '_valueChanged',
              notify: true,
              value: ''
            },

            /**
             * Used to detect user value changes and fire `change` events.
             */
            _lastCommittedValue: String,

            /*
             * When set to `true`, "loading" attribute is added to host and the overlay element.
             */
            loading: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            _focusedIndex: {
              type: Number,
              value: -1
            },

            /**
             * Filtering string the user has typed into the input field.
             */
            filter: {
              type: String,
              value: '',
              notify: true
            },

            /**
             * The selected item from the `items` array.
             */
            selectedItem: {
              type: Object,
              notify: true
            },

            /**
             * Path for label of the item. If `items` is an array of objects, the
             * `itemLabelPath` is used to fetch the displayed string label for each
             * item.
             *
             * The item label is also used for matching items when processing user
             * input, i.e., for filtering and selecting items.
             *
             * When using item templates, the property is still needed because it is used
             * for filtering, and for displaying the selected item value in the input box.
             */
            itemLabelPath: {
              type: String,
              value: 'label',
              observer: '_itemLabelPathChanged'
            },

            /**
             * Path for the value of the item. If `items` is an array of objects, the
             * `itemValuePath:` is used to fetch the string value for the selected
             * item.
             *
             * The item value is used in the `value` property of the combo box,
             * to provide the form value.
             */
            itemValuePath: {
              type: String,
              value: 'value'
            },

            /**
             * Path for the id of the item. If `items` is an array of objects,
             * the `itemIdPath` is used to compare and identify the same item
             * in `selectedItem` and `filteredItems` (items given by the
             * `dataProvider` callback).
             */
            itemIdPath: String,

            /**
             * The name of this element.
             */
            name: {
              type: String
            },

            /**
             * Set to true if the value is invalid.
             */
            invalid: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              value: false
            },
            _toggleElement: Object,
            _clearElement: Object,
            _inputElementValue: String,
            _closeOnBlurIsPrevented: Boolean,
            _previousDocumentPointerEvents: String,
            _itemTemplate: Object
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_filterChanged(filter, itemValuePath, itemLabelPath)', '_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)', '_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)', '_templateOrRendererChanged(_itemTemplate, renderer)', '_loadingChanged(loading)', '_selectedItemChanged(selectedItem, itemLabelPath)', '_toggleElementChanged(_toggleElement)'];
        }
      }]);

      return VaadinComboBoxMixinElement;
    }(subclass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js ***!
  \***********************************************************************************/
/*! exports provided: ComboBoxPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxPlaceholder", function() { return ComboBoxPlaceholder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/*
 * Placeholder object class representing items being loaded.
 *
 * @private
 */
var ComboBoxPlaceholder =
/*#__PURE__*/
function () {
  function ComboBoxPlaceholder() {
    _classCallCheck(this, ComboBoxPlaceholder);
  }

  _createClass(ComboBoxPlaceholder, [{
    key: "toString",
    value: function toString() {
      return '';
    }
  }]);

  return ComboBoxPlaceholder;
}();

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_overlay_theme_lumo_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-combo-box-overlay\" theme-for=\"vaadin-combo-box-overlay\">\n  <template>\n    <style include=\"lumo-overlay lumo-menu-overlay-core\">\n      [part=\"content\"] {\n        padding: 0;\n      }\n\n      :host {\n        /* TODO: using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: var(--lumo-space-xs);\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */\n      :host([opened]) {\n        --iron-list-items-container_-_border-width: var(--lumo-space-xs);\n        --iron-list-items-container_-_border-style: solid;\n        --iron-list-items-container_-_border-color: transparent;\n      }\n\n      /* Loading state */\n\n      /* When items are empty, the sinner needs some room */\n      :host(:not([closing])) [part~=\"content\"] {\n        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));\n      }\n\n      [part~=\"overlay\"] {\n        position: relative;\n      }\n\n      :host([loading]) [part~=\"loader\"] {\n        box-sizing: border-box;\n        width: var(--lumo-icon-size-s);\n        height: var(--lumo-icon-size-s);\n        position: absolute;\n        z-index: 1;\n        left: var(--lumo-space-s);\n        right: var(--lumo-space-s);\n        top: var(--lumo-space-s);\n        margin-left: auto;\n        margin-inline-start: auto;\n        margin-inline-end: 0;\n        border: 2px solid transparent;\n        border-color:\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color)\n          var(--lumo-primary-color);\n        border-radius: calc(0.5 * var(--lumo-icon-size-s));\n        opacity: 0;\n        animation:\n          1s linear infinite lumo-combo-box-loader-rotate,\n          .3s .1s lumo-combo-box-loader-fade-in both;\n        pointer-events: none;\n      }\n\n      @keyframes lumo-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes lumo-combo-box-loader-rotate {\n        0% {\n          transform: rotate(0deg);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_item_theme_lumo_vaadin_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-item/theme/lumo/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-combo-box-item\" theme-for=\"vaadin-combo-box-item\">\n  <template>\n    <style include=\"lumo-item\">\n      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */\n\n      :host {\n        cursor: default;\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        padding-left: calc(var(--lumo-border-radius) / 4);\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n        transition: background-color 100ms;\n        border-radius: var(--lumo-border-radius);\n        overflow: hidden;\n        --_lumo-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround (show the selected item checkmark) */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      :host([focused]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover) {\n          background-color: transparent;\n        }\n\n        :host([focused]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_combo_box_dropdown_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js");
/* harmony import */ var _vaadin_combo_box_item_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-combo-box-item-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js");
/* harmony import */ var _src_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-combo-box-light.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js");




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-combo-box-light.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js");


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js ***!
  \*******************************************************************/
/*! exports provided: ItemMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMixin", function() { return ItemMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
 *
 * `focused`, `active` and `focus-ring` are set as only as attributes.
 * @polymerMixin
 */
var ItemMixin = function ItemMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinItemMixin, _superClass);

      _createClass(VaadinItemMixin, null, [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Used for mixin detection because `instanceof` does not work with mixins.
             * e.g. in VaadinListMixin it filters items by using the
             * `element._hasVaadinItemMixin` condition.
             */
            _hasVaadinItemMixin: {
              value: true
            },

            /**
             * If true, the user cannot interact with this element.
             */
            disabled: {
              type: Boolean,
              value: false,
              observer: '_disabledChanged',
              reflectToAttribute: true
            },

            /**
             * If true, the item is in selected state.
             */
            selected: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              observer: '_selectedChanged'
            },
            _value: String
          };
        }
      }]);

      function VaadinItemMixin() {
        var _this;

        _classCallCheck(this, VaadinItemMixin);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(VaadinItemMixin).call(this));
        /**
         * Submittable string value. The default value is the trimmed text content of the element.
         * @type {string}
         */

        _this.value;
        return _this;
      }

      _createClass(VaadinItemMixin, [{
        key: "ready",
        value: function ready() {
          var _this2 = this;

          _get(_getPrototypeOf(VaadinItemMixin.prototype), "ready", this).call(this);

          var attrValue = this.getAttribute('value');

          if (attrValue !== null) {
            this.value = attrValue;
          }

          this.addEventListener('focus', function (e) {
            return _this2._setFocused(true);
          }, true);
          this.addEventListener('blur', function (e) {
            return _this2._setFocused(false);
          }, true);
          this.addEventListener('mousedown', function (e) {
            _this2._setActive(_this2._mousedown = true);

            var mouseUpListener = function mouseUpListener() {
              _this2._setActive(_this2._mousedown = false);

              document.removeEventListener('mouseup', mouseUpListener);
            };

            document.addEventListener('mouseup', mouseUpListener);
          });
          this.addEventListener('keydown', function (e) {
            return _this2._onKeydown(e);
          });
          this.addEventListener('keyup', function (e) {
            return _this2._onKeyup(e);
          });
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinItemMixin.prototype), "disconnectedCallback", this).call(this); // in Firefox and Safari, blur does not fire on the element when it is removed,
          // especially between keydown and keyup events, being active at the same time.
          // reproducible in `<vaadin-dropdown-menu>` when closing overlay on select.


          if (this.hasAttribute('active')) {
            this._setFocused(false);
          }
        }
      }, {
        key: "_selectedChanged",
        value: function _selectedChanged(selected) {
          this.setAttribute('aria-selected', selected);
        }
      }, {
        key: "_disabledChanged",
        value: function _disabledChanged(disabled) {
          if (disabled) {
            this.selected = false;
            this.setAttribute('aria-disabled', 'true');
            this.blur();
          } else {
            this.removeAttribute('aria-disabled');
          }
        }
      }, {
        key: "_setFocused",
        value: function _setFocused(focused) {
          if (focused) {
            this.setAttribute('focused', '');

            if (!this._mousedown) {
              this.setAttribute('focus-ring', '');
            }
          } else {
            this.removeAttribute('focused');
            this.removeAttribute('focus-ring');

            this._setActive(false);
          }
        }
      }, {
        key: "_setActive",
        value: function _setActive(active) {
          if (active) {
            this.setAttribute('active', '');
          } else {
            this.removeAttribute('active');
          }
        }
      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (/^( |SpaceBar|Enter)$/.test(event.key) && !event.defaultPrevented) {
            event.preventDefault();

            this._setActive(true);
          }
        }
      }, {
        key: "_onKeyup",
        value: function _onKeyup(event) {
          if (this.hasAttribute('active')) {
            this._setActive(false);

            this.click();
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value !== undefined ? this._value : this.textContent.trim();
        },
        set: function set(value) {
          this._value = value;
        }
      }]);

      return VaadinItemMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/src/vaadin-item.js ***!
  \*************************************************************/
/*! exports provided: ItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemElement", function() { return ItemElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-item-mixin.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n    </style>\n    <div part=\"content\">\n      <slot></slot>\n    </div>\n"]);

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-item>` is a Web Component providing layout for items in tabs and menus.
 *
 * ```
 *   <vaadin-item>
 *     Item content
 *   </vaadin-item>
 * ```
 *
 * ### Selectable
 *
 * `<vaadin-item>` has the `selected` property and the corresponding state attribute.
 * Currently, the component sets the `selected` to false, when `disabled` property is set to true.
 * But other than that, the `<vaadin-item>` does not switch selection by itself.
 * In general, it is the wrapper component, like `<vaadin-list-box>`, which should update
 * the `selected` property on the items, e. g. on mousedown or when Enter / Spacebar is pressed.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the slot
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled item | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the item is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 *
 * @memberof Vaadin
 * @mixes Vaadin.ItemMixin
 * @mixes Vaadin.ThemableMixin
 */

var ItemElement =
/*#__PURE__*/
function (_ItemMixin) {
  _inherits(ItemElement, _ItemMixin);

  function ItemElement() {
    _classCallCheck(this, ItemElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemElement).apply(this, arguments));
  }

  _createClass(ItemElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-item';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.1.0';
    }
  }]);

  return ItemElement;
}(Object(_vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ItemMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ItemElement.is, ItemElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");





var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-item\" theme-for=\"vaadin-item\">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part=\"content\"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_item_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-item-styles.js */ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js");
/* harmony import */ var _src_vaadin_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-vaadin-overlay\" theme-for=\"vaadin-overlay\">\n  <template>\n    <style include=\"lumo-overlay\">\n      /* stylelint-disable no-empty-source */\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-overlay-styles.js */ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js");
/* harmony import */ var _src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWxpc3QvaXJvbi1saXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvc3JjL3ZhYWRpbi1jb21iby1ib3gtZGF0YS1wcm92aWRlci1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC9zcmMvdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC9zcmMvdmFhZGluLWNvbWJvLWJveC1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvc3JjL3ZhYWRpbi1jb21iby1ib3gtcGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC90aGVtZS9sdW1vL3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdGhlbWUvbHVtby92YWFkaW4tY29tYm8tYm94LWl0ZW0tc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdGhlbWUvbHVtby92YWFkaW4tY29tYm8tYm94LWxpZ2h0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvdmFhZGluLWNvbWJvLWJveC1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4taXRlbS9zcmMvdmFhZGluLWl0ZW0tbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWl0ZW0vc3JjL3ZhYWRpbi1pdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1pdGVtL3RoZW1lL2x1bW8vdmFhZGluLWl0ZW0tc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1pdGVtL3RoZW1lL2x1bW8vdmFhZGluLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvdGhlbWUvbHVtby92YWFkaW4tb3ZlcmxheS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvdGhlbWUvbHVtby92YWFkaW4tb3ZlcmxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblNjcm9sbFRhcmdldEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7T3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvbXV0YWJsZS1kYXRhLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lciBhcyBQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGl6ZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS90ZW1wbGF0aXplci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2FuaW1hdGlvbkZyYW1lLCBpZGxlUGVyaW9kLCBtaWNyb1Rhc2t9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcbmltcG9ydCB7RGVib3VuY2VyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQge2VucXVldWVEZWJvdW5jZXIsIGZsdXNofSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7bWF0Y2hlcywgdHJhbnNsYXRlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9wYXRoLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZUJhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3RlbXBsYXRpemUuanMnO1xuXG52YXIgSU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpob25lfGFkOyg/OiBVOyk/IENQVSkgT1MgKFxcZCspLyk7XG52YXIgSU9TX1RPVUNIX1NDUk9MTElORyA9IElPUyAmJiBJT1NbMV0gPj0gODtcbnZhciBERUZBVUxUX1BIWVNJQ0FMX0NPVU5UID0gMztcbnZhciBISURERU5fWSA9ICctMTAwMDBweCc7XG52YXIgU0VDUkVUX1RBQklOREVYID0gLTEwMDtcblxuLyoqXG5cbmBpcm9uLWxpc3RgIGRpc3BsYXlzIGEgdmlydHVhbCwgJ2luZmluaXRlJyBsaXN0LiBUaGUgdGVtcGxhdGUgaW5zaWRlXG50aGUgaXJvbi1saXN0IGVsZW1lbnQgcmVwcmVzZW50cyB0aGUgRE9NIHRvIGNyZWF0ZSBmb3IgZWFjaCBsaXN0IGl0ZW0uXG5UaGUgYGl0ZW1zYCBwcm9wZXJ0eSBzcGVjaWZpZXMgYW4gYXJyYXkgb2YgbGlzdCBpdGVtIGRhdGEuXG5cbkZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBub3QgZXZlcnkgaXRlbSBpbiB0aGUgbGlzdCBpcyByZW5kZXJlZCBhdCBvbmNlO1xuaW5zdGVhZCBhIHNtYWxsIHN1YnNldCBvZiBhY3R1YWwgdGVtcGxhdGUgZWxlbWVudHMgKihlbm91Z2ggdG8gZmlsbCB0aGVcbnZpZXdwb3J0KSogYXJlIHJlbmRlcmVkIGFuZCByZXVzZWQgYXMgdGhlIHVzZXIgc2Nyb2xscy4gQXMgc3VjaCwgaXQgaXMgaW1wb3J0YW50XG50aGF0IGFsbCBzdGF0ZSBvZiB0aGUgbGlzdCB0ZW1wbGF0ZSBpcyBib3VuZCB0byB0aGUgbW9kZWwgZHJpdmluZyBpdCwgc2luY2UgdGhlXG52aWV3IG1heSBiZSByZXVzZWQgd2l0aCBhIG5ldyBtb2RlbCBhdCBhbnkgdGltZS4gUGFydGljdWxhcmx5LCBhbnkgc3RhdGUgdGhhdFxubWF5IGNoYW5nZSBhcyB0aGUgcmVzdWx0IG9mIGEgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBsaXN0IGl0ZW0gbXVzdCBiZSBib3VuZFxudG8gdGhlIG1vZGVsIHRvIGF2b2lkIHZpZXcgc3RhdGUgaW5jb25zaXN0ZW5jeS5cblxuIyMjIFNpemluZyBpcm9uLWxpc3RcblxuYGlyb24tbGlzdGAgbXVzdCBlaXRoZXIgYmUgZXhwbGljaXRseSBzaXplZCwgb3IgZGVsZWdhdGUgc2Nyb2xsaW5nIHRvIGFuXG5leHBsaWNpdGx5IHNpemVkIHBhcmVudC4gQnkgXCJleHBsaWNpdGx5IHNpemVkXCIsIHdlIG1lYW4gaXQgZWl0aGVyIGhhcyBhblxuZXhwbGljaXQgQ1NTIGBoZWlnaHRgIHByb3BlcnR5IHNldCB2aWEgYSBjbGFzcyBvciBpbmxpbmUgc3R5bGUsIG9yIGVsc2UgaXMgc2l6ZWRcbmJ5IG90aGVyIGxheW91dCBtZWFucyAoZS5nLiB0aGUgYGZsZXhgIG9yIGBmaXRgIGNsYXNzZXMpLlxuXG4jIyMjIEZsZXhib3ggLSBbanNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3Zlam9uaS9lZGl0P2h0bWwsb3V0cHV0KVxuXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBFeHBsaWNpdCBzaXplIC0gW2pzYmluXShodHRwczovL2pzYmluLmNvbS92b3B1Y3VzL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBoZWlnaHQ6IDEwMHZoOyAvKiBkb24ndCB1c2UgJSB2YWx1ZXMgdW5sZXNzIHRoZSBwYXJlbnQgZWxlbWVudCBpcyBzaXplZC5cbipcXC9cbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBNYWluIGRvY3VtZW50IHNjcm9sbGluZyAtXG5banNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3dldmlyb3cvZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjxoZWFkPlxuICA8c3R5bGU+XG4gICAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgYXBwLXRvb2xiYXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICAvKiBhZGQgcGFkZGluZyBzaW5jZSB0aGUgYXBwLXRvb2xiYXIgaXMgZml4ZWQgYXQgdGhlIHRvcCAqXFwvXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBzY3JvbGwtdGFyZ2V0PVwiZG9jdW1lbnRcIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC9ib2R5PlxuYGBgXG5cbmBpcm9uLWxpc3RgIG11c3QgYmUgZ2l2ZW4gYSBgPHRlbXBsYXRlPmAgd2hpY2ggY29udGFpbnMgZXhhY3RseSBvbmUgZWxlbWVudC4gSW5cbnRoZSBleGFtcGxlcyBhYm92ZSB3ZSB1c2VkIGEgYDxkaXY+YCwgYnV0IHlvdSBjYW4gcHJvdmlkZSBhbnkgZWxlbWVudCAoaW5jbHVkaW5nXG5jdXN0b20gZWxlbWVudHMpLlxuXG4jIyMgVGVtcGxhdGUgbW9kZWxcblxuTGlzdCBpdGVtIHRlbXBsYXRlcyBzaG91bGQgYmluZCB0byB0ZW1wbGF0ZSBtb2RlbHMgb2YgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbmBgYGpzXG57XG4gIGluZGV4OiAwLCAgICAgICAgLy8gaW5kZXggaW4gdGhlIGl0ZW0gYXJyYXlcbiAgc2VsZWN0ZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgc2VsZWN0ZWRcbiAgdGFiSW5kZXg6IC0xLCAgICAvLyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCB0YWJJbmRleCBmb3IgZm9jdXMgbWFuYWdlbWVudFxuICBpdGVtOiB7fSAgICAgICAgIC8vIHVzZXIgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGl0ZW1zW2luZGV4XVxufVxuYGBgXG5cbkFsdGVybmF0aXZlbHksIHlvdSBjYW4gY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIHVzZWQgYXMgZGF0YSBpbmRleCBieSBjaGFuZ2luZ1xudGhlIGBpbmRleEFzYCBwcm9wZXJ0eS4gVGhlIGBhc2AgcHJvcGVydHkgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG9cbmFkZCB0byB0aGUgYmluZGluZyBzY29wZSBmb3IgdGhlIGFycmF5LlxuXG5Gb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBgZGF0YWAgYXJyYXk6XG5cbiMjIyMjIGRhdGEuanNvblxuXG5gYGBqc1xuW1xuICB7XCJuYW1lXCI6IFwiQm9iXCJ9LFxuICB7XCJuYW1lXCI6IFwiVGltXCJ9LFxuICB7XCJuYW1lXCI6IFwiTWlrZVwifVxuXVxuYGBgXG5cblRoZSBmb2xsb3dpbmcgY29kZSB3b3VsZCByZW5kZXIgdGhlIGxpc3QgKG5vdGUgdGhlIG5hbWUgcHJvcGVydHkgaXMgYm91bmQgZnJvbVxudGhlIG1vZGVsIG9iamVjdCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgc2NvcGUpOlxuXG5gYGBodG1sXG48aXJvbi1hamF4IHVybD1cImRhdGEuanNvblwiIGxhc3QtcmVzcG9uc2U9XCJ7e2RhdGF9fVwiIGF1dG8+PC9pcm9uLWFqYXg+XG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgR3JpZCBsYXlvdXRcblxuYGlyb24tbGlzdGAgc3VwcG9ydHMgYSBncmlkIGxheW91dCBpbiBhZGRpdGlvbiB0byBsaW5lYXIgbGF5b3V0IGJ5IHNldHRpbmdcbnRoZSBgZ3JpZGAgYXR0cmlidXRlLiAgSW4gdGhpcyBjYXNlLCB0aGUgbGlzdCB0ZW1wbGF0ZSBpdGVtIG11c3QgaGF2ZSBib3RoIGZpeGVkXG53aWR0aCBhbmQgaGVpZ2h0IChlLmcuIHZpYSBDU1MpLiBCYXNlZCBvbiB0aGlzLCB0aGUgbnVtYmVyIG9mIGl0ZW1zXG5wZXIgcm93IGFyZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGxpc3Qgdmlld3BvcnQuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmBpcm9uLWxpc3RgIGF1dG9tYXRpY2FsbHkgbWFuYWdlcyB0aGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBpdGVtcy4gSXQgYWxzb1xucHJvdmlkZXMgYSBgdGFiSW5kZXhgIHByb3BlcnR5IHdpdGhpbiB0aGUgdGVtcGxhdGUgc2NvcGUgdGhhdCBjYW4gYmUgdXNlZCBmb3JcbmtleWJvYXJkIG5hdmlnYXRpb24uIEZvciBleGFtcGxlLCB1c2VycyBjYW4gcHJlc3MgdGhlIHVwIGFuZCBkb3duIGtleXMgdG8gbW92ZVxudG8gcHJldmlvdXMgYW5kIG5leHQgaXRlbXMgaW4gdGhlIGxpc3Q6XG5cbmBgYGh0bWxcbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBTdHlsaW5nXG5cbllvdSBjYW4gdXNlIHRoZSBgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyYCBtaXhpbiB0byBzdHlsZSB0aGUgY29udGFpbmVyIG9mXG5pdGVtczpcblxuYGBgY3NzXG5pcm9uLWxpc3Qge1xuIC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfTtcbn1cbmBgYFxuXG4jIyMgUmVzaXppbmdcblxuYGlyb24tbGlzdGAgbGF5cyBvdXQgdGhlIGl0ZW1zIHdoZW4gaXQgcmVjZWl2ZXMgYSBub3RpZmljYXRpb24gdmlhIHRoZVxuYGlyb24tcmVzaXplYCBldmVudC4gVGhpcyBldmVudCBpcyBmaXJlZCBieSBhbnkgZWxlbWVudCB0aGF0IGltcGxlbWVudHNcbmBJcm9uUmVzaXphYmxlQmVoYXZpb3JgLlxuXG5CeSBkZWZhdWx0LCBlbGVtZW50cyBzdWNoIGFzIGBpcm9uLXBhZ2VzYCwgYHBhcGVyLXRhYnNgIG9yIGBwYXBlci1kaWFsb2dgIHdpbGxcbnRyaWdnZXIgdGhpcyBldmVudCBhdXRvbWF0aWNhbGx5LiBJZiB5b3UgaGlkZSB0aGUgbGlzdCBtYW51YWxseSAoZS5nLiB5b3UgdXNlXG5gZGlzcGxheTogbm9uZWApIHlvdSBtaWdodCB3YW50IHRvIGltcGxlbWVudCBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYCBvciBmaXJlXG50aGlzIGV2ZW50IG1hbnVhbGx5IHJpZ2h0IGFmdGVyIHRoZSBsaXN0IGJlY2FtZSB2aXNpYmxlIGFnYWluLiBGb3IgZXhhbXBsZTpcblxuYGBganNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tbGlzdCcpLmZpcmUoJ2lyb24tcmVzaXplJyk7XG5gYGBcblxuIyMjIFdoZW4gc2hvdWxkIGA8aXJvbi1saXN0PmAgYmUgdXNlZD9cblxuYGlyb24tbGlzdGAgc2hvdWxkIGJlIHVzZWQgd2hlbiBhIHBhZ2UgaGFzIHNpZ25pZmljYW50bHkgbW9yZSBET00gbm9kZXMgdGhhbiB0aGVcbm9uZXMgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLiBlLmcuIHRoZSBwYWdlIGhhcyA1MDAgbm9kZXMsIGJ1dCBvbmx5IDIwIGFyZSB2aXNpYmxlXG5hdCBhIHRpbWUuIFRoaXMgaXMgd2h5IHdlIHJlZmVyIHRvIGl0IGFzIGEgYHZpcnR1YWxgIGxpc3QuIEluIHRoaXMgY2FzZSwgYVxuYGRvbS1yZXBlYXRgIHdpbGwgc3RpbGwgY3JlYXRlIDUwMCBub2RlcyB3aGljaCBjb3VsZCBzbG93IGRvd24gdGhlIHdlYiBhcHAsIGJ1dFxuYGlyb24tbGlzdGAgd2lsbCBvbmx5IGNyZWF0ZSAyMC5cblxuSG93ZXZlciwgaGF2aW5nIGFuIGBpcm9uLWxpc3RgIGRvZXMgbm90IG1lYW4gdGhhdCB5b3UgY2FuIGxvYWQgYWxsIHRoZSBkYXRhIGF0XG5vbmNlLiBTYXkgeW91IGhhdmUgYSBtaWxsaW9uIHJlY29yZHMgaW4gdGhlIGRhdGFiYXNlLCB5b3Ugd2FudCB0byBzcGxpdCB0aGUgZGF0YVxuaW50byBwYWdlcyBzbyB5b3UgY2FuIGJyaW5nIGluIGEgcGFnZSBhdCB0aGUgdGltZS4gVGhlIHBhZ2UgY291bGQgY29udGFpbiA1MDBcbml0ZW1zLCBhbmQgaXJvbi1saXN0IHdpbGwgb25seSByZW5kZXIgMjAuXG5cbkBncm91cCBJcm9uIEVsZW1lbnRcbkBlbGVtZW50IGlyb24tbGlzdFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWF4LWRldmljZS1waXhlbC1yYXRpbzogMSkge1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAjaXRlbXMge1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2dyaWRdKSkgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhcnJheS1zZWxlY3RvciBpZD1cInNlbGVjdG9yXCIgaXRlbXM9XCJ7e2l0ZW1zfX1cIiBzZWxlY3RlZD1cInt7c2VsZWN0ZWRJdGVtc319XCIgc2VsZWN0ZWQtaXRlbT1cInt7c2VsZWN0ZWRJdGVtfX1cIj48L2FycmF5LXNlbGVjdG9yPlxuXG4gICAgPGRpdiBpZD1cIml0ZW1zXCI+XG4gICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnaXJvbi1saXN0JyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBjb250YWluaW5nIGl0ZW1zIGRldGVybWluaW5nIGhvdyBtYW55IGluc3RhbmNlcyBvZiB0aGUgdGVtcGxhdGVcbiAgICAgKiB0byBzdGFtcCBhbmQgdGhhdCB0aGF0IGVhY2ggdGVtcGxhdGUgaW5zdGFuY2Ugc2hvdWxkIGJpbmQgdG8uXG4gICAgICovXG4gICAgaXRlbXM6IHt0eXBlOiBBcnJheX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIGZvciB0aGUgYXJyYXlcbiAgICAgKiBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIHRlbXBsYXRlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIGFzOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2l0ZW0nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgd2l0aCB0aGUgaW5kZXhcbiAgICAgKiBmb3IgdGhlIHJvdy5cbiAgICAgKi9cbiAgICBpbmRleEFzOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2luZGV4J30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG8gYWRkIHRvIHRoZSBiaW5kaW5nIHNjb3BlIHRvIGluZGljYXRlXG4gICAgICogaWYgdGhlIHJvdyBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEFzOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3NlbGVjdGVkJ30sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBsaXN0IGlzIHJlbmRlcmVkIGFzIGEgZ3JpZC4gR3JpZCBpdGVtcyBtdXN0IGhhdmVcbiAgICAgKiBmaXhlZCB3aWR0aCBhbmQgaGVpZ2h0IHNldCB2aWEgQ1NTLiBlLmcuXG4gICAgICpcbiAgICAgKiBgYGBodG1sXG4gICAgICogPGlyb24tbGlzdCBncmlkPlxuICAgICAqICAgPHRlbXBsYXRlPlxuICAgICAqICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDtcIj4gMTAweDEwMCA8L2Rpdj5cbiAgICAgKiAgIDwvdGVtcGxhdGU+XG4gICAgICogPC9pcm9uLWxpc3Q+XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ3JpZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX2dyaWRDaGFuZ2VkJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRhcHBpbmcgYSByb3cgd2lsbCBzZWxlY3QgdGhlIGl0ZW0sIHBsYWNpbmcgaXRzIGRhdGEgbW9kZWxcbiAgICAgKiBpbiB0aGUgc2V0IG9mIHNlbGVjdGVkIGl0ZW1zIHJldHJpZXZhYmxlIHZpYSB0aGUgc2VsZWN0aW9uIHByb3BlcnR5LlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IHRhcHBpbmcgZm9jdXNhYmxlIGVsZW1lbnRzIHdpdGhpbiB0aGUgbGlzdCBpdGVtIHdpbGwgbm90XG4gICAgICogcmVzdWx0IGluIHNlbGVjdGlvbiwgc2luY2UgdGhleSBhcmUgcHJlc3VtZWQgdG8gaGF2ZSB0aGVpciAqIG93biBhY3Rpb24uXG4gICAgICovXG4gICAgc2VsZWN0aW9uRW5hYmxlZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGBtdWx0aVNlbGVjdGlvbmAgaXMgZmFsc2UsIHRoaXMgaXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLCBvclxuICAgICAqIGBudWxsYCBpZiBubyBpdGVtIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbToge3R5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyB0cnVlLCB0aGlzIGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlXG4gICAgICogc2VsZWN0ZWQgaXRlbXMuXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtczoge3R5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgLCBtdWx0aXBsZSBpdGVtcyBtYXkgYmUgc2VsZWN0ZWQgYXQgb25jZSAoaW4gdGhpcyBjYXNlLFxuICAgICAqIGBzZWxlY3RlZGAgaXMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zKS4gIFdoZW4gYGZhbHNlYCxcbiAgICAgKiBvbmx5IG9uZSBpdGVtIG1heSBiZSBzZWxlY3RlZCBhdCBhIHRpbWUuXG4gICAgICovXG4gICAgbXVsdGlTZWxlY3Rpb246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9mZnNldCB0b3AgZnJvbSB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQgdG8gdGhlIGlyb24tbGlzdCBlbGVtZW50LlxuICAgICAqIFRoaXMgdmFsdWUgY2FuIGJlIGNvbXB1dGVkIHVzaW5nIHRoZSBwb3NpdGlvbiByZXR1cm5lZCBieVxuICAgICAqIGBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKWAgYWx0aG91Z2ggaXQncyBwcmVmZXJyZWQgdG8gdXNlIGEgY29uc3RhbnQgdmFsdWVcbiAgICAgKiB3aGVuIHBvc3NpYmxlLlxuICAgICAqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyB1c2VmdWwgd2hlbiBhbiBleHRlcm5hbCBzY3JvbGxpbmcgZWxlbWVudCBpcyB1c2VkIGFuZFxuICAgICAqIHRoZXJlJ3Mgc29tZSBvZmZzZXQgYmV0d2VlbiB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQgYW5kIHRoZSBsaXN0LiBGb3JcbiAgICAgKiBleGFtcGxlOiBhIGhlYWRlciBpcyBwbGFjZWQgYWJvdmUgdGhlIGxpc3QuXG4gICAgICovXG4gICAgc2Nyb2xsT2Zmc2V0OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMH1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX2l0ZW1zQ2hhbmdlZChpdGVtcy4qKScsXG4gICAgJ19zZWxlY3Rpb25FbmFibGVkQ2hhbmdlZChzZWxlY3Rpb25FbmFibGVkKScsXG4gICAgJ19tdWx0aVNlbGVjdGlvbkNoYW5nZWQobXVsdGlTZWxlY3Rpb24pJyxcbiAgICAnX3NldE92ZXJmbG93KHNjcm9sbFRhcmdldCwgc2Nyb2xsT2Zmc2V0KSdcbiAgXSxcblxuICBiZWhhdmlvcnM6IFtcbiAgICBUZW1wbGF0aXplcixcbiAgICBJcm9uUmVzaXphYmxlQmVoYXZpb3IsXG4gICAgSXJvblNjcm9sbFRhcmdldEJlaGF2aW9yLFxuICAgIE9wdGlvbmFsTXV0YWJsZURhdGFCZWhhdmlvclxuICBdLFxuXG4gIC8qKlxuICAgKiBUaGUgcmF0aW8gb2YgaGlkZGVuIHRpbGVzIHRoYXQgc2hvdWxkIHJlbWFpbiBpbiB0aGUgc2Nyb2xsIGRpcmVjdGlvbi5cbiAgICogUmVjb21tZW5kZWQgdmFsdWUgfjAuNSwgc28gaXQgd2lsbCBkaXN0cmlidXRlIHRpbGVzIGV2ZW5seSBpbiBib3RoXG4gICAqIGRpcmVjdGlvbnMuXG4gICAqL1xuICBfcmF0aW86IDAuNSxcblxuICAvKipcbiAgICogVGhlIHBhZGRpbmctdG9wIHZhbHVlIGZvciB0aGUgbGlzdC5cbiAgICovXG4gIF9zY3JvbGxlclBhZGRpbmdUb3A6IDAsXG5cbiAgLyoqXG4gICAqIFRoaXMgdmFsdWUgaXMgdGhlIHNhbWUgYXMgYHNjcm9sbFRvcGAuXG4gICAqL1xuICBfc2Nyb2xsUG9zaXRpb246IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBzdW0gb2YgdGhlIGhlaWdodHMgb2YgYWxsIHRoZSB0aWxlcyBpbiB0aGUgRE9NLlxuICAgKi9cbiAgX3BoeXNpY2FsU2l6ZTogMCxcblxuICAvKipcbiAgICogVGhlIGF2ZXJhZ2UgYG9mZnNldEhlaWdodGAgb2YgdGhlIHRpbGVzIG9ic2VydmVkIHRpbGwgbm93LlxuICAgKi9cbiAgX3BoeXNpY2FsQXZlcmFnZTogMCxcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiB0aWxlcyB3aGljaCBgb2Zmc2V0SGVpZ2h0YCA+IDAgb2JzZXJ2ZWQgdW50aWwgbm93LlxuICAgKi9cbiAgX3BoeXNpY2FsQXZlcmFnZUNvdW50OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgWSBwb3NpdGlvbiBvZiB0aGUgaXRlbSByZW5kZXJlZCBpbiB0aGUgYF9waHlzaWNhbFN0YXJ0YFxuICAgKiB0aWxlIHJlbGF0aXZlIHRvIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICovXG4gIF9waHlzaWNhbFRvcDogMCxcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgbGlzdC5cbiAgICovXG4gIF92aXJ0dWFsQ291bnQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBlc3RpbWF0ZWQgc2Nyb2xsIGhlaWdodCBiYXNlZCBvbiBgX3BoeXNpY2FsQXZlcmFnZWBcbiAgICovXG4gIF9lc3RTY3JvbGxIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBzY3JvbGwgaGVpZ2h0IG9mIHRoZSBkb20gbm9kZVxuICAgKi9cbiAgX3Njcm9sbEhlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2ZcbiAgICogbGlzdC5cbiAgICovXG4gIF92aWV3cG9ydEhlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBsaXN0LiBUaGlzIGlzIHJlZmVycmVkIGFzIHRoZSB2aWV3cG9ydCBpbiB0aGUgY29udGV4dCBvZlxuICAgKiBsaXN0LlxuICAgKi9cbiAgX3ZpZXdwb3J0V2lkdGg6IDAsXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIERPTSBub2RlcyB0aGF0IGFyZSBjdXJyZW50bHkgaW4gdGhlIHRyZWVcbiAgICogQHR5cGUgez9BcnJheTwhVGVtcGxhdGVJbnN0YW5jZUJhc2U+fVxuICAgKi9cbiAgX3BoeXNpY2FsSXRlbXM6IG51bGwsXG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGhlaWdodHMgZm9yIGVhY2ggaXRlbSBpbiBgX3BoeXNpY2FsSXRlbXNgXG4gICAqIEB0eXBlIHs/QXJyYXk8bnVtYmVyPn1cbiAgICovXG4gIF9waHlzaWNhbFNpemVzOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBIGNhY2hlZCB2YWx1ZSBmb3IgdGhlIGZpcnN0IHZpc2libGUgaW5kZXguXG4gICAqIFNlZSBgZmlyc3RWaXNpYmxlSW5kZXhgXG4gICAqIEB0eXBlIHs/bnVtYmVyfVxuICAgKi9cbiAgX2ZpcnN0VmlzaWJsZUluZGV4VmFsOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBIGNhY2hlZCB2YWx1ZSBmb3IgdGhlIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICogU2VlIGBsYXN0VmlzaWJsZUluZGV4YFxuICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICovXG4gIF9sYXN0VmlzaWJsZUluZGV4VmFsOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4IG51bWJlciBvZiBwYWdlcyB0byByZW5kZXIuIE9uZSBwYWdlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGhlaWdodCBvZlxuICAgKiB0aGUgbGlzdC5cbiAgICovXG4gIF9tYXhQYWdlczogMixcblxuICAvKipcbiAgICogVGhlIGN1cnJlbnRseSBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAqL1xuICBfZm9jdXNlZEl0ZW06IG51bGwsXG5cbiAgLyoqXG4gICAqIFRoZSB2aXJ0dWFsIGluZGV4IG9mIHRoZSBmb2N1c2VkIGl0ZW0uXG4gICAqL1xuICBfZm9jdXNlZFZpcnR1YWxJbmRleDogLTEsXG5cbiAgLyoqXG4gICAqIFRoZSBwaHlzaWNhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRQaHlzaWNhbEluZGV4OiAtMSxcblxuICAvKipcbiAgICogVGhlIHRoZSBpdGVtIHRoYXQgaXMgZm9jdXNlZCBpZiBpdCBpcyBtb3ZlZCBvZmZzY3JlZW4uXG4gICAqIEBwcml2YXRlIHs/VGVtcGxhdGl6ZXJOb2RlfVxuICAgKi9cbiAgX29mZnNjcmVlbkZvY3VzZWRJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgaXRlbSB0aGF0IGJhY2tmaWxscyB0aGUgYF9vZmZzY3JlZW5Gb2N1c2VkSXRlbWAgaW4gdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAqIGxpc3Qgd2hlbiB0aGF0IGl0ZW0gaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgKi9cbiAgX2ZvY3VzQmFja2ZpbGxJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBpdGVtcyBwZXIgcm93XG4gICAqL1xuICBfaXRlbXNQZXJSb3c6IDEsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiBlYWNoIGdyaWQgaXRlbVxuICAgKi9cbiAgX2l0ZW1XaWR0aDogMCxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcm93IGluIGdyaWQgbGF5b3V0LlxuICAgKi9cbiAgX3Jvd0hlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIGNvc3Qgb2Ygc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbiBtcy5cbiAgICovXG4gIF90ZW1wbGF0ZUNvc3Q6IDAsXG5cbiAgLyoqXG4gICAqIE5lZWRlZCB0byBwYXNzIGV2ZW50Lm1vZGVsIHByb3BlcnR5IHRvIGRlY2xhcmF0aXZlIGV2ZW50IGhhbmRsZXJzIC1cbiAgICogc2VlIHBvbHltZXIvcG9seW1lciM0MzM5LlxuICAgKi9cbiAgX3BhcmVudE1vZGVsOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgYm90dG9tIG9mIHRoZSBwaHlzaWNhbCBjb250ZW50LlxuICAgKi9cbiAgZ2V0IF9waHlzaWNhbEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9waHlzaWNhbFNpemU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBib3R0b20gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIGdldCBfc2Nyb2xsQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgbi10aCBpdGVtIHJlbmRlcmVkIGluIHRoZSBsYXN0IHBoeXNpY2FsIGl0ZW0uXG4gICAqL1xuICBnZXQgX3ZpcnR1YWxFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaHlzaWNhbCBjb250ZW50IHRoYXQgaXNuJ3Qgb24gdGhlIHNjcmVlbi5cbiAgICovXG4gIGdldCBfaGlkZGVuQ29udGVudFNpemUoKSB7XG4gICAgdmFyIHNpemUgPVxuICAgICAgICB0aGlzLmdyaWQgPyB0aGlzLl9waHlzaWNhbFJvd3MgKiB0aGlzLl9yb3dIZWlnaHQgOiB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgcmV0dXJuIHNpemUgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHBhcmVudCBub2RlIGZvciB0aGUgX3VzZXJUZW1wbGF0ZS5cbiAgICovXG4gIGdldCBfaXRlbXNQYXJlbnQoKSB7XG4gICAgcmV0dXJuIGRvbShkb20odGhpcy5fdXNlclRlbXBsYXRlKS5wYXJlbnROb2RlKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gc2Nyb2xsIHRvcCB2YWx1ZS5cbiAgICovXG4gIGdldCBfbWF4U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGxhcmdlc3Qgbi10aCB2YWx1ZSBmb3IgYW4gaXRlbSBzdWNoIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkIGluXG4gICAqIGBfcGh5c2ljYWxTdGFydGAuXG4gICAqL1xuICBnZXQgX21heFZpcnR1YWxTdGFydCgpIHtcbiAgICB2YXIgdmlydHVhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyh0aGlzLl92aXJ0dWFsQ291bnQpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCB2aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50KTtcbiAgfSxcblxuICBzZXQgX3ZpcnR1YWxTdGFydCh2YWwpIHtcbiAgICB2YWwgPSB0aGlzLl9jbGFtcCh2YWwsIDAsIHRoaXMuX21heFZpcnR1YWxTdGFydCk7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9XG4gICAgdGhpcy5fdmlydHVhbFN0YXJ0VmFsID0gdmFsO1xuICB9LFxuXG4gIGdldCBfdmlydHVhbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnRWYWwgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGstdGggdGlsZSB0aGF0IGlzIGF0IHRoZSB0b3Agb2YgdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgKi9cbiAgc2V0IF9waHlzaWNhbFN0YXJ0KHZhbCkge1xuICAgIHZhbCA9IHZhbCAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgaWYgKHZhbCA8IDApIHtcbiAgICAgIHZhbCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyB2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfVxuICAgIHRoaXMuX3BoeXNpY2FsU3RhcnRWYWwgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IF9waHlzaWNhbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsIHx8IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICovXG4gIGdldCBfcGh5c2ljYWxFbmQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgdGhpcy5fcGh5c2ljYWxDb3VudCAtIDEpICVcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgfSxcblxuICBzZXQgX3BoeXNpY2FsQ291bnQodmFsKSB7XG4gICAgdGhpcy5fcGh5c2ljYWxDb3VudFZhbCA9IHZhbDtcbiAgfSxcblxuICBnZXQgX3BoeXNpY2FsQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogQW4gb3B0aW1hbCBwaHlzaWNhbCBzaXplIHN1Y2ggdGhhdCB3ZSB3aWxsIGhhdmUgZW5vdWdoIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRvIGZpbGwgdXAgdGhlIHZpZXdwb3J0IGFuZCByZWN5Y2xlIHdoZW4gdGhlIHVzZXIgc2Nyb2xscy5cbiAgICpcbiAgICogVGhpcyBkZWZhdWx0IHZhbHVlIGFzc3VtZXMgdGhhdCB3ZSB3aWxsIGF0IGxlYXN0IGhhdmUgdGhlIGVxdWl2YWxlbnRcbiAgICogdG8gYSB2aWV3cG9ydCBvZiBwaHlzaWNhbCBpdGVtcyBhYm92ZSBhbmQgYmVsb3cgdGhlIHVzZXIncyB2aWV3cG9ydC5cbiAgICovXG4gIGdldCBfb3B0UGh5c2ljYWxTaXplKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3cG9ydEhlaWdodCA9PT0gMCA/IEluZmluaXR5IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCAqIHRoaXMuX21heFBhZ2VzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBjdXJyZW50IGxpc3QgaXMgdmlzaWJsZS5cbiAgICovXG4gIGdldCBfaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMub2Zmc2V0V2lkdGggfHwgdGhpcy5vZmZzZXRIZWlnaHQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBmaXJzdFZpc2libGVJbmRleCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcblxuICAgICAgaWR4ID0gdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuXG4gICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA+IHRoaXMuX3Njcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZCA/IHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KSA6IHZpZHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGEgcGFydGlhbGx5IHJlbmRlcmVkIGZpbmFsIHJvdyBpbiBncmlkIG1vZGVcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLl92aXJ0dWFsQ291bnQgLSAxID09PSB2aWR4KSB7XG4gICAgICAgICAgcmV0dXJuIHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgICAgfVxuICAgICAgfSkgfHxcbiAgICAgICAgICAwO1xuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbGFzdFZpc2libGVJbmRleCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbDtcbiAgICBpZiAoaWR4ID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgaWR4ID0gTWF0aC5taW4oXG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQsXG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ICsgdGhpcy5fZXN0Um93c0luVmlldyAqIHRoaXMuX2l0ZW1zUGVyUm93IC1cbiAgICAgICAgICAgICAgICAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA8IHRoaXMuX3Njcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgaWR4ID0gdmlkeDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH0sXG5cbiAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGdldCBfdmlydHVhbFJvd0NvdW50KCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdmlydHVhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICB9LFxuXG4gIGdldCBfZXN0Um93c0luVmlldygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IC8gdGhpcy5fcm93SGVpZ2h0KTtcbiAgfSxcblxuICBnZXQgX3BoeXNpY2FsUm93cygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdyk7XG4gIH0sXG5cbiAgZ2V0IF9zY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGVyUGFkZGluZ1RvcCArIHRoaXMuc2Nyb2xsT2Zmc2V0O1xuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fZGlkRm9jdXMuYmluZCh0aGlzKSwgdHJ1ZSk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBhbmltYXRpb25GcmFtZSk7XG4gICAgLy8gYGlyb24tcmVzaXplYCBpcyBmaXJlZCB3aGVuIHRoZSBsaXN0IGlzIGF0dGFjaGVkIGlmIHRoZSBldmVudCBpcyBhZGRlZFxuICAgIC8vIGJlZm9yZSBhdHRhY2hlZCBjYXVzaW5nIHVubmVjZXNzYXJ5IHdvcmsuXG4gICAgdGhpcy5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgdGhpcy5saXN0ZW4odGhpcywgJ2tleWRvd24nLCAnX2tleWRvd25IYW5kbGVyJyk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBpZiB0aGlzIGVsZW1lbnQgaGFzIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvblxuICAgKi9cbiAgX3NldE92ZXJmbG93OiBmdW5jdGlvbihzY3JvbGxUYXJnZXQpIHtcbiAgICB0aGlzLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ3RvdWNoJyA6ICcnO1xuICAgIHRoaXMuc3R5bGUub3ZlcmZsb3dZID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ2F1dG8nIDogJyc7XG4gICAgLy8gQ2xlYXIgY2FjaGUuXG4gICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBhbmltYXRpb25GcmFtZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCBpZiB5b3UgZHluYW1pY2FsbHkgdXBkYXRlIHRoZSB2aWV3cG9ydCdzXG4gICAqIHNpemUgb3IgQ1NTIHBhZGRpbmcuXG4gICAqXG4gICAqIEBtZXRob2QgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzXG4gICAqL1xuICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgPVxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcyA/IDAgOiBwYXJzZUludChzdHlsZXNbJ3BhZGRpbmctdG9wJ10sIDEwKTtcbiAgICB0aGlzLl9pc1JUTCA9IEJvb2xlYW4oc3R5bGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpO1xuICAgIHRoaXMuX3ZpZXdwb3J0V2lkdGggPSB0aGlzLiQuaXRlbXMub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQ7XG4gICAgdGhpcy5ncmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlY3ljbGVzIHRoZSBwaHlzaWNhbCBpdGVtcyB3aGVuIG5lZWRlZC5cbiAgICovXG4gIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fbWF4U2Nyb2xsVG9wLCB0aGlzLl9zY3JvbGxUb3ApKTtcbiAgICB2YXIgZGVsdGEgPSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZGVsdGEgPj0gMDtcbiAgICAvLyBUcmFjayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG4gICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgLy8gQ2xlYXIgaW5kZXhlcyBmb3IgZmlyc3QgYW5kIGxhc3QgdmlzaWJsZSBpbmRleGVzLlxuICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAvLyBSYW5kb20gYWNjZXNzLlxuICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiB0aGlzLl9waHlzaWNhbFNpemUgJiYgdGhpcy5fcGh5c2ljYWxTaXplID4gMCkge1xuICAgICAgZGVsdGEgPSBkZWx0YSAtIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBpZHhBZGp1c3RtZW50ID1cbiAgICAgICAgICBNYXRoLnJvdW5kKGRlbHRhIC8gdGhpcy5fcGh5c2ljYWxBdmVyYWdlKSAqIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQuXG4gICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IE1hdGguZmxvb3IodGhpcy5fdmlydHVhbFN0YXJ0IC8gdGhpcy5faXRlbXNQZXJSb3cpICpcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICB2YXIgcmV1c2FibGVzID0gdGhpcy5fZ2V0UmV1c2FibGVzKGlzU2Nyb2xsaW5nRG93bik7XG4gICAgICBpZiAoaXNTY3JvbGxpbmdEb3duKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0IC0gcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZShcbiAgICAgICAgICByZXVzYWJsZXMuaW5kZXhlcywgaXNTY3JvbGxpbmdEb3duID8gbnVsbCA6IHJldXNhYmxlcy5pbmRleGVzKTtcbiAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQodGhpcywgMCksXG4gICAgICAgICAgbWljcm9UYXNrKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGluZGV4ZXMgb2YgdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRoYXQgbWlnaHQgYmUgcmV1c2VkIGFuZCB0aGUgcGh5c2ljYWxUb3AuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZnJvbVRvcCBJZiB0aGUgcG90ZW50aWFsIHJldXNhYmxlIGl0ZW1zIGFyZSBhYm92ZSB0aGUgc2Nyb2xsaW5nIHJlZ2lvbi5cbiAgICovXG4gIF9nZXRSZXVzYWJsZXM6IGZ1bmN0aW9uKGZyb21Ub3ApIHtcbiAgICB2YXIgaXRoLCBsYXN0SXRoLCBvZmZzZXRDb250ZW50LCBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgdmFyIGlkeHMgPSBbXTtcbiAgICB2YXIgcHJvdGVjdGVkT2Zmc2V0Q29udGVudCA9IHRoaXMuX2hpZGRlbkNvbnRlbnRTaXplICogdGhpcy5fcmF0aW87XG4gICAgdmFyIHZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICB2YXIgdmlydHVhbEVuZCA9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgdmFyIHBoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgIHZhciB0b3AgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICB2YXIgYm90dG9tID0gdGhpcy5fcGh5c2ljYWxCb3R0b20gKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsQm90dG9tID0gdGhpcy5fc2Nyb2xsQm90dG9tO1xuXG4gICAgaWYgKGZyb21Ub3ApIHtcbiAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICBsYXN0SXRoID0gdGhpcy5fcGh5c2ljYWxFbmQ7XG4gICAgICBvZmZzZXRDb250ZW50ID0gc2Nyb2xsVG9wIC0gdG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICBpdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgIGxhc3RJdGggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgb2Zmc2V0Q29udGVudCA9IGJvdHRvbSAtIHNjcm9sbEJvdHRvbTtcbiAgICB9XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHBoeXNpY2FsSXRlbUhlaWdodCA9IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChpdGgpO1xuICAgICAgb2Zmc2V0Q29udGVudCA9IG9mZnNldENvbnRlbnQgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICBpZiAoaWR4cy5sZW5ndGggPj0gcGh5c2ljYWxDb3VudCB8fFxuICAgICAgICAgIG9mZnNldENvbnRlbnQgPD0gcHJvdGVjdGVkT2Zmc2V0Q29udGVudCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChmcm9tVG9wKSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgaW5kZXggaXMgd2l0aGluIHRoZSB2YWxpZCByYW5nZS5cbiAgICAgICAgaWYgKHZpcnR1YWxFbmQgKyBpZHhzLmxlbmd0aCArIDEgPj0gdGhpcy5fdmlydHVhbENvdW50KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgaW5kZXggaXMgbm90IHZpc2libGUuXG4gICAgICAgIGlmICh0b3AgKyBwaHlzaWNhbEl0ZW1IZWlnaHQgPj0gc2Nyb2xsVG9wIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWR4cy5wdXNoKGl0aCk7XG4gICAgICAgIHRvcCA9IHRvcCArIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgICAgaXRoID0gKGl0aCArIDEpICUgcGh5c2ljYWxDb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENoZWNrIHRoYXQgaW5kZXggaXMgd2l0aGluIHRoZSB2YWxpZCByYW5nZS5cbiAgICAgICAgaWYgKHZpcnR1YWxTdGFydCAtIGlkeHMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbmRleCBpcyBub3QgdmlzaWJsZS5cbiAgICAgICAgaWYgKHRvcCArIHRoaXMuX3BoeXNpY2FsU2l6ZSAtIHBoeXNpY2FsSXRlbUhlaWdodCA8PSBzY3JvbGxCb3R0b20pIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgdG9wID0gdG9wIC0gcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICBpdGggPSAoaXRoID09PSAwKSA/IHBoeXNpY2FsQ291bnQgLSAxIDogaXRoIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtpbmRleGVzOiBpZHhzLCBwaHlzaWNhbFRvcDogdG9wIC0gdGhpcy5fc2Nyb2xsT2Zmc2V0fTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBsaXN0IG9mIGl0ZW1zLCBzdGFydGluZyBmcm9tIHRoZSBgX3ZpcnR1YWxTdGFydGAgaXRlbS5cbiAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IG1vdmluZ1VwXG4gICAqL1xuICBfdXBkYXRlOiBmdW5jdGlvbihpdGVtU2V0LCBtb3ZpbmdVcCkge1xuICAgIGlmICgoaXRlbVNldCAmJiBpdGVtU2V0Lmxlbmd0aCA9PT0gMCkgfHwgdGhpcy5fcGh5c2ljYWxDb3VudCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgIHRoaXMuX2Fzc2lnbk1vZGVscyhpdGVtU2V0KTtcbiAgICB0aGlzLl91cGRhdGVNZXRyaWNzKGl0ZW1TZXQpO1xuICAgIC8vIEFkanVzdCBvZmZzZXQgYWZ0ZXIgbWVhc3VyaW5nLlxuICAgIGlmIChtb3ZpbmdVcCkge1xuICAgICAgd2hpbGUgKG1vdmluZ1VwLmxlbmd0aCkge1xuICAgICAgICB2YXIgaWR4ID0gbW92aW5nVXAucG9wKCk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wIC09IHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9wb3NpdGlvbkl0ZW1zKCk7XG4gICAgdGhpcy5fdXBkYXRlU2Nyb2xsZXJTaXplKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBwb29sIG9mIERPTSBlbGVtZW50cyBhbmQgYXR0YWNoZXMgdGhlbSB0byB0aGUgbG9jYWwgZG9tLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSBTaXplIG9mIHRoZSBwb29sXG4gICAqL1xuICBfY3JlYXRlUG9vbDogZnVuY3Rpb24oc2l6ZSkge1xuICAgIHRoaXMuX2Vuc3VyZVRlbXBsYXRpemVkKCk7XG4gICAgdmFyIGksIGluc3Q7XG4gICAgdmFyIHBoeXNpY2FsSXRlbXMgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgZm9yIChpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgaW5zdCA9IHRoaXMuc3RhbXAobnVsbCk7XG4gICAgICAvLyBUT0RPKGJsYXN0ZW4pOlxuICAgICAgLy8gRmlyc3QgZWxlbWVudCBjaGlsZCBpcyBpdGVtOyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IGNoaWxkcmVuWzBdXG4gICAgICAvLyBvbiBhIGRvYyBmcmFnbWVudC4gVGVzdCB0aGlzIHRvIHNlZSBpZiBpdCBzdGlsbCBtYXR0ZXJzLlxuICAgICAgcGh5c2ljYWxJdGVtc1tpXSA9IGluc3Qucm9vdC5xdWVyeVNlbGVjdG9yKCcqJyk7XG4gICAgICB0aGlzLl9pdGVtc1BhcmVudC5hcHBlbmRDaGlsZChpbnN0LnJvb3QpO1xuICAgIH1cbiAgICByZXR1cm4gcGh5c2ljYWxJdGVtcztcbiAgfSxcblxuICBfaXNDbGllbnRGdWxsOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsQm90dG9tICE9IDAgJiZcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxCb3R0b20gLSAxID49IHRoaXMuX3Njcm9sbEJvdHRvbSAmJlxuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA8PSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgfSxcblxuICAvKipcbiAgICogSW5jcmVhc2VzIHRoZSBwb29sIHNpemUuXG4gICAqL1xuICBfaW5jcmVhc2VQb29sSWZOZWVkZWQ6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIG5leHRQaHlzaWNhbENvdW50ID0gdGhpcy5fY2xhbXAoXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgKyBjb3VudCxcbiAgICAgICAgREVGQVVMVF9QSFlTSUNBTF9DT1VOVCxcbiAgICAgICAgdGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fdmlydHVhbFN0YXJ0KTtcbiAgICBuZXh0UGh5c2ljYWxDb3VudCA9IHRoaXMuX2NvbnZlcnRJbmRleFRvQ29tcGxldGVSb3cobmV4dFBoeXNpY2FsQ291bnQpO1xuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhciBjb3JyZWN0aW9uID0gbmV4dFBoeXNpY2FsQ291bnQgJSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgIGlmIChjb3JyZWN0aW9uICYmIG5leHRQaHlzaWNhbENvdW50IC0gY29ycmVjdGlvbiA8PSB0aGlzLl9waHlzaWNhbENvdW50KSB7XG4gICAgICAgIG5leHRQaHlzaWNhbENvdW50ICs9IHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgfVxuICAgICAgbmV4dFBoeXNpY2FsQ291bnQgLT0gY29ycmVjdGlvbjtcbiAgICB9XG4gICAgdmFyIGRlbHRhID0gbmV4dFBoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50O1xuICAgIHZhciBuZXh0SW5jcmVhc2UgPSBNYXRoLnJvdW5kKHRoaXMuX3BoeXNpY2FsQ291bnQgKiAwLjUpO1xuXG4gICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICB2YXIgdHMgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAvLyBDb25jYXQgYXJyYXlzIGluIHBsYWNlLlxuICAgICAgW10ucHVzaC5hcHBseSh0aGlzLl9waHlzaWNhbEl0ZW1zLCB0aGlzLl9jcmVhdGVQb29sKGRlbHRhKSk7XG4gICAgICAvLyBQdXNoIDBzIGludG8gcGh5c2ljYWxTaXplcy4gQ2FuJ3QgdXNlIEFycmF5LmZpbGwgYmVjYXVzZSBJRTExIGRvZXNuJ3RcbiAgICAgIC8vIHN1cHBvcnQgaXQuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplcy5wdXNoKDApO1xuICAgICAgfVxuICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyBkZWx0YTtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGh5c2ljYWwgc3RhcnQgaWYgaXQgbmVlZHMgdG8gcHJlc2VydmUgdGhlIG1vZGVsIG9mIHRoZVxuICAgICAgLy8gZm9jdXNlZCBpdGVtLiBJbiB0aGlzIHNpdHVhdGlvbiwgdGhlIGZvY3VzZWQgaXRlbSBpcyBjdXJyZW50bHkgcmVuZGVyZWRcbiAgICAgIC8vIGFuZCBpdHMgbW9kZWwgd291bGQgaGF2ZSBjaGFuZ2VkIGFmdGVyIGluY3JlYXNpbmcgdGhlIHBvb2wgaWYgdGhlXG4gICAgICAvLyBwaHlzaWNhbCBzdGFydCByZW1haW5lZCB1bmNoYW5nZWQuXG4gICAgICBpZiAodGhpcy5fcGh5c2ljYWxTdGFydCA+IHRoaXMuX3BoeXNpY2FsRW5kICYmXG4gICAgICAgICAgdGhpcy5faXNJbmRleFJlbmRlcmVkKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpICYmXG4gICAgICAgICAgdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KSA8XG4gICAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsRW5kKSB7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgZGVsdGE7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIHRoaXMuX3RlbXBsYXRlQ29zdCA9ICh3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLSB0cykgLyBkZWx0YTtcbiAgICAgIG5leHRJbmNyZWFzZSA9IE1hdGgucm91bmQodGhpcy5fcGh5c2ljYWxDb3VudCAqIDAuNSk7XG4gICAgfVxuICAgIC8vIFRoZSB1cHBlciBib3VuZHMgaXMgbm90IGZpeGVkIHdoZW4gZGVhbGluZyB3aXRoIGEgZ3JpZCB0aGF0IGRvZXNuJ3RcbiAgICAvLyBmaWxsIGl0J3MgbGFzdCByb3cgd2l0aCB0aGUgZXhhY3QgbnVtYmVyIG9mIGl0ZW1zIHBlciByb3cuXG4gICAgaWYgKHRoaXMuX3ZpcnR1YWxFbmQgPj0gdGhpcy5fdmlydHVhbENvdW50IC0gMSB8fCBuZXh0SW5jcmVhc2UgPT09IDApIHtcbiAgICAgIC8vIERvIG5vdGhpbmcuXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNDbGllbnRGdWxsKCkpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQodGhpcywgbmV4dEluY3JlYXNlKSxcbiAgICAgICAgICBtaWNyb1Rhc2spO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fcGh5c2ljYWxTaXplIDwgdGhpcy5fb3B0UGh5c2ljYWxTaXplKSB7XG4gICAgICAvLyBZaWVsZCBhbmQgaW5jcmVhc2UgdGhlIHBvb2wgZHVyaW5nIGlkbGUgdGltZSB1bnRpbCB0aGUgcGh5c2ljYWwgc2l6ZSBpc1xuICAgICAgLy8gb3B0aW1hbC5cbiAgICAgIHRoaXMuX2RlYm91bmNlKFxuICAgICAgICAgICdfaW5jcmVhc2VQb29sSWZOZWVkZWQnLFxuICAgICAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkLmJpbmQoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIHRoaXMuX2NsYW1wKFxuICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZCg1MCAvIHRoaXMuX3RlbXBsYXRlQ29zdCksIDEsIG5leHRJbmNyZWFzZSkpLFxuICAgICAgICAgIGlkbGVQZXJpb2QpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYSBuZXcgbGlzdC5cbiAgICovXG4gIF9yZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkIHx8ICF0aGlzLl9pc1Zpc2libGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3BoeXNpY2FsQ291bnQgIT09IDApIHtcbiAgICAgIHZhciByZXVzYWJsZXMgPSB0aGlzLl9nZXRSZXVzYWJsZXModHJ1ZSk7XG4gICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHJldXNhYmxlcy5waHlzaWNhbFRvcDtcbiAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgdGhpcy5fdXBkYXRlKHJldXNhYmxlcy5pbmRleGVzKTtcbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwKSB7XG4gICAgICAvLyBJbml0aWFsIHJlbmRlclxuICAgICAgdGhpcy51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgICAgIHRoaXMuX2luY3JlYXNlUG9vbElmTmVlZGVkKERFRkFVTFRfUEhZU0lDQUxfQ09VTlQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGVtcGxldGl6ZXMgdGhlIHVzZXIgdGVtcGxhdGUuXG4gICAqL1xuICBfZW5zdXJlVGVtcGxhdGl6ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmN0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdXNlclRlbXBsYXRlID0gdGhpcy5xdWVyeUVmZmVjdGl2ZUNoaWxkcmVuKCd0ZW1wbGF0ZScpO1xuICAgIGlmICghdGhpcy5fdXNlclRlbXBsYXRlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2lyb24tbGlzdCByZXF1aXJlcyBhIHRlbXBsYXRlIHRvIGJlIHByb3ZpZGVkIGluIGxpZ2h0LWRvbScpO1xuICAgIH1cbiAgICB2YXIgaW5zdGFuY2VQcm9wcyA9IHt9O1xuICAgIGluc3RhbmNlUHJvcHMuX19rZXlfXyA9IHRydWU7XG4gICAgaW5zdGFuY2VQcm9wc1t0aGlzLmFzXSA9IHRydWU7XG4gICAgaW5zdGFuY2VQcm9wc1t0aGlzLmluZGV4QXNdID0gdHJ1ZTtcbiAgICBpbnN0YW5jZVByb3BzW3RoaXMuc2VsZWN0ZWRBc10gPSB0cnVlO1xuICAgIGluc3RhbmNlUHJvcHMudGFiSW5kZXggPSB0cnVlO1xuICAgIHRoaXMuX2luc3RhbmNlUHJvcHMgPSBpbnN0YW5jZVByb3BzO1xuICAgIHRoaXMudGVtcGxhdGl6ZSh0aGlzLl91c2VyVGVtcGxhdGUsIHRoaXMubXV0YWJsZURhdGEpO1xuICB9LFxuXG4gIF9ncmlkQ2hhbmdlZDogZnVuY3Rpb24obmV3R3JpZCwgb2xkR3JpZCkge1xuICAgIGlmICh0eXBlb2Ygb2xkR3JpZCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICBmbHVzaCgpO1xuICAgIG5ld0dyaWQgJiYgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIGl0ZW1zIGhhdmUgY2hhbmdlZC4gVGhhdCBpcywgcmVhc3NpZ25tZW50c1xuICAgKiB0byBgaXRlbXNgLCBzcGxpY2VzIG9yIHVwZGF0ZXMgdG8gYSBzaW5nbGUgaXRlbS5cbiAgICovXG4gIF9pdGVtc0NoYW5nZWQ6IGZ1bmN0aW9uKGNoYW5nZSkge1xuICAgIGlmIChjaGFuZ2UucGF0aCA9PT0gJ2l0ZW1zJykge1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gMDtcbiAgICAgIHRoaXMuX3ZpcnR1YWxDb3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gICAgICB0aGlzLl9waHlzaWNhbEluZGV4Rm9yS2V5ID0ge307XG4gICAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPSB0aGlzLl9waHlzaWNhbENvdW50IHx8IDA7XG4gICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zID0gdGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXMgPSB0aGlzLl9waHlzaWNhbFNpemVzIHx8IFtdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IDA7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsVG9wID4gdGhpcy5fc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oMCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIGFuaW1hdGlvbkZyYW1lKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMuc3BsaWNlcycpIHtcbiAgICAgIHRoaXMuX2FkanVzdFZpcnR1YWxJbmRleChjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzKTtcbiAgICAgIHRoaXMuX3ZpcnR1YWxDb3VudCA9IHRoaXMuaXRlbXMgPyB0aGlzLml0ZW1zLmxlbmd0aCA6IDA7XG4gICAgICAvLyBPbmx5IGJsdXIgaWYgYXQgbGVhc3Qgb25lIGl0ZW0gaXMgYWRkZWQgb3IgcmVtb3ZlZC5cbiAgICAgIHZhciBpdGVtQWRkZWRPclJlbW92ZWQgPSBjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzLnNvbWUoZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgIHJldHVybiBzcGxpY2UuYWRkZWRDb3VudCA+IDAgfHwgc3BsaWNlLnJlbW92ZWQubGVuZ3RoID4gMDtcbiAgICAgIH0pO1xuICAgICAgaWYgKGl0ZW1BZGRlZE9yUmVtb3ZlZCkge1xuICAgICAgICAvLyBPbmx5IGJsdXIgYWN0aXZlRWxlbWVudCBpZiBpdCBpcyBhIGRlc2NlbmRhbnQgb2YgdGhlIGxpc3QgKCM1MDUsXG4gICAgICAgIC8vICM1MDcpLlxuICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gUmVuZGVyIG9ubHkgaWYgdGhlIGFmZmVjdGVkIGluZGV4IGlzIHJlbmRlcmVkLlxuICAgICAgdmFyIGFmZmVjdGVkSW5kZXhSZW5kZXJlZCA9XG4gICAgICAgICAgY2hhbmdlLnZhbHVlLmluZGV4U3BsaWNlcy5zb21lKGZ1bmN0aW9uKHNwbGljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGljZS5pbmRleCArIHNwbGljZS5hZGRlZENvdW50ID49IHRoaXMuX3ZpcnR1YWxTdGFydCAmJlxuICAgICAgICAgICAgICAgIHNwbGljZS5pbmRleCA8PSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgaWYgKCF0aGlzLl9pc0NsaWVudEZ1bGwoKSB8fCBhZmZlY3RlZEluZGV4UmVuZGVyZWQpIHtcbiAgICAgICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCB0aGlzLl9yZW5kZXIsIGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5wYXRoICE9PSAnaXRlbXMubGVuZ3RoJykge1xuICAgICAgdGhpcy5fZm9yd2FyZEl0ZW1QYXRoKGNoYW5nZS5wYXRoLCBjaGFuZ2UudmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfZm9yd2FyZEl0ZW1QYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKDYpOyAgLy8gJ2l0ZW1zLicubGVuZ3RoID09IDZcbiAgICB2YXIgZG90ID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgaWYgKGRvdCA9PT0gLTEpIHtcbiAgICAgIGRvdCA9IHBhdGgubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgaXNJbmRleFJlbmRlcmVkO1xuICAgIHZhciBwaWR4O1xuICAgIHZhciBpbnN0O1xuICAgIHZhciBvZmZzY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICB2YXIgdmlkeCA9IHBhcnNlSW50KHBhdGguc3Vic3RyaW5nKDAsIGRvdCksIDEwKTtcbiAgICBpc0luZGV4UmVuZGVyZWQgPSB0aGlzLl9pc0luZGV4UmVuZGVyZWQodmlkeCk7XG4gICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgcGlkeCA9IHRoaXMuX2dldFBoeXNpY2FsSW5kZXgodmlkeCk7XG4gICAgICBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgfSBlbHNlIGlmIChvZmZzY3JlZW5JbnN0YW5jZSkge1xuICAgICAgaW5zdCA9IG9mZnNjcmVlbkluc3RhbmNlO1xuICAgIH1cblxuICAgIGlmICghaW5zdCB8fCBpbnN0W3RoaXMuaW5kZXhBc10gIT09IHZpZHgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKGRvdCArIDEpO1xuICAgIHBhdGggPSB0aGlzLmFzICsgKHBhdGggPyAnLicgKyBwYXRoIDogJycpO1xuICAgIGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eU9yUGF0aChwYXRoLCB2YWx1ZSwgZmFsc2UsIHRydWUpO1xuICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgLy8gVE9ETyhibGFzdGVuKTogVjEgZG9lc24ndCBkbyB0aGlzIGFuZCBpdCdzIGEgYnVnXG4gICAgaWYgKGlzSW5kZXhSZW5kZXJlZCkge1xuICAgICAgdGhpcy5fdXBkYXRlTWV0cmljcyhbcGlkeF0pO1xuICAgICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgICAgdGhpcy5fdXBkYXRlU2Nyb2xsZXJTaXplKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFBcnJheTwhT2JqZWN0Pn0gc3BsaWNlc1xuICAgKi9cbiAgX2FkanVzdFZpcnR1YWxJbmRleDogZnVuY3Rpb24oc3BsaWNlcykge1xuICAgIHNwbGljZXMuZm9yRWFjaChmdW5jdGlvbihzcGxpY2UpIHtcbiAgICAgIC8vIGRlc2VsZWN0IHJlbW92ZWQgaXRlbXNcbiAgICAgIHNwbGljZS5yZW1vdmVkLmZvckVhY2godGhpcy5fcmVtb3ZlSXRlbSwgdGhpcyk7XG4gICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gY2FyZSBhYm91dCBjaGFuZ2VzIGhhcHBlbmluZyBhYm92ZSB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgICAgaWYgKHNwbGljZS5pbmRleCA8IHRoaXMuX3ZpcnR1YWxTdGFydCkge1xuICAgICAgICB2YXIgZGVsdGEgPSBNYXRoLm1heChcbiAgICAgICAgICAgIHNwbGljZS5hZGRlZENvdW50IC0gc3BsaWNlLnJlbW92ZWQubGVuZ3RoLFxuICAgICAgICAgICAgc3BsaWNlLmluZGV4IC0gdGhpcy5fdmlydHVhbFN0YXJ0KTtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID49IDApIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArIGRlbHRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX3JlbW92ZUl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB0aGlzLiQuc2VsZWN0b3IuZGVzZWxlY3QoaXRlbSk7XG4gICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGZvY3VzZWQgaXRlbVxuICAgIGlmICh0aGlzLl9mb2N1c2VkSXRlbSAmJlxuICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9mb2N1c2VkSXRlbSlbdGhpcy5hc10gPT09IGl0ZW0pIHtcbiAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIHByb3ZpZGVkIGZ1bmN0aW9uIHBlciBldmVyeSBwaHlzaWNhbCBpbmRleCBpbiBgaXRlbVNldGBcbiAgICogYGl0ZW1TZXRgIGRlZmF1bHQgdmFsdWUgaXMgZXF1aXZhbGVudCB0byB0aGUgZW50aXJlIHNldCBvZiBwaHlzaWNhbFxuICAgKiBpbmRleGVzLlxuICAgKlxuICAgKiBAcGFyYW0geyFmdW5jdGlvbihudW1iZXIsIG51bWJlcil9IGZuXG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAqL1xuICBfaXRlcmF0ZUl0ZW1zOiBmdW5jdGlvbihmbiwgaXRlbVNldCkge1xuICAgIHZhciBwaWR4LCB2aWR4LCBydG4sIGk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiBpdGVtU2V0KSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbVNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICBwaWR4ID0gaXRlbVNldFtpXTtcbiAgICAgICAgdmlkeCA9IHRoaXMuX2NvbXB1dGVWaWR4KHBpZHgpO1xuICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBpZHggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgdmlkeCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIGZvciAoOyBwaWR4IDwgdGhpcy5fcGh5c2ljYWxDb3VudDsgcGlkeCsrLCB2aWR4KyspIHtcbiAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChwaWR4ID0gMDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsU3RhcnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpcnR1YWwgaW5kZXggZm9yIGEgZ2l2ZW4gcGh5c2ljYWwgaW5kZXhcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBpZHggUGh5c2ljYWwgaW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgX2NvbXB1dGVWaWR4OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgaWYgKHBpZHggPj0gdGhpcy5fcGh5c2ljYWxTdGFydCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIChwaWR4IC0gdGhpcy5fcGh5c2ljYWxTdGFydCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAodGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpICtcbiAgICAgICAgcGlkeDtcbiAgfSxcblxuICAvKipcbiAgICogQXNzaWducyB0aGUgZGF0YSBtb2RlbHMgdG8gYSBnaXZlbiBzZXQgb2YgaXRlbXMuXG4gICAqIEBwYXJhbSB7IUFycmF5PG51bWJlcj49fSBpdGVtU2V0XG4gICAqL1xuICBfYXNzaWduTW9kZWxzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF07XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXMgJiYgdGhpcy5pdGVtc1t2aWR4XTtcbiAgICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgICAgdmFyIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlbCk7XG4gICAgICAgIGluc3QuX19rZXlfXyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLmFzLCBpdGVtKTtcbiAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KFxuICAgICAgICAgICAgaW5zdCwgdGhpcy5zZWxlY3RlZEFzLCB0aGlzLiQuc2VsZWN0b3IuaXNTZWxlY3RlZChpdGVtKSk7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShpbnN0LCB0aGlzLmluZGV4QXMsIHZpZHgpO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoXG4gICAgICAgICAgICBpbnN0LCAndGFiSW5kZXgnLCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID09PSB2aWR4ID8gMCA6IC0xKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxJbmRleEZvcktleVtpbnN0Ll9fa2V5X19dID0gcGlkeDtcbiAgICAgICAgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzICYmIGluc3QuX2ZsdXNoUHJvcGVydGllcyh0cnVlKTtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuICAgICAgfVxuICAgIH0sIGl0ZW1TZXQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBoZWlnaHQgZm9yIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgKlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX3VwZGF0ZU1ldHJpY3M6IGZ1bmN0aW9uKGl0ZW1TZXQpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgZGlzdHJpYnV0ZWQgYWxsIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgIC8vIHNvIHdlIGNhbiBtZWFzdXJlIHRoZW0uXG4gICAgZmx1c2goKTtcblxuICAgIHZhciBuZXdQaHlzaWNhbFNpemUgPSAwO1xuICAgIHZhciBvbGRQaHlzaWNhbFNpemUgPSAwO1xuICAgIHZhciBwcmV2QXZnQ291bnQgPSB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudDtcbiAgICB2YXIgcHJldlBoeXNpY2FsQXZnID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlO1xuXG4gICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgIG9sZFBoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgbmV3UGh5c2ljYWxTaXplICs9IHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF07XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdID8gMSA6IDA7XG4gICAgfSwgaXRlbVNldCk7XG5cbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTaXplID1cbiAgICAgICAgICBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2xkUGh5c2ljYWxTaXplID0gKHRoaXMuX2l0ZW1zUGVyUm93ID09PSAxKSA/XG4gICAgICAgICAgb2xkUGh5c2ljYWxTaXplIDpcbiAgICAgICAgICBNYXRoLmNlaWwodGhpcy5fcGh5c2ljYWxDb3VudCAvIHRoaXMuX2l0ZW1zUGVyUm93KSAqIHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9XG4gICAgICAgICAgdGhpcy5fcGh5c2ljYWxTaXplICsgbmV3UGh5c2ljYWxTaXplIC0gb2xkUGh5c2ljYWxTaXplO1xuICAgICAgdGhpcy5faXRlbXNQZXJSb3cgPSAxO1xuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGF2ZXJhZ2UgaWYgaXQgbWVhc3VyZWQgc29tZXRoaW5nLlxuICAgIGlmICh0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCAhPT0gcHJldkF2Z0NvdW50KSB7XG4gICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UgPSBNYXRoLnJvdW5kKFxuICAgICAgICAgICgocHJldlBoeXNpY2FsQXZnICogcHJldkF2Z0NvdW50KSArIG5ld1BoeXNpY2FsU2l6ZSkgL1xuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZUNvdW50KTtcbiAgICB9XG4gIH0sXG5cbiAgX3VwZGF0ZUdyaWRNZXRyaWNzOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pdGVtV2lkdGggPSB0aGlzLl9waHlzaWNhbENvdW50ID4gMCA/XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOlxuICAgICAgICAyMDA7XG4gICAgdGhpcy5fcm93SGVpZ2h0ID1cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA+IDAgPyB0aGlzLl9waHlzaWNhbEl0ZW1zWzBdLm9mZnNldEhlaWdodCA6IDIwMDtcbiAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1XaWR0aCA/XG4gICAgICAgIE1hdGguZmxvb3IodGhpcy5fdmlld3BvcnRXaWR0aCAvIHRoaXMuX2l0ZW1XaWR0aCkgOlxuICAgICAgICB0aGlzLl9pdGVtc1BlclJvdztcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBoeXNpY2FsIGl0ZW1zLlxuICAgKi9cbiAgX3Bvc2l0aW9uSXRlbXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2FkanVzdFNjcm9sbFBvc2l0aW9uKCk7XG5cbiAgICB2YXIgeSA9IHRoaXMuX3BoeXNpY2FsVG9wO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFyIHRvdGFsSXRlbVdpZHRoID0gdGhpcy5faXRlbXNQZXJSb3cgKiB0aGlzLl9pdGVtV2lkdGg7XG4gICAgICB2YXIgcm93T2Zmc2V0ID0gKHRoaXMuX3ZpZXdwb3J0V2lkdGggLSB0b3RhbEl0ZW1XaWR0aCkgLyAyO1xuXG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICB2YXIgbW9kdWx1cyA9IHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdztcbiAgICAgICAgdmFyIHggPSBNYXRoLmZsb29yKChtb2R1bHVzICogdGhpcy5faXRlbVdpZHRoKSArIHJvd09mZnNldCk7XG4gICAgICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgICAgIHggPSB4ICogLTE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCh4ICsgJ3B4JywgeSArICdweCcsIDAsIHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pO1xuICAgICAgICBpZiAodGhpcy5fc2hvdWxkUmVuZGVyTmV4dFJvdyh2aWR4KSkge1xuICAgICAgICAgIHkgKz0gdGhpcy5fcm93SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCB5ICsgJ3B4JywgMCwgdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XSk7XG4gICAgICAgIHkgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZVZpZHgocGlkeCkgJSB0aGlzLl9pdGVtc1BlclJvdyAhPT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucywgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAqIHdoZXRoZXIgb3Igbm90IHRoZSBuZXh0IGluZGV4IHdpbGwgbmVlZFxuICAgKiB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyByb3cuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2aWR4IFZpcnR1YWwgaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9zaG91bGRSZW5kZXJOZXh0Um93OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuIHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyA9PT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBpdCB3YXMgb3ZlcmVzdGltYXRlZC5cbiAgICovXG4gIF9hZGp1c3RTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlbHRhSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ID09PSAwID9cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgOlxuICAgICAgICBNYXRoLm1pbih0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3BoeXNpY2FsVG9wLCAwKTtcbiAgICAvLyBOb3RlOiB0aGUgZGVsdGEgY2FuIGJlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICAgIGlmIChkZWx0YUhlaWdodCAhPT0gMCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSB0aGlzLl9waHlzaWNhbFRvcCAtIGRlbHRhSGVpZ2h0O1xuICAgICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFRvcDtcbiAgICAgIC8vIGp1a2luZyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGludGVyaWFsIHNjcm9sbGluZyBvbiBpT1MgaXMgbm8gYnVlbm9cbiAgICAgIGlmICghSU9TX1RPVUNIX1NDUk9MTElORyAmJiBzY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wIC0gZGVsdGFIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIF9yZXNldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbihwb3MpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgJiYgcG9zID49IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbFRvcCA9IHBvcztcbiAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsIGhlaWdodCwgdGhhdCdzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQsXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlVXBkYXRlIElmIHRydWUsIHVwZGF0ZXMgdGhlIGhlaWdodCBubyBtYXR0ZXIgd2hhdC5cbiAgICovXG4gIF91cGRhdGVTY3JvbGxlclNpemU6IGZ1bmN0aW9uKGZvcmNlVXBkYXRlKSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFJvd0NvdW50ICogdGhpcy5fcm93SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgPVxuICAgICAgICAgICh0aGlzLl9waHlzaWNhbEJvdHRvbSArXG4gICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCxcbiAgICAgICAgICAgICAgIDApICpcbiAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSk7XG4gICAgfVxuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsSGVpZ2h0ID09PSAwO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPj0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5ncmlkICYmIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPCB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgLy8gQW1vcnRpemUgaGVpZ2h0IGFkanVzdG1lbnQsIHNvIGl0IHdvbid0IHRyaWdnZXIgbGFyZ2UgcmVwYWludHMgdG9vIG9mdGVuLlxuICAgIGlmIChmb3JjZVVwZGF0ZSB8fFxuICAgICAgICBNYXRoLmFicyh0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9zY3JvbGxIZWlnaHQpID49XG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCkge1xuICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyBpdGVtIGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSXRlbVxuICAgKiBAcGFyYW0geyhPYmplY3QpfSBpdGVtIFRoZSBpdGVtIHRvIGJlIHNjcm9sbGVkIHRvXG4gICAqL1xuICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGluZGV4IGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBUaGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICovXG4gIHNjcm9sbFRvSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJyB8fCBpZHggPCAwIHx8IGlkeCA+IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmbHVzaCgpO1xuICAgIC8vIEl0ZW1zIHNob3VsZCBoYXZlIGJlZW4gcmVuZGVyZWQgcHJpb3Igc2Nyb2xsaW5nIHRvIGFuIGluZGV4LlxuICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlkeCA9IHRoaXMuX2NsYW1wKGlkeCwgMCwgdGhpcy5fdmlydHVhbENvdW50IC0gMSk7XG4gICAgLy8gVXBkYXRlIHRoZSB2aXJ0dWFsIHN0YXJ0IG9ubHkgd2hlbiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KSB8fCBpZHggPj0gdGhpcy5fbWF4VmlydHVhbFN0YXJ0KSB7XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPVxuICAgICAgICAgIHRoaXMuZ3JpZCA/IChpZHggLSB0aGlzLl9pdGVtc1BlclJvdyAqIDIpIDogKGlkeCAtIDEpO1xuICAgIH1cbiAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoKTtcbiAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKlxuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG5cbiAgICB2YXIgY3VycmVudFRvcEl0ZW0gPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgIHZhciBjdXJyZW50VmlydHVhbEl0ZW0gPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgdmFyIHRhcmdldE9mZnNldFRvcCA9IDA7XG4gICAgdmFyIGhpZGRlbkNvbnRlbnRTaXplID0gdGhpcy5faGlkZGVuQ29udGVudFNpemU7XG4gICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIGFzIG11Y2ggYXMgd2UgY2FuLlxuICAgIHdoaWxlIChjdXJyZW50VmlydHVhbEl0ZW0gPCBpZHggJiYgdGFyZ2V0T2Zmc2V0VG9wIDw9IGhpZGRlbkNvbnRlbnRTaXplKSB7XG4gICAgICB0YXJnZXRPZmZzZXRUb3AgPVxuICAgICAgICAgIHRhcmdldE9mZnNldFRvcCArIHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChjdXJyZW50VG9wSXRlbSk7XG4gICAgICBjdXJyZW50VG9wSXRlbSA9IChjdXJyZW50VG9wSXRlbSArIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIGN1cnJlbnRWaXJ0dWFsSXRlbSsrO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUodHJ1ZSk7XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0ICsgdGFyZ2V0T2Zmc2V0VG9wKTtcbiAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwaHlzaWNhbCBhdmVyYWdlIGFuZCB0aGUgYXZlcmFnZSBjb3VudC5cbiAgICovXG4gIF9yZXNldEF2ZXJhZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSA9IDA7XG4gICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgPSAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IHRyaWdnZXJlZCBieSBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYFxuICAgKiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlc2l6ZWQuXG4gICAqL1xuICBfcmVzaXplSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGNsZWFyIGNhY2hlZCB2aXNpYmxlIGluZGV4LlxuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIC8vIFJlaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuICAgICAgICB0aGlzLl9yZXNldEF2ZXJhZ2UoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVbmluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgYW5pbWF0aW9uRnJhbWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAqL1xuICBzZWxlY3RJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKi9cbiAgc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleChpbmRleCk7XG4gICAgfVxuICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleChpbmRleCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBkZXNlbGVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICovXG4gIGRlc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLmRlc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogRGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqXG4gICAqIEBtZXRob2QgZGVzZWxlY3RJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIGRlc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KFxuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0SW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyBhIGdpdmVuIGl0ZW0gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGl0ZW1cbiAgICogaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZC5cbiAgICpcbiAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIG9iamVjdC5cbiAgICovXG4gIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3Rpb25Gb3JJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5XG4gICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqL1xuICB0b2dnbGVTZWxlY3Rpb25Gb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWQgP1xuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkKGluZGV4KSA6XG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5pc1NlbGVjdGVkKHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICBpc1NlbGVjdGVkID8gdGhpcy5kZXNlbGVjdEluZGV4KGluZGV4KSA6IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBsaXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGNsZWFyU2VsZWN0aW9uXG4gICAqL1xuICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiQuc2VsZWN0b3IuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGB0YXBgIGlmIGBzZWxlY3Rpb25FbmFibGVkYCBpcyB0cnVlLFxuICAgKiBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgb3RoZXJ3aXNlLlxuICAgKi9cbiAgX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3Rpb25FbmFibGVkKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBzZWxlY3Rpb25FbmFibGVkID8gdGhpcy5saXN0ZW4gOiB0aGlzLnVubGlzdGVuO1xuICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB0aGlzLCAndGFwJywgJ19zZWxlY3Rpb25IYW5kbGVyJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBpdGVtIGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICAgKi9cbiAgX3NlbGVjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgaWYgKCFtb2RlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbW9kZWxUYWJJbmRleCwgYWN0aXZlRWxUYWJJbmRleDtcbiAgICB2YXIgdGFyZ2V0ID0gZG9tKGUpLnBhdGhbMF07XG4gICAgdmFyIGFjdGl2ZUVsID0gdGhpcy5fZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgIHZhciBwaHlzaWNhbEl0ZW0gPVxuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgobW9kZWxbdGhpcy5pbmRleEFzXSldO1xuICAgIC8vIFNhZmFyaSBkb2VzIG5vdCBmb2N1cyBjZXJ0YWluIGZvcm0gY29udHJvbHMgdmlhIG1vdXNlXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTExODA0M1xuICAgIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnaW5wdXQnIHx8IHRhcmdldC5sb2NhbE5hbWUgPT09ICdidXR0b24nIHx8XG4gICAgICAgIHRhcmdldC5sb2NhbE5hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNldCBhIHRlbXBvcmFyeSB0YWJpbmRleFxuICAgIG1vZGVsVGFiSW5kZXggPSBtb2RlbC50YWJJbmRleDtcbiAgICBtb2RlbC50YWJJbmRleCA9IFNFQ1JFVF9UQUJJTkRFWDtcbiAgICBhY3RpdmVFbFRhYkluZGV4ID0gYWN0aXZlRWwgPyBhY3RpdmVFbC50YWJJbmRleCA6IC0xO1xuICAgIG1vZGVsLnRhYkluZGV4ID0gbW9kZWxUYWJJbmRleDtcbiAgICAvLyBPbmx5IHNlbGVjdCB0aGUgaXRlbSBpZiB0aGUgdGFwIHdhc24ndCBvbiBhIGZvY3VzYWJsZSBjaGlsZFxuICAgIC8vIG9yIHRoZSBlbGVtZW50IGJvdW5kIHRvIGB0YWJJbmRleGBcbiAgICBpZiAoYWN0aXZlRWwgJiYgcGh5c2ljYWxJdGVtICE9PSBhY3RpdmVFbCAmJlxuICAgICAgICBwaHlzaWNhbEl0ZW0uY29udGFpbnMoYWN0aXZlRWwpICYmXG4gICAgICAgIGFjdGl2ZUVsVGFiSW5kZXggIT09IFNFQ1JFVF9UQUJJTkRFWCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckl0ZW0obW9kZWxbdGhpcy5hc10pO1xuICB9LFxuXG4gIF9tdWx0aVNlbGVjdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKG11bHRpU2VsZWN0aW9uKSB7XG4gICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMuJC5zZWxlY3Rvci5tdWx0aSA9IG11bHRpU2VsZWN0aW9uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIGEgZ2l2ZW4gbGlzdCBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgKi9cbiAgdXBkYXRlU2l6ZUZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVTaXplRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIHVwZGF0ZVNpemVGb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVNZXRyaWNzKFt0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlbXBvcmFyeSBiYWNrZmlsbCBpdGVtIGluIHRoZSByZW5kZXJlZCBwb29sIG9mIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRvIHJlcGxhY2UgdGhlIG1haW4gZm9jdXNlZCBpdGVtLiBUaGUgZm9jdXNlZCBpdGVtIGhhcyB0YWJJbmRleCA9IDBcbiAgICogYW5kIG1pZ2h0IGJlIGN1cnJlbnRseSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBUaGlzIGR5bmFtaWMgcmVwbGFjZW1lbnQgaGVscHMgdG8gcHJlc2VydmUgdGhlIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgX21hbmFnZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG5cbiAgICBpZiAoZmlkeCA+PSAwICYmIGZpZHggPCB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCBpbmRleCwgY2hlY2sgaWYgdGhhdCBpbmRleCBpcyByZW5kZXJlZFxuICAgICAgLy8gaW4gYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChmaWR4KSkge1xuICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUZvY3VzQmFja2ZpbGxJdGVtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwICYmIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UsIGFzc2lnbiB0aGUgaW5pdGlhbCBmb2N1c2VkIGluZGV4LlxuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9waHlzaWNhbFN0YXJ0XTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgcmFuZG9tIGluZGV4IHRvIHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IGNvbXBsZXRlcyBpdCdzIHJvdy5cbiAgICogQWxsb3dzIGZvciBiZXR0ZXIgb3JkZXIgYW5kIGZpbGwgY29tcHV0YXRpb24gd2hlbiBncmlkID09IHRydWUuXG4gICAqL1xuICBfY29udmVydEluZGV4VG9Db21wbGV0ZVJvdzogZnVuY3Rpb24oaWR4KSB7XG4gICAgLy8gd2hlbiBncmlkID09IGZhbHNlIF9pdGVtUGVyUm93IGNhbiBiZSB1bnNldC5cbiAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1zUGVyUm93IHx8IDE7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZCA/IE1hdGguY2VpbChpZHggLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9pdGVtc1BlclJvdyA6XG4gICAgICAgICAgICAgICAgICAgICAgIGlkeDtcbiAgfSxcblxuICBfaXNJbmRleFJlbmRlcmVkOiBmdW5jdGlvbihpZHgpIHtcbiAgICByZXR1cm4gaWR4ID49IHRoaXMuX3ZpcnR1YWxTdGFydCAmJiBpZHggPD0gdGhpcy5fdmlydHVhbEVuZDtcbiAgfSxcblxuICBfaXNJbmRleFZpc2libGU6IGZ1bmN0aW9uKGlkeCkge1xuICAgIHJldHVybiBpZHggPj0gdGhpcy5maXJzdFZpc2libGVJbmRleCAmJiBpZHggPD0gdGhpcy5sYXN0VmlzaWJsZUluZGV4O1xuICB9LFxuXG4gIF9nZXRQaHlzaWNhbEluZGV4OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgKHZpZHggLSB0aGlzLl92aXJ0dWFsU3RhcnQpKSAlXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gIH0sXG5cbiAgZm9jdXNJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShpZHgpO1xuICB9LFxuXG4gIF9mb2N1c1BoeXNpY2FsSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAvLyBzY3JvbGwgdG8gaW5kZXggdG8gbWFrZSBzdXJlIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoaWR4KTtcbiAgICB9XG4gICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpXTtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChwaHlzaWNhbEl0ZW0pO1xuICAgIHZhciBmb2N1c2FibGU7XG4gICAgLy8gc2V0IGEgc2VjcmV0IHRhYiBpbmRleFxuICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgIC8vIGNoZWNrIGlmIGZvY3VzYWJsZSBlbGVtZW50IGlzIHRoZSBwaHlzaWNhbCBpdGVtXG4gICAgaWYgKHBoeXNpY2FsSXRlbS50YWJJbmRleCA9PT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICBmb2N1c2FibGUgPSBwaHlzaWNhbEl0ZW07XG4gICAgfVxuICAgIC8vIHNlYXJjaCBmb3IgdGhlIGVsZW1lbnQgd2hpY2ggdGFiaW5kZXggaXMgYm91bmQgdG8gdGhlIHNlY3JldCB0YWIgaW5kZXhcbiAgICBpZiAoIWZvY3VzYWJsZSkge1xuICAgICAgZm9jdXNhYmxlID0gZG9tKHBoeXNpY2FsSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW3RhYmluZGV4PVwiJyArIFNFQ1JFVF9UQUJJTkRFWCArICdcIl0nKTtcbiAgICB9XG4gICAgLy8gcmVzdG9yZSB0aGUgdGFiIGluZGV4XG4gICAgbW9kZWwudGFiSW5kZXggPSAwO1xuICAgIC8vIGZvY3VzIHRoZSBmb2N1c2FibGUgZWxlbWVudFxuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBpZHg7XG4gICAgZm9jdXNhYmxlICYmIGZvY3VzYWJsZS5mb2N1cygpO1xuICB9LFxuXG4gIF9yZW1vdmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICB0aGlzLl9pdGVtc1BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgfVxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSAtMTtcbiAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IC0xO1xuICB9LFxuXG4gIF9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSkge1xuICAgICAgLy8gQ3JlYXRlIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgIHZhciBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgfVxuICAgIC8vIFNldCB0aGUgb2ZmY3JlZW4gZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pLnRhYkluZGV4ID0gMDtcbiAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtO1xuICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gZnBpZHg7XG4gICAgLy8gSGlkZSB0aGUgZm9jdXNlZCBwaHlzaWNhbC5cbiAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gIH0sXG5cbiAgX3Jlc3RvcmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSB8fCB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBBc3NpZ24gbW9kZWxzIHRvIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgIC8vIEdldCB0aGUgbmV3IHBoeXNpY2FsIGluZGV4IGZvciB0aGUgZm9jdXNlZCBpbmRleC5cbiAgICB2YXIgZnBpZHggPSB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9XG4gICAgICAgIHRoaXMuX2dldFBoeXNpY2FsSW5kZXgodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCk7XG5cbiAgICB2YXIgb25TY3JlZW5JdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF07XG4gICAgaWYgKCFvblNjcmVlbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9uU2NyZWVuSW5zdGFuY2UgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChvblNjcmVlbkl0ZW0pO1xuICAgIHZhciBvZmZTY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgICAvLyBSZXN0b3JlcyB0aGUgcGh5c2ljYWwgaXRlbSBvbmx5IHdoZW4gaXQgaGFzIHRoZSBzYW1lIG1vZGVsXG4gICAgLy8gYXMgdGhlIG9mZnNjcmVlbiBvbmUuIFVzZSBrZXkgZm9yIGNvbXBhcmlzb24gc2luY2UgdXNlcnMgY2FuIHNldFxuICAgIC8vIGEgbmV3IGl0ZW0gdmlhIHNldCgnaXRlbXMuaWR4JykuXG4gICAgaWYgKG9uU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10gPT09IG9mZlNjcmVlbkluc3RhbmNlW3RoaXMuYXNdKSB7XG4gICAgICAvLyBGbGlwIHRoZSBmb2N1cyBiYWNrZmlsbC5cbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gb25TY3JlZW5JdGVtO1xuICAgICAgb25TY3JlZW5JbnN0YW5jZS50YWJJbmRleCA9IC0xO1xuICAgICAgLy8gUmVzdG9yZSB0aGUgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgICAgdGhpcy5fcGh5c2ljYWxJdGVtc1tmcGlkeF0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbTtcbiAgICAgIC8vIEhpZGUgdGhlIHBoeXNpY2FsIGl0ZW0gdGhhdCBiYWNrZmlsbHMuXG4gICAgICB0aGlzLnRyYW5zbGF0ZTNkKDAsIEhJRERFTl9ZLCAwLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgfSxcblxuICBfZGlkRm9jdXM6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdGFyZ2V0TW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgdmFyIGZvY3VzZWRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX2ZvY3VzZWRJdGVtKTtcbiAgICB2YXIgaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSAhPT0gbnVsbDtcbiAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG4gICAgaWYgKCF0YXJnZXRNb2RlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9jdXNlZE1vZGVsID09PSB0YXJnZXRNb2RlbCkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgZm9jdXNlZCB0aGUgc2FtZSBpdGVtLCB0aGVuIGJyaW5nIGl0IGludG8gdmlldyBpZiBpdCdzIG5vdFxuICAgICAgLy8gdmlzaWJsZS5cbiAgICAgIGlmICghdGhpcy5faXNJbmRleFZpc2libGUoZmlkeCkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGZpZHgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIC8vIFJlc3RvcmUgdGFiSW5kZXggZm9yIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtLlxuICAgICAgaWYgKGZvY3VzZWRNb2RlbCkge1xuICAgICAgICBmb2N1c2VkTW9kZWwudGFiSW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICAgIC8vIFNldCB0aGUgdGFiSW5kZXggZm9yIHRoZSBuZXh0IGZvY3VzZWQgaXRlbS5cbiAgICAgIHRhcmdldE1vZGVsLnRhYkluZGV4ID0gMDtcbiAgICAgIGZpZHggPSB0YXJnZXRNb2RlbFt0aGlzLmluZGV4QXNdO1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IGZpZHg7XG4gICAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IHRoaXMuX2dldFBoeXNpY2FsSW5kZXgoZmlkeCk7XG4gICAgICB0aGlzLl9mb2N1c2VkSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXhdO1xuICAgICAgaWYgKGhhc09mZnNjcmVlbkZvY3VzZWRJdGVtICYmICF0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkge1xuICAgICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2tleWRvd25IYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgLyogQVJST1dfRE9XTiAqLyA0MDpcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCB0aGlzLl92aXJ0dWFsQ291bnQgLSAxKVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oXG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuZ3JpZCA/IHRoaXMuX2l0ZW1zUGVyUm93IDogMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogQVJST1dfUklHSFQgKi8gMzk6XG4gICAgICAgIGlmICh0aGlzLmdyaWQpXG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oXG4gICAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAtMSA6IDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEFSUk9XX1VQICovIDM4OlxuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+IDApXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggLSAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBBUlJPV19MRUZUICovIDM3OlxuICAgICAgICBpZiAodGhpcy5ncmlkKVxuICAgICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKFxuICAgICAgICAgICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ICsgKHRoaXMuX2lzUlRMID8gMSA6IC0xKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBFTlRFUiAqLyAxMzpcbiAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0odGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuYWJsZWQpXG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uSGFuZGxlcihlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIF9jbGFtcDogZnVuY3Rpb24odiwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heChtaW4sIHYpKTtcbiAgfSxcblxuICBfZGVib3VuY2U6IGZ1bmN0aW9uKG5hbWUsIGNiLCBhc3luY01vZHVsZSkge1xuICAgIHRoaXMuX2RlYm91bmNlcnMgPSB0aGlzLl9kZWJvdW5jZXJzIHx8IHt9O1xuICAgIHRoaXMuX2RlYm91bmNlcnNbbmFtZV0gPVxuICAgICAgICBEZWJvdW5jZXIuZGVib3VuY2UodGhpcy5fZGVib3VuY2Vyc1tuYW1lXSwgYXN5bmNNb2R1bGUsIGNiLmJpbmQodGhpcykpO1xuICAgIGVucXVldWVEZWJvdW5jZXIodGhpcy5fZGVib3VuY2Vyc1tuYW1lXSk7XG4gIH0sXG5cbiAgX2ZvcndhcmRQcm9wZXJ0eTogZnVuY3Rpb24oaW5zdCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpbnN0Ll9zZXRQZW5kaW5nUHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICB9LFxuXG4gIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MiAqL1xuICBfZm9yd2FyZEhvc3RQcm9wVjI6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkuZm9yd2FyZEhvc3RQcm9wKHByb3AsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF9ub3RpZnlJbnN0YW5jZVByb3BWMjogZnVuY3Rpb24oaW5zdCwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAobWF0Y2hlcyh0aGlzLmFzLCBwcm9wKSkge1xuICAgICAgdmFyIGlkeCA9IGluc3RbdGhpcy5pbmRleEFzXTtcbiAgICAgIGlmIChwcm9wID09IHRoaXMuYXMpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tpZHhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLm5vdGlmeVBhdGgodHJhbnNsYXRlKHRoaXMuYXMsICdpdGVtcy4nICsgaWR4LCBwcm9wKSwgdmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICAvKiBUZW1wbGF0aXplciBiaW5kaW5ncyBmb3IgdjEgKi9cbiAgX2dldFN0YW1wZWRDaGlsZHJlbjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsSXRlbXM7XG4gIH0sXG5cbiAgX2ZvcndhcmRJbnN0YW5jZVBhdGg6IGZ1bmN0aW9uKGluc3QsIHBhdGgsIHZhbHVlKSB7XG4gICAgaWYgKHBhdGguaW5kZXhPZih0aGlzLmFzICsgJy4nKSA9PT0gMCkge1xuICAgICAgdGhpcy5ub3RpZnlQYXRoKFxuICAgICAgICAgICdpdGVtcy4nICsgaW5zdC5fX2tleV9fICsgJy4nICsgcGF0aC5zbGljZSh0aGlzLmFzLmxlbmd0aCArIDEpLFxuICAgICAgICAgIHZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZvcndhcmRQYXJlbnRQYXRoOiBmdW5jdGlvbihwYXRoLCB2YWx1ZSkge1xuICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pLm5vdGlmeVBhdGgocGF0aCwgdmFsdWUsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX2ZvcndhcmRQYXJlbnRQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICh0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdKVxuICAgICAgICAuY29uY2F0KFt0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSwgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW1dKVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KGl0ZW0pW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKiBHZXRzIHRoZSBhY3RpdmVFbGVtZW50IG9mIHRoZSBzaGFkb3cgcm9vdC9ob3N0IHRoYXQgY29udGFpbnMgdGhlIGxpc3QuICovXG4gIF9nZXRBY3RpdmVFbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXNIb3N0ID0gdGhpcy5faXRlbXNQYXJlbnQubm9kZS5kb21Ib3N0O1xuICAgIHJldHVybiBkb20oaXRlbXNIb3N0ID8gaXRlbXNIb3N0LnJvb3QgOiBkb2N1bWVudCkuYWN0aXZlRWxlbWVudDtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTggVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBDb21ib0JveFBsYWNlaG9sZGVyIH0gZnJvbSAnLi92YWFkaW4tY29tYm8tYm94LXBsYWNlaG9sZGVyLmpzJztcblxuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBDb21ib0JveERhdGFQcm92aWRlck1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBEYXRhUHJvdmlkZXJNaXhpbiBleHRlbmRzIHN1cGVyQ2xhc3Mge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuXG4gICAgICAvKipcbiAgICAgICAqIE51bWJlciBvZiBpdGVtcyBmZXRjaGVkIGF0IGEgdGltZSBmcm9tIHRoZSBkYXRhcHJvdmlkZXIuXG4gICAgICAgKi9cbiAgICAgIHBhZ2VTaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICBvYnNlcnZlcjogJ19wYWdlU2l6ZUNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRvdGFsIG51bWJlciBvZiBpdGVtcy5cbiAgICAgICAqL1xuICAgICAgc2l6ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiAnX3NpemVDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGdW5jdGlvbiB0aGF0IHByb3ZpZGVzIGl0ZW1zIGxhemlseS4gUmVjZWl2ZXMgYXJndW1lbnRzIGBwYXJhbXNgLCBgY2FsbGJhY2tgXG4gICAgICAgKlxuICAgICAgICogYHBhcmFtcy5wYWdlYCBSZXF1ZXN0ZWQgcGFnZSBpbmRleFxuICAgICAgICpcbiAgICAgICAqIGBwYXJhbXMucGFnZVNpemVgIEN1cnJlbnQgcGFnZSBzaXplXG4gICAgICAgKlxuICAgICAgICogYHBhcmFtcy5maWx0ZXJgIEN1cnJlbnRseSBhcHBsaWVkIGZpbHRlclxuICAgICAgICpcbiAgICAgICAqIGBjYWxsYmFjayhpdGVtcywgc2l6ZSlgIENhbGxiYWNrIGZ1bmN0aW9uIHdpdGggYXJndW1lbnRzOlxuICAgICAgICogICAtIGBpdGVtc2AgQ3VycmVudCBwYWdlIG9mIGl0ZW1zXG4gICAgICAgKiAgIC0gYHNpemVgIFRvdGFsIG51bWJlciBvZiBpdGVtcy5cbiAgICAgICAqL1xuICAgICAgZGF0YVByb3ZpZGVyOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZGF0YVByb3ZpZGVyQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF9wZW5kaW5nUmVxdWVzdHM6IHtcbiAgICAgICAgdmFsdWU6ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIF9fcGxhY2VIb2xkZXI6IHtcbiAgICAgICAgdmFsdWU6IG5ldyBDb21ib0JveFBsYWNlaG9sZGVyKClcbiAgICAgIH1cblxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ19kYXRhUHJvdmlkZXJGaWx0ZXJDaGFuZ2VkKGZpbHRlciwgZGF0YVByb3ZpZGVyKScsXG4gICAgICAnX2RhdGFQcm92aWRlckNsZWFyRmlsdGVyKGRhdGFQcm92aWRlciwgb3BlbmVkLCB2YWx1ZSknLFxuICAgICAgJ193YXJuRGF0YVByb3ZpZGVyVmFsdWUoZGF0YVByb3ZpZGVyLCB2YWx1ZSknLFxuICAgICAgJ19lbnN1cmVGaXJzdFBhZ2Uob3BlbmVkKScsXG4gICAgXTtcbiAgfVxuXG4gIF9kYXRhUHJvdmlkZXJDbGVhckZpbHRlcihkYXRhUHJvdmlkZXIsIG9wZW5lZCwgdmFsdWUpIHtcbiAgICAvLyBDYW4ndCBkZXBlbmQgb24gZmlsdGVyIGluIHRoaXMgb2JzZXZlciBhcyB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gY2xlYXIgdGhlIGZpbHRlciB3aGVuZXZlciBpdCdzIHNldFxuICAgIGlmIChkYXRhUHJvdmlkZXIgJiYgdGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9IHt9O1xuICAgICAgdGhpcy5maWx0ZXIgPSAnJztcbiAgICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignaW5kZXgtcmVxdWVzdGVkJywgZSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGUuZGV0YWlsLmluZGV4O1xuICAgICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuX2dldFBhZ2VGb3JJbmRleChpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLl9zaG91bGRMb2FkUGFnZShwYWdlKSkge1xuICAgICAgICAgIHRoaXMuX2xvYWRQYWdlKHBhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfZGF0YVByb3ZpZGVyRmlsdGVyQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5kYXRhUHJvdmlkZXIgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9IHt9O1xuICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgfVxuICB9XG5cbiAgX2Vuc3VyZUZpcnN0UGFnZShvcGVuZWQpIHtcbiAgICBpZiAob3BlbmVkICYmIHRoaXMuX3Nob3VsZExvYWRQYWdlKDApKSB7XG4gICAgICB0aGlzLl9sb2FkUGFnZSgwKTtcbiAgICB9XG4gIH1cblxuICBfc2hvdWxkTG9hZFBhZ2UocGFnZSkge1xuICAgIGlmICghdGhpcy5maWx0ZXJlZEl0ZW1zIHx8IHRoaXMuX2ZvcmNlTmV4dFJlcXVlc3QpIHtcbiAgICAgIHRoaXMuX2ZvcmNlTmV4dFJlcXVlc3QgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRlZEl0ZW0gPSB0aGlzLmZpbHRlcmVkSXRlbXNbcGFnZSAqIHRoaXMucGFnZVNpemVdO1xuICAgIGlmIChsb2FkZWRJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBsb2FkZWRJdGVtIGluc3RhbmNlb2YgQ29tYm9Cb3hQbGFjZWhvbGRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIF9sb2FkUGFnZShwYWdlKSB7XG4gICAgLy8gbWFrZSBzdXJlIHNhbWUgcGFnZSBpc24ndCByZXF1ZXN0ZWQgbXVsdGlwbGUgdGltZXMuXG4gICAgaWYgKCF0aGlzLl9wZW5kaW5nUmVxdWVzdHNbcGFnZV0gJiYgdGhpcy5kYXRhUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgcGFnZSxcbiAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXG4gICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gKGl0ZW1zLCBzaXplKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9wZW5kaW5nUmVxdWVzdHNbcGFnZV0gPT09IGNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmZpbHRlcmVkSXRlbXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGZpbHRlcmVkSXRlbXMuc3BsaWNlKHBhcmFtcy5wYWdlICogcGFyYW1zLnBhZ2VTaXplLCBpdGVtcy5sZW5ndGgsIC4uLml0ZW1zKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaWNlKCdmaWx0ZXJlZEl0ZW1zJywgcGFyYW1zLnBhZ2UgKiBwYXJhbXMucGFnZVNpemUsIGl0ZW1zLmxlbmd0aCwgLi4uaXRlbXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBVcGRhdGUgc2VsZWN0ZWRJdGVtIGZyb20gZmlsdGVyZWRJdGVtcyBpZiB2YWx1ZSBpcyBzZXRcbiAgICAgICAgICBpZiAodGhpcy5faXNWYWxpZFZhbHVlKHRoaXMudmFsdWUpICYmIHRoaXMuX2dldEl0ZW1WYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbSkgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdEl0ZW1Gb3JWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcblxuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wZW5kaW5nUmVxdWVzdHNbcGFnZV07XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5fcGVuZGluZ1JlcXVlc3RzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXSA9IGNhbGxiYWNrO1xuICAgICAgdGhpcy5kYXRhUHJvdmlkZXIocGFyYW1zLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgX2dldFBhZ2VGb3JJbmRleChpbmRleCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy5wYWdlU2l6ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjYWNoZWQgcGFnZXMgYW5kIHJlbG9hZHMgZGF0YSBmcm9tIGRhdGFwcm92aWRlciB3aGVuIG5lZWRlZC5cbiAgICovXG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGFQcm92aWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wZW5kaW5nUmVxdWVzdHMgPSB7fTtcbiAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAodGhpcy5zaXplIHx8IDApOyBpKyspIHtcbiAgICAgIGZpbHRlcmVkSXRlbXMucHVzaCh0aGlzLl9fcGxhY2VIb2xkZXIpO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlcmVkSXRlbXMgPSBmaWx0ZXJlZEl0ZW1zO1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fbG9hZFBhZ2UoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvcmNlTmV4dFJlcXVlc3QgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9zaXplQ2hhbmdlZChzaXplID0gMCkge1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSAodGhpcy5maWx0ZXJlZEl0ZW1zIHx8IFtdKS5zbGljZSgwLCBzaXplKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgZmlsdGVyZWRJdGVtc1tpXSA9IGZpbHRlcmVkSXRlbXNbaV0gIT09IHVuZGVmaW5lZCA/IGZpbHRlcmVkSXRlbXNbaV0gOiB0aGlzLl9fcGxhY2VIb2xkZXI7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gIH1cblxuICBfcGFnZVNpemVDaGFuZ2VkKHBhZ2VTaXplLCBvbGRQYWdlU2l6ZSkge1xuICAgIGlmIChNYXRoLmZsb29yKHBhZ2VTaXplKSAhPT0gcGFnZVNpemUgfHwgcGFnZVNpemUgPT09IDApIHtcbiAgICAgIHRoaXMucGFnZVNpemUgPSBvbGRQYWdlU2l6ZTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHBhZ2VTaXplYCB2YWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgPiAwJyk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG5cbiAgX2RhdGFQcm92aWRlckNoYW5nZWQoZGF0YVByb3ZpZGVyLCBvbGREYXRhUHJvdmlkZXIpIHtcbiAgICB0aGlzLl9lbnN1cmVJdGVtc09yRGF0YVByb3ZpZGVyKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gb2xkRGF0YVByb3ZpZGVyO1xuICAgIH0pO1xuICB9XG5cbiAgX2Vuc3VyZUl0ZW1zT3JEYXRhUHJvdmlkZXIocmVzdG9yZU9sZFZhbHVlQ2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5pdGVtcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZGF0YVByb3ZpZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3RvcmVPbGRWYWx1ZUNhbGxiYWNrKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzaW5nIGBpdGVtc2AgYW5kIGBkYXRhUHJvdmlkZXJgIHRvZ2V0aGVyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICBfd2FybkRhdGFQcm92aWRlclZhbHVlKGRhdGFQcm92aWRlciwgdmFsdWUpIHtcbiAgICBpZiAoZGF0YVByb3ZpZGVyICYmIHZhbHVlICE9PSAnJyAmJiAodGhpcy5zZWxlY3RlZEl0ZW0gPT09IHVuZGVmaW5lZCB8fCB0aGlzLnNlbGVjdGVkSXRlbSA9PT0gbnVsbCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlSW5kZXggPSB0aGlzLl9pbmRleE9mVmFsdWUodmFsdWUsIHRoaXMuZmlsdGVyZWRJdGVtcyk7XG4gICAgICBpZiAodmFsdWVJbmRleCA8IDAgfHwgIXRoaXMuX2dldEl0ZW1MYWJlbCh0aGlzLmZpbHRlcmVkSXRlbXNbdmFsdWVJbmRleF0pKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiB1bmFibGUgdG8gZGV0ZXJtaW5lIHRoZSBsYWJlbCBmb3IgdGhlIHByb3ZpZGVkIGB2YWx1ZWAuICcgK1xuICAgICAgICAgICdOb3RoaW5nIHRvIGRpc3BsYXkgaW4gdGhlIHRleHQgZmllbGQuIFRoaXMgdXN1YWxseSBoYXBwZW5zIHdoZW4gJyArXG4gICAgICAgICAgJ3NldHRpbmcgYW4gaW5pdGlhbCBgdmFsdWVgIGJlZm9yZSBhbnkgaXRlbXMgYXJlIHJldHVybmVkIGZyb20gJyArXG4gICAgICAgICAgJ3RoZSBgZGF0YVByb3ZpZGVyYCBjYWxsYmFjay4gQ29uc2lkZXIgc2V0dGluZyBgc2VsZWN0ZWRJdGVtYCAnICtcbiAgICAgICAgICAnaW5zdGVhZCBvZiBgdmFsdWVgJ1xuICAgICAgICApO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tbGlzdC9pcm9uLWxpc3QuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1jb21iby1ib3gtaXRlbS5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi5qcyc7XG5pbXBvcnQgeyBDb21ib0JveFBsYWNlaG9sZGVyIH0gZnJvbSAnLi92YWFkaW4tY29tYm8tYm94LXBsYWNlaG9sZGVyLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0IFRPVUNIX0RFVklDRSA9ICgoKSA9PiB7XG4gIHRyeSB7XG4gICAgZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1RvdWNoRXZlbnQnKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSkoKTtcblxuLyoqXG4gKiBFbGVtZW50IGZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDb21ib0JveERyb3Bkb3duV3JhcHBlckVsZW1lbnQgZXh0ZW5kcyAoY2xhc3MgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7fSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDx2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duIGlkPVwiZHJvcGRvd25cIiBoaWRkZW49XCJbW19oaWRkZW4oX2l0ZW1zLiosIGxvYWRpbmcpXV1cIiBwb3NpdGlvbi10YXJnZXQ9XCJbW3Bvc2l0aW9uVGFyZ2V0XV1cIiBvbi10ZW1wbGF0ZS1jaGFuZ2VkPVwiX3RlbXBsYXRlQ2hhbmdlZFwiIG9uLXBvc2l0aW9uLWNoYW5nZWQ9XCJfc2V0T3ZlcmxheUhlaWdodFwiIGRpc2FibGUtdXBncmFkZT1cIlwiIHRoZW1lPVwiW1t0aGVtZV1dXCI+XG4gICAgICA8dGVtcGxhdGU+XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAjc2Nyb2xsZXIge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgICAgICAgICAgIC8qIEZpeGVzIGl0ZW0gYmFja2dyb3VuZCBmcm9tIGdldHRpbmcgb24gdG9wIG9mIHNjcm9sbGJhcnMgb24gU2FmYXJpICovXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICAgICAgICAgICAvKiBFbmFibGUgbW9tZW50dW0gc2Nyb2xsaW5nIG9uIGlPUyAoaXJvbi1saXN0IHYxLjIrIG5vIGxvbmdlciBkb2VzIGl0IGZvciB1cykgKi9cbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAgICAgICAgICAgLyogRml4ZXMgc2Nyb2xsYmFyIGRpc2FwcGVhcmluZyB3aGVuICdTaG93IHNjcm9sbCBiYXJzOiBBbHdheXMnIGVuYWJsZWQgaW4gU2FmYXJpICovXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgaWQ9XCJzY3JvbGxlclwiIG9uLWNsaWNrPVwiX3N0b3BQcm9wYWdhdGlvblwiPlxuICAgICAgICAgIDxpcm9uLWxpc3QgaWQ9XCJzZWxlY3RvclwiIHJvbGU9XCJsaXN0Ym94XCIgaXRlbXM9XCJbW19nZXRJdGVtcyhvcGVuZWQsIF9pdGVtcyldXVwiIHNjcm9sbC10YXJnZXQ9XCJbW19zY3JvbGxlcl1dXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgICAgIDx2YWFkaW4tY29tYm8tYm94LWl0ZW0gb24tY2xpY2s9XCJfb25JdGVtQ2xpY2tcIiBpbmRleD1cIltbX19yZXF1ZXN0SXRlbUJ5SW5kZXgoaXRlbSwgaW5kZXgpXV1cIiBpdGVtPVwiW1tpdGVtXV1cIiBsYWJlbD1cIltbZ2V0SXRlbUxhYmVsKGl0ZW0sIF9pdGVtTGFiZWxQYXRoKV1dXCIgc2VsZWN0ZWQ9XCJbW19pc0l0ZW1TZWxlY3RlZChpdGVtLCBfc2VsZWN0ZWRJdGVtLCBfaXRlbUlkUGF0aCldXVwiIHJlbmRlcmVyPVwiW1tyZW5kZXJlcl1dXCIgcm9sZVxcJD1cIltbX2dldEFyaWFSb2xlKGluZGV4KV1dXCIgYXJpYS1zZWxlY3RlZFxcJD1cIltbX2dldEFyaWFTZWxlY3RlZChfZm9jdXNlZEluZGV4LGluZGV4KV1dXCIgZm9jdXNlZD1cIltbX2lzSXRlbUZvY3VzZWQoX2ZvY3VzZWRJbmRleCxpbmRleCldXVwiIHRhYmluZGV4PVwiLTFcIiB0aGVtZVxcJD1cIltbdGhlbWVdXVwiPlxuICAgICAgICAgICAgICA8L3ZhYWRpbi1jb21iby1ib3gtaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9pcm9uLWxpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24td3JhcHBlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSBpZiB0aGUgZGV2aWNlIHN1cHBvcnRzIHRvdWNoIGV2ZW50cy5cbiAgICAgICAqL1xuICAgICAgdG91Y2hEZXZpY2U6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IFRPVUNIX0RFVklDRVxuICAgICAgfSxcblxuICAgICAgb3BlbmVkOiBCb29sZWFuLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlbGVtZW50IHRvIHBvc2l0aW9uL2FsaWduIHRoZSBkcm9wZG93biBieS5cbiAgICAgICAqL1xuICAgICAgcG9zaXRpb25UYXJnZXQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIHRoZSBjb250ZW50IG9mIHRoZSBgPHZhYWRpbi1jb21iby1ib3gtaXRlbT5gIHByb3BhZ2F0ZWQgZnJvbSB0aGUgY29tYm8gYm94IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHJlbmRlcmVyOiBGdW5jdGlvbixcblxuICAgICAgLyoqXG4gICAgICAgKiBgdHJ1ZWAgd2hlbiBuZXcgaXRlbXMgYXJlIGJlaW5nIGxvYWRlZC5cbiAgICAgICAqL1xuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfc2V0T3ZlcmxheUhlaWdodCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlZCB0byBwcm9wYWdhdGUgdGhlIGB0aGVtZWAgYXR0cmlidXRlIGZyb20gdGhlIGhvc3QgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgdGhlbWU6IFN0cmluZyxcblxuICAgICAgX3NlbGVjdGVkSXRlbToge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIF9pdGVtczoge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c2VkSW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgIG9ic2VydmVyOiAnX2ZvY3VzZWRJbmRleENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICBfZm9jdXNlZEl0ZW06IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogJ19nZXRGb2N1c2VkSXRlbShfZm9jdXNlZEluZGV4KSdcbiAgICAgIH0sXG5cbiAgICAgIF9pdGVtTGFiZWxQYXRoOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICdsYWJlbCdcbiAgICAgIH0sXG5cbiAgICAgIF9pdGVtVmFsdWVQYXRoOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgIH0sXG5cbiAgICAgIF9zZWxlY3RvcjogT2JqZWN0LFxuXG4gICAgICBfaXRlbUlkUGF0aDogU3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbJ19zZWxlY3RvckNoYW5nZWQoX3NlbGVjdG9yKScsICdfbG9hZGluZ0NoYW5nZWQobG9hZGluZyknLCAnX29wZW5lZENoYW5nZWQob3BlbmVkLCBfaXRlbXMsIGxvYWRpbmcpJ107XG4gIH1cblxuICBfZmlyZVRvdWNoQWN0aW9uKHNvdXJjZUV2ZW50KSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndmFhZGluLW92ZXJsYXktdG91Y2gtYWN0aW9uJywge1xuICAgICAgZGV0YWlsOiB7c291cmNlRXZlbnQ6IHNvdXJjZUV2ZW50fVxuICAgIH0pKTtcbiAgfVxuXG4gIF9nZXRJdGVtcyhvcGVuZWQsIGl0ZW1zKSB7XG4gICAgcmV0dXJuIG9wZW5lZCA/IGl0ZW1zIDogW107XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChvcGVuZWQsIGl0ZW1zLCBsb2FkaW5nKSB7XG4gICAgaWYgKHRoaXMuJC5kcm9wZG93bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGUtdXBncmFkZScpKSB7XG4gICAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbml0RHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRG8gbm90IGF0dGFjaCBpZiBubyBpdGVtc1xuICAgIC8vIERvIG5vdCBkZXR0YWNoIGlmIG9wZW5lZCBidXQgdXNlciB0eXBlcyBhbiBpbnZhbGlkIHNlYXJjaFxuICAgIHRoaXMuJC5kcm9wZG93bi5vcGVuZWQgPSAhIShvcGVuZWQgJiYgKGxvYWRpbmcgfHwgdGhpcy4kLmRyb3Bkb3duLm9wZW5lZCB8fCBpdGVtcyAmJiBpdGVtcy5sZW5ndGgpKTtcbiAgfVxuXG4gIF9pbml0RHJvcGRvd24oKSB7XG4gICAgdGhpcy4kLmRyb3Bkb3duLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZS11cGdyYWRlJyk7XG5cbiAgICB0aGlzLl90ZW1wbGF0ZUNoYW5nZWQoKTtcbiAgICB0aGlzLl9sb2FkaW5nQ2hhbmdlZCh0aGlzLmxvYWRpbmcpO1xuXG4gICAgdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGUgPT4gdGhpcy5fZmlyZVRvdWNoQWN0aW9uKGUpKTtcbiAgICB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGUgPT4gdGhpcy5fZmlyZVRvdWNoQWN0aW9uKGUpKTtcblxuICAgIC8vIFByZXZlbnQgYmx1cnJpbmcgdGhlIGlucHV0IHdoZW4gY2xpY2tpbmcgaW5zaWRlIHRoZSBvdmVybGF5LlxuICAgIHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuXG4gICAgLy8gSUUxMTogd2hlbiBzY3JvbGxpbmcgd2l0aCBtb3VzZSwgdGhlIGZvY3VzIGdvZXMgdG8gdGhlIHNjcm9sbGVyLlxuICAgIC8vIFRoaXMgY2F1c2VzIHRoZSBvdmVybGF5IGNsb3NpbmcgZHVlIHRvIGRlZm9jdXNpbmcgdGhlIGlucHV0IGZpZWxkLlxuICAgIC8vIFByZXZlbnQgZm9jdXNpbmcgdGhlIHNjcm9sbGVyIGJ5IHNldHRpbmcgYHVuc2VsZWN0YWJsZT1cIm9uXCJgLlxuICAgIGlmICgvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgdGhpcy5fc2Nyb2xsZXIuc2V0QXR0cmlidXRlKCd1bnNlbGVjdGFibGUnLCAnb24nKTtcbiAgICB9XG4gIH1cblxuICBfdGVtcGxhdGVDaGFuZ2VkKGUpIHtcbiAgICBpZiAodGhpcy4kLmRyb3Bkb3duLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZS11cGdyYWRlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWxlY3RvciA9IHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjc2VsZWN0b3InKTtcbiAgICB0aGlzLl9zY3JvbGxlciA9IHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjc2Nyb2xsZXInKTtcbiAgfVxuXG4gIF9sb2FkaW5nQ2hhbmdlZChsb2FkaW5nKSB7XG4gICAgaWYgKHRoaXMuJC5kcm9wZG93bi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGUtdXBncmFkZScpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RvckNoYW5nZWQoc2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wYXRjaFdoZWVsT3ZlclNjcm9sbGluZygpO1xuICB9XG5cbiAgX3NldE92ZXJsYXlIZWlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCB8fCAhdGhpcy5wb3NpdGlvblRhcmdldCB8fCAhdGhpcy5fc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy5wb3NpdGlvblRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMuX3Njcm9sbGVyLnN0eWxlLm1heEhlaWdodCA9ICh3aW5kb3cuU2hhZHlDU1MgP1xuICAgICAgd2luZG93LlNoYWR5Q1NTLmdldENvbXB1dGVkU3R5bGVWYWx1ZSh0aGlzLCAnLS12YWFkaW4tY29tYm8tYm94LW92ZXJsYXktbWF4LWhlaWdodCcpIDpcbiAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcykuZ2V0UHJvcGVydHlWYWx1ZSgnLS12YWFkaW4tY29tYm8tYm94LW92ZXJsYXktbWF4LWhlaWdodCcpKSB8fCAnNjV2aCc7XG5cbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLl9tYXhPdmVybGF5SGVpZ2h0KHRhcmdldFJlY3QpO1xuXG4gICAgLy8gb3ZlcmxheSBtYXggaGVpZ2h0IGlzIHJlc3RyYWluZWQgYnkgdGhlICNzY3JvbGxlciBtYXggaGVpZ2h0IHdoaWNoIGlzIHNldCB0byA2NXZoIGluIENTUy5cbiAgICB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcblxuICAgIC8vIHdlIG5lZWQgdG8gc2V0IGhlaWdodCBmb3IgaXJvbi1saXN0IHRvIG1ha2UgaXRzIGBmaXJzdFZpc2libGVJbmRleGAgd29yayBjb3JyZWN0bHkuXG4gICAgdGhpcy5fc2VsZWN0b3Iuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgdGhpcy51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgfVxuXG4gIF9tYXhPdmVybGF5SGVpZ2h0KHRhcmdldFJlY3QpIHtcbiAgICBjb25zdCBtYXJnaW4gPSA4O1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IDExNjsgLy8gSGVpZ2h0IG9mIHR3byBpdGVtcyBpbiBjb21iby1ib3hcbiAgICBjb25zdCBib3R0b20gPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApO1xuXG4gICAgaWYgKHRoaXMuJC5kcm9wZG93bi5hbGlnbmVkQWJvdmUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCh0YXJnZXRSZWN0LnRvcCAtIG1hcmdpbiArIE1hdGgubWluKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCAwKSwgbWluSGVpZ2h0KSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChib3R0b20gLSB0YXJnZXRSZWN0LmJvdHRvbSAtIG1hcmdpbiwgbWluSGVpZ2h0KSArICdweCc7XG4gICAgfVxuICB9XG5cbiAgX2dldEZvY3VzZWRJdGVtKGZvY3VzZWRJbmRleCkge1xuICAgIGlmIChmb2N1c2VkSW5kZXggPj0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2ZvY3VzZWRJbmRleF07XG4gICAgfVxuICB9XG5cbiAgX2lzSXRlbVNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSXRlbSwgaXRlbUlkUGF0aCkge1xuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQ29tYm9Cb3hQbGFjZWhvbGRlcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaXRlbUlkUGF0aCAmJiBpdGVtICE9PSB1bmRlZmluZWQgJiYgc2VsZWN0ZWRJdGVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldChpdGVtSWRQYXRoLCBpdGVtKSA9PT0gdGhpcy5nZXQoaXRlbUlkUGF0aCwgc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGl0ZW0gPT09IHNlbGVjdGVkSXRlbTtcbiAgICB9XG4gIH1cblxuICBfb25JdGVtQ2xpY2soZSkge1xuICAgIGlmIChlLmRldGFpbCAmJiBlLmRldGFpbC5zb3VyY2VFdmVudCAmJiBlLmRldGFpbC5zb3VyY2VFdmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbihlLmRldGFpbC5zb3VyY2VFdmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2VsZWN0aW9uLWNoYW5nZWQnLCB7ZGV0YWlsOiB7aXRlbTogZS5tb2RlbC5pdGVtfX0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgaXRlbSB3aXRoIHRoZSBwcm92aWRlZCBsYWJlbC5cbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgaW5kZXhPZkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKHRoaXMuX2l0ZW1zICYmIGxhYmVsKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEl0ZW1MYWJlbCh0aGlzLl9pdGVtc1tpXSkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgIGxhYmVsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGRhdGFQcm92aWRlciBpcyB1c2VkLCBkaXNwYXRjaCBhIHJlcXVlc3QgZm9yIHRoZSBpdGVt4oCZcyBpbmRleCBpZlxuICAgKiB0aGUgaXRlbSBpcyBhIHBsYWNlaG9sZGVyIG9iamVjdC5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgX19yZXF1ZXN0SXRlbUJ5SW5kZXgoaXRlbSwgaW5kZXgpIHtcbiAgICBpZiAoKGl0ZW0gaW5zdGFuY2VvZiBDb21ib0JveFBsYWNlaG9sZGVyKSAmJiBpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpbmRleC1yZXF1ZXN0ZWQnLCB7ZGV0YWlsOiB7aW5kZXh9fSkpO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsYWJlbCBzdHJpbmcgZm9yIHRoZSBpdGVtIGJhc2VkIG9uIHRoZSBgX2l0ZW1MYWJlbFBhdGhgLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRJdGVtTGFiZWwoaXRlbSwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGl0ZW1MYWJlbFBhdGggPSBpdGVtTGFiZWxQYXRoIHx8IHRoaXMuX2l0ZW1MYWJlbFBhdGg7XG4gICAgbGV0IGxhYmVsID0gaXRlbSAmJiBpdGVtTGFiZWxQYXRoID8gdGhpcy5nZXQoaXRlbUxhYmVsUGF0aCwgaXRlbSkgOiB1bmRlZmluZWQ7XG4gICAgaWYgKGxhYmVsID09PSB1bmRlZmluZWQgfHwgbGFiZWwgPT09IG51bGwpIHtcbiAgICAgIGxhYmVsID0gaXRlbSA/IGl0ZW0udG9TdHJpbmcoKSA6ICcnO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBfaXNJdGVtRm9jdXNlZChmb2N1c2VkSW5kZXgsIGl0ZW1JbmRleCkge1xuICAgIHJldHVybiBmb2N1c2VkSW5kZXggPT0gaXRlbUluZGV4O1xuICB9XG5cbiAgX2dldEFyaWFTZWxlY3RlZChmb2N1c2VkSW5kZXgsIGl0ZW1JbmRleCkge1xuICAgIHJldHVybiB0aGlzLl9pc0l0ZW1Gb2N1c2VkKGZvY3VzZWRJbmRleCwgaXRlbUluZGV4KS50b1N0cmluZygpO1xuICB9XG5cbiAgX2dldEFyaWFSb2xlKGl0ZW1JbmRleCkge1xuICAgIHJldHVybiBpdGVtSW5kZXggIT09IHVuZGVmaW5lZCA/ICdvcHRpb24nIDogZmFsc2U7XG4gIH1cblxuICBfZm9jdXNlZEluZGV4Q2hhbmdlZChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLl9zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgX3Njcm9sbEludG9WaWV3KGluZGV4KSB7XG4gICAgY29uc3QgdmlzaWJsZUl0ZW1zQ291bnQgPSB0aGlzLl92aXNpYmxlSXRlbXNDb3VudCgpO1xuICAgIGlmICh2aXNpYmxlSXRlbXNDb3VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTY3JvbGxlciBpcyBub3QgdmlzaWJsZS4gTW92aW5nIGlzIHVubmVjZXNzYXJ5LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0YXJnZXRJbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKGluZGV4ID4gdGhpcy5fc2VsZWN0b3IubGFzdFZpc2libGVJbmRleCAtIDEpIHtcbiAgICAgIC8vIEluZGV4IGlzIGJlbG93IHRoZSBib3R0b20sIHNjcm9sbGluZyBkb3duLiBNYWtlIHRoZSBpdGVtIGFwcGVhciBhdCB0aGUgYm90dG9tLlxuICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleCAtIHZpc2libGVJdGVtc0NvdW50ICsgMTtcbiAgICB9IGVsc2UgaWYgKGluZGV4ID4gdGhpcy5fc2VsZWN0b3IuZmlyc3RWaXNpYmxlSW5kZXgpIHtcbiAgICAgIC8vIFRoZSBpdGVtIGlzIGFscmVhZHkgdmlzaWJsZSwgc2Nyb2xsaW5nIGlzIHVubmVjZXNzYXJ5IHBlciBzZS4gQnV0IHdlIG5lZWQgdG8gdHJpZ2dlciBpcm9uLWxpc3QgdG8gc2V0XG4gICAgICAvLyB0aGUgY29ycmVjdCBzY3JvbGxUb3Agb24gdGhlIHNjcm9sbFRhcmdldC4gU2Nyb2xsaW5nIHRvIGZpcnN0VmlzaWJsZUluZGV4LlxuICAgICAgdGFyZ2V0SW5kZXggPSB0aGlzLl9zZWxlY3Rvci5maXJzdFZpc2libGVJbmRleDtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0b3Iuc2Nyb2xsVG9JbmRleChNYXRoLm1heCgwLCB0YXJnZXRJbmRleCkpO1xuXG4gICAgLy8gU29tZXRpbWVzIHRoZSBpdGVtIGlzIHBhcnRseSBiZWxvdyB0aGUgYm90dG9tIGVkZ2UsIGRldGVjdCBhbmQgYWRqdXN0LlxuICAgIGNvbnN0IHBpZHggPSB0aGlzLl9zZWxlY3Rvci5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCksXG4gICAgICBwaHlzaWNhbEl0ZW0gPSB0aGlzLl9zZWxlY3Rvci5fcGh5c2ljYWxJdGVtc1twaWR4XTtcbiAgICBpZiAoIXBoeXNpY2FsSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwaHlzaWNhbEl0ZW1SZWN0ID0gcGh5c2ljYWxJdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgc2Nyb2xsZXJSZWN0ID0gdGhpcy5fc2Nyb2xsZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBzY3JvbGxUb3BBZGp1c3QgPSBwaHlzaWNhbEl0ZW1SZWN0LmJvdHRvbSAtIHNjcm9sbGVyUmVjdC5ib3R0b20gKyB0aGlzLl92aWV3cG9ydFRvdGFsUGFkZGluZ0JvdHRvbTtcbiAgICBpZiAoc2Nyb2xsVG9wQWRqdXN0ID4gMCkge1xuICAgICAgdGhpcy5fc2Nyb2xsZXIuc2Nyb2xsVG9wICs9IHNjcm9sbFRvcEFkanVzdDtcbiAgICB9XG4gIH1cblxuICBlbnN1cmVJdGVtc1JlbmRlcmVkKCkge1xuICAgIHRoaXMuX3NlbGVjdG9yLl9yZW5kZXIoKTtcbiAgfVxuXG4gIGFkanVzdFNjcm9sbFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLl9pdGVtcykge1xuICAgICAgdGhpcy5fc2Nyb2xsSW50b1ZpZXcodGhpcy5fZm9jdXNlZEluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2Ugd2FudCB0byBwcmV2ZW50IHRoZSBraW5ldGljIHNjcm9sbGluZyBlbmVyZ3kgZnJvbSBiZWluZyB0cmFuc2ZlcnJlZCBmcm9tIHRoZSBvdmVybGF5IGNvbnRlbnRzIG92ZXIgdG8gdGhlIHBhcmVudC5cbiAgICogRnVydGhlciBpbXByb3ZlbWVudCBpZGVhczogYWZ0ZXIgdGhlIGNvbnRlbnRzIGhhdmUgYmVlbiBzY3JvbGxlZCB0byB0aGUgdG9wIG9yIGJvdHRvbSBhbmQgc2Nyb2xsaW5nIGhhcyBzdG9wcGVkLCBpdCBjb3VsZCBhbGxvd1xuICAgKiBzY3JvbGxpbmcgdGhlIHBhcmVudCBzaW1pbGFybHkgdG8gdG91Y2ggc2Nyb2xsaW5nLlxuICAgKi9cbiAgX3BhdGNoV2hlZWxPdmVyU2Nyb2xsaW5nKCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5fc2VsZWN0b3I7XG4gICAgc2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBlID0+IHtcbiAgICAgIGNvbnN0IHNjcm9sbGVyID0gc2VsZWN0b3IuX3Njcm9sbGVyIHx8IHNlbGVjdG9yLnNjcm9sbFRhcmdldDtcbiAgICAgIGNvbnN0IHNjcm9sbGVkVG9Ub3AgPSBzY3JvbGxlci5zY3JvbGxUb3AgPT09IDA7XG4gICAgICBjb25zdCBzY3JvbGxlZFRvQm90dG9tID0gKHNjcm9sbGVyLnNjcm9sbEhlaWdodCAtIHNjcm9sbGVyLnNjcm9sbFRvcCAtIHNjcm9sbGVyLmNsaWVudEhlaWdodCkgPD0gMTtcblxuICAgICAgaWYgKHNjcm9sbGVkVG9Ub3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWRUb0JvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCkge1xuICAgIHRoaXMuX2NhY2hlZFZpZXdwb3J0VG90YWxQYWRkaW5nQm90dG9tID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NlbGVjdG9yLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICB9XG5cbiAgZ2V0IF92aWV3cG9ydFRvdGFsUGFkZGluZ0JvdHRvbSgpIHtcbiAgICBpZiAodGhpcy5fY2FjaGVkVmlld3BvcnRUb3RhbFBhZGRpbmdCb3R0b20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaXRlbXNTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuX3NlbGVjdG9yLiQuaXRlbXMpO1xuICAgICAgdGhpcy5fY2FjaGVkVmlld3BvcnRUb3RhbFBhZGRpbmdCb3R0b20gPSBbXG4gICAgICAgIGl0ZW1zU3R5bGUucGFkZGluZ0JvdHRvbSxcbiAgICAgICAgaXRlbXNTdHlsZS5ib3JkZXJCb3R0b21XaWR0aFxuICAgICAgXS5tYXAodiA9PiB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2LCAxMCk7XG4gICAgICB9KS5yZWR1Y2UoKHN1bSwgdikgPT4ge1xuICAgICAgICByZXR1cm4gc3VtICsgdjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jYWNoZWRWaWV3cG9ydFRvdGFsUGFkZGluZ0JvdHRvbTtcbiAgfVxuXG4gIF92aXNpYmxlSXRlbXNDb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuX3NlbGVjdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIGl0ZW1zIGFyZSByZW5kZXJlZFxuICAgIHRoaXMuX3NlbGVjdG9yLmZsdXNoRGVib3VuY2VyKCdfZGVib3VuY2VUZW1wbGF0ZScpO1xuICAgIC8vIEVuc3VyZSBpdGVtcyBhcmUgcG9zaXRpb25lZFxuICAgIHRoaXMuX3NlbGVjdG9yLnNjcm9sbFRvSW5kZXgodGhpcy5fc2VsZWN0b3IuZmlyc3RWaXNpYmxlSW5kZXgpO1xuICAgIC8vIEVuc3VyZSB2aWV3cG9ydCBib3VuZGFyaWVzIGFyZSB1cC10by1kYXRlXG4gICAgdGhpcy51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0b3IubGFzdFZpc2libGVJbmRleCAtIHRoaXMuX3NlbGVjdG9yLmZpcnN0VmlzaWJsZUluZGV4ICsgMTtcbiAgfVxuXG4gIF9zZWxlY3RJdGVtKGl0ZW0pIHtcbiAgICBpdGVtID0gKHR5cGVvZiBpdGVtID09PSAnbnVtYmVyJykgPyB0aGlzLl9pdGVtc1tpdGVtXSA6IGl0ZW07XG4gICAgaWYgKHRoaXMuX3NlbGVjdG9yLnNlbGVjdGVkSXRlbSAhPT0gaXRlbSkge1xuICAgICAgdGhpcy5fc2VsZWN0b3Iuc2VsZWN0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGlmIChlLmNhbmNlbGFibGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgX2hpZGRlbihpdGVtc0NoYW5nZSkge1xuICAgIHJldHVybiAhdGhpcy5sb2FkaW5nICYmICghdGhpcy5faXRlbXMgfHwgIXRoaXMuX2l0ZW1zLmxlbmd0aCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94RHJvcGRvd25XcmFwcGVyRWxlbWVudC5pcywgQ29tYm9Cb3hEcm9wZG93bldyYXBwZXJFbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBEaXNhYmxlVXBncmFkZU1peGluIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2Rpc2FibGUtdXBncmFkZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBPdmVybGF5RWxlbWVudCB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvc3JjL3ZhYWRpbi1vdmVybGF5LmpzJztcbmltcG9ydCB7IElyb25SZXNpemFibGVCZWhhdmlvciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgeyBtaXhpbkJlaGF2aW9ycyB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzcy5qcyc7XG4vKipcbiAqIFRoZSBvdmVybGF5IGVsZW1lbnQuXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBTZWUgW2A8dmFhZGluLW92ZXJsYXk+YCBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi1vdmVybGF5L2Jsb2IvbWFzdGVyL3NyYy92YWFkaW4tb3ZlcmxheS5odG1sKVxuICogZm9yIGA8dmFhZGluLWNvbWJvLWJveC1vdmVybGF5PmAgcGFydHMuXG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ29tYm9Cb3hPdmVybGF5RWxlbWVudCBleHRlbmRzIE92ZXJsYXlFbGVtZW50IHtcbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1jb21iby1ib3gtb3ZlcmxheSc7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCAnbG9hZGVyJyk7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFsnW3BhcnR+PVwiY29udGVudFwiXSddKTtcbiAgICBjb250ZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxvYWRlciwgY29udGVudCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94T3ZlcmxheUVsZW1lbnQuaXMsIENvbWJvQm94T3ZlcmxheUVsZW1lbnQpO1xuXG4vKipcbiAqIEVsZW1lbnQgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENvbWJvQm94RHJvcGRvd25FbGVtZW50IGV4dGVuZHMgRGlzYWJsZVVwZ3JhZGVNaXhpbihcbiAgbWl4aW5CZWhhdmlvcnMoSXJvblJlc2l6YWJsZUJlaGF2aW9yLCBQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+ICNvdmVybGF5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDx2YWFkaW4tY29tYm8tYm94LW92ZXJsYXkgaWQ9XCJvdmVybGF5XCIgaGlkZGVuXFwkPVwiW1toaWRkZW5dXVwiIG9wZW5lZD1cIltbb3BlbmVkXV1cIiB0ZW1wbGF0ZT1cInt7dGVtcGxhdGV9fVwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IHN0cmV0Y2g7IG1hcmdpbjogMDtcIiB0aGVtZVxcJD1cIltbdGhlbWVdXVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdmFhZGluLWNvbWJvLWJveC1vdmVybGF5PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWxlbWVudCB0byBwb3NpdGlvbi9hbGlnbiB0aGUgZHJvcGRvd24gYnkuXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uVGFyZ2V0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBgdHJ1ZWAsIG92ZXJsYXkgaXMgYWxpZ25lZCBhYm92ZSB0aGUgYHBvc2l0aW9uVGFyZ2V0YFxuICAgICAgICovXG4gICAgICBhbGlnbmVkQWJvdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFVzZWQgdG8gcHJvcGFnYXRlIHRoZSBgdGhlbWVgIGF0dHJpYnV0ZSBmcm9tIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHRoZW1lOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ib3VuZFNldFBvc2l0aW9uID0gdGhpcy5fc2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kU2V0UG9zaXRpb24pO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIFByZXZlbnRpbmcgdGhlIGRlZmF1bHQgbW9kYWwgYmVoYXZpb3VyIG9mIHRoZSBvdmVybGF5IG9uIGlucHV0IGNsaWNraW5nXG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndmFhZGluLW92ZXJsYXktb3V0c2lkZS1jbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lyb24tcmVzaXplJywgdGhpcy5fYm91bmRTZXRQb3NpdGlvbik7XG5cbiAgICAvLyBNYWtpbmcgc3VyZSB0aGUgb3ZlcmxheSBpcyBjbG9zZWQgYW5kIHJlbW92ZWQgZnJvbSBET00gYWZ0ZXIgZGV0YWNoaW5nIHRoZSBkcm9wZG93bi5cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgbm90aWZ5UmVzaXplKCkge1xuICAgIHN1cGVyLm5vdGlmeVJlc2l6ZSgpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb25UYXJnZXQgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKCk7XG4gICAgICAvLyBTY2hlZHVsZSBhbm90aGVyIHBvc2l0aW9uIHVwZGF0ZSAodG8gY292ZXIgdmlydHVhbCBrZXlib2FyZCBvcGVuaW5nIGZvciBleGFtcGxlKVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3NldFBvc2l0aW9uLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCBhZnRlciB0aGUgYHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd25gIG9wZW5zLlxuICAgKlxuICAgKiBAZXZlbnQgdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1vcGVuZWRcbiAgICovXG4gIC8qKlxuICAgKiBGaXJlZCBhZnRlciB0aGUgYHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd25gIGNsb3Nlcy5cbiAgICpcbiAgICogQGV2ZW50IHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tY2xvc2VkXG4gICAqL1xuXG4gIF9vcGVuZWRDaGFuZ2VkKG9wZW5lZCwgb2xkVmFsdWUpIHtcbiAgICBpZiAoISFvcGVuZWQgPT09ICEhb2xkVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9IHRoaXMuX2lzUG9zaXRpb25GaXhlZCh0aGlzLnBvc2l0aW9uVGFyZ2V0KSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5fc2V0UG9zaXRpb24oKTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2V0UG9zaXRpb24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tb3BlbmVkJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRTZXRQb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIsIHRydWUpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1jbG9zZWQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgfVxuICB9XG5cblxuICAvLyBXZSBuZWVkIHRvIGxpc3RlbiBvbiAnY2xpY2snIGV2ZW50IGFuZCBjYXB0dXJlIGl0IGFuZCBjbG9zZSB0aGUgb3ZlcmxheSBiZWZvcmVcbiAgLy8gcHJvcGFnYXRpbmcgdGhlIGV2ZW50IHRvIHRoZSBsaXN0ZW5lciBpbiB0aGUgYnV0dG9uLiBPdGhlcndpc2UsIGlmIHRoZSBjbGlja2VkIGJ1dHRvbiB3b3VsZCBjYWxsXG4gIC8vIG9wZW4oKSwgdGhpcyB3b3VsZCBoYXBwZW46IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Wjg2Vl9JQ1VDRDRcbiAgX291dHNpZGVDbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgaWYgKGV2ZW50UGF0aC5pbmRleE9mKHRoaXMucG9zaXRpb25UYXJnZXQpIDwgMCAmJiBldmVudFBhdGguaW5kZXhPZih0aGlzLiQub3ZlcmxheSkgPCAwKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9pc1Bvc2l0aW9uRml4ZWQoZWxlbWVudCkge1xuICAgIGNvbnN0IG9mZnNldFBhcmVudCA9IHRoaXMuX2dldE9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fFxuICAgICAgKG9mZnNldFBhcmVudCAmJiB0aGlzLl9pc1Bvc2l0aW9uRml4ZWQob2Zmc2V0UGFyZW50KSk7XG4gIH1cblxuICBfZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmFzc2lnbmVkU2xvdC5wYXJlbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgICByZXR1cm4gcGFyZW50Lmhvc3Q7IC8vIHBhcmVudCBpcyAjc2hhZG93Um9vdFxuICAgIH1cbiAgfVxuXG4gIF92ZXJ0aWNhbE9mZnNldChvdmVybGF5UmVjdCwgdGFyZ2V0UmVjdCkge1xuICAgIHJldHVybiB0aGlzLmFsaWduZWRBYm92ZSA/IC1vdmVybGF5UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIF9zaG91bGRBbGlnbkFib3ZlKHRhcmdldFJlY3QpIHtcbiAgICBjb25zdCBzcGFjZUJlbG93ID0gKFxuICAgICAgd2luZG93LmlubmVySGVpZ2h0IC1cbiAgICAgIHRhcmdldFJlY3QuYm90dG9tIC1cbiAgICAgIE1hdGgubWluKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCAwKVxuICAgICkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICByZXR1cm4gc3BhY2VCZWxvdyA8IDAuMzA7XG4gIH1cblxuICBfc2V0UG9zaXRpb24oZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0KSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCA9PT0gZG9jdW1lbnQgPyBkb2N1bWVudC5ib2R5IDogZS50YXJnZXQ7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLiQub3ZlcmxheS5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKCEodGFyZ2V0LmNvbnRhaW5zKHRoaXMuJC5vdmVybGF5KSB8fCB0YXJnZXQuY29udGFpbnModGhpcy5wb3NpdGlvblRhcmdldCkpIHx8IHBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMucG9zaXRpb25UYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5hbGlnbmVkQWJvdmUgPSB0aGlzLl9zaG91bGRBbGlnbkFib3ZlKHRhcmdldFJlY3QpO1xuXG4gICAgY29uc3Qgb3ZlcmxheVJlY3QgPSB0aGlzLiQub3ZlcmxheS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gdGFyZ2V0UmVjdC5sZWZ0IC0gb3ZlcmxheVJlY3QubGVmdCArICh0aGlzLl90cmFuc2xhdGVYIHx8IDApO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVkgPSB0YXJnZXRSZWN0LnRvcCAtIG92ZXJsYXlSZWN0LnRvcCArICh0aGlzLl90cmFuc2xhdGVZIHx8IDApICtcbiAgICAgIHRoaXMuX3ZlcnRpY2FsT2Zmc2V0KG92ZXJsYXlSZWN0LCB0YXJnZXRSZWN0KTtcblxuICAgIGNvbnN0IF9kZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gTWF0aC5yb3VuZCh0aGlzLl90cmFuc2xhdGVYICogX2RldmljZVBpeGVsUmF0aW8pIC8gX2RldmljZVBpeGVsUmF0aW87XG4gICAgdGhpcy5fdHJhbnNsYXRlWSA9IE1hdGgucm91bmQodGhpcy5fdHJhbnNsYXRlWSAqIF9kZXZpY2VQaXhlbFJhdGlvKSAvIF9kZXZpY2VQaXhlbFJhdGlvO1xuICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RoaXMuX3RyYW5zbGF0ZVh9cHgsICR7dGhpcy5fdHJhbnNsYXRlWX1weCwgMClgO1xuXG4gICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUud2lkdGggPSB0aGlzLnBvc2l0aW9uVGFyZ2V0LmNsaWVudFdpZHRoICsgJ3B4JztcbiAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IHRoaXMuYWxpZ25lZEFib3ZlID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LXN0YXJ0JztcblxuICAgIC8vIFRPRE86IGZpcmUgb25seSB3aGVuIHBvc2l0aW9uIGFjdHVhbGx5IGNoYW5nZXMgY2hhbmdlc1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3Bvc2l0aW9uLWNoYW5nZWQnKSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94RHJvcGRvd25FbGVtZW50LmlzLCBDb21ib0JveERyb3Bkb3duRWxlbWVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBlbGVtZW50IHVzZWQgZm9yIGl0ZW1zIGluIHRoZSB2YWFkaW4tY29tYm8tYm94LlxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb25cbiAqIC0tLXwtLS1cbiAqIGBjb250ZW50YCB8IFRoZSBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIGl0ZW0gbGFiZWwgb3IgdGVtcGxhdGUgY29udGVudFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc3RhdGUgYXR0cmlidXRlcyBhcmUgZXhwb3NlZCBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgICAgfCBEZXNjcmlwdGlvbiB8IFBhcnQgbmFtZVxuICogLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLVxuICogYHNlbGVjdGVkYCB8IFNldCB3aGVuIHRoZSBpdGVtIGlzIHNlbGVjdGVkIHwgOmhvc3RcbiAqIGBmb2N1c2VkYCB8IFNldCB3aGVuIHRoZSBpdGVtIGlzIGZvY3VzZWQgfCA6aG9zdFxuICpcbiAqIFNlZSBbVGhlbWFibGVNaXhpbiDigJMgaG93IHRvIGFwcGx5IHN0eWxlcyBmb3Igc2hhZG93IHBhcnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpKVxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ29tYm9Cb3hJdGVtRWxlbWVudCBleHRlbmRzIFRoZW1hYmxlTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgcGFydD1cImNvbnRlbnRcIiBpZD1cImNvbnRlbnRcIj48L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWNvbWJvLWJveC1pdGVtJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICAgICAqL1xuICAgICAgaW5kZXg6IE51bWJlcixcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgaXRlbSB0byByZW5kZXJcbiAgICAgICAqIEB0eXBlIHsoU3RyaW5nfE9iamVjdCl9XG4gICAgICAgKi9cbiAgICAgIGl0ZW06IE9iamVjdCxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdGV4dCBsYWJlbCBjb3JyZXNwb25kaW5nIHRvIHRoZSBpdGVtXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSB3aGVuIGl0ZW0gaXMgc2VsZWN0ZWRcbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVHJ1ZSB3aGVuIGl0ZW0gaXMgZm9jdXNlZFxuICAgICAgICovXG4gICAgICBmb2N1c2VkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSB0ZW1wbGF0ZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBpdGVtXG4gICAgICAgKi9cbiAgICAgIF9pdGVtVGVtcGxhdGVJbnN0YW5jZTogT2JqZWN0LFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIHRoZSBjb250ZW50IG9mIHRoZSBgPHZhYWRpbi1jb21iby1ib3gtaXRlbT5gIHByb3BhZ2F0ZWQgZnJvbSB0aGUgY29tYm8gYm94IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHJlbmRlcmVyOiBGdW5jdGlvbixcblxuICAgICAgLyoqXG4gICAgICAgKiBTYXZlZCBpbnN0YW5jZSBvZiBhIGN1c3RvbSByZW5kZXJlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgX29sZFJlbmRlcmVyOiBGdW5jdGlvblxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ19yZW5kZXJlck9ySXRlbUNoYW5nZWQocmVuZGVyZXIsIGluZGV4LCBpdGVtLiopJyxcbiAgICAgICdfdXBkYXRlTGFiZWwobGFiZWwsIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSknLFxuICAgICAgJ191cGRhdGVUZW1wbGF0ZUluc3RhbmNlVmFyaWFibGUoXCJpbmRleFwiLCBpbmRleCwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKScsXG4gICAgICAnX3VwZGF0ZVRlbXBsYXRlSW5zdGFuY2VWYXJpYWJsZShcIml0ZW1cIiwgaXRlbSwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKScsXG4gICAgICAnX3VwZGF0ZVRlbXBsYXRlSW5zdGFuY2VWYXJpYWJsZShcInNlbGVjdGVkXCIsIHNlbGVjdGVkLCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpJyxcbiAgICAgICdfdXBkYXRlVGVtcGxhdGVJbnN0YW5jZVZhcmlhYmxlKFwiZm9jdXNlZFwiLCBmb2N1c2VkLCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpJ1xuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICghdGhpcy5faXRlbVRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICAgIC8vIDIuMCBoYXMgX19kYXRhSG9zdC4gTWlnaHQgd2FudCB0byBjb25zaWRlciBhc3NpZ25pbmcgY29tYm9ib3ggcmVmZXJlbmNlIGRpcmVjdGx5IHRvIGl0ZW0uXG4gICAgICBjb25zdCBvdmVybGF5ID0gdGhpcy5nZXRSb290Tm9kZSgpLmhvc3QuZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgICAgY29uc3QgZHJvcGRvd24gPSBvdmVybGF5Ll9fZGF0YUhvc3Q7XG4gICAgICBjb25zdCBjb21ib0JveE92ZXJsYXkgPSBkcm9wZG93bi5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgICB0aGlzLl9jb21ib0JveCA9IGNvbWJvQm94T3ZlcmxheS5nZXRSb290Tm9kZSgpLmhvc3Q7XG4gICAgICB0aGlzLl9jb21ib0JveC5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICAgIGlmICh0aGlzLl9jb21ib0JveC5fVGVtcGxhdGVDbGFzcykge1xuICAgICAgICB0aGlzLl9pdGVtVGVtcGxhdGVJbnN0YW5jZSA9IG5ldyB0aGlzLl9jb21ib0JveC5fVGVtcGxhdGVDbGFzcyh7fSk7XG4gICAgICAgIHRoaXMuJC5jb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHRoaXMuJC5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuX2l0ZW1UZW1wbGF0ZUluc3RhbmNlLnJvb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbW9kZWwgPSB7XG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbVxuICAgIH07XG5cbiAgICB0aGlzLnJlbmRlcmVyKHRoaXMuJC5jb250ZW50LCB0aGlzLl9jb21ib0JveCwgbW9kZWwpO1xuICB9XG5cbiAgX3JlbmRlcmVyT3JJdGVtQ2hhbmdlZChyZW5kZXJlciwgaW5kZXgsIGl0ZW0pIHtcbiAgICBpZiAoaXRlbSA9PT0gdW5kZWZpbmVkIHx8IGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb2xkUmVuZGVyZXIgIT09IHJlbmRlcmVyKSB7XG4gICAgICB0aGlzLiQuY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHRoaXMuX29sZFJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBfdXBkYXRlTGFiZWwobGFiZWwsIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgIGlmIChfaXRlbVRlbXBsYXRlSW5zdGFuY2UgPT09IHVuZGVmaW5lZCAmJiB0aGlzLiQuY29udGVudCAmJiAhdGhpcy5yZW5kZXJlcikge1xuICAgICAgLy8gT25seSBzZXQgbGFiZWwgdG8gdGV4dENvbnRlbnQgbm8gdGVtcGxhdGVcbiAgICAgIHRoaXMuJC5jb250ZW50LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVRlbXBsYXRlSW5zdGFuY2VWYXJpYWJsZSh2YXJpYWJsZSwgdmFsdWUsIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSkge1xuICAgIGlmICh2YXJpYWJsZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlW3ZhcmlhYmxlXSA9IHZhbHVlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShDb21ib0JveEl0ZW1FbGVtZW50LmlzLCBDb21ib0JveEl0ZW1FbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBUaGVtYWJsZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcbmltcG9ydCB7IFRoZW1lUHJvcGVydHlNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtZS1wcm9wZXJ0eS1taXhpbi5qcyc7XG5pbXBvcnQgeyBDb21ib0JveE1peGluIH0gZnJvbSAnLi92YWFkaW4tY29tYm8tYm94LW1peGluLmpzJztcbmltcG9ydCB7IENvbWJvQm94RGF0YVByb3ZpZGVyTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi1jb21iby1ib3gtZGF0YS1wcm92aWRlci1taXhpbi5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi13cmFwcGVyLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgeyBkYXNoVG9DYW1lbENhc2UgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9jYXNlLW1hcC5qcyc7XG4vKipcbiAqIGA8dmFhZGluLWNvbWJvLWJveC1saWdodD5gIGlzIGEgY3VzdG9taXphYmxlIHZlcnNpb24gb2YgdGhlIGA8dmFhZGluLWNvbWJvLWJveD5gIHByb3ZpZGluZ1xuICogb25seSB0aGUgZHJvcGRvd24gZnVuY3Rpb25hbGl0eSBhbmQgbGVhdmluZyB0aGUgaW5wdXQgZmllbGQgZGVmaW5pdGlvbiB0byB0aGUgdXNlci5cbiAqXG4gKiBUaGUgZWxlbWVudCBoYXMgdGhlIHNhbWUgQVBJIGFzIGA8dmFhZGluLWNvbWJvLWJveD5gLlxuICpcbiAqIFRvIGNyZWF0ZSBhIGN1c3RvbSBpbnB1dCBmaWVsZCwgeW91IG5lZWQgdG8gYWRkIGEgY2hpbGQgZWxlbWVudCB3aGljaCBoYXMgYSB0d28td2F5XG4gKiBkYXRhLWJpbmRhYmxlIHByb3BlcnR5IHJlcHJlc2VudGluZyB0aGUgaW5wdXQgdmFsdWUuIFRoZSBwcm9wZXJ0eSBuYW1lIGlzIGV4cGVjdGVkXG4gKiB0byBiZSBgdmFsdWVgIGJ5IGRlZmF1bHQuIFNlZSB0aGUgZXhhbXBsZSBiZWxvdyBmb3IgYSBzaW1wbGVzdCBwb3NzaWJsZSBleGFtcGxlXG4gKiB1c2luZyBhIGA8dmFhZGluLXRleHQtZmllbGQ+YCBlbGVtZW50LlxuICpcbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICogICA8dmFhZGluLXRleHQtZmllbGQ+XG4gKiAgIDwvdmFhZGluLXRleHQtZmllbGQ+XG4gKiA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gKiBgYGBcbiAqXG4gKiBJZiB5b3UgYXJlIHVzaW5nIG90aGVyIGN1c3RvbSBpbnB1dCBmaWVsZHMgbGlrZSBgPGlyb24taW5wdXQ+YCwgeW91XG4gKiBuZWVkIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgYmluZGFibGUgcHJvcGVydHkgd2l0aCB0aGUgYGF0dHJGb3JWYWx1ZWAgYXR0cmlidXRlLlxuICpcbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0IGF0dHItZm9yLXZhbHVlPVwiYmluZC12YWx1ZVwiPlxuICogICA8aXJvbi1pbnB1dD5cbiAqICAgICA8aW5wdXQ+XG4gKiAgIDwvaXJvbi1pbnB1dD5cbiAqIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAqIGBgYFxuICpcbiAqIEluIHRoZSBuZXh0IGV4YW1wbGUgeW91IGNhbiBzZWUgaG93IHRvIGNyZWF0ZSBhIGN1c3RvbSBpbnB1dCBmaWVsZCBiYXNlZFxuICogb24gYSBgPHBhcGVyLWlucHV0PmAgZGVjb3JhdGVkIHdpdGggYSBjdXN0b20gYDxpcm9uLWljb24+YCBhbmRcbiAqIHR3byBgPHBhcGVyLWJ1dHRvbj5gcyB0byBhY3QgYXMgdGhlIGNsZWFyIGFuZCB0b2dnbGUgY29udHJvbHMuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gKiAgIDxwYXBlci1pbnB1dCBsYWJlbD1cIkVsZW1lbnRzXCIgY2xhc3M9XCJpbnB1dFwiPlxuICogICAgIDxpcm9uLWljb24gaWNvbj1cInRvbGxcIiBzbG90PVwicHJlZml4XCI+PC9pcm9uLWljb24+XG4gKiAgICAgPHBhcGVyLWJ1dHRvbiBzbG90PVwic3VmZml4XCIgY2xhc3M9XCJjbGVhci1idXR0b25cIj5DbGVhcjwvcGFwZXItYnV0dG9uPlxuICogICAgIDxwYXBlci1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGNsYXNzPVwidG9nZ2xlLWJ1dHRvblwiPlRvZ2dsZTwvcGFwZXItYnV0dG9uPlxuICogICA8L3BhcGVyLWlucHV0PlxuICogPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICogYGBgXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAbWl4ZXMgVmFhZGluLkNvbWJvQm94RGF0YVByb3ZpZGVyTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29tYm9Cb3hNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1lUHJvcGVydHlNaXhpblxuICovXG5jbGFzcyBDb21ib0JveExpZ2h0RWxlbWVudCBleHRlbmRzXG4gIFRoZW1lUHJvcGVydHlNaXhpbihcbiAgICBUaGVtYWJsZU1peGluKFxuICAgICAgQ29tYm9Cb3hEYXRhUHJvdmlkZXJNaXhpbihcbiAgICAgICAgQ29tYm9Cb3hNaXhpbihQb2x5bWVyRWxlbWVudCkpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzbG90Pjwvc2xvdD5cblxuICAgIDx2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXIgaWQ9XCJvdmVybGF5XCIgb3BlbmVkPVwiW1tvcGVuZWRdXVwiIHBvc2l0aW9uLXRhcmdldD1cIltbaW5wdXRFbGVtZW50XV1cIiByZW5kZXJlcj1cIltbcmVuZGVyZXJdXVwiIF9mb2N1c2VkLWluZGV4PVwiW1tfZm9jdXNlZEluZGV4XV1cIiBfaXRlbS1pZC1wYXRoPVwiW1tpdGVtSWRQYXRoXV1cIiBfaXRlbS1sYWJlbC1wYXRoPVwiW1tpdGVtTGFiZWxQYXRoXV1cIiBsb2FkaW5nPVwiW1tsb2FkaW5nXV1cIiB0aGVtZT1cIltbdGhlbWVdXVwiPlxuICAgIDwvdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi13cmFwcGVyPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LWxpZ2h0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBOYW1lIG9mIHRoZSB0d28td2F5IGRhdGEtYmluZGFibGUgcHJvcGVydHkgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICogdmFsdWUgb2YgdGhlIGN1c3RvbSBpbnB1dCBmaWVsZC5cbiAgICAgICAqL1xuICAgICAgYXR0ckZvclZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgIH0sXG5cbiAgICAgIGlucHV0RWxlbWVudDoge1xuICAgICAgICB0eXBlOiBFbGVtZW50LFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2JvdW5kSW5wdXRWYWx1ZUNoYW5nZWQgPSB0aGlzLl9pbnB1dFZhbHVlQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl90b2dnbGVFbGVtZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWJ1dHRvbicpO1xuICAgIHRoaXMuX2NsZWFyRWxlbWVudCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuICB9XG5cbiAgZ2V0IGZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um9vdE5vZGUoKS5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmlucHV0RWxlbWVudDtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgY29uc3QgY3NzU2VsZWN0b3IgPSAndmFhZGluLXRleHQtZmllbGQsaXJvbi1pbnB1dCxwYXBlci1pbnB1dCwucGFwZXItaW5wdXQtaW5wdXQsLmlucHV0JztcbiAgICB0aGlzLl9zZXRJbnB1dEVsZW1lbnQodGhpcy5xdWVyeVNlbGVjdG9yKGNzc1NlbGVjdG9yKSk7XG4gICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZSgpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fYm91bmRJbnB1dFZhbHVlQ2hhbmdlZCk7XG4gICAgdGhpcy5fcHJldmVudElucHV0Qmx1cigpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kSW5wdXRWYWx1ZUNoYW5nZWQpO1xuICAgIHRoaXMuX3Jlc3RvcmVJbnB1dEJsdXIoKTtcbiAgfVxuXG4gIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICByZXR1cm4gZGFzaFRvQ2FtZWxDYXNlKHRoaXMuYXR0ckZvclZhbHVlKTtcbiAgfVxuXG4gIGdldCBfaW5wdXRFbGVtZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdO1xuICB9XG5cbiAgc2V0IF9pbnB1dEVsZW1lbnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94TGlnaHRFbGVtZW50LmlzLCBDb21ib0JveExpZ2h0RWxlbWVudCk7XG5cbmV4cG9ydCB7IENvbWJvQm94TGlnaHRFbGVtZW50IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcblxuaW1wb3J0IHsgZmx1c2ggfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0aXplIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvdGVtcGxhdGl6ZS5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUFubm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUtleXNCZWhhdmlvciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7IEZsYXR0ZW5lZE5vZGVzT2JzZXJ2ZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbGF0dGVuZWQtbm9kZXMtb2JzZXJ2ZXIuanMnO1xuaW1wb3J0IHsgQ29tYm9Cb3hQbGFjZWhvbGRlciB9IGZyb20gJy4vdmFhZGluLWNvbWJvLWJveC1wbGFjZWhvbGRlci5qcyc7XG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgQ29tYm9Cb3hNaXhpbiA9IHN1YmNsYXNzID0+IGNsYXNzIFZhYWRpbkNvbWJvQm94TWl4aW5FbGVtZW50IGV4dGVuZHMgc3ViY2xhc3Mge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBkcm9wZG93biBpcyBvcGVuLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICAgKi9cbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBwcmVzZW50LCBpdCBzcGVjaWZpZXMgdGhhdCB0aGUgZWxlbWVudCBmaWVsZCBpcyByZWFkLW9ubHkuXG4gICAgICAgKi9cbiAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEN1c3RvbSBmdW5jdGlvbiBmb3IgcmVuZGVyaW5nIHRoZSBjb250ZW50IG9mIGV2ZXJ5IGl0ZW0uXG4gICAgICAgKiBSZWNlaXZlcyB0aHJlZSBhcmd1bWVudHM6XG4gICAgICAgKlxuICAgICAgICogLSBgcm9vdGAgVGhlIGA8dmFhZGluLWNvbWJvLWJveC1pdGVtPmAgaW50ZXJuYWwgY29udGFpbmVyIERPTSBlbGVtZW50LlxuICAgICAgICogLSBgY29tYm9Cb3hgIFRoZSByZWZlcmVuY2UgdG8gdGhlIGA8dmFhZGluLWNvbWJvLWJveD5gIGVsZW1lbnQuXG4gICAgICAgKiAtIGBtb2RlbGAgVGhlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHJlbGF0ZWQgd2l0aCB0aGUgcmVuZGVyZWRcbiAgICAgICAqICAgaXRlbSwgY29udGFpbnM6XG4gICAgICAgKiAgIC0gYG1vZGVsLmluZGV4YCBUaGUgaW5kZXggb2YgdGhlIHJlbmRlcmVkIGl0ZW0uXG4gICAgICAgKiAgIC0gYG1vZGVsLml0ZW1gIFRoZSBpdGVtLlxuICAgICAgICovXG4gICAgICByZW5kZXJlcjogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBmdWxsIHNldCBvZiBpdGVtcyB0byBmaWx0ZXIgdGhlIHZpc2libGUgb3B0aW9ucyBmcm9tLlxuICAgICAgICogVGhlIGl0ZW1zIGNhbiBiZSBvZiBlaXRoZXIgYFN0cmluZ2Agb3IgYE9iamVjdGAgdHlwZS5cbiAgICAgICAqL1xuICAgICAgaXRlbXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIG9ic2VydmVyOiAnX2l0ZW1zQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgYHRydWVgLCB0aGUgdXNlciBjYW4gaW5wdXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBpdGVtcyBsaXN0LlxuICAgICAgICogYHZhbHVlYCBwcm9wZXJ0eSB3aWxsIGJlIHNldCB0byB0aGUgaW5wdXQgdmFsdWUgaW4gdGhpcyBjYXNlLlxuICAgICAgICogQWxzbywgd2hlbiBgdmFsdWVgIGlzIHNldCBwcm9ncmFtbWF0aWNhbGx5LCB0aGUgaW5wdXQgdmFsdWUgd2lsbCBiZSBzZXRcbiAgICAgICAqIHRvIHJlZmxlY3QgdGhhdCB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgYWxsb3dDdXN0b21WYWx1ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBzdWJzZXQgb2YgaXRlbXMsIGZpbHRlcmVkIGJhc2VkIG9uIHRoZSB1c2VyIGlucHV0LiBGaWx0ZXJlZCBpdGVtc1xuICAgICAgICogY2FuIGJlIGFzc2lnbmVkIGRpcmVjdGx5IHRvIG9taXQgdGhlIGludGVybmFsIGZpbHRlcmluZyBmdW5jdGlvbmFsaXR5LlxuICAgICAgICogVGhlIGl0ZW1zIGNhbiBiZSBvZiBlaXRoZXIgYFN0cmluZ2Agb3IgYE9iamVjdGAgdHlwZS5cbiAgICAgICAqL1xuICAgICAgZmlsdGVyZWRJdGVtczoge1xuICAgICAgICB0eXBlOiBBcnJheVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYFN0cmluZ2AgdmFsdWUgZm9yIHRoZSBzZWxlY3RlZCBpdGVtIG9mIHRoZSBjb21ibyBib3guIFByb3ZpZGVzXG4gICAgICAgKiB0aGUgdmFsdWUgZm9yIGBpcm9uLWZvcm1gLlxuICAgICAgICpcbiAgICAgICAqIFdoZW4gdGhlcmXigJlzIG5vIGl0ZW0gc2VsZWN0ZWQsIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmcuXG4gICAgICAgKlxuICAgICAgICogVXNlIGBzZWxlY3RlZEl0ZW1gIHByb3BlcnR5IHRvIGdldCB0aGUgcmF3IHNlbGVjdGVkIGl0ZW0gZnJvbVxuICAgICAgICogdGhlIGBpdGVtc2AgYXJyYXkuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlZCB0byBkZXRlY3QgdXNlciB2YWx1ZSBjaGFuZ2VzIGFuZCBmaXJlIGBjaGFuZ2VgIGV2ZW50cy5cbiAgICAgICAqL1xuICAgICAgX2xhc3RDb21taXR0ZWRWYWx1ZTogU3RyaW5nLFxuXG4gICAgICAvKlxuICAgICAgICogV2hlbiBzZXQgdG8gYHRydWVgLCBcImxvYWRpbmdcIiBhdHRyaWJ1dGUgaXMgYWRkZWQgdG8gaG9zdCBhbmQgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2ZvY3VzZWRJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGaWx0ZXJpbmcgc3RyaW5nIHRoZSB1c2VyIGhhcyB0eXBlZCBpbnRvIHRoZSBpbnB1dCBmaWVsZC5cbiAgICAgICAqL1xuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSB0aGUgYGl0ZW1zYCBhcnJheS5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWRJdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGggZm9yIGxhYmVsIG9mIHRoZSBpdGVtLiBJZiBgaXRlbXNgIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZVxuICAgICAgICogYGl0ZW1MYWJlbFBhdGhgIGlzIHVzZWQgdG8gZmV0Y2ggdGhlIGRpc3BsYXllZCBzdHJpbmcgbGFiZWwgZm9yIGVhY2hcbiAgICAgICAqIGl0ZW0uXG4gICAgICAgKlxuICAgICAgICogVGhlIGl0ZW0gbGFiZWwgaXMgYWxzbyB1c2VkIGZvciBtYXRjaGluZyBpdGVtcyB3aGVuIHByb2Nlc3NpbmcgdXNlclxuICAgICAgICogaW5wdXQsIGkuZS4sIGZvciBmaWx0ZXJpbmcgYW5kIHNlbGVjdGluZyBpdGVtcy5cbiAgICAgICAqXG4gICAgICAgKiBXaGVuIHVzaW5nIGl0ZW0gdGVtcGxhdGVzLCB0aGUgcHJvcGVydHkgaXMgc3RpbGwgbmVlZGVkIGJlY2F1c2UgaXQgaXMgdXNlZFxuICAgICAgICogZm9yIGZpbHRlcmluZywgYW5kIGZvciBkaXNwbGF5aW5nIHRoZSBzZWxlY3RlZCBpdGVtIHZhbHVlIGluIHRoZSBpbnB1dCBib3guXG4gICAgICAgKi9cbiAgICAgIGl0ZW1MYWJlbFBhdGg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2xhYmVsJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaXRlbUxhYmVsUGF0aENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGggZm9yIHRoZSB2YWx1ZSBvZiB0aGUgaXRlbS4gSWYgYGl0ZW1zYCBpcyBhbiBhcnJheSBvZiBvYmplY3RzLCB0aGVcbiAgICAgICAqIGBpdGVtVmFsdWVQYXRoOmAgaXMgdXNlZCB0byBmZXRjaCB0aGUgc3RyaW5nIHZhbHVlIGZvciB0aGUgc2VsZWN0ZWRcbiAgICAgICAqIGl0ZW0uXG4gICAgICAgKlxuICAgICAgICogVGhlIGl0ZW0gdmFsdWUgaXMgdXNlZCBpbiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBvZiB0aGUgY29tYm8gYm94LFxuICAgICAgICogdG8gcHJvdmlkZSB0aGUgZm9ybSB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgaXRlbVZhbHVlUGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAndmFsdWUnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdGggZm9yIHRoZSBpZCBvZiB0aGUgaXRlbS4gSWYgYGl0ZW1zYCBpcyBhbiBhcnJheSBvZiBvYmplY3RzLFxuICAgICAgICogdGhlIGBpdGVtSWRQYXRoYCBpcyB1c2VkIHRvIGNvbXBhcmUgYW5kIGlkZW50aWZ5IHRoZSBzYW1lIGl0ZW1cbiAgICAgICAqIGluIGBzZWxlY3RlZEl0ZW1gIGFuZCBgZmlsdGVyZWRJdGVtc2AgKGl0ZW1zIGdpdmVuIGJ5IHRoZVxuICAgICAgICogYGRhdGFQcm92aWRlcmAgY2FsbGJhY2spLlxuICAgICAgICovXG4gICAgICBpdGVtSWRQYXRoOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSBpZiB0aGUgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfdG9nZ2xlRWxlbWVudDogT2JqZWN0LFxuICAgICAgX2NsZWFyRWxlbWVudDogT2JqZWN0LFxuXG4gICAgICBfaW5wdXRFbGVtZW50VmFsdWU6IFN0cmluZyxcblxuICAgICAgX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQ6IEJvb2xlYW4sXG5cbiAgICAgIF9wcmV2aW91c0RvY3VtZW50UG9pbnRlckV2ZW50czogU3RyaW5nLFxuXG4gICAgICBfaXRlbVRlbXBsYXRlOiBPYmplY3RcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfZmlsdGVyQ2hhbmdlZChmaWx0ZXIsIGl0ZW1WYWx1ZVBhdGgsIGl0ZW1MYWJlbFBhdGgpJyxcbiAgICAgICdfaXRlbXNPclBhdGhzQ2hhbmdlZChpdGVtcy4qLCBpdGVtVmFsdWVQYXRoLCBpdGVtTGFiZWxQYXRoKScsXG4gICAgICAnX2ZpbHRlcmVkSXRlbXNDaGFuZ2VkKGZpbHRlcmVkSXRlbXMuKiwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCknLFxuICAgICAgJ190ZW1wbGF0ZU9yUmVuZGVyZXJDaGFuZ2VkKF9pdGVtVGVtcGxhdGUsIHJlbmRlcmVyKScsXG4gICAgICAnX2xvYWRpbmdDaGFuZ2VkKGxvYWRpbmcpJyxcbiAgICAgICdfc2VsZWN0ZWRJdGVtQ2hhbmdlZChzZWxlY3RlZEl0ZW0sIGl0ZW1MYWJlbFBhdGgpJyxcbiAgICAgICdfdG9nZ2xlRWxlbWVudENoYW5nZWQoX3RvZ2dsZUVsZW1lbnQpJ1xuICAgIF07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGUgPT4ge1xuICAgICAgLy8gRml4ZXMgdGhlIHByb2JsZW0gd2l0aCBgZm9jdXNvdXRgIGhhcHBlbmluZyB3aGVuIGNsaWNraW5nIG9uIHRoZSBzY3JvbGwgYmFyIG9uIEVkZ2VcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy4kLm92ZXJsYXkuJC5kcm9wZG93bjtcbiAgICAgIGlmIChkcm9wZG93biAmJiBkcm9wZG93bi4kICYmIGUucmVsYXRlZFRhcmdldCA9PT0gZHJvcGRvd24uJC5vdmVybGF5KSB7XG4gICAgICAgIGUuY29tcG9zZWRQYXRoKClbMF0uZm9jdXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX2xhc3RDb21taXR0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgSXJvbkExMXlBbm5vdW5jZXIucmVxdWVzdEF2YWlsYWJpbGl0eSgpO1xuXG4gICAgLy8gMi4wIGRvZXMgbm90IHN1cHBvcnQgJ292ZXJsYXkuc2VsZWN0aW9uLWNoYW5nZWQnIHN5bnRheCBpbiBsaXN0ZW5lcnNcbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3Rpb24tY2hhbmdlZCcsIHRoaXMuX292ZXJsYXlTZWxlY3RlZEl0ZW1DaGFuZ2VkLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLWNsb3NlZCcsIHRoaXMuX29uQ2xvc2VkLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1vcGVuZWQnLCB0aGlzLl9vbk9wZW5lZC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX29uQ2xpY2suYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tb3ZlcmxheS10b3VjaC1hY3Rpb24nLCB0aGlzLl9vbk92ZXJsYXlUb3VjaEFjdGlvbi5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcbiAgICAgIGlmICghdGhpcy5fY2xlYXJFbGVtZW50IHx8IGUuY29tcG9zZWRQYXRoKClbMF0gIT09IHRoaXMuX2NsZWFyRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBGbGF0dGVuZWROb2Rlc09ic2VydmVyKHRoaXMsIGluZm8gPT4ge1xuICAgICAgdGhpcy5fc2V0VGVtcGxhdGVGcm9tTm9kZXMoaW5mby5hZGRlZE5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IGludm9rZSBleGlzdGluZyByZW5kZXJlci5cbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy4kLm92ZXJsYXkuX3NlbGVjdG9yKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgndmFhZGluLWNvbWJvLWJveC1pdGVtJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uX3JlbmRlcigpKTtcbiAgICB9XG4gIH1cblxuICBfc2V0VGVtcGxhdGVGcm9tTm9kZXMobm9kZXMpIHtcbiAgICB0aGlzLl9pdGVtVGVtcGxhdGUgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLmxvY2FsTmFtZSAmJiBub2RlLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJylbMF0gfHwgdGhpcy5faXRlbVRlbXBsYXRlO1xuICB9XG5cbiAgX3JlbW92ZU5ld1JlbmRlcmVyT3JUZW1wbGF0ZSh0ZW1wbGF0ZSwgb2xkVGVtcGxhdGUsIHJlbmRlcmVyLCBvbGRSZW5kZXJlcikge1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gb2xkVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX2l0ZW1UZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHJlbmRlcmVyICE9PSBvbGRSZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBfdGVtcGxhdGVPclJlbmRlcmVyQ2hhbmdlZCh0ZW1wbGF0ZSwgcmVuZGVyZXIpIHtcbiAgICBpZiAodGVtcGxhdGUgJiYgcmVuZGVyZXIpIHtcbiAgICAgIHRoaXMuX3JlbW92ZU5ld1JlbmRlcmVyT3JUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGhpcy5fb2xkVGVtcGxhdGUsIHJlbmRlcmVyLCB0aGlzLl9vbGRSZW5kZXJlcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgb25seSB1c2UgZWl0aGVyIGEgcmVuZGVyZXIgb3IgYSB0ZW1wbGF0ZSBmb3IgY29tYm8gYm94IGl0ZW1zJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fb2xkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLl9vbGRSZW5kZXJlciA9IHJlbmRlcmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkcm9wZG93biBsaXN0LlxuICAgKi9cbiAgb3BlbigpIHtcbiAgICAvLyBQcmV2ZW50IF9vcGVuKCkgYmVpbmcgY2FsbGVkIHdoZW4gaW5wdXQgaXMgZGlzYWJsZWQgb3IgcmVhZC1vbmx5XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgZHJvcGRvd24gbGlzdC5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZCh2YWx1ZSwgb2xkKSB7XG4gICAgLy8gUHJldmVudCBfY2xvc2UoKSBiZWluZyBjYWxsZWQgd2hlbiBvcGVuZWQgaXMgc2V0IHRvIGl0cyBkZWZhdWx0IHZhbHVlIChmYWxzZSkuXG4gICAgaWYgKG9sZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWRXaXRoRm9jdXNSaW5nID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSB8fCAodGhpcy5mb2N1c0VsZW1lbnQgJiYgdGhpcy5mb2N1c0VsZW1lbnQuaGFzQXR0cmlidXRlKCdmb2N1cy1yaW5nJykpO1xuICAgICAgLy8gRm9yIHRvdWNoIGRldmljZXMsIHdlIGRvbid0IHdhbnQgdG8gcG9wdXAgdmlydHVhbCBrZXlib2FyZCBvbiB0b3VjaCBkZXZpY2VzIHVubGVzcyBpbnB1dFxuICAgICAgLy8gaXMgZXhwbGljaXRseSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgICAgaWYgKCF0aGlzLiQub3ZlcmxheS50b3VjaERldmljZSkge1xuICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlcmUgaXMgYSBmb2N1c2VkIHByb3BlcnR5IGFuZCBpZiBpdCdzIGFscmVhZHkgdHJ1ZS5cbiAgICAgICAgaWYgKCF0aGlzLmZvY3VzZWQpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX29wZW5lZFdpdGhGb2N1c1JpbmcgJiYgdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgICB0aGlzLmZvY3VzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9vbkNsb3NlZCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbk92ZXJsYXlUb3VjaEFjdGlvbihldmVudCkge1xuICAgIC8vIE9uIHRvdWNoIGRldmljZXMsIGJsdXIgdGhlIGlucHV0IG9uIHRvdWNoIHN0YXJ0IGluc2lkZSB0aGUgb3ZlcmxheSwgaW4gb3JkZXIgdG8gaGlkZVxuICAgIC8vIHRoZSB2aXJ0dWFsIGtleWJvYXJkLiBCdXQgZG9uJ3QgY2xvc2UgdGhlIG92ZXJsYXkgb24gdGhpcyBibHVyLlxuICAgIHRoaXMuX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG4gIH1cblxuICBfb25DbGljayhlKSB7XG4gICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IHRydWU7XG5cbiAgICBjb25zdCBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMuX2NsZWFyRWxlbWVudCkgIT09IC0xKSB7XG4gICAgICB0aGlzLl9jbGVhcigpO1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH0gZWxzZSBpZiAocGF0aC5pbmRleE9mKHRoaXMuaW5wdXRFbGVtZW50KSAhPT0gLTEpIHtcbiAgICAgIGlmIChwYXRoLmluZGV4T2YodGhpcy5fdG9nZ2xlRWxlbWVudCkgPiAtMSAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogS2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgKi9cblxuICBfb25LZXlEb3duKGUpIHtcbiAgICBpZiAodGhpcy5faXNFdmVudEtleShlLCAnZG93bicpKSB7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uQXJyb3dEb3duKCk7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIHByZXZlbnQgY2FyZXQgZnJvbSBtb3ZpbmdcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXZlbnRLZXkoZSwgJ3VwJykpIHtcbiAgICAgIHRoaXMuX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fb25BcnJvd1VwKCk7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gZmFsc2U7XG5cbiAgICAgIC8vIHByZXZlbnQgY2FyZXQgZnJvbSBtb3ZpbmdcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzRXZlbnRLZXkoZSwgJ2VudGVyJykpIHtcbiAgICAgIHRoaXMuX29uRW50ZXIoZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0V2ZW50S2V5KGUsICdlc2MnKSkge1xuICAgICAgdGhpcy5fb25Fc2NhcGUoZSk7XG4gICAgfVxuICB9XG5cbiAgX2lzRXZlbnRLZXkoZSwgaykge1xuICAgIHJldHVybiBJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZSwgayk7XG4gIH1cblxuICBfZ2V0SXRlbUxhYmVsKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy4kLm92ZXJsYXkuZ2V0SXRlbUxhYmVsKGl0ZW0pO1xuICB9XG5cbiAgX2dldEl0ZW1WYWx1ZShpdGVtKSB7XG4gICAgbGV0IHZhbHVlID0gaXRlbSAmJiB0aGlzLml0ZW1WYWx1ZVBhdGggPyB0aGlzLmdldCh0aGlzLml0ZW1WYWx1ZVBhdGgsIGl0ZW0pIDogdW5kZWZpbmVkO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YWx1ZSA9IGl0ZW0gPyBpdGVtLnRvU3RyaW5nKCkgOiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgX29uQXJyb3dEb3duKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKHRoaXMuJC5vdmVybGF5Ll9pdGVtcykge1xuICAgICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSBNYXRoLm1pbih0aGlzLiQub3ZlcmxheS5faXRlbXMubGVuZ3RoIC0gMSwgdGhpcy5fZm9jdXNlZEluZGV4ICsgMSk7XG4gICAgICAgIHRoaXMuX3ByZWZpbGxGb2N1c2VkSXRlbUxhYmVsKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkFycm93VXAoKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICBpZiAodGhpcy5fZm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gTWF0aC5tYXgoMCwgdGhpcy5fZm9jdXNlZEluZGV4IC0gMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy4kLm92ZXJsYXkuX2l0ZW1zKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gdGhpcy4kLm92ZXJsYXkuX2l0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fcHJlZmlsbEZvY3VzZWRJdGVtTGFiZWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgX3ByZWZpbGxGb2N1c2VkSXRlbUxhYmVsKCkge1xuICAgIGlmICh0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgLy8gUmVzZXQgdGhlIGlucHV0IHZhbHVlIGFzeW5jcm9ub3VzbHkgdG8gcHJldmVudCBwYXJ0aWFsIHZhbHVlIGNoYW5nZXNcbiAgICAgIC8vIGFubm91bmNlLiBNYWtlcyBPU1ggVm9pY2VPdmVyIHRvIGFubm91bmNlIHRoZSBjb21wbGV0ZSB2YWx1ZSBpbnN0ZWFkLlxuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSAnJztcbiAgICAgIC8vIDFtcyBkZWxheSBuZWVkZWQgZm9yIE9TWCBWb2ljZU92ZXIgdG8gcmVhbGlzZSBpbnB1dCB2YWx1ZSB3YXMgcmVzZXRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9IHRoaXMuX2dldEl0ZW1MYWJlbCh0aGlzLiQub3ZlcmxheS5fZm9jdXNlZEl0ZW0pO1xuICAgICAgICB0aGlzLl9tYXJrQWxsU2VsZWN0aW9uUmFuZ2UoKTtcbiAgICAgIH0sIDEpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kKSB7XG4gICAgLy8gdmFhZGluLXRleHQtZmllbGQgZG9lcyBub3QgaW1wbGVtZW50IHNldFNlbGVjdGlvblJhbmdlLCBoZW5jZSB3ZSBuZWVkIHRoZSBuYXRpdmUgaW5wdXRcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuX25hdGl2ZUlucHV0IHx8IHRoaXMuaW5wdXRFbGVtZW50O1xuXG4gICAgLy8gU2V0dGluZyBzZWxlY3Rpb24gcmFuZ2UgZm9jdXNlcyBhbmQvb3IgbW92ZXMgdGhlIGNhcmV0IGluIHNvbWUgYnJvd3NlcnMsXG4gICAgLy8gYW5kIHRoZXJlJ3Mgbm8gbmVlZCB0byBtb2RpZnkgdGhlIHNlbGVjdGlvbiByYW5nZSBpZiB0aGUgaW5wdXQgaXNuJ3QgZm9jdXNlZCBhbnl3YXkuXG4gICAgLy8gVGhpcyBhZmZlY3RzIFNhZmFyaS4gV2hlbiB0aGUgb3ZlcmxheSBpcyBvcGVuLCBhbmQgdGhlbiBoaXRpbmcgdGFiLCBicm93c2VyIHNob3VsZCBmb2N1c1xuICAgIC8vIHRoZSBuZXh0IGZvY3VzYWJsZSBlbGVtZW50IGluc3RlYWQgb2YgdGhlIGNvbWJvLWJveCBpdHNlbGYuXG4gICAgLy8gQ2hlY2tpbmcgdGhlIGZvY3VzZWQgcHJvcGVydHkgaGVyZSBpcyBlbm91Z2ggaW5zdGVhZCBvZiBjaGVja2luZyB0aGUgYWN0aXZlRWxlbWVudC5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSAmJiBpbnB1dCAmJiBpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCk7XG4gICAgICB9IGNhdGNoIChpZ25vcmUpIHtcbiAgICAgICAgLy8gSUUxMSByYW5kb21seSBmYWlscyB3aGVuIHJ1bm5pbmcgdGVzdHMgaW4gU2F1Y2UuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21hcmtBbGxTZWxlY3Rpb25SYW5nZSgpIHtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXJTZWxlY3Rpb25SYW5nZSgpIHtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPyB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZS5sZW5ndGggOiAwO1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uUmFuZ2UocG9zLCBwb3MpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkVudGVyKGUpIHtcbiAgICAvLyBzaG91bGQgY2xvc2Ugb24gZW50ZXIgd2hlbiBjdXN0b20gdmFsdWVzIGFyZSBhbGxvd2VkLCBpbnB1dCBmaWVsZCBpcyBjbGVhcmVkLCBvciB3aGVuIGFuIGV4aXN0aW5nXG4gICAgLy8gaXRlbSBpcyBmb2N1c2VkIHdpdGgga2V5Ym9hcmQuXG4gICAgaWYgKHRoaXMub3BlbmVkICYmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUgfHwgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPT09ICcnIHx8IHRoaXMuX2ZvY3VzZWRJbmRleCA+IC0xKSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAvLyBEbyBub3Qgc3VibWl0IHRoZSBzdXJyb3VuZGluZyBmb3JtLlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkVzY2FwZShlKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24oZSk7XG5cbiAgICAgIGlmICh0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlRWxlbWVudENoYW5nZWQodG9nZ2xlRWxlbWVudCkge1xuICAgIGlmICh0b2dnbGVFbGVtZW50KSB7XG4gICAgICAvLyBEb24ndCBibHVyIHRoZSBpbnB1dCBvbiB0b2dnbGUgbW91c2Vkb3duXG4gICAgICB0b2dnbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjdXJyZW50IHZhbHVlLlxuICAgKi9cbiAgX2NsZWFyKCkge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZlcnRzIGJhY2sgdG8gb3JpZ2luYWwgdmFsdWUuXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZVRvVmFsdWUoKTtcbiAgICAvLyBJbiB0aGUgbmV4dCBfZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKSBjYWxsLCB0aGUgY2hhbmdlIGRldGVjdGlvbiBzaG91bGQgbm90IHBhc3NcbiAgICB0aGlzLl9sYXN0Q29tbWl0dGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIF9vbk9wZW5lZCgpIHtcbiAgICAvLyBQcmUgUDIgaXJvbi1saXN0IHVzZWQgYSBkZWJvdW5jZXIgdG8gcmVuZGVyLiBOb3cgdGhhdCB3ZSBzeW5jaHJvbm91c2x5IHJlbmRlciBpdGVtcyxcbiAgICAvLyB3ZSBuZWVkIHRvIGZsdXNoIHRoZSBET00gdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ2V0IGZsdXNoZWQgaW4gdGhlIG1pZGRsZSBvZiBfcmVuZGVyIGNhbGxcbiAgICAvLyBiZWNhdXNlIHRoYXQgd2lsbCBjYXVzZSBwcm9ibGVtcyB0byBzYXkgdGhlIGxlYXN0LlxuICAgIGZsdXNoKCk7XG5cbiAgICAvLyBXaXRoIGlyb24tbGlzdCB2MS4zLjksIGNhbGxpbmcgYG5vdGlmeVJlc2l6ZSgpYCBubyBsb25nZXIgcmVuZGVyc1xuICAgIC8vIHRoZSBpdGVtcyBzeW5jaHJvbm91c2x5LiBJdCBpcyByZXF1aXJlZCB0byBoYXZlIHRoZSBpdGVtcyByZW5kZXJlZFxuICAgIC8vIGJlZm9yZSB3ZSB1cGRhdGUgdGhlIG92ZXJsYXkgYW5kIHRoZSBsaXN0IHBvc2l0aW9ucyBhbmQgc2l6ZXMuXG4gICAgdGhpcy4kLm92ZXJsYXkuZW5zdXJlSXRlbXNSZW5kZXJlZCgpO1xuICAgIHRoaXMuJC5vdmVybGF5Ll9zZWxlY3Rvci50b2dnbGVTY3JvbGxMaXN0ZW5lcih0cnVlKTtcblxuICAgIC8vIEVuc3VyZSBtZXRyaWNzIGFyZSB1cC10by1kYXRlXG4gICAgdGhpcy4kLm92ZXJsYXkudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgLy8gRm9yY2UgaXJvbi1saXN0IHRvIGNyZWF0ZSByZXVzYWJsZSBub2Rlcy4gT3RoZXJ3aXNlIGl0IHdpbGwgb25seSBzdGFydFxuICAgIC8vIGRvaW5nIHRoYXQgaW4gc2Nyb2xsIGxpc3RlbmVyLCB3aGljaCBpcyBlc3BlY2lhbGx5IHNsb3cgaW4gRWRnZS5cbiAgICB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3IuX2luY3JlYXNlUG9vbElmTmVlZGVkKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9yZXNpemVEcm9wZG93bigpLCAxKTtcbiAgICAvLyBEZWZlciBzY3JvbGwgcG9zaXRpb24gYWRqdXN0bWVudCB0byBwcmV2ZW50IGZyZWV6ZSBpbiBFZGdlXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLiQub3ZlcmxheS5hZGp1c3RTY3JvbGxQb3NpdGlvbigpKTtcblxuXG4gICAgLy8gX2RldGVjdEFuZERpc3BhdGNoQ2hhbmdlKCkgc2hvdWxkIG5vdCBjb25zaWRlciB2YWx1ZSBjaGFuZ2VzIGRvbmUgYmVmb3JlIG9wZW5pbmdcbiAgICB0aGlzLl9sYXN0Q29tbWl0dGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgX29uQ2xvc2VkKCkge1xuXG4gICAgLy8gSGFwcGVucyB3aGVuIHRoZSBvdmVybGF5IGlzIGNsb3NlZCBieSBjbGlja2luZyBvdXRzaWRlXG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5vdmVybGF5Ll9pdGVtcyAmJiB0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgZm9jdXNlZEl0ZW0gPSB0aGlzLiQub3ZlcmxheS5faXRlbXNbdGhpcy5fZm9jdXNlZEluZGV4XTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBmb2N1c2VkSXRlbTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2Ugc3VyZSBpbnB1dCBmaWVsZCBpcyB1cGRhdGVkIGluIGNhc2UgdmFsdWUgZG9lc24ndCBjaGFuZ2UgKGkuZS4gRk9PIC0+IGZvbylcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5fZ2V0SXRlbUxhYmVsKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID09PSAnJyB8fCB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbS12YWx1ZS1zZXQnLCB7ZGV0YWlsOiB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSwgY29tcG9zZWQ6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGJ1YmJsZXM6IHRydWV9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1c3RvbVZhbHVlID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWU7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0SXRlbUZvclZhbHVlKGN1c3RvbVZhbHVlKTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gY3VzdG9tVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLl9nZXRJdGVtTGFiZWwodGhpcy5zZWxlY3RlZEl0ZW0pIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKTtcblxuICAgIHRoaXMuX2NsZWFyU2VsZWN0aW9uUmFuZ2UoKTtcblxuICAgIGlmICghdGhpcy5kYXRhUHJvdmlkZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyID0gJyc7XG4gICAgfVxuICB9XG5cbiAgZ2V0IF9wcm9wZXJ0eUZvclZhbHVlKCkge1xuICAgIHJldHVybiAndmFsdWUnO1xuICB9XG5cbiAgLyoqXG4gICAqICBGaWx0ZXJpbmcgYW5kIGl0ZW1zIGhhbmRsaW5nXG4gICAqL1xuICBfaW5wdXRWYWx1ZUNoYW5nZWQoZSkge1xuICAgIC8vIEhhbmRsZSBvbmx5IGlucHV0IGV2ZW50cyBmcm9tIG91ciBpbnB1dEVsZW1lbnQuXG4gICAgaWYgKGUuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLmlucHV0RWxlbWVudCkgIT09IC0xKSB7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9IHRoaXMuaW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdO1xuICAgICAgdGhpcy5fZmlsdGVyRnJvbUlucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgX2ZpbHRlckZyb21JbnB1dChlKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVyID09PSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSkge1xuICAgICAgLy8gRmlsdGVyIGFuZCBpbnB1dCB2YWx1ZSBtaWdodCBnZXQgb3V0IG9mIHN5bmMsIHdoaWxlIGtleWJvYXJkIG5hdmlnYXRpbmcgZm9yIGV4YW1wbGUuXG4gICAgICAvLyBBZnRlcndhcmRzLCBpbnB1dCB2YWx1ZSBtaWdodCBiZSBjaGFuZ2VkIHRvIHRoZSBzYW1lIHZhbHVlIGFzIHVzZWQgaW4gZmlsdGVyaW5nLlxuICAgICAgLy8gSW4gc2l0dWF0aW9uIGxpa2UgdGhlc2UsIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGFsbCB0aGUgZmlsdGVyIGNoYW5nZXMgaGFuZGxlcnMgYXJlIHJ1bi5cbiAgICAgIHRoaXMuX2ZpbHRlckNoYW5nZWQodGhpcy5maWx0ZXIsIHRoaXMuaXRlbVZhbHVlUGF0aCwgdGhpcy5pdGVtTGFiZWxQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXIgPSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBfaXRlbUxhYmVsUGF0aENoYW5nZWQoaXRlbUxhYmVsUGF0aCwgb2xkSXRlbUxhYmVsUGF0aCkge1xuICAgIGlmICh0eXBlb2YgaXRlbUxhYmVsUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1lvdSBzaG91bGQgc2V0IGl0ZW1MYWJlbFBhdGggdG8gYSB2YWxpZCBzdHJpbmcnKTtcbiAgICB9XG4gIH1cblxuICBfZmlsdGVyQ2hhbmdlZChmaWx0ZXIsIGl0ZW1WYWx1ZVBhdGgsIGl0ZW1MYWJlbFBhdGgpIHtcbiAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlbXMpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlckl0ZW1zKHRoaXMuaXRlbXMsIGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdpdGggY2VydGFpbiB1c2UgY2FzZXMgKGUuIGcuLCBleHRlcm5hbCBmaWx0ZXJpbmcpLCBgaXRlbXNgIGFyZVxuICAgICAgLy8gdW5kZWZpbmVkLiBGaWx0ZXJpbmcgaXMgdW5uZWNlc3NhcnkgcGVyIHNlLCBidXQgdGhlIGZpbHRlcmVkSXRlbXNcbiAgICAgIC8vIG9ic2VydmVyIHNob3VsZCBzdGlsbCBiZSBpbnZva2VkIHRvIHVwZGF0ZSBmb2N1c2VkIGl0ZW0uXG4gICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zQ2hhbmdlZCh7cGF0aDogJ2ZpbHRlcmVkSXRlbXMnLCB2YWx1ZTogdGhpcy5maWx0ZXJlZEl0ZW1zfSwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCk7XG4gICAgfVxuICB9XG5cbiAgX2xvYWRpbmdDaGFuZ2VkKGxvYWRpbmcpIHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgfVxuICB9XG5cbiAgX3JldmVydElucHV0VmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyICE9PSAnJykge1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLmZpbHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZVRvVmFsdWUoKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJTZWxlY3Rpb25SYW5nZSgpO1xuICB9XG5cbiAgX3JldmVydElucHV0VmFsdWVUb1ZhbHVlKCkge1xuICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUgJiYgIXRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5fZ2V0SXRlbUxhYmVsKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG4gIH1cblxuICBfcmVzaXplRHJvcGRvd24oKSB7XG4gICAgdGhpcy4kLm92ZXJsYXkuJC5kcm9wZG93bi5ub3RpZnlSZXNpemUoKTtcbiAgfVxuXG4gIF91cGRhdGVIYXNWYWx1ZShoYXNWYWx1ZSkge1xuICAgIGlmIChoYXNWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hhcy12YWx1ZScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2hhcy12YWx1ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3RlZEl0ZW1DaGFuZ2VkKHNlbGVjdGVkSXRlbSwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09IG51bGwgfHwgc2VsZWN0ZWRJdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlcmVkSXRlbXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVIYXNWYWx1ZSh0aGlzLnZhbHVlICE9PSAnJyk7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9nZXRJdGVtVmFsdWUoc2VsZWN0ZWRJdGVtKTtcbiAgICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3VwZGF0ZUhhc1ZhbHVlKHRydWUpO1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLl9nZXRJdGVtTGFiZWwoc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgLy8gQ291bGQgbm90IGJlIGRlZmluZWQgaW4gMS54IGJlY2F1c2UgcmVhZHkgaXMgY2FsbGVkIGFmdGVyIGFsbCBwcm9wLXNldHRlcnNcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudFt0aGlzLl9wcm9wZXJ0eUZvclZhbHVlXSA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJC5vdmVybGF5Ll9zZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW07XG4gICAgaWYgKHRoaXMuZmlsdGVyZWRJdGVtcyAmJiB0aGlzLiQub3ZlcmxheS5faXRlbXMpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHRoaXMuZmlsdGVyZWRJdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX3ZhbHVlQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsKSB7XG4gICAgaWYgKHZhbHVlID09PSAnJyAmJiBvbGRWYWwgPT09IHVuZGVmaW5lZCkgeyAvLyBpbml0aWFsaXppbmcsIG5vIG5lZWQgdG8gZG8gYW55dGhpbmcgKCM1NTQpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzVmFsaWRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKHRoaXMuX2dldEl0ZW1WYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEl0ZW1Gb3JWYWx1ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICB9XG5cbiAgICAgIGlmICghaXRlbSAmJiB0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdXBkYXRlSGFzVmFsdWUodGhpcy52YWx1ZSAhPT0gJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICAgIC8vIEluIHRoZSBuZXh0IF9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpIGNhbGwsIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHNob3VsZCBwYXNzXG4gICAgdGhpcy5fbGFzdENvbW1pdHRlZFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2RldGVjdEFuZERpc3BhdGNoQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLl9sYXN0Q29tbWl0dGVkVmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgICAgdGhpcy5fbGFzdENvbW1pdHRlZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfaXRlbXNDaGFuZ2VkKGl0ZW1zLCBvbGRJdGVtcykge1xuICAgIHRoaXMuX2Vuc3VyZUl0ZW1zT3JEYXRhUHJvdmlkZXIoKCkgPT4ge1xuICAgICAgdGhpcy5pdGVtcyA9IG9sZEl0ZW1zO1xuICAgIH0pO1xuICB9XG5cbiAgX2l0ZW1zT3JQYXRoc0NoYW5nZWQoZSwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGlmIChlLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUucGF0aCA9PT0gJ2l0ZW1zJyB8fCBlLnBhdGggPT09ICdpdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMuc2xpY2UoMCkgOiB0aGlzLml0ZW1zO1xuXG4gICAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy5faW5kZXhPZlZhbHVlKHRoaXMudmFsdWUsIHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gdmFsdWVJbmRleDtcblxuICAgICAgY29uc3QgaXRlbSA9IHZhbHVlSW5kZXggPiAtMSAmJiB0aGlzLml0ZW1zW3ZhbHVlSW5kZXhdO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9maWx0ZXJlZEl0ZW1zQ2hhbmdlZChlLCBpdGVtVmFsdWVQYXRoLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgaWYgKGUudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5wYXRoID09PSAnZmlsdGVyZWRJdGVtcycgfHwgZS5wYXRoID09PSAnZmlsdGVyZWRJdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5fc2V0T3ZlcmxheUl0ZW1zKHRoaXMuZmlsdGVyZWRJdGVtcyk7XG5cbiAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHRoaXMub3BlbmVkID9cbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuaW5kZXhPZkxhYmVsKHRoaXMuZmlsdGVyKSA6XG4gICAgICAgIHRoaXMuX2luZGV4T2ZWYWx1ZSh0aGlzLnZhbHVlLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVwb3NpdGlvbk92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZmlsdGVySXRlbXMoYXJyLCBmaWx0ZXIpIHtcbiAgICBpZiAoIWFycikge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGZpbHRlciA9IGZpbHRlciA/IGZpbHRlci50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgIC8vIENoZWNrIGlmIGl0ZW0gY29udGFpbnMgaW5wdXQgdmFsdWUuXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbUxhYmVsKGl0ZW0pLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZWxlY3RJdGVtRm9yVmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy5faW5kZXhPZlZhbHVlKHZhbHVlLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdmFsdWVJbmRleCA+PSAwXG4gICAgICA/IHRoaXMuZmlsdGVyZWRJdGVtc1t2YWx1ZUluZGV4XVxuICAgICAgOiAodGhpcy5kYXRhUHJvdmlkZXIgJiYgdGhpcy5zZWxlY3RlZEl0ZW0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBudWxsICYmIHByZXZpb3VzbHlTZWxlY3RlZEl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWQodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRPdmVybGF5SXRlbXMoaXRlbXMpIHtcbiAgICB0aGlzLiQub3ZlcmxheS5zZXQoJ19pdGVtcycsIGl0ZW1zKTtcblxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fcmVzaXplRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBfcmVwb3NpdGlvbk92ZXJsYXkoKSB7XG4gICAgLy8gYXN5bmMgbmVlZGVkIHRvIHJlcG9zaXRpb24gY29ycmVjdGx5IGFmdGVyIGZpbHRlcmluZ1xuICAgIC8vIChlc3BlY2lhbGx5IHdoZW4gYWxpZ25lZCBvbiB0b3Agb2YgaW5wdXQpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZXNpemVEcm9wZG93bigpO1xuICAgICAgdGhpcy4kLm92ZXJsYXkudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICB0aGlzLiQub3ZlcmxheS5lbnN1cmVJdGVtc1JlbmRlcmVkKCk7XG4gICAgICB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3Iubm90aWZ5UmVzaXplKCk7XG4gICAgICBmbHVzaCgpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgX2luZGV4T2ZWYWx1ZSh2YWx1ZSwgaXRlbXMpIHtcbiAgICBpZiAoaXRlbXMgJiYgdGhpcy5faXNWYWxpZFZhbHVlKHZhbHVlKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW1zW2ldKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHZhbHVlIGlzIHN1cHBvcnRlZCBhcyBhbiBpdGVtIHZhbHVlIGluIHRoaXMgY29udHJvbC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9pc1ZhbGlkVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIF9vdmVybGF5U2VsZWN0ZWRJdGVtQ2hhbmdlZChlKSB7XG4gICAgLy8gc3RvcCB0aGlzIHByaXZhdGUgZXZlbnQgZnJvbSBsZWFraW5nIG91dHNpZGUuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChlLmRldGFpbC5pdGVtIGluc3RhbmNlb2YgQ29tYm9Cb3hQbGFjZWhvbGRlcikge1xuICAgICAgLy8gUGxhY2Vob2xkZXIgaXRlbXMgc2hvdWxkIG5vdCBiZSBzZWxlY3RhYmxlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gZS5kZXRhaWwuaXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBlLmRldGFpbC5pdGVtO1xuICAgICAgdGhpcy5fZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHkuXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHZhbGlkIGFuZCBzZXRzIHRoZSBgaW52YWxpZGAgZmxhZyBhcHByb3ByaWF0ZWx5XG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gISh0aGlzLmludmFsaWQgPSAhdGhpcy5jaGVja1ZhbGlkaXR5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBpbnB1dCB2YWx1ZSBzYXRpc2ZpZXMgYWxsIGNvbnN0cmFpbnRzIChpZiBhbnkpXG4gICAqXG4gICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhlIGBjaGVja1ZhbGlkaXR5YCBtZXRob2QgZm9yIGN1c3RvbSB2YWxpZGF0aW9ucy5cbiAgICovXG4gIGNoZWNrVmFsaWRpdHkoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50LnZhbGlkYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dEVsZW1lbnQudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX2luc3RhbmNlUHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHRydWUsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBfZW5zdXJlVGVtcGxhdGl6ZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9UZW1wbGF0ZUNsYXNzKSB7XG4gICAgICBjb25zdCB0cGwgPSB0aGlzLl9pdGVtVGVtcGxhdGUgfHwgdGhpcy5fZ2V0Um9vdFRlbXBsYXRlKCk7XG4gICAgICBpZiAodHBsKSB7XG4gICAgICAgIHRoaXMuX1RlbXBsYXRlQ2xhc3MgPSB0ZW1wbGF0aXplKHRwbCwgdGhpcywge1xuICAgICAgICAgIGluc3RhbmNlUHJvcHM6IHRoaXMuX2luc3RhbmNlUHJvcHMsXG4gICAgICAgICAgZm9yd2FyZEhvc3RQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgndmFhZGluLWNvbWJvLWJveC1pdGVtJyk7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW1zLCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5faXRlbVRlbXBsYXRlSW5zdGFuY2Uuc2V0KHByb3AsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpdGVtLl9pdGVtVGVtcGxhdGVJbnN0YW5jZS5ub3RpZnlQYXRoKHByb3AsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Um9vdFRlbXBsYXRlKCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwodGhpcy5jaGlsZHJlbiwgZWxlbSA9PiBlbGVtLnRhZ05hbWUgPT09ICdURU1QTEFURScpWzBdO1xuICB9XG5cbiAgX3ByZXZlbnRJbnB1dEJsdXIoKSB7XG4gICAgaWYgKHRoaXMuX3RvZ2dsZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9jbGVhckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2NsZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3ByZXZlbnREZWZhdWx0KTtcbiAgICB9XG4gIH1cblxuICBfcmVzdG9yZUlucHV0Qmx1cigpIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlRWxlbWVudCkge1xuICAgICAgdGhpcy5fdG9nZ2xlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3ByZXZlbnREZWZhdWx0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NsZWFyRWxlbWVudCkge1xuICAgICAgdGhpcy5fY2xlYXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fcHJldmVudERlZmF1bHQpO1xuICAgIH1cbiAgfVxuXG4gIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgX3N0b3BQcm9wYWdhdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAZXZlbnQgdmFsdWUtY2hhbmdlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGV0YWlsXG4gICAqICBAcGFyYW0ge1N0cmluZ30gZGV0YWlsLnZhbHVlIHRoZSBjb21ib2JveCB2YWx1ZVxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBzZWxlY3RlZCBpdGVtIGNoYW5nZXMuXG4gICAqXG4gICAqIEBldmVudCBzZWxlY3RlZC1pdGVtLWNoYW5nZWRcbiAgICogQHBhcmFtIHtPYmplY3R9IGRldGFpbFxuICAgKiAgQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkZXRhaWwudmFsdWUgdGhlIHNlbGVjdGVkIGl0ZW0uIFR5cGUgaXMgdGhlIHNhbWUgYXMgdGhlIHR5cGUgb2YgYGl0ZW1zYC5cbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgc2V0cyBhIGN1c3RvbSB2YWx1ZS5cbiAgICogQGV2ZW50IGN1c3RvbS12YWx1ZS1zZXRcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRldGFpbCB0aGUgY3VzdG9tIHZhbHVlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHZhbHVlIGNoYW5nZXMuXG4gICAqIFRvIGNvbXBseSB3aXRoIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jaGFuZ2VcbiAgICogQGV2ZW50IGNoYW5nZVxuICAgKi9cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTggVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG4vKlxuICogUGxhY2Vob2xkZXIgb2JqZWN0IGNsYXNzIHJlcHJlc2VudGluZyBpdGVtcyBiZWluZyBsb2FkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IENvbWJvQm94UGxhY2Vob2xkZXIgPSBjbGFzcyBDb21ib0JveFBsYWNlaG9sZGVyIHtcbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL3NwYWNpbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zdHlsZS5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvdGhlbWUvbHVtby92YWFkaW4tb3ZlcmxheS5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL21peGlucy9tZW51LW92ZXJsYXkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJsdW1vLWNvbWJvLWJveC1vdmVybGF5XCIgdGhlbWUtZm9yPVwidmFhZGluLWNvbWJvLWJveC1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cImx1bW8tb3ZlcmxheSBsdW1vLW1lbnUtb3ZlcmxheS1jb3JlXCI+XG4gICAgICBbcGFydD1cImNvbnRlbnRcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIC8qIFRPRE86IHVzaW5nIGEgbGVnYWN5IG1peGluICh1bnN1cHBvcnRlZCkgKi9cbiAgICAgICAgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyOiB7XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1sdW1vLXNwYWNlLXhzKTtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qIFRPRE86IHdvcmthcm91bmQgU2hhZHlDU1MgaXNzdWUgd2hlbiB1c2luZyBpbnNpZGUgb2YgdGhlIGRvbS1pZiAqL1xuICAgICAgOmhvc3QoW29wZW5lZF0pIHtcbiAgICAgICAgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyXy1fYm9yZGVyLXdpZHRoOiB2YXIoLS1sdW1vLXNwYWNlLXhzKTtcbiAgICAgICAgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyXy1fYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyXy1fYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogTG9hZGluZyBzdGF0ZSAqL1xuXG4gICAgICAvKiBXaGVuIGl0ZW1zIGFyZSBlbXB0eSwgdGhlIHNpbm5lciBuZWVkcyBzb21lIHJvb20gKi9cbiAgICAgIDpob3N0KDpub3QoW2Nsb3NpbmddKSkgW3BhcnR+PVwiY29udGVudFwiXSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMiAqIHZhcigtLWx1bW8tc3BhY2UtcykgKyB2YXIoLS1sdW1vLWljb24tc2l6ZS1zKSk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtsb2FkaW5nXSkgW3BhcnR+PVwibG9hZGVyXCJdIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWx1bW8taWNvbi1zaXplLXMpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWx1bW8taWNvbi1zaXplLXMpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGxlZnQ6IHZhcigtLWx1bW8tc3BhY2Utcyk7XG4gICAgICAgIHJpZ2h0OiB2YXIoLS1sdW1vLXNwYWNlLXMpO1xuICAgICAgICB0b3A6IHZhcigtLWx1bW8tc3BhY2Utcyk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjpcbiAgICAgICAgICB2YXIoLS1sdW1vLXByaW1hcnktY29sb3ItNTBwY3QpXG4gICAgICAgICAgdmFyKC0tbHVtby1wcmltYXJ5LWNvbG9yLTUwcGN0KVxuICAgICAgICAgIHZhcigtLWx1bW8tcHJpbWFyeS1jb2xvcilcbiAgICAgICAgICB2YXIoLS1sdW1vLXByaW1hcnktY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKDAuNSAqIHZhcigtLWx1bW8taWNvbi1zaXplLXMpKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uOlxuICAgICAgICAgIDFzIGxpbmVhciBpbmZpbml0ZSBsdW1vLWNvbWJvLWJveC1sb2FkZXItcm90YXRlLFxuICAgICAgICAgIC4zcyAuMXMgbHVtby1jb21iby1ib3gtbG9hZGVyLWZhZGUtaW4gYm90aDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbHVtby1jb21iby1ib3gtbG9hZGVyLWZhZGUtaW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsdW1vLWNvbWJvLWJveC1sb2FkZXItcm90YXRlIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL3NwYWNpbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zdHlsZS5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWl0ZW0vdGhlbWUvbHVtby92YWFkaW4taXRlbS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cImx1bW8tY29tYm8tYm94LWl0ZW1cIiB0aGVtZS1mb3I9XCJ2YWFkaW4tY29tYm8tYm94LWl0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibHVtby1pdGVtXCI+XG4gICAgICAvKiBUT0RPIHBhcnRseSBkdXBsaWNhdGVkIGZyb20gdmFhZGluLWxpc3QtYm94IHN0eWxlcy4gU2hvdWxkIGZpbmQgYSB3YXkgdG8gbWFrZSBpdCBEUlkgKi9cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdmFyKC0tbHVtby1wcmltYXJ5LWNvbG9yLTEwcGN0KTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWx1bW8tYm9yZGVyLXJhZGl1cykgLyA0KTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1sdW1vLXNwYWNlLWwpICsgdmFyKC0tbHVtby1ib3JkZXItcmFkaXVzKSAvIDQpO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1sdW1vLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtLV9sdW1vLWl0ZW0tc2VsZWN0ZWQtaWNvbi1kaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLyogU2hhZHlDU1Mgd29ya2Fyb3VuZCAoc2hvdyB0aGUgc2VsZWN0ZWQgaXRlbSBjaGVja21hcmspICovXG4gICAgICA6aG9zdDo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3Zlcikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sdW1vLXByaW1hcnktY29sb3ItMTBwY3QpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF06bm90KFtkaXNhYmxlZF0pKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB2YXIoLS1sdW1vLXByaW1hcnktY29sb3ItNTBwY3QpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICA6aG9zdCg6aG92ZXIpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtmb2N1c2VkXTpub3QoW2Rpc2FibGVkXSkpIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1zdHlsZXMuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1jb21iby1ib3gtaXRlbS1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWNvbWJvLWJveC1saWdodC5qcyc7XG4iLCJpbXBvcnQgJy4vdGhlbWUvbHVtby92YWFkaW4tY29tYm8tYm94LWxpZ2h0LmpzJztcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbi8qKlxuICogQSBtaXhpbiBwcm92aWRpbmcgYGZvY3VzZWRgLCBgZm9jdXMtcmluZ2AsIGBhY3RpdmVgLCBgZGlzYWJsZWRgIGFuZCBgc2VsZWN0ZWRgLlxuICpcbiAqIGBmb2N1c2VkYCwgYGFjdGl2ZWAgYW5kIGBmb2N1cy1yaW5nYCBhcmUgc2V0IGFzIG9ubHkgYXMgYXR0cmlidXRlcy5cbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IEl0ZW1NaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluSXRlbU1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuXG4gICAgICAvKipcbiAgICAgICAqIFVzZWQgZm9yIG1peGluIGRldGVjdGlvbiBiZWNhdXNlIGBpbnN0YW5jZW9mYCBkb2VzIG5vdCB3b3JrIHdpdGggbWl4aW5zLlxuICAgICAgICogZS5nLiBpbiBWYWFkaW5MaXN0TWl4aW4gaXQgZmlsdGVycyBpdGVtcyBieSB1c2luZyB0aGVcbiAgICAgICAqIGBlbGVtZW50Ll9oYXNWYWFkaW5JdGVtTWl4aW5gIGNvbmRpdGlvbi5cbiAgICAgICAqL1xuICAgICAgX2hhc1ZhYWRpbkl0ZW1NaXhpbjoge1xuICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZGlzYWJsZWRDaGFuZ2VkJyxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRydWUsIHRoZSBpdGVtIGlzIGluIHNlbGVjdGVkIHN0YXRlLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfc2VsZWN0ZWRDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX3ZhbHVlOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdHRhYmxlIHN0cmluZyB2YWx1ZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgdGhlIHRyaW1tZWQgdGV4dCBjb250ZW50IG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMuX3ZhbHVlIDogdGhpcy50ZXh0Q29udGVudC50cmltKCk7XG4gIH1cblxuICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIGlmIChhdHRyVmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBhdHRyVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGUgPT4gdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKSwgdHJ1ZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZSh0aGlzLl9tb3VzZWRvd24gPSB0cnVlKTtcbiAgICAgIGNvbnN0IG1vdXNlVXBMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0QWN0aXZlKHRoaXMuX21vdXNlZG93biA9IGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XG4gICAgICB9O1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXBMaXN0ZW5lcik7XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLl9vbktleWRvd24oZSkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHRoaXMuX29uS2V5dXAoZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyBpbiBGaXJlZm94IGFuZCBTYWZhcmksIGJsdXIgZG9lcyBub3QgZmlyZSBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIHJlbW92ZWQsXG4gICAgLy8gZXNwZWNpYWxseSBiZXR3ZWVuIGtleWRvd24gYW5kIGtleXVwIGV2ZW50cywgYmVpbmcgYWN0aXZlIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgLy8gcmVwcm9kdWNpYmxlIGluIGA8dmFhZGluLWRyb3Bkb3duLW1lbnU+YCB3aGVuIGNsb3Npbmcgb3ZlcmxheSBvbiBzZWxlY3QuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGVkQ2hhbmdlZChzZWxlY3RlZCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICB9XG5cbiAgX2Rpc2FibGVkQ2hhbmdlZChkaXNhYmxlZCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX3NldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9jdXNlZCcsICcnKTtcbiAgICAgIGlmICghdGhpcy5fbW91c2Vkb3duKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1cy1yaW5nJywgJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZm9jdXNlZCcpO1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEFjdGl2ZShhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgX29uS2V5ZG93bihldmVudCkge1xuICAgIGlmICgvXiggfFNwYWNlQmFyfEVudGVyKSQvLnRlc3QoZXZlbnQua2V5KSAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBfb25LZXl1cChldmVudCkge1xuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLmNsaWNrKCk7XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgSXRlbU1peGluIH0gZnJvbSAnLi92YWFkaW4taXRlbS1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuLyoqXG4gKiBgPHZhYWRpbi1pdGVtPmAgaXMgYSBXZWIgQ29tcG9uZW50IHByb3ZpZGluZyBsYXlvdXQgZm9yIGl0ZW1zIGluIHRhYnMgYW5kIG1lbnVzLlxuICpcbiAqIGBgYFxuICogICA8dmFhZGluLWl0ZW0+XG4gKiAgICAgSXRlbSBjb250ZW50XG4gKiAgIDwvdmFhZGluLWl0ZW0+XG4gKiBgYGBcbiAqXG4gKiAjIyMgU2VsZWN0YWJsZVxuICpcbiAqIGA8dmFhZGluLWl0ZW0+YCBoYXMgdGhlIGBzZWxlY3RlZGAgcHJvcGVydHkgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHN0YXRlIGF0dHJpYnV0ZS5cbiAqIEN1cnJlbnRseSwgdGhlIGNvbXBvbmVudCBzZXRzIHRoZSBgc2VsZWN0ZWRgIHRvIGZhbHNlLCB3aGVuIGBkaXNhYmxlZGAgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUuXG4gKiBCdXQgb3RoZXIgdGhhbiB0aGF0LCB0aGUgYDx2YWFkaW4taXRlbT5gIGRvZXMgbm90IHN3aXRjaCBzZWxlY3Rpb24gYnkgaXRzZWxmLlxuICogSW4gZ2VuZXJhbCwgaXQgaXMgdGhlIHdyYXBwZXIgY29tcG9uZW50LCBsaWtlIGA8dmFhZGluLWxpc3QtYm94PmAsIHdoaWNoIHNob3VsZCB1cGRhdGVcbiAqIHRoZSBgc2VsZWN0ZWRgIHByb3BlcnR5IG9uIHRoZSBpdGVtcywgZS4gZy4gb24gbW91c2Vkb3duIG9yIHdoZW4gRW50ZXIgLyBTcGFjZWJhciBpcyBwcmVzc2VkLlxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb25cbiAqIC0tLXwtLS1cbiAqIGBjb250ZW50YCB8IFRoZSBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIHNsb3RcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgIHwgRGVzY3JpcHRpb24gfCBQYXJ0IG5hbWVcbiAqIC0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgZGlzYWJsZWRgIHwgU2V0IHRvIGEgZGlzYWJsZWQgaXRlbSB8IDpob3N0XG4gKiBgZm9jdXNlZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkIHwgOmhvc3RcbiAqIGBmb2N1cy1yaW5nYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGtleWJvYXJkIGZvY3VzZWQgfCA6aG9zdFxuICogYHNlbGVjdGVkYCB8IFNldCB3aGVuIHRoZSBpdGVtIGlzIHNlbGVjdGVkIHwgOmhvc3RcbiAqIGBhY3RpdmVgIHwgU2V0IHdoZW4gbW91c2Vkb3duIG9yIGVudGVyL3NwYWNlYmFyIHByZXNzZWQgfCA6aG9zdFxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBtaXhlcyBWYWFkaW4uSXRlbU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1hYmxlTWl4aW5cbiAqL1xuY2xhc3MgSXRlbUVsZW1lbnQgZXh0ZW5kcyBJdGVtTWl4aW4oVGhlbWFibGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBwYXJ0PVwiY29udGVudFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4taXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICcyLjEuMCc7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKEl0ZW1FbGVtZW50LmlzLCBJdGVtRWxlbWVudCk7XG5cbmV4cG9ydCB7IEl0ZW1FbGVtZW50IH07XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWx1bW8tc3R5bGVzL2ZvbnQtaWNvbnMuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zaXppbmcuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy9zcGFjaW5nLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvc3R5bGUuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1sdW1vLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cImx1bW8taXRlbVwiIHRoZW1lLWZvcj1cInZhYWRpbi1pdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1sdW1vLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1sdW1vLWZvbnQtc2l6ZS1tKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWx1bW8tbGluZS1oZWlnaHQteHMpO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLWx1bW8tc2l6ZS1tKTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8qIFNlbGVjdGFibGUgaXRlbXMgaGF2ZSBhIGNoZWNrbWFyayBpY29uICovXG4gICAgICA6aG9zdChbdGFiaW5kZXhdKTo6YmVmb3JlIHtcbiAgICAgICAgZGlzcGxheTogdmFyKC0tX2x1bW8taXRlbS1zZWxlY3RlZC1pY29uLWRpc3BsYXksIG5vbmUpO1xuICAgICAgICBjb250ZW50OiB2YXIoLS1sdW1vLWljb25zLWNoZWNrbWFyayk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBsdW1vLWljb25zO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWx1bW8taWNvbi1zaXplLW0pO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIG1hcmdpbjogY2FsYygoMSAtIHZhcigtLWx1bW8tbGluZS1oZWlnaHQteHMpKSAqIHZhcigtLWx1bW8tZm9udC1zaXplLW0pIC8gMikgMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgY3ViaWMtYmV6aWVyKC4xMiwgLjMyLCAuNTQsIDIpLCBvcGFjaXR5IDAuMXM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzZWxlY3RlZF0pOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbYWN0aXZlXTpub3QoW3NlbGVjdGVkXSkpOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNvbnRlbnRcIl0ge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAvKiBEaXNhYmxlZCBpdGVtICovXG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWx1bW8tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNsb3R0ZWQgaWNvbnMgKi9cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKGlyb24taWNvbikge1xuICAgICAgICB3aWR0aDogdmFyKC0tbHVtby1pY29uLXNpemUtbSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tbHVtby1pY29uLXNpemUtbSk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWl0ZW0tc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi1pdGVtLmpzJztcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbHVtby1zdHlsZXMvbWl4aW5zL292ZXJsYXkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJsdW1vLXZhYWRpbi1vdmVybGF5XCIgdGhlbWUtZm9yPVwidmFhZGluLW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibHVtby1vdmVybGF5XCI+XG4gICAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1lbXB0eS1zb3VyY2UgKi9cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tb3ZlcmxheS1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLW92ZXJsYXkuanMnO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4TkE7QUFDQTtBQXFDQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBbkZBO0FBc0ZBO0FBT0E7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUEzQkE7QUE2QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZxREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9QQTs7Ozs7QUFLQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZFQTtBQUFBO0FBQUE7QUF5RUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJGQTtBQUFBO0FBQUE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTtBQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTtBQUFBO0FBQUE7QUFzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqSEE7QUFBQTtBQUFBO0FBbUhBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXZKQTtBQUFBO0FBQUE7QUEwSkE7QUFDQTtBQUVBOzs7O0FBN0pBO0FBQUE7QUFBQTtBQWlLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9LQTtBQUFBO0FBQUE7QUFpTEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdkxBO0FBQUE7QUFBQTtBQTBMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9MQTtBQUFBO0FBQUE7QUFpTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBck1BO0FBQUE7QUFBQTtBQXdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNU1BO0FBQUE7QUFBQTtBQStNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQTdOQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBM0NBO0FBZ0RBO0FBbkRBO0FBQUE7QUFBQTtBQXNEQTtBQU1BO0FBNURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7O0FBa0hBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBakRBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBL1hBO0FBQ0E7QUE0QkE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBckVBO0FBdUVBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoSEE7QUFDQTtBQXFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsY0E7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFWQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBYUE7QUFFQTs7Ozs7OztBQU1BOzs7Ozs7O0FBRUE7QUFDQTtBQWNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQTdCQTtBQStCQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUF0TUE7QUFDQTtBQXdNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4UEE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Ozs7Ozs7Ozs7QUFvRkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBNUlBO0FBQ0E7QUFZQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQWhEQTtBQWtEQTs7O0FBRUE7QUFDQTtBQVFBOzs7O0FBbEZBO0FBQ0E7QUErSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakxBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTs7Ozs7OztBQUtBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFqQkE7QUFDQTtBQUNBOzs7QUFpQkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBN0VBO0FBQ0E7QUErRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0lBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUErTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7QUExUEE7QUFBQTtBQUFBO0FBOFBBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWpRQTtBQUFBO0FBQUE7QUFvUUE7QUFBQTtBQUFBO0FBQ0E7QUFyUUE7QUFBQTtBQUFBO0FBd1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdRQTtBQUFBO0FBQUE7QUFnUkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUF6UkE7QUFBQTtBQUFBO0FBNlJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQW5TQTtBQUFBO0FBQUE7QUF1U0E7QUFDQTtBQXhTQTtBQUFBO0FBQUE7QUEyU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWhVQTtBQUFBO0FBQUE7QUFtVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeFVBO0FBQUE7QUFBQTtBQTJVQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUE1VkE7QUFBQTtBQUFBO0FBaVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcFhBO0FBQUE7QUFBQTtBQXVYQTtBQUNBO0FBeFhBO0FBQUE7QUFBQTtBQTJYQTtBQUNBO0FBNVhBO0FBQUE7QUFBQTtBQStYQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBcFlBO0FBQUE7QUFBQTtBQXVZQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9ZQTtBQUFBO0FBQUE7QUFrWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9aQTtBQUFBO0FBQUE7QUFpYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTVhQTtBQUFBO0FBQUE7QUErYUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTliQTtBQUFBO0FBQUE7QUFpY0E7QUFDQTtBQUNBO0FBQ0E7QUFwY0E7QUFBQTtBQUFBO0FBdWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTNjQTtBQUFBO0FBQUE7QUE4Y0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXRkQTtBQUFBO0FBQUE7QUF5ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbmVBO0FBQUE7QUFBQTtBQXNlQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBNWVBO0FBQUE7QUFBQTtBQWdmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBM2ZBO0FBQUE7QUFBQTtBQStmQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFuZ0JBO0FBQUE7QUFBQTtBQXFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQTdoQkE7QUFBQTtBQUFBO0FBaWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeGtCQTtBQUFBO0FBQ0E7QUE2a0JBOzs7QUE5a0JBO0FBa2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXZsQkE7QUFBQTtBQUFBO0FBMGxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRtQkE7QUFBQTtBQUFBO0FBeW1CQTtBQUNBO0FBQ0E7QUFDQTtBQTVtQkE7QUFBQTtBQUFBO0FBK21CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTFuQkE7QUFBQTtBQUFBO0FBNm5CQTtBQUNBO0FBQ0E7QUFDQTtBQWhvQkE7QUFBQTtBQUFBO0FBbW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBem9CQTtBQUFBO0FBQUE7QUE0b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpwQkE7QUFBQTtBQUFBO0FBb3BCQTtBQUNBO0FBcnBCQTtBQUFBO0FBQUE7QUF3cEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdwQkE7QUFBQTtBQUFBO0FBZ3FCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNXJCQTtBQUFBO0FBQUE7QUErckJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFydEJBO0FBQUE7QUFBQTtBQXd0QkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE1dEJBO0FBQUE7QUFBQTtBQTh0QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbHVCQTtBQUFBO0FBQUE7QUFxdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFudkJBO0FBQUE7QUFBQTtBQXN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXB3QkE7QUFBQTtBQUFBO0FBc3dCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoeEJBO0FBQUE7QUFBQTtBQW14QkE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBL3hCQTtBQUFBO0FBQUE7QUFreUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZ5QkE7QUFBQTtBQUFBO0FBeXlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQW56QkE7QUFBQTtBQUFBO0FBc3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFqMEJBO0FBQUE7QUFBQTtBQXUwQkE7QUFDQTtBQXgwQkE7QUFBQTtBQUFBO0FBMjBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7O0FBOTFCQTtBQUFBO0FBQUE7QUFvMkJBO0FBQ0E7QUFFQTs7Ozs7O0FBdjJCQTtBQUFBO0FBQUE7QUE2MkJBO0FBQ0E7QUFDQTtBQUNBO0FBaDNCQTtBQUFBO0FBQUE7QUE0M0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQTc0QkE7QUFBQTtBQUFBO0FBZzVCQTtBQUFBO0FBQUE7QUFDQTtBQWo1QkE7QUFBQTtBQUFBO0FBbzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMTVCQTtBQUFBO0FBQUE7QUE2NUJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFuNkJBO0FBQUE7QUFBQTtBQXM2QkE7QUFDQTtBQXY2QkE7QUFBQTtBQUFBO0FBMDZCQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7Ozs7O0FBUUE7Ozs7OztBQU1BOzs7Ozs7QUFuOEJBO0FBQUE7QUFBQTtBQTJrQkE7QUFDQTtBQTVrQkE7QUFBQTtBQUFBO0FBbTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQXozQkE7QUFBQTtBQUFBO0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUE1TEE7QUE4TEE7QUFqTUE7QUFBQTtBQUFBO0FBb01BO0FBU0E7QUE3TUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW1GQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQTBDQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBS0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUEvQkE7QUFpQ0E7QUFuQ0E7QUFDQTtBQW9DQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFJQTtBQVBBO0FBUUE7QUFDQTtBQTlDQTtBQUFBO0FBQUE7QUF1REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7OztBQTdFQTtBQUFBO0FBQUE7QUFpRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBekZBO0FBQUE7QUFBQTtBQTRGQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTtBQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkdBO0FBQUE7QUFBQTtBQTBHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXBIQTtBQUFBO0FBQUE7QUF1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUhBO0FBQUE7QUFBQTtBQStIQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFuSUE7QUFBQTtBQUFBO0FBc0lBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTFJQTtBQUFBO0FBQUE7QUFnREE7QUFDQTtBQWpEQTtBQW9EQTtBQUNBO0FBckRBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFjQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUF4QkE7QUFDQTtBQTBCQTs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWtFQTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBUUE7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9