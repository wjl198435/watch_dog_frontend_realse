(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~panel-config-automation~panel-config-devices~panel-config-integrations~panel-config-script~p~227a5ab6"],{

/***/ "./node_modules/@polymer/app-route/app-route.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/app-route/app-route.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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


/**
`app-route` is an element that enables declarative, self-describing routing
for a web app.

In its typical usage, a `app-route` element consumes an object that describes
some state about the current route, via the `route` property. It then parses
that state using the `pattern` property, and produces two artifacts: some `data`
related to the `route`, and a `tail` that contains the rest of the `route` that
did not match.

Here is a basic example, when used with `app-location`:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{data}}"
        tail="{{tail}}">
    </app-route>

In the above example, the `app-location` produces a `route` value. Then, the
`route.path` property is matched by comparing it to the `pattern` property. If
the `pattern` property matches `route.path`, the `app-route` will set or update
its `data` property with an object whose properties correspond to the parameters
in `pattern`. So, in the above example, if `route.path` was `'/about'`, the
value of `data` would be `{"page": "about"}`.

The `tail` property represents the remaining part of the route state after the
`pattern` has been applied to a matching `route`.

Here is another example, where `tail` is used:

    <app-location route="{{route}}"></app-location>
    <app-route
        route="{{route}}"
        pattern="/:page"
        data="{{routeData}}"
        tail="{{subroute}}">
    </app-route>
    <app-route
        route="{{subroute}}"
        pattern="/:id"
        data="{{subrouteData}}">
    </app-route>

In the above example, there are two `app-route` elements. The first
`app-route` consumes a `route`. When the `route` is matched, the first
`app-route` also produces `routeData` from its `data`, and `subroute` from
its `tail`. The second `app-route` consumes the `subroute`, and when it
matches, it produces an object called `subrouteData` from its `data`.

So, when `route.path` is `'/about'`, the `routeData` object will look like
this: `{ page: 'about' }`

And `subrouteData` will be null. However, if `route.path` changes to
`'/article/123'`, the `routeData` object will look like this:
`{ page: 'article' }`

And the `subrouteData` will look like this: `{ id: '123' }`

`app-route` is responsive to bi-directional changes to the `data` objects
they produce. So, if `routeData.page` changed from `'article'` to `'about'`,
the `app-route` will update `route.path`. This in-turn will update the
`app-location`, and cause the global location bar to change its value.

@element app-route
@demo demo/index.html
@demo demo/data-loading-demo.html
@demo demo/simple-demo.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'app-route',
  properties: {
    /**
     * The URL component managed by this element.
     */
    route: {
      type: Object,
      notify: true
    },

    /**
     * The pattern of slash-separated segments to match `route.path` against.
     *
     * For example the pattern "/foo" will match "/foo" or "/foo/bar"
     * but not "/foobar".
     *
     * Path segments like `/:named` are mapped to properties on the `data`
     * object.
     */
    pattern: {
      type: String
    },

    /**
     * The parameterized values that are extracted from the route as
     * described by `pattern`.
     */
    data: {
      type: Object,
      value: function value() {
        return {};
      },
      notify: true
    },

    /**
     * Auto activate route if path empty
     */
    autoActivate: {
      type: Boolean,
      value: false
    },
    _queryParamsUpdating: {
      type: Boolean,
      value: false
    },

    /**
     * @type {?Object}
     */
    queryParams: {
      type: Object,
      value: function value() {
        return {};
      },
      notify: true
    },

    /**
     * The part of `route.path` NOT consumed by `pattern`.
     */
    tail: {
      type: Object,
      value: function value() {
        return {
          path: null,
          prefix: null,
          __queryParams: null
        };
      },
      notify: true
    },

    /**
     * Whether the current route is active. True if `route.path` matches the
     * `pattern`, false otherwise.
     */
    active: {
      type: Boolean,
      notify: true,
      readOnly: true
    },

    /**
     * @type {?string}
     */
    _matched: {
      type: String,
      value: ''
    }
  },
  observers: ['__tryToMatch(route.path, pattern)', '__updatePathOnDataChange(data.*)', '__tailPathChanged(tail.path)', '__routeQueryParamsChanged(route.__queryParams)', '__tailQueryParamsChanged(tail.__queryParams)', '__queryParamsChanged(queryParams.*)'],
  created: function created() {
    this.linkPaths('route.__queryParams', 'tail.__queryParams');
    this.linkPaths('tail.__queryParams', 'route.__queryParams');
  },

  /**
   * Deal with the query params object being assigned to wholesale.
   */
  __routeQueryParamsChanged: function __routeQueryParamsChanged(queryParams) {
    if (queryParams && this.tail) {
      if (this.tail.__queryParams !== queryParams) {
        this.set('tail.__queryParams', queryParams);
      }

      if (!this.active || this._queryParamsUpdating) {
        return;
      } // Copy queryParams and track whether there are any differences compared
      // to the existing query params.


      var copyOfQueryParams = {};
      var anythingChanged = false;

      for (var key in queryParams) {
        copyOfQueryParams[key] = queryParams[key];

        if (anythingChanged || !this.queryParams || queryParams[key] !== this.queryParams[key]) {
          anythingChanged = true;
        }
      } // Need to check whether any keys were deleted


      for (var key in this.queryParams) {
        if (anythingChanged || !(key in queryParams)) {
          anythingChanged = true;
          break;
        }
      }

      if (!anythingChanged) {
        return;
      }

      this._queryParamsUpdating = true;
      this.set('queryParams', copyOfQueryParams);
      this._queryParamsUpdating = false;
    }
  },
  __tailQueryParamsChanged: function __tailQueryParamsChanged(queryParams) {
    if (queryParams && this.route && this.route.__queryParams != queryParams) {
      this.set('route.__queryParams', queryParams);
    }
  },
  __queryParamsChanged: function __queryParamsChanged(changes) {
    if (!this.active || this._queryParamsUpdating) {
      return;
    }

    this.set('route.__' + changes.path, changes.value);
  },
  __resetProperties: function __resetProperties() {
    this._setActive(false);

    this._matched = null;
  },
  __tryToMatch: function __tryToMatch() {
    if (!this.route) {
      return;
    }

    var path = this.route.path;
    var pattern = this.pattern;

    if (this.autoActivate && path === '') {
      path = '/';
    }

    if (!pattern) {
      return;
    }

    if (!path) {
      this.__resetProperties();

      return;
    }

    var remainingPieces = path.split('/');
    var patternPieces = pattern.split('/');
    var matched = [];
    var namedMatches = {};

    for (var i = 0; i < patternPieces.length; i++) {
      var patternPiece = patternPieces[i];

      if (!patternPiece && patternPiece !== '') {
        break;
      }

      var pathPiece = remainingPieces.shift(); // We don't match this path.

      if (!pathPiece && pathPiece !== '') {
        this.__resetProperties();

        return;
      }

      matched.push(pathPiece);

      if (patternPiece.charAt(0) == ':') {
        namedMatches[patternPiece.slice(1)] = pathPiece;
      } else if (patternPiece !== pathPiece) {
        this.__resetProperties();

        return;
      }
    }

    this._matched = matched.join('/'); // Properties that must be updated atomically.

    var propertyUpdates = {}; // this.active

    if (!this.active) {
      propertyUpdates.active = true;
    } // this.tail


    var tailPrefix = this.route.prefix + this._matched;
    var tailPath = remainingPieces.join('/');

    if (remainingPieces.length > 0) {
      tailPath = '/' + tailPath;
    }

    if (!this.tail || this.tail.prefix !== tailPrefix || this.tail.path !== tailPath) {
      propertyUpdates.tail = {
        prefix: tailPrefix,
        path: tailPath,
        __queryParams: this.route.__queryParams
      };
    } // this.data


    propertyUpdates.data = namedMatches;
    this._dataInUrl = {};

    for (var key in namedMatches) {
      this._dataInUrl[key] = namedMatches[key];
    }

    if (this.setProperties) {
      // atomic update
      this.setProperties(propertyUpdates, true);
    } else {
      this.__setMulti(propertyUpdates);
    }
  },
  __tailPathChanged: function __tailPathChanged(path) {
    if (!this.active) {
      return;
    }

    var tailPath = path;
    var newPath = this._matched;

    if (tailPath) {
      if (tailPath.charAt(0) !== '/') {
        tailPath = '/' + tailPath;
      }

      newPath += tailPath;
    }

    this.set('route.path', newPath);
  },
  __updatePathOnDataChange: function __updatePathOnDataChange() {
    if (!this.route || !this.active) {
      return;
    }

    var newPath = this.__getLink({});

    var oldPath = this.__getLink(this._dataInUrl);

    if (newPath === oldPath) {
      return;
    }

    this.set('route.path', newPath);
  },
  __getLink: function __getLink(overrideValues) {
    var values = {
      tail: null
    };

    for (var key in this.data) {
      values[key] = this.data[key];
    }

    for (var key in overrideValues) {
      values[key] = overrideValues[key];
    }

    var patternPieces = this.pattern.split('/');
    var interp = patternPieces.map(function (value) {
      if (value[0] == ':') {
        value = values[value.slice(1)];
      }

      return value;
    }, this);

    if (values.tail && values.tail.path) {
      if (interp.length > 0 && values.tail.path.charAt(0) === '/') {
        interp.push(values.tail.path.slice(1));
      } else {
        interp.push(values.tail.path);
      }
    }

    return interp.join('/');
  },
  __setMulti: function __setMulti(setObj) {
    // HACK(rictic): skirting around 1.0's lack of a setMulti by poking at
    //     internal data structures. I would not advise that you copy this
    //     example.
    //
    //     In the future this will be a feature of Polymer itself.
    //     See: https://github.com/Polymer/polymer/issues/3640
    //
    //     Hacking around with private methods like this is juggling footguns,
    //     and is likely to have unexpected and unsupported rough edges.
    //
    //     Be ye so warned.
    for (var property in setObj) {
      this._propertySetter(property, setObj[property]);
    } // notify in a specific order


    if (setObj.data !== undefined) {
      this._pathEffector('data', this.data);

      this._notifyChange('data');
    }

    if (setObj.active !== undefined) {
      this._pathEffector('active', this.active);

      this._notifyChange('active');
    }

    if (setObj.tail !== undefined) {
      this._pathEffector('tail', this.tail);

      this._notifyChange('tail');
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wYW5lbC1jb25maWctYXV0b21hdGlvbn5wYW5lbC1jb25maWctZGV2aWNlc35wYW5lbC1jb25maWctaW50ZWdyYXRpb25zfnBhbmVsLWNvbmZpZy1zY3JpcHR+cH4yMjdhNWFiNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtcm91dGUvYXBwLXJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5cbi8qKlxuYGFwcC1yb3V0ZWAgaXMgYW4gZWxlbWVudCB0aGF0IGVuYWJsZXMgZGVjbGFyYXRpdmUsIHNlbGYtZGVzY3JpYmluZyByb3V0aW5nXG5mb3IgYSB3ZWIgYXBwLlxuXG5JbiBpdHMgdHlwaWNhbCB1c2FnZSwgYSBgYXBwLXJvdXRlYCBlbGVtZW50IGNvbnN1bWVzIGFuIG9iamVjdCB0aGF0IGRlc2NyaWJlc1xuc29tZSBzdGF0ZSBhYm91dCB0aGUgY3VycmVudCByb3V0ZSwgdmlhIHRoZSBgcm91dGVgIHByb3BlcnR5LiBJdCB0aGVuIHBhcnNlc1xudGhhdCBzdGF0ZSB1c2luZyB0aGUgYHBhdHRlcm5gIHByb3BlcnR5LCBhbmQgcHJvZHVjZXMgdHdvIGFydGlmYWN0czogc29tZSBgZGF0YWBcbnJlbGF0ZWQgdG8gdGhlIGByb3V0ZWAsIGFuZCBhIGB0YWlsYCB0aGF0IGNvbnRhaW5zIHRoZSByZXN0IG9mIHRoZSBgcm91dGVgIHRoYXRcbmRpZCBub3QgbWF0Y2guXG5cbkhlcmUgaXMgYSBiYXNpYyBleGFtcGxlLCB3aGVuIHVzZWQgd2l0aCBgYXBwLWxvY2F0aW9uYDpcblxuICAgIDxhcHAtbG9jYXRpb24gcm91dGU9XCJ7e3JvdXRlfX1cIj48L2FwcC1sb2NhdGlvbj5cbiAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86cGFnZVwiXG4gICAgICAgIGRhdGE9XCJ7e2RhdGF9fVwiXG4gICAgICAgIHRhaWw9XCJ7e3RhaWx9fVwiPlxuICAgIDwvYXBwLXJvdXRlPlxuXG5JbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIGBhcHAtbG9jYXRpb25gIHByb2R1Y2VzIGEgYHJvdXRlYCB2YWx1ZS4gVGhlbiwgdGhlXG5gcm91dGUucGF0aGAgcHJvcGVydHkgaXMgbWF0Y2hlZCBieSBjb21wYXJpbmcgaXQgdG8gdGhlIGBwYXR0ZXJuYCBwcm9wZXJ0eS4gSWZcbnRoZSBgcGF0dGVybmAgcHJvcGVydHkgbWF0Y2hlcyBgcm91dGUucGF0aGAsIHRoZSBgYXBwLXJvdXRlYCB3aWxsIHNldCBvciB1cGRhdGVcbml0cyBgZGF0YWAgcHJvcGVydHkgd2l0aCBhbiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBjb3JyZXNwb25kIHRvIHRoZSBwYXJhbWV0ZXJzXG5pbiBgcGF0dGVybmAuIFNvLCBpbiB0aGUgYWJvdmUgZXhhbXBsZSwgaWYgYHJvdXRlLnBhdGhgIHdhcyBgJy9hYm91dCdgLCB0aGVcbnZhbHVlIG9mIGBkYXRhYCB3b3VsZCBiZSBge1wicGFnZVwiOiBcImFib3V0XCJ9YC5cblxuVGhlIGB0YWlsYCBwcm9wZXJ0eSByZXByZXNlbnRzIHRoZSByZW1haW5pbmcgcGFydCBvZiB0aGUgcm91dGUgc3RhdGUgYWZ0ZXIgdGhlXG5gcGF0dGVybmAgaGFzIGJlZW4gYXBwbGllZCB0byBhIG1hdGNoaW5nIGByb3V0ZWAuXG5cbkhlcmUgaXMgYW5vdGhlciBleGFtcGxlLCB3aGVyZSBgdGFpbGAgaXMgdXNlZDpcblxuICAgIDxhcHAtbG9jYXRpb24gcm91dGU9XCJ7e3JvdXRlfX1cIj48L2FwcC1sb2NhdGlvbj5cbiAgICA8YXBwLXJvdXRlXG4gICAgICAgIHJvdXRlPVwie3tyb3V0ZX19XCJcbiAgICAgICAgcGF0dGVybj1cIi86cGFnZVwiXG4gICAgICAgIGRhdGE9XCJ7e3JvdXRlRGF0YX19XCJcbiAgICAgICAgdGFpbD1cInt7c3Vicm91dGV9fVwiPlxuICAgIDwvYXBwLXJvdXRlPlxuICAgIDxhcHAtcm91dGVcbiAgICAgICAgcm91dGU9XCJ7e3N1YnJvdXRlfX1cIlxuICAgICAgICBwYXR0ZXJuPVwiLzppZFwiXG4gICAgICAgIGRhdGE9XCJ7e3N1YnJvdXRlRGF0YX19XCI+XG4gICAgPC9hcHAtcm91dGU+XG5cbkluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGVyZSBhcmUgdHdvIGBhcHAtcm91dGVgIGVsZW1lbnRzLiBUaGUgZmlyc3RcbmBhcHAtcm91dGVgIGNvbnN1bWVzIGEgYHJvdXRlYC4gV2hlbiB0aGUgYHJvdXRlYCBpcyBtYXRjaGVkLCB0aGUgZmlyc3RcbmBhcHAtcm91dGVgIGFsc28gcHJvZHVjZXMgYHJvdXRlRGF0YWAgZnJvbSBpdHMgYGRhdGFgLCBhbmQgYHN1YnJvdXRlYCBmcm9tXG5pdHMgYHRhaWxgLiBUaGUgc2Vjb25kIGBhcHAtcm91dGVgIGNvbnN1bWVzIHRoZSBgc3Vicm91dGVgLCBhbmQgd2hlbiBpdFxubWF0Y2hlcywgaXQgcHJvZHVjZXMgYW4gb2JqZWN0IGNhbGxlZCBgc3Vicm91dGVEYXRhYCBmcm9tIGl0cyBgZGF0YWAuXG5cblNvLCB3aGVuIGByb3V0ZS5wYXRoYCBpcyBgJy9hYm91dCdgLCB0aGUgYHJvdXRlRGF0YWAgb2JqZWN0IHdpbGwgbG9vayBsaWtlXG50aGlzOiBgeyBwYWdlOiAnYWJvdXQnIH1gXG5cbkFuZCBgc3Vicm91dGVEYXRhYCB3aWxsIGJlIG51bGwuIEhvd2V2ZXIsIGlmIGByb3V0ZS5wYXRoYCBjaGFuZ2VzIHRvXG5gJy9hcnRpY2xlLzEyMydgLCB0aGUgYHJvdXRlRGF0YWAgb2JqZWN0IHdpbGwgbG9vayBsaWtlIHRoaXM6XG5geyBwYWdlOiAnYXJ0aWNsZScgfWBcblxuQW5kIHRoZSBgc3Vicm91dGVEYXRhYCB3aWxsIGxvb2sgbGlrZSB0aGlzOiBgeyBpZDogJzEyMycgfWBcblxuYGFwcC1yb3V0ZWAgaXMgcmVzcG9uc2l2ZSB0byBiaS1kaXJlY3Rpb25hbCBjaGFuZ2VzIHRvIHRoZSBgZGF0YWAgb2JqZWN0c1xudGhleSBwcm9kdWNlLiBTbywgaWYgYHJvdXRlRGF0YS5wYWdlYCBjaGFuZ2VkIGZyb20gYCdhcnRpY2xlJ2AgdG8gYCdhYm91dCdgLFxudGhlIGBhcHAtcm91dGVgIHdpbGwgdXBkYXRlIGByb3V0ZS5wYXRoYC4gVGhpcyBpbi10dXJuIHdpbGwgdXBkYXRlIHRoZVxuYGFwcC1sb2NhdGlvbmAsIGFuZCBjYXVzZSB0aGUgZ2xvYmFsIGxvY2F0aW9uIGJhciB0byBjaGFuZ2UgaXRzIHZhbHVlLlxuXG5AZWxlbWVudCBhcHAtcm91dGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGRlbW8gZGVtby9kYXRhLWxvYWRpbmctZGVtby5odG1sXG5AZGVtbyBkZW1vL3NpbXBsZS1kZW1vLmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdhcHAtcm91dGUnLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIGNvbXBvbmVudCBtYW5hZ2VkIGJ5IHRoaXMgZWxlbWVudC5cbiAgICAgKi9cbiAgICByb3V0ZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGF0dGVybiBvZiBzbGFzaC1zZXBhcmF0ZWQgc2VnbWVudHMgdG8gbWF0Y2ggYHJvdXRlLnBhdGhgIGFnYWluc3QuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSB0aGUgcGF0dGVybiBcIi9mb29cIiB3aWxsIG1hdGNoIFwiL2Zvb1wiIG9yIFwiL2Zvby9iYXJcIlxuICAgICAqIGJ1dCBub3QgXCIvZm9vYmFyXCIuXG4gICAgICpcbiAgICAgKiBQYXRoIHNlZ21lbnRzIGxpa2UgYC86bmFtZWRgIGFyZSBtYXBwZWQgdG8gcHJvcGVydGllcyBvbiB0aGUgYGRhdGFgXG4gICAgICogb2JqZWN0LlxuICAgICAqL1xuICAgIHBhdHRlcm46IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBhcmFtZXRlcml6ZWQgdmFsdWVzIHRoYXQgYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSByb3V0ZSBhc1xuICAgICAqIGRlc2NyaWJlZCBieSBgcGF0dGVybmAuXG4gICAgICovXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGFjdGl2YXRlIHJvdXRlIGlmIHBhdGggZW1wdHlcbiAgICAgKi9cbiAgICBhdXRvQWN0aXZhdGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfSxcblxuICAgIF9xdWVyeVBhcmFtc1VwZGF0aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P09iamVjdH1cbiAgICAgKi9cbiAgICBxdWVyeVBhcmFtczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGFydCBvZiBgcm91dGUucGF0aGAgTk9UIGNvbnN1bWVkIGJ5IGBwYXR0ZXJuYC5cbiAgICAgKi9cbiAgICB0YWlsOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcGF0aDogbnVsbCxcbiAgICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgICAgX19xdWVyeVBhcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcm91dGUgaXMgYWN0aXZlLiBUcnVlIGlmIGByb3V0ZS5wYXRoYCBtYXRjaGVzIHRoZVxuICAgICAqIGBwYXR0ZXJuYCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7P3N0cmluZ31cbiAgICAgKi9cbiAgICBfbWF0Y2hlZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgIH1cbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX190cnlUb01hdGNoKHJvdXRlLnBhdGgsIHBhdHRlcm4pJyxcbiAgICAnX191cGRhdGVQYXRoT25EYXRhQ2hhbmdlKGRhdGEuKiknLFxuICAgICdfX3RhaWxQYXRoQ2hhbmdlZCh0YWlsLnBhdGgpJyxcbiAgICAnX19yb3V0ZVF1ZXJ5UGFyYW1zQ2hhbmdlZChyb3V0ZS5fX3F1ZXJ5UGFyYW1zKScsXG4gICAgJ19fdGFpbFF1ZXJ5UGFyYW1zQ2hhbmdlZCh0YWlsLl9fcXVlcnlQYXJhbXMpJyxcbiAgICAnX19xdWVyeVBhcmFtc0NoYW5nZWQocXVlcnlQYXJhbXMuKiknXG4gIF0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5saW5rUGF0aHMoJ3JvdXRlLl9fcXVlcnlQYXJhbXMnLCAndGFpbC5fX3F1ZXJ5UGFyYW1zJyk7XG4gICAgdGhpcy5saW5rUGF0aHMoJ3RhaWwuX19xdWVyeVBhcmFtcycsICdyb3V0ZS5fX3F1ZXJ5UGFyYW1zJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlYWwgd2l0aCB0aGUgcXVlcnkgcGFyYW1zIG9iamVjdCBiZWluZyBhc3NpZ25lZCB0byB3aG9sZXNhbGUuXG4gICAqL1xuICBfX3JvdXRlUXVlcnlQYXJhbXNDaGFuZ2VkOiBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgIGlmIChxdWVyeVBhcmFtcyAmJiB0aGlzLnRhaWwpIHtcbiAgICAgIGlmICh0aGlzLnRhaWwuX19xdWVyeVBhcmFtcyAhPT0gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5zZXQoJ3RhaWwuX19xdWVyeVBhcmFtcycsIHF1ZXJ5UGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gQ29weSBxdWVyeVBhcmFtcyBhbmQgdHJhY2sgd2hldGhlciB0aGVyZSBhcmUgYW55IGRpZmZlcmVuY2VzIGNvbXBhcmVkXG4gICAgICAvLyB0byB0aGUgZXhpc3RpbmcgcXVlcnkgcGFyYW1zLlxuICAgICAgdmFyIGNvcHlPZlF1ZXJ5UGFyYW1zID0ge307XG4gICAgICB2YXIgYW55dGhpbmdDaGFuZ2VkID0gZmFsc2U7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcXVlcnlQYXJhbXMpIHtcbiAgICAgICAgY29weU9mUXVlcnlQYXJhbXNba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgIGlmIChhbnl0aGluZ0NoYW5nZWQgfHwgIXRoaXMucXVlcnlQYXJhbXMgfHxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gIT09IHRoaXMucXVlcnlQYXJhbXNba2V5XSkge1xuICAgICAgICAgIGFueXRoaW5nQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIE5lZWQgdG8gY2hlY2sgd2hldGhlciBhbnkga2V5cyB3ZXJlIGRlbGV0ZWRcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIGlmIChhbnl0aGluZ0NoYW5nZWQgfHwgIShrZXkgaW4gcXVlcnlQYXJhbXMpKSB7XG4gICAgICAgICAgYW55dGhpbmdDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWFueXRoaW5nQ2hhbmdlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0KCdxdWVyeVBhcmFtcycsIGNvcHlPZlF1ZXJ5UGFyYW1zKTtcbiAgICAgIHRoaXMuX3F1ZXJ5UGFyYW1zVXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG5cbiAgX190YWlsUXVlcnlQYXJhbXNDaGFuZ2VkOiBmdW5jdGlvbihxdWVyeVBhcmFtcykge1xuICAgIGlmIChxdWVyeVBhcmFtcyAmJiB0aGlzLnJvdXRlICYmIHRoaXMucm91dGUuX19xdWVyeVBhcmFtcyAhPSBxdWVyeVBhcmFtcykge1xuICAgICAgdGhpcy5zZXQoJ3JvdXRlLl9fcXVlcnlQYXJhbXMnLCBxdWVyeVBhcmFtcyk7XG4gICAgfVxuICB9LFxuXG4gIF9fcXVlcnlQYXJhbXNDaGFuZ2VkOiBmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZSB8fCB0aGlzLl9xdWVyeVBhcmFtc1VwZGF0aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXQoJ3JvdXRlLl9fJyArIGNoYW5nZXMucGF0aCwgY2hhbmdlcy52YWx1ZSk7XG4gIH0sXG5cbiAgX19yZXNldFByb3BlcnRpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5fbWF0Y2hlZCA9IG51bGw7XG4gIH0sXG5cbiAgX190cnlUb01hdGNoOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucm91dGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IHRoaXMucm91dGUucGF0aDtcbiAgICB2YXIgcGF0dGVybiA9IHRoaXMucGF0dGVybjtcblxuICAgIGlmICh0aGlzLmF1dG9BY3RpdmF0ZSAmJiBwYXRoID09PSAnJykge1xuICAgICAgcGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBpZiAoIXBhdHRlcm4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXBhdGgpIHtcbiAgICAgIHRoaXMuX19yZXNldFByb3BlcnRpZXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcmVtYWluaW5nUGllY2VzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgIHZhciBwYXR0ZXJuUGllY2VzID0gcGF0dGVybi5zcGxpdCgnLycpO1xuXG4gICAgdmFyIG1hdGNoZWQgPSBbXTtcbiAgICB2YXIgbmFtZWRNYXRjaGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdHRlcm5QaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXR0ZXJuUGllY2UgPSBwYXR0ZXJuUGllY2VzW2ldO1xuICAgICAgaWYgKCFwYXR0ZXJuUGllY2UgJiYgcGF0dGVyblBpZWNlICE9PSAnJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciBwYXRoUGllY2UgPSByZW1haW5pbmdQaWVjZXMuc2hpZnQoKTtcblxuICAgICAgLy8gV2UgZG9uJ3QgbWF0Y2ggdGhpcyBwYXRoLlxuICAgICAgaWYgKCFwYXRoUGllY2UgJiYgcGF0aFBpZWNlICE9PSAnJykge1xuICAgICAgICB0aGlzLl9fcmVzZXRQcm9wZXJ0aWVzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG1hdGNoZWQucHVzaChwYXRoUGllY2UpO1xuXG4gICAgICBpZiAocGF0dGVyblBpZWNlLmNoYXJBdCgwKSA9PSAnOicpIHtcbiAgICAgICAgbmFtZWRNYXRjaGVzW3BhdHRlcm5QaWVjZS5zbGljZSgxKV0gPSBwYXRoUGllY2U7XG4gICAgICB9IGVsc2UgaWYgKHBhdHRlcm5QaWVjZSAhPT0gcGF0aFBpZWNlKSB7XG4gICAgICAgIHRoaXMuX19yZXNldFByb3BlcnRpZXMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX21hdGNoZWQgPSBtYXRjaGVkLmpvaW4oJy8nKTtcblxuICAgIC8vIFByb3BlcnRpZXMgdGhhdCBtdXN0IGJlIHVwZGF0ZWQgYXRvbWljYWxseS5cbiAgICB2YXIgcHJvcGVydHlVcGRhdGVzID0ge307XG5cbiAgICAvLyB0aGlzLmFjdGl2ZVxuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgIHByb3BlcnR5VXBkYXRlcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIHRoaXMudGFpbFxuICAgIHZhciB0YWlsUHJlZml4ID0gdGhpcy5yb3V0ZS5wcmVmaXggKyB0aGlzLl9tYXRjaGVkO1xuICAgIHZhciB0YWlsUGF0aCA9IHJlbWFpbmluZ1BpZWNlcy5qb2luKCcvJyk7XG4gICAgaWYgKHJlbWFpbmluZ1BpZWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0YWlsUGF0aCA9ICcvJyArIHRhaWxQYXRoO1xuICAgIH1cbiAgICBpZiAoIXRoaXMudGFpbCB8fCB0aGlzLnRhaWwucHJlZml4ICE9PSB0YWlsUHJlZml4IHx8XG4gICAgICAgIHRoaXMudGFpbC5wYXRoICE9PSB0YWlsUGF0aCkge1xuICAgICAgcHJvcGVydHlVcGRhdGVzLnRhaWwgPSB7XG4gICAgICAgIHByZWZpeDogdGFpbFByZWZpeCxcbiAgICAgICAgcGF0aDogdGFpbFBhdGgsXG4gICAgICAgIF9fcXVlcnlQYXJhbXM6IHRoaXMucm91dGUuX19xdWVyeVBhcmFtc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmRhdGFcbiAgICBwcm9wZXJ0eVVwZGF0ZXMuZGF0YSA9IG5hbWVkTWF0Y2hlcztcbiAgICB0aGlzLl9kYXRhSW5VcmwgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmFtZWRNYXRjaGVzKSB7XG4gICAgICB0aGlzLl9kYXRhSW5Vcmxba2V5XSA9IG5hbWVkTWF0Y2hlc1trZXldO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldFByb3BlcnRpZXMpIHtcbiAgICAgIC8vIGF0b21pYyB1cGRhdGVcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wZXJ0eVVwZGF0ZXMsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9fc2V0TXVsdGkocHJvcGVydHlVcGRhdGVzKTtcbiAgICB9XG4gIH0sXG5cbiAgX190YWlsUGF0aENoYW5nZWQ6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0YWlsUGF0aCA9IHBhdGg7XG4gICAgdmFyIG5ld1BhdGggPSB0aGlzLl9tYXRjaGVkO1xuICAgIGlmICh0YWlsUGF0aCkge1xuICAgICAgaWYgKHRhaWxQYXRoLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICAgIHRhaWxQYXRoID0gJy8nICsgdGFpbFBhdGg7XG4gICAgICB9XG4gICAgICBuZXdQYXRoICs9IHRhaWxQYXRoO1xuICAgIH1cbiAgICB0aGlzLnNldCgncm91dGUucGF0aCcsIG5ld1BhdGgpO1xuICB9LFxuXG4gIF9fdXBkYXRlUGF0aE9uRGF0YUNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnJvdXRlIHx8ICF0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbmV3UGF0aCA9IHRoaXMuX19nZXRMaW5rKHt9KTtcbiAgICB2YXIgb2xkUGF0aCA9IHRoaXMuX19nZXRMaW5rKHRoaXMuX2RhdGFJblVybCk7XG4gICAgaWYgKG5ld1BhdGggPT09IG9sZFBhdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXQoJ3JvdXRlLnBhdGgnLCBuZXdQYXRoKTtcbiAgfSxcblxuICBfX2dldExpbms6IGZ1bmN0aW9uKG92ZXJyaWRlVmFsdWVzKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt0YWlsOiBudWxsfTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kYXRhKSB7XG4gICAgICB2YWx1ZXNba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gb3ZlcnJpZGVWYWx1ZXMpIHtcbiAgICAgIHZhbHVlc1trZXldID0gb3ZlcnJpZGVWYWx1ZXNba2V5XTtcbiAgICB9XG4gICAgdmFyIHBhdHRlcm5QaWVjZXMgPSB0aGlzLnBhdHRlcm4uc3BsaXQoJy8nKTtcbiAgICB2YXIgaW50ZXJwID0gcGF0dGVyblBpZWNlcy5tYXAoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZVswXSA9PSAnOicpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZXNbdmFsdWUuc2xpY2UoMSldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sIHRoaXMpO1xuICAgIGlmICh2YWx1ZXMudGFpbCAmJiB2YWx1ZXMudGFpbC5wYXRoKSB7XG4gICAgICBpZiAoaW50ZXJwLmxlbmd0aCA+IDAgJiYgdmFsdWVzLnRhaWwucGF0aC5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgICBpbnRlcnAucHVzaCh2YWx1ZXMudGFpbC5wYXRoLnNsaWNlKDEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVycC5wdXNoKHZhbHVlcy50YWlsLnBhdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW50ZXJwLmpvaW4oJy8nKTtcbiAgfSxcblxuICBfX3NldE11bHRpOiBmdW5jdGlvbihzZXRPYmopIHtcbiAgICAvLyBIQUNLKHJpY3RpYyk6IHNraXJ0aW5nIGFyb3VuZCAxLjAncyBsYWNrIG9mIGEgc2V0TXVsdGkgYnkgcG9raW5nIGF0XG4gICAgLy8gICAgIGludGVybmFsIGRhdGEgc3RydWN0dXJlcy4gSSB3b3VsZCBub3QgYWR2aXNlIHRoYXQgeW91IGNvcHkgdGhpc1xuICAgIC8vICAgICBleGFtcGxlLlxuICAgIC8vXG4gICAgLy8gICAgIEluIHRoZSBmdXR1cmUgdGhpcyB3aWxsIGJlIGEgZmVhdHVyZSBvZiBQb2x5bWVyIGl0c2VsZi5cbiAgICAvLyAgICAgU2VlOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy8zNjQwXG4gICAgLy9cbiAgICAvLyAgICAgSGFja2luZyBhcm91bmQgd2l0aCBwcml2YXRlIG1ldGhvZHMgbGlrZSB0aGlzIGlzIGp1Z2dsaW5nIGZvb3RndW5zLFxuICAgIC8vICAgICBhbmQgaXMgbGlrZWx5IHRvIGhhdmUgdW5leHBlY3RlZCBhbmQgdW5zdXBwb3J0ZWQgcm91Z2ggZWRnZXMuXG4gICAgLy9cbiAgICAvLyAgICAgQmUgeWUgc28gd2FybmVkLlxuICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNldE9iaikge1xuICAgICAgdGhpcy5fcHJvcGVydHlTZXR0ZXIocHJvcGVydHksIHNldE9ialtwcm9wZXJ0eV0pO1xuICAgIH1cbiAgICAvLyBub3RpZnkgaW4gYSBzcGVjaWZpYyBvcmRlclxuICAgIGlmIChzZXRPYmouZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYXRoRWZmZWN0b3IoJ2RhdGEnLCB0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCdkYXRhJyk7XG4gICAgfVxuICAgIGlmIChzZXRPYmouYWN0aXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BhdGhFZmZlY3RvcignYWN0aXZlJywgdGhpcy5hY3RpdmUpO1xuICAgICAgdGhpcy5fbm90aWZ5Q2hhbmdlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgaWYgKHNldE9iai50YWlsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BhdGhFZmZlY3RvcigndGFpbCcsIHRoaXMudGFpbCk7XG4gICAgICB0aGlzLl9ub3RpZnlDaGFuZ2UoJ3RhaWwnKTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0VBO0FBQ0E7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBVEE7QUFDQTtBQVdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBdEZBO0FBNEZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFsVkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==