(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~ha-store-auth-card~more-info-dialog~panel-kiosk~panel-lovelace~panel-map~panel-states"],{

/***/ "./node_modules/@polymer/iron-image/iron-image.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/iron-image/iron-image.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/resolve-url.js */ "./node_modules/@polymer/polymer/lib/utils/resolve-url.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        overflow: hidden;\n        position: relative;\n      }\n\n      #baseURIAnchor {\n        display: none;\n      }\n\n      #sizedImgDiv {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        display: none;\n      }\n\n      #img {\n        display: block;\n        width: var(--iron-image-width, auto);\n        height: var(--iron-image-height, auto);\n      }\n\n      :host([sizing]) #sizedImgDiv {\n        display: block;\n      }\n\n      :host([sizing]) #img {\n        display: none;\n      }\n\n      #placeholder {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        bottom: 0px;\n        left: 0px;\n\n        background-color: inherit;\n        opacity: 1;\n\n        @apply --iron-image-placeholder;\n      }\n\n      #placeholder.faded-out {\n        transition: opacity 0.5s linear;\n        opacity: 0;\n      }\n    </style>\n\n    <a id=\"baseURIAnchor\" href=\"#\"></a>\n    <div id=\"sizedImgDiv\" role=\"img\" hidden$=\"[[_computeImgDivHidden(sizing)]]\" aria-hidden$=\"[[_computeImgDivARIAHidden(alt)]]\" aria-label$=\"[[_computeImgDivARIALabel(alt, src)]]\"></div>\n    <img id=\"img\" alt$=\"[[alt]]\" hidden$=\"[[_computeImgHidden(sizing)]]\" crossorigin$=\"[[crossorigin]]\" on-load=\"_imgOnLoad\" on-error=\"_imgOnError\">\n    <div id=\"placeholder\" hidden$=\"[[_computePlaceholderHidden(preload, fade, loading, loaded)]]\" class$=\"[[_computePlaceholderClassName(preload, fade, loading, loaded)]]\"></div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/




/**
`iron-image` is an element for displaying an image that provides useful sizing and
preloading options not found on the standard `<img>` tag.

The `sizing` option allows the image to be either cropped (`cover`) or
letterboxed (`contain`) to fill a fixed user-size placed on the element.

The `preload` option prevents the browser from rendering the image until the
image is fully loaded.  In the interim, either the element's CSS `background-color`
can be be used as the placeholder, or the `placeholder` property can be
set to a URL (preferably a data-URI, for instant rendering) for an
placeholder image.

The `fade` option (only valid when `preload` is set) will cause the placeholder
image/color to be faded out once the image is rendered.

Examples:

  Basically identical to `<img src="...">` tag:

    <iron-image src="http://lorempixel.com/400/400"></iron-image>

  Will letterbox the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="contain"
      src="http://lorempixel.com/600/400"></iron-image>

  Will crop the image to fit:

    <iron-image style="width:400px; height:400px;" sizing="cover"
      src="http://lorempixel.com/600/400"></iron-image>

  Will show light-gray background until the image loads:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will show a base-64 encoded placeholder image until the image loads:

    <iron-image style="width:400px; height:400px;" placeholder="data:image/gif;base64,..."
      sizing="cover" preload src="http://lorempixel.com/600/400"></iron-image>

  Will fade the light-gray background out once the image is loaded:

    <iron-image style="width:400px; height:400px; background-color: lightgray;"
      sizing="cover" preload fade src="http://lorempixel.com/600/400"></iron-image>

Custom property | Description | Default
----------------|-------------|----------
`--iron-image-placeholder` | Mixin applied to #placeholder | `{}`
`--iron-image-width` | Sets the width of the wrapped image | `auto`
`--iron-image-height` | Sets the height of the wrapped image | `auto`

@group Iron Elements
@element iron-image
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject()),
  is: 'iron-image',
  properties: {
    /**
     * The URL of an image.
     */
    src: {
      type: String,
      value: ''
    },

    /**
     * A short text alternative for the image.
     */
    alt: {
      type: String,
      value: null
    },

    /**
     * CORS enabled images support:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
     */
    crossorigin: {
      type: String,
      value: null
    },

    /**
     * When true, the image is prevented from loading and any placeholder is
     * shown.  This may be useful when a binding to the src property is known to
     * be invalid, to prevent 404 requests.
     */
    preventLoad: {
      type: Boolean,
      value: false
    },

    /**
     * Sets a sizing option for the image.  Valid values are `contain` (full
     * aspect ratio of the image is contained within the element and
     * letterboxed) or `cover` (image is cropped in order to fully cover the
     * bounds of the element), or `null` (default: image takes natural size).
     */
    sizing: {
      type: String,
      value: null,
      reflectToAttribute: true
    },

    /**
     * When a sizing option is used (`cover` or `contain`), this determines
     * how the image is aligned within the element bounds.
     */
    position: {
      type: String,
      value: 'center'
    },

    /**
     * When `true`, any change to the `src` property will cause the
     * `placeholder` image to be shown until the new image has loaded.
     */
    preload: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded.  Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholder: {
      type: String,
      value: null,
      observer: '_placeholderChanged'
    },

    /**
     * When `preload` is true, setting `fade` to true will cause the image to
     * fade into place.
     */
    fade: {
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that is true when the image is loaded.
     */
    loaded: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that tracks the loading state of the image when the
     * `preload` option is used.
     */
    loading: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Read-only value that indicates that the last set `src` failed to load.
     */
    error: {
      notify: true,
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Can be used to set the width of image (e.g. via binding); size may also
     * be set via CSS.
     */
    width: {
      observer: '_widthChanged',
      type: Number,
      value: null
    },

    /**
     * Can be used to set the height of image (e.g. via binding); size may also
     * be set via CSS.
     *
     * @attribute height
     * @type number
     * @default null
     */
    height: {
      observer: '_heightChanged',
      type: Number,
      value: null
    }
  },
  observers: ['_transformChanged(sizing, position)', '_loadStateObserver(src, preventLoad)'],
  created: function created() {
    this._resolvedSrc = '';
  },
  _imgOnLoad: function _imgOnLoad() {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this._setLoading(false);

    this._setLoaded(true);

    this._setError(false);
  },
  _imgOnError: function _imgOnError() {
    if (this.$.img.src !== this._resolveSrc(this.src)) {
      return;
    }

    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    this._setLoading(false);

    this._setLoaded(false);

    this._setError(true);
  },
  _computePlaceholderHidden: function _computePlaceholderHidden() {
    return !this.preload || !this.fade && !this.loading && this.loaded;
  },
  _computePlaceholderClassName: function _computePlaceholderClassName() {
    return this.preload && this.fade && !this.loading && this.loaded ? 'faded-out' : '';
  },
  _computeImgDivHidden: function _computeImgDivHidden() {
    return !this.sizing;
  },
  _computeImgDivARIAHidden: function _computeImgDivARIAHidden() {
    return this.alt === '' ? 'true' : undefined;
  },
  _computeImgDivARIALabel: function _computeImgDivARIALabel() {
    if (this.alt !== null) {
      return this.alt;
    } // Polymer.ResolveUrl.resolveUrl will resolve '' relative to a URL x to
    // that URL x, but '' is the default for src.


    if (this.src === '') {
      return '';
    } // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.


    var resolved = this._resolveSrc(this.src); // Remove query parts, get file name.


    return resolved.replace(/[?|#].*/g, '').split('/').pop();
  },
  _computeImgHidden: function _computeImgHidden() {
    return !!this.sizing;
  },
  _widthChanged: function _widthChanged() {
    this.style.width = isNaN(this.width) ? this.width : this.width + 'px';
  },
  _heightChanged: function _heightChanged() {
    this.style.height = isNaN(this.height) ? this.height : this.height + 'px';
  },
  _loadStateObserver: function _loadStateObserver(src, preventLoad) {
    var newResolvedSrc = this._resolveSrc(src);

    if (newResolvedSrc === this._resolvedSrc) {
      return;
    }

    this._resolvedSrc = '';
    this.$.img.removeAttribute('src');
    this.$.sizedImgDiv.style.backgroundImage = '';

    if (src === '' || preventLoad) {
      this._setLoading(false);

      this._setLoaded(false);

      this._setError(false);
    } else {
      this._resolvedSrc = newResolvedSrc;
      this.$.img.src = this._resolvedSrc;
      this.$.sizedImgDiv.style.backgroundImage = 'url("' + this._resolvedSrc + '")';

      this._setLoading(true);

      this._setLoaded(false);

      this._setError(false);
    }
  },
  _placeholderChanged: function _placeholderChanged() {
    this.$.placeholder.style.backgroundImage = this.placeholder ? 'url("' + this.placeholder + '")' : '';
  },
  _transformChanged: function _transformChanged() {
    var sizedImgDivStyle = this.$.sizedImgDiv.style;
    var placeholderStyle = this.$.placeholder.style;
    sizedImgDivStyle.backgroundSize = placeholderStyle.backgroundSize = this.sizing;
    sizedImgDivStyle.backgroundPosition = placeholderStyle.backgroundPosition = this.sizing ? this.position : '';
    sizedImgDivStyle.backgroundRepeat = placeholderStyle.backgroundRepeat = this.sizing ? 'no-repeat' : '';
  },
  _resolveSrc: function _resolveSrc(testSrc) {
    var resolved = Object(_polymer_polymer_lib_utils_resolve_url_js__WEBPACK_IMPORTED_MODULE_3__["resolveUrl"])(testSrc, this.$.baseURIAnchor.href); // NOTE: Use of `URL` was removed here because IE11 doesn't support
    // constructing it. If this ends up being problematic, we should
    // consider reverting and adding the URL polyfill as a dev dependency.

    if (resolved.length >= 2 && resolved[0] === '/' && resolved[1] !== '/') {
      // In IE location.origin might not work
      // https://connect.microsoft.com/IE/feedback/details/1763802/location-origin-is-undefined-in-ie-11-on-windows-10-but-works-on-windows-7
      resolved = (location.origin || location.protocol + '//' + location.host) + resolved;
    }

    return resolved;
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35oYS1zdG9yZS1hdXRoLWNhcmR+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1raW9za35wYW5lbC1sb3ZlbGFjZX5wYW5lbC1tYXB+cGFuZWwtc3RhdGVzLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taW1hZ2UvaXJvbi1pbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7cmVzb2x2ZVVybH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVzb2x2ZS11cmwuanMnO1xuXG4vKipcbmBpcm9uLWltYWdlYCBpcyBhbiBlbGVtZW50IGZvciBkaXNwbGF5aW5nIGFuIGltYWdlIHRoYXQgcHJvdmlkZXMgdXNlZnVsIHNpemluZyBhbmRcbnByZWxvYWRpbmcgb3B0aW9ucyBub3QgZm91bmQgb24gdGhlIHN0YW5kYXJkIGA8aW1nPmAgdGFnLlxuXG5UaGUgYHNpemluZ2Agb3B0aW9uIGFsbG93cyB0aGUgaW1hZ2UgdG8gYmUgZWl0aGVyIGNyb3BwZWQgKGBjb3ZlcmApIG9yXG5sZXR0ZXJib3hlZCAoYGNvbnRhaW5gKSB0byBmaWxsIGEgZml4ZWQgdXNlci1zaXplIHBsYWNlZCBvbiB0aGUgZWxlbWVudC5cblxuVGhlIGBwcmVsb2FkYCBvcHRpb24gcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSByZW5kZXJpbmcgdGhlIGltYWdlIHVudGlsIHRoZVxuaW1hZ2UgaXMgZnVsbHkgbG9hZGVkLiAgSW4gdGhlIGludGVyaW0sIGVpdGhlciB0aGUgZWxlbWVudCdzIENTUyBgYmFja2dyb3VuZC1jb2xvcmBcbmNhbiBiZSBiZSB1c2VkIGFzIHRoZSBwbGFjZWhvbGRlciwgb3IgdGhlIGBwbGFjZWhvbGRlcmAgcHJvcGVydHkgY2FuIGJlXG5zZXQgdG8gYSBVUkwgKHByZWZlcmFibHkgYSBkYXRhLVVSSSwgZm9yIGluc3RhbnQgcmVuZGVyaW5nKSBmb3IgYW5cbnBsYWNlaG9sZGVyIGltYWdlLlxuXG5UaGUgYGZhZGVgIG9wdGlvbiAob25seSB2YWxpZCB3aGVuIGBwcmVsb2FkYCBpcyBzZXQpIHdpbGwgY2F1c2UgdGhlIHBsYWNlaG9sZGVyXG5pbWFnZS9jb2xvciB0byBiZSBmYWRlZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgcmVuZGVyZWQuXG5cbkV4YW1wbGVzOlxuXG4gIEJhc2ljYWxseSBpZGVudGljYWwgdG8gYDxpbWcgc3JjPVwiLi4uXCI+YCB0YWc6XG5cbiAgICA8aXJvbi1pbWFnZSBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNDAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGxldHRlcmJveCB0aGUgaW1hZ2UgdG8gZml0OlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4O1wiIHNpemluZz1cImNvbnRhaW5cIlxuICAgICAgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBjcm9wIHRoZSBpbWFnZSB0byBmaXQ6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgc2l6aW5nPVwiY292ZXJcIlxuICAgICAgc3JjPVwiaHR0cDovL2xvcmVtcGl4ZWwuY29tLzYwMC80MDBcIj48L2lyb24taW1hZ2U+XG5cbiAgV2lsbCBzaG93IGxpZ2h0LWdyYXkgYmFja2dyb3VuZCB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7IGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcIlxuICAgICAgc2l6aW5nPVwiY292ZXJcIiBwcmVsb2FkIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG4gIFdpbGwgc2hvdyBhIGJhc2UtNjQgZW5jb2RlZCBwbGFjZWhvbGRlciBpbWFnZSB1bnRpbCB0aGUgaW1hZ2UgbG9hZHM6XG5cbiAgICA8aXJvbi1pbWFnZSBzdHlsZT1cIndpZHRoOjQwMHB4OyBoZWlnaHQ6NDAwcHg7XCIgcGxhY2Vob2xkZXI9XCJkYXRhOmltYWdlL2dpZjtiYXNlNjQsLi4uXCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBzcmM9XCJodHRwOi8vbG9yZW1waXhlbC5jb20vNjAwLzQwMFwiPjwvaXJvbi1pbWFnZT5cblxuICBXaWxsIGZhZGUgdGhlIGxpZ2h0LWdyYXkgYmFja2dyb3VuZCBvdXQgb25jZSB0aGUgaW1hZ2UgaXMgbG9hZGVkOlxuXG4gICAgPGlyb24taW1hZ2Ugc3R5bGU9XCJ3aWR0aDo0MDBweDsgaGVpZ2h0OjQwMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XCJcbiAgICAgIHNpemluZz1cImNvdmVyXCIgcHJlbG9hZCBmYWRlIHNyYz1cImh0dHA6Ly9sb3JlbXBpeGVsLmNvbS82MDAvNDAwXCI+PC9pcm9uLWltYWdlPlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1pcm9uLWltYWdlLXBsYWNlaG9sZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gI3BsYWNlaG9sZGVyIHwgYHt9YFxuYC0taXJvbi1pbWFnZS13aWR0aGAgfCBTZXRzIHRoZSB3aWR0aCBvZiB0aGUgd3JhcHBlZCBpbWFnZSB8IGBhdXRvYFxuYC0taXJvbi1pbWFnZS1oZWlnaHRgIHwgU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVkIGltYWdlIHwgYGF1dG9gXG5cbkBncm91cCBJcm9uIEVsZW1lbnRzXG5AZWxlbWVudCBpcm9uLWltYWdlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICNiYXNlVVJJQW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgI3NpemVkSW1nRGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcblxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1pcm9uLWltYWdlLXdpZHRoLCBhdXRvKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWltYWdlLWhlaWdodCwgYXV0byk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaXppbmddKSAjc2l6ZWRJbWdEaXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3NpemluZ10pICNpbWcge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAjcGxhY2Vob2xkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgICAgQGFwcGx5IC0taXJvbi1pbWFnZS1wbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgI3BsYWNlaG9sZGVyLmZhZGVkLW91dCB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxhIGlkPVwiYmFzZVVSSUFuY2hvclwiIGhyZWY9XCIjXCI+PC9hPlxuICAgIDxkaXYgaWQ9XCJzaXplZEltZ0RpdlwiIHJvbGU9XCJpbWdcIiBoaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0RpdkhpZGRlbihzaXppbmcpXV1cIiBhcmlhLWhpZGRlbiQ9XCJbW19jb21wdXRlSW1nRGl2QVJJQUhpZGRlbihhbHQpXV1cIiBhcmlhLWxhYmVsJD1cIltbX2NvbXB1dGVJbWdEaXZBUklBTGFiZWwoYWx0LCBzcmMpXV1cIj48L2Rpdj5cbiAgICA8aW1nIGlkPVwiaW1nXCIgYWx0JD1cIltbYWx0XV1cIiBoaWRkZW4kPVwiW1tfY29tcHV0ZUltZ0hpZGRlbihzaXppbmcpXV1cIiBjcm9zc29yaWdpbiQ9XCJbW2Nyb3Nzb3JpZ2luXV1cIiBvbi1sb2FkPVwiX2ltZ09uTG9hZFwiIG9uLWVycm9yPVwiX2ltZ09uRXJyb3JcIj5cbiAgICA8ZGl2IGlkPVwicGxhY2Vob2xkZXJcIiBoaWRkZW4kPVwiW1tfY29tcHV0ZVBsYWNlaG9sZGVySGlkZGVuKHByZWxvYWQsIGZhZGUsIGxvYWRpbmcsIGxvYWRlZCldXVwiIGNsYXNzJD1cIltbX2NvbXB1dGVQbGFjZWhvbGRlckNsYXNzTmFtZShwcmVsb2FkLCBmYWRlLCBsb2FkaW5nLCBsb2FkZWQpXV1cIj48L2Rpdj5cbmAsXG5cbiAgaXM6ICdpcm9uLWltYWdlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIFVSTCBvZiBhbiBpbWFnZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG5cbiAgICAvKipcbiAgICAgKiBBIHNob3J0IHRleHQgYWx0ZXJuYXRpdmUgZm9yIHRoZSBpbWFnZS5cbiAgICAgKi9cbiAgICBhbHQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIENPUlMgZW5hYmxlZCBpbWFnZXMgc3VwcG9ydDpcbiAgICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZVxuICAgICAqL1xuICAgIGNyb3Nzb3JpZ2luOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBpbWFnZSBpcyBwcmV2ZW50ZWQgZnJvbSBsb2FkaW5nIGFuZCBhbnkgcGxhY2Vob2xkZXIgaXNcbiAgICAgKiBzaG93bi4gIFRoaXMgbWF5IGJlIHVzZWZ1bCB3aGVuIGEgYmluZGluZyB0byB0aGUgc3JjIHByb3BlcnR5IGlzIGtub3duIHRvXG4gICAgICogYmUgaW52YWxpZCwgdG8gcHJldmVudCA0MDQgcmVxdWVzdHMuXG4gICAgICovXG4gICAgcHJldmVudExvYWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBhIHNpemluZyBvcHRpb24gZm9yIHRoZSBpbWFnZS4gIFZhbGlkIHZhbHVlcyBhcmUgYGNvbnRhaW5gIChmdWxsXG4gICAgICogYXNwZWN0IHJhdGlvIG9mIHRoZSBpbWFnZSBpcyBjb250YWluZWQgd2l0aGluIHRoZSBlbGVtZW50IGFuZFxuICAgICAqIGxldHRlcmJveGVkKSBvciBgY292ZXJgIChpbWFnZSBpcyBjcm9wcGVkIGluIG9yZGVyIHRvIGZ1bGx5IGNvdmVyIHRoZVxuICAgICAqIGJvdW5kcyBvZiB0aGUgZWxlbWVudCksIG9yIGBudWxsYCAoZGVmYXVsdDogaW1hZ2UgdGFrZXMgbmF0dXJhbCBzaXplKS5cbiAgICAgKi9cbiAgICBzaXppbmc6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhIHNpemluZyBvcHRpb24gaXMgdXNlZCAoYGNvdmVyYCBvciBgY29udGFpbmApLCB0aGlzIGRldGVybWluZXNcbiAgICAgKiBob3cgdGhlIGltYWdlIGlzIGFsaWduZWQgd2l0aGluIHRoZSBlbGVtZW50IGJvdW5kcy5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdjZW50ZXInfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBgc3JjYCBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZVxuICAgICAqIGBwbGFjZWhvbGRlcmAgaW1hZ2UgdG8gYmUgc2hvd24gdW50aWwgdGhlIG5ldyBpbWFnZSBoYXMgbG9hZGVkLlxuICAgICAqL1xuICAgIHByZWxvYWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBpbWFnZSB3aWxsIGJlIHVzZWQgYXMgYSBiYWNrZ3JvdW5kL3BsYWNlaG9sZGVyIHVudGlsIHRoZSBzcmMgaW1hZ2VcbiAgICAgKiBoYXMgbG9hZGVkLiAgVXNlIG9mIGEgZGF0YS1VUkkgZm9yIHBsYWNlaG9sZGVyIGlzIGVuY291cmFnZWQgZm9yIGluc3RhbnRcbiAgICAgKiByZW5kZXJpbmcuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsLCBvYnNlcnZlcjogJ19wbGFjZWhvbGRlckNoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHByZWxvYWRgIGlzIHRydWUsIHNldHRpbmcgYGZhZGVgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGUgaW1hZ2UgdG9cbiAgICAgKiBmYWRlIGludG8gcGxhY2UuXG4gICAgICovXG4gICAgZmFkZToge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZWFkLW9ubHkgdmFsdWUgdGhhdCBpcyB0cnVlIHdoZW4gdGhlIGltYWdlIGlzIGxvYWRlZC5cbiAgICAgKi9cbiAgICBsb2FkZWQ6IHtub3RpZnk6IHRydWUsIHJlYWRPbmx5OiB0cnVlLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogUmVhZC1vbmx5IHZhbHVlIHRoYXQgdHJhY2tzIHRoZSBsb2FkaW5nIHN0YXRlIG9mIHRoZSBpbWFnZSB3aGVuIHRoZVxuICAgICAqIGBwcmVsb2FkYCBvcHRpb24gaXMgdXNlZC5cbiAgICAgKi9cbiAgICBsb2FkaW5nOiB7bm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZSwgdHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFJlYWQtb25seSB2YWx1ZSB0aGF0IGluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHNldCBgc3JjYCBmYWlsZWQgdG8gbG9hZC5cbiAgICAgKi9cbiAgICBlcnJvcjoge25vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWUsIHR5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIHdpZHRoIG9mIGltYWdlIChlLmcuIHZpYSBiaW5kaW5nKTsgc2l6ZSBtYXkgYWxzb1xuICAgICAqIGJlIHNldCB2aWEgQ1NTLlxuICAgICAqL1xuICAgIHdpZHRoOiB7b2JzZXJ2ZXI6ICdfd2lkdGhDaGFuZ2VkJywgdHlwZTogTnVtYmVyLCB2YWx1ZTogbnVsbH0sXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgdXNlZCB0byBzZXQgdGhlIGhlaWdodCBvZiBpbWFnZSAoZS5nLiB2aWEgYmluZGluZyk7IHNpemUgbWF5IGFsc29cbiAgICAgKiBiZSBzZXQgdmlhIENTUy5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgaGVpZ2h0XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIGhlaWdodDoge29ic2VydmVyOiAnX2hlaWdodENoYW5nZWQnLCB0eXBlOiBOdW1iZXIsIHZhbHVlOiBudWxsfSxcbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX3RyYW5zZm9ybUNoYW5nZWQoc2l6aW5nLCBwb3NpdGlvbiknLFxuICAgICdfbG9hZFN0YXRlT2JzZXJ2ZXIoc3JjLCBwcmV2ZW50TG9hZCknXG4gIF0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVzb2x2ZWRTcmMgPSAnJztcbiAgfSxcblxuICBfaW1nT25Mb2FkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy4kLmltZy5zcmMgIT09IHRoaXMuX3Jlc29sdmVTcmModGhpcy5zcmMpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgdGhpcy5fc2V0TG9hZGVkKHRydWUpO1xuICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgfSxcblxuICBfaW1nT25FcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuJC5pbWcuc3JjICE9PSB0aGlzLl9yZXNvbHZlU3JjKHRoaXMuc3JjKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJC5pbWcucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICB0aGlzLiQuc2l6ZWRJbWdEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cbiAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB0aGlzLl9zZXRMb2FkZWQoZmFsc2UpO1xuICAgIHRoaXMuX3NldEVycm9yKHRydWUpO1xuICB9LFxuXG4gIF9jb21wdXRlUGxhY2Vob2xkZXJIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5wcmVsb2FkIHx8ICghdGhpcy5mYWRlICYmICF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpO1xuICB9LFxuXG4gIF9jb21wdXRlUGxhY2Vob2xkZXJDbGFzc05hbWU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5wcmVsb2FkICYmIHRoaXMuZmFkZSAmJiAhdGhpcy5sb2FkaW5nICYmIHRoaXMubG9hZGVkKSA/XG4gICAgICAgICdmYWRlZC1vdXQnIDpcbiAgICAgICAgJyc7XG4gIH0sXG5cbiAgX2NvbXB1dGVJbWdEaXZIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhdGhpcy5zaXppbmc7XG4gIH0sXG5cbiAgX2NvbXB1dGVJbWdEaXZBUklBSGlkZGVuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbHQgPT09ICcnID8gJ3RydWUnIDogdW5kZWZpbmVkO1xuICB9LFxuXG4gIF9jb21wdXRlSW1nRGl2QVJJQUxhYmVsOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5hbHQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsdDtcbiAgICB9XG5cbiAgICAvLyBQb2x5bWVyLlJlc29sdmVVcmwucmVzb2x2ZVVybCB3aWxsIHJlc29sdmUgJycgcmVsYXRpdmUgdG8gYSBVUkwgeCB0b1xuICAgIC8vIHRoYXQgVVJMIHgsIGJ1dCAnJyBpcyB0aGUgZGVmYXVsdCBmb3Igc3JjLlxuICAgIGlmICh0aGlzLnNyYyA9PT0gJycpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyBOT1RFOiBVc2Ugb2YgYFVSTGAgd2FzIHJlbW92ZWQgaGVyZSBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0XG4gICAgLy8gY29uc3RydWN0aW5nIGl0LiBJZiB0aGlzIGVuZHMgdXAgYmVpbmcgcHJvYmxlbWF0aWMsIHdlIHNob3VsZFxuICAgIC8vIGNvbnNpZGVyIHJldmVydGluZyBhbmQgYWRkaW5nIHRoZSBVUkwgcG9seWZpbGwgYXMgYSBkZXYgZGVwZW5kZW5jeS5cbiAgICB2YXIgcmVzb2x2ZWQgPSB0aGlzLl9yZXNvbHZlU3JjKHRoaXMuc3JjKTtcbiAgICAvLyBSZW1vdmUgcXVlcnkgcGFydHMsIGdldCBmaWxlIG5hbWUuXG4gICAgcmV0dXJuIHJlc29sdmVkLnJlcGxhY2UoL1s/fCNdLiovZywgJycpLnNwbGl0KCcvJykucG9wKCk7XG4gIH0sXG5cbiAgX2NvbXB1dGVJbWdIaWRkZW46IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXRoaXMuc2l6aW5nO1xuICB9LFxuXG4gIF93aWR0aENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUud2lkdGggPSBpc05hTih0aGlzLndpZHRoKSA/IHRoaXMud2lkdGggOiB0aGlzLndpZHRoICsgJ3B4JztcbiAgfSxcblxuICBfaGVpZ2h0Q2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBpc05hTih0aGlzLmhlaWdodCkgPyB0aGlzLmhlaWdodCA6IHRoaXMuaGVpZ2h0ICsgJ3B4JztcbiAgfSxcblxuICBfbG9hZFN0YXRlT2JzZXJ2ZXI6IGZ1bmN0aW9uKHNyYywgcHJldmVudExvYWQpIHtcbiAgICB2YXIgbmV3UmVzb2x2ZWRTcmMgPSB0aGlzLl9yZXNvbHZlU3JjKHNyYyk7XG4gICAgaWYgKG5ld1Jlc29sdmVkU3JjID09PSB0aGlzLl9yZXNvbHZlZFNyYykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gJyc7XG4gICAgdGhpcy4kLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblxuICAgIGlmIChzcmMgPT09ICcnIHx8IHByZXZlbnRMb2FkKSB7XG4gICAgICB0aGlzLl9zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRoaXMuX3NldExvYWRlZChmYWxzZSk7XG4gICAgICB0aGlzLl9zZXRFcnJvcihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc29sdmVkU3JjID0gbmV3UmVzb2x2ZWRTcmM7XG4gICAgICB0aGlzLiQuaW1nLnNyYyA9IHRoaXMuX3Jlc29sdmVkU3JjO1xuICAgICAgdGhpcy4kLnNpemVkSW1nRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgICAgJ3VybChcIicgKyB0aGlzLl9yZXNvbHZlZFNyYyArICdcIiknO1xuXG4gICAgICB0aGlzLl9zZXRMb2FkaW5nKHRydWUpO1xuICAgICAgdGhpcy5fc2V0TG9hZGVkKGZhbHNlKTtcbiAgICAgIHRoaXMuX3NldEVycm9yKGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgX3BsYWNlaG9sZGVyQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLnBsYWNlaG9sZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPyAndXJsKFwiJyArIHRoaXMucGxhY2Vob2xkZXIgKyAnXCIpJyA6ICcnO1xuICB9LFxuXG4gIF90cmFuc2Zvcm1DaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2l6ZWRJbWdEaXZTdHlsZSA9IHRoaXMuJC5zaXplZEltZ0Rpdi5zdHlsZTtcbiAgICB2YXIgcGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMuJC5wbGFjZWhvbGRlci5zdHlsZTtcblxuICAgIHNpemVkSW1nRGl2U3R5bGUuYmFja2dyb3VuZFNpemUgPSBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRTaXplID1cbiAgICAgICAgdGhpcy5zaXppbmc7XG5cbiAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IHBsYWNlaG9sZGVyU3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID1cbiAgICAgICAgdGhpcy5zaXppbmcgPyB0aGlzLnBvc2l0aW9uIDogJyc7XG5cbiAgICBzaXplZEltZ0RpdlN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBwbGFjZWhvbGRlclN0eWxlLmJhY2tncm91bmRSZXBlYXQgPVxuICAgICAgICB0aGlzLnNpemluZyA/ICduby1yZXBlYXQnIDogJyc7XG4gIH0sXG5cbiAgX3Jlc29sdmVTcmM6IGZ1bmN0aW9uKHRlc3RTcmMpIHtcbiAgICB2YXIgcmVzb2x2ZWQgPSByZXNvbHZlVXJsKHRlc3RTcmMsIHRoaXMuJC5iYXNlVVJJQW5jaG9yLmhyZWYpO1xuICAgIC8vIE5PVEU6IFVzZSBvZiBgVVJMYCB3YXMgcmVtb3ZlZCBoZXJlIGJlY2F1c2UgSUUxMSBkb2Vzbid0IHN1cHBvcnRcbiAgICAvLyBjb25zdHJ1Y3RpbmcgaXQuIElmIHRoaXMgZW5kcyB1cCBiZWluZyBwcm9ibGVtYXRpYywgd2Ugc2hvdWxkXG4gICAgLy8gY29uc2lkZXIgcmV2ZXJ0aW5nIGFuZCBhZGRpbmcgdGhlIFVSTCBwb2x5ZmlsbCBhcyBhIGRldiBkZXBlbmRlbmN5LlxuICAgIGlmIChyZXNvbHZlZC5sZW5ndGggPj0gMiAmJiByZXNvbHZlZFswXSA9PT0gJy8nICYmIHJlc29sdmVkWzFdICE9PSAnLycpIHtcbiAgICAgIC8vIEluIElFIGxvY2F0aW9uLm9yaWdpbiBtaWdodCBub3Qgd29ya1xuICAgICAgLy8gaHR0cHM6Ly9jb25uZWN0Lm1pY3Jvc29mdC5jb20vSUUvZmVlZGJhY2svZGV0YWlscy8xNzYzODAyL2xvY2F0aW9uLW9yaWdpbi1pcy11bmRlZmluZWQtaW4taWUtMTEtb24td2luZG93cy0xMC1idXQtd29ya3Mtb24td2luZG93cy03XG4gICAgICByZXNvbHZlZCA9IChsb2NhdGlvbi5vcmlnaW4gfHwgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCkgK1xuICAgICAgICAgIHJlc29sdmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTtBQUNBO0FBNkRBO0FBRUE7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkZBO0FBMEZBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBcFNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=